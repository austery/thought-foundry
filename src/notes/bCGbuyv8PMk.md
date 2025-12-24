---
area: tech-insights
category: technology
companies_orgs:
- Tesla
date: '2025-08-25'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Optimus
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=bCGbuyv8PMk
speaker: AI Engineer
status: evergreen
summary: 本演讲深入探讨了高性能机器人系统在设计和实现过程中面临的挑战，特别是如何区分和诊断控制策略（policy）与底层软件系统之间的问题。演讲者以一个简化的机器人模型为例，详细阐述了通信协议（如CAN总线）的瓶颈、多线程与流水线化、同步问题导致的抖动、日志记录的潜在开销以及优先级反转等常见陷阱，并提供了相应的诊断方法和解决方案。旨在帮助工程师构建更健壮、高效的机器人系统。
tags:
- communication
- performance
- software-engineering
- system
title: 特斯拉擎天柱机器人系统挑战：高性能机器人软件设计要点
---

### 引言：策略与软件系统之争

大家下午好，非常高兴今天能来到这里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Good afternoon everyone and really excited to be here today.</p>
</details>

到目前为止，我们已经看到了许多令人兴奋的内容，包括众多的模型和新颖的想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Really exciting stuff so far. So many models, so many new ideas and today I want to talk about what happens between the controller and the wire.</p>
</details>

我们已经见证了许多行之有效的机器人控制策略（**Policy**：指控制机器人行为的算法或逻辑），但我们需要将这些数据传输到执行器（**Actuators**：将电信号转换为物理运动的设备），并从传感器获取数据，从而驱动整个系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now we have seen so many policies that work that control robots but again we that we need to get that data to the actuators we need to get that data from sensors and feed the whole system and what happens if your carefully crafted policy does not work as expected like is this issue in the policy or is it in the software system.</p>
</details>

那么，如果精心设计的策略未能按预期工作，问题究竟出在策略本身，还是软件系统呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So today we look at a lot of instances where the issue will look like it's the policy but it's actually the software system and along the way we'll try to design a very small toy robotics robot.</p>
</details>

今天，我们将探讨许多看似是策略问题，实则源于软件系统的情况，并在此过程中尝试设计一个非常小的玩具机器人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So why this talk again? Well, robots are complex.</p>
</details>

为什么再次谈论这个话题？因为机器人系统非常复杂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So many systems, so many different software components, and yet you're focused on like one big question.</p>
</details>

它包含众多系统和不同的软件组件，但我们往往只关注一个核心问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When things go wrong on the robot, when you don't see that motor move, what's the root cause?</p>
</details>

当机器人出现问题，例如电机不转动时，根本原因是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is the policy that is not giving the command or is it the software system?</p>
</details>

是策略没有发出指令，还是软件系统出了问题？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is a question that I grapple almost every day.</p>
</p>
</details>

这是一个我几乎每天都要面对的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I want to talk about what I've seen so far and how to diagnose these issues on the robot.</p>
</details>

因此，我想分享我迄今为止的经验，以及如何在机器人上诊断这些问题。

### 构建一个简单的机器人架构

让我们从构建一个非常小的玩具机器人通用架构开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's go into the buildup. Let's try build a very small uh toy robotics general architecture, right?</p>
</details>

一个通用机器人通常会包含执行器、**CPU**（中央处理器）、可能还有混合加速器，以及传感器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like this is what a general robot would look like. You'd have some actuators, a CPU, maybe a hybrid accelerator and then a sensor. Perfect.</p>
</details>

其中一个最关键的方面是通信协议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, one of the most critical aspects is the communication protocol.</p>
</details>

在本次演讲中，我们将使用**CAN**（Controller Area Network：汽车中广泛使用的串行通信总线协议）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for our our talk, we'll use CAN.</p>
</details>

CAN协议非常出色，它是开源的，每个人都可以使用，成本低廉，并且与许多现有组件兼容，数据传输速率也足够。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">CAN is great. CAN is open source. Everyone can use CAN. It's cheap. It's affordable. And it has enough data rate and enough compatibility for a lot of components out there.</p>
</details>

所以我们将坚持使用CAN，并观察它如何影响后续的设计决策。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we'll stick to can and uh we'll see how that influence a lot of the design design decisions down the line.</p>
</details>

### 初步问题：通信延迟

好的，让我们从简单的代码开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. So let's also start simple with the code.</p>
</details>

我们将从接收数据、将其传递给策略，然后将其发送出去开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'll start with receiving the data giving that to the policy and basically sending it back out. Nothing nothing happening nothing fancy right.</p>
</details>

这没有任何复杂的操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And let's assume that we have approximately 2 milliseconds for our policy.</p>
</details>

假设我们的策略处理时间约为2毫秒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is what we should expect to see, right?</p>
</details>

我们期望看到的是，循环正常运行，每2毫秒就能看到策略的输出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our loops running. Every 2 millisecond we are able to see our policy output. We read data. We send it out. Standard.</p>
</details>

我们读取数据，然后发送出去，这是标准流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But as soon as we deploy it on the robot, this is what happens.</p>
</details>

但一旦将其部署到机器人上，就会出现问题：每2毫秒就会出现一个间隙。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's a gap. Every two milliseconds, there's a gap. Wait, what's going on?</p>
</details>

等等，这是怎么回事？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, let's look at the loop again. So, at the edge of the loop, we have question marks.</p>
</details>

我们再次审视循环。在循环的边缘，我们看到了问号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We see that we're transmitting and receiving CAN data.</p>
</details>

我们正在传输和接收CAN数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, let's look at the canvas. Maybe we'll find some hints there.</p>
</details>

那么，让我们检查一下CAN总线，或许能找到一些线索。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So, let's say we have 100 bits per message and we have about 10 messages.</p>
</details>

好的，假设每条消息有100位，我们有大约10条消息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Five to be sent out, five to be received.</p>
</details>

其中五条发送，五条接收。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That gives us a total of thousand bits.</p>
</details>

这总共是1000位。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for a canvas that's operating at 1 megabit per second, that's about 0.1 milliseconds per message or 1 milliseconds for 10 message.</p>
</details>

对于一个以1兆位/秒运行的CAN总线，每条消息大约需要0.1毫秒，10条消息则需要1毫秒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see like how even a small number of messages are saturating the canvas to the point that the loop time the how much our system takes to run is on the same order as the transmission time.</p>
</details>

可以看到，即使少量消息也足以使CAN总线饱和，导致系统运行的循环时间与传输时间处于同一量级。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this explains the 1 millcond gap.</p>
</details>

这解释了为什么会出现1毫秒的间隙。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So great, but then what to do about it?</p>
</details>

这很好，但我们该如何解决呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's like it's almost unavoidable, right?</p>
</details>

这似乎是不可避免的，对吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we cannot go around this 1 millcond gap.</p>
</details>

我们无法绕过这1毫秒的间隙。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, that's solution number one. We just accept the delay.</p>
</details>

好的，这是解决方案一：我们接受这个延迟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hopefully, it's 3 millonds and that's not too bad.</p>
</details>

希望它只有3毫秒，那还不算太糟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But again, a system would not be high performance if we let that stop us.</p>
</details>

但如果因此而止步，系统就无法实现高性能。

### 解决方案：多线程与流水线化

因此，我们将采用**多线程**（Multi-threading：在同一程序中同时运行多个执行流）和**流水线**（Pipelining：一种优化处理流程的技术，允许不同阶段的任务并行执行）技术。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we'll multi thread and we'll pipeline.</p>
</details>

我们将尝试找出如何解决这1毫秒的延迟，并重新组织任务，以实现2毫秒的循环时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'll try to figure out how we can work around that 1 milliseconds and see how we can sort of organize our tasks differently to still get that 2 millisecond loop time.</p>
</details>

在这里，我们暂停一下，看看循环现在被分解成三个组件：发送（TX）、策略（PX）和接收（RX）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here we'll take a take a moment to pause and see that you know the loop it has multiple components broken down into three now TX px RX and the policy and we're running the communication in different thread and the policy in a different thread and now we'll see how we'll take the simple building block and stagger it so that we can actually achieve faster loop times and this is it.</p>
</details>

我们将通信部分在不同的线程中运行，策略部分也在不同的线程中运行。现在，我们将看到如何利用这些简单的构建块进行交错处理，从而实现更快的循环时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what we do we seed the policy the first time we get some data we feed it to the policy but before we conclude the policy we start receiving the next set of data and that's for the next iteration when the next iteration starts we transmit the data from the last policy and we continue the this iteration of this policy essentially we have parallelized our RX and TX but we're still receiving data for the same policy at the same cadence so this is great we might have solved our problems Let's move on.</p>
</details>

具体做法是，当我们第一次获取到数据时，就将其输入到策略中。但在策略完成之前，我们便开始接收下一组数据，这为下一次迭代做准备。当下一个迭代开始时，我们发送上一个策略的数据，并继续当前策略的迭代。本质上，我们已经并行化了接收（RX）和发送（TX）过程，但我们仍然以相同的节奏为同一策略接收数据。这很棒，我们可能已经解决了问题，让我们继续。

### 第二个问题：系统抖动

我们将系统部署到机器人上，现在又出现了新的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we deploy the system on the robot and now we see new problems.</p>
</details>

我们的系统出现了卡顿，执行器发出奇怪的声音，或者我们看到执行器有异常的动作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our system is stuttering. Our actuators are making sounds like catching up or like we're seeing weird motions on the actuator.</p>
</details>

这一定是策略问题，不可能是软件问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This has to be policy. There's no way this can be software.</p>
</details>

好吧，让我们进一步调查，从CAN总线获取更多数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, let's investigate more. Let's get some more data from the canvas.</p>
</details>

### 诊断抖动：周期时间图

再次，我们有CAN总线，以及我们的CPU、**GPU**（图形处理器）和所有加速器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, again, like here we have our canvas again and we see our CPU, GPU, all our accelerators.</p>
</details>

我们将尝试连接一个外部收发器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what we'll try to do is get an external transceiver.</p>
</details>

这些设备同样非常便宜且开源，随处可得。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These are again very cheap, very open source products that you can get anywhere.</p>
</details>

我们将其连接到CAN总线，并从中获取数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we connect it to the canvas and we get data off the canvas.</p>
</details>

我们将这些数据传输到另一台主机，比如一台笔记本电脑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We take this data, we feed it to another host computer, let's say a laptop.</p>
</details>

在那里，我们可以运行像`candump`这样的工具，它会提供每条消息被看到的时间戳数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And on there we can run utilities like can dump which will actually give you a timestamp data of what message was seen at what time.</p>
</details>

一旦我们从总线获取到这些原始数据，就可以开始绘制图表了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So once we get this raw data off the bus, we can start plotting it.</p>
</details>

我们期望看到的是，每2毫秒总线上就有一条消息被发送出去，它们应该间隔均匀，并及时到达执行器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is what we should expect that every 2 milliseconds we have a message on the bus that is being sent out right should be very nicely spaced and it should reach the actuators in time and this is if they see this on the bus we're really happy.</p>
</details>

如果总线上的数据是这样的，我们会非常满意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now what happens a lot of the times in systems is you'll not see this you'll see something like this here we'll see like between message number three and four there's almost no gap.</p>
</details>

然而，在许多系统中，你不会看到这种情况，你会看到像这样的现象：消息3和消息4之间几乎没有间隔。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What happened there? And between two and three there's four milliseconds of gap.</p>
</details>

这是怎么回事？而消息2和消息3之间却有4毫秒的间隔。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's almost like message number three was just late and four was on time and because of that we had this weird weird jitter where the actuator would try to catch up or have try to command like try to follow two commands at the same time.</p>
</details>

这就像消息3迟到了，而消息4准时到达，因此导致了奇怪的**抖动**（Jitter：指系统响应时间的不规则变化或延迟），执行器会试图追赶，或者尝试同时执行两个指令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, same thing happened with seven and eight.</p>
</details>

消息7和消息8也发生了同样的情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's take a deeper look but first let's try plot this differently.</p>
</details>

让我们深入研究一下，但首先，我们尝试用不同的方式绘制图表。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there's this plot called the cycle time plot and where what we plot here is the time since last message.</p>
</details>

有一种图表叫做周期时间图，我们在这里绘制的是自上一条消息以来的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">time since last message is just a way to say like hey last message came in at 2 milliseconds interval this one should also come at 2 milliseconds so we should see a straight line around the 2 millisecond mark but here we see some messages jump at 4 milliseconds and the one after that comes to zero this is expected because if a message is delayed the cycle time for that would be late but then then for the next one it would be much closer to zero because that one was not late and the difference between the last message and the current one is basically nothing.</p>
</details>

“自上一条消息以来的时间”只是表示：嘿，上一条消息是在2毫秒的间隔内到达的，这条消息也应该在2毫秒时到达，所以我们应该在2毫秒标记附近看到一条直线。但在这里，我们看到一些消息在4毫秒时跳跃，而紧随其后的消息则接近零。这是预料之中的，因为如果一条消息延迟了，它的周期时间就会滞后；但下一条消息由于没有延迟，它与上一条消息之间的时间差就会接近零。

### 抖动根源：策略延迟与线程不同步

好的，现在我们已经对系统进行了特性分析，了解了正在发生的事情，可以开始解决它了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so now we characterize the system. We know what's going on and we can start solving it.</p>
</details>

但这只是发送（TX）端的情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this is what's going on with the TX side. So let's see.</p>
</details>

我们错过了发送数据并将其排队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we miss sending the data and cued it. Why would that happen?</p>
</details>

为什么会发生这种情况？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, policies are not very real time.</p>
</details>

嗯，策略并非总是实时性的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At times they can take longer, times they can take shorter.</p>
</details>

有时它们可能需要更长时间，有时则更短。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what happens if a policy takes longer?</p>
</details>

如果一个策略执行时间过长会怎样？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, you miss the time when you're supposed to send it out.</p>
</details>

那么，你就会错过应该发送数据的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So all you can do is just cue it somewhere.</p>
</details>

所以你只能把它排队存储起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you can store it, but that cannot be sent out anymore.</p>
</details>

你可以存储它，但它不能再被发送出去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And when the next iteration comes around, that's when you send both the last message and the current message.</p>
</details>

当下一个迭代到来时，你就会同时发送上一条消息和当前消息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you'll see two messages just go on the bus at the same time.</p>
</details>

因此，你会看到两条消息同时进入总线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this can also happen if our TX and RX thread start desynchronizing.</p>
</details>

如果我们的发送（TX）和接收（RX）线程开始不同步，也可能发生这种情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this is one of the issues that is very commonly seen with like a multi-threaded system.</p>
</details>

但这在多线程系统中是一个非常常见的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's very important to have uh synchronization in the systems.</p>
</details>

在这些系统中，保持同步至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But let's say we do synchronize it and we are able to fix our TX side.</p>
</details>

但假设我们确实进行了同步，并修复了发送（TX）端的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, we see some improvement. We don't see that like everything is solved.</p>
</details>

我们确实看到了一些改进，但并非所有问题都解决了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We see some improvement. Okay.</p>
</details>

我们看到了一些改进，好的。

### 第三个问题：接收端不同步

现在这一定是策略问题了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But now this has to be policy.</p>
</details>

我们的图表看起来正常，总线上的一切都很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our graphs are looking fine. Everything is on the bus is fine.</p>
</details>

这一定是策略问题，不可能是系统问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This has to be policy. There's no way the systems.</p>
</details>

嗯，我们还有一个最后的问题需要检查，那就是如果我们在接收（RX）端发生不同步会怎样？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, there's one last one last issue that we have to check and that is what happens if we desynchronize in the RX side.</p>
</details>

如果我们的线程延迟了会怎样？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What happens if our thread is delayed?</p>
</details>

那么，我们的策略将无法获取新数据，它会使用旧数据进行工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, now our policy will not get the new data and it'll work with the last data and because of that the output will also be based on the last data and so in policy number two or iteration number two we'll actually have an old command still like which is relatively older and in policy number three we'll directly jump we'll skip one of the data processings and because of that we'll see a sort of skip a catching up behavior on the motors which will sound like almost like a jitter.</p>
</details>

因此，输出也将基于旧数据。在策略2或迭代2中，我们实际上会有一个相对较旧的命令；而在策略3中，我们会直接跳过一个数据处理过程。正因为如此，我们会在电机上看到一种跳过或追赶的行为，听起来就像是抖动。

### 解决同步问题：同步原语与填充

好的，我们如何解决这两个问题呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so how do we resolve these two things?</p>
</details>

嗯，有**同步原语**（Synchronization Primitives：用于协调多线程或多进程访问共享资源的机制，如条件变量、信号量），你可以等待条件变量或使用信号量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, there are synchronization primitives looking you can wait conditional variables semifers.</p>
</details>

这些都是非常底层的系统机制，在机器人领域被广泛使用，也应该用于这个玩具系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These are like very low-level system things that are widely used in robotics and should be used as well for this toy system.</p>
</details>

但如果这些不可用，有时确实如此，例如我们不是在使用基于Linux的系统，而是使用**实时操作系统**（Real-time OS, RTOS：旨在保证在特定时间限制内完成任务的操作系统）或**微控制器**（Microcontroller：集成CPU、内存和外设的单芯片计算机，常用于嵌入式系统），可能没有所有这些功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But again, if these are not available, which is sometimes the case like we're not working with Linux based system, we'll work with like a real-time OS or like a microcontroller where we may not have all these offers.</p>
</details>

我们可以简单地添加填充（padding），留出一些缓冲空间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can just add padding just have some cushion, right?</p>
</details>

这样，即使发生一些不同步，你仍然能确保正确的接收数据进入正确的策略，并及时输出，而不会丢失消息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like have some cushion so that if some desynchronization happens you still have the same RX going into the right policy and coming out the other way in like in a timely manner we don't miss messages okay perfect so this this this makes a system fairly robust fairly high performant but there are few other relative problems which will happen with a system like this which we should also talk about so let's talk about logging logging is benign right we just log that hey the message is coming in we want to just log that this is the data that we got this is the output it's fine right well if we log too much at some point we have to send those logs to disk and that is very costly imagine what happens if your main control loop starts logging and decides just one day that hey I'm done I'll just start putting this on the on the hard disk well your robot would stay frozen for 30 milliseconds as we saw on a Raspberry Pi with an SD card so well that's bad how do we fix that well we just throw more CPU at it we just add another CPU and now all our logging is handled by that third CPU</p>
</details>

好的，这使得系统相当健壮且高性能。但对于这样的系统，还有一些其他相关问题也需要讨论。

### 其他问题：日志记录与优先级反转

让我们谈谈日志记录。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cool. Okay. So now we have like we're seeing how multi-threaded is slowly getting baked into the system.</p>
</details>

日志记录看起来是无害的，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How the robot is operating in a real-time deadline guarantee and how we are able to like avoid the pitfalls. Perfect.</p>
</details>

我们只是记录“消息正在进入”，我们想记录“这是我们收到的数据”，这是输出，这没问题，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's talk about something a little more low-level again like microcontrollers.</p>
</details>

但是，如果我们记录太多，在某个时刻我们就必须将这些日志发送到磁盘，而这代价非常高。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Microcontrollers are fairly simple and their logging doesn't actually go through a whole disk and file system way.</p>
</details>

想象一下，如果你的主控制循环开始记录日志，并且有一天决定“好了，我完成了，我要把这些都写入硬盘”，会发生什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They just log to some other peripheral that takes time.</p>
</details>

你的机器人可能会冻结30毫秒，就像我们在带有SD卡的**树莓派**（Raspberry Pi：一种小型单板计算机）上看到的那样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, for you art, it can be on the order of millisecond depending on how much we're logging.</p>
</details>

这很糟糕，我们如何解决这个问题呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, here's an interesting problem.</p>
</details>

我们只需投入更多的CPU，再添加一个CPU，现在所有的日志记录都由第三个CPU处理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's say we drop a packet and we log that hey, we dropped the packet.</p>
</details>

很酷。好的，现在我们看到多线程是如何逐渐融入到系统中的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, that log itself would take enough time that will drop the next packet and then you will keep drop because you drop the next packet, you log again.</p>
</details>

机器人如何在实时截止期保证下运行，以及我们如何避免这些陷阱。完美。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, basically, you just keep logging and you see a complete blackout on the canvas and it's very hard to debug like why am I getting logs and seeing packet drops but no data.</p>
</details>

让我们再次谈谈一些更底层的设备，比如微控制器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these are mysterious things that and in my experience like it's really good to like know about the pitfalls beforehand before we dive in the system and really figure out that hey this can also be a problem just a log statement.</p>
</details>

微控制器相当简单，它们的日志记录实际上不会通过整个磁盘和文件系统的方式进行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Finally there's also priority inversion.</p>
</details>

它们只是记录到一些其他外设，这需要时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in the kernel in the Linux kernel there are ways in which data is received by the user process.</p>
</details>

事实上，对于**UART**（Universal Asynchronous Receiver-Transmitter：通用异步收发传输器，一种串行通信接口），根据我们记录的数据量，它可能达到毫秒级别。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not direct like it takes a while between the interrupt the kernel process handling and then it goes to the user process.</p>
</details>

所以，这里有一个有趣的问题。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">In robotics, we tend to just boost the priority of all our processes so high that we start just blocking the kernel almost.</p>
</details>

假设我们丢弃了一个数据包，并记录下“嘿，我们丢弃了数据包”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like if the kernel doesn't run, we won't get the data.</p>
</details>

那么，这个日志本身就会花费足够的时间，导致下一个数据包被丢弃，然后你会因为丢弃了下一个数据包而继续记录，如此循环。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we're trying to get the data and we're blocking the very thing that will give us the data.</p>
</details>

所以，基本上，你只是不断记录，然后在CAN总线上看到一片空白，这使得调试变得非常困难，比如“为什么我看到日志和数据包丢失，却没有数据？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, this is inversion in action.</p>
</details>

这些都是神秘的问题，根据我的经验，在深入系统之前了解这些陷阱，并真正弄清楚“嘿，仅仅一个日志语句也可能成为问题”，是非常有益的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it will see your system again drop out for like seconds almost at a time.</p>
</details>

最后，还有**优先级反转**（Priority Inversion：高优先级任务被低优先级任务阻塞的现象）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again, this is something we we fix by just making sure we know the parts of the pipeline.</p>
</details>

在**Linux内核**（Kernel：操作系统的核心部分，管理系统资源）中，用户进程接收数据的方式并非直接的，它需要经过中断、内核进程处理，然后才到达用户进程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we fix the right priorities and we make sure that our whole system as a whole like it works together well.</p>
</details>

在机器人领域，我们倾向于将所有进程的优先级提升得非常高，以至于几乎阻塞了内核。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is how like software and robotics have to work together.</p>
</details>

如果内核不运行，我们就无法获取数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have to talk about hardware the various profiling the various priority stuff and actually just take a recap from the top.</p>
</details>

但我们正在尝试获取数据，却阻塞了那个能给我们数据的关键部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we went over pipeline.</p>
</details>

这就是优先级反转的实际表现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We saw how to reduce cycle time beat how the communication delays.</p>
</details>

它会导致你的系统再次停顿，有时甚至长达数秒。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">We saw how synchronization can actually cause some unexpected jitter which are hard to diagnose.</p>
</details>

同样，我们通过确保了解流水线的各个部分来解决这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Could be the policy, could be the system.</p>
</details>

我们设置正确的优先级，并确保整个系统作为一个整体能够良好协同工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we want to make sure that that doesn't happen.</p>
</details>

所以，这就是软件和机器人技术必须协同工作的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Logging strategies so that we don't block the system while we're trying to tell the user that hey this is happening.</p>
</details>

我们必须讨论硬件、各种性能分析、各种优先级问题，并对之前的内容进行回顾。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And finally priority inversion to avoid starvation.</p>
</details>

### 总结

我们回顾了流水线技术。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's how we start designing high performance robotic systems at least on a very basic level.</p>
</details>

我们看到了如何减少循环时间，以及如何应对通信延迟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's my talk for today. And thank you so much for being here listening.</p>
</details>

我们还看到了同步问题如何导致难以诊断的意外抖动，这可能是策略问题，也可能是系统问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">[Music]</p>
</details>

所以我们必须确保这种情况不会发生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"></p>
</details>

我们讨论了日志记录策略，以避免在尝试告知用户系统状态时阻塞系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"></p>
</details>

最后，我们探讨了优先级反转，以避免资源饥饿。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"></p>
</details>

这就是我们至少在非常基础的层面上，开始设计高性能机器人系统的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"></p>
</details>

这就是我今天的演讲。非常感谢大家的聆听。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"></p>
</details>