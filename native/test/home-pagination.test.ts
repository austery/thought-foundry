import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, cp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { load } from 'cheerio';
import { prepare, restore } from '../src/prepare.js';

for (const count of [0, 30, 31, 61]) {
  test(`static homepage traverses ${count} entries without omissions or duplicates`, async () => {
    const root = await mkdtemp(join(tmpdir(), 'tf-home-'));
    const site = join(root, 'source');
    const content = join(site, 'src/content/notes');
    await mkdir(content, {recursive:true});
    for (const dir of ['css', 'js']) await cp(resolve('../src', dir), join(site, 'src', dir), {recursive:true});
    const summary = '<b>中文😀</b>'.repeat(40) + ' SummaryTailMarker';
    // Reverse creation order and equal dates must not affect URL-ascending ties.
    for (let i = count - 1; i >= 0; i--) {
      const id = String(i).padStart(3, '0');
      const meta = {title:`Entry ${id}`, layout:'post.njk', date:i === count - 1 ? '2026-09-24' : '2026-09-25',
        speaker:'Test Blog', source:'https://example.org/article', summary, insight:'FullInsightMarker'};
      await writeFile(join(content, `${id}.md`), '---\n' + JSON.stringify(meta) + '\n---\n# Body\n\nFullBodyMarker');
    }
    await writeFile(join(content, 'Excluded.md'), '---\n' + JSON.stringify({title:'Excluded', layout:'post.njk',
      date:'2026-09-26', exclude:true, speaker:'Hidden Source'}) + '\n---\n# Excluded');
    const stage = join(root, 'stage');
    const output = join(root, 'public');
    await prepare(site, stage);
    execFileSync('hugo', ['--source', stage, '--destination', output], {stdio:'pipe'});
    await restore(stage, output);
    const html = async (url: string) => load(await readFile(join(output, url, 'index.html'), 'utf8'));
    const pageCount = Math.max(1, Math.ceil(count / 30));
    const seen: string[] = [];
    let url = '/';
    for (let number = 1; number <= pageCount; number++) {
      const page = await html(url);
      const rows = page('.home-layout > ul > li');
      assert.equal(rows.length, Math.min(30, Math.max(0, count - (number - 1) * 30)));
      seen.push(...rows.find('> a:first-child').map((_, a) => page(a).attr('href')!).get());
      assert.equal(page('.home-pagination a[rel="prev"]').attr('href'), number === 1 ? undefined : number === 2 ? '/' : `/page/${number - 1}/`);
      const next = page('.home-pagination a[rel="next"]').attr('href');
      assert.equal(next, number === pageCount ? undefined : `/page/${number + 1}/`);
      if (pageCount > 1) assert.equal(page('.home-pagination [aria-current="page"]').text(), `第 ${number} 页，共 ${pageCount} 页`);
      if (count === 0) assert.match(page('.home-layout').text(), /暂无内容/);
      assert.equal(page('[data-pagefind-body]').length, 0);
      assert.equal(page('.insight-text').length, 0);
      assert.equal(page('.summary-text b').length, 0);
      for (const el of page('.summary-text').toArray()) {
        const excerpt = page(el).text();
        assert.equal(Array.from(excerpt).length, 100);
        assert.ok(excerpt.endsWith('…'));
        assert.ok(!excerpt.includes('\uFFFD'));
      }
      assert.doesNotMatch(page.html(), /SummaryTailMarker|FullInsightMarker|FullBodyMarker/);
      assert.equal(page('.main-nav a[href="/all-speakers/"]').text(), '来源');
      if (next) url = next;
    }
    assert.deepEqual(seen, Array.from({length:count}, (_, i) => `/content/notes/${String(i).padStart(3, '0')}/`));
    const routes = JSON.parse(await readFile(join(stage, 'routes.json'), 'utf8')) as {legacy:string}[];
    assert.equal(routes.filter(r => r.legacy === '/' || /^\/page\/\d+\/$/.test(r.legacy)).length, pageCount);
    assert.ok(!routes.some(r => r.legacy === '/page/1/'));
    if (count) {
      const article = await html('content/notes/000');
      assert.match(article('[data-pagefind-body]').text(), /SummaryTailMarker/);
      assert.match(article('[data-pagefind-body]').text(), /FullBodyMarker/);
      assert.match(article('.insight-section').text(), /FullInsightMarker/);
      assert.equal(article('.speaker-link').text(), 'Test Blog');
      assert.equal(article('[data-pagefind-filter="speaker"]').text(), 'Test Blog');
      assert.ok(article('.provenance dt').map((_,el)=>article(el).text()).get().includes('来源'));
      assert.ok(article('.provenance dt').map((_,el)=>article(el).text()).get().includes('原文'));
      const directory = await html('all-speakers');
      assert.equal(directory('h1').text(), '所有来源');
      assert.ok(!directory.text().includes('Hidden Source'));
    }
    const excluded = await html('content/notes/Excluded');
    assert.equal(excluded('[data-pagefind-body]').length, 0);
  });
}
