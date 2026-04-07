import type { Episode } from '../../engine/types';

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

    // Chef spawns at stove (auto-faces LEFT from LocationMap)
    { type: 'enter', character: 'chef', toTile: 'stove' },

    // Chef moves around kitchen naturally
    { type: 'wait', duration: 700 },
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 400 },
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'wait', duration: 200 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    // Customer A enters from door
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },

    // Chef turns toward customer
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'dialogue', character: 'chef', text: 'いらっしゃい。何にしましょう？' },

    // Customer A auto-paths to stool (pathfinder avoids counter)
    { type: 'move', character: 'customer-a', toTile: 'stool-2' },
    { type: 'sit', character: 'customer-a' },

    // Chef returns to stove
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 500 },

    { type: 'dialogue', character: 'customer-a', text: 'Master⋯⋯ 今天市場很不安定啊。' },

    // Chef reacts
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'emote', character: 'chef', emote: 'surprise', duration: 1000 },

    { type: 'dialogue', character: 'chef', text: '哦？聽說科技股跌了不少。' },

    // Chef tends stove while listening
    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 300 },

    { type: 'dialogue', character: 'customer-a', text: '是啊，NVIDIA 一天跌了 5%。不過有人說是買入機會。' },

    { type: 'camera', effect: 'shake', duration: 300, intensity: 2 },

    // Chef paces
    { type: 'move', character: 'chef', toTile: 'prep-area' },
    { type: 'wait', duration: 300 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    // Customer B enters
    { type: 'enter', character: 'customer-b', toTile: 'entrance' },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'wait', duration: 200 },

    // Customer B auto-paths to stool
    { type: 'move', character: 'customer-b', toTile: 'stool-4' },
    { type: 'sit', character: 'customer-b' },

    { type: 'move', character: 'chef', toTile: 'stove' },

    { type: 'dialogue', character: 'customer-b', text: '你們也在聊市場？我剛從交易所回來⋯⋯' },

    // Chef nods
    { type: 'move', character: 'chef', toTile: 'counter-center' },
    { type: 'wait', duration: 300 },
    { type: 'move', character: 'chef', toTile: 'stove' },

    {
      type: 'narration',
      text: '深夜食堂裡，市場的故事才正要開始。',
      duration: 4000,
    },
  ],
};
