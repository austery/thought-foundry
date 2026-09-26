// Apply before first paint; tolerate unavailable or obsolete storage values.
(() => {
  const themes = ['paper-light', 'paper-dark', 'steel-light', 'steel-dark'];
  const labels = ['纸色浅色', '纸色深色', '钢色浅色', '钢色深色'];
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  const stored = () => {
    try {
      const value = localStorage.getItem('theme-preference');
      const migrated = value === 'dark' ? 'paper-dark' : value === 'light' ? 'paper-light' : value;
      return migrated && themes.includes(migrated) ? migrated : null;
    } catch { return null; }
  };
  let selected = stored();
  const apply = (/** @type {string} */ theme) => {
    document.documentElement.dataset.theme = theme;
    const button = document.getElementById('theme-toggle');
    if (button) {
      const index = themes.indexOf(theme);
      const label = `当前：${labels[index]}；切换为${labels[(index + 1) % themes.length]}`;
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
    }
  };
  apply(selected || (preference.matches ? 'paper-dark' : 'paper-light'));
  document.addEventListener('DOMContentLoaded', () => {
    apply(document.documentElement.dataset.theme || 'paper-light');
    document.getElementById('theme-toggle')?.addEventListener('click', () => {
      const index = themes.indexOf(document.documentElement.dataset.theme || 'paper-light');
      selected = themes[(index + 1) % themes.length] || 'paper-light';
      apply(selected);
      try { localStorage.setItem('theme-preference', selected); } catch { /* Keep the session choice. */ }
    });
  });
  preference.addEventListener('change', () => { if (!selected) apply(preference.matches ? 'paper-dark' : 'paper-light'); });
})();
