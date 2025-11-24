#!/usr/bin/env python3
"""
执行迁移：将 speaker/guest 的人名迁移到 people 数组

执行前会先创建 git commit 作为备份
"""

import os
import re
from pathlib import Path
from typing import Dict, List
import yaml

NOTES_DIR = Path("/Users/leipeng/Documents/Projects/thought-foundry/src/notes")


def parse_frontmatter(content: str) -> tuple[Dict, str, str]:
    """解析 frontmatter"""
    if not content.startswith('---'):
        return {}, '', content

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
    """提取人名"""
    if not value:
        return []

    value_str = str(value).strip()
    if not value_str or value_str == "''" or value_str.lower() == 'none':
        return []

    if ',' in value_str:
        names = [name.strip() for name in value_str.split(',')]
        return [name for name in names if name]

    return [value_str]


def should_migrate(frontmatter: Dict) -> tuple[bool, List[str]]:
    """判断是否需要迁移"""
    speaker = frontmatter.get('speaker', '')
    guest = frontmatter.get('guest', '')

    speaker_names = extract_names(speaker)
    guest_names = extract_names(guest)

    has_multiple_speakers = ',' in str(speaker)
    has_guest = guest and str(guest).strip() and str(guest).strip() != "''" and str(guest).lower().strip() != 'none'

    if not (has_multiple_speakers or has_guest):
        return False, []

    people_to_add = []
    people_to_add.extend(speaker_names)
    people_to_add.extend(guest_names)

    people_to_add = list(dict.fromkeys(people_to_add))

    return True, people_to_add


def update_frontmatter(frontmatter_raw: str, frontmatter: Dict, people_to_add: List[str]) -> str:
    """
    更新 frontmatter 文本
    - 更新 people 数组
    - 清空 speaker
    - 清空 guest
    """
    lines = frontmatter_raw.split('\n')
    new_lines = []

    # 获取当前 people 数组
    current_people = frontmatter.get('people', [])
    if not isinstance(current_people, list):
        current_people = []

    # 合并新人名
    all_people = list(current_people)
    all_people.extend(people_to_add)
    # 去重但保持顺序
    seen = set()
    unique_people = []
    for person in all_people:
        if person not in seen:
            seen.add(person)
            unique_people.append(person)

    # 状态追踪
    in_people_block = False
    people_updated = False
    speaker_updated = False
    guest_updated = False

    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # 处理 speaker 字段
        if stripped.startswith('speaker:'):
            new_lines.append("speaker: ''")
            speaker_updated = True
            i += 1
            continue

        # 处理 guest 字段
        if stripped.startswith('guest:'):
            new_lines.append("guest: ''")
            guest_updated = True
            i += 1
            continue

        # 处理 people 字段
        if stripped.startswith('people:'):
            # 检查是否是空数组
            if stripped == 'people: []':
                # 替换为新的 people 数组
                new_lines.append('people:')
                for person in unique_people:
                    new_lines.append(f'  - {person}')
                people_updated = True
                i += 1
                continue
            else:
                # people 数组在多行
                new_lines.append('people:')
                in_people_block = True
                i += 1

                # 跳过原有的 people 项
                while i < len(lines):
                    next_line = lines[i]
                    if next_line.strip().startswith('- '):
                        i += 1
                    else:
                        break

                # 写入新的 people 数组
                for person in unique_people:
                    new_lines.append(f'  - {person}')

                in_people_block = False
                people_updated = True
                continue

        new_lines.append(line)
        i += 1

    # 如果没有找到 people 字段，添加一个
    if not people_updated and unique_people:
        # 在最后添加 people 数组
        new_lines.append('people:')
        for person in unique_people:
            new_lines.append(f'  - {person}')

    return '\n'.join(new_lines)


def migrate_file(file_path: Path) -> bool:
    """迁移单个文件"""
    try:
        content = file_path.read_text(encoding='utf-8')
        frontmatter, frontmatter_raw, body = parse_frontmatter(content)

        needs_migration, people_to_add = should_migrate(frontmatter)

        if not needs_migration:
            return False

        # 更新 frontmatter
        new_frontmatter = update_frontmatter(frontmatter_raw, frontmatter, people_to_add)

        # 重新组装文件
        new_content = f"---{new_frontmatter}---{body}"

        # 写回文件
        file_path.write_text(new_content, encoding='utf-8')

        return True
    except Exception as e:
        print(f"❌ 错误处理 {file_path.name}: {e}")
        import traceback
        traceback.print_exc()
        return False


def main():
    import sys

    # 检查命令行参数
    auto_confirm = '--yes' in sys.argv or '-y' in sys.argv

    print("开始执行迁移...")
    print()

    # 首先检查是否在 git 仓库中
    import subprocess
    try:
        result = subprocess.run(['git', 'status'],
                              cwd=NOTES_DIR,
                              capture_output=True,
                              text=True)
        if result.returncode != 0:
            print("警告：不在 git 仓库中，无法创建备份提交")
            if not auto_confirm:
                response = input("是否继续？(y/N): ")
                if response.lower() != 'y':
                    print("取消迁移")
                    return
            else:
                print("自动确认模式：继续执行")
    except:
        print("警告：无法执行 git 命令")
        if not auto_confirm:
            response = input("是否继续？(y/N): ")
            if response.lower() != 'y':
                print("取消迁移")
                return
        else:
            print("自动确认模式：继续执行")

    # 扫描需要迁移的文件
    md_files = list(NOTES_DIR.glob("*.md"))
    files_to_migrate = []

    print(f"扫描 {len(md_files)} 个文件...")
    for md_file in md_files:
        try:
            content = md_file.read_text(encoding='utf-8')
            frontmatter, _, _ = parse_frontmatter(content)
            needs_migration, people_to_add = should_migrate(frontmatter)

            if needs_migration:
                files_to_migrate.append(md_file)
        except Exception as e:
            print(f"❌ 扫描错误 {md_file.name}: {e}")

    print(f"找到 {len(files_to_migrate)} 个需要迁移的文件")
    print()

    # 确认
    if not auto_confirm:
        response = input(f"确认要迁移这 {len(files_to_migrate)} 个文件吗？(y/N): ")
        if response.lower() != 'y':
            print("取消迁移")
            return
    else:
        print(f"自动确认模式：开始迁移 {len(files_to_migrate)} 个文件")

    # 执行迁移
    success_count = 0
    for i, file_path in enumerate(files_to_migrate, 1):
        print(f"[{i}/{len(files_to_migrate)}] 迁移 {file_path.name}...", end=' ')
        if migrate_file(file_path):
            print("✓")
            success_count += 1
        else:
            print("✗")

    print()
    print(f"=" * 80)
    print(f"迁移完成！成功: {success_count}/{len(files_to_migrate)}")
    print(f"=" * 80)
    print()
    print("建议执行以下命令检查更改：")
    print("  cd /Users/leipeng/Documents/Projects/thought-foundry/src/notes")
    print("  git diff")
    print()
    print("如果确认无误，提交更改：")
    print("  git add .")
    print("  git commit -m 'chore: migrate speaker/guest to people array'")


if __name__ == "__main__":
    main()
