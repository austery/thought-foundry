const { default: slugify } = require("@sindresorhus/slugify");
// ** 1. 使用正确的“命名导出”语法来引入 pinyin 函数 **
const { pinyin } = require("pinyin");

module.exports = function (eleventyConfig) {
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
  // 过滤器 (Filters)
  // ----------------------------------------------------------------

  // ** 2. 这里的代码现在可以正常工作了 **
  eleventyConfig.addFilter("slug", (str) => {
    if (!str) {
      return;
    }
    const trimmedStr = str.trim();

    // 使用 pinyin 库将中文转为拼音字符串
    const pinyinStr = pinyin(trimmedStr, {
      style: pinyin.STYLE_NORMAL, // 普通风格，不带声调
    }).join(" ");

    // 使用 slugify 处理拼音字符串和英文
    return slugify(pinyinStr);
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
