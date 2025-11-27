---
author: The MAD Podcast with Matt Turck
date: '2025-11-06'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=6lmuo8RD-Rs
speaker: The MAD Podcast with Matt Turck
tags:
  - intelligence-as-a-commodity
  - physical-infrastructure
  - reinforcement-learning
  - scaling-laws
  - agentic-ai
title: Poolside 创始人 Eiso Kant：智能将成大宗商品，能源与算力决定 AGI 竞赛终局
summary: Poolside 联合创始人 Eiso Kant 深入探讨了 AGI 竞赛的未来。他认为，随着模型智能本身逐渐商品化，真正的护城河将是能源和算力。为此，Poolside 正在建设名为“地平线项目”的千兆瓦级数据中心，以掌控物理基础设施。Kant 还首次公开了公司在强化学习领域的最新研究方向——“学会学习的强化学习” (RL to L)，旨在通过逆向工程网络内容，找到一种通用的自监督学习目标，从而超越传统 RL 的局限，推动模型实现更深层次的推理能力。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
people:
  - Eiso Kant
  - Matt Turck
  - Andrej Karpathy
  - Satya Nadella
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
  - Google
  - Red Panda
  - Palantir
products_models:
  - GPT-4
  - GB200
  - GB300
  - Malibu
  - Laguna
media_books:
  - The MAD Podcast
status: evergreen
---
### 始于对强化学习的异见
我们创立公司的初衷源于我们对研究的独到见解。回溯到 2023 年初，当时 GPT-4 刚刚发布，全球的主流叙事是，只要扩大语言模型的规模、进行更多的“下一个词元预测”、增加参数数量和数据量，我们就能实现 **AGI**（Artificial General Intelligence，通用人工智能：一种理论上能理解或学习人类所能完成的任何智力任务的 AI）。我们认同规模的重要性，至今依然如此。但我们的观点是，**强化学习**（Reinforcement Learning, RL：一种机器学习范式，智能体通过与环境互动并获得奖励或惩罚来学习最佳行为策略）将成为提升模型能力最重要的扩展维度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It comes back to why we started the company. So if you go back to early 2023 when we started Poolside, we started it because we had our own point of view on the research. So if you remember early in that year, GPT-4 had just come out and the narrative in the world was all we have to do to reach AGI is scale up language models, do more next token prediction, a larger number of parameters and more data. And we agree with the importance of scale and till the date still do. But our point of view was that reinforcement learning was going to become the most important scaling access for model capabilities.</p>
</details>

在当时，这还是一个极其逆向的观点，即使在我们上次播客对话时以及随后的大约 12 个月里也是如此。当然，今天的情况已经大不相同，这已成为共识。世界已经明白，我们现在有能力持续扩展模型，使其朝着能力更强的方向发展，并真正缩小人类智能与人工智能之间的差距。这个使命是 Poolside 最初的使命，现在也依然是。但在这一过程中，我们预测会发生的事情也确实发生了：我们将继续扩大规模，需要更多的算力，但同时，那种基于网络内容预测下一个词元的预训练范式，其效果正在变得 S 型化，收益增长正在放缓。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Extremely contrarian opinion at that point still when we were doing our podcast as well and probably for the following, you know, 12 months as well. Today that's of course very different. Today I think that's become consensus and I think the world has understood that we now have an ability to continue to scale models towards more and more capable direction and really close the gap between human intelligence and AI. And that mission was the original mission of Poolside is still very much the mission of Poolside but along the way I think what we had predicted would happen played out. We were going to continue to scale up, more compute was going to be required but at the same time the first paradigm of kind of pre-training of predicting the next token on the web was becoming sigmoidal and was slowing down in terms of the gains that it had.</p>
</details>

在过去的两年半里，我们在预训练方面迎头赶上，掌握了我们称之为基础模型构建和语言建模的“入门技能”，同时在强化学习方面建立了一些相当重要的优势。现在，我们正处在一个将这两者结合起来的时刻。作为前沿公司，我们都在以相同的规模进行大型模型的训练。我们在研究中建立了一系列优势，在工程方面也建立了优势，而这些可能是最重要且可持续的。但现在，将我们的模型扩展到前沿规模对我们来说也变得至关重要。因此，我们最近宣布了即将上线的庞大算力规模。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So over the last 2 and 1/2 years we caught up on the pre-training side and really on like the what we refer to as the table stakes of foundation model building and language modeling while building some pretty serious advantages on the reinforcement learning side and and now we're at a moment where those two things have come together. All of us like as Frontier companies are you know developing our big model runs are still at the same scale. So there's series of advantages that we've built in our research. There's advantages that we've built on our engineering and those are probably some of the most important sustained ones. But now we're getting to a point where scaling up our models to frontier sizes is also necessary for us. And hence we've recently had some announcements about the sheer scale of compute that's coming online.</p>
</details>

我们正在这场竞赛中。我回听了我们之前的播客，我说过我们要追赶 OpenAI 和 Anthropic。这一点依然成立，但我们的起点略有不同。我们认为，要实现能够推理、规划和理解世界的高度智能，最好是戴上眼罩，专注于一个代理指标。对我们来说，这个代理就是软件开发。随着我们在处理更长周期的软件开发任务上能力越来越强，坦率地说，我们在处理所有类型的知识工作任务上也变得越来越强。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we're competing like we're in this race. I think I listened back to our podcast and I said, you know, we're going after OpenAI and Anthropic. That's still very much true. But our starting point was a little bit different, right? We said, you know, to get to highly capable intelligence that can reason, that can do planning, that can understand the world, you're almost better off putting a set of blinders and focusing on on one proxy for that. And for us, that proxy was software development. And as we've gotten more and more capable at doing longer horizon software development tasks, we've also gotten more and more capable at frankly all type of knowledge work tasks.</p>
</details>

### 智能将成为一种大宗商品
从模型的角度来看，我认为我们最终都会趋同于一个相似的点。我甚至敢说，智能将成为一种大宗商品。在那个世界里，我们希望成为受企业和商业信赖的伙伴，为知识工作者赋能。这一切始于编码智能体，现在正向更广阔的领域发展。我认为在这个领域，将会发生巨大的转变，就像电力出现前后的时代一样。所以我不认为这是一个赢家通吃的市场，但似乎只有少数公司能够达到那个高度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The world from a model perspective. I think we are all over time converging to a similar point. I would actually go as far as saying that intelligence is going to become a commodity. In that world, who we want to be is we want to be trusted by by enterprises. We want to be trusted by businesses to to power the knowledge workforce that started with coding agents and is now going beyond that as well. And I think in the space, you know, so much is going to transition, right? We're like a pre and post electricity moment. So I don't think it's a winner takes all market but it does seem to be that it's a small number of companies who are who are able to get there.</p>
</details>

### “地平线项目”：为何 AI 实验室必须自建物理基础设施
作为迈向 AGI 竞赛的一部分，我们最近宣布了一个重大消息，即“地平线项目”（Project Horizon）。这个项目旨在建设美国最大的数据中心园区之一。这又回到了我之前提到的观点：智能正在成为一种商品。自公司成立两年半以来，我们一直认为技术栈中有三个层面至关重要：能源、算力和建立于其上的智能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As part of that race towards AGI you've had some very big news in the last couple of weeks. One of them is Project Horizon. What is Project Horizon? Yeah. So, Project Horizon is us building out one of the largest data center complexes in the United States. And this comes back to something I said earlier. We talked about intelligence becoming a commodity, right? Our view for pretty much since starting the company over 2 and a half years has been that there's three layers of the stack that fundamentally are going to matter. It's energy, it's compute, and it's the intelligence built on top.</p>
</details>

在这个世界里，如果你认为不同公司构建的智能将变得越来越难以区分，最终成为一种商品——可能更像石油、云计算或面包店的面包——那么有两件事至关重要：你扩展它的能力，以及你向最终用户交付它的成本。扩展能力是“地平线项目”最主要的驱动因素，当然成本也是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And within this world, if you think that intelligence is going to become less distinguishable between the companies building it and becomes a commodity, a commodity probably more like oil or cloud compute like bread at the bakery, is there's two things that matter. Your ability to scale it and the cost at which you deliver it to your end user. Now the ability to scale it was frankly the primary motivating driver for project horizon but cost as well.</p>
</details>

重要的是要思考 12 个月前你能做什么，而今天又能做什么。在两年前，我们行业谈论的算力规模，你还可以打电话给数据中心托管服务商说：“嘿，我六个月后需要这么多算力。”那时总会有物理空间让你部署，或者有人能提供你所需的容量。但今天，我们谈论的算力规模是以数百兆瓦甚至很快将以千兆瓦为单位计算的。你已经找不到可以打电话求助的人了。这些都是“按需建造”的数据中心，规模如此之大，以至于没有人在找到租户之前会去建造它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's important to think about what you could do 12 months ago versus what you could do today. At the scale of compute that we were talking about, you know, 2 years ago in our industry you could call up a data center colo and say hey I want this much compute in 6 months and there would be space like physical space where you could deploy it or there'd be someone who has the capacity available to you. Today we're talking about a scale of compute that gets counted in the hundreds of megawatts and soon gigawatt but there's no one you can call. These are built to suit data centers that are so large that no one is building them before having a tenant.</p>
</details>

因此，当你接近技术前沿，模型能力越来越强，并且想要向世界提供这种智能、同时扩展你的训练规模时，从你决定到能够实现，你的准备时间不再是打个电话给**超级规模云服务商**（Hyperscaler：指像 AWS、Google Cloud、Azure 这样运营着超大规模数据中心的公司）或合作伙伴，然后在几个月内搞定。现在，我们谈论的是 12 个月、14 个月、18 个月的周期，并且附带着巨大的资本投入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so as you're approaching the frontier and your models are getting more capable and you want to serve that intelligence to the world and you want to scale up your training as well over time now your lead time from deciding to do that to being able to do that is no longer calling up a hyperscaler or calling up another partner and having it, you know, in months. Now, we're talking 12 months, 14 months, 18 months with huge capital numbers attached to it.</p>
</details>

我的联合创始人们私下里常说一句话，可能不太适合在播客上讲，但它很能说明问题：如果你是一家基础模型公司，却不建设物理基础设施，那你只是在“角色扮演”你的业务。这就是问题的根本所在。我们不是因为觉得建基础设施很酷才去做的，而是为了实现我们的使命，这是一种必然。否则你就会被淘汰。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, my co-founders say this thing to each other and probably not really for for podcast material, but it's if you're a foundation model company and you're not building physical infrastructure, you're cosplaying your business. And this is kind of the really fundamental nature. It's not that we went out and said it'll be cool to build infrastructure. It was a necessity for the mission to be able to achieve it. So you think you just get boxed out, right?</p>
</details>

显然，OpenAI 有一个庞大的项目，他们刚刚宣布要建第四个数据中心。Anthropic 与 AWS 有特殊关系，AWS 正在为他们建造一个。这正是我说的，你需要一个租户。作为一家独立的实验室，你必须掌握自己的命运，而这包括建造自己的数据中心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So obviously OpenAI is a whole target project and they just announced like I think a fourth data center that they're about to build. Anthropic has a special relationship with AWS. I think AWS is building one for them. That's I guess that's what you were saying. You need a tenant in that case. The hyperscaler is willing to do it because they have anthropic as a tenant. So as an indie lab for lack of a better term like you have to own your own destiny and that it involves building your own data center right just to play it back.</p>
</details>

作为一家基础模型公司，你可以走两条路：要么与一家超级规模云服务商深度合作，让他们成为你的股东，一路走到底；要么自己掌控。我认为世界正走向一个无人再怀疑的阶段：我们正朝着达到人类水平的智能和能力迈进。在那个世界里，价值 29 万亿美元的知识工作将被重写，科学进步将以前所未有的速度向前推进。所有这一切都依赖于“算力之上的智能”。因此，基础模型公司远比大多数人意识到的更像是一家物理基础设施企业。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I think as a foundation model company you can go two paths right you can choose to to deeply partner with a hyperscaler and kind of you know become an owner in you and and really go all the way. And I think that's one direction but at the same time the world is getting to a point where I don't think anyone has any doubts anymore that we're now on track to to reach human level capabilities and and intelligence and in that world $29 trillion of knowledge work rewrites itself right scientific progress starts pushing beyond levels that we've ever seen. And all of it is intelligence on compute. And so we are far more in a foundation model company is far more in a physical infrastructure business than most people realize.</p>
</details>

### 经济学剖析：拆解 80 亿美元的数据中心
拥有物理基础设施对前沿 AI 实验室的经济模型有何影响？我尚不确信我们行业的毛利率会像 SaaS 公司那样达到 80% 以上。当我们谈论智能作为一种商品时，我们在此之上构建增值服务。一方面，基础模型公司出售“词元”（tokens），就像出售原油一样；另一方面，我们构建增值服务和产品，为最终用户和客户创造价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You mentioned the impact of owning your physical infrastructure on the economics of Frontier AI labs. To help us understand that obviously one key question in the world of AI has been gross margin where do you think owning your own physical infrastructure lead you towards in terms of like overall structure? I'm not yet convinced that gross margins in our industry will look like a SAS company like 80% plus. I think when we're talking about a commodity as intelligence that we build value added services on top right as a foundation model company on one hand you you sell your tokens right your barrels of oil, your raw material. And on the other hand, you're building up value added services, your products that you bring to end users and customers that you know unlock value for their businesses or for consumers in the case of others.</p>
</details>

在这个世界里，它看起来更像一家云公司。我认为，从规模上看，它会像云公司，但后面可能还要加个零。从利润率角度看，可能非常相似，因为 AWS、GCP 或 Azure 本质上是硬件虚拟化加上顶层的服务。我认为基础模型并无太大不同。所以，我们的利润率可能更接近云公司的 40%，而不是软件行业的 80%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in that world, I think it looks a lot more like a cloud company. So I think when we're going to look at the scale of this, it's going to look like cloud companies with a zero behind that. from a margin perspective probably pretty similar because if you think about what is an AWS or GCP or an Azure it's effectively virtualization of hardware with services on top. I don't think foundation models are are that different. So I think from a margin profile will probably sit far closer towards that like 40% mark that you see in in cloud companies than you do like the 80% on the software side.</p>
</details>

现在，当你开始思考智能成本的构成时，你实际上有土地、能源、数据中心以及数据中心内的芯片。举个例子，用一些大致准确的数字来分解：为一个 250 兆瓦的数据中心供电，需要大约 5 亿美元的物理基础设施，比如燃气轮机。建造数据中心本身，也就是容纳计算设备的“电力外壳”，大约需要 20 亿到 25 亿美元。而今天放入其中的计算设备（芯片、网络等）大约需要 55 亿美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now when you start thinking about what sits in the stack of cost of intelligence, you effectively you've got the land, you've got the energy, you have the data center, you have the chips inside the data center and and just for context, if we for instance break this down with illustrative numbers that are roughly in the right ballpark, to energize 250 megawatt is about half a billion dollars worth of physical infrastructure. In the case of gas turbines, it's gas turbines, but there's different paths to it. Building a data center like the power shell that brings together all of the equipment where the compute can run inside, you're talking kind of north of $2 billion, $2 to $2.5 billion. Now the compute that goes inside today would be about $5.5 billion.</p>
</details>

所以总的来说，一个 250 兆瓦数据中心的总成本约为 80 亿美元。当你听到行业里说一千兆瓦需要 400 或 500 亿美元时，指的就是这些成本的分解。在这个 80 亿美元的项目中，你每年还要花费超过 3 亿到 3.5 亿美元的运营支出（Opex），这笔费用大约一半是融资成本，一半是能源和运营成本，其中能源占比最大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So kind of all in all, when we're like adding this together, you're talking about an $8 billion like cost of 250 megawatt. So when you hear in the in the industry you might say a gigawatt is 40 or $50 billion. That's what people are referring to, right? It's it's the breakdown of those costs. Now, in that $8 billion project of 250 megawatt, you're annually spending somewhere north of 300 to $350 million of opex. And so, you can split that about 50/50 between the cost of financing and the cost of energy and operations. energy like being the most.</p>
</details>

这里有一个有趣的洞见：如今能源部分并非成本堆栈中最大的部分。在西德克萨斯，每年能源成本约为 1.6 亿美元。虽然在其他地方可能会翻倍，但与总拥有成本相比，它相对较小。我之所以提到这一点，是因为随着时间的推移，资本主义的规律会使所有环节的利润都被压缩。GPU 计算今天仍然是高利润业务，但最终也会面临同样的利润压缩。当芯片利润被压缩后，技术栈的其他部分就变得更加重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is where there's already an interesting insight. All of a sudden, you realize that the energy part today is not the biggest part of the stack, right? You're talking $160 million a year in energy. And of course, we're I'm taking numbers that are West Texas numbers. So energy can be, you know, double that in other places in the country, but still compared to the total, you know, cost TCO of of of compute, it's relatively, you know, minor. Now the reason I mentioned is that what is going to happen over time right like what's always happened in capitalism is that margins compress everywhere. GPU compute today is still very high margin business and over time we'll find a similar level of compression. And as the chips become more compressed the other parts of the stack are more important as well.</p>
</details>

当你端到端地拥有并建设这一切时，之前存在于各个环节之间的利润就消失了。这包括土地、能源、建筑等所有层面的成本。这加起来是一笔巨大的数目。当你剔除所有这些中间利润后，你突然发现你可以比别人便宜 20%、30% 甚至 40% 的价格提供你的 tokens。这将至关重要，因为我们正在从人类劳动创造经济产出，转向“算力上的智能”与人类劳动相结合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And when you end to end own all of this and build all of this, everywhere where previously margin sat in between, you know, falls away. If that's the person who you were paying for, you know, the cost of land, if you're talking about the cost of like the energy, the cost of the building, the data center, kind of all the layers in the stack. This adds up to a very large amount. So when you take all those margins out all of a sudden you can start seeing that you can serve your tokens 20, 30, 40% cheaper than someone else. And this is going to matter because it's we're shifting from, you know, human labor that leads to economic output to intelligence on compute combined with human labor.</p>
</details>

### 风险与速度：混合模块化施工法
我们是如何从一家软件 AI 公司转变为大型物理基础设施公司的？我们遵循一个算法，即尽力避免**邓宁-克鲁格效应**（Dunning-Kruger effect，又称达克效应：一种认知偏差，能力不足的人无法认识到自身的不足，错误地高估自己的实际水平）。当你进入一个新领域时，你从学习开始，阅读、请教专家。随着了解的深入，你会陷入一个自以为很懂的阶段。这时，你就需要开始寻找真正的专家加入你的团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we followed an algorithm. I would probably say most of my career by now. is you have to by all accounts avoid the Dunning Krueger effect as a founder, right? Because when you get into something new like it has been on the physical infrastructure side, you start with learning, right? You start with reading, you start with like meeting the experts, learning and learning and as you learn more about a topic, you fall in this point where you start thinking you really know it. But you don't really know it because you haven't hit the real world or you haven't done it before. And what I found to be one of the best advice I got a very long time ago whenever you find yourself in that situation, well, this is when you want to start finding the experts to join you.</p>
</details>

我们为每个职位面试了 100 多人，建立了一个人才分布图，从而识别出那些处于右尾端的杰出人才。我们聘请了他们，并赋予他们自主权。有趣的是，基础设施领域是一个非常小的圈子，每个人都互相认识，这让科技圈都显得很大。这使得你能够很快了解谁是好的参与者，谁声誉不佳。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But how do you find the experts? Because you yourself aren't. And here's when you just start interviewing 100 plus people for every role and you build a distribution. You start understanding who sits on the right tail end outlier of that distribution. And it turns out, you know, even just with relatively shallow knowledge, we got to the point where we started being able to identify who were the outliers and those are the people you hire and you bring on, right? And you empower. What was particularly interesting to learn about the infrastructure space over time is that it's an incredibly small world. Everybody knows each other. It makes tech feel like a big world. So you also have an ability to very quickly understand who's considered a good actor and who's considered a bad actor, right? Who has built up a reputation. Small industries are very reputation driven.</p>
</details>

我们不仅组建了优秀的团队，还找到了行业内能够重新思考数据中心建设方式的人才。我们没有完全遵循传统模式，而是采取了一种全新的方法。传统数据中心建设有两种极端：一种是“现场建造”（stick-built），所有材料运到现场，由数千名工匠组装；另一种是完全“模块化”，数据中心单元像从工厂里生产出来一样。这两种方法都有其局限性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that has actually not just led us to building a an infrastructure company with an incredible team, but also to find the people in the industry who were able to start rethinking some of the ways data centers have been built. So we haven't just gone and said, "Oh, we're doing the exact traditional thing everyone else is doing." We've actually taken a quite new approach to data center construction as well. On one end you have kind of stick-built buildings. Everything is done on site, right? So all the materials are brought there. Thousands of tradesmen who who are assembling the data center and on the other hand of kind of like players who've gone full modular. to think of like your your data center units are rolling out of a factory. And what was interesting in in that both of those approaches have their limitations.</p>
</details>

我们决定采取一种折中方案，我们称之为“增量交付的混合模块化数据中心”。我们将建筑主体在现场建造，但将电气、机械、冷却和计算等核心单元做成可以由平板卡车运输的 2.5 兆瓦的“滑轨模块”（skids）。这些模块由美国本土的制造伙伴生产。这种方法将两者的优点结合起来：它极大地降低了交付风险和算力上线风险，也意味着如果你下个月突然需要更多算力，可以以 2.5 兆瓦为单位做出决策。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we we kind of decided to meet in the middle and took an approach where we said we're building the actual building stick built so that's being built on site but let's take a modular approach but one that fits on the back of a flatbed truck. So how do we kind of do 2 and a half megawatt compute-worthy skids for electrical for mechanical and cooling and for compute. Those are kind of the three elements that sit inside a data center and do it with manufacturing partners here in the United States. The combination of those things that we refer to as incrementally delivered hybrid modular data centers is kind of bringing the best of both worlds. It usually derisks your ability to deliver. It derisks your ability to bring compute online. It also means that if all of a sudden next month you need more compute, you can make decisions on 2 and a half megawatts like I just want a little bit more.</p>
</details>

最大的优势在于，我们可以在一个相对偏远的地区，用少于 450 人的现场团队建设 250 兆瓦的数据中心，而传统方法可能需要 2000 多人。这一切都是为了降低风险和提高速度。我们思考的是交付周期，以及如何避免资本闲置 12 到 18 个月。这使得我们这样的小公司也能突然间实现规模扩张。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The biggest advantage though of all of this is not just speed, but it's also your workforce that you can mobilize because we're in a quite remote area. So all of a sudden, you know, when we're building 250 megawatts, we're doing it with a less than 450 person on-site workforce with very skilled tradesmen and construction workers that were bringing over there versus a world where you might need traditionally 2,000 plus people to build the exact same thing. So it's all about de-risking and speed. And you kind of see a common theme. We think about lead time and we do the same by the way on our model building site. We think you know how can quickly can you go from decision to having something online and how can you make sure the capital that you have to deploy does not have to sit for 12 to 18 months because that's when you as a smaller company can all of a sudden scale up right.</p>
</details>

### 超越预训练：强化学习的未来
两年前，我们讨论了从代码执行反馈中进行强化学习的方法。当时，我们有数万个环境，模型在其中探索解决方案并获得奖励。如今，我们已经将环境数量扩展到超过一百万个，修订版本达到数千万。随着模型推理能力的增强，强化学习也从“单次尝试”演变为“智能体式强化学习”（agentic RL），即智能体在环境中通过使用工具（编辑代码、执行命令等）来完成更高级别的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when we did this podcast two years ago, you know, we spoke about our approach of of reinforcement learning from code execution feedback. At the time I called out we had tens of thousands of of these environments where the models would go in they would be given synthetic tasks explore solutions and then we rewarded on the solutions that... over time that has grown a lot across two axis. One is right now we have over a million of those environments and tens of millions of revisions putting us in like the 30 million range. The second axis is that the models got so capable in their reasoning and longer time horizon capabilities that RL moved from kind of single-shot reinforcement learning to agentic RL. So meaning that now we give a much higher level task. We send in an agent that agent goes and you know tries to solve for the problem by using its tools. So editing code, executing commands, updating packages, like doing everything that a software developer would do.</p>
</details>

两年前这还是一个逆向观点，如今已成为共识。但我们再次发现自己对未来持有不同的看法。目前，很多人都在谈论通过人类专家制定的评估标准来扩展环境。这种方法对于提升模型在单一任务上的能力非常有效，我们也在这样做。它能为客户创造巨大的经济价值。但我们不认为这能将我们带向 AGI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Where 2 years ago this was a contrarian opinion that no one was doing to date is absolutely consensus where we have again found ourselves in a point where we now have again a contrarian opinion on the future. What you're hearing a lot about at the moment is the scaling up of environments with human expert rubrics. It is a highly effective way to to get models singular capabilities on singular tasks to push it up. And I think what we'll see in the next couple of years is a lot of model companies ourselves as well. We go into these enterprises. We find high value use cases. We use our agents to get to 60 or 70%, you know, of of quality and then use additional reinforcement learning with, you know, domain experts knowledge to get it to 80 or 90 or potentially even 100%. But the narrative that that's going to scale us to AGI, yeah, we don't agree with.</p>
</details>

### 首次公开：“学会学习的强化学习”（RL to L）
我们认为，通过为特定技能创建环境和专家规则来单一地收集技能，无法扩展到通用人工智能。我们的观点是，强化学习将经历一个类似于语言建模的时刻。语言建模的美妙之处在于，通过预测网络上的下一个词元，你拥有一个通用的、自监督的目标。你可以把整个互联网都扔给它，模型就被迫去学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The singularly collecting of skills this way by creating environments and experts, we don't think will scale to artificial general intelligence. Our view is that reinforcement learning will have a moment similar like we've seen in language modeling. So, what makes language modeling so beautiful? It's the fact that by predicting the next token on the web, you have this general self-supervised objective, right? You just can throw the entire internet at it and of course continue to filter it into more quality and improve it with synthetic, all the things we spoke about last time, but it forces the model to learn.</p>
</details>

但这种方法之所以没能带我们到达 AGI，是因为互联网从未包含创造它的思想和行动的数据集。它只有最终的代码、最终的文章，却没有导致这些结果的思考过程和试错。我们的观点是，存在一种通用的强化学习目标，它不需要人类裁判、环境或奖励模型，而是可以像下一个词元预测一样在语言上泛化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the reason that never got us to AGI is because well, the internet never actually included the data set of the thoughts and actions that created it. It's the final piece of code. It's the final article you write but not the thoughts that you had and actions that led to it. Not the trial and error. Exactly. And so our view is that there is an generalized objective for reinforcement learning that doesn't require you know human judges or environments or reward models or anything external but can generalize over language. The same way that we have seen you know next token prediction generalize.</p>
</details>

可以这样想：传统上我们是“向前生成”，利用网络数据并改进它。但如果你能“向后生成”呢？也就是说，如果你能将网络内容“逆向工程”或“解压缩”成创造它的思想和行动，会怎么样？是否存在这样一个通用的 RL 目标？这是我们过去一年半研究的重点，并且我们已经看到了其可能性的曙光。我们称之为**“学会学习的强化学习”**（Reinforcement Learning to Learn），简称 RL to L。这可能是我第一次公开谈论这个概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A way of thinking about it is if you have traditionally we've taken the web and we've used synthetic techniques to reformulate it to improve it. We've moved forward like we taken the web and generated forward. What if you could generate backwards? So what I mean by that is what if you could reverse engineer the web or decompress the web into the thoughts and actions that created it. Is there such a general objective for RL that can be found? This is where we've done a lot of our research in the last year and a half and we have now started seeing a lot of promise towards that being possible. Yeah. So we call it reinforcement learning to learn RL to L. This is the first time I'm probably publicly saying this.</p>
</details>

我们认为，训练将分为四个阶段：
1.  **预训练**：通过预测下一个词元来引导模型理解语言。
2.  **RL to L**：我们内部也称之为“邦迪技术”，它将在训练的早期阶段将模型的推理和思考能力提升到新高度。
3.  **从验证环境中学习**：通过代码执行反馈等模拟环境来磨练模型的技能。
4.  **持续学习**：从智能体在真实世界中的经验中不断学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our view is is that you know we pre-training and predicting the next token on the web is an incredible bootstrap of of understanding language and and helping us get you know to a level of intelligence. Reinforcement learning to learn RL to L internally also refer to as the Bondi techniques. It's kind of our our our code name for it. We think will push models to a level of reasoning and thought that will happen far earlier in their training than it does today. And then you have reinforcement learning from code execution feedback and and from other verified environments that help learn really what is you know to sharpen those skill sets in simulated environments. And then the fourth stage of training over time increasingly will become learning continuous learning from real world experiences of these agents. And so those are kind of the four stages that we think training will go to.</p>
</details>

### 智能体的角色与向模型的“塌陷”
关于智能体，目前我们对其的定义是：一个在环境中循环运行、可使用一系列工具的模型。作为基础模型公司，我们训练智能体能力的方式，是将智能体（运行循环的代码）与模型一同训练。这就是为什么你看到最强大的编码智能体都来自那些将模型和智能体一起训练的公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What is today the definition that we use of an agent? It's a model running in a loop inside an environment with access to a set of tools, right? And it's doing longer trajectory work. And how are we training agents, right? Agent capabilities as foundation model companies is that we take that agent, right, the binary, the piece of code that that runs this in a loop and has access to could be a container or could be access to a bunch of tools and we train it together with the model. And so this is why you see the most capable coding agents, right, really coming out of people who are training with the models.</p>
</details>

如果你决定创业做一个编码智能体，但你无法改进模型本身，而基础模型公司正专注于此，那么你就没有那种优势。你所玩的猫鼠游戏会变得更加困难。在 Poolside，我们有一个说法：随着时间的推移，一切都会“塌陷”到模型中。我们越来越多地看到这一点。两年前存在的框架、智能体或产品，如今要么消失了，要么它们的 UI 塌陷了——从一个充满各种按钮和选项的复杂界面，变成了一个只有一个输入框的智能体屏幕。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you decide to start a company to build a coding agent where you are not able to improve the model, right? The agent is not able to train together with the model and foundation model companies like like ourselves are deeply focused on doing so. You you don't have that edge and so the cat-and- mouse game that you're playing becomes a lot more difficult. But we have a phrase at poolside which is over time everything collapses into the models. And I think increasingly that's what we're seeing. Frameworks or agents or products that were 2 years ago you know around today are have you know either gone or they've sometimes their UIs have collapsed right? So you used to see these products with lots of bells and whistles and lots of things behind the scenes and you would see lots of UI options and today it's just like a screen that says agent and you talk to it and it goes off and does the work.</p>
</details>

### 驳斥 AI 平台期神话
有人认为 AI 的进展正在进入平台期，我怎么看？坦率地说，自从创办 Poolside 两年半以来，我一直在听到这个问题。我们正处在一个节点，每一代新芯片的出现，都让我们有能力制造更大的模型。这与芯片换代息息相关，因为你不能无限地投入资金来扩大规模，那是一个错误的叙事。由于网络和芯片浮点运算能力的限制，你不能通过线性增加 GPU 来训练一个越来越大的模型，否则训练时间会呈指数级增长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what do you tell people that argue that AI progress is actually plateauing? The frankly the same thing. I've had this question for two and a half years now since starting poolside. We are at a point where we are continuing to see with every new generation of chips an ability to make the model larger. And it's important that this links to every new generation of chips because it is not a world where you can throw infinite dollars at scaling. That's a false narrative. It is not that I can linearly add more GPUs and train increasingly a more larger model. If I do so the time it takes becomes exponentially longer.</p>
</details>

但每两年，甚至现在芯片周期更短，我们就会得到一款性能卓越的新芯片和网络堆栈，这使得下一代规模的模型成为可能。一方面，我们享受着芯片换代带来的“免费午餐”；另一方面，更有趣的是，随着我们进入扩展强化学习的时代，我们能够用更多的数据、更长的时间来训练模型。我们还没有找到一个通用的、可无限扩展的强化学习投入方式。因此，在增加模型规模和增加 RL 数据方面仍然存在限制。如果这些限制不存在，Poolside 也不可能迎头赶上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But every 2 years and now the chip cycle is even getting less. We have an incredible new chip and an incredible new networking stack that is improving that all of a sudden makes the next generation of size model possible. Now on one hand we have a a free lunch like as as new generations of chips come out we can build and train larger models and it as continues to show that it improves the model capabilities. on the other hand and I think far more interesting as we're now getting into the world of scaling reinforcement learning we're able to train models for longer duration with more data. We have not yet found a generalized infinitely scalable, you know, dollars we can throw at reinforcement learning either. And so both on increasing model size and on increasing data from RL, there's still limitations. And if those limitations didn't exist, Pulside wouldn't have been able to catch up, right?</p>
</details>

### Poolside 的市场策略与未来展望
我们公司的第一天就在网站上说：通往 AGI 的道路会经过软件开发，但终点并非软件开发。我们制定了三步走计划：第一步，辅助编码；第二步，让任何人都能构建软件；第三步，泛化到所有领域。我们现在正处于第三步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you go back to our first podcast or we put a post on our website on day zero of the company, we always said the path for AGI runs through software. It is not software. And we laid out this three-step master plan which was step one assist people in coding. Step two, allow people, anyone to build software. I think the world is clearly there right now. And then step three, generalize to all domains. And we're now really in that step three moment.</p>
</details>

我们的市场策略很简单：只有当我们在某个非常有价值的维度上明显是最好的时候，我们才会公开发布模型。在达到前沿水平之前，我们选择了一个别人无法进入的市场：国防工业基地和政府。因为我们愿意将整个模型权重和完整技术栈部署到客户需要的任何地方——从工作站到服务器，甚至是完全隔离的“气隙”环境。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our view has been quite simple actually is that we will make models publicly available when we are clearly best on on a very valuable axis right. Before we were at the frontier, we picked a market where no one else could go, which was the defense industrial base and government because one of the things that we're willing to do is take our entire model weights and the full stack all the way with the agents anywhere the customer needs it to be. So we today operate on workstations that go into skiffs. We operate on servers that are on-prem or even as far as airgapped.</p>
</details>

我们在国防工业中对这套系统进行了实战检验，因为这些组织极其庞大、高度复杂且受到严格监管。现在，随着模型越来越接近前沿水平，我们正在向更广泛的企业市场扩张，包括金融服务、工业和科技公司。我们还建立了一支强大的“前线部署研究工程师”（Forward Deployed Research Engineers）团队，他们深入客户内部，利用我们的模型和智能体解决高价值问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We battle tested that in the defense industry because they're extremely large organizations they're highly complex they're highly regulated and they often need segregated deployments for different missions that that they're on. Now, as the models have gotten to a point where we say, "Okay, now we feel that we can compete, we're going to wider enterprise." And so, you'll see us increasingly more showing up in kind of the large enterprise names amongst financial services, industrials, like technology companies. And here we started building up a very strong forward deployed motion. At Poolside, we have former Palantirians who came over and really kind of instilled some of that DNA, the DNA of what it means to find a high value problem and come in with high agency and help a customer solve that.</p>
</details>

在接下来的 12 到 18 个月里，你会看到我们的模型达到前沿水平，物理基础设施的规模将进一步扩大，以支持更大、更强的模型训练和服务。我们将继续朝着我们的使命努力，因为我们相信，在这之后的世界里，可以创造出巨大的富足——通过科学进步，也通过将智能转移到算力上从而降低商品和服务的成本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, zooming out the next 12 to 18 months, what happens at Poolside? What can we expect? Models reach the frontier that that's right now I think we see a straight line towards this. You'll see the the scaling up of physical infrastructure to both empower training even more larger and capable models but also serving them to the world. You'll see us have forward deployed research engineers and increasingly larger number of enterprises globally. You'll see us just continue to work towards the mission right. For us we never want to lose sight of the fact that we are building this company and and and the economic engine associated with it because we think that the world that lives after this is one where a lot of abundance can be created abundance through scientific progress that's going to happen but also abundance through the fact that costing of goods and services ultimately are dependent on the cost of what it takes to create them. And as we shift intelligence to compute, we can find ourselves in a world where we can drive that cost down.</p>
</details>