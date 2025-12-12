---
title: MCP 协议深度解析：超越工具调用的丰富交互
summary: 本文深入探讨了模型上下文协议（MCP）的各项功能，包括提示、资源、工具、采样和根等核心原语，旨在展示如何构建超越传统工具调用的更丰富、更智能的AI应用。同时，文章还展望了MCP在网络集成、授权、扩展性以及未来代理、多模态等方面的发展。
area: tech-insights
category: technology
project:
- ai-impact-analysis
tags:
- ai-applications
- developer-tools
- llm-integration
- model-context-protocol
- web-integration
people: []
companies_orgs: []
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
source: https://www.youtube.com/watch?v=HNzH5Us1Rvg
status: evergreen
---
### 引言：MCP 的核心能力与愿景

Well, hello. My name is David. I'm a member of technical staff at Anthropic and one of the co-creators of MCP. And today I'm going to tell you a little bit more about the protocol and the things you can do just to give you an understanding of what there's more to the protocol than what most people use it for at the moment, which would be tools.
大家好。我是 David，Anthropic 的一名技术人员，也是 **MCP**（Model Context Protocol: 模型上下文协议）的共同创建者之一。今天我将为大家详细介绍这个协议以及它所能实现的功能，让大家了解，除了目前大多数人使用的工具功能之外，这个协议还有更多潜力。

So really the goal today is to showcase you what the protocol is capable of and how you can use it in ways to build richer interactions with MCP clients that goes beyond the tool calling that most people are used to.
因此，今天的主要目标是向大家展示这个协议的能力，以及如何利用它与 **MCP**（Model Context Protocol: 模型上下文协议）客户端建立更丰富的交互，超越大多数人习惯的工具调用方式。

And I will first go through all the different like what we call primitives like ways for the servers to expose information to a client before we go into some of the bit more lesser known aspects of the protocol, and then I want to talk a little bit about like how to build a really rich interaction before we take a little stab of what's coming next for MCP and how we bring MCP to the web.
我将首先介绍我们称之为“原语”的所有不同方式，即服务器向客户端暴露信息的方法，然后深入探讨协议中一些鲜为人知的方面。之后，我想谈谈如何构建真正丰富的交互，最后我们将展望 **MCP**（Model Context Protocol: 模型上下文协议）的未来发展以及如何将其引入网络。

### 核心原语之一：提示 (Prompts)

But to just get you started, I want to talk about one of the MCP primitives that servers can expose to MCP clients that very few people know.
为了让大家入门，我想先介绍一个 **MCP**（Model Context Protocol: 模型上下文协议）原语，即服务器可以向 **MCP**（Model Context Protocol: 模型上下文协议）客户端暴露，但鲜为人知的功能。

And those are called prompts.
它们被称为**提示**（Prompts: 预定义的AI交互模板）。

And what a prompts are really are predefined templates for AI interactions.
**提示**（Prompts: 预定义的AI交互模板）实际上是用于AI交互的预定义模板。

And that's to say it's a way for an MCP server to expose a set of text, you know, like a prompt in a way that allows users to directly add this to the context window and see how they would use for example the MCP server you're building.
也就是说，这是一种 **MCP**（Model Context Protocol: 模型上下文协议）服务器暴露一组文本的方式，就像一个提示，允许用户直接将其添加到上下文窗口，并查看他们将如何使用您正在构建的 **MCP**（Model Context Protocol: 模型上下文协议）服务器。

And there are really the two main use cases here is for you as an MCP server author to provide an example for that you can showcase to the user so that they know how to use the MCP server in the best way because realistically you are the one who has built it.
这里主要有两种用例：第一种是作为 **MCP**（Model Context Protocol: 模型上下文协议）服务器的作者，您可以提供一个示例向用户展示，以便他们知道如何以最佳方式使用 **MCP**（Model Context Protocol: 模型上下文协议）服务器，因为实际上，您是它的开发者。

You are the one who knows how to use it in the best possible way and probably at the time you would release it are the one who has used it the most time.
您是最了解如何以最佳方式使用它的人，并且在发布时，您可能也是使用它时间最长的人。

But since MCP prompts are also dynamic in a way, they're just code under the hood that are executed in MCP server, they allow you to do even richer things than that.
但由于 **MCP**（Model Context Protocol: 模型上下文协议）**提示**（Prompts: 预定义的AI交互模板）在某种程度上也是动态的，它们本质上是在 **MCP**（Model Context Protocol: 模型上下文协议）服务器中执行的代码，因此它们允许您实现更丰富的功能。

What you can do, and I want to showcase this in this scenario, is an MCP prompt that a user invokes in this Z editor here that will fetch directly GitHub comments that into my context window.
例如，在这种情况下，我想向大家展示的是一个用户在此 Z 编辑器中调用的 **MCP**（Model Context Protocol: 模型上下文协议）**提示**（Prompts: 预定义的AI交互模板），它将直接把 GitHub 评论获取到我的上下文窗口中。

And so what you see me here doing is just basically put into the context window the comments from my pull request that is that you know I've written so that I can go and interact with it and have then the model go and help me you know apply the changes that has been requested to me or whatever I want to do.
所以你们看到我在这里做的，基本上就是把我的拉取请求（就是我写的那份）的评论放进上下文窗口，这样我就可以与它进行交互，然后让模型帮助我应用那些被请求的修改，或者做任何我想做的事情。

And so this is really a way for exposing things that the user should directly interact and the user should directly wants to put into the context window before it interacts with the LLM.
因此，这确实是一种暴露信息的方式，用户应该直接与这些信息互动，并且用户应该直接将其放入上下文窗口，然后再与 **LLM**（Large Language Model: 大型语言模型）进行交互。

So it's different from that from tools where the model decides when to do it.
这与**工具**（Tools: 由模型决定何时调用的外部动作）不同，**工具**（Tools: 由模型决定何时调用的外部动作）是由模型决定何时执行的。

This is what that the user decides I want to add this to the context window.
而**提示**（Prompts: 预定义的AI交互模板）则是用户决定“我想把这个添加到上下文窗口”。

And if you look carefully, there's one additional thing that very very few people know that you can do and that is prompt completion.
如果仔细观察，还有一件很少人知道的事情，那就是**提示补全**（Prompt Completion: 提示中的参数化模板）。

So if you have looked carefully, there was a way where it showcased quickly a popup of me selecting the poll requests that are available to myself.
所以如果您仔细观察过，会看到一个快速弹出的窗口，显示我正在选择可用的拉取请求。

And that is a way that you can that is a thing that you can provide as an MCP server author to build richer parameterized templates for example.
这正是作为 **MCP**（Model Context Protocol: 模型上下文协议）服务器作者可以提供的一种功能，例如构建更丰富的参数化模板。

And this is exceptionally easy to do in the code.
这在代码中实现起来异常简单。

Like if you're in Typescript, building a prompt that provides users with such a template and have parameters for it and like autocompletion is nothing more than a few lines of code that cloud code together with cloud 4 can most of the time write basically for you.
比如，如果您使用 TypeScript，构建一个为用户提供此类模板、包含参数并支持自动补全的**提示**（Prompts: 预定义的AI交互模板），无非就是几行代码，而 Claude Code 和 Claude 4 大部分时候都能为您完成。

And it's just that simple.
就是这么简单。

It's a function for the completion.
它是一个用于补全的函数。

It's a function for generating the prompt.
它是一个用于生成**提示**（Prompts: 预定义的AI交互模板）的函数。

And so this is already like one of these primitives you can use to build an interaction for users with an MCP server, but it's just a little bit more richer than a tool call.
所以这已经是您可以使用的一种原语，用于构建用户与 **MCP**（Model Context Protocol: 模型上下文协议）服务器之间的交互，但它比**工具**（Tools: 由模型决定何时调用的外部动作）调用要丰富一些。

### 核心原语之二：资源 (Resources)

And a second one of these is something that we call resources.
第二个原语我们称之为**资源**（Resources: 服务器暴露的原始数据或内容）。

It's another primitive than an MCP server can expose to an MCP client.
这是 **MCP**（Model Context Protocol: 模型上下文协议）服务器可以向 **MCP**（Model Context Protocol: 模型上下文协议）客户端暴露的另一个原语。

And while prompts are really focused on text snippets that a user can add into the context window, resources are about exposing raw data or content from a server.
**提示**（Prompts: 预定义的AI交互模板）主要关注用户可以添加到上下文窗口的文本片段，而**资源**（Resources: 服务器暴露的原始数据或内容）则是关于暴露服务器的原始数据或内容。

And why would you want to do this?
为什么要这样做呢？

There are two ways why you want to do this.
这样做有两个原因。

So one thing is most of the clients today would allow you to add this raw content directly to the context window.
首先，目前大多数客户端都允许您将这些原始内容直接添加到上下文窗口。

So in that way they're not that different from context from prompts but it also allows application to do additional things to that raw data and that could be for example building embeddings around this data the server exposes and then do retrieval augmented generation by adding to the context window the most appropriate things.
因此，从这个角度看，它们与**提示**（Prompts: 预定义的AI交互模板）没有太大区别，但它也允许应用程序对这些原始数据执行额外操作，例如围绕服务器暴露的这些数据构建嵌入，然后通过向上下文窗口添加最适当的内容来进行检索增强生成。

And so this is an area that at the moment I feel is a bit underexplored.
所以我觉得这方面目前还有点未被充分探索。

And I just want to quickly showcase you how resources work.
我只想快速向大家展示**资源**（Resources: 服务器暴露的原始数据或内容）是如何运作的。

In this case, this is again one of these ways where an MCP client exposes a resource as a file like object.
在这种情况下，这又是 **MCP**（Model Context Protocol: 模型上下文协议）客户端将**资源**（Resources: 服务器暴露的原始数据或内容）作为文件类对象暴露的一种方式。

And in this scenario here, we are exposing the database schema for a PostgreSQL database as resources and then you can add them in Cloud Desktop just like files and that way you can tell Claude this is the tables I care about and now please go ahead and visualize them.
在此场景中，我们将 PostgreSQL 数据库的数据库架构作为**资源**（Resources: 服务器暴露的原始数据或内容）暴露出来，然后您可以在 Cloud Desktop 中像文件一样添加它们，这样您就可以告诉 Claude，这些是我关心的表，现在请继续并将其可视化。

And so in this scenario, what you're going to see is Claude is going to go and write a beautiful diagram that visualizes the database schema for me.
因此，在这个场景中，您将看到 Claude 将会编写一个漂亮的图表，为我可视化数据库架构。

And I've exposed the schema via resources.
我通过**资源**（Resources: 服务器暴露的原始数据或内容）暴露了这些架构。

There's a lot of unexport space still here.
这里还有很多未探索的空间。

Again, if you go beyond just like adding it file and think about like retrieval augmentation or any other thing the application might want to do.
再次强调，如果您超越了仅仅像添加文件一样使用它，并考虑检索增强或应用程序可能想要做的任何其他事情。

### 核心原语之三：工具 (Tools)

And so those are two primitives.
所以这两种是原语。

One is prompts again the things that the user interacts with there's the second one is resources that the application interact with then of course there should be a third one that you all are very familiar with that I don't want to get into too much depth because if you have built an MCP server you probably have built it for exposing a tool and so tools are really these actions of course that can be invoked that's like one of the I think most magical moment I feel when you build an MCP server is when the model for the first time invokes something that you care about that you have built for and has this little impact on you know it might be like querying a database for you or whatever it might be.
一个是**提示**（Prompts: 预定义的AI交互模板），是用户与之交互的东西；第二个是**资源**（Resources: 服务器暴露的原始数据或内容），是应用程序与之交互的东西；当然，还有第三个，大家应该非常熟悉，我不想深入探讨，因为如果您构建了 **MCP**（Model Context Protocol: 模型上下文协议）服务器，很可能就是为了暴露一个**工具**（Tools: 由模型决定何时调用的外部动作），而**工具**（Tools: 由模型决定何时调用的外部动作）当然就是这些可以被调用的动作。我认为在构建 **MCP**（Model Context Protocol: 模型上下文协议）服务器时，最神奇的时刻之一就是模型第一次调用您所关心、为您构建的东西，并产生了一点影响，比如为您查询数据库或任何其他事情。

Um but this is again the thing that the model decides when to call to an action.
但这再次强调，是由模型决定何时调用某个动作。

And so these are three very basic primitives that the protocol exposes.
所以这些是协议暴露的三个非常基本的原语。

### 交互模型：何时使用何种原语

And if you think carefully about these three primitives that I just showcased you to to you, there's a little bit of overlap about like how do you use like they could like when do you use what really and so there's something that very that we don't talk enough about and it's somewhere buried in the specification language of the model context protocol is what I call the interaction model and I think showcasing it hopefully makes clear when you use What?
如果您仔细思考我刚才向大家展示的这三个原语，会发现它们在使用上有些重叠，比如何时使用哪个。所以，有一个我们很少谈论，但深埋在模型上下文协议规范语言中的东西，我称之为**交互模型**（Interaction Model: 控制用户、应用、模型如何与MCP原语互动的方式）。我认为展示它有望让大家清楚何时使用什么。

Because the interaction model is built in such a way that you can expose the same data in three different ways depending on when you want to have it show up.
因为**交互模型**（Interaction Model: 控制用户、应用、模型如何与MCP原语互动的方式）的构建方式是，您可以根据数据何时出现的需求，以三种不同的方式暴露相同的数据。

And prompts again are these userdriven things.
**提示**（Prompts: 预定义的AI交互模板）再次强调，是用户驱动的。

It's the thing the user invokes adds to the context window.
它是用户调用并添加到上下文窗口的东西。

And the most common scenario where how you see these pop up is a slash command, an add command, something like that.
这些弹出的最常见场景是斜杠命令、添加命令或类似的东西。

Resources on the other hand are all applicationdriven.
另一方面，**资源**（Resources: 服务器暴露的原始数据或内容）都是应用程序驱动的。

The application that uses the LLM be it cloud desktop be it VS code something like that fully is decides what it wants to do with that.
使用 **LLM**（Large Language Model: 大型语言模型）的应用程序，无论是 Cloud Desktop 还是 VS Code 之类的，完全由它决定如何处理这些数据。

And then lastly tools are driven by the model.
最后，**工具**（Tools: 由模型决定何时调用的外部动作）是由模型驱动的。

In between, you know, an AI application using a model and a user, we have all three parts that we eventually cover using these three basic primitives.
在 **AI**（Artificial Intelligence: 人工智能）应用程序使用模型和用户之间，我们最终通过这三个基本原语涵盖了所有三个部分。

And that allows you already to go to a little bit of a richer application and experience than what most people can currently do with tools because you just have a way to interact with the user a bit more nuanced than if you just wait for this model to call the tool.
这已经允许您构建比大多数人目前使用**工具**（Tools: 由模型决定何时调用的外部动作）所能实现的更丰富的应用程序和体验，因为您有了一种与用户进行更细致交互的方式，而不仅仅是等待模型调用**工具**（Tools: 由模型决定何时调用的外部动作）。

### 更丰富的交互：采样 (Sampling) 与根 (Roots)

But we can even go beyond that because while these basic primitives get us a little bit further than what we see most MCP servers do at the moment, there are even richer interactions that we want to enable.
但我们甚至可以超越这些，因为尽管这些基本原语让我们比目前大多数 **MCP**（Model Context Protocol: 模型上下文协议）服务器所做的更进一步，但我们希望实现更丰富的交互。

And to make this a bit more understandable, here's a really an example I want to give you that showcases this problem.
为了让这一点更容易理解，我想给大家举一个例子，它展示了这个问题。

So how can you build an MCP server for example that summarizes a discussion from an issue tracker?
那么，例如，您如何构建一个可以总结问题追踪器中讨论的 **MCP**（Model Context Protocol: 模型上下文协议）服务器呢？

So on one hand side I can build an MCP server that exposes this kind of data very simple and that's quite clear but how do I do the summarization step because for the summarization step I obviously need a model and so there in one way to go and build this is you can build an MCP server that is this issue tracker server and you have a choice here you can bring your own SDK and call the model have the model summarizes
一方面，我可以构建一个非常简单的 **MCP**（Model Context Protocol: 模型上下文协议）服务器来暴露这类数据，这很清楚；但如何进行总结步骤呢？因为总结显然需要一个模型。所以，一种构建方式是您可以构建一个作为问题追踪服务器的 **MCP**（Model Context Protocol: 模型上下文协议）服务器，您在这里有一个选择：您可以自带 **SDK**（Software Development Kit: 软件开发工具包）并调用模型，让模型进行总结。

But then there's a little problem to that and the problem is that the client has a model selected be it like clawed or whatever else but the server the MCP server that you've built doesn't know what model the client has configured and so you bring your own SDK like of of a model provider and be it the anthropic SDK you still need then like a API key that this user needs to provide and gets very quickly very awkward and so MCP has a little hidden feature or a little primitive called sampling that allows a server to request a completion from the client.
但这里有一个小问题：客户端可能选择了某个模型，比如 Claude 或其他模型，但您构建的 **MCP**（Model Context Protocol: 模型上下文协议）服务器并不知道客户端配置了哪个模型。因此，如果您自带模型提供商的 **SDK**（Software Development Kit: 软件开发工具包），比如 Anthropic **SDK**（Software Development Kit: 软件开发工具包），您仍然需要用户提供一个 **API Key**（Application Programming Interface Key: 应用程序编程接口密钥），这很快就会变得非常尴尬。因此，**MCP**（Model Context Protocol: 模型上下文协议）有一个隐藏的小功能或小原语，称为**采样**（Sampling: 服务器请求客户端完成模型推理的能力），它允许服务器向客户端请求完成。

What does this mean?
这意味着什么？

It means that the server can use a model independently from like don't having to provide an SDK itself but in but asks the client which model you have configured and the client is the one providing the completion to the server.
这意味着服务器可以使用模型，而无需自己提供 **SDK**（Software Development Kit: 软件开发工具包），而是询问客户端配置了哪个模型，然后由客户端向服务器提供完成结果。

And what does this do?
这有什么作用呢？

It does two things.
它有两方面的作用。

First of all, it allows the client to get full control over the security, privacy and the cost.
首先，它允许客户端完全控制安全性、隐私和成本。

So instead of having to provide an additional API key, you might tap into the subscription that your client might already have.
因此，您可能无需提供额外的 **API Key**（Application Programming Interface Key: 应用程序编程接口密钥），而是可以利用客户端可能已有的订阅。

But it allows also a second part which is that if you take multiple if you chain MCP servers in an interesting way, it makes this whole pattern very recursive.
但它也允许第二部分，即如果您以有趣的方式链接多个 **MCP**（Model Context Protocol: 模型上下文协议）服务器，这会使整个模式变得非常递归。

And what do I mean by that?
我这是什么意思呢？

It's a bit abstract.
这有点抽象。

You can take an MCP server that exposes a tool, but during the tool execution, you might want to use more MCP servers downstream.
您可以有一个暴露**工具**（Tools: 由模型决定何时调用的外部动作）的 **MCP**（Model Context Protocol: 模型上下文协议）服务器，但在**工具**（Tools: 由模型决定何时调用的外部动作）执行期间，您可能希望使用更多的下游 **MCP**（Model Context Protocol: 模型上下文协议）服务器。

And somewhere downstream in this like system, there might be then your Asia Tracker server that wants to go and have a completion.
在这个系统的某个下游，可能存在您的亚洲追踪服务器，它想要进行一次完成操作。

But using sampling you can bubble up the requests such that the client always stays in full control over the cost of the subscription whatever you want to use.
但通过**采样**（Sampling: 服务器请求客户端完成模型推理的能力），您可以将请求向上冒泡，从而使客户端始终完全控制订阅的成本，无论您想使用什么。

It stays in full control of the privacy over the cost of this interaction and basically manages every interaction that an MCP server wants to do with a model.
它完全控制着此交互的隐私和成本，并基本上管理着 **MCP**（Model Context Protocol: 模型上下文协议）服务器希望与模型进行的每一次交互。

And that allows for very powerful chaining and it allows for like more complex patterns that go already into like ways of how you can build little MCP agents.
这使得非常强大的链式操作成为可能，也允许更复杂的模式，这些模式已经涉及到如何构建小型 **MCP**（Model Context Protocol: 模型上下文协议）代理的方式。

But that's sampling.
这就是**采样**（Sampling: 服务器请求客户端完成模型推理的能力）。

Sampling at the moment is sadly I think one of the more exciting features but also one of the features that's the least supported in clients.
**采样**（Sampling: 服务器请求客户端完成模型推理的能力）目前，很遗憾，我认为是最令人兴奋的功能之一，但也是在客户端中支持最少的功能之一。

For our first party projects products, we will bring sampling somewhere this year.
对于我们自己的第一方产品项目，我们将在今年某个时候引入**采样**（Sampling: 服务器请求客户端的能力）。

And so then you can hopefully start building more exciting MCP servers.
这样，您就可以开始构建更令人兴奋的 **MCP**（Model Context Protocol: 模型上下文协议）服务器了。

And then there's the last primitive that I want to touch on that's also a bit more interesting and it's one of these things that in retrospective as one of the person who has built the protocol I've probably named terribly to be fair I'm not a very not not very good at naming and you will see this throughout the talk probably but there's a thing called roots and roots is also an interesting aspect because let's imagine I want to build today an MCP server that deals with my git commands I don't want to deal with git.
然后是我想谈的最后一个原语，它也更有趣一些，回顾起来，作为协议的构建者之一，我可能给它起了个糟糕的名字，老实说，我不太擅长命名，你们在整个演讲中可能会发现这一点，但有一个东西叫做**根**（Roots: 服务器查询客户端以获取开放项目或目录信息的能力），**根**（Roots: 服务器查询客户端以获取开放项目或目录信息的能力）也是一个有趣的方面，因为让我们想象一下，我今天想构建一个处理我的 Git 命令的 **MCP**（Model Context Protocol: 模型上下文协议）服务器，我不想处理 Git。

I don't want to do source control commands.
我不想执行源代码控制命令。

I don't remember any of that.
我什么都不记得了。

I want to have MCP deal like an MCP server deal with this.
我希望 **MCP**（Model Context Protocol: 模型上下文协议）像 **MCP**（Model Context Protocol: 模型上下文协议）服务器一样处理这个问题。

So now I'm going to hook up an MCP server into my favorite IDE.
所以现在我将把一个 **MCP**（Model Context Protocol: 模型上下文协议）服务器连接到我最喜欢的 **IDE**（Integrated Development Environment: 集成开发环境）中。

But how does the IDE know how does the MC sorry, how does the MCP server know what are the open projects in the IDE?
但是 **IDE**（Integrated Development Environment: 集成开发环境）怎么知道……抱歉，**MCP**（Model Context Protocol: 模型上下文协议）服务器怎么知道 **IDE**（Integrated Development Environment: 集成开发环境）中有哪些开放项目呢？

Because obviously I want to run the git commands in the workspaces I have open, right?
因为很明显，我想在我已打开的工作区中运行 Git 命令，对吧？

And so roots is a way for the server to inquire from the client such as VS code for example what are the projects you have open so that I can operate within only those directories that the server has opened and I know where I want to execute my git commands and this again is a feature that's not that widely used but for example VS code currently does support this and so these These are, you know, just all the big primitives that MCP offers.
因此，**根**（Roots: 服务器查询客户端以获取开放项目或目录信息的能力）是服务器向客户端（例如 VS Code）查询您已打开的项目的一种方式，这样我就可以只在服务器已打开的那些目录中操作，并且我知道我想在哪里执行我的 Git 命令。这又是一个不那么广泛使用的功能，但例如 VS Code 目前确实支持它，所以这些就是 **MCP**（Model Context Protocol: 模型上下文协议）提供的所有主要原语。

So, we have five primitives, three on the server side, two on the client side.
所以，我们有五个原语，三个在服务器端，两个在客户端。

### 构建丰富的交互：以聊天应用为例

But how you put it all together to actually build a rich interaction because that's what we want.
但如何将它们全部组合起来，真正构建一个丰富的交互呢？因为这正是我们想要的。

We want to build something for users that's a bit richer than just tool calling.
我们希望为用户构建一些比仅仅调用**工具**（Tools: 由模型决定何时调用的外部动作）更丰富的东西。

And so, let's take a look at how you will build a hypothetical MCP server that interacts with your favorite chat application, be that Discord, be it Slack.
那么，让我们来看看如何构建一个与您喜欢的聊天应用程序（无论是 Discord 还是 Slack）交互的假想 **MCP**（Model Context Protocol: 模型上下文协议）服务器。

You could use prompts to give examples to users such as like summarize this discussion and you can use completions with recent threads, users or whatever you want them to expose.
您可以使用**提示**（Prompts: 预定义的AI交互模板）为用户提供示例，比如“总结这次讨论”，并且您可以使用最近的帖子、用户或任何您希望暴露的内容进行补全。

You can have additional prompts like what's new, what happened since yesterday.
您还可以添加额外的**提示**（Prompts: 预定义的AI交互模板），比如“有什么新消息”、“昨天发生了什么”。

And so that's one way the user can just kickstart right away into using the server you have provided and get the ideas that you how you intended it to be used and then you can use resources to directly list the channels to expose recent threats that happened in the in the you know chat application such that the MCP client can index it deal with it in ways that it that it wants.
所以，这是一种用户可以立即开始使用您提供的服务器的方式，并理解您预期的使用方式。然后，您可以使用**资源**（Resources: 服务器暴露的原始数据或内容）直接列出频道，暴露聊天应用程序中发生的最新威胁，以便 **MCP**（Model Context Protocol: 模型上下文协议）客户端可以对其进行索引并以其希望的方式处理。

And then of course last but not least we still have our tools.
当然，最后但同样重要的是，我们仍然有**工具**（Tools: 由模型决定何时调用的外部动作）。

We have search, we have read channels, we have reading a threads and we would use sampling to summarize a thread for example and really expose this.
我们有搜索、读取频道、阅读帖子，我们会使用**采样**（Sampling: 服务器请求客户端完成模型推理的能力）来总结一个帖子，例如，并真正暴露它。

And that's a way to really build a much much much richer experience with MCP to use the full power that the protocol has to offer.
这是一种真正通过 **MCP**（Model Context Protocol: 模型上下文协议）构建更丰富体验的方式，以充分利用该协议所提供的全部功能。

### 将 MCP 引入网络：授权 (Authorization) 与扩展性 (Scaling)

But this is just the the beginning because most of these experiences if we build MCP servers so far have been experiences that stayed local.
但这仅仅是个开始，因为到目前为止，我们构建的 **MCP**（Model Context Protocol: 模型上下文协议）服务器大部分都是本地体验。

Out of the 10,000 MCP servers the community has built over the last six to seven months.
在过去六到七个月里，社区已经构建了 10,000 个 **MCP**（Model Context Protocol: 模型上下文协议）服务器。

The vast majority are local experiences.
绝大多数都是本地体验。

But I think we can take the next step and I think this is MCP's really big next thing is bringing MCP servers away from the local experience to the web.
但我认为我们可以迈出下一步，我认为这是 **MCP**（Model Context Protocol: 模型上下文协议）真正重要的下一步：将 **MCP**（Model Context Protocol: 模型上下文协议）服务器从本地体验带到网络上。

And so what does this mean?
那么这意味着什么呢？

It means that instead of having an MCP server that is, you know, a Docker container or some form of local executable, it is nothing else but a website that your client can connect to and exposes MCP and you talk to.
这意味着 **MCP**（Model Context Protocol: 模型上下文协议）服务器不再是 Docker 容器或某种本地可执行文件，而是一个网站，您的客户端可以连接到它，它暴露 **MCP**（Model Context Protocol: 模型上下文协议），并且您可以与之对话。

But for that we need two critical components.
但为此，我们需要两个关键组件。

We need authorization and we need scaling.
我们需要**授权**（Authorization: 允许MCP服务器安全地访问用户私有数据）和**扩展性**（Scaling: 确保MCP服务器能高效处理大量请求）。

And in the most recent specification of MCP, we made a ton of changes towards this from the lessons we've learned and the feedback we honestly got from the community as well as like key partners.
在 **MCP**（Model Context Protocol: 模型上下文协议）的最新规范中，我们根据所学到的经验教训以及从社区和关键合作伙伴那里获得的反馈，对此进行了大量修改。

And we work closely for example with like people in the industry that worked on and other aspects to get this right.
例如，我们与行业中从事相关工作的人员以及其他方面的人员紧密合作，以确保正确。

And so with authorization in MCP, what you can do is you can basically provide the private context of a user that might be behind an online account or something directly to the LLM application.
因此，通过 **MCP**（Model Context Protocol: 模型上下文协议）中的**授权**（Authorization: 允许MCP服务器安全地访问用户私有数据），您可以将用户（可能拥有在线账户或类似身份）的私有上下文直接提供给 **LLM**（Large Language Model: 大型语言模型）应用程序。

And it really enables MCP authors to bind the capability of the MCP servers to a user, an online account, something like that.
它真正使 **MCP**（Model Context Protocol: 模型上下文协议）作者能够将 **MCP**（Model Context Protocol: 模型上下文协议）服务器的功能绑定到用户、在线账户或类似实体。

And in order to do that, the way this currently has to work in MCP is that you do this by providing OAUTH as the authorization layer.
为了实现这一点，目前在 **MCP**（Model Context Protocol: 模型上下文协议）中必须通过提供 **OAuth**（Open Authorization: 一种开放标准，允许用户授权第三方应用访问其受保护资源而无需共享凭证）作为**授权**（Authorization: 允许MCP服务器安全地访问用户私有数据）层来完成。

And the MCP specification basically says you need to do O 2.1.
**MCP**（Model Context Protocol: 模型上下文协议）规范基本上要求您使用 **OAuth 2.1**（Open Authorization 2.1: OAuth 2.0 的安全强化版本）。

And that's a bit daunting because very few people know what OOTH 2.1 is.
这有点令人望而生畏，因为很少有人知道 **OAuth 2.1**（Open Authorization 2.1: OAuth 2.0 的安全强化版本）是什么。

But OA 2.1 is usually just O 2.0 with all the basic things you would do anyway.
但 **OAuth 2.1**（Open Authorization 2.1: OAuth 2.0 的安全强化版本）通常只是 **OAuth 2.0**（Open Authorization 2.0: OAuth 2.1 的前身，广泛用于授权）包含了您无论如何都会做的所有基本操作。

All these security considerations that people that have done a wall telling you anyway to do.
所有这些安全考量，做过授权的人无论如何都会告诉您这样做。

So it's just OS 2.0 zero a little bit cleaned up and you're probably already doing it if you're doing a wall and if you do implement this wall flow you get two interesting patterns out of that and the first one is the scenario of an MCP server in the web and a good example of this is if you for example a payment provider and you have you know website payment.com and I as a user have an online account there now I as the payment provider can expose mcp.payment.com that the user can put into an MCP client and the MCP client will do the or flow.
所以它只是 **OAuth 2.0**（Open Authorization 2.0: OAuth 2.1 的前身，广泛用于授权）稍微清理了一下，如果您正在进行授权，可能已经在这样做了。如果您确实实现了这种授权流程，您会得到两种有趣的模式。第一种是网页中的 **MCP**（Model Context Protocol: 模型上下文协议）服务器场景。一个很好的例子是，如果您是一个支付提供商，并且您有一个网站 payment.com，我作为用户在那里有一个在线账户。现在，我作为支付提供商可以暴露 mcp.payment.com，用户可以将其放入 **MCP**（Model Context Protocol: 模型上下文协议）客户端，并且 **MCP**（Model Context Protocol: 模型上下文协议）客户端将执行授权流程。

I log in as my account and I know this is payment.com.
我以我的账户登录，我知道这是 payment.com。

I know this is the the person that is my online account with the provider that I trust.
我知道这是我在我信任的提供商那里拥有的在线账户。

I don't trust some random Docker container running locally built by a third party developer anymore.
我不再信任第三方开发者在本地构建的某个随机 Docker 容器。

I trust the person I already trust with the data anyway and their developers.
我信任我本来就信任数据的人及其开发者。

And on the their development side, they can just ex like ex like update this server as they want and they don't have to wait for me to download a new like docker image.
在他们的开发端，他们可以根据需要更新这个服务器，而无需等待我下载新的 Docker 镜像。

And so this is I think will be a really really big step for enabling MCP servers to be exposed on the web and MCP clients to interact basically with all the online interactions that you already have.
因此，我认为这将是实现 **MCP**（Model Context Protocol: 模型上下文协议）服务器在网络上暴露，以及 **MCP**（Model Context Protocol: 模型上下文协议）客户端与您已有的所有在线交互进行互动的非常非常重要的一步。

And here's just a small little example of this.
这里只是一个小小的例子。

In this scenario, we use Cloud AAI integrations which we launched earlier this month to connect to a remote server and use this oath flow to log in our user to then have tools available that are aware of my data that I care about it are for it is for me.
在这个场景中，我们使用了本月早些时候推出的 Cloud AAI 集成，连接到远程服务器，并使用这个 **OAuth**（Open Authorization: 一种开放标准，允许用户授权第三方应用访问其受保护资源而无需共享凭证）流程登录用户，然后提供那些了解我的数据、我关心的数据、为我服务的数据的**工具**（Tools: 由模型决定何时调用的外部动作）。

But it enables another aspect.
但它还启用了另一个方面。

It enables enterprises to smoothly integrate MCP into their ecosystem how they usually build applications.
它使企业能够将 **MCP**（Model Context Protocol: 模型上下文协议）无缝集成到他们通常构建应用程序的生态系统中。

And what does this mean?
这意味着什么？

It means that internally they can deploy an MCP server to their internet or whatever like they use and use an identity provider like Azure ID or Octar or whatever that central identity provider that you usually use for single sign on and you can have that still exist and it will be the one that gives you the tokens that you require to interact with the MCP server.
这意味着在内部，他们可以将 **MCP**（Model Context Protocol: 模型上下文协议）服务器部署到他们的内网或任何他们使用的环境中，并使用像 Azure AD 或 Okta 这样的身份提供商，也就是您通常用于**单点登录**（SSO: Single Sign-On: 一种身份验证方案，允许用户使用一组凭据访问多个独立软件系统）的中央身份提供商。这个提供商仍然存在，并且会为您提供与 **MCP**（Model Context Protocol: 模型上下文协议）服务器交互所需的令牌。

And that has a lot to say that what it ends up with is a very smooth integration.
这很大程度上意味着最终会实现非常流畅的集成。

You as a development team internally, you're going to build an MCP server that you control that you could control the deployment and the user just logs in in the morning with their normal SSO like you always would do and anytime they use an MCP server from them on on out, they will just be logged in and have access to the data that you know the that is their data that the company has for them.
作为内部开发团队，您将构建一个由您控制部署的 **MCP**（Model Context Protocol: 模型上下文协议）服务器，用户早上只需像往常一样使用常规的 **SSO**（Single Sign-On: 一种身份验证方案，允许用户使用一组凭据访问多个独立软件系统）登录，之后任何时候使用 **MCP**（Model Context Protocol: 模型上下文协议）服务器，都将保持登录状态，并有权访问公司为他们提供的、属于他们的数据。

And so this I think enables a new way that I've already seen some of the big enterprises do to build really vast systems of MCP servers that allow part of the company to build a server while the other part deals about the integrations really nicely separates integration builder and platform builders.
因此，我认为这开启了一种新方式，我已经看到一些大型企业这样做，构建真正庞大的 **MCP**（Model Context Protocol: 模型上下文协议）服务器系统，允许公司的一部分构建服务器，而另一部分处理集成，从而很好地分离了集成构建者和平台构建者。

And then the second part that we require is scaling.
然后我们需要的第二部分是**扩展性**（Scaling: 确保MCP服务器能高效处理大量请求）。

And we just added a new thing called streamable HTTP which is just to say it's a lot of lot of words to say basically we want MCP servers to scale similar to normal APIs.
我们刚刚添加了一个新功能，叫做**可流式 HTTP**（Streamable HTTP: 允许服务器以流式方式发送数据，实现更丰富的实时交互），这只是用很多词来表达一个基本意思：我们希望 **MCP**（Model Context Protocol: 模型上下文协议）服务器能够像普通的 **API**（Application Programming Interface: 应用程序编程接口）一样进行**扩展**（Scale: 增加系统处理请求的能力）。

And it's as simple as that.
就这么简单。

You have as a server author you can choose to either return results directly as you would be in in a REST API except that it's not quite just REST or if you need to you can open a stream and get richer interactions.
作为服务器作者，您可以选择直接返回结果，就像在 **REST API**（Representational State Transfer Application Programming Interface: 一种基于HTTP协议的软件架构风格，用于构建Web服务）中一样，只是它不完全是 REST，或者如果需要，您可以打开一个流以获得更丰富的交互。

So in the most simple way, you just want to provide a tool call result.
所以最简单的方式是，您只想提供一个**工具**（Tools: 由模型决定何时调用的外部动作）调用结果。

You get a request, you return application JSON and off you go.
您收到请求，返回 `application/JSON`，然后就完成了。

End of the story.
故事结束。

You close the connection and the next connection come in and you know get served by yet another Lambda function.
您关闭连接，下一个连接进来，然后由另一个 Lambda 函数提供服务。

But if you need richer interactions such as notification or features we talked about like sampling, a request comes in, you start a stream, the client accepts the stream, and now you're being able to send additional things to the client before you're returning finally the result.
但是，如果您需要更丰富的交互，例如通知或我们讨论过的**采样**（Sampling: 服务器请求客户端完成模型推理的能力）等功能，请求进来后，您启动一个流，客户端接受该流，然后您可以在最终返回结果之前向客户端发送其他内容。

And those authorization and scaling together is really the foundation to make MCP go from this local experience now to be truly a standard for how LLM applications will interact with the web.
**授权**（Authorization: 允许MCP服务器安全地访问用户私有数据）和**扩展性**（Scaling: 确保MCP服务器能高效处理大量请求）共同构成了 **MCP**（Model Context Protocol: 模型上下文协议）从本地体验走向未来的真正基础，使其成为 **LLM**（Large Language Model: 大型语言模型）应用程序如何与网络交互的标准。

### MCP 的未来展望

And just to finish it all up, I just want to show you quickly about like what's coming for MCP in the next few months of some of the the most important highlights.
最后，我只想快速向大家展示 **MCP**（Model Context Protocol: 模型上下文协议）在未来几个月的一些最重要亮点。

And the most important part is that we are starting to think more and more about agents and there's a lot to do there.
最重要的一点是，我们正在越来越多地思考**代理**（Agents: 能够自主执行任务、与环境交互并实现目标的AI实体），这方面有很多工作要做。

There are a synchronous task that you of course want to run things that are longer running that are not just like a minute long but maybe a few few like hours long task that an agent takes and that eventually I want to have a result for.
当然，有些**异步任务**（Asynchronous Task: 不会阻塞主程序执行的任务）您希望运行时间更长，可能不是一分钟，而是几个小时的**任务**（Task: 代理执行的特定工作），最终我希望得到一个结果。

So we think a lot about that and we're going to work to build primitives for that into MCP in the near future.
所以我们对此进行了很多思考，并将在不久的将来努力将相关的原语构建到 **MCP**（Model Context Protocol: 模型上下文协议）中。

The second part of that is elicitation.
第二部分是**启发**（Elicitation: 服务器向用户请求输入的能力）。

So really MCP server authors being able to ask for input from the user and that is something that's going to land just about today or on Monday in the in the protocol.
因此，**MCP**（Model Context Protocol: 模型上下文协议）服务器作者能够向用户请求输入，这将在今天或周一左右正式纳入协议。

And then we're doing two additional things.
然后我们还在做另外两件事。

We first and foremost going to build an official registry to make sure there's a central place where you can find and publish to MCP servers.
我们首先将建立一个官方**注册中心**（Registry: 集中查找和发布MCP服务器的平台），以确保有一个中心位置可以查找和发布 **MCP**（Model Context Protocol: 模型上下文协议）服务器。

So that we can really have one common place where we're going to look for these servers but also allow agents to dynamically download servers and install them and use them and then of course we're thinking more about multimodality and that can be for example streaming of results but that can have other aspects that I just don't want to go into details yet and that's just the specification part on the e on the ecosystem part we going and having a more things to go that we're doing at the moment.
这样我们就能真正拥有一个共同的地方来寻找这些服务器，同时也能让**代理**（Agents: 能够自主执行任务、与环境交互并实现目标的AI实体）动态下载、安装和使用服务器。当然，我们还在更多地思考**多模态**（Multimodality: 处理和生成多种类型数据（如文本、图像、音频）的能力），例如结果的流式传输，但它可能还有其他方面我暂时不想详细说明。这只是规范部分，在生态系统部分，我们目前正在做更多的事情。

We're adding a Ruby SDK that is donated by Shopify in the next few weeks and the Google folks, the Google Go team is currently building an official Go SDK for MCP.
我们将在未来几周内添加一个由 Shopify 捐赠的 Ruby **SDK**（Software Development Kit: 软件开发工具包），而 Google 的工程师们，即 Google Go 团队，目前正在为 **MCP**（Model Context Protocol: 模型上下文协议）构建一个官方的 Go **SDK**（Software Development Kit: 软件开发工具包）。

And so I just hope that I was able to give you a bit of a more in-depth view of what you could do with MCP if you use the full power of the protocol.
所以我只是希望我能够让大家更深入地了解，如果充分利用 **MCP**（Model Context Protocol: 模型上下文协议）协议的全部功能，您可以实现什么。

And with that, I think I'm bit low on time, so I can't ask question.
时间有限，所以我不能提问。

We can't ask questions.
我们不能提问。

We can't do Q&A, but just grab me afterwards and I can happy to answer on the hallway any questions you might have.
我们无法进行问答环节，但之后您可以随时找我，我很乐意在走廊上回答您可能有的任何问题。

So, thank you so much.
非常感谢。