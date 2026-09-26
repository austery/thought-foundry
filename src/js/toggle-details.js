document.addEventListener('DOMContentLoaded', () => {
  const originals = Array.from(document.querySelectorAll('details[data-original]'));
  const toggle = document.getElementById('toggleAllDetailsBtn');
  if (toggle && originals.length) {
    toggle.hidden = false;
    const originalLabel = toggle.dataset.label || '原文';
    const update = () => {
      const label = toggle.querySelector('.btn-text');
      if (label) label.textContent = originals.every(d => d.hasAttribute('open')) ? `收起全部${originalLabel}` : `展开全部${originalLabel}`;
    };
    toggle.addEventListener('click', () => {
      const open = !originals.every(d => d.hasAttribute('open'));
      originals.forEach(d => d.toggleAttribute('open', open));
      update();
    });
    originals.forEach(d => d.addEventListener('toggle', update));
    update();
  }
  const copy = document.getElementById('copy-md-button');
  const status = document.getElementById('reader-status');
  const fallback = document.getElementById('copy-fallback');
  if (!(copy instanceof HTMLButtonElement) || !status || !(fallback instanceof HTMLTextAreaElement)) return;
  copy.hidden = false;
  copy.addEventListener('click', async () => {
    copy.disabled = true;
    try {
      const response = await fetch(copy.dataset.markdown || '');
      if (!response.ok) throw new Error('Download failed');
      const markdown = await response.text();
      try {
        await navigator.clipboard.writeText(markdown);
        status.textContent = '已复制全文 Markdown';
        fallback.hidden = true;
      } catch {
        fallback.value = markdown; fallback.hidden = false; fallback.focus(); fallback.select();
        status.textContent = '无法自动复制，请复制下方已选中的全文，或下载 Markdown。';
      }
    } catch { status.textContent = '全文读取失败，请重试或使用下载 Markdown 链接。'; }
    finally { copy.disabled = false; }
  });
});
