# 01 — Establish predictable reading styles

**Status:** implemented and validated

**Blocked by:** none.

Deliver one owner for each reading container, article-content, and TOC style,
so subsequent reader changes apply consistently to the actual rendered page.

- [x] Repair malformed metadata CSS and replace unresolved Pico variables with
  existing theme semantics; retain metadata and related-series behavior.
- [x] Consolidate competing rules and remove unused reader-button styling, without
  removing controls that are actually rendered.
- [x] Scope transitions to relevant elements, honor reduced motion, and put paper
  texture behind the reading surface.
- [x] Show the current year in the footer.
- [x] Compare representative article, list, metadata, and related-series views.
  Document intentional visual corrections: repairing broken CSS cannot honestly
  promise zero visual change.



Acceptance evidence and documented limits: [reading experience acceptance](../../../docs/acceptance/reading-experience.md).
