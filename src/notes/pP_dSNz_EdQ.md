---
author: AI Engineer
date: '2025-12-23'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=pP_dSNz_EdQ
speaker: AI Engineer
tags:
  - llm
  - prompt-engineering
  - code-agents
title: 系统提示学习的演进与实践：代码代理优化的关键路径
summary: 本次演讲探讨了系统提示学习（System Prompt Learning）在代码生成代理中的应用，展示了通过迭代反馈显著提升模型性能的方法。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-work
project:
  - ai-impact-analysis
people:
  - Aparna Dhinakaran
companies_orgs:
  - Arize
products_models:
  - Claude
  - Klein
  - SWEBench
media_books: []
status: evergreen
---
### 系统提示学习的演进与实践：代码代理优化的关键路径  

在本次演讲中，Arize 的 Aparna Dhinakaran 探讨了系统提示学习（System Prompt Learning）在代码生成代理中的应用，展示了这一方法如何通过迭代反馈显著提升模型性能。

<details>
<summary>Original English</summary>

Hi everyone. Thanks so much for coming.
Um, well, today I'm excited. We're going to talk a little bit about prompt learning and how to use that with eval.
uh if any of you guys um are spending a lot of time thinking about the frontier coding models, I think there's so much attention on on them.
But just what's not so obvious is how much time is actually spent uh on the system prompts uh for those building these coding agents.

</details>

**系统提示学习的概念与背景**

系统提示（System Prompt）是代码代理模型中一个关键但常被忽视的部分。Aparna 提到，像 **Claude** 的系统提示并非静态内容，而是通过多次迭代优化形成的。她展示了一条广为传播的推文，揭示了 **Claude 的系统提示** 曾被泄露，并指出此类内容往往包含大量规则和指导逻辑，对编码效果有决定性影响。

<details>
<summary>Original English</summary>

So here's actually a look um this is a tweet that went viral about the whole system prompt uh of Claude that's been leaked.
I'm sure you know they've changed it since then. Um, but you can actually see that Claude, there's cursor, there's Clyde.
Um, and just the length of the actual system prompt um, for each one of these.

</details>

**系统提示学习与强化学习的比较**

为了帮助听众理解系统提示学习的本质，Aparna 提出了一个类比：传统强化学习（RL）中，模型只能通过最终的分数反馈调整自身行为；而系统提示学习则像人类的学习过程，能获取详细的**英语反馈信息**（English Feedback），从而更精确地调整策略。

在实际应用中，系统提示学习避免了 RL 的几个显著问题：
- 样本效率低
- 数据需求高
- 时间开销大
而这些问题在代码代理开发中尤为关键。

<details>
<summary>Original English</summary>

For RL, you know, if we just took an analogy of a student who's trying to improve their exam scores.
They take an exam, somebody grades the exam, you have a scalar reward ...
And I think this is actually one of the flaws ...

</details>

**系统提示学习的实现流程**

Aparna 和团队在实验中采用了以下方法：
1. 使用标准数据集（如 SWEBench）对代码代理进行测试。
2. 模拟用户输入问题，让模型生成补丁（Patch）以解决特定的软件工程问题。
3. 使用另一个大语言模型承担“法官”的角色，评估代码的正确性并输出详细反馈。
4. 将这些**解释性反馈（explanations）整合进一个“元提示”系统中，自动迭代生成新的规则并添加到原始的系统提示中。**

该方法在两个主流代码代理模型 **Claude 和 Klein** 上进行了测试，并取得了显著的性能提升：
- 在 SWEBench 的基准测试中，**Claude 提升了约 5%，Klein 提升了约 15%。**

<details>
<summary>Original English</summary>

What we did was actually took SWEBench dataset ...
We ran this basically on the entire Sweetbench light again ...
You know, we took vanilla client and cloud code um nothing added to the cloud MD or the client rules ...
And what we saw was that you know on 150 examples ...

</details>

**系统提示学习 vs 强化学习与GEA方法**

演讲中，她也对比了系统提示学习与其他优化技术的区别：
- 相较于 **强化学习（RL）**，系统提示学习避免了样本效率低的问题。
- 相较于 **DSPI 的 GEA（Prompt Optimizer）方法**，系统提示学习迭代次数更少，并且强调了高质量反馈（尤其是解释性信息）对模型优化的重要性。
她指出，**GEA 的方法虽然也有使用反馈机制，但它对评估的依赖远不如系统提示学习显著。**

<details>
<summary>Original English</summary>

So GEA, just in case you guys aren't familiar ...
It takes many many loops and rollouts compared to um kind of a fraction of that which was our approach ...
The key difference here, the underlying approach around using English feedback is the same ...

</details>

**未来方向与团队成果**

最后，她强调了高质量评估（eval）的重要性，并指出 Arize 团队正在致力于：
- 构建更强大的评估系统，尤其是针对代码代理的测试方法。
- 持续优化系统提示规则，并推动这一范式成为代码代理开发的标准流程之一。

她也邀请观众访问 Arize 的博客，了解更多关于评估优化和系统提示学习的研究进展。

<details>
<summary>Original English</summary>

So eval engineering is a whole kind of concept that we spend a lot of time on ...
If you guys are curious about learning more ...
Check out kind of our blog ...

</details>