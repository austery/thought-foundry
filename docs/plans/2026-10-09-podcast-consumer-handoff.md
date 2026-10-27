# Podcast consumer handoff after producer closeout

Date: 2026-10-09
Status: Historical investigation superseded by the canonical migration successor and observed external delivery state below.

## Producer evidence checked

The current PureSubs MOC and session log `2026-10-09_puresubs_podcast-stable-publication-and-x-import-capacity-production-closeout.md` record merged and deployed Podcast stable publication via [PR 491](https://github.com/austery/puresubs/pull/491). The final release is `b26797c44896268f5fb28b9615acc2f9ef6093be` at `/Users/leipeng/Documents/Projects/puresubs-releases/x-publication-write-capacity-20261009`.

This handoff checked that release's HEAD, publication implementation/plan, and `/private/tmp/x-deploy-production-20261009/production-acceptance.json`. The receipt records successful startup and unchanged paths, completed-job attribution and bytes for 11 saved Podcast articles. It explicitly excludes a live regeneration probe. This session did not rerun production acceptance or CI.

The old plan in the dirty primary PureSubs checkout still says implementation pending. Use the immutable delivered [publication plan](https://github.com/austery/puresubs/blob/b26797c44896268f5fb28b9615acc2f9ef6093be/docs/plans/podcast-redesign/stable-article-publication.md) together with the dated closeout log; do not treat the old status as the current delivery state.

## Delivered contract and remaining consumer work

- New episodes publish to `podcasts/article/<episode-key>.md`. The producer's `src/storage/podcast-articles.ts:15` supplies `article/<key>.md` beneath the Podcast root.
- Existing episodes inherit their authoritative successful path, including historical attempt directories. `src/repository/podcast-articles.ts:109` selects the completed job path, then the article read-model path, then the new default. Reprocessing preserves that destination.
- Private generated text and prepared Git receipts live in existing job metadata. Formal article replacement no longer depends on candidate cleanup.
- The producer closeout explicitly leaves Thought Foundry discovery, explicit legacy compatibility mapping and Pagefind replacement acceptance open. Path shape alone cannot distinguish an accepted historical article from another historical candidate.

The local site trial accepts only the old `content/podcasts/article/<attempt>/<episode-key>.md` shape. It neither admits the new stable shape nor proves historical publication eligibility. Do not publish that trial unchanged.

For a resumed consumer implementation:

1. Obtain a reviewable episode-to-existing-public-path inventory from authoritative successful producer records. Define an explicit static compatibility input; the site must not query jobs or choose by timestamps, UUIDs or Git ordering. No such mapping was supplied or created in this session.
2. Discover formal new stable articles and only explicitly accepted legacy paths. Apply eligibility before rendering/export/search preparation as well as collection building, so unapproved intermediate files receive no generated public page or Pagefind entry. Retain the defensive one-article-per-episode check.
3. Preserve the approved navigation: Podcast shares homepage, source directory, ordinary reader and search; no new top-level Podcast navigation. X keeps its existing dedicated reader.
4. Rerun fixed-content full builds and actual Pagefind queries against the delivered shape: one article per episode, stable URL after replacement, new body indexed and old body absent, unfinished artifacts absent, known legacy URLs retained, unchanged existing content and X behavior. Resolve the prior review gap, then validate/review and publish a task PR. Merge and deployment require owner authorization.

Historical duplicate deletion is separate work requiring an authoritative inventory and explicit approval. Do not infer that preserved old URLs imply all old attempt files are public.

## Resume pointers

- Existing site trial: `/private/tmp/thought-foundry-podcast-20261009`, branch `codex/podcast-discovery`, implementation `76c81b338341271b403cdcd7fce59036d84c13d9`, evidence commit `926188fb6`.
- [Recorded local acceptance](../acceptance/podcast-discovery-2026-10-09.md) contains the original 35-test result, full-corpus/browser checks, review finding and temporary evidence paths. Those results predate the delivered producer contract and are not acceptance of the new shape.
- [Original integration plan](2026-10-09-podcast-integration.md) and [producer correction proposal](2026-10-09-podcast-publication-replacement.md) retain the investigation history. The latter's producer implementation blocker is superseded by the delivered PureSubs work; consumer compatibility remains unresolved.
- The primary site checkout and dirty content submodule were preserved. No site PR, merge or deployment occurred. Existing worktrees, trial output and evidence remain available; no cleanup is implied by this handoff.

No additional producer repair is requested by this handoff. The current investigation can close with the consumer adaptation explicitly recorded as unfinished follow-up work.

## Implementation successor

The owner subsequently authorized consumer implementation. [PR 18](https://github.com/austery/thought-foundry/pull/18) contains the formal-path admission, 11 verified legacy destinations and consumer replacement tests, on head `93d78aec2fb9ca4b4f5ff0dc0cb5ece3dc318f0a`. Local type checks, all 37 tests, fixed-content builds/corpus comparison and independent code review passed. See [current consumer acceptance](../acceptance/podcast-publication-consumer-2026-10-09.md) for the contract and evidence. The earlier unfinished state above is historical. Read the PR for latest CI/merge state; no site merge or deployment occurred in this implementation session.


## Canonical migration successor

The owner subsequently authorized moving all verified Podcast articles to canonical paths, updating PureSubs targets/readers, removing the site code allowlist and preserving old links with redirects. This supersedes the inherited-path and compatibility-list guidance above.

- Site PR [#18](https://github.com/austery/thought-foundry/pull/18) was updated on `codex/podcast-discovery`; canonical-only discovery shares the existing homepage/source reader/search.
- Content PR [#6](https://github.com/austery/thought-foundry-content/pull/6), `d2332288cf9ed340c0734ade5b7a54b75ac8e4f4`, moves all 11 articles byte-for-byte and owns `podcasts/redirects.json`.
- PureSubs PR [#495](https://github.com/austery/puresubs/pull/495), `6a2856db51e0b1afc2f73ca84569a7863159e5bb`, publishes/regenerates canonical files and uses locked canonical Workbench/automatic/explicit reconciliation reads with independent historical receipt checks.
- Independent site/content and producer reviews approved. Site 37 tests and full-corpus build/search checks passed; final producer local and pre-push verification passed (3,445 backend and 551 dashboard tests, all configured checks/builds), plus 18 owned PostgreSQL tests separately. See linked PRs for current exact-head CI; producer CI was still running at publication.

Use the [current acceptance](../acceptance/podcast-publication-consumer-2026-10-09.md) and the revised PureSubs stable article plan. This task issued no merges, deployments or production data operations; subsequent external delivery state is recorded below. Dirty primary checkouts are preserved. Later rollout must pause writers/hourly publication, settle legacy prepared receipts, refresh inventory/body hashes, adopt matching revisions, verify old redirects/new reads and explicitly reconcile migrated episodes to update existing index source URLs before restoring schedules.


## Observed delivery state

GitHub records account `austery` merged site PR #18 at 2026-10-10 01:04:52 UTC (`6e67360a548712f7b1a048019aac5d03c5a7c885`, reviewed head `a559a42`) and content PR #6 at 01:05:15 UTC (`1a0aaddaa67b60fa1ce532b13a53541081feb6d8`). This task issued no merges. The site merge automatically triggered [deployment run 38011748587](https://github.com/austery/thought-foundry/actions/runs/38011748587). To honor the explicit no-deployment instruction, this task cancelled that run while public publication was still pending; GitHub confirms `cancelled` and the publication step `skipped`. Hourly deployment remains configured.

PureSubs PR #495 remains open/unmerged at `6a2856db51e0b1afc2f73ca84569a7863159e5bb`; [exact-head CI](https://github.com/austery/puresubs/actions/runs/38011833231) was still running at this read. The content has moved but the matching upstream reader/writer revision still awaits adoption. Fresh inventory/receipt checks and coordinated upstream rollout remain owner approval gates. No production regeneration or derived-row sync was performed here. The site documentation-only successor `b25c07cc1` remains on its preserved feature branch, outside merged PR18; its updated acceptance is also available in the primary checkout.


## Authorized production rollout successor

The owner subsequently authorized production rollout and explicit synchronization. PureSubs PR #495 is merged at `3105bffc1b099ffb8e82e5a29bd35e11c12ae904`; merged-main CI passed. The 11 migrated episodes were synchronized and their historical Jobs, article hashes and canonical source URLs verified. Both foreground workers use the immutable merged release. Thought Foundry publication and GitHub Pages deployment succeeded; all 11 canonical pages, 11 legacy redirects, homepage/source discovery and the real public Pagefind query passed. Read the [production acceptance receipt](../acceptance/podcast-canonical-production-2026-10-09.md) for exact revisions, live evidence and the unrelated old-worker YouTube Job limitation. The earlier pending-adoption and no-deployment observations above are historical.
