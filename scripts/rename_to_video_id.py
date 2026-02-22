#!/usr/bin/env python3
"""
Rename/clean up files to match standard YouTube VIDEO_ID.md filename convention.
Usage: uv run scripts/rename_to_video_id.py [--dry-run]
"""

import sys
import shutil
import argparse
from pathlib import Path

ROOT = Path(__file__).parent.parent

# ── Operation Plan (derived from audit + user decisions) ───────────────────────

# 1. Simple renames: src file → new name (in same directory)
RENAMES: list[tuple[str, str]] = [
    # Office Hour posts
    ("src/posts/20251004_office-hour.md",   "aJs-8slesUA.md"),
    ("src/posts/20251005_Siyuan-Guo.md",    "jmD-fU_3v28.md"),
    ("src/posts/20251019_Office-Hour.md",   "ufwIj6Ot0g4.md"),
    ("src/posts/20251101_Office-Hour.md",   "Paa-17FrDBU.md"),
    ("src/posts/20251108_Ami.md",           "f_xS2ze53zY.md"),
    ("src/posts/20251122_Office-Hour.md",   "8uSUci1dZHM.md"),
    ("src/posts/20251207_Office-Hour.md",   "ReD3lmEPWwE.md"),
    # Keep larger version, rename to clean ID (no collision)
    ("src/notes/7fvQr224cGY-ai.md",         "7fvQr224cGY.md"),
    ("src/notes/ym5Uva8ir2o-saudi-oil-japan-pm-trump-gaza-china-negotiations-20251004.md", "ym5Uva8ir2o.md"),
]

# 2. Replace existing main with stub (stub has more content; user confirmed)
#    Action: delete old main → rename stub to main's name
REPLACE_MAIN_WITH_STUB: list[tuple[str, str]] = [
    # (stub_to_keep, existing_main_to_delete)
    ("src/notes/YvZBCRYwk6s----.md",   "src/notes/YvZBCRYwk6s.md"),
    ("src/notes/qkrxpQfeDZI-book-club-discussion-why-nations-fail-and-china-myriad-details-li-houchen-nobel-book-club-series-2-part-1.md",
                                         "src/notes/qkrxpQfeDZI.md"),
    ("src/notes/YxMjce6kSJY-5.md",     "src/notes/YxMjce6kSJY.md"),
]

# 3. Delete stubs (main file is better or same ID already exists and main wins)
DELETE_STUBS: list[str] = [
    "src/notes/XX1zG4xU8nc----.md",
    "src/notes/Xgk8DCmH3iU----.md",
    "src/notes/zWt7z7cdows----.md",
    "src/notes/YtuZpLIxV_w----.md",          # user: keep MAIN
    "src/notes/CWAMH9xMJfg----.md",           # main has more content
    "src/notes/-5Weeox0Xus-stan-druckenmiller-macro-investing-fed-ai.md",  # main has 121768 chars
    "src/notes/7fvQr224cGY----.md",            # smaller, user: keep -ai version
    "src/notes/ym5Uva8ir2o----.md",            # smaller, user: keep saudi-oil version
]

# ── Execution ──────────────────────────────────────────────────────────────────

def run(dry_run: bool) -> None:
    tag = "[DRY RUN] " if dry_run else ""
    errors: list[str] = []

    print(f"\n{tag}=== Step 1: Simple Renames ({len(RENAMES)}) ===")
    for rel_src, new_name in RENAMES:
        src = ROOT / rel_src
        dst = src.parent / new_name
        if not src.exists():
            print(f"  ⚠️  SKIP (not found): {rel_src}")
            continue
        if dst.exists():
            print(f"  ⚠️  SKIP (target exists): {dst.relative_to(ROOT)}")
            errors.append(f"collision: {rel_src} → {new_name}")
            continue
        print(f"  ✏️  {rel_src.split('/')[-1]}  →  {new_name}")
        if not dry_run:
            src.rename(dst)

    print(f"\n{tag}=== Step 2: Replace Main with Stub ({len(REPLACE_MAIN_WITH_STUB)}) ===")
    for rel_stub, rel_main in REPLACE_MAIN_WITH_STUB:
        stub = ROOT / rel_stub
        main = ROOT / rel_main
        new_name = main.name
        if not stub.exists():
            print(f"  ⚠️  SKIP (stub not found): {rel_stub}")
            continue
        print(f"  🗑  delete old:  {main.name}")
        print(f"  ✏️  rename stub: {stub.name}  →  {new_name}")
        if not dry_run:
            if main.exists():
                main.unlink()
            stub.rename(stub.parent / new_name)

    print(f"\n{tag}=== Step 3: Delete Stubs ({len(DELETE_STUBS)}) ===")
    for rel in DELETE_STUBS:
        p = ROOT / rel
        if not p.exists():
            print(f"  ⚠️  SKIP (not found): {rel.split('/')[-1]}")
            continue
        print(f"  🗑  {rel.split('/')[-1]}")
        if not dry_run:
            p.unlink()

    print(f"\n{'='*60}")
    if errors:
        print(f"  ⚠️  {len(errors)} 问题需手动处理:")
        for e in errors:
            print(f"    {e}")
    else:
        print(f"  {tag}全部操作完成，无错误。")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    run(args.dry_run)
