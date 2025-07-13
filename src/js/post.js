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

    // 寻找主内容区里所有的 h2 和 h3 标题
    const headings = contentBody.querySelectorAll("h2, h3");

    if (headings.length > 0) {
      tocContainer.innerHTML = "<h3>目录</h3>"; // 添加目录标题
      const tocList = document.createElement("ul");

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
      // 如果文章没有 h2 或 h3 标题，就隐藏目录侧边栏
      tocContainer.style.display = "none";
    }
  }

  // 调用函数来执行目录生成
  generateTableOfContents();

  // 未来我们可以在这里添加“复制为Markdown”等其他功能
});
