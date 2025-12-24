---
area: tech-engineering
category: ai-ml
companies_orgs:
- Anthropic
- Google
date: '2025-12-02'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Claude
- Claude Sonnet
project:
- ai-impact-analysis
series: ''
source: https://www.youtube.com/watch?v=0vZ_UVLhSQQ
speaker: Anthropic
status: evergreen
summary: 本指南详细介绍了如何高效利用人工智能协作工具Claude。文章涵盖了Claude的界面导航、编写有效提示词的最佳实践（包括设定情境、定义任务和明确规则）、如何通过上传文档和集成外部工具（如网络搜索和Google
  Drive）来提供上下文信息，以及如何根据任务需求选择合适的Claude模型（如Opus和Sonnet）和高级模式（如扩展思考模式和研究模式）。通过持续互动，用户可以最大化Claude的潜力，将其作为提升工作效率的强大智能伙伴。
tags:
- ai-collaboration
- ai-model
- llm
- tool
title: Claude.ai 入门指南：您的智能协作伙伴
---

### 拥抱智能协作：Claude 简介

想象一下，你正面对一张空白页面，为一个复杂的大项目绞尽脑汁，却不知从何开始。如果有一个伙伴能帮助你将其分解，那该多好？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Imagine this. You're looking at a blank page, wrestling with a big complex project, and not sure where to start. What if you had a partner who could help you break it down?</p>
</details>

**Claude**（Anthropic公司开发的一款强大人工智能助手）正是一个强大的智能协作伙伴，它能全面提升你的工作能力。Claude带来的是人工智能的智慧，而你则提供使工作有意义的背景和专业知识。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude is a powerful, intelligent collaborator that amplifies your capabilities across all of your work. Claude brings AI intelligence, but you bring the context and expertise that makes the work meaningful.</p>
</details>

### Claude 界面概览

让我们来探索如何与Claude进行聊天。首先是侧边栏，你可以在这里找到创建新聊天和跳转回旧聊天的图标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's explore chatting with Claude. Beginning with the sidebar, here you will encounter icons for creating new chats and jumping back into old ones.</p>
</details>

还有“项目”选项，你可以在其中通过持久的上下文和自定义指令来组织对话；以及“**Artifacts**”（工件：允许你将想法转化为可共享的应用程序、工具或内容），无论你希望完成什么，Claude都能提供支持以助你实现目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are options for projects where you can organize your conversations with persistent context and custom instructions. And then artifacts, which allow you to turn ideas into sharable apps, tools, or content. No matter what you hope to accomplish, Claude offers support to achieve your goals.</p>
</details>

### 精通提示词：与 Claude 有效沟通

与Claude的所有互动都始于一个**prompt**（提示词：你向AI提出的文本指令或问题），这些提示词结合其他上下文会影响其响应。与Claude对话的最佳方式就像与同事交流一样：自然、简洁、对话式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All interactions with Claude begin with a prompt, and these prompts combined with other context impact its response. The best approach when speaking to Claude is like you would a co-orker, naturally, concisely, and conversationally.</p>
</details>

你可能会问，什么是好的提示词？在下一次与Claude对话之前，请考虑以下几点：第一，**设定情境**。你的角色是什么？你的目标是什么？是否有关于你工作的上下文信息是Claude应该知道的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But you may ask, what is a good prompt? Before your next conversation with Claude, consider a few things. One, setting the stage. What is your role and what are your objectives? Is there context about your work that Claude should know about?</p>
</details>

第二，**定义任务**。你希望Claude采取什么行动？你希望Claude进行写作、分析、构建等操作吗？第三，**明确规则**。你希望Claude使用什么风格或语气？是否有你可以附加的示例来展示给Claude？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Two, defining the task. What action do you want Claude to take? Do you want Claude to write, analyze, build, etc. Three, specifying rules. What's the style or tone you want Claude to use? Are there examples that you can attach to show Claude?</p>
</details>

让我们回顾一下下面的这个提示词。首先，我们通过告诉Claude“这是为一个新的独立流媒体应用的投资者路演演示文稿”来设定情境，这就是上下文和目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's review this prompt below. First, we're setting the stage by telling Claude, "This is for an investor pitch deck for a new indie streaming app." That's the context and the objective.</p>
</details>

然后，我们通过提供相关细节来清晰地定义任务。最后，我们通过使用带有引用的当前网络研究，并将其结构化为一份专业报告来明确规则，这准确地告诉了Claude我们需要的风格和格式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then, we define the task clearly by providing relative details. Finally, we specify the rules by using current web research with citations, structuring it as a professional report, which tells Claude exactly what style and format we need.</p>
</details>

### 利用上下文和工具增强 Claude 的能力

很好。有了基本的提示词，现在就到了真正的强大之处：添加你的特定上下文，使Claude的响应真正符合你的需求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Perfect. With your basic prompt in place, now comes the real power move. Adding your specific context to make Claude's response truly tailored to your needs.</p>
</details>

当你将相关文档或背景信息上传到特定聊天中时，Claude会在其响应中考虑这些上下文。无论是公司文档、项目文件还是背景研究，这都相当于一个快捷方式，让Claude能够理解你的需求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When you upload relevant documents or background information into a specific chat, Claude considers that context in its response. Whether that's company documents, project files, or background research, think of it as a shortcut so that Claude can understand what your needs are.</p>
</details>

Claude可以接收和输出多种文件类型，例如PDF、CSV、Docs等。在搜索和工具菜单中，你可以通过赋予Claude更多工具的访问权限来再次提升你的体验，从而获取更多上下文，并在需要时调用这些工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude can intake and output many file types such as PDF, CSV, Docs, and more. In the search and tools menu, you can level up your experience yet again by giving Claude access to more tools to pull in more context and will pull in these tools as needed.</p>
</details>

在解决你的请求时，你可能会开启“网络搜索”等选项，让Claude研究当前市场数据，或者使用“连接数据源”从Google Drive中提取信息，从而获取实时信息。Claude会选择正确的方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">While solving your request, you might toggle on options like web search to let Claude research current market data or use connected data sources to pull from Google Drive, allowing access to real-time information. Claude will choose the right approach.</p>
</details>

虽然这些选项直接影响Claude可访问的信息，但还有几种方法可以自定义Claude的响应方式。你可以为你的任务选择最佳的Claude模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">While those options directly impact the information Claude has access to, there are a few more ways to customize how Claude responds. You could choose the best Claude model for your task.</p>
</details>

### 选择合适的 Claude 模型和模式

要使用模型选择器，请开始与Claude聊天或打开现有聊天。所选模型将显示在你的文本输入下方。要更改它，请点击模型名称并选择你希望与之聊天的Claude模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To use the model selector, start chatting with Claude or open an existing chat. The selected model will appear under your text input. To change it, click on the model name and choose which model of Claude you'd like to chat with instead.</p>
</details>

更改模型将导致创建一个新聊天。Claude目前支持多种具有独特功能的模型，旨在满足特定用户的需求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Changing the model will result in a new chat. Claude currently supports numerous models with distinct capabilities intended to meet specific users needs.</p>
</details>

对于最复杂的任务，请使用 **Claude Opus** 模型。它是规模最大、具有混合推理能力的模型，例如，可以运行多步骤的财务分析。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Use the Claude Opus model for your most complex tasks. It's the largest scale model with hybrid reasoning capabilities. For example, running a multi-step financial analysis.</p>
</details>

**Claude Sonnet** 是日常用户的最佳选择，也是我们推荐的默认模式。它在复杂功能和成本效益之间取得了平衡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude Sonnet is the best choice for everyday users and is our recommended default mode. It balances sophisticated capabilities with cost effectiveness.</p>
</details>

这就像为工作选择合适的工具。你总是可以根据要完成的任务切换模型。**Extended Thinking Mode**（扩展思考模式）对于复杂的思考和分析特别有价值，尽管它会增加延迟，并且对于日常对话中的简单问题可能不是必需的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Think of it like choosing the right tool for the job. You can always switch models based on what you're trying to accomplish. Extended thinking mode is particularly valuable for complex thinking and analysis, though it increases latency and may not be necessary for simple questions in everyday conversations.</p>
</details>

为了在更直接的任务中获得最快的输出，你可以从Sonnet模型开始，并关闭思考模式。如果你需要更多支持，可以更改模型或开启思考模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To get the fastest output for more straightforward tasks, you can start with sonnet models and leave thinking mode off. If you need more support, you can change the model or turn on thinking mode.</p>
</details>

**Research Mode**（研究模式）使Claude能够通过自动分解复杂问题并探索数百个来源，进行系统的多角度调查，在5到45分钟内提供全面的、带引用的报告。Claude为你进行研究，而你则专注于其他高价值工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Research enables Claude to conduct systematic multi-angle investigations by automatically breaking down complex questions and exploring hundreds of sources to deliver comprehensive cited reports in 5 to 45 minutes. Claude does the research for you while you focus on other high-val work.</p>
</details>

### 持续互动：发挥 Claude 的最大潜力

现在，只需等待Claude为你提供一份精心制作的响应，有效完成你的任务。但Claude真正的力量来自于持续和频繁的沟通，而不仅仅是一次性的提示词。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, just wait as Claude delivers to you a well-crafted response that effectively accomplishes your task. But the real power of Claude comes with continued and frequent communication, not just one-off prompts.</p>
</details>

你与Claude互动越多，它就越能理解你的沟通风格和偏好，以便在未来的对话中更好地为你服务。与Claude合作，你拥有一个优秀的伙伴和一个强大的智能协作工具，它能全面提升你的工作能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The more you interact with Claude, the better it becomes at understanding your communication style and preferences for future conversations. Working with Claude, you have a great partner and a powerful, intelligent collaborator that amplifies your capabilities across everything you work on.</p>
</details>

Claude为你的工作带来人工智能的智慧，而你则提供使工作有意义的背景和专业知识。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude brings AI intelligence to your work. You bring the context and expertise that makes the work meaningful.</p>
</details>