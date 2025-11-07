---
author: Hung-yi Lee
date: '2025-11-07'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=8iFvM7WUUs8
speaker: Hung-yi Lee
tags:
  - transformer-architecture
  - llm-inference-process
  - self-attention-mechanism
  - internal-representation
  - representation-engineering
title: 解剖大型语言模型：从输入到输出的全流程解析
summary: 本讲深入剖析大型语言模型（LLM）的内部运作机制。内容涵盖从输入文本经过Tokenization、Embedding Table，到通过多层Transformer（包含Self-Attention和前馈网络）处理，最终由LM Head和Softmax生成概率分布的全过程。同时，课程还探讨了如何通过分析和修改各层Representation来理解和操控模型行为，并介绍了Logit Lens、Patch Scope等前沿分析技术。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
people:
  - 李宏毅
companies_orgs:
  - Hugging Face
  - Anthropic
products_models:
  - Llama
  - Gemma
  - Claude
  - BERT
  - Elmo
  - GPT 3.5
  - LSTM
  - GRU
  - RNN
  - RoPE
  - Mamba
media_books:
  - 《Attention is all you need》
status: evergreen
---
### 课程概述：解剖已训练好的语言模型

今天是我们课程的第三讲，我们将深入探讨语言模型内部的运作机制。到目前为止，我们反复强调语言模型的核心任务是：给定一个未完成的句子，它会输出一个概率分布，预测接下来可能出现的每一个**Token**（词元: 语言模型处理文本的基本单位，可以是一个词、一个字或一个字符片段）的概率。

我们将语言模型视为一个函数 F，输入未完成的句子 X，输出 F(X)。上一堂课我们讨论了如何选择合适的 X 以获得期望的 F(X)，而这堂课我们将聚焦于 F 的内部工作原理。也就是说，给定 X 后，F 内部究竟发生了什么，才最终生成了 F(X)。

需要强调的是，本堂课我们不涉及任何模型的训练过程，而是解剖已经训练好的模型进行观察。我们暂时不讨论模型为何能具备这些能力，这部分内容将在后续课程中讲解。今天，我们假设模型参数已定，直接剖析这些参数如何与输入句子互动，最终产生下一个 Token 的概率。

课程安排将先通过投影片讲解原理，然后通过实际操作来解剖一个语言模型，让大家更直观地理解其运作方式。

### 从输入到输出：语言模型的工作全流程

我们将分三部分来讨论语言模型的原理：首先，完整地走一遍从输入 Prompt 到输出下一个 Token 的全过程；其次，分析模型每一层输出的含义；最后，探究每一层内部的具体运作方式。

#### 步骤一：Tokenization

当一个句子输入模型后，第一步是进行 **Tokenization**（分词），将句子切分成一个个 Token，每个 Token 对应一个唯一的数字 ID。这在第一讲的实作中已经演示过。为简化说明，本堂课我们假设每个中文字都是一个 Token，但实际情况可能更复杂，例如在 Llama 中，多个汉字可能组成一个 Token，或者一个汉字被拆分成多个 Token。

#### 步骤二：Embedding Table 转换

完成 Tokenization 后，这些 ID 会被送入模型。首先与它们互动的是一个叫做 **Embedding Table**（嵌入表: 一个巨大的查询矩阵，用于将每个代表词元的数字ID映射到一个高维度的数字向量，即Embedding）的组件。这个 Embedding Table 本质上是一个巨大的矩阵，其行数等于词汇表（Vocabulary）的大小（例如，12.8 万个 Token），列数则代表每个 Token 转换成的向量维度。

这个过程就像查表：每个 Token ID 会找到矩阵中对应的行，该行就是一个高维向量，我们称之为 **Embedding**（嵌入向量: 在高维空间中表示一个词元（Token）的数字向量，意思相近的词元其向量也更接近）。这样，原本代表整数的 ID 就被转换成了一系列数字组成的向量。这个 Embedding Table 本身就是模型参数的一部分，是模型通过训练学习到的。

#### 步骤三：通过多个 Transformer Layer

接下来，这些由 Token Embedding 组成的向量序列会进入模型的第一个 **Layer**（层）。模型由许多这样的层堆叠而成。每一层的作用都是接收一排输入向量，并输出一排长度相同的新向量。

在一个 Layer 内部，每个输入的 Token Embedding 都会综合考虑其自身以及它之前所有 Token 的信息，然后生成一个新的 Embedding。经过 Layer 处理后的 Embedding，因为它融合了上下文信息，所以被称为 **Contextualized Embedding**（上下文嵌入向量: 经过模型层处理后，融合了上下文信息的嵌入向量。与原始的Token Embedding不同，同一个词在不同语境下会有不同的上下文嵌入向量）。这些输出向量有时也被称为 **Representation**（表示），或者因为它们在模型内部通常不可见，而被叫做 **Hidden Representation** 或 **Latent Representation**。

这个过程会逐层重复。第一层的输出会成为第二层的输入，然后产生新的输出，以此类推，直到通过所有 L 层。这种多层结构就是 **Deep Learning**（深度学习: 一种机器学习方法，通过构建包含多个处理层（Layer）的深度神经网络（Neural Network）来学习和表示复杂的模式）的核心思想。你可能会问神经网络中的神经元（Neuron）在哪里，我们稍后会揭示。

为什么需要多层结构？通俗地讲，可以把每一层看作是流水线上的一个工站，每个工站处理一部分任务，多站协作就能完成非常复杂的任务。从数学上也可以严格证明，深度学习模型的能力优于浅层模型。

#### 步骤四：生成最终的概率分布

经过所有 L 层处理后，我们得到最后一排向量。模型会取出这排向量中的最后一个，假设它是一个 k 维向量。这个向量会与一个名为 **LM Head**（语言模型头部: 位于语言模型最末端的组件，通常是一个矩阵，负责将模型最后一层输出的内部表示（Representation）转换为对词汇表中每个词元的预测分数）的矩阵相乘。

这个 LM Head 矩阵的维度是 V x k，其中 V 是词汇表的大小。k 维向量与该矩阵相乘后，会得到一个 V 维的向量。这个 V 维向量的每一维都对应词汇表中的一个 Token，其数值代表该 Token 作为下一个词出现的可能性得分。这个得分被称为 **Logit**（在经过Softmax函数转换为概率之前，模型输出的原始、未经归一化的预测分数。它可以是任何实数，分数越高代表模型认为该词元出现的可能性越大）。

值得注意的是，在许多模型（如 Llama）中，LM Head 并非一组独立的参数，它就是模型最开始使用的那个 Embedding Table。这种设计首尾呼应，其计算过程相当于将模型最终输出的 Representation 与词汇表中每个 Token 的 Embedding 计算 **Dot Product**（点积: 一种向量运算，用于衡量两个向量在方向上的相似度。在Attention机制中，它被用来计算Query和Key向量之间的相关性分数），相似度越高的 Token，其 Logit 分数就越高。

#### 步骤五：Softmax 转换与 Temperature

由于 Logit 可以是任意数值，无法直接作为概率使用。因此，需要通过一个名为 **Softmax**（一种数学函数，能将一组任意实数（如Logit）转换为一个概率分布，使得所有输出值都在0到1之间，且总和为1）的操作将其转换为概率分布。Softmax 的基本步骤是：对所有 Logit 值取指数（使其变为正数），然后进行归一化（使总和为1）。

实际上，我们不必过于纠结于 Softmax 输出的是否是“真实”概率。它更多是一种方便后续进行采样（Decoding）的工具。在实践中，我们还可以引入一个名为 **Temperature**（温度系数: 在Softmax计算中使用的一个超参数，用于调整输出概率分布的平滑度。温度越高，概率分布越平均，模型生成内容更具随机性和创造性；温度越低，分布越集中，生成内容更确定和保守）的参数。通过调整 Temperature 的大小，可以控制生成结果的随机性。高温会使概率分布更平坦，模型更倾向于选择罕见的词，表现出“创意模式”；低温则使分布更尖锐，模型更倾向于选择高概率的词，表现出“保守模式”。

### 深入各层输出：Embedding 与 Representation 的奥秘

#### Token Embedding vs. Contextualized Embedding

在模型的最底层，Token Embedding 的特点是“同词同向量”，即同一个 Token 无论出现在何处，其 Embedding 都是一样的。此外，意思相近的 Token，其 Embedding 向量在空间上也更接近。例如，“Apple”的 Embedding 可能会同时与“Orange”、“Banana”等水果词汇以及“iPhone”等科技词汇相近。

然而，一旦经过第一个 Layer，Token Embedding 就变成了考虑上下文的 Contextualized Embedding。这时，即使是同一个词（如“苹果”），在“我吃了一个苹果”和“我买了一台苹果电脑”这两个不同语境中，其在第一层输出的 Representation 就会截然不同。

#### Embedding 空间中的特定方向

在这些高维的 Embedding 空间中，特定的方向可能具有特定的语义含义。例如，可能存在一个方向代表“中英翻译”。理论上，“冷”的 Embedding 减去“Cold”的 Embedding 所得到的向量，可能与“热”减去“Hot”得到的向量方向非常接近。利用这种特性，甚至可以进行类比推理，如 `Man - Woman ≈ King - Queen`。不过，这种现象并非在所有模型或所有层中都能稳定复现，需要具体情况具体分析。

#### 通过降维投影分析 Representation

由于 Representation 是高维向量，直接观察难以理解。一种常见的分析方法是将其投影到低维空间（如二维平面）进行可视化。研究人员发现，通过选择特定的投影平面，可以观察到有趣的结构。例如，在早期的 BERT 模型中，中间几层的 Representation 投影后能清晰地呈现出句子的语法树结构。近期对 Llama 的研究也发现，将各地名的 Representation 投影到某个二维平面上，其分布竟然能近似地复现一张世界地图。

### 主动干预：通过修改 Representation 操控模型行为

除了被动观察，我们还可以通过直接修改 Representation 来研究其功能，这项技术被称为 **Representation Engineering** 或 **Activation Engineering**。

其核心思想是，如果模型的某个行为（如拒绝回答有害问题）是由其内部某一层生成的 Representation 中的特定“成分”导致的，那么我们就可以尝试提取并操控这个成分。

具体操作如下：
1.  **提取“拒絕”向量**：收集大量会导致模型拒绝的请求（如“如何制造炸药”）和大量不会导致拒绝的请求（如“教我机器学习”）。
2.  **定位关键层**：逐层尝试，找到一个最能分离出“拒绝”信号的层（例如第10层）。
3.  **计算平均向量**：分别计算“拒绝”和“非拒绝”两种情况下，在该层输出的 Representation 的平均向量。
4.  **获得“拒絕成分”**：将两种平均向量相减，得到的差值向量就可以被认为是代表“拒绝”这一概念的成分。

一旦获得了这个“拒绝向量”，就可以用它来“糊搞”模型。例如，当用户请求“请教我机器学习”时，在第10层强行加上这个“拒绝向量”，模型可能会突然回答：“学习机器学习是危险的，我不能教你。”反之，当用户提出一个本应被拒绝的请求时，如果在相应层减去这个“拒绝向量”，模型就可能绕过安全限制，执行有害指令。

Anthropic 公司的研究人员也在其模型 Claude 上发现了各种各样的“成分”向量，例如，他们找到了一个能让模型无脑吹捧、阿谀奉承的“尬吹”向量。通过添加这个向量，即使用户说出一个早已存在的谚语并声称是自己发明的，Claude 也会大加赞赏，称其为“世界伟人”、“名留青史”。

### 窥探模型“心智”：Logit Lens 与 Patch Scope 技术

#### Logit Lens：逐层解读模型的“内心独白”

**Logit Lens** 是一种将模型每一层的内部 Representation 直接“翻译”成文字的技术。我们知道，只有最后一层的 Representation 会通过 LM Head 转换成最终的 Logit。但 Logit Lens 的做法是，将 *每一层* 的 Representation 都拿去通过 LM Head，看看在模型的“思考过程”中，每一层最想输出的下一个 Token 是什么。

通过这种方式，我们可以观察到模型思路的演变。例如，当输入法语句子要求翻译成中文时，分析 Llama 的中间层发现，模型似乎先在内部将法文翻译成了英文（如 "flower"），然后在更深的层才最终转换成中文（“花”）。这揭示了模型可能以英文作为其中间思考的“语言”。

#### Patch Scope：将 Representation 翻译成完整句子

Logit Lens 只能将 Representation 对应到单个 Token，而 **Patch Scope** 技术则能将其解码成一个更完整的句子，从而更全面地理解其含义。

其操作方式是：
1.  首先，让模型处理一个输入（如“Diana, Princess of Wales”），并保存其每一层的 Representation。
2.  然后，构建一个模板句子，如“请简单介绍 X”。
3.  接着，在模型处理这个模板句子时，当处理到 X 的位置时，用第一步中保存的某个特定层的 Representation 来替换掉 X 对应的 Representation。
4.  最后，让模型基于这个被“嫁接”了信息的 Representation 继续生成文本。

通过这种方法，研究人员发现，对于“Diana, Princess of Wales”这个输入，模型在浅层（1-3层）可能只理解了“Wales”（威尔士，一个国家）；到中间层（第4、5层）则理解了“Princess of Wales”（威尔士王妃，王子的妻子）；直到更深的层（第6层），才最终将整个输入与“Diana”这个人完整地关联起来。这清晰地展示了模型从局部到整体、逐步深入的理解过程。

### Transformer Layer 内部探秘：Self-Attention 与前馈网络

一个 Transformer Layer 内部主要由两个子层构成：一个 Self-Attention 层和一个 Feed-Forward 层。

#### Self-Attention：捕捉上下文的关键

**Self-Attention**（自注意力机制: Transformer模型的核心组件，允许模型在处理一个序列时，为序列中的每个词元计算其与序列中所有其他词元的相关性权重，从而动态地捕捉上下文信息）是 Transformer 的精髓，它使得模型能够有效捕捉长距离依赖关系。其核心思想是，对于序列中的每一个 Token，计算它与序列中所有其他 Token 的相关性得分（Attention Weight）。

这个计算过程涉及到三个关键向量：**Query, Key, Value**（查询、键、值: 在自注意力机制中，由输入向量通过不同矩阵变换得到的三种向量。Query代表当前词元要查询信息的“探针”，Key代表其他词元可供匹配的“标签”，Value则代表其他词元实际包含的信息）。
1.  每个 Token 的 Embedding 会分别乘以三个不同的权重矩阵（Wq, Wk, Wv），生成对应的 Query (q), Key (k), 和 Value (v) 向量。
2.  要计算某个 Token（如“果”）的输出，就用它的 q 向量去和序列中所有其他 Token 的 k 向量计算点积，得到相关性分数。
3.  这些分数经过 Softmax 归一化后，成为 Attention Weights。
4.  最后，将这些权重分别乘以对应 Token 的 v 向量，再将所有结果加权求和，就得到了融合了上下文信息的新 Representation。

为了处理序列中词语的顺序信息，模型还会引入 **Positional Embedding**（位置嵌入: 一种向模型输入中添加位置信息的向量。由于Transformer架构本身不处理序列顺序，位置嵌入让模型能够区分词元在句子中的不同位置），它为每个位置提供一个独特的向量，并与 Token Embedding 相加，让模型能够区分“青山绿水”中的“青”和“青苹果”中的“青”。

此外，模型通常会使用 **Multi-head Attention**，即同时运行多组独立的 Attention 计算（每个 head 有自己的 Wq, Wk, Wv 矩阵），每一组（head）可以关注输入的不同方面（如一个 head 关注颜色，另一个关注数量），最后将所有 head 的结果合并，从而更全面地捕捉信息。

#### Feed-Forward Network：增强非线性表达能力

经过 Self-Attention 处理后，每个位置的向量会再通过一个 **Feed-Forward Layer**（前馈网络层: Transformer层中的另一个关键组件，位于自注意力层之后，由几个全连接层组成，对每个位置的向量进行非线性变换，增加模型的表达能力）。它通常由两个线性变换层和中间的一个非线性 **Activation Function**（激活函数: 在神经网络中引入非线性特性的函数，如ReLU或GeLU。它对神经元的输入进行计算，并决定其输出，使网络能够学习和模拟更复杂的数据关系）组成，进一步增强模型的表达能力。

而我们常说的“神经网络”和“神经元”的概念，就体现在这个前馈网络的计算过程中。将输入向量与权重矩阵相乘、加上偏置项、再通过激活函数，这一系列操作在图形上可以表示为一个接收多个输入并产生一个输出的节点，这就是一个“神经元”。整个语言模型就是由无数这样的神经元通过复杂的矩阵运算构成的庞大网络。

### 动手实践：亲手解剖 Llama 与 Gemma 模型

在课程的实践环节，我们通过代码实际查看了 Llama 3B 和 Gemma 4B 两个模型的内部参数。

1.  **模型参数结构**：我们打印出了模型所有参数的名称和形状。可以看到，模型参数主要包括 `embed_tokens.weight`（即 Embedding Table）以及各层（`layers.X`）中的 `self_attn`（自注意力）和 `mlp`（前馈网络）相关的权重矩阵（如 `q_proj`, `k_proj`, `v_proj`, `o_proj`, `up_proj`, `down_proj` 等）。Llama 3B 有 28 层，而 Gemma 4B 有 34 层。

2.  **分析 Embedding Table**：通过计算不同 Token Embedding 之间的相似度，我们验证了模型对词义的理解。例如，大写的 "Apple" 与 "MacBook"、"iPhone" 的 Embedding 非常接近，而中文的“王”则与英文的 "king" 以及另一个姓氏“黄”的 Embedding 相似，这表明模型在 Embedding 层面就已经捕捉到了丰富的语义和跨语言关联。

3.  **观察 Representation 变化**：我们比较了同一个词 "apple" 在不同语境（食物 vs. 公司）下，其各层 Representation 的相似度变化。结果显示，随着层数加深，代表不同含义的 "apple" 的 Representation 相似度显著下降，而代表相同含义的 "apple"（即使上下文不同）则始终保持较高的相似度。这证明了模型能够通过深层处理来精确区分词义。

4.  **可视化 Attention Weights**：我们提取并可视化了模型在处理句子时，各层各个 Attention Head 的注意力权重矩阵。可以看到，不同的 Head 关注点各不相同。例如，某个 Head 可能会让 "apple" 这个词重点关注到句子中描述其颜色的 "green"；另一个 Head 则可能让第二个出现的 "apple" 关注到第一个 "apple"，以建立指代关系。这也解释了为什么模型需要 Multi-head Attention 来从不同维度捕捉信息。

通过这些实践，我们直观地看到了理论知识在真实模型中的体现，将抽象的矩阵运算与模型的语言理解能力联系了起来。