import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT } from '../constants';
import { Character } from '../characters/Character';
import { DialogueManager } from '../dialogue/DialogueManager';
import { TimelinePlayer } from '../engine/TimelinePlayer';
import type { DataSource } from '../datasource/interface';
import { LazyEpisodeDataSource } from '../datasource/LazyEpisodeDataSource';
import { enrichEpisodeWithLivePolymarket, isLiveMode } from '../datasource/livePolymarket';
import { enrichEpisodeWithLiveBinance } from '../datasource/liveBinanceTickers';
import { LATEST_EPISODE_ID } from '../assets/episodes';
import { eventBus } from '../engine/EventBus';
import { audioManager } from '../audio/AudioManager';
import type { CharacterConfig } from '../characters/types';

export class DinerScene extends Phaser.Scene {
  private characterMap = new Map<string, Character>();
  private timelinePlayer!: TimelinePlayer;
  private dialogueManager!: DialogueManager;
  private dataSource!: DataSource;
  private currentEpisodeId: string | null = null;
  private liveFetchAbort: AbortController | null = null;
  private cleanedUp = false;

  // Stable handler references — class-field arrows are bound to the instance
  // so eventBus.off() in cleanup() removes the exact listeners create() added.
  // (inline arrows / .bind() create fresh refs that off() can never match.)
  private onEpisodeSelect = ({ episodeId }: { episodeId: string }): void => {
    this.playEpisode(episodeId);
  };
  private onPause = (): void => this.timelinePlayer.pause();
  private onResume = (): void => this.timelinePlayer.resume();
  private onRestart = (): void => {
    if (this.currentEpisodeId) this.playEpisode(this.currentEpisodeId);
  };
  private onSetManualMode = ({ enabled }: { enabled: boolean }): void =>
    this.timelinePlayer.setManualMode(enabled);
  private onAdvance = (): void => this.timelinePlayer.advance();

  constructor() {
    super({ key: 'DinerScene' });
  }

  create(): void {
    this.cleanedUp = false;

    // Background image (replaces tilemap for high-quality visuals)
    const bg = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'diner-bg');
    bg.setDisplaySize(GAME_WIDTH, GAME_HEIGHT);
    bg.setDepth(0);

    this.timelinePlayer = new TimelinePlayer(this);
    this.dialogueManager = new DialogueManager(this);
    this.dataSource = new LazyEpisodeDataSource();

    // Listen for React UI events
    eventBus.on('episode:select', this.onEpisodeSelect);
    eventBus.on('player:pause', this.onPause);
    eventBus.on('player:resume', this.onResume);
    eventBus.on('player:restart', this.onRestart);
    eventBus.on('player:set-manual-mode', this.onSetManualMode);
    eventBus.on('player:advance', this.onAdvance);

    // Phaser fires SHUTDOWN (scene stop/restart) and DESTROY (game teardown)
    // as events — there is no overridable Scene.destroy() method. Without this,
    // the eventBus listeners above outlive the scene and leak (notably under
    // React StrictMode's mount→unmount→mount in dev).
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, this.cleanup, this);
    this.events.once(Phaser.Scenes.Events.DESTROY, this.cleanup, this);

    // Auto-play the latest episode
    this.playEpisode(LATEST_EPISODE_ID);
  }

  update(_time: number, delta: number): void {
    for (const char of this.characterMap.values()) {
      char.update(delta);
    }
    this.dialogueManager.update();
  }

  getCharacter(key: string): Character | undefined {
    return this.characterMap.get(key);
  }

  spawnCharacter(config: CharacterConfig): Character {
    const existing = this.characterMap.get(config.key);
    if (existing) return existing;
    const char = new Character(this, config);
    this.characterMap.set(config.key, char);
    return char;
  }

  private playEpisode(episodeId: string): void {
    this.currentEpisodeId = episodeId;
    // Stop current playback and clear characters
    this.timelinePlayer.stop();
    for (const char of this.characterMap.values()) {
      char.destroy();
    }
    this.characterMap.clear();

    // Cancel any live Polymarket fetch still in flight for the previous episode.
    this.liveFetchAbort?.abort();
    const abort = new AbortController();
    this.liveFetchAbort = abort;

    // Hide any lingering dialogue/narration and stop BGM
    eventBus.emit('dialogue:hide');
    eventBus.emit('narration:hide');
    audioManager.stopBgm(false);

    this.dataSource
      .getEpisode(episodeId)
      .then((episode) =>
        isLiveMode() ? enrichEpisodeWithLivePolymarket(episode, abort.signal) : episode,
      )
      .then((episode) =>
        isLiveMode() ? enrichEpisodeWithLiveBinance(episode, abort.signal) : episode,
      )
      .then((episode) => {
        // Guard against a newer playEpisode() call arriving while live fetch was in flight.
        if (this.currentEpisodeId !== episodeId) return;
        this.timelinePlayer.play(episode);
      });
  }

  private cleanup(): void {
    if (this.cleanedUp) return; // SHUTDOWN + DESTROY can both fire
    this.cleanedUp = true;

    eventBus.off('episode:select', this.onEpisodeSelect);
    eventBus.off('player:pause', this.onPause);
    eventBus.off('player:resume', this.onResume);
    eventBus.off('player:restart', this.onRestart);
    eventBus.off('player:set-manual-mode', this.onSetManualMode);
    eventBus.off('player:advance', this.onAdvance);

    this.liveFetchAbort?.abort();
    this.timelinePlayer.stop();
    this.dialogueManager.destroy();
  }
}
