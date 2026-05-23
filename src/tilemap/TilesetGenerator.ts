import Phaser from 'phaser';
import { TILE_SIZE, TILE_COLORS, TileType } from '../constants';

const TILE_COUNT = 16;

/**
 * Generates a detailed 32×32 tileset texture at runtime.
 * Each tile is drawn with multiple layers of detail for a warm izakaya feel.
 */
export function generateTileset(scene: Phaser.Scene): void {
  const gfx = scene.add.graphics();
  const totalWidth = TILE_SIZE * TILE_COUNT;

  for (let i = 0; i < TILE_COUNT; i++) {
    const x = i * TILE_SIZE;
    const color = TILE_COLORS[i] ?? 0x000000;

    gfx.fillStyle(color, 1);
    gfx.fillRect(x, 0, TILE_SIZE, TILE_SIZE);
    drawTileDetail(gfx, i, x);
  }

  gfx.generateTexture('diner-tileset', totalWidth, TILE_SIZE);
  gfx.destroy();
}

function drawTileDetail(gfx: Phaser.GameObjects.Graphics, type: number, x: number): void {
  switch (type) {
    case TileType.FLOOR:
      drawWoodFloor(gfx, x);
      break;
    case TileType.FLOOR_DARK:
      drawDarkFloor(gfx, x);
      break;
    case TileType.WALL:
      drawWoodWall(gfx, x);
      break;
    case TileType.WALL_SHELF:
      drawWallShelf(gfx, x);
      break;
    case TileType.WALL_WINDOW:
      drawWallWindow(gfx, x);
      break;
    case TileType.LANTERN_WALL:
      drawLanternWall(gfx, x);
      break;
    case TileType.COUNTER:
      drawCounter(gfx, x);
      break;
    case TileType.COUNTER_FRONT:
      drawCounterFront(gfx, x);
      break;
    case TileType.TABLE:
      drawTable(gfx, x);
      break;
    case TileType.SEAT:
      drawSeat(gfx, x);
      break;
    case TileType.KITCHEN:
      drawKitchen(gfx, x);
      break;
    case TileType.STOVE:
      drawStove(gfx, x);
      break;
    case TileType.DOOR:
      drawDoor(gfx, x);
      break;
    case TileType.NOREN:
      drawNoren(gfx, x);
      break;
    case TileType.TV:
      drawTV(gfx, x);
      break;
    case TileType.MENU_BOARD:
      drawMenuBoard(gfx, x);
      break;
  }
}

function drawWoodFloor(gfx: Phaser.GameObjects.Graphics, x: number): void {
  // Plank lines
  gfx.lineStyle(1, 0x332618, 0.3);
  for (let py = 0; py < 32; py += 8) {
    gfx.lineBetween(x, py, x + 32, py);
  }
  // Knot details
  gfx.fillStyle(0x2a1f14, 0.3);
  gfx.fillCircle(x + 10, 4, 1.5);
  gfx.fillCircle(x + 22, 20, 1);
  // Highlight grain
  gfx.lineStyle(1, 0x4a3a28, 0.2);
  gfx.lineBetween(x + 4, 2, x + 28, 2);
  gfx.lineBetween(x + 6, 18, x + 26, 18);
}

function drawDarkFloor(gfx: Phaser.GameObjects.Graphics, x: number): void {
  gfx.lineStyle(1, 0x1a1410, 0.3);
  for (let py = 0; py < 32; py += 8) {
    gfx.lineBetween(x, py, x + 32, py);
  }
  gfx.fillStyle(0x1a1410, 0.2);
  gfx.fillCircle(x + 8, 12, 1);
  gfx.fillCircle(x + 24, 6, 1);
}

function drawWoodWall(gfx: Phaser.GameObjects.Graphics, x: number): void {
  // Horizontal planks
  gfx.lineStyle(1, 0x3a2a1c, 0.5);
  for (let py = 6; py < 32; py += 8) {
    gfx.lineBetween(x, py, x + 32, py);
  }
  // Vertical seam
  gfx.lineStyle(1, 0x3a2a1c, 0.3);
  gfx.lineBetween(x + 16, 0, x + 16, 32);
  // Top molding
  gfx.fillStyle(0x5c4230, 0.6);
  gfx.fillRect(x, 0, 32, 2);
  // Bottom shadow
  gfx.fillStyle(0x2a1c12, 0.4);
  gfx.fillRect(x, 30, 32, 2);
}

function drawWallShelf(gfx: Phaser.GameObjects.Graphics, x: number): void {
  drawWoodWall(gfx, x);
  // Shelf bracket
  gfx.fillStyle(0x6b4f30, 0.8);
  gfx.fillRect(x + 2, 12, 28, 2);
  // Bottles on shelf
  gfx.fillStyle(0x2a6b3a, 0.8);
  gfx.fillRect(x + 5, 5, 4, 7);
  gfx.fillStyle(0x8b4513, 0.8);
  gfx.fillRect(x + 11, 6, 4, 6);
  gfx.fillStyle(0x4a7a5a, 0.7);
  gfx.fillRect(x + 17, 4, 3, 8);
  gfx.fillStyle(0xaa7744, 0.7);
  gfx.fillRect(x + 22, 6, 4, 6);
  // Bottle tops
  gfx.fillStyle(0x888888, 0.6);
  gfx.fillRect(x + 6, 4, 2, 1);
  gfx.fillRect(x + 12, 5, 2, 1);
  gfx.fillRect(x + 18, 3, 1, 1);
  gfx.fillRect(x + 23, 5, 2, 1);
}

function drawWallWindow(gfx: Phaser.GameObjects.Graphics, x: number): void {
  drawWoodWall(gfx, x);
  // Window frame
  gfx.fillStyle(0x5c4230, 0.9);
  gfx.fillRect(x + 4, 4, 24, 20);
  // Glass (dark blue night sky)
  gfx.fillStyle(0x0e1428, 0.9);
  gfx.fillRect(x + 6, 6, 20, 16);
  // Window cross frame
  gfx.fillStyle(0x5c4230, 0.9);
  gfx.fillRect(x + 15, 6, 2, 16);
  gfx.fillRect(x + 6, 13, 20, 2);
  // City lights outside
  gfx.fillStyle(0xe6a23c, 0.6);
  gfx.fillRect(x + 9, 9, 1, 1);
  gfx.fillRect(x + 20, 8, 1, 1);
  gfx.fillStyle(0x6688aa, 0.4);
  gfx.fillRect(x + 12, 17, 1, 1);
  gfx.fillRect(x + 22, 19, 1, 1);
}

function drawLanternWall(gfx: Phaser.GameObjects.Graphics, x: number): void {
  drawWoodWall(gfx, x);
  // Lantern body (warm orange)
  gfx.fillStyle(0xe6a23c, 0.9);
  gfx.fillRect(x + 11, 8, 10, 14);
  // Lantern top/bottom frame
  gfx.fillStyle(0x8b4513, 0.9);
  gfx.fillRect(x + 10, 7, 12, 2);
  gfx.fillRect(x + 10, 22, 12, 2);
  // Lantern string
  gfx.lineStyle(1, 0x8b4513, 0.8);
  gfx.lineBetween(x + 16, 2, x + 16, 7);
  // Kanji hint on lantern
  gfx.fillStyle(0xcc3322, 0.7);
  gfx.fillRect(x + 14, 12, 4, 6);
  // Warm glow around lantern
  gfx.fillStyle(0xe6a23c, 0.08);
  gfx.fillCircle(x + 16, 16, 14);
}

function drawCounter(gfx: Phaser.GameObjects.Graphics, x: number): void {
  // Counter surface
  gfx.fillStyle(0xa07828, 0.8);
  gfx.fillRect(x, 0, 32, 32);
  // Top highlight
  gfx.fillStyle(0xc99a2e, 0.5);
  gfx.fillRect(x, 0, 32, 3);
  // Wood grain
  gfx.lineStyle(1, 0x7a5a18, 0.3);
  gfx.lineBetween(x + 2, 10, x + 30, 10);
  gfx.lineBetween(x + 4, 20, x + 28, 20);
  // Edge shadow
  gfx.fillStyle(0x5a3a08, 0.4);
  gfx.fillRect(x, 29, 32, 3);
}

function drawCounterFront(gfx: Phaser.GameObjects.Graphics, x: number): void {
  // Front panel
  gfx.fillStyle(0x5a4018, 0.9);
  gfx.fillRect(x, 0, 32, 32);
  // Panel border
  gfx.lineStyle(1, 0x6b5020, 0.5);
  gfx.strokeRect(x + 3, 3, 26, 26);
  // Inner panel detail
  gfx.fillStyle(0x4a3010, 0.4);
  gfx.fillRect(x + 5, 5, 22, 22);
  // Vertical planks
  gfx.lineStyle(1, 0x3a2a10, 0.3);
  gfx.lineBetween(x + 11, 5, x + 11, 27);
  gfx.lineBetween(x + 21, 5, x + 21, 27);
}

function drawTable(gfx: Phaser.GameObjects.Graphics, x: number): void {
  // Table top
  gfx.fillStyle(0x6b4226, 0.9);
  gfx.fillRect(x + 2, 2, 28, 28);
  // Highlight edge
  gfx.fillStyle(0x7b5236, 0.5);
  gfx.fillRect(x + 2, 2, 28, 3);
  // Shadow edge
  gfx.fillStyle(0x4a2a12, 0.4);
  gfx.fillRect(x + 2, 27, 28, 3);
  // Wood grain
  gfx.lineStyle(1, 0x5a3618, 0.3);
  gfx.lineBetween(x + 6, 10, x + 26, 10);
  gfx.lineBetween(x + 4, 18, x + 28, 18);
  // Items on table
  gfx.fillStyle(0xeeeecc, 0.5);
  gfx.fillCircle(x + 10, 14, 3); // plate
  gfx.fillStyle(0x336699, 0.5);
  gfx.fillRect(x + 20, 12, 4, 5); // cup
}

function drawSeat(gfx: Phaser.GameObjects.Graphics, x: number): void {
  // Floor underneath
  gfx.fillStyle(0x3b2d1f, 1);
  gfx.fillRect(x, 0, 32, 32);
  drawWoodFloor(gfx, x);
  // Stool legs
  gfx.fillStyle(0x5a3a1a, 0.8);
  gfx.fillRect(x + 8, 20, 3, 10);
  gfx.fillRect(x + 21, 20, 3, 10);
  // Stool seat (round cushion)
  gfx.fillStyle(0xaa3328, 0.9);
  gfx.fillCircle(x + 16, 16, 8);
  // Cushion highlight
  gfx.fillStyle(0xcc5548, 0.4);
  gfx.fillCircle(x + 14, 14, 4);
  // Cushion shadow
  gfx.fillStyle(0x882218, 0.3);
  gfx.fillCircle(x + 18, 18, 4);
}

function drawKitchen(gfx: Phaser.GameObjects.Graphics, x: number): void {
  // Tile grid
  gfx.lineStyle(1, 0x4a4a4a, 0.4);
  for (let py = 0; py < 32; py += 16) {
    gfx.lineBetween(x, py, x + 32, py);
  }
  for (let px = 0; px < 32; px += 16) {
    gfx.lineBetween(x + px, 0, x + px, 32);
  }
  // Tile shine
  gfx.fillStyle(0x555555, 0.15);
  gfx.fillRect(x + 2, 2, 6, 6);
  gfx.fillRect(x + 18, 18, 6, 6);
}

function drawStove(gfx: Phaser.GameObjects.Graphics, x: number): void {
  // Stove body
  gfx.fillStyle(0x444444, 1);
  gfx.fillRect(x + 2, 2, 28, 28);
  // Burner rings
  gfx.lineStyle(2, 0x666666, 0.8);
  gfx.strokeCircle(x + 11, 11, 5);
  gfx.strokeCircle(x + 22, 11, 5);
  // Burner glow (one active)
  gfx.fillStyle(0xff6633, 0.4);
  gfx.fillCircle(x + 11, 11, 4);
  // Controls
  gfx.fillStyle(0x888888, 0.8);
  gfx.fillCircle(x + 8, 25, 2);
  gfx.fillCircle(x + 16, 25, 2);
  gfx.fillCircle(x + 24, 25, 2);
  // Pot on burner
  gfx.fillStyle(0x777777, 0.7);
  gfx.fillRect(x + 6, 7, 10, 8);
  gfx.fillStyle(0x888888, 0.5);
  gfx.fillRect(x + 5, 6, 12, 2);
}

function drawDoor(gfx: Phaser.GameObjects.Graphics, x: number): void {
  // Door frame
  gfx.fillStyle(0x3e5d4b, 1);
  gfx.fillRect(x + 4, 0, 24, 32);
  // Door panels
  gfx.fillStyle(0x2a4a3a, 0.8);
  gfx.fillRect(x + 7, 3, 8, 12);
  gfx.fillRect(x + 17, 3, 8, 12);
  // Glass panes
  gfx.fillStyle(0x1a2a3a, 0.6);
  gfx.fillRect(x + 8, 4, 6, 10);
  gfx.fillRect(x + 18, 4, 6, 10);
  // Handle
  gfx.fillStyle(0xd4a017, 1);
  gfx.fillCircle(x + 22, 20, 2);
  // Welcome mat hint
  gfx.fillStyle(0x553322, 0.5);
  gfx.fillRect(x + 6, 26, 20, 4);
}

function drawNoren(gfx: Phaser.GameObjects.Graphics, x: number): void {
  // Dark background
  gfx.fillStyle(0x1a1a2e, 1);
  gfx.fillRect(x, 0, 32, 32);
  // Noren curtain rod
  gfx.fillStyle(0x5c3a1e, 0.9);
  gfx.fillRect(x, 0, 32, 3);
  // Curtain panels (navy with slight separation)
  gfx.fillStyle(0x1a2244, 0.95);
  gfx.fillRect(x + 1, 3, 9, 28);
  gfx.fillRect(x + 12, 3, 8, 26);
  gfx.fillRect(x + 22, 3, 9, 28);
  // Curtain bottom wave
  gfx.fillStyle(0x1a1a2e, 0.3);
  gfx.fillRect(x + 1, 28, 9, 2);
  gfx.fillRect(x + 22, 26, 9, 2);
  // Character on curtain (simplified kanji)
  gfx.fillStyle(0xeeeeee, 0.6);
  gfx.fillRect(x + 14, 10, 4, 1);
  gfx.fillRect(x + 15, 11, 2, 5);
  gfx.fillRect(x + 14, 16, 4, 1);
}

function drawTV(gfx: Phaser.GameObjects.Graphics, x: number): void {
  // TV casing
  gfx.fillStyle(0x222222, 1);
  gfx.fillRect(x + 2, 4, 28, 22);
  // Screen
  gfx.fillStyle(0x0a1a2e, 1);
  gfx.fillRect(x + 4, 6, 24, 18);
  // Screen content (stock ticker feel)
  gfx.fillStyle(0x22aa44, 0.6);
  gfx.fillRect(x + 6, 10, 10, 2);
  gfx.fillStyle(0xcc3333, 0.6);
  gfx.fillRect(x + 6, 14, 7, 2);
  gfx.fillStyle(0x22aa44, 0.5);
  gfx.fillRect(x + 6, 18, 12, 2);
  // Scanlines
  gfx.lineStyle(1, 0x4466aa, 0.15);
  for (let py = 7; py < 24; py += 2) {
    gfx.lineBetween(x + 4, py, x + 28, py);
  }
  // CRT glow
  gfx.fillStyle(0x3355aa, 0.06);
  gfx.fillCircle(x + 16, 15, 16);
  // Stand
  gfx.fillStyle(0x333333, 0.9);
  gfx.fillRect(x + 12, 26, 8, 4);
}

function drawMenuBoard(gfx: Phaser.GameObjects.Graphics, x: number): void {
  // Board
  gfx.fillStyle(0x2a2018, 1);
  gfx.fillRect(x + 3, 2, 26, 28);
  // Frame
  gfx.lineStyle(1, 0x5a4030, 0.8);
  gfx.strokeRect(x + 3, 2, 26, 28);
  // Menu text lines
  gfx.fillStyle(0xddccaa, 0.6);
  gfx.fillRect(x + 7, 7, 18, 2);
  gfx.fillRect(x + 7, 12, 14, 2);
  gfx.fillRect(x + 7, 17, 16, 2);
  gfx.fillRect(x + 7, 22, 12, 2);
  // Price dots
  gfx.fillStyle(0xe6a23c, 0.5);
  gfx.fillCircle(x + 24, 8, 1);
  gfx.fillCircle(x + 24, 13, 1);
  gfx.fillCircle(x + 24, 18, 1);
}
