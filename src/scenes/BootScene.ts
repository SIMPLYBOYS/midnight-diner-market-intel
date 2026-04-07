import Phaser from 'phaser';
import { CHARACTER_FRAME_SIZE, CHARACTER_WALK_FRAMES } from '../constants';

import dinerBg from '../assets/tilemaps/diner-bg.png';
import citySkyline from '../assets/tilemaps/city-skyline.png';
import chefWalk from '../assets/sprites/chef-walk.png';
import chefSit from '../assets/sprites/chef-sit.png';
import customerAWalk from '../assets/sprites/customer-a-walk.png';
import customerASit from '../assets/sprites/customer-a-sit.png';
import customerBWalk from '../assets/sprites/customer-b-walk.png';
import customerBSit from '../assets/sprites/customer-b-sit.png';

const FRAME_W = CHARACTER_FRAME_SIZE;
const FRAME_H = CHARACTER_FRAME_SIZE;

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload(): void {
    const { width, height } = this.scale;

    // Loading text
    const loading = this.add.text(width / 2, height / 2, '深夜食堂', {
      fontFamily: 'monospace',
      fontSize: '24px',
      color: '#f5c842',
    });
    loading.setOrigin(0.5);

    const subtext = this.add.text(width / 2, height / 2 + 36, '× 市場情報', {
      fontFamily: 'monospace',
      fontSize: '14px',
      color: '#aaaaaa',
    });
    subtext.setOrigin(0.5);

    // Load background images
    this.load.image('diner-bg', dinerBg);
    this.load.image('city-skyline', citySkyline);

    // Load character sprite sheets (3 columns × 4 rows)
    this.load.spritesheet('chef', chefWalk, {
      frameWidth: FRAME_W,
      frameHeight: FRAME_H,
    });
    this.load.spritesheet('customer-a', customerAWalk, {
      frameWidth: FRAME_W,
      frameHeight: FRAME_H,
    });
    this.load.spritesheet('customer-b', customerBWalk, {
      frameWidth: FRAME_W,
      frameHeight: FRAME_H,
    });

    // Load sit sprites
    this.load.image('chef-sit', chefSit);
    this.load.image('customer-a-sit', customerASit);
    this.load.image('customer-b-sit', customerBSit);
  }

  create(): void {
    // Create character animations
    const chars = ['chef', 'customer-a', 'customer-b'];
    for (const key of chars) {
      for (let dir = 0; dir < 4; dir++) {
        const base = dir * CHARACTER_WALK_FRAMES;
        this.anims.create({
          key: `${key}-walk-${dir}`,
          frames: [
            { key, frame: base },
            { key, frame: base + 1 },
            { key, frame: base + 2 },
            { key, frame: base + 1 },
          ],
          frameRate: 6,
          repeat: -1,
        });
        this.anims.create({
          key: `${key}-idle-${dir}`,
          frames: [{ key, frame: base + 1 }],
          frameRate: 1,
          repeat: 0,
        });
      }
    }

    this.time.delayedCall(800, () => {
      this.scene.start('DinerScene');
    });
  }
}
