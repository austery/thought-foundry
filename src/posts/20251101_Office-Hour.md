---
area: tech-engineering
author: null
category: ai-ml
date: 2025-11-01
layout: post.njk
project:
- ai-impact-analysis
published: null
source: https://www.youtube.com/watch?v=Paa-17FrDBU
speaker: 用AI發電
status: inbox
summary: 欢迎来到本周的实践分享会！本次分享会深入探讨了 AI 辅助编程的最新动向和核心“心法”。Mike Chong 和社群成员们分享了从 Google、OpenAI
  的最新工具，到“单打独斗”时如何解决 UI 设计、安全和顽固 Bug 的高级战术。这份实战手册将为你提炼这场分享的精髓。你将学到的不仅仅是工具的罗列，更是一种全新的思维模式——**从依赖特定工具，转向掌握可跨平台复用的“Vibe
  Coding”心法**。无论你是刚入门的小白还是经验丰富的开发者，这份手册都将帮你更快地驾驭 AI，让它成为你最强大的编码伙伴
tags: []
title: 20251101_Office Hour：AI又“进化”了！如何跟上脚步？
---

### 导语：从"工具使用者"到"心法掌握者"

欢迎来到本周的实践分享会！本次分享会深入探讨了 AI 辅助编程的最新动向和核心“心法”。Mike Chong 和社群成员们分享了从 Google、OpenAI 的最新工具，到“单打独斗”时如何解决 UI 设计、安全和顽固 Bug 的高级战术。

这份实战手册将为你提炼这场分享的精髓。你将学到的不仅仅是工具的罗列，更是一种全新的思维模式——**从依赖特定工具，转向掌握可跨平台复用的“Vibe Coding”心法**。无论你是刚入门的小白还是经验丰富的开发者，这份手册都将帮你更快地驾驭 AI，让它成为你最强大的编码伙伴。

---

## 第一部分：核心理念 — AI 编码的范式转移

### 1\. 心法一：从“复杂指令”到“直接对话” (Just Talk To It)

- **核心理念:** 随着 AI 模型（特别是 Codex）的理解能力飞跃，我们不再需要设计极其复杂的 Prompt 或多代理系统 (Multi-agents)。最高效的方式已经回归到“直接用自然语言和 AI 对话” *(Mike Chong, 00:09:59 - 00:10:11)*。
- **实战案例:** Mike Chong 引用了著名开发者 Peter Steinberg 的观察：AI 编码正从复杂的“多代理”系统 *(Mike Chong, 00:09:44 - 00:09:55)*，演变为更简单的“你帮我修复这个”的对话模式 *(Mike Chong, 00:10:07 - 00:10:11)*。
- **落地方法:** 不要过度担心你的 Prompt 写得不够“专业”或不够好 *(Mike Chong, 00:10:40 - 00:10:44)*。现代 AI 正在降低使用门槛，你只需要多用、多尝试，就能感受到它强大的自然语言理解能力 *(Mike Chong, 00:10:48 - 00:10:52)*。

### 2\. 心法二：掌握“心法”，而非迷信“工具”

- **核心理念:** AI 编码工具（如 Codex, Claude Code, Cursor）的竞争异常激烈，功能正在迅速趋同 *(Mike Chong, 00:22:19 - 00:22:38)*。真正的护城河不是你会用哪个工具，而是你掌握了 Vibe Coding 的核心思维模式 *(Mike Chong, 00:23:42 - 00:23:50)*。
- **实战案例:** 针对 Kelly 关于 Cursor 和 Claude Code 课程选择的提问 *(Mike Chong, 00:22:05 - 00:22:13)*，Mike 指出，这些工具的入门课程非常相似 *(Mike Chong, 00:23:09 - 00:23:15)*。
- **落地方法:** 根据你当前的预算和订阅情况（Budget-driven）选择工具即可 *(Mike Chong, 00:23:30 - 00:23:38)*。社群的目标是教大家掌握一套通用的 Mindset，无论你切换到任何新工具，都能快速上手 *(Mike Chong, 00:23:46 - 00:23:58)*。

---

## 第二部分：工具与武器库 — 2025 年末 AI 编码利器

本期分享重点介绍了几个核心工具，以及它们之间的关键区别：

  

---

## 第三部分：高级战术与宝贵教训 (来自 Q&A)

### 1\. 战术一：如何修复 AI 反复出错的“顽固 Bug”？

- **问题:** 当 AI 在 Debug 时陷入循环，反复提供错误方案怎么办？ *(Leon Zhang, 00:57:01 - 00:57:08)*
- **战术 1 - 万能的 Log/Print:** 这是 Mike 首推的战术。**让 AI 在代码的每一步关键流程中，都插入 print 或 log 语句** *(Mike Chong, 00:50:46 - 00:51:01)*，输出中间变量和状态。
- **战术 2 - 让 AI“自查”:** 将 AI 生成的 Log/Print 日志，**原封不动地复制粘贴回给 AI** *(Mike Chong, 00:52:19 - 00:52:27)*，让它自己分析日志、定位问题。
- **战术 3 - 提升“算力预算”:** 当遇到难题时，临时提升 AI 的“思考深度”。
	- 在 **Codex** 中：将模式从 Medium 切换到 High *(Mike Chong, 00:58:51 - 00:58:59)*。
	- 在 **Claude Code** 中：使用 ultrathink 魔法指令 *(Mike Chong, 00:59:07 - 00:59:15)*。

---

### 第四部分：资源与链接库 (来自聊天室)

  

核心工具与平台

- **Google AI Studio:** [https://aistudio.google.com/app/apps](https://aistudio.google.com/app/apps)
- **OpenAI Codex:** [https://openai.com/codex/](https://openai.com/codex/)
- **Minimax M2 (OpenRouter):** [https://openrouter.ai/minimax/minimax-m2:free](https://openrouter.ai/minimax/minimax-m2:free)
- **Vercel (部署平台):** [https://vercel.com](https://vercel.com/)
- **Supabase (后端/数据库):** [https://supabase.com/](https://supabase.com/)
- **Figma (UI 设计):** [https://www.figma.com](https://www.figma.com/)
- **OpenCode (开源编码工具):** [https://opencode.ai/](https://opencode.ai/)

  

UI/UX 设计资源

- **Mobbin (设计灵感):** [mobbin.com](http://mobbin.com/)
- **React Grab (UI 代码定位):** [https://www.react-grab.com/](https://www.react-grab.com/)
- **shadcn/ui (AI 友好组件库):** [https://ui.shadcn.com/](https://ui.shadcn.com/)
- **TweakCN (shadcn 样式调整):** [https://tweakcn.com/](https://tweakcn.com/)

  

AI 语音与安全

- **Google (AI Studio Vibe Coding):** [https://blog.google/technology/developers/introducing-vibe-coding-in-google-ai-studio/](https://blog.google/technology/developers/introducing-vibe-coding-in-google-ai-studio/)
- **OpenAI (Aardvark 安全研究):** [https://openai.com/index/introducing-aardvark/](https://openai.com/index/introducing-aardvark/)
- **OpenAI (GPT-4o Mini 语音转录):** [https://platform.openai.com/docs/models/gpt-4o-mini-transcribe](https://platform.openai.com/docs/models/gpt-4o-mini-transcribe)
- **ElevenLabs (语音合成):** [https://elevenlabs.io](https://elevenlabs.io/)
- **WisprFlow (语音流):** [https://wisprflow.ai](https://wisprflow.ai/)
- **ByteDance (豆包语音 API):** [https://seed.bytedance.com/zh/special/realtime\_voice](https://seed.bytedance.com/zh/special/realtime_voice)
- **Artificial Analysis (语音转文字测评):** [https://artificialanalysis.ai/speech-to-text](https://artificialanalysis.ai/speech-to-text)

  

深度文章与社区资源

- **文章："Just Talk To It"** [https://steipete.me/posts/just-talk-to-it](https://steipete.me/posts/just-talk-to-it)
- **社群设计课程:** [https://member.pathunfold.com/c/design-x-ai/](https://member.pathunfold.com/c/design-x-ai/)
- **CapacitorJS (Web 打包成 App):** [https://capacitorjs.com](https://capacitorjs.com/)
- **Lenny's Product Pass:** [https://lennysproductpass.com](https://lennysproductpass.com/)

  

优惠与用量查询

- **ChatGPT Business Plan (1美元优惠):** [https://chatgpt.com?promo\_campaign=team1dollar](https://chatgpt.com/?promo_campaign=team1dollar)...
- **Codex 用量查询:** [https://chatgpt.com/codex/settings/usage](https://chatgpt.com/codex/settings/usage)
- **Claude 用量查询:** [https://claude.ai/settings/usage](https://claude.ai/settings/usage)

  

### 行动清单 (给所有社区成员)

1. **检查你的 AI 订阅:** 你是否为多个功能重叠的平台付费？根据本手册的对比，选择一个主力工具（如 Codex），并取消其他不必要的订阅。
2. **尝试“日志调试法”:** 下次遇到顽固 Bug 时，不要和 AI 反复拉扯。命令它在每一步 print 状态，然后把日志扔回给它分析。
3. **重构你的** [**AGENTS.md**](http://agents.md/)**:** 检查你是否把“数据”和“知识”混在了一起。尝试用“索引 + 指针”的策略重构你的项目，以节约宝贵的 Context。
4. **开始一个项目 (如果你是新手):** 不要纠结于先学哪个编程知识 *(Mike Chong, 01:22:25 - 01:22:56)*。先动手，让 AI 帮你构建一个原型 (MVP)，然后再让 AI 反过来“教会”你这个项目的基础知识 *(Mike Chong, 01:23:26 - 01:23:42)*。