import Phaser from 'phaser';
import { TILE_SIZE } from '../constants';
import { DINER_MAP, COLLISION_TILES } from '../tilemap/DinerMapData';
import { Character } from '../characters/Character';
import { LightingManager } from '../lighting/LightingManager';
import { TimelinePlayer } from '../engine/TimelinePlayer';
import { JsonDataSource } from '../datasource/JsonDataSource';
import { EPISODE_01 } from '../assets/episodes/episode01';
import type { CharacterConfig } from '../characters/types';

export class DinerScene extends Phaser.Scene {
  private characterMap = new Map<string, Character>();
  private timelinePlayer!: TimelinePlayer;

  constructor() {
    super({ key: 'DinerScene' });
  }

  create(): void {
    this.buildTilemap();

    this.timelinePlayer = new TimelinePlayer(this);

    // Lighting overlay
    new LightingManager(this);

    // Load and play the first episode
    const dataSource = new JsonDataSource([EPISODE_01]);
    dataSource.getEpisode(EPISODE_01.id).then((episode) => {
      this.timelinePlayer.play(episode);
    });
  }

  update(_time: number, delta: number): void {
    for (const char of this.characterMap.values()) {
      char.update(delta);
    }
  }

  /** Look up a character by key. */
  getCharacter(key: string): Character | undefined {
    return this.characterMap.get(key);
  }

  /** Spawn a character into the scene and register it. */
  spawnCharacter(config: CharacterConfig): Character {
    const existing = this.characterMap.get(config.key);
    if (existing) return existing;
    const char = new Character(this, config);
    this.characterMap.set(config.key, char);
    return char;
  }

  private buildTilemap(): void {
    const map = this.make.tilemap({
      data: DINER_MAP,
      tileWidth: TILE_SIZE,
      tileHeight: TILE_SIZE,
    });

    const tileset = map.addTilesetImage(
      'diner-tileset',
      'diner-tileset',
      TILE_SIZE,
      TILE_SIZE,
    );

    if (!tileset) return;

    const layer = map.createLayer(0, tileset, 0, 0);
    if (!layer) return;

    layer.setDepth(0);
    layer.setCollision(COLLISION_TILES);
  }
}
