# Podcast canonical-path production rollout

Date: 2026-10-09 (America/Toronto); execution timestamps are UTC on 2026-10-10.

The owner explicitly authorized production rollout and post-migration derived synchronization after confirming the three pull requests were merged. This receipt supersedes the earlier PR-only and pending-adoption handoffs.

## Adopted revisions

- PureSubs merged main: `3105bffc1b099ffb8e82e5a29bd35e11c12ae904`, [PR 495](https://github.com/austery/puresubs/pull/495). Merged-main [CI run 38012508629](https://github.com/austery/puresubs/actions/runs/38012508629) passed before synchronization.
- Thought Foundry merged main: `6e67360a548712f7b1a048019aac5d03c5a7c885`, [PR 18](https://github.com/austery/thought-foundry/pull/18).
- Content migration: [PR 6](https://github.com/austery/thought-foundry-content/pull/6), merged as `1a0aaddaa67b60fa1ce532b13a53541081feb6d8`. The site workflow checks out the current content main; the exact published content revision is recorded below.

## Production synchronization

The operator refreshed the 11-episode redirect inventory and compared every canonical API body and successful Job ID with the prior accepted production receipt. All 11 body hashes and Job IDs matched. No unsettled legacy write receipts were present for the scoped episodes.

Recovery evidence from the verified October 9 production backup was reused. A fresh private scoped snapshot was taken before mutation. No schema migration or historical Job rewrite was performed.

The immutable merged release ran `repair-metadata --sync-derived` with exactly the 11 migrated episode keys. Preview reported `synced=11 skipped=0 failed=0`; apply, gated on merged-main CI, reported the same. Initially there were zero Podcast derived article rows; synchronization created one row per migrated episode. Verification checked exactly one scoped row, canonical GitHub source URL, original successful Job attribution and matching content/content-hash for each episode. All scoped historical Job records remained unchanged. Post-rollout authenticated API reads passed for all 11 with the same original body hashes and Job IDs.

Evidence packet: `/private/tmp/podcast-canonical-rollout-20261009/`, including `production-state-before.json`, `scope.json`, `sync-preview.log`, `sync-applied.log`, `database-sync-acceptance.json`, `production-state-after.json`, and `canonical-api-readback-after.json`. Private database snapshots must not be committed or copied into public reports.

## Runtime adoption

The owner had manually restarted the API against merged main before this rollout's readback. Transcription and generation were subsequently started by the owner in visible foreground terminals, using Node 22.20.0 and the immutable clean release at `/Users/leipeng/Documents/Projects/puresubs-releases/podcast-canonical-20261009`.

Observed processes: transcription PID 61768 on `ttys002`; generation PID 62302 on `ttys003`. Both commands target the compiled worker entrypoints in that release. The authenticated scheduler status read reported `isRunning: true`. X and unrelated UI processes were preserved. No provider generation probe or explicit reprocessing was issued by this rollout.

The former generation process PID 15381 exited, but its last YouTube Job `cmv1otrr20033ed8tjy1qyfmb` (`FaSe0o1CzEM`) still had `PROCESSING` and its former worker lock at the subsequent read. Successful completion of that job is not established. Existing YouTube stale-lock recovery uses a 30-minute threshold and runs at worker startup (`worker-base.ts:97`, `content-generation.worker.ts:64`); automatic recovery during the current worker run is not claimed. The operator did not manually retry or mutate that unrelated job. See `old-worker-job-observation.json` for the read timestamp and status.

## Public site acceptance

[Site workflow 38013464738](https://github.com/austery/thought-foundry/actions/runs/38013464738) succeeded. Its retained manifest records site `6e67360a548712f7b1a048019aac5d03c5a7c885` and content `f9533312ffcc09c1d01d3453ed929588eb30eb14`. Public repository commit `939e582de879e9a5f94e00f285a3315f1124ed76` was deployed by successful [GitHub Pages run 38014099393](https://github.com/austery/austery.github.io/actions/runs/38014099393).

At 2026-10-10T01:44:21.486Z, live HTTP verification passed for all 11 canonical reader pages and all 11 legacy HTML redirect pages. Reader and redirect bytes matched the retained publication manifest. Legacy pages provide noindex, HTML refresh, canonical destination and fallback; this is static HTML redirection, not HTTP 301.

All 11 migrated articles were found in the public homepage collection across its date-sorted pagination (pages /page/3/, /page/6/, /page/9/, /page/14/, /page/18/, /page/19/, /page/21/, /page/23/, /page/27/, /page/28/). The public source directory `/all-speakers/` links to `/speakers/liang-zhou-ling/`, whose article links are canonical. No dedicated Podcast top-level navigation was added.

The real public Pagefind JavaScript and index shards returned exactly one result for `极寒末世`, filtered by speaker `梁州令`: `/content/podcasts/article/pod_m5zqaqi8j5m9egqvk0gbzoli/`. The Node harness supplied the actual reader language context, `zh-hans`; no search results were stubbed. This verifies the deployed index and page output, rather than a new browser interaction or production provider regeneration.

The packet retains `public-site-acceptance.json`, `site-workflow-acceptance.json`, `pages-workflow-acceptance.json`, `public-repository-commit.json`, and `site-deployment-evidence/`. The earlier cancelled automatic deployment remains historical. Hourly site publication remains enabled. No unrelated checkout cleanup, schema migration, X restart or manual YouTube retry was performed.


## Subsequent normal-worker switch

At 2026-10-10T02:16:33.764Z, the owner authorized switching the two idle release workers to normal primary-checkout pnpm workers and asked the agent to start them remotely. Both old processes exited after SIGTERM. The primary checkout remained at `3105bffc`; Node 22.20.0 was pinned. Production mode deliberately skips dotenv loading, so the first bare startup failed without injected credentials; it exited before worker startup. The subsequent launches privately injected the existing `.env.prod` and ran `pnpm worker:transcription` and `pnpm worker:content` without changing environment files. Startup and process inventory confirmed transcription PID 903 (`ttys019`, task terminal session 49688) and generation PID 1457 (`ttys020`, task terminal session 39220). These are task-managed foreground PTYs; desktop terminal control was unavailable.

Generation startup automatically recovered one stale Job and claimed the previously recorded YouTube Job `cmv1otrr20033ed8tjy1qyfmb`. Its lock now belongs to `Leis-Mac-mini.local:1457`; processing has resumed, but completion is not yet claimed. This supersedes the earlier unresolved former-worker lock observation. Runtime evidence: `normal-worker-startup.json` in the private rollout packet.
