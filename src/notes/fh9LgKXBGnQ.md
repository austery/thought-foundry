---
area: tech-insights
category: business
companies_orgs:
- Vectara
- Google
- Anthropic
date: '2025-11-24'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Ofer Mendelevitch
products_models:
- Gemini
- ChatGPT
- Perplexity
- Jira
- Notion
- Google Drive
- SharePoint
- HHM
project:
- ai-impact-analysis
- entrepreneurship
series: ''
source: https://www.youtube.com/watch?v=fh9LgKXBGnQ
speaker: AI Engineer
status: evergreen
summary: 本文介绍了Vectara的可信赖代理操作系统及其在多模态数据摄取、检索准确性和幻觉缓解方面的核心功能。文章详细阐述了“企业深度研究”的概念，即AI代理对企业私有数据进行深入、多步骤的调查，以生成全面的报告。此外，文中还探讨了该技术在响应RFP、员工入职培训和生成投资备忘录等场景中的实际应用，突出了其在提升企业效率和信息准确性方面的巨大潜力。
tags:
- enterprise-ai
- llm
- research
- system
title: 企业深度研究：AI在企业应用中的下一个杀手级应用
---

### Vectara的可信赖代理操作系统

大家好，我是Vectara的Ofer。在Vectara，我们开发了一个**可信赖代理操作系统**（Trustworthy Agent Operating System: 旨在提供可靠、安全的AI代理服务平台）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi, I'm Offer from Victara. At Victara, we developed a trustworthy agent operating system.</p>
</details>

这个系统有很多非常酷的用例，比如文档生成、对话式AI或聊天机器人（无论是内部还是外部使用），以及我今天将要讨论的**企业深度研究**。但在深入探讨企业深度研究之前，请允许我先详细介绍一下我们的代理操作系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there's a lot of really cool use cases with this like document generation, conversational AI or chat bots, either internal or external, and enterprise deep research, which I'm going to talk about today. But before I jump into Enterprise Deep Research, let me tell you a little bit more about our operating system for agents.</p>
</details>

首先，它是一个**SaaS**（Software as a Service: 软件即服务）平台，但也可以在您自己的**VPC**（Virtual Private Cloud: 虚拟私有云）或本地数据中心运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First of all, it's a SAS platform, but also runs on your own VPC or on premise in your own data center.</p>
</details>

以下是我们引以为傲的一些主要功能：我们拥有非常先进的**多模态摄取**（Multimodal Ingest: 支持处理图像、表格等多种数据类型）能力，能够以一种可查找和可检索的方式支持图像和表格，使其在**RAG**（Retrieval Augmented Generation: 检索增强生成）或代理式RAG工作流中能够被理解和利用。我们非常注重检索准确性，通过**混合检索**（Hybrid Retrieval: 结合多种检索方法以提高准确性）、大量元数据功能、重新排序等技术来确保这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And here's some of the main features that we really are proud of. We have very advanced multimodal injust to support images, tables in a way that makes them, you know, findable and retrieved to be able to make sense of them in a in a rag or a gentic rag workflow. Very strong focus on again retrieval accuracy with hybrid retrieval, lots of features around metadata, reranking, etc.</p>
</details>

此外，我们因在**幻觉缓解**（Hallucination Mitigation: 减少AI生成不准确或虚构信息）方面的大量工作而闻名，包括幻觉检测和纠正。事实上，我们的**幻觉检测模型**（HHM: Hallucination Detection Model）在几个月前刚刚突破了500万次下载量，现在大约是550万次。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we're we're kind of known for a lot of work around hallucination mitigation, both hallucination detection and correction. In fact, our hallucination detection model, also called HHM, has just passed 5 mill downloads about couple months ago. I think it's at 5.5 right now or something like that.</p>
</details>

总的来说，我们的操作系统平台是您进行**企业级部署**（Enterprise-grade deployment: 满足企业高标准的安全、扩展性和管理要求）所需的一切，包括安全性、**基于角色的访问控制**（Role-Based Access Controls: 根据用户角色分配权限）、自带模型、自定义提示词、**可观测性**（Observability: 能够监控和理解系统内部状态）、监控等所有您需要的功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And generally our our operating system platform is what you would need for enterprisegrade deployment. So security, role- based access controls, bring your own model, custom prompts, observability, monitoring, everything you would need.</p>
</details>

### 幻觉问题与事实准确性

那么，为什么这些很重要呢？在任何**生成式AI应用**（Generative AI Application: 利用AI模型生成文本、图像等内容的应用）中，企业深度研究也不例外，**幻觉**（Hallucination: AI生成不准确或虚构信息）仍然是一个问题，您希望您的应用基于真正可靠的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So why does this matter? Well, in any generative AI application, an enterprise deep research is no different. Hallucinations are still a problem and you want to base your applications on really robust information.</p>
</details>

事实上，有统计数据显示，大约73%的**LLM**（Large Language Model: 大型语言模型）客户在实施用例时表示，**事实准确性**（Factual Accuracy: 信息与现实相符的程度）是他们目前面临的最大挑战。这就是为什么我们在幻觉缓解上投入了如此多的时间，这使得高质量的企业深度研究成为可能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, this is a statistics that shows that about 73% of LM customers implementing use cases say that factual accuracy is their top challenge right now. So that's why we spend so much time in hallucination mitigation which enables enterprise deep research at really high quality.</p>
</details>

### 什么是深度研究？

好的，考虑到这一点，让我来谈谈什么是深度研究。深度研究本身是许多人可能已经了解的概念：当AI代理进行深入的**多步骤调查**（Multi-step Investigation: 包含多个环节和决策过程的探究），通常通过自主浏览或搜索网络，获取结果，然后综合所有这些结果，为您生成一份带有引用和所有所需信息的综合报告，以回答特定问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so with that in mind, let me jump into what is deep research. Deep research itself is something many of you probably know already. It's when an AI agent conducts indepth multi-step investigation, usually by autonomously browsing or searching the web in some way, getting results, synthesizing all these results together to generate a comprehensive report for you with citations and all the information you need to answer a particular question.</p>
</details>

许多公司已经实现了这种基于网络的深度研究，例如Google的Gemini、ChatGPT、Anthropic的Perplexity等。这里有一个例子，如果您还没有使用过，我强烈建议您尝试一下，它是一个非常强大的工具。我一直都在使用它。这是在Gemini中选择该功能的截图，以及在ChatGPT中选择该功能的方式。这通常需要大约20到30分钟才能完成，因为它在后台做了大量工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Many have implemented this sort of web- based deep research. Gemini or Google has that chat GPT anthropic perplexity etc. Here's an example what it looks like. If you haven't used it, I highly encourage you to use it. It's a very powerful tool. And I use this all the time. This is the screenshot of how you choose it in Gemini, for example. And here's how you choose it in Chat GPT. And this is usually something that takes about, you know, 20 30 minutes to complete because it does a lot of work underneath the covers.</p>
</details>

### 企业深度研究：针对私有数据

现在，**企业深度研究**（Enterprise Deep Research: 针对企业内部私有数据进行的深度调查）可以理解为完全相同的概念，只不过现在它处理的是您的私有数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, enterprise deep research, think about it as exactly the same idea only now it goes to your private data.</p>
</details>

因此，它仍然是相同的过程：带有反思机制的**多代理**（Multi-agent: 多个AI代理协同工作）系统，对最终结果进行综合，代理在后台并行执行。当然，它会查询您的企业数据，在这种情况下，它利用Vectara的代理式RAG能力，并具备高准确性和幻觉缓解的所有优势。然后，我们还有**语料库理解**（Corpus Understanding: 对整个数据集进行深入理解），这使您能够根据数据进行适当的规划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again the same process multi- aent with reflection with synthesis of the final results parallel execution of of agents underneath and it queries your enterprise data of course using in this case victarogentic rank capabilities with all the bells and whistles of high accuracy and hallucination mitigation and then we have corpus understanding which allows you to plan properly based on your data.</p>
</details>

### 丰富的应用场景

这项技术有许多非常棒的用例，我在这里只提几个我喜欢的。其中之一是响应**RFP**（Request for Proposal: 提案请求书）。在我的职业生涯中，我多次遇到需要响应RFP的情况，而要回答150个问题真的非常困难。因此，能够利用企业深度研究来遍历所有企业数据集，找出正确的文档并回答这些问题，这是一个非常酷的用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are many really amazing use cases for this and I'm going to just mention a few here that I like. One is responding to an RFP. I've had this in my career multiple times when you have to respond to an RFP and getting the answers to 150 questions is really difficult. So having being able to use enterprise deep research to go through all of your enterprise data sets, picking up the right documents and answering those questions is a really cool use case.</p>
</details>

**员工入职培训**（Employee Onboarding: 新员工融入公司和团队的过程）也是一个很好的例子。如果您加入一个新团队或新公司，公司希望您能快速入职，这通常非常困难。没有人知道发生了什么，没有入职指南，或者上次的指南是三年前生成的，已经过时了。因此，能够利用Jira、Notion、Google Drive或SharePoint上的所有文档，按需生成入职指南，这是非常强大的功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Employee on boarding is this idea of if you come to a new team or you join a new company and a company wants to onboard you quickly, it's usually very difficult. Nobody knows what's going on. There's no like onboarding guide. The last one was generated three years ago and it's not up to date etc. So again being able to generate a ondemand onboarding guide using all the documentation we have on Jira or on notion or Google Drive or SharePoint. very very powerful.</p>
</details>

此外，在不同的行业中也有不同的用例。例如，在**金融服务**（Financial Services: 提供金融产品和服务的行业）领域，生成**投资备忘录**（Investment Memo: 概述投资机会和分析的内部文件）可能是一个非常酷的用例。您可以想象，在医疗保健、保险以及其他行业中也有类似的应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then in different industries there's also different use cases. For example, in financial services you might have the generation of an investment memo as a really cool use case. And you can imagine the same thing in healthcare, in insurance and other industries as well.</p>
</details>

这些只是其中一部分用例。我还有很多可以分享的。您可以通过我下方展示的链接与我联系。如果您有兴趣了解更多关于Vectara和企业深度研究的信息，请联系我们，我们很乐意为您进行演示。非常感谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So those are some of the use cases. There's a lot more I'm offering. You can connect with me here in the links I'm showing below. And if you are interested to learn more about Victara and enterprise deep research, please contact us and we'll happy to to do a demo for you. Thanks very much.</p>
</details>