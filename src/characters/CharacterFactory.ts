import Phaser from 'phaser';
import { Character } from './Character';
import { Direction } from './types';
import type { CharacterConfig } from './types';

const CHEF_CONFIG: CharacterConfig = {
  key: 'chef',
  name: 'Master',
  role: 'chef',
  startTileX: 5,
  startTileY: 4,
  startDirection: Direction.DOWN,
  waypoints: [
    { x: 5, y: 7, facing: Direction.DOWN },
    { x: 8, y: 7, pause: 500, facing: Direction.DOWN },
  ],
};

const CUSTOMER_A_CONFIG: CharacterConfig = {
  key: 'customer-a',
  name: 'Customer A',
  role: 'customer',
  startTileX: 15, // near door
  startTileY: 22,
  startDirection: Direction.UP,
  waypoints: [
    { x: 15, y: 17, pause: 200 },
    { x: 15, y: 13, sit: true, facing: Direction.RIGHT },
  ],
};

const CUSTOMER_B_CONFIG: CharacterConfig = {
  key: 'customer-b',
  name: 'Customer B',
  role: 'customer',
  startTileX: 16,
  startTileY: 22,
  startDirection: Direction.UP,
  waypoints: [
    { x: 23, y: 17, pause: 300 },
    { x: 23, y: 13, sit: true, facing: Direction.LEFT },
  ],
};

export function createChef(scene: Phaser.Scene): Character {
  return new Character(scene, CHEF_CONFIG);
}

export function createCustomers(scene: Phaser.Scene): Character[] {
  return [
    new Character(scene, CUSTOMER_A_CONFIG),
    new Character(scene, CUSTOMER_B_CONFIG),
  ];
}
