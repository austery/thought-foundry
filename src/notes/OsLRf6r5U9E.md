---
area: society-systems
category: geopolitics
companies_orgs:
- Google
- Cisco
- a16z
- Nvidia
- Broadcom
date: '2025-10-29'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Bigtable
- Spanner
- TensorFlow
- JAX
- CodeX
- Cursor
- ChatGPT
- TPUs
- GPUs
project:
- ai-impact-analysis
- geopolitics-watch
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=OsLRf6r5U9E
speaker: a16z
status: evergreen
summary: 本次讨论深入探讨了AI时代所需的基础设施建设，将其与互联网、太空竞赛和曼哈顿计划相提并论，强调其地缘政治、经济和国家安全影响。与会者指出，当前AI基础设施的扩张速度是互联网时代的百倍，且需求被严重低估。讨论涵盖了电力、计算和网络作为核心限制因素，以及专用处理器（如TPU）和新型网络架构的重要性。此外，还分享了AI在谷歌和思科内部的应用案例，并为初创企业提供了关于模型与产品紧密结合的建议，展望了多模态AI的未来变革。
tags:
- ai-infrastructure
- ai-productivity
- architecture
- geopolitical-competition
- technology
title: AI基础设施的未来：谷歌、思科与a16z的深度对话
---

### AI基础设施：新时代的“性感”投资

好消息是，基础设施再次变得“性感”起来。这很酷，因为它结合了互联网的建设、太空竞赛和曼哈顿计划的特点，并融入了地缘政治、经济、国家安全以及速度的深刻影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The good news is infrastructure is sexy again. So that's kind of cool. This is like the combination of the buildout of the internet, the space race, and the Manhattan project all put into one where there's a geopolitical implication of it. There's an economic implication, there's a national security implication, and then there's just a speed implication that's pretty profound.</p>
</details>

我认为，现在很容易说“我从未见过这样的景象”，而且我很确定没有人见过。上世纪90年代末、21世纪初的互联网规模庞大，我们当时觉得“天哪，难以置信它的建设速度”。但现在这个规模，说它比互联网大10倍都是轻描淡写，实际上是100倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, I think it's easy to say. I've seen nothing like this. I'm fairly certain no one's seen anything like this. The internet in the late 90s, early 2000s was big and we felt like, oh my gosh, can't believe the uh buildout, the rate. This makes it I mean 10x is an understatement. It's 100x what the internet was.</p>
</details>

### 前所未有的基础设施周期与挑战

两位嘉宾都已在行业内工作多年，经历过许多基础设施周期。那么，从你们的角度来看，这个周期有何不同？不是从投资者的角度，而是从你们作为负责建设和规划的内部视角来看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hello. Hello. All right. What better time and place to talk infrastructure? All right. So, we were back in the green room and just as um the first question was getting answered, I got cut off. So, this could be an entire repeat for all I know. So, but anyway, let's go. Right. Um the first question is similar. So, both of you firstly welcome and thank you for being here. and hope you'll have a great day and a half as well. Um, both of you been in the industry for a while and both of you have lived through many infrastructure cycles, right? So, have you seen anything like this cycle from your vantage point? Not from an investor vantage point but from your internal um vantage point where you are responsible for building things and and planning for things and so on. Anyone of you? Where do you want to start? You want to start a mean?</p>
</details>

我认为，现在很容易说“我从未见过这样的景象”。我很确定没有人见过这样的情况。上世纪90年代末、21世纪初的互联网规模庞大，我们当时觉得“天哪，难以置信它的建设速度”。但现在这个规模，说它比互联网大10倍都是轻描淡写，实际上是100倍。我认为其潜在的增长空间与互联网一样巨大，也是10倍甚至100倍。是的，前所未有。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, I think it's easy to say. I've seen nothing like this. I'm fairly certain no one's seen anything like this. The internet in the late 90s, early 2000s was big, and we felt like, oh my gosh, can't believe the uh build out, the rate. This makes it I mean 10x is an understatement. It's 100x what the internet was. Um I think the upside is as big as the internet was, same thing. 10x and 100x. Yeah. No, nothing like it.</p>
</details>

是的，我同意。我认为在规模、速度和范围上都没有先例。好消息是，基础设施再次变得“性感”起来，这很酷。它曾有很长一段时间不那么“性感”。我认为真正有趣的是，这就像是互联网建设、太空竞赛和曼哈顿计划的结合体，其中包含了地缘政治、经济、国家安全以及非常深刻的速度影响。所以，我们所有人都从未见过如此规模和范围的景象。另一方面，我认为我们严重低估了这次建设的规模。我目前最常被问到的问题是：是否存在泡沫？我认为我们严重低估了建设的规模。我认为实际需求将远超我们目前的预测。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I'd agree. I don't think there's any priors to this size, the speed and scale. Um I' I'd say um the good news is infrastructure is sexy again. So that's kind of cool. Um it was a long time or it wasn't sexy. Um the um the thing I would say that's that's really interesting is this is like the combination of the buildout of the internet, the space race and the Manhattan project all put into one where there's a geopolitical implication of it, there's an economic implication, there's a national security implication, and then there's a um you know just a speed implication that's pretty profound. So uh yeah, we've, you know, none of us have ever seen it um at this size and scale. On the other hand, um I think we're grossly underestimating like there's the most common question I ask right now is is there a bubble? I think we're grossly underestimating the buildout. I think there's going to be much more needed than what we are putting the um you know projections towards.</p>
</details>

那么接下来的问题是，您认为我们目前处于资本支出周期的哪个阶段？更重要的是，你们内部在思考时会使用哪些信号？你们需要提前四五年规划数据中心，购买核反应堆等等。那么，你们如何看待需求信号和技术信号呢？对于企业和**新云**（NeoClouds: 新兴的、通常专注于特定工作负载或提供差异化服务的云提供商）等来说，情况也一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's the following question is where are we do you think in the capex spend cycle? But more importantly, what are the signals that you guys use internally right in your thinking? I mean, you have to plan data centers whatever four five years in advance. You have to buy nuclear reactors and whatnot. So, how do you think about the demand signals as well as your technology signals and G2 same thing for you, but from the point of view of enterprise and neo clouds etc.</p>
</details>

我认为我们正处于周期的早期阶段，特别是相对于我们目前看到的需求而言。我们的内部用户——我们已经构建**TPU**（Tensor Processing Unit: 谷歌开发的专用人工智能加速器芯片）十年了，现在有七代**TPU**投入生产，供内部和外部使用。我们七八年前的**TPU**利用率达到100%，这表明了巨大的需求。每个人当然都希望使用最新一代的**TPU**，但他们能拿到什么就用什么。这告诉我需求是巨大的，而且我们正在拒绝一些客户和用例。这不仅仅是“哦，这很酷”，而是“天哪，我们实际上不会投资这个，而且没有其他选择，因为我们就在这个名单上”。在座的许多人也是如此，对吧？我们正在与在座的许多人合作，许多人直接告诉我，我们需要更多，而且要更早。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh we're early in the cycle is uh what what I would say certainly relative to the demand that we're seeing our internal users are uh we've been building TPUs for 10 years uh so we have now seven generations in production for internal and external use our seven and 8y old TPUs have 100% utilization and that that just shows what the the demand is everyone would of course prefer to be on the latest generation uh but whatever they can get so this tells me that the demand is tremendous, but also who we're turning away and the use cases that we're turning away. It's it's not like, oh yeah, that's kind of cool. It's, oh my gosh, we're actually not going to invest in this and there's no option because that's where we are on the list. Same with many of you in the room, right? We're we're working with many of you in the room and many of you are telling me directly and thank you. Um, we need more earlier, right?</p>
</details>

然而，这里的挑战是，正如你所说，我们受到电力、土地改造、许可审批以及供应链中许多备用交付的限制。因此，我担心的是，供应实际上无法像我们所有人希望的那样迅速赶上需求。我听前一节会议讨论了一些我们将要花费的数万亿美元，我认为这是准确的。我不确定我们是否能够兑现所有这些承诺。换句话说，你们所有人都有这么多钱，但无法像你们希望的那样快速花掉。我认为这种情况将持续三、四年，甚至五年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the challenge here though is as you said that we're limited by power, we're limited by transforming land. We're limited by um permitting and we're limited by uh backup delivery of uh lots of things in the supply chain. So one worry I have is that uh the supply isn't actually going to catch up to the demand as quickly as uh we'd all like. I I heard the previous session some of the discussions of the um trillions of dollars that we're going to be spending which I think is accurate. I'm not sure that we're going to be able to cash all those checks. Like in other words, literally you all have so many money you can't spend it all as fast as you want. I think that's going to extend for 3, four, 5 years.</p>
</details>

哇。那你们如何处理其中涉及的折旧周期呢？需求曲线和折旧周期曲线是否匹配？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wow. And how do you deal with the depreciation cycles that are involved there? Is the demand curve and the depreciation cycle curves match up?</p>
</details>

幸运的是，我们采用**即时采购**（Just-in-Time: 一种库存管理策略，旨在减少库存，提高效率）。硬件的折旧周期是即时的，但空间电源的折旧周期更像是25到40年之间。所以我们在这方面有优势。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, fortunately we buy just in time. But the nice thing is just in time for the hardware the depreciation cycle for the space power is more like uh somewhere between 25 and 40 years. So we have uh benefits there.</p>
</details>

### 企业、超大规模云与新云的差异

我认为，如果你从网络侧来看，无论是企业、**超大规模云**（Hyperscalers: 拥有庞大计算、存储和网络资源的全球性云服务提供商，如Google Cloud、AWS、Azure）还是**新云**（NeoClouds），情况都大相径庭。企业在真正的基础设施建设方面相当迟缓。我只是不认为数据中心——如果你假设所有数据中心在某个时间点都需要重新配置机架，并且每个机架需要非常不同的电力需求，与传统数据中心相比，企业在这方面还远远不够。也许少数超大规模企业可能已经做到了，但我认为大多数企业还远远没有达到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think if you think of on the networking side and you look at both um um enterprise and the hyperscalers as well as neoclouds I think the story is quite different. So the the the enterprise is pretty nent in its buildout of true infrastructure. Um I just don't think that the data centers like if you assume that 100% of the data centers are at some point in time you will need to get rerracked and you will need a very different level of power um requirement per rack that's going to be there compared to what used to be there in the traditional data centers. I just don't think that um the enterprises are far enough along. Maybe the few enterprises that are at super high scale might be there, but I don't think the enterprises are far enough along.</p>
</details>

**超大规模云**和**新云**则完全是另一回事。关于电力、计算和网络是三大主要制约因素的观点，我认为目前由于单个地点没有足够的电力，数据中心正在建在有电力的地方，而不是将电力引入数据中心所在地。这就是为什么你看到世界各地都在建设大量项目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hyperscalers and NeoClouds is a completely different story. And uh to A mean's point on this notion of scarcity of power, compute and network being the three big kind of constraints in this thing. Um I I would say right now that because there's not enough power singularly in one location, data centers are being built where the power is available rather than power being brought to where the data centers are.</p>
</details>

另一个观点是，我认为我们将面临的大部分限制将在很长一段时间内持续存在。随着数据中心越建越远，首先，对**纵向扩展网络**（Scale-up Networking: 增加单个设备或节点的能力以处理更多负载）的需求将非常巨大，这样你就可以拥有一个为纵向扩展提供越来越多网络的机架。其次，对**横向扩展网络**（Scale-out Networking: 通过增加更多的设备或节点来扩展系统，而不是增加单个设备的能力）的需求也将很大，你需要连接多个机架和集群。但我们刚刚推出了一款新的芯片和系统，用于**跨区域扩展网络**（Scale-across Networking: 跨越地理位置分散的数据中心进行扩展和连接），你可以让两个相距800到900公里的数据中心作为一个逻辑数据中心运行。你将看到这种情况，仅仅是因为单个地点没有足够的电力集中。因此，你将不得不构建不同的架构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and that's why you're seeing a lot of projects that are being built out all throughout the world. The other point though is the um the the lion share of the constraints that we're going to have I I think are going to be sustainable for a for a long period of time. And as you have data centers that are being built farther and farther apart one there's going to be a huge demand for scale up networking so that you can have a rack that gets more and more networking for scale up. The second is you're going to have a lot of demand for scale out where you have multiple racks and clusters that need to get connected together. But we just launched a a new piece of silicon as well as a new chip and a system for scale across networking where you might have two data centers that act as a logical data center that could be up to 8 900 kilometers apart. Um and and you will see that just because there's not going to be enough concentration of power in a single location. So you'll just have to have different architectures that get built out.</p>
</details>

### 计算架构的演变：从商品服务器到专用系统

这实际上引出了我想讨论的下一个话题：系统和网络的未来等等。谷歌带来了第一个，或者至少是大规模的横向扩展商品服务器，用于网络革命的生产。现在**英伟达**（Nvidia: 全球领先的图形处理器和人工智能计算公司）正在以不同的形式带回**大型机**（Mainframe: 一种大型计算机，通常用于处理大量数据和关键任务）。那么，您认为接下来会发生什么？我的意思是，这是我们所需的新型连贯集群范围计算模式吗？会有共享内存和各种东西吗？还是您认为模式会再次改变？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Actually that brings us uh to the next topic that I want to discuss the future of systems and networking and so on and so forth. So Google brought about the first or at least large scale scale out commodity servers and production for the web revolution and now Nvidia is bringing back the mainframe in a different form. So what do you think happens next? I mean, is is this the new style of coherent clusterwide computing that we need and there's going to be shared memory and all sorts of things or do you think the pattern changes again?</p>
</details>

我并不认为我们完全回到了**大型机**时代，因为人们仍然在这些资源池上运行**横向扩展架构**（Scale-out Architectures: 通过增加更多节点来扩展系统容量的设计模式）。换句话说，无论你拥有**GPU**（Graphics Processing Unit: 图形处理器，常用于并行计算）还是**TPU**，你并不一定说“嘿，那是我的**GPU**超级计算机”，而是说“我有16,384个**GPU**”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I don't think we're quite to um back to mainframes in that it is still the case that people are running on uh scale out architectures across these pools. In other words, whether you have GPUs or TPUs, you're not necessarily saying, "Hey, that's my GPU supercomput." You're saying, "I've got 16,384 GPUs." Y</p>
</details>

也许我会抓取其中一部分。现在在许多情况下，我拥有统一的全连接，这非常棒。**TPU**也是如此。我不会说我有一个9000芯片的**Pod**，我的任务必须适应它。也许我实际只需要256个，也许我需要10万个。所以我确实认为软件的横向扩展仍然会存在。不过，我想指出两点。第一，你绝对正确，大约25年前，在谷歌和其他地方，计算基础设施确实发生了一场变革，即你可以在商品**PC**（Personal Computer: 个人电脑）上进行横向扩展，本质上就是你可以买到的现成**PC**，运行**Linux**堆栈。这就是你处理磁盘、计算和网络的方式。我的意思是，你们都认为这是理所当然的，但这在当时是激进的，许多人认为这是一个糟糕的想法，不会成功。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and maybe I'm going to go grab some subset. Now I've got uniform all connectivity uh in many cases which is fantastic. Same with TPUs. It's not like I say I have a 9,000 chip pod and I have to make my job fit on that. Maybe I actually only need 256. Maybe I need 100,000. So I do think that actually the uh software scale out is uh still going to be there. Uh I'll note two things though. one you're absolutely right that say about 25 years ago uh at Google and other places simultaneously there was really a transformation of computing infrastructure like the notion that actually you would scale out on commodity PCs essentially the same ones that you could buy off the shelf running a Linux stack and that's what you would do for disk that's what you would do for compute that's what you do for networking I mean you all take it for granted that this is sort of it was radical there are many people who thought that this was a terrible idea that wasn't going to work.</p>
</details>

我认为现在这个时刻令人兴奋的是，我们实际上将要重新发明计算。我不是说谷歌，而是我们所有人将要重新发明计算。五年后，无论计算堆栈是什么，从硬件到软件，都将面目全非。顺便说一句，这是一种协同设计，因为如果你想想看，我将以谷歌的例子来说明，因为我最了解它们：**Bigtable**、**Spanner**、**GFS**、**Borg**、**Colossus**，它们都是与硬件、集群横向扩展架构图协同设计的。如果没有横向扩展软件，我们就不会做横向扩展硬件。同样的事情也会在现在发生。所以，我认为**大型机**将看起来非常非常不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think the exciting thing about this moment right now is actually that we're going to be reinventing I'm not saying Google we are going to be reinventing computing and 5 years from now whatever the computing stack is from the hardware to the software right is going to be unrecognizable and by the way there was this code design because if you think about it I'll use Google examples because I know those best big table spanner GFS Borg Colossus they were handinhand codeesigned with the hardware the cluster scale out architecture picture and it was really the com we wouldn't have done the scale out hardware if you didn't have the scale out software same thing is going to happen in this moment so I I think actually the mainframe um it's going to look very very different.</p>
</details>

是的，我确实认为对集成系统会有极大的需求。因为现在**思科**（Cisco: 全球领先的网络设备制造商）非常幸运，我们从物理层到语义层，从芯片到应用程序，无所不包。除了电力，另一个制约因素是这些系统的集成程度如何，以及它们在整个堆栈中是否以最小的**损耗**（Lossiness: 数据或信号在传输或处理过程中丢失或失真）运行。因此，这种紧密的集成将变得极其重要。这意味着行业必须发展，即使我们可能是多家公司，但我们必须像一家公司一样运作。因此，当我们与谷歌或其他**超大规模云**合作时，会进行长达数月的深度设计合作，甚至在实际交易之前就开始。一旦交易完成，当然会有巨大的压力确保进展迅速。但我认为，行业在确保在开放生态系统中运作而非**围墙花园**（Walled Garden: 指一个封闭的生态系统，用户只能访问提供商允许的内容和服务）方面的能力，将在堆栈的每一层都变得重要。完全同意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">okay yeah I do think there'll be like this ex uh extreme demand for an integrated system because like right right now we are very fortunate at Cisco where we do everything from the um from the physics to the semantics you know you think about the silicon to the application Um and the other than power, one of the constraints is how well integrated are these systems and do they actually work with the least amount of um lossiness uh across the entire stack. And so that that level of tight integration is going to be super important. And what that means the industry will have to evolve into is we will have to work like one company even though we might actually be multiple companies that actually do these pieces. And so when we work with hyperscalers like Google or others um there's a deep design partnership that actually you know goes on for months and months together uh ahead of the time before we actually even do them uh deal and then once a deal is done of course there's a tremendous amount of pressure to make sure that the you moving pretty fast but I think the industry's muscle of making sure that you operate in an open ecosystem and not be a walled garden is going to get important at every layer of the stack. Y completely agree.</p>
</details>

### 处理器与网络的专业化趋势

那么，让我们稍微解构一下堆栈。最有趣的话题之一是处理器。显然，目前有一家了不起的供应商生产着一款拥有巨大市场份额的了不起的处理器。我们看到初创公司不断推出各种处理器架构。你们的“堡垒”内部也有一个了不起的处理器。您认为处理器领域接下来会发生什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so let's talk about the disagregate the stack a little bit. One of the most interesting topic is processors, right? Clearly there's an amazing vendor producing an amazing processor that has massive market share today, right? And we see startups all the time doing all sorts of processor architectures. You got an amazing processor inside um your fortress. What do you think happens next in processor land?</p>
</details>

是的，我们是**英伟达**的忠实粉丝。我们销售大量的**英伟达**产品和芯片。客户很喜欢它们。我们也是我们**TPU**的忠实粉丝。我认为未来实际上非常令人兴奋。我们并没有达到“好吧，有**TPU**、有**GPU**、有**Tranium**或其他什么”的程度。我们真正看到的是专业化的黄金时代。这是我的观察。换句话说，如果你看看**TPU**，我再次以它为例，因为我最了解它，对于某些计算，它的每瓦效率比**CPU**（Central Processing Unit: 中央处理器）高10到100倍。而真正重要的是这个“瓦特”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we're uh huge fans of Nvidia. Uh we we sell a lot of uh Nvidia uh products and chips. Uh customers love them. Uh we're also huge fans of our uh TPUs. Uh I think the future is actually really exciting and actually uh we're it's not that I don't think that we've hit the point of okay there's TPUs, there's GPUs, there's whatever tranniums or or something else. We're really seeing the golden age of specialization. And that that's my observation. In other words, if you look at it, a TPU, I'll use that example again because I know it best for certain computation is somewhere between 10 and 100 times more efficient per watt. And it's this watt that really matters than a CPU.</p>
</details>

这很难放弃，对吧？10到100倍的效率。然而我们知道，还有其他计算，如果你为此构建更专业的系统，而且不仅仅是小众计算，而是我们在谷歌运行的大量计算，例如，可能用于服务或**代理工作负载**（Agentic Workloads: 指由AI代理自主执行的任务或流程），这些将受益于更专业的架构。所以我认为，一个瓶颈是开发专业化架构的难度和所需时间。目前，这个过程漫长得像“永远”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's hard to walk away from, right? 10 to 100x. And yet we know that there are other computations that if you built even more specialized systems for, but not just a niche computation, computations that we run a lot of at Google, right? for example, uh maybe for serving maybe for agentic workloads that would benefit from an even more specialized architecture. So I think that actually one bottleneck is how hard is it and how long does it take to turn around a specialized architecture. Right now it's forever.</p>
</details>

对于世界上最好的团队来说，从概念到实际投入生产，最快也需要两年半的时间。我的意思是，那是在你一切都完美的情况下，对吧？少数团队能做到，但你如何预测两年半后的未来，来构建专业化硬件呢？所以，第一，我认为我们必须缩短这个周期。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Right. For the best teams in the world really from concept to in live in production speed of light is two and a half years. Yeah. I mean that's that's if you nail everything, right? And there are a few teams that do, but how do you predict the future two and a half years out for building specialized hardware? So, A, I think we have to shrink that cycle.</p>
</details>

第二，在某个时候，当事情稍微放缓时，我认为我们将不得不构建更专业的架构，因为电力、成本和空间节省实在太显著，不容忽视。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then B, at some point when things slow down a little bit, and they will, I think we're going to have to build more specialized architectures because the power savings, the cost savings, the space savings are just too dramatic to ignore.</p>
</details>

这实际上将对地缘政治结构产生非常有趣的影响。因为如果你想想中国正在发生什么，中国实际上不生产2纳米芯片，他们生产7纳米芯片。所以，如果你想想，他们拥有无限的电力和无限的工程资源。因此，他们可以做的是在工程方面进行优化，保留7纳米芯片，并确保为人们提供无限的电力。我们可能有一种不同的架构设计，你必须实现极高的能效。你可能没有像中国那样多的工程师，你可以使用2纳米芯片，但这些芯片在某些方面可能能效高，但在其他方面可能存在热损耗。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this will actually have a really interesting implication on geopolitical structures as well. Because if you think about what's happening in China, China actually doesn't make 2 nanometer chips. They make you know 7 nanometer chips. Um and and so if you think about what but they have unlimited amount of power um and they have unlimited amount of engineering resource and so what they can do is do the optimization on the engineering side keep the seven nanometer chips and make sure that they give people unlimited amount of power. We might have a different architectural design where you have to get extremely power efficient. you don't have as many engineers as you might enjoy in China and you can actually go to two nanometer chips but and those might be power efficient in some ways but they might have thermal lossiness in other ways.</p>
</details>

有很多因素必须纳入架构中，这些架构将变得更加专业化，甚至按地理和区域划分，然后根据监管框架的演变，这种地理和扩展方式也会不同。例如，如果中国扩展到世界不同地区，你将看到一种非常不同的架构，而不是美国扩展到世界不同地区。所以，这是一个非常有趣的游戏理论练习，可以探讨未来三年在科技领域会发生什么，目前没有人知道。这就是我们所处世界的美妙之处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like there's a whole bunch of things that have to get factored in um on the architecture that'll get more specialized even by geo and by region and then depending on how the regulatory frameworks evolve uh you know how that that geo and expands like if China expands to different regions in the world you will have a very different architecture that plays out than if America expands to different regions in the world. So this is a very interesting kind of game theory exercise to go through on what happens in the next 3 years in in tech in general and no one knows right now. Yeah, that's the beauty of the world that we live in. Yeah. Yeah.</p>
</details>

所以我们很快就会除了按每**Token**（Token: 文本或数据处理中的基本单元）瓦特来衡量系统，还会按每**Token**工程师来衡量。好的，那么让我们跳到另一个非常相关的话题——网络。显然，你提到了它，**纵向扩展**、**横向扩展**，在你的案例中你提到了**跨区域扩展**。所以在我看来，网络也将以相当显著的方式被重新发明。那么，你看到了哪些领先的迹象和信号，以及网络发展的方向？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we'll soon be measuring systems by engineers per token in addition to watts per token. Um all right so let's jump to another topic which very much engineer per kilowatt engineer per kilowatt in the US um networking right obviously you alluded to it um scale up scale out in your case you mentioned scale across so it seems to me that networking is also going to get reinvented in a fairly significant way so what are the leading sides that you're seeing that and the signals that you're seeing and on the direction networking is going to</p>
</details>

是的，网络肯定需要一场变革。换句话说，在建筑物内大规模所需的带宽量是惊人的，而且还在不断增长。网络正在成为主要的瓶颈，这很可怕。所以更多的带宽直接转化为更高的性能。鉴于网络最终实际上是一个小的电力消耗者，你每瓦获得的效用，它是一个超线性收益，就像在这里花一点钱，在那里获得更多。所以我认为这方面绝对存在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, networking is going to need a transformation uh for certain. In other words, uh it the amount of bandwidth that's needed at scale within a building is just astounding. I mean and uh and it's it's going up. The network is becoming a primary bottleneck. Uh which is uh scary. So more bandwidth translates directly to more performance. And then given that the network winds up actually being a small power consumer that delivered utility you get per watt like it's a super linear benefit like spend a little bit here get way more there. So I think that uh that side is absolutely there.</p>
</details>

我想在这里插一句，对于这些工作负载，我们实际上优先知道网络通信模式是什么。所以我认为这是一个巨大的机会。换句话说，当你实际上知道大致的电路会是什么样子时，你是否还需要**数据包交换机**（Packet Switch: 一种网络设备，用于在网络中转发数据包）的全部功能？我并不是说你需要构建一个**电路交换机**（Circuit Switch: 一种网络设备，在通信前建立专用连接），但存在优化机会。这方面的另一个方面是，这些工作负载的突发性极强。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I'll put in a plug here in that in this for these workloads we actually know what the network communication patterns are a priority. So I think this is a massive opportunity. In other words, do you then need uh the full power of a packet switch when actually you know what the rough circuits are going to be? And I'm not saying you need to build a circuit switch, but there is an optimization opportunity. The other aspect of this here is these workloads are just incredibly bursty.</p>
</details>

是的，我们已经到了这样的地步——我们已经写过关于这个问题的文章——电力公司会注意到我们何时进行网络通信，相对于以数十到数百兆瓦规模进行的计算，对吧？就像对电力的大量需求，突然停止并进行一些网络通信，然后又突然爆发式地进行计算。那么，你如何构建一个需要在短时间内以100%的速度运行，然后又空闲的网络呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. and and we're to the point where uh and we've written about this uh power utilities notice when we're doing network communication relative to computation at the scale of tens and hundreds of megawatts, right? Like massive demand for power, stop all of a sudden and do some network communication and then burst back to computing. So, how do you build a network that needs to go at 100% for a really short amount of time and then go idle?</p>
</details>

是的。对于**跨区域扩展**的用例也是如此，我们绝对看到你不会全年12个月都在所有广域数据中心站点进行大规模**预训练**（Pre-training: 在大量数据上训练模型以学习通用特征）。所以，这是一个我经常思考的问题：假设你在三个数据中心站点构建了最新最好的芯片。你会在那里待多久，然后迁移到另外三个站点的最新芯片？然后你如何处理你留下的网络？人们仍然会在上面运行任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And then same actually for the scale across use case which uh we're absolutely seeing you don't run large scale pre-training across all your wide area data center sites 12 months of the year. So and then you're going to this is a problem I think about a lot is let's say you build the latest greatest chips in these three data center sites. How long are you going to be there before you migrate to the latest latest chips in three other sites? And then what do you do with the network that you left behind? People are going to run jobs on them. Yeah,</p>
</details>

但你不再需要像大规模训练、预训练那样多的网络容量了。所以，对于5%的时间需要大规模网络的这种转变，我不知道如何构建这样的网络。所以，如果你们中有人知道，请告诉我。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but you're not going to need nearly the network capacity that you did for large scale training, pre-training anyway. So the shift of needing massive networks for like 5% of the time it I I don't know how to build a network like that. So if any of you do, please um please please let me know. I mean, if you don't know how to build this, there's nobody that knows how to build this. We're trying to figure it out. It actually is a fascinating problem. Yeah.</p>
</details>

是的，我认为如果电力是制约因素，如果计算是资产，那么网络将是**倍增器**（Force Multiplier: 能够显著增加现有资源或能力的效果的因素）。因为如果数据包具有低延迟、低性能、高能效，那么你每节省一千瓦的电力来移动数据包，就可以将这一千瓦的电力提供给**GPU**，这非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Right. I do think like if if you think of if power is the constraint and if compute is the asset I think network is going to be the force multiplier because you know if a if a packet if if you have low latency and low performance and high energy and efficiency then the packet the every kilowatt of power you save moving the packet is a kilowatt of power you can give to the GPU. Y um which is you know super important.</p>
</details>

另一件事是，当你考虑**纵向扩展**、**横向扩展**和**跨区域扩展**时，尤其是在**推理**（Inference: 使用已训练好的模型进行预测或决策）与**训练**（Training: 使用数据来教导模型学习模式和关系）方面，会有不同的优化点。例如，你可能在训练运行时更注重优化延迟，而在推理时更注重优化内存。存在架构上的差异。所以我还认为，网络的演变方式将是，它不再是先用于训练基础设施，然后再应用于推理。你可能会随着时间的推移构建**推理原生基础设施**（Inference-native Infrastructure: 专门为AI推理工作负载设计和优化的基础设施）。因此，在如何移动所有架构组件方面，有很多值得考虑的地方。但在我看来，如果我要从战略上说网络领域正在发生的最大事情之一，那就是如果你只是**博通**（Broadcom: 一家全球领先的半导体公司）的**包装商**（Wrapper: 指在现有产品或技术基础上进行简单封装，缺乏核心创新），那么你将面临一个非常具有掠夺性的垄断。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um the the other thing is you know when you think about um scale up versus scale out versus scale up across you'll also need especially on inference versus training there are different things that get optimized like you might optimize for latency much more on training runs you might optimize much more for memory on inferencing um there there's uh there's architectural and so I I also feel like the way that networking will evolve is rather than it being um a training infrastructure that then gets applied to inferencing. You might have inferencing native infrastructure that gets built um over time. And so there's there's good considerations to look at on like how all of the architectural components are um are moving. But um in my mind like if if I were to say strategically one of the biggest things that's happening in networking from our vantage point is if you're just a wrapper around broadcom then you've got a monopoly that's going to be a very predatory one.</p>
</details>

因此，思科之所以如此重要，其中一个重要原因在于，你不会只有一个**博通**的世界，人们只是围绕着他们的系统进行包装，而是你将拥有芯片的选择。这种芯片的选择和多样性将变得极其重要，特别是对于高容量的消费模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so one of the big reasons where Cisco is um super relevant is you don't just have a broadcom world with people just wrapping mean that their systems aroundcom but you will actually have a choice of silicon and that choice and diversity of silicon is going to be super important uh especially for high volume you know kind of consumption patterns.</p>
</details>

### 推理成本与AI应用的内部实践

关于系统，最后一个问题，既然你提到了，我们将转向用例。你们两位都提到了**推理**，你刚才在处理器背景下谈到了它，你刚刚开始谈论架构。你们今天是否正在部署专门用于推理的架构？或者它仍然是共享工作负载？我们正在部署专门用于推理的架构，我认为软件和硬件同样重要，但硬件也以不同的配置部署，这是我的说法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So last question on the system since you brought that up and we'll move to use cases. Um inference both of you have mentioned I mean you talked about in the context of the processors you just started talking about the architecture are you deploying today's specific architectures for inference I mean or is it still shared workloads? We are deploying uh specialized architectures for inference and I think as much software as hardware but the hardware is also uh deployed in different configurations is the way I would say it.</p>
</details>

**推理**的另一个方面变得非常有趣，那就是**强化学习**（Reinforcement Learning: 一种机器学习范式，通过与环境互动学习如何做出决策），特别是在服务关键路径上，因为延迟变得绝对关键。我认为，你如何构建系统以及如何将它们连接起来，当然网络在其中扮演着关键角色，这变得越来越有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the other aspect of inference that is becoming really interesting is uh reinforcement learning uh especially on the critical path of serving because latency just becomes absolutely critical. uh and I think that so how you would build your system and how you would connect it up to one another and of course networking plays a a key role there uh becomes increasingly interesting.</p>
</details>

是否存在单一的瓶颈，如果消除，就能将我们所需的**推理**成本降低一千倍？或者这只是我们正在经历的自然曲线？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and are there singular choke points that if removed would accelerate the thousandfold reduction in the cost of inference that we need or is this just a natural curve that we are writing down so so we're massive I mean two things here one again maybe many of you are familiar with this prefill and decode on inference look very very different. So actually ideally uh if you've uh you would have different hardware actually the balance points are different. So that's that's one opportunity. It comes with downsides. Uh we can talk about that.</p>
</details>

我们正在大规模地——这里有两点。第一，也许你们许多人都熟悉，**推理**中的**预填充**（Prefill: 在生成文本时，模型首先处理用户输入的提示词或上下文）和**解码**（Decode: 模型根据预填充的上下文逐步生成新的文本或数据）看起来非常不同。所以实际上，理想情况下，你会拥有不同的硬件，因为平衡点是不同的。这是一个机会，但也有缺点，我们可以讨论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh what I would say though is that maybe something people don't realize is that we're actually driving massive reductions in the cost of inference. I mean 10 x's and 100 x's. The problem or opportunity is the community, the user base keeps demanding higher quality. Mhm. not better efficiency. So just as soon as we deliver um all the efficiency improvements we're looking for, the next generation model comes out and it is the whatever um intelligence per dollar is way better, but you still pay more and it costs more relative to the previous generation and then we repeat the cycle. And it's almost like the longer um the reasoning that you have the more impatient the market gets, right?</p>
</details>

我想说的是，也许人们没有意识到的是，我们实际上正在大幅降低**推理**成本，降低了10倍甚至100倍。问题或机会在于，社区和用户群不断要求更高的质量，而不是更好的效率。所以，一旦我们实现了所有我们寻求的效率改进，下一代模型就会出现，它的“每美元智能”会好得多，但你仍然需要支付更多，相对于上一代来说成本更高，然后我们重复这个循环。这几乎就像你拥有的推理时间越长，市场就越不耐烦，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh what I would say though is that maybe something people don't realize is that we're actually driving massive reductions in the cost of inference. I mean 10 x's and 100 x's. The problem or opportunity is the community, the user base keeps demanding higher quality. Mhm. not better efficiency. So just as soon as we deliver um all the efficiency improvements we're looking for, the next generation model comes out and it is the whatever um intelligence per dollar is way better, but you still pay more and it costs more relative to the previous generation and then we repeat the cycle. And it's almost like the longer um the reasoning that you have the more impatient the market gets, right?</p>
</details>

例如，如果你有一个20分钟的推理周期，比如在深度研究中，你可以进行大约20分钟的自主执行，这很有趣。现在，大多数编码工具可以进行长达7小时到30小时的自主执行。当这种情况发生时，实际上对压缩时间的需求更大。因此，这有点像一个**自我实现的预言**（Self-fulfilling Prophecy: 指一种信念或期望，最终导致其自身成为现实），你因为能够进行更长时间的自主操作而需要更高的性能。所以，这几乎是一个永无止境的循环，你将需要更高的推理性能，永远如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for example, if you have a 20 minute reasoning cycle like for example with deep research you could have autonomous execution for about 20 minutes that was interesting. Now you have you know most of the coding tools that can go up to 7 hours to 30 hours of you know duration of autonomous execution. When that happens there's actually a greater demand for saying compress that time down. Um, and so you'll it's it's kind of a self-fulfilling prophecy where you need to have more performance because of the fact that you've been able to go out and do things for a longer autonomous amount of time. And so it's almost a never-ending loop where you you'll need to have more performance for inference. Yeah. In perpetuity. Yeah.</p>
</details>

不过，“每美元智能”是一个商业模式指标，所以它不仅仅是处理器的能力。不，它是端到端的。绝对如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Though intelligence per dollar is a business model metrics metric. So it is not just the processor capability. No, it's end to end. Absolutely. Yeah.</p>
</details>

### AI在企业内部的应用与未来展望

好的，那么让我们改变话题，谈谈实际用途。你们两位都有庞大的组织。今天，在应用所有可用的**AI**方面，你们获得了哪些关键的成功？然后我们将讨论你们的客户正在做什么。但我实际上很好奇你们内部团队正在做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So okay. So let's uh change topics and talk about actual usage, right? So both of you have massive organizations. Where are the key wins that you're getting today? With with applying all the AI that's available to you and uh then we'll talk about what your customers are doing. But I'm actually curious about what you're doing internally wi within the teams. Yeah.</p>
</details>

是的，编码是显而易见的，而且它实际上正在获得越来越多的关注和能力。我们几天前刚刚发表了一篇论文，展示了我们如何应用**AI**技术进行**指令集迁移**（Instruction Set Migration: 将软件从一种处理器架构（如x86）移植到另一种架构（如ARM））。换句话说，我们实际上进行了一次大规模的从**x86**（x86: 一种由英特尔开发的指令集架构，广泛用于个人电脑和服务器）到**ARM**（ARM: 一种精简指令集计算机（RISC）架构，广泛用于移动设备和嵌入式系统）的迁移，使我们在谷歌的整个代码库（这是一个非常非常大的代码库）实现了指令集无关性，包括未来的**RISC-V**（RISC-V: 一种开放标准的指令集架构，旨在提供灵活、可扩展的处理器设计）或任何可能出现的其他架构，涉及成千上万个独立的代码库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So, so I mean coding is the obvious one and that's actually picking up uh increasing traction and incre increasing capability. Uh we just actually in the last couple of days uh published a paper that showed how we applied AI techniques to uh do instruction set migration. So in other words, we actually had a fairly massive migration from x86 to ARM making our uh entire codebase and at Google it's a very very large codebase uh uh sort of instruction set agnostic and including to you know future risk 5 or whatever else might come along uh tens and thousands hundreds of thousands of individual your entire codebase you're going to make it agnostic entire codebase because we we um want and need all of our codebase to be man that's a crazy ass project. Yeah.</p>
</details>

这是一个疯狂的项目。是的，我们做到了，而这背后的动机实际上是几年前。我们有一个了不起的遗留系统叫做**Bigtable**（Bigtable: 谷歌开发的一种分布式非关系型数据库），然后有一个新的了不起的系统叫做**Spanner**（Spanner: 谷歌开发的一种全球分布式关系型数据库）。我们决定告诉公司，嘿，每个人都需要从**Bigtable**迁移到**Spanner**。顺便说一句，**Bigtable**在当时非常棒，但**Spanner**更好。谷歌进行这次迁移的估计是七个员工千年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so we we it it was and the the motivation though for this actually was a few years ago. Uh we had this uh amazing uh legacy system called Bigtable and then a new amazing system called Spanner. And we decided to tell the company, hey, everyone needs to move from Bigtable to Spanner. And by the way, Bigtable was amazing for its time, but Spanner was better. The estimate for doing that migration for Google was seven staff millennia. How much? How much? seven staff millennium that we we had a new unit that we had to actually to see what and and it was it wasn't like made up people being lazy. It's like this is this is what it was. It's endearing that they came up with that though and you know what we decided long live big table what it just wasn't worth it. Yeah.</p>
</details>

多少？七个员工千年，我们不得不创造一个新的单位来衡量。这并不是编造的，也不是人们偷懒。这就是事实。我们最终决定，“**Bigtable**万岁！”因为这不值得。老实说，机会成本太高了。我们有这类迁移。所以，从**TensorFlow**（TensorFlow: 谷歌开发的开源机器学习框架）到**JAX**（JAX: 谷歌开发的用于高性能数值计算和机器学习的Python库），我们实际上，我的意思是，这有点私密但也不是太秘密，我们内部通过**AI**辅助实现了这一点，速度提高了整数倍。现在还有其他任务，这些工具可能还没有达到标准，但曲线下的面积正在变得越来越大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Honestly like the opportunity cost was uh too high. So the and we have these sorts of migrations. So tensor uh flow to jacks we actually I mean again somewhat private but not not too secret we've affected this internally with AI assist went integer factors faster. Now there are other tasks which um the tools probably aren't quite yet up to the um whatever standard for but the the area under the curve is getting bigger and bigger and bigger.</p>
</details>

所以我们看到了大约三到四个非常好的用例，然后我们看到一些用例目前还没有奏效。那么，哪些正在奏效呢？代码迁移工作得相当好。到目前为止，我们主要使用**CodeX**（CodeX: OpenAI开发的代码生成模型）、**Cloud**（Cloud: 云计算平台）和**Cursor**（Cursor: 一款AI驱动的代码编辑器）的组合。所以代码迁移往往效果很好。调试，奇怪的是，使用这些工具，特别是**CLI**（Command Line Interface: 命令行界面），效率非常高。我们做得不够好的地方，以及前端的**从零到一项目**（Zero-to-One Projects: 从无到有创建新产品或服务），往往表现得非常好，工程师的生产力极高。当你处理旧代码，尤其是基础设施堆栈中更深层的代码时，要实现这一点就困难得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're seeing probably like three or four really good use cases and then we are seeing some use cases which are not working yet. And so what is working code migrations is working relatively well so far we use largely a combination of codeex cloud and um and cursor some win surf and so um code migrations tends to work pretty well. Um, debugging, oddly enough, has actually been very very productive with um with these tools, especially with CLIs. Um, the um um where we've not done as good a job. And then front end 0ero to1 projects tend to do extremely well like the engineers are super productive. when you go to code that's older um and especially further down in the infrastructure stack much harder to go out and get that to happen.</p>
</details>

但我们必须让工程师适应的挑战，实际上更多是一个文化重置问题，而不是一个纯粹的技术问题。那就是，如果有人使用某个工具并说它不起作用，你不能把它放回架子上说它在六到九个月内都不会起作用。你必须在四周内重新审视它，看看它是否再次起作用，因为这些工具的进步速度如此之快，你几乎必须像这样。所以我今天和150位杰出工程师在一起，我不得不敦促他们做的是，假设这些工具将在六个月内变得无限好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the challenge that we have to orient our engineers on this is actually much more of a cultural reset problem than it is a um just a technical problem which is if someone uses something and says this isn't working right um you can't put it back on the shelf saying this doesn't work for another 6 or 9 months. you have to come back to it within four weeks and see if it works again because the speed at which these tools are kind of advancing is so fast that you almost have to kind of get like so I was with a 150 of our distinguished engineers today and what I had to urge them to do is um assume that these tools are going to get infinitely better within 6 months.</p>
</details>

确保你的思维模式与六个月后工具将达到的水平保持一致，以及你将如何做到在六个月内成为同类最佳，而不是评估它今天的状况，然后将其搁置六个月，认为它在接下来的六个月内都不会起作用。我认为这是一个重大的战略错误。所以我们有25,000名工程师。我希望我们能在很短的时间内，在明年内，将生产力提高至少两到三倍。我们将能够看到这是否会发生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. and make sure that you get your mental model to where that tool is going to be in six months and what are you going to do to be bestin-class in six months rather than assessing it for where it is today and then putting it aside for 6 months assuming that that's not going to work for the next 6 months. I think that's a big strategic error. So we've got 25,000 engineers. I'm hoping that we can get at least um two or 3x productivity within a very short amount of time within the next year. um and we it'll we'll be able to see what if um if that happens.</p>
</details>

我们开始看到良好反馈的另外几个主要领域是销售准备，进入客户电话会议，以及非常好的法律合同审查，实际上比我们想象的要好得多。最后一个不是超高推理量，而是产品营销。我认为**ChatGPT**（ChatGPT: OpenAI开发的大型语言模型）对竞争对手的首次分析总是比任何产品营销人员自己想出来的要好。所以，我们永远不应该从空白开始。只需从**ChatGPT**开始，然后在此基础上进行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second a couple of the big areas that we are starting to see some good responses is in sales preparation going into an account call really good legal contract reviews actually much better than what we had thought. Um and then the last one is not super high inference volume but product marketing. Um, I think the first chat GPT take on competitive is always better than what my any product marketing person comes up by themselves. So, we should never start from blank slate. Just start from chat GPT and then go from there.</p>
</details>

好的。现在，我们可以长时间讨论这个话题，但他们给我发出了两分钟警告。所以，我想把重点放在最后一个问题上。我们这里有很多创始人，他们正在建立令人惊叹的公司。那么，在接下来的日历年，或者说接下来的12个月里，他们应该期待哪些最有趣的发展？A是来自你们公司，B是来自行业，如果你能看到你的水晶球。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. Now, we could be talking about the topic for a long time, but they showed me the two-minute warning. So, I want to focus on one last question here. So, we got a lot of founders here, right? Building amazing companies. So what is the most interesting development they should look forward to in the next calendar year let's call it or the next 12 months a from your company and B from the industry if you are look at your crystal ball I mean I think to build on the point uh these these models are getting more spectacular uh by the by the month and then they'll be from whatever companies you like uh a bunch of really excit including ours I forgot to say you're not allowed to say models will get better. Yeah, everybody knows the models the models are going to get but I mean they're getting scary good is the part that I would say um but I think that then the agents that get built on top of them and the frameworks for making that happen are also getting scary good. So the ability to um have things go quite right for quite long over the coming 12 months is going to be transformative. on anything. Do you want to leak any aspect of your road map next 12 months?</p>
</details>

我认为，要强调的一点是，这些模型正以每月惊人的速度变得越来越出色，然后它们将来自你喜欢的任何公司，包括我们公司，一系列真正令人兴奋的模型。我忘了说，你不能说模型会变得更好。是的，每个人都知道模型会变得更好，但我的意思是它们变得“好得吓人”，这是我想说的。但我认为，在此基础上构建的**代理**（Agents: 指能够感知环境、进行推理并采取行动以实现目标的AI系统）以及实现这些的框架也变得“好得吓人”。因此，在未来12个月内，让事情在很长一段时间内顺利运行的能力将是变革性的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean I think to build on the point uh these these models are getting more spectacular uh by the by the month and then they'll be from whatever companies you like uh a bunch of really excit including ours I forgot to say you're not allowed to say models will get better. Yeah, everybody knows the models the models are going to get but I mean they're getting scary good is the part that I would say um but I think that then the agents that get built on top of them and the frameworks for making that happen are also getting scary good. So the ability to um have things go quite right for quite long over the coming 12 months is going to be transformative. on anything. Do you want to leak any aspect of your road map next 12 months?</p>
</details>

目前不能。好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Not so not right now. Yeah. Okay. Do you</p>
</details>

我想说，最大的转变以及我敦促初创公司去做的是，不要围绕别人的模型构建**薄包装**（Thin Wrappers: 指在现有模型或服务之上添加一层薄薄的代码，提供有限的额外功能或接口）。我认为模型与产品紧密结合，并且随着产品中的反馈模型变得更好，这将变得极其重要。所以你将需要**基础模型**（Foundation Models: 指在大量数据上训练的超大型模型，可以适应各种下游任务），但如果你只是一个**薄包装**，我认为你的业务的持久性将非常短暂。所以这是我敦促你们去做的事情。我认为某种智能路由层会说“我将把我的模型用于这些事情，我可能会把**基础模型**用于其他事情，并动态地持续优化”，我认为**Cursor**在这方面做得很好。但这将是软件开发生命周期演变的一个好方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I I'd say the the big shift and what I would urge startups to do is don't build thin wrappers around models that are other people's models. I think the the the combination of a model working very closely with the product and the model getting better as there's feedback in the product is going to be super important. So you are going to need foundation models but if you just have a thin wrapper I think the durability of your business will be very very um you know shortlived. So that would be something that I would I would urge you on and I think the intelligent routing layer of some sort that says I'm going to use my models for these things. I'm going to probably use foundation models for other things and dynamically keep optimizing will be uh I think cursor does that pretty well. Um but that that'll be a a a good way that the the software development life cycle will evolve.</p>
</details>

至于你应该从思科那里期待什么，说实话，长期以来人们都认为思科是一家遗留公司，一家过气的公司。但我认为在过去一年里，希望你已经注意到，业务上有了新的势头，员工队伍也充满了活力。所以，你应该期待，就像我说的，从物理层到语义层，从芯片到应用程序的每一层，在芯片、网络、安全、可观测性和数据平台以及应用程序方面，我们都会有大量的创新。我们很高兴能与初创生态系统合作，所以如果你想与我们合作，请务必联系我们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um what you should expect from Cisco is look truth be told for the longest time people thought Cisco was a legacy company like that they were has been and I think in the past year hopefully you've you've paid attention I think there's a level of momentum in the business there's a spring in the step in the employee base so uh you should expect like I said from the physics to the semantics in every layer from silicon to the application a fair amount of innovation in uh silicon and networking and security and observability ility and the data platform uh as well as applications um you know from us and um we're excited to work with um the startup ecosystem and um so if you if you ever feel like you want to work with us make sure that you reach out to us.</p>
</details>

我想强调模型的一个方面是，两三年前我们处理文本模型时，它们很有趣，比如“嘿，给我写一首关于马丁的俳句”，它们做得很好。现在它们令人惊叹。我认为在接下来的12个月里会发生同样的事情，那就是这些模型的图像和视频输入输出也将发生同样的变化。甚至对于图像，想象它们作为生产力和教育工具，而不仅仅是“好吧，这是超人马丁”，那也很酷，对吧？但将其用于提高生产力和学习，我认为将是真正具有变革性的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean one aspect that I I want to highlight about the models is um where we were with let's say text models two and a half three years ago they were fun like hey write me a haiku about Martin did a great job. Now they're amazing. I think that what's going to happen in the next 12 months is the same thing is going to be happening with input and output of images and video to these models. And to the extent that even for images, imagine them as productivity and educational tools, not just okay, here's Martinez Superman on a like that's cool too, right? But using it for productivity gains and learning, I think is going to be really really transformative.</p>
</details>

太棒了。那么，就此结束本次会议。感谢这次精彩的对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Awesome. So on that note, we'll have to end this session. Thanks for a great conversation. I mean, thanks Tito.</p>
</details>