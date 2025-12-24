---
area: tech-insights
category: technology
date: '2025-11-24'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Claude
- Gemini
project:
- ai-impact-analysis
series: ''
source: https://www.youtube.com/watch?v=zMXKhhwiCIc
speaker: AI Engineer
status: evergreen
summary: 您是否曾遇到人工智能智能体（AI Agent）在执行任务时偏离方向或耗尽上下文窗口的问题？Backlog.md 是一款开源的终端看板工具，旨在解决这一挑战。它通过将大型功能分解为更小的
  Markdown 任务，并提供清晰的描述、验收标准和实施计划，帮助人类和 AI 智能体高效协作。Backlog.md 支持 AI 智能体通过多协议通信（MCP）或命令行界面（CLI）进行交互，确保任务范围明确、可回滚，并提供多阶段审查流程，从而实现高质量的代码生成，其中
  99% 的代码由 AI 智能体完成。
tags:
- ai-agent
- context-engineering
- developer-tool
- task-management
- technology
title: Backlog.md：AI 智能体任务管理的终端看板工具
---

### 引言：AI 智能体任务管理的挑战与 Backlog.md

您的**人工智能智能体**（AI Agent: 能够自主执行任务的程序）是否曾工作了将近一个小时，结果却发现它方向错了，或者在执行某个重要任务的过程中耗尽了**上下文窗口**（Context Window: AI 模型处理信息的能力范围）？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Have you ever had your agent working for almost one hour only to understand that he went in the wrong direction or in the middle of something very important he ran out of context window?</p>
</details>

我也有过同样的经历。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Me too.</p>
</details>

正因为如此，在过去的几个月里，我开发了一种工作流程，它包括将一个大的功能分解成更小的 Markdown 任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's why in the last months I developed a workflow that consists in dividing a big feature into smaller markdown tasks.</p>
</details>

大家好，我是 Alex Gavrilescu，我将介绍 **Backlog.md**（一个专为人工智能智能体和人类设计的项目管理工具）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi, I'm Alex Gavesco and I'm going to present backlog MD, a tool for project management for AI agents and humans.</p>
</details>

好的，我们开始吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, let's start.</p>
</details>

### Backlog.md 终端看板概览

那么，您见过**终端看板板**（Terminal Kanban Board: 在命令行界面中展示任务流程的工具）吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, have you ever seen a terminal cand board?</p>
</details>

当我开始开发 Backlog.md 时，我没有找到任何这样的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, when I started working on backlog MD, I couldn't find any.</p>
</details>

所以，我不得不自己构建它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I had to build it myself.</p>
</details>

我们现在可以直接在您的终端中拥有一个完整的看板板。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have a full comban board directly in your terminal.</p>
</details>

在这里，我们可以看到当前项目的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And here we can see our tasks for the current project.</p>
</details>

我们还可以直接在终端中查看任务的详细信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we can actually see the details of the task directly in our terminal.</p>
</details>

我们可以看到待开发任务的描述和**验收标准**（Acceptance Criteria: 定义功能完成和可接受的条件）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can see the description and acceptance criterias of tasks that are still to be uh developed.</p>
</details>

我们还有“进行中”和“已完成”列，可以在其中查看已实现的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have the in progress and the done columns as well where we can see what has been implemented.</p>
</details>

在这个例子中，我们可以看到验收标准已经实现，并且有人留下了一些实施笔记。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this case, we can see the acceptance criterias were implemented and someone left some implementation notes.</p>
</details>

但我一直希望在 Backlog.md 中拥有的一个功能是，能够在不同状态列之间移动任务，以及在同一列内重新排序任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But one of the features I always wanted to have in Backlog MD is the ability to move tasks between status columns and to reorder tasks within the same column.</p>
</details>

那么，让我们用 Claude 的代码来构建它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's build it with cloud code.</p>
</details>

### 定义任务移动功能的需求

在我们用 Claude 的代码构建它之前，我们需要有清晰的需求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before we can build it with cloud code, we need to have clear requirements.</p>
</details>

这对外人类很重要，对人工智能智能体也同样重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is important for humans but also for AI agents.</p>
</details>

所以，首先要做的是，我们希望按下“M”键来切换**移动模式**（Move Mode: 允许用户重新排列任务的功能）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So first thing to do is to we want to press M to toggle the move mode.</p>
</details>

然后当前任务将被高亮显示，我们就能知道哪个任务将被移动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then the current task will be highlighted and we know which task is going to be moved.</p>
</details>

我们可以使用上下箭头键在同一列中移动任务并改变其顺序。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can use the arrow keys up and down to move the task within the same column and change the its order.</p>
</details>

或者我们可以左右移动，这将改变任务的状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Or we can go left and right and this will change the status of the task.</p>
</details>

如果我们按下“M”或回车键，我们将提交这次移动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we press M or enter, we will commit this move.</p>
</details>

如果我们想取消，我们将按下“Esc”键。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if we want to cancel, we will press ask.</p>
</details>

用户应该通过在页脚显示按钮来了解此功能如何工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the user should be informed uh how this functionality works by showing the button in the footer.</p>
</details>

那么，让我们让 Claude 实际实现这个任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's have cloud actually implement the task uh uh the task.</p>
</details>

但首先，任务必须被创建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But first the task has to be created.</p>
</details>

所以我们根据这些需求来创建一个任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we tell given this requirements to create a task.</p>
</details>

### AI 智能体创建任务

现在，Claude 要做的第一件事是搜索现有任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now clude the first thing that it will do is going to search for existing tasks.</p>
</details>

实际上，它做的第一件事是需要理解 Backlog.md 是如何工作的以及它是什么，因为 Claude 扮演的是一个刚加入我们项目、需要理解项目如何运作的开发者角色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Actually the first thing that he does he needs to understand how backlog works and what is backlog because clude acts as a developer that has been re uh just on boarded on our project and needs to understand how our project works.</p>
</details>

所以它首先阅读关于 Backlog.md 的信息，然后阅读如何正确创建任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So he first reads about backlog and then he reads about how to create tasks correctly.</p>
</details>

之后，它创建了任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Afterwards he creates the task.</p>
</details>

我们可以在这里看到任务已经完成，现在让我们检查一下有什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can see here the task has been completed and now let's check uh what we what is there.</p>
</details>

这就是它的样子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is how it looks.</p>
</details>

### Backlog.md 任务结构与审查点

Backlog.md 任务以 Markdown 文件的形式存储在您的**代码仓库**（Git Repository: 用于版本控制和协作的存储库）中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Backlog empty tasks are stored as markdown files in your repository.</p>
</details>

我们有一个**前置元数据**（Front Matter: Markdown 文件顶部用于存储元数据的 YAML 块）部分，其中包含任务 ID、标题、标签和其他元数据字段等任务元数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have a front matter section with meta task metadata such as task ID, title, labels and other metadata fields.</p>
</details>

我们有任务描述，让我们看看 Claude 是否真正理解了这项任务的目的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have the description and let's read if Claude uh actually understood why what is the purpose of this task.</p>
</details>

在终端看板板中添加移动模式功能，允许用户使用键盘导航在列内交互式地重新排序任务，并在不同状态列之间移动任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Add the move mode feature in the twoe comban board that allows users to interactively reorder tasks within columns and move tasks between status columns using keyboard navigation.</p>
</details>

这提供了一种更直观的方式来重新组织任务，而无需使用**命令行界面**（CLI: Command Line Interface: 通过文本命令与程序交互的界面）命令或直接编辑文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This provides a more intuitive way to reorganize tasks without needing to use CLI commands or edit files directly.</p>
</details>

所以我们可以确认 Claude 确实理解了我们为什么要构建这个功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can confirm that cloud really understand why we want to build this feature.</p>
</details>

Backlog.md 任务的下一部分是验收标准。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The next section of backlog tasks is the acceptance criteria.</p>
</details>

在这里，我们可以有非常清晰的验收标准，它们定义了任务或功能应该如何表现，并且这些标准应该是可测试和易于验证的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And here we can have really clear uh acceptance criteria that define how the task the feature should behave and they should be testable and easily uh verifiable.</p>
</details>

这是第一个审查点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is uh this is the first review point.</p>
</details>

在这个时刻，您可以真正了解人工智能智能体是否理解了您的意图，并且会很好地完成任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is the moment where you can actually understand if the AI agent has understood your intent and will do a good task.</p>
</details>

### AI 智能体制定实施计划

下一步是**实施计划**（Implementation Plan: 详细说明如何实现功能的步骤和方法）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The next step is the implementation plan.</p>
</details>

所以我们希望人工智能智能体能提出一个实施计划，因为它必须非常清楚地理解任务描述和验收标准。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we want the AI agent to come up with an implementation plan because he must understand really well the description and the acceptance criteria.</p>
</details>

它可以查阅文档和互联网，并搜索现有代码库，以了解将此功能放置在哪里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It can uh check the documentation and internet and search also the existing codebase to understand where to put this feature</p>
</details>

然后，它最终会编写一个实施计划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then at the end it will write an implementation plan.</p>
</details>

那么，让我们让 Claude 来完成这项工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's have this done actually by cloud.</p>
</details>

所以我们指示它根据 Backlog.md 的工作流程，为它刚刚创建的任务制定一个实施计划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we give him the instruction to create an implementation plan according to backlog MD workflow for the task that he just it just created.</p>
</details>

我们稍等片刻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we wait a bit.</p>
</details>

这会需要一些时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh this will take some time.</p>
</details>

当然，它必须真正找到需要编辑哪些文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Of course he has to really uh find what files have to be edited.</p>
</details>

也许它会在互联网上查找一些文档，并在我们的项目中查找现有文档。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe look up on the internet for some documentation and existing documentation in our project.</p>
</details>

同时，让我们解释一下它在底层是如何工作的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the meantime, let's explain how this works under the hood.</p>
</details>

### Backlog.md 内部工作原理：MCP 服务器与资源

Backlog.md 使用一个 **MCP 服务器**（MCP Server: Multi-protocol Communication Protocol Server: 多协议通信协议服务器）来向人工智能智能体公开信息指令和工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So backlog MD uses uh an MCP server to expose information instructions for the M for the AI agents but also tools.</p>
</details>

最重要的部分是资源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The most important part is the resources.</p>
</details>

这是 MCP 的一个特殊功能，Backlog.md 用它来指导智能体如何使用 Backlog.md。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is a special feature of MCP that backlog MD uses to instruct the agents how to use backlog MD.</p>
</details>

第一个资源是工作流程概述。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first resource is the workflow overview.</p>
</details>

在这里，我们告诉人工智能智能体 Backlog.md 是什么以及它能用来做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here we're telling the AI agents what is backlog and what can be used for.</p>
</details>

此外，这个概述还将介绍可用的后续资源，包括任务创建指南，让人工智能智能体了解如何创建任务，以及哪些字段是必需的，哪些是可选的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And also this overview will present the next resources that are available which are the task creation guide letting the AI agents know how to create tasks and what fields are required and which ones are optional.</p>
</details>

任务执行指南。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the task execution guide.</p>
</details>

当人工智能智能体想要实施任务时，此时应该做什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When an AI agents want to implement the task, what should be done at this point?</p>
</details>

例如，将任务设置为“进行中”状态，并将任务分配给自己。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Such as putting the task into in progress uh status and assigning the tasks to themsel.</p>
</details>

最后一个指南是关于完成任务，并检查验收标准是否都已正确实施，以及检查我们指定的所有其他“完成定义”要求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the last guide is about completing a task and uh checking the acceptance criterias if they are all actually implemented correctly and checking all of the other requirements for the definition of done that we specified.</p>
</details>

那么，智能体如何使用 Backlog.md 呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then how can agents use backlog?</p>
</details>

通过 MCP 工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, via MCP tools.</p>
</details>

Backlog.md 服务器将为其智能体公开某些工具，以便它们可以直接本地运行 Backlog.md 命令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So backlog MD server will expose certain tools for their agents so that they can run backlog commands directly and natively.</p>
</details>

例如，其中之一是搜索任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example, one of them is searching tasks.</p>
</details>

在创建新任务之前，人工智能智能体应该搜索该任务是否已经存在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before creating new task, AI agents should search if that task already exists.</p>
</details>

它们应该能够查看这些任务的详细信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It should they should be able to view the details of these tasks.</p>
</details>

它们应该能够创建任务、更新任务、更新其验收标准，并将它们纳入其中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They should be able to create tasks and update tasks and update their acceptance criteria and put them into them.</p>
</details>

### 实施计划与代码审查

好的，我们继续。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, let's continue.</p>
</details>

现在，希望 Claude 已经完成了实施计划的创建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, uh hopefully cloud finished creating the implementation plan.</p>
</details>

那么，让我们看看我们有什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, let's check what we have.</p>
</details>

我们有一个架构概述。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we have an architecture overview.</p>
</details>

我们有实施步骤，然后它实际上开始列举哪些文件应该被接触和修改，以及如何修改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have implementation steps and then he actually starts enumerating which files should be touched and modified and the how.</p>
</details>

在这里，我们有第二个也是最重要的审查步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And here we have the the second and most important review step.</p>
</details>

在这个时刻，一位资深软件工程师可以真正理解智能体是否正朝着正确的方向前进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is the moment where a senior software engineer can really understand if the agent is going is the in the right direction.</p>
</details>

因此，在这一点上仔细检查一切是否正常非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it is very important at this point to double check if everything is all right.</p>
</details>

那么现在，为了本次演示的目的，让我们直接进入实施部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now uh for the purpose of this presentation let's go directly to the implementation part.</p>
</details>

所以对于执行，我们希望智能体为我们编写代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for the execution we want to have the agent write the code for us.</p>
</details>

因此，**Claude**、**Gemini** 或 **Kuso**（均为大型语言模型或人工智能智能体）都可以与 Backlog.md 协同工作，它们应该了解任务、描述、验收标准和计划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Cloex or Gemini or Kuso they can all work with backlog MD and they should learn about the task the description the acceptance criteria and the plan</p>
</details>

而“开发功能”意味着实现所有验收标准，并在满足“完成定义”时将任务设置为“已完成”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and what does develop the feature means means implement all of the acceptance criterias and putting the task into done when the definition of done is fulfilled.</p>
</details>

那么，让我们让 Claude 实际实现它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, let's have Claude actually implement it.</p>
</details>

这将需要一段时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is going to take a while.</p>
</details>

所以，我们将暂停这个视频，等 Claude 完成后我们再回来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we're going to pause this video and come back when Claude has finished and we're done.</p>
</details>

### Backlog.md 工作流程回顾与功能演示

在检查 Claude 实现了什么之前，让我们快速回顾一下 Backlog.md 的工作流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh before checking um what Claude has implemented, let's have a quick review of the backlog workflow.</p>
</details>

那么，作为人类，我想要创建任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, as a human, I want to create tasks.</p>
</details>

我想在我的项目中开发功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I want to develop features in my project.</p>
</details>

通常，我可以直接使用 Backlog.md 的 CLI 命令创建任务，但如果我们让我们的 AI 智能体为我们完成，会更方便。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So normally I could create task directly using backlog CLI commands but it is more convenient if we ask our AI agent to do it for us.</p>
</details>

所以我们可以提供一个关于我们想要实现什么的**人类描述**（Human Description: 以自然语言表达的需求），然后 AI 智能体将运行 Backlog.md 命令来创建任务并填写所需的各个部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can have a human description about what we want to implement and the AI agent will run the backlog commands to create the task and to fill the the sections that are needed.</p>
</details>

当任务创建后，我们可以简单地告诉智能体：“嘿，Claude，你能实现任务 316 吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And when the task is created, we can tell an agent something as simple as, "Hey Claude, can you please implement task 316?"</p>
</details>

然后它就会完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And he will do it.</p>
</details>

那么，让我们看看 Claude 实现了什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's see what Claude has implemented.</p>
</details>

我们的终端在这里，显示着我们新的看板板，我们可以立即发现一个新的命令：“M”键用于移动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have our terminal here with our new comban board and we can immediately spot a new command M to move.</p>
</details>

那么，让我们按下这个按钮。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's uh press this button.</p>
</details>

您可以看到任务已被高亮显示，我可以上下移动，任务正在被移动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see the task has been highlighted and I can go up and down and the task is being moved.</p>
</details>

而且我们也可以，希望如此，移动到新的状态列。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we can also hopefully yes go to the new status column.</p>
</details>

所以我们可以提交或取消。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can commit or we can cancel.</p>
</details>

让我们取消，因为我们不想移动这个任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's cancel because we don't want to move this task.</p>
</details>

但例如，让我们尝试一下刚刚实现的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But for example, let's try uh the task that has been just implemented.</p>
</details>

这就是任务 316。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is the task 316.</p>
</details>

假设出现了一个问题，并非所有内容都已正确实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's say there was a problem and not everything has been implemented correctly.</p>
</details>

让我们把它移回“进行中”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's move it back in progress.</p>
</details>

并且它奏效了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it works.</p>
</details>

它已成功移动到“进行中”列。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It has been successfully moved to in progress column.</p>
</details>

所以这是一个例子，展示了您如何将 Backlog.md 与您喜欢的人工智能智能体一起使用，并且可以在几分钟内根据您的规范正确地实现一个任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is an example of how you can use backlog MD with your favorite AI agent and you can have a task implemented correctly according to your specs in few minutes.</p>
</details>

### Backlog.md 为何如此高效

但为什么它能如此高效地工作呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But why does this work so well?</p>
</details>

将 Markdown 任务存储在您的代码仓库中，可以让您进行一种**上下文工程**（Context Engineering: 精心设计输入以优化 AI 模型性能的方法），这意味着您可以定义人工智能智能体在单个任务中应该实现多少内容，这样它就不会耗尽其上下文窗口，并且您能确切知道将实现什么，它们也不会实现不需要的额外功能。此外，由于我们使用更小的**原子任务**（Atomic Tasks: 独立且不可再分的最小任务单元），如果任何任务出现问题，您可以回滚、更改规范、验收标准、描述，并要求人工智能智能体从实施计划重新开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Having markdown tasks stored in your repo allows you to do a sort of context engineering which means you can define how much an AI agent should implement within a single task so that he doesn't run out of their context window and you know exactly what will be implemented and they don't implement extra features that are not wanted and since you we are using smaller atomic tasks if something goes wrong Um with each of these with any of these tasks you can roll back change the specs the acceptance criteria the description and ask the AI agent to start again from the implementation plan.</p>
</details>

范围定义明确。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The scope is well defined.</p>
</details>

因此，您可以使用验收标准真正定义哪些内容应该属于此功能，哪些不应该。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can really define with using the acceptance criteria what should be part of this feature and what should be not part of this feature.</p>
</details>

而且，如果您运行**单元测试**（Unit Test: 针对程序最小可测试单元进行的测试），它们也应该检查验收标准是否得到满足，这将允许我刚刚向您展示的三阶段审查过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the tests um if you run unit test they should also uh check if the acceptance criteria as are met and it will allow this three review uh process that I just showed to you.</p>
</details>

第一个审查检查点是在任务创建之后。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first review checkpoint is after the task is created.</p>
</details>

您可以检查描述和验收标准，看智能体是否理解了您的意图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can check the description and the acceptance criteria if the agents understood your intent.</p>
</details>

然后您可以审查实施计划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then you can review the implementation plan.</p>
</details>

您可以查看智能体是否正朝着正确的方向前进，最后您将审查代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see if the agent is going into the right direction and at the end you will review the code.</p>
</details>

在没有依赖关系的情况下，您还可以使用 Git 的工作流并行处理多个任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can also work on multiple tasks in parallel using git works given that there are no dependencies.</p>
</details>

### Backlog.md 核心特性总结

那么，Backlog.md 到底是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what is backlog?</p>
</details>

它是一个开源的 **MIT 许可**（MIT License: 一种宽松的开源软件许可协议）**命令行界面工具**（CLI Tool: Command Line Interface Tool: 通过文本命令与程序交互的工具）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's an open-source MIT CLI tool.</p>
</details>

它既有终端用户界面，也有网页界面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It has a terminal user interface but also web interface.</p>
</details>

人工智能智能体可以通过 CLI 命令或通过 MCP 进行交互。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI agents can interact via CLI commands or via MCP.</p>
</details>

MCP 是首选的原生方式，但我们也支持针对传统人工智能智能体的 CLI 命令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">MCP is the preferred native way, but we also support CLI commands for legacy AI agents.</p>
</details>

它是跨平台的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is crossplatform.</p>
</details>

它可以在大多数主流操作系统上运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It works on most famous operating systems</p>
</details>

而且您不需要任何额外的 API、工具、数据库或账户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you don't need any extra APIs or tools or databases or accounts.</p>
</details>

只要您将所有任务托管在您的 Git 仓库中，您就可以与团队共享它们，并且所有任务都是同步的，这意味着即使任务在另一个分支上更新，Backlog.md 也会检查其状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As long as you uh host all of the tasks on your Git repository, you can share them with your team and all of the tasks are in sync, which means that backlog checks the status of a task even if this task has been updated on another branch.</p>
</details>

最重要的是，Backlog.md 的代码有 99% 是由人工智能智能体编写的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And most important part, backlog code has been written 99% by AI agents.</p>
</details>

我自己编写的项目部分只有指令和前三个任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The only co only part of the project that I written myself were the instructions and the first three tasks.</p>
</details>

非常感谢您的关注。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you very much for your attention.</p>
</details>

如果您想了解更多关于 Backlog.md 的信息或进行尝试，您可以在浏览器中访问 backlog.mmd。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you want to know more about backlog andd or experiment with it, you can visit backlog.mmd in your browser.</p>
</details>

如果您有任何意见，请联系我，我很乐意帮助您开始使用 Backlog.md。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you have any comments, please reach out to me and I will be happy to help you on board uh with backlog MD.</p>
</details>

再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Bye.</p>
</details>