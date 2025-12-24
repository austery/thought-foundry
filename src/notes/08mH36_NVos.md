---
area: tech-engineering
category: ai-ml
companies_orgs:
- BlackRock
date: '2025-08-23'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Infant Vasanth
- Vaibhav Page
products_models: []
project:
- ai-impact-analysis
- knowledge-pipeline
series: ''
source: https://www.youtube.com/watch?v=08mH36_NVos
speaker: AI Engineer
status: evergreen
summary: 贝莱德的Infant Vasanth和Vaibhav Page分享了公司如何为投资运营团队构建和扩展定制化AI知识应用。他们详细阐述了文档提取、复杂工作流、问答系统和智能体系统这四类应用，并以新证券发行设置为例，说明了现有流程的复杂性。演讲重点讨论了大规模构建AI应用面临的三大挑战：提示工程、LLM策略选择和部署。为应对这些挑战，贝莱德开发了一个包含“沙盒”和“应用工厂”的框架，将应用开发时间从数月缩短到几天，并强调了在高度监管的金融环境中“人机协作”的重要性。
tags:
- ai-application
- code
- financial
- knowledge-management
- strategy
title: 贝莱德如何大规模构建定制化AI知识应用
---

### 贝莱德的AI应用规模化之路

大家好，感谢邀请我们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi everyone, thank you for having us.</p>
</details>

我是Infant，贝莱德的工程总监，这位是我的同事Vaibhav，首席工程师，我们都在贝莱德的数据团队工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm Infant, director of engineering at BlackRock. This is my colleague Wyber, principal engineer and we both work for the data teams at BlackRock.</p>
</details>

今天我们将讨论如何在贝莱德大规模构建定制化应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And today we're going to talk about how we can scale building custom applications in BlackRock.</p>
</details>

具体来说，我们谈论的是贝莱德的AI应用和知识应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Specifically, we're talking about like AI applications and knowledge apps at BlackRock, right?</p>
</details>

在深入细节之前，我们先统一一下背景信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, just to level set before I get into the uh details.</p>
</details>

贝莱德是一家**资产管理公司**（Asset Management Firm: 专门管理客户投资组合的金融机构），是全球最大的资产管理公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, BlackRock is an asset management firm, the world's largest asset manager.</p>
</details>

我们的**投资组合经理**（Portfolio Managers: 负责管理投资组合以实现特定投资目标的专业人士）和分析师每天都会收到大量信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What we do is our portfolio managers, analysts get a torrent of information on a daily basis.</p>
</details>

他们综合这些信息，制定投资策略，然后重新平衡您的投资组合，最终促成特定的交易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They synthesize this information, they develop an investment strategy and then they rebalance your portfolios uh which ultimately results in a particular trade.</p>
</details>

**投资运营团队**（Investment Operations Teams: 负责确保投资管理公司日常交易和后台流程顺利运行的团队）可以被视为确保投资经理日常所有活动顺利进行的支柱或引擎。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the investment operations teams you can think of that as the teams that are the backbone or the engine that makes sure that all of the activities that the investment managers actually perform on a day-to-day basis like runs smoothly right.</p>
</details>

因此，这些团队负责获取所需数据，执行交易，进行合规审查，以及所有交易后活动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these teams are kind of responsible for like acquiring the data that you kind of need right uh to actually executing a trade running through compliance all the way to like all of the post- trading activities right.</p>
</details>

所有这些团队都必须为各自领域构建内部工具，这些工具实际上相当复杂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So all of these teams actually have to build these internal tools that are actually fairly complex for each of their domains.</p>
</details>

因此，快速构建和推出这些应用对我们来说至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? So building apps and pushing out these apps uh relatively quickly is like of utmost important to us.</p>
</details>

### AI应用的不同类型

如果我们对所讨论的应用进行分类，您会发现它们大致分为四类。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? So if you move on to the next slide again if you actually classify what kind of apps we are talking about what you'll see is that it kind of falls into like four different buckets right?</p>
</details>

第一类是与**文档提取**（Document Extraction: 从非结构化或半结构化文档中识别并提取特定信息的过程）相关的一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One is everything to do with document extraction.</p>
</details>

例如，我有一个应用，想要从中提取实体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I have an app I kind of want to like extract entities out of it in that bucket.</p>
</details>

第二类是定义复杂的**工作流**（Workflow: 一系列按特定顺序执行的任务或步骤）或自动化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Second has to do everything with like hey I kind of want to define a complex uh workflow or an automation.</p>
</details>

我可能需要执行X个步骤，然后与我的下游系统集成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I could have a case where I kind of want to run through X number of steps and then integrate to my downstream systems.</p>
</details>

然后是常见的**问答系统**（Q&A Systems: 能够理解并回答用户问题的系统），也就是聊天界面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you have the normal like Q&A type systems that you look at like this is your chat interfaces.</p>
</details>

最后是**智能体系统**（Agentic Systems: 能够自主执行复杂任务、做出决策并与环境互动的AI系统）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And finally like the the agentic systems right.</p>
</details>

在这些领域中，我们看到了利用模型和**大型语言模型**（LLMs: Large Language Models: 具有数亿甚至数万亿参数的深度学习模型，能够理解、生成和处理人类语言）的巨大机会，以增强或“超充”我们现有的系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in each of these domains what we see is u we have this like big opportunity to leverage your models and LLMs to either augment our existing systems uh or like kind of like supercharge those right.</p>
</details>

这就是我们正在讨论的领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that that is like the domain we are speaking about.</p>
</details>

### 新证券发行运营案例分析

我将快速转向一个具体的用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'll move quickly to one particular use case.</p>
</details>

这是一个大约三到四个月前提出的用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this this is a use case that came to us like about like 3 to 4 months back right.</p>
</details>

在投资运营领域，我们有一个团队叫做**新发行运营团队**（New Issue Operations Team: 负责处理新发行证券的设置和管理，确保其在内部系统中的准确记录）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we have a team within the investment operations space it's known as a new issue operations team right.</p>
</details>

这个团队负责在市场事件发生时设置证券。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this team is kind of responsible for setting up securities uh whenever there is like a market event right.</p>
</details>

例如，一家公司**首次公开募股**（IPO: Initial Public Offering: 公司首次向公众出售股票），或者某个组织发生**股票拆分**（Stock Split: 公司将其现有股票拆分成多股，增加流通股数量，降低每股价格）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a company goes IPO or like there is like a stock split for a particular organization right.</p>
</details>

该团队必须获取证券并在我们的内部系统中进行设置，然后我们的投资组合经理或交易员才能对其进行操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The team actually has to take the security and they have to set it up in our internal systems before our portfolio managers or traders can action upon it, right?</p>
</details>

因此，我们必须为投资运营团队构建这个工具，以设置特定的证券。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we kind of have to build this tool for the investment operations team, right? To set up a particular security.</p>
</details>

老实说，这只是实际情况的一个超级简化版本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is like actually honestly this is like a super simplified version of what happens.</p>
</details>

但在一个非常高的层面，我们必须构建一个应用，能够摄取**招股说明书**（Prospectus: 详细说明公司业务、财务状况和证券发行条款的法律文件）或**条款清单**（Term Sheet: 概述商业交易主要条款和条件的非约束性文件）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But a super high level, we have to build an app that is able to like ingest your prospectors or a term sheet.</p>
</details>

它会通过一个特定的**管道**（Pipeline: 一系列相互连接的处理阶段，数据在其中流动并被转换）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It pushes it through a particular pipeline, right?</p>
</details>

然后，您会与领域专家（例如您的业务团队、股票团队、**ETF**（Exchange Traded Fund: 交易型开放式指数基金）团队等）进行交流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">U then you talk to your domain experts and these are like your business teams, your equity teams, ETF teams, etc.</p>
</details>

他们知道如何设置这些复杂的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They actually know how to set up these complex instruments.</p>
</details>

您会得到某种结构化输出，然后该团队与工程团队合作，实际构建这种**转换逻辑**（Transformation Logic: 将数据从一种格式或结构转换为另一种格式或结构的规则和算法），并将其与您的下游应用集成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You get some kind of structured output and now that team works with the engineering teams to actually build this transformation logic and the like and then integrate it with your downstream applications.</p>
</details>

所以您可以看到，这个过程实际上需要很长时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can see that this process actually takes a long time, right?</p>
</details>

构建一个应用，然后引入新的模型提供商，尝试引入新的策略，要推出一个单一应用面临很多挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So building an app and then you're introducing new model providers, you're trying to put in like new strategies, the lot of challenges to get an single app out, right?</p>
</details>

我们尝试过使用智能体系统，但由于复杂性和人类头脑中固有的领域知识，目前效果不佳。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We tried this with agentic systems doesn't quite work right now because of the complexity and the the domain knowledge that's imbued in the human head, right?</p>
</details>

### 规模化AI应用面临的挑战

因此，规模化的主要挑战再次分为这三类。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the big challenges with scale are again these three categories, right?</p>
</details>

首先，我们与领域专家在**提示工程**（Prompt Engineering: 设计和优化输入提示以引导大型语言模型生成所需输出的过程）上花费了大量时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One is we're spending a lot of time with our domain experts prompt engineering right.</p>
</details>

在第一阶段，我们需要提取这些非常复杂的文档。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in the first phase where we have to extract these documents right they're very complex right.</p>
</details>

在最简单的情况下，我们的提示本身最初只有几句话，但不知不觉中，您试图描述这种金融工具的提示就变成了三段长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Your prompt itself in our simplest case like started with like a couple of sentences before you knew it you're trying to describe this financial instrument and it is like three paragraphs long right.</p>
</details>

所以面临的挑战是，我必须迭代这些提示，我必须对这些提示进行版本控制和比较，我如何有效地管理它们？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so there's this challenge of like hey I have to iterate over these prompts I have to version and compare these promps how do I manage it effectively.</p>
</details>

我认为之前的演讲者也提到过，您需要进行评估并拥有这个数据集，以了解您的提示表现如何。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think even the previous speaker had mentioned you kind of need to eval and have this data set how how good is your prompt performing.</p>
</details>

因此，这是创建AI应用本身的第一组挑战：您将如何管理它，朝哪个方向管理？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's the first set of challenges in creating like AI apps itself like how are you going to manage this in what direction.</p>
</details>

第二组挑战围绕着**LLM策略**（LLM Strategies: 使用大型语言模型解决特定任务的不同方法和技术）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Second set of challenges is around like LLM strategies right.</p>
</details>

我的意思是，当您构建一个AI应用时，您必须选择要使用哪种策略，例如基于**RAG**（Retrieval Augmented Generation: 检索增强生成，一种结合信息检索和文本生成的技术）的方法，还是基于**思维链**（Chain of Thought: 一种提示技术，通过引导LLM逐步思考来解决复杂问题）的方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What I mean by this is like when you're building an AI app so to speak you have to choose what strategy am I going to use like a rag based approach right or am I going to use a chain of thought-based approach.</p>
</details>

即使对于数据提取这样的简单任务，根据您的工具，这实际上也会有很大的不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even for a simple task of like data extraction depending on what your instrument is this actually varies uh very highly right.</p>
</details>

如果您采用像投资公司债券这样的普通债券，它相当简单，我可以在上下文内使用正向模型来完成，如果文档大小较小，我就能得到我想要的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you take like an investment corporate bond like the vanilla one is fairly simple I can do this with like in context positive model I'm able to get my stuff back if the document size is small right.</p>
</details>

有些文档长达数千页，甚至一万页。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some documents are like thousands of pages long 10,000 pages long.</p>
</details>

现在您会突然觉得“哦，好吧，我不知道我是否能将超过一百万个**token**（Token: 文本的最小处理单元，可以是单词、子词或字符）传递给OpenAI模型，那我该怎么办？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now suddenly you're like oh okay I don't know if I can pass more than a million tokens into say uh the open AI models what do I do then right.</p>
</details>

那么，我需要选择一种不同的策略，我们通常会选择不同的策略并将它们与您的提示混合，以构建这种迭代过程，我必须不断调整我的提示，我必须不断调整不同的LLM策略，我们希望尽可能快地完成这个过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then okay I need to choose a different strategy and often what we do is we have a choose choose different strategies and kind of mix them with your prompts to kind of build this iterative process where like I have to play around with my prompts, I have to play around with the different LM strategies and we kind of make want to make that process as quickly as possible.</p>
</details>

这是一个挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's a challenge, right?</p>
</details>

然后您显然会遇到上下文限制、模型限制、不同的供应商，并且您需要尝试和测试这些东西很长一段时间，这可能需要数月。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then you have obviously the context limitations, model limitations, different vendors and you're trying and testing uh things uh uh for quite a while and this kind of goes into the month right.</p>
</details>

然后最大的挑战是“好吧，我已经构建了这个应用，现在怎么办？我如何将其部署？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then the biggest challenge is like okay fine I've kind of built this app now what how do I get this to deployment and it's this whole other set of challenges right.</p>
</details>

您面临传统的挑战，例如分发、访问控制、如何将应用联合给用户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You have your traditional challenges which is has to do with distribution access control how am I going to fedate the app to the users.</p>
</details>

但在AI领域，您面临着新的挑战，例如“我将把这个部署到哪种集群？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then in the AI space it's like you have this new challenge of like what type of cluster am I going to deploy this to?</p>
</details>

我们的股票团队会说：“嘿，我需要在一夜之间分析500份研究报告，你能帮我做到吗？”

<details>
<summary>View/Hide Original English</p>
<p class="english-text">Right? So, our equity team would come and say something like, hey, I need to analyze, you know, 500 research reports like overnight, can you help me do this?</p>
</details>

好吧，如果要这样做，我可能需要一个基于**GPU**（Graphics Processing Unit: 图形处理单元，一种专门用于快速渲染图像和并行计算的处理器）的推理集群，我可以快速启动它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? So, okay, if you're going to do that, I probably have to have like a GPU based inference cluster that I can kind of spin up, right?</p>
</details>

我刚才描述的用例是新发行设置。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is the use case that I kind of described is the new issue setup.</p>
</details>

在这种情况下，我们不会使用GPU推理集群等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In that case, what we do is okay, I don't really want to use my GPU inference cluster, etc.</p>
</details>

相反，我使用一个**可突发集群**（Burstable Cluster: 能够根据需求动态扩展计算资源的集群）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What I do instead is I use like a burstable cluster, right?</p>
</details>

所有这些都必须被定义，以便我们的应用部署阶段尽可能接近**CI/CD管道**（CI/CD Pipeline: 持续集成/持续交付管道，一种自动化软件交付流程，包括构建、测试和部署）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All those have to be kind of like uh defined so that our app deployment phase is like as close to like a CI/CD pipeline as possible.</p>
</details>

然后您还有成本控制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then you have like cost controls.</p>
</details>

这也不是一个详尽的列表。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these are again it's not an exhaustive list.</p>
</details>

我想强调的是构建AI应用所面临的挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think what I'm trying to highlight is the challenges with kind of building AI apps.</p>
</details>

### 贝莱德的AI应用开发框架：沙盒与应用工厂

那么，我们在贝莱德做了什么呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? So what we did at BlackRock is what I'm going to do is I'll kind of give you a highle architecture uh and then maybe wuff you can dive into the details and mechanics of how this works and how we are able to build apps relatively quickly right.</p>
</details>

我将给您一个高级架构概述，然后Vaibhav可以深入探讨其工作原理和我们如何能够相对快速地构建应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'll kind of give you a highle architecture uh and then maybe wuff you can dive into the details and mechanics of how this works and how we are able to build apps relatively quickly right.</p>
</details>

我们能够将构建一个复杂用例的单一应用所需的时间从大约3到8个月缩短到几天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're able to we took this uh an app took us close to like 8 months somewhere between 3 to 8 months to build a single app for a complex use case and we able to compress time bring it down to like a couple of days right.</p>
</details>

我们通过构建这个框架实现了这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We achieved that by building up this framework.</p>
</details>

我想要关注的是您看到的顶部两个方框，即**沙盒**（Sandbox: 一个隔离的测试环境，允许用户在不影响生产系统的情况下进行实验和开发）和**应用工厂**（App Factory: 一个自动化平台，用于快速构建、部署和管理应用程序）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What I kind of want to focus on is on the top two boxes that you see which is your sandbox in your app factory right.</p>
</details>

数据平台和开发者平台顾名思义，是用于数据摄取等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to the uh the data platform and the developer platform is like the name suggest hey platform is someone for ingesting data etc right.</p>
</details>

您有一个**编排层**（Orchestration Layer: 负责协调和管理复杂系统或服务中各个组件的层），它有一个管道，可以对其进行转换并将其转化为新的格式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You have an orchestration layer that has a pipeline that kind of like transforms it brings it into some uh new format.</p>
</details>

然后您将其作为应用或报告分发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you kind of distribute that as a app or report.</p>
</details>

加速应用开发的关键在于，如果您能够将那些痛点或瓶颈（例如提示创建或提取模板、选择LLM策略、运行提取，然后构建调用转换器和执行器的逻辑片段）分发出去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What kind of accelerates at app development is like if you're able to federate out those pain points or those bottlenecks which is like prompt creation or extraction templates choosing an LLM strategy right having extraction runs or like and then building out these logic pieces which are calling transformer and executors if you can get that sandbox out into the hands of the domain experts then your iteration speed becomes really fast right.</p>
</details>

如果您能将沙盒交到领域专家手中，那么您的迭代速度就会非常快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you can get that sandbox out into the hands of the domain experts then your iteration speed becomes really fast right.</p>
</details>

所以您是在说：“嘿，我有一个模块化组件，我能否快速进行迭代，然后将其传递给应用工厂？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you're kind of saying that hey I have this modular component can I move across the s iteration really quickly and then pass it along to an app factory.</p>
</details>

应用工厂就像我们的**云原生**（Cloud-Native: 一种构建和运行应用程序的方法，充分利用云计算模型的优势）操作员，它接收一个定义并生成一个应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Which is like our cloudnative operator which takes a definition and spins out an app right.</p>
</details>

这就是非常高层面的概述。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's super high level with that quick demo.</p>
</details>

太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Perfect.</p>
</details>

好的，很酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> All right, cool.</p>
</details>

我将向大家展示的是我们内部实际使用的工具的一个非常精简的版本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, what I'm going to show you guys is pretty slim down version of the actual tool we used internally.</p>
</details>

首先，当操作员使用时，我们有两个不同的核心组件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so to start with, uh, when the operator, so we have like two different, uh, concore components.</p>
</details>

一个是沙盒，另一个是工厂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One is the sandbox, another one is the factory.</p>
</details>

可以将沙盒看作是操作员的**游乐场**（Playground: 供实验和学习的非正式环境），用于快速构建和完善提取模板。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So think of sandbox as a playground for the operators to sort of like quickly build and refine the extraction templates.</p>
</details>

它可以在一组文档上运行提取，然后比较和对比这些提取的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh sort of run extraction on the set of documents and then compare and contrast the results of these extractions.</p>
</details>

因此，它有点像从提取模板本身开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so it's sort of like to get started with the extraction template itself.</p>
</details>

您可能在其他工具中见过，无论是闭源还是开源，它们都有类似的概念，即提示模板管理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh you might have seen in the other tools both closed and open source they have similar concept like prompt template management.</p>
</details>

您有一些想要从文档中提取的字段，以及它们对应的提示和一些可以关联的**元数据**（Metadata: 描述数据的数据，例如数据类型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Where you have certain fields that you want to extract out of the documents and you have their corresponding prompts and some metadata that you can associate with them such as the data type that you expect of the the final result values.</p>
</details>

但当这些操作员试图在这些文档上运行提取时，他们需要比仅仅配置提示和配置最终结果所需数据类型更强大的配置能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But when these operators sort of like trying to run extractions on these documents, they need far more sort of like greater configuration capabilities than just like configuring prompts and configuring the data types that they expect for the end result.</p>
</details>

他们需要进行多次**质量控制**（QC: Quality Control: 确保产品或服务符合预定质量标准的流程）检查，对字段进行大量验证和约束。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So they need like hey I need to have multiple QC checks on the result values. I need to have a lot of validations and constraints on the fields.</p>
</details>

并且可能存在字段间的依赖关系，即正在提取的字段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there might be like a interfield dependencies uh what what the fields that are getting extracted.</p>
</details>

正如Infant提到的新证券发行操作，即**入职**（Onboarding: 将新实体（如证券）引入系统或流程的过程）这些内容，可能存在证券或债券是**可赎回的**（Callable: 允许发行人根据特定条款在到期前赎回的债券或证券）情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So as in mentioned with the new security operation uh issuance basically onboarding that stuff there could be a case where uh the security or the bond is callable.</p>
</details>

这样一来，其他字段如赎回日期和赎回价格就需要有值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you have other fields such as call data and call price which now needs to have a value.</p>
</details>

因此，存在这种字段间的依赖关系，操作员需要考虑并能够配置这些依赖关系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there is like this inter sort of like field dependencies that operators sort of like uh need they need to take that into consideration be able to configure that.</p>
</details>

所以这是一个样本提取模板的样子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here is like what a like a sample uh extraction template looks like.</p>
</details>

这是一个示例模板，我们设置了发行人、可赎回、赎回价格和赎回日期这些字段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here is how a again this is a example template where we have like issuer callable call price and call date these fields set up.</p>
</details>

要添加新字段，我们需要定义字段名称，定义预期的数据类型，定义来源是提取的还是派生的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And to sort of like add new fields we would define the field name uh define the data type that is expected out of that uh define the source whether it's extracted or derived.</p>
</details>

并非每次都希望为某个字段运行提取，操作员可能期望有一个派生字段，该字段通过下游的某些转换来填充。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Not every time you want to sort of like run an extraction for a field there might be a derived field that operator expect which is sort of like uh populated through some transformation downstream um and once uh again uh whether the field is required and the field dependencies.</p>
</details>

以及该字段是否是必需的以及字段依赖关系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And once uh again uh whether the field is required and the field dependencies.</p>
</details>

在这里，您定义了该字段具有哪些依赖关系以及验证规则。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here is where you define what sort of like dependencies this field have and sort of validations right.</p>
</details>

这就是他们设置提取的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is how they set up the extraction.</p>
</details>

接下来是文档管理本身。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The next thing is the document management itself.</p>
</details>

这是从数据平台摄取文档的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is where the documents are ingested uh from the uh the data platform.</p>
</details>

它们根据业务类别进行标记，并进行标注和嵌入等所有处理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They are tagged according to the business category uh and they are labeled they're embedded all of that stuff.</p>
</details>

好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Okay.</p>
</details>

当Vaibhav准备好时，我想我们本质上是在说，我们构建了这个工具，它有一个**用户界面**（UI: User Interface: 用户与软件或硬件交互的界面）组件和一个框架，可以让你将这些不同的模块化组件交给领域专家，让他们快速构建自己的应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">While I think while Viber kind of brings it up. So I think what in essence what we're saying is we kind of built this tool which has like a UI component and like a framework that actually lets you take these different pieces and these modular components and give it to the hands of like the domain expert to build out their app really quickly. Right?</p>
</details>

我想出了点问题，所以让我来告诉大家接下来会发生什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I think something happened just so let me just sort of walk you guys the what happens next. Um so like once you have set up the extraction templates and documents management the operators basically run the extractions.</p>
</details>

一旦您设置了提取模板和文档管理，操作员基本上就会运行提取。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so like once you have set up the extraction templates and documents management the operators basically run the extractions.</p>
</details>

在那里，他们基本上可以看到他们从这些文档中期望的值，并对其进行审查。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's where they basically see the values that they expect from these documents and sort of like review them.</p>
</details>

我们发现这些操作员在使用其他工具时遇到的问题是，他们过去使用的大多数工具在提取方面做得很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh the thing with we have seen with these operators trying to use other tools. Uh no this is just saying um yeah I did uh the thing we have seen uh with these operators is that most of the tools tools that they have used in past uh these tools basically does extraction uh the they do a pretty good job at extraction.</p>
</details>

但在“嘿，我现在需要使用这个结果并将其传递给下游流程”方面，目前的流程非常手动，他们必须下载**CSV**（Comma-Separated Values: 逗号分隔值文件，一种存储表格数据的纯文本格式）或**JSON**（JavaScript Object Notation: 一种轻量级的数据交换格式）文件，手动运行或添加转换，然后将其推送到下游流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But when it comes to like uh hey I need to now use this result that has been uh presented to me and pass it to the downstream processes. The process right now is very manual where they have to like download a CSV or a JSON file, run manual or add a transformation and then push it to the downstream process.</p>
</details>

因此，我们所做的是构建了一个**低代码/无代码**（Low-Code/No-Code: 一种软件开发方法，允许通过图形界面和配置而不是传统编码来创建应用程序）框架。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what we have done and again I can't show you but what we have done is like build this sort of like low code no code framework.</p>
</details>

操作员可以在其中基本上构建这种转换和执行工作流，并拥有这个端到端的管道运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Where the operators can basically essentially uh run the uh sort of build this transformation and execution workflows and uh sort of like have this end toend uh pipeline running uh and I I think yeah so I think we'll conclude by saying that our key takeaways of this right.</p>
</details>

### 关键经验总结

我想我们会总结一下我们的主要经验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think we'll conclude by saying that our key takeaways of this right.</p>
</details>

我想有三个关键经验：首先，在提示工程技能上为您的领域专家投入大量精力，特别是在金融领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would say that are like three key takeaways invest heavily on your like prompt engineering skills for your domain experts especially in like the financial space and world.</p>
</details>

定义和描述这些文档真的很难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh defining and describing these documents is really hard, right?</p>
</details>

其次是教育公司和企业LLM策略的含义，以及如何为您的特定用例实际组合这些不同的部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A second is like educating the firm and the company on what an LLM strategy means uh and how to actually fix these different pieces for your particular use case.</p>
</details>

我想第三点是，我们得出的关键经验是，所有这些在实验和原型模式下都很棒，但如果您想将其投入实际使用，您真的必须评估您的**投资回报率**（ROI: Return On Investment: 衡量投资效率的指标）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think the third one I would say is hey uh the key takeaway that we had is all of this is great in experimentation and prototyping mode but if you kind of want to bring this you have to really evaluate what your ROI is.</p>
</details>

与使用现成的产品更快地完成任务相比，实际启动一个AI应用是否会更昂贵？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as is it going to be like more expensive actually spinning up an AI app versus just having like an offtheshelf product that does it quicker and faster.</p>
</details>

所以，这些是关于大规模构建应用的三个关键经验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? So those are the three key takeaways in terms of like uh building apps at scale.</p>
</details>

我们意识到，“**人机协作**”（Human-in-the-Loop: 将人类决策和监督整合到自动化系统中的方法）的概念非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what we realized was like hey uh this notion of like human in the loop and the one more thing I'll add is human in the loop is super important right.</p>
</details>

我们都非常想说“让我们全面采用智能体技术”，但在金融领域，由于合规性和法规，您需要进行**四眼检查**（Four-Eyes Check: 要求至少两名人员独立审查一项操作或决策以减少错误和欺诈的控制措施），您需要人机协作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We all are like really tempted like let's go all agent tech with this uh but in the financial space with compliance with regulations you kind of need those four eyes check and you kind of need the human loop so design for human in the loop first uh if you're in a highly regulated environment.</p>
</details>

因此，如果您处于高度监管的环境中，请首先为人机协作进行设计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So design for human in the loop first uh if you're in a highly regulated environment.</p>
</details>

是的，正如Infant所说，我们无法展示的一点是整个应用工厂组件，它包含了操作员通过沙盒的迭代周期所做的一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> yeah and as info said one thing we couldn't show is the whole app factory sort of like uh component which is all the things that operators do through this iteration cycle of through the sandbox.</p>
</details>

他们将所有这些知识、提取模板、他们在工作流管道中构建的转换器和执行器，通过我们在贝莱德的应用生态系统，构建这些定制化应用，然后将其暴露给用户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They take all that knowledge, the extraction templates, the transform it transformers and executors they build through this workflow pipeline and through our app uh ecosystem within uh BlackRock they sort of like build this uh custom applications that are then exposed to the users.</p>
</details>

这些应用的用户无需担心如何配置模板，或如何将结果值集成到最终的下游流程中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Where users of this app don't have to worry about how to configure templates or how to basically figure out how to integrate the result values into final downstream processes.</p>
</details>

他们会看到一个完整的端到端应用，只需上传文档并运行提取，即可启动整个管道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They are presented with this whole end to end app where they can just go and like sort of like upload documents and run extraction and sort of uh get the whole pipeline set uh running.</p>
</details>

### 问答环节

好的，我们现在开始提问。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. With that we'll open up for questions. I think we have like a minute or two left.</p>
</details>

我想我们还有一两分钟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think we have like a minute or two left.</p>
</details>

是的，我有一个问题，可能直接与您开发的架构有关。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Uh so I have a question which may directly be related to Good morning. I have a question which may directly be related to the uh architecture that you developed.</p>
</details>

您可以告诉我，我们可以稍后讨论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> You can tell me I can discuss later.</p>
</details>

但问题是，您已经总结了关键经验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the question is going to be you you have developed uh um the key takeaways.</p>
</details>

其中一个关键经验是大力投资提示工程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of those key takeaways had been in invest heavily on prompt engineering.</p>
</details>

因此，您基本上已经自动化了从最底层（例如公司进行IPO）到通过**ETL**（Extract, Transform, Load: 提取、转换、加载，数据集成过程）流程进行编目，再到最终数据分析的整个过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you have essentially automated the process from the leaf level for example a company's coming to an IPO from that level all the way to cataloging through ETL processes and then to finally to the data analytics.</p>
</details>

现在，您的首席执行官（CEO）会查看资产负债表、资产和负债，他将主要使用您的AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now your CEO who looks at the balance sheet, assets and liability will be using your AI the most and for C uh your CEO.</p>
</details>

那么，在最低层，例如期限、到期日、久期等，涉及哪些功能？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now what are the features involved here at the lowest level for example term maturity duration there are so many metrics at the L level.</p>
</details>

您如何将这些功能从最低层转换到最高层？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How are you transforming those features from the lowest level to highest level?</p>
</details>

我希望得到一个关于**去中心化数据**（Decentralized Data: 数据不集中存储在单一位置，而是分布在多个节点或实体之间）的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm looking for an answer in reference to decentralized data.</p>
</details>

是的，我可以给您一个简短的回答，然后我们可以线下详细讨论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, I mean I can give you a quick answer and then we can discuss uh in detail like offline.</p>
</details>

我认为很快，我们构建的框架专门针对投资运营领域的专家，他们正在尝试构建应用程序。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think real quickly like the the framework that we built was specifically targeting like the investment operation domain experts who are trying to build applications.</p>
</details>

至于您提出的“CEO关心什么？我能否构建一个备忘录，提供我的资产负债等信息？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To your question of like hey what does the CEO care about? Can I construct a memo that gives me my asset liabilities XYZ?</p>
</details>

这些将是不同的倡议，它们可能使用或不使用我们特定的框架。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Those would be like different initiatives which may or may not use our particular framework.</p>
</details>

但是，是的，这里面有很多可重用的组件，人们可以使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But uh yes, there are many reusable components in here that people can use. Yeah.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah.</p>
</details>

我为保险公司做了很多文档处理工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I do like a lot of document processing for insurance company.</p>
</details>

遇到的问题和你们差不多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Pretty much same problems as you guys run into.</p>
</details>

所以我想知道你们是如何在文档信息提取周围建立一道“墙”的，因为有很多事情可能会出错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I wonder how do you build a wall around your information extraction from the documents right because there are so many things that can go wrong.</p>
</details>

从**光学字符识别**（OCR: Optical Character Recognition: 将图像中的文本转换为机器可读文本的技术）开始，它可能不理解所有这些术语的实际含义，无论您如何提示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Starting from a CR like doesn't understand what all these terms actually mean no matter how you prompt it right all this stuff.</p>
</details>

所有这些问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's kind of what's for the reason.</p>
</details>

再说一次，我们有很多想展示的，但是是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> again I mean we had all of that that we wanted to show but yeah</p>
</details>

我想对您的问题的简短回答是，在信息安全和我们设置的边界方面，即我们如何确保没有数据泄露或错误，或者在安全性方面，您可以将其视为不同的层次。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I think a short answer short answer to your question is in terms of like information security and what are the boundaries uh that we're putting in terms of like hey we are not having data leakage or errors or understanding of like in terms of security you can think of it as different layers.</p>
</details>

从您的基础设施平台、应用程序到用户层面，都有不同的控制和策略。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All the way from like your infra platform application right and the user levels there are different controls and policies in place uh and it's also within SD network like I think there are policies across the stack that we can get into in detail later that kind of uh addresses your um concerns.</p>
</details>

而且它也在**SD网络**（SD Network: Software-Defined Network: 软件定义网络，一种网络架构方法，将网络控制平面与数据平面分离）中，我认为整个堆栈都有策略，我们稍后可以详细讨论，这些策略解决了您的顾虑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's also within SD network like I think there are policies across the stack that we can get into in detail later that kind of uh addresses your um concerns.</p>
</details>

另外，关于您提到的观点，我们根据手头的用例使用了不同的策略。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and also also to your point um I think we have like different sort of like uh strategies that we use based on uh the sort of like the use case at hand.</p>
</details>

所以不仅仅是RAG与此，我们使用了多个模型提供商，多种不同的策略等等，还有不同的工程调整。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so it's not just like hey one rag versus this there are multiple model providers that we use uh multiple different strategies etc. uh different like like engineering sort of tweaks.</p>
</details>

所以这是一个相当复杂的过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so it's a quite complex sort of yeah process.</p>
</details>

好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> All right.</p>
</details>

非常酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Very cool.</p>
</details>

太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Awesome.</p>
</details>

谢谢大家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Thank you.</p>
</details>

好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> All right.</p>
</details>