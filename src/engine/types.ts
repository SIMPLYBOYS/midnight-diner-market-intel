import type { Direction } from '../characters/types';

// ── Action types (discriminated union) ──────────────────────────

interface BaseAction {
  type: string;
  delay?: number; // optional pre-delay in ms
}

export interface EnterAction extends BaseAction {
  type: 'enter';
  character: string;
  toTile: { x: number; y: number };
  facing?: Direction;
}

export interface MoveAction extends BaseAction {
  type: 'move';
  character: string;
  toTile: { x: number; y: number };
}

export interface SitAction extends BaseAction {
  type: 'sit';
  character: string;
  facing?: Direction;
}

export interface DialogueAction extends BaseAction {
  type: 'dialogue';
  character: string;
  text: string;
  duration?: number;
}

export interface WaitAction extends BaseAction {
  type: 'wait';
  duration: number;
}

export interface EmoteAction extends BaseAction {
  type: 'emote';
  character: string;
  emote: string;
  duration?: number;
}

export interface CameraAction extends BaseAction {
  type: 'camera';
  effect: 'shake' | 'fade-in' | 'fade-out' | 'flash';
  duration?: number;
  intensity?: number;
}

export interface NarrationAction extends BaseAction {
  type: 'narration';
  text: string;
  duration?: number;
}

export type Action =
  | EnterAction
  | MoveAction
  | SitAction
  | DialogueAction
  | WaitAction
  | EmoteAction
  | CameraAction
  | NarrationAction;

// ── Episode ─────────────────────────────────────────────────────

export interface Episode {
  id: string;
  title: string;
  description?: string;
  actions: Action[];
}

export interface EpisodeMeta {
  id: string;
  title: string;
  description?: string;
}

// ── Player state ────────────────────────────────────────────────

export const PlayerState = {
  IDLE: 'idle',
  PLAYING: 'playing',
  PAUSED: 'paused',
  FINISHED: 'finished',
} as const;
export type PlayerState = (typeof PlayerState)[keyof typeof PlayerState];
