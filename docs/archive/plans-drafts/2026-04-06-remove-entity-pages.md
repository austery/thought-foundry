# Remove Entity Static Pages — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove static pages for 4 entity types (people, companies-orgs, products-models, media-books), cutting output from 25,734 → ~8,363 HTML files and build time from ~256s → ~80s.

**Architecture:** Delete 4 Nunjucks page templates → update `post.njk` entity links to use `/?q=EntityName` Pagefind search → remove dead collection builders and slug filters from `.eleventy.js` → add URL param auto-trigger in `base.njk`.

**Tech Stack:** Eleventy 3.x (Nunjucks templates), Pagefind (static search), Node.js

---

## File Map

| File | Action | What changes |
|------|--------|--------------|
| `src/person-page.njk` | Delete | No longer generates /people/* pages |
| `src/company-org-page.njk` | Delete | No longer generates /companies-orgs/* pages |
| `src/product-model-page.njk` | Delete | No longer generates /products-models/* pages |
| `src/media-book-page.njk` | Delete | No longer generates /media-books/* pages |
| `src/_includes/post.njk` | Modify | Entity links: `/people/slug/` → `/?q=Name` |
| `.eleventy.js` | Modify | Remove 8 filters (lines 203-229, 298-344) + 4 collections (lines 838-1237) |
| `src/_includes/base.njk` | Modify | Add ~10 lines: URL `?q=` param → auto-trigger Pagefind search |

---

## Task 1: Confirm entity page templates are deleted

**Files:**
- Delete (verify): `src/person-page.njk`, `src/company-org-page.njk`, `src/product-model-page.njk`, `src/media-book-page.njk`

- [ ] **Step 1: Verify templates are gone**

```bash
ls src/person-page.njk src/company-org-page.njk src/product-model-page.njk src/media-book-page.njk 2>&1
```

Expected output: `No such file or directory` for all four (they were deleted in the brainstorming session). If any still exist, delete them:

```bash
rm -f src/person-page.njk src/company-org-page.njk src/product-model-page.njk src/media-book-page.njk
```

- [ ] **Step 2: Commit**

```bash
git add -A src/
git commit -m "feat: remove entity page templates for people, companies, products, media-books"
```

---

## Task 2: Update `post.njk` — replace entity links with search links

**Files:**
- Modify: `src/_includes/post.njk:132-163`

The entity section (lines 127-167) currently calls `getPersonSlug(collections)` etc. to build links to entity pages. Replace all 4 blocks with direct `/?q=` links.

- [ ] **Step 1: Verify current entity block looks as expected**

```bash
sed -n '132,163p' src/_includes/post.njk
```

Expected: 4 `{% for ... %}` blocks each containing an `<a href>` that calls `getPersonSlug`, `getCompanySlug`, `getProductSlug`, or `getMediaSlug`.

- [ ] **Step 2: Replace the entity link blocks in `post.njk`**

In `src/_includes/post.njk`, replace lines 132-163 with:

```njk
            {% if people and people.length > 0 %}
              <p><strong>人物:</strong>
                {% for person in people %}
                  <a href="{{ ('/?q=' + person) | url }}" class="entity-link person-link">{{ person }}</a>{% if not loop.last %}, {% endif %}
                {% endfor %}
              </p>
            {% endif %}
            {% if companies_orgs and companies_orgs.length > 0 %}
              <p><strong>公司/组织:</strong>
                {% for company in companies_orgs %}
                  <a href="{{ ('/?q=' + company) | url }}" class="entity-link company-link">{{ company }}</a>{% if not loop.last %}, {% endif %}
                {% endfor %}
              </p>
            {% endif %}
            {% if products_models and products_models.length > 0 %}
              <p><strong>产品/模型:</strong>
                {% for product in products_models %}
                  <a href="{{ ('/?q=' + product) | url }}" class="entity-link product-link">{{ product }}</a>{% if not loop.last %}, {% endif %}
                {% endfor %}
              </p>
            {% endif %}
            {% if media_books and media_books.length > 0 %}
              <p><strong>媒体/书籍:</strong>
                {% for media in media_books %}
                  <a href="{{ ('/?q=' + media) | url }}" class="entity-link media-link">{{ media }}</a>{% if not loop.last %}, {% endif %}
                {% endfor %}
              </p>
            {% endif %}
```

- [ ] **Step 3: Verify no remaining references to old slug filters**

```bash
grep -n "getPersonSlug\|getCompanySlug\|getProductSlug\|getMediaSlug" src/_includes/post.njk
```

Expected: no output.

- [ ] **Step 4: Commit**

```bash
git add src/_includes/post.njk
git commit -m "feat: replace entity page links with Pagefind search links in post.njk"
```

---

## Task 3: Remove slug filters and UniqueKey filters from `.eleventy.js`

**Files:**
- Modify: `.eleventy.js:203-229` (4 slug filters)
- Modify: `.eleventy.js:298-344` (4 UniqueKey filters)

These 8 filters only served entity page link generation. With `post.njk` updated, they are dead code.

- [ ] **Step 1: Remove the 4 slug filters (lines 203-229)**

Delete this block from `.eleventy.js` (lines 203-229):

```js
  eleventyConfig.addFilter("getPersonSlug", function (personName, collections) {
    if (!collections || !collections.peopleList) return eleventyConfig.getFilter("slug")(personName);
    const uniqueKey = eleventyConfig.getFilter("getPersonUniqueKey")(personName, collections);
    const person = collections.peopleList.find(p => p.uniqueKey === uniqueKey);
    return person ? person.slug : eleventyConfig.getFilter("slug")(uniqueKey);
  });

  eleventyConfig.addFilter("getCompanySlug", function (companyName, collections) {
    if (!collections || !collections.companiesOrgsList) return eleventyConfig.getFilter("slug")(companyName);
    const uniqueKey = eleventyConfig.getFilter("getCompanyUniqueKey")(companyName, collections);
    const company = collections.companiesOrgsList.find(c => c.uniqueKey === uniqueKey);
    return company ? company.slug : eleventyConfig.getFilter("slug")(uniqueKey);
  });

  eleventyConfig.addFilter("getProductSlug", function (productName, collections) {
    if (!collections || !collections.productsModelsList) return eleventyConfig.getFilter("slug")(productName);
    const uniqueKey = eleventyConfig.getFilter("getProductUniqueKey")(productName, collections);
    const product = collections.productsModelsList.find(p => p.uniqueKey === uniqueKey);
    return product ? product.slug : eleventyConfig.getFilter("slug")(uniqueKey);
  });

  eleventyConfig.addFilter("getMediaSlug", function (mediaName, collections) {
    if (!collections || !collections.mediaBookslist) return eleventyConfig.getFilter("slug")(mediaName);
    const uniqueKey = eleventyConfig.getFilter("getMediaUniqueKey")(mediaName, collections);
    const media = collections.mediaBookslist.find(m => m.uniqueKey === uniqueKey);
    return media ? media.slug : eleventyConfig.getFilter("slug")(uniqueKey);
  });
```

- [ ] **Step 2: Remove the 4 UniqueKey filters (lines ~298-344)**

Delete this block from `.eleventy.js`:

```js
  // 添加过滤器来获取人物的唯一键
  eleventyConfig.addFilter("getPersonUniqueKey", function (personName, collections) {
    if (!collections || !collections.peopleList)
      return slugify(
        cachedPinyin(personName.trim().toLowerCase())
      );

    const lowerCaseName = personName.trim().toLowerCase();
    const person = collections.peopleList.find((p) => p.key === lowerCaseName);
    return person ? person.uniqueKey : lowerCaseName;
  });

  // 添加过滤器来获取公司/组织的唯一键
  eleventyConfig.addFilter("getCompanyUniqueKey", function (companyName, collections) {
    if (!collections || !collections.companiesOrgsList)
      return slugify(
        cachedPinyin(companyName.trim().toLowerCase())
      );

    const lowerCaseName = companyName.trim().toLowerCase();
    const company = collections.companiesOrgsList.find((c) => c.key === lowerCaseName);
    return company ? company.uniqueKey : lowerCaseName;
  });

  // 添加过滤器来获取产品/模型的唯一键
  eleventyConfig.addFilter("getProductUniqueKey", function (productName, collections) {
    if (!collections || !collections.productsModelsList)
      return slugify(
        cachedPinyin(productName.trim().toLowerCase())
      );

    const lowerCaseName = productName.trim().toLowerCase();
    const product = collections.productsModelsList.find((p) => p.key === lowerCaseName);
    return product ? product.uniqueKey : lowerCaseName;
  });

  // 添加过滤器来获取媒体/书籍的唯一键
  eleventyConfig.addFilter("getMediaUniqueKey", function (mediaName, collections) {
    if (!collections || !collections.mediaBookslist)
      return slugify(
        cachedPinyin(mediaName.trim().toLowerCase())
      );

    const lowerCaseName = mediaName.trim().toLowerCase();
    const media = collections.mediaBookslist.find((m) => m.key === lowerCaseName);
    return media ? media.uniqueKey : lowerCaseName;
  });
```

- [ ] **Step 3: Verify no remaining references to removed filters**

```bash
grep -n "getPersonSlug\|getCompanySlug\|getProductSlug\|getMediaSlug\|getPersonUniqueKey\|getCompanyUniqueKey\|getProductUniqueKey\|getMediaUniqueKey" .eleventy.js src/_includes/
```

Expected: no output.

- [ ] **Step 4: Commit**

```bash
git add .eleventy.js
git commit -m "feat: remove entity slug and uniqueKey filters from eleventy config"
```

---

## Task 4: Remove 4 collection builders from `.eleventy.js`

**Files:**
- Modify: `.eleventy.js:838-1237` (~400 lines removed)

Remove 4 `addCollection` blocks. Each starts with a comment and ends with `});`. Do them bottom-up to avoid line number drift.

- [ ] **Step 1: Remove `mediaBookslist` collection (lines ~1141-1237)**

Find and delete the block starting with:
```js
  // 媒体/书籍集合
  eleventyConfig.addCollection("mediaBookslist", (collectionApi) => {
```
through its closing `  });` at line ~1237.

- [ ] **Step 2: Remove `productsModelsList` collection (lines ~1037-1138)**

Find and delete the block starting with:
```js
  // 产品/模型集合
  eleventyConfig.addCollection("productsModelsList", (collectionApi) => {
```
through its closing `  });` at line ~1138.

- [ ] **Step 3: Remove `companiesOrgsList` collection (lines ~937-1034)**

Find and delete the block starting with:
```js
  // 公司/组织集合 - 使用实体规范化自动合并相似名称
  eleventyConfig.addCollection("companiesOrgsList", (collectionApi) => {
```
through its closing `  });` at line ~1034.

- [ ] **Step 4: Remove `peopleList` collection (lines ~838-934)**

Find and delete the block starting with:
```js
  // 人物集合 - 使用实体规范化自动合并相似名称
  eleventyConfig.addCollection("peopleList", (collectionApi) => {
```
through its closing `  });` at line ~934.

- [ ] **Step 5: Verify no remaining references**

```bash
grep -n "peopleList\|companiesOrgsList\|productsModelsList\|mediaBookslist" .eleventy.js
```

Expected: no output.

- [ ] **Step 6: Commit**

```bash
git add .eleventy.js
git commit -m "feat: remove peopleList, companiesOrgsList, productsModelsList, mediaBookslist collections"
```

---

## Task 5: Add URL param auto-search to `base.njk`

**Files:**
- Modify: `src/_includes/base.njk:67-88` (inside the PagefindUI script block)

When a user navigates to `/?q=EntityName`, this JS reads the param and auto-fills the search box.

- [ ] **Step 1: Locate the PagefindUI script block**

```bash
grep -n "PagefindUI\|DOMContentLoaded\|window.addEventListener" src/_includes/base.njk
```

Expected: shows the `window.addEventListener('DOMContentLoaded', ...)` block around line 67-88.

- [ ] **Step 2: Add URL param handling after PagefindUI init**

In `src/_includes/base.njk`, find this closing section of the script block:

```js
        });
      });
    </script>
```

Replace with:

```js
        });

        // Auto-trigger search from ?q= URL param (used by entity name links)
        const _q = new URLSearchParams(window.location.search).get('q');
        if (_q) {
          setTimeout(() => {
            const input = document.querySelector('.pagefind-ui__search-input');
            if (input) {
              input.value = _q;
              input.dispatchEvent(new Event('input', { bubbles: true }));
            }
          }, 100);
        }
      });
    </script>
```

- [ ] **Step 3: Verify the change looks correct**

```bash
grep -A5 "Auto-trigger search" src/_includes/base.njk
```

Expected: shows the `_q` block with `URLSearchParams` and `setTimeout`.

- [ ] **Step 4: Commit**

```bash
git add src/_includes/base.njk
git commit -m "feat: auto-trigger Pagefind search from ?q= URL param"
```

---

## Task 6: Build and verify

- [ ] **Step 1: Run Eleventy build and time it**

```bash
time (NODE_OPTIONS="--max-old-space-size=8192" npx @11ty/eleventy 2>&1 | tail -5)
```

Expected:
- No errors
- Output file count: ~8,363 (was 25,734)
- Time: under 60s (was ~166s)

- [ ] **Step 2: Verify entity directories are gone**

```bash
ls _site/people _site/companies-orgs _site/products-models _site/media-books 2>&1
```

Expected: `No such file or directory` for all four.

- [ ] **Step 3: Verify search links render correctly**

Find a built page that has entity data and check the link format:

```bash
find _site -name "*.html" | xargs grep -l "entity-link person-link" 2>/dev/null | head -1 | xargs grep "entity-link person-link"
```

Expected: `<a href="/?q=PersonName" class="entity-link person-link">PersonName</a>` — no `/people/` in the href.

- [ ] **Step 4: Run Pagefind and time it**

```bash
time npx pagefind --site _site 2>&1 | tail -5
```

Expected: under 35s (was ~90s).

- [ ] **Step 5: Serve locally and manually test search link**

```bash
npx @11ty/eleventy --serve 2>&1 &
```

Open a post that has entity data. Click an entity name link. Verify:
- Browser navigates to `/?q=EntityName`
- Search box auto-fills with the entity name
- Pagefind returns relevant results

- [ ] **Step 6: Final commit if any cleanup needed**

```bash
git add -A
git status  # confirm only expected files changed
git commit -m "chore: post-build verification cleanup"
```

---

## Self-Review

**Spec coverage:**
- ✅ Delete 4 page templates → Task 1
- ✅ Remove 4 collection builders → Task 4
- ✅ Remove slug + uniqueKey filters → Task 3
- ✅ Update post.njk entity links → Task 2
- ✅ base.njk URL param auto-search → Task 5
- ✅ Build verification with timing → Task 6

**Placeholder scan:** None found. All steps have exact commands and expected output.

**Type consistency:** No cross-task type references — each task is self-contained HTML/JS/Nunjucks changes.
