import Phaser from 'phaser';
import {
  TILE_SIZE,
  CHARACTER_SPEED,
  CHARACTER_FRAME_SIZE,
  DEFAULT_ANIMATION_FRAMERATE,
} from '../constants';
import { Direction, AnimState } from './types';
import type { Waypoint, CharacterConfig } from './types';

const WALK_FRAMES = 4;
const DIRECTIONS = 4;

/**
 * Character uses composition — owns a Sprite rather than extending one.
 * Supports waypoint-based movement, direction detection, and idle/walk/sit states.
 */
export class Character {
  readonly key: string;
  readonly name: string;
  readonly role: CharacterConfig['role'];

  private sprite: Phaser.GameObjects.Sprite;
  private sitSprite: Phaser.GameObjects.Sprite;
  private scene: Phaser.Scene;
  private state: AnimState = AnimState.IDLE;
  private direction: Direction;
  private waypoints: Waypoint[];
  private waypointIndex = 0;
  private targetX = 0;
  private targetY = 0;
  private pauseTimer = 0;
  private moving = false;

  constructor(scene: Phaser.Scene, config: CharacterConfig) {
    this.scene = scene;
    this.key = config.key;
    this.name = config.name;
    this.role = config.role;
    this.direction = config.startDirection;
    this.waypoints = config.waypoints ?? [];

    const px = config.startTileX * TILE_SIZE + TILE_SIZE / 2;
    const py = config.startTileY * TILE_SIZE + TILE_SIZE / 2;

    this.createAnimations();

    this.sprite = scene.add.sprite(px, py, config.key);
    this.sprite.setOrigin(0.5, 0.5);
    this.sprite.setDepth(py);
    this.playAnim(AnimState.IDLE);

    this.sitSprite = scene.add.sprite(px, py, `${config.key}-sit`);
    this.sitSprite.setOrigin(0.5, 0.5);
    this.sitSprite.setVisible(false);

    this.targetX = px;
    this.targetY = py;

    if (this.waypoints.length > 0) {
      this.advanceWaypoint();
    }
  }

  update(delta: number): void {
    if (this.state === AnimState.SIT) return;

    if (this.pauseTimer > 0) {
      this.pauseTimer -= delta;
      return;
    }

    if (!this.moving) {
      if (this.waypointIndex < this.waypoints.length) {
        this.advanceWaypoint();
      }
      return;
    }

    const speed = CHARACTER_SPEED * (delta / 1000);
    const dx = this.targetX - this.sprite.x;
    const dy = this.targetY - this.sprite.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= speed) {
      this.sprite.setPosition(this.targetX, this.targetY);
      this.sprite.setDepth(this.targetY);
      this.moving = false;

      const wp = this.waypoints[this.waypointIndex - 1];
      if (wp?.sit) {
        this.enterSit();
        return;
      }
      if (wp?.facing !== undefined) {
        this.direction = wp.facing;
      }
      this.pauseTimer = wp?.pause ?? 0;
      this.playAnim(AnimState.IDLE);
      return;
    }

    // Move toward target
    const nx = (dx / dist) * speed;
    const ny = (dy / dist) * speed;
    this.sprite.x += nx;
    this.sprite.y += ny;
    this.sprite.setDepth(this.sprite.y);

    // Update direction based on dominant axis
    if (Math.abs(dx) > Math.abs(dy)) {
      this.direction = dx > 0 ? Direction.RIGHT : Direction.LEFT;
    } else {
      this.direction = dy > 0 ? Direction.DOWN : Direction.UP;
    }

    if (this.state !== AnimState.WALK) {
      this.playAnim(AnimState.WALK);
    } else {
      // Update animation direction without restarting
      const animKey = `${this.key}-walk-${this.direction}`;
      if (this.sprite.anims.currentAnim?.key !== animKey) {
        this.sprite.play(animKey, true);
      }
    }
  }

  getSprite(): Phaser.GameObjects.Sprite {
    return this.sprite;
  }

  private advanceWaypoint(): void {
    if (this.waypointIndex >= this.waypoints.length) return;
    const wp = this.waypoints[this.waypointIndex];
    this.waypointIndex++;
    this.targetX = wp.x * TILE_SIZE + TILE_SIZE / 2;
    this.targetY = wp.y * TILE_SIZE + TILE_SIZE / 2;
    this.moving = true;
    this.playAnim(AnimState.WALK);
  }

  private enterSit(): void {
    this.state = AnimState.SIT;
    this.sprite.setVisible(false);
    this.sitSprite.setPosition(this.sprite.x, this.sprite.y);
    this.sitSprite.setDepth(this.sprite.y);
    this.sitSprite.setVisible(true);
  }

  private playAnim(state: AnimState): void {
    this.state = state;
    if (state === AnimState.SIT) return;
    const animKey = `${this.key}-${state}-${this.direction}`;
    if (this.sprite.anims.animationManager.exists(animKey)) {
      this.sprite.play(animKey, true);
    }
  }

  private createAnimations(): void {
    const frameW = CHARACTER_FRAME_SIZE;
    const frameH = CHARACTER_FRAME_SIZE;

    for (let dir = 0; dir < DIRECTIONS; dir++) {
      // Walk animation (4 frames)
      const walkFrames: Phaser.Types.Animations.AnimationFrame[] = [];
      for (let f = 0; f < WALK_FRAMES; f++) {
        walkFrames.push({
          key: this.key,
          frame: dir * WALK_FRAMES + f,
        });
      }
      this.scene.anims.create({
        key: `${this.key}-walk-${dir}`,
        frames: walkFrames,
        frameRate: DEFAULT_ANIMATION_FRAMERATE,
        repeat: -1,
      });

      // Idle (first frame of direction)
      this.scene.anims.create({
        key: `${this.key}-idle-${dir}`,
        frames: [{ key: this.key, frame: dir * WALK_FRAMES }],
        frameRate: 1,
        repeat: 0,
      });
    }

    // Spritesheet frame config — tell Phaser how to slice the texture
    if (!this.scene.textures.get(this.key).has('0')) {
      const tex = this.scene.textures.get(this.key);
      for (let dir = 0; dir < DIRECTIONS; dir++) {
        for (let f = 0; f < WALK_FRAMES; f++) {
          tex.add(
            String(dir * WALK_FRAMES + f),
            0,
            f * frameW,
            dir * frameH,
            frameW,
            frameH,
          );
        }
      }
    }
  }
}
