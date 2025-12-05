---
author: AI Engineer
date: '2025-12-02'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=rmvDxxNubIg
speaker: AI Engineer
tags:
  - context-engineering
  - coding-agents
  - brownfield-codebases
  - software-development-lifecycle
  - mental-alignment
title: AI编码代理：如何在复杂代码库中解决难题并避免“笨拙区”
summary: 本演讲深入探讨了在复杂和遗留代码库（即“棕地代码库”）中使用AI编码代理所面临的挑战。主讲人Dex Horthy分享了如何通过“上下文工程”和“有意压缩”来优化AI模型的性能，避免因上下文窗口过大导致的“笨拙区”。他提出了“研究-计划-实施”的工作流程，强调了人类在循环中的关键作用，以及如何通过“心智对齐”来提升团队协作效率。演讲还讨论了AI编码代理的未来发展趋势，以及企业在适应AI驱动的软件开发生命周期中面临的文化挑战。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
people:
  - Dex Horthy
  - Eigor
  - Jeff Huntley
  - Vibv
  - Martin Fowler
  - Brietta
  - Sean
  - Simon
  - Mitchell
  - Jake
  - Blake
companies_orgs:
  - HumanLayer
  - Boundary ML
  - Thought Works
  - GitHub
  - Vercel
products_models:
  - Claude Code
  - Cursor
  - Hadoop
  - Parket Java
media_books:
  - HackerNews
  - Momento
status: evergreen
---
### 欢迎与AI在软件工程中的挑战

大家好！我是Dex。正如精彩的开场介绍所说，我从事**AI代理**（AI Agents: 能够自主感知环境、做出决策并执行任务的软件实体）的开发已经有一段时间了。我们在六月AI工程师大会上关于《12要素代理》（12-Factor Agents: 基于“12要素应用”原则构建的AI代理，旨在实现健壮、可扩展和易于维护的特性）的演讲，是史上最受欢迎的演讲之一，我认为位列前八。它无疑是六月AI工程师大会上最精彩的演讲之一。我可能在其中提到了关于**上下文工程**（Context Engineering: 一种优化AI模型输入信息（上下文窗口）的技术，旨在提高模型性能和准确性）的一些内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi everybody. How y'all doing? It's exciting. I'm Dex. As they did in the great intro, I've been hacking on agents for a while. Our talk, '12-Factor Agents' at AI Engineer in June, was one of the top talks of all time, I believe ranking in the top eight. It was certainly one of the best from the AI Engineer conference in June. May or may not have said something about context engineering.</p>
</details>

我今天来这里要讲什么呢？我想谈谈六月AI工程师大会上我最喜欢的一个演讲。我知道我们昨天收到了Eigor的更新，但他们不让我修改幻灯片。所以，这仍然是关于Eigor在六月谈到的内容。他基本上调查了所有公司规模的十万名开发者，发现大多数时候，当你在软件工程中使用AI时，你都在做大量的返工、大量的**代码库搅动**（Codebase Churn: 指代码库中频繁的代码修改、重构或废弃，通常是由于低质量代码或不清晰的开发流程导致），而且它对复杂任务和**棕地代码库**（Brownfield Codebases: 指现有、遗留的软件项目，通常包含大量已有的代码和复杂结构，与从零开始的“绿地代码库”相对）效果不佳。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why am I here today? What am I here to talk about? I want to talk about one of my favorite talks from AI Engineer in June. And I know we all got the update from Eigor yesterday, but they wouldn't let me change my slides. So, this is going to be about what Eigor talked about in June. Basically, that they surveyed a 100,000 developers across all company sizes and they found that most of the time you use AI for software engineering, you're doing a lot of rework, a lot of codebase churn, and it doesn't really work well for complex tasks, brownfield codebases.</p>
</details>

你可以从图表中看到，你交付的代码量确实更多了，但其中很大一部分只是在返工你上周交付的那些“线团”（Slop: 非正式术语，指低质量、混乱或需要大量返工的代码）。另一方面，如果你在做**绿地代码库**（Greenfield Codebases: 指全新的软件项目，从零开始构建，没有历史遗留代码的束缚），比如一个小的Vercel仪表板之类的，那么它会运行得很好。但如果你要处理一个有十年历史的Java代码库，效果可能就没那么好了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can see in the chart, basically, you are shipping a lot more, but a lot of it is just reworking the slop that you shipped last week. So, and then the other side, right, was that if you're doing greenfield, little Vercel dashboard, something like this, then it's going to work great. If you're going to go in a 10-year-old Java codebase, maybe not so much.</p>
</details>

这与我个人的经验以及与许多创始人和优秀工程师交流后的感受不谋而合：太多的“线团”，简直就是一个技术债务工厂。它根本无法在我们的代码库中发挥作用。也许有一天模型会变得更好，但这正是**上下文工程**的全部意义所在。我们如何才能充分利用今天的模型？我们如何管理我们的**上下文窗口**（Context Window: AI模型在处理当前输入时能够“记住”或访问的信息范围）？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this matched my experience personally and talking to a lot of founders and great engineers, too much slop, tech debt factory. It's just it's not going to work from our codebase. Like maybe someday when the models get better, but that's what context engineering is all about. How can we get the most out of today's models? How do we manage our context window?</p>
</details>

### 团队效率的飞跃与核心目标

我们在八月份谈到了这一点。我必须承认一件事：我第一次使用Claude Code时，并没有留下深刻印象。当时感觉“好吧，这稍微好一点，我理解了，我喜欢用户体验。”但从那时起，我们团队发现了一些东西。我们实际上能够将**吞吐量**（Throughput: 在软件开发中，指单位时间内完成的工作量或交付的代码量）提高2到3倍。我们交付的代码量如此之大，以至于我们别无选择，只能改变协作方式。我们重新调整了构建软件的一切。这是一个三人团队，花了八周时间，非常非常艰难。但现在我们解决了这个问题，我们再也不会回到过去了。这就是“无线团”的理念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we talked about this in August. I have to confess something. The first time I used Claude Code, I was not impressed. It was like, okay, this is a little bit better. I get it. I like the UX. But since then, we as a team figured something out. That we were actually able to get, you know, 2 to 3x more throughput. And we were shipping so much that we had no choice but to change the way we collaborated. We rewired everything about how we build software. It was a team of three. It took eight weeks. It was really freaking hard. But now that we solved it, we're never going back. This is the whole no slop thing.</p>
</details>

我认为我们在这方面取得了一些进展，并在九月份在HackerNews上引起了轰动。我们有数千人到GitHub上获取了我们的研究计划和实施提示系统。所以，我们最终达成的目标是：我们需要AI能够很好地在棕地代码库中工作，能够解决复杂问题，没有“线团”，对吧？不再有“线团”。而且我们必须保持**心智对齐**（Mental Alignment: 团队成员对项目目标、代码库现状和未来变更方向保持一致的理解和认知）。我稍后会详细解释这意味着什么。当然，我们希望尽可能多地利用**令牌**（Tokens: 大型语言模型处理文本的基本单位，可以是单词、子词或字符）。我们能够有意义地卸载给AI的工作量非常重要，这具有超高的杠杆效应。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">I think I think we got somewhere with this went super viral on HackerNews in September. We have thousands of folks who have gone on to GitHub and grabbed our, you know, research plan implement prompt system. So the goals here, which we kind of backed our way into, we need AI that can work well in brownfield code bases, that can solve complex problems. No slop, right? No more slop. And we had to maintain mental alignment. I'll talk a little bit more about what that means in a minute. And of course, we want to spend with everything, we want to spend as many tokens as possible. What we can offload meaningfully to the AI is really, really important. Super high leverage.</p>
</details>

### 高级上下文工程：避免“笨拙区”

这是针对编码代理的高级上下文工程。我将从框架开始。使用编码代理最朴素的方式是向它提出要求，然后告诉它哪里错了，重新引导它，反复询问，直到你用完上下文，或者你放弃，或者你哭泣。我们可以更聪明地处理这个问题。大多数人在AI探索的早期就发现了这一点：如果你开始了一段对话，但偏离了轨道，那么最好是重新开始一个新的上下文窗口。你可以说：“好吧，我们走错了那条路。让我们重新开始。同样的提示，同样的任务，但这次我们要走这条路，不要走那边，因为那行不通。”那么，你如何知道何时该重新开始呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is advanced context engineering for coding agents. I'll start with kind of like framing this. The most naive way to use a coding agent is to ask it for something and then tell it why it's wrong and resteere it and ask and ask and ask until you run out of context or you give up or you cry. We can be a little bit smarter about this. Most people discover this pretty early on in their AI like exploration. Is that it might be better if you start a conversation and you're off track that you just start a new context window. You say, "Okay, we went down that path. Let's start again. Same prompt, same task, but this time we're going to go down this path and like don't go over there cuz that doesn't work." So, how do you know when it's time to start over? If you see this, it's probably time to start over, right? This is what Claude says when you tell it it's screwing up.</p>
</details>

如果你看到这个，那可能就是时候重新开始了，对吧？这是当你告诉Claude它搞砸了的时候，它会说的话。所以我们可以更聪明地处理这个问题。我们可以做我称之为**有意压缩**（Intentional Compaction: 一种主动管理AI模型上下文窗口的技术，通过将冗余或不必要的信息压缩或移除，以提高模型效率和准确性）的事情。这基本上意味着，无论你是否在正轨上，你都可以获取现有的上下文窗口，并要求代理将其压缩成一个Markdown文件。你可以审查这个文件，打上标签，然后当新的代理启动时，它就可以直接开始工作，而不必进行所有的搜索、代码库理解和追赶。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so we can be even smarter about this. We can do what I call intentional compaction. And this is basically whether you're on track or not, you can take your existing context window and ask the agent to compress it down into a markdown file. You can review this, you can tag it, and then when the new agent starts, it gets straight to work instead of having to do all that searching and codebase understanding and getting caught up.</p>
</details>

那么，压缩包含什么呢？问题是，什么会占用你的上下文窗口空间？它会查找文件，理解代码流，编辑文件，测试和构建输出。如果你有一个**MCPs**（Multiple Context Providers: 指在AI编码代理中，同时使用多个上下文信息来源或工具，可能导致上下文窗口膨胀）正在将JSON和一堆UUIDs倾倒到你的上下文窗口中，那上帝保佑你。那么我们应该压缩什么呢？我在这里会给出更具体的说明，但这是一个非常好的压缩。这正是我们正在努力的：与我们正在解决的问题相关的确切文件和行号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What goes into compaction? Well, the question is like what takes up space in your context window. So, it's looking for files, it's understanding code flow, it's editing files, it's test and build output. And if you have one of those MCPs that's dumping JSON and a bunch of UUIDs into your context window, you know, God help you. So what should we compact? I'll get more specifics here, but this is a really good compaction. This is exactly what we're working on. The exact files and line numbers that matter to the problem that we're solving.</p>
</details>

我们为什么如此痴迷于上下文呢？因为大型语言模型（LLMs）实际上是**无状态**（Stateless: 指系统或组件在处理请求时，不保留之前请求的任何信息或状态，每个请求都是独立的）的。我因为这个在YouTube上被狠狠地嘲笑了一番，它们不是纯函数，因为它们是非确定性的，但它们是无状态的。要从LLM中获得更好的性能，唯一的方法是输入更好的令牌，然后你才能得到更好的令牌输出。因此，在循环的每一次迭代中，当Claude或任何编码代理选择下一个工具时，可能有数百个正确的下一步和数百个错误的下一步。但唯一影响接下来输出的，是目前对话中的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why are we so obsessed with context? Because LLMs are actually got roasted on YouTube for this one. And they're not pure functions cuz they're nondeterministic, but they are stateless. And the only way to get better better performance out of an LLM is to put better tokens in and then you get better tokens out. And so every turn of the loop when Claude is picking the next tool or any coding agent is picking the next and there could be hundreds of right next steps and hundreds of wrong next steps. But the only thing that influences what comes out next is what is in the conversation so far.</p>
</details>

所以，我们将优化这个上下文窗口，以实现正确性、完整性、大小和一点**轨迹**（Trajectory: 在AI代理对话中，指对话的整体方向和发展趋势，会影响模型后续的输出）。轨迹这一点很有趣，因为很多人会说：“我告诉代理做某事，它做错了。所以我纠正了它，我冲它大喊，然后它又做错了，我又冲它大喊。”然后LLM看着这段对话说：“好吧，酷。我做错了。人类冲我大喊，然后我又做错了，人类又冲我大喊。”所以，这段对话中最有可能的下一个令牌是“我最好再做错点什么，这样人类就可以再冲我大喊了。”所以，请注意你的轨迹。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're going to optimize this context window for correctness, completeness, size, and a little bit of trajectory. And the trajectory one is interesting because a lot of people say, "Well, I I told the agent to do something and it did [clears throat] something wrong. So, I corrected it and I yelled at it and then it did something wrong again and then I yelled at it." And then the LLM is looking at this conversation says, "Okay, cool. I did something wrong. The human yelled at me and then I did something wrong and the human yelled at me." So, the next most likely conver token in this conversation is I better do something wrong so the human can yell at me again. So, mind be mindful of your trajectory.</p>
</details>

如果你想反转这个，最糟糕的情况是信息不正确，然后是信息缺失，然后是太多的噪音。如果你喜欢方程式，有一个简单的方程式可以这样思考。Jeff Huntley对编码代理做了很多研究。他总结得很好：你使用上下文窗口越多，得到的结果就越差。这引出了一个非常学术的概念，我称之为**笨拙区**（Dumb Zone: 一个非正式术语，指当AI模型的上下文窗口过大时，其性能和准确性会显著下降的区域）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you were going to invert this, the worst thing you can have is incorrect information, then missing information, and then just too much noise. If you like equations, there's a dumb equation if you want to think about it this way. Jeff Huntley did a lot of research on coding agents. He put it really well. Just the more you use the context window, the worse outcomes you'll get. This leads to a concept I'm in a very very academic concept called the dumb zone.</p>
</details>

你有一个上下文窗口。你大约有168,000个令牌。有些是为输出和压缩保留的。这因模型而异。但我们这里以Claude Code为例。大约在40%的界限处，你将开始看到一些回报递减，这取决于你的任务。如果你的编码代理中有太多的MCPs，你所有的工作都在笨拙区进行，你永远不会得到好的结果。人们谈论过这个问题。我不会谈论那个。你的情况可能有所不同。40%的界限，这取决于任务的复杂程度，但这是一种很好的指导方针。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you have your context window. You have 168,000 tokens roughly. Some are reserved for output and compaction. This varies by model. But we'll use Claude Code as an example here. Around the 40% line is where you're going to start to see some diminishing returns depending on your task. If you have too many MCPs in your coding agent, you are doing all your work in the dumb zone and you're never going to get good results. People talked about this. I'm not going to talk about that one. Your mileage may vary. 40% is like it depends on how complex the task is, but this is kind of a good guideline.</p>
</details>

### 巧妙避开“笨拙区”：子代理与工作流

所以回到压缩，或者从现在起我将巧妙地称之为“避免笨拙区”。我们可以使用**子代理**（Sub-Agents: 一种AI代理架构，其中一个主代理可以派生出多个子代理来处理特定任务，每个子代理拥有独立的上下文，以优化整体效率）。如果你有一个前端子代理、一个后端子代理、一个QA子代理和一个数据科学家子代理，请停下来。子代理不是用来拟人化角色的，它们是用来控制上下文的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So back to compaction, or as I will call it from now on, cleverly avoiding the dumb zone. We can do sub agents. If you have a front-end sub agent and a backend sub agent and a QA sub agent and a data scientist sub agent, please stop. Sub agents are not for anthropomorphizing roles. They are for controlling context.</p>
</details>

所以你可以做的是，如果你想在一个大型代码库中查找某个东西是如何工作的，你可以引导编码代理来完成这个任务，如果它支持子代理的话，或者你可以构建自己的子代理系统。但基本上，你告诉它“去查找这个是如何工作的”，它就可以派生出一个新的上下文窗口，去进行所有的阅读、搜索、查找、阅读整个文件并理解代码库，然后只向父代理返回一个非常非常简洁的消息，比如“嘿，你想要的文件在这里”。父代理可以读取那个文件，然后直接开始工作。所以这非常强大。如果你正确地运用它们，你就可以得到这样的良好响应，然后你就可以非常好地管理你的上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what you can do is if you want to go find how something works in a large codebase, you can steer the coding agent to do this if it supports sub agents or you can build your own sub agent system. But basically you say, hey, go find how this works and it can fork out a new context window that is going to go do all that reading and searching and finding and reading entire files and understanding the codebase and then just return a really really succinct message back up to the parent agent of just like, hey, the file you want is here. Parent agent can read that one file and get straight to work. And so this is really powerful. If you wield these correctly, you can get good responses like this and then you can manage your context really, really well.</p>
</details>

比子代理效果更好，或者说在子代理之上的一层，是一种我称之为“频繁有意压缩”的工作流。我们稍后会讨论**研究-计划-实施**（Research-Plan-Implement, RPI: 一种结构化的AI辅助软件开发工作流程，分为研究、计划和实施三个阶段，旨在提高AI代理在复杂任务中的表现），但重点是你要不断地保持上下文窗口很小。你围绕上下文管理构建了整个工作流。所以它分为三个阶段：研究、计划、实施。我们将在整个过程中努力保持在“智能区”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What works even better than sub agents or like a layer on top of sub agents is a workflow I call frequent intentional compaction. We're going to talk about research plan implement in a minute, but like the point is you're constantly keeping your context window small. You're building your entire workflow around context management. So comes in three phases: research, plan, implement. And we're going to try to stay in the smart zone the whole time.</p>
</details>

#### 研究阶段：理解系统

研究阶段旨在理解系统如何工作，找到正确的文件，并保持客观。这是一个你可以用来进行研究的提示。这是研究提示的输出。所有这些都是开源的，你可以去获取并自己玩。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the research is all about understanding how the system works, finding the right files, staying objective. Here's a prompt you can use to do research. Here's the output of a research prompt. These are all open source. You can go grab them and play with them yourself.</p>
</details>

#### 计划阶段：精确规划

在计划阶段，你将概述确切的步骤。你将包括文件名和代码片段。你将非常明确地说明每次更改后如何测试。这是一个很好的计划提示。这是我们的一个计划，它包含实际的代码片段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Planning, you're going to outline the exact steps. You're going to include file names and line snippets. You're going to be very explicit about how we're going to test things after every change. Here's a good planning prompt. Here's one of our plans. It's got actual code snippets in it.</p>
</details>

#### 实施阶段：执行计划

然后我们进行实施。如果你阅读了这些计划之一，你很容易就能看出，即使是世界上最“笨”的模型，也可能不会搞砸。所以我们只需执行计划，并保持上下文较低。作为一个计划提示，就像我说的，这是整个过程中最不令人兴奋的部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we're gonna implement. And if you read one of these plans, you can see very easily how the dumbest model in the world is probably not going to screw this up. So we just go through and we run the plan and we keep the context low. As a planning prompt, like I said, it's the least exciting part of the process.</p>
</details>

### 实际案例与AI的局限性

我想把这个付诸实践。所以，对我们来说，我与我的朋友Vibv一起做了一个播客，他是Boundary ML公司的CEO。我说：“嘿，我将尝试一次性修复你的30万行Rust编程语言代码库中的一个问题。”整个节目持续了一个半小时。我现在不会详细讲解，但我们做了很多研究，然后因为它们不好而放弃了。然后我们制定了一个计划，我们分别在有研究和没有研究的情况下制定了计划，并比较了所有结果。那是一段有趣的时光。那是周一晚上。到周二早上，我们上节目时，CTO已经看到了**PR**（Pull Request: 在软件开发中，指开发者请求将自己所做的代码更改合并到主代码库中），他没有意识到我是在为播客做节目，基本上就说：“是的，这看起来不错。我们会在下个版本中发布。”我想他有点困惑。这是计划。但无论如何，是的，它证实了在棕地代码库中有效，而且没有“线团”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I wanted to put this into practice. So, working for us, I do a podcast with my buddy Vibv, who's the CEO of a company called Boundary ML. And I said, "Hey, I'm going to try to oneshot a fix to your 300,000-line Rust codebase for a programming language." Um, and the whole episode goes in, it's like an hour and a half. I'm not going to talk through it right now, but we built a bunch of research and then we threw them out because they were bad. And then we made a plan and we made a plan without research and with research and compared all the results. It's a fun time. By that was Monday night. By Tuesday morning, we were on the show and the CTO had like seen the PR and like didn't realize I was doing it as a bit for a podcast and basically was like, "Yeah, this looks good. We'll get in the next release." He I think he was a little confused. Um, here's the the plan. But anyways, yeah, confirmed works in brownfield code bases and no slop.</p>
</details>

但我想看看我们是否能解决复杂问题。所以Vibv仍然有点怀疑。我们坐下来，在一个周六花了大约7个小时，向BAML提交了35,000行代码。其中一个PR大约一周后被合并了。我得说，其中一些是**代码生成**（Code Generation: 指通过自动化工具或程序生成源代码的过程）。你知道，你更新了行为，所有的黄金文件都会更新等等，但那天我们确实提交了大量的代码。他估计这大概需要1到2周的工作量，而我们只花了7个小时。所以，很棒。我们可以解决复杂问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I wanted to see if we could solve complex problems. So, Vib was still a little skeptical. I sat down, we sat down for like 7 hours on a Saturday and we shipped 35,000 lines of code to BAML. One of the PRs got merged like a week later. I will say some of this is codegen. You know, you update your behavior. All the golden files update and stuff, but we shipped a lot of code that day. He estimates it was about 1 to 2 weeks and 7 hours. And so cool. We can solve complex problems.</p>
</details>

但这也有局限性。我与我的朋友Blake坐下来。我们试图从Parket Java中移除Hadoop依赖项。如果你知道Parket Java是什么，我很抱歉你职业生涯中发生了什么让你走到这一步。结果并不顺利。这是计划，这是研究。在某个时候，我们把所有东西都扔掉了，我们实际上回到了白板。一旦我们知道了所有的“雷区”在哪里，我们就回到了“这实际上将如何组合在一起？”这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are limits to this. I sat down with my buddy Blake. We tried to remove Hadoop dependencies from Parket Java. If you know what Paret Java is, I'm sorry for whatever happened to you to get you to this point in your career. It did not go well. Here's the plans, here's the research. At a certain point, we threw everything out and we actually went back to the whiteboard. We had to actually once we had learned where were the where all the foot guns were, we we went back to okay, how is this actually going to fit together?</p>
</details>

这让我想到一个非常有趣的观点，Jake稍后会谈到：不要外包思考。AI无法取代思考。它只能放大你已经完成的思考，或者你缺乏的思考。所以人们会问：“Dex，这是**规范驱动开发**（Spec-Driven Development: 一种软件开发方法，强调通过详细的规范或需求文档来指导开发过程，确保产品符合预期），对吗？”不，规范驱动开发是行不通的。不是这个想法，而是这个短语。它没有明确的定义。这是Thought Works的Brietta说的。很多人只是说“规范”，他们的意思是更详细的提示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this brings me to a really interesting point that Jake's going to talk about later. Do not outsource the thinking. AI cannot replace thinking. It can only amplify the thinking you have done or the lack of thinking you have done. So people ask, so Dex, this is specri development, right? No, specri development is broken. Not the idea, but the phrase. Um, it's not well defined. This is Brietta from Thought Works. And a lot of people just say spec and they mean a more detailed prompt.</p>
</details>

### 语义扩散与今日可行的策略

有人还记得这张照片吗？有人知道这是来自哪里吗？好吧，那是个很老的梗了。永远不会有“代理之年”，因为**语义扩散**（Semantic Diffusion: 指一个术语或概念随着时间的推移和广泛使用，其原始的、清晰的定义变得模糊不清，被赋予了多种含义）。Martin Fowler在2006年说过，我们提出了一个定义清晰的好术语，然后每个人都兴奋起来，每个人都开始让它对一百个人意味着一百件事，然后它就变得毫无用处了。我们曾经有“代理是一个人”、“代理是一个微服务”、“代理是一个聊天机器人”、“代理是一个工作流”。谢谢你，Simon。我们又回到了起点：代理只是**工具循环**（Tools in a loop: 指AI代理通过不断调用外部工具、接收反馈并调整行动来完成任务的迭代过程）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Does anyone remember this picture? Does anyone know what this is from? All right, that's a deep cut. There will never be a year of agents because of semantic diffusion. Martin Fowler said this in 2006. We come up with a good term with a good definition and then everybody gets excited and everybody starts meaning it to mean a hundred things to a 100 different people and it becomes useless. We had an agent is a person, an agent is a micros service. An agent is a chatbot. An agent is a workflow. And thank you, Simon. We're back to the beginning. An agent is just tools in a loop.</p>
</details>

这正在发生在规范驱动开发上。我曾经在演讲开头放了Sean的幻灯片，但这导致很多人关注了错误的事情。他的观点是“忘记代码，它现在就像汇编语言一样，你只需关注Markdown”。这是一个非常酷的想法，但人们说“规范驱动开发”是编写更好的提示，一个产品需求文档。有时它使用可验证的反馈循环和反压。也许它确实像Sean教我们的那样，将代码视为汇编语言。但很多人只是在编码时使用一堆Markdown文件。或者我最喜欢的，我上周偶然发现的：规范是开源库的文档。所以它已经消失了。规范驱动开发被过度炒作了。它现在毫无用处，它已经语义扩散了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is happening to spec driven dev. I used to have Sean's slide in the beginning of this talk, but it caused a bunch of people to focus on the wrong things. His thing of like, forget the code. It's like assembly now and you just focus on the markdown. Very cool idea, but people say Spectrum Dev is writing a better prompt, a product requirements document. Sometimes it's using like verifiable feedback loops and back pressure. Maybe it is treating the code like assembly like Sean taught us. Um, but a lot of people is just using a bunch of markdown files while you're coding. Or my favorite, I just stumbled upon this last week. A spec is documentation for an open source library. So it's gone. It's as specri dev is overhyped. It's useless now. It's semantically diffused.</p>
</details>

所以我想谈谈今天真正有效的四件事。我们内部以及与许多用户一起发现的战术和实践步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I want to talk about like four things that actually work today. The tactical and practical steps that we found working internally and with a bunch of users.</p>
</details>

#### 1. 研究：系统理解与代理入职

我们进行研究，弄清楚系统如何工作。还记得《记忆碎片》（Momento: 一部关于失忆症患者通过纹身和笔记来追溯记忆的电影）吗？Peter说，这是关于上下文工程的最佳电影。主人公醒来时没有记忆，他必须阅读自己的纹身才能弄清楚自己是谁以及在做什么。如果你不“入职”你的代理，它们就会编造东西。所以，如果这是你的团队，这对你们大多数人来说是非常简化的。你们大多数人的组织比这大得多。但假设你想在这里做一些工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We do the research, we figure out how the system works. Remember Momento? This is the best the best movie on context engineering, as Peter says it. Guy wakes up, he has no memory. He has to like read his own tattoos to figure out who he is and what he's up to. If you don't onboard your agents, they will make stuff up. And so, if this is your team, this is very simplified for most of you. Most of you have much bigger orgs than this. But let's say you want to do some work over here.</p>
</details>

你可以做的一件事是，你可以将入职信息放入每个代码库中。你放入大量的上下文：“这是代码库。它是这样工作的。”这是代码库中所有上下文的压缩，代理可以在实际开始工作之前提前看到。这很有挑战性，因为有时它会变得太长。随着你的代码库变得非常大，你必须让它更长，或者你必须遗漏信息。所以当你阅读这些时，你将阅读这个庞大的500万行单体代码库的上下文，你将用掉所有的“智能区”来学习它是如何工作的。你将无法在“笨拙区”进行任何好的工具调用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing you could do is you could put onboarding into every repo. You put a bunch of context. Here's the repo. Here's how it works. This is a compression of all the context in the codebase that the agent can see ahead of time before actually getting to work. This is challenging because sometimes it gets too long. As your codebase gets really big, you either have to make this longer or you have to leave information out. And so as you are reading through this, you're going to read the context of this big 5 million line monor repo and you're going to use all the smart zone just to learn how it works. And you're not going to be able to do any good tool calling in the dumb zone.</p>
</details>

所以你可以将它分层。他们刚刚谈到了**渐进式披露**（Progressive Disclosure: 一种用户界面设计原则，即只在用户需要时才显示相关信息，避免一次性呈现过多信息造成认知负担）。你可以将它拆分，对吧？你可以在每个代码库的根目录中放置一个文件，然后在每个级别，你都有额外的上下文，根据你正在工作的位置，这是你需要知道的。我们不记录文件本身，因为它们是**源代码**（Source of Truth: 指在软件系统中，某个数据或信息是唯一、权威且最准确的来源）。但当你的代理工作时，你知道，你拉取根上下文，然后拉取子上下文。我们不会谈论任何具体的，比如你可以用Claude来做这个，你可以用钩子来做这个，随便是什么。但这样你仍然在“智能区”有足够的空间，因为你只拉取你需要知道的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's you can you can shard this down the stack. You can do they're just talking about progressive disclosure. You could split this up, right? You could just put a file in the root of every repo and then like at every level you have like additional context based on if you're working here, this is what you need to know. Uh we don't document the files themselves cuz they're the source of truth. But then as your agent is working, you know, you pull in the root context and then you pull in the subcontext. We won't talk about any specific like you could use cloudd for this, you can use hooks for this, whatever it is. But then you still have plenty of room in the smart zone because you're only pulling in what you need to know.</p>
</details>

这个问题是它会过时。所以每次你发布一个新功能时，你需要缓存、验证并重建这部分内部文档的大部分。你可以使用大量的AI，并将其作为更新过程的一部分。但我想问一个问题：在实际代码、函数名、注释和文档之间，有人想猜猜这张图的Y轴是什么吗？是“线团”吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The problem with this is that it gets out of date. And so every time you ship a new feature, you need to kind of like cache and validate and rebuild large parts of this internal documentation. And you could use a lot of AI and make it part of your process to update this. But I want to ask a question between the actual code, the function names, the comments, and the documentation. Does anyone want to guess what is on the y-axis of this chart? Slop?</p>
</details>

实际上，它是你在代码库任何一个部分中能找到的谎言数量。所以你可以将其作为更新过程的一部分，但你可能不应该这样做，因为你可能不会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's actually the amount of lies you can find in any one part of your codebase. Um, so you could make a part of your process to update this, but you probably shouldn't cuz you probably won't.</p>
</details>

#### 2. 按需压缩上下文

我们更喜欢按需压缩上下文。所以如果我正在构建一个与SCM提供商、Jira和Linear相关的功能，我只会给它一点引导。我会说：“嘿，我们正在代码库的这个部分工作。”一个好的研究提示或斜杠命令，甚至是一个技能，可能会启动一堆子代理，对代码库进行这些垂直切片，然后构建一个研究文档，它只是一个基于代码本身的代码库中重要部分的真实快照。我们正在压缩真相。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What we prefer is on demand compressed context. So if I'm building a feature that relates to SCM providers and Jira and Linear, I would just give it a little bit of steering. I would say, hey, we're going over in like this like part of the codebase over here. And a good research prompt or or slash command might take you or skill even launch a bunch of sub agents to take these vertical slices through the codebase and then build up a research document that is just a snapshot of the actually true based on the code itself parts of the codebase that matter. We are compressing truth.</p>
</details>

#### 3. 计划：意图压缩与心智对齐

计划是杠杆。计划是关于意图的压缩。在计划中，我们将概述确切的步骤。我们获取我们的研究和产品需求文档（PRD）或我们的bug工单，或者其他任何东西，然后我们创建一个计划，并创建一个计划文件。所以我们再次进行压缩。我想暂停一下，谈谈**心智对齐**。有人知道代码审查是用来做什么的吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Planning is leverage. Planning is about compression of intent. And in plan we're going to outline the exact steps. We take our research and our PRD or our bug ticket or our whatever it is and we create a plan and we create a plan file. So we're compacting again. And I want to pause to talk about mental alignment. Um does anyone know what code review is for?</p>
</details>

心智对齐。心智对齐是关于确保事情的正确性等等，但最重要的是我们如何让团队中的每个人都对代码库如何变化以及为什么变化保持一致。我每周可以阅读一千行Golang代码。抱歉，我不能阅读一千行。这很难。我能做到，但我不想。随着我们团队的壮大，所有的代码都会被审查。我们不会不阅读代码，但我作为团队中的技术负责人，我可以阅读计划并保持更新，这就足够了。我可以及早发现一些问题，并保持对系统如何演进的理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mental alignment. Mental alignment is it is about finding making sure things are correct and stuff but the most important thing is how do we keep everybody on the team on the same page about how the codebase is changing and why. And I can read a thousand lines of Golang every week. Uh sorry I can't read a thousand. It's hard. I can do it. I don't want to. Um, and as our team grows, I all the code gets reviewed. We don't not read the code, but I, as you know, a technical leader in the in on the team, I can read the plans and I can keep up to date and I can that's enough. I can catch some problems early and I maintain understanding of how the system is evolving.</p>
</details>

Mitchell写了一篇非常好的文章，关于他如何将他的AMP线程放在他的拉取请求上，这样你不仅可以看到GitHub中一堆绿色的文本，还可以看到确切的步骤、提示，以及“嘿，我最后运行了构建，它通过了”。这以GitHub PR无法做到的方式，带领审查者经历了一段旅程。当你交付的代码量越来越多，是两到三倍时，你真的有责任找到方法让你的团队保持一致，并向他们展示你所做的步骤以及我们如何手动测试它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mitchell had this really good post about how he's been putting his AMP threads on his pull requests so that you can see not just, hey, here's a wall of green text in GitHub, but here's the exact steps, here's the prompts, and hey, I ran the build at the end and it passed. This takes the reviewer on a journey in a way that a GitHub PR just can't. And as you're shipping more and more in two to three times as much code, it's really on you to find ways to keep your team on the same page and show them here's the steps I did and here's how we tested it manually.</p>
</details>

你的目标是杠杆。所以你希望对模型会做正确的事情有高度的信心。我无法阅读这个计划，然后知道实际会发生什么以及会发生什么代码更改。所以随着时间的推移，我们迭代了我们的计划，使其包含实际要更改的代码片段。所以你的目标是杠杆。你想要意图的压缩和可靠的执行。我有一个物理学背景。我们喜欢在峰值和曲线的中心画线。随着你的计划变长，可靠性会提高，可读性会下降。你和你的团队以及你的代码库有一个最佳点。你应该尝试找到它，因为当我们审查研究和计划时，如果它们是好的，那么我们就可以实现心智对齐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Your goal is leverage. So you want high confidence that the model will actually do the right thing. I can't read this plan and know what actually is going to happen and what code changes are going to happen. So we've over time iterated towards our plans include actual code snippets of what's going to change. So your goal is leverage. You want compression of intent and you want reliable execution. Um and so I don't know I have a physics background. We like to draw lines through the center of peaks and curves. Uh as your plans get longer, reliability goes up, readability goes down. There's a sweet spot for you and your team and your codebase. you should try to find it because when we review the research and the plans, if they're good, then we can get mental alignment.</p>
</details>

#### 4. 不要外包思考

不要外包思考。我之前说过，这不是魔法。没有完美的提示。如果你不阅读计划，它仍然不会奏效。所以我们围绕你，即构建者，与代理来回协作，在计划创建时阅读它们，构建了我们整个流程。然后如果你需要同行评审，你可以把它发送给某人，并说：“嘿，这个计划看起来对吗？这是正确的方法吗？这是查看这些事情的正确顺序吗？”Jake再次写了一篇非常好的博客文章，关于让研究、计划、实施有价值的关键是你，即循环中的人类，确保它是正确的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Don't outsource the thinking. I've said this before, this is not magic. There is no perfect prompt. You still will not work if you do not read the plan. So, we built our entire process around you, the builder, are in back and forth with the agent reading the plans as they're created. And then if you need peer review, you can send it to someone and say, "Hey, does this plan look right? Is this the right approach? Is this the right order to look at these things?" Jake again wrote a really good blog post about like the thing that makes research plan implementing valuable is you the human in the loop making sure it's correct.</p>
</details>

所以如果你从这次演讲中只带走一件事，那应该是：一行糟糕的代码就是一行糟糕的代码，而计划中糟糕的部分可能导致一百行糟糕的代码，而研究中糟糕的部分，比如对系统如何工作和事物位置的误解，你的整个事情都会被搞砸。你将把模型引向错误的方向。所以当我们在内部和与用户合作时，我们不断尝试将人类的努力和注意力转移到这个管道中杠杆率最高的部分。不要外包思考。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you take one thing away from this talk it should be that a bad line of code is a bad line of code and a bad part of a plan is could be a hundred bad lines of code and a bad line of research like a misunderstanding of how the system works and where things are your whole thing is going to be hosed. You're going to be telling sending the model off in the wrong direction. And so when we're working internally and with users, we're constantly trying to move human effort and focus to the highest leverage parts of this pipeline. Don't outsource the thinking.</p>
</details>

小心那些只是为了让你感觉良好而吐出一堆Markdown文件的工具。我在这里不点名。有时这会过度。我喜欢这样想：是的，你并不总是需要一个完整的研究、计划、实施。有时你需要更多，有时你需要更少。如果你只是更改按钮的颜色，只需与代理交谈并告诉它怎么做。如果你正在做一个简单的计划，作为一个小功能，如果你正在做跨多个代码库的中等功能，那么先做一次研究，然后制定一个计划。基本上，你能解决的最困难的问题，其上限会随着你愿意进行的上下文工程压缩越多而提高。所以如果你在右上角，你可能需要做更多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Watch out for tools that just spew out a bunch of markdown files just to make you feel good. I'm not going to name names here. Uh, sometimes this is overkill. And the way I like to think about this is like, yeah, you don't always need a full research plan implement. Sometimes you need more, sometimes you need less. If you're changing the color of a button, just talk to the agent and tell it what to do. Um, if you're doing like a simple plan and as a small feature, if you're doing medium features across multiple repos, then do one research, then build a plan. Basically, the hardest problem you can solve, the ceiling goes up the more of this context engineering compaction you're willing to do. And so if you're in the top right corner, you're probably going to have to do more.</p>
</details>

很多人问我：“我怎么知道要使用多少上下文工程？”这需要练习。你会犯错。你必须一遍又一遍地犯错。有时你会做得太大。有时你会做得太小。选择一个工具并多加练习。我不建议在Claude、Codeex和所有这些不同工具之间进行最小化-最大化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A lot of people ask me, "How do I know how much context engineering to use?" It takes reps. You will get it wrong. You have to get it wrong over and over and over again. Sometimes you'll go too big. Sometimes you go too small. Pick one tool and get some reps. I recommend against minmaxing across cloud and codeex and all these different tools.</p>
</details>

### 未来展望：AI驱动的软件开发生命周期

我不是一个喜欢缩写的人。我们说过规范驱动开发已经“坏掉”了。研究、计划和实施，我不认为它们会是固定的步骤。重要的是压缩和上下文工程，并保持在“智能区”。但人们正在称之为RPI，我对此无能为力。所以，请注意。没有完美的提示。没有银弹。如果你真的想要一个时髦的词，你可以称之为**线束工程**（Harness Engineering: 指如何将AI代理集成到现有的开发工具、平台和工作流程中，进行定制和优化），它是上下文工程的一部分，它关乎你如何与Codeex、Claude、Cursor等工具的集成点进行集成。你如何定制你的代码库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm not a big acronym guy. We said specri dev was broken. Research plan and implement I don't think will be the steps. The important part is compaction and context engineering and staying in the smart zone. But people are calling this RPI and there's nothing I can do about it. So, just be wary. There is no perfect prompt. There is no silver bullet. Um, if you really want a hypy word, you can call this harness harness engineering, which is part of context engineering, and it's how you integrate with the integration points on codeex, claude, cursor, whatever. How you customize your codebase.</p>
</details>

那么接下来是什么？我认为编码代理的东西实际上将会商品化。人们将学会如何做这件事并做得更好。而困难的部分将是如何调整你的团队、你的工作流和**软件开发生命周期**（Software Development Life Cycle, SDLC: 指软件从构思到退役的整个过程，包括需求分析、设计、开发、测试、部署和维护等阶段），以适应一个99%的代码由AI交付的世界。如果你无法解决这个问题，你就会陷入困境，因为现在正在出现一种裂痕：高级工程师不采用AI，因为它并不能让他们快很多。而初级和中级工程师大量使用AI，因为它填补了技能空白，但也产生了一些“线团”。然后高级工程师每周都越来越讨厌它，因为他们正在清理Cursor前一周交付的“线团”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what's next? I think the coding agent stuff is actually going to be commoditized. People are going to learn how to do this and get better at it. And the hard part is going to be how do you adapt your team and your workflow and the SDLC to work in a world where 99% of your code is shipped by AI. Uh, and if you can't figure this out, you're hosed because there's kind of a rift growing where like staff engineers don't adopt AI because it doesn't make them that much faster. And then junior mid-levels engineers use a lot because it fills in skill gaps and then it also produces some slop. And then the senior engineers hate it more and more every week because they're cleaning up slop that was shipped by cursor the week before.</p>
</details>

这不是AI的错。这不是中级工程师的错。文化变革真的很难，如果它要奏效，就必须来自高层。所以如果你是公司的技术负责人，选择一个工具并多加练习。如果你想提供帮助，我们正在招聘。我们正在构建一个Aentic IDE，以帮助各种规模的团队加速实现99%由AI生成的代码。如果你想与我们合作，我们很乐意与你交谈。请访问我们的网站，给我们发送电子邮件，或者在大厅里找到我。非常感谢大家的投入！

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is not AI's fault. This is not the mid-level engineers fault. Like if cultural change is really hard and it needs to come from the top if it's going to work. So if you're a technical leader at your company, pick one tool and get some reps. If you want to help, we are hiring. We're building an Aentic IDE to help teams of all sizes speedrun the journey to 99% AI generated code. Uh if we'd love to we'd love to talk if you want to work with us. Uh go go hit our website, send us an email, come find me in the hallway. Uh thank you all so much for your energy. Heat.</p>
</details>