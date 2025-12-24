import json
import os

# ==========================================
# 1. FINAL ENTITY RULES (User Provided)
# ==========================================
ENTITY_RULES = {
    "Company": [
        # === Previous Giants ===
        "apple", "google", "microsoft", "amazon", "meta", "tesla", "nvidia", 
        "openai", "anthropic", "deepmind", "spacex", "blue-origin", "starlink",
        "tsmc", "tsm", "amd", "intel", "qualcomm", "byd", "huawei", "xiaomi",
        "tencent", "alibaba", "pfizer", "lilly", "ozempic", "novo",
        "blackrock", "vanguard", "bridgewater", "sequoia", "a16z",
        # === NEW CATCHES ===
        "wanda", "evergrande", "country-garden", # 地产
        "coca-cola", "cocacola", "pepsi", "mcdonald", "starbucks", # 消费
        "boeing", "lockheed", "raytheon", # 军工
        "wybot", "anker", "dji", "roborock", # 硬件单品
        "gawker", "polymarket", "reddit", # 媒体/平台
        "tsla", "nvda", "msft", "aapl", "goog", # 股票代码
        "万达", "恒大", "英特尔", "腾讯", "阿里", "字节", "华为", "拼多多"
    ],
    "People": [
        # === Previous ===
        "musk", "jobs", "gates", "bezos", "zuckerberg", "altman", "huang", 
        "buffett", "munger", "dalio", "soros", "ackman", "cathie-wood", 
        "thiel", "graham", "navai", "taleb", "yuval", "harari", "trump", "biden", 
        "obama", "clinton", "putin", "zelensky", "macron", "trudeau", 
        "netanyahu", "modi", "merkel", "xi-jinping", "mao", "deng", 
        "socrates", "plato", "aristotle", "nietzsche", "kant", "marx", 
        "freud", "jung", "adler", "lacan", "feynman", "einstein",
        # === NEW CATCHES ===
        "hawking", "turing", "newton", "darwin", "curie", "oppenheimer", # 科学家
        "peter-mandelson", "ko-wen-je", "macron", "trudeau", "zelensky", # 政治
        "mr-beast", "lex-fridman", "rogan", # 博主
        "张修修", "李小加", "漫士", "高市早苗", "段永平", "王阳明", "吉姆·查诺斯"
    ],
    "Media_Book": [
        "book", "novel", "biography", "memoir", "essay", "paper", "report", 
        "newsletter", "blog", "podcast", "channel", "youtube", "video", "movie", 
        "film", "cinema", "documentary", "series", "drama", "anime", "manga", 
        "game", "music", "song", "album", "museum", "exhibition",
        "dune", "three-body", "harry-potter", "lord-of-the-rings", 
        "13f", "filing", "review", "guide", "tutorial", "course", "transcript",
        "书", "电影", "播客", "视频", "纪录片", "小说", "传记", "指南", "笔记", "演讲"
    ]
}

# ==========================================
# 2. FINAL TOPIC RULES (User Provided)
# ==========================================
TOPIC_RULES = {
    # === 自然科学 (Science) - 大幅增强 ===
    "science": [
        "science", "physics", "biology", "chemistry", "math", "astronomy",
        "quantum", "relativity", "entropy", "thermodynamics", "gravity",
        "space", "universe", "cosmos", "galaxy", "star", "planet", "orbit",
        "mars", "moon", "rocket", "satellite", "telescope", "nasa",
        "cell", "gene", "dna", "rna", "protein", "mitochondria", "evolution",
        "neuroscience", "brain", "neuron", "synapse", "dopamine", "cortisol",
        "energy", "fusion", "fission", "nuclear", "superconductor", "material",
        "algorithm", "complexity", "chaos", "fractal", "theorem", "equation",
        "particle", "wave", "mechanics", "fluid", "optic", "laser",
        "scientific", "experiment", "lab", "research", "study",
        "科学", "物理", "生物", "化学", "数学", "宇宙", "量子", "熵", "进化论",
        "玻尔兹曼大脑", "人择原理", "超导"
    ],

    # === 环境与气候 (Environment) - 新增 ===
    "environment": [
        "climate", "environment", "carbon", "emission", "green", "sustainable",
        "pollution", "plastic", "waste", "recycle", "clean-energy",
        "warming", "wildfire", "disaster", "hurricane", "flood", "drought",
        "conservation", "ecology", "nature", "biodiversity", "methane",
        "fossil-fuel", "oil", "gas", "coal", "resource",
        "环境", "气候", "碳", "污染", "环保", "野火", "灾害", "资源"
    ],

    # === 历史与地缘 (History/Geo) - 针对具体事件增强 ===
    "history": [
        "history", "historical", "ancient", "medieval", "modern", "century",
        "empire", "dynasty", "kingdom", "republic", "revolution", "civilization",
        "war", "wwi", "wwii", "cold-war", "soviet", "nazi", "rome", "roman", "greek",
        "archaeology", "anthropology", "heritage", "legacy", "myth",
        "incident", "coup", "treaty", "alliance", "rebellion", "conflict",
        "19", "20th", "era", "period", "age",
        "历史", "朝代", "帝国", "革命", "文明", "冷战", "苏联", "罗马", "二战",
        "政变", "天安门", "1953", "纳尼亚"
    ],

    "geopolitical": [
        "politics", "policy", "government", "party", "election", "vote",
        "democracy", "authoritarian", "dictator", "communist", "socialist",
        "china", "us", "usa", "russia", "ukraine", "israel", "gaza", "middle-east",
        "taiwan", "hong-kong", "iran", "korea", "india", "japan", "europe", "eu",
        "relations", "diplomacy", "sanction", "trade", "tariff", "border",
        "military", "weapon", "defense", "security", "army", "navy", "air-force",
        "immigration", "migration", "refugee", "population", "demographic",
        "geopolitics", "power", "sovereignty", "nationalism",
        "政治", "政策", "政府", "选举", "民主", "独裁", "中美", "俄乌", "台海",
        "南海", "伊朗", "中东", "制裁", "贸易战", "移民"
    ],

    # === 商业与投资 (Business/Invest) ===
    "business": [
        "business", "startup", "founder", "entrepreneur", "enterprise", "corporate",
        "product", "mvp", "roadmap", "strategy", "management", "leadership",
        "organization", "hiring", "team", "culture", "sales", "marketing",
        "brand", "customer", "b2b", "b2c", "saas", "supply-chain", "logistics",
        "manufacturing", "retail", "commerce", "acquisition", "merger",
        "work", "career", "job", "profession", "productivity", "workflow",
        "商业", "创业", "产品", "管理", "营销", "品牌", "供应链", "职场"
    ],

    "investment": [
        "invest", "stock", "equity", "etf", "fund", "capital", "asset", "valuation",
        "dividend", "crypto", "bitcoin", "solana", "token", "meme", "coin",
        "ipo", "short", "long", "bull", "bear", "roi", "option", "future",
        "volatility", "arbitrage", "hedging", "portfolio", "allocation",
        "financial", "finance", "money", "wealth", "inflation", "rate", "tax",
        "economy", "recession", "bank", "fomc", "fed", "credit", "debt",
        "美股", "投资", "基金", "资产", "估值", "比特币", "交易", "理财", "通胀",
        "brrr策略", "正现金流"
    ],

    # === 心理与认知 (Psychology/Philosophy) ===
    "psychology": [
        "psychology", "mind", "brain", "cognitive", "bias", "heuristic",
        "emotion", "feeling", "anxiety", "stress", "trauma", "depression",
        "happiness", "joy", "fear", "anger", "grief", "pain",
        "habit", "focus", "willpower", "discipline", "motivation",
        "self", "ego", "identity", "personality", "consciousness",
        "therapy", "mental-health", "wellbeing", "meditation", "mindfulness",
        "心理", "焦虑", "精神", "情绪", "心态", "专注", "习惯", "创伤", "内耗"
    ],

    "philosophy": [
        "philosophy", "philosophical", "logic", "reason", "rationality",
        "epistemology", "ontology", "ethics", "morality", "virtue",
        "stoicism", "nihilism", "existentialism", "utilitarianism",
        "ideology", "belief", "religion", "faith", "god", "soul",
        "meaning", "truth", "wisdom", "knowledge", "concept", "abstract",
        "哲学", "逻辑", "伦理", "斯多葛", "虚无主义", "信仰", "泛心论", "阿德勒"
    ],

    # === 科技 (Tech) ===
    "technology": [
        "tech", "technology", "digital", "cyber", "internet", "web",
        "software", "hardware", "app", "platform", "system", "network",
        "computer", "server", "cloud", "data", "computing", "algorithm",
        "ai", "ml", "llm", "gpt", "robot", "drone", "vehicle", "ev",
        "chip", "gpu", "semiconductor", "battery", "energy", "solar",
        "crypto", "blockchain", "metaverse", "vr", "ar",
        "科技", "技术", "软件", "硬件", "互联网", "人工智能", "芯片", "算力"
    ],

    # === 生活与社会 (Life/Society) ===
    "life": [
        "life", "living", "lifestyle", "travel", "trip", "food", "cooking",
        "health", "fitness", "exercise", "sleep", "diet", "nutrition",
        "family", "parenting", "child", "marriage", "relationship", "dating",
        "home", "house", "garden", "diy", "car", "gear", "tool",
        "reading", "writing", "learning", "skill", "hobby", "sport", "game",
        "education", "school", "university", "student",
        "society", "culture", "humanity", "social", "community",
        "gender", "feminism", "race", "class", "inequality", "poverty",
        "生活", "旅行", "家庭", "读书", "烹饪", "健康", "运动", "社会", "教育"
    ],
    
    # === 加拿大本地 (Canada) - Keeping from previous ===
    "canada": [ 
        "canada", "canadian", "ontario", "toronto", "vancouver", "quebec",
        "mississauga", "gta", "trudeau", "liberal-party", "conservative-party",
        "housing-crisis", "carbon-tax", "healthcare", "immigration", "visa",
        "pr", "permanent-resident", "express-entry", "cra", "rrsp", "tfsa",
        "加拿大", "多伦多", "温哥华", "安省", "特鲁多", "养老金"
    ]
}

def migrate_tags(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    clusters = data.get("clusters", {})
    
    # 准备源列表
    misc_sources = ["_misc_english", "_misc_chinese"]
    orphan_tags = []
    
    # Also check _misc_remaining from previous runs since we are re-running
    if "_misc_remaining" in clusters:
        misc_sources.append("_misc_remaining")

    for source in misc_sources:
        if source in clusters:
            orphan_tags.extend(clusters[source])
            del clusters[source] # 从原处删除
            
    print(f"🔍 扫描到待处理标签: {len(orphan_tags)} 个")
    print("-" * 40)

    stats = {}
    remaining_tags = []
    
    # 初始化目标分类
    all_target_categories = list(ENTITY_RULES.keys()) + list(TOPIC_RULES.keys())
    for cat in all_target_categories:
        if cat not in clusters:
            clusters[cat] = []
        stats[cat] = 0

    # 开始迁徙逻辑
    for tag in orphan_tags:
        moved = False
        tag_lower = tag.lower()
        
        # 1. 优先检查实体规则
        for category, keywords in ENTITY_RULES.items():
            if any(k in tag_lower for k in keywords):
                if tag not in clusters[category]:
                    clusters[category].append(tag)
                    stats[category] += 1
                moved = True
                break
        
        # 2. 检查主题规则
        if not moved:
            for category, keywords in TOPIC_RULES.items():
                if any(k in tag_lower for k in keywords):
                    if tag not in clusters[category]:
                        clusters[category].append(tag)
                        stats[category] += 1
                    moved = True
                    break
        
        # 3. 未匹配
        if not moved:
            remaining_tags.append(tag)

    # 将未匹配的标签放回 remaining
    clusters["_misc_remaining"] = remaining_tags
    data["clusters"] = clusters

    # 打印报告
    print("✅ 迁徙完成！")
    print("\n[实体分类]:")
    for cat in ENTITY_RULES.keys():
        print(f"  - {cat}: 新增 {stats[cat]} 个")
        
    print("\n[主题分类]:")
    for cat in TOPIC_RULES.keys():
        print(f"  - {cat}: 新增 {stats[cat]} 个")
    
    print("-" * 40)
    print(f"📦 剩余未归类标签: {len(remaining_tags)} 个 (已存入 '_misc_remaining')")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"💾 文件已保存至: {output_file}")

if __name__ == "__main__":
    # Always input original orphans or previous advanced output?
    # Ideally start from orphan_clusters_advanced.json to iterate
    input_filename = "orphan_clusters_advanced.json" 
    output_filename = "orphan_clusters_final.json"
    
    if os.path.exists(input_filename):
        migrate_tags(input_filename, output_filename)
    elif os.path.exists("orphan_clusters.json"):
        migrate_tags("orphan_clusters.json", output_filename)
    else:
        print(f"❌ 错误: 找不到文件 {input_filename}")
