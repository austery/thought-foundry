# /// script
# dependencies = [
#   "python-frontmatter",
#   "pandas",
#   "pyyaml",
# ]
# ///

import os
import glob
import frontmatter
import pandas as pd
import json
import argparse
from pathlib import Path
from collections import Counter
from typing import Dict, List, Any

# --- Configuration ---
DEFAULT_PATHS = [
    "src/posts",
    "src/notes",
    "src/books"
]

# Fields to extract and analyze
LIST_FIELDS = ["tags", "people", "companies_orgs", "products_models", "media_books", "project"]
SCALAR_FIELDS = ["category", "area", "series", "layout", "prompt", "speaker", "author"]

def scan_files(base_dir: str, paths: List[str]) -> List[Dict[str, Any]]:
    """Scans MD files and returns a list of file metadata dicts."""
    all_data = []
    
    for relative_path in paths:
        search_path = os.path.join(base_dir, relative_path, "**/*.md")
        files = glob.glob(search_path, recursive=True)
        
        print(f"Scanning {relative_path}... Found {len(files)} files.")
        
        for file_path in files:
            try:
                post = frontmatter.load(file_path)
                data = post.metadata
                
                # Basic file info
                entry = {
                    "filepath": file_path,
                    "filename": os.path.basename(file_path),
                    "dir_source": relative_path
                }
                
                # Extract List Fields (flattened for CSV, kept raw for JSON if needed)
                for field in LIST_FIELDS:
                    val = data.get(field, [])
                    if isinstance(val, str): # Handle accidental strings
                        val = [val]
                    if val is None:
                        val = []
                    entry[field] = val
                    
                # Extract Scalar Fields
                for field in SCALAR_FIELDS:
                    entry[field] = data.get(field, None)
                
                all_data.append(entry)
                
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
                
    return all_data

def analyze_data(data: List[Dict[str, Any]], output_dir: str):
    """Analyzes the extracted data and produces reports."""
    
    # 1. Frequency Analysis for all fields
    stats = {}
    
    # Flatten list fields for counting
    for field in LIST_FIELDS:
        all_values = []
        for entry in data:
            all_values.extend(entry[field])
        # Normalize (lowercase, strip)
        # We assume values are strings. If complex objects, skip or stringify.
        normalized_values = [str(v).strip() for v in all_values if v] 
        stats[field] = Counter(normalized_values).most_common()

    # Initial Scalar counting
    for field in SCALAR_FIELDS:
        all_values = [str(entry[field]).strip() for entry in data if entry[field]]
        stats[field] = Counter(all_values).most_common()

    # 2. Generate Audit Report JSON (Top 50 for overview)
    report = {
        "file_count": len(data),
        "field_stats": {
            k: v[:50] for k, v in stats.items()
        }
    }
    
    report_path = os.path.join(output_dir, "audit_report.json")
    with open(report_path, "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    print(f"Generated Audit Report: {report_path}")

    # 3. Generate Detailed Inventory CSV
    # We want a "Long Format" CSV: Type | Value | Count
    inventory_rows = []
    
    for field, counter_list in stats.items():
        for value, count in counter_list:
            inventory_rows.append({
                "type": field,
                "value": value,
                "count": count
            })
            
    df_inventory = pd.DataFrame(inventory_rows)
    inventory_path = os.path.join(output_dir, "entity_inventory.csv")
    df_inventory.to_csv(inventory_path, index=False)
    print(f"Generated Entity Inventory: {inventory_path}")
    
    # 4. Raw Data Dump (Optional, good for debugging)
    # pd.DataFrame(data).to_csv(os.path.join(output_dir, "raw_metadata.csv"), index=False)

def main():
    parser = argparse.ArgumentParser(description="Audit Knowledge Base Metadata")
    parser.add_argument("--root", default=".", help="Project root directory")
    args = parser.parse_args()
    
    print(f"Starting Knowledge Base Audit in: {os.path.abspath(args.root)}")
    
    data = scan_files(args.root, DEFAULT_PATHS)
    
    if not data:
        print("No files found. Exiting.")
        return

    analyze_data(data, args.root)
    print("Audit Complete.")

if __name__ == "__main__":
    main()
