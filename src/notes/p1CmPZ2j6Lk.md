---
author: AI Engineer
date: '2025-12-09'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=p1CmPZ2j6Lk
speaker: AI Engineer
tags:
  - agent-reinforcement-fine-tuning
  - llm-agents
  - tool-use
  - model-optimization
  - domain-shift
title: OpenAI Agent RFT：通过强化微调提升智能体性能的策略与实践
summary: OpenAI的Will Hang和Cathy Zhou介绍了Agent RFT（智能体强化微调），这是一种通过改变模型权重来显著提升智能体性能的方法。文章详细阐述了智能体的定义、与外部世界交互的能力，以及如何通过提示工程、任务优化和最终的Agent RFT来逐步优化其表现。通过Cognition、Codto、Cosign和Macco等客户案例，展示了Agent RFT在代码编辑、代码审查和GPU内核编写等复杂任务中的实际应用，并强调了数据质量、并行工具调用、行为稳定性和奖励函数设计等成功关键原则。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
people:
  - Will Hang
  - Cathy Zhou
companies_orgs:
  - OpenAI
  - Cognition
  - Codto
  - Cosign
  - Macco
products_models:
  - Codeex
  - Devin
  - GPT-5
  - Nvidia B200
media_books: []
status: evergreen
---
### 智能体强化微调 (Agent RFT) 简介

大家好，我是Will。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hey everyone, I'm Will</p>
</details>

我是Kathy，我们都来自OpenAI的微调团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I'm Kathy and we're on the fine tuning team at OpenAI</p>
</details>

我们非常高兴今天能和大家谈论**Agent RFT**（Agent Reinforcement Fine-Tuning: 智能体强化微调），这是提升智能体性能最强大的方式。今天您可能正在为您的业务构建一个**智能体**（Agent: 能够与外部世界交互并自主完成任务的模型），并希望提高其性能。那么，让我们首先来谈谈智能体到底是什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we're super excited to talk to you today about agent RF, the most powerful way to enhance the performance of your agents. So, you're probably joining us today because you're building an agent for your business and you'd like to improve its performance. So, let's first start by talking about what an agent actually is.</p>
</details>

智能体与普通模型的区别在于它能够与外部世界交互以完成任务，自主地完成工作，而无需您一直干预。因此，这个智能体需要能够访问工具。例如，如果您正在构建一个编程智能体，它必须能够访问终端、代码解释器，甚至整个代码库。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">What makes an agent different from a regular model is its ability to interact with the outside world to complete a task to get things done on its own without having to go through you all the time. So, this agent needs to have access to tools. For example, if you're building a coding agent, it's got to have access to a terminal, a code interpreter, or maybe even an entire codebase.</p>
</details>

但这些智能体并非盲目地调用工具，它们同时也在进行推理。我们认为这些智能体与外部世界的交互（例如工具调用）与它们的推理轨迹在同一个上下文窗口中交织在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But these agents aren't just blindly calling tools. They're reasoning at the same time. The way that we think about these agents is that their interactions with the outside world, such as tool calls, are interled with their reasoning traces in the same context window.</p>
</details>

我们内部使用这种范式构建的一个智能体是Codeex。Codeex是我们的旗舰编程智能体，它能够访问各种工具来端到端地完成编程任务，比如编写单元测试或向代码库提交大型（希望是正确的）差异。有些工具以终端命令的形式暴露，其他工具则是模型可以调用以启动规划工作流的自定义函数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, an example of an agent that we've built in-house using this paradigm is Codeex. Codeex is our flagship coding agent. has access to a wide range of tools to complete coding tasks end to end like writing unit tests or submitting large diffs to your codebase that are hopefully correct. Um some tools are exposed as terminal commands and other tools are custom functions a model can call to invoke say a planning workflow.</p>
</details>

### 提升智能体性能的策略

那么，我们如何让智能体变得更好呢？我们可能都非常熟悉一些提升智能体性能的“一线”技术。例如，首先是**提示工程**（Prompt Engineering: 通过设计输入提示来引导模型行为）或提示优化。通过提示，您可以引导模型或智能体的行为，使其更符合您的偏好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now how do we make our agents better? We're all probably pretty familiar with the frontline techniques to improve the performance of agents. For example, for starters, prompt engineering or prompt optimization. Prompting you can steer model or agent behavior to align more with your preferences.</p>
</details>

但是，假设您仍然想从任务中榨取更多价值。那么，您可以转向**任务优化**（Task Optimization: 简化任务、添加防护措施或调整工具行为）。您可以简化任务，为任务添加更好的防护措施，增减工具，或者改变工具行为以更好地适应智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But let's say you still want to squeeze more juice out of your task. Well, you can then turn to task optimization. You can simplify the task. You can add better guard rails around the task. You can add and subtract tools. Or you can change tool behavior to work better for the agent.</p>
</details>

但是，假设您仍然想从任务中榨取更多价值，您已经尝试了所有这些方法，但仍然希望获得更好的性能。这时，您就需要转向**微调**（Fine-tuning: 通过改变模型权重来训练模型以获得更好性能）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But let's say you still want to squeeze even more juice out of that task. you've tried all these approaches and you still want better performance. So that's where you would turn to fine-tuning.</p>
</details>

微调是一种端到端地训练智能体完成您的任务，通过改变模型的权重来获得更好性能的方法。而Agent RFT，即智能体强化微调，就是实现这一目标的方式，或者说是我们希望大家采用的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Fine-tuning is a way to train the a agent end to end on your task to achieve even better performance by changing the weights of the model. And agent reinforcement fine-tuning or agent RF is the way to do this or it's the way that we would like you all to do this.</p>
</details>

Agent RFT根据您指定的学习信号改变模型的权重，以教会模型什么是好的行为，什么是坏的行为。在训练过程中，智能体将探索多种不同的工具调用方式来解决您的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, agent RFT changes the weights of the model according to a learning signal that you specify to teach the model what good behavior and what bad behavior looks like. And during training, the agent will explore many different ways of calling your tools to solve your task.</p>
</details>

### Agent RFT 的优势与工作原理

我们对RFT产品进行了几项重要的更新。首先，模型现在可以通过您托管在公共互联网上的端点调用您的工具。其次，在每次“推出”（roll out）后，我们还会调用通过端点托管的自定义奖励信号。这两项新增功能标志着我们OpenAI首次允许模型在训练过程中与外部世界进行交互。我认为这非常酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we've introduced several major new additions to the RFT product. Um, first off, the model can now call your tools via your endpoints that are hosted in the public internet. Um, and after each roll out, we'll also invoke your custom reward signal that's hosted via an endpoint. So, these two additions actually mark the first time that we have we at OpenAI have allowed models to interact with the outside world during the training process. So, I think this is pretty cool.</p>
</details>

总结Agent RFT的优点，它有助于提高您的推理模型的性能，更具体地说，是那些需要调用工具并以多步骤方式与外部世界交互以完成任务的推理模型。Agent RFT的样本效率也很高。我们看到人们仅使用大约10个示例就取得了成功，这非常惊人。当我们深入探讨一些客户案例时，我们会介绍具体的例子。它最终会生成一个延迟更低、更适合您任务的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To summarize the benefits of agent RFT, it helps you improve the performance of your reasoning models, but more specifically the reasoning models that have to call tools and interact with the outside world to get things done in a multi-step fashion. Agent RF is also quite sample efficient. We've seen people get success from literally only using like 10 examples, which is pretty amazing. We'll go over specific examples of this when we deep dive into some of our customer spotlights. and it results in a model that has lower latency and just works better for your tasks.</p>
</details>

现在让我们深入了解这一切是如何运作的。让智能体与您的特定业务环境协同工作的挑战之一是，您的环境、您的世界可能与我们内部训练模型的方式不同。机器学习中的这种现象称为**领域漂移**（Domain Shift: 模型训练环境与实际业务环境不匹配）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now let's dive a little bit deeper into how all this works. One of the challenges with making agents work with your specific business context is that your environment, your world might just be different from how we train our models in house. So this phenomenon in ML is called domain shift.</p>
</details>

它可能导致智能体无法很好地调用您的工具，可能会调用工具太多次，或者直接向您的工具输入错误的参数。Agent RFT可以通过这种改变权重的训练过程，使模型重新适应您的领域，从而产生一个真正理解您环境的智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it can result in an agent that doesn't quite call your tools that that well. might call a tool too many times or might just straight up shove wrong inputs into your tools. Agent RFT can readapt the model to your domain through this weight changing training process that results in an agent that actually understands your environment.</p>
</details>

这显然具有一些非常好的特性，例如更好的机器学习性能。它训练模型更好地使用工具，并更好地推理这些工具的输出。所有这些都是模型在探索搜索空间、与环境交互的所有可能方式以及根据您的奖励进行爬坡时自然学习到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this has some really nice properties obviously better ML performance. It trains the model to use tools better and it trains the model to reason over the outputs of those tools better. All this is learned organically by the model while it explores the search space, all the possible ways of interacting with your environment and hill climbing on your reward.</p>
</details>

由此产生的另一个非常好的特性是能够通过确保模型保持在给定的工具调用预算内并且不超出该限制来显著降低延迟。因此，我们实际上可以施加这种惩罚，即惩罚模型超出预算的行为。实际发生的是，模型学会了在保持或超越原始机器学习性能的同时，保持在预算之内。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another really nice property that results from this is the ability to achieve much lower latencies by making sure that the model stays within a given tool called budget and doesn't go over that limit. So we can actually impose this penalty that you know penalizes the model for going over that budget. What actually happens is the model learns to stay within that budget while preserving or exceeding the original ML performance.</p>
</details>

为了更深入地了解系统层面发生的情况，对于每个智能体推出，都会生成一个唯一的标识符来指定该特定的推出，我们会将我们对您的系统进行的所有工具调用与该唯一ID关联起来。我们对每个工具调用都这样做，以便您可以跟踪轨迹的演变。这样，当我们在最后发出最终答案时，您可以将该最终答案与您迄今为止维护的所有上下文关联起来，然后您可以将整个内容作为一个整体评分上下文传递给您的评分器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to dive a little bit deeper into what happens at a systems level for each agent roll out will produce this unique identifier that specifies that that that particular roll out and we will associate all the tool calls that we make into your system with that UYU ID. And so we do this for every tool call so that you can keep track of a trajectory as it evolves. so that when we emit that final answer at the very end, you can then associate that final answer with all the context that you've maintained so far and you can just pass this whole thing as a holistic grading context into your grader.</p>
</details>

现在，我们不建议每个人或任何人立即使用Agent RFT。我们希望大家遵循一个流程。您首先要确保您的训练数据集和评估数据集与您的生产流量紧密匹配。您不希望出现任何漂移。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, we don't recommend everyone or anyone just use agent RFT right off the bat. Uh there's a process that we'd like you all to follow. You first want to make sure that your training data set and your eval data set closely match your production traffic. You do not want any drift whatsoever.</p>
</details>

然后，您需要建立一个基线。您需要针对这些数据集运行您的基础模型，以便您大致了解性能预期，然后您可以从那里进行爬坡。然后，您需要使用我们之前讨论过的一些技术来优化性能，例如提示或任务优化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then you want to ground yourself in a baseline. You want to run your base model against these data sets so that you kind of understand what to expect performance-wise so that you can then hill climb from there. And then you want to optimize performance using some of the techniques that we talked about prior like prompt or task optimization.</p>
</details>

只有当您仍然觉得已经从任务中榨取了所有价值，但仍然想要更多时，您才会转向Agent RFT来推动您的任务前沿。现在，我将把时间交给Kathy，让她谈谈我们的一些合作伙伴是如何真正推动这一前沿的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And only then when you still feel like you squeezed all the juice out of the task, but you still want more more juice, you would turn to agent RFT to push the frontier for your task. So now I'm going to turn it over to Kathy to talk about how some of our partners have really pushed that frontier.</p>
</details>

### 客户案例：Cognition

是的。现在我们已经了解了Agent RFT的工作原理以及何时使用它，我将向您展示一些与编码相关的示例，说明我们的客户如何使用Agent RFT来改进他们的智能体，并强调一些您在优化自己的智能体时可以应用的关键经验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So now that we learned how agent RFT works and how when you should use it, I'll show you some coding related examples of how our customers were able to use agent RFT to make their agents better and also highlight some key takeaways that you can apply when optimizing your own agents.</p>
</details>

几个月前，我们与**Cognition**合作，他们在代码编辑规划阶段使用了Agent RFT。在这个阶段，他们的智能体Devin会检查一个**REPL**（Read-Eval-Print Loop: 交互式编程环境）并运行像`grep`和文件读取这样的shell工具，以决定要编辑哪些具体文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a few months ago we partnered with Cognition who use agent RFT on their code edit planning phase. This is the part where Devin inspects a reple and runs runs shell tools like rep and file reads to decide which exact files to edit.</p>
</details>

为了训练这种行为，他们构建了一个数据集，其中包含用户查询和用户实际修改过的文件，并使用所选文件的**F1分数**（F1 Score: 精确率和召回率的调和平均值，衡量模型准确性）作为奖励。这个F1分数非常棒，因为它平衡了精确率和**召回率**（Recall: 衡量模型识别所有相关实例的能力）。这确保了智能体不会返回太多不准确的文件，也不会遗漏关键文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To train this behavior they build a data set of user queries paired with actual files that's that users has modified and they use the F1 score of the selected files as the reward. This F1 score is really great because it balances between the pre precision and the recall. So this ensures that the agent doesn't return too many inaccurate files or misses the critical ones.</p>
</details>

他们还构建了极其强大的基础设施来支持这种训练。在这种情况下，对于每个单独的轨迹，他们都启动了一个虚拟机来管理代码库，执行工具调用并对最终答案进行评分。这些虚拟机确保环境是隔离的，这样shell工具在不同的推出中就不会相互影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They also build extremely robust infrastructure to support this training. So in this case for each individual trajectory they spun up a VM to manage the codebase to execute the tool calls and grade the final answer. These VMs make sure that the environment is isolated so that the shell tools will not affect each other in different rollouts.</p>
</details>

我们从Cognition的用例中看到了两个重要的经验。首先，数据质量和数量确实很重要。起初，他们在一个大约100个示例的数据集上进行了微调，并获得了5个百分点的改进。但当他们扩展到1000个示例时，改进跃升到10个百分点。因此，您提供的高质量示例的数量可以直接转化为更好的智能体行为。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We saw two important takeaways from Cognition's use case. First, data quality and the volume really matters. So, at first they fine-tuned on a data set of around 100 examples and were able to get a fivepoint improvement. But when they scaled to a thousand examples, the improvement jumped to 10 points. So the number of highquality examples you provide can very directly translate to a better agent behavior.</p>
</details>

其次，我们还了解到RFT非常擅长学习并行调用工具。在这种情况下，模型最初会采取8到10个步骤，在推理中生成令牌和实际调用工具之间交替进行。经过RFT后，智能体在第一步就并行启动了许多工具调用。这使得步骤数减少到4个。在这个用例中，速度提升尤为重要，因为他们希望Devin能够快速开始生成编辑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Second, we also learned that RFT is really good for learning to call tools in parallel. So in this case, the model would initially take 8 to 10 steps alternating between generating tokens in its reasoning to actually calling the tools. After RFT, the agent launches many tool calls in parallel. at the very first step. So this was able to reduce that number down to four. And in this use case, the speed up was especially important because they wanted Devon to start producing edits quickly.</p>
</details>

### 客户案例：Codto

现在，我想强调一个不同的用例。**Codto**正在构建一个代码审查智能体，其中一个关键部分是一个深度研究智能体，用于回答开发人员关于大型代码库的问题。为了改进这个深度研究智能体，他们训练了GPT-5，使其能够通过调用搜索和检索工具来回答编码问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now I want to highlight a different use case. Codto is building a code review agent and a key piece of that is a deep research agent that answers developer questions on large code bases. To improve this deep research agent, they train GPD5 to answer coding questions by calling tools like search and retrieve over the repository.</p>
</details>

他们从八个不同的代码库中收集了大约一千对真实的问答对，并使用智能体能够检索到的相关事实的召回率来奖励模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They assembled around a thousand authentic question answer pairs from eight different uh repositories and rewarded the model using the recall of how many relevant facts the agent were able to retrieve.</p>
</details>

通过RFT，智能体性能提高了6%，并且使用了更少的工具调用和输出令牌。我们发现最有趣的是这张图表，它显示了RFT如何改变了工具调用次数的分布。在使用GPT-5时，智能体偶尔会陷入“糟糕的运行”，单个样本中会有超过15次工具调用。这非常慢，也可能导致一些不一致的行为。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With RFT, the agent improved by 6% and it was using fewer tool calls and output tokens. And what we found most interesting is this graph where it shows how RFT shifted the distribution of the number of tool calls. So with BBD5, the agent will occasionally fall into these bad runs where there were more than 15 tool calls in a single sample. This is very slow and also can lead to some inconsistent behaviors.</p>
</details>

因此，在RFT之后，这些非常长的尾部工具调用消失了，分布集中在两到四次工具调用左右。在这种设置下，RFT不仅提高了准确性，还稳定了智能体的行为，消除了这些P95长尾情况。这对于生产用例非常重要，因为延迟会影响用户体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So after RFT these tool calls that are very longtail um disappeared and the the distribution center to just around two to four tool calls. In this setup RFT didn't just improve uh accuracy. It also stabilized the agents behavior in eliminating these P95 longtail cases. And this is very important for production use cases where your latency will matter.</p>
</details>

### 客户案例：Cosign

接下来，我想分享**Cosign**如何使用Agent RFT为大型复杂企业代码库构建编程智能体。为了实现这一点，他们在一个非常全面的30种工具集上训练了智能体，例如`fry`、关键词搜索、会话终端、浏览器会话等。他们还构建了一个非常严格的评分器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, I want to share how cosign build coding agents for large and complex enterprise code uh enterprise co code bases with agent rft. To make this work, they train the agent on a very comprehensive set of 30 tools such as fry, keyword search, session terminal, browser sessions, etc. And they also built a very strict raider.</p>
</details>

他们观察到，模型最初在提供部分积分和尝试事物时，并没有获得非常好的结果，因为模型会开始优化编码风格和语气。所以，他们首先要确保智能体能够交付可工作的代码，因此他们只有在最终代码通过测试时才给予模型奖励。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So they observed that the model um originally when they were providing the model with partial credits and uh points for just trying out things um it didn't get really good results because the model would start to optimize things on coding style and tone. Um so at first they want to really make sure the agent ships working code and so based on that they give the model the reward only when the final code passes the test.</p>
</details>

因为评分器非常严格，有时会给出稀疏的奖励。在这种情况下，GPT-5实际上非常出色，因为它能给我们一些可行的样本。因此，Cosign还增加了批处理大小并增加了计算量，以便有更多样本可以给我们带来正向奖励。这样，批处理中的每个样本就不会在代码正确时都给出零奖励。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And because the greater is very strict, it can sometimes give sparse rewards. In that case, um, GBD5 is also like is actually very great because it can give us some samples that work. So, um, Cosine also boosted the batch size and they increase the amount of compute so that there is even more samples that can give us positive rewards. So, it's not like every single sample in the batch will give us zero reward once the code is correct.</p>
</details>

他们还有一个自定义的**LLM**（Large Language Model: 大型语言模型），可以根据分数和语气进行判断。它会惩罚冗长、表情符号或任何感觉不专业的行为。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, they also have a custom LLM that would judge by the score and tone. So, it will panalyze verbosity, emojis or anything that feels unprofessional.</p>
</details>

最后，评分器会奖励那些验证自己工作的智能体。这意味着在宣布成功之前，会运行测试、检查终端输出，并检查代码规范。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Finally, the grader will reward the agents that validate their own work. So, this means running tests, inspecting terminal outputs, and also checking linting before calling out a success.</p>
</details>

经过这套精心设计的工具和评分器训练后，Cosign在许多不同的基准测试中都达到了最先进的水平。他们还获得了一个快得多的智能体。就像之前的例子一样，RFT改变了工具调用的分布，智能体不再采取这些极其漫长的轨迹。在这种情况下，有时单个轨迹中有超过100条消息，它收敛到一个更紧凑、更高效的步骤序列。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And after training with this very thoughtful set of tools and graders, cosine was able to reach the state-of-the-art on a lot of different benchmarks over here. And they also got a much much faster agent. So like in earlier examples, RFT shifted this distribution of tool calls and the agent stopped taking these extremely long trajectories. In this case, there were sometimes more than a 100 messages in a single trajectory and it converged to a much tighter and more efficient sequence of steps.</p>
</details>

### 客户案例：Macco

最后，**Macco**是一个非常有趣的用例。他们正在构建编写高性能**GPU内核**（GPU Kernels: 在图形处理器上执行的并行计算程序）的智能体，这对于大型语言模型来说传统上非常困难，因为在正常用例中有很多示例，但在这种情况下，内核的示例并不多，特别是如果您使用的是Nvidia B200等新硬件平台。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Lastly, Macco is a very interesting use case. They're building agents that write high highly performant GPU kernels which is traditionally very hard for LMS because in normal use cases there's a lot more examples but in this case there's not a lot of example for kernels especially if you're using new hardware platforms like Nvidia B200's with Asian RFT macro trained GBD5 to write fast kernels using only about 100 PyTorch prompts and this was a major unlock.</p>
</details>

通过Agent RFT，Macco训练GPT-5使用大约100个PyTorch提示来编写快速内核，这是一个重大的突破。所以我们实际上不需要那么多样本和内核数据集来训练一个能够生成内核的好模型，我们只需要指定一个好的奖励函数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we don't actually need that many samples and kernel data set in order to train a good model that produces kernels and we just have to specify a good reward function.</p>
</details>

在这种情况下，指定一个好的奖励函数也非常困难。在训练早期，他们观察到模型在进行**奖励作弊**（Reward Hacking: 模型发现绕过预期目标以最大化奖励的方法）。他们检查了推出结果，发现了七种模型作弊的情况，包括返回参考代码、不返回内核或返回恒等内核等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this case specifying a good reward function is also very hard. Early in training they observed that the model was reward hacking. So what they did was that they inspected the rollouts and they found seven different cases where the model was hacking and this include things like just uh returning the reference code or returning no kernels or identity kernels.</p>
</details>

他们构建了一个判断LLM来捕获所有这七种情况，并将其奖励设为零。他们还添加了一个带有**抽象语法树**（Abstract Syntax Tree, AST: 源代码的抽象语法结构的树状表示）的静态分析工具，以验证生成的内核确实存在并且正在被启动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and they built a judge LM to catch all of these seven cases and reward them with a zero. They also added a static analysis tool with a abstract syntax tree to verify that the generated kernels actually exist and they're actually being launched.</p>
</details>

在确保没有奖励作弊后，他们还根据正确性和与PyTorch基线相比的实际加速效果进行评分。一旦所有这些保护措施到位，智能体性能显著优于GPT-5。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So after the they made sure that there was no reward hacking, they also scored on correctness and real speed up compared to the partorch baseline. Once all of these protections were in place, the agent got significantly better than GPD5.</p>
</details>

Macco还在这里使用了一种非常巧妙的技术来进一步提高性能。他们运行了三个不同的样本，并从中选择了最好的一个。这使他们能够超越最先进水平72%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh ML also used a really smart technique here to improve the performance even more. They ran three different samples and they took the best one out of the three. This allowed them to beat the state-of-the-art by 72%.</p>
</details>

我将把时间交回给Will。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And yeah, I'll hand it back to Will.</p>
</details>

### Agent RFT 成功的四大关键原则

非常感谢，Kathy。现在，我们希望在座的各位以及所有人都能够像Kathy刚刚提到的合作伙伴一样，通过Agent RFT取得成功。因此，这里有四个关键原则来确保您的成功。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks a lot, Kathy. So, uh, now we want all of you, all of you in this room and beyond to be as successful as the partners that Kathy just mentioned with agent RFD. So, here are four key principles to ensure your success.</p>
</details>

首先，您要确保您的任务定义明确，约束良好。成功应该有一个清晰、明确的定义。您应该消除任务中的所有主观性。品味不应该是正确评估任务的要求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First of all, you want to make sure that your task is well defined, well constrained. There should be a clear, unambiguous definition of success. You should have removed all subjectivity out of your task. Taste should not be a requirement to grade your task properly.</p>
</details>

其次，您不希望模型在生产环境中感到“惊讶”。您要确保您的训练和评估数据集能够反映您的生产流量。所以，不要出现我们谈论过的领域漂移。您不希望自己引入领域漂移。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, you do not want the model to feel surprised in production. You want to make sure that your train and eval data sets mirror your production traffic. So, no none of that domain shift that we talked about. You do not want to introduce that domain shift on your own.</p>
</details>

接下来，这是一个非常重要的部分，您要确保通过探索，模型在给定数据点上实际能够获得更好的性能，如果它采样更多的话，这样它就可以自我学习。这意味着，如果您在给定数据集上获得最大性能，那么随着您从模型中采样更多，性能应该会提高。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, next, and this is a really important part, you want to make sure that through exploration, the model actually achieves better performance on a given data point if it samples more so that it can learn from itself. So what this means is if you take the maximum performance on a given data set, that should improve as you sample more from the model.</p>
</details>

因此，由于这一点，您应该能够看到给定数据点的这些差异。这样模型就可以自我学习，学习给定数据点上好的推出和坏的推出之间的区别。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So because of this, you should be able to see the these variances from a given data point. So the model can learn from itself, learn what the difference between a good and a bad rollout is for a given data point.</p>
</details>

最后，您要确保您的奖励函数无法被作弊。希望您已经堵住了所有特殊情况和边缘情况。但同时，也希望您已经将任务框架化，使得奖励是连续的而不是二元的。连续的奖励实际上允许模型逐渐接近最佳性能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh lastly, you want to make sure that your reward function is not hackable. Hopefully you've plugged up all the corner cases, all the edge cases. Um but also hopefully you've framed your task so that the reward is more continuous than binary. The continuous reward actually allows the model to kind of inch up closer and closer to optimal performance.</p>
</details>

这有点像给学生部分学分，而不是在他们做错或做对时就完全否定或给予奖励。现在，要开始使用Agent RFT，请联系您友好的客户经理，我们非常期待看到大家与我们一起构建什么。非常感谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sort of like giving giving a student partial credit. um rather than you know slapping them all in the face or giving it a cookie uh if it gets stuff wrong or gets stuff right. So now in order to get started with agent RFT, please contact your friendly neighborhood account director and we're really excited to see what you all build with us. Thank you so much.</p>
</details>