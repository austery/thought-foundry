# X reading and discovery acceptance

Date: 2026-09-25
Scope: XREAD-01 through XREAD-04 in [the implementation plan](../plans/2026-09-25-x-reading-plan.md).

## Identity and method

- Site baseline: `6fd86c553e00d3a4adafb84010b256fa77c3127d` (same site code as remote main `6bce5e3d3`; the additional local commit only changes the content gitlink).
- Candidate code: `03308971fffd8d83ba6708897b4e74281fb050df`.
- Fixed content checkout: `adf91fd2c9296d5d1d941291b96b55ee81d43a25`, clean throughout. No source Markdown edits or content gitlink changes are included in the PR. The newer local content checkout is intentionally retained.
- Node 22.19.0, pnpm 10.14.0, Hugo extended 0.165.0, Pagefind 1.5.2. Host Hugo 0.166.0 was detected; acceptance was rerun with the official 0.165.0 package extracted locally and verified against its SHA-256 release checksum. No system installation changed.
- Baseline and candidate rendered the same local content snapshot, including filesystem date fallbacks. The baseline archive reused the existing dependency installation. Non-X main content and complete indexed fragments were compared; global navigation and search UI intentionally change.

## Results

| Check | Result |
| --- | --- |
| Type check | Passed |
| Native tests | 22 passed, 0 failed |
| Full build | 12,348 HTML pages; 10,526 indexed pages; 2 filters |
| Existing public routes | All 12,340 retained |
| New routes | 8 feed/author/pagination pages |
| Non-X main content | 12,299 pages identical, excluding the intentionally changed search page |
| X originals | 40 pages, 56 post bodies and original-source URLs unchanged |
| Non-X indexed fragments | All 10,486 exactly equal |
| Indexed URL coverage | Identical 10,526 URLs; no duplicate feed records |
| X identities | 56 distinct posts; author totals 4, 28 and 24 |

Indexed X heading text, human-readable status text, and the new author filter intentionally differ. Pagefind's four preexisting bare-page warnings remain unchanged. Collection-based search counts do not claim post counts.

## Browser acceptance

Chrome exercised real generated pages and Pagefind, with these successful checks:

- `/x/` pagination yields 20, 20 and 16 cards; each author feed contains only that author.
- Keyboard Enter expands a long card. Its expanded text equals the saved original at the linked `#x-post-ID` anchor.
- At 390px width there is no horizontal overflow; light and dark screenshots were inspected. The shared search header now wraps into a usable full-width row on narrow screens.
- `q=Futu&author=858124064476479488` matches the September 18 Herman collection and links to `#x-post-heading-2100851823469088807`, the second post, using actual Pagefind sub-results.
- X author wins over a simultaneous legacy speaker parameter; URL normalization removes the unused speaker. Author labels failing to load fall back to usable stable IDs.
- Legacy `q`, `exact=1`, and `speaker=一席YiXi` URLs retain selection and behavior after reload.
- Existing search failure tests pass: filter retry, query retry, initial module failure recovery, latest-query-wins, escaped metadata, mark-only excerpts, empty/zero results.
- No browser page errors were observed in the real-index flow.

Focused fixtures cover duplicate canonical locations and conflicts, excluded material and quote targets, unknown dates, renamed and same-name authors, missing observed names, ARTICLE parsing/rendering, unsafe links and hostile literal text. The real snapshot contains no ARTICLE exports, so ARTICLE acceptance is fixture-based.

## Independent review

**Standards:** No blocking documented-standard violation. One optional maintainability observation: context-link construction is compact and could later become a helper; it was retained to avoid unrelated refactoring.

**Spec:** Two confirmed findings were fixed: an unnamed newer record could replace a known author label with its ID; same-name authors could have indistinguishable navigation/filter labels. The parser now retains observed-name missingness and duplicate names gain stable-ID suffixes. The reviewer rechecked both fixes and independently ran the five discovery tests successfully. Incremental standards review also found no blocker.

Initial review compared `6fd86c5...44cb9955a`; fixes were reviewed in the working tree. Before publication, the unpublished task commits were rebased onto remote main to omit the preexisting local content-gitlink commit. Site-code diff equality before/after rebase was verified.

## Evidence and limits

Local evidence: `.native-build/x-discovery-evidence/` contains comparison/browser scripts, JSON outcomes, actual Pagefind match data and screenshots. Final output: `.native-build/run-Q8yCCr/public`; baseline output: `/tmp/tf-x-discovery-base-PYjt8s/public-pinned`. These generated paths are not committed.

This is local full-corpus and browser acceptance, not production deployment acceptance or a remote performance benchmark. No provider calls, media downloads, embeddings, thread reconstruction, or content changes were introduced. Merge and deployment remain separate actions.
