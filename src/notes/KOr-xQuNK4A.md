---
author: How I AI
date: '2025-11-03'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=KOr-xQuNK4A
speaker: How I AI
tags:
  - data-analysis-workflow
  - context-engineering
  - semantic-layer
  - ai-agents
  - forensic-analysis
title: Faire 数据团队揭秘：如何利用 Cursor 和 AI 代理进行“氛围分析”
summary: Faire 的数据分析师 Tim 和 Alexa 演示了如何利用 AI 工具彻底改变产品分析流程。他们展示了从使用企业级 AI 搜索快速获取问题背景，到利用 Cursor 深入代码库进行“法证调查”，再到通过语义层和自定义 AI 代理实现端到端的漏斗分析与实验报告自动化。这套“氛围分析”工作流不仅提升了效率，更深化了数据洞察的质量。
insight: ''
draft: true
series: ''
category: business
area: market-analysis
project:
  - ai-impact-analysis
  - systems-thinking
  - vibe-coding
people:
  - Tim
  - Alexa
  - Clarvo
  - Dan
  - Ben
companies_orgs:
  - Faire
  - Zapier
  - Dropbox
  - Airbnb
  - OpenAI
  - Notion
  - Jira
  - Slack
  - GitHub
  - Snowflake
  - Brex
products_models:
  - Cursor
  - ChatGPT
  - Notion AI
  - Qualtrics
  - Mode
  - Devon
  - LangChain
media_books:
  - How I AI
status: evergreen
---
### AI 时代的产品开发悖论

Clarvo：我们如何从分析转化率入手，来审视一个产品的质量和使用情况呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do we start at the very beginning of analyzing a product and its quality and its usage through analyzing conversion rates?</p>
</details>

Tim：新的 AI 工具彻底改变了获取所有这些背景信息的过程。你可以随心所欲地广泛探索，以自助的方式极快地进入一个不熟悉的领域。这意味着你不仅可以提供更快的分析，还能提供质量高得多的分析。我将从企业级 AI 搜索开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The new AI tools have just absolutely transform the process of just getting all that context. You can go as broad as you like self-s serve into an unfamiliar topic just incredibly quickly. And that means you can not only deliver quicker analysis, you can just deliver much better analysis too. I'm going to start just by doing an enterprise AI search.</p>
</details>

Tim：所以，我将非常简单地开始，询问 Notion：在 2024 年 9 月到 12 月期间，有哪些新上线的实验或功能可能给欧洲或北美新零售商的结账流程增加了阻力？我还特别说明了，重点关注实验文档、**PRD**（Product Requirements Document：产品需求文档）和上线公告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm just going to start very simply by asking notion, what experiments were new features launched between September to December 2024 that could have added friction to the checkout process for new retailers in Europe or North America? And I've just said focus on XV docs, PRDs, and launch announcements.</p>
</details>

Tim：几乎不费吹灰之力，我立刻就得到了一份非常有趣的假设清单，可以深入研究。你可以看到，它非常迅速地搜索了 Slack、Notion、Jira 以及其他所有地方。那么，Alexa，当我们确定了一个问题或一个想要追求的机会后，我们该如何进行实际的数据分析呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've got straight away a really interesting list of hypothesis to dig into with no work. You can see it searched across Slack, notion, Jira, and everything else very, very quickly. So Alexa, how do we do actual analysis of data when we've identified a problem or an opportunity we want to go after?</p>
</details>

Alexa：在没有 AI 的情况下，单是收集背景信息就意味着要花数小时翻阅所有的规格说明和 PRD，从头开始编写 **SQL**（Structured Query Language：一种用于管理关系数据库中数据的编程语言）查询，然后还要花大量时间撰写和编辑文档。而使用 **Cursor**（一个专为 AI 辅助编程和数据分析设计的代码编辑器）来实际创建、编辑和编写 SQL，这简直是颠覆性的改变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Without AI, especially the context gathering would mean hours spent digging through all the specs and PRDS. Writing SQL queries from scratch and then you know spending a lot of time writing and editing a doc using cursor to actually create edit write SQL has been pretty gamechanging.</p>
</details>

Clarvo：欢迎回到《How I AI》。我是 Clarvo，一位产品负责人和 AI 爱好者，我的使命是帮助你利用这些新工具更好地进行创造。今天我请到了来自 Faire 数据团队的 Tim 和 Alexa，他们将为我们带来一期精彩的节目。他们将向我们展示如何使用 Cursor、MCPs、ChatGPT，甚至编写自己的代理来进行数据分析。我们将看到从剖析那个可怕的问题——“九月份到底出了什么问题？”——到对实验和调查进行详细的漏斗分析的全过程。让我们开始吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Welcome back to How I AI. I'm Clarvo, product leader and AI obsessive here on a mission to help you build better with these new tools. Today I have a great episode with Tim and Alexa from the data team at Fair. They're going to show us how you can use cursor MCPS chat GBT and even write your own agents to do data analysis. We're going to see everything from decomposing that scary question, "What went wrong?" in September to doing detailed funnel analysis on experiments and surveys. Let's get to it.</p>
</details>

Clarvo：Alexa，Tim，感谢你们来到《How I AI》。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alexa, Tim, thank you for joining How I AI.</p>
</details>

Tim：很高兴来到这里，谢谢你的邀请。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, great to be here. Thanks for having us.</p>
</details>

Alexa：非常感谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you so much.</p>
</details>

Clarvo：我们现在能做的一件事，可能我个人在互联网世界里也出了一份力，就是我们可以开发出大量的产品。我总是这样，前几天我还在想，我要发条推文，告诉产品经理们他们应该花一个月的时间说“是”，而不是说“不”。让我们多发布一些功能吧。我认为 AI 确实加速了产品开发、软件工程，以及将创新交到客户手中的过程。但它也带来了一个问题：我们不知道这些产品到底好不好。这就是那个 perennial 的产品问题，你可以发布产品，但它们可能无法带来你所期望的改变。所以我对这次对话感到非常兴奋，因为你们将向我们展示如何使用 AI，甚至是一些软件工程师或产品经理可能熟悉的工具，来进行真正深入且有意义的产品分析。我曾在实验领域花了很多时间，所以我很喜欢好的转化率优化。那么，Tim，我们先从你开始。我们如何从分析转化率入手，来审视一个产品的质量和使用情况呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the things that we can do now that I am probably personally causing in the in the internet world is we can just build a lot of a lot of product. I am always out there like I was thinking the other day I was like I'm going to tweet something where I tell PMS that they should just spend a month saying yes instead of saying no. Like let's ship some features. And I think AI has really accelerated product development, software engineering, getting innovation to the hands of customers. But the problem it has created is we don't know if those products are any any good. So the the perennial uh product problem which is you can ship things and they can not make the difference that you hope they would make. And so I'm really excited about this conversation because you are going to show us how to use AI and even some of these tools that software engineers or product managers might be familiar with to do really deep meaningful product analysis and I spent a lot of time in experimentation and so I love a good conversion rate optimization. And so Tim, we're going to kick it to you to start with. How do we start at the very beginning of analyzing kind of a product and its quality and its usage through analyzing conversion rates?</p>
</details>

### “氛围分析”：从获取上下文开始

Tim：是的，我喜欢这个。我觉得大家都在谈论“Vibe coding”（氛围编程），但没人真正谈论“**Vibe analysis**”（氛围分析），而我们正迅速朝这个方向发展。那么，让我们开始吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I love this. I think everyone's talking about Vibe coding, but no one's really talking about Vibe analysis and we're heading in that direction very quickly. So, uh, let's get into it.</p>
</details>

Tim：在我们进行任何过于技术性的操作之前，我想在这里分享一系列广泛的例子，从非常复杂的到实际上极其简单的。我想每个人都知道，产品经理将不得不变得像工程师一样，然后我们还会面临很多问题，你们所有人都将不得不成为分析师。所以，我认为我们可以在这里展示很多东西。我们想从一个非常简单的用例开始，我想每个听众都会觉得很熟悉。但我觉得它能说明一点：通常是最简单的 AI 工具，实际上能在这里产生最大的影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so before we do anything too technical, I think we want to share a really broad range of examples here from the really complicated to the like actually incredibly simple. I think everyone knows PMs are going to have to become engineers and then we've got a lot of issues where all of you guys are going to have to come and analysts as well. Um, so I think there's a lot we can show here. So we want to start off with just a really simple use case that should be familiar to I think everyone listening. Uh, but I think it illustrates the point. There's often the most simple AI tools that can actually have the biggest impact here.</p>
</details>

Tim：在进入实际演示之前，我认为有必要快速停下来思考一下“分析”到底是什么。一旦你分解了这个问题，你就能更清楚地看到当前这些工具在哪些方面最有价值。大多数人直接跳到实际操作和处理数据的具体细节上。但实际上，这只是整个过程中的一小部分。最重要且通常最困难的事情，其实是首先获得正确的上下文，因为这正是区分好分析与坏分析的关键。你需要知道该问什么正确的问题，才能提出正确的假设，才能知道什么样的分析从一开始就值得去做。你需要知道数据在哪里，并且需要能够很好地解读这一切。而新的 AI 工具已经彻底改变了获取所有这些上下文的过程。你可以随心所欲地广泛探索，以自助的方式极快地进入一个不熟悉的领域，这意味着你不仅可以提供更快的分析，还能提供质量高得多的分析。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I think before we get into the actual demo, I think it's useful just to pause very quickly for a second on the question of what analytics actually is. So, I think once you break that down, you get a much clearer view of where these current tools can be most valuable. Um, I think most people jump straight to the nuts and bolts for actually manipulating and crunching data. But actually, it's really just a small part of the O4 process. And the most important often most difficult thing is actually just getting the right context in the first place because that's what separates good analysis from bad. Like you need to know to ask the right questions to come up with the right hypothesis to know what analysis is even worth doing in the first place. You need to know where the data lives and you need to be able to interpret it all very um very well. And the new AI tools have just absolutely transformed the process of just getting all that context. you can go as broad as you like self-s serve uh into an unfamiliar topic just incredibly quickly and that means you can not only deliver quicker analysis you can just deliver much better analysis too.</p>
</details>

Tim：为了说明这一点，我想谈谈一个我猜大家都很熟悉的情况：某个业务指标突然断崖式下跌，而没有人知道该怎么办。我将使用一个 Faire 的真实案例。这发生在我们去年年底的新客户转化漏斗上。如果你在增长团队工作过，你就会知道新客户对哪怕是最微小的摩擦都极其敏感。所以，公司里几乎任何人做的任何事都可能影响到这类指标，无论是注册流程、搜索算法，还是运输政策，这些都可能产生影响。如果你不小心，就得把整个业务都拆解一遍。让我来展示一下，这些事情可以如何更快地完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so to illustrate the point I want to talk through what sandy I'm guessing is a very familiar situation where a business metric suddenly drops off a cliff uh and no one's got a clue what to do with it. Um, so I'm actually I'm going to use a real example from fair for this. Um, and this happened to our new customer conversion funnel at the end of last year. So if you've ever worked in growth, everyone's going to know new customers, they're just extremely sensitive to even the tiniest little friction. So almost anything anyone does in the business anywhere can affect these kind of things. Whether it's a signup flow, a search algorithm, a shipping policy, like this all can affect these things. Um, and if you're not careful, you're going to have to decomp the entire business. So, let me show you how these things can just be done so much quicker.</p>
</details>

Tim：想象一下，这个问题落到了我的桌上。我可能会看几个现有的仪表盘，想知道这里发生了什么。你可以很快看到，问题从九月份开始，十二月份又出现了一次下跌。而且问题似乎集中在结账阶段。但除此之外，我真的不知道具体是什么原因造成的。所以，让我们从一个非常宽泛的范围开始。我将分享我的屏幕。我将从企业级 AI 搜索开始。我们用的是 Notion，但坦白说，现在每个文档系统都会有 AI 系统。如果还没有，那也快了。它们简直是游戏规则的改变者。所以，我将非常简单地开始，直接问 Notion 发生了什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so imagine this problem lands on my desk. Um, I might look at a couple of just existing dashboards that exist to say, uh, what's going on here? And you can see, uh, very quickly the issues started in September and there was another drop in December. And it seems to be concentrated in the checkout stage. But beyond that, I've really got no idea what could have actually caused that. So, let's start really bored. I'm just going to share my screen. I'm going to start just by doing an enterprise AI search. Now, we use notion, but frankly, every document system now is going to have an AI system. If they haven't got one yet, it's coming. And they are just game changers. So, I'm just going to start very simply by asking notion what happened.</p>
</details>

Tim：好的。我唯一要做的，就是让它更真实一点。我将筛选日期范围。我不想让它作弊，看到答案。它只能访问我当时实际做这件事时能访问到的东西。所以，我把日期设置到去年四月底，也就是我运行它的时候。好的，然后我们就让它运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So, the only thing I'm going to do, I'm going to just make this more realistic. I'm going to filter the date range. I don't want it cheating and looking at the answer. It's only going to have access to the things I had access to when I actually did this. So, I'm going to put it up to the end of April last year, which when I run it, okay? And then we're just going to get that running.</p>
</details>

Tim：你想想，我只问了“在 2024 年 9 月到 12 月期间，有哪些新上线的实验或功能可能给欧洲或北美新零售商的结账流程增加了阻力？”我还特别说明了，重点关注实验文档、PRD 和上线公告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if you think this, all I've asked is what experiments or new new features launched between September to December 2024 that could have added friction to the checkout process for new retailers in Europe or North America. And I just said um focus on XP docs uh PRDS and launch announcements. Okay.</p>
</details>

Tim：想想看，如果是在过去，我得翻阅上百万份文件，进行大量的搜索，浏览无数个 Slack 频道，才能搞清楚发生了什么。而现在，看，我立刻就得到了一份非常有趣的假设清单，可以深入研究，而且不费吹灰之力。你可以看到，它非常迅速地搜索了 Slack、Notion、Jira 以及其他所有地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if you think about what I'd have to do in the past, I'd have to be like crawling through a million documents, doing a load of searches, going through a ton of uh different Slack channels trying to work out what's going on. And instead, look, I've got straight away a really interesting list of hypothesis to dig into with no work. And you can see it searched across Slack, Notion, Jira, and everything else very, very quickly.</p>
</details>

Tim：我们来看几个例子。发生了什么？我们来看看。很明显，我们在这段时间推出了某种结账实验。这绝对值得研究。我们在欧洲对一个结账拦截器做了些什么。好的，有很多有趣的事情可以深入挖掘。现在，只需点击几下，我就有了一长串清单，但我并不真正了解这些东西是什么。我拿到了所有可以点击进入的额外文档链接，但我们先从一个起点开始，问问“Aori 是什么？”我们随便选一个。Aori 是什么？我们就问这个问题。它会再运行一次小搜索，给我们更多信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh if you let's just pull out a couple of these. So, what's happening? So, let's go. So, you've got uh clearly we launched some kind of um checkout experiment around this time. That's definitely worth looking in. Uh we've done something with a checkout blocker in Europe. Okay. Lots of interesting things to dig into. Now, with a couple of clicks, I've got a good long list, but I don't really know what these things are. So, I've got all the links of the extra documents I could go click into, but let's just ask as a starting point, uh what is Aori? Let's pick one of them. What is Aori? So, we'll just ask that. It's going to run another little search and give us more things.</p>
</details>

Tim：好的，它很快就给出了这个术语的含义。你可以看到，这是一个在欧洲涉及的法规，有人做了一些事情，开始要求提供更多细节。显然是为了改善结账和转化率，他们试图引入这个东西。但我认为这是一个很好的起点。我得到了一些细节，但我觉得真正有趣的是，每个人都知道，一份产品需求文档只是故事的一部分，但在文档编写完成和功能进入代码库之间，可能会发生很多事情。所以要真正了解发生了什么，你通常需要深入一层，去了解实际的技术实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so very quickly it's saying give me the term what it is. And you can kind of see it's okay. It's a um a regulation that's involved in Europe and someone's done something to uh start asking for more details. Clearly trying to improve checkout and conversion rates and they're trying to bring that one in. But I think this is a great starting point. I've got some detail, but I think what's really interesting here is everyone knows like a PD is one part of the story, but between a PLD being written and something going into the codebase, a lot can happen. So to actually understand what's going on, you usually need to go one layer data into the actual technical implementation.</p>
</details>

### 案例研究：用 AI 深入代码库进行“法证调查”

Tim：我想向你展示一个我如何做到这一点的小技巧。我认为这些 AI 工具最棒的一点，就是让像我这样非技术背景的人能够接触到他们以前无法接触的东西。一个很好的例子就是能够与产品代码库对话。我不是工程师，我不会写 Kotlin 或 Swift。天哪，我以前还是个律师。但我可以对我们的代码库进行深度研究，以确切地找出这个特定功能实现了什么以及何时实现的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I want to show you like a quick trick uh of how I do that. Um, so I think one of the best things about these AI tools is just the ability of someone who's like nontechnical to access things that they couldn't previously access. And a great example of that is just being able to talk to the product codebase. I'm not an engineer. I can't write Cotlin or Swift. I used to be a lawyer for God's sake. Um, instead I can run a deep research against our codebase to find out exactly what got implemented for this particular feature and when.</p>
</details>

Tim：我将用两种不同的方式来做这件事。我会在 ChatGPT 上做，我认为这非常简单，任何人都可以非常快地复制。大家都熟悉它。我也会在 Cursor 上做，它更专业一些，但功能极其强大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now I'm going to do this in two different ways. I'm going to do it on chatbt which I think is very simple and anyone can replicate incredibly quickly. Everyone's familiar with it. And I'm going to do it on cursor which is a bit more specialized but just incredibly powerful.</p>
</details>

Tim：我将打开一个新的聊天窗口，把它设置成深度研究模式，并确保我的 GitHub 已经连接。这并不需要技术操作，你只需要点几次“是”来连接你的 GitHub。你之所以要在深度研究模式下做，只是因为这是唯一能访问它的方式。它现在会搜索我们的代码库，就像它通常在深度研究中搜索网页一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so I'm going to open up a new chat and I'm going to put it into deep research mode and make sure my GitHub is connected. So all you do, it's not technical to do that. You just need to say yes a few times to get your GitHub connected. Um the only reason you do it on on deep research is just because it's the only way you can actually access it. It's going to search our codebase now um in exactly the same way it would normally search the web on a deep research.</p>
</details>

Tim：我将输入一个提示。让我来解释一下这个提示在做什么。我给了它一个角色：“你是一名高级主管工程师，在 Kotlin、Swift、TypeScript 等多种代码库方面都有专业知识，并且曾在 Faire 工作。”我给了它一个任务：“请对代码库进行一次法证调查，生成一份关于 2024 年 6 月至 2025 年 2 月期间，结账时 EORI 收集流程所有变更的全面时间序列报告。”这样可以确保我们不会遗漏任何东西。剩下的部分只是一些关于我希望报告格式的细节。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm just going to put in a prompt. Let's just copy that in. Now let me talk a little bit about what this prompt is doing. So I've given it a role. I've said you're a senior staff engineer and you've got expertise in all these different code bases cotlin swift typescript and you were working at fair and I've given it a task to say please conduct a forensic investigation of the codebase to produce a comprehensive timesequence report on all changes to the eoree collection process at checkout between June 24 and February 25. So just making sure we don't miss anything and the rest is just a bit of detail as to what I want this to look like.</p>
</details>

Tim：我说我想要一个精确的总结，一个包含所有不同 PR（Pull Requests）和提交（commits）的表格，它们进入了哪个部分，并且我特别希望它关注这些提交对零售商体验的实际影响。就像，用外行人的语言向我解释。然后我在这里加入了一些要求，只是为了给它更多的上下文。比如，要精确、简单、语言清晰，只使用 GitHub 来源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I've said I want an exact sum. I want a table with all the different PRs and commits, what they've gone into, and I really wanted to focus in on the actual impact these commits had on the retailer experience. Like, explain it to me in layman's terms. Um, and then I've just put a few requirements in here just to give it a bit of more context. So, be precise, simple, clear language, only use GitHub sources.</p>
</details>

Clarvo：我想指出一点，你是在一个我称之为“业务事件”的背景下使用这个提示，对吧？新用户注册量刚刚下降。但这个提示，我希望正在观看或收听播客的工程师们能特别注意，因为如果你正处于一个一级严重事故（SEV one incident）中，需要追踪谁做了什么。我知道我们很多工程团队要么是手动查看代码，要么是看那些专门的代码生成工具来做这件事，但可能没有想到用像 ChatGPT 深度研究这样的工具来帮你完成。如果你是一个产品经理，想在事故中提供帮助，这也许是你可以代表你的工程团队承担的一项任务，只是为了在后台提供一些额外的上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I want to call out here um you're you're using this prompt in the context of sort of a what I would call like a business incident, right? New user signups just dropped. But this is a prompt that I want the engineers watching or listening to the podcast to really pay attention to because if you're in the middle of a, you know, SEV one incident and you need to trace who did what. I know so many of our engineering teams are looking either manually looking through code, looking at these specialized kind of codegen tools to do this, but probably aren't reaching for something like ChatGpt deep research to just go ahead and do this for you. And if you're a product manager looking to be helpful during an incident, this is maybe a task you can take on on behalf of your engineering team just to provide some additional context in the background.</p>
</details>

Tim：百分之百同意。我认为这对工程师很有帮助，对促进人们与工程师更好地沟通也很有帮助。我觉得在这里可以做的事情太多了。像往常一样，深度研究会问几个问题。所以，我们会回答几个问题以确保它能正常工作。“请酌情处理”，然后“是的，请继续”。这样它就开始运行了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">100%. I think this is great for engineers. I think it's great for just getting people to talk better to engineers. I think there's just so much you can do here. So, as always, De Research is asking a few questions. So, uh, use discretion. We'll just answer a few of those to make sure we got it. Uh, use discretion and yes, please. So, that'll get it going.</p>
</details>

Clarvo：你给提示的方式和我一样。我就是说，“你选，你决定，你去做。我不在乎。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But no, you you prompt just like I do. I just say you pick, you decide, you go. I don't care.</p>
</details>

Tim：我认为，如果它不问你这些问题，反而会让我觉得它这么做更多是为了让你感觉它在工作，而不是真的有什么用。这需要一些时间。所以在它运行的时候，我想向你展示如何在 Cursor 中做这件事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think the fact the pro doesn't ask you these questions make me think it's more to like make you feel like it's doing it rather than anything else. So that's going to take a bit of time. So while that's running, I want to show you how to do this in cursor because I think</p>
</details>

Tim：Cursor 是那种人人都认为是为“氛围编程者”（vibe coders）和工程师准备的工具。他们并没有真正思考它还能做什么。我认为对分析师和非分析师来说，它都是一个不可思议的工具。越来越多的人在谈论“**上下文工程**”（Context Engineering），而不是“提示工程”（Prompt Engineering）。我喜欢这个说法。它实际上解释了我们在这里试图做的事情。对我来说，Cursor 就是终极的上下文引擎。你可以把它连接到 **MCP**（Model Context Protocol：模型上下文协议，一种允许 AI 模型与外部工具和数据源交互的协议）。基本上，我可以把它连接到我们公司的每一个系统，以获取我需要的所有数据。这使得它成为一个获取上下文以进行分析的极佳加速器。我发现，它得到的结果越来越比 TPD 上的深度研究要好。所以两者都很好，都是游戏规则的改变者，但我认为这个更快更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">cursor is one of those tools that everyone thinks of for vibe coders. They think of it for engineers. They're not really thinking uh about what else it can do. And I think for both analysts and non-analysts alike, it's an incredible tool. So, um I think more and more people are talking about the phrase context engineering rather than prom engineering. I love that. Um it sort of actually explains what we're trying to do here. And for me, just cursor is the ultimate context engine. You can hook it up to MCPs. Um so basically, I can hook it up to every single system in our business to get all the data I need. And that just makes it such an incredibly good accelerator for getting context from doing analysis. So I actually find increasingly this is getting better results than deep research on TPD. So both are good, both are game changers, but I think this is just a little bit quicker and better.</p>
</details>

Tim：我只要确保我的 MCP 都连接好了。然后我要做的就是把完全相同的提示放到 Cursor 里，我们来看看两者的运行情况。完全相同的提示。需要说明的是，我们的聊天甚至还没开始，完全没有进入状态。而在 Cursor 里，我们已经开始了，它有一个很好的待办事项列表。它说它会搜索 GitHub 中所有正确的东西，然后进行法证分析。我们就让它运行一会儿。你可以看到它已经开始拉取代码和拉取请求了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm just going to make sure my uh MCPs all hooked up. And then all I'm going to do is I'm going to drop exactly the same prompt into cursor and we'll see the two running. So exactly the same prompt. So just for context, we are not even started on our uh hasn't even got off to the races at all on on the chat. And straight away in uh in cursor, we're going and finding it's got a nice to-do list. It's saying it's going to search all the right things in GitHub. It's going to then forensically analyze it. Uh and we'll just let this run for a little bit. You can see it's already starting to pull in the code and the pull request.</p>
</details>

Clarvo：我想指出一件有趣的事情。我以前管理过很多产品、工程和数据组织。工程团队入职第一天肯定要做的是：获取所有代码仓库的访问权限，设置好 GitHub，搭建好本地环境。我知道数据团队通常也有类似的入职流程，因为他们与生产数据紧密合作。我认为即将改变，或者如果还没有改变就应该立刻改变的一件事是，产品经理和设计师的入职流程，前七天必须包括至少对 GitHub 的读取权限，拉取本地代码仓库，设置好所有的 MCP。因为代码现在已经成为任何从事工作的人的数据源，而不仅仅是写代码的人。所以我看到这个，就觉得领导者们需要注意，并重新思考他们的入职流程。因为你不想在这种情况下才去问，“谁能给我 GitHub 权限？我能拿到权限吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">everyone one of the things that I think is interesting to call out is you know I've run a lot of product engineering data orgs before engineering certainly day one what are you doing you're getting access to all the repos you're getting set up with GitHub you're pulling your your local environment together I know that data teams often have a similar onboarding because they're working so closely with production data one of the things I think is going to change or if it hasn't already should change right now is I think product managers and designer onboarding first seven days has to include access read at least read access to GitHub, getting your local repository pulled down, getting all your MCPs set up because it just code has become now a data source for anybody doing work, not just people writing code. So I look at this and I think leaders out there need to pay attention and rethink basically their onboarding process because you don't want to be in a situation like this and go like can somebody give me GitHub like can I can I get access</p>
</details>

Tim：这甚至超出了那个范围。每个人都应该有权访问每个系统，而且应该从第一天就开始。这些工具是我们见过的最好的入职加速器，无论对分析师还是工程师都是如此。人们突然之间就能很快地掌握背景信息。好了，我们已经开始了，它总结了所有内容，给我们写了东西，我们实际上开始在这里写出内容了。所以，马上你就可以看到，我得到了一个很好的精确总结，它遗漏了一些东西，但这正是我最感兴趣的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it goes even beyond that like everyone should have access to every system and it should be from day one like these tools are just the best on boarding accelerator we've seen it for analysts we've seen it for engineers suddenly people get the context very quickly okay so we're already off it's summarized everything it's written us and we're actually starting to write things out here so straight away you can see I've got a nice exact summary it's g a few things but this this is what I was most interested in.</p>
</details>

Tim：好的，我这里得到一个表格。对于那些看不到我屏幕的人来说，我得到了一个表格，里面有影响这个流程部分的每一个 PR，从 24 年 7 月开始，一直到还在进行中，但它可能会到 12 月或 2 月的某个时候，取决于它会处理到哪里。现在，让我们来指出它在做什么。它给了我一个指向实际将此推入代码库的特定 PR 的精确链接。它给了我它的名称，并总结了它做了什么。它说明了谁受到了影响，以及对零售商体验的影响。现在，如果有人做过这类事情，就会知道这非常困难，要仔细检查所有代码并真正理解发生了什么，而现在可以非常快地完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so I'm getting a table here. For those that can't see my screen, I'm getting a table with every single PR that affected this part of the flow from look, it starts in July 24 all the way to still going. Uh, but it'll probably go to somewhere like December or February depending where it's going to go with all of these things. Now, let's just call out what this is doing. So, it's giving me an exact link to the specific PR that actually pushed this into uh the codebase. It's giving me the name of it and it's giving me a summary of what it did. It's saying who was affected and it's saying what was the impact on a retail experience. Now, if anyone's done this kind of thing, it is so difficult to do and actually like pick through all the codes and actually understand what's going on on this and it can just be incredibly quickly.</p>
</details>

Tim：所以，在对这个功能一无所知的情况下，我很快就能对发生的事情变得非常了解。我可以看到，如果我深入研究，是的，你可以看到在九月中旬启动了一个实验，正好是在这次下跌首次发生的关键时刻。如果我滚动浏览到十二月，是的，你可以看到它向所有用户推出了所有处理方案。所以，这现在看起来像一个非常有趣的、可能是确凿的证据，我们可以深入调查。因此，我不用花几天时间与人们讨论所有可能的假设，现在我可以与完全正确的同事进行非常有针对性的、有信息依据的对话，从一开始就与他们一起，在数小时而不是数周内解决这个问题。所以，即使我们还没有做任何数据处理，这对我们来说也绝对是颠覆性的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, very quickly knowing nothing about this feature, I can already start to get really smart on what happened. And I can see if I dive down here yet, you can see there was an experiment launched in midepptember, right in the sweet spot of when this uh drop first happened. And if I scroll through getting through to looking at December, uh yeah, you can see it launched all treatment all users went live. So this now looks like a really interesting potentially smoking gun that we can debug into. And so instead of spending days talking to people about all the potential hypotheses, uh I can now speak to exactly the right colleagues and have a really targeted conversation, an informed conversation right from the off with them uh to crunch through this problem in a matter of like hours rather than weeks here. So even if we've done any data crunching, this can just be absolutely gamechanging for us.</p>
</details>

Clarvo：是的。而且它让你能够比我过去在做这类分析时深入得多。你知道，当你运行这些高速实验项目时，你会有很多并发的实验。实验会与功能发布、与普通上线相冲突。仅仅是想弄清楚你的应用在任何一天处于什么状态，都是非常具有挑战性的。即使你可以在功能层面做手动研究，比如，是的，今天我们上线了单页结账。我认为真正的挑战在于，我们实现得好吗？里面有没有什么我们应该担心的？我们有没有排除任何用户？所以我确实认为，在进行这类法证分析时，能够使用代码作为详细的真相来源，对于弄清楚你的业务到底发生了什么，真的能起到决定性作用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And it allows you to go a lot deeper than you know I've been able to do historically on these kinds of analyses. You know, when you're running these high velocity experimentation programs, you have so many concurrent experiments. You have experiments colliding with rollouts, colliding with just plain launches. And just trying to decompose what was the state of your app on any single day is really challenging. And even if you can do the manual research to get this at a feature level, like yeah, today we launched the one one page checkout. I think the real challenge is well, did we implement it well? Is there anything in there that we should like worry about? did we exclude any users from that? Like, and so I do think the ability to use code as a a detailed source of truth when doing these kinds of forensic analyses really makes the difference in figuring out what's going on with your business.</p>
</details>

Tim：然后变得足够聪明，可以再深入一层。你可以问后续问题，比如，“对于不同的用户群体，它有什么不同？还有其他感兴趣的群体吗？”你只需通过问这类问题就能获得大量细节，而无需与任何工程师交谈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then getting smart enough to go one level deep as well. You can ask follow-up questions to say, uh, how did it differ for different segments? Are there other ones interested? Like you can get so much detail just by asking questions on these kind of things without speaking to any engineers.</p>
</details>

Clarvo：这给了我一些关于查询代码库和 GitHub 历史以获取事件的其他用例的灵感。我经常做的一件事是，进行与此非常相似的分析，但我会说，“从客户的角度来看，上周发布了什么？”然后我用它来写我的新闻通讯。所以，我又一次开始使用我们的代码库作为我们营销材料的真相来源。我不需要通过像 PRD 里的内容或者产品经理写的东西之类的代理信息。我就是直接说，“告诉我代码和代码提交里有什么”，因为那是我知道已经上线的。它可以解释面向客户的体验和意图，然后你就可以从中创造出这些非常有趣的面向业务和市场的资产。所以我认为，能够为任何用例（包括这个）查询你的代码库和 GitHub 历史，真的非常有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this gives me a little bit of some inspiration on other use cases for querying your codebase in GitHub history for events. One of the things that I do very frequently is I do a very similar analysis to this, but I say what is everything that shipped in the last week from the context of a customer and then I use it to write my newsletter. So again, like I'm starting to use our codebase as a source of truth for our marketing materials. I don't have to proxy through like what was in the PRD or what did a PM write or any of that stuff. I'm just like just tell me what was in the code in the code commits because that's what I know went live. It can interpret what the customerf facing experience and intention would be and then you can create these really interesting business and market facing assets out of that. So I just think the ability to query your codebase and your GitHub history for any use case including this one is really useful.</p>
</details>

### 端到端分析：从 SQL 查询到高管报告

Tim：是的，我喜欢这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I love that.</p>
</details>

Clarvo：太好了。那在这之后我们做什么呢？你已经确定了转化率问题，可能也找到了几个问题来源。你会去和同事谈，会去看代码。那么，我们如何进行实际的分析呢？我知道我们说过要做一些“氛围分析”，但我们还没看到多少数字。所以，Alexa，当我们确定了一个问题或一个想要追求的机会后，我们该如何进行实际的数据分析呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. Now what what do we do after this? So you've identified you have a conversion rate problem. You've identified maybe a couple sources of the issue. you're going to go talk to your colleagues, you're going to look at the code. Um, how do we actually do some analysis or I know we said we were going to do some vibe analysis and we have seen very few numbers. So, Alexa, how do we do actual analysis of data when we've identified a problem or an opportunity we want to go after?</p>
</details>

Alexa：好的。这是一个相当经典的分析任务。我将带大家走一遍流程：我们推出了一个新产品功能，我们想了解它的表现如何。所以，我将带大家从头到尾，从了解功能是如何构建的，到分析其性能，再到撰写一份最终可以提交给高管团队的总结。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So, obviously like a quite classic analytics task. I'm going to take us through, you know, we launched a new product feature and we actually want to understand how it did. So, I'll take us end to end from understanding how the feature was built, analyzing its performance, and then producing a summary that could eventually go to our exec team.</p>
</details>

Alexa：就像 Tim 提到的，在没有 AI 的情况下，单是收集背景信息就意味着要花数小时翻阅所有的规格说明和 PRD，从头开始编写 SQL 查询，然后还要花大量时间撰写和编辑文档。而有了 AI，我可以像 Tim 刚才那样，直接从代码库中提取上下文。我可以生成查询，也可以起草一份综合性的文档。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, like Tim kind of touched on, without AI, especially the context gathering would mean hours spent digging through all the specs and PRDs, writing SQL queries from scratch, and then, you know, spending a lot of time writing and editing a doc. So with AI, I can pull context similar to what Tim just did directly from the codebase. I can generate queries and I can draft draft a synthesized doc.</p>
</details>

Alexa：我将开始分享我的屏幕。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and so I am going to start sharing my screen.</p>
</details>

Clarvo：在你准备的时候，我得说，人们以为我深入研究 AI 是因为我觉得编程很有趣。但实际上，是因为它让我的 SQL 不再那么丑陋了。这是我多年前的首要用例。我当时想：“谢天谢地，现在我不用因为我那恶心的 SQL 去烦我的同事了。我可以把我那可怕的 SQL 拿去烦 AI，它能让它变得更高效一些。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And while you pull that up, I have to say people think that why I got into AI in a deep way was because I thought it was so fun to code. And it was actually it made my sequel so much less ugly than it used to be. It was like my number one use case however many years ago. I was like, "Thank God, now I don't have to bother my colleague with my disgusting SQL. I can bother uh AI with my horrifying SQL and it can make it a little bit more uh efficient."</p>
</details>

Alexa：是的。我的意思是，即使只是过去几个月的 ChatGPT，对于 SQL 查询来说也已经是颠覆性的改变了。ChatGPT 的问题在于，你必须花大量时间提供上下文，比如确切的表名、确切的字段名。所以，使用 Cursor——虽然这不是它最被宣传的用例——来实际创建、编辑和编写 SQL，已经相当改变游戏规则了，特别是因为它具有很强的上下文感知能力，我稍后会谈到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I mean, even just chatgbt for the last couple months has been a j game changer for SQL queries. The problem with chat GBT is you had to spend a good amount of time giving context like the exact table names, the exact field names. And so using I mean it's not its sort of most marketed use case but using cursor which is what I'm going to show today to actually create edit write SQL has been pretty gamechanging um especially because it's so contextaw aware and I will talk about that.</p>
</details>

Alexa：Cursor 运行一些查询可能需要三到四分钟。所以，我将先启动这个提示，然后我会解释上下文和我做了什么。在它运行的时候，我来设定一下场景。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So cursor can take like 3 to four minutes to run some queries. So I'm going to just kick off this prompt and then I'll explain the context and what I have done. So while that's running, I will set the stage.</p>
</details>

Alexa：上个月，也就是七月，我们为一种我们一直在试行的新支付方式重新设计了注册流程。当客户关联他们的银行账户用于支付时，这个注册过程就算成功了。我们的旧流程已经上线了几个月，我们有一个假设，认为我们可以改进它。所以我们重新设计了流程。因为这是一个试点项目，我们实际上没有足够多的零售商或用户来进行 A/B 测试。所以我只需要做一个非常直接的分析，就是“之前表现如何，之后表现如何？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Last month in July, we redesigned the signup flow for a new payment method that we have been piloting. And this process of signup is successful when a customer links their bank account uh for the payments. And our old flow had been live for a few months. We had a hypothesis that we could improve it. So we redesigned the flow. Because this is a pilot, we actually like didn't have enough retailers or or users. um to run an AB test. So I just needed to do a pretty straightforward, you know, how was this performing before, how is it performing after?</p>
</details>

Alexa：在过去，这同样意味着要翻阅大量文档，或者更现实地说，就是直接去问工程师一些问题，比如：“好了，我们到底做了什么？谁能看到它，为什么？有哪些前端事件是我可以用来分析的？”虽然我在最终规格阶段会和我们的工程师紧密合作来搞清楚这些，但这些细节很容易被遗忘，特别是我们常常在功能上线几周甚至几个月后才回过头来分析。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um historically, again, that would have meant a lot of digging through documentation or more realistically just pinging an engineer to ask questions like, okay, what did we build? Who sees it and why? What front-end events are emitted that I can use to analyze this? Um, and while I do work closely with our engineers during the endspec phase to like figure this out, those details are easy to lose track of, especially like we're often coming back to analyze things, you know, weeks or even months after the feature launched.</p>
</details>

Alexa：我想说，我可能会像 Tim 一样，从 Notion AI 构建上下文开始，但我们已经展示过那个了。所以，我直接跳到代码库。如果我们看这个提示，我的提示远没有 Tim 的那么漂亮。我不会花很多时间在上面。我觉得用 Cursor，你总可以迭代。所以我想了解“设置向导”，也就是我们称之为这个新流程的名字。我让它研究我们的代码库。我基本上问了谁、什么、哪里、何时、为什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I will say that I probably would start with notion AI context building similar to Tim, but we already showed that. So, I'm skipping straight to the codebase. And if we go up to this prompt, um, my prompts are way less pretty than Tim's. I don't like spend a lot of time on them. I feel like with cursor, you can always iterate. And so I wanted to understand the setup wizard, which is what we called this new flow. I told it to research our codebase. And I essentially asked who, what, where, when, why.</p>
</details>

Alexa：所以如果我们看这个答案，可以看到，好的，它正在查看代码库。我不是工程师，我不太懂这是什么意思，但它告诉我们，在我们的代码里，这被称为“首次运行用户体验”。它还告诉我一些关于标志的信息，比如不能是子用户。这里有很多细节。它告诉我用户何时会看到这个流程，流程中会发生什么，以及步骤的顺序。这非常重要。如果我要分析一个漏斗，我需要知道事情发生的顺序。然后，如果有一个成功事件，比如设置完成时，它会给我一堆可以用来分析的事件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so if we go to this answer, we can see, okay, it is, you know, looking into the codebase. And you know, I'm not an engineer. I don't really know what this means, but it, you know, we called this in our code the first run user experience. And it tells me about some flags, cannot be sub users. There's like a lot of detail here. Um, and it's telling me when users see this flow, what happens during the flow, the order of steps that happen. That's like pretty important. If I'm going to analyze a funnel, I need to know like in what order did things happen? and then if there is a success event like when the setup is complete and then it gives me a bunch of events that I can use to analyze it.</p>
</details>

Alexa：这已经是一个巨大的改变了。过去我得依赖像 Notion 这样的二手信息来源来拼凑出它是如何构建的。而用 Cursor，就像你说的，我可以直达源头，并让它翻译成自然语言，这给了我更多的信心，因为它反映的是实际线上的情况，而不是某人记得写下来的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is already such a gamecher like in the past I would have leaned on secondhand sources like notion uh to piece together how it was built with cursor like you were saying I can go straight to the source and have it translated into natural language and that just gives me a lot more confidence because it reflects what's actually live not what someone remembered to write down.</p>
</details>

Clarvo：在你进行下一步之前，我想指出一点。我看到工程团队经常跳过的一个步骤是，在发布功能时做好事件跟踪。因为你知道，你一开始在 PRD 里定义了一个跟踪计划，然后到了实施阶段，人们就忘了。它应该是前端事件还是后端事件？我最喜欢的 AI 后续任务之一是，在功能发布后或在代码审查中，我会用一个快速提示去问，“这个功能里的所有东西都被适当地跟踪了吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing I want to call out while you're going to your next step is one of the steps that I see skipped by engineering teams is good event tracking when they release a feature because you know you you start up front in the PRD and you like define a tracking plan and then it gets to implementation and people forget should it be a front-end event should it be backend event and one of my favorite follow-up AI tasks after something has been released or it's in code review is I do a quick prompt and I go is this is everything appropriately tracked in this feature</p>
</details>

Clarvo：然后我会让 Cursor 或者 Devon 进去，把所有正确的事件都加上，并确保 schema 是规范化的。所以，对于所有的数据分析师来说，要烦人一点，为自己的新功能事件提交一个 PR，这样你就不会被工程师给你做的东西困住。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I get either cursor or Devon to go in and put in all the right events and make sure that the schemas are normalized. So for all the data analysts out there, be annoying and do a PR for your own uh events on new features so you're not, you know, stuck with what the engineers built for you.</p>
</details>

Alexa：这启发了我，我可以把最终的规格说明放到任何 AI 工具里，然后问，“我需要请求哪些前端事件或哪些事件，才能有效地衡量这个功能的成功？”因为现在我只是在脑子里想这些。这不是我拥有的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that inspires me to I can take the endspec and just put it into any AI tool and say what front-end events do I or what events do I need to ask for to be able to measure the success of this effectively. Um because right now I'm just doing that in my head. That is not something that I have.</p>
</details>

Clarvo：是的。别在脑子里想。这是《How I AI》的副标题。《How I AI》。是的。别在脑子里想。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Don't do it in your head. That's the subtitle of how I AI. How I AI. Yes. Don't do it in your head.</p>
</details>

### 关键解锁：语义层与 MCP 的力量

Alexa：所以，对于下一个提示，我同样没有用最复杂的提示。我只是说，我想从宏观层面了解这个功能的表现。我给了一点背景，说我们的目标是让它变得更好。这很明显，但我还是想明确说出来。我和 Tim 一样，给了 Cursor 代理相当大的自由裁量权。我说，“好吧，你想出理想的输出字段。我有一些想法，但由你决定。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh with this next prompt um I again not the most like sophisticated prompt. I'm just saying I want to understand at a high level how this feature has been performing and I give the quick context of you know our goal is to make it better. That's pretty obvious that I just want to spell that out. And I like Tim giving a fair amount of discretion to the cursor agent. I'm saying okay come up with the ideal output fields. I have some ideas but like you know it's up to you.</p>
</details>

Alexa：然后，我确实发现明确告诉它创建一个文件很重要。它有时会忘记，直接在对话侧边栏里写 SQL。还有，使用 MCP 连接。我费了这么大劲才设置好，我希望它能使用 Snowflake MCP 连接。然后，实际地对文件进行质检（QA）。这正是这个 Cursor 代理和 Snowflake MCP 的强大之处。它不仅能写 SQL，这是 ChatGPT 过去一年一直在为我做的事，它还能运行它，查看输出，然后做出自己的初步判断和合理性检查，这太酷了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then two I do find that telling it explicitly to create a file. It sometimes forgets to do that and just writes the SQL directly in the um conversation sidebar. Uh use the MCP connection. Like I went through all this trouble to set it up. Uh I want it to use the Snowflake MCP connection and then actually QA the file. And that's what's so powerful about this cursor agent and the snowflake MCP is not only is it writing the SQL, which is what chatgbt has been doing for me for the last year, it is running it, looking at the output and then making like its own sniff test sense check decisions which is just so cool.</p>
</details>

Alexa：我想在我们运行这个的时候指出另一件事，我对这个能相对快速地工作有相当大的信心，是因为我和我们的数据团队已经做了大量工作来创建一个所谓的“**语义层**”（Semantic Layer：一个将复杂的业务术语、表格、指标等翻译成 LLM 能理解的结构化文件的中间层）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. Okay. And then another thing I want to call out as we are running this, the reason why I have a fair amount of confidence that this is going to work relatively quickly is because I and our data team have done a fair amount of work to create what's called a semantic layer.</p>
</details>

Alexa：大约六个月前，我们出色的数据工程团队决定创建一个全公司通用的语义层。语义层本质上就是为 LLM 提供的一个翻译层，包含了我们的业务术语、表格、字段、筛选器、指标等。AI 可以查看这些文件，理解我们表格的含义。这个通用层覆盖了我们最常用的通用表格，如订单、商品、用户等。他们将其连接到一个自定义 GPT，公司里的任何人都可以去问一些非常基本的问题，比如“去年欧洲的平均订单金额是多少”，并很快得到答案。这极大地解放了我们的分析团队，我们不用再为人们回答这些问题了。他们可以自助服务。这实现了数据的民主化，也为我们节省了大量时间，让我们能专注于更深入的分析。

<details
<summary>View/Hide Original English</summary>
<p class="english-text">And so uh first our amazing data engineering team like six months ago decided we were going to create like a general company semantic layer. And a semantic layer is essentially just a translation for an LLM of like our business terms, tables, fields, filters, metrics, etc. And AI can look at those files and understand like what our tables mean. This general one covered like our mostused generic tables, orders, items, users, etc. Um, and so they connected it to a custom GPT and anyone in the company can go ask pretty basic questions like what was the average order size in Europe last year and get an answer really quickly. And so that's been a huge unlock to save our analytics team time of like we're not answering these questions for people. They can self-s serve. It's just democratizing data and you know saving us a lot of time so that we can focus on more deep analysis.</p>
</details>

Alexa：对于更深入的分析，我们需要的不仅仅是这些基本表格。所以在我们一位数据工程师的大力帮助下，她专门为我的业务范围构建了一个专门的语义层作为测试。我是公司里第一个这么做的，但我们计划将其推广到所有业务范围。基本上，这个语义层定义了我最常用的表格、连接、筛选器和指标。因为它存在于我们的代码库中，就在我们的数据科学仓库里，Cursor 可以直接调用它，这使得运行 SQL 的零样本能力变得惊人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for deeper analysis like we needed something more than just these basic tables. And so I with a lot of help from one of our data engineers she built a specialized semantic layer just for like my scope as a test. I was you know we're the I was the first one in the company to do this but we're planning on kind of rolling it out to all of the areas of scope. And you know basically this semantic layer just defines the tables that I use the most. joins the filters, the metrics, and because it lives in our codebase, it's like in our data science repo, cursor can just tap into it, and it just makes the zeroot ability like insane of running SQL.</p>
</details>

Clarvo：我见过几个这样的东西，它们看起来真的就像定义好的术语表。这个表代表这个意思，这个字段代表那个意思。如果你想查询平均订单价值，就应该这样做。它几乎就是你的文档，只是以一种围绕常见查询的更结构化的形式存在。我认为它的好处在于它可以通过代码来管理。你可以更改它，更新它，添加新东西。我还认为，对于数据工程师来说，它减少了数据仓库设置的一些不必要的复杂性。因为以前你得创建这些聚合表和定义好的指标，并希望人们能以正确的方式编写查询。而现在，你可以定义这些规范的查询，并且知道无论你的表是什么样的，它们都能得到正确的答案，我认为这在数据工程方面是相当不错的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've seen a couple of these and yeah, I don't know what yours looks like, but they really just look like defined terms tables. This table means this, this field means that. If you're trying to query average order value, this is how you do it. And it's almost your documentation in a little bit more of a structured form around common queries. And what I think is nice about this is its ability to be managed by code. You can change it, you can update it, you can add new things. I also think for the data engineers out there, it reduces a little bit of needed complexity on the data warehouse setup because previously you were creating these like aggregate tables and these like defined metrics and you're hoping people were writing queries the right way and now you can deci define these canonical queries and know that no matter kind of like what your tables look like, they're going to get to to the right answer, which I think is quite nice on the data engineering side.</p>
</details>

Alexa：是的。这就是你所说的那种例子。它只是一个非常结构化的 JSON 文件。据我所知，这不是我做的，但我让工程师向我解释了过程。老实说，LLM 在创建这个过程中帮了很大忙。他输入了关于我们数据仓库的细节和上百万条我以前写的查询，然后它就帮助生成了这类东西。他还使用了 LangChain 来把我们很多报告的名称改成问题形式，因为显然，当我通过自定义 GPT 或 Cursor 查询时，我通常是在问一个问题。所以我觉得那很酷，把它翻译成问题能让语义层工作得更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So this is an example of like what you were talking about. It's just a very structured JSON file. And from what I understand, I did not do this, but I had the engineer explain the process to me. And honestly, LLM's helped a lot with creating this. You know, he fed in details about our data warehouse and just a million queries that I had previously written and it kind of helped spit out this type of thing. He also used lang chain to like change the names of a bunch of the reports that we had into question form because obviously when I'm querying this whether it's through a custom GPT or cursor I'm often asking a question and so I thought that was pretty cool like translating it to a question makes the semantic layer work so much better.</p>
</details>

Clarvo：哦，这将是我的下一个项目。这太有趣了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh this is going to be my next project. This is so fun.</p>
</details>

Alexa：太棒了，很高兴能启发你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh amazing glad to inspire.</p>
</details>

Clarvo：回到实际运行的 SQL，我将实际运行这个。希望这个... 以防人们错过，你提到了 Snowflake MCP，我们现在看到的就是这个，它是一种以编程方式连接到 Snowflake 数据仓库并运行查询的方法。所以你不仅可以在这里生成 SQL，而且不用复制粘贴然后去 Snowflake Cloud 或其他可视化工具里运行，你可以直接在这里运行。你直接在这里得到你的表格。所以，你消除了上下文切换，消除了复制粘贴，直接在这里获取数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to go back to the actual SQL that was run and I will actually just run this. See hopefully this and just in case people missed this you did call out the Snowflake MCP which was what we're seeing right now which is a programmatic way to hook into running queries in your Snowflake data warehouse. So you can not only generate the SQL here, but instead of like copy and pasting it and going to like Snowflake Cloud and running it or whatever your visualization tool is, you can just run it right here. You're getting your tables right here. So again, like you're you're eliminating that context switching, you're eliminating the copy and paste, and you're getting your data right here.</p>
</details>

Alexa：是的，完全正确。我正在看这个，我觉得它显示了一个错误。但我让它自己做质检。通常情况下，它做得很好。但我对这类事情做的一个快速质检是，我希望看到没有跳过的步骤。哦，实际上，我从上下文中记得，这是一个临时的步骤，只有部分人会看到。但通常当我检查这个时，如果不是在做这个演示，我可能会花更长的时间来做质检。但我只想看到有意义的流失率，对吧？我不想看到 0、0，然后是 1，或者 0。所以这只是我能做的一个快速质检。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep. Exactly. And so I am Oh, this is interesting. This actually I am looking at this and it's I think it showed a mistake. Um but you know, I asked it to queue. QA itself. Normally this has done does a very good job. But one of the quick QAs that I do for something like this is I want to see no skip steps. Oh, actually you know what I remember from the context this is a temporary um this is a step that only some people see. But usually when I'm looking through this, you know, in a in if we were not doing this demo, I would spend probably a lot longer QAing this. But I just want to see drop off that makes sense, right? like I don't want to see 0 0 and then one or then zero and so that's just a quick QA that I can do</p>
</details>

Alexa：你知道，这个分析署名的是我，不是 AI。所以我做了那个。我为确保能有效质检做的另一件事是，在我的 Cursor 规则中，我告诉它要为每一个 **CTE**（Common Table Expressions：通用表表达式，SQL 查询中的一种临时结果集）添加注释，这样我就知道每一步发生了什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know it's not the AI's name on this analysis it's mine so I do that the other thing that I have done to really make sure that I can QA this effectively is I in my cursor rules I tell it to comment every single CTE so that I know what the and sorry CTE are like sections of SQL that often are created when you're writing SQL and I just want to know each step of what is happening so that as I'm looking at the SQL I can say okay the agent said it's doing this and like looking at this code I can actually tell that it's doing this</p>
</details>

Clarvo：工程师们，捂住你们的耳朵，因为工程师们讨厌，讨厌，讨厌，讨厌，讨厌我说这个。他们讨厌它。我喜欢过度注释的 AI 代码。让我告诉你为什么。因为当你不是在写这段代码时，你真的需要理解代码设计背后的思考过程。让 AI 注释它写的代码，为你提供了一种自然语言的方式来理解你对实现的理解是否与代码的实际技术实现相符，这是基于 AI 自己的推理。如果你想，可以删掉它，我不在乎。我知道所有反对过度注释代码的论点，但我认为它对人类审查有很多好处，而且对于 AI 回去处理它时也是很好的上下文。好了，工程师们，你们现在可以放开耳朵了。如果你们想，可以在 Twitter 或 X 上骂我。但我做同样的事情，我说，“去代码里注释一下，这样我能理解你是如何一步步分解这些的。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so engineers cover your ears because engineers hate hate hate hate hate when I say this they hate it I love over commented AI code and let me tell you why because when you are not writing this code you really need to understand the thought process behind how the code was designed and having AI comment the code that it writes gives you a natural language way to understand if your understanding of the implementation matches the actual technical implementation of the code itself based on the AI's own reasoning fine delete it if you want to I don't care I know all the arguments against over commented code and I think there's a lot of benefits for human review and it's also great context for AI when they go back and work on it. So engineers, you can now uncover your ears. You can yell at me on Twitter if you want to or an X if you want to. But I do the same thing where I say go ahead and comment in the code so I can understand how you've decomposed these step by step.</p>
</details>

Alexa：是的，这非常棒。我甚至在 ChatGPT 里有一个自定义 GPT，用来注释我以前写的代码。我只要插入代码，然后，你知道，如果我要把仪表盘交接给别人，我真的不希望任何人因为太困惑而不得不来打扰我。我的目标是让它能够相当程度地自服务。看，那些代码行不会自己展开。让我们加点注释吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it's pretty pretty awesome. It's also I even have a custom GPT in chat GPT to comment code I've written before. I just insert code and then, you know, if I'm ever handing off dashboards to someone, I really don't want anyone to be so confused that they have to bother me. You know, my goal is to have it be quite self-s served. Look, those lines of code are not going to expand themselves. Let's get some comments.</p>
</details>

### 自动化报告：构建自定义 AI 代理

Alexa：我将启动我的下一个提示。但基本上，我们要在这里快进几个小时，因为到目前为止，我的目标是得到一个干净的基础查询，我可以用在 Mode（Faire 的商业智能工具）的仪表盘里。作为战略与分析团队，我们做的很多工作就是创建表格，然后用这些表格来制作漂亮的图表，讲述一个故事。所以，让我们假装我花了几个小时用 Cursor 优化查询。我实际上为旧流程和新流程各做了一个。这也是一个真实的用例，和 Tim 的一样。然后我在 Mode 里建了一些可视化图表。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm going to kick off my next my next prompt. Uh but basically like we're going to skip ahead a couple hours here because um up until this point like my goal was to get this kind of clean base query that I could use for dashboards in mode which is fair's BI tool. You know, a lot of what we are doing as the strategy and analytics team is creating creating tables that then can be used for pretty charts to tell a story. And so let's pretend that I spent a few hours with cursor like refining queries. I actually did one for the old flow and the new flow. I actually did do this. This is also a real use case like Tims. Um and then I built some visualizations in mode.</p>
</details>

Alexa：很酷的是，实际上有一个 Mode MCP，我可以告诉它直接查看一个仪表盘。对于正在收听的听众，我们在左边是我们的旧流程，右边是我们的新流程。你会看到有一个步骤只在某些入口点出现。这是一个按入口点划分的视图，基本上它只是显示了每个流程的总体成功率和各步骤的成功率。这就是我在这个提示中指向 Mode MCP 的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's really cool is that there is actually a modem MCP and I can tell it to view a dashboard directly. For those who are listening here, we have on the old on the left hand side our legacy flow and on the right hand side our new flow. Um you'll see that there's one step that is only present in some of the uh some of the entry points. is a split by entry point and basically it's just showing you know like what is the overall success rate and success rate by step for each of these flows and so this is what I have pointed the mode MCP towards um in this in this prompt</p>
</details>

Alexa：好的。我告诉它，“嘿，去看看这个 Mode 仪表盘，用这个 MCP。”我还给了它我用 Cursor 写的、驱动那个仪表盘的直接 SQL。我只是向它要一些详细的结论和下一步建议。我给了一点上下文，并告诉它如有必要可以问澄清性问题和使用 MCP。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So, I'm telling it again like, hey, go look at this mode dashboard and use this MCP. I also give it the direct SQL that's um that I wrote with cursor uh that's powering that dashboard. I'm just asking it for some detailed takeaways and next steps. I give it a little bit of context. Um and I tell it to ask clarifying questions and use the MCPS if necessary.</p>
</details>

Alexa：MCPs，我不确定我们是否已经定义过，但我相信它代表“模型上下文协议”（Model Context Protocol），它们是如此强大。我觉得这是最让我感觉像魔法的时刻。起初我以为它们和 API 类似，所有东西都需要被定义。比如，双方的某个工程师需要去定义端点，有一个非常具体的结构。这看起来工作量很大。但这些模型就是知道该做什么。这对我来说简直太疯狂了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The MCPS, I think I'm not sure if we've defined it yet, but model context protocol, I believe is what it stands for, are like so powerful. I think that that's when this has felt like magic the most. Like at first I assumed that they were similar to APIs where everything needs to be defined. Like some engineer on, you know, both sides needs to go define endpoints that there's a very specific structure. It seemed like a lot of work. these models just like know what to do. It's just wild to me.</p>
</details>

Alexa：我得说，我们数据工程那边为了设置其中一些 MCP 做了大量工作。我想我们分析平台团队的 Ben 在这上面花了很多时间。我不想轻描淡写那一步，但作为它们的最终用户，每次它能访问到某个东西时，都感觉像魔法一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I will say that there's a lot of work on our data engineering side to get some of these MCPs set up. So I think Ben on our analytics platform team has just spent a lot of time on this. Like I I don't want to minimize that step, but as the end user of them, it is like it just feels magical every time it can just access something.</p>
</details>

Alexa：所以如果我们看这边的结果，嗯，关键结论和下一步。酷。所以，看起来我们做得很好。耶，Faire。它给出了一个相当详细的清单，包括漏斗分析、洞察和关注点、可行的下一步等等。这已经是一个相当不错的起点输出了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so if we go into the results over here, um, next key takeaways and next steps. Cool. So, uh, we looks like we did a good job. Yay. Fair. Um, and it gives like a pretty detailed, um, list of, you know, the funnel analysis, insights and concerns, actionable next steps, etc. Like this is already a pretty good sort of output to start with.</p>
</details>

Alexa：但归根结底，像这样的分析只有在你能够清晰地传达它时才有意义，对吧？你需要说服人们相信你试图传达的任何信息。所以我们也有一个 Notion MCP，我将要求 Cursor 创建一个文档，以结构化的方式记录我们的发现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but at the end of the day like analysis like this only matters if you can communicate it clearly, right? Like you need to sort of convince people of whatever you are trying to communicate. So we also have a notion MCP and I'm going to ask cursor to create a doc that captures our findings in a structured way.</p>
</details>

Clarvo：我想快速暂停一下，因为我们在大约 15 分钟内完成了这件事：你接手了一个问题，对一个功能变更进行了前后对比分析。你写了 SQL。你没有使用所见即所得的分析工具。你写了纯粹的、好的、可追溯的 SQL，来对它进行每日的漏斗分析。非常有趣。你为它做了一个仪表盘，这样你的业务用户就可以使用它。然后你对那个仪表盘进行了元分析，使用 MCP 来实际读取仪表盘，进行初步分析，不仅创建了结果摘要，还提出了建议的下一步。然后你将使用 Notion 将其发布给你的业务部门。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I want to pause really quickly because we have done this in maybe 15 minutes where you have taken a problem kind of like a pre and post analysis of a feature change. You have written SQL. You have not used a Wizzywig analytics tool. You have written straight up good SQL traceable SQL to do a funnel analysis of that on a daily basis. Very interesting. You have made a dashboard for it so that your business users can use it. You have then done a metaanalysis of that dashboard using um the MCP to actually read the dashboard, do a first pass analysis, create a summary not only of the results but of recommended next steps and then you are going to publish that to your business using notion.</p>
</details>

Clarvo：我必须说，我曾与很多数据团队合作过，他们大多数时间都在说，“这个分析的优先级是什么？我们有积压的工作。我需要数据工程。”然后，“好吧，这是仪表盘。”而那些一年内能升职三次的人，会多走一步，他们会说：“这是分析，这是我建议的下一步，而且我把它做得很好看，你可以分享给你的老板。”我看着这个，就在想，“哦天哪，我要提拔这个数据分析师。”他们真的很棒。所以我认为，能够提升你的工作质量，并思考那些有趣的事情，这才是关键。有趣的事情不是“我这个 SQL 连接写对了吗？”对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now I have to say I have worked with a lot of data teams and most of them spending their time saying what is the priority of this analysis? we have a backlog. I need data engineering and fine, here's the dashboard. Like it's like the ones that like get promoted three times in a year that go that extra step where they're like, "And here's the analysis and here are my recommended next steps and I made it pretty so you can share it with your boss." And I just think like I was watching this and I was like, "Oh man, I'm going to promote this data analyst." Like they're pretty they're pretty they're pretty good. And so I just think the ability to level up the quality of your work and think through the interesting things. The interesting thing isn't like did I write this SQL join correctly, right?</p>
</details>

Alexa：有趣的是，我是否考虑了所有边缘情况？对于下一步我们能做什么，我有什么创新的想法吗？我们能为未来改进这个分析吗？所以我真的很喜欢这个端到端的流程，因为它展示了你如何提升到更高层次的战略任务，而不是把时间花在战术上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The interesting thing is like have I thought through all the edge cases? Do I have any creative ideas on what we could do next? Can we improve this analysis for the future? And so I really like this endto-end flow because it just shows how you are leveraging up into higher strategic tasks um as opposed to spending your time sort of in the tactics.</p>
</details>

Alexa：是的，我完全同意。我们快完成了，但就像你说的，我们需要沟通这件事。在战略与分析部门，我们做的一件事是，我们的首席战略官 Dan，他非常关心精炼的写作，他团队的所有领导者都关心精炼的写作。所以我们几个月前和他合作，创建了一些关于如何在 Faire 写作的指导方针。Faire 非常推崇垂直文档文化，也就是预读文化。我们不怎么做幻灯片，我们写很多文档。所以我们有这种“使用答案优先结构”的关键原则文档。然后我们还有一个关于文档应该是什么样子的模板。所以在你将看到的这个提示中，我告诉它要遵循这些文档中的规则。这是我喜欢 Cursor 的另一点，你可以用各种方式告诉它要遵循什么规则。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I mean it's I totally agree and we are almost done but um like you said you know we need to we need to communicate this and so one thing that we have done on strategy and analytics is um our chief strategy officer Dan like he really cares about synthesized writing and all the leaders on his team care about synthesized writing and so we worked with him a couple months ago to actually create some guidance on how to write at fair like fair is very much a vertical dock culture you know pre-eread culture. We're not creating a lot of sides. We are writing a lot of docs. And so we have this sort of like use answer for structure key principles doc. And then we also have a template for what docs should look like. And so actually in this prompt you'll see like I tell it to follow these um to follow these rules that are in these docs. And that's like another thing I love about SQL or sorry about cursor is you can just tell it what rules to follow in a variety of ways.</p>
</details>

Clarvo：好的，Alexa，我要给你一个升级建议：你应该在你的 Cursor 规则中引用这些文件，这样你就不用每次都输入了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, Alexa, I'm going to give you an upgrade here which is you should reference these files in your cursor rules so you don't have to answer.</p>
</details>

Alexa：这是个很好的建议。我应该这么做。我只是想展示完整的流程，但我不这么做的原因是，它实际上会在上一步就完成了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's that's a great I should I mean I wanted to you know show the full flow but um the reason I don't is because it would have actually done it in the previous step.</p>
</details>

Clarvo：哦，是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh yeah</p>
</details>

Alexa：因为它会知道，然后我就没机会谈论它了。等我们做完后我会去做的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because it would it would have it it would have known and then I wouldn't have gotten to talk about it. I will I will do that once we are done.</p>
</details>

Clarvo：各位，这是在作秀。就是这么回事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's showbiz folks. That's what this is.</p>
</details>

Alexa：最后一件事是，我将把文档拖过来。这是我之前做这个时创建的一个，只是因为我想用黄色突出显示。我在这条提示中给出了指示，让它告诉我该添加什么。我想传达的一点是，我认为 Cursor 或者说 AI 目前还不能零样本生成一份可直接提交给高管的文档。这正是我们仍然需要进行三到四轮编辑、补充分析、确保内容合理的地方。这些工具有很多上下文，但我们仍然拥有一些只有我们才有的上下文，这就像是人类仍然有价值的独特之处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so the last thing is I am going to pull over the doc. Uh this is one I created from a previous time I did this just because I wanted to highlight in yellow. Um I gave instructions in this prompt to tell me what to add. I think one thing I want to get across is this. I don't think that cursor yet or AI can zero shot like a executive ready doc yet. Like there's that is where I think that we still need to do three to four revs of um of sort of editing, adding analysis, making sure this makes sense. Like these tools have so much context, but we have we still have some context that is just this like janiqua like humans are still valuable.</p>
</details>

Alexa：所以这算是一个相当不错的开始。我认为 Cursor 的酷之处在于，我省去了一些中间环节，非常非常快地到达了这一步，但我们并不是到处创建 AI 生成的垃圾文档。我们只是在加速分析师做这类事情的速度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so this is like a pretty good start. And I think what's cool about cursor is like I cut out some of the middlemen. I got to this point like really really quickly, but we're not just creating like AI slop docs all over the place. We are, you know, just accelerating how fast analysts can do things like this.</p>
</details>

Alexa：另一件很有帮助的事是，我会把这个文档在那份指导方针下运行三到四次。当你对一个分析深陷其中时，很难退后一步，确保你的故事讲得通。而这正是 LLM 非常擅长的。所以它可以弥补我的盲点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We, you know, and the other thing that's really helpful about um I would run this through that guidance three or four times. Um, it can be hard when you've been so in the weeds of an analysis to like take a step back and make sure your story makes sense. And so that's what LLMs are really good for. Um, so it can like cover my blind spots.</p>
</details>

Clarvo：你知道什么比把这个在你的指导方针下运行三次更痛苦吗？是和你的战略高级副总裁坐三次，听他们告诉你这毫无意义，你需要回去修改。所以我再次认为，这是一种能让你得到更高质量产出的更愉快的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, you know what's more painful than running this three times through your guidance is sitting three times with your SVP of strategy and having them tell you this makes no sense and you need to go back and edit stuff. So again, I think uh what a what a nicer way to get to a higher quality output than uh yes</p>
</details>

Alexa：它为我节省了时间，也为我团队的领导们节省了时间，并希望能提高质量。从根本上说，它正在改善我们分析团队的工作方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it saves me time and it saves the leaders on my team time and hopefully improves the quality you know it's fundamentally improving how you know we are doing work on analytics team</p>
</details>

Clarvo：我想为那些可能在听而不是在看的人指出一点，我的朋友 Alexa 在这里微笑着。这很有趣。这很有趣。你不是坐在这里说，“我再也没有角色可扮演了。机器将要接管一切。”你说的是，“天哪，翻阅表格和写那些我知道怎么写、而且已经做过好几次的 SQL 真的很无聊，所以让机器来做吧。”现在你能够专注于与业务部门对接，产生影响。我觉得这很有趣。每次我使用这些工具，我都觉得很神奇。我觉得真的很有趣。所以我想指出，我们在《How I AI》这里都笑得很开心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and one thing I want to call out for folks that are maybe listening and not watching is Alexa my friend here is smiling this is fun this is like interesting And it's fun. You're not sitting here saying, "I have no role to play anymore. The machines are going to take over." You're saying, "Man, it was really boring to like dig through tables and write all this SQL that I know how to write and I've done it a couple times, so let's let the machines do it." And now you're able to focus on interfacing with the business, having impact. Um, and it's just I I think it's fun. Every time I get in these tools, I feel like it's magical. I feel like it's really fun. And so I want to call out we got smiles across the board here on how I AI.</p>
</details>

Alexa：我没展示这个，但那个自动补全功能，当你实际编辑 SQL 时，也很有趣。就是很有趣。它知道你想做什么。所以，是的，整个过程都非常有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I didn't show this but the type ahead like if when you're actually editing the SQL that's also so fun. It's just fun. It knows what you want to do. Um so yeah this this whole process is very fun.</p>
</details>

Tim：我认为这如此强大的地方在于，它不仅让优秀的分析师变得不可思议，它还在实现数据的民主化。所以，这是我们公司各部门的人都可以做的事情。销售、设计师，任何人都可以写这个。所以，有上下文的人可以做这样的分析，然后分析师可以去做那些真正复杂的事情，而这些工具可以帮助他们深入细节。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think what's so powerful this is not just like making the good analyst just incredible. It's also democratizing data. So this is something that can be done. SQL can be written by people all over our business whether we're in sales designers anyone else can write this. So the people with the context can do analysis just like this and then the analysts can do the really complicated stuff where these tools could help them get really into the weeds.</p>
</details>

Clarvo：对于职业生涯早期的人来说，我以前说过，而且我是认真的。如果你想知道我职业生涯的转折点，那就是我学会 SQL 的时候。说真的，从那时起我变得势不可挡。所以，降低数据分析的门槛，只会创造出一大批非常有影响力的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For people early in their career, I've said this before and I mean it to be true. If you want to know the inflection point of Claro's career, it is when she learned SQL. Um tr I mean truly I became unstoppable at that point. And so lowering the barrier to entry on data analysis is just going to create a whole bunch of really high high impact folks.</p>
</details>

Clarvo：好的，Alexa。我们刚刚看到了 Cursor 如何进行端到端的漏斗分析，一直到你战略高级副总裁的 proverbial 门口。Tim，让我们来谈谈另一种分析，实验分析。我最喜欢的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Awesome. Okay, Alexa. So, we just saw how cursor can do endto-end funnel analysis all the way to the proverbial front door of your SVP strategy. Tim, let's talk about another kind of analysis, which is experimentation analysis. My favorite.</p>
</details>

Tim：是的，这应该很合你的心意。看，我们已经谈了宏观层面，也谈了分析师如何做日常工作的非常详细的实际情况。但我认为这些 AI 工具的另一个优点是，它们非常擅长加速流程，比如自动化分析过程中那些常规的、影响较小的步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, you should close to your heart. So, look, we've talked about the big picture. We've talked about a really detailed sort of actual analyst of how they do their day job. But I think one of the other things these AI tools are just so good is just accelerating process like automating away some of those routine lower impact steps in the analytics journey.</p>
</details>

Tim：举个好例子，我们想向你展示一个我们构建的快速代理，它可以自动化撰写实验结果的过程。在 Faire，我们一个月可能在产品上运行数百个 A/B 测试，每个实验都需要被监控、评估、记录，这占用了我们分析师大量的时间。如果我们不能很好地处理这些，我们的团队很快就会成为瓶颈，减慢我们的发布速度，这是任何人都不想看到的。我知道这种情况在全国各地的每一家科技公司都在发生。所以我们认为这是一个很好的例子来演示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so as a good example we want to show you a quick agent we built which automates the process of writing up experiment results. So across fair we might be running I don't know hundreds of AB tests on the product a month and each of those experiments needs to be monitored assessed documented and that just takes up so much time for our analysts. So if we don't stay on top of this very quickly it's our team that can become the bottleneck and slow down our launch velocity which is the last thing anyone wants. And I know this is something that's happening up and down the country around every single tech company. Um so we thought it'd be a good example just to to demonstrate.</p>
</details>

Tim：让我来展示一下我是如何构建这个的。我想特别强调的一点是，构建这些东西是多么的直接。一旦你经历了设置 Cursor、配置好 MCP 的痛苦过程，实际上，启动任何你能想到的新代理都非常快，而且对任何人来说都非常非技术性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um let me show you how I built this. Uh, one thing I want to really really stress here is just how straightforward these things are to build. Like once you've gone through the pain of setting up cursor, getting your MCPs in place, actually spinning up any new agent you can think about is just so quick and so non-technical for anyone to do.</p>
</details>

Tim：这一切都基于一个 Cursor 规则文件。如果你不知道这是什么，它们实际上只是一种文件类型，一个 MDC 文件，这些代理知道去查找，并知道它们可能包含指令。它们设置起来非常简单，基本上就是纯英文。你只需写下一行简单的条目，说明它是什么。比如，“使用 EPO 数据撰写实验结果的格式”。EPO 只是我们使用的实验工具。它基本上是获取我们的数据，做一些分析，给它套上一个用户界面，然后为我们写出来。

<details
<summary>View/Hide Original English</summary>
<p class="english-text">So it all runs off a cursor rules file. So if you don't know what these are, they're literally just a type of file, uh, an MDC file that these agents know to look for and know they're likely to contain instructions. um they're really easy to set up. It's basically plain English. So you just write uh a simple uh oneline uh entry of what it is. So format for writing experiment results using EPO data. EPO is just the uh experiment tool that we use. It's basically takes our data, does a bit of analysis, slaps a UI around it, uh and and writes it up for us.</p>
</details>

Tim：然后你选择何时应用。我只选择了“智能应用”。我相信模型能判断出何时需要使用它。它们做得相当不错。除此之外，它实际上只是写下你希望代理做什么。这可能看起来有点复杂。我通常会花几分钟用纯文本写下我想要它写什么。然后我会让 Cursor 把这个东西拆解掉，我会重写几次，直到得到我想要的格式。但最终，它只是一个关于我希望这个东西做什么的逐步指南。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um uh so you then select when you want to apply. I've just selected apply intelligent. I trust the model to work out when it needs to use it. They do a pretty good job. And then other than that, it literally is just writing out what you want the agent to do. Now, this might look a bit complicated. And I'll generally write this in a few minutes in plain text what I wanted to write. I'll ask cursor to then tear the thing down and I'll rewrite it a couple of times and just get it right in the format I want. But ultimately, it's just a step-by-step guide of what I want this thing to do.</p>
</details>

Tim：所以，对于正在收听的听众，我只是说，如果你被要求撰写实验结果，请执行以下操作。首先，如果还没有实验名称，就询问实验名称，然后去收集你需要的数据。使用我们设置的 EPO MCP，去和我们的实验空间对话，拉取实验的实际结果。然后使用我们已经谈过的 Notion MCP，去拉取你可能需要的其他所有上下文，比如任何其他能帮助它解读数据并撰写这份报告的文档。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I've just said for those who are listening, I've said if you're asked to write up experiment results, do the following things. So ask the experiment name if you haven't already got it and then go collect the data you're going to need. Uh so use the EPO MCP we've set up. So go talk to our experiment space, pull in the actual results of the experiment and then use our notion MCP that we've already talked about to go pull in all the other context that you might need. So any other documentation that's going to help it interpret that data and write up this report.</p>
</details>

Tim：然后我在这里写了一点，你可以看到，告诉它具体要查找哪类文档。比如，PRD、实验文档、技术规格，这些是它要帮助查找的。然后我让它基本上按照我给的格式写出那些结果。我对想要的格式非常具体，因为我希望它能以我们想要的格式非常一致地完成，并且有非常精炼的结论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I've got a little bit down here you can see telling it exactly what kinds of um of documents to look for. So, PRDS, experiment docs, technical specifications, that's that's what it's going to help it look for. And then I ask it to basically write out those results in the format I give it. And then I'm pretty prescriptive about the format I want because I want this to do it really consistently in the format we want with really tight um tight takeaways.</p>
</details>

Tim：实际上，我让它在我的电脑上，在我的 Cursor 里创建一个本地文件。这样我就可以在它创建 Notion 文档之前先看一下。我可以看一眼，如果需要的话可以优化一下提示，但这只是一个备用方案。最终，它会变成另一个 Notion 文档，这样公司里的其他人都能看到。它会非常快地完成所有这些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, actually, I've asked it to create it in just a local file on my cursor on my computer. And that just means I can actually look at it before it goes create to the notion docs. I can take a peek, refine the prompt if I need to, but that's just a fallback. And then ultimately, it's going to turn into another notion doc so everyone else in the business can see it. And it's going to do all this incredibly quickly.</p>
</details>

Tim：让我们实际看看这个东西在现实中是什么样子的。我们就在一个实验结果上运行它。我只说了，“请为‘垂直产品平铺图像’这个实验撰写实验结果。”它马上就去找到了，写下了一个很好的待办事项列表。它找到了 EPO 的结果。所以，它只是调用了结果。它找到了它的结果。很好。它找到了规则。现在它要开始为我计算这一切了，这很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And let's actually just see what this thing looks like in in reality. So let's just run it on uh an experiment result. So I've just said, please write up the experiment results for and I've given it the name of the experiment, which is vertical product tile images. Uh and straight off it's gone off and it's found uh it's written off a nice to-do list. It's found the EPO result. So, it's just called the results. It's found its results. Great. It's found the the rules. And now it's going to start working this all out for me, which is great to see.</p>
</details>

Tim：我们已经看过了格式，我们可以在这里展示一下。基本上，剩下的部分都是在展示这个东西最终会是什么样子。我让它给我文档链接，正是我想要的。所以如果我点击获取更多上下文，会有一个实验的简要总结，然后是关键部分，也就是它从 EPO 得到的实际指标。它会向我展示实际结果、置信区间，会挑出最重要的那些，并给我一个很好的颜色编码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then while it's doing all that, we'll just have a look. So, the format we've gone through, uh, we can just show here. So, basically, the rest of this is all just showing exactly what the format this thing is going to look like. So, I've asked it to give me the document links, exactly, uh, what I want. So, if I click into more context, a brief summary of the experiment, uh, and then the key bit, the actual metrics that it's got from EPO. So, it's going to show me the actual results, the confidence intervals. It's going to pull out the most important ones, and it will give me a nice little color coding for it.</p>
</details>

Tim：然后我只想从中得到实际的答案。我实际上希望它能做解读工作，告诉我们下一步该做什么。所以，它写了结论部分。我想要一个明确的答案，我们应该推广这个功能吗？我们应该回滚吗？我们应该做什么？并给我原因，比如，我们为什么这么做？还有没有你发现的其他有趣的洞察，我们应该指出的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, and then I just want the actual answer from this. So, I actually want it to do the work of interpreting what we should do next. And so, it's written the takeaway section. So, I want a clear, should we roll this out? Should we roll it back? What should we do? And give me the reasons why, like, why are we doing this? And are there any other interesting insights that you found uh that we should call out from this?</p>
</details>

Tim：让我们看看。它找到了我们需要的一切。它开始写文档了，这很好。在这个小东西里，我将要排队。所以，把它变成一个 Notion。所以，只要我运行了它，在我们看实际结果的时候，它就会开始写 Notion 文档。让我们看看。所以，马上，一秒钟之内，当它运行时，我就有了一份包含我需要的所有正确上下文的报告。它有我需要的链接，有上下文，它拉取了正确的数据。很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, let's see. Right. So, it's look, let's have a look at what it's doing here. It has found everything we need. It's starting to write out the dock, which is nice to see. Uh, in this little thing, I'm just going to go ahead and queue up. So, turn this into a notion. So, as soon as I've run it, while we look at the actual results, uh, it will start writing the notion doc. And let's have a look. So, straight away in a second while it's running that, I have got a write up with all the right context I need. So, it's got the links I needed. It's got the context. It's pulled the right data. Good.</p>
</details>

Tim：好消息是这个结果。这只是分享垂直图像而不是方形图像，一个非常标准的增长实验，看哪个表现更好。你可以看到实验组有大约 3.5% 的显著提升。然后它还提取了一些其他有趣的业务指标。让我们看看这些结论。它说，很好，推广它。正确的答案，因为有那个提升。它还提取了一些有趣的东西。它说我们的数据科学预测模型实际上也是正向的。所以它不仅说我们获得了更多零售商，而且我们获得的零售商质量更高。所以，初步看，这看起来不错。这看起来很棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The nice thing is this results. So, this was just literally sharing uh vertical images rather than square images like a really standard growth experiment like which one performs better. And you can see a nice stat lift uh of about 3 and a half% uh for the treatment. Uh and then it's pulled out some other interesting business max. And let's have a look at these takeaways. So, it's saying uh great roll it out. the right answer uh because of that lift and it's also pulled out some interesting things. So it said our data science prediction models are also actually positive. So it's saying not only have we got more retailers actually higher quality retailers the ones we've got. So this looked good as a first pass. This looks great.</p>
</details>

Alexa：我个人想指出一点，我们有一个做这些的标准格式，你必须输入置信区间和表情符号。这对我们团队来说是没有价值的工作。所以，它能提出结论，但同时也为我们节省了五分钟摆弄表情符号和小数点的时间，这真是太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And just to call out one thing here personally, like we we have a standard format for doing these where you have to type the confidence interval and type the emojis. And that is like work that is not valuable for our team. And so it's pretty awesome that like it came up with takeaways, but it also saved us five minutes of like fiddling around with emojis and decimal points.</p>
</details>

Clarvo：是的。AI 作为一个翻译层，将 SaaS 界面或 SQL 查询转换成你喜欢的、你老板喜欢的自然语言格式。这本身就是一个节省时间的方法。所以我很喜欢把 AI 当作通用的格式转换器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I mean AI as a translation layer between a SAS interface or a SQL query into natural language in the format that you like that your boss likes. That's just a timesaver in and of of itself. So I I love using AI as like the universal format translator.</p>
</details>

Tim：如你所见，我刚请求了 Notion 链接。它应该会生成 Notion。我们打开它，放到屏幕上。看，马上我就有了一个漂亮的文档，可以分享给每个人，有所有正确的颜色代码、结论，甚至还有一个小彩蛋，让我们看看，它做到了。它总是在把东西放进一个小折叠框时遇到麻烦。但就在最下面这里，我甚至让它生成了一条 Slack 消息，是一个更精简的版本。所以我可以直接把它放到正确的审查频道里，马上就可以去审批了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So as you can see I've just asked the notion link. It should produce the notion. So let's just open that up and let's put it on the screen. And look, straight away I've got a nice uh document I can share around with everyone with all the right color codes, the takeaways, and even as a little bonus, let's see, it's done. It always has trouble getting things in a little toggle. But right at the bottom here, I've even asked it to spit out a slack with an even more summarized version. So I can just drop this into the right review channels and straight away this can go and get approved.</p>
</details>

Tim：现在，我们会为每个复杂的实验都这样做吗？可能不会。可能需要一些分析。但对于简单的，一蹴而就。即使是复杂的，这也能加速你的进程。而且，公司里的任何人都可以开始做这个，这意味着我们可以把越来越多这样的事情交给工程师、产品经理和其他人来写这类东西，并为他们做分析，这同样可以极大地加速我们的发布速度，我们对此感到非常兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, are we going to do this for every complicated experiment? Probably not. There might need to be a bit of analysis, but for the simple ones, straight one shot. Even the complicated ones, this accelerates you. But also anyone in the business can start doing this, which means we can pass more and more of these things down to engineers, PMs, other people to write this kind of stuff and do the analysis for them, which again can just massively accelerate our launch velocity affair, which we're really excited for.</p>
</details>

Clarvo：是的，我很抱歉。我知道这是我的风格，但我觉得 AI 正在渗透到每一个任务中。抱歉，产品经理，现在这是你的工作了。我确实喜欢正在发生的这个小趋势。这太棒了。我喜欢它。我以前做过这类分析。它们没有这么容易读懂，而且肯定不是在 90 秒内生成的。对于实验分析来说，这是一个非常有用的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I I'm sorry. And I know this is my brand, but I feel like AI is just acrewing to every task. Sorry, PM, it's your job now. So, uh I I do like that that little trend that's happening. This is amazing. Um, love it. Have done these kinds of analyses before. They have not been this easy to read and they certainly haven't been generated in 90 seconds. Really useful tool for experimentation analysis.</p>
</details>

Clarvo：向那些我熟悉和喜爱的实验工具喊话。如果你们还没有为访问你们的数据制作一个 MCP，你们就在限制你们的客户。所以我认为，SaaS 工具的 AI 集成将成为团队评估他们使用的工具质量的一种方式。所以，如果你正在构建数据分析工具，可以考虑一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A call out to the experimentation tools out there that I know and love. Um, if you have not made an MCP for access to your data, you are limiting your customers. And so I do think sort of AI integration of SAS tools is going to be a way that teams start to evaluate the quality of tools that they're working with. So, just something to think about if you're out there building data analysis tools.</p>
</details>

### 附加案例：用 AI 设计和分析用户调研

Clarvo：好的，我们将很快地以一个最后的附加案例来结束。我们通常只做三个用例，但你们的都太好了。我们将快速过一遍一个附加用例，那就是实际设计和分析用户调查中的非结构化数据。所以，Tim，你将带我们快速了解如何使用 AI 来让调查和调查分析变得更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, we are going to wrap up very quickly with a final we're going to do a bonus. We usually only do three use cases, but your yours are all so good. We're going to do a speedrun through a bonus use case, which is actually designing and analyzing kind of unstructured data in a user survey. So, Tim, you're going to whip us through how you could use AI to make surveys and survey analysis a lot better.</p>
</details>

Tim：是的，我会非常快地做这个。我们不会在这上面花时间，但我想它只是另一个非常常见的分析用例，每个人都必须做，而且它们非常耗时。你必须正确地设计调查，把它编码到调查平台里，然后分析所有这些结果。这真的非常耗时。但端到端的 AI 可以彻底改变整个过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I'm going to do this really quickly. We're not going to spend time on this, but um let's just show I think it's just another one of those incredibly common analytics use cases that everyone has to do and they are just so timeconuming. You've got to design the survey correctly, code it into a survey platform, then analyze all those results. It's really timeconuming. But end to end AI can just like transform the whole process.</p>
</details>

Tim：我们来展示另一个。我不会运行这些，我直接去看我的备份。我们从设计开始。我喜欢这样做，我觉得你可以在 Cursor 上做，也可以在很多其他东西上做。我认为 ChatGPT 项目在这方面非常好，而且同样非常容易上手。每个人都知道这些是怎么工作的。这只是一个提供上下文的好方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's show another one. I'm just going to stop. I'm not going to run these. I'm just going to go straight to my backup. So, let's just start on design. So, what I love doing this, I think you can do it on curs, you can do it on many things. I think chat g projects is really good for this and again incredibly accessible. Everyone knows how these work. Uh it's just a great way of giving context.</p>
</details>

Tim：所以如果我们切换到这个，它加载需要一点时间。你可以看到在文件里，我做的是给它一些背景信息。比如，我们的业务是什么？这是一个我们想设计的关于 Faire Direct 工具的调查。这是我们给我们所有品牌用来帮助他们加速与自己客户销售的工具。所以我给了模型大量关于 Faire Direct 到底是什么、这些工具是什么、策略是什么的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if we switch over to this one, which chat fat, it's lovely and taking a bit of time to load. You can see in files, what I did was give it a bit of background information. So what is our bit of business? So this was a survey we want to design on fair direct tools. So that's our tools that we give all our brands to help them accelerate their sales with their own customers. And so I've given a ton of information to the model that just says like what actually is fair direct? What are these tools? what's the strategy</p>
</details>

Tim：然后，每当我做这样的调查时，无论是否使用 AI，我都会从假设开始。这最终是你想要测试的东西。所以这很好，如果我打开那些假设，这就是我喂给它的东西。我只给了它一个关于我们想了解什么的简单假设列表。我们让所有人都对一些假设达成了一致，这里有 14 个，它们非常简单。我只举一个例子，比如，“在 Faire 上更高的销售额会导致更多地使用这些工具”，诸如此类的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then I whenever I do a survey like this um whether I'm doing AI or not I'll start with hypothesis that that's ultimately what you want to test and so this is nice if I just open up those hypothesis so this is what I fed it into I just gave it a list of simple hypotheses on what um what we want to learn we do aligned we got everyone aligned on some hypothesis there's 14 in here and they're really simp I'll just call out one like um higher sales on fair leads to u more usage of these tools um things like that that we asked</p>
</details>

Tim：我只是把这些给了它，我所做的，如果我看一下我们运行的这个提示，这是一个简单的提示。我只是把它放进去，说，“你是一个做这些客户洞察调查的专家。为一千个品牌设计一个 10 分钟的调查，来测试那些假设。”我说，“这些是我给你的输入，这里是一些我们想要的设计要求。”我向它要了三样东西。我说，“把那些假设变成一个我们可以问我们客户的完整问卷，但不要只做那个。给我编码文件，把那个问卷变成实际的，在这个案例中是 Qualtrics，我们用来实际运行这些东西的平台。可以一键设计出来，并给我一个分析计划，告诉我该怎么处理它。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now I've just given that into it and all I did if I just look at this prompt that we ran so this was a simple prompt all I did was drop it in saying you're a you're a specialist at doing these customer insight surveys run design me a 10-minute survey for the thousand brands to test those hypotheses I said these are the inputs I've given you here's a bit of design requirements that we want and I asked her three things I said turn those hypotheses into a full questionnaire that we can ask our customers, but also don't just do that. Give me the coding file that turns that questionnaire into the actual, in this case, Qualrix, the platform we use to actually run these things. Can actually design that straight away in one click and give me an analysis plan for some what to do with it.</p>
</details>

Clarvo：我必须快速打断你，因为这整集都是 Tim 在说，“我只是做了一个非常简单的提示”，然后你看到的是一个像 1000 字、超结构化、非常有组织的提示。而 Alexa 就像，“哦天哪，我可能就进去说，‘也许来个不错的调查，拜托了。’”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have to pause you really quickly cuz this whole episode has been Tim saying, "I just did this really simple prompt and then you see this like 1,000word hyper ststructured, very organized prompt." And Alexa is like, "Oh man, I would just go in there and be like, "Maybe a nice survey, please."</p>
</details>

Tim：我非常相信，我 99% 的问题都会是一行字。然后如果我要派一个模型，一个大模型去做 15 分钟的工作，我可能会让另一个模型把我的那一行字变成更详细的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I love it. So, I'm a big believer that 99% of my problems are going to be one line. And then if I'm going to send a model, a big model is to go do work for 15 minutes. I'll probably ask another model just to turn my one line into something more more detailed.</p>
</details>

Clarvo：我想要 Alexa 的 A/B 测试，你用一个更小的提示运行完全相同的 GBT，然后告诉我你是否得到了同样质量的结果。看看会发生什么。宝贝，我只是不像 Alexa 那样信任它，至少现在还不行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I want I want the AB test of Alexa, you run this exact same GBT with a tinier prompt, and you tell me if you get the same quality. See what happens. See what happens. Baby, I'm just I don't trust it quite as much as Alexa does just yet.</p>
</details>

Tim：好的。那我们从中得到了什么？所以，很快地，从一个假设列表，我马上就得到了一个非常不错的调查初稿。它会问一堆问题。长度也差不多。这可以极大地加速这个过程。然后一旦我们做对了，它还给了我那个编码文件，我将在屏幕上滚动展示。写这些东西很痛苦。所以只要一行字就能告诉系统该如何提示并写出来，就像为我们的研究运营团队节省了数小时的时间。它甚至还把它翻译成一个分析计划，说这就是输出会是什么样子。所以马上，整件事就可以从一个假设列表，变成我们可能在一天结束前就能发给我们客户的东西。这极大地缩短了时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So, what do we get from that? So, very quickly from a list of hypotheses, I've got straight away a really nice first pass of a survey. Now, it's going to ask a load of questions. It's about the right length. Like, this can just massively accelerate the process. And then once we've got that right, it's also given me that coding file, which I'll just scroll on screen. These things are painful to write. So just having this a oneliner to tell exactly how the system should prompt this and write it out is just like saves hours of time for our research operations team. And it even then translates that into an analysis plan that says this is what the outputs from that are going to look like. So straight away this whole thing can go from a list of hypotheses into something we could probably get out to our customers by the end of the day. Now that's like shortens this enormously.</p>
</details>

Tim：但当你收到结果时会发生什么？这是这个东西能做的另一件事。所以，我同样会非常快地做这个，只向你展示最终结果，但我做了一个非常相似的提示。我将向你展示我放进去的文件，让你看看这有多痛苦。我只给了同样的假设，看看这个有多糟糕，这是 Qualtrics 的原始输出。这些通常需要大量清理。每个受访者一行，然后每个问题一列，不，是每个问题每个可能的答案一列。所以这些东西非常密集，对于任何处理过它们的人来说，都需要花点时间，玩弄一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what happens when you get the results back? That's the other thing this can do. And so again, I'll do this incredibly quickly and just show you the final result, but I did a very similar prompt as well. So all I did, I'm going to show you the file I dropped into this just show you how painful this is. So I just gave the same hypothesis and look how bad this like it's the raw output from Qualrix. Like these usually take a lot of cleaning. It's one line for every respondent and then one column not just for every question but for every possible answer to every question. So these things are incredibly dense. uh for anyone's worth them and they take a bit of time, a bit of playing with.</p>
</details>

Tim：我给它的唯一其他东西是一个辅助文件，基本上就是我刚才展示的那个编码文件。所以它有问题的 ID，问题的语言，答案，然后我只加了这两列，就是“这是人口统计问题还是答案”，以及“这是单选题还是多选题？”这就是我给它的全部。然后我写了另一个我的“有趣又简单”的提示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the only other thing I gave it was a a sort of helper file which was basically that u sort of coding file that I just showed you. So it's the what's the question ID, what's the question language, what's the answers and then is it I just add these two columns which is like is it a demographic question or an answer and is it a single choice or is it a multiple choice? That's all I gave it. And then I've written another one of my uh fun and simple prompts.</p>
</details>

Tim：同样的角色任务，只是分析调查结果，找出这些数据中最有趣的东西，然后判断预定义的假设。我想要一个表格，基本上说，对于那些假设，它是对的还是错的。然后我总是以一个小小的检查结束。我不想让它在 15 分钟后回来，带回一些不怎么有用的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so uh same roll task here just analyze the survey results give find the right most interesting things in this data and then judge the predefined hypothesis. Um uh so I want a table that basically says like for those hypothesis was it right or was it wrong. Uh and then again I always end on little qu check. I don't want it to go away 15 minutes before uh and come back with something that isn't very useful.</p>
</details>

Tim：让我们快速看一下这个。我前面有一个很好的小总结。然后是我的 14 个假设。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And let's have a look at this just very quickly. So, I've got a nice little summary out front. And then there are my 14 hypothesis.</p>
</details>

Clarvo：哦！

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh,</p>
</details>

Tim：它有一个很好的表格，为每个假设标注了“已证实”、“中性”、“未证实”。而且因为它是我要求的，它甚至还给了我一个很好的置信度分数。我说，1 表示它对此非常有信心，5 表示它根本不怎么有信心。你可以看到贯穿其中的不同级别。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and it's got a nice table that says proved, neutral, disproved for each of them. And it's even because I asked it to, giving me a nice confidence score. So, I said one, it's really confident in this five. It's not very confident at all. And you can kind of see the different levels throughout this.</p>
</details>

Tim：然后在它下面，我得到了我要求做的具体分析。所以，把所有我找到的洞察都扔出来，以支持那些发现。所以，这是我们将要对这个调查做的唯一分析吗？几乎肯定不是。但第一天，我拿到了结果。我把它扔进这个，几分钟之内，我就对所有数据所显示的内容有了好得多的直觉。所以，虽然我可能会去做一些分析，但我可以更有针对性地关注我们到底想研究什么，以及我想把时间花在哪里。而且，我们马上就可以开始与人们分享其中一些发现，非常非常快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then beneath it, I've got for each of these actually the specific analysis that I asked to do. So, just throw all the insights I found to back up those findings. So, like, is this the only analysis we're going to do on this survey? Like, almost certainly not. But day one, I've got the results. I've thrown it into this and within a matter of minutes, I've got a much much better intuition of what all that day is showing. So, while I might go and do some analysis on this, I can be so much more targeted on exactly what we want to what we want to look into and where I want to spend my time. Uh, and straight away, we can start sort of sharing some of these findings out with people very very quickly.</p>
</details>

### 核心洞察：AI 正在重塑分析师的角色

Clarvo：哦，不。所以我现在在反思，在这一集之后，好吧，我告诉大家要发布一堆功能，现在我要说，“做一堆分析”。在我脑海里，我就像，“哦天哪，我没有充分利用 AI 来真正了解我的业务”，而它又是如此触手可及。如果我能像 Tim 一样写 17 点的提示，我就能得到非常高质量的洞察。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, no. So at I'm reflecting now after this episode like okay I've told everybody to ship a bunch of features and now I'm going to be like do a bunch of analysis like in my mind I'm like oh my gosh I'm underusing AI to actually understand my business and it's so accessible and if I can just write 17 point prompts like Tim I can get really high quality insights.</p>
</details>

Clarvo：但我想指出，反思这整集和你们的四个工作流程。我喜欢你们所展示的是，很多人认为 AI 是生产一个东西的输入，但没有完成那个完整的循环，回到分析那个东西，分享那个东西，沟通那个东西。我认为你们展示了两个方面。你可以用 AI 创造，也可以用 AI 分析和沟通。我认为看到那枚硬币的两面真的很有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I do want to call out uh just reflecting on this whole episode in your four workflows. What I love about what you're showing us is so many people think that AI is an input to producing a thing, but haven't done that that full circle back to analyzing the thing, sharing the thing, communicating about the thing. And I think you're showing both sides. You can create with AI and you can analyze and communicate with AI. And I think looking at both sides of that coin is really useful.</p>
</details>

Clarvo：好的，我们将进行唯一一个闪电问答环节，因为这集我们已经讲了很长时间了，我想让你们都回到你们的代理、MCP 和分析中去。我们将最后一次回到提示。我们将弄清楚你们围绕提示的个性。Alexa，Tim，当 AI 不听话时，当你的 NCP 不调用工具时，你的提示技巧是什么？Alexa，你怎么办？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, we are going to do the one and only lightning round question because we have gotten long on this episode and I want to get you all back to all of your agents and MCPs and analysis. We're going to go back to prompts one last time. We're going to figure out your personality around prompts. Alexa, Tim, when AI is not listening, when your NCP will not call the tool, what is your prompting technique? Alexa, what do you do?</p>
</details>

Alexa：我觉得我的方法很直接。我最常遇到的问题是，我显然用完了上下文。一个对话进行得太长，开始变得不稳定。所以，虽然我认为第一级解决方案就是重新开始，但 AI 最擅长的是总结。所以我会说，“嘿，总结一下我们到目前为止在这 30 轮对话中做了什么，然后用那个重新开始。”因为，你知道，就像我听过其他节目里的人说，“你想找出它是在哪里偏离轨道的。”显然，我是一个很高效的人。我不是 Tim，我不会花 20 分钟写整个提示。我没时间。我只想说，“嘿，总结一下发生了什么。我们要重新开始，但我会给它那个总结。”所以至少新的对话可以从旧的对话中得到一些上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think mine's pretty straightforward where I think the problem that I run into most frequently is that I'm clearly running out of context. Like a conversation has gone so long that it's starting to be wonky. And so while I think you know level one is just starting over, uh what AI is best at is summarizing. So, I'll say, "Hey, summarize like what we've done so far in this, you know, 30 turn conversation and then use that to start over." Um, because you know, like, like I've heard other episodes people say, "You want to figure out like where it got off track." Clearly, I'm a pretty efficient person. I don't, you know, I'm not Tim. I'm not like writing out the entire prompt for 20 minutes. Like, I don't have time for that. I just want to say, "Hey, summarize what happened. We're going to start over, but I'm going to give it that summary." So at least the new conversation can get some context from the old.</p>
</details>

Clarvo：很好。Tim，你呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. And Tim, what about you?</p>
</details>

Tim：我的提示有这么多状态。全是 AI。全是 AI。我的工作聊天做了什么？我通常会去打开三个 Cursor 窗口，用三个不同的模型进行三次聊天，输入相同的提示，然后去泡杯茶，看看回来有什么结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So much state for my prompts. It's all AI. It's all AI. What my work chat did? So um I generally will go and open up three windows on cursor and I'll do three chats with three different models and put the same prompt in and go up a cup of tea and see what comes back.</p>
</details>

Clarvo：这是我身上的英国刻板印象，我做这件事的时候会去泡杯茶。但，是的，你运行 A/B 测试，这就是你做的。好的。我喜欢这个。Tim，Alexa，我们在哪里可以找到你们，我们能帮上什么忙？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's the British stereotype in me and getting my cup of tea while I do it. But yeah, you run the AB test is what you do. Okay. Uh I I love this. Tim Alexa, where can we find you and what can we be helpful with?</p>
</details>

Alexa：你可以在 LinkedIn 上找到我。我的全名是 Alexandra。至于能帮上什么忙，我们的战略与分析团队正在全面招聘。我们的团队与产品经理和市场推广团队紧密合作。我们做出战略性的、数据驱动的决策。非常有趣。我们有很多空缺职位。所以如果你喜欢用 AI 做实验，我们非常推崇 AI。你可以在 fair.com/careers 了解更多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can find me on LinkedIn. My full name is Alexandra. And uh ways to be helpful. Our strategy and analytics team is hiring across the board. Our team partners super closely with PMs and our go to market team. We make strategic datadriven decisions. Super fun. We have tons of open roles. So if you like experimenting with AI, we are very AI forward. So you can learn more at fair.com/careers</p>
</details>

Tim：你也可以在 LinkedIn 上找到我，我也会附和这一点，如果你喜欢 AI，就来加入我们吧。来加入我们，告诉我们我们在这里可以做得更多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and you can find me on LinkedIn as well and I'd echo that as well like come join us if you love AI. Come join us and show us how we can do it more here.</p>
</details>

Clarvo：好的，我们会在节目笔记中链接到你们的招聘页面。Alexa，Tim，这次真的很有趣。感谢你们来到《How I AI》。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, we will link to your careers page in the show notes. Alexa Tim, this has been so fun. Thank you for joining how I AI.</p>
</details>

Tim：谢谢你的邀请。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you for having us</p>
</details>

Alexa：谢谢邀请。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">for having us.</p>
</details>