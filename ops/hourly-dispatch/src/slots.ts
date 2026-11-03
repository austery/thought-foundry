export interface RunRecord {
  id: number;
  createdAt: string;
  event: string;
  conclusion: string | null;
}

export interface SlotVerdict {
  planned: string;
  deadline: string;
  runId: number | null;
  createdAt: string | null;
  conclusion: string | null;
  pass: boolean;
}

export interface SlotReport {
  start: string;
  hours: number;
  toleranceMinutes: number;
  event: string;
  passed: number;
  failed: number;
  pending: number;
  slots: SlotVerdict[];
}

const minute = 60_000;
const hour = 60 * minute;

/**
 * Evaluate hourly slots from `start`: each slot needs a run of `event`
 * created within `toleranceMinutes` after its planned time. A run fills at
 * most one slot. Slots whose deadline is after `now` are pending, not failed.
 */
export function evaluateSlots(
  runs: RunRecord[],
  options: { start: Date; hours: number; toleranceMinutes: number; event: string; now: Date },
): SlotReport {
  const candidates = runs
    .filter((run) => run.event === options.event)
    .map((run) => ({ run, time: Date.parse(run.createdAt) }))
    .sort((a, b) => a.time - b.time);
  const used = new Set<number>();
  const slots: SlotVerdict[] = [];
  let pending = 0;
  for (let index = 0; index < options.hours; index += 1) {
    const planned = options.start.getTime() + index * hour;
    const deadline = planned + options.toleranceMinutes * minute;
    const match = candidates.find(
      (candidate) => !used.has(candidate.run.id) && candidate.time >= planned && candidate.time <= deadline,
    );
    if (match) used.add(match.run.id);
    const open = !match && deadline > options.now.getTime();
    if (open) pending += 1;
    slots.push({
      planned: new Date(planned).toISOString(),
      deadline: new Date(deadline).toISOString(),
      runId: match?.run.id ?? null,
      createdAt: match?.run.createdAt ?? null,
      conclusion: match?.run.conclusion ?? null,
      pass: match !== undefined,
    });
  }
  const passed = slots.filter((slot) => slot.pass).length;
  return {
    start: options.start.toISOString(),
    hours: options.hours,
    toleranceMinutes: options.toleranceMinutes,
    event: options.event,
    passed,
    failed: options.hours - passed - pending,
    pending,
    slots,
  };
}
