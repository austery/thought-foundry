---
area: tech-engineering
author: null
category: ai-ml
date: 2025-10-19
layout: post.njk
project: []
published: null
source: https://www.youtube.com/watch?v=ufwIj6Ot0g4
speaker: 用AI發電
status: inbox
summary: 本次 Office Hour 是一场深入 Vibe Coding 实战的“难题会诊”。Mike 与社群成员们围绕一个核心问题展开：在真实的开发旅程中，我们如何跨越从“项目启动”到“长期维护”的种种障碍,分享会从最佳工具的选择（Codex
  vs Claude Code）开始，深入探讨了 iOS 与 Web 项目截然不同的测试工作流，并给出了如何启动一个全新项目（“脚手架”心法）以及如何重构一个混乱的旧项目（“Spec
  驱动”战术）的清晰路径。这份手册沉淀了本次讨论的精华，旨在为你提供一套可复用的思维模式与战术武器库。
tags: []
title: 20251019_Office Hour 直播答疑+分享AI新动向，你的 Vibe Coding 难题一网打尽！
---
### 导语：从工具选型到项目重构

本次 Office Hour 是一场深入 Vibe Coding 实战的“难题会诊”。Mike 与社群成员们围绕一个核心问题展开：在真实的开发旅程中，我们如何跨越从“项目启动”到“长期维护”的种种障碍？

分享会从最佳工具的选择（Codex vs Claude Code）开始，深入探讨了 iOS 与 Web 项目截然不同的测试工作流，并给出了如何启动一个全新项目（“脚手架”心法）以及如何重构一个混乱的旧项目（“Spec 驱动”战术）的清晰路径。这份手册沉淀了本次讨论的精华，旨在为你提供一套可复用的思维模式与战术武器库。

  

### 第一部分：核心心法 — Vibe Coding 的开发哲学

  

1\. SDD (Spec-Driven Development) 是 Vibe Coding 的默认模式

- **核心理念:** 在 Vibe Coding 时代，开发者的首要职责从“写代码”转变为“定义需求”。你就是 PM 或老板，你的工作是先将需求（Spec）想清楚、写明白。 *(Mike, 01:24:33)*
- **实战案例:** 当 Mike 需要重构一个复杂的 Mac 应用时，他没有直接上手改代码。而是先让 Gemini-CLI（一个擅长理解长上下文的 AI）通读整个项目，并撰写一份详细的重构方案（即 Spec） 。 *(Mike, 01:15:56)*
- **落地方法:** 当 AI 生成的代码不符合预期时，第一反应不应该是抱怨 AI，而是反思自己的 Spec 是否足够清晰。先去改进你的 Spec（需求文档），再让 AI 执行。 *(Mike, 01:24:33)*

  

2\. TDD (Test-Driven Development) 是“奢侈品”，早期阶段勿用

- **核心理念:** TDD（测试驱动开发）是一种古老的开发模式，它要求先写测试代码，再写功能代码。这种模式会极大地拖慢早期开发速度，是只有大型成熟企业（如 Google）才能负担的“奢侈品”。 *(Mike, 01:22:18)*, *(Mike, 01:23:03)*
- **战术建议:** 在项目早期，不要纠结于 TDD。你的目标是快速验证。如果你写 100 行功能代码，却要AI写 500 行测试代码，这在项目频繁重构的阶段是巨大的浪费。 *(Mike, 01:23:03)*
- **何时引入:** 当你的产品开始有真实用户（例如 100 个或 1000 个）并开始产生收入时，再回头让 AI 帮你补充测试代码，以确保稳定性。 *(Mike, 01:23:53)*

  

3\. 用“制定计划”的方式重构混乱的项目

- **核心理念:** 判断一个项目是否需要重构的信号是：当你让 AI 修复一个 Bug 时，它却搞坏了另外两个功能。这说明项目已经“太乱了”，AI 无法理解其全貌。 *(Mike, 01:15:36)*
- **落地方法:**
	1. **规划 (Planning):** 使用一个具有超长上下文能力的 AI（如 Gemini-CLI）完整地读取你当前的项目。 *(Mike, 01:20:49)*
	2. **生成 Spec:** 命令它分析项目结构，并生成一个详细的“重构计划”（Refactoring Plan），并将其保存为 Markdown 文件。 *(Mike, 01:22:30)*
	3. **执行 (Execution):** 将这份“重构计划”交给一个编码能力最强的 AI（如 Codex），让它来执行这个复杂的重构任务。 *(Mike, 01:22:42)*

  

### 第二部分：工具与武器库 — 主力 AI 工具对比

  

1\. OpenAI Codex：高精度、高挑战的“重装步兵”

- **适用场景:** 解决非常复杂、有挑战性的问题；或者你“懒得”写详细 prompt 时。 *(Mike, 00:05:22)*
- **核心优势:** 准确性极高。它会花很长时间“思考”（thinking），因为它在执行前会阅读和理解项目中的大量代码。 *(Mike, 00:04:35)*, *(Mike, 01:16:33)*
- **核心劣势:** 速度慢。不适合简单的、所见即所得的修改。

  

2\. Anthropic Claude Code：快速、敏捷的“轻骑兵”

- **适用场景:** 简单、快速的任务，尤其是修改 UI 或做一些简单的东西。 *(Mike, 00:07:07)*, *(Mike, 00:36:03)*
- **核心优势:** 速度快，反应敏捷。
- **核心劣势:**
	1. **上下文短:** Claude Code 的上下文窗口相对较短，塞入太多 MCP（工具）会很快占满空间。 *(Mike, 00:46:58)*
	2. **订阅陷阱:** 20 美元的 Pro 版额度极易用尽，是“最不值”的档位。而 200 美元的 Max 版则提供了远超 10 倍的用量，是重度用户的选择。 *(Mike, 00:35:48)*, *(Min, 09:06:49)*

  

3\. Google Gemini 2.5 Pro：全局规划的“战略家”

- **适用场景:** 启动新项目、做头脑风暴、规划技术栈、阅读整个项目并制定重构计划。 *(Mike, 00:18:56)*, *(Mike, 00:45:27)*
- **核心优势:** 上下文窗口长，与 Google Search 结合紧密，输出内容“有人味”。 *(Mike, 00:45:27)*
- **核心劣势:** *目前*（2025年10月）的 Gemini 2.5 Pro 执行编码任务的能力较差，不适合作为主力执行工具。 *(Mike, 00:44:56)*

  

### 第三部分：高级战术与工作流

  

1\. 战术一：Web vs iOS 截然不同的测试工作流

- **Web 项目（可云端测试）:**
	- Codex 的网页版运行在 Linux 环境中。 *(Mike, 00:08:28)*
	- 你可以命令 AI 运行自动化测试脚本（定量测试）。 *(Mike, 00:12:03)*
	- **高级技巧:** 你可以命令 Codex 在修改网页后“截屏”（take screenshots），它会返回一张截图，让你直观地判断修改是否正确（定性测试）。 *(Mike, 00:10:43)*, *(Mike, 00:15:54)*
- **iOS/Mac 项目（必须本地测试）:**
	- **限制:** 由于苹果的许可协议和 Mac 虚拟机的昂贵成本，所有 AI 编码工具（包括 Codex）都无法在云端编译或运行 iOS/Mac 应用。 *(Mike, 00:13:43)*
	- **标准工作流:**
		1. AI 在云端根据你的 Spec 编写 Swift 或 Objective-C 代码。
		2. AI 在 GitHub 上创建或更新一个 Pull Request (PR)。 *(Mike, 00:09:45)*
		3. 你（开发者）在本地电脑上，git fetch 并 git checkout 到 AI 创建的那个分支。 *(Mike, 00:10:04)*
		4. 打开 Xcode，手动编译、运行和测试。 *(Mike, 00:09:07)*
	- **iOS 自动化工具:** 如果想在本地实现类似 Playwright 的自动化点击，可以研究 XcodeBuildMCP 和 Maestro 这两个工具。 *(Mike, 00:29:10)*, *(Mike, 00:30:00)*

  

2\. 战术二：如何从零启动一个新项目（脚手架）

- **方法一 (白手起家 - 最通用):**
	1. 打开 ChatGPT 或 Gemini 2.5 Pro (网页版)。
	2. 像聊天一样，与它深入讨论你的产品需求、目标用户、技术选型（如 “我想用 Next.js 做个 ChatGPT 克隆”）等。 *(Mike, 00:18:42)*
	3. 在聊了几十轮，你满意之后，命令它：“请总结我们所有的讨论，并为我生成一份开发文档（[agents.md](http://agent.md/)）。” *(Mike, 00:19:25)*
	4. 将这份文档放入你的新项目，开始 Vibe Coding。
- **方法二 (善用模板 - 更快速):**
	1. 去 GitHub 搜索关键词，如 "AI Chatbot Template"。 *(Mike, 00:22:11)*
	2. **如何筛选:** 只看那些“上周刚更新”的（而不是“两年前”），并且 Star 数很高的项目。 *(Mike, 00:22:52)*
	3. 以此为基础开始开发。

  

3\. 战术三：如何判断 Codex CLI 是否“卡住了”

- **问题:** Codex CLI 经常长时间显示 thinking，无法判断是真在工作还是已经死机。 *(Wayne Luo, 01:04:51)*
- **解决方案:** 在 Codex CLI 运行时，按下 Ctrl + T (Windows/Linux) 或 Cmd + T (Mac)。 *(Mike, 00:58:44)*
- **效果:** 这会打开一个“Transcript Mode”（转录模式）侧边栏，它会实时显示 AI 内部正在执行的所有子任务和思考链（Chain of Thought）。如果这里在持续滚动刷新，说明它在正常工作；如果长时间没反应，说明它可能卡住了。 *(Mike, 00:59:00)*, *(Mike, 01:06:15)*

  

4\. 战术四：“Prompt Engineering” 正在变得不那么重要

- **观察:** 随着 GPT-5 等新模型的“智力”不断增强，我们花在 prompt engineering（提示词工程）上的精力应该越来越少。 *(Mike, 00:39:00)*
- **理念:** 早期，我们用复杂的 prompt（如设置8个 Agent、18个 slash command）来弥补 AI 的不足。而现在，AI 应该更好地理解我们的“自然语言”需求。 *(Mike, 00:40:03)*
- **结论:** 与其花时间折腾 Spec Kit 或复杂的 slash command，不如花时间把 Spec（需求）用大白话说清楚。 *(Mike, 00:41:16)*, *(Mike, 01:17:34)*

  

### 第四部分：资源与链接库 (来自聊天室)

  

1\. 核心工具与框架

- **Codex CLI:** OpenAI 出品的命令行 Vibe Coding 工具。
	- *文档:* [https://developers.openai.com/codex/cli/](https://developers.openai.com/codex/cli/)
	- *安装/更新命令:* npm install -g @openai/codex@latest
- **Maestro:** 用于 iOS 和 Android 的 UI 自动化测试框架（Playwright 的替代品）。
	- *官网:* [https://maestro.dev/](https://maestro.dev/)
	- *MCP 文档:* [https://docs.maestro.dev/getting-started/maestro-mcp](https://docs.maestro.dev/getting-started/maestro-mcp)
- **XcodeBuildMCP:** 一个用于 Codex 的 MCP，允许 AI 在本地构建和测试 Xcode 项目。
	- *GitHub:* [https://github.com/cameroncooke/XcodeBuildMCP](https://github.com/cameroncooke/XcodeBuildMCP)
- **DeepWiki:** 一个 GitHub 项目索引工具，可作为 MCP 使用。
	- *官网:* [https://deepwiki.org/](https://deepwiki.org/)
- **ast-grep:** 语法感知的搜索工具，可作为 MCP，比普通 grep 更懂代码。
	- *Mike 的配置片段 (用于 AI 指令):* whenever a search requires syntax-aware... default to ast-grep...
- **Electron Forge vs Electron Builder:** 用于打包 Electron 应用的两个主要工具。 *(Mike, 00:57:43)*

  

2\. 辅助插件与服务

- [**10xwise Multi-AI Chat**](https://chromewebstore.google.com/detail/10xwise-multi-ai-chat/jamoinmdfbdocjnggffobhmpogbolncp)**:** Mike 开发的 Chrome 插件，用于在同一个界面上向多个 AI Chatbot 提问。
- [**Artificial Analysis**](https://artificialanalysis.ai/)**:** AI 模型性能排行榜，用于追踪最新模型的编码和推理能力。

  

3\. 关键人物

- [**Peter Steinberger**](https://x.com/steipete)**:** 资深 Vibe Coding 开发者，Mike 采纳了他关于 Claude 订阅和 prompt engineering 演进的观点。

  

4\. 关键配置与命令

- **Gemini CLI (长上下文模式):** Mike 分享的用于让 Gemini CLI 读取整个项目文件的配置。
	- *配置片段:* Gemini CLI (huge-context mode) Invoke with: gemini -p ""..."" Include files or folders via @...
- **npm install:** 在检出旧项目时，使用 npm install 会读取 package-lock.json 文件，以确保安装完全一致的依赖版本。 *(Mike, 01:01:52)*
- **Ctrl + T:** 在 Codex CLI 中查看“转录模式”的快捷键。 *(Mike, 00:58:44)*

  

### 行动清单 (给所有社区成员)

  

1. **检视你的 AI 订阅:** 如果你重度使用 Claude Code 且 20 美元额度总是不够用，请评估 Codex 是否更适合你，或者考虑升级到 Claude 的 Max 套餐。 *(Mike, 00:35:48)*
2. **启动 iOS 项目:** 如果你有 iOS 开发的想法，现在就开始。社群即将推出 iOS 专项课程，覆盖从开发到上架 App Store 的全流程。 *(Mike, 01:20:19)*
3. **重构你的旧项目:** 如果你的项目已变得混乱，本周尝试使用 Gemini-CLI 通读你的项目，并让它为你生成一份“重构 Spec”。
4. **停止过度 TDD:** 如果你还在项目早期，请停止在 TDD 上花费过多时间。专注于 SDD——把你的需求 Spec 写得更清晰。 *(Mike, 01:23:27)*
5. **更新 Codex:** Codex CLI 更新频繁，请定期运行 npm install -g @openai/codex@latest 以获取最新的功能和 Bug 修复。 *(Mike, 01:07:39)*