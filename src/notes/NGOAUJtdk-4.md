---
area: tech-insights
category: technology
companies_orgs:
- Anthropic
date: '2025-11-13'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Claude
- ROS2 SDK
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=NGOAUJtdk-4
speaker: Anthropic
status: evergreen
summary: Anthropic进行了一项名为“Project Fetch”的实验，旨在探究其AI模型Claude如何加速人类完成复杂的机器人编程任务。实验中，两支缺乏机器人经验的工程师团队，一支借助Claude，另一支独立工作，分别让机器人狗完成捡球任务。结果显示，Claude显著提升了团队连接硬件和编写控制器的效率，尤其在处理复杂技术细节方面。这项实验预示着AI将使机器人开发更易普及，并最终可能实现机器人完全自主执行任务，将AI的影响力从软件拓展到物理世界。
tags:
- ai-robotic
- human-ai-collaboration
- integration
- software-engineering
- system
title: AI能否编程机器人狗？Anthropic实验揭示AI对机器人开发的加速作用
---

### AI与物理世界的交汇：机器人技术的崛起

如今，人们的关注点大多集中在**前沿AI模型**（Frontier AI Models: 指最先进、能力最强的AI模型）如何变革**软件工程**（Software Engineering: 利用工程化方法开发、维护软件的学科）上。我们感兴趣的是，这种变革如何开始转化为**物理世界**（Physical World: 现实物质世界，与虚拟世界相对）中的应用。**机器人技术**（Robotics: 涉及机器人设计、制造、操作和应用的科学技术）正是让一个主要由软件组成的系统，开始具备能力延伸到现实世界的明确切入点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today, much of the emphasis is on how frontier AI models are transforming software engineering. We are interested in understanding how that can begin to translate into the physical world. Robotics is the clear entry point for a mostly software system to start having the ability to reach out into the real world.</p>
</details>

### Project Fetch：AI加速机器人任务的实验

**Project Fetch**（“抓取项目”）是一个**自我封闭式实验**（Self-contained Experiment: 指在特定、受控环境中进行，结果不受外部因素干扰的实验），我们希望通过它来衡量Claude在多大程度上加速了人类完成他们不具备经验的**复杂技术任务**（Sophisticated Technical Task: 需要高水平知识和技能才能完成的任务）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Project Fetch is a self-contained experiment where we wanted to measure how much Claude accelerates humans performing a fairly sophisticated technical task that they do not have experience with.</p>
</details>

Project Fetch是一个为期一天的实验，分为三个阶段。所有任务大致都围绕着让一只机器人狗去捡一个沙滩球展开。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Project Fetch was a one-day experiment conducted in three phases. All tasks were approximately shaped like getting a robot dog to fetch a beach ball.</p>
</details>

实验共有两支团队参与，他们由Anthropic的软件工程师和研究工程师组成，几乎没有机器人技术经验。其中一支团队可以使用Claude，而另一支则不能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There were two teams, comprised of software engineers and research engineers at Anthropic who had hardly any robotics experience. One team had access to Claude, and the other team did not.</p>
</details>

### 第一阶段：使用预设控制器

第一阶段非常简单：使用**预设控制器**（Pre-provided Controllers: 指预先编程好的、用于控制设备行为的软件模块）让机器人狗走到沙滩球处，然后将其带回起点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Phase one was very simple: use the pre-provided controllers to get the dog to walk out to a beach ball and bring it back to its starting point.</p>
</details>

使用Claude的团队大约花了七分钟完成了这项任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The team with Claude took about seven minutes to complete this task.</p>
</details>

没有Claude的团队大约花了十分钟。在此阶段，两支团队之间发生了一些有趣的互动和挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The team without Claude took about 10 minutes. There were some playful interactions and challenges between the teams during this phase.</p>
</details>

### 第二阶段：编程自定义控制器

第二阶段同样是捡球游戏，但这次团队必须编写自己的控制器。这需要实际获取**硬件**（Hardware: 指计算机或机器人等物理设备及其组件）的访问权限，并在笔记本电脑上设计一个程序来控制机器人狗。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Phase two was also a game of fetch, but this time the teams had to program their own controller. This involved gaining access to the hardware and designing a program on their laptops to control the dog.</p>
</details>

Claude迅速地生成了一个完整的控制器。团队成员指出，这正是他们所需的所有控制功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude quickly generated a complete controller. The team noted that this was exactly what they needed for control.</p>
</details>

没有Claude的团队在安装**ROS2 SDK**（Robot Operating System 2 Software Development Kit: 机器人操作系统2软件开发工具包）及其依赖项时遇到了困难，多次失败。一名团队成员反思了他们对Claude的依赖，认为Claude在处理那些他们不愿亲自解决的繁琐工作和细枝末节上非常有帮助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The team without Claude struggled with installing the ROS2 SDK (Robot Operating System 2 Software Development Kit) and its dependencies, encountering multiple failures. A team member reflected on their reliance on Claude for handling tedious tasks and intricate details they preferred not to figure out themselves.</p>
</details>

实验的主要**瓶颈**（Bottlenecks: 指限制系统性能或效率的环节）之一是，如何让笔记本电脑与复杂的机器人硬件建立通信。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the primary bottlenecks of the experiment was establishing communication between the laptop and the complicated robot hardware.</p>
</details>

Claude被用来创建一个**机器人狗服务器**（Dog Server: 专门为机器人狗提供连接和数据传输服务的服务器），使得所有团队电脑都能连接并查看机器人所“看到”的景象。Claude高效地为他们找到了与特定机器人通信所需的正确**软件库**（Software Libraries: 包含预编写代码和函数，用于简化软件开发的集合），并将其安装到电脑上，从而迅速让他们获得了对机器人狗的访问权限。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude was used to create a dog server that allowed all team computers to connect and view the robot's perspective. Claude efficiently identified and installed the correct software libraries for communicating with the specific robot, quickly granting the team access.</p>
</details>

使用Claude的团队很快就让机器人狗动了起来，尽管初期出现了一些不受控制的动作和有趣的互动，甚至不小心撞到了另一位参与者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The team with Claude quickly got the robot dog moving, though with some initial uncontrolled movements and playful interactions, including hitting another participant.</p>
</details>

使用Claude的团队在大约2小时15分钟内完成了第二阶段。Claude带来的最大提升可能体现在与机器人连接的任务上。我们认为这非常重要，因为对于任何人来说，识别世界上任意一块硬件并弄清楚如何与之通信和控制，本身就是一项艰巨的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The team with Claude finished phase two in approximately 2 hours and 15 minutes. The most significant acceleration from Claude was observed in the task of connecting to the robot. This is crucial because it is inherently difficult for anyone to identify and establish communication and control with an arbitrary piece of hardware.</p>
</details>

没有Claude的团队在这一阶段遇到了巨大困难，尝试了许多不同的方法，但都没有特别成功。最终，实验组织者不得不介入，提供一个已知有效的策略，帮助他们取得进展，从而解锁了该阶段的剩余部分以及后续实验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The team without Claude struggled significantly with this phase, exploring numerous unsuccessful approaches. Ultimately, the experiment facilitators had to intervene, providing a known working strategy to help them progress and unlock the remainder of the phase and experiment.</p>
</details>

### 第三阶段：实现机器人完全自主

实验的第三阶段引入了更高程度的**自主性**（Autonomy: 指系统或机器在没有外部干预的情况下独立运行和决策的能力）。任务是编写一个程序，让机器人狗完全自主地去捡沙滩球。这意味着只需按下“开始”键，机器人就能自主搜索、检测球的位置、走到球旁边并将其带回。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Phase three of the experiment introduced a greater degree of autonomy. The task was to write a program that would enable the dog to fetch a beach ball entirely by itself. This meant simply pressing 'go' and having the robot autonomously search, detect the ball's location, walk to it, and bring it back.</p>
</details>

这种难度上的提升是刻意设计的，同时也暗示了未来**前沿模型**（Frontier Models: 指最先进的AI模型）需要解决的真正问题：实现机器人自主执行复杂任务。如果一个前沿模型希望机器人为其完成某项任务，它就必须能够解决这个极其困难的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This increased difficulty was by design, also hinting at the real problem frontier models are expected to solve in the future: enabling robots to perform complex tasks autonomously. If a frontier model wants a robot to accomplish something, it needs to be capable of solving this very hard problem.</p>
</details>

在第三阶段，没有Claude的团队在最初的任务中表现不错，他们想出了一种方法来追踪机器人在空间中的位置，并在检测球的任务上取得了进展。然而，他们未能将所有部分有效地整合起来。一名团队成员甚至感叹非常想念Claude的帮助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In phase three, the team without Claude successfully devised a method to track the robot's location in space and made progress on ball detection. However, they did not manage to integrate all components effectively. A team member expressed missing Claude's assistance.</p>
</details>

使用Claude的团队实际上非常接近完成第三阶段。据估计，到实验结束时，使用Claude的团队距离完成任务可能只差一个半小时。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The team with Claude came quite close to finishing phase three, estimated to be about an hour and a half away from completion by the end of the experiment.</p>
</details>

### 实验结果与AI的未来影响

实验结果基本表明，使用Claude的团队比没有Claude的团队快几个小时完成了所有任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The experiment's results clearly showed that the team with Claude completed all their tasks several hours faster than the team without Claude.</p>
</details>

从短期来看，我们预计AI模型将如本次实验所示，使缺乏丰富机器人经验的人们更容易有意义地与机器人互动。仅凭我们拥有的这一工具，我们就极大地加速了他们利用机器人完成任务的能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the near term, we anticipate that AI models will perform exactly as demonstrated in this experiment: making it easier for individuals without extensive robotics experience to meaningfully interact with robots. This single tool has dramatically accelerated their ability to work with the robot.</p>
</details>

我们并没有专门训练Claude来提升人类完成机器人任务的能力；这种能力是这项技术自然而然产生的。从长远来看，这项实验可以看作是整个系统发展方向的一个**领先指标**（Leading Indicator: 预示未来趋势或变化的指标）。今天需要人与AI模型结合才能完成的任务，未来可能只需要AI模型即可。AI的影响将不仅仅局限于软件领域，还将延伸到硬件和物理世界。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude was not specifically trained to enhance human performance in robotics tasks; this capability emerged naturally from the technology. In the long run, this experiment serves as a leading indicator of the system's overall trajectory. What currently requires a combination of human and AI model, will likely only require the AI model in the future. The effects of AI will extend beyond software, impacting hardware and the physical world as well.</p>
</details>