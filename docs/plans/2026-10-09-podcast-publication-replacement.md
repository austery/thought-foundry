# Podcast replacement: producer/site contract correction

Date: 2026-10-09
Status: Concrete source mismatch reproduced; cross-repository correction proposed, not implemented.

## Required behavior

The owner confirmed that reprocessing replaces one logical article. GitHub supplies version history. Homepage/source listings and search must expose one current successful article at a stable public URL; an unsuccessful replacement retains the previous successful content.

## Reproduction and ownership

Inspected PureSubs release: `038772078118861511cd72008b7ddc352c5a5f1f`.
Paths below are relative to `packages/automation-engine-ytdlp/src/` in that release.

- `services/podcast/processing.ts:389-406`: registers and writes a random candidate before finalizing the completed job.
- `storage/podcast-candidates.ts:11-19`: article paths include a candidate ID before the stable episode key.
- `storage/github-podcast-candidates.ts:11-26,59-85`: production storage uses the same path function; writes are create-only and cannot replace another candidate's bytes.
- `services/composition-root.ts:660-674`: the configured GitHub Podcast store is the production composition path.
- `repository/reconcilerRepository.ts:165-204,235-251`: the article database instead updates one `(source, video_id)` record and rejects a superseded Podcast job.
- `repository/podcast-candidates.ts:56-74`: old objects are removed later, subject to age, current-result, dependency and article-reference protections.
- Thought Foundry `native/src/prepare.ts:53-70,98-110` scans Markdown and derives public URLs directly from file paths; it has no completed-job selection contract.

Executed a local probe with the real `LocalPodcastCandidates` class and the modified site preparation. The production GitHub class uses its same `candidateRelativePath` function. No provider call, database mutation, production reprocessing, or content-repository write occurred.

1. Save the first article for `pod_abcdefghijklmnopqrstuvwx` under `article/attempt-1/` and prepare the site.
2. Save a replacement under `article/attempt-2/`; both physical candidates exist. The local site patch refuses the ambiguity instead of listing both.
3. Remove only the probe-owned first candidate through the real store and prepare again.
4. The resulting URL changes from `/content/podcasts/article/attempt-1/pod_abcdefghijklmnopqrstuvwx/` to `/content/podcasts/article/attempt-2/pod_abcdefghijklmnopqrstuvwx/`.

Evidence: `/private/tmp/tf-podcast-replacement-probe-20261009.json` and its executable companion `/private/tmp/tf-podcast-replacement-probe.mts`. This is a deterministic path/consumer probe, not an end-to-end production regeneration trial. Stable-URL acceptance remains failed.

The current duplicate-free content inventory does not disprove this behavior. Single-current-result database semantics do not automatically become a stable public file replacement.

## Smallest proposed correction

Give the Podcast producer an explicit publication step for the current successful result. Keep processing candidates immutable and recoverable. After success, publish replacement bytes at the logical article's fixed public path, using GitHub history for revisions. Thought Foundry discovers these published article documents, not processing candidates.

For already published episodes, preserve the existing public article path as the fixed destination. For new episodes, assign a path once from their stable episode identity. Record that destination explicitly so it survives process restarts and candidate cleanup. Do not infer the selected current result from filesystem time, Git commit order, UUIDs, titles, or article dates.

The proposed change belongs in an isolated PureSubs checkout plus the site consumer; it must not edit the running release. Before implementing, settle the exact ownership and persistence of the fixed destination and publication receipt against PureSubs' current contracts. This proposal does not select a new schema or silently introduce a manifest.

The producer publication step must:

- Verify the authoritative current successful job, reject superseded publication attempts, and serialize replacement for one episode.
- Preserve the previous published bytes until a replacement is successful; failed or uncertain Git writes require reconciliation rather than deleting the previous article.
- Keep candidates out of public discovery and protect the fixed published artifact from candidate cleanup.
- Treat publication completion separately from generation completion, with an inspectable receipt and replay-safe recovery after restart.
- Preserve existing URLs and original Markdown bytes, including frontmatter and provenance. Do not rewrite the entire content corpus.

## Acceptance before integration can be complete

Use an isolated repository/database fixture for: first publication, successful replacement at the same URL, failed generation, superseded completion, lost Git response, restart/replay, and candidate cleanup. For every failure case, verify the previous successful article remains readable. Rebuild the site against successive fixture snapshots and query actual Pagefind: one article per episode, replacement text searchable at the same URL, old text absent from the current index, unchanged homepage/source membership.

The local discovery patch and its ambiguity guard are independently inspectable. They do not solve this producer contract mismatch and must not be presented as satisfying full replacement acceptance. Merge and deployment remain unauthorized.
