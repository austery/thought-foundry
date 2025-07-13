(function () {
  let posts = [];
  const searchInput = document.getElementById("search-input");
  const searchResultsContainer = document.getElementById("search-results");

  if (!searchInput || !searchResultsContainer) {
    return;
  }

  async function initializeSearch() {
    try {
      // 使用全局变量 site_url 来构建正确的路径
      // 使用 replace 防止出现 "//" 这样的双斜杠
      const searchIndexPath = (site_url + "search.json").replace("//", "/");

      const response = await fetch(searchIndexPath);

      if (!response.ok) {
        throw new Error("Failed to load search data from: " + searchIndexPath);
      }
      posts = await response.json();
    } catch (error) {
      console.error("Error initializing search:", error);
      searchResultsContainer.innerHTML =
        "<p>搜索功能加载失败，请稍后再试。</p>";
    }
  }

  function performSearch(query) {
    if (!query || posts.length === 0) {
      searchResultsContainer.innerHTML = "";
      return;
    }
    const lowerCaseQuery = query.toLowerCase();
    const matchingPosts = posts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(lowerCaseQuery);
      const contentMatch = post.content.toLowerCase().includes(lowerCaseQuery);
      return titleMatch || contentMatch;
    });
    displayResults(matchingPosts);
  }

  function displayResults(results) {
    if (results.length === 0) {
      searchResultsContainer.innerHTML = "<p>没有找到相关文章。</p>";
      return;
    }
    const resultsHtml = `
      <ul>
        ${results
          .map(
            (post) => `
          <li>
            <a href="${site_url}${post.url.substring(1)}">${post.title}</a>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
    // 注意上面的链接也需要拼接 site_url
    searchResultsContainer.innerHTML = resultsHtml;
  }

  searchInput.addEventListener("input", (event) => {
    performSearch(event.target.value);
  });

  initializeSearch();
})();
