---
area: tech-engineering
category: ai-ml
companies_orgs:
- GitHub
date: 2025-10-31
draft: true
guest: ''
insight: ''
layout: post.njk
media_books: '[]'
people: '[]'
products_models:
- Claude Code
- Claude Sonnet 4.5
- Claude Sonnet 4
project: []
series: ''
source: https://www.youtube.com/watch?v=CBneTpXF1CQ
speaker: Anthropic
status: evergreen
summary: 本文详细介绍了Anthropic公司“Claude Code”的最新功能，包括其网页版和移动应用，支持GitHub集成与并行任务处理。重点阐述了新发布的“Claude
  Haiku 4.5”模型，其在编码性能上超越了Sonnet 4，并以更低的成本和更快的速度提供服务。文章还探讨了Haiku 4.5与Sonnet 4.5在多智能体开发中的协作模式，以及智能本地工作流的增强功能。
tags:
- code-generation
- developer-tool
- large-language-model
- software-development
title: Claude Code 和 Claude Haiku 4.5 的最新进展：网页版开发、Haiku 4.5 模型应用及智能工作流
---
### 网页版 Claude Code：赋能并行云开发

**Claude Code**（基于Anthropic大型语言模型的代码助手）现已在网页端上线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude Code is now available on the web.</p>
</details>

因此，您无需再启动终端或打开**IDE**（Integrated Development Environment: 集成开发环境）来修改代码，现在可以直接通过浏览器或Claude移动应用程序委派编码任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So instead of loading up your terminal or having to open up your IDE anytime you want to make a change, you can now delegate coding tasks directly from your browser or the Claude mobile app.</p>
</details>

您只需连接您的**GitHub**（全球最大的代码托管平台）账户，选择您的代码库（repo），描述您需要完成的工作，Claude便会在我们的云基础设施上处理其余一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You simply connect your GitHub account, you select your repo, describe what you need done, and Claude handles the rest, all running on our cloud infrastructure.</p>
</details>

最棒的是，您现在可以在不同的代码库中并行运行多个任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the best part is you can now run multiple tasks in parallel across different repositories.</p>
</details>

因此，无论您有待处理的错误、常规修复，还是想要添加一个绝妙的新想法或功能，您都可以启动一个或多个会话，让Claude同时处理它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So whether you have a bug backlog, routine fixes, or a brilliant new idea or feature you want to add, you can just spin up a session or multiple sessions and let Claude handle them simultaneously.</p>
</details>

让我来演示一下它是如何工作的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let me show you how this works.</p>
</details>

我将打开网页版**Claude Code**，网址是claude.ai/code。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'll open up Claude Code on the web at claude.ai/code.</p>
</details>

我会选择一个代码库；这里我已经预先选择了一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'll select a repo. I have a repo already selected here.</p>
</details>

然后我将给它一个提示，例如“为用户注册端点添加输入验证”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I'll give it a prompt. Let's say add input validation to the user registration endpoint.</p>
</details>

此外，请确保我们在前端和后端**API**（Application Programming Interface: 应用程序编程接口）都使用了强密码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Also make sure we're using a strong password on both the front end and backend API.</p>
</details>

我们按下回车键，任务就开始执行了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'll hit enter and we are off to the races.</p>
</details>

Claude正在其独立的沙盒环境中工作，拥有完整的**Git**（分布式版本控制系统）访问权限，我们可以实时查看进度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude is working in its own isolated sandbox with full git access and we can watch the progress in real time.</p>
</details>

但它运行的同时，让我向您介绍我们最近推出的其他一些功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But while this runs, let me tell you about some of the other stuff that we've recently launched.</p>
</details>

### 隆重推出 Claude Haiku 4.5：高速高效的编码模型

其中一个重要更新是**Claude Haiku 4.5**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The big one is Claude Haiku 4.5.</p>
</details>

几周前，我们发布了**Claude Sonnet 4.5**，它成为了全球最佳的编码模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And a few weeks ago, we launched Claude Sonnet 4.5, which became the world's best coding model.</p>
</details>

而就在上周，我们又推出了**Claude Haiku 4.5**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And just last week, we followed it up with Claude Haiku 4.5.</p>
</details>

真正引人注目的是：

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And here's the really remarkable thing.</p>
</details>

五个月前，**Sonnet 4**还是最先进的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">5 months ago, Sonnet 4 was state-of-the-art.</p>
</details>

而现在，Haiku 4.5以三分之一的成本和两倍多的速度，提供了相似的编码性能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now Haiku 4.5 gives you a similar coding performance at one-third the cost and more than twice the speed.</p>
</details>

在某些任务，例如计算机使用方面，它甚至超越了Sonnet 4。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It even surpasses Sonnet 4 at certain tasks like computer use.</p>
</details>

它的基准测试结果令人印象深刻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the benchmarks are impressive.</p>
</details>

在**Sweetbench**（代码基准测试平台）验证中达到73.3%，在**TerminalBench**（终端基准测试平台）中达到41%，并在**Agentic coding evaluations**（智能体编码评估）中实现了Sonnet 4.5 90%的性能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">73.3% on Sweetbench verified, 41% on Terminal Bench, and it achieves 90% of Sonnet 4.5's performance in Agentic coding evaluations.</p>
</details>

但您可能想问的关键问题是：开发者何时应该使用Haiku 4.5？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the big question you're probably having is when should developers use Haiku 4.5?</p>
</details>

我们从社区观察到的主要模式是，Sonnet 4.5负责进行高层次的问题分解和规划，然后由Haiku 4.5实际执行和编写代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the big pattern that we're seeing from our community is that Sonnet 4.5 does the high-level problem decomposition and planning, and then Haiku 4.5 is used to actually implement and write the code.</p>
</details>

这种**multi-agent approach**（多智能体方法）在处理大规模**refactors**（代码重构）或解决**technical debt**（技术债务）等任务时变得非常流行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now this multi-agent approach is becoming really popular for things like large-scale refactors or tackling technical debt.</p>
</details>

Haiku 4.5现已全面上线，每百万输入令牌仅需1美元，每百万输出令牌仅需5美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Haiku 4.5 is available wherever you get your Claude and it's available at just $1 per million input tokens and $5 per million output tokens.</p>
</details>

### 智能本地工作流与多问题支持

好的，让我们回到刚才的任务，看看它的进展如何。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, let's check back on our task and see how it's doing.</p>
</details>

如果我们在这里打开它，可以看到Claude清晰地总结了它在前端TypeScript的service.go文件中所做的所有更改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if we open it up here, we can see that Claude gave us a good summary of all of the changes that it made in the service.go go file in the TypeScript on the front end.</p>
</details>

我个人最喜欢网页版**Claude Code**的功能是这个“在**CLI**（Command Line Interface: 命令行界面）中打开”按钮。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And my absolute favorite feature of Claude Code on the web is this open in CLI button.</p>
</details>

我喜欢它的原因是，您只需点击它，打开终端，粘贴它提供的命令，然后就可以在本地开发环境中继续工作，所有来自网页端的上下文和进度都得到了保留。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the reason that I really like it is you simply click it, you open up your terminal, paste in the command that it gave you, and now I am working in my local development environment with all of the context and all of my progress from the web preserved.</p>
</details>

因此，我可以看到消息，也可以看到所有已更改的文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I can see the messages. I can see all of the files that have been changed.</p>
</details>

我可以进入**VS Code**（Visual Studio Code: 微软开发的免费开源代码编辑器），查看对service signup、signup.typescript文件以及其他更多内容所做的所有更改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can go into VS Code and see all of the changes that were made to the service signup, the signup.typescript file, and much more.</p>
</details>

而且，我可以在手机或浏览器上从上次中断的地方继续工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I can continue right from where I left off on my mobile phone or the browser.</p>
</details>

现在，我想向您展示我们最近添加到**Claude Code**的最后一个功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, I want to show you one final feature that we recently added to Claude Code.</p>
</details>

我之前给它一个提示，内容是关于为我的应用程序添加缓存，但我给了一个非常宽泛的提示，只是说：“嘿，我想为我的应用程序添加缓存。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I gave it this prompt earlier talking about adding caching to my application, but I gave it a very broad prompt saying, "Hey, I would like to add caching to my application."</p>
</details>

**Claude Code**的做法是，它会向我提出一系列后续问题，以确保正确实施缓存功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what Claude Code did is it's going to ask me a number of follow-up questions to make sure that it implements it correctly.</p>
</details>

因此，它会询问缓存级别，例如应该是数据库查询缓存还是**API**响应缓存？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it's going to ask the caching level here. Uh, should it be database query caching, API response caching?</p>
</details>

我可以选择其中任何一个，然后进入下一部分，明确我的目标是什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I can choose any of these, go to the next section and figure out what my goals are.</p>
</details>

目标是提高性能、减少数据库负载吗？目标区域是锻炼数据、用户数据还是分析数据？选择技术是**Redis**（开源的内存数据结构存储系统）、内存缓存还是**PostgreSQL**（开源关系型数据库管理系统）？然后我就可以点击提交，让它根据我提供的后续信息进行实施。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is it to improve performance, reduce database load, the target area, is it for the workout data, for the user data, analytics, choose the technology, Redis, in-memory, PostgreSQL, and then I can hit submit and have it go and implement based on the follow-up information that I gave it.</p>
</details>

这就是**Claude Code**网页版，它支持在家中和移动中进行并行云开发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there you have it. Claude Code on the web for parallel cloud-based development at home and on the go.</p>
</details>

**Haiku 4.5**以极低的成本提供闪电般的编码速度，并通过多问题支持实现更智能的本地工作流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Haiku 4.5 for lightning fast coding at a fraction of the cost and smarter local workflows with multi-question support.</p>
</details>

**Claude Code**网页版现已向专业版和Max版用户开放，网址是claude.ai/code。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude Code on the web is available now for pro and max users at claude.ai/code.</p>
</details>

欢迎试用并告诉我们您的想法。祝您构建愉快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Give it a try and let us know what you think. Happy building.</p>
</details>