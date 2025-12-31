---
author: Dwarkesh Patel
date: '2025-12-30'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=_9V_Hbe-N1A
speaker: Dwarkesh Patel
tags:
  - neuroscience
  - loss-functions
  - connectomics
  - formal-verification
  - reinforcement-learning
title: 解码大脑：AI 缺失的进化损失函数与全向推理
summary: 神经科学家 Adam Marblestone 深入探讨了 AI 与人类大脑在学习效率上的本质差异。他指出，大模型（LLM）依赖海量数据，而大脑则通过进化预设的复杂损失函数和“引导子系统”实现了极高的样本效率。文章涵盖了全向推理、连接组学以及形式化验证在 AI 时代的潜力。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people:
  - Adam Marblestone
  - Steve Byrnes
  - Yann LeCun
  - Terence Tao
  - Ilya Sutskever
companies_orgs:
  - E11 Bio
  - Convergent Research
  - OpenAI
  - DeepMind
  - Microsoft
products_models:
  - LLM
  - Lean
  - AlphaProof
  - GPT-5
media_books:
  - A Brief History of Intelligence
  - The Brain from the Inside Out
status: evergreen
---
### 进化损失函数：大脑高效学习的底层逻辑

目前 AI 研究界最核心的悬而未决的问题是：为什么人类大脑只需要极少的数据就能获得远超 **大语言模型**（Large Language Model: 基于海量文本训练的 AI 系统）的能力？尽管我们向 LLM 喂入了海量数据，它们在通用能力上仍仅占人类的一小部分。这种效率差异的根源可能在于 **损失函数**（Loss Function: 衡量模型预测值与真实值差异、指导学习方向的数学函数）的复杂性。

计算机科学家倾向于使用数学上简洁的损失函数，例如“预测下一个 Token”或交叉熵。然而，**进化**（Evolution）可能在漫长的岁月中，在大脑的不同区域和发育阶段内置了极其复杂的损失函数。这就像是一套由“进化”编写的、深度集成在生物硬件中的 Python 代码，它为大脑的不同部分生成了特定的学习课程。进化已经见证了无数次的成功与失败，并将这些关于“如何学习”的知识编码进了我们的学习算法中。

<details>
<summary>Original English Source</summary>
The big million-dollar question that I have, that I've been trying to get the answer to through all these interviews with AI researchers: How does the brain do it? We're throwing way more data at these LLMs and they still have a small fraction of the total capabilities that a human does. So what's going on? ... My personal hunch within that framework is that the field has neglected the role of these very specific loss functions, very specific cost functions. Machine learning tends to like mathematically simple loss functions. Predict the next token, cross-entropy, these simple computer scientist loss functions. I think evolution may have built a lot of complexity into the loss functions actually, many different loss functions for different areas turned on at different stages of development. A lot of Python code, basically, generating a specific curriculum for what different parts of the brain need to learn. Because evolution has seen many times what was successful and unsuccessful, and evolution could encode the knowledge of the learning curriculum.
</details>

### 全向推理：皮层作为通用预测引擎的本质

关于人类大脑皮层的特殊之处，一种极具洞察力的假设是它具备 **全向推理**（Omnidirectional Inference: 从任意已知变量子集预测未知变量子集的能力）的能力。目前的 LLM 本质上是单向的：给定过去数千个 Token 的上下文，计算下一个 Token 的条件概率。如果你让一个纯粹的预测模型去填充一段话的中间部分，它在原生层面是难以胜任的。

相比之下，大脑皮层可能是一个极其通用的预测引擎。皮层的任何区域都能根据其输入的任何子集来预测另一个缺失的子集。这种机制与 **Yann LeCun** 倡导的 **基于能量的模型**（Energy-Based Model: 通过能量函数描述变量间依赖关系的生成模型）非常相似。在这种框架下，大脑不仅在预测视觉或听觉，还在预测肌肉张力、心率变化以及本能反应。这种高阶理解与底层生理反馈的耦合，使得大脑能够建立一个极其稳健的世界模型。

<details>
<summary>Original English Source</summary>
But one thought about it, one possibility about it, is that it's just this incredibly general prediction engine. So any one area of the cortex is just trying to predict… Basically can it learn to predict any subset of all the variables it sees from any other subset? Omnidirectional inference, or omnidirectional prediction. Whereas an LLM is just seeing everything in the context window and then it computes a very particular conditional probability which is, "Given all the last thousands of things, what are the probabilities for the next token." ... What if the cortex is natively made so that any area of cortex can predict any pattern in any subset of its inputs given any other missing subset? That is a little bit more like "probabilistic AI". A lot of the things I'm saying, by the way, are extremely similar to what Yann LeCun would say. He's really interested in these energy-based models and something like that is like, the joint distribution of all the variables.
</details>

### 引导子系统：本能如何驱动高阶认知

为了理解大脑如何编码高阶欲望（如社交地位或道德感），我们需要引入 **Steve Byrnes** 提出的双系统框架：**学习子系统**（Learning Subsystem: 主要是大脑皮层，负责学习世界模型）和 **引导子系统**（Steering Subsystem: 包括下丘脑、脑干等原始脑区，负责本能反应）。

进化的巧妙之处在于，它不需要预先知道什么是“播客”或“AI 研究员”，它只需要在引导子系统中设定一些原始的启发式信号（如对尴尬的生理反应）。当皮层学习世界模型时，它会同时学习预测引导子系统的反应。例如，当你担心在专业人士面前出丑时，皮层中的“社交地位神经元”会与引导子系统中的“羞耻感反应”挂钩。这种机制解释了为何仅 3GB 大小的 **人类基因组**（Human Genome: 携带遗传信息的完整 DNA 序列）就能构建出如此复杂的智能：基因不需要编码所有知识，它只需要编码一套极其精简且高效的奖励函数生成规则。

<details>
<summary>Original English Source</summary>
The basic idea that Steve Byrnes is proposing is that part of the cortex, or other areas like the amygdala that learn, what they're doing is they're modeling the Steering Subsystem. The Steering Subsystem is the part with these more innately programmed responses and the innate programming of these series of reward functions, cost functions, bootstrapping functions that exist. ... Evolution has to make sure that those neurons, whatever the Yann-LeCun-being-upset-with-me neurons, get properly wired up to the shame response or this part of the reward function. ... It has to be able to robustly wire these learned features of the world, learned parts of the world model, up to these innate reward functions, and then actually use that to then learn more.
</details>

### 摊销推理与硬件权衡：生物脑的独特优势

在讨论 AI 是否应该模仿大脑时，**摊销推理**（Amortized Inference: 将复杂的推理过程预计算并存储在网络权重中，以实现快速响应）是一个核心概念。目前的神经网络主要通过前向传播实现摊销推理，而生物大脑可能在进行更多的实时概率采样。

生物硬件（大脑）的运行功率仅为 20 瓦，频率约 200 赫兹，这迫使它在能效上达到了极致。虽然数字智能具有可复制、可随机访问权重的巨大优势，但生物脑在 **非结构化稀疏性**（Unstructured Sparsity）和计算存储一体化方面的设计仍领先于目前的硅基芯片。未来 AI 的突破可能不在于单纯增加参数，而在于如何像大脑一样，在推理时灵活地分配计算资源，并利用随机性（Stochasticity）进行更高效的概率推理。

<details>
<summary>Original English Source</summary>
Right now, the way the models work is that you have an input, it maps it to an output, and this is amortizing a process, the real process, which we think is what intelligence is. ... The Bayesian inference problem, which is basically the problem of perception, given some model of the world and given some data, how should I update my… What are the missing variables in my internal model? ... The neurons are also very natural for that because they're naturally stochastic. So you don't have to do a random number generator in a bunch of Python code basically to generate a sample. The neuron just generates samples and it can tune what the different probabilities are and learn those tunings.
</details>

### 形式化验证：AI 驱动的数学与软件革命

除了神经科学，**形式化验证**（Formal Verification: 使用数学方法证明系统逻辑正确性的技术）是另一个正在发生质变的领域。**Lean**（一种形式化数学语言和定理证明器）的兴起，为 AI 提供了一个完美的 **强化学习**（Reinforcement Learning: 通过试错和奖励进行学习的范式）环境。

通过将数学证明转化为可机械验证的代码，我们不仅能让 AI 自动证明黎曼猜想，还能构建出绝对安全、不可黑客攻击的软件系统。这种“自动化的聪明”将改变数学研究的范式：人类将从繁琐的机械推导中解放出来，专注于提出更有洞察力的猜想。这种从“神经网络的模糊性”向“符号逻辑的严密性”的回归，可能是实现安全可控 AI 的关键路径。

<details>
<summary>Original English Source</summary>
Lean is this programming language where instead of expressing your math proof on pen and paper, you express it in this programming language Lean. And then at the end, if you do that that way, it is a verifiable language so that you can click "verify" and Lean will tell you whether the conclusions of your proof actually follow perfectly from your assumptions of your proof. ... Formalized math proofing—so formal means it's expressed in something like Lean and verifiable—is now mechanically verifiable. That becomes a perfect RLVR task. ... You can use the same Lean and same proof to do formally verified software. I think that's going to be a really powerful piece of cybersecurity that's relevant for all sorts of other AI hacking the world stuff.
</details>

### 科学基础设施：连接组学与“间隙图谱”

为了真正破解大脑的奥秘，我们需要像建设哈勃望远镜一样建设 **连接组学**（Connectomics: 研究神经系统连接图谱的学科）基础设施。**E11 Bio** 等组织正致力于将绘制小鼠大脑图谱的成本降低几个数量级。

Marblestone 提出了“间隙图谱”（Gap Map）的概念，旨在识别那些传统学术界无法完成、但对科学进步至关重要的工程化项目。无论是绘制分子注释的连接组，还是开发可移植的脑扫描仪，这些项目都需要跨学科的协作和大规模的资金投入。如果 AI 实验室愿意投入其 GPU 预算的百分之一用于神经科学，我们可能会在十年内迎来人类理解自身智能的“基因组时刻”。

<details>
<summary>Original English Source</summary>
E11 Bio is our main thing on connectomics. They are trying to make the technology of connectomic brain mapping several orders of magnitude cheaper. ... The Gap Map is just a list of a lot of those things and we call it a Gap Map. I think it's actually more like a fundamental capabilities map. What are all these things, like mini Hubble space telescopes? ... I think some amount of scalable infrastructure is missing in essentially every area of science, even math, which is crazy. Because mathematicians I thought just needed whiteboards, but they actually need Lean.
</details>