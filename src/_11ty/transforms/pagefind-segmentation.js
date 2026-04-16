const cheerio = require('cheerio');

// Initialize Node.js native Chinese segmenter
const segmenter = new Intl.Segmenter('zh-CN', { granularity: 'word' });

// Recursive function to process text nodes
function tokenizeTextNodes(node, $) {
  // If text node, segment with Intl.Segmenter
  if (node.type === 'text') {
    const text = node.data;
    // Only process text that contains Chinese characters
    if (/[\u4e00-\u9fa5]/.test(text)) {
      const segments = segmenter.segment(text);
      const words = Array.from(segments).map(s => s.segment);
      // Join words using Zero-Width Space (U+200B)
      node.data = words.join('\u200B');
    }
  } else if (node.type === 'tag') {
    // Skip scripts, styles, and code blocks completely
    if (['script', 'style', 'code', 'pre'].includes(node.name)) return;
    
    // Recursively process children
    $(node).contents().each((i, child) => tokenizeTextNodes(child, $));
  }
}

module.exports = function(content, outputPath) {
  // Only process HTML files
  if (outputPath && outputPath.endsWith(".html")) {
    const $ = cheerio.load(content);
    
    // Attempt to scope to pagefind data body, fallback to main/body
    let targetContainer = $('[data-pagefind-body]');
    if (targetContainer.length === 0) {
      targetContainer = $('main');
    }
    if (targetContainer.length === 0) {
      targetContainer = $('body');
    }
    
    // Process text nodes inside the target container
    targetContainer.each((i, el) => tokenizeTextNodes(el, $));
    
    return $.html();
  }
  return content;
};
