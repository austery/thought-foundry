---
author: The MAD Podcast with Matt Turck
date: '2025-11-07'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=6lmuo8RD-Rs
speaker: The MAD Podcast with Matt Turck
tags:
  - agi-race
  - physical-infrastructure
  - compute-scaling
  - reinforcement-learning
  - energy-bottleneck
title: Poolside 创始人 Eiso Kant：AGI 竞赛的胜负手在于能源、算力和物理基础设施
summary: Poolside 联合创始人 Eiso Kant 深入探讨了通往通用人工智能（AGI）的竞赛格局。他认为，单纯的智能算法已不足以构成壁垒，未来将成为一种商品。真正的竞争优势在于对能源、算力和物理基础设施的掌控。Kant 详细介绍了 Poolside 的“地平线计划”（Project Horizon）——一个千兆瓦级别的人工智能工厂，并阐述了自建数据中心对于前沿 AI 公司在成本和规模上的必要性。此外，他还首次公开了一种超越传统强化学习的新研究路径——“为学习而强化学习”（RL to L），旨在通过逆向工程网络数据，找到一个更通用的自监督学习目标。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
  - investment-strategy
people:
  - Eiso Kant
  - Matt Turck
  - Andrej Karpathy
  - Satya Nadella
  - Lance
companies_orgs:
  - Poolside
  - First Mark
  - Nvidia
  - OpenAI
  - Anthropic
  - AWS
  - GCP
  - Azure
  - TSMC
  - CoreWeave
  - xAI
  - Verdive
  - Day One
  - Red Panda
  - Palantir
  - Google
products_models:
  - Project Horizon
  - GPT-4
  - GB200
  - GB300
  - Malibu
  - Laguna
  - Gemini 2.5 Pro
  - VS Code
  - IntelliJ
media_books:
  - The MAD Podcast
  - The Unreasonable Effectiveness of Recurrent Neural Networks
status: evergreen
---
### 引言：智能将成为商品
**Eiso Kant:** 我甚至可以说，智能将成为一种商品。如果你是一家**基础模型**（Foundation Model，指像 GPT-4 这样经过大规模数据训练、可用于多种下游任务的 AI 模型）公司，却不建设物理基础设施，那你只是在“角色扮演”你的业务。“地平线计划”（Project Horizon）就是我们正在美国建设的最大数据中心综合体之一。我们谈论的计算规模，是以数百兆瓦甚至很快将以千兆瓦为单位来计量的。我们称之为“为学习而强化学习”（Reinforcement Learning to Learn, RL to L）。这可能是我第一次公开谈论这个概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would actually go as far as saying that intelligence is going to become a commodity. If you're a foundation model company and you're not building physical infrastructure, you're cosplaying your business. Project Horizon is us building out one of the largest data center complexes in the United States. We're talking about a scale of compute. It gets counted in the hundreds of megawatts and soon gigawatts. So we call it reinforcement learning to learn RL to L. This is the first time I'm probably publicly saying this.</p>
</details>

**Matt Turck:** 大家好，我是 First Mark 的 Matt Turck。欢迎来到 MAD 播客。今天我的嘉宾是 Poolside 的联合创始人 Eiso Kant。Poolside 是一家专注于软件工程的基础模型实验室公司，据报道目前正在以 140 亿美元的估值进行一轮 20 亿美元的融资，其中包括据称来自英伟达的 10 亿美元投资。我们将深入探讨 Poolside 雄心勃勃的“地平线计划”——一个数千兆瓦规模的 AI 工厂数据中心，以及为什么 AI 实验室必须同时掌握能源、算力和智能。Eiso 还将揭示“为学习而强化学习”这一新路径，它超越了预训练和传统的**强化学习**（Reinforcement Learning, RL，一种机器学习方法，智能体通过与环境互动、接收奖励或惩罚来学习最佳行为策略）。请享受这次与 Eiso 的深度对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi, I'm Matt Turk from First Mark. Welcome to the Mad Podcast. Today my guest is Eiso Kant, a co-founder of Poolside. Poolside is a foundation model lab company focused on software engineering that's currently reported to be raising a $2 billion round at a $14 billion valuation, including a reported $1 billion check from Nvidia. We dig into Poolside's ambitious project horizon, an AI factory data center at multi-gigawatt scale, and why AI labs must own energy, compute, and intelligence. Eiso also unveils reinforcement learning to learn, a new path that goes beyond pre-training and classic RL. Please enjoy this deeply insightful conversation with Eiso.</p>
</details>

### Poolside 的逆向共识：从强化学习到物理基础设施
**Matt Turck:** Eiso，欢迎。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Eiso, welcome.</p>
</details>

**Eiso Kant:** 很高兴来到这里，Matt。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Good to be here, Matt.</p>
</details>

**Matt Turck:** 我应该说欢迎回来。我们差不多两年前聊过，那时你们才刚刚起步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I should say welcome back. You and I chatted almost 2 years ago now when you guys were just getting started.</p>
</details>

**Eiso Kant:** 我刚刚回顾了我们上次的播客，才意识到那是我们作为 Poolside 做的第一个播客。是啊，两年转瞬即逝。快进到今天，2025 年底，前沿 **AGI**（Artificial General Intelligence，通用人工智能，指具备与人类同等智慧、能执行人类任何智力任务的 AI）实验室之间的竞争变得更加疯狂和泡沫化。那么你们现在处于什么位置？在一个与其它实验室激烈竞争的世界里，Poolside 存在的理由是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I was actually listening back to our podcast and I hadn't realized that it was the very first podcast we had done as poolside and yeah, two years have flown by. Fast forward to today at the end of 2025 the race between Frontier AGI Labs has only gotten crazier frothier. So where do you guys stand? What is the reason for Poolside to exist in a world of hyper competition with other labs?</p>
</details>

**Eiso Kant:** 这要回到我们创办公司的初衷。如果你回到 2023 年初我们创办 Poolside 的时候，我们之所以开始，是因为我们对研究有自己的看法。你可能还记得，那年早些时候，GPT-4 刚刚发布，当时全世界的论调是，要达到 AGI，我们所要做的就是扩大语言模型的规模，进行更多的“下一个词元预测”，增加参数数量和数据量。我们同意规模的重要性，至今仍然如此。但我们的观点是，强化学习将成为模型能力扩展中最重要的维度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it comes back to why we started the company. Right? So if if you go back to early 2023 when we started Poolside, we started it because we had our own point of view on the research. So if you remember early in earlier in that year, you know, GPT-4 had just come out and the narrative in the world was all we have to do to reach AGI is scale up language models, do more next token prediction, a larger number of parameters and more data. And we agree with the importance of scale and till the date still do. But our point of view was that reinforcement learning was going to become the most important scaling access for model capabilities.</p>
</details>

**Eiso Kant:** 在当时，这仍然是一个极其逆向的观点，在我们做播客时以及之后的大概 12 个月里都是如此。当然，今天情况大不相同了。如今，我认为这已经成为共识，世界已经明白，我们现在有能力继续扩展模型，使其朝着越来越强大的方向发展，并真正缩小人类智能与 AI 之间的差距。这个使命是 Poolside 最初的使命，现在也依然是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Extremely contrarian opinion at that point still when we were doing our podcast as well and probably for the following, you know, 12 months as well. Today that's of course very different. uh today I think that's become consensus and I think the world has has understood that we now have an ability to continue to scale models towards more and more capable like direction and really close the gap between human intelligence and AI and and that mission was the original mission of poolside is still very much the mission of poolside.</p>
</details>

**Eiso Kant:** 但在此过程中，我认为我们预测会发生的事情已经发生了。我们将继续扩大规模，需要更多的算力，但与此同时，第一种范式，即在网络上预测下一个词元的预训练，其收益增长正在进入 S 型曲线的平缓区，速度正在放缓。因此，在过去的两年半里，我们在预训练方面迎头赶上，也就是我们所说的基础模型构建和语言建模的“入场券”，同时在强化学习方面建立了一些相当大的优势。现在，我们正处在一个这两者结合的时刻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but along the way I think what we had predicted would happen played out we were going to continue to scale up more compute was going to be required but at the same time the first paradigm of kind of pre-training of predicting the next token on the web was becoming sigmoidal and was slowing down in terms of the gains that it had. So over the last 2 and 1/2 years we caught up on the pre-training side and really on like the what we refer to as the table stakes of foundation model building and language modeling while building some pretty serious advantages on the reinforcement learning side and and now we're at a moment where those two things have come together.</p>
</details>

**Eiso Kant:** 我们所有这些前沿公司都在开发我们的大模型，并且规模仍然相当。我们在研究中建立了一系列优势，在工程方面也建立了优势，这些可能是最重要且可持续的优势。但现在我们也到了一个必须将我们的模型扩展到前沿规模的时刻。因此，我们最近发布了一些关于即将上线的庞大计算规模的公告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All of us like as Frontier companies are you know developing our big model runs are still at the same scale. So there's series of advantages that we've built in our research. There's advantages that we've built on our engineering and those are probably some of the most important sustained ones. Uh but now we're getting to a point where scaling up our models to frontier sizes uh is also necessary for us. And hence we've recently had some announcements about the sheer scale of compute that's coming online.</p>
</details>

**Eiso Kant:** 我们正在参与这场竞赛。我回听了我们的播客，我说过，我们的目标是追赶 OpenAI 和 Anthropic。这仍然是事实。但我们的起点有点不同。我们认为，要实现能够推理、规划、理解世界的高度智能，最好是戴上眼罩，专注于一个代理指标。对我们来说，这个代理就是软件开发。随着我们越来越擅长处理更长周期的软件开发任务，坦率地说，我们也越来越擅长处理所有类型的知识工作任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we're competing like we're we're in this race. Uh I think I I listened back to to our podcast and I said, you know, we're going after open eye and entropic. That's still very much true. But our starting point was a little bit different, right? We said, you know, to get to highly capable intelligence that can reason, that can do planning, that can understand the world, you're almost better off putting a set of blinders and focusing on on one proxy for that. And for us, that proxy was software development. And as we've gotten more and more capable at doing longer horizon software development tasks, we've also gotten more and more capable at frankly all type of knowledge work tasks.</p>
</details>

**Eiso Kant:** 从模型的角度来看，我认为我们所有人最终都会趋同于一个相似的点。我甚至可以说，智能将成为一种商品。在那个世界里，我们希望成为受企业信赖的公司，为知识工作者提供动力，这始于编码智能体，现在也已超越了这个范畴。我认为在这个领域，很多事情都将发生转变，我们正处在一个类似电力出现前后的时刻。所以我不认为这是一个赢家通吃的市场，但似乎只有少数公司能够达到那个水平。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the world from a model perspective. I think we are all over time converging to a similar point. I would actually go as far as saying that intelligence is going to become a commodity. In that world, who we want to be is we want to be trusted by by enterprises. We want to be trusted by businesses to to power the knowledge workforce that started with coding agents and is now going beyond that as well. Uh and I think in the space, you know, so much is going to transition, right? We're like a pre and post electricity moment. So I don't think it's a winner takes all market but it does seem to be that it's a small number of companies who are who are able to get there.</p>
</details>

### 地平线计划：掌控能源、算力与智能的物理基础
**Matt Turck:** 作为 AGI 竞赛的一部分，你们在过去几周有一些重磅消息。首先，有传言称你们正在进行一轮高达 20 亿美元的大规模融资，据报道英伟达将投资高达 10 亿美元，投前估值 120 亿，投后 140 亿。这轮巨额融资似乎与你们正式宣布的另一个大新闻——“地平线计划”（Project Horizon）紧密相关。什么是“地平线计划”？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As part of that race towards AGI you've had uh some very big news in the last couple of weeks. First of all there is a rumored large fund raise up to $2 billion where Nvidia reportedly would be investing up to a billion dollars at 12 billion pre 14 billion post. It's a very large round that seems to be very tied to another big news that you guys did formally announce which is Project Horizon. What is Project Horizon?</p>
</details>

**Eiso Kant:** 是的，“地平线计划”是我们正在美国建设的最大数据中心综合体之一。这又回到了我之前说的一点。我们谈到智能正在成为一种商品。自公司成立两年半以来，我们的观点一直是，技术栈中有三个层面至关重要：能源、算力以及建立在其上的智能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So, so Project Horizon is us building out one of the largest data center complexes in the United States. And this comes back to something I said earlier. We we talked about intelligence becoming a commodity, right? Our our view for pretty much since starting the company over 2 and a half years has been that there's three layers of the stack that fundamentally are going to matter. It's energy, it's comput, and it's the intelligence built on top.</p>
</details>

**Eiso Kant:** 在这个世界里，如果你认为不同公司构建的智能将变得越来越难以区分，最终成为一种商品——可能更像是石油、云计算或面包店的面包——那么有两件事至关重要：你扩展它的能力，以及你向最终用户交付它的成本。扩展能力是“地平线计划”最主要的驱动因素，但成本也是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And within this world, if you think that intelligence is going to become less distinguishable between the companies building it and becomes a commodity, a commodity probably more like oil or cloud comput like bread at the bakery, is there's two things that matter. Your ability to scale it and the cost at which you deliver it to your end user. Now the ability to scale it was frankly the primary motivating driver for project horizon but cost as well.</p>
</details>

**Eiso Kant:** 重要的是要思考 12 个月前你能做什么，和今天在算力规模上你能做什么。两年前，在我们的行业里，你可以打电话给数据中心托管商说：“嘿，我六个月后需要这么多算力”，然后就会有物理空间让你部署，或者有人能为你提供容量。但今天，我们谈论的算力规模是以数百兆瓦甚至很快将以千兆瓦计量的，你已经找不到可以打电话的人了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and it's important to think about what you could do 12 months ago versus what you could do today at the scale of compute that we were talking about you know 2 years ago in our industry you could call up a data center colo and say hey I want this much compute in 6 months and there would be space like physical space where you could deploy it or there'd be someone who has the capacity available to you today we're talking about a scale of compute that gets counted in the hundreds of megawatts and soon gigawatt but there's no one you can call.</p>
</details>

**Matt Turck:** 对，这些都是定制建造的数据中心，规模如此之大，以至于没有人在没有租户的情况下会去建造它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right these are built to suit data centers that are so large that no one is building them before having a tenant.</p>
</details>

**Eiso Kant:** 所以，当你接近前沿，你的模型变得越来越强大，你想把这种智能服务于世界，并希望随着时间的推移扩大你的训练规模时，你从决定到能够做到这一点的前置时间，不再是打个电话给**超级规模云服务商**（Hyperscaler，指像 AWS、Google Cloud、Azure 这样提供大规模云计算服务的公司）或其他合作伙伴就能在几个月内搞定的。现在，我们谈论的是 12 个月、14 个月、18 个月，并且附带着巨大的资本投入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so as you're approaching the frontier and your models are getting more capable and you want to serve that intelligence to the world and you want to scale up your training as well over time now your lead time from deciding to do that to being able to do that is no longer calling up a hyperscaler or calling up another partner and having it, you know, in months. Now, we're talking 12 months, 14 months, 18 months with huge capital numbers attached to it.</p>
</details>

**Eiso Kant:** 我的联合创始人们之间有句玩笑话，可能不太适合在播客上说，但大意是：如果你是一家基础模型公司，却不建设物理基础设施，那你只是在“角色扮演”你的业务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, my co-founders say this thing to each other and probably not really for for podcast material, but it's it's a if if you're a foundation model company and you're not building physical infrastructure, you're cosplaying your business.</p>
</details>

**Matt Turck:** 嗯。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mhm.</p>
</details>

**Eiso Kant:** 这就是问题的根本所在。我们不是因为觉得建基础设施很酷才去做的，这是实现我们使命的必要条件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And and this is kind of the the really fundamental nature. It's not that we went out and said it'll be cool to build infrastructure. It was a necessity for the mission to be able to achieve it.</p>
</details>

**Matt Turck:** 所以你认为否则就会被淘汰出局，对吧？显然 OpenAI 有一个庞大的项目，他们刚刚宣布要建第四个数据中心。Anthropic 与 AWS 有特殊关系，我想 AWS 正在为他们建一个。这大概就是你说的，你需要一个租户。在这种情况下，云服务商愿意建，因为他们有 Anthropic 作为租户。所以作为一个独立的实验室，姑且这么说，你必须掌握自己的命运，而这包括建立自己的数据中心，对吧？我复述一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you think you just get boxed out, right? So obviously OpenAI is a whole target project and they just announced like I think a fourth data center that they're about to build. Enthropic has a special relationship with AWS. I think AWS is building one for them. That's I guess that's what you were saying. You need a tenant in that case. The scal is willing to do it because they have anthropic as a tenant. So as an indie lab for lack of a better term like you have to own your own destiny and that it involves building your own data center right just to play it back.</p>
</details>

**Eiso Kant:** 是的。我认为作为一家基础模型公司，你可以走两条路。你可以选择与一家超级规模云服务商深度合作，让他们成为你的股东，然后一路走下去。我认为这是一个方向。但与此同时，世界正在发展到一个地步，我想没有人再怀疑我们正走在实现人类级别能力和智能的轨道上。在那个世界里，价值 29 万亿美元的知识工作将被重写，科学进步将开始超越我们前所未见的水平。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I think as a foundation model company you can go two paths right you can choose to to deeply partner with a hyperscaler and kind of you know become uh you know have them become an owner in you and and really go all the way uh and I think that's one direction but at the same time the world is getting to a point where I don't think anyone has any doubts anymore that we're now on track to to reach human level capabilities and and intelligence and in that world $29 trillion of knowledge work rewrites itself right scientific progress starts pushing beyond levels that we've ever seen.</p>
</details>

**Eiso Kant:** 所有这一切都是基于算力之上的智能。因此，一家基础模型公司远比大多数人意识到的更像是一家物理基础设施企业。因为扩展算力的能力，并将其以高性价比的方式带给最终用户至关重要。随着我们的智能模型越来越接近，你的词元成本将变得越来越重要。扩展这种能力并将其提供给最终用户，当每词元几美分成为别人是否购买的决定因素时，这一点至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And all of it is intelligence on compute. And so we are far more in a in a foundation model company is far more in a physical infrastructure business than most people realize because the ability to scale that compute, right, and and bring it to end users and frankly do so cost effectively, right? The cost of your tokens are going to matter more and more. as our as our intelligences all become closer to each other, the ability to scale this up and and do so to end users where you know the cents per token are kind of a determinant if someone's going to buy it is is critical.</p>
</details>

**Eiso Kant:** 所以我们几年前就开始问自己一个问题：要实现这一点需要什么？然后随着时间的推移，我们学到了更多，观察了更多，然后我们开始采取行动。这个行动就是“地平线计划”。简而言之，“地平线计划”今天宣布的是一个 2 千兆瓦的园区，实际上我们在这个地点可以远远超过 2 千兆瓦。这是与德克萨斯州一个了不起的家族——米切尔家族的合作。米切尔家族拥有美国最大的单块土地之一，面积达 50 万英亩。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we already started several years ago uh asking ourselves the question like what would it take to move towards this and then over time you know we learned more we observed more and and then we started acting towards it and and the acting towards it is project horizon. So project horizon in a nutshell is today announced a 2 gawatt campus we can actually go far beyond 2 gawatts on the site that we're in. It's a partnership with an incredible family out of of Texas called the Mitchells. The Mitchells have one of the single largest parcels of land in the United States. is half a million acres.</p>
</details>

**Eiso Kant:** 这总是让我感到震惊，因为作为参考，洛杉矶市的面积是 30 万英亩。在那片土地上，正在建设可再生能源，有电网连接，有水，还有一条 20 英寸的主天然气管道。这为我们提供了一个可能性，可以开始以极快的速度和极大的规模扩展为数据中心供电的能源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it always blows my mind because for context, LA is 300,000 acres. And on that land is renewables being built. There's grid connection. There's water, but there's also a 20-in main gas line. And that offers us a possibility to start scaling up energy that powers data centers incredibly fast and incredibly large scale.</p>
</details>

**Eiso Kant:** 所以你将看到，在今年年底前，我们将开始建设一个 250 兆瓦的数据中心。它由天然气供电，以电网连接作为备用，并将容纳数量惊人的算力。但这只是我们正在建设的众多阶段中的第一阶段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mhm. And so what you're seeing from us is that before the end of this year, we're starting construction on a 250 megawatt data center. It's natural gas powered uh with grid connection as a backup and it will house an incredible amount of compute, but it will be the first phase of many that we're building out.</p>
</details>

### AI 经济学：拆解前沿模型的成本结构
**Matt Turck:** 好的。为了解析你刚才说的一些内容，你提到了拥有自己的物理基础设施对前沿 AI 实验室经济模型的影响。为了帮助我们理解，AI 领域一个关键问题一直是毛利率。你认为拥有自己的物理基础设施最终会在整体结构上带来怎样的毛利率？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. So just to unpack some of the things you said, you mentioned the impact of owning your physical infrastructure on the economics of Frontier AI labs. to help us understand understand that obviously one key question in the world of AI has been gross margin where do you think owning your own uh physical infrastructure lead you towards in terms of like overall structure.</p>
</details>

**Eiso Kant:** 我还不确信我们行业的毛利率会像 SaaS 公司那样达到 80% 以上。我认为，当我们谈论智能作为一种商品，我们在此之上构建增值服务时——作为一家基础模型公司，一方面你销售你的词元，也就是你的“原油”，你的原材料；另一方面，你构建增值服务，即你带给最终用户和客户的产品，为他们的业务或消费者创造价值。在那个世界里，它看起来更像一家云计算公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm not yet convinced that gross margins in our industry will look like a SAS company like 80% plus I think when we're talking about um a commodity as intelligence that we build value added services on top right as a foundation model company on one hand you you sell your tokens right your barrels of oil, your raw material. And on the other hand, you're building up value added services, your products that you bring to end users and customers that you know unlock value for their businesses or for consumers in the case of others. And in that world, I think it looks a lot more like a cloud company.</p>
</details>

**Eiso Kant:** 所以我认为，当我们审视这个规模时，它会看起来像云计算公司，只是后面多一个零。从利润率的角度来看，可能非常相似。因为如果你想一想 AWS、GCP 或 Azure 是什么，它们实际上是硬件的虚拟化，上面再加服务。我不认为基础模型有那么不同。所以从利润率来看，我们可能会更接近云公司那样的 40% 左右，而不是软件行业的 80%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think when we're going to look at the scale of this, uh, it's going to look like cloud companies with a zero behind that. from a margin perspective probably pretty similar because if you think about what is an AWS or GCP or an Azure it's effectively virtualization of hardware with services on top. I don't think foundation models are are that different. So I think from a margin profile will probably sit far closer towards that like 40% mark that you see in in cloud companies than you do like the 80% on the software side.</p>
</details>

**Eiso Kant:** 现在，当你开始思考智能成本的构成时，你基本上有土地、能源、数据中心、数据中心里的芯片。举个例子，如果我们用一些大致准确的说明性数字来分解，为 250 兆瓦供电大约需要价值 5 亿美元的物理基础设施。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now when you start thinking about what sits in the stack of cost of intelligence, you effectively you've got the land, um you've got the energy, you have the data center, you have the chips inside the data center and and just for context, if we for instance break this down with illustrative numbers that are roughly in the right ballpark, uh to energize 250 megawatt is about half a billion dollars worth of physical infrastructure. Mhm.</p>
</details>

**Matt Turck:** 在燃气轮机的情况下，就是燃气轮机，但有不同的实现路径。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in the case of gas turbines, it's gas turbines, but there's different paths to it.</p>
</details>

**Eiso Kant:** 建造一个数据中心，也就是将所有设备集中起来让算力在其中运行的“电力外壳”，你大概需要 20 亿到 25 亿美元。而今天放入其中的算力设备大约需要 55 亿美元。所以总的来说，把这些加起来，你大概需要……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Building a data center like the power shell that brings together all of the equipment where the compute can run inside, you're talking kind of north of $2 billion, $2 to $2.5 billion. Now the compute that goes inside today would be about $5.5 billion. So kind of all in all, when we're like adding this together, you're talking.</p>
</details>

**Matt Turck:** 算力设备指的是芯片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">being the chips,</p>
</details>

**Eiso Kant:** 指的是芯片、网络以及所有我们称之为数据中心“装修”的东西。所以一个 250 兆瓦的项目成本大约是 80 亿美元。所以当你在行业里听到说一千兆瓦是 400 或 500 亿美元时，人们指的就是这个，是这些成本的分解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">being the chips and the networking and and and everything that kind of is what we'd refer to as the fit out of of a data center. And so you got about an $8 billion like cost of 250 megawatt. So when you hear in the in the industry you might say a gigawatt is 40 or $50 billion. That's what people are referring to, right? It's it's the breakdown of those costs.</p>
</details>

**Eiso Kant:** 芯片有一定的使用年限。在我们的行业里，关于它们能用多久有很多争论，这是一个供需问题。数据中心传统上有 15 年的寿命，但随着新一代芯片的出现需要进行改造。而你的电力基础设施可以持续很长时间，但需要维护。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the life of a chip has a certain amount of years to it. Uh and in our industry there's there's lots of you know argumentation about how long they last and it's a demand and supply question. A data center has kind of traditionally, you know, a 15-year life, but it needs retrofitting as as new generations of chips come online. And your power infrastructure can last a very long time, but requires maintenance.</p>
</details>

**Eiso Kant:** 在那个 80 亿美元的 250 兆瓦项目中，你每年要花费 3 亿到 3.5 亿美元的**运营支出**（Opex, Operating Expense）。你可以把这笔费用大致在融资成本和能源运营成本之间对半分，其中能源是最大头。这里就有一个有趣的洞见：你突然意识到，今天的能源部分并不是成本构成中最大的部分。你谈论的是每年 1.6 亿美元的能源费用。当然，我用的是西德克萨斯州的数字，所以能源成本在该国其他地方可能是这个数字的两倍，但与总拥有成本相比，它仍然相对较小。当然，数字本身还是非常大的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, in that $8 billion project of 250 megawatt, you're annually spending somewhere north of 300 to $350 million of opex. And so, you can split that about 50/50 between the cost of financing and the cost of energy and operations. energy like being the most. And this is where there's already an interesting insight. All of a sudden, you realize that the energy part today is not the biggest part of the stack, right? You're talking $160 million a year in energy. And of course, we're I'm taking numbers that are West Texas numbers. So energy can be, you know, double that in other places in the country, but still compared to the total, you know, cost TCO of of of compute, uh, it's relatively, you know, minor. Uh, numbers are still very big.</p>
</details>

**Eiso Kant:** 我之所以提到这一点，是因为随着时间的推移会发生什么？就像资本主义中一直发生的那样，利润率在各个环节都会被压缩。能源的利润率已经被压缩了，我们已经在努力让世界上的能源尽可能便宜。数据中心在过去二三十年里也越来越商品化。GPU 计算今天仍然是高利润业务，但随着时间的推移，我们也会看到类似的压缩。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the reason I I mentioned is that what is going to happen over time right like what's always happened in capitalism is that margins compress everywhere now margins have already compressed for energy we already you know try to make energy as cheaply as possible in the world data centers effectively have already been increasingly more commoditized over the last 20 30 years GPU compute today is still very high margin business and and over time we'll find a similar level of compression.</p>
</details>

**Eiso Kant:** 随着芯片利润被压缩，技术栈的其他部分也变得更加重要。当你端到端地拥有并建造所有这些时，之前存在于各个环节之间的利润就消失了。无论是你为土地支付的成本，还是能源、建筑、数据中心的成本，技术栈中的所有层次加起来，这是一个非常大的数目。因为基础模型本身有构建它的**资本支出**（Capex, Capital Expense），那是你的研发成本，你会随着时间摊销。但物理基础设施才是你成本的大头。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and as the chips become more compressed the other parts of the stack are more important as well. And when you end to end own all of this and build all of this, everywhere where previously margin sat in between, you know, falls away. If that's the person who you were paying for, you know, the cost of land, if you're talking about the cost of like the energy, the cost of the building, the data center, kind of all the layers in the stack. This adds up to a very large amount because the foundation model itself is, you know, it has capex for building it. that's your R&D cost and you you know you advertise it over time. Uh but the physical infrastructure is really frankly where the majority of your cost sits.</p>
</details>

**Eiso Kant:** 我知道我一下子讲得非常详细，但我认为这有助于人们了解情况。所以当你把所有这些利润都去掉后，你突然会发现，你可以比别人便宜 20%、30%、40% 的价格提供你的词元。这将变得至关重要，因为我们正在从人类劳动创造经济产出，转向算力上的智能与人类劳动相结合。而我们在世界上才刚刚开始这个转变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so I know I went super detailed straight away but I think it's useful for people to kind of get this sense of where it is. So when you take all those margins out all of a sudden you can start seeing that you can serve your tokens 20 30 40% cheaper than someone else. And this is going to matter because it's we're shifting from, you know, human labor that leads to economic output to intelligence on compute combined with human labor. And we've barely started this in the world.</p>
</details>

**Eiso Kant:** 我们将进入一个世界，这种商品将比我们见过的云计算规模大得多。坦率地说，云计算通常是公司最大的开支。在那个世界里，控制成本影响巨大。但成本只是答案的一部分。你必须能够扩展它。你必须能够说，如果我下个季度需要更多算力，我能让它上线吗？因为芯片并不短缺。昨天我刚看到 Satya 的一个播客片段，他说：“看，我的瓶颈是能源和数据中心，而不是芯片。” 这是真的。英伟达在向市场供应芯片方面做得非常出色，TSMC 和整个技术栈都在以巨大的规模扩展。但是物理空间、电力上线和建造数据中心，这些才是我们这些科技从业者意识到现实世界冲击我们的时候。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we're going to be in a world where this is a commodity that will look far larger than we've seen cloud compute be. Frankly, is often the largest bills of companies, right? What they're what they're paying in that world. Yeah. Controlling that cost is a big impact. But cost is really only part of the answer here. You have to be able to scale it. You have to be able to say if I next quarter need more compute, can I bring it online? Because there's no shortage of chips. There's just a clip yesterday from Satcha uh on a podcast that I saw where he said, "Look, it's it's energy and and data centers that are my bottleneck. It's not chips." And it's true, right? Nvidia does an incredible job at supplying the market with chips. and and TSMC and everything in the stack and scale up to to huge levels but physical space bringing power online and building data centers well that's when we kind of in tech all of us start realizing the real world hits us.</p>
</details>

### 新型建造模式：增量交付的混合模块化数据中心
**Matt Turck:** 你提到了能源成本和融资成本。这是一种项目融资的模式吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and you mentioned cost of energy and cost of financing uh just quickly this is finance how this is project finance kind of a setup.</p>
</details>

**Eiso Kant:** 正是如此。如果你考虑传统的数据中心业务，这与它并无不同。你有一部分股权投入到该业务中，你有一个贷款与成本比率，而这个比率很大程度上取决于你在该数据中心上的租约和租户。传统上你有一个 15 年的租赁合同，然后就是传统的项目融资，这种方式非常有效。全世界已经这样做了很长时间，这是一种相对低利率的融资方式。这并不新鲜，也不是科技界的新事物，已经存在很久了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">exactly so so if you think about traditional data center business and this is not unlike it you you have an amount of equity that goes into that business you have a loan to cost ratio and the loan own to cost ratio really depends on the lease, the tenant that you have on that data center. You got a 15-year lease contract traditionally and and then it's traditional project financing uh that is highly effective. The world has been doing this for a long time. It is relatively, you know, low rate financing. Uh and uh this is not new. This is not you know new to tech. It's been around for a long time.</p>
</details>

**Matt Turck:** 这个想法的一部分是 Poolside 将成为主力租户，但你们也会将设施出租给其他人。收入来源会是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Part of the idea is that Pside will be the anchor tenant but you'll be renting the facility out to others as well. what is going to be the revenue stream.</p>
</details>

**Eiso Kant:** 我们目前还无法在数十亿美元的大规模建设上签署 15 年的租约。但我们正在迅速扩张，我们看到了一条能够以那种级别扩展算力的路径。因此，我们与 CoreWeave 找到了一个非常好的合作关系，并且已经宣布了。坦率地说，在运营英伟达算力方面，CoreWeave 是首屈一指的。他们率先大规模上线了 GB200，现在又将上线 GB300，一直是我们在这个领域的重要合作伙伴。所以我们与他们找到了一个非常好的混合解决方案。他们是我们数据中心的主力租户。我们可以共同在那个数据中心内扩展我们的算力，而任何我们选择不使用或无法使用的容量，他们可以提供给其他客户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are not yet at a place where we can be signing 15-year leases on massive multi-billion dollar, you know, like buildouts. Uh and so, but we are ramping up rapidly where we see a path to being able to scale up compute uh at those levels. And so, we found a really great partnership here with Cororeweave that was announced. Corewave frankly is second to none in terms of operating uh Nvidia's compute, right? first have GB200s online at scale uh now coming with the GB300s and and have been this great partner like for us in in the space and so we found a really great hybrid solution with them. So they are the anchor tenant on our data center. Jointly we can scale up our compute inside that data center and any capacity that we choose not to take or not able to take in our space. Uh they can bring to other customers.</p>
</details>

**Eiso Kant:** 这真的很重要，因为我们不是一个能够提前两三年进行数十亿美元赌注的超级规模云服务商。所以，我们需要找到一种合作方式，实现双赢，既能扩展我们的算力，又不需要提前几年做出决策。这是一个绝佳的安排，因为它为这个项目带来了两全其美的效果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and and this was really an important thing because we're we're not a hyperscaler who can make you know multi-billion dollar bets for two or three years out. So, we needed to find our way of of having great partnerships that were kind of win-win situations where we could scale up our compute but didn't need to make a lead time decision years ahead of it. And and this has been a fantastic setup because uh it kind of brings the best of both worlds to to to the site.</p>
</details>

**Matt Turck:** 当你解释这一切时，其雄心令人着迷。同样令人着迷的是，这对一家年轻的软件 AI 公司最终成为一家主要的物理基础设施公司意味着什么。所以 CoreWeave 的合作有所帮助，但想必你们必须雇佣各种各样的人，那是一个完全不同的技能集。你是如何考虑这一点的，以及它的财务方面？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">as you explain all of this fascinating in terms of ambition. It's also fascinating in terms of like what that means for ultimately a young software AI company to become you know a major physical instructor company. So the core partnership helps but presumably you have to hire all sorts of people that's a whole different skill set. How did you think about that and um also the the financial aspect of it?</p>
</details>

**Eiso Kant:** 我职业生涯的大部分时间里，我可能都遵循着一个算法。至少我记得早在九年前就是这样：作为创始人，你必须千方百计避免**邓宁-克鲁格效应**（Dunning-Kruger Effect，一种认知偏差，能力不足的人无法认识到自身的不足，错误地高估自己的能力）。因为当你进入一个新领域，就像我们在物理基础设施方面一样，你从学习开始。你开始阅读，开始与专家会面，不断学习。随着你对一个主题了解得越来越多，你会陷入一个自以为真正懂了的境地。但你其实并不真的懂，因为你没有接触过现实世界，或者你以前没有做过。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we followed an algorithm. I would probably say most of my career by now. Uh at least I remember going this back as far as 9 years is you have to by all accounts avoid the Dunning Krueger effect as a founder, right? Uh because when you get into something new like it has been on the physical infrastructure side, you start with learning, right? You start with reading, you start with like meeting the experts, learning and learning and as you learn more about a topic, you fall in this point where you start thinking you really know it. But you don't really know it because you haven't hit the real world or you haven't done it before.</p>
</details>

**Eiso Kant:** 我很久以前得到的一个最好的建议是，每当你发现自己处于那种情况时，就是你该开始寻找专家加入你的时候了。但你怎么找到专家呢？因为你自己不是。这时你就开始为每个职位面试 100 多人，然后建立一个分布。你开始理解谁是那个分布右尾端的异常值。事实证明，即使我们当时的知识相对较浅——我不会说浅薄，因为我们花了好几年时间了解这个领域并接近它，但绝对没有达到专家的水平——我们也能识别出谁是异常值。这些人就是你要雇佣并赋能的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what I found to be one of the best advice I got a very long time ago whenever you find yourself in that situation, well, this is when you want to start finding the experts to join you. But how do you find the experts? Because you yourself aren't. And here's when you just start interviewing 100 plus people for every role and you build a distribution. You start understanding who sits on the right tail end outlier of that distribution. And it turns out, you know, even just with relatively I would I wouldn't say our knowledge at this point was shallow because we'd spent years like, you know, understanding the space and uh getting close to it, but with definitely not the level of like an expert, we got to the point where we started being able to identify who were the outliers and those are the people you hire and you bring on, right? And you empower, you give the right autonomy to.</p>
</details>

**Eiso Kant:** 基础设施领域一个特别有趣的发现是，这是一个非常小的圈子。每个人都认识彼此。它让科技界都显得很大。大规模数据中心的建设实际上只由少数几家公司完成。所以每个人在整个端到端供应链上都互相认识。因此你也能很快了解谁被认为是好角色，谁被认为是坏角色，谁建立了声誉。小行业非常依赖声誉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What was particularly interesting to learn about the infrastructure space over time is that it's an incredibly small world. Everybody knows each other. It makes tech feel like a big world. Uh right, the the construction of data centers at scale has really only been done by quite small number of players. And so everybody knows each other across the entire like endto-end supply chain. So you also have an ability to very quickly understand who's considered a good actor and who's considered a bad actor, right? Who has built up a reputation. Small industries are very reputation driven.</p>
</details>

**Eiso Kant:** 这不仅让我们建立了一家拥有出色团队的基础设施公司，也让我们找到了行业中能够重新思考数据中心建造方式的人。所以我们不只是说，“哦，我们要做和别人完全一样的传统事情。” 实际上，我们在数据中心建设上也采取了一种相当新的方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that has actually not just led us to building a an infrastructure company with an incredible team, but also to find the people in the industry who were able to start rethinking some of the ways data centers have been built. So we haven't just gone and said, "Oh, we're doing the exact traditional thing everyone else is doing." We've actually taken a quite new approach uh to data center construction as well.</p>
</details>

**Matt Turck:** 听起来很棒，展开说说。我想业界已经看到 xAI 的数据中心以创纪录的速度建成，这为所有人重新设定了标准。你们是如何建造数据中心的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That sounds great. Unpack that. So I think the industry has seen the XAI data center being built in record speed which I think has reset the bar for for everyone. How do you guys go about building that data center?</p>
</details>

**Eiso Kant:** 如果你考虑数据中心，有一种传统的建造方式，也有一种不能算新，但已经存在了十多年的方式。一端是所谓的“现场建造”（stick-built），所有工作都在现场完成。所有材料都运到那里，成千上万的工匠在现场组装数据中心。另一端则是像西方的 Verdive 或中国的 Day One 及其母公司那样，完全采用模块化。你可以想象你的数据中心单元是从工厂里滚出来的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you think about data centers, there's kind of been a traditional way of building them and I wouldn't say new way because it's been around for for over a decade. But on one end you have kind of stickuilt buildings. Everything is done on site, right? So all the materials are brought there. Thousands of tradesmen who who are assembling the data center and on the other hand of kind of like Verdive here in uh in the west or players like Day One and their parent company out of China who've gone full modular. to think of like your your data center units are rolling out of a factory.</p>
</details>

**Eiso Kant:** 有趣的是，这两种方法都有其局限性。我们决定取其中间路线，采取一种混合方法。我们说，实际的建筑本身采用现场建造，你可以把它想象成一个带有分支的极长走廊。但我们采用模块化方法，而且是一种能装在平板卡车背上的模块化。我们如何制造 2.5 兆瓦的计算滑轨，分别用于电气、机械和冷却以及计算？这些是数据中心内部的三个要素，我们与美国的制造伙伴合作完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what was interesting in in that both of those approaches uh have their limitations, right? we we kind of decided to meet in the middle uh and took an approach where we said we're building the actual building stick built so that's being built on site uh think of it as an extremely long corridor uh with leaves attached to it but let's take a modular approach but one that fits on the back of a flatbed truck. So how do we kind of do 2 and a half megawatt computeworthy skids for think of this for electrical for mechanical and cooling and for compute. Those are kind of the three elements that sit inside a a data center and do it with manufacturing partners here in the United States.</p>
</details>

**Eiso Kant:** 我们设计了一种方式，可以让你在施工的同时，让 2.5 兆瓦的算力上线。想象一下，在这个走廊上，你不断地增加大约一千个 GPU 的单元。我们将这种结合称为“增量交付的混合模块化数据中心”，它融合了两者的优点。它通常能降低你交付的风险，降低你让算力上线的风险。这也意味着，如果下个月你突然需要更多算力，你可以以 2.5 兆瓦为单位做决策，比如“我只想要多一点点”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We said what if you designed it in a way where you could bring 2.5 megawatts of compute online, you know, as you're doing construction. Think of it again on this hallway as you're bringing on like units of kind of a thousand GPUs or depending on the GPU type can be less in the future. uh you're bringing this online and the combination of those things that we refer to as as incrementally delivered hybrid modular data centers is kind of bringing the best of both worlds. It usually derisks your ability to deliver. Uh it drisks your ability to bring compute online. It also means that if all of a sudden next month you need more compute, you can make decisions on 2 and a half megawatts like I just want a little bit more.</p>
</details>

**Eiso Kant:** 然而，所有这一切最大的优势不仅仅是速度，还有你能动员的劳动力。因为我们处在一个相当偏远的地区，而这个偏远地区提供了所有这些优势：几乎无限的土地，所以我们可以单层水平建造；大量的能源来源。但偏远也意味着动员劳动力更具挑战性。所以突然之间，当我们建造 250 兆瓦的项目时，我们现场的劳动力不到 450 人，都是我们带过去并安置在那里的高技能工匠和建筑工人。而在传统模式下，你可能需要 2000 多人来建造同样的东西。所以，一切都是为了降低风险和提高速度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The biggest advantage though of all of this is not just speed, but it's also your workforce that you can mobilize because we're in a quite remote area and that remote area offers all of these advantages, right? Like pretty much infinite land so we can, you know, build a single level horizontally uh an incredible amount of source of energy, but also being remote meaning that mobilizing workforces there is more challenging. So all of a sudden, you know, when we're building 250 megawws, we're doing it with a less than 450 person on-site workforce with very skilled tradesmen and and and and construction workers that were bringing over there and we're housing over there versus a world where you might need traditionally 2,000 plus people to build the exact same thing. So it's all about de-risking and speed.</p>
</details>

**Matt Turck:** 第一部分上线的预计交付日期是什么时候？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">what's the target delivery date for like the first part to come online.</p>
</details>

**Eiso Kant:** 明年第三季度末、第四季度初，第一批算力将上线。然后在 2027 年第一季度，我们将完成首个 250 兆瓦的项目。但明年夏天，下一个 250 兆瓦的项目就会开始建设。这是一个交错的建设计划，这意味着我们每年基本上会有三次，每次都有额外的 250 兆瓦上线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so um at the beginning of Q4 end of Q3 so next year we've got the first compute coming online uh and then we're finalizing in Q1 2027 the first uh you know 250 megawatt but already next summer the next 250 megawatt starts construction it's a staggered build uh and this means that we will always have a horizon on you know essentially three times a year an additional 250 megawatts coming online.</p>
</details>

### 环境与社区：负责任地规模化
**Matt Turck:** 关于这个话题的最后一个问题，然后我们再转向更熟悉的软件和 AI 方面。环境影响，这显然是整个数据中心行业都在努力解决的问题。你们是怎么考虑的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">last question on this and then we'll transition over to the more familiar software and AI side of the conversation the uh environmental impact that's obvious viously a question that the whole data center industry grapples with. How do you guys think about it?</p>
</details>

**Eiso Kant:** 首先，让我们坦诚面对这个问题。我们使用天然气来发电。在我们目前所处的世界，以及数据中心建设的规模下，太阳不会整天照耀，风也不会一直吹。因此，仅靠可再生能源加上为数据中心供电所需的电池容量，在经济上尚不可行。但是，天然气与可再生能源和电池的结合——我们在现场正在建设一个大型电池系统——可以在中间找到一个最佳点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's first be honest about this, right? We're using natural gas for the generation of power and in the world that we are right now at the scale that data centers are being built out. Uh the sun, you know, doesn't shine all day, the wind doesn't blow all the time. And so renewables only in combination with the battery capacity that you would need to power a data center if you weren't renewable only is just not economically viable yet. But the combination of like natural gas uh with renewables with batteries. We've got a big best being built out uh on the site. So a big battery system. Uh allows for kind of an an optimal point in the middle.</p>
</details>

**Eiso Kant:** 当你谈论天然气发电时，你要确保排放得到控制。所以你会增加 **SCR**（Selective Catalytic Reduction，选择性催化还原技术，一种用于减少内燃机排放的有害氮氧化物的技术）。SCR 基本上是催化还原，你做的是过滤掉天然气发电产生的一些更有害的颗粒物。你做的这一切都在联邦标准之内，你申请的空气许可证是联邦层面批准的。作为一家企业，这是至关重要的一步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh now when you talk about natural gas generation, you want to make sure that you have your emissions in check. So what you're adding is SCTRs. Uh and so you're an SCR is essentially cataly reduction. So what you're doing is you are filtering out some of the more harmful particles that come out of natural gas generation and you do this all within federal standards. You you file for air permits that you have that are approved by like at the federal level. And so this is a critical thing to do as a as a business.</p>
</details>

**Eiso Kant:** 围绕数据中心的第二个环境问题通常是水。水在某些地方是稀缺资源，在另一些地方则是丰富资源。它可能会影响当地社区。我们非常幸运，因为我们所在的地理位置和我们合作伙伴拥有的巨大土地规模，水资源既能满足我们的需求，又不会从当地社区夺走资源。这在美国或世界其他地方并非普遍情况。所以选择这个地点不仅仅是因为它能扩展到多大，还因为你能以一种负责任的方式做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second side of environmental concerns around data centers are usually water, right? Water is a depending on where you are scarce resource. in other places. It's an abundant resource. It can impact like a local community. And so we're very privileged because of where we sit and the sheer scale of land that our partners have. Water is a both a resource that is there at the levels that's required for us without actually taking away from like the local community. And this is not the case everywhere else in the United States or in the world. So picking this site was not just about like how large it can scale because it can scale into incredibly large size but also can you do so in a way that's you know responsible.</p>
</details>

**Eiso Kant:** 超越环境话题的是社区，这极其重要。你正在建设一些东西，即使我们是在一个相对偏远的地区建设，但归根结底，没有当地社区的支持，这一切都是不可能的。我们所在的佩科斯县（Pecos County）的人们是我见过的最好的人之一。我们对社区的欢迎态度感到惊讶。所以这与我们如何投资就业项目以吸引人们来这里息息相关。我们只是努力做一个好的参与者，并对积极和消极的外部性以及如何减轻它们保持透明。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and community what goes beyond the environmental topic is incredibly important right you're building something out even though we are building out in a relatively remote area at the end of the day this would not be possible without the support that we get from the local community so we're in a place called POS county which is just some of the best people that I've ever met like it's I honestly like if you want to go and and just walk into a bar somewhere and spend time with some of like the greatest people in the United States, go to Pekos County because we've been amazed with like how welcoming like the community has been. And so this goes hand inhand with how do we invest in you know job programs to bring people there. We just try to be good actors and try to be transparent about you know the positives and also the negative externalities and how to mitigate them.</p>
</details>

### 研究前沿：超越经典 RL 的“为学习而强化学习”
**Matt Turck:** 非常有趣，这与强化学习的世界截然不同。但现在让我们恰好切换到 RL。自从我们几年前聊过之后，你提到世界已经变了，过去几年每个人都非常关注预训练，感觉在 2025 年，预训练和 RL 的结合已经成为了很多人做的最先进的技术。请给我们讲讲你们的方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Fascinating and very different from the world of RL. But let's precisely um switch to RL now since we chatted a couple of years ago. You mentioned that the world has changed and um everybody was very pre-training focused uh for the last few years and sort of feels like in 2025 the combination of pre-training and RL now has become sort of like the the both the state-of-the-art in what what a lot of people do. Walk us through your approach.</p>
</details>

**Eiso Kant:** 两年前我们做这个播客时，我们谈到了我们从代码执行反馈中进行强化学习的方法。随着时间的推移，这在两个轴向上都得到了很大的发展。一是我们现在有超过一百万个这样的环境，以及数千万次的修订，使我们达到了三千万的量级。这是因为随着你增加模型需要学习的问题类型的多样性，你可以提升模型的能力。第二个轴向是，模型的推理能力和更长时间跨度的能力——多步复杂规划和执行——变得如此强大，以至于 RL 从单次强化学习转向了智能体 RL。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when we did this podcast two years ago, you know, we spoke about our approach of of reinforcement learning from code execution feedback. over time that has grown a lot across two axis. One is right now we have over a million of those environments uh and tens of millions of revisions putting us in like the 30 million range. So just yeah two orders of magnitude larger over the last 2 years and that's because as you increase the diversity of the type of problems that the models need to learn in you can increase the capabilities of the models. The second axis is that the models got so capable in their reasoning and longer time horizon capabilities multi-step like complex planning and execution that RL moved from kind of singleshot reinforcement learning to agentic RL.</p>
</details>

**Eiso Kant:** 如今，我相信每个人都在沿着这些轴向进行扩展。两年前这是一个无人问津的逆向观点，而今天这绝对是共识。但我们再次发现自己处在一个对未来持有逆向观点的位置。这并非刻意追求逆向，只是因为我们花了很长时间思考这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">today I believe everyone is scaling amongst those axes um and it's true where 2 years ago this was a contrarian opinion that no one was doing to date is absolutely consensus where we have again found ourselves in a point where we now have again a contrarian opinion on the future. Uh and it's really not by by trying to be contrarian. It's just that we I think have had a pretty had a couple of you know a long time thinking about this.</p>
</details>

**Eiso Kant:** 你现在听到很多关于用人类专家制定的规则来扩展环境的说法。这不仅限于编码领域，我们现在进入了电子表格操作、化学家或市场营销专家的复杂任务等领域。你使用专家创建的规则，让模型可以用来判断答案。这非常有效，我们也在这样做。但那种认为这将把我们带向 AGI 的说法，我们并不同意。我们认为这是在 AGI 到来前尴尬的“青春期”里该做的事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so what you're hearing a lot about at the moment is the scaling up of environments with human expert rubrics. So it's not just going into coding where we've got verified rewards. Now we're entering into areas if that's you know how to operate on a spreadsheet or if that's how to do a complicated task as a as a chemist or you know marketing uh professional where you use kind of a rubric created by an expert uh to make it part of what a model can use to judge the answers and it's highly effective uh and by the way we do it as well. But the narrative that that's going to scale us to AGI, yeah, we don't agree with. We think this is the right thing to do in the awkward teenage years ahead of AGI.</p>
</details>

**Eiso Kant:** 我们的观点是，强化学习将经历一个类似我们在语言建模中看到的时刻。是什么让语言建模如此美妙？是这样一个事实：通过在网络上预测下一个词元，你拥有了这个通用的自监督目标。你只需要把整个互联网扔给它，它就能迫使模型学习。但它之所以从未把我们带到 AGI，是因为互联网从未真正包含创造它的思想和行动的数据集。它只有最终的代码，最终的文章，却没有导致它的思考和行动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our view is that reinforcement learning will have a moment similar like we've seen in language modeling. So, what makes language modeling so beautiful? It's the fact that by predicting the next token on the web, you have this general self-supervised objective, right? You just can throw the entire internet at it and of course continue to filter it into more quality and improve it with synthetic, all the things we spoke about last time, but it forces the model to learn. But the reason that never got us to AGI is because well, the internet never actually included the data set of the thoughts and actions that created it. It's the final piece of code. It's the final article you write uh but not the thoughts that you had and actions that led to it.</p>
</details>

**Matt Turck:** 没有试错的过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Not the trial and error.</p>
</details>

**Eiso Kant:** 正是。所以我们的观点是，存在一个通用的强化学习目标，它不需要人类裁判、环境、奖励模型或任何外部的东西，而是可以像我们看到的下一个词元预测那样，在语言上进行泛化。一种思考方式是，传统上我们获取网络数据，用合成技术重新组织它、改进它，我们是向前生成。但如果你可以向后生成呢？我的意思是，如果你可以逆向工程网络，或者说解压缩网络，得到创造它的思想和行动呢？是否存在这样一个通用的 RL 目标？这就是我们过去一年半里大量研究的地方，我们现在已经开始看到这可能实现的巨大希望。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly. Uh and so our view is that there is an generalized objective for reinforcement learning that doesn't require you know human judges or environments or reward models or anything external but can generalize over language. Uh the same way that we have seen you know next token prediction generalize. A way of thinking about it is if you have traditionally we've taken the web and we've used synthetic techniques to reformulate it to improve it. We've moved forward like we taken the web and generated forward. What if you could generate backwards? So what I mean by that is what if you could reverse engineer the web or decompress the web into the thoughts and actions that created it. Is there such a general objective for RL that can be found? This is where we've done a lot of our research in the last year and a half and we have now started seeing a lot of promise towards that being possible.</p>
</details>

**Matt Turck:** 这个方法有名字吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Does it have a name as an approach or.</p>
</details>

**Eiso Kant:** 有的。我们称之为“为学习而强化学习”（Reinforcement Learning to Learn），简称 RL to L。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So we call it reinforcement learning to learn RL.</p>
</details>

**Matt Turck:** 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

**Eiso Kant:** 这可能是我第一次公开说这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is the first time I'm probably publicly saying this.</p>
</details>

**Matt Turck:** 我复述一下，确保每个人都能理解。所以有一种方法是强化学习，你创造环境，RL 进行试错，得到奖励或不奖励，扩展 RL 的路径就是把它扩展到各种不同的任务上。这是选项 A。你说的意思是，你们在研究选项 B，或者说一个不同的方法，你们回到互联网数据，逆向工程出得出那个结论的思考过程。是这样吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and just to play it back and make sure that it's understandable by everyone. So there's one approach which is reinforcement learning where you create environments and reinforcement learning does trial and error uh gets rewarded not rewarded and the path to scaling reinforcement learning is to just uh expand reinforcement learning to all sort of different tasks. So that's option A. What you're saying is that you you're working on an option B or maybe that's option A and the first one was option uh B but you're working on a on a different approach where you're going back to internet data reverse engineer the the thoughts that went in reaching that conclusion in the first place is that.</p>
</details>

**Eiso Kant:** 这是非常完美的概括。我们不认为它们是互相排斥的。我们认为，你希望模型在训练的早期就学会如何思考和推理，然后你希望它在环境中学习以磨练其技能。这和我们人类很像，对吧？我们从大学毕业时学到了很多，但然后我们被投入工作，我们实际去做，从经验中学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it's a perfect way of framing it and and we don't think they're mutually exclusive right we think that you want to have a model learn how to think and reason as early as possible in its training and then you want to to actually have it learn in the environments to sharpen its skill sets, right? And it's not unlike us, right? Like it's we'll have learned a lot coming out of university, but then we're put in the job and we're actually doing it and we're learning from experiences.</p>
</details>

**Eiso Kant:** 所以，我们认为训练将经历四个阶段。预训练和在网络上预测下一个词元是一个了不起的引导过程。RL to L，我们内部也称之为 Bondi 技术，我们认为它将把模型推向一个推理和思考的水平，这会比今天发生得早得多。然后，你有从代码执行反馈和其他验证环境中进行的强化学习，这有助于在模拟环境中磨练技能。第四个阶段，随着时间的推移，将越来越成为从这些智能体的真实世界经验中进行持续学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So our view is is that you know we pre-training and predicting the next token on the web is an incredible bootstrap of of understanding language and and helping us get you know to a level of intelligence. Reinforcement learning to learn RL internally also refer to as the Bondi techniques. It's kind of our our our code name for it. We think will push models to a level of reasoning and thought that will happen far earlier in their training than it does today. And then you have reinforcement learning from code execution feedback and and from other verified environments that help learn really what is you know to sharpen those skill sets in simulated environments. And then the fourth stage of training over time increasingly will become learning continuous learning from real world experiences of these agents. And so those are kind of the four stages that we think training will go to.</p>
</details>

### 智能体、平台期与未来之路
**Matt Turck:** 你刚刚提到了一个有趣的点，模型和智能体或多或少是同一回事。几天前，有人说智能体还有十年才能实现。你对我们现在所处的智能体发展阶段有何看法？它与 AGI 有何关系？以及，在不成为一家基础模型公司的情况下，是否有机会构建智能体？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You just mentioned something interesting about the model and the agent being more or less the same thing. So to to weave that question into the you know current sort of debate topics a few days ago said that agents were 10 years away. So what is your take on where we are with agents as it relates to AGI and um is there an opportunity to build agents without being a foundation model company?</p>
</details>

**Eiso Kant:** 我还没听 Karpathy 的采访，但我非常想听，因为我进入这个领域就是因为他。2015 年，Andrej Karpathy 写了一篇名为《循环神经网络的无理有效性》的博客文章，正是那篇博客文章让我创办了我的公司，并让我对语言模型能做什么痴迷了十年。所以我非常尊重他的观点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I haven't yet listened to the kopathy interview and I really want to because I don't think you noticed but I got into the space because of karapathy. So in 2015, Andreopathy wrote an article called the unreasonable effectiveness of recurrent neural networks, a blog post about language models. And that singular blog post let me start my company sourced and got me down this obsession for now a a decade of like what you know language models and and can do. And so I have an immense amount of respect for for his opinion.</p>
</details>

**Eiso Kant:** 我能说的是，今天我们对智能体的定义是什么？它是一个在环境中循环运行、可以访问一套工具的模型。我们作为基础模型公司是如何训练智能体能力的呢？我们把那个智能体——也就是运行这个循环并能访问工具的代码——和模型一起训练。这就是为什么你看到最强大的编码智能体，都出自那些将它们与模型一起训练的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what I can say is this, right? What is today the definition that we use of an agent? It's a model running in a loop inside an environment with access to a set of tools, right? And it's and it's doing longer trajectory work. And how are we training agents, right? Agent capabilities as foundation model companies is that we take that agent, right, the binary, the piece of code that that runs this in a loop and has access to could be a container or could be access to a bunch of tools and we train it together with the model. And so this is why you see the most capable coding agents, right, really coming out of people who are training with the models.</p>
</details>

**Eiso Kant:** 如果你决定创办一家公司来构建一个编码智能体，但你无法改进模型，也就是智能体无法与模型一起训练，而基础模型公司，像我们自己，正深度专注于这样做，那么你就没有那种优势。你玩的猫鼠游戏会变得困难得多。并非不可能，但我看到过为特定事物构建的令人难以置信的智能体，因为没有一家基础模型公司能单独专注于所有事情。但我们在 Poolside 有一句话：随着时间的推移，一切都会坍缩到模型中。我认为我们越来越多地看到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what I am careful about and we see this in coding, right? Maybe we see this ourselves is if you decide to start a company to build a coding agent where you are not able to improve the model, right? The agent is not able to train together with the model and foundation model companies like like ourselves are deeply focused on doing so. You you don't have that edge and so the cat-and- mouse game that you're playing becomes a lot more difficult. It's not impossible. I've seen incredible agents being built for specific things because no one can singly focus on everything. Not any foundation model company and including ourselves. But we have a phrase at poolside which is over time everything collapses into the models. And I think increasingly that's what we're seeing.</p>
</details>

**Matt Turck:** 有趣的是，我们从两三年前谈论“薄封装”，到去年谈论“厚封装”，感觉在 2025 年进入 2026 年，我们又开始思考那些真正是“薄封装”的智能体了。这是一个循环。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it's it's funny how we went from talking about thin rappers 2 years ago, 3 years ago, to to thick rappers last year, and it feels like in 2025 going into 2026, we're starting to think about agents that are really thin rappers. Again, it's it's a constant.</p>
</details>

**Eiso Kant:** 我们都忽略了一些东西。我认为我们很难持有这样一个观点：模型将达到与每个领域中最有能力的人相同的智能和能力水平。但当你退后一步，不看未来 12 个月，而是看未来 36 个月（对于知识工作），我认为很少有人会争辩说这在未来十年内不会发生。在那个世界里，如果 AI 和该领域最有能力的人一样能干，你的业务会是什么样子？这意味着某些东西仍然存在，比如我的 Uber Eats 应用，但一大堆垂直软件或垂直智能体可能就消失了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're all ignoring something, right? And it's maybe it's the wrong way of putting it. Uh, I think we have a hard time holding the point of view that models will reach the same level of intelligence and capabilities that the world's most capable people in every field have. And when you take a step back and don't take the next 12 month view, but just take the next I think it's in the next 36 months for knowledge work. Maybe it's the next someone else might think it's the next 5 years. I think few people today would argue that it's not going to happen in the next decade. In that world, what does your business look like if AI is as capable as the most capable person in the field? And that means certain things still exist like my Uber Eats app still exists because I want to look at my food and etc. But a whole bunch of vertical software or vertical agents are probably gone.</p>
</details>

**Matt Turck:** 那么，对于那些认为 AI 进展实际上正在进入平台期的人，你怎么说？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what do you tell people that argue that AI progress is actually plateauing?</p>
</details>

**Eiso Kant:** 坦率地说，是同样的话。自从创办 Poolside 两年半以来，我一直被问到这个问题。我们正处在一个点，我们不断看到，随着每一代新芯片的出现，我们有能力让模型变得更大。这与每一代新芯片相关联很重要，因为你不能无限地投入资金来扩大规模，那是一种错误的说法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The frankly the same thing. I've I've had this question for two and a half years now since starting poolside. This is not the first podcast where you know there was a are we hitting a wall? We are I think at a point where we are continuing to see with every new generation of chips an ability to make the model larger. Uh and it's important that this links to every new generation of chips because it is not a world where you can throw infinite dollars at scaling. It's that's a false narrative.</p>
</details>

**Eiso Kant:** 由于当前硬件的限制，你不能线性地增加更多的 GPU 来训练越来越大的模型。但每两年，现在芯片周期甚至更短，我们就会有令人难以置信的新芯片和网络技术栈，这突然使得下一代规模的模型成为可能。一方面，我们有免费的午餐，随着新一代芯片的出现，我们可以构建和训练更大的模型。另一方面，更有趣的是，随着我们进入扩展强化学习的世界，我们能够用更多数据训练模型更长时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is not that I can linearly add more GPUs and train increasingly a more larger model. If I do so the time it takes becomes exponentially longer. So and this is because of the current hardware limitations. But every 2 years and now the chip cycle is even getting less. We have an incredible new chip and an incredible new networking stack that is improving that all of a sudden makes the next generation of size model possible. Now on one hand we have a a free lunch like as as new generations of chips come out we can build and train larger models uh and it as continues to show that it improves the model capabilities on the other hand and I think far more interesting as we're now getting into the world of scaling reinforcement learning we're able to to train models for longer duration with more data.</p>
</details>

**Eiso Kant:** 如果这些限制不存在，Poolside 就不可能追赶上来。我们现在正处在一个点，我们开始……我们真的应该花些时间和模型在一起，它们变得非常好了。我们正在扩大算力以达到前沿水平。如果这只是一个金钱的世界，这是不可能的。但我现在看不到任何限制。我看到的更多是机会，在我们正在做的“为学习而强化学习”等研究中，可能会完全打开新的扩展维度，可以走得更远。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if those limitations didn't exist, Pulside wouldn't have been able to catch up, right? I think this is a really important part because we we're now at a point where we're starting like we should definitely spend some time with the models after this. They've gotten really darn good. We're now scaling up compute to make it to the frontier. That wouldn't have been possible if it was just a world of dollars. But it is definitely a place where yeah I think right now I don't see any limitations. I see more than limitations. I see opportunities in some of the research we're doing in reinforcement learning to learn and others that might completely open open up new scaling access that can go even further.</p>
</details>

### Poolside 的产品、战略与未来展望
**Matt Turck:** 你们非常专注于软件开发。你们如何看待“惨痛的教训”（The Bitter Lesson，由 Rich Sutton 提出的观点，即长期来看，利用计算规模的通用方法最终会胜过依赖人类领域知识的精巧方法）？这是你们担心的事吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're very focused on software development. Uh how do you think about the bitter lesson? Is that something that you guys worry about?</p>
</details>

**Eiso Kant:** 如果你回到我们第一个播客，或者我们公司成立第一天在网站上发布的帖子，我们总是说，通往 AGI 的道路贯穿软件，但并非止于软件。我们制定了一个三步走的大计划：第一步，辅助人们编码。第二步，让任何人都能构建软件。我认为世界现在显然已经到了这一步。然后第三步，泛化到所有领域。我们现在真的处在第三步的时刻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you go back to our first podcast or we put a post on our website on day zero of the company, we always said the path for AGR runs through software. It is not software. And we laid out this three-step master plan which was step one assist people in coding. It's kind of very early days. Step two, allow people, anyone to build software. I think the world is clearly there right now. And then step three, generalize to all domains. And we're now really in that step three moment.</p>
</details>

**Eiso Kant:** 我们现在开始更广泛地走出软件开发领域，回到我们一直说的：我们希望能够为世界上所有的知识工作提供动力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we're we're starting to open up much more broader outside of software development and come back to what we've always said like we want to be able to to to power all of knowledge work in the world.</p>
</details>

**Matt Turck:** 让我们回到具体细节，谈谈你刚才提到的一些东西。人们可能对 Poolside 的现状感到好奇，包括模型、产品和商业方面。从模型开始。你们网站上有三个产品：Malibu、Point 和 Assistant。这些产品的现状如何？它们是做什么的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For the last part of this conversation, let's uh go back down in the weeds and talk about some of the stuff that you just uh mentioned. I think I and and and people may be curious about the current reality of of poolside both from a model standpoint, product standpoint and commercial. So starting with the model. So you have you have three products on your website. You have a Malibu, you have a point, and then you have assistant. What's the current status of those products and what do they do product models?</p>
</details>

**Eiso Kant:** 我们的 Malibu 是我们第一个大的模型家族。Malibu 模型最初的目标是成为非常强大的编码助手。现在它们已经成为非常强大的编码智能体，也成为了非常强大的知识工作智能体。这些模型目前在其规模和重量级中是同类最佳的。它们在编码方面变得非常强大，但还没有达到我所定义的前沿水平。今天的前沿是 OpenAI、Anthropic、Google 和 xAI。这就是为什么我们有所有这些算力上线，来扩大这些模型的规模。那是我们即将推出的模型家族 Laguna，我们有小、中、大三种型号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So our Malibu was our first big family of models. And so within the Malibu models, they were really oriented towards originally to be very capable coding assistants. Now they've become incredibly capable coding agents. Uh and now they've also become incredible knowledge work agents. And so within that uh those models are right now for their their size and weight class, best-in-class. They have become incredibly capable coding, but they're not yet at what I would define as the frontier. So frontier today is OpenAI, Anthropic, Google, and XAI. And that's why we have all of this compute coming online to scale up those model sizes. That's our upcoming family of models, Laguna, where we have a small, a medium, and a large.</p>
</details>

**Matt Turck:** 你们有这些模型的基准测试吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you have benchmarks for those. Do you have benchmark?</p>
</details>

**Eiso Kant:** 我们有基准测试。如果你考虑我们今天的基准，我们主要与我们合作的商业组织私下分享。但如果你把 Malibu 智能体看作一个编码智能体，它现在的水平，例如在 Sweetbench verified 上，与 Gemini 2.5 Pro 刚发布时相当。它是一个小得多的模型，但由于我们在强化学习方面的工作，它真正提升了这些能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We do have benchmarks. Yeah. So, so if you think about our benchmarks today, um, and we primarily share them privately with the organizations, the commercial part that we work with, but if you think about the Malibu agent as a coding agent for instance, right now, it sits at a level of like Sweetbench verified for instance, where Gemini 2 and a half pro was when it came out. Uh, and so it's a much smaller model. Uh, but it's really pushed those capabilities because of our work in reinforcement learning.</p>
</details>

**Matt Turck:** 从市场推广的角度来看，这是一个有趣的想法。因为你们在过去几年里既公开又有点神秘。我们处在一个信息爆炸的世界，每个人都在争夺注意力。你如何看待这种一方面与企业合作，另一方面所有开发者都希望把这些产品拿到手里的张力？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's an interesting uh thought from a go to market standpoint because you you guys have been both public but kind of stealth in a way for the last couple of years and we're in a world of just like massive noise and like everybody's like struggling for attention. How do you think about about that tension working with enterprises on the one hand but like on the other hand like everybody's uh you know all developers want those products to be in their hands.</p>
</details>

**Eiso Kant:** 我们的观点其实很简单：当我们能在一个非常有价值的维度上明显做到最好时，我们才会公开发布模型。在我们达到前沿水平之前，我们选择了一个别人无法进入的市场，那就是国防工业基地和政府。因为我们愿意做的一件事是，将我们整个模型权重和完整的技术栈，部署到客户需要的任何地方。所以我们今天在进入情报界专用设施的工作站上运行，在本地服务器甚至物理隔离的环境中运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So our view has been quite simple actually is that we will make models publicly available when we are clearly best on on a very valuable axis right and I think that's that's important. Before we were at the frontier, we picked a market where no one else could go, which was the defense industrial base and government because one of the things that we're willing to do uh kind of from the enterprise DNA we have is take our entire model weights and the full stack all the way with the agents anywhere the customer needs it to be. So we today operate on workstations that go into skiffs. We operate on servers that are you know onrem or even as far as airgapped.</p>
</details>

**Eiso Kant:** 我们在国防工业中对这一切进行了实战检验，因为它们是极其庞大的组织，高度复杂，高度管制。现在，随着模型达到一个我们认为可以竞争的水平，我们正在向更广泛的企业市场拓展。所以你会看到我们越来越多地出现在金融服务、工业、科技公司等大型企业中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we battle tested that in the defense industry because they're extremely large organizations they're highly complex they're highly regulated. Now, as the models have gotten to a point where we say, "Okay, now we feel that we can compete, we're going to wider enterprise." And so, you'll see us increasingly more showing up in kind of the large enterprise names amongst financial services, industrials, like technology companies.</p>
</details>

**Eiso Kant:** 在 Poolside，我们有一种非常强大的前线部署（forward deployed）模式。我们有前 Palantir 的员工过来，真正注入了那种 DNA，即找到一个高价值问题，并以高度的主动性介入，帮助客户解决它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At Poolside, we have a very strong forward deployed motion. We have former Palunteerians and who came over and really kind of instilled some of that DNA, the DNA of what it means to find a high value problem and come in with high agency and help a customer solve that.</p>
</details>

**Matt Turck:** 你们甚至称他们为 FDR（Forward Deployed Research Engineers，前线部署研究工程师）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You even have like FD R you call them FDR. FD is for chumps like you forward deployed research engineers.</p>
</details>

**Eiso Kant:** 是的。我们发现，做传统的前线部署工程和研究工程之间存在技能差距。后者需要有与模型和智能体良好合作的经验和天性，并在必要时进行额外的强化学习。所以我们把这些能力很强的研究工程师派驻到我们的客户那里。这就是为什么我们下周将在英国开设一个办公室，我们也将在这里纽约开设一个办公室，真正扩大前线部署研究工程的规模。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And and look what we found is that there's a there is a a gap between the skill set of doing traditional forward deployed engineering right where you're focused on uh a high value problem and using kind of piping data sources together and and building you know interfaces on top which is by the way incredible thing. The research engineering side is interesting because what you're looking for is the people in that who also have the experience and the natural tendency to work very well with models and with agents and can who work on additional reinforcement learning if it's necessary. And so we're taking these highly capable research engineers and we're putting them inside our customers. And that's for us something you're going to see us scale up increasingly more. It's why we've uh going to be opening an office in the UK actually next week. Uh we're going to be opening an office here in New York and really kind of scaling up that motion of forward deployed research engineering.</p>
</details>

**Matt Turck:** 放大来看，未来 12 到 18 个月，Poolside 会发生什么？我们可以期待什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, zooming out the next 12 to 18 months, what happens at Poolside? What can we expect?</p>
</details>

**Eiso Kant:** 模型达到前沿水平，我们现在看到了通往这一目标的直线路径。你会看到物理基础设施的规模化，既为训练更大、更强的模型提供动力，也为向世界提供服务。你会看到我们的前线部署研究工程师出现在全球越来越多的企业中。你会看到我们继续为使命而努力。我们从不想忘记，我们建立这家公司和与之相关的经济引擎，是因为我们认为在此之后的世界，可以创造大量的富足。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Models reach the frontier that that's uh that's right now I think we see a straight line towards this. Uh you'll see the the scaling up of physical infrastructure to both empower training even more larger and capable models but also serving them to the world. uh you'll see us uh have forward deployed research engineers and increasingly larger number of enterprises uh globally you'll see us just continue to work towards the mission right I mean for for us we never want to lose sight of the fact that we are building this company and and and the economic engine associated with it because we think that the world that lives after this is one where a lot of abundance can be created.</p>
</details>

**Matt Turck:** 期待着。Eiso，很高兴再次交流。非常感谢。祝贺你们在过去几年里取得的一切成就。期待看到数据中心和新模型。感谢你花时间和我们在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Looking forward to it. Uh ISO great to catch up. Thank you so much. Congrats on everything uh that you guys have accomplished in the last couple of years. Excited to see the data center and like the new models. And thank you for spending time with us.</p>
</details>

**Eiso Kant:** 谢谢你，Matt。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Appreciate it. Thank you, Matt.</p>
</details>