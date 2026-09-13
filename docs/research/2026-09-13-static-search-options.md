# Static search options for Thought Foundry

Date: 2026-09-13
Status: Research, not an implementation or production decision
Scope: Approximately 10,000 mostly Chinese articles; reduce dependence on the existing Qwen embedding/database pipeline while improving retrieval relevance.

## Recommendation

Start with exact-phrase controls, relevance evaluation, and a small explicit alias dictionary. Then test a separate concise article index built from existing title, summary, insight, and headings, while retaining full-text search as a fallback. Browser vector retrieval is a viable later experiment, but moves inference and download costs to the reader. A small hosted query-embedding endpoint is another middle ground; semantic retrieval does not require answer generation or a continuously operated vector database.

The current investigation of actual `家庭关系` and `教育` results belongs to the companion diagnostic work. This note does not infer OR semantics, duplicate result counts, or current backend bottleneck causes from screenshots.

## Supported Pagefind improvements

Pagefind's Chinese support segments both indexed text and queries. Its documentation describes matching all query words; quoted queries support exact sequences. Therefore, a snippet highlighting only `家庭` does not establish that the query used OR or that `关系` was absent elsewhere in the page. Quoted and unquoted queries need testing against this actual index. [Multilingual search](https://pagefind.app/docs/multilingual/)

Pagefind already boosts headings: h1 has weight 7, decreasing to h6 at 2; ordinary text defaults to 1. Custom weights affect both ranking and excerpt selection. Boosting summary/insight can improve the first results, but does not make a broad query return fewer matching pages, and is not evidence of a smaller or faster index. [Content weighting](https://pagefind.app/docs/weighting/)

The browser API supports custom interfaces, lazy result-data loading, debounce, and filtering. Existing speaker browsing should remain; combining a topic query with a speaker constraint is an additional interaction, not a replacement for that directory. Aliases can be implemented as a bounded set of separate searches with results deduplicated by page URL; this is proposed application logic, not a documented built-in Pagefind synonym feature. Avoid concatenating alternatives into one query if that changes the intended boolean meaning. [Search API](https://pagefind.app/docs/api/)

Component UI supplies modal/searchbox layouts, composable components, and custom result display. It is an interface layer; these capabilities provide no evidence that replacing the UI will accelerate index creation or supply semantic understanding. [Component UI](https://pagefind.app/docs/search-ui/)

## Options from light to heavy

The following ordering is an architectural assessment for this site, not measured performance results.

| Option | Where work happens | Expected benefit | Cost or limitation |
| --- | --- | --- | --- |
| Phrase control, weighting, speaker constraints, clearer excerpts | Static build and browser | Improve precision and distinguish incidental mention from main subject | Does not retrieve unrelated wording automatically |
| Curated aliases and spelling variants | Small versioned dictionary; browser query expansion | Handle known equivalents without model calls | Related concepts are not always synonyms; aggressive expansion adds noise |
| Concise article index | Build from existing metadata; browser retrieval | Search what an article is chiefly about, with cleaner results | Omits details absent from summaries; retain explicit full-text fallback |
| Offline search enrichment | Only changed articles processed during a separate update job | Add alternate wording, key questions, or concepts before publication | Model cost and factual quality move to build time; cache and audit generated data |
| Static document vectors plus browser query encoder | Offline article embeddings; query inference and scoring in browser | Retrieve some paraphrases without a runtime search server | Model download, startup, battery, memory, and device compatibility |
| Static vectors plus hosted query encoder | Offline article embeddings; one embedding request per submitted query | Avoid browser model startup and local GPU dependence | Runtime service, credentials, rate limits, latency, and provider cost remain |
| Managed lexical search | Hosted index and query API | Operationally packaged synonyms, ranking, filtering | External service dependency and corpus synchronization; Chinese relevance still needs testing |
| Hosted hybrid retrieval, optional reranking and RAG | Backend retrieval plus optional generation | Broader semantic retrieval; sourced synthesized answers if wanted | More moving parts and query-time work; generation is unnecessary for a list of articles |

Synonym handling is not exclusive to vector search. For example, Algolia documents regular, one-way, and lower-priority alternatives in its search system. This supports the distinction between an exact alias and a merely related term. For this site, `智能体`/`Agent` is a candidate mapping to validate; expanding `家庭关系` into every family-related concept should not silently replace exact intent. [Algolia synonyms](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/adding-synonyms/)

Pagefind's Node API accepts custom records with explicit URLs, text, metadata, filters, and language. A separate summary-oriented index can therefore retain the original article URLs without modifying source Markdown. Building a second index adds work if full-text indexing still runs every deployment; build-time savings must be measured separately from search-quality gains. [Node indexing API](https://pagefind.app/docs/node-api/)

## What lightweight vector search would actually require

Sentence Transformers demonstrates direct similarity scoring over precomputed corpus embeddings, without requiring a vector database. That is evidence that the database is an architectural choice, not a prerequisite. It is not a browser latency benchmark. [Semantic search](https://sbert.net/examples/sentence_transformer/applications/semantic-search/README.html)

An illustrative storage calculation for 10,000 article vectors in Float32 is `10,000 × dimensions × 4 bytes`: 384 dimensions require 15.36 MB, 768 require 30.72 MB. Ten vectors per article multiply those amounts by ten. These are raw vector bytes only, excluding the query model, tokenizer, runtime, article metadata, search structures, and working memory. Compressed transfer size can differ. They are estimates, not measured artifact sizes.

Transformers.js can run models in the browser with ONNX Runtime, using CPU/WASM or WebGPU. Quantized models can reduce bandwidth and resource demands. This removes a runtime inference server only by making the browser perform that work; cold model download and first-query latency must be tested on the user's actual tablet/phone. [Transformers.js stable documentation](https://huggingface.co/docs/transformers.js/v3.8.1/en/index)

As a candidate to investigate, multilingual-e5-small produces 384-dimensional embeddings, documents multilingual support, and includes Chinese retrieval examples. It requires query/passage prefixes and truncates long inputs at 512 tokens. These properties favor a deliberate article-summary representation or chunking experiment, not blindly feeding complete transcripts. This note has not validated an ONNX export, Chinese relevance, model download size, or browser performance for that model. [Original model card](https://huggingface.co/intfloat/multilingual-e5-small/raw/main/README.md)

The build and query sides must use compatible embedding models and preprocessing. Pin model revision, dimensions, tokenizer, pooling, normalization, input representation, and query/document prefixes in the index manifest. Existing Qwen vectors cannot simply be searched with a different small browser encoder because their dimensions happen to match. Cache article embeddings by content plus model/configuration hash; changed articles require updates, and a model change requires a corresponding corpus rebuild.

Alternatively, a thin server endpoint could return only a query embedding while static vectors remain on the CDN and the browser ranks them. Cloudflare documents hosted multilingual embedding inference as one concrete available capability. This does not require moving the website from GitHub Pages. It does require server-side credentials and operational controls; this note does not select a provider or claim a latency/cost result. [Hosted embeddings example](https://developers.cloudflare.com/workers-ai/models/bge-m3/)

RAG adds answer generation conditioned on retrieved documents. Returning relevant article links only needs retrieval; an embedding-based result list is not automatically a complete RAG pipeline. If answer synthesis is not the goal, do not make it part of every search request. [RAG model documentation](https://huggingface.co/docs/transformers/model_doc/rag)

## Bounded next experiment

1. Preserve current full-text search as baseline; collect 15–20 real queries covering phrases, incidental mentions, aliases, speaker-plus-topic, and known articles.
2. Compare first-five relevance and known-article retrieval for phrase controls, weighting, and modest aliases. Count unique article URLs independently from within-page excerpts.
3. Test concise metadata search as an explicit scope, with full text still reachable. Measure index-build seconds, output bytes, cold download, and first-result latency separately.
4. Only if useful queries still fail, compare a multilingual article-vector prototype with a thin hosted encoder. Measure cold and warm mobile experience before selecting either.
5. Do not infer the comparison website's architecture from a semantic-search label, a similarity percentage, or a screenshot. The provided [YaGe search page](https://yage.ai/search/) was fetched successfully with curl: its initial HTML contains a GET form targeting `./` with query field `q`, plus Bootstrap/jQuery assets, and no custom browser search script. This establishes a server request interface, not its underlying index, model, vector database, or computation cost. The site's general articles about retrieval are not proof of its deployed search implementation.

No website code, content submodule, production configuration, or search service was changed by this research.
