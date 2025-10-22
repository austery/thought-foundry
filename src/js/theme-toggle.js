// src/js/theme-toggle.js
// 主题切换功能

(function() {
  const THEME_STORAGE_KEY = 'theme-preference';
  const DARK_THEME = 'dark';
  const LIGHT_THEME = 'light';

  // 获取用户偏好的主题或根据系统设置选择
  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored) {
      return stored;
    }

    // 如果未存储，检查系统偏好
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK_THEME;
    }

    return LIGHT_THEME;
  }

  // 应用主题
  function applyTheme(theme) {
    if (theme === DARK_THEME) {
      document.documentElement.setAttribute('data-theme', DARK_THEME);
      updateThemeToggleIcon(DARK_THEME);
    } else {
      document.documentElement.removeAttribute('data-theme');
      updateThemeToggleIcon(LIGHT_THEME);
    }
  }

  // 更新主题切换按钮的图标
  function updateThemeToggleIcon(theme) {
    const icon = document.querySelector('.theme-toggle-icon');
    if (icon) {
      // 深色主题时显示太阳，浅色主题时显示月亮
      icon.textContent = theme === DARK_THEME ? '☀️' : '🌙';
    }
  }

  // 初始化主题
  function initTheme() {
    const preferredTheme = getPreferredTheme();
    applyTheme(preferredTheme);
  }

  // 切换主题
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || LIGHT_THEME;
    const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;

    applyTheme(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  }

  // 监听系统主题偏好变化
  function listenToSystemThemeChange() {
    if (window.matchMedia) {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      darkModeQuery.addEventListener('change', (e) => {
        // 仅在用户未手动设置主题时应用系统偏好
        if (!localStorage.getItem(THEME_STORAGE_KEY)) {
          applyTheme(e.matches ? DARK_THEME : LIGHT_THEME);
        }
      });
    }
  }

  // 在页面加载时初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // 绑定主题切换按钮
  document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
    listenToSystemThemeChange();
  });
})();
