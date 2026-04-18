/**
 * Daily financial news + market data collector.
 * Fetches RSS feeds and real-time stock quotes via Finnhub API.
 *
 * Usage:
 *   npx tsx scripts/collect-news.ts
 *   npx tsx scripts/collect-news.ts --out data/2025-04-08.json
 *
 * Environment:
 *   FINNHUB_API_KEY — free API key from https://finnhub.io (optional, skips quotes if missing)
 */

import Parser from 'rss-parser';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const FINNHUB_KEY = process.env.FINNHUB_API_KEY ?? '';

// ── RSS Feed Sources ────────────────────────────────────────────

interface FeedSource {
  name: string;
  url: string;
  category: 'market' | 'tech' | 'economy' | 'crypto' | 'asia';
}

const FEEDS: FeedSource[] = [
  { name: 'Yahoo Finance Top', url: 'https://finance.yahoo.com/news/rssindex', category: 'market' },
  { name: 'MarketWatch Top Stories', url: 'https://feeds.marketwatch.com/marketwatch/topstories/', category: 'market' },
  { name: 'CNBC Top News', url: 'https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=100003114', category: 'market' },
  { name: 'Reuters Tech', url: 'https://feeds.reuters.com/reuters/technologyNews', category: 'tech' },
  { name: 'TechCrunch', url: 'https://techcrunch.com/feed/', category: 'tech' },
  { name: 'Reuters Business', url: 'https://feeds.reuters.com/reuters/businessNews', category: 'economy' },
  { name: 'CNBC Economy', url: 'https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=20910258', category: 'economy' },
  { name: 'Nikkei Asia', url: 'https://asia.nikkei.com/rss', category: 'asia' },
];

// ── Stock symbols to track ──────────────────────────────────────

const WATCH_SYMBOLS = [
  // Major indices ETFs
  'SPY', 'QQQ', 'DIA',
  // Mega-cap tech
  'AAPL', 'MSFT', 'GOOG', 'AMZN', 'NVDA', 'META', 'TSLA',
  // Semiconductor
  'AMD', 'INTC', 'AVGO',
  // Other notable
  'NFLX', 'JPM', 'XOM', 'LMT',
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

interface StockQuote {
  symbol: string;
  price: number;       // current price
  change: number;      // percent change
  high: number;        // day high
  low: number;         // day low
  prevClose: number;   // previous close
}

interface MarketSnapshot {
  quotes: StockQuote[];
  fetchedAt: string;
}

interface DailyDigest {
  date: string;
  collectedAt: string;
  totalItems: number;
  byCategory: Record<string, NewsItem[]>;
  topHeadlines: string[];
  market?: MarketSnapshot;
}

// ── RSS Collector ───────────────────────────────────────────────

const parser = new Parser({
  timeout: 10000,
  headers: { 'User-Agent': 'MidnightDiner-MarketIntel/1.0' },
});

async function fetchFeed(source: FeedSource): Promise<NewsItem[]> {
  try {
    const feed = await parser.parseURL(source.url);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (feed.items ?? [])
      .filter((item) => {
        if (!item.pubDate) return true;
        const pub = new Date(item.pubDate);
        return today.getTime() - pub.getTime() < 24 * 60 * 60 * 1000;
      })
      .slice(0, 10)
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

// ── Finnhub Quote Fetcher ───────────────────────────────────────

async function fetchQuote(symbol: string): Promise<StockQuote | null> {
  try {
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    // Finnhub returns { c, d, dp, h, l, o, pc, t }
    // c=current, d=change, dp=percent change, h=high, l=low, pc=prev close
    if (!data.c || data.c === 0) return null;
    return {
      symbol,
      price: data.c,
      change: data.dp ?? 0,
      high: data.h ?? data.c,
      low: data.l ?? data.c,
      prevClose: data.pc ?? data.c,
    };
  } catch {
    return null;
  }
}

async function fetchAllQuotes(): Promise<MarketSnapshot> {
  console.log(`\nFetching quotes for ${WATCH_SYMBOLS.length} symbols via Finnhub...\n`);
  const quotes: StockQuote[] = [];

  for (const symbol of WATCH_SYMBOLS) {
    process.stdout.write(`  ${symbol}...`);
    const quote = await fetchQuote(symbol);
    if (quote) {
      console.log(` $${quote.price.toFixed(2)} (${quote.change >= 0 ? '+' : ''}${quote.change.toFixed(2)}%)`);
      quotes.push(quote);
    } else {
      console.log(' [skip]');
    }
    // Rate limit: Finnhub free = 60 req/min → ~1 req/sec is safe
    await new Promise((r) => setTimeout(r, 1100));
  }

  return {
    quotes,
    fetchedAt: new Date().toISOString(),
  };
}

// ── Main Collector ──────────────────────────────────────────────

async function collectAll(): Promise<DailyDigest> {
  console.log(`Collecting financial news from ${FEEDS.length} RSS feeds...\n`);

  const allItems: NewsItem[] = [];
  for (const source of FEEDS) {
    process.stdout.write(`  Fetching ${source.name}...`);
    const items = await fetchFeed(source);
    console.log(` ${items.length} items`);
    allItems.push(...items);
  }

  const byCategory: Record<string, NewsItem[]> = {};
  for (const item of allItems) {
    if (!byCategory[item.category]) byCategory[item.category] = [];
    byCategory[item.category].push(item);
  }

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
  const digest: DailyDigest = {
    date: now.toISOString().slice(0, 10),
    collectedAt: now.toISOString(),
    totalItems: allItems.length,
    byCategory,
    topHeadlines,
  };

  // Fetch real market quotes if API key is available
  if (FINNHUB_KEY) {
    digest.market = await fetchAllQuotes();
  } else {
    console.log('\n  [INFO] FINNHUB_API_KEY not set — skipping real-time quotes.');
    console.log('  Get a free key at https://finnhub.io and run:');
    console.log('  FINNHUB_API_KEY=your_key npm run collect\n');
  }

  return digest;
}

// ── Main ────────────────────────────────────────────────────────

async function main() {
  const digest = await collectAll();

  console.log(`\nCollected ${digest.totalItems} news items:`);
  for (const [cat, items] of Object.entries(digest.byCategory)) {
    console.log(`  ${cat}: ${items.length} items`);
  }
  if (digest.market) {
    console.log(`  quotes: ${digest.market.quotes.length} symbols`);
  }

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
