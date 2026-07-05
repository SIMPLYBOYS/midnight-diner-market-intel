import { test } from 'node:test';
import assert from 'node:assert/strict';
import { WalkableGrid } from './WalkableGrid';
import { Pathfinder } from './Pathfinder';

const grid = new WalkableGrid();
const pf = new Pathfinder(grid);

test('same start/goal returns the exact (fractional) destination', () => {
  const path = pf.findPath(8, 8, 8.2, 8.1);
  assert.deepEqual(path, [{ x: 8.2, y: 8.1 }]);
});

test('a clear straight run resolves to the exact destination tile', () => {
  const path = pf.findPath(1, 8, 5, 8); // row 8 is fully walkable cols 1–13
  assert.ok(path);
  assert.deepEqual(path.at(-1), { x: 5, y: 8 });
});

test('routes around a wall instead of through it', () => {
  // Row 7 has a gap at cols 8–9; getting from (7,7) to (11,7) must detour
  // down through the open floor rows.
  const path = pf.findPath(7, 7, 11, 7);
  assert.ok(path, 'expected a path around the wall');
  // Proof it did not teleport through the blocked cells:
  assert.ok(path.some((n) => n.y > 7), 'path should dip below row 7 to get around');
});

test('an unwalkable destination yields no path', () => {
  assert.equal(pf.findPath(8, 8, 0, 0), null); // (0,0) is wall
});

test('a customer cannot path onto a chef-only kitchen tile', () => {
  assert.equal(pf.findPath(1, 8, 2, 4, 'customer'), null); // (2,4) is chef-only
});
