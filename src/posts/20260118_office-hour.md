---
date: 2026-01-17
layout: post.njk
source: https://member.pathunfold.com/c/3ab7a2/ai-2026-ai-coding
title: "AI编程新工具Anti-Gravity与全栈开发实战答疑"
summary: "本期对话主要围绕AI编程工具与全栈开发实战展开。Mike分享了Google推出的新工具Anti-Gravity及其在云端编程的优势，并推荐了Andrej Karpathy关于未来职场的观点。随后，对话深入探讨了n8n工作流的学习曲线、跨境电商的市场调研自动化、Web App转移动端（PWA与Native）的技术选型、数据库设计原则以及AI应用的各种安全与计费策略。"
area: "tech-engineering" # Must select ONE from the provided list
category: "software-development" # Must select ONE from the provided list based on content
project: []
tags:
  - "ai-coding"
  - "workflow-automation"
  - "progressive-web-apps"
  - "system-design"
  - "database-migration"
people:
  - "Andrej Karpathy"
  - "Andrew Ng"
companies_orgs:
  - "Google"
  - "OpenAI"
  - "Microsoft"
products_models:
  - "Anti-Gravity"
  - "n8n"
  - "Gemini"
  - "React Native"
  - "PWA"
  - "Firebase"
media_books: []
---


### 开场与 Google 新工具推荐

**Mike**: 大家早上好，Zack你好，第一次见。大雷我看到了，好像是Nvidia的表，非常好。大家可以上来开麦，也可以开摄像头，或者打字，没有压力。

最近两周行业内没有什么特别大的新闻，不过上周 **Google** 更新了一些 **Gemini** 的功能，可能目前只能在美国使用。它可以利用你个人Email的历史记录提供更多个性化内容，这是Google比较强的地方。

我想给大家分享一下我现在的 Workflow。现在AI工具非常多，我们有非常多的Coding或自动化工具。大家最熟悉的一类是ChatBot搜索与聊天；第二类是Website Builder，比如我们社群侧边栏的学习路线就是小西瓜用 **Lovable** 做的，这是一个非常有意思的工具，可以让你很快做出漂亮的网页。

后面这一部分我想重点讲一下。我相信社群里大部分朋友都在用AI Coding工具，比如 **Cursor**、**VS Code**，还有 **Windsurf**。这里我要强调Google出的一个新工具，叫 **Anti-Gravity**（反重力）。它是把Windsurf的一些创始人吸收进Google后做的。这个App其实跟VS Code长得非常像，基本上你可以在类似VS Code的环境中用Google的模型。

它有一个非常大的好处，就是它可以控制你的浏览器，用你的Chrome去做一些事情。而且它目前是可以0元开始使用的。之后的Plan，比如Google AI的Plan起步价是20美元，但可以给你6个账户，非常值。如果大家起步还没有买任何AI Coding工具，我个人建议在2026年1月，如果你要花20美元订阅一个AI工具，可以考虑这个。我是非常推荐，一直在用，感觉非常棒。

### 职场趋势与学习建议

**Mike**: 另外分享一件事，当年早期的机器学习课程教授 **Andrew Ng**（吴恩达），最近在斯坦福有一个分享，讲的是关于未来的职场是什么样子的。

还有一个视频非常长，我是用Google的 **NotebookLM** 去总结的。这里面提到一点：现在的试错成本降低了。大概在2017、2018年的时候，如果我们做一个iOS App，比如用React Native，可能需要花好几年的时间。如果没有AI，即使我是做iOS出身的——我原来在微软做iOS——也需要很久。但现在可能只需要几个周末。

对于刚学会Coding的普通人来说，如果你想学习iOS Coding，可以看我们社群里的iOS 101课程，起步非常简单，就是不停地去Code。我们在探索AI的过程中发现，用AI也是个技能。

### 跨境电商与 n8n 工作流答疑

**Zack**: 我有两个问题想请教。第一，我没有任何编程经验，工作是跨境电商。我跟着小西瓜老师学 **n8n** 的搭建，实操下来并不像老师那样顺利，虽然我把报错发给GPT并按它的解释跑通了，但整个过程我是蒙圈的。我想做市场调研和自动分析，但课程没讲到的部分我就完全不会了，该如何进一步学习？

**小西瓜**: 你在做工作流的时候，不可能让AI从头就帮你做一条你自己完全能用的工作流。你在做市场调研时，有没有和AI讨论过你的背景？例如你的目标平台是YouTube。

**Zack**: 目前还没有。我做完之后还是蒙圈状态。

**Mike**: 我觉得你可以和AI讨论，或者私信我们。如果你做n8n Workflow做了一半，或者报错不了解，在早期没有商业机密的情况下，非常建议Share出来。发个帖子，我们都可以帮你通过。很快你做第二个、第三个之后就能举一反三了。从0到1确实接触信息量很大，有压迫感是很正常的。

另外，关于你说的“AI一顿操作做出来了，但我不知道为什么”，我可以分享一下：我现在写Code，我也不看它在干什么，我只把自己当做用户，看效果对不对。因为算法确实很复杂，我也不想去看。

**Zack**: 第二个问题，我想借助AI工具做美国市场调研，比如耳机市场的准确报告；还有就是生成亚马逊Listing的主图，我现在用ChatGPT一张张生图效率很低，希望能搭建工作流批量生成。

**Mike**: 关于抓数据，电商行业大家常说抓亚马逊数据，自己搭的话有个问题，亚马逊会识别你，你就抓不到有效数据，这是猫鼠游戏。通常的解决办法是充值，比如用 **DataScraper** 之类的服务。

如果是大趋势调研，好的Practice是用多个AI去问同一个问题。比如“AirPods Sales US”，我会让所有AI都去跑一遍。但AI一般拿不到最新的实时数据，比如去年黑五的数据。

关于生图，玩法很多。比如 **Perplexity** 有个功能，或者你可以去 **Gemini**，让它不停地生图。Google有一个网站叫 **ImageFX** (此处推测为Flow/ImageFX)，可以新建Project生成图片，一个Prompt能输出4张。对于新手，最好是做“半自动”的事情，在过程中找到可以自动化的点。一开始就追求全自动API Key代价比较高。

### Web App 转移动端与 PWA

**Victoria**: 我之前做了一个Web Based App，现在想把它弄到手机端（Mobile）。我想知道如何快速把它整到手机端，同时如果Web App有Feature Update，能跟手机端同步？我看到有Wrapper或者Native的方式，大家有什么经验？

**Mike**: 这是一个非常好的问题，涉及Feature Fragmentation（功能碎片化）。如果不同Platform代码不一样，很难同步。

**小西瓜**: 可以用 **PWA (Progressive Web Apps)**。我之前做过一个App，其实就是给网站做一层包装，让它可以下载到本地。它借用浏览器的资源访问网站，但在本地运行的效果和原生App差不多。我是用 **Lovable** 做的，直接跟它说生成一个PWA，它就能理解并生成。

**Mike**: 如果是Web App，简单来说就是在HTML的Head里加一个 `manifest.json` 文件，告诉浏览器这是一个PWA。它的优点是简单、快；缺点是没法上架App Store，失去了App Store的自然流量。

如果你单独做一个iOS App，体验会好很多，但要花时间。如果你现在的页面不多，且Target Audience是家长，未来验证途径后可以做Native或 **React Native**。App Store有针对教育的Volume Sales，学校可以直接买几千个Seat。

我自己最近重写了我的App **InfoFlow**（稍后阅读软件）。它的Web版和App Store版长得都很像，App版就是用React Native写的。但这套技术对于没有经验的人来说，用起来还是很费劲。我们也在讨论是否要开设React Native课程。

### 数据库设计与合规性

**Spotline (提问)**: 我使用 **Gemini Canvas** 做了一个Web App，需要把使用者资料存到后端资料库，使用 **Firebase**，不知道有哪些需要注意的地方？

**Mike**: 资料库（Database）就像Google Sheets。第一列是ID，第二列是Username。设计后端资料库时，第一版通常很简单。但未来如果你想改名，比如把Username改成Nickname，这就涉及 **Migration**（数据迁移），会产生数据不一致的问题。

对于Firebase这种 **NoSQL** 数据库，虽然结构要求不严格，但最好字段名字不要轻易改变。每次改之前一定要让AI帮你Review，不让它出现更多问题。

**Huiwei (提问)**: 在医药产业国际性公司，有机密关系，目前只能使用 Microsoft Copilot，如何避开限制使用 Gemini 或 NotebookLM 处理 Workflow？

**Mike**: 医药行业合规（Compliance）很严格，数据非常Sensitive。如果你给Gemini，它大概率会用来做Training，除非是Enterprise Version。在公司里很难解决这个问题，微软的竞争优势就是做合规。我的建议是多Push一下合规部门，或者在个人项目中探索Startup Idea来对冲工作上的不满意。

### AI 应用的定价与安全策略

**Victoria**: 关于AI App的定价，是一次性付费还是订阅制（Monthly）？特别是后端有API Cost的情况。

**Mike**: 我自己有买断制也有订阅制。如果有AI Cost，账很难算，OpenAI自己也经常调整Pricing。如果有AI功能，建议定价保守一点，留出Margin。

另外，如果你有美国公司，可以申请Google的 **AI Startup Funding**。微软以前也有，一开始给500美元，我现在申请到了15万美金的Credit，一年内用不完就作废了。这可以帮你覆盖很多成本。

**Victoria**: 系统上线后，如何做Gatekeeper或Security Check？比如防止用户滥用Token。

**Mike**: 这是一个 **System Design**（系统设计）问题。你需要在Backend Service上加 **Rate Limit**（速率限制）。比如限制每个用户每分钟只能Chat 3次，或者每分钟Max Token是10k。你需要把这个需求转化成AI能理解的Code，基于IP Address或User ID进行限制。

还可以加Alert，如果某用户一天用了100万Token，发消息到你的Discord或Slack，你去看看是不是有人写了脚本在刷你。对于免费用户，可以用便宜的模型池子，付费用户用好的模型，这也是一种 **Mitigation**（缓解）方法。

### Agent Skills 与开发流程

**Mike**: 大雷提到的 **Cloud Skills** 或 **Agent Skills** 确实是下一个趋势。瑞安（Ryan）做了一个课程叫“打造你的AI Agent工具箱”，本质上就是把你的Conversation“蒸馏”成一个Markdown文件，配合一些Code，变成可复用的技能。

比如我用 **Claude** 或 **Cursor** 模仿了一个网站设计，聊了很长的记录。我可以让它把这个设计感变成一个Agent Skill。下次我再做新项目时，直接调用这个Skill，它就能复用之前的经验。

**Victoria**: 你用AI编程是睡前Setup好让它跑，还是得盯着？

**Mike**: 我觉得目前它能做到70%-80%的自动化。我有一个To-Do List（类似GitHub Issues），定义好任务，丢给AI（比如 **CodeCLI**），它会帮我转成 **PR (Pull Request)**。但我还是要去Review，去手动测一下有没有Bug。

这里推荐一个工具叫 **OpenSpec** 或 **SpecIt**。它可以让你规范化地写Spec，让AI自动去Validate流程。虽然慢一点，但效果会好很多。

**Mike**: 时间差不多了，非常感谢大家的提问。如果有更多问题，欢迎在社群里发帖，我们会尽力回答。感谢小西瓜的Moderation，大家拜拜。

----
## 导语：从迷茫到精通——用正确的姿势拥抱AI时代

在这场充满干货的周六分享会上，Mike、小西瓜、Victoria、Zack等社群成员围绕AI Coding工具选择、Agent Skills应用、跨平台开发、以及AI定价策略展开了深入讨论。本次分享的核心信息是：2026年的AI工具已经发展到让"试错成本极低"的阶段，关键不在于学会所有工具，而在于敢于动手、善于提问、勇于分享。



## 第一部分：核心理念 — 从"工具使用者"到"问题定义者"

1. 试错成本降低，行动比规划更重要

核心理念: 现在的AI工具让普通人也能在几个周末内完成过去需要几年才能做出的产品。 (Mike, 00:09:32)



实战案例: Mike分享了Andrew Ng在Stanford的演讲，强调现在做iOS App或Web App的门槛已经大幅降低，关键是不停地去code，遇到问题就问AI或社群。



落地方法:





不要等到"学会了"再开始，而是边做边学



遇到问题先问AI，解决不了就在社群发帖



"卡了半个小时，都可以上论坛来发个问题" (Flash, Chat)

2. Context Engineering（上下文工程）比Prompt Engineering更关键





核心理念: 你给AI的问题定义越清晰，产出质量越高。这是"差之毫厘，谬以千里"的道理。 (Mike, 00:59:48)



实战案例: 当Mike使用Codex CLI让AI自动处理GitHub Issues时，发现如果issue写得详细，AI完成任务的成功率能达到70-80%。



落地方法:





使用OpenSpec或spec-kit规范化地定义任务



把复杂任务拆分成多个phase，每个phase完成后测试再进入下一个



用Markdown文件清晰记录每个阶段的需求

3. 把自己当用户，不必看代码





核心理念: AI生成的代码已经足够复杂，与其花时间理解代码逻辑，不如把自己当用户去测试效果。 (Mike, 00:19:48)



实战案例: Mike分享自己做视频剪辑软件时，已经不再逐行看AI生成的算法代码，只关注最终效果是否正确。



落地方法:





用用户视角测试功能，而非开发者视角审代码



遇到问题时，让AI帮忙Debug，而非自己钻研代码



关注结果，放下对"理解每一行代码"的执念



## 第二部分：工具与武器库 — 2026年AI Coding工具推荐

AI Coding IDE — AntiGravity (Google)：免费起步，$20套餐可供6人使用，自带浏览器控制能力。适合Vibe Coding新手首选。 (Mike, 00:05:15)
Website Builder — Lovable：快速生成漂亮的Web App。适合快速原型/MVP开发。 (Mike, 00:03:48)
工作流自动化 — n8n：可视化拖拽，社群有完整课程。适合数据抓取/自动化流程。 (小西瓜, 00:16:48)
替代n8n入门 — 飞书多维表格：比n8n更简单，适合入门。适合轻量级自动化。 (小西瓜, Chat)
批量生图 — Flow.Google：一个prompt输出4张图。适合电商产品图/素材批量生成。 (Mike, 00:24:15)
视频长内容总结 — NotebookLM：专为长视频/PDF总结设计。适合学习/研究/内容创作。 (Mike, 00:08:30)
跨平台开发 — React Native：一套代码，iOS/Android/Web三端运行。适合多端产品开发。 (Mike, 00:33:17)
快速移动端 — PWA：只需添加manifest.json，即可让Web App可安装。适合快速上线移动端。 (Mike, 00:28:04)
💡 Mike的2026年1月建议： 如果你只准备花$20订阅一个AI工具，首选Gemini，其$20套餐可解锁AntiGravity的全部功能。(Mike, 00:06:35)



## 第三部分：高级战术与宝贵教训

🚀 Agent Skills：把你的经验"蒸馏"成可复用资产

是什么： Agent Skills本质是一个Markdown文件，记录了一套可复用的工作流程，让AI按此执行任务。 (Mike, 00:48:37)
怎么用： 在Claude Code中完成一个复杂任务后，让它"把conversation总结成一个Agent skill"，下次遇到类似场景直接调用。
类似概念： Gemini Gems、Dia Skills (Mike, 00:49:25)
商业价值： 类似Notion Template，可以打包出售——但复制成本太低是问题。 (Victoria, 00:52:23)

💰 AI产品定价策略
参考竞品定价： 看同类产品收多少，差不多就行。定价稍高反而让用户觉得价值更高。 (Ryan, Chat)
为AI成本留Margin： 财务上保守一点，给免费用户用便宜模型，付费用户用好模型。 (Mike, 00:39:10)
申请AI Startup Credits： Google和Microsoft都有AI Startup Program，Mike已经滚到$150,000额度！ (Mike, 00:40:02)

🔒 Rate Limiting防薅羊毛

基本策略： 限制每分钟请求次数（如3次）+ 每分钟最大token数（如10K） (Mike, 00:53:31)
进阶玩法： 设置Alert，当用户单日token超过阈值时通知到Discord/Slack人工审核。 (Mike, 00:55:20)

📱 跨平台开发路径选择

PWA — 优点：最快，只需加manifest.json。缺点：无法上架App Store。 (Mike, 00:28:04)
React Native — 优点：一套代码多端运行。缺点：对新手仍有门槛，设计需要为各平台适配。 (Mike, 00:33:17)
原生开发 — 优点：体验最好，可获App Store自然流量。缺点：开发成本最高。 (Mike, 00:36:03)
⚠️ Victoria的关键问题： 如何在Web App和Mobile App之间同步Feature？Mike的建议是：起步阶段都试一下，因为最多就费token和时间。 等验证了产品方向后，再考虑是否用React Native合并代码库。(Mike, 00:31:05)



## 第四部分：资源与链接库 (来自聊天室)

🛠 工具与平台
AntiGravity — https://antigravity.google/ — Google推出的AI Coding IDE
Firebase — https://firebase.google.com/ — Google云端数据库服务
Flow.Google — https://labs.google/fx/tools/flow — 批量AI生图工具
飞书多维表格 — https://www.feishu.cn/product/base — n8n的轻量替代方案
Dia Browser Skills — https://www.diabrowser.com/skills — 可参考的Agent Skills灵感库
OpenSpec — https://github.com/Fission-AI/OpenSpec — 任务规范化框架
spec-kit — https://github.com/github/spec-kit — GitHub的任务规范工具
npm skills工具 — https://www.npmjs.com/package/skills — 命令行安装Agent Skills
OpenCreator — https://opencreator.io — 生图生视频workflow软件，一致性好
DataScaler — https://datascaler.ai — 亚马逊卖家数据分析工具
Snowflake AI — https://www.snowflake.com/en/product/ai/ — 企业级AI数据处理（医疗合规友好）

📚 课程与视频

Andrew Ng @ Stanford 分享 — 未来职场与AI的展望
打造你的AI Agent工具箱 (Folder as an APP 直播課) — Ray老师的Agent Skills入门课程
Deploy 101 部署课程 — 解决"最后一公里"上线问题
PWA示例: TapTap.io — PWA实际效果参考

💡 概念解释
Claude Cowork: Anthropic推出的"AI工作伙伴"模式，让Claude从聊天助手变成能主动执行任务的数字同事。 (小西瓜, Chat)
Claude Skill: 可复用的"任务说明书"，一句话触发复杂工作流。 (小西瓜, Chat)
React Native: Meta开源的跨平台框架，一次学习、随处编写。 (小西瓜, Chat)

行动清单 (给所有社区成员)
🎯 今天就开始： 如果你还没有订阅AI Coding工具，下载AntiGravity试用Gemini的免费额度
📝 遇到问题就发帖： 卡了超过30分钟，立刻到社群发帖求助，然后去做别的事
🔧 尝试Agent Skills： 完成一个工作流后，让AI帮你总结成Skill文件，下次直接复用
📱 想做移动端先试PWA： 只需让AI"生成一个手机端可以打开的PWA"，几分钟搞定
💼 有公司就申请AI Credits： Google/Microsoft的Startup Program提供大量免费AI额度
🎤 下次Office Hour积极参与： 无论是提问、分享项目还是Debug Session，社群都欢迎