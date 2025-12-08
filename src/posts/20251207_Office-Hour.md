---
title: 20251207_Office Hour——带上你的问题和作品：Vibe Coding 答疑 & 项目分享会
source: https://www.youtube.com/watch?v=ReD3lmEPWwE
speaker: 为AI发电
author:
published:
summary: 在这个飞速变化的AI时代，我们正在见证一场从“手工编写代码”到“设计系统规格”的职能跃迁。本期 Office Hour 不仅仅是一场技术分享，更是一次关于“如何驾驭AI超级员工”的深度复盘。从 Mike 老师对 Google 最新工具的评测，到 Ron 仅用两人团队就重构庞大工业洗衣系统的实战案例，我们看到了一个共同的趋势： **未来的超级个体，不再是代码的搬运工，而是逻辑的编排者和文档的架构师。**
tags:
  - ai-coding
status: inbox
insight:
project:
category:
area:
aliases:
layout: post.njk
created: 2025-12-07T08:58
updated: 2025-12-07T08:58
---



### 导语：

在这个飞速变化的AI时代，我们正在见证一场从“手工编写代码”到“设计系统规格”的职能跃迁。本期 Office Hour 不仅仅是一场技术分享，更是一次关于“如何驾驭AI超级员工”的深度复盘。从 Mike 老师对 Google 最新工具的评测，到 Ron 仅用两人团队就重构庞大工业洗衣系统的实战案例，我们看到了一个共同的趋势： **未来的超级个体，不再是代码的搬运工，而是逻辑的编排者和文档的架构师。**

---

### 第一部分：核心理念 — 所有的应用，本质上都是文档

1\. 摆脱“代码焦虑”，拥抱“文档驱动开发” (Spec-Driven Development)

- **核心理念:** 在 AI 编程时代，程序员的核心竞争力正在从“写代码”转移到“写需求文档” (Markdown/Spec)。如果你能清晰地用自然语言和结构化文档描述需求，AI 就能帮你实现剩下的 99%。 *(Ron, 01:22:46)*
- **实战案例:****Ron 的工业洗衣厂管理系统** 。Ron 是一个拥有十几个工厂员工和车队的洗衣厂老板。他辞退了原有的4人外包团队，仅凭自己和一个助手，利用 AI (Cloud Code/Codex) 开发出了一套包含车辆调度、RFID 扫码、多租户管理等复杂功能的 ERP 系统。他完全不写一行手写代码，而是专注于维护 Specs 目录下的 Markdown 需求文档。 *(Ron, 01:03:21)*
- **落地方法:**
	1. **Spec (规格):** 用自然语言对着麦克风说出需求，让 AI 生成 Spec 文档。
	2. **Clarify (澄清):** 让 AI 反复校验文档，提出漏洞并修改。
	3. **Plan & Task (计划与任务):** 基于文档生成 Task 列表和 Phases (阶段)。
	4. **Code (编码):** AI 根据任务自动写代码。
	5. **Review (审查):** 甚至连 Spec 文档本身，都要让 AI 进行 Review。 *(Ron, 01:10:27)*

2\. “文件夹即应用” (Folder as an App) 与 知识库的祛魅

- **核心理念:** 复杂的 RAG (检索增强生成) 和向量数据库并不是个人知识库的唯一解。最强大的模型往往建立在人类和 AI 都最熟悉的基础上——文件系统 (File System)。将数据导出为 Markdown 文件夹，直接“喂”给 AI，往往比复杂的数据库更有效。 *(Mike, 00:23:31)*
- **实战案例:****Mike 的课程与生活管理** 。Mike 将 Apple Notes、Notion 等所有笔记导出为 Markdown 文件夹，直接使用 VS Code 或 Cursor 打开，配合 AI 进行对话。无论是课程录制的知识点总结，还是家庭购物清单，都通过直接读取这个文件夹来完成，无需维护复杂的向量库。 *(Mike, 00:25:06)*
- **落地方法:**
	- **去数据库化:** 将 Notion/Obsidian 等笔记导出为纯 Markdown 文件。
	- **统一入口:** 使用支持 codebase 索引的 AI 编辑器 (如 Cursor, VS Code with AI plugins) 打开该文件夹。
	- **项目化管理:** 把你的生活和知识库当做一个“项目”来管理，用 Git 追踪变更，随时回滚。 *(Mike, 00:31:56)*

---

### 第二部分：工具与武器库 — Google 的反击与社区利器

本期重点讨论了 Google 最新发布的 AI 编程工具链以及社区验证的高效组合。

  

---

### 第三部分：高级战术与宝贵教训

1\. 战术：用“宪章” (Charter) 约束 AI 行为

- **问题:** AI 在长期项目中容易“放飞自我”，忘记项目规范（如：必须用框架不能造轮子、多租户预留、多语言支持）。
- **解决:** 建立一个 Charter (宪章) 文件，包含所有不可违背的技术原则和业务规则。在每次生成代码前，强制要求 AI 阅读并遵守该宪章。虽然 AI 偶尔还会忘，但能显著提高代码合规性。 *(Ron, 01:18:14)*

2\. 战术：Markdown “急救包”

- **问题:** 当项目进行到 60%-80% 时，bug 频出，AI 开始“按了葫芦起了瓢”，陷入死循环。
- **解决:****停止写代码，开始写 Markdown** 。在代码旁边新建一个 Markdown 文件，详细记录当前遇到的问题、上下文和分析。让 AI 读取这个 Markdown 文件来“恢复记忆”和“理清思路”，而不是仅靠有限的上下文窗口。这能有效降低开发者的心智负担。 *(Frank & Mike, 00:55:35)*

3\. 战术：AI 互评机制 (AI Reviewing AI)

- **问题:** 单个 AI 模型容易产生幻觉或逻辑漏洞。
- **解决:** 建立 Review 流水线。Ron 的团队使用 GitHub PR 流程，先让 AI 生成代码 (Cloud Code)，然后提交 PR，再让另一个逻辑更强的模型 (Codex) 进行 Code Review，找出深层次 bug，最后再让前者进行 Fix。这是一个“左右互搏”的质量保证机制。 *(Ron, 01:13:50)*

---

### 第四部分：资源与链接库 (来自聊天室)

**工具与软件：**

- **Bear (笔记软件):**[https://bear.app/](https://bear.app/) - *(Min, 09:47:51)*
- **Antigravity (Google 开发工具):**[https://antigravity.google/](https://antigravity.google/) - *(Min, 10:10:58)*
- **Artificial Analysis (模型评测):**[https://artificialanalysis.ai/](https://artificialanalysis.ai/) - *(Mike, 10:12:28)*
- **Jules (Google 代码助手):**[https://jules.google.com/session](https://jules.google.com/session) - *(Min, 10:14:14)*
- **XcodeBuildMCP (Xcode 自动化工具):**[https://github.com/cameroncooke/XcodeBuildMCP](https://github.com/cameroncooke/XcodeBuildMCP) - *(Min, 10:22:39)*
- **Linear (项目管理):**[https://linear.app/](https://linear.app/) - *(Min, 10:28:14)*

**开源项目与方法论：**

- **OpenSpec (规格说明书标准):**[https://github.com/Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) - *(Frank, 10:33:24)*
- **Spec Kit (规格工具包):**[https://github.com/github/spec-kit](https://github.com/github/spec-kit) - *(Mike, 10:33:36)*
- **BMAD-METHOD (AI 架构方法):**[https://github.com/bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) - *(大雷, 10:56:25)*

**课程与学习资源：**

- **你的 APP 不非得是 APP (Folder as an App):**#「初級以上」打造你的AI Agent 工具箱 (Folder as an APP 直播課)
- **OpenAI Codex 树状开发:**重要的事情做4遍。颠覆传统工作流：用OpenAI Codex实践"树状开发"，开启从设计到修复Bug的全流程革命。效率提升 4 的 N 次方倍（OpenAI 已经为此计费，请小心使用）

---

### 行动清单 (给所有社区成员)

1. **尝试“去代码化”:** 在你的下一个 Side Project 中，尝试写一份详尽的 Markdown 需求文档 (Spec)，而不是直接开始写代码。
2. **体验 Google 新全家桶:** 如果你有 Google AI 订阅，尝试申请 Antigravity 或使用 Gemini 3 来优化你的 UI 设计。
3. **建立你的“宪章”:** 为你的项目写一份 [CHARTER.md](http://charter.md/) ，列出你的技术偏好和红线，看看 AI 的表现是否有所提升。
4. **整理知识库:** 尝试将散落在各处的笔记导出到一个文件夹中，用 AI 编辑器打开它，体验“与知识库对话”的感觉。