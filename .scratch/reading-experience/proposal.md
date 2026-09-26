# Reading experience: proposed ticket breakdown

Status: approved on 2026-09-26; implemented as eight local tickets. See approval.md and docs/acceptance/reading-experience.md for the decision and acceptance records.

## Source and baseline

Source: the supplied `配色结构与色彩职责.zip`, especially its reading-experience
README and the final theme, mobile TOC, unified-layout, and X-reading prototypes.
The HTML prototypes are references, not production code or an instruction to
adopt their presentation framework.

Implementation base: `origin/main` at
`cd6fd629e` (the navigation and homepage changes from PR #14 are merged).
Existing untracked research notes, review material, and content-submodule
changes are outside this task and must be preserved.

No issue-tracker configuration was found. Proposed destination: local tickets,
one approved ticket per file in this directory's `issues/` subdirectory.

## Shared contract

- Keep Hugo rendering, TypeScript preparation, native browser CSS/JS, and Pagefind.
- Preserve source content bytes, existing public paths, exclusions, search scope,
  entity search links, and both saved-X anchor formats.
- Treat AI-assigned type as a label, never a layout selector.
- Preserve provenance claims and distinguish missing evidence from saved content.
- Each implementation ticket includes its own public-behavior validation and
  standards/spec review; acceptance is not deferred to a final testing ticket.
- Rendering or build-input changes require a fixed-content full build and
  search/navigation comparison, in addition to type checks and relevant tests.
- Browser verification covers 390, 768, 769, 820, 992, 993, 1180, and 1440px where
  relevant, plus keyboard navigation, 200% text scaling, and reduced motion.
- Commits, ordinary task-branch pushes, and PR creation are authorized after
  validation and review. Merge and deployment remain separate approvals.

## Proposed tickets

### 01 — Establish predictable reading styles

Blocked by: none.

Deliver one owner for each reading container, article-content, and TOC style,
so subsequent reader changes apply consistently to the actual rendered page.

- Repair malformed metadata CSS and replace unresolved Pico variables with
  existing theme semantics; retain metadata and related-series behavior.
- Consolidate competing rules and remove unused reader-button styling, without
  removing controls that are actually rendered.
- Scope transitions to relevant elements, honor reduced motion, and put paper
  texture behind the reading surface.
- Show the current year in the footer.
- Compare representative article, list, metadata, and related-series views.
  Document intentional visual corrections: repairing broken CSS cannot honestly
  promise zero visual change.

### 02 — Read comfortably in four consistent themes

Blocked by: 01.

Deliver Paper Light/Dark and Steel Light/Dark with the supplied semantic colors,
readable mixed-language typography, and a stable reading measure.

- Implement the complete token matrix, accessible theme selection, persistence,
  migration from stored light/dark values, and safe storage-unavailable behavior.
- Match 700px desktop / 680px tablet reading measure and 20px mobile margins;
  use 19px/1.98 desktop and 18px/2 mobile text via rem-based sizes.
- Match heading, paragraph, and chapter spacing; remove heading rules, colored
  bold emphasis, whole-paragraph English italics, and negative bilingual margins.
- Apply Latin size adjustment, tabular numerals, progressive autospace, and
  wrapping without changing content bytes or search text.
- Preserve the two-row static mobile header; use the supplied Lucide geometry
  with 1.5 stroke width and accessible control names for functional icons.
- Verify four themes, responsive boundaries, horizontal overflow, and no-JS
  reading. Resolve the desktop geometry conflict below before implementation.

### 03 — Navigate chapters without moving the article

Blocked by: 02.

Deliver desktop chapter navigation and a mobile/tablet sticky chapter bar with
a non-modal overlay panel, plus the in-article chapter outline.

- Render chapter navigation only for at least two eligible body headings; exclude
  title, metadata, reader tools, and collection-navigation headings.
- Preserve existing heading IDs; add collision-free IDs only where absent.
- Represent H2/H3 hierarchy with nested ordered lists and corresponding classes;
  articles containing only H3 headings remain usable without content edits.
- Include current section, count, and 2px progress indicator. Scrolling never
  opens or closes the panel. Disclosure expansion alone does not change section.
- Keep the bar at least 44px; overlay panel at most 62vh with contained scrolling.
  Truncate the bar title but wrap full titles in the panel.
- Opening reveals the current section and remaining-section indicators. Support
  outside click, Escape, toggle close, focus entry/return, and 44px touch targets.
- Verify identical window scroll position and article geometry before and after
  opening/closing mid-article; no body scroll lock or height animation.
- Count eligible headings at build time for the article outline: 2–8 expanded,
  more than 8 collapsed. No outline for fewer than two, consistent with the
  explicit no-empty-navigation rule. Collection navigation stays at the end.

### 04 — See article context once, before reading

Blocked by: 02.

Deliver one consistent article header and a restrained summary/provenance plate.

- Show the type kicker, title, and header tags without type-specific templates.
- Combine summary and insight in one plate with fine dividers and semantic labels;
  omit absent fields and empty containers.
- Display provenance fields once with quiet key/value typography, keeping
  distinct source, guest, channel, original-link, and publication information.
- Move tags to the header and visibly distinguish linked tags from inert pills.
- Normalize displayed dates to YYYY-MM-DD while retaining original metadata,
  sorting behavior, and machine-readable search values.
- Verify sparse/full metadata, excluded articles, linked/inert tags, entity
  search destinations, and unchanged Pagefind field coverage.

### 05 — Copy or download an article and inspect its original language

Blocked by: 04.

Deliver usable end-of-article reader tools with correct conditional disclosure.

- Provide copy-full-text and Markdown download with a stable accessible name,
  success/failure feedback, and meaningful behavior if clipboard access fails.
- Preserve source Markdown and provenance in the download; do not reconstruct
  Markdown from rendered HTML or include unrelated navigation text.
- Keep original-language disclosure collapsed initially and label its language.
  Render no original-language control for confirmed Chinese-only material.
- Detect original disclosures from reliable existing data/content, never from
  title text or every generic details element. Define a conservative fallback
  for unknown language that does not discard existing material.
- Place expand-all in the end tools area; hide it when there are no qualifying
  originals. Never expand entity or chapter-outline disclosures by accident.
- Excluded pages retain their search exclusion when adding export artifacts.
- Verify Chinese-only, bilingual, missing-language, no-original, clipboard-denied,
  and download cases; opening an original must not disturb TOC selection.

### 06 — Scan X entries and read saved originals without repeated noise

Blocked by: 02.

Deliver the same 700px reading measure for X, with denser entry rhythm and clear
distinctions between preview, saved original, and outbound source.

- Use 17px/1.8 text, fine separators, and a 108px source/time rail where it fits;
  ensure usable mobile reflow without horizontal overflow.
- Use semantic time elements instead of timestamp headings while preserving
  both existing saved-post anchor formats and search-result navigation.
- Show shared verification/media/context caveats once per page; show per-entry
  deviations accurately, including mixed-status and unknown-status entries.
- Preserve Toronto-time wording, saved-record details, literal text, and links.
- Reproduce the alleged blank preview against real or representative content
  before claiming its cause; the current producer already computes previews.
- Proposed list behavior: three-line preview linked to the complete saved
  original, with no second expand-in-list interaction. Confirm this design
  choice before implementation; never truncate the canonical saved original.

### 07 — Browse X by day and filter long entries

Blocked by: 06.

Deliver a latest-available-day default at /x/, with date/source navigation and
a working long-entry filter across the selected day rather than just one page.

- Use Toronto publication dates consistently, including midnight/DST cases.
  Missing-date material remains reachable and is not assigned an invented date.
- Preserve existing source/day reading units and all public feed URLs; keep
  historical pagination reachable while introducing date-first discovery.
- Offer only dates backed by saved material; do not generate empty day pages.
- Reuse the existing long definition: more than 280 Unicode code points.
  Hide zero long counts; show an honest empty state when filters match nothing.
- Do not create per-post pages, a new long-content route, or new content fields.
- Test exclusion, duplicate identities, multiple sources/days, unknown dates,
  filter scope across pagination, and saved-original links.

### 08 — Discover video, podcast, and X sources in one directory

Blocked by: none.

Deliver a source directory that exposes both existing source families with
counts and uses consistent reader-facing source terminology.

- Include existing video/podcast sources and X sources with clearly defined
  counts and working text filtering; preserve their current destinations.
- Replace reader-facing author/blogger/speaker synonyms in relevant X navigation
  with source, without rewriting saved original text or internal identity fields.
- Do not infer that equal names identify the same person or merge URL identities.
- Verify duplicate display names, excluded material, empty source families, and
  links from the directory to each existing source listing.

## Decisions and corrections requiring approval

1. Geometry: 700 + 56 + 220 + 2 × 102 = 1180px, and the purported 1440px
   five-track diagram actually totals 1180px. Proposed interpretation: keep
   the 993px TOC transition and the three fixed inner tracks (976px total),
   allowing outer margins to shrink below 102px between 993 and 1179px.
   Alternative: retain comfortable outer margins and defer the desktop TOC
   transition until it fits. Do not silently compress the article or overflow.
2. Typography: retain the explicit prose rule of 600-weight bold throughout;
   the Paper token matrix's 700-weight value conflicts with that rule.
   Retain Paper serif headings, Steel sans headings, and system CJK body fonts.
3. X preview: choose three-line linked previews, as recommended in the unresolved
   decisions, rather than simultaneously implementing expandable list entries.
4. Chinese originals: follow the handoff's default of no original-language
   control for confirmed Chinese sources; do not introduce transcript retrieval.
5. Tracker: use local tickets unless an existing tracker configuration is supplied.

## Explicit follow-up scope

Source identity/URL unification across speakers and X requires a separate content
model assessment. Grouped search results, new fonts, content heading rewrites,
homepage redesign, taxonomy changes, and framework migration are not included.

## Delivery sequence

Start with 01 or 08. After 01, complete 02. Then 03, 04, and 06 are independently
unblocked; 05 follows 04, and 07 follows 06. These are logical dependencies, not
permission to spawn implementation agents. Prefer reviewable ticket-sized PRs;
unmerged prerequisites may require stacked branches with explicit bases.

Toolchain preflight found Node 26 and Hugo 0.166 on PATH; Node 22.19 is locally
available. Validation must use the project's pinned Node 22.19 / pnpm 10.14 /
Hugo extended 0.165 toolchain. No implementation or validation has run yet.
