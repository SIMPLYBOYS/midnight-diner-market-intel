import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT, TILE_SIZE } from '../constants';

interface LightSource {
  x: number;
  y: number;
  radius: number;
  color: number;
  intensity: number;
}

/** Warm light sources positioned on the map (pixel coordinates). */
const LIGHT_SOURCES: LightSource[] = [
  // Lantern on wall (col 2, row 0)
  { x: 2.5 * TILE_SIZE, y: 0.5 * TILE_SIZE, radius: 60, color: 0xe6a23c, intensity: 0.2 },
  // Lantern on wall (col 13, row 0)
  { x: 13.5 * TILE_SIZE, y: 0.5 * TILE_SIZE, radius: 60, color: 0xe6a23c, intensity: 0.2 },
  // Kitchen stove glow (col 1, row 1)
  { x: 1.5 * TILE_SIZE, y: 1.5 * TILE_SIZE, radius: 40, color: 0xff6633, intensity: 0.12 },
  // Counter area ambient
  { x: 3 * TILE_SIZE, y: 3 * TILE_SIZE, radius: 70, color: 0xe6a23c, intensity: 0.12 },
  // TV glow (col 11, row 0)
  { x: 11 * TILE_SIZE, y: 0.5 * TILE_SIZE, radius: 30, color: 0x4466bb, intensity: 0.1 },
  // Dining area center
  { x: 9 * TILE_SIZE, y: 6 * TILE_SIZE, radius: 70, color: 0xe6a23c, intensity: 0.1 },
];

/**
 * Creates warm night ambiance using overlay + multiple light source cutouts.
 * Performance-friendly (no Phaser Light Pipeline).
 */
export class LightingManager {
  private overlay: Phaser.GameObjects.Graphics;

  constructor(scene: Phaser.Scene) {
    this.overlay = scene.add.graphics();
    this.overlay.setDepth(500);

    this.drawLighting();
  }

  private drawLighting(): void {
    const g = this.overlay;

    // Dark overlay (deep izakaya night tone)
    g.fillStyle(0x0a0814, 0.45);
    g.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Cut out warm light pools using ERASE blend
    g.setBlendMode(Phaser.BlendModes.ERASE);

    for (const light of LIGHT_SOURCES) {
      const steps = 6;
      for (let i = steps; i >= 0; i--) {
        const ratio = i / steps;
        const alpha = light.intensity * ratio * ratio;
        const radius = light.radius * (1 - ratio * 0.6);
        g.fillStyle(0xffffff, alpha);
        g.fillCircle(light.x, light.y, radius);
      }
    }

    // Reset blend mode
    g.setBlendMode(Phaser.BlendModes.NORMAL);

    // Warm color tint overlay (subtle orange cast)
    g.fillStyle(0x1a0e05, 0.12);
    g.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Vignette
    this.drawVignette();
  }

  private drawVignette(): void {
    const g = this.overlay;
    const cx = GAME_WIDTH / 2;
    const cy = GAME_HEIGHT / 2;
    const maxR = Math.max(GAME_WIDTH, GAME_HEIGHT) * 0.7;

    const steps = 8;
    for (let i = steps; i >= 0; i--) {
      const ratio = i / steps;
      const alpha = (1 - ratio) * 0.2;
      const radius = maxR * (0.5 + ratio * 0.5);
      g.fillStyle(0x000000, alpha);
      g.fillCircle(cx, cy, radius);
    }
  }

  setOverlayAlpha(alpha: number): void {
    this.overlay.setAlpha(alpha);
  }
}
