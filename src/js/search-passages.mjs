// @ts-check
/**
 * Pagefind 1.5.2 locations refer to raw_content tokens, not display content.
 * Keep this adapter covered when upgrading Pagefind: Chinese uses zero-width
 * separators that are removed from the public content string.
 * @param {{raw_content?: string, locations?: number[], excerpt: string}} result
 * @returns {string[]}
 */
export function additionalPassages(result) {
  if (!result.raw_content || !result.locations?.length) return [];
  const segmented = result.raw_content.includes('\u200b');
  const words = result.raw_content.split(segmented ? '\u200b' : /[\r\n\s]+/g);
  const joiner = segmented ? '' : ' ';
  const locations = [...new Set(result.locations)].filter(i => Number.isInteger(i) && i >= 0 && i < words.length).sort((a, b) => a - b);
  const marked = new Set(locations);
  const mainText = result.excerpt.replace(/<mark>|<\/mark>/g, '').trim();
  const mainStart = result.raw_content.replace(/\u200b/g, '').indexOf(mainText);
  const passages = [];
  let previousEnd = -1;
  for (const location of locations) {
    const start = Math.max(0, location - 12), end = Math.min(words.length, location + 18);
    if (start < previousEnd) continue;
    const text = words.slice(start, end).join(joiner).trim();
    // Skip windows overlapping the primary excerpt, including partial overlap.
    const startChar = words.slice(0, start).join(joiner).length + (segmented || start === 0 ? 0 : 1);
    const endChar = startChar + words.slice(start, end).join(joiner).length;
    if (mainStart >= 0 && startChar < mainStart + mainText.length && endChar > mainStart) continue;
    if (!text) continue;
    const html = words.slice(start, end).map((word, i) => marked.has(start + i) ? `<mark>${word}</mark>` : word).join(joiner).trim();
    passages.push(`${start ? '…' : ''}${html}${end < words.length ? '…' : ''}`);
    previousEnd = end;
    if (passages.length === 3) break;
  }
  return passages;
}
