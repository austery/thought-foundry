---
author: AI Engineer
date: '2025-12-04'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=aqW68Is_Kj4
speaker: AI Engineer
tags:
  - ai-agents
  - llm-apis
  - context-management
  - code-execution
  - agent-skills
title: Anthropic 揭示 Claude API 如何赋能 AI 智能体系统演进
summary: Anthropic 的 Katelyn Lesse 介绍了 Claude API 如何演进以支持开发者构建强大的 AI 智能体系统。她强调了三个核心方面：充分利用 Claude 的能力（如深度思考和工具使用）、高效管理上下文窗口（通过 MCP、记忆工具和上下文编辑），以及赋予 Claude “计算机”能力（通过代码执行工具和智能体技能）。文章以 Claude Code 为例，展示了这些平台特性如何帮助开发者最大化模型性能，并展望了未来平台的发展方向，包括持续优化 API、增强上下文管理工具和完善智能体基础设施。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
people:
  - Katelyn Lesse
  - Swix
  - Barry
  - Mahes
companies_orgs:
  - Anthropic
  - AI Engineer
  - GitHub
  - Century
products_models:
  - Claude
  - Claude Code
  - MCP
media_books: []
status: evergreen
---
### 欢迎与平台演进

早上好。首先，非常感谢 Swix 和整个 AI Engineer 组织团队将我们聚集在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Good morning. Um, so first let's give a huge thank you to Swix and the whole AI engineer organizing team for bringing us together.</p>
</details>

Katelyn Lesse 领导着 Anthropic 的 Claude 开发者平台团队。她提到，在座的各位中，许多人都曾集成过**LLM API**（Large Language Model Application Programming Interface: 大语言模型应用程序接口）来构建智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm Caitlyn and I lead the claw developer platform team at Anthropic. Um, so let's start with a show of hands. Who here is integrated against an LLM API to build agents? Okay, I'm talking to the right people. Love it.</p>
</details>

今天，她将分享 Anthropic 如何演进其平台，以帮助大家使用 Claude 构建真正强大的**智能体系统**（Agentic Systems: 能够自主感知、推理、行动并与环境交互的 AI 系统）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so today I want to share how we're evolving our platform to help you build really powerful agentic systems using claude.</p>
</details>

Anthropic 喜欢与那些致力于“提升智能上限”的开发者合作。这些开发者总是在探索前沿，努力从模型中获取最佳性能，并构建最高效的系统。Katelyn 将通过一个名为 Claude Code 的智能体编码产品，向大家展示 Anthropic 如何构建一个平台，帮助大家充分利用 Claude 的能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we love working with developers who do what we call raising the ceiling of intelligence. They're always trying to be on the frontier. They're always trying to get the best out of our models and build the most high performing systems. Um, and so I want to walk you through how we're building a platform that helps you get the best out of Claude. Um, and I'm going to do that using a product that you hopefully have all heard of before. Um, it's an Agentic coding product. We love it a lot and it's called Claude Code.</p>
</details>

### 最大化模型性能的三大支柱

在考虑如何最大化模型性能时，Anthropic 致力于构建一个能帮助开发者实现三件事的平台。首先，平台帮助开发者**利用 Claude 的能力**。Anthropic 正在训练 Claude 掌握许多技能，因此需要提供 API 工具，让开发者能够使用 Claude 正在擅长的这些功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when we think about maximizing performance um from our models, we think about building a platform that helps you do three things. Um so first, the platform helps you harness Claude's capabilities. We're training Claude to get good at a lot of stuff and we need to give you the tools in our API to use the things that Claude is actually getting good at.</p>
</details>

其次，平台帮助开发者**管理 Claude 的上下文窗口**。在任何给定时间，保持正确的上下文在窗口中对于从 Claude 获得最佳结果至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, we help you manage Claude's context window. Keeping the right context in the window at any given time is really really critical to getting the best outcomes from Claude.</p>
</details>

第三，Anthropic 最近对此感到非常兴奋：他们认为开发者应该直接给 Claude 一台电脑，让它自主完成工作。因此，Katelyn 将探讨 Anthropic 如何演进平台，以提供所需的基础设施，让 Claude 能够做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And third, we're really excited about this lately. We think you should just give Claude a computer and let it do its thing. So I'll talk about how we're we're evolving the platform to give you the infrastructure and otherwise that you need to actually let Claude do that.</p>
</details>

### 充分利用 Claude 的能力

首先是充分利用 Claude 的能力。Anthropic 正在让 Claude 在许多方面表现出色，并通过 API 将这些能力以可定制的功能形式暴露给开发者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So starting with harnessing Claude's capabilities. Um, so we're getting Claude really good at a bunch of stuff and here are the ways that we expose that to you um in our API as ideally customizable features.</p>
</details>

一个相对基础的例子是 Claude 的思考能力。Claude 在各种任务上的表现会随着给予它推理问题的时间量而提升。因此，Anthropic 将此作为一项 API 功能暴露给开发者，开发者可以决定是让 Claude 为更复杂的问题思考更长时间，还是只提供一个快速答案。他们还通过**预算**（Budget）来暴露这一点，开发者可以告诉 Claude 大致要花费多少**令牌**（Token: 文本处理的基本单位）用于思考。例如，对于 Claude Code，在调试复杂系统时，通常需要 Claude 思考更长时间；而有时，开发者可能只想要一个快速答案。Claude Code 正是利用了 API 中的这项功能来决定是否让 Claude 进行更长时间的思考。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here's a first example um relatively basic. Claude got good at thinking um and Claude's performance on various tasks um scales with the amount of time you give it to reason through those problems. Um, and so, uh, we expose this to you as an API feature that you can decide, do you want Claude to think longer for something more complex or do you want Claude to just give you a quick answer? Um, we also expose this with a budget. Um, so you can tell Claude how many tokens to essentially spend on thinking. Um, and so for cloud code, um, pretty good example. Obviously, you're often debugging pretty complex systems with cloud code or sometimes you just want a quick, um, answer to the thing you're trying to do. And so, um, Claude Code takes advantage of this feature in our API to decide whether or not to have Claude think longer.</p>
</details>

另一个基本例子是**工具使用**（Tool Use: 大语言模型调用外部工具或 API 来执行特定任务的能力）。Claude 在可靠地调用工具方面表现出色。Anthropic 在 API 中提供了内置工具，如网页搜索工具，以及创建自定义工具的能力。开发者只需定义工具的名称、描述和输入模式。Claude 非常擅长可靠地判断何时调用这些工具并传递正确的参数。这对于 Claude Code 非常重要，因为它拥有大量工具，并不断调用它们来读取文件、搜索文件、写入文件以及重新运行测试等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another basic example is tool use. Claude has gotten really good at reliably calling tools. Um, so we expose this in our API with both our own built-in tools like our web search tool, um, as well as the ability to create your own custom tools. You just define a name, a description, and an input schema. Um, and Claude is pretty good at reliably knowing when to actually go um, and call those tools and pass the right arguments. So, this is relevant for cloud code. Cloud code has many, many, many tools and it's calling them all the time to do things like read files, search for files, write to files, um, and do stuff like rerun tests and otherwise.</p>
</details>

### 管理 Claude 的上下文窗口

Anthropic 演进平台的第二种方式是帮助开发者管理 Claude 的**上下文窗口**（Context Window: 大语言模型在一次交互中能够处理和记住的文本量）。在正确的时间将正确的上下文放入窗口是最大化性能最重要的因素之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the next way we're evolving the platform to help you ma maximize intelligence from claude um, is helping you manage Claude's context window. Getting the right context at the right time in the window is one of the most important things that you can do to maximize performance.</p>
</details>

然而，上下文管理非常复杂。特别是对于像 Claude Code 这样的编码智能体，它可能需要处理技术设计、整个代码库、指令和工具调用等。所有这些信息都可能在任何给定时间出现在窗口中。因此，如何确保窗口中包含正确的信息集，并随着时间推移保持优化，是 Anthropic 投入大量思考的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But context management is really complex to get right. Um especially for a coding agent like Claude Code. You've got your technical designs, you've got your entire codebase. Um you've got instructions, you've got tool calls. All these things might be in the window at any given time. And so how do you make sure the right set of those things are in the window? Um, so getting that context right and keeping it optimized over time is something that we've thought a lot about.</p>
</details>

首先是**MCP**（Model Context Protocol: 模型上下文协议）。Anthropic 在一年前推出了 MCP，很高兴看到社区围绕它进行采纳，将其作为智能体与外部系统交互的标准化方式。对于 Claude Code，可以想象它与 GitHub 或 Century 等外部系统交互，这些系统可能包含代理上下文之外的额外信息或工具。这显然会比只看到提示中内容的智能体获得更好的性能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's start with MCP model context protocol. We introduced this a year ago and it's been really cool to see the community swarm around adopting um MCP as a standardized way for agents to interact with external systems. Um, and so for cloud code, you might imagine GitHub or Century. there are plenty of places kind of outside of the agent's context where there might be additional information or tools or otherwise that you want your agent to be able to interact with or the cloud code agent to be able to interact with. Um, and so this will obviously get you much better performance than an agent that only sees the things that are in its window as a result of your prompting.</p>
</details>

接下来是记忆。如果开发者可以使用像 MCP 这样的工具将上下文引入窗口，那么 Anthropic 推出的记忆工具则可以帮助开发者将上下文保留在窗口之外，并且只在 Claude 真正需要时才将其拉回窗口。Anthropic 推出的记忆工具的第一个版本本质上是一个**客户端文件系统**（Client-side File System: 数据存储在用户设备上的文件系统）。开发者控制自己的数据，而 Claude 擅长识别哪些内容适合存储以备后用，并在需要时将其拉回上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, so the next thing is memory. So, if you can use tools like MCP to get context into your window, we introduced a memory tool to help you actually keep context outside of the window that Claude knows how to pull back into the window only when it actually needs it. Um, and so we introduced the first iteration of our memory tool as essentially a clientside file system. So, you control your data, but Claude is good at knowing, oh, this is like a good thing that I should store away for later. And then, uh, it knows when to pull that context back in.</p>
</details>

对于 Claude Code，可以想象将代码库的模式或 Git 工作流的偏好存储起来。这些都是 Claude 可以存储在记忆中，并且只在相关时才拉回来的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for cloud code, you could imagine um your patterns for your codebase or maybe your preferences for your git workflows. These are all things that claude can store away in memory and pull back in only when they're actually relevant.</p>
</details>

第三点是**上下文编辑**（Context Editing: 动态管理和修改模型上下文窗口内容的能力）。如果记忆工具帮助开发者在需要时将内容拉入窗口，那么上下文编辑则帮助开发者清除当前不相关且不应存在于窗口中的内容。Anthropic 上下文编辑的第一个版本是清除旧的工具结果。之所以这样做，是因为工具结果可能非常大，占用窗口大量空间。他们发现，过去调用的工具结果不一定对 Claude 在会话后期获得良好响应非常重要。因此，对于 Claude Code，它会调用数百个工具，读取文件等，所有这些都会占用窗口空间。上下文管理功能可以清除这些内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so the third thing is context editing. If memory helps you keep stuff outside the window and pull it back in when it makes sense, context editing helps you clear stuff out that's not relevant right now and shouldn't be in the window. Um, so our first iteration of our context editing is just clearing out old tool results. Um, and we did this because tool results can actually just be really large and take up a lot of space in the window. And we found that tool results from past calls are not necessarily super relevant to help claude get good responses later on in a session. And so you can think about for cloud code, cloud code is calling hundreds of tools. Um, those files that it read otherwise, all these things are taking up space within the window. Um so they take advantage of um context management to clear those things out of the window.</p>
</details>

Anthropic 发现，如果将记忆工具与上下文编辑结合使用，其内部评估基准测试的性能提升了 39%，这是一个非常显著的进步。这表明在任何给定时间只保留相关内容在窗口中的重要性。他们正在通过提供更大的上下文窗口来扩展这一功能。对于某些模型，开发者可以拥有一个百万令牌的上下文窗口。将这个更大的窗口与实际编辑窗口内容的工具结合使用，可以最大化性能。随着时间的推移，Anthropic 正在教导 Claude 更好地理解其上下文窗口中的内容，例如它还有多少运行空间，或者空间是否即将用尽，Claude 将根据窗口中剩余的空间做出相应的响应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so um we found that if we combined our memory tool with context editing, we saw a 39% bump in performance over o over the benchmark on our own internal evals. Um which was really really huge. And so it just kind of shows you the importance of keeping things in the window that are only relevant at any given time. And we're expanding on this by giving you larger context windows. So for some of our models, you can have a million token context window. Combining that larger window with the tools to actually edit what's in your window maximizes your performance. Um, and over time we're teaching Claude to get better and better at actually understanding what's in its context window. So maybe it has a lot of room to run, maybe it's almost out of space. Um, and Claude will respond accordingly depending on how much time uh or how much room it has left in the window.</p>
</details>

### 赋予 Claude “计算机”能力

第三点是，Anthropic 认为开发者应该给 Claude 一台电脑，让它自主完成工作。目前关于**智能体框架**（Agent Harnesses: 帮助管理和协调 AI 智能体行为的软件结构或工具）的讨论很多，例如应该有多少支架、应该有多强的意见性、是重型还是轻型。Katelyn 认为，归根结底，如果 Claude 能够编写代码并运行这些代码，它就能完成任何事情。只需给 Claude 足够的运行空间，就能获得非常专业的输出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, here's the third thing. Um, we think you should give Claude a computer and just let it do its thing. We're really excited about this one. Um, because there's a lot of discourse right now around agent harnesses. Um, you know, how much scaffolding should you have? How opinionated should it be? Should it be heavy? Should it be light? Um, and I think at the end of the day, Claude has access to writing code. And if Claude has access to running that same code, it can accomplish anything. you can get really great professional outputs for the things that you're doing just by giving Claude runway to go and do that.</p>
</details>

然而，让开发者实现这一目标面临的挑战是基础设施以及专业知识。例如，如何让 Claude 在使用计算机时访问能带来更好结果的事物。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the challenge for letting you do that is actually the infrastructure as well as stuff like expertise like how do you give cloud access to things that um when it's using a computer it will get you better results.</p>
</details>

一个有趣的故事是，Anthropic 最近在网页和移动端推出了 Claude Code。这是一个对团队来说充满挑战的项目，因为他们需要解决很多问题。当在本地运行 Claude Code 时，它本质上是使用开发者的机器作为其计算机。但如果在网页或移动端启动会话后离开，Claude Code 会在哪里运行和工作呢？因此，他们需要解决一些难题：需要一个安全的**沙盒环境**（Sandboxed Environment: 隔离的计算环境，用于安全地执行不受信任的代码），让 Claude 能够编写和运行未经开发者批准的代码；需要解决大规模的**容器编排**（Container Orchestration: 自动化容器化应用程序的部署、管理、扩展和网络连接的过程）；还需要**会话持久性**（Session Persistence: 确保用户在不同请求或会话之间保持状态和数据的能力），因为许多用户对此感到兴奋并启动了大量会话后离开，他们必须确保所有这些会话在用户返回时都能准备就绪，并能看到 Claude 完成的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a fun story is we recently launched cloud code on web and mobile. Um and this was a fun project for our team because we had a lot of problems to solve. When you're running cloud code locally, cloud code is essentially using your machine as its computer. But if you're starting a session on the web or on mobile and then you're walking away, what's happening? Like where is that where is um cloud code running? Where is it doing its work? Um and so we had some hard problems to solve. We needed a secure environment for cloud to be able to write and run code that's not necessarily like approved code by you. Um we needed to solve or container orchestration at scale. Um and we needed session persistence um because uh we launched this and many of you were excited about it and started many many sessions and walked away and we had to make sure that um all of these things were ready to go when you came back and um wanted to see the results of what Claude did.</p>
</details>

其中一个关键原语是 Anthropic 的**代码执行工具**（Code Execution Tool: 允许 AI 模型在安全环境中编写和运行代码的工具）。他们通过 API 发布了代码执行工具，允许 Claude 在安全的沙盒环境中编写和运行代码。Anthropic 的平台负责容器和安全性，开发者无需考虑这些问题，因为它们都在 Anthropic 的服务器上运行。因此，开发者可以想象，希望 Claude 编写一些代码并运行这些代码。对于 Claude Code，有很多这样的例子，比如让动画更闪亮，开发者希望 Claude 能够实际运行这些代码。Anthropic 认为，智能体的未来是让模型在沙盒环境中自主工作，他们正在提供实现这一目标所需的基础设施。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So one key primitive in this is our code execution tool. Um so we released our code execution tool in the API um which allows Claude to run write code and run that code in a secure sandboxed environment. Um, so our platform handles containers, it handles security, and you don't have to think about these things because they're running on our servers. Um, so you can imagine deciding that um, you you want Claude to write some code and you want Claude to go and be able to run that code. And for cloud code, there's plenty of examples here. Um, like make an animation more sparkly that uh, you want Claude to actually be able to run that code. Um, so we really think the future of agents is letting the model work pretty autonomously within a sandbox environment and we're giving you the infrastructure to be able to do that.</p>
</details>

一旦开发者考虑赋予模型实际的领域专业知识，这项功能就会变得非常强大。Anthropic 最近发布了**智能体技能**（Agent Skills: 预定义的、可供 AI 智能体在特定情境下调用和执行的专业知识模块或功能集），可以与代码执行工具结合使用。技能本质上是脚本、指令和资源的文件夹，Claude 可以访问这些内容，并决定在其沙盒环境中运行它们。它根据开发者给出的请求以及技能的描述来做出决定。Claude 非常擅长判断何时将某个技能引入上下文并使用它。开发者可以将技能与 MCP 等工具结合使用。MCP 提供了对工具和上下文的访问，而技能则提供了实际利用这些工具和上下文的专业知识。例如，对于 Claude Code，一个很好的例子是网页设计。每当开发者推出新产品或新功能时，可能需要构建登录页面，并希望它们遵循特定的**设计系统**（Design System: 一套统一的指导原则、组件和模式，用于确保产品在视觉和功能上的一致性）和模式。Claude 会知道它被要求构建一个登录页面，这是引入网页设计技能并为该登录页面使用正确模式和设计系统的好时机。明天，团队的 Barry 和 Mahes 将就技能发表演讲，他们会深入探讨，Katelyn 强烈推荐大家去了解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this gets really powerful once you think about giving the model actual domain expertise in the things that you're trying to do. So we recently released agent skills which you can use in combination with our code execution tool. Skills are basically just folders of scripts, instructions, and resources that Claude has access to and can decide to run within its sandbox environment. Um, it decides to do that based on the request that you gave it as well as the description of a skill. Um, and Claude is really good at knowing like this is the right time to pull this skill into context and go ahead and use it. And you can combine skills with tools like MCP. So MCP gives you access to tools and access to context. Um, and then skills give you the expertise to actually make use of those tools and make use of that context. Um, and so for cloud code, a good example is web design. Maybe whenever you launch a new product or a new feature, um, you build landing pages. And when you build those landing pages, you want them to follow your design system and you want them to follow the patterns that you've set out. Um, and so Claude will know, okay, I'm being told to build a landing page. This is a good time to pull in the web design skill. um and use the right patterns and and design system for that landing page. Uh tomorrow Barry and Mahes from our team are giving a talk on skills. They'll go much deeper and I definitely recommend checking that out.</p>
</details>

### 总结与展望

这些是 Anthropic 演进平台的方式，旨在帮助开发者充分利用 Claude 的所有能力，从而为所构建的产品获得最佳性能。首先是**利用 Claude 的能力**：随着研究团队训练 Claude，Anthropic 会提供 API 功能来利用这些能力。其次是**管理 Claude 的上下文**：保持上下文窗口的整洁，在正确的时间包含正确的上下文，这一点非常重要。第三是**给 Claude 一台电脑，让它自主完成工作**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these are the ways that we're evolving our platform um to help you take advantage of everything that Claude can do to get the absolute best performance for the things that you're building. First, harnessing Claude's capabilities. So, as our research team trains Claude, we give you the API features to take advantage of those things. Next, managing Claude's context, it's really, really important to keep your context window clean with the right context at the right time. And third, giving Claude a computer and just letting it do its thing.</p>
</details>

Anthropic 将继续演进其平台。随着 Claude 变得越来越好，拥有更多能力，并在现有能力上表现更出色，他们将继续围绕这些能力演进 API，以便开发者能够保持在前沿，并充分利用 Claude 所能提供的一切。其次，随着记忆和上下文功能的发展，他们将提升所提供的工具，让 Claude 能够决定何时拉入内容、何时存储以备后用，以及何时从上下文窗口中清除内容。第三，他们将继续深入研究智能体基础设施。让 Claude 拥有计算机并自主完成工作这一理念面临的一些最大问题，正是 Katelyn 之前谈到的关于编排、安全环境和沙盒化的问题。因此，Anthropic 将继续努力，确保这些功能准备就绪，供开发者利用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we're going to keep evolving our platform. Um, as Claude gets better and has more capabilities and gets better at the capabilities it already has, we'll continue to evolve the API around that so that you can stay on the frontier and take advantage of the best that Claude has to offer. Um, second, as uh, memory and context evolve, we're going to up the ante on the tools that we give you in order to let Claude decide what to pull in, what to store away for later, and what to clean out of the context window. And third, we're really going to keep leaning into agent infrastructure. Some of the biggest problems with the idea of just let Claude have a computer and do its thing are those problems that I talked about around orchestration, secure environments, and sandboxing. And so we're going to keep working um to make sure that those are um ready for you to take advantage of.</p>
</details>

Anthropic 正在招聘，团队正在迅速壮大。如果开发者喜欢构建令人愉悦的开发者产品，并且对 Claude 的工作感到兴奋，Anthropic 欢迎大家加入，共同参与产品设计、**开发者关系**（DevRel: Developer Relations，开发者关系，专注于构建和维护开发者社区）等多个职能领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and I'm hiring. We're hiring at Anthropic. We're really growing our team. Um, and so if you're someone who loves um, building delightful developer products um, and if you're excited about what we're doing with Claude, we would love to work with you across end product design um, Devril, lots of functions. So please reach out to us and thank you.</p>
</details>