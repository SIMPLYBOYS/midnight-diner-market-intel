import Phaser from 'phaser';
import { CHARACTER_FRAME_SIZE, CHARACTER_WALK_FRAMES } from '../constants';

import dinerBg from '../assets/tilemaps/diner-bg.png';
import citySkyline from '../assets/tilemaps/city-skyline.png';
import chefWalk from '../assets/sprites/chef-walk.png';
import chefSit from '../assets/sprites/chef-sit.png';
import customerAWalk from '../assets/sprites/customer-a-walk.png';
import customerASitDown from '../assets/sprites/customer-a-sit-down.png';
import customerASitLeft from '../assets/sprites/customer-a-sit-left.png';
import customerASitRight from '../assets/sprites/customer-a-sit-right.png';
import customerASitUp from '../assets/sprites/customer-a-sit-up.png';
import customerBWalk from '../assets/sprites/customer-b-walk.png';
import customerBSitDown from '../assets/sprites/customer-b-sit-down.png';
import customerBSitLeft from '../assets/sprites/customer-b-sit-left.png';
import customerBSitRight from '../assets/sprites/customer-b-sit-right.png';
import customerBSitUp from '../assets/sprites/customer-b-sit-up.png';

const FRAME_W = CHARACTER_FRAME_SIZE;
const FRAME_H = CHARACTER_FRAME_SIZE;

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload(): void {
    const { width, height } = this.scale;

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

    // Background
    this.load.image('diner-bg', dinerBg);
    this.load.image('city-skyline', citySkyline);

    // Walk sprite sheets (3 columns × 4 rows)
    this.load.spritesheet('chef', chefWalk, { frameWidth: FRAME_W, frameHeight: FRAME_H });
    this.load.spritesheet('customer-a', customerAWalk, { frameWidth: FRAME_W, frameHeight: FRAME_H });
    this.load.spritesheet('customer-b', customerBWalk, { frameWidth: FRAME_W, frameHeight: FRAME_H });

    // Sit sprites — individual images per direction
    this.load.image('chef-sit', chefSit);
    this.load.image('customer-a-sit-0', customerASitDown);
    this.load.image('customer-a-sit-1', customerASitLeft);
    this.load.image('customer-a-sit-2', customerASitRight);
    this.load.image('customer-a-sit-3', customerASitUp);
    this.load.image('customer-b-sit-0', customerBSitDown);
    this.load.image('customer-b-sit-1', customerBSitLeft);
    this.load.image('customer-b-sit-2', customerBSitRight);
    this.load.image('customer-b-sit-3', customerBSitUp);
  }

  create(): void {
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
