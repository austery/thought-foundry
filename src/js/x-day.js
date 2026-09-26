document.addEventListener('DOMContentLoaded', () => {
  const controls = document.querySelector('.x-filters');
  const source = document.getElementById('x-source-filter');
  const long = document.getElementById('x-long-filter');
  const status = document.getElementById('x-filter-status');
  const entries = document.querySelectorAll('.x-entry');
  if (!(controls instanceof HTMLElement) || !(source instanceof HTMLSelectElement) || !status) return;
  controls.hidden = false;
  const update = () => {
    let count = 0;
    entries.forEach(entry => {
      if (!(entry instanceof HTMLElement)) return;
      const visible = (!source.value || source.value === entry.dataset.author) && (!(long instanceof HTMLInputElement) || !long.checked || entry.dataset.long === 'true');
      entry.hidden = !visible;
      if (visible) count++;
    });
    status.hidden = false;
    status.textContent = count ? `显示 ${count} 条原文` : '这一天没有符合筛选条件的原文。';
  };
  source.addEventListener('change', update);
  long?.addEventListener('change', update);
});
