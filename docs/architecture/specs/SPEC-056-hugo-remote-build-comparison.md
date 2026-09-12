---
specId: SPEC-056
title: Hugo Remote Build Comparison
status: Ready for Implementation
priority: P1 - Core Feature
creationDate: 2026-09-11
lastUpdateDate: 2026-09-11
owner: User (AI-Assisted)
relatedSpecs: [ADR-001, SPEC-050, SPEC-051, SPEC-052, SPEC-054]
tags: [hugo, eleventy, performance, github-actions, migration]
---

# SPEC-056: Hugo Remote Build Comparison

## 1. Goal

Determine whether Hugo materially reduces remote build time for the complete Thought Foundry corpus while preserving the site's reading, navigation, URL, and search behavior.

## 2. Background and Evidence

The September 11 discussion in the separate Lucid Blog session reported six successful production runs lasting 12m35s–14m54s. Two inspected runs reported Eleventy at 5m12s–5m52s, Pagefind at 3m38s–5m54s, and publication at 2m03s–2m18s. These are prior observations, not results of this experiment:

- https://github.com/austery/thought-foundry/actions/runs/34663247921
- https://github.com/austery/thought-foundry/actions/runs/34656355682

At drafting, site HEAD is `d98141a823ff4ef1a67bb114d3e263b8f19ad989`; the local content checkout is `5a0954c7347e772dacab8e87226de75e1daff0a9`. Neither is implicitly the production content snapshot. `.github/workflows/deploy.yml` clones the current content branch on every run, runs Eleventy and Pagefind together through `package.json`, and pushes `_site` to `austery/austery.github.io`.

ADR-001 retained Eleventy based on earlier performance and migration-cost estimates. This experiment reopens evaluation; it does not supersede the production decision. SPEC-052 remains a draft and is not a dependency. Lucid Blog remains a separate personal-writing site; its content publication rules and simplified navigation are not imported here.

## 3. Proposed Design

Build a reusable Hugo candidate alongside the existing implementation in an isolated worktree. Add a separate comparison workflow that produces downloadable evidence without deploying a website.

| Option | Decision and reason |
| --- | --- |
| Hugo with the current full-text Pagefind scope and hosting | Evaluate first; isolates generator benefit |
| Hugo plus metadata-only search or a new theme | Defer; changes the workload and acceptance surface |
| Cloudflare or direct GitHub Pages artifact deployment | Evaluate separately after the build comparison |
| Immediate replacement of the production workflow | Excluded; no compatibility or speed evidence yet |

Keep Node for typed build adapters and verification where needed. Adapt content in a generated staging directory, without rewriting the content repository. Resolve legacy URLs and taxonomy behavior explicitly rather than relying on Hugo defaults. Any adapter, URL-manifest preparation, or metadata processing required for an independent Hugo build counts toward candidate build time; Hugo must not require a fresh Eleventy render on every build.

### Measurement contract

- Resolve one full content commit SHA once per experiment and use it for both engines. Record code SHA, content SHA, lockfile hash, exact Hugo/Pagefind/Node/pnpm versions, runner image version, CPU, and memory.
- Run paired builds sequentially on the same hosted runner instance within each pair, with clean output directories. Use three pairs per cache mode and alternate engine order to reduce ordering bias. Runner instances across pairs are comparable, not identical hardware guarantees.
- Report cold build-cache and warm build-cache modes separately. Warm mode uses an explicit untimed priming build for each engine; priming time is still disclosed. Do not restore or update production cache keys. Dependency setup is measured independently.
- Preserve the same Pagefind version, language settings, indexed content scope, and assets for the primary comparison. Indexes are rebuilt in both modes; no unverified incremental-search assumption.
- Time content acquisition, dependency/tool setup, candidate adaptation, generator, Pagefind, packaging, and artifact upload separately. Capture elapsed seconds, exit status, peak memory where available, output bytes, HTML count, and indexed URL count.
- Report every attempt, medians, and ranges. Failed attempts remain visible and never count as speed improvements. Queue time and experiment validation overhead are separate from build time.
- Define comparable build time as adapter/preprocessing + generator + Pagefind. Shared acquisition/setup costs and artifact upload are reported alongside it. No claim of end-to-end publication improvement follows from this non-deploying experiment.
- After full-build comparison, repeat with one reproducible added-article fixture applied identically in temporary copies. Treat this as a full CI rebuild after one addition unless incremental behavior is independently demonstrated. Never push the fixture into the content repository.

### Production isolation

Repository topology: use the existing public `austery/thought-foundry` repository and task branch `codex/hugo-build-comparison`. Both the site and content repositories were verified public with default branch `main`. A separate public experiment repository is permitted by the user if needed, but adds no required capability for this experiment and is not currently planned.

The first remote push containing the comparison workflow triggers only its task-branch build. Do not manually dispatch `deploy.yml`. Subsequent pushes rerun the experiment; unchanged commits can be rerun through Actions. Checkout the task commit for the candidate, the pinned baseline site commit into a separate directory, and the same pinned public content SHA for both via HTTPS. Disable automatic submodule checkout so the SSH submodule URL requires no key. Stage source copies without modifying the content checkout, and verify its tracked-file hashes before and after the build. Preserve source files byte-for-byte; layout, draft, aliases, URL, and exclusion compatibility belongs to build configuration or generated staging data.

The workflow uploads separate baseline/candidate preview artifacts plus measurements and differences. Artifacts do not create a hosted preview URL. Hosting a preview, if later needed, is a separate explicit step. The current production workflow's push trigger is restricted to `main`, so pushing this task branch does not trigger that production path. Merging workflow/code changes to `main` can trigger production and remains subject to explicit approval.

- New workflow and concurrency group; leave `deploy.yml`, its triggers, and `pages-deployment` untouched.
- Use `contents: read`, disable persisted checkout credentials, and supply no deployment secrets, environment, Pages write permission, or external-repository push step.
- Support task-branch testing through a branch-scoped push trigger. `workflow_dispatch` becomes the normal entry point after the workflow exists on the default branch; do not assume a new branch-only workflow can already be dispatched.
- Upload reports and appropriately scoped preview artifacts with explicit short retention. Preserve the current exclusion behavior; `exclude: true` is not a private-publication security boundary.
- No merge, production deployment, hosting change, domain change, or content repair is authorized by experiment completion.

## 4. Compatibility Contract

Before implementation, inventory actual source behavior and freeze an expected manifest from the pinned baseline. Cover notes, posts, books, clippings, and standalone site pages. The baseline manifest is evaluation evidence, not an implicit correction of source defects.

| Surface | Required evidence |
| --- | --- |
| URLs and coverage | Compare full output URL sets and source-to-URL mapping; zero unexplained missing or changed URLs, collisions, or new internal broken links |
| Reading pages | Compare title, normalized body text, headings/anchors, links, images, code blocks, tables, raw HTML, details/fold blocks, summary/insight, and book metadata; investigate differences rather than comparing HTML bytes |
| Navigation | Compare membership, ordering, pagination, speaker/guest merging, slug collision handling, tag thresholds, categories, projects, areas, and series; preserve entity-to-search links |
| Exclusions | Retain direct page generation while excluding marked content from public listings and search; keep internal tags hidden |
| Search | Compare actual indexed URL sets and normalized indexable text; exercise Chinese title/body, speaker, and no-result queries using each generated Pagefind index |
| Presentation | Inspect both outputs at phone, tablet, and desktop widths; verify theme, ToC, folding, search interactions, and representative long articles |

Record existing content/rendering defects in a difference ledger with source path, symptom, baseline behavior, candidate behavior, and disposition. Historical missing-layout and scalar-empty-array findings must be freshly checked against the pinned snapshot. Do not silently fix them or remove problematic documents to improve timings. A change to legacy behavior needs an explicit documented acceptance before migration readiness can be claimed.

## 5. Implementation Phases and Gates

1. **Approve the experiment contract.** Review this draft, including the proposed decision threshold below. This gate approves implementation of the experiment, not production migration.
2. **Capture the baseline.** Implement typed inventory/timing/reporting tools and verify the baseline workflow on the complete pinned content. Confirm that its output agrees with the existing build before writing the candidate.
3. **Implement the Hugo candidate.** Preserve the compatibility contract and reuse existing presentation assets where appropriate. Report all unsupported features explicitly. Run local public-behavior checks before spending remote benchmark minutes.
4. **Run remote comparison.** Execute cold/warm pairs and the added-article scenario; retain machine-readable measurements, compatibility differences, browser evidence, and a concise report. Conduct a separate review pass of isolation and acceptance logic.
5. **Decide next scope.** Recommend migration, further investigation, or retention of Eleventy based on evidence. Production cutover and deployment optimization require a later approved plan.

### Proposed decision threshold

Recommend advancing toward migration only when there are zero unexplained compatibility regressions and warm-mode median comparable build time decreases by both **at least 30% and at least 120 seconds**. Report cold-mode results and all individual pair deltas; inconsistent or overlapping outcomes require additional investigation. This threshold is a proposal for a worthwhile benefit, not a predicted result. Passing it does not authorize production switching.

## 6. Acceptance Criteria

- [x] The user approves the experiment contract and decision threshold.
- [ ] Both engines independently build the identical complete content snapshot with reproducible versions.
- [ ] Three measured pairs per cache mode include every required stage and failed attempt.
- [ ] Added-article rebuild evidence is recorded independently from full-build results.
- [ ] Full URL/index inventories and representative browser checks have no unexplained regressions.
- [ ] Existing defects and intended differences are enumerated with evidence and disposition.
- [ ] Workflow review confirms production credentials, caches, concurrency, and deployment are isolated.
- [ ] A report states whether the decision threshold is met, with limitations and artifact/run links.

## 7. Status History

| Date | Status | Note |
| --- | --- | --- |
| 2026-09-11 | Draft | Prepared after approval to start planning; implementation and remote runs have not started |

## 8. Related Sources

- Existing implementation: `.eleventy.js`, `src/_includes/`, `src/*.njk`, `package.json`, `.github/workflows/deploy.yml`.
- [ADR-001](../decisions/ADR-001-framework-scaling-strategy.md)
- [SPEC-051](./SPEC-051-remove-entity-static-pages.md)
- [SPEC-052](./SPEC-052-hybrid-search-architecture.md)
- [Hugo on GitHub Pages](https://gohugo.io/host-and-deploy/host-on-github-pages/)
- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

User approval: On September 11, the user approved all three tickets, autonomous experiment runs, per-ticket code reviews, and final result recording. Production changes remain out of scope. Tickets are tracked locally under `.scratch/hugo-build-comparison/issues/`.


## Candidate Implementation Decision

The experiment retains the existing Nunjucks presentation templates and collection functions in a typed Node compatibility adapter. Hugo independently renders Markdown bodies. Adapter-generated shells, routing preparation, path restoration, and Pagefind are included in candidate timing; no fresh Eleventy render or baseline HTML is consumed by the candidate. The candidate is therefore Hugo plus a compatibility adapter, not a pure-Go rewrite. Each engine has its own persistent pinyin cache, while immutable source files and installed dependencies may be shared.

Hugo 0.165.0 panics for a reproduced legacy URL containing a colon. Generate pages at internal numeric routes and restore the exact legacy output paths afterward. This avoids modifying source filenames or publishing a new URL scheme. A full-build attempt started before staging finished also produced incomplete output during local development; that failed attempt is retained and excluded from performance claims. The committed candidate runner awaits every stage and aborts on nonzero exit.
