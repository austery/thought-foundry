# Podcast integration into existing article discovery

Date: 2026-10-09
Status: Owner confirmed unified article navigation. Type 1 behavior checked on 2026-10-09; implementation and deployment remain pending.

## Navigation decision

Do not add a Podcast header entry or a dedicated Podcast portal. Podcast outputs are ordinary long-form articles with show, date, source, title, and body metadata. Reuse homepage pagination, the source directory, the existing post reader, and Pagefind.

Retain the existing X reading entry. It exposes a different reading task: selecting a day, scanning individual saved originals, filtering sources or long posts, and following reply/quote context. X also remains available from the unified source directory. A shared source directory does not require identical reading views.

Verified source pointers:

- `native/layouts/partials/base.html:30-44`: current header includes `X 阅读`, sources, and search; no Podcast entry.
- `native/layouts/partials/x-day.html:1-18`: dated original-post view and filters.
- `native/src/x-discovery.ts:26-36`: individual-post identity and canonical saved locations.
- `native/layouts/partials/directory.html:12-13`: article sources and X authors share the directory.
- `native/src/model.ts:49-50`: ordinary listings currently omit the Podcast kind.
- `native/layouts/partials/post.html:5-12,29-35`: existing article indexing and provenance.

On 2026-10-09, a fresh public `/x/` HTTP read returned 200 and included the existing header entry and dated X view. This was an HTML inspection, not a browser usability test. The preceding [research](../research/2026-10-09-podcast-discovery-integration.md) records the real Podcast model probe and source-page 404.

## Content model and verified current state

The owner uses one article/source model for YouTube-derived documents, early manual imports, blog articles, and Podcast articles. Their acquisition methods and update frequency do not require separate top-level navigation. X retains its distinct original-post reading view while sharing the source directory.

Owner-confirmed replacement semantics: reprocessing produces replacement content for the same logical article. GitHub history supplies version traceability; the reading site must expose one current article rather than list historical processing outputs as separate articles. Candidate storage is an internal implementation detail, not a user-facing archive contract. Preserve the existing public article URL when replacing its content; an internal candidate path change must not introduce another discoverable article for the same episode.

The owner's Type 1 recollection is supported by PureSubs' article read model: `reconcilerRepository.ts:165-204` updates an existing row on `(source, video_id)` conflict, and `:235-251` rejects Podcast results that are no longer current. The existing integration test replaces the same article record and rejects the old result (`podcast-processing.integration.test.ts:212-241`). These paths are relative to `packages/automation-engine-ytdlp/src/repository/` in release `038772078118861511cd72008b7ddc352c5a5f1f`; the integration test was inspected, not rerun.

Fresh complete GitHub tree inspection at content commit `3f9554bd6257eba1290fe9cab3d57b67b71674be` found 11 Podcast article Markdown files for 11 distinct episode keys, with no duplicate episode keys. Evidence: `/private/tmp/tf-podcast-tree-20261009.json`. This establishes the current file inventory, not database completion status for every file.

Processing uses unique candidate paths before committing a result and bounded cleanup afterward; this can allow temporary physical coexistence during regeneration or failure recovery. That implementation detail does not make historical-version browsing a product requirement. The earlier proposal to list multiple candidates as independent documents is withdrawn. Do not infer a current result from UUID or filesystem time.

For the integration, admit current supported Podcast article documents with `post.njk` into ordinary listings unless excluded. Keep TXT transcripts and other Podcast documents outside those listings. Preserve URLs, metadata, draft semantics, and current indexing behavior. The fixed, duplicate-free snapshot supplies the baseline; it does not by itself establish replacement acceptance. Characterize the existing producer-to-site replacement behavior before finalizing the eligibility implementation. If candidate coexistence or route changes violate the owner-confirmed replacement semantics, document the concrete mismatch and propose the smallest correction rather than list both files or guess which one wins. No new publication manifest or database dependency is selected by this plan.

## Delivery

| Step | Change | Acceptance |
| --- | --- | --- |
| 1 | Add narrowly scoped Podcast article eligibility to the shared visible collection | Real Podcast fixture appears in homepage order and source groups; `exclude` and unrelated kinds retain their behavior |
| 2 | Verify show-to-article navigation using existing templates | 梁州令 appears in `/all-speakers/`; its existing article source link resolves to a populated show page; body and provenance remain intact |
| 3 | Verify search and compatibility on a fixed corpus | Podcast title/body and show-filter queries reach the existing URL; ordinary content, X routes, pagination, exclusions, and reader exports remain compatible |
| 4 | Publish a validated task branch and PR | Required local checks and review recorded; exact-head CI reported separately; merge and deployment await explicit authorization |

A fixture must include an ordinary article, a real Podcast article, an excluded article, a TXT transcript, and an unexpected Podcast path/layout. Check the pinned corpus for duplicate episode keys and record the result. Unexpected layouts retain the existing preparation rejection contract. Replacement acceptance must show that a newly successful result replaces the displayed body at the existing public article URL, with one entry in homepage/source views and one current article in search. Failed or unfinished reprocessing must retain the previous successful article. Use isolated fixtures; do not initiate production reprocessing merely to test navigation.

Use Node 22.19.0, pnpm 10.14.0, and Hugo extended 0.165.0. Run `pnpm check`, `pnpm test`, and `pnpm build`, plus fixed-content route/listing comparison, actual Pagefind queries, and desktop/mobile navigation checks. Snapshot content separately rather than updating or resetting the dirty shared submodule. Record the consumed content commit and distinguish local output from public deployment.

## Scope boundaries

Preserve X header navigation, dated browsing, source entries, original-post identities and anchors. Do not redesign the homepage, add platform tabs, or merge source identities merely to integrate Podcast.

Workbench's raw Markdown display is a separate follow-up in PureSubs. This plan does not alter scheduler behavior, subscriptions, processing retries, acquisition, content bytes, candidate cleanup, or publication permissions.
