import Phaser from 'phaser';
import { generateTileset } from '../tilemap/TilesetGenerator';
import { generateCharacterSprite, generateSitSprite } from '../characters/SpriteGenerator';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  create(): void {
    const { width, height } = this.scale;

    // Show title briefly while generating assets
    const title = this.add.text(width / 2, height / 2, '深夜食堂', {
      fontFamily: 'monospace',
      fontSize: '24px',
      color: '#f5c842',
    });
    title.setOrigin(0.5);

    const subtext = this.add.text(width / 2, height / 2 + 36, '× 市場情報', {
      fontFamily: 'monospace',
      fontSize: '14px',
      color: '#aaaaaa',
    });
    subtext.setOrigin(0.5);

    // Generate placeholder assets
    generateTileset(this);
    generateCharacterSprite(this, 'chef', 'chef');
    generateSitSprite(this, 'chef', 'chef');
    generateCharacterSprite(this, 'customer-a', 'customer', 0);
    generateSitSprite(this, 'customer-a', 'customer', 0);
    generateCharacterSprite(this, 'customer-b', 'customer', 1);
    generateSitSprite(this, 'customer-b', 'customer', 1);

    // Transition after a short delay
    this.time.delayedCall(800, () => {
      this.scene.start('DinerScene');
    });
  }
}
