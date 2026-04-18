import type { Episode } from '../../engine/types';

export const EPISODE_13: Episode = {
  id: 'ep-13',
  date: '2026-04-19',
  title: '20260419 Crowd Wisdom',
  description: 'Saturday — the diner switches the CRT over to Polymarket to see how prediction markets re-priced the Iran crisis. Ceasefire odds collapse 62% → 14%; WTI-over-$100 flips 18% → 81%. The crowd, with real money on the table, tells a harsher story than the news did.',
  actions: [
    { type: 'bgm', track: 'chill-lofi', command: 'play' },

    {
      type: 'narration',
      text: '週六深夜。老闆把食堂的 CRT 轉到 Polymarket 的儀表板——新聞會選字，賭盤不會。因為賭徒的錢在桌上。',
      duration: 3800,
    },

    // ── Baseline snapshot (pre-blockade, from ep06 timeframe) ──
    {
      type: 'polymarket-odds',
      data: {
        markets: [
          {
            slug: 'iran-us-ceasefire-by-2026-07-01',
            question: 'Iran–US ceasefire signed by July 1, 2026?',
            yesProbability: 0.62,
            volume: 2_400_000,
            endDate: '2026-07-01',
          },
          {
            slug: 'wti-above-100-by-2026-06-30',
            question: 'WTI crude > $100 by June 30, 2026?',
            yesProbability: 0.18,
            volume: 880_000,
            endDate: '2026-06-30',
          },
          {
            slug: 'us-recession-2026',
            question: 'US recession declared in 2026?',
            yesProbability: 0.29,
            volume: 5_100_000,
            endDate: '2026-12-31',
          },
        ],
        highlightSlug: 'iran-us-ceasefire-by-2026-07-01',
      },
      duration: 3000,
    },

    { type: 'enter', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 400 },
    { type: 'enter', character: 'customer-a', toTile: 'entrance' },
    { type: 'move', character: 'customer-a', toTile: 'random-stool' },
    { type: 'sit', character: 'customer-a' },

    {
      type: 'dialogue',
      character: 'customer-a',
      text: '兩週前這個畫面——和平合約 62%、油價破百 18%、衰退 29%。賭徒那時候還覺得事情會軟著陸。',
    },

    { type: 'move', character: 'chef', toTile: 'counter-center' },
    {
      type: 'dialogue',
      character: 'chef',
      text: '那今天的賠率呢？封鎖發生之後，賭盤怎麼說？',
    },

    { type: 'camera', effect: 'flash', duration: 200 },
    { type: 'sfx', sound: 'chimes' },

    // ── Post-blockade snapshot — probabilities collapse ──
    {
      type: 'polymarket-odds',
      data: {
        markets: [
          {
            slug: 'iran-us-ceasefire-by-2026-07-01',
            question: 'Iran–US ceasefire signed by July 1, 2026?',
            yesProbability: 0.14,
            volume: 11_800_000,
            endDate: '2026-07-01',
          },
          {
            slug: 'wti-above-100-by-2026-06-30',
            question: 'WTI crude > $100 by June 30, 2026?',
            yesProbability: 0.81,
            volume: 6_200_000,
            endDate: '2026-06-30',
          },
          {
            slug: 'us-recession-2026',
            question: 'US recession declared in 2026?',
            yesProbability: 0.44,
            volume: 9_400_000,
            endDate: '2026-12-31',
          },
        ],
        highlightSlug: 'wti-above-100-by-2026-06-30',
      },
      duration: 3800,
    },

    {
      type: 'dialogue',
      character: 'customer-a',
      text: '和平從 62% 砍到 14%——賭徒兩週內把 $9M 新倉位加在 NO 那邊。油價破百從 18% 飆到 81%——$5M 追進 YES。',
    },

    { type: 'move', character: 'chef', toTile: 'stove' },
    { type: 'wait', duration: 300 },

    {
      type: 'dialogue',
      character: 'customer-a',
      text: '衰退機率也從 29% 爬到 44%。還沒過半，但方向很清楚——這已經不是 tail risk，而是 base case 在移動。',
    },

    {
      type: 'dialogue',
      character: 'chef',
      text: '新聞頭條還在說「雙方都在尋求對話空間」。',
    },

    { type: 'emote', character: 'customer-a', emote: 'surprise', duration: 700 },

    {
      type: 'dialogue',
      character: 'customer-a',
      text: '新聞要賣廣告，賭盤要賣信念。把錢放上桌的人，沒空寫外交辭令。',
    },

    { type: 'wait', duration: 400 },

    {
      type: 'narration',
      text: '賠率是一種集資後的共識。它不會告訴你為什麼，但會告訴你有多少人相信——而且相信到願意把錢押上去。這就是賭盤比新聞誠實的原因。',
      duration: 4200,
    },
  ],
};
