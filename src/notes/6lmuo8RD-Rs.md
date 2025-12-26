---
area: "tech-engineering"
category: technology
companies_orgs:
- Poolside
- Nvidia
- OpenAI
- Anthropic
- AWS
- Azure
- CoreWeave
- TSMC
- xAI
- Google
- Palantir
date: '2025-11-06'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The MAD Podcast
- The Unreasonable Effectiveness of Recurrent Neural Networks
people:
- Matt Turck
- Andrej Karpathy
products_models:
- GPT-4
- GB200
- GB300
- VS Code
project: []
series: ''
source: https://www.youtube.com/watch?v=6lmuo8RD-Rs
speaker: The MAD Podcast with Matt Turck
status: evergreen
summary: Poolside 联合创始人 Eiso Kant 认为，在通往通用人工智能（AGI）的竞赛中，智能本身正迅速商品化。真正的护城河在于能源和算力这两大物理基础设施。他详细阐述了
  Poolside 的宏大计划“Project Horizon”——一个千兆瓦级别的 AI 数据中心，并解释了为何前沿模型公司必须垂直整合能源、算力和智能。Kant
  还首次公开了公司新的研究方向“学会学习的强化学习”（RL to L），旨在为 AI 找到超越传统预训练和强化学习的、更通用的自监督目标。
tags:
- infrastructure
- llm
- model
- reinforcement-learning
- scaling-law
title: 智能已商品化：Poolside创始人揭示能源与算力如何决定AGI竞赛的终局
---
### 核心观点节选

**Eiso Kant:** 我甚至敢说，智能将成为一种商品。如果你是一家**基础模型**（Foundation Model: 指像 GPT-4 这样经过大规模数据训练、具备通用能力的 AI 模型）公司，却不建设实体基础设施，那你只是在“角色扮演”你的业务。“地平线计划”（Project Horizon）就是我们正在美国建设的最大数据中心园区之一。我们讨论的算力规模，是以数百兆瓦，乃至很快将以千兆瓦为单位计算的。我们称之为“学会学习的强化学习”（Reinforcement Learning to Learn, RL to L）。这可能是我第一次公开谈论这个概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would actually go as far as saying that intelligence is going to become a commodity. If you're a foundation model company and you're not building physical infrastructure, you're cosplaying your business. Project Horizon is us building out one of the largest data center complexes in the United States. We're talking about a scale of compute. It gets counted in the hundreds of megawatts and soon gigawatts. So we call it reinforcement learning to learn RL to L. This is the first time I'm probably publicly saying this.</p>
</details>

**Matt Turck:** 大家好，我是 First Mark 的 Matt Turck，欢迎来到 MAD 播客。今天我的嘉宾是 Poolside 的联合创始人 Eiso Kant。Poolside 是一家专注于软件工程的基础模型实验室公司，据报道目前正在以 140 亿美元的估值进行一轮 20 亿美元的融资，其中包括据传来自英伟达的 10 亿美元投资。我们深入探讨了 Poolside 雄心勃勃的“地平线计划”——一个数千兆瓦规模的 AI 工厂数据中心，以及为什么 AI 实验室必须同时掌握能源、算力和智能。Eiso 还揭示了“学会学习的强化学习”，这是一条超越预训练和经典**强化学习**（Reinforcement Learning, RL: 一种机器学习方法，让智能体通过与环境互动、试错并获得奖励或惩罚来学习最佳行为策略）的新路径。请享受这次与 Eiso 的深度对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi, I'm Matt Turk from First Mark. Welcome to the Mad Podcast. Today my guest is Iso Clant, a co-founder of Pullside. Poolside is a foundation model lab company focused on software engineering that's currently reported to be raising a $2 billion round at a $14 billion valuation, including a reported $1 billion check from Nvidia. We dig into Poolside's ambitious project horizon, an AI factory data center at multi- gigawatt scale, and why AI labs must own energy, compute, and intelligence. ISO also unveils reinforcement learning to learn, a new path that goes beyond pre-training and classic RL. Please enjoy this deeply insightful conversation with ISO.</p>
</details>

### Poolside的独特立足点：从反向押注强化学习开始

**Matt Turck:** Eiso，欢迎。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">ISO, welcome.</p>
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

**Eiso Kant:** 我刚刚回顾了我们上次的播客，才意识到那是我们作为 Poolside 做的第一个播客。是的，两年时间飞逝。快进到今天，2025 年底，前沿**通用人工智能**（AGI, Artificial General Intelligence: 指具备与人类同等或更高智能水平、能理解、学习并应用其智能解决任何问题的 AI 系统）实验室之间的竞争变得更加疯狂和泡沫化。那么你们现在处于什么位置？在一个与其他实验室激烈竞争的世界里，Poolside 存在的理由是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I was actually listening back to our podcast and I hadn't realized that it was the very first podcast we had done as poolside and yeah, two years have flown by. Fast forward to today at the end of 2025 the race between Frontier AGI Labs has only gotten crazier frothier. So where do you guys stand? What is the reason for Poolside to exist in a world of hyper competition with other labs?</p>
</details>

**Eiso Kant:** 这要回到我们创办公司的初衷。如果你回到 2023 年初我们创立 Poolside 的时候，我们之所以这么做，是因为我们对研究有自己的看法。如果你还记得，那年早些时候，GPT-4 刚刚发布，当时世界上的主流叙事是，要达到 AGI，我们所要做的就是扩大语言模型的规模，进行更多的下一个词元预测，增加参数数量和数据量。我们同意规模的重要性，至今仍然如此。但我们的观点是，强化学习将成为模型能力扩展最重要的维度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it comes back to why we started the company. Right? So if if you go back to early 2023 when we started Poolside, we started it because we had our own point of view on the research. So if you remember early in earlier in that year, you know, GPT4 had just come out and the narrative in the world was all we have to do to reach AGI is scale up language models, do more next token prediction, a larger number of parameters and more data. And we agree with the importance of scale and till the date still do. But our point of view was that reinforcement learning was going to become the most important scaling access for model capabilities.</p>
</details>

**Eiso Kant:** 在当时，这仍然是一个极具争议性的观点，在我们做播客的时候以及之后的大约 12 个月里都是如此。当然，今天情况大不相同了。如今，我认为这已经成为共识，世界已经明白，我们现在有能力继续扩展模型，使其朝着能力更强的方向发展，并真正缩小人类智能与 AI 之间的差距。这个使命是 Poolside 最初的使命，现在也依然是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Extremely contrarian opinion at that point still when we were doing our podcast as well and probably for the following, you know, 12 months as well. Today that's of course very different. uh today I think that's become consensus and I think the world has has understood that we now have an ability to continue to scale models towards more and more capable like direction and really close the gap between human intelligence and AI and and that mission was the original mission of poolside is still very much the mission of poolside.</p>
</details>

**Eiso Kant:** 但在此过程中，我认为我们预测会发生的事情确实发生了：我们将继续扩大规模，需要更多的算力，但与此同时，那种基于网络数据进行下一个词元预测的预训练第一范式，其收益正在呈现 S 型曲线并放缓。因此，在过去两年半里，我们在预训练方面迎头赶上，也就是我们所说的基础模型构建和语言建模的“入场券”，同时在强化学习方面建立了一些相当大的优势。现在，我们正处在一个这两者结合的时刻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but along the way I think what we had predicted would happen played out we were going to continue to scale up more compute was going to be required but at the same time the first paradigm of kind of pre-training of predicting the next token on the web was becoming sigmoidal and was slowing down in terms of the gains that it had. So over the last 2 and 1/2 years we caught up on the pre-training side and really on like the what we refer to as the table stakes of foundation model building and language modeling while building some pretty serious advantages on the reinforcement learning side and and now we're at a moment where those two things have come together.</p>
</details>

**Eiso Kant:** 我们所有这些前沿公司都在开发我们的大模型，并且仍然处于相同的规模。我们在研究中建立了一系列优势，在工程上也建立了一些优势，而这些可能是最重要且可持续的。但现在我们到了一个地步，将我们的模型扩展到前沿规模对我们来说也变得必要。因此，我们最近发布了一些关于即将上线的庞大算力规模的公告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All of us like as Frontier companies are you know developing our big model runs are still at the same scale. So there's series of advantages that we've built in our research. There's advantages that we've built on our engineering and those are probably some of the most important sustained ones. Uh but now we're getting to a point where scaling up our models to frontier sizes uh is also necessary for us. And hence we've recently had some announcements about the sheer scale of compute that's coming online.</p>
</details>

**Eiso Kant:** 我们正在参与这场竞赛。我回听了我们的播客，我说过，我们的目标是追赶 OpenAI 和 Anthropic。这仍然是事实。但我们的起点有点不同。我们认为，要实现能够推理、规划和理解世界的高度智能，你最好戴上眼罩，专注于一个代理指标。对我们来说，这个代理就是软件开发。随着我们越来越擅长处理长周期的软件开发任务，坦率地说，我们也越来越擅长处理所有类型的知识工作任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we're competing like we're we're in this race. Uh I think I I listened back to to our podcast and I said, you know, we're going after open eye and entropic. That's still very much true. But our starting point was a little bit different, right? We said, you know, to get to highly capable intelligence that can reason, that can do planning, that can understand the world, you're almost better off putting a set of blinders and focusing on on one proxy for that. And for us, that proxy was software development. And as we've gotten more and more capable at doing longer horizon software development tasks, we've also gotten more and more capable at frankly all type of knowledge work tasks.</p>
</details>

**Eiso Kant:** 从模型的角度来看，我认为我们所有人最终都会趋同于一个相似的点。我甚至敢说，智能将成为一种商品。在那个世界里，我们希望成为受企业信赖、受商界信赖的公司，为知识工作者赋能。这始于编码代理，现在也已超越了那个范畴。我认为在这个领域，很多事情都将发生转变，我们正处在一个类似“前电力时代”和“后电力时代”的时刻。所以我不认为这是一个赢家通吃的市场，但似乎确实只有少数公司能够达到那个水平。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the world from a model perspective. I think we are all over time converging to a similar point. I would actually go as far as saying that intelligence is going to become a commodity. In that world, who we want to be is we want to be trusted by by enterprises. We want to be trusted by businesses to to power the knowledge workforce that started with coding agents and is now going beyond that as well. Uh and I think in the space, you know, so much is going to transition, right? We're like a pre and post electricity moment. So I don't think it's a winner takes all market but it does seem to be that it's a small number of companies who are who are able to get there.</p>
</details>

### Project Horizon：在千兆瓦规模上构建AI工厂

**Matt Turck:** 作为通往 AGI 竞赛的一部分，你们在过去几周有一些重磅消息。首先，有传言称你们正在进行一轮高达 20 亿美元的大规模融资，据报道英伟达将投资高达 10 亿美元，投前估值为 120 亿，投后 140 亿。这轮巨额融资似乎与你们正式宣布的另一个大新闻——“地平线计划”（Project Horizon）密切相关。什么是“地平线计划”？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As part of that race towards AGI you've had uh some very big news in the last couple of weeks. First of all there is a rumored large fund raise up to $2 billion where Nvidia reportedly would be investing up to a billion dollars at 12 billion pre 14 billion post. It's a very large round that seems to be very tied to another big news that you guys did formally announce which is Project Horizon. What is Project Horizon?</p>
</details>

**Eiso Kant:** 是的，“地平线计划”是我们正在美国建设的最大数据中心园区之一。这又回到了我之前说的，我们谈到智能正在成为一种商品。自公司成立两年半以来，我们的观点一直是，技术栈中有三个层面至关重要：能源、算力，以及建立在其之上的智能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So, so Project Horizon is us building out one of the largest data center complexes in the United States. And this comes back to something I said earlier. We we talked about intelligence becoming a commodity, right? Our our view for pretty much since starting the company over 2 and a half years has been that there's three layers of the stack that fundamentally are going to matter. It's energy, it's comput, and it's the intelligence built on top.</p>
</details>

**Eiso Kant:** 在这个世界里，如果你认为不同公司构建的智能之间的差异会越来越小，最终成为一种商品——可能更像石油、云服务或者面包店的面包——那么有两件事最重要：你扩展它的能力，以及你交付给最终用户的成本。扩展能力是“地平线计划”最主要的驱动因素，但成本也是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And within this world, if you think that intelligence is going to become less distinguishable between the companies building it and becomes a commodity, a commodity probably more like oil or cloud comput like bread at the bakery, is there's two things that matter. Your ability to scale it and the cost at which you deliver it to your end user. Now the ability to scale it was frankly the primary motivating driver for project horizon but cost as well.</p>
</details>

**Eiso Kant:** 重要的是要思考 12 个月前你能做什么，而今天又能做什么。在我们行业两年前讨论的算力规模下，你可以打电话给一个数据中心**托管服务商**（Colo, Colocation: 指企业将自己的服务器设备放置在专业数据中心机房的做法，共享数据中心的基础设施），说“嘿，我六个月后需要这么多算力”，他们会有物理空间让你部署，或者有人能提供你所需的容量。但今天，我们讨论的算力规模是以数百兆瓦甚至很快将以千兆瓦为单位计算的，你已经找不到可以打电话的人了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and it's important to think about what you could do 12 months ago versus what you could do today at the scale of compute that we were talking about you know 2 years ago in our industry you could call up a data center colo and say hey I want this much compute in 6 months and there would be space like physical space where you could deploy it or there'd be someone who has the capacity available to you today we're talking about a scale of compute that gets counted in the hundreds of megawatts and soon gigawatt but there's no one you can call</p>
</details>

**Matt Turck:** 对，这些都是定制建造的数据中心，规模如此之大，以至于没有人在找到租户之前会去建造它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right these are built to suit data centers that are so large that no one is building them before having a tenant</p>
</details>

**Eiso Kant:** 所以，当你接近技术前沿，你的模型变得越来越强大，你想要向世界提供这种智能，并希望随着时间的推移扩大你的训练规模时，你从决定到能够实现这一目标的准备时间，不再是打个电话给**超大规模云服务商**（Hyperscaler: 指像亚马逊 AWS、谷歌云 GCP 和微软 Azure 这样提供巨型规模云计算服务的公司）或其他合作伙伴，然后在几个月内就能搞定。现在，我们谈论的是 12 个月、14 个月、18 个月，并且附带着巨大的资本投入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so as you're approaching the frontier and your models are getting more capable and you want to serve that intelligence to the world and you want to scale up your training as well over time now your lead time from deciding to do that to being able to do that is no longer calling up a hyperscaler or calling up another partner and having it, you know, in months. Now, we're talking 12 months, 14 months, 18 months with huge capital numbers attached to it.</p>
</details>

**Eiso Kant:** 我的联合创始人们私下里常说一句话，可能不太适合在播客上讲，但那就是：如果你是一家基础模型公司，却不建设实体基础设施，那你只是在“角色扮演”你的业务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, my co-founders say this thing to each other and probably not really for for podcast material, but it's it's a if if you're a foundation model company and you're not building physical infrastructure, you're cosplaying your business.</p>
</details>

**Matt Turck:** 嗯。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mhm.</p>
</details>

**Eiso Kant:** 这就是其根本性质。我们并不是心血来潮说“建基础设施很酷”，而是为了实现我们的使命，这是一种必然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And and this is kind of the the really fundamental nature. It's not that we went out and said it'll be cool to build infrastructure. It was a necessity for the mission to be able to achieve it.</p>
</details>

**Matt Turck:** 所以你认为否则就会被淘汰出局，对吧？很明显，OpenAI 有一个整体的目标项目，他们刚刚宣布了好像是第四个要建的数据中心。Anthropic 与 AWS 有特殊关系，我想 AWS 正在为他们建一个。这大概就是你说的，你需要一个租户。在这种情况下，云服务商愿意这么做，因为他们有 Anthropic 作为租户。所以作为一个独立的实验室，姑且这么称呼，你必须掌握自己的命运，而这包括建立自己的数据中心，对吧？我这么复述对吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you think you just get boxed out, right? So obviously OpenAI is a whole target project and they just announced like I think a fourth data center that they're about to build. Enthropic has a special relationship with AWS. I think AWS is building one for them. That's I guess that's what you were saying. You need a tenant in that case. The scal is willing to do it because they have anthropic as a tenant. So as an indie lab for lack of a better term like you have to own your own destiny and that it involves building your own data center right just to play it back.</p>
</details>

**Eiso Kant:** 是的。我认为作为一家基础模型公司，你可以走两条路。你可以选择与一个超大规模云服务商深度合作，让他们成为你的股东，并全力以赴。我认为这是一个方向。但与此同时，世界正发展到一个地步，我认为没有人再怀疑我们正走在实现人类级别能力和智能的轨道上。在那个世界里，价值 29 万亿美元的知识工作将被重写，科学进步将开始突破我们前所未见的水平。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I think as a foundation model company you can go two paths right you can choose to to deeply partner with a hyperscaler and kind of you know become uh you know have them become an owner in you and and really go all the way uh and I think that's one direction but at the same time the world is getting to a point where I don't think anyone has any doubts anymore that we're now on track to to reach human level capabilities and and intelligence and in that world $29 trillion of knowledge work rewrites itself right scientific progress starts pushing beyond levels that we've ever seen</p>
</details>

**Eiso Kant:** 所有这一切都是基于算力的智能。因此，一家基础模型公司，远比大多数人意识到的更像是一家实体基础设施企业。因为扩展算力的能力，并将其经济高效地带给最终用户，至关重要。随着我们的智能体变得越来越相似，你扩展规模并以有竞争力的价格提供服务的能力——比如每词元几美分将决定是否有人购买——就变得至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And all of it is intelligence on compute. And so we are far more in a in a foundation model company is far more in a physical infrastructure business than most people realize because the ability to scale that compute, right, and and bring it to end users and frankly do so cost effectively, right? The cost of your tokens are going to matter more and more. as our as our intelligences all become closer to each other, the ability to scale this up and and do so to end users where you know the cents per token are kind of a determinant if someone's going to buy it is is critical.</p>
</details>

**Eiso Kant:** 所以我们几年前就开始问自己，要实现这个目标需要什么。随着时间的推移，我们学到了更多，观察了更多，然后我们开始采取行动。这个行动就是“地平线计划”。简而言之，“地平线计划”今天宣布的是一个 2 千兆瓦的园区，实际上在我们所在的场地上，我们可以远远超过 2 千兆瓦。这是与德州一个了不起的家族——米切尔家族的合作。米切尔家族拥有美国最大的单块土地之一，足有 50 万英亩。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we already started several years ago uh asking ourselves the question like what would it take to move towards this and then over time you know we learned more we observed more and and then we started acting towards it and and the acting towards it is project horizon. So project horizon in a nutshell is today announced a 2 gawatt campus we can actually go far beyond 2 gawatts on the site that we're in. It's a partnership with an incredible family out of Texas called the Mitchells. The Mitchells have one of the single largest parcels of land in the United States. is half a million acres.</p>
</details>

**Eiso Kant:** 这总是让我感到震惊，因为作为参考，洛杉矶市的面积是 30 万英亩。在那片土地上，正在建设可再生能源，有电网连接，有水，还有一条 20 英寸的天然气主管道。这为我们提供了一种可能性，可以非常快速、大规模地扩展为数据中心供电的能源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it always blows my mind because for context, LA is 300,000 acres. And on that land is renewables being built. There's grid connection. There's water, but there's also a 20-in main gas line. And that offers us a possibility to start scaling up energy that powers data centers incredibly fast and incredibly large scale.</p>
</details>

**Eiso Kant:** 所以你将看到，在今年年底前，我们将开始建设一个 250 兆瓦的数据中心。它由天然气供电，以电网连接作为备用，将容纳数量惊人的算力。但这将只是我们正在建设的众多阶段中的第一阶段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mhm. And so what you're seeing from us is that before the end of this year, we're starting construction on a 250 megawatt data center. It's natural gas powered uh with grid connection as a backup and it will house an incredible amount of compute, but it will be the first phase of many that we're building out.</p>
</details>

### AI前沿实验室的经济学：为何毛利率更像云服务而非SaaS

**Matt Turck:** 很好。为了深入理解你所说的，你提到了拥有自己的实体基础设施对前沿 AI 实验室经济模型的影响。为了帮助我们理解，AI 领域一个关键问题一直是毛利率。你认为拥有自己的实体基础设施最终会导向怎样的整体结构？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. So just to unpack some of the things you said, you mentioned the impact of owning your physical infrastructure on the economics of Frontier AI labs. to help us understand understand that obviously one key question in the world of AI has been gross margin where do you think owning your own uh physical infrastructure lead you towards in terms of like overall structure</p>
</details>

**Eiso Kant:** 我还不确信我们行业的毛利率会像 SaaS 公司那样达到 80% 以上。当我们谈论智能作为一种商品时，我们在此之上构建增值服务。作为一家基础模型公司，一方面你出售你的词元，也就是你的“原油”或原材料。另一方面，你建立增值服务，即你带给最终用户和客户的产品，为他们的业务或消费者创造价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm not yet convinced that gross margins in our industry will look like a SAS company like 80% plus I think when we're talking about um a commodity as intelligence that we build value added services on top right as a foundation model company on one hand you you sell your tokens right your barrels of oil, your raw material. And on the other hand, you're building up value added services, your products that you bring to end users and customers that you know unlock value for their businesses or for consumers in the case of others.</p>
</details>

**Eiso Kant:** 在那个世界里，我认为它看起来更像一家云公司。所以，当我们审视这个规模时，它会像云公司，但后面可能还要加个零。从利润率的角度来看，可能非常相似，因为如果你想想 AWS、GCP 或 Azure 是什么，它们实际上是硬件的虚拟化加上顶层的服务。我认为基础模型并没有那么不同。所以从利润率来看，我们可能会更接近云公司那样的 40% 左右，而不是软件行业的 80%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in that world, I think it looks a lot more like a cloud company. So I think when we're going to look at the scale of this, uh, it's going to look like cloud companies with a zero behind that. from a margin perspective probably pretty similar because if you think about what is an AWS or GCP or an Azure it's effectively virtualization of hardware with services on top. I don't think foundation models are are that different. So I think from a margin profile will probably sit far closer towards that like 40% mark that you see in in cloud companies than you do like the 80% on the software side.</p>
</details>

**Eiso Kant:** 现在，当你开始思考智能成本的构成时，你基本上有土地、能源、数据中心，以及数据中心里的芯片。举个例子，如果我们用一些大致准确的说明性数字来分解，为一个 250 兆瓦的设施供电，需要大约 5 亿美元的实体基础设施。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now when you start thinking about what sits in the stack of cost of intelligence, you effectively you've got the land, um you've got the energy, you have the data center, you have the chips inside the data center and and just for context, if we for instance break this down with illustrative numbers that are roughly in the right ballpark, uh to energize 250 megawatt is about half a billion dollars worth of physical infrastructure. Mhm.</p>
</details>

**Eiso Kant:** 在燃气轮机的情况下，就是燃气轮机，但还有其他路径。建设一个数据中心，也就是将所有设备集中起来、让算力在内部运行的“动力外壳”，你大概需要 20 亿到 25 亿美元。而今天放进去的算力设备大约需要 55 亿美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in the case of gas turbines, it's gas turbines, but there's different paths to it. Building a data center like the power shell that brings together all of the equipment where the compute can run inside, you're talking kind of north of $2 billion, $2 to $2.5 billion. Now the compute that goes inside today would be about $5.5 billion.</p>
</details>

**Matt Turck:** 算力设备指的是芯片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">being the chips,</p>
</details>

**Eiso Kant:** 指的是芯片、网络以及我们称之为数据中心“装修”的一切。所以，一个 250 兆瓦设施的总成本大约是 80 亿美元。所以当你在行业里听到说一千兆瓦需要 400 或 500 亿美元时，人们指的就是这个，是这些成本的分解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">being the chips and the networking and and and everything that kind of is what we'd refer to as the fit out of of a data center. And so you got about an $8 billion like cost of 250 megawatt. So when you hear in the in the industry you might say a gigawatt is 40 or $50 billion. That's what people are referring to, right? It's it's the breakdown of those costs.</p>
</details>

**Eiso Kant:** 芯片有一定的使用年限。在我们行业，关于它们能用多久有很多争论，这是一个供需问题。数据中心传统上有 15 年的寿命，但随着新一代芯片的出现需要改造。而你的电力基础设施可以持续很长时间，但需要维护。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the life of a chip has a certain amount of years to it. Uh and in our industry there's there's lots of you know argumentation about how long they last and it's a demand and supply question. A data center has kind of traditionally, you know, a 15-year life, but it needs retrofitting as as new generations of chips come online. And your power infrastructure can last a very long time, but requires maintenance.</p>
</details>

**Eiso Kant:** 在那个 80 亿美元的 250 兆瓦项目中，你每年要花费 3 亿到 3.5 亿美元的**运营支出**（Opex, Operating Expense: 指企业为维持日常运营而产生的持续性支出）。你可以把这笔费用大致对半分，一半是融资成本，一半是能源和运营成本，其中能源占大头。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, in that $8 billion project of 250 megawatt, you're annually spending somewhere north of 300 to $350 million of opex. And so, you can split that about 50/50 between the cost of financing and the cost of energy and operations. energy like being the most.</p>
</details>

**Eiso Kant:** 这里就有一个有趣的洞见。你突然意识到，今天的能源部分并不是成本构成中最大的部分。你每年在能源上花费 1.6 亿美元。当然，我用的是西德克萨斯州的数字，所以能源成本在该国其他地方可能是这个数字的两倍，但与算力的**总拥有成本**（TCO, Total Cost of Ownership: 指资产在整个生命周期内的所有直接和间接成本总和）相比，它仍然相对较小。当然，数字本身还是非常巨大的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is where there's already an interesting insight. All of a sudden, you realize that the energy part today is not the biggest part of the stack, right? You're talking $160 million a year in energy. And of course, we're I'm taking numbers that are West Texas numbers. So energy can be, you know, double that in other places in the country, but still compared to the total, you know, cost TCO of of of compute, uh, it's relatively, you know, minor. Uh, numbers are still very big.</p>
</details>

**Eiso Kant:** 我之所以提到这一点，是因为随着时间的推移会发生什么？就像资本主义世界里一直发生的那样，所有环节的利润都会被压缩。能源的利润已经被压缩了，我们已经在努力让能源尽可能便宜。数据中心在过去二三十年里也日益商品化。而 GPU 算力今天仍然是一个高利润业务，但随着时间推移，我们也会看到类似的利润压缩。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the reason I I mentioned is that what is going to happen over time right like what's always happened in capitalism is that margins compress everywhere now margins have already compressed for energy we already you know try to make energy as cheaply as possible in the world data centers effectively have already been increasingly more commoditized over the last 20 30 years GPU compute today is still very high margin business and and over time we'll find a similar level of compression</p>
</details>

**Eiso Kant:** 随着芯片利润被压缩，技术栈的其他部分也变得更加重要。当你端到端地拥有并建设所有这一切时，之前存在于各个环节之间的利润就都消失了。这包括你为土地支付的成本、能源成本、建筑成本、数据中心成本等等，所有这些层次加起来是一笔巨大的数目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and as the chips become more compressed the other parts of the stack are more important as well. And when you end to end own all of this and build all of this, everywhere where previously margin sat in between, you know, falls away. If that's the person who you were paying for, you know, the cost of land, if you're talking about the cost of like the energy, the cost of the building, the data center, kind of all the layers in the stack. This adds up to a very large amount.</p>
</details>

**Eiso Kant:** 基础模型本身有构建它的**资本支出**（Capex, Capital Expenditure: 指企业为购买或升级固定资产而进行的投资），也就是你的研发成本，你会随着时间摊销。但实体基础设施才是你成本的大头。我知道我一下子讲得非常详细，但我认为这有助于人们理解现状。所以，当你剔除所有这些利润后，你突然发现你可以比别人便宜 20%、30%、40% 的价格提供你的词元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because the foundation model itself is, you know, it has capex for building it. that's your R&D cost and you you know you advertise it over time. Uh but the physical infrastructure is really frankly where the majority of your cost sits and so I know I went super detailed straight away but I think it's useful for people to kind of get this sense of where it is. So when you take all those margins out all of a sudden you can start seeing that you can serve your tokens 20 30 40% cheaper than someone else.</p>
</details>

**Eiso Kant:** 这将变得至关重要，因为我们正在从人类劳动创造经济产出，转向基于算力的智能与人类劳动相结合。而我们在世界上才刚刚开始这个进程。我们将进入一个世界，其中这种商品（智能）的规模将远超我们所见的云计算。控制成本将产生巨大影响。但成本只是答案的一部分。你还必须能够扩展它。你必须能够说，如果我下个季度需要更多算力，我能让它上线吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is going to matter because it's we're shifting from, you know, human labor that leads to economic output to intelligence on compute combined with human labor. And we've barely started this in the world. And so we're going to be in a world where this is a commodity that will look far larger than we've seen cloud compute be. Frankly, is often the largest bills of companies, right? What they're what they're paying in that world. Yeah. Controlling that cost is a big impact. But cost is really only part of the answer here. You have to be able to scale it. You have to be able to say if I next quarter need more compute, can I bring it online?</p>
</details>

**Eiso Kant:** 因为芯片并不短缺。我昨天刚看到 Satya（微软 CEO）在一个播客里的片段，他说：“看，我的瓶颈是能源和数据中心，而不是芯片。” 这是事实。英伟达在向市场供应芯片方面做得非常出色，还有台积电和整个产业链，它们可以扩展到巨大的规模。但是物理空间、电力上线和建设数据中心——这才是我们这些科技界人士开始意识到现实世界冲击的时候。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because there's no shortage of chips. There's just a clip yesterday from Satcha uh on a podcast that I saw where he said, "Look, it's it's energy and and data centers that are my bottleneck. It's not chips." And it's true, right? Nvidia does an incredible job at supplying the market with chips. and and TSMC and everything in the stack and scale up to to huge levels but physical space bringing power online and building data centers well that's when we kind of in tech all of us start realizing the real world hits us</p>
</details>

### 创新的数据中心建设模式：增量交付的混合模块化方案

**Matt Turck:** 听起来很棒。能详细解释一下吗？我想业界已经看到了 xAI 的数据中心以创纪录的速度建成，这为所有人重新设定了标准。你们是如何着手建设数据中心的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That sounds great. Unpack that. So I think the industry has seen the XAI data center being built in record speed which I think has reset the bar for for everyone. How do you guys go about building that data center?</p>
</details>

**Eiso Kant:** 如果你观察数据中心的建设，一直有一种传统的方式，也有一种不能算新，但已经存在了十多年的方式。一端是所谓的“现场建造”（stick-built），所有工作都在现场完成。所有材料被运到那里，成千上万的工匠在现场组装数据中心。另一端则是像西方的 Vertiv 或中国的 Day One 及其母公司那样，走向完全模块化。你可以想象你的数据中心单元是从工厂里直接运出来的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you think about data centers, there's kind of been a traditional way of building them and I wouldn't say new way because it's been around for for over a decade. But on one end you have kind of stickuilt buildings. Everything is done on site, right? So all the materials are brought there. Thousands of tradesmen who who are assembling the data center and on the other hand of kind of like Verdive here in uh in the west or players like Day One and their parent company out of China who've gone full modular. to think of like your your data center units are rolling out of a factory.</p>
</details>

**Eiso Kant:** 有趣的是，这两种方法都有其局限性。当你把成千上万的人带到现场，特别是在西德克萨斯州实际上是二叠纪盆地（Permian Basin）的沙漠地带，组装所有东西，这会带来挑战，包括调动劳动力、天气、灰尘、物流和供应链。但工厂化生产在西方还没有达到可以让你在几年内交付数千兆瓦算力的规模，我认为这在中国是不同的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what was interesting in in that both of those approaches uh have their limitations, right? The moment you're bringing thousands of people to site uh and you're assembling everything and and especially in what is effectively the Peran basin, the desert, right, in in West Texas comes with its challenges both on mobilizing workforces, but also the weather, the dust, uh the logistics, the supply chain. But then the factory side has not yet scaled up at a level in the west. I would say this is different in China uh where you can actually you know bring out gigawatts like over the course of you know like couple of years</p>
</details>

**Eiso Kant:** 所以我们决定取一个中间方案。我们采取了一种方法，即实际的建筑本身是现场建造的——你可以把它想象成一个带有分支的极长走廊——但我们采用模块化方法，而且是那种可以装在平板卡车后面的模块。我们思考如何为电力、机械与冷却、以及计算这三个数据中心内部元素，制造出 2.5 兆瓦的计算级滑轨模块。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh and so we we kind of decided to meet in the middle uh and took an approach where we said we're building the actual building stick built so that's being built on site uh think of it as an extremely long corridor uh with leaves attached to it but let's take a modular approach but one that fits on the back of a flatbed truck. So how do we kind of do 2 and a half megawatt computeworthy skids for think of this for electrical for mechanical and cooling and for compute. Those are kind of the three elements that sit inside a a data center</p>
</details>

**Eiso Kant:** 我们与美国的制造伙伴合作。当你开始分解问题时，你会发现电气模块化组件可以由许多优秀的制造商完成。这并不独特。而当你涉及到冷却和机械部分时，公司数量会少一些，但同样，他们已经做了很长时间，声誉卓著，你可以与他们合作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and do it with manufacturing partners here in the United States. And what you start finding here is and once you start breaking the problem down you realize that the electrical modular components can be done by lots of great manufacturers. This is not unique. This is so you actually have great players including very large ones uh that can help you there. when you can kind of get to the cooling and mechanical part. uh it's a smaller number of companies but again have been doing this for a long time highly reputable uh and you can work with</p>
</details>

**Eiso Kant:** 而在计算方面，最近有了一个突破。因为在计算与冷却混合的方面，你现在会发现我们有了**芯片级直接液体冷却**（direct liquid to chip cooling），设计正在改变，你可以在一个更受控的方式下做更多的事情。所以我们决定，宁愿在每个我们构建的独立“房间”上增加一点冗余，这样我们就可以完全增量地将它们上线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then when it gets to compute side there's recently been an unlock uh because on the compute mixed with cooling side what you're finding is that now we have you know direct liquid to chip cooling the designs are changing there's a lot more that you can do in a far more contained manner and so we decided we said we'd rather have a little bit more redundancy on every individual kind of room that we build so that we can bring them incrementally completely online.</p>
</details>

**Eiso Kant:** 目前为 AI 工厂建造的大多数数据中心，你会看到它们以 40 兆瓦的块状规模上线。我们想，如果能设计成一种方式，让你在施工的同时就能让 2.5 兆瓦的算力上线呢？你可以想象，就像在这个走廊上，你不断地增加大约一千个 GPU 的单元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So where most of the data center is being built for AI factories today, you'll see them bringing them online at kind of 40 megawatt chunks. We said what if you designed it in a way where you could bring 2.5 megawatts of compute online, you know, as you're doing construction. Think of it again on this hallway as you're bringing on like units of kind of a thousand GPUs or depending on the GPU type can be less in the future.</p>
</details>

**Eiso Kant:** 我们称之为“增量交付的混合模块化数据中心”的组合，它集两家之长。它极大地降低了交付风险和算力上线风险。这也意味着，如果下个月你突然需要更多算力，你可以以 2.5 兆瓦为单位做决策。另一方面，对于像建筑这样的大型施工，你采用传统方法；而在制造方面，你可以与多家制造商合作，并且在地理上也很有优势。我们带到现场的大部分东西实际上是在德克萨斯州或其附近制造的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh you're bringing this online and the combination of those things that we refer to as as incrementally delivered hybrid modular data centers is kind of bringing the best of both worlds. It usually derisks your ability to deliver. Uh it drisks your ability to bring compute online. It also means that if all of a sudden next month you need more compute, you can make decisions on 2 and a half megawatts like I just want a little bit more. On the other hand, you're taking advantage of the fact that for the kind of bigger construction, the building and stuff, you take the traditional approach and on the manufacturing side, you can partner with multiple manufacturers and you can do so actually very geographically advantageous as well. Most of the things that we are bringing to our site are actually manufactured in Texas or very nearby.</p>
</details>

**Eiso Kant:** 这样一来，你也降低了供应链风险和运输到现场的时间风险。但所有这一切最大的优势不仅仅是速度，还有你能调动的劳动力。因为我们处在一个相当偏远的地区，而这个偏远地区提供了所有这些优势：几乎无限的土地，所以我们可以单层水平建造；以及令人难以置信的能源来源。但偏远也意味着调动劳动力更具挑战性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so now you're actually reducing as well like your supply chain risk and your time like to sight risk. The biggest advantage though of all of this is not just speed, but it's also your workforce that you can mobilize because we're in a quite remote area and that remote area offers all of these advantages, right? Like pretty much infinite land so we can, you know, build a single level horizontally uh an incredible amount of source of energy, but also being remote meaning that mobilizing workforces there is more challenging.</p>
</details>

**Eiso Kant:** 所以突然之间，当我们建设 250 兆瓦的设施时，我们现场的劳动力不到 450 人，都是我们带过去并安置在那里的高技能工匠和建筑工人。而在传统模式下，你可能需要 2000 多人来建造完全相同的东西。所以，这一切都是为了降低风险和提高速度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So all of a sudden, you know, when we're building 250 megawws, we're doing it with a less than 450 person on-site workforce with very skilled tradesmen and and and and construction workers that were bringing over there and we're housing over there versus a world where you might need traditionally 2,000 plus people to build the exact same thing. So it's all about de-risking and speed.</p>
</details>

### 超越经典RL：迈向“学会学习的强化学习”

**Matt Turck:** 非常有趣，这与强化学习的世界截然不同。但既然我们聊到这了，就让我们转到强化学习吧。自从我们几年前聊过之后，你提到世界已经变了。过去几年，大家都很关注预训练，但感觉到了 2025 年，预训练和强化学习的结合已经成为了很多人都在做的最先进技术。请给我们讲讲你们的方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Fascinating and very different from the world of RL. But let's precisely um switch to RL now since we chatted a couple of years ago. You mentioned that the world has changed and um everybody was very pre-training focused uh for the last few years and sort of feels like in 2025 the combination of pre-training and RL now has become sort of like the the both the state-of-the-art in what what a lot of people do. Walk us through your approach.</p>
</details>

**Eiso Kant:** 两年前我们做这个播客时，我们谈到了我们从代码执行反馈中进行强化学习的方法。当时我们有数万个这样的环境，模型会进入其中，被赋予合成任务，探索解决方案，然后根据成功的解决方案获得奖励。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when we did this podcast two years ago, you know, we spoke about our approach of of reinforcement learning from code execution feedback. Yes. I think at the time I called out we had tens of thousands of these environments where the models would go in they would be given synthetic tasks explore solutions and then we rewarded on the solutions that</p>
</details>

**Eiso Kant:** 随着时间的推移，这在两个轴向上都增长了很多。首先，现在我们有超过一百万个这样的环境，以及数千万次的修订，总数达到了三千万的级别。在过去两年里增长了两个数量级。这是因为当你增加模型需要学习的问题类型的多样性时，你就能提升模型的能力。第二个轴向是，模型的推理能力和长周期规划执行能力变得如此强大，以至于强化学习从“单次尝试”的强化学习转向了“代理式”强化学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh over time that has grown a lot across two axis. One is right now we have over a million of those environments uh and tens of millions of revisions putting us in like the 30 million range. So just yeah two orders of magnitude larger over the last 2 years and that's because as you increase the diversity of the type of problems that the models need to learn in you can increase the capabilities of the models. The second axis is that the models got so capable in their reasoning and longer time horizon capabilities multi-step like complex planning and execution that RL moved from kind of singleshot reinforcement learning to agentic RL.</p>
</details>

**Eiso Kant:** 这意味着现在我们给出一个更高级别的任务，派出一个代理，这个代理会通过使用它的工具——编辑代码、执行命令、更新包，做软件开发人员会做的一切——来尝试解决问题。然后它在过程中也会得到奖励。我们看到，我们正进入一个世界，模型的推理能力和长期规划执行能力变得如此强大，以至于我们给它们的任务不再是教科书末尾的简单问题，而是像你在学校里被要求做的项目，需要更多步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So meaning that now we give a much higher level task. We send in an agent that agent goes and you know tries to solve for the problem by using its tools. So editing code, executing commands, updating packages, like doing everything that a software developer would do. And when you see it, you know, you see it today in coding agents, it looks even quite natural to how we do things, right? Increasingly more like how we do it. And then it gets rewarded along the way as well. So what we're seeing is that we're entering a world where the reasoning capabilities of models and their longerterm horizon planning and execution is now getting so capable that the tasks we provide them are no longer simple tasks like the questions at the end of a a textbook but now it's like the projects that you you know you're made to do in school uh where you have to do a lot more steps</p>
</details>

**Eiso Kant:** 如今，我们再次发现自己对未来持有了一个反向观点。这并不是刻意要与众不同，只是因为我们思考这个问题已经很长时间了。我们的观点现在是，世界正在走向一个我们可能不完全认同的方向。你现在听到很多关于用人类专家制定的评分标准来扩展环境的说法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">where we have again found ourselves in a point where we now have again a contrarian opinion on the future. Uh and it's really not by by trying to be contrarian. It's just that we I think have had a pretty had a couple of you know a long time thinking about this. Right. I started thinking about this first in 2016 when I was building source and did the first RL with with LSTMs with language models and now the last two and a half years with with these larger LLMs and our view now has become that the world is going in a direction again that we actually might not fully agree with on so what you're hearing a lot about at the moment is the scaling up of environments with human expert rubrics.</p>
</details>

**Eiso Kant:** 这不仅仅局限于编码领域，我们现在进入了像如何操作电子表格，或者作为化学家或市场营销专业人士如何完成复杂任务的领域。在这些领域，你使用专家创建的评分标准，作为模型判断答案的一部分。这种方法非常有效，顺便说一句，我们也在用。它能非常有效地提升模型在单一任务上的单一能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's not just going into coding where we've got verified rewards. Now we're entering into areas if that's you know how to operate on a spreadsheet or if that's how to do a complicated task as a as a chemist or you know marketing uh professional where you use kind of a rubric created by an expert uh to make it part of what a model can use to judge the answers and it's highly effective uh and by the way we do it as well. It is a highly effective way to to get models singular capabilities on singular tasks uh to push it up.</p>
</details>

**Eiso Kant:** 但那种认为这能将我们扩展到 AGI 的说法，我们并不同意。我们认为，在通往 AGI 的尴尬“青春期”阶段，这是正确的做法。因为它能让你为客户创造真正有经济价值的成果。但我们不认为通过创建环境和专家来单一地收集技能，能够扩展到通用人工智能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the narrative that that's going to scale us to AGI, yeah, we don't agree with. We think this is the right thing to do in the awkward teenage years ahead of AGI. It's because it allows you to create really economically valuable outcomes for your customers. But the singularly collecting of skills this way by creating environments and experts, we don't think will scale to artificial general intelligence.</p>
</details>

**Eiso Kant:** 我们的观点是，强化学习将会经历一个类似我们在语言建模中看到的时刻。语言建模的美妙之处在于，通过预测网络上的下一个词元，你拥有了一个通用的自监督目标。你只需将整个互联网扔给它，它就能迫使模型学习。但那之所以没能让我们达到 AGI，是因为互联网从未真正包含创造它的思想和行动的数据集。它只有最终的代码，最终的文章，却没有导致它的思考和行动过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our view is that reinforcement learning will have a moment similar like we've seen in language modeling. So, what makes language modeling so beautiful? It's the fact that by predicting the next token on the web, you have this general self-supervised objective, right? You just can throw the entire internet at it and of course continue to filter it into more quality and improve it with synthetic, all the things we spoke about last time, but it forces the model to learn. But the reason that never got us to AGI is because well, the internet never actually included the data set of the thoughts and actions that created it. It's the final piece of code. It's the final article you write uh but not the thoughts that you had and actions that led to it.</p>
</details>

**Matt Turck:** 没有试错的过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Not the trial and error.</p>
</details>

**Eiso Kant:** 完全正确。所以我们的观点是，存在一个通用的强化学习目标，它不需要人类裁判、环境、奖励模型或任何外部的东西，而是可以像我们看到的下一个词元预测那样，在语言上进行泛化。一种思考方式是，传统上我们拿来网络数据，用合成技术重新组织它、改进它，我们是向前生成。但如果你能向后生成呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly. Uh and so our view is that there is an generalized objective for reinforcement learning that doesn't require you know human judges or environments or reward models or anything external but can generalize over language. Uh the same way that we have seen you know next token prediction generalize. A way of thinking about it is if you have traditionally we've taken the web and we've used synthetic techniques to reformulate it to improve it. We've moved forward like we taken the web and generated forward. What if you could generate backwards?</p>
</details>

**Eiso Kant:** 我的意思是，如果你能逆向工程或解压缩网络，还原出创造它的思想和行动呢？是否存在这样一个通用的强化学习目标？这是我们过去一年半里大量研究的方向，我们现在已经开始看到很多迹象表明这是可能的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what I mean by that is what if you could reverse engineer the web or decompress the web into the thoughts and actions that created it. Is there such a general objective for RL that can be found? This is where we've done a lot of our research in the last year and a half and we have now started seeing a lot of promise towards that being possible.</p>
</details>

**Matt Turck:** 这种方法有名字吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Does it have a name as an approach or</p>
</details>

**Eiso Kant:** 有的。我们称之为“学会学习的强化学习”（Reinforcement Learning to Learn），简称 RL to L。这可能是我第一次公开说这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So we call it reinforcement learning to learn RL. This is the first time I'm probably publicly saying this.</p>
</details>

**Eiso Kant:** 我们认为，你想让模型在训练的尽可能早期就学会如何思考和推理。然后，你再让它在环境中学习，以磨练它的技能。这和我们人类很像，对吧？我们从大学毕业时学到了很多，但随后我们被投入工作，通过实际操作和经验来学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we don't think they're mutually exclusive right we think that you want to have a model learn how to think and reason as early as possible in its training and then you want to actually have it learn in the environments to sharpen its skill sets, right? And it's not unlike us, right? Like it's we'll have learned a lot coming out of university, but then we're put in the job and we're actually doing it and we're learning from experiences.</p>
</details>

**Eiso Kant:** 我们的观点是，预训练和预测网络上的下一个词元，是理解语言和帮助我们达到一定智能水平的绝佳启动方式。“学会学习的强化学习”（RL to L），我们内部也称之为“邦迪技术”（Bondi techniques），我们认为这将把模型推向一个推理和思考的水平，而且这会比今天发生得早得多。然后，你有从代码执行反馈和其他验证环境中进行的强化学习，这有助于在模拟环境中真正磨练这些技能。最后，第四个训练阶段将日益变成从这些代理的真实世界经验中进行持续学习。这就是我们认为训练将经历的四个阶段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So our view is is that you know we pre-training and predicting the next token on the web is an incredible bootstrap of of understanding language and and helping us get you know to a level of intelligence. Reinforcement learning to learn RL internally also refer to as the Bondi techniques. It's kind of our our our code name for it. We think will push models to a level of reasoning and thought that will happen far earlier in their training than it does today. And then you have reinforcement learning from code execution feedback and and from other verified environments that help learn really what is you know to sharpen those skill sets in simulated environments. And then the fourth stage of training over time increasingly will become learning continuous learning from real world experiences of these agents. And so those are kind of the four stages that we think training will go to.</p>
</details>

### 智能的多维度与代理的未来

**Matt Turck:** 你刚才提到了一个有趣的观点，即模型和代理或多或少是同一回事。几天前，有人说代理还需要十年才能实现。那么，你对我们目前在代理方面所处的位置有何看法？它与 AGI 有何关系？以及，在不成为一家基础模型公司的情况下，是否有机会构建代理？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You just mentioned something interesting about the model and the agent being more or less the same thing. So to to weave that question into the you know current sort of debate topics a few days ago said that agents were 10 years away. So what is your take on where we are with agents as it relates to AGI and um is there an opportunity to build agents without being a foundation model company?</p>
</details>

**Eiso Kant:** 我还没听 Karpathy 的那次访谈，但我非常想听，因为我进入这个领域就是因为他。2015 年，Andrej Karpathy 写了一篇名为《循环神经网络的不可思议的有效性》的博客文章，是关于语言模型的。那篇博客文章让我创办了我的公司 Sourced，并让我对语言模型能做什么痴迷了十年。所以我非常尊重他的观点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I haven't yet listened to the kopathy interview and I really want to because I don't think you noticed but I got into the space because of karapathy. So in 2015, Andreopathy wrote an article called the unreasonable effectiveness of recurrent neural networks, a blog post about language models. And that singular blog post let me start my company sourced and got me down this obsession for now a decade of like what you know language models and and can do. And so I have an immense amount of respect for for his opinion.</p>
</details>

**Eiso Kant:** 虽然我还没听过那次访谈，无法具体评论他说了什么。但我能说的是：今天我们对代理的定义是什么？它是一个在环境中循环运行、可以访问一系列工具的模型。我们是如何训练代理的呢？作为基础模型公司，代理的能力训练就是我们将代理（即运行这个循环并能访问工具的代码）与模型一起训练。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so while I haven't listened yet to the interview, I can't comment specifically on on what he said. But what I can say is this, right? What is today the definition that we use of an agent? It's a model running in a loop inside an environment with access to a set of tools, right? And it's and it's doing longer trajectory work. And how are we training agents, right? Agent capabilities as foundation model companies is that we take that agent, right, the binary, the piece of code that that runs this in a loop and has access to could be a container or could be access to a bunch of tools and we train it together with the model.</p>
</details>

**Eiso Kant:** 这就是为什么你看到最强大的编码代理，都出自那些将代理与模型一起训练的人。顺便说一句，这在很多领域可能都适用。但是，当你已经有一个模型，它拥有完成代理任务所需的所有智能和能力时，那么代理的差异化在哪里呢？差异化在于，构建它的人需要能接触到某种形式的专有数据、专有环境，或者某种能让模型运行的那个循环比竞争对手更有优势的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so this is why you see the most capable coding agents, right, really coming out of people who are training with the models because and this by the way will likely hold true for lots of domains. But when you already have a model that has all of the a intelligence and all of the capabilities to do an agentic task, right? So it doesn't require more intelligence. It doesn't need to be pushed further in like reinforcement learning. Well, then the question, what's the differentiation in the agent? Well, differentiation in the agent is whoever is building it needs to have access to some form of proprietary data, some form of proprietary environment, something that allows that, you know, that loop that the model is running in to to be, you know, more advantageous than another competitor.</p>
</details>

**Eiso Kant:** 我要谨慎的是，如果你决定创办一家公司来构建一个编码代理，但你无法改进模型，也就是代理无法与模型一起训练，而像我们这样的基础模型公司又在深度专注于这样做，那么你就没有那种优势。你所玩的猫鼠游戏会变得困难得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what I am careful about and we see this in coding, right? Maybe we see this ourselves is if you decide to start a company to build a coding agent where you are not able to improve the model, right? The agent is not able to train together with the model and foundation model companies like like ourselves are deeply focused on doing so. You you don't have that edge and so the cat-and- mouse game that you're playing becomes a lot more difficult.</p>
</details>

**Eiso Kant:** 我们在 Poolside 有一句话，那就是“随着时间的推移，一切都会坍缩到模型中”。我认为我们正越来越多地看到这一点。两年前存在的框架、代理或产品，今天要么消失了，要么有时是它们的用户界面坍缩了。所以，你必须问自己一个问题：你处在什么位置？你拥有的不公平优势是什么？如果一家基础模型公司决定专注于这个领域，你的优势还能持续吗？还是会因为他们能将模型和代理结合训练得更强大而消失？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we have a phrase at poolside which is over time everything collapses into the models. And I think increasingly that's what we're seeing. Frameworks or agents or products that were 2 years ago you know around today are have you know either gone or they've sometimes their UIs have collapsed right? And so I think you have to ask yourself the question like where do you sit like what's your unfair advantage that you have and if a foundation model company decides to focus on it will that advantage you know still sustain or or will it fall away because they're able to train the models to be further and and more capable in combination with their agent and yours.</p>
</details>

### AI进展是否停滞？芯片代际与新扩展轴的答案

**Matt Turck:** 那么，你会对那些认为 AI 进展实际上正在趋于平稳的人说些什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what do you tell people that argue that AI progress is actually plateauing?</p>
</details>

**Eiso Kant:** 坦率地说，是同样的话。自从创办 Poolside 两年半以来，我一直被问到这个问题。这已经不是第一个问我“我们是否撞墙了”的播客了。我认为，我们正处在一个点，随着每一代新芯片的出现，我们都有能力让模型变得更大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The frankly the same thing. I've I've had this question for two and a half years now since starting poolside. This is not the first podcast where you know there was a are we hitting a wall? We are I think at a point where we are continuing to see with every new generation of chips an ability to make the model larger.</p>
</details>

**Eiso Kant:** 重要的是，这与每一代新芯片相关联，因为你不能无限地砸钱来扩大规模，那是一种错误的叙事。由于网络和芯片浮点运算能力的限制，我不能线性地增加更多 GPU 来训练一个越来越大的模型。如果我这么做，所需的时间会呈指数级增长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh and it's important that this links to every new generation of chips because it is not a world where you can throw infinite dollars at scaling. It's that's a false narrative and you can think of it very easily yourself because if I take the size of a a model uh which is still effectively the biggest determinant of how much compute it takes to train it because of the limitations on the networking and because of the limitations on the flops on those chips. It is not that I can linearly add more GPUs and train increasingly a more larger model. If I do so the time it takes becomes exponentially longer.</p>
</details>

**Eiso Kant:** 但每两年，现在芯片周期甚至更短，我们就会有令人难以置信的新芯片和新网络堆栈出现，这突然之间让下一代规模的模型成为可能。一方面，随着新一代芯片的问世，我们就像有了免费的午餐，可以构建和训练更大的模型，而且事实继续证明这能提升模型的能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But every 2 years and now the chip cycle is even getting less. We have an incredible new chip and an incredible new networking stack that is improving that all of a sudden makes the next generation of size model possible. Now I don't think this will scale infinitely. So on one hand we have a a free lunch like as as new generations of chips come out we can build and train larger models uh and it as continues to show that it improves the model capabilities</p>
</details>

**Eiso Kant:** 另一方面，我认为更有趣的是，随着我们进入扩展强化学习的时代，我们能够用更多的数据、更长的时间来训练模型。我们每年在使用数据方面也变得效率高出数倍，从而能用更少的计算预算让模型变得更强大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">on the other hand and I think far more interesting as we're now getting into the world of scaling reinforcement learning we're able to train models for longer duration with more data right because I want to have this the size axis and the other thing we have to duration axis how much data we're showing the model and every single year. We've also become multiples more efficient with the data we had to make models become more capable in a lesser compute budget.</p>
</details>

**Eiso Kant:** 我认为重要的是要理解，你不能无限地砸钱来提升智能。它在某种程度上受限于每一代芯片的物理特性。随着强化学习日益成为一个扩展维度，我们能够在这些芯片代际内更多地改进模型。但我们还没有找到一个通用的、可以无限扩展、无限砸钱的强化学习方法。所以，无论是在增加模型大小还是增加来自强化学习的数据方面，都仍然存在限制。如果这些限制不存在，Poolside 就不可能追赶上来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's important to understand that it is not an infinite dollar you can just keep throwing intelligence. It's kind of bounded by physics of every chip generation. As reinforcement learning is becoming increasingly more scaling axis, we are able to improve models within those generations far more. But we have not yet found a generalized infinitely scalable, you know, dollars we can throw at reinforcement learning either. And so both on increasing model size and on increasing data from RL, there's still limitations. And if those limitations didn't exist, Pulside wouldn't have been able to catch up, right?</p>
</details>

### 市场策略：从国防工业到全球企业

**Matt Turck:** 你们的商业模式是怎样的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's the current status of those products and what do what do they do product models?</p>
</details>

**Eiso Kant:** 我们的观点其实很简单：当我们能在一个非常有价值的维度上明显做到最好时，我们才会公开发布模型。这不仅仅是为了在推特上炒作几周，你需要带来一些可以扩展且对世界有价值的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So our view has been quite simple actually is that we will make models publicly available when we are clearly best on on a very valuable axis right and I think that's that's important it's not just about having a hype on Twitter for a couple of weeks and and having something out you need to bring something in that can scale and that is valuable to the world</p>
</details>

**Eiso Kant:** 在我们达到前沿水平之前，我们选择了一个别人无法进入的市场，那就是国防工业基地和政府。因为我们愿意做的一件事是，将我们整个模型权重和完整的技术栈，包括代理，部署到客户需要的任何地方。所以我们今天可以在进入**安全隔离信息设施**（Skiff, Sensitive Compartmented Information Facility: 指用于处理高度敏感信息的、物理和技术上都与外界隔离的政府安全区域）的工作站上运行，可以在本地服务器甚至物理隔离（air-gapped）的环境中运行，也可以在商业云（如 AWS 的私有虚拟云 VPC）或政府机密云中运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so before and this gets to your commercial part of the question we weren't at the frontier and now we've are getting increasingly closer and closer and uh and that's al also opened up our market. So before we were at the frontier, we picked a market where no one else could go, which was the defense industrial base and government because one of the things that we're willing to do uh kind of from the enterprise DNA we have is take our entire model weights and the full stack all the way with the agents anywhere the customer needs it to be. So we today operate on workstations that go into skiffs. We operate on servers that are you know onrem or even as far as airgapped. We operate in commercial cloud like AWS in private VPC environments. Uh we also oper in more commercial just cloud regular environments and then on GVC cloud top secret cloud kind of the places where the the weights have to travel to the customer.</p>
</details>

**Eiso Kant:** 我们之所以这样做，不仅是因为模型本身，更是因为我们知道，随着世界朝着代理在企业中完成越来越多工作的方向发展，围绕模型构建一切将变得至关重要。所以今天我们可以罗列出一长串我们随时间构建的企业级功能，以确保这些代理和模型可以在复杂、受监管的环境中运行。我们在国防工业中对这些功能进行了实战检验，因为它们是极其庞大、高度复杂和受监管的组织。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we did this because it wasn't just about the model is because we knew that as the world was moving towards agents doing increasingly more work in the enterprise it was going to become incredibly important to build out everything around the model. So today we can rattle off you know a very long list of enterprise features that we've built over time so that these agents and models can actually operate in complex regulated environments. And we battle tested that in the defense industry because they're extremely large organizations they're highly complex they're highly regulated and they often need segregated deployments for different missions that that they're on</p>
</details>

**Eiso Kant:** 现在，随着模型发展到我们认为可以参与竞争的水平，我们正在向更广泛的企业市场拓展。所以你会看到我们越来越多地出现在金融服务、工业、科技公司等大型企业中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so we've been scaling that up in that industry. Now, as the models have gotten to a point where we say, "Okay, now we feel that we can compete, we're going to wider enterprise." And so, you'll see us increasingly more showing up in kind of the large enterprise names amongst financial services, industrials, like technology companies.</p>
</details>

**Eiso Kant:** 我们发现，很多企业都有极高价值的问题可以用今天的 AI 解决，但他们并没有成功做到。这很大程度上是因为项目意图与实际执行之间的差距。这里，我们开始建立一个非常强大的前线部署（forward deployed）模式。在 Poolside，我们有一些前 Palantir 的员工，他们带来了那种寻找高价值问题并以高度能动性帮助客户解决问题的 DNA。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we found something over and over again, which was that a lot of these enterprises and organizations, they have incredibly high valuable problems that can be solved with AI today. Hell, in many cases with AI capabilities of 2 years ago or a year ago, but they're not successfully doing so. Uh and a lot of that has to do with the gap between what the intent of the project is versus being able to bring it all together, the right data sources, the right context engineering, often additional reinforcement learning that's needed. And here we started building up a very strong forward deployed motion. At Poolside, we have former Palunteerians and who came over and and really kind of instilled some of that DNA, the DNA of what it means to find a high value problem and come in with high agency and help a customer solve that.</p>
</details>

**Matt Turck:** 你们甚至称他们为 FDR，前线部署研究工程师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You even have like FD R you call them FDR. FD is for chumps like you forward deployed research engineers.</p>
</details>

**Eiso Kant:** 是的。我们发现，传统的前线部署工程技能与研究工程技能之间存在差距。后者需要的是那些不仅能解决高价值问题，还能很好地与模型和代理协同工作，并在必要时进行额外强化学习的人。所以我们把这些能力极强的研究工程师派驻到我们的客户那里。这就是为什么我们下周将在英国开设一个办公室，我们也将在这里纽约开设办公室，真正扩大这种前线部署研究工程的模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And and look what we found is that there's a there is a gap between the skill set of doing traditional forward deployed engineering right where you're focused on uh a high value problem and using kind of piping data sources together and and and building you know interfaces on top which is by the way incredible thing. I have a lot of respect for everyone who has done this. The research engineering side is interesting because what you're looking for is the people in that who also have the experience and the natural tendency to work very well with models and with agents and can who work on additional reinforcement learning if it's necessary. And so we're taking these highly capable research engineers and we're putting them inside our customers. And that's for us something you're going to see us scale up increasingly more. It's why we've uh going to be opening an office in the UK actually next week. Uh we're going to be opening an office here in New York and and really kind of scaling up that motion of forward deployed research engineering.</p>
</details>

### 未来展望：迈向前沿模型与全球化布局

**Matt Turck:** 展望未来 12 到 18 个月，Poolside 会发生什么？我们可以期待什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, zooming out the next 12 to 18 months, what happens at Poolside? What can we expect?</p>
</details>

**Eiso Kant:** 模型将达到前沿水平，我们现在看到一条通往这个目标的直线路径。你会看到实体基础设施的规模化，既能支持训练更大、更强的模型，也能将它们服务于世界。你会看到我们的前线部署研究工程师出现在全球越来越多的企业中。你会看到我们继续朝着使命努力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Models reach the frontier that that's uh that's right now I think we see a straight line towards this. Uh you'll see the the scaling up of physical infrastructure to both empower training even more larger and capable models but also serving them to the world. uh you'll see us uh have forward deployed research engineers and increasingly larger number of enterprises uh globally you'll see us just continue to work towards the mission right</p>
</details>

**Eiso Kant:** 对我们来说，我们从不想忘记我们建立这家公司和与之相关的经济引擎的初衷，因为我们认为，在此之后的世界将是一个可以创造大量富足的世界。富足来自于即将发生的科学进步，也来自于这样一个事实：商品和服务的成本最终取决于创造它们的成本。当我们把智能转移到算力上时，我们就能找到降低成本的方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean for for us we never want to lose sight of the fact that we are building this company and and and the economic engine associated with it because we think that the world that lives after this is one where a lot of abundance can be created abundance through scientific progress that's going to happen but also abundance through the fact that costing of goods and services ultimately are dependent on the cost of what it takes to create them. And as we shift intelligence to compute, we can find ourselves in a a world where we can drive that cost down.</p>
</details>

**Eiso Kant:** 如果你回顾过去 100 年，我想我们没有人会愿意生活在除了今天以外的任何时刻。所以，这始终是核心使命。你会看到更多这方面的内容。期待可能在 12 个月后再次来到这里，告诉你发生了什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you look back at the last 100 years, there's no moment that I think any of us rather live than today, right? And so that's it core mission. It always has been. And you'll you'll see more of that. Uh and uh yeah, looking forward to probably being here in 12 months to to tell you about what happened.</p>
</details>

**Matt Turck:** 期待你的再次到来。Eiso，很高兴能再次交流。祝贺你们在过去几年里取得的一切成就。很期待看到数据中心和新模型。感谢你花时间和我们在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Looking forward to it. Uh ISO great to catch up. Thank you so much. Congrats on everything uh that you guys have accomplished in the last couple of years. Excited to see the data center and like the new models. And thank you for spending time with us.</p>
</details>

**Eiso Kant:** 非常感谢。谢谢你，Matt。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Appreciate it. Thank you, Matt.</p>
</details>