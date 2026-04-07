// Game dimensions
export const TILE_SIZE = 16;
export const MAP_COLS = 32;
export const MAP_ROWS = 24;
export const GAME_WIDTH = TILE_SIZE * MAP_COLS; // 512
export const GAME_HEIGHT = TILE_SIZE * MAP_ROWS; // 384
export const GAME_SCALE = 2;

// Animation
export const TYPEWRITER_SPEED = 50; // ms per character
export const DEFAULT_ANIMATION_FRAMERATE = 8;

// Timeline
export const TIMELINE_TICK_MS = 100;

// Tile types
export const TileType = {
  FLOOR: 0,
  WALL: 1,
  COUNTER: 2,
  TABLE: 3,
  SEAT: 4,
  KITCHEN: 5,
  DOOR: 6,
  TV: 7,
} as const;

// Tile colors (placeholder palette — warm izakaya tones)
export const TILE_COLORS: Record<number, number> = {
  [TileType.FLOOR]:   0x3b2d1f,
  [TileType.WALL]:    0x5c4033,
  [TileType.COUNTER]: 0x8b6914,
  [TileType.TABLE]:   0x6b4226,
  [TileType.SEAT]:    0xc44536,
  [TileType.KITCHEN]: 0x4a4a4a,
  [TileType.DOOR]:    0x2e5d4b,
  [TileType.TV]:      0x2a2a3a,
};

// Character
export const CHARACTER_SPEED = 60; // pixels per second
export const CHARACTER_FRAME_SIZE = 16; // each sprite frame is 16×16

// Timeline player
export const DIALOGUE_BASE_DURATION = 1500;
export const EMOTE_DEFAULT_DURATION = 1500;
export const NARRATION_DEFAULT_DURATION = 3000;
export const CAMERA_SHAKE_DEFAULT_INTENSITY = 3;
export const CAMERA_SHAKE_DEFAULT_DURATION = 200;
