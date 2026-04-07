import Phaser from 'phaser';
import { TYPEWRITER_SPEED, GAME_WIDTH } from '../constants';

const BUBBLE_PAD_X = 6;
const BUBBLE_PAD_Y = 4;
const BUBBLE_MAX_WIDTH = 120;
const BUBBLE_TAIL_SIZE = 4;
const BUBBLE_BG = 0xffffff;
const BUBBLE_BORDER = 0x333333;
const TEXT_COLOR = '#222222';
const FONT_SIZE = 8;
const DEPTH = 900;

/**
 * Pixel-art speech bubble with typewriter effect.
 * Positioned above a target sprite.
 */
export class DialogueBubble {
  private scene: Phaser.Scene;
  private container: Phaser.GameObjects.Container;
  private bg: Phaser.GameObjects.Graphics;
  private label: Phaser.GameObjects.Text;
  private nameTag: Phaser.GameObjects.Text;
  private fullText = '';
  private charIndex = 0;
  private typeTimer: Phaser.Time.TimerEvent | null = null;
  private target: Phaser.GameObjects.Sprite | null = null;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;

    this.container = scene.add.container(0, 0);
    this.container.setDepth(DEPTH);
    this.container.setVisible(false);

    this.bg = scene.add.graphics();
    this.container.add(this.bg);

    this.nameTag = scene.add.text(0, 0, '', {
      fontSize: `${FONT_SIZE}px`,
      fontFamily: 'monospace',
      color: '#e8b84b',
      fontStyle: 'bold',
    });
    this.nameTag.setOrigin(0, 1);
    this.container.add(this.nameTag);

    this.label = scene.add.text(0, 0, '', {
      fontSize: `${FONT_SIZE}px`,
      fontFamily: 'monospace',
      color: TEXT_COLOR,
      wordWrap: { width: BUBBLE_MAX_WIDTH - BUBBLE_PAD_X * 2 },
      lineSpacing: 2,
    });
    this.label.setOrigin(0, 0);
    this.container.add(this.label);
  }

  show(target: Phaser.GameObjects.Sprite, name: string, text: string): void {
    this.target = target;
    this.fullText = text;
    this.charIndex = 0;
    this.label.setText('');
    this.nameTag.setText(name);
    this.container.setVisible(true);

    // Start typewriter
    this.stopTypewriter();
    this.typeTimer = this.scene.time.addEvent({
      delay: TYPEWRITER_SPEED,
      callback: this.typeNextChar,
      callbackScope: this,
      loop: true,
    });

    this.updatePosition();
  }

  hide(): void {
    this.stopTypewriter();
    this.container.setVisible(false);
    this.target = null;
  }

  update(): void {
    if (this.container.visible && this.target) {
      this.updatePosition();
    }
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
    this.drawBubble();
    this.updatePosition();
  }

  private stopTypewriter(): void {
    if (this.typeTimer) {
      this.typeTimer.destroy();
      this.typeTimer = null;
    }
  }

  private drawBubble(): void {
    const textW = Math.min(this.label.width, BUBBLE_MAX_WIDTH - BUBBLE_PAD_X * 2);
    const textH = this.label.height;
    const nameH = this.nameTag.height;

    const bw = Math.max(textW, this.nameTag.width) + BUBBLE_PAD_X * 2;
    const bh = nameH + 2 + textH + BUBBLE_PAD_Y * 2;

    this.bg.clear();

    // Border
    this.bg.fillStyle(BUBBLE_BORDER, 1);
    this.bg.fillRect(-bw / 2 - 1, -bh - BUBBLE_TAIL_SIZE - 1, bw + 2, bh + 2);
    // Tail border
    this.bg.fillTriangle(
      -BUBBLE_TAIL_SIZE - 1, -BUBBLE_TAIL_SIZE,
      BUBBLE_TAIL_SIZE + 1, -BUBBLE_TAIL_SIZE,
      0, 0,
    );

    // Fill
    this.bg.fillStyle(BUBBLE_BG, 1);
    this.bg.fillRect(-bw / 2, -bh - BUBBLE_TAIL_SIZE, bw, bh);
    // Tail
    this.bg.fillTriangle(
      -BUBBLE_TAIL_SIZE, -BUBBLE_TAIL_SIZE,
      BUBBLE_TAIL_SIZE, -BUBBLE_TAIL_SIZE,
      0, -1,
    );

    // Position name tag and text inside bubble
    this.nameTag.setPosition(-bw / 2 + BUBBLE_PAD_X, -BUBBLE_TAIL_SIZE - BUBBLE_PAD_Y - textH - 2);
    this.label.setPosition(-bw / 2 + BUBBLE_PAD_X, -BUBBLE_TAIL_SIZE - BUBBLE_PAD_Y - textH);
  }

  private updatePosition(): void {
    if (!this.target) return;
    const x = Phaser.Math.Clamp(
      this.target.x,
      BUBBLE_MAX_WIDTH / 2 + 4,
      GAME_WIDTH - BUBBLE_MAX_WIDTH / 2 - 4,
    );
    const y = this.target.y - this.target.height / 2 - 2;
    this.container.setPosition(x, y);
  }
}
