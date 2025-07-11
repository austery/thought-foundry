const { default: slugify } = require("@sindresorhus/slugify");

module.exports = function (eleventyConfig) {
  // ----------------------------------------------------------------
  // 集合 (Collections)
  // ----------------------------------------------------------------

  // ** 1. 创建一个只包含博客文章的集合 **
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/posts/**/*.md");
  });

  // ** 2. 创建所有标签的列表 **
  // 我们将回到标准、可靠的 getAll() 方法来收集标签
  eleventyConfig.addCollection("tagList", function (collectionApi) {
    const tagSet = new Set();
    // 使用 getAll() 来遍历你网站的每一页内容
    collectionApi.getAll().forEach((item) => {
      // 如果页面有 tags 并且它是一个数组
      if (item.data.tags && Array.isArray(item.data.tags)) {
        item.data.tags
          .filter((tag) => !!tag) // 过滤掉无效标签
          .forEach((tag) => tagSet.add(tag.trim())); // 清理空格并添加
      }
    });
    // 返回排序后的、独一无二的标签数组
    return [...tagSet].sort();
  });

  // ----------------------------------------------------------------
  // 过滤器 (Filters)
  // ----------------------------------------------------------------

  // ** 3. 创建一个健壮的 slug 过滤器 **
  eleventyConfig.addFilter("slug", (str) => {
    if (!str) {
      return;
    }
    const trimmedStr = str.trim(); // 清理前后空格
    let sluggedValue = slugify(trimmedStr, {
      lowercase: true,
      remove: /[*+~.()'"!:@]/g,
    });
    if (sluggedValue === "") {
      sluggedValue = encodeURIComponent(trimmedStr).toLowerCase();
    }
    return sluggedValue;
  });

  // ----------------------------------------------------------------
  // Eleventy 核心配置
  // ----------------------------------------------------------------
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
