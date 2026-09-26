# 07 — Browse X by day and filter long entries

**Status:** ready-for-agent

**Blocked by:** 06.

Deliver a latest-available-day default at /x/, with date/source navigation and
a working long-entry filter across the selected day rather than just one page.

- [ ] Use Toronto publication dates consistently, including midnight/DST cases.
  Missing-date material remains reachable and is not assigned an invented date.
- [ ] Preserve existing source/day reading units and all public feed URLs; keep
  historical pagination reachable while introducing date-first discovery.
- [ ] Offer only dates backed by saved material; do not generate empty day pages.
- [ ] Reuse the existing long definition: more than 280 Unicode code points.
  Hide zero long counts; show an honest empty state when filters match nothing.
- [ ] Do not create per-post pages, a new long-content route, or new content fields.
- [ ] Test exclusion, duplicate identities, multiple sources/days, unknown dates,
  filter scope across pagination, and saved-original links.


