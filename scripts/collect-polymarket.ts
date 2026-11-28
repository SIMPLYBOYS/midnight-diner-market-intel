/**
 * Polymarket snapshot collector.
 * Fetches current odds + short history for a configured slug list from the
 * public Gamma + CLOB APIs and writes two files:
 *
 *   data/polymarket-YYYY-MM-DD.json        (author reference)
 *   public/polymarket/latest.json          (served as live-mode fallback)
 *
 * Usage:
 *   npx tsx scripts/collect-polymarket.ts
 *   npx tsx scripts/collect-polymarket.ts --slugs foo,bar,baz
 *   npx tsx scripts/collect-polymarket.ts --out data/custom.json
 *   npx tsx scripts/collect-polymarket.ts --slugs foo,bar --ts
 *       (also prints a TS literal block to stdout, ready to paste into
 *        an episode's polymarket-odds action, with history trimmed to
 *        the last 30 points per market)
 *   npx tsx scripts/collect-polymarket.ts --slugs foo,bar --ts --ts-history 60
 *       (override history trim — default 30)
 *   npx tsx scripts/collect-polymarket.ts --slugs foo,bar --ts --ts-highlight foo
 *       (mark slug `foo` as highlightSlug in the emitted block)
 */

import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const GAMMA_BASE = 'https://gamma-api.polymarket.com/markets';
const CLOB_HISTORY = 'https://clob.polymarket.com/prices-history';

// Default featured slugs. Override at runtime via `--slugs a,b,c`.
// These are placeholders; verify against live Gamma listings before baking into an episode.
const DEFAULT_SLUGS = [
  'iran-us-ceasefire-by-2026-07-01',
  'wti-above-100-by-2026-06-30',
  'us-recession-2026',
];

interface GammaMarket {
  slug: string;
  question: string;
  outcomes: string[] | string;
  outcomePrices: string[] | string;
  volume?: number;
  volumeNum?: number;
  liquidity?: number;
  liquidityNum?: number;
  endDate?: string;
  clobTokenIds?: string[] | string;
}

interface HistoryPoint { t: number; p: number; }

interface SnapshotMarket {
  slug: string;
  question: string;
  yesProbability: number;
  volume?: number;
  liquidity?: number;
  endDate?: string;
  history?: HistoryPoint[];
}

interface Snapshot {
  collectedAt: string;
  markets: SnapshotMarket[];
}

function parseMaybeArray(v: string[] | string | undefined): string[] {
  if (!v) return [];
  if (Array.isArray(v)) return v;
  try {
    const parsed = JSON.parse(v);
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

function parseYes(m: GammaMarket): number {
  const outcomes = parseMaybeArray(m.outcomes);
  const prices = parseMaybeArray(m.outcomePrices);
  const yesIdx = outcomes.findIndex((o) => o.toLowerCase() === 'yes');
  const raw = prices[yesIdx === -1 ? 0 : yesIdx];
  const n = Number(raw);
  return Number.isFinite(n) ? Math.max(0, Math.min(1, n)) : 0;
}

async function fetchGamma(slug: string): Promise<GammaMarket | null> {
  try {
    const res = await fetch(`${GAMMA_BASE}?slug=${encodeURIComponent(slug)}`);
    if (!res.ok) return null;
    const data = (await res.json()) as unknown;
    if (!Array.isArray(data) || data.length === 0) return null;
    return data[0] as GammaMarket;
  } catch (err) {
    console.error(`  [WARN] Gamma fetch failed for ${slug}: ${(err as Error).message}`);
    return null;
  }
}

async function fetchHistory(tokenId: string): Promise<HistoryPoint[] | undefined> {
  try {
    const res = await fetch(`${CLOB_HISTORY}?market=${encodeURIComponent(tokenId)}&interval=1w&fidelity=60`);
    if (!res.ok) return undefined;
    const data = (await res.json()) as { history?: Array<{ t: number; p: number | string }> };
    if (!Array.isArray(data.history)) return undefined;
    return data.history.map((pt) => ({
      t: pt.t,
      p: typeof pt.p === 'string' ? Number(pt.p) : pt.p,
    }));
  } catch {
    return undefined;
  }
}

async function collectSlug(slug: string): Promise<SnapshotMarket | null> {
  process.stdout.write(`  ${slug}...`);
  const m = await fetchGamma(slug);
  if (!m) {
    console.log(' [skip]');
    return null;
  }
  const yes = parseYes(m);
  const tokenIds = parseMaybeArray(m.clobTokenIds);
  const history = tokenIds.length > 0 ? await fetchHistory(tokenIds[0]) : undefined;
  console.log(` YES ${(yes * 100).toFixed(1)}%${history ? ` (${history.length}pts)` : ''}`);
  return {
    slug: m.slug,
    question: m.question,
    yesProbability: yes,
    volume: m.volumeNum ?? m.volume,
    liquidity: m.liquidityNum ?? m.liquidity,
    endDate: m.endDate,
    history,
  };
}

interface CliArgs {
  slugs: string[];
  out?: string;
  emitTs: boolean;
  tsHistory: number;
  tsHighlight?: string;
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);
  let slugs = DEFAULT_SLUGS;
  let out: string | undefined;
  let emitTs = false;
  let tsHistory = 30;
  let tsHighlight: string | undefined;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--slugs' && args[i + 1]) {
      slugs = args[i + 1].split(',').map((s) => s.trim()).filter(Boolean);
      i++;
    } else if (args[i] === '--out' && args[i + 1]) {
      out = args[i + 1];
      i++;
    } else if (args[i] === '--ts') {
      emitTs = true;
    } else if (args[i] === '--ts-history' && args[i + 1]) {
      const n = Number(args[i + 1]);
      if (Number.isFinite(n) && n > 0) tsHistory = Math.floor(n);
      i++;
    } else if (args[i] === '--ts-highlight' && args[i + 1]) {
      tsHighlight = args[i + 1];
      i++;
    }
  }
  return { slugs, out, emitTs, tsHistory, tsHighlight };
}

function emitTsLiteral(snapshot: Snapshot, historyCap: number, highlightSlug: string | undefined): void {
  const indent = '      '; // six spaces to sit inside a `data: { ... }` block
  const lines: string[] = [];
  lines.push('// ── Paste into an episode as:  { type: \'polymarket-odds\', data: { ... } } ──');
  lines.push(`{`);
  lines.push(`${indent}asOf: '${snapshot.collectedAt}',`);
  if (highlightSlug) {
    lines.push(`${indent}highlightSlug: '${highlightSlug}',`);
  }
  lines.push(`${indent}markets: [`);
  for (const m of snapshot.markets) {
    lines.push(`${indent}  {`);
    lines.push(`${indent}    slug: ${JSON.stringify(m.slug)},`);
    lines.push(`${indent}    question: ${JSON.stringify(m.question)},`);
    lines.push(`${indent}    yesProbability: ${m.yesProbability.toFixed(4)},`);
    if (m.volume !== undefined) {
      lines.push(`${indent}    volume: ${Math.round(m.volume)},`);
    }
    if (m.endDate) {
      lines.push(`${indent}    endDate: ${JSON.stringify(m.endDate)},`);
    }
    const history = (m.history ?? []).slice(-historyCap);
    if (history.length > 0) {
      lines.push(`${indent}    history: [`);
      const parts = history.map((p) => `{ t: ${p.t}, p: ${Number(p.p).toFixed(4)} }`);
      for (let i = 0; i < parts.length; i += 4) {
        lines.push(`${indent}      ${parts.slice(i, i + 4).join(', ')},`);
      }
      lines.push(`${indent}    ],`);
    }
    lines.push(`${indent}  },`);
  }
  lines.push(`${indent}],`);
  lines.push('},');

  console.log('\n─── TS literal (paste as the `data` value of a polymarket-odds action) ───');
  console.log(lines.join('\n'));
  console.log('──────────────────────────────────────────────────────────────────────────');
}

async function main() {
  const { slugs, out, emitTs, tsHistory, tsHighlight } = parseArgs();
  console.log(`Collecting Polymarket odds for ${slugs.length} slugs...\n`);

  const markets: SnapshotMarket[] = [];
  for (const slug of slugs) {
    const m = await collectSlug(slug);
    if (m) markets.push(m);
    // Be polite: 300ms between calls.
    await new Promise((r) => setTimeout(r, 300));
  }

  const now = new Date();
  const snapshot: Snapshot = {
    collectedAt: now.toISOString(),
    markets,
  };

  const date = now.toISOString().slice(0, 10);
  const outPath = out ? resolve(out) : resolve(`data/polymarket-${date}.json`);
  const servedPath = resolve('public/polymarket/latest.json');

  mkdirSync(resolve(outPath, '..'), { recursive: true });
  writeFileSync(outPath, JSON.stringify(snapshot, null, 2), 'utf-8');
  console.log(`\nSaved ${markets.length} markets to ${outPath}`);

  mkdirSync(resolve(servedPath, '..'), { recursive: true });
  writeFileSync(servedPath, JSON.stringify(snapshot, null, 2), 'utf-8');
  console.log(`Also wrote ${servedPath} (live-mode fallback)`);

  if (emitTs) {
    emitTsLiteral(snapshot, tsHistory, tsHighlight);
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
