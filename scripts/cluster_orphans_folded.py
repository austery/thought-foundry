import json
import os

# ==========================================
# 1. SPECIAL DELETE LIST (True Noise)
# ==========================================
DELETE_LIST = {
    "video-transcript", "temp-file", "testing-tag", "daily-log", 
    "review-video", "random-thoughts", "s-wip", "n-a", "video-notes",
    "action-over-planning", "asking-for-help"
}

# ==========================================
# 2. ENTITY RULES (Keep & Migrate to Field)
# ==========================================
ENTITY_RULES = {
    "People": [
        "peter-thiel", "gu-zhun", "hulk-hogan", "zhang-xiuxiu", "macron", 
        "avi-loeb", "rich-sutton", "ko-wen-je", "barry-diller", "peter-mandelson",
        "hawking", "turing", "newton", "darwin", "curie", "oppenheimer",
        "zhang-xiuxiu", "张修修", "顾准", "师姐说", "漫士", "段永平", "王阳明"
    ],
    "Company": [
        "nvidia", "palantir", "openai", "imf", "fed", "tsla", "nvda", 
        "pinduoduo", "tcehy", "ge-vernovum", "anker", "wybot", "dji",
        "roborock", "gawker", "polymarket", "reddit"
    ],
    "Location": [ # New Entity Field or Merge to 'location'?
        # We will separate this so we can decide in execution map.
        "michigan", "antwerp", "tofino", "egypt", "vietnam", "staten-island",
        "lake-louise", "st-johns", "copper-country", "taiwan-strait", "south-china-sea"
    ]
}

# ==========================================
# 3. TOPIC RULES (Fold to Anchor)
# ==========================================
TOPIC_RULES = {
    # === 1. 核心硬核知识 (Science/Tech) ===
    "Science": [
        "aerodynamic", "thermodynamic", "mitochondria", "photosynthesis", 
        "gamma-ray", "cosmic", "superconductivity", "quantum", "entropy",
        "algorithm", "mathematics", "physics", "biology", "chemistry",
        "neuroscience", "dopamine", "cortisol", "peptide", "protein",
        "bone-density", "hyperuricemia", "gout", "insomnia", "semaglutide",
        "evolution", "chaos"
    ],
    
    "Technology": [
        "rlhf", "context-window", "multimodal", "function-calling", "lidar",
        "semiconductor", "chip", "wafer", "lithography", "gpu", "ai-agent",
        "robotics", "drone", "starship", "falcon-heavy", "reusable-rocket",
        "saas", "api", "open-source", "workflow", "automation", "cyber",
        "payfi", "rwa", "pfof", "crypto", "blockchain", "solana", "bitcoin",
        "fp8-quantization", "sora-2", "genie-3"
    ],

    # === 2. 投资与商业 (Investment/Business) ===
    "Investment": [
        "stock-market", "market-crash", "market-correction", "bull-market",
        "inflation", "deflation", "interest-rate", "fed-policy", "cpi",
        "valuation", "earnings", "cash-flow", "balance-sheet", "capital",
        "insider-trading", "short-selling", "buy-the-dip", "fomo",
        "dead-cat-bounce", "gamma-squeeze", "liquidation", "arbitrage",
        "资金回收", "企业价值", "股票代币化"
    ],

    "Business": [
        "startup", "founder", "entrepreneur", "supply-chain", "logistics",
        "business-model", "product-market-fit", "mvp", "unit-economics",
        "leadership", "management", "hiring", "culture", "b2b", "b2c",
        "commercial", "retail", "marketing", "brand", "pricing"
    ],

    # === 3. 政治与宏观 (Geopolitics/China) ===
    "Geopolitics": [
        "geopolitical", "foreign-policy", "diplomacy", "sanction", "tariff",
        "trade-war", "belt-and-road", "united-front", "soft-power",
        "middle-east", "israel-gaza", "ukraine", "russia", "china-us", "sino", 
        "election", "vote", "authoritarian", "democracy", "populism", "nationalism",
        "统战", "地缘", "制裁", "关税", "选举"
    ],
    
    "China_Context": [ # Fold to 'china-history' or 'china'?
        "yanan-rectification", "september-18th", "boxer-rebellion", 
        "great-famine", "cultural-revolution", "reform-opening",
        "tiananmen", "1953", "common-prosperity", "hukou",
        "内宣", "灰域作战", "各种政变", "思想改造"
    ],

    # === 4. 认知与哲学 (Mental Models) ===
    "Mental_Model": [
        "mimetic-desire", "first-principle", "feedback-loop", "flywheel",
        "network-effect", "tipping-point", "critical-mass", "pareto",
        "complexity", "game-theory", "nash-equilibrium",
        "stoicism", "nihilism", "existentialism", "metaphysics",
        "cognitive-bias", "heuristic", "logical-fallacy",
        "课题分离", "批判性思维", "心流", "gray-zone-tactic"
    ]
}

def migrate_tags(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    clusters = data.get("clusters", {})
    
    # Grab Orphans from previous run (likely in _misc_remaining or orphan_clusters_advanced outputs)
    orphan_tags = []
    
    # We want to process EVERYTHING in _misc_remaining from the LAST run.
    # We also might want to re-process _misc_english if valid.
    # For safety, let's grab _misc_remaining if it exists.
    if "_misc_remaining" in clusters:
        orphan_tags.extend(clusters["_misc_remaining"])
        del clusters["_misc_remaining"]
    
    # Also grab _misc_english/chinese just in case they weren't fully cleaned
    for key in ["_misc_english", "_misc_chinese"]:
        if key in clusters:
            orphan_tags.extend(clusters[key])
            del clusters[key]
            
    print(f"🔍 扫描到待处理长尾标签: {len(orphan_tags)} 个")
    print("-" * 40)

    stats = {}
    to_delete = []
    
    # Initialize cats
    for cat in list(ENTITY_RULES.keys()) + list(TOPIC_RULES.keys()):
        if cat not in clusters: clusters[cat] = []
        stats[cat] = 0

    remaining_orphans = []

    for tag in orphan_tags:
        # 1. Check Delete List first
        if tag in DELETE_LIST:
            to_delete.append(tag)
            continue

        moved = False
        tag_lower = tag.lower()

        # 2. Check Entities
        for cat, keywords in ENTITY_RULES.items():
            if any(k in tag_lower for k in keywords):
                if tag not in clusters[cat]:
                    clusters[cat].append(tag)
                    stats[cat] += 1
                moved = True
                break
        
        # 3. Check Topics
        if not moved:
            for cat, keywords in TOPIC_RULES.items():
                if any(k in tag_lower for k in keywords):
                    if tag not in clusters[cat]:
                        clusters[cat].append(tag)
                        stats[cat] += 1
                    moved = True
                    break
        
        if not moved:
            remaining_orphans.append(tag)

    # Store results
    clusters["_to_delete"] = to_delete
    clusters["_misc_remaining"] = remaining_orphans
    data["clusters"] = clusters

    print("✅ 处理完毕")
    print(f"🗑️ 标记删除 (True Noise): {len(to_delete)} 个")
    print("\n[折叠/归类 (Folded)]: ")
    for cat, count in stats.items():
        if count > 0:
            print(f"  - {cat}: {count}")

    print("-" * 30)
    print(f"📦 仍保留为独立标签 (Keep): {len(remaining_orphans)} 个")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"💾 文件已保存至: {output_file}")

if __name__ == "__main__":
    # We iteratively refine.
    # Use orphan_clusters_final.json (result of step 2) as input if exists?
    # Or start from advanced?
    # User said "run this... for the remaining list".
    # Best to take the existing final output and refine it.
    input_filename = "orphan_clusters_final.json"
    output_filename = "orphan_clusters_folded.json" # New output for "Fold" stage
    
    if os.path.exists(input_filename):
        migrate_tags(input_filename, output_filename)
    else:
        print(f"❌ 找不到上一阶段文件 {input_filename}")
