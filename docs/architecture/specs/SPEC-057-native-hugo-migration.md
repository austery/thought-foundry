---
specId: SPEC-057
title: Native Hugo Migration
status: Native Candidate Validated
priority: P1 - Core Feature
creationDate: 2026-09-12
lastUpdateDate: 2026-09-12
owner: User (AI-Assisted)
relatedSpecs: [SPEC-050, SPEC-051, SPEC-056, ADR-001]
tags: [hugo, migration, compatibility, pagefind]
---

# SPEC-057: Native Hugo Migration

## 1. Goal

Reduce build cost and remove the legacy rendering stack while preserving Thought Foundry's reading, navigation, content ownership, and public URL contracts.

## 2. Background

The retained comparison branch `codex/hugo-build-comparison` is at `a5ea99693335f475db2a69f8ee99098146f8be99`. Its report records seven paired remote measurements and 56–66% comparable-build savings for Hugo plus an adapter, including full Pagefind indexing and excluding publication. These measurements do not establish native implementation performance. Pagefind remains the dominant candidate cost.

The experiment retains Nunjucks rendering and one MarkdownIt body fallback. It reports 522–524 navigation sequence differences with unchanged per-page membership, one Unicode autolink display difference, and two Pagefind punctuation differences. Its comparison gate remains historically unmet; this spec defines the separately approved migration policy rather than rewriting that result.

The September 12 handoff selects native Hugo and preserves the existing appearance. The current discussion accepts deterministic equal-date ordering, limited TypeScript compatibility tooling, and inspected presentation-only exceptions. See [decision record](../hugo-migration-discussion.md).

## 3. Design Decision

**Chosen approach:** Hugo renders all page templates and Markdown bodies; typed Node tools may adapt metadata, pinyin, and exact legacy URL paths in generated staging/output.

- Remove Nunjucks, Eleventy collection execution, and MarkdownIt body rendering from the candidate build path. Retained experiment and baseline tooling may still use them for comparison.
- Keep CSS, browser JavaScript, and full-text Pagefind where their contracts remain compatible. Search redesign and visual redesign are outside this migration.
- Keep the content source byte-for-byte unchanged. Generated adapters must not rewrite original Markdown, alter publication scope, or require a fresh Eleventy render.
- Preserve notes, posts, books, clippings, standalone pages, taxonomy membership, tag thresholds, speaker/guest handling, entity-to-search links, and series behavior based on an inspected baseline manifest.
- Preserve existing date semantics. Order reverse-chronological article lists by descending date, then exact public URL in ascending ordinal order before pagination. Series-related articles retain their explicit ascending date order, with the same URL tie-breaker. Do not use filesystem enumeration or locale-dependent collation for article ties. Taxonomy directories retain their existing display-name ordering.
- Preserve public paths and link targets, including unusual case, punctuation, Unicode, and colon-bearing paths. Reproduce exceptional inputs before choosing a native or path-normalization solution.
- Preserve direct output for `exclude: true` while excluding it from listings and search. Preserve internal-tag hiding on ordinary posts and existing draft behavior. Book pages retain their legacy all-tag links, including internal and low-frequency tags; document this existing inconsistency rather than silently unifying the templates. Inventory missing layouts and scalar metadata as source conditions; do not silently repair them or expand search inclusion. Compare link multisets because legacy repeated tags/projects can produce repeated article membership.
- Permit an enumerated presentation-only difference only after evidence shows unchanged meaning, targets, coverage, and search usability. Record baseline, candidate, reason, evidence, and disposition. Escalate semantic or functional changes instead of labeling them cosmetic.

| Alternative | Disposition |
| --- | --- |
| Permanent Nunjucks compatibility renderer | Rejected: retains the template stack the user wants to replace |
| Eliminate all Node tooling | Not required: small typed compatibility tools are explicitly accepted |
| Rewrite source Markdown or merge with Lucid Blog | Excluded: violates content ownership and site boundaries |
| Change search scope or hosting while measuring generator benefit | Deferred: changes workload and release risk |

## 4. Implementation Phases

### Phase 1: Freeze baseline and reproduce exceptional inputs

- [x] Create a separate task-owned branch/worktree; leave the comparison worktree intact. Inspect current main and experiment changes before selecting the implementation base.
- [x] Pin baseline code, candidate code, full content commit, dependencies, and tools for reproducible comparisons.
- [x] Capture complete source-to-URL, output, index, navigation, and source-fingerprint manifests.
- [x] Reproduce equal-date ordering, unusual URLs, legacy Markdown/Liquid input, the body-rendering exception, exclusions, and metadata edge cases with fixtures and full-corpus probes. Verify existing taxonomy-directory pagination in the complete output comparison; article lists themselves are unpaginated.

**Acceptance:** baseline behavior is inspectable and exceptional cases are reproducible without changing original content.

### Phase 2: Implement the native candidate and local preview

- [x] Implement Hugo layouts, collections/taxonomy data, routing, and limited typed compatibility tooling.
- [x] Resolve body-rendering exceptions within the Hugo ownership boundary; inventory any proposed presentation differences.
- [x] Build into isolated output and serve a local preview. Preserve existing deployment behavior throughout this phase.
- [x] Validate complete URL/index coverage and deterministic navigation. Exercise positive and negative Chinese search, theme persistence, ToC, folding, books, long articles, tables, and code at 390, 820, and 1440 pixels.

**Acceptance:** all functional compatibility checks pass; remaining presentation differences have explicit evidence and disposition. No second body renderer is required.

### Phase 3: Full remote validation and review

- [x] Use a branch-isolated, read-only comparison workflow without production secrets, cache keys, deployment concurrency groups, or publishing steps.
- [x] Repeat three cold and three warm sequential pairs on identical content per pair, alternating engine order, plus one added-article full rebuild in staged input.
- [x] Count all required adaptation, rendering, output normalization, and full indexing in comparable build time; separately report setup, priming, validation, packaging, failures, memory, and output size.
- [x] Propose retaining SPEC-056's performance target: warm median savings of at least 30% and 120 seconds against the pinned Eleventy baseline. Investigate overlapping timing ranges or inconsistent savings; report an unmet target without claiming readiness.
- [x] Review isolation, migration correctness, and acceptance logic independently from implementation; fix findings and update operating documentation.
- [x] Verify preview artifact contents and actual availability if artifacts are offered. Correct the inherited downloadable-preview claim in follow-up documentation while preserving the experiment checkpoint.

**Acceptance:** reproducible native performance and compatibility evidence exists; review findings are resolved. Local success alone does not establish remote or production acceptance.

### Phase 4: Prepare release for separate approval

- [ ] Identify the exact preview hosting target, URL/base-path behavior, deployment credentials, and publication scope before proposing a hosted preview.
- [x] Prepare production cutover and rollback commands around identified code/content/output revisions. Retain a known-good old output and coordinate the hourly publisher so it cannot overwrite a cutover unexpectedly.
- [x] Specify hosted-preview acceptance, final content freshness checks, post-cutover smoke checks, and rollback triggers.

**Acceptance:** the proposed hosted preview and production release are concrete and reviewable. This draft authorizes neither hosting changes nor production publication; those actions need separate user authorization. A preview hostname is not a prerequisite for local implementation.

## 5. Acceptance Criteria

- [x] User confirms the consolidated implementation scope.
- [x] Hugo owns every candidate page template and body render; typed compatibility tools remain bounded as described.
- [x] Complete output URLs and indexed URLs match the frozen baseline; original content fingerprints remain unchanged.
- [x] Navigation membership is preserved, equal-date ordering is reproducible, and pagination introduces no omissions or duplicates.
- [x] Body meaning, links, headings/anchors, images, metadata, exclusions, and search behavior pass full inventories and focused public-behavior checks.
- [x] Presentation-only exceptions are enumerated and inspected; no semantic or functional regression is silently waived.
- [x] Representative browser checks pass at all three widths; existing defects are distinguished from candidate regressions.
- [x] Remote comparable-build results include all required stages and meet the approved performance target, or explicitly block migration readiness.
- [x] Independent review is complete and the cutover/rollback proposal identifies actual targets and revisions.

## 6. Status History

| Date | Status | Note |
| --- | --- | --- |
| 2026-09-12 | Draft | Consolidates three accepted decisions; implementation scope and proposed performance target await confirmation |
| 2026-09-12 | Ready for Implementation | User approved the complete scope and performance target; independent contract review clarified existing series and book-tag behavior |
| 2026-09-12 | Native Candidate Validated | Seven remote pairs passed at 3f5b5eb22; warm engine medians improved by 459.38 seconds / 64.33%; production and hosted preview remain separately gated |

## 7. Related

- [Migration discussion](../hugo-migration-discussion.md).
- [Content repository separation](SPEC-050-content-repo-separation.md).
- [Entity static page removal](SPEC-051-remove-entity-static-pages.md).
- Experiment branch: `docs/architecture/specs/SPEC-056-hugo-remote-build-comparison.md`, `docs/experiments/hugo-comparison/results.md`, and `differences.md` at the retained checkpoint.
- Existing implementation: `.eleventy.js`, `src/_includes/`, `src/*.njk`, `package.json`, and `.github/workflows/deploy.yml`.

Implementation evidence: [native validation](../../experiments/native-hugo/validation.md) and [release proposal](../../experiments/native-hugo/release-plan.md).
