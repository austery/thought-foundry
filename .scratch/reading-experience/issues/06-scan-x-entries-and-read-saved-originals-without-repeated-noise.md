# 06 — Scan X entries and read saved originals without repeated noise

**Status:** ready-for-agent

**Blocked by:** 02.

Deliver the same 700px reading measure for X, with denser entry rhythm and clear
distinctions between preview, saved original, and outbound source.

- [ ] Use 17px/1.8 text, fine separators, and a 108px source/time rail where it fits;
  ensure usable mobile reflow without horizontal overflow.
- [ ] Use semantic time elements instead of timestamp headings while preserving
  both existing saved-post anchor formats and search-result navigation.
- [ ] Show shared verification/media/context caveats once per page; show per-entry
  deviations accurately, including mixed-status and unknown-status entries.
- [ ] Preserve Toronto-time wording, saved-record details, literal text, and links.
- [ ] Reproduce the alleged blank preview against real or representative content
  before claiming its cause; the current producer already computes previews.
- [ ] Proposed list behavior: three-line preview linked to the complete saved
  original, with no second expand-in-list interaction. Confirm this design
  choice before implementation; never truncate the canonical saved original.


