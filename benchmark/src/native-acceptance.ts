import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { load } from 'cheerio';
import { createHash } from 'node:crypto';
import type { Inventory } from './evidence.js';
import { compareIndexes, type IndexedPage } from './compare.js';

export interface NativeAcceptance { passed: boolean; failures: string[]; acceptedOrderChanges: string[]; presentationDifferences: string[]; }
const ordinal=(a:string,b:string):number=>a<b?-1:a>b?1:0;
const equal=(a:unknown,b:unknown):boolean=>JSON.stringify(a)===JSON.stringify(b);
const hash=(s:string):string=>createHash('sha256').update(s).digest('hex');
function normalize(s:string):string {return s.replace(/\s+/gu,' ').trim();}
function canonicalDocument(html:string) {
  const $=load(html);
  const selectors=$('#content-body').length ? ['#content-body > .related-series > .related-posts-list'] : ['.home-layout > ul','.card-layout'];
  for(const selector of selectors) {
    $(selector).each((_,el)=>{
      const parent=$(el); const children=parent.children().toArray();
      children.sort((a,b)=>ordinal(normalize($(a).text()),normalize($(b).text())));
      parent.empty();for(const child of children)parent.append(child).append(' ');
    });
  }
  return $;
}
export function readingStructure(html:string):unknown {
  const $=load(html);
  const root=$('#content-body').length?$('#content-body'):$('body');
  return {
    code:root.find('pre').map((_,el)=>$(el).text().replace(/\r\n/g,'\n').trimEnd()).get(),
    tables:root.find('table').toArray().map(table=>$(table).find('tr').toArray().map(row=>$(row).children('th,td').toArray().map(cell=>normalize($(cell).text())))),
    details:root.find('details > summary').map((_,el)=>normalize($(el).text())).get(),
  };
}
export function canonicalReading(html:string):string {
  const $=canonicalDocument(html);
  const reading=($('#content-body').length?$('#content-body'):$('body')).clone();
  reading.find('script,style').remove();
  reading.find('p,div,h1,h2,h3,h4,h5,h6,li,br,pre,td,th').append(' ');
  return normalize(reading.text());
}
export function assertDateOrder(html:string):void {
  const $=load(html);
  $('.home-layout > ul, #content-body > .related-series > .related-posts-list').each((_,el)=>{
    const ascending=$(el).hasClass('related-posts-list');
    let previous:{date:number;url:string}|undefined;
    $(el).children('li').each((_,li)=>{
      const date=Date.parse(ascending ? ($(li).attr('data-sort-date') ?? $(li).find('.related-post-date').text()) : ($(li).find('time').attr('datetime')??''));
      const url=$(li).children('a').first().attr('href');
      if(!Number.isFinite(date)||!url)throw new Error('Missing navigation date or URL');
      if(previous&&((ascending ? date<previous.date : date>previous.date)||(date===previous.date&&ordinal(url,previous.url)<0)))throw new Error('Navigation date/URL order is not deterministic');
      previous={date,url};
    });
  });
}
// These are inspected, fixed-input differences inherited from SPEC-056. Hash
// pairs are supplied by the committed ledger; a changed text is never waived
// merely because the URL appeared in a previous report.
export interface TextException { url:string; surface:'reading'|'index'; baselineHash:string; candidateHash:string; reason:string; }
export async function validateNative(left:Inventory,right:Inventory,leftIndex:IndexedPage[],rightIndex:IndexedPage[],baseline:string,candidate:string,exceptions:TextException[]=[]):Promise<NativeAcceptance> {
  const indexes=compareIndexes(leftIndex,rightIndex);
  const result:NativeAcceptance={passed:false,failures:[],acceptedOrderChanges:[],presentationDifferences:[]};
  const a=new Map(left.pages.map(p=>[p.url,p]));const b=new Map(right.pages.map(p=>[p.url,p]));
  if(a.size!==left.pages.length||b.size!==right.pages.length)result.failures.push('Duplicate output URL');
  if(!equal([...a.keys()].sort(),[...b.keys()].sort()))result.failures.push('Output URL coverage differs');
  if(indexes.missing.length||indexes.added.length)result.failures.push('Indexed URL coverage differs');
  for(const [url,x] of a){
    const y=b.get(url);if(!y)continue;
    if(!equal([x.title,x.headings,x.images,x.indexable],[y.title,y.headings,y.images,y.indexable]))result.failures.push(`Structural metadata: ${url}`);
    if(!equal([...x.links].sort(),[...y.links].sort()))result.failures.push(`Link multiset: ${url}`);
    if(!equal(x.links,y.links))result.acceptedOrderChanges.push(url);
    const [oldHtml,newHtml]=await Promise.all([readFile(join(baseline,url,'index.html'),'utf8'),readFile(join(candidate,url,'index.html'),'utf8')]);
    if(!equal(readingStructure(oldHtml),readingStructure(newHtml)))result.failures.push(`Reading structure: ${url}`);
    try{assertDateOrder(newHtml);}catch(error){result.failures.push(`${url}: ${String(error)}`);}
    if(x.readingTextHash!==y.readingTextHash||!equal(x.links,y.links)){
      const oldText=canonicalReading(oldHtml),newText=canonicalReading(newHtml);
      const oldDoc=canonicalDocument(oldHtml),newDoc=canonicalDocument(newHtml);
      if(!equal(oldDoc('a[href]').map((_,el)=>oldDoc(el).attr('href')).get(),newDoc('a[href]').map((_,el)=>newDoc(el).attr('href')).get()))result.failures.push(`Unapproved link ordering: ${url}`);
      if(oldText!==newText){
        const allowed=exceptions.some(e=>e.url===url&&e.surface==='reading'&&e.baselineHash===hash(oldText)&&e.candidateHash===hash(newText));
        if(allowed)result.presentationDifferences.push(`reading: ${url}`);else result.failures.push(`Reading text: ${url}`);
      }
    }
  }
  // Actual fragments are verified with hashes separately; no URL-only allowlist.
  const oldHashes=new Map(leftIndex.map(p=>[p.url,p.textHash]));const newHashes=new Map(rightIndex.map(p=>[p.url,p.textHash]));
  for(const url of indexes.changedText){
    const allowed=exceptions.some(e=>e.surface==='index'&&e.url===url&&e.baselineHash===oldHashes.get(url)&&e.candidateHash===newHashes.get(url));
    if(allowed)result.presentationDifferences.push(`index: ${url}`);else result.failures.push(`Index text: ${url}`);
  }
  result.passed=result.failures.length===0;
  return result;
}
