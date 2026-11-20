import type { WalkableGrid } from './WalkableGrid';

export interface PathNode {
  x: number;
  y: number;
}

/**
 * A* pathfinding on the WalkableGrid.
 * Grid is tiny (16×12) so performance is not a concern.
 */
export class Pathfinder {
  private grid: WalkableGrid;

  constructor(grid: WalkableGrid) {
    this.grid = grid;
  }

  findPath(
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    role?: 'chef' | 'customer',
  ): PathNode[] | null {
    const sx = Math.round(fromX);
    const sy = Math.round(fromY);
    const gx = Math.round(toX);
    const gy = Math.round(toY);

    // Same cell
    if (sx === gx && sy === gy) {
      return [{ x: toX, y: toY }];
    }

    // Destination not walkable — return null
    if (!this.grid.isWalkable(gx, gy, role)) {
      return null;
    }

    const key = (x: number, y: number): string => `${x},${y}`;
    const open: Array<{ x: number; y: number; f: number; g: number }> = [];
    const cameFrom = new Map<string, { x: number; y: number }>();
    const gScore = new Map<string, number>();

    gScore.set(key(sx, sy), 0);
    open.push({ x: sx, y: sy, f: heuristic(sx, sy, gx, gy), g: 0 });

    let iterations = 0;
    const maxIterations = 500;

    while (open.length > 0 && iterations < maxIterations) {
      iterations++;

      // Find lowest f-score
      let bestIdx = 0;
      for (let i = 1; i < open.length; i++) {
        if (open[i].f < open[bestIdx].f) bestIdx = i;
      }
      const current = open[bestIdx];
      open.splice(bestIdx, 1);

      // Reached goal
      if (current.x === gx && current.y === gy) {
        return this.reconstructPath(cameFrom, current, toX, toY);
      }

      for (const neighbor of this.grid.getNeighbors(current.x, current.y, role)) {
        const tentativeG = current.g + 1;
        const nKey = key(neighbor.x, neighbor.y);
        const prevG = gScore.get(nKey);

        if (prevG === undefined || tentativeG < prevG) {
          cameFrom.set(nKey, { x: current.x, y: current.y });
          gScore.set(nKey, tentativeG);
          const f = tentativeG + heuristic(neighbor.x, neighbor.y, gx, gy);
          open.push({ x: neighbor.x, y: neighbor.y, f, g: tentativeG });
        }
      }
    }

    // No path found
    return null;
  }

  private reconstructPath(
    cameFrom: Map<string, { x: number; y: number }>,
    end: { x: number; y: number },
    exactToX: number,
    exactToY: number,
  ): PathNode[] {
    const key = (x: number, y: number): string => `${x},${y}`;
    const path: PathNode[] = [];
    let current = end;

    while (cameFrom.has(key(current.x, current.y))) {
      path.unshift({ x: current.x, y: current.y });
      current = cameFrom.get(key(current.x, current.y))!;
    }

    // Simplify: remove collinear middle nodes
    const simplified: PathNode[] = [];
    for (let i = 0; i < path.length; i++) {
      if (
        i > 0 &&
        i < path.length - 1 &&
        ((path[i - 1].x === path[i].x && path[i].x === path[i + 1].x) ||
          (path[i - 1].y === path[i].y && path[i].y === path[i + 1].y))
      ) {
        continue; // skip collinear middle node
      }
      simplified.push(path[i]);
    }

    // Replace last node with exact fractional destination
    if (simplified.length > 0) {
      simplified[simplified.length - 1] = { x: exactToX, y: exactToY };
    } else {
      simplified.push({ x: exactToX, y: exactToY });
    }

    return simplified;
  }
}

function heuristic(ax: number, ay: number, bx: number, by: number): number {
  return Math.abs(ax - bx) + Math.abs(ay - by);
}
