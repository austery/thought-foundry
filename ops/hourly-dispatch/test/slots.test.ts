import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluateSlots, type RunRecord } from '../src/slots.js';

const start = new Date('2026-11-04T15:23:00Z');
const run = (id: number, createdAt: string, event = 'workflow_dispatch'): RunRecord => ({
  id,
  createdAt,
  event,
  conclusion: 'success',
});
const options = { start, hours: 3, toleranceMinutes: 10, event: 'workflow_dispatch', now: new Date('2026-11-05T00:00:00Z') };

test('passes slots that have a run inside the tolerance', () => {
  const report = evaluateSlots(
    [run(1, '2026-11-04T15:23:40Z'), run(2, '2026-11-04T16:24:00Z'), run(3, '2026-11-04T17:32:59Z')],
    options,
  );
  assert.equal(report.passed, 3);
  assert.equal(report.failed, 0);
});

test('fails a late slot, ignores other events and does not reuse one run for two slots', () => {
  const report = evaluateSlots(
    [
      run(1, '2026-11-04T15:23:40Z'),
      run(2, '2026-11-04T16:40:00Z'),
      run(3, '2026-11-04T17:25:00Z', 'schedule'),
    ],
    options,
  );
  assert.deepEqual(
    report.slots.map((slot) => slot.pass),
    [true, false, false],
  );
  assert.equal(report.failed, 2);
});

test('treats slots whose deadline has not passed as pending', () => {
  const report = evaluateSlots([run(1, '2026-11-04T15:24:00Z')], { ...options, now: new Date('2026-11-04T16:30:00Z') });
  assert.equal(report.passed, 1);
  assert.equal(report.failed, 0);
  assert.equal(report.pending, 2);
});
