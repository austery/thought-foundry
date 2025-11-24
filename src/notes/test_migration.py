#!/usr/bin/env python3
"""
测试迁移脚本 - 在一个文件上测试，不写入
"""

from pathlib import Path
from execute_migration import parse_frontmatter, should_migrate, update_frontmatter

NOTES_DIR = Path("/Users/leipeng/Documents/Projects/thought-foundry/src/notes")

# 找一个需要迁移的文件
test_file = NOTES_DIR / "When_Tariff_Wars_Change_the_World_How_to_Understand_Future_Life_Investment_and_Economic_Order.md"

if not test_file.exists():
    # 如果文件不存在，找第一个需要迁移的
    for md_file in NOTES_DIR.glob("*.md"):
        content = md_file.read_text(encoding='utf-8')
        frontmatter, _, _ = parse_frontmatter(content)
        needs_migration, _ = should_migrate(frontmatter)
        if needs_migration:
            test_file = md_file
            break

print(f"测试文件: {test_file.name}")
print("=" * 80)

# 读取内容
content = test_file.read_text(encoding='utf-8')
frontmatter, frontmatter_raw, body = parse_frontmatter(content)

# 显示原始 frontmatter
print("原始 frontmatter:")
print("---")
print(frontmatter_raw)
print("---")
print()

# 检查是否需要迁移
needs_migration, people_to_add = should_migrate(frontmatter)

if not needs_migration:
    print("此文件不需要迁移")
else:
    print(f"需要添加到 people: {people_to_add}")
    print()

    # 生成新的 frontmatter
    new_frontmatter = update_frontmatter(frontmatter_raw, frontmatter, people_to_add)

    print("新的 frontmatter:")
    print("---")
    print(new_frontmatter)
    print("---")
