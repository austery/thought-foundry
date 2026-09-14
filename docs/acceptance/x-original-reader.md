# X original reader integration

## Contract and scope

Recognize PureSubs `x_source: x` exports at the reader boundary. Preserve source
Markdown bytes and existing public paths. Daily collections (`daily-literal-v1`)
render one anchored card per post; standalone POST/ARTICLE
(`original-literal-v1`) render one original. This does not generate summaries,
change ingestion, publish content, or enable subscriptions.

Use the existing header, navigation, theme, homepage and Pagefind. Derive display
titles from author and collection/original date, retaining unknown dates as
unknown. Display original text literally, not as executable HTML. Keep source,
original time, save time, checks, media/context status and known gaps visible.
Decode only the producer's escaped literal fields; YAML author metadata remains
unchanged. Convert relative saved Markdown links into public X reading routes;
external sources remain HTTP(S) links. Unsupported export contracts fail the
build rather than silently dropping into the generic article renderer.

Non-X layout, exclusion, URL, date and taxonomy behavior remain unchanged.
Explicit unsupported layouts remain errors, including for X documents.
Author-specific browsing and subscription configuration are separate work.

## Local acceptance — 2026-09-13

- Baseline site commit: `e90912f9f`.
- Fixed content submodule: `b1ad569c14c893e7d1d98f99ae4458131ac710a3`.
- Both builds include the same additional real TJ daily export in a private
  staged source tree, not in this code commit. Its SHA-256 is
  `c56db5456733de6086c9535eedc55b4919baec691c890087efc2f8922d776762`.
- Node 22.19.0, pinned pnpm dependencies and Hugo extended 0.165.0.
- Type check and 14 native tests pass, including real Hugo rendering, literal
  HTML safety, excluded pages, standalone attribution and relative links.
- Full Hugo/URL restoration: baseline and candidate each have 12,135 HTML
  routes; no added/removed routes. Exactly two HTML files differ: homepage and
  the TJ X page. All other HTML files are byte-identical.
- All four real saved originals match rendered body, source URL and original
  publication time exactly. No provider calls or production writes were made.
- Edge: actual author search finds the collection; desktop dark theme and
  390px light theme are readable, with no horizontal overflow. Existing source
  and quote links retain their targets. This is local browser acceptance,
  not public deployment acceptance.
- Independent standards/spec reviews found an author-name double-decoding issue
  and unsupported-layout bypass. Both were corrected; attribution regression
  passes. The X wrapper also uses a div inside the site's existing main landmark.

Private full-build evidence is under `/tmp/tf-x-acceptance/` on the execution
host. Source records stay in PureSubs' private verification directory. These
paths are local evidence, not durable CI artifacts.

## Release boundary

This site-code PR must be reviewed and merged before publishing the approved TJ
Markdown to the separate content repository. The site deployment already reads
that repository on its schedule. No content submodule, production database,
provider budget or deployment setting is changed here. After site merge and
content publication, verify the public page and search result independently.

## Copilot feedback follow-up

Reviewed all three inline comments and two suppressed comments on `669e24513`.
Accepted the fake unknown-date timestamp, misleading layout diagnostic, index
link normalization and impossible-day validation findings. Unknown X dates now
have an empty sort key (after known dates in descending lists), no datetime
attribute, and no invented page-context timestamp.

The producer already entity-escapes braces, so a failure from conforming current
exports was not established. Nevertheless, the reader accepted raw braces and
unnecessarily ran legacy template preprocessing on an unused body. X pages now
bypass both Liquid and shortcode preprocessing entirely. A real-Hugo regression
covers malformed raw Liquid syntax while preserving its literal output.

Type check and all 15 tests pass, covering the above boundaries. No production
capture, content publication or merge is included in this follow-up.
The fixed-content full Hugo/URL-restoration rebuild produced 12,135 HTML files,
all byte-identical to the pre-feedback candidate for this corpus. Pagefind was
not rerun because its rendered HTML input is unchanged; boundary changes are
covered by the expanded synthetic integration fixture.
