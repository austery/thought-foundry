---
area: "tech-engineering"
category: technology
companies_orgs:
- YouTube
- Google
- Waymo
date: '2025-11-24'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- BERT
project: []
series: ''
source: https://www.youtube.com/watch?v=qqXdLf3wy1E
speaker: AI Engineer
status: evergreen
summary: 本次演讲深入探讨了自动驾驶与AI智能体开发之间的深刻共通之处。讲者Jesse Hu指出，两者都面临着“1%模型工作与99%工程工作”的挑战，强调了离线堆栈、闭环系统、状态管理、处理分布外问题以及仿真在开发中的关键作用。他强调，智能体如同现实世界的机器人，会犯错并需要强大的恢复机制，因此需要从预测模型转向行动模型，并构建完善的基础设施来支持迭代开发过程。
tags:
- ai-agent
- robotic
- simulation
- system
title: 智能体亦是机器人：自动驾驶对构建智能体的启示
---
### 引言：智能体与机器人学的共通之处

大家好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. So this is my talk called Agents of Robots 2.</p>
</details>

这是我的演讲，名为“智能体亦是机器人2”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've given different variants of this talk in person for different events, but this is the first one that I've done for coding agents.</p>
</details>

我曾在不同的活动中亲自做过这个演讲的不同版本，但这是我第一次为编码智能体而做。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to kick things off, just a little bit about me.</p>
</details>

首先，简单介绍一下我自己。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've been a lifelong **ML engineer** (Machine Learning Engineer: 机器学习工程师)，and I've worked at places like **YouTube** and **Google** where I worked on the **two tower embedding model** (双塔嵌入模型: 一种用于推荐系统或搜索的深度学习模型) as well as some early work on **BERT** (一种预训练语言模型) and **mixture of experts** (MoE: 混合专家模型)。</p>
</details>

我一直是一名**机器学习工程师**（ML engineer），曾在**YouTube**和**Google**等公司工作，参与了**双塔嵌入模型**以及**BERT**和**混合专家模型**（MoE）的早期工作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I worked on ML and robotics at **Waymo** (谷歌旗下的自动驾驶技术公司) where a lot of my focus was on the data side as well as reward modeling and evaluation.</p>
</details>

我还在**Waymo**从事机器学习和机器人技术工作，主要关注数据方面以及奖励建模和评估。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And most recently, I've been working on a company called **Abundant** (一家专注于为基础模型实验室提供数据集的公司), where we work on a lot of the same concepts applied to data sets for Foundation Model Labs and their training for agentic coding models.</p>
</details>

最近，我一直在一家名为**Abundant**的公司工作，我们将许多相同的概念应用于基础模型实验室的数据集，并用于训练智能体编码模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">None of this will cover any inside information about Waymo, but will instead cover some general topics that are carried over from self-driving and robotics into digital agents.</p>
</details>

本次演讲不会涉及任何关于Waymo的内部信息，而是会涵盖一些从自动驾驶和机器人技术中借鉴到数字智能体领域的一般性话题。

### 1%模型工作与99%工程挑战

我将从探讨一些共通之处开始。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'll kick things off in kind of like talking about what some of the parallels are.</p>
</details>

我认为其中一个主要问题是“1%与99%”的困境，你可能认为模型完成了大部分工作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think one of the main things is that you sort of have this 1% versus 99% problem where you think that the model is doing most of the work.</p>
</details>

但当你在实际应用中，模型只完成了1%的工作，而99%的工作则投入到其他方面。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But when you get into real world applications, the model is only doing 1% of the work and 99% of the work goes into other things.</p>
</details>

在机器人技术中，你需要硬件、传感器和**执行器**（actuators: 驱动机器运动的部件），你需要集成和部署，并且有一个完整的**离线堆栈**（offline stack: 用于仿真、训练和数据处理的后端系统），负责仿真、训练以及其他事务。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in robotics you have the hardware and sensors and actuators you have integration deployment and you have this whole offline stack that does simulation training um and other things.</p>
</details>

在智能体领域，情况也类似。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In agents you also have this.</p>
</details>

如果我们看一下这两个堆栈。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if we take a look at the two stacks.</p>
</details>

在机器人技术中，你有硬件、执行器和车队。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so in in robotics you have hardware and you have actuators you have the fleet.</p>
</details>

在智能体中，你也有一个“身体”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in agents you also have um sort of like a body, right?</p>
</details>

机器人技术显然是具身化的，因为它从大脑连接到物理身体。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whereas robotics is you know very obviously embodied because you go from a brain to a physical body.</p>
</details>

在智能体中，你从模型连接到数字机器人的“身体”，这包括工具。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In agents you go from a model to sort of a body of a digital robot that includes tools.</p>
</details>

所以现在我们有**API**（Application Programming Interface: 应用程序编程接口）和**MCPs**（某种协议或接口），以及在终端、浏览器和**虚拟机**（VM: Virtual Machine）方面更高级的具身化。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now we have APIs and MCPs as well as more advanced uh embodiment in terms of the terminal and the browser and the VM.</p>
</details>

你开始看到机器人的手、手臂和腿，甚至更高级的东西，比如整个操作系统和持久化文件系统等。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you're starting to see like the robots hands and arms and legs to even more advanced things like the entire OS and persistent file systems and things like that.</p>
</details>

此外，你还有**离线堆栈**（offline stack），所以任务并非在模型完成后就结束。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um in addition you have the offline stacked so transfer over.</p>
</details>

我们还需要持续地重新训练，监控这些系统，并且需要人工反馈循环以及所有其他工具来支持智能体的开发。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're not just finished when we have the model. We also have to continuously retrain. We have to monitor these things. We also have human feedback loops and all this other stuff that we have to build as far as the tooling to even support development of the agent.</p>
</details>

这是我想分享的第一个经验之一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's like sort of one of the first learnings that I I want to share is that um often times in self-driving people would often talk about the winning team not just having the best model and the best **online stack** (在线堆栈: 运行时直接与系统交互的部分) but having the best offline stack because that enables developers to be much faster and ship more much more reliably.</p>
</details>

在自动驾驶领域，人们常说获胜的团队不仅拥有最好的模型和最好的**在线堆栈**，更拥有最好的**离线堆栈**，因为这能让开发者更快地迭代，并更可靠地发布产品。

### 系统设计：开环与闭环、时间离散化与行动空间

接下来，我想分享机器人技术中**开环**（open loop）和**闭环**（closed loop）的概念。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So moving on, there's this concept I want to share in robotics of open loop and closed loop.</p>
</details>

这非常简单，就是能够采取一个行动，或者移动一个执行器或电机，然后能够获得该行动在现实世界中实际发生情况的反馈，从而形成该行动的**闭环**。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is very simply uh being able to take an action or to uh move an actuator or a motor and then being able to get the feedback of how that actually uh happened in the real world so that you can close the loop on that actual action.</p>
</details>

例如，如果我向左转动方向盘，我希望实际测量我的车转了多少，以便我可以重新校准，确保我转动的量与预期完全一致，因为这些系统并非完美无缺。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, for example, if I turn the wheel left, I want to actually measure uh how much did my car actually turn so that I can recalibrate and make sure that I'm turning exactly the amount I intended to because these things aren't perfect.</p>
</details>

同样地，我们开始看到一些**开环**（open loop）操作实际上需要被**闭环**（closed loop）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the same way, we're starting to see where some openloop things actually need to be closed.</p>
</details>

例如，如果我运行一个**Bash命令**（Bash command: 一种在Unix-like操作系统中执行命令的命令行解释器），并运行一个开放式进程，有时我无法观察到输出，至少无法实时观察。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, for example, if I run a bash command and I run an open-ended process, well, sometimes I can't observe the outputs, at least not in real time.</p>
</details>

我无法测量该Bash命令是否完成，也无法在需要时提前退出。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can't measure whether that bash command completed and I can't exit early if I need to.</p>
</details>

所以，这是一个我们需要将事物变得更**闭环**的例子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that that's an example of where we need to make things more closed loop.</p>
</details>

另一个细微之处在于，我们正在隐式地进行**时间离散化**（discretizing in time: 将连续时间信号转换为离散时间点上的样本）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another thing that's kind of nuanced is the fact that um we are implicitly discretizing in time.</p>
</details>

这是什么意思呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what do I mean by that?</p>
</details>

在机器人技术中，我们需要对输入空间和行动空间做出明确的设计选择。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are explicit design choices that we need to make in robotics about the input space and then the action space.</p>
</details>

特别是在输入空间中，你有不同的**模态**（modalities: 数据类型，如视觉、听觉）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And particularly in the input space, you have different modalities.</p>
</details>

你可以选择使用视觉、**激光雷达**（LiDAR: 光探测和测距）、**雷达**（radar）等不同的输入，然后以不同的方式组合它们来感知世界。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you have the option to use vision, LAR, radar, all these different inputs and then combine them in different ways to get a sense for the world.</p>
</details>

你还可以以不同的方式对世界进行离散化。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You also have the ability to discretize the world in different ways.</p>
</details>

你可以每秒采样一次，或者只在数据被推送给你时才采样。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can sample things every second. You can sample things only when they're pushed to you.</p>
</details>

或者，在这个例子中，你可以以50赫兹的频率采样，即每秒50次。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Or you can sample things in this example on like 50 Hz, so 50 times per second.</p>
</details>

这意味着我将不断更新世界状态，不断重新规划，并非常迅速地对世界做出反应。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that means I'll keep updating the state of the world and I'll keep replanning uh and I'll react to the world very quickly.</p>
</details>

然而，在智能体中，我们是以隐式的方式进行这些操作的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">However, in agents we've kind of done this implicitly.</p>
</details>

在智能体中，我们通常进行对话。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in agents we often have a conversation.</p>
</details>

我们等待轮到我们，执行一个工具，然后等待整个响应。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we wait to take our turn. We execute a tool, wait for the entire response.</p>
</details>

也许我们以某种奇怪的方式这样做，但我们没有像机器人技术中那样自然地持续从世界中采样并实时交互。
<details>
<summary>View/Hide Original English</p>
<p class="english-text">Maybe we do that in sort of weird ways, but we don't do this thing that's natural robotics where we keep sampling from the world and we keep interacting in real time.</p>
</details>

这是一个隐式做出的设计决策，它有利有弊。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is an implicit design decision that is made that has its pros and cons.</p>
</details>

优点是，当我们有回合时，推理起来非常容易。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The pros are it's very easy to reason about when we have turns.</p>
</details>

推理对话非常容易，推理回合的输入和输出也非常容易。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's very easy to reason about a conversation. It's really easy to reason about an input and output of a turn.</p>
</details>

但缺点是，我们无法实时进行操作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but in in uh but the downside of that is that we don't get to do things in real time.</p>
</details>

你不能立即响应一个弹出窗口。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can't immediately respond to a pop-up.</p>
</details>

我们不能立即与一个长时间运行的进程交互。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can't immediately interact with a longunning process.</p>
</details>

所以，这些就是我们所做设计决策的影响。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these are the implications of the design decisions that we make.</p>
</details>

关于这些输入和行动空间，我们实际上已经手工制作了许多工具，以及从工具中进行流式传输、从用户进行流式传输的多种方式，但还有其他选择。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So more on those uh inputs and action spaces. So in inputs we actually have handcrafted a bunch of tools, a bunch of ways that we can stream from tools, we can stream from the user, but there are other options out there.</p>
</details>

我想强调的一个例子是来自Terminal Bench的Terminus智能体。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So one example I want to highlight is the terminus agent from terminal bench.</p>
</details>

它非常出色和独特，因为它实际上使用了**终端流**（T-X stream: 终端输入输出流）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so this is very very awesome and unique in that they're actually using a T-X stream.</p>
</details>

所以，如果你愿意，你可以进行逐字符的输入和输出，你可以做像Ctrl+C这样的操作，或者如果你愿意，可以执行各种窗口命令。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can actually do character by character uh input and output if you want to where you can do things like control C or you can do various window commands if you want to.</p>
</details>

这是一种非常独特且更灵活的与我们的行动空间交互的方式，我们在设计智能体时通常不会想到这一点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and so that that's a very unique and more flexible way of interacting with our action space that we don't traditionally think about when designing agents.</p>
</details>

在机器人技术中，你还可以通过其他方式进行行动空间规划。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Other ways in which you could do action space and robotics.</p>
</details>

我们可以在纯粹的**X-Y坐标**（XY: X-Y coordinate）中进行规划。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We could plan in purely XY.</p>
</details>

你可以向上移动一个方块，然后向右移动两个方块。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you move up one block and then move over by two.</p>
</details>

你可以粗略地这样做，也可以在连续空间中这样做。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can do that in coarse ways. You can do that in continuous space.</p>
</details>

你可以在2D中做，也可以在3D中做。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can do things in 2D. You can do things in 3D.</p>
</details>

你可以在加速度而不是仅仅在位置上进行操作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can do things in acceleration instead of just position.</p>
</details>

你可以在速度上进行操作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can do things in velocities.</p>
</details>

在智能体中，我们也应该考虑这一点，尽管相关性较低。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um in agents we should also think about this although it's less relevant.</p>
</details>

你不必只考虑与MCPs和工具调用的交互。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can you don't have to think about just interacting with uh MCPS and tool calls.</p>
</details>

就像我提到Terminus一样，你可以在字符级别与计算机交互。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like I mentioned with Terminus, you can interact with the computer at a character level.</p>
</details>

你甚至可以做像**Dreamer论文**（Dreamer paper: 一种基于模型的强化学习算法，通过学习世界模型进行规划和控制）中那样的事情，纯粹通过每秒20帧的速度与鼠标点击和键盘交互来与计算机交互。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can even do things like the dreamer paper where you interact with the computer purely by interacting at 20 frames per second with the mouse clicks and keyboard.</p>
</details>

所以问题是，我们正在做出哪些权衡，以及我们做出了哪些隐式或显式的设计决策，这些决策是让我们能够做更多事情，还是限制了我们智能体的能力。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the question is what trade-offs are we making and what implicit or explicit design decisions have we made that either enable us to do more or is limiting what we can do with our agent.</p>
</details>

### 从无状态到有状态的智能体

接下来我想谈谈我们如何从**无状态**（stateless）进程转向**有状态**（stateful）进程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The next thing I want to talk about is how we're going from stateless processes to stateful processes.</p>
</details>

如果你考虑在视频游戏中驾驶，你可以从无到有地生成，不必担心你从哪里来，以及会话结束后会去哪里。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you think about driving in a video game, you can spawn from nothing. And you don't have to worry about where I came from and where I go after I terminate the session.</p>
</details>

你只需要担心在该会话期间你做了什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You just have to worry about what I do during that session.</p>
</details>

但这在现实世界中显然不是真的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But that's obviously not true in the real world.</p>
</details>

在现实世界中，你有一辆真实的汽车。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the real world, you have a real car.</p>
</details>

那辆车有质量，占据空间。
<details>
<summary>View/Hide Original English</p>
<p class="english-text">That car takes up mass. It takes up space.</p>
</details>

所以，你确实需要担心那辆车最终会停在哪里。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, you do have to worry about where that car ends up.</p>
</details>

你必须担心我们是如何进入这个场景的，对吧？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you have to worry about how we got into the scene, right?</p>
</details>

一切都在移动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Everything is moving.</p>
</details>

你移动的速度以及其他人移动的速度都有影响。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are implications to how fast you're moving and how fast everyone else is moving.</p>
</details>

同样地，我们正在从这些**无状态**智能体转向更**有状态**的智能体。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Similarly, we're going from these stateless agents to more stateful agents.</p>
</details>

对吧？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right?</p>
</details>

以前我们只需要启动一个会话，然后从会话中获取一个工件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before we just had to spin up a session and the session, get an artifact out of it.</p>
</details>

这很好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's great.</p>
</details>

现在，我们有了**虚拟机**（VM），这些虚拟机在运行内容和**持久化文件存储**（persistent file store）方面都是**有状态**的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, we have VMs. VMs that are stateful both in terms of what's running, but also the persistent file store.</p>
</details>

所以，现在当我们拥有智能体并启动它们时，我们必须考虑，我们正在运行的整个空间是什么？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, now when we have agents and we spin them up, we have to consider, hey, what is the entire space that we're running into?</p>
</details>

目前正在发生的所有Slack消息是什么？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What are all the Slack messages that are currently going on?</p>
</details>

世界的状态是什么？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What is the state of the world?</p>
</details>

我必须与之交互的所有事物是什么？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What are all of the things that I have to interact with?</p>
</details>

我们不仅要在线处理这些问题，还要考虑这如何影响我们进行评估和仿真。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And not only how we do that, deal with that online, but how does that impact how we do evaluation and simulation?</p>
</details>

所以，这些是目前智能体领域正在发生的一些更有趣的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these are this is one of the more interesting things that's happening in agent space right now.</p>
</details>

### 分布外问题与行动的后果

一个更细微的问题，对从事建模和训练的人来说更熟悉，是**DAgger**（Dataset Aggregation: 数据集聚合，一种模仿学习算法）和**分布外**（OOD: Out-of-Distribution）问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the more nuanced things more familiar to the people that are working on modeling and training is a sort of like dagger and out of distribution problem.</p>
</details>

就像在机器人技术和智能体中一样，我们有通过模仿学习来训练模型的选项，模仿学习类似于人类演示的**监督微调**（SFT: Supervised Fine-Tuning），或者使用**强化学习**（RL: Reinforcement Learning）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So just like in robotics and agents, we have options of training our models with imitation uh imitation learning being similar to the SFT from human demonstrations versus RL.</p>
</details>

强化学习可以在仿真中进行，也可以通过其他方式进行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And RL can be in simulation or it can be in other ways as well.</p>
</details>

但模仿学习的一个已知问题是，一旦你稍微偏离了人类示例的**分布外**或**离策略**（off policy: 行为策略与评估策略不同），你就会严重偏离分布。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But one of the known issues with imitation is that as soon as you get a little bit out of distribution or off policy in relation to the human examples, you get really out of distribution.</p>
</details>

你可以在智能体中看到这种情况，比如浏览器智能体。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can start to see this in agents such as browser agents.</p>
</details>

当你看到一个在训练中从未出现过的弹出窗口时，因为人类与弹出窗口的交互非常自然，智能体就会感到困惑，而且会非常困惑。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When you see a pop-up that never happened in training because humans actually interact with pop-ups quite naturally, it gets confused and it gets really confused.</p>
</details>

这是一个**级联问题**（cascading issues: 一个小问题引发一系列连锁反应）的例子，在机器人技术中已经研究了相当长一段时间。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is an issue of cascading issues that you can see has been studied for quite a while in robotics.</p>
</details>

围绕这个问题的普遍主题是“行动有后果”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the general theme around this is that actions have consequences.</p>
</details>

我们不仅仅是在处理**分类模型**（classification models），不仅仅是在处理**预测模型**（prediction models）或序列。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're not just dealing with classification models. We're not just dealing with prediction models or sequences.</p>
</details>

我们正在处理一个全新的范式，在这个范式中，你进行预测，然后行动，然后处理该行动的后果，然后重新评估你之前所做的一切。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're dealing with a whole new paradigm in which you predict, you act, and then you deal with the consequences of that action and then re-evaluate everything you've done before.</p>
</details>

这真的很难，因为行动有后果，而且在非常混乱的现实世界中，行动的后果非常复杂。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's really tough because actions have consequences and actions have consequences in a very messy real world.</p>
</details>

### 仿真与马尔可夫决策过程

由于现实世界的复杂性，**仿真**（simulation）就发挥了作用，这样你就可以将现实世界的所有复杂性和混乱性表示到你的初始状态中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as a result of the complexity of the real world, that's where simulation comes into play such that you can represent all of these complexities and all the messiness of the real world into your starting state and you can play through uh the real world not just in a single path but all the paths that you could possibly take as your agent changes.</p>
</details>

你可以遍历现实世界，不仅是单一路径，而是你的智能体可能采取的所有路径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we call that playing out **counterfactuals** (反事实: 假设与实际情况相反的情景).</p>
</details>

我们称之为推演**反事实**。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other thing to be aware about, and this is sort of like classic reinforcement learning or robotics, is the concept of an **MDP** (Markov Decision Process: 马尔可夫决策过程)。</p>
</details>

另一件需要注意的事情，这有点像经典的强化学习或机器人技术，是**马尔可夫决策过程**（MDP）的概念。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so that's where there's an agent that takes into account a state and a reward and then will take actions on an environment or a world.</p>
</details>

它描述了一个智能体如何考虑状态和奖励，然后在环境或世界中采取行动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is just sort of a formalism about how to conceptualize how you're running the agent loop.</p>
</details>

这只是一种形式化的方式，用于概念化你如何运行智能体循环。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And these are just useful primitives to have on hand so that you can describe and you can communicate what's going on.</p>
</details>

这些只是手头有用的基本概念，以便你可以描述和交流正在发生的事情。

### 从预测模型到行动模型：核心挑战

之所以这很重要，是因为我们正在从纯粹的聊天模型转向采取行动的智能体模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The reason this is important is because we're moving from just plain chat models to agent models that take action.</p>
</details>

就背景而言，很多自动驾驶最初看起来进展很快，但实际上进展非常缓慢，因为它也面临着类似的问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For context, a lot of self-driving uh initially seemed really fast but was really slow in progress because it was sort of the same issues.</p>
</details>

从2017年到2020年，该领域的所有人都非常专注于**感知模型**（perception models），认为你真正需要做的就是获取世界状态并创建边界框，然后就可以非常轻松地在这些边界框周围驾驶。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So everybody in the space from 2017 to 2020 was really focused on perception models and thinking that all you really needed to do was uh take the state of the world and make boxes and then you can drive around the boxes really easily.</p>
</details>

事实证明，这个假设不一定正确，在创建**行动模型**（action models）而不仅仅是预测模型方面存在许多隐藏的复杂性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It turns out that assumption wasn't necessarily true and there's a lot of hidden complexity in creating action models and not just predictive models.</p>
</details>

同样地，在语言模型中，我们可以看到我们基本上可以通过文本理解世界上的一切。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Similarly in language models we can see that we can understand basically everything about the world that comes in via text.</p>
</details>

我们可以生成非常长且复杂的推理链。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can generate really long sophisticated reasoning traces.</p>
</details>

但是当你将这些非常复杂的计划、非常复杂的工具调用链在现实世界中实现时，你会发现事情总是出错。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But when you take these really sophisticated plans, really sophisticated chains of tool calls and you implement them in the real world, you can see things go wrong all the time.</p>
</details>

你会看到工具调用失败，智能体无法继续前进。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see the tool calls fail and the agent failed to progress.</p>
</details>

你会看到智能体未能从自己的错误中纠正过来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see the agent failed to correct from its own mistakes.</p>
</details>

这就是当你从预测模型转向行动时，这个循环具有欺骗性的棘手之处。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is sort of the loop that is deceptively tricky about when you get into actions from predictive models.</p>
</details>

这确实是大部分工作所在，也将是智能体领域大部分工作的持续方向。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is really where the bulk of the work had been and where a bulk of the work will continue to be in agents as well.</p>
</details>

### 自动驾驶与代码智能体的优势

我还想指出，在这两种情况下，无论是自动驾驶中的机器人技术，还是代码中的数字智能体，我们都非常幸运。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I also want to point out in both of these cases in self-driving when it comes to robotics and in code when it comes to digital agents we're actually very lucky in both.</p>
</details>

为什么我们幸运呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like why are we lucky?</p>
</details>

你可以在今天看到自动驾驶在有限的情况下运行得非常好，而其他机器人技术仍然局限于演示。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I you can see self-driving working really well in production today in limited cases whereas the rest of robotics is still limited to demos.</p>
</details>

这是因为我们拥有一台预定义了人类控制的机器，在过去几十年里得到了很好的完善，并且它具有电子控制和内置的**遥测数据**（telemetry: 远程测量和数据传输）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is because of how we have this machine that's predefined with human controls that's been really well refined over the last few decades and then it has electronic controls and it has built-in telemetry right so it's something that you already have a predefined interface to take actions with and you have predefined interfaces to collect the data from.</p>
</details>

所以，你已经有了一个预定义的接口来执行行动，并且有预定义的接口来收集数据。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that makes it really convenient to operate through code and it makes it really convenient to perform machine learning and learning in general on.</p>
</details>

这使得通过代码操作变得非常方便，也使得进行机器学习和一般学习变得非常方便。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have this predefined interface with predefined actions and predefined telemetry and that makes it much much easier of a task than going into some of these other knowledge work tasks that require the full desktop and things that are less easy to codify.</p>
</details>

我们拥有这个预定义的接口，具有预定义的行动和预定义的遥测数据，这使得任务比进入其他一些需要完整桌面且不易编码的知识工作任务要容易得多。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when we explore new domains, these are some of the things we want to consider.</p>
</details>

所以当我们探索新领域时，这些是我们想要考虑的一些事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is there somewhere where we already get a predefined human interface that makes it easy to do those two things?</p>
</details>

是否存在一个我们已经拥有预定义的人机界面，使得做这两件事变得容易？

### 迭代开发：爬山算法与仿真反馈

最后，我想谈谈我们日常面临的一个问题，那就是**爬山算法**（hill climbing: 一种迭代优化算法，通过局部搜索寻找最优解）过程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Finally, I want to talk about one of the things that we face from day-to-day and that's the hill climbing process.</p>
</details>

如果你不熟悉**爬山算法**，它基本上是一个迭代过程，用于构建或迭代一个复杂系统，例如**语言模型**（LM: Language Model）或智能体，在这个过程中你并不总是向前推进。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you're not familiar with hill climbing, it's basically this iterative process of building or iterating on a complex system such as an LM or an agent. when you don't always make forward progress.</p>
</details>

以前，当我们开发全栈Web应用程序或更简单的系统时，你实现一个功能，并且很可能保证该功能会进入**生产环境**（prod: Production Environment）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So before when we were working on full stack web applications or working on more simple systems, you implement a feature and you probably guarantee that feature will arrive into prod.</p>
</details>

现在，你有一个模糊的指标需要达到。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Nowadays you have this sort of like nebulous metric that you're trying to hit.</p>
</details>

你唯一能做的就是猜测和验证。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the only way you can do that is by guessing and checking.</p>
</details>

所以你有一个像基准一样的指标，然后你做出一些猜测，运行一些实验，你希望它能上升，有时它会下降，但只要你不断上升，最终就能达到目标。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you have a metric like a benchmark, then you make some guess, you run some experiment and you hope you go up, sometimes you go down, but as long as you keep going up and up and up, then you can eventually reach your goal.</p>
</details>

这就是**爬山算法**的概念。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's the concept of hill climbing.</p>
</details>

但我们在自动驾驶中的做法要复杂一些。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But how we do it in the self-driving way is a little bit more sophisticated.</p>
</details>

我们实际上从学习开始，然后通过仿真。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We actually start by learning and then going through simulation.</p>
</details>

仿真帮助你自信地部署，也有助于你的学习。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Simulation helps you deploy with confidence and it also helps your learning.</p>
</details>

但一旦部署，你就可以从现实世界中获取日志，这些日志会反馈到你的仿真引擎中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then once you deploy, you can actually get logs from the real world that feed back into your simulation engine.</p>
</details>

这非常重要，因为你需要让你的仿真有依据。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's really important because you want to ground your simulation on something.</p>
</details>

所以你开始得到一个完整的循环。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you start to get this full loop.</p>
</details>

日志实际上成为过程中比现在更重要的一部分。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The logs actually become a much more important part of the process than they are today.</p>
</details>

你可以获得比数字更多的洞察力，对吧？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can get a lot more insights than just your numbers, right?</p>
</details>

所以，基准测试中70%的得分会告诉你一些信息，但如果你开始将其分解为不同的类别、不同的城市、不同的可能出错的方式，开始对单个故障进行分类，你就可以获得更多关于如何改进系统以及在哪里改进的洞察力。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like a 70% at a benchmark will tell you a little bit, but if you start to break them down into different categories, different cities, different ways you can mess up, start to triage the individual failures, you can get a lot more insights about how to improve your system and on where to improve.</p>
</details>

这正是我们围绕工具和流程所开发的大部分内容，它们帮助我们的一些客户进行**爬山算法**。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's a lot of what we've developed our tooling around and a lot of what we've developed our processes around that help some of our customers with their hill climbing.</p>
</details>

### 总结与展望

最后，我们只走了一部分路。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Finally, like you know, we're only part of the way there.</p>
</details>

至少这是来自**远程劳务基准**（remote labor benchmark）的一个指标。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At least this is a metric from the remote labor benchmark.</p>
</details>

我想将其与自动驾驶早期的情况进行比较。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you know, I'd like to compare this to where self-driving was back in the beginning.</p>
</details>

这是因为我们有很棒的演示和很棒的预测模型，但在端到端工作完成方面我们还远远没有达到目标。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's because we have really great demos and we have really great predictive models, but we're not nearly there as far as endto-end work completion.</p>
</details>

很多原因都与我之前提到的“行动有后果”以及现实世界的复杂性有关。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A lot of the reasons are because of the things I brought up before with actions having consequences and the complexity of the real world.</p>
</details>

回顾一下，我们涵盖了机器人技术和智能体之间的共通之处。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To recap, we've covered the parallels between robotics and agents.</p>
</details>

其中一些包括**闭环系统**、获取**闭环反馈**、我们如何**离散化系统**、我们如何选择**行动和输入空间**、我们如何从**无状态转向有状态**、我们如何从**预测模型转向行动模型**、我们如何利用**仿真**进行部署和训练，以及**基础设施**对整个开发过程的重要性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some of those are having to do closed loop systems, getting closed loop feedback, how we discretize systems, how we pick action and input spaces, how we can go from stateless to stateful, how we're going from predictive models to action models, how we utilize simulation in deployment and in training, um, and how infrastructure is really important to the entire development process.</p>
</details>

如果你已经读到这里，我想说恭喜你，你已经成为我们称之为**智能体学**（agentics）这个新主题的大师，因为为什么不呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you've gotten this far, I'd like to say congrats and you've become a master in this new topic that we're calling agentics because why not?</p>
</details>

因为，你知道，机器人技术听起来很酷。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because, you know, robotics sounds cool.</p>
</details>

为什么不让智能体开发也同样酷呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why not make the this agent development stuff just as cool?</p>
</details>

我认为它需要很多这些核心概念和抽象，才能真正让它从我们修修补补的东西变成具有专门的真正科学并真正成为一种实践的东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um because I think it takes a lot of these core concepts and abstractions to really make this go from something that we hack on to something that has dedicated real science and really becomes a practice.</p>
</details>

所以，如果这些概念对你有用，很多这些东西都相当容易理解和阅读。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so if any of these concepts are useful for you like a lot of these things are pretty easy to understand and read about.</p>
</details>

你可以阅读关于**开环和闭环控制**、**马尔可夫决策过程**、**完全可观测与部分可观测环境**。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can read about openloop and closed loop control MDPs fully versus partially observable environments.</p>
</details>

你可以阅读关于**DAgger**。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can read about dagger.</p>
</details>

**离线强化学习**（offline RL: 在固定数据集上训练强化学习策略）是一个非常酷的话题，在最近的机器人技术工作中有所体现。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh **offline RL** (Offline Reinforcement Learning: 离线强化学习) is a really cool topic that is featured in more recent robotics work.</p>
</details>

然后，就像强化学习入门书一样，一切都很好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then just like the intro reinforcement learning book is all great.</p>
</details>

你可能会自然地理解这些东西，因为在智能体领域，这些问题非常明显且更容易理解。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You probably will understand these things natively because the problems are really obvious and easier to understand in agent space.</p>
</details>

最后，你还可以阅读很多最近的机器人技术文献，因为很多领域正在趋同。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And finally, you can read up on a lot of the recent robotics literature as well since a lot of the field is converging.</p>
</details>

所以你可以直接从论文开始。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can just start from the papers.</p>
</details>

总而言之，智能体也是机器人。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just as a recap, you know, agents are robots too.</p>
</details>

它们在现实世界中行动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They act in the real world.</p>
</details>

它们会犯错。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They make mistakes.</p>
</details>

它们必须恢复。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They have to recover.</p>
</details>

所有这些小细节都非常重要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And all of these little things really matter.</p>
</details>

谢谢。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks.</p>
</details>

欢迎随时联系。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can feel free to get in touch.</p>
</details>

这是我的电子邮件，jesse@abund.ai。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here's my email, jesseabund.ai.</p>
</details>

欢迎发送任何想法或反馈。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Feel free to send me any thoughts or feedback.</p>
</details>

谢谢。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks.</p>
</details>