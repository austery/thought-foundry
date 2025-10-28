---
author: Anthropic
date: '2025-10-27'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=a8PmR-fNQ_0
speaker: Anthropic
tags:
  - ai-in-finance
  - enterprise-ai
  - workflow-automation
  - financial-analysis
  - ai-safety
title: Claude 如何赋能金融服务：从数据洞察到工作流转型
summary: 这篇文章深入探讨了 Anthropic 的 Claude AI 如何革新金融服务行业。两位 Anthropic 专家 Alexander Bricken 和 Nick Lin 讨论了企业级 AI 从好奇到实际部署的转变，强调了 Claude 在检索、分析和创建方面的强大能力。文章详细介绍了 Claude 如何通过连接核心数据源、自动化复杂分析和生成客户就绪的报告，帮助金融分析师摆脱繁琐工作，专注于高价值任务，并强调了 AI 安全性、模型记忆功能以及与行业伙伴和客户紧密合作的重要性。
insight: ''
draft: true
series: ''
category: finance
area: market-analysis
project:
  - ai-impact-analysis
  - investment-strategy
people:
  - Alexander Bricken
  - Nick Lin
companies_orgs:
  - Anthropic
  - BCI
  - S&P
  - FactSet
  - NBIM
  - Perella Weinberg
  - PitchBook
  - Snowflake
  - Salesforce
products_models:
  - Claude
  - Claude 3
  - Claude for Finance
  - Artifact
  - Model Context Protocol
media_books: []
status: evergreen
---
### 引言：AI 驱动金融服务的变革

**Alexander:** 大家好，我叫 Alexander Bricken，负责我们金融服务领域的应用 AI 工程团队。今天，我们将来谈谈 **Claude for Finance**（面向金融服务的 Claude），我的同事 Nick 也加入了我们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hey, my name's Alexander Bricken, and I lead our applied AI Engineering team for Financial Services. Today, we're gonna be talking to you about Claude for Finance, and I'm joined by my colleague Nick.</p>
</details>

**Nick:** 大家好，我叫 Nick Lin，是 **Claude for Financial Services**（面向金融服务的 Claude）的产品负责人。我曾是一名投资银行家和私募股权投资者，现在正在“康复”中。我们接下来要讨论的许多问题都与我息息相关，所以我非常兴奋，Alexander。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hey, my name is Nick Lin, and I lead product for Claude for Financial Services. I'm also a recovering investment banker and private equity investor. A lot of these problems we're about to talk about are very near and dear to my heart, so I'm very excited, Alexander.</p>
</details>

**Alexander:** 太棒了。Nick，我的第一个问题是，你如何看待当前金融服务领域 AI 格局的变化？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Awesome. So, Nick, my first question for you is how do you feel about the shift in the AI landscape for financial services these days?</p>
</details>

### 金融服务领域 AI 的转变：从好奇到部署

**Nick:** 我加入 **Anthropic**（一家领先的 AI 安全和研究公司）已经一年半多一点了，那是在 **Claude 3**（Anthropic 开发的最新一代大型语言模型）发布之前。因此，我认为企业 AI 的格局，尤其是在过去几个月里，已经发生了显著变化。我真正注意到的是，我们正在从单纯的好奇和旁观，转向实际开始构建和部署 AI 到生产环境中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, I've been with Anthropic for a little bit over a year and a half now. That was before Claude 3, so I think the enterprise AI landscape has changed significantly, especially in the past few months. What I am really noticing is that there is a fundamental shift from curiosity, observing from the sidelines, to actually starting to build and deploy into production.</p>
</details>

众所周知，编程是 AI 领域最早实现强大产品市场契合度的产品和领域之一。我认为我们现在开始看到这种趋势真正扩展到其他垂直领域，包括金融。例如，**NBIM**（Norges Bank Investment Management：管理挪威政府全球养老基金，全球最大的主权财富基金之一），我们最大的客户之一，拥有大约 9,000 家投资组合公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, as we all know, coding is one of the first products and first domains within AI with really strong product-market fit. I think we're starting to see this really extend to other verticals as well, including finance. For example, NBIM or the Norwegian Sovereign Wealth Fund, one of our largest customers, they have about 9,000 portfolio companies.</p>
</details>

他们所做的是，利用像 **Model Context Protocol**（MCP：Anthropic 开发的，允许 AI 模型与外部系统和数据源交互的框架或 API）这样的工具，自行构建了集成，以便他们的所有投资组合经理每天都能查询这些集成，从而深入了解他们的投资组合公司。因此，我认为我们真的开始看到分析师将更少的时间花在繁琐、手动、枯燥的工作上，而开始专注于他们真正关心的事情，比如建立关系、会见客户，并真正理解他们所投资公司的商业模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What they've done is they've built integrations on their own with things like model context protocol, so that all of their portfolio managers are querying these integrations every single day to get insights into their PortCos. So I think we're really starting to see analysts spend a lot less time on the mundane, manual, tedious parts of the work, and start to focus on what they really care about, you know, which is building relationships, meeting with their customers, and actually understanding the business models of the companies they're investing in.</p>
</details>

**Alexander:** 是的，从我作为一个应用 AI 从业者的角度来看，这确实引起了共鸣。每当我与客户互动时，去年很多时候，他们会从构建一个 AI 聊天功能开始。他们会有很多模型，然后选择一个，也许是一个随机的业务用户，然后他们会尝试与之协作并进行聊天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, that really resonates from my standpoint as well as an applied AI person. Whenever I go and interact with customers, a lot of the time, last year, let's say, they would start with building an AI chat feature. Like, they'd have a bunch of models represented, and they would select one, maybe a random business user, and they would try to work with it and just chat with it.</p>
</details>

最终，我们现在看到了像 MCP 这样的东西出现，聊天功能变得更加强大。你可以与你关心的系统进行交互，我认为这对于金融领域来说尤其令人兴奋，因为通常有太多的产品界面需要人们去互动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Eventually, now, we've seen things like MCP come out where the chat has become so much more powerful. You can interact with the systems you care about, and I think that's really exciting specifically for finance because, often, there are just so many product surfaces that folks have to interact with.</p>
</details>

**Nick:** 100% 同意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">100%.</p>
</details>

### AI 模型的能力、安全性和信任

**Alexander:** 如果你现在给一个模型一个工具，通常模型足够智能，能够根据工具描述和工具名称知道这个工具的作用。但同样，模型也内置了某些基本功能，比如我们试图融入模型与世界互动方式的安全性。我们训练模型要做到有益、无害和诚实，这通常反映了它们解释的数据以及与之对应的输出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you give a model a tool these days, often, the model's intelligent enough to know what that tool does given the tool description and the tool name, but equally, the model has certain primitives baked into it, like the security that we try to bake into the way the model interacts with the world. So we train our models to be helpful, harmless, and honest, and often, that's a reflection of the data that they interpret and the output that it basically corresponds to.</p>
</details>

所以我认为这可能也是你所指的，即模型通常是智能的，如果你给它这些不同的层级，你真的可以看到一些很酷的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think that's probably what you're referring to as well in that, like, the model is generally intelligent, and so if you give it these different layers, you can really see some cool results.</p>
</details>

**Nick:** 你提到了安全，这对于我们所做的一切都至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, safety is something that you touched upon. That is so foundational to everything we do.</p>
</details>

**Alexander:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Nick:** 这关乎将这些解决方案安全地部署到企业环境中。这关乎确保模型能够准确回答问题，并对这些问题有正确程度的理解和忠实度。第三，是真正给予我们的用户信任、验证和可审计性，以理解这些结果。所以，我认为我们考虑了安全性的所有这三个组成部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's about securely deploying these solutions into enterprise environments. It's about making sure that the models can accurately answer the questions with the right level of understanding of those problems and fidelity, and third is actually giving our users the trust, the verification, the auditability to understand these results. So I think we think about all three of those components of safety.</p>
</details>

### Anthropic：从研究到金融产品

**Alexander:** 是的，说到这个，Anthropic 的创立原则就是 AI 安全。它从一开始就是一个研究组织。我很好奇，我们是如何从一个研究组织发展到在金融服务领域发布一款杰出产品的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I mean, speaking of, right? Anthropic was founded on the principles of AI safety. It was a research org from scratch. I'm curious. How have we gone from being a research org to releasing a distinguished product in financial services?</p>
</details>

**Nick:** 在我看来，Anthropic 真正致力于构建能够安全部署的模型，以解决世界上最复杂和最困难的问题。在代码方面，我们是业界领先的。全球人口中只有 0.5% 是软件工程师，所以这只是我们真正可以开始解决的这些非常复杂、困难问题的一小部分。这些问题确实存在于世界其他各个地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In my mind, Anthropic really aims at building models that can be safely deployed to solve the most complex and difficult problems in the world, right? We're state-of-the-art when it comes to code. 0.5% of the world's population are software engineers, so that is just one sliver of these really complex, difficult problems we can really start solving, right? They really exist everywhere else in the world.</p>
</details>

代码对于公司的每一个部分都至关重要，它决定了公司的运作方式。这意味着 Claude 在与更复杂的系统互动、暴露其思维和逻辑方面非常出色，这也是它在金融领域表现出色的原因。金融问题是部署在受监管垂直领域中的复杂问题，需要验证、可审计性，最终，准确性至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Code is so foundational to every single part of a company, right? It is how a company is run. So that means that Claude is really great at interacting with more complex systems, being able to expose its thinking and its logic, and that's why it's great at finance as well, right? Finance are complex problems deployed into regulated verticals that need verification, auditability, and ultimately, accuracy really matters.</p>
</details>

**Alexander:** 如今的金融分析师花费大量时间追求像素级的完美，比如制作 PowerPoint 演示文稿或 Excel 模型。你不能有任何错误。有趣的是，我们现在处于一个模型可以做类似事情的范式中，但它们利用自身能力编写高度结构化的逻辑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Financial analysts these days spend a lot of time getting down to, like, the pixel perfect level of let's say a PowerPoint deck or an Excel model, right? You can't get anything wrong, and it's funny, now that we're in this paradigm where models can do something similar, but using the capabilities they have to write really structured logic.</p>
</details>

这正是我们发现语言模型擅长的，也是我们训练它们的地方。这种能力似乎正被抽象到许多其他领域，比如创建 Excel 电子表格或 PowerPoint 演示文稿。所以，至少对我来说，看到这些模型的逻辑和推理最终触及如此多的领域，真是令人震惊。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so that's actually what we've found language models to be good at, what we've trained them on, and that ability to do that, it feels like it's just being abstracted into so many other domains, like creating Excel spreadsheets or like creating PowerPoints, and so, yeah, it's just been, like, super just kind of striking, at least to me, to see how many domains the logic and reasoning of these models actually ends up touching.</p>
</details>

**Nick:** 归根结底，这些都是我们每天都在互动的数字系统。Claude 擅长代码这一事实赋予了它一项灵活的技能和捷径，来完成所有这些非常酷、有趣的事情。我们几周前推出的文件创建功能，使 Claude 能够创建 Excel 文档和 PowerPoint，本质上是 Claude 访问了一个虚拟机，它可以在其中大规模运行 Python 代码来编辑、分析和创建 Excel 文档，并创建这些完美的 **DCF 模型**（Discounted Cash Flow models：折现现金流模型，一种基于未来预期现金流估算投资价值的估值方法）。我认为这让我们非常兴奋。所以，我认为代码可以真正解锁许多其他领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ultimately, these are digital systems that we interact with every single day, right? The fact that Claude is great at code gives it a flexible skill and a shortcut to do all of these really cool, interesting things, right? Our file creation feature that was launched a few weeks ago that enables Claude to create Excel documents and PowerPoint is essentially Claude accessing a virtual machine within which it can run Python code at scale to edit, analyze, and create Excel documents and create these perfect DCF models, which I think is super exciting for us, right? So I think there's a lot of other domains that code can start really unlocking.</p>
</details>

### Claude for Finance 的核心能力：检索、分析与创建

**Alexander:** Claude for Finance 与市场上其他金融服务产品有何不同？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's different to Claude for Finance versus other products on the market in financial services?</p>
</details>

**Nick:** 我经常思考三个动词，它们指导着我为 Claude for Finance 构建产品：检索、分析和创建。从检索开始，市场上许多研究代理已经相当成熟。大型语言模型在深入挖掘大量数据池和收集洞察方面表现出色，阅读速度可能比人类快 5,000 倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, there are three verbs I think about a lot that governs what I want to build for Claude for Finance, and these are retrieve, analyze, and create. Starting with retrieval, many of the research agents on the market has seen, you know, quite a lot of maturity, right? Large language models are fantastic at digging into large pools of data and gathering insights, and can read, you know, 5,000 probably times faster than humans,</p>
</details>

但我们希望通过金融服务实现的是，确保这些系统能够连接到金融分析师工作所需的所有核心数据源。在金融领域，比竞争对手和同行更快地发现洞察力，这是一个非常关键的优势。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but what we want to do with finance is making sure that these systems can connect to all of the core data sources that finance analysts work in. In finance, the ability to uncover insights faster than your competitors and your peers, that's a really key advantage.</p>
</details>

现在，在此基础上，我们能够检索这些信息并连接到它固然很好，但通过代码或电子表格进行大规模分析的能力也同样至关重要。金融模型本身不仅仅是漂亮的 Excel 表格，它们是金融分析师注入自己对未来和公司适当估值判断的一种方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, downstream from that, it's great that we can retrieve this information and connect to it, but the ability to do analysis at scale, either through code or through spreadsheets, is so foundational as well. Financial models themselves, they're not just these beautiful Excel sheets, right? They're a way for finance analysts to inject their own judgment of what the future looks like and what the proper valuation looks like for that company, right?</p>
</details>

考虑到这一点，我们希望 Claude 能够非常擅长理解这些核心金融概念，并操作 Excel 和电子表格等系统来完成这些计算。第三部分是创建。我们都是企业中的社会性动物，我们工作是为了与他人分享，所以以电子表格、PowerPoint 文档、Word 文档形式的输出，以一种客户就绪、董事会就绪的方式完成，这非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, with that in mind, we want Claude to be really good at understanding these core finance concepts and manipulate systems like Excel and spreadsheets to be able to do that calculation. And then the third part is creation, right? We're all social creatures within the enterprise, right? We do our work to be shared with others, so the outputs themselves in the form of spreadsheets, you know, PowerPoint documents, Word, doing this in a way that is client-ready, boardroom-ready, is really important.</p>
</details>

所以，我们真的想开始推动 Claude 的能力，使其也能做到这一点，从而成为一个端到端的代理式自主系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we really want to start pushing Claude's capabilities to be able to do that as well so that it is an end-to-end agentic autonomous system.</p>
</details>

**Alexander:** 这很有道理。我觉得我们构建了这些基本功能，然后它们几乎像滚雪球一样发展。所以你有了检索步骤，对吗？你构建了一个 MCP 服务器来连接到一个系统，但如果你从那个系统获取数据，它可能会以独特的方式连接到其他系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That makes a lot of sense. I feel like we build these primitives and then they almost end up snowballing. So you have, like, the retrieval step, right? You build an MCP server to connect to one system, but then if you take the data from that system, maybe it connects to some other system in a unique way.</p>
</details>

比如，你从 **Snowflake**（一家基于云的数据仓库公司）获取数据，你在其中找到一个 ID，你需要将其连接到你的 **Salesforce**（一家专注于客户关系管理 (CRM) 的云软件公司）实例。你可以通过我们在检索端构建的一些基本功能轻松做到这一点，但随后它会继续滚雪球。你进行分析，Claude 可以编写大量代码，并实质上将一些信息整合起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like, you get data from Snowflake, let's say. You find an ID in there and you need to connect it to your Salesforce instance. You can easily do that with some of those primitives that we've built on the retrieval side, but then it sort of continues to snowball. You get analysis where Claude can write a bunch of code and essentially piece together some of that information,</p>
</details>

最后，创建功能甚至更进一步，将其放入用户关心的环境中，将该 POST 请求（回到 API 示例）发送到一个系统，分析师或操作员可以在其中看到 Claude 经过推理的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then finally the creation is even take that one step further and put it into the environment that someone cares about, sending that post request, back to the API example, to a system where an analyst or an operator can see the information that Claude has reasoned through.</p>
</details>

### Claude for Finance 的解决方案架构：模型、代理能力与平台

**Alexander:** 那么，我们来详细谈谈 Claude for Finance 到底是什么？它是如何工作的？它有什么特别之处？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's talk a little bit more about what is actually Claude for Finance? How does it work? What makes it so special?</p>
</details>

**Nick:** 我们的解决方案包含三个层次：模型、代理能力和平台。从模型本身开始，我们本质上是一个研究实验室。我们所做的一切都旨在使 Claude 成为金融服务领域最好的模型。现在，金融给我们带来了一些有趣的挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there are three layers that we think about in our solution. The models, the agentic capabilities, and the platform, starting with the models themselves. Fundamentally, we are a research lab, right? Everything we do really aims at making Claude the best model for financial services. Now, finance presents some interesting challenges to us, right?</p>
</details>

作为软件工程师和产品经理，我们可以每天测试代码，但在 Anthropic 的这四堵墙内，投资银行家却很少。所以，我们非常高兴能与 **BCI**（British Columbia Investment Management Corporation：一家大型机构投资者）、**Perella Weinberg**（一家全球独立咨询公司）和 NBIM 等早期客户合作，真正了解他们真正关心的用例是什么？“好”是什么样子？然后更重要的是，帮助我们发现那些我们可以带回研究过程中的差距。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Code is something that we can test every single day as software engineers and product managers, but there are very few investment bankers within these four walls of Anthropic. So here's where we're really excited to work with early customers like BCI, Perella Weinberg, and NBIM, to really let us know, what are the use cases they really care about? What does good look like? And then help us, much more importantly, uncover those gaps that we can bring back into the research process.</p>
</details>

第二件事是产品方面。代理能力本质上是我们编写的代码，用于使用户能够与模型进行交互。我们已经构建了像深度研究这样的功能。现在，我们正在大力投资，以便能够将 Claude 嵌入到你工作的所有核心界面中，不仅仅是 **Claude for Enterprise**（面向企业的 Claude）或 **Claude.ai**，还包括浏览器扩展、Excel、Chrome 以及我们的分析师和企业客户每天使用的其他界面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second thing is on the product side, right? Agentic capabilities are essentially the code that we write to enable users to interact with the models. We've built capabilities like deep research. Now, we're really investing in being able to embed Claude in all of the core surfaces you work in, not just Claude for Enterprise or Claude.ai but also the browser extension, Excel, Chrome, and other surfaces that our analysts and enterprise customers work with every single day.</p>
</details>

最后一点是，我们希望再次构建一个非常灵活的平台，可以为我们的客户量身定制并轻松部署。这就是为什么我们花费大量时间与 **S&P**（Standard & Poor's：标准普尔，一家金融情报和信用评级机构）、**FactSet**（FactSet Research Systems Inc.：一家金融数据和分析软件公司）和 **PitchBook**（PitchBook Data, Inc.：一家涵盖私募股权、风险投资和并购的金融数据和软件公司）等行业合作伙伴合作，构建这些集成，使这些代理能够尽可能强大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The last piece is we want to, again, build a really flexible platform that can be tailored and deployed very easily for our customers. That's why we've been spending a lot of time with industry partners like S&P, FactSet, PitchBook, to build these integrations so that these agents can be as powerful as possible.</p>
</details>

### 行业采纳与文化转变：BCI 的案例

**Alexander:** 所以我很好奇，采纳情况如何？谁在使用它？他们为什么对此感到兴奋？请给我们讲讲。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm curious. How has adoption been, right? Who's using this? Why are they excited about it? Walk us through that.</p>
</details>

**Nick:** 正如我之前提到的，我们确实看到整个行业都有采纳的迹象。我经常被问到，你在金融领域的哪些子垂直领域看到了 AI 的采纳？我认为这与子垂直领域关系不大，而更多地与我们客户所培养的文化有关。这需要高层鼓励和采纳以降低障碍，但也需要自下而上的实验文化，尝试所有这些工具，找出哪些是有效的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As I mentioned before, we're really seeing pockets of adoption across the entire industry. I'm often asked, you know, which sub-verticals do you see AI adoption in in finance? I think it's much less about sub-verticals, but much more about the culture that our customers have really engendered, right? Which requires a good combination of top-down encouragement and adoption to lower the barriers, but also a bottoms-up experimentation culture, right? To try all of these tools out there to figure out what makes sense.</p>
</details>

考虑到这一点，我认为我们看到强劲采纳的一些主要客户，例如 BCI，他们从根本上改变了工作方式。分析师会进行一种叫做 **comps analysis**（可比公司分析：一种估值方法，通过将目标公司与类似公司进行比较来确定其价值）的工作，这基本上意味着你比较所有这些不同公司的财务和运营指标，以确定它们的交易价值是否正确。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With that in mind, I think some of the main customers that we've seen strong adoption from, BCI, for example, they've sort of fundamentally transformed the way they work. There are these things called comps analysis that analysts do, which basically means you're comparing comps, financial and operational metrics for all of these different companies, to figure out whether they're trading at the right value.</p>
</details>

分析师通常在一个 Excel 表格中静态地完成这项工作，每周或每季度手动刷新。BCI 没有这样做，而是使用我们的 **Artifact**（Artifact feature：Anthropic 的一个功能，指由 Claude 生成的实时、交互式仪表板或输出，可连接到实时数据）功能直接连接到 S&P 和 FactSet 数据集，这样 Artifact 就成了一个实时仪表板，显示这些指标如何相互比较。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Analysts do this statically in one Excel sheet that they refresh manually every week, every quarter. Instead of doing that, BCI has instead used our Artifact feature to connect directly to S&P and FactSet data sets so that the artifact is a live dashboard of how these metrics compare against each other,</p>
</details>

只需一个简单的提示给 Claude，你就可以轻松更新它，这些 Artifact 还会与他们的董事总经理共享，他们也直接与这些平台进行交互。所以，我认为我们真正看到的不仅仅是工作效率的提升，更是工作方式的根本性转变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and with one simple prompt to Claude, you can easily update it, and these artifacts are also shared with their managing directors who are directly interfacing with these platforms as well. So I think we're really seeing not just acceleration of work, but a way for the work to actually be transformed.</p>
</details>

### AI 模型中的记忆系统及其重要性

**Alexander:** 记忆是人类存在于世界上的一个基本组成部分，对吧？你必须记住事情，比如你上次把钥匙放在哪里。我们是如何将这种记忆功能构建到我们的模型中的？为什么这对于金融服务很重要？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Memory is such an a fundamental piece of how humans basically exist in the world, right? You have to memorize things to, like, know where you put your keys last, for example. How are we building that into our models and why is that important for financial services?</p>
</details>

**Nick:** 正如我之前提到的，我们思考如何与客户合作的方式是，我们内部很少能为这些金融用例进行测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The way that we think about how we work with our customers, as I mentioned before, there's very little that we can internally test for these finance use cases.</p>
</details>

**Alexander:** 对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right.</p>
</details>

**Nick:** 再次强调，这需要与企业客户紧密合作，了解哪些地方有效，哪些地方无效。记忆系统对于让 Claude 理解并维持它所使用的所有这些不同工具和界面之间的上下文非常重要。Claude 存在于 Claude.ai、Excel、浏览器中，与 FactSet、S&P 交互，它能够理解模式，理解你希望 Claude 记住的 DCF 模板的偏好。所有这些都非常重要，以确保 Claude 保持一致，并通过与你的互动不断改进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is to, again, work really closely with enterprise customers to understand where things are working and where they're not, right? And memory systems is something that's really important to allow Claude to understand and maintain context across all of these different tools and surfaces that it works in. Claude is in Claude.ai, in Excel, in the browser, interacting with FactSet, S&P, the ability to understand patterns, understand preferences for that, you know, DCF template that you want Claude to remember. All of these things are really important to just make sure that Claude stays, and in turn, that continually gets better through its interactions with you.</p>
</details>

**Alexander:** 所以，随着时间的推移，你可以想象有人会提示模型说：“嘿，你这个公式有点不对。”然后 Claude 就会有某种方式来存储这个记忆，无论是文件系统还是隐式的，等等，这非常棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, like, over time, you can imagine someone prompting the model, like, "Hey, you got this formula slightly wrong," and then Claude has some way of storing that memory, whether it be a file system or it's implicit, et cetera, which is pretty awesome.</p>
</details>

**Nick:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Alexander:** 我对此很期待。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm excited for that.</p>
</details>

**Nick:** 或者，如果用户和分析师真的想使用 S&P 来进行特定的 **EBITDA**（Earnings Before Interest, Taxes, Depreciation, and Amortization：息税折旧摊销前利润，衡量公司整体财务业绩的指标）计算，Claude 也会记住这些偏好，就像一个优秀的实习生一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Or if, you know, the user and analyst really wants to use S&P for a specific piece of EBITDA calculation, Claude will actually remember those preferences too, just, like, you know, a good intern would.</p>
</details>

### Claude for Finance 的未来展望

**Alexander:** 酷。我们已经谈了很多关于 Claude for Finance 的事情。我很好奇，在你看来，我们的产品和研究组织接下来会如何发展，以使 Claude 在金融领域表现得更好？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cool. So we've talked a lot about Claude for Finance. I'm curious, in your opinion, what's next for our product and research orgs in relation to making Claude better for finance?</p>
</details>

**Nick:** 是的，退一步讲，Anthropic 是以企业为中心，企业优先的。我们为企业提供成果的唯一途径就是专注于特定的领域。金融是 Anthropic 在整个堆栈中最重要的领域之一：研究、产品和市场推广。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, you know, taking a step back, Anthropic is enterprise focused, enterprise first. The only way for us to deliver outcomes to the enterprise is to focus on specific domains. Finance is one of the most important domains for Anthropic across the entire stack. Research, product, and go to market.</p>
</details>

从研究开始，我们终于开始投资于金融领域的特定预训练和后训练。在产品方面，有三件事让我非常兴奋。一是更深入地研究特定的子垂直领域。私募股权的需求与对冲基金、保险公司和投资银行的需求截然不同。我们希望真正开始理解和揭示这些工作流程的细微差别，并确保我们正在构建的组件完全服务于这些工作流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Starting with research, we're finally starting to invest in both specific pre-training and post-training for finance. On the product side, three things I'm really excited about. One is going much deeper into specific sub-verticals. Private equity has very different needs from hedge funds and insurance firms and investment banks. We want to really start understanding and peeling back the nuances of those workflows and make sure that the components we're building fully serve those workflows.</p>
</details>

我们也很高兴能够让 Claude 无处不在，不仅仅在浏览器中，还在 Excel 和 PowerPoint 中。在 PowerPoint 和 Excel 方面，我认为我们仍然有很大的改进空间来提高这些输出的质量。所以，很高兴能再次与研究团队紧密合作，并将这些能力带入产品中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're also excited about the ability to have Claude everywhere, right? Not just in the browser, but within Excel, within PowerPoint. On PowerPoint and Excel, I think we still have a lot of room to improve the quality of those outputs. So, excited to work again really closely with research and bring these capabilities into the product.</p>
</details>

在合作方面，与行业紧密合作对我们来说非常重要。看到 MCP 服务器仅推出六个月，S&P 和 FactSet 等主要行业领导者就已经发布了功能强大、出色的 MCP 服务器版本，这非常令人鼓舞。我们希望继续将行业聚集在一起，包括我们最近发布的一些公告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the partnership side, it's really important for us to work closely with the industry. It's been really encouraging to see the fact that MCP servers have only been out for six months, and major industry leaders like S&P and FactSet have already published functional, great versions of their own MCP servers. We want to keep bringing the industry together, including some of the recent announcements we've made.</p>
</details>

最后一点是与我们的企业客户紧密合作。从根本上说，这就是我们合作的方式，对吧？将他们的需求转化为我们构建研究和产品能力以满足这些需求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The last piece is working really closely with our enterprise customers, right? Fundamentally, that's how we work together, right? To translate what their needs are and help us build the research and product capabilities to meet those needs.</p>
</details>

**Alexander:** 我绝对同意这一点，因为并非所有人都像你在 Anthropic 那样拥有金融服务背景。所以我觉得我们从深入合作的客户那里学到了最多，特别是当他们在设计 **evals**（evaluations：评估，客户定义的特定任务或问题，用于测试和改进 AI 模型在实际场景中的性能）时。这给了我们很多关于模型在生产中实际工作方式的信号，我认为这种程度的协作正是我们通过 Claude for Finance 所追求的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I definitely agree with that, because not everyone comes from a financial services background like you at Anthropic, and so I feel like we learn the most from the customers that we're going deep with, specifically when they're designing evals, for example. That gives us so much signal about how the model actually works in production, and I think that level of collaboration is what we're going after with Claude for Finance.</p>
</details>

**Nick:** 我认为这是我鼓励我们的企业客户思考的主要事情。你知道，evals 听起来像是一些神秘的概念，但它们其实很简单。它们是你关心并想要解决的任务和问题，以及对这些任务“好”是什么样子的明确阐述。对于企业客户来说，深思熟虑这些问题非常重要，而不是仅仅想着“哦，我需要将 AI 融入我业务的每一个部分”。这就是我们如何与企业客户紧密合作的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that's the main thing I would encourage our enterprise customers to think about. You know, evals sound like these mystical concepts, but they're really simple. They are tasks you care about and problems you wanna solve, and an articulation of what good looks like for those tasks. It's really important for enterprise customers to be thoughtful about these problems rather than thinking about, "Oh, I need to infuse AI into every part of my business," and that's how we can partner really closely with enterprise customers.</p>
</details>

我们将这些 evals 直接带入训练过程，直接带入产品管道，以便我们能够为客户提供这些能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We bring those evals directly into the training process, directly into the product pipeline, so that we can deliver these capabilities to our customers.</p>
</details>

**Alexander:** 100% 同意。非常感谢 Nick。这次谈话非常棒。我很感谢你抽出时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">100%. Well, thank you so much, Nick. This was fantastic. I appreciate you taking the time.</p>
</details>

**Nick:** 谢谢你邀请我，Alexander。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks for having me, Alexander.</p>
</details>