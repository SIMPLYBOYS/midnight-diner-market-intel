import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT } from '../constants';

/**
 * Creates a warm-tinted night ambiance overlay using a simple
 * semi-transparent rectangle. Performance-friendly (no Light Pipeline).
 */
export class LightingManager {
  private overlay: Phaser.GameObjects.Rectangle;
  private vignette: Phaser.GameObjects.Graphics | null = null;

  constructor(scene: Phaser.Scene, enableVignette = true) {
    // Warm dark overlay — tinted orange-brown for izakaya feel
    this.overlay = scene.add.rectangle(
      GAME_WIDTH / 2,
      GAME_HEIGHT / 2,
      GAME_WIDTH,
      GAME_HEIGHT,
      0x1a0e05,
      0.35,
    );
    this.overlay.setDepth(900);
    this.overlay.setBlendMode(Phaser.BlendModes.MULTIPLY);

    if (enableVignette) {
      this.vignette = scene.add.graphics();
      this.vignette.setDepth(901);
      this.drawVignette();
    }
  }

  private drawVignette(): void {
    if (!this.vignette) return;
    const cx = GAME_WIDTH / 2;
    const cy = GAME_HEIGHT / 2;
    const maxR = Math.max(GAME_WIDTH, GAME_HEIGHT) * 0.7;

    // Radial gradient approximation via concentric circles
    const steps = 8;
    for (let i = steps; i >= 0; i--) {
      const ratio = i / steps;
      const alpha = (1 - ratio) * 0.3; // edges darker
      const radius = maxR * (0.4 + ratio * 0.6);
      this.vignette.fillStyle(0x000000, alpha);
      this.vignette.fillCircle(cx, cy, radius);
    }
  }

  setOverlayAlpha(alpha: number): void {
    this.overlay.setAlpha(alpha);
  }
}
