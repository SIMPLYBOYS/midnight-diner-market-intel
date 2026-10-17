import type { Direction } from '../characters/types';
import type { LocationName } from '../navigation/LocationMap';

// ── Action types (discriminated union) ──────────────────────────

interface BaseAction {
  type: string;
  delay?: number; // optional pre-delay in ms
}

export interface EnterAction extends BaseAction {
  type: 'enter';
  character: string;
  toTile: { x: number; y: number } | LocationName;
  facing?: Direction;
}

export interface MoveAction extends BaseAction {
  type: 'move';
  character: string;
  toTile: { x: number; y: number } | LocationName;
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

export interface MarketTicker {
  symbol: string;
  price: number;
  change: number; // percentage, e.g. -5.2
}

export interface MarketDataPayload {
  tickers?: MarketTicker[];
  priceHistory?: number[];
  volumeHistory?: number[];
  volatility?: number;        // 0-100
  vix?: number;
  rsi?: number;
  beta?: number;
  sectors?: { label: string; value: number; color: string }[];
  headline?: string;          // breaking-news style headline
}

export interface MarketDataAction extends BaseAction {
  type: 'market-data';
  data: MarketDataPayload;
  duration?: number;          // optional hold time before next action
}

// ── Polymarket (prediction market) odds ────────────────────────

export interface PolymarketHistoryPoint {
  t: number;    // unix seconds
  p: number;    // probability 0–1
}

export interface PolymarketMarket {
  slug: string;
  question: string;
  yesProbability: number;     // 0–1, already parsed from Gamma's stringified outcomePrices
  volume?: number;            // USDC
  liquidity?: number;
  endDate?: string;           // ISO
  history?: PolymarketHistoryPoint[];
}

export interface PolymarketOddsPayload {
  markets: PolymarketMarket[];
  highlightSlug?: string;     // spotlight one market (larger donut + history)
  asOf?: string;              // ISO timestamp; drives LIVE vs SNAPSHOT chip
}

export interface PolymarketOddsAction extends BaseAction {
  type: 'polymarket-odds';
  data: PolymarketOddsPayload;
  duration?: number;
}

export interface BgmAction extends BaseAction {
  type: 'bgm';
  track: string;              // BgmKey from AudioManager
  command: 'play' | 'stop';
  fade?: boolean;
}

export interface SfxAction extends BaseAction {
  type: 'sfx';
  sound: string;              // SfxKey from AudioManager
}

export type Action =
  | EnterAction
  | MoveAction
  | SitAction
  | DialogueAction
  | WaitAction
  | EmoteAction
  | CameraAction
  | NarrationAction
  | MarketDataAction
  | PolymarketOddsAction
  | BgmAction
  | SfxAction;

// ── Episode ─────────────────────────────────────────────────────

export interface Episode {
  id: string;
  date?: string;
  title: string;
  description?: string;
  actions: Action[];
}

export interface EpisodeMeta {
  id: string;
  date?: string;
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
