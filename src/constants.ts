// Game dimensions
export const TILE_SIZE = 32;
export const MAP_COLS = 16;
export const MAP_ROWS = 12;
export const GAME_WIDTH = TILE_SIZE * MAP_COLS; // 512
export const GAME_HEIGHT = TILE_SIZE * MAP_ROWS; // 384
export const GAME_SCALE = 2;

// Animation
export const TYPEWRITER_SPEED = 50; // ms per character
export const DEFAULT_ANIMATION_FRAMERATE = 6;

// Timeline
export const TIMELINE_TICK_MS = 100;

// Tile types — expanded for richer scene
export const TileType = {
  FLOOR: 0,
  WALL: 1,
  COUNTER: 2,
  TABLE: 3,
  SEAT: 4,
  KITCHEN: 5,
  DOOR: 6,
  TV: 7,
  WALL_SHELF: 8,
  COUNTER_FRONT: 9,
  NOREN: 10,
  STOVE: 11,
  LANTERN_WALL: 12,
  MENU_BOARD: 13,
  FLOOR_DARK: 14,
  WALL_WINDOW: 15,
} as const;

// Tile colors (warm izakaya palette)
export const TILE_COLORS: Record<number, number> = {
  [TileType.FLOOR]:        0x3b2d1f,
  [TileType.WALL]:         0x4a3628,
  [TileType.COUNTER]:      0x8b6914,
  [TileType.TABLE]:        0x5c3a1e,
  [TileType.SEAT]:         0xc44536,
  [TileType.KITCHEN]:      0x3a3a3a,
  [TileType.DOOR]:         0x2e5d4b,
  [TileType.TV]:           0x1a1a2e,
  [TileType.WALL_SHELF]:   0x4a3628,
  [TileType.COUNTER_FRONT]:0x6b4f10,
  [TileType.NOREN]:        0x1a1a2e,
  [TileType.STOVE]:        0x555555,
  [TileType.LANTERN_WALL]: 0x4a3628,
  [TileType.MENU_BOARD]:   0x2a2018,
  [TileType.FLOOR_DARK]:   0x2a1f14,
  [TileType.WALL_WINDOW]:  0x4a3628,
};

// Character
export const CHARACTER_SPEED = 80; // pixels per second
export const CHARACTER_FRAME_SIZE = 128; // each sprite frame is 128×128
export const CHARACTER_WALK_FRAMES = 3; // 3-frame walk cycle: 0→1→2→1

// Timeline player
export const DIALOGUE_BASE_DURATION = 1500;
export const EMOTE_DEFAULT_DURATION = 1500;
export const NARRATION_DEFAULT_DURATION = 3000;
export const CAMERA_SHAKE_DEFAULT_INTENSITY = 3;
export const CAMERA_SHAKE_DEFAULT_DURATION = 200;
