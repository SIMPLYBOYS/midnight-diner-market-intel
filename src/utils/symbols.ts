/**
 * Strip the parenthesized annotation episode scripts attach to ticker
 * symbols. Scripts author display names like `"Kospi（6/1 收、再破紀錄）"`
 * so the sectors chart carries context, but tickers/marquees only have
 * room for the short identifier — keep "Kospi", drop the rest.
 *
 * Falls back to the original string if stripping would leave it empty.
 */
export function cleanSymbol(s: string): string {
  return s.replace(/\s*[（(].*$/u, '').trim() || s;
}
