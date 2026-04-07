import type { Episode } from '../../engine/types';
import { Direction } from '../../characters/types';

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
      toTile: { x: 5, y: 5 },
      facing: Direction.DOWN,
    },
    {
      type: 'move',
      character: 'chef',
      toTile: { x: 7, y: 8 },
    },
    {
      type: 'wait',
      duration: 800,
    },
    {
      type: 'enter',
      character: 'customer-a',
      toTile: { x: 15, y: 17 },
    },
    {
      type: 'dialogue',
      character: 'chef',
      text: 'いらっしゃい。何にしましょう？',
    },
    {
      type: 'move',
      character: 'customer-a',
      toTile: { x: 15, y: 13 },
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
      toTile: { x: 23, y: 17 },
    },
    {
      type: 'move',
      character: 'customer-b',
      toTile: { x: 23, y: 13 },
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
