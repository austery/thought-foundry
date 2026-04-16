# Thought Foundry Documentation Index

**Last Updated**: 2026-04-16
**System Version**: 05x (Optimized Hybrid Architecture)

---

## 🏛️ System Architecture & Decisions

The documentation reflects a systematic "Sedimentation" of knowledge, moving from implementation plans to official specifications and records.

### 📜 Technical Specifications (SPECs)
*Official standards and implementation details for core features.*

- **[SPEC-051: Remove Entity Static Pages](./architecture/specs/SPEC-051-remove-entity-static-pages.md)** ✅
  - Reduction of 17,000+ files and 70% build time improvement.
- **[SPEC-052: Hybrid Search Architecture](./architecture/specs/SPEC-052-hybrid-search-architecture.md)** 📝
  - Pagefind Meta-Only Indexing + Postgres Vector API.
- **[SPEC-053: Tag Threshold Optimization](./architecture/specs/SPEC-053-tag-threshold-optimization.md)** ✅
  - Singleton tag filtering (≥5 occurrences).
- **[SPEC-054: Collection Caching Strategy](./architecture/specs/SPEC-054-collection-caching-strategy.md)** ✅
  - Map-based $O(1)$ lookups for taxonomy and slugs.

### 🏛️ Architecture Decisions (ADRs)
*Strategic records of framework choices and major architectural pivots.*

- **[ADR-001: Framework Scaling Strategy](./architecture/decisions/ADR-001-framework-scaling-strategy.md)** ✅
  - Why we chose optimized Eleventy over Hugo/Astro.

---

## 📂 Content & Project Structure

- **[MOC (Map of Content)](../../../research-notes/03-project/2026-04-thought-foundry-MOC.md)** 🟢
  - The high-level navigation for the entire project history and state.
- **[README (Project)](../README.md)**
  - Development setup and build instructions.

---

## 🏛️ Archive
*Historical audits, one-time investigations, and session drafts.*

- **[Archive Directory](./archive/)**
  - Includes historical optimization whiteboards, video ID collision audits, and metadata cleanup tasks.

---

## 🚀 Quick Metrics (Build v05x)

- **Total Posts**: 6,300+
- **Total Files**: 8,500+
- **Build Time**: ~80 seconds
- **Search Engine**: Pagefind (lexical) + Insight Engine (semantic)

---

**Maintained By**: Antigravity (Advanced Agentic Coding) & Lei Peng
**Corpus Name**: austery/thought-foundry
