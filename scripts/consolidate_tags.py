# -*- coding: utf-8 -*-
"""
标签清洗与归并脚本 (Tag Consolidation and Entity Extraction Script)

这个脚本实现三步标签清理流程：
1. 实体提取（Entity Extraction）：将人名、公司、产品、媒体从tags移到对应的metadata字段
2. 时效性标签删除（Temporal Purge）：删除时效性的新闻事件标签
3. 概念标签归并（Consolidate）：合并同义词、统一语言和格式

使用方法：
    python consolidate_tags.py --dry-run        # 预览模式
    python consolidate_tags.py --fix            # 实际执行
    python consolidate_tags.py --fix --limit 10 # 限制处理文件数
"""

import os
import frontmatter
import argparse
import yaml
from collections import Counter

# --- CONFIGURATION ---
NOTES_DIR = "src/notes"
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
ABS_NOTES_DIR = os.path.join(ROOT_DIR, NOTES_DIR)

# ----------------------------------------------------------------------------
# 第一步：实体识别集合 - 这些将从 tags 移到对应的 metadata 字段
# ----------------------------------------------------------------------------

# 从tag_processor.py提取的实体列表，这些应该被提取到metadata字段
PEOPLE_ENTITIES = {
    "adam-s-axiom", "amit-kukreja", "andrew-ng", "andrew-ross-sorkin", "anthony",
    "ari-morcos", "benedict-evans", "bill-ackman", "bryan-johnson", "charlie-jarvis",
    "charlie-kirk", "charlie-munger", "chris-hohn", "dalai-lama", "demis-hassabis",
    "denny-zhou", "donald-trump", "elena-ferrante", "elizabeth-holmes", "elon-musk",
    "fei-fei-li", "forrest-li", "geoffrey-hinton", "george-kinder", "harald-lesch",
    "howard-lutnick", "hu-hanmin", "hulk-hogan", "ilya-sutskever", "jean-paul-sartre",
    "jeff-bezos", "jeff-dean", "jeffrey-epstein", "jerome-powell", "joe-biden",
    "john-mcwhorter", "joseph-wang", "judea-pearl", "julian-treasure", "kamala-harris",
    "ken-griffin", "kevinfeng", "leo-tolstoy", "leopold-aschenbrenner", "li-xiaojia",
    "lt", "luo-yonghao", "mario-vargas-llosa", "michael-jordan", "nickmaggiulli",
    "nicola-willis", "paul-johnson", "paul-tudor-jones", "peter-santenello",
    "peter-thiel", "qin-hui", "qiu-jin", "rafael-trujillo", "rene-girard",
    "richard-dawkins", "richard-hamming", "richard-sutton", "roberto-bolano",
    "rodney-brooks", "rousseau", "sam-altman", "sarah-kay", "song-jiaoren",
    "stella-an", "stephen-king", "stephen-wolfram", "steven-a-cohen", "steven-cohen",
    "steven-kotler", "sunny-balwani", "taylor-swift", "tom-homeman", "tony-seba",
    "trump", "tulsi-gabbard", "tyler-shultz", "virginia-woolf", "wang-jianlin",
    "wang-yangming", "warren-buffett", "wen-jiabao", "xi-jinping", "yann-lecun",
    "yixi", "yoshua-bengio", "yuval-noah-harari", "zhang-xuefeng", "zohran-mamdani",
}

COMPANIES_ENTITIES = {
    "a16z", "airbnb", "alo-yoga", "amazon", "amd", "anthropic", "apple", "asml",
    "atai-life-sciences", "axon", "bank-of-america", "berkshire-hathaway",
    "blackrock", "blackstone", "blue-origin", "canada-post", "citigroup",
    "coca-cola", "databricks", "deepmind", "dell", "equifax", "facebook",
    "fastenal", "fedex", "figma", "google", "github", "grayzone-news",
    "huma-finance", "ibm", "indigo", "intel", "jpmorgan-chase", "lam-research",
    "levi-strauss", "lululemon", "lumen-technologies", "meta", "microsoft", "mit",
    "mschf", "nasa", "netflix", "nubank", "nvidia", "openai", "opendoor",
    "palantir", "paypal", "perplexity", "robinhood", "sac-capital", "sea-group",
    "sequoia-capital", "snowflake", "sofi", "spacex", "synthesia", "tesla",
    "theranos", "tiktok", "toma-bravo", "tsmc", "unh", "vertex-ai", "walmart",
    "wells-fargo", "wto", "yale-university", "youtube",
}

PRODUCTS_ENTITIES = {
    "claude", "claude-3", "sonnet", "opus", "chatgpt", "gpt-4", "gpt-5", "sora",
    "gemini", "gemini-flash", "dall-e", "midjourney", "fsd", "robotaxi", "starlink",
    "iphone", "android", "windows", "linux", "macos", "ios", "copilot", "codex",
    "stablecoin", "bitcoin", "ethereum", "dojo", "optimus-robot", "figure-03",
    "wybot-s1", "glp-1", "hbm", "tpu", "gpu", "chroma", "obsidian", "readwise", "milanote",
}

MEDIA_ENTITIES = {
    "a-room-of-one-s-own", "bad-blood", "best-partners-tv", "bg2-pod", "big-think",
    "bloomberg-podcasts", "by-night-in-chile", "civilized-to-death", "die-with-zero",
    "fearnation", "hidden-potential", "how-i-ai", "internet-of-bugs",
    "justkeepbuying", "new-york-times-podcasts", "outliers-book",
    "talk", "ted", "the-bear", "the-bitter-lesson", "the-courage-to-be-disliked",
    "the-feast-of-the-goat", "the-knowledge-project-podcast", "the-lost-daughter",
    "the-pathless-path", "the-republic", "win-ology",
}

# ----------------------------------------------------------------------------
# 第二步：真正要删除的标签 - 时效性标签
# ----------------------------------------------------------------------------

# 时间敏感的新闻事件、财报、特定日期等 - 这些会被彻底删除
TEMPORAL_TAGS_TO_PURGE = {
    "nvidia-earnings", "asml-earnings", "q4-earnings", "q3-2024", "q1-2025",
    "2024-elections", "2025-outlook",
    "cpi-data", "jobs-report", "fomc-meeting", "earnings-call",
    "breaking-news", "market-update", "daily-briefing",
    "monthly-report", "weekly-update", "quarterly-results",
}

# 其他应该删除的无效标签（如格式错误、测试标签等）
INVALID_TAGS = {
    "test", "todo", "draft", "wip", "placeholder",
    "t-literature-note", "t-fleeting-note",  # 旧的分类系统
}

# ----------------------------------------------------------------------------
# 第三步：CONSOLIDATION_MAP - 概念标签归并规则
# ----------------------------------------------------------------------------

CONSOLIDATION_MAP = {
    # A. 语言与同义词归并
    # AI相关
    'artificial-intelligence': 'ai',
    'artificialintelligence': 'ai',
    '人工智能': 'ai',

    'ai-agents': 'ai-agent',
    'agentic-ai': 'ai-agent',
    'agent': 'ai-agent',

    'large-language-models': 'llm',
    'llm-evaluation': 'llm',

    'ai-hallucinations': 'ai-limitation',
    'ai-hallucination': 'ai-limitation',

    # AI治理与伦理
    'ai-ethics': 'ai-governance',
    'ai-regulation': 'ai-governance',

    # 中美关系
    'china-us-relations': 'us-china-relations',
    'sino-us-relations': 'us-china-relations',
    '中美关系': 'us-china-relations',

    # 地缘政治
    '地缘政治': 'geopolitics',
    'geopolitical': 'geopolitics',

    # 投资策略
    '投资策略': 'investment-strategy',
    'value-investing': 'investment-strategy',
    '价值投资': 'investment-strategy',
    'long-term-investing': 'investment-strategy',

    # 个人成长
    '个人成长': 'personal-growth',
    'self-reflection': 'personal-growth',
    'lifelong-learning': 'personal-growth',
    'growth-mindset': 'personal-growth',
    'abundance-mindset': 'personal-growth',

    # B. 格式规范化
    'a-b-testing': 'ab-testing',

    # C. 宏观经济归并
    'cpi': 'inflation',
    'fed-policy': 'monetary-policy',

    # 市场分析
    'stock-market-analysis': 'market-analysis',
    'market-sentiment': 'market-analysis',
    'market-outlook': 'economic-outlook',

    # 其他中文标签归并
    '经济': 'economy',
    '金融': 'finance',
    '科技': 'technology',
    '商业': 'business',
    '创业': 'entrepreneurship',
    '历史': 'history',
    '文化': 'culture',
    '心理学': 'psychology',
    '系统思维': 'systems-thinking',
    '哲学': 'philosophy',

    # 技术相关
    'machine-learning': 'ai',
    'deep-learning': 'ai',
}

# ----------------------------------------------------------------------------
# 核心处理逻辑
# ----------------------------------------------------------------------------

def normalize_tag(tag):
    """标准化标签：小写、kebab-case"""
    if not isinstance(tag, str):
        return None
    tag = tag.lower().strip()
    # 移除 # 符号
    tag = tag.replace('#', '')
    # 替换空格和下划线为连字符
    tag = tag.replace(' ', '-').replace('_', '-')
    return tag if tag else None

def consolidate_tags(original_tags):
    """
    对标签列表应用实体提取、清洗和归并规则

    返回：
        dict: {
            'tags': 新的概念标签列表,
            'people': 提取的人名列表,
            'companies_orgs': 提取的公司/组织列表,
            'products_models': 提取的产品列表,
            'media_books': 提取的媒体/书籍列表,
            'stats': 统计信息
        }
    """
    concept_tags = set()
    entities = {
        'people': set(),
        'companies_orgs': set(),
        'products_models': set(),
        'media_books': set(),
    }

    stats = {
        'original_count': len(original_tags),
        'extracted_people': 0,
        'extracted_companies': 0,
        'extracted_products': 0,
        'extracted_media': 0,
        'purged_temporal': 0,
        'purged_invalid': 0,
        'consolidated_count': 0,
        'kept_count': 0,
    }

    for tag in original_tags:
        normalized_tag = normalize_tag(tag)
        if not normalized_tag:
            continue

        # 第一步：实体提取 - 将实体从tags移到对应的metadata字段
        entity_extracted = False

        if normalized_tag in PEOPLE_ENTITIES:
            entities['people'].add(normalized_tag)
            stats['extracted_people'] += 1
            entity_extracted = True
        elif normalized_tag in COMPANIES_ENTITIES:
            entities['companies_orgs'].add(normalized_tag)
            stats['extracted_companies'] += 1
            entity_extracted = True
        elif normalized_tag in PRODUCTS_ENTITIES:
            entities['products_models'].add(normalized_tag)
            stats['extracted_products'] += 1
            entity_extracted = True
        elif normalized_tag in MEDIA_ENTITIES:
            entities['media_books'].add(normalized_tag)
            stats['extracted_media'] += 1
            entity_extracted = True

        # 如果是实体，不再处理为概念标签
        if entity_extracted:
            continue

        # 第二步：清洗 - 删除时效性和无效标签
        if normalized_tag in TEMPORAL_TAGS_TO_PURGE:
            stats['purged_temporal'] += 1
            continue

        if normalized_tag in INVALID_TAGS:
            stats['purged_invalid'] += 1
            continue

        # 第三步：归并 - 概念标签归并
        if normalized_tag in CONSOLIDATION_MAP:
            new_tag = CONSOLIDATION_MAP[normalized_tag]
            concept_tags.add(new_tag)
            stats['consolidated_count'] += 1
        else:
            # 保留未被映射的概念标签
            concept_tags.add(normalized_tag)
            stats['kept_count'] += 1

    stats['final_tag_count'] = len(concept_tags)
    stats['total_entities'] = sum([
        stats['extracted_people'],
        stats['extracted_companies'],
        stats['extracted_products'],
        stats['extracted_media']
    ])

    return {
        'tags': sorted(list(concept_tags)),
        'people': sorted(list(entities['people'])),
        'companies_orgs': sorted(list(entities['companies_orgs'])),
        'products_models': sorted(list(entities['products_models'])),
        'media_books': sorted(list(entities['media_books'])),
        'stats': stats
    }

def process_file(filepath, fix_mode=False):
    """
    处理单个Markdown文件

    返回：
        tuple: (是否修改, 统计信息)
    """
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            original_content = f.read()
            post = frontmatter.loads(original_content)
    except Exception as e:
        print(f"  - ERROR: Could not read {os.path.basename(filepath)}: {e}")
        return False, None

    original_tags = post.get('tags', [])
    if not original_tags:
        return False, None

    # 应用实体提取、清洗和归并规则
    result = consolidate_tags(original_tags)
    stats = result['stats']

    # 检查是否有任何变化
    tags_changed = set(result['tags']) != set(original_tags)
    entities_extracted = stats['total_entities'] > 0

    if not tags_changed and not entities_extracted:
        return False, None

    print(f"\n  {os.path.basename(filepath)}:")
    print(f"    原始标签数: {stats['original_count']}")
    if stats['extracted_people'] > 0:
        print(f"    提取人名: {stats['extracted_people']}")
    if stats['extracted_companies'] > 0:
        print(f"    提取公司: {stats['extracted_companies']}")
    if stats['extracted_products'] > 0:
        print(f"    提取产品: {stats['extracted_products']}")
    if stats['extracted_media'] > 0:
        print(f"    提取媒体: {stats['extracted_media']}")
    if stats['purged_temporal'] > 0:
        print(f"    删除时效性标签: {stats['purged_temporal']}")
    if stats['purged_invalid'] > 0:
        print(f"    删除无效标签: {stats['purged_invalid']}")
    if stats['consolidated_count'] > 0:
        print(f"    归并转换: {stats['consolidated_count']}")
    print(f"    保持不变: {stats['kept_count']}")
    print(f"    最终概念标签数: {stats['final_tag_count']}")

    if fix_mode:
        # 更新概念标签
        post.metadata['tags'] = result['tags']

        # 合并提取的实体到现有的metadata字段（不覆盖）
        for entity_type in ['people', 'companies_orgs', 'products_models', 'media_books']:
            existing = set(post.get(entity_type, []))
            extracted = set(result[entity_type])
            combined = existing | extracted
            if combined:
                post.metadata[entity_type] = sorted(list(combined))

        try:
            metadata_yaml = yaml.dump(
                post.metadata,
                allow_unicode=True,
                default_flow_style=False,
                sort_keys=False
            )
            new_content = f"---\n{metadata_yaml}---\n{post.content}"

            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"    ✓ 已保存")
        except Exception as e:
            print(f"    ✗ 保存失败: {e}")
            return False, None

    return True, stats

# ----------------------------------------------------------------------------
# 主程序
# ----------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="清洗和归并标签（Purge & Consolidate Tags）"
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help="预览模式：显示将要进行的更改，但不修改文件"
    )
    parser.add_argument(
        '--fix',
        action='store_true',
        help="执行模式：实际修改文件"
    )
    parser.add_argument(
        '--limit',
        type=int,
        default=-1,
        help="限制处理的文件数量（默认：全部）"
    )
    parser.add_argument(
        '--stats',
        action='store_true',
        help="只显示统计信息，不处理文件"
    )
    args = parser.parse_args()

    if not args.fix and not args.dry_run and not args.stats:
        print("请指定模式：--dry-run（预览）、--fix（执行）或 --stats（统计）")
        return

    if args.stats:
        print(f"=== 标签清洗归并规则统计 ===\n")
        print(f"实体识别集合（将从tags移到metadata）:")
        print(f"  - 人名: {len(PEOPLE_ENTITIES)}")
        print(f"  - 公司/组织: {len(COMPANIES_ENTITIES)}")
        print(f"  - 产品: {len(PRODUCTS_ENTITIES)}")
        print(f"  - 媒体/书籍: {len(MEDIA_ENTITIES)}")
        print(f"  总计: {len(PEOPLE_ENTITIES) + len(COMPANIES_ENTITIES) + len(PRODUCTS_ENTITIES) + len(MEDIA_ENTITIES)}")
        print(f"\n要删除的标签:")
        print(f"  - 时效性标签: {len(TEMPORAL_TAGS_TO_PURGE)}")
        print(f"  - 无效标签: {len(INVALID_TAGS)}")
        print(f"  总计: {len(TEMPORAL_TAGS_TO_PURGE) + len(INVALID_TAGS)}")
        print(f"\n概念标签归并规则数: {len(CONSOLIDATION_MAP)}")
        print(f"目标规范概念标签: {len(set(CONSOLIDATION_MAP.values()))}")
        print(f"规范标签列表: {sorted(set(CONSOLIDATION_MAP.values()))}")
        return

    mode = "执行" if args.fix else "预览"
    print(f"=== {mode}模式：标签清洗与归并 ===")
    print(f"目录: {ABS_NOTES_DIR}")
    if args.limit > 0:
        print(f"限制: 最多处理 {args.limit} 个文件")
    print()

    if not os.path.isdir(ABS_NOTES_DIR):
        print(f"错误: 目录不存在 {ABS_NOTES_DIR}")
        return

    # 全局统计
    total_files = 0
    modified_files = 0
    total_stats = Counter()

    # 遍历处理
    for root, _, files in os.walk(ABS_NOTES_DIR):
        for file in files:
            if not file.endswith('.md'):
                continue

            if args.limit > 0 and modified_files >= args.limit:
                break

            filepath = os.path.join(root, file)
            total_files += 1

            modified, stats = process_file(filepath, fix_mode=args.fix)
            if modified and stats:
                modified_files += 1
                for key, value in stats.items():
                    total_stats[key] += value

        if args.limit > 0 and modified_files >= args.limit:
            break

    # 最终报告
    print(f"\n{'='*60}")
    print(f"处理完成")
    print(f"{'='*60}")
    print(f"扫描文件: {total_files}")
    print(f"修改文件: {modified_files}")
    print(f"未修改文件: {total_files - modified_files}")

    if total_stats:
        print(f"\n总计标签变化:")
        print(f"  原始标签总数: {total_stats['original_count']}")
        print(f"\n  实体提取（移到metadata）:")
        print(f"    - 人名: {total_stats['extracted_people']}")
        print(f"    - 公司: {total_stats['extracted_companies']}")
        print(f"    - 产品: {total_stats['extracted_products']}")
        print(f"    - 媒体: {total_stats['extracted_media']}")
        print(f"    小计: {total_stats['total_entities']}")
        print(f"\n  删除:")
        print(f"    - 时效性标签: {total_stats['purged_temporal']}")
        print(f"    - 无效标签: {total_stats['purged_invalid']}")
        print(f"    小计: {total_stats['purged_temporal'] + total_stats['purged_invalid']}")
        print(f"\n  概念标签处理:")
        print(f"    - 归并转换: {total_stats['consolidated_count']}")
        print(f"    - 保持不变: {total_stats['kept_count']}")
        print(f"    最终概念标签总数: {total_stats['final_tag_count']}")

        reduction = total_stats['original_count'] - total_stats['final_tag_count']
        reduction_pct = 100 * reduction / total_stats['original_count'] if total_stats['original_count'] > 0 else 0
        print(f"\n  标签总减少: {reduction} ({reduction_pct:.1f}%)")
        print(f"  (注: {total_stats['total_entities']}个实体已移到专门的metadata字段)")

    if args.fix:
        print(f"\n✓ 文件已更新。请使用 'git diff' 检查更改。")
    else:
        print(f"\n提示: 使用 --fix 参数来实际执行更改。")

if __name__ == "__main__":
    main()
