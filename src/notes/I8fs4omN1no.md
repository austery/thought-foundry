---
area: tech-insights
category: technology
companies_orgs:
- Klein
date: '2025-12-12'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Gemini 3.0
- Gemini 2.5
- GBT 5
- GBT 5.1
- Sonnet 4
- Sonnet 4.5
project:
- ai-impact-analysis
- knowledge-pipeline
series: ''
source: https://www.youtube.com/watch?v=I8fs4omN1no
speaker: AI Engineer
status: evergreen
summary: 本文分享了构建AI编码代理的宝贵经验。演讲者指出，过去依赖巧妙的脚手架（如RAG、搜索树）来弥补模型不足的时代已经过去，因为前沿模型能够直接超越这些抽象层。重点已转向提升模型本身的能力，通过严谨的基准测试和强化学习（RL）环境，而非仅仅依赖代理的“聪明”工程技巧。演讲者介绍了Klein
  Bench，一个旨在创建真实世界编码任务基准的开源项目，以期通过社区贡献加速前沿AI研究。
tags:
- agent
- klein-bench
- model
- reinforcement-learning
- technology
title: 构建高效AI编码代理的宝贵经验：模型能力超越工程技巧
---

### 宝贵经验：模型能力超越工程技巧

能够站在这里，与许多我一直以来汲取灵感的杰出人士同台，这感觉非常棒。今天，我将分享一些我们在构建AI编码代理过程中学到的经验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's inspiring to be on this stage with so many people I admire. My name is Nick, and I'm the Head of AI at Klein. Today, I'll share some lessons we've learned.</p>
</details>

### 苦涩的真相：能力压倒一切

让我们从一个苦涩的真相开始。多年来，我们通过构建巧妙的“脚手架”来弥补模型能力的不足。诸如 RAG（检索增强生成）、索引系统、搜索树和工具调用等巧妙的构想，都是为了应对能力较弱的模型而发明的。然而，前沿模型（Frontier models）如今能够轻易地超越这些抽象层。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's start with a bitter truth. For years, we compensated for weak models by building clever scaffolds around them. Ideas like RAG (Retrieval-Augmented Generation), indexing systems, search trees, and tool-calling scaffolds were invented to cope with less capable models. However, frontier models simply bulldoze these abstractions.</p>
</details>

现在，你不再真正需要你的脚手架了；它反而会阻碍这些模型。关键问题正从“你的代理栈有多么花哨？”转变为“驱动它的模型有多强大？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Your scaffolding is no longer necessary; it often gets in the way. The key question is shifting from 'How fancy is your agent stack?' to 'How strong is the model driving it?'</p>
</details>

这个教训是持续不断的。一个完美的例子就是本周发布的 Gemini 3.0。它在没有任何代理支持的情况下，立即主导了终端基准测试排行榜。这张图表显示，Gemini 3.0 在 Terminus 上得分超越了绝大多数模型-代理组合，而且是开箱即用的。值得注意的是，Terminus 被设计为一个不带偏见、通用、精简的框架，它没有图搜索、RAG 或索引，只有一个终端让模型自行摸索，但它表现出色。Terminus 的全部意义在于它没有巧妙的工具调用或上下文工程功能。因此，关键在于：能力（Capability）胜过脚手架（Scaffolding）。如果你不阻碍模型，它就能表现得很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This lesson is relentless. A perfect example is Gemini 3.0, released this week. It immediately dominated terminal benchmark leaderboards without any agentic harness supporting it. In this chart, you can see Gemini 3.0 on Terminus scoring better than the vast majority of model-agent combinations out-of-the-box. Remarkably, Terminus is designed as an unopinionated, generic, stripped-down harness with no graph search, RAG, or indexing – just a terminal for the model to figure things out. It crushes. Terminus intentionally lacks clever tool-calling or context engineering features. The takeaway is that capability beats scaffolding. If you get out of the model's way, it will perform well.</p>
</details>

所以，我真正想传达的信息，也是本次演讲的核心要点是：如果你正在构建代理，请放轻松。停止那些花哨的工程技巧，停止过度思考。这就是关键。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the key takeaway from this talk is: if you're building agents, relax. Cool it with your clever engineering tricks and stop overthinking it. That's the lesson.</p>
</details>

另外，作为一个题外话，我不知道你们怎么想，但我们在 Twitter 上都能看到，现在讨论那些巧妙的上下文技巧和“黑客”方法感觉有点过时了。老实说，我看到这些东西已经厌倦了。我明白，这能带来免费的互动，我们都或多或少地参与其中。但个人认为，其中信号并不多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As an aside, talking about clever context tricks and hacks on platforms like Twitter feels a bit played out. I'm tired of seeing it. While it generates engagement, I personally don't find much signal in it.</p>
</details>

### 真正的瓶颈：基准测试与强化学习环境

那么，我真正想谈论的是一个并未得到足够关注的领域，它才是真正的瓶颈。即使你构建了世界上最干净的代理，也无法将模型能力提升哪怕1%。模型只有在实验室通过训练“难题”时才会变得更好。推动模型进步的是基准测试（Benchmarks），而不是代理的聪明才智、你的工程技巧或 RAG 流程。是基准测试决定了前沿模型接下来要学习什么。模型在工具使用方面并非神奇地变强，而是因为人们构建了强化学习（Reinforcement Learning, RL）环境，迫使它们练习特定动作，如更好地处理失败、重试等。代理的改进仅发生在模型在正确环境中学习时。我们所见的每一次推理能力的飞跃都来自于基准测试，每一次代理可靠性的提升都来自于 RL 环境。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What I truly want to discuss is the real bottleneck, which receives little attention. Building the cleanest agent doesn't improve model capability by even 1%. Models improve only when labs train on difficult tasks, driven by benchmarks, not agent cleverness or RAG pipelines. Benchmarks determine what frontier models learn next. Models improved at tool use not magically, but because people built RL environments forcing them to practice actions like handling failure and retrying. Agent improvement occurs when models learn in the right environment. Every jump in reasoning and agent reliability has come from a benchmark or an RL environment.</p>
</details>

因此，真正的问题变成了：什么是基准测试？如何将真实世界的代理编码数据转化为 RL 环境？什么是一个好的验证器（Verifier）？如何检测真正的困难？以及如何训练这些模型来解决我们工程师真正关心的问题？这些才是关乎下一个前沿的关键问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Therefore, the crucial questions are: What is a benchmark? How do you turn real-world agent coding data into an RL environment? What makes a good verifier? How do you detect real difficulty? And how do you train models for problems engineers actually care about? These are the questions for the next frontier.</p>
</details>

### 基准测试与 RL 环境的定义与区别

那么，什么是基准测试？简单来说，它是一个环境。在我们的例子中，它就像一个 Docker 容器，让代理在其中自由运行。它包含一个起始状态（即你开始处理真实世界编码任务时的代码快照）和一个起始提示。最后，还有一个验证器，用于检查最终状态是否正确或可接受。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What is a benchmark? Simply put, it's an environment, like a Docker container, where an agent runs. It includes a starting state (a snapshot of code for a real-world task) and a starting prompt. Finally, a verifier at the end checks if the end state is correct or acceptable.</p>
</details>

RL 环境又有什么不同呢？实际上，它们并没有本质区别。你可能会注意到这张图表与上一张幻灯片基本相同。唯一的真正区别在于奖励（Reward）的使用方式。基准测试衡量模型，而 RL 环境则改进模型。分数不仅仅停留在你发布结果的排行榜上；它实际上被用来更新策略模型的权重。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How are RL environments different? They're not fundamentally different. This chart is similar to the previous one. The key distinction lies in how the reward is used. Benchmarks measure models, while RL environments improve them. The score isn't just for leaderboards; it's used to update the policy model's weights.</p>
</details>

### RL 环境工厂：自动化数据转化流程

那么，如何将真实世界的编码数据转化为有用的 RL 环境进行训练呢？在 Klein，我们创建了一个名为“RL 环境工厂”的系统。我们还在寻找更好的名字，但目前这就是我们所拥有的。这个流水线的第一阶段是让子代理（Sub-agents）来评估任务。这些子代理并行工作，以决定给定的任务是否适合转化为 RL 环境用于训练。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do you transform real-world coding data into useful RL environments for training? At Klein, we created an 'RL Environments Factory.' The first phase involves sub-agents qualifying tasks in parallel to determine their suitability for training environments.</p>
</details>

资格审查过程如下：首先是验证源头（Origins），你需要确认存储库是否存在，起始提交（Starting commit）是否可访问，以及是否是开源项目。然后是考察旅程（Journey），查看起始提示以及用户可能与代理进行的后续交互提示。你需要尝试理解用户最初想要完成什么，他们任务的“精神”是什么。最后是结果（Outcome）。我们能否在现实生活中找到解决问题的实际提交或 PR？他们后来是否在时间线上提交了解决方案？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The qualification process starts with validating origins: Does the repository exist? Is the starting commit accessible and open source? It examines the starting prompt and follow-on prompts to understand the user's original intent. Finally, it checks for the outcome: Can we find actual commits or PRs that solved the problem in real life?</p>
</details>

在此过程中，我们积极寻找容易被排除的项。例如，“vibecoded slop”（指写得糟糕或琐碎的代码），我们不需要另一个测试“从零开始构建 Next.js 应用”的基准测试。我们旨在排除过于简单的琐碎任务，以及那些没有可靠起始或结束状态的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We actively look for easy disqualifiers, like 'vibecoded slop' (meaning poorly written or trivial code), or tasks that are too easy, or those lacking reliable start/end states. We don't need more benchmarks for tasks like 'build a Next.js app from scratch'.</p>
</details>

### 构建优秀的验证器：以茶壶为例

最后，什么才是一个好的 RL 环境？我们如何实际构建一个 RL 环境，以及什么构成一个好的测试或验证器？这个流水线的第二阶段是构建实际的 RL 环境。你从“考古学”（Archaeology）开始，在本地重建两个状态。下载代码，尝试自己实现，重建它，构建它，并验证用户提到的 bug 和解决方案确实存在。记录所有障碍和依赖项。使用 Docker 将其容器化，显然要移除 Git，以防止代理进行“奖励黑客”（Reward hack）。最后，定义验证器。这涉及到构建一个好的验证器的一些艺术。我想谈谈这个，因为我通常会用茶壶来做类比。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What makes a good RL environment and verifier? Phase two builds the RL environment. This involves 'archaeology': reconstructing both states locally, pulling down code, implementing it yourself, and verifying the bug and solution exist. Document all obstacles and dependencies. Containerize it with Docker, removing Git to prevent reward hacking. Finally, define the verifier. This is an art. Consider the analogy of a teakettle: the goal is to boil water.</p>
</details>

假设用户的目标是“我想烧开水”。一个很好的验证器是安装在茶壶上的小哨子附件。这个哨子是一个纯粹的结果验证。它是一个纯粹的、结果驱动的验证器：水要么达到了沸点，要么没有。要么在响，要么没响。茶壶不关心你是如何实现的，是用燃气灶、电磁炉还是篝火。它只表明结果。在这个过程中，可能会出现各种奇怪的“坏测试”。你可能会注意到，子代理可能注意到“在地面真实解决方案中，之前的运行中燃烧器设置为高火，所以也许我们应该检查这一点”，但我们都知道水可以在低档位烧开，或者是在左前方的燃烧器上，或者过去了 5 分钟——各种奇怪的坏测试。关键点在于：不要基于地面真实测试来过度规定；要测试任务的精神，测试任务的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A good verifier is the whistle attachment. It's a pure outcome verification – the water either boiled or it didn't, whistling or not. The kettle doesn't care *how* it was heated (gas, induction, campfire), only the result. Beware of 'bad tests' emerging from ground truth details, like checking if the burner was set to high or if it was on the front left burner. The key is: don't overprescribe based on ground truth; test for the *spirit* and *outcome* of the task, not the specific steps.</p>
</details>

最终的结果是为该任务构建了一个容器化的基准测试或环境。代理的工作被记录下来，你可以看到代理完成任务的轨迹，并且可以可靠地对其进行评分和验证。它是完全可移植的，可以在任何设备上运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The outcome is a containerized benchmark/environment for the task. Agent work is recorded, showing its trajectory, allowing reliable scoring and verification. It's fully portable. Our path to automation involves fully automating the conversion of real-world coding data into RL training environments.</p>
</details>

我们一直在进行的自动化之路，就是能否完全自动化将真实世界编码数据转换为用于训练模型的 RL 环境的过程。这项工作最初是手动进行的，第一次构建 RL 环境就花费了我大约 16 个小时。而现在，曾经需要 16 小时的工作，每项任务只需不到 20 分钟。我们正在朝着一个完全自动化的 RL 环境工厂迈进，瓶颈将从工程转移到收集高质量的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This process, initially manual and taking 16 hours per task, now takes under 20 minutes. We're building a fully automated RL environment factory, shifting the bottleneck from engineering to collecting high-quality tasks.</p>
</details>

这里有一个有趣的观点：所有这些的自然终点是什么？如果我们真的构建了 RL 环境，并且这些环境是用来测试代理创建 RL 环境的能力——就像一个元基准测试。那么在上面进行“爬山”（hill climbing）会是什么样子？你可以开始想象，随着模型在根据真实用户数据创建自己的训练 RL 环境方面变得越来越好，你就完成了那个循环。值得深思。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">An interesting endpoint: what if we built RL environments to test how well agents can *create* RL environments – a meta-benchmark? As models become adept at generating their own training environments from user data, this loop completes. Something to ponder.</p>
</details>

### 真相炸弹：Klein Bench 的诞生

好了，接下来是“真相炸弹”（truth nuke），也称为 TRO。一个不为人知的现实是，Klein 并非独自在构建这类系统。每一个主要的代理实验室都在收集这些数据，它们都在幕后以某种形式进行着这项工作，但没有人真正谈论它。我甚至不需要点名，懂的都懂。实际上，你们都明白。这些公司引用内部基准测试来证明它们花费数月维护的遗留系统的合理性。但奇怪的是，你永远无法研究或检查它们，因为它们并未公开。这些数据非常有价值，但却无人分享。它是唯一真正能推动进展的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, for the 'truth nuke,' also known as TRO. It's an unspoken fact: Klein isn't alone in building these systems. Every major agent lab captures this data and does similar work behind the scenes, though they don't discuss it. You know who they are. These companies cite internal benchmarks to justify legacy systems, but you can never study or inspect them because they aren't published openly.</p>
</details>

这就是我论点的核心：代理实验室通过站在真实世界工程师和模型之间，扮演着独特的历史角色。我们可以构建更好的提示，我们可以构建更好的工具，但这些都无法改进底层模型。我们拥有世界上最丰富、最真实的工程工作数据集。没有这些数据，模型就不会进步，而将它们封闭起来正在减缓前沿研究的步伐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This valuable data, the only thing that truly moves the needle, is not shared. Agent labs stand between real-world engineers and models, holding a unique historical role. We can build better prompts and tools, but that doesn't improve underlying models. We possess the world's richest dataset of real engineering work. Models don't improve without this data, and keeping it closed slows down frontier research.</p>
</details>

因此，今天我们宣布 Klein Bench。这是我们最终尝试创建一个不是“角色扮演工程”（cosplay engineering）的基准测试。它不是“写一个生成斐波那契数列的服务器”。这是真实软件开发的捕获，并被打包成标准化的 RL 和评估环境。这是我们一直希望别人能构建的基准测试。没有人这样做，所以我们自己来做，而且任何人都可以参与。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today, we're announcing Klein Bench. This is our attempt to create a benchmark that isn't 'cosplay engineering' – not just tasks like 'write a server that generates Fibonacci sequences.' It's real software development captured and packaged into standardized RL and evaluation environments. We always wished someone else would build this benchmark; since no one did, we are.</p>
</details>

它是如何工作的？整个系统是开源的，没有秘密配方，没有锁定的数据集。你可以公开运行它，并自行检查它的工作原理。任何人都可以使用这些环境进行 SFT（监督微调）、RL、评估等。目标是为整个生态系统提供一个真实的基底，用于衡量和改进模型，而不仅仅是泄露代码谜题。这只有在社区贡献的情况下才能成功。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Anyone can participate. The entire system is open source, with no secret sauce or locked datasets. You can run and inspect it yourself. These environments can be used for SFT, RL, evaluation, etc. The goal is to provide the ecosystem with a real substrate for measuring and improving models, not just code puzzles.</p>
</details>

好消息是，你实际上不需要做任何特别的事情。只需在你的开源项目上启用 Klein Provider 并选择加入 Klein Bench 计划。如果一个前沿模型卡住了，而你介入修复了它，那实际上就是一个理想的基准测试候选任务。就是这样。只需使用 Klein Provider，看看模型在哪里遇到困难，我们就会将其收集并引入这个开源基准测试中。因此，Klein Bench 将永远免费、完全开源且可自由访问。谢谢大家。如果你想贡献……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This succeeds only with community contribution. The good news: simply work on your open-source project with the Klein provider enabled and opt into Klein Bench. If a frontier model gets stuck and you fix it, that's an ideal candidate task for a benchmark. Use the Klein provider, identify where models struggle, and we'll incorporate it into this open-source benchmark. Klein Bench will always remain free, fully open source, and accessible. Thank you. If you want to contribute...</p>
</details>