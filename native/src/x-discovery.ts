import type { Article } from './model.js';
import { ordinal } from './model.js';
import type { XEntry } from './x-reading.js';

export interface XCard extends XEntry {
  authorId: string; url: string; authorUrl: string; timeLabel: string;
  instant: string; preview: string; long: boolean;
  contextLinks: {label: string; url: string}[];
}
export interface XAuthor { id: string; name: string; url: string; count: number; }
export interface XFeed {url: string; title: string; authorId: string; cards: XCard[]; previous: string; next: string;}
export interface XDay {date: string; url: string; cards: XCard[]; previous: string; next: string;}
export interface XDiscovery {
  days: XDay[];
  authors: XAuthor[]; feeds: XFeed[];
  reading: Record<string, {cards: XCard[]; previous: string; next: string}>;
}
const dateFormat = new Intl.DateTimeFormat('zh-CN', {timeZone:'America/Toronto',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false});
function instant(value: string): string { return value && Number.isFinite(Date.parse(value)) ? new Date(value).toISOString() : ''; }
export function createXDiscovery(articles: Article[]): XDiscovery {
  const all = articles.filter(a => a.xReading);
  const eligible = all.filter(a => !a.meta.exclude);
  const authorIds = new Set(eligible.map(a => a.xReading!.authorId));
  const locations = new Map<string, {article: Article; entry: XEntry}>();
  // Standalone originals win only in the derived browsing view; old pages remain.
  const priority = (a: Article) => a.xReading!.kind === 'DAILY_COLLECTION' ? 1 : 0;
  for (const article of [...eligible].sort((a,b) => priority(a)-priority(b) || ordinal(a.xReading!.date,b.xReading!.date) || ordinal(a.url,b.url))) {
    for (const entry of article.xReading!.entries) {
      const existing = locations.get(entry.id);
      if (existing && (existing.article.xReading!.authorId !== article.xReading!.authorId || existing.entry.body !== entry.body)) throw new Error(`Conflicting X post ${entry.id}: ${existing.article.source} and ${article.source}`);
      if (!existing) locations.set(entry.id,{article,entry});
    }
  }
  const labels = new Map<string, {name:string; saved:string; tie:string}>();
  for (const article of eligible) for (const e of article.xReading!.entries) {
    const id=article.xReading!.authorId, name=(e.observedName ?? (e.author || e.handle)).trim();
    if (!name) continue;
    const candidate={name,saved:instant(e.saved),tie:`${article.url}#${e.id}`}, old=labels.get(id);
    if (!old || ordinal(candidate.saved,old.saved)>0 || (candidate.saved===old.saved && ordinal(candidate.tie,old.tie)<0)) labels.set(id,candidate);
  }
  const authorUrl=(id:string)=>`/x/authors/${id}/`;
  function card(article: Article, entry: XEntry): XCard {
    const authorId=article.xReading!.authorId, time=instant(entry.published);
    const chars=Array.from(entry.body);
    return {...entry,authorId,author:entry.author,url:`${article.url}#x-post-${entry.id}`,authorUrl:authorIds.has(authorId) ? authorUrl(authorId) : '',instant:time,timeLabel:time ? dateFormat.format(new Date(time)) : '原发日期未知',long:chars.length>280,preview:chars.slice(0,280).join(''),contextLinks:entry.related.flatMap(link=>{
      const targetId=/^(?:QUOTES|REPLIES_TO|REPLY_TO): x:post:(\d+)$/.exec(link.label)?.[1];
      const target=targetId ? locations.get(targetId) : undefined;
      // A local path alone does not establish an eligible saved post identity.
      if (link.url.startsWith('/') && !targetId) return [];
      const fallback = link.url.startsWith('/') && targetId && !target ? `https://x.com/i/status/${targetId}` : link.url;
      const kind=link.label.startsWith('QUOTES:')?'引用原帖':/^REPL(?:IES_TO|Y_TO):/.test(link.label)?'回复的原帖':'相关来源';
      return [{label:target ? `${kind}（已保存）` : `${kind}（查看来源）`,url:target ? `${target.article.url}#x-post-${target.entry.id}` : fallback}];
    })};
  }
  const cards=[...locations.values()].map(({article,entry})=>card(article,entry)).sort((a,b)=>-ordinal(a.instant,b.instant)||ordinal(a.id,b.id));
  const authorNames = [...authorIds].map(id => ({id, name:labels.get(id)?.name || id}));
  const authors=authorNames.map(({id,name})=>({id,name:authorNames.filter(a=>a.name===name).length>1 ? `${name} · ${id}` : name,url:authorUrl(id),count:cards.filter(c=>c.authorId===id).length})).sort((a,b)=>a.name.localeCompare(b.name,'zh')||ordinal(a.id,b.id));
  const feeds:XFeed[]=[];
  for (const author of [{id:'',name:'全部来源',url:'/x/',count:cards.length},...authors]) {
    const items=author.id ? cards.filter(c=>c.authorId===author.id) : cards;
    const pages=Math.max(1,Math.ceil(items.length/20));
    const url=(i:number)=>i===0 ? author.url : `${author.url}page/${i+1}/`;
    for(let i=0;i<pages;i++)feeds.push({url:url(i),title:author.id?`${author.name} · X 阅读`:'X 阅读',authorId:author.id,cards:items.slice(i*20,i*20+20),previous:i?url(i-1):'',next:i+1<pages?url(i+1):''});
  }
  const reading:XDiscovery['reading']={};
  for (const article of all) reading[article.id]={cards:article.xReading!.entries.map(e=>card(article,e)),previous:'',next:''};
  for (const author of authors) {
    const daily=eligible.filter(a=>a.xReading!.authorId===author.id && a.xReading!.kind==='DAILY_COLLECTION').sort((a,b)=>ordinal(a.xReading!.date,b.xReading!.date)||ordinal(a.url,b.url));
    daily.forEach((a,i)=>{reading[a.id]!.previous=daily[i-1]?.url||'';reading[a.id]!.next=daily[i+1]?.url||'';});
  }
  const dayFormat = new Intl.DateTimeFormat('en-CA', {timeZone:'America/Toronto',year:'numeric',month:'2-digit',day:'2-digit'});
  const byDay = new Map<string,XCard[]>();
  for (const card of cards) {
    if (!card.instant) continue;
    const date = dayFormat.format(new Date(card.instant));
    byDay.set(date, [...byDay.get(date) ?? [], card]);
  }
  const days: XDay[] = [...byDay].sort(([a],[b])=>ordinal(b,a)).map(([date,items])=>({date,url:`/x/days/${date}/`,cards:items,previous:'',next:''}));
  days.forEach((day,i)=>{day.previous=days[i+1]?.url || '';day.next=days[i-1]?.url || '';});
  return {authors,feeds,reading,days};
}
