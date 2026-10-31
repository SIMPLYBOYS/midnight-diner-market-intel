import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cleanSymbol } from './symbols';

test('strips a CJK fullwidth-paren annotation', () => {
  assert.equal(cleanSymbol('Kospi（6/1 收、再破紀錄）'), 'Kospi');
});

test('strips an ASCII-paren annotation', () => {
  assert.equal(cleanSymbol('Nvidia (6/5)'), 'Nvidia');
});

test('leaves a plain symbol untouched', () => {
  assert.equal(cleanSymbol('TSLA'), 'TSLA');
});

test('trims surrounding whitespace', () => {
  assert.equal(cleanSymbol('  AMD  '), 'AMD');
});

test('falls back to the original when stripping would empty it', () => {
  assert.equal(cleanSymbol('（整串都是註解）'), '（整串都是註解）');
});
