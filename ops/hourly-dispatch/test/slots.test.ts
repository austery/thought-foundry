import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluateSlots, type RunRecord } from '../src/slots.js';

const start = new Date('2026-11-04T15:23:00Z');
const run = (id: number, createdAt: string, overrides: Partial<RunRecord> = {}): RunRecord => ({
  id,
  createdAt,
  event: 'workflow_dispatch',
  branch: 'main',
  actor: 'austery',
  conclusion: 'success',
  ...overrides,
});
const options = {
  start,
  hours: 3,
  toleranceMinutes: 10,
  event: 'workflow_dispatch',
  branch: 'main',
  now: new Date('2026-11-05T00:00:00Z'),
};

test('passes slots that have a successful run inside the tolerance', () => {
  const report = evaluateSlots(
    [run(1, '2026-11-04T15:23:40Z'), run(2, '2026-11-04T16:24:00Z'), run(3, '2026-11-04T17:32:59Z')],
    options,
  );
  assert.equal(report.passed, 3);
  assert.equal(report.failed, 0);
});

test('fails late slots, other events and other branches, and does not reuse one run', () => {
  const report = evaluateSlots(
    [
      run(1, '2026-11-04T15:23:40Z'),
      run(2, '2026-11-04T16:40:00Z'),
      run(3, '2026-11-04T17:25:00Z', { event: 'schedule' }),
      run(4, '2026-11-04T17:26:00Z', { branch: 'feature' }),
    ],
    options,
  );
  assert.deepEqual(
    report.slots.map((slot) => slot.status),
    ['published', 'missing', 'missing'],
  );
  assert.equal(report.failed, 2);
});

test('fails slots whose run failed or was cancelled', () => {
  const report = evaluateSlots(
    [run(1, '2026-11-04T15:24:00Z', { conclusion: 'failure' }), run(2, '2026-11-04T16:24:00Z', { conclusion: 'cancelled' })],
    { ...options, hours: 2 },
  );
  assert.deepEqual(
    report.slots.map((slot) => slot.status),
    ['run_failed', 'run_failed'],
  );
  assert.equal(report.failed, 2);
});

test('treats open slots and running runs as pending', () => {
  const report = evaluateSlots([run(1, '2026-11-04T15:24:00Z', { conclusion: null })], {
    ...options,
    now: new Date('2026-11-04T16:30:00Z'),
  });
  assert.deepEqual(
    report.slots.map((slot) => slot.status),
    ['running', 'open', 'open'],
  );
  assert.equal(report.passed, 0);
  assert.equal(report.failed, 0);
  assert.equal(report.pending, 3);
});
