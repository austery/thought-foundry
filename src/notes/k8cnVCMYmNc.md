---
author: AI Engineer
date: '2026-01-12'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=k8cnVCMYmNc
speaker: AI Engineer
tags:
  - ai-agents
  - distributed-systems
  - fault-tolerance
  - workflow-orchestration
  - software-architecture
title: OpenAI + Temporal：构建高可用、生产级的 AI 智能体
summary: 本视频由 Temporal 开发者倡导者 Cornelia Davis 主讲，探讨了如何结合 OpenAI Agents SDK 与 Temporal 构建具备“持久性”的生产级 AI Agent。通过引入 Temporal 的工作流引擎，开发者可以确保 Agent 在面对网络中断或进程崩溃时，能够自动恢复状态并继续执行，避免重复消耗 Token。视频深入解析了 Activity 和 Workflow 等核心抽象，并演示了微智能体编排与移交的实现方式。
insight: ''
draft: true
series: ''
category: ai-application
area: tech-engineering
project: []
people:
  - Cornelia Davis
companies_orgs:
  - OpenAI
  - Temporal
  - VMware
  - Uber
products_models:
  - OpenAI Agents SDK
  - Temporal Cloud
  - Cloud Foundry
  - Kubernetes
  - Pydantic AI
media_books: []
status: evergreen
---
### 嘉宾背景与 Cloud Foundry 往事

**Cornelia Davis**: 我稍后会做自我介绍，但首先我想了解一下大家。如屏幕所示，这里有两个品牌：一个是 **OpenAI Agents SDK**，另一个是 **Temporal**。我在 Temporal 工作。我想知道，今天在座的各位有多少人正在使用 OpenAI Agents SDK？

<details>
<summary>Original English</summary>

**Cornelia Davis**: I'll introduce myself in just a moment, but I'd like to get to know a little bit about you. So, you know, you can see that there's two brands up on the screen here. There's OpenAI agents SDK in particular, and there's Temporal. I work for Temporal. I'll tell you more about myself in just a second. Um, I'm curious, how many folks are using the OpenAI agents SDK today?

</details>

**Cornelia Davis**: 看起来大约有四分之一的人在用。那么其他**智能体框架（Agentic Frameworks）**呢？人数也差不多。看来还有相当一部分人尚未开始使用智能体框架，我会带大家了解一下。下一个问题：有多少人在使用 Temporal？

<details>
<summary>Original English</summary>

**Cornelia Davis**: Okay, about a quarter of you. Any other agentic frameworks? Okay, about the same set of you. So, it looks like there's quite a number of you who are not using an agent framework just yet. So, I'll teach you a little bit about that. Okay, next question. How many folks are doing anything with temporal?

</details>

**Cornelia Davis**: 人数不多，太棒了，我可以教大家一些新东西。今天我们将讨论这两种技术。我会分别介绍它们，但重点会放在它们的结合上。剧透一下：Temporal 和 OpenAI 合作开发了这两个产品的**集成方案**，效果非常出色。

<details>
<summary>Original English</summary>

**Cornelia Davis**: Not very many. Awesome. I'm gonna get to teach you some stuff. Okay, cool. So, we're going to talk today about both those technologies. I'm going to talk about them each independently, but I'm going to spend a lot of time on them together. Spoiler, we actually have an integration between the two products that Temporal and OpenAI worked on together. And you'll see it's really quite sweet.

</details>

**Cornelia Davis**: 简单介绍一下我自己。我叫 **Cornelia Davis**，是 Temporal 的开发者倡导者。我职业生涯的大部分时间都花在**分布式系统**领域。我曾非常有幸在 2010 年代初期加入 **Pivotal**，参与 **Cloud Foundry** 的开发。我亲历了向**微服务架构**和分布式系统转型的浪潮。

<details>
<summary>Original English</summary>

**Cornelia Davis**: So, let me very briefly introduce myself. My name is Cornelia Davis. I'm a developer advocate here at Temporal. I think the bulk of my career has been spent in this distributed system space. So I was super fortunate to be at Pivotal working on Cloud Foundry from the early 2010s. So I was really there during the kind of movement toward microservice architectures, distributed systems, those types of things.

</details>

**Cornelia Davis**: 在座有 Cloud Foundry 的老兵吗？只有几位。对于不了解的人，Cloud Foundry 是市场上早期的**容器技术**。它最初是 **VMware** 的一个开源项目，在 Docker 甚至 Kubernetes 出现之前，它就已经在使用容器镜像、Linux 容器、容器编排和**最终一致性（Eventual Consistency）**等技术了。这段经历让我深刻理解了支持敏捷分布式系统的平台价值。

<details>
<summary>Original English</summary>

**Cornelia Davis**: Any Cloud Foundry folks in the room? Oh, just a few. So for those of you who don't know Cloud Foundry, Cloud Foundry was the early container technology out on the market. It was incubated as a open-source project at VMware and it used container images, Linux containers, container orchestration, eventual consistency, all of that stuff before Docker even existed and well before Kubernetes existed. So I was very fortunate that I was there at the beginning of that movement over toward platforms that supported this more agile distributed systems way of doing things.

</details>

### 什么是 AI Agent？

**Cornelia Davis**: 今天我们将讨论 OpenAI Agents SDK，然后我会概述 Temporal，并进行大量演示。我个人对 **生成式 AI（GenAI）** 应用与 **智能体（Agent）** 之间的区别定义是：当我们赋予 LLM **自主权（Agency）**，让 LLM 决定应用程序的执行流时，它就成为了智能体。OpenAI Agents SDK 等框架旨在让你更容易上手。

<details>
<summary>Original English</summary>

**Cornelia Davis**: What we're going to talk about today is the OpenAI agents SDK. Then I'm going to give you a temporal overview. I'll tell you that for me personally the distinction that I make between GenAI applications and then when they get to agents is when we give the LLMs agency—when the LLMs are the ones that are deciding on the flow of the application. That to me is what an agent is. And these frameworks like the OpenAI agents SDK are designed to make it easier for you to get started with those.

</details>

**Cornelia Davis**: 该 SDK 支持 Python 和 TypeScript。最基本的应用非常简单：定义一个智能体，给它命名并提供指令。当你调用 `runner.run` 时，它对应的是一个**智能体循环（Agentic Loop）**。它还支持移交（Handoffs）、护栏（Guardrails）和工具（Tools）。

<details>
<summary>Original English</summary>

**Cornelia Davis**: It's available in both Python and Typescript. And here is the most basic application. So what you see here is that we've defined an agent. We've given it a name and we've given it instructions. And anytime you see that runner.run, what that corresponds to is an agentic loop. It also has a lot of other options like handoffs, guardrails, and tools.

</details>

**Cornelia Davis**: 核心逻辑是：每次 `runner.run` 都会启动一个不断返回 LLM 的循环。LLM 调用后决定下一步行动。如果 LLM 说“我想调用某些工具”，框架就会执行这些工具，将输出传回 LLM 并继续。LLM 会根据系统指令自行决定何时完成任务。

<details>
<summary>Original English</summary>

**Cornelia Davis**: And really, this is the picture of what I'm talking about is that every one of those runner.runs basically has a loop that is constantly going back to the LLM. And after the LLM call, it decides to do things. And if the LLM, for example, has said, I want you to invoke some tools, it will go ahead and invoke those tools. And then it'll take the output from the tools and route it back to the LLM and keep going. And the LLM gets to decide when it's done following the system instructions.

</details>

### Temporal：分布式系统的持久性后端

**Cornelia Davis**: 既然很少有人了解 Temporal，我慢下来详细讲讲。**Temporal** 是一个已经存在五六年的开源项目，远早于现在的 GenAI 热潮。它专为分布式系统设计，而 AI 应用本质上就是分布式系统。

<details>
<summary>Original English</summary>

**Cornelia Davis**: Since very few of you know temporal I'm going to slow down a little bit here and tell you more about temporal. So, Temporal is an open-source project. It's been around for about five or six years. So, yes, it well predates the Gen AI boom that we're in. It's designed for distributed systems and what are AI applications if not distributed systems?

</details>

**Cornelia Davis**: 许多知名公司都在使用它：Snapchat 的每一次发送、Airbnb 的每一次预订、Pizza Hut 的订单都通过 Temporal 运行。甚至 OpenAI 的 **Codex** 和图像生成服务也运行在 Temporal 之上。它本质上是作为**后端服务（Backing Service）**的分布式系统，提供的是**分布式系统的持久性（Durability）**。

<details>
<summary>Original English</summary>

**Cornelia Davis**: Now, it's used in a lot of non-AI use cases. So, for example, every Snapchat goes through Temporal. Every Airbnb booking goes through Temporal. Pizza Hut, Taco Bell orders go through Temporal. OpenAI Codex runs on Temporal. OpenAI's image gen runs on temporal. What it is is distributed systems as a backing service. What it delivers is distributed systems durability.

</details>

**Cornelia Davis**: 这意味着作为开发者，你只需要编写“理想路径（Happy Path）”的业务逻辑。比如调用 LLM，处理输出，调用 API，再回到 LLM。你不需要编写逻辑来处理 LLM **限流**、下游 API 宕机或应用程序崩溃。我们为你处理这些。

<details>
<summary>Original English</summary>

**Cornelia Davis**: What that means is that you as the developer get to program the happy path. You get to program your business logic. And you don't have to build the logic in there that says what happens if the LLM is rate limited. What happens if my downstream API is down for a moment? What happens if my application crashes? We do it for you.

</details>

**Cornelia Davis**: 如果你使用 Temporal 为智能体提供持久性，当你在第 1350 次与 LLM 交互时应用崩溃了，没关系。我们记录了每一次 LLM 调用和返回，你**不会重新消耗 Token**。这就是在这个领域中“持久性”的含义。

<details>
<summary>Original English</summary>

**Cornelia Davis**: For example, if you have used temporal to lend durability to your agents, when you're on the 1,350 second turn to the LLM and your application crashes, no sweat. We have kept track of every single LLM call and return and you will not be reburning those tokens. That's what it means. That's what durability means in this space.

</details>

**Cornelia Davis**: Temporal 起源于 **Uber** 的一个名为 **Cadence** 的项目。Uber 几乎所有的应用都运行在 Cadence 上，因为开发者只需关注业务逻辑，所有的持久性都由系统自动处理。

<details>
<summary>Original English</summary>

**Cornelia Davis**: Temporal was a fork of a project that was created out of Uber called Cadence. Cadence pretty much every application running at Uber runs on Cadence and it's because they can program the happy path and all the durability is just taken care of for you.

</details>

### 核心抽象：Activity 与 Workflow

**Cornelia Davis**: 开发者需要了解两个基础抽象。首先是 **Activity（活动）**，它是具体的工作单元，通常是可能失败的外部调用（如 API 调用）。其次是 **Workflow（工作流）**，它是对这些 Activity 的编排。

<details>
<summary>Original English</summary>

**Cornelia Davis**: The two foundational abstractions that you need to know about as a developer is you need to know about an activity. And an activity is just a chunk of work. This is work that either is going to make external calls. What we call those orchestrations is workflows.

</details>

**Cornelia Davis**: 当你把两者结合时，魔法就发生了。你可以指定**重试策略（Retry Policy）**，比如指数退避或无限重试。你不需要在代码里写重试逻辑，只需配置一下，Temporal 就会自动执行。此外，所有的通信都是通过**队列（Queues）**完成的，这让单体应用自然地变成了分布式系统，你可以轻松扩展。

<details>
<summary>Original English</summary>

**Cornelia Davis**: What happens when you put activities and workflows together, that's where the magic really happens. You specify in your workflow logic the retry configuration. You don't have to implement the retry logic. It just happens for me. Every single time you call into an activity, all of that is facilitated over cues so that what looks like just a single monolithic application is already turns into a distributed system.

</details>

**Cornelia Davis**: 另一个核心功能是**状态管理**。我们通过记录应用执行的每一个步骤来跟踪进度，这本质上是**事件溯源（Event Sourcing）**。如果出错了，系统会通过运行事件历史记录，从中断的地方重新开始。

<details>
<summary>Original English</summary>

**Cornelia Davis**: One of the things that we do as well is we keep track of where you are in the execution of your application. We do that by recording the state. It's basically event sourcing. We store all of that state so that if something goes wrong, it will pick up where it left off because we will just run through the event history and pick up where we left off.

</details>

### 演示：构建具备持久性的 Agent

**Cornelia Davis**: 让我们看代码。在我的第一个演示中，我定义了两个 Activity：调用 OpenAI API 和执行工具。在 Python 中，你只需要使用 `@activity.defn` 装饰器。

<details>
<summary>Original English</summary>

**Cornelia Davis**: Let's look at the code. Here, of course, what we're doing is an agentic loop. So my activities are going to be call the OpenAI API and invoke some tools. So let's look at the first one and you'll see how simple it is. And here is that annotation. This is Python. So you can see here that we just have an activity decorator.

</details>

**Cornelia Davis**: Workflow 的逻辑也很直观。它包含一个 `while True` 循环，不断执行 LLM Activity。如果 LLM 决定调用工具，我们就处理函数调用，并将结果添加到对话历史中。这里我使用了 Temporal 的**动态活动（Dynamic Activity）**功能，允许根据名称动态查找并调用工具。

<details>
<summary>Original English</summary>

**Cornelia Davis**: The workflow is also pretty darn straightforward. You can see that I have a while true. We're just looping on the LLM. And if the LLM makes the decision to do so, we're going to call tools. In order to invoke the LLM, I execute that activity. Temporal has something called a dynamic activity. The dynamic activity allows you to call an activity by name, but that activity is dynamically found at runtime.

</details>

**Cornelia Davis**: 现在我运行这个智能体并问它：“加州有天气预警吗？”你可以看到它调用了 `get_weather_alerts` 工具。在 Temporal UI 中，你可以清晰地看到每一个 Activity 的执行过程：先调用 LLM，再调用工具，最后将结果传回 LLM。

<details>
<summary>Original English</summary>

**Cornelia Davis**: Now let me show you this in action. Let's say are there any weather alerts in California? And so we're going to start. And you can see here that it said, oh, I made a call to get weather alerts. In the temporal UI, you can see each one of those activities that I called.

</details>

### 应对故障：Temporal 的状态恢复能力

**Cornelia Davis**: 现在展示最精彩的部分。我再次运行智能体，但在它运行中途，我直接按下 `Ctrl+C` **杀掉进程**。此时没有 Worker 在运行，智能体完全停滞了。

<details>
<summary>Original English</summary>

**Cornelia Davis**: I want to show you one other thing. I'm going to run this again. Now I'm going to come up here and I'm going to control C. No workers running. My agent is not running. It's not running at all.

</details>

**Cornelia Davis**: 在 Temporal UI 中，你会看到它卡在了某个步骤。如果这是普通的 Python 程序，一切都丢了。但我现在**重新启动 Worker**，看！它立即从中断的地方继续运行了。虽然进程被杀掉，内存清空了，但 Temporal 通过事件溯源重建了应用状态。这就是我所说的“持久性”。

<details>
<summary>Original English</summary>

**Cornelia Davis**: And this is going to give you the clearest picture of what I mean by durability is that I have this agent running and now it's stuck. I'm going to come back over here and I'm going to restart the worker. And what we should see happen is, oh, sure enough, it keeps going. So, it picked up where it left off. It did that through event sourcing.

</details>

**Cornelia Davis**: 这种模式对于 **人机协同（Human in the Loop）** 非常强大。如果一个步骤需要等待用户输入，可能需要几小时甚至几天。在 Temporal 中，你只需像编写普通同步代码一样等待，Worker 会自动释放内存，等用户输入回来时再重新恢复状态。你不再需要担心物理进程，进程变成了逻辑实体。

<details>
<summary>Original English</summary>

**Cornelia Davis**: This is particularly cool when you do things like human in the loop. With temporal, you don't have to figure that out. You just code it as if that process. It'll take it out of active memory, and after days or weeks, when the user comes back and gives you that input, it just reconstitutes memory the way that it was when it was waiting for the user and continues on. It is so freeing to realize that I don't have to think about physical processes anymore.

</details>

### 微智能体（Micro-agents）与编排模式

**Cornelia Davis**: OpenAI Agents SDK 倾向于构建许多小的、独立的智能体，然后将它们编排在一起。我非常喜欢 **微智能体（Micro-agents）** 这个词，就像当年的微服务一样，它能让我们更灵活地扩展和部署。

<details>
<summary>Original English</summary>

**Cornelia Davis**: The OpenAI agents SDK the kind of paradigm that they use there is to build lots of small agents that have their own independent agentic loops and then orchestrate them together. And by the way, I just have to say I love the term microagent. Microservices have proven themselves to be very valuable. I think we're going to see a very similar paradigm when it comes to building AI agents.

</details>

**Cornelia Davis**: 编排有两种方式：一种是“纯代码”模式，你运行一个智能体，获取结果，再传给下一个；另一种是 OpenAI 特有的 **移交（Handoffs）**。在移交模式下，你定义一个智能体可以移交给另一个智能体。这实际上是在同一个智能体循环中切换**上下文（Context）**。Temporal 完全支持这种移交机制。

<details>
<summary>Original English</summary>

**Cornelia Davis**: There's two ways that you can orchestrate them together. The just code is really simple. You execute an agent, get back a result and pass that result into the next agent. The second way is called handoffs. When you do a handoff what you're effectively doing is just changing the context of the agentic loop. So this works exactly. So temporal is totally handoff.

</details>

### 总结与资源分享

**Cornelia Davis**: 总结一下，我们将 Temporal 的持久性带到了原本不具备该特性的智能体框架中。除了 OpenAI，**Pydantic AI** 也已经将 Temporal 集成到了他们的框架中，还有更多框架正在集成中。

<details>
<summary>Original English</summary>

**Cornelia Davis**: Summing it up, this idea of bringing durability to these otherwise non-durable agent frameworks is a very popular one. So after we did OpenAI agents SDK, Pydantic themselves integrated temporal into their agent framework. There's more coming.

</details>

**Cornelia Davis**: 如果你想深入了解，可以查看我们的 **AI Cookbook**。里面有很多模式的实现，包括今天演示的智能体循环。我们还在招聘 AI 应用工程师和开发者倡导者，如果你感兴趣，欢迎来找我和 Johan 交流。谢谢大家！

<details>
<summary>Original English</summary>

**Cornelia Davis**: If you want to get started, you can go to our documentation and find AI cookbook. We have an AI cookbook that implements a bunch of patterns. My team is hiring for folks on these AI applications of temporal. We're looking for developer advocates too. Well, thank you so much.

</details>