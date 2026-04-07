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
  'stool-1':        { x: 2, y: 7, facing: Direction.UP },
  'stool-2':        { x: 3, y: 7, facing: Direction.UP },
  'stool-3':        { x: 4, y: 7, facing: Direction.UP },
  'stool-4':        { x: 5, y: 7, facing: Direction.UP },
  'stool-5':        { x: 6, y: 7, facing: Direction.UP },
  'stool-r1':       { x: 7, y: 4, facing: Direction.LEFT },
  'stool-r2':       { x: 7, y: 5, facing: Direction.LEFT },
  'stool-r3':       { x: 7, y: 6, facing: Direction.LEFT },
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
