---
area: market-analysis
category: finance
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
date: '2025-11-05'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Alexander Bricken
- Nick Lin
products_models:
- Claude
- Claude 3
- Claude for Finance
- Claude for Enterprise
- Claude.ai
project:
- investment-strategy
- ai-impact-analysis
series: ''
source: https://www.youtube.com/watch?v=a8PmR-fNQ_0
speaker: Anthropic
status: evergreen
summary: Claude正在通过其先进的AI模型和代理能力，深刻改变金融服务行业。Anthropic的Claude for Finance产品旨在帮助金融分析师自动化繁琐的手动任务，如数据检索、大规模分析和报告创建，从而让他们能专注于更高价值的工作。该解决方案通过与S&P、FactSet等核心数据源集成，提供实时仪表板和精确的财务模型，并强调AI安全、可审计性和信任。未来，Anthropic计划深入特定金融子行业，并进一步提升Claude在Excel和PowerPoint等工具中的表现，以实现端到端的自主代理系统。
tags:
- ai-safety
- data
- enterprise-ai
- financial
- workflow-automation
title: Claude如何革新金融服务：Anthropic的AI解决方案
---

### Claude赋能金融分析：从静态到实时

分析师们通常以静态方式在Excel表格中完成工作，每周或每季度手动刷新数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Analysts do this statically in one Excel sheet that they refresh manually every week, every quarter.</p>
</details>

然而，**BCI**（一家投资管理公司）转而利用我们的**Artifact功能**（Claude中用于创建和管理实时仪表板及报告的工具），直接连接到**S&P**（标准普尔：一家提供金融市场数据和分析的公司）和**FactSet**（范德赛特：一家提供金融数据和软件的公司）的数据集。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Instead of doing that, BCI has instead used our Artifact feature to connect directly to S&P and FactSet data sets so that the artifact is a live dashboard of how these metrics compare against each other, and with one simple prompt to Claude, you can easily update it, and these artifacts are also shared with their managing directors who are directly interfacing with these platforms as well.</p>
</details>

这样一来，Artifact就成为了一个实时仪表板，能够展示这些指标之间的对比情况，并且只需一个简单的Claude提示，就能轻松更新。这些Artifact还会与他们的董事总经理共享，后者也直接与这些平台进行交互。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think we're really seeing not just acceleration of work, but a way for the work to actually be transformed.</p>
</details>

因此，我们看到的不只是工作效率的提升，更是工作方式的真正转型。

### 欢迎来到Claude for Finance

Alexander: 大家好，我叫Alexander Bricken，我负责领导我们金融服务领域的应用AI工程团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Hey, my name's Alexander Bricken, and I lead our applied AI Engineering team for Financial Services.</p>
</details>

今天，我们将与大家探讨Claude for Finance，我的同事Nick也加入了我们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today, we're gonna be talking to you about Claude for Finance, and I'm joined by my colleague Nick.</p>
</details>

Nick: 大家好，我叫Nick Lin，我负责Claude金融服务产品线的产品领导工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Hey, my name is Nick Lin, and I lead product for Claude for Financial Services.</p>
</details>

我曾是一名投资银行家和私募股权投资者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm also a recovering investment banker and private equity investor.</p>
</details>

我们即将讨论的许多问题都与我息息相关，所以我非常兴奋，Alexander。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A lot of these problems we're about to talk about are very near and dear to my heart, so I'm very excited, Alexander.</p>
</details>

Alexander: 太棒了。Nick，我的第一个问题是，您如何看待当前金融服务领域AI格局的变化？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Awesome. So, Nick, my first question for you is how do you feel about the shift in the AI landscape for financial services these days?</p>
</details>

Nick: 我在Anthropic工作了一年半多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- You know, I've been with Anthropic for a little bit over a year and a half now.</p>
</details>

那是在Claude 3发布之前，所以我认为企业AI格局，尤其是在过去几个月里，已经发生了显著变化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That was before Claude 3, so I think the enterprise AI landscape has changed significantly, especially in the past few months.</p>
</details>

我真正注意到的是，人们正在从旁观和好奇，转向实际开始构建和部署生产系统，这是一种根本性的转变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What I am really noticing is that there is a fundamental shift from curiosity, observing from the sidelines, to actually starting to build and deploy into production.</p>
</details>

众所周知，编程是AI领域最早实现强大产品市场契合度的产品和领域之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, as we all know, coding is one of the first products and first domains within AI with really strong product-market fit.</p>
</details>

我认为我们开始看到这种趋势真正扩展到其他垂直领域，包括金融。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think we're starting to see this really extend to other verticals as well, including finance.</p>
</details>

例如，**NBIM**（挪威主权财富基金：全球最大的主权财富基金之一），我们最大的客户之一，拥有大约9000家投资组合公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example, NBIM or the Norwegian Sovereign Wealth Fund, one of our largest customers, they have about 9,000 portfolio companies.</p>
</details>

他们已经利用**模型上下文协议**（Model Context Protocol, **MCP**: 一种允许AI模型与外部系统和数据源进行交互的框架）等工具自行构建了集成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What they've done is they've built integrations on their own with things like model context protocol, so that all of their portfolio managers are querying these integrations every single day to get insights into their PortCos.</p>
</details>

这样一来，他们所有的投资组合经理每天都在查询这些集成，以获取其**投资组合公司**（PortCos: Portfolio Companies，即被投资的公司）的洞察。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think we're really starting to see analysts spend a lot less time on the mundane, manual, tedious parts of the work, and start to focus on what they really care about, you know, which is building relationships, meeting with their customers, and actually understanding the business models of the companies they're investing in.</p>
</details>

因此，我认为我们正开始看到分析师们将大量时间从日常、手动、繁琐的工作中解放出来，转而专注于他们真正关心的事情，比如建立关系、与客户会面，以及真正理解他们所投资公司的商业模式。

Alexander: 是的，作为一名应用AI从业者，这确实引起了我的共鸣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yeah, that really resonates from my standpoint as well as an applied AI person.</p>
</details>

去年，当我与客户互动时，很多时候他们会从构建AI聊天功能开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whenever I go and interact with customers, a lot of the time, last year, let's say, they would start with building an AI chat feature.</p>
</details>

他们会有一堆模型可供选择，然后他们会选择一个，也许是一个随机的业务用户，然后尝试使用它并与之聊天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like, they'd have a bunch of models represented, and they would select one, maybe a random business user, and they would try to work with it and just chat with it.</p>
</details>

现在，我们已经看到了像MCP这样的工具出现，聊天功能变得更加强大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Eventually, now, we've seen things like MCP come out where the chat has become so much more powerful.</p>
</details>

您可以与您关心的系统进行交互，我认为这对于金融领域来说尤其令人兴奋，因为通常有太多的产品界面需要人们去交互。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can interact with the systems you care about, and I think that's really exciting specifically for finance because, often, there are just so many product surfaces that folks have to interact with.</p>
</details>

Nick: 100%同意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- 100%.</p>
</details>

Alexander: 如果你现在给一个模型一个工具，通常模型足够智能，能够根据工具描述和工具名称知道这个工具的功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- If you give a model a tool these days, often, the model's intelligent enough to know what that tool does given the tool description and the tool name, but equally, the model has certain primitives baked into it, like the security that we try to bake into the way the model interacts with the world.</p>
</details>

但同样，模型也内置了某些基本功能，比如我们试图融入模型与世界交互方式中的安全性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we train our models to be helpful, harmless, and honest, and often, that's a reflection of the data that they interpret and the output that it basically corresponds to.</p>
</details>

因此，我们训练我们的模型要做到有益、无害和诚实，这通常反映了它们解释的数据以及与之对应的输出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think that's probably what you're referring to as well in that, like, the model is generally intelligent, and so if you give it these different layers, you can really see some cool results.</p>
</details>

所以我想这可能也是您所指的，模型通常是智能的，如果您给它这些不同的层，您会看到一些很棒的结果。

Nick: 您提到了安全性，这对我们所做的一切都至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- You know, safety is something that you touched upon. That is so foundational to everything we do.</p>
</details>

Alexander: 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yeah.</p>
</details>

Nick: 这关乎将这些解决方案安全地部署到企业环境中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- It's about securely deploying these solutions into enterprise environments.</p>
</details>

这关乎确保模型能够准确回答问题，并对这些问题有正确的理解水平和保真度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's about making sure that the models can accurately answer the questions with the right level of understanding of those problems and fidelity, and third is actually giving our users the trust, the verification, the auditability to understand these results.</p>
</details>

第三，是真正给予用户信任、验证和可审计性，以理解这些结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think we think about all three of those components of safety.</p>
</details>

所以，我认为我们考虑了安全性的所有这三个组成部分。

### 从研究到产品：Claude在金融领域的独特优势

Alexander: 是的，说到这一点，Anthropic的创立原则就是AI安全。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yeah, I mean, speaking of, right? Anthropic was founded on the principles of AI safety.</p>
</details>

它从一开始就是一个研究机构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was a research org from scratch.</p>
</details>

我很好奇，我们是如何从一个研究机构发展成为在金融服务领域发布杰出产品的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm curious. How have we gone from being a research org to releasing a distinguished product in financial services?</p>
</details>

Nick: 在我看来，Anthropic真正致力于构建能够安全部署的模型，以解决世界上最复杂和最困难的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- In my mind, Anthropic really aims at building models that can be safely deployed to solve the most complex and difficult problems in the world, right?</p>
</details>

在代码方面，我们是业内领先的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're state-of-the-art when it comes to code.</p>
</details>

全球只有0.5%的人口是软件工程师，所以这只是我们真正可以开始解决的这些复杂而困难问题的一小部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">0.5% of the world's population are software engineers, so that is just one sliver of these really complex, difficult problems we can really start solving, right?</p>
</details>

这些问题确实存在于世界的其他各个角落。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They really exist everywhere else in the world.</p>
</details>

代码对于公司的每一个部分都至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Code is so foundational to every single part of a company, right?</p>
</details>

它决定了公司的运作方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is how a company is run.</p>
</details>

这意味着Claude非常擅长与更复杂的系统交互，能够展示其思维和逻辑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that means that Claude is really great at interacting with more complex systems, being able to expose its thinking and its logic, and that's why it's great at finance as well, right?</p>
</details>

这就是为什么它在金融领域也表现出色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Finance are complex problems deployed into regulated verticals that need verification, auditability, and ultimately, accuracy really matters.</p>
</details>

金融领域的问题复杂，部署在受监管的垂直行业中，需要验证、可审计性，最终，准确性至关重要。

Alexander: 如今的金融分析师花费大量时间，力求在PowerPoint演示文稿或Excel模型中达到像素级的完美。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Financial analysts these days spend a lot of time getting down to, like, the pixel perfect level of let's say a PowerPoint deck or an Excel model, right?</p>
</details>

你不能有任何错误。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can't get anything wrong, and it's funny, now that we're in this paradigm where models can do something similar, but using the capabilities they have to write really structured logic, and so that's actually what we've found language models to be good at, what we've trained them on, and that ability to do that, it feels like it's just being abstracted into so many other domains, like creating Excel spreadsheets or like creating PowerPoints, and so, yeah, it's just been, like, super just kind of striking, at least to me, to see how many domains the logic and reasoning of these models actually ends up touching.</p>
</details>

有趣的是，现在我们处于这样一个范式中，模型可以做类似的事情，但它们利用自身能力编写结构化逻辑，这正是我们发现语言模型擅长的地方，也是我们训练它们的地方。这种能力似乎正被抽象到许多其他领域，比如创建Excel电子表格或PowerPoint演示文稿。所以，至少对我来说，看到这些模型的逻辑和推理最终触及如此多的领域，真是令人惊叹。

Nick: 归根结底，这些都是我们每天都在交互的数字系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Ultimately, these are digital systems that we interact with every single day, right?</p>
</details>

Claude擅长代码这一事实，赋予了它一项灵活的技能和捷径，去完成所有这些非常酷、有趣的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The fact that Claude is great at code gives it a flexible skill and a shortcut to do all of these really cool, interesting things, right?</p>
</details>

我们几周前推出的文件创建功能，使Claude能够创建Excel文档和PowerPoint，本质上是Claude访问了一个虚拟机，它可以在其中大规模运行Python代码，以编辑、分析和创建Excel文档，并创建这些完美的**DCF模型**（Discounted Cash Flow models: 贴现现金流模型，一种用于估算投资价值的财务模型），我认为这让我们非常兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our file creation feature that was launched a few weeks ago that enables Claude to create Excel documents and PowerPoint is essentially Claude accessing a virtual machine within which it can run Python code at scale to edit, analyze, and create Excel documents and create these perfect DCF models, which I think is super exciting for us, right?</p>
</details>

所以，我认为代码可以真正解锁许多其他领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think there's a lot of other domains that code can start really unlocking.</p>
</details>

### Claude for Finance：检索、分析与创建

Alexander: Claude for Finance与市场上其他金融服务产品有何不同？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- What's different to Claude for Finance versus other products on the market in financial services?</p>
</details>

Nick: 我经常思考三个动词，它们指导着我为Claude for Finance构建产品：检索（retrieve）、分析（analyze）和创建（create）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- You know, there are three verbs I think about a lot that governs what I want to build for Claude for Finance, and these are retrieve, analyze, and create.</p>
</details>

从检索开始，市场上许多研究代理已经相当成熟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Starting with retrieval, many of the research agents on the market has seen, you know, quite a lot of maturity, right?</p>
</details>

大型语言模型非常擅长深入挖掘大量数据池并收集洞察，阅读速度可能比人类快5000倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Large language models are fantastic at digging into large pools of data and gathering insights, and can read, you know, 5,000 probably times faster than humans, but what we want to do with finance is making sure that these systems can connect to all of the core data sources that finance analysts work in.</p>
</details>

但我们希望在金融领域做的是，确保这些系统能够连接到金融分析师工作中的所有核心数据源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In finance, the ability to uncover insights faster than your competitors and your peers, that's a really key advantage.</p>
</details>

在金融领域，比竞争对手和同行更快地发现洞察，这是一个非常关键的优势。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, downstream from that, it's great that we can retrieve this information and connect to it, but the ability to do analysis at scale, either through code or through spreadsheets, is so foundational as well.</p>
</details>

接下来，我们能够检索这些信息并与之连接固然很好，但通过代码或电子表格进行大规模分析的能力同样至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Financial models themselves, they're not just these beautiful Excel sheets, right?</p>
</details>

财务模型本身不仅仅是漂亮的Excel表格。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They're a way for finance analysts to inject their own judgment of what the future looks like and what the proper valuation looks like for that company, right?</p>
</details>

它们是金融分析师注入自己对未来和公司适当估值判断的一种方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, with that in mind, we want Claude to be really good at understanding these core finance concepts and manipulate systems like Excel and spreadsheets to be able to do that calculation.</p>
</details>

因此，考虑到这一点，我们希望Claude非常擅长理解这些核心金融概念，并能够操作Excel和电子表格等系统进行计算。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the third part is creation, right?</p>
</details>

第三部分是创建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're all social creatures within the enterprise, right?</p>
</details>

在企业中，我们都是社会性动物。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We do our work to be shared with others, so the outputs themselves in the form of spreadsheets, you know, PowerPoint documents, Word, doing this in a way that is client-ready, boardroom-ready, is really important.</p>
</details>

我们工作是为了与他人分享，所以以电子表格、PowerPoint文档、Word等形式呈现的输出，以一种客户就绪、会议室就绪的方式完成，这非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we really want to start pushing Claude's capabilities to be able to do that as well so that it is an end-to-end agentic autonomous system.</p>
</details>

因此，我们真的希望开始推动Claude的能力，使其也能做到这一点，从而成为一个端到端的自主代理系统。

Alexander: 这很有道理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- That makes a lot of sense.</p>
</details>

我觉得我们构建了这些基本功能，然后它们几乎会像滚雪球一样发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I feel like we build these primitives and then they almost end up snowballing.</p>
</details>

所以，你有了检索步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you have, like, the retrieval step, right?</p>
</details>

你构建了一个MCP服务器来连接到一个系统，但如果你从那个系统获取数据，它可能会以独特的方式连接到其他系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You build an MCP server to connect to one system, but then if you take the data from that system, maybe it connects to some other system in a unique way.</p>
</details>

比如，你从**Snowflake**（一家云数据仓库公司）获取数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like, you get data from Snowflake, let's say.</p>
</details>

你在其中找到一个ID，需要将其连接到你的**Salesforce**（一家客户关系管理软件公司）实例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You find an ID in there and you need to connect it to your Salesforce instance.</p>
</details>

通过我们在检索方面构建的一些基本功能，你可以轻松做到这一点，但它会继续滚雪球。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can easily do that with some of those primitives that we've built on the retrieval side, but then it sort of continues to snowball.</p>
</details>

你会得到分析结果，Claude可以编写大量代码，并实质上将一些信息整合起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You get analysis where Claude can write a bunch of code and essentially piece together some of that information, and then finally the creation is even take that one step further and put it into the environment that someone cares about, sending that post request, back to the API example, to a system where an analyst or an operator can see the information that Claude has reasoned through.</p>
</details>

最后，创建功能甚至更进一步，将其放入用户关心的环境中，将该POST请求（回到API示例）发送到一个系统，让分析师或操作员能够看到Claude推理出的信息。

### Claude for Finance的三个核心层面

Nick: 那么，我们来详细谈谈Claude for Finance到底是什么？它是如何运作的？它有什么特别之处？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So let's talk a little bit more about what is actually Claude for Finance? How does it work? What makes it so special?</p>
</details>

我们的解决方案包含三个层面：模型、代理能力和平台。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there are three layers that we think about in our solution. The models, the agentic capabilities, and the platform, starting with the models themselves.</p>
</details>

首先是模型本身。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Fundamentally, we are a research lab, right?</p>
</details>

从根本上说，我们是一个研究实验室。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Everything we do really aims at making Claude the best model for financial services.</p>
</details>

我们所做的一切都旨在使Claude成为金融服务领域的最佳模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, finance presents some interesting challenges to us, right?</p>
</details>

现在，金融领域给我们带来了一些有趣的挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Code is something that we can test every single day as software engineers and product managers, but there are very few investment bankers within these four walls of Anthropic.</p>
</details>

作为软件工程师和产品经理，我们每天都可以测试代码，但在Anthropic内部，投资银行家却寥寥无几。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here's where we're really excited to work with early customers like BCI, Perella Weinberg, and NBIM, to really let us know, what are the use cases they really care about?</p>
</details>

因此，我们非常高兴能与**BCI**、**Perella Weinberg**（一家精品投资银行）和**NBIM**等早期客户合作，让他们真正告诉我们，他们真正关心的用例是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What does good look like?</p>
</details>

“好”是什么样子？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then help us, much more importantly, uncover those gaps that we can bring back into the research process.</p>
</details>

更重要的是，帮助我们发现那些我们可以带回研究过程中的不足。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second thing is on the product side, right?</p>
</details>

第二点是产品方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Agentic capabilities are essentially the code that we write to enable users to interact with the models.</p>
</details>

代理能力本质上是我们编写的代码，用于使用户能够与模型进行交互。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've built capabilities like deep research.</p>
</details>

我们已经构建了深度研究等功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, we're really investing in being able to embed Claude in all of the core surfaces you work in, not just Claude for Enterprise or Claude.ai but also the browser extension, Excel, Chrome, and other surfaces that our analysts and enterprise customers work with every single day.</p>
</details>

现在，我们正大力投入，将Claude嵌入到您工作的所有核心界面中，不仅仅是Claude for Enterprise或Claude.ai，还包括浏览器扩展、Excel、Chrome以及我们的分析师和企业客户每天使用的其他界面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The last piece is we want to, again, build a really flexible platform that can be tailored and deployed very easily for our customers.</p>
</details>

最后一点是，我们希望再次构建一个非常灵活的平台，可以为我们的客户轻松定制和部署。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's why we've been spending a lot of time with industry partners like S&P, FactSet, PitchBook, to build these integrations so that these agents can be as powerful as possible.</p>
</details>

这就是为什么我们花费大量时间与**S&P**、**FactSet**、**PitchBook**（一家提供私募市场数据和分析的公司）等行业合作伙伴合作，构建这些集成，使这些代理能够尽可能强大。

### 采用情况与文化转型

Alexander: 所以我很好奇，采用情况如何？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So I'm curious. How has adoption been, right?</p>
</details>

谁在使用它？他们为什么对此感到兴奋？请给我们讲讲。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Who's using this? Why are they excited about it? Walk us through that.</p>
</details>

Nick: 正如我之前提到的，我们确实看到整个行业都在不同领域有所采用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- As I mentioned before, we're really seeing pockets of adoption across the entire industry.</p>
</details>

我经常被问到，您在金融领域的哪些子垂直行业看到了AI的采用？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm often asked, you know, which sub-verticals do you see AI adoption in in finance?</p>
</details>

我认为这更多地与客户所培养的企业文化有关，而不是子垂直行业。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's much less about sub-verticals, but much more about the culture that our customers have really engendered, right?</p>
</details>

这需要自上而下的鼓励和采用，以降低障碍，同时也需要自下而上的实验文化，去尝试所有这些工具，找出哪些是有效的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Which requires a good combination of top-down encouragement and adoption to lower the barriers, but also a bottoms-up experimentation culture, right?</p>
</details>

考虑到这一点，我认为我们看到强劲采用的一些主要客户，例如**BCI**，他们从根本上改变了工作方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To try all of these tools out there to figure out what makes sense. With that in mind, I think some of the main customers that we've seen strong adoption from, BCI, for example, they've sort of fundamentally transformed the way they work.</p>
</details>

分析师们会进行**可比公司分析**（comps analysis: 一种通过比较类似公司的财务和运营指标来评估公司价值的方法），这基本上意味着您正在比较所有这些不同公司的财务和运营指标，以确定它们的交易价值是否合理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are these things called comps analysis that analysts do, which basically means you're comparing comps, financial and operational metrics for all of these different companies, to figure out whether they're trading at the right value.</p>
</details>

分析师们通常以静态方式在Excel表格中完成这项工作，每周或每季度手动刷新数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Analysts do this statically in one Excel sheet that they refresh manually every week, every quarter.</p>
</details>

**BCI**没有这样做，而是使用了我们的**Artifact功能**，直接连接到**S&P**和**FactSet**的数据集。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Instead of doing that, BCI has instead used our Artifact feature to connect directly to S&P and FactSet data sets so that the artifact is a live dashboard of how these metrics compare against each other, and with one simple prompt to Claude, you can easily update it, and these artifacts are also shared with their managing directors who are directly interfacing with these platforms as well.</p>
</details>

这样一来，Artifact就成为了一个实时仪表板，能够展示这些指标之间的对比情况，并且只需一个简单的Claude提示，就能轻松更新。这些Artifact还会与他们的董事总经理共享，后者也直接与这些平台进行交互。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think we're really seeing not just acceleration of work, but a way for the work to actually be transformed.</p>
</details>

因此，我们看到的不只是工作效率的提升，更是工作方式的真正转型。

### AI模型的记忆能力及其重要性

Alexander: 记忆是人类存在于世界上的一个基本组成部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Memory is such an a fundamental piece of how humans basically exist in the world, right?</p>
</details>

你必须记住事情，比如你上次把钥匙放在哪里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You have to memorize things to, like, know where you put your keys last, for example.</p>
</details>

我们如何将这种能力构建到我们的模型中？为什么它对金融服务很重要？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How are we building that into our models and why is that important for financial services?</p>
</details>

Nick: 正如我之前提到的，我们思考如何与客户合作的方式是，我们内部能够测试的金融用例非常少。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- The way that we think about how we work with our customers, as I mentioned before, there's very little that we can internally test for these finance use cases.</p>
</details>

Alexander: 对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Right.</p>
</details>

Nick: 再次强调，就是要与企业客户紧密合作，了解哪些地方有效，哪些地方无效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Is to, again, work really closely with enterprise customers to understand where things are working and where they're not, right?</p>
</details>

记忆系统非常重要，它能让Claude理解并维护其在所有这些不同工具和界面中工作的上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And memory systems is something that's really important to allow Claude to understand and maintain context across all of these different tools and surfaces that it works in.</p>
</details>

Claude存在于Claude.ai、Excel、浏览器中，与FactSet、S&P交互，它能够理解模式，理解您希望Claude记住的**DCF模板**（Discounted Cash Flow template: 贴现现金流模型的标准格式）的偏好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude is in Claude.ai, in Excel, in the browser, interacting with FactSet, S&P, the ability to understand patterns, understand preferences for that, you know, DCF template that you want Claude to remember.</p>
</details>

所有这些都非常重要，以确保Claude能够持续存在，并通过与您的互动不断变得更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All of these things are really important to just make sure that Claude stays, and in turn, that continually gets better through its interactions with you.</p>
</details>

Alexander: 所以，随着时间的推移，你可以想象有人提示模型说：“嘿，你这个公式有点不对。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- And so, like, over time, you can imagine someone prompting the model, like, "Hey, you got this formula slightly wrong," and then Claude has some way of storing that memory, whether it be a file system or it's implicit, et cetera, which is pretty awesome.</p>
</details>

然后Claude会有某种方式存储这个记忆，无论是通过文件系统还是隐式存储，等等，这非常棒。

Nick: 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yeah.</p>
</details>

Alexander: 我对此很期待。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I'm excited for that.</p>
</details>

Nick: 或者，如果用户和分析师真的想用**S&P**来计算特定的**EBITDA**（Earnings Before Interest, Taxes, Depreciation, and Amortization: 息税折旧摊销前利润）部分，Claude也会记住这些偏好，就像一个优秀的实习生一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Or if, you know, the user and analyst really wants to use S&P for a specific piece of EBITDA calculation, Claude will actually remember those preferences too, just, like, you know, a good intern would.</p>
</details>

### Claude for Finance的未来展望

Alexander: 好的。我们已经谈了很多关于Claude for Finance的话题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Cool. So we've talked a lot about Claude for Finance.</p>
</details>

我很好奇，在您看来，我们的产品和研究机构在使Claude更好地服务于金融领域方面，下一步是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm curious, in your opinion, what's next for our product and research orgs in relation to making Claude better for finance?</p>
</details>

Nick: 是的，退一步讲，Anthropic是以企业为中心，企业优先的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yeah, you know, taking a step back, Anthropic is enterprise focused, enterprise first.</p>
</details>

我们为企业提供成果的唯一途径是专注于特定领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The only way for us to deliver outcomes to the enterprise is to focus on specific domains.</p>
</details>

金融是Anthropic在整个堆栈中最重要的领域之一：研究、产品和市场推广。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Finance is one of the most important domains for Anthropic across the entire stack. Research, product, and go to market.</p>
</details>

从研究开始，我们终于开始投入到金融领域的特定预训练和后训练中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Starting with research, we're finally starting to invest in both specific pre-training and post-training for finance.</p>
</details>

在产品方面，有三件事让我非常兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the product side, three things I'm really excited about.</p>
</details>

第一是更深入地进入特定的子垂直行业。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One is going much deeper into specific sub-verticals.</p>
</details>

私募股权的需求与对冲基金、保险公司和投资银行的需求非常不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Private equity has very different needs from hedge funds and insurance firms and investment banks.</p>
</details>

我们希望真正开始理解并揭示这些工作流程的细微差别，并确保我们正在构建的组件能够完全服务于这些工作流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We want to really start understanding and peeling back the nuances of those workflows and make sure that the components we're building fully serve those workflows.</p>
</details>

我们还对Claude无处不在的能力感到兴奋，不仅仅是在浏览器中，而是在Excel、PowerPoint中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're also excited about the ability to have Claude everywhere, right? Not just in the browser, but within Excel, within PowerPoint.</p>
</details>

在PowerPoint和Excel方面，我认为我们仍有很大的改进空间来提高这些输出的质量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On PowerPoint and Excel, I think we still have a lot of room to improve the quality of those outputs.</p>
</details>

因此，我们很高兴能再次与研究团队紧密合作，将这些能力融入产品中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, excited to work again really closely with research and bring these capabilities into the product.</p>
</details>

在合作方面，与行业紧密合作对我们来说非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the partnership side, it's really important for us to work closely with the industry.</p>
</details>

令人非常鼓舞的是，MCP服务器推出仅六个月，**S&P**和**FactSet**等主要行业领导者就已经发布了功能强大且出色的自有MCP服务器版本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's been really encouraging to see the fact that MCP servers have only been out for six months, and major industry leaders like S&P and FactSet have already published functional, great versions of their own MCP servers.</p>
</details>

我们希望继续将行业团结起来，包括我们最近发布的一些公告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We want to keep bringing the industry together, including some of the recent announcements we've made.</p>
</details>

最后一点是与我们的企业客户紧密合作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The last piece is working really closely with our enterprise customers, right?</p>
</details>

从根本上说，这就是我们合作的方式，将他们的需求转化为研究和产品能力，以满足这些需求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Fundamentally, that's how we work together, right? To translate what their needs are and help us build the research and product capabilities to meet those needs.</p>
</details>

Alexander: 我完全同意这一点，因为并非所有人都像您在Anthropic一样拥有金融服务背景。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I definitely agree with that, because not everyone comes from a financial services background like you at Anthropic, and so I feel like we learn the most from the customers that we're going deep with, specifically when they're designing evals, for example.</p>
</details>

所以我觉得我们从深入合作的客户那里学到最多，特别是当他们在设计**评估**（evals: Evaluations，指用于衡量AI模型性能和行为的任务或测试）时。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That gives us so much signal about how the model actually works in production, and I think that level of collaboration is what we're going after with Claude for Finance.</p>
</details>

这为我们提供了关于模型在生产环境中实际运作方式的大量信号，我认为这种程度的合作正是我们通过Claude for Finance所追求的。

Nick: 我认为这是我鼓励我们的企业客户思考的主要问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I think that's the main thing I would encourage our enterprise customers to think about.</p>
</details>

您知道，评估听起来像是神秘的概念，但它们实际上很简单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, evals sound like these mystical concepts, but they're really simple.</p>
</details>

它们是您关心并希望解决的任务和问题，以及对这些任务“好”的明确定义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They are tasks you care about and problems you wanna solve, and an articulation of what good looks like for those tasks.</p>
</details>

对于企业客户来说，深思熟虑这些问题非常重要，而不是仅仅想着“哦，我需要将AI融入我业务的每个部分”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's really important for enterprise customers to be thoughtful about these problems rather than thinking about, "Oh, I need to infuse AI into every part of my business," and that's how we can partner really closely with enterprise customers.</p>
</details>

这就是我们如何与企业客户紧密合作的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We bring those evals directly into the training process, directly into the product pipeline, so that we can deliver these capabilities to our customers.</p>
</details>

我们将这些评估直接引入训练过程，直接引入产品管线，以便我们能够为客户提供这些能力。

Alexander: 100%同意。非常感谢您，Nick。这太棒了。感谢您抽出时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- 100%. Well, thank you so much, Nick. This was fantastic. I appreciate you taking the time.</p>
</details>

Nick: 谢谢您的邀请，Alexander。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Thanks for having me, Alexander.</p>
</details>