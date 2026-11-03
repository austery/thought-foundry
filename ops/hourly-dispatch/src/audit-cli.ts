import { execFileSync } from 'node:child_process';
import { parseArgs } from 'node:util';
import { evaluateSlots, type RunRecord } from './slots.js';

// Usage: pnpm run audit-slots --start 2026-11-04T15:23:00Z [--hours 24] [--tolerance 10]
//   [--event workflow_dispatch] [--repo austery/thought-foundry] [--workflow deploy.yml]
// Reads run history through the authenticated `gh` CLI. Exit 0 = all slots
// passed, 1 = at least one slot failed, 2 = no failure yet but slots pending.
const { values } = parseArgs({
  options: {
    start: { type: 'string' },
    hours: { type: 'string', default: '24' },
    tolerance: { type: 'string', default: '10' },
    event: { type: 'string', default: 'workflow_dispatch' },
    repo: { type: 'string', default: 'austery/thought-foundry' },
    workflow: { type: 'string', default: 'deploy.yml' },
  },
});

if (!values.start || Number.isNaN(Date.parse(values.start))) {
  console.error('Pass --start as an ISO time, for example 2026-11-04T15:23:00Z');
  process.exit(64);
}
const start = new Date(values.start);
const hours = Number(values.hours);
const toleranceMinutes = Number(values.tolerance);
const end = new Date(start.getTime() + (hours * 60 + toleranceMinutes) * 60_000);

interface ApiRun {
  id: number;
  created_at: string;
  event: string;
  conclusion: string | null;
}

const output = execFileSync(
  'gh',
  [
    'api',
    '--paginate',
    `repos/${values.repo}/actions/workflows/${values.workflow}/runs?per_page=100&created=${start.toISOString()}..${end.toISOString()}`,
    '--jq',
    '.workflow_runs[] | {id, created_at, event, conclusion}',
  ],
  { encoding: 'utf8' },
);
const runs: RunRecord[] = output
  .split('\n')
  .filter((line) => line.trim() !== '')
  .map((line) => JSON.parse(line) as ApiRun)
  .map((run) => ({ id: run.id, createdAt: run.created_at, event: run.event, conclusion: run.conclusion }));

const report = evaluateSlots(runs, { start, hours, toleranceMinutes, event: values.event, now: new Date() });
console.log(JSON.stringify(report, null, 2));
process.exit(report.failed > 0 ? 1 : report.pending > 0 ? 2 : 0);
