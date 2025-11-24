# -*- coding: utf-8 -*-
"""
This script processes a list of old tags and maps them to a new PKM (Personal Knowledge Management)
structure based on the v3.0 classification system. It categorizes tags into areas, categories,
and projects, and extracts entities like people, companies, products, and media.
"""

import json
from collections import Counter

# ----------------------------------------------------------------------------
# v3.0 CONTROLLED VOCABULARY LISTS
# ----------------------------------------------------------------------------

AREAS = [
    "market-analysis",
    "personal-growth",
    "tech-insights",
    "digital-garden"
]

CATEGORIES = [
    "geopolitics", "finance", "business", "technology", "psychology",
    "productivity", "career", "science", "general", "culture", "lifestyle"
]

PROJECTS = [
    "china-analysis", "us-analysis", "investment-strategy", "ai-impact-analysis",
    "systems-thinking", "personal-growth-lab", "knowledge-pipeline", "pkm-research",
    "entrepreneurship", "vibe-coding", "geopolitics-watch", "fire-movement",
    "historical-insights", "cultural-critique", "market-cycles"
]

# ----------------------------------------------------------------------------
# ENTITY EXTRACTION LISTS
# Based on the provided tag list. Can be expanded.
# ----------------------------------------------------------------------------

# Using sets for efficient lookup
PEOPLE = {
    "adam s. axiom", "amit kukreja", "andrew ng", "andrew ross sorkin", "anthony",
    "ari morcos", "benedict evans", "bill ackman", "bryan johnson", "charlie jarvis",
    "charlie kirk", "charlie munger", "chris hohn", "dalai lama", "demis hassabis",
    "denny zhou", "donald trump", "elena ferrante", "elizabeth holmes", "elon musk",
    "fei-fei li", "forrest li", "geoffrey hinton", "george kinder", "harald lesch",
    "howard lutnick", "hu hanmin", "hulk hogan", "ilya sutskever", "jean-paul sartre",
    "jeff bezos", "jeff dean", "jeffrey epstein", "jerome powell", "joe biden",
    "john mcwhorter", "joseph wang", "judea pearl", "julian treasure", "kamala harris",
    "ken griffin", "kevinfeng", "leo tolstoy", "leopold aschenbrenner", "li xiaojia",
    "lt", "luo yonghao", "mario vargas llosa", "michael jordan", "nickmaggiulli",
    "nicola willis", "paul johnson", "paul tudor jones", "peter santenello",
    "peter thiel", "qin hui", "qiu jin", "rafael trujillo", "rene girard",
    "richard dawkins", "richard hamming", "richard sutton", "roberto bolano",
    "rodney brooks", "rousseau", "sam altman", "sarah kay", "song jiaoren",
    "stella an", "stephen king", "stephen wolfram", "steven a. cohen", "steven cohen",
    "steven kotler", "sunny balwani", "taylor swift", "tom homeman", "tony seba",
    "trump", "tulsi gabbard", "tyler shultz", "virginia woolf", "wang jianlin",
    "wang yangming", "warren buffett", "wen jiabao", "xi jinping", "yann lecun",
    "yixi", "yoshua bengio", "yuval noah harari", "zhang xuefeng", "zohran mamdani",
    "三个水枪手", "不正常人类", "习近平", "刘宁", "戴雨森", "段永平", "毛泽东", "梁永安",
    "王阳明", "知行小酒馆", "硅谷101", "美联储", "胡汉民", "詹姆斯·西蒙斯", "谷歌工程师",
    "马基雅弗利", "黄仁勋", "巴菲特", "查理·芒格", "苏格拉底", "柏拉图", "亚里士多德"
}

COMPANIES_ORGS = {
    "a16z", "airbnb", "alo yoga", "amazon", "amd", "anthropic", "apple", "asml",
    "atai life sciences", "axon", "bank of america", "berkshire hathaway",
    "blackrock", "blackstone", "blue origin", "canada post", "citigroup",
    "coca-cola", "databricks", "deepmind", "dell", "equifax", "facebook",
    "fastenal", "fedex", "figma", "google", "github", "grayzone-news",
    "huma finance", "ibm", "indigo", "intel", "jpmorgan chase", "lam research",
    "levi strauss", "lululemon", "lumen technologies", "meta", "microsoft", "mit",
    "mschf", "nasa", "netflix", "nubank", "nvidia", "openai", "opendoor",
    "palantir", "paypal", "perplexity", "robinhood", "sac capital", "sea group",
    "sequoia-capital", "sequoia capital", "snowflake", "sofi", "spacex", "synthesia", "tesla",
    "theranos", "tiktok", "toma bravo", "tsmc", "unh", "vertex ai", "walmart",
    "wells fargo", "wto", "yale university", "youtube", "一席", "不明白播客",
    "亚马逊", "微软", "谷歌", "特斯拉", "真格基金", "英伟达", "台积电"
}

PRODUCTS_MODELS = {
    "claude", "claude 3", "sonnet", "opus", "chatgpt", "gpt-4", "gpt-5", "sora", "gemini", "gemini flash", "dall-e",
    "midjourney", "fsd", "robotaxi", "starlink", "iphone", "android", "windows",
    "linux", "macos", "ios", "copilot", "codex", "stablecoin", "bitcoin",
    "ethereum", "dojo", "optimus-robot", "figure-03", "wybot s1", "glp-1",
    "hbm", "tpu", "gpu", "chroma", "obsidian", "readwise", "milanote"
}

MEDIA_BOOKS = {
    "a room of one''s own", "bad blood", "best partners tv", "bg2 pod", "big think",
    "bloomberg podcasts", "by night in chile", "civilized to death", "die with zero",
    "fearnation", "hidden potential", "how i ai", "internet of bugs",
    "justkeepbuying", "new york times podcasts", "outliers-book",
    "talk", "ted", "the bear", "the bitter lesson", "the courage to be disliked",
    "the feast of the goat", "the knowledge project podcast", "the lost daughter",
    "the pathless path", "the republic", "win-ology", "yixi", "一席", "三个水枪手",
    "不明白播客", "知行小酒馆", "被讨厌的勇气", "读书会", "原子习惯"
}

# ----------------------------------------------------------------------------
# KEYWORD TO PKM MAPPING
# Maps keywords found in tags to the PKM structure.
# The script will do partial matching (e.g., 'invest' in a tag will match).
# ----------------------------------------------------------------------------

KEYWORD_TO_PKM = {
    # Area: market-analysis
    "geopolitics": {"area": "market-analysis", "category": "geopolitics", "projects": ["geopolitics-watch"]},
    "geopolitical": {"area": "market-analysis", "category": "geopolitics", "projects": ["geopolitics-watch"]},
    "地缘政治": {"area": "market-analysis", "category": "geopolitics", "projects": ["geopolitics-watch"]},
    "china": {"area": "market-analysis", "category": "geopolitics", "projects": ["china-analysis"]},
    "中国": {"area": "market-analysis", "category": "geopolitics", "projects": ["china-analysis"]},
    "us-": {"area": "market-analysis", "category": "geopolitics", "projects": ["us-analysis"]},
    "america": {"area": "market-analysis", "category": "geopolitics", "projects": ["us-analysis"]},
    "美国": {"area": "market-analysis", "category": "geopolitics", "projects": ["us-analysis"]},
    "invest": {"area": "market-analysis", "category": "finance", "projects": ["investment-strategy"]},
    "投资": {"area": "market-analysis", "category": "finance", "projects": ["investment-strategy"]},
    "stock": {"area": "market-analysis", "category": "finance", "projects": ["investment-strategy", "market-cycles"]},
    "market": {"area": "market-analysis", "category": "finance", "projects": ["investment-strategy", "market-cycles"]},
    "finance": {"area": "market-analysis", "category": "finance", "projects": ["investment-strategy"]},
    "financial": {"area": "market-analysis", "category": "finance", "projects": ["investment-strategy"]},
    "economy": {"area": "market-analysis", "category": "finance", "projects": []},
    "economic": {"area": "market-analysis", "category": "finance", "projects": []},
    "经济": {"area": "market-analysis", "category": "finance", "projects": []},
    "美股": {"area": "market-analysis", "category": "finance", "projects": ["investment-strategy", "us-analysis"]},
    "business": {"area": "market-analysis", "category": "business", "projects": ["entrepreneurship"]},
    "entrepreneurship": {"area": "market-analysis", "category": "business", "projects": ["entrepreneurship"]},
    "创业": {"area": "market-analysis", "category": "business", "projects": ["entrepreneurship"]},
    "fire-movement": {"area": "market-analysis", "category": "finance", "projects": ["fire-movement"]},

    # Area: tech-insights
    "ai": {"area": "tech-insights", "category": "technology", "projects": ["ai-impact-analysis"]},
    "artificial-intelligence": {"area": "tech-insights", "category": "technology", "projects": ["ai-impact-analysis"]},
    "人工智能": {"area": "tech-insights", "category": "technology", "projects": ["ai-impact-analysis"]},
    "machine-learning": {"area": "tech-insights", "category": "technology", "projects": ["ai-impact-analysis"]},
    "deep-learning": {"area": "tech-insights", "category": "technology", "projects": ["ai-impact-analysis"]},
    "tech": {"area": "tech-insights", "category": "technology", "projects": []},
    "technology": {"area": "tech-insights", "category": "technology", "projects": []},
    "software": {"area": "tech-insights", "category": "technology", "projects": ["vibe-coding"]},
    "coding": {"area": "tech-insights", "category": "technology", "projects": ["vibe-coding"]},
    "programming": {"area": "tech-insights", "category": "technology", "projects": ["vibe-coding"]},
    "vibe-coding": {"area": "tech-insights", "category": "technology", "projects": ["vibe-coding"]},

    # Area: personal-growth
    "personal-growth": {"area": "personal-growth", "category": "psychology", "projects": ["personal-growth-lab"]},
    "个人成长": {"area": "personal-growth", "category": "psychology", "projects": ["personal-growth-lab"]},
    "psychology": {"area": "personal-growth", "category": "psychology", "projects": ["personal-growth-lab"]},
    "心理学": {"area": "personal-growth", "category": "psychology", "projects": ["personal-growth-lab"]},
    "productivity": {"area": "personal-growth", "category": "productivity", "projects": ["personal-growth-lab"]},
    "career": {"area": "personal-growth", "category": "career", "projects": ["personal-growth-lab"]},
    "systems-thinking": {"area": "personal-growth", "category": "psychology", "projects": ["systems-thinking"]},
    "系统思维": {"area": "personal-growth", "category": "psychology", "projects": ["systems-thinking"]},
    "history": {"area": "personal-growth", "category": "culture", "projects": ["historical-insights"]},
    "历史": {"area": "personal-growth", "category": "culture", "projects": ["historical-insights"]},
    "culture": {"area": "personal-growth", "category": "culture", "projects": ["cultural-critique"]},
    "文化": {"area": "personal-growth", "category": "culture", "projects": ["cultural-critique"]},
    "lifestyle": {"area": "personal-growth", "category": "lifestyle", "projects": []},
    "travel": {"area": "personal-growth", "category": "lifestyle", "projects": []},
    "health": {"area": "personal-growth", "category": "lifestyle", "projects": []},

    # Added based on analysis of unmapped tags
    "宗教": {"area": "personal-growth", "category": "culture", "projects": []},
    "家庭生活": {"area": "personal-growth", "category": "lifestyle", "projects": []},
    "夫妻关系": {"area": "personal-growth", "category": "lifestyle", "projects": []},
    "心理健康": {"area": "personal-growth", "category": "psychology", "projects": []},
    "创伤": {"area": "personal-growth", "category": "psychology", "projects": []},
    "ptsd": {"area": "personal-growth", "category": "psychology", "projects": []},
    "哲学": {"area": "personal-growth", "category": "culture", "projects": []},

    # Area: digital-garden
    "pkm": {"area": "digital-garden", "category": "productivity", "projects": ["pkm-research", "knowledge-pipeline"]},
    "knowledge-management": {"area": "digital-garden", "category": "productivity", "projects": ["pkm-research", "knowledge-pipeline"]},
    "obsidian": {"area": "digital-garden", "category": "productivity", "projects": ["pkm-research"]},
    "notetaking": {"area": "digital-garden", "category": "productivity", "projects": ["pkm-research"]},
}

def process_tags(tags: list[str]) -> dict:
    """
    Processes a list of raw tags and maps them to the v3.0 PKM structure.

    Args:
        tags: A list of strings, where each string is a tag (e.g., "#us-china-relations").

    Returns:
        A dictionary containing the mapped area, category, projects, and extracted entities.
    """
    # Normalize tags: lowercase, remove '#', strip whitespace, handle multi-word names
    normalized_tags = [tag.lower().replace('#', '').strip() for tag in tags]

    # --- Initialization ---
    result = {
        "area": None,
        "category": None,
        "project": [],
        "tags": [],
        "people": set(),
        "companies_orgs": set(),
        "products_models": set(),
        "media_books": set()
    }
    pkm_votes = {
        "area": [],
        "category": [],
        "project": []
    }
    concept_tags = set()

    # --- Tag Processing Loop ---
    for tag in normalized_tags:
        is_entity = False

        # 1. Entity Extraction
        if tag in PEOPLE:
            result["people"].add(tag)
            is_entity = True
        if tag in COMPANIES_ORGS:
            result["companies_orgs"].add(tag)
            is_entity = True
        if tag in PRODUCTS_MODELS:
            result["products_models"].add(tag)
            is_entity = True
        if tag in MEDIA_BOOKS:
            result["media_books"].add(tag)
            is_entity = True

        # 2. PKM Mapping (using keyword matching)
        for keyword, mapping in KEYWORD_TO_PKM.items():
            if keyword in tag:
                if mapping.get("area"):
                    pkm_votes["area"].append(mapping["area"])
                if mapping.get("category"):
                    pkm_votes["category"].append(mapping["category"])
                if mapping.get("projects"):
                    pkm_votes["project"].extend(mapping["projects"])

        # 3. Concept Tag Collection
        # If a tag is not an entity, it's considered a concept for the 'tags' field.
        if not is_entity:
            concept_tags.add(tag.replace(" ", "-")) # Format as kebab-case

    # --- Finalization ---
    # 1. Decide on final area and category by frequency
    if pkm_votes["area"]:
        result["area"] = Counter(pkm_votes["area"]).most_common(1)[0][0]
    if pkm_votes["category"]:
        result["category"] = Counter(pkm_votes["category"]).most_common(1)[0][0]

    # 2. Collect unique projects and sort them
    if pkm_votes["project"]:
        result["project"] = sorted(list(set(pkm_votes["project"])))

    # 3. Finalize and sort entity and concept lists
    result["tags"] = sorted(list(concept_tags))
    result["people"] = sorted(list(result["people"]))
    result["companies_orgs"] = sorted(list(result["companies_orgs"]))
    result["products_models"] = sorted(list(result["products_models"]))
    result["media_books"] = sorted(list(result["media_books"]))

    return result

# ----------------------------------------------------------------------------
# EXAMPLE USAGE
# ----------------------------------------------------------------------------
if __name__ == "__main__":
    # Example input tags from your list
    example_tags = [
        "#geopolitics",
        "#us-china-relations",
        "#AI",
        "#deep-learning",
        "#Peter Thiel",
        "#OpenAI",
        "#investment-strategy",
        "#The Courage to Be Disliked",
        "#个人成长",
        "#创业",
        "#历史"
    ]

    # Process the tags
    processed_data = process_tags(example_tags)

    # Print the result in a clean JSON format
    print("--- Input Tags ---")
    print(example_tags)
    print("\n--- Processed PKM Data (v3.0) ---")
    print(json.dumps(processed_data, indent=2, ensure_ascii=False))

    # Another example
    example_2 = ["#a16z", "#web3", "#crypto", "#elon musk", "#tesla", "#spacex"]
    processed_data_2 = process_tags(example_2)
    print("\n--- Example 2 ---")
    print(json.dumps(processed_data_2, indent=2, ensure_ascii=False))
