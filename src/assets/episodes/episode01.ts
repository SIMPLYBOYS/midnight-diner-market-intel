import type { Episode } from '../../engine/types';
import { Direction } from '../../characters/types';

/**
 * Episode 01 — First Customer.
 * Map is 16×12 (32px tiles). Key positions:
 *   Chef kitchen: row 1, cols 0-4
 *   Counter: row 2
 *   Stools: row 4 (cols 0,2,4)
 *   Table group 1: rows 5-6, cols 8-9 (seats at 7,10)
 *   Table group 2: rows 7-8, col 13 (seats at 12,14)
 *   Door: row 11, cols 7-8
 *   Entrance: row 10, cols 6-9
 */
export const EPISODE_01: Episode = {
  id: 'ep-01',
  title: 'First Customer',
  description: 'A quiet evening — the first customer arrives with market gossip.',
  actions: [
    {
      type: 'narration',
      text: '深夜，食堂的暖簾在微風中輕輕搖曳⋯⋯',
      duration: 3000,
    },
    {
      type: 'enter',
      character: 'chef',
      toTile: { x: 3, y: 1 },
      facing: Direction.DOWN,
    },
    {
      type: 'move',
      character: 'chef',
      toTile: { x: 3, y: 2 },
    },
    {
      type: 'wait',
      duration: 600,
    },
    {
      type: 'enter',
      character: 'customer-a',
      toTile: { x: 7, y: 7 },
    },
    {
      type: 'dialogue',
      character: 'chef',
      text: 'いらっしゃい。何にしましょう？',
    },
    {
      type: 'move',
      character: 'customer-a',
      toTile: { x: 7, y: 5 },
    },
    {
      type: 'sit',
      character: 'customer-a',
      facing: Direction.RIGHT,
    },
    {
      type: 'dialogue',
      character: 'customer-a',
      text: 'Master⋯⋯ 今天市場很不安定啊。',
    },
    {
      type: 'wait',
      duration: 500,
    },
    {
      type: 'emote',
      character: 'chef',
      emote: 'surprise',
      duration: 1000,
    },
    {
      type: 'dialogue',
      character: 'chef',
      text: '哦？聽說科技股跌了不少。',
    },
    {
      type: 'dialogue',
      character: 'customer-a',
      text: '是啊，NVIDIA 一天跌了 5%。不過有人說是買入機會。',
    },
    {
      type: 'camera',
      effect: 'shake',
      duration: 300,
      intensity: 2,
    },
    {
      type: 'wait',
      duration: 600,
    },
    {
      type: 'enter',
      character: 'customer-b',
      toTile: { x: 8, y: 7 },
    },
    {
      type: 'move',
      character: 'customer-b',
      toTile: { x: 12, y: 7 },
    },
    {
      type: 'sit',
      character: 'customer-b',
      facing: Direction.LEFT,
    },
    {
      type: 'dialogue',
      character: 'customer-b',
      text: '你們也在聊市場？我剛從交易所回來⋯⋯',
    },
    {
      type: 'narration',
      text: '深夜食堂裡，市場的故事才正要開始。',
      duration: 4000,
    },
  ],
};
