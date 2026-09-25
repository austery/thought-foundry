# Homepage pagination and source-label acceptance

Date: 2026-09-25

## Delivered behavior

The homepage and `/page/N/` contain at most 30 articles, with previous/next links
and current/total page numbers. Home uses `/`; `/page/1/` is not generated. The
homepage renders plain-text summaries of at most 100 Unicode code points, with
an ellipsis included in that limit. Full summaries, insights, and bodies remain
on article pages. Static navigation does not require JavaScript.

The UI now calls the existing `speaker` field "来源". Directory routes, article
source links, grouping, filter keys, and search URLs are unchanged. Article
`source` links are labeled "原文" to distinguish the original link from the
source name. The previous separate-source-model proposal has been withdrawn in
the [approved design](../architecture/information-platform-design.md).

## Validation

- Node 22.19.0, pnpm 10.14.0, Hugo extended 0.165.0, Pagefind 1.5.2.
- `pnpm check`: passed.
- `pnpm test`: 26 passed, zero failures/skips. Four real-Hugo pagination scenarios
  cover 0/30/31/61 entries, exclusions, equal-date URL ordering, last-page limits,
  complete ordered traversal, Unicode/emoji and HTML summary handling, retained
  full article text, and the existing source filter. Initial fixture errors from
  missing frontmatter delimiters were corrected before the successful full run.
- `pnpm build`: passed; 10,526 pages, 227,031 indexed words, two filters. All three
  Pagefind counts match the pre-pagination full build.
- `git diff --check`: passed. Self-review checked bounded rendering, route
  boundaries, escaping, source-contract preservation, and build-output parity.

## Fixed-content comparison

Baseline: site commit `3705b7d605e727881d4c5f6a45aa42a74df24685`, output
`.native-build/run-Sr73hZ/public`. Candidate: `.native-build/run-71JyLh/public`.
Both use content `adf91fd2c9296d5d1d941291b96b55ee81d43a25`.

| Measure | Before pagination | After pagination |
| --- | ---: | ---: |
| Homepage HTML bytes | 8,717,889 | 22,914 |
| Homepage gzip bytes (local Node calculation) | 2,922,837 | 8,777 |
| Homepage rows | 10,526 | 30 |
| Homepage DOM elements | 73,544 | 252 |
| Total generated routes | 12,268 | 12,618 |

The 350 added routes are exactly `/page/2/` through `/page/351/`. No old routes
were removed. Traversing all 351 pages yields all 10,526 visible article URLs
exactly once in the original order. The last page has 26 entries and no next
link. Every summary in these pages is at most 100 code points; maximum page HTML
is 24,744 bytes. No hidden full-corpus payload is introduced.

The complete prepared archive JSON remains byte-identical, SHA-256
`d927ebf27f9c0c15a430f319aa418d9edf300c18f2191ac77404a33379782645`.
All 10,533 article HTML files are byte-identical after applying only the expected
navigation/source display-label substitutions to the baseline. No content-file
or content-submodule update is included.

## Browser acceptance

In-app browser against local preview port 8105:

- Homepage inspected at 390x844 and 1280x900, with 30 rows and no horizontal
  overflow. Previous/next navigation works at mobile width.
- Page 2 shows 30 rows, links back to `/`, and survives direct reload.
- Direct navigation to page 351 shows 26 rows and no next link.
- Source navigation opens `/all-speakers/` with heading "所有来源". Directory
  keyboard filtering finds the existing source; its detail page opens normally.
- Header search for `鸡飞狗跳` returns 62 results. Selecting the existing
  `speaker` source `士每拿Smyrna RCI` narrows this to two results. Opening
  `/content/notes/Jm_R84hY1n0/` confirms the matching text in its full body.
  That article is entry 9,152 (page 306), and its summary does not contain the
  query. This exercises full-body search beyond the first page and excerpt.

## Limits and retained evidence

No merge/deployment or production latency measurement. The size reduction is
generated HTML, not a measured speed multiplier. External font loading remains
unchanged. Page-number contents can shift on later builds as new articles arrive.
Source/tag detail-page pagination and search-result batch size are unchanged.

Logs, pre-edit backup, full-corpus comparison script, and comparison JSON are in
`.local-evidence/pagination-20260925/`. The existing submodule pointer difference
and untracked `pr-reviews/` remain untouched.
