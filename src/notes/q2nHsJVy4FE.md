---
area: tech-insights
category: technology
companies_orgs:
- Google
- OpenAI
- Hugging Face
date: '2025-11-24'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Gemma 270M
- Llama CBP
- Tensor RT
- Torch compile
- Torch FX
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=q2nHsJVy4FE
speaker: AI Engineer
status: evergreen
summary: 本文深入探讨了在大型语言模型（LLM）时代，AI工程师在模型部署方面面临的复杂挑战。作者提出了一种创新的解决方案：构建一个Python编译器，能够将Python推理代码转换为轻量级、自包含的二进制文件，使其能在云端、边缘设备乃至本地硬件上无缝运行。文章详细阐述了该编译器的设计原理，包括如何应对Python的动态类型特性、利用LLM辅助代码生成、以及通过模拟OpenAI客户端体验来标准化和简化AI模型的跨平台部署，最终实现高效的云端与边缘混合推理策略。
tags:
- code
- code-generation
- llm
title: LLM时代的编译器：简化AI模型部署的Python编译实践
---

### AI工程师的日常困境与部署挑战

如果你现在是一名AI工程师，你的日常工作可能看起来是这样的：你的代码库中打开着一个客户端，有几个**Hugging Face**（一个AI模型和数据集的开源社区）的标签页，还有三个不同的代码仓库，名字里都带着“playground”这个词。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you're an AI engineer right now, your day-to-day probably looks something like this. You've got an open client in your codebase. You've got a few hugging face tabs open. You've got three different repos with the word playground in them.</p>
</details>

你至少有一个**智能体工作流**（Agentic Workflow: 一种通过串联多个AI模型或工具来完成复杂任务的方法），它实际上只是将一堆HTTP调用串联起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you've got at least one agentic workflow that's really just stringing together a bunch of HTTP calls.</p>
</details>

现在，大家都在谈论语音智能体和**MCP**（Multi-Chain Protocol: 一种用于多链交互的协议，此处可能指代特定AI代理协议），这些技术非常酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right now, everyone is talking about voice agents, MCP, and these are pretty cool technologies.</p>
</details>

但当你剥开一点炒作的表象，我从许多工程团队那里听到的是，他们通常在处理更基础、更“无聊”的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But when you peel back the hype a little bit, what I hear when I talk to a lot of engineering teams is that they're usually grappling with much more fundamental and boring problems.</p>
</details>

那就是：如何在更多地方使用更多模型，而无需每次都重建或扩展我的基础设施？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do I use more models in more places without having to rebuild or extend my infrastructure every single time?</p>
</details>

例如，假设你想尝试一个今天刚在Hugging Face上发布的新开源模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So say you want to go try out a new open source model that just dropped on hugging face today.</p>
</details>

这通常意味着你必须编写一个**Docker文件**（Docker file: 用于构建Docker镜像的文本文件），启动一个**Docker容器**（Docker container: 运行应用程序及其依赖的轻量级、可移植的软件包），然后让它在你拥有或从第三方提供商租用的基础设施上运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That usually means you got to go write a Docker file, spin up a Docker container, and then get that running on infrastructure that you own or that you rent from a third party provider.</p>
</details>

如果你将其连接到AI智能体，那么这又是另一个你需要放入上下文并可能暴露为MCP或类似形式的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you're wiring this into an AI agent, well, that's another tool that you have to put into the context and perhaps expose either like an MCP or something similar.</p>
</details>

很多时候，这种复杂性会不断蔓延，并且随着你投入的时间越多而进一步增长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A lot of this is just complexity that creeps in and only grows further more time you spend.</p>
</details>

开发者真正想要的是更简单的东西：一个能够直接工作的OpenAI风格客户端。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What developers actually want is something way simpler. Just give me an open style client that just works.</p>
</details>

让我能够指向任何模型，无论是本地运行还是远程运行，无论是**Llama CBP**（Llama.cpp的某种变体，用于CPU推理）还是**TensorRT**（NVIDIA的深度学习推理优化框架），我只想要一个只需最少代码更改就能工作的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let me point it to any model at all. It doesn't matter if it's running locally, if it's running remotely, if it's Llama CBP or Tensor RT. I just want something that works with minimal code changes.</p>
</details>

在这次演讲中，我将向大家介绍我们如何决定为Python构建一个**Python编译器**（Python compiler: 将Python代码转换为机器可执行代码或另一种中间语言的程序），使开发者能够编写简单的纯Python代码，然后将其转换为一个微小的、自包含的二进制文件，该文件可以在任何地方运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this talk, I'll walk you through how we decided to build a compiler for Python that enables developers to write simple plain Python code and then convert that into a tiny self-contained binary that can then run anywhere at all.</p>
</details>

它可以是云端，可以是**Apple Silicon**（苹果公司为Mac和iPad Pro设计的基于ARM架构的处理器），也可以是介于两者之间的任何东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It could be the cloud, it could be Apple silicon, it could be anything else in between.</p>
</details>

此外，我将展示我们如何在编译器管道中使用**大型语言模型**（LLM: Large Language Model），我们尝试了一些方法，哪些有效，哪些无效，我们如何通过验证和LLM驱动的测试来限制它们，以及这种基础设施如何使我们不仅能够运行任何AI模型，而且能够在服务器端之外的更多地方运行它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Further, I'll show you how we use LLM within that compiler pipeline. a few things we tried, what worked, what didn't work, how we fenced them with verification and LLM power testing, and how these this infrastructure gives us the ability to not just run any AM model at all, but we can now run it in so many more places beyond just server side.</p>
</details>

### 为何选择Python编译器：AI部署的长期解决方案

在我们开始实际操作之前，我想先说明一下我们为什么认为构建一个Python编译器是长期解决AI部署问题的最佳方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So before we start getting our hands dirty with an example, I wanted to provide some motivation on why we thought building a Python compiler was the best way to solve AI deployment in the long run.</p>
</details>

首先，我们需要一种极其简单和标准化的方式，让开发者能够引入他们的AI模型，无论是他们内部构建的模型，还是他们在GitHub上找到的开源模型，然后能够非常容易地在他们的代码库中执行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First, we needed an extremely simple and standardized way for developers to bring their AI models, whether the ones that they've built internally or models that they found open source on Ugging on GitHub, and then get something that they could execute very easily in their codebase.</p>
</details>

因此，当一个新的OpenAI模型发布时，例如，你所要做的就是简单地更改模型参数，将其指向OpenAI刚刚发布的新模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, when a new OpenAI model comes out, for example, all you have to do is simply just change the model argument pointing it to the new model that OpenAI just dropped.</p>
</details>

我们希望尽可能地重现这种体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We wanted to recreate something that tracked this experience as closely as possible.</p>
</details>

从概念上讲，这需要一个能够摄取Python推理代码，然后吐出某种能够在我们用户的执行环境中执行的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Conceptually, this would have to look like something that ingested code, Python inference code, and then spat out some other thing that knew how to get executed in our develop in our users' uh execution environments.</p>
</details>

其次，我们希望为我们坚信的AI部署未来——**混合推理**（Hybrid Inference: 在云端、边缘设备和本地设备之间协同部署和运行AI模型）——做好准备。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Second, we wanted to prepare for what we strongly believe to be the future of AI deployment, hybrid inference.</p>
</details>

我们预计，未来我们将看到更小的模型，通常更接近用户，无论是本地设备还是**边缘计算节点**（Edge locations: 靠近数据源或用户端的分布式计算基础设施），它们将与更大、具有更强推理能力的云端AI模型协同工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We expect that in the future we will see smaller models typically much closer to users either locally on their devices or in edge locations working in tandem with cloud AI models that are much larger and have a bigger reasoning abilities and we expect that this is going to be the future of how a lot of people consume AI in their day-to-day lives.</p>
</details>

因此，这意味着开发者必须摆脱Python代码和Docker容器的束缚，转向更底层、更接近硬件、响应更快的解决方案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As such, this means that developers have to move away from, you know, the the cages of Python code and Docker containers into something that is a lot more low-level, closer to the hardware, and a lot more responsive.</p>
</details>

### 案例研究：部署Google的Gemma 270M模型

那么，让我们开始实际操作。这是一个运行Google的**Gemma 270M**（Gemma 270 Million Parameter Model: 谷歌发布的一个拥有2.7亿参数的轻量级嵌入模型）嵌入模型的Python函数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, let's get our hands dirty. This is a Python function that runs Google's embedding Gemma 270 million parameter model.</p>
</details>

它是一个非常简单的文本嵌入模型，接受一个句子列表（纯文本），然后运行一个能够生成**嵌入向量**（Embedding vector: 将文本、图像等数据映射到低维连续向量空间中的表示）或**嵌入矩阵**（Embedding matrix: 多个嵌入向量组成的矩阵）的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a very simple text embedding model that takes in a list of of sentences, just plain text, and then runs a model that is able to generate an embedding vector or a list of embedding vectors, an embedding matrix.</p>
</details>

你通常会在**文本搜索**（Text search: 在文本数据中查找特定信息）、**检索增强生成**（Retrieval Augmented Generation, RAG: 一种结合信息检索和文本生成的技术）以及其他需要检索文档或文档子部分的框架中使用这类模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You will typically use models like this in text, in text search, in retrieval augmented generation, and in other frameworks where you need to be able to retrieve documents or retrieve subsections of documents.</p>
</details>

Google的这个模型只有2.7亿参数，足够小，不仅可以在云端的**GPU**（Graphics Processing Unit: 图形处理器）上轻松运行，也可以在消费级硬件上快速运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This model from Google is small enough at only 270 million parameters that not only can it run very easily on uh GPUs in the cloud, it can also run very quickly on consumer hardware also.</p>
</details>

今天，我们将探讨如何将这个运行嵌入模型的Python函数，生成等效的**C++**（一种通用编程语言）和**Rust**（一种系统编程语言）代码，这些代码级别更低，现在可以在任何地方运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And today we will be figuring out how to take this Python function that runs the embedding model, generate equivalent C++ and Rust code that is much lower level and is now able to run anywhere at all.</p>
</details>

然后，我们将编译一个包含该模型及其所有所需依赖的二进制文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we will compile a binary that contains this model and all the dependencies it needs.</p>
</details>

最后，我们将使用熟悉的OpenAI客户端体验来使用这个模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And finally we will consume this model using the familiar OpenAI client.bings.create experience.</p>
</details>

### 第一步：追踪与中间表示（IR）的生成

第一步是获取我们的函数并生成一个**图表示**（Graph representation: 以节点和边描述程序结构或数据流的方式），它描述了函数内部发生的一切，我们称之为**追踪**（Tracing: 通过分析代码执行路径来构建程序行为的表示）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The very first step is taking our function and generating a graph representation that describes everything that happens within that function. We call this tracing.</p>
</details>

最初，我们构建**符号追踪**（Symbolic tracing: 一种不实际执行代码，而是通过符号分析来追踪程序行为的方法）解决方案的第一个原型实际上是基于**PyTorch 2**（PyTorch深度学习框架的第二代版本）构建的，它为此目的引入了**Torch compile**（PyTorch的编译功能）和**Torch FX**（PyTorch的函数式转换工具）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Initially our uh first prototypes of building a symbolic tracing uh solution was actually built off of PyTorch 2 which introduced Torch compile along with Torch FX uh for this purpose.</p>
</details>

Torch FX的工作方式是，它会接收Python源代码，然后用不分配任何内存的**模拟输入**（Fake inputs: 用于测试或追踪目的的虚拟输入数据）运行它，然后给你一个描述函数内部发生的一切的图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the way that torch FX works is it'll take in Python source code and then run it with fake inputs that don't allocate any memory and then give you a description a graph of everything that happened within that function.</p>
</details>

我们实际上尝试过使用它，但我们遇到了两个主要问题，导致我们不得不构建自己的追踪基础设施。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We actually try to use this but we faced two major issues that caused us to build our own uh tracing infrastructure.</p>
</details>

首先是PyTorch的追踪器非常专注于PyTorch代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first was that PyTorch uh is very focused its tracer is very focused on only PyTorch code.</p>
</details>

因此，为了追踪任意代码（你的函数通常会依赖**Numpy**（Python的科学计算库）操作或**OpenCV**（开源计算机视觉库）或其他东西），我们必须想办法将对这些数据类型的支持添加到PyTorch中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so in order to trace arbitrary code which your functions will usually have to rely on things like numpy operations or OpenCV or something else we would have had to figure out a way to like add support for those data types into PyTorch.</p>
</details>

我们没有继续使用PyTorch的第二个原因是，为了让追踪器工作，它必须在模拟输入上运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second reason why we didn't stick with PyTorch was in order for the tracer to work, it had to be run on fake inputs.</p>
</details>

创建模拟张量很简单，你只需给出相同的描述而不分配任何数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, you know, creating a fake tensor is trivial. You just, you know, give it the same description and don't allocate any data.</p>
</details>

但创建模拟图像、模拟字典或任何我们可能遇到的其他类型的模拟数据要困难得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But it's a lot harder to create a fake image or a fake dictionary or a fake, you know, whatever type that we might encounter in the wild.</p>
</details>

因此，我们简单地决定自己内部构建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, we simply decided that we were going to build something in house.</p>
</details>

我们第一次尝试实际上是使用LLM来生成追踪，因为LLM在很长一段时间内都具有结构化输出的能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our first attempt was actually using LLM as a way to generate traces because LLMs for quite some time now have had this capability of structured outputs.</p>
</details>

这意味着你可以给LLM一个提示和一些数据，无论是图像、文本还是音频，并要求它以你给定的特定模式响应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is where you can give an LLM a prompt some data whether it be an image, text or audio and ask it to respond to you with a specific schema that you have given to the model.</p>
</details>

这实际上效果很好，在我们的测试中几乎达到了100%的准确率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This actually turned out to work pretty well. Uh it had almost like a 100% uh accuracy rate in our own testing.</p>
</details>

唯一的限制是它花费的时间太长了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The only limitation was it simply took way too much time.</p>
</details>

所以最终我们决定采用老式方法：通过首先分析代码，查看Python代码的**抽象语法树**（Abstract Syntax Tree, AST: 源代码的树状表示，反映其语法结构），然后使用一堆内部启发式方法来构建我们自己的用户函数的**中间表示**（Internal Representation, IR: 编译器在处理源代码时使用的抽象数据结构）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so eventually we decided we're just going to do it old school. We would build a tracer by first analyzing the code looking at the a or the abst the abstract syntax tree of the Python code and then using a bunch of internal huristics to build our own internal representation or IR of the user's function.</p>
</details>

对于我们编写的这个函数，IR实际上非常简单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for this function that we've written up, the IR is actually incredibly simple.</p>
</details>

我不会展示整个IR，但会展示相关部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm not going to show you the entire thing, but I'll just show you the parts that are relevant to look at.</p>
</details>

如你所见，有用于函数实际输入的输入节点，例如字符串列表。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As you can see, there's input nodes for the actual uh inputs to the function. So like that's a list of the strings.</p>
</details>

有一个函数调用用于调用分词器，另一个用于调用模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's a function call to calling out to the tokenizer. Another one's calling out to the model.</p>
</details>

然后我们返回这些输出，以便用户可以获得他们的嵌入向量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we return those outputs so that the user can then get their embedding vectors.</p>
</details>

### 第二步：弥合Python动态性与底层语言的鸿沟（类型传播）

现在我们有了Python函数的高级中间表示，下一步是弄清楚如何将其转换为更底层的C++或Rust代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now that we have a high-level intermediate representation of our Python function, the next step is to figure out how to translate that somehow into lower level C++ or Rust code.</p>
</details>

但在深入探讨之前，我想谈谈Python作为一种语言与C++或其他我们将遇到的底层语言之间的一个主要区别，我们需要解决这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But before jumping into that, I wanted to talk about one major difference between Python as a language and C++ or other lower level languages that we will run into and have to solve.</p>
</details>

Python是一种非常动态的语言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Python is a very dynamic language.</p>
</details>

所以一个变量X可以被赋值为一个整数，然后紧接着被赋值为一个字符串。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So one variable X could be assigned to an integer and then immediately after assigned to say a string.</p>
</details>

一切皆有可能，具有完全的动态性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is full dynamism in anything goes.</p>
</details>

而在C++和Rust等底层语言中，如果你声明一个变量，你必须给它一个类型，并且该类型永远不能改变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whereas in lower level languages like C++ and Rust if you declare a variable you must give it a type and that type can never change.</p>
</details>

这给我们带来了相当大的挑战，因为我们需要弄清楚如何为我们将从Python高级代码生成的代码附加或约束类型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This gives us quite a bit of a challenge because we need to figure out how to attach or constrain the types in the code that we will be generating from our Python highle code.</p>
</details>

让我们看看我们函数的第一行，也就是IR的第一个节点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's look at the first line of our function. The very first node if you call it of our IR.</p>
</details>

如你所见，`prompts`是一个通过列表推导式生成的列表。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As you can see prompts is this list that is being generated by a comprehension statement.</p>
</details>

我们实际上只是为用户传入的每个句子添加了一组前缀。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we're effectively just adding a set of prefixes for every sentence that has been passed in by the user.</p>
</details>

所以让我们专注于列表推导式中发生的加法操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so let's just focus in on that addition operation that's happening within that comprehension.</p>
</details>

如你所见，我们知道`text`中的每个项都是一个字符串，因为我们已经对函数进行了这样的注解，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As you can see, well, we know that every item in text is a string because we have pretty much annotated our function as such, right?</p>
</details>

输入文本是一个字符串列表。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">The input text is a list of strings.</p>
</details>

我们也知道`text_prefix_map`只包含一堆字符串，每个前缀本身都是一个字符串。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we also know that the text prefix map just contains a bunch of strings. Each prefix is itself a string.</p>
</details>

那么问题就变成了，我们如何知道或如何确定该操作输出的C++类型？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so the question then becomes how do we know or how do we figure out the C++ type on the output of that operation.</p>
</details>

这就是编译器发挥作用的地方，具体来说，我们称之为**类型传播**（Type propagation: 编译器中一种通过已知类型推断未知类型或验证类型一致性的技术）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is where the compiler comes in specifically a technique we call type propagation.</p>
</details>

我们将获取一个字符串（前缀）和另一个字符串（提供给函数的实际输入文本）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so here we will take one string the prefix the other string the actual input text that was provided to the function.</p>
</details>

我们现在知道这两个字符串之间正在发生某种加法操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we now know that there is some addition operation happening to these two.</p>
</details>

所以我们可以简单地编写或生成一个C++函数，它接受两个字符串并执行Python的`operator.add`操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can simply write or generate a C++ function that takes in two strings and performs the operator.add operation from Python.</p>
</details>

我们生成的C++函数的输出，如你在这里看到的，它只是一个字符串。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The output of that function that we generate in C++ as you can see here well it's just a string.</p>
</details>

这就是我们如何知道这个加法操作的输出本身必须是一个字符串。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's how we know that whatever the output of this addition operation uh we're doing is must itself be a string.</p>
</details>

所以，通过这种方式，我们能够从Python函数的签名中获取输入类型信息，结合这个全局常量`task_prefix_map`的C++类型信息（或原生类型信息），然后我们能够利用这些信息传播到这两个东西连接的输出类型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in that way zooming out we've been able to take the input information the input type information from just the signature of our Python function along with the C++ type information or the the native type information of this global constant task prefix map and then we've been able to use that to propagate into the output of the concatenation of these two things.</p>
</details>

我们现在知道，如果我将一个前缀与一个输入字符串连接起来，结果本身就是一个字符串。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We now know that if I concatenate one prefix with one input string, the result itself is a string.</p>
</details>

因此，我们可以对原始Python函数中的每个中间变量或每个操作执行这种传播。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we can then do this propagation for every intermediate variable or every operation within our original Python function.</p>
</details>

这就是我们如何让类型信息流动的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's how we can kind of like flow type information through.</p>
</details>

### 第三步：利用LLM进行代码生成

所以此时你可能会想，如果你的编译器正在进行这种传播，那需要我们手动在C++或Rust代码中实现一些操作，我们必须为Python中遇到的每一个独特的函数调用或操作重写代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so at this point you might be wondering well your compiler if you're doing this propagation thing that requires us manually implementing some operation in C++ or in RS code we would have to literally rewrite this for every unique function call or operation that we ever encounter in Python.</p>
</details>

你是对的，你百分之百是对的，我们确实必须这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you'll be correct you'll be 100% correct that is in fact what we would have to do.</p>
</details>

但现在这个问题变得可处理了，并且更容易解决了，原因有二。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But that is now tractable and it's an easier problem to solve now for two reasons.</p>
</details>

第一个原因是，你在野外源代码中看到的所有多样性，并不是因为这些操作的数量巨大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first reason is that all the variety you'll ever see in source code in the wild is not because there's such a giant volume of these operations.</p>
</details>

数量之大实际上是因为你可以以多种不同的方式组合操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The volume is actually because you can combine operations in so many different ways.</p>
</details>

你可以以多种不同的方式排列它们，而这些排列中的每一个都形成了一个独特的Python函数或Python代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can permute them in so many different ways. in each of these permutations is what forms a unique Python function or Python code.</p>
</details>

所以我们真正只需要覆盖那个基本级别的或基本数量的初等函数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we really only need to cover that base level or that base number of elementary functions.</p>
</details>

我们可以像在Python中一样，在C++中以不同的方式堆叠或组合它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we could just stack them or combine them in different ways in C++ the same way we do in Python.</p>
</details>

但你甚至可能会说，等等，那组初等函数仍然相当庞大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But you might even say to that that wait that elementary set of functions, it's still pretty large.</p>
</details>

你会百分之百是对的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you would be 100% right.</p>
</details>

我们需要涵盖从两个东西相加到相减，到指数运算，再到像Numpy操作或PyTorch操作等原生库中的一些东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We need to cover everything from you know adding two things to like you know subtracting them to exponentiation to like you know some stuff that is like in native libraries like numpy operations or pyarch operations and so yeah so you have a perfectly valid point.</p>
</details>

所以，你有一个完全有效的观点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The only reason why that's tractable now is well we don't have to sit down and write the equivalent native code that does the same thing in Python anymore.</p>
</details>

现在之所以可处理，是因为我们不再需要坐下来编写与Python中做同样事情的等效原生代码了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we can simply have LLMs generate all the code that we need that translates a function from Python right into C++ and Rust.</p>
</details>

我们可以简单地让LLM生成我们所需的所有代码，将Python函数直接翻译成C++和Rust。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so this gives us the ability to basically massroduce a lot of the operations that we we would otherwise have had to manually rewrite ourselves in native code.</p>
</details>

这使我们能够大规模生成许多我们原本需要手动用原生代码重写的操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so now that we've been able to propagate type information through our Python IR graph, we basically have all we need to simply generate actual C++ code that is correct and will compile.</p>
</details>

因此，现在我们已经能够通过Python IR图传播类型信息，我们基本上拥有了生成正确且可编译的实际C++代码所需的一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here's what it actually looks like side by side.</p>
</details>

### 第四步：C++代码的生成与编译

所以，这就是它实际并排显示的样子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As you can see, I'm l just walking through and you can see where we're doing that, you know, list comprehension to add the prefixes to each string.</p>
</details>

如你所见，我只是在演示，你可以看到我们是如何进行列表推导式来为每个字符串添加前缀的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see where we are running the tokenizer to tokenize those input text into IDs.</p>
</details>

你可以看到我们是如何运行分词器将输入文本分词为ID的。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">And you can now see we're running the model and returning the output embedding vectors or the embedding matrix.</p>
</details>

现在你可以看到我们正在运行模型并返回输出嵌入向量或嵌入矩阵。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At this point, because we now have C++ source code, we can now compile this to run natively on any device or platform that we would ever want to run on.</p>
</details>

此时，因为我们现在有了C++源代码，我们可以将其编译成在任何我们想要运行的设备或平台上原生运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Simply because every piece of technology that you've ever touched has a C or C++ compiler.</p>
</details>

这仅仅是因为你接触过的每一项技术都有C或C++编译器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is what gives us the ability to take high-level Python code and convert it into a form that is self-contained and that can now run anywhere at all.</p>
</details>

这使我们能够将高级Python代码转换为自包含的形式，现在可以在任何地方运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's go ahead and do that.</p>
</details>

所以让我们继续这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then what we're going to end up with on the other end is simply a uh dynamic library uh a shared object if you call it that that we can then load into a process and execute like any other code.</p>
</details>

最终我们将得到一个**动态链接库**（Dynamic library: 在程序运行时加载的库文件），或者如果你愿意称之为**共享对象**（Shared object: 在Unix-like系统中，动态链接库的常见形式），我们可以将其加载到进程中并像任何其他代码一样执行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now comes the fun part.</p>
</details>

### 第五步：使用编译模型（OpenAI客户端体验）

现在到了有趣的部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's figure out how to actually invoke or use our compiled embedding model from any language on any device.</p>
</details>

让我们弄清楚如何在任何设备上从任何语言实际调用或使用我们编译好的嵌入模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're going to go with JavaScript running on Node.js for this example.</p>
</details>

在这个例子中，我们将使用在**Node.js**（一个基于Chrome V8 JavaScript引擎的JavaScript运行时环境）上运行的**JavaScript**（一种高级编程语言）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so the very first step we want to do is figure out how to call in to our compiled library from JavaScript in Node.js.</p>
</details>

所以我们想要做的第一步是弄清楚如何在Node.js的JavaScript中调用我们编译好的库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can use FFI for this for this purpose.</p>
</details>

我们可以为此目的使用**外部函数接口**（FFI: Foreign Function Interface: 允许一种编程语言调用另一种编程语言编写的函数）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so this is where you're able to effectively design bindings and declare that hey I'm loading this native library which has been compiled for my system and my architecture.</p>
</details>

这就是你可以有效地设计绑定并声明“嘿，我正在加载这个为我的系统和架构编译的原生库”的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It has this function with some name.</p>
</details>

它有一个带名字的函数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In our case we already have a a function name and that function that native function has this signature.</p>
</details>

在我们的例子中，我们已经有一个函数名，并且那个原生函数有这个签名。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we're able to write a bunch of scaffolding code.</p>
</details>

所以我们能够编写一堆脚手架代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">this we figured out a way to standardize this across different different uh compiled functions to make it very easy for ourselves but this is pretty open-ended once you do you can basically point NodeJS or your JavaScript application to the location of that compiled library load it in and simply just invoke it like any other thing when we do guess what we get our embedding matrix right there and for the final piece of the puzzle let's take it back to the top let's figure out how to expose our compiled embedding model through our OpenAI style client.</p>
</details>

我们找到了一种方法来标准化不同编译函数之间的这种操作，以便我们自己更容易实现，但这非常开放。一旦你完成，你就可以将Node.js或你的JavaScript应用程序指向编译库的位置，加载它，然后像任何其他东西一样调用它。当我们这样做时，你猜怎么着？我们直接得到了我们的嵌入矩阵。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what we're going to do is create a class, just call it client.</p>
</details>

对于最后一块拼图，让我们回到最初，弄清楚如何通过我们的OpenAI风格客户端暴露我们编译好的嵌入模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Within it, we'll create a nested class called embeddings.</p>
</details>

所以我们要做的就是创建一个类，就叫它`client`。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And within that, we will create a create function mirroring the official OpenAI client.create path.</p>
</details>

在它内部，我们将创建一个名为`embeddings`的嵌套类。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so within that function, when the user passes in the model name, all we're going to do is simply just go from the name of that model to a path to the compiled binary that we just created from our C++ code generation.</p>
</details>

在那个函数中，当用户传入模型名称时，我们所要做的就是简单地从模型名称映射到我们刚刚从C++代码生成创建的编译二进制文件的路径。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And with that, with the rest of all the uh FFI that we just implemented, we now have a way of taking the model, resolving it to a path to the library, loading that library in library in, and simply just executing it to get out our embedding matrix.</p>
</details>

有了这个，以及我们刚刚实现的所有FFI，我们现在有了一种方法，可以获取模型，将其解析为库的路径，加载该库，然后简单地执行它以获取我们的嵌入矩阵。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The final step is to simply massage the outputs so that it looks just like the outputs that the official OpenAI client gives you.</p>
</details>

最后一步是简单地调整输出，使其看起来与官方OpenAI客户端给出的输出完全一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And with this entire system in place, we have just recreated the official OpenAI client, but given it access to any open-source model that we can get into a Python function.</p>
</details>

有了这整个系统，我们刚刚重新创建了官方的OpenAI客户端，但使其能够访问任何我们可以通过Python函数获取的开源模型。