# GitHub Pages deployment timeout investigation

Date: 2026-11-10. Historical snapshot. The source build and push succeeded in the observed cycle; the downstream GitHub Pages deployment stalled while syncing files. This investigation made no hosting or workflow change. The measurements below were recorded with `gh api` and `gh run`.

## Pipeline (how the site is published)

1. `austery/thought-foundry` workflow `deploy.yml` builds Hugo + Pagefind and
   pushes the output to `austery/austery.github.io` (branch `main`, repo is
   public). It is triggered hourly by a Cloudflare Worker
   (`ops/hourly-dispatch/`) through `workflow_dispatch`, because GitHub's
   native `schedule` is unreliable. This part works: the last 20 runs
   succeeded, each 7–11 minutes.
2. The push to `austery.github.io` triggers GitHub's built-in
   `pages-build-deployment` workflow (Pages `build_type` is `legacy`, source
   `main` `/`). **This is the part that times out.**

## Observed failure

- In `austery/austery.github.io`, 16 of the last 197 completed
  `pages-build-deployment` runs failed (about 8%) between 2026-11-02 and
  2026-11-10. On 2026-11-10 alone: 7 of 30 recent runs failed (about 23%).
  The rate may be rising; the 197-run window is not broken down per day.
- Failed example: [run 42896289300](https://github.com/austery/austery.github.io/actions/runs/42896289300) (2026-11-10 20:32–20:44 UTC). The `build`
  and `report-build-status` jobs succeed. The `deploy` job runs the
  "Deploy to GitHub Pages" step for about 10 minutes. The log polls
  `Current status: syncing_files` repeatedly, then prints
  `Timeout reached, aborting!` and `Canceling Pages deployment...`.
- Every failed run takes about 12 minutes. Successful runs take about 2–3
  minutes. The failure looks like a stall in GitHub's file-sync stage, not
  slow work.
- Effect on readers: the next hourly publication usually succeeds, so the
  site is stale by at most about one hour. No data loss was observed.
- Separate, unrelated: four `deploy.yml` runs failed on 2026-11-08 and
  2026-11-09 after 1–2 minutes (run ids `42467009073`, `42471255403`,
  `42567067374`, `42572769638`). They were not investigated and are not
  timeouts.

## Site size (from the published repo's git tree)

- Published repo: 46,407 files, 1,750 MB uncompressed.
- Repo `size` per GitHub API: 891 MB (git-compressed).
- Latest Pages artifact (`github-pages`): about 897 MB (compressed tarball).
  Upload of this artifact takes about 1 minute.
- Failed and successful runs have nearly identical artifact sizes (differences
  about 0.1 MB). Size alone does not explain which runs fail.

| Directory | Size | Share | Files | What it is |
|---|---|---|---|---|
| `content/` | 663 MB | 38% | 13,699 | Article HTML (`content/notes` alone is 619 MB) |
| `reader/` | 494 MB | 28% | 12,094 | Raw Markdown copy of each article, SHA256 file names |
| `pagefind/` | 434 MB | 25% | 17,001 | Search index: fragments 233 MB, index files 200 MB |
| `tags/`, `x/`, `speakers/`, `page/` | about 159 MB | 9% | about 3,500 | Listing pages |

- By type: `.html` 822 MB, `.md` 494 MB, `.pf_fragment` 233 MB,
  `.pf_index` 200 MB.
- No single file is large (largest: a 3.7 MB Pagefind index file). The load is
  many files, not big files.
- `reader/*.md` serves only two buttons on the article page, "copy full text"
  and "download Markdown" (`native/layouts/partials/post.html:43-44`). It is a
  duplicate of article content and is the easiest block to remove or host
  elsewhere.

## Constraints from the repository (`AGENTS.md`)

- Preserve exact public URL paths, Chinese slugs, metadata visibility and
  Pagefind search scope. Pagefind relies on intentional HTML spacing.
- Content lives in a separate submodule (`src/content/`). Do not mass-edit it.
- The deployment key and the target repo `austery/austery.github.io` are
  existing infrastructure. Changing the deployment target changes
  `.github/workflows/deploy.yml` and its acceptance documents.
- Owner approval is required before merging or deploying.

## What is established, what is not

Established (observed):
- Failures happen in GitHub's Pages deployment step, in `syncing_files`.
- Our build and push succeed in the same cycle.
- The site is large: 1.75 GB uncompressed, 897 MB compressed, 46k files.

Not established (do not treat as fact):
- Whether the 1 GB GitHub Pages limit is measured compressed or
  uncompressed, and whether the site already exceeds it in a way that
  matters. Check GitHub's current documentation.
- Whether size or file count causes the stalls, or whether this is random
  GitHub-side degradation. GitHub's `schedule` events for this repo are also
  degraded since 2026-08-26 (see `2026-11-github-schedule-degradation.md`),
  but that separate symptom does not establish a shared cause.
- Whether failures correlate with time of day. The failed start times
  (UTC) were 23:32, 06:33, 10:06, 10:32, 13:30, 15:34, 20:32; this was not
  analysed.
- Why earlier months did not show this. No data was collected before
  2026-11-02.

## Options considered (not tested)

1. **Do nothing.** About 8–23% of runs fail; readers see content up to one
   hour late. Cost: none. Risk: the rate may grow with the corpus.
2. **Retry on failure.** Re-run the failed Pages deployment automatically
   (for example from the Worker or a follow-up workflow). Does not fix the
   cause. Question: is a re-run likely to succeed, and does it need a new push?
3. **Custom Actions deployment (`build_type: workflow`).** Allows a longer
   `deploy-pages` timeout and explicit retry. Requires changing a Pages
   setting (owner approval) and uploading a 900 MB artifact each run.
4. **Shrink the output.** Move `reader/` (494 MB) out of Pages, for example to
   R2 behind a Worker, and shorten or compress other output. Reduces the size served by Pages. The effect on stalls is unknown.
5. **Move hosting to Cloudflare.** The site had no custom domain. A hostname change would affect existing public links. Any migration would need a plan for redirects from `austery.github.io`, Pagefind compatibility and rollback. Check current file count and size limits against the measured output before comparing providers.

## Related documents in this repository

- [GitHub schedule degradation](2026-11-github-schedule-degradation.md)
- [Hourly schedule recovery](../acceptance/hourly-schedule-recovery.md)
- [Hourly dispatch worker](../../ops/hourly-dispatch/README.md)
