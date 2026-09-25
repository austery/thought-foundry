# X reading and discovery: implementation plan

Date: 2026-09-25
Status: Draft for confirmation; implementation has not started.
Scope owner: Thought Foundry site code. Source Markdown remains owned by thought-foundry-content.

## Outcome

Readers can open an X reading page, select an author, scan individual posts in chronological order, and open the exact saved original with its context links. Short posts do not need invented article titles. Daily files remain storage units, not presumed threads.

This is a bounded extension of the existing Hugo/TypeScript/Pagefind reader. One plan with four sequential tickets is sufficient; no new long-lived architecture SPEC is proposed. References:

- ../research/2026-09-25-x-reading-direction.md
- ../research/2026-09-25-x-reading-references.md
- ../acceptance/x-original-reader.md

## Agreed boundaries and proposed defaults

- Keep original text, existing collection/standalone URLs, `#x-post-ID` anchors, source links, and exclusion behavior.
- Add static `/x/` and `/x/authors/<author-id>/` browsing routes; paginate at 20 posts. Validate route collisions before writing output.
- Order feed items by original publication instant descending; unknown dates last, post ID as a deterministic string tie-breaker. Display dates in America/Toronto with an explicit timezone label. Do not reinterpret a collection's date-only value through UTC.
- Use stable author/post IDs for identity, observed names/handles for labels. Select the most recently saved nonempty observed author label, with deterministic tie-breaking; do not merge identities by display name.
- Use existing parsed X records to derive navigation at build time. No content-repository edits, provider calls, runtime server, new model, or second search index.
- Short text stays fully visible; text over approximately 280 Unicode code points gets an original-text preview and an accessible expand control. Do not insert ellipses into the expanded original or break its paragraphs. Retain ARTICLE handling without claiming coverage from the current real corpus, which contains none.
- Feed/author listings are not additional Pagefind bodies. Search continues to index the existing reading pages; a daily collection remains one search result, not a count of posts.
- Excluded records stay out of feeds, author counts, navigation, filters and search. Preserve their existing direct-page behavior. Do not link to an excluded local target from a new visible context card.

## Ticket XREAD-01 — Author feed and stable post navigation

**Result:** A new X navigation entry leads to all posts; readers can select an author and open a specific saved post.

**Work:**
- Derive a typed view model of eligible posts, author labels, counts and canonical saved locations from `XReading` entries.
- Generate `/x/`, author pages and static pagination. Each card provides literal opening text, author, original time, original-source link and a saved-reading link to the existing post anchor.
- Keep existing general homepage listing behavior for this release. Add previous/next daily-collection links for the same author, ordered by collection date.
- If the same post ID appears in multiple files, deduplicate only the new browsing view. Prefer an eligible standalone saved location, otherwise the earliest collection date and exact URL tie-break. Preserve every old route and its original text. If duplicate IDs disagree on author or body, fail with an actionable diagnostic instead of silently choosing content; revisit that policy only with a real conflicting fixture.

**Acceptance:**
- On the audited fixed snapshot, 56 unique posts and three author identities appear; counts are derived, not hardcoded. Selected-author pages contain only that author's eligible posts.
- Every preview opens the correct existing post anchor; pagination is stable and usable without JavaScript.
- Duplicate, excluded, renamed-author, unknown-date and equal-time fixtures behave deterministically. Existing speaker directories and non-X lists retain their behavior.

## Ticket XREAD-02 — Readable cards and honest context

Depends on XREAD-01.

**Result:** Both feed previews and original reading pages prioritize text and meaningful source/context actions.

**Work:**
- Share presentation styles or partials where useful while keeping full original text authoritative on the reading page.
- Format original timestamps for people. Keep save time, raw status values and technical identifiers in the existing provenance disclosure.
- Retain a concise visible missing-media/context notice. A complete-looking card must not imply missing images or quoted text were captured.
- Translate recognized relationship labels into actions such as opening the quoted post or the replied-to post. Resolve a local link only from an exact known post ID and eligible saved target; otherwise preserve the original HTTP(S) source link. Unknown relationship kinds use a neutral label and retain their raw provenance.
- Keep literal rendering and safe links. Do not interpret saved text as arbitrary HTML, reconstruct threads, or fetch quote previews.

**Acceptance:**
- Short context-dependent posts have an adjacent useful context link; raw `QUOTES: x:post:...` is not the primary reading label.
- Long text expands/collapses with keyboard controls; expanded text matches the saved literal body exactly.
- Missing targets, unsafe links, unknown status values, mobile layout and dark theme are covered. Existing original/source links remain available.

## Ticket XREAD-03 — X author filtering and search-to-post links

Depends on XREAD-01 and XREAD-02.

**Result:** Readers can search within an X author's saved pages and reach a matching post when Pagefind supplies a section match.

**Work:**
- Add a distinct Pagefind `x_author` filter keyed by stable author ID. Present its author labels alongside existing speaker/source options in the same selection control, without rewriting the generic speaker taxonomy or conflating equal names.
- Preserve existing `q`, `exact`, and `speaker` URLs. Add `author=<id>` for X selection; source selection is mutually exclusive. If both parameters arrive externally, use an explicit deterministic precedence and normalize the URL rather than silently intersecting unrelated namespaces.
- Emit speaker/author and appropriate existing date metadata for X results. No generated topic headlines or summaries.
- Give X post headings stable IDs while preserving the existing `#x-post-ID` destinations, then verify actual Pagefind sub-results. Show meaningful passage links to the matching saved post; retain collection-level result cards and counts.
- New feed pages must not become duplicate full-text search records. Existing full-text query behavior and exact-phrase controls remain available.

**Acceptance:**
- Keyword plus X author excludes other authors; renamed or same-name authors remain distinct. Existing speaker-only links still work and URL state survives reload.
- A known word in a non-first daily post produces a usable link to that post. Verify this with real Pagefind output, not template markup alone.
- Search counts remain clearly page-based; no assertion that 24 collections are 24 posts. Search recovery and stale-response behavior continue to pass.

## Ticket XREAD-04 — Fixed-content acceptance, preview and publication

Depends on XREAD-01–03.

**Work and gates:**
- Pin a fresh content snapshot; record it and baseline/candidate site SHAs. Run `pnpm check`, `pnpm test`, and a full build using the pinned Node/pnpm/Hugo toolchain.
- Compare old route coverage, non-X reading bodies and navigation, X literal text/source identities, and indexed coverage. Account explicitly for intended heading/filter metadata changes; no silent removal of content or duplicate feed indexing.
- Exercise the real corpus plus focused fixtures for missing dates, excluded entries, duplicates, quote targets, ARTICLE rendering and hostile literal text.
- Browser acceptance: feed/author navigation, pagination, exact-anchor landing, expanding text, source actions, X author search, older speaker URLs, mobile width, dark theme and keyboard controls.
- Record findings and conduct an independent review. Fix and reverify findings before publishing a task-owned branch/PR. Prefer one PR while this remains one coherent reading experience; split only if implementation becomes materially larger.
- Deliver a local preview and a concise acceptance record. Merge and deployment remain separately authorized.

## Execution and approval

After plan confirmation, execute XREAD-01 through XREAD-04 sequentially and report meaningful checkpoints. Keep this document's ticket statuses and acceptance evidence current. Do not create external tracker issues merely to duplicate these local tickets.

| Ticket | Status |
| --- | --- |
| XREAD-01 | Planned |
| XREAD-02 | Planned |
| XREAD-03 | Planned |
| XREAD-04 | Planned |

Deferred: media acquisition, reconstructed conversation/thread graphs, embedding search, AI summaries, recommendation ranking, account state and social engagement metrics. Any of these would be a separate scope decision.
