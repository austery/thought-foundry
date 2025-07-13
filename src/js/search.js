// src/js/search.js

(function () {
  // --------------------------------------------------
  // 1. 全局变量和元素获取
  // --------------------------------------------------
  let posts = []; // 用来存放所有文章数据

  // 获取页面上的搜索框和结果容器
  const searchInput = document.getElementById("search-input");
  const searchResultsContainer = document.getElementById("search-results");

  // 如果找不到必要的元素，就直接退出，避免报错
  if (!searchInput || !searchResultsContainer) {
    return;
  }

  // --------------------------------------------------
  // 2. 数据获取
  // --------------------------------------------------
  async function initializeSearch() {
    try {
      const response = await fetch("/search.json");
      if (!response.ok) {
        throw new Error("Failed to load search data");
      }
      posts = await response.json();
    } catch (error) {
      console.error("Error initializing search:", error);
      searchResultsContainer.innerHTML =
        "<p>搜索功能加载失败，请稍后再试。</p>";
    }
  }

  // --------------------------------------------------
  // 3. 搜索与显示逻辑
  // --------------------------------------------------
  function performSearch(query) {
    // 如果查询词为空，或者文章数据还没加载好，就清空结果
    if (!query || posts.length === 0) {
      searchResultsContainer.innerHTML = "";
      return;
    }

    // 将查询词转为小写，方便不区分大小写地匹配
    const lowerCaseQuery = query.toLowerCase();

    // 过滤文章，找出标题或内容匹配的文章
    const matchingPosts = posts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(lowerCaseQuery);
      const contentMatch = post.content.toLowerCase().includes(lowerCaseQuery);
      return titleMatch || contentMatch;
    });

    // 显示搜索结果
    displayResults(matchingPosts);
  }

  function displayResults(results) {
    // 如果没有匹配结果，显示提示信息
    if (results.length === 0) {
      searchResultsContainer.innerHTML = "<p>没有找到相关文章。</p>";
      return;
    }

    // 生成结果列表的 HTML
    const resultsHtml = `
      <ul>
        ${results
          .map(
            (post) => `
          <li>
            <a href="${post.url}">${post.title}</a>
          </li>
        `
          )
          .join("")}
      </ul>
    `;

    // 将 HTML 注入到结果容器中
    searchResultsContainer.innerHTML = resultsHtml;
  }

  // --------------------------------------------------
  // 4. 事件监听
  // --------------------------------------------------

  // 监听搜索框的 'input' 事件
  searchInput.addEventListener("input", (event) => {
    performSearch(event.target.value);
  });

  // --------------------------------------------------
  // 5. 初始化
  // --------------------------------------------------
  initializeSearch();
})();
