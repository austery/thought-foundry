# Tag Rendering Threshold — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Filter `.eleventy.js` tagList to only render tag pages for tags appearing in ≥5 articles, reducing ~5,000 tag pages to ~100 and cutting build time ~20-40%.

**Architecture:** Two changes in `.eleventy.js` (filter the tagList collection + add tagHasPage filter), one change in `post.njk` (conditional tag linking). No markdown files touched. No template logic changes beyond conditional linking.

**Tech Stack:** Eleventy (11ty) v3, Nunjucks templates, Node.js

---

### Task 1: Filter tagList collection

**Files:**
- Modify: `.eleventy.js:420` (just before `return tagList;`)

**Context:**
The `tagList` collection is defined at line 334. It currently returns ALL tags regardless of frequency. The `tag-page.njk` template paginates over `collections.tagList` with `size: 1` — so every entry in `tagList` generates one `/tags/<slug>/` page.

**Step 1: Add the threshold filter**

In `.eleventy.js`, find line 420 (`return tagList;`) and replace it:

```js
// --- START: Threshold filter - only render pages for tags with 5+ articles ---
const MIN_TAG_OCCURRENCES = 5;
const filteredTagList = tagList.filter(tag => tag.posts.length >= MIN_TAG_OCCURRENCES);

if (DEBUG) {
  console.log(`[tagList] Total unique tags: ${tagList.length}, after threshold (≥${MIN_TAG_OCCURRENCES}): ${filteredTagList.length}`);
}
// --- END: Threshold filter ---

return filteredTagList;
```

**Step 2: Verify the change locally (quick check, no full build needed)**

```bash
cd /Users/leipeng/Documents/Projects/thought-foundry
DEBUG=true node -e "
const Eleventy = require('@11ty/eleventy');
" 2>&1 | head -5
```

Just ensure the file has no syntax errors:
```bash
node -c .eleventy.js
```
Expected: `/.eleventy.js syntax OK`

**Step 3: Commit**

```bash
cd /Users/leipeng/Documents/Projects/thought-foundry
git add .eleventy.js
git commit -m "perf: filter tagList to only render tag pages with ≥5 occurrences"
```

---

### Task 2: Add tagHasPage filter to prevent broken tag links

**Files:**
- Modify: `.eleventy.js:233` (after the `getTagSlug` filter definition)

**Context:**
`post.njk` renders every frontmatter tag as a clickable link to `/tags/<slug>/`. After Task 1, tags with <5 occurrences no longer have pages. Clicking those links gives a 404. Fix: add a `tagHasPage` filter that returns `true` only if the tag is in the filtered `tagList`, then use it in `post.njk` to conditionally link.

**Step 1: Add the filter after line 233 in `.eleventy.js`**

After the closing `});` of the `getTagSlug` filter (line 233), add:

```js
// Returns true if the given tag name has a rendered page (i.e. it's in the filtered tagList)
eleventyConfig.addFilter("tagHasPage", function (tagName, tagList) {
  if (!tagList) return false;
  return tagList.some(t => t.name === tagName);
});
```

**Step 2: Check syntax**

```bash
node -c .eleventy.js
```
Expected: `/.eleventy.js syntax OK`

**Step 3: Commit**

```bash
git add .eleventy.js
git commit -m "feat: add tagHasPage filter for conditional tag link rendering"
```

---

### Task 3: Update post.njk to use conditional tag links

**Files:**
- Modify: `src/_includes/post.njk:173-176`

**Context:**
Current code (line 173-176) renders every tag as a link unconditionally:
```njk
{% for tag in tags %}
    <a class="tag-link" href="{{ ('/tags/' + (tag | getTagSlug(collections)) + '/') | url }}">{{ tag }}</a>
```

Change to render a link only when `tagHasPage` returns true, otherwise render plain text.

**Step 1: Replace the tag rendering block**

Find lines 173-176 in `src/_includes/post.njk` and replace with:

```njk
{% for tag in tags %}
  {% if tag | tagHasPage(collections.tagList) %}
    <a class="tag-link" href="{{ ('/tags/' + (tag | getTagSlug(collections)) + '/') | url }}">{{ tag }}</a>
  {% else %}
    <span class="tag-pill tag-pill--no-page">{{ tag }}</span>
  {% endif %}
```

**Step 2: (Optional) Add minimal CSS for the no-page variant**

If `tag-pill--no-page` needs distinct styling (e.g. slightly muted, no pointer cursor), add to the relevant CSS file. If the existing `tag-pill` style already looks fine without a link, skip this step.

Check the existing style:
```bash
grep -rn "tag-pill\|tag-link" src/css/
```

If `tag-link` has `cursor: pointer` or `color: blue` that would look odd on a `<span>`, add to the appropriate CSS file:
```css
.tag-pill--no-page {
  opacity: 0.6;
  cursor: default;
}
```

**Step 3: Commit**

```bash
git add src/_includes/post.njk src/css/
git commit -m "feat: render low-frequency tags as plain text instead of broken links"
```

---

### Task 4: Run a full local build and verify

**Step 1: Run the build**

```bash
cd /Users/leipeng/Documents/Projects/thought-foundry
npm run build 2>&1 | tail -20
```

**Expected output (look for):**
- `[tagList] Total unique tags: XXXX, after threshold (≥5): ~100` in DEBUG output (or add `DEBUG=true` prefix)
- Build completes without errors
- Build time noticeably shorter than the previous 68s baseline

**Step 2: Spot-check a tag page with ≥5 occurrences still works**

```bash
# Find a tag with many occurrences from the top-25 list
# e.g. geopolitics (19 occurrences)
ls _site/tags/geopolitics/
```
Expected: `index.html` exists

**Step 3: Spot-check a singleton tag page no longer exists**

```bash
# Any of the singleton tags should NOT have a page
# Check that there's no _site/tags/ma-ji-ya-wei-li-shi-ke/ directory
ls _site/tags/ | wc -l
```
Expected: ~100 directories, not ~5,000

**Step 4: Spot-check all-tags page**

```bash
ls _site/all-tags/
```
Expected: fewer pagination pages (was 140+ pages for 5,000+ tags; now should be 1-3 pages for ~100 tags)

**Step 5: (Optional) Simplify all-tags.njk pagination**

If `_site/all-tags/` now has only 1 page, the pagination controls in `all-tags.njk` are unnecessary. The pagination block renders conditionally (`{% if pagination.pages.length > 1 %}`), so it already won't show with ≤50 tags. No change required unless you want to remove the pagination config entirely.

**Step 6: Commit build verification note**

```bash
git add -A
git commit -m "build: verify tag threshold reduction - tag pages reduced to ~100"
```

---

## Summary of Changes

| File | Change |
|------|--------|
| `.eleventy.js:420` | Filter `tagList` to `posts.length >= 5` before return |
| `.eleventy.js:233` | Add `tagHasPage` filter |
| `src/_includes/post.njk:173-176` | Conditional link vs plain text for tags |
| `src/css/*.css` (optional) | `.tag-pill--no-page` muted style |

**No markdown files changed. No frontmatter touched. All tags preserved in data.**
