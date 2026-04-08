import { Direction } from '../characters/types';

export interface LocationDef {
  readonly x: number;
  readonly y: number;
  readonly facing?: Direction;
}

export type LocationName =
  | 'stove'
  | 'prep-area'
  | 'counter-center'
  | 'stool-1'
  | 'stool-2'
  | 'stool-3'
  | 'stool-4'
  | 'stool-5'
  | 'stool-r1'
  | 'stool-r2'
  | 'stool-r3'
  | 'random-stool'
  | 'entrance'
  | 'door'
  | 'floor-center'
  | 'dining-left'
  | 'dining-right';

export const LOCATIONS: Readonly<Record<string, LocationDef>> = {
  'stove':          { x: 3.5, y: 5, facing: Direction.LEFT },
  'prep-area':      { x: 5, y: 5, facing: Direction.RIGHT },
  'counter-center': { x: 4.5, y: 5, facing: Direction.DOWN },
  'stool-1':        { x: 3, y: 8, facing: Direction.UP },
  'stool-2':        { x: 4, y: 8, facing: Direction.UP },
  'stool-3':        { x: 5, y: 8, facing: Direction.UP },
  'stool-4':        { x: 6, y: 8, facing: Direction.UP },
  'stool-5':        { x: 7, y: 8, facing: Direction.UP },
  'stool-r1':       { x: 8, y: 5, facing: Direction.LEFT },
  'stool-r2':       { x: 8, y: 6, facing: Direction.LEFT },
  'stool-r3':       { x: 8, y: 7, facing: Direction.LEFT },
  'entrance':       { x: 7, y: 10, facing: Direction.UP },
  'door':           { x: 7.5, y: 11, facing: Direction.UP },
  'floor-center':   { x: 6, y: 8, facing: Direction.DOWN },
  'dining-left':    { x: 10, y: 7, facing: Direction.LEFT },
  'dining-right':   { x: 10, y: 8, facing: Direction.RIGHT },
};

const STOOL_KEYS = ['stool-1', 'stool-2', 'stool-3', 'stool-4', 'stool-5', 'stool-r1', 'stool-r2', 'stool-r3'];
const occupiedStools = new Set<string>();

export function resolveLocation(
  target: LocationName | { x: number; y: number },
): { x: number; y: number; facing?: Direction } {
  if (typeof target === 'string') {
    if (target === 'random-stool') {
      return pickRandomStool();
    }
    const loc = LOCATIONS[target];
    if (!loc) throw new Error(`Unknown location: ${target}`);
    return loc;
  }
  return target;
}

function pickRandomStool(): LocationDef {
  const available = STOOL_KEYS.filter((k) => !occupiedStools.has(k));
  const pick = available.length > 0
    ? available[Math.floor(Math.random() * available.length)]
    : STOOL_KEYS[Math.floor(Math.random() * STOOL_KEYS.length)];
  occupiedStools.add(pick);
  return LOCATIONS[pick];
}

/** Reset occupied stools (call when starting a new episode). */
export function resetOccupiedStools(): void {
  occupiedStools.clear();
}

/**
 * Pixel-precise seat positions for sit sprites, keyed by "tileX,tileY".
 * Measured directly from diner-bg.png to eliminate tile→pixel rounding errors.
 */
const SEAT_PIXELS: Record<string, { px: number; py: number }> = {
  // Front counter stools (facing UP) — measured center + 3px sprite compensation
  '3,8':  { px: 88,  py: 254 },
  '4,8':  { px: 128, py: 254 },
  '5,8':  { px: 152, py: 254 },
  '6,8':  { px: 184, py: 254 },
  '7,8':  { px: 221, py: 254 },
  // Right-side stools (facing LEFT)
  '8,5':  { px: 261, py: 163 },
  '8,6':  { px: 261, py: 195 },
  '8,7':  { px: 261, py: 227 },
};

/** Get the exact pixel position for a sit sprite at the given tile. */
export function getSeatPixel(tileX: number, tileY: number): { px: number; py: number } | undefined {
  const key = `${Math.round(tileX)},${Math.round(tileY)}`;
  return SEAT_PIXELS[key];
}
