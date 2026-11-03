export interface RunRecord {
  id: number;
  createdAt: string;
  event: string;
  branch: string;
  actor: string;
  conclusion: string | null;
}

/** published: matched run succeeded. running: matched run has no conclusion yet. */
export type SlotStatus = 'published' | 'running' | 'open' | 'missing' | 'run_failed';

export interface SlotVerdict {
  planned: string;
  deadline: string;
  runId: number | null;
  createdAt: string | null;
  actor: string | null;
  conclusion: string | null;
  status: SlotStatus;
}

export interface SlotReport {
  start: string;
  hours: number;
  toleranceMinutes: number;
  event: string;
  branch: string;
  passed: number;
  failed: number;
  pending: number;
  slots: SlotVerdict[];
}

const minute = 60_000;
const hour = 60 * minute;

/**
 * Evaluate hourly slots from `start`: each slot needs a run of `event` on
 * `branch`, created within `toleranceMinutes` after its planned time, that
 * concluded successfully. A run fills at most one slot. Slots that are still
 * open or whose run is still running are pending, not failed. A cancelled
 * run fails its slot here; the acceptance contract allows a manual override
 * when the run that replaced it published.
 */
export function evaluateSlots(
  runs: RunRecord[],
  options: { start: Date; hours: number; toleranceMinutes: number; event: string; branch: string; now: Date },
): SlotReport {
  const candidates = runs
    .filter((run) => run.event === options.event && run.branch === options.branch)
    .map((run) => ({ run, time: Date.parse(run.createdAt) }))
    .sort((a, b) => a.time - b.time);
  const used = new Set<number>();
  const slots: SlotVerdict[] = [];
  for (let index = 0; index < options.hours; index += 1) {
    const planned = options.start.getTime() + index * hour;
    const deadline = planned + options.toleranceMinutes * minute;
    const match = candidates.find(
      (candidate) => !used.has(candidate.run.id) && candidate.time >= planned && candidate.time <= deadline,
    );
    if (match) used.add(match.run.id);
    let status: SlotStatus;
    if (!match) status = deadline > options.now.getTime() ? 'open' : 'missing';
    else if (match.run.conclusion === null) status = 'running';
    else status = match.run.conclusion === 'success' ? 'published' : 'run_failed';
    slots.push({
      planned: new Date(planned).toISOString(),
      deadline: new Date(deadline).toISOString(),
      runId: match?.run.id ?? null,
      createdAt: match?.run.createdAt ?? null,
      actor: match?.run.actor ?? null,
      conclusion: match?.run.conclusion ?? null,
      status,
    });
  }
  const passed = slots.filter((slot) => slot.status === 'published').length;
  const pending = slots.filter((slot) => slot.status === 'open' || slot.status === 'running').length;
  return {
    start: options.start.toISOString(),
    hours: options.hours,
    toleranceMinutes: options.toleranceMinutes,
    event: options.event,
    branch: options.branch,
    passed,
    failed: options.hours - passed - pending,
    pending,
    slots,
  };
}
