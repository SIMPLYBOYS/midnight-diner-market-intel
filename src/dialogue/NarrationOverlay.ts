import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT, GAME_SCALE, TYPEWRITER_SPEED } from '../constants';

const OVERLAY_ALPHA = 0.7;
const OVERLAY_COLOR = 0x000000;
const BAR_HEIGHT = 40;
const TEXT_COLOR = '#e8d5b0';
const FONT_SIZE = 9;
const TEXT_RESOLUTION = GAME_SCALE;
const DEPTH = 950;

/**
 * Full-width narration text bar with typewriter effect.
 * Appears as a cinematic bar at the center of the screen.
 */
export class NarrationOverlay {
  private scene: Phaser.Scene;
  private container: Phaser.GameObjects.Container;
  private bg: Phaser.GameObjects.Graphics;
  private label: Phaser.GameObjects.Text;
  private fullText = '';
  private charIndex = 0;
  private typeTimer: Phaser.Time.TimerEvent | null = null;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;

    this.container = scene.add.container(0, 0);
    this.container.setDepth(DEPTH);
    this.container.setVisible(false);

    this.bg = scene.add.graphics();
    this.bg.fillStyle(OVERLAY_COLOR, OVERLAY_ALPHA);
    this.bg.fillRect(0, GAME_HEIGHT / 2 - BAR_HEIGHT / 2, GAME_WIDTH, BAR_HEIGHT);
    this.container.add(this.bg);

    this.label = scene.add.text(GAME_WIDTH / 2, GAME_HEIGHT / 2, '', {
      fontSize: `${FONT_SIZE}px`,
      fontFamily: 'monospace',
      color: TEXT_COLOR,
      wordWrap: { width: GAME_WIDTH - 40 },
      align: 'center',
      resolution: TEXT_RESOLUTION,
    });
    this.label.setOrigin(0.5, 0.5);
    this.container.add(this.label);
  }

  show(text: string): void {
    this.fullText = text;
    this.charIndex = 0;
    this.label.setText('');
    this.container.setVisible(true);
    this.container.setAlpha(0);

    // Fade in
    this.scene.tweens.add({
      targets: this.container,
      alpha: 1,
      duration: 300,
      ease: 'Power2',
    });

    this.stopTypewriter();
    this.typeTimer = this.scene.time.addEvent({
      delay: TYPEWRITER_SPEED,
      callback: this.typeNextChar,
      callbackScope: this,
      loop: true,
    });
  }

  hide(): void {
    this.stopTypewriter();
    this.scene.tweens.add({
      targets: this.container,
      alpha: 0,
      duration: 300,
      ease: 'Power2',
      onComplete: () => {
        this.container.setVisible(false);
      },
    });
  }

  destroy(): void {
    this.stopTypewriter();
    this.container.destroy();
  }

  private typeNextChar(): void {
    if (this.charIndex >= this.fullText.length) {
      this.stopTypewriter();
      return;
    }
    this.charIndex++;
    this.label.setText(this.fullText.slice(0, this.charIndex));
  }

  private stopTypewriter(): void {
    if (this.typeTimer) {
      this.typeTimer.destroy();
      this.typeTimer = null;
    }
  }
}
