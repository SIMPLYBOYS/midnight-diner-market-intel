import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { eventBus } from './EventBus';

afterEach(() => eventBus.removeAll());

test('emit delivers the payload to a registered listener', () => {
  let got: unknown;
  eventBus.on('narration:show', (p) => { got = p; });
  eventBus.emit('narration:show', { text: 'hello' });
  assert.deepEqual(got, { text: 'hello' });
});

test('every listener on an event fires', () => {
  let count = 0;
  eventBus.on('dialogue:hide', () => { count++; });
  eventBus.on('dialogue:hide', () => { count++; });
  eventBus.emit('dialogue:hide');
  assert.equal(count, 2);
});

test('off removes the exact listener', () => {
  let count = 0;
  const cb = () => { count++; };
  eventBus.on('player:pause', cb);
  eventBus.off('player:pause', cb);
  eventBus.emit('player:pause');
  assert.equal(count, 0);
});

test('emit with no listeners is a no-op', () => {
  assert.doesNotThrow(() => eventBus.emit('player:resume'));
});

test('removeAll clears every listener', () => {
  let count = 0;
  eventBus.on('player:advance', () => { count++; });
  eventBus.removeAll();
  eventBus.emit('player:advance');
  assert.equal(count, 0);
});
