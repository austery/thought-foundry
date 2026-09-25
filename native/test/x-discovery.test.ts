import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createXDiscovery} from '../src/x-discovery.js';
import type {Article} from '../src/model.js';
import type {XEntry} from '../src/x-reading.js';
function article(id:string,authorId='99',kind='POST',extra:Partial<XEntry>={},exclude=false):Article {
 const entry:XEntry={id,author:'Author',handle:'author',published:'2026-09-19T04:00:00Z',saved:'2026-09-20T00:00:00Z',source:`https://x.com/author/status/${id}`,status:'UNVERIFIED',media:'NOT_ARCHIVED',context:'PARTIAL',body:`Body ${id}`,gaps:'Missing context',related:[],...extra};
 return {id:`a${id}`,source:`content/clippings/x/${id}.md`,url:`/content/clippings/x/${id}/`,date:'2026-09-19',dateLabel:'2026-09-19',meta:{exclude},body:'',kind:'clippings',layout:'x-original',links:{tags:[],speakers:[],categories:[],projects:[],areas:[]},speakerLink:'',related:[],xReading:{authorId,author:entry.author,kind,date:'2026-09-19',entries:[entry]}};
}
test('feeds paginate, isolate authors, retain unknown dates and exclude hidden material',()=>{
 const all=Array.from({length:22},(_,i)=>article(String(100+i)));
 all.push(article('900','88'),article('901','99','POST',{published:'unknown'}),article('902','99','POST',{},true));
 const d=createXDiscovery(all);assert.equal(d.feeds[0]!.cards.length,20);assert.equal(d.feeds[0]!.next,'/x/page/2/');
 const author=d.feeds.filter(f=>f.authorId==='99');assert.equal(author.flatMap(f=>f.cards).length,23);assert.equal(author.at(-1)!.cards.at(-1)!.id,'901');
 assert.equal(d.authors.find(a=>a.id==='99')!.count,23);assert.ok(!JSON.stringify(d.feeds).includes('902'));
 assert.equal(d.reading.a902!.cards[0]!.body,'Body 902');
});
test('duplicate locations select standalone; conflicts fail; renamed labels do not rewrite originals',()=>{
 const daily=article('1','99','DAILY_COLLECTION');daily.id='daily';daily.url='/daily/';
 const standalone=article('1','99','POST',{author:'New name',saved:'2026-09-21T00:00:00Z'});
 const d=createXDiscovery([daily,standalone]);assert.equal(d.feeds[0]!.cards.length,1);assert.equal(d.feeds[0]!.cards[0]!.url,'/content/clippings/x/1/#x-post-1');assert.equal(d.authors[0]!.name,'New name');assert.equal(d.reading.daily!.cards[0]!.author,'Author');
 assert.throws(()=>createXDiscovery([daily,article('1','99','POST',{body:'different'})]),/Conflicting X post/);
 assert.throws(()=>createXDiscovery([daily,article('1','88')]),/Conflicting X post/);
});
test('context uses eligible local identities, preserves external fallback, and previews Unicode',()=>{
 const source=article('1','99','POST',{body:'😀'.repeat(281),related:[{label:'QUOTES: x:post:2',url:'https://x.com/i/status/2'},{label:'REPLIES_TO: x:post:3',url:'/content/clippings/x/3/#x-post-3'}]});
 const d=createXDiscovery([source,article('2'),article('3','99','POST',{},true)]);const card=d.reading.a1!.cards[0]!;
 assert.equal(Array.from(card.preview).length,280);assert.equal(card.long,true);assert.equal(card.contextLinks[0]!.url,'/content/clippings/x/2/#x-post-2');assert.equal(card.contextLinks[1]!.url,'https://x.com/i/status/3');
 assert.match(card.timeLabel,/2026\/09\/19/);
 const hiddenAuthor=article('4','77','POST',{},true);
 source.xReading!.entries[0]!.related.push({label:'UNKNOWN',url:hiddenAuthor.url},{label:'UNKNOWN',url:'https://example.org/context'});
 const safe=createXDiscovery([source,hiddenAuthor]);
 assert.equal(safe.reading.a4!.cards[0]!.authorUrl,'');
 assert.ok(safe.reading.a1!.cards[0]!.contextLinks.every(link=>link.url!==hiddenAuthor.url));
 assert.ok(safe.reading.a1!.cards[0]!.contextLinks.some(link=>link.url==='https://example.org/context'));
});
test('daily navigation remains within eligible same-author collections',()=>{
 const older=article('1','99','DAILY_COLLECTION');older.xReading!.date='2026-09-18';
 const newer=article('2','99','DAILY_COLLECTION');const other=article('3','88','DAILY_COLLECTION');
 const d=createXDiscovery([newer,other,older]);assert.equal(d.reading.a1!.next,newer.url);assert.equal(d.reading.a2!.previous,older.url);assert.equal(d.reading.a3!.previous,'');
});
test('missing observed names never replace known labels and equal names stay distinguishable',()=>{
 const known=article('1','99','POST',{author:'Same name',observedName:'Same name'});
 const unnamed=article('2','99','POST',{author:'99',observedName:'',saved:'2026-09-23T00:00:00Z'});
 const other=article('3','88','POST',{author:'Same name',observedName:'Same name'});
 const d=createXDiscovery([known,unnamed,other]);
 assert.deepEqual(new Set(d.authors.map(a=>a.name)),new Set(['Same name · 99','Same name · 88']));
 const fallback=createXDiscovery([unnamed]);assert.equal(fallback.authors[0]!.name,'99');
 assert.equal(fallback.feeds[0]!.cards[0]!.authorUrl,'/x/authors/99/');
});
