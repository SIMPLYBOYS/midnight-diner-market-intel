import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT } from '../constants';
import { Character } from '../characters/Character';
import { DialogueManager } from '../dialogue/DialogueManager';
import { TimelinePlayer } from '../engine/TimelinePlayer';
import { JsonDataSource } from '../datasource/JsonDataSource';
import { ALL_EPISODES } from '../assets/episodes';
import { eventBus } from '../engine/EventBus';
import type { CharacterConfig } from '../characters/types';

export class DinerScene extends Phaser.Scene {
  private characterMap = new Map<string, Character>();
  private timelinePlayer!: TimelinePlayer;
  private dialogueManager!: DialogueManager;
  private dataSource!: JsonDataSource;

  constructor() {
    super({ key: 'DinerScene' });
  }

  create(): void {
    // Background image (replaces tilemap for high-quality visuals)
    const bg = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'diner-bg');
    bg.setDisplaySize(GAME_WIDTH, GAME_HEIGHT);
    bg.setDepth(0);

    this.timelinePlayer = new TimelinePlayer(this);
    this.dialogueManager = new DialogueManager(this);
    this.dataSource = new JsonDataSource(ALL_EPISODES);

    // Listen for episode selection from React UI
    eventBus.on('episode:select', this.onEpisodeSelect.bind(this));

    // Auto-play first episode
    this.playEpisode(ALL_EPISODES[0].id);
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

  private onEpisodeSelect({ episodeId }: { episodeId: string }): void {
    this.playEpisode(episodeId);
  }

  private playEpisode(episodeId: string): void {
    // Stop current playback and clear characters
    this.timelinePlayer.stop();
    for (const char of this.characterMap.values()) {
      char.destroy();
    }
    this.characterMap.clear();

    // Hide any lingering dialogue/narration
    eventBus.emit('dialogue:hide');
    eventBus.emit('narration:hide');

    this.dataSource.getEpisode(episodeId).then((episode) => {
      this.timelinePlayer.play(episode);
    });
  }

  destroy(): void {
    eventBus.off('episode:select', this.onEpisodeSelect.bind(this));
  }
}
