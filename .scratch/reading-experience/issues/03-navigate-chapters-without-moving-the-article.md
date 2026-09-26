# 03 — Navigate chapters without moving the article

**Status:** implemented and validated

**Blocked by:** 02.

Deliver desktop chapter navigation and a mobile/tablet sticky chapter bar with
a non-modal overlay panel, plus the in-article chapter outline.

- [x] Render chapter navigation only for at least two eligible body headings; exclude
  title, metadata, reader tools, and collection-navigation headings.
- [x] Preserve existing heading IDs; add collision-free IDs only where absent.
- [x] Represent H2/H3 hierarchy with nested ordered lists and corresponding classes;
  articles containing only H3 headings remain usable without content edits.
- [x] Include current section, count, and 2px progress indicator. Scrolling never
  opens or closes the panel. Disclosure expansion alone does not change section.
- [x] Keep the bar at least 44px; overlay panel at most 62vh with contained scrolling.
  Truncate the bar title but wrap full titles in the panel.
- [x] Opening reveals the current section and remaining-section indicators. Support
  outside click, Escape, toggle close, focus entry/return, and 44px touch targets.
- [x] Verify identical window scroll position and article geometry before and after
  opening/closing mid-article; no body scroll lock or height animation.
- [x] Count eligible headings at build time for the article outline: 2–8 expanded,
  more than 8 collapsed. No outline for fewer than two, consistent with the
  explicit no-empty-navigation rule. Collection navigation stays at the end.



Acceptance evidence and documented limits: [reading experience acceptance](../../../docs/acceptance/reading-experience.md).
