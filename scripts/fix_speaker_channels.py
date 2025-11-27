#!/usr/bin/env python3
"""
修复 speaker 字段 - 将频道名放回 speaker
"""

from pathlib import Path
from typing import Dict
import yaml

NOTES_DIR = Path("/Users/leipeng/Documents/Projects/thought-foundry/src/notes")

# 文件到频道名的映射（从之前的报告）
FILE_TO_CHANNEL = {
    # 知行小酒馆 的文件
    'painless_financial_magic_building_personal_finance_system.md': '知行小酒馆',
    'Zhi_Xing_Xiao_Jiu_Guan_E189_Duan_Yongping_and_Your_Life_Philosophy.md': '知行小酒馆',
    'Zhi_Xing_Xiao_Jiu_Guan_E196_Cao_Feng_Ze_No_Required_Course_Life.md': '知行小酒馆',
    'Zhi_Xing_Xiao_Jiu_Guan_E192_AI_Real_Opportunity_in_Real_World_Wang_Hanyang.md': '知行小酒馆',
    'Zhi_Xing_Xiao_Jiu_Guan_E193_One_Person_Unicorn_AI_Era_Wang_Tianfan.md': '知行小酒馆',
    'Zhi_Xing_Xiao_Jiu_Guan_E194_Li_Zhizhong_Cancer_Science_Hope_Interview.md': '知行小酒馆',
    'Zhi_Xing_Xiao_Jiu_Guan_E164_Jim_Simons_The_Man_Who_Conquered_the_Market.md': '知行小酒馆',
    'Zhi_xing_Xiao_Jiu_Guan_E195_Hu_Fo_Xian_Ren_No_Difficult_Thing_Give_Up.md': '知行小酒馆',
    'When_Tariff_Wars_Change_the_World_How_to_Understand_Future_Life_Investment_and_Economic_Order.md': '知行小酒馆',

    # 三个水枪手 的文件
    'E46_Reiterating_Frugality_Under_Fiscal_Crisis_Can_the_Chinese_Government_Really_Live_a_Hard_Life.md': '三个水枪手',
    'In_depth_Discussion_Social_Changes_Behind_the_Surge_in_China_DINK_Proportion_Li_Houchen_Jia_Jia_Wu_Lei.md': '三个水枪手',
    'NotebookLM_AI_Content_Generation_Future.md': '三个水枪手',
    'Monopolized_Right_to_Charity_and_CCP_Hatred_of_Charity.md': '三个水枪手',
    'Reading_Comments_Clearly_Opposing_Intellectual_Poverty_Major_Response_to_June_Fourth_Program_Issues.md': '三个水枪手',
    'E43_AI_Era_Value_of_Humans_and_Job_Replacement.md': '三个水枪手',
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


def update_speaker_field(frontmatter_raw: str, channel_name: str) -> str:
    """更新 speaker 字段为频道名"""
    lines = frontmatter_raw.split('\n')
    new_lines = []

    for line in lines:
        stripped = line.strip()

        # 找到 speaker 字段并更新
        if stripped.startswith('speaker:'):
            new_lines.append(f'speaker: {channel_name}')
        else:
            new_lines.append(line)

    return '\n'.join(new_lines)


def fix_file(file_path: Path, channel_name: str) -> bool:
    """修复单个文件"""
    try:
        content = file_path.read_text(encoding='utf-8')
        frontmatter, frontmatter_raw, body = parse_frontmatter(content)

        # 更新 speaker 字段
        new_frontmatter = update_speaker_field(frontmatter_raw, channel_name)

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
    print("开始修复 speaker 字段...")
    print()

    success_count = 0
    total = len(FILE_TO_CHANNEL)

    for i, (filename, channel) in enumerate(FILE_TO_CHANNEL.items(), 1):
        file_path = NOTES_DIR / filename

        if not file_path.exists():
            print(f"[{i}/{total}] ⚠️  文件不存在: {filename}")
            continue

        print(f"[{i}/{total}] 修复 {filename}...", end=' ')
        print(f"→ speaker: {channel}", end=' ')

        if fix_file(file_path, channel):
            print("✓")
            success_count += 1
        else:
            print("✗")

    print()
    print(f"=" * 80)
    print(f"修复完成！成功: {success_count}/{total}")
    print(f"=" * 80)


if __name__ == "__main__":
    main()
