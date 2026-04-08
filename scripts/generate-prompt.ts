/**
 * Prompt generator for Claude episode creation.
 * Reads collected RSS data and outputs a ready-to-paste prompt.
 *
 * Usage:
 *   npx tsx scripts/generate-prompt.ts                    # uses today's data
 *   npx tsx scripts/generate-prompt.ts data/2025-04-08.json
 *   npx tsx scripts/generate-prompt.ts data/2025-04-08.json --episode 3
 */

import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

// ── Load data ───────────────────────────────────────────────────

const dateStr = new Date().toISOString().slice(0, 10);
const inputArg = process.argv[2];
const dataPath = inputArg && !inputArg.startsWith('--')
  ? resolve(inputArg)
  : resolve(`data/${dateStr}.json`);

if (!existsSync(dataPath)) {
  console.error(`Data file not found: ${dataPath}`);
  console.error('Run `npm run collect` first.');
  process.exit(1);
}

const epFlag = process.argv.indexOf('--episode');
const episodeNum = epFlag !== -1 && process.argv[epFlag + 1]
  ? parseInt(process.argv[epFlag + 1], 10)
  : 3;

interface NewsItem {
  title: string;
  summary: string;
  source: string;
  category: string;
}

interface DailyDigest {
  date: string;
  totalItems: number;
  byCategory: Record<string, NewsItem[]>;
  topHeadlines: string[];
}

const digest: DailyDigest = JSON.parse(readFileSync(dataPath, 'utf-8'));

// ── Build market summary ────────────────────────────────────────

function buildMarketSummary(): string {
  const sections: string[] = [];

  sections.push(`Date: ${digest.date}`);
  sections.push(`Total news items collected: ${digest.totalItems}`);
  sections.push('');

  sections.push('## Top Headlines');
  for (const h of digest.topHeadlines.slice(0, 15)) {
    sections.push(`- ${h}`);
  }
  sections.push('');

  for (const [category, items] of Object.entries(digest.byCategory)) {
    sections.push(`## ${category.toUpperCase()} (${items.length} items)`);
    for (const item of items.slice(0, 8)) {
      sections.push(`- [${item.source}] ${item.title}`);
      if (item.summary) {
        sections.push(`  ${item.summary.slice(0, 150)}`);
      }
    }
    sections.push('');
  }

  return sections.join('\n');
}

// ── Build prompt ────────────────────────────────────────────────

function buildPrompt(): string {
  const summary = buildMarketSummary();

  return `You are writing a JSON episode script for "Midnight Diner × Market Intel", a pixel-art interactive demo where characters discuss real market events in a cozy late-night Japanese diner.

## Context

Today's financial news is summarized below. Pick the 2-3 most interesting/dramatic stories and weave them into a diner conversation.

<market-data>
${summary}
</market-data>

## Episode Format

Generate a valid TypeScript file that exports an Episode object. Use this exact structure:

\`\`\`typescript
import type { Episode } from '../../engine/types';

export const EPISODE_${String(episodeNum).padStart(2, '0')}: Episode = {
  id: 'ep-${String(episodeNum).padStart(2, '0')}',
  title: '...',  // Short English title
  description: '...', // One-line English description
  actions: [
    // ... actions array
  ],
};
\`\`\`

## Available Action Types

- \`{ type: 'bgm', track: 'bossa-lofi' | 'chill-lofi', command: 'play' }\` — start BGM
- \`{ type: 'narration', text: '...', duration: 3000 }\` — narration overlay (Chinese text)
- \`{ type: 'enter', character: 'chef' | 'customer-a' | 'customer-b', toTile: 'stove' | 'entrance' }\` — spawn character
- \`{ type: 'move', character: '...', toTile: LocationName }\` — move character
  - LocationNames: 'stove', 'prep-area', 'counter-center', 'random-stool', 'entrance'
- \`{ type: 'sit', character: '...' }\` — sit down after moving to stool
- \`{ type: 'dialogue', character: '...', text: '...' }\` — speech bubble (Chinese text)
- \`{ type: 'wait', duration: 500 }\` — pause in ms
- \`{ type: 'emote', character: '...', emote: 'surprise', duration: 1000 }\`
- \`{ type: 'camera', effect: 'shake' | 'flash', duration: 300, intensity: 2 }\`
- \`{ type: 'market-data', data: { ... } }\` — update the market dashboard
  - data fields: tickers (array of {symbol, price, change}), priceHistory (number[]),
    volumeHistory (number[]), volatility (0-100), vix, rsi, beta,
    sectors (array of {label, value, color}), headline (string)
- \`{ type: 'sfx', sound: 'ding' | 'chimes' | 'alarm' | 'click' | 'ding-deep' }\`

## Episode Structure Guidelines

1. Start with \`bgm\` action, then a narration setting the scene
2. Chef is always at the stove first, doing prep work
3. Customer A enters, sits at counter, starts discussing today's market
4. Insert \`market-data\` actions synced with dialogue — when a character mentions a stock/event, the dashboard should update to reflect it
5. Customer B may enter later with a different perspective
6. Include 3-4 \`market-data\` updates throughout (initial calm → tension → climax → resolution)
7. End with a reflective narration
8. All dialogue text should be in **Traditional Chinese** (繁體中文)
9. Narration text should also be in Traditional Chinese
10. Keep the conversation natural — these are regular customers chatting, not news anchors

## Market Data Realism

- Use realistic stock symbols and prices from the news
- VIX should correlate with market tension in the story
- Sector data should reflect the actual market narrative
- Headlines should be concise Traditional Chinese summaries of real events

Now generate Episode ${String(episodeNum).padStart(2, '0')} based on today's market news.`;
}

// ── Output ──────────────────────────────────────────────────────

const prompt = buildPrompt();

console.log('='.repeat(60));
console.log('PROMPT FOR CLAUDE — Copy everything below this line');
console.log('='.repeat(60));
console.log('');
console.log(prompt);
console.log('');
console.log('='.repeat(60));
console.log(`Prompt length: ${prompt.length} characters`);
console.log(`Based on: ${dataPath}`);
console.log(`Target episode: EP-${String(episodeNum).padStart(2, '0')}`);
