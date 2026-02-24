import os
import frontmatter
from pathlib import Path
from typing import List, Dict, Any

# 配置检查路径
CHECK_PATHS = ["src/notes", "src/posts"]

# 目标字段
TARGET_FIELDS = ["summary", "tags", "area", "speaker"]

def is_empty(value: Any) -> bool:
    """检查字段是否为空、仅为空格或为空列表/None"""
    if value is None:
        return True
    if isinstance(value, str):
        return not value.strip()
    if isinstance(value, list):
        return len(value) == 0
    return False

def audit_files():
    report = []
    stats = {field: 0 for field in TARGET_FIELDS}
    total_files = 0

    print(f"开始检查目录: {', '.join(CHECK_PATHS)} ...")

    for base_path in CHECK_PATHS:
        path = Path(base_path)
        if not path.exists():
            continue
            
        for file_path in path.glob("**/*.md"):
            total_files += 1
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    post = frontmatter.load(f)
                
                missing = []
                for field in TARGET_FIELDS:
                    val = post.metadata.get(field)
                    if is_empty(val):
                        missing.append(field)
                        stats[field] += 1
                
                if missing:
                    report.append({
                        "file": str(file_path),
                        "missing_fields": missing,
                        "current_metadata": post.metadata
                    })
            except Exception as e:
                print(f"错误: 无法解析 {file_path} - {e}")

    # 输出统计结果
    print("
" + "="*50)
    print("检查完成！统计报告：")
    print(f"总检查文件数: {total_files}")
    for field, count in stats.items():
        print(f"缺失/为空的 {field:10}: {count} 个")
    print("="*50 + "
")

    if report:
        print("以下是前 10 个有问题的文件示例：")
        for i, item in enumerate(report[:10]):
            print(f"[{i+1}] 文件: {item['file']}")
            print(f"    缺失字段: {', '.join(item['missing_fields'])}")
            # 打印一下当前的元数据样子，方便你查看“是什么样的”
            relevant_data = {k: item['current_metadata'].get(k) for k in TARGET_FIELDS}
            print(f"    当前数据: {relevant_data}")
        
        if len(report) > 10:
            print(f"
... 还有 {len(report) - 10} 个文件有问题。")
    else:
        print("太棒了！所有文件的关键字段都已填全。")

if __name__ == "__main__":
    audit_files()
