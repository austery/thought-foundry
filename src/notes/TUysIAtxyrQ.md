---
title: 在Google Cloud Vertex AI上使用Claude构建AI智能体：挑战、解决方案与实战
summary: 本视频深入探讨了在Google Cloud的Vertex AI上使用Claude构建AI智能体的过程，涵盖了从开发到生产化部署的挑战，以及Google
  Cloud提供的Agentic Stack解决方案，包括ADK、MCP、Agent Engine和Agent-to-Agent协议。
area: tech-insights
category: technology
project:
- ai-impact-analysis
tags:
- agent-development
- ai-agent
- claude-llm
- google-cloud
people: []
companies_orgs:
- vertex-ai
products_models: []
media_books: []
date: '2025-07-31'
author: Anthropic
speaker: Anthropic
draft: true
guest: ''
insight: ''
layout: post.njk
series: ''
source: https://www.youtube.com/watch?v=TUysIAtxyrQ
status: evergreen
---
### 引言与AI智能体生产化挑战

Hello everyone. Thank you for joining this session. In this session, we are going to talk about how you can build AI agents using Claude on Vertex AI.

大家好。感谢大家参加本次会议。在本次会议中，我们将讨论如何使用**Claude**（Anthropic开发的一系列大型语言模型）在**Vertex AI**（Google Cloud的机器学习平台）上构建**AI智能体** (AI Agents: 能够理解、推理、计划并执行任务以达成目标的自动化程序)。

So, as you probably know, building AI agents is very powerful. With AI agents, you can build such cool applications, but the reality is, after you start developing and prototyping agents, and let's assume that you are happy with what you built, it's so hard to productionalize these agents, and the reasons are essentially three.

大家可能知道，构建AI智能体非常强大。借助AI智能体，你可以构建许多酷炫的应用程序，但现实是，在你开始开发和原型设计智能体之后，即使你对所构建的成果感到满意，要将这些智能体**生产化** (Productionalize: 将原型或开发中的系统转化为稳定、可扩展、可维护的生产环境系统) 也是非常困难的，这主要有三个原因。

First of all, you need to, because right now to build agents, you have so many frameworks that provide tools, that provide capabilities that you can use to enhance your agents; the landscape is so fragmented.

首先，目前构建智能体有太多框架提供工具和能力来增强你的智能体；整个生态系统非常碎片化。

So you need to figure out how to integrate the different frameworks and different tools to make the system work.

因此，你需要弄清楚如何整合不同的框架和工具以使系统正常运行。

The other reason is, let's assume that you are capable of building one agent or a multi-agent system with one framework, but at the same time you want to use different frameworks together. It's not easy to make the communication happen between these two sets of different agents.

另一个原因是，假设你能够使用一个框架构建一个智能体或多智能体系统，但同时你又想将不同的框架结合使用。让这两组不同的智能体之间进行通信并不容易。

And then, even let's assume that even if you're able to build agents, create this network of agents that are capable of communicating between them, it's so hard to manage them in production because you need to take care of all the operations around the agents and the relative governance.

此外，即使你能够构建智能体，创建这个能够相互通信的智能体网络，在生产环境中管理它们也极为困难，因为你需要处理智能体相关的所有操作和治理。

So all the monitoring capabilities, the logging capabilities that you need to implement on your agent, they are very hard to be managed.

因此，你需要为智能体实现的所有监控和日志记录功能都非常难以管理。

### Google Cloud Agentic Stack解决方案

In this sense, let's imagine that you will be able to have a toolkit that will allow you to standardize and develop your agent in a very efficient way, and then together with this toolkit, you get a set of protocols that will allow your agent to consume tools and context seamlessly, and at the same time connect with other agents in a seamless way.

在这种情况下，设想你能够拥有一个工具包，让你能够以非常高效的方式标准化和开发你的智能体；然后，与这个工具包一起，你获得一套协议，让你的智能体能够无缝地使用工具和上下文，并同时与其他智能体无缝连接。

And third, you will get an agent platform that will allow you to deploy at scale these agent systems and manage all the operations that are around this new kind of application.

第三，你将获得一个智能体平台，让你能够大规模部署这些智能体系统，并管理围绕这种新型应用程序的所有操作。

So with these challenges in mind and these three main reasons that we want to address, that's why we define our own agent stack on Google Cloud, and our agent stack is composed of four main components.

因此，考虑到这些挑战以及我们希望解决的这三个主要原因，我们定义了自己在Google Cloud上的**Agentic Stack** (智能体技术栈: 一套用于构建、部署和管理AI智能体的集成工具和平台)，它由四个主要组件构成。

So the first one is **Agent Development Kit** (ADK: Google Cloud提供的一个开源、代码优先、开发者友好的框架), which is an open-source, code-first, and developer-friendly framework that will allow you to build, evaluate, and deploy your agent at scale.

首先是**Agent Development Kit** (**ADK**: Google Cloud提供的一个开源、代码优先、开发者友好的框架)，它是一个开源、代码优先且对开发者友好的框架，让你能够大规模构建、评估和部署你的智能体。

But in order to enhance your agent, you need a way to standardize the agent's communication with different tools, as I showed you before.

但为了增强你的智能体，你需要一种方法来标准化智能体与不同工具的通信方式，正如我之前展示的那样。

So to address these challenges of protocols, one thing that we did when we designed Agent Development Kit is making it compatible with **MCP** (Model-agnostic Communication Protocol: 一种与模型无关的通信协议，用于标准化大型语言模型和智能体访问工具和上下文的方式).

因此，为了解决这些协议挑战，我们在设计Agent Development Kit时所做的一件事就是使其与**MCP** (Model-agnostic Communication Protocol: 一种与模型无关的通信协议，用于标准化大型语言模型和智能体访问工具和上下文的方式) 兼容。

So probably you know what MCP is, you already heard about it, but with MCP, essentially, you will make the agent compatible with several tools, and in general, applications will provide context to your application using LLMs on top of MCP.

所以你可能知道MCP是什么，你可能已经听说过它，但本质上，通过MCP，你将使智能体与多种工具兼容，并且通常，应用程序将使用基于MCP的**LLM** (Large Language Model: 大型语言模型，如Claude) 为你的应用程序提供上下文。

So we also introduce this **Vertex AI Agent Engine** (一个托管平台，旨在部署、管理和扩展AI智能体在生产环境中的应用), which is essentially a managed platform that has been designed to deploy, manage, and scale your AI agent in production, and it takes care of all those operational challenges and possible capabilities that you need in order to deploy your agent in production.

我们还引入了**Vertex AI Agent Engine** (一个托管平台，旨在部署、管理和扩展AI智能体在生产环境中的应用)，它本质上是一个托管平台，旨在部署、管理和扩展你的AI智能体在生产环境中的应用，并负责你在生产环境中部署智能体所需的所有操作挑战和可能的功能。

And finally, to address the challenges of allowing communication between different agents built with different frameworks, we also introduce **Agent-to-Agent Protocol** (一个开源协议，旨在促进使用不同框架构建的智能体之间的无缝通信和协作).

最后，为了解决允许使用不同框架构建的不同智能体之间进行通信的挑战，我们还引入了**Agent-to-Agent Protocol** (一个开源协议，旨在促进使用不同框架构建的智能体之间的无缝通信和协作)。

So, which is essentially an open-source protocol that will allow you to create this seamless communication and collaboration between agents in whatever framework you build.

它本质上是一个开源协议，无论你使用何种框架构建智能体，它都将允许你创建智能体之间无缝的通信和协作。

### 讲师介绍与议程

With this talk, today we are going to use this talk to build multi-agent systems, but before doing that, let me introduce myself. I'm Ian Ardini, I'm a Developer Advocate at Google Cloud, I'm based in Sunnyvale.

在本次演讲中，我们今天将利用它来构建多智能体系统，但在那之前，请允许我介绍一下自己。我是Ian Ardini，我是Google Cloud的开发者倡导者，我在桑尼维尔工作。

And today I want to go through this journey with you, and the journey will start with building a very simple ADK agent using Claude, and then we are going to enhance these agents using some pre-built tools and MCP.

今天我想与大家一起踏上这段旅程，旅程将从使用Claude构建一个非常简单的ADK智能体开始，然后我们将使用一些预构建工具和MCP来增强这些智能体。

And finally, we will deploy the agents on Agent Engine. As a bonus, I will also try to show you how you can connect multiple agents using Agent-to-Agent Protocol.

最后，我们将把智能体部署到Agent Engine上。作为额外内容，我还将尝试向大家展示如何使用Agent-to-Agent Protocol连接多个智能体。

But in case we are not able to do that, don't worry, we are going to have a live webinar at the end of the month. So we will show you how to do that later.

但万一我们无法做到这一点，请不用担心，我们将在月底举行一次在线网络研讨会。所以我们稍后会向大家展示如何操作。

### 访问Vertex AI上的Claude模型

With that being said, we want to build an agent. But to build an agent, we need an LLM. So let me show you how you can get access to Claude models on Vertex AI.

话虽如此，我们想构建一个智能体。但要构建智能体，我们需要一个**LLM** (Large Language Model: 大型语言模型)。所以让我向大家展示如何在Vertex AI上访问Claude模型。

Claude models on Vertex AI are accessible through **Vertex AI Model Garden** (Google Cloud上一个集中的平台，用于发现、部署和管理各种基础模型和开源模型), which is essentially a centralized hub where you can discover, deploy, and manage a wide variety of foundational and open models, including Claude.

Vertex AI上的Claude模型可以通过**Vertex AI Model Garden** (Google Cloud上一个集中的平台，用于发现、部署和管理各种基础模型和开源模型) 访问，它本质上是一个集中的中心，你可以在其中发现、部署和管理各种基础模型和开源模型，包括Claude。

So, on Model Garden, you will find the latest and greatest Claude model. This morning we just rolled out Claude 4. So I will show you, and after you simply fill in, you provide some credentials and everything, you will get access to the model and you will be able to use it through API or through the console.

因此，在Model Garden上，你将找到最新最好的Claude模型。今天早上我们刚刚推出了Claude 4。我将向大家展示，在你简单地填写并提供一些凭据后，你就可以访问该模型，并通过API或控制台使用它。

So without further ado, let me show you how you can get access to Claude. So let's switch to the UI.

事不宜迟，让我向大家展示如何访问Claude。现在我们切换到用户界面。

For people that don't know Vertex AI, this is how the Vertex AI console looks like. Vertex AI provides a set of services to build both generative AI and predictive AI applications, and Model Garden, as I said, is a centralized hub that provides you several models from different model providers, including Claude, including Anthropic.

对于不了解Vertex AI的人来说，这就是Vertex AI控制台的样子。Vertex AI提供了一系列服务来构建生成式AI和预测式AI应用程序，而Model Garden，正如我所说，是一个集中的中心，为你提供来自不同模型提供商的多种模型，包括Claude，包括Anthropic。

In fact, in the partner session, you will find the Anthropic models, and here you can see all the Anthropic models that we provide, including the latest that we released this morning.

事实上，在合作伙伴会话中，你将找到Anthropic模型，在这里你可以看到我们提供的所有Anthropic模型，包括我们今天早上发布的最新模型。

So, in order to, you can use Model Garden to test this model. So here is the **Vertex AI Studio** (Vertex AI上的一个提示用户界面，用于测试和交互大型语言模型), which is our prompt UI that you can use for testing this model.

因此，你可以使用Model Garden来测试这个模型。这里是**Vertex AI Studio** (Vertex AI上的一个提示用户界面，用于测试和交互大型语言模型)，它是我们的提示用户界面，你可以用它来测试这个模型。

As you see, I already selected Claude 3.7 Sonnet, which is the model that we are going to use today to build our agent.

正如你所看到的，我已选择Claude 3.7 Sonnet，这是我们今天将用于构建智能体的模型。

We are already integrating Claude 4 with ADK. So stay tuned in the coming weeks.

我们已经将Claude 4与ADK集成。所以请在接下来的几周内保持关注。

But through this UI, what you can do is you can test the model, and you can start interacting with it and using the API that you can get here to integrate with your application.

但通过这个用户界面，你可以测试模型，并开始与它互动，然后使用这里提供的API将其集成到你的应用程序中。

So with that being said, now that you know more or less how to get access to Claude through Vertex AI, let's go back to the presentation and let's start building agents using this model.

话虽如此，既然你大致了解了如何通过Vertex AI访问Claude，让我们回到演示文稿，开始使用这个模型构建智能体。

### 使用ADK构建简单的生日派对规划智能体

For in this demo, we are going to build a very simple agent, which is a birthday planner agent.

在本次演示中，我们将构建一个非常简单的智能体，它是一个生日派对规划智能体。

So it's an agent that essentially will allow you to organize a birthday party, such as choosing themes and getting the guest list and so on.

所以它本质上是一个能让你组织生日派对的智能体，例如选择主题、获取宾客名单等等。

And before starting this, before building this agent, you need to know some concepts related to ADK.

在开始构建这个智能体之前，你需要了解一些与ADK相关的概念。

Just one thing, I know this session is supposed to be a workshop, but because of all the Wi-Fi issues that you've already faced, I know we will already give you some credits and I will share the repository with you.

有一点，我知道本次会议本应是一个研讨会，但由于大家已经遇到所有Wi-Fi问题，我知道我们已经给了你们一些积分，我也会与你们分享代码库。

So after this session, you will be able to reproduce this code I'm going to show you at home, and if you have questions, you can always come back to me.

所以本次会议结束后，你将能够在家里重现我将展示的代码，如果你有问题，随时可以联系我。

Okay, with that being said, these are the core concepts that you need to know about ADK in order to build an agent with the Agent Development Kit.

好的，话虽如此，这些是你需要了解的ADK核心概念，以便使用Agent Development Kit构建智能体。

First of all, Agent Development Kit provides several types of agents that you can use. You already pre-built some agenting patterns, including sequential agents, that you can use in order to implement your application.

首先，Agent Development Kit提供了几种你可以使用的智能体类型。它已经预构建了一些智能体模式，包括**顺序智能体** (Sequential Agents: 按照预设步骤或顺序执行任务的智能体)，你可以用它们来构建应用程序。

But the simplest pattern that you can find is the one that we use with the LLM agent, which essentially uses just an LLM to build the agent.

但你可以找到的最简单的模式是与**LLM智能体** (LLM Agent: 主要通过大型语言模型（LLM）进行推理和决策的智能体) 结合使用的模式，它本质上只使用一个LLM来构建智能体。

And so, this class represents the brain of the agent, and it supports several models, including Claude, and essentially, it requires you to set the model, give the agent a name, some instructions, and define the tools that you want to use.

因此，这个类代表了智能体的大脑，它支持包括Claude在内的多种模型，本质上，它要求你设置模型，给智能体一个名称，一些指令，并定义你想要使用的工具。

And then after you have done this, you get your agent already up and running. With respect to tools, you know what a tool is; it's essentially a means that you can use to assign some skills to the agent.

完成这些后，你的智能体就已启动并运行。关于工具，你明白工具是什么；它本质上是一种你可以用来为智能体分配某些技能的手段。

ADK provides some pre-built tools that you can use, but you can also define your own tools and integrate them with the framework.

ADK提供了一些你可以使用的预构建工具，但你也可以定义自己的工具并将其与框架集成。

So you have the agents, you have the tool in ADK. You have this concept of **runner** (ADK中负责协调和执行智能体、管理会话状态的组件) that puts together everything and coordinates, executes the agents.

所以你有智能体，你有ADK中的工具。你还有**Runner** (ADK中负责协调和执行智能体、管理会话状态的组件) 这个概念，它将所有组件整合在一起，协调并执行智能体。

So it manages the session, so the conversation state along the while you're running the agents, and it is integrated with a very nice CLI that you can see here, `ADK run` and `ADK web`, that will allow you to interact with the agent programmatically or through a web UI that I will show you later.

因此，它管理会话，也就是在运行智能体时的对话状态，并且它与一个非常好的命令行界面（你在这里可以看到`ADK run`和`ADK web`）集成，这将允许你以编程方式或通过我稍后将展示的网页用户界面与智能体进行交互。

And then, the last important thing that I want to mention, you have this concept of **session** (ADK中用于存储对话历史并维护智能体与用户之间交互状态的机制), which essentially will allow you to store the conversation and interact with the agent in a way that it remembers what you already discussed with it before.

然后，我想提到的最后一个重要概念是**会话** (Session: ADK中用于存储对话历史并维护智能体与用户之间交互状态的机制)，它本质上将允许你存储对话，并以智能体记住你之前与它讨论过什么的方式与智能体互动。

Okay. So with that being said, I told you ADK supports Claude. How does it support Claude? You can use Claude in two ways with ADK: through the LLM integration, which is something that I will assume you're familiar with, or you can use the pre-built integration that we provide as a Vertex team using Claude and the LLM registry, which is the one that I will show you today.

好的，话虽如此，我告诉过你们ADK支持Claude。它如何支持Claude呢？你可以通过两种方式在ADK中使用Claude：通过LLM集成（我假设你对此很熟悉），或者你可以使用我们Vertex团队提供的预构建集成，即使用Claude和LLM注册表，这也是我今天将向你展示的方式。

It's just a nice way to integrate the model with the interface. So with that being said, let me show you how you can build an agent using ADK.

这只是一种将模型与界面集成的好方法。话虽如此，让我向大家展示如何使用ADK构建智能体。

So this is the repository that you will get once you download from, once you clone the repo from GitHub.

所以这是你从GitHub克隆代码库后将获得的仓库。

So in the repository, you will have three agents. We are going to cover them today. And the first one, as I said, is the birthday planner.

因此，在这个仓库中，你将有三个智能体。我们今天将涵盖它们。而第一个，正如我所说，是生日规划器。

So in order to build an agent with ADK, all you need to do is providing essentially three files: the `agent.py` which contains the agent logics, the environment variable file which contains all the environment variables that you want to use for your agent, and an `init` file, as you probably are familiar with.

因此，要使用ADK构建智能体，你只需提供三个文件：包含智能体逻辑的`agent.py`文件，包含你希望为智能体使用的所有环境变量的环境变量文件，以及你可能熟悉的`init`文件。

So just these three files will allow you to run the agent, and as you can see, we designed ADK to be so close to software engineering best practices. So this is something that you should be capable of running easily.

所以仅仅这三个文件就能让你运行智能体，正如你所看到的，我们设计ADK时非常贴近软件工程的最佳实践。所以这是一个你应该能够轻松运行的东西。

With that being said, here you can see how you can use ADK. So you need to import the `LLM agent` class, the `Claude` class which is going to represent the Claude model that we are going to use today, and then you can introduce, you can also use some other classes related to memory, the runner that I already explained.

话虽如此，在这里你可以看到如何使用ADK。你需要导入`LLM agent`类，`Claude`类（它将代表我们今天将使用的Claude模型），然后你可以引入，你也可以使用一些其他与内存相关的类，以及我之前解释过的runner。

But with that being said, once you get this, once you import this class, this is all the boilerplate code that you need to write in order to create your first agent.

但话虽如此，一旦你获得并导入这个类，这就是你创建第一个智能体所需编写的所有样板代码。

So you use the `LLM agent` class. You define a name, the model that you want to use, in this case the Claude 3.7, the description, so what the agent is going to do, and the instruction that you want to give to the agent.

所以你使用`LLM agent`类。你定义一个名称，你想要使用的模型（在本例中是Claude 3.7），描述（即智能体将做什么），以及你想要给智能体的指令。

That's it. Once you have this, you are ready to go. So all you need to do is that running, if you want to interact with the agent in a programmatic way, you can run `adk run` and then behind the scene it will start a session with your agent.

就是这样。一旦你有了这些，你就准备好了。所以你需要做的就是运行，如果你想以编程方式与智能体交互，你可以运行`adk run`，然后它将在后台与你的智能体启动一个会话。

Oh, sorry, I forgot one thing. `NDK run birthday` and then it will run a session, an interactive session with your agent.

哦，抱歉，我忘了一件事。`NDK run birthday`，然后它将与你的智能体运行一个会话，一个交互式会话。

So from here you can start interacting with your agent and you can start understanding how it works, and so in this way you can iteratively develop the agents.

所以从这里你可以开始与你的智能体互动，并开始了解它是如何工作的，这样你就可以迭代地开发智能体。

And you can improve the agent depending on the task that you are trying to achieve. So again, three files, one CLI, and you're done, and you can start improving your agents.

你可以根据你尝试完成的任务来改进智能体。所以，再次强调，三个文件，一个命令行界面，你就完成了，你可以开始改进你的智能体。

### 使用工具和MCP增强智能体（多智能体系统）

So let's assume that you clone the repo, you get your agent up and running. Let's make things a little bit more complicated.

那么，假设你克隆了仓库，让你的智能体运行起来。让我们把事情变得稍微复杂一点。

So we want to extend our agents in a way that it becomes a multi-agent system. So we have this agent that will give us suggestions for the birthday party.

所以我们想以一种使其成为**多智能体系统** (Multi-Agent System: 由多个独立的智能体组成，它们相互协作或竞争以解决复杂问题或完成共同目标) 的方式来扩展我们的智能体。我们现在有一个智能体，它会为生日派对提供建议。

But then once we get the birthday party, we want also to schedule some time in our agenda, for example, for going and buying the gift for the party or just setting a reminder of the birthday day.

但是一旦我们确定了生日派对，我们还希望在我们的日程中安排一些时间，例如，去为派对购买礼物，或者只是设置一个生日提醒。

So how do you do that? You introduce tools, and the cool thing of ADK is that we didn't want to reinvent the wheel.

那么你如何做到这一点呢？你引入工具，ADK的酷炫之处在于我们不想重复造轮子。

So we, by day zero, we introduced this integration with MCP. So again, I'm not going to explain what MCP is and the difference between the language-specific tools or the API.

所以从第一天起，我们就引入了与MCP的集成。再次强调，我不会解释MCP是什么，以及它与特定语言工具或API的区别。

The idea is essentially with MCP, you standardize the way LLMs get access to the context, not only LLMs but also agents.

其核心思想是，通过MCP，你标准化了LLM获取上下文的方式，不仅是LLM，也包括智能体。

With ADK, you have two ways to use MCP. So you can use MCP, some MCP existing server, and integrate them as a tool with ADK.

使用ADK，你有两种方式使用MCP。你可以使用MCP，一些现有的MCP服务器，并将它们作为工具与ADK集成。

This is something that we are going to do today. So whatever MCP server is out there, you can use it today already with ADK without you reinventing the wheel in that sense.

这是我们今天将要做的。所以，无论市面上有任何MCP服务器，你今天都可以直接与ADK一起使用，而无需你在这方面重复造轮子。

Or if you have ADK and you build some tool in ADK, you can use MCP to deploy this tool and interact with other agents.

或者，如果你有ADK并在ADK中构建了一些工具，你可以使用MCP来部署这个工具并与其他智能体交互。

So these are the two ways that you can use to leverage MCP with ADK. So with that being said, let me show you how you can use ADK with MCP.

所以这是你使用ADK利用MCP的两种方式。话虽如此，让我向你展示如何在ADK中使用MCP。

So this is the second agent. So again, as I said, now we want to, what we want to do is that we want to introduce a calendar service agent which will allow me to schedule some time in my agenda.

所以这是第二个智能体。再次强调，正如我所说，现在我们想做的是引入一个日历服务智能体，它将允许我在我的日程中安排一些时间。

And because now we have two agents, the birthday one and the calendar one, we want to also introduce an **orchestrator** (在多智能体系统中负责接收请求、理解意图，并根据任务需求将请求路由到最合适的智能体或工具的组件) which routes my request to the right agent depending on what I want to achieve.

由于我们现在有两个智能体，生日智能体和日历智能体，我们还想引入一个**编排器** (Orchestrator: 在多智能体系统中负责接收请求、理解意图，并根据任务需求将请求路由到最合适的智能体或工具的组件)，它将根据我想要实现的目标将我的请求路由到正确的智能体。

So in this particular case, the birthday planner is exactly the same agent that we defined before, except that now I want to create an IB system, because for example, for scheduling, for some for getting some birthday ideas, I can use also a very, I can use also a different model like Gemini.

因此，在这种特殊情况下，生日规划器与我们之前定义的智能体完全相同，不同之处在于我现在想创建一个IB系统，因为例如，为了安排日程，为了获得一些生日创意，我也可以使用一个非常，我也可以使用像Gemini这样的不同模型。

But then I have these calendar agents that in this case we use again Claude 3.5 with an MCP server to schedule some time in my agenda.

但接着我有这些日历智能体，在这种情况下，我们再次使用Claude 3.5和一个MCP服务器来安排我日程中的一些时间。

So in order to use an MCP server with ADK, these are the two lines of code that you need to introduce.

因此，为了在ADK中使用MCP服务器，你需要引入这两行代码。

So you get the MCP server that you already have out there or you already created or deployed as a serverless service, and then you create a connection with it.

所以你获取你已有的MCP服务器，或者你已创建或部署为无服务器服务的MCP服务器，然后你与它创建一个连接。

And then what happens behind the scene when you start building your agent, when you run this command and you start building your agent, what it does is it gets all the information, all the requirements to run your MCP server, it converts these MCP servers as a tool, and it uses these MCP servers as a tool of the agent.

然后，当你开始构建智能体时，当你运行这个命令并开始构建智能体时，幕后发生的事情是它获取运行你的MCP服务器所需的所有信息和要求，将这些MCP服务器转换为一个工具，并将其用作智能体的工具。

That's it. But again, the cool thing, what I really believe is powerful of ADK, is that it will allow me with two lines of code to integrate any kind of MCP tool that you have already.

就是这样。但再次强调，真正酷炫且我认为ADK强大的地方在于，它只需两行代码就能让我集成你已有的任何MCP工具。

Once you have this MCP tool, you integrate it as a tool again in our agent, and you're done.

一旦你有了这个MCP工具，你再次将其作为工具集成到我们的智能体中，你就完成了。

Same similar things. So now we have the birthday agent, we have the calendar agent. This is how the orchestrator looks like.

同样类似的事情。所以现在我们有了生日智能体，我们有了日历智能体。这就是编排器的样子。

So look at how easy it is to pass multiple agents in an orchestrator like this one. Again, all you need to do is defining a better instruction, because in this case, this agent is going to orchestrate a multi-agent system.

所以看看将多个智能体传递给这样一个编排器是多么容易。再次强调，你只需定义一个更好的指令，因为在这种情况下，这个智能体将编排一个多智能体系统。

So you will define what each agent is capable of doing, and then you pass all the agents as a tool in this orchestrator.

所以你将定义每个智能体能够做什么，然后将所有智能体作为工具传递给这个编排器。

So again, it will figure out what agent to use depending on your request. Once you have done this, you are good to go.

所以，它会根据你的请求来决定使用哪个智能体。一旦你完成这些，你就可以开始了。

So what we can do is that running, going back here, actually let me do this. Let me show you this.

所以我们可以做的是运行，回到这里，实际上让我这样做。让我向你们展示这个。

So before I show you how you can interact, I can spin up an agent interactive programmatically. But because now this system is more complicated, we have three agents, right?

所以在我向你展示如何交互之前，我可以以编程方式启动一个交互式智能体。但因为现在这个系统更复杂，我们有三个智能体，对吧？

We want something a little bit more solid to try to understand what is happening behind the scene.

我们想要一些更坚实的东西来尝试理解幕后发生了什么。

So in ADK, you have this **web UI** (ADK中提供的一个图形用户界面，用于调试和交互智能体), which allows you to debug and interact with your agent.

因此，在ADK中，你有这个**web UI** (ADK中提供的一个图形用户界面，用于调试和交互智能体)，它允许你调试并与你的智能体进行交互。

So this is the web UI. So in this case, this is how it looks like. So the web UI, we select the agent that I want to run, and this is, so in this case, it's like what we did before, except that now we have the other agents, we have the multi-agent system that is running behind the scene.

这就是网络用户界面。在这种情况下，它看起来是这样的。在网络用户界面中，我们选择我想运行的智能体，而这就是，在这种情况下，它就像我们之前所做的，除了现在我们有其他的智能体，我们有在后台运行的多智能体系统。

And as you can see here, this UI will nicely provide you a way to see what is happening behind the scene with your agent.

正如你在这里看到的，这个用户界面将很好地为你提供一种方式，让你了解你的智能体在幕后发生了什么。

So while you are running the conversation with it, you will see which agent is using for doing what. Okay, with that being said, so now you know also the web UI. Let's go back to the presentation.

因此，当你与它进行对话时，你将看到哪个智能体正在做什么。好的，话虽如此，现在你也了解了网络用户界面。让我们回到演示文稿。

### 在Vertex AI Agent Engine上部署智能体

Thank you. So for the last part of this presentation, I want to show you also how you can easily deploy the agent on Agent Engine.

谢谢。在本次演示的最后一部分，我还想向大家展示如何轻松地将智能体部署到Agent Engine上。

So in order to do that, let me first introduce you what is an, what is, why you need an Agent Engine like this one.

为此，让我首先向大家介绍什么是，为什么你需要像这样的Agent Engine。

Essentially, when you need to deploy agents at scale, in order to do that, you need to figure out a lot of complexity, right?

本质上，当你需要大规模部署智能体时，为了做到这一点，你需要解决很多复杂性，对吧？

You need to get your agent code, you need to wrap the agent in one of those services like Fast API or Django, you need to build your container, and then you need to figure out your environment to run it, in this case, it can be a GCP environment, and then you need to handle all the operations related to infrastructure, and at the same time, you also need to monitor this agent because at the end of the day, it is an application, right?

你需要获取你的智能体代码，你需要将智能体封装在像Fast API或Django这样的服务中，你需要构建你的容器，然后你需要找出你的运行环境（在这种情况下，它可以是GCP环境），然后你需要处理所有与基础设施相关的操作，同时，你还需要监控这个智能体，因为归根结底，它是一个应用程序，对吧？

So with the Agent Engine, what you can simply deploy the agent using a method like `agent engine create` and you will get your agent up and running, as well as all these observability capabilities and the monitoring that you need in order to deploy your agent.

因此，借助Agent Engine，你可以简单地使用`agent engine create`这样的方法部署智能体，你的智能体就能运行起来，并且你部署智能体所需的所有这些可观察性功能和监控能力都将可用。

They are directly managed by the platform itself, and also all the interactions that you have with the agents, they are going to be automatically collected by our logging system, and you will directly use them to run some evaluation in a way that you know you can keep improving your agent along time.

它们直接由平台本身管理，并且你与智能体的所有交互都将由我们的日志系统自动收集，你将直接使用它们进行一些评估，以便你能够随着时间的推移不断改进你的智能体。

So these are, this gives you an idea of the reason why you want to consider an Agent Engine, and this gives you the picture, the overall picture of the Vertex AI Agent Engine.

所以这些，这让你了解了为什么你会考虑使用Agent Engine的原因，这也为你描绘了Vertex AI Agent Engine的整体图景。

So in this picture, as you can see, Agent Engine is capable of integrating any kind of agent framework, ADK, as I just said, but if you build agents with LangChain, CrewAI, you can use those frameworks as well, and then with whatever tools and whatever model that you want, and the Agent Engine will take care of deploying your agents and will enable all these observability capabilities or features that you need using some cloud tools, and the evaluation part is also covered by one of our services, which is the Vertex AI evaluation service.

因此，在这张图中，如你所见，Agent Engine能够集成任何类型的智能体框架，正如我刚才所说，ADK，但如果你使用**LangChain** (一个用于开发由大型语言模型驱动的应用程序的框架) 和**CrewAI** (一个用于编排多个AI智能体以协作完成复杂任务的框架) 构建智能体，你也可以使用这些框架，然后使用你想要的任何工具和任何模型，Agent Engine将负责部署你的智能体，并将使用一些云工具启用你所需的所有可观察性功能或特性，评估部分也由我们的一项服务涵盖，即Vertex AI评估服务。

So to wrap up the Agent Engine capabilities. So you can deploy any agent that, like, you can define agent in any framework that you want.

所以总结一下Agent Engine的功能。你可以部署任何智能体，你可以在任何你想要的框架中定义智能体。

You can use this managed runtime to deploy these agents, and then you will automatically get, you will automatically be able to observe the behavior of the agent, call the agent at scale, and the Agent Engine also has an integration with another service that we provide on Google Cloud, which is **Agent Space** (Google Cloud上一个帮助企业将AI智能体投入实际业务应用的服务), which I'm not going to cover today, but just to give an idea, it's the gate that will allow your agent to go in the hands of business.

你可以使用这个托管运行时来部署这些智能体，然后你将自动获得，你将自动能够观察智能体的行为，大规模调用智能体，并且Agent Engine还与我们在Google Cloud上提供的另一项服务**Agent Space** (Google Cloud上一个帮助企业将AI智能体投入实际业务应用的服务) 集成，我今天不会涵盖它，但只是为了给个概念，它是让你的智能体进入商业应用的大门。

So really, you know, have an impact of the agents that you're going to build in an enterprise context.

所以，你知道，真正地让你的智能体在企业环境中产生影响。

But with that being said, let me jump into the last lab that we are going to cover today. So I already showed you how you can build the agent.

话虽如此，让我跳到我们今天将要涵盖的最后一个实验。我已经向你们展示了如何构建智能体。

So in this last lab, what I want to show you is how you can easily deploy an agent with a few lines of code.

因此，在最后一个实验中，我想向大家展示如何用几行代码轻松部署一个智能体。

So in the repository, you will find this module that essentially will allow you to iteratively deploy your agents.

所以在这个仓库中，你将找到这个模块，它本质上将允许你迭代地部署你的智能体。

All you need to do to deploy an agent on Vertex AI Agent Engine is providing the base requirements that your agent needs in order to run.

要在Vertex AI Agent Engine上部署智能体，你只需提供智能体运行所需的基本要求。

And then as I said, we provide already a class that will allow you to create an agent endpoint in this case on the Agent Engine.

然后正如我所说，我们已经提供了一个类，允许你在此情况下在Agent Engine上创建智能体端点。

So in this class, you have your agent that you define. In this case, we are going to deploy the first agent, the birth planner agent.

所以在这个类中，你有你定义的智能体。在这种情况下，我们将部署第一个智能体，即生日规划智能体。

And then here you have the requirements. You can provide extra packages if you want. But then again, few lines of code to deploy your agent in a managed service that is scalable and will allow you to open your agent to several users.

然后这里有要求。如果你愿意，可以提供额外的包。但同样，只需几行代码即可将你的智能体部署到一个可扩展的托管服务中，该服务将允许你向多个用户开放你的智能体。

So with that being said, let me run this script. So first of all, let me close this session. Clear. Then let me go in the repository.

话虽如此，让我运行这个脚本。首先，让我关闭这个会话。清除。然后让我进入仓库。

And then here I have my module. So in this case, I do `python deploy agent`.

然后这里有我的模块。所以在这种情况下，我执行`python deploy agent`。

So what happens behind the scene is that it will start deploying my agent. So you can monitor the deploy on the agent directly in the Vertex AI console.

所以幕后发生的事情是它将开始部署我的智能体。你可以在Vertex AI控制台中直接监控智能体的部署。

Now this step is going to take some time, as you can imagine, because it's building the image and deploying the agents.

现在这一步会花费一些时间，正如你所想象的，因为它正在构建镜像并部署智能体。

So let me directly jump into the UI. So once the deployment of the agent will successfully run, what you will do is you will get an entry in the Vertex AI Agent Engine UI, and from this UI, you will be able to monitor this agent.

所以让我直接跳到用户界面。一旦智能体的部署成功运行，你将在Vertex AI Agent Engine用户界面中看到一个条目，通过这个用户界面，你将能够监控这个智能体。

So the query that it receives, the latency that it takes, so how long it takes to respond to the query, and you will also monitor the CPU and the memory that the agent is using.

所以它接收到的查询，它所花费的延迟，也就是响应查询所需的时间，你还将监控智能体正在使用的CPU和内存。

So you can better understand if you allocate enough resources to serve this agent at scale.

这样你就能更好地了解是否分配了足够的资源来大规模服务这个智能体。

The engine is also managing sessions. So in this case, I just deployed one. So we don't start a session yet.

引擎也在管理会话。所以在这个例子中，我只部署了一个。所以我们还没有开始会话。

But here you will see the session, and it will give you all the information that you need in order to integrate this agent in application, both in a real-time or streaming, depending on the method that you want to use, and you can always check the details of the deployment.

但在这里你将看到会话，它将为你提供所有你需要的信息，以便将这个智能体集成到应用程序中，无论是实时还是流式，取决于你想要使用的方法，你也可以随时查看部署的详细信息。

### Agent-to-Agent协议（额外内容与总结）

Okay. So let's go. So now you have also an idea how to deploy the agent. Let's go back to slide. Thank you.

好的。我们继续。现在你对如何部署智能体也有了概念。让我们回到幻灯片。谢谢。

So as I said, this was a bonus part. I don't think we have time to cover it, but what I want to tell you is that let's assume that you build your agent, you deploy it on Agent Engine, and right now we build all our agents using just ADK.

正如我所说，这是一个额外内容。我想我们没有时间涵盖它，但我想告诉你的是，假设你构建了你的智能体，并将其部署在Agent Engine上，而目前我们所有的智能体都只使用ADK构建。

But what if you want to deploy or build your agent, build and deploy your agent using LangChain, CrewAI, or whatever framework?

但如果你想使用LangChain、CrewAI或任何其他框架来构建和部署你的智能体，该怎么办呢？

As I already said, Agent Engine supports this, but the main problem is that you don't have a way to connect these agents that are built with different frameworks together.

正如我之前所说，Agent Engine支持这一点，但主要问题是你没有办法将这些使用不同框架构建的智能体连接起来。

Right. So that's when you need a protocol to do that. So in a world where you are going to have multiple agents that are built and deployed with different frameworks, there is this need to find a common language between these agents to interact and collaborate in order to achieve some task.

对。所以这时你需要一个协议来做到这一点。因此，在一个你将拥有多个使用不同框架构建和部署的智能体的世界中，存在一种需求，即在这些智能体之间找到一种通用语言，以进行交互和协作，从而完成某些任务。

And that's why as a Google Cloud, we introduce Agent-to-Agent Protocol. So again, it's an open protocol that has been designed to foster the agent collaboration using very simple concepts that I will show you in a minute.

这就是为什么作为Google Cloud，我们引入了Agent-to-Agent Protocol。所以再次强调，它是一个开放协议，旨在利用我稍后将向你展示的非常简单的概念来促进智能体协作。

But the key thing that I want to share with you is that it has been already designed to be enterprise-ready.

但我想与你分享的关键是，它已被设计为企业级就绪。

So it has a bunch of features that will allow you to govern and in a secure way your agents, and we again also in this case we didn't invent the wheel because it's based on some standard protocol HTTP, JSON-RPC, something that is common adopted in the industry.

因此，它具有一系列功能，可以让你以安全的方式管理你的智能体，而且在这种情况下，我们也没有重复造轮子，因为它基于一些行业中普遍采用的标准协议，如HTTP、JSON-RPC。

The concept that you need to know about is the concept of **agent skills** (Agent-to-Agent协议中描述智能体功能或能力的定义). So which essentially describe the function or the capability of the agents, and it's like a business card of your agent with respect to other agents.

你需要了解的概念是**智能体技能** (Agent Skills: Agent-to-Agent协议中描述智能体功能或能力的定义) 的概念。它本质上描述了智能体的功能或能力，就像你的智能体相对于其他智能体的名片。

And then you have the **agent card** (Agent-to-Agent协议中智能体的数字名片，包含其技能和交互方式), that essentially is a digital business card for the agent, will allow other agents or other applications to know what the skills, what are the skills of the agent and how to interact with it.

然后你有**智能体卡片** (Agent Card: Agent-to-Agent协议中智能体的数字名片，包含其技能和交互方式)，它本质上是智能体的数字名片，将允许其他智能体或其他应用程序了解智能体的技能是什么以及如何与它交互。

So one is describe the agent, the other one describe what is the agent capable of doing to the other agents.

所以一个是描述智能体本身，另一个是描述智能体能够对其他智能体做什么。

And then as before, you have an **agent executor** (Agent-to-Agent协议中负责管理智能体之间通信、请求和响应的组件) that essentially manages the communication, the request, and the response that this system generates between agents.

然后像以前一样，你有一个**智能体执行器** (Agent Executor: Agent-to-Agent协议中负责管理智能体之间通信、请求和响应的组件)，它本质上管理这个系统在智能体之间生成的通信、请求和响应。

So these three concepts, with these three concepts, you can build systems like this one, where you will essentially have multiple agents written with different frameworks communicating between each other in order to achieve a particular and more complex task, rather than the one we built today of scheduling or buying a birthday gift.

因此，通过这三个概念，你可以构建像这样的系统，其中你将拥有多个用不同框架编写的智能体，它们相互通信，以完成一个特定且更复杂的任务，而不是我们今天构建的安排或购买生日礼物那样简单的任务。

So we are not going to cover this today, but again, as I said at the beginning, we are going to have a live webinar at the end of the month. So I will share with you the QR code.

所以我们今天不会涵盖这个，但再次强调，正如我一开始所说，我们将在月底举行一次在线网络研讨会。届时我将与大家分享二维码。

So just recap, we start from these three main problems: building an agent that is powerful, but there are several challenges when you want to put them in production.

所以回顾一下，我们从这三个主要问题开始：构建强大的智能体，但在将其投入生产时会遇到几个挑战。

You have a fragmented landscape. There are some integration complexity that you need to manage.

你面临一个碎片化的生态系统。有一些集成复杂性你需要管理。

And even if you're capable of fixing this, you have to manage all the operational overhead that you need to handle in order to deploy these agents.

即使你能够解决这个问题，你还必须管理所有为了部署这些智能体而需要处理的运营开销。

And then that's when you want to enable, you want to get access to a toolkit, protocols, and engine platform that at the end it allows you to standardize the way you build your agent and scale them to production.

然后，这就是你想要启用，你想要访问一个工具包、协议和引擎平台的时候，它最终允许你标准化构建智能体的方式并将其扩展到生产环境。

And to give you this kind of tool, we put together this Agentic Stack using ADK, MCP, Agent Engine, and **Agent-to-Agent Protocol** (一个开源协议，旨在促进使用不同框架构建的智能体之间的无缝通信和协作) that will essentially allow you to confidently build Agentic systems and scale them in production as required.

为了给你提供这类工具，我们整合了使用ADK、MCP、Agent Engine和**Agent-to-Agent Protocol** (一个开源协议，旨在促进使用不同框架构建的智能体之间的无缝通信和协作) 的Agentic Stack，它将本质上允许你自信地构建Agentic系统，并根据需要将其大规模部署到生产环境中。

Okay. So scanner alert. So please get your phone out. I'm going to share with you some useful QR codes.

好的。扫描警报。请拿出你的手机。我将与你分享一些有用的二维码。

So the first one that I want to share with you is code. So in this repository, you will find all the code related to ADK. So samples, getting started, everything you will find here. Three, two, one.

所以我想与你分享的第一个是代码。在这个仓库中，你将找到所有与ADK相关的代码。所以示例、入门指南，所有这些你都会在这里找到。三、二、一。

Okay. And then if you want to know how, I mean we covered this in 30 minutes, but it can be like a one-hour workshop.

好的。然后如果你想知道如何操作，我的意思是我们在30分钟内涵盖了这些，但这可能是一个长达一小时的研讨会。

So here you can find a webinar we are going to run together with Anthropic next month and where we show also the integration with Agent-to-Agent Protocol. So please scan this code. Three, two, one.

所以在这里你可以找到我们下个月将与Anthropic一起举办的网络研讨会，我们将在其中展示与Agent-to-Agent Protocol的集成。所以请扫描这个二维码。三、二、一。

Okay. And then I mean I was fast. So I assume that you have several questions. Feel free to reach out. I'm always happy to answer your questions.

好的。我的意思是，我讲得很快。所以我猜你们有很多问题。请随时提问。我总是乐意回答你们的问题。

But with that being said, I hope you enjoyed the session. I am just 20 seconds late. So, I hope you enjoyed, and thank you for attending this.

话虽如此，我希望你喜欢本次会议。我只晚了20秒。所以，我希望你玩得开心，感谢你的出席。