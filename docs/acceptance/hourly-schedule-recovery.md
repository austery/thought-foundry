# Hourly publication schedule recovery

Status: the owner approved an off-peak cron change and at least 24 hours of observation on 2026-11-02. The new schedule is not accepted until the observation completes. No external scheduler is added.

## Observed failure

The default branch is `main`, the workflow is active, Actions permissions are enabled, and the existing expression `5 * * * *` already requests an hourly run. The symptom is missing workflow-run creation, rather than a daily 14:00 configuration.

The fixed window from 2026-11-01 19:20 UTC to 2026-11-02 19:20 UTC contains only four scheduled runs. The longest creation gap is 617.2 minutes. The latest [scheduled run 41507878176](https://github.com/austery/thought-foundry/actions/runs/41507878176) was created at 19:13:07 UTC and its job started at 19:13:09 UTC. It completed successfully. Recent run numbers are consecutive, with no recorded cancelled runs accounting for the missing hours. The pattern predates the Pagefind production candidate.

These observations locate the gap before runner execution. They do not reveal GitHub's internal event-delivery cause or prove that a run never existed and was later deleted. The successful job is not evidence that hourly scheduling works.

GitHub documents that scheduled events can be delayed or dropped under high load, especially near the start of an hour. GitHub also documents changing cron as a recovery step for stopped schedules with actor problems. The actor is active in the observed successful runs; an actor problem is not established here. Sources: [workflow troubleshooting](https://docs.github.com/en/actions/how-tos/troubleshoot-workflows), [scheduled event behavior](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule).

## Bounded repair

Change the cron expression to `23 * * * *`. This keeps one requested run per hour and moves the request away from the start of the hour. Committing the cron change also gives GitHub a new schedule configuration to register. It is a recovery attempt, not proof that its scheduler was repaired.

Keep the existing manual and push triggers, permissions, publication concurrency, current content selection, Pagefind engine selection, binary cache, swap and publication steps. Reuse the existing workflow; do not add a second publisher or an always-running process. A branch manual dry run can validate the workflow but cannot test cron, which runs only from the default branch.

## Post-merge observation

1. Record the merged SHA and merge time. Count only `schedule` runs created after merge on that revision or later reviewed default-branch revisions. Manual and push runs do not satisfy the hourly trigger check.
2. Fetch enough run-history pages to cover the full observation window. Record scheduled run ID, creation time, job start, conclusion and the workflow source revision. Compare request cadence separately from successful publication.
3. Use at least 24 hours from the first new scheduled run. Allow up to 35 minutes beyond the intended hourly interval: a creation gap over 95 minutes fails this operational check. This tolerance is a local acceptance rule, not a GitHub service guarantee. Also report empty intended-hour slots, the maximum gap and all failed or cancelled runs; a low average interval alone is insufficient.
4. Confirm successful publication and the separate Pages deployment for the first new scheduled run and the latest completed scheduled run. Check the selected engine and output identities. A green PR check or push-triggered release does not close scheduled acceptance.
5. Report a new gap, build failure or required owner action when observed. Record the evidence; do not compensate with manual dispatch and then label the schedule healthy.

If this window fails, keep the incident open and present the observed gaps. The next design choice is an independent long-running scheduler calling the existing `workflow_dispatch` endpoint. Adding that platform or credentials needs a separate decision. Increasing the native cron frequency does not provide an independent clock.

## Recovery and evidence

The code change is reversible through a normal PR restoring `5 * * * *`. Reverting does not undo publications already completed. The Pagefind rollback remains a separate operation in [the engine activation contract](pagefind-candidate-activation.md).

The investigation snapshot and a runnable cadence audit are retained locally under `.native-build/schedule-recovery-20261102/` in the primary checkout. `baseline-cadence.json` records the failed 24-hour window. `runs.json`, `workflow.json`, `permissions.json`, `latest-jobs.json` and `workflow-history.json` record the inspected API state. The PR and its observation receipt must record the actual post-merge outcome. No passing schedule result is assumed in this document.
