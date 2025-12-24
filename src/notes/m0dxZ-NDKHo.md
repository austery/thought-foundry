---
area: tech-insights
category: technology
companies_orgs:
- Cisco
- GitHub
- ServiceNow
date: '2025-08-22'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- MCP
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=m0dxZ-NDKHo
speaker: AI Engineer
status: evergreen
summary: 思科Outshift团队的产品负责人Ola Mabadeje介绍了他们如何利用多智能体AI系统、网络知识图谱和数字孪生技术，解决网络变更管理中普遍存在的生产环境故障问题。该方案通过自然语言接口与ITSM工具集成，利用AI智能体进行影响评估和测试计划生成，并在数字孪生环境中运行测试，显著减少了令牌消耗和响应时间。文章详细阐述了知识图谱的构建挑战、多模型灵活性、性能等技术要求，并展示了一个实际的防火墙规则变更管理演示，强调了开放标准和可伸缩系统的重要性。
tags:
- agent
- digital
- management
- network
- network-automation
title: 思科Outshift：利用多智能体AI和网络知识图谱应对网络变更挑战
---

### 引言：思科Outshift的AI探索

大家好，我是来自思科的Ola Mabadeje，一名产品经理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Good afternoon everyone. My name is Ola Mabad. I'm a product guy from Cisco.</p>
</details>

我的演讲会比技术性内容更偏向产品，但我相信大家会喜欢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so my presentation is going to be a little more producty than techy, but um uh I think you're going to enjoy it.</p>
</details>

我在思科从事AI工作已有三年，隶属于一个名为**Outshift**（思科孵化部门：专注于探索新兴技术并加速传统业务部门发展）的团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um I've been at Cisco working on uh AI for the last three years and um I work in this group called outshift. So outshift is Cisco's incubation group.</p>
</details>

我们的职责是帮助思科关注新兴技术，并研究这些技术如何能加速我们传统业务部门的路线图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh our charter is to help Cisco look at emerging technologies and see how this emerging technologies can help us accelerate the road maps of our traditional business units and uh so um by uh by training I'm an electrical engineer um dabbled into network engineering enjoyed it and I've been doing that for a while but over the last three years focused on AI um our group also focuses on quantum technology so quantum networking is something that we're focused on and um if you want to learn more about what we do. Uh we're out shift at Cisco. Uh you can learn more about that.</p>
</details>

我最初是电气工程师出身，后来涉足网络工程并乐在其中，从事了很长一段时间，但在过去三年里，我专注于AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">by training I'm an electrical engineer um dabbled into network engineering enjoyed it and I've been doing that for a while but over the last three years focused on AI.</p>
</details>

我们的团队也关注量子技术，因此量子网络是我们关注的重点之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um our group also focuses on quantum technology so quantum networking is something that we're focused on.</p>
</details>

如果大家想了解更多关于我们的工作，可以关注思科的Outshift。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And um if you want to learn more about what we do. Uh we're out shift at Cisco. Uh you can learn more about that.</p>
</details>

今天，我们将快速深入探讨这个话题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh for today we're going to dive into this uh real quick.</p>
</details>

就像我说的，我是一名产品经理，所以我通常从客户的问题入手，试图理解他们想要解决什么，然后从那里反向工作，为他们创造解决方案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And um like I said I'm a product guy. So I usually start with my customers problems trying to understand what are they trying to solve for and then from that work backwards towards creating a solution for that.</p>
</details>

作为我们流程的一部分，我们通常会经历一个孵化阶段，在此期间我们会向客户提出大量问题，然后开发原型，进行A/B测试，最后将**MVP**（Minimum Viable Product: 最小可行产品）交付到生产环境中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So as part of the process for us we usually go through this incubation phase where we ask customers a lot of questions and then we come up with prototypes we do a testing b testing and then we kind of deliver an MVP into a production environment.</p>
</details>

一旦产品符合市场需求，该产品就会毕业并融入思科的业务部门。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And once we get product market fit that product graduates into the Cisco businesses.</p>
</details>

### 客户痛点：网络变更管理中的故障挑战

一位客户曾提出这个问题：在进行变更管理时，我们在生产环境中遇到了很多故障挑战，我们如何才能减少这些故障？我们能否利用AI来解决这个问题？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this customer had this issue they said when we do change management we have a lot of challenges with failures in production how can we reduce that can we use AI to reduce that problem.</p>
</details>

我们深入研究了这个问题的陈述，并意识到这是整个行业的一个主要问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we double clicked on that problem statement and we realized it was a major problem across the industry.</p>
</details>

我不会在这里深入细节，但这是一个大问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I won't go into the details here but it's a big problem.</p>
</details>

现在，为了解决这个问题，我们想了解AI在这里是否真的有其用武之地，或者仅仅是基于规则的自动化就能解决这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now uh for us to solve the problem wanted to understand does AI really have a place here or it's just going to be rulebased automation to to solve this problem.</p>
</details>

我们研究了工作流程，并意识到工作流程中有一些特定的点，**AI智能体**（AI Agents: 能够自主感知环境、做出决策并执行任务的软件实体）确实可以帮助解决问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we looked at the workflow we realized that there are specific spots in the workflow where AI agents can actually help address a problem.</p>
</details>

因此，我们重点关注了第三、第四和第五点，我们相信AI智能体可以在这些点上帮助提升客户价值并减少他们所描述的痛点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we we kind of highlighted three, four and five where we believe that AI agents can help increase the value uh for customers and reduce the pain points that they were describing.</p>
</details>

于是，我们与团队坐下来，说：“让我们为这个问题找一个解决方案。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we sat down together with the teams. We said let's figure out a solution for this.</p>
</details>

### 解决方案核心组成：自然语言、多智能体与知识图谱

这个解决方案由三大核心部分组成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so uh this solution consists of three big buckets.</p>
</details>

首先，它必须是一个**自然语言接口**（Natural Language Interface: 允许用户使用日常语言与计算机系统交互），网络运营团队可以通过它与系统进行交互。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first one is the fact that it's a it has to be natural language interface where network operations teams can actually interact with the system.</p>
</details>

这不仅适用于工程师，也适用于其他系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's the first thing and not just engineers but also systems.</p>
</details>

例如，在我们的案例中，我们构建了这个系统来与**ITSM**（IT Service Management: IT服务管理，一套管理IT服务生命周期的方法和流程）工具（如**ServiceNow**：一款流行的基于云的ITSM平台）进行通信。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for example in our case we built this system to talk to an ITSM tool such as service now.</p>
</details>

所以，我们实际上在ServiceNow端有智能体，它们与我们这边的智能体进行通信。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we actually have a agents on the service now side talking to agents on our side.</p>
</details>

其次是位于此应用程序内的**多智能体系统**（Multi-agent System: 由多个相互作用的智能体组成的系统）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um the second piece of this is the multi- aent system that sits within the within this application.</p>
</details>

我们有负责特定任务的智能体，例如负责**影响评估**（Impact Assessment: 评估变更可能带来的潜在影响和风险）、进行测试以及对网络中可能发生的潜在故障进行推理的智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have agents that are tasked at doing specific things. So an agent that is tasked as doing impact assessment doing testing doing uh reasoning around uh potential failures that could happen in the in the network.</p>
</details>

第三部分，也是我们今天将花一些时间讨论的，是**网络知识图谱**（Network Knowledge Graph: 以图结构表示网络实体及其关系，用于存储和推理网络信息）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the third piece of this is where we're going to spend some of the time today, which is network knowledge graph.</p>
</details>

在这种情况下，我们拥有**数字孪生**（Digital Twin: 物理系统或过程的虚拟模型，通过实时数据保持同步）的概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have a a the concept of a digital twin in this case.</p>
</details>

我们在这里尝试做的是构建一个实际生产网络的孪生体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what we're trying to do here is to build a twin of the actual production network.</p>
</details>

这个孪生体包括一个知识图谱和一套用于执行测试的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that twin includes a knowledge graph plus a set of tools to execute test testing.</p>
</details>

我们稍后会深入探讨这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so um we're going to dive into that in a little bit.</p>
</details>

但在那之前，我们面临的挑战是：“我们想构建一个实际网络的代表性表示，我们该如何做到这一点？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But before we go into that, I I we we had this challenge of okay, we want to build a representative representation of the actual network. How are we going to do this?</p>
</details>

因为如果你对网络非常了解，就会知道网络是一种非常复杂的技术。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um because if you know networking pretty well, networking is a very complex uh technology.</p>
</details>

客户环境中存在各种供应商、各种设备，如防火墙、交换机、路由器等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You have a variety of vendors in the customers environment, variety of devices, firewalls, switches, routers and so on.</p>
</details>

所有这些不同的设备都以不同的格式输出数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And all of these different devices are spitting out data in different formats.</p>
</details>

所以我们面临的挑战是，如何使用知识图谱和一种能被智能体理解的**数据模式**（Data Schema: 描述数据结构、类型和关系的规范）来创建这个真实世界网络的表示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the challenge for us was how can we create a representation of this real world network using knowledge graphs in a data schema that can that can be understood by agents.</p>
</details>

目标是创建一个**数据摄取管道**（Ingestion Pipeline: 用于收集、处理和存储数据的自动化流程），以一种智能体能够以有意义和预测性的方式采取正确行动的方式来表示网络。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so the goal was for us to create this ingestion pipeline that can represent the network in such a way that agents can take the the right actions in a meaningful way and predictive way.</p>
</details>

为了实现这一点，我们有三大类需要考虑的事项。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so for us to to kind of proceed with that we had this three big buckets of things to consider.</p>
</details>

### 知识图谱构建的挑战与要求

我们必须考虑数据源会是什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we we had to think about what are the data sources going to be.</p>
</details>

在网络中，有控制器系统、设备本身、设备中的智能体、配置管理系统，所有这些都在从网络收集数据，或者拥有关于网络的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you again in networking there are controllers systems there the devices themselves there agents in the devices there are configuration management systems all of these things are all collecting data from the network or they'll have data about the network.</p>
</details>

当它们输出数据时，它们会以不同的语言（如YANG、JSON等）输出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now when they spit out their data they're spitting it out in different languages yang JSON and so on another set of considerations to have.</p>
</details>

然后，数据实际的输出方式可能是流式遥测、JSON格式的配置文件或其他形式的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then in terms of how the data is actually coming out it could be coming out in term of streaming telemetry it could be configuration files in JSON it could be some other form of of data.</p>
</details>

我们如何看待这三种不同的考虑因素，并提出一套能够实际构建一个解决客户痛点系统的要求？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How can we look at all of these three different considerations and be able to set come up with a set of requirements that allows us to actually build a system that that addresses the customer's pain point again.</p>
</details>

因此，从产品角度来看，团队有一系列要求：我们希望知识图谱系统具有**多模型灵活性**（Multimodel Flexibility: 数据库能够支持多种数据模型，如键值对、文档、图等）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so um the team uh from a product side we had a set of requirements we we wanted a system that uh a knowledge graph that can have multimodel flexibility uh that means you can talk key value pairs you understand JSON files it understands uh relationships across different entities in a network.</p>
</details>

这意味着它能够处理键值对、理解JSON文件，并理解网络中不同实体之间的关系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That means you can talk key value pairs you understand JSON files it understands uh relationships across different entities in a network.</p>
</details>

第二点是性能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Second thing is performance.</p>
</details>

如果工程师查询知识图谱，我们希望能够即时访问节点信息，无论该节点位于何处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh if a if an engineer is querying a knowledge graph, we want to have instant access to the node information about the node no matter where the the location of that node is.</p>
</details>

这对我们的客户很重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That was important for our customers.</p>
</details>

第三点是操作灵活性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second thing was operational flexibility.</p>
</details>

因此，数据模式必须能够整合到一个统一的模式框架中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the schema has to be such that uh we can consolidate into one schema framework.</p>
</details>

第四点是**RAG**（Retrieval-Augmented Generation: 检索增强生成，一种结合信息检索和文本生成的技术）部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh the fourth piece here is where the the the rag piece comes into place.</p>
</details>

我们今天已经听了一些关于图RAG的讨论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we've been hearing a little about graph rag for for for a little bit today.</p>
</details>

我们希望这个系统能够具备**向量索引**（Vector Indexing: 将数据转换为向量并在向量空间中进行高效检索的技术）能力，以便在需要时进行语义搜索。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh we wanted this to be a system that has ability to have vector indexing in it so that when you want to do semantic searches at some point you can do that as well.</p>
</details>

最后，就生态系统稳定性而言，我们希望确保当我们将此系统部署到客户环境中时，客户无需进行大量的繁重工作来与他们的系统集成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then in terms of just ecosystem uh um stability we want to make sure that when we put this in the customer's environments uh there's not there's not going to be a lot of heavy lifting that's going to be done by the customer to integrate with their systems.</p>
</details>

而且，它必须支持多个供应商。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And again it has to support multiple vendors.</p>
</details>

这些是产品方面的要求，然后我们的工程团队开始考虑一些可行的选项。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these were the requirements from a product side and then our engineering teams kind of we started to consider some of the options on the table.</p>
</details>

显然，**Neo4j**（Neo4j: 一款流行的原生图数据库）是市场领导者，还有各种其他开源工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh neo forj obviously uh market leader uh and the various other open source tools.</p>
</details>

最终，工程团队决定对此进行一些分析。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At the end of the day the engineering teams decided to kind of do uh some analysis around this.</p>
</details>

我右侧展示的表格并不是他们考虑的详尽列表，但这些是他们研究的重点，以确定哪种解决方案能够满足产品提出的要求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I can I'm showing a table on the right hand side. It's not an exhaustive list of things that they considered but these were the things that they looked at that they wanted to see okay what is the right solution to address the requirements coming from product.</p>
</details>

我们主要围绕前两个选项：Neo4j和**ArangoDB**（ArangoDB: 一款多模型数据库，支持文档、图和键值对数据模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And um uh we they kind of we kind of all centered around the first two here no 4G and Arango DB.</p>
</details>

但出于历史原因，团队决定选择ArangoDB，因为我们有一些安全领域的用例，属于推荐系统类型的用例，我们希望继续使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But for historical reasons the team decided to go with because we had some use cases that were in the security space uh that was kind of a recommendation system uh type of use cases that we wanted to kind of continue using.</p>
</details>

不过，我们仍在探索将Neo4j用于该项目即将出现的一些用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so um But we are still exploring the use of Neo forj for some of the use cases that are coming up as part of this project.</p>
</details>

所以，我们最终选择了ArangoDB，并最终提出了一个这样的解决方案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um we settled on on a DV for this and uh we eventually came up with a solution that looks like this.</p>
</details>

### 知识图谱解决方案架构

我们有这个知识图谱解决方案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have this knowledge graph solution.</p>
</details>

这是它的概览。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is an overview of it.</p>
</details>

左侧是所有的生产环境，我们有控制器、Splunk（一个SIEM系统）、以及传入的流量遥测数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um on the left hand side we have all of the production environment. We have the controllers the the Splunk which is a sim system traffic telemetry coming in.</p>
</details>

所有这些数据都进入这个摄取服务，该服务正在进行**ETL**（Extract, Transform, Load: 抽取、转换、加载，一种数据集成过程），将所有这些信息转换为一个统一的模式：**OpenConfig**（OpenConfig: 一组用于网络设备配置和遥测的开放、可编程数据模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All of them are coming into this ingestion service uh which is doing an ETL transforming all of this information into one schema open config.</p>
</details>

OpenConfig模式主要是围绕网络设计的，它帮助我们，因为它在互联网上有大量的文档。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So open config schema is a schema that is designed around networking primarily and uh it helps us to because it there's a lot of documentation about it on the internet.</p>
</details>

所以**LLM**（Large Language Model: 大型语言模型）非常理解这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So LM understand this very well.</p>
</details>

因此，这个设置主要是一个以OpenConfig模式作为主要通信方式的网络信息数据库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um this setup is primarily a a database of uh of uh networking information that has open config schema as a primary way for us to communicate with it.</p>
</details>

通过自然语言与单个工程师或实际与该系统交互的智能体进行通信。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh natural language communication through an individual engineer or the agents that are actually interacting with that system.</p>
</details>

我们以分层的形式构建了它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we built this in the form of layers.</p>
</details>

如果你再次涉足网络领域，网络中有一组你希望能够与之交互的实体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh if you if you're if you're into networking again um there is a set of entities in the network that you want to be able to interact with.</p>
</details>

我们以这种方式对其进行了分层，以便如果需要进行工具调用或需要对测试做出决策，例如，假设你想进行关于**配置漂移**（Configuration Drift: 实际网络配置与预期配置之间的差异）的测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so we have layered this up in this way such that if uh there's a tool call or there's a decision to be made about a test for example let's say you want to do a test about uh configuration drift as an example.</p>
</details>

你不需要遍历图的所有层，只需直接进入原始配置文件并进行比较。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um you don't need to go to all of the layers of the graph you just go straight down to the raw configuration file and be able to do your comp comparisons there.</p>
</details>

如果你尝试进行关于**可达性**（Reachability: 网络中一个节点是否能够到达另一个节点）的测试，那么你需要几层，可能需要原始配置层、数据控制数据平面层和控制平面层。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you're trying to do like a test around reachability for example then you need a couple of layers maybe you need raw configuration layers data control data plane layers and control plane layers.</p>
</details>

因此，它的结构方式是，当智能体向该系统发出调用时，它们会理解系统发出的请求，并能够实际进入正确的层以获取执行所需的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um it's structured in a way that when the agents are making their calls to this system uh they understand what the request is from the from the uh system and they're able to actually go to the right layer to pick up the information that they need to ex to execute on it.</p>
</details>

这是图系统分层的高级视图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is kind of a high level view of what the graph system looks like in layers.</p>
</details>

### 多智能体层与开放标准

现在，我将切换话题，回到系统本身。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now um I'm going to kind of switch gear switch gears now and go back to the system.</p>
</details>

还记得我描述的那个包含智能体、知识图谱、数字孪生以及自然语言接口的系统吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Remember I described a system that had agents a knowledge graph and digital twin as well as natural language interface.</p>
</details>

现在我们来谈谈智能体层。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's talk about the agentic layer.</p>
</details>

在我谈论这个系统中特定智能体之前，我们正在研究如何构建一个基于所有互联网开放标准的系统，这是思科面临的一个挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And before I kind of talk about the specific agents in um in this system on this application we are looking at how we are going to build a system that is based on open standards for all of the internet and this is one of the challenge we have within Cisco.</p>
</details>

我们正在寻找一个开源协作平台，包括我们在这里看到的所有合作伙伴。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We we are looking at a system a a set of a collective open source collective that includes all of the partners we see down here.</p>
</details>

我们有思科的Outshift、**LangChain**（LangChain: 一个用于开发基于大型语言模型的应用程序的框架）、Galileo，所有这些成员都是这个协作平台的支持者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have uh outship by Cisco we have lang chain Galileo we have all of these uh members who are supporters of this uh of this collective.</p>
</details>

我们正在尝试做的是建立一个系统，允许来自世界各地的智能体进行通信，而无需每次想要将它们与其他智能体集成时都进行大量的重建工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what we are trying to do is to set up a system that allows agents from across the world. Uh so it's a big vision uh that they can talk to each other without having to do heavy lifting of reconstructing your agents every time you want to integrate them with another agent.</p>
</details>

它包括身份、用于定义智能体技能和能力的数据模式框架、存储这些智能体的目录，以及如何在语义层和合成层组合智能体，以及如何观察正在运行的智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it consists of identity uh schema framework for defining an agent skills and capabilities the directory where you actually store this agent and then how you actually compose the agents both at the semantic layer and the synthetic layer and then how do you observe the agents in process all of these are part of this collective uh vision as as as a group.</p>
</details>

所有这些都是这个协作愿景的一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All of these are part of this collective uh vision as as as a group.</p>
</details>

如果你想了解更多，可以访问**agency.org**（agency.org: 一个致力于推动开放代理标准和协作的开源社区）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you want to learn more about this is on agency.org RG.</p>
</details>

我这里也有一张幻灯片，它谈到了实际可用的代码，你可以今天就利用它，或者如果你想为代码做贡献，你可以去GitHub仓库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I also have a slide here that kind of talks about um there's real code actually that you can leverage today or if you want to contribute to the code uh you can actually go there there's a GitHub repo here that you can go to and and you can start to contribute or use use the use the data.</p>
</details>

那里有文档和示例应用程序，可以让你实际了解它是如何在现实生活中工作的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um there's documentation available as well and there's sample applications that allows you to actually see how this works in real life.</p>
</details>

我们知道有**MCP**（Multi-Agent Communication Protocol: 多智能体通信协议）和**A2A**（Agent-to-Agent: 智能体到智能体通信），所有这些协议都变得非常流行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh u we know that there's MCP there's A2A all of these protocols are becoming uh very popular.</p>
</details>

我们也集成了所有这些协议，因为目标不是创建定制化的东西，而是希望它对所有人开放，以便能够创建智能体，并使这些智能体在生产环境中工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we also integrate all of these protocols Because the goal again is not to uh create something that is bespoke. We want to make it open to everyone to be able to create agents and be able to make these agents work in production environments.</p>
</details>

回到我们正在讨论的特定应用程序，基于这个框架，我们交付了这套智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So back to the specific application we're talking about based on this framework, we delivered this set of agents.</p>
</details>

我们作为一个团队构建了一套智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we built a set of agents as a group.</p>
</details>

目前，作为这个应用程序的一部分，我们有五个智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have five agents right now as part of this application.</p>
</details>

有一个助理智能体，它充当规划者，协调所有这些智能体的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um there's an assistant agent that's kind of the planner that kind of orchestrates things across the glo across all of these agent agents.</p>
</details>

然后我们有其他智能体，它们都基于**React推理循环**（React Reasoning Loops: 一种AI智能体架构，通过感知、行动和推理的循环来执行任务）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we have other agents that are all based on React reasoning loops.</p>
</details>

我在这里想特别提一下一个智能体：**查询智能体**（Query Agent: 专门负责与知识图谱交互并执行查询的智能体）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's one particular agent I want to call out here, the query agent.</p>
</details>

这个查询智能体是实际定期直接与知识图谱交互的智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This query agent is the one that actually interacts directly with the knowledge graph on a regular basis.</p>
</details>

我们必须对这个智能体进行微调，因为我们最初尝试使用RAG来查询知识图谱，但效果不佳。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um we have to fine-tune this agent because um we initially started by doing a uh attempting to use rack to do some querying of the knowledge graph, but that was not working out well.</p>
</details>

所以我们决定为了即时结果，对其进行微调。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we decided that for immediate results, we're going to fine-tune it.</p>
</details>

我们对这个智能体进行了微调，加入了模式信息和示例查询。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we did some finetuning of of the of of this agent with some schema information as well as example queries.</p>
</details>

这帮助我们减少了两件事：我们消耗的**令牌**（Tokens: 大型语言模型处理文本的基本单位）数量，因为在此之前，**AQL**（ArangoDB Query Language: ArangoDB的查询语言）查询会遍历知识图谱的所有层，并在推理循环中消耗大量令牌并花费大量时间才能返回结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so that helped us to actually reduce two things. The number of tokens we were burning because every time we were before that the AQL queries were going through all of the layers of the knowledge graph and in a in a reasoning loop was consuming lots of tokens and taking a lot of time for it to result to return results.</p>
</details>

微调后，我们看到消耗的令牌数量以及返回结果所需的时间都大幅减少。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">After fine-tuning, we saw a drastic reduction in number of tokens consumed as well as the amount of time it took to actually come back with the results.</p>
</details>

这确实帮助了我们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that kind of helped us there.</p>
</details>

### 实际演示：防火墙规则变更管理

我在这里暂停一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so um I'm going to kind of pause here.</p>
</details>

我讲了很多，有很多幻灯片内容，我想快速展示一个实际演示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm talking a lot about there's a lot of slide wear here. I want to show a quick demo of what this actually looks like.</p>
</details>

它将自然语言接口与**ITSM**系统交互，智能体如何交互，以及如何从知识图谱收集信息并向客户交付结果，将所有这些联系起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So tying together everything from the natural language interface interaction with an ITSM system to how the agents interact to how that collects information from knowledge graph and delivers results to the customer.</p>
</details>

好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

我们这里的场景是，一位网络工程师想要更改**防火墙规则**（Firewall Rule: 定义网络流量允许或拒绝通过防火墙的策略），以适应网络中的新服务器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um the scenario we have here is a a network engineer wants to make a change to a firewall rule. they have to do that to accommodate a new server into the network.</p>
</details>

毫无疑问。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No doubt.</p>
</details>

所以他们需要做的第一件事是从ITSM开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what they need to do is to first of all start from ITSM.</p>
</details>

他们会在ServiceNow中提交一个工单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the submit a ticket in uh in their in service now.</p>
</details>

现在，我们这里的系统，我向大家展示的用户界面，是我们构建的实际应用程序的用户界面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now our system here the the v the UI I'm showing you right here is the UI of the actual system we've built the application we built.</p>
</details>

我们已经以自然语言摄取了关于工单的信息，所以这里的智能体能够开始处理这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have ingested information about the uh tickets here in natural language and so the agents here are able to actually start to work on this.</p>
</details>

我将在这里播放一个视频，以便更直观。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm going to play a video here just to make it uh uh more relatable.</p>
</details>

这里发生的第一件事是，这些智能体，第一个智能体要求将信息进行综合和总结，以便他们能够快速理解要做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the first thing that's happening here is that these agents uh the first agent is asking that the inter for the for the information to be synthesized in a summarized way so that they can understand uh what to quickly do.</p>
</details>

这里要求的下一个行动是创建影响评估。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The next action that has been asked here is for you to create an impact assessment.</p>
</details>

这里的影响评估意味着我想了解：这个变更是否会对我的直接目标区域之外产生任何影响？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So impact assessment here just means that I want to understand. So will this change have any implications for me beyond the immediate uh target area.</p>
</details>

这将进行总结，然后我们将要求负责此特定任务的智能体去将此信息附加到ITSM工单中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's going to be summarized and we are now going to ask the agent that is responsible for this particular task to go and attach this information into the ITSM ticket.</p>
</details>

所以我会说：“将关于影响评估的信息附加到ITSM工单中。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm going to say uh attach this information about the impact assessment into the ITSM ticket.</p>
</details>

这已经完成了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's been done.</p>
</details>

现在下一步是实际创建一个测试计划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the next step is to actually create a test plan.</p>
</details>

测试计划是我们客户面临的最大问题之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So test plan is one of the biggest problems that our customers are facing.</p>
</details>

他们运行了大量的测试，但却错过了应该运行的正确测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um they they run a lot of test but they miss out on the right test to run.</p>
</details>

所以这些智能体能够通过互联网上关于测试计划的大量信息进行推理，并根据从ServiceNow工单中收集到的意图，提出一份你需要运行的测试列表，以确保这个防火墙规则变更不会在生产环境中产生重大影响或造成问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this agents are actually able to reason through a lot of information about test plans across the internet and based on the intent that was collected from the service now ticket is going to come up with a list of tests that you have to run to be able to make sure that this firewall rule change doesn't make a big impact or create problems in production environment.</p>
</details>

正如你在这里看到的，这个智能体已经列出了所有需要运行的测试用例以及每个测试的预期结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So as you can see here, this agent has gone ahead and actually listed all of the test cases that needs to be run and the expected results for each of the tests.</p>
</details>

我们将要求这个智能体再次将这些信息附加回ITSM工单，因为在批准此变更在生产环境中实施之前，审批委员会需要查看这些信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're going to ask this agent to attach this information again back to the ITSM ticket because that's where the approval board needs to see this information before they implement before the approved implementation of this change in production environment.</p>
</details>

所以我们可以在这里看到，这些信息现在已经被这个智能体附加回ITSM工单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can see here that that information has now been attached back by this agent to the ITSM tickets.</p>
</details>

这是两个独立的系统，但智能体之间可以相互通信。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So two separate systems but agents talking to each other.</p>
</details>

现在下一步是实际运行其中一个测试用例的测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the next step is actually run a test on one of these test cases.</p>
</details>

在这种情况下，用于更改防火墙的配置文件位于GitHub仓库中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um in this case the configuration file that is going to be used to make the change in the firewall is sitting in the GitHub repo.</p>
</details>

所以我们将对该配置文件进行**拉取请求**（Pull Request: 在版本控制系统中，请求将代码从一个分支合并到另一个分支），并获取该信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we're going to do a pull request of that config file and going to take that information.</p>
</details>

这就是我们将进行拉取请求的GitHub仓库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is the GitHub repo where the where we're going to do a pull request.</p>
</details>

我们将获取该拉取请求的链接并将其粘贴到工单中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're going to take the link for that pull request and paste it in the ticket.</p>
</details>

这样，当执行智能体开始工作时，它将从那里拉取信息并用它来运行测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so that when the executor execution agent starts doing its job is actually going to pull from that and use it to run this test.</p>
</details>

所以，此时我们将开始运行测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um at this moment we we have we're going to start running the test.</p>
</details>

我们将要求这个智能体去实际运行测试并执行这个测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're going to ask this agent to go ahead and actually run the test and execute on this test.</p>
</details>

我已将变更候选者附加到工单中，你能去运行测试吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so um I have attached the change sorry I don't have my glasses. I've attached my uh change candidates to the ticket. Can you go ahead and run the test?</p>
</details>

这里会发生什么呢？如果你看屏幕的右侧，一系列事情正在发生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what is going to happen here is if you look on the right hand side of this screen here, a series of things are happening.</p>
</details>

首先，这个名为**执行智能体**（Executor Agent: 负责执行特定任务或测试的智能体）的智能体查看测试用例，然后进入知识图谱，并实际获取网络最新视图或最新信息的**快照**（Snapshot: 系统在特定时间点的状态记录）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first thing is that the this agent called the executor agent goes looks at the test cases and then it goes into the knowledge graph and it's going to go ahead and actually do a snapshot of the most recent visual or most recent information about the network.</p>
</details>

它现在将从GitHub拉取的拉取请求，以及刚从知识图谱获取的快照进行计算，然后逐一运行所有单独的测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">is now going to take the pull request that it pulled from GitHub, the snapshot it just took from the knowledge graph. It's going to compute it together and then run all of the individual test one at a time.</p>
</details>

所以我们可以看到它正在运行测试：测试一、测试二、测试三、测试四。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can see that it's running the test one test, test test one, test two, test three, test four.</p>
</details>

所有这些都发生在我们所说的数字孪生中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So all of this is happening in what we call a digital twin.</p>
</details>

数字孪生再次是知识图谱与一套可用于运行测试的工具的组合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a digital twin again is a cons combination of the knowledge graph, a set of tools that you can use to run the test.</p>
</details>

这里的一个工具示例可以是**Batfish**（Batfish: 一款网络配置分析工具）或**RoutNet**（RoutNet: 一款网络路由分析工具），或其他用于网络工程目的的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So an an example of a tool here could be batfish or could be routnet or some other tools that you use for engineering purp for network engineering purposes.</p>
</details>

一旦所有这些测试完成，这个智能体将生成一份关于测试结果的报告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So once all of these tests are completed uh this tool actually is going to this agent is going to now generate a report about the test results.</p>
</details>

所以，我们给它一些时间来运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um we give it some time to run through this.</p>
</details>

它仍在运行测试，但一旦完成所有测试，它将实际报告测试结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's still running the tests but when once it concludes all of the tests it's going to report actually uh the test results are.</p>
</details>

哪些测试通过了，哪些失败了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So which results which tests actually passed which ones failed.</p>
</details>

对于失败的测试，它会提出一些建议，告诉你如何去解决问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">for the ones that have failed, he's going to make some recommendations on what you can do to go and fix the problem.</p>
</details>

由于时间关系，我将跳到前面，快速完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um um I'm going to skip to the front here to just quickly get this on uh done quickly because of time.</p>
</details>

它已将结果附加到工单中，这就是它输出的报告，即运行的测试报告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so um it's attached the results to the ticket and this is the report that it's spitting out in terms of this is the report for the test that were run.</p>
</details>

所以这个执行智能体实际创建了一份关于系统运行的所有不同测试用例的报告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this execution agent actually created a report about all of the different test cases that were run by the system.</p>
</details>

这是一个非常快速简短的演示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um very quick short demo here.</p>
</details>

幕后有很多细节，但我可以线下回答一些问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh there's a lot of detail behind the scenes but I can answer some questions offline.</p>
</details>

### 总结与展望

在结束之前，我想强调几点：评估在这里非常关键，以便我们能够理解它如何为客户带来价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um the the the couple of things I want to leave us with is that uh before I go to the end of this uh is that evaluation is very critical here for us to be to able to understand how this delivers value to customers.</p>
</details>

我们在这里关注各种事物。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um we're looking at a variety of things here.</p>
</details>

包括智能体本身、知识图谱、数字孪生，我们正在研究我们可以量化衡量什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the agents themselves the knowledge graph digital twin and we're looking at the what can we actually measure quantifiably.</p>
</details>

对于知识图谱，我们关注的是外在指标，而不是内在指标，因为我们希望将其映射回客户的用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now for the knowledge graph, we're looking at extrinsic metrics particularly not intrinsic ones because we want to map this back to the customer's use case.</p>
</details>

这是我们所看到的评估指标的总结。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is the summary of the of what we see in terms of evaluation metrics.</p>
</details>

我们仍在学习，目前这只是一个MVP，但到目前为止我们学到的是，知识图谱和构建智能体的开放框架这两个关键构建块对于我们为客户构建可伸缩系统至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um we are still learning this is a this is for for now it's it's an MVP u but what we are learning so far is that those two key building blocks the knowledge graph and the open framework for building agents is very critical for us to actually build a scalable system for our customers.</p>
</details>

所以，我将在这里结束。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, um, I'm going to stop.</p>
</details>

还有8秒钟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's 8 seconds to go.</p>
</details>

感谢大家的聆听。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you for listening to me.</p>
</details>

如果有问题，我会在外面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then if you have questions, I'll be out there.</p>
</details>