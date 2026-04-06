import Phaser from 'phaser';
import { TILE_SIZE } from '../constants';
import { DINER_MAP, COLLISION_TILES } from '../tilemap/DinerMapData';
import { Character } from '../characters/Character';
import { createChef, createCustomers } from '../characters/CharacterFactory';
import { LightingManager } from '../lighting/LightingManager';

export class DinerScene extends Phaser.Scene {
  private characters: Character[] = [];

  constructor() {
    super({ key: 'DinerScene' });
  }

  create(): void {
    this.buildTilemap();
    this.spawnCharacters();
    // Lighting overlay — creates game objects internally, no need to store reference
    new LightingManager(this);
  }

  update(_time: number, delta: number): void {
    for (const char of this.characters) {
      char.update(delta);
    }
  }

  private buildTilemap(): void {
    const map = this.make.tilemap({
      data: DINER_MAP,
      tileWidth: TILE_SIZE,
      tileHeight: TILE_SIZE,
    });

    const tileset = map.addTilesetImage(
      'diner-tileset',  // tileset name in map
      'diner-tileset',  // texture key
      TILE_SIZE,
      TILE_SIZE,
    );

    if (!tileset) return;

    const layer = map.createLayer(0, tileset, 0, 0);
    if (!layer) return;

    layer.setDepth(0);
    layer.setCollision(COLLISION_TILES);
  }

  private spawnCharacters(): void {
    const chef = createChef(this);
    const customers = createCustomers(this);
    this.characters = [chef, ...customers];
  }
}
