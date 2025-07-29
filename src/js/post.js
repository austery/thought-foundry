// 等待页面的所有 HTML 内容都加载完毕后，再执行我们的代码
document.addEventListener("DOMContentLoaded", () => {
  // --- 目录生成功能 ---
  function generateTableOfContents() {
    const contentBody = document.getElementById("content-body");
    const tocContainer = document.getElementById("toc-container");

    // 确认页面上存在内容区和目录容器
    if (!contentBody || !tocContainer) {
      return;
    }

    // 获取页面标题
    const pageTitle = contentBody.getAttribute("data-page-title");

    // 寻找主内容区里所有的 h2 和 h3 标题
    const headings = contentBody.querySelectorAll("h2, h3");

    // 如果有标题或者有页面标题，则生成目录
    if (headings.length > 0 || pageTitle) {
      tocContainer.innerHTML = "<h3>目录</h3>"; // 添加目录标题
      const tocList = document.createElement("ul");

      // 如果有页面标题，首先添加页面标题到目录
      if (pageTitle) {
        const titleItem = document.createElement("li");
        const titleLink = document.createElement("a");
        titleLink.setAttribute("href", "#top");
        titleLink.textContent = pageTitle;
        titleLink.classList.add("toc-title");
        titleItem.appendChild(titleLink);
        tocList.appendChild(titleItem);
      }

      headings.forEach((heading, index) => {
        // 为每个标题创建一个唯一的 id，方便跳转
        const id = `heading-${index}`;
        heading.setAttribute("id", id);

        // 创建列表项和链接
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.setAttribute("href", `#${id}`);
        link.textContent = heading.textContent;

        // 将链接放入列表项，再将列表项放入总列表
        listItem.appendChild(link);
        tocList.appendChild(listItem);
      });

      // 将生成好的完整列表放入目录容器
      tocContainer.appendChild(tocList);
    } else {
      // 如果文章没有标题，就隐藏目录侧边栏
      tocContainer.style.display = "none";
    }
  }

  // --- 移动端TOC滚动隐藏功能 ---
  function initMobileTocScrollBehavior() {
    const tocContainer = document.getElementById("toc-container");
    if (!tocContainer) return;

    // 检查是否为移动设备
    function isMobile() {
      return window.innerWidth <= 992;
    }

    let lastScrollTop = 0;
    let scrollTimer = null;

    function handleScroll() {
      // 只在移动设备上执行
      if (!isMobile()) {
        tocContainer.classList.remove("hidden");
        document.body.classList.remove("hidden-toc");
        return;
      }

      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // 防抖处理，避免滚动时频繁触发
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
          // 向下滚动且超过100px时隐藏TOC
          tocContainer.classList.add("hidden");
          document.body.classList.add("hidden-toc");
        } else if (currentScrollTop < lastScrollTop) {
          // 向上滚动时显示TOC
          tocContainer.classList.remove("hidden");
          document.body.classList.remove("hidden-toc");
        }
        
        lastScrollTop = currentScrollTop;
      }, 10);
    }

    // 监听滚动事件
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 监听窗口大小变化
    window.addEventListener("resize", () => {
      if (!isMobile()) {
        tocContainer.classList.remove("hidden");
        document.body.classList.remove("hidden-toc");
      }
    });
  }

  // 调用函数来执行目录生成
  generateTableOfContents();
  
  // 初始化移动端TOC滚动行为
  initMobileTocScrollBehavior();

  // 未来我们可以在这里添加"复制为Markdown"等其他功能
});
