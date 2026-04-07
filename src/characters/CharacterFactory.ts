import Phaser from 'phaser';
import { Character } from './Character';
import { Direction } from './types';
import type { CharacterConfig } from './types';

export const CHEF_CONFIG: CharacterConfig = {
  key: 'chef',
  name: 'Master',
  role: 'chef',
  startTileX: 3,
  startTileY: 1,
  startDirection: Direction.DOWN,
  waypoints: [],
};

export const CUSTOMER_A_CONFIG: CharacterConfig = {
  key: 'customer-a',
  name: 'Customer A',
  role: 'customer',
  startTileX: 7,
  startTileY: 10,
  startDirection: Direction.UP,
  waypoints: [],
};

export const CUSTOMER_B_CONFIG: CharacterConfig = {
  key: 'customer-b',
  name: 'Customer B',
  role: 'customer',
  startTileX: 8,
  startTileY: 10,
  startDirection: Direction.UP,
  waypoints: [],
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
