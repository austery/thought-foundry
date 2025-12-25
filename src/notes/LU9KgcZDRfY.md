---
author: AI Engineer
date: '2025-12-23'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=LU9KgcZDRfY
speaker: AI Engineer
tags:
  - genbi
  - business-intelligence
  - ai-implementation
  - risk-management
  - data-democratization
title: 从小处着手，成就大影响：在财富100强企业构建GenBI
summary: 本次演讲详细介绍了在一家大型金融服务公司 Northwestern Mutual 如何克服挑战，逐步构建和部署 GenBI（生成式人工智能与商业智能融合）系统的过程。演讲者 Assaf 分享了其团队在处理真实复杂数据、建立用户和领导层信任、以及采用渐进式交付策略方面的经验，强调了风险控制和早期价值实现的重要性，并探讨了 GenBI 的技术架构、未来发展方向及对 SaaS 定价模式的影响。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-work
project:
  - ai-impact-analysis
people:
  - Assaf
companies_orgs:
  - Northwestern Mutual
products_models:
  - GPT-3
  - GPT-5
media_books: []
status: evergreen
---
### 构建 GenBI 的挑战与机遇

大家有没有觉得，这场景看起来就像有什么东西要从天花板掉下来一样？就像“零号地带”那种感觉？老实说，有没有一个蜂鸣器，如果我表现得一塌糊涂，有人一按，所有东西就从活板门里掉下去？没有吧。小心点。是的。好了，是谁呢？好的，你来告诉我我做得怎么样，或者我该退后几步。大家好，我是 Assaf。我今天来是想谈谈 GenBI。首先声明一下，这次演示并不是用 Gen AI 创建的。说实话，我最初是在去年八月用 GPT-3 开始做的。然后我做了个初稿，几周前我想在会议前更新一下，结果 GPT-5 完全搞砸了我的幻灯片。所以我最后还是老派地手动完成的。如果我漏掉了什么地方的破折号，请会后告诉我。

<details>
<summary>Original English</summary>

Doesn't this look like something's going to drop from the ceiling? Like a ground zero type thing? [snorts] Be honest. It's like who has the buzzer that if I'm I really suck, they press it and everything falls down through the trap door. No. >> Be careful. >> Yeah. Okay. Who was it? >> Okay. You tell me if I'm doing okay or if I should take a couple of steps back. Right. So, hi everyone. I'm Assaf. Um, and I'm here to talk about Genbi. And kind of first disclaimer, this presentation was not created with Gen AI. Um to be honest, I actually started doing it uh with uh GPT03 back in August. [snorts] Uh and then I did kind of a first draft and then a couple of weeks back I wanted to come in and refresh it before the conference and then GPT5 took over completely messed up my slides. So I ended up doing it manually kind of old-fashioned. So if I'm missing like an M dash somewhere in the middle, let me know after. Okay. [snorts]

</details>

### 什么是 GenBI？

首先，简单介绍一下。什么是 GenBBI？它是 Gen AI（生成式人工智能）和 BI（商业智能）的融合。它本质上是一个**智能代理**（Agent），能够像真实的商业智能分析师一样，帮助人们利用数据来回答业务问题。我们之所以要推进 GenBI，主要是看中了它能带来的**数据民主化**（Data Democratization）。这意味着人们可以随时随地访问数据，而无需依赖 BI 团队来查找报告、解读其含义，甚至在你获得任何输入之前，他们就需要帮助你理解你的业务状况。这就是 GenBBI。

<details>
<summary>Original English</summary>

Uh so first of all, a bit of housekeeping. What's GenBBI? So, it's a fusion of Gen AI and BI. It's basically an agent that helps people answer business questions with data like a a business intelligence person would do in real life. [snorts] Uh, the reason that we're pursuing GenBI is really because of the data democratization that it can bring, right? So having access to data at your fingertips without having to be reliant on a BI team that helps you find a report, figure out what it means, uh, understand your world before they can even give you any kind of input. Uh, so that's GenBBI.

</details>

### Northwestern Mutual 的背景与 AI 挑战

简单介绍一下我工作的公司——**Northwestern Mutual**。我们是一家金融服务公司，提供人寿保险和财富管理服务。公司已有 160 年历史。我们拥有一些非常亮眼的数字。但首先，我想说为什么 Northwestern Mutual 是一个进行 Gen AI 工作的绝佳场所？我们拥有海量数据，雄厚的资金，大量的应用场景，并且能够接触到任何人都能梦想到的顶尖人才。我真的对能与我共事的人们感到由衷的荣幸。但反过来看，在 Northwestern Mutual 从事 Gen AI 工作又为何如此困难？因为我们是一家**风险规避型**（Risk-averse）公司。你想想看，我们的核心理念是“代际责任”。我称之为“别搞砸”。因为我们卖给客户的是一项长达数十年的承诺。你现在购买人寿保险，如果你一直与我们合作直到保单到期，那可能是在 20 年、40 年甚至 80 年后，这取决于你购买的时间以及你能活多久。因此，**稳定性**对我们至关重要，因为它对我们的客户至关重要。那么，我们如何平衡稳定与创新呢？这就是我今天想谈的。当我们构思出这个“异想天开”的 GenBI 概念时，我们面临着四个主要挑战。

<details>
<summary>Original English</summary>

Uh, a bit about Northwestern Mutual. That's where I work. So we're a financial services, life insurance, and wealth management. Been around for 160 years. [snorts] Uh, some very impressive numbers there. But first of all, I want to say why is Northwestern Mutual a great place to do Gen AI. We got a lot of data, we got a lot of money, we got a lot of use cases, and we got access to some of the best talent uh anyone can dream of. Really truly humbled by the people that I get to work with. Um but on the flip side, why is it hard to do Gen AI at Northwestern Mutual? Because it is a very riskaverse company, right? If you think about it, our main motto is generational responsibility. I call it don't f up. Uh because what we end up selling to people is a decadesl long commitment, right? You buy life insurance now. Uh if you stay with us until it comes to term, so to speak, that can be 20, 40, 80 years down the line, depending on when you buy it and how long you get to live. And so stability is something that's very important for us because it's important for our clients. So how do we balance stability with innovation? That's what I want to talk about today. Um and really the four main challenges that we had when we even came up with the idea kind of a pie in the sky Genbi concept. Uh

</details>

### GenBI 项目面临的四大挑战

首先，**没有人做过**。真的，过去没有人以这种方式做过 GenBI。其次，这也是我们的一项偏好：我们希望使用**真实、混乱的数据**，因为我们知道那才是真正的挑战所在。理解一家拥有 160 年历史的公司那些混乱的真实数据，以及我们如何在该生态系统中表现良好。第三点是所谓的“**盲目信任偏见**”。我们必须建立信任，这既包括与用户的信任，也包括与公司领导层的信任。我们如何能向人们提供准确的信息和答案，当所有我们知道的、大家都在谈论的事情都摆在那里？没有人对信任壁垒视而不见，没有人对准确性壁垒视而不见。所以，我们如何说服大家这确实是我们公司可以信任的东西？最后，但实际上是首先要考虑的，当我们从企业视角来处理这个问题时，就是**预算和影响**。我们如何说服一个风险规避根植于其 DNA 的领导层组织，去投资这样一件前所未有的事情？我们不确定如何去做，甚至不确定它最终会是什么样子。

<details>
<summary>Original English</summary>

[snorts] first of all, no one's done it before, right? Truly, no one's done Genbi in this fashion in the past. Uh secondly, and this was really a preference for us. We wanted to use actual data that's messy because we knew that those were that's where the real challenges are going to be, right? Understanding actual messy data for 160y old company and how can we perform well within that ecosystem. Um the third was kind of a blind trust bias. So um the bi the trust that we had to build was both with the users but also with the leadership of the company right how can we bring accurate information accurate answers to people when uh all of these things that we know about and everyone's talked about is is just out there right no one's blind to the trust barriers no one's blind to the accuracy barriers so how do we convince that this is actually something that we can trust in the company and lastly

</details>

### 拥抱真实数据与用户参与

我将逐一展开。首先，我们来谈谈为什么选择使用**真实数据**，而不是合成数据或清洗过的数据。这关乎确保我们理解在最终投入生产时将面临的实际复杂性。我们知道构建概念验证（POC）和演示很容易，但从 POC 到生产的鸿沟非常巨大，尤其是在这个 Gen AI 领域。特别是因为我们无法预先知道如何设计系统，它会如何表现。因此，确保我们使用真实数据操作，让我们对在实验室中有效的东西在现实中也很可能有效，有了额外的信心。同样重要的是，我们得以与那些**日复一日处理数据的人**合作。这给了我们两样东西：首先是**主题专家知识**（Subject Matter Expertise），这对我们验证系统是否真正有效至关重要。他们提供了大量真实世界的例子，说明人们在企业中实际在问什么，以及人们是如何回答这些问题的。所以，基本上就是评估和所有测试等等。但最终，这也让业务部门成为了研究项目本身的一部分，他们也认同了这个想法，成为了过程的一部分。所以，我们不是在实验室里测试完某个东西，然后去说服别人使用它。最终用户本身就是研究过程的一部分。因此，当它最终成熟到我们可以将其投入生产时，他们已经准备好了，并且实际上在推动这件事。他们告诉我们：“我们想用这个，我们该如何包装它，如何快速地把它投入实践？”

<details>
<summary>Original English</summary>

Um but really firstly when we go to approach this from an enterprise perspective [snorts] budget the impact right how do we convince someone in a leadership uh organization where risk aversionment is ingrained in the DNA to even invest in something like this that no one's done before we don't really know how we would do it uh we're not even sure how it would look like when it comes to turn uh so I'll start kind of one by one uh and first of all really talk about why we chose to use actual data uh and not synthesized data or cleanse data. >> [snorts] >> Uh so really it's about making sure that we understand the actual complexities that we will have to face when we eventually want to go to production right we know that you know building uh PC's and demos is so easy but the gap from PC to production is so broad uh especially in this gen AI space especially because we don't know upfront how to design the system what we would expect it to behave like so making sure that we operate with real data just gave us that extra confidence that when something works in the lab it's very likely to also work in reality. Uh but also and maybe not uh in the least less important is that we got to work with actual people who work with the data day in and day out and that gave us two things. Okay, first of all subject matter expertise which are super critical for us to be able to validate that the system is actually working gave us a lot of real life examples of what people are actually asking in a corporate and what people have answered to them. So basically the eval right and all the testing and stuff. Uh but at the end of the day it also brought the business to be a part of the research project itself and they became kind of bought into the idea as part of the process. So we didn't just test something in the lab and then had to convince someone to go ahead and use it. The end users were part of the research process itself. And so when eventually it matured enough so we can take some of that to production, they were already there and they actually were pulling that. They told us we want to take this, how can we wrap it, how can we package it uh quickly enough so we can put it into practice.

</details>

### 建立信任：分阶段推广策略

接下来是关于**建立信任**。这首先是与我们的管理团队建立信任。我不知道你们怎么样，但上次我拿到一百万美元去做一个我想要的、异想天开的研究项目时，我从梦中醒来，意识到现实中事情并非如此运作。你不会 just 拿到一百万美元就去尝试某件事。你必须证明你知道自己在做什么。我们所做的一部分工作，这里列出了一些，但显然，我们做了所有常规的事情，对吧？我们在沙盒环境中工作，确保不使用实际客户数据，确保将所有安全风险排除在外。但我们采取的第一个方法是，我们不会仅仅构建一个发布给所有人的工具。我们很快就明白，人们与工具的互动方式，他们验证所获信息是否正确的**能力**，以及他们提供反馈的**方式**，都会因他们的专业知识和对数据的理解而发生巨大变化。所以，我们采用了“爬行-行走-奔跑”的方法，即我们首先将其发布给**实际的 BI 专家**，那些能够独立完成工作并知道什么是“好”的人。我们只是为他们加快流程，有点像 GitHub Copilot。下一阶段是将它推广给业务经理，同样是那些更接近 BI 团队的人。当他们看到错误时，他们几乎可以立即判断出他们看到的是错误的，因为他们日常工作中经常看到这些。他们可能对这类错误不那么敏感，并且更愿意给我们反馈，而不是直接忽略它，再也不使用。将这类工具提供给公司高管，我甚至不知道什么时候能做到。高管们想要清晰、简洁、他们知道可以信任的答案。我们肯定还没到那一步。我认为那是未来的愿景，但系统还不够准确，无法实现。也许永远也无法实现。

<details>
<summary>Original English</summary>

Uh and the next part was really about building trust. Uh so this is about building trust first of all with our management team. All right. Now, I don't know about you, but last time that I got a million dollar to do a research project that I wanted in a pie sky idea. I woke up from the dream and I realized that this is not how things work in reality. You don't just get a million dollars and go ahead and try something out. Uh, you had to show that you know what you're doing. And part of what we did, it's kind of listed out here, but obviously, you know, we did all the regular stuff, right? We worked in a sandbox environment. We made sure that we're not using actual client data. We made sure to put in all the security risk aside. But uh one of the first approaches that we said we're going to take is we're not just going to build a tool that's going to be uh released to everyone, right? We understood very quickly that um how people interact with the tool, their ability to verify that what they're getting is right and also give us feedback changes dramatically depending on their expertise and understanding of the data. So we took that crawl, walk, run approach that basically said we're first going to release it to actual BI experts, right? people that would be able to do it on their own and know what good looks like when they get it. And we're just going to expedite the process for them kind of like a GitHub co-pilot. The next phase would be to bring it to business managers and again people who are closer to the BI team, but when they see a mistake, they can pretty much figure out that what they're seeing is wrong because they're used to seeing that on day-to-day basis. um and they will might be less sensitive to these types of mistakes and be more inclined to give us that feedback instead of just, you know, dumping it aside and never using it again. Giving this type of tool to executives in the company, I don't even know when we're going to get there, right? Like an executive, they want clear, concise answers that they know they can trust. We're definitely not there yet. I think that's the vision uh at some point in time, but the system is not accurate enough for us to get there. Maybe it never will be.

</details>

### 利用现有资源与渐进式交付

另外一个我们用来构建系统内在可信度的方法是，我们一开始就决定不尝试构建 SQL 查询。这非常复杂，即使对人来说也很难。所以，我们说第一步，让我们只提供**生态系统中已有的、已经过验证的信息**。我们有很多经过认证的报告和仪表板。在与一些 BI 团队的交流中，他们告诉我们，他们 80% 的工作就是把人们引向正确的报告并帮助他们弄清楚如何使用它。所以报告本身已经存在了。这再次为我们系统的架构注入了内在的信任，因为我们说我们不会编造信息，我们只会以更快、更具交互性的方式提供你本应获得的东西。这就是我们与用户以及管理团队非常坦诚地进行的**期望对齐**。现在，我们采取的最重要的方法，也是说服领导层我们想做这件事的关键，是创建一个**非常渐进、增量式的过程**，让他们有很大的**可见性和控制力**。在整个过程中建立增量交付非常重要，这样他们不仅能看到我们现在资助的是什么，能从中获得什么，他们实际上还能获得可实现的业务成果。在任何时候，他们都可以选择停止，比如“它运行得不好”，或者“我们从中获得的足够多了”，或者“下一阶段太未知且遥远，我们不想再投入了”。这就是我们分解它的方式。第一阶段是纯粹的研究，我们实现了从自然语言到 SQL 的转变，弄清楚如何编写响应，如何理解进来的问题。这只是在打基础。第二阶段是真正理解，好的元数据和好的上下文在 BI 代理的视角下是什么样的。如果你只是在与某物聊天，或者如果你试图用非结构化数据（如文档）进行 RAG（检索增强生成）的话，情况会非常不同。这个阶段本身就对业务产生了影响，因为当我们定义了 LLM（大语言模型）的良好元数据是什么样的，我们就可以立即将其应用于整个企业的数据用户生态系统。通过理解如何从信息中提取元数据，我们也能理解如何提取元数据。这里就是活板门发挥作用的地方。我们还可以将其投射到人类与数据交互时，良好的元数据是什么样的。我们还有一项关于语义层的倡议，试图精确地建模这一点，这为该倡议提供了非常有价值的输入。但紧接着的下一步是进行这种**多上下文语义搜索**。人们提出不同的问题，系统找出正确的上下文，我们需要提供哪些相关信息。这本身就可以作为一个独立的产品进行打包和交付，基本上可以充当一个数据查找器和数据所有者查找器，这在 Northwestern Mutual 这样的企业中，可能需要两到四周的时间来查找存在哪些数据以及谁拥有它，以便我能开始对话。

<details>
<summary>Original English</summary>

Now [clears throat] the biggest um process or kind of the most important approach that we took when uh approaching our leadership team and convincing them that we want to do this was to create a very gradual incremental process that gave them a lot of visibility and control. Uh and it was very important for us to build incremental deliveries throughout that process so that [snorts] uh not only did they have the the visibility into what are we funding now, what do we get out of it, they actually had business deliverables they could realize potential from throughout the process and at any point in time they could pull the plug right and say okay like it's not working well or we got enough out of it or you know the next phase is so you know unknown and long that we don't want further invest in it. And this is how we basically broke it down. So phase one was just pure research, right? We kind of did the shift from natural language to SQL. We figured out how to write responses. We figure out how to understand questions that coming in. Just kind of setting the stage. [snorts] Phase two was about really understanding, okay, so what does good metadata and good context look like in the perspective of a BI agent, right? It looks very different if you're just chatting with something or if you're trying to do a rag with you know unstructured data like documents and uh business knowledge and stuff like that. And this phase on its own already had uh impact on the business because when we define what good metadata looks like for an an LLM uh we could immediately apply that also to just the ecosystem of data users across the enterprise. Um, and by understanding how to extract LM from the information, we could also how to extract metadata. Sorry, here's where [snorts] the trap door comes into play, right? Um, we could also project that on how or what good metadata looks like for humans interacting with the data. We have another initiative around semantic layer going on which tries to model exactly that and this provided a very valuable input to that initiative as well. But the immediate next step was basically just doing this kind of uh multicontext semantic search, right? People coming in asking different questions and having the system figure out what's the right context, what's the right information we need in uh bring them. And this is something that could already be packaged as its own product and delivered uh and basically just do kind of a data finder and data owner finder which is something that could take anywhere between two to maybe four weeks in an enterprise like Northwestern Mutual just finding what data exists and who owns it so I can start talk uh the conversation with them.

</details>

### 技术架构与增量价值

下一层是**拉取信息**并尝试进行一些轻量级的数据**透视**（Pivoting）。这些步骤中的每一步，正如你所见，也为下一步创造了输入，使得研究本身具有自我驱动性，并且每个阶段都产生了增量结果。下一个阶段更多是为**企业级使用**进行设置，了解不同用户的角色、他们可能询问的内容、我们想给予他们什么样的访问权限等。最终，这仍然需要一些时间，目标是构建一个**功能齐全的 BI 代理**，它不仅能引用现有报告中的信息，还能独立运行 SQL 查询，拉取更多数据，进行更复杂的数据连接，从而回答更复杂的问题。这就是路线图，是高层计划。那么，为什么它会奏效呢？我们快速总结一下：我们**早期且频繁地获得价值**。每个阶段都是一个为期六周的冲刺，结束后我们都有一个非常**切实的交付成果**，业务部门可以决定是否将其产品化。在任何时候，我们都可以决定如何推进。进展是透明的，业务价值是渐进的。这些步骤中的每一步都让我们学到了东西，有助于推动下一步。也许最重要的一点，也是高管们真正关注的重点：我们如何控制继续投资这类研究项目的**风险**？这实际上是关于消除“沉没成本偏见”。我们已经支付了数百万美元，那就继续完成项目，看看最后能得到什么。这消除了竞争对手可能后来居上，而我们不必继续投资的担忧。是的，行业内的每个人都在研究 GenBI，并且出现了像 Databricks Genie 这样的解决方案，它们越来越好。也许有一天，我们作为组织采用 Databricks Genie 会更好。但到那时，再次强调，我们更容易停止资助，而且我们已经对“好”的标准有了很好的理解，我们有自己测试时的基准，可以用来测试第三方解决方案。我们知道该期待什么，知道什么有效，什么无效，知道供应商的演示可能有多么“花哨”，以及在哪里可以深入挖掘以提出棘手的问题。

<details>
<summary>Original English</summary>

Um and the next layer was really about pulling in information and trying to do some light pivoting around the data. Um each one of these steps as you can see also created an input to the to the following step so that the research itself was kind of self u self-propelling and there were incremental outcomes coming out of each one of these phases. Uh the next one is more kind of setting it up for enterprise level usage. So understanding roles of in uh of different users coming in what they may be asking about what type of access we want to give them etc and eventually and this is still some ways to go ahead uh building kind of a fullyfledged NBI agent which doesn't only quote information from existing reports but I can actually run SQL queries on its own uh pull in more data do more sophisticated joints between different data so it can answer more complex questions so that's the road map right that's kind the high level plan. Now, why did that work? Well, kind of quickly summarize them. We talked about uh so we get value uh early and we get value often. Each one of this was a six week sprint at the end of which we had had a very tangible deliverable coming back to the business that we could decide to productize. Uh and at any point in time, we could decide how we want to move forward. There was transparent progress. There was incremental business value. Uh each one of these steps allowed us to learn something that helped feed the next step. And maybe the most important part and that's the bottom line here and that's the part that executives really look at. How do we control the risk in continuing to invest in this type of research project and this is really about eliminating things like sun cost bias, right? We already paid you know you know whatever a million dollar. Let's just get through the project see what we get at the end. This eliminates the uh uh fear of of competitors coming in and maybe we don't need to continue investing in this right so everyone in the industry is researching GenBI and there are solutions like data bricks genie that are coming up and they're getting better and better maybe at some point in time it's better for us as an organization to actually adopt data bricks genie but at that point again first it's much easier for us to pull the plug and the funding but we already have a good understanding of what good looks like we have benchmarks that we used for ourselves when testing our own system that we can test a third party solution with. And we know what to expect, right? We know what works, we know what doesn't. We know what a kind of fluffy demo from a vendor would look like. And we know where to drill in to ask the tough questions.

</details>

### 技术栈与工作流程

让我们看看**幕后**是什么样的，以及我们如何将这个架构的各个元素产品化。为什么我们不能直接用 ChatGPT 来做呢？你把一个数据库模式（Schema）扔给 ChatGPT 是行不通的。通常模式非常混乱，很难理解其中的上下文和含义。最终，**治理**（Governance）至关重要。我们的架构中内置了大量的治理机制，这很难从外部应用到 ChatGPT。但即使是像 Databricks Genie 这样的第三方解决方案，从外部治理起来也比从内部治理要困难得多。这仍有待观察。所以，技术栈大致是这样的：我们有一个**数据和元数据层**，是我们生成的。我们有四个不同的**智能代理**（Agents）在整个流程中运行：一个元数据代理，负责理解上下文；一个 RAG 代理，负责查找不同的报告；一个 SQL 代理，可以在我们需要时拉取更多数据；以及最终我们称之为 BI 代理的东西，它接收所有这些信息，并对所提出的问题给出答案。在此之上，我们叠加了治理、信任和**编排**（Orchestration），最终还有一个**情境化用户界面**（Contextual UI）。这就是流程的运作方式：当一个业务问题进来时，我们将其推送到编排器，它决定如何促进这个过程。我们做的第一件事是理解上下文。这就是元数据代理发挥作用的地方，它与目录（Catalog）以及我们系统中所有的文档协同工作，以理解我们被问到的内容以及需要分享的相关信息。然后我们转向 RAG 代理，它尝试从一份经过认证的报告列表中找到一份现有报告。这些报告是我们知道允许人们使用的，并且人们花费了大量时间对其进行微调，使其尽可能准确。

<details>
<summary>Original English</summary>

So let's see kind of what it looks like under the hood and how we productize different elements uh of this architecture. Uh and maybe kind of very quickly, why can't we just do it with uh chat GPT? So you [snorts] know just dumping a schema into chachpp doesn't work. Usually schemas are very messy. It's not uh easy to understand the context and the meaning of things. [snorts] Uh and eventually governance is super important. So there was a lot of governance built into the architecture that was very hard to apply on chpd from the outside but even solutions like you know data bricks genius third party much harder to govern from the outside than from the inside. But still TBD. Uh so the stack kind of looks like this. Uh we have a data and metadata layer that we produced. We have four different agents that are running across the pipeline. A metadata agent that understands the context. A rag agent that finds the different reports. An SQL agent that can pull more data if we need that. And then eventually what we call a BI agent that takes all that information and delivers an answer to the question that was asked. On top of that, we slap governance and trust and orchestration and eventually some kind of a contextual UI. Um and this is how the flow goes. So when a business question comes in we uh push it into the orchestrator and basically decides how to facilitate the process. The first thing that we do is understanding the context. So that's where that metadata agent comes in works with the catalog works with all the documentation that we have across the system to understand what we're being asked about and what's the relevant information to share. Then we go to the rag agent which tries to find an existing report again out of a list of certified reports that we know are allowed for people to use and people have spent a lot of time fine-tuning them and making them as accurate as possible.

</details>

### 代理协同与价值实现

如果我们找不到报告，或者报告不完全符合我们的需求，那么我们就转向 SQL 代理，它会尝试创建一个更精确或更详细的查询。即使我们现有的报告无法直接使用，它也能提供一个初始的查询种子，我们可以基于此进行扩展，而不是从头开始构建。这有点像一个“fewot”（可能是指“few shot”或“few-shot learning”的口误），但在这个例子中，我们提供的示例非常接近我们期望得到的实际结果。然后，我们将其执行于数据库，并将结果拉取并推送到 BI 代理，由 BI 代理将其转化为**业务答案**，而不是简单地将数据返回给用户。这就是最终的答案。现在，显然有一个循环机制，如果我在同一个对话中，我可能在谈论相同的数据，所以我们不必一遍又一遍地重复这个过程。这三个组件，这三个代理中的每一个，都可以作为独立的产品进行打包并交付生产，对业务指标产生切实的影响。这就是这种方法的精妙之处：在我们产品化了这些组件中的每一个之后，我们都可以决定是停止还是继续前进。

<details>
<summary>Original English</summary>

If we can't find the report or if it's not exactly what we need to um to use, that's where we go to the SQL agent that basically tries to create a more um exact query or a more elaborate query. And even if the report that we have is not usable as is, it gives us that initial seed of a query that we can then expand on rather than having to build one from scratch. So it's kind of like a fewot uh example, but in this case the example that we give is very very close to the actual result that we're expecting to get. We then execute it against the database pull and push it into the BI agent which gen with which gen uh translate that to a business answer and not just dumping data back on the user and this is what goes into the final answer. Now there's obviously some kind of a loop that says if I'm in the same conversation I'm probably talking about the same data so we don't have to talk about this or do this again and again. Now each one of these three components, each one of these three agents can be packaged as its own product and delivered to production with a very tangible and actual impact on business metrics. Okay. And that's the kind of beauty of this uh approach that after we productize each one of these, we could have basically said stop or let's move forward.

</details>

### 量化成果与风险控制

我们来看一些关于这些成果的**具体数字**。仅仅是 RAG 代理，它负责拉取正确的报告，就使我们能够承担 BI 团队约 20% 的整体工作量。这些工作基本上就是“我们所做的就是将正确的报告分享给正确的人”。我们能够自动化其中大约 80% 的工作，而这涉及到一支 10 人的团队。所以，大约有两个人全职的工作就是找到正确的报告并发送给正确的人。通过学习如何通过 LLM 与数据交互，我们获得的元数据理解能力，使我们能够进行 A/B 测试，并在我们做的语义层项目中证明，再次向公司**高级领导层**证明，**丰富元数据**是有价值的，是可衡量的。我们通过运行一系列问题来实现这一点，这些问题针对的是拥有良好元数据和缺乏良好元数据的数据库。我们展示了当拥有正确的元数据时，LLM 的表现会好多少。这基本上证明了像“嘿，让我们把更多文档引入代码”这样可能很模糊的事情的价值。目前，我们正在试验**数据透视机器人**（Data Pivoting Bot）。也就是说，一旦你有了仪表板或报告，就能实时地改变时间范围、某些视图、某些细分和数据分组，而无需一个人为业务利益相关者完成这些。下一步是评估市面上可用的 GenBI 工具，例如 Databricks Genie。我们将进入一个更严格的流程，用元数据和文档来丰富我们的目录，这也会源于我们研究中获得的许多经验。所以，即使我们最终没有编写一个端到端的、功能齐全的 GenBI 代理，我们也已经从中获得了巨大的价值。这正是我们**高级领导层**能够季度又季度地持续投资这个项目的原因。

<details>
<summary>Original English</summary>

uh and just some giving bottom line numbers around some of these. So just the rag agent that pulls the right report uh allowed us to take about 20% of the overall capacity of the BI team that basically said uh all we do is just share the right report with the right person. So we were able to automate around 80% out of those uh 20% and we're talking about a team of 10 people. So roughly two people full-time job all they do is find the right report and send it to the right person. uh the metadata understandings that we got from learning how to interact with the data through an LLM allowed us to run AB test in a in the semantic layer project that we did and that allowed us to prove back again to the senior leadership in the company that there is value and tangible value measurable value in enriching metadata. And we did that basically by running uh a a battery of questions um against a database that had good metadata and one that didn't have good metadata. And we show how much better an LLM performs when having the right metadata in place. So basically proving the value of something that can be very fluffy like hey let's bring in more documentation into the code. Uh right now we're experimenting with the data pivoting bot. Uh so once you have a dashboard or a report be able to change the time horizon some of the views some of the segmentations and the groupings of the data again kind of real time without having a person do that for uh a business stakeholder and some of the next steps is really evaluating the tools that are out there for uh Genbi like data bricks genie for example and

</details>

### 未来展望与 SaaS 定价

最后，我想分享一些关于未来的想法。我们谈论了很多关于如何准备数据，我认为这将是市场上的一个巨大领域，将会有很多公司和工具帮助我们。构建非常具体的、任务特定的模型和应用程序。我认为将会有很多初创公司和公司在这个领域涌现。Copilot 正在确保我们满足用户的需求，让他们在他们所在的地方工作。模型的安全保障显然也是一个非常重要的问题。最后一件事，也是我想重点关注的，因为这是我几周前才有的一个新想法：在 Gen AI 时代，我们如何进行 SaaS 定价？这实际上是关于这样一个事实：**一个人的效率今天可以是过去的 10 倍**。那么，我们是按用户数（Seats）为软件定价，还是按使用量定价，或者按他们获得的价值定价？Salesforce 已经在进行这方面的实验。Salesforce 的 Data Cloud 产品开始按使用量定价，而不是按用户数定价。我认为这将对全球 SaaS 经济产生重大影响。它甚至不取决于产品本身是否是 Gen AI，关键在于使用该产品的人能做什么，以及他们在其他时间能做什么，以及按员工数量定价是否仍然有意义，或者按你拥有的员工能完成多少工作来定价。

<details>
<summary>Original English</summary>

we're going to go into a much more rigorous process of enriching our catalog with metadata and documentation and that's also going to come out of a lot of the learnings that we got from uh the research that we've done. So even if we don't end up writing a GenBI agent full-fledged end to end, we already got a lot of value back from this and this is really what allowed our senior leadership team to continuously invest in this project quarter over quarter. One thing that I want to wrap up with is just a couple of thoughts I had about the future. So um I think we talk a lot about how to prepare data. I think that's going to be a huge area in the market and they're going to be probably a lot of companies and tools that are going to help us with that. Uh building very specific task specific models and applications. I think a lot of startups and companies are going to come up from that area. Uh co-pilot is really making sure that we meet the users where they are. Uh and securing of models obviously a very big thing. The last thing is the one I the the one I want to focus on the most because that's kind of a recent thought that came to me a couple of weeks ago. How we do pricing of SAS in the Gen AI era. Uh this is really about the fact that one individual person today can be 10x more effective uh than they used to be in the past. And then do we price uh software based on seats or do we price software based on how much they used it or do we price software based on the value that they got out of it? Uh Salesforce is already experimenting with that. So that the data cloud product at Salesforce is starting to be uh usage priced and not seats priced. And I think this is going to have a big impact on just the uh kind of SAS economics worldwide. uh and it it doesn't even matter if the product itself is genai. It's really about what does the person using the product can do and what can they do in their other time uh and whether it still makes sense to price it by how many employees you have or how much work you get done with the employees that you have.

</details>

### 结语

这就是我，非常感谢大家的聆听，也感谢你们没有让我掉进活板门。

<details>
<summary>Original English</summary>

That is me and thank you very much for listening and thanks for not opening the door on me. >> [music] [music] >> Heat.

</details>