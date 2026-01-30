---
author: Norges Bank Investment Management
date: '2026-01-30'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=l9zbG9SxcLo
speaker: Norges Bank Investment Management
tags:
  - ai-networking
  - data-center-infrastructure
  - cloud-computing
  - technology-trends
  - organizational-culture
  - leadership-philosophy
title: Arista Networks CEO Jayshree Ullal：AI时代下的网络基础设施与未来趋势
summary: 本次访谈中，Arista Networks CEO **Jayshree Ullal**深入探讨了AI时代下网络基础设施的关键作用。她将网络比作连接AI芯片的“信息高速公路”，并详细阐述了AI网络与传统网络的区别，强调了对更高速度、更低延迟和更高性能的需求。Ullal还讨论了AI基础设施建设面临的最大挑战——电力供应，并将其与互联网泡沫时期进行对比，指出当前AI发展由负责任的大公司推动，更像是一场持续的“大趋势”而非短期泡沫。她分享了**Arista Networks**在市场中脱颖而出的秘诀，以及她在**思科**的职业生涯中学到的客户至上文化，并对年轻一代提出了追求卓越的建议。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - Arista Networks
  - Cisco
  - Microsoft
  - Google
  - Meta
  - OpenAI
  - Anthropic
  - Norwegian Sovereign Wealth Fund
products_models:
  - ChatGPT
  - EOS
  - Catalyst Switch
media_books: []
status: evergreen
---
### 访谈开场与Arista Networks简介

**Nikolai Tangen**: 大家好，我是**挪威主权财富基金**的CEO **Nikolai Tangen**。今天我邀请到了一位对AI领域至关重要的人物——**Arista Networks**的CEO **Jayshree Ullal**。**Jayshree**在网络领域拥有超过40年的经验，因此没有人比她更适合谈论这个话题。**Jayshree**，很高兴见到你。

<details>
<summary>Original English</summary>

**Nikolai Tangen**: Hi everyone, I'm **Nikolai Tangen**, CEO of the **Norwegian Sovereign Wealth Fund**, and today I'm here with someone who is very important for AI, namely **Jayshree Ullal**, CEO of **Arista Networks**. **Jayshree** has over 40 years of experience in networking, so no one can talk about this better than her. **Jayshree**, it's great to see you.

</details>

**Jayshree Ullal**: 很高兴来到这里，**Nikolai**。我有点感冒，所以如果我说话带鼻音，请原谅。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: It's great to be here, **Nikolai**. I have a bit of a cold, so please excuse me if I sound nasal.

</details>

**Nikolai Tangen**: 没关系，我们从头开始吧。反正这个播客我也不需要唱歌，所以一切都会好起来的，对吧？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: No problem, let's start from the beginning. I don't have to sing on this podcast anyway, so everything will be fine, right?

</details>

**Jayshree Ullal**: 是的，不用唱歌。那么，我们从头开始吧。请介绍一下**Arista**是做什么的？

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Yes, no singing. So, let's start from the beginning. What does **Arista** do?

</details>

**Jayshree Ullal**: 嗯，这是一个很难回答的问题。**Arista**正在构建世界上最苛刻的任务关键型网络，这些网络具有高性能、大规模、低延迟、高可靠性、高可用性、高自动化和高遥测能力，以满足现代数据中心和AI的需求。这意味着在不同层面上都有非常高的需求。尤其是在过去十年中，**Arista**已成为该领域的先驱和领导者。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Yes, that's a difficult question. So, **Arista** is building the world's most demanding mission-critical networks, which are high-performance, high-scale, low-latency, high-reliability, high-availability, high-automation, high-telemetry, meeting the needs of modern data centers and AI. So, there are very high demands at different levels. And especially in the last decade, **Arista** has emerged as both a pioneer and a leader in this field.

</details>

**Nikolai Tangen**: 我听说，如果把芯片看作引擎，那么网络就是连接它们的高速公路，对吗？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: I've heard that if you think of chips as engines, then networking is the highway between them, right?

</details>

**Jayshree Ullal**: 是的，这样理解是正确的。我相信芯片驱动着很多东西，尤其是在AI世界中，那里进行着处理，无论是GPU、APU、XPU，或者你称它们为什么。但当你进行处理时，你必须担心是否充分利用了它们。所以，如果一辆车的速度是每小时100英里，但它只能以每小时30英里的速度行驶，因为基础设施无法支持它跑得更快，那么你对汽车，或者在这种情况下，对GPU的利用率就非常低。所以，是的，我们是所有加速器用户、任务关键型工作负载的信息高速公路，随便你怎么称呼。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Yes, that's the right way to look at it. I believe chips drive a lot, especially in the world of AI, where processing happens – GPUs, APUs, XPUs, or whatever you want to call them. But when you process it, you have to worry about whether you're fully utilizing it. And so, if a car has a speed of 100 miles per hour, but it can only go 30 miles per hour because the infrastructure can't help it go further, then you're underutilizing the car, or in this case, the GPU. So, yes, we are the information highway for all accelerator users, mission-critical workloads, whatever name you give it.

</details>

### Arista Networks如何赋能AI应用

**Nikolai Tangen**: 假设我现在坐在办公室里，我在**ChatGPT**上输入一个提示。我如何使用你们的产品？这项服务是如何运作的？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: So, let's say I'm sitting in my office now. I type a prompt into **ChatGPT**. How do I use your products? How does this service work?

</details>

**Jayshree Ullal**: 是的，我们大部分时间都在幕后工作。就像我父母总是问：“你到底做什么的？”因为他们看不到我们实际在做什么。当你输入一个**Arista**的提示时，我们基本上是将所有东西连接起来。即使我们现在正在进行的这个播客对话，没有它也不可能实现。所以，无论是来自用户、设备、工作负载、机器、服务器、存储，还是现在越来越多地来自AI杀手级应用程序的高强度流量模式，我们都会进行连接。这通过一套交换和路由平台实现，我们称之为**Leaf-Spine架构**。其中多个叶子节点连接到一个聚合的脊柱，现在也可以是AI脊柱。这些是世界上一些最大的高规模平台。但要做到这一切，它们需要电力。平台和芯片需要正确的软件来驱动。而这正是**Arista**的专长所在——其**可扩展操作系统（EOS）**。我们用各种类型的数据来驱动这些平台和网络连接，包括结构化数据、非结构化数据、流数据，所有这些都通过我们专门构建的软件来处理。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Yes, so we mostly work behind the scenes. Like my parents always used to say, "What do you do?" because they can't see what we actually do. And when you type a prompt for **Arista**, at that point, we're basically connecting everything to everything. This conversation happening on this podcast is also not possible without it. So, high-intensity traffic patterns, whether it comes from a user, device, workload, machine, server, storage, or now, increasingly, from AI killer applications. We connect, and this happens through a set of switch and routing platforms. We call them **Leaf-Spine architectures**, where multiple leaves connect to an aggregate spine, and nowadays, it can also be an AI spine. These are some of the world's largest high-scale platforms. But to do all this, they need power. The platforms and chips need to be powered with the right software. And this is where **Arista's** specialty has been its **Extensible Operating System (EOS)**, where we power these platforms and networking connectivity with more and more types of data. We can utilize structured data, unstructured data, flow data, and all of these with our specially built software.

</details>

### AI网络与传统网络的区别

**Jayshree Ullal**: 那么，AI网络与以前的系统有何不同？如果我们回顾大约20年前的网络，互联网始于研究社区。当时，像**TCP/IP**这样的协议和算法都来自研究项目，特别是**ARPANET**。今天的现代互联网就是建立在这个基础上的，研究转化为了实用的网络系统。当时有许多协议，如XNS、AppleTalk、OSI和IP。但在2000年代，**TCP/IP**成为了全球互联网通信的通用语言。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: And how is AI networking different from the systems that came before? If we go back a bit and look at networking about 20 years ago, the internet started with the research community. At that time, protocols and algorithms like **TCP/IP** came from research projects, especially **ARPANET**. Today's modern internet is built on this foundation, where research took the form of practical networking systems. At that time, there were many protocols like XNS, AppleTalk, OSI, and IP. But in the 2000s, **TCP/IP** became the common language for internet communication worldwide.

</details>

**Jayshree Ullal**: 到了2015年至2020年，仅仅**TCP/IP**已经不够了，因为网络需求变得更加复杂。在这个时期，人们开始构建世界上最大的云平台，如**AWS**、**Azure**、**GCP**（**Google Cloud Platform**）以及其他许多平台。它们需要前所未有的大规模扩展，以覆盖更多的公司和用户。因此，系统必须是多租户的，因为它们不仅支持一家公司，而是数千家公司。所以，一家中型公司的普通CIO已经停止自己构建东西，转而依赖云来运行他们的任务关键型资产，无论是电子商务应用程序、数据库还是其他什么。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: By 2015 to 2020, **TCP/IP** alone was no longer sufficient because networking needs became more complex. During this period, people started building the world's largest cloud platforms, such as **AWS**, **Azure**, **GCP**, **Google**, and many others. They needed an unprecedented level of scale to reach far more companies and users. So, systems had to be multi-tenant because they were supporting not just one company but thousands of companies. So, an ordinary CIO of a mid-sized company has stopped building their own things and started depending on the cloud to run their mission-critical assets, whether it's an e-commerce application, a database, or something else.

</details>

**Jayshree Ullal**: 现在，随着AI在过去几年出现，它带来了新的变化，因为云流量与AI流量非常不同。AI流量，我们都看到了随着**ChatGPT**和所有其他语言模型的推出，它带来了前所未有的复杂性和深度，比以前深了成千上万倍。因此，这需要更快的流量模式、更低的延迟和更高的性能。所以，通常我们把AI之前所做的称为前端网络，它连接标准的CPU、存储、通用查询、索引、搜索等。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Now, as AI has come in the last few years, it's bringing a new twist because cloud traffic is very different from AI traffic. AI traffic, and we've all seen this with the launch of **ChatGPT** and all the other language models, is bringing a complexity and search that is thousands or millions of times deeper and larger than anything seen before. So, this required even faster traffic patterns, lower latency, and higher performance. So, typically, what we were doing before AI, we called it the front-end network, which connected standard CPUs, storage, general-purpose queries, indexing, searching, and things like that.

</details>

**Jayshree Ullal**: 随着AI的到来，我们突然连接了成百上千，甚至数百万的加速器。正如我所说，这种GPU流量需要非常不同类型的流量，比如流量的质量、流量的强度、流量的持久性。在峰值爆发方面，它非常密集。因此，我们通常称之为后端网络，或者横向扩展和纵向扩展网络。我们几乎不得不创建不同类型的参数和指标。在我出现之前，我会说大部分都是小岛状的东西。有一个**InfiniBand**网络，一个**PCI**网络，一个**CSI**网络。而**Arista**成功地将以太网、IP和基于标准的**能力**带到了AI的后端，就像我们在云中拥有的一样。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: With the advent of AI, we were suddenly connecting hundreds, if not thousands, then millions of accelerators. And as I said, this GPU traffic required a very different type of traffic. Like, understand it as the quality of traffic, the intensity of traffic, the durability of traffic. It's very intensive in terms of peak bursts. So, we often call it the back-end network or scale-up and scale-out networks. We almost had to create different types of parameters and metrics. And until we came along, I would say most of it was like islands of little things. There was an **InfiniBand** network, a **PCI** network, a **CSI** network. And **Arista** has succeeded in bringing Ethernet and IP and standards-based capabilities to the back-end for AI, just like we had in the cloud.

</details>

### AI基础设施建设的挑战

**Nikolai Tangen**: 在构建这些网络方面，现在最大的障碍是什么？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: What is now the biggest bottleneck in terms of building these networks?

</details>

**Jayshree Ullal**: 嗯，我会说整个行业最大的障碍是**电力**。因为NGPU、网络、电缆、光纤以及所有东西的功耗与以前完全不同。以前我们谈论兆瓦，现在我们谈论一个数据中心10吉瓦。从正确的角度来看，对吧？它比一个足球场还大，你正在用吉瓦级的容量为其供电。因此，我们的AI提供商或云提供商无法找到这种级别的电力。如果你今天正在寻找这种电力，可能需要三到五年才能找到。空间和电力可能仍然是最大的问题。但一旦你找到了，我们就会介入，帮助你正确地准备它。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Yes. So, I would say the biggest bottleneck for the entire industry is power. Because the power consumption of NGPU and networks and cables and optics and everything is absolutely not like before. Before, we used to talk about megawatts. Now we talk about 10 gigawatts in a data center. To put it in perspective, right? It's bigger than a football field, and you're powering it with gigawatt capacity. So, our AI providers or cloud providers are not able to find this level of power. If you're looking for that kind of power today, it might take you three to five years to find it. Space and power are probably still the biggest problem. But once you find it, that's where we come in to help you prepare it the right way.

</details>

**Nikolai Tangen**: 没错，所以如果找到了，你们就会接到电话。但现在有大量的资金涌入AI基础设施。你如何看待这种情况？这种发展是否过快了？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: Exactly, and so if it's found, you'll get the call. But now there's a lot of money pouring into AI infrastructure. How do you see this? Is this development happening too fast?

</details>

**Jayshree Ullal**: 是的，你说得对。这种变化发生得非常快。如果我们看网络发展的旧周期，从100兆比特到1吉比特，再到10吉比特和100吉比特，大约需要每五年一次。但现在，从100吉比特到200、400、1.2，再到3.2太比特的迁移，每次都发生在大约12个月内。这意味着以前需要五年才能发生的变化，现在在12到18个月内就发生了。这意味着我们去年才达到400吉比特，而今年我们已经在考虑800吉比特和1.6太比特了。所以，对速度和规模的需求非常高，因为你需要汇集所有这些吞吐量，并且为了预期的延迟，所有这些都同时向我们涌来。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Yes, that's right. This change has happened very quickly. If you look at the old cycles of networking, it used to take almost 5 years to go from 100 megabit to 1 gigabit, then 10 gigabit, and 100 gigabit. But now, the migration from 100 gigabit to 200, 400, 1.2, and further to 3.2 terabit is happening almost every 12 months. That means changes that used to take 5 years are now happening in 12 to 18 months. This means that where we reached 400 gig last year, this year we are already thinking about 800 gig and 1.6. So, there is a very high demand for speed scale because you have to aggregate all these throughputs, and for the anticipated latency, all this is coming at us at once.

</details>

### AI繁荣与互联网泡沫的对比

**Nikolai Tangen**: 你在互联网繁荣时期在**思科**工作过，对吧？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: You were at **Cisco** during the internet boom, right?

</details>

**Jayshree Ullal**: 我在，我在。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: I was, I was.

</details>

**Nikolai Tangen**: 你如何将当时看到的情况与现在进行比较？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: How does what you saw then compare to now?

</details>

**Jayshree Ullal**: 互联网的繁荣是非常非常稳定的。在1999-2000年，由于互联网泡沫和破裂，出现了一个高峰。我还要提一下Y2K。但总的来说，互联网花了15年才发展起来。我从1993年**Crescendo**第一次被收购时就在那里，当时公司市值不到10亿美元。当我2008年离开时，它已经是一家40或近50亿美元的公司。其中**Catalyst Switch**，我认为仍然是**思科**最成功的产品线，贡献了至少三分之一的收入。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: The internet boom happened in a very, very stable way. There was a peak in 1999-2000 due to the dot-com boom and bust. I would also mention Y2K. But mostly, it took 15 years for that internet to develop. I was there from the first acquisition of **Crescendo** in 1993, when the company was less than a billion dollars. And when I left in 2008, it was a 40 or almost 50 billion dollar company, where the **Catalyst Switch**, which I think is still **Cisco's** most successful product line, was contributing at least a third.

</details>

**Jayshree Ullal**: 但关键是，它是缓慢而持续地发生的。虽然有一个高峰，有两年的爆发期。这在很多方面都感觉非常不同。最大的原因是，我们谈论的15年过程现在已经缩短到只有五到七年。其次，它的规模方面正在以指数级的速度增长，几乎是1000倍。第三，也许是最重要的，因为人们喜欢比较：我们是否处于泡沫中？我认为这些都是非常负责任的公司，所以我们没有处于泡沫中，或者如果我们处于泡沫中，那也是一个长期的泡沫。这些不是像Selex那样来了又获得资金然后倒闭的公司。这些是像**微软**、**谷歌**、**Meta**和**甲骨文**这样负责任的公司，它们正在承担构建所有这些的责任。此外，还有像**OpenAI**和**Anthropic**这样的新云公司，也值得一提。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: But the thing was, it happened slowly and steadily. But there was a peak. There was a surge for two years. This feels very different for many reasons. The biggest reason is that the 15-year process we were talking about is now compressed into just five to seven years. Secondly, its scale aspect is growing exponentially, almost 1000 times more. And third, perhaps most importantly, because people like to compare: are we in a bubble? I think these are very responsible companies, and so we are not in a bubble, or if we are in a bubble, we are in a long bubble. These are not companies like Selex that came, got funding, and then shut down. These are responsible companies like **Microsoft**, **Google**, **Meta**, and **Oracle** that are taking the responsibility to build all this. Along with this, there are also new clouds like **OpenAI** and **Anthropic** that also need to be mentioned.

</details>

**Jayshree Ullal**: 所以，我会说这更像是一个巨大的大趋势，而不是一个泡沫，它会持续一段时间。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: So I would say this feels more like a tremendous mega-trend that's here to stay for some time, rather than a bubble.

</details>

**Nikolai Tangen**: 在互联网繁荣时期，我们有过过度建设。那么，我们如何确信这种情况不会再次发生？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: We had overbuilding during the dot-com boom. So, how can we be confident that this won't happen again?

</details>

**Jayshree Ullal**: 因为所有这些都不可用。没有足够的电力，也没有足够的容量。这需要时间来建设。我们的愿望远远超过我们执行的能力。所以，仍然需要大约三年的执行阶段，而不是像1999年那样，每个人都匆忙建立公司，认为只要建好了，人们就会来。这次情况正好相反。现在的想法是：请快点建，我们现在就需要它。这是最大的变化。但这并不意味着我不会纠正自己，说这不是泡沫。相反，重要的是要说它正在以非常快和突然的规模发生。但是，我知道，它远远超出了我们都习惯的稳定状态。但我不认为这是为了一年的因素而做的。这是三到五年的工作，而且是由负责任的公司在做，它们正在用自己的资金投票，因为它们看到了需求。这就是最大的区别——有需求。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Because all of this is not available. Neither is there enough power nor enough capacity. It will take time to build. Our desire is far greater than our ability to execute. So, there will still be almost a 3-year execution phase, unlike 1999, when everyone rushed to build companies, thinking if you build it, they will come. This time, the situation is reversed. Here, the thought is: please build it quickly, we need it now. This is the biggest change. But again, this doesn't mean I won't correct myself and say it's not a bubble. Rather, it's important to say that it's happening very quickly and suddenly on a large scale. But I know, it's far more than the steady state we've all gotten used to. But I don't think it's being done for a one-year factor. It's a three to five-year job, and it's being done by responsible companies who are voting with their money because they see the demand. That's the biggest difference: there is demand.

</details>

### 客户集中度与全球AI格局

**Nikolai Tangen**: 谈到负责任的公司，你们最大的客户是超大规模公司，对吗？云公司，**微软**，云巨头？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: Speaking of responsible people, your biggest clients are hyperscalers, right? Cloud companies, **Microsoft**, cloud giants?

</details>

**Jayshree Ullal**: 是的，是的。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Yes, yes.

</details>

**Nikolai Tangen**: 客户群的集中度如何？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: How concentrated is the customer base?

</details>

**Jayshree Ullal**: 嗯，它们一直都很集中。举个例子，**微软**和**Meta**自2014年上市以来，各自在我们收入中的占比都超过10%。我对此并不感到难过。我为这种合作关系感到高兴和感激。所以，它们仍然占我们收入的10%。但显然，随着分母越来越大，我们正在向许多专业云提供商和企业园区多元化发展。但如果我不告诉你它们对**Arista**的战略至关重要，而且合作关系从未如此牢固，那将是一个笑话。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Well, they always have been concentrated. As an example, **Microsoft** and **Meta** have each accounted for more than 10% of our revenue since we went public in 2014. And I'm not sad for this concentration. I'm happy and grateful for that partnership. So, they remain 10% of our revenue. But obviously, as the denominator gets bigger, we are diversifying into a lot of specialty cloud providers, enterprise campuses. But it would be a joke if I didn't tell you that they are very, very critical to **Arista's** strategy, and the partnership has never been stronger.

</details>

**Nikolai Tangen**: 在构建AI能力方面，你对哪个国家印象最深刻？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: When it comes to building AI capabilities, which country are you most impressed with?

</details>

**Jayshree Ullal**: 哪个国家？嗯，嗯。当然是**美国**，我们也在引领。其他国家也有一些进展，但在规模方面，以及我们合作的大多数公司今天都在**美国**。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Which country? Hmm, hmm. Of course, the **United States**, and we are also leading. There are some things happening in other countries too. But in terms of scale, and most of the companies we work with are in the US today.

</details>

**Nikolai Tangen**: 还有其他你认为做得很好的国家吗？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: Are there any other countries you think are doing a good job?

</details>

**Jayshree Ullal**: 当然。我认为我们正在**北欧国家**和**中东**看到一些进展。**英国**也有一些。**韩国**和**印度**也有一些。所以毫无疑问，它正在迅速扩展到许多其他国际地区。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Absolutely. I think we're seeing parts of it in the **Nordic countries**, in the **Middle East**. There's some in the **UK** as well. There's some in **Korea** and **India**. So, there's no doubt that it's rapidly expanding to many other international locations.

</details>

**Nikolai Tangen**: 当你看到投资流向时，你是否担心世界会比以前更加分裂？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: When you look at where the investments are going, are you concerned that the world will become even more divided than before?

</details>

**Jayshree Ullal**: 不，我看到的大部分投资并没有分裂世界，而是在将世界连接得更紧密。所以，谢天谢地，它们不是政府资助的。因此，它们都是关于如何推进AI、技术和通信的。一个月前我在**中东**，我对那里的发展速度印象深刻，他们正在将大量的石油收入投资于必要的AI投资和能力。因此，我将其视为团结，而不是分裂。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: No, most of the investments I see are not dividing the world, but rather connecting the world more. So, thankfully, they are not government-sponsored. So, they are all about how to advance AI and technology and communication. I was in the **Middle East** a month ago, and I'm very impressed with the pace of progress there, where they're investing a lot of their oil money into necessary AI investments and capabilities. So, I see it as unity, not division.

</details>

### Arista Networks的市场份额与成功秘诀

**Nikolai Tangen**: 谈到印象深刻，你们现在在AI数据中心网络市场中占据21%的份额，这非常了不起。你们是如何达到这个成就的？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: Speaking of being impressed, you now have 21% of the market for AI data center networking, which is tremendous. How did you get there?

</details>

**Jayshree Ullal**: 我们只有这么多吗？我希望会更多！但我们必须努力。我们从零到21%的旅程非常漂亮。我认为如果你看高速市场，我们可能在41%左右。但如果你看所有交换的通用速度，我们可能就在你说的那个数字附近。你看，这是用心做出来的。公司成立于2008年，并开始出货产品。所以我们不是一蹴而就的。我们是循序渐进、稳扎稳打地做到的。我真的认为，为了优化这家公司的文化，它是由**Andy Bechtolsheim**和**Ken Duda**创立的，我必须说，他们为我们的软件、我们的硬件基础设施奠定了正确的基础，并不断改进它。所以我们的市场份额实际上来自于我们的客户对我们创新的赞赏。我们是由工程师为工程师打造的。我们非常注重质量架构，并通过为客户做正确的事情来支持他们。因为我们正处于任务关键型环境的中心，如果我们宕机了，每个人都会知道。如果我们不宕机，我们就会是世界上最大的秘密，我对此没有意见。所以我相信我们以非常系统的方法做到了这一点，没有推出任何在准备好之前就匆忙推向市场的产品。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Is that all we have? I was hoping it would be more! But then we have to work. We've come from zero to 21 beautifully. I think if you look at the high-speed market, we're probably around 41. But if you look at the general speeds of all switching, we're probably around the number you mentioned. Look, this is a labor of love. The company was founded in 2008 and started shipping products. So we didn't do it suddenly. We did it slowly but surely. And truly, I think to optimize the culture of this company, which was started by **Andy Bechtolsheim** and **Ken Duda**, I have to say, they laid the right foundation for our software, our hardware infrastructure, and kept making it better. So our market share actually comes from our customers appreciating our innovation. We are built by engineers for engineers. We pay a lot of attention to quality architecture and support our customers by doing the right thing for them. Because we sit at the heart of a mission-critical environment, where if we go down, everyone knows. If we don't go down, we remain the world's biggest secret, and I have no problem with that. So I believe we've done it in a very methodical way and haven't rushed any product to market before it was ready.

</details>

### 思科的职业生涯与经验教训

**Nikolai Tangen**: 你在**思科**度过了15年，建立了他们的数据中心业务。我只想知道，在**思科**的巅峰时期工作是怎样的体验？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: You spent 15 years at **Cisco** building their data center business. So I just want to know, what was it like working at **Cisco** during its peak?

</details>

**Jayshree Ullal**: 这不仅仅是数据中心业务。我喜欢我在**思科**的时光。当我加入**思科**时，公司的收入约为6.5亿美元，市值60亿美元。所以它不是一家初创公司，但它是一家年轻的公司。我得到了一个机会，当时公司主要生产路由器。正是在那段时间，我有机会为**Catalyst**品牌的交换机做出贡献和开发。首先是**Catalyst 1000**，然后是5000、6000、500、4000、3000。所以，当我第一次来的时候，这个交换机品牌是零。我至今还记得，第一年是4000万美元，第二年是3.65亿美元，第三年就达到了10亿美元。如果没有万维网和互联网，这种事情是不可能发生的，无论你的产品有多么出色。所以我感到自豪，我感觉自己是火箭飞船的一部分。那是一家很棒的公司。但你知道，在某个时候，我觉得等等，我不想待在这么大的公司里。我想做一些小一点的事情。但我对**思科**的那些日子和那15年记忆犹新。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: It was more than just the data center business. I loved my time at **Cisco**. When I joined **Cisco**, the company's revenue was about 650 million, and its market cap was 6 billion. So it wasn't a startup, but it was a young company. I got an opportunity, and at that time, the company was mostly building routers. It was during that time that I got the opportunity to contribute to and develop the **Catalyst** brand of switches. First, it was the **Catalyst 1000**, then 5000, 6000, 500, 4000, 3000. So, this switching brand was zero when I first came. And I still remember, the first year it was 40 million, then the second year 365 million, and then the third year it became 1 billion. And things like this cannot happen without the World Wide Web and the internet, no matter how great your products are. So I felt proud, I felt like I was part of a rocket ship. It was a fantastic company, and you know, but at some point, I felt, wait, I didn't want to be in such a big company. I wanted to do something smaller. But I remember those **Cisco** days and those 15 years very fondly.

</details>

**Nikolai Tangen**: 在那艘火箭飞船上，你学到了最重要的一课是什么？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: What was the most important lesson you learned on that rocket ship?

</details>

**Jayshree Ullal**: 我认为我们这里也有同样的东西，那就是**以客户为中心**。**思科**有以客户为中心的文化。我认为**Arista**在这一点上，以及在创新、工程和质量方面都加倍努力。但我曾接过**思科**在凌晨2点的电话。作为一名高管赞助人，如果事情很严重，我就会接电话。你知道，尽管我非常重视睡眠，但在那个时候，那更重要。所以我说，客户文化非常重要。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: I think we have the same thing here, which is customer focus. **Cisco** has a culture of customer focus. I think **Arista** doubles down on that, and on innovation, engineering, and quality. But I've attended calls from **Cisco** at 2:00 AM. As an executive sponsor, if something was serious, I would pick up that phone. You know, even though I value my sleep very much, at that time, that was more important. So I would say the culture of customers is very, very important.

</details>

**Nikolai Tangen**: 你本来可能会成为**思科**的下一任CEO。你为什么不想换一艘宇宙飞船呢？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: You probably could have been the next CEO of **Cisco**. So why didn't you want to change spaceships?

</details>

**Jayshree Ullal**: 你知道，我不知道我是否会是**思科**的合适CEO，因为我在**思科**是一个偶然的高管。我从未计划成为我所成为的高管。我喜欢产品。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: You know, I don't know if I would have been the right CEO for **Cisco** because I was an accidental executive at **Cisco**. I never planned to be the executive that I was. I loved products.

</details>

**Nikolai Tangen**: 但我认为大多数人都是偶然的高管，不是吗？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: But I think most people are accidental executives, aren't they?

</details>

**Jayshree Ullal**: 不，有些人不是。我的意思是，你不是五岁的时候坐在印度想：“嘿，我要成为**思科**的超级明星。”哦，绝对不是。你可以问我父母，我五岁的时候是多么不超级明星。但现在先不管这个。我想说我喜欢产品。我喜欢与工程师合作，为客户创造产品。我沉浸在技术中，以至于我不认为自己拥有更大的能力或成为**思科**CEO的愿望。所以，当我离开**思科**时，事实是我想做一些完全不同的事情，比如清洁技术、能源、太阳能或电池。我真的想回到硅谷，回到我喜欢做的事情——成为一名企业家。所以我加入了**Arista**，当时它的收入为零，有30名工程师。最重要的是，我喜欢与那些人一起工作。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: No, some people aren't. I mean, it's not like you were five years old sitting in India thinking, "Hey, I'm going to be a superstar at **Cisco**." Oh, absolutely not. You can ask my parents how much of a non-superstar I was when I was five. But let's leave that aside for now. I think I would say I loved products. I loved working with engineers to build products for customers. And I was so immersed in technology that I didn't think I had bigger capabilities or aspirations to be the CEO at **Cisco**. So, when I actually left **Cisco**, the truth was I thought I would do something completely different, like clean tech or energy or solar or batteries. And I really wanted to come back to Silicon Valley and get back to what I loved, which was being an entrepreneur. And so I joined **Arista** when it had zero revenue and 30 engineers. And most importantly, what I loved about it was I loved working with those people.

</details>

**Nikolai Tangen**: 那么，假设我有一个初创公司，收入为零，30个人坐在一个办公室里。我如何在那个充满不确定性的时期招募像你这样的超级明星？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: So, let's say I have a startup. I have zero revenue. I have 30 people sitting in an office. How do I recruit a superstar like you in that time of complete uncertainty?

</details>

**Jayshree Ullal**: 嗯，不，我想**Andy**和我，这是什么时候的事了？我们彼此认识。所以这是**Andy Bechtolsheim**。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Yeah, no, I think **Andy** and I, when was this? We knew each other. So this is **Andy Bechtolsheim**.

</details>

**Jayshree Ullal**: **Andy Bechtolsheim**是公司的德国联合创始人。当我在**思科**时，我们收购了他的公司**Granite**。所以我们当时已经一起工作过。此外，当他创立**Sun Microsystems**时，我在**AMD**制造芯片，我们也有过合作。实际上，我们从1987年就认识了，也就是大约35年甚至更久。所以我想，当他看到我辞职，而我不知道自己要去哪里时，我只是想理清思绪，他说：“哦，我有一个初创公司。”我说：“哦。”我的第一反应是：“哦，不，**Andy**，我不想再做网络和交换了。”但随着我开始理解创始人试图做什么以及工程师正在构建什么，我产生了兴趣，因为这确实是网络和交换，但它带着一种新意。它不像我所了解的互联网和**Catalyst**交换机。它是一个完全不同的东西。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: **Andy Bechtolsheim** is the German co-founder of the company. When I was at **Cisco**, we acquired his company **Granite**. So we had worked together at that time. In addition, when he founded **Sun Microsystems** and I was building chips at **AMD**, we also worked together. Actually, we've known each other since 1987, which is about 35 years or even more. So I think when he saw that I was leaving my job and I didn't know where I was going, I just wanted to clear my head, he said, "Oh, I have this startup." I said, "Oh." And my first reaction was, "Oh, no, **Andy**, I don't want to do networking and switching again." But as I started to understand what the founders were trying to do and what the engineers were building, I became interested because it was networking and switching. But it was with a twist. It wasn't like the internet and **Catalyst** switching that I knew. It was a completely different thing.

</details>

**Nikolai Tangen**: 是什么让你对它产生兴趣？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: What was it that attracted you to it?

</details>

**Jayshree Ullal**: 它的软件和软件架构非常独特。大多数网络公司做什么？它们有五个用例，五个操作系统，每个操作系统有50个镜像，总共需要管理250个东西。但这里只有一个操作系统和一个二进制镜像。它有大量的类基础，我们称之为**状态驱动发布订阅模型**。如果有什么东西失败了，它不会只是失败。它会自动恢复，代理会重新上线。这与圣诞树灯完全相反，圣诞树灯坏了一个，所有的灯都熄灭了。我们在这里构建了一个系统，即使一个灯坏了，我们也只会更换那个LED，整个系统仍然运行。客户甚至不会知道。正是这个软件让我们有机会与这么多任务关键型和高知名度的客户合作。然后我们把这项技术应用到不同类型的用例中。这项技术吸引了我，这些人也吸引了我。但说实话，也有一点紧张，因为我加入的那一年是2008年。那是金融危机时期。我们最早的客户之一是**雷曼兄弟**，你知道后来他们发生了什么。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Its software and software architecture were very unique. What do most networking companies do? They have five use cases, five operating systems, and 50 images for each, so they have to manage 250 things in total. But here, there was only one operating system and one binary image. It had a ton of class foundation, what we called a **state-driven publish-subscribe model**. In this, if something fails, it doesn't just fail. It automatically recovers, and the agent comes back up. And this was exactly the opposite of Christmas tree lights, where if one light goes out, all the lights go out. Here, we had built a system where even if one light failed, we would just change that LED, and the entire system would keep running. The customer wouldn't even know. It's because of this software that we got the opportunity to work with so many mission-critical and high-profile customers. And then we used that technology in different types of use cases. That technology attracted me, and the people did too. But to be honest, there was also a bit of nervousness because the year I joined was 2008. That was the time of the financial crisis. One of our early customers was **Lehman Brothers**, and you know what happened to them after that.

</details>

**Nikolai Tangen**: 我知道。

<details>
<summary>Original English</summary>

**Nikolai Tangen**: I know.

</details>

**Jayshree Ullal**: 所以我在**Arista**的企业家生涯开局并不顺利，但现在已经持续了17年，而且依然强劲。这并不是说我们没有经历过起伏。我们当然经历过。金融崩溃是其中之一。我们最大的竞争对手**思科**起诉我们是另一件事。新冠疫情和整个供应链危机也是另一件事。所以，我们经历了许多困难才走到今天，能在这里真是太好了。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: So my entrepreneurial career at **Arista** didn't start well, but it's been going strong for 17 years now. It's not that we haven't seen ups and downs. We absolutely have. The financial collapse was one of them. Our biggest competitor **Cisco** suing us was another thing. COVID and the entire supply chain crisis was also another thing. So, we have faced many difficulties to get to where we are today, and it's good to be here.

</details>

**Nikolai Tangen**: 与像**思科**这样的大公司竞争需要什么？你是一个初创公司，想着我们要打败他们。这需要什么？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: What does it take to compete with a big company like **Cisco**? You're a startup, thinking we have to beat them. What does it take?

</details>

**Jayshree Ullal**: 我认为我的大多数同事都会告诉你，我从未觉得自己在与**思科**竞争，因为一开始我们专注于非常具体和独特的用例，以至于**思科**甚至不想参与或关注它们。比如高频交易和低延迟。这些是**思科**根本不关注的用例。我们的前1亿美元收入大部分都来自这里。我们的第二个用例是云，**思科**称之为MSDC，即大规模数据中心。但他们根本没有关注那个领域。他们甚至没有试图理解客户想要什么以及他们为什么这样做。实际上，在**AWS**、**亚马逊**和**谷歌**的早期，他们既不使用**思科**，也不使用**Arista**，因为他们自己构建了系统。他们对自己的需求和市场上可用的解决方案非常不满意。所以，我再次觉得我们正在做一些大公司，特别是当时的**思科**，没有做的事情。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: I don't think most of my colleagues would tell you that I ever felt like I was competing with **Cisco** because initially we were so focused on very specific and unique use cases that **Cisco** didn't even want to be involved in or pay attention to. Like high-frequency trading and low latency. These were use cases that **Cisco** was not focused on at all. And our first 100 million in revenue mostly came from there. Our second use case was cloud, and **Cisco** called it MSDC, which is massively scaled data centers. But they didn't focus on that sector at all. They didn't even try to understand what customers wanted and why they did what they did. Actually, in the early days of **AWS**, **Amazon**, and **Google**, they used neither **Cisco** nor **Arista** because they built their own systems. They were quite dissatisfied with their requirements and the solutions available in the market. So, once again, I felt that we were doing something that big corporations, especially **Cisco** at that time, were not doing.

</details>

### 卓越的客户服务

**Nikolai Tangen**: 卓越客户服务的一个例子是什么？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: What is an example of excellent customer service?

</details>

**Jayshree Ullal**: 有很多例子和故事可以告诉你。但让我问你同样的问题。如果你今天打电话给**Arista**支持，你会怎么想？假设你有一个网络问题，你不得不打电话。你期望得到怎样的回应？

<details>
<summary>Original English</summary>

**Jayshree Ullal**: There are many examples and many stories I can tell you. But let me ask you the same question. If you pick up the phone and call **Arista** support today, what do you think? And let's say you have a network problem and you had to call. What kind of response would you expect from them?

</details>

**Nikolai Tangen**: 你们会来解决我的问题。

<details>
<summary>Original English</summary>

**Nikolai Tangen**: That you would come and fix my problem.

</details>

**Jayshree Ullal**: 通常在大多数地方，他们会先问：“你是谁？你付账了吗？”如果你只是问问题，他们会说：“我们的系统里没有你的账户。”但我们不会那样做。我们立即问：“问题是什么？”我们的平均解决时间非常快。对我们来说，这就像在紧急情况下治疗病人。你不会问他们20个问题。你了解症状并进行治疗。所以我们的平均解决时间是25分钟。这是一个闻所未闻的记录，因为我们的团队充满了专家，而且质量和支持是并行的。当你生产高质量的产品时，如果出现配置错误或支持问题，我们会立即采取行动并随时待命。所以我们不外包。我们采用“追随太阳”模式，即全天候全球覆盖。我们快速响应，理解问题，解决问题，平均时间非常短。这是一种非常高质量的体验。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Typically, in most places, they first ask, "Who are you? Have you paid the bill?" If you're just asking questions, they say, "We don't have your account in our system." But we don't do that. We immediately ask, "What is the problem?" Our average resolution time is very fast. For us, it's like treating a patient in an emergency. You don't ask them 20 questions. You understand the symptoms and treat them. So our average resolution time is 25 minutes. This is an unheard-of record because our team is full of experts, and quality and support go hand in hand. When you build high-quality products, if there's a misconfiguration or a support problem, we take immediate action and are there. So we don't outsource it. We have a follow-the-sun model, meaning worldwide coverage all the time. We respond quickly, understand the problem, and solve it, and the average time is quite low. And it's a very high-quality experience.

</details>

### 保持领先的策略与未来展望

**Nikolai Tangen**: 你如何确保自己保持领先？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: How do you make sure that you stay ahead?

</details>

**Jayshree Ullal**: 这需要一些个人时间。我会在日程表中安排一些时间，只专注于思考，不安排会议，因为每个人都想和我开会。我总是努力保持对技术的更新。例如，在2022年和2023年，我决定要跟上AI的步伐，因为之前我没有完全关注它。当2022年11月**ChatGPT**的时刻到来时，我觉得这是科技行业的一个重要里程碑。我记得我必须在2023年1月的**光学会议（OFC）**上发表演讲。我本可以谈论光学、长距离、短距离、DWDM、共封装光学、DSP等等。但我没有，我利用那次会议讨论AI作为驱动力。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: It takes a bit of personal time. I set aside time in my calendar where I just focus on thinking and don't take any meetings because everyone wants to meet with me. I always try to stay updated on technology. For example, in 2022 and 2023, I made it a point to stay updated on AI because I wasn't fully paying attention to it before. And when the **ChatGPT** moment came in November 2022, I felt that was a big milestone for the tech industry. I remember I had to give a talk at the **Optical Fiber Communication Conference (OFC)** in January 2023. I could have talked about optics, long haul, short haul, DWDM, co-packaged optics, DSP, etc. But instead, I used that conference to discuss AI as a driver.

</details>

**Jayshree Ullal**: 为了做到这一点，我必须自己学习和阅读，因为你正在与一群博士听众交谈，他们可能比我更了解理论。因此，我总是为学习感到非常自豪，总是推动作为一个人和在行业中与我的同事一起，以及在**Arista**内部的界限。我们的组织中有很多顶尖的技术专家。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: And to do that, I had to learn and read myself because you're talking to a PhD audience who probably knows more about the theory than I do. And so I always take a lot of pride in learning, always pushing the boundaries as a person and with my peers in the industry, and also within **Arista**. We have a lot of top technical experts in our organization.

</details>

**Nikolai Tangen**: 你能预测多远的未来？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: How far into the future can you predict?

</details>

**Jayshree Ullal**: 不太远，说实话，我可能会出错。我能预测到一些事情可能会发生，但我最好的准确度是在一到三年内。在那之后，情况会更好一些。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Not that far, actually, I could be wrong. I can predict that some things might happen. But my best accuracy is within one to three years. After that, the situation will be a bit better.

</details>

**Nikolai Tangen**: 未来三年会发生什么变化？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: What's going to change in the next three years?

</details>

**Jayshree Ullal**: 我觉得我们今天看待AI的方式在未来会发生很大的变化。现在我们正在构建一种大型机版本的AI，涉及大型集群、数十亿、数万亿的参数和令牌。我们还在研究这一切如何在太浮点运算、太瓦或太比特的容量中体现出来。但在我看来，尽管未来三年所有这些都很重要，我并没有低估它。但我认为它将成为一个更加分布式的问题。我们不能把所有东西都塞进一个尺寸。就像大型机转向客户端-服务器，最终转向分布式PC、客户端和手机一样，我认为AI也将以许多不同的形状和大小出现，你知道，包括这个。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: I feel that the way we look at AI today is going to change quite a bit in the future. Right now, we're building a mainframe version of AI, where we talk about large clusters. Billions, trillions, and quadrillions of parameters and tokens. We also look at how all this manifests in teraflops, terawatts, or terabits of capacity. But in my view, even though all this will be important in the next three years, I'm not underestimating it. I think it's going to become a more distributed problem. We won't be able to fit everything into one size. And just as mainframes went to client-server and eventually, you know, distributed PCs and clients and phones, similarly, I think AI will also come in many different shapes and sizes, and you know, including this one.

</details>

**Nikolai Tangen**: 这会有什么影响？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: And what would be the implications of that?

</details>

**Jayshree Ullal**: 影响非常显著，因为小型化比仅仅构建最大、最强大的系统要困难得多。这意味着我们必须将训练模型转化为推理，并在许多用例中以更少的资源做更多的事情。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Quite significant because miniaturization is much harder than just building the biggest and most powerful system. This means we'll have to translate our training models into reasoning and inference, and do more with less resources in many use cases.

</details>

**Jayshree Ullal**: 因为如果你只通过增加带宽容量和计算能力来解决问题，你就可以运行世界上最大的训练工作负载。但如果将同样的能力应用于推理，并以更分布式的方式将其带到通用计算和存储中，那么AI就可以到达每个桌面。它不会仅仅局限于大型和强大的系统。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Because if you solve the problem just by increasing bandwidth capacity and compute power, then you can run the world's largest training workloads. But if that same capability is applied to reasoning and taken to general-purpose compute and storage in a more distributed way, then AI can reach every desktop. It won won't be limited to just large and powerful systems.

</details>

**Nikolai Tangen**: 你是否担心科技世界正在**美国**和**中国**之间分裂成两部分？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: Are you concerned that the world of technology is increasingly being split into two between the US and China?

</details>

**Jayshree Ullal**: 今天我们所处的分裂也有政治层面。我希望创新和技术能在公平的竞争环境中发展。但我理解我们都受不同国家管辖。因此，我担心的是，为了让**美国**保持领先并领先一步，我们必须不断创新，并不断与最优秀的人才合作。你知道，我就是一个移民的例子，我来到这里，不是在这里出生的。无论这些人才在中国、印度、伦敦还是其他任何地方，我们都需要接触他们，我们需要与最优秀的人才合作。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: The way we are divided today also has a political aspect. I wish innovation and technology would advance on a level playing field. But I understand that we are all governed by different countries. So, my concern is that for the **United States** to stay ahead and be one step ahead, we have to keep innovating and keep partnering with the best talent. You know, I'm an example of an immigrant who came here and wasn't born here. Whether that talent is in China, India, London, or anywhere else, we need access to it, and we need to work together with the best minds.

</details>

### Arista Networks的企业文化与领导力

**Nikolai Tangen**: 现在谈谈文化。你如何描述**Arista**的文化？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: Now let's talk about culture. How would you describe the culture of **Arista**?

</details>

**Jayshree Ullal**: 用一个词来说，就是**做正确的事**。因为作为一家上市公司，很容易只关注季度或某一件事情。毫无疑问，每家公司都有一个我们必须关注的商业模式。但如果你超越这一点，做正确的事，那么所有其他事情都会自然而然地解决。我可以举一个最好的例子。在我们职业生涯的早期，我们的硬件中的一个芯片成员出现了一个非常大的质量问题。我们与他们合作，他们也与我们合作。我只有一个选择，就是在软件中打一个小补丁。但我尽力了，告诉我们的客户：“看，你现在没有看到问题，但这可能会逐渐恶化，我们想自费更换你所有的设备。”这几乎让我们破产了。但我们选择了做正确的事。所以更多的人记得我们做了那件事，即使当时是坏消息，而不是所有好消息，对吧？所以我认为，作为一家公司，专注于为员工做正确的事，作为一种文化，为客户做正确的事，这就是我想强调的重点。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: In one word, it's **do the right thing**. Because as a public company, it's easy to just focus on the quarter or on one thing. And there's no doubt that every company has a business model that we have to focus on. But if you go beyond that and do the right thing, then all other things take care of themselves. I can give you one best example. Early in our career, we had a very big quality problem with one of the chip members in our hardware. We worked with them, they worked with us, and I had only one option, which was to put a small patch in the software. But I tried my best and told our customer, "Look, you're not seeing the problem right now, but it could gradually get worse, and we want to replace all your gear at our cost." This almost could have bankrupted us. But we chose to do the right thing. So more people remember that we did that, even though it was bad news at the time, rather than all the good news, right? So I think focusing on doing the right thing for your employees as a company, and as a culture, doing the right thing for your customers, that's the big thing I would highlight.

</details>

**Nikolai Tangen**: 你如何确保这种态度在整个组织中得到分享？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: How do you make sure that this attitude is shared throughout the organization?

</details>

**Jayshree Ullal**: 这并不容易，尤其是在公司变大之后。但最棒的是，作为一个管理团队，你知道，我们过去15年来基本上是同一个管理团队。我们有时会因为其他目标或财务成功而失去一些人。但我认为，当你拥有相同的管理团队和领导者，现在我们正在培养下一代领导者，并且你不断强化这种文化时，它就会渗透到整个组织中。我还要说，即使我们有中层管理人员，我们也会看到他们不仅仅是专业的经理，他们还是教练和团队成员，每天积极地贡献他们的想法和技能。我的总裁兼CTO **Ken Duda**，他也是公司的创始人，至今仍在亲自编写代码。所以这告诉我们的员工，我们正在通过树立榜样来领导。我们不是言行不一。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: It's not easy, especially as you get bigger. But the best thing is that as a management team, you know, we've largely been the same management team for the last 15 years. And we sometimes lose people because of other goals or financial success. But I think when you have the same management team and leaders, and now we're bringing in the next generation of leaders, and you constantly reinforce that culture, it permeates throughout the organization. And I would also say that even though we have middle management, we see that they are not just professional managers, but they are also coaches and team players and actively contribute their ideas and skills every day. My president and CTO, **Ken Duda**, who is also the founder of this company, still codes himself. So this tells our employees that we are leading by example. We are not saying one thing and doing another.

</details>

**Nikolai Tangen**: 你是如何保持学习的？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: How do you keep learning?

</details>

**Jayshree Ullal**: 也许我学得不够多。正如我所说，我有很多学习来源。当我见到客户时，他们会教我很多东西，因为他们看待事物的方式不同。这是一种方式。我也花很多时间与我的工程师在一起，了解他们在做什么以及他们面临的问题。他们总是教会我一些东西。今天你可以去找**Claude**、**Gemini**或**ChatGPT**，以非常高的效率成为一名软件开发人员，这使得理解复杂主题变得容易。我只相信自己的弱点。但这是一个很好的学习来源，我最喜欢的学习方式实际上是阅读，我做得很少，非常少。但那是我最喜欢的方式。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Maybe I don't learn enough. As I said, I have many sources of learning. When I meet customers, they teach me a lot because they see things differently. That's one way. I also spend a lot of time with my engineers to understand what they're doing and what problems they face. They always teach me something. Today you can go to **Claude** or **Gemini** or **ChatGPT** and become a software developer with very good efficiency, which makes it easy to understand complex topics. I only trust my weaknesses. But that's a good source of learning, and my favorite way to learn is actually reading, which I do less and very little. But that's my favorite way.

</details>

### 招聘理念与早年经历

**Nikolai Tangen**: **Jayshree**，当你招聘时，你寻找什么？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: **Jayshree**, when you hire, what do you look for?

</details>

**Jayshree Ullal**: 嗯，很明显，当你招聘时，他们必须有能力。所以，能力是一个要素，并且要询问他们的能力。但我看重能力、品格、道德价值观、文化以及他们是怎样的人。你是一个好人吗？因为你知道，我想确保这次招聘不仅能够带来成果，而且能够长期与我们在一起，并融入我们的文化。好吗？再次回到做正确的事。所以我们总是考虑长期，而不是短期。因此，我们寻找那些与我们有相同思维方式的人。人们常说，如果你招聘你认识的人或亲戚，那就是裙带关系。但我相信这也会带来很多优秀的人。因为如果你认识那个员工，那么他的亲戚也很可能是那样的人。所以，如果我有空缺，我总是乐意为**Arista**员工的家人提供实习机会。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Yes. So, obviously, when you hire someone, it's very clear that they should be capable. So, there's an element of capability and asking them about their capabilities. But I look for capability, character, moral values, culture, and what kind of person they are. Are you a good person? Because you know, I want to make sure that this hire is not only capable of delivering results but also stays with us for the long term and embraces and blends into our culture. Okay? Again, coming back to doing the right thing. So we always think about the long term, not the short term. And so we look for people who think like us. Often people say that if you hire someone you know or a relative, that's nepotism. But I believe that also brings in a lot of good people. Because if you know that employee, chances are their relative will be similar. So, if we have openings, I'm always ready to offer internships to the families of **Arista** employees.

</details>

**Nikolai Tangen**: 你们员工中有多少百分比是印度裔背景？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: What percentage of your employees are of Indian background?

</details>

**Jayshree Ullal**: 嗯，我会说，因为我们在印度有一个大型设施，所以大约在15%到20%之间。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Um, I would say that because we have a large facility in India, it's around 15 to 20%.

</details>

**Nikolai Tangen**: 我们可以谈谈你在印度的成长经历吗？你在**新德里**长大。你五岁的时候梦想着什么？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: Can we talk about your upbringing in India? You grew up in **New Delhi**. What were your dreams when you were five years old?

</details>

**Jayshree Ullal**: 是的，我出生在**伦敦**，在**德里**长大，大部分时间在美国度过。我父亲是一名教师。所以他关心我的教育，并确保我做得好。他在印度创办了前五所**IIT**（印度理工学院），你可能知道它们非常有名，声誉很好。所以我认为，在一个中产阶级家庭中，机构教育是非常重要的一部分。所以在学校表现出色，你知道，不仅仅是表现好，而是表现非常好，进入最好的学校。我父母确保我能得到最好的教育。所以我从未梦想过我今天会做的事情。我专注于一步一步来，比如如何在学校表现出色，以及如何进入最好的大学。当时没有长远的计划。但我知道我的父母对我寄予厚望。也许当时我对自己的期望没有那么高。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Yes, I was born in **London**, grew up in **Delhi**, and spent most of my life in the **United States**. My father was a teacher. So he thought about my education and made sure I did well. He started the first five **IITs** in India, as you probably know, they are very famous and have a good reputation. So I think that in a middle-class family, institutional education was a very big part. So doing well in school, you know, not just doing well, but doing very well in school, going to the best schools. My parents made sure they could give me the best education. So I never dreamed that I would do what I'm doing today. I focused on one step at a time, like how to do well in school and how to get to the best colleges. There was no long-term plan at that time. But I knew that my parents had very high expectations of me. Maybe at that time, I didn't have such high expectations of myself.

</details>

**Nikolai Tangen**: 当一个人被寄予如此多的期望时，这会对他产生什么影响？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: When so many expectations are placed on someone, what effect does that have on them?

</details>

**Jayshree Ullal**: 有时这会迫使你表现得更好。因为这是一件非常有趣的事情，每当我的父亲或母亲去家长教师协会见我的老师时，他们总是说：“**Jayshree**很有潜力，但她没有充分利用它。她没有发挥出她的全部潜力。”所以他们回来后会要求更多，期望更多。但这让我学到了一个特别的教训。我在印度有一个非常亲密的朋友，就像学生排名一样。她总是考第一，而我从未考过第一。我看到她，你知道，为了在这些考试中取得好成绩，她在学习方面每天学习大约八个小时，而我每天只学习三到四个小时。对我来说，如果你想这么说的话，那是一个很好的投资回报率。我得到了一个不如她好的排名，但我仍然做得很好。我排在前10%。我试图向我的父母解释我正在打一场持久战，今天这可能听起来是正确的。但当时，这更多是一个不每天学习八小时的借口。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Sometimes it forces you to perform better. Because it's a very interesting thing that whenever my father or mother went to the parent-teacher association to meet my teachers, they always said, "**Jayshree** has a lot of potential. But she's not fully utilizing it. She's not using her full potential." And so they would come back and demand more, and expect more. But it taught me a particular lesson. I had a very close friend in India, and like student rankings, she always came first, and I never came first. And I saw that she, you know, to do well in these exams, in terms of studying, she would study almost eight hours a day, and I would study only three to four hours a day. And for me, that was a good ROI, if you want to call it that. I got a rank that wasn't as good as hers, but I still did well. I was in the top 10%. And I tried to explain to my parents that I was playing the long game, and today that might sound right. But at that time, it was more of an excuse not to study eight hours a day.

</details>

**Nikolai Tangen**: 你学习了电气工程，这在当时对女孩来说并不常见。

<details>
<summary>Original English</summary>

**Nikolai Tangen**: You studied electrical engineering, which was not very common for girls at that time.

</details>

**Jayshree Ullal**: 不，绝对不常见。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: No, absolutely not.

</details>

**Nikolai Tangen**: 你是怎么做到的？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: So how did you do all that?

</details>

**Jayshree Ullal**: 是的，我是通过排除法做到的。我喜欢物理，我喜欢化学，我喜欢数学。我不喜欢生物。我在艺术系表现不佳。我想，什么能给我解决问题的这种交叉点呢？在我的时代，计算机科学仍然是一个相当稀有的领域。也许如果机会更多，我会做得更多。我必须在数学系上计算机科学课程，学习Fortran、C++和汇编。我上了一些课程，但电气工程才是真正的硬核工程。现在它又回来了。我希望现在在这个现代世界中，有越来越多的人在硅、芯片和硬件设计方面这样做。所以我想，我受到我父亲的影响，他创办了**IIT**，他将科学应用于现实世界的问题，我认为这才是真正的工程。那是一些让我兴奋的事情。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Yes, I got there by elimination. I liked physics, I liked chemistry, I liked math. I didn't like biology. I wasn't very good in the arts department. And I thought, what is it that can give me this intersection of problem-solving? And computer science was still a fairly rare field in my day. Perhaps if that opportunity had been more, I would have done more. I had to take my computer science classes in the math department, for Fortran, C++, and assembly. I took some classes, but electrical engineering was the real hard-core engineering, and now it's coming back again. I wish more and more people would do it now in this modern world of silicon and chip and hardware design. So I think, and I was influenced by my father, who started the **IITs**, who applied science to real-world problems, which I think is what engineering really is. That was something that excited me.

</details>

### 工作态度与个人生活

**Nikolai Tangen**: 你被认为是科技界最勤奋的人之一。你工作多长时间？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: You're considered one of the hardest-working people in tech. How much do you work?

</details>

**Jayshree Ullal**: 你知道，我觉得当你热爱自己的工作时，就不会觉得自己在努力工作或长时间工作。你是在享受它。同时，作为CEO，所有的责任都在你身上，而我有一份责任。所以我会说，我妈妈也说：“你工作太努力了。”我说：“妈妈，我喜欢我正在做的事情。”所以我从不计算工作时间。对我来说，平衡工作与健康和家庭一直很重要。但说实话，我需要更多的爱好。也许那样我就会少工作一点。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: You know, I think when you love what you do, it doesn't feel like you're working hard or working long hours. You're enjoying it. At the same time, as a CEO, all the responsibility is on you, and I have a responsibility. So I would say, my mom also says, "You work too hard." And I say, "Mom, I love what I'm doing." So I never counted the hours. For me, it has always been important to balance my work with my health and family. But to be honest, I need some more hobbies. Maybe then I'll work a little less.

</details>

**Nikolai Tangen**: 你的爱好是什么？你有什么爱好吗？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: What are your hobbies? Do you have any hobbies?

</details>

**Jayshree Ullal**: 是的，你知道，我以前跑很多步，但我的膝盖受伤了。所以现在我走路，做很多徒步旅行。我们的狗也占了很大一部分。我的家人以某种形式与音乐相关。虽然我没有公开唱歌的计划，但这很有趣。浴室里的声音总是很棒的。任何人都可以在那里唱得很好。现在有了合成器，听起来更好了。我喜欢所有这些。我也非常喜欢阅读。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Yes, you know, I used to run a lot, but I hurt my knees. So now I walk and do a lot of hikes. Our dog is a big part of it too. My family is connected to music in some form or another. Even though I don't have any plans for public singing, it's a lot of fun. The sound in the shower is always amazing. Anyone can sing well there. And nowadays, with the help of synthesizers, it sounds even better. I love all of this. I also really enjoy reading.

</details>

**Nikolai Tangen**: 你读什么？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: What do you read?

</details>

**Jayshree Ullal**: 我读了很多传记。最近我读得不多。但每当我读的时候，大部分都是在长途飞行中。要么我打印并发布一些规范，阅读一些技术文档，要么我读一本非常轻松的小说，比如**约翰·格里沙姆**（John Grisham）那种不需要太多思考或动脑筋的。那是我的放松时间。说实话，我更喜欢阅读而不是看电影。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: I read a lot of biographies. I haven't been able to read much lately. But whenever I do read, it's mostly during long-distance flights. And either I print out and publish some specifications and read some technical documents, or I read a very light novel, like a **John Grisham** type, where you don't have to think or use your brain too much. That's my downtime. And to be honest, I prefer reading to watching movies.

</details>

### 最自豪的成就与对年轻人的建议

**Nikolai Tangen**: 在你的一生中，你最自豪的是什么？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: What are you most proud of in your life?

</details>

**Jayshree Ullal**: 我最自豪的是我的家人。我会说我的女儿们、我的丈夫和我的大家庭，他们给我带来了很多快乐，因为在那个层面上，不仅仅是我，而是他们。最近我获得了母校**圣克拉拉大学**的荣誉博士学位。但我的女儿们真的很努力。一个获得了博士学位，另一个获得了兽医学博士学位。我为她们的价值观感到骄傲。我为她们的同情心感到高兴，也为她们选择了自己的卓越之路感到高兴。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: I am most proud of my family. I would say my daughters, my husband, and my extended family. They give me a lot of joy because at that level, it's not just about me, but about them. Recently, I also received an honorary doctorate degree from my alma mater, **Santa Clara University**. But my daughters really worked hard. One got a PhD, and the other got a doctorate in veterinary science. I'm proud of their values. I'm happy for their compassion, and also that they chose their own path to excellence.

</details>

**Nikolai Tangen**: 你会给年轻人，包括你的女儿们，什么样的建议？

<details>
<summary>Original English</summary>

**Nikolai Tangen**: What kind of advice do you give to young people, including your daughters?

</details>

**Jayshree Ullal**: 我经常给出这个建议，因为今天的大多数年轻人对在职业生涯中快速达到某个特定目标感到非常焦虑。我告诉他们，**建立你的卓越之路**。我们每个人都有天赋，这意味着我们在某些方面擅长，在某些方面非常糟糕。但如果你能找到你擅长的事情，并把它做得更好，并努力做到最好，并继续努力，那么我认为每个人都会找到自己的卓越之路，这不总是用金钱来衡量。它应该用你达到你所认为的成功目标来衡量。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: I often give this advice because most young people today are very anxious about reaching a certain point quickly in their careers. I tell them, **build your path to excellence**. Each of us has a talent, which means we are good at some things and very bad at others. But if you can find the things you are good at, and make them better, and work to become excellent at them, and keep working on them, then I think everyone defines their own path to excellence, and it's not always measured by money. It should be measured by reaching the destination you consider success.

</details>

**Nikolai Tangen**: **Jayshree**，看来你在印度的老师们完全错了。你已经充分发挥了自己的潜力。非常感谢你为连接世界所做的一切，祝你未来一切顺利。

<details>
<summary>Original English</summary>

**Nikolai Tangen**: **Jayshree**, it seems your teachers in India were completely wrong. You have fully utilized your potential. Thank you very much for everything you do to keep the world connected, and I wish you all the best for the future.

</details>

**Jayshree Ullal**: 谢谢你，**Nikolai**。谢谢你提出这些深思熟虑的问题。

<details>
<summary>Original English</summary>

**Jayshree Ullal**: Thank you, **Nikolai**. Thank you for these thoughtful questions.

</details>

**Nikolai Tangen**: 谢谢。

<details>
<summary>Original English</summary>

**Nikolai Tangen**: Thank you.

</details>