# Personal information platform: navigation, sources, and first load

Date: 2026-09-25

## Status and scope

The owner approved retiring public area, category, project, tool, and bookshelf
pages while retaining article metadata and article URLs. The About page should
explain the platform and where its content comes from. These changes extend PR
#14, which previously removed only five header links (commit `596439495`).

The homepage and source-directory design below is proposed for owner review;
it is not an implemented capability. No deployment is authorized by this document.
The existing speaker directory remains available until genuine source browsing
can replace its primary navigation role without misclassifying people.

## Product purpose

Provide a personal information search platform for collected video and podcast
material, web articles, X originals, and personal notes. Readers should be able
to find a passage, identify its provenance, and open the original material.
WeChat Official Accounts are a future ingestion target, not a current capability.
The site presents exported content; collecting and subscribing belong upstream.

## Observed baseline

The existing local full build `.native-build/run-HY3POA/public` contains:

| Measure | Observed value |
| --- | ---: |
| Documents | 10,533 |
| Visible homepage entries | 10,526 |
| Homepage HTML bytes | 11,345,800 |
| Locally gzip-compressed HTML bytes | 3,100,330 |
| DOM elements | 105,001 |
| Documents with a nonempty channel field | 24 |
| Documents with a nonempty source field | 10,364 |

These measurements describe an existing local artifact, not current production
latency or actual compressed transfer size. A fresh fixed-content comparison is
recorded separately in the acceptance report. The homepage template renders all
visible IDs, including full summaries and insights; it has no pagination.
Pagefind is loaded by the search page, not the homepage. External Google Fonts
are another first-load dependency and require separate network measurement.

Large DOMs increase style and layout work; reducing initial markup addresses
both transfer and rendering cost. See [Chrome's DOM-size guidance](https://developer.chrome.com/docs/performance/insights/dom-size)
and [web.dev's explanation](https://web.dev/articles/dom-size-and-interactivity).
These sources explain the mechanism, not this site's measured speed.

## Proposed homepage

1. Keep the brand, primary navigation, theme control, and a short purpose line.
2. Make full-text search the primary action, submitting to `/search/?q=...`.
3. Show the most recent 30 entries, with title, date, verified source when known,
   content type, and a plain-text summary excerpt of at most 160 Unicode characters.
4. Keep full summaries and insights on article pages. CSS clamping alone is not
   sufficient: omitted text must not be present in the homepage response.
5. Use static previous/next pagination: `/` then `/page/2/`, `/page/3/`, etc.
   Keep existing date-descending, exact-URL-ascending tie ordering. Label this
   "recent content", not "recently collected": publication and ingestion dates differ.
6. Render at least one page for an empty archive. Avoid duplicate `/page/1/`.
   Every visible article must remain reachable once across the page sequence.
7. Do not ship the entire corpus as JSON or hide all entries with client-side
   pagination. Browsing must work without JavaScript. Pagefind continues to index
   complete eligible article bodies, independent of listing excerpts.

Provisional budgets: at most 30 rows, at most 1,500 DOM elements, and at most
100 KiB uncompressed homepage HTML on the fixed corpus. Compare cold-load desktop
and mobile browser results under identical conditions; report LCP and transfer
observations without equating localhost results with production performance.

## Proposed source model

A source is the publishing channel, feed, account, or website. A person is an
author, presenter, host, or guest. Neither `speaker` nor `author` alone proves a
source identity; the corpus uses `author: Lei` on collected material as well.

Derive an optional, typed source reference during site preparation. Keep raw
frontmatter unchanged. The reference should contain a stable key, display name,
platform, original URL, and evidence basis; presentation URLs are derived from
the stable key rather than a mutable display name.

| Available evidence | Safe interpretation |
| --- | --- |
| Explicit channel/account ID or channel URL | Group by that identity; retain platform namespace |
| X author ID from validated literal export | Reuse the existing X identity and display-name handling |
| Explicit channel name without stable ID | Preserve the label; do not silently merge across platforms |
| Ordinary blog article URL | Group by normalized hostname, labeled as a website; preserve original URL |
| YouTube watch URL without channel identity | Platform known, channel unknown; do not infer channel from speaker |
| Shared podcast host or `mp.weixin.qq.com` article URL | Platform known; account/feed remains unknown without upstream identity |
| No external provenance | Leave source unknown; do not automatically label it original writing |

Canonical host matching must be exact, not substring-based. Accept only HTTP(S)
provenance URLs. Unknown source is a valid state. Avoid network enrichment at
build time: upstream adapters should supply missing channel/feed/account identity.
Retain people navigation separately for historical links and useful discovery.

Proposed primary navigation: Home, Sources, Tags, X Reading, About.
`/sources/` should offer source-name filtering and source type. Source detail
pages should use the same bounded static article-list pagination as the homepage.
The Pagefind source filter is distinct from the existing speaker and X-author
filters; old search URLs must continue to work. Do not simply relabel the existing
speaker filter as verified sources.

## Feature priorities

| Priority | Capability | Reason |
| --- | --- | --- |
| Now | Lightweight homepage, static pagination | Remove the observed full-corpus first-load cost |
| Next | Verified source directory and original links | Make provenance and repeat discovery reliable |
| Next | Source and content-type search filters | Narrow mixed video, web, notes, and X results |
| Later | Separate published, collected, and updated dates | Avoid confusing old material with newly ingested material |
| Later | Local bookmarks and reading history | Useful only after search and provenance work well |
| Defer | Semantic search, recommendation feed, accounts | Require real unmet retrieval or cross-device needs |

No SPA migration, backend database, or search-engine replacement is required.
The older SPEC-055 describes a separate personal-blog project; it is not the
requirements source for this information-platform change.

## Acceptance and delivery boundaries

For the approved cleanup, verify retired route families and UI links are absent,
article URL sets and metadata remain intact, exclusions still work, and full
Pagefind indexing succeeds. Retired routes deliberately return no generated page;
no redirect is promised. Historical content is not rewritten to remove old links.

For the proposed optimization, test empty archives, 30/31-entry boundaries,
date ties, last-page navigation, excluded articles, deep-link refresh, and
complete traversal without omissions or duplicates. Search must still retrieve
an article beyond the first page and text absent from a summary excerpt.

For sources, test missing and conflicting identity, shared-host URLs, malicious
URL schemes, people who appear in multiple channels, and existing speaker/X
search links. Verify desktop/mobile navigation in a browser. A successful build
or CI run does not establish live deployment or real-user performance.

Implement homepage pagination as one bounded follow-up after approval; implement
source identity and browsing as a separate follow-up after its contract is accepted.
