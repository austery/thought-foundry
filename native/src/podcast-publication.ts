import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export function publishedPodcastKey(source: string): string | undefined {
  return /^content\/podcasts\/article\/(pod_[a-z0-9]{24})\.md$/.exec(source)?.[1];
}

export interface PodcastRedirect { from: string; to: string; }
export async function podcastRedirects(source: string): Promise<PodcastRedirect[]> {
  let raw: string;
  try { raw = await readFile(join(source,'content/podcasts/redirects.json'),'utf8'); }
  catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return [];
    throw error;
  }
  const values: unknown = JSON.parse(raw);
  if (!Array.isArray(values)) throw new Error('Invalid Podcast redirects');
  return values.map((value: unknown) => {
    if (!value || typeof value !== 'object') throw new Error('Invalid Podcast redirect');
    const {from,to} = value as Record<string,unknown>;
    const key = typeof from === 'string'
      ? /^\/content\/podcasts\/article\/[a-zA-Z0-9_-]+\/(pod_[a-z0-9]{24})\/$/.exec(from)?.[1] : undefined;
    if (!key || typeof from !== 'string' || typeof to !== 'string' || to !== `/content/podcasts/article/${key}/`)
      throw new Error('Invalid Podcast redirect destination');
    return {from,to};
  });
}
