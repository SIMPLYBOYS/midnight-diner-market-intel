import Phaser from 'phaser';
import { CHARACTER_FRAME_SIZE, CHARACTER_WALK_FRAMES } from '../constants';
import { Direction } from './types';

const FRAME_W = CHARACTER_FRAME_SIZE; // 32
const FRAME_H = CHARACTER_FRAME_SIZE; // 32
const DIRECTIONS = 4;

interface SpriteStyle {
  bodyColor: number;
  hatColor?: number;
  hairColor: number;
  skinColor: number;
  pantsColor: number;
  shoeColor: number;
}

const CHEF_STYLE: SpriteStyle = {
  bodyColor: 0xeeeeee,
  hatColor: 0xffffff,
  hairColor: 0x2a2a2a,
  skinColor: 0xe8c8a0,
  pantsColor: 0x333344,
  shoeColor: 0x222222,
};

const CUSTOMER_STYLES: SpriteStyle[] = [
  {
    bodyColor: 0x3a6090,
    hairColor: 0x553311,
    skinColor: 0xe0b89d,
    pantsColor: 0x333355,
    shoeColor: 0x332211,
  },
  {
    bodyColor: 0xaa6633,
    hairColor: 0x1a1a1a,
    skinColor: 0xd4a87a,
    pantsColor: 0x2a2a3a,
    shoeColor: 0x222222,
  },
  {
    bodyColor: 0x557755,
    hairColor: 0x884422,
    skinColor: 0xe0c0a0,
    pantsColor: 0x44443a,
    shoeColor: 0x332222,
  },
];

/**
 * Generates a 32×32 sprite sheet: 3 columns × 4 rows (96×128).
 * Walk cycle: 0→1→2→1 (frame 1 is idle/stand).
 * Rows: DOWN, LEFT, RIGHT, UP.
 */
export function generateCharacterSprite(
  scene: Phaser.Scene,
  key: string,
  role: 'chef' | 'customer',
  variant: number = 0,
): void {
  const style = role === 'chef'
    ? CHEF_STYLE
    : CUSTOMER_STYLES[variant % CUSTOMER_STYLES.length];

  const totalW = FRAME_W * CHARACTER_WALK_FRAMES;
  const totalH = FRAME_H * DIRECTIONS;

  const gfx = scene.add.graphics();

  for (let dir = 0; dir < DIRECTIONS; dir++) {
    for (let frame = 0; frame < CHARACTER_WALK_FRAMES; frame++) {
      const ox = frame * FRAME_W;
      const oy = dir * FRAME_H;
      drawCharFrame(gfx, ox, oy, dir as Direction, frame, style);
    }
  }

  gfx.generateTexture(key, totalW, totalH);
  gfx.destroy();
}

function drawCharFrame(
  gfx: Phaser.GameObjects.Graphics,
  ox: number,
  oy: number,
  dir: Direction,
  frame: number,
  style: SpriteStyle,
): void {
  const cx = ox + FRAME_W / 2;
  const walkOffset = frame === 0 ? -2 : frame === 2 ? 2 : 0;

  // === Shadow ===
  gfx.fillStyle(0x000000, 0.15);
  gfx.fillEllipse(cx, oy + 30, 14, 4);

  // === Shoes ===
  gfx.fillStyle(style.shoeColor, 1);
  gfx.fillRect(cx - 5 + walkOffset, oy + 27, 4, 3);
  gfx.fillRect(cx + 1 - walkOffset, oy + 27, 4, 3);

  // === Pants / legs ===
  gfx.fillStyle(style.pantsColor, 1);
  gfx.fillRect(cx - 5 + walkOffset, oy + 21, 4, 6);
  gfx.fillRect(cx + 1 - walkOffset, oy + 21, 4, 6);

  // === Body ===
  gfx.fillStyle(style.bodyColor, 1);
  gfx.fillRect(cx - 6, oy + 12, 12, 10);

  // Body shading
  if (dir === Direction.LEFT) {
    gfx.fillStyle(0x000000, 0.1);
    gfx.fillRect(cx + 2, oy + 12, 4, 10);
  } else if (dir === Direction.RIGHT) {
    gfx.fillStyle(0x000000, 0.1);
    gfx.fillRect(cx - 6, oy + 12, 4, 10);
  }

  // === Arms ===
  const armSwing = frame === 0 ? 1 : frame === 2 ? -1 : 0;
  gfx.fillStyle(style.skinColor, 1);
  if (dir === Direction.DOWN || dir === Direction.UP) {
    // Both arms visible
    gfx.fillRect(cx - 8, oy + 13 + armSwing, 3, 7);
    gfx.fillRect(cx + 5, oy + 13 - armSwing, 3, 7);
  } else if (dir === Direction.LEFT) {
    gfx.fillRect(cx - 4, oy + 13 + armSwing, 3, 7);
  } else {
    gfx.fillRect(cx + 1, oy + 13 + armSwing, 3, 7);
  }

  // === Neck ===
  gfx.fillStyle(style.skinColor, 1);
  gfx.fillRect(cx - 2, oy + 10, 4, 3);

  // === Head ===
  gfx.fillStyle(style.skinColor, 1);
  gfx.fillRect(cx - 5, oy + 3, 10, 8);

  // === Hair ===
  gfx.fillStyle(style.hairColor, 1);
  if (dir === Direction.DOWN) {
    gfx.fillRect(cx - 5, oy + 2, 10, 4);
    gfx.fillRect(cx - 6, oy + 4, 2, 4); // sideburns
    gfx.fillRect(cx + 4, oy + 4, 2, 4);
  } else if (dir === Direction.UP) {
    gfx.fillRect(cx - 5, oy + 2, 10, 8);
  } else if (dir === Direction.LEFT) {
    gfx.fillRect(cx - 5, oy + 2, 10, 4);
    gfx.fillRect(cx + 2, oy + 4, 3, 5);
  } else {
    gfx.fillRect(cx - 5, oy + 2, 10, 4);
    gfx.fillRect(cx - 5, oy + 4, 3, 5);
  }

  // === Chef hat ===
  if (style.hatColor !== undefined) {
    gfx.fillStyle(style.hatColor, 1);
    gfx.fillRect(cx - 5, oy + 1, 10, 3);
    gfx.fillRect(cx - 4, oy - 1, 8, 3);
    gfx.fillRect(cx - 3, oy - 2, 6, 2);
    // Hat shadow
    gfx.fillStyle(0xcccccc, 0.4);
    gfx.fillRect(cx - 5, oy + 3, 10, 1);
  }

  // === Face ===
  if (dir === Direction.DOWN) {
    // Eyes
    gfx.fillStyle(0x000000, 1);
    gfx.fillRect(cx - 3, oy + 6, 2, 2);
    gfx.fillRect(cx + 1, oy + 6, 2, 2);
    // Eye highlight
    gfx.fillStyle(0xffffff, 0.6);
    gfx.fillRect(cx - 3, oy + 6, 1, 1);
    gfx.fillRect(cx + 1, oy + 6, 1, 1);
    // Mouth
    gfx.fillStyle(0x000000, 0.4);
    gfx.fillRect(cx - 1, oy + 9, 2, 1);
  } else if (dir === Direction.LEFT) {
    gfx.fillStyle(0x000000, 1);
    gfx.fillRect(cx - 3, oy + 6, 2, 2);
    gfx.fillStyle(0xffffff, 0.6);
    gfx.fillRect(cx - 3, oy + 6, 1, 1);
  } else if (dir === Direction.RIGHT) {
    gfx.fillStyle(0x000000, 1);
    gfx.fillRect(cx + 1, oy + 6, 2, 2);
    gfx.fillStyle(0xffffff, 0.6);
    gfx.fillRect(cx + 1, oy + 6, 1, 1);
  }
}

/**
 * Generates a seated sprite (single 32×32 frame, facing down).
 */
export function generateSitSprite(
  scene: Phaser.Scene,
  key: string,
  role: 'chef' | 'customer',
  variant: number = 0,
): void {
  const style = role === 'chef'
    ? CHEF_STYLE
    : CUSTOMER_STYLES[variant % CUSTOMER_STYLES.length];

  const gfx = scene.add.graphics();
  const cx = FRAME_W / 2;

  // Shadow
  gfx.fillStyle(0x000000, 0.12);
  gfx.fillEllipse(cx, 30, 16, 4);

  // Legs tucked (seated)
  gfx.fillStyle(style.pantsColor, 1);
  gfx.fillRect(cx - 5, 22, 10, 4);

  // Body
  gfx.fillStyle(style.bodyColor, 1);
  gfx.fillRect(cx - 6, 13, 12, 10);

  // Arms resting
  gfx.fillStyle(style.skinColor, 1);
  gfx.fillRect(cx - 8, 15, 3, 5);
  gfx.fillRect(cx + 5, 15, 3, 5);

  // Neck
  gfx.fillStyle(style.skinColor, 1);
  gfx.fillRect(cx - 2, 11, 4, 3);

  // Head
  gfx.fillStyle(style.skinColor, 1);
  gfx.fillRect(cx - 5, 4, 10, 8);

  // Hair
  gfx.fillStyle(style.hairColor, 1);
  gfx.fillRect(cx - 5, 3, 10, 4);
  gfx.fillRect(cx - 6, 5, 2, 4);
  gfx.fillRect(cx + 4, 5, 2, 4);

  // Chef hat
  if (style.hatColor !== undefined) {
    gfx.fillStyle(style.hatColor, 1);
    gfx.fillRect(cx - 5, 2, 10, 3);
    gfx.fillRect(cx - 4, 0, 8, 3);
    gfx.fillRect(cx - 3, -1, 6, 2);
  }

  // Face
  gfx.fillStyle(0x000000, 1);
  gfx.fillRect(cx - 3, 7, 2, 2);
  gfx.fillRect(cx + 1, 7, 2, 2);
  gfx.fillStyle(0xffffff, 0.6);
  gfx.fillRect(cx - 3, 7, 1, 1);
  gfx.fillRect(cx + 1, 7, 1, 1);
  gfx.fillStyle(0x000000, 0.4);
  gfx.fillRect(cx - 1, 10, 2, 1);

  gfx.generateTexture(`${key}-sit`, FRAME_W, FRAME_H);
  gfx.destroy();
}
