---
author: Unknown
date: '2025-10-31'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=CBneTpXF1CQ
speaker: Unknown
tags:
  - ai-coding
  - code-generation
  - developer-tools
  - llm-performance
  - parallel-development
title: Claude Code 功能更新：网页版、Haiku 4.5 模型及智能本地工作流
summary: Anthropic 近期推出了 Claude Code 的多项重要更新，包括其网页版，允许开发者直接在浏览器中管理代码任务，并支持并行处理。文章详细介绍了全新的 Claude Haiku 4.5 模型，它以更低的成本和更快的速度提供接近 Sonnet 4.5 的编码性能，并探讨了 Haiku 4.5 与 Sonnet 4.5 在多智能体开发流程中的协同作用。此外，还展示了 Claude Code 如何通过多问题支持优化本地开发工作流，提升开发效率。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
people: []
companies_orgs:
  - GitHub
  - Anthropic
products_models:
  - Claude Code
  - Claude Haiku 4.5
  - Claude Sonnet 4.5
  - Claude Sonnet 4
  - Reddis
  - Postgress
  - VS Code
media_books: []
status: evergreen
---
### Claude Code 网页版：浏览器中的高效开发

**Claude Code**（Anthropic 推出的一款 AI 编码工具）现已推出网页版。这意味着，您无需再启动终端或打开**集成开发环境**（IDE: Integrated Development Environment）来修改代码，现在可以直接通过浏览器或 Claude 移动应用委派编码任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clot code is now available on the web. So instead of loading up your terminal or having to open up your IDE anytime you want to make a change, you can now delegate coding tasks directly from your browser or the cloud mobile app.</p>
</details>

您只需连接您的 GitHub 账户，选择您的**代码仓库**（repo: repository），描述您需要完成的任务，Claude 就会在我们的云基础设施上处理其余的一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You simply connect your GitHub account, you select your repo, describe what you need done, and Claude handles the rest, all running on our cloud infrastructure.</p>
</details>

最棒的是，您现在可以在不同的代码仓库中并行运行多个任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the best part is you can now run multiple tasks in parallel across different repositories.</p>
</details>

因此，无论您是有一堆待修复的 bug、常规的修补任务，还是想添加一个绝妙的新功能，您都可以启动一个或多个会话，让 Claude 同时处理它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So whether you have a bug backlog, routine fixes, or a brilliant new idea or feature you want to add, you can just spin up a session or multiple sessions and let Claude handle them simultaneously.</p>
</details>

让我来演示一下它是如何工作的。我将打开网页版 Claude Code，网址是 cloud.ai/code。我将选择一个代码仓库，这里我已经选好了一个。然后我会给它一个提示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let me show you how this works. So I'll open up Cloud Code on the web at cloud.ai/code. I'll select a repo. I have a repo already selected here. And then I'll give it a prompt.</p>
</details>

比如，我提示它“为用户注册端点添加输入验证。同时确保前端和后端 API 都使用强密码。”我们点击回车，任务就开始了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's say add input validation to the user registration endpoint. Also make sure we're using a strong password on both the front end and backend API. We'll hit enter and we are off to the races.</p>
</details>

Claude 会在它自己独立的**沙盒环境**（sandbox: 隔离的运行环境）中工作，拥有完整的 **Git**（一个分布式版本控制系统）访问权限，我们可以实时查看进度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude is working in its own isolated sandbox with full git access and we can watch the progress in real time.</p>
</details>

但在此任务运行的同时，让我来告诉您一些我们最近推出的其他功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But while this runs, let me tell you about some of the other stuff that we've recently launched.</p>
</details>

### Claude Haiku 4.5：成本效益与速度的飞跃

其中一个重大更新是 **Claude Haiku 4.5**。几周前，我们发布了 **Claude Sonnet 4.5**，它成为了全球最佳的编码模型。而就在上周，我们紧接着推出了 Claude Haiku 4.5。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The big one is Claude Haiku 4.5. And a few weeks ago, we launched Claude Sonnet 4.5, which became the world's best coding model. And just last week, we followed it up with Claude Haiku 4.5.</p>
</details>

真正值得注意的是：五个月前，**Sonnet 4** 还是最先进的模型。而现在，Haiku 4.5 能以三分之一的成本和两倍多的速度，提供类似的编码性能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And here's the really remarkable thing. 5 months ago, Sonnet 4 was state-of-the-art. And now Haiku 4.5 gives you a similar coding performance at one/ird the cost and more than twice the speed.</p>
</details>

它甚至在某些任务（如计算机使用）上超越了 Sonnet 4。其**基准测试**（benchmarks: 性能指标）数据令人印象深刻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It even surpasses Sonnet 4 at certain tasks like computer use. Now the benchmarks are impressive.</p>
</details>

在 Sweetbench 验证测试中达到 73.3%，在 Terminal Bench 中达到 41%，并且在**智能体编码评估**（Agentic coding evaluations: 基于 AI 智能体的编码能力评估）中达到了 Sonnet 4.5 性能的 90%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">73.3% on Sweetbench verified, 41% on Terminal Bench, and it achieves 90% of Sonnet 4.5's performance in Agentic coding evaluations.</p>
</details>

但您可能想知道的关键问题是，开发者何时应该使用 Haiku 4.5？我们从社区观察到的主要模式是，Sonnet 4.5 负责进行高层级的**问题分解**（problem decomposition）和规划，而 Haiku 4.5 则用于实际的代码实现和编写。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the big question you're probably having is when should developers use haiku 4.5 and the big pattern that we're seeing from our community is that sonnet 4.5 does the highlevel problem decomposition and planning and then haiku 4.5 is used to actually implement and write the code.</p>
</details>

这种**多智能体**（multi-agent）方法在大型**代码重构**（refactors: 对现有代码结构进行优化而不改变其外部行为）或处理**技术债务**（technical debt: 软件开发中因选择短期快速解决方案而累积的长期维护成本）等任务中变得非常流行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now this multi- aent approach is becoming really popular for things like large scale refactors or tackling technical debt.</p>
</details>

Haiku 4.5 现已全面上线，每百万输入 token 仅需 1 美元，每百万输出 token 仅需 5 美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Haiku 4.5 is available wherever you get your Claude and it's available at just $1 per million input tokens and $5 per million output tokens.</p>
</details>

### 智能本地工作流与多问题支持

好的，让我们回到刚才的任务，看看进展如何。如果我们在这里打开它，可以看到 Claude 很好地总结了它在 `service.go` Go 文件和前端 TypeScript 中所做的所有更改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, let's check back on our task and see how it's doing. So, if we open it up here, we can see that Claude gave us a good summary of all of the changes that it made uh in the service.go go file in the TypeScript on the front end.</p>
</details>

我个人最喜欢网页版 Claude Code 的功能是这个“在 **CLI**（Command Line Interface: 命令行界面）中打开”按钮。我喜欢它的原因是，您只需点击它，打开您的终端，粘贴它提供的命令，然后我就可以在我的本地开发环境中工作了，并且所有来自网页端的上下文和进度都得到了保留。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And my absolute favorite feature of Cloud Code on the web is this open in CLI button. And the reason that I really like it is you simply click it, you open up your terminal, paste in the command that it gave you, and now I am working in my local development environment with all of the context and all of my progress from the web preserved.</p>
</details>

因此，我可以看到消息，看到所有已更改的文件。我可以进入 **VS Code**（Visual Studio Code: 一款流行的代码编辑器），查看对 `service signup`、`signup.touchcript` 文件等所做的所有更改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I can see the messages. I can see all of the files that have been changed. I can go into VS Code and see all of the changes that were made to the service signup, the signup.touchcript file, and much more.</p>
</details>

我还可以从我的手机或浏览器上上次离开的地方继续工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I can continue right from where I left off on my mobile phone or the browser.</p>
</details>

现在，我想向您展示我们最近添加到 Claude Code 的最后一个功能。我之前给它一个关于为我的应用程序添加**缓存**（caching: 一种数据存储技术，用于临时存储数据以加快访问速度）的提示，但我给了一个非常宽泛的提示，比如“嘿，我想为我的应用程序添加缓存。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, I want to show you one final feature that we recently added to Clot Code. I gave it this prompt earlier talking about adding caching to my application, but I gave it a very broad prompt saying, "Hey, I would like to add caching to my application."</p>
</details>

Claude Code 的做法是，它会问我一系列后续问题，以确保正确实现该功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what Claude Code did is it's going to ask me a number of follow-up questions to make sure that it implements it correctly.</p>
</details>

例如，它会询问缓存级别：应该是数据库查询缓存还是 API 响应缓存？我可以选择其中任何一个，然后进入下一部分，明确我的目标是什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it's going to ask the caching level here. Uh, should it be database query caching, API response caching? And I can choose any of these, go to the next section and figure out what my goals are.</p>
</details>

目标是提高性能，减少数据库负载吗？目标区域是锻炼数据、用户数据还是分析数据？选择技术是 **Redis**（一个开源的内存数据结构存储系统）、内存缓存还是 **PostgreSQL**（一个开源的关系型数据库管理系统）？然后我就可以点击提交，让它根据我提供的后续信息进行实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is it to improve performance, reduce database load, the target area, is it for the workout data, for the user data, analytics, choose the technology, Reddus, in-memory, Postgress, and then I can hit submit and have it go and implement based on the follow-up information that I gave it.</p>
</details>

### 总结与展望

这就是全部了。网页版 Claude Code 实现了在家和外出时并行、基于云的开发；Haiku 4.5 以极低的成本提供闪电般的编码速度；以及通过多问题支持实现更智能的本地工作流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there you have it. Cloud Code on the web for parallel cloud-based development at home and on the go. Haiku 4.5 for lightning fast coding at a fraction of the cost and smarter local workflows with multi-question support.</p>
</details>

网页版 Claude Code 现已面向专业版和 Max 版用户开放，网址是 cloud.ai/code。快来尝试一下，并告诉我们您的想法。祝您构建愉快！

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cloud Code on the web is available now for pro and max users at cloud.ai/code. Give it a try and let us know what you think. Happy building.</p>
</details>