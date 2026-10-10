// Accepted legacy destinations from the PureSubs 2026-10-09 production readback.
// Keep these paths permanent; Git history carries replacements at the same URL.
const legacyPaths: Readonly<Record<string, string>> = {
  'pod_algbr0fzbuh6cwz3puc2flgn': 'content/podcasts/article/2a469daf-f229-4e99-a62d-fb155fa64e35/pod_algbr0fzbuh6cwz3puc2flgn.md',
  'pod_bhpksupl57xxm06yw2qxu3rr': 'content/podcasts/article/40322b42-7593-4738-bb77-5eba3ddbcb1d/pod_bhpksupl57xxm06yw2qxu3rr.md',
  'pod_hgxoxitfxhetj76teof3srdf': 'content/podcasts/article/7dc4d236-f439-41d3-bbdb-06abf4fb69ec/pod_hgxoxitfxhetj76teof3srdf.md',
  'pod_m5zqaqi8j5m9egqvk0gbzoli': 'content/podcasts/article/ca22ed24-4b43-4095-88af-c2e77f7add1f/pod_m5zqaqi8j5m9egqvk0gbzoli.md',
  'pod_pt3rc9hdyvr2hc7j8l4072ba': 'content/podcasts/article/dabf76d8-8055-46ce-adf8-afe9403d1263/pod_pt3rc9hdyvr2hc7j8l4072ba.md',
  'pod_rfzt7mr9dt288mjethcybarn': 'content/podcasts/article/26a6228e-6473-4ecf-8084-688bdf7a74e2/pod_rfzt7mr9dt288mjethcybarn.md',
  'pod_roxlsqmv3cgdp7tb8hdvaods': 'content/podcasts/article/adf60f89-15bf-4465-ae10-350531c520ce/pod_roxlsqmv3cgdp7tb8hdvaods.md',
  'pod_usdrkgnkglrlol7wmyg8ybn0': 'content/podcasts/article/7415c42a-7721-4f37-ba57-74140b3b45dc/pod_usdrkgnkglrlol7wmyg8ybn0.md',
  'pod_vtqhul6ruvqlzwrgjndko3ew': 'content/podcasts/article/6d3ae53c-656a-4620-bf30-ef155e3efd92/pod_vtqhul6ruvqlzwrgjndko3ew.md',
  'pod_wk776tsn18evx7ofm9fs607b': 'content/podcasts/article/f2a8a91c-21d5-4a01-a554-29668d5eea1b/pod_wk776tsn18evx7ofm9fs607b.md',
  'pod_zpqj8oh2grf5jqllt80bkds4': 'content/podcasts/article/28ca5992-18c1-4812-972a-c574ef5a48dd/pod_zpqj8oh2grf5jqllt80bkds4.md',
};

export function publishedPodcastKey(source: string): string | undefined {
  const stable = /^content\/podcasts\/article\/(pod_[a-z0-9]{24})\.md$/.exec(source);
  if (stable) return stable[1];
  const legacy = /^content\/podcasts\/article\/[^/]+\/(pod_[a-z0-9]{24})\.md$/.exec(source);
  const key = legacy?.[1];
  return key && legacyPaths[key] === source ? key : undefined;
}
