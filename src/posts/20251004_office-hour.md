---
title: 20251004 office hour小白專場 開放問答
source: https://www.youtube.com/watch?v=aJs-8slesUA
speaker: 用AI發電
author:
date: 2025-10-04
published:
summary: 欢迎来到本次的“小白专场”开放问答实战手册。这是一场关于如何将AI深度融入从编码、调试到产品构思、市场推广全流程的思维风暴。在本手册中，我们将跟随社区成员的真实问题，提炼出那些能够被反复使用的核心“心法”与“战术”。无论你是正在与AI Agent搏斗的开发者，还是探索产品化路径的创业者，这份手册都将为你提供宝贵的、可立即上手的行动指南。
tags:
  - ai-coding
status: inbox
area: tech-insights
category: technology
project:
- ai-impact-analysis
layout: post.njk
---

  

### 第一部分：核心理念 — AI时代下的个体生存法则

  

1\. AI驱动的全栈开发：从“指令下达者”到“系统设计师”

- **核心理念:** 在与AI协作开发时，最高效的模式不是让AI盲目执行单步指令，而是将自己定位为系统设计师，通过提供清晰的上下文、规则和边界（如设计文档），引导AI在正确的框架内进行创造，从而大幅减少返工和无效沟通。 *(Victoria, 01:17:54)*
- **实战案例:** 成员Victoria在开发中遇到一个典型问题：当她让AI将一个已实现且调试好的功能模块迁移到页面的另一部分并增加新功能时，AI不仅重新设计了原有UI，甚至重新引入了已经修复过的Bug。 *(Victoria, 01:16:32)* 这暴露了一个核心痛点：如何精确控制AI的修改范围。
- **落地方法:**
	- **用AI的语言沟通:** 在修改前，先让AI（如Codex的Chat功能）总结现有代码的结构。然后，使用AI总结出的术语（如特定的区域、按钮名称）来下达指令，可以极大地增强指令的靶向性，避免误伤。 *(Victoria, 01:17:54)*
	- **善用高算力模式:** 当任务复杂或AI出现“倒退”现象时，果断开启高算力/深度思考模式。在Cloud Code中使用Ultra-Sink指令，或在Codex中将Reasoning Effort设置为“High”，虽然会消耗更多Token，但能显著提升AI的理解力和执行准确性，避免低级错误。 *(Mike Chong, 01:20:02)*
	- **文档驱动开发:** 对于项目中稳定、核心的模块（如登录、认证），或者你花费大量时间才解决的复杂Bug，应当让AI将其解决方案和技术设计固化为Markdown文档。当开启新项目或AI出现“遗忘”时，让它首先阅读这些文档，以此作为不可逾越的“铁律”。 *(Mike Chong, 01:25:45)*
	- **隔离上下文:** 当AI在一个长对话中反复犯错时，很可能是受到了错误上下文的污染。果断清除或重置会话（Reset Session），只针对当前问题进行提问，有时能奇迹般地解决问题。 *(Mike Chong, 01:20:58, Evan Chen, 01:25:55)*

  

2\. “先价值，后用户”的产品冷启动法则

- **核心理念:** 在产品初期，最稀缺的资源不是金钱，而是用户的注意力。因此，首要目标不应是思考如何定价，而是如何通过免费或极低成本的方式，为一小撮“潜在用户”创造不可或缺的价值，让他们愿意花费时间，从而启动价值飞轮。 *(Mike Chong, 01:29:42)*
- **实战案例:** Mike和Ray正在开发一款名为Trinity Camera的相机App，它利用iPhone 17 Pro前置摄像头的新特性，解决了竖持手机拍摄高质量横屏视频的痛点，同时集成了提词器功能，精准地服务于内容创作者这一垂直人群。 *(Mike Chong, 00:30:27, 00:09:27)* 他们深知，只有先解决自己的痛点，并让一小批早期用户（如社区内的Vlogger）感受到效率的巨大提升，产品才具备了后续商业化的基础。 *(Mike Chong, 00:10:20)*
- **落地方法:**
	- **找到“不公平优势”:** 你的产品必须解决一个现有方案无法完美解决的问题。Trinity Camera的优势在于抓住了最新硬件（iPhone 17 Pro）带来的独特功能窗口期，这是其他竞品暂时无法复制的。 *(Mike Chong, 00:08:22)*
	- **Freemium不是免费，是投资:** 推出免费增值（Freemium）模式，本质上是用免费功能去换取用户的宝贵时间和反馈。当产品为用户创造的价值足够大，甚至让你的服务器成本变得“难以负担”时，这恰恰是开启收费的最佳时机。 *(Mike Chong, 01:29:42, Victoria, 01:27:51)*
	- **与注意力“巨头”竞争:** 你的竞争对手不只是同类产品，更包括TikTok、Instagram等一切抢夺用户时间的应用。在设计产品时，必须思考如何让用户认为“花时间在你的产品上”比“刷短视频”更有回报。 *(Mike Chong, 01:30:05)*

  

3\. 在自动化浪潮中锚定个人品牌

  

- **核心理念:** 创意工作（如内容创作）的自动化存在一个临界点。过度自动化会稀释个人风格，损害品牌价值。真正的策略是，将可标准化的执行环节（如视频剪辑、信息整理）交给AI，而将无法被替代的个人洞察、风格和创意牢牢掌握在自己手中。 *(Mike Chong, 01:00:18)*
- **实战案例:** 成员Heidi在尝试用AI生成小红书文案时，发现即使提供了优秀的范例，AI生成的文案仍然“千篇一律”，缺乏个人特色。 *(Heidi Zhang, 00:49:11)* 这引出了一个核心矛盾：我们追求效率，但不能以牺牲品牌独特性为代价。
- **落地方法:**
	- **手动打磨System Prompt:** 将你的世界观、写作风格、口头禅、价值观等核心元素，[手动整理并注入到一个专属的claude.md](http://xn--claude-9m7i6eoi791a2jcdybs03eiegnpp4jm104a800au5j.md/)或system prompt中。这个过程无法完全自动化，它本身就是定义你个人品牌的过程。 *(Mike Chong, 00:52:16)*
	- **“做不可规模化的事”:** Paul Graham的经典名言“Do Things That Don't Scale”在AI时代依然适用。在内容创作初期，手动收集素材、手动调整AI生成的初稿，是建立高质量和独特风格的必经之路。当你验证了某个模式确实可行后，再思考如何将“执行”环节自动化。 *(Mike Chong, 01:00:03)*
	- **多模型协作，而非单一依赖:** 不同的AI模型有不同的“性格”和优势。例如，Gemini 2.5 Pro在文案写作上表现不俗；Grok因其信息时效性高，适合做技术或新闻类内容；Claude则有强大的长文本理解能力。像组建一个团队一样，让多个模型为你服务，取长补短。 *(Mike Chong, 00:55:03)*

  

### 第二部分：工具与武器库 — 效率革命的利器

  

1\. 开发与调试智能体 (AI Agents)

- **Claude Code & Codex:** 作为核心的AI编程助手，它们的能力远不止于代码补全。通过开启**Max Reasoning**或使用**Ultra-Sink**等高级指令，可以将它们从“代码工人”提升为“解决方案架构师”。 *(Mike Chong, 01:20:29)*
- **Playwright-mcp & Chrome Devtools:** 这两个工具是实现网页端自动化调试的关键。它们能让AI“看见”网页的报错信息，并直接定位到问题文件，实现真正的自动化Debug。 *(Mike Chong, 00:24:49)*
- **Maestro:** 一款优秀的移动端（手机App）自动化测试框架，相比传统工具，它的学习曲线更平缓，能有效解决移动端测试自动化的难题。 *(Mike Chong, 00:35:14)*
- **Gumroad's "shortest":** 一个开源库，允许用自然语言来描述和执行UI测试，进一步降低了自动化测试的门槛。 *(Mike Chong, 00:33:33)*

  

2\. 工作流自动化平台

- **N8N:** 强大的开源工作流自动化工具。社区案例展示了如何通过N8N，实现每周五定时抓取新课程信息，并自动在社区发布更新帖，完全无需人工干预。 *(Min Zhang, 01:05:51)*
- [**Dify.ai**](http://dify.ai/) **& ChatWiki:** 国内用户常用的两款自动化平台，可以作为N8N的备选方案。 *(Hao Wang, 01:04:14)*
- **Google Opal:** Google推出的实验性工作流软件，虽然功能尚不完善，但作为官方工具，在与Google系服务（如Gmail, Google Drive）的集成上可能更具优势。 *(Mike Chong, 01:07:22)*

  

### 第三部分：高级战术与宝贵教训

  

- **战术一：为AI建立“后门”以绕过登录。** 在本地开发环境中，为你的应用设置一个写死的、可直接登录的“后门”账户，[并将其信息记录在claude.md](http://xn--claude-he0j31i78r6zldqgtycz6eht4s.md/)中。这样，AI在调试时就不再会被登录流程卡住。 *(Mike Chong, 00:30:08)*
- **战术二：爬虫的正确姿势是付费，而非对抗。** 像小红书这样有强大反爬机制的平台，尝试用个人账号进行大规模爬取极易被封号。真正的规模化解决方案是寻找官方或第三方数据供应商，或者接受小批量、手动的“笨”方法。 *(Mike Chong, 00:50:33)*
- **战术三：巧用多模型并行处理。** 当你需要为一个项目切换或增加新的AI模型时，无需为每个模型都复制一份完整的上下文文件。你可以在新模型的第一次对话时，用一句话指令让它去读取已有的核心上下文文件（[如claude.md](http://xn--claude-hh4k.md/)），实现知识的快速迁移。 *(Mike Chong, 00:57:26)*
- **宝贵教训：警惕“过早的自动化”。** Elon Musk曾分享过一个教训：在还不完全清楚自己想要什么的时候就进行自动化，结果只会是“自动化了一个错误的方向”。只有当一个手动流程让你感到极度痛苦（painful）时，才是自动化它的最佳时机。 *(Mike Chong, 00:59:47)*

  

### 第四部分：资源与链接库

  

工具与平台

- **免费美区Apple ID资源:** 用于下载Sora 2等有地区限制的应用。 *(Min Zhang, 00:59:40)*
	- [https://ccbaohe.com/appleID/](https://ccbaohe.com/appleID/)
- **移动端自动化测试框架 - Maestro:** *(Mike Chong, 01:09:11)*
	- [https://maestro.dev](https://maestro.dev/)
- **自然语言UI测试库 - shortest (by Gumroad):** *(Mike Chong, 01:09:06)*
	- [https://github.com/antiwork/shortest](https://github.com/antiwork/shortest)
- **AI模型价格与性能对比:**
	- OpenRouter: 提供统一的API访问多种模型。 *(Min Zhang, 01:19:49)*
		- [https://openrouter.ai/](https://openrouter.ai/)
	- Artificial Analysis: 提供各模型智能与成本的对比图表。 *(Mike Chong, 01:19:57)*
		- [https://artificialanalysis.ai](https://artificialanalysis.ai/)
- **小红书MCP (实验性):** 一个GitHub上的小红书mcp项目，使用需谨慎。 *(Hao Wang, 01:22:34)*
	- [https://github.com/xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp)
- **Google实验性工作流工具 - Opal:** *(Mike Chong, 01:40:19)*
	- [https://opal.withgoogle.com/?mode=canvas](https://opal.withgoogle.com/?mode=canvas)
- **国内常用工作流平台:** *(Hao Wang, 01:42:07)*
	- Dify: [https://dify.ai/zh](https://dify.ai/zh)
	- ChatWiki: [https://chatwiki.com/](https://chatwiki.com/)

  

文章与书籍

  

- **Paul Graham 的经典文章 - "Do Things That Don't Scale":** *(Mike Chong, 01:36:08)*
	- [https://paulgraham.com/ds.html](https://paulgraham.com/ds.html)
- **Anthropic官方 - Claude编码最佳实践:** *(Mike Chong, 01:54:24)*
	- [https://www.anthropic.com/engineering/claude-code-best-practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- **Alex Hormozi 的新书 - "$100M Money Models":** 深入探讨定价与商业模型。 *(Min Zhang, 02:01:57)*
	- [https://www.amazon.com/100M-Money-Models-Make-Acquisition-com-ebook/dp/B0FMXTZ4MH](https://www.amazon.com/100M-Money-Models-Make-Acquisition-com-ebook/dp/B0FMXTZ4MH)

  

### 行动清单

  

1. **审查你的AI开发流程：** 你是否还在逐条下达指令？尝试为你项目的核心功能创建一个Technical Design Markdown文档，并让AI遵循它。
2. **开启一次“深度思考”：** 下次遇到复杂编程问题时，在Cloud Code中尝试使用Ultra-Sink指令，或在Codex中将Reasoning Effort调至High，体验更高质量的AI协作。
3. **定义你的“个人品牌”System Prompt：** 花30分钟，[创建一个my-brand.md](http://xn--my-brand-z09lrn138az12b.md/)文件，用文字描述你的内容风格、价值观和独特视角。下次让AI创作时，让它先“阅读”这个文件。
4. **识别一个“痛苦”的手动任务：** 找到你每周都会重复、且让你感到痛苦的一个任务，尝试使用N8N或Dify等工具将其自动化，解放你的时间和精力。
5. **重新评估你的产品价值：** 如果你正在开发产品，问自己一个问题：用户为什么愿意花时间在我的产品上，而不是去刷TikTok？如果答案不清晰，你的首要任务是打磨核心价值，而非定价。