const { default: slugify } = require("@sindresorhus/slugify");
const { pinyin } = require("pinyin");

module.exports = function (eleventyConfig) {
  // ----------------------------------------------------------------
  // 过滤器 (Filters)
  // ----------------------------------------------------------------

  // 过滤器 1: 自定义的 jsonify，用于安全地创建 JSON
  eleventyConfig.addFilter("jsonify", function (value) {
    return JSON.stringify(value);
  });

  // 过滤器 2: 你创建的、能处理中文的 slug
  eleventyConfig.addFilter("slug", (str) => {
    if (!str) {
      return;
    }
    const trimmedStr = str.trim();
    const pinyinStr = pinyin(trimmedStr, {
      style: pinyin.STYLE_NORMAL,
    }).join(" ");
    return slugify(pinyinStr);
  });

  // ----------------------------------------------------------------
  // 集合 (Collections)
  // ----------------------------------------------------------------
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/posts/**/*.md");
  });

  eleventyConfig.addCollection("tagList", function (collectionApi) {
    const tagSet = new Set();
    collectionApi.getAll().forEach((item) => {
      if (item.data.tags && Array.isArray(item.data.tags)) {
        item.data.tags
          .filter((tag) => !!tag)
          .forEach((tag) => tagSet.add(tag.trim()));
      }
    });
    return [...tagSet].sort();
  });

  // ----------------------------------------------------------------
  // Passthrough Copy (文件直通)
  // ----------------------------------------------------------------
  eleventyConfig.addPassthroughCopy("src/js");

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
