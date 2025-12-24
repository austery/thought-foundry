---
area: tech-insights
category: technology
companies_orgs:
- Google
- OpenAI
- Meta
- Amazon
date: '2025-12-14'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- 《繁花》
- 《外交事务》
people:
- 李宏毅
- 何凯明
products_models:
- NanoBanana
- Sora
- Suno
- IndexTTS2
- Muse
- Flux
- Stable Diffusion
- WaveNet
- Pixel RNN
- Pixel CNN
- Video Pixel Network
- MaskGIT
- VAR
- Next Step One
project:
- ai-impact-analysis
- systems-thinking
- historical-insights
series: ''
source: https://www.youtube.com/watch?v=ccqCDD9LqCA
speaker: Hung-yi Lee
status: evergreen
summary: 本文深入探讨2025年生成式AI在影像与声音生成中的核心突破：传统自回归接龙模型如何与Flow Matching等生成式模型结合，克服Token离散化带来的品质限制，并实现高保真内容生成的范式转变。
tags:
- flow
- generation
- investment
- model
title: 生成式AI的两条世界线：从像素接龙到Flow Matching的融合之路
---

### 生成式AI的两大范式：从接龙到分布匹配

各位同学大家好，今天我们来探讨生成式人工智能在影像和声音生成领域的最新进展。在此之前，我们的课程主要聚焦于语言模型——通过文字接龙的方式，基于上文预测下一个词。然而，今天我们要探索的是更复杂、更具挑战性的领域：如何生成图像、视频和声音。

这些技术与语言模型的核心差异在于，它们处理的不是离散的符号（文字），而是连续的、高维度的数据——像素和取样点。这些数据的基本单位远比文字精细，因此生成它们的方法也经历了根本性的变革。

### 从像素接龙到Token化的革命

在早期，生成图像的模型如 Pixel RNN 和 Pixel CNN 直接以像素为单位进行预测。每个像素由 RGB 三个子像素组成，模型需要逐个预测这 256 种可能的数值。这种方法虽然可行，但效率极低。

为了解决这个问题，研究者们引入了 **Tokenization** 的概念。这类似于语言模型中的分词，但更复杂：一个复杂的神经网络（Tokenizer）将高分辨率的图像或音频信号压缩成一组离散的、低维度的“Token”。这些 Token 代表了图像中的语义区块（如眼睛、狗头）或声音的音素片段。

例如，OpenAI 的 DALL-E 将图像划分为 8x8 的小块，用 8192 个 Token 来表示。随后，一个接龙模型（如 Transformer）学习预测这些 Token 的序列。最后，通过 Detokenizer 将 Token 序列还原成图像。

这个过程在语音合成中同样适用。WaveNet 就是早期通过预测每一个音频取样点来生成语音的模型，而现代方法如 EnCodec 和 Mimi 则使用 **Residual Vector Quantization (RVQ)**，通过多层 Tokenizer 逐级细化表示，就像数位系统中的“进位”一样，用少量 Token 表达更丰富的信息。

### Token 的极限：离散化的桎梏

然而，Tokenization 带来了一个根本性的限制。它本质上是对原始数据的**有损压缩**。当我们将图像或音频信号转换为离散 Token 时，大量细节被丢弃。

一个关键的实验证明了这一点：当使用当时最先进的 Tokenizer 将蒙娜丽莎画像压缩后再还原时，生成的图像出现了脸部扭曲、多余皱纹等明显失真。在 2025 年，这种品质已无法被接受。

问题的核心在于：**离散 Token 的表达能力是有限的**。无论你把接龙模型做得多大、训练多久，最终生成品质的上限都被 Token 的离散集合所限制。这就像用有限的乐高积木，无论如何拼接，都无法精确还原一座真实的城堡。

### 世界线的交汇：Flow Matching 的突破

为了解决离散 Token 的瓶颈，研究者们将目光转向了另一条“世界线”——**生成式模型（Generative Models）**，如 VAE、GAN 和 Diffusion Model。这些模型的核心思想是：**真正的生成任务，其“正确答案”不是一个固定的点，而是一个概率分布。**

在图像生成中，一段文字描述“一只奔跑的狗”，可能对应着成千上万种不同的、合理的图像。生成模型的目标不是预测一个“标准答案”，而是学习并模拟这个复杂的**目标分布（Target Distribution）**。

Flow Matching 正是这一世界线在 2025 年的代表性技术。它的工作原理非常直观：

1.  **定义路径**：我们有一个起始分布（如高斯分布）和一个目标分布（如真实图像的分布）。
2.  **学习向量场**：训练一个神经网络（Flow Matching Model），输入一个点 `X0` 和一个时间步 `t`，输出一个**向量 `V(t)`**。这个向量告诉 `X0` 在时间 `t` 时，应该朝哪个方向、移动多远。
3.  **逐步引导**：从起始分布采样一个点 `X0`，然后按照模型输出的向量一步步移动（如每步走 1/4），最终到达目标分布的一个点 `X1`。
4.  **训练方法**：为了训练这个向量场，我们从目标分布采样一个真实点 `X1`，从起始分布采样 `X0`。然后在两点之间的连线上随机取一个点 `X(t)`，并告诉模型：“在这个位置、这个时间点，你应该朝 `X1 - X0` 的方向移动。”

这种方法的神奇之处在于，它不需要模型直接输出目标分布，而是通过学习一个**连续的、动态变化的方向场（Vector Field）**来引导点从起点“流动”到终点。实验表明，即使目标分布是复杂的螺旋形（如螺纹），Flow Matching 也能通过足够多的步数，将起始点完美映射过去。

### 自回归与生成模型的终极融合：Generation Head

Flow Matching 的强大之处在于，它不只可以单独用于生成整个图像，更可以与我们熟悉的**自回归接龙（Auto-Regressive）模型完美结合**。

过去，如果我们想用接龙模型直接生成连续向量（Continuous Token），会遇到一个致命问题：使用均方误差（MSE）作为损失函数时，模型会输出所有可能答案的“平均值”，导致生成结果模糊（如“双头狗”）。

Flow Matching 的解决方案是引入 **Generation Head**：

1.  **接龙模型负责“预测”**：Transformer 模型接收已生成的 Token 序列和文本提示，输出一个**中间向量**。这个向量不是最终答案。
2.  **Generation Head 负责“生成”**：这个中间向量，连同从高斯分布采样的一个随机噪声向量，被输入到一个**极小的、简单的神经网络（如 MLP）**——Generation Head。这个小模型的任务，就是输出一个**向量场的方向 `V`**。
3.  **迭代优化**：这个方向 `V` 被用来引导一个点（或整个图像的 Token 向量）逐步移动。这个过程需要多次迭代，就像 Flow Matching 本身一样。

**Generation Head 的核心思想是将“序列预测”和“分布生成”解耦**。大型、昂贵的 Transformer 模型只负责理解上下文和预测方向，而极小的 Generation Head 负责执行高效的、高保真的生成过程。这大大降低了计算成本。

这一融合的成果在 2025 年已结出硕果：

*   **图像生成**：如 VAR（Visual Auto-Regressive）模型，通过多层级的接龙和 Generation Head，逐步从低分辨率生成高分辨率图像。
*   **音频生成**：Amazon 的研究团队利用此框架，实现了从文字直接生成复杂环境音效（如火车站的嘈杂声）。
*   **语音合成**：新的 TTS 模型采用基于 Energy Model 的 Generation Head，仅需极少数迭代即可生成高质量语音。
*   **视频生成**：Autoregressive Video Generation with Continuous Token 的工作，标志着视频生成进入了新的阶段。

### 未来的方向：一步到位的生成

当前的 Generation Head 方法虽强大，但仍需多次迭代。未来的研究热点是如何让这个过程“一步到位”——即通过更精妙的模型设计（如 Rectified Flow、Energy Model），直接将一个随机噪声映射到目标分布，无需任何迭代。这将是下一代生成式 AI 的核心突破。

总而言之，在 2025 年，我们见证了自回归接龙与生成式模型这两条世界线的交汇。Tokenization 解决了数据表达的问题，而 Flow Matching 与 Generation Head 则解决了生成质量的瓶颈。未来的生成式 AI，将不再受限于离散符号，而是直接在连续、高维的语义空间中自由流动。