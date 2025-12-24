---
area: tech-insights
category: technology
companies_orgs:
- Temporal Technologies
- Intel
- Pyantic
date: '2025-11-24'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Andre Karpathy
products_models:
- Airbus A320
- Space Shuttle
- Curiosity rover
- Daphne language
- Scl micro kernel
- CompCert C compiler
- Project Everest
- GPT5 codeex
project:
- ai-impact-analysis
- systems-thinking
- knowledge-pipeline
series: ''
source: https://www.youtube.com/watch?v=qLqttdO33UM
speaker: AI Engineer
status: evergreen
summary: 本文探讨了实现零缺陷软件的愿景，揭示了普通用户与软件开发者对“bug”认知的巨大差异。通过分析空客A320、航天飞机和好奇号火星车等高可靠性系统的成功案例，文章阐述了N-vers编程、基于规范的设计、形式化方法等关键技术。同时，作者深入探讨了高级语言、结构化编程和模块化等计算机科学基础，并演示了Daphne语言在形式化验证中的应用。最后，文章展望了AI代理编程（Agentic
  Coding）如何以更低的成本实现高保障软件，预示着软件开发领域将迎来一个“零缺陷”的未来。
tags:
- formal-method
- free
- llm
- software
title: 零缺陷软件的愿景：从航空航天到AI编程的可靠性之路
---

### 零缺陷软件的愿景

请和我一起设想一个软件零缺陷的世界。不是只有少数缺陷，而是真正意义上的**零缺陷**。请大家暂时相信我。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Please join me in envisioning a world where software has zero bugs. Not just a few bugs, but actually literally zero bugs. Okay. Okay. Just bear with me now.</p>
</details>

对于大多数人，尤其是非软件工程师，软件缺陷（bug）在他们的生活中并不占很大比重。我们手机上使用的大多数应用程序，如社交媒体和新闻应用，大部分时间都能正常工作。相机功能也大部分时间可用。那些最受欢迎的应用程序，包括银行应用，大部分时间都运行良好。因此，对于大多数人来说，软件缺陷并不是他们最关心的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for most people, let's just say people who aren't software engineers, bugs are actually just not a very big part of their life. Period. Most of the apps that we use on our phones, our social media, our news, that stuff pretty much works most of the time. The camera works most of the time. Any of those most popular apps, banking, they work really well most of the time. So, bugs are really not top of mind for most people.</p>
</details>

然而，任何从事软件开发的人都非常熟悉一个截然不同的世界：一个不断承受压力的世界，担心软件错误潜入关键应用程序，需要随叫随到的寻呼机响应，以及云服务提供商中断等等，不一而足。因此，大多数人在日常生活中所经历的世界与软件开发的现实之间存在脱节。不过，即使对于我们这些非工程师来说，软件故障的危险也时有发生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, anybody who makes software is very familiar with a different world. A world of constant stress about the possibility of software errors creeping into critical applications on call uh responses to pagers, cloud provider outages, the list goes on and on. So there's a disconnect between what most people are experiencing every day in the world and the reality of making software. Now I will say that even for those of us who are not engineers, the perils of broken software do crop up from time to time.</p>
</details>

就在昨天，我带七岁的儿子去迷你高尔夫球场，只剩下一个预约名额，而且必须预约。我尽职地拿出智能手机，扫描了二维码，完成了预订最后一个名额的流程，结果却被告知名额已被他人抢走。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just yesterday, I took my seven-year-old son to the mini golf place, and there was just one reservation left. reservations were required. And I dutifully whipped out my smartphone, snapped the QR code, went through the process to grab the last reservation spot, only to be told that it had been grabbed by somebody else.</p>
</details>

我不得不说，我为我的儿子感到非常骄傲，因为大多数孩子在这种情况下可能会崩溃，但他没有。他处理得很好。然后，你能想象十分钟后我查看消息时发现，事实上，最后一个预约名额竟然是我们的，我有多么惊喜吗？我们都欣喜若狂。尽管如此，这段跌宕起伏的经历仍然强化了一个事实：软件缺陷在现实世界中是真实存在的，它们每天都会对真实的人产生真实的影响，即使这只是一个七岁孩子短暂的情绪波动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I got to say I was very proud of my son because most kids most of the time would have probably melted and he actually didn't. He handled it great. And then can you imagine my surprise when I checked my messages about 10 minutes later to find out that in fact that last reservation slot had gone to us. So we were thrilled. That roller coaster journey still reinforces the fact that bugs are real in the world and they have real impact on real people every day. Even if it is just a momentary emotional swing for a seven-year-old.</p>
</details>

我是Johann Schleier-Smith，今天我将向大家讲述一个零缺陷的愿景。我目前在**Temporal Technologies**（一家提供持久执行软件的公司）工作。Temporal致力于让部署到云端的软件能够按预期运行。但这次演讲不会围绕Temporal展开。在AI工程师峰会上还有其他几场关于Temporal的演讲。我的同事Cornelia Davis将在周日举办一场研讨会。此外，来自Pyantic的Samuel Kovven将讨论如何结合Temporal和Pideantic构建智能代理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm Johan Flyersmith and today I'm going to be talking to you about a vision of zero bugs. Now I work at Temporal Technologies. Temporal makes software for durable execution. and it makes software that deployed to the cloud do what it's supposed to do. But this talk is not going to be about temporal. There are several other talks at the AI engineer summit that do talk about temporal. My colleague Cornelia Davis will be doing a workshop on Sunday. In addition, Samuel Kovven from Pyantic will be talking about building agents that combine Temporal with Pideantic.</p>
</details>

构建可靠软件的努力以及让工程师有更多时间进行创新的愿景与我们在Temporal的产品紧密相连。然而，本次演讲的所有内容都将超出我们当前产品的范围。让我们回到零缺陷的愿景。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The push to build reliable software and the vision of giving engineers time back for innovation is tightly lined with our products at Temporal. However, everything in this presentation is going to be outside of the scope of our current products. Let's return to the vision of zero bugs.</p>
</details>

### 对零缺陷愿景的常见异议

对于这个愿景，存在不少非常合理的异议。那么，让我们来逐一探讨。首先，正如我们一开始所说，事故总是会发生。无论是云服务中断还是订单问题，事故都会发生，通常我们都会振作起来并克服它们。更广泛地说，世界是不完美的，所以一些软件缺陷可能也无伤大雅。事实上，在许多关键情况下，我们已经很好地解决了可靠性问题。所以，也许软件已经足够好，我们不需要追求零缺陷的愿景。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are quite a few objections, really reasonable objections to this vision. So, let's talk through them. First of all, as we've started out saying, incidents happen. Incidents happen whether it's because of cloud outages or problems with orders. They happen and generally speaking, we pick ourselves up and get through them. More broadly, the world is imperfect and so a few software bugs here and there might be okay. And in fact, we already are solving for reliability pretty well in many of the situations where it matters. So maybe software is good enough. Maybe we don't need to push towards a vision of zero bugs.</p>
</details>

这是另一个异议。你可能会给出一些很好的理由，甚至是一些很好的理论理由，说明为什么彻底消除所有缺陷简直是不可能的。为什么这是一个荒谬的想法？你可能会说，有数百万行代码，代码量太庞大了。我们有太多的代码，而且随着智能代理生成越来越多的代码，这个问题会进一步加剧，所有这些都变得过于复杂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here's another objection. You could give perhaps good reasons, good theoretical reasons even why eliminating all of the bugs is just simply impossible. Why? It's a preposterous idea. So you could say there are millions of lines of code. The code is just too big. We have too much code as we know as agents generate more and more code that exacerbates the problem and it's all just simply too complicated.</p>
</details>

此外，如果我们审视缺陷的定义，似乎规范不可避免地存在一定程度的模糊性。我认为，只要程序的运行方式与最终用户的期望不符，那就是一个缺陷。他们不在乎是产品规范的问题，还是程序员忘记检查空值。这根本不重要，对吧？而且，现实世界中总会发生意想不到的事情。例如，如果我们考虑控制系统，如果世界的某些方面没有被正确建模，你就会经常看到这种情况，比如围绕自动驾驶汽车能力的担忧。那么，你可能会说，这种情况根本无法处理，这是无望的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Furthermore, if we look at the definition of a bug, it seems that the specifications unavoidably have some degree of ambiguity. I would say that it's a bug. Whatever the way the program works does not match the end user's expectations. They don't care whether it was a problem with a product specification or whether the programmer forgot to check for a null. It just doesn't matter, right? And furthermore, unexpected things happen in the real world. If we think about control systems for example, if there is some aspect of the world that hasn't been modeled correctly, you could see this frequently for example in the fears around the capabilities of self-driving vehicles. Then that you could say just simply can't be handled. It's hopeless.</p>
</details>

此外，我们将讨论软件验证中的一些强大技术，但我们也知道并且可以从理论上证明这些技术有其局限性。在某些情况下，存在计算上难以处理的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Furthermore, we're going to talk about some of the powerful techniques in software verification, but we also know and we can prove theoretically that those have limits. There are problems that are computationally intractable in some cases.</p>
</details>

第三个原因是经济学。如果你的竞争对手不太关心软件质量，而你却花时间在这上面，那么他们在市场上就会获胜，可靠的软件可能永远无法面世。此外，你可能还会说，修复每一个缺陷的投资回报率（ROI）根本不存在。有些缺陷可能没那么糟糕，或者有简单的变通方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Reason number three is economics. If you have competitors who don't care much about software quality and who will win in the marketplace if you spend time on it, then that reliable software may never see the light of day. Also, you might just say that the ROI just simply isn't there for fixing every single bug. Some of them maybe are just not so bad. Maybe they have easy workarounds.</p>
</details>

最后，也许有些愤世嫉俗的人认为，有些公司乐于发布有缺陷的软件，因为这有助于他们销售支持服务。在这种愤世嫉俗而悲观的世界观中，缺陷会获胜，我们永远不会拥有无缺陷的软件，甚至连接近都做不到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And finally, perhaps cynically, some people think that there are companies that are okay with shipping buggy software because it helps them sell support. In this vision, this cynical and sad vision of the world, the bugs win and we'll never have bug-free software. Not even close. [snorts]</p>
</details>

### 高可靠性软件的实践案例

然而，我认为希望是存在的。如果我们仔细观察，会发现有一整套实践和技术，确实能够实现非常可靠的软件。让我们来看一个例子：**空客A320**（Airbus A320）。这款飞机的控制软件开发于20世纪80年代，一直被视为可靠性的典范。事实上，迄今为止，还没有发生过任何一起严重的空客A320飞机事故被归咎于软件问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, I contend that there is hope. And if we look, there are practices, a whole slew of techniques that really allow very reliable software. Let's look at this example, which is the Airbus A320. The control software for this airplane was developed in the 1980s and has been held up as a showcase for reliability. There are in fact to this date no serious incidents with Airbus A320 aircraft that have been attributed to problems with the software.</p>
</details>

那么，他们的方法是什么呢？这里有很多非常巧妙的想法。其中之一是**N-vers编程**（N-vers programming: 通过使用多个独立开发、冗余的软件版本来提高系统可靠性的方法）。空客控制系统中最关键的组件实际上是用不同的处理器构建的。例如，一个来自Intel的x86处理器，一个Motorola处理器，它们运行不同的操作系统，由不同的团队编写软件，从而提供了极高的冗余度以应对意外问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what is their approach? There are a bunch of ideas here that are really pretty neat. So one of them is Nvers programming. So the most critical elements of the Airbus control system [snorts] were actually built with different processors. Say one from x86 from Intel, one Motorola processor, different operating systems on that, separate teams writing the software providing a tremendous level of redundancy against unexpected issues.</p>
</details>

他们还使用了**基于规范的设计**（specification-based design: 严格依据详细的软件需求和行为规范进行设计和开发）。这意味着大量的文档，而且这些文档可以被分析，以便理解并对系统的行为以及软件在各种场景下的表现做出可证明的保证。他们使用了独立的验证团队，编写代码的人和检查代码以确保其具有预期行为的人是完全独立的团队。他们还使用了一系列**防御性编程**（defensive programming: 编写代码时考虑到各种可能的错误情况，并采取措施防止或处理这些错误）技术。例如，不在运行时分配任何内存，所有内存都在静态时完成分配。不使用复杂的异常处理，只是让代码非常简单、非常明确地处理任何错误条件。最后是**静态分析**（static analysis: 在不实际执行程序的情况下对代码进行分析，以发现潜在错误或不符合规范的地方）和验证。我们将在几分钟后更详细地讨论这些技术。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They also use something called specificationbased design. tremendous amounts of documentation, but also documentation that could be analyzed in order to understand and make provable guarantees about the behavior of the system and what the software would do under a whole variety of scenarios. They use independent verification teams where the people writing the code and the people checking to make sure that the code had the desired behavior were completely separate teams. And they also used a slew of defensive programming techniques. So for example, not allocating any memory at runtime. That's all done statically. Not having sophisticated exception handling. Just keeping it really simple, very explicit in the code, how any error conditions are handled. And finally, static analysis and verification. We'll talk about those techniques more in just a few minutes.</p>
</details>

这里的心态也非常重要。空客工程团队秉持着**零缺陷容忍**（zero defect tolerance: 对软件缺陷零容忍的态度和文化）的理念，将软件视为一个经过认证的组件，像涡轮风扇叶片一样，被设计用来满足特定的规范。他们还采用了系统级的可靠性方法，因为当你想到飞机时，所有可能出错的事情都需要加以防范。可以合理地认为，数十年来在工程任务关键型机械系统方面的经验也渗透到了软件开发过程中，我们从中可以学到很多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the mindset here is also really important. The Airbus engineering team had this idea of zero defect tolerance of thinking of software as a certified component that was engineered to meet a certain specification just like a turbine fan blade might be. And they also had a system level approach to reliability because when you think about it with an airplane there are all sorts of things that could go wrong that need to be protected against. It stands to reason that the decades of experience engineering mission critical mechanical systems crossed over into the software development process and there's a lot that we can learn from that.</p>
</details>

因此，A320的核心是通过流程实现质量。我知道对于那些忙于编写代码的人来说，流程往往是他们最不想考虑的事情。但是，当我们思考**代理式编程**（Agentic Coding: 指由AI代理自主生成、测试和优化代码的编程范式）如何运作，思考如何让代理保持在正确的轨道上并按照我们的意愿行事时，流程确实是我们想要思考的事情。质量流程有很多步骤。其中许多对于今天编写软件的人来说都很熟悉，比如规划和需求。但也有一些不同之处，比如由外部机构（可能是监管机构或政府）进行的认证。集成测试对于飞机来说尤为重要，因为软件需要与物理系统交互。展望未来，当我们思考未来的软件将如何越来越多地与物理世界交互时，这很可能会再次出现。关键在于，有一个反馈过程来完善每个流程，并确保它与前后步骤良好衔接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So core to the A320 was quality through process. Now, I know for folks who are banging out code, process is often times the last thing that they want to think about. But as we're thinking about how agentic coding works, thinking about how we keep agents on the rails and doing what we want them to do, process really is something that we do want to think about. There are quite a few steps to the quality process. Many of these are familiar to people who are writing software today, say planning and requirements. But there are also some others that are a little bit different like certification by an external agency, maybe a regulator or the government. The integration testing becomes particularly important for an airplane where that software needs to interact with a physical system. And as we look ahead and think about where things are going in terms of the software that we are going to have in the future that's interfacing more and more with the physical world. So this is something that is probably going to come back. And the key thing too is that there's a feedback process in refining each of these processes and making sure that it interfaces well with the steps that come before and after.</p>
</details>

航空航天工业在构建超高可靠性软件方面尤其丰富。例如，**航天飞机**（Space Shuttle）就是一个令人惊叹的例子。在最后三个版本的软件中，每个版本都有42万行代码，经过检查后，每个版本只发现了一个错误。遗憾的是，一些航天飞机失事了，但从未有航天飞机因软件问题而失事。在过去的11个版本中，总共只有17个错误。所以，这可能比商业软件中每行代码的典型缺陷数量少了一千倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The aerospace industry is particularly rich in these examples of super super reliable software being built. So the space shuttle is one and and really it's quite stunning. So in the last three versions of that software 420,000 lines of code in each of those and the result of that after sort of inspecting was was one error per version. Sadly, some of the space shuttles have been lost, but space shuttles have never been lost to software problems. Over the last 11 versions, there were a total of 17 errors. And so, this is probably a thousand times fewer bugs um per line of code than is typical in commercial software.</p>
</details>

另一个航空航天领域的例子是**好奇号火星车**（Curiosity rover）。这项任务耗资数百万美元，一旦系统抵达火星，几乎没有干预能力，因此高可靠性至关重要。尽管如此，这款在2000年代开发的软件采用了略有不同的方法，真正展示了可靠系统的演变。例如，虽然使用了冗余系统，但它们实际上是相同的系统，并且使用了商用现成的实时操作系统，而不是定制的操作系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another aerospace example is a Curiosity rover. With a mission that costs millions and with very little ability to intervene once the system is on Mars, it was critical to have a high level of reliability. Now that said, this software developed in the 2000s did take a bit of a different approach that really shows the evolution of reliable systems. So, for example, while redundant systems were used, they're actually identical systems and a commercial off-the-shelf real-time [snorts] operating system was used rather than a custom operating system.</p>
</details>

航空航天并不是唯一一个高保障软件（高品质软件，实际上零缺陷的软件）至关重要的行业。无论是化学工业、汽车工业、医疗软件、核电工业还是安全系统，每个行业都为我们提供了学习的机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, aerospace isn't the only industry where high assurance software, high quality software, software with effectively zero bugs, has been critical. So whether it's in the chemical industry or the automotive industry, medical software, nuclear power industry or security systems, each of these provides us with an opportunity to learn something.</p>
</details>

### 计算机科学在可靠性方面的进展

让我们花点时间转换一下思路。让我们看看计算机科学的进步，这些进步真正为当今可靠软件的构建奠定了基础。事实上，当我们审视这些进步时，我们会发现它们确实是当今所有软件构建的基础。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's take a moment to shift gears a little bit. Let's look at the advances in computer science that really set the foundation for how reliable software is built today. And in fact, as we look at these, we'll find that they really are the foundation for really all software that's built today.</p>
</details>

其中最重要的是**高级语言**（high-level languages: 相比机器语言和汇编语言更接近人类自然语言的编程语言，如Python、Java、C++）。这可以追溯到20世纪50年代和60年代。从那个时期，人们主要使用汇编语言编写代码，直到20世纪80年代，汇编语言作为一种人们会使用的语言基本上失宠，被机器为机器生成的机器代码所取代。这带来了大约5到10倍的生产力提升。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The biggest of these is highle languages. Here we go back to the 1950s, 1960s. And from that period where people were mostly writing with assembly language up through the 1980s when really assembly language more or less went out of favor as a language that people would use. It was a language that that was replaced by machine code generated by machines for machines. There was about a 5 to 10x productivity gain.</p>
</details>

高级语言的核心思想是**抽象**（abstraction: 隐藏复杂性，只暴露必要信息，使程序员能更关注问题本身而非底层实现细节）。它围绕着数据抽象，这样你就可以使用在问题领域中具有一定相关性的数据结构，而不是直接操作内存位置。它还涉及**结构化编程**（structured programming: 一种编程范式，强调使用顺序、选择和循环等基本控制结构，避免使用无条件跳转语句如goto，以提高代码可读性和可维护性），我们稍后会谈到。归根结底，这里的统一概念是保留**本质复杂性**（essential complexity: 问题固有的复杂性，无法通过设计消除），即那些与软件应完成的任务直接相关的方面，并尽可能从代码中移除那些与实现、与运行代码的底层机器（如其寄存器、内存布局或访问方式，甚至机器性能的许多方面）相关的方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the core idea with highle languages is around abstraction. It's around data abstraction so that instead of poking at memory locations, you work with data structures that have some relevance in the problem domain. And it's about structured programming which we'll talk about in a minute. At the end of the day though, what is sort of a unifying concept here is preserving the essential complexity, which is those aspects of the problem that are directly relevant to whatever it is that the software is supposed to do and removing as much as possible from the code. those aspects of the problem that have something to do with the implementation that have something to do with the machine underlying that runs the code like what its registers are or how you lay out or access the memory or even many aspects of the performance of that machine.</p>
</details>

由Edgar Dystra倡导的结构化编程是20世纪60年代的一项重大进步，并在70年代被广泛接受。如今，程序员们可以原谅自己已经忘记了关于go-to语句是否是有用编程工具的争论，或者是否应该不惜一切代价避免使用它们。我们今天使用的编程语言显然没有go-to语句。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Structured programming as espoused by Edgar Dystra was one of the really big advances coming in the 1960s and being broadly accepted in the 1970s. Today, programmers can be excused for having forgotten about the debates about whether go-to statements were a useful programming tool or something that should be avoided at all costs. Our programming language that we use today clearly don't have go-to statements.</p>
</details>

结构化编程到底是什么？它其实很简单。你有一套基本的控制结构。这些包括序列（语句一个接一个地执行）、选择（if-then-else）和迭代（循环），这些概念对于今天的任何程序员来说都非常熟悉。但结构化编程与之前人们用流程图建模应用程序，并使用go-to等非结构化概念（你可以在程序中随意跳转）相比，真正重要的是它实现了这种组合推理，并在许多情况下消除了**意大利面条式代码**（spaghetti code: 指结构混乱、难以理解和维护的代码）。当然，你仍然可以用结构化程序编写意大利面条式代码，但如果你看看Fortran代码并试图理解它，祝你好运，那会很有趣。你会发现它真的非常不同。因此，这种程序的层次分解确实减轻了复杂性。它允许程序员一次只关注代码的一部分。当有大型语言模型（LLMs）生成代码时，这与几十年前程序员编写代码时一样有价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What is structured programming all about? It's really quite simple. You have a set of basic control structures. So these are things like sequences, statements that come one after the other. Um selection if then else, iteration concepts that are completely familiar to any programmer today. But what's really important about structured programming versus what came before where people were modeling applications in terms of flowcharts and having these nonstructured concepts like go-tos where you could really jump around throughout a program was enabling this sort of compositional reasoning and eliminating spaghetti code in many cases. You could still write spaghetti code of course with structured programs but if you look at forrren code and if you try to understand that go for it. It's a fun time. You'll find that uh it's really very different. So this hierarchical decomposition of programs, it really mitigates complexity. It allows programmers to focus on one piece of the code at a time. When you have LMS generating the code, this is just as valuable as it was for the programmers who are writing code decades ago.</p>
</details>

另一个可以追溯到20世纪70年代的关键思想是David Parnes推动的，他主张从模块的角度思考软件系统。**模块化**（modularity: 将系统分解为独立、可替换、功能单一的组件，以降低复杂性、提高可维护性）意味着什么？它可能在面向对象编程的语境中最为人所知，但它适用于各种情况。它可能作为面向对象编程的一个方面最为人所知，但你可以在没有面向对象编程的情况下实现模块化。库就是其中一个明显的例子。因此，当我们考虑验证一个程序，确保它能按预期运行时，无论是我们作为人、作为LLM，还是使用某种形式化验证技术进行验证，模块化都能带来巨大的提升。当你将模块串联起来时，你会得到次指数级的扩展，甚至可能是线性扩展，而不是指数级扩展，你可以在每个层面应用局部推理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another key idea that traces back to the 1970s is David Parnes's push to think about software systems in terms of modules. What does modularity mean? It's perhaps best known in the context of object-oriented programming, but it applies in a whole bunch of situations. It's perhaps best known as an aspect of object-oriented programming, but you can have modularity without object-oriented programming. Libraries are one of the obvious examples. And so when we think about verifying a program, when we think about making sure that that program does what it's supposed to do, whether we're verifying it as a person or as an LLM or using some sort of formal verification technique, modularity is a massive boost. As you chain modules together, you get a subexponential scaling, perhaps even a linear scaling rather than an exponential scaling where you can apply local reasoning at every level.</p>
</details>

其结果是，无论系统规模多大，你都能拥有可管理的复杂性。你将那些意大利面条式的代码变成组织得非常好的东西。我想在这里花点时间思考一下为什么LLM不只是生成机器代码，而是生成高级语言代码。这当然是一个合理的问题，我认为几十年前适用于人类程序员的原因，今天也同样适用于LLM。首先，我们知道上下文是有限的。LLM的上下文窗口可能比人类头脑中能容纳的要大得多。这取决于你如何计算上下文。当然，我们对背景事实有很多了解，这些事实已经被我们压缩到大脑中。但是，上下文对于LLM来说绝对是一种稀缺资源，就像注意力和推理能力（也许可以称之为工作记忆）对于人类来说是一种稀缺资源一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the upshot of that is that you have manageable complexity regardless of the size of the system. You take that spaghetti and you turn it into something that is very nicely organized. I want to take a moment here to reflect on why LLMs are not simply generating machine code rather than highle language code. It's certainly a reasonable question and I think that the reasons that applied to human programmers decades ago are just as applicable to LMS today. So for one thing, we know that context is limited. The context for an LLM, the context window might be a lot larger than what a human is able to hold in their head. It depends a little bit on how you count that context. Certainly, we have a lot of awareness of background facts that we've sort of compressed into our brain. Um but uh context is definitely a scarce resource for LLMs just like attention and ability to reason perhaps call it working memory is a scarce resource for people.</p>
</details>

今天，关于库的论点一如既往地有力。所以，你可能会争辩说，为什么我们不让AI生成所有库的代码呢，因为它又快又便宜。也许我们可以根据我们特定应用程序的需求进行定制。但是，要正确测试和验证这些代码将是一个巨大的挑战。因此，我们确实需要能够使用可靠、受信任的组件和模块来构建我们的系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The argument for libraries is as strong today as it ever was. So while you could make the argument, oh why don't we just let the AI generate all the code for the libraries since it's fast and cheap. Maybe we can customize it to the needs of our specific application. Getting that code properly tested, properly verified is going to be a huge challenge. And so we really want the ability to use reliable, trusted components and modules to build our systems.</p>
</details>

说到这里，我确实需要为Temporal做一点宣传。Temporal能让你做的是，它能让你抽象出云端软件的可靠性。它提供**持久执行**（durable execution: 一种软件执行模型，确保即使在系统故障或中断的情况下，程序也能从中断点恢复并继续执行），这意味着它将可靠性问题转移到一个独立于你的应用程序的代码片段，你的应用程序无需担心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On that note, I do need to put in a little pitch for temporal. What temporal allows you to do is it allows you to abstract away the reliability of your software in the cloud. It provides durable execution, which means that it's shipping that reliability problem to a separate piece of code that's outside of your application that your application doesn't need to worry about.</p>
</details>

### 形式化方法：实践演示

现在，让我们深入探讨有趣的部分，那就是**形式化方法**（formal methods: 基于数学和逻辑的严格技术，用于软件和硬件系统的规范、开发和验证，以确保其正确性和可靠性）。我想直接给大家看几个演示。在这些演示中，我将使用**Daphne语言**（Daphne language: 一种用于编写可验证代码的编程语言，允许将数学证明嵌入到代码中）。Daphne允许你使用一种自定义编程语言，该语言可以生成各种其他语言的输出，无论是JavaScript、Python还是C，应有尽有。Daphne允许你将证明与代码内联，从而让定理证明软件能够验证代码是否完全符合你的预期。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's now go ahead and dive in on the fun part, which is formal methods. And I want to shoot straight to a few demos. Now, in these demos, I'm going to be using the Daphne language. What Daphne allows you to do is it allows you to use a custom programming language that generates output to a whole variety of other languages, whether it's JavaScript, Python, um, or C, you name it. What daffany allows you to do is it allows you to put proofs in line with your code, allowing theorem proving software to come along and verify that that code does exactly what you said you wanted to do.</p>
</details>

好的。我这里有一个用Daphne语言编写的程序，它有一个函数，这里称为方法，它做的事情非常简单：它执行“索引查找”。它将在一个数组中搜索特定数字的索引。我可以对此编写一些断言：数组长度大于零；返回的结果数字，如果未找到则为-1，否则为小于数组长度的某个数字等等。现在，我可以直接运行Daphne验证器来验证这个程序。太棒了，没有发现任何缺陷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So I have a program here that is written in the Daftly language and it has one function. It's called a method here and it does something very simple. So it does index up. So what it's going to do is it's going to search an array to find the index of a particular number and I can write a number of assertions about this. The array length is greater than zero. The number returned in that result is either negative 1 if it's not found or the uh some number that is less than the length of the array and so forth. What I can now do is I can just go ahead and I can run the Daphne verifier on that program. Great, no bugs.</p>
</details>

让我们生成一个Python程序来执行这个功能。我们可以看到程序在运行之前会先进行验证。所以我知道所有关于程序的断言在程序运行之前都已得到检查。这是一种极其强大的技术，因为它会生成一个Python库，可以集成到你的代码中。现在假设我在这里对算法做了一个小改动，也就是说我引入了一个缺陷。如果我再次运行，验证器就会介入并抛出错误，从而避免了我们看到这个缺陷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's go ahead and generate a Python program that exercises this functionality. And we can see that the program first verifies before it runs. So I know that all of those assertions that are proven about the program have been checked before that program runs. This is an extremely powerful technique because it spits out a Python library. It's something that can be integrated into your code. Now suppose I come over here and I make a small change to the algorithm, which is to say I've introduced a bug. If I now go back and I try to run that again, the verifier steps in and throws an error and we are saved from seeing that bug.</p>
</details>

好的，让我们回到演示。所以，有一点要记住的是，验证的有效性取决于规范。如果我遗漏了任何需要检查的内容，就会给缺陷留下可乘之机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, let's return to the presentation here. So, one thing to keep in mind is that verification is only as good as the specification. If I leave out anything that needs to be checked, that creates an opportunity for bugs. [snorts]</p>
</details>

### 形式化方法的商业价值

我想强调的是，在过去的几十年里，形式化方法已经以令人印象深刻的规模在商业上变得相关。例如，**Scl微内核**（Scl micro kernel: 一个经过完全验证的操作系统微内核，通常用于嵌入式系统和安全关键型应用）是一个经过完全验证的操作系统。它是一个简单的操作系统，通常用于嵌入式系统和安全关键型应用程序，但它确实是一个操作系统。**CompCert C编译器**（CompCert C compiler: 一个经过形式化验证的C语言编译器，广泛用于安全关键型应用和航空航天工业）也常用于安全关键型应用程序以及航空工业，它是一个经过完全验证的编译器。也就是说，形式化方法已被用于确保该编译器在给定C程序时所生成的代码，能够完全按照该C程序应有的功能执行。**Project Everest**（Project Everest: 一个致力于构建和验证加密库的项目，其成果广泛应用于保护互联网流量）致力于开发加密库，包括当今广泛部署的、保护互联网流量的库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I want to emphasize that in the last few decades formal methods have become commercially relevant on a really impressive scale. For example, the Scl micro kernel is a fully verified operating system. It's a simple operating system typically used for embedded systems and security critical applications, but it is an operating system. The comfort C compiler again often used in security critical applications as well as in the aviation industry that is a fully verified compiler. That is to say that formal methods have been used to ensure that the code that that compiler admits given a C program does exactly what that C program is supposed to do. Project Everest works on libraries for cryptography, including libraries that are widely deployed today, protecting internet traffic.</p>
</details>

令人印象深刻的是，在微处理器领域，几十年来，形式化方法一直被用于确保这些设计的正确性。人们有巨大的动力来确保这些系统按预期运行。其中一个非常酷的事情是，在过去的20多年里，验证的规模和速度都取得了巨大的进步。这与基准测试的兴起恰好吻合。基准测试在塑造一个行业方面可以发挥巨大作用。它为人们提供了一个关注点。因此，我们可以看到基准测试的成功率已从30%左右上升到接近100%，同时这些基准测试的运行时间却下降了50倍甚至更多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And really impressively in the microprocessor space now for several decades, formal methods have being used to ensure the correctness of those designs. There has been just a huge motivation to make sure that these systems are performing as expected. And one of the things that's really really cool is that there has been just tremendous progress in terms of the size and speed with which verification can be performed over the last sort of 20 plus years. And this really coincides with the rise of benchmarks. Benchmarks can have a tremendous role in shaping an industry. It gives folks something to focus on. And so we can see that success rates for the benchmarks have gone from the 30%ish range up to nearly 100% while at the same time the runtime on those benchmarks has gone down by a factor of 50 or more.</p>
</details>

现在，有一些你可以使用的验证工具，我想把它们分成几个不同的类别。**静态验证**（static verification: 在不执行程序的情况下，通过分析代码来验证其正确性和属性的方法）可能是你最熟悉的。我从底部开始说起。如果你使用类型系统，这是一种简单的静态验证形式，但也有方法可以为类型系统附加更多检查。跳到顶部，我们刚刚看到了Daphne Ron Spark。数据是定理和代码之间紧密耦合的另一个例子，还有其他一些众所周知的系统，例如Lean，它们提供独立于代码的定理证明。这些工具虽然非常强大，但问题在于你需要确保代码所做的事情与你编写的证明是相同的。**模型检查**（Model checking: 一种形式化验证技术，用于检查有限状态系统是否满足给定规范）处理有限状态机并证明这些有限状态机的属性。另一方面，**定理证明**（Theorem proving: 一种形式化验证技术，通过逻辑推理和数学证明来验证系统或程序的属性）没有这个限制，因为它能够利用更强大的推理技术，即自动化推理技术。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there are a handful of verification tools that you can use today and I want to break them down in a few different categories. So static verification is probably that which you are most familiar with. I'm starting from the bottom here. If you are using type systems that is a simple form of static verification but there are ways to attach more checks to the type system. Jumping up to the top we just saw Daphne Ron Spark. data is another example of tight coupling between those theorems and the code and then there are other systems that are also wellknown and lean for example that provide theorem proving separate from the code the problem there while those tools are super super powerful is that you do need to make sure that what the code does and what you have written in terms of the proof are the same Model checking deals with finite state machines and proving properties about those finite state machines. Theorem proving on the other hand doesn't have that limitation because it is able to take advantage of more powerful reasoning techniques, automated reasoning techniques.</p>
</details>

### 代理式编程的实用技巧

好的，让我们来谈谈好东西：代理式编程。现在，我想给大家一些非常实用的建议，你可以在日常工作中尝试，看看能获得什么样的好处。这些可能不是你会在整个代码库中应用的东西，但当你努力让代理在非常具体的代码片段上做你想做的事情时，这些都可能非常有价值。其中一些是我们可能比较熟悉的：详细的规范、使用类型语言、编写模块化代码，这些都是我们基本上一直在做的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, let's get to the good stuff. Agentic coding. Now, I wanted to give you a set of really practical things that you can try in your day-to-day work to see what sorts of benefits you can get. These are probably not things that you're going to apply across the code base, but when you're struggling to get the agent to do what you want it to do on a very specific piece of code, these could all be pretty valuable. So some of these are things that we are probably reasonably well verssed with. So detailed specifications, using type languages, doing modular code, these are all sort of things that we pretty much do anyway.</p>
</details>

但有些我们可能不会做的事情是与LLM互动，要求它进行明确的风险分析，要求它编写**安全案例**（safety cases: 一种结构化文档，用于证明系统在特定操作条件下是安全的，包括潜在风险、缓解措施和证据），即关于可能出错的事情以及如何在代码中缓解这些事情的陈述。这与形式化方法不同。这是一种更定性的推理，我们知道LLM可以做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But some things that we might not do are interacting with the LLM and asking it to do explicit risk analysis, asking it to write safety cases, which are statements about things that could go wrong and how that thing that could go wrong is being mitigated in the code. So this is separate from formal methods. This is sort of a um more qualitative reasoning which is something that we know that LLMs can do.</p>
</details>

你可以从高保障系统的设计中获得另一个灵感，即由不同的团队进行编码和验证。这意味着你可以为LLM设置不同的提示，用于测试和最初编写代码。如果你想更进一步，可以使用多个模型提供商。你可以使用一个基础模型进行测试，另一个基础模型编写代码。你可以引入这些形式化方法技术，为关键代码段提供证明。最后，这是一个永恒的建议：保持代码小巧，将可以外包给库的部分外包出去，这些库可以单独测试、验证和开发，这样你的代码就不需要担心这些了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another inspiration that you can take is from the design of high assurance systems where they have separate teams do the coding and the verification. That means that you can have separate prompts to the LLM for testing versus for writing the code in the first place. And if you want to take that to another level, you can use multiple model providers. So you can use one foundation model for the tests and one foundation model to write the code. You can bring in those formal methods techniques to give proofs around sections of critical code. And lastly, this is sort of the timeless advice, keeping your code small, outsourcing those things that can be to libraries which can be separately tested, validated, developed, and now your code doesn't need to worry about it.</p>
</details>

### 软件3.0与新的保障需求

好的，让我们花一分钟谈谈**软件3.0**（Software 3.0: Andrej Karpathy提出的概念，指以大型语言模型（LLMs）为核心，通过提示词而非传统代码来“编程”的软件开发新范式）。这是Andre Karpathy提出的一个想法，即提示词可以真正作为程序发挥作用，我们今天所做的是通过AI、通过LLM进行编程，这是一个全新的编码世界，无论是LLM直接解决你需要解决的问题，还是它生成代码，或者循环并使用工具，或者它们的任何组合，以达到你想要的系统行为。这带来了对新保障技术的巨大需求。对吧？因为LLM本质上是**非确定性**（non-deterministic: 指系统在相同输入下可能产生不同输出的特性）的，而且状态空间绝对巨大，我们讨论过的所有验证技术基本上对这种形式的软件都没有任何作用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, let's talk for a minute about software 3.0. So this is the idea promoted by Andre Karpathy that prompts can really function as programs that what we're doing today is we are programming through AI through LLMs and it's a new world of coding whether that means that the LLM directly solves whatever problem you need solved or whether it generates code or perhaps loops and uses tools or any combination thereof in order to get to whatever behavior you want for the system. This opens up a tremendous need for new assurance techniques. Right? Because LMS are fundamentally non-deterministic and because the state space is absolutely huge, all of the verification techniques that we have discussed have basically no bearing on this form of software.</p>
</details>

话虽如此，并非全是悲观和厄运。我真的对这样一个想法感到兴奋：尽管存在新的、不同的故障模式，但也可能出现新的弹性形式。LLM可以响应意想不到的输入。它们具有处理模糊性的能力。你可以想象各种架构，无论是我们今天常见的纯代理架构，还是在遇到某些错误条件时可能调用LLM的架构，这些架构实际上都在提前预防并保护世界免受各种软件故障的影响，而且可能以非常简单有趣的方式实现。所以我认为这是一个非常有意思的想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That said, it's not all gloom and doom. And I am really excited by the idea that despite having new and different failure modes, there are also potentially new forms of resilience. LLMs can respond to unanticipated inputs. They have that ability to deal with ambiguity. And you can imagine lots of architectures whether they are pure agentic architectures as we often have today to ones that maybe invoke LLMs once certain error conditions are encountered that are actually getting ahead of and protecting the world from all kinds of software faults and perhaps doing it in really simple and interesting way. So I think this is just a tremendously interesting idea.</p>
</details>

### 代理式代码的成本与未来

好的，让我们来谈谈成本。这是一个重要的话题。那么，代理式代码的成本是多少？我用**GPT5 codeex**（一个大型语言模型）编写了这个非常简单的游戏。我花了大约2分钟进行提示。我们可以把这部分时间放在一边，我不打算把我的时间计入成本。GPT5 codeex创建了60万个输入token，拥有350万个缓存输入token，4.8万个推理token，然后返回了2.8万个token。生成这个游戏的成本大约是2美元。有趣的是，生成输出token的成本只占总成本的15%左右。其余的成本都花在了重复使用输入token（在运行测试时）和推理token上。就像人类编写的代码一样，实际编写代码的时间只占构建软件总时间的一小部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, let's get to cost. This is one of the big topics. So, what does agentic code cost? I vibe codeded up this very simple game. I spend about 2 minutes prompting. We can set that aside. I'm going to not count my time towards the cost. GPT5 codeex. It's creating 600,000 input tokens and it has 3.5 million cached input tokens, 48,000 reasoning tokens, and then is returning 28,000 tokens. The cost to generate this game was about $2. And the thing that's interesting here is that the cost to generate the output tokens is only about 15% of the overall cost. The rest of which is going into the repeated use of input tokens as tests are being run and the reasoning tokens as well. As it with human written code, the amount of time that you spend actually writing the code is a small fraction of the overall time that's spent to build the software.</p>
</details>

好的，让我们来分解一下代码的成本。对于高保障代码，如果我们看看航天飞机或空客的例子，这些数字，如果你以1990年的航天飞机为例，大约是每行代码1000美元。如果将其转换为2005年的美元，可能更像是2500美元。在某些情况下，例如安全高保障软件，甚至报价高达每行代码3000美元。对于典型的软件开发，实际生产软件的成本更像是10到100美元，但没有使用高保障技术开发。在某些情况下，例如安全高保障软件，报价高达每行代码3000美元。如果你有低成本的承包商，你可能可以将这个数字降至1到10美元。这都是在不考虑任何AI或代理式代码生成的情况下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, so let's bring it down and let's look at the cost of code. So for high assurance code, if we look at something like the space shuttle or the Airbus example, the numbers there, if you take $ 1990 from the space shuttle, it was about $1,000 per line of code. If you translate that into $205, it's probably more like $2,500. And in some cases, so for example, for security high assurance software, numbers as high as $3,000 per line of code have been quoted. For typical software development, it's more like $10 to $100 for real production software, but nothing that is developed with the high assurance techniques. And in some cases, so for example, for security high assurance software numbers as high as $3,000 per line of code have been quoted. If you have lowcost contractors, you may be able to bring that number down as low as $1 to $10. This is all without considering any AI or agentic codegen.</p>
</details>

对于代理式编程，我给出了一个相当宽泛的范围，包括廉价模型生成代码。如果它们不进行太多迭代，成本可能会更低，而更昂贵的模型则会更努力地生成代码。无论你如何计算，你看到的都是至少一千倍，可能大约一万倍的差距。如果你撇开代理式编程中涉及人员的成本，只看代理式编程这部分，那么代码的生成成本远低于典型软件。这很有趣，因为高保障代码和典型软件之间的成本差距只有大约100倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For the agentic coding, I've put a pretty broad range that includes just cheap models spinning out code. It could probably go even lower than this if they're not iterating on it very much up to more expensive models that are working harder to generate that code. Regardless of how you slice the numbers, you're looking at a factor of at least a thousand, probably about 10,000. If you set aside the cost of the people involved in the agentic coding, if you just look at that agentic coding piece, that code is being generated far more cheaply than typical software. And this is interesting because the gap between the cost of high assurance code and typical software is only about 100x.</p>
</details>

因此，如果我们推断，我们可以得出结论，代理式编程有潜力以比当今典型软件生产成本低100倍的价格生产高保障软件。这让我们看到了零缺陷的愿景。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if we extrapolate we could conclude that agentic coding has the potential to produce high assurance software 100 times more cheaply than typical software is produced today. That leads us to the vision of zero bugs.</p>
</details>

### 零缺陷愿景是可实现的

软件可靠性是一个已解决的问题。它在航空航天领域得到了解决。它在其他关键行业也得到了解决。随着旨在实现高保障代码的代理的部署，无论是通过使用形式化方法、广泛的流程，还是对抗性测试，等等，我们都可以相信代理将使高保障代码的成本降低100倍，并且在这种背景下，我们将看到无缺陷体验的普及。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Software reliability is a solved problem. It's solved in aerospace. It's solved in other critical industries. And with the deployment of agents geared towards achieving high assurance code, whether that's because they're using formal methods, because they have extensive processes, because they're using adversarial testing, the list goes on and on. We can believe that agents will make high assurance code 100 times cheaper and that in this context we will see a proliferation of bug-free experiences.</p>
</details>

我还想强调的是，这种追求零缺陷的愿景有助于解决当今代理式编程的许多局限性，尤其是在所编写软件的质量方面。当开发人员选择不使用他们可用的代理式编程工具时，通常的原因是修复该软件中的缺陷所花费的时间将比他们最初正确编写软件所花费的时间更多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I also want to emphasize that this push towards a vision of zero bugs serves to address many of the limitations that agentic coding have today. notably around the quality of the software that's written. When developers choose not to use the agent coding tools that are at their disposal, the reason for doing so typically is that it's just going to take them more time to fix the bugs in that software than it would to take them to write the software correctly in the first place.</p>
</details>

一旦我们能够达到代理式编程能够常规性地生成缺陷少于人类编写软件的程度，我们就可以期待其采用率的绝对飙升。我们知道如何做到这一点。我们几十年前就知道如何做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As soon as we can get to the point where agentic coding is routinely generating software that has fewer defects than software written by humans, we can expect absolute takeoff in its adoption. We know how to do that. We've known how to do that for decades.</p>
</details>

### 关于水熊虫的说明

在我们结束之前，我想强调一下，**水熊虫**（tardigrades: 一种极具韧性的微型动物，以其在极端环境下的生存能力而闻名）不是昆虫。这是Ziggy，Ziggy是Temporal的吉祥物，它属于缓步动物门，而不是昆虫。水熊虫是世界上最具韧性的动物之一。它们甚至被发现能在外太空生存。今年早些时候，我们实际上把Ziggy带到了太空，只是为了证明这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before we close, I want to emphasize that tardigrades are not bugs. This is Ziggy. Ziggy is temporal's mascot and Ziggy belongs to the film tardigrada, not an insect. Tardigrades are some of the most resilient animals in the world. They have even been known to survive in outer space. And earlier this year, we actually took Ziggy to space just to prove that point.</p>
</details>

我们在Temporal非常享受构建持久执行作为现代软件可靠基础的过程。如果今天我们讨论的任何内容引起了你的共鸣，请联系我们。我们很乐意交流并探讨任何可能的合作方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are having a lot of fun here at Temporal building durable execution as the reliable foundation for modern software. If anything that we discussed here today resonates with you, please reach out. We'd love to chat and explore how to work together in any possible way.</p>
</details>