export const Direction = {
  DOWN: 0,
  LEFT: 1,
  RIGHT: 2,
  UP: 3,
} as const;
export type Direction = (typeof Direction)[keyof typeof Direction];

export const AnimState = {
  IDLE: 'idle',
  WALK: 'walk',
  SIT: 'sit',
} as const;
export type AnimState = (typeof AnimState)[keyof typeof AnimState];

export interface Waypoint {
  x: number; // tile col
  y: number; // tile row
  pause?: number; // ms to pause after arriving
  facing?: Direction;
  sit?: boolean; // switch to sit anim on arrival
}

export interface CharacterConfig {
  key: string; // texture key
  name: string;
  startTileX: number;
  startTileY: number;
  startDirection: Direction;
  waypoints?: Waypoint[];
  role: 'chef' | 'customer';
}
