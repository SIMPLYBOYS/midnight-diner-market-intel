import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT, GAME_SCALE } from '../constants';
import { BootScene } from '../scenes/BootScene';
import { DinerScene } from '../scenes/DinerScene';

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  zoom: GAME_SCALE,
  pixelArt: true,
  scene: [BootScene, DinerScene],
  parent: 'game-container',
  backgroundColor: '#1a1a2e',
  render: {
    antialias: false,
    roundPixels: true,
  },
  fps: {
    target: 30,
    forceSetTimeOut: true,
  },
};
