---
area: "tech-engineering"
category: technology
companies_orgs:
- Google
date: '2025-12-13'
draft: true
guest: ''
insight: ''
layout: post.njk
project: []
series: ''
source: https://www.youtube.com/watch?v=v3u8xc0zLec
speaker: AI Engineer
status: evergreen
summary: 本文探讨了从反应式到前瞻性 AI 智能体的转变，以 Google Labs 的 Jewels 项目为例。演讲者 Kath Corbec 阐述了当前异步智能体带来的精神负担，以及人类作为串行处理者的局限性。她提出了前瞻性智能体的愿景，强调了观察、个性化、及时性和无缝工作流集成四大要素。Jewels
  项目通过三个层级（从基础的代码修复到复杂的系统洞察）和一系列新功能（如记忆、批评者代理等），旨在成为开发者值得信赖的协作伙伴，最终目标是减少工具摩擦，释放创造力，共同塑造软件开发的未来。
tags:
- agent
- ai-collaboration
- developer-experience
- society
- software-development
title: Google Labs 的前瞻性智能体：Jewels 项目如何重塑软件开发
---
### 引言：从家务琐事到异步智能体的启示

大家好，我非常激动能来到这里。我爱纽约，也爱在这里与大家见面。我是 Kath Corbec，来自 Google Labs。我所在的团队叫做 ADA，今天我将和大家分享我们在这个名为 Jewels 的项目上的一些工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm so excited to be here. I love New York and I love meeting everybody here. And I am Kath Corbec. I'm from Google Labs and I work on this little team called ADA and I'm going to be talking about some of the stuff that we've been doing on this project called Jewels.</p>
</details>

几个月前，我家里的洗碗机坏了。在维修期间，我丈夫决定由他来洗所有的碗碟。他告诉我他会做这件事，但每天晚上，我发现自己都在提醒他去洗碗。可以想象，这很快就让人厌烦。我意识到，即使我没有亲自动手洗碗，我仍然承担着这种精神负担（Mental Load）。我知道很多人可能对此深有体会。我需要跟踪任务是否完成，进行后续跟进，确保事情能够顺利进行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, a few months ago in my household, our dishwasher broke. And while it was being repaired, my husband decided that he was going to do all the dishes. And so, he told me he was going to do this. But every single night, I found myself reminding him to do the dishes. And you can imagine that got old pretty fast. And I realized that even though I wasn't physically washing the dishes, I was still carrying this mental load. And I know a lot of you can probably relate to this. I was keeping track of whether or not that task was done, following up, making sure that things kept moving.</p>
</details>

我意识到，那一刻，这正是我们今天与异步智能体（Asynchronous Agents）所处的状态。它们可以处理一部分工作，但作为开发者，我们仍然承担着精神负担，并对其进行监控。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I realized in that moment that that's exactly where we are with asynchronous agents today. They can handle some of the work, but we're still the ones as developers carrying that mental load and monitoring them.</p>
</details>

### 当前困境：反应式智能体与人类的串行处理模式

这是真相：人类是串行处理器（Serial Processors），而不是并行处理器（Parallel Processors）。我们可以同时处理多个目标，但我们是按顺序执行，而不是一次性全部完成。当你手动启动一个 Jewels 中的任务时，你通常需要等待，才能继续进行下一步。正是这种暂停，这种注意力上的空隙，让我们真正失去动力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here's the truth. Humans, we are serial processors, not parallel ones. We can juggle multiple goals, but we execute them in sequence, not all at once. When you manually kick off a task in jewels, you're usually waiting to be able to move on. And it's that pause, it's that gap in attention where we really lose momentum.</p>
</details>

这实际上是有科学依据的：人类认为自己是多任务处理者，但实际上我们是在快速地执行许多任务。然而，在这些任务之间切换会付出巨大的代价。它会消耗你高达 40% 的生产力时间。这就像一天的时间因为切换上下文和重新加载而损失了一半。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is actually backed up by science where uh humans actually think we think we're multitaskers but we're actually executing many tasks very rapidly. But switching between these tasks comes with a huge cost. It can cost up to 40% of your productive time. So that's like half a day lost to switching contexts and reloading.</p>
</details>

那么，如果人类是串行处理器，那么智能体（Agents）的解决方案是什么呢？对于异步智能体来说，为了让它们成功，不能期望开发者去“照看”它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if humans are uniters, what's the solution here with agents? So for async agents, in order in order for them to succeed, developers can't be expected to babysit them.</p>
</details>

我们都曾在 Twitter 上看到过那样的帖子：16 个不同的云代码任务在 16 个不同的终端上并行运行，分布在 3 个不同的巨大显示器上。当我第一次看到这个时，我想：“上帝保佑，这绝不是未来的开发者体验（DevX）！”我不想管理工作，我不想管理我的智能体。我想成为一名编码者，我想去构建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've all seen that post on Twitter of 16 different cloud code tasks running in parallel on 16 different terminals on three different huge browsers or huge monitors. And when I first saw this, I thought, God forbid that is the DevX of the future. I want to I don't want to manage work. I don't want to manage my agents. I want to be a coder. I want to build.</p>
</details>

因此，我们需要思考，我们需要系统中的协作者（Collaborators），我们能够信任它们。能够真正理解上下文、预测我们需求并知道何时介入的智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, we need to think we need uh uh collaborators in our system that we can trust. Agents that really understand context, can anticipate our needs, and they know really when to step in.</p>
</details>

我认为，我们终于达到了一个模型水平，它们在执行端到端任务方面越来越好，只要它们清楚地理解我们的目标。而这正是信任真正成为解锁的关键，让你能够信任系统能够知道缺少什么、填补空白，并在你专注于其他事情时真正保持进展。本质上，我们希望 Jewels 能够主动地完成洗碗工作，而无需被要求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then uh I think finally we're reaching that point with models where they're getting better and better at executing end to end as long as they understand what our goals are clearly. And that's where trust really becomes this unlock where you can trust the system to know what's missing to fill in the gaps and to really keep progress moving forward while you manage on something else where where while you focus on what matters most. And essentially we want jewels to do the dishes without being asked.</p>
</details>

### 未来愿景：前瞻性智能体——值得信赖的协作伙伴

如今，大多数 AI 开发者工具本质上是反应式的。你打开你的命令行界面（CLI - Command Line Interface）或集成开发环境（IDE - Integrated Development Environment），然后你让智能体做某事，它会做出回应，或者它会等待你开始输入，然后它会提供一个建议。这种模式有其好处：它非常高效，只在你明确要求时才使用计算资源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So most AI developer tools today are fundamentally reactive. You open up your CLI or your IDE and you ask the agent to do something and it responds or it waits for you to start typing and then it autocompletes a suggestion. And there's a benefit to this model. It's very efficient. It only uses compute when you explicitly ask for it.</p>
</details>

但真正的问题是，我是否想这样管理 AI？如果大家设想一下未来，想象一个计算资源不再是限制因素的世界。与其有一个单一的反应式助手来接收指令，不如你可以拥有几十个小型的前瞻性智能体（Proactive Agents）与你并行工作，悄悄地寻找模式，注意到瓶颈，并在你提出要求之前就承担起那些你不想做的枯燥任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the real question I'm asking myself is is this how I want to manage AI? And if you think about in the future, imagine a world where compute is not a limiting factor anymore. Instead of a single reactive assistant for instructions, you could have dozens of small proactive agents working with you in parallel, quietly looking for patterns, noticing friction, and taking on the boring tasks that you don't want to do before you even ask.</p>
</details>

它可以处理诸如修复你一直回避的身份验证错误、更新配置文件、标记潜在的订单错误、准备迁移等事情，而这一切都可以在后台发生，由你的自然工作流触发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It can do things like fixing authentication bugs that you've been avoiding, uh, updating configs, flagging potential order, uh, errors, preparing, uh, migrations, and all of this can happen in the background, triggered off of things in my natural workflow.</p>
</details>

### 前瞻性系统的四大关键要素

我认为，前瞻性系统（Proactive Systems）的构成主要有四个关键要素：一是观察（Observation）。智能体必须持续地理解正在发生的事情，你的代码变更是什么，你的模式是什么，你的工作流是什么，等等，以获取关于你整个项目的上下文信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I really think there are four essential ingredients that make up proactive systems today. There's observation. The agent has to really continually understand what is happening and of what your code changes are, what your patterns are, what your workflow is, etc. to get context about your entire project.</p>
</details>

二是个性化（Personalization）。这一点很困难。它必须学习你的工作方式、你关心什么、你倾向于忽略什么、你的偏好是什么，以及你绝对不想触碰的代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then there's personalization. And this one's difficult. It has to learn how you work, what you care about, what you tend to ignore, what your preferences are, the code that you absolutely don't want to ever touch.</p>
</details>

三是及时性（Timeliness）。如果它来得太早，会打断你；如果来得太晚，机会就错过了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then it has to be timely as well. If it comes in too soon, it's going to interrupt you. And if it's too late, then the moment is lost.</p>
</details>

四是它必须无缝地融入你的工作流（Seamless Workflow Integration）。它必须插入到你自然工作的空间，比如你的终端、你的代码仓库、你的 IDE 中，而不是强迫你去某个秘密的或你已经忘记的应用程序。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it also has to work seamlessly across your workflow. It has to insert itself into spaces where you naturally work already in your terminal, in your repository, in your IDE, not forcing you to go somewhere else to some application that's secret or that you forgot about.</p>
</details>

将所有这些工具整合在一起，并非易事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">[laughter] So bringing all these tools together, you can imagine, is not trivial.</p>
</details>

你希望能够让你的智能体理解你的工作流，预测你的需求，并在不破坏你工作流的情况下，在恰当的时机介入。那时，它才真正感觉像魔法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So is running this presentation. Um, and uh, you you want to be able to ask your agent to understand your workflow and anticipate your needs and then intervene at exactly the right moment without breaking your workflow. And that's when it really starts to feel like magic.</p>
</details>

### 生活中的前瞻性：智能家居与人体机制的类比

有趣的是，这些前瞻性系统（Proactive Systems）如今无处不在。我最喜欢的例子之一是 Google Nest。你把它安装在家里，配置好之后，它就开始学习你的习惯：你何时出门，何时回家，何时睡觉，何时起床。很快，你就不再需要考虑家里的气候控制了，因为它已经学会了你的习惯。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The interesting thing is these proactive systems, they're all around us today. One of my favorite examples is Google Nest where you put it in your house, you install it, and then you configure it, and then it starts to learn your habits as you leave the house, as you come back, uh, as you go to sleep, as you wake up in the morning. And then pretty soon, you don't have to think about climate control in your house anymore because it's learned what your habits are.</p>
</details>

另一个例子是你的身体。当你跑步或开始锻炼时，你的心率会升高；或者它会预测你即将摔倒，所以在你意识到“我要伸出手”之前，它就已经做出了反应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another one is your own body. your heart rate elevates as you go for a run or start to work out or it anticipates that you're about to fall and so it reacts before you consciously think I'm going to put my hand out.</p>
</details>

所以，从这个角度来看，AI 的前瞻性实际上并没有那么遥不可及，它非常熟悉，也非常人性化。这正是关键所在。我们正在构建的工具，更像一个好的协作者，而不是命令行工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when you look at it like that proactivity is actually not that proactivity for AI is actually not that futuristic. It's very familiar and it is very human and that's exactly the point. What we're building is tools that behave more like a good collaborator and less like command line utilities.</p>
</details>

### Jewels 项目：前瞻性智能体的三个演进阶段

我们已经在 Jewels 这个工具中这样做了，它是 Google Labs 的一个前瞻性、异步、自主的编码智能体。我们正以大约三个前瞻性层级来推进这项工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're already doing this in this tool called jewels which is this uh proactive asynchronous autonomous coding agent from Google labs. And we're doing this in kind of three levels of of uh proactivity.</p>
</details>

**第一级（Level One）**是协作真正开始显现的阶段。这就是 Jewels 目前的工作方式：它可以检测到诸如缺失的测试、未使用的依赖项、不安全的模式等问题，然后在执行你要求的其他任务时，自动修复这些问题。这就像你工作流中的一个专注的副厨师（Attentive Sous Chef），它负责保持厨房清洁、刀具锋利、食材充足，让你能够专注于下一步。这是前瞻性软件的开端。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Level one is where a collaboration really starts to emerge. And this is how Jules works today where it can detect things like missing tests, unused dependencies, unsafe patterns, and then it starts to automatically fix those things as it's doing other other tasks that you've asked it to do. This is sort of like this attentive sue chef in your workflow where it's keeping the kitchen clean, the knives sharp, the kitchen uh stocked so that you can focus on what comes next. And that's the beginning of proactive software.</p>
</details>

**第二级（Level Two）**中，智能体对整个项目有了更强的上下文感知能力。它会观察你的工作方式、你编写的代码。如果你是一名后端工程师，它可能会在 React 方面提供帮助。如果你是一名设计师，它可能会帮助编写数据库模式。然后，它会学习你的框架和你部署风格等。这就是厨房经理（Kitchen Manager）。这是你工作流中保持节奏、预测你下一步需求的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At level two, the agent becomes more contextually aware of the entire project. It observes how you work, the code you write. If you're a back-end engineer, maybe you need help with React. If you're a designer, maybe it wants you to may maybe it'll help uh uh write the database schema. And then it learns what your frameworks are and what your deployment style is, etc. And this is the kitchen manager. This is the person in your workflow keeping the rhythm and anticipating what you need next.</p>
</details>

**第三级（Level Three）**是我们目前正在努力的方向，尤其是在十二月。第三级是事物开始围绕上下文收敛的阶段。智能体不仅理解上下文，还理解后果——这些选择如何影响你的产品用户、性能和最终结果。在这个层级，我们有 Jewels，还有一个名为 Stitch 的设计智能体，以及我们正在构建的另一个名为 Insights 的数据智能体。它们共同构建了你应用程序的集体智能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then comes level three. And this is what we're working on pretty hard right now going into December. And I'll show you a little bit of what we're what we're going to be shipping in December in a minute. But level three is where things start to converge around that context. It's where the agent starts to understand not just context, but also consequence. How these choices are actually affecting the users of your products, the performance, and the outcomes.</p>
</details>

Jewels 可以看到软件中出现的问题，Stitch 理解用户如何与之交互，Insights 则连接了来自分析、遥测和转化率等真实世界信号的行为。然后，它们可以跨越系统如何协同工作的界限，提出改进建议，例如进行性能修复以改善用户体验，以及进行设计更改以防止回归。所有这些都基于实时数据进行组织。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And at that level, we have this thing jewels. We also have an agent called Stitch, which is a design agent. and another one we're building called insights which is a data agent and they're all coming together to build this collective intelligence across your application. Jules can see what's breaking in the software. Stitch understands how users are interacting with it and insights connects behaviors from real world signals like analytics, telemetry and conversion rates. And then together they can propose improvements across boundaries of how the system all works together. doing things like performance fixes to improve UX and then design changes to prevent regressions and then all of that is organized based on live data.</p>
</details>

这里的关键在于，人类始终牢牢地处于循环之中。你在观察智能体在做什么，在需要时进行调整，并在智能体出现误导时进行重定向。因此，第三级实际上不再是关于自主性，而是关于与你项目的对齐（Alignment）。智能体和人类在项目全生命周期中协同工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the trick here is that the human stays firmly in the loop. You're observing what the agents are doing. You're refining when you when they when you need to intervene and then you're redirecting it when it has when it has been misdirected. So level three isn't really about autonomy anymore. It's actually about alignment to your project. A a agents and humans collaborating together across the full life cycle of your project.</p>
</details>

### Jewels 项目的当前功能与未来发展

目前，Jewels 专注于代码感知（Code Awareness）这一环节。它理解环境、框架和项目结构，我们正朝着更强的系统感知（System Awareness）迈进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So right now Jules is focused on this code awareness piece. It understands the environment, the frameworks and the project structures and we're moving towards more of that system awareness.</p>
</details>

Jewels 现在引入的功能包括“记忆”（Memory）。我相信很多人都熟悉这个概念。这是 Jewels 能够书写自己的记忆，你可以编辑和与之互动。它理解并构建这种记忆和上下文，以及你在使用它时对你项目的了解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So things that we're introducing in Jules now, we've added something called memory which I'm sure a lot of you are familiar with. It's the ability for Jules to write its own memories and you can edit them and interact with them.</p>
</details>

我们添加了一个“批评者代理”（Critic Agent），它以对抗的方式与 Jewels 合作，确保代码质量高，并进行完整的代码审查。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It can edit them and it understands that and builds this memory and context and knowledge of of your project as you work with it. We've added a critic agent which works adversarially with Jules to make sure that the code is is high quality but then also does a full code review.</p>
</details>

然后我们添加了“验证”（Verification）。Jewels 将编写一个 Playwright 脚本，截取屏幕截图，然后将其反馈到你的轨迹（trajectory）中供你验证。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we've added verification where Jules will write a playwright script, take a screenshot and then put that back into the trajectory for you to validate.</p>
</details>

我们还在添加一个待办事项机器人（To-do Bot），它会浏览你的代码和代码仓库，找出你标记为“待办事项，未来想处理”的内容，并开始主动处理这些事情，利用相关的上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we're also doing things like adding uh a to-do bot that will look through your code and look through your repository and pick up on anything that where you've said this is a to-do I want to get to in the future and it will start to proactively work on those things with that context.</p>
</details>

我们还在加入最佳实践（Best Practices），Jewels 将理解最佳实践并开始提出建议。以及环境设置（Environment Setup）。我们有一个内部使用的环境代理，用于运行评估，并将其扩展到外部，以更好地理解你的环境如何工作并为你设置它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're also adding in things like best practices where Jules will understand best practices and start to suggest those and also environment setup. We have an environment agent that we use internally for running evals and we're extending that externally to better understand how environment how your environments work and and set those up for you.</p>
</details>

此外，我们还添加了“即时上下文”（Just-in-time Context）。这就像一个 Jewels 的备忘单（cheat sheet），如果它在做某件非常具体的事情时卡住了，它就可以立即查阅这个备忘单，而不是联系你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we also are adding something called a just in time context. It's like a jewels cheat sheet where if it's doing something very specific it can and gets stuck. It can just immediately look at that cheat sheet instead of reaching out to you.</p>
</details>

这一切都在将 Jewels 更加紧密地推向一个前瞻性的团队成员，而不仅仅是一个反应式的助手。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is all moving Jules very close to being that proactive teammate, not just this reactive assistant.</p>
</details>

### Jewels 项目演示：代码索引与智能建议

今天早上，我还在和旧金山团队的成员们交谈，当时我在想，我要做一个现场演示，但现场演示的神灵并没有眷顾我。我们仍然有 CLs（Change Lists，代码变更列表）正在推送到 Staging。所以，我将带大家过一遍。如果你们认识 Jed，我想他明天会发言。我们将亲切地尝试修复 Jed 的代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so this morning I was talking to my team back in San Francisco and I was thinking, okay, I'm going to do a live demo, but the live demo gods did not align with me this morning. We still have CLs that are being pushed to staging right now. So, I'm going to walk you through a little bit of this. And if you know Jed, he's going to, I think, be talking tomorrow.</p>
</details>

这是前瞻性的一种视图，这就是 Jewels。你给它一个提示，当你配置并启用前瞻性时，第一件事 Jewels 会做的是索引你整个代码库。它会索引你的目录，开始寻找它可以做的事情，然后这些信息会显示在屏幕上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're gonna um affectionately try to fix Jed's code here. Um, so this is a view of of proactivity and this is this is Jules where you prompt it and the first thing you that you do when you configure and enable proactivity is Jules will index your entire uh codebase. It'll index your directory and start looking for things that it can do and then it'll that'll show up on the screen.</p>
</details>

这里我们看到的是这个仓库 ADK Python 的一部分，它已经索引了仓库，并找到了一堆待办事项。它找到了一堆可以更新的最佳实践，并向我提供了它找到的内容的信号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So right here we're looking at a little bit more in this um in this repository ADK Python and uh and it's indexed the repository and it's found a bunch of to-dos. It's found a bunch of best practices that it can update and it's giving me some signal about what it's finding.</p>
</details>

你可以看到信号是高置信度、中置信度、低置信度。它实际上告诉我，根据我的代码内容，它认为自己可以实现什么，以及它想做什么。它对绿色高置信度有信心，紫色中置信度，黄色低置信度，在底部。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you can see the signal is high confidence, medium confidence, and low. And so it's actually telling me what it thinks it can achieve based on what's in my code and what it wants to do. And that's so it has high confidence in green, medium and purple, low and yellow way down at the bottom. Um,</p>
</details>

我可以手动点击这些，然后说“我想开始这些”。这样我就不必考虑提示，不必看代码。我可以做的事情是减少认知负荷。我们正在开发一个功能，可以自动启动这些。这将在未来推出。但我也可以删除它们，可以说“嘿，这个不适合我，不好”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">[clears throat] and so I can go through this and I can manually click these and say I want to start these. And so I don't have to think about the prompt. I don't have to look at the code. I don't I I can do kind of less cognitive load here. We're working on something to just start these automatically. And so that's coming in the future. But I can also delete these. I can say, "Hey, this one isn't isn't for me. Isn't good."</p>
</details>

一旦它开始一个任务，我就可以深入了解它，看到更多内容。我可以查看它建议处理的代码。我可以找到代码的位置。它还提供了一些关于它为什么想处理这段代码、它在做什么等的理由。它给了我更多的上下文，帮助我信任它知道该做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so once it gets started on a task, I can kind of drill into it and see a little bit more. I can peek into the code that it is suggesting uh that uh it's suggesting it work on. I can find the location of that code. And it also gives me some rationale about why it wants to work on that code, why what it's doing, etc. And so it's giving me a lot more context and helping me trust that it knows what to do here.</p>
</details>

好了，这就是前瞻性功能，将于十二月推出，希望我们能将其提供给大家。我们对此非常兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So that's proactivity. that's coming in December and hopefully we'll be able to give that to everybody here. We're very excited about it.</p>
</details>

### 个人项目中的挑战：创意自由与工具摩擦的权衡

我想讲一个关于我丈夫和我一起做的一个项目的小故事，来做个总结。我们喜欢捣鼓硬件，住在旧金山一条很慢的街道上，所以万圣节的时候，很多人会经过我们家。于是我们想利用这个机会来装饰我们的房子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I want to tell you a little story about uh something my husband and I were working on just to kind of set set wrap things up. We uh tinker a bunch with hardware and we live on this slow street in the middle of San Francisco in Hashbury District and so on Halloween we get a lot of people walking by our house and so we were trying to take advantage of that with our Halloween decorations and so we built this 6 foot animatronic head that sits in the front of our house.</p>
</details>

我们建造了一个六英尺高的机械头，放在我们家前面。这是一个老式的维多利亚式房子，他用泡沫、环氧树脂和玻璃纤维雕刻而成。我们的孩子亲切地称它为“光头”。它基于 80 年代的 PeeWee Herman（皮威·赫尔曼）的形象，特别是《PeeWee's Big Adventure》中的头。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's this old Victorian house and he sculpted it out of foam, epoxy and fiberglass. And then I our our kids also called this lovingly the bald head. And it's based off of if you ever see saw PeeWee Herman from the 80s. It's based off of the PeeWee Herman Peewee's Big Adventures head.</p>
</details>

在我丈夫制作这个头的时候，我花时间用 Jewels 更新固件、控制步进电机、处理 LED 和传感器。对我来说，最有趣的部分是真正发挥创意，设计 LED 的动画效果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so while my husband was doing this I was spending my time working with Jules on updating the firmware, controlling the stepper motors, working on the um on the LEDs and the sensors. And for me that's the fun part for me is like really getting creative with what the LEDs are doing.</p>
</details>

但结果我花了大部分时间修复 bug、更换库以及做类似的事情。我所做的就是提示 Jewels，等待十分钟，然后重复。我发现这个过程非常、非常乏味。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I wanted to focus on that, the LED animations, but I ended up spending most of my time actually fixing bugs and swapping libraries and doing things like that. So what I would do is I would prompt Jules, I'd wait 10 minutes and then I would repeat. And I found that process very very tedious.</p>
</details>

我想要的其实是 Jewels 去做研究，处理那些“丑陋”的部分：研究如何修复 bug，进行调试。我希望它能做到这些，这样我就可以专注于创意部分，让眼睛动起来，像人们走在街上一样跟随他们，让激光从眼睛里射出来等等。如我所说，那是万圣节，非常吓人。但实际上我无法实现那么多。最终，我没有像我希望的那样，在这个机械头项目上实现太多功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what I wanted was actually Jules to do the research. I wanted it to handle the the ugly parts where it was researching how to fix a bug. Uh doing the debugging itself. And I wanted it to do this so that I could focus on the creative parts. I wanted the eyes to move and like follow people as they walk down the street and like have lasers coming out of its eyes and stuff like I mentioned it was Halloween. It was very scary. Uh and and this but but I couldn't really do as much of that. and I ended up actually not shipping as much as I wanted to with this animatronic bald head.</p>
</details>

这就是我们想要弥合的差距。这就是 Jewels 之间的差距，是工具摩擦（Tool Friction）与创造性自由（Creative Freedom）之间的空间，我们正试图通过这类前瞻性智能体来解锁。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so it's that gap that we actually want to close. It's the space between with jewels, it's the space between that tool friction and creative freedom that we're trying to unlock with these kinds of proactive agents.</p>
</details>

### 重塑软件开发的未来：拥抱变革与共同创造

所以，我真正希望大家能从中领悟到的是——我经常给 Jewels 团队的成员们这样的建议——我们今天构建的产品，实际上不会是我们未来的产品。我认为很多人都知道这一点，但现实是，我希望在座的各位以及所有从事 AI 工作的人，都能迈出那些大步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what I really want you guys to take away from it and I give this advice to the the folks on on the Jules team a lot is that the product we build today actually won't be the project the products that we have in the future and I think a lot of us know that but in reality I want everybody in this room and everyone building working with AI to be able to take those big steps.</p>
</details>

我认为我们今天依赖的模式，Git、你的 IDE，甚至代码本身，我们思考代码本身的方式，可能一年后就不存在了，可能六个月后就不存在了。这对我来说是令人兴奋的部分。我们现在就可以发明未来。我们可以描述和决定软件是如何被制造和构建的，这在某种程度上是这个房间里所有人的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think the patterns that we rely on today, Git uh your your idees, even the code, how we think about the code itself might not exist a year from now, might not exist six months from now. And that's the exciting part for me. It's sort of we get to invent the future right now. We get to describe and decide how software is made and built. Uh kind of all the people in this room.</p>
</details>

所以，我的挑战是，不要害怕质疑你构建软件的旧方式，因为未来真的比我们任何一个人知道的都要来得快。它可能已经在这里了，而酷的是，我们可以一起构建它。谢谢大家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So my my challenge to you is to not be afraid to question the old ways of how you're building software cuz really the future is coming faster than any of us know. It's probably already here and the cool thing is we get to build it together. Thank you.</p>
</details>

[music]

[music]

>> [music]