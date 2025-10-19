/**
 * 全局展开/折叠所有 <details> 元素的功能
 * 用于一键显示/隐藏所有英文原文
 */

(function () {
  // 等待 DOM 加载完成
  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleAllDetailsBtn");
    if (!toggleBtn) return; // 如果按钮不存在（不在文章页），直接返回

    const btnText = toggleBtn.querySelector(".btn-text");
    let allExpanded = false; // 追踪当前状态

    // 检查是否有英文原文的 details 元素（排除实体提取的 details）
    function hasEnglishOriginalDetails() {
      const allDetails = document.querySelectorAll("details:not(.entity-details)");
      return allDetails.length > 0;
    }

    // 如果页面没有英文原文的 details 元素，隐藏按钮
    if (!hasEnglishOriginalDetails()) {
      toggleBtn.style.display = "none";
      return;
    }

    // 点击按钮时的处理函数
    toggleBtn.addEventListener("click", function () {
      const allDetails = document.querySelectorAll("details:not(.entity-details)");

      if (allExpanded) {
        // 当前是展开状态，折叠所有
        allDetails.forEach((detail) => {
          detail.removeAttribute("open");
        });
        btnText.textContent = "展开全部原文";
        allExpanded = false;
      } else {
        // 当前是折叠状态，展开所有
        allDetails.forEach((detail) => {
          detail.setAttribute("open", "");
        });
        btnText.textContent = "折叠全部原文";
        allExpanded = true;
      }
    });

    // 监听单个英文原文 details 的手动展开/折叠，同步按钮状态
    const allDetails = document.querySelectorAll("details:not(.entity-details)");
    allDetails.forEach((detail) => {
      detail.addEventListener("toggle", function () {
        // 延迟检查，确保状态已更新
        setTimeout(updateButtonState, 10);
      });
    });

    // 更新按钮状态（根据所有英文原文 details 的当前状态）
    function updateButtonState() {
      const allDetails = document.querySelectorAll("details:not(.entity-details)");
      const openCount = Array.from(allDetails).filter(
        (d) => d.hasAttribute("open")
      ).length;

      if (openCount === allDetails.length && allDetails.length > 0) {
        // 全部展开
        btnText.textContent = "折叠全部原文";
        allExpanded = true;
      } else if (openCount === 0) {
        // 全部折叠
        btnText.textContent = "展开全部原文";
        allExpanded = false;
      } else {
        // 部分展开
        btnText.textContent = "展开全部原文";
        allExpanded = false;
      }
    }

    // 初始化按钮状态
    updateButtonState();
  });
})();
