import Phaser from 'phaser';
import { CHARACTER_FRAME_SIZE } from '../constants';
import { Direction } from './types';

const FRAME_W = CHARACTER_FRAME_SIZE;
const FRAME_H = CHARACTER_FRAME_SIZE;
const WALK_FRAMES = 4;
const DIRECTIONS = 4; // down, left, right, up

interface SpriteStyle {
  bodyColor: number;
  hatColor?: number; // chef hat
  hairColor: number;
}

const CHEF_STYLE: SpriteStyle = {
  bodyColor: 0xeeeeee,
  hatColor: 0xffffff,
  hairColor: 0x333333,
};

const CUSTOMER_STYLES: SpriteStyle[] = [
  { bodyColor: 0x4477aa, hairColor: 0x553311 },
  { bodyColor: 0xaa5533, hairColor: 0x222222 },
  { bodyColor: 0x558855, hairColor: 0x884422 },
  { bodyColor: 0x886644, hairColor: 0x111111 },
];

/**
 * Generates a 4-direction × 4-frame sprite sheet (16 frames total).
 * Layout: rows = directions (D/L/R/U), cols = walk cycle frames.
 * Frame 0 of each row doubles as idle.
 */
export function generateCharacterSprite(
  scene: Phaser.Scene,
  key: string,
  role: 'chef' | 'customer',
  variant: number = 0,
): void {
  const style = role === 'chef' ? CHEF_STYLE : CUSTOMER_STYLES[variant % CUSTOMER_STYLES.length];
  const totalW = FRAME_W * WALK_FRAMES;
  const totalH = FRAME_H * DIRECTIONS;

  const gfx = scene.add.graphics();

  for (let dir = 0; dir < DIRECTIONS; dir++) {
    for (let frame = 0; frame < WALK_FRAMES; frame++) {
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
  const legOffset = frame % 2 === 0 ? 0 : (frame === 1 ? 1 : -1);

  // Head
  const headColor = style.hairColor;
  gfx.fillStyle(headColor, 1);
  gfx.fillRect(cx - 3, oy + 1, 6, 5);

  // Chef hat
  if (style.hatColor !== undefined) {
    gfx.fillStyle(style.hatColor, 1);
    gfx.fillRect(cx - 3, oy, 6, 2);
    gfx.fillRect(cx - 2, oy - 1, 4, 1);
  }

  // Face hint (eyes) — only for front-facing
  if (dir === Direction.DOWN) {
    gfx.fillStyle(0x000000, 1);
    gfx.fillRect(cx - 2, oy + 3, 1, 1);
    gfx.fillRect(cx + 1, oy + 3, 1, 1);
  }

  // Body
  gfx.fillStyle(style.bodyColor, 1);
  gfx.fillRect(cx - 3, oy + 6, 6, 5);

  // Skin color for limbs
  const skinColor = 0xe0b89d;
  gfx.fillStyle(skinColor, 1);

  // Arms — shift slightly based on direction
  if (dir === Direction.LEFT) {
    gfx.fillRect(cx - 4, oy + 7, 1, 3);
  } else if (dir === Direction.RIGHT) {
    gfx.fillRect(cx + 3, oy + 7, 1, 3);
  } else {
    gfx.fillRect(cx - 4, oy + 7, 1, 3);
    gfx.fillRect(cx + 3, oy + 7, 1, 3);
  }

  // Legs — animate with walk cycle
  gfx.fillStyle(0x333355, 1);
  gfx.fillRect(cx - 2, oy + 11, 2, 3 + legOffset);
  gfx.fillRect(cx, oy + 11, 2, 3 - legOffset);
}

/**
 * Generates a simple sitting sprite (single frame, facing down).
 * Key: `${key}-sit`
 */
export function generateSitSprite(
  scene: Phaser.Scene,
  key: string,
  role: 'chef' | 'customer',
  variant: number = 0,
): void {
  const style = role === 'chef' ? CHEF_STYLE : CUSTOMER_STYLES[variant % CUSTOMER_STYLES.length];
  const gfx = scene.add.graphics();
  const cx = FRAME_W / 2;

  // Head
  gfx.fillStyle(style.hairColor, 1);
  gfx.fillRect(cx - 3, 1, 6, 5);

  if (style.hatColor !== undefined) {
    gfx.fillStyle(style.hatColor, 1);
    gfx.fillRect(cx - 3, 0, 6, 2);
  }

  // Eyes
  gfx.fillStyle(0x000000, 1);
  gfx.fillRect(cx - 2, 3, 1, 1);
  gfx.fillRect(cx + 1, 3, 1, 1);

  // Body (shorter — seated)
  gfx.fillStyle(style.bodyColor, 1);
  gfx.fillRect(cx - 3, 6, 6, 4);

  // Arms on lap
  gfx.fillStyle(0xe0b89d, 1);
  gfx.fillRect(cx - 4, 7, 1, 2);
  gfx.fillRect(cx + 3, 7, 1, 2);

  // Legs tucked
  gfx.fillStyle(0x333355, 1);
  gfx.fillRect(cx - 3, 10, 6, 2);

  gfx.generateTexture(`${key}-sit`, FRAME_W, FRAME_H);
  gfx.destroy();
}
