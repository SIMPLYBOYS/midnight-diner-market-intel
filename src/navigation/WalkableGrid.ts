import { MAP_COLS, MAP_ROWS } from '../constants';

/**
 * Hand-tuned walkable area grid matching diner-bg.png (16×12, 32px tiles).
 * 0 = blocked, 1 = walkable (all), 2 = chef only (kitchen)
 */
const GRID: number[][] = [
  // col: 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
  /* 0 */ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // top wall/shelves
  /* 1 */ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // shelves
  /* 2 */ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // upper kitchen equipment
  /* 3 */ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // kitchen back wall
  /* 4 */ [0, 0, 2, 2, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // kitchen floor + right stool r1
  /* 5 */ [0, 0, 2, 2, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // kitchen floor + right stool r2
  /* 6 */ [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // counter + right stool r3
  /* 7 */ [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0], // stools / dining chairs
  /* 8 */ [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], // open floor
  /* 9 */ [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], // open floor
  /*10 */ [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], // entrance area
  /*11 */ [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0], // door
];

export class WalkableGrid {
  private grid: number[][];

  constructor() {
    this.grid = GRID;
  }

  isWalkable(tileX: number, tileY: number, role?: 'chef' | 'customer'): boolean {
    const gx = Math.round(tileX);
    const gy = Math.round(tileY);
    if (gx < 0 || gx >= MAP_COLS || gy < 0 || gy >= MAP_ROWS) return false;
    const cell = this.grid[gy][gx];
    if (cell === 0) return false;
    if (cell === 2 && role === 'customer') return false;
    return true;
  }

  getNeighbors(tileX: number, tileY: number, role?: 'chef' | 'customer'): Array<{ x: number; y: number }> {
    const results: Array<{ x: number; y: number }> = [];
    for (const [dx, dy] of [[0, -1], [0, 1], [-1, 0], [1, 0]]) {
      const nx = tileX + dx;
      const ny = tileY + dy;
      if (this.isWalkable(nx, ny, role)) {
        results.push({ x: nx, y: ny });
      }
    }
    return results;
  }
}
