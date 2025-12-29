#!/usr/bin/env python3
"""
批量更新 markdown 文件中的 author 和 speaker 字段
将 "Best Partners TV" 替换为 "最佳拍档"
"""

import os
import re
from pathlib import Path

def update_file(file_path):
    """更新单个文件中的 author 和 speaker 字段"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

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
    frontmatter = re.sub(
        r'^author:\s*一口新饭读书会\s*$',
        'author: 一口新飯社群',
        frontmatter,
        flags=re.MULTILINE
    )
    frontmatter = re.sub(
        r'^speaker:\s*一口新饭读书会\s*$',
        'speaker: 一口新飯社群',
        frontmatter,
        flags=re.MULTILINE
    )

    # 如果有更改，写回文件
    if frontmatter != original_frontmatter:
        new_content = f'---{frontmatter}---{body}'
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True

    return False

def main():
    """主函数：遍历所有 markdown 文件并更新"""
    dirs_to_check = [Path('src/notes'), Path('src/posts')]
    updated_count = 0
    total_count = 0
    
    for check_dir in dirs_to_check:
        if not check_dir.exists():
            print(f"警告：目录 {check_dir} 不存在，跳过")
            continue
            
        print(f"正在扫描: {check_dir}")
        # 遍历所有 .md 文件
        for md_file in check_dir.glob('*.md'):
            total_count += 1
            if update_file(md_file):
                updated_count += 1
                print(f"✓ 已更新: {md_file.name}")

    print(f"\n完成！")
    print(f"总共检查了 {total_count} 个文件")
    print(f"更新了 {updated_count} 个文件")

if __name__ == '__main__':
    main()
