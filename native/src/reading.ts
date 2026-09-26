import {load} from 'cheerio';

interface Heading {id: string; title: string; level: number;}
const escape = (value: string): string => value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
function outline(headings: Heading[]): string {
  let html = '<ol>', section = false, nested = false;
  for (const heading of headings) {
    const link = `<a href="#${escape(encodeURIComponent(heading.id))}">${escape(heading.title)}</a>`;
    if (heading.level === 2) {
      if (nested) {html += '</ol>'; nested = false;}
      if (section) html += '</li>';
      html += `<li class="outline-h2">${link}`; section = true;
    } else {
      if (section && !nested) {html += '<ol>'; nested = true;}
      html += `<li class="outline-h3">${link}</li>`;
    }
  }
  if (nested) html += '</ol>';
  if (section) html += '</li>';
  return html + '</ol>';
}

/** Derive both navigations from the rendered fragment, never from Markdown text. */
export function finishReadingPage(html: string): string {
  const start = '<!-- reader-body:start -->', end = '<!-- reader-body:end -->';
  const first = html.indexOf(start), last = html.indexOf(end,first);
  if (first < 0 || last < 0) return html;
  const body = html.slice(first + start.length,last);
  // Parse a fragment separately so unclosed source disclosures cannot absorb
  // the reader tools or series navigation outside the body.
  const $ = load(body, {}, false);
  $('details[data-original]').each((_,el)=>{
    const detail = $(el);
    const content = detail.contents().not('summary');
    if (!content.text().trim() && !detail.find('img,video,audio,iframe,svg,table').length) detail.remove();
    else {
      detail.removeAttr('open');
      if (detail.attr('data-original') === 'en') detail.attr('lang','en');
    }
  });
  const hasOriginal = $('details[data-original]').length > 0;
  const ids = new Set($('[id]').map((_,el)=>$(el).attr('id')!).get());
  const headings: Heading[] = [];
  $('h2,h3').filter((_,el)=>!$(el).closest('details').length).each((i,el)=>{
    let id = $(el).attr('id');
    if (!id) {
      id = `heading-${i}`;
      while (ids.has(id)) id += '-section';
      $(el).attr('id',id); ids.add(id);
    }
    $(el).attr('data-reading-heading','');
    headings.push({id,title:$(el).text(),level:el.tagName==='h2'?2:3});
  });
  const bodyHtml = $.html();
  let result = html.slice(0,first) + bodyHtml + html.slice(last + end.length);
  const navigation = headings.length < 2 ? '' : `<details class="article-outline" data-pagefind-ignore${headings.length<=8?' open':''}><summary>${headings.length} 节</summary><nav aria-label="本文章节">${outline(headings)}</nav></details>`;
  result = result.replace('<!-- reader-outline -->',navigation);
  result = result.replace(/<!-- reader-toc:start -->([\s\S]*?)<!-- reader-toc:end -->/, (_,toc: string)=>headings.length<2?'':toc);
  result = result.replace(/<!-- reader-original:start -->([\s\S]*?)<!-- reader-original:end -->/, (_,control: string)=>hasOriginal?control:'');
  return result;
}
