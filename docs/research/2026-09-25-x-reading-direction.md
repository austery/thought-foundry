# X originals: reading and discovery direction

Date: 2026-09-25
Status: Research and proposed scope; no implementation or publication authorized by this note.

## Verified current state

The site already recognizes literal X originals through `native/src/x-reading.ts`, renders anchored post cards in `native/layouts/partials/x-reading.html:9`, and marks X entries in the general article list. This is an extension of the existing reader, not a new ingestion project.

Local content snapshot `adf91fd2c9296d5d1d941291b96b55ee81d43a25` contains 40 recognized files: 24 daily collections and 16 standalone POST exports, with 56 unique post IDs and no duplicate entries. Three observed authors account for 24 (Tigris), 28 (Herman Jin), and 4 (investment TALK) entries. Eighteen bodies are under 80 characters and two exceed 1,000. All 56 entries declare media NOT_ARCHIVED and context PARTIAL; 34 related-source links are present. These are local snapshot measurements, not a claim about all available provider data or current production totals. ARTICLE is supported by the parser but absent from this sample.

The [public Herman collection](https://austery.github.io/content/clippings/x/daily/858124064476479488/2026-09-19/) returned HTTP 200 and the expected reader HTML during this investigation. Its two entries include one short reaction whose quoted source is important to interpretation. The rendered status currently exposes raw `NOT_ARCHIVED` / `PARTIAL` values, and quote links display labels such as `QUOTES: x:post:...`. Other public pages were not audited.

Current limitations established from code:

- Preparation generates author/date/count titles (`native/src/prepare.ts:57`), which identify the collection but reveal little about its content.
- The X template includes author metadata but no speaker filter (`native/layouts/partials/x-reading.html:6`). X exports in this sample have no generic speaker field; the existing speaker taxonomy is based on speaker/guest values in `native/src/model.ts`. Therefore the recently improved speaker search does not yet provide an equivalent X-author path.
- The whole daily collection is one Pagefind body. Cards have article IDs, but Pagefind section extraction normally uses heading IDs. Finding a word can therefore lead to the collection rather than immediately identifying the relevant post.
- Original paragraphs and source links exist; media bytes and quoted text are not guaranteed. Presentation cannot repair missing context by itself.

## Recommended reading model

Treat X material as an author-oriented reading feed with stable links to saved originals. Preserve the existing Markdown files and public URLs. At build time, flatten parsed entries into presentation records identified by post ID; a reading-feed card links to the existing collection URL plus `#x-post-ID`. Storage can stay grouped by day even when the browsing interface operates on posts.

### Small first iteration

1. Add an X reading landing page with author selection and newest-original-first order. The author ID is the stable identity; observed names and handles are display values. Include a link to each author's archive. Use bounded pagination as the archive grows.
2. Show compact text-first cards: author, readable original time, original opening lines, and a source link. Expand longer text on demand; keep short posts fully visible. A first-lines preview is quoted source text, not an invented title or AI summary. Distinguish long articles only when the exported kind says ARTICLE.
3. Put meaningful context actions adjacent to the body: 'Quoted post — open on X' or 'Saved related post'. If the exact target ID is present locally, link to its saved canonical anchor; otherwise retain the external URL. Do not manufacture a quote preview or automatically fetch missing material.
4. Keep a concise visible notice when images/context are missing, in readable language. Move save timestamps, technical IDs, and raw validation states into the existing provenance disclosure. Preserve literal source text and safety escaping.
5. Add previous/next collection navigation within the same author and human-readable dates in one explicit timezone. Collection date is Toronto-based; avoid displaying UTC ISO timestamps as though they were local dates.

These changes need no new runtime service, embedding model, provider call, or source Markdown rewrite. New derived navigation pages are build output. They must retain source/exclusion rules and avoid indexing duplicate full text from feed pages.

### Next small integration, if browsing proves useful

Expose X authors to the existing author/speaker search control with an explicit naming decision, preserving stable author identities and existing speaker semantics. Add heading anchors or an equivalent tested search mapping so a match leads to the specific saved post. A Pagefind result count for daily collections remains a page count unless the indexing unit is deliberately changed; do not relabel it as a post count. Prefer testing collection-level indexing plus post-level links before introducing a second index or one record per post.

### Defer

- Thread reconstruction: a daily collection is not a thread. Require saved reply/continuation relationships and known order before offering continuous thread reading.
- Embedded live X widgets as the default: the reading page should retain its saved text without depending on a live widget. Consider embedding only as an optional supplement after separately checking the integration requirements.
- Media galleries: no archived media exists in this snapshot. Adding media capture/storage is producer-side scope, not a CSS change.
- Topic classification, AI summaries, and recommendation ranking: no demonstrated need yet; preserve original author attribution and avoid inventing context.
- Likes/reposts or other social counters: no such fields are present in the reader contract, so the proposed layout does not depend on them.

## Acceptance examples for a later implementation

- The user selects Herman and sees readable post previews rather than only daily collection titles.
- A short reaction visibly identifies its missing quoted context, with a working original-source action.
- Opening a feed card reaches the exact saved post anchor; old collection URLs still work.
- The feed does not duplicate articles in the search index or miscount daily collections as individual posts.
- Original text, source identity, exclusion behavior, and unresolved context remain faithful on desktop and mobile.

Reference-site research is recorded in `2026-09-25-x-reading-references.md`. This investigation changes research notes only.
