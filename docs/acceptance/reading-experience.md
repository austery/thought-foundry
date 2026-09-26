# Reading experience acceptance

Date: 2026-09-26. Scope: the eight local tickets in
[the approved breakdown](../../.scratch/reading-experience/proposal.md), with
[the approval record](../../.scratch/reading-experience/approval.md).

## Decisions

- Keep the 993px desktop transition, a 700px article, a 56px gap and a 220px
  chapter column. Outer margins shrink between 993px and 1179px; the handoff's
  width arithmetic cannot simultaneously preserve its stated outer margins.
- Use 600-weight emphasis, Paper serif headings, Steel sans headings, and system
  CJK body fallbacks. Three-line X previews link to complete saved originals.
- Hugo remains the only Markdown renderer. The existing TypeScript restoration
  step derives navigation from the rendered article fragment. Hugo's Markdown
  heading tree does not describe raw HTML headings or headings inside source
  disclosures reliably: 55 real articles had different counts in the initial
  implementation. Both static and interactive navigation now share the same
  marked H2/H3 set outside disclosures. Cheerio, already pinned for tests, is a
  runtime dependency for this operation.
- Parse only the article fragment, preserving code-block whitespace and
  separating malformed source disclosures from reader tools and page chrome.
  No article content was edited. Existing source H1s remain source content.
- Markdown exports use SHA-256 of the source-relative path, so inserting another
  article cannot redirect an existing download to a different article.
- Source identity merging, search grouping, homepage redesign, and rewriting
  article headings remain outside this change.

## Ticket acceptance

| Ticket | Delivered behavior | Evidence |
| --- | --- | --- |
| 01 | Consolidated container/content/TOC style ownership, repaired metadata, scoped transitions, current-year footer | CSS ownership review; desktop/mobile screenshots; reduced-motion browser check |
| 02 | Four persisted themes, legacy preference migration, mixed typography and responsive reading measure | Eight widths; all four backgrounds; unavailable storage and system preference checks; 200% text; no-JS reading |
| 03 | Shared build-time and interactive outline, nested chapters, stable overlay geometry, focus and scroll behavior | `reading.test.ts`; real 7-section article; browser open/close, Escape, outside click, anchor, contained panel scroll and original expansion |
| 04 | Single header and metadata plate, header tags, sparse fields omitted, ISO display dates | `reading-experience.test.ts`; rendered screenshots; machine metadata retained |
| 05 | Full source Markdown copy/download, clipboard and fetch failure states, qualified original controls | Exact export-byte comparison for every post; stable-URL integration test; browser success and both failure modes |
| 06 | Dense X layout, non-heading times, shared status plus deviations, previews and canonical originals | `x-reader-render.test.ts`; all 40 saved X reading documents compared for literal text |
| 07 | Latest Toronto day at `/x/`, date/source/long filters, legacy archive and unknown dates retained | Toronto boundary/DST and 23-entry day fixture, including a long item beyond the former 20-item page; browser date/source/long checks |
| 08 | Unified source directory with separate X identities and counts, shared text filtering | Integration coverage, browser X links and text filtering; input-event fix includes pasted text |

The reported blank X preview was not reproduced as missing producer data.
Existing preview generation already passes its public-behavior tests. The final
rendering explicitly provides a three-line preview and a complete saved-original
link; no speculative producer repair was made.

## Validation

Toolchain: Node 22.19.0, pnpm 10.14.0, Hugo extended 0.165.0.
`pnpm check`, all 31 tests in `pnpm test`, and the full `pnpm build` passed.
The suite invokes real Hugo and covers preparation, rendering, search contracts,
release safety, source identity, navigation, and exports.

Fixed input: content commit `adf91fd2c9296d5d1d941291b96b55ee81d43a25`.
The content checkout remained clean; the root checkout's pre-existing gitlink
change was deliberately excluded from this task's commits.

Baseline: `cd6fd629e`, build `.native-build/run-EIj1f6/public`.
Corpus comparison: `.native-build/run-iQ2U4s/public`.
Final build: `.native-build/run-guuzFF/public`; the only subsequent production
change is the shared list filter event (`keyup` to `input`). The final build
and full test suite were rerun after that change.

- All 12,618 original routes remain. The candidate has 12,648 routes: 29 day
  views and the historical archive are additive.
- Preparation metadata for all 10,533 article records is deeply equal to the
  baseline, including sorting, taxonomy, visibility, and original metadata.
- All 10,486 post exports are byte-equal to their source Markdown.
- Compared normalized article body text excluding disclosure-control labels;
  all matched except the exact malformed-source correction below. All 40 X
  saved-original texts matched exactly.
- Pagefind body/meta/filter element counts remain equal per article. The full
  build indexes 10,526 pages and two filters, as before. Its unique-word count
  is 227,030 versus 227,031 in the baseline; rendered control labels changed,
  so index-byte equality is not asserted.
- A real browser search for `Harari` returned 23 matching articles; the first
  result resolved successfully. Saved-original and source navigation were also
  exercised. This is a search smoke check, not exhaustive ranking equivalence.

One deliberate rendering correction: `/content/notes/K59Kf7mjkiA/` ends with an
incomplete literal `</` in its source. The old document parser consumed these
characters at the next template boundary. Fragment isolation retains those two
characters and keeps subsequent entity metadata outside the original disclosure.
The source and downloadable Markdown are unchanged.

Chrome acceptance used 390, 768, 769, 820, 992, 993, 1180 and 1440px. There was
no horizontal overflow; article widths were respectively 350, 680, 680, 680,
680, 700, 700 and 700px. Headers measured 100.5px on mobile (two rows), 52px on
tablet, and 56px on desktop. Opening/closing the chapter panel preserved both
window scroll position and body geometry. Focus returned on close; scrolling
alone did not open the panel. No page script errors occurred in the main run.

Browser checks blocked external font requests deliberately to exercise local
fallbacks. Remote font availability and other browser engines were not tested.
200% text and reduced motion were exercised in Chrome. The native source
controls and in-article outline remained usable with JavaScript disabled.

Local logs, comparison scripts and screenshots are retained under
`.local-evidence/reading-experience/` (ignored, machine-local evidence).
Standards and specification reviewers independently cleared the implementation
and its final export/disclosure/date corrections. No merge or deployment is
part of this acceptance.
