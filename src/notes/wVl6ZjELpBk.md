---
area: tech-engineering
category: ai-ml
companies_orgs:
- OpenAI
- GitHub
- Cursor
- Zed
date: '2025-12-05'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Codeex
- Codeex Max
- GPT-5.1
- ChatGPT
- VS Code
project:
- ai-impact-analysis
- entrepreneurship
series: ''
source: https://www.youtube.com/watch?v=wVl6ZjELpBk
speaker: AI Engineer
status: evergreen
summary: OpenAI 的 Bill Chen 和 Brian Fioca 深入探讨了编码智能体的构建与未来。他们强调了模型（Model）和协调器（Harness）在智能体架构中的关键作用，并介绍了
  OpenAI 自家的编码智能体 Codeex。文章详细阐述了协调器面临的挑战，如工具集成、延迟管理和上下文窗口优化，并揭示了模型训练习惯对提示工程的重要性。Codeex
  不仅是一个强大的编程工具，更是一个能处理命令行任务的通用智能体，其SDK为开发者提供了构建定制化AI应用的强大抽象层。展望未来，模型能力将持续提升，Codeex
  将助力开发者构建更智能、更自主的软件系统。
tags:
- ai-model
- coding-agent
- development
- software-automation
title: OpenAI 编码智能体 Codeex：模型与协调器共生，构建面向未来的AI编程
---

### 编码智能体的崛起

大家好。今天，我们将讨论如何构建编码智能体。我是 Bill，在 OpenAI 的应用 AI 初创团队工作。Brian 和我都在 OpenAI 的初创团队工作，我们特别专注于在这里构建编码智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hello everyone. Today, we'll be talking about how to build coding agents. I'm Bill, and I work on the applied AI startups team at OpenAI. Brian and I work together on the OpenAI startups team, and we specifically focus on building coding agents here.</p>
</details>

那么，我们为什么要进行这场关于编码智能体的演讲呢？这个领域在过去一年里蓬勃发展，这非常有趣。仔细想想，这其实并没有多久——大约只有一年左右的时间。编码智能体，尤其是其**协调器**（Harness: 连接模型与外部环境的软件层，负责提示工程、工具调用、上下文管理等），其发展格局一直在不断变化。之所以有趣，是因为它预示着我们离**AGI**（Artificial General Intelligence: 能够理解、学习或执行任何人类智力任务的假设智能）有多近。软件工程可以被视为解决问题的通用媒介。然而，由于这个领域发展得如此之快，每当有新模型发布时，我们都不得不持续地在模型之上重建智能体。今天，我们将探讨如何解决这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, why are we giving this talk about coding agents? It's quite interesting because this field has been booming for the past year. If you think about it, it hasn't been that long—only about a year or so. The landscape for coding agents, especially concerning the harness, is constantly shifting. What makes it interesting is that it's a signal of how close we are to **AGI** (Artificial General Intelligence: 能够理解、学习或执行任何人类智力任务的假设智能). Software engineering can be seen as a universal medium for problem-solving. However, because the field is evolving so rapidly, we've had to constantly rebuild the agent on top of the model whenever a new model is released. Today, we're going to discuss how we might overcome this challenge.</p>
</details>

以下是我们今天将要讨论的内容。我们将从编码智能体的**解剖结构**（Anatomy: 指一个系统的组成部分及其相互关系）开始，深入探讨模型和协调器的细节以及它们如何协同工作。我们将分享我们自己在构建过程中学到的一些经验教训。我们将特别讨论 **Codeex**（OpenAI's coding agent: 一个由OpenAI开发的编码智能体，结合了模型和协调器，旨在帮助开发者更高效地编写代码），这是我们自己的编码智能体。我们还将探讨大家在使用 Codeex 等智能体构建产品时出现的一些新兴模式。最后，我们将讨论 Codeex 的未来发展，以便您如果愿意，可以与我们一同构建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here's what we'll cover today. We'll start with the anatomy of a coding agent, delving into the details of models and harnesses and their interplay. We'll share lessons learned from our own development. Specifically, we'll discuss **Codeex** (OpenAI's coding agent: 一个由OpenAI开发的编码智能体，结合了模型和协调器，旨在帮助开发者更高效地编写代码), our own coding agent. We'll also explore emerging patterns for using agents like Codeex in your products. Finally, we'll discuss what to expect from Codeex in the future, so you can build alongside us.</p>
</details>

### 编码智能体的解剖结构

首先，我们来谈谈一个编码智能体究竟由什么构成。这其实很简单，尽管人们现在往往会把它搞得过于复杂。它由三个部分组成：用户界面、模型和协调器。界面部分不言自明，它可以是一个**CLI**（Command Line Interface: 命令行界面，通过文本命令与计算机交互的界面）工具，一个**IDE**（Integrated Development Environment: 集成开发环境，提供代码编辑、编译、调试等功能的软件），或者是一个云端/后台智能体。模型也相当直观，比如我们昨天发布的最新、最强大的 **GPT-5.1**（Generative Pre-trained Transformer 5.1: OpenAI开发的大型语言模型系列之一）系列、Codeex Max，或者来自其他提供商的模型。而协调器则是一个更有趣的部分。它是以最简化方式直接与模型交互的部分。你可以把它看作是提示和工具的集合，结合在一个核心智能体循环中，为模型提供输入和输出。今天，我们将重点关注这最后一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To begin, let's discuss what constitutes a coding agent. It's quite simple, though people tend to overcomplicate it. It's made of three parts: a user interface, a model, and a harness. The interface is self-explanatory; it could be a **CLI** (Command Line Interface: 命令行界面，通过文本命令与计算机交互的界面) tool, an **IDE** (Integrated Development Environment: 集成开发环境，提供代码编辑、编译、调试等功能的软件), or a cloud/background agent. Models are also straightforward, like the latest **GPT-5.1** (Generative Pre-trained Transformer 5.1: OpenAI开发的大型语言模型系列之一) series, Codeex Max, or models from other providers. The harness is the more interesting part. It directly interacts with the model, essentially a collection of prompts and tools combined in a core agent loop that manages input and output. This last part will be our focus today.</p>
</details>

正如之前提到的，编码是应用 AI 领域最活跃的前沿之一。随着模型不断发布，对所有人来说，挑战在于需要持续地使智能体适应新的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As mentioned, coding is one of the most active frontiers in applied AI. With models constantly being released, the challenge for everyone is the need to continuously adapt agents to new models.</p>
</details>

### 协调器的挑战与模型习惯

Bill 已经很好地概述了编码智能体及其组成部分。现在，让我们深入探讨一下协调器，它实际上相当复杂。协调器是模型与外界的接口层。它是模型与用户和代码交互、并使用工具执行操作的表面区域。它包含了模型在多轮对话中工作、调用工具、编写代码以及解释用户实际请求所需的所有组件。对于某些产品而言，协调器甚至可能是其“独门秘方”，但构建一个好的协调器确实是一项极具挑战性的工作。我们将讨论我们是如何做到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Bill has given us a great overview of coding agents and their components. Let's zoom in on the harness, which turns out to be quite tricky. A harness is the interface layer to the model. It's the surface area through which the model interacts with users and code, and performs actions using tools. It comprises all the elements the model needs to operate over multiple turns, call tools, write code, and interpret user requests. For some, the harness might be the product's 'special sauce,' but building a good one is genuinely challenging. We'll discuss how we achieved this.</p>
</details>

让我们来看看其中的一些挑战。例如，你为智能体提供的全新、创新的自定义工具，可能不是模型习惯使用的；它在训练时可能从未见过该工具。即使见过，你也需要花费时间根据特定模型及其固有习惯来调整你的**提示**（Prompt: 引导AI模型生成特定输出的指令或问题）。新模型不断涌现。然后是**延迟**（Latency: 系统响应请求所需的时间）问题：模型在思考某些事情时是否需要很长时间？你如何提示它避免不必要的思考？当模型思考时，你如何向用户展示其思考过程的用户体验？它是在思考时与你沟通，还是你需要进行总结？管理**上下文窗口**（Context Window: AI模型在单次交互中能够处理的输入和输出文本的最大长度）和**压缩**（Compaction: 优化上下文窗口内信息以提高效率和减少成本的技术）可能极具挑战性。我们刚刚发布了 Codeex Max，它开箱即用地为你处理了这些问题，让你无需担心压缩和上下文窗口管理，因为自己做这些确实非常困难。此外，**API**（Application Programming Interfaces: 应用程序编程接口，允许不同软件组件相互通信的规范）也在不断变化，包括补全、响应以及未来可能出现的任何功能。模型如何知道如何利用这些功能，从而开箱即用地发挥出最大的智能呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's look at some of these challenges. For instance, your brand-new, innovative custom tool for your agent might not be something the model is accustomed to using; it may never have seen it during training. Even if it has, you'll need to spend time tuning your **prompt** (提示: 引导AI模型生成特定输出的指令或问题) to that specific model and its inherent habits. New models are constantly emerging. Then there's **latency** (延迟: 系统响应请求所需的时间): Does the model take a while to process certain things? How do you prompt it to avoid unnecessary thinking? How do you present the user experience of a thinking model while it's processing? Does it communicate its thoughts, or do you need to summarize them? Managing the **context window** (上下文窗口: AI模型在单次交互中能够处理的输入和输出文本的最大长度) and **compaction** (压缩: 优化上下文窗口内信息以提高效率和减少成本的技术) can be extremely challenging. We just launched Codeex Max, which handles this out-of-the-box, freeing you from worrying about compaction and context window management, as it's genuinely difficult to do yourself. Furthermore, **APIs** (Application Programming Interfaces: 应用程序编程接口，允许不同软件组件相互通信的规范) are constantly changing, with completions, responses, and future functionalities. How does the model know how to leverage these to extract the most intelligence inherently?</p>
</details>

这正是有趣之处。将模型整合到协调器中需要大量的**提示工程**（Prompting: 设计和优化给AI模型的指令，以获得期望的输出）。事实证明，模型的训练方式会产生副作用。我喜欢这样看待它：智能加上习惯。智能是指模型擅长什么——它精通哪些语言？它在特定框架中编写代码的能力如何？而习惯则是指它为解决这些问题而学习到的方法。我们训练模型养成了规划解决方案、环顾四周、收集上下文、在深入编写代码之前思考问题，最后再测试其工作的习惯。培养对这些习惯的感知是成为一名优秀**提示工程师**（Prompt Engineer: 专门设计和优化AI模型提示以提高其性能和输出质量的专业人员）的关键。如果你不以模型熟悉的方式指导它，就会遇到问题。我们在推出 GPT-5 时就看到了这一点。许多不习惯使用我们编码模型的用户，试图将为其他模型设计的提示放入他们的协调器中，并让 GPT-5 遵循这些指令。结果发现，我们训练的模型会做一些其他模型开箱即用时并不真正会做的事情。因此，当他们提示模型非常仔细地查看上下文，并检查每一个文件后再进行代码修改时，我们的模型会非常彻底地执行，这导致了非常长的处理时间，并且他们没有看到最佳性能。我们发现，如果你让模型按照它习惯的行为行事，而不是过度提示它，它的表现会好得多。我们通过提问发现了这一点。我直接问它：“嘿，我喜欢这个解决方案，但你花了很长时间才完成。下次我在指令中可以做些什么不同，来帮助你更快地完成？”它真的回答说：“嗯，你让我去查看所有东西，但我其实不需要。所以这就是为什么花了那么长时间。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is the interesting part: fitting a model into a harness requires extensive **prompting** (提示工程: 设计和优化给AI模型的指令，以获得期望的输出). It turns out that a model's training methodology has side effects. I view it as 'intelligence plus habit.' Intelligence refers to what the model excels at—which languages it knows well, its code-writing capabilities in specific frameworks. Habits refer to the learned approaches it uses to solve problems. We've trained our models to plan solutions, gather context, think before coding, and then test their work. Developing an intuition for these habits is key to becoming a good **prompt engineer** (提示工程师: 专门设计和优化AI模型提示以提高其性能和输出质量的专业人员). If you don't instruct the model in familiar ways, you'll encounter issues. We observed this with GPT-5's launch. Many users, unfamiliar with our coding models, tried to adapt prompts from other models for GPT-5, but our model was trained with different inherent behaviors. For example, when prompted to meticulously examine every file before a code edit, our model was overly thorough, leading to long processing times and suboptimal performance. We discovered that by allowing the model to follow its accustomed behaviors and avoiding over-prompting, it performs significantly better. We even asked the model directly, 'I like the solution, but it took a long time. What can I do differently in your instructions to help you get there faster?' It literally responded, 'You're telling me to look at everything, which I don't really need to do, and that's what's taking forever.'</p>
</details>

因此，你可以看到同时构建模型和协调器的优势，因为你在构建过程中自然就了解所有这些细微之处。这就是为什么 Codeex 是一个模型和协调器相结合的产物。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thus, you can see the advantages of building both the model and the harness together, as you inherently understand all these nuances during development. That's why Codeex is a combined model and harness.</p>
</details>

### Codeex：无处不在的通用智能体

让我们深入探讨 Codeex 及其功能。我们构建 Codeex 是为了让它成为一个适用于所有编码环境的智能体。它是一个 **VS Code**（Visual Studio Code: 微软开发的一款免费开源的代码编辑器）插件，一个 CLI 工具，可以从 VS Code 或甚至手机上的 ChatGPT 在云端调用。从根本上说，你可以用它从一个提示开始，将你的规范转化为可运行的代码。它能够制定计划，导航你的代码仓库以编辑文件，运行命令，执行任务，你可以在 Slack 中调用它，或者让它在 GitHub 上审查 **PRs**（Pull Requests: 在软件开发中，开发者提交代码更改以供审查和合并到主代码库的请求）。所有这些你所期望的功能，都意味着 Codeex 的协调器需要能够处理许多非常复杂的任务。当我与 Codeex 团队成员讨论这张幻灯片上应该包含什么时，他表示这比你想象的要困难得多。你必须管理并行工具调用，例如线程合并以及其中涉及的所有事情。考虑所有与**沙盒**（Sandboxing: 一种安全机制，将程序隔离在受限环境中运行，以防止其对系统造成损害）、提示转发、权限、端口管理相关的安全问题。**压缩**（Compaction: 优化上下文窗口内信息以提高效率和减少成本的技术）本身就是一件大事；做好它非常复杂。你何时触发压缩？何时重新注入？在 **MCP**（Multi-Context Processing: 多上下文处理，指AI模型在处理任务时管理和整合多个独立上下文的能力）期间，你如何考虑缓存优化？所有这些你需要为协调器构建的 MCP 支持的底层管道。更不用说图像处理了，你需要将它们压缩到什么分辨率才能发送给模型。如果你要从头开始构建并随着新功能的上线不断更新，所有这些都是你必须做的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's delve deeper into Codeex and its capabilities. We built Codeex to be an agent for every coding environment. It's a **VS Code** (Visual Studio Code: 微软开发的一款免费开源的代码编辑器) plugin, a CLI tool, and can be invoked in the cloud from VS Code or even ChatGPT on your phone. Fundamentally, you can use it to transform your specifications into runnable code, starting from a prompt. It can formulate a plan, navigate your repository to edit files, run commands, and execute tasks. You can call it from Slack or have it review **PRs** (Pull Requests: 在软件开发中，开发者提交代码更改以供审查和合并到主代码库的请求) on GitHub. All these expected functionalities mean Codeex's harness must handle highly complex tasks. A Codeex team member emphasized that it's far harder than it seems. You must manage parallel tool calls, including thread merging. Consider security aspects like **sandboxing** (沙盒: 一种安全机制，将程序隔离在受限环境中运行，以防止其对系统造成损害), prompt forwarding, permissions, and port management. Compaction is another significant challenge; doing it well is complex. When do you trigger compaction? When do you reinject? How do you optimize cache during **MCP** (Multi-Context Processing: 多上下文处理，指AI模型在处理任务时管理和整合多个独立上下文的能力)? All the underlying infrastructure for MCP support must be built into the harness. Not to mention image handling—determining the optimal resolution for compression before sending them to the model. All this work is required if you build from scratch and need to keep it updated as new features emerge.</p>
</details>

我们将所有这些功能捆绑在一个智能体中，它能够安全地编写自己的工具来解决遇到的新问题。这意味着我们实际上拥有了一个用于终端的计算机使用智能体。这听起来比一个普通的编码智能体强大得多，不是吗？但再想想看：在浏览器和图形用户界面出现之前，我们不就是通过在命令行界面中编写代码并将命令链式连接起来操作计算机的吗？所以，如果你能将任务表达为命令行操作或文件任务，Codeex 就能知道如何处理。例如，我使用 Codeex 将桌面上的许多照片整理到一个文件夹中——这是一个非常简单的用例。但它也可以分析文件夹中大量的 CSV 文件，进行数据分析。这不一定是一个编码任务；如果可以通过命令行工具完成，你就可以使用 Codeex。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've bundled all these features into an agent that can safely write its own tools to solve new problems it encounters. This means we essentially have a computer use agent for the terminal. That sounds much more powerful than just a plain coding agent, doesn't it? But consider this: before browsers and graphical user interfaces existed, wasn't that how we always operated computers—by writing code and chaining commands together in a command-line interface? So, if you can express your tasks as command-line operations or file tasks, Codeex will know what to do. For example, I use Codeex to organize many photos from my desktop into a folder—a simple use case. But it can also analyze vast amounts of CSV files within a folder, performing data analysis. It doesn't have to be a coding task; if it can be accomplished by running tools from the command line, you can use Codeex.</p>
</details>

### 利用 Codeex 构建你的智能体

既然我们看到 Codeex 是一个如此强大的协调器，我还想分享一下如何利用它来构建你自己的智能体。你可以将 Codeex 智能体**嵌入**到你自己的智能体中。这如何实现呢？如果你正在构建下一个编码初创公司，我们虽然没有所有答案，但我们从与 Cursor 和 VS Code 等顶级编码客户的合作中，发现了一些可能对你有帮助的模式。其中一种模式是协调器成为新的**抽象层**（Abstraction Layer: 隐藏底层复杂性，提供更简洁易用接口的软件层）。这样做的好处显而易见：你不再需要优先考虑在每次模型升级时优化提示和工具。Brian 问道，这是否意味着只是在构建一个包装器？Bill 对此表示不同意，他认为称之为“包装器”低估了基础设施层的整体价值主张。这种模式让你能够将大部分精力集中在产品差异化上，因为这才是大部分价值所在。那么，让我们看看我们观察到并帮助客户构建的一些模式。Codeex 是一个 **SDK**（Software Development Kit: 软件开发工具包，包含开发特定应用程序所需的所有工具和库）。它可以通过 TypeScript 库或 Python `exec` 进行调用。还有一个 GitHub Action，你可以接入它来自动合并 PR 中那些人人讨厌的合并冲突。此外，你还可以将其添加到智能体的 SDK 中，并为其提供 MCP 连接器，使其能够与你的产品进行交互。这样，你就拥有了一个智能体。我喜欢说，我们最初有了可以对话的聊天机器人。然后我们给了聊天机器人工具。而现在，你可以给你的聊天机器人一个工具，让它能够**创建**自己没有的其他工具。因此，你现在可以构建企业级软件，它能够即时为每个客户编写自己的 API 级别插件连接器。这曾是专业服务团队必须完成的工作。所以，你拥有了可以自我交互的完全可定制的软件。在开发者大会上，我制作了一个看板，它甚至可以修复自己的 bug，这非常有趣。最后，你还可以做 Zed 所做的事情。他们决定将 Codeex 封装在一个层中，并为其 IDE 提供一个接口，用于用户之间的来回对话和代码编辑。这样，他们就无需承担我们擅长的所有复杂工作，可以专注于构建最好的代码编辑器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now that we see Codeex is such a powerful harness, I want to share how you can use it to build your own agents. You can essentially use the Codeex agent *inside* your own agent. How does this work? If you're building the next coding startup, we don't have all the answers, but we've identified a few patterns from working with top coding customers like Cursor and VS Code that might help. One such pattern is the harness becoming the new **abstraction layer** (抽象层: 隐藏底层复杂性，提供更简洁易用接口的软件层). The benefits are obvious: you no longer need to prioritize optimizing prompts and tools with every model upgrade. Brian asks if this means simply building a wrapper. Bill disagrees, stating that calling it a 'wrapper' is reductive to the infrastructure layer's value proposition. This pattern allows you to focus most of your efforts on differentiating your product, which is where most of the value lies. Let's look at some patterns that have helped our customers. Codeex is an **SDK** (Software Development Kit: 软件开发工具包，包含开发特定应用程序所需的所有工具和库). It can be called via a TypeScript library or a Python `exec`. There's a GitHub Action to automatically merge PR conflicts. You can also add it to an agent's SDK, providing MCP connectors back to your product. So now you have an agent. We started with chatbots you could talk to, then gave them tools. Now, you can give your chatbot a tool that can *make other tools* it doesn't have. This enables building enterprise software that writes its own API-level plugin connectors for each customer on the spot—a task previously handled by professional services teams. You get fully customizable software that can self-interact. For Dev Day, I built a Kanban board that could fix its own bugs, which was quite fun. Lastly, you can emulate what Zed has done: they wrapped Codeex within a layer, providing an interface to their IDE for user interaction and code edits. This frees them from constantly managing the complexities we handle, allowing them to focus on building the best code editor.</p>
</details>

我们的顶级编码合作伙伴，如 GitHub，已经有效地利用了这一点。我们为此创建了一个 SDK，他们用它来直接与 Codeex 集成。你还可以使用这个 SDK 来控制 Codeex，作为你的 **CI/CD 管道**（Continuous Integration/Continuous Delivery: 持续集成/持续交付，一种自动化软件开发流程，旨在提高开发效率和代码质量）的一部分，也可以将其用作直接与你自己的智能体交互的智能体。如果你真的想定制智能体层，你也可以做到。举个例子，我们与 Cursor 团队紧密合作，以从 Codeex *模型*（不是智能体——我们不擅长命名；模型与智能体是不同的）中获得最佳性能。他们通过将他们的工具与模型的训练分布对齐，并通过将他们的协调器与我们 Codeex CLI 的开源实现对齐来做到这一点。所有这些都是公开可用的。你可以 fork 仓库，你可以使用我们的源代码，你可以使用它。尽情发挥吧！

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our top coding partners, like GitHub, have used this to great effect. We've created an SDK that they use to directly integrate with Codeex. You can also use this SDK to control Codeex as part of your **CI/CD pipeline** (Continuous Integration/Continuous Delivery: 持续集成/持续交付，一种自动化软件开发流程，旨在提高开发效率和代码质量), or as an agent that directly interacts with your own agent. If you want to customize the agent layer, you can. For instance, we worked closely with the Cursor team to extract the best performance from the Codeex *model* (not the agent—we're bad at naming things; the model is distinct from the agent). They achieved this by aligning their tools with the model's training distribution and by aligning their harness with our open-source implementation of the Codeex CLI. All of this is publicly available. You can fork the repo, use our source code—go nuts!</p>
</details>

### Codeex 的未来展望

那么，Codeex 的未来会怎样呢？它发布至今还不到一年。特别是随着 Codeex Max 昨天的发布，事情发展得非常快。它现在是使用量增长最快的模型，每周处理数万亿个 token，这自开发者大会以来已经翻了一番。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what does the future hold for Codeex? It hasn't even been out for a year. Um and especially with the launch of CEX match yesterday like things are really changing fast. Uh it's the fastest growing model in usage now serving dozens of trillions of tokens per week which has actually doubled since dev day.</p>
</details>

始终在模型发展方向上进行构建是明智的。可以肯定的是，模型会变得更好。它们将能够以更长的任务周期进行无人监督的工作。新模型将提高信任上限。我现在信任这些模型能够完成比六个月前困难得多的工作，而且这种信任会持续增加。未来将是关于庞大的代码库和非标准库，以及如何在闭源环境中工作，匹配现有模板和实践。因此，你可以想象 SDK 将会不断演进，以更好地支持这些模型能力，让模型在运行中学习，不再重复错误，并普遍为能够编写代码和使用终端解决任何遇到的问题的智能体提供更多的接口。你可以在你的产品中通过 SDK 使用这些功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's always good to build where the models are going. It's safe to assume that the models will get better. They'll be able to get to work on much longer horizon tasks unsupervised. New models will raise the trust ceiling. I trust these models now to do some way harder work than I would have 6 months ago. And that's going to keep increasing. The future is about sprawling code bases and non-standard libraries and knowing how to work in closed source environments, matching existing templates and practices and the models uh and and and so you can imagine that the SDK will evolve to better support these model capabilities, letting the model learn as it goes and not repeat mistakes and generally provide more surface area for an agent that writes code and uses a terminal to solve whatever problems it encounters. counters and you can use that in your products via the SDK.</p>
</details>

### 总结

那么，我们学到了什么？协调器非常复杂，维护起来需要大量工作，尤其是在新模型不断发布的情况下。因此，我们在 Codeex 内部为您构建了一个协调器，您可以直接使用，或者如果您愿意，也可以查看源代码，并用它来构建编码之外的新事物，让我们来完成所有工作，确保您拥有最强大的计算机智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, what have we learned? Harnesses are really complicated and take a lot of work to maintain, especially with all the new models coming out. So, we've built one for you inside of Codeex that you can use off the shelf or look at the source if you want to and you can use it to build new things outside of coding and let us do all of the work making sure that you have the most capable computer agent.</p>
</details>

我们非常期待看到您能创造出什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we're really excited to see what you craft.</p>
</details>