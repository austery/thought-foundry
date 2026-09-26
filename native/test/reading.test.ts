import {test} from 'node:test';
import assert from 'node:assert/strict';
import {load} from 'cheerio';
import {finishReadingPage} from '../src/reading.js';
const page = (body: string) => `<!-- reader-toc:start --><aside>TOC</aside><!-- reader-toc:end --><!-- reader-outline --><div class="article-body"><!-- reader-body:start -->${body}<!-- reader-body:end --></div><footer>Tools</footer>`;

test('outline and enhanced TOC share real body headings, excluding disclosure content',()=>{
 const headings=Array.from({length:7},(_,i)=>`<h2 id="part-${i}">Section ${i}</h2>`).join('');
 const original='<details><summary>Original</summary>'+Array.from({length:6},(_,i)=>`<h3>Original ${i}</h3>`).join('')+'</details>';
 const html=load(finishReadingPage(page(headings+original)));
 assert.equal(html('.article-outline[open]').length,1);
 assert.equal(html('.article-outline a').length,7);
 assert.equal(html('[data-reading-heading]').length,7);
 assert.equal(html('details [data-reading-heading]').length,0);
 assert.equal(html('.article-outline summary').text(),'7 节');
});
test('raw headings get collision-free anchors; malformed source cannot swallow tools',()=>{
 const html=load(finishReadingPage(page('<span id="heading-0"></span><h2>Raw &amp; safe</h2><h3 id="kept">Child</h3><details><summary>Original</summary><h2>Hidden</h2>')));
 assert.equal(html('.article-body h2').first().attr('id'),'heading-0-section');
 assert.equal(html('.article-outline ol ol a').attr('href'),'#kept');
 assert.equal(html('.article-outline a').first().text(),'Raw & safe');
 assert.equal(html('details footer').length,0);
 assert.equal(html('footer').text(),'Tools');
 assert.equal(html('.article-body details').text(),'OriginalHidden');
});
test('no empty navigation; nine sections collapse; body whitespace remains literal',()=>{
 const html=load(finishReadingPage(page('<h2>One</h2><pre>  A\n B &amp; C</pre>')));
 assert.equal(html('.article-outline, aside').length,0);
 assert.equal(html('pre').text(),'  A\n B & C');
 const many=load(finishReadingPage(page('<h2>Section</h2>'.repeat(9))));
 assert.equal(many('.article-outline:not([open])').length,1);
});
