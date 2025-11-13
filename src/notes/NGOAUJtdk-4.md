---
author: Anthropic
date: '2025-11-13'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=NGOAUJtdk-4
speaker: Anthropic
tags:
  - ai-robotics
  - human-ai-collaboration
  - software-engineering
  - physical-world-ai
  - efficiency-gains
title: AI如何赋能机器人编程？Anthropic实验揭示效率飞跃
summary: Anthropic进行了一项名为“Project Fetch”的实验，旨在探究前沿AI模型（如Claude）如何加速人类完成复杂的机器人编程任务。实验中，两组工程师分别在有无Claude辅助的情况下，尝试让机器狗自主完成取球任务。结果显示，在连接硬件、编写控制器和实现自主行为等阶段，有Claude辅助的团队显著提高了效率，提前数小时完成任务。这表明AI模型正使非专业人士更容易与机器人交互，并预示着未来AI将独立完成复杂物理世界任务的趋势。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
people: []
companies_orgs:
  - Anthropic
products_models:
  - Claude
  - ROS2 SDK
media_books: []
status: evergreen
---
### AI赋能物理世界：从软件到机器人

如今，许多关注点都集中在**前沿AI模型**（Frontier AI Models: 拥有先进能力并推动AI领域边界的大型模型）如何改变**软件工程**（Software Engineering: 软件的设计、开发、测试和维护）领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today, a lot of the emphasis is on how frontier AI models are transforming software engineering.</p>
</details>

我们感兴趣的是，这种转变如何开始延伸到物理世界。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What we're interested in understanding is how that can begin to translate into the physical world.</p>
</details>

**机器人技术**（Robotics: 涉及机器人设计、建造、操作和应用的技术）是实现这一目标的一个明确切入点，它能让一个主要基于软件的系统开始具备与现实世界互动能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Robotics is sort of the clear entry point to how you have a mostly software system, start having the ability to reach out into the real world.</p>
</details>

“Fetch项目”（Project Fetch: Anthropic进行的一项关于AI辅助机器人编程的实验）是一个独立的实验，我们希望衡量**Claude**（Claude: Anthropic开发的一系列大型语言模型）能在多大程度上加速人类完成一项他们不具备经验的、相当复杂的专业技术任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Project Fetch is this self-contained experiment where we wanted to measure how much does Claude accelerate humans performing a fairly sophisticated technical task that they do not have experience with?</p>
</details>

Fetch项目是一个为期一天的实验，共分为三个阶段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Project Fetch was a one day experiment. The experiment was three phases.</p>
</details>

所有这些任务都大致围绕着“让机器狗去取一个沙滩球”这一目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All of these tasks were shaped approximately like get this robot dog to fetch a beach ball.</p>
</details>

实验共有两支团队，这些团队由Anthropic的软件工程师和研究工程师组成，他们几乎没有机器人方面的经验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There were two teams. These teams were comprised of software engineers and research engineers at Anthropic that had hardly any robotics experience.</p>
</details>

其中一支团队可以使用Claude，而另一支团队则不能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One team had access to Claude and the other team did not.</p>
</details>

### 第一阶段：使用预设控制器

第一阶段非常简单，任务是使用预先提供的**控制器**（Controllers: 用于控制机器人行为的软件模块）让机器狗走到沙滩球旁边，然后把它带回起点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Phase one was very simple. It was to use the pre-provided controllers to get the dog to walk out to a beach ball and bring it back to where it started.</p>
</details>

“好的，我明白了。这很直观。我们是不是应该把它带到骨头旁边？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alright. I see. It's pretty intuitive. And we're supposed to bring it over by the bone?</p>
</details>

“是的，我想是这样。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think.</p>
</details>

有Claude辅助的团队大约花了七分钟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think the team with Claude took about seven minutes.</p>
</details>

“好的，现在去攻击那个团队。去攻击他们的狗！冲啊！”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alright, go attack that team now. Go attack their dog. Charge!</p>
</details>

“糟了，伙计们。他们正在摧毁我们。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Shoot, guys. They’re destroying us.</p>
</details>

“天啊。等等。我们正在被，我们正在被摧毁。”

<details>
<summary>View/Hide Original English</p>
<p class="english-text">Oh my god. Wait. We're getting, we're getting destroyed.</p>
</details>

没有Claude辅助的团队大约花了十分钟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The team without Claude, I think, took 10 minutes.</p>
</details>

“哦，抱歉。它要撞到你了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, sorry. It's going to hit you.</p>
</details>

“好的。我要跳胜利之舞了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alright. I'm going to do a victory dance.</p>
</details>

### 第二阶段：编程自定义控制器

第二阶段也是一个取物游戏，但这次团队必须编程自己的控制器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Phase two was also a game of fetch. But this time the teams had to program their own controller.</p>
</details>

你必须实际接触**硬件**（Hardware: 构成计算机或机器人系统的物理组件），并设计一个可以在笔记本电脑上编写的程序来控制机器狗。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You have to actually get access to the hardware and design a program that you can write on your laptop that will control the dog.</p>
</details>

Claude就像一键生成了整个控制器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude just like one-shotted a whole controller.</p>
</details>

“好的，我来做一些健身操。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alright, I'll do some calisthenics.</p>
</details>

“不错，不错。这是为了——哦，这只是控制。但我想这就是我们所需要的。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Nice, nice. Is this for— Oh, this is just control. But that's all we need I guess.</p>
</details>

“这是来自官方的**ROS2软件开发工具包**（ROS2 SDK: Robot Operating System 2 Software Development Kit，用于机器人应用开发的开源框架），我已经安装了它，但它又要求一堆其他软件包，而且都失败了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is from the official ROS2 SDK, and I got this installed, but then it's asking for a whole bunch of other packages, and that's all failing.</p>
</details>

“我以前从未真正理解，我有多么依赖Claude来完成那些琐碎的工作，找出我不想费心去弄清楚的所有细节。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've never really understood how reliant I am on Claude doing the menial work, finding all the nitty gritty details I don't want to have to figure out.</p>
</details>

“我们不能，我们不能对他们感到紧张。你知道吗，我稍后会从实际的容器中安装PIP，所以。哦等等。不，我不能。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can't, we can't get nervous about them. You know what, I'm just going to install PIP from the actual container later, so. Oh wait. No, I can't.</p>
</details>

“我知道我很不耐烦。已经超过一分钟了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I know I'm impatient. It's been over a minute.</p>
</details>

实验的主要瓶颈之一是，你拥有这个硬件，你拥有这个复杂的技术设备，你拥有你的笔记本电脑，你必须让你的笔记本电脑与这个硬件进行通信。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the primary bottlenecks of the experiment is that you have this hardware, you have this complicated piece of technology, you have your laptop, and you have to, like, get your laptop talking to this hardware.</p>
</details>

我正在设置我的Claude来创建一个机器狗服务器，我们所有的电脑都可以连接到它，以查看机器狗正在看到什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I am setting my Claude up to create a dog server that all of our computers can connect to to see what the dog is seeing.</p>
</details>

互联网上有许多不同的软件库用于与这种特定机器人通信，Claude为他们找到了这些东西，它在他们的电脑上安装了正确的东西，并很快让他们获得了对机器狗的访问权限。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are many different software libraries on the internet for communicating with this particular robot, and Claude found these things for them, it installed the right things on their computer and it pretty quickly got them access to the dog.</p>
</details>

“哦，糟了。太快了。小心。现在要小心。尽量不要撞到桌子。呃哦。转过来。它有自己的想法。关掉它，它活过来了。哦，糟了。停，停，停，停。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh shit. So fast. Watch out. Careful now. Try not to run into the table. Uh oh. Turn around. It has a mind of its own. Turn it off, it's alive. Oh shit. Stop, stop, stop, stop.</p>
</details>

“我认为那个团队应该因为撞到另一个参与者而被取消资格。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that team should be disqualified for hitting another participant.</p>
</details>

有Claude辅助的团队在大约2小时15分钟内完成了第二阶段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The team with Claude finished phase two in about 2 hours and 15 minutes.</p>
</details>

我们认为Claude带来最大提升的领域可能就是连接机器人的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Probably the area where we saw the most uplift from Claude was just in the task of connecting to the robot.</p>
</details>

我们认为这非常重要，因为对于任何人来说，识别世界上任意一块硬件并弄清楚如何与之通信以及如何控制它，确实是一件困难的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We think that's really important because it is, in fact, difficult for anyone to identify an arbitrary piece of hardware in the world and figure out how to talk to it and how to control it.</p>
</details>

“我想他们拿到相机了。他们的相机工作了吗？是的。糟了。Claude对这部分有帮助吗？还是我们太慢了？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think they got their camera. They got their camera working? Yeah. Shit. Was Claude even helpful for this part? Or are we just slow?</p>
</details>

“是的。我们进展不大，但这没关系。这是一次学习经验。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. We're not getting very far, but that's okay. It's a learning experience.</p>
</details>

没有Claude辅助的团队在这方面确实遇到了困难，尝试了许多不同的途径，但没有一个特别成功。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The team without Claude really struggled with this and went down a lot of different paths. None of which were especially successful.</p>
</details>

我们基本上不得不介入并说：“好的，这是一个我们知道有效的方法。从这里开始，这将为他们解锁这个阶段的其余部分和整个实验。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we basically had to intervene and be like, alright, here, here is a strategy that we know works. Start from there, and then this will unlock kind of the rest of the phase and the rest of the experiment for them.</p>
</details>

“不错。哦，太棒了。呃，丹尼尔？丹尼尔还是凯文？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Nice. Oh great. Uh, Daniel? Daniel or Kevin?</p>
</details>

### 第三阶段：实现自主取物

实验的第三阶段是更高程度的**自主性**（Autonomy: 系统在没有外部干预的情况下独立运行的能力）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Phase three of the experiment was a greater degree of autonomy.</p>
</details>

第三阶段的任务是编写一个程序，让机器狗完全**自主地**（Autonomously: 独立地，无需人工干预地）去取沙滩球。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The task in phase three was to write a program that would get the dog to fetch a beach ball all by itself.</p>
</details>

本质上，就是按下“开始”键，让机器人自行搜索、检测球的位置、走到球旁边并将其带回。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Essentially, just press go and have the robot search around, detect the location of the ball, walk to the ball and bring it back, all autonomously.</p>
</details>

这在设计上是难度逐步升级的，但也预示着我们期望前沿模型未来需要解决的真正问题，本质上就是这种自主版本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is like ratcheting up in difficulty kind of by design, but also gesturing at the real problem that we expect frontier models having to solve in the future is essentially this kind of autonomous version where, like</p>
</details>

也就是说，如果一个前沿模型想要机器人为它做某事，它需要能够解决这个非常困难的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if a frontier model wants a robot to do something for it, it needs to be able to solve this very hard problem.</p>
</details>

在第三阶段，没有Claude辅助的团队在跟踪机器人在空间中的位置这一初始任务上做得很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The team without Claude in phase three did a good job of the initial task of coming up with a way to track the location of the robot in space.</p>
</details>

他们在检测球的任务上取得了进展，但他们并没有真正接近将所有东西整合在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They made progress on the task of detecting the ball, but they didn't really come close to knitting everything together.</p>
</details>

“我太想念Claude了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I miss Claude so much.</p>
</details>

有Claude辅助的团队实际上非常接近完成第三阶段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The team with Claude actually came fairly close to finishing phase three.</p>
</details>

我想，到最后，有Claude辅助的团队距离完成可能只差一个半小时。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think by the end the team with Claude was maybe an hour and a half away from being done.</p>
</details>

### 实验结果与未来展望

实验结果基本上是，有Claude辅助的团队比没有Claude辅助的团队提前几个小时完成了他们所完成的所有任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The results of the experiment were essentially that the team with Claude completed all of the things that they did complete in a couple of hours faster than the team without Claude.</p>
</details>

在短期内，我们认为AI模型将完全按照我们在这次实验中展示的那样发挥作用，即让那些没有太多机器人经验的人更容易有意义地与机器人互动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the near term we think that AI models are going to do exactly what we showed in this experiment, which is making it easier for people without a lot of robotics experience to engage meaningfully with robots.</p>
</details>

仅仅通过我们拥有的这个工具，我们就极大地加速了他们利用这个机器人做事的能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just with this one tool we have, we've dramatically accelerated their ability to do things with this robot.</p>
</details>

我们并没有专门训练Claude来提升人类完成机器人任务的能力。这只是这项技术自然而然产生的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We didn't go like train Claude to uplift humans to do robotics tasks. This is just a thing that fell out of this technology.</p>
</details>

也许从长远来看，这是一种领先指标，预示着整个系统将走向何方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then maybe in the long run, this is kind of a leading indicator of where the whole the whole system is going.</p>
</details>

今天需要人与AI模型结合才能完成的事情，明天可能只需要AI模型就能完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What today requires the combination of a person and an AI model, tomorrow is likely to just require the AI model.</p>
</details>

AI的影响将不仅仅局限于软件领域，它们也将体现在硬件和物理世界中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The effects of AI are not just going to be in software, they are going to be in hardware and in the physical world as well.</p>
</details>