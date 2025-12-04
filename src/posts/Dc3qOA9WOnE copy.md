---
title: 光凭感觉写代码是行不通的 — Augment Code 的 Chris Kelly
summary: Augment Code的Chris Kelly探讨了为何尽管人工智能（AI）在编码领域大肆宣传，但专业的软件工程原则依然至关重要。他认为，AI生成代码的能力无法取代工程师在复杂生产系统中所需的决策、维护和深入理解。真正的软件工程是关于安全地变更软件，而这需要比AI模式匹配更深刻的洞察力。他还为工程师提供了如何有效利用AI、准备代码库以及提升代码审查等关键技能的实用建议。
area: tech-insights
category: technology
project:
- ai-impact-analysis
- vibe-coding
tags:
  - ai-coding
  - code-review
  - production-systems
  - software-engineering
people: []
companies_orgs: []
products_models: []
media_books: []
date: 2025-08-17
author: Lei
speaker: Chris Kelly
channel: null
draft: true
file_name: vibes_wont_cut_it_professional_software_engineering_ai_era.md
guest: null
insight: null
layout: post.njk
series: null
source: https://www.youtube.com/watch?v=Dc3qOA9WOnE
---
Thanks for coming, by the way, and for sticking around for a little while.

顺便说一句，感谢大家的到来，也感谢你们能留下来听一会儿。

## 人工智能会取代开发者吗？

Um, if you aren't prepared, I hate to break it to you, but this time next year, half of us won't even be here anymore.

嗯，如果你还没准备好，我不想扫你的兴，但明年这个时候，我们中一半的人可能就不在这里了。

That's basically if you listen to whatever the hype is about AI and **AI (人工智能：模拟人类智能的计算机系统)** coding.

这基本上就是你听到的关于AI和AI编程的所有炒作。

You know, there's lots of fanfare, no disrespect, very intelligent people that made these quotes. Um but I think they're probably wrong.

你知道，这些说法声势浩大，我无意冒犯，说这些话的都是非常聪明的人。但我认为他们可能错了。

Not because I don't think AI coding is going somewhere important, but probably because they haven't actually touched a production system in a very very long time.

不是因为我认为AI编程没有重要的发展前景，而是因为他们可能已经很久没有接触过实际的**生产系统 (Production System：指在真实环境中运行，为最终用户提供服务的软件系统)**了。

And so maybe generating code at 30% isn't really what they think it is because really AI code is still code.

所以，也许生成30%的代码并不像他们想象的那样，因为AI生成的代码终究还是代码。

One thing they don't really recognize in this space is that they're working in very very very large code bases that have basically every decision that's ever needed to be made about that code, about that architecture, about that infrastructure has already been made for them.

他们在这个领域没有真正认识到的一点是，他们是在极其庞大的代码库中工作的，在这些代码库里，关于代码、架构、基础设施的几乎每一个决策都已经为他们做好了。

So if I'm generating 30% of my code against, you know, let's say they're doing thousands of lines a day against millions of lines of new code of of existing code, there's not a lot of wiggle room for what that code can do or should do, right?

所以，如果我生成的代码占总量的30%，比如说，他们每天在数百万行现有代码的基础上编写数千行新代码，那么这些新代码能做什么或应该做什么，其实并没有太大的灵活性，对吧？

Like it's just another button. If you've ever, no offense, anyone from meta here before I start ripping on meta. No, no meta. Great. I'll rip on meta for a minute.

就像是再加一个按钮而已。无意冒犯，在我开始吐槽Meta之前，这里有来自Meta的人吗？没有？太好了。那我就来吐槽一下Meta。

If you've ever talked to a meta engineer, they will talk about how they built a button in the ads platform for six months.

如果你和Meta的工程师聊过，他们会告诉你他们如何在广告平台上花了六个月的时间来开发一个按钮。

like that's that's what they worked on for six months. That was their job.

这就是他们六个月的工作内容。这就是他们的工作。

So like there's very little definition about like what this can needs to do that has wiggle room that AI really struck can influence.

所以，在这种情况下，对于需要做什么几乎没有可以变通的余地，AI很难真正发挥其影响力。

Next AI is still writing code. This is code we have written for 50 years. Same programming languages. Nothing is different there.

其次，AI写的仍然是代码。这是我们已经写了50年的代码，用的是同样的编程语言，没什么不同。

That code still needs to run in production somewhere. And if you're not familiar with if you haven't run a large production system, even if you write a great line of code, in complex systems, things fail.

这些代码仍然需要在某个生产环境中运行。如果你不熟悉大型生产系统，你就会知道，即使你写了一行很棒的代码，在复杂的系统中，故障依然会发生。

Like complex systems have emergent behavior that don't show up in just single lines of code.

复杂的系统会表现出**涌现行为 (Emergent Behavior：指系统整体表现出其组成部分所不具备的复杂特性)**，而这些行为是无法从单行代码中看出来的。

And so we still have to run this stuff. And so who's going to fix it? Who's going to examine it? Who's going to understand those nuances when uh when if you don't have software engineers?

所以我们还是得运行这些东西。那么谁来修复它？谁来检查它？如果没有软件工程师，谁能理解其中的细微差别呢？

So I think we're still going to have software engineers. And then also history repeats itself.

所以我认为我们仍然需要软件工程师。而且，历史总是在重演。

## 历史的重演：从DevOps到AI

This is not the first time I have been told that my career is over.

这已经不是我第一次被告知我的职业生涯要结束了。

Um, I'm getting in on the on the years at this point in time, but anyone uh around like the DevOps transformation from 15 years ago, cloud, all the all the CIS admins that I know that were racking boxes and booting kernels, all got payraises and all work on much more valuable things now.

嗯，到我这个年纪，也算是有些年头了。但回想15年前的**DevOps (开发运维一体化：一套结合了软件开发和信息技术运营的实践方法)** 转型、云计算兴起时，我认识的那些曾经负责安装服务器、启动内核的系统管理员们，如今都加了薪，并且在从事更有价值的工作。

They're much happier doing the work they're doing. So, this isn't new. This is just a different level of abstraction, right?

他们对自己现在的工作也更满意。所以，这并不是什么新鲜事。这只是又一次不同层级的抽象，对吗？

Like tractors didn't get rid of farms. They just got rid of farm hands and horses. Yeah.

就像拖拉机没有消灭农场，只是取代了农场工人和马匹。

Like yes, there will be change in an industry for certain. But tractors didn't get rid of farming. We still have to farm.

是的，这个行业肯定会发生变化。但拖拉机并没有消灭农业，我们仍然需要耕种。

## “凭感觉编程” vs 专业软件工程

So vibes. Anyone here a vibe coder? It's okay if you are. No shame.

那么，我们来谈谈“凭感觉编程”。这里有凭感觉编程的程序员吗？没关系，承认也没什么可羞愧的。

Anyone and who here thinks call would call themselves a soft a professional software engineer? Great.

那么，在座有谁认为自己是专业的软件工程师呢？很好。

So vibe coding, if you're not familiar with the term, I think everyone in this room is, but I'll do a quick summary, is basically letting the AI write all of the code and think through the code and not really examining the code at all.

所谓“凭感觉编程”，如果你不熟悉这个词——尽管我认为在座各位都懂——我简单概括一下，就是基本上让AI编写所有代码，让它思考代码逻辑，而自己完全不去审查代码。

Just does it do what I need it to do? And then in that case, like I just keep going and let it keep going. Let keep going. Don't don't examine the code and edit it that way.

只要它能实现我需要的功能就行。然后我就让它继续写，一直写下去。不去检查代码，也不去修改。

But that's not what we're talking about. We're I'm talking about how can we write code that's for production.

但我们现在讨论的不是这个。我想谈的是如何编写用于生产环境的代码。

And when I say production, I mean, you you have four nines. Do you even know what 49s means? That's production code.

当我说生产环境时，我指的是你需要达到**四个九 (Four Nines：即99.99%的系统可用性)** 的高可用性。你知道四个九意味着什么吗？那才是生产级别的代码。

You have thousands of users, gigabytes of data. We're talking software that runs the internet today.

你有成千上万的用户，GB级别的数据。我们谈论的是支撑当今互联网运行的软件。

Vibes don't cut that because there's a lot of like nuances on what goes into code. So, first let's clear up one misconception.

凭感觉是行不通的，因为代码中包含了太多细微之处。所以，首先我们要澄清一个误解。

## 代码只是产物，而非工作的全部

Code is not the job in the same way that blueprints are not the job of an architect.

代码本身不是工作，就像蓝图不是建筑师工作的全部一样。

That's an artifact of being an architect. The artifact of being a a software developer is code. Sure.

蓝图是建筑师工作的产物。同样，代码是软件开发者的产物。当然。

Yeah, I have to output some code, but I make thousands of decisions about what my software is supposed to do, what kind of what I'm writing, what packages I'm bringing in. So, let's stop conflating generating code with the art and the the craft of doing software engineering.

是的，我必须产出代码，但在此过程中，我要做出成千上万个决策：我的软件应该做什么，我正在写什么，我要引入哪些依赖包。所以，我们不要再把生成代码和软件工程这门艺术与手艺混为一谈了。

Those are different things. And so, yes, **LLMs (大型语言模型：一种经过海量文本数据训练的人工智能模型)** are great at producing code, but are they is that the same as writing production software?

它们是两码事。所以，没错，大型语言模型擅长生成代码，但这和编写生产级别的软件是一回事吗？

So, a very smart person that uh started Stack Overflow, Jeff Atwood, rest in peace, Stack Overflow, um said the best code is no code at all.

Stack Overflow的创始人，一位非常聪明的人，Jeff Atwood曾说过（安息吧，Stack Overflow），最好的代码就是没有代码。

And I think that's true because every line of code comes with comes with a burden, right? I have to maintain that code.

我深以为然，因为每一行代码都带来了负担，对吧？我必须维护它。

I have to debug that code. So, every line of code I generate I have to be responsible for.

我必须调试它。所以我生成的每一行代码，我都必须为之负责。

And so, we've been we spent so much time thinking about like how much code can AI generate?

我们花了太多时间思考AI能生成多少代码。

Who cares how much it can generate? the more it generates, the worse off I end up being, worse off the system ends up being.

谁在乎它能生成多少？它生成的越多，我的处境就越糟，系统的处境也越糟。

We want to put as little code as possible in there because all codes has trade-offs, right?

我们希望尽可能少地编写代码，因为所有代码都有权衡，对吧？

Like we recognize this package has this performance characteristic. This this methodology has this the best example I can give you which I'll I'll try to get through so you can all get back to snacks is the difference between like a **monolith (单体架构：一种将所有功能模块打包在一个独立单元中的软件设计模式)** uh an **microservices (微服务架构：一种将应用构建为一系列小型、独立服务的架构风格)** architecture and an adventure system.

比如，我们知道这个包有这样的性能特点，这个方法论有那样的优势。我能给出的最好例子——我会尽快讲完，好让大家回去吃点心——就是单体架构、微服务架构和事件驱动系统之间的区别。

How many decisions go into those kinds of architectures and the choices you have to make to do the same thing?

为了实现同样的功能，在选择这些架构时需要做出多少决策？

Like if you ever if you built a flight booking system in all three of these, you have thousands of individual decisions that have to get made.

比如，如果你用这三种架构分别构建一个机票预订系统，你需要做出成千上万个独立的决策。

LLMs don't make decisions. They generate text. They generate patterns. And at some scale, at some point, there's no pattern for my software.

大型语言模型不做决策。它们生成文本，生成模式。但在某个规模、某个节点上，我的软件不再有现成的模式可循。

Anyone here run a piece of production software that's kind of a bit of a snowflake? Has a bunch of like idiosyncrasies in it that like well only Bob knows how that works and only Jane can fix that.

在座有谁运维的生产软件有点像“雪花”（独一无二）？它有很多怪癖，比如“哦，只有鲍勃知道那是怎么回事”，或者“只有简才能修好那个问题”。

She wrote it six years ago and hasn't been on the project and that is software.

她六年前写的代码，现在已经不在这个项目组了——但这就是软件的常态。

So at some scale pattern matching doesn't work anymore because all of the nuances that go into all that software can't be pattern matched against.

所以在一定规模上，模式匹配就不再有效了，因为软件中所有的细微差别都无法通过模式匹配来解决。

So when when the software is going down, this is my like trauma of like carrying a pager.

所以当软件在凌晨两点宕机时——这是我当年带寻呼机的心理创伤——光凭感觉是无法修复错误的。

When when software goes down at two in the morning, vibes aren't going to fix the bug. Like someone has to diagnose that problem.

当软件在凌晨两点宕机时，光凭感觉是无法修复错误的。必须有人去诊断那个问题。

## 软件工程的核心：安全地变更软件

For me, that's changing software safely. That's been my job for 20 years is how can I make changes to software, whether that's adding new functionality or changing existing code.

对我而言，软件工程的核心就是安全地变更软件。这是我20年来的工作：如何对软件进行修改，无论是添加新功能还是更改现有代码。

And how do I do it safely so that software doesn't go down? So my users get their get the thing that they're getting, they the widget ships, that um you know, data is secure.

以及如何安全地操作，从而保证软件不会宕机？这样我的用户才能得到他们需要的东西，产品才能交付，数据才能安全。

So, how do we how have we done that so far in the industry? We've done lots of different things to solve that problem. One, there's just my own knowledge.

那么，到目前为止，我们行业是如何做到这一点的呢？我们采取了很多不同的方法来解决这个问题。首先，是靠我自己的知识。

I have to like learn a ton about a codebase before I can make changes safely. Uh, we use version control to do that.

在能安全地修改代码之前，我必须先学习大量关于这个代码库的知识。我们使用版本控制来辅助。

We know testing, you know, like that's why we write tests to catch if like if I change this, did this thing break over here?

我们都知道测试，我们写测试就是为了捕捉问题，比如“如果我改了这里，那边的功能会不会出问题？”

Um, we use type systems. We use deployment strategies. Can AI start to help us?

我们使用类型系统，使用部署策略。那么，AI能开始帮助我们吗？

Can context that an AI has about and can understand more of the codebase help us? probably you know at augment we believe that context is like the most important part of all AI generation in code so yeah we think we can solve that problem that doesn't change that I still have to care about production so let's just assume that we're writing code like okay the world is the future is here I have to use AI um the thing I find the most interesting about this space I've been in it a long time in this in dev tools for a long time is professional software engineers are the last people I see adopting AI and I've never seen that before like I've seen version control systems change I

AI所拥有的关于代码库的上下文以及它更深入的理解能力能帮助我们吗？或许可以。在Augment，我们相信上下文是所有AI代码生成中最重要的部分。所以是的，我们认为可以解决这个问题，但这并不能改变我仍需关心生产环境的事实。所以，让我们假设我们正在写代码，未来已来，我必须使用AI。我在这个领域，在开发者工具领域待了很长时间，发现最有趣的一件事是：专业的软件工程师是我见过的最晚拥抱AI的一群人。我以前从未见过这种情况。我见证了版本控制系统的变革。

was at GitHub in early days so like massive jumps to get uh the cloud transformation uh pick your pick your innovation and developers are like hell yes give me that new thing I don't know why well I have some hypothesis but I don't fully understand why software developers are like I'm not touching code I'm not touching AI it's like it can't do what it's going to do So I want to talk about that for just just a couple minutes.

我早期在GitHub工作，经历了向云转型的巨大飞跃。无论你选择哪项创新，开发者们的反应通常是：“太棒了，快给我那个新东西！” 我不知道为什么这次不一样，我有一些假设，但我不能完全理解为什么软件开发者会说：“我不用AI，AI做不了它该做的事。” 所以我想花几分钟谈谈这个。

## 人工智能编码工具的演进

So a few years ago, AI coding was mostly just a pile of bricks.

几年前，AI编程基本上就是一堆砖头。

Like it kind of worked but really didn't do much. Um about a year ago, you know, years and change when Sonic uh 35 came out, that's really when we saw a massive explosion um in in AI coding because the quality substantially jumped.

它好像能用，但实际上做不了太多事。大约一年前，当某个模型（如Codex或类似模型）发布时，我们才真正看到了AI编程的巨大爆发，因为质量有了实质性的飞跃。

Um, and then four weeks ago, if you weren't watching the news, literally every AI coding tool said like agents are the future.

然后，四周前，如果你没关注新闻，几乎所有的AI编程工具都在说：**智能体 (Agents)** 是未来。

Uh, we did. Um, very proud of that. But like now agents are everywhere, right?

我们也是这么说的，并为此感到自豪。但现在，智能体无处不在了，对吧？

And so this transformation has happened uh very very quickly. Uh, and so I want to talk about how we can talk do software engineering with this new future that we're seeing.

这场变革发生得非常非常快。所以我想谈谈，在我们所见的这个新未来中，我们该如何进行软件工程。

## 如何让AI更好地为你编写软件

Um, so how do you build software that's easy for AI to write? Uh, a couple tips for you.

那么，如何构建易于AI编写的软件呢？这里有几个技巧。

Um, have some documented standards and practices, right? Like what do you use?

首先，要有一些文档化的标准和实践，对吧？比如你们用什么技术栈？

Every codebase I know is in some sort of flux, right? So like are we using this package or this package?

我所知的每个代码库都处于某种变化之中。比如，我们是用这个包还是那个包？

Okay, well document that. Let the AI know that this is the next direction of your codebase. Um, have reproducible environments, right?

好吧，把这个决策记录下来。让AI知道这是你代码库的未来方向。其次，要有可复现的环境，对吧？

Like can you easily spin up a developer environment? Is your developer environment very bespoke and unique? Um, you want to have it reproducible.

你能轻松启动一个开发环境吗？你的开发环境是不是非常定制化和独特？你需要让它变得可复现。

We want to have easy testing, right? like can you run your tests locally? Can is that fast?

我们希望测试能够轻松进行，对吧？你能在本地运行测试吗？速度快吗？

Uh you know that's pretty pretty standard stuff. Um establish clear boundaries of what you're going to do.

这些都是很标准的东西。还有，要为你将要做的事情建立清晰的边界。

You're never going to give AI the idea of like uh extract this module using the **strangler pattern (绞杀者模式：一种逐步将功能从旧系统迁移到新系统的架构模式)**.

你永远不会给AI一个像“使用绞杀者模式提取这个模块”这样模糊的指令。

What does that even mean to an AI like that's a whole you have to give clear boundaries of what you're trying to build and how to get the AI to do it.

这对AI来说意味着什么？你必须为你想要构建的东西设定清晰的边界，并告诉AI如何去实现它。

And lastly like have clearly defined tasks and work. Um because AI is going to be as you know I wouldn't give any engineer on my team whether they're senior staff junior just a vague task of like could you make this button do something different like I see too many engineers prompting in that way and what's interesting about this to me is like this just sounds like software engineering right like if we don't if ideally your software engineering stack looks has these qualities and if it doesn't you're like our productivity sucks because we have you know bespoke testing infrastructure.

最后，要有明确定义的任务和工作。因为正如你所知，我不会给团队里的任何工程师——无论是资深的还是初级的——一个模糊的任务，比如“你能让这个按钮做点不一样的事情吗？” 我看到太多工程师用这种方式给AI下指令。而对我来说，有趣的是，这听起来不就是软件工程本身吗？理想情况下，你的软件工程体系就应该具备这些特质。如果不是这样，你就会觉得“我们的生产力太差了，因为我们有定制的测试基础设施”。

We have bespoke developer environments. You have to give AI the same tools that engineers need because it's doing exactly the same job.

我们有定制的开发环境。你必须给AI提供和工程师所需要的同样的工具，因为它在做完全一样的工作。

It's writing code. I've never one-shot at a piece of code in my life personally.

它在写代码。就我个人而言，我这辈子从来没有一次性写对过一段代码。

Like I've always made mistakes in the code I write. I run a test, it fails. I've got a **linter (代码风格检查工具：用于分析源代码以标记编程错误、缺陷、风格错误和可疑结构)**, it fixes it, whatever thing is.

我写的代码总会有错。我运行测试，它失败了。我有代码检查工具，它会修正错误，诸如此类。

But we've had this expectation that AI can like write perfect code. And I don't know why.

但我们却期望AI能写出完美的代码。我不知道为什么。

And so when you're thinking about adopting AI as a software engineer, you have to make sure that your your systems work like you would expect any other engineer to work because that's how it's writing code.

所以，当你作为一名软件工程师考虑引入AI时，你必须确保你的系统能像你期望任何其他工程师工作时那样运作，因为AI就是这样写代码的。

## 代码审查：未来最重要的技能

The next thing is code review is by far the most important skill.

接下来一点是，**代码审查 (Code Review)** 绝对是目前最重要的技能。

Um I think we've probably forgotten that skill as an industry. Um we probably should have been interviewing for code review and not like here's this esoteric leak code problem that you could solve, but like can you read somebody else's code and comment on why it's good or bad?

我认为我们这个行业可能已经忘记了这项技能。我们或许应该在面试中考察代码审查能力，而不是给出一个深奥的算法题让你解决。你应该能读懂别人的代码，并评论其好坏。

Um, I think this is going to become far more important as agents are writing more and more code and our code review tools today frankly suck.

我认为，随着智能体编写越来越多的代码，这项技能将变得愈发重要。而坦白说，我们今天的代码审查工具烂透了。

Like I'm getting a list of changed files. It's lexographically sorted. So like great file A changed. Let me read what changed in file A. What changed in file B?

我得到的是一个变更文件的列表，按字典序排列。好的，文件A变了，我读读文件A改了什么。文件B又改了什么？

That's not a way to think about how software changes is in the order of the files.

按文件顺序来思考软件的变更，这根本不是正确的方式。

And so I think we're going to see a pretty big explosion on the way code review can happen.

因此，我认为我们将会看到代码审查方式上的一次巨大变革。

Um, and that's the skill we need to be interviewing for. you need to be um like kind of brushing up on.

而这正是我们需要在面试中考察的技能，也是你们需要不断温习和提升的技能。

## 给软件工程师的AI使用技巧

All right, I'm running quick on time. So, I do want to give you a couple highlights of like if you are one of those software engineers is like I don't, you know, I'm not I don't trust AI.

好了，我时间不多了。所以，我想给你们一些重点提示，特别是如果你是那种对AI持怀疑态度的软件工程师。

I need some tips. I want to give leave you a few of these. Um feel free to take a screenshot.

我需要一些技巧。我想留给你们几点。欢迎截图。

One, the most important thing I can imagine is AI talks like a human but is actually a machine.

第一，最重要的一点是，AI说话像人，但它本质上是机器。

I had this interaction with AI the other day where it was like uh you know I was yelling at it because that's what you do at AI when it doesn't do what you want it to do.

前几天我和AI有一次互动，当时我正在对它大喊大叫，因为当AI不按你的要求做事时，你就会这么做。

And it's like oh I'm sorry I just scanned that file. I didn't read it. I'm like the does that even mean? What?

它回答说：“哦，对不起，我只是扫描了那个文件，没有仔细阅读。” 我心想，这到底是什么意思？什么？

How does a piece of software scan a file? It just like skimmed it. Like that's not a thing in software.

一个软件怎么会“扫描”一个文件？难道是“略读”了一下？这在软件世界里根本不存在。

It's because LLMs are trained on all the data in the world, right? There are thousands of emails that it has read that says like oh sorry I didn't read your document thoroughly. I actually just skimmed it.

这是因为大型语言模型是用全世界的数据训练的，对吧？它读过成千上万封邮件，里面有这样的话：“哦，对不起，我没有仔细读你的文件，只是粗略地看了一下。”

It's like, oh, that's what I should say when someone's yelling at me about not reading a file, right?

它就学到了：“哦，当别人因为我没读文件而对我大吼时，我就应该这么说。”

And so, we have we have to distrust some of the things that LLMs are saying they're doing because it's not actually doing that.

所以，我们必须对大型语言模型声称正在做的事情持怀疑态度，因为它实际上并没有那么做。

Don't forget, it's just generating text. It's not always doing exactly what you're what it's outputting in that text.

别忘了，它只是在生成文本。它并不总是在做它输出的文本中所描述的事情。

So, keep that in mind when you're write when you're reading through LLM output.

所以，当你在阅读大型语言模型的输出时，要记住这一点。

Um, let's see what other tip quick tips can I give you. Sometimes code is just different.

嗯，看看我还能给你们什么快速提示。有时候，代码只是不同而已。

It's okay if the LLM outputs code differently than you would.

如果大型语言模型输出的代码和你写的风格不同，没关系。

I can't expect it to produce the code that I would exactly in the same way that like the person that's sitting next to me also writes code a little differently than I do.

我不能指望它能写出和我一模一样的代码，就像坐在我旁边的人写的代码也和我的风格略有不同一样。

And so just accept that that's okay. And if you want to force it to write code like you, you can spend that energy, but know the difference of is the code better or is it just different?

所以，接受这一点。如果你非要强迫它按照你的风格写代码，你可以花那个精力，但要分清楚：代码是变得更好了，还是仅仅是不同了？

And so let go of some of that like this is how you know we this is why we have llinters. This is why we have rule systems. This is why we have style guides.

所以，放下一些执念，比如“代码就该这么写”。这就是为什么我们有代码检查工具、规则系统和风格指南。

So we can stop arguing about like is that how you define a function or is this how you define a function. Let some of that go if you can.

这样我们就可以停止争论“函数应该这么定义还是那么定义”。如果可以的话，放下一些这样的执念。

Um write a rules file. You know give it tell it what you want it to do. Have a file.

写一个规则文件。告诉它你希望它做什么，用一个文件来记录。

I always start all of my projects with like here's the stack I'm using. Here's the like guidelines I want you to use. And that's always ends up being part of the context I send with the LLM.

我所有项目开始时，都会准备一个文件，说明“这是我用的技术栈，这是我希望你遵守的准则”。这最终总会成为我发送给大型语言模型的上下文的一部分。

Um, and then lastly, I like to define create refine loop. Expect create a a document of some kind.

最后，我喜欢“定义-创建-优化”的循环。先创建一个某种类型的文档。

Have the LM help you generate it. Like I'm doing this thing. Write a markdown file that would like lay out the plan. Here's my plan. Save that as a markdown file.

让语言模型帮你生成它。比如：“我要做这个项目，请写一个Markdown文件来规划一下。” 这就是我的计划，然后把它保存为Markdown文件。

Then use that again in your context. Have it create the thing. Have the agent run against that file.

然后在你的上下文中再次使用它，让它创建出实体，让智能体根据那个文件来执行。

You know, you can make your edits to it and then refine it. then you're going in with, you know, code completions or whatever to like just tweak the things that you want to tweak and just do that loop over and over and over again.

你可以对它进行编辑，然后优化它。接着你就可以用代码补全之类的工具来微调你想要修改的地方。不断重复这个循环。

Make a plan, have it create it, and then just make your make your tweaks and you'll get a lot more comfortable one how to prompt the LLM to get the code you want to do as well as um that's just a very efficient way of coding.

制定计划，让它创建，然后你进行微调。这样你会更熟悉如何提示大型语言模型来获得你想要的代码，而且这本身就是一种非常高效的编码方式。

And if you've let go if you let go of that code has to be how I would write it, not just good functional code, then you can get a lot more productive in that way.

如果你能放下“代码必须按我的方式写”的执念，而专注于代码的功能性，那么你的生产力会大大提高。

## 结语

Um, thanks again. Uh, I blasted through that. I'm happy to talk. Augment is in the expo hall.

再次感谢大家。我很快地讲完了。我很乐意与大家交流，Augment在展会大厅有展位。

I'll be around there to chat or over here. Um, I hope to see you here next year.

我会在那边或者这里和大家聊天。希望明年还能在这里见到你们。

Hope we're all here next year. I think the jobs aren't going anywhere. Um, but happy coding. Really appreciate it.

希望明年我们都还在这里。我认为我们的工作不会消失。祝大家编码愉快。非常感谢。