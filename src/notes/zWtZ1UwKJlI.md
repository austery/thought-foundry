---
author: Norges Bank Investment Management
date: '2025-12-31'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=zWtZ1UwKJlI
speaker: Norges Bank Investment Management
tags:
  - ai-networking
  - data-center-infrastructure
  - network-architecture
  - power-constraint
  - corporate-culture
title: Arista Networks CEO Jayshree Ullal：AI时代的网络基础设施与企业文化
summary: 本次访谈中，Arista Networks首席执行官Jayshree Ullal深入探讨了AI时代网络基础设施的关键作用。她解释了Arista如何构建高性能、低延迟的任务关键型网络，并强调AI流量与传统云流量的显著差异。Ullal指出，电力是当前AI网络扩展的最大瓶颈，并认为当前的AI热潮并非泡沫，而是由负责任的公司和实际需求推动的“爆炸性大趋势”。她还分享了Arista独特的软件架构、卓越的客户服务文化，以及她个人在持续学习、人才招聘和职业生涯发展方面的见解。
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
  - AWS
  - Azure
  - GCP
products_models:
  - ChatGPT
  - Cisco Catalyst switches
  - Arista EOS
media_books: []
status: evergreen
---
### 访谈开场

**Nicolola**: 大家好，我是挪威主权财富基金的首席执行官**Nicolola Tangan**。今天我邀请到了一位对**AI**领域至关重要的人物，她就是卓越的**Arista Networks**首席执行官**Jayshree Ullal**。**Jayshree**在网络领域拥有超过40年的背景，没有人比她更适合谈论这个话题了。**Jayshree**，非常高兴您能来。

<details>
<summary>Original English</summary>

**Nicolola**: Hi everyone, I'm **Nicolola Tangan** the CEO of the Norwegian so wealth fund and today I'm here to with somebody who is absolutely vital to **AI** namely the remarkable **Jayshree Ullal** CEO of **Arista Networks**. **Jayshree** has more than 40 years background in networking so nobody is better able to talk about this than her. So **Jayshree** super to have you on there.

</details>

**Jayshree**: 很高兴来到这里，**Nicolola**。我有点感冒，所以如果我听起来鼻音很重，请见谅。

<details>
<summary>Original English</summary>

**Jayshree**: Great to be here **Nicole**. I I have a bit of a cold, so apologize if I sound nasal.

</details>

**Nicolola**: 没问题。我们从头开始吧。

<details>
<summary>Original English</summary>

**Nicolola**: No problem. No, let's start with the beginning.

</details>

**Jayshree**: 我不用在这个播客上唱歌，对吧？所以我们应该没问题。

<details>
<summary>Original English</summary>

**Jayshree**: I don't have to sing on this podcast, right? So, we should be fine.

</details>

**Nicolola**: 不用唱歌。我们从头开始吧。**Arista**是做什么的？

<details>
<summary>Original English</summary>

**Nicolola**: No singing. Let's start with Let's start with the beginning. What does **Arista** do?

</details>

### Arista Networks的业务

**Jayshree**: 是的，这是一个很有分量的问题。**Arista**正在构建世界上最苛刻的任务关键型网络，这些网络具有高性能、高扩展性、低延迟、高可靠性、高可用性、高自动化和高遥测能力。因此，它在许多方面都有很高的要求，而**Arista**在过去十年中尤其脱颖而出，成为这一领域的先驱和领导者。

<details>
<summary>Original English</summary>

**Jayshree**: Yeah, that's a loaded question. So **Arista** is building the world's most demanding mission critical networks which is high performance, high scale, low latency, high reliability, high availability, high automation, high telemetry. So it's a lot of demands on across a lot of spectrums and **Arista** has emerged especially over the last decade to be both the pioneer and the leader in this.

</details>

**Nicolola**: 我听说如果把芯片比作引擎，那么网络就是它们之间的“高速公路”，对吗？

<details>
<summary>Original English</summary>

**Nicolola**: I've heard that if you think that kind of chips is the engine then the networking is the highway between them. Right.

</details>

**Jayshree**: 是的，这是一个很好的比喻。我认为芯片为**AI**处理领域提供了大量动力，无论是**GPU**、**APU**、**XPU**，随便你怎么称呼它们。但在处理这些数据时，你必须担心是否能充分利用它们。所以，如果一辆汽车额定速度是每小时100英里，但由于基础设施无法支持，只能以每小时30英里的速度行驶，那么你就是在严重地未充分利用这辆汽车，或者在这种情况下，是未充分利用**GPU**。所以，是的，我们是所有加速器、用户、任务关键型工作负载的信息高速公路。现在，假设我坐在办公室里，在**ChatGPT**上输入一个提示，我的操作是如何触及到你们产品的？具体发生了什么？

<details>
<summary>Original English</summary>

**Jayshree**: Yeah, that's a good way to look at it. I think the chips fuel a lot of especially in this world of **AI** processing with **GPUs**, **APUs**, **XPUs**, whatever you call them. But as you process this, you have to get worried about are you processing it to full utilization. And so, if a car is rated at 100 miles an hour but can only go 30 miles an hour because the infrastructure cannot support going farther, then you're grossly underutilizing the car or in this case the **GPU**. So, yeah, we are the information highway to all accelerators, users, mission critical workloads, you name it. So let's say now I sit in my office I do a prompt on **ChatGPT** how do I touch your products just how what happens with with the sing

</details>

**Jayshree**: 是的，我们非常幕后。我父母总是问我：“你到底做什么的？”因为他们看不到我们做的事情。当你在**Arista**中输入一个提示时，我们基本上在做的是连接一切。这次播客上的对话没有它是不可能实现的。所以，无论是来自用户、设备、工作负载、机器、服务器、存储，还是现在越来越多来自**AI**杀手级应用的**高强度流量模式**，我们都通过一套交换机和路由平台进行连接。我们称之为**叶脊架构**（leaf spine architecture），其中可以有多个叶（leaves）连接到一个聚合脊（aggregate spine），现在也可以有一个**AI脊**。这些是世界上最大规模的高扩展性平台，但它们需要通过正确的软件来驱动，芯片也需要如此。这正是**Arista**的标志性成就：其**可扩展操作系统EOS**。我们通过它为这些平台和网络连接提供越来越多的数据类型。我们可以处理结构化数据、非结构化数据、流数据，并通过我们专门构建的软件使其全部运行。

<details>
<summary>Original English</summary>

**Jayshree**: Yeah so we are very much behind the scenes this is something my parents always used to say what do you do because you can't see what we do and when you type in a prompt of **Arista** basically what at that point we're doing is connecting everything to everything this conversation on this podcast is not possible without it so the traffic patterns of high intensity whether it comes from a user, a device, a workload, a machine, a server, a storage or now more and more the **AI** killer applications we connect and we do that through a set of switches and routing platforms. We call them leaf spine architecture where you can have multiple leaves that connect into an aggregate spine and these days you can also have an **AI spine**. So these are some of the world's largest high-scale platforms but they need to be powered platforms need and chips need to be powered with the right software and that's where **Arista's** hallmark has been its **extensible operating system EOS** where we fuel these platforms and networking connectivity with more and more types of data. We can deal with structured data, unstructured data, flow data and make that all work through our purpose-built software.

</details>

### AI网络与传统网络的区别

**Nicolola**: 那么，**AI**网络与之前的网络有何不同？

<details>
<summary>Original English</summary>

**Nicolola**: And how is networking from **AI** different from what came before?

</details>

**Jayshree**: 是的，非常不同。让我们稍微回顾一下，即使回到20年前的网络，互联网也是通过许多协议诞生的。事实上，在早期，**TCP/IP**和所有这些算法都来自研究社区，即**ARPANET**。但后来出现了多种协议，如**XNS**、**AppleTalk**、**OSI IP**。到了2000年代，**TCP/IP**成为了全球互联网通信的语言。在2015-2020年期间，这已经不够了。人们开始构建一些世界上最大的云，无论是**AWS**、**Azure**、**GCP**（**Google Cloud Platform**）还是更多，它们需要前所未有的规模来触达更多的公司和用户。它必须是多租户的，因为它们不支持一家公司，而是支持数千家公司。因此，一家中型公司的典型**CIO**停止了自己构建东西，他们开始依赖云来处理其任务关键型资产，无论是电子商务应用还是数据库。现在，在过去几年中，**AI**的出现又增加了一个转折点，因为云流量与**AI**流量非常不同。**AI**流量，我们都看到了，随着**ChatGPT**和其他大型语言模型的出现，它带来了千倍甚至百万倍更深、更广的复杂性和搜索级别。因此，这需要更高的**流量模式强度**。所以，通常在**AI**出现之前，我们处理的是所谓的前端网络，连接标准**CPU**、存储、通用查询、索引、搜索等。随着**AI**的到来，我们突然连接了数百、数千甚至数十万个加速器，而这种**GPU**流量，正如我所说，需要非常不同的流量。它在流量的保真度、强度、持久性和峰值突发方面都更加密集。所以我们称之为**后端网络**或**横向扩展网络**。我们必须构建一套几乎完全不同的参数和指标。在我们出现之前，我想说大部分都是零散的孤岛。有**Infiniband**网络、**PCI**网络、**CX**网络，而**Arista**能够将**以太网**和**IP**以及基于标准的功能，就像我们在云中拥有的那样，引入到**AI**的后端。

<details>
<summary>Original English</summary>

**Jayshree**: Yeah, very different. So just to step back a little, if you go back even 20 years in networking the internet was born through a lot of in fact the old days it came the **TCP/IP** and all those algorithms came from the research community the **ARPANET** but then there were multiple protocols things like **XNS** **AppleTalk** **OSI IP** **TCPIP** became the worldwide language of internet communication in the 2000 era. In the 2015-2020 era that wasn't enough. What people were starting to build some of the world's largest clouds whether you think of **AWS** or **Azure** or **GCP**, **Google** or so many more and they needed the kind of unprecedented scale to touch so many more companies and users. It had to be multi-tenant because they were not supporting one company, they're supporting thousands of companies. So a typical **CIO** of a mid-size company stopped building their own things. they started relying on the cloud for their mission critical assets whether it was e-commerce applications or their databases or whatever. Now in comes **AI** the last couple of years and that's adding another twist because cloud traffic is very different than **AI** traffic. **AI** traffic, and we all saw this with the onset of **ChatGPT** and all the other language models is conducting a class of complexity and search that is thousand or million times deeper and greater broader and so this required even more intensity of the traffic patterns. So typically we were doing with before **AI** what we would call front-end networks connecting standard **CPUs** storage general purpose query indexing searching that kind of things with the advent of **AI** we were suddenly connecting hundreds if not thousands or even hundreds of thousands of accelerators and this **GPU** traffic as I said required you to very different traffic it's much more intensive in the fidelity of the traffic, the intensity of the traffic, the durability of the traffic, the peak bursts. So we had this is often called a backend network or a scale up and scale out network. We had to build almost a different set of parameters and metrics and until we came along, I would say majority of this was little islands of things. There was an **Infiniband** network, an **PCI** network, a **CX** network, and **Arista** was able to bring **Ethernet** and **IP** and standardsbased capabilities like we had in the cloud into the back end for **AI**.

</details>

### AI网络建设的挑战

**Nicolola**: 现在构建这些网络的最大限制是什么？

<details>
<summary>Original English</summary>

**Nicolola**: What's the biggest constraint now in terms of building out these networks?

</details>

**Jayshree**: 我想说，整个行业最大的限制是**电力**。

<details>
<summary>Original English</summary>

**Jayshree**: I would say the biggest constraint for the industry at large is power.

</details>

**Nicolola**: 嗯。

<details>
<summary>Original English</summary>

**Nicolola**: Mhm.

</details>

**Jayshree**: 因为这些**GPU**以及网络、电缆、光纤等所有设备的功耗都是前所未有的。过去我们谈论的是兆瓦，现在我们在一个数据中心谈论的是几十吉瓦。打个比方，这比一个足球场还要大，而你正在用吉瓦级的电力来驱动它。所以我们的**AI**提供商或云提供商无法找到如此水平的电力。如果今天你正在寻找这种电力，可能需要3到5年才能找到。**空间和电力**可能是目前最大的问题。

<details>
<summary>Original English</summary>

**Jayshree**: Because the power consumption of these **GPUs** and the network and the cables and the optics and everything is just unprecedented. In the old days, we used to talk about megawatts. Now we talk about tens of gigawatts in a data center. To put this in perspective, this is larger than a football field and you're powering that with gigawatts of capability. So our **AI** providers or cloud providers are unable to find this level of power. If today you're searching for that kind of power, it could take you 3 to 5 years to find it. The space and the power are probably the biggest problem right now.

</details>

**Nicolola**: 但一旦你找到了，你就必须正确地配置它。这就是我们发挥作用的地方。

<details>
<summary>Original English</summary>

**Nicolola**: But once you do find it, you have to outfit it correctly. And that's where we come in.

</details>

**Jayshree**: 没错。所以如果你找到了，你必须打电话给我们。但是，现在大量的资金正涌入**AI基础设施**。您如何看待这一点？这会是一个泡沫吗？发展得太快了吗？

<details>
<summary>Original English</summary>

**Jayshree**: Absolutely. So if you find it, you have to call you guys. But now enormous amounts of money flowing into **AI infrastructure** right now. Just how do you how do you how do you view this? Is it is it a bubble? Is it too fast?

</details>

### AI热潮：泡沫还是趋势？

**Jayshree**: 它的发展确实非常迅速。当我回顾网络从100兆比特到1吉比特，再到10吉比特，最后到100吉比特的演进周期时，这个过程可能每五年发生一次。但从100吉比特到200、400、1.60，最终到3.2太比特的迁移，实际上每一步都在12个月内发生。所以，过去需要5年周期的变化，现在变成了12到18个月的周期。当我们认为去年刚刚完成400吉比特的部署时，今年我们已经在考虑800吉比特和1.6太比特了。

<details>
<summary>Original English</summary>

**Jayshree**: It has happened very fast. When I look at the cycle of how networking progressed from 100 megabit to 1 GB to 10 Gbits to 100 Gbits that process happened every 5 years maybe but the migration from 100 Gbit to 200 400 1.60 and eventually 3.2 terabits is literally all happening within 12 months each. So what used to be 5 year cycles has become 12 to 18 month cycles. So when we think okay we're just done with 400 gig last year we're already thinking of 800 gig and 1.6 terabit this year.

</details>

**Nicolola**: 所以，对速度、规模（因为你需要聚合所有这些吞吐量）以及可预测延迟的永不满足的需求，所有这些都同时向我们袭来。

<details>
<summary>Original English</summary>

**Nicolola**: So the insatiable demand for speed for scale because you got to aggregate all of these throughputs and for predictable latencies all hitting us at once.

</details>

**Nicolola**: 在互联网繁荣时期，您在**Cisco**工作。那么，这与您当时所见相比如何？

<details>
<summary>Original English</summary>

**Nicolola**: You were at **Cisco** during the internet boom. So how does this compare?

</details>

**Jayshree**: 是的。

<details>
<summary>Original English</summary>

**Jayshree**: Yes.

</details>

**Nicolola**: 这与您当时所见相比如何？

<details>
<summary>Original English</summary>

**Nicolola**: How does this compare with what you saw at that stage?

</details>

**Jayshree**: 规模大得多。互联网的繁荣以非常稳定的方式发生。在99-200年期间，由于**互联网泡沫**的兴衰，以及**Y2K**，出现了一个高峰期。但在大多数情况下，互联网花了15年才发展起来。我从1993年**Crescendo**的第一次收购就在那里，当时公司的市值不到10亿美元，到2008年我离开时，它已经是一家400亿到近500亿美元的公司，其中**Catalyst交换机**（我认为它们仍然是**Cisco**最成功的产品线）至少贡献了三分之一。但关键是，它发生得缓慢而稳定，但确实有一个高峰，有一个持续了两年的泡沫。而这次的感觉非常不同，原因有几个。首先，我所说的15年，现在实际上缩短到了5到7年。时间的维度正在缩小。其次，它的规模正在爆炸式增长，是原来的千倍。第三，也许也是最重要的一点，因为人们喜欢将此与我们是否处于泡沫中进行比较。我认为，现在有很多**负责任的公司**，因此我们并没有处于泡沫中，或者如果处于泡沫中，那也是一个**长期存在的泡沫**。它不像那些昙花一现、获得资助然后倒闭的公司。这些是像**微软**、**谷歌**、**Meta**、**Oracle**这样负责任的公司，它们正在承担构建所有这些的责任。更不用说**OpenAI**和**Anthropic**等**新一代云**公司了。所以，我想说，这不仅仅是一个泡沫，它更像是一个**爆炸性的巨大趋势**，并将持续一段时间。

<details>
<summary>Original English</summary>

**Jayshree**: Much greater. The internet boom happened in a very steady fashion. There was a period of time where there was a peak in 99-200 due to the **dot-com boom and bust** I would add and then **Y2K** as well. But for most part that internet took 15 years to develop. I was there from the very first acquisition in 1993 of **Crescendo** when the company was less than a billion dollars to when I left in 2008. it was a 40 or close to $50 billion company where the **Catalyst switches** which I think are still **Cisco's** most successful product line were contributing at least a third. The point though was it happened slowly and steadily but there was a peak there was a bubble for 2 years. This one feels very different for a number of reasons. First of all that 15 years that I was talking about is collapsing literally into 5 to seven years. The time aspect of this is shrinking. Secondly, the scale aspect of it is just exploding in magnitude. It's a thousandx more. And the third perhaps the most important one because people like to make this parallel to are we in a bubble. I think it's a lot of **responsible companies** and therefore we're not in a bubble or if we are in a bubble we're in a prolonged bubble. It's not selex that sort of came in were funded and then they collapsed. These are **responsible companies** like **Microsoft**, **Google**, **Meta**, **Oracle** that are taking responsibility of building all of these. Not to mention the **neoclouds** as well such as **OpenAI** and **Anthropic**. So, I would say more than a bubble, it feels like an **explosive mega trend** that is here to stay for some time.

</details>

**Nicolola**: 在互联网泡沫时期，我们确实存在过度建设。我们如何才能确信这种情况不会再次发生？

<details>
<summary>Original English</summary>

**Nicolola**: We did have overbuilding at the time of the dot-com boom. How can we be confident that it doesn't happen again?

</details>

**Jayshree**: 因为它不可用。电力和容量都不可用。所以没有人能真正过度建设。这需要时间来建设。需求大于我们执行的能力。所以，我认为这仍然会是一个三年的执行过程，而不是1999年发生的那种每个人都匆忙建立公司，然后说“建好了就会有人来”的情况。在这里，不是“建好了就会有人来”。而是“请建好，我们现在就需要”。这是最大的变化。但再说一次，这并不是说我不会纠正自己，说它不是一个泡沫，这意味着它正在以一种猛烈而突然的状态发生，但到目前为止，它比我们都习惯的稳定状态要大得多，但我认为它不是为了一个一年的因素而做的。这是一个3到5年的过程，而且是由负责任的公司在做，他们用金钱投票，因为他们看到了需求。这是最大的不同，需求是真实存在的。

<details>
<summary>Original English</summary>

**Jayshree**: Because it's not available. The power and the capacity is not. So, nobody can really overbuild. It's going to take time to build it. The desires are greater than our ability to execute on it. So, I think it'll still be a three-year execution rather than what happened in 1999 where everybody just hurried up, built these companies, and said build it and it will come. Here, there isn't a build it and they come. It is please build it. We need it now. That's the biggest change. But again, that's not to say that I wouldn't correct myself and say it isn't a bubble, meaning it is happening in a furious sudden state, but I so far greater than the steady state we've all been used to, but I don't think it's being done in a for a one-year factor. It's a 3 to 5 years and it's being done by responsible companies who are voting with their money and because they see demand. That's the biggest difference that the demand is there.

</details>

### 客户集中度与全球AI发展

**Nicolola**: 谈到负责任的公司。所以您最大的客户是超大规模公司，对吗？

<details>
<summary>Original English</summary>

**Nicolola**: Talking about responsible people. So your biggest clients are the hyperscalers, right? The

</details>

**Jayshree**: 没错，云公司，比如**微软**。

<details>
<summary>Original English</summary>

**Jayshree**: Correct cloud companies, the **Microsoft**

</details>

**Nicolola**: 巨头们。

<details>
<summary>Original English</summary>

**Nicolola**: Titans. Yeah.

</details>

**Jayshree**: 是的。

<details>
<summary>Original English</summary>

**Jayshree**: Yeah.

</details>

**Nicolola**: 客户群的集中度如何？

<details>
<summary>Original English</summary>

**Nicolola**: How how how concentrated is the customer base?

</details>

**Jayshree**: 嗯，它们一直都很集中。例如，自2014年我们上市以来，**微软**和**Meta**各自的营收都超过了我们总营收的10%。我不会为这种集中度感到抱歉，反而会为这种合作关系感到高兴和感激。所以它们仍然贡献了我们营收的10%，但当然，随着分母越来越大，我们正在向许多专业云提供商、企业和园区进行多元化发展。但如果我不告诉你它们对**Arista**的战略至关重要，而且合作关系从未如此牢固，那我就是在开玩笑了。

<details>
<summary>Original English</summary>

**Jayshree**: Well, they've always been concentrated. **Microsoft** and **Meta**, as an example, have been more than 10% of our revenue each since we went public in 2014, and I'm not going to apologize for that concentration. I'm going to be pleased and grateful for that partnership. So they continue to be 10% of our revenue but of course as the denominator gets larger and larger. We are diversifying to a lot of specialty cloud providers to the enterprise to the campus but I would be kidding if I didn't tell you they're very very integral to **Arista** strategy and the partnership has never been stronger.

</details>

**Nicolola**: 在构建**AI**能力方面，哪个国家给您留下的印象最深刻？

<details>
<summary>Original English</summary>

**Nicolola**: Which country are you the most impressed by when it comes to building the **AI** capabilities?

</details>

**Jayshree**: 哪个国家？

<details>
<summary>Original English</summary>

**Jayshree**: Which country? Mhm.

</details>

**Jayshree**: 毫无疑问是**美国**，我认为我们处于领先地位。其他国家也有一些零星的进展，但就规模以及我们合作的公司而言，目前大部分都在美国。

<details>
<summary>Original English</summary>

**Jayshree**: Undoubtedly the **United States**, I think we're leading. There are pockets of things happening in other countries, but in terms of scale, and the companies we're working with, majority of that is in the **US** today.

</details>

**Nicolola**: 还有其他您认为做得不错的国家吗？

<details>
<summary>Original English</summary>

**Nicolola**: Any other countries which are which you think are doing the right things?

</details>

**Jayshree**: 当然有。我认为我们在北欧、中东也看到了类似的情况，英国也有一些。韩国和印度也有一些。所以毫无疑问，它也正在走向许多其他国际地区。

<details>
<summary>Original English</summary>

**Jayshree**: Definitely. I think we're seeing pockets of this in the Nordics, in the Middle East, some of it in **UK** as well. Some of it in **Korea** and **India**. So no question it's coming to many of the other international locations as well.

</details>

**Nicolola**: 当您看到投资的流向时，您是否担心这会比以前更加分裂世界？

<details>
<summary>Original English</summary>

**Nicolola**: When you look at where investments are taking place, are you worried that it's going to split the world even more than before?

</details>

**Jayshree**: 不。我看到的大部分投资不是在分裂世界，而是在更多地连接世界。所以值得庆幸的是，它们不是政府资助的。它们都关乎**AI**和技术，以及如何增加通信。我一个月前刚去了中东，那里的发展速度给我留下了深刻印象。他们正在将大量的石油货币投资于重要的**AI**投资和能力。所以我并不认为这是一种分裂，我将其视为一种统一。谈到印象深刻，您现在在**AI数据中心网络**市场中占据了21%的份额，这令人难以置信。您是如何做到的？

<details>
<summary>Original English</summary>

**Jayshree**: No. Majority of the investments I'm seeing are not splitting the world but connecting the world more. So thankfully they're not government sponsored. So they're all about **AI** and technology and how to increase the communication. I was just in the Middle East a month ago and I'm just so impressed with the rate of progress there. Where they are investing a lot of their oil currency into important **AI** investments and capabilities. So I don't look at it as a divide. I look at it as a unity. Talking about impressed, you have now 21% of the market for **AI data center networking** which is incredible. Just how did you get there?

</details>

### Arista的市场份额与成功秘诀

**Jayshree**: 就这些吗？我本来希望更高，但那我们还有工作要做。我们从0%一路漂亮地攀升到了21%。我想如果你看**高速市场**，我们可能更接近41%。但如果你看所有交换机的整体速度，那我们可能更接近你提到的数字。看，这真是一份热爱的工作。公司成立于2008年，并开始出货产品。所以我们并不是一蹴而就的。我们是稳扎稳打地做到的。我认为，要概括**Andy Bechtolsheim**和**Ken Duda**创立的这家公司的文化，我不得不说，我们为我们的软件和硬件基础设施打下了正确的基础，并不断改进它。所以我们的市场份额真正来自于客户对我们创新的认可。我们是由工程师为工程师打造的。我们对**质量**、**架构**以及为客户做正确的事情和支持他们倾注了极大的关注，因为我们身处任务关键型环境的核心，如果我们出了问题，每个人都会知道。如果我们没出问题，我们就是世界上保守得最好的秘密。这对我来说没问题。所以我认为我们一直以非常系统化的方式行事，而不是在产品尚未准备好之前就匆忙推向市场。

<details>
<summary>Original English</summary>

**Jayshree**: Is that all we have? I was hoping it was higher but we got work to do then. We've climbed our way beautifully from 0 to 21. I think if you look at the high-speed market we're more at like 41. But if you look at the general speeds of all switching then we're probably more like the number you mentioned. Look, it's been a labor of love. The company was founded and started shipping products in 2008. So we have not done it in a bolt of lightning. We have done it steadily but surely and really I think to epitomize the culture of this company that **Andy Bechtolsheim** and **Ken Duda** started I would have to say built the right foundation for our software for our hardware infrastructure and keep improving it. So our market share really comes from the fact that our customers appreciate our innovation. We're built by engineers for engineers. We put a maniacal focus on **quality** architecture and doing the right thing for our customers and supporting them because we're sitting there in the heart of a mission critical environment where if we go down, everybody gets to find out. If we don't go down, we're the world's well-kept secret. And that's fine with me. So I think we have acted in a very methodical fashion and not just rushed a product to market before it was ready.

</details>

### 在Cisco的经历与学习

**Nicolola**: 您在**Cisco**工作了15年，建立了他们的数据中心业务。在**Cisco**的巅峰时期，那是一种怎样的体验？

<details>
<summary>Original English</summary>

**Nicolola**: Now you spent 15 years at **Cisco** building up their data center business. Just what was it like being at **Cisco** during kind of the peak levels?

</details>

**Jayshree**: 那不仅仅是数据中心业务。我热爱我在**Cisco**的时光。当我加入**Cisco**时，**Cisco**的营收大约是6.5亿美元，市值是60亿美元。所以它不是一家初创公司，但无疑是一家非常年轻的公司，因此我得到了一个机会，当时公司主要在制造路由器。所以我得到了一个机会，为创建和构建**Catalyst交换机**品牌做出了贡献。最初是**Catalyst 1200**，然后是5000，然后是6500、4000、3000。所以这个交换机品牌从我刚加入时的零，到我仍然记得第一年是4000万美元，第二年是3.65亿美元，第三年是10亿美元。这些事情的发生，无论你的产品多么出色，都离不开万维网和互联网的腾飞。所以我感到很荣幸能成为一艘火箭飞船的一部分。那是一家很棒的公司，但在某个时候，我感觉不对，我不想待在这么大的公司里。我想做一些小一点的事情，但我仍然深情而怀旧地回忆起我在**Cisco**的那些日子和那15年。

<details>
<summary>Original English</summary>

**Jayshree**: It was more than the data center business. I loved my time at **Cisco**. When I joined **Cisco**, **Cisco** was approximately 650 million in revenue and 6 billion in market cap. So wasn't a startup but it was certainly a very young company and so I got a chance and the company was largely building routers. So I got a chance to contribute in creating and building the **Catalyst brand of switches**. First it was **Catalyst 1200** then 5,000 then 6500 4,000 3,000. So this switching brand went from being zero when I first came in there to I still remember the first year was 40 million then 365 million the second year and then a billion the third year and those kind of things don't happen without the worldwide web and the internet taking off no matter how great your products are. So I felt privileged to be part of a rocket ship. It was a great company and but at some point I felt like wait I didn't intend to be in such a large corporation. I wanted to do something smaller, but I fondly and nostalgically remember my **Cisco** days and those 15 years.

</details>

**Nicolola**: 您从那艘“火箭飞船”上学到的最重要的事情是什么？

<details>
<summary>Original English</summary>

**Nicolola**: What was the most important thing you learned from being on that rocket ship?

</details>

**Jayshree**: 我认为和我们这里一样，那就是**专注于客户**。

<details>
<summary>Original English</summary>

**Jayshree**: I think the same thing we have here, which is that focus on customers.

</details>

**Nicolola**: **Cisco**有**以客户为中心**的文化。

<details>
<summary>Original English</summary>

**Nicolola**: **Cisco** has a culture of customer focus.

</details>

**Jayshree**: 我认为**Arista**在这一点上做得更好，同时也在**创新**、**工程**和**质量**方面加倍努力。但我曾作为高管赞助人，在凌晨2点代表**Cisco**接听电话。如果事情很紧急，我就会拿起电话，即使我很重视我的美容觉，但在那个时候，客户更重要。所以，我想说**以客户为中心**的文化非常重要。

<details>
<summary>Original English</summary>

**Jayshree**: I think **Arista** doubles down on that as well as innovation and engineering and quality. But I I've taken calls on behalf of **Cisco** at 2:00 a.m. as an executive sponsor. If something was serious, I'd pick that phone up, even though I value my beauty sleep, that was more important at that point in time. So, I would say the **culture of customers** is super important.

</details>

### 创业选择与Arista的独特之处

**Nicolola**: 您当时很可能成为**Cisco**的下一任首席执行官。那么，您为什么想“跳槽”呢？

<details>
<summary>Original English</summary>

**Nicolola**: Now, you could probably have been the next CEO of **Cisco**. So, why did you want to jump spaceship?

</details>

**Jayshree**: 哦，我不知道我是否会是**Cisco**的合适首席执行官，因为我在**Cisco**是一名“意外”的高管。我甚至没有计划成为我当时的高管。我热爱产品。我热爱

<details>
<summary>Original English</summary>

**Jayshree**: Oh, I don't know if I would have been an I would have been the right CEO for **Cisco** because I was an accidental executive at **Cisco**. I didn't plan to even be the executive I was. I love products. I love

</details>

**Nicolola**: 但您不认为大多数人都是“意外”的高管吗？我的意思是，这并不是说您5岁时坐在印度，就想着“嘿，我将来会成为**Cisco**的超级明星”。我的意思是，

<details>
<summary>Original English</summary>

**Nicolola**: But don't you think most people are accidental executives? I mean, it's all like it's not like you it's not like you are 5 years old and you sit in **India** and think, hey, I'm going to be a superstar in **Cisco**. I mean,

</details>

**Jayshree**: 哦，当然不是。你可以问我父母，我5岁时有多么不是一个超级明星。但撇开这一点不谈，我想说的是，我热爱产品，我热爱与工程师合作，为客户提供产品，我太沉浸于技术兴趣之中，以至于没有想到自己有更广泛的能力或成为**Cisco**首席执行官的愿望。所以实际上，当我离开**Cisco**时，事实是我以为我会做一些完全不同的事情，比如清洁技术、能源、太阳能或电池。我真的想回到硅谷，回到我所热爱的事业根源，那就是成为一名**企业家**。所以我加入了**Arista**，当时它还没有营收，只有30名工程师。我最喜欢的是与我喜欢的人一起工作。

<details>
<summary>Original English</summary>

**Jayshree**: Oh, heck no. that you could ask my parents how little of a superstar I was when I was 5 years old but leaving that for the moment I guess what I'd say is I loved product I loved working with the engineers to enable products to customers and I was too steeped in the technology interests to think I had broader capabilities or desire to be a CEO at **Cisco**. So actually when I left **Cisco** the fact of the matter was I thought I would do something entirely different like clean tech or energy or solar or battery and I really wanted to get back being in **Silicon Valley** to the roots of what I love which was being an **entrepreneur** and so I joined **Arista** when it was zero revenue and with 30 engineers and the most important thing I loved about that which is working with the people I enjoyed.

</details>

**Nicolola**: 那么，假设我现在有一家初创公司，零营收，30个人挤在一个办公室里。我如何才能招募到像您当时那样的超级明星呢？

<details>
<summary>Original English</summary>

**Nicolola**: So let's say now I I have a startup. I got zero revenue, 30 people hanging out in an office. How do I recruit a superstar like you were at the time?

</details>

**Nicolola**: 进入完全的不确定性。

<details>
<summary>Original English</summary>

**Nicolola**: into the total uncertainty.

</details>

**Jayshree**: 是的。不，我认为**Andy**和我的关系可以追溯到很久以前。我们彼此认识。

<details>
<summary>Original English</summary>

**Jayshree**: Yeah. No, I think **Andy** **Andy** and I go back to what was it? We knew each other.

</details>

**Nicolola**: 所以这位是**Andy**？

<details>
<summary>Original English</summary>

**Nicolola**: So this is **Andy**

</details>

**Jayshree**: **Andy Bechtolsheim**，公司的德国联合创始人。所以，我在**Cisco**时收购了他的公司**Granite**。所以我们曾一起工作。当他创立**Sun Microsystems**时，我也在**AMD**制造芯片，我们也有过合作。所以基本上，我们从1987年起就认识了，已经35年甚至更久。所以我想，当他看到我离开时，我真的不知道要去哪里。我不想决定要去哪里。我想清空我的思绪。他说：“嘿，我有一家初创公司。”我当时的第一反应是：“哦，不，**Andy**，我不想再做网络和交换了。”但当我开始了解创始人想做什么以及工程师正在构建什么时，我被吸引住了，因为它是一种带有“**新意**”的网络和交换。它不是我所熟悉的互联网和**Catalyst交换机**。这是一个完全不同的游戏。

<details>
<summary>Original English</summary>

**Jayshree**: **Andy Bechtolsheim**, the German co-founder of the company. So we had bought his company **Granite** when I was at **Cisco**. So we had worked with each other. We worked also when he was at founded **Sun Microsystems** and I was in **AMD** building chips. So basically we've known each other for since 1987 35 years or more. So I think when he saw that I was leaving and I didn't I truly did not know where I was going. I did not want to make a decision on where I was going. I wanted to clear my head. He said hey I got this startup and I said oh my first reaction was oh no **Andy** I don't want to do networking and switching again. But as I got to understand what the founders were trying to do and what the engineers were building, I was intrigued because it was networking and switching with a twist. It was not the internet and **Catalyst switching** like I knew it. It was a completely different ballgame.

</details>

**Nicolola**: 那到底是什么呢？是什么样的“新意”让您产生了兴趣？

<details>
<summary>Original English</summary>

**Nicolola**: And what what exactly was that? What was that twist that made you interested?

</details>

**Jayshree**: 软件，**软件架构**非常独特。你知道，当你看看所有其他网络公司所做的事情时，它们通常有五种操作系统，用于五种用例，乘以50个镜像，你管理着250个。而我们这里只有一个操作系统，一个二进制镜像，拥有大量的**类基础**，我们称之为**状态驱动的发布-订阅模型**。如果某个东西发生故障，它不会只是简单地失败，它会自动恢复该代理。这与圣诞树灯是相反的，圣诞树灯坏了一个，整个都熄灭了。而我们构建的东西是，如果一个灯坏了，我们实际上可以更换那个LED，并让其他所有东西都保持运行，客户甚至不会知道。所以，正是这个软件让我们有权服务于您提到的所有任务关键型、高知名度的客户，当然，我们已经将其应用于各种用例。所以我被这项技术吸引了。我被这些人吸引了，但如果我不告诉你，我也有过焦虑的时刻，那我就是在开玩笑了，因为我加入的那一年是2008年。当时正值金融危机。我赢得的最早的客户之一是**雷曼兄弟**，您知道他们后来发生了什么。

<details>
<summary>Original English</summary>

**Jayshree**: The software the **software architecture** was so unique. When you look at what all the other networking companies have done, they usually have five operating systems for five use cases times 50 images. is you're managing 250. Here we had one operating system, one binary image with a lot of class foundation that we call the **state-driven publish subscribe model** where if something fails, it doesn't just fail, it automatically recovers that agent. And it's the opposite of a Christmas tree light where the Christmas tree light fails, everything goes down. Here we built something where one light failed, we could actually replace that LED and keep everything up and the customer would never know it. So that software has what has earned the right for us to be in all these mission critical high-profile customers you named and then of course we've taken it to a variety of use cases. So I was drawn to that technology. I was drawn to the people but I would be kidding if I didn't tell you there were moments of anxiety because the year I joined was 2008. It was in the middle of the **financial collapse**. One of our earliest customers that I won was **Lehman Brothers** and you know what happened to them after that?

</details>

**Nicolola**: 我知道。

<details>
<summary>Original English</summary>

**Nicolola**: I do.

</details>

**Jayshree**: 所以我在**Arista**的创业生涯有一个不祥的开端，但现在已经17年了，并且发展势头强劲。所以我们并非没有经历过起伏。我们当然经历过。金融危机是一次。我们最大的竞争对手**Cisco**起诉我们是另一次。**COVID**和整个**供应链危机**又是另一次。所以我们克服了许多逆境才走到今天，能处于这个位置感觉很好。

<details>
<summary>Original English</summary>

**Jayshree**: So I had an ominous start to my entrepreneurial career at **Arista** which is now 17 years and going strong. So it's not like we didn't go through ups and downs. We absolutely did. The **financial collapse** was one. Our largest competitor **Cisco** suing us was another. **COVID** and the whole **supply chain crisis** was another. So we have fought a lot of adversity to be where we are and it's good to be good to be in this position.

</details>

**Nicolola**: 要想挑战像**Cisco**这样的巨头，作为一家初创公司，就好像“我们要打败他们”。这需要什么？

<details>
<summary>Original English</summary>

**Nicolola**: What does it take to take on a giant like **Cisco**? You know, be a startup and it's just like, hey, we're going to beat them. Just what does it take?

</details>

**Jayshree**: 我不，我的大多数同事都会告诉你，我从不认为我是在挑战**Cisco**，因为最初我们非常专注于**Cisco**甚至不想涉足或关注的非常具体和独特的用例，比如**高频交易**和**低延迟**。那是一个他们根本不处理的用例，我们最初的1亿美元收入主要来自那里。第二个用例是**云**，**Cisco**再次称之为**MSDC**，也就是**大规模数据中心**，但他们并没有真正关注这个客户群体，也没有试图理解他们为什么这样做。事实上，**AWS**（**Amazon**）和**Google**的早期，他们没有使用**Cisco**，也没有使用**Arista**，因为他们自己构建了，因为他们对自己的需求和市场上可用的产品非常不满意。所以，我再次觉得我们正在填补一个大型企业，特别是**Cisco**，当时没有做到的空白。

<details>
<summary>Original English</summary>

**Jayshree**: I don't I most of my colleagues would tell you I don't think I ever felt I was taking on **Cisco** because initially we were so focused on very specific and unique use cases that **Cisco** didn't even want to be in or pay attention to like **high high frequency trading** and **low latency**. that was a use case they just didn't deal with and our first 100 million came largely from that. second use case was the **cloud** and again **Cisco** used to call it **MSDC** multi- massively scale data centers but they didn't really pay attention to that sector as a sector of customers and try to understand why they did what they did in fact the early days of **AWS** **Amazon** and **Google** they didn't use **Cisco** they didn't use **Arista** because they built their own because they were so dissatisfied with their requirements and what was commercially available So once again I felt like we was fulfilling a white space that the large corporate corporations and in particular **Cisco** were not doing at that time.

</details>

### 卓越的客户服务

**Nicolola**: 卓越客户服务的一个例子是什么？

<details>
<summary>Original English</summary>

**Nicolola**: What is an example of outstanding customer service?

</details>

**Jayshree**: 我可以给你讲很多例子和故事，但让我反过来问你这个问题。如果今天你拿起电话打给**Arista**支持，你认为，如果你有一个网络问题，你认为你会得到什么样的回应或期望？

<details>
<summary>Original English</summary>

**Jayshree**: There are many examples and many stories I could tell you but let me actually ask you that question back. If today you picked up the phone and called **Arista** support, what do you think and you had a network problem and you had a what do you think the response or expectation from you would be?

</details>

**Nicolola**: 嗯，就是你们来解决我的问题。

<details>
<summary>Original English</summary>

**Nicolola**: Well, that you came and sorted out my problem.

</details>

**Jayshree**: 嗯，通常情况下，我们会说：“好的，你是谁？你付过账单了吗？”如果你只是一个随便提问的人，他们会说：“等一下，我们这里没有你的账户。”我们不做这些。我们立即说：“有什么问题？”我们的**平均解决时间**，我们不，就像在急诊室或重症监护室治疗病人一样。你不会问他们20个问题。你直接了解他们的症状并治疗他们。所以我们的**平均解决时间是25分钟**。这是一个闻所未闻的记录。为什么？因为我们充满了专家，我们的**质量**和**支持**是相辅相成的。你构建高质量的产品，如果有人错误配置了它们，或者出现了支持问题，你必须立即到位。所以我们不把这项工作外包给任何人。这是一种**日不落模式**。它是全球覆盖的，任何一天，任何时间，任何时区，我们都会响应并解决问题。有些问题在5分钟内解决，有些可能需要几个小时，但平均时间非常短，而且是一种非常高质量的体验。

<details>
<summary>Original English</summary>

**Jayshree**: Well, typically how it works is we'll say, "Okay, who are you? Have you paid your bills?" If you're just a random asker of questions, they're like, "Wait a minute, we don't have an account on you." We don't do any of that. We immediately say, "What's the problem?" And our **average resolution time**, we don't, it's like treating a patient in an emergency or **ICU**. You don't ask them 20 questions. You get to their symptoms and treat them. So our **average resolution time is 25 minutes**. It's an unheard of record. Why? Because we're filled with experts and our **quality** and **support** go hand in hand. You build high-quality products, if somebody misconfigures them or there is a support problem, you got to be right there. So we don't outsource this to anybody. It's a **follow of the sun model**. It's worldwide coverage any day, any time, any zone and we respond and solve the problem. Some problems are solved in 5 minutes, some may take hours, but the average time is very short and it's a very high quality experience.

</details>

### 持续学习与未来展望

**Nicolola**: 您如何确保自己保持领先？

<details>
<summary>Original English</summary>

**Nicolola**: How do you make sure you stay ahead?

</details>

**Jayshree**: 这需要一些个人时间。所以，我会在我的日程表中安排“思考时间”，在那段时间里我不会开会，因为每个人都想让我开会。我特意保持对事件和技术的了解。例如，**AI**，我个人在2022年和2023年特意加快了学习速度。我当时并没有全身心投入。当2022年11月**ChatGPT**的时刻到来时，我认为这对科技行业来说是一个巨大的里程碑。我记得我必须在2023年1月的**OFC光学会议**上发表演讲，我本可以谈论光学、长途和短途传输、**DWDM**、共封装光学和**DSP**等所有这些，但我却利用那次光学会议来谈论**AI**作为驱动力。为了做到这一点，我必须自己学习和研究，因为你面对的是一群**博士**听众，他们可能在理论上知道得更多。所以我非常自豪于始终学习，或者始终不断突破界限，无论是作为个人，还是与行业同行以及**Arista**内部的同事。我们拥有一支由顶尖技术专家组成的非常强大的团队。

<details>
<summary>Original English</summary>

**Jayshree**: It takes some personal time. So, I will block out think times in my calendar where I just don't do meetings because everybody wants me to do a meeting. I make a point of staying current on events and technologies. **AI** as an example, I made a personal point in 2022 and 2023 to come up to speed. I wasn't paying full-time attention to it. And when the **ChatGPT** moment hit in November of 2022, I think it was a massive sort of milestone for the tech industry. And I remember I had to give a talk at the optical conference **OFC** in January of 2023 and I could have talked about optics and long haul and short hall and **DWDM** and co-ackaged optics and **DSPs** and all of that but instead I used that optical conference to actually talk about **AI** as a driver. And so to do that, I had to learn and study myself because you're talking to an audience of **PhDs** who probably know much more theoretically. And so I take great pride in always learning or always continuing to push the envelope both as an individual and from my peers in the industry and inside of **Arista**. We have a very rich organization of top technical experts.

</details>

**Nicolola**: 您能预见未来多远？嗯，我可能会说错。我能看到足够远，可以预见一些事情可能会发生，但我想说我的准确性在1到3年内是最好的，之后就有点像“蓝天白云”了。

<details>
<summary>Original English</summary>

**Nicolola**: What's the furthest you can see into the future? Not that well I'd be wrong. I can see far far enough to say some things might happen but I would say my accuracy is best in the 1 to three year after that it's a little more blue sky.

</details>

**Nicolola**: 那么未来三年会有什么变化？

<details>
<summary>Original English</summary>

**Nicolola**: And what is going to change over the next 3 years?

</details>

**Jayshree**: 我认为我们目前对**AI**的看法将会发生巨大变化。所以今天我们正在构建**AI**的大型机版本。我们正在讨论集群有多糟糕，可以放入多少百万、亿万、万亿的参数和令牌。这在每秒万亿次浮点运算、万亿瓦特或万亿比特的容量方面会表现出什么？但在我看来，未来三年，虽然这很重要，我并没有低估它。我认为将会发生的是，这会变成一个更加**分布式**的问题。我们无法将所有东西都塞进一个尺寸。就像大型机转向客户端-服务器，最终转向分布式PC、客户端和手机一样，我认为**AI**将采取多种形式和尺寸，包括这个，对吧？

<details>
<summary>Original English</summary>

**Jayshree**: I think the way we think of **AI** right now is going to change dramatically. So today we are building the mainframe version of **AI**. We're talking about how bad are the clusters, how many millions and billions and trillions of parameters and tokens can you put in there. What does that manifest in terms of teraflops or terawatts or terabits of capacity but in my view the next 3 years while that is important I'm not underestimating that. I think what's going to happen is this is going to become much more of a **distributed problem**. We're not going to be able to fit it all into one size. And just as the mainframe moved to client server and eventually distributed **PCs** and clients and phones, I think **AI** is going to take many shapes and sizes and including this one, right? So,

</details>

**Nicolola**: 那么，这会带来什么影响呢？

<details>
<summary>Original English</summary>

**Nicolola**: and what are the and what are the implications of that?

</details>

**Jayshree**: 影响重大，因为**小型化**比说“让我构建最大最强的万能系统”要困难得多。这意味着我必须能够将我的训练模型转化为推理和推断，并在许多用例中以更少的资源做更多的事情。

<details>
<summary>Original English</summary>

**Jayshree**: Significant because **miniaturization** is a lot harder than saying, "Let me just build build the biggest baddest to everything." That means I've got to be able to translate my training models into reasoning and inference and do more with less in a lot of those use cases.

</details>

**Jayshree**: 所以，如果仅仅通过投入带宽、容量和计算能力就能解决问题，那么是的，你可以处理世界上最大的训练工作负载。但如果你能将它应用于推理，并以更**分布式**的方式将其扩展到你的通用计算和存储中，我认为那将是**AI**普及到每个桌面，而不仅仅是为最大最强的系统服务。

<details>
<summary>Original English</summary>

**Jayshree**: So because if you can just throw bandwidth at the problem and throw capacity and compute capability then yeah you can process the world's largest training workloads but if you can apply that and to reasoning and extend that in a more **distributed fashion** all the way into your general purpose compute and storage I think that'll be **AI** to every desktop not just **AI** for the biggest baddest.

</details>

**Nicolola**: 您是否担心技术世界正在美国和中国之间一分为二？

<details>
<summary>Original English</summary>

**Nicolola**: Are you worried that the technology world is splitting in two here between the **US** and **China**?

</details>

**Jayshree**: 嗯，我们今天的两极分化存在政治层面。我希望创新和技术能够在一个公平的竞争环境中发展。但我明白我们都是受不同规则管辖的国家。所以我担心，为了让**美国**保持领先一步，我们必须不断创新，并不断与最优秀的人才合作。我就是一个移民的例子，我不是在这里出生和长大的。

<details>
<summary>Original English</summary>

**Jayshree**: There is a political aspect to how we are polarized today. I wish innovation and technology could be playing an even field. But I understand we're all countries governed by different. So I am worried that for the **United States** to stay ahead and a step ahead, we have to be constantly innovating and constantly partnering with the best talent. I'm an example of an immigrant who came here who wasn't born and raised here.

</details>

**Nicolola**: 所以无论这些人才是在中国、印度、伦敦还是其他地方，我们都需要接触他们，我们需要与最优秀的人才合作。

<details>
<summary>Original English</summary>

**Nicolola**: So whether that talent is in **China** or **India** or **London** or wherever, we need access and we need to be collaborating with the best of the binds.

</details>

### Arista的企业文化与管理

**Nicolola**: 让我们谈谈文化。您会如何用一个词来形容**Arista**的文化？

<details>
<summary>Original English</summary>

**Nicolola**: Let's move on to culture. How would you describe **Arista's** culture?

</details>

**Jayshree**: 用一个词来说，就是“**做正确的事**”。因为太容易了，尤其当我们是一家上市公司时，会专注于季度业绩，专注于某些事情。毫无疑问，每家公司都有一个我们必须关注的商业模式等等。但如果你超越这些，去做正确的事情，那么所有中间的事情都会迎刃而解。我能给你的一个最好的例子是，在我们职业生涯的早期，我们与一家芯片制造商在硬件方面遇到了一个巨大的质量问题。我们与他们合作，他们也与我们合作，我当时可以选择只对软件进行一个小修补，但我全力以赴地向客户解释，说：“看，你们现在可能没有看到问题，但这可能是一个缓慢的衰退，我们愿意自费更换你们所有的设备。”你知道，那在当时几乎可能让我们破产，但我们选择了**做正确的事**。所以，更多的人记得我们做了那件事，即使当时是坏消息，而不是所有好消息，对吧？所以我认为，作为一家公司，为我们的员工，为我们的客户，专注于**做正确的事**，这就是我所描述的**Arista**文化。

<details>
<summary>Original English</summary>

**Jayshree**: in one word, **do the right thing**. Because it's too easy to be, especially when we're a public company, focused on the quarter, focused on something. And no doubt every company has a business model that we have to focus on and all that. But if you look past that and **do the right thing**, then all the intermittent things take care of itself. One of the best examples I can give you is, early in our career, we had a huge quality problem with one of our chip makers with the hardware. We worked with them, they worked with us, and I had a choice of just doing a minor patch on the software, but I went all out to explain this to our customers and say, "Look, you're not seeing the problem right now, but this could be a slow decay, and we want to volunteer to replace all your gear at our cost." That could have nearly made us bankrupt at that time, but we chose to **do the right thing**. So, more people remember that we did that, even though it was bad news at that time, than all the good news. So I think that focus on **doing the right thing** as a company for our employees as a culture for our customers is what I would describe as the oneliner.

</details>

**Nicolola**: 您如何确保这种态度在整个组织中得到贯彻？

<details>
<summary>Original English</summary>

**Nicolola**: How do you make sure that this attitude is shared across the organization?

</details>

**Jayshree**: 这并不容易，尤其是在公司变大之后。但美妙之处在于，作为管理团队，我们在过去15年里几乎都是同一个管理团队。当然，我们偶尔会因为不同的目标或财务成功而失去一些人，但我认为当你拥有相同的管理团队和领导者，而且现在我们正在引入下一代领导者，并**强化这种文化**时，它就会渗透到整个组织。我要说的另一件大事是，虽然我们当然有中层管理人员，但我们确保中层管理人员在这种文化中发挥重要作用，他们不仅仅是专业的经理，更是**教练型选手**，他们用自己的两天的编码工作做出贡献。我的总裁兼首席技术官**Ken Duda**，他是这家公司的创始人，他仍然在编码。这告诉我们的员工，我们正在**以身作则**。我们不是言行不一。

<details>
<summary>Original English</summary>

**Jayshree**: That's not easy especially as you get bigger. But what's beautiful is as a management team, we have pretty much been the same management team for the last 15 years. We lose people occasionally due to alternate goals or financial success, but I think when you have the same management team and leaders and obviously now we're bringing in next generation leaders and you reinforce that culture, then that permeates throughout. And the other big thing I would say is while we of course have middle management, we make sure that the middle management plays an important role in this culture and isn't just a professional manager but a **coach player** that they're contributing with their own two days of coding. My president and **CTO Ken Duda** who's a founder of this company, he still codes. So that tells our employees that we're **leading by example**. We're not saying one thing and doing another.

</details>

### 持续学习与招聘哲学

**Nicolola**: 您如何保持学习？

<details>
<summary>Original English</summary>

**Nicolola**: How do you keep learning?

</details>

**Jayshree**: 我可能学得不够。但是正如我所说，我的学习来源有很多。当我去看客户时，他们教会我很多，因为他们从不同的角度看待问题。所以，这是一个方面。我花了很多时间与我们的工程师在一起，了解他们在做什么以及他们的一些痛点。所以，他们总是在教我。当然，现在你可以通过**Claude**高效地成为一名软件开发人员，或者通过**Gemini**或**ChatGPT**，这些工具无疑让理解复杂主题变得容易。我尽量不依赖它们，除非在我的弱点方面，但这无疑是一个学习来源，我最喜欢的学习部分实际上是阅读，我做得越来越少，但那是我首选的方式。

<details>
<summary>Original English</summary>

**Jayshree**: I probably don't learn enough. But as I said, one of the important my sources of learning are many. When I go to see customers, they teach me a lot because they look at it through a different lens. So, that's one aspect. I spend a lot of time with our engineers to understand what they're up to and what some of their pain points are. So, they're always teaching me. Of course today through you can go to **Claude** and become a software developer with great efficiency or **Gemini** or **ChatGPT** those tools are certainly making it easy to understand complex topics I try not to rely on them except in my points of weakness but that's certainly a source of learning and my most favorite part of learning is actually reading which I do less and less of and but I that that's my go-to

</details>

**Nicolola**: 那么，**Jayshree**，您在招聘时会寻找什么？

<details>
<summary>Original English</summary>

**Nicolola**: So **Jayshree** what do you look for when you hire.

</details>

**Jayshree**: 是的。所以很明显，当你招聘一个人时，他们需要有能力。

<details>
<summary>Original English</summary>

**Jayshree**: Yeah. So obviously when you hire somebody it's very clear they need to be competent.

</details>

**Nicolola**: 所以这涉及到能力和对他们能力的考察。

<details>
<summary>Original English</summary>

**Nicolola**: So there's an element of aptitude and quizzing them on their capabilities.

</details>

**Jayshree**: 但我寻找的是**能力**、**品格**、**道德价值观**、**文化**，以及你是一个怎样的人，你是一个好人吗？因为我想确保这次招聘的人不仅能够产出成果，而且能够与我们长期合作，并拥抱和渗透我们的文化，再次回到**做正确的事**。所以我们肯定会强调着眼于长远，因此我们寻找志同道合的人。事实上，很多人会说：“哦，如果你雇佣一个与你有亲戚关系的人，这算裙带关系吗？”我认为这样很有可能找到一些真正优秀的人，因为亲戚很好，所以他们也一定很好。所以，如果有空缺的话，我总是愿意为**Arista**的员工和他们的大家庭提供实习机会。

<details>
<summary>Original English</summary>

**Jayshree**: But I look for **competence**, **character**, **moral values**, **culture** and what kind of a human being are you a good person? because I want to make sure that this hire is not only capable of producing results but can also be with us in the long run and embrace and permeate our culture again back to **doing the right thing**. So we definitely enforce the look at the long road and so we look for like-minded people. In fact, it's many people say, "Oh, if you hire somebody who's related to you, is it nepotism?" I think there's a good chance you're going to get some really good people that way because the relative is good, so they must be too. So, I'm always willing to give internships to the **Arista** employees, extended family if we if we have openings, of course.

</details>

**Nicolola**: 您的员工中有多少比例有印度背景？

<details>
<summary>Original English</summary>

**Nicolola**: What proportion of your employees have Indian background?

</details>

**Jayshree**: 我想说，因为我们在印度有一个大型设施，所以大概在15%到20%左右。

<details>
<summary>Original English</summary>

**Jayshree**: I would say because we have a large **India** facility it's probably around 15 to 20%.

</details>

### 个人背景与职业感悟

**Nicolola**: 我们可以回到您在印度的成长经历吗？您在新德里长大。那么您5岁时梦想着什么？

<details>
<summary>Original English</summary>

**Nicolola**: Could we go back to your upbringing in **India**? You grew up in **New Delhi**. So what were you dreaming about when you were 5 years old?

</details>

**Jayshree**: 是的。我出生在伦敦，在新德里长大，然后大部分时间都在美国度过。我父亲是一名教育家。所以他梦想着我的教育，并确保我能做得好。他创办了印度的前五所**IIT**（**印度理工学院**），正如您可能知道的，它们非常有名，声誉很高。所以，我认为教育是中产阶级家庭和机构的重要组成部分。所以，在学校表现出色，不仅仅是做得好，而是**在学校表现卓越**，上最好的学校。我父母确保他们能负担得起最好的教育。所以我没有梦想我现在正在做的事情。我更多地是一步一步地梦想着如何在学校做得好？如何进入最好的大学？并没有什么长远的计划。但我能感觉到我父母对我有很高的期望。可能我自己对自己的期望并没有那么高。

<details>
<summary>Original English</summary>

**Jayshree**: Yeah. Well, yeah. I was born in **London**, raised in **Delhi** and then have spent majority of my life in the **United States**. My dad was an educator. So he was dreaming about my education and making sure I do well. He started the first five **IIT** in **India** which as you probably know are very wellknown and high reputation famous. So I think education was a huge part of being a middle class family and institutions. So doing well in school excelling not just doing well excelling in school going to the best schools. My parents made sure they could afford the best education. So I I didn't dream what I'm doing now. I dreamt more one step at a time about how do I do well in school? How do I go to the best colleges? And there was no long-term plans per se. But I I could tell that my parents had high expectations of me. Probably me myself didn't have as many high expectations of myself.

</details>

**Nicolola**: 所有的期望对一个人来说意味着什么？

<details>
<summary>Original English</summary>

**Nicolola**: What does it do to a person to have all these expectations on you?

</details>

**Jayshree**: 有时候它会迫使你表现得比你本来会更好，因为这是一个非常有趣的事情，每当我的爸爸妈妈去参加家长教师协会会议时，他们总是说**Jayshree**很有潜力，但她没有充分发挥出来，她没有达到她最高的潜力。所以他们回来后显然要求更多，期望更多。但我认为教会我的是，我在印度最好的朋友之一，你们会给所有学生排名，所以她总是第一名，而我不是第一名。我注意到她每天学习大约8个小时，为了在这些考试中取得好成绩，我每天学习大约3到4个小时。对我来说，如果你想称之为**高投资回报率**，虽然我的排名不如她，但我仍然做得很好。我排在前10%。我试图说服我的父母我是在打持久战。今天看起来可能确实如此，但当时更多的是一个不学习8小时的借口。

<details>
<summary>Original English</summary>

**Jayshree**: Sometimes it forces you to perform better than you would because it's a very interesting thing that anytime my dad or mom went to meet my teachers at a parent teacher association they'd always say **Jayshree** has a lot of potential but she's not using it all she's not fulfilling to her highest potential and so they come back obviously demanding more expecting more but I think what taught me was one of my best friends in **India** you rank all the students so she always came first and I didn't come first and I noticed that she would work about 8 hours a day in terms of studying and to do well in these exams I would work more like 3 to four hours a day and to me that rich **ROI** if you want to call it that to get a rank that was not as good as hers but Still I did well. I was in the top 10%. I tried to convince my parents I was playing the long game. And today it may look like I was, but at that time it was more an excuse to not study 8 hours a day.

</details>

**Nicolola**: 您学习的是**电气工程**，这在当时对女性来说并不常见。

<details>
<summary>Original English</summary>

**Nicolola**: You studied **electrical engineering** which was not very common for women at that time.

</details>

**Jayshree**: 不，一点也不常见。

<details>
<summary>Original English</summary>

**Jayshree**: No, not at all.

</details>

**Nicolola**: 那么您是如何选择这个专业的呢？

<details>
<summary>Original English</summary>

**Nicolola**: So how come you ended up there?

</details>

**Jayshree**: 是的，我是通过排除法最终选择了那里。我喜欢物理，喜欢化学，喜欢数学。我不喜欢生物。我在艺术系方面表现不佳，我想，有什么能给我带来**解决问题**和**计算机科学**的交叉点呢？在我的时代，计算机科学仍然是一个相当罕见的领域。如果当时有的话，我可能会做得更多。我不得不在数学系上我的计算机科学课程，学习**Fortran**、**C++**和**汇编语言**。所以我上了一些课，但**电气工程**是核心工程，它正在回归。我希望在这个越来越多地涉及硅、芯片和硬件设计的现代世界中，更多的人会选择它。所以我想，我受到了父亲创办**IIT**的影响，他认为将科学应用于现实世界的问题，这正是我认为工程学的真正含义，这让我很兴奋。

<details>
<summary>Original English</summary>

**Jayshree**: Yeah, I ended up there through elimination. I loved physics, I loved chemistry, I loved math. I did not like biology. I was not as good in the arts departments and I thought what is it that can give me this intersection of **problem solving** and **computer science** was still a pretty rare field in my era. Probably if that had been there I would have done more of it. I had to take my **computer science** classes in the math department for **Fortran** and **C++** and **assembly**. So it was I took a few classes but **electrical engineering** was the hardcore engineering and it's coming back. I wish more people will do it now in this modern world of more and more silicon and chip and hardware design. So I think and I had been influenced by my father starting the **IIT** that applying science to real world problems which are what which is what I think engineering really is was something that excited me.

</details>

**Nicolola**: 现在您被认为是科技界工作最努力的人之一。您工作了多少时间？

<details>
<summary>Original English</summary>

**Nicolola**: Now you are considered one of the hardest working people in technology. Just how much do you work?

</details>

**Jayshree**: 我认为当你热爱你所做的事情时，就不会觉得工作很辛苦或时间很长。你是在享受它。

<details>
<summary>Original English</summary>

**Jayshree**: I think when you love what you do, it doesn't feel like you're working hard or working long. You're enjoying it.

</details>

**Jayshree**: 此外，作为首席执行官，责任都在你身上。我肩负着责任。所以，我想说我妈妈也这么说。你工作太努力了。你工作太努力了。我说：“妈妈，我热爱我正在做的事情。”所以我没有记录工作时间，因为平衡工作与健康和家庭对我来说一直很重要，但坦率地说，我显然需要更多的爱好。也许那样我就会少工作一点。

<details>
<summary>Original English</summary>

**Jayshree**: Also, as a **CEO**, the buck stops with you. And I have a responsibility. So, I would say my mom says the same thing. You work too hard. You work too hard. And I say, "Mom, I love what I'm doing." So I haven't kept track of the hours because it has always been important to me to balance my work with my health and my family but frankly I clearly need a few more hobbies. Maybe then I'll work a little little less hard.

</details>

**Nicolola**: 您的爱好是什么？您有什么爱好吗？

<details>
<summary>Original English</summary>

**Nicolola**: What are your hobbies? Do you have any hobbies?

</details>

**Jayshree**: 我过去经常跑步，但膝盖受伤了，所以现在我走路。我经常徒步旅行。我们的狗是其中很大一部分。我的家人，我们都喜欢某种形式的音乐。所以，虽然我不打算公开唱歌，但仍然很有趣。淋浴时的音响效果真的很好。任何人都能唱得好。现在，你也可以使用足够的合成器来唱得好。所以我喜欢那样。我喜欢阅读。

<details>
<summary>Original English</summary>

**Jayshree**: I used to run a lot but I've hurt my knees so I walk. I do a lot of hikes. Our dog is a big part of that. My family, we're all into music of some form or shape. So, while I don't plan to do any public singing, it's still a lot of fun. The acoustics in a shower, it sound really good. You can, anybody can sound good. And these days, you can use enough synthesizers to sound good, too. So, I love that. I love to read.

</details>

**Nicolola**: 您读什么书？

<details>
<summary>Original English</summary>

**Nicolola**: What do you read?

</details>

**Jayshree**: 我读了很多传记。最近读得不多，但当我阅读时，通常是在长途飞行中，要么我会打印并发布一份规范并阅读技术文档，要么我会读一本完全不用动脑筋的小说，比如**John Grisham**的作品，或者其他不需要思考的东西，因为那是我的休息时间，但我宁愿阅读也不愿看电影。

<details>
<summary>Original English</summary>

**Jayshree**: I read a lot of bio. I haven't read as much recently but when I do read it's usually on long distance flights and either I will print and publish a spec and read a technical document or I will read a completely brainless novel like a **John Grisham** or something where I don't have to think about things because that's my downtime but I'd rather read than watch a movie.

</details>

**Nicolola**: 回顾您的人生，您最引以为傲的是什么？

<details>
<summary>Original English</summary>

**Nicolola**: When you look at your life what are you the most proud of?

</details>

**Jayshree**: 我最引以为傲的是我的家人。我想说我的女儿们、我的丈夫、我的大家庭，他们给了我很多快乐，因为在那一点上，这不仅仅关乎我。这关乎他们。我最近从我的母校**圣克拉拉大学**获得了荣誉博士学位，但我的女儿们真的获得了兽医科学的博士学位。所以我为她们的价值观感到高兴。我很高兴她们是富有同情心的人，我很高兴她们追求自己的卓越之路。

<details>
<summary>Original English</summary>

**Jayshree**: I'm most proud of my family. I would say my daughters, my husband, my extended family, they give me a lot of joy because it's at that point it's not just about me. It's about they I recently I got a honorary doctorate degree from my alma mater **Santa Clara University** but my daughters really did a **PhD** and a doctorate in veterinarian science. So I'm I'm happy for their values. I'm happy they're compassionate people and they're happy that they've pursued their path of excellence.

</details>

**Nicolola**: 您会给年轻人，包括您的女儿们，什么样的建议？

<details>
<summary>Original English</summary>

**Nicolola**: What kind of advice do you give to young people including your daughters?

</details>

**Jayshree**: 这就是我经常给的建议，因为他们都似乎很渴望在职业生涯的某个时间点达到某个目标。我说，看，**追求你的卓越之路**。我们每个人都有天赋，这也意味着我们擅长某些事情，我们在某些事情上非常糟糕。但如果你能找到你擅长的事情，并改进它，在此基础上发展，并在这方面变得卓越，并不断努力，我认为每个人都会定义自己的**卓越之路**。它不总是仅仅用金钱来衡量。它应该用达到你认为是成功的那个目的地来衡量。

<details>
<summary>Original English</summary>

**Jayshree**: This is a lot of the advice I give because they all they they seem anxious to get to a certain point in a certain time in their career. And I say look **pursue your path of excellence**. Every one of us has a gift, which also means we're good at some things. We're very bad at some things. But if you can find the things you're good at and improve that and build upon that and become excellent at it and keep working on it, I think everybody defines their path to excellence. And it isn't always measured by money alone. It should be measured by reaching that destination of what you deem to be success.

</details>

**Nicolola**: **Jayshree**，看起来您在印度的老师们完全错了。看来您已经充分发挥了自己的潜力。非常感谢您让世界保持连接，祝您一切顺利。

<details>
<summary>Original English</summary>

**Nicolola**: **Jayshree**, it seems like your teachers back in **India** were totally wrong. It seems to be that you have absolutely use your potential to the fool. Big thanks to you for keeping the world connected and all the best of luck.

</details>

**Jayshree**: 谢谢您，**Nicolola**。我的荣幸。感谢您所有深思熟虑的问题。

<details>
<summary>Original English</summary>

**Jayshree**: Thank you, **Nicolola**. My pleasure. Thank you for all the thoughtful questions.

</details>

**Nicolola**: 谢谢。

<details>
<summary>Original English</summary>

**Nicolola**: Thank you.

</details>