import type { Action } from './types';

// ── Event payload map ───────────────────────────────────────────

export interface EventMap {
  'timeline:started': { episodeId: string };
  'timeline:action': { action: Action; index: number };
  'timeline:paused': undefined;
  'timeline:resumed': undefined;
  'timeline:finished': { episodeId: string };
  'dialogue:show': { character: string; text: string; screenX: number; screenY: number };
  'dialogue:hide': undefined;
  'narration:show': { text: string };
  'narration:hide': undefined;
  'emote:show': { character: string; emote: string };
  'emote:hide': { character: string };
}

type EventKey = keyof EventMap;
type Callback<K extends EventKey> = EventMap[K] extends undefined
  ? () => void
  : (payload: EventMap[K]) => void;

// ── Typed event bus ─────────────────────────────────────────────

class EventBus {
  private listeners = new Map<string, Set<Callback<never>>>();

  on<K extends EventKey>(event: K, cb: Callback<K>): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(cb as Callback<never>);
  }

  off<K extends EventKey>(event: K, cb: Callback<K>): void {
    this.listeners.get(event)?.delete(cb as Callback<never>);
  }

  emit<K extends EventKey>(
    event: K,
    ...args: EventMap[K] extends undefined ? [] : [EventMap[K]]
  ): void {
    const set = this.listeners.get(event);
    if (!set) return;
    const payload = args[0];
    for (const cb of set) {
      (cb as (p?: unknown) => void)(payload);
    }
  }

  removeAll(): void {
    this.listeners.clear();
  }
}

/** Singleton event bus shared between Phaser and React */
export const eventBus = new EventBus();
