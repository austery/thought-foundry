// This is now an async function to allow for `await`
module.exports = async function (eleventyConfig) {
  // Use dynamic import() to load the ES Modules
  const { default: slugify } = await import("@sindresorhus/slugify");
  const { pinyin } = await import("pinyin");

  // ----------------------------------------------------------------
  // Filters
  // ----------------------------------------------------------------
  eleventyConfig.addFilter("slug", (str) => {
    if (!str) {
      return;
    }
    const trimmedStr = str.trim();
    const pinyinStr = pinyin(trimmedStr, {
      style: pinyin.STYLE_NORMAL, // Normal style, without tones
    }).join(" ");
    return slugify(pinyinStr);
  });

  eleventyConfig.addFilter("jsonify", function (value) {
    return JSON.stringify(value);
  });

  // ----------------------------------------------------------------
  // Collections
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
  // Passthrough Copy
  // ----------------------------------------------------------------
  eleventyConfig.addPassthroughCopy("src/js");

  // ----------------------------------------------------------------
  // Eleventy Core Config
  // ----------------------------------------------------------------
  return {
    // 当在生产环境（比如 GitHub Actions）构建时，添加路径前缀
    // 在本地开发时，前缀为 "/"
    pathPrefix:
      process.env.NODE_ENV === "production" ? "/thought-foundry/" : "/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
