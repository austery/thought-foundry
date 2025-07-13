// Use dynamic import() for ES Modules, so the main function must be async
module.exports = async function (eleventyConfig) {
  const { default: slugify } = await import("@sindresorhus/slugify");
  const { pinyin } = await import("pinyin");

  // ----------------------------------------------------------------
  // Filters
  // ----------------------------------------------------------------

  // 1. Custom filter to safely convert data to a JSON string
  eleventyConfig.addFilter("jsonify", function (value) {
    return JSON.stringify(value);
  });

  // 2. Your robust slug filter that handles Chinese characters
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
  // Collections
  // ----------------------------------------------------------------
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/posts/**/*.md");
  });

  eleventyConfig.addCollection("books", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/books/**/*.md");
  });

  eleventyConfig.addCollection("notes", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/notes/**/*.md");
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
  eleventyConfig.addPassthroughCopy("src/css");

  // ----------------------------------------------------------------
  // Eleventy Core Config
  // ----------------------------------------------------------------
  return {
    // Correct pathPrefix for GitHub Pages deployment
    pathPrefix:
      process.env.NODE_ENV === "production" ? "/thought-foundry/" : "/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    // We have removed the problematic markdownTemplateEngine and htmlTemplateEngine
  };
};
