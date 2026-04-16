---
specId: SPEC-050
title: Content and Build System Separation (Git Submodule)
status: ✅ 已完成 (Completed)
priority: P1 - Core Feature
creationDate: 2026-02-15
lastUpdateDate: 2026-04-16
owner: User (AI-Assisted)
tags:
  - architecture
  - git-submodule
  - content-management
---

# SPEC-050: Content and Build System Separation (Git Submodule)

## 1. Goal

Decouple the rapidly growing content library (6,000+ notes) from the Eleventy build system to improve development workflow, enable independent content audits, and reduce repository bloat in the main build repo.

## 2. Background

Initially, the Thought Foundry markdown notes resided in the same repository as the Eleventy source code. As the content volume scaled (15,000+ total files including attachments), simple git operations (status, commit, pull) became sluggish. Additionally, collaborative content updates (via automated scripts or other AI agents) were causing frequent merge conflicts with the build configuration.

## 3. Design Decision

**Chosen approach**: Extract all markdown content into a standalone public repository (`austery/thought-foundry-content`) and reintegrate it into the build system using a **Git Submodule**.

**Rationale**: 
1. **Repository Performance**: The build system repo remains lightweight, containing only the code and assets needed for site generation.
2. **Independent Lifecycle**: Content can be updated, audited, and versioned independently of theme or build logic updates.
3. **CI Efficiency**: Continuous integration runners can perform a shallow clone of the content submodule to save time and bandwidth.

## 4. Implementation Details

- **Content Repo**: `https://github.com/austery/thought-foundry-content`
- **Mount Point**: `src/content/` (aliased or symlinked to `src/notes`, `src/posts`, etc.)
- **Workflow**: 
  - Content updates are committed to the content repo.
  - The build repo tracks a specific commit hash for stability.
  - GitHub Actions automatically updates submodules during the hourly build process.

## 5. Acceptance Criteria

- [x] All 6,000+ notes successfully moved to the new repository.
- [x] Eleventy build system successfully generates the site from the `src/content/` submodule.
- [x] No loss of taxonomy or cross-referencing capabilities.

## 6. Status History

| Date | Status | Note |
|------|--------|------|
| 2026-02-15 | ✅ 已完成 (Completed) | Migration completed; submodule structure verified |
| 2026-04-16 | ✅ 已完成 (Completed) | Formalized as SPEC-050 in architecture docs |

## 7. Related

- **MOC**: [MOC](../../../../research-notes/03-project/2026-04-thought-foundry-MOC.md)
- **Next Specs**: [SPEC-051](./SPEC-051-remove-entity-static-pages.md)
