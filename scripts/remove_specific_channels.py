#!/usr/bin/env python3
"""
删除指定的频道名
"""

from pathlib import Path
from typing import Dict, Set
import yaml

NOTES_DIR = Path("/Users/leipeng/Documents/Projects/thought-foundry/src/notes")

# 要删除的频道名
CHANNELS_TO_REMOVE = {
    '知行小酒馆',
    '三个水枪手',
}


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


def update_frontmatter_remove_channels(frontmatter_raw: str, frontmatter: Dict, channels_to_remove: Set[str]) -> str:
    """从 frontmatter 中移除指定的频道名"""
    lines = frontmatter_raw.split('\n')
    new_lines = []

    current_people = frontmatter.get('people', [])
    if not isinstance(current_people, list):
        current_people = []

    # 过滤掉频道名
    filtered_people = [p for p in current_people if str(p).strip() not in channels_to_remove]

    i = 0
    people_updated = False

    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # 处理 people 字段
        if stripped.startswith('people:'):
            if stripped == 'people: []' or not filtered_people:
                # 空数组
                new_lines.append('people: []')
                people_updated = True
                i += 1
                continue
            else:
                # people 数组在多行
                new_lines.append('people:')
                i += 1

                # 跳过原有的 people 项
                while i < len(lines):
                    next_line = lines[i]
                    if next_line.strip().startswith('- '):
                        i += 1
                    else:
                        break

                # 写入过滤后的 people 数组
                for person in filtered_people:
                    new_lines.append(f'  - {person}')

                people_updated = True
                continue

        new_lines.append(line)
        i += 1

    return '\n'.join(new_lines)


def remove_channels_from_file(file_path: Path, channels_to_remove: Set[str]) -> bool:
    """从文件中移除频道名"""
    try:
        content = file_path.read_text(encoding='utf-8')
        frontmatter, frontmatter_raw, body = parse_frontmatter(content)

        people = frontmatter.get('people', [])
        if not isinstance(people, list):
            return False

        # 检查是否有需要移除的频道名
        has_channels = any(str(p).strip() in channels_to_remove for p in people)
        if not has_channels:
            return False

        # 更新 frontmatter
        new_frontmatter = update_frontmatter_remove_channels(frontmatter_raw, frontmatter, channels_to_remove)

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
    print("开始清理频道名称...")
    print(f"要删除的频道名: {CHANNELS_TO_REMOVE}")
    print()

    # 扫描文件
    md_files = list(NOTES_DIR.glob("*.md"))
    files_to_clean = []

    print(f"扫描 {len(md_files)} 个文件...")

    for md_file in md_files:
        try:
            content = md_file.read_text(encoding='utf-8')
            frontmatter, _, _ = parse_frontmatter(content)

            people = frontmatter.get('people', [])
            if not isinstance(people, list):
                continue

            # 检查是否包含要删除的频道名
            has_channels = any(str(p).strip() in CHANNELS_TO_REMOVE for p in people)
            if has_channels:
                files_to_clean.append(md_file)

        except Exception as e:
            print(f"❌ 扫描错误 {md_file.name}: {e}")

    print(f"找到 {len(files_to_clean)} 个需要清理的文件")
    print()

    # 执行清理
    success_count = 0
    for i, file_path in enumerate(files_to_clean, 1):
        print(f"[{i}/{len(files_to_clean)}] 清理 {file_path.name}...", end=' ')
        if remove_channels_from_file(file_path, CHANNELS_TO_REMOVE):
            print("✓")
            success_count += 1
        else:
            print("✗")

    print()
    print(f"=" * 80)
    print(f"清理完成！成功: {success_count}/{len(files_to_clean)}")
    print(f"=" * 80)


if __name__ == "__main__":
    main()
