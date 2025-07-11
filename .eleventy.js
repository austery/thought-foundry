const { default: slugify } = require("@sindresorhus/slugify");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("slug", (str) => {
    // 步骤 1: 确保输入不为空
    if (!str) {
      return;
    }

    // 步骤 2: 在所有处理之前，首先调用 .trim() 清除所有前后空格！
    const trimmedStr = str.trim();

    // 步骤 3: 直接对清理过的 trimmedStr 进行编码
    let sluggedValue = encodeURIComponent(trimmedStr);

    // （可选）你可以保留这个日志来确认输入和输出
    // console.log(
    //   `--- SLUG FILTER: Input='${str}', Trimmed='${trimmedStr}', Output='${sluggedValue}' ---`
    // );

    return sluggedValue;
  });

  // ... 你的其他配置（tagList 等）保持不变 ...
  eleventyConfig.addCollection("tagList", function (collectionApi) {
    const tagSet = new Set();
    collectionApi.getAll().forEach((item) => {
      if (Array.isArray(item.data.tags)) {
        item.data.tags
          .filter((tag) => !!tag)
          .forEach((tag) => {
            tagSet.add(tag.trim()); // 这里的 trim 也很好，继续保留
          });
      }
    });
    return [...tagSet].sort();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
