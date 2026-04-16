---
specId: ADR-001
title: Framework Scaling Strategy (Hugo vs. Astro vs. Eleventy)
status: ✅ 已完成 (Completed)
creationDate: 2025-12-04
lastUpdateDate: 2026-04-16
relatedSpecs:
  - SPEC-050
  - SPEC-053
  - SPEC-054
---

# ADR-001: Framework Scaling Strategy (Hugo vs. Astro vs. Eleventy)

**Date**: 2025-12-04
**Status**: ✅ Accepted
**Deciders**: User (AI-Assisted)

## Context

As the Thought Foundry corpus grew past 6,000 notes and 15,000 files, the build system (Eleventy) hit significant performance bottlenecks (build times exceeding 3 hours locally and memory crashes in CI). We needed to decide whether to undergo a heavy migration to a high-performance framework like Hugo/Astro or double down on optimizing the existing Eleventy setup.

## Decision

**We chose to stay with Eleventy (Highly Optimized)** because the migration cost to Hugo or Astro (estimated at 2-3 weeks of full-time developer effort) did not justify the immediate benefits when a series of targeted internal optimizations (SPEC-050, 053, 054) could bring build times down to acceptable levels (~1 minute).

## Options Considered

| Option | Pros | Cons | Decision |
|--------|------|------|----------|
| **Hugo (Migration)** | ⚡ Fastest build speed (Go-based); Excellent for large sites. | Completely different templating (Go templates); High migration cost. | ❌ Rejected |
| **Astro (Migration)** | 🚀 Fast; Native content collections; Similar DX to 11ty. | Initial transition cost; ecosystem still maturing. | ❌ Rejected |
| **Eleventy (Optimization)** | ✅ No migration; familiar workflow; deep control over data. | Requires ongoing manual optimization as content scales. | ✅ Chosen |

## Consequences

**Positive**:
- Avoided 2+ weeks of downtime/migration labor.
- Achieved a 200x build speedup (3h → 1m) through algorithmic improvements.
- Maintained the rich Nunjucks-based design system ("午夜森林手稿").

**Tradeoffs**:
- Continues to push Node.js to its memory limits (requires 16GB+ heap flags in CI).
- Future growth (e.g., 20,000+ notes) may eventually force a revisit of this decision.

## Review History

| Date | Reviewer | Note | Status |
|------|----------|------|--------|
| 2025-12-04 | User/AI | Initial comparison of Hugo/Astro | 📝 Draft |
| 2026-02-15 | User | Re-evaluated after SPEC-050; migration still deemed too "Heavy" | ✅ Accepted |
| 2026-04-16 | AI | Formalized as ADR-001 | ✅ Accepted |
