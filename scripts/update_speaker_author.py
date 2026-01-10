#!/usr/bin/env python3
"""
批量更新 markdown 文件中的 author 和 speaker 字段
支持通过命令行参数指定原始名称和目标名称
"""

import os
import re
import argparse
from pathlib import Path

def update_file(file_path, old_name, new_name, dry_run=False):
    """更新单个文件中的 author 和 speaker 字段"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"❌ 无法读取文件 {file_path}: {e}")
        return False

    # 检查文件是否有 frontmatter
    if not content.startswith('---'):
        return False

    # 分离 frontmatter 和内容
    parts = content.split('---', 2)
    if len(parts) < 3:
        return False

    frontmatter = parts[1]
    body = parts[2]

    # 替换 author 和 speaker 字段
    original_frontmatter = frontmatter
    
    # 动态生成正则模式，转义特殊字符以安全替换
    old_escaped = re.escape(old_name)
    
    frontmatter = re.sub(
        rf'^author:\s*{old_escaped}\s*$',
        f'author: {new_name}',
        frontmatter,
        flags=re.MULTILINE
    )
    frontmatter = re.sub(
        rf'^speaker:\s*{old_escaped}\s*$',
        f'speaker: {new_name}',
        frontmatter,
        flags=re.MULTILINE
    )

    # 如果有更改，写回文件
    if frontmatter != original_frontmatter:
        if dry_run:
            print(f"🔍 [Dry Run] 将更新: {file_path.name}")
            return True
            
        new_content = f'---{frontmatter}---{body}'
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True

    return False

def main():
    """主函数：解析参数并遍历文件"""
    parser = argparse.ArgumentParser(description="批量更新 Markdown 文件中的 author 和 speaker 字段")
    parser.add_argument("old", help="要替换的原始名字")
    parser.add_argument("new", help="替换后的新名字")
    parser.add_argument("--dry-run", action="store_true", help="预览更改，不实际修改文件")
    parser.add_argument("--dirs", nargs="+", default=["src/notes", "src/posts"], 
                        help="要检查的目录列表（默认: src/notes src/posts）")

    args = parser.parse_args()

    dirs_to_check = [Path(d) for d in args.dirs]
    updated_count = 0
    total_count = 0
    
    print(f"正在将 '{args.old}' 替换为 '{args.new}'...")
    if args.dry_run:
        print("⚠️ 模式: Dry Run (不实际修改文件)")

    for check_dir in dirs_to_check:
        if not check_dir.exists():
            print(f"警告：目录 {check_dir} 不存在，跳过")
            continue
            
        print(f"正在扫描: {check_dir}")
        # 遍历所有 .md 文件
        for md_file in check_dir.glob('*.md'):
            total_count += 1
            if update_file(md_file, args.old, args.new, args.dry_run):
                updated_count += 1
                if not args.dry_run:
                    print(f"✓ 已更新: {md_file.name}")

    print(f"\n完成！")
    print(f"总共检查了 {total_count} 个文件")
    if args.dry_run:
        print(f"预计将更新 {updated_count} 个文件")
    else:
        print(f"实际更新了 {updated_count} 个文件")

if __name__ == '__main__':
    main()
