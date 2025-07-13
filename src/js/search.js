(function () {
  let posts = [];
  const searchInput = document.getElementById("search-input");
  const searchResultsContainer = document.getElementById("search-results");

  if (!searchInput || !searchResultsContainer) {
    return;
  }

  async function initializeSearch() {
    try {
      // 从 form 的 data- 属性中获取正确的 search.json 路径
      const searchIndexPath = searchInput.form.dataset.searchIndex;

      // 使用这个正确的路径来 fetch 数据
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
            <a href="${post.url}">${post.title}</a>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
    searchResultsContainer.innerHTML = resultsHtml;
  }

  searchInput.addEventListener("input", (event) => {
    performSearch(event.target.value);
  });

  initializeSearch();
})();
