# Hourly publication schedule recovery

Status: the cron-minute change below failed its observation on 2026-11-03 ([issue 23](https://github.com/austery/thought-foundry/issues/23)). On 2026-11-03 the owner chose an independent Cloudflare Worker clock; see [Independent clock](#independent-clock). That clock is not accepted until its own 24-hour window completes.

## Observed failure

The default branch is `main`, the workflow is active, Actions permissions are enabled, and the existing expression `5 * * * *` already requests an hourly run. A reader noticed only an afternoon run; the symptom is missing workflow-run creation, rather than an expression limited to one hour of the day.

The fixed window from 2026-11-01 19:20 UTC to 2026-11-02 19:20 UTC contains only four scheduled runs. The longest creation gap is 617.2 minutes. The latest [scheduled run 41507878176](https://github.com/austery/thought-foundry/actions/runs/41507878176) was created at 19:13:07 UTC and its job started at 19:13:09 UTC. It completed successfully. Recent run numbers 6182 through 6193 are consecutive, with no recorded cancelled runs accounting for the missing hours. The pattern predates the Pagefind production candidate.

These observations locate the gap before runner execution. They do not reveal GitHub's internal event-delivery cause. Consecutive run numbers make deleted runs unlikely within that range, but this API snapshot alone cannot exclude deletion. The successful job is not evidence that hourly scheduling works.

GitHub documents that scheduled events can be delayed or dropped under high load, especially near the start of an hour. GitHub also documents changing cron as a recovery step for stopped schedules with actor problems. The actor is active in the observed successful runs; an actor problem is not established here. Sources: [workflow troubleshooting](https://docs.github.com/en/actions/how-tos/troubleshoot-workflows), [scheduled event behavior](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule).

## Bounded repair

Change the cron expression to `23 * * * *`. This keeps one requested run per hour and moves the request away from the start of the hour. Committing the cron change also gives GitHub a new schedule configuration to register. It is a recovery attempt, not proof that its scheduler was repaired.

Keep the existing manual and push triggers, permissions, publication concurrency, current content selection, Pagefind engine selection, binary cache, swap and publication steps. Reuse the existing workflow; do not add a second publisher or an always-running process. A branch manual dry run can validate the workflow but cannot test cron, which runs only from the default branch.

## Post-merge observation

1. Record the merged SHA and merge time. The workflow-file change also triggers the existing push publication when merged; a later revert does the same. Verify that publication separately. Count only `schedule` runs created after merge on that revision or later reviewed default-branch revisions for hourly acceptance.
2. Fetch enough run-history pages to cover the full observation window. Record scheduled run ID, creation time, job start, conclusion and the workflow source revision. Compare request cadence separately from successful publication.
3. Anchor the window to the first planned `:23` after merge, whether or not a run appears. Observe from that time through 24 hours later. Each of its 24 planned hourly slots must have a new scheduled run created within 35 minutes after its planned time. An empty slot fails once that deadline passes, even if the gap between adjacent runs is under 95 minutes. Also fail any creation gap over 95 minutes, including both window edges. Report all failed or cancelled runs separately. These tolerances are local acceptance rules, not a GitHub service guarantee. No first run means the first slot fails; it does not postpone the window.
4. Confirm successful publication and the separate Pages deployment for the first new scheduled run and the latest completed scheduled run. Check the selected engine and output identities. A green PR check or push-triggered release does not close scheduled acceptance.
5. Report a new gap, build failure or required owner action when observed. Record the evidence; do not compensate with manual dispatch and then label the schedule healthy.

If this window fails, keep the incident open and present the observed gaps. The next design choice is an independent long-running scheduler calling the existing `workflow_dispatch` endpoint. Adding that platform or credentials needs a separate decision. Increasing the native cron frequency does not provide an independent clock.

## Recovery and evidence

The code change is reversible through a normal PR restoring `5 * * * *`. That revert triggers a push publication through the unchanged workflow. Reverting does not undo publications already completed. The Pagefind rollback remains a separate operation in [the engine activation contract](pagefind-candidate-activation.md).

The investigation snapshot and a runnable cadence audit are retained locally under `.native-build/schedule-recovery-20261102/` in the primary checkout. `baseline-cadence.json` records the failed 24-hour window. `runs.json`, `workflow.json`, `permissions.json`, `latest-jobs.json` and `workflow-history.json` record the inspected API state. The PR and its observation receipt must record the actual post-merge outcome. No passing schedule result is assumed in this document.

## Independent clock

Diagnosis: the missing runs are a GitHub platform-side degradation that began on 2026-08-26 around 14:00–16:00 UTC. About twenty unrelated public repositories sampled on 2026-11-03 still receive only 4–5 `schedule` runs per workflow per day, whatever their cron. Public reports describe the same onset, and say that new workflow IDs, disable/enable and cron changes do not help. Sources: [differential evidence](../research/2026-11-03-schedule-differential-evidence.md), [public reports](../research/2026-11-github-schedule-degradation.md).

Repair: [`ops/hourly-dispatch/`](../../ops/hourly-dispatch/README.md) is a Cloudflare Worker with Cron Trigger `23 * * * *`. Each hour it calls `workflow_dispatch` for `deploy.yml` on `main` with default inputs, using a fine-grained token limited to `Actions: Read and write` on this repository. The native `schedule` trigger stays as a fallback. The workflow file, publication steps and Pagefind engine selection are unchanged.

Acceptance, after the owner deploys the Worker:

1. Record the Worker deployment time and the first planned `:23` UTC slot after it. Start the 24-hour window there.
2. For each of the 24 slots, require a `workflow_dispatch` run on `main` created within 10 minutes after the planned time, with the Worker log line `event: "dispatched"`. A late `schedule` run does not fill a missing Worker slot; report both separately.
3. Report every failed, cancelled or queued publication. Two triggers in one hour queue in `pages-deployment`; report the extra run, do not count it as a failure.
4. Confirm successful publication and the separate Pages deployment for the first and the last run in the window, with matching source and content identities.
5. Manual dispatches by a person do not count. The token owner is also the triggering actor of Worker runs, so match each run to a Worker log line by creation time instead.
