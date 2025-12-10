---
author: AI Engineer
date: '2025-12-09'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=_IzZWeuTx7I
speaker: AI Engineer
tags:
  - ai-research-accessibility
  - rl-environments
  - open-source-ai
  - model-customization
  - community-building
title: Prime Intellect：通过开放式RL环境和工具提升AI研究的可及性
summary: 本文探讨了AI研究中“规模化”的深层含义，超越了单纯的计算资源投入。Prime Intellect旨在通过构建开放式强化学习（RL）环境和工具，降低AI研究的门槛，让更多人能够参与到模型训练和优化中。文章将“环境”比作AI研究的“网络应用”，强调其在模型定制、评估和合成数据生成中的关键作用，并介绍了Prime Intellect的“环境中心”和“verifiers”库，以及即将推出的“lab”平台，以推动AI研究的社区化和可访问性。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
people: []
companies_orgs:
  - Prime Intellect
  - OpenAI
products_models:
  - Cursor Composer
  - Codeex
  - Qwen 3 4B
  - GPT-4.1
  - GBD5 mini
  - Intellect 3
  - Primaril
  - Verifiers
  - Lab
media_books: []
status: evergreen
---
### 规模化AI研究的深层含义

今天，我们来谈谈**强化学习**（RL: Reinforcement Learning，一种机器学习方法，通过智能体与环境的交互来学习最优行为）环境及其规模化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today we're talking about RL environments and how to scale them.</p>
</details>

不过，这个标题有点误导。我们会讨论一些工程方面的问题，比如如何通过数千个并行部署和沙盒在数百个**图形处理器**（GPU: Graphics Processing Unit，专门用于图像渲染和并行计算的处理器）上运行这些环境，但我主要会关注一种不同的规模化概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the title is a little bit of a red herring. We'll talk a bit about the engineering pieces and like running these with thousands of parallel rollouts and sandboxes on hundreds of GPUs, but I'm mostly going to focus on a different notion of scale.</p>
</details>

在**人工智能**（AI: Artificial Intelligence，模拟人类智能的技术）和研究领域，我们谈论规模化有多种方式。我们了解**规模化法则**（Scaling Laws: 指出模型性能随计算、数据和参数规模增长而提升的经验法则），并讨论你需要多少数据、计算资源和参数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, and what I mean by scaling here is we there's a number of different ways we talk about scaling in the context of AI and research. We know about scaling laws and we talk about how much data you need, compute and parameters and that if you pour in more data and compute and parameters or inference time.</p>
</details>

所有这些因素——更多的数据、计算资源、参数或推理时间——都能让模型更智能或性能更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All of these things make models smarter or more performant.</p>
</details>

但规模化还有一个更模糊的方面，有时被称为“解绑”（unhobbling）、算法技巧或人才。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But there's also fuzzier side of scaling which is sometimes referred to as unhobbling or algorithmic tricks or talent.</p>
</details>

这从何而来？它不仅仅是投入资源，而是一种更无形、更难以捉摸的东西，但它确实源于一个由人组成的社区、一家公司、一个组织、大学、乃至整个世界和互联网，他们交流思想、分享知识、致力于不同的应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But where does this come from? It's not just pouring in resources, but it's something that is more intangible, harder to put a finger on, but really it comes from a community of people, a company, an organization, universities, the world, the internet, talking about ideas and sharing them and working on different applications, having these applications inspire ideas, using these ideas as test beds for different techniques, and building on top of these to increase the accessibility for other people in the future to not have to reinvent the wheel and to be able to build from uh what has been done by those before them to uh do more effective research and accelerate the pace of innovation.</p>
</details>

这些应用激发了新的想法，这些想法又被用作不同技术的试验台，并在此基础上进行构建，从而提高未来其他人的可及性，使他们不必重复造轮子，能够站在前人的肩膀上，进行更有效的研究，加速创新的步伐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">having these applications inspire ideas, using these ideas as test beds for different techniques, and building on top of these to increase the accessibility for other people in the future to not have to reinvent the wheel and to be able to build from uh what has been done by those before them to uh do more effective research and accelerate the pace of innovation.</p>
</details>

### 解决人才瓶颈：Prime Intellect的使命

那么，为什么会出现人才瓶颈呢？我们都听说过AI实验室在努力寻找更多人才，薪水飞涨，每个人都想聘请最优秀、最聪明的AI研究人员。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so why do we have this talent bottleneck? There's a big issue that we hear all about with AI labs trying to like find more talent and salaries are going through the roof and everyone wants to hire the best and brightest AI researchers.</p>
</details>

除了支付最高的薪水之外，另一种方法是扩大人才库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But one other approach besides trying to just pay the most is increase the pool.</p>
</details>

那么，我们如何扩大AI研究人员的人才库？我们如何让AI研究变得更容易进行？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh and so how do we increase the pool of AI researchers? How do we make doing AI research more accessible?</p>
</details>

我想简单介绍一下我们Prime Intellect。如果你没听说过我们，我们身兼多职：我们是研究实验室，是计算资源提供商，是平台公司，也是一个开源生态系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I want to talk a bit about who we are at Prime Intellect. If you haven't heard of us, we are a bunch of things. We're a research lab. We are a comput provider. We're a platform company. And we are an open source ecosystem.</p>
</details>

我们做了很多事情，它们以一种我将在本次演讲中尝试解释的方式相互契合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We do a lot of things and they all fit together in a way that I'm going to try to explain in this talk.</p>
</details>

但我们认为所有这些都是我们围绕“提高AI研究的可及性”和“让研究成为全球各地组织中人们更容易获得的工具包”来建立业务的不同组成部分，而无需身处大型实验室，也无需在大型集群上花费巨额资金，或者攻读博士学位。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we see these as all different pieces of how we can build a business around doing exactly this, which is increasing the accessibility of AI research and making doing research more of a toolkit available to people at organizations around the world without needing to be inside of a large lab or without needing to spend crazy amounts on massive clusters or go do a PhD.</p>
</details>

我们认为，随着我们在全球范围内构建应用并努力改进我们的系统、模型和产品，AI研究的某些版本确实应该成为AI工程师日常工作流程的一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We think that there's versions of doing AI research that really should be part of the breadandbut workflows of AI engineers around the world as we build applications and try to improve our systems and models and products.</p>
</details>

### 开源AI与研究实践

我认为人们对开源模型是否会奏效有点犹豫不决。在我看来，这种类比不太恰当。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think a thing people are kind of iffy about in terms of AI is whether open source models are going to work. And in my mind, that's not quite the right analogy to draw.</p>
</details>

当我们比较AI和传统软件时，过去有很多成功的开源软件生态系统，比如**Linux**（一个开源的操作系统内核）、**Node.js**（一个开源的JavaScript运行时环境）和**Apache**（一个开源的网页服务器软件）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so when we're comparing like AI to traditional software, there's lots of like great examples of open source software ecosystems that have been thriving in the past, things like Linux and Node and Apache.</p>
</details>

但在我看来，AI领域的类比不是将模型视为这些固定的检查点，而是将研究视为一种实践，将研究视为一套思想。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But in my mind, the analogy in AI is not models as kind of these fixed checkpoints, but it's about research as a practice and research as a set of ideas.</p>
</details>

这是一种更无形的东西，但在发展研究生态系统和软件生态系统的最佳实践目标方面有很多相似之处，你希望复合抽象和最佳实践，拥有更好的工具和迭代效率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's one that's more intangible, but there's a lot of parallels in terms of the goals of the best practices of growing a research ecosystem as well as a software ecosystem where you want to uh compound abstractions and best practices and have better tooling and iteration efficiency and have these gains over time allow uh more advanced powerful complex things to be built by uh decreasing barriers to entry for any given application and allowing this to become more accessible.</p>
</details>

随着时间的推移，这些进步通过降低任何给定应用的进入门槛，并使其更易于访问，从而能够构建更先进、更强大、更复杂的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and have these gains over time allow uh more advanced powerful complex things to be built by uh decreasing barriers to entry for any given application and allowing this to become more accessible.</p>
</details>

### 开放式超级智能堆栈与模型定制

我们Prime Intellect用一个术语来描述我们正在构建的一些东西，我们喜欢“开放式超级智能堆栈”（Open Superintelligence Stack）这个短语。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so one thing that we a term we'll use to describe some of what we're building at Prime Elect is we like this phrase called the open super intelligence stack.</p>
</details>

一方面，它是一个有趣的缩写；另一方面，我认为“堆栈”的概念，即构建研究引擎的所有组成部分，有很多层次。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One because it's a fun acronym but also I think the idea of the stack of of all the pieces of the puzzle to build the engine to go do research.</p>
</details>

你需要计算资源、编排、用于训练和评估的库，以及支持代码执行、评估推理和微调的平台，我们正在做所有这些事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh there's a lot of layers to it. You need compute uh you need orchestration you need libraries for doing uh training and evaluation and you need platforms to support things like code execution and eval inference and fine-tuning and we're doing all these things.</p>
</details>

但其真正目标是为人们提供训练模型的工具。我们希望世界上有更多的人能够做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh but really the goal of this is to give people the tools to be able to go train models. We want people more people in the world.</p>
</details>

我们认为，稍后我会解释原因，最好的产品不会仅仅是从**API**（Application Programming Interface: 应用程序编程接口，允许不同软件组件相互通信的一组定义）中取出东西并简单地包装一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we think I'll explain why in a bit. There's a lot of reasons why uh the best products are going to be the ones that are not just kind of taking the thing out of a box of an API and putting a thin wrapper around it.</p>
</details>

虽然你可以围绕API进行改进，但在许多情况下，人们正在意识到，成功的产品将是那些能够进行研究的产品，无论它是模型的一部分、堆栈的一部分、产品的一部分还是整个产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's ways you can kind of improve around APIs. But I think in many cases people are realizing that winning products are going to be the kinds of things that whether it's a part of the model, a part of the stack, the part of the product or the whole thing, the ability to do research and have at least the option of deciding where in your product you might want to customize a model or improve a model gives you a lot more flexibility to really u make the best user experience.</p>
</details>

至少拥有决定在产品中何处定制或改进模型的选项，能让你拥有更大的灵活性，真正创造最佳的用户体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the ability to do research and have at least the option of deciding where in your product you might want to customize a model or improve a model gives you a lot more flexibility to really u make the best user experience.</p>
</details>

### “产品即模型”与RL环境

过去我们听过“模型即产品”的说法。我认为我们现在开始看到这种情况有所改变，许多成功的应用都将产品视为模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and so we have heard the phrase in the past that the model is the product. And I think we're starting to see now this change a little bit to a lot of winning applications have the product kind of be the model.</p>
</details>

我非常喜欢并经常使用的两个显著例子是**Cursor Composer**（Cursor公司推出的代码生成模型）以及**OpenAI**（一家人工智能研究与部署公司）的**Codeex**（OpenAI推出的代码生成模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think the two notable examples of this that I'm big fans of and heavy users of are Cursor's new composer model as well as uh OpenAI's codeex.</p>
</details>

我认为这两个都是很好的例子，它们直接体现了产品就是模型，模型被训练成该产品的模型，使用模型的体验就是使用产品的体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think these are both good examples of models that really are where the product kind of is the model very directly where the the model was trained to be the model for that product and the experience of using the model is the experience of using the product.</p>
</details>

实现这一点的方式是，通过一个代表产品的**线束**（harness: 在此指用于连接和控制模型与环境的框架），在本质上是一个**RL环境**中训练模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the way that [clears throat] this is done is by taking a harness that represents the product and training the model in the harness in essentially an environment, an RL environment.</p>
</details>

环境本质上就是一个带有任务和奖励集合的线束。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And environments really are just a harness with a collection of tasks and rewards.</p>
</details>

但它们在整个生态系统中也有许多其他相似之处。环境不仅仅用于RL。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But they also have many other parallels throughout the ecosystem. Environments are not just for RL.</p>
</details>

环境本质上与**评估**（evals: Evaluation，评估模型性能和行为的系统）是同一回事。环境也可以是合成数据的引擎，你可以将其用于**监督式微调**（SFT: Supervised Fine-Tuning，使用带标签数据对预训练模型进行微调）或**蒸馏**（distillation: 将大型模型的知识转移到小型模型的技术）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Environments are also essentially the same thing as evals. Environments can also be engines for synthetic data which then you can use for SFT or distillation.</p>
</details>

你可以在其中直接进行RL训练。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can do RL in them directly.</p>
</details>

但我们实际部署和监控的智能体也是环境。这些东西的产品——任务、线束和奖励，无论是离线数据集还是产品中传入的用户任务流——都是一个环境。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But also the agents were actually deploying and monitoring out in the world. These are environments. The product of these things, the tasks, the harness, and the rewards, whether this is a data set offline or the stream of user tasks coming in to a product is an environment.</p>
</details>

因此，我认为这种抽象是一种非常有用的框架方式，可以帮助研究更广泛地被采纳，而不仅仅局限于大型AI实验室。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so this as an abstraction I think is a very useful way of framing what it might look like to start having uh research become more of a a practice that is adopted more broadly beyond just large AI labs.</p>
</details>

我还认为，它们是一个非常容易的切入点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I also think that there's a sense in which they're a really accessible entry point.</p>
</details>

### 环境：AI研究的“网络应用”

我喜欢将环境比作AI研究的“网络应用”。我的意思是，它们非常简单、自包含。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh and so I like the analogy of environments as kind of like the web apps of AI research. And what I mean by this is that they're very simple. They're self-contained.</p>
</details>

它们可以从简单开始，但也可以变得非常复杂，能够代表大型产品的全部复杂性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They can they start simple but they can also get quite complex. They can get very elaborate representing the full complexity of a large product.</p>
</details>

它们本质上也是具有教学意义的，你可以从简单开始，随着复杂性的增加，你会遇到一些障碍，这时你必须开始学习新的概念，更多地了解系统方面的规模化，更多地了解**超参数**（hyperparameters: 在模型训练之前设定的参数，如学习率），以及算法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They're also pedagogical in nature and that you can start simple and as you build complexity, you start bumping into these walls where you have to start learning new concepts, understanding more about scaling the system side, understanding more about the hyperparameters and the algorithms and they kind of open this door where you can by playing around with them start entering into a world of research without needing to kind of build a whole training infrastructure system from scratch.</p>
</details>

它们打开了一扇门，让你可以通过玩转它们来进入研究世界，而无需从头构建整个训练基础设施系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and they kind of open this door where you can by playing around with them start entering into a world of research without needing to kind of build a whole training infrastructure system from scratch.</p>
</details>

它们也需要实验。因此，我认为智能体线束和智能体环境之间的关键区别在于，环境强制你预定义任务和奖励，以便进行这种实验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and they also require experimentation. And so I think the key different uh differentiation between just an agent harness and an agent environment is that the environment forces you to also have your tasks and your rewards predefined to be able to do this experimentation.</p>
</details>

这是一个适当的评估。这意味着你不能仅仅“凭感觉检查”（vibe check）它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a proper eval. And what this means is that you can't just vibe check it.</p>
</details>

你不能只是构建它，测试一下，然后说：“嘿，不错，我们发布它吧。”它强制你思考：“好吧，让我们更科学地思考一下。让我们做一些实验。让我们尝试不同的模型，尝试不同的超参数。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can't just like build it and test it out a bit and say, "Hey, it's good. We're going to ship it." It forces you to say, "Okay, let's think about this a little more scientifically. Let's do some experiments. lets try out different models, try different hyperparameters.</p>
</details>

它还会让你能够开始进行更高级的RL训练、蒸馏或微调研究。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, and it also gets you to the point where you can start doing more advanced research in terms of RL training or distillation or fine-tuning.</p>
</details>

为了真正促进这一点，我们希望将环境作为一个切入点，使其更易于访问。几个月前，我们推出了所谓的**环境中心**（Environments Hub），这是一个用于创建、发现和共享RL环境和评估的开源社区平台。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh, so to really facilitate this, we wanted to make the environment as an entry point much more accessible. A few months back, we launched what we called the environments hub, which is a open source community platform for creating, discovering, and sharing RL environments and evals.</p>
</details>

到目前为止，我们很高兴看到大家在这里构建。我们有数百名开发者和环境，他们创建了自己的想法或重新实现了论文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so far, we've had a lot of fun kind of seeing everyone build here. We've had hundreds of builders and environments come create either their own ideas or re-implement papers.</p>
</details>

这里有很多例子可以展示，但实际上，它就是一群想要进行研究并发现这是一个深入探索的切入点的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh there's a bunch of examples here I can show you, but really it's just a bunch of people who have wanted to do research and found this as an entry point to start digging a little deeper.</p>
</details>

无论是调查某个基准并弄清楚如何重新实现或修改它以适应RL上下文（例如新的数据或新的示例），还是他们一直在思考的某个游戏或其他任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whether this was investigating some benchmark and figuring out how to reimplement it or modify it to be appropriate for an RL context in terms of like new data or new examples or whether [snorts] this is some game that they'd been thinking about or some other task.</p>
</details>

但将此作为封装模型所需完成任务的抽象，是一种让你开始实验改进方法而无需预先知道答案的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But having this as an abstraction for encapsulating the the thing you want a model to do is a way of allowing yourself to start experimenting with ways of improving it without needing to have the answers.</p>
</details>

我认为人们经常谈论在SFT（监督式微调）机制中微调从未真正流行起来。我认为这很大一部分原因在于获取实际解决方案的数据非常困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think people talk a lot about how fine-tuning never really took off in the SFT regime. And I think a big part of this is that getting data was really hard of the actual like solutions.</p>
</details>

我认为要求某人去创建带有标签的示例，以展示你希望模型做什么，是一件非常困难的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think having labeled examples of what you want the model to do is a very difficult thing to ask someone to go create.</p>
</details>

但是，如果你能仅仅思考模型可能处于的设置，而无需预先知道答案，如果你能衡量答案，那么你就可以开始即时创建数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if you can just think about the the settings it might be in without having the answers up front, if you can measure the answers, now you kind of can start creating data on the fly.</p>
</details>

而这个引擎正是环境旨在解锁的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this engine is really what the environment is about unlocking.</p>
</details>

大约九个月前，我曾在这里。我刚刚发布了一个名为**verifiers**（Prime Intellect开发的用于构建RL环境的工具包）的库，我今天仍在继续开发它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and so actually 9 months ago, I was right here in this room. I had just released a library called verifiers, which I'm still working on today.</p>
</details>

它已经取得了长足的进步，它是一个用于构建这些东西的工具包。在过去的一年里，玩转它并扩展它以支持更多功能和类型的环境，一直非常有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, it's come a long way, but it's a toolkit for building these things. And it's been a lot of fun over this past year just playing with it and extending it to support more features and kinds of environments.</p>
</details>

但verifiers的理念是为人们提供一个工具包，它本质上是一系列可以混合搭配和组合的组件，可以完成从简单的评估、问答或游戏，到工具使用、沙盒使用、智能体框架，或者**命令行界面**（CLI: Command-Line Interface，通过文本命令与计算机交互的界面）编码智能体或数学问题等各种任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the idea with verifiers is to give people a toolkit that is uh essentially a bunch of components that you can mix and match and compose to do things like from simple evals or QA or games to things like tool use or using sandboxes or agent frameworks or uh uh like CLI coding agents or math problems.</p>
</details>

你可能希望模型或智能体完成各种各样的任务。它是一个用于构建环境的工具包，然后可以自动进行强化学习训练。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's all sorts of things you might want models to do or agents to do. And it's a toolkit for building environments that is then uh ready to be automatically trained with reinforcement learning.</p>
</details>

### 可扩展性与分层设计

我们对这种设计的思考过程非常有趣，但也充满挑战，即如何构建一个能够涵盖所有基础的工具包？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the way we thought about this design, it's been a lot of fun and also a big challenge to think like okay, how do you make a toolkit for this stuff that actually covers all the bases?</p>
</details>

我认为我见过人们尝试过很多不同的方法，而且我认为它们都很有意义，具体取决于你想要处理什么样的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think there's a lot of different approaches I've seen people go about and I I think they all make sense depending on what sorts of things you're wanting to work on.</p>
</details>

但我们采取了一种非常通用的方法，我们试图说我们不会立即知道所有答案。会有很多模式，会有很多特殊情况，会有复杂性的层次结构，会有模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we took a very kind of a general approach where we tried to say we are not going to know all the answers right away. There are going to be lots of pattern. There's going to be lots of special cases. There's going to be hierarchies of complexity. There's going to be patterns.</p>
</details>

我们真正想优先考虑的是可扩展性。因此，我们以分层的方式思考这些事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we really wanted to prioritize extensibility. So we think about these things hierarchically where let's say you want to do a a coding agent environment for client bench. uh this which is an instance of the harbor framework which is a example of a CLI agent which is a multi-turn environment which is an environment uh similar for text arrina and Wordle or for search with MCP or for giving a model a Python ripple in a sandbox and so thinking of these things hierarchically allows us to kind of really determine like what are the foundational pieces what is generic across all environments and then how do you build up the stack towards applications</p>
</details>

例如，假设你想为客户端基准测试构建一个编码智能体环境，它是一个harbor框架的实例，这是一个CLI智能体的一个例子，它是一个多轮环境，类似于文本竞技场和Wordle的环境，或者用于MCP的搜索，或者在沙盒中给模型一个Python **REPL**（Read-Eval-Print Loop: 读取-求值-打印循环，一种交互式编程环境）。因此，以分层方式思考这些事情使我们能够真正确定哪些是基础组件，哪些是所有环境通用的，然后如何将堆栈构建到应用程序中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">let's say you want to do a a coding agent environment for client bench. uh this which is an instance of the harbor framework which is a example of a CLI agent which is a multi-turn environment which is an environment uh similar for text arrina and Wordle or for search with MCP or for giving a model a Python ripple in a sandbox and so thinking of these things hierarchically allows us to kind of really determine like what are the foundational pieces what is generic across all environments and then how do you build up the stack towards applications</p>
</details>

### Wiki搜索示例与模型定制

因此，一个我将完整演示的例子是**Wiki搜索**（Wiki Search）。它基本上是一个简单的搜索设置，我们让一个智能体能够调用一些工具来搜索维基百科页面并找到一些答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so for one like example of this that I'll kind of walk through the whole process end to And we we call this one wiki search, but it's basically a simple search setting where we give an agent the ability to uh call some tools to search over Wikipedia pages and find some answers.</p>
</details>

这是环境中心页面。环境中心是一个全栈代码管理包注册表。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so here is the environments hub page. So the environments hub is a kind of full stack uh code management package registry.</p>
</details>

因此，每个环境都是一个Python项目，你可以拥有依赖项和版本，并上传你的评估等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So every environment is a Python project where you can have dependencies and versions and uploading your evals and whatnot.</p>
</details>

但环境非常简单。它们从简单开始，可以变得非常复杂，但这个例子非常简单，我们只是将工具定义为**异步Python函数**（async Python functions: 允许在等待I/O操作时执行其他任务的Python函数）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but the environments are very simple. They start simple. They can get really complicated, but this one's pretty simple where we just kind of define our tools as async Python functions.</p>
</details>

我们有数据集，还有一个我们称之为**评分标准**（rubric: 在此指用于管理奖励不同部分的抽象）的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have our data set and we have what we call a rubric.</p>
</details>

评分标准是用于管理奖励不同部分的抽象，你可以组合不同的东西。你也可以拥有仅仅是零奖励但用于观察正在发生什么的指标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so a rubric is the abstraction for managing the different pieces of your rewards where you can kind of compose different things. You can also have metrics that are just a zero award but are for in uh observability of what's going on.</p>
</details>

然后，训练的另一个部分将是配置。这里的配置是针对我们的**Prime RL训练器**（Prime RL trainer），它是我们大规模训练堆栈，是我们从研究文献中总结出的所有大规模异步RL训练最佳实践的结晶。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the other piece of doing training will be a config. And so the config here is for our prime RL trainer, which is our kind of large scale training stack, which has been our uh culmination of all the best practices from the research literature for large scale asynchronous RL training.</p>
</details>

但配置文件旨在以一种让人们开始更多地思考算法的方式暴露他们需要思考的部分，但同时也设计得相当高层、相当自包含，并带有我们认为对很多人来说都是合理的默认值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but the config files are intended to expose kind of the pieces that people need to think about in ways that are starting to get you more into the algorithm, but are also still designed to be pretty high level, pretty self-contained, and with with defaults that we think are going to be sensible for a lot of people.</p>
</details>

因此，运行它只是运行一个命令行，你指定环境，如果它在环境中心，它将自动安装并开始你的训练运行，然后如果你幸运的话，你可以看到你的奖励曲线直线上升。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so running this is just kind of running a command line with uh you specify the environment and if it's in the environment hub it'll automatically install it and start your training run and then you can if you're lucky see your reward curve just shoot right up.</p>
</details>

有时它不会这么顺利，但这个过程就是迭代你的环境、奖励和数据以及任务，以理解是什么让这个任务在实践中真正变得具体可行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and sometimes it doesn't go this nicely but the process of doing this is iterating on your environment on your rewards and your data and your tasks to understand what makes this task holistically actually tangible in practice.</p>
</details>

你如何调整参数？你如何查看数据？你如何定义奖励？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do you tune the parameters? How do you look at your data? How do you define your rewards?</p>
</details>

如果你做得对，你可以获得非常好的改进，特别是对于非常小的模型，但也适用于更大的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, and if you do this right, you can get really good improvements, especially from really small models, but also for much larger models.</p>
</details>

因此，在这个Wiki搜索的例子中，我们从一个**Qwen 3 4B**（一个40亿参数的模型）模型开始，其准确率约为55%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so in this example for the the wiki search one, we started with a a Quen 3 4B model, which was about 55%.</p>
</details>

经过训练后，它达到了89%，与**GPT-4.1**（一个大型语言模型）以及**GBD5 mini**（一个推理模型）等更大的模型不相上下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And after training, it was at 89% on par with uh much larger models like GPT4.1 as well as reasoning models like uh GBD5 mini.</p>
</details>

因此，我认为这种将小模型变得更好的实践，对于许多应用来说是一个巨大的胜利，因为你可能需要一个非常快的模型、一个非常便宜的模型，或者一个非常强大的模型，因为市面上最好的模型还不够好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I think this practice of taking small models and being able to make them much better is a big win for a lot of applications where you either you want a really fast model, you want a really cheap model, you want a really really powerful model because the best models out there just aren't quite good enough.</p>
</details>

这些都是你可以通过模型定制完成的不同事情。这种创建环境的实践不仅用于定制，还为你提供了这个选项。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These are all the different things you can do with model customization. And this practice of doing of creating environments isn't only for customization, but it gives you this option.</p>
</details>

因此，如果你无论如何都需要进行评估，那么将它们视为环境是很有用的，因为环境为提示调整、模型选择，或者仅仅是更好地了解你的系统如何在许多用户并行的情况下大规模运行，打开了许多大门。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so if you need to do eval anyways, it's useful to think of them as environments because the environment opens a lot of doors for whether this is prompt tuning or whether it's model selection or whether it's just getting a better sense of how your system could work at scale with many many users in parallel.</p>
</details>

这是一个设计过程，它真正迫使你确定你关心的是什么？我的智能体是什么？我的产品是什么？我的线束是什么？我正在优化什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a design process that really forces you to kind of pin down what is the thing I care about? What is my agent? What is my product? What is my harness? What am I optimizing for?</p>
</details>

### Intellect 3、Primaril堆栈与社区建设

为了充分进行压力测试，我们一直在使用我们的完整**Primaril**（Prime Intellect的大规模RL训练堆栈）堆栈训练一个大型模型，名为**Intellect 3**（Prime Intellect即将发布的大型模型），它很快就会问世。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and so to kind of fully stress test this, we've been training a large model which will be out into the world quite soon called Intellect 3 with our full primal L stack.</p>
</details>

这让我们真正验证了在非常大规模下的效率和性能。这是一个在500个GPU上训练的1000亿参数以上的模型，我们已经完成了端到端的SFT和RL后训练，如果人们想做SFT，Primaril堆栈也支持。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this has been us really kind of validating the efficiency and performance at a very large scale. So this is a 100B plus model trained on 500 GPUs where we've kind of done the endtoend uh post train of SFT and RL which the primaril stack also has SFT if people want to do that.</p>
</details>

但它也关乎理解所有最佳实践。我们喜欢阅读论文，我们尝试所有技巧，看看哪些有效，哪些无效，然后将这些提炼成Primaril库，供最终用户使用，而无需自己进行所有这些实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But it's also been about just understanding all the best practices. We love reading papers and we try to kind of try out all the tricks and see which ones work and see which ones don't and then distill this into a library with Primaril that can then be kind of consumed by the end user without needing to do all this uh implementation themselves.</p>
</details>

因此，对我们来说，开源非常重要。Primaril在GitHub上，你可以找到它。Verifiers也在GitHub上，如果你想查看的话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so for us it being open is very important. So Primaril is on GitHub. You can go find it. Verifiers is on GitHub if you want to check it out.</p>
</details>

对我们来说，这真正是为了为更多人打开大门，让他们开始学习这些东西，并将其融入到他们的工作流程中，以优化他们的模型和产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for us, this is really about opening the door for more people to start learning about these things and for incorporating it into their workflows for optimizing their models and their products.</p>
</details>

我们认为实现这一目标的最佳方式是通过发展社区。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and [clears throat] the only way to do this that we've what we see as the best way to do this is through growing community.</p>
</details>

因此，对我们来说，真正思考如何从使用它的开发者那里获得良好的反馈循环，了解他们想要什么，了解哪些进展顺利，了解哪些令人痛苦，并解决这些问题，一直非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so for us, it's been really important to really think about getting good feedback loops from the people who are building with this and understanding what they want, understanding what's going well, understanding what's painful, and addressing those problems.</p>
</details>

因此，我们开展了许多社区项目，包括赞助各种小型任务，以及与世界各地的研究生合作的研究驻留项目，并收集环境中心中较小的一部分，我们会手动审查它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we've done a number of community programs in terms of sponsoring different kind of small tasks to uh a research residency program with uh grad students around the world uh and collecting like uh a smaller subset of the environment hub ones where we'll actually review them manually.</p>
</details>

因此，这里的这个仓库，Prime Environments仓库，就是我们直接进行这些工作的仓库，我们会主动查看别人的示例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so this repo here, the prime environments repo is the ones where we are doing these directly where we're kind of offering to look over someone's kind of example.</p>
</details>

我们已经收到了数百个这样的示例，未来还会有数百个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we've had hundreds of these come in and there will be hundreds more.</p>
</details>

这是一个很棒的学习过程，因为它迫使我们修复了很多问题。我们了解了粗糙之处，我们了解了需要添加什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh it's been a great learning process because it's forced us to fix a lot of things. We kind of understand the rough edges. We understand what we need to add.</p>
</details>

然后，我们正在将所有这些学习成果提炼成我们即将推出的平台产品，我们称之为**Lab**（Prime Intellect即将推出的平台产品）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we're kind of then distilling [clears throat] all of these learnings into what will be our kind of upcoming uh platform product which we're calling lab.</p>
</details>

Lab的理念是为人们提供一个界面，一个平台，他们可以在其中浏览环境，运行评估，进行推理，进行微调，并以一种历史上从未有过的方式使研究更易于访问。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the idea of lab is to give people an interface, a platform where they can browse environments, they can run their evals, they can do their inference, they can do their fine-tuning and they can have research be more accessible in a way that it hasn't been historically because I think a lot of people find infrastructure very painful.</p>
</details>

因为我认为很多人觉得基础设施非常痛苦。他们觉得处理**PyTorch**（一个开源的机器学习库）版本、**Flash Attention**（一种高效的注意力机制）、**VLM**（Vision-Language Model: 视觉语言模型）以及让所有这些东西协同工作都很痛苦。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They find dealing with torch versions painful, flash attention and VLM and getting all these things to work.</p>
</details>

我们很乐意做这些，但我们理解很多人可能不想做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are happy to do that, but we understand that a lot of people may not want to.</p>
</details>

因此，这个想法是，如果你想阅读代码，你可以去阅读代码，但你不必运行它。我们可以为你运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and so the idea with this is that if you want to go read the code, you can go read the code, but you don't have to run it. We can run it for you.</p>
</details>

因此，这是我们即将推出的版本，旨在让人们真正专注于环境，Lab的切入点将是环境。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and so this has been our version, which will be kind of out into the world in the near future of trying to allow people to really focus on the environment where the entry point to lab will be the environment.</p>
</details>

如果你想进行合成数据和SFT构建，那就构建一个环境。如果你想进行评估，那就将其构建为一个环境。如果你想进行RL，那就构建一个环境。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you want to do synthetic data and SFT build, let's build an environment. If you want to do your evals, you build that as an environment. If you want to do RL, you build an environment.</p>
</details>

我认为构建环境是随着我们真正看到模型发展方向，更多人会想做的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think building an environment is the kind of thing that I imagine a lot more people are going to want to be doing as we start really seeing where models are headed.</p>
</details>

在某些情况下，我们将使用实验室的微调服务，因为人们需要它，所以他们会提供。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In some cases, this will be we're going to use fine-tuning services from the labs because they're going to offer this because people want it.</p>
</details>

在某些情况下，我们将真正关注我们可以在本地以最低延迟运行的最小模型，并且我们只会针对我们的一件事进行优化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In some cases, this will be we really care about the smallest model we can run on prem at the lowest latency and we're really just going to optimize for our one thing.</p>
</details>

或者它可能仅仅是为了研究而进行研究，并增进我们对这些东西如何运作的集体理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">or it could just be research for the sake of research and advancing our kind of collective understanding of how this stuff all works.</p>
</details>

我认为这正是我们的目标：拥有一个充满AI的世界，我们都可以谈论它，理解它，观察它，探究它，调整它，并更好地了解我们正在构建什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think that's really our goal is to have a world where there's going to be a lot of AI and where we can all kind of talk about it and understand it and look at it and poke at it and tweak it and have a better sense of what we're actually building because I think there's a lot of times when it feels like we're just kind of the model is a black box and digging into the research and going under the hood and changing things and breaking things tells you a lot about how these models work.</p>
</details>

因为我认为很多时候，模型感觉就像一个黑盒子，而深入研究，了解其内部机制，改变和破坏事物，能让你对这些模型的工作原理有更深入的了解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because I think there's a lot of times when it feels like we're just kind of the model is a black box and digging into the research and going under the hood and changing things and breaking things tells you a lot about how these models work.</p>
</details>

它能让你更好地了解它们的来源、它们可能走向何方，并为那个未来做好准备。谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It tells you a lot about understanding where they came from, where they could be going, where they might be headed, and preparing for that future. Thanks.</p>
</details>