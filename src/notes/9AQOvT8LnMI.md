---
author: AI Engineer
date: '2025-08-22'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=9AQOvT8LnMI
speaker: AI Engineer
tags:
  - knowledge-graph
  - ai-system-architecture
  - knowledge-augmented-generation
  - competitive-analysis
  - multihop-query
title: 智慧驱动的知识增强生成：超越RAG，构建可扩展的专家AI系统
summary: 本文深入探讨了知识增强生成（KAG）系统，并将其与传统的检索增强生成（RAG）系统进行对比。作者介绍了PO.AI如何利用知识图谱构建智慧驱动的AI系统，以实现更准确、更具洞察力的复杂查询响应。文章详细阐述了KAG的核心概念、其在竞争分析中的实际应用，以及如何通过N8N和多智能体架构进行实现。最后，强调了知识图谱在处理复杂关系、提升准确性、可扩展性及丰富查询能力方面的优势，并分享了构建此类系统的基准测试结果。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
people:
  - Chin Keong Lam
  - Jesus
companies_orgs:
  - PO.AI
  - National Science Foundation
  - IBM
products_models:
  - LLM
  - RAG
  - KAG
  - N8N
  - Neo4j
  - OpenAI model
  - Anthropic model
  - Chroma DB
  - LangChain
  - Cypher
media_books: []
status: evergreen
---
### 介绍PO.AI及其智慧驱动的AI系统

大家好，我是Chin Keong Lam，**PO.AI**（一家专注于构建专家AI系统的公司）的创始人兼首席执行官。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi everybody. My name is Ching Kyong Lamb. I'm the founder and CEO of PO.AI.</p>
</details>

关于我的公司，PO.AI在两年前应**国家科学基金会**（National Science Foundation: 美国政府资助科学研究的独立机构）的**SBIR拨款**（Small Business Innovation Research grant: 旨在鼓励小企业参与联邦研发的资助计划）邀请而启动，当时我们正在研究**大型语言模型**（LLM: Large Language Model: 一种基于深度学习的语言模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A bit background about my company. PO.AI started two years ago with an invitation from National Science Foundation from the SBIR grant funding investigating LLM.</p>
</details>

我们当时开发了一个由LLM驱动的**药物发现应用**（drug discovery application: 利用计算方法和AI技术加速新药研发过程的应用）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We did a LLM-driven drug discovery application.</p>
</details>

从那时起，我们开始利用在为大型企业构建AI系统方面学到的经验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Since then, we branched out to leverage what we learned about building AI system for large corporation.</p>
</details>

我们目前正在为多家客户构建专家AI系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are currently building expert AI system for several clients.</p>
</details>

目前我们构建的系统超越了传统的**检索增强生成**（RAG: Retrieval Augmented Generation: 一种结合信息检索和文本生成的技术）系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Currently, the system we build goes beyond RAG system.</p>
</details>

我们的许多客户都要求AI系统能够执行研究和咨询等任务，这些任务基于他们感兴趣的领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Many of our client is asking for AI system that perform task like research and advisory role based on their area of interest.</p>
</details>

今天的演讲旨在与各位AI工程师分享我们在构建此类系统方面迄今为止所学到的经验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today, the talk is about sharing with our fellow AI engineer what we learned so far building this kind of system.</p>
</details>

### 知识、知识图谱与知识增强生成（KAG）

那么，什么是知识？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What is knowledge?</p>
</details>

从哲学角度来说，知识是通过经验、教育以及对事实和原则的理解而获得的认识和觉察。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Generally philosophically, I say knowledge is the understanding and awareness gained through experience, education and the comprehension of facts and principle.</p>
</details>

这引出了下一个问题：什么是**知识图谱**（Knowledge Graph: 一种以图结构存储知识，表示实体及其之间关系的数据库）？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that lead to the next question is what is knowledge graph? Right?</p>
</details>

知识图谱是一种系统化的方法，通过连接知识并创建网络或互联关系来保存智慧，这非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So knowledge graph is a systematic method of preserving wisdom by connecting them and creating a network or interconnect relationship. That's important.</p>
</details>

该图谱代表了特定专业领域的思维过程和全面的分类体系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The graph represent the thought process and comprehensive taxonomy of a specific domain of expertise.</p>
</details>

这就是为什么对于未来构建能够深入思考并提供建议，而不仅仅是从数据库中检索数据的AI系统来说，知识图谱非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's why this is very important for people moving forward is about AI system then think a lot and return advice instead of just retrieve data from your database, right?</p>
</details>

这就引出了**知识增强生成**（KAG: Knowledge Augmented Generation: 一种通过集成结构化知识图谱来增强语言模型，以提供更准确和有洞察力响应的技术）的开发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that comes to the development of this KAG. Okay, what is KAG?</p>
</details>

KAG与RAG不同，它通过集成结构化知识图谱来增强语言模型，以提供更准确和有洞察力的响应，使其比简单的RAG更智能、更具结构化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">KAG stands for Knowledge Augmented Generation and it's different from RAG. Okay, it is enhanced language model by integrating structure knowledge graph for more accurate and insightful respond making needs smarter, more structural approach than a simple RAG.</p>
</details>

KAG不仅仅是检索，它还能理解，这是它的不同之处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">KAG doesn't just retrieve, remember, it understand, this is different.</p>
</details>

### 智慧驱动的AI系统模型

在采访了许多客户并作为特定领域的专家后，我发现他们的思维和决策过程存在共同模式，这些模式使他们成为各自领域的专家，而知识图谱似乎是完美的契合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">After interviewing a lot of my client, or we also expert in a certain area of scale, I found that there are common ways of their thinking, decision making process, the way that make them expert in their area knowledge graph seems to be a perfect fit.</p>
</details>

这里展示的是一个图谱或状态图，如果你是计算机工程专业的毕业生，就会明白。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here is the graph or state diagram if you're a computer engineering grad like So, um, it shows a wisdom.</p>
</details>

如图所示，智慧节点是核心；智慧并非静态的，它积极地指导决策并受到其他元素的融合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The wisdom node, as you can see, is the core, right? It's wisdom, it just isn't static, it actively guide decision and fused by other element.</p>
</details>

智慧的产出实际上会进入蓝色的决策环节。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The output from the wisdom actually goes to decision making in the blue, right?</p>
</details>

智慧并非被动的，它指导决策，帮助我们做出明智的选择。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wisdom isn't passive, it guide decision helping us choose wisely.</p>
</details>

然后，决策过程会分析绿色圆圈中给定的情况，决策并非凭空做出，它们分析真实世界的情况，这就是区别。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. And then the decision making analyze the situation given in the circle in the green and decision aren't make, you know, in a vacuum. Okay. They analyze real world situation. That's the difference.</p>
</details>

再看智慧的输入，以及金色部分从知识到智慧的关系反馈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So look at the wisdom input. Okay. Look at the relationship feedback from the knowledge to wisdom in gold color.</p>
</details>

知识到智慧的例子包括你所有的书籍、智能百科全书、维基百科等所有存储的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Example of that is knowledge to wisdom like all your books, smart and encyclopedia, Wikipedia, whatever you store plus once that data get absorbed by whatever model you use up there, it need to regurgitate that and understand.</p>
</details>

一旦这些数据被你使用的模型吸收，它需要反刍并理解，这就是为什么智慧能够在你摄取知识后合成数据非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's why it's very important that wisdom is able to synthesize the data after you ingested knowledge. Okay, that's a kind of abstract but I'll come to that later what I'm talking about.</p>
</details>

从洞察力来看，一个例子是智慧从混沌中提取模式，比如我的一些客户有很多社交媒体产品，他们如何从社交媒体中追踪产品情绪？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">From Insight, example of that is wisdom derive pattern from chaos like some of my client has a lot of social media, they their product, how do they, you know, track their product sediment from from social media, right?</p>
</details>

这很混乱，来自X（推特）的推文也是如此，但从中你可以看到竞争对手与当前产品的一些模式，这是一个例子，我稍后会详细说明。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's okay chaotic and from X tweet, right? So so from that you can see some pattern of their competitor versus current what my product is that that's like an example of that and I will go to that later.</p>
</details>

当所有这些连接的节点汇聚在一起时，它们为什么重要？所有节点相互关联，不断丰富智慧存储系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, when all these connected notes matter together, why do they matter? Matter all the notes relate to one another to ever enriching wisdom storing system.</p>
</details>

这次演讲是关于存储智慧的，对吧？所以知识告诉你“是什么”，经验告诉你“以前什么有效”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, this talk is about storing wisdom, right? So knowledge tells you what it is, right? And experience tell you what worked before.</p>
</details>

洞察力则发明“下一步尝试什么”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Insight invent what to try next, right?</p>
</details>

就像披萨一样，知识是食谱，经验是知道你的烤箱会烤焦饼皮，而洞察力就像是“嘿，加入蜂蜜到饼皮中，它会完美焦糖化”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like a pizza knowledge is recipe. Experience is knowing your oven burn crust inside is like hey it is adding you know honey to the crust you make caramelize perfectly.</p>
</details>

知识图谱最重要的部分是反馈循环。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? So the most important part of the knowledge graph is feedback loop.</p>
</details>

反馈并非单向的，它能自我学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, feedback isn't oneway street. It learn from itself.</p>
</details>

看看从洞察力到智慧，再回到所有节点的反馈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Look at the feedback from the uh going back to all the note from insight to wisdom.</p>
</details>

情境为未来的智慧提供信息，经验深化智慧，洞察力使其更敏锐。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">Okay. Um situation inform future wisdom. Experience deepen it insight sharpen it.</p>
</details>

就像一棵树生根一样，越是受到影响，它就越强大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like a tree growing roots, the more effect the stronger it get.</p>
</details>

现在我想问大家一个普遍的问题：你在生活中哪里见过这个循环？也许是一个艰难的决定，教会了你一些东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now I want to ask you a question in general. Where do you see this circle in your life? Maybe a tough decision that you know taught you something.</p>
</details>

领导力方面的一个实际应用是智慧可以避免通过学习反馈来避免膝跳反应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So one practical application for leadership is wisdom. Avoid knee jack reaction by learning from feedback.</p>
</details>

至于个人成长，你有没有注意到过去的错误让你变得更聪明？这就是这个循环的体现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As for personal growth, ever notice how past mistake make you wiser? That's the loop in the action.</p>
</details>

所以，这张幻灯片的要点是：智慧不是你赢得的奖杯，它是一种你需要锻炼的肌肉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All this. So the take away from the slide in this is wisdom isn't a trophy you learn earn it is a muscle you exercise.</p>
</details>

你喂给它越多的知识、经验和洞察力，它就越能指导你。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">The more you feed knowledge, experience, inside, the more that guide you.</p>
</details>

### 实际应用：竞争分析中的智慧驱动AI

现在我将向你们展示它是如何映射到我当前的客户案例中的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now I will show you how it being mapped to my current client, you know, all this is like very abstract, right?</p>
</details>

我的一位客户正在进行竞争分析，他们以前有营销部门来做这件事，但他们希望AI来完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how I one of my clients actually doing a competitive analysis, uh they used to have a marketing department doing that but they want AI to do.</p>
</details>

他们要求我构建这个系统，我正是用相同的分类法来存储所有这些信息的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, right. They they ask me to build the system. This is exactly what I did with the same taxonomy of storing all this.</p>
</details>

稍后我将讨论多智能体如何处理这种分类法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this taxonomy will be later on I talk about how multi-agent is going to handle all that.</p>
</details>

这是我为客户构建的一个聊天机器人，它不仅仅是一个普通的聊天机器人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here is one of the chatbot that I build for my client to do you know not just some uh we not just some chatbot. Okay.</p>
</details>

它是我们由智慧图谱驱动的AI，旨在将数据转化为战略。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's our wisdom graph power AI designed to turn data into strategy, right? Dominant.</p>
</details>

那么，它能回答什么样的问题呢？比如“我如何在当前市场空间中击败竞争对手？”这是一个非常复杂的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what kind of question I talk about talk about how do I win my competitor in this market space that's kind of very sophisticated question, right?</p>
</details>

如果只是简单地使用RAG，它无法回答这类问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So without uh if you do simply just right by first speaker talk about right right so it's not going to cut it they're not going to able to answer that kind of question.</p>
</details>

我所做的是，我们保留了相同的分类法，并将智慧映射到相同的引擎。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, what I did is this, uh we retain the same taxonomy and uh the wisdom is then mapped the same engine here.</p>
</details>

这里的智慧引擎就像一个编排智能体，它进行大量的决策，包括根据当前情况提供下一步行动的建议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The wisdom engine, wisdom engine is like a orchestration agent that does a lot of decision making including advising what the ARM is able to see based on the current situation what to do next, right?</p>
</details>

我将决策映射到策略生成器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, um what I did is uh for the uh decision making I map it to a strategy generator.</p>
</details>

这些客户正在讨论竞争分析，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these customers are talking about a competitive analysis, right?</p>
</details>

我将知识映射为他们拥有的市场数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, um I map the knowledge in term of knowledge what do they have they have market data, right?</p>
</details>

我将经验映射到他们过去的营销活动，他们有很多营销活动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I map this experience to HP is one of a kind past campaign so they have a lot of campaign doing a lot of marketing.</p>
</details>

洞察力实际上映射到他们存储的行业洞察数据库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then um the insight is actually mapped to uh in industrial insight they have a database doing storing that.</p>
</details>

当然，最重要的是情况：我的产品销售情况如何？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then of course the most important is is the the situation the situation is how how am I doing how my product selling, right?</p>
</details>

这就是情况，然后我将其映射到竞争对手的弱点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So so that that is like a situation and then I map that to a competitor weakness.</p>
</details>

这意味着，如果你意识到这一点，你可能会得到一个非常好的答案，然后聊天机器人可能会做出正确的建议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That means they say if you make the aware of that you probably get a very good answer and then the chatbot will probably be doing the right thing advising.</p>
</details>

那么，如何将这个非常高层次的状态图映射到一个能够有效运行的系统呢？诀窍来了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So from here very high level, you know, state diagram or there how do I map it to a system that drive well here comes the trick.</p>
</details>

### 实现细节：N8N与多智能体系统

这里有人听说过**N8N**（一个开源的工作流自动化工具）吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So anybody here heard of N8N? All right, all right, it's all good.</p>
</details>

我第一次遇到类似情况是在我过去的一个物联网项目中，它是由**IBM**（International Business Machines Corporation: 美国跨国科技和咨询公司）开发的**Node-RED**（一个基于流程编程的物联网工具）项目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So so I I first encounter similar situation when my past IoT project which is Node-RED developed by IBM, right?</p>
</details>

它也是类似的东西，像无代码工具，但底层有很多代码，都是**Node.js**（一个基于Chrome V8引擎的JavaScript运行环境）代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's the same kind of thing it's like no code but but underneath the hood there's a bunch of code. Okay, it's all nodejs code.</p>
</details>

但对于概念验证等，它非常灵活，我强烈推荐它。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">So, uh but but for the for for for proving your concept and all that it's very very very flexible and I I highly recommend that.</p>
</details>

这里你可以看到工作流，它实现了这个复杂的状态图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And and and here here you can take a look at the the workflow the work from I enable the implementation of this complicated state diagram with um what I say is there is a different community note.</p>
</details>

其中一个非常强大的节点是AI智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the very powerful node is AI agent.</p>
</details>

以前N8N只是一个工作流自动化工具，我不是在推销N8N，我只是告诉你们我在用它进行原型开发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well previously N8N is just a workflow automation tool I'm not selling for N8N here I'm just telling you I'm using it uh for prototyping.</p>
</details>

未来，客户可能会说他们需要更轻量级的方案，也许我们会转向**LangChain**（一个用于开发基于大型语言模型的应用程序的框架）或其他工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Further down the road maybe the client say too like I I really need to you know go lightweight maybe we will switch over to some other LangChain or whatever.</p>
</details>

但我们实际上将之前的智慧引擎状态图映射到了我们的智慧智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But uh we actually uses like I mapped the previous uh state diagram from the wisdom engine I actually map that to our uh wisdom agent.</p>
</details>

智慧智能体现在可以选择驱动不同的模型，比如**OpenAI模型**（OpenAI开发的AI模型）、**Anthropic模型**（Anthropic开发的AI模型），甚至**本地部署模型**（on-prem model: 在本地服务器上运行的模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, wisdom agent is now have the option to drive uh different model like openai model entropic model and even onrem model.</p>
</details>

使状态机工作起来的关键是，我的智慧智能体现在像一个监督智能体一样，监督所有其他智能体执行我在状态图上所说的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then that the key in making the state m the state machine work is that my wisdom agent is now overseeing like a supervisory agent or all these other agent that do uh whatever I say on the state diagram.</p>
</details>

例如，当进入洞察力节点时，洞察力智能体会去社交媒体查找所有关于你产品的情绪，然后收集这些信息并将其注入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like um for example the uh state of uh going into a note of insight inside agent will test to do go to the social media look for all the settlement of all your product and then collect that and then pump that.</p>
</details>

你可以在底部看到，我们将其连接到一个中心化的图谱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see that at the dot bottom that we I connected to a a centralized uh graph left.</p>
</details>

这个中心图谱可以由不同的智能体更新，洞察力智能体会更新其视角，作为该特定洞察力节点图谱的一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The central graph will be able to get updated by different agent uh inside agent will update the their perspective like part of that graph for the uh as I say for this particular uh inside note.</p>
</details>

所以，所有统一的知识图谱将包含最终的分类法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so all the unified knowledge graph will contain the taxonomy that eventually just think like the marketing strategies.</p>
</details>

就像营销策略一样，如果你手动操作，你可能会在SharePoint中思考，所有这些文件夹都会存储相同类型的智慧，并在此基础上做出决策。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The way that here they will probably if you are doing manually they probably would think in your shareepoint will all this you know folder will store the same kind of uh you know wisdom I call it to make decision based on that.</p>
</details>

最终的决策也取决于你使用的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the the final decision is LM also depend on the model that you use.</p>
</details>

但我认为最终的决策并非真正取决于模型，而是取决于所有的分类法和图谱结构，这非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh but I I I I pretty much think that not really the way that I think the final decision come when you make a right decision from the advisor output is basically depend on all the taxonomy the graph structure that's very important.</p>
</details>

### 知识图谱优于RAG的五大理由

所以，我想深入探讨我是如何实现其中一个节点的，只是稍微技术性地讲一下这个竞争节点是如何实现的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So come to that I I want to go deep down how I implement one of the node uh just to go a bit technical on this competitive node. How do I implement that?</p>
</details>

好的，在我这样做之前，先谈谈竞争分析，对吧？为什么你可以只使用RAG？为什么你要使用像**Neo4j**（一个流行的图数据库）这样的知识图谱？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, before I do that, okay, competitive analysis, right? Why why you can actually just use rag? Why do you want to use a knowledge graph like new forj?</p>
</details>

如果你曾被问到这个问题，告诉他们这五个理由。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, if you ever being asked that question, tell them these five uh five reason.</p>
</details>

第一个理由是，知识图谱系统擅长捕获和表示实体之间复杂的关联关系，这导致更深层次的上下文理解，这对于竞争分析至关重要，在这种情况下，洞察力可能显著不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, first reason is knowledge graph, you know, u system excel at capturing and representing complex relationship between entities that is covered by the first speaker but I'll just reiterate that this lead to a deeper contextual understanding which is crucial for comparative analysis where this in this case the insight can be significant different.</p>
</details>

你需要找到竞争对手的空白，这非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, you want to find the gap in your computer winners this is very important.</p>
</details>

第二个是提高准确性。通过利用结构化数据和语义关系，知识图谱可以提供比传统向量RAG更准确和相关的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second is improve accuracy by leveraging structured data and semantics relationship knowledge graph can provide more accurate and relevant information compared to traditional vector racks.</p>
</details>

这确保了生成的内容不仅相关，而且精确，减少了噪音并改进了决策制定。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um this ensure generated content is not only relevant but also precise and reduce the noise and improve decision making.</p>
</details>

在这种情况下，聊天机器人应该帮助营销部门的人员做出决策，所以你最好确保它能提高准确性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Making this in this case the board is supposed to help the guy that is marketing department make decisions.</p>
</details>

任何不准确的数据，你都会失去合同，被淘汰出局，对吧？所以这非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so you better make this work improve accuracy. Any inaccurate data, you will be out of the contract, out of the door, right?</p>
</details>

如果你像我一样从事合同工作，就必须让RAG尽可能准确。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, very important. Okay, you're talking about contract work like me, I have to make the rack as accurate as possible.</p>
</details>

第三个是可扩展性和灵活性。图谱具有令人难以置信的可扩展性，并且可以集成新的数据源和关系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the third is scalability and flexibility. There graphic, you know, graph are incredibly scalable and can integrate to new data source and relationship.</p>
</details>

这种灵活性允许持续改进。正如我所说，如果你的分类法是正确的，你将持续改进和扩展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The flexibility allow the continuous improvement. As I say, if your taxonomy is correct, you will continues to improve and and reach, right?</p>
</details>

所以这很重要，而且还有丰富的查询能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so that is important and also rich query capability.</p>
</details>

知识图谱支持复杂的查询，可以遍历多个关系实体，提供更丰富、更详细的洞察力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Knowledge craft support complex query traverse to multiple relationship entity provide richer and more detailed insight.</p>
</details>

这对于竞争分析特别有利，当面对多方面查询时，就像第一位发言人所说，它在回答普通RAG会失败的问题方面表现出色，比如**多跳查询**（multihop query: 需要通过多个步骤或关系才能获得答案的查询）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is particularly advantage for competitive analysis when multifacet query like like what the first speaker say it is super a notoriously good in answering things that normal rack will fail. It's like multihop question. Okay, this is very important.</p>
</details>

最后一个是增强的数据集成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the final one is the enhanced data integration.</p>
</details>

知识图谱可以无缝集成各种数据源，包括图片、图形、视频。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh knowledge graph can seamlessly integrate diverse data source pictures, graphics, videos.</p>
</details>

然而，现在LLM如此强大，我们拥有**光学字符识别**（OCR: Optical Character Recognition: 将图像中的文本转换为可编辑文本的技术）能力，只要你有正确的图谱结构，无论是半结构化还是非结构化数据，都可以做到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh however it is now that LM is so powerful we have OCR capability can do that as long as you have a right structure of the graph semistructure unstructured.</p>
</details>

这种整体方法确保了对竞争格局的全面视图，从而实现更明智的战略决策。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The holistic approach ensure compressive view of the competitive landscape enable more informed strategic decision making.</p>
</details>

### KAG在数值推理中的优势

好的，我将非常简要地介绍一下这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So one of the this is I'm going to just very briefly go through this just a uh example of that some of the thing like um problem of a vectors rack you know vector rack is really really bad in answering limited numerical resing.</p>
</details>

向量存储擅长语义相似性，但在复杂的数值计算方面却很吃力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Vector store excel you know at sematic sim similarity but struggle with complex numerical calculation.</p>
</details>

这就是为什么我正在为营销分析构建的聊天机器人实际上依赖于数字，而不仅仅是返回文本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is why uh for marketing analysis uh that I'm building the chatbot for uh they actually rely on number instead of just you know returning example like this kind of if you ask like what is the Apple uh revenue uh between uh two uh you know what's the revenue in 2022 they probably will give you a bunch of this kind of a passage, right?</p>
</details>

例如，如果你问“苹果在2022年的收入是多少？”，RAG可能会给你一堆这样的段落，而不是一个精确的数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Retrieve a graph instead of uh this kind of a very very precise thing like uh the answer is uh you know uh got knowledge cross able because the the data is already there in structure form.</p>
</details>

知识图谱能够做到这一点，因为数据已经以结构化形式存在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The data source assume a knowledge gra name this particular in this particular case Apple financial data the query will be able the query engine will be able to select the the revenue figure from 2021 to 2022 and and then do a function call the function call will eventually give come out with 15.23 23 which is exactly what the marketing guy was looking for a very quantitative stuff that most of the decision were based on that because you have the evidence not just some passage that you retrieve from the data it's basically evidence based decision making is very important for this kind of uh complicated rack system that you know so um there's a jungle out there right now you can use different kind of a uh uh uh thing to build your uh you know uh this is just a snapshot of that you know you can actually use lang chain plus chroma to to build your own rack and then you also can combine that with your knowledge graph depend on on on your user case.</p>
</details>

假设数据源是一个名为“苹果财务数据”的知识图谱，查询引擎将能够选择2021年至2022年的收入数据，然后进行函数调用，最终得出15.23（或类似）的精确数字，这正是营销人员所寻找的定量数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The data source assume a knowledge gra name this particular in this particular case Apple financial data the query will be able the query engine will be able to select the the revenue figure from 2021 to 2022 and and then do a function call the function call will eventually give come out with 15.23 23 which is exactly what the marketing guy was looking for a very quantitative stuff that most of the decision were based on that because you have the evidence not just some passage that you retrieve from the data it's basically evidence based decision making is very important for this kind of uh complicated rack system that you know so um there's a jungle out there right now you can use different kind of a uh uh uh thing to build your uh you know uh this is just a snapshot of that you know you can actually use lang chain plus chroma to to build your own rack and then you also can combine that with your knowledge graph depend on on on your user case.</p>
</details>

因为你有证据，而不仅仅是从数据中检索到的段落，这种基于证据的决策对于这类复杂的RAG系统非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because you have the evidence not just some passage that you retrieve from the data it's basically evidence based decision making is very important for this kind of uh complicated rack system that you know so um there's a jungle out there right now you can use different kind of a uh uh uh thing to build your uh you know uh this is just a snapshot of that you know you can actually use lang chain plus chroma to to build your own rack and then you also can combine that with your knowledge graph depend on on on your user case.</p>
</details>

### 构建KAG系统与基准测试

现在市场上有各种各样的工具可以构建你的系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um there's a jungle out there right now you can use different kind of a uh uh uh thing to build your uh you know uh this is just a snapshot of that you know you can actually use lang chain plus chroma to to build your own rack and then you also can combine that with your knowledge graph depend on on on your user case.</p>
</details>

这是一个快照，你可以使用LangChain和**Chroma DB**（一个开源的向量数据库）来构建你自己的RAG，然后你也可以根据你的用例将其与知识图谱结合起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is just a snapshot of that you know you can actually use lang chain plus chroma to to build your own rack and then you also can combine that with your knowledge graph depend on on on your user case.</p>
</details>

如果这张幻灯片显示RAG和KAG可以用金钱构建，那么我采用了红色的智慧图谱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, if if this this slide show that the rack and the k a can be bu with money. Okay, I adopt that wisdom graph in red color.</p>
</details>

通常，如果客户只是要求一个执行产品信息查询的简单RAG，你可以只使用一个简单的Chroma DB和LLM智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Normally you will see if client is just asking for a simple rack that perform product information query, you can just use a simple chroma DB with LM agent.</p>
</details>

但如果你开始问像“我如何根据当前市场份额击败竞争对手？”这样复杂的问题，那么我可能会采用知识图谱，结合图数据库和**Cypher查询**（Cypher query: Neo4j图数据库的声明式图查询语言），并且训练我的RAG执行多个**多跳查询**循环。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you start to ask so complicated questions like how can I beat my competition based on my current market share. Well, this will be able the the the the thing that I will probably be adopting is knowledge graph here with uh graph DB plus cipher query and then qua and also train my rack to perform several loop of uh we call multihop query and this probably will give you a very good answer.</p>
</details>

这可能会给你一个非常好的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this probably will give you a very good answer.</p>
</details>

当我在尝试提取时，我的时间快到了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh and then it come to the another question when I was trying to extract my uh oh I think my time is uh is almost up.</p>
</details>

无论如何，这就像是说，第一位发言人谈到了提取，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So anyway this is like to say uh the first speaker talk about the extraction, right?</p>
</details>

右边有一种非常简单的提取方法，即完全自动化的**LLM图谱转换器**（LLM graph transformer: 利用大型语言模型将文本数据转换为图谱结构的技术），左边是手动方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's a very simple way to extract on the right side is like automated totally automated LM graph transformer on the left is like manual.</p>
</details>

我可能会推荐混合模型，即在使用LLM提取图谱后，你采访你将要构建分类法的专家，让他们修剪图谱，移除许多不必要的关系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would probably recommend to send the hybrid model which is like after you use the LM to extract your graph you ask the interview the the expert that you're going to build uh to to build your taxonomy, right? To prone the graph we call it proning your graph remove a lot of relationship that then that that will be okay.</p>
</details>

我将尝试强调我们所做的基准测试结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And um I will try to just highlight like this this is the result of benchmark that we did.</p>
</details>

如果有人问你为什么要使用图谱或KAG，第一个是准确性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, anybody ask you, you know, why you want to use graph, right? Or KAG? Okay, first is accuracy.</p>
</details>

我达到了91%的准确率，因为它在提取结构方面非常出色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I had achieved 91% because it's really good in extract structure.</p>
</details>

第二个是灵活性，85%。第三个是可复现性，确定性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Second is flexibility, 85%. Third is repubity reproducibility, deterministic.</p>
</details>

第四个是可追溯性，最后，最重要的是可扩展性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the fourth one traceability and finally uh most important is scalability.</p>
</details>

### 总结与展望

总之，通过利用智慧知识的结构化特性，我们可以显著增强KAG系统的定量能力，并如前所述，通过使用智慧驱动的系统，对复杂查询做出更准确和有洞察力的响应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In conclusion, by leveraging structure nature of western knowledge, We can significantly enhance the quantitative capability of KAG system and a more accurate and insightful respond to complex query by using wisdom-driven system as highlighted.</p>
</details>

我们可以共同构建更智能的AI系统，这些系统可以扩展并存储智慧，通过正确的框架，甚至可能超越我们最初旨在服务的专家的智能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Together we can build smarter AI system that can scale and store wisdom with the right framing potentially surpass the intelligent of the initial expert that we meant to serve.</p>
</details>

所以，和Jesus聊聊吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh talk to Jesus. You know what do they just do? Talk to Jesus.</p>
</details>

他就在我们的展位里，我的好朋友。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He's in our in in a not booth. this my good friend.</p>
</details>

任何想构建图谱的人，我们在GitHub上有一个很好的LLM图谱RAG栈，由Neo4j赞助，开箱即用，只需启动你的Docker，你的文本就会被转换为图谱，然后你就可以愉快地修剪你的图谱了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh anybody that want to build graph we have a good uh so-called LLM graph rack stack on GitHub that is sponsored by new forj and out of the box just spin up your docker the next thing you know your text is going to be converted to your graph and you can start happy pruning your graph thank you thank you so.</p>
</details>