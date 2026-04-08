import type { DinerScene } from '../scenes/DinerScene';
import type {
  Action,
  BgmAction,
  CameraAction,
  DialogueAction,
  EmoteAction,
  EnterAction,
  Episode,
  MarketDataAction,
  MoveAction,
  NarrationAction,
  SfxAction,
  SitAction,
  WaitAction,
} from './types';
import { PlayerState } from './types';
import { eventBus } from './EventBus';
import { Direction } from '../characters/types';
import { WalkableGrid } from '../navigation/WalkableGrid';
import { Pathfinder } from '../navigation/Pathfinder';
import { resolveLocation, resetOccupiedStools } from '../navigation/LocationMap';
import { audioManager } from '../audio/AudioManager';
import type { BgmKey, SfxKey } from '../audio/AudioManager';
import {
  GAME_SCALE,
  TIMELINE_TICK_MS,
  TYPEWRITER_SPEED,
  DIALOGUE_BASE_DURATION,
  EMOTE_DEFAULT_DURATION,
  NARRATION_DEFAULT_DURATION,
  CAMERA_SHAKE_DEFAULT_DURATION,
  CAMERA_SHAKE_DEFAULT_INTENSITY,
} from '../constants';

/** Character presets for enter actions. Maps character key → spawn config. */
const CHARACTER_PRESETS: Record<string, { name: string; role: 'chef' | 'customer' }> = {
  'chef': { name: 'Master', role: 'chef' },
  'customer-a': { name: 'Customer A', role: 'customer' },
  'customer-b': { name: 'Customer B', role: 'customer' },
};

/**
 * TimelinePlayer — core sequencer that reads Episode JSON and drives the scene.
 * Uses async/await for sequential action execution with Promise-based pause.
 */
export class TimelinePlayer {
  private scene: DinerScene;
  private state: PlayerState = PlayerState.IDLE;
  private actionIndex = 0;
  private generation = 0; // incremented on stop to invalidate stale promises
  private pauseResolver: (() => void) | null = null;

  private walkableGrid = new WalkableGrid();
  private pathfinder = new Pathfinder(this.walkableGrid);

  constructor(scene: DinerScene) {
    this.scene = scene;
  }

  async play(episode: Episode): Promise<void> {
    this.stop();
    this.state = PlayerState.PLAYING;
    this.actionIndex = 0;
    const gen = ++this.generation;
    resetOccupiedStools();

    eventBus.emit('timeline:started', { episodeId: episode.id });

    for (const action of episode.actions) {
      if (gen !== this.generation) return; // stopped

      if (this.isPaused()) {
        await this.waitForResume(gen);
        if (gen !== this.generation) return;
      }

      if (action.delay) {
        await this.waitMs(action.delay, gen);
        if (gen !== this.generation) return;
      }

      eventBus.emit('timeline:action', { action, index: this.actionIndex });
      await this.executeAction(action, gen);
      this.actionIndex++;
    }

    if (gen === this.generation) {
      this.state = PlayerState.FINISHED;
      eventBus.emit('timeline:finished', { episodeId: episode.id });
    }
  }

  pause(): void {
    if (this.state !== PlayerState.PLAYING) return;
    this.state = PlayerState.PAUSED;
    eventBus.emit('timeline:paused');
  }

  resume(): void {
    if (this.state !== PlayerState.PAUSED) return;
    this.state = PlayerState.PLAYING;
    eventBus.emit('timeline:resumed');
    if (this.pauseResolver) {
      this.pauseResolver();
      this.pauseResolver = null;
    }
  }

  stop(): void {
    this.state = PlayerState.IDLE;
    this.generation++;
    if (this.pauseResolver) {
      this.pauseResolver();
      this.pauseResolver = null;
    }
  }

  getState(): PlayerState {
    return this.state;
  }

  getCurrentActionIndex(): number {
    return this.actionIndex;
  }

  // ── Action dispatch ─────────────────────────────────────────

  private async executeAction(action: Action, gen: number): Promise<void> {
    switch (action.type) {
      case 'enter':
        return this.executeEnter(action, gen);
      case 'move':
        return this.executeMove(action, gen);
      case 'sit':
        return this.executeSit(action);
      case 'dialogue':
        return this.executeDialogue(action, gen);
      case 'wait':
        return this.executeWait(action, gen);
      case 'emote':
        return this.executeEmote(action, gen);
      case 'camera':
        return this.executeCamera(action, gen);
      case 'narration':
        return this.executeNarration(action, gen);
      case 'market-data':
        return this.executeMarketData(action, gen);
      case 'bgm':
        return this.executeBgm(action);
      case 'sfx':
        return this.executeSfx(action);
    }
  }

  private async executeEnter(action: EnterAction, _gen: number): Promise<void> {
    const preset = CHARACTER_PRESETS[action.character];
    if (!preset) return;

    const target = resolveLocation(action.toTile);
    const startDirection = action.facing ?? target.facing ?? Direction.DOWN;
    this.scene.spawnCharacter({
      key: action.character,
      name: preset.name,
      role: preset.role,
      startTileX: target.x,
      startTileY: target.y,
      startDirection,
      waypoints: [],
    });
  }

  private async executeMove(action: MoveAction, gen: number): Promise<void> {
    const char = this.scene.getCharacter(action.character);
    if (!char) return;

    const target = resolveLocation(action.toTile);
    const from = char.getTilePosition();
    const preset = CHARACTER_PRESETS[action.character];
    const role = preset?.role;

    const path = this.pathfinder.findPath(from.x, from.y, target.x, target.y, role);

    if (path && path.length > 0) {
      char.moveAlongPath(path, { facing: target.facing });
    } else {
      // Fallback: direct movement
      char.moveTo({ x: target.x, y: target.y }, { facing: target.facing });
    }

    await this.waitForMovementComplete(action.character, gen);
  }

  private async executeSit(action: SitAction): Promise<void> {
    const char = this.scene.getCharacter(action.character);
    if (!char) return;
    char.sit(action.facing);
  }

  private async executeDialogue(action: DialogueAction, gen: number): Promise<void> {
    const duration =
      action.duration ?? action.text.length * TYPEWRITER_SPEED + DIALOGUE_BASE_DURATION;

    const char = this.scene.getCharacter(action.character);
    const sprite = char?.getSprite();
    const screenX = sprite ? sprite.x * GAME_SCALE : 0;
    const screenY = sprite ? (sprite.y - sprite.height / 2) * GAME_SCALE : 0;
    eventBus.emit('dialogue:show', {
      character: action.character,
      text: action.text,
      screenX,
      screenY,
    });
    await this.waitMs(duration, gen);
    if (gen === this.generation) {
      eventBus.emit('dialogue:hide');
    }
  }

  private async executeWait(action: WaitAction, gen: number): Promise<void> {
    await this.waitMs(action.duration, gen);
  }

  private async executeEmote(action: EmoteAction, gen: number): Promise<void> {
    const duration = action.duration ?? EMOTE_DEFAULT_DURATION;
    eventBus.emit('emote:show', { character: action.character, emote: action.emote });
    await this.waitMs(duration, gen);
    if (gen === this.generation) {
      eventBus.emit('emote:hide', { character: action.character });
    }
  }

  private async executeCamera(action: CameraAction, gen: number): Promise<void> {
    const cam = this.scene.cameras.main;
    const duration = action.duration ?? CAMERA_SHAKE_DEFAULT_DURATION;

    switch (action.effect) {
      case 'shake':
        cam.shake(duration, (action.intensity ?? CAMERA_SHAKE_DEFAULT_INTENSITY) / 1000);
        break;
      case 'fade-in':
        cam.fadeIn(duration);
        break;
      case 'fade-out':
        cam.fadeOut(duration);
        break;
      case 'flash':
        cam.flash(duration);
        break;
    }

    await this.waitMs(duration, gen);
  }

  private async executeNarration(action: NarrationAction, gen: number): Promise<void> {
    const duration = action.duration ?? NARRATION_DEFAULT_DURATION;
    eventBus.emit('narration:show', { text: action.text });
    await this.waitMs(duration, gen);
    if (gen === this.generation) {
      eventBus.emit('narration:hide');
    }
  }

  private async executeMarketData(action: MarketDataAction, gen: number): Promise<void> {
    eventBus.emit('market:update', action.data);
    if (action.duration) {
      await this.waitMs(action.duration, gen);
    }
  }

  private async executeBgm(action: BgmAction): Promise<void> {
    if (action.command === 'play') {
      audioManager.playBgm(action.track as BgmKey, action.fade !== false);
    } else {
      audioManager.stopBgm(action.fade !== false);
    }
  }

  private async executeSfx(action: SfxAction): Promise<void> {
    audioManager.playSfx(action.sound as SfxKey);
  }

  /** Indirection avoids TS narrowing issues — state can change externally. */
  private isPaused(): boolean {
    return this.state === PlayerState.PAUSED;
  }

  // ── Helpers ─────────────────────────────────────────────────

  private waitMs(ms: number, gen: number): Promise<void> {
    return new Promise((resolve) => {
      if (gen !== this.generation) {
        resolve();
        return;
      }
      this.scene.time.delayedCall(ms, () => resolve());
    });
  }

  private waitForMovementComplete(characterKey: string, gen: number): Promise<void> {
    return new Promise((resolve) => {
      const check = (): void => {
        if (gen !== this.generation) {
          resolve();
          return;
        }
        const char = this.scene.getCharacter(characterKey);
        if (!char || !char.isMoving()) {
          resolve();
          return;
        }
        this.scene.time.delayedCall(TIMELINE_TICK_MS, check);
      };
      check();
    });
  }

  private waitForResume(gen: number): Promise<void> {
    return new Promise((resolve) => {
      if (gen !== this.generation) {
        resolve();
        return;
      }
      this.pauseResolver = resolve;
    });
  }
}
