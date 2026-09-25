# Information-platform cleanup acceptance

Date: 2026-09-25

## Scope

Extends PR #14's navigation-only commit `59643949535b74748c09ce1d0b20ea327ac5bd9d`.
Retires generated area/category/project directories and term pages, tools, and
bookshelf routes. Removes their article/listing links and the localhost semantic
search link. Replaces the About page with platform purpose and provenance.

This report records the cleanup at commit `3705b7d60`, before homepage pagination
and source-label updates. The owner subsequently clarified that `speaker` already
identifies sources; the proposal for a separate source model was incorrect and
has been withdrawn. See [the corrected design](../architecture/information-platform-design.md).

## Validation

- Node 22.19.0, pnpm 10.14.0, Hugo extended 0.165.0, Pagefind 1.5.2.
- `pnpm check`: passed.
- `pnpm test`: 22 passed, 0 failed, 0 skipped. The native integration fixture now
  checks retired routes and links are absent while area/category/project metadata
  remains. It also exercises article URLs, exclusions, date ties, series, books,
  source-byte preservation, and rendered speaker filters.
- Baseline and candidate `pnpm build`: passed on the same local content checkout,
  `adf91fd2c9296d5d1d941291b96b55ee81d43a25`. The pre-existing submodule pointer
  difference is not part of this PR's site-code changes.
- Baseline output: `.native-build/run-i7vMPN/public`.
- Candidate output: `.native-build/run-Sr73hZ/public`.
- Generated routes: 12,348 to 12,268. Exactly 80 removed routes, all in the approved
  retired families; no added routes. No links to retired route families found in
  the generated HTML route set.
- All 10,533 article HTML files compare identically after removing only primary
  navigation and retired taxonomy blocks, and normalizing inter-tag whitespace.
  Article URL sets remain identical.
- The entire prepared archive JSON is byte-identical, SHA-256
  `d927ebf27f9c0c15a430f319aa418d9edf300c18f2191ac77404a33379782645`.
- Both Pagefind builds index 10,526 eligible pages and two filters. Indexed word
  counts change from 227,032 to 227,031 after removing visible taxonomy text;
  this is not a claim of byte-identical search indexes.
- In-app browser: About page inspected at 390x844 and 1280x900; no horizontal
  overflow. Its search link opens the search page. Query `家庭关系` returns 2,125
  matches and displays 10 results; the first result opens the expected article,
  with original-source link and related series intact and no taxonomy block.
  A first search attempt during index generation showed the expected load error;
  reload after the completed build restored filters and working search.
- `git diff --check`: passed. Self-review checked the route allowlist, retained
  metadata, absence of broken retired links, and exclusion/search behavior.

## Homepage evidence

| Measure | Baseline | Candidate |
| --- | ---: | ---: |
| HTML bytes | 11,345,800 | 8,717,889 |
| Gzip bytes (Node 22, local calculation) | 3,119,561 | 2,922,837 |
| Article rows | 10,526 | 10,526 |
| DOM elements | 105,001 | 73,544 |

The cleanup reduces markup but does not solve the unbounded homepage. Gzip sizes
are local calculations, not measured HTTP transfer sizes. No production latency,
mobile CPU benchmark, or real-user performance claim is made.

## Evidence and limits

Local logs, pre-edit backup, comparison script and JSON are retained under
`.local-evidence/navigation-platform-20260925/`. Existing `pr-reviews/` and the
content submodule were left untouched. Full builds used the local content revision,
not an assertion about whichever revision a later deployment will fetch.

No merge or deployment performed. Retired pages intentionally have no generated
replacement or redirect; publication must remove stale generated output as the
existing fresh-output deployment does. Dead template branches for historical
views are not public routes and are outside this bounded change.
