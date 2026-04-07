import { TileType } from '../constants';

const F  = TileType.FLOOR;
const Fd = TileType.FLOOR_DARK;
const W  = TileType.WALL;
const Ws = TileType.WALL_SHELF;
const Ww = TileType.WALL_WINDOW;
const Wl = TileType.LANTERN_WALL;
const C  = TileType.COUNTER;
const Cf = TileType.COUNTER_FRONT;
const T  = TileType.TABLE;
const S  = TileType.SEAT;
const K  = TileType.KITCHEN;
const Kv = TileType.STOVE;
const D  = TileType.DOOR;
const N  = TileType.NOREN;
const V  = TileType.TV;
const M  = TileType.MENU_BOARD;

/**
 * 16×12 tile map for the compact diner scene (32×32 px tiles).
 *
 * Layout:
 *   Row  0    : Top wall (shelf, lanterns, window, TV)
 *   Row  1    : Kitchen / back area
 *   Row  2    : Counter top surface
 *   Row  3    : Counter front / stools
 *   Row  4-9  : Dining floor with table groups
 *   Row 10    : Floor near entrance
 *   Row 11    : Bottom wall with door & noren
 */
export const DINER_MAP: number[][] = buildMap();

/** Tile indices that block movement */
export const COLLISION_TILES = [
  TileType.WALL,
  TileType.WALL_SHELF,
  TileType.WALL_WINDOW,
  TileType.LANTERN_WALL,
  TileType.COUNTER,
  TileType.COUNTER_FRONT,
  TileType.TABLE,
  TileType.KITCHEN,
  TileType.STOVE,
  TileType.TV,
  TileType.MENU_BOARD,
  TileType.NOREN,
];

function buildMap(): number[][] {
  /* eslint-disable no-multi-spaces */
  return [
    //0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
    [ W, Ws, Wl,  W,  W, Ws,  W, Ww,  W,  W,  W,  V,  W, Wl, Ws,  W], // row 0: top wall
    [ K, Kv,  K,  K,  K, Ws,  F,  F,  F,  F,  F,  F,  F,  F,  M,  W], // row 1: kitchen / back
    [ C,  C,  C,  C,  C,  C,  F,  F,  F,  F,  F,  F,  F,  F,  F,  W], // row 2: counter top
    [Cf, Cf, Cf, Cf, Cf, Cf,  F,  F,  F,  F,  F,  F,  F,  F,  F,  W], // row 3: counter front
    [ S,  F,  S,  F,  S,  F,  F,  F,  F,  F,  F,  F,  F,  F,  F,  W], // row 4: stools
    [ F,  F,  F,  F,  F,  F,  F,  S,  T,  T,  S,  F,  F,  F,  F,  W], // row 5: dining
    [ F,  F,  F,  F,  F,  F,  F,  S,  T,  T,  S,  F,  F,  F,  F,  W], // row 6: dining
    [ F,  F,  F,  F,  F,  F,  F,  F,  F,  F,  F,  F,  S,  T,  S,  W], // row 7: dining
    [ F,  F,  F,  F,  F,  F,  F,  F,  F,  F,  F,  F,  S,  T,  S,  W], // row 8: dining
    [Fd, Fd, Fd, Fd, Fd, Fd, Fd, Fd, Fd, Fd, Fd, Fd, Fd, Fd, Fd,  W], // row 9: dark floor
    [ W,  W,  W,  W,  W,  W, Fd, Fd, Fd, Fd,  W,  W,  W,  W,  W,  W], // row 10: entrance area
    [ W,  W,  W,  W,  W,  W,  N,  D,  D,  N,  W,  W,  W,  W,  W,  W], // row 11: bottom wall
  ];
  /* eslint-enable no-multi-spaces */
}
