import Phaser from 'phaser';

const EMOTE_SYMBOLS: Record<string, string> = {
  surprise: '!',
  question: '?',
  heart: '♥',
  sweat: ';;',
  angry: '##',
  happy: '♪',
  sad: '...',
};

const BUBBLE_SIZE = 10;
const DEPTH = 910;
const BOUNCE_HEIGHT = 3;
const BOUNCE_DURATION = 400;

/**
 * Small emote bubble that appears above a character with a bounce animation.
 */
export class EmoteBubble {
  private scene: Phaser.Scene;
  private container: Phaser.GameObjects.Container;
  private bg: Phaser.GameObjects.Graphics;
  private label: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;

    this.container = scene.add.container(0, 0);
    this.container.setDepth(DEPTH);
    this.container.setVisible(false);

    this.bg = scene.add.graphics();
    this.container.add(this.bg);

    this.label = scene.add.text(0, 0, '', {
      fontSize: '8px',
      fontFamily: 'monospace',
      color: '#ffffff',
      fontStyle: 'bold',
    });
    this.label.setOrigin(0.5, 0.5);
    this.container.add(this.label);
  }

  show(target: Phaser.GameObjects.Sprite, emote: string): void {
    const symbol = EMOTE_SYMBOLS[emote] ?? emote;
    this.label.setText(symbol);

    // Draw background circle
    this.bg.clear();
    this.bg.fillStyle(0x333333, 0.9);
    this.bg.fillCircle(0, 0, BUBBLE_SIZE / 2 + 2);
    this.bg.fillStyle(0x555555, 1);
    this.bg.fillCircle(0, 0, BUBBLE_SIZE / 2);

    const x = target.x;
    const y = target.y - target.height - 4;
    this.container.setPosition(x, y);
    this.container.setVisible(true);
    this.container.setScale(0);

    // Pop-in + bounce
    this.scene.tweens.add({
      targets: this.container,
      scaleX: 1,
      scaleY: 1,
      duration: 150,
      ease: 'Back.easeOut',
    });

    this.scene.tweens.add({
      targets: this.container,
      y: y - BOUNCE_HEIGHT,
      duration: BOUNCE_DURATION,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    });
  }

  hide(): void {
    this.scene.tweens.killTweensOf(this.container);
    this.scene.tweens.add({
      targets: this.container,
      scaleX: 0,
      scaleY: 0,
      duration: 150,
      ease: 'Back.easeIn',
      onComplete: () => {
        this.container.setVisible(false);
      },
    });
  }

  destroy(): void {
    this.scene.tweens.killTweensOf(this.container);
    this.container.destroy();
  }
}
