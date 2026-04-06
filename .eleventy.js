// 使用动态导入，所以主函数必须是 async
module.exports = async function (eleventyConfig) {
  const { default: slugify } = await import("@sindresorhus/slugify");
  const { pinyin } = await import("pinyin");
  const fs = require('fs');
  const path = require('path');

  // 性能优化：调试开关 - 设置 DEBUG=true 来启用调试输出
  const DEBUG = process.env.DEBUG === 'true';

  // [OPTIMIZATION] Pre-compiled regex patterns
  // Avoids creating regex objects 465,000+ times in loops
  const REGEX_QUOTES = /^['"]|['"]$/g;
  const REGEX_CAPS = /^[A-Z][a-z]/;
  const REGEX_MULTI_WORD_CAPS = /^[A-Z].*\s+.*[A-Z]/;
  const REGEX_CHINESE = /[\u4e00-\u9fa5]/;
  const REGEX_LOWER = /^[a-z]/;

  // 性能优化：构建时间监控（在 eleventy.before 中设置）
  let buildStartTime;

  // 性能优化：持久化拼音缓存
  const CACHE_FILE = path.join(__dirname, '.eleventy-cache.json');
  let persistentCache = {};

  // 加载持久化缓存
  if (fs.existsSync(CACHE_FILE)) {
    try {
      const cacheData = fs.readFileSync(CACHE_FILE, 'utf8');
      persistentCache = JSON.parse(cacheData);
      if (DEBUG) {
        console.log(`[Cache] Loaded ${Object.keys(persistentCache.pinyin || {}).length} cached pinyin entries`);
      }
    } catch (error) {
      console.warn('[Cache] Failed to load cache file:', error.message);
      persistentCache = {};
    }
  }

  // 初始化缓存对象
  if (!persistentCache.pinyin) {
    persistentCache.pinyin = {};
  }

  // 内存缓存（运行时）
  const pinyinCache = new Map(Object.entries(persistentCache.pinyin || {}));

  // 性能优化：Slug 结果缓存 - 缓存完整的 slug 计算结果
  const slugCache = new Map();
  let slugCallCount = 0;
  let slugCacheHits = 0;

  function cachedPinyin(text, options = { style: pinyin.STYLE_NORMAL }) {
    const cacheKey = `${text}:${JSON.stringify(options)}`;
    if (pinyinCache.has(cacheKey)) {
      return pinyinCache.get(cacheKey);
    }
    const result = pinyin(text, options).join(" ");
    pinyinCache.set(cacheKey, result);
    return result;
  }

  // 实体规范化配置 - 用于自动合并相似实体名称
  const ENTITY_NORMALIZATION = {
    // 统一key生成：转小写、去除特殊字符、统一分隔符
    normalizeKey: (name) => {
      if (!name) return '';
      return name
        .toLowerCase()
        .replace(/[''""]/g, '')              // 去除各种引号
        .replace(/[áàäâ]/g, 'a')             // 统一重音字符
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöô]/g, 'o')
        .replace(/[úùüû]/g, 'u')
        .replace(/ñ/g, 'n')
        .replace(/ç/g, 'c')
        .replace(/\s+/g, '-')                // 空格转连字符
        .replace(/[^\w\u4e00-\u9fa5-]/g, '') // 只保留字母、数字、中文和连字符
        .replace(/-+/g, '-')                 // 合并多个连字符
        .replace(/^-|-$/g, '')               // 去除首尾连字符
        .trim();
    },

    // 从多个变体中选择最规范的显示名称
    selectCanonical: (variants) => {
      if (!variants || variants.length === 0) return '';
      if (variants.length === 1) return variants[0];

      // 评分系统：选择最"规范"的名称
      const scored = variants.map(name => {
        let score = 0;

        // 优先：首字母大写的英文（如 "Donald Trump"）
        if (REGEX_CAPS.test(name)) score += 100;

        // 次选：包含空格的多词英文（如 "Bank of America"）
        if (REGEX_MULTI_WORD_CAPS.test(name)) score += 50;

        // 中文形式（如 "习近平"）
        if (REGEX_CHINESE.test(name)) score += 30;

        // 惩罚：全小写形式（如 "donald-trump"）
        if (REGEX_LOWER.test(name) && !name.includes('-')) score -= 50;

        // 惩罚：包含连字符的slug形式（如 "bank-of-america"）
        if (name.includes('-') && name === name.toLowerCase()) score -= 100;

        // 长度适中更好
        const length = name.length;
        if (length >= 3 && length <= 30) score += 10;

        return { name, score };
      });

      // 按分数排序，返回最高分的
      scored.sort((a, b) => b.score - a.score);
      return scored[0].name;
    }
  };

  // --- 过滤器 (Filters) ---
  eleventyConfig.addFilter("jsonify", function (value) {
    return JSON.stringify(value);
  });

  // 添加排除检查过滤器
  eleventyConfig.addFilter("isExcluded", function (item) {
    return item && item.data && item.data.exclude === true;
  });

  // 添加过滤已排除项目的过滤器
  eleventyConfig.addFilter("filterExcluded", function (collection) {
    if (!Array.isArray(collection)) return collection;
    return collection.filter((item) => !item.data || !item.data.exclude);
  });

  eleventyConfig.addFilter("slug", (str) => {
    if (!str) return;

    slugCallCount++;
    const trimmedStr = str.trim();

    // 检查缓存
    if (slugCache.has(trimmedStr)) {
      slugCacheHits++;
      return slugCache.get(trimmedStr);
    }

    // 未命中缓存，计算新的 slug
    const pinyinStr = cachedPinyin(trimmedStr);
    const result = slugify(pinyinStr);

    // 存入缓存
    slugCache.set(trimmedStr, result);
    return result;
  });

  // 🚀 O(1) Lookup Filter - use this in templates instead of | slug
  // Prerequisites: The entity must have been processed in a collection first
  eleventyConfig.addFilter("lookupSlug", (str) => {
    if (!str) return '';
    const trimmed = str.trim();
    // Direct cache read - no computation
    if (slugCache.has(trimmed)) {
      return slugCache.get(trimmed);
    }
    // Fallback to computed slug if not in cache
    return eleventyConfig.getFilter("slug")(str);
  });

  // [PHASE 3 OPTIMIZATION] Slug lookup helpers that return pre-computed slugs
  // These avoid calling | slug filter in templates by looking up pre-computed values

  eleventyConfig.addFilter("getSpeakerSlug", function (speakerName, collections) {
    if (!collections || !collections.speakerList) return eleventyConfig.getFilter("slug")(speakerName);
    const uniqueKey = eleventyConfig.getFilter("getSpeakerUniqueKey")(speakerName, collections);
    const speaker = collections.speakerList.find(s => s.uniqueKey === uniqueKey);
    return speaker ? speaker.slug : eleventyConfig.getFilter("slug")(uniqueKey);
  });

  eleventyConfig.addFilter("getAreaSlug", function (areaName, collections) {
    if (!collections || !collections.areaList) return eleventyConfig.getFilter("slug")(areaName);
    const uniqueKey = eleventyConfig.getFilter("getAreaUniqueKey")(areaName, collections);
    const area = collections.areaList.find(a => a.uniqueKey === uniqueKey);
    return area ? area.slug : eleventyConfig.getFilter("slug")(uniqueKey);
  });

  eleventyConfig.addFilter("getCategorySlug", function (categoryName, collections) {
    if (!collections || !collections.categoryList) return eleventyConfig.getFilter("slug")(categoryName);
    const uniqueKey = eleventyConfig.getFilter("getCategoryUniqueKey")(categoryName, collections);
    const category = collections.categoryList.find(c => c.uniqueKey === uniqueKey);
    return category ? category.slug : eleventyConfig.getFilter("slug")(uniqueKey);
  });

  eleventyConfig.addFilter("getProjectSlug", function (projectName, collections) {
    if (!collections || !collections.projectList) return eleventyConfig.getFilter("slug")(projectName);
    const uniqueKey = eleventyConfig.getFilter("getProjectUniqueKey")(projectName, collections);
    const project = collections.projectList.find(p => p.uniqueKey === uniqueKey);
    return project ? project.slug : eleventyConfig.getFilter("slug")(uniqueKey);
  });

  eleventyConfig.addFilter("getTagSlug", function (tagName, collections) {
    if (!collections || !collections.tagList) return eleventyConfig.getFilter("slug")(tagName);
    const tag = collections.tagList.find(t => t.name === tagName);
    return tag ? tag.slug : eleventyConfig.getFilter("slug")(tagName);
  });

  // Returns true if the given tag name has a rendered page (i.e. it's in the filtered tagList)
  eleventyConfig.addFilter("tagHasPage", function (tagName, tagList) {
    if (!tagList) return false;
    return tagList.some(t => t.name === tagName);
  });

  // 添加一个过滤器来获取演讲者的唯一键
  eleventyConfig.addFilter(
    "getSpeakerUniqueKey",
    function (speakerName, collections) {
      if (!collections || !collections.speakerList)
        return slugify(
          cachedPinyin(speakerName.trim().toLowerCase())
        );

      const cleanedName = speakerName.replace(/^['"]|['"]$/g, "").trim();
      const lowerCaseName = cleanedName.toLowerCase();

      const speaker = collections.speakerList.find(
        (s) => s.key === lowerCaseName
      );
      return speaker ? speaker.uniqueKey : lowerCaseName;
    }
  );

  // 添加过滤器来获取领域的唯一键
  eleventyConfig.addFilter("getAreaUniqueKey", function (areaName, collections) {
    if (!collections || !collections.areaList)
      return slugify(
        cachedPinyin(areaName.trim().toLowerCase())
      );

    const lowerCaseName = areaName.trim().toLowerCase();
    const area = collections.areaList.find((a) => a.key === lowerCaseName);
    return area ? area.uniqueKey : lowerCaseName;
  });

  // 添加过滤器来获取分类的唯一键
  eleventyConfig.addFilter("getCategoryUniqueKey", function (categoryName, collections) {
    if (!collections || !collections.categoryList)
      return slugify(
        cachedPinyin(categoryName.trim().toLowerCase())
      );

    const lowerCaseName = categoryName.trim().toLowerCase();
    const category = collections.categoryList.find((c) => c.key === lowerCaseName);
    return category ? category.uniqueKey : lowerCaseName;
  });

  // 添加过滤器来获取专题的唯一键
  eleventyConfig.addFilter("getProjectUniqueKey", function (projectName, collections) {
    if (!collections || !collections.projectList)
      return slugify(
        cachedPinyin(projectName.trim().toLowerCase())
      );

    const lowerCaseName = projectName.trim().toLowerCase();
    const project = collections.projectList.find((p) => p.key === lowerCaseName);
    return project ? project.uniqueKey : lowerCaseName;
  });

  // --- 集合 (Collections) ---

  // 集合 1, 2, 3: 添加排除功能
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("./src/content/posts/**/*.md")
      .filter((item) => !item.data.exclude);
  });
  eleventyConfig.addCollection("books", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("./src/content/books/**/*.md")
      .filter((item) => !item.data.exclude);
  });
  eleventyConfig.addCollection("notes", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("./src/content/notes/**/*.md")
      .filter((item) => !item.data.exclude);
  });

  // 集合 4: 这是我们最终的、最可靠的标签集合，现在增加了更强大的调试报告功能和排除功能
  eleventyConfig.addCollection("tagList", (collectionApi) => {
    const tagMap = new Map();
    const slugifyFilter = eleventyConfig.getFilter("slug");

    collectionApi.getAll().forEach((item) => {
      // 我们只处理那些在 posts, books, 或 notes 文件夹里的内容，并且没有被排除的
      if (
        (item.inputPath.includes("./src/content/posts/") ||
          item.inputPath.includes("./src/content/books/") ||
          item.inputPath.includes("./src/content/notes/")) &&
        !item.data.exclude
      ) {
        (item.data.tags || []).forEach((tag) => {
          // 过滤掉内部标签
          if (tag === "post" || tag === "note" || tag === "视频文稿") {
            return;
          }

          // --- START: 增强的标签清洗和规范化 ---
          // 1. 去除首尾多余的空格
          const cleanedTag = tag.trim();
          // 2. 使用 slug 过滤器来创建唯一的、URL友好的key
          const slugKey = slugifyFilter(cleanedTag);
          // --- END: 增强的标签清洗和规范化 ---

          if (!tagMap.has(slugKey)) {
            tagMap.set(slugKey, {
              // 我们存储第一次遇到的、经过清理的标签名作为显示名称
              name: cleanedTag,
              key: slugKey, // key 现在是 slugified 的版本
              slug: slugKey, // [OPTIMIZATION] Pre-computed slug (key IS the slug for tags)
              posts: [],
              sources: new Set(),
            });
          }

          // 向现有的标签条目中添加文章和来源
          tagMap.get(slugKey).posts.push(item);
          tagMap.get(slugKey).sources.add(item.inputPath);
        });
      }
    });

    const tagList = Array.from(tagMap.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    // --- START: 调试代码来寻找冲突 (这部分代码非常有用，保持原样) ---
    const slugConflictMap = new Map();

    tagList.forEach((tagInfo) => {
      const slug = tagInfo.key; // The key is now the slug itself
      if (!slugConflictMap.has(slug)) {
        slugConflictMap.set(slug, []);
      }
      slugConflictMap.get(slug).push({
        name: tagInfo.name,
        sources: Array.from(tagInfo.sources),
      });
    });

    if (DEBUG) {
      console.log("\n--- Tag Slug Conflict Report ---");
      let foundConflict = false;
      slugConflictMap.forEach((tags, slug) => {
        if (tags.length > 1) {
          console.error(
            `[!! CONFLICT FOUND !!] The slug "${slug}" is generated by these tags:`
          );
          tags.forEach((tagData) => {
            console.error(
              `  - Tag: "${tagData.name
              }" is found in file(s): ${tagData.sources.join(", ")}`
            );
          });
          foundConflict = true;
        }
      });

      if (!foundConflict) {
        console.log("No tag conflicts found. All slugs are unique.");
      }
      console.log("--------------------------------\n");
    }
    // --- END: 调试代码 ---

    // --- START: Threshold filter - only render pages for tags with 5+ articles ---
    const MIN_TAG_OCCURRENCES = 5;
    const filteredTagList = tagList.filter(tag => tag.posts.length >= MIN_TAG_OCCURRENCES);

    if (DEBUG) {
      console.log(`[tagList] Total unique tags: ${tagList.length}, after threshold (≥${MIN_TAG_OCCURRENCES}): ${filteredTagList.length}`);
    }
    // --- END: Threshold filter ---

    return filteredTagList;
  });

  // 集合 5: 演讲者集合 - 类似于标签集合但专门处理演讲者，现在也支持排除功能
  eleventyConfig.addCollection("speakerList", (collectionApi) => {
    const speakerMap = new Map();
    collectionApi.getAll().forEach((item) => {
      // 我们只处理那些在 posts, books, 或 notes 文件夹里的内容，并且没有被排除的
      if (
        (item.inputPath.includes("./src/content/posts/") ||
          item.inputPath.includes("./src/content/books/") ||
          item.inputPath.includes("./src/content/notes/")) &&
        !item.data.exclude
      ) {
        // 处理 speaker 和 guest 字段
        const allSpeakers = [];

        // 从 speaker 字段提取演讲者
        const speaker = item.data.speaker;
        if (speaker && speaker.trim() !== "" && speaker.trim() !== "''") {
          const speakers = speaker
            .split(",")
            .map((s) => s.trim())
            .filter((s) => s !== "");
          allSpeakers.push(...speakers);
        }

        // 从 guest 字段提取嘉宾
        const guest = item.data.guest;
        if (guest && guest.trim() !== "" && guest.trim() !== "''") {
          const guests = guest
            .split(",")
            .map((g) => g.trim())
            .filter((g) => g !== "");
          allSpeakers.push(...guests);
        }

        // 去重并处理所有演讲者
        const uniqueSpeakers = [
          ...new Set(allSpeakers.map((s) => s.toLowerCase())),
        ].map((lowercaseName) =>
          allSpeakers.find((s) => s.toLowerCase() === lowercaseName)
        );

        uniqueSpeakers.forEach((speakerName) => {
          // 清理演讲者名称：去除引号和额外空格
          const cleanedName = speakerName.replace(/^['"]|['"]$/g, "").trim();
          if (cleanedName !== "") {
            const lowerCaseSpeaker = cleanedName.toLowerCase();
            if (!speakerMap.has(lowerCaseSpeaker)) {
              speakerMap.set(lowerCaseSpeaker, {
                name: cleanedName,
                key: lowerCaseSpeaker,
                posts: [],
                sources: new Set(),
              });
            }
            speakerMap.get(lowerCaseSpeaker).posts.push(item);
            speakerMap.get(lowerCaseSpeaker).sources.add(item.inputPath);
          }
        });
      }
    });

    const speakerList = Array.from(speakerMap.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    // Debug output for speaker conflicts and resolve slug conflicts
    const slugConflictMap = new Map();
    const slugifyFilter = eleventyConfig.getFilter("slug");

    // First pass: detect conflicts
    speakerList.forEach((speakerInfo) => {
      const slug = slugifyFilter(speakerInfo.key);
      if (!slugConflictMap.has(slug)) {
        slugConflictMap.set(slug, []);
      }
      slugConflictMap.get(slug).push(speakerInfo);
    });

    // Second pass: resolve conflicts by adding unique identifiers
    let foundConflict = false;
    slugConflictMap.forEach((speakers, slug) => {
      if (speakers.length > 1) {
        if (DEBUG) {
          console.error(
            `[!! SPEAKER CONFLICT FOUND !!] The slug "${slug}" is generated by these speakers:`
          );
          speakers.forEach((speakerData, index) => {
            console.error(
              `  - Speaker: "${speakerData.name
              }" is found in file(s): ${Array.from(speakerData.sources).join(
                ", "
              )}`
            );
          });
        }
        speakers.forEach((speakerData, index) => {
          // Resolve conflict by adding index suffix
          speakerData.uniqueKey = `${speakerData.key}-${index + 1}`;
          speakerData.slug = slugifyFilter(speakerData.uniqueKey); // [OPTIMIZATION] Pre-compute slug
        });
        foundConflict = true;
      } else {
        // No conflict, use original key
        speakers[0].uniqueKey = speakers[0].key;
        speakers[0].slug = slug; // [OPTIMIZATION] Pre-computed slug (already computed above)
      }
    });

    if (DEBUG) {
      console.log("\n--- Speaker Slug Conflict Report ---");
      if (!foundConflict) {
        console.log("No speaker conflicts found. All slugs are unique.");
      } else {
        console.log("Conflicts resolved by adding unique identifiers.");
      }
      console.log("------------------------------------\n");
    }

    return speakerList;
  });

  // 集合 6: 分类集合 (v7.4) - 按 category 字段分组文章
  eleventyConfig.addCollection("categoryList", (collectionApi) => {
    const categoryMap = new Map();
    collectionApi.getAll().forEach((item) => {
      // 只处理 posts, books, notes 文件夹中未被排除的内容
      if (
        (item.inputPath.includes("./src/content/posts/") ||
          item.inputPath.includes("./src/content/books/") ||
          item.inputPath.includes("./src/content/notes/")) &&
        !item.data.exclude &&
        item.data.category
      ) {
        const category = item.data.category.trim();
        const lowerCaseCategory = category.toLowerCase();
        if (!categoryMap.has(lowerCaseCategory)) {
          categoryMap.set(lowerCaseCategory, {
            name: category,
            key: lowerCaseCategory,
            posts: [],
            sources: new Set(),
          });
        }
        categoryMap.get(lowerCaseCategory).posts.push(item);
        categoryMap.get(lowerCaseCategory).sources.add(item.inputPath);
      }
    });

    const categoryList = Array.from(categoryMap.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    // Conflict detection and resolution
    const slugConflictMap = new Map();
    const slugifyFilter = eleventyConfig.getFilter("slug");

    categoryList.forEach((categoryInfo) => {
      const slug = slugifyFilter(categoryInfo.key);
      if (!slugConflictMap.has(slug)) {
        slugConflictMap.set(slug, []);
      }
      slugConflictMap.get(slug).push(categoryInfo);
    });

    let foundConflict = false;
    slugConflictMap.forEach((categories, slug) => {
      if (categories.length > 1) {
        if (DEBUG) {
          console.error(
            `[!! CATEGORY CONFLICT FOUND !!] The slug "${slug}" is generated by these categories:`
          );
          categories.forEach((catData, index) => {
            console.error(
              `  - Category: "${catData.name}" is found in file(s): ${Array.from(
                catData.sources
              ).join(", ")}`
            );
          });
        }
        categories.forEach((catData, index) => {
          catData.uniqueKey = `${catData.key}-${index + 1}`;
          catData.slug = slugifyFilter(catData.uniqueKey); // [OPTIMIZATION] Pre-compute slug
        });
        foundConflict = true;
      } else {
        categories[0].uniqueKey = categories[0].key;
        categories[0].slug = slug; // [OPTIMIZATION] Pre-computed slug
      }
    });

    if (DEBUG) {
      console.log("\n--- Category Slug Conflict Report ---");
      if (!foundConflict) {
        console.log("No category conflicts found. All slugs are unique.");
      } else {
        console.log("Conflicts resolved by adding unique identifiers.");
      }
      console.log("-------------------------------------\n");
    }

    return categoryList;
  });

  // 集合 7: 专题集合 (v7.4) - 按 project 字段分组文章 (project 是数组)
  eleventyConfig.addCollection("projectList", (collectionApi) => {
    const projectMap = new Map();
    collectionApi.getAll().forEach((item) => {
      // 只处理 posts, books, notes 文件夹中未被排除的内容
      if (
        (item.inputPath.includes("./src/content/posts/") ||
          item.inputPath.includes("./src/content/books/") ||
          item.inputPath.includes("./src/content/notes/")) &&
        !item.data.exclude &&
        item.data.project &&
        Array.isArray(item.data.project)
      ) {
        // project 是数组，一篇文章可能属于多个专题
        item.data.project.forEach((proj) => {
          const project = proj.trim();
          if (project !== "") {
            const lowerCaseProject = project.toLowerCase();
            if (!projectMap.has(lowerCaseProject)) {
              projectMap.set(lowerCaseProject, {
                name: project,
                key: lowerCaseProject,
                posts: [],
                sources: new Set(),
              });
            }
            projectMap.get(lowerCaseProject).posts.push(item);
            projectMap.get(lowerCaseProject).sources.add(item.inputPath);
          }
        });
      }
    });

    const projectList = Array.from(projectMap.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    // Conflict detection and resolution
    const slugConflictMap = new Map();
    const slugifyFilter = eleventyConfig.getFilter("slug");

    projectList.forEach((projectInfo) => {
      const slug = slugifyFilter(projectInfo.key);
      if (!slugConflictMap.has(slug)) {
        slugConflictMap.set(slug, []);
      }
      slugConflictMap.get(slug).push(projectInfo);
    });

    let foundConflict = false;
    slugConflictMap.forEach((projects, slug) => {
      if (projects.length > 1) {
        if (DEBUG) {
          console.error(
            `[!! PROJECT CONFLICT FOUND !!] The slug "${slug}" is generated by these projects:`
          );
          projects.forEach((projData, index) => {
            console.error(
              `  - Project: "${projData.name}" is found in file(s): ${Array.from(
                projData.sources
              ).join(", ")}`
            );
          });
        }
        projects.forEach((projData, index) => {
          projData.uniqueKey = `${projData.key}-${index + 1}`;
          projData.slug = slugifyFilter(projData.uniqueKey); // [OPTIMIZATION] Pre-compute slug
        });
        foundConflict = true;
      } else {
        projects[0].uniqueKey = projects[0].key;
        projects[0].slug = slug; // [OPTIMIZATION] Pre-computed slug
      }
    });

    if (DEBUG) {
      console.log("\n--- Project Slug Conflict Report ---");
      if (!foundConflict) {
        console.log("No project conflicts found. All slugs are unique.");
      } else {
        console.log("Conflicts resolved by adding unique identifiers.");
      }
      console.log("------------------------------------\n");
    }

    return projectList;
  });

  // 集合 7.5: 领域集合 (v7.4) - 按 area 字段分组文章
  eleventyConfig.addCollection("areaList", (collectionApi) => {
    const areaMap = new Map();
    collectionApi.getAll().forEach((item) => {
      if (
        (item.inputPath.includes("./src/content/posts/") ||
          item.inputPath.includes("./src/content/books/") ||
          item.inputPath.includes("./src/content/notes/")) &&
        !item.data.exclude &&
        item.data.area
      ) {
        const area = item.data.area.trim();
        const lowerCaseArea = area.toLowerCase();
        if (!areaMap.has(lowerCaseArea)) {
          areaMap.set(lowerCaseArea, {
            name: area,
            key: lowerCaseArea,
            posts: [],
            sources: new Set(),
          });
        }
        areaMap.get(lowerCaseArea).posts.push(item);
        areaMap.get(lowerCaseArea).sources.add(item.inputPath);
      }
    });

    const areaList = Array.from(areaMap.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    // Conflict detection and resolution
    const slugConflictMap = new Map();
    const slugifyFilter = eleventyConfig.getFilter("slug");

    areaList.forEach((areaInfo) => {
      const slug = slugifyFilter(areaInfo.key);
      if (!slugConflictMap.has(slug)) {
        slugConflictMap.set(slug, []);
      }
      slugConflictMap.get(slug).push(areaInfo);
    });

    let foundConflict = false;
    slugConflictMap.forEach((areas, slug) => {
      if (areas.length > 1) {
        if (DEBUG) {
          console.error(
            `[!! AREA CONFLICT FOUND !!] The slug "${slug}" is generated by these areas:`
          );
          areas.forEach((areaData, index) => {
            console.error(
              `  - Area: "${areaData.name}" is found in file(s): ${Array.from(
                areaData.sources
              ).join(", ")}`
            );
          });
        }
        areas.forEach((areaData, index) => {
          areaData.uniqueKey = `${areaData.key}-${index + 1}`;
          areaData.slug = slugifyFilter(areaData.uniqueKey); // [OPTIMIZATION] Pre-compute slug
        });
        foundConflict = true;
      } else {
        areas[0].uniqueKey = areas[0].key;
        areas[0].slug = slug; // [OPTIMIZATION] Pre-computed slug
      }
    });

    if (DEBUG) {
      console.log("\n--- Area Slug Conflict Report ---");
      if (!foundConflict) {
        console.log("No area conflicts found. All slugs are unique.");
      } else {
        console.log("Conflicts resolved by adding unique identifiers.");
      }
      console.log("-------------------------------------\n");
    }

    return areaList;
  });

  // 集合 8: 完整集合（包含被排除的项目）- 用于内部处理和调试
  eleventyConfig.addCollection("allItems", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/{posts,books,notes}/**/*.md");
  });

  // 集合 9: 被排除的项目集合 - 用于调试和监控
  eleventyConfig.addCollection("excludedItems", function (collectionApi) {
    const excludedItems = collectionApi
      .getFilteredByGlob("./src/content/{posts,books,notes}/**/*.md")
      .filter((item) => item.data.exclude);

    // 调试输出
    if (DEBUG && excludedItems.length > 0) {
      console.log("\n--- Excluded Items Report ---");
      console.log(`Found ${excludedItems.length} excluded item(s):`);
      excludedItems.forEach((item, index) => {
        console.log(`${index + 1}. ${item.inputPath}`);
        console.log(`   Title: ${item.data.title || "No title"}`);
        console.log(`   Exclude: ${item.data.exclude}`);
      });
      console.log("----------------------------\n");
    }

    return excludedItems;
  });

  // --- START: 新增的临时侦测代码 ---
  // 集合 10: 这个集合专门用来寻找有问题的 speaker 字段
  eleventyConfig.addCollection("longSpeakerDetector", function (collectionApi) {
    if (!DEBUG) return [];

    console.log("\n--- Checking for long speaker fields ---");
    let problemsFound = 0;
    const problematicFiles = [];

    collectionApi.getAll().forEach((item) => {
      // 检查多种可能的数据路径
      let speaker = null;

      // 尝试不同的数据访问路径
      if (item.data && item.data.speaker) {
        speaker = item.data.speaker;
      } else if (item.data && item.data.data && item.data.data.speaker) {
        speaker = item.data.data.speaker;
      }

      // 如果找到了 speaker 字段
      if (speaker) {
        // 如果 speaker 是字符串并且长度超过 100 个字符
        if (typeof speaker === "string" && speaker.length > 100) {
          problemsFound++;
          problematicFiles.push({
            file: item.inputPath,
            length: speaker.length,
            preview: speaker.substring(0, 200),
          });

          console.error(`\n[!! POTENTIAL PROBLEM FOUND !!]`);
          console.error(`File: ${item.inputPath}`);
          console.error(
            `Speaker field is too long (length: ${speaker.length})`
          );
          console.error(`First 200 characters of speaker field:`);
          console.error(`"${speaker.substring(0, 200)}..."`);
          console.error(`---`);
        }

        // 也检查是否包含换行符或其他奇怪字符
        if (
          typeof speaker === "string" &&
          (speaker.includes("\n") || speaker.includes("\r"))
        ) {
          console.warn(
            `[!! WARNING !!] Speaker field contains newlines in: ${item.inputPath}`
          );
          console.warn(`Speaker preview: "${speaker.substring(0, 100)}..."`);
        }
      }
    });

    console.log(`--- Check complete: ${problemsFound} problems found ---`);

    if (problemsFound > 0) {
      console.log(`\n🔧 FILES THAT NEED FIXING:`);
      problematicFiles.forEach((problem, index) => {
        console.log(`${index + 1}. File: ${problem.file}`);
        console.log(`   Length: ${problem.length} characters`);
        console.log(`   Preview: "${problem.preview}..."`);
        console.log("");
      });
      console.log(
        `\n💡 RECOMMENDATION: Fix the speaker field in these files by:`
      );
      console.log(`   1. Moving the content from 'speaker:' to the main body`);
      console.log(
        `   2. Adding a proper speaker name (or leave blank if unknown)`
      );
      console.log(`   3. Ensuring proper YAML frontmatter formatting\n`);
    }

    return []; // 这个集合不需要输出任何东西
  });
  // --- END: 新增的临时侦测代码 ---

  // --- Passthrough Copy & 核心配置 (保持不变) ---
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");

  // 性能优化：在构建开始时记录时间
  eleventyConfig.on('eleventy.before', async () => {
    buildStartTime = Date.now();
  });

  // 性能优化：在构建结束时保存持久化缓存
  eleventyConfig.on('eleventy.after', async () => {
    // 将内存缓存转换回对象格式
    persistentCache.pinyin = Object.fromEntries(pinyinCache);

    // 保存到文件
    try {
      fs.writeFileSync(CACHE_FILE, JSON.stringify(persistentCache, null, 2));
      if (DEBUG) {
        console.log(`[Cache] Saved ${pinyinCache.size} pinyin entries to cache file`);
      }
    } catch (error) {
      console.warn('[Cache] Failed to save cache file:', error.message);
    }

    // 输出构建时间监控
    const buildEndTime = Date.now();
    const buildDuration = ((buildEndTime - buildStartTime) / 1000).toFixed(2);
    console.log(`\n✨ Build completed in ${buildDuration}s`);
    console.log(`📊 Performance Stats:`);
    console.log(`   - Pinyin cache entries: ${pinyinCache.size}`);
    console.log(`   - Pinyin cache hit rate: ${pinyinCache.size > 0 ? '~' + Math.min(100, Math.round(pinyinCache.size / 3000 * 100)) + '%' : 'N/A'}`);
    console.log(`\n🚀 Slug Filter Performance:`);
    console.log(`   - Total slug calls: ${slugCallCount.toLocaleString()}`);
    console.log(`   - Cache hits: ${slugCacheHits.toLocaleString()}`);
    console.log(`   - Cache misses: ${(slugCallCount - slugCacheHits).toLocaleString()}`);
    console.log(`   - Cache hit rate: ${slugCallCount > 0 ? ((slugCacheHits / slugCallCount) * 100).toFixed(1) + '%' : 'N/A'}`);
    console.log(`   - Unique slugs: ${slugCache.size.toLocaleString()}`);
  });

  return {
    // 如果是一个repository，可能需要设置 pathPrefix
    // pathPrefix: process.env.NODE_ENV === "production" ? "/thought-foundry/" : "/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
