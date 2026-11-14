/**
 * Minimal logger utility — the project convention forbids bare `console.log`
 * for debugging; route diagnostics through here so output can be silenced or
 * redirected in one place. `warn`/`error` stay on in production (real
 * failures); `debug` is gated to dev builds.
 */
const isDev = typeof import.meta !== 'undefined' && import.meta.env?.DEV === true;

export const logger = {
  debug(...args: unknown[]): void {
    if (isDev) console.debug('[midnight-diner]', ...args);
  },
  warn(...args: unknown[]): void {
    console.warn('[midnight-diner]', ...args);
  },
  error(...args: unknown[]): void {
    console.error('[midnight-diner]', ...args);
  },
};
