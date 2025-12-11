# Session Summary: Eleventy Performance Optimization & Memory Fix
**Date:** 2025-12-11

## Overview
We investigated and resolved a critical `JavaScript heap out of memory` crash during the Eleventy build process. Despite previous optimizations (caching, O(1) slug lookups), the build was failing with "Ineffective mark-compacts" due to memory exhaustion.

## Key Decisions
1.  **Diagnosed OOM Cause**: Confirmed that while "Phase 2" optimizations (slug caching) were in place and working, the crash was caused by **massive listing pages** attempting to render thousands of items (tags) in a single pass.
2.  **Implemented Pagination**: Implemented `pagination` in `src/all-tags.njk` (chunk size 50) to break the single massive render into ~140 smaller pages.
3.  **Skipped Speaker Pagination**: Decided NOT to paginate `src/all-speakers.njk` as the number of entities is currently manageable (<100) and the user requested to keep it as a single list.
4.  **Verified Build**: Successfully ran a full production build (`npm run build`) which completed in **88 seconds** with no memory issues.

## Technical Details
*   **Files Modified**:
    *   `src/all-tags.njk`: Added frontmatter pagination logic and navigation controls.
*   **Performance Metrics**:
    *   Build Time: 88.21s (down from ~3 hours previously reported).
    *   Slug Cache Hit Rate: 91.2%.
    *   Output Files: 38,756.

## Phase 4: Entity Template Optimization (Crucial Fix)
*   **Issue**: Identified that 9 entity detail templates (`person-page`, `company-org-page`, `tag-page`, `project-page`, `area-page`, `speaker-page`, `category-page`, `product-model-page`, `media-book-page`) were unknowingly skipping the Phase 3 optimizations. They were using expensive `| getUniqueKey | slug` filter chains inside nested loops.
*   **Resolution**: Updated all 9 templates to use the O(1) helper filters (`| getSpeakerSlug`, `| getAreaSlug`, etc.).
*   **Result**: Resolved a secondary memory crash that occurred when generating `people/` pages. Verification build succeeded in **75 seconds**.

## Knowledge Captured
*   **Pagefind & Chinese**: Pagefind warnings about lack of "stemming" for `zh-hans` are expected and benign for Chinese content.
*   **Memory Pattern**: Even with 8GB RAM (`max-old-space-size=8192`), Eleventy can crash if a *single template* tries to construct a multi-megabyte HTML string in one go. Pagination is the mandatory fix for this.

## Next Steps
*   No immediate actions required. System is stable.
