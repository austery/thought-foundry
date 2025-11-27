import os
import frontmatter
import yaml

# --- Configuration based on prompt_zh.md v3.2 ---

VALID_AREAS = {
    "market-analysis",
    "tech-insights",
    "society-systems",
    "personal-systems", # Replaces personal-growth
    "digital-garden"
}

VALID_CATEGORIES = {
    "geopolitics",
    "finance",
    "business",
    "technology",
    "psychology",
    "productivity",
    "career",
    "science",
    "general",
    "culture",
    "lifestyle"
}

# Only checking "Core" and "Emerging" projects as strict requirements might be too harsh,
# but let's check against the provided list to flag potential legacy ones.
VALID_PROJECTS = {
    "china-analysis", "us-analysis", "investment-strategy", "ai-impact-analysis",
    "systems-thinking", "personal-growth-lab", "knowledge-pipeline", "pkm-research",
    "entrepreneurship", "vibe-coding", "geopolitics-watch", "fire-movement",
    "historical-insights", "cultural-critique", "market-cycles"
}

NOTES_DIR = "src/notes"
OUTPUT_REPORT = "docs/v3_compliance_audit.md"

def check_file(filepath):
    try:
        post = frontmatter.load(filepath)
    except Exception as e:
        return {"status": "error", "msg": str(e)}

    meta = post.metadata
    issues = []
    
    # 1. Check Area
    area = meta.get("area")
    if not area:
        issues.append("MISSING_AREA")
    elif area not in VALID_AREAS:
        issues.append(f"INVALID_AREA: {area}")

    # 2. Check Category
    category = meta.get("category")
    if not category:
        issues.append("MISSING_CATEGORY")
    elif category not in VALID_CATEGORIES:
        issues.append(f"INVALID_CATEGORY: {category}")

    # 3. Check Projects (Optional but check validity if present)
    projects = meta.get("project")
    if projects:
        if isinstance(projects, str):
            projects = [projects]
        
        for p in projects:
            if p not in VALID_PROJECTS:
                # We mark this as a warning, not a hard missing error
                issues.append(f"LEGACY_PROJECT: {p}")

    # 4. Check Content Fields
    if not meta.get("summary"):
        issues.append("MISSING_SUMMARY")
    
    if not meta.get("speaker"):
        issues.append("MISSING_SPEAKER")

    # 5. Check Entities (Basic existence check)
    # We look for at least one entity field being populated to consider it "Rich"
    has_entities = False
    for key in ['people', 'companies_orgs', 'products_models', 'media_books']:
        if meta.get(key) and len(meta.get(key)) > 0:
            has_entities = True
            break
    
    if not has_entities:
        issues.append("NO_ENTITIES")

    return {
        "status": "processed",
        "filename": os.path.basename(filepath),
        "issues": issues,
        "area": area,
        "category": category
    }

def main():
    if not os.path.exists(NOTES_DIR):
        print(f"Directory not found: {NOTES_DIR}")
        return

    results = []
    
    print(f"Auditing {NOTES_DIR} against v3.2 Schema...")
    
    for root, dirs, files in os.walk(NOTES_DIR):
        for file in files:
            if file.endswith(".md"):
                filepath = os.path.join(root, file)
                res = check_file(filepath)
                if res["status"] == "processed":
                    results.append(res)

    # Sort results: "Broken" first (Missing Area/Cat), then "Legacy", then "Incomplete"
    results.sort(key=lambda x: x['filename'])

    # Generate Report
    with open(OUTPUT_REPORT, "w", encoding="utf-8") as f:
        f.write("# Thought Foundry - Content Schema Audit (v3.2)\n\n")
        f.write(f"**Total Files Scanned:** {len(results)}\n\n")
        
        # 1. Critical: Missing Classification (Area/Category)
        critical = [r for r in results if any("MISSING_" in i for i in r['issues'] if "AREA" in i or "CATEGORY" in i)]
        f.write(f"## 🔴 Critical: Missing Classification ({len(critical)})\n")
        f.write("*Action: Must re-process these files to determine Area and Category.*\n\n")
        f.write("| Filename | Issues |\n| --- | --- |\n")
        for r in critical:
            f.write(f"| `{r['filename']}` | {', '.join(r['issues'])} |\n")
        
        # 2. Warning: Invalid/Legacy Classification
        warning = [r for r in results if any("INVALID_" in i or "LEGACY_" in i for i in r['issues']) and r not in critical]
        f.write(f"\n## 🟠 Warning: Legacy/Invalid Values ({len(warning)})\n")
        f.write("*Action: Update these values to match v3.2 standard (e.g., rename 'china-affairs' to 'china-analysis').*\n\n")
        f.write("| Filename | Current Area | Current Category | Issues |\n| --- | --- | --- | --- |\n")
        for r in warning:
            issues_str = ', '.join([i for i in r['issues'] if 'INVALID' in i or 'LEGACY' in i])
            f.write(f"| `{r['filename']}` | `{r.get('area', '-')}` | `{r.get('category', '-')}` | {issues_str} |\n")

        # 3. Incomplete: Missing Meta (Summary, Speaker, Entities) but Classification OK
        incomplete = [r for r in results if (r not in critical and r not in warning) and len(r['issues']) > 0]
        f.write(f"\n## 🟡 Incomplete Metadata ({len(incomplete)})\n")
        f.write("*Action: These are classified correctly but miss Summary, Speaker, or Entities. Good candidates for 'Metadata Enrichment' pass.*\n\n")
        f.write("| Filename | Missing Fields |\n| --- | --- |\n")
        for r in incomplete:
            missing = [i.replace("MISSING_", "").replace("NO_", "No ") for i in r['issues']]
            f.write(f"| `{r['filename']}` | {', '.join(missing)} |\n")

        # 4. Compliant
        clean = [r for r in results if len(r['issues']) == 0]
        f.write(f"\n## 🟢 Fully Compliant v3.2 ({len(clean)})\n")
        f.write("*These files meet all current schema requirements.*\n\n")
        if len(clean) > 0:
            f.write(f"Count: {len(clean)} files.\n")

    print(f"Audit complete. Report saved to: {OUTPUT_REPORT}")

if __name__ == "__main__":
    main()
