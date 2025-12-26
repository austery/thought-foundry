---
area: "tech-engineering"
category: technology
companies_orgs:
- OpenAI
- DeepMind
date: '2025-11-24'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Claude Sonnet 4.5
- Gemini Flash
project: []
series: ''
source: https://www.youtube.com/watch?v=flf_IKnFYnE
speaker: AI Engineer
status: evergreen
summary: Pydantic的Samuel Colvin演示了Pydantic AI、Temporal和Logfire如何协同工作，以构建持久化、容错的AI智能体工作流。他通过一个“20个问题”游戏和一个“深度研究”智能体案例，详细解释了Temporal的确定性工作流和活动机制，以及如何在系统崩溃后无缝恢复。此外，他还介绍了Pydantic
  Evals进行模型评估，并预告了即将推出的Pydantic AI Gateway平台，强调了在复杂AI应用中实现可靠性和效率的重要性。
tags:
- ai-agent
- code
- durable-execution
- history
- llm
title: Pydantic AI与Temporal：构建持久化、容错的AI智能体工作流
---
### Pydantic AI、Temporal与Logfire简介

大家好，我是来自Pydantic的Samuel，今天我将演示**Pydantic AI**（一个用于构建AI智能体的库）、**Temporal**（一个分布式工作流编排平台）和**Logfire**（一个用于可观测性的工具）。我还会介绍**Pydantic Evals**（一个用于评估大型语言模型性能的工具）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi, I'm Samuel from Pantic and today I'm going to give a demo of Pyantic AI temporal and Pantic logfire. I'll also cover Pyantic evals.</p>
</details>

在Pydantic AI中，我们支持Temporal和**Deboss**（另一个持久化执行框架）这两种持久化执行框架。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have in Pantic AI support for temporal and Deboss to durable execution frameworks.</p>
</details>

我们实际上正在增加更多支持；我认为我们已经收到了大约五个添加其他持久化执行或工作流编排后端的拉取请求。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're actually adding a bunch more. I think we've had something like five pull requests to add other durable execution or like workflow orchestration backends.</p>
</details>

但目前主要是这两种，我认为可以公平地说，Temporal是这个领域的主要参与者，它们是这种执行方式的领导者。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But at the moment it's it's these two. And I think it's fair to say temporal are like the big incumbent in this space and they're they're kind of I guess leaders leaders in how you do this.</p>
</details>

为了演示这一点，一个简单的例子是，我向一个**LLM**（Large Language Model: 大型语言模型）提问，它会回复，这通常都能正常工作，我们不需要持久化执行组件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To demonstrate this a simple example of like I go ask an LLM question it replies mostly just works and we don't need the durable execution component.</p>
</details>

但是，一旦我们进入长时间运行的工作流，问题就真正出现了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, but once we get into longer running workflows, that's where it really becomes a problem.</p>
</details>

特别是在我们已经进行了足够的计算，不想丢失它，或者我们已经在这项计算上花费了足够的时间，真的不想让用户从头开始的时候。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In particular, where we've done enough compute that we don't want to lose it or we've spent enough time on that compute that we really don't want to have to start again for the user.</p>
</details>

例如，我认为OpenAI公开表示他们使用Temporal进行深度研究，而且我认为其他一些LLM深度研究也做同样的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's what for example I think OpenAI it's I think it's public that OpenAI use temporal for their um deep research and I think some of the other LLM deep research do the same thing.</p>
</details>

所以，我将从一个“玩具”示例开始，然后转向一个更像是深度研究的示例，事实上，就是一个深度研究示例。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'll I'll start with a kind of toy example and then I'll move on to a more deep research type example. in fact a deep research example.</p>
</details>

但在我们深入研究之前，让我先运行一个没有Temporal的示例。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But before we get into that, let me let me run this example without.</p>
</details>

### “20个问题”游戏：一个“玩具”示例

这是一个由两个智能体玩“20个问题”游戏的例子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is a uh two agents that play um 20 questions.</p>
</details>

所以，它们不仅仅是给出“是”或“否”的答案，还可以给出更多细节，比如“是，有点”、“不完全是”、“不，完全错误”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so instead of just a yes no answer, they get to give a little bit more detail like yes, kind of not really, no, completely wrong.</p>
</details>

之所以这样设计，是因为我厌倦了等待它们花费大量时间才能成功地只用“是”或“否”来回答。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um that was because I was getting bored of waiting for them to take ages to succeed on the with the just the yes no.</p>
</details>

我们有一个回答智能体，它运行一个相对较小的模型**Hiku 3.5**，因为我直到大约一小时前才知道4.5版本已经发布。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we have an answer agent which is runs a relatively small model Hiku 3.5 because I didn't know 4.5 came out until about an hour ago.</p>
</details>

它基本上会接收一个问题，并用这些答案中的一个来回答，然后它会将其上下文（即你正在寻找的秘密对象，在这个例子中是“土豆”）添加到其上下文中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And and this basically takes a question and answers yes well with with one of these answers and it it gets added into its context the the like secret object that you're looking for um which in this example is a potato.</p>
</details>

然后我们有提问智能体，或者说玩家智能体，它对它将要做的事情有更多的上下文。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, and then we have the um questioner agent or the player agent has a bit more context on what it's going to go and do.</p>
</details>

你不需要阅读所有这些内容，这些代码现在是公开的，它是一个拉取请求，但我稍后会合并它，你应该能理解其思想。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You don't need to read read through all of this stuff. This code is is public now. It's a pull request, but I'll I'll merge that afterwards, but you should get the idea.</p>
</details>

提问智能体提问的方式是调用一个工具“ask a question”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and the way that the questioner agent gets to ask its questions is by calling a tool, ask a question.</p>
</details>

在这个工具内部，我们运行另一个智能体，即回答智能体，来决定这个问题的答案，然后我们进行回复。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Inside that tool, we run the other agent, the answer agent to basically decide the answer to this question, and then we respond.</p>
</details>

它需要一点时间来运行。你可以看到，在这个例子中，它运行得很快。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it takes a little bit of time to run. You can see in this case, it succeeded pretty quickly.</p>
</details>

有时令人惊讶的是，即使是这些非常简单的问题，即使是非常智能的LLM也会完全困惑，走上奇怪的轨道，变得非常困惑。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sometimes it it's amazing how even these very simple questions, even very intelligent LLMs get themselves completely confused and go down some weird track and and like get very confused.</p>
</details>

但你可以看到，在上次运行中，它问了一堆问题，最终问到“这是水果还是蔬菜？是水果吗？不是。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But you can see in the last run that it asked a bunch of questions, got down to like is this a fruit or vegetable? Is it a fruit? No.</p>
</details>

所以它知道是蔬菜，“是橙色的吗？”然后它找出了答案是土豆。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it knew it was a vegetable, is it orange? And it worked out the answer was was potato.</p>
</details>

但显然，它又在运行了。我不知道它会采取多少步。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But obviously and here it is running again. I don't know how many steps it's going to take.</p>
</details>

有时可能需要多达50步才能正确回答这个问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sometimes it can take up to like 50 steps to get this question right.</p>
</details>

显然，问题在于如果这个过程因为系统内部不可靠的端点，或者因为我们在云端运行并且**Kubernetes**（一个开源的容器编排系统）决定进行扩缩容或其他任何原因而崩溃，那么我们再次运行它时，就必须从头开始。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And obviously the problem is if this dies either because we have some unreliable uh endpoint within our system or because we're running in the cloud and Kubernetes decides it wants to scale or whatever it might be.</p>
</details>

这在这种情况下是有问题的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we run this again, we obviously have to start from scratch. That is problematic in this case.</p>
</details>

但你可以想象，随着任务越来越长，重新启动它会变得越来越麻烦。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but you can imagine as the tasks get longer and longer just restarting it gets more and more problematic.</p>
</details>

所以，我认为关于这个“20个问题”示例的另一件事是，尽管它很容易理解，感觉像个玩具，但它实际上直接等同于一个深度研究案例。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um I think the other thing to say about this this like um 20 questions example is although it's pretty simple to understand and it feels like a toy, it is actually directly equivalent to a deep research case.</p>
</details>

在这种情况下，智能体实际上是在进行一项任务，去寻找一个问题的答案，它需要向“花园底部的巨魔”提问，以获得下一个谜题的答案，从而到达下一个终点，对吧？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Where effectively the agent is is like going off on a quest to go and find an answer to a question where it needs to ask the like you know troll at the bottom of the garden the other the like question to the next riddle to get to the next endpoint, right?</p>
</details>

深度研究实际上就是这个“20个问题”游戏，只是你的中间步骤可能是网络搜索（web search）或**RAG**（Retrieval-Augmented Generation: 检索增强生成）或其他任何东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like deep research is effectively this 20 questions just with like web like web search or rag or whatever it might be is your intermediate steps.</p>
</details>

### 引入Temporal：构建持久化智能体

那么，让我们把这个“20个问题”游戏变成一个**持久化智能体**（Durable Agent: 能够在故障后恢复状态并继续执行的智能体）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's turn that 20 questions into a durable agent.</p>
</details>

为了简单起见，这大部分代码是相同的。我实际上是复制了它，但你可以看到我们有我们的回答智能体。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so this is mostly the same code for simplicity. I've actually copied it here but you see we have our answer agent.</p>
</details>

我们需要将其封装在**Temporal Agent**中，这会给我们另一个行为类似于Pydantic AI智能体的东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We need to wrap it in this temporal agent which gives us another thing that behaves like an agent like a pantic AI agent.</p>
</details>

所以它也是抽象智能体的一个子类。我们对提问智能体也做同样的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's also a subclass of abstract agent. We do the same with our questionnaire agent.</p>
</details>

为了保持简单，我们没有做关于在上下文中传递答案的相同操作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To keep things simple, we aren't doing the same um stuff about passing around the answer in context.</p>
</details>

我们只是将答案硬编码到回答智能体的系统提示中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've just hardcoded the answer into the system prompt here for the for the answer agent.</p>
</details>

但除了添加Temporal封装器之外，你也可以像我稍后将展示的那样，稍后应用持久化执行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But apart from these like adding the temporal wrappers, you can as I will show later just um apply durable execution later.</p>
</details>

这就是Temporal发挥作用的地方。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But here's where the the temporal bit comes in.</p>
</details>

我不是Temporal的销售人员。虽然他们做的底层工作很棒，但我确实认为他们的一些Python抽象有点丑陋。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm not a salesperson for temporal. And although the underlying stuff they do is amazing, I do think some of their Python abstractions are kind of ugly.</p>
</details>

但无论如何，Temporal的原则是你有**工作流**（Workflows: 业务逻辑的定义）和**活动**（Activities: 工作流中执行的独立任务）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But anyway, the the principle of temporal is that you have workflows and activities.</p>
</details>

工作流需要完全是**确定性**的（Deterministic: 每次执行相同输入都会产生相同输出），而活动则需要做任何非确定性的事情，特别是**IO**（Input/Output: 输入/输出操作）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And workflows need to be entirely deterministic and activities then need to do anything that is non-deterministic like IO in particular.</p>
</details>

所以，你基本上可以在工作流内部做任何事情，除了IO和调用随机数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can basically do anything inside a workflow other than IO and calling random.</p>
</details>

如果满足这个条件，那么你就有了一个确定性系统。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you're if if that's the case, then you have a deterministic system.</p>
</details>

你可以认为Temporal在后台所做的是，它在运行工作流时，基本上会记录每个运行的活动，包括其输入和输出。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what you can think of what temporal is doing in the background as it's running that workflow and it's basically recording the every activity that runs and both the the inputs to that and the outputs.</p>
</details>

因此，如果你想从头到某个特定点重新运行它，它基本上可以插入这些答案。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so if you want to rerun it from like from the beginning to a certain point, it can basically plug in those answers.</p>
</details>

我将展示它看起来像什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'll show what that looks like.</p>
</details>

这就是我们定义工作流的方式。这里的活动是隐式的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is how we define our workflow. The activities here are implicit.</p>
</details>

关键是这个Temporal智能体会负责将所有调用LLM所需的IO操作转换为后台活动，包括工具调用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The point is that this temporal agent takes care of turning all of the IO that you need to do to call an LLM into activities in the background, including tool calls.</p>
</details>

OpenAI声称支持Temporal，但他们不支持将工具调用作为活动，这对我来说有点像“巧克力茶壶”（指中看不中用）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, OpenAI claim to have temporal support, but they don't support tool calls as activities, which to me makes it slightly a chocolate teapot.</p>
</details>

也就是说，如果没有工具调用，这些东西实际上就没有什么意义。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like, there's actually no point in having any of these things without without tool calling or little little point.</p>
</details>

但我们像这样定义工作流。我认为你大部分时间可以直接复制粘贴他们的定义。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we define our workflow like this. I think you can for the most part just copy paste their their definitions of how to do it.</p>
</details>

这里我们有我们的“游戏”机制。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here we have our play mechanism.</p>
</details>

这里的关键是我们将连接到Temporal服务器，它将记录我们任务或智能体执行时的状态，并能够恢复等。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The point here is we're going to we're going to connect to the temporal server which is what's going to record the state of our task or our agent as it's executing and be able to resume and stuff.</p>
</details>

我在这里本地运行着Temporal。这只是Temporal的开源版本，它作为单独的进程运行，我可以重新启动它来清除状态，这就是我们连接到本地主机的原因。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have temporal running locally here. This is just the open source version of temporal which runs as a separate process and I can restart that to kind of kill the state and that's why we're connecting to local host.</p>
</details>

在生产环境中，你会使用Temporal的云服务，这就是他们赚大钱的原因。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In production you use temporal's cloud. that's why they make so much money.</p>
</details>

这里我们运行工作者。这是我们实际启动工作流的地方。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and here we we run the worker. This is where we're actually going to kick off our workflow.</p>
</details>

通常，我们只需使用`execute workflow`来启动工作流。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In general, we just kick off our workflow with execute workflow.</p>
</details>

我们传入要运行的工作流，传入输入。在这种情况下没有输入，因为我们只是开始。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We pl pass in the the workflow that we want to run. We pass the inputs. There aren't any inputs in this case because we just start.</p>
</details>

所以这里没有任何输入。然后它就会运行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, there aren't any here. And it will then go and run.</p>
</details>

因此，如果我运行它，你就会看到它开始执行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, if I run this, we will you will see it start to to execute.</p>
</details>

你会看到它正在运行。需要注意的几件事是，有一些日志消息。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You'll see it running. The only couple of things to note, there's a couple of log messages.</p>
</details>

啊，我们立即遇到了这个“broken”异常。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ah, and we immediately have this exception broken.</p>
</details>

那是因为为了模拟系统内部不可靠的情况，我在工具中添加了20%的几率会发生故障。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that was because to simulate some system that's unreliable inside the tool I added 20% of the time it's going to it's going to break.</p>
</details>

你会看到Temporal立即处理了故障后的继续执行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What you will see is that temporal has immediately taken care of continuing after that.</p>
</details>

所以即使发生了故障，它也会继续运行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So even though this broke, it will continue to run.</p>
</details>

我可能把20%的故障率设置得太高了，因为它现在总是失败，但它实际上会继续处理这些运行时错误，并继续正常运行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I may have set 20% to be too high um because it's now failing all the time, but it's actually going to continue and deal with those runtime errors and just continue to operate absolutely fine.</p>
</details>

然而，我想我刚才把20%调得太高了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let me However, I think I dialed up 20% too high just before.</p>
</details>

所以，我将看看它是否会继续运行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm going to actually see if this is going to continue to operate.</p>
</details>

显然，当你进行演示时，一切都会突然停止。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Obviously, when you give a demo, everything suddenly grinds to a halt.</p>
</details>

有人最近说他们讨厌一切都按计划进行的演示，我说你永远不需要担心我会有这样的问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Someone recently said they hate demos where everything goes to plan, and I said you'll never need to worry about that with me.</p>
</details>

我不知道为什么它会完全停止。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I don't know why that has actually ground to a complete halt.</p>
</details>

我不知道是不是它只是反复失败。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't know whether that's it just repeatedly failing.</p>
</details>

我将在这里关闭Temporal服务器并重新启动它，这样我们就不会存储状态。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let me I'm going to kill temporal server here and restart it so that we don't have the state stored.</p>
</details>

我将清除这里并再次运行它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I will clear this and run it again.</p>
</details>

现在你应该会看到它大部分时间都能成功，10%的时间会失败。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you should now see it succeeding most of the time and failing 10% of the time.</p>
</details>

所以，是的，你现在看到它正在提问，偶尔会中断，但会继续。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So yeah, you see it now asking questions and occasionally breaking. Good timing, but continuing.</p>
</details>

这就是Temporal所做的事情之一。它只是执行重试逻辑，你可以在没有Temporal的情况下实现，但他们做得非常好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so that's one of the things Temporal does. It just does the like retry logic that is like you could implement without temporal, but they do it very nicely.</p>
</details>

但还有更强大的功能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But there are more powerful things.</p>
</details>

所以，假设这个正在运行的进程被Kubernetes杀死了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's say this process that's in the middle of running gets killed by Kubernetes.</p>
</details>

现在，我们到这里，然后我们杀死它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, so we go across here and we we just like kill it.</p>
</details>

进程被杀死了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Process gets killed.</p>
</details>

我没有向你展示的是，我还用**Logfire**（一个用于应用程序可观测性的工具）对它进行了检测。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, what I didn't show you is I also instrumented this with logfire.</p>
</details>

所以，如果我们查看我们的工作流，我们可以看到这里发生了什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if we look at our our workflow, we can see exactly what was going on here.</p>
</details>

我们可以看到这里发生了什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and we we can see what's going on here.</p>
</details>

所以我们有对**Claude**（Anthropic开发的一系列大型语言模型）的不同调用，然后我们正在运行活动，它又在运行另一个智能体。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have the different calls to claude and then inside that we have we're running the activity which is then running the um other agent.</p>
</details>

但特别是如果我们来到工作流的顶层开始，我可以获取工作流ID。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But in particular if we come to the top level start for the workflow I can take the the workflow ID.</p>
</details>

如果我们回到代码这里，你会看到我有一些代码，基本上允许我使用给定的恢复ID来继续工作流。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we come back over to code here you'll see I had some some code in here to basically allow me to continue with a given uh resume ID and to continue a workflow.</p>
</details>

现在，大部分情况下你不需要这样做。这只是为了演示。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now for the most part you wouldn't have to do this. This is just for the sake of the demo.</p>
</details>

如果我再次运行脚本，它会再次启动这个工作流，并并行运行两个。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I just reran the script again, it would kick off this workflow again and it would run the two in parallel.</p>
</details>

那看起来会非常混乱。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That would look really confusing.</p>
</details>

所以，我没有这样做，而是专门等待一个特定的工作流完成，这样你就可以看到发生了什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So instead of doing that, I'm I'm specifically hanging on a particular workflow to finish. So you can see what's going on.</p>
</details>

所以，如果我再次运行我的脚本，但我给它正在进行的工作流ID。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if I if I run my script again, but I give it the workflow that was ongoing.</p>
</details>

现在你看到它已经迅速前进到第六个问题，并且正在继续运行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now you see it's already whizzed forward to question six and it's continuing to operate.</p>
</details>

所以，我们让它基本上在不向实际智能体代码中添加任何恢复代码的情况下恢复了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we've got it to basically resume without having to add any resume code anywhere in our actual agent code.</p>
</details>

我们只是设置了Temporal，它就工作了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We just set up temporal and it works.</p>
</details>

如果你查看Logfire，你可以看到到底发生了什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can see exactly what's happened if you um look at logfire.</p>
</details>

你会看到，对LLM的那第一批调用在大约5毫秒内就响应了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What you will see is that that whole that first bunch of um calls to the LLM responded in like 5 milliseconds.</p>
</details>

所以，这些实际上并没有发送给LLM。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, these were not actually sent to the LLM.</p>
</details>

Temporal只是返回了它已经为这些情况缓存的结果。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Temporal just returned the result, the kind of cached result that it already had for each of these cases.</p>
</details>

所以我们能够有效地迅速前进到它继续调用LLM的点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're able to effectively zoom forward to the point where it then continues to to call the LLM.</p>
</details>

这就像你在所有进行IO的地方都设置了缓存，这样你就可以运行你的代码。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's it's as if you've gone through everywhere that you're doing IO and you've set up uh caching on each individual call so that you can run your code.</p>
</details>

我看到有些人点头，这让我对解释这个感觉好多了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh I see some people nodding which is making me feel a bit better about explaining this.</p>
</details>

但我们不需要进行推理，我们不需要等待时间。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we don't have to do the inference. We don't have to wait the time.</p>
</details>

我们基本上可以运行我们的工作流代码，它通常非常快，因为它没有IO，只是程序性的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can basically run our workflow code that's generally very fast because it's no IO. It's just procedural.</p>
</details>

它会立即不断获取结果，直到它需要继续的点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and it will just keep getting results instantly until it gets to the point where it needs to needs to continue.</p>
</details>

你看到在这种情况下，它完全困惑了，正在思考这个东西是不是沙拉碗。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you see in this case, it's got itself completely confused and it's off um wondering about whether this thing is a salad bowl.</p>
</details>

所以，你看到LLM有时表现很好，有时表现很糟糕。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you see how sometimes the LLM does well, sometimes it does does terribly.</p>
</details>

我将让它继续运行，看看它是否——你看，它知道这与食物有关，但它真的困惑了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I'm going to actually I'll leave that running to see whether it you see it's it knows it's related to food, but it's got itself really confused.</p>
</details>

### 模型评估：Pydantic Evals的洞察

我只想说，你可能会感兴趣，就在这之前，我一直在思考不同的模型会如何表现。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I will just say as as it might interest you just before this I was wondering how the different models would perform.</p>
</details>

所以我使用**Pydantic Evals**（Pydantic AI中的一个评估工具）对这些不同的案例进行了一些评估。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I I ran some evals with padantic evals on these different cases.</p>
</details>

你可以在这里看到，屏幕上有点难读，但有**GPT 4.1**（OpenAI的语言模型）、**Gemini**（Google的语言模型）和**Claude Sonnet 4.5**（Anthropic的语言模型）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can see here we have it's a bit hard to read on the screen but uh GPT 4.1 Gemini and Claude Sonnet 4.5.</p>
</details>

你可以看到每个案例的不同断言，它们是通过还是失败了，以及平均成本。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can see the different assertions for each case whether they passed or failed here and you can see the the average cost.</p>
</details>

你可以看到Gemini便宜得多，也快得多。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see Gemini was way way cheaper, way way faster.</p>
</details>

在某个地方，如果我们看一个单独的案例，我们应该有一个关于成功所需步数的指标。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And somewhere we should have, if we look at an individual case, we have a a metric for how many steps it took to succeed.</p>
</details>

我想也许我们需要滚动一下。是的，问题计数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think maybe we have to scroll over. Yeah. Question count.</p>
</details>

你可以在这里看到，Gemini每次都快得多。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see here Gemini was way quicker each time.</p>
</details>

我后来检查结果发现，Gemini之所以快得多，回答得更快，是因为它只是编造了一个错误的答案，而我没有检查。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I discovered subsequently having having checked the results that actually the reason Gemini is way faster and answers much more quickly is it just invents an answer that's wrong and I wasn't checking it.</p>
</details>

所以，这还不完美，但这绝对是评估的一个有趣案例，可以找出哪个模型实际上更好，因为它们默认情况下肯定不是特别好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is not perfect yet, but like it's uh the the EV this is definitely an interesting case for evals and seeing and like working out which model is actually better because they're definitely not particularly good at it by default.</p>
</details>

但是，是的，在我天真的情况下，Gemini表现得更好，但这不具有代表性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But yeah, in my naive case, Gemini did way better, but that's not representative.</p>
</details>

无论如何，我将离开它，因为它已经进行了46步，但仍然无法找出那个东西是土豆。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Anyway, I'm going to leave that because it's got 46 steps in and it's still failing to work out that that thing's a potato.</p>
</details>

如果你愿意，我可以展示评估案例，但我认为查看深度研究案例可能更有趣，这是一个更具意义的持久化执行用例。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I can show the evals case if you want, but I think it might be more interesting to look at a deep research case, which is a kind of more meaningful example of where you would run durable execution.</p>
</details>

而且还可以并行执行，这也是Temporal开箱即用的功能之一，你无需编写任何代码。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and also doing stuff in parallel, which is also one of the things that like just works out of the box with temporal without you having to write any any code.</p>
</details>

### 深度研究案例：构建多智能体工作流

所以，这是我昨晚几个小时内快速尝试构建的深度研究。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is my very quick last night hours attempt at building deep research.</p>
</details>

我真心认为它和许多实际的深度研究系统一样好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I honestly think it's as good as lots of the actual deep research systems.</p>
</details>

我们定义了深度研究的计划，这实际上就是我们的深度研究计划。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have we define our plan for deep research and this is this is effectively our deep research plan.</p>
</details>

它有一个执行摘要，你将有效地将其输出给用户，说明我将要做什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it has an executive summary what you would effectively pump out to the user about what I'm going to go and do.</p>
</details>

然后我们有一个网络搜索步骤列表。我们这里最多有五个，这样就不会永远持续下去。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then we have a list of web search steps. We maximum we have a maximum of five here so it doesn't take forever.</p>
</details>

然后我们有分析指令。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we have analysis instructions.</p>
</details>

关键是，我认为这是今年AI领域的一大变化，回答了我之前在另一个Zoom会议上的问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the point is that like I think this is one of the big change in AI this year answering a bit the question I had on the other zoom.</p>
</details>

我认为我们已经从认为智能体（就其定义而言）——智能体有三个定义：AI定义是LLM在一个循环中调用工具；技术定义是**微服务**（Microservice: 一种软件架构风格）；然后是商业定义，即可以取代人类的东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think we've moved from thinking that like agents in the sense of so there are three definitions of agents. There is the like AI definition which is LLM's calling tools in a loop. There is the tech definition which is a micros service and then there is the business definition which is something that can replace a human.</p>
</details>

暂时忽略商业定义。如果你考虑AI和工程定义，我们今年年初认为，每个微服务中会有一个AI智能体，一个LLM在一个循环中调用工具。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um ignoring the business definition for a minute. If you think about the AI and the like engineering definitions, we thought at the beginning of this year you would have one AI agent, one LLM calling tools in the loop within each microser.</p>
</details>

我认为我们越来越多地认为智能体实际上是开发的“量子”（quantum），它们是微任务，你通过构建它们来形成大多数人所认为的智能体，即实际自主完成任务的东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think we've moved more and more to think that the agents are actually the kind of quantum of development. They are the the micro tasks that are doing that you build up to to form a like what most people would think of as an agent, something that actually goes and autonomously completes a task.</p>
</details>

所以我们的深度研究智能体实际上由多个智能体组成。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so our deep research agent is actually made up of multiple agents.</p>
</details>

我们有一个计划智能体，它带着一个提示出发，并返回一个实例化的结构化数据提取，它会给你一个Pydantic模型的实例，这就是你的运行计划。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have this plan agent which goes off with a prompt and it returns an instance structured data extraction gives you an instance of this pyantic model which is your plan to run it.</p>
</details>

然后你有搜索智能体，在这种情况下它可以访问搜索工具，或者我将展示在另一种情况下使用**Tavily**（一个AI驱动的搜索API），它在这种情况下使用更快的模型**Gemini Flash**。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then you have the search agent which has access in this case to search tool or I'll show using tavilli in the other case um which is using a a faster model gemini flash uh in this case.</p>
</details>

然后在这种情况下，我使用**Claude Sonnet 4.5**进行最终的分析阶段。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you're using in this case I'm using claude son 4.5 for the final analysis stage.</p>
</details>

所以我想这有点像人们谈论倾向于图（graphs）的时候。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I suppose this is a bit what people talk about when they're leaning towards graphs.</p>
</details>

我没有用图来构建它，尽管我可以，因为它不需要图。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I haven't built this in a graph although I could because it doesn't need a graph.</p>
</details>

它不够复杂，不需要图。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not complex enough to need a graph.</p>
</details>

持久化执行是一种更好的快照方式，但它对持久化执行有更细粒度的支持。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And durable execution is a way better way of getting snapshotting, but like much more granular support for for durable execution.</p>
</details>

我们添加了一个工具，允许分析智能体如果真的需要，可以进行更多的网络搜索。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We added a tool that allowed the analysis agent to do a bit more web search if it really wanted to.</p>
</details>

我不认为它会使用它，但这是实际的深度研究代码。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't think it uses it, but this is the actual deep research code.</p>
</details>

所以你可以看到它多么简洁。我们运行计划智能体，我们得到我们的计划。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can see how concise it is. We run the plan agent. We get back our plan.</p>
</details>

我们并行运行所有搜索智能体。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We run in parallel all of the search agents.</p>
</details>

所以，我们只是使用Python的**任务组**（Task Group: 用于管理一组并发任务）来运行所有这些。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we're just using a task group from Python to run all of these.</p>
</details>

我们获取这些结果，这些结果都将是不同搜索部分的文本结果。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We get those results, which will all be the text results of the different bits of search.</p>
</details>

我们使用**XML**（Extensible Markup Language: 可扩展标记语言）格式，基本上将所有这些数据粉碎成一大块相对可读的数据，供分析智能体使用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We use format as XML to basically smash all of that into a massive lump of reasonably readable data for the analysis agent.</p>
</details>

然后我们去运行智能体。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then we go off and run the agent.</p>
</details>

我们运行我相对定期向AI提出的销售问题，即“给我一份在伦敦使用Python的对冲基金列表”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we run the kind of question that I'm asking AI relatively regularly for sales, which is find me a list of hedge funds that write Python in London.</p>
</details>

如果我运行这个`UV run deep research`，我们会看到它开始运行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if I go and run this uh UV run deep research, we'll see it starting to churn away.</p>
</details>

我们可以在终端中看到Logfire的输出。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can see it in the terminal with logfire.</p>
</details>

但我们也可以来到Logfire这里。让我清除它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we can also come over here to log fire. Let me clear that.</p>
</details>

到这里底部，我们可以看到这个运行正在进行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um go to the bottom here and we can see this this run here as it's going on.</p>
</details>

它在九秒内运行了计划步骤，你可以看到所有搜索步骤都在并行进行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's it's run the plan step in nine seconds and you can see all of the search steps going on in parallel.</p>
</details>

一旦它们完成，它就会开始。你可以看到分析智能体刚刚开始。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once they've finished, it will start. You can see the analysis agent has just started.</p>
</details>

我们可以查看单独的搜索。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can look at the individual searches.</p>
</details>

所以，你会对发生了什么有一个很好的了解，它被问到的问题，它决定运行的查询，来自Medium、不同网站的大量数据，结构化数据，然后智能体也注入了大量的上下文，对吧？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you get a pretty good idea of what happened, the question it got asked, uh the queries it decided to run, bunch of data from medium, different sites, structured data, and then like the agent also bangs in quite a lot of context, right?</p>
</details>

所以这是我们大约10个并行搜索中的每一个。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is each individual one of our like 10 parallel searches.</p>
</details>

现在分析将带着所有这些输入运行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now the analysis is going to go and run with all of that input.</p>
</details>

你可以看到到目前为止，我们这次运行花费了8美分。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see so far we've sent spent 8 cents on this particular run.</p>
</details>

我们将看看它完成时会达到多少。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'll see what it gets to by the time it finishes.</p>
</details>

但显然，问题在于如果我现在杀死它，它就会停止，如果我想再次运行它，就必须从头开始。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But obviously the problem with this is if I kill this now, it's just going to die and I'd have to restart from the beginning if I wanted to to run it again.</p>
</details>

所以，当它运行时，让我开始向你介绍持久化执行的示例。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, while that churns away, let me start introducing you to the durable execution example,</p>
</details>

剧透一下，它会非常相似。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">spoiler, it's going to be pretty similar.</p>
</details>

我昨晚发现**Vertex SDK**（Google Cloud Vertex AI的软件开发工具包）有一个bug，这意味着你现在不能将它与Temporal一起使用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I discovered last night that there's a bug with the Vertex SDK. That means that you can't use it with temporal right now.</p>
</details>

所以我已经换成了OpenAI的响应，我正在使用Tavily而不是内置搜索。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I've swapped out uh I think we should fix that, or at least I'll be winging at uh Deep Mind today to go and fix that. So, I've switched it out to OpenAI responses here and I'm using Tavilli instead of the built-in search.</p>
</details>

是的，但除此之外，这都是非常相似的代码。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, but other than that, this is all pretty similar code.</p>
</details>

我可能可以直接从另一个模块导入代码。我只是决定复制它以保持简单。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I could have probably imported the code from the other module. I just decided to duplicate it just to keep things easy.</p>
</details>

但你再次看到，我们做同样的事情。我们将我们的智能体封装在Temporal智能体中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But you see again, we do the same thing. We wrap uh our agents in temporal agent.</p>
</details>

这个分析智能体可以花费比默认活动持续时间更长的时间，因为它基本上会构建一个很长的摘要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This analysis one can take more than I think whatever the default activity duration is because it's a long basically build up a a summary.</p>
</details>

所以我给它设置了时间，我想它花费的时间超过了2分钟或默认时间。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I give it I think it was taking longer than 2 minutes or whatever the default is.</p>
</details>

所以我只是给了它一个小时，这样它就不会失败。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I just gave it an hour so it's not going to fail.</p>
</details>

对我来说，最强大的部分是我的工作流中的所有内容看起来都完全相同。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and then the the for me the most powerful bit is everything here inside my workflow looks exactly the same.</p>
</details>

我不需要做任何疯狂的事情来实现并行。我只是使用完全相同的任务组。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't have to do any crazy stuff to do parallelism. I just use uh task group exactly the same.</p>
</details>

我可以使用`async.io gather`。这都只是你习惯的命令式Python代码。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I could use async.io gather. It's all just imperative Python code as you would be used to.</p>
</details>

如果我想定期运行它，我可以在这里暂停七天。Temporal会负责暂停所有内容。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I could have a if I wanted to run this periodically, I could sleep for seven days in here. Temporal would take care of pausing everything.</p>
</details>

再次声明，我不是Temporal的销售人员。我并不喜欢他们所做的一切，但它是一种非常强大的编码方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Again, I'm not here to be a temporal salesperson. I don't love everything about what they do, but it's a pretty powerful way of thinking about code.</p>
</details>

我们不需要做所有的基础设施工作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We don't have to do all the infra stuff.</p>
</details>

然后最终，再次，将我所有的上下文粉碎到最后一个智能体中并运行它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then ultimately, again, smash all my context into the last agent and run it.</p>
</details>

再次，有一些插件的东西。我必须插入日志，添加一些插件，将智能体添加为插件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And again, there's a bit of plug-in stuff. I have to plug in log add some plugins, add the agents as plugins.</p>
</details>

但再次，我实际启动它的代码只是`execute workflow`。就这么简单。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But again, my code to actually go and kick it off is just execute workflow. Simple as that.</p>
</details>

我在这里问了一个稍微有争议的问题：“对于持久化执行和类型安全，最好使用哪个Python智能体框架？”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I asked it here slightly more controversial question of what's the best Python agent framework to use for durable execution and type safety.</p>
</details>

我们祈祷它在大家面前运行时能给出正确的答案。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we will pray to God it gives the right answer when we run it in front of everyone.</p>
</details>

如果我启动并再次运行它，我们应该会看到它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I go and kick that off and run this again, we should see it.</p>
</details>

如果我们来到这里，我们应该会在Logfire中看到它正在运行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we come over here, we should see it running in Logfire.</p>
</details>

你可以看到我们有与启动智能体相关的内容。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see we have the stuff related to kicking off the agent.</p>
</details>

抱歉，它在这里启动工作流。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's kicking off the workflow, excuse me, here.</p>
</details>

我们看到搜索开始进行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we have the searches beginning to happen happen.</p>
</details>

但这里强大的地方是，再次想象我们正在运行所有这些搜索的中间，我们即将开始最后一步，然后有什么东西杀死了进程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the the powerful bit here is again imagine that we're halfway through running all these searches. We're about to start the final step and something comes along and kills the process.</p>
</details>

通常，你必须完全重新启动这个进程，并重新运行你的深度研究。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And by in general, you'd have to go and completely restart this process and run your deep deep research all over again.</p>
</details>

使用Temporal，它只会自动重新运行该工作流。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With temporal it will just go and rerun that workflow automatically.</p>
</details>

在这种情况下，我正在重新启动它，并且只运行那一个工作流。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this case, I'm restarting it and just running that one workflow.</p>
</details>

但通常情况下，它会自动重新启动，并且在Kubernetes下次启动时，工作流将像以前一样运行，但它会立即获得每个问题的答案。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But in general, it would just automatically go and be restarted and on the the next time that Kubernetes comes up, the workflow will run as it would have done before, but it will get answers to each individual question basically instantly.</p>
</details>

所以，如果它不会失败，它似乎正在失败，我们又开始了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so if it's not going to fail for me, which it seems to be, there we are. It started again.</p>
</details>

你看到一个计划用了24毫秒。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You see a plan took 24 milliseconds.</p>
</details>

从大局来看，搜索根本没有花费时间，因为它立即从Temporal获得了结果。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Search all took no time at all in the grand scheme of things because it just got the result back from temporal immediately.</p>
</details>

然后是分析，这是我们尚未运行的任务。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the analysis that was the the task we needed to that we hadn't run yet.</p>
</details>

显然，它需要重新开始，因为那是一个活动，活动显然必须从头开始运行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Obviously that needs to go and start again because that's an activity and you can't activities obviously have to run again from scratch.</p>
</details>

所以一旦它完成，我想它确实需要相当长的时间。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so once that finishes I think it does take quite a long time.</p>
</details>

也许我可以展示之前的输出。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe I can show the previous output.</p>
</details>

或者我们没有显示之前的输出吗？它讽刺地在之前失败了吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Or did we not get to displaying the previous output? Did it ironically actually fail the time before?</p>
</details>

但希望一旦它完成，我们应该能够看到它的分析，我认为这与其他深度研究的结果不相上下。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But hopefully once this finishes, we should be able to see uh its analysis, which you know, I think is on a par with what I see from the other deep research things.</p>
</details>

显然，还需要做一些UI工作才能在一个漂亮的深度研究界面中显示它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Obviously, there will be some there's some UI work to do to display this in a nice deep deep research interface.</p>
</details>

我们完成了。它的主要建议是Pydantic AI与Temporal。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There we are. It's completed and it has primary recommendation is pantic AI with temporal.</p>
</details>

所以，它做到了我希望它做的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it it it did what I hoped it would do.</p>
</details>

你看到它在这里给出了一个合理的报告，说明了其他劣质智能体框架的相对权衡，并且它应该在开头有一个带有链接的执行摘要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you see it's given a reasonable report here of like the relative trade-offs of the other inferior agent frameworks and it should have done an executive summary at the beginning with with links.</p>
</details>

是的，它提到了Pydantic AI、**LangGraph**（一个用于构建复杂智能体和多智能体系统的库），显然如果你喜欢快照或编写类型不安全的代码，以及Temporal本身，这很有道理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So it said podantic AI langraph obviously if you love snapshotting or writing unsafe code type unsafe code temporal on its own which makes sense.</p>
</details>

是的，这就是摘要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So there's a there's the summary.</p>
</details>

这是我主要想展示的内容。我将在这里合并持久化执行的内容。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That is the main stuff I had to show. I will merge the the durable execution stuff in here.</p>
</details>

### Pydantic AI Gateway预告

所以到这里。我只想快速说一下另一件事，虽然我无法弄清楚如何发表评论，但如果你在Pydantic上搜索，你会找到它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So go here. I just other thing I want to just say quickly while I have I can't work out how to post a comment but like you'll find it on Pantic if you if you if you look for it.</p>
</details>

哦，我可以这样做，如果有人想拍下这个二维码。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um oh I have I can do that if anyone wants to take a picture of that QR code.</p>
</details>

我想提的另一件事是，我们即将宣布**Pydantic AI Gateway**（一个用于购买和管理来自各种模型的AI推理的平台）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other thing I just wanted to mention we're about to announce uh Pantic AI gateway.</p>
</details>

所以如果有人想提前尝试，请告诉我们。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if anyone wants to try it early let us know.</p>
</details>

但这个平台很快就会上线。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but yeah that platform will be landing soon.</p>
</details>

你将能够直接使用Pydantic Gateway购买来自任何大型模型或大多数开源模型的推理，以及企业自托管的所有可观测性功能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You'll be able to use panic gateway directly to buy inference from any of the big models or most of the open source models and self-hosting for enterprise all the observability stuff.</p>
</details>

但我会省去完整的介绍，它很快就会到来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I I'll I'll save you the full spiel, but that's coming soon.</p>
</details>

我想你们中的一些人会觉得它很有趣。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think some of you will find it interesting.</p>
</details>

就是这样。非常感谢观看。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's it. Thanks so much for watching.</p>
</details>

如果你想了解更多关于Pydantic AI、Pydantic AI Gateway或Pydantic Logfire的信息，请扫描这些二维码。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you want to learn more about Padantic AI, Padantic AI gateway or padantic logfire, please scan these QR codes.</p>
</details>

如果你有任何反馈，请与我们联系。非常感谢聆听。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you have any feedback, uh please come and talk to us. Thanks so much for listening.</p>
</details>