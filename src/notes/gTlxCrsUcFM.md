---
area: "tech-engineering"
category: technology
companies_orgs:
- Anthropic
- DeepMind
- Google
- OpenAI
date: '2025-10-23'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The MAD Podcast
people:
- Matt Turck
- Demis Hassabis
- Lee Sedol
- Richard Sutton
products_models:
- AlphaGo
- AlphaGo Zero
- AlphaFold
- Claude
project: []
series: ''
source: https://www.youtube.com/watch?v=gTlxCrsUcFM
speaker: The MAD Podcast with Matt Turck
status: evergreen
summary: Anthropic 与前 DeepMind 的核心研究员 Julian Schrittwieser 深入探讨了人工智能的指数级发展趋势。他认为，外界对“AI泡沫”的讨论与前沿实验室的实际进展脱节。他预测，到2027年，AI模型将在许多任务上超越人类专家，并可能取得诺贝尔奖级别的科学发现。他还分享了从
  AlphaGo 到 MuZero 的演进历程，并讨论了强化学习、AI智能体以及AI安全与社会影响等关键议题。
tags:
- ai-agent
- ai-safety
- growth
- reinforcement-learning
- scientific-discovery
title: Anthropic研究员Julian Schrittwieser：我们是否误读了AI的指数级增长？
---
### 我们再次未能理解指数级增长

**Julian:** 关于 AI 泡沫的讨论似乎与前沿实验室里正在发生的事情以及我们所看到的景象严重脱节。我们没有看到任何进展放缓的迹象。多年来，我们看到的是一种非常持续的进步，大约每三四个月，模型就能独立完成一个比以前长两倍的任务。我们很难直观地理解这些**指数级趋势**（Exponential trends: 指事物在单位时间内以固定百分比增长的模式，其增长速度会越来越快）。如果你能让社会中的每个人生产力提高10倍，我们能实现怎样的富足？未来5年我们能解锁什么？我认为我们可以走得非常远。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: The talk about AI bubbles seemed very divorced from what was happening in frontier labs and what we were seeing. We are not seeing any slowdown of progress. We are seeing this very consistent improvement over many, many years where every, say, three, four months, it is able to do a task that is twice as long as before completely on its own. It's very hard for us to intuitively understand these exponential trends. If you manage to make everybody in society 10 times more productive, what kind of abundance can we achieve? What will we be able to unlock in the next 5 years? I think we can go extremely far.</p>
</details>

**Matt:** 欢迎来到 Matt 播客。我是 First Mark 的 Matt Turck。今天我的嘉宾是 Julian Schrittwieser，世界上最杰出的 AI 研究员之一。Julian 是 DeepMind 传奇项目 AlphaGo Zero 和 MuZero 的核心贡献者，现在是 Anthropic 的关键研究员。我们讨论了 AI 的指数级发展轨迹及其对 2026 年和 2027 年的预测，强化学习和 AI 智能体的前沿，以及 AI 创造力和 AlphaGo 著名的“第37手”背后的科学。请欣赏与 Julian 的精彩对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Welcome to the Matt podcast. I'm Matt Turk from First Mark. Today my guest is Julian Schrittwieser, one of the world's most impressive AI researchers. Julian was a core contributor to DeepMind's legendary AlphaGo Zero and MuZero projects and he is now a key researcher at Anthropic. We covered the exponential trajectory of AI and his predictions for 2026 and 2027, the frontier in reinforcement learning and AI agents, and the science behind AI creativity and the famous move 37 from AlphaGo. Please enjoy this fantastic conversation with Julian.</p>
</details>

**Matt:** 嗨，Julian，欢迎你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Hey Julian, welcome.</p>
</details>

**Julian:** 嗨，Matt，谢谢你的邀请。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Hey Matt, thanks for having me.</p>
</details>

**Matt:** 几周前，你写了一篇名为《再次未能理解指数级增长》的精彩博客文章，引爆了互联网。关于当前 AI 的发展轨迹，大多数人究竟错过了什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: A couple of weeks ago, you wrote an incredible blog post that broke the internet entitled "Failing to Understand the Exponential Again." What is it that so many people are missing about the current trajectory of AI?</p>
</details>

**Julian:** 是的，你提到那篇博客文章很有趣。我真的没想到它会那么火。实际上，这个想法是我几周前在吉尔吉斯斯坦度假时，在一次漫长的车程中产生的。我开始思考这个问题，以及我在 X（前身为Twitter）上看到的那些关于 AI 泡沫的言论和讨论。这些讨论似乎与前沿实验室里正在发生的事情以及我们所看到的景象严重脱节。这让我开始有点好奇，是不是因为事情发展得太快，以至于人们可能难以进行推断和直观理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Yeah, it's funny that you bring up that blog post. I really didn't expect it to blow up that much. I actually had the idea when I was on holiday in Kyrgyzstan a few weeks ago on a very long car ride and then I started thinking about this and all the talk about AI bubbles I've seen on X and this discussion. And it seemed very divorced from what was happening in frontier labs and what we were seeing, and that made me start to wonder a bit like, is it that things are moving so fast that people maybe struggle a bit to extrapolate and understand intuitively.</p>
</details>

**Julian:** 人们可能会想，“哦，这还很遥远”，但它每隔几个月就会翻一番，这意味着一旦它接近我们，就会迅速超越并变得非常出色。这让我想起了疫情初期发生的事情，虽然方式不同，但情况类似。一开始病例很少，大家觉得“这永远不会发生，只有几百人，谁在乎呢？”但如果你理解数学并观察数据，就会发现，“哦，它会每周或每两周翻一番”，显然它将达到巨大的规模。但我们很难直观地理解这些指数级趋势，因为这并非我们日常环境中所习惯的。所以这让我思考，AI 领域是否也正在发生类似的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: "Oh, you know, maybe it's far away now, but it's doubling every so many months, which means that once it gets close to us, it's going to move past and become really good very quickly." And that reminded me a lot, in a different way, but like what happened during early COVID where we had a similar situation where, at the beginning, it's like very few cases. It's like, "Wow, it's never going to happen. It's only a few hundred people. Who cares?" But if you understand the math and if you look at it, right, it's like, "Oh, it's going to double every week, two weeks. Clearly, it's going to be a massive scale." But it's very hard for us to intuitively understand these exponential trends because it's just not what we're used to in our normal environment. And so that's what got me thinking, "Oh, is something similar happening here with AI?"</p>
</details>

**Julian:** 如果你看我们拥有的许多基准测试和评估，会发现多年来我们看到了非常持续的进步。大约每三四个月，模型就能独立完成一个比以前长两倍的任务。所以我们可以据此推断，看到一年或两年后，顶级模型将能够完全自主工作一整天甚至更长时间。将这一点与经济中存在大量知识型工作和任务的事实相结合，再加上我们在前沿实验室没有看到任何进展放缓的迹象。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: We are clearly, if you're looking at many benchmarks we have, many evaluations we have, we are seeing this very consistent improvement over many, many years where every, say, three, four months, it is able to do a task that is twice as long as before completely on its own. And so we can extrapolate this, right, and we see that, "Oh, in a year from now, maybe two years from now, the top models are going to be able to work completely on their own for like a whole day or more." Combined with this, combined with the fact that there's a huge number of knowledge-based jobs in the economy, knowledge-based tasks, and combined that in the frontier labs we are not seeing any slowdown of progress.</p>
</details>

**Julian:** 仅仅将这些因素在很短的时间内（比如半年、一年）综合推断，就足以知道将会产生巨大的经济影响。这意味着，如果你看看现在的 OpenAI、Anthropic、Google，那些估值和收入数字实际上是相当保守的。我最近看到的一些更深入的想法是，情况可能更有趣、更复杂。虽然那些前沿实验室和前沿模型显然能力非常强，并且处于一个极端的发展轨迹上，但还有很多其他公司试图进入同一个 AI 领域，它们可能也有很高的估值，但未必有支撑其估值的收入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Just extrapolating those things together over a very short time like half a year, one year already, that is enough to know that there is going to be massive economic impact. That means if you look at current, if you look at OpenAI, if you look at Anthropic, if you look at Google, those evaluations, those revenue numbers are actually fairly conservative. I think some more thoughts, some things more I've seen more recently is that it's maybe actually even more interesting and more complex that while those frontier labs and frontier models are clearly very capable and on an extreme trajectory, there are a lot of other companies, right, that are trying to follow into the same AI sphere that may also have very high evaluation but not necessarily the revenues to support it.</p>
</details>

**Julian:** 所以，在更广泛的生态系统中可能同时存在某种泡沫，而与此同时，前沿实验室却走在非常坚实的轨道上，拥有大量收入，赚取大量利润。我认为这可能是一种相当不寻常的情况。在过去，比如互联网泡沫时期，或者人们谈论的铁路热潮时期，我们没有看到这种分化。所以我一直在思考这个问题，我认为情况正变得越来越有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: And so it's possible that there may simultaneously be some sort of bubble in the wider ecosystem while at the same time the frontier labs are on a very solid trajectory, having a lot of revenue, making a lot of money. I think that may be quite of an unusual situation that in the past, you know, maybe in the dot-com bubble, maybe people were talking about the railroad rush and stuff like this, we did not see this bifurcation. So I think I've been thinking about this more and I think it's getting more and more interesting, the situation.</p>
</details>

### 对 2026-2027 年的预测：AI 智能体将自主工作一整天

**Matt:** 太有意思了。你提到了你对 26 年和 27 年的一些预测或推断。你愿意展开谈谈吗？你提到了三个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Fascinating. So you alluded to some of your predictions or extrapolations for '26 and '27. Do you want to unpack that? You had three of those.</p>
</details>

**Julian:** 也许称之为我的预测有点太抬举自己了。我只想说，如果你看一下 METER-Eval（一个衡量AI模型自主完成任务时长的基准）并非常天真地进行线性拟合外推，那就是你会期望发生的事情。所以我会保持谦虚，说：“哦，大多数时候，我不会比统计模型、比对过去非常一致的趋势进行统计外推更聪明。”所以我会非常谦虚，尽管我知道所有关于研究和正在发生的事情，但可能我能做出的最有可能、最好的预测，实际上就是遵循那些数据和外推，看看它会把我们带到哪里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Maybe calling it my prediction is giving myself too much credit, right? I will just say this. If you look for example at METER-Eval and you very naively extrapolate the linear fit, that's what you would expect to happen. And so I'm just going to be humble, right, and say like, "Oh, most of the time, I'm not going to be smarter than statistical models, statistical extrapolation of past trends that have been very consistent. So I'm just going to be very humble and despite what I might know all about research and what's happening." Probably the most likely, the best prediction I can make is actually just follow that data, that extrapolation and see where it's going to take us.</p>
</details>

**Julian:** 是的，在这种情况下，如果你推演下去，看看其他基准，我想我们明年可能会有能够自主工作一整天的模型。如果你考虑软件开发，你可能会说，“哦，实现这整个功能，构建这整个应用的一部分。”如果你考虑知识工作，也许是完成一份完整的研究报告，达到这种规模。我认为任务长度之所以特别有趣，是因为它允许你将越来越多的工作委托给语言模型和智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: And yeah, in that case, if you roll this out, if you look at other benchmarks, I think we would have something like next year, maybe the models will be able to work on their own for a whole day worth of tasks. If you think of software, right, you might say like, "Oh, implement this entire feature, build out this entire set of the app." If you think of knowledge work, right, if maybe do like a whole research report, this kind of scale. The reason I think why task length specifically is interesting is because that's what allows you to delegate more and more work to language models to agents.</p>
</details>

**Julian:** 即使你有一个非常聪明的模型，但如果它需要非常频繁地与你互动或获得反馈，那么你能委托给它的工作就非常有限。如果你需要每10分钟和它交流一次，情况就不同了。相比之下，如果你有一个可以连续工作数小时的东西，那么你显然不仅可以拥有它的一个副本，还可以拥有一个完整的团队，向他们分配任务并进行管理。所以我认为，模型和智能体足够聪明，能够独立工作、纠正自己的错误、进行迭代，这是至关重要的，因为这才是真正让你能够授权的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Even if you have a very clever model, but if it needs feedback or the interaction with you very often, then it really limits what you can delegate to it. If you need to talk to it every 10 minutes, right? Versus if you have something that can go for hours at a time, obviously, right? Then you cannot just have one copy of it. you can have a whole team that you delegate tasks to and manage them. And so I think that's why it's really critical that the models are actually smart enough, the agents are smart enough to work on their own to correct their own errors to you know iterate because that's really what allows you to delegate indeed.</p>
</details>

**Matt:** 你将任务长度和完成时间作为衡量进展的指标。所以到 2026 年中，你提到智能体可以全天自主工作。到 2026 年底，至少有一个模型在许多职业中能与行业专家相媲美。然后到 2027 年，模型在许多任务上将频繁超越专家。所以，这更多是关于运行时间，然后是跨经济领域的泛化能力。你提到了 GPQA-val，OpenAI 的那个指标，作为一个已经能看到向多种职业发展的基准。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Test length and time to complete as the metric for progress. So by mid-2026 you mentioned agents can work all day autonomously. Late 2026, at least one model matches industry experts across many occupations. And then by 2027, models frequently outperform experts on many tasks. So it's more time running and then generalization across the economy. And you mentioned GPQA-val, the OpenAI metric, as a benchmark to already see the progress towards multiple professions.</p>
</details>

**Julian:** 是的，我认为 GPQA 是 OpenAI 做的一个非常酷的评估，他们从真实的领域专家那里收集了大量真实世界的任务，以确保它能真正代表你在经济活动中可能做的事情。然后他们用这些任务评估了许多模型，并将它们的表现与真实专家的表现进行比较，这为我们提供了一个很好的指标，让我们了解我们距离产生重大经济影响还有多远。所以我认为这是一个非常酷的评估。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Yeah, I think the GPQA is like a super cool evaluation from OpenAI where they collected a lot of real world tasks from real domain experts to make sure it is actually representative of what you might do in the economy and then they evaluated a lot of models on those tasks. They compared them against real experts' performance to give us like a really good indication of how close, how far are we from having significant economic impact. So I think that's like a super cool evaluation.</p>
</details>

**Matt:** 一个显而易见的问题是，GPQA-val 和 METER 都是精心设计的基准。一旦你加入了合规性、责任、混乱的数据、混乱的世界、工具摩擦以及所有这些因素，它们如何预测生产价值？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: The sort of obvious question is that GPQA-val and METER are carefully designed benchmarks. How do they predict production value once you add compliance, liability, messy data, the messy world, tool friction and all the things?</p>
</details>

**Julian:** 我认为混乱程度和任务长度，也就是你能独立工作的时间长度，是非常相似或高度相关的。所以我认为 METER 试图衡量模型能自主运行多久是很有趣的，因为如果你想设计一个需要人类花费8小时或16小时的任务，你就必须包含所有这些混乱和现实世界的复杂性才能进行测量。但我认为，最终要走得更远，我们真正需要的是来自实际用户的基准和评估，无论是来自行业还是个人用户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: So I think like messiness and task length, like the time duration that you're able to work independently, are very similar or very correlated. So I think that's why it's interesting that METER tries to measure how long can the model go on its own because if you think about how do you come up with a task that takes a human 8 hours, 16 hours, right, you will have to include all these messiness and all this real world mess to even be able to measure it. But I think, ultimately, to go further, we really want benchmarks, we really want evaluations that come from the actual users, whether it's the industry, whether it's private users.</p>
</details>

**Julian:** 因为那才是最终重要的，对吧？这个模型对你有用吗？你从中得到了什么，它能帮你处理文书工作，帮你写东西，修复你的代码，帮助你学习吗？我认为这才是真正的证明。如果你发布一个新模型，人们会开始更多地使用它吗？他们真的喜欢它吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Because that's what ultimately matters, right? Like is the model helpful to you? Do you get something out of it, does your paperwork, helps you write something, fixes your codes, helps you study, right? I think that's the real proof. If you release a new model, right, do people start using it more? Do they really enjoy it?</p>
</details>

**Matt:** 有什么信号会改变你的想法吗？无论是现实世界的采用情况还是基准测试的表现，有什么会让你对这种指数级增长更加谨慎？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Is there anything that would change your mind? Any kind of signal, whether that's real world adoption or benchmark performance, something that would make you more cautious about that exponential? Is there anything that would change your mind?</p>
</details>

**Julian:** 当然，有很多事情。我认为很多这类事情都是内部的。我可能会看我们模型的预训练，看我们的微调，看**强化学习**（Reinforcement Learning, RL: 机器学习的一个领域，智能体通过与环境互动，根据获得的奖励或惩罚来学习如何做出最优决策）的情况，比如新的运行与过去的运行相比如何，它们是否符合我们的预期，规模化是否在继续。然后，我可能会看一些更公开的事情，比如人们是否真的能够使用这些模型来提高生产力。例如，在初期，总会有一个适应期，你有一个新工具，比如 Claude，你需要一些时间来弄清楚如何使用它。但在中期和长期，人们是否会继续使用它？他们在使用过程中是否变得越来越高效？我认为这是我关注的众多信号之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: I mean many things, yes. I think like many of these things are internal only, right? I might look at our model pre-training, I might look at our fine tuning, I might look at RL things, you know, how do new runs go compared to past runs, do they match our expectations, the scaling continue. Then I might look at more public things of like are people actually able to use those models to be more productive. For example, at the beginning, right, there's always some adaptation period of, "Oh, you have a new tool like Claude." It takes you some time to figure out how to use it. But then in the medium term, in the long term, do people keep using it? Are they getting more and more productive using it? I think that's one of the things I look at, many, many signals.</p>
</details>

**Julian:** 我认为当你做强化学习、做研究时，你会养成一种习惯，就是寻找能证明自己错误的信号。因为你常常会有一些你很执着的想法，但那不是做研究的好方法。你的大多数想法都不好，也不会成功。所以你真的想尽快弄清楚这个想法是否可行，或者它实际上是错的。所以你真的会养成这种习惯，去寻找能最快证明“哦，不，这其实不对”的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: I think when you do RL, when you do research, I think you get very much in the habit of looking for signals to prove yourself wrong because you often have ideas that you get attached to, but that's not a good way to do research, right? Most of your ideas are not good and they're not going to work. So you really want to figure out as quickly as possible whether this idea is any good or whether it's actually wrong. So you really get into this habit of like, "Oh, finding the fastest thing that will show that, 'Oh no, this is actually not true.'"</p>
</details>

### 超越人类：AI的创造力与“第37手”

**Matt:** 所以在你的推断框架中，到 2026-2027 年，AI 将变得和人类一样出色。当下有一个关键问题是，它能在多大程度上变得比人类更出色？最近有一些关于**第37手**（Move 37: 在2016年AlphaGo与世界冠军李世石的比赛中，AlphaGo下出的一步出人意料、颠覆传统围棋理论的棋，被认为是AI创造力的体现）的讨论，以及 AI 是否能创造出那种“外星人”般的全新思维方式来解决难题。所以，首先，也许可以提醒一下观众什么是“第37手”，然后你认为当前状态下的 AI 是否会越来越有能力提供“第37手”式的思维？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: So by 2026-2027 in your extrapolation framework, AI becomes as good as humans. A key question of the moment is to which extent can it become better than humans? There's some chatter these days around move 37 and whether AI can create those like alien new paths to think and solve hard problems. So first of all, maybe remind the audience what move 37 is and then do you think that AI in its current state is going to be increasingly able to provide move 37 type thinking?</p>
</details>

**Julian:** 是的。我想先介绍一下背景，第37手发生在我们构建 AlphaGo 这个围棋 AI 程序的时候，那大概是 2016 年。我们当时正在与世界上最顶尖的棋手之一对弈。因为在那个时候，还没有任何 AI 程序或计算机程序在围棋上击败过顶尖的人类棋手，围棋被认为是最困难的棋盘游戏之一，是对智力的真正考验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Yes. So I guess to give background, move 37, that was when we were building AlphaGo, an AI program to play the game of Go. That was in the year 2016, I think, and we're playing one of the best players in the world at the time because at that time, no AI program, no computer program had ever beaten the top human players at Go, and it was considered to be one of the most difficult board games, sort of like a real test of intelligence.</p>
</details>

**Julian:** 第37手发生在五番棋的第二局，当时 AlphaGo 下出了一步非常出人意料、非传统的棋，让许多职业围棋选手都感到惊讶。我记得当时的评论员说那一步棋是真正富有创造性、出乎意料的，最终 AlphaGo 赢得了那场比赛。所以我认为，对许多人来说，那是一个早期的迹象，表明 AI 不仅仅是纯粹地计算、遵循最优路径，它也能做出一些真正新颖和有创造性的事情，这是你可能不会仅仅从模仿其训练数据中预料到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Move 37 happened during the second game of the five-game match where AlphaGo played a really unexpected, unconventional move that surprised many professional Go players. I think the commentator said it was truly creative, unexpected, and then ultimately AlphaGo ended up winning that game. And so I think that was for many people an early sign that AI is not just purely calculating, following an optimal path, but it can also do something that is truly novel and creative that you might not expect just from imitating its training data.</p>
</details>

**Julian:** 是的，我认为这在现代背景下也非常有意义，对吧？因为正如你所提到的，有很多关于“大语言模型（LLM）是否只是在模仿训练数据？”的讨论。它们真的能做新颖的事情吗？对我来说，作为一个从事研究很长时间的人，我认为这些模型显然可以做新颖的事情。这就是为什么它们对许多人都如此有用，无论是为你编写代码——因为显然你不是在写你已有的代码，那没什么意思——还是帮助你写论文。这些模型的训练方式，实际上就是被训练来生成一个完整的概率分布，这意味着当我们从中采样时，我们可以生成无限量的新颖序列。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Yeah, I think that's very relevant in a modern context as well, right? Because as you alluded to, there is a lot of discussion of, "Oh, are LLMs just parroting the training data? Can they actually do novel things?" For me, as somebody who has been doing research a long time, I think it's pretty clear that these models can do novel things. And that's why they are so useful to many people, whether it's writing code for you, because obviously, right, you're not just writing code that you already have, that wouldn't be very interesting, or helping you write a paper. The way those models are trained, they're literally trained to generate a whole probability distribution, which means that when we sample from them, we can generate an infinite amount of novel sequences from them.</p>
</details>

**Julian:** 对于像“第37手”这样的问题，我认为关键在于，它是否足够有创造性和震撼力，以至于我们能在围棋比赛中轻易识别出来。在围棋中，条件非常理想，因为它非常干净、抽象，每一步棋都影响巨大，所以你可以看得很清楚。我认为，要让我们的现代模型实现等效的效果，你需要一个既足够困难又足够有趣的任务，以及一个既能创造出足够多样和有创意的想法，又能准确评估这些想法好坏的模型。这样它才能走上越来越新颖的道路，同时确保这条新颖的道路实际上是有趣和有用的。用语言模型创造新颖的东西其实很容易，难的是创造出有用且有趣的新颖事物。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: For the question of something like move 37, I think there it really comes down to, is it something that is sufficiently creative and impressive that we can easily recognize it? In the game of Go, that was pretty ideal conditions because it's very clean, very abstract, you can really, each move is very impactful, so you can really see it clearly. I think to have the equivalent for our modern models, you need the combination of a task that is sufficiently difficult and interesting, and a model that is both able to create sufficiently diverse and creative ideas and also able to evaluate accurately how good they are so that it can go down increasingly novel paths while making sure that this novel path is actually interesting and useful. Creating novel things is actually very easy with language models. The hard part is creating novel things that are useful and interesting.</p>
</details>

### AI 与科学发现：下一个诺贝尔奖得主？

**Matt:** 进一步推断，就有了创造新科学的想法。不仅仅是一步棋，而是一个全新的思想，一个新概念。你目前对此有何看法？我认为 AlphaCode 和 AlphaTensor 证明了你可以发现新的程序和算法。就在最近，我想是上周，有消息说 Google DeepMind 和耶鲁大学在生物医学领域也取得了一些全新的成果。所以你认为这个进程在加速吗？AI 是否正在发现新科学的过程中？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Extrapolating this further, there's the idea of creating novel science. So not just one move but like a whole new idea, new concept. What's your current take on this? So I think AlphaCode and AlphaTensor proved that you can discover novel programs and algorithms. Very recently, I think last week, there was some news of Google DeepMind and Yale in the biomedical field coming up with brand new things as well. So do you think that's accelerating and that AI is in the process of discovering novel science?</p>
</details>

**Julian:** 我认为我们绝对处于它正在发现新事物的阶段，我们只是在不断提升它能够独立发现的事物的震撼程度和趣味性。所以我认为，明年某个时候，我们很可能会有一些发现，让人们几乎一致地认为“这太令人印象深刻了”。我认为目前我们更多地处于“哦，它想出了点东西，但还存在争议”的阶段。但我对此并不太担心，因为我看到这个过程在持续，一旦它变得足够清晰，争论的必要性就会减少。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: So I think we're absolutely at the stage where it is discovering novel things and we're just moving up the scale of how impressive, how interesting are the things that it is able to discover on its own. And so I think it's highly likely that sometime next year we're going to have some discoveries that people pretty unanimously agree that, "This is super impressive." I think at the moment we're more at the stage of, "Oh, it came up with something, but there's debate about it." But yeah, I'm not very worried because I see this process continuing and then once it gets clear enough, there's less need to argue about it.</p>
</details>

**Matt:** 你认为我们离 AI 赢得诺贝尔奖还有多远？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: How far do you think we are from an AI winning the Nobel Prize?</p>
</details>

**Julian:** 是的，我认为这是一个非常有趣的问题，对吧？因为我们已经有了一个因 AI（AlphaFold）而获得的诺贝尔奖。所以，我认为下一个非常有趣的节点将是，AI 何时能独立取得一个如此有趣的突破，以至于它能赢得诺贝尔奖。我猜测，达到那种能力水平可能是在 2027 年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Yeah, I think that's a really interesting question, right? Because we had a Nobel Prize for AI with AlphaFold, of course. And so I think the next very interesting point is going to be when can AI on its own make a breakthrough that is so interesting that it would win a Nobel Prize. And I think my guess for that level of capability might be maybe 2027.</p>
</details>

**Julian:** 我想我们可能要过很长一段时间才能知道结果，因为颁奖有延迟，但我认为到 2027 年或 2028 年，模型极有可能足够聪明、足够有能力，真正拥有那种水平的洞察力和发现能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: I think we're probably not going to find out for quite some time afterwards because of the delay in getting prizes, but I think by 2027, 2028, I think extremely likely that the models will be smart enough and capable enough to actually have that level of insight on that level of discovery.</p>
</details>

**Matt:** 太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Amazing.</p>
</details>

**Julian:** 是的，诺贝尔奖，就像数学领域的菲尔兹奖和所有这类进步一样。我认为，这正是我真正兴奋的地方：能够帮助我们推进科学、真正解开宇宙所有奥秘，并为我们解锁所有生活水平和能力的提升的 AI，如果我们能更好地理解世界的话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: I think yeah, Nobel Prize, right? It's like the Fields Medal for math and all these kind of advances. I think that's what I'm truly excited about actually is AI that can help us advance science and really unlock both all the mysteries of the universe and all the improvements in living standards and abilities for us that we could have if we understood the world better.</p>
</details>

### 通往AGI之路：当前范式是否足够？

**Matt:** 好吧，再进一步推断，我们就进入了你可能看到的那个“AI 2027”的话题。这个普遍的观点是，如果 AI 能创造新科学，那么 AI 就能创造 AI 研究员，基本上 AI 就能创造自己，这实际上会导致一个不连续的时刻。我不知道在博客文章中那是否就是奇点之类的。但作为一个身处该领域最深处的人，你觉得这在短期内可能发生吗？还是说存在一些制衡力量，让你越接近不连续点，道路就越艰难？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: All right. So extrapolating this even further then we get into the "AI 2027" thing that you probably saw. So this general idea of if AI can create novel science then AI can create AI researchers and basically AI can create itself which effectively leads to a discontinuity moment. So I don't know if that in the blog post that's the singularity or whatever. But does that strike you as somebody who's as deep in the field as possible as something that is possible in the short term or are they counterbalancing forces that makes that path to discontinuity harder as you get closer?</p>
</details>

**Julian:** 是的，我认为真正的不连续性是极不可能的。因为很明显，AI 研究人员已经在利用 AI 来加速自己的工作。所以正在发生并且很可能继续发生的是，我们看到生产力的平稳提升。那么主要的开放性问题是，改进 AI 的难度会如何持续变化。因为在许多科学领域，一个非常普遍的现象和问题是，我们首先会发现所有简单的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Yeah, I think a true discontinuity is extremely unlikely from, you know, obviously AI researchers are already using AI to accelerate themselves and so what's already happening and what is likely to continue to happening is that we see a smooth improvement of productivity. And then the main open question is how does the difficulty of improving AI keep scaling because a very common effect and a very common issue in many scientific fields is that we find all the easy problems first.</p>
</details>

**Julian:** 然后，随着我们继续探索这个领域，取得进展变得越来越困难。所以在我看来，主要问题是这两个趋势是否会相互平衡，即 AI 使我们越来越高效，以至于当取得进展变得更加困难时，我们只是大致保持在趋势线上，然后我们继续大致线性地改进。或者，它仍然太困难，然后在一段时间后我们仍然看到放缓。但在我看来，我们生产力提高如此之多以至于能够真正加速，这似乎相当不可能。那将非常不同于任何其他科学领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: And then as we continue exploring the problem, the field, it gets more and more difficult to make advances. So in my mind the main question is do these two trends balance each other out so that the AI makes us increasingly more productive so that as it gets more difficult to make advances we just sort of about stay on trend and then we keep improving roughly linearly. Or it is still too difficult and then eventually after some time we still see a slowdown. But it seems quite unlikely to me that we improve in productivity so much that we can actually accelerate. That would be very unlike any other scientific field.</p>
</details>

**Julian:** 在许多科学领域，正常的进程是，我们实际上需要指数级地增加研究投入，才能持续取得进展并找到新的见解。例如，如果你看看药理学中发现新药的过程，如今发现一种新药的成本在数十亿美元的范围内，而大约100年前，一个科学家可能偶然就能发现第一种抗生素。我们不会被突然的进展起飞所惊讶，比如“哦，我们正在做研究，突然我们的模型好了10倍。”我们会看到一些预兆，比如“哦，我们每周都在取得更快的进展，我们能看到有事情正在发生。”也许如果我们不明白发生了什么，我们会决定暂停。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: The normal course in many scientific fields is that we actually need to exponentially increase the research effort just to keep making progress and find new insights. For example, if you look at pharmacology discovering new drugs, it's nowadays in the range of billions of dollars to discover a new drug versus maybe 100 years ago a single scientist could discover the first antibiotic by accident. It's not that we will be surprised by a sudden takeoff in progress where, "Oh, we're just doing our research and suddenly our model is like 10x better." We will be seeing advanced signs of, "Oh, we're making faster progress every single week. We can see something is happening." Maybe we decide to pause if we don't understand what's happening.</p>
</details>

**Matt:** 你认为当前构建现代 AI 系统的方法——实际上就是**预训练**（Pre-training: 在大规模通用数据集上训练模型以学习广泛知识和模式的过程，之后可以在特定任务上进行微调）加上强化学习——能带我们到达我们想去的地方吗？无论我们称之为 **AGI**（Artificial General Intelligence: 通用人工智能，指拥有与人类同等智慧，能理解、学习和应用知识于广泛任务的AI）还是 **ASI**（Artificial Superintelligence: 人工超级智能，指在几乎所有领域都远超最聪明人类智慧的AI），这些词的含义都不清楚。但你是否觉得这个范式是正确的，还是我们需要提出一个完全不同的架构，后Transformer时代或其他？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Do you think the current approach to modern AI systems which effectively is pre-training plus RL does that take us to where we want to be? Whether we call it AGI, ASI, it's unclear what any of the things mean. But do you feel that this paradigm is the right one or do we need to come up with a different architecture all together post-Transformers or otherwise?</p>
</details>

**Julian:** 我认为这是一个很好的问题，而且我认为这在很大程度上取决于你所说的“我们想去的地方”是什么意思。如果你想的是某种能够在我们关心的几乎所有生产力任务上达到大致人类水平的系统，那么我认为，是的，当前的方法，预训练或Transformer，极有可能让我们达到那里。如果你关心的是，哦，我们想要一个像我们一样有意识的智能模型，或者更抽象的品质，我认为那可能更不确定。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: I think that's a great question and I think it hugely depends on what you mean by where do we want to be. So I think if you're thinking of, "Oh, we want some kind of system that can perform at roughly human level in basically all tasks that we care about productivity wise," then I think yeah, it's extremely likely that the current approach, pre-training or Transformers, is going to get us there. If what you care about is, "Oh, we want to have a model of intelligence that is conscious in the same way we are," or more abstract qualities like this, I think that's maybe more uncertain.</p>
</details>

**Julian:** 我认为这正是很多困惑和分歧的来源。正如你提到的，AGI、ASI，人们谈论的是非常不同的东西，当他们说“当前范式能实现”或“不能实现”时，他们心中想的也大相径庭。我常常不喜欢使用 AI 或 ASI 这样的术语，而是非常具体地谈论我们正在解决什么问题，什么任务，我们对什么品质感兴趣，因为我发现这常常能让实际的分歧变得更加明显。但如果你只是从“这能帮助我们大幅提高生产力吗？”“这能大幅加速科学进步吗？”的角度来思考，那么我认为，当前的方法肯定能实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Right, and I think this is where a lot of the confusion and disagreement comes from. As you alluded to, AGI, ASI, people talk about very different things and they have very different things in mind when they say, "Oh, the current paradigm is going to get there, it's not going to get there." I often like to not use the term AGI or ASI and just talk very concretely about what problem are we solving, what task are we solving, what quality are we interested in, because I find that often makes the actual disagreement much more obvious. But yeah, I think if you're just thinking of in terms of like, "Is this going to help us be massively more productive? Is this going to massively accelerate scientific progress?" then I think definitely the current approach will get there.</p>
</details>

**Matt:** 鉴于你在这个领域的深度，我忍不住要问你那个时髦的问题，这是基于 Richard Sutton 最近在 Dwarkesh 播客上的露面。你认为未来的模型会从零开始用强化学习训练吗？在强化学习之外再加上预训练，实际上是错误的做法吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: And given how extremely deep you are, I cannot resist asking you sort of the trendy question du jour based on Richard Sutton's recent appearance on Dwarkesh podcast. Do you think that the models of the future will be trained in RL from scratch and that actually having pre-training in addition to RL is the wrong way to go?</p>
</details>

**Julian:** 我个人认为这不太可能。不是因为预训练是绝对必要的。我认为我们很可能能够像在其他领域一样，完全从零开始训练。而是因为在我们拥有的大量数据集上进行预训练给我们带来了巨大的价值，从实践的角度来看，我们不想放弃它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Personally, I think that's unlikely. Not because pre-training is strictly necessary. I think we may well be able to train something completely from scratch as we've been able to do in other domains. But more because pre-training on this vast data sets we have just brings us so much value that we would from a practical point of view not want to give it up.</p>
</details>

**Julian:** 所以，我们可能会出于科学兴趣，做一些从零开始训练的智能体。了解一个非人类的智能会是什么样子，可能会非常有趣。但从务实的角度来看，我绝对认为我们会继续使用预训练数据。这不仅是出于效率的考虑，也因为我认为这里面有有趣的安全角度。通过在所有这些人类知识上进行预训练，我们实际上是在创造一个与我们拥有相似价值观的智能体。我认为这对于对齐一个高度智能的智能体非常有价值，如果你一开始就关心大致相同的价值观集合，这会让事情变得容易得多，而不是创造一个可能拥有完全不同价值观的任意的外星智能。尽管我过去做过很多从零开始的强化学习，但我通常对此持非常务实的态度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: So we might well do some agents that are trained from scratch out of scientific interest. It could be very interesting to learn about what would a non-human intelligence look like. But from a pragmatic point of view, I definitely think we would keep using pre-training data. Not just from an efficiency point of view as well, but also I think there is interesting safety angles because by pre-training on all this human knowledge, we're implicitly creating an agent that has similar values as we do and I think that is quite valuable for aligning a highly intelligent agent. If you already start out by caring about sort of the same rough set of values, that makes things much easier than if you create an arbitrary alien intelligence that may have completely different values. Despite having done a bunch of from-scratch RL in the past, I think I'm often quite pragmatic about this.</p>
</details>

### 从游戏引擎到AlphaGo：一位顶尖研究员的历程

**Matt:** 我很想在稍后的对话中，就对齐和我们为确保安全所做的工作这个具体讨论上做一个标记，因为我认为这是一个非常有趣的话题。但也许我们可以暂时换个话题。我很想了解一下你的故事，以及你在加入 Anthropic 之前，在 Google DeepMind 围绕 AlphaGo、AlphaZero、MuZero 所做的里程碑式的工作。所以，也许可以讲讲你从童年开始的个人故事的三四分钟版本。是什么样的道路让你成为了一位世界级的 AI 研究员？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: I'd love to put a pin in that specific discussion about alignment and what we do to ensure safety to later in the conversation because I think that's a super interesting vein. But maybe to switch tacks for a minute. I'd love to go into a little bit of your story and then the monumental body of work that you've done at Google DeepMind before joining Anthropic around AlphaGo, AlphaZero, MuZero. So maybe just the three, four minute version of your personal story from when you were a kid. What was the path that led you to become a world-class AI researcher?</p>
</details>

**Julian:** 实际上，我小时候并没有期望成为一名 AI 研究员。我一直对电脑很感兴趣，我是在奥地利乡村的一个小村庄长大的。所以，那里并没有太多事情发生，但电脑对我来说总是很有趣。它就像是连接到更广阔世界、连接到所有其他有趣事物的纽带。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Yeah, actually when I was a kid, I didn't have any expectations of becoming an AI researcher. I was always very interested in computers and I grew up in the Austrian countryside in a small village. So, you know, it's not like there was a huge amount of things happening, but computers were always very interesting to me. It's like this connection to the wider world, to all these other interesting things.</p>
</details>

**Julian:** 我对电脑游戏也非常感兴趣。我想那是我第一次对编程产生兴趣的时候，因为我想制作自己的游戏，这在刚接触编程的人中很常见。但我不知何故总是被技术方面分心，想着要构建一个可以运行任何类型游戏的非常通用的游戏引擎。结果我从未真正制作出任何游戏。但我学到了很多关于制作游戏引擎和不同技术的知识，最终我在维也纳学习了计算机科学。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: And I was very interested in computer games as well. And I think that's the first time I became interested in programming because I wanted to make my own games, which I think is very common in people who get into programming. But I somehow I always got distracted by the technical aspect of, "I'm going to build a very general game engine that can run any kind of game." And so I never actually ended up making any game. I learned a lot about making game engines and different technologies and that's how I ended up studying computer science eventually in Vienna.</p>
</details>

**Julian:** 那是一个经典的计算机科学学位。然后很偶然地，在我第一年的第一个暑假，我在 Google 实习。那时我才意识到，“哇，这些家伙在做非常有趣的事情。”那里有他们的大型集群，成千上万台机器。那是我第一次彻底改变了我想留在学术界的计划。我原本想，“哦，也许我读个博士。”但那时我改变了想法，“哦，不，我其实只想加入 Google 的这些人。”我会尽快完成我的学位。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Yeah, there was like a classical computer science degree and then by chance after my first year in my first summer holidays I had an internship with Google and that's when I realized, "Oh wow, these guys are doing really interesting things." They, you know, that's where their big clusters, the tens of thousands of machines are. That's the first time I radically changed my plans from wanting to stay in academia and you know, I had originally thought, "Oh, maybe I do a PhD." That's when I changed, "Oh no, actually I just want to join these guys at Google and I will finish my degree as quickly as possible."</p>
</details>

**Julian:** 所以，我实际上是在拿到 Google 的全职职位后，第二年完成了我的学位，然后搬到了伦敦。我当时只是在 Google 做一名普通的软件工程师，实际上是在广告部门工作，我对此并不是特别兴奋或感兴趣。技术本身很有趣，对吧？是那些巨大的系统，而且 Google 的技术众所周知非常棒。但实际上，大约一年后，我对广告感到非常厌倦。所以我当时正计划离开 Google，考虑加入一家对冲基金，进入金融行业。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: And so that's actually when I got my full-time position at Google, finished my degree the next year and then moved to London. So I was just working as a normal software engineer at Google, working actually in advertising, which I wasn't super excited or interested in. So the technology was interesting, right? It's like these huge systems and Google has famously great technology. But actually after a year-ish of this, I was pretty done on board of advertising and so I was actually planning to leave Google and thinking of maybe joining a hedge fund, going into finance.</p>
</details>

**Julian:** 就在这时，我偶然在工作收件箱里看到一封邮件，说一个叫 Demis 的人要来办公室做一个关于雅达利（Atari）游戏、视频游戏和 AI 的演讲。那天我其实是休假，因为我正在英格兰别处拜访一个朋友。但那封邮件看起来太吸引人了，我心想，“哦不，我必须现在就坐火车回办公室，去听这个演讲。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: When by chance I saw an email in my work inbox that this guy Demis was going to come to the office and give some talk about Atari and video games and AI. And it was actually a day off because I was visiting a friend somewhere else in England. But that email looked so intriguing that I was like, "Oh no, I'm going to have to like take the train back to the office right now and like see this talk."</p>
</details>

**Julian:** 是的，我真的很高兴我看到了那封邮件并且回去了。因为那正是我决定，“哦不，我不去金融行业了，我要去 DeepMind，我要加入这些人”的时刻。因为这看起来显然非常有趣，非常了不起。他们在做真正有趣的研究。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: And yeah, like I'm really glad that I saw this email and I did go back because that's the moment where I decided, "Oh no, I'm not going to go into finance. I'm going to move to DeepMind. I'm going to join these guys because this looks clearly super interesting, super amazing. They are doing really interesting research."</p>
</details>

### AlphaGo 传奇：从模仿人类到无师自通

**Matt:** 好的。给我们讲讲 AlphaGo、AlphaGo Zero、Alpha Zero、MuZero 的故事吧。因为感觉这就像是基础的 AI 知识，每个对这个领域感兴趣的人都应该了解，特别是应该理解其演进过程。所以，从 AlphaGo 的开始讲起，你刚才提到了它，但它具体做了什么？它是如何训练的？然后每个版本又是如何演进的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: All right. Tell us the story of AlphaGo, AlphaGo Zero, Alpha Zero, MuZero. Because it feels like it's fundamental AI knowledge that everybody who has an interest in the space should know about, should understand the progression in particular. So starting with the beginning of AlphaGo, you alluded to it a second ago, but what did it do? How was it trained and then how did that evolve with each version?</p>
</details>

**Julian:** 我认为在那个时候，围棋在机器学习社区是一个非常大的目标，每个人都觉得这是一个巨大的未解挑战。ImageNet 刚刚发生，所以很明显，模型开始能处理图像，能够识别和预测它们。如果你以正确的方式看围棋棋盘，它很像那些你分类的图像。所以当时围绕着用神经网络来下围棋有很多动力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: AlphaGo, I think at that moment in time, Go in the machine learning community was this really big target where everybody felt like, "Oh, it's this big unsolved challenge." ImageNet had just happened before so clearly models were starting to do something with images and being able to recognize them and predict them. And if you look at the Go board the right way, it looks a lot like one of those images that you classify. So there was a lot of momentum around using neural networks to somehow play Go.</p>
</details>

**Julian:** 当时，David Silver 和 Aja Huang 已经在围棋上工作了一段时间，我想他们俩都在围棋上工作了很久，发表了一些非常有趣的论文。就在那时，将蒙特卡洛树搜索与深度网络结合的想法应运而生。这个想法是训练一个深度神经网络来预测你可能想下的棋步，以及你是赢是输，然后使用树搜索来制定一个宏大的计划，考虑游戏中的所有可能性。如果你选择某一步棋或另一步棋，情况会如何发展？对手会如何回应？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: And then at the time, David Silver and Aja Huang had been working on Go, I think both of them had been working on Go for quite a while, had published some very interesting papers. And that's when the idea of using Monte Carlo tree search with deep networks came together. So the idea was that to train a deep neural network to predict which moves you might want to play and whether you're winning or losing the game, and then use the tree search to really make a big plan of what are all the possibilities in the game. How would it go for you if you chose a certain move or a different move? How would the opponent respond?</p>
</details>

**Matt:** 用非常通俗的英语来解释，这里的“搜索”正如你所说，是研究，而不是人们通常认为的搜索，即搜索一个语料库。这是在搜索一系列选项。这样理解对吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: And to explain this in super plain English, the term search in this case is as you said is research, is not what people normally think of search which is searching a corpus. This is searching a series of options effectively. Is that the right way to think about it?</p>
</details>

**Julian:** 是的。这和你下象棋或任何棋盘游戏时可能做的事情完全一样。它就是字面意义上的思考，“我要下哪一步？我的对手会如何回应？”然后思考许多这样可能的棋步，并规划出未来所有的可能性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Yes. It's quite literally what you might do when you play a game of chess, when you play any board game. It's quite literally thinking of, "What move am I going to do? What move is my opponent going to do in return?" and then thinking about many possible moves like that and mapping out all the possibilities in the future.</p>
</details>

**Matt:** 所以是深度学习加上搜索。AlphaGo 是用什么训练的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: So deep learning plus search. What was AlphaGo trained on?</p>
</details>

**Julian:** 如果我没记错的话，AlphaGo 的初始训练阶段是基于一些人类业余棋局。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Initial training phases of AlphaGo were on some human amateur games if I remember correctly.</p>
</details>

**Matt:** 嗯。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Mhm.</p>
</details>

**Julian:** 基本上就是预测，如果你有人类下了很多盘围棋，试着在棋局的每一回合预测他们会下哪一步。事实证明，如果你训练一个深度网络来做这件事，你可以得到一个相当不错的，达到业余围棋水平的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: So basically just predicting if you have humans playing many games of Go, try to predict at each turn in the game what move would they have played? And it turns out that if you train a deep network to do that, you can get something pretty decent, like amateur Go level.</p>
</details>

**Matt:** 嗯，嗯。但还不足以真正击败一个非常强的棋手。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Mhm. Mhm. But not good enough to actually beat a really strong player.</p>
</details>

**Matt:** 顺便问一下，就为了增加点传奇色彩，你们当时有没有感觉它会击败李世石？就是你之前提到的那位著名的围棋选手。赛前这是显而易见的吗？还是一个惊喜？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: And by the way, just for the lore of it, did you guys have any sense that it was going to crush Lee Sedol? So, the famous Go player that you mentioned earlier in the conversation? Was it obvious before? Was that a surprise?</p>
</details>

**Julian:** 我们认为我们有相当大的机会，但我们非常紧张，担心“我们会赢吗？我们不会赢吗？我们会输吗？”是的。我们赛前实际上还打了一些赌，赌我们会赢或输多少局。我认为我们那么早就安排比赛是非常有野心的。如果我们想更稳妥一点，我们可能会尝试晚几个月。而且我认为，如果我们早几个月比赛，我们很可能会输。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: We thought we had a pretty good chance, but we were very nervous about like, "Are we going to win? Are we not going to win? Are we going to lose?" Yeah. We actually had some bets beforehand of like how many games we're going to win or lose. Like I think it was very ambitious to put the match as early as we did. If we had wanted to be a bit more safe, we may have tried to do it a few months later. And I think if we had done it a few months earlier, we would have probably lost.</p>
</details>

**Julian:** 所以那真是在刀刃上，我想这也让它对我们来说更有趣了，对吧？因为这真的意味着每一局都像一场惊心动魄的比赛，“哦，会发生什么？我们会赢吗？我们会下出愚蠢的一步吗？会发生什么？”所以那非常刺激。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: So it was very knife edge of, I guess, which also made it much more interesting for us, right? Because it really means that each game is like a nail-biter of, "Oh, what's going to happen? Are we going to win? Are we going to play a dumb move? What's going to happen?" So that was very exciting.</p>
</details>

**Matt:** AlphaGo Zero，我相信是在一年后。它有什么不同？进展是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: AlphaGo Zero which was I believe the year after. How was that different? What was the progression?</p>
</details>

**Julian:** AlphaGo 和 AlphaGo Zero 之间的主要变化是去除了所有人类的围棋知识。所以，我们不是从模仿人类围棋棋局开始，而是完全从零开始训练它，只与自己对弈，并基本上重新发现所有围棋知识，完全从零开始弄清楚如何下棋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Main change between AlphaGo and AlphaGo Zero was to remove all the human Go knowledge. So instead of starting by imitating human Go games, we were training it just from scratch playing only against itself and rediscovering basically all Go, completely figuring out from scratch how to play.</p>
</details>

**Matt:** 你们给了它游戏规则吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Did you give it the rules of the game?</p>
</details>

**Julian:** 我们没有直接把游戏规则给网络本身，但我们用游戏规则来评判结果。所以基本上，它会下棋，然后我们会告诉它谁赢了谁输了，或者你不能下这一步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: We didn't give the rules of the game to the network per se, but we used the rules of the game to score the result. So basically, he would play and we would tell it who won, who lost, or you cannot make this move.</p>
</details>

**Matt:** 所以下一跳是 Alpha Zero，那是在一两年后。它有什么不同？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: So the next hop was Alpha Zero which was a year or two later. How is that different?</p>
</details>

**Julian:** 对于 Alpha Zero，想法是，显然围棋是一个非常优美的游戏，但最终我们想做一些更通用的事情，对吧？所以，我们能否移除任何特定于围棋的东西，并验证该算法实际上可以解决更多问题？在那个案例中，我们通过尝试用同一个算法解决国际象棋、围棋和日本将棋（shogi）来做到这一点。用同一个网络结构，只是在不同的游戏中运行它，同时也让它变得更简单、更优雅、更快。所以，那基本上是为将算法应用于解决实际问题奠定了基础。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: So for Alpha Zero, the idea was, well, obviously Go is a really beautiful game but ultimately we would like to do something more general, right? So can we remove anything that is Go-specific and verify that the algorithm can actually solve more problems? And in that case, we did that by trying to solve both chess, Go, and shogi, which is a Japanese chess basically, with the same algorithm, the same network structure, just by running it in different games and also making it much simpler, elegant, and faster. So basically that was really laying the groundwork for applying the algorithms to solve real problems.</p>
</details>

**Matt:** 然后，这个旅程的下一站是 MuZero。为了让大家了解，我相信你是 AlphaGo Zero 的第二作者，也是 MuZero 的第一作者。在 AI 的世界里，这就像是天花板级别的成就了。所以，我会说出来，这样你就不必说了。那么，MuZero 有什么不同？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: And then the next stop in the journey was MuZero. And just to bring it home for people, you were I believe second author on AlphaGo Zero and you were the lead author on MuZero which in the world of AI is as big a deal as it gets. So I'll say it so you don't have to say it. So MuZero, what was how was that different?</p>
</details>

**Julian:** 我制作 MuZero 的主要动机是，如果你想解决许多现实世界的任务，你没有办法完美地模拟将会发生什么。你知道，如果你玩棋盘游戏，显然你知道如果你下这一步，会发生什么。棋子会移动到那里，会吃掉一个子，诸如此类。但如果你真的想解决像机器人任务或任何更复杂的事情，你不可能准确地模拟将会发生什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: So the main motivation I had for making MuZero was that if you want to solve many real world tasks, you have no way of perfectly simulating what's going to happen. And you know, if you play a board game, obviously you know if you make this move, what's going to happen. It's like the piece is going to go there, it's going to take a piece, whatever, right? But if you actually want to solve something like a robotics task or anything more complicated, it's impossible for you to simulate what's going to happen accurately.</p>
</details>

**Julian:** 而且，我们作为人类也不这样做，对吧？我们只是在脑海中想象，“哦，如果我这么说，他可能会那样回应。”这意味着 Alpha Zero，就其本身而言，无法应用于这类问题，因为它需要某种方式来模拟游戏、评估结果。而 MuZero 的想法是，我们已经有了一个深度神经网络，对吧？这些网络可以学习很多东西，所以为什么不让它、为什么不教它去预测环境的未来、世界的未来呢？为什么不让模型能够自己学习，在它采取每一个行动后，将会发生什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: And also we as a human we don't do this right? We just imagine in our head of, "Oh, if I'm going to say this then he's probably going to respond in that way." This meant that Alpha Zero as it was could not be applied to such problems because it required some way of simulating the game, scoring the outcomes. And the idea with MuZero was that, well, we already have a deep neural network, right? These networks can learn a lot of things, so why not let it, why not teach it to predict the future of the environment, the future of the world? Why not make the model be able to learn for itself, what is going to happen after each action it takes?</p>
</details>

### 现代AI智能体：预训练与强化学习的融合

**Matt:** 在那之后，你也把这个应用到了代码和数学上。那就是 AlphaCode 和 AlphaTensor。所以，稍微宏观地看，从游戏中的强化学习，到代码，再到数学的演进。你从搜索和学习的通用能力中学到了什么，这些在今天的现代智能体 AI 系统中仍然适用？那整个系列的工作是如何转化为你今天所做的事情的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: After that, you also applied this to code and math. So that was AlphaCode and AlphaTensor. So like zooming out a little bit, that evolution of reinforcement learning in games and then code and then math. What did you learn about the general power of search and learning that is today relevant in modern agentic AI systems? How did that whole body of work translate to what you are doing today?</p>
</details>

**Julian:** 游戏是一个非常好的沙盒，可以让你非常快速地学习很多关于强化学习科学的知识。你知道，哪些算法效果好，我们会遇到什么样的问题，甚至从技术的角度看，我们如何构建一个跨越多个数据中心、使用数万台机器的学习系统。因为游戏是非常干净的沙盒，非常干净的环境，所以我们可以做很多好的实验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: So games are a really good sandbox to learn very quickly about a lot of the reinforcement learning science. You know, the algorithms that work well, the kind of problems that we encounter, the even from a technical point of view, how do we build a learning system that spans many data centers, uses tens of thousands of machines? Because games are very clean sandbox, very clean environments, so we can make many good experiments.</p>
</details>

**Julian:** 现在我们有了一个更通用的模型，对吧，语言模型几乎可以做任何任务，但它们要复杂得多，实验起来也慢得多。我们可以应用同样的经验教训，比如，“啊，我们知道如何构建一个真正稳健的强化学习基础设施。”现在我们可以为语言模型构建同样的基础设施。或者，“我们知道如果你做这种强化学习，模型会学会利用奖励。”所以我们可以将同样的教训、同样的缓解技术应用到语言模型上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: And then now that we have a much more general model, right, the language models can do almost any task, but they're much more complicated. They're much slower to experiment with, we can apply those same lessons of, "Ah, you know, we know how to build a really robust reinforcement learning infrastructure." And now we can build the same one for language models or like, "You know, we know if you do this kind of RL, then the model will learn how to exploit the reward." And so we can apply the same lessons, the same mitigation techniques to the language models.</p>
</details>

**Matt:** 如果我理解正确的话，我认为 MuZero 有一个学习到的世界模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: If I understand correctly I think MuZero had a learned world model.</p>
</details>

**Matt:** 基本上，可以不恰当地说，是预演未来。那么，现代大语言模型智能体有类似的东西吗？它们有内部世界模型，让它们在行动前可以预览结果吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Basically sort of rehearse the future for lack of a better expression. So do modern LLM agents have anything like that? Do they have an internal world model that lets them preview actions before they commit?</p>
</details>

**Julian:** 我认为是的。我会说语言模型没有一个明确的世界模型，但它们确实有一个隐含的世界模型。因为为了能够预测这个句子中下一个可能的词是什么，这个段落将如何继续，它们需要在内部模拟出是什么样的世界状态导致这个人说出那句话。所以，这实际上与 MuZero 有些相似，因为 MuZero 也只有一个隐含的世界模型。它从未被训练来预测，如果你采取一个行动，屏幕实际上会是什么样子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: So I think yes, I would say that language models have not an explicit world model but they do have an implicit model of the world because to be able to predict, "You know, what is the next likely word in this sentence? How is this paragraph going to continue?" they need to internally model, "You know, what is the state of the world that makes this person say that thing?" And so it's actually somewhat similar to MuZero in the sense that MuZero also only had an implicit world model. You know, it was never trained to predict, "You know, what does the screen actually look like if you take an action."</p>
</details>

**Julian:** 它也只是被训练来隐含地预测，如果我采取这个行动，我下一步应该采取什么行动，或者这对我是好是坏。所以在这两种情况下，你的模型中都有一个世界的隐含表示，你可以用它来做预测，但你实际上并没有重建世界的完整状态。因为重建世界的完整状态可能非常昂贵和复杂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: It was also only trained to implicitly predict, "If I take this action, what is the next action I should take or is it going to be good or bad for me?" So in both those cases, you have an implicit representation of the world in your model that you can use to make predictions, but you're not actually reconstructing the full state of the world because reconstructing the full state of the world can be very expensive and complex.</p>
</details>

**Julian:** 如果你想到超高分辨率的视频、音频信号，那是大量的数据，可能你实际上并不需要。如果你想想人类的注意力，我们只意识到周围发生的事情中很小的一部分，因为那才是我们实际需要做决策的最相关信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: If you think about super high resolution video, audio signals is a very large amount of data that probably you don't actually need. If you think of human attention, we are only aware of a very small subset of what's actually going on all around us all the time because that's the most relevant information that we actually need to make decisions.</p>
</details>

**Matt:** 这又回到了之前关于预训练的讨论。所以，预训练和强化学习之所以能很好地协同工作，是因为你拥有那个隐含地嵌入在语料库中的世界模型。尽管反对的观点是，那是人类认为的世界模型，通过语言体现，而不是世界模型本身的样子。这就是我对这场辩论的理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: And that goes back to the prior discussion about pre-training. So the reason why pre-training and RL work well together is that you have that world model that's implicitly embedded into the corpus. Although the argument against it is that it's what humans think the world model is as embodied by language versus what the world model actually is. And that's my understanding of the debate.</p>
</details>

**Julian:** 我想对于这场辩论，不同的人有不同的观点，所以我不想代表任何人发言。但是，是的，我认为在这些丰富的知识上进行预训练，会给你一些关于世界的表征。这样，当你真正开始行动并与世界互动时，你就能非常迅速地做出有意义的决定和行动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: I mean for the debate, I think different people have different points of view so I don't want to speak for anybody. But yes, I think like pre-training on this rich knowledge gives you some representation of the world already so that when you actually start to act and interact with the world you can very quickly make meaningful decisions, meaningful actions.</p>
</details>

**Julian:** 我喜欢用类似的方式来思考。如果你看很多动物，它们出生后很快就知道如何移动，甚至如何奔跑。比如你看非洲大草原上的瞪羚，很明显它们没有时间从零开始真正学习这个。几分钟或几小时，在它们的情况下，它们没有做预训练，但它们的大脑中有一些进化编码的结构。因为很明显，拥有某种知识来使你的学习更有效率是非常有益的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: I like to think of it in the similar way if you look many animals when they are born they very quickly know how to move, how to run even. Right? If you look at gazelles for example in the savannah, in a way that is like clearly they did not have time to really learn this from scratch, right, few minutes or hours. And in their cases they did not do pre-training but they have some evolutionary encoded structure in their brain because clearly it is very beneficial to have some sort of knowledge to make your learning more efficient.</p>
</details>

**Matt:** 是的，在自然界中纯粹的强化学习会导致不太好的结果。比如你是一只瞪羚，你必须通过 A/B 测试来决定是朝狮子跑还是远离狮子跑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Yeah. just RL in nature would lead to not so good results. Like if you're a gazelle and you have to AB test whether to run towards the lion or away from the lion.</p>
</details>

**Julian:** 完全正确。这就像成千上万代的瞪羚随着时间的推移获得了这些知识。它以某种方式编码在它们的基因和大脑结构中，然后你就可以在此基础上开始。我认为主要的挑战或者说你需要注意的主要事情是，你不要过度编码或者过度限制你的搜索空间。如果你的预训练、你的先验知识阻止你探索可能是正确行动方案的东西，那就不好了。所以那里存在一些危险，你必须意识到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Exactly. It's like the thousands of generations of gazelles acquired this knowledge over time. It was encoded in their genes and their brain structure in some way, right, and then you get to start on top of that. I think the main challenge or the main thing you need to watch out for is that you don't over-encode or you don't restrict your search base too much. If your pre-training, if your prior knowledge prevents you from exploring something that might be the correct course of action, that will be bad. So there, you know, there is some danger there you have to be aware of.</p>
</details>

### 评估的挑战：如何避免“排行榜戏剧”？

**Matt:** 我们来花一分钟谈谈评估，我们之前稍微触及了这一点，但为了给它一些应有的空间。在你的博客文章中，就是我们谈话开始时提到的那篇，有外部基准这个概念，然后你引用了**古德哈特定律**（Goodhart's Law: 一项社会经济学定律，指出当一个衡量标准成为目标时，它就不再是一个好的衡量标准）。所以，首先，什么是古德哈特定律？然后，实验室应该如何比较结果，以避免最终陷入我们过去几年看到的那种“排行榜戏剧”？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Let's spend a minute on eval and we touched upon this a little bit but just to give it some proper space. So there was in your blog post that we talked to at the very beginning of this conversation this concept of external benchmark and then you quoted your piece Goodhart's law. So what does, first of all, what is Goodhart's law and then how should labs compare results so that it doesn't end up with this kind of leaderboard theater that we've seen a little bit in the last couple of years?</p>
</details>

**Julian:** 是的。古德哈特定律基本上是说，任何成为目标的衡量标准，就不再是一个好的衡量标准。你可以直观地理解这一点，如果你开始根据程序员写的代码行数来付钱，那么突然之间他们会发现很多增加注释行数的方法，这完全是无用的。这是一个非常普遍的效应，显然，如果你给人们一个他们应该优化的激励，他们会非常努力地去做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Yeah. As a Goodhart's law basically says that any measure that becomes a target stops being a good measure and you can think of that intuitively that if you start paying for example programmers based on how many lines of code they write, well suddenly they will discover many ways to add more lines of comments which is completely useless. And this is a very general effect that obviously, right, if you give people an incentive that they should optimize, they will try very hard. Yes.</p>
</details>

**Julian:** 我们在语言模型基准测试中也看到了这一点。当然，人们想要升职，他们想要发布他们的模型。所以任何太容易衡量或者备受关注的基准，人们都会非常努力地去优化它。这意味着模型可能在那个基准上看起来非常好。但如果你然后用它来做你自己的任务，你可能会得到不同的性能。你问我们该怎么办？很难阻止人们在基准上进行优化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: And we also see this with language model benchmarks. Of course, people want to get promoted. They want to launch their model. So any benchmark that is too easily measured or that has a lot of attention on it, people will optimize very hard for it. Which means that probably the model will look very good at that benchmark. But if you then use it for your own task, you might get different performance. Yeah. You ask about what do we do about this? It's very hard to prevent people from optimizing on the benchmark.</p>
</details>

**Julian:** 所以一种可能性就是定期创建全新的、没有人见过的保留基准。这会给你一个相当不错的模型性能估计。所以我知道，例如，很多研究人员有他们自己的玩具问题，他们用这些问题来测试所有的模型，正是出于这个原因。这样你就知道，这是一个没有人见过的问题集，你有一个很好的猜测，它会给你一个无偏的估计。如果你是个人或公司，试图决定使用哪个模型，可能也是类似的做法。就建立你自己的内部基准，真正代表你所关心的东西，然后在那上面测量。我认为这可能是最客观、最准确的测量方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: So one possibility is just periodically create completely new held out benchmarks that nobody has seen before and that gives you a fairly good estimate of model performance. So I know for example like a lot of researchers have their own toy problems that they use to test all the models precisely for that reason. So that you know this is a problem, a set of problems that nobody has seen. you have a pretty good guess that it's going to give you an unbiased estimate. If you're like an individual of your company trying to decide which model to use, it's probably something similar. Just make your own internal benchmark that really represents what you care about and then measure on that. And I think that's likely to be the most objective, most accurate way of measuring.</p>
</details>

**Matt:** 在像 Anthropic 或者以前的 DeepMind 这样的地方，内部评估是什么样的？我是说，我知道有专门负责评估的团队。在内部评估方面，你是如何思考哪些有效、哪些无效的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Internally. What does that look like at a place like Anthropic or previously DeepMind? Is there, I mean I know there are teams that are focused on evals. How do you think about what works, what doesn't in terms of internal evals?</p>
</details>

**Julian:** 过去要做好评估肯定更容易。五年前我们做的任务，我认为衡量模型性能更容易。现在要困难得多，而且我认为我们尽量不过分依赖评估，因为例如，要衡量这个模型在编写代码方面到底有多好，是相当困难的。是的，我认为这是该领域一个巨大的未解或非常重要的问题之一，即如何做出真正好的评估，既运行成本低、又可靠、又准确。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: It definitely used to be easier to have good evals. You know, 5 years ago the tasks were doing, I think it was easier to measure model performance. I think nowadays it's much more difficult and I think we try to not over rely on evals so much because it's quite hard for example to measure how good is this model really at writing code. Yeah, I think it's one of the big unsolved or very important problems in the field of making really good evals that are both cheap to run, reliable, and accurate.</p>
</details>

**Julian:** 因为做一个满足其中一项的评估相对容易，但要同时满足三项就相当困难了。例如，我们一开始谈到的 OpenAI 的 GPQA 评估，那个评估非常准确和无偏，但成本非常高，因为它实际上涉及到让真人专家来做任务，然后将模型的任务与专家的进行比较，并由多个人进行评分。所以它非常准确，但做起来极其昂贵。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Because it's easy-ish to make an eval that takes one of those but to get all three is quite hard. For example, in the beginning we were talking about OpenAI's GPQA eval. And that one is like, you know, it's very accurate and unbiased but it's very expensive to do because what it actually involves is taking human experts, having them do the task and then compare the model task to the experts and rate it with multiple people. So it's very accurate but it's like extremely expensive to do.</p>
</details>

**Matt:** 与评估这个话题相关，我们（或者说你们）真正理解模型如何工作的能力最新进展如何？也就是**机制性可解释性**（Mechanistic Interpretability: 旨在通过逆向工程神经网络的内部工作原理，来理解其做出特定决策的具体计算过程）这个领域。你之前提到，如果我理解正确的话，强化学习有时会让事情变得更困难，因为它偶尔会以一种更难以理解的方式做事。这是我的话，可能不是你的。那么，最新的进展是什么？强化学习真的让事情变得更难还是更容易了？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: And related to that topic of evals, what's the latest in terms of our ability or I should say your ability to truly understand how models work? To the general field of mechanistic interpretability. You alluded to the fact earlier that RL, if I understood correctly, sometimes make it a bit harder because it does things occasionally in a more inscrutable way. My words maybe not yours. So what is the latest and indeed does RL make things harder or easier?</p>
</details>

**Julian:** 哦，我之前的意思是，调试强化学习通常更难，这与可解释性完全无关，因为有更多的活动部件。但如果你不小心使用强化学习，确实可能让可解释性变得更难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Oh, so what I meant before is that debugging RL in general, completely unrelated to interpretability, is harder because there are more moving parts. But it is also true that if you're not careful with RL, you can make interpretability harder.</p>
</details>

**Julian:** 例如，现代模型一个常见的做法是使用思维链进行推理。你可以查看思维链来了解模型的内部想法。然后你可能也会想，“哦，也许我应该用它作为强化学习的奖励信号，如果模型想错了就惩罚它。”但那样一来，你突然就完全破坏了你的可解释性角度。所以你必须小心，不要对那些你实际上想用来解释模型在想什么、做什么的信号进行强化学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: For example, one common thing with modern models is they do reasoning with the chain of thought. You could look at the chain of thought to see what are the model internal thoughts and then you could also have a thought that, "Oh, maybe I should use that as a reward signal in RL and punish the model if it thinks the wrong thing." But then suddenly you completely destroyed your interpretability angle. So you sort of have to be careful that you don't do RL on the signals that you actually want to use to interpret what the model is thinking of doing.</p>
</details>

**Julian:** 话虽如此，我认为确实有一些非常令人兴奋的可解释性工作正在进行，包括机制性可解释性。我记得去年，可能是在 Johnic 之前，有一个非常酷的关于 Claude 的金门大桥模型的例子。他们找到了 Claude 中负责金门大桥概念的神经元，然后修改了它们，创造出一个非常热爱旧金山金门大桥的 Claude 版本。这是一个非常生动的例子，表明“啊，我们真的理解了这个模型中发生了什么。”还有什么比实际改变模型行为更能验证这种理解呢？所以我认为这对安全来说是一个极其重要的方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: That said, I think yeah, there's some extremely exciting interpretability things happening including mechanistic interpretability. I think last year, I think before Johnic maybe even, there was a super cool Golden Gate Claude model where they found the neurons in Claude that were responsible for the Golden Gate concept and then modified them to make a version of Claude that really loved the Golden Gate Bridge in San Francisco. And so that's like a really vivid example of, "Ah, you know, we really understand what's happening in this model." And what better way is there to verify that understanding than actually changing the behavior of the model? And so I think that's like a super important direction for safety.</p>
</details>

**Julian:** 随着模型变得越来越聪明，我们真的需要能够理解模型内部在想什么。它有什么价值观？它在对我们撒谎吗？它是否真的在真诚地遵循指令？所以我认为，这绝对是一个极其重要的需要投入和研究的领域。我认为，特别是对于那些对从事 AI 工作或进行 AI 研究感兴趣的人来说，可解释性是一个很好的切入领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: As the models get smarter, we really need to be able to understand what is the model thinking internally. You know, what is the values it has? Is it lying to us? Is it actually genuinely following the instructions? And so I think like, you know, definitely extremely important area to invest in and work in. I think that especially if like, you know, people interested in working AI or doing AI research, I think interpretability is a great area to get into.</p>
</details>

### AI 的社会影响：就业、安全与未来的富足

**Matt:** 是的，这为我们这次对话的最后一部分做了一个完美的过渡。我很想从宏观角度谈谈 AI 的影响。所以，如果我们认为我们正处于指数曲线上，事情只会从这里加速，这意味着什么？当然，安全和对齐是 Anthropic 的核心价值观，希望在领域的其他部分也是如此，但可以说 Anthropic 在安全和对齐方面尤其直言不讳。这实际上是如何体现的？我们刚刚谈到了可解释性。对于那些担心这发展得太快，我们正在集体创造一个“怪物”的人，你能否让我们一窥在像 Anthropic 这样的地方，为对齐和安全所做的工作是什么样的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Yeah, perfect segue for the last part of this conversation. I'd love to zoom out and talk about the impact of AI. So if we think that we are on the exponential and that things are going to only accelerate from here, what does that mean? And certainly safety and alignment which is a core value at Anthropic, hopefully in other parts of the field as well, but like Anthropic is particularly vocal about safety and alignment, let's say. How does that actually manifest? So we just talked about interpretability. What, for people who are concerned that this is going too fast and that we collectively are creating a monster, can you give us a glimpse into the kind of work that is done for alignment and safety at a place like Anthropic?</p>
</details>

**Julian:** 是的，我认为对安全和对齐的关注贯穿了 Anthropic 的所有工作。我们有非常严格的流程。每当我们训练一个模型，每当我们想要发布一个模型时，我们都会分析模型的能力，验证模型的对齐情况，确保它不会自己做有害的事情，确保它不会让恶意用户做有害的事情。甚至到了如果我们不确定一个模型的安全性，我们会推迟发布，直到我们足够确定它实际上是无害的，我们才会发布和推出一个模型。我想这表明人们把安全看得比任何财务回报或收入都重要得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Yeah, I think like the focus on sort of safety alignment pervades all of Anthropic and there's very rigorous processes where we train a model, whenever we want to release a model, both to analyze the capabilities of the model, verify the alignment of the model. Ensure that it does not do harmful things on its own. Ensure that it does not enable malicious users to do harmful things. And to the point where if we are unsure about the safety of model, we will delay the launch and until we're sufficiently sure that is actually harmless, we will not launch and release a model, which may show that people take the safety much more seriously than any financial return or revenue.</p>
</details>

**Julian:** 我认为，在研究和资源方面也是如此，致力于安全和可解释性的团队是公司的重点关注对象，这让我很有信心，我们是真正关心这件事并投入了大量努力的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: I think yeah, also in terms of research and resources, the teams working on safety and interpretability are a big focus of the company which gives me a lot of confidence that we're actually care about this and put a lot of effort into it.</p>
</details>

**Matt:** 在更技术的层面上，并回顾一下对话的早期部分，当我们讨论预训练和安全时。安全和对齐是一个强化学习问题吗？我的意思是，拥有预训练的好处在于你导入了那个世界模型，正如我们所讨论的。但可以说，如果你从互联网上收集数据，你也在你的大脑中导入了很多坏东西。我们知道，网上有好东西，但也有很多有毒内容。所以，对齐在很大程度上是利用强化学习来摆脱预训练中内置的坏东西吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: And at a more technical level and to tie back an earlier part of the conversation around when we're discussing the pre-training and safety. So is safety and alignment an RL problem? And by that I mean the beauty of having pre-training is that you import that world model as we're discussing but arguably you also import into your brain a lot of bad stuff if you collect data from the internet as we know there's good things but also a lot of toxic content. So is alignment largely using RL to get rid of the bad stuff that is built into the pre-training?</p>
</details>

**Julian:** 我们绝对可以使用强化学习来塑造模型的行为，并确保例如在面对对抗性或不良输入时，它的行为是安全的，或者知道它可以拒绝，或者对攻击模型的企图具有鲁棒性。是的，我不会把对齐仅仅看作一个强化学习问题。我认为它贯穿了整个技术栈。你可能会以某种方式过滤预训练数据。你可能在训练后有分类器来监控模型的行为，以确保它实际上是对齐的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: We can definitely use RL to like shape the model behavior and ensure that for example given adversarial, given bad input, it sort of behaves safely or knows that he can refuse or is robust to attempts to hack the model. Yeah, I wouldn't view it alignment just like an RL problem. I think it sort of it goes throughout the whole stack. You might for example filter the pre-training data in some way. You might after training you might have classifiers that look at the model, monitor the model behavior to ensure that it is actually aligned.</p>
</details>

**Julian:** 你可能在你使用的模型的系统提示中加入安全指南。所以我认为安全和对齐实际上贯穿了研究的全部，以及产品和部署的全部，它不只是孤立于任何一个部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: You might when you write the system prompt for the model that you use. You might put safety guidelines in there. So I think safety alignment it really pervades the whole of research and the whole of you know product and deployment it's not just isolated into any one part.</p>
</details>

**Matt:** 然后是另一个在 AI 影响这个脉络下非常有趣的话题，显然是关于工作的讨论。所以，如果按照 GPQA 的讨论，智能体正变得和人类一样好，甚至更好，那对我们所有人的工作意味着什么？在 Alpha Zero、AlphaGo 的经历之后，你学到了什么，可以让我们一窥一旦我们都拥有超强智能体来做我们的工作时，可能会发生什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: And then another super interesting topic in the same vein of like the impact of AI is obviously the discussion around jobs. So if as per the GPQA discussion the agents are becoming just as good or better than humans obviously what does that mean for all of us in terms of our jobs? What have you learned after the experience of Alpha Zero, AlphaGo that could give us a glimpse into what may happen once we all have super powerful agents do our jobs?</p>
</details>

**Julian:** 我认为我们到目前为止还没有谈到的第一件事是，人工智能，这可能听起来有点简单化，但它与人类智能有很大的不同。我们可以看到，模型在某些任务上可能比我们强得多，比如计算，显然，而在其他任务上则比我们差得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: So I think the first thing that we didn't talk about yet so far is that artificial intelligence is quite, I mean this may sound a bit simplistic, but it's quite different than human intelligence. So we can see that right that the model may be much better at us on some tasks like calculation obviously and like much worse than us at other tasks.</p>
</details>

**Julian:** 所以我不认为这会是一对一的替代。它会更具互补性，模型在我可能非常不喜欢做、不感兴趣或非常不擅长的事情上做得很好，而我在其他方面比模型强得多。所以我认为这将是一个渐进的过程，我们都会逐渐开始更多地使用模型来提高我们自己的生产力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: So it is not, I don't think it is at all going to be any like one for one replacement. It's going to be much more complimentary of, "You know, the model is really good at something that maybe I really don't like doing or I'm not interested in or I'm very bad at," and then I'm much better than the model as a mother part. And so I think it's going to be like a gradual process of we're all going to incrementally start using models more and more to improve our own productivity.</p>
</details>

**Julian:** 而不是有一个模型能够一对一地做我们能做的所有事情。例如，我一直使用 Claude 来重构代码，或者写一些我不想写的前端代码，但同时在其他方面，我显然仍然比 Claude 编码能力强得多。所以这里有一种协同作用，利用最好的、最高效的技能。我想经济学家称之为“比较优势”，但这是一个漫长的过程，我们双方都会逐步提高我们的生产力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Rather than have a model that one for one is able to do exactly the set of things we can do. And so for example, I use Claude all the time to for example refactor code or maybe write some front end code that I don't want to write or at the same time there's other parts where I'm clearly much better putting than Claude still. So there is a synergy of use the best most productive skills. I think I guess economists call it like comparative advantage but like there is this long process of we'll both sort of improve our productivity incrementally.</p>
</details>

**Julian:** 我认为这个过程会给我们一些时间，在政治上和经济上弄清楚我们想如何从这种巨大的生产力增长中受益。即使不考虑 AI，技术的承诺长期以来一直是，“哦，我们将变得如此高效，如此富有，以至于我们只需要工作少得多的时间。”然而，神秘的是，几十年来我们都保持着每周40小时的工作制。所以，我认为这更像是一个政治社会问题，即弄清楚我们如何真正从所有这些进步中受益，并将财富和生产力的增长带给每一个人，而这远非一个技术问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: And I think that process is going to give us some time of figure out politically and figure out economically how do we want to you know benefit from this massive productivity increase. You know, even independently from AI, right? The promise of technology has long been that, "Oh, we're going to be all so productive, so wealthy that we need to work much less." Yet, mysteriously, right, we all have like 40 hours working week for decades. And so, you know, I think it's much more like a political social problem of like figuring out how do we actually benefit from all these improvements and like, you know, bring the increases in wealth and productivity to everybody and it's much less a technological problem.</p>
</details>

**Julian:** 这也意味着我们无法真正用技术来解决它。我们必须在民主政治层面上解决它。我们如何分配这些利益？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Mhm. Also means that we can't really solve it with technology. We have to solve it at like a sort of a democratic political level. How do we spread these benefits?</p>
</details>

**Matt:** 你认为这会加剧不平等吗？当你思考 AlphaGo 和 MuZero 的影响时，顶尖的围棋选手和顶尖的国际象棋选手发生了什么？他们消失了吗，还是他们被增强并变得更好了？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Do you think that that increases inequality? So, as you think about the impact of AlphaGo and MuZero, what happened to the top Go players and what happened to the top chess players? Did they disappear or did they get enhanced and better?</p>
</details>

**Julian:** 是的，我认为至少在国际象棋和围棋的案例中，人们的兴趣增加了，而且人们学习如何下围棋、如何下象棋变得容易多了。因为现在你不需要找专家导师，任何人都可以自己练习，花很多时间。我想，国际象棋主播在 Twitch 上非常受欢迎，对吧？同样地，很多学生正在使用语言模型来学习。我认为在编码方面也是如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Yeah, I think at least in the case of chess and Go there has been like more interest and it has become much easier for people to study how to play Go, how to play chess because now you don't need to find an expert tutor, anybody can practice on their own, right, spend a lot of time and I guess like chess streamers are very popular on Twitch, right? And similarly, right, like a lot of students are using language models to study. I think also for coding, right?</p>
</details>

**Julian:** Claude、代码、这些智能体，它们提高了任何有想法的人可以独立完成的事情的门槛。我认为，更大的图景，它是否增加或减少不平等，是相当难以预测的。它既提高了任何个人能完成的下限，也给了非常高效的人变得更高效的能力。很可能我们会看到国家之间存在相当大的差异，这取决于他们拥有的税收和社会再分配体系，决定了不平等是增加还是减少。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Claude, code, these agents, they raise the bar of what anybody who has an idea can accomplish on their own. I think the larger picture whether it increases or decreases inequality is quite hard to forecast. It both sort of raises the floor of what any person can accomplish but it also gives very productive people an ability to be even more productive. It's possible that we see quite a difference between countries depending on the taxation, social redistributive system that they have in whether inequality increases or decreases for example.</p>
</details>

**Julian:** 总的来说，我非常兴奋的是，这是一个非常非零和的游戏，它增加了社会可用的总财富。我认为，如果你考虑进步，如果你考虑繁荣，那才是最重要的事情。重新分配蛋糕有点像输家的游戏。要变得更富有，我们真的需要把蛋糕做大。如果你想想农业革命、工业革命，我们今天生活得更好的原因，是因为我们生产力高得多，我们有更多的财富。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Overall I'm quite excited that it is very much non-zero sum, is very much increases the total wealth available in society. I think if you think about progress, if you think about prosperity, that is the most important thing. Like redistributing the pie is kind of a loser's game. To get more wealthy, we really need to grow the pie. You know, if you think of the agricultural revolution, the industrial revolution, the reason why we have much better lives nowadays is because we're so much more productive. We have so much more wealth.</p>
</details>

**Julian:** 所以这才是我们想要解锁的关键一步。如果我们能让社会中的每个人生产力提高10倍，我们能实现怎样的富足？我认为这才是关键问题，对吧？这在医学上能解锁什么进步？治愈疾病，延缓衰老。在能源方面能解锁什么？显然，我们有气候危机，我们需要更多的能源来维持我们的生活方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: And so that's the key step we want to unlock. If we manage to make everybody in society 10 times more productive, what kind of abundance can we achieve? I think that's the key question, right? What advances does that unlock in medicine? You know, curing diseases, halting aging. What does it unlock in terms of energy? Obviously, right, we have like climate crisis. We need more energy rights to sustain our lifestyle.</p>
</details>

**Julian:** 我们能在材料科学上取得什么进步？所有这些基本上都受限于我们能获得多少智能以及我们如何应用它。所以我对未来5年我们能解锁什么感到无比乐观。我认为我们可以走得非常远。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: What advances in material science can we have? All of those are basically bottlenecked on how much intelligence we have access to and how can we apply it. So I'm yeah incredibly optimistic about like what will we be able to unlock in the next 5 years. I think we can go extremely far.</p>
</details>

**Matt:** 嗯，这似乎是一个很好的结束点。非常感谢你，Julian。这次谈话绝对精彩。感谢你花时间和我们在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Well that feels like a wonderful place to leave it. Thank you so much Julian. This was absolutely fantastic. Thank you for spending time with us.</p>
</details>

**Julian:** 是的，谢谢你所有激动人心的问题，也谢谢你给我时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Julian: Yeah, thank you for all the exciting questions and giving me the time.</p>
</details>

**Matt:** 嗨，又是 Matt Turk。感谢收听本期 Mad 播客。如果你喜欢，并且还没有订阅，我们非常感谢你考虑订阅，或者在你观看或收听本期节目的任何平台上留下积极的评价或评论。这真的能帮助我们建立播客并邀请到优秀的嘉宾。谢谢，我们下期节目再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt: Hi, it's Matt Turk again. Thanks for listening to this episode of the Mad Podcast. If you enjoyed it, we'd be very grateful if you would consider subscribing if you haven't already or leaving a positive review or comment on whichever platform you're watching this or listening to this episode from. This really helps us build a podcast and get great guests. Thanks, and see you at the next episode.</p>
</details>