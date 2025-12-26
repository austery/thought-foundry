---
area: "tech-engineering"
category: technology
companies_orgs:
- Anthropic
date: '2025-11-24'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Context Engineering blog
products_models:
- Codex
project: []
series: ''
source: https://www.youtube.com/watch?v=NTBX-wxUhHs
speaker: AI Engineer
status: evergreen
summary: Weka首席AI官Val Bercovici与产品管理主管Kellen Fox在AI.engineering代码峰会上宣布开源其语境平台工程工具包。该工具包旨在通过优化键值（KV）缓存命中率和内存分层，解决AI智能体开发中的“令牌焦虑”和性能瓶颈。文章深入探讨了语境平台工程如何简化生产级AI智能体的开发，并展示了Weka基于NVMe的增强内存网格在处理大规模并发用户和预填充令牌时的卓越性能，为AI推理提供商和开发者提供了更高效、经济的解决方案。
tags:
- ai-agent-optimization
- anxiety
- engineering
- memory
- rate
title: Weka开源语境平台工程工具包，助力AI智能体消除令牌焦虑
---
### 介绍与工具包开源

**Val Bercovici:** 大家好，我是Weka的首席AI官Val Bercovici。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is Valberkichi, Weta's chief AI officer, and I am joined by</p>
</details>

**Kellen Fox:** 我是Weka产品管理团队的负责人Kellen Fox。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Kellen Fox, head out of the product management team here at WA</p>
</details>

**Val Bercovici:** 我们都非常高兴能在AI.engineering代码峰会上向大家介绍**语境平台工程**（Context Platform Engineering: 一种优化AI智能体上下文处理和存储的工程方法）。现在，让我们从一个重要公告开始。我们正在开源我们的语境平台工程工具包。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and we're both thrilled to present context platform engineering to you at the AI.engineering code summit. Now, let's kick this off with uh an announcement we're making. We're actually open sourcing our context platform engineering toolkit.</p>
</details>

这个工具包包含了一个非常酷的负载生成器，由Kellen编写，它允许你配置**智能体群**（Agent Swarms: 一组协同工作的AI智能体）和智能体子任务，并设定非常具体的**服务水平目标**（SLOs: Service Level Objectives: 衡量服务性能和可靠性的内部目标）。它能够循环执行确定性和随机的提示周期，并利用各种模型并行选项、分离或聚合的预填充和解码选项，以及我们即将讨论的一些非常重要的内存分层选项来设计语境平台。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this toolkit features a really cool load generator that Kalen wrote that lets you configure agent swarms uh and agent subtasks with very specific SLOs's being able to cycle through deterministic and random prompt cycles and engineer context platforms with all sorts of model parallelism options, disagregated or aggregated pre-fill and decode options and some really important memory tiering options we're going to be discussing here.</p>
</details>

如果翻到下一页幻灯片，你会看到这是一个已经在GitHub上发布的开源工具包。因此，Kellen和我非常鼓励大家访问GitHub，下载并试用它，然后向我们提供反馈。请告诉我们需要改进的地方，也欢迎大家贡献代码和派生项目，共同推动语境平台工程领域的发展，我们今天晚些时候会向大家详细介绍这个领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if we advance the next slide, we'll see that this is an open-source toolkit that's already available to you on GitHub. So, Ken and I really encourage you to just get on GitHub, download this, play with it, and give us your feedback. Let us know what you need change. Feel free to contribute and fork the project uh and advance the field of context platform engineering, which we're going to be introducing to you later today.</p>
</details>

### 语境平台工程的重要性：KV缓存命中率与令牌焦虑

**Val Bercovici:** 接下来，语境平台工程的一个关键要求与我们Manis的朋友在今年夏天早些时候，在他们现在颇具影响力的“Context Engineering blog”中分享的**语境工程**（Context Engineering: 专注于优化AI模型上下文处理效率的技术）洞察有关。他们强调，**键值缓存命中率**（KV Cache Hit Rate: AI模型中键值对缓存被成功访问的比例）是生产级AI智能体最重要的单一指标。语境平台工程之所以如此重要，是因为它能显著简化达到最大KV缓存命中率的过程，我们稍后会向大家展示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So moving on, one of the key requirements for context platform engineering really relates to the contact engineering uh insight that our friends at Manis shared with us earlier this summer in their pretty infamous now context engineering blog and they highlighted the fact that KV cache hit rate is the single most important metric for production grade AI agents. And the reason context platform engineering is so important is it dramatically simplifies reaching maximum KV cache hit rates as we're about to show you</p>
</details>

从更个人化的层面来看，如果我们考虑**令牌焦虑**（Token Anxiety: 因AI模型令牌限制或成本而产生的担忧），我知道我们每个人都曾感受到这种焦虑。语境平台工程之所以如此重要，正如Manis今年夏天早些时候在其语境工程博客中分享的那样，他们特别强调KV缓存命中率是生产级AI智能体最重要的单一指标，而语境平台工程能够以非常直接的方式最大化KV缓存命中率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">on a more personal level. If we think about token anxiety, I know that each and every one of us, you know, feel that anxiety. The reason context platform engineering is so important is shared by the context engineering blog from Manis earlier this summer where they particularly emphasize KV cache hit rates are the single most important metrics for production grade AI agents and context platform engineering quite simply maximizes KV cache hit rates in a very straightforward manner.</p>
</details>

从更个人化的角度来看，如果你思考**令牌焦虑**的概念，因为我们都经常遇到令牌速率限制，语境平台工程有助于设计出能够消除令牌速率限制的平台，从而帮助我们更高效地开发软件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On a more personal note, if you think about to the concept of token anxiety, as we all regularly hit token rate limits, context platform engineering helps to engineer platforms that eliminate token rate limits uh and help us be more productive with regards to developing our software.</p>
</details>

### 语境金融工程与提示套利

**Val Bercovici:** 在没有语境平台工程的情况下，我们常常诉诸**语境金融工程**（Context Financial Engineering: 通过调整提示策略来管理令牌成本和利用率），这本质上是一种**提示套利**（Prompt Arbitrage: 在不同令牌定价类别之间进行权衡以优化成本）。我们必须在输入和输出令牌的定价需求之间取得平衡，同时还要考虑过去几个月出现的新令牌定价类别，例如关注缓存写入和缓存读取。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now in the absence of context platform engineering, we often resort to context financial engineering and that's fundamentally prom arbitrage where we balance the needs of pricing between the bookends of input and output tokens with these new token pricing categories that have appeared in the landscape over the past few months focusing on cash rights and cash reads.</p>
</details>

在进行套利时，我们需要有一定的预见性，来判断要投资多少缓存写入，例如针对五分钟的**存活时间**（Time to Live: 数据在缓存中保留的时间）。在某些情况下，比如Anthropic，我们可以设置一小时的存活时间。所有这些都必须与我们对这些时间间隔内缓存读取和缓存命中次数的预测进行权衡。要做到有预见性并预测未来变得非常非常棘手。我认为，应用语境提示工程技术来克服令牌焦虑和提示缓存套利，远比继续进行套利和语境金融工程要好得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we've got to be somewhat clairvoyant when we're doing the arbitrage to figure out how many cash rights you want to invest in for either five minute time to live. In some cases with anthropic, for example, uh we can do one hour time to live. And that's all against balanced against the predictions we need to make on how many cash reads and cash hits we think we're going to have during those intervals. This becomes very very tricky to be clairvoyant and predict the future. And I think it's much better to apply context prompt engineering techniques to overcome token anxiety and prompt cash arbitrage than to continue to to do the arbitrage and context financial engineering.</p>
</details>

### 令牌存储问题与服务水平目标

**Val Bercovici:** 我们将通过深入探讨代理的相对缓慢的人类反馈循环与以更高节奏迭代的智能体群和智能体子任务之间的**节奏不匹配**（Cadence Mismatch: 不同系统或流程之间时间步调不一致）来解决这个问题，Kellen将对此进行深入讲解。这些智能体通常并行运行，等待人类输入，但在后台执行大量非常酷的工作，消耗大量令牌，其中许多是可缓存的，但我们不知道平台如何响应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so one of the ways we're going to be doing that is looking at and and Ken's going to dive into this deeply, the cadence mismatch between the relatively slow human feedback loops for agents and then the agent swarms and the agent subtasks themselves that iterate at much higher cadence, often in parallel, waiting on humans, but conducting a lot of really cool work in the background, consuming a lot of tokens in the background, many of which are cachable, but we just never know how the platform is able to respond.</p>
</details>

我们要深入探讨的一点是，如果我们看下一张幻灯片，我们从根本上是在处理一个**令牌存储问题**（Token Storage Problem: 如何高效存储和管理AI模型使用的令牌）。我们将解释当我们订阅各种令牌层级，或者在我们的指令和智能体指令中承诺特定的令牌缓存写入和缓存读取时，我们所签订的**服务水平协议**（SLAs: Service Level Agreements: 服务提供商与用户之间关于服务质量的正式协议）如何转化为语境平台本身所提供的服务水平目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's one thing we're going to be diving into here is the fact that if we go to the next slide, we're looking at fundamentally a token storage problem. And what we're going to be doing is explaining how the service level agreements we sign up to when we subscribe to our various, you know, token tiers or we actually commit in our instructions and our agentic instructions to specific token cache rights and cash reads. how those SLAs's convert to service level objectives delivered by the context platform itself.</p>
</details>

更具体地说，Kellen在Weka Labs的研究中得出的一个洞察是，当我们订阅令牌层级或支付特定令牌权限时，我们实际上是在购买令牌存储中的缓存KV槽位。因此，语境平台工程背后有一整套科学，关于语境平台如何接收这些SLA要求，优化基础设施，优化KV缓存和内存分层，并提供特定的SLO，以尽可能满足这些SLA。现在，我将把时间交给Kellen，让他分享Weka Labs的实际研究发现和测试结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And more particularly, one of the insights that Kalan reached from his research at WA Labs is that what we're doing when we actually subscribe to our token tiers or we actually pay for particular token rights is we're really purchasing cash KB slots in token storage. So there's definitely a whole science around the context platform engineering to how context platforms take those SLA requirements optimize infrastructure optimize KV caching and memory tiers and deliver specific SLOs's to try and meet those SLAs's as much as possible. So with that let me actually hand it over to Ken for uh actual research findings and lab and and test results from WA Labs.</p>
</details>

### 智能体工作流可视化与组成

**Kellen Fox:** 谢谢Val。我想做的就是回到Val之前展示的一张幻灯片。从现在开始，我将专注于右侧的循环。我首先会可视化那个循环实际的样子，然后我们再深入探讨更多细节。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Thanks Val. So, look, what I want to do is just go back to one of the slides that Val showed earlier. And what I'm going to do from now on is I'm going to focus on that right hand loop. And the first thing I'm going to do is I'm going to start by visualizing what that loop actually looks like. And then we're going to go into a little bit more detail.</p>
</details>

如果你把那个循环想象成一列，我这里有一张图表，显示了智能体中非常常见的模式。鲑鱼色显示的是系统正在接触的新令牌。灰色部分是可以在有限时间内再次缓存的内容，我们稍后会详细介绍。蓝色是输出令牌。底部的这些蓝色点显示的是用户在这种特定情况下实际给出响应的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if you if you think about that loop as a column, and I've got a graph here that shows a very very common uh pattern that happens in agents. So the the salmon color is showing new tokens that the system's being exposed to. The gray is something that could be ced again within a limited amount of C. We'll get into that shortly. The blue is the output tokens. And these blue dots down the bottom are showing when the user is actually giving responses in this particular case.</p>
</details>

这是一个非常常见的例子：你开始时消耗上下文，直到达到由模型最大长度或推理提供商本身设定的高水位线。然后有一个**摘要阶段**（Summarization Phase: 将长篇上下文压缩成简短摘要的过程），之后你开始一个新的循环。每个人都知道那个摘要阶段，有时智能体可能会失去一点保真度，一点智能，这就是为什么我们试图将更多的语境工程应用于更大的平台，这样我们就可以提高那个水位线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is a really common example you get where basically you start off you consume context all the way up until you hit a um a high a high watermark set by either the model maximum length or by the inference provider itself. there's a summarization um phase and then you start a new cycle and everybody knows that summarization phase where sometimes you know the agent loses a little bit of its fidelity a bit of its intelligence and uh and that's why we're trying to you know uh get more context engineering to larger set of platforms and we can we can raise that watermark</p>
</details>

如果我们更详细地探讨这个问题，我经常被问到的问题是：“好的，那灰色部分是什么？它由什么组成？”在这里，我能够获取数据并实际查看单个提示及其构成。当你查看**智能体数据**（Agentic Data: AI智能体在执行任务过程中生成和使用的数据），尤其是**智能体编码**（Agentic Coding: AI智能体辅助或自动完成编程任务），实际的用户输入只占很小一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so if we go into this in a little bit more detail the question I often get is okay well what is that that's a lot of gray what what's that made out of so here I'm able to um get the data and actually look at individual prompts and what actually makes them up. So when you look at agentic data especially agentic coding the actual user input is only a really small part of it</p>
</details>

你可以从视觉上看到，如果你快速浏览，较浅的白色部分是系统提示和用户文本本身，其余部分是工具使用和工具响应。这个特定的例子来自Claw Code，其中系统花费大量时间执行例如bash命令，抓取某些内容，获取结果，然后执行其他操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and you can kind of see it here just visually that if you just scan across the the lighter whiter colors are the um the system prompt and the user text itself and the rest of it is tool use and tool responses. So uh this is this one in particular is from claw code where you're spending a lot of time um where the the system is you know doing like for example a a bash command it's grapping something it's getting a result and then it's doing something else.</p>
</details>

这在数据中表现得非常明显，如果你查看请求之间的中位时间，对于某些对话来说可能是10秒、15秒。我们有数十亿令牌的数据。中位时间可能是10秒、15秒。这在很大程度上取决于人类是否参与检查每一个工具的使用，但平均时间是以分钟甚至小时计的，因为人类的响应时间要长得多。这就是我们之前展示的循环的两面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So where where this really shows out in the data is if you actually look at the median time between requests it may be some for conversation that looks like that we have data for billions and billions and billions and billions of tokens. Um the median time is 10 seconds, 15 seconds maybe. Um that heavily depends on whether the human's involved in checking every single uh tool use, but the meanantime is in the minutes because the human or even hours because the human time to respond is much much much higher. And that's what we're showing before of the two sides of a loop.</p>
</details>

另一个有趣且目前非常常见的是**多智能体系统**（Multi-Agent System: 多个AI智能体协同工作以完成复杂任务）。你可能有一个核心智能体，我在这里将其显示为**协调器**（Orchestrator: 负责协调和管理多个智能体或子任务的中心组件），然后你有这些被启动来执行单个任务的子智能体。根据智能体编码或任何通用智能体软件的类型，这些智能体或子智能体可能是短期的，即它们的上下文在一次唤醒和下一次唤醒之间不会持续，或者它们是持久的。使用我们的智能体非常重要，因为它允许我们有效地将更多上下文定向到你试图解决的问题的特定部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the other thing that's interesting and and something that's very common today is is is uh is multi- aent. So you might have a core agent which I've shown here is the orchestrator and then you've got these sub agents that are like spun up to do individual tasks and depending on the type of agentic uh coding um or just any agentic software in general. These agents or these sub agents may be short-lived as in their context does not endure between one wake up and the next or there are somes some when they do endure and it's really important to use our agents because it allows us to create to effectively target more context at very particular parts of what the problem you're trying to solve.</p>
</details>

但结果是，你确实会使用更多的上下文，我很快就会解释这一点。但如果你以不同的方式可视化这个灰色部分，并展示颜色，你就可以看到它们之间存在着共同上下文的常见关系。同样，这会根据Codex与Claw Code或其他模型而略有不同。但你可以看到它如何随时间变化，以及智能体如何相互关联并拥有这种共同的理解，然后回到协调器以唤醒下一个智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But as a result, you do actually end up using more context and I'll explain that very shortly. But if you visualize this gray section a different way and I show you the colors, you can kind of see how there's this common relationship of the common context between all of them. Again, this is varies a little bit depending on codeex versus cloud code versus versus others. But you can see how it changes over time and how the agents um relate to each other and have this common understanding and then back to the orchestrator to to wake up the next agent.</p>
</details>

### 缓存命中率的现实与成本影响

**Kellen Fox:** 然而，我们今天主要讨论的是，尽管有很多灰色部分可以被缓存，但现实情况却大相径庭。如果你将此发送给推理提供商，实际情况是，你并不能获得所有可能获得的100%缓存命中。那么，这为什么重要呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The the the the thing that we're here to talk about today though mainly is that like while there's a lot of gray that could be ced, the reality is very different. So if you send this to an inference provider, what ends up happening is you don't actually get 100% of the C hits that you could um that you could get. Now why does this matter?</p>
</details>

有两种方式来看待这个问题。如果你为**API令牌**（API Tokens: 用于访问API服务的计量单位）付费，那么每次你在这里看到黄色（这只是一个简单的例子），你都在支付输入令牌的成本，这实际上会让你花费更多钱。你正在刷新缓存并为此支付全部费用。因此，潜在地，这比缓存时的成本高出10倍。如果你是订阅用户，你可能会想：“我不在乎成本，我不为此付费，我支付的是固定费用。”这确实没错，但你仍然，就像我们之前说的，支付的是订阅费用，而你的订阅会因为缓存使用情况而受到速率限制，你可能会更快或更频繁地达到速率限制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, there's two ways to look at this. If you're paying for API tokens, uh you're literally it's literally costing you more money because every time you see a yellow here, and this is just a simple example, you're paying input token cost. So, you're re you're refreshing your cage and you're paying a full hit for that. So, potentially 10 times more than than what you were if it was caged. If you're a subscription user and you're thinking, well, I don't care about the cost. I don't pay for that. I pay a flat rate. That is true, but you're still, like we said before, you're paying for a subscription and that subscription is rate limited due to your case usage and um you may actually hit rate limits further or quicker.</p>
</details>

所以，这是我们希望能够做到的。我们今天与许多提供商合作，尽可能消除这种情况。这对用户体验和提供商都有好处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, that's something that we want to be able to do. We work with a lot of providers today to to remove as much of this as possible. That's good for the user experience and it's also good for the provider.</p>
</details>

### 缓存的“存活时间”与性能

**Kellen Fox:** 那么，为什么会发生这种情况呢？我的意思是，如果你回想我展示列的上一张图表，它们没有考虑时间。它们只是一个接一个地排列。但显然，有一种时间上的方式来看待这个问题。这就是我喜欢思考它的方式。我知道这张图表看起来有点复杂，但请稍等一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, why does this happen? Well, I mean it if you think about the last graph where I show the columns, they're they're not they don't take into account time. They're just one after the other after the other. But there's obviously um a temporal uh way to look at this. So this is the way that I like to think about it. And I know this is a little bit more of a complex graph to look at, but bear with me for a second.</p>
</details>

在左侧，我谈论的是**工作集**（Working Set: 缓存系统在内存中持有的令牌数量）。这是缓存系统根据缓存本身的**存活时间**（Time to Live: 数据在缓存中保留的时间）在内存中持有的令牌数量。然后，顶部虚线部分，基于右侧的次级轴，显示了由此产生的缓存命中率。红色显示的是一分钟的存活时间。你可以看到，在左侧的开始部分有一些提示，系统在这里上下波动。它之所以这样做，是因为该时期请求之间的时间超过了一分钟。所以你会经历一个阶段，你可能会获取缓存，命中一两次，然后丢弃缓存，然后又获得另一个，你必须刷新它。所以这真的没有意义，对吧？

<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text">So on the left hand side, I'm talking about working set. So that's the number of tokens that the C system is holding in its memory based on different time to lives of the co of the actual C itself. And then the the bit at the top the dotted lines based on the right hand secondary access is showing the case hit rate as a result. So the red is showing one minute time to live. And what you can see is there's prompts here at the start on the left where the um it's thrashing up and down. And the reason it's doing that is the time between requests at that period is is longer than 1 minute. So you're getting a period where you might uh take the cash, get a hit or two, and then drop the cash and then you get another one. You got to refresh it. So it it just it doesn't really make sense, right?</p>
</details>

如果你将存活时间增加到五分钟（蓝色线），你现在可以承载更多的缓存命中，结果是获得更高的缓存命中率。你可以在最开始的地方看到这一点，比较这两者。但你仍然错过了许多其他情况。请求之间的时间仍然有许多次更长。所以下一个显示的是一小时。虽然这要求缓存系统在缓存中持有更多的令牌，最终是相当多的令牌，并且必须持有更长的时间。但对最终用户而言，结果是更好的实际体验，对于推理提供商而言，我们很快就会展示，对他们来说也是更好的体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You go to 5 minutes, which is the blue, and you can now ride out more and more of those cash hits, and as a result, you get a higher case hit rate. You can see it at that very start um up there uh comparing the two. But then you're still missing many others. There's still many times where the the time between a request is even larger. So the next one up is showing 1 hour. And while that requires the C system to hold uh you know a little bit more tokens in C and eventually quite a fair bit more tokens in C, it's got to hold it for a longer period of time. But the result to the end user is a better um actual experience and to the enterp to the uh inference provider which we'll show very shortly it's a much better experience for them as well.</p>
</details>

然而，问题在于，要做到这一点，你需要能够在缓存中持有大量令牌，并且需要良好的**内存分层**（Memory Tiers: 不同速度和成本的存储层级）来支持。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The problem though is to do that you need to be able to hold a lot of tokens in C and you need good memory tiers to support that.</p>
</details>

所以，我想讲的下一件事是，很多人认为缓存命中率并不是人类真正能够内化的东西。那么，我可以用另一种方式来可视化它，即从平均刷新令牌块（一组令牌）的次数来思考。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so the next thing I want to go into is that a lot of people think of C hit rate isn't really something that a human's able to really internalize. Well, so another way that I can visualize it is by thinking about it in terms of the number of times on average that a chunk of of tokens, which is a group of tokens, is refreshed.</p>
</details>

在我们这里看的这个特定对话中，你可以看到这显示了随着我增加存活时间，它如何影响我的缓存命中率的关系。但它也根据次级轴显示，在一分钟时，我实际上预填充了相同的令牌大约15到16次。随着时间的推移，我们可以将这个数字一直降到接近一次，并再次对用户和推理提供商的体验产生显著影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in this particular conversation that we're looking at here, you can see that there's this is showing the relationship of as I increase the time to live or how that affects my case hit rate. But it also shows based on the secondary access that at 1 minute I'm literally re re uh prefilling like 15 16 times the same tokens. And over time we can get that all the way down to approaching one um and um make significant differences to again the experience of both the user and the inference provider.</p>
</details>

### 推理提供商的视角与令牌存储构成

**Kellen Fox:** 接下来，我想深入探讨语境工程的方面，我们学到的一些经验教训，并真正将其深入人心。现在，我希望你思考在2026年及以后将变得普遍的情况，即人们自己托管或拥有为其托管的专用系统。所以，想象一下你现在是一名推理提供商。好的，现在我希望你把自己想象成一个推理提供商。也许你已经与我们或我们的某个合作伙伴合作，构建了自己的自托管实例，并且你希望从中获得最大的价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So with that what I'd like to do now is go into the the context engineering side of it, some of the lessons we learned and um just sort of really drive this home. So now I want you to think about uh what I think will be common in 2026 and onwards of people hosting their own or having their own dedicated systems hosting for them. So imagine you being an inference provider now. Okay. So now what I want you to think of is think of yourself as an inference provider. Uh maybe you've um you've you know worked with us or one of our partners to build your own your own self-hosted instance um and uh you want to get the most out of it.</p>
</details>

这张图表向你展示了在特定上下文长度、缓存命中率以及由此产生的输出令牌数量之间的关系。首先你会看到它不是线性的，而且这条曲线的形状会根据上下文长度、你使用的加速器等许多因素而变化。你如何进行预填充也有很多因素。但曲线或多或少是相同的。如果我问你作为推理提供商，你希望在哪里？你显然会说C点。如果你在A或B点，你没有赚钱，或者没有从系统中获得足够的价值。我们合作的推理提供商显然也有相同的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What this graph is showing you is uh a relationship between a certain context length and the C hit rate and how many output tokens you get as a result of that C hit rate. Now the first thing you'll see is it's not linear and it it and the shape of this curve will change based on the context length based on the accelerators you use. B there's lots of things that come into it. how you do p disag and prefill. Uh there's a lot of stuff that comes into it, but the co the the curve is more or less the same. And if I asked you as an inference provider, where do you want to be? You'd obviously say C. And if you're in A or B, you're you're not making money or you're not getting enough value out of the system. And inference providers that we work with that they they have the same answer obviously.</p>
</details>

所以问题是，他们如何保持在C点？这又回到了Val之前展示的一张幻灯片，他们正在激励用户留在C点。这就是我们意识到，很多时候，因为缓存命中率对你的实际输出影响巨大，所以当你购买订阅服务时，你实际上是在购买存储中的缓存配额。因为对他们来说，你保持在某个缓存命中率范围内非常重要，特别是对于**智能体工作流**（Agentic Workflows: 由AI智能体执行的自动化任务序列）。否则，他们真的会烧毁他们拥有的**GPU集群**（GPU Clusters: 由多个图形处理器组成的计算系统）。我认为将这一点牢记在心，了解它是如何运作的，是非常有力的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the question is, well, how do they keep in C? And this is where it goes back to a slide that um Bow showed earlier where what they're doing is they're incentivizing users to stay within C. And this is where we we came to the realization that a lot of the times because of how much C hit rate uh impacts your actual output. That's why it's you're buying case allotments in storage when you're actually buying subscription services because it is so important to them that you stay in a certain case hit rate band especially for agentic workflows. Otherwise they literally you'll just melt the GPU clusters that they have. Um and I and I think it's a really powerful thing to to have in your head about how that works.</p>
</details>

那么，我们现在将探讨构成这个令牌存储的要素。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what we're going to do now is go through and think about okay what what makes up this token storage.</p>
</details>

当你考虑令牌存储时，支持令牌存储的内存分层需要能够处理许多方面。但要真正使其非常非常简单，它实际上就像你需要这些内存分层有足够的容量一样简单，这样你就可以持有最佳数量的缓存。如果你回想我刚才展示的幻灯片，有一个点是拥有更多缓存会有所帮助，但它会达到一个收益递减的点。你至少需要达到那个点，并且需要能够极快地存储到其中，因为如果不能，你将在KV进入内存分层之前将其丢弃，或者你将阻塞GPU，这可能更糟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when you think about the token storage there's lots of aspects that uh the memory tiers that support the token storage need to be able to do. But to really make it really really simple it's literally as as as simple as you need enough capacity in these memory tiers so that you can hold a optimal amount of cash. Uh if you think back to the the slides I just showed, there's this point where having more cash helps you a little bit, but it kind of gets to a point of diminishing returns. Um you need to get at least to that point and you need to be able to store extremely fast into it because if you can't, you're going to be able drop in KVs before they're in the memory tier or you're going to be blocking GPUs, which is probably even worse.</p>
</details>

然后，另一种方式是你需要能够非常快速地从该令牌存储中获取数据，这样你就可以再次不阻塞GPU。它们是整个系统中最主要的一等公民。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the other way you need to do it is you need to be able to fetch from that token storage very very rapidly so that you can again not block the GPUs. They're the primary first class citizen of this whole system.</p>
</details>

### 内存分层类型与Weka的解决方案

**Kellen Fox:** 那么，它看起来像什么呢？有几种不同类型的内存分层。最常见的是**HBM**（High Bandwidth Memory: 一种高带宽内存技术），Val和我都希望我们所有的会话都能一直存储在HBM中。但这不现实。有很多原因，围绕批处理的工作方式，我们今天不会深入探讨。但重点是，目前最常见的做法是使用**DRAM**（Dynamic Random-Access Memory: 动态随机存取存储器）。DRAM本身并没有什么问题。它是一种达到目的的手段，但其容量相当有限。它的性能还可以。但另一方面，它与计算紧密耦合。所以如果你想扩展你的DRAM，并没有很多好的方法可以做到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what does it look like? So there's a few different types of memory tiers. The most common obviously is HBM and uh Val and I would love it if all our sessions are in HBM at all times. It's just not reasonable. Um there's many reasons for this around how the batch works which we're not going to go into today. But the point is is that the the the main common way that this is done today is DRAM. And there's nothing really wrong with DRAM as such. It it's sort of a means to an end, but it's quite limited in size. It's it's okay in terms of performance. But the other thing is it's tightly coupled with the compute. So if you want to expand your DRAM, there's not really many good ways to do that.</p>
</details>

有一些技术可以做到这一点，但它们的实现方式会损害你的性能。这就是我用**池化DRAM**（Pulled DRAM: 将多个DRAM模块聚合起来以增加容量）展示的。你可以将更多DRAM汇集在一起，但它并没有太大帮助。所以我们Weka所做的是，我们利用了我们产品的所有持久性优势，这些优势已经在AI训练和HBC环境中经过了尝试和测试。**增强内存网格**（Augmented Memory Grid: Weka提供的一种基于NVMe的优化存储解决方案）本质上是一个受支持的、优化的连接器，连接推理系统和我们现有的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are some technologies out there that kind of do this, but the way they're implemented, they they kind of just hurt your performance. And that's what I'm showing with pulled DRAM. You could pull more together, but it's, you know, it's kind of a uh uh it doesn't help that much. So what we at Wcker um did is we took all the durable advantages of our product which has been you know tried and tested in AI training in HBC environments and augmented memory grid is basically a uh supported um optimized connector between the inference systems and our um existing product.</p>
</details>

因为我们有**NVMe**（Non-Volatile Memory Express: 一种高速存储接口协议）作为支持，所以我们的密度更高。根据你的看法，密度可能高出数千倍，这非常显著。然后我在顶部展示了另一个存储示例，它不是那种迟缓的存储，它仍然可以达到每秒50-60GB的速度，而且有容量，但相对于我们讨论的，它仍然相当慢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And because we're backed by NVMe we we're we're much denser. where like thousand times depending on how you look at it denser it's quite significant and then I show another example of a storage at the top there where you know not not something sluggish something that can still get 50 60 GB a second but uh and it has the capacity but still relative to what we're talking about is is still quite slow.</p>
</details>

### 测试方法与结果

**Kellen Fox:** 好的，接下来我们谈谈如何测试。同样，我们之前提到过我们已经开源了这个工具包。基本上，Val已经涵盖了它的主要部分，即它像一个推理提供商一样运作。如果你启用两个SLO，它会尝试将负载保持在其中。你实际上不必启用它们，它会尽其所能地运行，无论SLO是**首个令牌时间**（Time to First Token: AI模型生成第一个输出令牌所需的时间）还是每个请求的输出令牌数量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So then moving on to how do we test this? So again, um we we talked about how we're we've open sourced this. Um basically, um Val already covered the the main part of it and that the fact that it it it acts like it's an inference provider. It's trying to keep the load within two SLOs's if you enable them. You actually don't have to enable them and it'll just go as hard as it can regardless of of an SLO being time to first token or output tokens per request.</p>
</details>

但它能做的主要事情是，你可以设置一个静态数量的编码智能体用户，或者你可以随着时间增加这些用户的数量，这样你就可以慢慢利用更多的内存分层，并能够比较不同的配置。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the main thing that it can do is you can either set a static number of coding agent users or you can um increase the number of those users over time so that you can slowly utilize more of the memory tiers and be able to compare different configurations.</p>
</details>

它有两种工作方式。我将快速介绍这些部分，因为你可以阅读相关内容。我有一篇博客详细解释了我是如何进行测试的，当然还有GitHub。但基本上，它可以完成初始工作集，然后按顺序遍历这些提示。这将是非常非常确定性的，因为一旦你稍微溢出内存分层，你就会看到性能大幅下降。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there's two ways that it works. Um I'll just be quick through these sections because you can read about this. I have a blog that explains how I do the testing that goes through all of this in detail. And there's obviously the GitHub as well, but basically it can do the initial working set and then sequentially go through those prompts. So this will be very very very deterministic because as soon as you over overflow the memory tier even the slightest bit, you'll see a massive drop off in performance.</p>
</details>

但另一种更公平的实现方式是，你可以随着时间增加大小。因此，你可以从一个池中访问的并发用户数量，并且你可以随机抽取样本集中的提示。所以有时你可能会命中HBM，有时你可能会命中你的第二层内存，比如DRAM，然后你得到一个非常好的混合数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the other way that it can be done and realistically the more fair way that it can be done is you can ex increase the size over time. So the amount of concurrent users that you're accessing out of a pool and you can randomly sample where in that sample set you'll get that uh prompt from. So sometimes you might be hitting HPM, sometimes you might be hitting your your memory tier 2. Let's say that let's say that's DAM and you get a really nice blended number.</p>
</details>

所以，接下来，让我们看看一些结果，并解释和展示我们今天所讨论的内容为何如此令人兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So with that, let's go in and tell show you some results and just sort of explain and and show why we're so excited about what we're talking about today.</p>
</details>

这里展示了三个比较。比较一：HBM与Weka，这是紫色线。橙色是HBM和DRAM。还有橙粉色，是HBM加DRAM，再加上我之前提到的另一个**POSIX系统**（POSIX System: 一组IEEE标准，定义了操作系统接口，以提高软件在不同系统间的可移植性）。虚线显示的是并发用户。所以，池中的用户数量随着时间增加。在初始的阴影区域，你可以看到所有三者都从HBM中获得了优势。缓存命中率的主要优势来自HBM。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this showing three comparisons. Comparison number one is HBM with weter. That's the purple. Uh there's orange which is HBM and DRAM. And there's the you know orangey pinky color with uh HBM plus DRAM plus that uh other uh posics system that I talked about earlier. The dotted line is showing uh concurrent users. So the amount the amount of users that are in a pool and that's increasing over time. So in the initial shaded area you can see that all three of them get an advantage of HBM. The primary uh hit out of uh C hit rate is coming out of HBM.</p>
</details>

但随着时间的推移，当我们不断增加用户时，你就会溢出DRAM系统，即DRAM内存分层所能处理的范围，橙色和粉色线开始急剧下降。从Weka的角度来看，我们也会下降，因为我们从HBM获得的优势越来越少。所以我们必须稍微降低并发性。系统会自动完成，即基准测试工具。但一旦我们达到稳定状态，所有三者都会趋于平稳。但主要区别在于，一旦达到稳定状态，我们可以在更高的用户数量和更高的输出令牌数量下保持这种状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then over time as we increase the users more and more and more you're overflowing what the DRAM system what the DRAM memory tier can do and both orange and the pinky color start to drop off quite dramatically. Um we also from a wcker perspective also drop off because we get less and less advantage from HBM. So we have to uh pull back our concurrency a little bit. The system does automatically the uh the benchmarking tool. But then once we've sort of got down to the steady state, all three start to like um level out a little bit. But the main difference is is that once you get down to that steady state, we can maintain that at a much higher amount of users at a much higher amount of output tokens.</p>
</details>

另一种看待这个问题的方式是，那是一个以解码为中心的角色。如果你关注**预填充**（Pre-fill: 在AI模型生成响应之前，将输入上下文加载到模型中的过程），如果你进行分离的预填充，那么预填充对我们来说实际上是更好的结果，因为当你在单个解码中处理大量预填充令牌批次时，GPU的效率要高得多。然后我们基本上可以更公平地饱和系统，并且它会持续下去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other way that you look at this is um that was a decode focused role. Um if you look at a pre-fill focus ro if you're doing disag prefill um then the prefill is actually even better result for us because the systems the GPUs are so much more efficient when you're doing large um batches of pre-fill tokens with a single decode. Um then we we can basically saturate things more fairly and um and it continues.</p>
</details>

现在，紫色和橙色之间的主要区别在于我们有更多的缓存。所以我们可以命中更多。橙粉色有趣的地方在于它也有能力命中所有可能的东西，但它不够快，无法将其送入GPU以产生影响。这就是我们展示这三者之间差异的原因，因为使用紫色，你获得了容量的优势，但以DRAM的速度，所以你可以更长时间地保持这种优势。也许Val，我把时间交给你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the main difference between pink and orange is that we uh sorry purple and orange is that we have a lot more cash. So we can hit a lot more. The interesting thing about the orangey pinky color is that it also has the ability to hit every single thing that it's possible but it's not fast enough to get it into the GPU for it to make a difference. And that's why we're sort of showing the difference between these three because with purple you're getting the advantage of capacity but at DM speeds so you can maintain that benefit longer periods of time and then maybe Val I'll hand back to you.</p>
</details>

### 总结与展望

**Val Bercovici:** 绝对是。Kellen，你对Weka Labs所有研究和基准测试结果的讲解非常棒。所以，我们再次很高兴今天宣布开源这个语境平台工程工具包。请务必下载、使用并向我们提供反馈。同样，欢迎你派生它并自行改进。我们期待着共同为减少整体令牌焦虑、减少提示缓存套利以及未来更多的语境和语境平台工程做出贡献。这里有一个方便的二维码，你可以找到更多信息。在这段视频的结尾，在实际的文本部分等等，会有我们在此引用的所有博客的链接。感谢大家今天的参与，我们期待未来能与大家继续探讨语境平台工程的话题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Absolutely. That was a great walk through Ken of all of your research and benchmark results in WA labs. So once again we're thrilled to be announcing the open sourcing of this context platform engineering toolkit today. Please do download it, use it, give us your feedback. Again, feel free to fork it and improve it yourself. And we look forward together just contributing to less token anxiety overall, less prompt cash arbitrage and more context and context platform engineering in the future. A nice QR code for you to find out even more information. And at the end of this video in um in the actual transcript section and so forth, there'll be links to all the blogs we referenced here. So, thank you for joining us today and we look forward to pairing on the context platform engineering conversation with you in the future.</p>
</details>