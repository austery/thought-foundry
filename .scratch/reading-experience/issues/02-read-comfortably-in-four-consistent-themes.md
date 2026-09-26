# 02 — Read comfortably in four consistent themes

**Status:** ready-for-agent

**Blocked by:** 01.

Deliver Paper Light/Dark and Steel Light/Dark with the supplied semantic colors,
readable mixed-language typography, and a stable reading measure.

- [ ] Implement the complete token matrix, accessible theme selection, persistence,
  migration from stored light/dark values, and safe storage-unavailable behavior.
- [ ] Match 700px desktop / 680px tablet reading measure and 20px mobile margins;
  use 19px/1.98 desktop and 18px/2 mobile text via rem-based sizes.
- [ ] Match heading, paragraph, and chapter spacing; remove heading rules, colored
  bold emphasis, whole-paragraph English italics, and negative bilingual margins.
- [ ] Apply Latin size adjustment, tabular numerals, progressive autospace, and
  wrapping without changing content bytes or search text.
- [ ] Preserve the two-row static mobile header; use the supplied Lucide geometry
  with 1.5 stroke width and accessible control names for functional icons.
- [ ] Verify four themes, responsive boundaries, horizontal overflow, and no-JS
  reading. Resolve the desktop geometry conflict below before implementation.


