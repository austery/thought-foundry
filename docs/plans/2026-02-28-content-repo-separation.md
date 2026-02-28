# Content Repo Separation (SPEC-134 Phase 2) Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Extract all content (notes/posts/books/raw_subtitles/cleaned_subtitles) from `thought-foundry` into a new `austery/thought-foundry-content` repo, wire it back as a git submodule with CI sparse checkout, and update puresubs config.

**Architecture:**
- New repo `austery/thought-foundry-content` holds all content and raw subtitle files.
- `thought-foundry` uses a git submodule at `content/` for local dev (full checkout); CI uses partial clone + sparse checkout to only pull `notes/`, `posts/`, `books/`.
- puresubs `default.yml` is the only file that changes in the puresubs codebase.

**Tech Stack:** git filter-repo, GitHub API (gh CLI), Eleventy (.eleventy.js), GitHub Actions

---

## Pre-flight Checklist

Before starting, verify:

```bash
# 1. git-filter-repo installed
git filter-repo --version
# If not: brew install git-filter-repo

# 2. gh CLI authenticated
gh auth status

# 3. Current thought-foundry is clean
cd /Users/leipeng/Documents/Projects/thought-foundry
git status
# Expected: nothing to commit, working tree clean

# 4. Confirm content counts (sanity check)
ls src/notes/*.md | wc -l        # ~5222
ls src/posts/*.md | wc -l        # ~149
ls src/books/*.md | wc -l        # ~3
ls src/notes/raw_subtitles/ | wc -l    # ~5258
ls src/notes/cleaned_subtitles/ | wc -l  # ~4797
```

---

## Task 1: Create the New GitHub Repository

**Files:** None (GitHub API only)

**Step 1: Create empty repo via gh CLI**

```bash
gh repo create austery/thought-foundry-content \
  --private \
  --description "Content layer for thought-foundry digital garden — notes, posts, books, raw subtitles"
```

Expected output:
```
✓ Created repository austery/thought-foundry-content on GitHub
```

**Step 2: Verify repo exists**

```bash
gh repo view austery/thought-foundry-content
```

Expected: Shows repo description, private flag.

---

## Task 2: Extract Content History with git filter-repo

> ⚠️ CRITICAL: Work on a THROWAWAY CLONE, never on the live checkout.

**Step 1: Create a throwaway clone**

```bash
cd /tmp
git clone https://github.com/austery/thought-foundry.git tf-filter-work
cd /tmp/tf-filter-work
```

**Step 2: Run git filter-repo to extract and rename paths**

This single command:
- Keeps ONLY `src/notes/`, `src/posts/`, `src/books/` (and their subdirs)
- Renames `src/notes/` → `notes/` (including raw_subtitles and cleaned_subtitles)
- Renames `src/posts/` → `posts/`
- Renames `src/books/` → `books/`

```bash
git filter-repo \
  --path src/notes/ \
  --path src/posts/ \
  --path src/books/ \
  --path-rename src/notes/:notes/ \
  --path-rename src/posts/:posts/ \
  --path-rename src/books/:books/
```

Expected: Output shows "Rewriting commits..." and completes. The repo now contains ONLY the content directories with rewritten paths.

**Step 3: Verify the result**

```bash
ls                           # Should show: notes/ posts/ books/
ls notes/raw_subtitles/ | wc -l    # Should show ~5258
ls notes/cleaned_subtitles/ | wc -l  # Should show ~4797
git log --oneline | head -5  # Should show commit history
```

**Step 4: Rename raw/cleaned subtitles to be at root level**

The raw_subtitles and cleaned_subtitles should live at repo root (not inside `notes/`) for clarity. Run a second filter-repo pass:

```bash
git filter-repo \
  --path notes/raw_subtitles/ \
  --path notes/cleaned_subtitles/ \
  --path-rename notes/raw_subtitles/:raw_subtitles/ \
  --path-rename notes/cleaned_subtitles/:cleaned_subtitles/ \
  --refs refs/heads/main \
  --force
```

Wait — this would REMOVE notes/ markdown files. Instead, use a single combined filter-repo run. Delete the throwaway clone and redo Steps 1-2 with the correct combined command:

```bash
cd /tmp && rm -rf tf-filter-work
git clone https://github.com/austery/thought-foundry.git tf-filter-work
cd /tmp/tf-filter-work

git filter-repo \
  --path src/notes/ \
  --path src/posts/ \
  --path src/books/ \
  --path-rename src/notes/raw_subtitles/:raw_subtitles/ \
  --path-rename src/notes/cleaned_subtitles/:cleaned_subtitles/ \
  --path-rename src/notes/:notes/ \
  --path-rename src/posts/:posts/ \
  --path-rename src/books/:books/
```

> Note: `--path-rename` rules are applied in order. More-specific renames (subdirectories) MUST come before the parent rename.

**Step 5: Verify final structure**

```bash
ls
# Expected: notes/  posts/  books/  raw_subtitles/  cleaned_subtitles/

ls notes/ | head -5      # markdown files (no subdirs)
ls raw_subtitles/ | head -5   # .txt files
ls cleaned_subtitles/ | head -5  # .txt files
ls notes/raw_subtitles 2>/dev/null || echo "OK: no raw_subtitles in notes/"
```

---

## Task 3: Push Extracted Content to New Repo

**Step 1: Add new repo as remote and push**

```bash
cd /tmp/tf-filter-work

git remote add content https://github.com/austery/thought-foundry-content.git
git push content main --force
```

Expected: Pushes all commits with rewritten history to the new repo.

**Step 2: Verify on GitHub**

```bash
gh repo view austery/thought-foundry-content --json defaultBranchRef
gh api repos/austery/thought-foundry-content/contents/ | jq '.[].name'
```

Expected output:
```
["books", "cleaned_subtitles", "notes", "posts", "raw_subtitles"]
```

**Step 3: Clean up**

```bash
rm -rf /tmp/tf-filter-work
```

---

## Task 4: Remove Content Directories from thought-foundry

**Files:** `thought-foundry/` (git operations on live repo)

**Step 1: Navigate to live repo**

```bash
cd /Users/leipeng/Documents/Projects/thought-foundry
```

**Step 2: Remove content directories from git tracking**

```bash
git rm -r --cached src/notes src/posts src/books
```

> `--cached` removes from git index but keeps files on disk (needed for next step).

**Step 3: Delete the physical directories**

```bash
rm -rf src/notes src/posts src/books
```

**Step 4: Verify removal**

```bash
ls src/
# Expected: _includes  about.njk  all-areas.njk  ... (no notes/ posts/ books/)
git status
# Expected: large number of deleted files staged
```

**Step 5: Commit the removal**

```bash
git add -A
git commit -m "chore: remove content directories (moved to thought-foundry-content repo)"
```

---

## Task 5: Add git submodule

**Step 1: Add thought-foundry-content as submodule at content/**

```bash
cd /Users/leipeng/Documents/Projects/thought-foundry
git submodule add https://github.com/austery/thought-foundry-content.git content
```

Expected: Creates `content/` directory with all content, creates `.gitmodules` file.

**Step 2: Verify .gitmodules was created**

```bash
cat .gitmodules
```

Expected:
```
[submodule "content"]
	path = content
	url = https://github.com/austery/thought-foundry-content.git
```

**Step 3: Commit the submodule**

```bash
git add .gitmodules content
git commit -m "feat: add thought-foundry-content as git submodule at content/"
```

**Step 4: Verify submodule works**

```bash
ls content/
# Expected: notes/  posts/  books/  raw_subtitles/  cleaned_subtitles/

ls content/notes/ | wc -l   # ~5222
ls content/posts/ | wc -l   # ~149
```

---

## Task 6: Update Eleventy Configuration

**Files:** Modify `.eleventy.js`

The file currently uses `./src/notes/`, `./src/posts/`, `./src/books/`.
All occurrences must change to `./content/notes/`, `./content/posts/`, `./content/books/`.

**Step 1: Count occurrences to verify**

```bash
grep -c "src/notes\|src/posts\|src/books" .eleventy.js
# Expected: ~24 (based on grep output from analysis)
```

**Step 2: Apply replacements**

```bash
sed -i '' \
  -e 's|./src/notes/|./content/notes/|g' \
  -e 's|./src/posts/|./content/posts/|g' \
  -e 's|./src/books/|./content/books/|g' \
  -e 's|"./src/notes/|"./content/notes/|g' \
  -e 's|"./src/posts/|"./content/posts/|g' \
  -e 's|"./src/books/|"./content/books/|g' \
  .eleventy.js
```

**Step 3: Verify all occurrences updated**

```bash
grep "src/notes\|src/posts\|src/books" .eleventy.js
# Expected: NO output (zero remaining occurrences)

grep -c "content/notes\|content/posts\|content/books" .eleventy.js
# Expected: ~24
```

**Step 4: Test local build**

```bash
npx @11ty/eleventy --dryrun 2>&1 | tail -20
```

Expected: No errors about missing directories. Should show page count.

**Step 5: Commit**

```bash
git add .eleventy.js
git commit -m "feat: update Eleventy content paths from src/ to content/ submodule"
```

---

## Task 7: Update GitHub Actions Workflow

**Files:** Modify `.github/workflows/deploy.yml`

**Step 1: Read current workflow**

```bash
cat .github/workflows/deploy.yml
```

**Step 2: Update the workflow**

The key changes:
1. `actions/checkout@v4` → add `submodules: false` (we handle submodule manually for sparse checkout)
2. Add a step to do partial clone + sparse checkout of content repo
3. Update `paths-ignore` to also ignore `content/**`

Edit `.github/workflows/deploy.yml` to replace the checkout step and add sparse content clone:

```yaml
# Replace the existing Checkout step with these two steps:

      # Step 1: Checkout site code only (no submodules - we handle content separately)
      - name: Checkout Site Code
        uses: actions/checkout@v4

      # Step 2: Sparse clone content repo (only notes/posts/books - skip raw/cleaned subtitles)
      - name: Checkout Content (Sparse)
        run: |
          git clone \
            --depth 1 \
            --filter=blob:none \
            --sparse \
            https://x-access-token:${{ secrets.GITHUB_TOKEN }}@github.com/austery/thought-foundry-content.git \
            content
          cd content
          git sparse-checkout set notes posts books
```

Also update `paths-ignore` to exclude the content submodule pointer from triggering site rebuilds:

```yaml
    paths-ignore:
      # Content changes handled by scheduled builds
      - 'content'        # submodule pointer update
      - '*.md'
      - 'docs/**'
```

Remove the old `paths-ignore` entries for `src/notes/**`, `src/posts/**`, `src/books/**`.

**Step 3: Verify workflow syntax**

```bash
# Check YAML is valid
python3 -c "import yaml; yaml.safe_load(open('.github/workflows/deploy.yml'))" && echo "YAML valid"
```

**Step 4: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: use sparse checkout of thought-foundry-content in deploy workflow"
```

---

## Task 8: Update puresubs Configuration

**Files:** Modify `puresubs/packages/automation-engine-ytdlp/config/default.yml`

**Step 1: Check current config**

```bash
cat /Users/leipeng/Documents/Projects/puresubs/packages/automation-engine-ytdlp/config/default.yml
```

Current state:
```yaml
storage:
  github:
    owner: austery
    repo: thought-foundry
    branch: main
    path: src/notes/
    raw_subtitle_subdir: raw_subtitles/
```

**Step 2: Update config**

Edit `default.yml` — change the github storage section:

```yaml
storage:
  github:
    owner: austery
    repo: thought-foundry-content   # Changed
    branch: main
    path: notes/                    # Changed: was src/notes/
    raw_subtitle_subdir: raw_subtitles/   # Unchanged (now at repo root)
```

**Step 3: Verify no other hardcoded references**

```bash
grep -r "thought-foundry" /Users/leipeng/Documents/Projects/puresubs/packages/automation-engine-ytdlp/config/
grep -r "src/notes" /Users/leipeng/Documents/Projects/puresubs/packages/automation-engine-ytdlp/config/
# Expected: no remaining references to old paths
```

**Step 4: Commit in puresubs repo**

```bash
cd /Users/leipeng/Documents/Projects/puresubs
git add packages/automation-engine-ytdlp/config/default.yml
git commit -m "chore: update GitHub storage target to thought-foundry-content repo"
```

---

## Task 9: End-to-End Verification

**Step 1: Verify local Eleventy build**

```bash
cd /Users/leipeng/Documents/Projects/thought-foundry
npm run build 2>&1 | tail -30
```

Expected: Build succeeds, `_site/` generated with correct pages.

**Step 2: Spot check content pages exist**

```bash
ls _site/notes/ | wc -l     # Should match ~5222
ls _site/posts/ | wc -l     # Should match ~149
```

**Step 3: Push thought-foundry changes**

```bash
cd /Users/leipeng/Documents/Projects/thought-foundry
git log --oneline -6   # Verify all commits look correct
git push origin main
```

**Step 4: Monitor GitHub Actions**

```bash
gh run list --repo austery/thought-foundry --limit 3
gh run watch --repo austery/thought-foundry
```

Expected: Deploy workflow runs successfully.

**Step 5: Verify deployed site**

Check `https://austery.github.io` is accessible and content pages render correctly.

---

## Task 10: Update Submodule Pointer (After puresubs writes to new repo)

Once puresubs starts writing new notes to `thought-foundry-content`, the submodule pointer in `thought-foundry` will need to be updated periodically to pick up new content for scheduled builds.

The hourly GitHub Actions schedule handles this automatically:
- puresubs pushes new `notes/{videoId}.md` to `thought-foundry-content`
- thought-foundry CI workflow sparse-clones `thought-foundry-content` fresh each build (`--depth 1`)
- No submodule pointer update needed because we use `git clone` in CI, not `git submodule update`

> This is the key advantage of the "sparse git clone in CI" approach over traditional git submodule pointer updates.

---

## Rollback Plan

If anything goes wrong before pushing to `origin main`:

```bash
cd /Users/leipeng/Documents/Projects/thought-foundry
git reset --hard HEAD~N   # where N = number of commits to undo
git submodule deinit content
rm -rf content .gitmodules
```

If you need to restore content from the original repo:
```bash
git checkout <original-commit-hash> -- src/notes src/posts src/books
```

---

## Summary of Changes

| File | Repo | Change |
|------|------|--------|
| `.eleventy.js` | thought-foundry | `./src/notes/` → `./content/notes/` (×8 locations for each of 3 paths) |
| `.github/workflows/deploy.yml` | thought-foundry | Sparse clone of content repo; remove old paths-ignore |
| `.gitmodules` | thought-foundry | New file — submodule declaration |
| `config/default.yml` | puresubs | `repo: thought-foundry-content`, `path: notes/` |

**New repo created:** `austery/thought-foundry-content` (private)

**Phase 3 (future):** Migrate `raw_subtitles/` and `cleaned_subtitles/` from GitHub to Cloudflare R2 when `CloudflareR2StorageProvider` is implemented.
