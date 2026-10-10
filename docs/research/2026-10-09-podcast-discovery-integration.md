# Podcast discovery through existing navigation

Date: 2026-10-09
Status: Source investigation; navigation and intended single-current-result semantics clarified on 2026-10-09. The [integration plan](../plans/2026-10-09-podcast-integration.md) supersedes the clarification-pending wording below. Implementation and publication remain pending.

## Type 1 follow-up — 2026-10-09

The owner confirmed unified article navigation for YouTube, manual imports, blogs, and Podcast, with a distinct X reading entry. Their Type 1 recollection is supported by the article read-model UPSERT on `(source, video_id)` (`reconcilerRepository.ts:165-204`) and its rejection of superseded Podcast results (`:235-251`), relative to `packages/automation-engine-ytdlp/src/repository/` in the release identified below. The inspected integration test updates the same article record with replacement content and rejects the old result (`podcast-processing.integration.test.ts:212-241`); it was not rerun.

A fresh non-truncated GitHub tree at content commit `3f9554bd6257eba1290fe9cab3d57b67b71674be` contains 11 Podcast article files for 11 distinct episode keys, with no same-episode duplicates. The fixed tree evidence is `/private/tmp/tf-podcast-tree-20261009.json`. No live database query or regeneration action was performed. Temporary processing candidates are a separate physical-storage concern; they are not evidence of a user-facing multiversion model. The integration plan now preserves the intended single-current-result experience instead of asking the owner to choose historical-version browsing.

## Recommendation and scope

Reuse the existing homepage, source directory, article reader, and search for Podcast articles. A dedicated Podcast navigation entry is unnecessary for the demonstrated gap: generated episodes already have the ordinary article structure and a show name in `speaker`. The site's existing navigation exposes home, tags, sources, X reading, and search (`native/layouts/partials/base.html:30-44`). This recommendation is conditional on the owner's intended meaning of the dictated navigation terms; clarification is pending. It does not assert that frontend integration has been performed.

Keep Thought Foundry discovery separate from PureSubs Workbench presentation. Workbench already reads the current saved result but displays its raw text in a `<pre>` (`packages/dashboard/src/app/features/workbench/podcast-reading.component.ts:118-137`, in the PureSubs release identified below). Improving that reader is a separate bounded task.

## Source identities and evidence boundaries

- Thought Foundry source inspected at `8ed221150df123c8d980cd64ebf9fa6f16830be4` in `/Users/leipeng/Documents/Projects/thought-foundry`.
- Local content HEAD: `c17827f78fb0195742b247974e5ab6f12f559a0c`. The shared submodule is dirty and has no `podcasts/` directory. It was neither updated nor reset; its files do not establish the latest Podcast corpus.
- PureSubs source inspected read-only at `038772078118861511cd72008b7ddc352c5a5f1f` in `/Users/leipeng/Documents/Projects/puresubs-releases/podcast-schedule-20261009`. PureSubs paths below are relative to this root. This inspection establishes code behavior, not a fresh verification that this release is currently running.
- The earlier handoff at `/private/tmp/podcast-schedule-trial-20261009/podcast-frontend-handoff-20261009.md` supplied hypotheses and historical trial observations. Its ten-episode completion, API readback, scheduler, and deployment statements were not independently rerun here.

The parent investigator reran a Node 22.19.0 characterization using EP48's saved metadata and the real `createModel`. It retained the article, omitted it from listings, produced `/speakers/liang-zhou-ling/`, and produced zero matching speaker groups; the input declared `draft: true`. Its live HTTP check returned 200 for the known EP44 article and 404 for that speaker route. These checks corroborate the listing/source gap; they do not establish full-build or Pagefind acceptance. No full-site build, search query, browser journey, processing action, workflow dispatch, or deployment was executed for this research note.

## Confirmed discovery behavior

Preparation recursively reads Markdown (`native/src/prepare.ts:12-19,53-70`). It derives `kind` from the second path segment, so `content/podcasts/article/<candidate-id>/<episode-key>.md` has `kind: podcasts`. Every parsed article receives its source-derived public route (`native/src/prepare.ts:68-70,98-110`); TXT transcripts do not enter this Markdown scan.

The visible collection admits only `posts|books|notes|clippings` and removes `exclude` entries (`native/src/model.ts:49-50`). That same collection feeds taxonomy groups and descending homepage order (`native/src/model.ts:54-81,111-113`). Speaker links are still assigned for all articles, including omitted Podcast articles (`native/src/model.ts:83-86,102-104`), while source pages are generated only for actual groups (`native/src/prepare.ts:133-138`). This explains an article linking to a missing source page.

The existing post renderer handles `post.njk` (`native/layouts/partials/page.html:1-7`) and already presents source/show/date metadata (`native/layouts/partials/post.html:29-35`). Its Pagefind body and speaker filter are controlled by `exclude`, not the listing-kind allowlist (`native/layouts/partials/post.html:5-12`). Therefore the source code does **not** establish that Podcast articles are absent from search. Search must be inspected against an actual build and pinned content snapshot before describing or fixing a search omission.

Production staging excludes Git metadata and subtitle work directories, but not Podcast candidates (`native/src/release.ts:8-10`). Deployment checks out current content `main`, stages sources, renders Hugo, restores URLs, and runs Pagefind (`.github/workflows/deploy.yml:26-45`). Its manifest/source identity artifacts identify which content a specific deployment consumed (`.github/workflows/deploy.yml:47-62`); a file existing today is not evidence that an earlier deployment contained it.

## Candidate storage is not current-result selection

PureSubs candidate paths encode article/transcript kind, a candidate ID, and the episode key (`packages/automation-engine-ytdlp/src/storage/podcast-candidates.ts:11-19`). GitHub storage saves complete candidate text using create-only writes (`packages/automation-engine-ytdlp/src/storage/github-podcast-candidates.ts:59-85`). Generation saves a `post.njk` article with show/source/date metadata (`packages/automation-engine-ytdlp/src/services/podcast/processing.ts:271-286`; `packages/automation-engine-ytdlp/src/storage/utils.ts:78-100`).

Saving registers and writes a new random candidate **before** finalizing the completed job (`packages/automation-engine-ytdlp/src/services/podcast/processing.ts:389-406`). Workbench's read service instead selects a completed job with a storage path, reads that path, and can retry a changed current result after a failed read (`packages/automation-engine-ytdlp/src/repository/podcast-processing.ts:137-146`; `packages/automation-engine-ytdlp/src/services/podcast/processing.ts:93-108`).

Cleanup waits at least two hours, is bounded, and excludes current results, active dependencies/attempts, and article-content references (`packages/automation-engine-ytdlp/src/repository/podcast-candidates.ts:56-74`). Maintenance deletes selected paths and acknowledges successful deletion; failures remain queued (`packages/automation-engine-ytdlp/src/services/podcast/processing.ts:111-145`). This cleanup is a recovery/retention mechanism, not a site publication manifest.

**Inference from these ownership boundaries:** a content snapshot can contain a candidate whose job has not completed or an older candidate awaiting cleanup. Thought Foundry scans files without querying ProcessingJob state. Merely adding `podcasts` to the kind allowlist cannot prove that every newly listed file is the current successful article. This investigation did not reproduce duplicate or stale public Podcast listings; it identifies a selection mismatch and a test requirement. Do not infer currentness from a candidate UUID, filesystem time, or cleanup age.

## Preserve the existing draft contract

PureSubs' shared frontmatter generator emits `draft: true` and `status: evergreen` (`packages/automation-engine-ytdlp/src/storage/utils.ts:89-100`). Thought Foundry retains source metadata but emits generated Hugo pages with `draft: false` (`native/src/prepare.ts:94`); neither its visible filter nor its post indexing gate checks source `draft` (`native/src/model.ts:50`; `native/layouts/partials/post.html:5-12`). Its existing integration fixture deliberately uses `draft: true` for an article and asserts its indexed reader body (`native/test/native.test.ts:21,53-55`). These are source observations; that test was not rerun here.

Do not introduce a draft/publication rule as a side effect of discovery work, and do not treat `evergreen` as publication permission. Changing publication eligibility or current-result ownership requires its own explicit decision. The candidate issue should be recorded separately if it cannot be settled within an already accepted publication contract.

## Proposed delivery register

**TF-PODCAST-DISCOVERY — reuse existing frontend entry points.** Proposed locally, pending owner clarification and implementation. Include eligible Podcast article documents in homepage pagination and the source directory, resolve the existing show link, and reuse the ordinary post reader and search. Preserve exact source-derived URLs and all existing kinds. Keep TXT transcripts outside article listings. A predicate scoped to the expected article path and supported post layout is narrower than accepting the entire `podcasts` tree, but path/layout alone does not prove current-result eligibility.

Before choosing that predicate, characterize regeneration and delayed cleanup with a pinned content fixture and the authoritative current-result information. Record whether the accepted site contract lists retained article candidates or only current results. If only current results are required and no approved contract bridges the repositories, draft that small producer/consumer decision for owner review rather than silently adding database access or guessed deduplication to the frontend.

Implementation acceptance:

1. A fixed fixture contains an existing article, a real Podcast article, an excluded Podcast article, a TXT transcript, and multiple candidates for one episode. Expected candidate behavior must be specified before asserting the listing result.
2. Eligible Podcast articles appear in date order with existing tie-breaking and homepage pagination; the show is present in `/all-speakers/`, and its link reaches a populated source page.
3. Original title, show, date, source URL, formatted body, and existing public article URLs remain intact. Excluded content retains its direct-page behavior while remaining absent from listings and search.
4. Run the documented type/test/full-build lanes on a pinned corpus, then query the generated Pagefind index by a Podcast title/body marker and show filter. Verify results link to the same existing article URL; do not add a second search index or duplicate body copies on directory pages.
5. Inspect desktop/mobile discovery and source-to-article navigation, including missing content and malformed/unexpected input. A model probe alone is insufficient.
6. Report local validation, PR CI, merge authorization, deployment identity, and runtime acceptance separately. Any eventual public claim must identify the consumed content commit and relevant deployment evidence.

**PS-PODCAST-READER — formatted Workbench reading.** Separate proposed follow-up: safely render saved Markdown, separate frontmatter from body, preserve source metadata and article/transcript availability, and verify failed/absent reads and untrusted input. Preserve current-job selection, retries, and saved-transcript regeneration semantics. This investigation does not request scheduler, acquisition, schema, or subscription changes.

No application code, article content, processing state, publication setting, or deployment was changed by this note.
