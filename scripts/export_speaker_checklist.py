#!/usr/bin/env python3
"""Export a Markdown checklist of files missing the speaker field."""

import json
import subprocess
from pathlib import Path

import yaml

ROOT = Path(__file__).parent.parent
OUT  = ROOT / "docs" / "scratchpad" / "speaker-missing-checklist.md"

# Get audit JSON
result = subprocess.run(
    ["uv", "run", "scripts/frontmatter_audit.py", "--json", "--errors-only"],
    capture_output=True, text=True, cwd=ROOT,
)
data = json.loads(result.stdout)
speaker_files = [r["file"] for r in data if any(i["field"] == "speaker" for i in r["issues"])]

rows = []
for rel in speaker_files:
    path = ROOT / rel
    text = path.read_text(encoding="utf-8")
    parts = text.split("---", 2)
    fm = yaml.safe_load(parts[1]) if len(parts) >= 3 else {}
    rows.append({
        "file": rel,
        "title": (fm.get("title") or path.stem)[:60],
        "date": str(fm.get("date") or "")[:10],
        "source": fm.get("source") or "",
        "category": fm.get("category") or "",
        "area": fm.get("area") or "",
    })

lines = [
    "# Speaker 补全清单",
    "",
    f"共 **{len(rows)}** 个文件缺少 `speaker` 字段。请填写每行的 speaker（视频 channel 名或主讲人）。",
    "",
    "| # | 文件名 | 标题 | 日期 | Category | Source |",
    "|---|--------|------|------|----------|--------|",
]

for i, r in enumerate(rows, 1):
    fname = r["file"].split("/")[-1].replace(".md", "")
    src_cell = f"[link]({r['source']})" if r["source"] else "—"
    lines.append(f"| {i} | `{fname}` | {r['title']} | {r['date']} | {r['category']} | {src_cell} |")

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text("\n".join(lines) + "\n", encoding="utf-8")
print(f"✅  Written: {OUT}  ({len(rows)} files)")
