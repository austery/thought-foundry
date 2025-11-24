#!/usr/bin/env python3
"""
扫描并迁移文章的 speaker/guest 到 people 数组

新规则（方案 B）：
1. speaker 所有值（包括单个）都加入 people
2. guest 所有值都加入 people
3. 保留已有的 people 数组，新人名合并进去（去重）
4. 清空 guest = ''
5. 清空 speaker = ''
6. 保持 channel 字段不变
"""

import os
import re
from pathlib import Path
from typing import Dict, List, Set
import yaml

NOTES_DIR = Path("/Users/leipeng/Documents/Projects/thought-foundry/src/notes")


def parse_frontmatter(content: str) -> tuple[Dict, str, str]:
    """
    解析 markdown 文件的 frontmatter
    返回: (frontmatter_dict, frontmatter_raw, body)
    """
    if not content.startswith('---'):
        return {}, '', content

    # 找到第二个 ---
    parts = content.split('---', 2)
    if len(parts) < 3:
        return {}, '', content

    frontmatter_raw = parts[1]
    body = parts[2]

    try:
        frontmatter = yaml.safe_load(frontmatter_raw)
        if not isinstance(frontmatter, dict):
            frontmatter = {}
    except:
        frontmatter = {}

    return frontmatter, frontmatter_raw, body


def extract_names(value) -> List[str]:
    """
    从字段值中提取人名
    如果包含逗号，按逗号分割；否则返回单个值
    """
    if not value:
        return []

    value_str = str(value).strip()
    if not value_str or value_str == "''" or value_str.lower() == 'none':
        return []

    # 如果包含逗号，分割
    if ',' in value_str:
        names = [name.strip() for name in value_str.split(',')]
        return [name for name in names if name]

    # 单个值也返回
    return [value_str]


def should_migrate(frontmatter: Dict) -> tuple[bool, List[str]]:
    """
    判断是否需要迁移，并返回需要添加到 people 的人名

    只处理旧格式文章：
    - speaker 包含逗号（多个人名）
    - 或 guest 有值

    对于这些文章：把 speaker 和 guest 的所有人名都加到 people
    """
    speaker = frontmatter.get('speaker', '')
    guest = frontmatter.get('guest', '')

    # 提取人名
    speaker_names = extract_names(speaker)
    guest_names = extract_names(guest)

    # 判断是否是旧格式（需要迁移）
    has_multiple_speakers = ',' in str(speaker)
    has_guest = guest and str(guest).strip() and str(guest).strip() != "''" and str(guest).lower().strip() != 'none'

    if not (has_multiple_speakers or has_guest):
        return False, []

    # 合并所有人名
    people_to_add = []
    people_to_add.extend(speaker_names)
    people_to_add.extend(guest_names)

    # 去重但保持顺序
    people_to_add = list(dict.fromkeys(people_to_add))

    return True, people_to_add


def scan_files():
    """扫描所有文件，生成报告"""
    files_to_migrate = []

    md_files = list(NOTES_DIR.glob("*.md"))
    print(f"扫描 {len(md_files)} 个文件...\n")

    for md_file in md_files:
        try:
            content = md_file.read_text(encoding='utf-8')
            frontmatter, _, _ = parse_frontmatter(content)

            needs_migration, people_to_add = should_migrate(frontmatter)

            if needs_migration:
                files_to_migrate.append({
                    'file': md_file.name,
                    'speaker': frontmatter.get('speaker', ''),
                    'guest': frontmatter.get('guest', ''),
                    'current_people': frontmatter.get('people', []),
                    'people_to_add': people_to_add
                })
        except Exception as e:
            print(f"❌ 错误处理 {md_file.name}: {e}")

    return files_to_migrate


def print_report(files_to_migrate: List[Dict]):
    """打印报告"""
    print(f"=" * 80)
    print(f"找到 {len(files_to_migrate)} 个需要迁移的文件")
    print(f"=" * 80)
    print()

    # 显示前 20 个示例
    for i, file_info in enumerate(files_to_migrate[:20], 1):
        print(f"{i}. {file_info['file']}")
        print(f"   speaker: {file_info['speaker']}")
        print(f"   guest: {file_info['guest']}")
        print(f"   当前 people: {file_info['current_people']}")
        print(f"   → 将添加到 people: {file_info['people_to_add']}")
        print()

    if len(files_to_migrate) > 20:
        print(f"... 还有 {len(files_to_migrate) - 20} 个文件")
        print()

    print(f"=" * 80)
    print(f"总计: {len(files_to_migrate)} 个文件需要迁移")
    print(f"=" * 80)


def main():
    print("开始扫描文件...")
    print()

    files_to_migrate = scan_files()
    print_report(files_to_migrate)

    # 保存完整报告到文件
    report_file = NOTES_DIR / "migration_report.txt"
    with open(report_file, 'w', encoding='utf-8') as f:
        f.write(f"需要迁移的文件总数: {len(files_to_migrate)}\n")
        f.write("=" * 80 + "\n\n")

        for i, file_info in enumerate(files_to_migrate, 1):
            f.write(f"{i}. {file_info['file']}\n")
            f.write(f"   speaker: {file_info['speaker']}\n")
            f.write(f"   guest: {file_info['guest']}\n")
            f.write(f"   当前 people: {file_info['current_people']}\n")
            f.write(f"   → 将添加到 people: {file_info['people_to_add']}\n")
            f.write("\n")

    print(f"\n完整报告已保存到: {report_file}")


if __name__ == "__main__":
    main()
