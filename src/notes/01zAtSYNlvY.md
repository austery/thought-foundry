---
author: How I AI
date: '2026-02-11'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=01zAtSYNlvY
speaker: How I AI
tags:
  - ai-assisted-coding
  - software-engineering-agents
  - model-benchmarking
  - developer-productivity
  - enterprise-software
title: Claude Opus 4.6 vs GPT-5.3 Codex：五天交付九万行代码的 AI 工程实战
summary: 本文深度对比了 OpenAI 的 GPT-5.3 Codex 与 Anthropic 的 Claude Opus 4.6 在真实工程场景中的表现。通过重构营销网站和核心应用组件的实战，揭示了 Opus 在创意构建与自主规划上的优势，以及 Codex 在架构评审与边界情况检测中的“首席工程师”价值，并提出了高效的 AI 协作工作流。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - OpenAI
  - Anthropic
  - Cursor
  - WorkOS
products_models:
  - GPT-5.3 Codex
  - Claude Opus 4.6
  - Claude Opus 4.6 Fast
  - ChatPRD
media_books: []
status: evergreen
---
### AI 编程双雄：Codex 与 Opus 的工程化对决

在 AI 编程领域，OpenAI 与 Anthropic 的竞争已进入白热化阶段。近期，OpenAI 推出了专为 AI 工程设计的桌面应用 **Codeex** 及其配套模型 **GPT-5.3 Codex**；作为回应，Anthropic 发布了 **Claude Opus 4.6** 及其高速版本 **Opus 4.6 Fast**。为了评估这些顶尖模型的实战能力，我将它们置于高强度的真实开发任务中进行横向评测。在过去短短五天内，我利用这些工具合并了 44 个 **拉取请求**（Pull Request: 开发者向代码库提交更改并请求合并的机制），处理了超过 1000 个文件，新增代码量接近 9.3 万行。

这种惊人的生产力并非源于简单的代码生成，而是源于对不同模型特性的深度理解与组合使用。虽然这些模型表现卓越，但它们各具“怪癖”：有的模型在创意构建上独领风骚，有的则在逻辑严密性上近乎教条。在深入探讨具体的代码实战前，我们需要理解这些工具在 **AI 工程栈**（AI Engineering Stack: 开发者用于构建 AI 应用的一系列工具、模型和基础设施）中的定位，以及它们如何改变了传统的开发节奏。

<details>
<summary>Original English Source</summary>
Welcome back to How I AI. I'm Claire Vo, product leader and AI obsessive here on a mission to help you build better with these new tools. Today, we're going to bring you up to date on all the new coding model releases from OpenAI and Anthropic. In case you missed it, OpenAI released last week Codeex, their desktop app for AI engineering, the new model GPT53 Codeex. And Anthropic released their response, Opus 46 and Opus 46 Fast. When these new models come out, I put them through their paces. I test them side by side on the same task and I'm going to give you my opinion about where they do well, where they fall apart, and which one goes where in my AI engineering stack. Spoiler alert, I've shipped more code in the last 5 days than I think I have in the last month. So, I think these are pretty fabulous models, but they do have their quirks. They do have their strengths, and sometimes they go off the rails.
</details>

### 极致教条：GPT-5.3 Codex 的字面量陷阱

OpenAI 的 **Codeex** 桌面应用在设计哲学上深度集成了 **Git 原语**（Git Primitives: Git 版本控制系统的核心基础操作，如仓库、分支、工作树等）。它引入了 **工作树**（Work Trees: 允许在同一机器上同时检出多个分支的 Git 功能）的概念，这对于并行运行多个 **AI 代理**（AI Agents: 能够自主执行任务的 AI 系统）至关重要。此外，Codeex 还将 **技能**（Skills: 封装好的提示词、指令和参考文件的集合）和 **自动化**（Automations: 可按计划运行的定时任务）提升为一等公民，试图为开发者提供一个高度视觉化的 Git 管理与 AI 协作环境。

然而，在实际的营销网站重构任务中，**GPT-5.3 Codex** 展现出了一种令人沮丧的“过度字面化”倾向。虽然它能极其精准地执行指令，但缺乏对意图的深度理解。例如，当我要求它针对 **产品驱动增长**（Product-Led Growth: 依靠产品自身驱动获客和扩张的商业策略）和企业级客户优化文案时，它竟然直接在页面上写出“如果你是为了 PLG 而来，请点击这里”这种极其生硬的文字。这种对指令的 **过拟合**（Overfitting: 模型过度关注特定训练数据或指令细节，导致缺乏泛化能力和灵活性）使得它在处理需要创意和平衡感的“绿地项目”（Greenfield Project）时显得力不从心。它更像是一个极其听话但缺乏主见的初级程序员，你必须给出极其详尽的技术规范才能获得理想结果。

<details>
<summary>Original English Source</summary>
Codeex, as I said, is OpenAI's desktop app for coding. First of all, Codeex is focused around Git Primitives. The first thing is the idea of a git repository. Then there's the concept of work trees. These are full copies of your codebase that you would use or an agent use to make changes. One of the benefits of work trees versus branches, you get many of them going on on the same time on your same machine. If you're working with a lot of agents, you could give each agent its own work tree to work on. The second thing is the concept of bringing skills up as a first class citizen. Skills are sort of a package set of prompts, instructions, reference files and code that can be called by an agent. The final thing is this concept of automations. Tasks that can run on a schedule. One of the things that I've noticed about the GPT 5X Codeex models is they are so literal. They follow instructions very well, which is a feature, not a bug, but you don't want it to follow it blindly. I found that the codeex models were just too literal to do green field or creative broad work on my behalf. It really didn't have that nuance of what goes where and how to build a balanced experience. It was really overfitting to my last prompt.
</details>

### 创意引擎：Claude Opus 4.6 的自主规划力

相比之下，**Claude Opus 4.6** 在处理模糊的创意任务时表现出了显著的优越性。在相同的网站重构测试中，Opus 展现了更强的自主规划能力。它不仅会主动探索代码库，还会利用 **Cursor 计划模式**（Cursor Plan Mode: 开发工具中用于在执行前生成详细实施方案的模式）先制定方案，再逐步构建组件。尽管它在最初的视觉设计上可能产出一些“AI 废料感”明显的代码，但它对反馈的响应极快。当我要求它避开通用的 **Tailwind**（Tailwind CSS: 一个功能类优先的 CSS 框架）风格并追求“百万美元级别”的设计感时，它能迅速调整并产出符合品牌美学的高质量前端界面。

Opus 的核心优势在于它对复杂、长期运行任务的处理能力。它不仅重构了主页，还自主完成了定价页和企业服务页的配套设计，保持了全局的视觉一致性。在实际工程中，Opus 更像是一个具备产品思维的 **前端工程师**，它能够理解“为企业级客户提供安全感”这一目标背后的设计内涵，而不是简单地在页面上堆砌“安全”二字。这种对语境的把握，使其在从零到一的特性开发中成为了首选工具。

<details>
<summary>Original English Source</summary>
As soon as I started getting my hands on Opus, I was just really happy. Opus 46 was just a lot better at planning for itself so that it could execute a longunning task. It did its exploration of our codebase, used cursor plan mode to do a plan and then it started building the components. I am very pleased with the independent nature of this model. I'm about to hire her. She can go run my marketing site. You are now my marketing engineer. I asked it to develop a unique and modern front-end visual style. It rebuilt and it was so lovely. It still matches our brand aesthetic but just looks so much nicer. It gives a really nice kind of value propositionoriented view of what would be nice for enterprise. Opus46 is really good at kind of generative broad green field work. You want it to implement a new feature, it will go implement a new feature. You want to completely redesign your site, it will completely redesign your site.
</details>

### 协作博弈：构建“产品经理+首席架构师”的 AI 团队

在处理 **ChatPRD** 核心应用中复杂的 **MCP 连接器**（Model Context Protocol: 由 Anthropic 发起的开放协议，允许 AI 模型安全地访问本地或远程的数据源和工具）重构任务时，我发现了一套极具威力的组合拳。这套流程的核心在于：利用 Opus 4.6 作为“执行者”，利用 GPT-5.3 Codex 作为“评审者”。

具体的协作逻辑如下：首先，由 Opus 4.6 负责编写 80% 到 90% 的功能代码，因为它在构建新组件和处理复杂逻辑流方面非常高效。随后，我将代码交给 Codex 进行 **架构评审**（Architectural Review）。Codex 此时展现出了它作为“首席工程师”的价值——它极其擅长挑刺。它能精准识别出性能瓶颈、潜在的 **边界情况**（Edge Cases: 仅在极端或特殊条件下发生的程序运行情况）以及架构上的不合理之处。这种“红蓝对抗”式的流程极大地提升了代码质量：Opus 负责冲锋陷阵，Codex 负责查漏补缺。这种分工完美契合了两个模型的性格：Opus 渴望构建，而 Codex 乐于拆解。

<details>
<summary>Original English Source</summary>
I found a place that these two operate really well. One of the big features that I released recently on chat prd was a bunch of MCP connectors. I started off a Opus 46 task to refactor how we use our tool components. I built a plan with Opus 46 using plan mode. It built a bunch of really nice front-end components. Now, I'm ready to push this code to production. Here's where our friend Codeex comes back to play. I went back into Codex and I said, "Can you review the architecture and performance and see if you have any feedback we should consider before shipping?" It identified a couple high impact issues. GPT 53 codeex was so lovely for code review, architectural review, and finding edge cases. You could ask Opus 46 to build something. It would build something 80 to 90% done. You'd ask codeex to find everything wrong with it. It would find all the things that were wrong with it. And then you take it back to Opus and Opus would fix it. I think Codex is the better software engineer technically. Opus is kind of the software engineer that you want on your team though. It actually builds stuff.
</details>

### 代币丰饶：权衡 AI 工程的成本与投资回报

在追求极致生产力的过程中，成本是一个无法回避的话题。**Opus 4.6 Fast** 虽然速度极快，但其价格也相当昂贵，每百万输出 **代币**（Tokens: AI 模型处理文本的最小单位）的成本约为 150 美元。然而，如果我们从 **投资回报率**（ROI: 投资获利相对于投入成本的比率）的角度来看，这种支出是极其合理的。在五天内完成 44 个 PR 和数万行高质量代码的交付，如果雇佣人类工程师团队，其薪酬成本和沟通时间成本将远超 AI 的 API 账单。

我提倡一种 **代币丰饶心态**（Token Abundance Mindset: 认为 AI 计算资源是充足且高效的，应优先考虑产出价值而非过度节省成本的思维方式）。在当前的 AI 时代，开发者应当根据任务的性质选择最合适的“人格”：需要创意和快速原型时，选择 Opus；需要严谨评审和代码加固时，选择 Codex。这种多模型协作的模式，不仅是目前最先进的工程实践，也是未来 AI 原生开发的必然趋势。

<details>
<summary>Original English Source</summary>
To conclude our episode, I just want to give a quick nod to Opus 46 fast. It is most powerful model but fast. And it is expensive. Six times the price. I think it's $150 per million output tokens. I embrace a token abundance mindset. I'm starting to spend a lot of money on models, which at the end of the day, super super high ROI. How expensive would it be for me to ship 44 PRs, really really huge features? It would take months of time, tons of people. You want to use Opus for your product and feature work, being creative and creating high-quality designs. You want codecs catching all your bugs, advising on our architecture, and really writing exceptional highquality hardened code. Both of these models have a place in your stack. I'm still a multimodel girl.
</details>