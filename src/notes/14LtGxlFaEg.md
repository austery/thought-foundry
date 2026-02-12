---
author: The MAD Podcast with Matt Turck
date: '2026-02-12'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=14LtGxlFaEg
speaker: The MAD Podcast with Matt Turck
tags:
  - agentic-workflow
  - workflow-automation
  - data-sovereignty
  - enterprise-ai
  - model-customization
title: Mistral AI 对战硅谷：主权AI的崛起
summary: 本次访谈中，**Mistral AI** 联合创始人兼CTO **Timothée Lacroix** 深入探讨了公司从开源模型提供商向全栈企业及主权AI解决方案提供商的演变。他详细介绍了**Mistral Compute**数据中心的建设、**Agentic工作流**在企业中的应用（如**CMA CGM**的集装箱放行自动化），并强调了**控制权**和**数据主权**对企业客户的重要性。**Lacroix**还分享了**Mistral AI**在模型训练效率、**后训练**、**多模态**能力以及**DevTool**和**OCR3**等产品上的进展，并展望了未来AI在企业中实现广泛**民主化**应用的图景，认为信任而非自主性是**Agent**成功的关键。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - Mistral AI
  - ASML
  - Nvidia
  - Google
  - Amazon
  - Microsoft
  - CMA CGM
  - Helsing AI
  - OpenAI
  - Anthropic
  - xAI
  - Meta
products_models:
  - Mistral 3
  - Mistral Large 3
  - Mistral Compute
  - Mistral AI Studio
  - DevTool
  - Vibe CLI
  - Magistro
  - OCR3
  - Voxil
  - Vertex AI
  - Amazon Bedrock
  - Azure Studio
media_books: []
status: evergreen
---
### 引言：Mistral AI 的演变

**Timothée Lacroix**: 我认为，一旦你不再受限于人类提问或阅读，企业对**Token**的需求和生成量将完全爆发。一旦你对**Agent**在后台运行有足够的信任，你就不再真正受限于**Token**的数量。我们使用的术语是“控制”。一旦部署，软件堆栈就掌握在我们的客户手中。他们拥有我们所做的模型更改。我认为，作为客户，考虑你的专业知识以及让你的公司有价值的东西仍然属于你，这一点非常重要。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: I think the expectation is that demand and amount of tokens generated for the enterprise will completely jump once you are not bound anymore by humans asking questions or reading them. As soon as you have enough trust to have agents running in the background, you're not really limited by the number of tokens. The term we use is control. The software stack once deployed is in the hands of our customers. They own the model changes that we make. And I think it's really important as a customer to consider that your expertise and what makes your company valuable stays yours.

</details>

**Matt Turk**: 大家好，我是**Matt Turk**。欢迎回到**Mad Podcast**。今天我们有一期特别节目，邀请到了**Mistral AI**的CTO兼联合创始人**Timothée Lacroix**。**Mistral AI**这家公司证明了可以用美国巨头一小部分的计算资源构建前沿模型。但最近，**Mistral AI**悄然发展成为一个更具雄心的全栈工业力量，不仅构建模型，还构建平台、部署堆栈，以及他们自己的大规模超级计算集群。我们在这期节目中涵盖了很多内容，包括**Mistral 3**背后的工程技术，主权**AI**在实践中到底意味着什么，以及**Tim**关于为什么信任对**Agent**比自主性更重要的逆向观点。如果你厌倦了**AI**炒作，**Tim**的务实态度令人耳目一新。请享受与**Timothée Lacroix**的精彩对话。

<details>
<summary>Original English</summary>

**Matt Turk**: Hi, I'm **Matt Turk**. Welcome back to the **Mad Podcast**. Today we have a special episode with **Timothée Lacroix**, the CTO and co-founder of **Mistral AI**, the company that proved that you could build frontier models with a fraction of the compute of the US giants. But recently, **Mistral AI** has quietly evolved into a much more ambitious full stack industrial power, building not just the models, but the platform, the deployment stack, and their own massive supercomputing clusters. We covered a lot of ground in this one, the engineering behind **Mistral 3**, what sovereign **AI** actually means in practice, and **Tim**'s contrarian view on why trust matters more than autonomy for agents. If you're tired of the **AI** hype, **Tim** is refreshingly nononsense. Please enjoy this great conversation with **Timothée Lacroix**.

</details>

**Matt Turk**: 嘿，**Timothée**，欢迎。

<details>
<summary>Original English</summary>

**Matt Turk**: Hey **Timothée**, welcome.

</details>

**Timothée Lacroix**: 嘿。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Hey.

</details>

**Matt Turk**: 所以，当我为这次访谈做准备时，我惊讶于**Mistral AI**在过去几个月里发生了这么多事情。我想大多数人可能都知道**Mistral AI**是开源模型的提供商。但你们似乎已经从一个**AI**实验室发展成为一个更专注于企业和主权客户的全栈解决方案提供商。所以，简单来说，在过去一年里，你们完成了由**ASML**领投的**17亿欧元**C轮融资，投后估值达到**117亿欧元**。你们发布了一系列模型，我们接下来会讨论。这一切背后的宏大愿景是，企业和主权国家将需要自己的**AI**基础设施，而**Mistral AI**将成为提供商，是这样吗？

<details>
<summary>Original English</summary>

**Matt Turk**: So, as I was prepping for this, I was struck by how much has been going on at **Mistral AI** over the last few months. I think most people probably know **Mistral AI** as a provider of open-source models. It seems that you guys evolved from an **AI** lab to more of a full stack solution focused on enterprise and sovereign customers. So just to set it up, in the last year you guys raised a **€1.7 billion** euros series C led by **ASML** at an **€11.7 billion** post-money valuation. You launched a bunch of models which we're going to talk about. Is the big vision behind all of this that enterprises and sovereign states are going to need their own **AI** infrastructure and **Mistral AI** is going to be the provider?

</details>

**Timothée Lacroix**: 嗯，宏大愿景一直在演变。正如你所说，我们最初是一家构建模型的公司，因为我和**Arthur**、**Guillaume**一开始就知道如何做这件事。我们构建**Mistral AI**的前提是立即解决企业需求，我们从**开源模型**开始。在此之后，在与企业合作的过程中，我们意识到需要基本上是堆栈的其余部分。所以我们构建了服务平台，因为基础设施是必需的。然后，我们发现所有围绕它的工具也是缺失的。除了工具，它还需要大量的工作和专业知识才能深入企业工作流，真正帮助实现转型。因此，我们构建了**FDE**功能，最近，通过**Mistral Compute**，我们也深入到了堆栈的更底层。我们之所以做所有这些，是因为企业成功需要这些，同时我们仍在继续我们的模型之旅。所有这些堆栈都是模块化的，这对我们来说非常重要，因为它让企业和我们的客户可以完全控制他们决定拥有和控制堆栈的哪些部分，这些部分可能更复杂，或者他们决定使用无服务器的方式，基本上就是我们喜欢的这种模块化。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Uh so the big vision has been evolving and as you stated we started uh as a company that built models uh because with **Arthur** and **Guillaume** this was what we knew how to do at the start. The premise on which we built **Mistral AI** was immediately solving for enterprise needs uh and we started with open weights model. After this uh and working with enterprise we realized uh the need for basically the rest of the stack. So we built uh the serving platform because infrastructure was needed. Um and then all of the tooling around it uh was also something that we saw was missing. More than the tooling, it also requires a lot of work and expertise still to get deep into uh an enterprise workflows and really help that transformation. And so we built that uh **FDE** function and more recently uh with **Mistral Compute** uh we're going a bit lower uh in the stack as well. So we've done all of this uh because it was required for enterprise success uh while still continuing uh on our models journey. All of this stack uh being modular is really important to us as it gives full control to enterprise and our clients as to which part of the stack they decide to uh own and control which is maybe more involved or that they decide to have serverless or basically this modularity that we like.

</details>

### Mistral Compute：自建数据中心

**Matt Turk**: 好的。那么，让我们按顺序讨论一些模块化组件。我们从**Mistral Compute**开始。这是一个重大的发布，我想是在2025年6月，与**Nvidia**建立了重要的合作伙伴关系，以协助这项工作。目前进展如何？它已经上线了吗？你们正在建设中吗？你们是如何在欧洲建设或利用数据中心的？

<details>
<summary>Original English</summary>

**Matt Turk**: All right. So let's take some of those modular components uh in in order. Let's start with **Mistral Compute**. So that was a big announcement uh I guess in June of 2025 putting a big partnership with **Nvidia** to um help with this effort. Uh what's the current status? Is that live yet? Are you building it? You know, how does one go about building data centers or or leveraging data centers in Europe?

</details>

**Timothée Lacroix**: 也许首先要谈谈我们决定开始建设自己的数据中心的原因。多年来我们尝试了许多不同的合作伙伴，我们意识到我们对大规模训练的**AI**计算的使用不一定被许多提供商很好地理解，我们对稳定性的需求，尤其是在几块**GPU**上运行推理，或者在数百块**GPU**上运行小规模训练时，错误容忍度要比在数千块**GPU**上同时运行训练时大得多。因此，为了满足这种对稳定性的需求，我们看到了一个方法，即基本上建设我们自己的数据中心，并根据我们对质量的理解来维护它。这就是我们推出**Mistral Compute**的原因。当我们决定这样做时，我们也意识到也许其他人会从中受益。我们启动了一个比最初计划更大的开发项目。所以，正如你所说，这在6月宣布，从那时起，设施的建设进展顺利。它位于巴黎南部，我们现在正在进行第一批的稳定化工作。这是一个相当大的数据中心，所以交付不是一天就能完成的。我们正在处理这个数据中心的第一部分。我们有一些任务正在运行，我们正在微调所有最后的工作，以确保高速和正确的稳定性。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Maybe first to go into the reasons uh why we decided to start building our own data centers. Uh we tried uh a lot of different partners over the years and we realized that our use uh of the **AI** compute for large scale training was not necessarily well understood by a lot of providers and our uh need for stability especially like when you run inference on a few **GPU**s or when you run small scale trainings on a hundreds of **GPU**s margin for error is a lot larger than when you run trainings on uh thousands of **GPU**s at the same time. And so to address this need for stability, we saw a way for us to basically build our own data centers and maintain it with our understanding of what quality looks like. And so that was why we uh launched **Mistral Compute**. And when we decided to do it, we also realized well maybe others will benefit from it. We launched into uh a bigger uh basically development than what was previously intended. And so this was announced in June as you said since then the building of the facility has progressed quite well. It's in the south of Paris and we are right now running through the stabilization uh stabilization of the first trench. Uh so it's uh quite a large data center so delivery doesn't happen in one day. And the first part of this data center is something that we are working on as we speak. We have a few jobs running and we're fine-tuning uh basically all of the last uh things uh to run at speed and with the right stability.

</details>

**Matt Turk**: 好的，太棒了。我理解得对吗，它将用于你们客户和你们自己的训练需求，但你们也会将其作为服务提供给欧洲及其他地区的其他人？

<details>
<summary>Original English</summary>

**Matt Turk**: Okay, great. And uh did I understand correctly, it's going to be for your customers and your own needs uh around training, but also you'll be providing it as a service to others uh in in Europe and beyond.

</details>

**Timothée Lacroix**: 是的，没错。所以我们将把一部分容量用于我们自己，作为我们的一个训练集群，但我们也会在其之上提供托管的**Kubernetes**和托管的**Slurm**堆栈。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Yeah, exactly. So we will use part of that capacity for ourselves as one of our training clusters but we will also provide a managed **Kubernetes** and managed **Slurm** stack on top.

</details>

**Matt Turk**: 好的。目前有什么经验教训吗？我的意思是，正如你所说，你们在**AI**和**AI**研究方面有着非常深厚的背景。但建设一个完整的数据中心设施是完全不同的事情。你们是如何做到的？有什么让你们感到惊讶的事情吗？有什么经验教训吗？

<details>
<summary>Original English</summary>

**Matt Turk**: Okay. Any uh lessons learned so far? I mean as you said you guys come from a very deep background in in **AI** and **AI** research. It's a whole different thing to build a whole like data center facility. How have you gone about it and uh what are some things that that surprised you and any lessons so far?

</details>

**Timothée Lacroix**: 作为一名创始人，大多数新经验都是我依赖他人的知识。所以我很幸运能有一些经验丰富的**HPC**专家，以及许多云软件专家来构建这个解决方案。对我个人而言，这也是我喜欢在**Mistral AI**担任这个职位的原因之一，那就是我能发现这么多新事物，以及这么多我以前认为不可能的新问题。我必须学习如何建设数据中心的所有不同部分，所有需要协调的不同行业，以及所有不同行业之间潜在的同步。我的意思是，这是一个巨大的建筑，涉及数百人。当你把东西搭建起来时，你必须质疑什么有效。你必须筛选出有故障的刀片。这完全是一个新的工作领域，我可以看到该领域的专家们如何处理问题，并试图向我解释他们的日常工作。看到一个领域的专家做一些你不知道如何做的事情总是令人着迷。我认为它的物流和时间线也与我通常在软件和研究中处理的不同。要建设新的容量，你必须计划好能源供应，你必须计划好空间可用并按时完成。所以这比一些软件功能需要更多的长期规划。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: As most uh new experiences as a founder, I relied on the knowledge of others. Uh and so I was uh lucky to have a very a few seasoned uh **HPC** experts uh and and a lot of uh cloud software experts as well to build that solution. For me personally, and it's one of the things I love about uh my position at **Mistral AI** is that I get to uh discover so many new things uh and so many new problems I hadn't thought possible. Having to learn to like all of the different parts of building a data center, all of the different trades that you have to coordinate, uh all of the potential um synchronization uh between all of the different trades. I mean, it's a huge building. It involves hundreds of people working on it. You have this then when you uh stand up the thing, uh you have to question what works. You have to filter through the blades that are faulty. It's just an entire new area of work where I get to see um experts in their field go through things and try to explain to me what their daily work is. It's always fascinating to see um an expert in his field like do something that you don't know how to do. I think the logistics of it uh and the timelines are also quite different from what I'm usually um dealing with in software and research. For new capacity to uh be built, you have to plan around uh having energy available, you have to plan for the uh space to be available and on time. And so it's a lot more long-term planning than a few software features.

</details>

**Matt Turk**: 既然你提到了能源，你们是如何解决供电问题的？

<details>
<summary>Original English</summary>

**Matt Turk**: How do you guys go about power since you mentioned energy?

</details>

**Timothée Lacroix**: 到目前为止，我们在欧洲所做的事情并没有遇到巨大的障碍，尽管存在一些限制。我认为欧洲各地电网的扩展性不一定很好。我知道这在法国是一个问题。很多站点都在争夺资源。所以我们会看看它如何发展。我们很幸运在欧洲拥有非常清洁和负担得起的能源，无论是北欧的绿色能源还是法国的核能。所以到目前为止对我们来说还算可以。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: In what we've been doing in Europe so far hasn't been a huge blocker, although uh there is constraint. Uh I think the grid in various parts of Europe is not uh necessarily easily extensible. I know it's uh an issue in in France. A lot of the sites are uh contended. Um so we we'll see how it all develops. We are lucky in Europe to have uh very uh clean and affordable energy uh either with uh green energy in the Nordics and nuclear in France. So it's it's been relatively okay for us today.

</details>

### 竞争格局与效率策略

**Matt Turk**: 正如你所描述的，我想到的是美国在数据中心方面投入的巨额资金。你们是如何从融资角度来处理这个问题的？也许更进一步，如果你考虑全球大型**AI**实验室之间的竞争，无论是**OpenAI**和**Anthropic**，还是**xAI**，似乎所有这些公司都与某个巨大的资金池有关，显然还有**Gemini**和**Google**，以及**Meta**。我只是好奇，你们在这方面处于什么位置？你们与**SAP**和**Nvidia**有很多合作关系，但你们的股东名单上没有那些巨头公司。那么，你们是如何在这种大背景下考虑竞争的？

<details>
<summary>Original English</summary>

**Matt Turk**: As you describe this uh what comes to mind is the gigantic amounts of money that are being invested in the US around uh data centers. How do you guys uh go about that from a financing standpoint and and perhaps even more taking a step back if you think about the race between the big **AI** labs globally whether that's you know the **OpenAI**s and **Anthropic** of the world and and **xAI** uh it seems that all of them are affiliated with a gigantic pocket of money somewhere obviously there's **Gemini** and **Google** to add to the list and and **Meta** I'm just curious like how where do you guys stand on on that you have a bunch of partnerships with um **SAP** and **Nvidia** but there is you don't have one of those gigantic companies on your cap table. So how do you how do you think about uh competing in that general context?

</details>

**Timothée Lacroix**: 所以对于那些公司，也就是超大规模公司，这场游戏有两部分，我们与他们很好地玩转了合作部分，我们已经整合到**Google**的**Vertex AI**、**Amazon Bedrock**和**Azure Studio**中，这是我们在获取巨额资金方面所做的选择。我们从一开始就专注于效率。我认为我们在构建模型方面做得很好，这些模型在我们的投入下具有竞争力。对我们来说，尽可能高效地建设公司很重要。我深信，凭借我们今天在模型中拥有的能力，企业中还有很多有待解锁的东西，以至于我认为我今天的主要精力不会放在追求**千兆瓦**的电力上。我们仍然需要与客户一起构建很多东西，并利用我们现有的能力解锁很多价值。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: So with those uh companies, so the hyperscalers, it's um there are two parts to the game and we've played the partnership uh part quite well with them and we're integrated within **Google**'s **Vertex AI** uh **Amazon Bedrock** and uh **Azure Studio** and that is uh the choice that we've made in term of having access to uh gigantic pockets of monies. We've been focused on efficiency from the start. Uh and I think we've done quite well at building uh models that are uh competitive with the uh investments that we've uh put in. For us, it's important to build uh the company as efficiently as we can. Uh and I deeply believe that with the capabilities that we have today in the models there is so much to be unlocked uh in enterprise that um I I don't think my main focus uh today would be into going into the gigawatts of power we still need to build uh so much with our clients and unlock so much values with the capacities that we have.

</details>

### 企业级AI部署与定制化

**Matt Turk**: 好的，那么让我们深入探讨所有这些的企业现实。如果我是一家企业或一个主权国家，我想部署一个**Mistral AI**的开源模型，那么现在，凭借你们所构建的一切，我该怎么做呢？

<details>
<summary>Original English</summary>

**Matt Turk**: All right so let's go into uh the enterprise reality of all of this um so if I'm an enterprise or if I'm a sovereign and I want to deploy a **Mistral AI** open-source model what is it that I do these days with everything that you that you've built?

</details>

**Timothée Lacroix**: 我们与企业合作的方式，正如你所提到的，我们有一些开源的**Apache**模型，我们所有的客户都可以根据需要使用它们。我们在成功方面看到的是，鉴于当前的堆栈，它仍然需要大量的专业知识来管理，才能实现实际价值并投入生产。基本上，我们互动的方式是，我们通常会搭建我们的**Mistral AI Studio**，这是我们的平台，我们可以在客户选择的部署方法上部署我们所有的堆栈。所以它可以在本地，可以在他们的**VPC**上，可以在多个地方。我们这样做的原因是，它让客户可以在他们数据所在的地方进行构建，而无需四处移动东西，作为CTO我了解到，这是你永远不想做的事情，因为它会引发很多问题，而且压力很大。所以一旦部署完成，我们就会与业务部门合作，了解他们的痛点在哪里。有时是知识管理，我认为这是企业界外部最知名的用例，但它也围绕着自动化企业的核心工作流。你知道，有些工具是你意想不到的，我们做的一件事是关于代码现代化，你可以把一堆**Excel**表格变成一个实际的**Python**应用程序。如果你有很多这样的表格，那么你可能想用**AI**来做这件事。所以一旦基础设施建成，我们基本上就会寻找对客户最有价值的东西，然后我们开始在一个**AI资产**堆栈中积累价值，然后加速与该客户的所有其他开发。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: The way we work with um enterprise I mean as you mentioned like we have a few of our models that are open source and **Apache** and all of our clients are welcome to use them uh as they need what we have seen in terms of success is that given the current stack It still requires um a lot of expertise uh to manage to come to um actual value and um and things that go to production. Basically the way we interact is that we usually stand up our um **Mistral AI Studio** which is our platform and we can deploy uh all of our stack on the client's choice uh of deployment methods. So it can be on prem uh it can be on their **VPC** it can be on uh in several places. The reason we do this is that it lets uh clients build where their data is uh and without having to shuffle things around which as I've learned as a CTO is something that you don't want to do ever because it asks it raises a lot of questions uh and it's uh quite a stressful thing to do. So once this is deployed uh we then uh work with the business units to understand where their pain points are. Sometimes it's knowledge management and I think it's the most well-known uh use case from the output from the outside of the enterprise world but it's also around um automating core workflows for the enterprise. Um it's you know some tooling that you wouldn't expect where one thing that we've done is around code modernization uh where you you turn a bunch of **Excel** sheets into an actual like **Python** app. Uh and if you have many many of those sheets then potentially you want to use **AI** for this. So once the infrastructure is built then we basically look for what's the most valuable to the customer and we start accruing value uh inside a stack of **AI assets** that then accelerates all of the other developments with that customer.

</details>

**Matt Turk**: 那么，这是否意味着你们会在客户那里为他们做实际的模型工作，特别是**微调**？

<details>
<summary>Original English</summary>

**Matt Turk**: And is part of the idea is that you do actual model work at the customer and for the customers in particular fine-tuning.

</details>

**Timothée Lacroix**: 是的，我们以各种方式进行定制。我们已经进行了持续的预训练，这在你想要更深入地改变模型能力时最有用。所以我们这样做有时是为了改变模型中语言的混合，以获得在东亚语言方面表现更好的模型，例如，或者如果你的内部数据（在公共网络上不存在）是如此新颖，你需要大量的**Token**才能让模型理解并流利地使用它，那么你可能需要这样做。所以我们进行这些持续的预训练和**微调**。我们还喜欢，这更多是出于效率原因。当你使用较小的模型时，你必须做出权衡。这些模型在世界知识方面不会那么好。所以当你失去很多东西时，你必须专注于你真正关心的事情。因此，如果你想要真正快速、真正便宜、在特定任务上表现非常好的模型，这通常很重要。如果你想要在**边缘**运行的非常小的模型，这也很有用。所以对于所有这些，**微调**是首选工具。**微调**的另一个原因。它可以适应不一定海量但也不在网络上可用的数据。所以通常在编码中，你会拥有有时积累了数十年的海量代码库，模型需要能够处理这些代码库，通常是在其上部署**Vibe**。因此，能够进入，不移动代码库，并为该代码库学习一个实际的**编码Agent**，也确实非常强大。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Yes, we we customize in various ways. Uh so we have done continued pre-training and this is most useful when you want to uh change the capabilities of a model uh more deeply. So we've done this to sometimes change uh the mix of languages in a model to get something that's a lot better at East Asian uh languages for example or you could have require this if your internal data uh which doesn't happen on the public web is something that's so new uh that you need a large amount of to of tokens uh to get a model that understands it and becomes fluent with it. So we do uh these kinds of continued pre-training fine-tuning. We also um like and this is more for an efficiency reason. When you get to smaller models, you have to make trade-offs. Uh the models won't be as good in their knowledge of the world. And so when you lose uh a lot of things, you have to focus on what you really care about. And so this is typically important if you want really uh fast, really cheap uh models that will be really good at a specific task. It's also useful if you want models that run on the **edge** uh that get very very tiny. Uh and so for all of these fine-tuning is a tool of choice. Another uh reason to do fine-tuning. It can be to adapt to uh data that's not necessarily massive but that's also not available on the web. So typically in coding uh what happens is that you will have massive code bases sometimes accrued over decades uh that the model will need to be able to uh work with in terms of uh having like **Vibe** uh deployed on it typically and so being able to come in not move the code base and uh learn an actual **coding agent** for that codebase is really powerful as well.

</details>

**Matt Turk**: 谁来做所有这些工作？你们已经发展成**FDE**模式。

<details>
<summary>Original English</summary>

**Matt Turk**: And who does the all of this you have evolved towards an **FDE** model.

</details>

**Timothée Lacroix**: 所以我们确实有一个庞大的**FDE**部门。它是软件和**FDE**的混合体，我们将**FDE**分为我们所说的**AI工程师**和**应用科学家**。因此，**应用科学家**将倾向于使用我们刚才讨论过的工具，比如**微调**、持续预训练等，而**AI工程师**将更专注于适应企业环境，并找出要自动化的工作流等等。他们与客户合作，确保用例确实提供价值并投入生产。但这也是我们了解企业环境中什么重要以及更快地构建正确平台的绝佳方式。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: So we have indeed a large uh **FDE** section. It's it's a mix of software and uh **FDE**s and we split our **FDE**s into what we called um **AI engineers** and **applied scientists**. Um and so uh **applied scientists** will tend to use the tools that we've just uh uh talked about. So fine-tuning, continued pre-training and the likes where **AI engineers** will focus more on adaptation to the enterprise environment and figuring out what workflows to automate and all of this. They work with the customers to make sure uh that the use cases are indeed providing values and going to production. But it's also a fantastic way for us to understand what matters in an enterprise context and be faster at building the right platform.

</details>

**Matt Turk**: 再次强调，这些客户是那些对定制化和隐私至关重要的客户。你们如何再次定位**OpenAI**等公司，它们也在大力进军企业市场？这关乎**数据主权**吗？还是定制化？

<details>
<summary>Original English</summary>

**Matt Turk**: And uh again those customers are the kind of customer for whom customization and privacy is essential. Uh how do you how do you position again **OpenAI** of the world that are going very hard at the enterprise? Is that data sovereignty? Is that customization?

</details>

**Timothée Lacroix**: 我们使用的术语是“控制”。我们看到的价值在于我们的专业知识和我们提供的软件堆栈。一旦部署，软件堆栈就掌握在我们的客户手中，他们可以更改它，可以添加它。他们拥有我们所做的模型更改，我认为作为客户，考虑你的专业知识以及让你的公司有价值的东西仍然属于你，这一点非常重要。因此，与我们合作并进行构建，因为今天构建**AI**优势需要付出努力，所以将这些努力构建到你拥有的东西中，我认为这是一个明智的选择。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: The term we use is control. The value that we see is both in our expertise and the software stack that we provide. The software stack once deployed uh is in the hands of our customers and they can change it, they can add to it. They own model changes that we make and I think it's really important as a customer to consider that your expertise and what makes your company valuable stays yours. And so in working with us and building uh because it takes effort uh to build an **AI** advantage uh today and so having this effort built into uh something that you own is I think a choice that makes sense.

</details>

### Agent与工作流自动化

**Matt Turk**: 让我们谈谈**Agent**，它显然是**Mistral AI**整体工作的一部分。它是如何运作的？你们如何构建一个**Agent**？到目前为止，你们看到了哪些关键用例？

<details>
<summary>Original English</summary>

**Matt Turk**: Let's talk about uh agents uh obviously part of the overall effort at **Mistral AI**. How does that work? Uh how do you uh build an agent and uh what key use cases have you seen so far?

</details>

**Timothée Lacroix**: 我个人认为我已经从**Agent**转向了**工作流**，这可以说是一种更上层的抽象。所以**Agent**我认为是构建模块，你有一个预期的输入，一套工具，你正在尝试达到一个目标。我们启用的输入集包括图像、文本和音频。当你构建一个**Agent**时，对我来说，重要的是你将其构建在一个集中的任务上，使用你理解并可以迭代和改进的数据集。我们在企业中很少看到通过**Agent**解决的问题，因为这不一定是你会期望**FDE**最有用的地方。这些理想情况下应该由客户直接在我们的平台上构建。更有价值的地方在于更复杂的工作流，你将有多个**Agent**通过一个工作流进行交互，以自动化一些稍微复杂的事情。所以这就是我们一直关注的。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Personally, I think I've moved uh from agents to uh workflows, which is I guess an abstraction uh on top. Um so agents are I think the building blocks uh where you have a given expected input, a set of tools and you are trying to reach a uh set of uh you have a goal that you want to reach. The set of inputs uh that we've enabled are um images, text uh and audio. When you build an agent, to me it's really important that you build it on a focused uh task with a data set that you understand and that you can iterate on and that you can improve. What we see in enterprise is rarely things that are solved with agents because that's not necessarily where you would expect uh an **FDE** to be most useful. Those ideally would be built uh on our platform by the customers directly. Where there is more values value is in uh more complex workflows where you will have several uh agents interact through a workflow to automate something slightly more complex. And so that's what we've been focusing on.

</details>

**Matt Turk**: 有什么例子吗？

<details>
<summary>Original English</summary>

**Matt Turk**: What would be an example?

</details>

**Timothée Lacroix**: 一个例子是我们与航运公司**CMA CGM**合作构建的，我们自动化了集装箱放行流程。这是一个用例，我不知道你对航运有多熟悉，我一开始也不熟悉。但一个集装箱到达港口，你必须做出一些决定，这个集装箱可以放行给下一个处理这个集装箱的人。因此，在做出决定之前，需要运行大量的检查并访问后端数据。所以你可以想象，其中一些集装箱价值极高，你真的不能犯错。所以我们在这种情况下所做的是一个应用程序，它集成到这些港口工人的工作方式中，它自动化了他们检查数据的大部分手动工作，然后他们根据所有证据做出最终决定。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: An example is something that we've built uh with the shipping company **CMA CGM** where we've automated the uh container release process. Uh and so it's um a use case where I I don't know how familiar you are with shipping. I wasn't at first. Uh but a container reaches a port and you have to uh harbor uh probably in English. Some decision has to be made that this uh container is ready for release to the uh next person on on the line to handle this container and so there are lots of uh checks uh that need to be um run and data to be accessed in the back end uh before that decision is made. So as you can imagine, some of those containers are extremely valuable and you can't really afford a mistake. And so what we've done in this case is an application that's integrated into um how these uh harbor worker work and it automates a lot of the manual work that they did to check the data and they make the final decision uh given all of the evidence.

</details>

**Matt Turk**: 好的，这非常有趣。显然，如今关于**Agent**的关键问题，特别是当它们组合成**工作流**时，是关于**自主性**的问题。你们是如何看待这个问题的？在你们的部署中，这些**Agent**的自主性有多高？

<details>
<summary>Original English</summary>

**Matt Turk**: Okay, this is super interesting. Obviously the the key question about agents these days especially when they are combined into workflows is the question of uh autonomy. How do you guys think about it? How autonomous are those agents uh in in your deployments?

</details>

**Timothée Lacroix**: 我不知道这是否是我思考问题的方式。对我来说，更好的问题通常是你对**Agent**的信任程度，这有几个维度。在构建这类**工作流**时，我担心的是，如果你想积累价值，如果你想更快地构建，你构建的**工作流**越多，你就会想要重用资产并让其他人可以重用它们。一旦你对**Agent**这样做，你就会开始问这个问题：这个**Agent**有权访问一些特权数据，但也许另一个**Agent**正在将其发布到公共领域。你可能会有治理方面的担忧，例如某个**Agent**正在处理非常关键的事情，而你不一定知道它获取的数据是否经过批准等等。这确实是一种新的开发方式，你的**工作流**的各个部分都必须是可信的。要使每个部分都可信，需要大量的工具和大量的可观察性，才能获得信心并基本上在企业中大规模实现这一点。所以你问的关于**自主性**的问题，对我来说，这是我在编写代码时看到发生的事情。当然，更长时间运行的任务以及改进这些任务将是至关重要的，我们每天都在为此努力。但今天，我们在软件方面解决的问题实际上是如何信任你所构建的东西以及如何改进它。以及如何让整个公司充满信心地在其之上进行构建。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: I don't know if it's the way I think about it. To me the better question usually is how much you trust uh the agents and there are a few dimensions uh around this. What worries me when building those kind of workflows is that typically if you want the value to accrue and if you want to build faster and faster the more workflows that you build, what you will want to do is uh reuse assets and make them reusable by others. Uh as soon as you do this with agents, you then start to ask the question, well this agent has access to some data that is privileged uh but maybe this other agent uh is publishing it to something that's public. You might have governance concerns where uh some agent is acting on something very critical and you don't know necessarily that the data that it got uh has been approved or something like this. It's really a new way to develop where uh the parts of your workflows have to be trusted. Each of them to be trusted requires uh quite a lot of tooling uh and quite a lot of observability uh to get confidence and to basically enable this at scale in an enterprise. So the question that you're asking about autonomy to me this is something that I see happening when I vibe code. Sure like longer running tasks and making and improving on this is going to be critical and we're uh working on it daily. But today, the problems that we're solving on the software side of things are really about how you trust what you've built and how you improve it. Uh, and how you allow an entire company to build on it with confidence.

</details>

**Matt Turk**: 也许可以描述一下你们在**Mistral AI Studio**中围绕治理、可追溯性和注册表等构建的一些东西。现代**Agent**套件的关键组件是什么？

<details>
<summary>Original English</summary>

**Matt Turk**: Maybe describe some of the things that you guys have built in studio around governance as you mentioned and trackability and uh registry all the things. What what are the key components of an a modern agent suite?

</details>

**Timothée Lacroix**: 正如我所提到的，**工作流**是我们与客户合作了很多的东西，它还没有正式发布。所以请在未来某个时候关注它，但这也是与企业合作的好处之一，我们可以有很多设计合作伙伴，一旦我们对解决方案有信心，我们就会正式发布它。所以**工作流**解决方案至关重要。**工作流**是建立在各种模型能力之上的。所以视觉、音频、文本和**推理**。拥有连接器和**MCPS**的注册表很重要。因此，为此我们有我们的连接。可观察性是我们仍在努力的领域。对我来说，能够迭代并精确定义**Agent**做什么，控制它的每个目标，并查看它的进展，能够维护评估并在此基础上进行构建，这很重要。在这种复杂的海洋中，困难在于你还必须维护适当的**版本控制**和**标记**，并考虑如何部署和改进你所构建的东西。所以假设你基于**Mistral AI**过去发布的大量**Agent**和模型构建了一个很棒的**工作流**。然后几个月过去了，有了一批新的模型。也许你可以简化那个**工作流**。也许下一个**Mistral 4**足够好，你可以淘汰一些**Agent**。基本上，你需要能够做的是创建一个新的**Agent**，在相同的输入和输出集上运行它，并控制你没有破坏任何东西，然后将其部署到实际环境中。所有这些软件套件，基本上是多年来为软件开发构建的，我觉得它在**AI**世界中还没有到位，而这正是我们正在构建的。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: So workflows as I mentioned is something that uh we've worked a lot on uh with our customers and it's not GA yet. Uh so look out for this uh sometimes in the future but it's also one of the benefits uh of working with enterprise we can um have a lot of design partners and once we're confident uh with the solution uh we we make it G. So a workflow solution is critical. Workflows are built on various uh model capabilities. So vision, audio and text and reasoning. It is important to uh have a registry of uh connectors and **MCPS**. Uh and so for this we have uh our connections. The observability is an area where we're still working on. Um it's important for me to be able to iterate and really define uh precisely what an agent does and control each of its goal uh and see how it's progressing um being able to maintain evaluations and uh build build on them. What is um difficult in this entire sea of complexity is that you also have to maintain proper versioning and tagging and think about how you're going to deploy and improve uh upon what you've built. So let's say you've built a kickass workflow based on a lot of agents and models that **Mistral AI** has released in the past. Then a few months pass and there are new sets of models that are out. Maybe you can simplify that workflow. Maybe the next uh **Mistral 4** is good enough that you can factor out a few agents. Basically, what you need to be able to do is create a new agent, run it on the same set of inputs and outputs and control that you haven't broken anything and then deploy it in the wild. All of this software uh suite basically which has been built for software development over years I feel it isn't there yet uh in the **AI** world and that's what we're building.

</details>

**Matt Turk**: 我相信你已经看到了，在过去几周里，在初创公司和风险投资圈子里，**上下文图谱**作为一种基础设施的概念广为流传。这是你们正在考虑的事情吗？或者说，这是一个可以让你知道**Agent**如何做出决策以及这些决策之间如何关联的层级吗？

<details>
<summary>Original English</summary>

**Matt Turk**: As I'm sure you've seen there was uh for the last few weeks in startup and venture circles there's been this whole idea of the **context graph** as an infrastructure that made the rounds. Is that something that you think about or a layer that would basically uh enable one to know how the agents made a decision and how those decision relate to one another?

</details>

**Timothée Lacroix**: 我确实看到了这一点，我认为这个讨论有两个层面。你最后提到的那部分，即了解**Agent**如何做出决定或采取行动是很有趣的。在那个讨论中，当我们谈论理解**Agent**如何做出决定或采取行动时，真正的关键是理解人类**Agent**是如何做出这个决定的。这是理解一个企业如何运作，这当然很有趣。让我夜不能寐，我真正想首先解决的是收集一个可用的企业上下文的基本想法。现在，使用任何模型，并付出大量努力，你将能够获得一些工具连接，你将提出问题，你的**Agent**将做一系列事情。它会意识到，哦，通过进行五次**API**调用和三次连接，我可能可以立即得到**Timothée**所要求的东西。应该发生的是，所有这些发现和所有这些智能都应该存储在某个地方以便重用。事情并不是这样发生的。这只是关于公司基础设施的基本知识。所以要知道表格在哪里，它们包含什么，它们如何连接。所以所有这些计算都应该基本上摊销，对我来说，这才是**上下文引擎**（我们内部称之为）的全部意义，即建立一个随着时间的推移，公司知识和**Agent**可用的上下文能够积累和维护的设置。关于“那个决定是如何达成的？”的次要问题，当然，它会非常有趣，也很重要，但现在，我觉得我们甚至还没有到一个企业中的任何员工都能轻松构建一个能够访问正确上下文的**Agent**的地步。要实现这一点，你会有巨大的**数据隐私**问题。如果你想让它高效，你需要让**Agent**系统访问你企业的全部数据。而且到处都会有**RBAC**，你需要确保这是安全的。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: I've seen this indeed and I think there are two uh levels to that discussion. The part that you mentioned at the end where uh it's interesting to know how an agent came to so in that discussion when when we talk about understanding how an agent came to a decision or an action the game is really to understand how a human uh agent really made this decision. It's understanding how an enterprise does what it does and it's certainly interesting. Uh what keeps me up at night and what I really want to solve first is just the basic idea of gathering a workable enterprise context. Right now uh with uh any model uh and with a lot of effort you will be able to get some connections to tools and you will ask a questions and your agent will do a bunch of things. It will realize that oh by doing five **API** calls and three joins I can probably get uh what **Timothée** asked immediately what should happen is that um all of that uh discovery and all of that intelligence should be stored somewhere to be reused. It's not really how things happen. It's just basic knowledge uh about what the infrastructure of the company is. So knowing where the tables are, what they contain, how they're joined. So all of this um is compute that should be amortized basically and to me it's really the entire game with the **context engine** as we call it internally is to um be in a setup where over time knowledge of the company and the context that's available to the agent uh accrue and is maintained. The second order thing of oh how was that decision reached? Sure. Uh it's going to be super interesting and it's important, but right now I feel we're not even in a place where it's easy for an enterprise to have any worker uh in it be able to build an agent that has access to the right context. For this to happen, you have huge uh **data privacy** concern. If you want this to be efficient, you need to give access to uh the agent system to the entire uh data of your enterprise. And there is going to be **RBAC**s everywhere and you need to make this safe.

</details>

### 企业级生成式AI部署的现状与未来

**Matt Turk**: 谈到这一点，从你的角度来看，企业部署**生成式AI**的现状如何？听起来你有些担忧，因为我们很早就开始。

<details>
<summary>Original English</summary>

**Matt Turk**: Speaking of which, what what's current reality of enterprise deployments of of generative **AI** from your perspective? Just listening to like some of the concern like since like we very early.

</details>

**Timothée Lacroix**: 对我来说，我们仍处于构建阶段，我认为这对企业来说有点令人沮丧，因为当你接触到聊天助手时，你觉得它很神奇，一切都会奏效，但就像生活中大多数有价值的东西一样，要实现它们仍然需要付出努力。所以**AI**的大部分企业价值将在你完成第一个构建阶段，即设置所有机器之后才会实现。你必须设置所有的连接。你必须让所有这些数据可用。现实是，即使最近做了很多工作来让企业中的数据更容易获取，它仍然无法以我们所需的格式和规模轻松获取，以实现**AI**的真正**ROI**。所以当我们进入时，仍然有那个工作阶段，只是连接一切，然后才能在其之上进行构建。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: To me we are still in the building phase and I think it's kind of the frustrating thing for enterprise is that when you come to um a chat assistant you feel that it's it's magic and it's all going to work but as most things that have value in life there is still work to be done uh to get to them and so most of the enterprise value of **AI** will happen once you've gone through that first building phase of just setting up all of the machinery. You've got to set up all of the connections. You've got to make all of that data available. And the reality is even despite a lot of work recently to make data more available in enterprise, it's still not easily available in the format and at the scale that we need uh for the true **ROI** of **AI** to to happen. And so when we come in uh there is still that phase of work that is uh just work uh to connect everything and then be able to build on it.

</details>

**Matt Turk**: 那么你认为**生成式AI**在企业中真正部署还需要几年时间吗？

<details>
<summary>Original English</summary>

**Matt Turk**: So do you think we are years away from generative **AI** actually being deployed in the enterprise?

</details>

**Timothée Lacroix**: 不是几年，我想是一年。公平地说，我们公司两年前才开始运作。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Not years uh I think years singular uh it's uh also to be fair to us we've started working I mean the company started two years ago and so most of our uh.

</details>

**Matt Turk**: 这是一个很好的提醒，对吧？这是一个很好的提醒，你们已经做了所有这些，而公司是在2023年6月成立的，如果我没记错的话。

<details>
<summary>Original English</summary>

**Matt Turk**: It's a good reminder right it's a good reminder that like you guys have have done all of this and the company was started in yeah June 2023 right if I recall.

</details>

**Timothée Lacroix**: 是的，所以对于我们的大多数客户，我们最近才开始与他们合作。对所有人来说，工具仍在起步阶段。所以我希望工具能够稳定下来，我希望我们能实现真正的价值。对我来说，真正的价值是，我们已经完成了第一个构建连接的阶段，现在该企业的员工能够使用我们构建的一切。现在，我认为我们正处于一个构建孤立事物的阶段，因为我们害怕数据穿墙而过等等。所以对我来说，真正的成功是当你足够自信地将所有这些控制权交还给公司的大多数员工，然后他们真正开始在其之上进行构建。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Yeah and so for most of our clients uh we we started working with them recently the tooling uh for everyone is still in its infancy And so I hope that the tooling will stabilize uh and I hope that we will have true value. True value to me is really okay we've gone through that first phase of building connections and now employees of that enterprise are able to use everything that we've built. Right now I think we're in a phase where we build siloed things uh because we're scared of uh data going through walls and everything. And so to me, the real success is when you're confident enough to give all of that control back to the company's employees at large and they start really building on it.

</details>

**Matt Turk**: 你是在谈论**Mistral AI**，还是在谈论整个行业？我理解得对吗？因为显然这是一个大问题，对吧？我们都在集体构建这一切，数据中心和模型，投入了数十亿美元，我认为很明显，从个人用例或一些离散的编码用例来看，需求非常明确，但最大的问题是需求是否会达到我们正在构建的非凡供应水平。

<details>
<summary>Original English</summary>

**Matt Turk**: You're talking about **Mistral AI** in particular about the industry in general, right? Is that do I understand this correctly? Uh because obviously that's that's the big question, right? We we all collectively building this whole thing and data centers and models and pouring uh billions and I think it's pretty clear that from a personal use case or uh from maybe some discrete like coding use cases like the the demand is very clear uh but the big question is whether demand is going to materialize at the same level as the extraordinary level of supply we're building.

</details>

**Timothée Lacroix**: 是的，关于这一点，我认为预期是，一旦你不再受限于人类提问或阅读，企业对**Token**的需求和生成量将完全爆发。一旦你对**Agent**在后台运行有足够的信任，一旦你设置它们运行大量的**ETL**，一旦你让它们运行大量的**工作负载**，并且你让它们整合你整个公司的数据和知识，那么你就不再真正受限于人类可以创建或阅读的**Token**数量。所以我认为行业中的每个人都期望需求在那一点上爆发。而现实是，要实现这一点，你只需要大量的无聊软件和控制以及类似的东西。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Yeah around this I think the expectation is that demand and basically amount of tokens generated uh for the enterprise will uh completely jump once you are not bound anymore by humans asking questions or reading them. As soon as you have enough trust uh to have agents running in the background, as soon as you've set them to run a bunch of **ETL**s, as you've got them running lots of workloads, uh and you've got them consolidating data and knowledge across your entire company, then you're not really um limited by the number of tokens that humans can create or read. And so we I think everyone in the industry expect the demand to jump at that point. And the reality is for this to happen, you just need a lot of boring software and control and things like this.

</details>

**Matt Turk**: 令人惊讶的是，所有这些都是工程，对吧？而不是仅仅是模型的纯粹性能。

<details>
<summary>Original English</summary>

**Matt Turk**: It's amazing how much uh all of this is engineering, right? Versus just sheer performance of uh of models.

</details>

**Timothée Lacroix**: 是的，这需要大量的管道工作，目标是让所有这些管道变得容易、更容易、更快。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Yeah, it's a lot of plumbing and the goal is to make all of this plumbing easy and easier and to make it faster.

</details>

**Matt Turk**: 好的。你说我们还有大约一年时间。

<details>
<summary>Original English</summary>

**Matt Turk**: All right. And you said we're about a year away.

</details>

**Timothée Lacroix**: 我不是最乐观的人。可能会更快。谁知道呢？我们已经讨论了一些用例，但让我们把这个问题彻底解决，因为它太重要了。你认为企业中哪些是“爆款”用例？让我们假设所有的**Agent**都以你描述的**工作流**方式运作，无论是基于你的行业观察，还是更具体地与你的客户交谈。除了目前已经相当成熟的编码之外，还有什么会带来惊人的**ROI**？

<details>
<summary>Original English</summary>

**Timothée Lacroix**: I'm not the most optimistic person. It might be faster. Uh who knows? And we we talked about use cases a bit already, but let's just put that one to to bed because it's such an important question. What do you think are the kind of the banger uh use cases in the enterprise? Let's assume like all agents work uh in in a in a workflow kind of way that you describe uh based on either your uh industry watch or or more specifically talking to your customers. What is it that is going to generate a amazing **ROI** beyond coding which is pretty established at this at this stage?

</details>

**Timothée Lacroix**: 是的，这有几个维度。编码是一个显而易见的维度，对我来说，要获得编码的全部**ROI**，你需要定制化。因为很多**ROI**是在那些庞大的代码库上解锁的，这些代码库对于在网络上训练过的东西来说是完全不可能了解的。如果你有一个企业多年来一直在构建自己的**领域特定语言**，那么你需要一些定制化，才能让**Agent**进入并在这方面具备能力。所以编码绝对是一个重要的方面。如果一切都如我所愿，我认为我们在加速**知识工作者**方面仍有巨大的飞跃。我相信，你使用聊天助手，它连接到你的系统，你可以向它询问关于企业的任何事情，这种神奇的体验还没有实现，当你看到人们提出的各种查询，期望它们直接奏效时，这真的很明显。对我这个构建系统的人来说，这感觉就像魔法。如果你需要以某种方式向三个人发送电子邮件，协调会议，并从某个**BI**系统收集数据，这只是需要比我们今天拥有的更多的管道和能力。所以这将是一个巨大的提升。我认为最后一个，也许更贴近我的心，是当我们开始根据特定行业的数据定制模型时。所以通常，如果我们从事**石油和天然气**行业，他们会有我们可以帮助理解和解释的系统数据。如果我们从事**计算机辅助设计**，他们可能会有包含特定数据格式的完整数据库，这些格式尚未被最通用的模型广泛理解。如果我们设法构建一个系统，通过我们轻微的干预，或者在我梦想的世界中，我们根本不需要干预，一切都由客户自助服务。他们可以整合这些数据，然后为自己构建一个真正理解他们实际**IP**构成并理解其意义的模型。那么我将非常高兴，我认为那里有巨大的价值有待解锁。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Yeah, there are several dimensions to this. Coding is an obvious one and um to me to get the full um **ROI** of coding you need customization. Uh because a lot of **ROI** is unlocked uh on like sprawling code bases that are completely impossible to know for uh for something that's been trained on the web. Uh if you've got uh an enterprise that's been building its own like **domain specific languages** for years, you'll need some customization for an agent to come in and be competent uh in that respect. Um so coding is definitely a big one. Um if everything uh comes true as I hope I think there is still a huge jump in how we accelerate **knowledge worker** um and I believe the magical experience of uh you go to your chat assistant it's connected to your system and you can ask it anything uh about the enterprise just hasn't realized yet and it's really obvious uh when you see the kind of queries that people are making expecting them to just work. And to me who's building the system, it it feels like magic. Like if you need to somehow send an email to three people and coordinate a meeting and also like gather data from some **BI** system, it's just something that requires um a lot more plumbing and capabilities that we have today. Um so that's going to be a huge lift. And I think the last one which is maybe closer to my heart is really when we start to customize models to uh a kind of data that is particular to an industry. So typically if we uh work in **oil and gas** they will have systemic data that we can help uh understand and make sense of. If we work with um **computer assisted designs**, uh they might have uh full databases of specific data formats that are not widely understood by the most general models yet. And if we manage to build a system where in a light touch way from us or in in my dream world, we don't really have to intervene. It's all uh self-served for the customers. They can consolidate that data and then build themselves a model that really understands what their actual uh private **IP** is made of and make sense of this. Uh then I'll be super happy and I think there is huge value to unlock there.

</details>

### 边缘计算与国防应用

**Matt Turk**: 太棒了。**边缘计算**在所有这些中扮演什么角色？

<details>
<summary>Original English</summary>

**Matt Turk**: Great. Where does the edge uh fit in all of this?

</details>

**Timothée Lacroix**: 选择**边缘计算**有几个原因。首先，有些区域在没有互联网的情况下工作更方便，而且也有很多能力不一定需要一个巨大的模型。所以如果你只是需要一个在任何设备上实现**语音到行动**的东西，今天使用我们开发的**Voxil**模型通常是可以做到的。再次强调，在一个领域中，你的用例越集中，你就可以通过**微调**或通过在更小的架构中进行**蒸馏**来使模型变得更小。我认为**语音到行动**将是一个重要的用例。我认为它将大大简化这些类型事物的当前堆栈。还有一些隐私方面的问题，你可以想象所有**上下文整合**都保留在你的个人设备上，对于大多数事情，你可以使用一个小型模型来回答你的许多问题，然后你可能会限制哪些数据发送到其他基于云的模型。我个人经常坐火车。我喜欢有**编码助手**。在火车上编码时，让**DevTool**在我的笔记本电脑上运行，尽管**Wi-Fi**不好，但感觉很舒服。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: There are a few reasons to go edge. Uh first there are some regions where it's more convenient to um be able to work without internet and there are also a lot of capabilities that don't necessarily require uh a huge model. So if you just need something that goes uh **voice to action** on any device uh today with uh typically the **Voxil** models that we develop this is doable. Again, an area where the more uh focused your use case is, the smaller you can make the model through fine-tuning or um through just distillation in a in an even smaller architecture. I think **voice to action** is going to be a big use case. I think it will simplify a lot uh the current stacks uh for these types of things. There is also some privacy things uh where you could imagine uh all of the context consolidation stays on your personal device and for most things uh you can deal with a small model uh that answers a lot of your questions and then you potentially can gate uh what goes out to uh another like cloud-based models. I myself take the train a lot. Uh I like having coding assistance. Uh having uh **DevTool** run on my laptop while I code on the train is uh comfortable despite the bad **Wi-Fi**.

</details>

**Matt Turk**: 而且，大概还有一些国防用例。据我所知，你们在法国和德国做了不少国防工作。我想你提到了与**Helsing AI**在无人机等方面的合作。这是现实吗？

<details>
<summary>Original English</summary>

**Matt Turk**: And uh presumably there are some uh defense uh use cases as well. So you you guys do quite a bit of defense work as I understand it with France with with Germany. I think you you mentioned some partnership with **Helsing AI** on drones and that kind of stuff. Is that a reality?

</details>

**Timothée Lacroix**: 这是一个现实，是的，我们正在做这项工作。我们有一个**机器人技术**部门与这些合作伙伴合作。拥有非常明确的用例使我们能够真正将模型缩小到更轻量级的尺寸。当然，在这些用例中，控制至关重要，你需要能够真正验证解决方案。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: A reality it's uh it's something that we work on. Yes, we have a **robotics** division that works with these uh partners. Having a very um well-defined use cases uh makes us able to really take the model down to lighter uh types of sizes. Um and it's of course uh use cases where control is super critical uh and you need to be um yeah able to really validate the solution.

</details>

### Mistral 3 模型架构与目标

**Matt Turk**: 好的，让我们转向模型部分的讨论。去年12月，你们发布了**Mistral 3**，这是一个重要的版本，仍然采用**MoE**架构，这是你们一直在做的核心。你之前在对话中提到了效率。也许可以向我们介绍一下你们的总体思路和方法，在一个竞争激烈的**AI模型**世界中，无论是闭源还是开源，以及所有中国实验室。你们正在努力做什么，以及你们如何定位自己？

<details>
<summary>Original English</summary>

**Matt Turk**: All right, let's switch to the model part of the discussion. In December, you guys uh released **Mistral 3**, which was a big release still with the **MoE** architecture, which is at the core of what you guys have been um doing. You mentioned efficiency uh earlier in the conversation. Maybe walk us through the general thinking and and approach like in a highly competitive world uh of uh **AI** models both in terms of closed source but also very much open source and all the Chinese labs. What is it that you guys are trying to do and how do you position?

</details>

**Timothée Lacroix**: 是的。我们发布了**Mistral Large 3**，它是一个**MoE**模型。**MoE**模型是非常好的训练系统，因为它们的**FLOPs**数量较低，这使我们能够在训练期间大幅提升性能。它们不一定是本地部署的最佳格式，因为目前，如果你想从**专家混合模型**中获得最佳效率，你需要大量的容量，因为你通常需要跨数十个**GPU**进行部署，为了证明如此多的**GPU**是合理的，你需要有足够的吞吐量。我们正在训练大型**MoE**模型，以在训练期间以最高效率获得最佳性能。我们还在以其他规模继续训练**密集模型**，因为根据客户想要部署的环境，这可能是更具成本效益的解决方案。我认为这两种架构仍然有价值。在**边缘**也是如此。有时你根本没有足够的**RAM**容量来部署像**稀疏专家混合模型**这样的东西，所以使用**密集模型**在那里也很有帮助。但是的，对于训练，**专家混合模型**及其较低的**FLOPs**非常有趣。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Yeah. So we've released **Mistral Large 3** which is uh an **MoE**. **MoE**s are uh really nice systems to train uh because of the lower uh amount of **FLOPs** which uh makes us able to push performances um a lot more uh during training. They are not necessarily the best formats for uh on-prem deployment because as of today uh if you want to get uh the best efficiency out of uh a **mixture of experts model** you require a lot of volume uh because you're looking at deployments across dozens of **GPU**s usually um and to justify that amount of **GPU**s uh you need to have the right throughput. We are training uh large **MoE**s to get the best performance um with the most efficiency during training. We are also continuing to train dense models at other scales because depending on the environments uh in which our clients want to deploy this might be the more uh cost-efficient solution. I think both architectures are still valuable. Um on edge as well. Uh sometimes you just don't have the **RAM** capacity uh to deploy something like a **sparse mixture of experts** and so going dense is helpful there as well. But yeah, definitely for training uh **mixture of experts** and their lower **FLOPs** are very interesting.

</details>

**Matt Turk**: 模型工作的最终目标是什么？我的意思是，显然你们是一个前沿**AI**实验室，但你们是想创造最好的模型并解决**AGI**，还是想成为与中国实验室或美国最终出现的任何开源模型相比最好的开源模型？你们想做什么？

<details>
<summary>Original English</summary>

**Matt Turk**: What is the ultimate goal of the model effort? I mean clearly you guys are a frontier **AI** lab but um are you trying to create the the best models and and solve **AGI** or are you trying to be the best open-source model compared to the Chinese labs or you know whatever open source eventually comes out of the uh US what is it that you're trying to do?

</details>

**Timothée Lacroix**: 我们正在努力获得我们能得到的最好的模型，以及对我们在企业中涵盖的用例最有用模型。因此，通常随着**Agentic行为**的兴起，一件非常重要的事情是你如何处理各种上下文，如何处理输入中添加的各种文档。因此，拥有进行架构迭代的能力，真正尝试模型训练方面的新事物至关重要。因此，我们正在利用我们现有的计算能力，突破当前模型的极限，但我们也在努力关注我们当前部署中最令人烦恼的事情。因此，通过一些**Harness**技巧解决的一个考虑因素是这些**Agentic系统**的上下文。这通常在**Vibe Coding**中很明显，但它绝对适用于许多其他用例，通过所有的工具调用，你将不得不整合和总结上下文，以便能够适应所有内容，并让模型专注于正确的部分。对我来说，这只是当前架构的产物。我们正在努力将事物适应线性上下文窗口，而我们提出的问题本质上不一定都是线性的。因此，我们今天依赖文件系统来解决这个问题，我认为这是**Vibe Coding**带来的巨大变化和认识，即**Agent**在操作文件系统方面足够出色，可以将其用作其上下文窗口的替代品。基本上，它们可以选择要读取的部分。它们可以选择工具结果的部分，这最大限度地减少了上下文长度要求。这是今天的状态。我认为我们可以做得更好，我认为在这些类型的问题上还有很多改进空间。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: We're trying to get the best uh models that we can and the model that's most useful for uh the use cases that we cover uh in enterprise. And so typically with the rise of uh **Agentic behavior**, one thing that's very important is how you deal with uh various contexts, how you deal with various um documents uh being added to the input. And so having the capabilities to do architecture iterations really trying new things in terms of model training is critical. Um so we're pushing the boundaries of what the current models can do with uh the compute capacity that we have but we're also trying to focus on the things that are is most annoying uh in our deployments today. And so one of the consideration that has been solved with a few **Harness** uh tricks is the context of uh those **Agentic systems**. So it's visible typically in **Vibe Coding** but it's um definitely uh applicable to a lot of other use cases where through all of the tool calls you'll have to uh consolidate uh and summarize the context to be able to fit everything and uh have the model focus on the right parts. To me this is just an artifact of the current architectures. Uh we're trying to fit uh things in a linear context windows where essentially the questions that we're asking aren't really necessarily all linear. Um and so we rely today on the file system for this and that I think that was the big change in u and realization through **Vibe Coding** is that agents are good enough at uh manipulating file systems that they can use this as a replacement for uh their context window. Basically uh they can select parts of what they want to read. They can select parts of the tool results uh and this minimizes uh the context length requirements. This is the state today. I think we can do much better and I think there is a lot of uh improvements to be done on those types of uh questions.

</details>

**Matt Turk**: 你们的**Agent**在沙盒中运行吗？

<details>
<summary>Original English</summary>

**Matt Turk**: Do your agents run on sandboxes?

</details>

**Timothée Lacroix**: 这取决于**Agent**的类型。但答案是肯定的。如果是**编码Agent**，我们通常会有沙盒让**Agent**迭代和运行。我认为隔离的深度将取决于用例。通常，如果文件系统只是表示文本上下文，并且你不期望**Agent**对其进行太多操作，那么你就不需要一个完整的沙盒。你只需要该上下文的一些表示作为文件系统，它可以是任何类型的抽象。但如果你正在进行异步代码开发，那么是的，你需要一个沙盒。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: It depends on the types of agents. Uh but the answer would be yes. If it's uh if it's coding agents, usually uh we have uh sandboxes that will let the agent iterate uh and run. I think the depth of the uh isolation will depend on the use case. Uh typically if the file system is just representing textual context and you're not expecting the agent to do much action on it, then you don't really need a full sandbox. Uh you just need some representation of that context as a file system and it can be any sort of abstraction. But if you are I don't know typically running asynchronous code development then yes you need a sandbox.

</details>

### Mistral 4 的展望与数据策略

**Matt Turk**: 太棒了。你们目前面临的限制是什么，以使**Mistral 4**（当它最终发布时）比**Mistral 3**做得更好？这是一个**Mistral Compute**的问题，还是一个数据问题？特别是，你们在**合成数据**方面做了什么可以谈谈的吗？

<details>
<summary>Original English</summary>

**Matt Turk**: Great. What is the current constraint that um you guys are facing to make uh **Mistral 4** when it eventually comes out do much better than **Mistral 3**. Is that a question of **Mistral Compute** or is that a question of of data and uh in particular are you guys doing anything around synthetic data that you can talk about?

</details>

**Timothée Lacroix**: 毫无疑问是计算，我们目前的部署将有所帮助，因为它将为我们提供比过去更多的**Grace Blackwell**容量。所以这是我们非常兴奋的事情。当你增加计算时，你也必须增加数据。所以我们一直在努力工作，确保我们的数据混合物一如既往地高质量，并且规模不断增长。但正如你所提到的，做到这一点的方法之一是通过**合成数据**。就我们使用**合成数据**最多的地方而言。我认为很多有趣的工作都发生在**后训练**部分，我们可以在那里构建看起来类似于企业的环境，然后尝试合成地创建需要多次跳转的难题查询。所以所有这些工作，除了编码工作，**推理**工作，才是真正让最终模型能够在我们工作的各种环境中表现良好的原因。所以以前是关于积累世界知识，网络对此帮助很大。现在越来越多地是关于获取**Know-how**。为此，它实际上是关于尝试找出我们的客户正在做什么，尝试在我们的训练环境中复制它，并基本上让模型运行。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Definitely compute and uh the current deployment that we have will help uh as it's going to be giving us a lot more **Grace Blackwell** capacity than we had in the past. And so that's uh something that we're very excited about. And when you add uh compute, you also have to add data. And so we've been hard at work uh making sure that our uh data mixtures are uh as high quality as ever and growing in size. But as you mentioned, one of the ways to do this is through synthetic synthetic data. In terms of um where we use **synthetic data** the most. I think a lot of the interesting work that's happening is for the **post-training** part where we can um build environments uh that look similar to uh an enterprise and then uh try to uh synthetically create queries that are hard and that will require multiple hops. And so all of this work um is in addition to the coding work, the reasoning work is really what makes the final model able to perform uh in the various uh environments that we work in. So before it was about uh accruing world knowledge and the uh web helps a lot with this. Now it's more and more about acquiring **know-how**. Uh and for this uh it's really about um trying to find what our uh customers are trying to do, trying to replicate it inside of our training environment and uh let the the model run basically.

</details>

**Matt Turk**: 你提到了**后训练**，这是过去12个月的关键话题之一，特别是**LLM**s向包含**预训练**和**后训练**以及大量**强化学习**的系统演变。你们在这个领域处于什么位置？你们在大力推动**强化学习**吗？你们认为**预训练**还有增长空间吗？你们是如何看待这个问题的？

<details>
<summary>Original English</summary>

**Matt Turk**: You mentioned **post-training** and that's one of the key topics of the last 12 months in particular this evolution of um **LLM**s uh into systems with both pre-training and post- training and a lot of reinforcement learning. Where do you guys uh fall in that spectrum? Are you uh pushing a lot of uh reinforcement learning? Do you believe that pre-training has still room to grow? How do you think about it?

</details>

**Timothée Lacroix**: 是的，一切都还有增长空间。作为CTO，我感兴趣的是如何让管道的所有步骤协同工作，以及每个人如何最有效地开发。通常，在**后训练**中，你会有一个团队致力于改进代码。你会有另一个团队致力于改进不同的企业行为。你会有另一个团队致力于改进指令遵循。所以所有这些在某个时候必须整合在一起，因为如果你要求客户部署五个不同的模型来完成他们的工作，他们是不会满意的。真正有一个内部引擎和能力，可以让你期望的方式将所有这些工作流整合在一起，这非常有趣。所以，是的，在内部我们正在构建和改进堆栈的所有部分。我认为**后训练**非常丰富，因为它也触及了**LLM**s的所有新用例，我认为看到每天涌现的所有新用例一直非常令人兴奋。每当有人在**Twitter**上发现他们做了一些令人兴奋的新事物时，突然之间，你就必须将这个概念验证转化为模型能够良好执行的基本能力。这可能是一个完整的工作流，你必须高效地完成这项工作并进行优先级排序。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Yeah, everything still has room to grow. What I'm interested in as the CTO is really how you make uh all of the steps of the pipeline uh work well together and how everyone can uh develop most efficiently. Um, typically what happens in uh post training is that you will have a team that's working on uh improving code. You will have another team that's improving um different uh enterprise uh behaviors. You will have another team that's uh improving on uh instruction following. Uh and so all of this uh at some point has to come together because customers aren't happy if you require them to deploy five different uh models to get their job done. There is really an internal engine and capability around making all of these work stream come together uh in the way that you expect that is super interesting to build and so but yeah uh internally we're building and improving all of the parts of the stack. I think the post training is very rich because it also touches all of the new use cases of **LLM**s and I think it's been very exciting to see just all of the the new use case that pop up every day. Anytime someone on **Twitter** finds a new exciting things that they've done, then suddenly, you know, you've got to make it this proof of concept into potentially a base capability on which your model will perform well. And that's uh potentially an entire stream of work and you've got to do this efficiently and prioritize. Well,

</details>

**Matt Turk**: **推理**在所有这些中处于什么位置？你们几个月前发布了一个名为**Magistro**的**推理模型**。这是一个重要的优先事项吗？

<details>
<summary>Original English</summary>

**Matt Turk**: Where does reasoning fall in all of this? Uh you guys launched a reasoning model called **Magistro** a few months ago. Is that is that a big priority?

</details>

**Timothée Lacroix**: 所以**推理**是一个重要的优先事项，**推理**有趣的地方在于你如何通过**强化学习**训练模型。它首先通过**推理**展示出来，因为系统会学习创建更好的**推理轨迹**以获得更好的结果。但无论你创建**推理轨迹**还是迭代你调用的工具，或者两者混合，系统都是相同的。所以我认为，越来越多地，训练所有这些的方式将汇集在一起，有时你会拥有**推理轨迹**，有时它们会很长，有时会很短，有时根本没有，因为没有必要，而且创建新的思维轨迹或调用正确的工具之间没有真正的区别。对我来说，这都是一样的，因为你最终优化的是模型在获得结果之前创建的最佳输出。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: So reasoning is a a big priority and the interesting thing about reasoning was really how you can train models with **reinforcement learning**. And so it was first shown through reasoning uh because the system would learn to create better **reasoning traces** to uh get to better results. But the system is the same whether you create **reasoning traces** or whether you iterate on the tools that you call or mixing both. And so I think more and more the way to train uh all of this uh is going to come together and sometimes you'll have **reasoning traces**, sometimes they'll be long, sometimes they'll be short, sometimes there won't be any because it's not necessary and there's no real difference between creating a new thinking trace or calling the right tool. It's it's all the same to me because what you're optimizing at the end is what is the best uh output for the model to create before it gets a results to uh to me.

</details>

### DevTool 2、Vibe CLI 与 OCR3

**Matt Turk**: 太棒了。让我们谈谈**DevTool 2**和**Vibe CLI**。所以，请向我们介绍这些产品以及它们的功能，以及为什么人们应该使用它们。

<details>
<summary>Original English</summary>

**Matt Turk**: Great. Let's talk about uh **DevTool 2** and the **Vibe CLI**. So, walk us through those products and what they do and uh why people should use them.

</details>

**Timothée Lacroix**: 当然。**DevTool**是我们的**Agentic编码模型**，所以它通常是你用来进行**Vibe Coding**的东西，你非常欢迎通过我们恰当地命名为**Vibe**的**CLI**来使用它进行**Vibe Coding**。**Vibe Coding**的价值以及我们为什么关注它。编码是企业中的一个巨大用例，尤其我们很多客户拥有庞大的代码数据库，我们很乐意将我们的系统定制到他们的代码库中，让我们的**Agent**运行。现在，**DevTool**和**Agentic编码**不仅仅是关于**Vibe Coding**，当你异步运行相同的系统时，它也可以用于审查**PR**。它还可以用于检查代码是否符合特定条件。它还可以用于代码现代化。所以即使在编码中，应用程序也相当广泛，正如我之前提到的。拥有一个擅长处理文件系统的系统通常非常有趣。即使你不使用它来编码，你也可以使用它来对企业知识进行**推理**。你可以使用它连接到企业系统，对我来说，它是我们正在开始构建的企业智能的基础。所以大新闻是，这些系统即将正式发布。我们有一个优惠，聊天用户，也就是我们的助手**Luca**，也将获得使用**Vibe**和相关模型的能力，我们正在努力使这种使用尽可能广泛。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Sure. Um so **DevTool** is our uh **Agentic coding model** and so it's something that you typically **Vibe Code** with and you are more than welcome to **Vibe Code** with it through our **CLI** aptly named **Vibe**. Value of **Vibe Coding** and why we focus on it. Coding is a huge use case in enterprise um and especially a lot of our clients have uh yeah large code databases where it's helpful for us uh to take our system and customize it to their codebase to let um our agent run. Now the **DevTool** and **Agentic coding** is not only about uh **Vibe Coding** the same system when you run it uh asynchronously can be used to review **PR**s. Uh it can be used to check code for specific conditions. It can be used to modernize code. So it's applications even in coding are uh quite wide as I alluded to as well. Um having a system that uh is good at handling a file system is more generally very interesting. Uh even if you're not using it to code, you can use it to reason uh about enterprise knowledge. You can use it to connect to enterprise systems and it's to me it's the basis of really the enterprise intelligence that we're starting to build and so the big news is yeah the that those systems are uh going GA uh we've got uh an offer where chat users so **Luca** our assistant um will also uh get the ability to use **Vibe** and the associated models and we're trying to uh basically make that usage as wide as possible.

</details>

**Matt Turk**: 你们最近发布的另一款产品是**OCR3**。它有什么作用？它能让你扫描任何表格、任何文档吗？

<details>
<summary>Original English</summary>

**Matt Turk**: Another thing that you uh released reasonably recently I believe is uh **OCR3**. What does that do? That enables you to just like uh scan any uh any form any document.

</details>

**Timothée Lacroix**: 是的，**OCR**在企业中是一个巨大的用例。我们很多客户都有，典型的例子是**KYC**，有人会提交一份表格，你需要以结构化的方式将这些信息输入到你的系统中，或者你需要对其进行**推理**。所以**OCR**有趣的是，它不是我原本期望**LLM**能取得巨大进展的系统类型。**视觉推理**和**视觉理解**已经变得如此出色，以至于它只是一种更简单的处理方式。在我看来，你有任何类型的输入，你就可以获得你关心的数据。正如我所提到的，当你构建**Agent**时，你为要解决的任务有不同类型的输入。文档和视觉信息只是一种非常非常常见的输入类型。有时使用一个小的**OCR模型**来获取你关心的文本，然后可能进行**后处理**或用另一个系统处理它，比通过一个大型**多模态模型**来做同样的事情但成本更高要便宜得多。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Yeah, **OCR** is a huge use case in enterprise. Uh a lot of our customers have I mean the typical example is **KYC** where someone will submit a form and you need to input that information in a structured way in your systems or you need to reason about it. And so **OCR** interestingly is uh it's not the types of systems that I would have expected uh **LLM** to really uh make large strides on. The **visual reasoning** and the **visual understanding** has gotten so good that it's it's just an easier way to process things. Uh in my mind you have any sort of input um and you can get the the data that you care about. As I mentioned, when you build agents, you have uh a different type of inputs for the task that you're trying to solve. Documents and visual informations are just a very very frequent kind of kind of input. Uh sometimes it's a lot cheaper uh to use a small **OCR model** to just get the text that you care about and then potentially post-process it or deal with it with another system than to run it through a large uh **multimodal model** that will u basically do the same thing but at a higher cost.

</details>

**Matt Turk**: 是的，你提到了**多模态**。**Mistral AI**在多大程度上是**多模态**的？或者说，语音和视频是你们正在做或正在考虑的事情吗？或者这根本不是一个重要的企业用例？

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah, you mentioned multimodal. To to which extent is **Mistral AI** multimodal or to which extent is that um voice is is video something that you guys either do or think about or is that just not a big enterprise use case?

</details>

**Timothée Lacroix**: 所以，回答问题的第一部分，关于我们是否构建**多模态模型**。是的。这总是在探索一个方向、获得良好能力并发布第一个模型，然后将其集成到主干模型（我们用于其他一切的主要模型）之间取得平衡。所以这些总是会在不同的时间发生，但对于音频，正如我提到的，我们有**Voxil**，我们所有主要模型都理解图像并能对其进行**推理**。对于视频，我们首先通过**机器人技术**的视角来处理这个问题，所以我们正在对这个主题进行初步探索。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: So to answer on the first part of the question on whether uh we build multimodal models. Yes. Uh it's always a balance between exploring in a direction, getting good capabilities and getting the first model out there and then integrating it uh into the trunk like the main model that we use for everything else. And so those will always happen at separate times but for uh audio um we have uh **Voxil** as I mentioned and all of our um main models uh understand images and can reason about them. For videos. It's a subject that we tackle through the lens of **robotics** uh first and so we're doing our first explorations on that topic.

</details>

### 效率、团队建设与全球化视野

**Matt Turk**: 好的。再次强调，这种速度非常有趣。我再次感谢你提醒我们，你们才做了几年。所以，总而言之，非常令人印象深刻。也许退一步，从工程和建设者的经验教训角度思考所有这些。正如我们在对话中多次提到的，你们用相对较少的资源做了很多事情，这在**AI**世界中总是相对的。你们是如何从效率的角度做到这一点的？

<details>
<summary>Original English</summary>

**Matt Turk**: Okay. Well, again the the velocity uh has been super interesting to uh to to watch. I um again appreciate you your reminding us that you guys have been doing this for only uh a couple of years. So um just uh very impressive all together. Maybe take taking a step back and thinking all of this in terms of uh engineering and lessons for for for builders. So as we alluded to a couple of times through the conversation like you you you guys are doing a lot with uh comparatively it's always it's very relative in the world of **AI** less uh resources. How have you uh been able to do this from an efficiency standpoint?

</details>

**Timothée Lacroix**: 我们专注于我们知道会产生最大影响的部分，我们基本上专注于我们在不同时期能够负担得起的部分。所以当我们开始时，我们有足够的资源来训练一些模型，然后我们专注于完善数据，因为我们知道这可能不是工作中最令人兴奋的部分，但它绝对至关重要，任何数据质量的改进都会使我们通过真正改进模型架构或类似事情所获得的改进提高10倍。所以我认为这取决于公司的规模和，是的，取决于公司的规模，将正确的精力集中在正确的地方。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: We focused on the parts that we knew would provide the most uh impact uh and we focused on basically what we could afford at different times. So when we started and we had uh enough resources to train uh a few models and uh then we focused on getting the data perfect because we knew um this was potentially not the most exciting part of the work but it was absolutely critical and any improvement uh on the data quality would 10x the uh improvements that we would get by really um improving on the model architecture or things like this. And so I think it's focusing the right effort uh depending on the scale and the um yeah depending on the scale of the company.

</details>

**Matt Turk**: 从团队建设的角度来看，你们是如何做到的？你们三位联合创始人都在**AI**领域有深厚的背景。你们现在主要专注于建设**FDE**团队，还是仍在建设这种大型研究实验室？你们如何看待正确的比例？

<details>
<summary>Original English</summary>

**Matt Turk**: And from a team uh building perspective how have you gone about it the the three of you the three co-founders have a deep background in in **AI** um are you these day focused mostly on building like an **FDE** team or are you still uh building this large kind of like research lab effort and how do you uh think about the right ratio?

</details>

**Timothée Lacroix**: 我们正在发展我们所有的团队，包括研究、**FDE**、产品工程、计算基础设施，所有团队在如何构建和按什么顺序招聘人员方面都有自己的挑战。对我来说，一开始很重要，我的意思是，我和**Guillaume**和**Arthur**，我们三个人都是优秀的**AI**实践者，所以我们知道如何训练模型，也知道如何编码，所以我们从像我们这样的人开始，以最快的速度训练模型，但随着规模的扩大，这就不奏效了。构建正确的研究基础设施至关重要。所以这需要不同的技能组合。这也是我们多年来一直在建设的东西。作为曾经做过小规模研究的人，看到所涉及的系统以及在大规模下可以获得的收益，这令人着迷。就工程而言，故事也差不多。你从一个知识广博、自给自足、可以快速迭代的团队开始，然后越来越多地引入专家或见过更大规模的人，他们会告诉你，这在六个月内不会奏效，所以我们现在应该解决它。所以，发展公司并看到在每个规模下连续出现的问题，并通过改变系统、改变组织或构建新事物来克服它们，这非常有趣。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: We are growing uh all of our teams both uh research uh **FDE**s uh product engineering uh infrastructure for compute and all of the teams have their own uh challenges in how you build and what order you uh recruit people in. It's been important to me um at the start to I mean to me and uh and **Guillaume** and **Arthur** we both like the three of us were uh good **AI** practitioners so we knew how to train models and we knew how to code and so we started with people like us to get to the models trained the fastest um but that doesn't work as you scale uh you it is critical to build the right uh infrastructure uh for research And so this takes different skill sets. Uh and it's something that we've been uh building over the years as well. Uh and it's fascinating as someone who used to do uh research in a at a smaller scale to see the kind of systems that are involved and the the gains uh that you can have at scale. Uh in terms of engineering, it's kind of the same story really. Uh where you start with um a team that's broad in its knowledge and self-sufficient and can iterate fast and then more and more you bring in experts or people that are that have seen larger scale and will tell you like well this won't work in six months and so we should fix that now. So, it's been super interesting growing the company and seeing all of the uh successive things that break at each scale and overcoming them through either changing the system, changing the organization or building new things.

</details>

**Matt Turk**: 你们是如何驾驭欧洲、美国和世界其他地区这个维度的？你们是法国的骄傲，也是欧洲的骄傲。这是一场全球竞争。你们是如何做到这一点的？

<details>
<summary>Original English</summary>

**Matt Turk**: How have you navigated the whole Europe to US and rest of the world dimension of this? I you're the very much the the pride of France, the pride of uh Europe as well equally. This is a global race. How have you uh made it work?

</details>

**Timothée Lacroix**: 所以，我们在三大洲开展业务。我们在**Palo Alto**设有办事处。我们在**新加坡**也设有办事处。我们的大多数员工都在巴黎工作。这很好地代表了我们正在努力构建的东西，即一个独立且人们可以控制的解决方案。在这个目标中，我们来自哪里或为谁构建并不重要。我们提供工具，然后最终客户拥有在其之上构建的一切。所以我想我并没有在这上面花太多心思。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: So, we work um on all three continents. We have offices uh in **Palo Alto**. We have offices in **Singapore** as well. Most of our employees work uh from Paris. It's a good representation of uh what we're trying to build, which is a solution that's uh independent and that people control. And in and this target uh it doesn't really matter uh where we're from or who we're building for. Uh we provide the tools uh and the customer the end customer then owns uh everything that's built on it. And so I I think it it hasn't really been something that I've spent much thought on.

</details>

### 未来展望与AGI的看法

**Matt Turk**: 那么，我们应该对**Mistral AI**未来几年有什么期待呢？

<details>
<summary>Original English</summary>

**Matt Turk**: So uh what what should we um expect from uh **Mistral AI** over the next uh couple of years?

</details>

**Timothée Lacroix**: 在未来几年，我想说的是，对**AI**的**ROI**的疑虑会减少，理想情况下，成功的时间会更快，会构建越来越大的用例，并真正实现企业中**AI**构建工具的**民主化**。我认为这才是我们为客户设定的真正目标。它应该很容易，大多数人应该能够通过使用**AI**来加速自己。我认为我们已经看到这在编码方面发生了令人印象深刻的事情，它应该更广泛地发生。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Over the next couple of years, I would say uh diminishing doubts on the **ROI** of **AI** uh ideally so faster uh time to success uh larger and larger uh use cases being built and really democratization uh of building tools with **AI** in enterprise. I think this is really what I target for our customers. Uh it should be easy uh and most people should be able to accelerate themselves through the use of **AI**. I think we've seen this happen quite uh impressively for coding and it should be something that happens uh a lot more widely.

</details>

**Matt Turk**: 在整个对话中，你务实、专注于企业成功的精确目标，这给我留下了深刻印象。你如何看待整个**AGI**热潮的讨论，以及旧金山和其他地方的人们对**AGI**的痴迷？你认为这会发生吗？或者从你的角度来看，这在某种程度上并不重要？

<details>
<summary>Original English</summary>

**Matt Turk**: I was uh struck throughout this uh conversation by how pragmatic uh you you are and and focused on precise goals around enterprise success. What do you make uh of the whole, you know, rush to **AGI** conversation and people being **AGI** pill in San Francisco and other places? Is that is that something that you see happening or does that to some extent not matter from your perspective?

</details>

**Timothée Lacroix**: 我的意思是，这很重要，因为你的系统越好，你就能做越令人印象深刻的事情，而且会变得越来越容易。我在企业中看到的对控制和治理的要求让我认为，即使我现在服务器上有一个**AGI模型**，如果我走进一家大银行说：“这是一个东西，请让它为你控制一切”，他们也不会乐意这样做。所以我认为正确地构建基础设施是跟踪这些模型的进展并真正能够快速释放它们所有能力的关键。所以对我来说，这是两个必要的方向。你需要提高模型的能力，这样做非常令人兴奋，但让每个人都能轻松地将这些模型应用到你的企业工作流中，而无需真正担心会发生什么，这个过程同样重要。老实说，开发起来也超级有趣。有很多超级有趣的问题。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: I mean it it matters because the the better your systems are, the more uh impressive things you'll be able to do and it it'll become easier and easier. Requirements I see for control and governance in enterprise make me think that even if I had uh some **AGI model** on my uh servers right now if I were to go uh into a large bank and say here is a thing please let it control everything for you they wouldn't be happy to let it do it and so I think building the infrastructure uh properly is uh quite key to following the progress of these models and really being able to quickly unleash all of their capabilities. So to me it's it's two directions that are necessary. You need to improve the capabilities of the model and it's super exciting to do so but the journey of uh making it trivial and uh easy for everyone to unleash those models on your enterprise workflows uh without really wondering what's going to happen is is equally important. And honestly super uh super fun as well to develop. There are lots of super interesting questions.

</details>

**Matt Turk**: 太棒了。**Timothée**，非常感谢你与我们深入探讨**Mistral AI**。这非常引人入胜。再次祝贺你在这么短的时间内构建的一切。期待接下来会发生什么。非常感谢你与我们共度时光。

<details>
<summary>Original English</summary>

**Matt Turk**: Wonderful. Well, **Timothée**, thank you so much for uh doing this uh deep dive on **Mistral AI** with us. It's been fascinating. Congratulations on everything that you've built again in this very short period of time. Uh and excited for what's uh coming next. So, thank you for spending time with us.

</details>

**Timothée Lacroix**: 谢谢。很高兴。

<details>
<summary>Original English</summary>

**Timothée Lacroix**: Thanks. It was a pleasure.

</details>

**Matt Turk**: 大家好，我是**Matt Turk**。感谢收听本期**Mad Podcast**。如果你喜欢本期节目，如果你还没有订阅，或者在任何你正在观看或收听本期节目的平台上留下积极的评论或评价，我们将不胜感激。这确实有助于我们发展播客并邀请到优秀的嘉宾。谢谢，下期节目再见。

<details>
<summary>Original English</summary>

**Matt Turk**: Hi, it's **Matt Turk** again. Thanks for listening to this episode of the **Mad Podcast**. If you enjoyed it, we'd be very grateful if you would consider subscribing if you haven't already, or leaving a positive review or comment on whichever platform you're watching this or listening to this episode from. This really helps us build a podcast and get great guests. Thanks, and see you at the next episode.

</details>