/**
 * Daily financial news collector.
 * Fetches RSS feeds, extracts headlines and summaries,
 * outputs structured JSON for episode generation.
 *
 * Usage:
 *   npx tsx scripts/collect-news.ts
 *   npx tsx scripts/collect-news.ts --out data/2025-04-08.json
 */

import Parser from 'rss-parser';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

// ── RSS Feed Sources ────────────────────────────────────────────

interface FeedSource {
  name: string;
  url: string;
  category: 'market' | 'tech' | 'economy' | 'crypto' | 'asia';
}

const FEEDS: FeedSource[] = [
  // Market & Stocks
  { name: 'Yahoo Finance Top', url: 'https://finance.yahoo.com/news/rssindex', category: 'market' },
  { name: 'MarketWatch Top Stories', url: 'https://feeds.marketwatch.com/marketwatch/topstories/', category: 'market' },
  { name: 'CNBC Top News', url: 'https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=100003114', category: 'market' },

  // Tech
  { name: 'Reuters Tech', url: 'https://feeds.reuters.com/reuters/technologyNews', category: 'tech' },
  { name: 'TechCrunch', url: 'https://techcrunch.com/feed/', category: 'tech' },

  // Economy
  { name: 'Reuters Business', url: 'https://feeds.reuters.com/reuters/businessNews', category: 'economy' },
  { name: 'CNBC Economy', url: 'https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=20910258', category: 'economy' },

  // Asia Markets
  { name: 'Nikkei Asia', url: 'https://asia.nikkei.com/rss', category: 'asia' },
];

// ── Types ───────────────────────────────────────────────────────

interface NewsItem {
  title: string;
  summary: string;
  link: string;
  pubDate: string;
  source: string;
  category: FeedSource['category'];
}

interface DailyDigest {
  date: string;
  collectedAt: string;
  totalItems: number;
  byCategory: Record<string, NewsItem[]>;
  topHeadlines: string[];
}

// ── Collector ───────────────────────────────────────────────────

const parser = new Parser({
  timeout: 10000,
  headers: {
    'User-Agent': 'MidnightDiner-MarketIntel/1.0',
  },
});

async function fetchFeed(source: FeedSource): Promise<NewsItem[]> {
  try {
    const feed = await parser.parseURL(source.url);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (feed.items ?? [])
      .filter((item) => {
        // Only include items from the last 24 hours
        if (!item.pubDate) return true;
        const pub = new Date(item.pubDate);
        const diff = today.getTime() - pub.getTime();
        return diff < 24 * 60 * 60 * 1000;
      })
      .slice(0, 10) // max 10 per feed
      .map((item) => ({
        title: item.title?.trim() ?? '',
        summary: (item.contentSnippet ?? item.content ?? '')
          .replace(/<[^>]+>/g, '')
          .trim()
          .slice(0, 300),
        link: item.link ?? '',
        pubDate: item.pubDate ?? '',
        source: source.name,
        category: source.category,
      }));
  } catch (err) {
    console.error(`  [WARN] Failed to fetch ${source.name}: ${(err as Error).message}`);
    return [];
  }
}

async function collectAll(): Promise<DailyDigest> {
  console.log(`Collecting financial news from ${FEEDS.length} RSS feeds...\n`);

  const allItems: NewsItem[] = [];

  for (const source of FEEDS) {
    process.stdout.write(`  Fetching ${source.name}...`);
    const items = await fetchFeed(source);
    console.log(` ${items.length} items`);
    allItems.push(...items);
  }

  // Group by category
  const byCategory: Record<string, NewsItem[]> = {};
  for (const item of allItems) {
    if (!byCategory[item.category]) {
      byCategory[item.category] = [];
    }
    byCategory[item.category].push(item);
  }

  // Extract top headlines (deduplicate by similarity)
  const seen = new Set<string>();
  const topHeadlines = allItems
    .filter((item) => {
      const key = item.title.toLowerCase().slice(0, 40);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 20)
    .map((item) => item.title);

  const now = new Date();
  return {
    date: now.toISOString().slice(0, 10),
    collectedAt: now.toISOString(),
    totalItems: allItems.length,
    byCategory,
    topHeadlines,
  };
}

// ── Main ────────────────────────────────────────────────────────

async function main() {
  const digest = await collectAll();

  console.log(`\nCollected ${digest.totalItems} items total:`);
  for (const [cat, items] of Object.entries(digest.byCategory)) {
    console.log(`  ${cat}: ${items.length} items`);
  }

  // Determine output path
  const outFlag = process.argv.indexOf('--out');
  const outPath = outFlag !== -1 && process.argv[outFlag + 1]
    ? resolve(process.argv[outFlag + 1])
    : resolve(`data/${digest.date}.json`);

  mkdirSync(resolve(outPath, '..'), { recursive: true });
  writeFileSync(outPath, JSON.stringify(digest, null, 2), 'utf-8');
  console.log(`\nSaved to ${outPath}`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
