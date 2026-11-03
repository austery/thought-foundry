import { execFileSync } from 'node:child_process';
import { parseArgs } from 'node:util';
import { evaluateSlots, type RunRecord } from './slots.js';

// Usage: pnpm run audit-slots --start 2026-11-04T15:23:00Z [--hours 24] [--tolerance 10]
//   [--event workflow_dispatch] [--branch main] [--repo austery/thought-foundry] [--workflow deploy.yml]
// Reads run history through the authenticated `gh` CLI.
// Exit 0 = every slot published, 1 = a slot failed, 2 = no failure yet but
// slots pending, 64 = invalid arguments, 70 = run history unavailable.
const { values } = parseArgs({
  options: {
    start: { type: 'string' },
    hours: { type: 'string', default: '24' },
    tolerance: { type: 'string', default: '10' },
    event: { type: 'string', default: 'workflow_dispatch' },
    branch: { type: 'string', default: 'main' },
    repo: { type: 'string', default: 'austery/thought-foundry' },
    workflow: { type: 'string', default: 'deploy.yml' },
  },
});

function positiveInteger(raw: string, name: string): number {
  const value = Number(raw);
  if (!Number.isInteger(value) || value <= 0) {
    console.error(`--${name} must be a positive integer`);
    process.exit(64);
  }
  return value;
}

if (!values.start || Number.isNaN(Date.parse(values.start))) {
  console.error('Pass --start as an ISO time, for example 2026-11-04T15:23:00Z');
  process.exit(64);
}
const start = new Date(values.start);
const hours = positiveInteger(values.hours, 'hours');
const toleranceMinutes = positiveInteger(values.tolerance, 'tolerance');
const end = new Date(start.getTime() + (hours * 60 + toleranceMinutes) * 60_000);

interface ApiRun {
  id: number;
  created_at: string;
  event: string;
  head_branch: string;
  actor: string;
  conclusion: string | null;
}

let output: string;
try {
  output = execFileSync(
    'gh',
    [
      'api',
      '--paginate',
      `repos/${values.repo}/actions/workflows/${values.workflow}/runs?per_page=100&branch=${encodeURIComponent(values.branch)}&created=${start.toISOString()}..${end.toISOString()}`,
      '--jq',
      '.workflow_runs[] | {id, created_at, event, head_branch, actor: .triggering_actor.login, conclusion}',
    ],
    { encoding: 'utf8' },
  );
} catch (error) {
  console.error(`Could not read run history: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(70);
}
const runs: RunRecord[] = output
  .split('\n')
  .filter((line) => line.trim() !== '')
  .map((line) => JSON.parse(line) as ApiRun)
  .map((run) => ({
    id: run.id,
    createdAt: run.created_at,
    event: run.event,
    branch: run.head_branch,
    actor: run.actor,
    conclusion: run.conclusion,
  }));

const report = evaluateSlots(runs, {
  start,
  hours,
  toleranceMinutes,
  event: values.event,
  branch: values.branch,
  now: new Date(),
});
console.log(JSON.stringify(report, null, 2));
process.exit(report.failed > 0 ? 1 : report.pending > 0 ? 2 : 0);
