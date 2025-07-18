// 使用动态导入，所以主函数必须是 async
module.exports = async function (eleventyConfig) {
  const { default: slugify } = await import("@sindresorhus/slugify");
  const { pinyin } = await import("pinyin");

  // --- 过滤器 (Filters) ---
  eleventyConfig.addFilter("jsonify", function (value) {
    return JSON.stringify(value);
  });

  eleventyConfig.addFilter("slug", (str) => {
    if (!str) return;
    const trimmedStr = str.trim();
    const pinyinStr = pinyin(trimmedStr, { style: pinyin.STYLE_NORMAL }).join(
      " "
    );
    return slugify(pinyinStr);
  });

  // --- 集合 (Collections) ---

  // 集合 1, 2, 3: 保持不变
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/posts/**/*.md");
  });
  eleventyConfig.addCollection("books", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/books/**/*.md");
  });
  eleventyConfig.addCollection("notes", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/notes/**/*.md");
  });

  // 集合 4: 这是我们最终的、最可靠的标签集合，现在增加了调试报告功能
  eleventyConfig.addCollection("tagList", (collectionApi) => {
    const tagMap = new Map();
    collectionApi.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => {
        const lowerCaseTag = tag.trim().toLowerCase();
        if (!tagMap.has(lowerCaseTag)) {
          tagMap.set(lowerCaseTag, {
            name: tag,
            key: lowerCaseTag,
            posts: [],
          });
        }
        tagMap.get(lowerCaseTag).posts.push(item);
      });
    });

    const tagList = Array.from(tagMap.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    // --- START: 调试代码来寻找冲突 ---
    const slugConflictMap = new Map();
    const slugifyFilter = eleventyConfig.getFilter("slug"); // 获取我们自己定义的 slug 过滤器

    tagList.forEach((tagInfo) => {
      const slug = slugifyFilter(tagInfo.key);
      if (!slugConflictMap.has(slug)) {
        slugConflictMap.set(slug, []);
      }
      slugConflictMap.get(slug).push(tagInfo.name);
    });

    console.log("\n--- Tag Slug Conflict Report ---");
    let foundConflict = false;
    slugConflictMap.forEach((tags, slug) => {
      if (tags.length > 1) {
        console.error(
          `[!! CONFLICT FOUND !!] The slug "${slug}" is generated by these different tags: [${tags.join(
            ", "
          )}]`
        );
        foundConflict = true;
      }
    });

    if (!foundConflict) {
      console.log("No tag conflicts found. All slugs are unique.");
    }
    console.log("--------------------------------\n");
    // --- END: 调试代码 ---

    return tagList;
  });

  // --- Passthrough Copy & 核心配置 (保持不变) ---
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    pathPrefix:
      process.env.NODE_ENV === "production" ? "/thought-foundry/" : "/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
