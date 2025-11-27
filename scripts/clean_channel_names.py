#!/usr/bin/env python3
"""
清理 people 数组中的频道名称

策略：
1. 识别包含频道关键词的条目
2. 按出现频率统计
3. 生成报告供用户确认
4. 批量删除确认的频道名
"""

import re
from pathlib import Path
from typing import Dict, List, Set
from collections import Counter
import yaml

NOTES_DIR = Path("/Users/leipeng/Documents/Projects/thought-foundry/src/notes")

# 频道名关键词（区分大小写）
CHANNEL_KEYWORDS = [
    '小酒馆', '播客', 'Podcast', 'podcast', 'TV',
    '频道', '電視', '电视', 'Show', 'show',
    'Channel', 'channel', 'Radio', 'radio',
    'FM', 'Media', 'media', 'Press', 'press',
    'News', 'news', 'Times', 'Journal',
    '传媒', '媒体', '新闻', '日报', '时报',
    'Productions', 'Studios', 'Network',
    'Best Partners', 'Water Guns', '水枪手',
    'TALK', 'Talk', '看世界',
]


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


def is_likely_channel_name(name: str) -> bool:
    """判断是否可能是频道名"""
    if not name:
        return False

    # 检查是否包含关键词
    for keyword in CHANNEL_KEYWORDS:
        if keyword in name:
            return True

    # 检查是否包含特定符号（常见于频道名）
    if any(char in name for char in ['®', '™', '©', '【', '】']):
        return True

    return False


def scan_channel_names():
    """扫描所有可能的频道名"""
    channel_names = []
    file_map = {}  # channel_name -> [file_paths]

    md_files = list(NOTES_DIR.glob("*.md"))
    print(f"扫描 {len(md_files)} 个文件...\n")

    for md_file in md_files:
        try:
            content = md_file.read_text(encoding='utf-8')
            frontmatter, _, _ = parse_frontmatter(content)

            people = frontmatter.get('people', [])
            if not isinstance(people, list):
                continue

            for person in people:
                person_str = str(person).strip()
                if is_likely_channel_name(person_str):
                    channel_names.append(person_str)

                    if person_str not in file_map:
                        file_map[person_str] = []
                    file_map[person_str].append(md_file.name)

        except Exception as e:
            print(f"❌ 错误处理 {md_file.name}: {e}")

    return channel_names, file_map


def print_report(channel_names: List[str], file_map: Dict[str, List[str]]):
    """打印报告"""
    if not channel_names:
        print("✅ 未找到可能的频道名称")
        return

    # 统计频率
    counter = Counter(channel_names)
    sorted_channels = counter.most_common()

    print(f"=" * 80)
    print(f"找到 {len(sorted_channels)} 个可能的频道名称")
    print(f"=" * 80)
    print()

    for i, (channel, count) in enumerate(sorted_channels, 1):
        print(f"{i}. '{channel}' - 出现 {count} 次")
        # 显示前 3 个文件示例
        example_files = file_map[channel][:3]
        for file_name in example_files:
            print(f"   - {file_name}")
        if len(file_map[channel]) > 3:
            print(f"   ... 还有 {len(file_map[channel]) - 3} 个文件")
        print()

    print(f"=" * 80)
    print(f"总计: {len(sorted_channels)} 个可能的频道名称")
    print(f"=" * 80)


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
    import sys

    print("开始扫描频道名称...")
    print()

    channel_names, file_map = scan_channel_names()
    print_report(channel_names, file_map)

    if not channel_names:
        return

    # 保存报告
    report_file = NOTES_DIR / "channel_names_report.txt"
    with open(report_file, 'w', encoding='utf-8') as f:
        counter = Counter(channel_names)
        sorted_channels = counter.most_common()

        f.write(f"找到 {len(sorted_channels)} 个可能的频道名称\n")
        f.write("=" * 80 + "\n\n")

        for i, (channel, count) in enumerate(sorted_channels, 1):
            f.write(f"{i}. '{channel}' - 出现 {count} 次\n")
            for file_name in file_map[channel]:
                f.write(f"   - {file_name}\n")
            f.write("\n")

    print(f"\n完整报告已保存到: {report_file}")
    print()

    # 是否执行清理
    if '--clean' in sys.argv or '-c' in sys.argv:
        print("=" * 80)
        print("开始清理频道名称...")
        print("=" * 80)
        print()

        # 获取所有唯一的频道名
        channels_to_remove = set(channel_names)

        success_count = 0
        total_files = len(file_map)

        for i, (channel, files) in enumerate(file_map.items(), 1):
            for file_name in files:
                file_path = NOTES_DIR / file_name
                if remove_channels_from_file(file_path, channels_to_remove):
                    success_count += 1

        print(f"\n清理完成！成功处理: {success_count} 个文件")
    else:
        print("提示：运行 'python clean_channel_names.py --clean' 来执行清理")


if __name__ == "__main__":
    main()
