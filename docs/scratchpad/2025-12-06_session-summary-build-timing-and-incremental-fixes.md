# Session Summary: Build Timing & Incremental Build Fixes

**Date:** 2025-12-06  
**Session Focus:** Debugging Eleventy v3 incremental build issues and build time calculation errors

## Problems Encountered

### 1. Eleventy v3 Incremental Build Race Condition

**Issue:**
When using `--incremental` flag with dev server, adding multiple new files simultaneously caused repeated errors:
```
Error: `templateRender` has not yet initialized on ./src/notes/[filename].md
Error: TemplateRender needs a call to the init() method.
```

**Files Affected:**
- Multiple new markdown files being added: `Fxp3131i1yE.md`, `dHIppEqwi0g.md`, `pYN7ZULM84U.md`, etc.
- Initially misdiagnosed as `draft: true` frontmatter issue on `D0DUzZItVyI.md`

**Root Cause:**
Eleventy v3's incremental build has a race condition where new files trigger rebuild before `TemplateRender.init()` completes. This is particularly problematic when bulk-adding files during watch mode.

**Solution Implemented:**
Modified `package.json` to separate incremental and non-incremental dev modes:

```json
{
  "scripts": {
    "dev": "NODE_OPTIONS=\"--max-old-space-size=8192\" npx @11ty/eleventy --serve",
    "dev:incremental": "NODE_OPTIONS=\"--max-old-space-size=8192\" npx @11ty/eleventy --serve --incremental"
  }
}
```

**Usage Guidelines:**
- Use `npm run dev` (no incremental) when bulk-adding/importing files
- Use `npm run dev:incremental` for small edits to existing files
- Restart server completely after bulk operations

---

### 2. Build Time Calculation Error

**Issue:**
Custom performance monitoring showed wildly incorrect build times:
```
✨ Build completed in 5582.58s  (WRONG - ~93 minutes)
[11ty] Wrote 37015 files in 60.14 seconds  (CORRECT)
```

User expectation was 60-100 seconds, matching Eleventy's official timing.

**Root Cause:**
In `.eleventy.js` (line 20), `buildStartTime` was initialized at module load time:
```javascript
const buildStartTime = Date.now(); // Set when module first required
```

In dev server mode:
1. Config module loads at 10:00:00 → `buildStartTime = 10:00:00`
2. Module is cached by Node.js
3. First build starts at 10:01:33, ends at 10:02:33 (60 seconds)
4. Calculation: `10:02:33 - 10:00:00 = 153 seconds` ❌
5. Subsequent builds accumulate even more error

**Solution Implemented:**

Changed `buildStartTime` from module-level constant to event-driven variable:

```javascript
// Before (incorrect):
const buildStartTime = Date.now(); // Line 20

// After (correct):
let buildStartTime; // Line 19 - declared but not initialized

// Added new event listener (line 1226):
eleventyConfig.on('eleventy.before', async () => {
  buildStartTime = Date.now(); // Set at each build start
});
```

**Verification:**
After fix, timing is accurate:
```
✨ Build completed in 78.35s
[11ty] Wrote 37015 files in 75.67 seconds
```

Difference (2.68s) is expected: custom timing includes `eleventy.after` event processing (cache save, stats output).

---

## Code Changes

### File: `package.json`
**Lines Modified:** 8-9

```diff
  "scripts": {
    "build": "NODE_OPTIONS=\"--max-old-space-size=8192\" npx @11ty/eleventy && npx pagefind --site _site",
-   "dev": "NODE_OPTIONS=\"--max-old-space-size=8192\" npx @11ty/eleventy --serve --incremental",
+   "dev": "NODE_OPTIONS=\"--max-old-space-size=8192\" npx @11ty/eleventy --serve",
+   "dev:incremental": "NODE_OPTIONS=\"--max-old-space-size=8192\" npx @11ty/eleventy --serve --incremental",
    "build:debug": "DEBUG=true npx @11ty/eleventy && npx pagefind --site _site",
```

### File: `.eleventy.js`
**Lines Modified:** 19-20, 1226-1228

```diff
  const REGEX_LOWER = /^[a-z]/;

- // 性能优化：构建时间监控
- const buildStartTime = Date.now();
+ // 性能优化：构建时间监控（在 eleventy.before 中设置）
+ let buildStartTime;

  // 性能优化：持久化拼音缓存
```

```diff
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");

+ // 性能优化：在构建开始时记录时间
+ eleventyConfig.on('eleventy.before', async () => {
+   buildStartTime = Date.now();
+ });
+
  // 性能优化：在构建结束时保存持久化缓存
  eleventyConfig.on('eleventy.after', async () => {
```

---

## Key Learnings

### 1. Eleventy v3 Event Lifecycle
Understanding the proper event hooks is critical for accurate timing:
- `eleventy.before` - Fires at build start (use for initialization)
- `eleventy.after` - Fires at build completion (use for cleanup/reporting)

### 2. Module Caching Gotcha
Node.js caches `module.exports` results. Variables initialized at module level persist across multiple builds in watch mode. Use event-driven initialization for per-build state.

### 3. Incremental Build Trade-offs
Incremental builds optimize speed but introduce complexity:
- Faster rebuilds for single-file changes
- Race conditions with bulk operations
- Requires careful event lifecycle management

---

## Testing Performed

1. **Build Time Accuracy:**
   - Ran multiple full builds
   - Verified timing matches Eleventy's official reporting (±3 seconds)
   - Confirmed consistency across dev and production builds

2. **Incremental Mode:**
   - Verified `npm run dev` works without `--incremental` flag
   - Confirmed `npm run dev:incremental` still available for when needed
   - No regression in normal dev workflow

---

## Unresolved Issues

None - both issues fully resolved and tested.

---

## Next Steps

- Monitor for any new incremental build edge cases
- Consider adding build time to page metadata for analytics
- Possible future optimization: investigate why there's 2.7s overhead in `eleventy.after` processing
