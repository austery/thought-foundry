---
area: "tech-engineering"
category: technology
companies_orgs:
- OpenAI
date: '2025-12-09'
draft: true
guest: ''
insight: ''
layout: post.njk
project: []
series: ''
source: https://www.youtube.com/watch?v=o15AaYl7Wu0
speaker: AI Engineer
status: evergreen
summary: Applied Compute公司致力于将前沿AI技术应用于企业，以实现超越生产力的实际自动化并带来可量化的投资回报。本文深入探讨了高效强化学习（RL）在企业级AI系统中的关键作用，对比了同步与异步RL的优劣，并着重分析了异步RL中“数据陈旧性”（staleness）带来的挑战。通过系统建模和GPU资源优化，Applied
  Compute旨在构建一个既快速又可靠的RL堆栈，以应对不同企业特定用例的训练需求，最终实现AI系统的可持续扩展和性能提升。
tags:
- enterprise-ai
- geopolitical
- reinforcement-learning
- system
- technology
title: 高效强化学习：将前沿AI应用于企业实践
---
### 引言：将前沿AI带入企业

大家好，很高兴见到各位。今天能来到这里，我们感到非常荣幸。我叫Rhythm，这位是我的联合创始人Lyndon。我们的第三位联合创始人Yash今天未能出席，但我们都非常高兴能在这里。我们三人之前都是**OpenAI**（一家人工智能研究和部署公司）的研究员，现在我们正在**Applied Compute**（一家致力于将前沿AI应用于企业的公司）将**前沿AI**（Frontier AI: 指最先进、最顶尖的人工智能技术）引入企业。今天，我们将探讨高效的**强化学习**（RL: Reinforcement Learning: 一种机器学习范式，通过智能体与环境的交互来学习最优行为策略）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hey everyone, it's great to meet you all. It's really great to be here today. My name is Rhythm, and this is my co-founder Lyndon. Our third co-founder, Yash, couldn't make it today, but we're all very excited to be here. The three of us were previously researchers at OpenAI, and now we're bringing Frontier AI inside of enterprise at Applied Compute. Today, we're going to be talking about efficient reinforcement learning.</p>
</details>

关于Applied Compute，我们致力于帮助企业构建自己的智能系统，以驱动其公司内部的实际工作。我们深入思考如何将AI从提高生产力推向真正的自动化，从而为公司带来可量化的**投资回报率**（ROI: Return on Investment: 衡量投资效益的指标）。一旦我们为特定用例构建了一个专门针对公司运营方式的系统，我们就会通过**数据飞轮**（Data Flywheel: 一种数据驱动的增长机制，通过不断收集和利用数据来持续改进产品或服务）进行部署，使其在使用过程中不断优化。想象一下，这就像公司内部一位始终走在行业前沿的专家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As some context on Applied Compute, we help enterprises build their own intelligence to power real work in their company. We think a lot about how to push AI beyond productivity into real automations that deliver ROI that is quantitative for the company. Once we build a system that is specialized to the way a company operates for a particular use case, we deploy it with a data flywheel so that it gets better over time the more you use it. Picture an in-house expert at a company who is always at the forefront of their field.</p>
</details>

### 强化学习在企业AI中的应用

从机制上讲，强化学习是我们用来将这些**分布外数据集**（Out-of-distribution data sets: 指与模型训练时所见数据分布不同的数据）引入模型**分布内**（In-distribution: 指与模型训练时所见数据分布一致的数据）的工具。Yash、Lyndon和我都在OpenAI早期从事强化学习工作，我们亲眼见证了强化学习在最大化**公共基准**（Public benchmarks: 行业普遍接受的、用于评估模型性能的标准数据集或任务）方面的强大能力。现在，我们正在更进一步，帮助企业解决他们最关心的问题，即他们的**私有基准**（Private benchmarks: 企业内部特有的、用于评估AI系统性能的标准）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">RL mechanically is the tool that we use in order to bring these out-of-distribution data sets in distribution for the models today. Yash, Lyndon, and I all worked on the RL effort at OpenAI in its early days, and we saw firsthand the power of RL in going and maximizing these public benchmarks. Now we're taking that a step further and helping enterprises go solve the problems they care the most about, sort of their private benchmarks.</p>
</details>

下面是Applied Compute的强化学习如何帮助大型语言模型（LLM）获取推理和智能能力的一个非常高层次的概述。假设你有一个数学问题数据集，我们从中选取四个问题用于强化学习训练步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here's a very high-level overview of how Applied Compute RL helps LM acquire these reasoning and intelligence capabilities. Let's say that you have a data set of math problems and we pick four of them for an RL training step.</p>
</details>

然后，我们将使用一个开源模型，比如**GPOSS模型**（GPOSS models: 可能是指某种通用开源模型，具体指代需结合上下文）或**Llama模型**（Llama models: Meta AI开发的一系列大型语言模型），让模型尝试解决这四个问题，每个问题尝试100次。这100次尝试中的每一次都是模型思考如何得出最终答案的过程，然后给出最终答案。这些思考轨迹中包含了大量的**推理令牌**（Reasoning tokens: 在大型语言模型生成答案过程中，用于表示推理步骤或中间思考过程的文本单元）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then we'll take an open source model, say one of the GPOSS models or one of the Llama models, and we have the model attempt each of those four problems 100 times. So each of these 100 attempts is the model thinking through how it would get to the final answer and then ending off with the final answer itself. And these are many, many reasoning tokens in its thinking trajectory.</p>
</details>

我们可以对所有这些答案进行评分，当模型正确时，我们可以偏置模型的权重，以强化其在该尝试中的思考轨迹。当模型不正确时，我们可以阻止模型再次出现那种行为。因此，通过这种方式，当我们进行越来越多的训练步骤，每个批次包含四个问题，每个问题100次尝试时，模型学会了推理和解决数学问题，并且在数学方面变得非常非常出色。当然，在Applied Compute，我们并不是真的帮助企业解决数学问题，但这是一种机制，通过它我们能够教导模型在他们关心的任务上变得非常非常出色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can grade all of these answers, and when the model is correct, we can bias the model's weights to reinforce its thinking trace in that attempt. When it's incorrect, we can discourage the model from having that kind of behavior again. So in this fashion, as we do more and more training steps with batches of four problems, 100 attempts each, the model learns to reason and solve math problems, and it becomes really, really good at math. Of course, at Applied Compute, we're not really helping enterprises solve math problems, but this is kind of the mechanism by which we're able to teach the models to get really, really good at tasks that they care about.</p>
</details>

### 应用型强化学习的独特挑战

正如我们所提到的，我们在Applied Compute所做的强化学习工作与实验室中的工作实际上大相径庭。这些是一些来自实验室的真实照片，以及我们前几天在Applied Compute办公室拍摄的一张照片。实验室通常进行为期数周的大型训练运行，而我们则进行更专业的运行。强化学习训练的几个方面对我们来说尤为重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, as we mentioned, the type of RL work that we do at Applied Compute is actually quite different from the lab. So, these are some real life photos from the labs and a photo we took at the Applied Compute office the other day. They, you know, the labs do these big training runs over several weeks. We do more specialized runs. And you know, there's a couple of aspects of RL training that are particularly important to us.</p>
</details>

首先，我们的运行需要快速，以便我们能够在几天内训练模型并将其快速交付给客户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We need our runs to be fast so that we can train a model and deliver it to a customer very quickly, on the order of days.</p>
</details>

其次，它们必须便宜，这样我们的单位成本才能合理，并且我们能够可持续地扩展业务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They have to be cheap so that our unit costs work and we're able to scale the business sustainably.</p>
</details>

重要的是，这一点我认为很容易被忽视，我们需要对这些训练作业所需时间的估计具有非常低的方差，因为我们不只是想普遍快速，我们希望在与客户合作时能够可靠地快速。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And importantly, and this is a point that I think, you know, it's easy to miss, we need our estimates for how long these training jobs will be to be very low variance because we don't want to just be generally fast. We want to be reliably fast when we work with customers.</p>
</details>

因此，对我们而言，一个非常关键的业务研究问题是，我们能否构建一个如此高效的强化学习堆栈，使其与我们的代理构建平台相结合，真正能够扩展这种特定用例的训练模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so the research problem for us that is very business critical is can we build an RL stack that is so efficient so that in conjunction with our agent building platform, we are really able to scale up this use case specific training motion.</p>
</details>

### 同步强化学习的低效率问题

我们首先从一种低效的强化学习形式开始，即**同步强化学习**（Synchronous RL: 强化学习的一种模式，其中数据采样和模型训练按顺序、同步进行）。在同步强化学习中，采样和训练是同步进行的。这里有一些简化，但假设我们想在八个样本的批次上进行训练。这意味着我们将等待所有八个样本完成，基本上是在完成所有采样后才开始训练。然后我们再次重复这个过程。结果是，我们有很多空闲的**GPU**（Graphics Processing Unit: 图形处理器，常用于并行计算），它们在等待第三个“掉队”的样本完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's start with an inefficient form of RL, which is synchronous RL. In synchronous RL, sampling and training happen in lock step. So there's some simplifications here, but let's say that we want to train on batches of eight samples. That means we're going to wait for all eight samples to finish and basically finish completion before we start training. And then we're going to repeat this process again. As a result, we have a lot of idle GPUs that are waiting on that third straggler sample to complete.</p>
</details>

换句话说，在同步强化学习中，我们的步骤时间是由完成时间最长的样本决定的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in other words, in synchronous RL, our step times are dictated by whatever sample takes the longest time in order to complete.</p>
</details>

为了说明这有多糟糕，我们选取了40个算术问题，每个问题使用**Quen 30B**（Quen 30B: 可能是指一个具有30亿参数的模型，用于测试）请求32个样本，并测量了这些样本完成所需的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To illustrate why this is bad, we took 40 arithmetic problems, requested 32 samples each for each of them with Quen 30B, and we measured how long it would take for these samples to complete.</p>
</details>

结果显示，99%的样本在大约40秒内完成。而要让最后1%的样本完成，则需要额外80秒。这确实有一个很长的“尾巴”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It turns out that 99% of the samples completed in about 40 seconds. It took another 80 seconds to get that last percent of samples to complete. It really has a long tail.</p>
</details>

因此，正如你所预期的，如果你查看吞吐量图表，当所有采样请求启动时，GPU在开始时做了大量工作，但到最后，它们的使用率非常低，因为它们在等待最后那些样本完成。我们在Applied Compute使用的技术术语是GPU在“偷懒”。所以，同步强化学习不是一种有效利用这些GPU的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, as you'd expect, if you look at the throughput chart, the GPUs are doing a lot of work at the beginning when all of the sampling requests are launched, but by the end, they're very, very underutilized because they're waiting on those last samples to complete. The technical term we use at Applied Compute is the GPUs are slacking. So synchronous RL is not an efficient way to use these GPUs.</p>
</details>

### 异步强化学习与“数据陈旧性”挑战

为了解决这个问题，我们需要打破采样和训练必须同步进行的条件。换句话说，我们需要允许在采样的同时进行训练。这被称为**异步强化学习**（Asynchronous RL: 强化学习的一种模式，其中数据采样和模型训练可以并行、独立进行）。有许多方法可以实现异步强化学习。我们特别喜欢的一种是P等人提出的**流水线强化学习**（Pipeline RL: 一种异步强化学习方法，通过将采样和训练任务分配给不同的GPU集群并允许模型权重在采样过程中更新来提高效率）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In order to solve this problem, we need to break the condition that sampling and training need to happen in lock step. In other words, we need to allow training while we're sampling. This is called asynchronous RL. And there are many approaches to doing asynchronous RL. One that we particularly like is Pipeline RL from P et al.</p>
</details>

这里我们将做一些简化，但在异步流水线强化学习中，我们分配一些GPU用于采样，另一些GPU用于训练。采样工作者永不停歇，它们以高批次大小持续进行推理。当样本完成时，它们被添加到训练队列中，训练工作者从队列中拉取一个批次进行训练。在一个批次训练完成后，训练工作者会将新的模型权重传播给所有采样工作者，这被称为**飞行中权重更新**（In-flight weight update: 在异步强化学习中，指在采样过程尚未完全结束时，模型权重就已经被更新并传播给采样器）。这正是流水线强化学习的独特之处。采样工作者可能正在处理一个样本，但如果训练步骤刚刚完成，它们的权重仍然会得到更新。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're going to make some simplifications here, but in asynchronous Pipeline RL, we dedicate some GPUs to sampling and some GPUs to training. The sampling workers never stop. They're constantly doing inference with high batch size. As samples complete, they get added to a queue for training, and the training workers pull a batch from the queue to train on. After a batch has been trained on, the training workers propagate the new model weights to all of the sampling workers for what's called an in-flight weight update. And this is really what differentiates Pipeline RL. The sampling workers might be in the middle of a sample, but their weights will still get updated if a training step just completed.</p>
</details>

结果是，我们最终得到的样本，其生成过程中有多个版本的策略做出了贡献。换句话说，在这些样本中，存在一些**陈旧令牌**（Stale tokens: 在异步强化学习中，指在采样过程中由于模型权重更新而导致与当前最新策略不一致的令牌）。让我们看一个样本，以使其更清晰。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As a result, we end up with samples that had multiple versions of the policy that contributed to the sample in order to generate it. In other words, there are stale tokens in some of these samples. Let's take a look at one sample to make this a bit more clear.</p>
</details>

如你所见，在时间步t、t+1和t+2，使用了三个版本的策略来生成这个样本，因为在生成这个样本的过程中，完成了两个训练步骤，并进行了两次飞行中权重更新。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As you can see, there's three versions of the policy at time steps t, t+1, and t+2 that were used to generate this sample since there were two completed train steps and in turn two in-flight weight updates while this sample was being generated.</p>
</details>

因此，当这个样本在T+3到T+4的训练批次中进行训练时，我们将有一些令牌来自落后三个步骤的策略，一些来自落后两个步骤的策略，而最后两个令牌则来自落后一个步骤的策略。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when this sample gets trained on in the T+3 to T+4 training batch, we will have some tokens that came from policy three steps behind, some that came from policy two steps behind, and those last two tokens that came from a policy that was one step behind.</p>
</details>

现在，假设我们只容忍**陈旧性**（Staleness: 在异步强化学习中，指采样数据所使用的策略与当前最新策略之间的版本差异或时间滞后）达到2。这意味着在T+1到T+2训练批次完成后，我们将不允许进行飞行中权重更新。这意味着训练工作者将处于空闲状态，等待这个样本完成，然后才能传播飞行中权重更新并开始训练下一个批次。因为如果他们进行飞行中权重更新，那将导致这个样本的陈旧性达到3，正如我们刚才所见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, let's say that we only tolerate staleness up to two. That means we're not going to allow the in-flight weight update after the T+1 to T+2 training batch completes. And that means the training workers are just going to be idle waiting for this sample to complete before they can propagate that in-flight weight update and start training on the next batch. Because if they were to do the in-flight weight update, that would cause this sample to have staleness 3 as we just saw.</p>
</details>

如果我们只容忍陈旧性为1，训练工作者将空闲更长时间，这是不好的。因此，随着你增加容忍的陈旧性，空闲的GPU通常会减少。但我们都知道，没有免费的午餐。这是标准的**策略梯度**（Policy gradient: 强化学习中一类直接优化策略函数的方法）方法，带有**重要性比率**（Importance ratio: 在策略梯度方法中，用于调整由于采样策略与目标策略不同而导致的偏差的权重）来调整这样一个事实：我们在时间步t从一个策略中采样，并用时间步t+k的策略进行训练，考虑到存在k的陈旧性。重要性比率使这个策略梯度无偏。但是，随着陈旧性的增加，该比率的方差也会增加。这就是这里的大问题，因为现在随着方差更高的重要性比率，学习可能会变得不稳定并导致**发散**（Divergence: 在机器学习中，指模型训练过程中性能恶化或无法收敛到最优解的状态）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if we only tolerate staleness one, the training workers are going to be idle for even longer, which is bad. So as you increase how much stale you tolerate, you have less idle GPUs in general. But as we all know, there's no free lunch. This is the standard policy gradient with an importance ratio to adjust for the fact that we're sampling from a policy at time step t and training with the policy at time step t+k given that there's k staleness. The importance ratio is what makes this policy gradient unbiased. But the variance of that ratio increases as you increase staleness. And so this is kind of the big issue here because now with higher variance importance ratio, learning can become unstable and cause divergence.</p>
</details>

具体的权衡是，我们希望有大量的陈旧性来实现快速的强化学习运行，但大量的陈旧性会使学习不稳定，这反过来又需要算法和科学上的创新。这是我们在Applied Compute关注的主要研究问题之一。正如我之前所说，它直接回馈到我们的核心业务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The concrete trade-off is we want a lot of staleness for fast RL runs, but a lot of staleness makes learning unstable, which then requires innovating on the algorithm and the science. And this is one of the primary research problems that we focus on here at Applied Compute. And as I was talking about earlier, it directly flows back into our core business.</p>
</details>

### 系统建模与优化

为了本次演讲的目的，我们将专注于一个更简单的子问题。假设我们有良好的科学和算法创新，使我们能够容忍达到某个固定阈值的陈旧性，并且我们有一个固定的计算预算，这在现实世界中通常存在。在这种情况下，我们如何以最高效的方式进行强化学习？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For the purpose of this talk, we're going to focus on a simpler sub problem. Let's assume that we have good science and algorithmic innovations that allow us to tolerate staleness up to some fixed threshold and we have some fixed compute budget as usually exists in the world. What is the highest way for us to do RL in this setting?</p>
</details>

谢谢Rhythm。我们将此视为我们端到端系统的建模问题，这在一开始确实有点复杂，但我们发现通过一些第一性原理的系统建模可以取得惊人的进展。与任何建模问题一样，我们首先要找出描述系统的“角色”，然后思考它们如何组合在一起进行建模。第一个角色是计算预算的某种代理，在本例中是GPU的数量。在Rhythm刚才解释的同步设置中，所有GPU将要么用于训练，要么用于采样，因为它们是依次进行的。但在异步设置中，情况有点棘手，因为我们可以选择将GPU计算池按我们想要的比例分配给训练或采样，这导致了一些设计决策。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cool. Thanks Rhythm. So we posed this as a modeling problem of our end-to-end system, which you know admittedly is a little bit complicated at first, but we did find that we can get surprisingly far with some first principle systems modeling. And as with any modeling problem, let's figure out the cast of characters that describe the system and then we'll think about how they all fit together to model it. So the first cast member is some proxy of compute budget, in which in this case we have as the number of GPUs. In the synchronous setting, like Rhythm just explained, all the GPUs will either be used for training or sampling since they happen one after the other. But in the asynchronous setting, it's a little bit trickier because we can choose to allocate that pool of GPU compute as much as we want for training or as much as we want from sampling, and that leads to some design decisions.</p>
</details>

接下来是训练批次大小，它是我们整个系统工作负载的某种代理。这是一种机器学习决策，但简而言之，我们有一个问题批次，它是我们数据集的一个子集。假设我们有N个数学问题要训练，对于每个问题，我们将并行采样N个问题。因此，如果问题非常困难，我们可能会采样更多，以鼓励样本的多样性，从而鼓励模型学习一些潜在的**发散策略**（Divergent strategies: 指在学习过程中偏离主流或预期路径，探索不同解决方案的策略）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The next is the training batch size, which is some proxy of the workload that we have on the overall system, and this is kind of an ML decision, but in short, what we have is a batch of problems, which is a subset of our data set. Let's say we have N math problems that we want to train on, and for each of these problems, we're going to sample N problems in parallel. So if the problems are really difficult, we might sample more to encourage some diversity in the samples to encourage the model to learn some potentially divergent strategies.</p>
</details>

我们需要知道的下一件事是采样吞吐量的某种代理。为了直观地了解我们应该在这里选择什么作为建模决策，让我们看看一些现代推理引擎如何处理请求。在GPU内存中，我们有模型权重、激活以及一些称为**KV缓存**（KV Cache: Key-Value Cache，在大型语言模型中用于存储过去计算的键值对，以加速后续令牌的生成）的运行时状态。给定这个训练好的模型，我们将多次运行**前向传播**（Forward pass: 在神经网络中，指数据从输入层通过各隐藏层最终到达输出层的过程），每次前向传播采样下一个令牌，然后写入KV缓存。因此，这个模型表明，我们应该做的一个主要估计是，我们应该找到一种方法来测量每个GPU前向传播的延迟。这在实践中是一个非常好的选择，因为从系统角度来看，我们选择的推理吞吐量主要由我们进行采样的批次大小决定。所以我在这里用红色方块显示的是一批令牌，它们都同时进行前向传播。这个采样前向传播需要尽可能大，以有效利用GPU，同时受限于运行时内存约束，即我们实际上不会耗尽KV缓存中的内存。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The next thing we need is some proxy of sampling throughput. And to get some intuition of what we should choose here as a modeling decision, let's look at how some modern inference engine surface requests. So in GPU memory, we have the model weights, the activations, and some runtime state called the KV cache in memory. And given this train model, we're going to run the forward pass several times where each forward pass samples the next token and then we'll write to the KV cache. And so what this model shows is that a principal estimate that we should do is we should find some way to measure the latency per GPU of the forward pass. And this ends up being a pretty good choice in practice because from the systems angle, the inference throughput that we choose is largely determined by the batch size that we perform sampling with. So what I've shown here in the red square is a batch of tokens that are all forwarded at the same time. And this sampling forward pass needs to be as large as possible to efficiently utilize the GPUs subject to the runtime constraint that we don't actually run out of memory in the KV cache.</p>
</details>

那么我们能做的是拟合一个作为批次大小函数的延迟曲线，这个延迟曲线看起来会像这样。你将有一个**内存受限**（Memory bound: 指计算性能主要受限于内存访问速度而非处理器计算速度）的区域，当它增加时，它会变成**计算受限**（Compute bound: 指计算性能主要受限于处理器计算速度而非内存访问速度）的区域，下面有一些函数形式。为了解释我们做出这个决定的细节，我们这里有一个基于系统**屋脊线模型**（Roofline model: 一种用于分析计算机系统性能的简单模型，通过内存带宽和浮点运算能力来预测性能上限）的方程。在较低的批次大小下，我在这里用黄色突出显示，我们没有太多工作要做，因为处理器上没有太多计算任务，而且你需要同时加载很多参数。因此，当你增加增量工作时，它并不会给整个系统增加太多延迟，因为处理器在进行数学运算方面非常快，我们只是在等待内存将参数从内存流式传输到处理器。但是当批次大小开始变大时，我们就会受到处理器的瓶颈。我们批次中增加的越多，前向传播所需的时间就越长。为了更好地衡量，我们在这里使用**Sigmoid函数**（Sigmoid: 一种S形函数，常用于神经网络中作为激活函数，将输入值映射到0到1之间），它只是在这里的铰链点平滑地调制过渡，以表明从内存受限计算到更多计算受限并受处理器瓶颈的微妙过渡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what we can then do is we can fit a latency curve as a function of batch size, and that latency curve will look something like this. You'll have some regime where it's memory bound, and when it increases, it becomes compute bound, and there's some functional form below. And to explain the details of why we chose this decision, what we have here is an equation that's based in the roofline model from systems. At lower batch sizes, which I've highlighted in yellow here, we don't have that much work to do because there isn't that much compute to do on the processor, and there's so many parameters you need to load in at the same time. And so, as a result, when you add incremental work, it doesn't really add that much latency to the overall system since the processor is so fast at doing math that we're just waiting on memory to stream parameters in from memory to the processor. But as the batch sizes begin to get larger, we then get bottlenecked by the processor. And the more we add to our batch, the slower the forward pass takes. And just for good measure, we have this sigmoid here that just sort of modulates the smooth transition at this hinge point here to show that there's a subtle transition from a memory bound computation to one that's more compute bound and bottlenecked by the processor.</p>
</details>

最后一个角色是训练吞吐量的某种代理，我们选择以每个GPU为基础进行测量。在这种情况下，模型接受训练批次大小，也就是我们之前看到的参数，我们通常通过拟合我们经验工作负载的代理来完成此操作。这里的单位是每个训练GPU每秒处理多少令牌。因此，它需要进行前向传播、反向传播和一些优化器步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The final cast member is some proxy of training throughput, and we chose to measure this on a per GPU basis. So in this case, the model takes in the training batch size. So the parameter we saw earlier, and we typically do this by fitting a proxy of our empirical workloads. The units here is how many each train, how many tokens per second each training GPU processes. So it needs to do the forward, the backward, and some optimizer steps.</p>
</details>

### 同步与异步设置的建模

有了这四个“角色”，我们就可以开始对系统进行建模了。我们最初的想法，尽管Rhythm认为这可能不是一个好主意，是考虑如何使用同步设置。从第一性原理来看，这可能是一个好主意，因为我们肯定满足了陈旧性约束，因为我们不会在陈旧数据上进行训练，并且我们总是使用整个GPU集群进行训练或采样，确保高效利用硬件。让我们思考如何实际建模。我们需要知道两件事。我们需要知道生成运行时的批次大小。我们还需要知道响应长度分布，以确定我们的训练工作负载将如何工作，以及采样将花费多长时间。我在这里的模拟中展示的是几个引擎。每个方块都是一个正在处理的请求，随着我们在批次中取得进展，它们变得越来越暗。当它们完成样本时，它们会写入队列。右侧是一个时间序列指标，也许是你监控生产指标时在**Graphana**（Graphana: 一个开源的数据可视化和监控工具）中会看到的东西。你可以看到批次大小开始时非常大，但随着时间推移它会慢慢减小，最终变为零，所有样本完成。然后我们最终可以运行一个优化步骤。这个步骤完成后，我们循环运行，进入下一步。因此，我们可以有以下采样过程。我们进行最大令牌推理前向传播，其中最大令牌是我们在最长请求中进行的前向传播的总次数。我们使用拟合的延迟估计器来计算前向传播需要多长时间。然后响应长度分布会告诉我们应该丢弃多少响应。因此，我们在这个视频中展示的是响应长度分布的整个过程，我们将其输入到延迟估计器中。在训练时，我们可以计算我们刚刚在批次中采样的令牌总数，并除以总训练吞吐量，这只是GPU数量乘以每个GPU的训练吞吐量。因此，我们这里有一个延迟曲线的模拟。我们有响应长度分布的**累积分布函数**（CDF: Cumulative Distribution Function: 累积分布函数，描述随机变量取值小于或等于某个特定值的概率）告诉我们应该在左侧丢弃多少响应，以及右侧的延迟曲线。这大致是吻合的，因为当我们增加GPU数量时，我们预计每一步的延迟会下降。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So given these forecast members, we can then begin modeling the system. And the first idea we had, although Rhythm, you know, suggested that this might not be a great idea, we can think about how to use a synchronous setup. And this might be a good idea from first principles because we definitely meet the staleness constraint because we don't train on stale data and we always use the entire GPU fleet for either training or sampling, making sure that we're using efficient use of the hardware. Let's think about how to actually model this. There are two things we need to know. We need to know the batch size at which generation runs. And we also need to know the response length distribution to figure out how our training workload's going to work and also how long the sampling's going to take. And so what I'm showing here in this simulation is a couple of engines. Each square is a request being processed, and they get darker and darker as we make progress throughout the batch. And as they finish samples, they write to the queue. And on the right hand side is a time series metric, maybe something that you'd see in Graphana if you're monitoring production metrics. And what you can see is that the batch size begins very high, but it slowly goes down over time as it eventually goes to zero and all the samples complete. And we can finally run an optimization step. After the step completes, we run this in a loop and we move on to the next step. And so as a result, we can have the following sampling procedure. We do maximum tokens inference forward passes where maximum tokens is the total number of forward passes we do for the longest request. We use the fitted latency estimator to figure out how long that forward pass will take. And then the response length distribution will tell us how many responses to drop. And so what we're showing in this video here is this entire thing of the response length distribution that we feed into the latency estimator. At training time, we can compute the total number of tokens that we just sampled in the batch and divide by the total training throughput, which is just the number of GPUs multiplied by the per GPU training throughput. And so what we have here is a simulation of what this latency curve looks like. So we have the CDF of the response length distribution that tells us how many responses we should drop on the left and the latency curve on the right. And this roughly kind of tracks because as we add more GPUs, we'd expect the latency per step to go down.</p>
</details>

考虑到同步设置可能不是最符合原则的选择，正如Rhythm所展示的，下一个想法是异步设置。但这并非像简单地在训练和推理之间分配计算资源那么容易，因为如果我们不小心，我们可能会再次遇到GPU空闲的问题。为了说明这一点，让我们展示这种分配问题的两个极端情况。我们首先看一个极端，我们分配了过多的推理GPU，而采样器却不多。在这种情况下，我们从队列中消费的速度远快于我们实际生产的速度，因为采样工作者生产工作的速度明显慢于我们实际消费它们的速度。当红色方块变灰时，表示它们处于空闲状态。这个图表应该希望能说明，在很多时候我们实际上并没有使用这些资源，这与之前展示的同步情况下GPU利用率低的问题相同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The next idea, given that the synchronous setup might not be the most principled choice, as Rhythm showed, is an asynchronous setup. But it's not just as easy as just sort of provisioning the compute between training and inference because if we don't do this carefully, we might actually run into the idle GPU problem again. And to show this, let's illustrate two extremes of what this allocation problem looks like. Let's first look at one end of the spectrum where we provision way too many inference GPUs and not that many samplers. In this case, we're consuming from a queue much faster than we're actually producing from it because the sampling workers are producing work significantly faster than significantly slower than we can actually consume them. When the red square grays out, it shows that they're idle. And what this diagram should hopefully illustrate is that for a lot of the time, we're actually not using that, and that has the same problem of low GPU utilization in the synchronous case as shown earlier.</p>
</details>

在另一个极端，我们可以分配过多的采样GPU，在这种情况下，我们的生产速度远快于我们实际消费的速度。所以在这里，我们将总采样GPU的数量翻倍，并将训练GPU的数量减半。正如你所看到的，它们以更快的速度生产样本。但是每个黄色方块中的这个索引，即每个样本的陈旧性计数，却在上升。随着时间的推移，我们变得越来越陈旧。因此，样本变得越来越不透明。结果是，我们从每个单独的样本中学习到的东西越来越少。那么，让我们思考如何实际建模这个工作负载，以确定最优的异步工作负载。在这种情况下，情况看起来有点不同，因为在**稳态**（Steady state: 系统在长时间运行后达到的一种平衡状态，其中关键变量保持相对稳定）下，批次大小相对一致，而同步设置中它会随着时间下降。因此，在右侧，我们有相同的时间序列指标。但在这种情况下，它有点不同，因为黄色方块总是满的，因为每当我们完成一个样本，就会有一个新样本进入，我们可以继续写入队列。因此，批次大小在运行过程中是相当一致的，只带有一些小波动。当然，这里的警告是，随着响应长度的增加，批次大小肯定会下降，因为我们会耗尽KV缓存，但这又是另一个故事了，实际上我们的模型也考虑到了这一点，因为它考虑了响应长度分布。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the other end of the extreme, we can provision way too many sampling GPUs, in which case our production rate is way faster than the rate that we actually consume them in. So here we've doubled the number of overall sampling GPUs and have the number of training GPUs. As you can see, they produce samples at much more rapid of a rate. But this index here in each yellow square, which is the staleness count of each sample, goes up. And as time moves on, we get more and more stale. And so the samples get more and more kind of less, more and more transparent as a result. And we learn less from each individual sample. So let's think about how we can actually model this workload then to determine an optimal async workload. In this case, the picture looks a little bit different because in steady state, the batch size is relatively consistent compared to the synchronous setup where it kind of goes down over time. So on the right hand side here, we have the same time series metrics. But in this case, it's a little bit different because the yellow squares are always full because every time we complete a sample, a new sample goes in, and we can continue writing to the queue. And so that batch size with a little bit of wiggles just for good measure is like a is pretty consistent over the course of a run. Now obviously the caveat here is that this batch size will certainly go down as we, you know, as response lengths go up because we run out of cache, uh, KV cache, but that's kind of a separate story and actually our model accommodates for that because we're actually accommodating for a response length distribution.</p>
</details>

然后我们可以开始找出最优布局，现在我们知道在运行过程中生成批次大小大致一致，所以我们必须满足两个约束。第一个不变式是生产和消费率大致相等。在这个等式的左侧，我们有训练吞吐量，它是训练GPU的数量乘以每个GPU的吞吐量，然后我们还有采样GPU的数量乘以采样吞吐量，这只是批次大小乘以实际进行该批次大小前向传播的延迟。其次是，鉴于Rhythm指出，如果陈旧性过高，从机器学习的角度来看可能不好，我们希望确保我们的最大理论陈旧性或模拟陈旧性不超过我们的机器学习所能处理的范围。所以这里我们左侧有最大陈旧性，它等于顶部批次中最长请求所花费的时间，这只是最大令牌数量乘以每个令牌前向传播所需的时间。底部我们有训练步骤的长度，它是训练批次大小乘以平均序列长度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can then begin to figure out the optimal layout, and there's two kind of constraints that we have to satisfy now that we know that the generation batch size is roughly consistent throughout the course of a run. The first invariant that we need to have is that the production consumption rate are roughly equal. So on the left hand side of this equality, we have the training throughput, which is the number of training GPUs multiplied by the per GPU throughput, and then also we have the number of sampling GPUs multiplied by the sampling throughput, which is just the batch size multiplied by the latency to actually do a forward pass on that batch size. And the next thing is that given that Rhythm you indicated that if we have too much staleness, that can be bad from an ML perspective, we want to make sure that our max theoretical staleness or simulated staleness doesn't exceed what our ML can handle. And so here we have the max staleness on the left, which is equal to on the top how much time the longest request took in the batch, which is just the maximum number of tokens multiplied by the number of by the amount of time each token forward pass takes. And on the bottom here we have the length of a training step, which is the training batch size multiplied by the mean sequence length.</p>
</details>

因此，这里的模拟将遍历训练GPU数量的多个不同值。由于我们有一个固定的计算池，这也就意味着用于采样的GPU数量是确定的。对于这个采样GPU数量，我们可以计算最小的稳态生成批次大小，以确保我们不会耗尽内存，同时受限于我们的KV缓存内存约束，并且在采样端实现最大吞吐量。最后一点是，我们希望排除所有采样吞吐量导致我们超过最大可能陈旧性的模拟。当我们查看该模拟时，我们可以运行一个端到端模拟，同样通过响应长度进行参数化。我们看到，这大致模拟了相对于我们的同步基线60%的加速，前提是GPU计算在训练和采样之间进行了优化分配。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the simulation here then will sweep through multiple different values of the number of training GPUs. And since we have a fixed pool of compute, that then implies a certain number of GPUs used for sampling. And for this number of sampling GPUs, we can compute the minimum steady-state generation batch size to make sure that we don't blow out of memory subject to our KV cache memory constraints and also such that we have maximum throughput on the sampling side. And the final thing is we want to prune out all simulations where the sampling throughput brings us over the maximum possible staleness. When we look at that simulation, we can run an end-to-end similarly parameterized by the response length. We see that this kind of roughly simulates a 60% speed up relative to our synchronous baseline, assuming that the GPU compute is optimally allocated between training and sampling.</p>
</details>

### 结论与展望

因此，当我们在此约束范围内调整布局时，这使我们能够限制陈旧性，同时确保我们的运行以最大吞吐量进行，而无需实际运行。这为我们提供了洞察力，可以在实际在GPU上运行之前模拟不同的工作负载，因为这些运行实际上可能非常昂贵。因此，这使我们能够从第一性原理回答科学问题，例如，如果我们将响应长度设置得非常长，我们的GPU计算应该采用什么样的最优配置，因为通常当模型通过强化学习进行学习时，它们会开始思考更长时间；以及我们在性能优化期间应该瞄准什么样的经验吞吐量。因此，这项用于模拟的技术非常有用，它为我们做出的许多系统和研究设计决策提供了依据。感谢大家的时间，稍后请找我们一起探讨更多强化学习研究工程。谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As a result, when we sweep layouts within these constraints, this allows us to limit staleness, but also make sure that we have our runs running at maximal throughput without actually doing the run itself. And so this gives us insight to simulate different workloads before actually running them on the GPU because these runs can actually be fairly expensive. And so this allows us to ask answer scientific questions from first principles like what is the optimal configuration that we should have of our GPU compute if we made response lengths very long because often times when models learn via reinforcement learning, they begin to think for much longer and also what empirical throughputs we should target during our performance optimization. So this has been a really useful piece of technology for simulation has informed a lot of the systems and research design decisions that we make. Cool. Thanks for your time and find us afterwards to jam on some more RL research engineering together later. Thank you.</p>
</details>