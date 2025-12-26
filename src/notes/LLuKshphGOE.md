---
area: "tech-engineering"
category: technology
date: '2025-11-24'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The Matrix
- Graph Academy
- Nodes AI 2026
- graphrag.com
products_models:
- Claude Code
project: []
series: ''
source: https://www.youtube.com/watch?v=LLuKshphGOE
speaker: AI Engineer
status: evergreen
summary: 本次峰会演讲探讨了如何通过图技术解决AI应用中的上下文工程问题，以提升检索模式和代理记忆能力。主讲人Stephen Chin介绍了上下文工程的演变，从简单的提示工程到动态、广阔的上下文输入，强调了AI记忆（短期与长期）的重要性。文章详细阐述了知识图谱作为结构化信息表示的优势，以及如何结合大型语言模型（LLM）实现强大的图RAG（检索增强生成）和可解释AI。通过两个Neo4j相关演示，展示了图技术在漏洞管理和多阶段查询中的实际应用，最终旨在赋能开发者成为信息架构师，更好地控制AI输出。
tags:
- agentic-ai
- context-engineering
- llm
- memory
- philosophy
title: 利用图技术连接点滴：上下文工程、检索模式与代理记忆
---
### 引言：利用图技术赋能AI应用

大家好，欢迎来到AI工程师代码峰会上的我的演讲。我将探讨如何利用**图技术**（Graph Technology: 一种以图形结构存储数据的方法，用于表示实体之间的关系）连接数据点，并解决诸如**上下文工程**（Context Engineering: 为AI模型提供相关、结构化信息以优化其输出的过程）、改进检索模式以及**代理记忆**（Agentic Memory: AI代理存储和检索信息以支持长期交互和决策的能力）等问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hello everybody and welcome to my session at a engineer code summit and I'm going to talk a bit about how you can connect the dots with graph technology and solve problems like context engineering um improving retrieval patterns and also agentic memory.</p>
</details>

我们将有很多乐趣。我是Stephen Chin，Neo4j的开发者关系副总裁，大家可以通过我的社交媒体账号Steve on Java找到我。很高兴大家今天能来参加这次会议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're going to have a lot of fun. My name is Stephen Chin. I'm VP of developer relations at Neo Forj and you can find me at all the different social media outlets with my handle Steve on Java. So excited you're all here to join for the session today.</p>
</details>

我认为过去几年，随着**AI技术**（Artificial Intelligence Technology: 模拟人类智能的计算机科学领域）基本上取代了我们的工作，我们很多人都有这种感觉。我们成为了AI编程、提示开发以及基于AI模型构建事物的奴隶。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think this is how a lot of us have felt the past couple years as AI technology has basically taken our jobs away. We've become slaves to um AI programming, to prompt development, to building things off AI models.</p>
</details>

当然，这并非全是坏事。我的意思是，我们有更多时间玩游戏，在**《黑客帝国》**（The Matrix: 一部科幻电影，描绘了一个虚拟现实世界）中消磨时间，但我们真正想做的是更有价值的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, it's not all bad. I mean, we we have a lot more time to to play games, to hang out in the matrix, but what we really want to be doing is we want to be doing things which are higher value.</p>
</details>

### 上下文工程的演变与重要性

这就是上下文工程发挥作用的地方，它将我们传统上通过“一次性巧妙措辞的**提示工程**（Prompt Engineering: 设计和优化给AI模型的输入提示以获得期望输出的技术）”来获取不同AI结果的方式，转变为更动态、更广泛的上下文输入，从而获得更好的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is where context engineering comes in the picture and transforms what we've traditionally been doing with kind of oneshot clever phrasing prompt engineering to get different results out of the AI and we're evolving that to have a more dynamic and and wider scope of things which we're feeding the AI as context which gives us much better results.</p>
</details>

这使得我们能够满足AI代理对更多上下文和信息的需求，以协同完成任务；拥有更动态的模型和应用程序，使我们的应用程序以目标为导向；选择性地整理信息，以适应我们所工作的特定领域的关联性。因此，如果你在企业领域工作，处理大量业务上下文，这一点尤为重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um this allows us to feed the desire of agents to get even more context and information to do things together. Um to have more dynamic models and applications to make our applications goal driven. Um selectively curate the information for the relevancy of the particular domain which we're working in. So if you're working in a um an enterprise domain, if you're working with a lot of business context, this is particularly important.</p>
</details>

然后，我们可以结构化输入，从输入模型的所有噪音中获得更多信号，这是当今模型面临的最大问题之一。尽管上下文窗口巨大，但注意力集中度很低，并且根本没有关注上下文的正确部分来给出好的结果。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">And then we can structure the input and get a lot more signal over all the noise of what's being entered into the model which is one of the biggest problems with models today. Um huge context windows but very little attention focus and simply not looking at the right parts of the context to give us good results.</p>
</details>

这使我们不再像提示工程师那样思考，而是像信息架构师那样思考，构建模型上下文，从而使AI产生卓越的结果。这使我们从传统的**《黑客帝国》**（The Matrix: 一部科幻电影，描绘了一个虚拟现实世界）中的被困工人，转变为超级英雄。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this allows us to think not like prompt engineers but like information architects where we're building the model context which actually gives us superior results coming out of the AI. And this evolves us from being um you know your traditional trapped to matrix worker to being superheroes.</p>
</details>

所以，这就是我们想要达到的目标。我们希望掌控自己的命运。我们希望能够为代理提供它们执行任务所需的所有信息和上下文，并确切地获得我们想要的结果。现在我们有许多工具可以利用，这些工具使我们能够操纵和控制上下文，并真正为AI提供成功所需的所有信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is this is where we want to be. We want to be in control of our destiny. We want to be able to give the agents all of the information all the context which they need to perform the task and to do exactly what we want to get for results out of it. And there's a lot of tools at our disposal now which allow us to manipulate, control the context and really um feed the AIS all the information which they need to be successful.</p>
</details>

### 上下文工程的范畴

在上下文工程的范畴内，有许多方面现在明确属于这个领域。首先是提示工程。当然，我们需要设计和工程化好的提示，确保AI拥有正确的指令、信息和基础，以便很好地完成其工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in the kind of the scope of context engineering there's a whole bunch of things which are clearly um part of the domain that this now encompasses. So one is prompt engineering. Of course, we need to design engineer good good prompts. Um, make sure that the AI actually has the right instructions, the right information and the right grounding which it needs to do its job well.</p>
</details>

但我们还需要通过使用**检索增强生成**（Retrieval Augmented Generation, RAG: 一种结合信息检索和文本生成的技术，用于提高大型语言模型回答的准确性和相关性）等技术，从不同的数据源中提取数据。因此，**RAG**对于从企业上下文和不同业务上下文中提取数据，然后将其作为额外信息提供给AI以供其做出决策，仍然非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we also need to pull in from different data sources by using things like retrieval, augmented generation. So um rag is still very relevant for the ability to pull in data from enterprise context from different business contexts and then supply that as additional information to the AI that it can use to make decisions.</p>
</details>

此外，还需要提取状态和历史。所以现在我们实际上希望我们的模型拥有记忆，包括短期记忆，以便它们可以相互协作，以及长期记忆，以便它们记住对话状态和历史，并能够进行更有效的长期操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um pulling in state and history as well. So now we actually want our models want memory um both short-term memory so they can collaborate with each other and also long-term memory so they remember the conversation state the history and um they can do more effective long-term operations.</p>
</details>

我们还希望能够以有意义的方式结构化输出，以便不仅可以输入到其他应用程序，还可以输入到我们需要协作和整合上下文的其他工具和事物中。当所有这些结合在一起时，就构成了上下文工程的范围和领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we also want to be able to structure the output in a meaningful way so we can actually feed into not only other applications but other tools and things which we need to collaborate with and integrate our um context with. And when you put this all together, this is kind of the the scope and domain of context engineering.</p>
</details>

### AI记忆：短期与长期

现在，其中一个主要焦点是记忆。它关乎我们如何捕获AI的记忆以及我们能用它做什么。记忆主要分为两大类。一种是**短期记忆**（Short-term Memory: AI在当前任务中使用的临时信息），这是AI当前任务正在处理的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, one of the big focuses of this is all about memory. So, it's all about how we capture the AI memory and what we're able to do with it. So, um there's kind of two main categorizations of memory. One is short-term memory. So, this is what the AI is currently working with on the current tasks.</p>
</details>

我们希望将尽可能多的信息压缩到短期记忆中，并为其提供在搜索窗口中靠前的相关结果。此外，还需要将工具结果整合到其中，尽管不应从工具中提供过多的信息，特别是来自以前的交流，因为工具可能会输出大量信息，从而填满我们的上下文窗口。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, we want to compress as much information as possible into the short-term memory and give it relevant results which are high up in the search window. Um, be able to integrate tool results into this as well, although you know not give it too much information from tools, especially from previous exchanges where the tools might have dumped a lot of output or information which will fill our context window.</p>
</details>

除此之外，我们还需要混合**长期记忆**（Long-term Memory: AI通过长时间对话或经验积累的持久信息）。这包括通过一系列长期对话学到的、可能是情景性的事物。我们需要找出过去对话的语义和结构意义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and in addition to this, we also need to mix in long-term memory. So things which you've learned over a long set of conversations which might be episodic. Um we need to figure out the semantic and the structural meaning of past conversations.</p>
</details>

将这些提取出来，用作AI的指令，以及我们可以用来指导和规划人工智能的程序和操作。当我们将这些结合起来时，它有助于我们将更相关的上下文提升到上下文窗口的更高位置，填补空白，并避免大量噪音，这些噪音会导致我们的AI应用程序产生不良结果、幻觉或其他问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um kind of pull this out into things which can either be used as instructions for the AI and also for procedures and operations which we can use to to guide and plan the artificial intelligence. And um when we put this together, this helps us pull the more relevant context higher up into the context window, fill in the gaps, and then avoid a lot of the noise, which gives us bad results or um hallucinations or other problems coming from our AI applications.</p>
</details>

记忆确实是我们需要完成的核心任务。如果你将自己连接到**《黑客帝国》**（The Matrix: 一部科幻电影，描绘了一个虚拟现实世界），这就是你将所有记忆、所有你想输入AI的信息与你自己的神经网络协同作用的地方。这现在极其重要，因为**大型语言模型**（Large Language Models, LLMs: 经过大量文本数据训练的深度学习模型，能够理解和生成人类语言）的质量仅取决于它们从数据中获得的响应质量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And um memory is really the core of what we need to accomplish. um you know if you're plugging yourself up to the matrix this is where you si synergize all of your memories all the things which you want to get into the AI together with um your own own bind your own neural network that you want to um express and it's extremely important right now because LMS are only as good as the quality of the response that they're getting from the data.</p>
</details>

如果你给它们糟糕的数据，如果你给它们垃圾，那么你将得到垃圾。所以，我们需要在上下文窗口中给它们正确的信息，并尽可能地限制和提升这些信息。能够使用**DSPy**（DSPy: 一个用于声明式编程LLM管道的框架）和**BAML**（BAML: 一个用于构建和部署LLM应用程序的框架）等工具进行更动态的提示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you give them bad data if you get them garbage then you are going to get garbage back out again. So, we needed to give them the the right information in the context window and kind of limit and give it um move it up as high as possible. Be able to do more dynamic prompting with things like DSPY and BAML.</p>
</details>

能够进行更多的推理，以便我们可以在数据之上进行内部上下文工程。这将使我们从人类开发者转变为代理，我们实际上将使用更多的代理技术来推动我们的应用程序构建事物。然后，这使我们能够更多地关注我们执行测试的时间，而不是仅仅关注我们训练模型的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um ability to do more reasoning um so we can do internal context engineering on top of our data. This will turn us from human developers into agents where we're actually using more agent technology to fuel our applications to build things. Um, and then this allows us to focus more on the time which we're doing our tests rather than just focusing on the time which we're training our models.</p>
</details>

因此，当我们拥有更多上下文时，它使我们能够做得更好，但拥有结构化信息和相关输入仍然很重要，这可以提高我们模型的可靠性和可解释性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so together when we have more context now it allows us to do better things but then it's still important that we really have structured information relevant inputs and this improves the reliability and the explanability of our models that come out of it.</p>
</details>

### 知识图谱在AI中的应用

实现这一目标的一种方法是利用**知识图谱**（Knowledge Graphs: 一种结构化的知识表示形式，通过节点和边来描述实体及其关系）。知识图谱作为一种技术已经存在了一段时间，但它们非常适用于AI，因为它们填补了AI在创建、构建事物、从不同来源提取信息方面非常擅长，但在结构化信息方面存在的空白。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so one of the ways which we can do this is by leveraging knowledge graphs. Knowledge graphs are a technology which has been around for a while but they're very applicable for AI because they fill in that gap between the AI which is very good at um creating things building things kind of pulling from different sources it has but um structured information knowledge graphs are a structured representation to understand a bit about how a knowledge graph is constructed.</p>
</details>

知识图谱通常由事实构建，这些事实是关于人、地点、事件或事物的节点。这些节点通过关系或它们之间的连线连接起来，这些连线表示这些事物是如何关联的。知识图谱对于人类和**大型语言模型**（LLMs）来说都非常容易阅读。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's typically built with facts which are are nodes about people, places, events or things. Those are linked together by relationships or um um lines between them which reference how those things are related. It's very easy for both humans and LLMs to read knowledge graphs.</p>
</details>

因此，它既可以作为一种组织概念，也可以作为一种理解AI正在做什么以及实际查看其背后数据的方式。它还可以作为您的组织、供应链以及组织中许多不同流程的**数字孪生**（Digital Twin: 物理实体或系统的虚拟模型，用于模拟、分析和优化其性能）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So both acts as a um organizing concept, but also a way which you can understand what your AI is doing and actually look at some of the data behind it. And um it can be also very useful as a digital twin of your organization, of your supply chain, of um a whole bunch of different processes in your organization.</p>
</details>

知识图谱的基本构造是代表不同情境中的人、关系以及可以附加到这些节点的属性的节点。这是一个知识图谱的例子，其中有两个人，他们彼此认识，他们住在一起。嗯，一个人和另一个人住在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the basic construct of a knowledge graph is um nodes which represent different people in the situation, relationships, and then you can attach properties to these nodes. So this is an example of a knowledge graph where you have two people, they know each other, they live with each other. Well, one person lives with the other.</p>
</details>

所以技术上来说，这是Ann的房子，他们都开一辆车。这辆车由Dan拥有或由Ann驾驶，Dan也驾驶。所以他们都与这辆车有关系，他们也与彼此生活在一起有关系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I guess technically it's Ann's house and they both drive a car. Now the car is owned by Dan or or by an driven by Dan as well. So they both have a relationship with the car and they have a relationship with living each other.</p>
</details>

你可以看到上面有属性。Dan住了多久或开了多久的车，车的类型？这是一辆沃尔沃。它是一个V70型号，一些关于它的信息，还有一些**嵌入**（Embeddings: 将文本、图像等数据转换为低维向量表示的技术）。所以我们也可以在图上封装嵌入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can see the there's attributes on this. How long has Dan lived or driven the car, the type of car? So it's a Volvo. Um it's a um model V70. some information about it and also some embeddings. So we can also encapsulate embeddings on the graph as well.</p>
</details>

因此，我们可以进行向量查找，这使我们能够在构建更大的知识图谱以捕获所有这些信息时，完成相当复杂的事情。知识图谱带来的好处是所有这些知识上下文和丰富性，我们可以将其构建成知识的表示形式，此外还有**大型语言模型**（LLMs）所具备的语言推理和创造力。当我们将它们结合起来时，我们可以做非常强大的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can do vector lookups and this allows us to do fairly complex things as we build larger knowledge graphs to capture all this information. And what knowledge graphs gives the benefit of is all of that knowledge context and enrichment that we can build into a representation of knowledge in addition to LLMs which have kind of that language reasoning and creativity and when we put them together we can do really powerful things.</p>
</details>

### 图RAG与可解释AI

我们已经讨论过**RAG**（Retrieval Augmented Generation: 检索增强生成）是上下文工程的重要组成部分，而做得更好的RAG是**图RAG**（Graph RAG: 将知识图谱与RAG技术结合，以提高检索和生成质量）。那么什么是图RAG呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so we talked a bit about rag being an essential part of context engineering and a even better way of doing rag is graph rag. Now what is graph rag? So</p>
</details>

**图RAG**是任何检索管道，它也使用图作为检索过程的一部分。一个例子是用户提出一个问题，它会发送给**大型语言模型**（LLM），然后LLM进行搜索，并询问是否有任何相关信息，这些信息将作为查询发送到知识图谱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">graph rag is any retrieval pipeline which also uses graphs as part of the retrieval process. And so um an example of this is a user asks a question um it goes to the LM and it does a search and it asks for if there's any relevant information which will go as a query out to a knowledge graph.</p>
</details>

然后，这些信息在LLM回答问题时作为额外上下文传递给LLM，然后LLM给出更丰富、更相关的答案。因此，它将提供比仅仅向量相似性搜索更相关的结果，因为您还拥有关于关系、节点、社区分组和更多上下文的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This then gets passed in as additional context to the LLM when it's answering the question and then the LM gives an enriched answer which is more relevant. So it's it's a will give you more relevant results than just a vector similarity search because you also have information about relationships about nodes about community grouping more context.</p>
</details>

所以现在您可以获得领域信息、事实信息、关于您主题的结构化知识。您可以解释**大型语言模型**（LLM）实际在做什么，因为您可以看到传递给LLM的知识图谱部分。您还可以随着时间的推移演化知识图谱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can now get domain information factual information structured knowledge on your subject. You can explain what the LM is actually doing because you can see the part of the knowledge graph which got passed to the LM. And you can also evolve the knowledge graph over time.</p>
</details>

现在您可以开始实施诸如**基于角色的访问控制**（Role-based Access Control: 根据用户在组织中的角色来限制其对系统资源的访问权限）之类的叠加层。例如，在患者信息系统中，您可以说只有医生才能访问诊断信息，而只有处理行政信息的人才能访问患者的电话号码、地址或其他个人信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can now start to implement overlays like role-based access. So you can say only these people get access for example in a um patient information system only the doctor would have access to the diagnosis but only the person who um handles the administrative information would have access to phone numbers or addresses or other personal information about the patient.</p>
</details>

因此，它允许您直接在知识图谱上叠加基于角色的访问控制，然后指示**大型语言模型**（LLM）允许响应哪些信息。知识图谱支持这种**可解释AI**（Explainable AI: 旨在使AI系统的决策过程对人类可理解和可信任的技术）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it allows you to kind of overload overlay that role based access directly on the knowledge graph and then instruct the LM on what information it's allowed to respond with and um knowledge graphs allow this sort of explainable AI.</p>
</details>

因此，在一个拥有大量节点和大量信息的大型图谱中，现在您可以将用户和代理在交互中的学习存储在图谱上下文中。您可以开始通过推理来可视化对话流。您可以分析代理系统的上下文数据，了解其性能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in a in a large graph with a lot of nodes and a lot of information now you can store the learnings from the user and agents at the interactions in the graph context. You can start to visualize conversation flows with the addition of reasoning. You can analyze the context data of agent systems about performance.</p>
</details>

随着时间的推移，识别改进的机会，无论是您传递的结果质量、关系，还是删除重复节点，以便获得更高质量的结果。因此，它为您提供了对应用程序的大量控制，以及修改和控制AI回答内容的能力，就像您在道场训练一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um identify opportunities for improvement over time of the um either the um the quality of the results which you're passing in the relationships um removing duplicate nodes so that you get better quality results coming out of it. So it gives you a lot of control over the application and the ability to modify and control what the AI is answering kind of like you're you're training in a in a dojo.</p>
</details>

我认为，在电影中，尼奥花了很多时间进行虚拟训练，通过他加载的不同程序提高技能。这就是我们能够完成许多惊人事情的方式，比如我将向您展示的这个演示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think you know in the in the film Neo spends a lot of time doing virtual training improving his skills with different programs he's loaded up and um this is how we're able to do a lot of amazing things like this demo which I'm going to show you.</p>
</details>

### 演示1：使用LLM知识图谱构建器进行图RAG

我们将展示的第一个演示是使用**LLM知识图谱构建器**（LLM Knowledge Graph Builder: 一个用于构建知识图谱的工具）的**图RAG**（Graph RAG）演示。我已经设置了一个**Neo4j Aura**（Neo4j Aura: Neo4j提供的在线免费云服务）实例。这是Neo4j的在线免费版本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the first demo we're going to show is a um graph rack demo using the LLM knowledge graph builder. So I've already set up a Neo Forj aura instance. This is the um um online free version of Neo Forj.</p>
</details>

你可以看到我有一个正在运行的实例，其中加载了许多关系。为了加载这些关系，我使用了知识图谱构建器。知识图谱构建器是一个非常简单的网络应用程序，它是开源的，它允许您做几件事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see I have a a running instance with a bunch of relationships loaded up. And to load up those relationships, I use the knowledge graph builder. The knowledge graph builder is a very simple web application. It's open source and it lets you do a couple things.</p>
</details>

它允许您上传文件。所以您可以将不同的文件拖放到用户界面中。在演示之前，我加载了几个代表供应链用例的文件。一个是供应链文档，如您所见，它包含大量关于不同**工件**（Artifacts: 在软件开发中指任何可交付或可用于开发过程的产物）及其数字签名和关系的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it lets you upload files. So, you can drag and drop different files into the user interface. Before the presentation, I loaded up a couple representative files of a um supply chain use case. One is a supply chain document and as you can see here it has a whole bunch of information about different artifacts um and the digital signatures of them and the relationship of them.</p>
</details>

第二个更有趣。这是一个**VEX文档**（VEX: Vulnerability Exploitability eXchange，漏洞可利用性交换文档：一种安全标准，用于描述软件组件中已知漏洞的可利用性状态），它是一个安全标准，它讨论了**Jackson库**（Jackson: 一个流行的Java库，用于处理JSON数据）中的一些漏洞。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the second one is the more interesting one. This is a a VEX document which is a security standard and it talks about some vulnerabilities um in this case inside the Jackson library and talks a bit about um how to remediate with it, which versions are affected um which commits fix it and all that good stuff.</p>
</details>

它还讨论了如何修复它，哪些版本受到影响，哪些提交修复了它等等。所以我们加载了相当多的信息，然后我所做的就是我已经将这些信息放入知识图谱中，我们可以看看**大型语言模型**（LLM）生成了什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um we have quite a bit of information which we loaded up and then what I've done is I've already dropped those into the knowledge graph and we can take a look at what got generated by the LM.</p>
</details>

它通过一个摄取阶段，**大型语言模型**（LLM）实际构建了一个知识图谱，然后我们可以看到其中一些节点代表**VEX文档**的不同部分。在这里，我们可以看到一些关于谁发现了漏洞、漏洞数据库URL的信息，所有这些都通过不同的关系连接起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it takes this through an ingest phase um where the LM actually builds out a knowledge graph and then we can see that some of these nodes represent different parts of the um VEX document. Um here we can see some information about um um who found the vulnerability, information about the um vulnerability database URL and um all this stuff is connected with different relationships.</p>
</details>

这使我们能够查询、导航和遍历这些信息，为**大型语言模型**（LLM）构建更好的响应。所以在这个演示中，我们将使用我们构建的知识图谱，然后运行一个执行两阶段过程的LLM。第一阶段它将进行向量查找，并进行相似性搜索，以在知识图谱中找到相关节点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this allows us to query, navigate and traverse this information to build better responses for the LM. So what we're going to do in this demo is we're going to take this knowledge graph which we built and then we're going to run an LLM which does a two-pass process. The first pass it's going to do a vector lookup and find a similarity search to find related nodes in the knowledge graph.</p>
</details>

第二阶段它将获取那些与结果相关的节点，找到相关节点，然后将这些节点作为上下文传递给**大型语言模型**（LLM）。理想情况下，我们希望从LLM那里得到的是，它将用它从知识图谱中获得的信息回答问题，然后它将无法回答或拒绝回答超出该知识池的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the second pass it's going to take those nodes which are related to the result find related nodes and then pass those in as context to the LM. And ideally what we'd what we'd like to get from the LM is that um it will answer questions with information it has from the knowledge graph and then it won't be able to answer questions or refuse to answer questions with things which are outside that knowledge um pool.</p>
</details>

所以让我们问它关于**Jasper库**（Jasper: 一个Java库，通常用于JSP页面编译）中的漏洞。**Jasper**是另一个非常常用的Java库。它实际上没有在**VEX文档**中被引用。所以，在这种情况下，我们希望得到一个“无响应”。好的，这太棒了。我打错了字，我应该说Jackson。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's ask it [gasps and sighs] um about vulnerabilities in the in the Jasper library. So Jasper is another um Java library that's very commonly used. It wasn't actually referenced in the VEX document. So, we're in this case, we're hoping to get a no response. Okay, so that's amazing. I I made a typo. I should have said Jackson.</p>
</details>

让我们看看当我们询问**Jackson库**时会得到什么，即使有拼写错误，因为**大型语言模型**（LLMs）知道人类是不完美的，它们非常擅长纠正我们的错误。在这里，我们可以看到它实际提取了关于**Jackson databind库**的信息，其中包含一个XML注入攻击。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's see what we get when we um ask about the Jackson library, even with the typo, because LMS know that humans are imperfect and they're very good at fixing our mistakes. And um here we can see that it actually pulled out information about the Jackson databind library with an XML injection attack.</p>
</details>

它了解一些关于漏洞的信息，它存在于哪个版本，是否已修复，以及在哪个版本中修复，所有这些信息都是从知识图谱中提取和聚合的。所以它给了我们相当多的信息，非常详细和专注，因为它基于的数据非常完整，它是有限的，而且我们可以随着时间的推移编辑、修改和更改响应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It knows a bit about the vulnerability, what version it's in, um whether it's fixed and at which version it's fixed and um all this information is is pulled from and aggregate off the knowledge graph. So um it gives us quite a lot of information um very detailed and very focused because it's rounded in a um data which is um very um complete um it's finite and it's something we can edit modify and change the response over time.</p>
</details>

因此，知识图谱是一个非常强大的工具。它使我们能够做这样的事情，从而获得更好的响应和答案。现在有了知识图谱，我们就可以去对抗邪恶的代理了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So knowledge graphs are a very powerful tool. It allows us to do things like this where we can um get better responses and better answers. And now with knowledge graphs at our disposal, now we can we can go and we can fight the um the evil agents.</p>
</details>

实际上，讽刺的是，**《黑客帝国》**（The Matrix: 一部科幻电影，描绘了一个虚拟现实世界）电影中的代理是坏人，但实际上他们的运作方式与现代代理非常相似，**大型语言模型**（LLMs）相互协作、整合，并在不同的算法上合作。甚至电影中的代理也有不同的个性和类型，有点像个体代理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Actually, it's kind of ironic that the um the agents of the Matrix film were um the bad guys, but actually they operated and acted a lot like modern agents where we're having LMS collaborate, pull together, and um cooperate on different algorithms. And even the agents in the film had different personalities and um different types um kind of like individual agents.</p>
</details>

所以我们需要提升我们的**《黑客帝国》**和图谱技能，达到一个我们可以用记忆检索等新工具来对抗代理的水平。我们已经讨论过**图检索**（Graph Retrieval: 从知识图谱中检索相关信息的过程），图谱也是一个很好的工具和机制，您可以使用它进行记忆检索。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um we need to power up and and get our um matrix and graph skills up to a level where we can go tackle the agents with new tools like memory retrieval. So we we talked a bit about graph retrieval and um graphs are also a great tool and mechanism which you can use to do um memory retrieval as well.</p>
</details>

### 图记忆检索与高级算法

所以我们可以进行记忆搜索，使用图记忆检索工具。我们有一个开源的**MCP服务器**（MCP Server: 一个用于图检索的开源服务器），它为图检索做了很多工作。现在您不仅可以查询知识图谱，还可以查询向量，就像我们在上一个例子中做的那样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can do search um in in memory use graph memory retrieval tools. We have an open- source MCP server which does a lot of this for graph retrievalss. And now you can query the graph not only for knowledge graphs but also vectors as we did in the last um example.</p>
</details>

我们还可以使用图数据科学算法，例如**社区分组**（Community Groupings: 在图论中识别图中紧密连接的节点群体的算法）或**K近邻算法**（K-Nearest Neighbors: 一种基于距离的分类或回归算法），或不同的图算法，这些算法使我们能够从图的关系和结构中提取一些见解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we can also use graph data science algorithms like um community groupings or k nearest neighbors or different graph algorithms which allow us to get um pull some insights out of the relationship and the structure of the graph.</p>
</details>

提取相关信息，然后将其作为额外上下文，无论是短期记忆还是长期记忆，传递到代理循环中。现在我们正在向代理提供来自短期记忆源（关于当前对话）或从图谱中提取的知识（如我们上一个例子中所示）或长期记忆结构（我们记忆以前的对话，赋予它们时间信息，然后将它们结构化为可以从图谱中检索的记忆）的额外信息和上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Pull back relevant information and then pass this as additional context um either for short-term or long-term memory into the agent loop. um where now we're feeding the agent with additional information and context from either um a short-term memory source about the current conversation or knowledge pulled in like kind of what we showed in the previous example from a graph or from a long-term structure of memory where we memorize um previous conversations give them temporal information and then structure those into a memory that can be retrieved from the graph.</p>
</details>

现在我们能够使用图记忆以实体及其关系的形式捕获知识，其中一些节点具有相关的属性，例如文本细节、嵌入、时间和位置。这是一种我们图谱、记忆图谱的视觉表示。其中一些属性被向量嵌入，这使我们能够进行基于向量的语义搜索。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And um now we're able to use graph memory to capture knowledge in the form of entities and relationships between them where some nodes have the relevant properties such as text details embeddings time and location on top of them. So this is kind of a visual representation of our of our graph our memory graph. Some of these properties get vector embedded and this enables us to do vector-based semantic search.</p>
</details>

所以现在我们可以通过投影到向量空间在图谱上进行语义搜索。但我们也可以在图谱上使用**K近似最近邻**（K Approximate Nearest Neighbors: 一种用于高效查找近似最近邻的算法）、**社区分组**（Community Groupings: 在图论中识别图中紧密连接的节点群体的算法）、**PageRank算法**（PageRank Algorithms: 一种用于衡量网页重要性的算法，也可用于图分析）等算法来回答不同类型的问题，并将最相关的结果提升到上下文中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now we can do semantic search on the graphs via projections into vector space. But then we can also use algorithms like K approximate nearest neighbors, community groupings, um page rank algorithms on top of the graph to answer different types of questions and to kind of bubble up the most relevant results into the context.</p>
</details>

这给了我们很大的力量，因为我们既可以进行向量嵌入，也可以在其之上进行额外的图算法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This gives us quite a lot of power because we can do both the vector embeddings, but we can also do additional graph algorithms on top of it.</p>
</details>

### 实际应用：更新演示文稿

好的，现在我们有了图谱的超能力，我们可以做一些仅仅通过向量嵌入和相似性搜索无法实现的神奇事情，就像**《黑客帝国》**（The Matrix: 一部科幻电影，描绘了一个虚拟现实世界）电影中的子弹时间一样。这将使我们能够完成惊人的特技并躲避代理。但让我们快速举一个这在实践中如何运作的例子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so now we have our our superpower with our our graph where we're able to do amazing things which aren't possible just with um vector embeddings and similarity searches kind of like like the bullet time and the Matrix films. Um this will allow us to do amazing stunts and to evade the um um the agents.</p>
</details>

假设我对**大型语言模型**（LLM）的问题是“上次我和我在印度的同事Sid一起演示时，更新这个演示文稿”。所以我们现在可以在图谱中搜索这些信息，这里有两个相关的人：我，开发者关系副总裁，以及Sid，社区经理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But let's give a quick example of how this would actually work in practice. So let's say my question to the LM was let's update this presentation from the last time I presented with Sid who's my colleague in India. Um so we can now search this information in the graph and there's two relevant people for this right so it's it's me um VP of Devril it's Sid who's a community manager and</p>
</details>

上次我们演示的活动是在班加罗尔举行的一个名为**GIDS**（GIDS: 全球创新开发者峰会）的开发者大会。所以现在我们有了这两个人与一个事件之间的时间关系，我们可以将演示文稿在特定时间点的记忆记录添加到其中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the event and the last time we presented it was at an event called GIDS um which is an event in Bangalore awesome developer conference so um now we have kind of that temporal relationship with the two people and then an event and we can add to this the the memory record at a particular time of the presentation.</p>
</details>

所以现在我们正在提取关于这个演示文稿在特定时间点的信息，我们可以将其作为上下文传递给**大型语言模型**（LLM）。因此，当我们要求它更新演示文稿时，我们都拥有关于谁在何时何地演示的上下文，以便LLM在其之上构建额外信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now we're pulling back information about this presentation at a specific point in time and we can pass this in as context to the LM. So when we ask it to update the presentation we both have the context of who presented where they presented and the time period in which they presented for the LM to build additional information on top of it.</p>
</details>

这只有通过图谱的多阶段查询才可能实现。图谱在您能够提取多个相关事实但无法通过单个查询提取的用例中表现出色。如果您可以通过一次性查询或单个相似性搜索完成，那么标准的向量**RAG**（Retrieval Augmented Generation）对于这些用例来说是足够的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is only possible because we can do this um multi-stage query with graphs. Graphs excel in use cases where you are able to pull in multiple facts which are related um but don't get pulled back in a single query. If you can do it in a in a one shot or you can get a a single similarity search um standard vector rag is is fine for those sorts of use cases.</p>
</details>

当关系是两个或更多时，您才能从**图RAG**（Graph RAG）和图记忆中获得真正的价值。这使我们能够进行各种不同类型的图检索器。所以我们可以进行显式检索查询，我们有预先准备好的、具有不同入口点的检索查询，并检索一些上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's where the relationships are two or more where you get the real value from doing um graph rag and graph memory. And um this allows us to do a whole bunch of different types of graph retrievers. So um we could do explicit retrieval queries where we have pre-anned retrieval queries with different entry points and retrieving some context.</p>
</details>

这为我们提供了图谱中的一些重要信息，但我们可以通过文本解密做得更好。通过使用模式微调**大型语言模型**（LLM），为问题生成查询，然后我们可以通过**生成式遍历**（Genetic Traversal: 一种迭代地导航图谱并收集信息直到问题得到回答的方法）将其提升到新的水平，其中我们迭代地遍历图谱，收集信息直到我们回答问题，并使用一套适当的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this gives us some great information from the graph but we can do better by doing text decipher. So fine-tuning the LM with schema generating a query for the question and then we can kind of take this to the next level with a genetic traversal where we iteratively navigating over the graph collecting information until we answer it and using an appropriate set of tools.</p>
</details>

### 演示2：使用Claude Code进行代理遍历

为了展示一个例子，我们将在第二个演示中再次使用我加载的相同知识图谱，但这次我们将使用**Claude Code**（Claude Code: 一种大型语言模型，擅长代码理解和生成）查询该知识图谱。我所做的是，我使用**Neo4j Cypher MCP服务器**（Neo4j Cypher MCP Server: Neo4j的一个开源扩展，用于通过Cypher查询图数据）连接了Claude Code，这是一个开源扩展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And to show an example of this um we're going to use the same knowledge graph which I loaded up again in our demo number two but this time we're going to query that knowledge graph using clawed code. So what I've done is I've hooked up claude code using the um Neoraj MCP cipher um MCP server which is an open source extension. You can say new forj cipher mcp server which I've already configured with the database settings and now when we talk to cloud and we ask it a question it can answer with that additional graph context that it can tell us things.</p>
</details>

您可以说我已将Neo4j Cypher MCP服务器配置了数据库设置，现在当我们与Claude Code交谈并向它提问时，它可以用额外的图上下文回答我们。所以我将一些关键词放入MCP服务器，比如“图谱”和“数据库”，我们可以问它“你对**Jackson漏洞**了解多少，基于你的图数据库？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I put a few keywords into the MCP server like um graph and database and we can ask it um what do you know about the Jackson vulnerability uh based on your graph database.</p>
</details>

所以现在除了从其标准知识来源中提取信息外，它还将使用**Neo4j Cypher MCP服务器**，然后查询它以获取额外信息。您可以看到它正在执行这个多步骤计划，即图谱搜索。首先，它获取图谱的模式，以便它能够理解关系以及图谱是如何结构化的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so now in addition to you know pulling in information from its standard knowledge sources it's going to use the NeoRaj MCP server and then query it to get additional information. And you can see that it's doing this multiplestep plans um search of the graph. So first it gets back the schema of the graph so it can understand the relationships and how the graph is structured.</p>
</details>

现在它理解了图谱的模式，它可以返回并进行一系列查询，以获取有关特定漏洞的信息。所以它正在触发一系列不同的**Cypher查询**（Cypher Queries: Neo4j图数据库的声明式图查询语言）。**Cypher**是Neo4j的图查询语言，大多数图数据库都支持它。它现在也是一个标准。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now that it understands the schema of the graph, it can go back and it can make a bunch of queries to get information about the particular vulnerability. So it's firing off a bunch of different cipher queries. Cipher is the um graph query language for Neo Forj and most graph databases support it. It's also now a standard.</p>
</details>

由**ISO**（International Organization for Standardization: 国际标准化组织）批准的**GQL标准**（GQL Standard: Graph Query Language，图查询语言标准）基本上是Cypher的一个子集。现在它获得了关于漏洞的信息，它正在提取一些文本块以获取悬挂在这些节点上的额外上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The GQL standard that's ratified by ISO is um basically a subset of Cipher. And now that it got back information about the vulnerabilities, it's pulling back some of the text chunks to get additional context which are hanging off of those nodes.</p>
</details>

通过这种方式，它可以为我们提供一个非常完整的答案，其中包含尽可能多的来自图谱的信息和上下文。这种方法与之前的方法的主要区别在于，之前的方法相对较快，但它在**通用漏洞披露**（Common Vulnerabilities and Exposures, CVE: 一种公开披露已知网络安全漏洞的列表）上提供的细节级别有限。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this way it can give us a a very complete answer with as much information and context as possible from the graph. And the the main difference between this approach where compared to the previous one is the previous approach was relatively fast but you the level of detail it gave us on the CV was limited.</p>
</details>

当我们给代理（在这种情况下是**Claude Code**代理）在图谱上进行遍历、获取信息、进行更多遍历的能力时，您可以看到它为我们提供了关于漏洞的非常详细的信息。所以它找出了CVE编号、受影响的漏洞、攻击类型、严重性以及攻击的技术描述。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When we give a an an agent in this case we're giving the clawed agent the ability to kind of have at it for the graph do traversals get information do more traversals you can see that it gives us back very detailed information about the vulnerability. So it figured out the CV number, the affected vulnerability, the type of attack, the severity, and a technical description of the attack.</p>
</details>

这比我们之前得到的要详细得多。它明确告诉我们需要升级到哪个版本才能修复攻击，并提供了一些关于此的建议信息。因此，如果我们试图开发一个漏洞报告或解释我们组织应该如何解决这个漏洞，那么使用这种代理多步骤MCP检索方法非常强大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's a lot more detailed than what we got before. And it tells us specifically what versions we need to upgrade to to remediate the attack um and gives us some advisory information as well about this. So um if we were trying to develop a um vulnerability report or something to kind of explain how we should as an organization um address this vulnerability um using the sort of agentic multi-step um MCP retrieval approach is quite powerful.</p>
</details>

因为您可以看到它为我们提供了最佳的响应，因为它能够返回并不断从知识图谱中提取它所需的额外信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because you can see that it gives us um the best possible response since it's able to go back and keep pulling additional information from the knowledge graph that it needs.</p>
</details>

### 学习资源与总结

好的，我们已经看到了几种不同的方法，可以将知识图谱应用于解决和改进AI应用程序的上下文。所以现在我们知道我们需要图谱，我们需要大量的图谱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so we've seen a few different ways which we can apply knowledge graphs to solve and improve the context of our AI applications. So now that we know that we need graphs, we need we need a lot of graphs.</p>
</details>

寻找图技术信息和大量图谱用例的最佳地点是**Graph Academy**（Graph Academy: 一个免费学习图技术的在线资源）。它是一个完全免费的资源，用于学习**Cypher查询**。它有关于Cypher查询的课程，有关于**图RAG**的课程，并提供Python和TypeScript的示例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the best place to find information about graph technology and getting a lot of different use cases for graphs is graph academy. It's a entirely free resource to learn about um both cipher queries. It has courses on cypher queries, has courses on graph rag with examples in both Python and TypeScript.</p>
</details>

我们还有一些更高级的图G图课程即将推出。所以有很多信息，都是免费的，而且非常注重实践，让您可以开始并实际构建您的第一个应用程序，就像我在这里演示的那些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um we have some more advanced um graph G gra courses coming up as well. So um a lot of information which is all free and very hands-on for you to get started and actually build your first application kind of like the ones which I showed here in the presentation.</p>
</details>

现在，如果我们想要更多的知识，更广泛的范围，我们可以去**Nodes AI 2026**（Nodes AI 2026: 一个专注于AI的免费在线虚拟会议），这是我们的免费在线虚拟会议。这是继我们上周举行的令人惊叹的Nodes大会之后，该大会有超过13,000名注册者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um now if we want even more knowledge kind of a wider span we can then go to nodes AI 2026 which is our free online virtual conference. Um this is following up the amazing nodes conference we had last week with um over 13,000 registrants.</p>
</details>

所以这是一个盛大的活动，**Nodes AI**全天专注于AI，有以AI为重点的会议。如果您想提交论文，**CFP**（Call for Papers: 征稿通知）现在开放，而且免费参加和观看所有会议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it was a huge event and Nodes AI is all about AI for um an entire day with AI focus sessions. The CFP is open right now if you'd like to submit and it's free to attend and watch all the sessions.</p>
</details>

如果我们真的想深入研究，并在架构师自己的游戏中击败他，那么我们需要大量的深入研究和信息。最好的地方是**graphrag.com**（graphrag.com: 一个社区网站，提供图RAG的最新研究和指南），这是一个我们支持的社区网站，其中包含关于不同图谱方法的最新研究、操作指南和关于如何实施**图RAG**的概念信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if we want to really get down and you know beat the architect at his own game, then we need a lot of deep research and information. And the best place for that is graphrag.com which is a community site which we support um where it has all of the latest research on different graph approaches um how-to guides and conceptual information about how to implement graph rag and just a general resource which will help you to uplevel your ability to apply graphs to different problem domains um with a whole bunch of of the cutting edge latest research which is coming out.</p>
</details>

这是一个通用的资源，将帮助您提升将图谱应用于不同问题领域的能力，其中包含大量前沿的最新研究。所以，令人兴奋的事情。非常感谢大家今天参加我的会议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, um, exciting stuff. Thank you very much for joining me for the session today.</p>
</details>

我希望您对如何使用图谱连接数据点并改进AI应用程序的上下文工程有了更多的了解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I hope you learned a little bit more about how you can use graphs to connect the dots and improve your context engineering for your AI applications.</p>
</details>