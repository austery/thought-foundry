# Personal information platform: navigation and first load

Date: 2026-09-25
Status: Approved for implementation; no merge or deployment authorization.

## Product and source contract

The site is a personal information search platform for collected video and
podcast material, web articles, and X originals. Personal learning notes, reading
records, and reflections belong on a separate blog. This positioning update does
not migrate or delete existing content. Readers browse
recent content, search the full archive, and follow original links. WeChat
Official Accounts are a future ingestion target, not an existing subscription
capability. Collection and subscription remain upstream responsibilities.

**Owner clarification: `speaker` is the existing source identity field.** Its
values can identify channels, blogs, accounts, or other sources. Present it as
"来源" throughout the UI while preserving `speaker`, existing `/speakers/.../`
and `/all-speakers/` URLs, grouping behavior, and search query/filter keys.
`source` remains the original-material link and is labeled "原文" on articles.
Existing guest and X-author behavior stays intact.

The earlier proposal to infer source identities from `channel`, hostnames, or
account IDs and split sources from people is withdrawn. Channel-field coverage
is not a blocker. No additional identity model, metadata migration, renamed
routes, or build-time enrichment is needed.

## Approved cleanup

PR #14 originally removed only five header links in commit `596439495`.
The subsequent cleanup stopped generating area/category/project directories and
term pages, tools, and bookshelf pages, and removed their visible links. Their
underlying metadata and article URLs remain intact. The About page now explains
purpose, content sources, processing limits, and how to find original material.
Retired pages have no redirects. The localhost semantic-search entry is removed.

## Approved pagination

- The homepage and each subsequent archive page contain at most **30 entries**,
  with the same page size on desktop and mobile.
- Each entry retains title, source from `speaker`, date, existing content-type
  badge, and a plain-text summary of at most **100 Unicode code points**, including
  an ellipsis when shortened. Full summaries and insights remain on article pages.
- Shorten markup at build time. Do not ship all entries or complete summaries
  and hide them with CSS or JavaScript.
- Use `/` for page 1, `/page/2/` for page 2, etc. Do not generate `/page/1/`.
  Preserve date-descending ordering and exact-URL-ascending ties.
- Provide previous/next links and current/total page numbers. Page 2 links back
  to `/`; the final page has no next link. Render an empty-state homepage for
  an empty visible archive. Every visible article occurs once across these pages.
- Existing global search remains directly available. Search continues to index
  complete eligible article bodies and existing source filters, independent of
  homepage excerpts. Pagination works without JavaScript.
- Call the listing "recent content", not "recently collected": publication and
  ingestion dates differ. Page numbers reflect the current build and may shift
  when new content is added; article URLs remain stable.
- Source/tag detail-page pagination, changing search-result batch size, and
  introducing a new homepage search interface are outside this bounded change.

## Evidence and acceptance

The fixed-content pre-cleanup homepage rendered 10,526 rows, 11,345,800 HTML
bytes, and 105,001 DOM elements. Removing taxonomy display reduced this to
8,717,889 bytes and 73,544 elements, but left the row count unbounded. These
measurements describe local generated output, not production response times.
See [cleanup acceptance](../acceptance/information-platform-cleanup.md).

A large DOM increases style and layout work; bounding the initial list addresses
markup size as well as rendering work. References:
[Chrome DOM-size guidance](https://developer.chrome.com/docs/performance/insights/dom-size),
[GOV.UK pagination](https://design-system.service.gov.uk/components/pagination/).
Thirty is an adjustable product default, not a universal research-backed optimum.

Acceptance: real-Hugo tests for 0/30/31/61 visible entries, excluded content,
reverse input/date ties, complete ordered traversal, boundary links, Unicode and
HTML summary handling, and intact full article text. Full-corpus comparison must
show unchanged metadata/article URLs, no omissions or duplicates across pages,
and a homepage below 100 KiB and 1,500 elements. Exercise desktop/mobile pages,
next/back navigation, direct page reload, source navigation, and actual search
for older content. Do not infer production LCP or deployment from local results.

## Later priorities

Consider content-type search filters, separate published/collected/updated dates,
and local bookmarks or reading history when there is a concrete need. Existing
source browsing already uses `speaker`; it is not a future data-model project.
Semantic search, recommendations, accounts, and a backend migration are deferred.
The older SPEC-055 concerns a separate personal blog and does not define this work.
