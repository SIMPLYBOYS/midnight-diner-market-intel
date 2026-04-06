import Phaser from 'phaser';
import { TILE_SIZE, TILE_COLORS, TileType } from '../constants';

const TILE_COUNT = 8; // one per TileType

/**
 * Generates a placeholder tileset texture at runtime using Phaser Graphics.
 * Call once during BootScene.create(), then use texture key 'diner-tileset'.
 * To swap in real art later, replace with this.load.image('diner-tileset', 'tileset.png').
 */
export function generateTileset(scene: Phaser.Scene): void {
  const gfx = scene.add.graphics();
  const totalWidth = TILE_SIZE * TILE_COUNT;

  for (let i = 0; i < TILE_COUNT; i++) {
    const x = i * TILE_SIZE;
    const color = TILE_COLORS[i] ?? 0x000000;

    // Base fill
    gfx.fillStyle(color, 1);
    gfx.fillRect(x, 0, TILE_SIZE, TILE_SIZE);

    // Per-type decorations
    drawTileDetail(gfx, i, x);
  }

  gfx.generateTexture('diner-tileset', totalWidth, TILE_SIZE);
  gfx.destroy();
}

function drawTileDetail(gfx: Phaser.GameObjects.Graphics, type: number, x: number): void {
  switch (type) {
    case TileType.FLOOR:
      // Subtle wood-grain lines
      gfx.lineStyle(1, 0x332618, 0.4);
      gfx.lineBetween(x + 2, 4, x + 14, 4);
      gfx.lineBetween(x + 4, 10, x + 12, 10);
      break;

    case TileType.WALL:
      // Horizontal plank lines
      gfx.lineStyle(1, 0x4a3328, 0.5);
      gfx.lineBetween(x, 5, x + TILE_SIZE, 5);
      gfx.lineBetween(x, 11, x + TILE_SIZE, 11);
      break;

    case TileType.COUNTER:
      // Top highlight
      gfx.lineStyle(1, 0xc99a2e, 0.6);
      gfx.lineBetween(x, 0, x + TILE_SIZE, 0);
      // Front edge shadow
      gfx.lineStyle(1, 0x6b4f10, 0.5);
      gfx.lineBetween(x, TILE_SIZE - 1, x + TILE_SIZE, TILE_SIZE - 1);
      break;

    case TileType.TABLE:
      // Table edge highlight
      gfx.lineStyle(1, 0x8b5a2b, 0.5);
      gfx.strokeRect(x + 2, 2, TILE_SIZE - 4, TILE_SIZE - 4);
      break;

    case TileType.SEAT:
      // Round seat cushion
      gfx.fillStyle(0xa83829, 0.6);
      gfx.fillCircle(x + TILE_SIZE / 2, TILE_SIZE / 2, 5);
      break;

    case TileType.KITCHEN:
      // Grid pattern for kitchen tiles
      gfx.lineStyle(1, 0x5a5a5a, 0.3);
      gfx.lineBetween(x + TILE_SIZE / 2, 0, x + TILE_SIZE / 2, TILE_SIZE);
      gfx.lineBetween(x, TILE_SIZE / 2, x + TILE_SIZE, TILE_SIZE / 2);
      break;

    case TileType.DOOR:
      // Door frame lines
      gfx.lineStyle(1, 0x1e4d3d, 0.6);
      gfx.strokeRect(x + 3, 1, TILE_SIZE - 6, TILE_SIZE - 2);
      // Doorknob
      gfx.fillStyle(0xd4a017, 1);
      gfx.fillCircle(x + TILE_SIZE - 5, TILE_SIZE / 2, 1.5);
      break;

    case TileType.TV:
      // Screen area
      gfx.fillStyle(0x1a1a2a, 1);
      gfx.fillRect(x + 2, 2, TILE_SIZE - 4, TILE_SIZE - 5);
      // Scanline hint
      gfx.lineStyle(1, 0x3a3a5a, 0.4);
      gfx.lineBetween(x + 2, 6, x + TILE_SIZE - 2, 6);
      break;
  }
}
