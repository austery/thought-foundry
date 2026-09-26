# 05 — Copy or download an article and inspect its original language

**Status:** implemented and validated

**Blocked by:** 04.

Deliver usable end-of-article reader tools with correct conditional disclosure.

- [x] Provide copy-full-text and Markdown download with a stable accessible name,
  success/failure feedback, and meaningful behavior if clipboard access fails.
- [x] Preserve source Markdown and provenance in the download; do not reconstruct
  Markdown from rendered HTML or include unrelated navigation text.
- [x] Keep original-language disclosure collapsed initially and label its language.
  Render no original-language control for confirmed Chinese-only material.
- [x] Detect original disclosures from reliable existing data/content, never from
  title text or every generic details element. Define a conservative fallback
  for unknown language that does not discard existing material.
- [x] Place expand-all in the end tools area; hide it when there are no qualifying
  originals. Never expand entity or chapter-outline disclosures by accident.
- [x] Excluded pages retain their search exclusion when adding export artifacts.
- [x] Verify Chinese-only, bilingual, missing-language, no-original, clipboard-denied,
  and download cases; opening an original must not disturb TOC selection.



Acceptance evidence and documented limits: [reading experience acceptance](../../../docs/acceptance/reading-experience.md).
