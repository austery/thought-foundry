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

  // 集合 4: 这是我们最终的、最可靠的标签集合
  eleventyConfig.addCollection("tagList", (collectionApi) => {
    const tagMap = new Map();
    collectionApi.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => {
        const lowerCaseTag = tag.trim().toLowerCase();
        if (!tagMap.has(lowerCaseTag)) {
          tagMap.set(lowerCaseTag, {
            name: tag, // 保留一个原始的大小写形式用于显示
            key: lowerCaseTag, // 明确存储小写的键，用于URL
            posts: [], // 创建一个空数组来存放文章
          });
        }
        tagMap.get(lowerCaseTag).posts.push(item);
      });
    });
    // 将 Map 转换为数组，这是最关键的改动
    return Array.from(tagMap.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
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
