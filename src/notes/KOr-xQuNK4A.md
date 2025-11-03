---
author: How I AI
date: '2025-11-03'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=KOr-xQuNK4A
speaker: How I AI
tags:
  - vibe-analysis
  - enterprise-search
  - data-analysis-workflow
  - context-engineering
  - custom-ai-agents
title: “氛围感分析”：Faire 如何利用 Cursor、企业搜索和自定义 Agent 进行数据洞察
summary: Faire 数据团队的 Tim 和 Alexa 深入演示了如何利用现代 AI 工具链彻底改变产品和业务分析流程。他们展示了从使用企业级 AI 搜索快速定位业务指标下降的根本原因，到借助 Cursor 查询代码库进行深度取证，再到利用自定义 Agent 自动化 A/B 测试报告和用户调研分析的全过程。这套“氛围感分析” (Vibe Analysis) 工作流不仅提升了效率，更让非技术人员也能轻松获取深度洞察，从而做出更精准的决策。
insight: ''
draft: true
series: ''
category: business
area: tech-insights
project:
  - ai-impact-analysis
  - vibe-coding
people:
  - Clarvo
  - Tim
  - Alexa
companies_orgs:
  - Faire
  - Zapier
  - Dropbox
  - Airbnb
  - Notion
  - Jira
  - Slack
  - GitHub
  - Snowflake
  - Brex
products_models:
  - Cursor
  - ChatGPT
  - EPO
  - Qualtrics
media_books:
  - How I AI
status: evergreen
---
### 引言：AI 如何革新产品分析

我们如何从分析转化率入手，来审视一个产品的质量和使用情况呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do we start at the very beginning of analyzing a product and its quality and its usage through analyzing conversion rates?</p>
</details>

Tim：新的 AI 工具彻底改变了获取所有这些背景信息的过程。你可以随心所欲地进行广泛探索，以令人难以置信的速度自助式地进入一个不熟悉的领域。这意味着你不仅可以提供更快的分析，还可以提供质量高得多的分析。我将从进行一次企业级 AI 搜索开始。所以，我将非常简单地向 Notion 提问：在2024年9月至12月期间，有哪些新功能或实验上线，可能增加了欧洲或北美新零售商在结账流程中的阻力？我还特意说明了，重点关注实验文档、**PRD**（Product Requirements Document，即产品需求文档）和上线公告。很快，我便毫不费力地得到了一份非常有趣的假设清单，可供深入研究。你可以看到，它非常迅速地搜索了 Slack、Notion、Jira 及其他所有系统。那么，Alexa，当我们确定了一个想要解决的问题或抓住的机会后，我们该如何进行实际的数据分析呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: The new AI tools have just absolutely transform the process of just getting all that context. You can go as broad as you like self-serve into an unfamiliar topic just incredibly quickly. And that means you can not only deliver quicker analysis, you can just deliver much better analysis too. I'm going to start just by doing an enterprise AI search. So, I'm just going to start very simply by asking notion, what experiments were new features launched between September to December 2024 that could have added friction to the checkout process for new retailers in Europe or North America? And I've just said focus on XV docs, PRDs, and launch announcements. I've got straight away a really interesting list of hypothesis to dig into with no work. You can see it searched across Slack, notion, Jira, and everything else very, very quickly. So Alexa, how do we do actual analysis of data when we've identified a problem or an opportunity we want to go after?</p>
</details>

Alexa：在没有 AI 的情况下，仅仅是收集背景信息就意味着要花费数小时翻阅所有的规格说明和 PRD，从头开始编写 **SQL**（Structured Query Language，即结构化查询语言）查询，然后还要花大量时间撰写和编辑文档。而使用 Cursor 来实际创建、编辑和编写 SQL，可以说彻底改变了游戏规则。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa: Without AI, especially the context gathering would mean hours spent digging through all the specs and PRDS. Writing SQL queries from scratch and then you know spending a lot of time writing and editing a doc using cursor to actually create edit write SQL has been pretty gamechanging.</p>
</details>

Clarvo：欢迎回到《How I AI》。我是 Clarvo，一位产品负责人和 AI 爱好者，我的使命是帮助你利用这些新工具更好地进行构建。今天我请来了 Faire 数据团队的 Tim 和 Alexa，他们将为我们带来一期精彩的节目。他们将向我们展示如何使用 Cursor、MCPs、ChatGPT，甚至编写自己的 Agent 来进行数据分析。我们将看到从剖析那个可怕的问题——“九月份到底出了什么问题？”——到对实验和调查进行详细的漏斗分析等所有内容。让我们开始吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Welcome back to How I AI. I'm Clarvo, product leader and AI obsessive here on a mission to help you build better with these new tools. Today I have a great episode with Tim and Alexa from the data team at Fair. They're going to show us how you can use cursor MCPS chat GBT and even write your own agents to do data analysis. We're going to see everything from decomposing that scary question, "What went wrong?" in September to doing detailed funnel analysis on experiments and surveys. Let's get to it.</p>
</details>

### AI 时代的产品开发悖论

Clarvo：我们现在能做的一件事，可能也是我个人在互联网世界里推动的一件事，就是我们可以大量地开发产品。我总是四处宣扬，比如前几天我还在想，我要发条推文告诉产品经理们，他们应该花一个月的时间只说“是”，而不是说“不”。让我们多发布一些功能吧。我认为 AI 确实加速了产品开发、软件工程以及将创新交到客户手中的过程。但它也带来了一个问题：我们不知道那些产品到底好不好。这就是那个 perennial 的产品难题，你发布了产品，但它们可能没有产生你所期望的影响。所以我对这次对话感到非常兴奋，因为你们将向我们展示如何使用 AI，甚至是一些软件工程师或产品经理可能熟悉的工具，来进行真正深入且有意义的产品分析。我曾在实验领域工作了很长时间，所以我非常喜欢好的转化率优化。那么，Tim，我们从你开始。我们如何从分析转化率入手，来审视一个产品的质量和使用情况呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarvo: One of the things that we can do now that I am probably personally causing in the in the internet world is we can just build a lot of a lot of product. I am always out there like I was thinking the other day I was like I'm going to tweet something where I tell PMS that they should just spend a month saying yes instead of saying no. Like let's ship some features. And I think AI has really accelerated product development, software engineering, getting innovation to the hands of customers. But the problem it has created is we don't know if those products are any any good. So the the perennial uh product problem which is you can ship things and they can not make the difference that you hope they would make. And so I'm really excited about this conversation because you are going to show us how to use AI and even some of these tools that software engineers or product managers might be familiar with to do really deep meaningful product analysis and I spent a lot of time in experimentation and so I love a good conversion rate optimization. And so Tim, we're going to kick it to you to start with. How do we start at the very beginning of analyzing kind of a product and its quality and its usage through analyzing conversion rates?</p>
</details>

Tim：是的，我喜欢这个话题。我觉得大家都在谈论“氛围感编程”（Vibe coding），但没人真正谈论“氛围感分析”（Vibe analysis），而我们正迅速朝那个方向发展。所以，让我们深入探讨一下。在我们做任何过于技术性的事情之前，我想在这里分享一系列广泛的例子，从非常复杂的到实际上极其简单的。我想每个人都知道，产品经理将不得不变得像工程师一样，然后我们还会遇到很多问题，你们所有人都将不得不成为分析师。所以，我认为我们可以在这里展示很多东西。我们想从一个非常简单的用例开始，我想每个听众都会觉得很熟悉。但我认为它阐明了这样一个观点：通常是最简单的 AI 工具，实际上能在这里产生最大的影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: Yeah, I love this. I think everyone's talking about Vibe coding, but no one's really talking about Vibe analysis and we're heading in that direction very quickly. So, uh, let's get into it. Um, so before we do anything too technical, I think we want to share a really broad range of examples here from the really complicated to the like actually incredibly simple. I think everyone knows PMs are going to have to become engineers and then we've got a lot of issues where all of you guys are going to have to come and analysts as well. Um, so I think there's a lot we can show here. So we want to start off with just a really simple use case that should be familiar to I think everyone listening. Uh, but I think it illustrates the point. There's often the most simple AI tools that can actually have the biggest impact here.</p>
</details>

Tim：在进入实际演示之前，我认为有必要快速停下来思考一下“分析到底是什么”这个问题。一旦你分解了这个问题，你就能更清楚地看到当前这些工具在哪些方面最有价值。大多数人直接跳到实际操作和处理数据的具体细节上。但实际上，这只是整个过程中的一小部分。最重要且往往最困难的事情，其实是首先获取正确的上下文，因为这正是区分好分析与坏分析的关键。你需要知道该问什么正确的问题，才能提出正确的假设，才能知道哪些分析从一开始就值得去做。你需要知道数据在哪里，并且需要能够很好地解读所有这些信息。而新的 AI 工具已经彻底改变了获取所有这些上下文的过程。你可以随心所欲地进行广泛探索，以令人难以置信的速度自助式地进入一个不熟悉的领域，这意味着你不仅可以提供更快的分析，还可以提供质量高得多的分析。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: Um, I think before we get into the actual demo, I think it's useful just to pause very quickly for a second on the question of what analytics actually is. So, I think once you break that down, you get a much clearer view of where these current tools can be most valuable. Um, I think most people jump straight to the nuts and bolts for actually manipulating and crunching data. But actually, it's really just a small part of the O4 process. And the most important often most difficult thing is actually just getting the right context in the first place because that's what separates good analysis from bad. Like you need to know to ask the right questions to come up with the right hypothesis to know what analysis is even worth doing in the first place. You need to know where the data lives and you need to be able to interpret it all very um very well. And the new AI tools have just absolutely transformed the process of just getting all that context. you can go as broad as you like self-s serve uh into an unfamiliar topic just incredibly quickly and that means you can not only deliver quicker analysis you can just deliver much better analysis too.</p>
</details>

### 上下文为王：利用企业级 AI 搜索进行初步诊断

Tim：为了说明这一点，我想讲一个我猜大家都很熟悉的情景：某个业务指标突然断崖式下跌，而没有人知道该怎么办。我将使用一个 Faire 的真实案例。这发生在我们去年年底的新客户转化漏斗上。如果你曾在增长团队工作过，你就会知道新客户对哪怕最微小的摩擦都极其敏感。所以，公司里几乎任何人做的任何事都可能影响到这类指标，无论是注册流程、搜索算法，还是配送政策，这些都可能产生影响。如果你不小心，你可能需要把整个业务都拆解一遍才能找到原因。所以，让我来展示一下如何能更快地完成这些事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: Um so to illustrate the point I want to talk through what sandy I'm guessing is a very familiar situation where a business metric suddenly drops off a cliff uh and no one's got a clue what to do with it. Um, so I'm actually I'm going to use a real example from fair for this. Um, and this happened to our new customer conversion funnel at the end of last year. So if you've ever worked in growth, everyone's going to know new customers, they're just extremely sensitive to even the tiniest little friction. So almost anything anyone does in the business anywhere can affect these kind of things. Whether it's a signup flow, a search algorithm, a shipping policy, like this all can affect these things. Um, and if you're not careful, you're going to have to decomp the entire business. So, let me show you how these things can just be done so much quicker.</p>
</details>

Tim：想象一下，这个问题落到了我的头上。我可能会先看几个现有的仪表盘，想搞清楚这里发生了什么。你可以很快看到，问题从九月份开始，十二月份又出现了一次下跌。而且问题似乎集中在结账阶段。但除此之外，我真的不知道具体是什么原因造成的。所以，让我们从一个非常宽泛的范围开始。我将分享我的屏幕。我将从进行一次企业级 AI 搜索开始。现在，我们用的是 Notion，但坦白说，现在每个文档系统都会有 AI 功能。如果还没有，那也快了。它们简直是游戏规则的改变者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: Um, so imagine this problem lands on my desk. Um, I might look at a couple of just existing dashboards that exist to say, uh, what's going on here? And you can see, uh, very quickly the issues started in September and there was another drop in December. And it seems to be concentrated in the checkout stage. But beyond that, I've really got no idea what could have actually caused that. So, let's start really bored. I'm just going to share my screen. I'm going to start just by doing an enterprise AI search. Now, we use notion, but frankly, every document system now is going to have an AI system. If they haven't got one yet, it's coming. And they are just game changers.</p>
</details>

Tim：我将非常简单地向 Notion 提问发生了什么。好的，为了让这更真实，我唯一要做的就是筛选日期范围。我不想让它作弊看到答案。它只能访问我当时做这件事时能访问到的信息。所以，我把日期设置到去年四月底，然后我们让它运行。我只问了：在2024年9月至12月期间，有哪些新功能或实验上线，可能增加了欧洲或北美新零售商在结账流程中的阻力？我还特意说明了，重点关注实验文档、PRD 和上线公告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: So, I'm just going to start very simply by asking notion what happened. Okay. So, the only thing I'm going to do, I'm going to just make this more realistic. I'm going to filter the date range. I don't want it cheating and looking at the answer. It's only going to have access to the things I had access to when I actually did this. So, I'm going to put it up to the end of April last year, which when I run it, okay? And then we're just going to get that running. So, if you think this, all I've asked is what experiments or new new features launched between September to December 2024 that could have added friction to the checkout process for new retailers in Europe or North America. And I just said um focus on XP docs uh PRDS and launch announcements. Okay.</p>
</details>

Tim：想想看，如果是在过去，我得翻阅上百万份文件，进行大量搜索，浏览无数个不同的 Slack 频道，才能搞清楚状况。但现在，看，我毫不费力地就立刻得到了一份非常有趣的假设清单，可供深入研究。你可以看到，它非常迅速地搜索了 Slack、Notion、Jira 以及其他所有系统。让我们挑几个来看看。很明显，我们在这段时间推出了某种结账实验，这绝对值得研究。我们在欧洲对一个结账拦截器做了些什么。好的，有很多有趣的事情可以深入挖掘。现在，只需点击几下，我就有了一长串清单，但我并不真正了解这些东西是什么。我有了所有额外文档的链接可以点击进去，但作为起点，我们先问一下，什么是 Aori？我们来挑一个问问。它会再运行一次小搜索，给我们更多信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: So, if you think about what I'd have to do in the past, I'd have to be like crawling through a million documents, doing a load of searches, going through a ton of uh different Slack channels trying to work out what's going on. And instead, look, I've got straight away a really interesting list of hypothesis to dig into with no work. And you can see it searched across Slack, Notion, Jira, and everything else very, very quickly. And uh if you let's just pull out a couple of these. So, what's happening? So, let's go. So, you've got uh clearly we launched some kind of um checkout experiment around this time. That's definitely worth looking in. Uh we've done something with a checkout blocker in Europe. Okay. Lots of interesting things to dig into. Now, with a couple of clicks, I've got a good long list, but I don't really know what these things are. So, I've got all the links of the extra documents I could go click into, but let's just ask as a starting point, uh what is Aori? Let's pick one of them. What is Aori? So, we'll just ask that. It's going to run another little search and give us more things.</p>
</details>

Tim：好的，它很快就给出了这个术语的解释。你可以看到，这是一个在欧洲涉及的法规，有人做了一些事情，开始要求提供更多细节，显然是想改善结账和转化率。我认为这是一个很好的起点。我得到了一些细节，但我觉得真正有趣的是，大家都知道，一份产品需求文档只是故事的一部分，从文档编写到代码实现，中间可能发生很多事。所以要真正了解情况，你通常需要深入一层，去了解具体的技术实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: Okay, so very quickly it's saying give me the term what it is. And you can kind of see it's okay. It's a um a regulation that's involved in Europe and someone's done something to uh start asking for more details. Clearly trying to improve checkout and conversion rates and they're trying to bring that one in. But I think this is a great starting point. I've got some detail, but I think what's really interesting here is everyone knows like a PD is one part of the story, but between a PLD being written and something going into the codebase, a lot can happen. So to actually understand what's going on, you usually need to go one layer data into the actual technical implementation.</p>
</details>

### 深入代码库：非技术人员如何用 AI 查询代码

Tim：我想向你们展示一个我用来做这件事的快速技巧。我认为这些 AI 工具最棒的一点，就是让像我这样的非技术人员能够接触到他们以前无法接触的东西。一个很好的例子就是能够与产品代码库对话。我不是工程师，我不会写 Cotlin 或 Swift。天哪，我以前还是个律师。但我可以对我们的代码库进行深度研究，以确切地找出这个特定功能实现了什么以及何时实现的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: And I want to show you like a quick trick uh of how I do that. Um, so I think one of the best things about these AI tools is just the ability of someone who's like nontechnical to access things that they couldn't previously access. And a great example of that is just being able to talk to the product codebase. I'm not an engineer. I can't write Cotlin or Swift. I used to be a lawyer for God's sake. Um, instead I can run a deep research against our codebase to find out exactly what got implemented for this particular feature and when.</p>
</details>

Tim：我将用两种不同的方式来做这件事。我会在 ChatGPT 上做，我认为这非常简单，任何人都可以非常快地复制。大家都很熟悉它。然后我会在 Cursor 上做，它更专业一些，但功能极其强大。我将打开一个新的聊天，并将其设置为深度研究模式，确保我的 GitHub 已经连接。连接 GitHub 并不需要技术操作，你只需要点几次“是”就可以了。你之所以要在深度研究模式下做，只是因为这是唯一可以访问它的方式。它现在会搜索我们的代码库，就像它通常在深度研究中搜索网页一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: Now I'm going to do this in two different ways. I'm going to do it on chatbt which I think is very simple and anyone can replicate incredibly quickly. Everyone's familiar with it. And I'm going to do it on cursor which is a bit more specialized but just incredibly powerful. Um so I'm going to open up a new chat and I'm going to put it into deep research mode and make sure my GitHub is connected. So all you do, it's not technical to do that. You just need to say yes a few times to get your GitHub connected. Um the only reason you do it on on deep research is just because it's the only way you can actually access it. It's going to search our codebase now um in exactly the same way it would normally search the web on a deep research.</p>
</details>

Tim：我将输入一个提示。让我来解释一下这个提示在做什么。我给了它一个角色：“你是一名高级主管工程师，在 Cotlin、Swift、TypeScript 等不同代码库方面都有专业知识，并且曾在 Faire 工作。” 我给了它一个任务：“请对代码库进行一次法证调查，生成一份关于2024年6月至2025年2月期间，结账时 eoree 收集流程所有变更的全面时间序列报告。” 剩下的只是一些关于我希望输出格式的细节。我说我想要一个精确的摘要，一个包含所有不同 PR 和提交的表格，它们涉及的内容，并且我特别希望它关注这些提交对零售商体验的实际影响。就像，用外行人的语言向我解释。然后我在这里加入了一些要求，只是为了给它更多上下文：精确、简单、清晰的语言，只使用 GitHub 来源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: So I'm just going to put in a prompt. Let's just copy that in. Now let me talk a little bit about what this prompt is doing. So I've given it a role. I've said you're a senior staff engineer and you've got expertise in all these different code bases cotlin swift typescript and you were working at fair and I've given it a task to say please conduct a forensic investigation of the codebase to produce a comprehensive timesequence report on all changes to the eoree collection process at checkout between June 24 and February 25. So just making sure we don't miss anything and the rest is just a bit of detail as to what I want this to look like. So, I've said I want an exact sum. I want a table with all the different PRs and commits, what they've gone into, and I really wanted to focus in on the actual impact these commits had on the retailer experience. Like, explain it to me in layman's terms. Um, and then I've just put a few requirements in here just to give it a bit more context. So, be precise, simple, clear language, only use GitHub sources.</p>
</details>

Clarvo：我想指出一点，你是在一个我称之为“业务事件”的背景下使用这个提示，对吧？新用户注册量下降了。但这个提示，我希望正在观看或收听播客的工程师们能特别注意，因为如果你正处于一个一级严重事件（SEV one incident）中，需要追踪谁做了什么。我知道我们很多工程团队要么是手动查看代码，要么是使用那些专门的代码生成工具来做这件事，但可能没有想到用像 ChatGPT 深度研究这样的工具来为你完成。而且，如果你是一个希望在事件中提供帮助的产品经理，这也许是你可以代表你的工程团队承担的任务，在后台提供一些额外的上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarvo: I want to call out here um you're you're using this prompt in the context of sort of a what I would call like a business incident, right? New user signups just dropped. But this is a prompt that I want the engineers watching or listening to the podcast to really pay attention to because if you're in the middle of a, you know, SEV one incident and you need to trace who did what. I know so many of our engineering teams are looking either manually looking through code, looking at these specialized kind of codegen tools to do this, but probably aren't reaching for something like ChatGpt deep research to just go ahead and do this for you. And if you're a product manager looking to be helpful during an incident, this is maybe a task you can take on on behalf of your engineering team just to provide some additional context in the background.</p>
</details>

Tim：百分之百同意。我认为这对工程师很有用，对促进人们与工程师更好地沟通也很有用。我认为在这里可以做的事情太多了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: 100%. I think this is great for engineers. I think it's great for just getting people to talk better to engineers. I think there's just so much you can do here.</p>
</details>

Tim：这需要一些时间。所以当它运行时，我想向你展示如何在 Cursor 中做这件事，因为我认为 Cursor 是那种大家都认为是为“氛围感程序员”（vibe coders）和工程师准备的工具。他们并没有真正思考它还能做什么。我认为对于分析师和非分析师来说，它都是一个不可思议的工具。越来越多的人在谈论“上下文工程”（context engineering）而不是“提示工程”（prompt engineering）。我喜欢这个说法。它实际上解释了我们在这里试图做什么。对我来说，Cursor 就是终极的上下文引擎。你可以将它连接到 **MCPs**（Model Context Protocol，即模型上下文协议：一种允许 AI 模型与外部工具和服务进行交互的标准）。基本上，我可以将它连接到我们业务中的每一个系统，以获取我需要的所有数据。这使得它成为一个获取上下文以进行分析的极好加速器。我发现，它得到的结果越来越比 TPD 上的深度研究要好。所以两者都很好，都是游戏规则的改变者，但我认为这个更快更好一些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: So that's going to take a bit of time. So while that's running, I want to show you how to do this in cursor because I think cursor is one of those tools that everyone thinks of for vibe coders. They think of it for engineers. They're not really thinking uh about what else it can do. And I think for both analysts and non-analysts alike, it's an incredible tool. So, um I think more and more people are talking about the phrase context engineering rather than prom engineering. I love that. Um it sort of actually explains what we're trying to do here. And for me, just cursor is the ultimate context engine. You can hook it up to MCPs. Um so basically, I can hook it up to every single system in our business to get all the data I need. And that just makes it such an incredibly good accelerator for getting context from doing analysis. So I actually find increasingly this is getting better results than deep research on TPD. So both are good, both are game changers, but I think this is just a little bit quicker and better.</p>
</details>

Tim：我将把完全相同的提示放入 Cursor 中，然后我们会看到两者同时运行。完全相同的提示。为了让你有个概念，ChatGPT 上的任务甚至还没开始，而在 Cursor 中，我们已经开始了。它有一个很好的待办事项列表，说它将在 GitHub 中搜索所有正确的东西，然后进行法证分析。你可以看到它已经开始拉取代码和拉取请求了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: So I'm just going to make sure my uh MCPs all hooked up. And then all I'm going to do is I'm going to drop exactly the same prompt into cursor and we'll see the two running. So exactly the same prompt. So just for context, we are not even started on our uh hasn't even got off to the races at all on on the chat. And straight away in uh in cursor, we're going and finding it's got a nice to-do list. It's saying it's going to search all the right things in GitHub. It's going to then forensically analyze it. Uh and we'll just let this run for a little bit. You can see it's already starting to pull in the code and the pull request.</p>
</details>

Clarvo：我想指出一件有趣的事情。我以前管理过很多产品、工程和数据组织。工程团队入职第一天肯定要做的是：获取所有代码仓库的访问权限，设置好 GitHub，搭建好本地环境。我知道数据团队通常也有类似的入职流程，因为他们与生产数据紧密合作。我认为即将改变，或者如果还没改变就应该立刻改变的一件事是，产品经理和设计师的入职流程，前七天必须包括至少对 GitHub 的读取权限，拉取本地代码仓库，设置好所有的 MCP。因为代码现在已经成为任何从事工作的人的数据源，而不仅仅是写代码的人。所以我看到这个，就觉得领导者们需要注意，并重新思考他们的入职流程。因为你不想在这种情况下才去问，“谁能给我 GitHub 权限？我能访问吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarvo: one of the things that I think is interesting to call out is you know I've run a lot of product engineering data orgs before engineering certainly day one what are you doing you're getting access to all the repos you're getting set up with GitHub you're pulling your your local environment together I know that data teams often have a similar onboarding because they're working so closely with production data one of the things I think is going to change or if it hasn't already should change right now is I think product managers and designer onboarding first seven days has to include access read at least read access to GitHub, getting your local repository pulled down, getting all your MCPs set up because it just code has become now a data source for anybody doing work, not just people writing code. So I look at this and I think leaders out there need to pay attention and rethink basically their onboarding process because you don't want to be in a situation like this and go like can somebody give me me GitHub like can I can I get access</p>
</details>

Tim：这甚至超出了那个范围。每个人都应该有权访问每个系统，而且应该从第一天就开始。这些工具是我们见过的最好的入职加速器，无论是对分析师还是工程师。人们可以很快地掌握上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: it goes even beyond that like everyone should have access to every system and it should be from day one like these tools are just the best on boarding accelerator we've seen it for analysts we've seen it for engineers suddenly people get the context very quickly</p>
</details>

Tim：好的，它已经完成了，总结了所有内容，并开始为我们写出东西了。你看，我立刻就得到了一个很好的摘要。我最感兴趣的是这个。好的，我得到了一个表格。对于那些看不到我屏幕的人，我得到了一个表格，其中包含了影响这个流程的每一个 PR，从24年7月开始，一直到大概12月或2月。它给了我一个指向实际将此推入代码库的特定 PR 的精确链接。它给了我它的名称，以及它做了什么的摘要。它说明了谁受到了影响，以及对零售体验的影响是什么。任何做过这种事的人都知道，要筛选所有代码并真正理解发生了什么，是多么困难。而现在，这可以非常快地完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: okay so we're already off it's summarized everything it's written us and we're actually starting to write things out here so straight away you can see I've got a nice exact summary it's g a few things but this this is what I was most interested in. Okay, so I'm getting a table here. For those that can't see my screen, I'm getting a table with every single PR that affected this part of the flow from look, it starts in July 24 all the way to still going. Uh, but it'll probably go to somewhere like December or February depending where it's going to go with all of these things. Now, let's just call out what this is doing. So, it's giving me an exact link to the specific PR that actually pushed this into uh the codebase. It's giving me the name of it and it's giving me a summary of what it did. It's saying who was affected and it's saying what was the impact on a retail experience. Now, if anyone's done this kind of thing, it is so difficult to do and actually like pick through all the codes and actually understand what's going on on this and it can just be incredibly quickly.</p>
</details>

Tim：所以，在对这个功能一无所知的情况下，我很快就能对发生的事情变得非常了解。我可以看到，在九月中旬，也就是这次下跌首次发生的关键时刻，有一个实验上线了。如果我滚动到十二月，是的，你可以看到它对所有用户都上线了。所以这现在看起来像一个非常有趣的、可能是决定性的线索，我们可以深入调查。因此，我不用花几天时间和人们讨论所有可能的假设，现在我可以和完全正确的同事进行非常有针对性、有信息量的对话，从一开始就用数小时而不是数周的时间来解决这个问题。所以，即使我们还没有做任何数据处理，这已经可以为我们带来颠覆性的改变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: And so, very quickly knowing nothing about this feature, I can already start to get really smart on what happened. And I can see if I dive down here yet, you can see there was an experiment launched in midepptember, right in the sweet spot of when this uh drop first happened. And if I scroll through getting through to looking at December, uh yeah, you can see it launched all treatment all users went live. So this now looks like a really interesting potentially smoking gun that we can debug into. And so instead of spending days talking to people about all the potential hypotheses, uh I can now speak to exactly the right colleagues and have a really targeted conversation, an informed conversation right from the off with them uh to crunch through this problem in a matter of like hours rather than weeks here. So even if we've done any data crunching, this can just be absolutely gamechanging for us.</p>
</details>

Clarvo：是的，这让你能够比我过去在做这类分析时深入得多。当你运行这些高频次的实验项目时，你会有很多并发的实验。实验会与功能滚动发布、与普通上线相冲突。仅仅是想要分解出你的应用在任何一天处于什么状态，都是非常具有挑战性的。即使你能手动研究，在功能层面得到这些信息，比如“是的，今天我们上线了一页结账功能”，我认为真正的挑战在于，“我们实现得好吗？里面有什么我们应该担心的吗？我们有没有排除任何用户？”所以我确实认为，在进行这类法证分析时，能够使用代码作为详细的真相来源，对于弄清楚你的业务到底发生了什么，真的能起到决定性作用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarvo: Yeah. And it allows you to go a lot deeper than you know I've been able to do historically on these kinds of analyses. You know, when you're running these high velocity experimentation programs, you have so many concurrent experiments. You have experiments colliding with rollouts, colliding with just plain launches. And just trying to decompose what was the state of your app on any single day is really challenging. And even if you can do the manual research to get this at a feature level, like yeah, today we launched the one one page checkout. I think the real challenge is well, did we implement it well? Is there anything in there that we should like worry about? did we exclude any users from that? Like, and so I do think the ability to use code as a a detailed source of truth when doing these kinds of forensic analyses really makes the difference in figuring out what's going on with your business.</p>
</details>

### 从诊断到分析：端到端的 AI 数据分析工作流

Clarvo：好的。那么在这之后我们做什么呢？你已经确定了转化率问题，可能也找到了几个问题来源。你会去和同事交谈，会去看代码。我们如何进行实际的分析呢？我知道我们说要做一些“氛围感分析”，但我们还没看到多少数字。所以，Alexa，当我们确定了一个问题或一个我们想追求的机会后，我们如何进行实际的数据分析？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarvo: Great. Now what what do we do after this? So you've identified you have a conversion rate problem. You've identified maybe a couple of sources of the issue. you're going to go talk to your colleagues, you're going to look at the code. Um, how do we actually do some analysis or I know we said we were going to do some vibe analysis and we have seen very few numbers. So, Alexa, how do we do actual analysis of data when we've identified a problem or an opportunity we want to go after?</p>
</details>

Alexa：是的。这显然是一个相当经典的分析任务。我将带大家走一遍流程：我们推出了一个新产品功能，我们想了解它的表现如何。所以，我将带大家从头到尾，从理解功能是如何构建的，到分析其性能，再到撰写一份最终可以提交给我们高管团队的摘要。就像 Tim 提到的，在没有 AI 的情况下，特别是上下文收集，将意味着花费数小时翻阅所有的规格说明和 PRD，从头开始编写 SQL 查询，然后花大量时间撰写和编辑文档。而有了 AI，我可以像 Tim 刚才那样，直接从代码库中提取上下文。我可以生成查询，并起草一份综合性的文档。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa: Yeah. So, obviously like a quite classic analytics task. I'm going to take us through, you know, we launched a new product feature and we actually want to understand how it did. So, I'll take us end to end from understanding how the feature was built, analyzing its performance, and then producing a summary that could eventually go to our exec team. Um, like Tim kind of touched on, without AI, especially the context gathering would mean hours spent digging through all the specs and PRDs, writing SQL queries from scratch, and then, you know, spending a lot of time writing and editing a doc. So with AI, I can pull context similar to what Tim just did directly from the codebase. I can generate queries and I can draft draft a synthesized doc.</p>
</details>

Clarvo：在你准备的时候，我必须说，人们以为我深入研究 AI 是因为我觉得编程很有趣。但实际上，是它让我的 SQL 不再那么丑陋了。这是我多年前的第一大用例。我当时想：“谢天谢地，现在我不用再用我那恶心的 SQL 去烦我的同事了。我可以用我那可怕的 SQL 去烦 AI，它能让它变得更高效一些。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarvo: And while you pull that up, I have to say people think that why I got into AI in a deep way was because I thought it was so fun to code. And it was actually it made my sequel so much less ugly than it used to be. It was like my number one use case however many years ago. I was like, "Thank God, now I don't have to bother my colleague with my disgusting SQL. I can bother uh AI with my horrifying SQL and it can make it a little bit more uh efficient."</p>
</details>

Alexa：是的，即使是过去几个月的 ChatGPT，对于 SQL 查询来说也已经是游戏规则的改变者了。ChatGPT 的问题在于，你必须花大量时间提供上下文，比如确切的表名、字段名。所以，使用 Cursor——虽然这不是它最宣传的用例——来实际创建、编辑和编写 SQL，已经相当改变游戏规则了，特别是因为它对上下文的感知能力很强，我稍后会谈到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa: Yeah. I mean, even just chatgbt for the last couple of months has been a j game changer for SQL queries. The problem with chat GBT is you had to spend a good amount of time giving context like the exact table names, the exact field names. And so using I mean it's not its sort of most marketed use case but using cursor which is what I'm going to show today to actually create edit write SQL has been pretty gamechanging um especially because it's so contextaw aware and I will talk about that.</p>
</details>

Alexa：Cursor 运行一些查询可能需要三到四分钟。所以我先启动这个提示，然后我会解释上下文和我做了什么。当它运行时，我来设定一下场景。上个月，也就是七月，我们为我们一直在试行的一种新支付方式重新设计了注册流程。当客户成功关联他们的银行账户用于支付时，这个注册过程就算成功了。我们的旧流程已经上线了几个月，我们有一个假设，认为我们可以改进它。所以我们重新设计了流程。因为这是一个试点项目，我们实际上没有足够多的零售商或用户来进行 A/B 测试。所以我只需要做一个非常直接的分析：之前表现如何，之后表现如何？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa: So cursor can take like 3 to four minutes to run some queries. So I'm going to just kick off this prompt and then I'll explain the context and what I have done. So while that's running, I will set the stage. Last month in July, we redesigned the signup flow for a new payment method that we have been piloting. And this process of signup is successful when a customer links their bank account uh for the payments. And our old flow had been live for a few months. We had a hypothesis that we could improve it. So we redesigned the flow. Because this is a pilot, we actually like didn't have enough retailers or or users. um to run an AB test. So I just needed to do a pretty straightforward, you know, how was this performing before, how is it performing after?</p>
</details>

Alexa：过去，这同样意味着要翻阅大量文档，或者更现实地说，就是去问工程师一些问题，比如：我们构建了什么？谁能看到它，为什么？发出了哪些前端事件可以用来分析？虽然我在最终规格阶段与工程师紧密合作来确定这些，但这些细节很容易被遗忘，特别是我们常常在功能上线几周甚至几个月后才回来分析。我会说，我可能会像 Tim 一样，从 Notion AI 的上下文构建开始，但我们已经展示过那个了。所以，我直接跳到代码库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa: Um historically, again, that would have meant a lot of digging through documentation or more realistically just pinging an engineer to ask questions like, okay, what did we build? Who sees it and why? What front-end events are emitted that I can use to analyze this? Um, and while I do work closely with our engineers during the endspec phase to like figure this out, those details are easy to lose track of, especially like we're often coming back to analyze things, you know, weeks or even months after the feature launched. I will say that I probably would start with notion AI context building similar to Tim, but we already showed that. So, I'm skipping straight to the codebase.</p>
</details>

Alexa：我的提示远没有 Tim 的那么漂亮。我不会花很多时间在上面。我觉得用 Cursor，你总可以迭代。所以我想了解“设置向导”，也就是我们称呼这个新流程的名字。我让它研究我们的代码库。我基本上问了谁、什么、哪里、何时、为什么。所以如果我们看这个答案，好的，它正在查看代码库。我不是工程师，不太懂这是什么意思，但它告诉我在我们的代码里，这被称为“首次运行用户体验”。它告诉我一些关于标志的信息，比如不能是子用户。这里有很多细节。它告诉我用户何时会看到这个流程，流程中会发生什么，以及步骤的顺序。这非常重要。如果我要分析一个漏斗，我需要知道事情发生的顺序。然后，如果有一个成功事件，比如设置完成时，它会给我一堆可以用来分析的事件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa: And if we go up to this prompt, um, my prompts are way less pretty than Tim's. I don't like spend a lot of time on them. I feel like with cursor, you can always iterate. And so I wanted to understand the setup wizard, which is what we called this new flow. I told it to research our codebase. And I essentially asked who, what, where, when, why. And so if we go to this answer, we can see, okay, it is, you know, looking into the codebase. And you know, I'm not an engineer. I don't really know what this means, but it, you know, we called this in our code the first run user experience. And it tells me about some flags, cannot be sub users. There's like a lot of detail here. Um, and it's telling me when users see this flow, what happens during the flow, the order of steps that happen. That's like pretty important. If I'm going to analyze a funnel, I need to know like in what order did things happen? and then if there is a success event like when the setup is complete and then it gives me a bunch of events that I can use to analyze it.</p>
</details>

Alexa：这已经是一个巨大的改变了。过去我得依赖像 Notion 这样的二手信息来源来拼凑出它是如何构建的。而用 Cursor，就像你说的，我可以直达源头，并让它翻译成自然语言，这给了我更多的信心，因为它反映的是实际线上的情况，而不是某人记得写下来的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa: So this is already such a gamecher like in the past I would have leaned on secondhand sources like notion uh to piece together how it was built with cursor like you were saying I can go straight to the source and have it translated into natural language and that just gives me a lot more confidence because it reflects what's actually live not what someone remembered to write down.</p>
</details>

### 利用语义层和 MCP 加速 SQL 查询

Alexa：对于下一个提示，我只是说我想从高层次了解这个功能的表现如何。我给了它一些快速的背景信息，比如我们的目标是让它变得更好。我像 Tim 一样，给了 Cursor agent 相当大的自由裁量权。我说，好吧，你想出理想的输出字段。我有一些想法，但这取决于你。然后，我确实发现，明确告诉它创建一个文件很重要。它有时会忘记这样做，直接在对话侧边栏里写 SQL。还有，使用 MCP 连接。我费了这么大劲设置它，我希望它能使用 Snowflake MCP 连接，然后实际对文件进行质量检查（QA）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa: So uh with this next prompt um I again not the most like sophisticated prompt. I'm just saying I want to understand at a high level how this feature has been performing and I give the quick context of you know our goal is to make it better. That's pretty obvious that I just want to spell that out. And I like Tim giving a fair amount of discretion to the cursor agent. I'm saying okay come up with the ideal output fields. I have some ideas but like you know it's up to you. And then two I do find that telling it explicitly to create a file. It sometimes forgets to do that and just writes the SQL directly in the um conversation sidebar. Uh use the MCP connection. Like I went through all this trouble to set it up. Uh I want it to use the Snowflake MCP connection and then actually QA the file.</p>
</details>

Alexa：这就是 Cursor agent 和 Snowflake MCP 如此强大的地方。它不仅能写 SQL，这是 ChatGPT 过去一年一直在为我做的事，它还能运行它，查看输出，然后做出自己的初步判断和合理性检查，这太酷了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa: And that's what's so powerful about this cursor agent and the snowflake MCP is not only is it writing the SQL, which is what chatgbt has been doing for me for the last year, it is running it, looking at the output and then making like its own sniff test sense check decisions which is just so cool.</p>
</details>

Alexa：我想强调的另一件事是，我之所以有相当大的信心这会相对快速地工作，是因为我和我们的数据团队已经做了大量工作来创建一个所谓的**语义层**（Semantic Layer）。大约六个月前，我们出色的数据工程团队决定创建一个全公司通用的语义层。语义层本质上就是我们业务术语、表、字段、过滤器、指标等对 LLM 的一种翻译。AI 可以查看这些文件并理解我们表的意思。这个通用的语义层覆盖了我们最常用的通用表，如订单、商品、用户等。他们将其连接到一个自定义的 GPT，公司里的任何人都可以去问一些非常基本的问题，比如“去年欧洲的平均订单额是多少”，并很快得到答案。这极大地解放了我们的分析团队，我们不再需要为人们回答这些问题。他们可以自助服务，这实现了数据的民主化，也为我们节省了大量时间，让我们能专注于更深入的分析。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa: Okay. Okay. And then another thing I want to call out as we are running this, the reason why I have a fair amount of confidence that this is going to work relatively quickly is because I and our data team have done a fair amount of work to create what's called a semantic layer. And so uh first our amazing data engineering team like six months ago decided we were going to create like a general company semantic layer. And a semantic layer is essentially just a translation for an LLM of like our business terms, tables, fields, filters, metrics, etc. And AI can look at those files and understand like what our tables mean. This general one covered like our mostused generic tables, orders, items, users, etc. Um, and so they connected it to a custom GPT and anyone in the company can go ask pretty basic questions like what was the average order size in Europe last year and get an answer really quickly. And so that's been a huge unlock to save our analytics team time of like we're not answering these questions for people. They can self-s serve. It's just democratizing data and you know saving us a lot of time so that we can focus on more deep analysis.</p>
</details>

Alexa：为了进行更深入的分析，我们需要的不仅仅是这些基本表。所以在我们一位数据工程师的大力帮助下，她专门为我的业务范围构建了一个专门的语义层作为测试。我是公司里第一个这么做的，但我们计划将其推广到所有业务范围。基本上，这个语义层定义了我最常使用的表、连接、过滤器和指标。因为它存在于我们的代码库中，就在我们的数据科学仓库里，Cursor 可以直接利用它，这使得运行 SQL 的零样本能力变得非常惊人。

<details>
<summary>View/Hide Original English</我看过几个这样的例子，它们看起来确实就像定义好的术语表。这个表代表这个意思，这个字段代表那个意思。如果你想查询平均订单价值，应该这样做。它几乎就是你的文档，只是以一种围绕常见查询的更结构化的形式存在。我认为这很好的一点是它可以通过代码来管理。你可以更改它，更新它，添加新东西。我还认为，对于数据工程师来说，它减少了数据仓库设置的一些不必要的复杂性，因为以前你需要创建这些聚合表和定义好的指标，并希望人们能以正确的方式编写查询。而现在，你可以定义这些规范的查询，并且知道无论你的表结构如何，他们都能得到正确的答案，我认为这在数据工程方面是相当不错的。
<p class="english-text">Alexa: And for deeper analysis like we needed something more than just these basic tables. And so I with a lot of help from one of our data engineers she built a specialized semantic layer just for like my scope as a test. I was you know we're the I was the first one in the company to do this but we're planning on kind of rolling it out to all of the areas of scope. And you know basically this semantic layer just defines the tables that I use the most. joins the filters, the metrics, and because it lives in our codebase, it's like in our data science repo, cursor can just tap into it, and it just makes the zeroot ability like insane of running SQL. I've seen a couple of these and yeah, I don't know what yours looks like, but they really just look like defined terms tables. This table means this, this field means that. If you're trying to query average order value, this is how you do it. And it's almost your documentation in a little bit more of a structured form around common queries. And what I think is nice about this is its ability to be managed by code. You can change it, you can update it, you can add new things. I also think for the data engineers out there, it reduces a little bit of needed complexity on the data warehouse setup because previously you were creating these like aggregate tables and these like defined metrics and you're hoping people were writing queries the right way and now you can deci define these canonical queries and know that no matter kind of like what your tables look like, they're going to get to to the right answer, which I think is quite nice on the data engineering side.</p>
</details>

Alexa：我做的另一件事是，为了确保我能有效地进行质量检查，我在我的 Cursor 规则中告诉它要为每一个 **CTE**（Common Table Expression，即公用表表达式：在 SQL 查询中定义的临时命名结果集）添加注释。这样我就知道，抱歉，CTE 是编写 SQL 时经常创建的 SQL 片段，我只想知道每一步发生了什么，这样当我看 SQL 时，我可以说，好的，agent 说它在做这个，看着这段代码，我能确定它确实在做这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa: the other thing that I have done to really make sure that I can QA this effectively is I in my cursor rules I tell it to comment every single CTE so that I know what the and sorry CTE are like sections of SQL that often are created when you're writing SQL and I just want to know each step of what is happening so that as I'm looking at the SQL I can say okay the agent said it's doing this and like looking at this code I can actually tell that it's doing this</p>
</details>

Clarvo：工程师们捂住耳朵吧，因为工程师们讨厌我说这个，他们非常讨厌。我喜欢过度注释的 AI 代码。让我告诉你为什么。因为当你不是自己写这段代码时，你真的需要理解代码设计背后的思考过程。让 AI 注释它写的代码，为你提供了一种自然语言的方式来理解你对实现的理解是否与代码的实际技术实现相符，这是基于 AI 自己的推理。如果你想，可以删掉它，我不在乎。我知道所有反对过度注释代码的论点，但我认为这对人类审查有很多好处，而且对于 AI 回去处理它时也是很好的上下文。好了，工程师们，你们现在可以把耳朵捂开了。你们可以在 Twitter 或 X 上对我大喊大叫。但我也做同样的事，我会说，在代码里加上注释，这样我能理解你是如何一步步分解这些的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarvo: so engineers cover your ears because engineers hate hate hate hate hate when I say this they hate it I love over commented AI code and let me tell you why because when you are not writing this code you really need to understand the thought process behind how the code was designed and having AI comment the code that it writes gives you a natural language way to understand if your understanding of the implementation matches the actual technical implementation of the code itself based on the AI's own reasoning fine delete it if you want to I don't care I know all the arguments against over commented code and I think there's a lot of benefits for human review and and it's also great context for AI when they go back and work on it. So engineers, you can now uncover your ears. You can yell at me on Twitter if you want to or an X if you want to. But I do the same thing where I say go ahead and comment in the code so I can understand how you've decomposed these step by step.</p>
</details>

### 从数据到洞察，再到报告

Alexa：我们跳过几个小时。到目前为止，我的目标是得到一个干净的基础查询，我可以用它来在 Mode（Faire 的商业智能工具）中创建仪表盘。作为战略与分析团队，我们做的很多工作就是创建表格，然后用这些表格制作漂亮的图表来讲述一个故事。所以，我们假设我花了几个小时用 Cursor 优化查询。我实际上为旧流程和新流程都做了一个。这也是一个真实的用例，和 Tim 的一样。然后我在 Mode 中构建了一些可视化图表。非常酷的是，实际上有一个 Mode MCP，我可以告诉它直接查看一个仪表盘。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa: but basically like we're going to skip ahead a couple hours here because um up until this point like my goal was to get this kind of clean base query that I could use for dashboards in mode which is fair's BI tool. You know, a lot of what we are doing as the strategy and analytics team is creating creating tables that then can be used for pretty charts to tell a story. And so let's pretend that I spent a few hours with cursor like refining queries. I actually did one for the old flow and the new flow. I actually did do this. This is also a real use case like Tims. Um and then I built some visualizations in mode. What's really cool is that there is actually a modem MCP and I can tell it to view a dashboard directly.</p>
</details>

Alexa：在这个提示中，我告诉它，嘿，去看看这个 Mode 仪表盘，并使用这个 MCP。我还给了它我用 Cursor 写的、为那个仪表盘提供支持的直接 SQL。我只是向它索要一些详细的要点和下一步行动。我给了它一点上下文，并告诉它在必要时提出澄清问题并使用 MCP。MCPs，我不确定我们是否已经定义过它，但我相信它代表模型上下文协议，它们是如此强大。我觉得这是最让我感觉像魔法的时候。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa: so if we go back to this prompt and I'm just going to tell it to run this tool. Okay. So, I'm telling it again like, hey, go look at this mode dashboard and use this MCP. I also give it the direct SQL that's um that I wrote with cursor uh that's powering that dashboard. I'm just asking it for some detailed takeaways and next steps. I give it a little bit of context. Um and I tell it to ask clarifying questions and use the MCPS if necessary. The MCPS, I think I'm not sure if we've defined it yet, but model context protocol, I believe is what it stands for, are like so powerful. I think that that's when this has felt like magic the most.</p>
</details>

Alexa：如果我们看这里的结果，嗯，关键要点和下一步。酷。所以，看起来我们做得很好。耶！Faire。它给出了一个相当详细的列表，包括漏斗分析、洞察和关注点、可行的下一步等等。这已经是一个相当不错的起点。但归根结底，像这样的分析只有在你能够清晰地传达它时才有意义，对吧？你需要说服人们相信你试图传达的信息。所以我们也有一个 Notion MCP，我将要求 Cursor 创建一个文档，以结构化的方式记录我们的发现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa: And so if we go into the results over here, um, next key takeaways and next steps. Cool. So, uh, we looks like we did a good job. Yay. Fair. Um, and it gives like a pretty detailed, um, list of, you know, the funnel analysis, insights and concerns, actionable next steps, etc. Like this is already a pretty good sort of output to start with. Um, but at the end of the day like analysis like this only matters if you can communicate it clearly, right? Like you need to sort of convince people of whatever you are trying to communicate. So we also have a notion MCP and I'm going to ask cursor to create a doc that captures our findings in a structured way.</p>
</details>

Clarvo：我想暂停一下，因为我们在大约15分钟内完成了这些：你接手了一个问题，对一个功能变更进行了前后对比分析。你写了 SQL。你没有使用任何可视化分析工具。你写了纯粹的、好的、可追溯的 SQL，对每日数据进行了漏斗分析。非常有趣。你为它制作了一个仪表盘，这样你的业务用户就可以使用它。然后你对那个仪表盘进行了元分析，使用 MCP 来实际读取仪表盘，进行初步分析，不仅创建了结果摘要，还提出了建议的下一步。然后你将使用 Notion 将其发布给你的业务部门。我必须说，我与很多数据团队合作过，他们大多数时间都在说，“这个分析的优先级是什么？我们有积压的工作。我需要数据工程支持。好吧，这是仪表盘。”而那些一年内能升职三次的人，会多走一步，他们会说：“这是分析，这是我建议的下一步，而且我把它做得很好看，这样你就可以和你的老板分享了。”我看着这个，心里想：“哦，天哪，我要提拔这个数据分析师。”他们真的很棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarvo: And I want to pause really quickly because we have done this in maybe 15 minutes where you have taken a problem kind of like a pre and post analysis of a feature change. You have written SQL. You have not used a Wizzywig analytics tool. You have written straight up good SQL traceable SQL to do a funnel analysis of that on a daily basis. Very interesting. You have made a dashboard for it so that your business users can use it. You have then done a metaanalysis of that dashboard using um the MCP to actually read the dashboard, do a first pass analysis, create a summary not only of the results but of recommended next steps and then you are going to publish that to your business using notion. Now I have to say I have worked with a lot of data teams and most of them spending their time saying what is the priority of this analysis? we have a backlog. I need data engineering and fine, here's the dashboard. Like it's like the ones that like get promoted three times in a year that go that extra step where they're like, "And here's the analysis and here are my recommended next steps and I made it pretty so you can share it with your boss." And I just think like I was watching this and I was like, "Oh man, I'm going to promote this data analyst."</p>
</details>

### 自动化重复工作：构建实验结果分析 Agent

Tim：我们已经谈了宏观层面，也谈了一个非常详细的分析师日常工作。但我认为这些 AI 工具的另一个好处是加速流程，比如自动化分析过程中那些常规的、影响较小的步骤。举个好例子，我们想向你展示一个我们构建的快速 agent，它可以自动化撰写实验结果的过程。在 Faire，我们一个月可能在产品上运行数百个 A/B 测试，每个实验都需要被监控、评估、记录，这占用了我们分析师大量的时间。如果我们不能很快地处理好这些，我们的团队就可能成为瓶颈，减慢我们的上线速度，这是任何人都不想看到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: Yeah, you should close to your heart. So, look, we've talked about the big picture. We've talked about a really detailed sort of actual analyst of how they do their day job. But I think one of the other things these AI tools are just so good is just accelerating process like automating away some of those routine lower impact steps in the analytics journey. And so as a good example we want to show you a quick agent we built which automates the process of writing up experiment results. So across fair we might be running I don't know hundreds of AB tests on the product a month and each of those experiments needs to be monitored assessed documented and that just takes up so much time for our analysts. So if we don't stay on top of this very quickly it's our team that can become the bottleneck and slow down our launch velocity which is the last thing anyone wants.</p>
</details>

Tim：我想强调的是，构建这些东西是多么简单。一旦你经历了设置 Cursor、配置好 MCP 的痛苦过程，实际上启动任何你能想到的新 agent 都非常快，而且对任何人来说都非常非技术性。它都依赖于一个 Cursor 规则文件。如果你不知道这是什么，它们实际上只是一种文件类型，一个 MDC 文件，这些 agent 知道去查找并知道它们可能包含指令。它们设置起来非常简单，基本上就是纯英文。你只需写下一行简单的条目说明它是什么。比如：“使用 EPO 数据撰写实验结果的格式”。EPO 只是我们使用的实验工具。然后你选择何时应用。我选择了“智能应用”，我相信模型能自己判断何时需要使用它。它们做得很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: Uh, one thing I want to really really stress here is just how straightforward these things are to build. Like once you've gone through the pain of setting up cursor, getting your MCPs in place, actually spinning up any new agent you can think about is just so quick and so non-technical for anyone to do. So it all runs off a a cursor rules file. So if you don't know what these are, they're literally just a type of file, uh, an an MDC file that these agents know to look for and know they're likely to contain instructions. um they're really easy to set up. It's basically plain English. So you just write uh a simple uh oneline uh entry of what it is. So format for writing experiment results using EPO data. EPO is just the uh experiment tool that we use. And then you select when you want to apply. I've just selected apply intelligent. I trust the model to work out when it needs to use it. They do a pretty good job.</p>
</details>

Tim：除此之外，它实际上只是写下你希望 agent 做什么。这可能看起来有点复杂。我通常会在几分钟内用纯文本写下我想要它写的东西。然后我会让 Cursor 把东西拆解开，然后我会重写几次，直到得到我想要的格式。但最终，它只是一个关于我希望这个东西做什么的逐步指南。对于正在收听的人，我告诉它，如果你被要求撰写实验结果，请执行以下操作：首先，如果还没有实验名称，就询问实验名称。然后去收集你需要的数据。使用我们设置的 EPO MCP，去和我们的实验空间对话，拉取实验的实际结果。然后使用我们已经谈过的 Notion MCP，去拉取你可能需要的其他所有上下文。任何其他能帮助它解读数据并撰写这份报告的文档。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: And then other than that, it literally is just writing out what you want the agent to do. Now, this might look a bit complicated. And I'll generally write this in a few minutes in plain text what I wanted to write. I'll ask cursor to then tear the thing down and I'll rewrite it a couple of times and just get it right in the format I want. But ultimately, it's just a step-by-step guide of what I want this thing to do. So, I've just said for those who are listening, I've said if you're asked to write up experiment results, do the following things. So ask the experiment name if you haven't already got it and then go collect the data you're going to need. Uh so use the EPO MCP we've set up. So go talk to our experiment space, pull in the actual results of the experiment and then use our notion MCP that we've already talked about to go pull in all the other context that you might need. So any other documentation that's going to help it interpret that data and write up this report.</p>
</details>

Tim：然后我让它基本上按照我给定的格式写出那些结果。我对格式要求非常严格，因为我希望它能以我们想要的格式非常一致地完成，并且有非常精炼的要点。实际上，我让它在我电脑上的 Cursor 本地文件中创建。这样我就可以在它创建 Notion 文档之前先看一眼。我可以看一眼，如果需要的话可以优化提示，但这只是一个备用方案。最终，它会变成另一个 Notion 文档，这样公司里的其他人都能看到。它会非常快地完成所有这些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: And then I ask it to basically write out those results in the format I give it. And then I'm pretty prescriptive about the format I want because I want this to do it really consistently in the format we want with really tight um tight takeaways. So, actually, I've asked it to create it in just a local file on my cursor on my computer. And that just means I can actually look at it before it goes create to the notion docs. I can take a peek, refine the prompt if I need to, but that's just a fallback. And then ultimately, it's going to turn into another notion doc so everyone else in the business can see it. And it's going to do all this incredibly quickly.</p>
</details>

Tim：让我们看看实际情况。我只说了一句：“请为‘垂直产品磁贴图片’这个实验撰写结果报告。”它立刻就出发了，找到了 EPO 的结果，找到了规则，现在它开始为我处理这一切了。结果出来了。这是一个非常标准的增长实验，就是比较垂直图片和方形图片哪个表现更好。你可以看到实验组有大约3.5%的显著提升。然后它还提取了一些其他有趣的业务指标。让我们看看这些要点。它说，很好，全面铺开。这是正确的答案，因为有那个提升。它还提取了一些有趣的东西。它说我们的数据科学预测模型实际上也是正向的。所以它不仅说我们获得了更多的零售商，而且我们获得的零售商质量也更高。所以，初步看，这看起来很棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: And let's actually just see what this thing looks like in in in reality. So I've just said, please write up the experiment results for and I've given it the name of the experiment, which is vertical product tile images. Uh and straight off it's gone off and it's found uh it's written off a nice to-do list. It's found the EPO result. So, it's just called the results. It's found its results. Great. It's found the the rules. And now it's going to start working this all out for me, which is great to see. The nice thing is this results. So, this was just literally sharing uh vertical images rather than square images like a really standard growth experiment like which one performs better. And you can see a nice stat lift uh of about 3 and a half% uh for the treatment. Uh and then it's pulled out some other interesting business max. And let's have a look at these takeaways. So, it's saying uh great roll it out. the right answer uh because of that lift and it's also pulled out some interesting things. So it said our data science prediction models are also actually positive. So it's saying not only have we got more retailers actually higher quality retailers the ones we've got. So this looked good as a first pass. This looks great.</p>
</details>

Tim：看，我立刻就得到了一个漂亮的文档，我可以分享给每个人，里面有所有正确的颜色代码、要点，甚至还有一个小彩蛋。在最下面，我甚至让它生成一个 Slack 消息，内容是更精简的版本。这样我就可以直接把它发到相应的审核频道，然后立刻就能得到批准。我们会为每个复杂的实验都这样做吗？可能不会。可能需要一些分析。但对于简单的实验，一步到位。即使是复杂的实验，这也能加速你的进程。而且，公司里的任何人都可以开始做这件事，这意味着我们可以把越来越多的这类事情交给工程师、产品经理和其他人来写，并为他们做分析，这同样可以极大地加速我们在 Faire 的上线速度，我们对此非常兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: And look, straight away I've got a nice uh document I can share around with everyone with all the right color codes, the takeaways, and even as a a little bonus, let's see, it's done. It always has trouble getting things in a little toggle. But right at the bottom here, I've even asked it to spit out a slack with an even more summarized version. So I can just drop this into the right review channels and straight away this can go and get approved. Now, are we going to do this for every complicated experiment? Probably not. There might need to be a bit of analysis, but for the simple ones, straight one shot. Even the complicated ones, this accelerates you. But also anyone in the business can start doing this, which means we can pass more and more of these things down to engineers, PMs, other people to write this kind of stuff and do the analysis for them, which again can just massively accelerate our launch velocity affair, which we're really excited for.</p>
</details>

### 附加案例：AI 驱动的用户调研设计与分析

Tim：我将非常快地做这件事。我们不花时间在这上面，但我想展示这是另一个非常常见的分析用例，每个人都得做，而且非常耗时。你得正确地设计调查，把它编码到调查平台，然后分析所有结果。这非常耗时。但端到端的 AI 可以彻底改变整个过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: Yeah, I'm going to do this really quickly. We're not going to spend time on this, but um let's just show I think it's just another one of those incredibly common analytics use cases that everyone has to do and they are just so timeconuming. You've got to design the survey correctly, code it into a survey platform, then analyze all those results. It's really timeconuming. But end to end AI can just like transform the whole process.</p>
</details>

Tim：我喜欢这样做，我认为你可以在 Cursor 上做，也可以在很多其他工具上做。我觉得 ChatGPT Projects 对此非常适用，而且同样非常易于使用。每个人都知道它们如何工作。这是一种提供上下文的好方法。我所做的就是给它一些背景信息。比如，我们想设计一个关于 Faire Direct 工具的调查。所以我给了模型大量信息，比如 Faire Direct 到底是什么？这些工具是什么？策略是什么？然后，无论我是否使用 AI，做这样的调查时，我都会从假设开始。这最终是你想要测试的东西。我只是给了它一个简单的假设列表，关于我们想了解什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: Let's just start on design. So, what I love doing this, I think you can do it on curs, you can do it on many things. I think chat g projects is really good for this and again incredibly accessible. Everyone knows how these work. Uh it's just a great way of giving context. So if we switch over to this one, which chat fat, it's lovely and taking a bit of time to load. You can see in files, what I did was give it a bit of background information. So what is our bit of business? So this was a survey we want to design on fair direct tools. So that's our tools that we give all our brands to help them accelerate their sales with their own customers. And so I've given a ton of information to the model that just says like what actually is fair direct? What are these tools? what's the strategy and then I whenever I do a survey like this um whether I'm doing AI or not I'll start with hypothesis that that's ultimately what you want to test and so this is nice if I just open up those hypothesis so this is what I fed it into I just gave it a list of simple hypotheses on what um what we want to learn</p>
</details>

Tim：我只用了一个简单的提示，说：“你是一位做客户洞察调查的专家。为一千个品牌设计一个10分钟的调查，以测试那些假设。”我告诉它我给了你哪些输入，这里有一些设计要求。我要求了三件事：把那些假设变成一个我们可以问客户的完整问卷；但不仅如此，给我能把问卷变成实际 Qualtrics（我们使用的平台）代码的文件，这样可以一键设计；并给我一个分析计划，告诉我该如何处理它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: so this was a simple prompt all I did was drop it in saying you're a you're a specialist at doing these customer insight surveys run design me a 10-minute survey for the thousand brands to test those hypotheses I said these are the inputs I've given you here's a bit of design requirements that we want and I asked her three things I said turn those hypotheses into a full questionnaire that we can ask our customers, but also don't just do that. Give me the coding file that turns that questionnaire into the actual, in this case, Qualrix, the platform we use to actually run these things. Can actually design that straight away in one click and give me an analysis plan for some what to do with it.</p>
</details>

Tim：那么我们从中得到了什么呢？很快，从一个假设列表，我立刻就得到了一个非常不错的调查初稿。它会问一系列问题，长度也差不多。这可以极大地加速整个过程。然后，一旦我们搞定了这个，它还给了我那个编码文件，这些东西写起来很痛苦。所以，只用一行命令就能告诉系统如何提示并写出来，这为我们的研究运营团队节省了数小时的时间。它甚至还将其转化为一个分析计划，告诉我们输出会是什么样子。所以，整个过程可以从一个假设列表，到可能在一天结束前就能发给我们客户的东西。这极大地缩短了时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: Okay. So, what do we get from that? So, very quickly from a list of hypotheses, I've got straight away a really nice first pass of a survey. Now, it's going to ask a load of questions. It's about the right length. Like, this can just massively accelerate the process. And then once we've got that right, it's also given me that coding file, which I'll just scroll on screen. These things are painful to write. So just having this a oneliner to tell exactly how the system should prompt this and write it out is just like saves hours of time for our research operations team. And it even then translates that into an analysis plan that says this is what the outputs from that are going to look like. So straight away this whole thing can go from a list of hypotheses into something we could probably get out to our customers by the end of the day. Now that's like shortens this enormously.</p>
</details>

Tim：但当你收到结果时会发生什么？这是它可以做的另一件事。我同样会非常快地做，只给你们看最终结果。我做了一个非常相似的提示。我只给了它同样的假设和 Qualtrics 的原始输出，这些通常需要大量清理。然后我写了另一个我的“有趣而简单”的提示。同样的角色任务，只是分析调查结果，找出数据中最有趣的东西，然后判断预定义的假设。我想要一个表格，基本上能说明那些假设是对还是错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: But what happens when you get the results back? That's the other thing this can do. And so again, I'll do this incredibly quickly and just show you the final result, but I did a very similar prompt as well. So all I did, I'm going to show you the file I dropped into this just show you how painful this is. So I just gave the same hypothesis and look how bad this like it's the raw output from Qualrix. Like these usually take a lot of cleaning. And then I've written another one of my uh fun and simple prompts. Um so uh same roll task here just analyze the survey results give find the right most interesting things in this data and then judge the predefined hypothesis. Um uh so I want a table that basically says like for those hypothesis was it right or was it wrong.</p>
</details>

Tim：让我们非常快地看一下这个。我得到了一个很好的摘要。然后是我的14个假设。它有一个很好的表格，为每个假设标注了“已证实”、“中立”或“未证实”。因为我要求了，它甚至还给了我一个不错的置信度分数。一分表示它对此非常有信心，五分表示它根本不自信。你可以在整个过程中看到不同的级别。然后在下面，我得到了我要求做的具体分析。所以，它把我发现的所有洞察都列出来，以支持那些发现。这是我们对这次调查要做的唯一分析吗？几乎肯定不是。但第一天，我拿到了结果，把它扔进这里，几分钟之内，我就对所有数据所显示的内容有了好得多的直觉。所以，虽然我可能会继续对这个做一些分析，但我可以更有针对性地关注我们到底想研究什么，以及我想把时间花在哪里。而且，我们马上就可以开始与人们分享其中一些发现，非常非常快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: And let's have a look at this just very quickly. So, I've got a nice little summary out front. And then there are my 14 hypothesis. and it's got a nice table that says proved, neutral, disproved for each of them. And it's even because I asked it to, giving me a nice confidence score. So, I said one, it's really confident in this five. It's not very confident at all. And you can kind of see the different levels throughout this. And then beneath it, I've got for each of these actually the specific analysis that I asked to to do. So, just throw all the insights I found to back up those findings. So, like, is this the only analysis we're going to do on this survey? Like, almost certainly not. But day one, I've got the results. I've thrown it into this and within a matter of minutes, I've got a much much better intuition of what all that day is showing. So, while I might go and do some analysis on this, I can be so much more targeted on exactly what we want to what we want to look into and where I want to spend my time. Uh, and straight away, we can start sort of sharing some of these findings out with people very very quickly.</p>
</details>

### 闪电问答：当 AI “不听话”时怎么办？

Clarvo：我们回到提示上来。我们要弄清楚你们围绕提示的个性。Alexa，Tim，当 AI 不听话时，当你的 NCP 无法调用工具时，你的提示技巧是什么？Alexa，你怎么办？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarvo: We're going to go back to prompts one last time. We're going to figure out your personality around prompts. Alexa, Tim, when AI is not listening, when your NCP will not call the tool, what is your prompting technique? Alexa, what do you do?</p>
</details>

Alexa：我觉得我的方法很直接。我最常遇到的问题是，很明显我的上下文用完了。一个对话进行得太长，开始变得不稳定。所以，虽然我认为一级解决方案就是重新开始，但 AI 最擅长的是总结。所以我会说：“嘿，总结一下我们到目前为止在这30轮对话中做了什么，然后用这个总结重新开始。”因为，你知道，就像我听其他节目里的人说，你想要找出它是在哪里偏离轨道的。显然，我是一个效率很高的人。我不是 Tim，我不会花20分钟写出整个提示。我没时间。我只想说：“嘿，总结一下发生了什么。我们要重新开始，但我会给它那个总结。”这样，至少新的对话可以从旧的对话中获得一些上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa: I think mine's pretty straightforward where I think the problem that I run into most frequently is that I'm clearly running out of context. Like a conversation has gone so long that it's starting to be wonky. And so while I think you know level one is just starting over, uh what AI is best at is summarizing. So, I'll say, "Hey, summarize like what we've done so far in this, you know, 30 turn conversation and then use that to start over." Um, because you know, like, like I've heard other episodes people say, "You want to figure out like where it got off track." Clearly, I'm a pretty efficient person. I don't, you know, I'm not Tim. I'm not like writing out the entire prompt for 20 minutes. Like, I don't have time for that. I just want to say, "Hey, summarize what happened. We're going to start over, but I'm going to give it that summary." So at least the new conversation can get some context from the old.</p>
</details>

Clarvo：很好。Tim，你呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarvo: Great. And Tim, what about you?</p>
</details>

Tim：我通常会打开三个 Cursor 窗口，用三个不同的模型进行三次聊天，输入相同的提示，然后去泡杯茶，看看会得到什么结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: So um I generally will go and open up three windows on cursor and I'll do three chats with three different models and put the same prompt in and go up a cup of tea and see what comes back.</p>
</details>

Clarvo：是的，你做的是 A/B 测试。好的。我喜欢这个。Tim，Alexa，我们可以在哪里找到你们，有什么可以帮助你们的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarvo: yeah, you run the AB test is what you do. Okay. Uh I I love this. Tim Alexa, where can we find you and what can we be helpful with?</p>
</details>

Alexa：你可以在 LinkedIn 上找到我。我的全名是 Alexandra。至于如何提供帮助，我们的战略与分析团队正在全面招聘。我们的团队与产品经理和市场推广团队紧密合作。我们做出战略性的、数据驱动的决策。非常有趣。我们有很多空缺职位。所以如果你喜欢尝试 AI，我们非常欢迎 AI。你可以在 fair.com/careers 了解更多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa: You can find me on LinkedIn. My full name is Alexandra. And uh ways to be helpful. Our strategy and analytics team is hiring across the board. Our team partners super closely with PMs and our go to market team. We make strategic datadriven decisions. Super fun. We have tons of open roles. So if you like experimenting with AI, we are very AI forward. So you can learn more at fair.com/careers</p>
</details>

Tim：你也可以在 LinkedIn 上找到我。我也会附和这一点，如果你热爱 AI，就来加入我们吧。来加入我们，向我们展示我们如何能在这里做得更多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tim: and you can find me on LinkedIn as well and I'd echo that as well like come join us if you love AI. Come join us and show us how we can do it more here.</p>
</details>

Clarvo：好的，我们会把你们的招聘页面链接放在节目笔记里。Alexa，Tim，这次非常愉快。感谢你们参加《How I AI》。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarvo: Okay, we will link to your careers page in the show notes. Alexa Tim, this has been so fun. Thank you for joining how I AI.</p>
</details>