import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload(): void {
    // Future: load tilemaps, spritesheets, audio here
  }

  create(): void {
    const { width, height } = this.scale;

    this.cameras.main.setBackgroundColor('#1a1a2e');

    const text = this.add.text(width / 2, height / 2, '深夜食堂', {
      fontFamily: 'monospace',
      fontSize: '24px',
      color: '#f5c842',
    });
    text.setOrigin(0.5);

    const subtext = this.add.text(width / 2, height / 2 + 36, '× 市場情報', {
      fontFamily: 'monospace',
      fontSize: '14px',
      color: '#aaaaaa',
    });
    subtext.setOrigin(0.5);
  }
}
