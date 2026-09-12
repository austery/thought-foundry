# Native Hugo Migration Discussion

Status: SPEC-057 implementation approved on September 12; deployment remains separately gated.

## Confirmed direction from the September 12 handoff

- Replace legacy page templates and rendering rules with native Hugo while preserving appearance, interactions, public URLs, and content fields.
- Keep the content repository unchanged; use isolated staging and output.
- Keep Lucid Blog separate. Retain the comparison experiment at `a5ea99693335f475db2a69f8ee99098146f8be99`.
- Prepare an isolated preview and an explicit cutover and rollback plan before production switching.

## Accepted navigation ordering change

On September 12, the user accepted preserving date ordering and using a fixed URL tie-breaker for articles with equal dates. Exact legacy insertion order for date ties is no longer a migration acceptance requirement.

The experiment reports 522–524 navigation pages with sequence differences but identical per-page link membership. A stable tie-breaker avoids making legacy input enumeration order a permanent compatibility dependency.

Implementation must define one deterministic URL comparison rule and apply it before pagination. Verify descending date ordering, reproducible equal-date ordering, unchanged membership, and pagination without omissions or duplicates. This acceptance does not waive unrelated ordering, routing, rendering, or search differences.

## Accepted implementation boundary

On September 12, the user confirmed that Hugo owns all page templates and body rendering. Small typed Node tools may remain for metadata adaptation, pinyin handling, and exact URL compatibility. Remove the existing Nunjucks page renderer. Retain Pagefind, CSS, and browser JavaScript as separate responsibilities.

The experiment's exceptional MarkdownIt fallback must be replaced with a solution that respects this rendering boundary. Allowing metadata preprocessing does not authorize retaining a second body renderer. Determine the native solution from a reproduced fixture, preserving the source repository and reviewing any resulting presentation difference.

## Accepted compatibility exception policy

On September 12, the user accepted preserving content meaning, link targets, public URL coverage, and search inclusion while permitting explicitly enumerated presentation-only differences after inspection shows no loss of content or search usability. Examples include equivalent Unicode URL display and punctuation at Pagefind fragment boundaries. This is not a blanket waiver of rendering or indexing regressions; the policy does not establish that any particular implementation has passed inspection.

## Implementation proposal

The consolidated proposal is [SPEC-057](specs/SPEC-057-native-hugo-migration.md). The three decisions above are accepted; the complete SPEC-057 implementation scope was subsequently confirmed by the user.

## Evidence

- Research Notes session: `logs/2026/09/2026-09-12_thought-foundry_native-hugo-migration-direction-and-preview-cutover.md`.
- Comparison branch: `docs/experiments/hugo-comparison/results.md` and `differences.md` at the retained experiment commit.
- The reported 56–66% comparable-build improvement concerns Hugo plus the experimental adapter, includes Pagefind, and excludes publication. It is not a measurement of the future native implementation.
- Handoff documentation debt: downloadable preview availability is disputed by the recorded missing-artifact warning and must be corrected or reverified.
