---
area: "tech-engineering"
category: technology
companies_orgs:
- Cursor
- Vercel
date: '2025-12-02'
draft: true
guest: ''
insight: ''
layout: post.njk
project: []
series: ''
source: https://www.youtube.com/watch?v=fL1iJHtl51Q
speaker: AI Engineer
status: evergreen
summary: 本文深入探讨了Cursor公司如何开发其首个代理模型Cursor Composer，旨在实现软件工程中的快速与智能。文章介绍了该模型在代码生成效率上的显著优势，以及其在强化学习、并行工具调用和语义搜索方面的创新。同时，也详细阐述了在匹配训练与推理环境、处理复杂任务以及确保一致性方面所面临的基础设施挑战，并分享了Cursor团队在解决这些问题上的经验和未来展望，强调了AI工具在加速研发中的关键作用。
tags:
- agent
- challenge
- reinforcement-learning
- software-engineering-tool
- technology
title: Cursor Composer：构建高效智能的AI编程代理模型
---
### Cursor Composer模型概述

很高兴回到纽约，我非常激动能代表Cursor的所有工程和研究团队，在此谈论我们如何构建**Cursor Composer**（Cursor公司首个代理模型）。我的同事Sasha最近也做过类似演讲，所以我也很高兴能分享自己的看法。Cursor Composer是一个专为真实世界软件工程设计的模型，它力求兼顾速度与智能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's great to be back in New York and I'm very excited to be here and talk on behalf of all of our engineering and research teams at Curser about building Cursor Composer, our first agent model and my colleague Sasha actually gave a version of this talk recently. So I'm excited to give my own uh my own take on it. So cursor composer is a model designed for real world real world software engineering and it tries to be both fast and smart.</p>
</details>

根据我们对内部基准的衡量，它优于目前最好的开源模型，与最新的前沿模型（如Sonnet 45、GPT 5.1 codecs）水平相当，但略低于它们。然而，它真正的亮点在于，在相似智能水平的模型中，它的**token生成**（token generation: 文本或代码生成的基本单位）效率高出约四倍。因此，我们正在努力将速度与智能相结合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So as we've measured it against our own benchmarks. It's better than the best open source models. It's like up against recent Frontier models but kind of slightly below the latest frontier with Sonnet 45 GPT 5.1 codecs. But where it really shines is it's about four times more efficient at token generation than models at a similar level of intelligence. So we're trying to mesh speed as well as intelligence.</p>
</details>

### 构建动机与早期挑战

那么，我们为什么要构建这个模型呢？Cursor显然拥有一个**IDE**（Integrated Development Environment: 集成开发环境），我们为什么还要涉足模型领域，为什么会关心这个呢？我们的研究和产品团队一直在构建一个名为**Tab**的模型，可用于自动补全。也许你们中的一些人在Cursor内部使用过它。我们希望将这种低延迟模型的方法应用于使用代理进行编码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So why did we build this model? I mean obviously cursor has an IDE. Why are we getting into the model space? Why do we care about this? Well, our research and product teams have been building a model called tab which you can use for autocomplete. Maybe some of you use that inside of cursor. and we wanted to take that same approach for a very low latency model and apply it to coding with agents.</p>
</details>

但说实话，我们并不确定它是否会成功。于是，我们开始原型设计这个模型的一些早期版本，并将其发布出去以获取用户反馈。我们惊讶地发现，用户非常喜欢我们为这个模型发布的“猎豹蛞蝓”（cheetah slug，指代早期快速版本）。他们非常喜欢它的速度，但我们得到的反馈是，它还不够智能，无法成为他们日常编码的主力工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But honestly, we weren't really sure if it would work. So, we started prototyping some early versions of what this model could look like, started to put it out and get some feedback from users. And we were pretty surprised that this cheetah slug we released for this model, people actually really liked it. Uh they really like the speed, but the feedback we got was it's not really smart enough yet to be a daily driver for a lot of their coding.</p>
</details>

所以，我们需要它既智能又快速，尤其需要它智能。因此，我们着力构建了一个内部基准，它代表了我们在自己的代码库上的使用情况以及我们实际构建软件的方式。如果我们有一个既快速又智能的模型检查点，并且我们的开发人员每天都会使用它来构建产品和所有软件，那么我们就知道我们取得了一些进展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we needed it to be smart and fast. Definitely needed to be smart. So we really worked on making this internal benchmark that represented our usage on our own repos and how we actually built software. Like if we had a model that was both fast and smart and a checkpoint that our developers would use every single day to build the product and to build all of our software, then we knew that we would be on to something.</p>
</details>

例如，一个重要的改变是能够并行调用工具并非常有效地使用我们的语义搜索工具，这有助于将模型推向一个可供日常使用的水平。稍后我们将更详细地讨论这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for example, one big change here that helped actually push this towards a level where we had a checkpoint where people would use it was being able to call tools in parallel and being able to very effectively use our semantic search tool. And we'll talk about that a little bit more here later.</p>
</details>

### Cursor Composer 2.0演示与编程体验

如果你还没见过，这是Cursor 2.0在我们新视图中的样子，我们将使用Composer One模型。你会注意到它能非常迅速地完成许多任务。它并行调用了许多工具，比如`gp`（可能指代某种文件读取工具），读取大量文件，执行shell命令，进行文件编辑，并编写和管理待办事项列表。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you haven't seen it, uh here's cursor in cursor 2.0 in our new view and we're going to use the composer one model and you'll notice that it is doing a lot of things very quickly. It's calling a bunch of tools in parallel like gp so reading a lot of files. It's making shell commands. Uh it's making file edits. It's writing and managing uh a list of to-dos.</p>
</details>

你可以在这里非常迅速地处理前台任务。在这种情况下，我正在调查一个开源代码库中的问题。我不知道你们怎么样，但这对我来说是一种截然不同的编程体验。与过去启动一个代理然后等待20分钟让它完成（期间你可以切换上下文）不同，现在使用编码代理工作一段时间后，这种方式确实有助于让你保持专注，我认为这是一种不同的编程风格。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can kind of very quickly work through tasks in the foreground here. Uh in this case, I'm investigating an issue in an open source repo. And I don't know about y'all, but this has been a quite different programming experience for me. Uh having working with coding agents for a little bit of time now versus kind of firing off an agent and waiting, let's call it 20 minutes for it to complete where you can kind of context switch away. This really does help keep you in the flow and is a kind of a different style of programming I think.</p>
</details>

所以，我想以一种对大家来说易于理解的方式来谈谈我们是如何做到这一点的。我不是一名机器学习研究员，但我确实非常喜欢这些东西。我们将讨论我们学到的一些经验、基础设施挑战，以及我们未来的发展方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I want to talk about how we did this in a way that's hopefully accessible for you all. I'm not a machine learning researcher but I do really enjoy this stuff. Uh what we learned some of the infrastructure challenges and then a little bit on where we're going uh moving forward.</p>
</details>

### 代理工具调用与强化学习

在Cursor中，用户向我们的后端提交一个查询。代理读取该查询，然后决定进行一系列的工具调用。我们的代理大约有10个工具，但我们将重点关注其中的五个：读取文件、编辑文件、搜索代码库、查看**lints**（lints: 代码风格和潜在错误的检查工具），以及运行终端或shell命令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in cursor a user kind of submits a query to our backend. The agent reads that query and then decides to make a series of tool calls. And our agent has about 10 tools give or take, but we're going to focus on five here. So reading files, editing files, searching your codebase, looking at lints, and then also running terminal or shell commands.</p>
</details>

然后，代理能够自主决定是串行调用这些工具还是并行运行它们。我们在这里使用**强化学习**（Reinforcement Learning, RL: 一种机器学习范式，通过与环境交互学习最优行为）的目标是尽可能地模拟Cursor的生产环境。因此，我们希望在训练数据中，能够模拟实际调用Cursor查询的情景。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the agent then is able to autonomously decide, do we call these serially or do we run these in parallel? And our goal with reinforcement learning here is to try to mirror the cursor production environment as close as we possibly can. So this data that we have in training, we want to kind of pretend like we're actually calling real cursor queries.</p>
</details>

为了实现这一点，我们运行了一系列的**rollouts**（rollouts: 在强化学习中，指代理在环境中执行一系列动作并收集经验的过程）。例如，在这个rollout中，我们调用了一系列工具，如读取文件和编辑文件。当我们运行更多的rollouts时，我们可以从相同的初始起点开始，但可能会调用一组完全不同的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so to do that, we are running a series of rollouts. Um for example, in this roll out, we're calling a series of tools like reading files and editing files. And when we run more rollouts, we can start from that same initial starting point, but we might call a completely different set of tools.</p>
</details>

例如，在这个rollout中，我们还进行了代码库搜索。然后我们对输出进行评分，决定哪个更好，并根据这种变化更新模型的参数。所以从概念上讲，这是一个相当简单的想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in this one, we're also doing codebase search. So we score the output, we decide which one is better and then we update the parameters of our model based on that change. So conceptually a pretty simple idea.</p>
</details>

### 基础设施挑战与解决方案

挑战在于当你将这个简单的想法扩展到非常大的规模时。主要有三个挑战。第一个是尝试匹配训练和推理环境。当模型实际在产品中使用时，我们正在训练一个大型的**混合专家模型**（Mixture of Experts, MoE: 一种神经网络架构，包含多个“专家”网络，由一个门控网络选择性地激活）。它被并行化到数千个GPU上，如果我们不加速它，训练将会耗费很长时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The challenges come from when you take the simple idea and then you try to scale it up to a very large amount. So there's kind of three challenges. The first one is trying to match the training and inference environment. So when the model is actually being used in the product. Um, in this case with composer, we're training a large mixture of experts model and it's being parallelized across thousands of GPUs and if we don't speed that up, it's going to take forever to train the thing. So, we want to make it really fast and match the training and kind of sampling version to be as close as possible.</p>
</details>

所以，我们希望它非常快速，并使训练和采样版本尽可能接近。第二个挑战是，当你开始查看真实世界数据时，rollouts可能会变得非常复杂。模型将使用数十万到数百万个token，进行数百次不同的工具调用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we want to make it really fast and match the training and kind of sampling version to be as close as possible. The second challenge is that the rollouts can get pretty complex when you start to look at real world data here. So, models are going to use hundreds of thousands to millions of tokens. They're going to make hundreds of different tool calls.</p>
</details>

每个rollout所需的时间可能大相径庭。一个可能进行大量的工具调用，另一个可能不多，它们完成的时间也会不同。所以，我们必须弄清楚如何应对这个挑战。最后，还有一个一致性挑战。如果我们想尽可能地模拟Cursor的生产环境，我们需要使用完全相同的工具格式和工具响应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And each of these rollouts could take a, you know, a pretty different amount of time. One might make a lot of tool calls, one might make not as many, and they'll complete a different time. So, we have to figure out how to deal with that challenge. And finally, there's this challenge of consistency. If we want to mimic the production cursor environment as close as possible, we need to use exactly the same tool format and the tool response.</p>
</details>

但在训练中，我们有这种非常突发性的计算量。基本上，我们是在一次性完成所有这些训练，这与生产环境不同。所以，这确实是一个基础设施挑战。我们有这三个机器学习挑战，而所有解决方案巧合地都是基础设施问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But in training, we have this really bursty amount of compute. Basically, we're like doing all of this training all at once, which is different than at production. So, it is really an infrastructure challenge. We have these three machine learning challenges and all of the solutions coincidentally are actually infrastructure problems.</p>
</details>

所以，让我们来谈谈其中的几个问题以及我们如何在基础设施层面解决它们。我们的架构对于一些涉足过这个领域的人来说可能很熟悉，但我仍然认为从高层次上讨论它非常有趣。我们有三个不同的服务器：一个推理服务器，一个带有PyTorch的标准机器学习栈，以及环境服务器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, let's talk through a few of these problems and how we solved it at the infrastructure layer. So, our architecture is probably familiar for some of you who have been involved in this space a little bit, but I still think it's really interesting to talk about at kind of a high level. Uh, we have three different servers. We have an inference server. We have kind of the standard ML stack with PyTorch. We have an inference server. So the rollouts that I just talked about, that's where we use Ray. And then we have environment servers.</p>
</details>

我刚才谈到的rollouts就是我们使用**Ray**（Ray: 一个开源的统一计算框架，用于扩展AI和Python工作负载）的地方。而环境服务器就是我们模拟我之前提到的Cursor环境的地方。所有这些服务器都相互通信。例如，推理服务器可以将这些优势反馈给训练器，根据rollout进行调整，然后更新模型并获取新的参数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the rollouts that I just talked about, that's where we use Ray. And then we have environment servers. And these are the ones where we're kind of simulating that cursor environment that I talked about. And all these servers talk to each other. So for example, the inference server can basically send these advantages back to the trainer, which is like nudging it up or down uh based on the roll out and then updating the model and getting new parameters.</p>
</details>

### 训练加速与负载均衡

这更多是关于机器学习方面的问题，但我们正在尝试训练一个非常大的模型，并尽可能快地完成。我们的团队在研究方面能够做到这一点的一种方法是开发一个**自定义内核**（custom kernels: 针对特定硬件或任务优化的计算函数）库，允许进行非常低精度的训练。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this this one is a bit more on the ML side, but we're we're trying to train a model that's very very large and to do it as fast as possible. And one way that our team was able to do this on the research side was to develop a library of custom kernels that allowed for very low precision training.</p>
</details>

这基本上可以大大加快训练过程，也使其更容易部署到我们的推理服务器。如果你对此类内容感兴趣，我们写了一篇深入探讨所有这些内容的博客文章，其中谈到了我们的自定义内核。如果你有兴趣，简而言之，我们发现在**混合专家层**（mixture of experts layer）上，在**Nvidia Blackwell**（Nvidia Blackwell: 英伟达最新一代GPU架构）芯片上速度提升了大约3.5倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And basically this allows us to just speed up the training process in a big way and also make it much easier to ship to our inference server. So, if you're the type of person who loves this, we wrote a blog post going way in depth on all of this that talks about our custom kernels. Uh, if you're interested, the TLDDR here is we found for the mixture of experts layer was about three and a half times faster uh a speed up on Nvidia Blackwell chips.</p>
</details>

所以，它对我们的训练运行产生了相当大的影响。一旦我们更新了权重，在训练过程中，我们需要将它们发送回推理服务器。推理服务器负责执行我提到的所有rollouts，调用工具并管理我们发送的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it made a pretty significant uh impact on our training runs. So, once we update the weights, we need to send them back over to the inference server uh during this training process. and the inference server is the one that's doing all the rollouts that I talked about calling the tools and kind of managing um what we sent.</p>
</details>

这里的挑战是它们都在不同的时间完成。所以，一个天真的版本会有很多时间被浪费。我们能够做的是在不同的线程和进程之间进行负载均衡，以基本转移工作，避免大量的空闲时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The challenge here uh is that they all complete at different times. So kind of a naive version of this there will be a lot of wasted time. So what we were able to do is do load balancing across the different threads and processes to basically shift the work around and and not have a bunch of idle time.</p>
</details>

所以，如果一个rollout（例如）进行了大量的工具调用，也许它安装了一些包，安装了一些库，我们不会只是坐在那里等待所有其他的完成。推理服务器花费所有这些时间来回调用工具到环境，并获取工具结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if one roll out for example makes a ton of tool calls, maybe it installs some packages, installs some library, we're not just sitting there waiting for all of the other ones to finish. The inference server is spending all this time going back and forth making the tool calls to the environment uh and getting the tool results back.</p>
</details>

### 环境匹配与云代理产品

因此，服务器之间再次进行通信，我们希望这个环境尽可能接近Cursor产品。同时拥有编码代理、IDE以及我们正在进行的模型研究和模型训练的好处是，我们可以共同设计这些东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again, communicating between these servers and we want that environment to be as close as possible to the cursor product. One thing that's nice about having both the coding agent, the IDE, as well as what we're doing with the model research and training our own models is we can kind of co-design these things together.</p>
</details>

所以，当我们为这个模型构建大量的**RL**（Reinforcement Learning: 强化学习）工作时，我们也在构建我们的**云代理产品**（cloud agents product）。这是你如何离线运行Cursor代理的方式。你可以通过手机或网页运行它，或者从Slack启动它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, as we were building out a lot of our RL work for this model, we were also building our cloud agents product. Um, this is how you can run a cursor agent kind of offline. You can run it from your phone or on the web or kick it off from Slack, for example.</p>
</details>

为了做到这一点，我们在云端启动了**虚拟机**（Virtual Machines, VMs: 模拟物理计算机的软件实现）。每个虚拟机加载用户的代码，允许代理进行文件更改、运行工具并在安全的沙盒中编辑代码。巧合的是，这正是RL和我们训练用途的完美基础设施。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And to do this, we spin up virtual machines in the cloud. So each one of these VMs loads up the user's code. It allows the agent to kind of like make file changes, run tools, and edit code in a secure sandbox. And coincidentally, this is the perfect Impra for RL and our use in training.</p>
</details>

所以，我们拥有这个云虚拟机集群，并且拥有一个与生产环境Cursor环境非常匹配的环境，然后我们可以将其用于训练。但这仍然存在一些挑战。我之前谈到训练工作负载是高度波动的，这与你运行云代理产品时的标准推理不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have this like fleet of cloud VMs and we have an environment that very closely matches the production cursor environment and we can then use that for training. This does still have some challenges though. I kind of talked about how the training workload is very spiky and it's different than the kind of standard inference when you're running the cloud agents product.</p>
</details>

所以，我们需要构建基础设施来支持所有这些虚拟机并在它们之间进行编排。我们有许多不同的集群，数十万个虚拟机，你可以在我身后看到我们用Composer构建的一个内部仪表板，用于可视化集群中的所有不同虚拟机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we needed to build infrastructure to support all of these VMs and orchestrating between them. So you know we have many different clusters, hundreds of thousands of VMs here and you can see behind me one of the internal dashboards we built uh with composer actually to visualize uh all of the different VMs in the fleet.</p>
</details>

### 语义搜索与模型能力提升

那么，为什么要花费所有这些时间来使环境尽可能接近Cursor的生产环境呢？我之前提到过几次。我们可以模拟它，但其中一个真正的好处是，我们可以为模型提供我们认为在代理内部非常有价值的特定工具。其中之一是我们训练了自己的**嵌入模型**（embedding model: 将文本、图像等数据转换为数值向量的模型），它允许你进行**语义搜索**（semantic search: 理解查询意图和上下文，并返回相关结果的搜索方式）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So why spend all this time trying to match the environment to be as close as possible to cursor production. I've kind of mentioned that a few times. We could mock it, we could simulate it out. Um, but one of the really nice benefits is we get to give the model uh specific tools that we think are very valuable inside of the agent. So, one of those is that we've trained our own embedding model that allows you to do semantic search.</p>
</details>

所以，当你使用Cursor时，我们会索引你的代码库，然后代理可以进行自然语言查询，以找到它可能想要编辑的文件。我们最近对此进行了一些研究。我们发现语义搜索不仅帮助了Cursor代理内部的几乎所有模型，而且对Composer特别有帮助，这在逻辑上是说得通的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when you use cursor, we go and index your codebase and then it allows the agent to make natural langu natural language queries to find files that it might want to edit. And we did some research on this recently. We found that semantic search not only helped basically every single model inside of the cursor agent harness, but it was particularly helpful with composer, which kind of makes sense when you think about it.</p>
</details>

因为我们在与推理时完全相同的环境中训练了Composer。因此，模型成为了这个工具的超级用户，这非常有效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like we trained composer in the exact same environment that we're using at inference time. And so the model kind of becomes a power user of this tool which is really effective.</p>
</details>

### 发布与未来展望

现在，让我们谈谈发布情况以及我们接下来的计划。在训练过程中，当我们能够持续改进模型并在更多的rollouts后看到越来越多的改进时，我们就知道RL正在发挥作用。所以我们最初的性能与最好的开源模型大致相同，然后随着我们进行训练并投入更多的计算资源，性能持续提升，直到今天我们已经接近前沿，达到了目前最好的编码代理的水平。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's talk about uh how the release has been going and kind of where we're going next. Um as we were doing the training process we kind of knew that RL was working when we were able to continuously improve the model and start to see more and more improvements after more and more rollouts. So we started about kind of the same performance as the best open model and then as we trained and kind of threw more compute at it the performance continued to increase and to a point today where we're close to the frontier in terms of kind of the best coding agents that are available and personally I think this is a great sign just for being able to take and scale RL and apply it to these very hard specialized tasks like in our example coding but it could be applied to other domains as well.</p>
</details>

我个人认为这是一个很好的迹象，表明RL能够被应用于这些非常困难的专业任务并进行扩展，比如我们的编码示例，但它也可以应用于其他领域。RL还允许我们以一种对Cursor产品非常有用的方式改变模型的属性。我们希望模型在生成token时既快速，又能提供有用的最终结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh RL also allowed us to kind of change properties of the model in a way that was very useful for the cursor product. We wanted the model to be both kind of fast at generating tokens but also the end toend experience of getting a result that's helpful.</p>
</details>

例如，通过工具调用，你可以并行读取10个文件，而不是一个接一个地读取。正如你在之前的演示中看到的，这使得Composer感觉快得多。我们认为这只是一个开始，在这个领域我们还有很多可以做的事情来加速模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for example, instead of reading a file one by one, you can read 10 files in parallel with tool calling. And as you saw in the demo earlier, it makes composer feel much faster when you have that. And we think this is kind of just the start. there's a lot more we can do in this area to speed up the model.</p>
</details>

第二个是模型学会了如何更好地作为一个代理行事。所以，一开始，模型会进行过多的编辑。有时这些编辑是不必要的，但随着我们训练的越来越多，模型在学习如何更多地搜索和读取文件方面变得出奇地好。所以，它会在尝试编辑之前去寻找正确的东西。总的来说，它变得更有效率了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, and the second one is the model learned how to behave better as an agent. So, in the beginning, the model was was kind of making too many edits. Sometimes the edits were made unnecessarily, but as we trained more and more, the model actually got surprisingly better at learning to search and read files more. So, it would go and find the right thing before it tried to make edits. Overall, just being, you know, a bit more effective.</p>
</details>

### 编码代理的体验与Cursor的思考

我们上个月在Cursor 2.0中发布了Composer，到目前为止，人们似乎很喜欢它。这里有人试过这个模型吗？好的，这很棒，比我预期的要多。所以听到这个消息很高兴。我认为从我个人使用这个模型和编码代理一段时间的经验来看，我将这个问题描述为“飞机上的Wi-Fi”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we released composer last month in comp uh cursor 2.0 and so far seems like people seem to like it. Has anyone here tried the model by chance? Okay, that's pretty great. That's more than I expected. So, that's great to hear. I think from my perspective using this model and using coding agents for some time. I kind of describe this problem as like airplane Wi-Fi.</p>
</details>

当你使用飞机上的Wi-Fi时，它确实能工作，但有点令人沮丧。你真的很想做你想做的事情，但它就是有点慢，有时你甚至希望根本没有Wi-Fi。我认为对于我们这些很早就采用编码代理的人来说，有时感觉就像飞机上的Wi-Fi，因为如果它需要10或20分钟，你就陷入了这种奇怪的、我认为Swiss称之为“半异步死亡谷”（semi async valley of death）的状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, when you're on airplane Wi-Fi, uh it works, but it's kind of frustrating. you really want to do whatever you're trying to do, but it's just it's a little slow almost to where sometimes you wish that you just didn't have Wi-Fi at all. And I think for some of us who adopted coding agents very early, it kind of feels like airplane Wi-Fi sometimes cuz if it's taking 10 or 20 minutes, you're in this weird I think Swiss called it semi async valley of death.</p>
</details>

你要么想要一个非常快的模型，要么想要一个最强大、最智能的模型，它可以运行很长时间，也许在后台运行30分钟甚至几天。我认为当你卡在中间时，那是非常痛苦的。所以对我来说，Composer以及我认为对其他人来说，它带回了使用代理编码的许多乐趣，感觉更像是你亲手编写代码时那种高度同步、高度参与的状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">where you either want something that's really fast or you want the most powerful most intelligent model that can run for you know a significantly long amount of time maybe in the background maybe you know 30 minutes days and I think when you're stuck in the middle that's that's very very painful. So for me composer and I think other people it's brought a lot of joy back to coding with agents that felt more like when you were writing code by hand where you're very in the loop very synchronous.</p>
</details>

所以我很高兴看到更多人探索这个领域。对我来说，我每天都会使用最新的前沿模型（比如GPT 5.1 codec）来编写很多计划。然后我使用Composer来实际执行这些计划，就像Dex所说的那样，进行上下文工程工作，然后实际构建它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm excited to see more people exploring this space as well. For me daily uh I'm writing a lot of plans with kind of the latest uh model like the the highest frontier. So GPT 5.1 codec is is really great for plans. uh and then I'm using composer to actually take that plan kind of like what Dex talked about like take the context engineering work and then actually go and build the thing with it.</p>
</details>

### 研究与产品团队的经验总结

以下是我们研究和产品团队在构建Composer方面的一些反思。首先是RL在训练非常特定的模型方面可以出奇地有效，只要提供高质量的数据和足够的计算资源。在Cursor，我们不追求构建通用人工智能，不追求**AGI**（Artificial General Intelligence: 人工通用智能，指能像人类一样理解和学习任何智力任务的AI）。我们致力于构建非常优秀的编码模型，而RL在这方面表现出奇地好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh a few reflections from our research and products team on building composer. The first is that RL can work surprisingly well for training very specific models and you know giving it this high quality data and a decent amount of compute. You know at cursor we're not trying to build general intelligence. We're not trying to build AGI. We're trying to build very good coding models and RL RL has worked surprisingly well for that.</p>
</details>

第二个是像Cursor这样的AI工具（不一定是Cursor，但像Cursor这样的工具）在加速研发方面有多大帮助。当然，我们的整个团队都使用Cursor来帮助他们更高效地编写和调试代码，但这种加速和提升在我们的所有工程工作中都会产生复合效应。所以我们能够尝试更多的想法，更快地发布产品，尝试新的研究。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second one is uh how much tools AI tools like cursor it doesn't have to be cursor but like cursor really helps speed up research and development. You know of course our entire team uses cursor to help them write code and debug code more efficiently but that speed up that increase really compounds across all of our engineering efforts. So we're able to try more ideas, ship product faster, try new research. Um, so it's been really really helpful there.</p>
</details>

所以它在这方面非常有帮助。最后一点，对我个人来说也很有趣，是看到机器学习工作和训练过程中有多少实际上也是基础设施问题。它们之间高度相关。回想我在**Vercel**（Vercel: 一个用于前端开发和部署的云平台）工作的时候，我们也看到了非常相似的情况，即在JavaScript或Python领域的框架工作中，许多“神奇时刻”的实现，你也需要稍微考虑一下它们的部署基础设施。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the last one that's, you know, personally pretty interesting for me is that it was interesting to see how much of the ML work and the training process was actually also an infrastructure problem. They were very correlated. And going back to my time at Verscell, we saw a very similar thing where a lot of the magic moments that you can have in working in frameworks in the JavaScript or Python space, you also need to think a little bit about the infrastructure of where they're actually deployed.</p>
</details>

所以这些事情比人们想象的更相关。这些就是我们的一些反思。听起来你们中的一些人已经试过了。如果你对此感兴趣并想参与其中，Cursor目前正在全面招聘。我们刚刚在纽约开设了一个办事处，如果你在纽约，我们很乐意与你讨论构建世界上最好的编码模型。谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these things are are more related than people might think. So those are some of our reflections. Uh sounds like some of you have tried it out. If this is something that you're interested in and working on, we're hiring pretty much across the board at Cursor right now. We just opened up an office in New York if you're here based in New York. and we'd love to talk to you about building the best coding models in the world. Thank you.</p>
</details>