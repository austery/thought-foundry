---
author: Best Partners TV
date: '2026-02-06'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=Lf46hauagpw
speaker: Best Partners TV
tags:
  - gemini-3
  - ai-research
  - multimodal-ai
  - team-collaboration
  - data-finite-era
title: Gemini 3的成功之道：200人像素级创新与AI的未来
summary: 本期节目深入探讨了Google Gemini 3模型的成功秘诀，预训练负责人塞巴斯蒂安·布尔若揭示了其并非源于单一技术突破，而是两百多人的团队通过无数像素级微小改进汇聚而成的结果。访谈还触及了行业从数据无限到数据有限的范式转变，强调了架构创新、数据质量及‘研究品味’的重要性。布尔若分享了Chinchilla、Retro等项目经验，并阐述了原生多模态、长上下文、评估体系及持续学习等前沿方向。对话还回顾了他的个人成长经历，并展望了AI领域全栈研究员的未来。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people:
  - 塞巴斯蒂安·布尔若
companies_orgs:
  - DeepMind
  - Google
products_models:
  - Gemini 3
  - Gemini 1.5
  - Chinchilla
  - Retro
  - Gopher
media_books: []
status: evergreen
---
### Gemini 3成功密码

**主持人**: 大家好，这里是最佳拍档。今天，我们来聊聊Google **Gemini 3**模型背后的故事，以及分享一位行业巨擘的深度见解。他就是Gemini 3项目的预训练负责人**塞巴斯蒂安·布尔若**。作为全球顶尖的人工智能研究者，同时也是**Metis名单**成员，这是他首次参与播客录制。在对话中，他不仅揭秘了Gemini 3的底层构建逻辑，更抛出了多个足以撼动行业认知的硬核观点。从模型研发到团队管理，从行业的趋势到未来的展望，每一个话题都很有深度和启发性。所以今天给大家分享一下。

<details>
<summary>Original English</summary>

**Host**: Hello everyone, this is Best Partners. Today, we're going to talk about the story behind Google's **Gemini 3** model and share deep insights from an industry titan. He is the head of pre-training for the Gemini 3 project, **Sebastian Burzo**. As a top global AI researcher and a member of the **Metis list**, this is his first podcast appearance. In our conversation, he not only reveals the underlying logic of Gemini 3's architecture but also presents several hardcore viewpoints that could shake industry perceptions. From model development to team management, from industry trends to future outlooks, every topic is profound and inspiring. So, let's dive in today.

</details>

### 像素级创新

**主持人**: 首先，我们不得不聊一聊Gemini 3的成功密码。很多人可能会觉得，这样一款实现了跨代级飞跃的模型，背后一定有某个惊天动地的核心技术突破。但是布尔若却给出了一个看似朴素、却蕴含深意的答案。他提到，Gemini的联合负责人**奥雷尔·维尼**在Gemini 3发布时曾经表示，模型的成功秘诀，其实就是更优质的预训练和后训练，而这背后，是庞大的团队共同努力的结果。

<details>
<summary>Original English</summary>

**Host**: First, we must discuss the secret to Gemini 3's success. Many might assume that a model achieving such a generational leap must have a groundbreaking core technological breakthrough behind it. However, Burzo offers an answer that seems simple yet profound. He mentioned that **Aurel Viny**, co-lead of Gemini, stated at the Gemini 3 launch that the model's secret to success is actually higher quality pre-training and post-training, which is the result of immense team effort.

</details>

**主持人**: 不同于大家对于天才灵感会主导创新的固有认知，Gemini 3的进步并不是源于一两个关键性的突破，而是两百多人的团队在模型、数据、基础设施、评估等多个维度，进行了无数次**像素级微小改进**。这些改进和创新的合力，最终才促成了模型的巨大飞跃。

<details>
<summary>Original English</summary>

**Host**: Contrary to the common perception that genius inspiration drives innovation, Gemini 3's progress didn't stem from one or two pivotal breakthroughs. Instead, it was the result of over two hundred people making countless **pixel-level micro-improvements** across multiple dimensions, including models, data, infrastructure, and evaluation. The synergy of these improvements and innovations ultimately led to the model's massive leap forward.

</details>

**主持人**: 布尔若作为预训练的负责人之一，他的工作既要致力于提升模型的性能，也包括复杂的协调和整合工作。要知道，预训练团队规模相当庞大，大约有将近两百个人，每天都围绕着预训练的相关领域忙碌，涵盖了**数据筛选**、**模型架构**的优化、**基础设施搭建**、**评估体系**完善等多个方面。因此，协调这么多人的工作，让每个人都能发挥所长、取得进展，其实是一项非常复杂而且耗时的任务。

<details>
<summary>Original English</summary>

**Host**: Burzo, as one of the heads of pre-training, is responsible not only for enhancing model performance but also for complex coordination and integration tasks. The pre-training team is quite large, with nearly two hundred people working daily on pre-training related areas, covering aspects like **data filtering**, optimization of **model architecture**, **infrastructure setup**, and refinement of the **evaluation system**. Therefore, coordinating the work of so many individuals, ensuring everyone can contribute effectively and make progress, is a highly complex and time-consuming endeavor.

</details>

**塞巴斯蒂安·布尔若**: 但是我认为这非常重要。因为从长远来看，成功的关键在于整合众多人的工作成果，而不是依赖少数人的领先。短期来看，少数人的突出贡献可能会带来一定的效果，但是只有让整个团队形成合力，才能实现真正的跨代级突破。这也正是Gemini 3成功的核心逻辑之一：通过极致的集体让卓越平庸化。这里的平庸化并不是指能力普通，而是强调每一个微小改进的积累，通过每一个团队成员的付出，最终汇聚成不可阻挡的创新力量。

<details>
<summary>Original English</summary>

**Sebastian Burzo**: But I think it's very important. Because in the long run, the key to success lies in integrating the work of many people, rather than relying on the leadership of a few. In the short term, outstanding contributions from a few individuals might yield some results, but only by forming a collective force can the entire team achieve true generational breakthroughs. This is precisely one of Gemini 3's core success logics: democratizing excellence through extreme collectivism. Here, 'democratizing' doesn't mean ordinary capability; rather, it emphasizes the accumulation of every small improvement, where the contributions of each team member ultimately converge into an unstoppable force of innovation.

</details>

### 数据有限时代

**主持人**: 布尔若提到，行业正在从**数据无限时代**，转入**数据有限模式**。这个范式的转变切实改变了许多研究方向，以及我们思考问题的方式。在过去，很多人认为，只要不断堆砌算力、扩大数据的规模，模型的性能就会持续提升。但是现在的情况已经不同了。虽然**缩放定律**还没有触顶，规模仍然是预训练中一个非常重要的方面，能够以相对可预测的方式提升模型性能，但是人们之前可能高估了规模的作用，它并不是唯一的因素。

<details>
<summary>Original English</summary>

**Host**: Burzo mentioned that the industry is transitioning from a data-infinite era to a data-finite paradigm. This shift has significantly altered many research directions and our ways of thinking. In the past, many believed that continuously increasing compute power and data scale would lead to perpetual improvements in model performance. However, the situation has changed. While the **scaling laws** haven't reached their limit, scale remains a crucial aspect of pre-training, capable of improving model performance in a relatively predictable manner. Yet, people might have previously overestimated the role of scale; it is not the sole factor.

</details>

**主持人**: 如今，**架构创新**和**数据创新**的重要性，甚至超过了单纯的规模扩大。真正的胜负关键在于，怎么样在有限的数据池里，通过架构优化挤出更多的智能。这一点在**DeepMind**的实践中也得到了体现。布尔若和他的团队曾经开展过**Chinchilla**项目，这个项目重新研究了在固定的训练计算资源下，怎样调整模型规模和数据规模，才能训练出性能最佳的模型。他们发现，与之前的认知相比，数据规模的扩展速度应该更快，而不是一味的扩大模型规模。这个发现对模型训练完成后的部署成本和使用成本，有着重要的影响。

<details>
<summary>Original English</summary>

**Host**: Today, the importance of **architectural innovation** and **data innovation** even surpasses mere scale expansion. The real key to success lies in how to extract more intelligence from a limited data pool through architectural optimization. This has been demonstrated in **DeepMind**'s practices. Burzo and his team conducted the **Chinchilla** project, which re-examined how to adjust model and data scales under fixed training compute resources to train the best-performing model. They discovered that, compared to previous understanding, data scale should expand faster, rather than solely increasing model size. This finding has significant implications for post-training deployment and usage costs.

</details>

**主持人**: 另外一个分支项目是**Retro**，这个项目更侧重于架构方面的创新，探索了如何通过让模型能够从大型文本语料库中检索信息，来提升模型的性能。也就是说，不要求模型将所有的知识都存储在参数中，而是让模型在训练和推理的过程中，都能够查找特定的信息。这个思路至今仍然具有重要的实践意义。

<details>
<summary>Original English</summary>

**Host**: Another related project is **Retro**, which focuses more on architectural innovation, exploring how to enhance model performance by enabling it to retrieve information from large text corpora. In other words, it doesn't require the model to store all knowledge within its parameters; instead, it can look up specific information during training and inference. This approach remains highly relevant and practical today.

</details>

### 研究品味

**主持人**: 在这样的行业背景下，**研究品味**成为了决定模型生死的关键因素，这也是布尔若非常强调的一点。他认为，如今的研究品味很难量化，但是有几个关键要素。首先，研究不能是孤立的，必须能够和其他人的研究相互配合、相互整合。比如，某项模型改进虽然能提升单一指标，但是如果让其他人使用模型的难度增加了百分之五，那么这很可能不是一个好的权衡，因为它会拖慢整个团队的研究进度，进而影响整体进展。

<details>
<summary>Original English</summary>

**Host**: In this industry context, **research taste** becomes a critical factor determining a model's fate, a point Burzo strongly emphasizes. He believes that research taste is difficult to quantify but has several key elements. Firstly, research cannot be isolated; it must be able to cooperate and integrate with others' work. For example, if a model improvement boosts a single metric but increases the difficulty for others to use the model by five percent, it's likely not a good trade-off, as it would slow down the entire team's research progress and consequently impact overall advancement.

</details>

**塞巴斯蒂安·布尔若**: 其次，要对复杂性保持着警惕。研究中能够承受的复杂性是有限的，同时也需要控制研究风险。因此，团队往往会放弃性能最优、但是复杂度过高的方案，在性能上做一些让步，选择复杂度比较低的版本，因为这有助于未来取得更多的进展。除此之外，研究品味还包括一种直觉：如何在计算资源有限的情况下，判断哪些研究方向可能可行，哪些可能不可行。毕竟，大多数的研究想法都不会成功。研究者需要判断，在某个方向上投入多少精力后，应该转向其他方向，或者是不是应该继续坚持。而且在深度学习领域，一个负面结果并不意味着某个方法行不通，而往往意味着还没有找到让它可行的方法。所以意识到这一点也非常关键。

<details>
<summary>Original English</summary>

**Sebastian Burzo**: Secondly, one must be wary of complexity. The complexity that research can tolerate is limited, and research risks need to be controlled. Therefore, teams often abandon solutions that are optimally performant but excessively complex, making some concessions on performance to choose less complex versions, as this facilitates future progress. Furthermore, research taste includes intuition: how to judge, under limited computational resources, which research directions are feasible and which are not. After all, most research ideas do not succeed. Researchers need to determine how much effort to invest in a direction before pivoting or persisting. In deep learning, a negative result doesn't mean a method is unworkable; it often means the way to make it work hasn't been found yet. Recognizing this is crucial.

</details>

**塞巴斯蒂安·布尔若**: 在资源极其昂贵的预训练阶段，最难的不是决定做什么，而是决定不做什么，这种取舍的智慧，正是研究品味的核心体现。

<details>
<summary>Original English</summary>

**Sebastian Burzo**: During the extremely expensive pre-training phase, the hardest part isn't deciding what to do, but what *not* to do. This wisdom of trade-offs is the core manifestation of research taste.

</details>

### 短期与长期目标

**主持人**: 在研究过程中，还有一个重要的平衡问题，那就是短期目标和长期目标的权衡。布尔若表示，总会有一些关键路径上的事情需要完成，比如模型的某个部分需要改进，或者知道模型的某个部分不够优化。这时侯就需要投入大量的精力来解决这些眼前问题。这样做，一方面是因为这些改进肯定会提升模型的性能，是相对安全的赌注。另一方面，那些看起来不够完善的部分，在未来模型规模扩大或者能力增强的时侯，往往会引发更多的问题。因此认真对待并解决这些问题非常重要。

<details>
<summary>Original English</summary>

**Host**: In the research process, there's another important balance: the trade-off between short-term and long-term goals. Burzo states that there are always critical path items that need completion, such as improving a specific part of the model or identifying an under-optimized component. Significant effort is then dedicated to addressing these immediate issues. This is done partly because these improvements are certain to enhance model performance, making them relatively safe bets. On the other hand, seemingly imperfect parts can lead to more problems as the model scales up or its capabilities grow in the future. Therefore, addressing these issues diligently is crucial.

</details>

**塞巴斯蒂安·布尔若**: 而另一方面则是更具探索性的研究。这些想法可能会应用在下一个版本，或者再下一个版本的Gemini。它们可能会对模型性能产生更大的影响，但是目前还没有得到充分验证。这种平衡并没有一个固定的答案，而且具有一定的周期性。比如，在模型规模扩张的阶段，探索性研究通常会多一些，因为此时没有太多需要并行解决的紧急问题。但是在即将推出新架构或者新模型之前，工作的重点会转向降低风险，更多关注执行层面。

<details>
<summary>Original English</summary>

**Sebastian Burzo**: On the other hand, there is more exploratory research. These ideas might be applied in the next version, or the version after that, of Gemini. They could have a greater impact on model performance but are not yet fully validated. This balance doesn't have a fixed answer and is somewhat cyclical. For instance, during the model scaling phase, exploratory research tends to be more prevalent as there are fewer urgent issues to address concurrently. However, leading up to the release of a new architecture or model, the focus shifts to risk reduction, concentrating more on execution.

</details>

**主持人**: 值得一提的是，在**DeepMind**，研究和产品之间的张力相对较小，因为所有的领导层都有研究背景。他们非常清楚，虽然在一定程度上可以强制加速特定的基准测试和某些目标的实现，但是最终，研究工作的进展才是最为关键的。这也让研究团队能够更加专注在长期价值的创造上。

<details>
<summary>Original English</summary>

**Host**: It's worth noting that at **DeepMind**, the tension between research and product is relatively low because all leadership has a research background. They understand clearly that while specific benchmarks and goals can be accelerated to some extent, ultimately, the progress of research work is paramount. This allows research teams to focus more on creating long-term value.

</details>

### 团队架构与多模态

**主持人**: 说到团队，DeepMind的组织架构也为研究的顺利推进提供了重要的保障。从最高层面来看，有预训练团队和后训练团队。在预训练团队中，有专门负责模型、数据、基础设施和评估的人员。其中评估工作被布尔若认为是非常重要，但是往往被低估的部分。做好评估其实是一件非常困难的事情。此外，还有庞大的团队负责基础设施和部署工作。各个团队之间紧密协作，形成了高效的研发体系。这种架构设计，既保证了专业领域的深度钻研，又实现了跨领域的协同配合，为模型的持续迭代提供了有力的支撑。

<details>
<summary>Original English</summary>

**Host**: Speaking of teams, DeepMind's organizational structure also provides crucial support for smooth research progression. At the highest level, there are pre-training and post-training teams. Within the pre-training team, there are specialists responsible for models, data, infrastructure, and evaluation. Burzo considers evaluation a critical but often underestimated component. Doing evaluation well is indeed very difficult. Additionally, large teams are dedicated to infrastructure and deployment. Close collaboration among these teams forms an efficient R&D system. This architectural design ensures deep specialization in professional domains while enabling cross-disciplinary synergy, providing robust support for continuous model iteration.

</details>

**主持人**: 从宏观架构来看，Gemini 3是一个基于**Transformer**的**混合专家架构**（Mixture-of-Experts）。与前一个版本相比，架构并没有发生太大的变化。不过，Gemini 3的一个重要特性是**原生多模态**。这意味着并不存在专门处理图像、音频或者文本的独立模型，而是由同一个神经网络同时处理所有这些不同的模态。这种设计虽然带来了显著的性能优势，但是也涉及到了成本问题。

<details>
<summary>Original English</summary>

**Host**: From a macro architectural perspective, Gemini 3 is a **Transformer**-based **Mixture-of-Experts** architecture. Compared to its predecessor, the architecture hasn't undergone drastic changes. However, a key feature of Gemini 3 is **native multimodality**. This means there aren't separate models for processing images, audio, or text; instead, a single neural network handles all these different modalities simultaneously. While this design offers significant performance advantages, it also involves cost considerations.

</details>

**塞巴斯蒂安·布尔若**: 原生多模态的成本主要体现在两个方面：一是复杂性成本和研究成本，因为要处理更多的任务，尤其是不同模态之间的相互作用，这会影响到研究的多个方面，增加复杂性，所以需要花费更多的时间来进行思考和研究。二是计算成本。和纯文本相比，图像的输入规模通常会更大。如果采用简单直接的处理方式，实际的计算成本会更高。但是通过相关研究可以提高这些处理过程的效率，而且带来的收益在很大程度上超过了成本。所以这也是DeepMind坚持训练这类模型的原因。

<details>
<summary>Original English</summary>

**Sebastian Burzo**: The costs of native multimodality are primarily reflected in two aspects: first, complexity and research costs, as it involves handling more tasks, especially the interactions between different modalities, which impacts multiple research facets and increases complexity, thus requiring more time for thought and study. Second, computational costs. Compared to pure text, image inputs are typically larger. If processed in a simple, direct manner, the actual computational cost would be higher. However, related research can improve the efficiency of these processes, and the benefits largely outweigh the costs. This is why DeepMind persists in training such models.

</details>

### 数据枯竭与合成数据

**主持人**: 在预训练数据方面，Gemini 3的预训练数据是多种数据来源的混合，本质上是多模态的，包含了许多不同模态的信息。而行业内有一个备受关注的问题，就是**数据枯竭**。人们经常讨论未来是不是会面临数据不足的困境。布尔若认为这种情况并不会发生。虽然行业正在从数据无限转向数据有限的模式，但是这并不意味着数据量减少了，而是数据量是有限的。这种范式转变促使研究方向发生了调整。就像在大语言模型出现之前，很多人是基于**ImageNet**等基准测试开展研究的，因此诞生了很多适用于该阶段的技术。如今，同样会在数据有限的范式下涌现出新的创新。

<details>
<summary>Original English</summary>

**Host**: Regarding pre-training data, Gemini 3's pre-training data is a mix of various sources, inherently multimodal, containing information from many different modalities. A widely discussed issue in the industry is **data scarcity**. People often debate whether we will face a shortage of data in the future. Burzo believes this won't happen. While the industry is shifting from a data-infinite to a data-finite paradigm, it doesn't mean the amount of data is decreasing; rather, data is finite. This paradigm shift drives adjustments in research directions. Before the advent of large language models, many conducted research based on benchmarks like **ImageNet**, leading to technologies suitable for that stage. Today, new innovations will similarly emerge under the data-finite paradigm.

</details>

**塞巴斯蒂安·布尔若**: **合成数据**也是当前行业内的一个热门话题。我认为合成数据是一个有趣的领域，但是使用时必须非常谨慎，因为很容易误用。通常情况下，人们会使用一个性能强劲的模型来生成合成数据，然后通过小规模的消融实验，来验证合成数据的效果。但是这里的一个关键问题是：能不能生成合成数据来训练一个未来模型，并且让这个新模型的性能优于生成合成数据的原始模型呢？DeepMind在这方面投入了大量时间进行思考和研究。

<details>
<summary>Original English</summary>

**Sebastian Burzo**: **Synthetic data** is also a hot topic in the industry right now. I think synthetic data is an interesting area, but it must be used with extreme caution, as it's easy to misuse. Typically, people use a powerful model to generate synthetic data and then validate its effectiveness through small-scale ablation studies. However, a key question here is: can synthetic data be generated to train a future model, and can this new model's performance surpass the original model that generated the synthetic data? DeepMind has invested significant time in contemplating and researching this.

</details>

### 未来发展方向

**主持人**: 在预训练的发展方向上，布尔若提到了**长上下文**的能力。他认为这是一个非常有潜力的方向。在**Gemini 1.5**中，DeepMind在长上下文的能力方面取得了巨大飞跃，使得如今的模型和Agent能够处理像代码库之类的大型任务。他预测未来的一两年内，在这方面将会有更多的创新，不仅会提高长上下文处理的效率，还会进一步扩展模型的上下文长度。

<details>
<summary>Original English</summary>

**Host**: Regarding future directions in pre-training, Burzo highlights the capability of **long context**. He believes this is a highly promising area. In **Gemini 1.5**, DeepMind achieved a significant leap in long-context capabilities, enabling current models and Agents to handle large tasks like codebases. He predicts that in the next one to two years, there will be more innovations in this area, not only improving the efficiency of long-context processing but also further extending the model's context length.

</details>

**主持人**: 此外，**注意力机制**也是一个重要的研究方向。最近取得的一些有趣发现，将在未来的几个月内，塑造许多的研究方向。还有一个容易被忽视、但是至关重要的方面，就是**评估**。布尔若强调，评估在预训练中非常困难，因为它需要弥合两个差距。一方面，日常训练和评估所使用的模型，通常会比最终规模化后的模型更小、性能更弱。因此评估方法必须能够预测大模型的性能，仍然能够为大模型指明正确方向，也就是说，它必须是一个良好的指标。

<details>
<summary>Original English</summary>

**Host**: Furthermore, **attention mechanisms** are another important research direction. Recent interesting findings will shape many research avenues in the coming months. Another aspect, often overlooked but critically important, is **evaluation**. Burzo emphasizes that evaluation is very difficult in pre-training because it needs to bridge two gaps. Firstly, models used for daily training and evaluation are typically smaller and less performant than the final scaled-up models. Therefore, evaluation methods must be able to predict the performance of large models and still guide them in the right direction; in other words, it must be a good indicator.

</details>

**塞巴斯蒂安·布尔若**: 另一方面，还存在后训练差距。模型在预训练后并不会直接投入使用，还会进行后续训练。因此在预训练阶段或者对预训练模型进行的评估，必须能够很好的反映模型在后续训练中的表现。因此，评估方面的进步，在很大程度上推动了模型和数据改进方面的进展，因为它让研究者能够准确的衡量模型或者数据的实际改进效果。

<details>
<summary>Original English</summary>

**Sebastian Burzo**: On the other hand, there's the post-training gap. Models are not directly deployed after pre-training; they undergo further training. Therefore, evaluations conducted during the pre-training phase or on pre-trained models must accurately reflect their performance in subsequent training. Consequently, advancements in evaluation significantly drive progress in model and data improvements, as they allow researchers to accurately measure the actual impact of model or data enhancements.

</details>

**主持人**: 为了保证评估的准确性，DeepMind的评估体系在很大程度上是在内部构建的，而且越来越倾向于在内部构建，因为外部基准测试虽然可以在短期内使用，但是很快就会受到污染。这些基准测试的内容，会以不同形式在网络上传播。如果训练数据中包含了这些内容，就很难检测出来。因此，想要避免自欺欺人，真正了解模型的实际性能，唯一的方法就是创建独立的评估集并且严格保密。

<details>
<summary>Original English</summary>

**Host**: To ensure evaluation accuracy, DeepMind's evaluation system is largely built internally, and this trend is growing. While external benchmarks can be used in the short term, they quickly become contaminated. The content of these benchmarks spreads online in various forms. If training data includes this content, it's difficult to detect. Therefore, to avoid self-deception and truly understand a model's actual performance, the only way is to create independent evaluation sets and keep them strictly confidential.

</details>

### 对齐与思考模型

**主持人**: 关于**对齐**问题，布尔若表示大部分的对齐工作是在后续训练阶段进行的，但是预训练阶段也有一些相关工作。当被问到如果核心数据集来自互联网，而互联网上有很多不良信息，对齐的首要原则是否是将这些不良信息排除在模型训练之外的时候，他给出了一个耐人寻味的答案。

<details>
<summary>Original English</summary>

**Host**: Regarding the issue of **alignment**, Burzo states that most alignment work is done during the post-training phase, though some related work occurs during pre-training. When asked if the primary principle of alignment, given core datasets come from the internet with much harmful information, is to exclude this harmful information from model training, he offered a thought-provoking answer.

</details>

**塞巴斯蒂安·布尔若**: 他说，模型需要了解这些不良信息，才能知道要远离它们。因此至少需要让模型接触一部分这类信息，以便它能够识别这些不良内容，并且避免产生相关输出。否则当用户提到某些不良信息的时侯，模型可能根本不知道用户在说什么，也就无法判断这是不良信息。

<details>
<summary>Original English</summary>

**Sebastian Burzo**: He said that models need to understand harmful information to know how to avoid it. Therefore, it's at least necessary for the model to be exposed to a portion of this information so it can identify harmful content and avoid generating related outputs. Otherwise, when users mention certain harmful information, the model might not know what the user is talking about and thus cannot identify it as harmful.

</details>

**主持人**: 在对话中，主持人还提到了**DeepThink**，这是在Gemini 3发布几天后推出的思考模型。虽然布尔若没有透露太多的具体信息，但是他解释了这类思考模型的工作原理：和仅在模型内部进行的计算不同，这类模型会在序列长度层面进行计算，让模型有更多的思考空间。模型会开始提出假设、测试假设、调用一些工具来验证假设、进行搜索等等，最后可能会回顾整个思考过程，为用户提供一个明确的答案。

<details>
<summary>Original English</summary>

**Host**: During the conversation, the host also mentioned **DeepThink**, a reasoning model launched a few days after Gemini 3's release. Although Burzo didn't reveal many specifics, he explained how these reasoning models work: unlike computations performed solely within the model, these models compute at the sequence length level, giving the model more room for thought. The model starts by forming hypotheses, testing them, calling tools to verify assumptions, conducting searches, and so on, finally reviewing the entire thought process to provide a clear answer to the user.

</details>

**主持人**: 而对于谷歌的**Gravity**项目，布尔若认为Agent在执行层面的工作中能够带来最大的影响，比如监控实验进程等等。而视觉感知方面对于Agent来说非常重要，因为我们现在开始要求模型能够和计算机屏幕进行交互。因此，具备出色的屏幕理解能力非常重要。这也是预训练阶段的一个重要方面。

<details>
<summary>Original English</summary>

**Host**: As for Google's **Gravity** project, Burzo believes Agents can have the greatest impact in execution-level tasks, such as monitoring experiment progress. Visual perception is also crucial for Agents, as we are now beginning to require models to interact with computer screens. Therefore, excellent screen comprehension ability is very important. This is also a significant aspect of the pre-training phase.

</details>

### 持续学习与投资

**主持人**: 此外，**持续学习**也是一个重要的研究方向。所谓持续学习，本质上是指随着新知识的发现，不断用这些知识更新模型。比如明天出现了一项新的科学突破，而昨天训练的基础模型并不知道这项突破，如何让模型快速吸收这类新的知识，就是持续学习要解决的问题。

<details>
<summary>Original English</summary>

**Host**: Furthermore, **continuous learning** is another important research direction. Continuous learning essentially means constantly updating models with new knowledge as it is discovered. For example, if a new scientific breakthrough occurs tomorrow, and the base model trained yesterday is unaware of it, how to enable the model to quickly absorb this new knowledge is the problem continuous learning aims to solve.

</details>

**塞巴斯蒂安·布尔若**: 在这个方面，我认为过去几年已经取得了很大的进展，这主要体现在后训练和搜索方面。通过使用搜索工具进行搜索调用，模型可以获取新的信息。这也正是Retro项目所做的事情：通过检索数据，尝试将知识语料库和推理部分分离开来。另一方面，持续学习也和长上下文的能力相关。一种实现方式是不断扩展用户的上下文，让模型在上下文中获取更多的信息，从而具备持续学习的能力。但是这可能还需要一场更大的范式转变，比如改变训练算法，让模型能够持续从来自现实世界的数据流中进行学习。

<details>
<summary>Original English</summary>

**Sebastian Burzo**: In this regard, I believe significant progress has been made over the past few years, primarily in post-training and search. By making search calls using search tools, models can acquire new information. This is precisely what the Retro project does: by retrieving data, it attempts to decouple the knowledge corpus from the reasoning part. On the other hand, continuous learning is also related to long-context capabilities. One way to achieve this is by continuously expanding user context, allowing the model to obtain more information within the context, thereby enabling continuous learning. However, this might require a larger paradigm shift, such as changing training algorithms to allow models to continuously learn from real-world data streams.

</details>

**主持人**: 当被问到人工智能领域是不是存在过度投资时，布尔若表示现在情况已经好多了。大约两年前，很多人还在试图创建专门的模型，来解决那些通用模型在半年或者一年内就能够解决的任务。但是现在人们已经逐渐意识到，对于通用任务或者不需要极端专业模型的任务，通用模型可能就能完成。这意味着，关于如何使用模型、如何构建模型应用框架等方面的研究，变得越来越重要。同时如何提高模型和这些应用框架的稳健性，让它们能够减少错误并且从错误中恢复，也是一个重要的研究方向。

<details>
<summary>Original English</summary>

**Host**: When asked if there is over-investment in the AI field, Burzo stated that the situation is much better now. About two years ago, many were trying to create specialized models for tasks that general models could solve within six months to a year. But now, people are increasingly realizing that for general tasks or tasks not requiring extremely specialized models, general models might suffice. This means research into how to use models and how to build model application frameworks is becoming increasingly important. Concurrently, improving the robustness of models and these application frameworks, enabling them to reduce errors and recover from them, is also a significant research direction.

</details>

### 个人成长轨迹

**主持人**: 访谈中，我们还可以了解到布尔若的个人成长轨迹。这位顶尖AI研究者的经历其实非常有启发意义。他的成长背景相当多元，在欧洲的多个地方长大，经常搬家。他出生在荷兰，7岁时搬到瑞士，父亲是瑞士人，母亲是德国人。在瑞士完成了少年大部分学业和高中初期课程，主要使用法语，部分课程使用德语。十五岁时，他又搬到了意大利，在那里完成了高中学业，直到十九岁左右。

<details>
<summary>Original English</summary>

**Host**: During the interview, we can also learn about Burzo's personal growth trajectory. The experiences of this top AI researcher are quite inspiring. His background is quite diverse; he grew up in various parts of Europe and moved frequently. Born in the Netherlands, he moved to Switzerland at age seven. His father is Swiss, and his mother is German. He completed most of his schooling and early high school in Switzerland, primarily using French with some German courses. At fifteen, he moved to Italy, where he finished high school until around nineteen years old.

</details>

**主持人**: 小时候的布尔若就对编程产生了浓厚的兴趣。他的父亲有技术背景，所以布尔若在十岁或者十一岁的时侯，就开始和父亲一起学习编程，并且一直很喜欢这项技能。在学校里，他在数学和科学方面也表现非常出色。数学考试从来不用特意复习，就能够取得不错的成绩。原本他打算去苏黎世联邦理工学院深造，但是偶然看到一份大学排名，发现**剑桥大学**位居榜首，于是便决定申请试试。没想到几个月后收到了录取通知书。随后在剑桥大学计算机实验室完成了本科和硕士学业。

<details>
<summary>Original English</summary>

**Host**: As a child, Burzo developed a strong interest in programming. His father had a technical background, so Burzo started learning programming with his father at the age of ten or eleven and has always enjoyed this skill. In school, he also excelled in mathematics and science. He consistently achieved good grades in math exams without needing to study specifically. He originally planned to pursue further studies at ETH Zurich, but he happened to see a university ranking that placed **Cambridge University** at the top, so he decided to apply. To his surprise, he received an acceptance letter a few months later. He subsequently completed his undergraduate and master's degrees at the Cambridge University Computer Laboratory.

</details>

**主持人**: 毕业后进入**DeepMind**，对布尔若来说算是一个幸运的契机。他硕士期间的一位讲师，同时也是DeepMind的研究员，在最后一堂课结束的时候，他鼓起勇气向这位讲师请求推荐。对方爽快的答应了，帮他获得了DeepMind的面试机会。二零一八年，当时的DeepMind还没有并入谷歌，他以研究工程师的身份加入了公司。最初，他参与的是和强化学习相关的项目，训练无监督网络来学习Atari游戏环境中的关键点，并尝试让Agent玩Atari游戏。但是他并不喜欢其中的合成性质，一直想从事和真实世界数据相关、能够产生实际影响的工作。

<details>
<summary>Original English</summary>

**Host**: Joining **DeepMind** after graduation was a fortunate opportunity for Burzo. A lecturer during his master's program, who was also a researcher at DeepMind, was approached by Burzo at the end of the last class to request a recommendation. The lecturer readily agreed, helping him secure an interview opportunity at DeepMind. In 2018, when DeepMind had not yet merged with Google, he joined the company as a Research Engineer. Initially, he worked on projects related to reinforcement learning, training unsupervised networks to learn key points in Atari game environments and attempting to have Agents play Atari games. However, he disliked the synthetic nature of it and always wanted to work with real-world data on tasks that could have a practical impact.

</details>

**主持人**: 于是开始转向表征学习领域，训练能够很好进行表征的神经网络来完成各种任务。他参与的第一个相关项目名为“基于真实世界数据的表征学习”。当时之所以要在项目名称中加上“基于真实世界数据”这个限定，是因为人们会默认项目使用的是合成环境或者合成数据。而从那以后，情况发生了彻底改变：真实世界数据成为了大模型训练的核心。之后，他参与了**Gopher**项目，这是DeepMind发表的第一篇关于大语言模型的论文。当时的团队大约有十到十二人。从那时起他就深刻的意识到，这类研究需要团队协作，单靠个人是无法完成的。也正是从那时起，他开始专注于预训练的工作，进行大规模的预训练。这不仅培养了他的研究兴趣，也让他找到了自己热爱的领域。

<details>
<summary>Original English</summary>

**Host**: He then shifted towards representation learning, training neural networks capable of good representation for various tasks. His first related project was named 'Representation Learning with Real-World Data.' The qualifier 'with Real-World Data' was added to the project name at the time because people defaulted to assuming projects used synthetic environments or data. Since then, the situation has completely changed: real-world data has become central to large model training. Subsequently, he participated in the **Gopher** project, DeepMind's first paper on large language models. The team then consisted of about ten to twelve people. From that point on, he deeply realized that such research requires team collaboration and cannot be accomplished by individuals alone. It was also from then that he began focusing on pre-training, conducting large-scale pre-training. This not only cultivated his research interest but also led him to find his passion.

</details>

**主持人**: 从最初的研究工程师，到如今掌管百余人规模预训练团队的负责人，布尔若的职业轨迹，既体现了他对技术的执着追求，也展现了他在团队管理和研究型工程方面的卓越能力。

<details>
<summary>Original English</summary>

**Host**: From an initial Research Engineer to now leading a pre-training team of over a hundred people, Burzo's career trajectory reflects his persistent pursuit of technology and his outstanding abilities in team management and research engineering.

</details>

### 未来展望

**主持人**: 最后，聊到个人未来的职业发展，布尔若表示，他非常喜欢在日常工作中和众多优秀的人合作，并且从他们身上学习。这在很大程度上驱动着他。每天上班，他都会和非常聪明的人交流，他们会教给他很多新的知识，这是他非常享受的一点。而且现在有很多不同因素正在共同作用，AI领域还有很多方面有提升的空间。他对未来充满了好奇，因为目前来看，这类工作的进展似乎看不到尽头。他觉得，能够见证这个过程，看看行业能够走多远，这真的非常有趣。同时他认为至少在未来一年左右，AI行业快速发展的趋势不会放缓。

<details>
<summary>Original English</summary>

**Host**: Finally, regarding his future career development, Burzo states that he greatly enjoys collaborating with and learning from many excellent people in his daily work. This is a significant driving force for him. Every day at work, he interacts with very intelligent individuals who teach him a lot of new knowledge, which he finds very enjoyable. Moreover, many different factors are currently at play, and there are still many areas for improvement in the AI field. He is full of curiosity about the future because, from the current perspective, the progress in this type of work seems endless. He feels it's truly fascinating to witness this process and see how far the industry can go. He also believes that the rapid development trend in the AI industry will not slow down for at least the next year or so.

</details>

**主持人**: 回顾这场深度对话，布尔若为我们揭开了Gemini 3的神秘面纱，也让我们对AI行业的现状和未来有了更加清晰、更加深刻的认识。AI的下半场已经到来。正如布尔若所强调的，它将属于**全栈研究员**，属于那些能够整合技术栈、注重团队协作、兼具研究品味和工程能力的从业者。而Gemini 3的成功，仅仅是未来序幕刚刚拉开的一角。我们有理由期待，在众多研究者的共同努力下，AI将为我们带来更多惊喜。感谢收看本期视频，我们下期再见。

<details>
<summary>Original English</summary>

**Host**: Reflecting on this in-depth conversation, Burzo has unveiled the mystery of Gemini 3 and given us a clearer, deeper understanding of the current state and future of the AI industry. The second half of AI has arrived. As Burzo emphasized, it will belong to **full-stack researchers** – those who can integrate technology stacks, value teamwork, and possess both research taste and engineering capabilities. Gemini 3's success is merely the opening scene of a much larger future. We have reason to expect that with the collective efforts of numerous researchers, AI will bring us even more surprises. Thank you for watching this episode; see you next time.

</details>