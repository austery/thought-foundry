---
author: Best Partners TV
date: '2026-01-31'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=lv7iLjqANgM
speaker: Best Partners TV
tags:
  - world-models
  - agi
  - reinforcement-learning
  - scaling-laws
  - embodied-ai
title: 世界模型：AGI的关键拼图与AI的未来图景
summary: 本文深入探讨了DeepMind资深研究员达尼贾尔·哈夫纳关于世界模型的观点，阐述了其作为实现通用人工智能（AGI）的关键技术。文章详细介绍了DeepMind在世界模型领域的三条主要研究路线（Genie, Veo, Dreamer），并分析了Dreamer系列模型在在线与离线学习上的突破。同时，探讨了AGI实现的关键因素（计算资源、目标函数、数据、算法细节），AI模型的多模态融合趋势，以及长上下文理解、超越人类推理等核心能力缺口。此外，还讨论了上下文学习的局限性、神经科学的启发、视频模型Scaling Laws的巨大潜力，以及世界模型在机器人领域的颠覆性影响和对大模型幻觉问题的解释。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - DeepMind
  - OpenAI
products_models:
  - Dreamer
  - Genie
  - Veo
media_books: []
status: evergreen
---
### 世界模型：AGI的关键拼图与AI的未来图景

当前人工智能领域最热门且最具争议的话题之一便是通用人工智能（AGI）实现的时间线。DeepMind的CEO德米斯·哈萨比斯预测，AGI可能在未来五到十年内实现，并指出“世界模型”是弥补当前能力缺口的“关键拼图”。然而，CEO的战略视角更多是方向性指引，关于世界模型的具体技术细节、Agent的核心训练机制及瓶颈，仍需深入探讨。

巧合的是，DeepMind资深研究员、Dreamer系列模型核心作者达尼贾尔·哈夫纳近期在播客中分享了DeepMind在世界模型方面的最新进展，包括尚未发表的实验结果。哈夫纳的视角兼具理论深度与工程实践的务实性，为理解世界模型的真实发展水平提供了宝贵信息。

哈夫纳指出，世界模型的核心思想极为简洁，但其逻辑颠覆了传统AI训练模式。简单来说，世界模型旨在让AI先学习一个能精准预测物理世界变化的模拟器，然后在这个虚拟世界中进行大量训练，而非让机器人在真实环境中反复试错。例如，传统方法让机器人摔倒一万次来学会走路，成本高昂且效率低下。而世界模型允许机器人在“想象中”摔倒，成本几乎为零，训练效率提升数个数量级。这与传统强化学习（Agent直接与真实环境交互试错）的本质区别在于，世界模型先让AI学会预测，再在预测出的虚拟世界中优化策略，最后进行少量真实环境的验证和微调。这种“先虚拟后真实”的模式，有效解决了传统强化学习在复杂任务中成本高、效率低、风险大的痛点。

<details>
<summary>Original English</summary>
The hottest and most controversial topic in the current AI field is the timeline for achieving Artificial General Intelligence (AGI). Demis Hassabis, CEO of DeepMind, predicts that AGI might be realized within the next five to ten years, pointing out that "world models" are the "key puzzle piece" to bridge current capability gaps. However, a CEO's strategic perspective offers more directional guidance; specific technical details of world models, core training mechanisms for Agents, and their bottlenecks still require in-depth discussion.

Coincidentally, Danijar Hafner, a senior researcher at DeepMind and the core author of the Dreamer series models, recently shared DeepMind's latest advancements in world models during a podcast, including unpublished experimental results. Hafner's perspective combines theoretical depth with practical engineering insights, providing valuable information for understanding the true development level of world models.

Hafner points out that the core idea of world models is extremely simple, yet its logic subverts traditional AI training paradigms. Simply put, world models aim to have AI first learn a simulator that can accurately predict changes in the physical world, and then conduct extensive training within this virtual world, rather than having robots repeatedly learn through trial and error in the real environment. For instance, the traditional method of learning to walk involves a robot falling ten thousand times in a real environment, which is costly and inefficient. A world model, however, allows the robot to fall ten thousand times in its "imagination," with almost zero cost and a several-order-of-magnitude increase in training efficiency. The fundamental difference from traditional reinforcement learning (where Agents interact directly with the real environment through trial and error) is that world models first enable AI to learn prediction, then optimize strategies in the predicted virtual world, followed by a small amount of validation and fine-tuning in the real environment. This "virtual first, then real" approach effectively addresses the pain points of high cost, low efficiency, and significant risk in complex tasks associated with traditional reinforcement learning.
</details>

### DeepMind的多路线探索与Dreamer的演进

DeepMind在世界模型方向上布局了三条并行的研究路线：**Genie**、**Veo**和**Dreamer**，它们各有不同的定位和侧重点。

**Genie**的核心是环境生成。它能根据文本或图像提示，生成多样化、可交互的3D环境，用户可在其中导航、探索和进行简单交互。最新的Genie 3版本已能实时生成高清交互世界，主要用于训练具身智能体（Embodied Agents）。

第二条路线是**Veo**，专注于高质量视频生成。其目标不仅是生成精美画面，更是通过视频展现对物理世界的深度理解。哈夫纳提到，Genie 3的物理理解能力即建立在Veo 3的技术基础上。Veo通过学习海量视频数据中的物理规律，能精准预测物体的运动轨迹和相互作用关系，并将这种理解迁移到Genie的环境生成中。

第三条路线是哈夫纳主导的**Dreamer**系列，其定位与Genie、Veo截然不同，更侧重于训练Agent。它在准确的世界模型中，通过强化学习训练Agent完成具体控制任务。哈夫纳指出，Genie 3仅支持摄像机动作和通用交互按钮，无法满足《我的世界》等复杂游戏所需的完整鼠标键盘动作空间。此外，Genie在学习物体交互和游戏机制的精确物理方面仍有困难，如无法精确模拟方块堆叠、工具使用等精细物理计算场景。而Dreamer的核心优势在于准确的物理预测，它已学会《我的世界》的核心游戏机制，并能实现单GPU实时推理，这对Agent的高效训练至关重要。

Dreamer系列已迭代至第四代，每一代都解决了关键问题。前三代Dreamer专注于**在线学习**（Agent从零开始，通过实时交互学习），核心追求数据效率和最终性能。在Dreamer 2之前，行业普遍存在矛盾：模型基础算法学习快、数据效率高但性能天花板低；模型自由算法性能天花板高但需要更多数据。Dreamer 3的突破在于解决了这一矛盾，实现了模型基础算法的快速高效与模型自由算法的高性能，且无需手动调参。为验证此突破，DeepMind使用《我的世界》钻石挑战测试，Agent从零开始，仅凭稀疏奖励自主学会了获取钻石的完整流程，被视为AI领域的重要里程碑，证明了世界模型支持Agent完成长期复杂目标规划。

到了Dreamer 4，研究方向转向**离线学习**。在真实场景中，Agent与环境的交互常具危险性、高成本或不可实现性，离线学习因此变得尤为重要。为验证数据提取能力，Dreamer 4仍选用钻石任务，但仅使用人类玩家的游戏数据，且数据量仅为OpenAI VPT离线Agent的百分之一。结果显示，Dreamer 4仍能学会获取钻石的完整流程，证明了世界模型在离线学习场景下的强大潜力，即使无实时环境交互，高质量离线数据也能训练出高性能Agent。

然而，哈夫纳坦承，Dreamer 3和4并非完美方案，它们仅在隔离实验中解决了特定问题。未来的发展方向必然是融合这些技术，形成一个既能在线快速适应新环境，又能利用离线数据高效学习的通用系统。

<details>
<summary>Original English</summary>
DeepMind has deployed three parallel research routes in the direction of world models: **Genie**, **Veo**, and **Dreamer**, each with distinct positioning and focus.

The core of **Genie** is environment generation. It can generate diverse, interactive 3D environments based on text or image prompts, allowing users to navigate, explore, and interact simply within them. The latest Genie 3 version can generate high-definition interactive worlds in real-time, primarily used for training embodied agents.

The second route is **Veo**, focusing on high-quality video generation. Its goal is not just to produce beautiful visuals but to demonstrate a deep understanding of the physical world through video. Hafner mentioned that Genie 3's physical understanding capabilities are built upon the technical foundation of Veo 3. Veo learns physical laws from massive video data, enabling accurate prediction of object trajectories and interactions, and transfers this understanding to Genie's environment generation.

The third route is the **Dreamer** series, led by Hafner, which is fundamentally different in positioning from Genie and Veo, focusing more on training Agents. It trains Agents through reinforcement learning within an accurate world model to complete specific control tasks. Hafner points out that Genie 3 only supports camera movements and a universal interaction button, which is insufficient for complex games like "Minecraft" that require a full mouse and keyboard action space. Furthermore, while Genie can generate diverse scenes, it still struggles with learning precise physics for object interactions and game mechanics, such as accurately simulating block stacking or tool usage, which require fine-grained physical computation. Dreamer's core advantage lies in accurate physical prediction; it has learned the core game mechanics of "Minecraft" and can achieve real-time inference on a single GPU, which is crucial for efficient Agent training.

The Dreamer series has iterated to its fourth generation, with each generation solving a key problem. The first three generations of Dreamer focused on **online learning** (where Agents learn from scratch through real-time interaction with the environment), prioritizing data efficiency and final performance. Before Dreamer 2, the industry faced a common dilemma: model-based reinforcement learning algorithms were fast and data-efficient but had a low performance ceiling, stagnating after a certain point; model-free algorithms required more data but offered a higher performance ceiling. Dreamer 3's breakthrough resolved this conflict, achieving both the speed and efficiency of model-based algorithms and the high performance of model-free algorithms, without manual hyperparameter tuning. To validate this breakthrough, DeepMind tested it using the "Minecraft" diamond challenge. The Agent, starting from zero knowledge, autonomously learned the complete process of obtaining diamonds solely through sparse rewards, including mining, collecting materials, crafting tools, and exploring terrain—a series of complex steps widely considered a significant milestone in AI, demonstrating that world models can support Agents in achieving long-term, complex goal planning.

With Dreamer 4, the research direction completely reversed to focus on **offline learning**. In many real-world scenarios, Agent-environment interaction is dangerous, expensive, or simply impossible, making offline learning extremely important. To validate data extraction capabilities, Dreamer 4 again used the diamond task, but this time only with human player game data, and with data volume only one percent of OpenAI's VPT offline Agent. The results showed that Dreamer 4 could still learn the complete process of obtaining diamonds, demonstrating the powerful potential of world models in offline learning scenarios. Even without real-time environment interaction, high-quality offline data can train high-performance Agents.

However, Hafner candidly admits that neither Dreamer 3 nor Dreamer 4 are perfect solutions; they have solved specific problems in isolated experimental settings. Future development will inevitably involve integrating these technologies into a general system that can rapidly adapt to new environments online while efficiently learning from offline data.
</details>

### 架构非瓶颈：AGI实现的关键要素与多模态融合

哈夫纳提出了一个反直觉的判断：几乎任何架构都能带我们到达AGI。无论是主流的Transformer、Mamba、SSM，还是更早的RNN，理论上都能实现AGI，其差异仅在于计算效率和硬件适配程度。例如，RNN训练慢但推理快，可能需要更大模型规模来弥补架构瓶颈，但最终目标一致。因此，他认为当前关于架构的争论更多是效率层面的，而非根本性问题。

既然架构不是瓶颈，AGI实现的关键是什么？哈夫纳明确列出了四点：**计算资源**、**目标函数**、**数据**，以及**强化学习的算法细节**（如长期信用分配）。

在此基础上，哈夫纳认为“大语言模型能否到达AGI”的问题已过时。因为当前前沿AI模型已不再是单纯的语言模型，它们融合了图像理解、生成，视频理解能力，视频生成能力也在快速整合。讨论纯语言模型的局限性，如同讨论汽车能否上天。汽车本身不能飞，但加上翅膀（融合其他模态能力）就有可能。现在的AI模型正通过融合多模态能力突破纯语言模型的局限，而世界模型正是这种多模态融合的核心载体。

那么，当前AI系统距离AGI还缺少哪些关键能力？哈夫纳重点提及两方面：

1.  **长上下文的理解能力**：尽管许多大模型号称支持百万token上下文，但对于视频数据而言这远远不够。一段十分钟的高清视频包含的token数量巨大，现有上下文窗口难以承载。更重要的是，即使窗口足够大，模型真正基于全部上下文进行检索和推理的能力尚未到位，可能仅关注局部信息而无法把握长期全局逻辑关联。可能的解决方向包括混合检索模型（结合上下文与外部检索）和类似Transformer但无需回溯所有历史信息的关联记忆机制。哈夫纳提到，Transformer出现前已有关于长期记忆、智能寻址的设想，但受限于计算资源和数据量。如今瓶颈已缓解，这些想法可能重焕生机。
2.  **超越人类的推理能力**：当前AI模型本质上学习人类数据中的模式，推理能力有上限，难以超越训练数据中的人类推理水平。AGI需要AI提出人类未曾想过的科学假设，发现自然规律，这要求AI能自主发现全新的推理方式。AI不能仅停留在学习人类既有知识，需从原始高维数据（视频、音频、生活数据、传感器数据）中自主提取抽象概念，并构建全新推理体系。哈夫纳坦言，人类尚未很好掌握如何做到这一点，这可能是通往AGI之路中比技术实现更难的理论挑战。

<details>
<summary>Original English</summary>
Hafner proposes a counter-intuitive judgment: almost any architecture can lead us to AGI. Whether it's the mainstream Transformer, the recently popular Mamba, SSM, or even earlier RNNs, they can theoretically achieve AGI. The difference lies only in computational efficiency and hardware compatibility. For example, RNNs are slow to train but fast to infer, and may require larger model scales to compensate for architectural bottlenecks, but the ultimate goal is the same. Therefore, he believes current debates about architecture are more about efficiency rather than fundamental issues.

If architecture is not the bottleneck, what are the key factors for achieving AGI? Hafner clearly lists four points: **compute resources**, **objective functions**, **data**, and **reinforcement learning algorithm details** (such as long-term credit assignment).

Based on this, Hafner believes the question of "whether large language models can reach AGI" is already outdated. This is because current cutting-edge AI models are no longer purely language models; they integrate image understanding and generation, video understanding capabilities, and video generation capabilities are also rapidly being integrated. Discussing the limitations of pure language models is like discussing whether a car can fly. A car cannot fly by itself, but adding wings (integrating other modalities) makes it possible. Current AI models are breaking through the limitations of pure language models by integrating multimodal capabilities, and world models are the core carrier of this multimodal fusion.

So, what critical capabilities are current AI systems still lacking to reach AGI? Hafner highlights two main aspects:

1.  **Long Context Understanding Capability**: Although many large models claim to support million-token contexts, this is far from sufficient for video data. A ten-minute high-definition video contains a massive number of tokens, which current context windows can hardly accommodate. More importantly, even with sufficiently large context windows, the model's ability to truly retrieve and reason based on the entire context is not yet in place; it may only focus on local information and fail to grasp long-term, global logical connections. Potential solutions include hybrid retrieval models (combining context with external retrieval) and associative memory mechanisms similar to Transformers but without the need to backtrack all historical information. Hafner mentions that before the advent of Transformers, there were already ideas about long-term memory and intelligent addressing mechanisms, but they were limited by computational resources and data volume. These bottlenecks have now been significantly alleviated, and these shelved ideas may be revitalized.
2.  **Superhuman Reasoning Capability**: Current AI models essentially learn patterns from human data, and their reasoning capabilities have an upper limit, making it difficult to surpass the human reasoning level inherent in training data. AGI requires AI to propose scientific hypotheses never conceived by humans and discover natural laws not yet found. This necessitates AI discovering entirely new reasoning methods. It also means AI cannot merely learn existing human knowledge but must autonomously extract abstract concepts from raw, high-dimensional data (such as video, audio, human life data, robot sensor data) and then build a new reasoning system upon these concepts. Hafner admits that humans have not yet mastered how to achieve this, making it a theoretical challenge on the path to AGI that is more difficult than technical implementation.
</details>

### 上下文学习的局限与神经科学的启示

哈夫纳深入探讨了上下文学习（In-Context Learning, ICL）的根本性局限。ICL是当前大模型的核心能力之一，它允许模型在不更新权重的情况下，通过少量示例快速学习新任务。然而，哈夫纳指出，ICL存在本质缺陷：模型只是学会了“看起来像在学习”地进行泛化，但系统内没有任何机制促使其真正努力优化任何目标。简单来说，ICL更像模仿学习，模型模仿其训练数据中见过的学习过程，但本身没有明确优化目标，也不会主动深化对新知识的理解。

为突破这一局限，哈夫纳提出了几个潜在方向：
1.  **嵌套学习（Nested Learning）**：让模型的一部分在推理时快速学习上下文信息，并将学到的知识保留下来，而非像GPT系列那样，上下文窗口关闭后临时学到的信息即被丢弃。
2.  **多学习时间尺度（Multi-timescale Learning）**：快时间尺度用于快速适应新任务、新信息，训练效率高；慢时间尺度用于深度学习、巩固知识，形成长期记忆。他甚至设想了一种通用算法，可指定学习时间尺度数量，模型自动分配任务。
3.  **实时更新**：利用大规模用户交互数据进行实时更新。例如，将GPT-4发布后一到两年的数据整合周期缩短至几天甚至几秒。每收集一定量交互数据就进行小批量更新，实现持续学习。

然而，实时更新面临巨大挑战：高昂的训练成本、在线更新时的安全性和一致性问题（避免恶意数据污染或性能波动），以及动态更新模型难以分析和控制。

这些关于学习机制的思考，很多受到神经科学的启发。哈夫纳提到，哈萨比斯曾认为构建通用智能是80%神经科学+20%工程，现更新为90%工程+10%神经科学。但哈夫纳认为，随着工程推至前沿，模型规模、计算资源、数据量空前，回过头从神经科学获取直觉的价值反而更大。人类大脑历经亿万年进化，完美解决了持续学习、多时间尺度记忆、长上下文推理等问题，研究大脑机制可能为AI突破提供关键灵感。

<details>
<summary>Original English</summary>
Hafner delves into the fundamental limitations of In-Context Learning (ICL). ICL is one of the core capabilities of current large models, allowing them to quickly learn new tasks through a few examples without updating their weights. However, Hafner points out that ICL has an inherent flaw: the model merely learns to generalize in a way that "looks like learning," but there is no mechanism within the system to drive it to truly optimize any objective. Simply put, ICL is more like imitation learning; the model mimics the learning process seen in its training data but lacks a clear optimization objective and does not proactively deepen its understanding of new knowledge.

To overcome this limitation, Hafner proposes several potential directions:
1.  **Nested Learning**: Allow a part of the model to quickly learn contextual information during inference and retain that knowledge, unlike the GPT series where temporarily learned information is discarded after the context window closes.
2.  **Multi-timescale Learning**: Fast timescales for rapid adaptation to new tasks and information, leading to higher training efficiency; slow timescales for deep learning and knowledge consolidation, forming long-term memory. He even envisions a general algorithm where one can specify the number of learning timescales, and the model automatically assigns tasks.
3.  **Real-time Updates**: Utilize large-scale user interaction data for real-time updates. For instance, shortening the data integration cycle from one to two years after GPT-4's release to a few days or even seconds. Small batch updates would occur after collecting a certain amount of interaction data, enabling continuous learning.

However, real-time updates face significant challenges: high training costs, issues of safety and consistency during online updates (preventing malicious data contamination or performance fluctuations), and the difficulty in analyzing and controlling dynamically updated models.

Many of these thoughts on learning mechanisms are inspired by neuroscience. Hafner mentions that Hassabis once believed building general intelligence was 80% neuroscience + 20% engineering, now updated to 90% engineering + 10% neuroscience. However, Hafner believes that as engineering advances to the forefront, with unprecedented model scales, compute resources, and data volumes, the value of drawing intuition from neuroscience becomes even greater. The human brain, through billions of years of evolution, has perfectly solved problems like continuous learning, multi-timescale memory, and long-context reasoning. Studying the brain's mechanisms may provide key inspiration for AI breakthroughs.
</details>

### Scaling Laws与视频模型的潜力：超越文本的巨大空间

哈夫纳分享了关于Scaling Laws的未发表实验结果，其中一个发现颇为震撼：视频模型的规模天花板比文本模型高至少一个数量级。其核心原因在于视频蕴含的信息量远超文本。文本是人类对世界的抽象描述，过滤了大量物理细节和时空信息；而视频是对物理世界的直接记录，包含物体的形状、颜色、运动轨迹、相互作用、因果关系等海量信息。

哈夫纳直言，即使是当前最顶级的视频模型，基本上也是欠拟合（underfitting）的，即模型能力尚未完全发挥，因为缺乏足够的规模和数据来学习视频中的所有信息。许多视频生成模型为追求视觉效果，常出现模式坍塌（mode collapse），生成内容缺乏多样性或不符物理规律。但若将视频模型目标转向真正理解物理世界，其扩展空间将无比巨大。

他举例，在《我的世界》的库存预测任务中，小模型预测结果不准确，但规模扩大八倍后，无需专门数据集优化，即可精准预测库存动态。他们还进行了完整的YouTube预训练实验，抓取大规模YouTube视频数据集并过滤低质量内容后训练，模型泛化能力显著提升，能处理大量未见过场景。这一发现与哈萨比斯“世界模型是AGI缺失拼图”的判断不谋而合，哈夫纳从工程实践角度证明了这块拼图的潜力才刚被挖掘一小部分。

然而，哈夫纳也坦承世界模型当前的局限，最关键的是**反事实问题**（counterfactual problems）。以Dreamer 4离线训练为例，模型仅用人类玩家数据训练时，发现玩家从不会用错误材料做镐子（如用钻石做木镐），因为这在游戏中无意义。这导致世界模型不知道这些错误配方不存在，Agent在虚拟世界训练时会利用此漏洞，错误地获得奖励。解决此问题只需两到三轮真实环境交互的校正数据：让Agent在真实环境中尝试错误配方，发现失败后反馈给世界模型，模型便会修正预测。这形成了一种对抗博弈：Agent主动寻找世界模型漏洞，真实反馈修正漏洞，模型愈发稳健，Agent策略愈强。这印证了纯离线数据无法做到完美，因其无法覆盖所有反事实场景；只有与真实环境交互，才能学到真正因果关系，而非表面统计关联。

<details>
<summary>Original English</summary>
Hafner shared unpublished experimental results on Scaling Laws, with one finding being particularly striking: the scale ceiling for video models is at least an order of magnitude higher than for text models. The core reason is that video contains far more information than text. Text is an abstract description of the world by humans, filtering out a vast amount of physical detail and spatio-temporal information; video, on the other hand, is a direct record of the physical world, containing massive amounts of information such as object shapes, colors, trajectories, interactions, and causal relationships.

Hafner frankly states that even the most advanced video models today are essentially underfitting, meaning their capabilities are not fully realized due to insufficient scale and data to learn all the information within videos. Many video generation models, aiming for visually appealing movie clips, often suffer from mode collapse, producing content lacking diversity or violating physical laws, because their optimization objective is visual appeal, not understanding the physical world. However, if the objective of video models shifts to truly understanding the physical world, the scope for expansion becomes immense.

He gives an example: in the "Minecraft" inventory prediction task, small models produce inaccurate predictions, but when the model scale is increased eightfold, it can accurately predict inventory dynamics without specialized dataset optimization. They also conducted a full YouTube pre-training experiment, collecting a massive YouTube video dataset and training after filtering out low-quality content. The results showed a significant improvement in the model's generalization ability, enabling it to handle numerous unseen scenarios. This finding perfectly aligns with Hassabis's assertion that world models are the missing piece for AGI, with Hafner demonstrating from an engineering perspective that only a fraction of this puzzle's potential has been tapped.

However, Hafner also acknowledges the current limitations of world models, the most critical being **counterfactual problems**. Taking Dreamer 4's offline training as an example, when trained solely on human player data in "Minecraft," it was found that human players never attempt to craft a pickaxe with incorrect materials (e.g., using diamonds for a wooden pickaxe) because it is meaningless in the game. This leads the world model to not know that these incorrect recipes do not exist. When the reinforcement learning Agent trains in the virtual world, it exploits this loophole, pretending to craft a pickaxe with diamonds, and the world model, having never seen this situation, incorrectly rewards it, believing it successfully crafted a pickaxe, even though this recipe is non-existent in the real game. To solve this, Hafner's team found that only two to three rounds of corrective data from real environment interaction are needed: the Agent attempts these incorrect recipes in the actual "Minecraft" environment, and upon failure, this feedback is relayed to the world model, which then corrects its predictions. This creates an adversarial game: the Agent actively seeks out potential loopholes in the world model, and real-world feedback corrects these loopholes, making the world model increasingly robust and the Agent's strategy stronger. This validates the core point that purely offline data cannot achieve perfection in the real world because it cannot cover all counterfactual scenarios; only by interacting with the real environment can true causal relationships be learned, rather than superficial statistical correlations.
</details>

### 目标函数与预训练/强化学习的分工

哈夫纳强调了一个被严重低估的改进方向：**目标函数**。他将目标函数分为两类，每一类都有巨大的优化空间：

1.  **偏好型目标函数（Preference-based Objective Functions）**：由人类偏好决定，无明确数学公式，需从人类反馈中学习。例如，AI生成内容需符合人类价值观，或机器人动作需自然，这些都属于偏好型目标，需通过大量人类反馈定义和优化。
2.  **信息型目标函数（Information-based Objective Functions）**：核心是让模型理解数据规律，如预测视频下一帧、重构输入图像、探索未知环境等，旨在掌握数据中的因果关系、物理规律。

哈夫纳认为这两类目标函数都有很大改进空间。对文本模型而言，当前主流的“预测下一个token”目标函数虽能学到语法语义，但仍有优化空间，如同时预测多个token以增强模型的前瞻性。对多模态模型，当前目标函数更像是各种损失函数的“缝合怪”，需耗费精力平衡权重。他推测可能存在统一的目标函数，整合所有模态学习任务，简化研究并提升性能。

对于Agent训练，目标函数缺失更为明显。短期强化学习任务目标函数相对简单，但端到端长程任务（如《我的世界》钻石挑战）需要上万步连续动作，现有目标函数无法胜任，误差累积导致策略失效。此外，如何让Agent主动探索、精准达成长期目标、设计不依赖特定场景的奖励函数，都是急需解决的问题。哈夫纳直言，现在唯一缺的基本上就是目标函数，数据并非瓶颈，真正缺的是构建系统的想法，大家又回到了算法阶段。

在讨论了目标函数后，话题自然涉及**预训练与强化学习的分工**。哈夫纳认为，预训练核心是“从样本中学习知识”，效率极高，适合大规模吸收信息；强化学习核心是“从奖励中学习策略”，适合优化具体任务表现。强化学习不适合学习知识，因其过程低效（猜知识点再给奖励，如瞎猫碰死耗子），远不如直接吸收信息。但强化学习在优化策略上不可替代，因获取最优控制数据几乎不可能（人类行为数据非最优，需大量筛选）。理想的长期最优策略难以通过数据收集实现。强化学习的价值在于，它不需要最优数据，只需在虚拟世界中反复试错，自主找到更好策略，这与人类学习逻辑相似：观察学知识，试错学技能。AI的学习过程高效复刻此逻辑：预训练对应观察学习，强化学习对应试错学习，而世界模型为这两种学习提供统一高效平台。

<details>
<summary>Original English</summary>
Hafner emphasizes a severely underestimated direction for improvement: **objective functions**. He categorizes them into two types, each with significant room for optimization:

1.  **Preference-based Objective Functions**: Determined by human preferences, lacking explicit mathematical formulas, and requiring learning from human feedback. For example, AI-generated content should align with human values, or robot actions should be natural; these are preference-based objectives that need definition and optimization through extensive human feedback.
2.  **Information-based Objective Functions**: The core is to enable the model to understand the patterns within data, such as predicting the next frame in a video, reconstructing input images, or exploring unknown environments, aiming to grasp causal relationships and physical laws within the data.

Hafner believes both types of objective functions have considerable room for improvement. For text models, the current mainstream "predict the next token" objective, while enabling learning of grammar and semantics, still has optimization potential, such as predicting multiple tokens simultaneously to enhance the model's foresight. For multimodal models, current objective functions are more like a "hodgepodge" of various loss functions, requiring significant effort to balance their weights. He speculates that a unified objective function might exist to integrate all modal learning tasks, simplifying research and ultimately yielding better performance.

For Agent training, the lack of objective functions is more pronounced. Short-term reinforcement learning tasks have relatively mature and simple objective functions, but end-to-end long-horizon tasks, like the "Minecraft" diamond challenge requiring tens of thousands of continuous actions, are beyond the capabilities of existing objective functions, leading to policy failure due to error accumulation at each time step. Furthermore, how to enable Agents to actively explore unknown environments, precisely achieve long-term goals, and design reward functions independent of specific scenarios are urgent problems. Hafner frankly states that the only thing truly lacking now is objective functions; data is not the bottleneck, but rather the ideas for constructing such systems. The field has returned to the stage of algorithm development.

Following the discussion on objective functions, the topic naturally shifts to the division of labor between **pre-training and reinforcement learning**. Hafner clearly defines their roles: pre-training's core is "learning knowledge from samples," which is highly efficient and suitable for large-scale information absorption; reinforcement learning's core is "learning policies from rewards," suitable for optimizing performance on specific tasks. Reinforcement learning is not suitable for learning knowledge because the process is inefficient (guessing a piece of knowledge and then receiving a reward, like a blind cat finding a mouse), far less direct than absorbing information from samples. However, reinforcement learning is indispensable for policy optimization, as obtaining optimal control data is nearly impossible (human behavioral data is often suboptimal, requiring extensive filtering). Achieving ideal long-term optimal policies through data collection is unrealistic. The value of reinforcement learning lies in its ability to find better policies autonomously through repeated trial and error in a virtual world, without needing optimal data. This mirrors human learning logic: observing to learn knowledge, and trial and error to learn skills. The AI learning process efficiently replicates this logic: pre-training corresponds to observational learning, reinforcement learning to trial-and-error learning, and world models provide a unified, efficient platform for both.
</details>

### 机器人领域的变革与AI幻觉的解释

世界模型对机器人领域的影响将是颠覆性的，分为两波冲击：

1.  **表征优化**：从视频预测模型中学习到的表征，对物理世界的理解深度将远超当前视觉模型。机器人控制最关键的信息是物体的精确位置、物理属性（如盘子有多滑、杯子需握多紧、拿起杯子需施加多大力）。这些信息是视觉模型无法提供的，因其核心是理解语言图像关联，而非物理规律。但这些细节恰恰是视频预测模型的副产品，它们为精准预测下一帧必须掌握物理细节，而这正是机器人控制所必需的。传统机器人策略训练依赖大量真实世界数据，策略常脆弱，仅适用于特定场景。用视觉模型表征进行模仿学习效果虽好，但其表征并非为物理世界理解设计。哈夫纳团队实验显示，用视频预测模型的表征做模仿学习，机器人控制精度和泛化能力均大幅提升。
2.  **虚拟训练**：世界模型经过足够多样的预训练，加上少量机器人真实数据微调后，即可模拟机器人在任意场景的表现。哈夫纳形象描述，可在数据中心让机器人在百万厨房里并行训练百万种餐食，无需真实场地、机器人和运输。这意味着机器人训练成本大幅降低，效率指数级提升。目前大规模实现仍面临挑战，如精准模拟物理差异、虚拟策略无缝迁移至真实环境。但哈夫纳认为这是机器人领域的第二个跨越式变革，Dreamer 4论文已展示技术路线。他预估，机器人领域可能在三到五年内实现实用型通用机器人产品，长期推理能力则需五到十年。实用型通用机器人不需复杂科学推理，掌握精准物理控制和简单场景适应即可。

此判断与哈萨比斯观点一致，后者预测2026年机器人领域将有有趣进展。尽管外界对一些智能机器人（如Tesla Optimus）的自主性存疑，认为可能存在远程操控，但正因如此，世界模型显得尤为重要。机器人要实现真正自主运作，必须具备理解物理世界的能力，世界模型正是核心技术。

最后，哈夫纳对大语言模型的**幻觉问题**给出了一个有趣的解释，与世界模型逻辑一脉相承。他认为，Agent训练过程中会收敛到一个特定分布，在此分布内能合理达成目标并预测环境变化，因数据量和模型容量在此区域最多。模型在此范围内表现稳定，少出错。但同时，模型会逐渐遗忘分布之外的信息。扩大模型能力的方式是增大规模、增加数据，从而扩大有效分布范围。但分布边缘地带总会存在，模型在此区域因数据和容量不足，会出现泛化失败、产生幻觉。哈夫纳认为这就是大语言模型现象：大部分情况下通用且表现良好，但在边缘地带产生错误泛化和幻觉。解决关键在于引入在线强化学习反馈机制：模型产生幻觉时，用户不满给予负奖励，模型学会正确答案或在不确定时回答“不知道”，最终使有效分布更稳固，幻觉减少。

总而言之，通过哈夫纳的访谈，世界模型的出现不仅为AGI指明新方向，也正在重塑机器人、视频生成、强化学习等多个细分领域的发展逻辑。随着世界模型的成熟及技术融合，我们将离AGI梦想更近一步。

<details>
<summary>Original English</summary>
The impact of world models on the robotics field will be transformative, manifesting in two waves of disruption:

1.  **Representation Optimization**: Representations learned from video prediction models will offer a depth of understanding of the physical world far exceeding current vision models. The most critical information for robot control includes precise object positions and physical properties (e.g., how slippery a plate is, how tightly a cup needs to be held to avoid spilling, how much force is needed to lift a cup by its handle without it slipping). This information is unavailable to vision models, whose core function is understanding language-image associations, not physical laws. However, these details are precisely the byproducts of video prediction models; they must grasp physical details to accurately predict the next frame, which is essential for robot control. Traditional robot policy training relies on vast amounts of real-world data, and the resulting policies are often brittle, working only in specific scenarios. While imitation learning using vision model representations yields better results, their representations are not designed for physical world understanding. Hafner's team experiments show that using representations from video prediction models for imitation learning significantly improves robot control accuracy and generalization ability.
2.  **Virtual Training**: After sufficient diverse pre-training of world models, coupled with fine-tuning on a small amount of real robot data, they can simulate robot performance in any scenario. Hafner vividly describes how robots can be trained in millions of kitchens to prepare millions of meals in parallel within data centers, without requiring actual venues, robots, or transportation. This implies a substantial reduction in robot training costs and an exponential increase in efficiency. Currently, large-scale implementation still faces challenges, such as accurately simulating physical differences across various scenarios and seamlessly transferring virtual training policies to the real environment. However, Hafner believes this is the second leap forward for the robotics field, and the Dreamer 4 paper already outlines the technical roadmap. He estimates that the robotics field may see the first version of practical general-purpose robot products within three to five years, while more complex long-term reasoning capabilities might take five to ten years to fully conquer. Practical general-purpose robots do not require complex scientific reasoning; they only need precise physical control and simple scene adaptation capabilities, such as performing basic household tasks like cleaning and cooking.

This assessment aligns with Hassabis's views, who predicts interesting developments in robotics in 2026. Despite external skepticism about the autonomy of some intelligent robots (like Tesla's Optimus), suggesting potential remote control, it is precisely for this reason that world models become so crucial. For robots to achieve true autonomous operation, they must possess the ability to understand the physical world, and world models are the core technology for achieving this goal.

Finally, Hafner offers an interesting explanation for the **hallucination problem** in large language models, which is consistent with the core logic of world models. He posits that during training, Agents converge to a specific distribution where they can reasonably achieve goals and predict environmental changes, as the model has the most training data and allocated capacity within this distribution. Within this range, their performance is very stable and rarely erroneous. However, simultaneously, the model gradually forgets information outside this distribution. Another way to expand model capabilities is by increasing model scale and training with more data, thereby expanding this effective distribution range. Regardless, the edges of the distribution will always exist. In these regions, the model lacks sufficient training data and model capacity, leading to generalization failures and hallucinations. Hafner believes this is the phenomenon observed in current large language models: they are quite general and perform well on most aspects within the distribution but exhibit erroneous generalization and hallucinations at the fringes. The key to solving this lies in introducing feedback mechanisms from online reinforcement learning. When a model hallucinates, user dissatisfaction provides negative feedback, prompting the model to either learn the correct answer or learn to say "I don't know" when uncertain, ultimately making the effective distribution more robust and naturally reducing hallucinations.

In summary, through Hafner's interview, the emergence of world models not only points to a new direction for AGI but is also reshaping the development logic of multiple subfields such as robotics, video generation, and reinforcement learning. With the continuous maturation of world models and the deep integration of various technological directions, we will move closer to the dream of AGI.
</details>