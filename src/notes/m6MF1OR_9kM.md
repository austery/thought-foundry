---
author: AI Engineer
date: '2025-11-22'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=m6MF1OR_9kM
speaker: AI Engineer
tags:
  - large-language-models
  - open-source-ai
  - model-training
  - multimodal-ai
  - benchmark-performance
title: Z.ai GLM 4.6 系列模型：从一亿次开源下载中学到的经验
summary: Z.ai 团队分享了其 GLM 4.6 系列模型的最新进展和训练经验。GLM 系列自2022年首次开源以来，已发布超过65个模型，累计下载量突破1亿次。GLM 4.6 在数学和编码等多个公共基准测试中表现出色，甚至超越了某些商业模型。演讲详细介绍了模型的多阶段训练设计，包括通用预训练、推理持续训练、代码微调以及长上下文和智能体数据的使用，并探讨了其强化学习框架 SLIDE 的设计和效率优化。此外，还介绍了 GLM 4.5V 多模态模型在图像和视频理解方面的能力，以及模型的使用方式和社区活动。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - knowledge-pipeline
people:
  - John
companies_orgs:
  - Z.ai
  - Hugging Face
  - Monoscope
  - GitHub
  - Reddit
  - Discord
  - Google
products_models:
  - GLM 4.6
  - GLM 4.5
  - GLM 4.0414
  - GLM 30B
  - ChatGLM 6B
  - CodeGeeX
  - CodeView
  - Video-LLM
  - GPT-4
  - GPT-4.5
  - Claude 3.5
  - Claude 4
  - DeepSeek 3.2
  - LLaMA Factory
  - MS Swift
media_books: []
status: evergreen
---
### GLM 系列模型概述

大家好，我是来自 **Z.ai** 的 John，非常高兴能在这里与大家分享我们最新的模型系列——**GLM 4.6** 系列。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hello everyone. I'm John from VAI and I'm very happy to here to talk about our latest model series uh J 4.6 series. And let's jump right in.</p>
</details>

首先，我将介绍 **GLM** 系列模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First uh I will introduce the GM series model.</p>
</details>

**GLM 4.6** 并非我们自2022年以来发布的第一个开源模型，我们从最初的 **GLM 30B** 模型开始，就一直非常重视开源工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Gen 4.6 Six is not our first open source model since 2022 starting from the very first G30B.</p>
</details>

多年来，我们发布了一系列模型家族，例如用于语言模型的 **ChatGLM 6B**，用于视觉理解的 **CodeGeeX**，用于图像生成的 **CodeView**，以及用于视频生成的 **Video-LLM**，还有许多其他跨不同领域的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have been quite serious about open source our work. Over the years, we have released a whole family of models such as chat gem 6p for language model and the code for vision understanding code view for image generation and the video for video generation and the very uh many more across the different domains.</p>
</details>

在这张幻灯片上，大家可以看到我们迄今为止开源模型的一个概览图，其中不同的颜色代表不同的模型类型：白色代表语言模型 **Z.ai GLM** 系列，粉色代表多模态理解模型，例如 **CodeView**（现在称为 **GLM-V**），绿色代表图像生成模型，黄色则代表视频生成模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And on this side you can see a map of our open source model so far and include the different color such as the white is for the language model the z GM series and the pink for the multi mode understanding such as the code VM and now it's called GMV and the green one is for image generation and the yellow is for video generation.</p>
</details>

2025年是我们的开源之年，在这一年里，我们增加了更多的模型，包括 **GLM 4.0414** 密集模型（例如9B和32B版本），以及 **GLM 4.5** 和 **GLM 4.6** **MO** 系列模型，这实际上是我们第一个 **MO** 模型家族。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh 2025 is our open source year of and in this year we added even more models including the GM4 0414 dense model including like 9B and 32B and the GM4.5 G4.6 M O series model which is actually our first MO models family.</p>
</details>

截至目前，我们总共发布了超过65个模型，在 **Hugging Face**、**Monoscope** 等平台上的下载量已超过1亿次。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So up to now we have released over 65 module in total and the closed platform like hing face monoscope and others we have already passed 100 million downloads.</p>
</details>

如果在 **GitHub** 上搜索 **GLM** 或 **Video-LLM**，您会发现1500多个基于它们构建的社区项目，这充分展示了一个社区驱动的生态系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you search for the GM or video on GitHub you will find 105 1,500 community project really top of them and is much a communitydriven ecosystem. Now</p>
</details>

### GLM 4.6 的性能表现

现在，让我们转向 **GLM 4.6**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">let's move to uh GE 4.6. Uh I will introduce it now.</p>
</details>

**GLM 4.6** 是我们最新的旗舰模型，在许多公共基准测试中，尤其是在数学和编码方面，**GLM 4.6** 相比 **GLM 4.5** 展现出明显的优势。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So G 4.6 is our latest flagship model or many public benchmark especially in math and coding. G 4.6 shows a clear game over GM 4.5.</p>
</details>

它还超越了同期发布的其他开源模型，例如 **DeepSeek 3.2**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It also output opensource model release in the same period like dipstick version 3.2.</p>
</details>

甚至在某些基准测试中击败了 **Claude 3.5** 和 **GPT-4** 等商业模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and even beat this commercial model such as the cloud SOS 4 on several benchmarks.</p>
</details>

当然，如果与 **Claude 4.5** 相比，仍然存在明显的差距。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Of course, if we compare to the clock 4.5, there still be a noticeable uh noticeable gap.</p>
</details>

所以，我们并非无所不能，但我们正在不断接近。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we are not coming with everything, but we're getting close and close.</p>
</details>

然而，最令我们高兴的是在 **Arena** 基准测试中的表现，这个基准测试更接近真实用户的偏好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh but what makes us especially happy is here is um arena uh this benchmark uh this is uh which is closer to real user preference.</p>
</details>

在 **Arena** 上，**GLM 4.6** 与 **GPT-4.5** 和 **Claude 4.5** 并列第一，并且它是其中唯一的开源模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and on element arena gem 4.6 say it's time for number one together with GPD5 and the cost cross storage 4.5 and it's the only open source model here and so I'm very happy appreciate and I want to thank our developer who try to who try our model and votes for it so let's move to the CC bench</p>
</details>

我非常感谢并想向所有尝试我们模型并投票支持它的开发者表示感谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so I'm very happy appreciate and I want to thank our developer who try to who try our model and votes for it so let's move to the CC bench</p>
</details>

### CCBench：智能体风格编码基准

除了用户基准测试，我们还构建了自己的数据集，称为 **CCBench**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so beside the user benchmark we also build our own data set called the CC bench</p>
</details>

在这里，我们希望测试真实世界中智能体风格的编码能力，而不仅仅是孤立的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here we want to text agent style coding in real world not just iso lore problem.</p>
</details>

因此，我们基于 **Cloud Code** 构建了一个智能体编码测试平台，并在此基础上创建了 **CCBench 1.1** 版本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we built a agent coding text platform based on the cloud code and on top of that we create CCB version 1.1.</p>
</details>

与 **CCBench 1.0** 版本相比，新版本增加了22个硬核编码任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So compared with version one version one uh the new version added 22 hard coding task.</p>
</details>

我们统计评估了 **CodeGeeX**、**Claude 4**、**GLM 4.5**、**GLM K2** 和 **DeepSeek 3.1 Terminus**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we statistically evaluate coco sonets a consonate 4 and g 4.5 the kim K2 and the versions 3.1 terminus</p>
</details>

**CCBench** 总共有74个任务，涵盖前端开发、内部工具开发、数据分析以及算法实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in total citybench have 74 tasks is covering the front end development and internal tool development in the data analyze and also So algorithm implementation.</p>
</details>

对于每个模型，我们记录了完整的智能体轨迹，包括查询、规划步骤、工具调用、代码添加和执行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for every model we record the full agent trader query the planning st the call and code adds and execution.</p>
</details>

我们已经完全开源了这个基准测试，大家可以在 **Hugging Face** 上查看所有链接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the fully open source this benchmark. So you can check all the link later uh below in the hiring phase and</p>
</details>

**GLM 4.6** 在 **CCBench** 上比 **GLM 4.5** 有了显著提升，并且以约68.6%的胜率超越了 **Claude 4**，同时显著优于其他开源基线模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">JM 4.6 made a clear jump over June 4.5 and over uh over performance is called to call 4 with about 68.6% 6% win rate while being significant better than under open source baseline.</p>
</details>

### GLM 4.6 的训练设计

那么，这种性能提升从何而来呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh where does the performance come from? A lot of uh let's talk about GM 4.6 training and in this uh we will start from the data v training design.</p>
</details>

让我们来谈谈 **GLM 4.6** 的训练过程，我们将从数据预训练设计开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A lot of uh let's talk about GM 4.6 training and in this uh we will start from the data v training design.</p>
</details>

第一部分是通用预训练。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First part is the general pre-training.</p>
</details>

我们从大约15万亿个通用语料 **token** 开始，其中包括网页、书籍、百科全书和多语言内容等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we start with about 15 billion uh 15 trillion tokens of the generate proposal data includes web page books uh acupedia and multilang multi uh multilingual content and so on.</p>
</details>

这个阶段旨在构建一个强大的全能基础模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this stage is about building a strong allrounder best model.</p>
</details>

此时的上下文长度为4000个 **token**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The contest then here is 4,000 tokens.</p>
</details>

下一步是推理持续训练。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the next step is called the reasoning continue training.</p>
</details>

在此基础上，我们额外增加了大约7万亿个 **token** 的代码和推理数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So on top of that base with about 7 trillion token of extra code and reasoning data.</p>
</details>

其中一部分是高质量的开源报告，另一部分是包含四步推理的数学、科学和上下文程序。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's part of this part of this counts for a high quality open source reports and another part is math science and context program with four stepbystep reasoning.</p>
</details>

接着是代码微调。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then we come to the mid training.</p>
</details>

我们转向了包含多个文件、问题和拉取请求的真实代码库，以及来自同一项目的差异。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we move to ripple label codes uh include that multiple files issues and pull request and the difference from the same project and all these packed into one long contains.</p>
</details>

所有这些都被打包成一个长上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and all these packed into one long contains.</p>
</details>

目标是教导模型遵循代码文件，理解更改，并理解拉取请求中的更改，从而端到端地读取真实的项目结构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the goal is to teach the model to following the close file and understand the chains and to also understand the pro square chains and read the real project structure end to end.</p>
</details>

在这个阶段，我们将上下文扩展到32000个 **token**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So at this stage we stand the content to 32,000</p>
</details>

模型基本上可以一次性看到中等规模代码库的关键文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the model can basically see the key file of a medium size ripple on one shot.</p>
</details>

然后是合成推理数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then is a synetic reasoning data.</p>
</details>

我们增加了大约5000亿个 **token** 的合成推理数据。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">We added about 500 billion token of synetic reasoning data.</p>
</details>

它涵盖了包含经验思维轨迹的数学、科学和算法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it cover map science and algorithm with experience thinking trace.</p>
</details>

这意味着为未来的智能体行为奠定基础，例如分解任务、反思错误和进行长链推理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's mean the lay of the groundwork of future agent behavior like breaking down the task refle uh reflecting on the mistake and doing longchain reasoning.</p>
</details>

下一步是长上下文和智能体数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh the next step is the long content and agent data.</p>
</details>

最后，我们使用了大约1000亿个 **token** 的长上下文和智能体数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh finally we use about 100 billion token of a long content and agent data.</p>
</details>

在这里，上下文现在进一步推到128000个 **token**，对于 **GLM 4.6** 则是200000个 **token**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here the secret then is now pushed further to 180 uh 20 uh 128,000 for GM 4.6 is 200,000.</p>
</details>

因此，模型可以同时处理多个文档、整个代码库和非常长的对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the model can handle four documents and the whole data uh code base and very long chart.</p>
</details>

同时，我们输入了大量的智能体轨迹，包括多步工具调用、搜索和代码执行等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">at the same time we feed lots of agent chery. So include that multi-step two calls the search and the code execution extra.</p>
</details>

因此，这方面提升了模型的长上下文能力和智能体能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh in this space improve the model long content capability and the aging capability.</p>
</details>

### SLIDE：强化学习框架

在这张幻灯片中，我们还介绍了 **SLIDE**，这是我们基于 **Echelon** 推理栈的强化学习框架。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Also in this slide we introduce slide and it's our reinforcement learning framework and based on eston inference stack.</p>
</details>

在实践中，我们设计了内部训练框架，并将其开源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh in practice uh we design in house training framework here and we also open source it.</p>
</details>

我们发现不同的任务需要非常不同的系统设计。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">uh we found that the different task need very different system design</p>
</details>

对于像数学或代码补全这样的短推理任务，最佳设置是与平均聚合同步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">for short reasoning task like the math or the code completion. So the best setup is clocked uh with the average agriculture.</p>
</details>

我们在同一个 **GPU** 上进行训练和推理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we train inference in the same GPU.</p>
</details>

在一个批次更新后，下一个批次会立即从最新策略中采样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So after one batch update wave. So the next batch immediately sample for the latest policy.</p>
</details>

这最大限度地利用了 **GPU** 内存和计算资源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the screens the most of GPU memory and compute.</p>
</details>

但对于智能体任务，例如真实的软件工程，通常涉及许多步骤，比如打开浏览器、调用后端 **API** 和等待外部响应等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and but for agent task and for example the real software engineering uh usually have many steps like for example open the browser and hit uh backend API and for the external response um extra.</p>
</details>

如果强制每个工作器保持同步，性能会因服务延迟和 **GPU** 而下降。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so if we force every worker to stay in the sameness the forces the get dragged down by the service field and GPU</p>
</details>

因此，在 **SLIDE** 中，我们决定采用异构架构来同时支持这两种模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in slide we decide he agriculture to support both uh and secret model.</p>
</details>

如果大家看图表，蓝色部分是 **Metron** 批处理训练引擎，它用于数据缓冲区和相反方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you look at the diagramraph the blue part is meatron batch training engine w for data buffer and opposite ways.</p>
</details>

绿色部分是高吞吐量干预集群。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the green pause is high throughout intervention coaster.</p>
</details>

通过请求的例行调度，中间的数据缓冲区充当共享的 **NIST** 系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So with a routine of dispatch request and in the middle the data buffer act like the share nist systems.</p>
</details>

一侧连接训练，另一侧连接用于常规强化学习任务的差异化智能体环境。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So one side connect training and other side differential agent environments for regular reinforcement learning cost.</p>
</details>

我们通过同步模式、动态采样、即时更新和最大吞吐量，在同一个 **GPU** 池上进行训练和推理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We keep training and in uh inference on the same GPU pool using with a sim mode and dynamic sampling instant update and the maximum throughputs.</p>
</details>

一旦我们切换到完整的智能体任务，我们就进入解耦和异步模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once we switch reach to complete agent task we move to a decouple and synchroniz mode.</p>
</details>

原始的外部端口直接与真实环境通信，并仅重新生成轨迹并将其写入缓冲区。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the row outside port talks directly to real environments and just regenerate tractory and write them into the buffer.</p>
</details>

然后训练端在自己的空间中消费数据，更新模型并定期推送新的权重。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then the training side consume the data in own space up the model and uh periodically push new way.</p>
</details>

这样做的好处是，即使某些任务非常慢，它们也不会阻塞整个训练流水线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the nice thing is even if some tasks super slow they don't block the whole training pipeline.</p>
</details>

在此基础上，我们还进行了一系列效率优化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So on top of that we have done a branch of efficiency optimization</p>
</details>

例如，主链仍然以 **FP16** 精度运行，但在每次策略更新后，我们对最新权重进行块状 **FP8** 量化，并通过我们的工作发送 **FP8** 版本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like the main chain still run flow 16 uh stability but after each policy update we do blockwise FDA cronization on the latest ways and send FPA version through our work.</p>
</details>

最昂贵的部分是数据生成和运行 **FP8**，它具有更高的吞吐量，而训练则保持 **BF16** 精度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the most expensive part the data generation and running FDA with much higher output while training this keep BF BF16 precision.</p>
</details>

因此，在实践中，我们在这个框架中将同时获得准确性和速度的优势。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in practice we will get the benefit both accuracy and speed in this framework.</p>
</details>

### 训练中的关键见解

现在，让我们深入探讨一些推理问题，并结合这张幻灯片中的图表。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now let's zoom in reasonal ISO and this slide with some plots.</p>
</details>

第一个是关于我们使用的两阶段课程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the first one is about the two-stage curriculum we use.</p>
</details>

我们没有从头到尾都使用固定的数据集。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We don't change all the fixed data set from start to finish.</p>
</details>

相反，我们采用了两阶段的难度课程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Instead, we use a two-stage difficulty curriculum.</p>
</details>

在第一阶段，我们使用中等难度的题目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In stage one, we use medium difficulty problem.</p>
</details>

在每个批次中，有些题目会到达，有些则不会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In each batch, some arrive in some room.</p>
</details>

因此，奖励在梯度中具有意义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the rewards have various in the grinding are meaningful.</p>
</details>

所有模型都会变得更强，在第二阶段，我们引入了极其困难的题目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All the model get stronger with which you extremely hard problem in stage two.</p>
</details>

但通过512个样本，仍然偶尔能得到正确答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But with 512 samples, you can still occasionally get a correct solution.</p>
</details>

大家可以看到图中的蓝线是我们的方法，切换到难题后，曲线持续上升。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can see on the pause the blue curve is our method after switching to hard problem the curve is keep going up.</p>
</details>

然而，如果只使用中等难度，就像红线所示，效果则不然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">However use the uh median difficulty the way uh is not on the red curve.</p>
</details>

下一张图是关于64000个 **token** 的单阶段强化学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The next picture is about a single stage reinforcement learning as 64,000 tokens.</p>
</details>

一些之前的工作，例如多阶段强化学习，会先从16000个 **token** 开始，然后是32000、48000，最后是64000。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some previous works such as multi-stage reason uh reinforcement. for is that uh for example is uh 16 then 32 then 48 and finally 6 64.</p>
</details>

但我们发现，对于已经用64000个 **token** 进行 **SFT**（Supervised Fine-Tuning: 监督微调）训练的模型，这些较短的 **IO** 训练实际上会使其忘记长上下文能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but we found that for model that is already been trained with 64,000 token uh SFT those shorter IO strange actually make you forget it long content ability.</p>
</details>

因此，平均上限列表和最终的64000个 **token** 阶段无法完全弥补损失。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so average upper listings and the finals 64k token stage can't fully recover the loss</p>
</details>

这里的红线是我们的方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the red curve here is our approach.</p>
</details>

我们直接从64000个 **token** 开始，并在一个单阶段进行训练，这明显优于蓝色的多阶段曲线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We start directly with 40 uh 64,000 uh token and train in one single stage re is clearly outperform than the blue middle multi-stage curve.</p>
</details>

下面的图是关于代码的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh the the picture below is about the code.</p>
</details>

在左下角，我们比较了两种提交代码损失的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So on the left bottom we complain two ways of committing the laws for code.</p>
</details>

蓝色的是经典的序列均值损失，即每个序列有一个损失值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the blue one is classic sequence means loss is sequence has one loss value.</p>
</details>

红色的是我们的 **token** 加权均值损失，它对 **token** 而不是序列进行平均。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the red one is our token w means loss which average over token instead of sequence.</p>
</details>

**token** 加权版本收敛更快，更稳定，并减少了生成非常短的模板答案以获取奖励的机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The token w version converts faster and most steadily and it reduce the chances to generate very short template answer just to get the rewards.</p>
</details>

在右侧，大家可以看到数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the right you can see the data.</p>
</details>

我们在 **GPQA** 和 **Demons** 上进行了科学强化学习，结果几乎与“更多数据更好”的普遍观点相反。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh we do get a science reinforcement learning on GPQA demons and the messaging almost opposite of more data is better.</p>
</details>

红线仅用一小部分经过专家验证但高质量的多项选择题进行训练。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The red curve red curve is trained only the small set of expert verify but high quality multiple choice question.</p>
</details>

蓝线则使用了混合质量的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the blue curve use mixed quality data.</p>
</details>

这个结果表明，一个小型但干净的数据集能带来更好的性能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this result that a small blood clean data set gives much better performance.</p>
</details>

因此，对于科学推理数据，质量比原始数量更重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for scientific reasoning data quality really matters more than raw size.</p>
</details>

### GLM 4.5V：多模态模型

在讨论完 **GLM 4.6** 语言模型之后，我们转向多模态模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">After talking about J 4.6 language model we move to the multimodel.</p>
</details>

**GLM 4.5V** 支持图像和视频理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">J 4.5 supports the both image and video understanding.</p>
</details>

它是我们最新的视觉理解模型，在接地和图像理解基准测试中，它展现出强大的性能，并明显优于同期发布的其他开源模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is our latest visual understanding model and go and on grounding and the image understanding benchmark it shows strong performance and the clear advantages over other open source model release around the same time.</p>
</details>

所以，基本上有三个主要部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So agriculturally you have the three main PS here</p>
</details>

一个是视觉转换编码器，然后是 **MLP** 投影器，最后是作为坐标的 **GLM 4.5** 基础模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the one is a version transforming coord and then it's like with MLP projector and the finally is 4.5 base model at the coordinates.</p>
</details>

我们努力使视觉输入尽可能保持原始状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're trying hard to keep the virtual input as original as possible.</p>
</details>

因此，模型可以看到图像的原始分辨率和宽高比，而不是将所有内容都聚焦到一个固定的正方形中。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">So the model can see the image negative resolution and accept ratio instead of focusing everything into a fixed square.</p>
</details>

这对于屏幕截图、长垂直图像和幻灯片非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this matter a lot of us screenshot and also long vertical image and the pawn point slides.</p>
</details>

对于视频，我们还在每个时间戳后插入一个时间索引 **token**，基本上告诉模型这是帧 **C**，这是秒 **T**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So looking for the video we also insert a time index token after each time basically telling model this is the friend C and this is the second T.</p>
</details>

这有助于它理解时间顺序和相关性，这对于动作理解和逐步过程至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and they help it understand the temporal order and reience which is crucial for action understanding and step by step uh producer.</p>
</details>

我们还使用了一种我们之前研究过的方法，即 **Code Agent**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we also use a method uh as we researched before co uh in coke agent.</p>
</details>

现在，**GUI** 智能体功能也支持 **GLM 4.5V**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the GUI agent capability is also support on GM 4.5 B.</p>
</details>

因此，它可以帮助您控制计算机和网站，您可以使用鼠标或键盘触摸来与浏览器、计算机或移动环境进行通信。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can like uh it can also help you to control the computer and also like the website to control uh you can use the mouse or the keyboard touching and to communicate with your uh browser also computer or mobile environments.</p>
</details>

### 如何使用 GLM 4.6 或 GLM 4.5V 模型

那么，如何使用 **GLM 4.6** 或 **GLM 4.5V** 模型呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how to use G 4.6 or G 4.5 V model.</p>
</details>

第一种方式是使用开源权重。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first one is using a open source weight.</p>
</details>

如我们所知，这些工具都是开源的，因此您可以使用 **Echelon** 或 **VLM** 或其他框架进行推理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh as we know this both these tool is open source. So you can use the echelon or v or other framework to inference it.</p>
</details>

在发布当天，我们已经集成了 **Echelon** 和 **VLM**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh along with the weights on the release day we already had achelon and the vlm integrated ready.</p>
</details>

我们还与许多第三方开源框架合作，例如 **LLaMA Factory** 或 **MS Swift**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we also work with many third party open source frameworks like the llama factory or ms swift.</p>
</details>

感谢这些社区，您可以选择任何您想要的框架来尝试我们的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So thank you to this community there you have you can choose uh any that framework you want and to try our model but</p>
</details>

**GLM 4.6** 模型是一个大型模型，拥有超过355亿个参数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the GM uh GM 4.6 model is a large model with like more than 35 uh 355 billion parameter.</p>
</details>

如果您没有 **H100** 或其他 **GPU**，还有一种更简单的方法来使用我们的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you don't have that 100 or like and other uh GPUs there's an easier way to uh use our model.</p>
</details>

在这张幻灯片中，我们展示了使用 **Echelon** 或 **VLM** 的部署命令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in this slide we show the deploy uh command of using Helon or the VLM. Here</p>
</details>

下一张幻灯片显示，我们可以在 **Z.ai** 网站上使用 **GLM**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the next slide uh we can use the GM on the Z. AI uh Z.AI AI. This is a website and you can try your uh directly.</p>
</details>

这是一个网站，您可以直接尝试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is a website and you can try your uh directly.</p>
</details>

您可以使用它来编写代码，生成 **PowerPoint** 等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and you can use the writing code you can using to generate powerpoints and so on.</p>
</details>

在这个演示中，我们使用一个命令来编写 **Google** 搜索。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in this uh demo is uh using one command to write the Google searching in our dat uh demo.</p>
</details>

您可以直接与它进行交流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can just uh communicate with it</p>
</details>

此外，**GLM** 以其编码能力而闻名。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and also GM is famous in coding capability.</p>
</details>

因此，我们还提供了 **GLM** 编码计划，它将 **GLM** 与 **Cloud Code** 或其他编码开发工具等工具和插件连接起来，以提供非常强大的编码助手体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we also provides the GM coding plan which connect GM with tools and other plugins that cloud code or other coding developer uh develop tools and to provide a very strong coding assistant experience.</p>
</details>

我们还有一个简短的演示视频，展示了如何用 **GLM 4.6** 替换 **Cocoa Live** 中的 **Yodi** 模型，您可以在 **YouTube** 上观看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We also have a short demo video that uh show how to replace Yodi model in a cocoa livea with gem 4.6 here and you can uh see the you can watch this on YouTube</p>
</details>

### 社区活动与重要链接

接下来是我们的社区活动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">then is the uh our community activity beyond today talk where regularly host events both online and offline.</p>
</details>

除了今天的演讲，我们还定期举办线上和线下活动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">beyond today talk where regularly host events both online and offline.</p>
</details>

每当我们发布新模型时，通常会举办几次社区会议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So whenever we release a new model we usually run a several community session afterwards.</p>
</details>

第一次活动是在 **Reddit** 上进行 **AMA**（Ask Me Anything: 问我任何问题）活动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">as the first one there is AMA in the Reddit.</p>
</details>

我们还有一些线下和现场的技术分享，欢迎大家加入我们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we also have some uh we also have some offline and onsite uh techn uh technology sharing so you can join us</p>
</details>

最后一张幻灯片是一些大家可能需要了解的重要链接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the final uh slide is some important link you may to know.</p>
</details>

如我之前提到的，大家可以在 **Z.ai** 网站上尝试 **GLM** 模型，以及我们的 **API**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh is about website as I as I mentioned mentioned before to try GM model as ZAI and also our API on here.</p>
</details>

我们还提供了 **GLM 4.6** 和 **GLM 4.5** 的技术报告，大家可以查看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">then we also provide GM 4.6 six technical uh technical board and J4.5 tech reports. Uh you can check it.</p>
</details>

如果您想加入我们的社区，这里有 **Discord** 链接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and you want to join our community here is the discord link.</p>
</details>

**GitHub** 链接也在下方，其中包含开源模型以及如何在开源方法上部署的 **README** 文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and also the GitHub link is below with the open source model including the readme to how to deploy on the open source method.</p>
</details>

这就是今天的所有内容，非常感谢大家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's all of today. Thank you very much.</p>
</details>