// @ts-check
/** @typedef {{element: string, id: string, text: string, location: number}} SearchAnchor */
/**
 * Pagefind records non-heading anchors, but only headings become sub_results.
 * Match indexed token locations to article boundaries without restoring H2 times.
 * @param {{url: string, anchors?: SearchAnchor[], locations?: number[]}} result
 * @returns {{title: string, url: string}[]}
 */
export function matchingXPosts(result) {
  const anchors = result.anchors ?? [];
  const posts = anchors.filter(a => a.element === 'article' && /^x-post-\d+$/.test(a.id)).sort((a, b) => a.location - b.location);
  return posts.flatMap((post, i) => {
    const end = posts[i + 1]?.location ?? Infinity;
    if (!result.locations?.some(location => Number.isInteger(location) && location >= post.location && location < end)) return [];
    const heading = anchors.find(a => a.id === post.id.replace('x-post-', 'x-post-time-'));
    return [{title: heading?.text || post.id.slice(7), url: `${result.url.split('#')[0]}#${post.id}`}];
  });
}
