---
area: tech-insights
category: technology
companies_orgs:
- Kato.io
- Splunk
- Data Dog
date: '2025-11-24'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Large Language Models
- GP2
- GP3
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=QRWdapxMdSY
speaker: AI Engineer
status: evergreen
summary: 本文探讨了AI架构副驾驶作为软件开发领域中尚未被充分利用的最高投资回报率（ROI）工具。Boris Bogatin和Tufik Pubz指出，尽管代码副驾驶已成为行业标准，但架构决策才是影响项目成败的关键。他们提出了技术架构面临的三大挑战：缺乏可见性、难以量化投资回报率以及在授权开发者时如何规模化提供专业指导。为解决这些问题，文章介绍了三个核心支柱：构建实时可见的数字孪生系统、提供基于数据和ROI的AI驱动建议，以及通过对话式AI代理将专业指导嵌入开发者工作流。最终目标是实现“设计即对齐”，将AI从生产力工具提升为业务的战略杠杆。
tags:
- architecture
- developer-productivity
- digital
- optimization
- software-development
title: AI架构副驾驶：尚未充分利用的最高投资回报率用例
---

### 介绍AI架构副驾驶

大家好，我是Kato.io的首席执行官兼联合创始人Boris Bogatin。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi, I'm Boris Bogatin, CEO and co-founder of Kato.io.</p>
</details>

Tufik Pubz：大家好，我是Kato.io的首席技术官兼联合创始人Tufik Pubz。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi, I'm Tufi Pubz. I'm CTO and co-founder also at CADO.</p>
</details>

Boris：今天我们在这里讨论**AI副驾驶**（AI Copilot: 辅助软件开发人员的智能工具）在技术架构中的应用，这是您尚未使用的、投资回报率最高的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today we're here to talk about AI co-pilots for tech architecture, the highest ROI capability you're not yet using.</p>
</details>

在过去两年中，编码副驾驶已成为行业标准，这是一个我们非常关心的话题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A topic that's been near and dear to our heart. Over the last two years, I would say coding co-pilots have become truly table stakes.</p>
</details>

这很有趣，因为三四年前，Tufik和我在他还在Splunk担任副总裁的时候经常谈论，许多顶尖开发者总是说编码副驾驶永远无法取代他们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, it's interesting because, you know, you take it back three, four years ago. I know Tufik and I talk about this a lot. to his days back when he was the VP at Splunk a lot of the you know hot shot developers would always talk about how you know coding co-pilots would never be able to kind of supplement them</p>
</details>

Tufik：对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right to</p>
</details>

Boris：是的，它永远不会奏效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah it would never work yeah</p>
</details>

Tufik：永远不会奏效，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">never work right because how could you</p>
</details>

Boris：但现在，编码副驾驶正在极大地帮助我们提高生产力输出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and now coding co-pilots are helping us tremendously multiply productivity output</p>
</details>

如果您看看幻灯片上显示的整个软件开发生命周期，从软件项目管理到执行再到运营（如Splunk和Data Dog），整个周期都得到了工具的良好支持。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and you know if we look at the whole cycle as you can see on the slide here you know the full life cycle of software development has been so well you know, uh, situated and and and served with tooling from software project management to execution to operations Splunk and Data Dog.</p>
</details>

如今，软件开发生命周期充满了各种工具，编码副驾驶极大地提高了生产力，我们对此感到兴奋，也理应如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today the software life cycle self-development life cycle is filled with tooling coding co-pilots multiplying the productivity and we're excited about that which we should be.</p>
</details>

但当您退一步思考时，您会问：是否有什么东西缺失了，或者尚未被解决？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But when you step back you step back and you ask the question you know is there something missing and something yet not addressed?</p>
</details>

因为投资回报率最高的副驾驶难道不是我们尚未使用的**架构副驾驶**（Architecture Copilot: 辅助技术架构师进行设计和决策的智能工具）吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because isn't the highest leverage co-pilot the one that we're really not using yet the architecture co-pilot?</p>
</details>

为什么是架构？归根结底，架构是决定投资回报率高低的关键。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why architecture? At the end of the day, architecture is where ROI is won or lowest.</p>
</details>

如果您在错误的架构方向上投入大量编码，难道不会导致糟糕的代码、糟糕的结果以及大量的返工和技术债务，而不是真正朝着正确的架构方向前进吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you're going into the wrong direction with a lot of coding output, are you not going to get to poor code, poor results, and a lot of redo and tech debt versus moving truly into the right architectural direction?</p>
</details>

对我们来说，架构决策是推动九位数支出的因素，它通过业务目标以及技术如何促进而不是阻碍这些目标来实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To us, architecture decisions is what drives things like nine figure spends um through business objectives and and and how tech fuels them instead of slowing them down.</p>
</details>

它决定了您是能够保持领先并做到行业最佳，还是会陷入技术债务并总是疲于追赶。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How you can stay ahead and bestin-class versus drown in tech debt and always playing catch-up.</p>
</details>

这正是我们围绕这个话题聚集在一起的核心原因，我们正在与今天将讨论的许多利益相关者广泛地看到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's really at the heart of you know why we've come together here um around this topic and uh we're seeing this across the board with a number of stakeholders that we'll talk about today.</p>
</details>

今天的现实是，很多工作都是通过电子表格、**部落知识**（Tribal Knowledge: 组织中非正式、未文档化的经验和信息）、直觉来管理的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today's reality a lot of the work is managed this with spreadsheets tribal knowledge gut instinct</p>
</details>

这些工作一直由非常聪明的人，如首席技术官（CTO）和架构师来完成，并且越来越多地以扁平化的方式委托给开发者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it's always been done by very smart folks CTO's and architects and increasingly delegated in shift flat fashion to developers</p>
</details>

我们很高兴看到整个有机过程，我们喜欢它，但我们一直认为一定有更好的方法，尤其是在AI时代，一定有更好的方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and it's fantastic to see that the whole organic process we love it but we we we've always thought there's got to be a better way and especially in a day of AI there's got to be a better way</p>
</details>

所以今天我们想探讨三个关键挑战，这些挑战让领导者夜不能寐，我们日复一日地听到这些问题，以及它们是如何被解决的，以及在CTO的闭门晚宴以及我们与企业和成长型公司的合作中，未来的样子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so today we want to walk through the three critical challenges that are keeping leaders up at night that we hear day in and day out and how they're being solved and what that future looks like in closed door CTO dinners and you know our work with enterprises and growth stage companies the like we keep hearing the same pain points</p>
</details>

我知道你一直深陷其中，你从架构领导者那里听到的最主要的三件事是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I know you've been in the weeds on this what are the top three things you keep hearing from architecture leaders</p>
</details>

Tufik：是的，让他们夜不能寐的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah that are keeping him up at night</p>
</details>

### 架构领导者面临的三大挑战

Tufik：好的，基于我们进行的许多对话以及我作为架构师和多家公司长期CTO的经验，我们通常会遇到至少三个重大挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">oh great so so based on a lot of conversations we've had and actually on my own experiences as an architect and a CTO long-term CTO in in many companies there's at least three big challenges that we typically encounter counter.</p>
</details>

第一个是**可见性**（Visibility: 系统或架构状态的透明度）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, the first one is visibility.</p>
</details>

随着您的技术资产增长，您开始在整个环境中“盲飞”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, as your tech estate grows, you start to fly blind across your landscape.</p>
</details>

请原谅我这里混用了比喻，但我喜欢这些比喻，您知道，您开始在那个环境中盲飞，很难衡量您身在何处或制定实际计划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Excuse the mixed metaphor here. I like these metaphors, but you know, you start flying blind across that landscape and and it's really hard to kind of gauge where you are or or or to make real plans.</p>
</details>

因此，缺乏可见性是最大的问题之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, that lack of visibility is one of the biggest issues.</p>
</details>

另一个是拥有**投资回报率**（ROI: Return on Investment，投资回报率）关联且有数据支持的前进路径。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other one is having ROI tied and databbacked path forward.</p>
</details>

您知道，知道在哪里集中精力，优先考虑什么，以及如何以数据支持的方式捍卫您的决策，这始终是一个挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know, knowing where to focus, what to prioritize, and how to defend your decisions in a way that can be backed up by data is really it's always been a challenge.</p>
</details>

我的意思是，我参加董事会或与其他高管（无论是初创公司还是大公司）开会时，问题总是：“我要求做一些事情，或者我被要求做一些事情，但很难总是给出有数据支持的良好答案，对吧？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, I I sit on boards or with other executives, you know, at startups and at big companies and the question is always well, you know, I ask for things or I'm ask for stuff and it's hard to always to to to have a good answer that is data back, right?</p>
</details>

那么，您如何做到这一点，特别是当它与投资回报率挂钩时，因为归根结底，我们如何花费和管理我们的支出？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so how do you do that and especially that is tied to ROI because at the end of the day you know how do we spend how do we manage our spend.</p>
</details>

第三个挑战是某种形式的**自主指导**（Autonomous Guidance: 自动化、智能化的决策和建议）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The third one though is some form of autonomous guidance</p>
</details>

现在，许多组织正在进行**左移**（Shift Left: 将决策和责任更早地推给开发者），并将越来越多的决策权委托给开发者并赋能他们，这是一件好事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now that a lot of organization are shifting left and and delegating more and more decision making to the to and empowering the developers which is a great thing.</p>
</details>

但如何大规模地指导他们并为他们提供专业知识，是我们这些天不断面临的第三个大问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">figuring out how to guide them and equip them with expertise um you know at scale is the third big issue that we're that we're constantly facing these days.</p>
</details>

这些问题的主要原因是，我们没有一个可靠的、实时的、全面的服务或依赖关系图，也没有关于事物如何随时间变化的漂移情况，真的没有一个基线供我们参考。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um and the main reason for these issues is uh you know there's there's no dependable live holistic map of our services or dependencies and drift how things change over time really there's no baseline from us to go from.</p>
</details>

因此，结果就是决策缓慢且防御性强。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So as a consequence you get slow defensive decisions.</p>
</details>

您会有无法证明的冗余支出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You got redundant spend you know that you can't justify.</p>
</details>

您会有未得到妥善管理的风险。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know you got risk that's not properly managed.</p>
</details>

您知道，Boris您提到了部落知识等等，您基本上是凭意见而不是凭数据进行规划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know you're planning you know you mentioned Boris about you know tribal knowledge and so on. You're planning basically by opinion instead of planning by data.</p>
</details>

所以我们真正需要的是某种实时可见性，它能捕捉我们系统中所有的混乱、所有的知识和不断变化的依赖关系，本质上就像开发者有一个共享的代码本，一个共享的当前现实，用于我们的工作系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what we really need is some kind of live visibility that captured all all that messiness in our system, all that knowledge and the shifting dependency in essence like a sh like you know the developers have a shared code book a shared current reality for us for for our working systems you know because without it really you're making sometimes multi-million dollar bets without knowing what you already own.</p>
</details>

因为没有它，您有时会在不知道自己已经拥有什么的情况下，做出数百万美元的赌注。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and and you know we've seen that actually in uh in some of the prospects some of the people we're talking to behind closed doors.</p>
</details>

Boris：绝对如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">absolutely.</p>
</details>

Tufik：是的，是的。所以为了延续这个类比，我知道我在这里混用了比喻，但为了延续这个类比，如果您想规划一条富有成效的前进道路，您真正需要的是一张准确、最新的地图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. So to continue the analogy I know I'm mixing metaphors using analogies here but you know to continue the analogy if you want to chart a fruitful path forward uh you know what you really need is an accurate up-to-date map.</p>
</details>

所以当您规划前进道路时，您需要一张地图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when you're charting path forward you need a map.</p>
</details>

您需要某种**活架构图**（Living Architecture Map: 实时更新并反映系统当前状态的架构图），它会随着您的系统演进而自我更新。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You need some kind of living architecture map that updates itself as your system evolves.</p>
</details>

这就是我们正在寻找的主要事情之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's kind of like one of the major major things that we're looking for.</p>
</details>

Boris：绝对如此。谢谢，Tufik。完全正确。所以您有了可见性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely. Thanks, Tik. No, completely. So you have visibility.</p>
</details>

Tufik：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

Boris：但现在怎么办？您如何确定优先级？我知道资源非常稀缺。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But now what? How do you prioritize? I know there's a lot of scarce resources.</p>
</details>

业务希望实现一些非常重要的目标，实现快速增长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Business wants to achieve some, you know, very important objectives, rapid growth.</p>
</details>

Tufik：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

Boris：每个人都认为自己的项目是成功的关键。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And everyone thinks their project is the key to success,</p>
</details>

Tufik：但没有确凿的证据。您如何调和这一点？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but without the good proof. How do you reconcile that?</p>
</details>

Boris：是的，我的项目是关键。您必须做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. My project is is the critical thing. You have to do it.</p>
</details>

Tufik：当然。显然。好的。所以，您问我的是，我如何获得与业务影响相关的专家排名行动？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Of course. Obviously. Okay. So, so what you're asking me is how can I get expert ranked actions that are tied to business impact</p>
</details>

因为归根结底，这才是重要的，比如成本、性能、风险、上市时间，所有这些对业务都很重要的事情，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because at the end that's what that's what matter like cost performance risk time to value all these things that matter to the business right</p>
</details>

所以不仅仅是“我下一步应该做什么”或者“谁的项目更受青睐”，而是“考虑到我们的限制、我们现有的投资和我们的战略目标，我们下一步应该做什么？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so it's not just what should I do next or sh what should we know and or whose project is in favor right it's what should we do next given our constraints our existing investment and our strategic goals</p>
</details>

这才是真正的问题，这才是您真正应该关注的，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that's real question that's really what you should be focusing on right</p>
</details>

Boris：完全正确。我的意思是，我认为这就是我们所听到的挑战所在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">completely I mean I I think this is what we're hearing where the challenge really lies.</p>
</details>

我一直喜欢的是参加我们正在进行的那些晚宴和播客，以及整个“架构解构”运动，并提出这些问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's always what I always love is getting into those dinners that we're doing and podcasts and the whole architecture deconstructed movement and asking those questions.</p>
</details>

公开提出这些问题。您总是，您知道，我总是对那些回应的诚实和亲密感到惊讶，它们几乎与您所期望的完全不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, that nice t-shirt. Asking those questions. Asking those questions openly. You always, you know, kind of I'm always surprised by the, you know, kind of the the the honesty and and intimacy of the responses that are really almost demarried from what you expect.</p>
</details>

您期望某些事情，比如“我想要这里的完美”或其他什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're expecting certain things like I want perfection here or something else.</p>
</details>

人们会说：“我只是想确保业务理解我们所做的事情很重要，并为我们分配预算，我们能够推动业务向前发展。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">people are like I'm just trying to make sure that you know business understands what we're doing is important and allocating budget to us and we're able to drive the business forward really care and not like kind of poke at a bunch of random directions.</p>
</details>

所以无论如何，我完全理解这一点，我们如何判断什么是正确的架构？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So anyway, so I I totally get this one and how do we tell what is the right architecture?</p>
</details>

我们如何优先安排工作？指标是什么？我们使用什么洞察力来了解如何实现这种影响？对吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do we prioritize the work? What are the metrics? What insights do we use to know this kind of to achieve that kind of impact? Right.</p>
</details>

Tufik：是的，绝对如此。所以您需要一个推荐系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, absolutely. So you know you have to have a system of recommendations.</p>
</details>

这些推荐要真正实现您所说的，就必须是可解释和可追溯的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The reason these recommendations really to fulfill what you're talking about must be explainable and traceable.</p>
</details>

本质上，这个推荐为什么有效？它来自哪里？预期的影响是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In essence why is this recommendation valid? Where is it coming from? What is the expected impact of it?</p>
</details>

然后，您知道，针对我们的一些关键目标，可衡量的结果是什么？对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you know what are the measurable outcomes against some our key objectives. Right?</p>
</details>

所以这导致了一个路线图，其中每个倡议都明确地根据影响进行评分，投资回报率得到证明，并且业务目标和最佳实践都得到了考虑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what this results is is a road map where every initiative is clearly scored for impact with the ROI justified and kind of the business objectives and best practices are all taken into account.</p>
</details>

这才是真正的关键。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's really what it comes down to</p>
</details>

Boris：完全正确。如果我能插一句，对我来说，谈论这个似乎是显而易见的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">completely. And if I may just jump in for a second course to me it seems speaking about this seems like an almost complete no-brainer.</p>
</details>

在您得到这个答案之前，为什么您会想开始编码和开发软件呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why would you ever want to start coding and developing software until you have this answer?</p>
</details>

因为如果您回答了这个问题，那么从那时起的一切才是真正的生产力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because if you answer this then everything from there that's true productivity.</p>
</details>

产出更多的代码行，这很棒，因为现在您知道您正在朝着正确的方向编码，而不是错误的方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Get more lines of code out that's great because now you know you're coding in the right direction versus the wrong direction.</p>
</details>

Tufik：完全正确。这就像那个老笑话：“准备，开火，瞄准。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Totally. It's the old you know ready fire aim joke. You know [laughter]</p>
</details>

Boris：您不希望那样。您不想那样做。对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you don't want that. You don't want to do that. Right.</p>
</details>

Tufik：所以这里也是一样。对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So so it's it's the same it's the same thing here. Right.</p>
</details>

Boris：所以Boris，正如您所说，这些天这甚至更为关键，因为**左移承诺**（Shift Left Promise: 将决策和责任更早地推给开发者，以提高效率和质量）赋予了开发者更多的决策权。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is even more critical these days though to your point Boris because this shift left promise which empowers developers to make more decisions</p>
</details>

Tufik：它有一个负面影响，有点黑暗的一面，那就是架构专业知识和标准没有随之扩展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">has a flip side a little bit of darker side which is that architecture expertise and standards are not scaling they didn't scale with that empowerment right</p>
</details>

所以开发者正在做出架构选择，无论您喜欢与否，而架构团队或企业架构团队，无论他们如何审查，都无法有效地扩展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so developers are making architectural choices whether you like it or not and then the architectural gills or the enterprise architecture team whatever they review they just don't scale effectively to that</p>
</details>

所以问题是：您如何在不成为瓶颈的情况下指导他们？对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so the question is how do you guide them without being a bottleneck? Right.</p>
</details>

这在企业中是一个关键问题，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's that's a key question there in in enterprises, right?</p>
</details>

Boris：您知道，我们总是听到这种说法，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, and we we hear it all the time, right?</p>
</details>

Tufik：是的，绝对如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Absolutely.</p>
</details>

Boris：我们听到团队说：“是的，这很困难。我们有所有的演示文稿，我们有所有的策略，我们每两周开一次会，但我们听到的只是沉默。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We hear you hear teams saying, you know, yes, it's difficult. you know, we have all the presentations, we have all the strategies, we get together every two weeks and, you know, we hear crickets.</p>
</details>

我们正在与每个人交谈，每个人都在努力吸收，但最终我们理解他们，因为他们正在努力构建功能并快速满足业务需求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're we're we're talking to everyone and everyone is kind of trying to absorb, but ultimately we get it because they're trying to build features and ship to business needs and ship fast</p>
</details>

他们的功能与我们的标准无关。他们正在努力适应他们特定的能力，以及他们如何将这些能力在架构上映射到我们想要的基线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and their features have nothing to do with our standards. They're trying to fit their specific, you know, uh, capabilities and how do they kind of architecturally map that to the baseline that we want.</p>
</details>

Tufik：没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's right.</p>
</details>

Boris：需要的是什么？需要的是适合开发者的定制设计，这些**副驾驶**（Copilot: 辅助软件开发人员的智能工具）能够提供对话式指导和持续指导，但所有这些，我知道这听起来很神奇，但所有这些都内置了策略和指导，所以它们都具有策略和指导意识，并且嵌入在开发者工作流中，这似乎是正确的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's needed, right? What's needed are tailor fit designs that are suited for the developers co-pilots that can give them in a kind of conversational guidance ongoing guidance but all of this I mean I know it sounds magical but all of this with policy and guidance built in so it's all policy and guidance aware right and it's embedded in developer workflow that seems like the right answer</p>
</details>

Tufik：我们会讨论这是否可以实现，但这似乎是正确的答案，对吧？是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we'll talk about whether that's achievable but that seems like the right answer right yeah</p>
</details>

Boris：您知道，**治理悖论**（Governance Paradox: 在追求自治和生产力的同时，确保一致性和合规性的挑战）在于，没有对齐的自治会造成混乱，而没有自治的门禁会扼杀生产力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and you know the governance paradox is all about like autonomy without alignment creates chaos and gates without autonomy kills productivity.</p>
</details>

我们知道这是真的。那么您如何调和呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we know that that's true. And so how do you reconcile, right?</p>
</details>

我们希望开发者获得专家指导，生成符合要求的设计，并与战略保持一致，这样他们就不必等待，并且内置了对齐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We want to get Yeah. We want to get developers to get that expert guidance, generate designs that are compliant, and stay aligned to strategy so they're not waiting and they have built-in alignment uh built in. Exactly.</p>
</details>

Tufik：对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right.</p>
</details>

Boris：绝对如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely.</p>
</details>

### 实现架构副驾驶的三大支柱

Tufik：好的，现在让我们稍微谈谈如何解决这个问题，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, let's let's shift now to a little bit of how do we solve this, right?</p>
</details>

我们讨论了这些非常重要的三个挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we talked about these three challenges really important.</p>
</details>

让我们探讨一下如何最有效地思考它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's address how we really kind of can think about them most effectively.</p>
</details>

是哪三个支柱使得真正的架构副驾驶成为可能，以及实现它们需要什么？请说。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What are those three pillars that make a true architecture co-pilot possible and what it takes to kind of accomplish them? Go ahead.</p>
</details>

Boris：是的，绝对如此。所以，Tufik，您知道，您和我在这个问题上思考了相当长的时间，我们开发了这三个非常重要的支柱，它们共同支撑着整个架构基础，整个架构业务，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, absolutely. So, Boris, as you know, you and I, Boris and I have been thinking about this for quite some time and and we've developed this kind of these three pillars that are really really important that together hold up this whole foundation, this whole business of architecture, right?</p>
</details>

所以第一个是我们所说的**技术栈**（Stacks: 构成软件系统的一系列技术组件）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the first one is what we call stacks.</p>
</details>

您知道，它是您的实时可见性层。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, it's your live visibility layer.</p>
</details>

还记得我之前谈到的地图吗？如果您想规划路线，需要一张更新的最新地图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Remember I talked about the map earlier having an updated up-to-date map if you want to chart a course.</p>
</details>

所以本质上，能够从跨云、跨Kubernetes服务、跨日志平台摄取数据，构建模型依赖关系、随时间变化的漂移和变化，然后以**数字孪生**（Digital Twin: 物理系统或过程的虚拟模型，实时反映其状态和行为）的形式维护这种活架构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in essence being able to ingest data across clouds across Kubernetes services across logging platforms you know building model dependencies drift and change over time and then maintaining this kind of living architecture in form of a digital twin.</p>
</details>

所以您从各地获取所有这些数据，然后将其整合到这个数字孪生中，构建您的部署、您的架构以及一个反映现实的真实系统模型，而不是您的维基百科或您认为您拥有的东西，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you get all that data from everywhere and then you fit it into this build together this digital twin of your deployment your architecture and a true system model that reflects the reality not what's in your wiki or not it's what you have as opposed to what you think you have right that's really the first pillar having that that map that live visibility map</p>
</details>

这确实是第一个支柱，拥有那张地图，那张实时可见性地图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that makes sense</p>
</details>

Tufik：是的，归根结底，如果您不了解这一切的意义，您想驱动到哪里去？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah at the end of the day if you don't understand what's this all about what do you try and drive to where do you where is the pot going right um you won't really be able to get there and and and in that context you have to be able to curate those business objectives those requirements the standards and strategy and and be able to kind of couple that together</p>
</details>

您将无法真正到达那里，在这种情况下，您必须能够管理这些业务目标、这些需求、标准和策略，并能够将它们结合在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">absolutely</p>
</details>

Boris：绝对如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">into a context that the AI can leverage in order to make very informed and tailor fit recommendations with expertise you know very custom fit to the specific you know business objectives and workspace objectives specific team objectives they're trying to serve right does that is that kind</p>
</details>

Tufik：将其整合到一个AI可以利用的上下文中，以便做出非常明智和定制化的推荐，并具有专业知识，非常适合他们试图服务的特定业务目标和工作空间目标，特定团队目标，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, absolutely. So now you know this this is where I mean we mentioned AI a couple of times but this is kind of essential.</p>
</details>

是的，绝对如此。所以现在，您知道，这就是，我的意思是，我们提过几次AI，但这非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean one of the major goals is to pri these kind of data back you know best practices uh ROI based recommendations right</p>
</details>

我的意思是，一个主要目标是提供这种有数据支持的、基于投资回报率的最佳实践推荐，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and especially when it comes to architecture you know not to not to kind of minimize the amount of work that takes to do coding copilot but architecture is yet an an a higher level a higher degree higher order of magnitude in terms of uh complexity.</p>
</details>

特别是当涉及到架构时，您知道，并不是要最小化编码副驾驶所需的工作量，但架构在复杂性方面是更高一个层次、更高一个数量级的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so this is a really hard problem and it's it's a um you know the typical problem that you use what's called you know uh distributed problem solving because it's not a oneshot deal.</p>
</details>

所以，这是一个非常困难的问题，它是一个典型的您使用所谓的**分布式问题解决**（Distributed Problem Solving: 将一个复杂问题分解为多个子问题，由多个智能体或系统协同解决）的问题，因为它不是一次性交易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is a problem that where everything is interconnected right so you have to break out all the dependencies and then attack them and then and then work together to actually come up to some kind of recommendation that is global in context right</p>
</details>

这是一个所有事物都相互关联的问题，对吧？所以您必须分解所有依赖关系，然后解决它们，然后协同工作，最终提出某种全局上下文的推荐，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so this is a typical distributed problem solving thing and this is where you know this is perfect so a type of solution for multi- aent systems right</p>
</details>

所以这是一个典型的分布式问题解决问题，这就是，您知道，这很完美，所以是**多智能体系统**（Multi-Agent Systems: 多个自主智能体相互协作以解决复杂问题的系统）的一种解决方案，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so we've you know if you look at how multi- aent system work if you build agents that actually focus on various parts of the problem and then they collaborate towards a solution.</p>
</details>

所以我们，您知道，如果您看看多智能体系统是如何工作的，如果您构建的智能体专注于问题的各个部分，然后它们协同工作以找到解决方案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's really kind of one of the best ways to solve this kind of complex problem.</p>
</details>

这确实是解决这种复杂问题的最佳方法之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right now a multi- aent system right now today rely on large language models LLM right and and LLMs have read practically every every best practice every architecture book and so on.</p>
</details>

现在，当今的多智能体系统依赖于**大型语言模型**（Large Language Models, LLM: 经过大量文本数据训练的深度学习模型，能够理解和生成人类语言），对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So they have a lot of intrinsic knowledge that you can leverage.</p>
</details>

LLM几乎阅读了所有的最佳实践、所有的架构书籍等等。所以它们拥有大量的内在知识，您可以加以利用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But eventually if you think about the evolution of how AI could go in the architectural space, we can start thinking about maybe large architectural models opposed to large language models and then beyond that some kind of true simulation of your environment, you know, some kind of system behavior modeling so that you can actually try different scenarios and maybe simulate different things so you can look at the impact before making an actual decision.</p>
</details>

但最终，如果您思考AI在架构领域的发展方向，我们可以开始考虑**大型架构模型**（Large Architectural Models: 专注于架构知识和决策的AI模型），而不是大型语言模型，再 beyond 那种对您环境的真实模拟，您知道，某种系统行为建模，这样您就可以实际尝试不同的场景，并模拟不同的事物，以便在做出实际决策之前查看其影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's kind of where we see the evolution of this architectural AI going.</p>
</details>

这就是我们认为这种架构AI的发展方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, we're not there yet, but but that's actually the the path forward for us as an AI community for architecture.</p>
</details>

我的意思是，我们还没有达到那个阶段，但这实际上是我们作为架构AI社区的前进道路。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And Tiff, you know, what I love about the notion of multi- aent systems is that ultimately, you know, in our exploration, you know, when we try to think about what's the right way, what's the best way, you know, it's it's amazing to to be able to step back and say, well, listen, all this stuff that we're doing as human teams isn't wrong.</p>
</details>

Boris：Tufik，您知道，我喜欢多智能体系统这个概念的地方在于，最终，您知道，在我们的探索中，当我们试图思考什么是正确的方法，什么是最好的方法时，能够退一步说：“听着，我们作为人类团队所做的所有这些事情都没有错。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a you know we perfected this art with very you know you know high aptitude and and and care and so the process of design reviews is an important process and it's a very effective process except that it doesn't leverage the right amounts of data and we wanted to kind of be able to leverage computational intensity that's maybe higher and that's what we're trying to do with multi- aent system isn't it just replicate human processes effectively with AI right</p>
</details>

这是一种我们以非常高的能力和细心完善的艺术，因此设计评审过程是一个重要的过程，也是一个非常有效的过程，只是它没有利用正确数量的数据，我们希望能够利用可能更高的计算强度，这就是我们试图通过多智能体系统做的事情，不是吗？用AI有效地复制人类过程，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah in essence yeah taking that and and and expanding it at scale using these agents that and function like 24/7, you know, at scale, right? Yeah.</p>
</details>

Tufik：是的，本质上是的，将其大规模扩展，使用这些像24/7一样运行的智能体，大规模地，对吧？是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely. Absolutely. No, that's amazing.</p>
</details>

Boris：绝对如此。绝对如此。不，这太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And look at the outcome is ROI ranked explainable recommendations that truly understand your tech and objectives and act as that trusted adviser across your tech estate proving clear trade-offs across cost, performance, risk, and time and help prioritity of the road map.</p>
</details>

看看结果是基于投资回报率排名、可解释的推荐，它们真正理解您的技术和目标，并作为您整个技术资产的值得信赖的顾问，证明了成本、性能、风险和时间之间的清晰权衡，并帮助确定路线图的优先级。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what I think what I'm really excited about in this context is what we hear from customers.</p>
</details>

在这种情况下，我真正感到兴奋的是我们从客户那里听到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What we hear from customers when they think about architecture co-pilots and they say that you know what what what's really going to move the needle in such a dramatic way is when you go from you know even the best practices that are good and are really important to highlight but they're a little bit more straightforward like migrating from GP2 to GP3 to when you go and you really understand the intricacies of the overall architecture and then the data pipeline can be streamlined for next efficiencies on reusability across a variety of applications or other architecture patterns that truly move cost and performance needles forward.</p>
</details>

当我们从客户那里听到他们对架构副驾驶的看法时，他们说真正能以如此显著方式推动变革的是，当您从那些虽好且重要但更直接的最佳实践（例如从GP2迁移到GP3）转向真正理解整体架构的复杂性，然后数据管道可以被简化，以提高各种应用程序的可重用性或其他架构模式的效率，从而真正推动成本和性能向前发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's when you get so much bang for the buck</p>
</details>

那时您才能获得巨大的回报。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and yeah and it's tied to an ROI and it's tied to impact and there's a clear traceability as we said before.</p>
</details>

Tufik：是的，它与投资回报率挂钩，与影响挂钩，并且如我们之前所说，有清晰的可追溯性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's I mean you take that to your board or to your executive meetings whatever and it's there.</p>
</details>

所以，我的意思是，您将它带到您的董事会或高管会议上，它就在那里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's there's no controversy around it, right?</p>
</details>

对此没有争议，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's perfect. Yeah.</p>
</details>

这很完美。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um you know so that's good. Now there's a third pillar.</p>
</details>

您知道，这很好。现在有第三个支柱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Remember there's three pillars, Boris.</p>
</details>

Boris，记住有三个支柱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We don't want the thing to topple down, you know. [laughter]</p>
</details>

我们不希望它倒塌，您知道。[笑声]

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The third pillar is having some kind of conversational architectural agent.</p>
</details>

第三个支柱是拥有某种**对话式架构智能体**（Conversational Architectural Agent: 能够通过对话与用户交互，提供架构建议和指导的AI系统）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is where the world is moving to this conversational mode of interacting with any system that you have.</p>
</details>

世界正在向这种与您拥有的任何系统进行交互的对话模式发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So interacting with your architectural through a conversational agent is is critical for us as an AI community to move forward.</p>
</details>

因此，通过对话式智能体与您的架构进行交互，对于我们AI社区向前发展至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it allows us to embed you know tailor fit designs guidance and expert QA Q&A into the into the workflow right.</p>
</details>

它使我们能够将定制设计、指导和专家问答嵌入到工作流中，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this achieves two goals you know allows developers and architects and you know anybody for that matter uh as a matter of fact you know to answer questions about the architecture to ask questions and then be able to get answers about their architecture.</p>
</details>

这实现了两个目标：它允许开发者、架构师以及任何人回答有关架构的问题，提出问题，然后获得有关他们架构的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the second thing you know um and it gives you the developers architects expert advice on optimizing and and the refactoring the architecture.</p>
</details>

第二件事是，它为开发者、架构师提供关于优化和重构架构的专家建议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that having that knowledge in a conversational agent is really really critical.</p>
</details>

因此，在对话式智能体中拥有这些知识非常非常关键。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It also helps developers by you know the next step would be by generating designs for their features giving a set of requirements like PRD and knowing all the governance and controls and guidance that say the architecture team or the chief architect or or whoever has put together they're built in into that agent.</p>
</details>

它还通过为他们的功能生成设计来帮助开发者，提供一套像**产品需求文档**（PRD: Product Requirements Document，产品需求文档）这样的需求，并且知道架构团队或首席架构师或任何其他人制定的所有治理、控制和指导都内置在该智能体中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So whatever designs are given actually follow this guidance intrinsically.</p>
</details>

因此，无论给出什么设计，实际上都内在遵循了这些指导。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right. That's really really critical. Right.</p>
</details>

对。这非常非常关键。对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely. And Tufik, you know, you said it earlier in the challenge category.</p>
</details>

Boris：绝对如此。Tufik，您知道，您之前在挑战类别中提到过。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I want to tie that back here. We talked a little a lot about the solutions impacting leadership and impacting ability to steer the ship, right?</p>
</details>

我想在这里将其联系起来。我们谈论了很多关于解决方案如何影响领导力以及影响掌舵能力，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That the overall tech estate. But the reality is is that like we talked about it's shift left.</p>
</details>

整个技术资产。但现实是，正如我们所讨论的，它是左移。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">是开发者最终在掌舵那个技术资产。而这正是关键点，对吧？</p>
</details>

最终是开发者在掌舵那个技术资产。而这正是关键点，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do you translate that top level guidance that visibility and strategic road mapping to embed that across day-to-day workflows that developers are facing?</p>
</details>

您如何将顶层指导、可见性和战略路线图转化为嵌入到开发者日常工作流中？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is exactly it.</p>
</details>

这正是如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, I think the other thing that's really powerful here is that, you know, we want to be able to see the architecture review process change, right?</p>
</details>

您知道，我认为这里另一个真正强大的地方是，我们希望看到架构评审过程发生变化，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You want to change from having these architecture guild style like once every two weeks kind of reviews that are very merit worthy but very hard to execute to where that architecture review process is actually proactively baked in.</p>
</details>

您希望从那种每两周一次的架构协会式评审（非常有价值但很难执行）转变为架构评审过程实际上是主动内置的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like the beautiful thing about AI is that it allows us to get alignment by design.</p>
</details>

AI的妙处在于它让我们能够**设计即对齐**（Alignment by Design: 通过设计过程本身确保系统或决策与目标保持一致）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? If AI is able to bake in that architecture guidance into every single piece of AI advice that it's giving to developers, isn't that the amazing answer which is tailor fit for developers with guidance already baked in?</p>
</details>

对吧？如果AI能够将架构指导内置到它给开发者的每一条AI建议中，那不就是完美的答案吗？它为开发者量身定制，并内置了指导。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we have that opportunity.</p>
</details>

我们有这个机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can set the AI context. We can set the AI training and narrative based on the leadership's imperatives, but yet again tailor fit to the specific context that the developers need answered for them.</p>
</details>

我们可以设置AI上下文。我们可以根据领导层的要求设置AI训练和叙述，但再次为开发者需要解决的特定上下文量身定制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? And this is how you scale your architecture guild or your enterprise architecture team, right?</p>
</details>

对吧？这就是您如何扩展您的架构协会或您的企业架构团队，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is how they scale.</p>
</details>

这就是他们扩展的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They scale through the guidance they give to that AI, right?</p>
</details>

他们通过他们给那个AI的指导来扩展，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Perfect. That's it.</p>
</details>

完美。就是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

Tufik：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we can change the paradigm, right?</p>
</details>

Boris：然后我们可以改变范式，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can change the review role from being, you know, kind of trying to figure out if standards are being met to knowing the standards are met by by design.</p>
</details>

我们可以将评审角色从试图找出是否符合标准，转变为通过设计就知道标准已经符合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By default, by design. Yeah.</p>
</details>

Tufik：默认情况下，通过设计。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And instead now, you know, we talk a lot about like is AI going to take our jobs, right?</p>
</details>

Boris：是的。现在，我们经常谈论AI是否会取代我们的工作，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Instead to actually being able to do more.</p>
</details>

相反，它实际上能够做更多事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now we're talking about productivity.</p>
</details>

现在我们谈论的是生产力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now we're talking about strategic, you know, multipliers because now instead of doing those mundane things in the past, AI is solving that we can focus on strategy.</p>
</details>

现在我们谈论的是战略性的倍增器，因为现在AI解决了过去那些平凡的事情，我们可以专注于战略。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do we solve hard problems with our development teams?</p>
</details>

我们如何与开发团队一起解决难题？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do we actually move the needle forward in a way we never had time before?</p>
</details>

我们如何以我们以前从未有过时间的方式真正推动变革？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because we were always mired down into how do we just make it like fit the designs that that the standards that we need, right?</p>
</details>

因为我们总是陷入如何让它符合我们需要的标准设计中，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Exactly.</p>
</details>

Tufik：是的。没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

Boris：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to why don't you tell us a little more about how do you bring this all together in this context?</p>
</details>

### AI架构副驾驶的运作方式

Boris：那么，您能否再告诉我们一些关于您如何在这种背景下将这一切整合在一起的信息？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here's how it works. I mean in our minds at least end to end right</p>
</details>

Tufik：好的，这就是它的运作方式。至少在我们看来，它是端到端的，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the first step is to ingest and understand these messy systems right</p>
</details>

第一步是摄取和理解这些混乱的系统，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so you're getting data from everywhere your systems are messy every system is messy I mean if you say your system is not messy I don't think it's true so you take that data and you normalize it to a live model this digital twin that we talk about so now you have it normalized in in a in a way that you can look at you can introspect you can you can navigate and so on so and so so having that.</p>
</details>

所以您从各地获取数据，您的系统是混乱的，每个系统都是混乱的，我的意思是，如果您说您的系统不混乱，我认为那不是真的。所以您获取这些数据，并将其标准化为一个实时模型，也就是我们谈论的数字孪生。所以现在您已经将其标准化，以一种您可以查看、内省、导航等的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now that you have that, the second step is to kind of align yourself and and have some kind of align and advise strategy.</p>
</details>

所以现在您有了这个，第二步是让自己对齐，并制定某种对齐和建议策略。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you have your goals, you have your requirements, you have your context as a company, right?</p>
</details>

所以您有您的目标，您有您的需求，您有您作为公司的背景，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, my ideal in this industry, my I'm in a in a hyperrowth phase or what have you.</p>
</details>

您知道，我在这个行业的理想，我处于超高速增长阶段等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So all these things together come in together and then what you need is a is a ranked recommendation set with some projected impact on cost performance ROI whatever metric that you want that's really important for you as a company as your context right</p>
</details>

所以所有这些事情结合在一起，然后您需要的是一个排名推荐集，其中包含对成本、性能、投资回报率的预期影响，以及您想要的任何对您作为公司和您的背景真正重要的指标，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so that's the second thing the third thing is you know having some kind of guideline as we were just talking about intrinsic you know intrinsic governance into these guidelines these these designs so generate designs answer what if in real time and enforce standards in the workflow.</p>
</details>

所以这是第二件事。第三件事是，您知道，拥有某种指导方针，正如我们刚才谈到的，将内在的治理融入到这些指导方针和设计中，从而实时生成设计，回答“如果...会怎样”的问题，并在工作流中强制执行标准。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You don't want your developers or architects to go to another tool do something else and then come back.</p>
</details>

您不希望您的开发者或架构师去另一个工具做其他事情，然后再回来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's part becomes part of the workflow, right?</p>
</details>

它成为工作流的一部分，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you know you know how do you manage things?</p>
</details>

然后，您知道，您如何管理事物？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can't you can't manage what you don't measure, right?</p>
</details>

您无法管理您不衡量的事物，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So eventually the last step is be able to track these decisions, verify your outcomes and then continuously improve on it.</p>
</details>

所以最终的最后一步是能够跟踪这些决策，验证您的结果，然后持续改进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these are kind of the four steps that we see as getting to this changing the paradigm of how architecture is done.</p>
</details>

所以这些是我们认为实现这种改变架构方式范式的四个步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely. And two, you know, it's funny.</p>
</details>

Boris：绝对如此。Tufik，您知道，这很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I know you're you're a gay way with the jokes, but you know, ready, fire, aim, right?</p>
</details>

我知道您很喜欢开玩笑，但是“准备，开火，瞄准”，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, in the context of ready, fire, aim, you know, isn't the right answer then ultimately if this is the way to aim, then doesn't this ultimately, you know, seamlessly get interconnected to our coding co-pilots.</p>
</details>

我的意思是，在“准备，开火，瞄准”的背景下，如果这是瞄准的方式，那么这最终不就会无缝地与我们的编码副驾驶互联吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So then you can fire, you can aim with with an architecture co-pilot and then right away, right from there, you fire with the coding co-pilots.</p>
</details>

所以您可以使用架构副驾驶进行瞄准，然后立即，就在那里，您使用编码副驾驶进行开火。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now you've hit productivity, right?</p>
</details>

现在您就实现了生产力，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely. That's a great concept.</p>
</details>

Tufik：绝对如此。这是一个很棒的概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can see a world where, you know, the agents, the architecture agents are talking to the coding agents, right?</p>
</details>

我可以看到一个世界，其中架构智能体与编码智能体进行对话，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">100%.</p>
</details>

Boris：百分之百。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you're just there to guide them, make sure they're okay, they're doing the right thing to corre correct course and so on and give them the directives, right?</p>
</details>

Tufik：而您只是在那里指导他们，确保他们一切正常，他们正在做正确的事情，纠正方向等等，并给他们指令，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, that's coming.</p>
</details>

是的，那即将到来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely. Absolutely.</p>
</details>

Boris：绝对如此。绝对如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you know at the end of the day you know what I think we see is a hub for architecture and tech decision-m being a really essential part of the software development cycle for these for these kind of you know kind of aim imperatives right</p>
</details>

所以您知道，归根结底，我们认为架构和技术决策中心是软件开发周期中这些“瞄准”指令的真正重要组成部分，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it's a hub that transforms how companies plan build evolve their tech estate and then execute software on the back of it not just writing more lines of code for the sake of it right</p>
</details>

它是一个中心，它改变了公司如何规划、构建、发展其技术资产，然后在此基础上执行软件，而不仅仅是为了写更多的代码，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it unlocks orwide clarity and faster decision cycles ability to strategically roadmap so that your roadap apps are truly tied to highest impacts on your business objectives fully equipping the tech world to execute with expertise.</p>
</details>

它解锁了全面的清晰度和更快的决策周期，以及战略性地制定路线图的能力，使您的路线图应用程序真正与对业务目标的最高影响挂钩，充分装备技术界以专业知识执行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Two shifts left enablement and and outcomes that don't just you know scale but to reduce quality that scale and dramatically improve productivity across the board with guidance baked in and reframes co-pilots really from productivity tools to to yet a new dimension.</p>
</details>

两次左移赋能以及不仅仅是扩展，而是降低扩展质量，并通过内置指导大幅提高整体生产力，并将副驾驶从生产力工具重新定义为一个新的维度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know productivity is nice but yet a new dimension strategic levers for the business.</p>
</details>

您知道，生产力很好，但这是一个新的维度，是业务的战略杠杆。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We all know that techdriven is the paradigm for how we're moving industry forward.</p>
</details>

我们都知道技术驱动是我们推动行业前进的范式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, this is a true new frontier for how we can move um things forward even further competitively for competitive advantage perspective staying best-in-class with architecture copas setting setting up to have true strategic levers in our tech stacks.</p>
</details>

嗯，这确实是一个新的前沿，关于我们如何能够进一步推动事物向前发展，从竞争优势的角度来看，通过架构副驾驶保持行业最佳，从而在我们的技术栈中拥有真正的战略杠杆。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely.</p>
</details>

绝对如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the companies that get this right, I do believe that will be the ones that stay modern, agile, and ahead.</p>
</details>

Tufik：所以那些正确理解这一点的公司，我确实相信它们将是那些保持现代化、敏捷和领先的公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And others that don't are going to be buried in legacy and debt just like we're seeing with coding co-pilots.</p>
</details>

而那些不这样做的公司将陷入遗留系统和债务的泥潭，就像我们现在看到的编码副驾驶一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Companies that are not embracing it fast enough finding themselves on the outside.</p>
</details>

那些没有足够快地接受它的公司发现自己被排除在外。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are we are as an example, right?</p>
</details>

Boris：我们就是一个例子，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're fully on with the coding co-pilots and it's helping us a lot.</p>
</details>

我们完全采用了编码副驾驶，它对我们帮助很大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've written, you know, Boris and I have written and the team have written some LinkedIn articles and blog posts about that how effective it's been for us.</p>
</details>

您知道，Boris和我都写过，团队也写过一些LinkedIn文章和博客文章，讲述了它对我们来说有多么有效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely. Yeah.</p>
</details>

绝对如此。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Amazing. Well, and so just to wrap this up, you know, too quickly, where should where should leaders start?</p>
</details>

### 如何开始

Boris：太棒了。那么，为了快速总结一下，领导者应该从哪里开始呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Well, do everything at the same time or actually, you know, you start small and like scale little by little deliberately.</p>
</details>

Tufik：是的。嗯，是同时做所有事情，还是实际上，您知道，从小处着手，然后一点一点地有意识地扩展？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for example, pick a portfolio area and get visibility in that portfolio area like build you know get get that you know digital twin built on that particular area.</p>
</details>

例如，选择一个投资组合领域，并在该领域获得可见性，比如构建该特定领域的数字孪生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Generate recommendations in that particular uh start small tie to business outcomes to specific business outcomes in that area and then start piloting some autonomous guidance with one team.</p>
</details>

在该特定领域生成推荐，从小处着手，将其与该领域特定的业务成果挂钩，然后开始与一个团队试点一些自主指导。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know you don't want to do this throughout the whole company all the time.</p>
</details>

您知道，您不希望一直都在整个公司中这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">do it step by step, right?</p>
</details>

一步一步地做，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then scale little by little to the full hub once you've gotten ROI and you've proven that this tool, this new tool because there going to be maybe some resistance at first or some skepticism, of course.</p>
</details>

然后，一旦您获得了投资回报率并证明了这个新工具，因为一开始可能会有一些阻力或怀疑，当然，架构师、CTO、开发者本质上都是怀疑论者，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, architects, CTO's, developers are all skeptics by nature, right?</p>
</details>

我的意思是，架构师、CTO、开发者本质上都是怀疑论者，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, prove out the ROI first before you start scaling to the to the full hop.</p>
</details>

所以，在您开始全面推广之前，先证明投资回报率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's kind of, you know, start small and scale up to it.</p>
</details>

这就是，您知道，从小处着手，然后逐步扩展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The bottom line, architecture co-pilots are where ROI is going to be won or lost.</p>
</details>

底线是，架构副驾驶是决定投资回报率成败的关键。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the question isn't whether you'll adopt one, but whether you'll be early or late.</p>
</details>

问题不在于您是否会采用一个，而在于您是早还是晚。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if this resonates and you want to see what an architecture copilot co-pilot would look like on your stack, reach out and we'll walk you through how to best pursue this from our lens and be able to impart how you can do it on your own or working with us at K.io.</p>
</details>

如果这引起了您的共鸣，并且您想了解架构副驾驶在您的技术栈上会是什么样子，请联系我们，我们将从我们的角度向您详细介绍如何最好地追求这一点，并能够传授您如何自行完成或与Kato.io合作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can visit kio.te tech to connect with us or reach us out and go to gtmio.te and ask how your team can adopt an architecture profile for your we'd love to be a part of your journey.</p>
</details>

您可以访问kio.tech与我们联系，或者联系我们并访问gtmio.tech，询问您的团队如何为您的架构采用一个架构配置文件，我们很乐意成为您旅程的一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely.</p>
</details>

Boris：绝对如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks everyone for joining us today uh for this session.</p>
</details>

Tufik：感谢大家今天参加本次会议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was hopefully informative for you and we are uh we're delighted that you've given us a chance to to to tell you more about this and we look forward to working with you shortly.</p>
</details>

希望它对您有所启发，我们很高兴您给了我们机会向您介绍更多信息，我们期待很快与您合作。