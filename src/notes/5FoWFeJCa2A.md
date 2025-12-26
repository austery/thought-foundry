---
title: AI物理学家：ChatGPT联合创始人的新探索——通过实验加速科学发现
summary: 前OpenAI/DeepMind科学家创立Periodic Labs，旨在通过将LLM与物理实验紧密结合，构建“AI物理学家”，加速材料科学、化学等领域的研发，挑战传统AI模型的扩展局限。
area: "tech-engineering"
category: technology
project: []
tags:
- physical-rd
- reinforcement-learning
- science
- technology
companies_orgs: []
products_models: []
date: 2025-09-30
author: Lei
speaker: a16z
draft: true
guest: null
insight: null
layout: post.njk
series: null
source: http://www.youtube.com/watch?v=5FoWFeJCa2A
status: evergreen
---
## 摘要与核心洞察：AI物理学家的诞生

Ultimately, science is driven by experiments in the real world. That is what we are doing with Periodic Labs.
科学最终是由现实世界的实验驱动的。这就是我们在 Periodic Labs 正在做的事情。

[00:00:07] We are taking these precursor technologies and we are saying, "If you care about advancing science, we need to have experiment in the loop."
[00:00:07] 我们正在利用这些前沿技术，并强调：“如果你想推动科学发展，我们就必须让实验参与到反馈循环中。”

[00:00:13] The applications of building an AI physicist—for lack of a better word—that can design the real world are so broad.
[00:00:13] 打造一个可以设计现实世界的“AI 物理学家”（姑且这么称呼），其应用范围是极其广泛的。

[00:00:20] You can apply them to advanced manufacturing, material science, to chemistry—any process where R&D with the physical world is required.
[00:00:20] 你可以将其应用于先进制造、材料科学、化学等任何需要与物理世界进行研发（R&D）的流程中。

[00:00:26] It seems like we will benefit from breakthroughs that Periodic is working on. For example, if we could find a 200 Kelvin superconductor, even before we make any product with it, to be able to see such quantum effects at such high temperatures, I think would be such an update to people's view of how they see the universe.
[00:00:26] 看起来，Periodic 正在努力实现的突破将使我们受益。例如，如果我们能发现一个 200 开尔文的**高温超导体** (High-Temperature Superconductor: 一类在相对较高的温度下仍能保持零电阻特性的材料)，即使在未将其商品化之前，能看到这种量子效应在如此高的温度下出现，我认为都将极大地更新人们对宇宙的看法。

## 从聊天机器人到物理实验：创立的缘由

[00:00:49] So Liam, you were the co-creator of ChatGPT. You were running some of the physics teams at DeepMind. Let's talk about how you guys met and what was the moment where you realized that you had to leave both of those labs to start Periodic.
[00:00:49] 那么，Liam，您是 ChatGPT 的联合创始人，也曾在 DeepMind 负责一些物理团队的工作。我们来谈谈你们是如何相识的，以及你们是哪一刻意识到必须离开这两个顶尖实验室来创立 Periodic 的？

[00:02:15] Liam was working on LLMs, and they were going really well. I was not using LLMs, but I was noticing that LLMs were becoming more and more impactful in my work.
[00:02:15] Liam 当时在研究 LLM，进展得非常好。而我虽然没有使用 LLM，但我注意到 LLM 对我的工作影响越来越大。

[00:02:27] One way it was becoming impactful is when I was trying to remember some things about chemistry or physics, I could just talk to the chatbot and actually learn a lot of stuff I forgot. Another way was, of course, coding. We were writing simulations, and the LLM was so helpful in writing these simulations for us.
[00:02:27] 其中一种影响是，当我试图回忆一些关于化学或物理的知识时，我可以与聊天机器人交流并学到很多我忘记的东西。另一种影响当然是编程。我们在编写模拟程序时，LLM 在为我们编写这些模拟方面提供了巨大的帮助。

[00:02:43] So then the question was, "Can we use LLMs kind of more as a first-class citizen in the physics research?"
[00:02:43] 因此，问题就变成了：“我们能否将 LLM 更像是一个‘一等公民’那样，用于物理研究中？”

[00:02:54] We're looking at the improvements on language models on reasoning. We're seeing what high-compute reinforcement learning could do. And on the material science side, we are seeing **扩展定律** (Scaling Laws: 指出在增大模型规模、数据集和计算量时，模型性能可预测地提升的规律) within physics, within chemistry, both with respect to simulations and with respect to experiment.
[00:02:54] 我们关注到语言模型在推理方面的改进。我们看到了高计算量的强化学习可以实现的功能。而在材料科学方面，我们看到了物理学和化学领域（无论是模拟还是实验）都存在扩展定律。

[00:03:13] And I think to both of us and to a lot of people in the field, the goal of this technology is to accelerate science, to accelerate physical R&D.
[00:03:13] 我认为，对我们俩以及该领域的许多人来说，这项技术的最终目标是加速科学发展、加速物理研发。

[00:03:31] Physics is very verifiable. It's a great **奖励函数** (Reward Function: 机器学习中用来衡量一个行为或状态好坏的指标，是强化学习优化的目标)， with a fairly fast iteration loop.
[00:03:31] 物理学是非常可验证的。它是一个很棒的奖励函数，并具有相当快的迭代周期。

[00:03:40] You have simulators for large classes of physical systems. And we felt like in order to create this AI scientist, this is the beginning of this path.
[00:03:40] 存在针对大量物理系统的模拟器。我们觉得，为了创建这位 AI 科学家，这就是这条道路的开端。

## Periodic Labs 的运作模式与挑战

### 实时实验作为奖励函数的必要性

[00:03:59] Periodic Labs is a frontier AI research lab that's trying to use LLMs to advance physics and chemistry. We feel like having experiment in the loop, tightly coupled with simulations and LLMs, is extremely important.
[00:03:59] Periodic Labs 是一家前沿 AI 研究实验室，致力于使用 LLM 来推动物理学和化学的进步。我们认为，让实验参与到循环中，并与模拟和 LLM 紧密耦合，是至关重要的。

[00:04:43] I'd say the objective is, "Let's replace the reward function from math graders and code graders that we are using today."
[00:04:43] 我认为目标是：“让我们取代我们今天使用的、基于数学评分和代码评分的奖励函数。”

[00:05:02] What we're doing by having the lab is we create a physically grounded reward function that becomes the basis on which we are optimizing against.
[00:05:02] 我们通过建立实验室所做的是，创建一个基于物理世界的奖励函数，它成为我们进行优化的基础。

[0007:49] Ultimately, science is driven by experiments in the real world. And so that's what we're doing with Periodic Labs. We're taking these precursor technologies and we're saying, "Okay, if you care about advancing science, we need to have experiment in the loop, and that becomes our reward function for our agents."
[00:07:49] 科学最终是由现实世界的实验驱动的。这就是我们在 Periodic Labs 正在做的事情。我们正在利用这些前沿技术，并强调：“如果你想推动科学发展，我们就必须让实验参与到反馈循环中，而这成为了我们智能体的奖励函数。”

### 扩展定律的局限性：为什么仅靠“投喂数据”不够

[00:17:48] Excellent question. Scaling laws empirically seem to continue to hold. So that's not in question. But I think there's a question of what is this Y-axis, and that test distribution is very different from what we are talking about.
[00:17:48] 问得好。扩展定律在经验上似乎持续有效，这一点毋庸置疑。但问题在于这个 Y 轴是什么，以及我们讨论的测试分布与训练分布是非常不同的。

[00:19:13] However, that model is not going to then cure cancer. The knowledge simply doesn't exist. You need to optimize against the distribution you care about.
[00:19:13] 然而，那个模型随后并不能治愈癌症。这些知识根本不存在。你需要针对你关心的分布进行优化。

[00:20:00] The in-domain generalization and the out-of-domain generalization are monotonically correlated, but it's not linear necessarily. The slope of that power law may not be good enough. So, you might need to spend centuries before you get to the result you want.
[00:20:00] 域内泛化和域外泛化是单调相关的，但不一定是线性的。该幂次定律的斜率可能不够理想。因此，你可能需要花费几个世纪才能得到你想要的结果。

[00:20:49] This is one of the reasons we feel like the best way to make progress is to make your target as close to your in-domain training set as possible, and the best way of doing this is to basically iterate on changing your training set to be more like what you want to do.
[00:20:49] 这就是我们认为取得进展的最佳方式是让你的目标尽可能接近你的域内训练集的原因之一。而做到这一点最好的方法是迭代地改变你的训练集，使其更接近你想做的事情。

[00:21:05] The other one is actually maybe even simpler. The experimental data we want actually doesn't exist. For example, if you look at the experimental data in literature for synthesis, it turns out the formation enthalpy labels... are so high that if you train a machine learning model on it, it's not predictive enough to predict the next one.
[00:21:05] 另一个原因可能更简单。我们想要的实验数据实际上并不存在。例如，如果你查看文献中关于合成的实验数据，会发现形成焓（formation enthalpy）的标签...噪声非常高，以至于如果你用它来训练机器学习模型，它的预测能力不足以预测下一个结果。

### 专注于超导性和磁性的原因

[00:24:16] A technical reason also is superconductivity is a phase transition, so it's pretty robust to some of these details that we cannot simulate yet.
[00:24:16] 另一个技术原因在于，超导性是一种相变，因此它对一些我们尚无法模拟的细节具有相当强的鲁棒性。

[00:24:30] The superconducting temperature usually is more dominated by its crystal fundamental property than like defects or microstructure, whereas there are certain other materials properties where even if the crystal has the property you want, there are so many other factors that you cannot simulate that would prevent you from seeing that property.
[00:24:30] 超导温度通常更多地受其晶体基本特性的支配，而非缺陷或微观结构。然而，对于某些其他材料特性，即使晶体具有你想要的特性，也有太多其他因素是你无法模拟的，从而阻止你观察到该特性。

[00:24:52] It has this technical upside to it, and it really rallies both the physicists... and people who've never studied physics. It's quite rare to find a topic that unites the whole team.
[00:24:52] 它具有这种技术优势，并且能真正地团结物理学家……以及从未学过物理的人。找到一个能团结整个团队的主题是非常罕见的。

## 商业化路径：AI 编程的物理学等价物

[00:27:37] Basically, co-pilots for engineers and researchers in advanced industries.
[00:27:37] 基本上，是为先进工业领域的工程师和研究人员提供的**副驾驶**（Co-pilots）。

[00:27:52] There's so many industries like space, defense, semiconductors, where they're dealing with iteration of materials of physics, and that's part of their workflow...
[00:27:52] 有太多的行业，如航天、国防、半导体等，它们需要处理材料和物理学的迭代，而这是它们工作流程的一部分……

[00:28:17] While high-temp superconductivity is a great north star, we very much understand that technology and capital are intertwined. We're going to be able to maximally accelerate science if this is a wildly successful commercial entity.
[00:28:17] 虽然高温超导是一个伟大的北极星目标，但我们非常清楚技术和资本是相互交织的。如果 Periodic Labs 成为一个非常成功的商业实体，我们将能够最大限度地加速科学发展。

[00:28:32] To do so, we want to accelerate advanced manufacturing in all these different industries. Become like an intelligence layer for all these teams to accelerate their workflow and start reducing their iteration time, get them to better solutions more quickly, accelerate their researchers and their engineers.
[00:28:32] 为此，我们希望加速所有这些不同行业的先进制造。成为所有这些团队的智能层，以加速他们的工作流程，并开始减少他们的迭代时间，更快地为他们提供更好的解决方案，加速他们的研究人员和工程师的工作。

## 跨学科协作与 **中期训练**

[00:29:48] We feel like it's actually crucial for us to make sure these teams work very closely with each other.
[00:29:48] 我们认为，确保这些团队彼此紧密合作对我们来说至关重要。

[00:30:00] The physics and the chemists need to figure out how to teach the LLM how to reason about these things, because I think the frontier AI labs have figured out how to train them on math and logic, but not yet on physics and chemistry.
[00:30:00] 物理学家和化学家需要弄清楚如何教会 LLM 对这些事物进行推理，因为我认为前沿 AI 实验室已经弄清楚了如何训练它们进行数学和逻辑推理，但尚未弄清楚如何进行物理和化学推理。

[00:30:30] The LLM researchers are learning quite a bit about the physics, the simulation tools, and the goals. We have weekly teaching sessions where the LLM researchers teach how the RL loops work, how the data cleaning works, and then the physicists and chemists are teaching about different aspects of the science, the history of science.
[00:30:30] LLM 研究人员正在学习大量的物理学、模拟工具和目标。我们有每周的教学会议，LLM 研究人员教授强化学习（RL）循环如何运作、数据清理如何进行，然后物理学家和化学家则教授科学的不同方面、以及科学史。

[00:41:07] **中期训练** (Mid-Training: 在模型预训练和最终对齐之间进行的额外预训练步骤，用于注入新的、实时的或领域特定的知识) is basically you're taking new data, new knowledge that's not in the model, and you continue pre-training. And this differs from standard post-training where post-training typically is more reinforcement learning, supervised learning.
[00:41:07] 中期训练基本上就是你获取模型中不存在的新数据、新知识，然后继续进行预训练。这与标准的后训练不同，后者通常是更多的强化学习或监督学习。

[00:42:28] It's all the knowledge. It's like you can have very low-level descriptions of physical objects, like crystal structures for instance. You can also have higher-level semantic descriptions of like, "Well, this is how I made material XYZ."
[00:42:28] 这是所有的知识。它可以是物理对象的非常低级的描述，比如晶体结构。它也可以是更高级的语义描述，比如“我是如何制造材料 XYZ 的”。

[00:42:49] It's like simulation data, experimental data—none of this exists. And basically putting that knowledge into the model and making sure that these distributions are connected in some way.
[00:42:49] 这包括模拟数据、实验数据——这些都不存在。基本上是将这些知识放入模型中，并确保这些分布以某种方式相互连接。

## 学术界与人才招募

### 与大学生态系统的关系

[00:45:35] Is there a role at all that the university ecosystem you think will play in Periodic's future? Absolutely. So much of the simulation tooling we use has been developed in academia.
[00:45:35] 您认为大学生态系统在 Periodic 的未来中扮演着什么角色吗？当然。我们使用的许多模拟工具都是在学术界开发的。

[00:47:33] Given some of the most premier scientists are using these strategies, they're likely effective. And these are types of things where an industry-academic partnership can just be so powerful because industry just simply is blind to these types of analyses, these tools, as well as just this way of thinking.
[00:47:33] 考虑到一些最顶尖的科学家正在使用这些策略，它们可能是有效的。在这些方面，产业与学术界的合作可以非常强大，因为产业界往往对这些类型的分析、工具以及这种思维方式是盲目的。

[00:48:29] We have two major initiatives in this direction. One of them is we're starting an advisory board.
[00:48:29] 我们在这个方向上有两个主要举措。其中之一是建立一个顾问委员会。

[00:49:14] And our second initiative is going to be through a grant program. We really want to enable some of this amazing work going on in academia, and some of that work isn't a good fit for industry.
[00:49:14] 我们的第二个举措是通过一项资助计划。我们非常希望能够支持学术界正在进行的一些令人惊叹的工作，其中一些工作并不适合产业界。

### 招募人才的标准

[00:49:52] First off, someone deeply curious, someone who really wants to understand the machine learning, the science at a deeper level, who wants to make contact with reality, who wants to advance science.
[00:49:52] 首先，我们寻找具有深度好奇心的人，真正想在更深层次上理解机器学习和科学的人，想接触现实、想推动科学进步的人。

[00:50:05] But also pragmatic. What we're trying to do is incredibly challenging, and someone who has like very careful process, and they get to—they're solution-oriented—they get to goals quickly.
[00:50:05] 但同时也要务实。我们正在做的事情极具挑战性，我们需要那些拥有非常严谨流程、以解决方案为导向、能迅速达成目标的人。

[00:50:55] Liam and I have been really looking for a sense of urgency in candidates, because we want these technologies not in 10 years... but we want them ASAP.
[00:50:55] Liam 和我一直在寻找候选人身上的紧迫感，因为我们不希望这些技术在 10 年后才出现……而是希望它们能尽快问世。