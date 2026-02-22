---
author: AI超元域
date: '2026-02-21'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=7n9qbuzwS-U
speaker: AI超元域
tags:
  - agentic-workflow
  - knowledge-management
  - automated-recovery
  - llm-integration
title: OpenClaw 高级技巧：模型精选、记忆优化、深度搜索与自动修复
summary: 本视频深入探讨了 OpenClaw 的高级使用技巧，包括如何精选 Claude 3 Opus、Claude 3 Sonnet、GPT-3.5/4 等模型以优化任务执行；如何重构记忆系统，通过主题拆分提升信息检索效率；如何集成 Codex 的深度搜索能力，弥补内置搜索不足；以及如何利用 Claude Code 实现 Gateway 崩溃的自动诊断与修复，从而大幅提升系统稳定性和用户体验。
insight: ''
draft: true
series: ''
category: ai-application
area: tech-engineering
project: []
people: []
companies_orgs:
  - OpenAI
  - OpenClaw
products_models:
  - Codex
  - Claude 3 Opus
  - Claude 3 Sonnet
  - GPT-3.5
  - GPT-4
  - MiMax M2.1
media_books: []
status: evergreen
---
在春节期间，我虽然没有制作与 **OpenClaw** 相关的视频，但一直高强度地使用它，并总结了大量的经验和使用技巧。我甚至对 **OpenClaw Cloud** 的记忆系统进行了重构，将 **Open** 自带的 **Markdown** 文件记忆系统重构为 **LlamaIndex DB**（原文为 `lunth DB`）的记忆系统，以确保在执行复杂任务时，能够百分百命中记忆中所存储的踩坑经验、技术细节及方法论。

本期视频将分享几个具有代表性的 **OpenClaw** 使用经验和技巧。如果点赞量破千，我将在下期详细讲解如何重构 **OpenClaw Cloud** 的记忆系统，将其改为 **LlamaIndex DB**，并开源重构后的代码。

### 模型精选与任务适配

首先，经过高强度使用，我在 **OpenClaw** 中保留的模型并不多。我主要使用的是 **Anthropic** 的 **Claude 3 Opus 4.6** 模型。尽管 **Anthropic** 发布了最新的 **Claude 3 Sonnet 4.6**，但经过深度测试，我发现 **Claude 3 Sonnet 4.6** 的 **agentic**（**Agentic Capability**: AI 系统自主执行任务的能力）能力远不如 **Claude 3 Opus 4.6**。因此，在 **OpenClaw** 中，如果使用 **Anthropic** 的模型，我首选 **Claude 3 Opus 4.6**。

对于一些非复杂任务，我会选择 **OpenAI Codex** 中自带的 **GPT-3.5** 模型（原文为 `GPT 五点二模型`）。而 **GPT-4**（原文为 `GPT 五点三 codex 这款模型`）更适合用于编码场景，不适合在 **OpenClaw** 中执行 **agentic** 等相关任务。一个关键优势是，**Codex** 中自带的 **GPT-3.5** 模型额度比 **Claude 3 Opus 4.6** 要多很多。在使用 **GPT-3.5** 执行复杂任务时，我们可以直接使用 `think` 命令来设置其思考级别，默认是关闭的。根据任务复杂程度，我们可以选择 `high` 等级别来调整其思考深度。

此外，我还保留了一个 **MiMax M2.1** 模型。如果需要一个开源模型来处理任务，**MiMax M2.1** 是一个非常合适的选择，它与 **OpenClaw** 搭配效果很好，响应速度和推理能力在开源模型中表现出色。

### 记忆系统重构与优化

接下来，我将讲解 **OpenClaw** 与记忆相关的核心功能。之前，我将 **OpenClaw Cloud** 的记忆文件全部同步到 **GitHub** 进行备份。当记忆文件过多时，我创建了一个 `cloutopics` 文件夹，并将记忆按不同类别存放，例如：关于 **OpenClaw** 多 **agent** 的经验技巧、**OpenClaw** 配置相关的记忆、浏览器自动化经验、**Docker** 配置记忆、节点配置记忆等。我让 **OpenClaw** 将这些记忆做成了 **topics**，每个话题对应一个 **Markdown** 文件。这样，**OpenClaw** 就能根据场景按需加载不同记忆文件，使记忆更加明确。

要实现按 **topics** 拆分记忆，非常简单。只需在 **OpenClaw** 中指示它“按照主题来拆分 `memory.md` 这个文件”。**OpenClaw** 就能理解并执行，将 `memory.md` 文件拆分为索引和核心规则。拆分后，`memory.md` 文件体积会显著减小，例如从 15KB 的单文件变为 2.3KB，只存储索引和关键规则。拆分后的文件则放入 `memory topics` 文件夹，包含与 **OpenClaw Cloud** 配置、多 **agent** 协作、浏览器自动化、外部服务及技能、工作流规则等相关的记忆。

这种方式实现了 **memory search**（记忆搜索）按主题关键词搜索，从而达到精准命中的效果。每个主题独立扩展，互不干扰，并且可以方便地将新知识追加到对应的主题文件中。通过这种方法，用户可以将 **OpenClaw** 的 **memory** 功能按主题拆分成独立的文件。

### 增强搜索功能：集成 Codex 深度搜索

**OpenClaw** 自带的搜索功能非常有限，它支持 **Web Search**（需要设置 **Brave API**）和工具调用（主要用于 URL 内容抓取）。对于复杂的搜索需求，这些功能难以满足。为了增强 **OpenClaw** 的深度搜索能力，我编写了一个 **skill**（原文为 `clouskill`），利用了 **Codex** 强大的搜索功能。

**Codex** 的搜索能力属于“深度研究”（deeper research）。例如，在 **Codex** 中搜索“**cloud code agent teams** 的使用场景”，它会进行深度搜索并给出结果。我将 **Codex** 的搜索功能封装成 **skill** 并集成到 **OpenClaw Cloud** 中。在 **OpenClaw** 中，只需使用特定命令加上 **Codex**，即可调用此搜索功能，输入搜索内容，如“**cloud code agent teams** 的使用场景”。

当搜索任务发送后，**OpenClaw** 会提示已启动深度搜索。搜索完成后，会列出相关内容，甚至提供链接、详细分析和完整的检索报告。这样，我们就将 **Codex** 强大的搜索能力接入了 **OpenClaw**。

这个搜索功能的决策流程是：用户提出需求，首先判断是否输入 URL，若有则通过 **Web Fetch** 抓取网页内容为 **Markdown** 格式。若无 URL 或搜索内容简单，则调用自带的 **Brave** 进行搜索。当用户输入复杂、多元且需要深度研究的内容时，则调用 **Codex CLI** 进行多轮搜索。例如，输入提示词“调用 **Codex** 深入研究一下 **AI** 诊断的最新进展”，**Codex** 会快速给出近三到六个月的深度调研报告，包含核心结论、具体来源，甚至进行第二轮调研。通过 **skill** 集成 **Codex** 的深度搜索能力，有效弥补了 **OpenClaw** 自带搜索工具的不足。这个 **skill** 我也会放在笔记中。

### Gateway 重启防护机制

另一个非常重要的场景是 **OpenClaw Cloud Gateway** 的重启防护机制。在使用 **OpenClaw Cloud** 时，插件的 **bug** 可能导致 **Gateway** 异常退出且无法启动。我本人在凌晨就遇到了 **Gateway** 异常退出的情况，此时需要调用 **Claude Code**（原文为 `cloud code`）来修复导致 **Gateway** 无法启动的插件。

当 **Claude Code** 修复完成后，会提示 **Gateway** 已自动修复并重启成功。早上醒来看到日志提示时，我询问 **OpenClaw Cloud** 收到 **Gateway** 启动失败通知的原因。**OpenClaw Cloud** 分析 **Gateway** 进程崩溃原因，发现是 **钉钉插件** 在重连过程中抛出未捕获异常，导致整个进程崩溃。

当 **Gateway** 启动失败后，会触发自动修复服务。实现 **Gateway** 重启防护机制的流程是：当 **Gateway** 因异常原因崩溃退出时，会触发 **System Monitor**（原文为 `systestem on on ilyear`），自动启动修复服务。这个服务是一个脚本，它会自动读取 **Gateway** 日志，并将日志信息提供给 **Claude Code** 进行详细分析，包括 **OpenClaw JSON** 语法错误、插件配置错误、端口冲突等。

**Claude Code** 会根据日志定位问题、修改配置、验证 **JSON** 语法。修复后，它会重启 **Gateway**。重启八秒后，会再次检查 **Gateway** 是否仍在运行。如果运行正常，则修复成功。如果八秒后检测到 **Gateway** 进程不存在，则尝试第二次修复，重复上述过程。如果两次修复均未成功，则通过聊天软件通知用户介入。

这个功能包含相关的配置文件和脚本，我都会放入笔记中，用户只需将代码发送给 **OpenClaw** 即可自动设置。这样就实现了 **OpenClaw Cloud Gateway** 的自动修复，即使在无人值守状态下，**Gateway** 因插件 **bug** 崩溃，也能由 **Claude Code** 自动修复并恢复，无需人工干预。我们无需担心 **Gateway** 因异常退出而需要手动修复。

由于时间有限，本期视频就分享到这里。后续还将讲解更多关于 **OpenClaw** 的使用经验和技巧。欢迎大家点赞、关注和转发，谢谢观看。