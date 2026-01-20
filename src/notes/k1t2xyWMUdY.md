---
author: AI Engineer
date: '2026-01-19'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=k1t2xyWMUdY
speaker: AI Engineer
tags:
  - compute-scaling
  - productivity-measurement
  - software-engineering
  - ai-safety
  - robotics-automation
title: METR 如何衡量长任务能力与资深开源开发者的 AI 生产力
summary: 本次访谈探讨了 METR 如何通过“时间跨度”衡量 AI 能力。嘉宾 Joel Becker 分析了算力增长与能力提升的因果关系，并分享了针对资深开源开发者的研究，发现 AI 工具在复杂开发任务中并未显著提升效率。讨论还涉及了数据科学中的数据质量瓶颈、机器人制造的滞后性以及 AI 自动化的未来边界。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people:
  - Joel Becker
companies_orgs:
  - METR
  - Meta
  - OpenAI
  - LinkedIn
products_models:
  - GPT-4
  - GPT-5
  - Cursor
  - Claude
media_books: []
status: evergreen
---
### 算力增长与 AI 能力的时间跨度

**Joel Becker**: 这是一个非常简单的论点。如果你观察随时间推移的**算力（Compute）**子概念——这可能是研发算力支出、实验算力、或者是某个特定实验室正在使用的训练算力——它的增长曲线是向上的，这并不令人意外。如果你看另一张图，比如**对数时间跨度（Log Time Horizon）**，这是 **METR** 衡量的一项指标（很多人可能在 Twitter 上见过这张图），它看起来与算力增长不仅是巧合，而且在因果上是成比例的。

这意味着，如果算力增长减半，那么时间跨度的增长也会减半。为了方便讨论，假设从 2028 年左右开始，算力曲线开始弯曲，增长放缓甚至停止，那么如果它们是因果相关的，你就会预见到 AI 能力的延迟潜力是巨大的。

现在，为什么很多人认为算力增长会放缓？我不是这方面的预测专家，但我觉得之前的理由相当充分。一是**物理约束**，我们可能会遇到你提到的电力限制，或者 **EPO** 报告中考虑的其他各种因素，这些因素在 2030 年前可能不会产生太大影响，但之后可能会。我认为更可能的是**资金约束**，大型科技公司或国家在某个时点的支出是有限的。

这篇论文想表达的另一个观点是，基于经济学的一个标准假设，你应该预见到这两者（算力与能力）是因果成比例的。特别是在**纯软件奇异点（Software-only Singularity）**尚未实现的情况下，这可能是一个合理的模型，并暗示了近期 AI 能力可能会出现某种程度的停滞。

<details>
<summary>Original English</summary>

**Joel Becker**: Here's the very simple argument. If you look at the sub notion of compute over time—this could be like R&D spending on compute, this could be experimental compute, it could be training compute, whatever some particular lab is using—it goes like this, no surprise. If you have another chart of like log time horizon, let's say this METR measure from the figure that many of you would have seen on Twitter over time, it looks like these things were causally proportional in the sense that if compute growth were to half, then time horizon growth were to half. So for the sake of argument, let's say that starting from '28 or so, the compute curve begins to bend like that where this would be no growth and this would be the original growth, something like half, then if they were causally related and in particular they were causally proportional to one another, then you'd expect this to go like that and then the delay implied in AI capabilities is potentially enormous.

Now like why lots of people have stipulated that there might be some slowdown in compute growth, I'm not an expert in those forecasts but I think the prior reasons do seem like somewhat strong to me. One is like physical constraints that we might hit power constraints as you mentioned or there are various other ones that EPO have a report on that they consider, all of which seem to not bite through 2030 but potentially could bite sometime after 2030. I think the more likely one is just like dollars is a constraint, like large tech companies can only spend so much at a certain point, like large nation states can only spend so much. The additional point that this paper is trying to make is that under a very contestable but standard assumption from economics, you should in fact expect these two to be causally proportional, at least for the period that software-only singularity is not possible. I think this is maybe a reasonable model and does imply some sorting of AI capabilities in the near future.

</details>

**主持人**: 这是否也意味着，我们目前还没有出现那种能相对于不可预测的技术进步而大幅提升能力的**技术突破**？

<details>
<summary>Original English</summary>

**Interviewer**: That also tells us we don't have a technological advance that dramatically improves capabilities relative to like an unpredictable technological advance, right?

</details>

**Joel Becker**: 是的。所有的预测都假设没有不可预测的突破。在 AI 领域，**对数线性图（Log-linear Plots）**上的直线一直是一个被低估的预测工具。它们在多个数量级上表现得非常好。我认为默认的预期应该是对数线性增长会持续，除非输入端出现重大中断。当然，上行空间也可能出现戏剧性的变化，我首先想到的是“软件奇异点”，或者是另一个 **Transformer** 式的时刻。

<details>
<summary>Original English</summary>

**Joel Becker**: Yeah. I mean, all predictions assume no unpredictable... in general in AI, kind of straight lines on log-linear plots have been a very highly underrated forecasting tool. They've done extremely well over now many orders of magnitude. I think it's reasonable to have the default expectation that the log-linear lines continue through approximately the same number of orders of magnitude except maybe if there's some significant break in the inputs. Yeah, of course on the upside there could be something quite dramatic. Software singularity is the first thing that comes to my mind, but another Transformer-style moment seems like another candidate naturally.

</details>

### 开发者生产力中的 J 曲线与熟悉度

**主持人**: 论文中提到过**熟悉度（Familiarity）**是否是一个干扰因素。**Meta** 在今年的开发者活动工程峰会上有一个有趣的展示，他们拥有全球最好的开发者体验定量测量基础设施。他们能告诉你完成一个 **PR（拉取请求）**实际花费的人力时间。他们发现，当给开发者提供 **AI Agent** 时，会出现一条 **J 曲线（J-curve）**，大约持续三到六个月。我好奇的是，如果一个人把 AI 作为全职生产力工具使用几个月后，是否会存在一个熟悉度的临界点？

<details>
<summary>Original English</summary>

**Interviewer**: One thing I thought and you brought up a little bit in the paper which is whether or not familiarity is a confounding factor. There was an interesting presentation from Meta at the developer activity engineering summit this year. They have probably the best infrastructure for quantitative measurement of developer experience in the world of any company. They're able to tell you basically how long it actually takes to make a PR, how much actual human time effort it took. What they saw was a J-curve when they gave people agents, and that J-curve was like three months or six months. So one of the things I also wonder is if there's a cut-off of how much familiarity the person has—have they been using this as their full-time daily driver for a period of months—and if there's like a cut-off that occurs once a certain level of familiarity occurs?

</details>

**Joel Becker**: 我完全赞同“J 曲线”的解释。开发者在第一次尝试新工具时往往会变慢。你这样做是为了以后的投资收益，或者你预期模型会变得更好。但我想说明的是，我们在软件工程研究中反复看到：你不能在调查中问人们“完成这项任务花了多长时间”，因为人们对时间的感知几乎总是错的。但如果你问“你觉得生产力提高了多少”，他们的回答往往与定量反馈高度相关。

<details>
<summary>Original English</summary>

**Joel Becker**: I'm totally on board with J-curve explanations being a real thing. Developers tend to be slower the first time that they're experimenting with tools. You're doing this so that you have some investment benefits later on. One thing to say is we see this over and over in software engineering studies that the one question you can't ask people in a survey is "how long did a task take"—ask anybody the amount of time that something takes, they are almost always wrong. But you can ask people "how much more productive did you feel" and they will give you an accurate response that correlates to quantitative feedback.

</details>

### METR 关于资深开发者的实证研究

**Joel Becker**: 我们的研究针对的是 16 名**资深开发者**。有些预测者认为，资深开发者获得的加速较少，因为他们处理的代码库更大，而 AI 在大型代码库上的表现较弱。但在我们的研究开始时，四分之三的开发者对 **Cursor** 完全陌生。我们观看了成百上千小时的屏幕录像，发现他们的 **Prompt（提示词）**写得非常合理。我并没有看到他们因为没掌握某种“高级工作流”而受限。

我的经验是，有时我被大大拖慢了，有时被加速了。随着对工具熟悉度的增加，我确实进步了很多，因为我学会了什么能告诉它做，什么不能。

<details>
<summary>Original English</summary>

**Joel Becker**: We watched so many hours of screen recordings of these developers working and I just do not see... I think they're prompting very reasonably. I'm not seeing these like advanced workflows that they're not accessing. My experience is not that far off from this is that there are times when I am dramatically slowed down and there's times when I am accelerated. Although as my familiarity with the tool increases, I definitely improve a lot because I learn over time what I can tell it to do and what I can't tell it to do.

</details>

**主持人**: 这是一个非常有趣的观点，因为我发现 AI 对我帮助最大的时候，往往是我完全不熟悉的、没有文档的**遗留代码库（Legacy code bases）**。在这种情况下，**Claude** 简直是救星。

**Joel Becker**: 没错，遗留代码库之所以存在不是因为它们运行良好，而是因为它们赚钱。

<details>
<summary>Original English</summary>

**Interviewer**: That is a really interesting point because actually some of the repos that I was helped the most with were ones that I was completely unfamiliar with and which had no decent documentation. In that case, Claude was a huge help.
**Joel Becker**: Yeah. Legacy code bases don't exist because they work well. It's because they make money.

</details>

### 数据科学与法律领域的自动化挑战

**主持人**: 如果让我选一个 AI 本该成功但目前表现不佳的领域，我会选**数据科学**。举个例子，在 **LinkedIn**，有 5000 张表的表名里都带着“impressions”。如果分析师想知道某个页面的展示量，AI 根本搞不清楚该去哪找。目前的 AI 系统无法直接挂载到这种复杂的企业环境中。数据科学家需要分析数据并得出结论，但底层数据的状态太糟糕了，充满了矛盾的逻辑（比如某个字段在去年 11 月前是日期，之后变成了月份）。

<details>
<summary>Original English</summary>

**Interviewer**: If I was going to pick the areas where I would expect to be more successful, but where I think it is being less successful, I would pick probably data science. At LinkedIn, there are 5,000 tables with the name "impressions" in the table. If an analyst wants to understand how many impressions happened on a page, where the hell do they go? AI can't figure that out. I believe that the state of underlying data is so bad that the actual data scientist is going to get way less value out of the AI than software engineers.

</details>

**Joel Becker**: 这非常有趣。有一种悲观的观点认为，公司内部嵌入了太多的**隐性知识（Tacit knowledge）**，这些知识是无法从训练数据中获取的。未来可能会出现大量针对特定公司数据（如 LinkedIn 数据）微调的专家模型。

**主持人**: 另一个我感兴趣的领域是**法律**。法律发现（Discovery）是诉讼中最痛苦、最昂贵的部分。如果你能让法律发现变得廉价、即时且可靠，那将对社会产生巨大影响。

<details>
<summary>Original English</summary>

**Joel Becker**: That's very curious. One view that some more bearish people have looking at the future of AI is there's so much tacit knowledge embedded inside of companies that you're not going to pick up from training data.
**Interviewer**: Another one I'm curious about is lawyers. Discovery in law is a huge problem. You could actually have significant impact on a society if you could make discovery cheap and instantaneous and reliable.

</details>

### 机器人技术与芯片制造的滞后性

**Joel Becker**: 为什么机器人能力滞后于大语言模型（LLM）这么多？是因为训练数据，还是硬件约束？如果我们将**超人工智能（Super intelligence）**放入现有的硬件中，它能建立芯片生产设施吗？我对此持怀疑态度。

**主持人**: 我有一个朋友在疫情期间尝试从软件转向制造业，他发现制造业的迭代过程比软件慢了一个数量级。在**晶圆厂（Fabs）**工作需要极高的人类专业知识，而且改进速度极其缓慢，因为建一个厂要耗资十亿美元。

<details>
<summary>Original English</summary>

**Joel Becker**: Why are robotics capabilities lagging LLM capabilities so much? Is it to do with training data or maybe it's to do with hardware constraints? If we put super intelligence inside of hardware parts that existed today, could it build chip production facilities?
**Interviewer**: I have a friend who started working on manufacturing and he found out how hard the manufacturing world is and how slow the iteration process is. It's an order of magnitude worse. The rate of improvement is actually glacial compared to software.

</details>

**Joel Becker**: 你真的认为需要“几个世纪”才能实现机器人自主建造机器人吗？

**主持人**: 我觉得会比我们预想的要长得多。虽然机器人已经能很好地完成小规模的单次建造，但大规模生产完全是另一回事。

**Joel Becker**: 也许我们现在正处于机器人领域的“**GPT-2 时刻**”。虽然现在看起来还很笨拙，但数据和算力的补齐可能会很快改变现状。在芯片制造方面，AI 确实有潜力通过计算优化（如掩模设计）和提高良率（Yield）来产生重大影响。

<details>
<summary>Original English</summary>

**Joel Becker**: Is that really your view, centuries?
**Interviewer**: My guess is it's going to take a lot longer than we think, at least to be able to do like real mass production.
**Joel Becker**: Maybe we're in a sort of GPT-2 moment. There's a lot of opportunity for AI in chip manufacturing, like calculating the mask for the laser or improving yield by detecting parameters that are out of whack.

</details>