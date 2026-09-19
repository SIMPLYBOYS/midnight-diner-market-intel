import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { enrichEpisodeWithLiveBinance } from './liveBinanceTickers';
import type { Episode, MarketTicker, MarketDataAction } from '../engine/types';

const realFetch = globalThis.fetch;
afterEach(() => { globalThis.fetch = realFetch; });

function epWith(tickers: MarketTicker[]): Episode {
  return { id: 'ep-test', title: 't', actions: [{ type: 'market-data', data: { tickers } }] };
}

function firstTickers(ep: Episode): MarketTicker[] {
  const a = ep.actions.find((x): x is MarketDataAction => x.type === 'market-data');
  return a?.data.tickers ?? [];
}

test('an episode with no market-data is returned unchanged', async () => {
  const ep: Episode = { id: 'ep-x', title: 't', actions: [] };
  assert.equal(await enrichEpisodeWithLiveBinance(ep), ep); // same reference — no work
});

test('only-unmapped symbols short-circuit before touching the network', async () => {
  let fetched = false;
  globalThis.fetch = (async () => { fetched = true; throw new Error('should not fetch'); }) as typeof fetch;
  const ep = epWith([{ symbol: 'Kospi（指數）', price: 100, change: -1 }]);
  const out = await enrichEpisodeWithLiveBinance(ep);
  assert.equal(fetched, false);
  assert.equal(out, ep);
});

test('network failure falls back to the baked prices (offline-safe)', async () => {
  globalThis.fetch = (async () => { throw new Error('network down'); }) as typeof fetch;
  const ep = epWith([{ symbol: 'Nvidia（6/5）', price: 123, change: -4 }]);
  const t = firstTickers(await enrichEpisodeWithLiveBinance(ep))[0];
  assert.equal(t.price, 123);
  assert.equal(t.change, -4);
});

test('a successful fetch rewrites price/change but keeps the display symbol', async () => {
  globalThis.fetch = (async () => new Response(
    JSON.stringify({ symbol: 'NVDAUSDT', lastPrice: '999.5', priceChangePercent: '7.25' }),
    { status: 200 },
  )) as typeof fetch;
  const ep = epWith([{ symbol: 'Nvidia（6/5）', price: 123, change: -4 }]);
  const t = firstTickers(await enrichEpisodeWithLiveBinance(ep))[0];
  assert.equal(t.price, 999.5);
  assert.equal(t.change, 7.25);
  assert.equal(t.symbol, 'Nvidia（6/5）');
});
