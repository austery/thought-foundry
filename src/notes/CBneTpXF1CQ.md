---
author: Unknown
date: '2025-10-31'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=CBneTpXF1CQ
speaker: Unknown
tags:
  - ai-coding
  - developer-tools
  - llm-performance
  - workflow-automation
  - multi-agent-systems
title: Claude Code 更新：网页版、Haiku 4.5 及多问题支持
summary: 本文介绍了Anthropic公司Claude Code的最新更新，包括其网页版功能，允许用户直接在浏览器中管理代码任务并支持并行处理。同时，详细阐述了新模型Haiku 4.5的性能优势，它以更低的成本和更快的速度提供与Sonnet 4相似的编码能力。文章还探讨了Haiku 4.5与Sonnet 4.5在开发工作流中的最佳协作模式，以及Claude Code新增的多问题交互功能，旨在提升开发效率。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
people: []
companies_orgs:
  - Anthropic
  - GitHub
products_models:
  - Claude Code
  - Claude Haiku 4.5
  - Claude Sonnet 4.5
  - Claude Sonnet 4
  - Redis
  - PostgreSQL
media_books: []
status: evergreen
---
### 网页版 Claude Code：浏览器中的并行开发

**Claude Code**（Anthropic公司推出的人工智能编程助手）现已在网页端上线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude Code is now available on the web.</p>
</details>

因此，您无需再启动**终端**（Terminal: 基于文本的用户界面）或打开**IDE**（Integrated Development Environment: 集成开发环境）来修改代码，现在可以直接通过浏览器或Claude移动应用来分配编码任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So instead of loading up your terminal or having to open up your IDE anytime you want to make a change, you can now delegate coding tasks directly from your browser or the Claude mobile app.</p>
</details>

您只需连接您的**GitHub**（一个基于Git的代码托管平台）账户，选择您的代码库**（repo）**，描述您需要完成的任务，Claude便会在其云基础设施上运行并处理其余所有工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You simply connect your GitHub account, select your repo, describe what you need done, and Claude handles the rest, all running on our cloud infrastructure.</p>
</details>

最棒的是，您现在可以在不同的代码库中并行运行多个任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the best part is you can now run multiple tasks in parallel across different repositories.</p>
</details>

因此，无论您有待处理的错误、例行修复，还是想要添加一个绝妙的新想法或功能，您都可以启动一个或多个会话，让Claude同时处理它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So whether you have a bug backlog, routine fixes, or a brilliant new idea or feature you want to add, you can just spin up a session or multiple sessions and let Claude handle them simultaneously.</p>
</details>

让我来演示一下它是如何运作的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let me show you how this works.</p>
</details>

我将打开网页版Claude Code，网址是claude.ai/code。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'll open up Claude Code on the web at claude.ai/code.</p>
</details>

我将选择一个代码库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'll select a repo.</p>
</details>

我这里已经选择了一个代码库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have a repo already selected here.</p>
</details>

然后我将给它一个提示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I'll give it a prompt.</p>
</details>

比如说，'为用户注册端点添加输入验证。'

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's say, 'Add input validation to the user registration endpoint.'</p>
</details>

同时确保我们在前端和后端API都使用强密码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Also make sure we're using a strong password on both the front end and backend API.</p>
</details>

我们按下回车键，任务就开始了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'll hit enter, and we are off to the races.</p>
</details>

Claude正在其独立的**沙盒**（Sandbox: 隔离的运行环境）中工作，拥有完整的**Git**（一个分布式版本控制系统）访问权限，我们可以实时查看进度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude is working in its own isolated sandbox with full Git access, and we can watch the progress in real time.</p>
</details>

但在它运行的同时，让我向您介绍我们最近推出的其他一些功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But while this runs, let me tell you about some of the other stuff that we've recently launched.</p>
</details>

### Claude Haiku 4.5：成本效益与性能的飞跃

其中一个重要的更新是**Claude Haiku 4.5**（Anthropic公司推出的最新AI编码模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The big one is Claude Haiku 4.5.</p>
</details>

几周前，我们发布了**Claude Sonnet 4.5**（Anthropic公司推出的另一款AI编码模型），它成为了世界上最好的编码模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A few weeks ago, we launched Claude Sonnet 4.5, which became the world's best coding model.</p>
</details>

就在上周，我们又推出了Claude Haiku 4.5。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And just last week, we followed it up with Claude Haiku 4.5.</p>
</details>

真正引人注目的是这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And here's the really remarkable thing.</p>
</details>

五个月前，**Sonnet 4**（Claude Sonnet系列的一个早期版本）还是最先进的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Five months ago, Sonnet 4 was state-of-the-art.</p>
</details>

而现在，Haiku 4.5以三分之一的成本和两倍多的速度，提供了相似的编码性能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now Haiku 4.5 gives you similar coding performance at one-third the cost and more than twice the speed.</p>
</details>

它甚至在某些任务，例如计算机使用方面，超越了Sonnet 4。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It even surpasses Sonnet 4 at certain tasks like computer use.</p>
</details>

目前的基准测试结果令人印象深刻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the benchmarks are impressive.</p>
</details>

它在**Sweetbench Verified**（一个代码生成和验证的基准测试）上达到了73.3%的成绩，在**Terminal Bench**（一个命令行任务执行的基准测试）上达到了41%，并在**Agentic coding evaluations**（评估AI代理编码能力的测试）中达到了Sonnet 4.5性能的90%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It achieved 73.3% on Sweetbench Verified, 41% on Terminal Bench, and it achieves 90% of Sonnet 4.5's performance in Agentic coding evaluations.</p>
</details>

但您可能最大的疑问是：开发者何时应该使用Haiku 4.5？我们从社区中观察到的主要模式是，Sonnet 4.5负责进行高层次的问题分解和规划，而Haiku 4.5则用于实际的代码实现和编写。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the big question you're probably having is when should developers use Haiku 4.5? And the big pattern that we're seeing from our community is that Sonnet 4.5 does the high-level problem decomposition and planning, and then Haiku 4.5 is used to actually implement and write the code.</p>
</details>

这种**多智能体方法**（Multi-agent approach: 结合多个AI模型以完成复杂任务）在处理大规模**重构**（Refactor: 改进代码结构而不改变其外部行为）或解决**技术债务**（Technical debt: 因短期权宜之计而导致未来需要额外工作）等任务时变得非常流行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now this multi-agent approach is becoming really popular for things like large-scale refactors or tackling technical debt.</p>
</details>

Haiku 4.5在所有提供Claude服务的平台均可使用，其定价为每百万输入**tokens**（大型语言模型处理文本的基本单位）1美元，每百万输出tokens 5美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Haiku 4.5 is available wherever you get your Claude, and it's available at just $1 per million input tokens and $5 per million output tokens.</p>
</details>

### 任务进展与本地工作流集成

好的，让我们回到我们的任务，看看进展如何。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, let's check back on our task and see how it's doing.</p>
</details>

如果我们在这里打开它，可以看到Claude很好地总结了它在`service.go` Go文件和前端TypeScript中进行的所有更改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if we open it up here, we can see that Claude gave us a good summary of all the changes it made in the `service.go` Go file and the TypeScript on the front end.</p>
</details>

而我最喜欢网页版Claude Code的功能是这个'在**CLI**（Command Line Interface: 命令行界面）中打开'按钮。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And my absolute favorite feature of Claude Code on the web is this 'Open in CLI' button.</p>
</details>

我之所以非常喜欢它，是因为您只需点击它，打开您的终端，粘贴它给出的命令，现在我就可以在我的本地开发环境中工作了，所有来自网页端的上下文和进度都得到了保留。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The reason I really like it is you simply click it, open up your terminal, paste in the command that it gave you, and now I am working in my local development environment with all the context and all my progress from the web preserved.</p>
</details>

因此，我可以看到消息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I can see the messages.</p>
</details>

我可以看到所有已更改的文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can see all the files that have been changed.</p>
</details>

我可以进入**VS Code**（Visual Studio Code: 一款流行的代码编辑器）查看对服务注册、`signup.typescript`文件等所做的所有更改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can go into VS Code and see all the changes that were made to the service signup, the `signup.typescript` file, and much more.</p>
</details>

而且，我可以在手机或浏览器上从上次中断的地方继续工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I can continue right from where I left off on my mobile phone or the browser.</p>
</details>

### 智能交互：多问题支持与定制化实现

现在，我想向您展示我们最近添加到Claude Code的最后一个功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, I want to show you one final feature that we recently added to Claude Code.</p>
</details>

我之前给它一个提示，是关于为我的应用程序添加**缓存**（Caching: 存储数据以供快速访问的技术），但我给了一个非常宽泛的提示，说：'嘿，我想为我的应用程序添加缓存。'

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I gave it this prompt earlier talking about adding caching to my application, but I gave it a very broad prompt saying, 'Hey, I would like to add caching to my application.'</p>
</details>

Claude Code所做的是，它会问我一系列后续问题，以确保正确地实现它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what Claude Code did is it's going to ask me a number of follow-up questions to make sure that it implements it correctly.</p>
</details>

所以，它会在这里询问缓存级别。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it's going to ask the caching level here.</p>
</details>

例如，应该是数据库查询缓存，还是API响应缓存？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Should it be database query caching, API response caching?</p>
</details>

我可以选择其中任何一个，然后进入下一部分，明确我的目标是什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I can choose any of these, go to the next section and figure out what my goals are.</p>
</details>

是为了提高性能，减少数据库负载吗？目标区域是什么？是针对锻炼数据、用户数据还是分析数据？选择技术：是**Redis**（一个开源的内存数据结构存储系统）、内存缓存还是**PostgreSQL**（一个开源的关系型数据库管理系统）？然后我就可以点击提交，让它根据我提供的后续信息进行实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is it to improve performance, reduce database load? What is the target area? Is it for workout data, user data, analytics? Choose the technology: Redis, in-memory, PostgreSQL? And then I can hit submit and have it go and implement based on the follow-up information that I gave it.</p>
</details>

### 总结

这就是它的全部功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there you have it.</p>
</details>

网页版Claude Code，让您无论在家还是外出，都能进行并行、基于云的开发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude Code on the web for parallel cloud-based development at home and on the go.</p>
</details>

Haiku 4.5以极低的成本实现闪电般的编码速度，并通过多问题支持实现更智能的本地工作流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Haiku 4.5 for lightning-fast coding at a fraction of the cost, and smarter local workflows with multi-question support.</p>
</details>

网页版Claude Code现已向Pro和Max用户开放，网址是claude.ai/code。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude Code on the web is available now for Pro and Max users at claude.ai/code.</p>
</details>

快来试试吧，并告诉我们您的想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Give it a try and let us know what you think.</p>
</details>

祝您开发愉快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Happy building.</p>
</details>