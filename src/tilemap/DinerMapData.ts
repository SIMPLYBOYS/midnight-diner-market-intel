import { TileType } from '../constants';

const F = TileType.FLOOR;
const W = TileType.WALL;
const C = TileType.COUNTER;
const T = TileType.TABLE;
const S = TileType.SEAT;
const K = TileType.KITCHEN;
const D = TileType.DOOR;
const V = TileType.TV;

/**
 * 32×24 tile map for the diner.
 *
 * Layout overview:
 *   Row  0-1  : top wall
 *   Row  2-8  : kitchen area (left) + counter seats
 *   Row  9-10 : counter bar
 *   Row 11-21 : dining area with 4 table groups
 *   Row 22-23 : bottom wall with door
 *
 * Column layout:
 *   Col  0-1  : left wall
 *   Col  2-11 : kitchen zone
 *   Col 12-13 : counter
 *   Col 14-30 : dining floor
 *   Col 31    : right wall
 */
export const DINER_MAP: number[][] = buildMap();

/** Tile indices that block movement */
export const COLLISION_TILES = [
  TileType.WALL,
  TileType.COUNTER,
  TileType.TABLE,
  TileType.KITCHEN,
  TileType.TV,
];

function buildMap(): number[][] {
  // Start with all floor
  const map: number[][] = Array.from({ length: 24 }, () =>
    Array.from({ length: 32 }, () => F),
  );

  const fill = (r1: number, c1: number, r2: number, c2: number, t: number) => {
    for (let r = r1; r <= r2; r++) {
      for (let c = c1; c <= c2; c++) {
        map[r][c] = t;
      }
    }
  };

  const set = (r: number, c: number, t: number) => {
    map[r][c] = t;
  };

  // === Walls ===
  fill(0, 0, 0, 31, W);   // top wall
  fill(23, 0, 23, 31, W);  // bottom wall
  fill(0, 0, 23, 0, W);    // left wall
  fill(0, 31, 23, 31, W);  // right wall
  fill(1, 0, 1, 31, W);    // second row wall (thick top)

  // === Door (bottom center) ===
  set(23, 15, D);
  set(23, 16, D);

  // === Kitchen area (top-left) ===
  fill(2, 1, 7, 9, K);

  // === Counter bar (horizontal, row 8-9) ===
  fill(8, 2, 8, 12, C);

  // === Counter seats (row 9, facing counter) ===
  for (let c = 3; c <= 11; c += 2) {
    set(9, c, S);
  }

  // === TV on wall (top, right side) ===
  set(1, 20, V);
  set(1, 21, V);

  // === Dining tables (right half, 4 groups) ===

  // Table group 1: row 12-13, col 16-17
  fill(12, 16, 13, 17, T);
  set(12, 15, S); // left seats
  set(13, 15, S);
  set(12, 18, S); // right seats
  set(13, 18, S);

  // Table group 2: row 12-13, col 24-25
  fill(12, 24, 13, 25, T);
  set(12, 23, S);
  set(13, 23, S);
  set(12, 26, S);
  set(13, 26, S);

  // Table group 3: row 18-19, col 16-17
  fill(18, 16, 19, 17, T);
  set(18, 15, S);
  set(19, 15, S);
  set(18, 18, S);
  set(19, 18, S);

  // Table group 4: row 18-19, col 24-25
  fill(18, 24, 19, 25, T);
  set(18, 23, S);
  set(19, 23, S);
  set(18, 26, S);
  set(19, 26, S);

  return map;
}
