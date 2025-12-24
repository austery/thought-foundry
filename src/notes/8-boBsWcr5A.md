---
area: market-analysis
category: business
companies_orgs:
- Microsoft
- SemiAnalysis
- Azure
- OpenAI
- Google
- Meta
- Anthropic
- Cursor
- Cognition
- Windsurf
- Replit
- Oracle
- AWS
- DeepMind
- Salesforce
- Iris Energy
- Nebius
- Lambda Labs
- TSMC
- ByteDance
- Alibaba
- Deepseek
- Moonshot
- Carnegie Mellon University
date: '2025-11-13'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Satya Nadella
- Dylan Patel
- Mustafa Suleyman
- Jensen Huang
- Sam Altman
- David Sacks
products_models:
- GPT-5
- GB200
- NVLink
- Vera Rubin Ultra
- Copilot
- Windows
- Microsoft 365
- Office 365
- SharePoint
- GitHub
- VS Code
- GitHub Copilot
- Claude Code
- Codex
- Grok
- Agent HQ
- Mission Control
- Excel Agent
- GPT family
- MAI
- Gemini 2.5
- Windows 365
- Cosmos DB
- SQL DB
- Azure Foundry
- Maia 200
- Cobalt
- TPU
project:
- us-analysis
- ai-impact-analysis
- geopolitics-watch
series: ''
source: https://www.youtube.com/watch?v=8-boBsWcr5A
speaker: Dwarkesh Patel
status: evergreen
summary: 微软CEO萨提亚·纳德拉深入探讨了公司在人工智能时代的全面战略。他详细阐述了微软对超大规模数据中心的巨额投资，解释了AI高昂的销售成本（COGS）如何重塑其商业模式，并强调了通过市场扩张而非仅仅守住利润率来取胜的逻辑。纳德拉还剖析了微软在模型层面的双重策略——深化与OpenAI的合作，同时发展自家的MAI模型。最后，他分享了在当前地缘政治格局下，微软如何通过构建全球信任和尊重“主权AI”来应对挑战。
tags:
- ai-business-model
- capital
- infrastructure
- llm
- model
title: 萨提亚·纳德拉深度解读：微软的AI基础设施、商业模式与全球战略
---

### 微软的超大规模赌注：构建面向未来的AI基础设施

我们参观了微软全新的 Fairwater 2 数据中心，这是目前世界上最强大的数据中心。我们的目标是每18到24个月将训练能力提升10倍。所以，这实际上相当于 GPT-5 训练规模的10倍。从网络光学的角度来看，这座建筑中的网络光学器件数量，几乎相当于两年半前整个 Azure 所有数据中心的总和，拥有大约五百万个网络连接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Satya and Scott Guthrie, Microsoft's EVP of Cloud and AI, give us a tour of their brand new Fairwater 2 data center, the current most powerful in the world. We've tried to 10x the training capacity every 18 to 24 months. So this would effectively be a 10x increase from what GPT-5 was trained with. So to put it in perspective in the number of optics, the network optics in this building is almost as much as all of Azure across all our data centers two and a half years ago. It's got like five million network connections.</p>
</details>

在同一区域的不同站点之间以及两个区域之间，都拥有巨大的带宽。我们的目标是能够为一个大型训练任务聚合这些算力，并将不同站点的资源整合在一起。现实情况是，你将它用于训练，然后用于数据生成，再用于各种形式的推理。它不会永远只用于一种工作负载。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You've got all this bandwidth between different sites in a region and between the two regions. The goal is to be able to aggregate these flops for a large training job and then put these things together across sites. The reality is you'll use it for training and then you'll use it for data gen, you'll use it for inference in all sorts of ways. It's not like it's going to be used only for one workload forever.</p>
</details>

附近正在建设的 Fairwater 4 也将接入那个1 petabit 的网络，这样我们就能以极高的速率将两者连接起来。然后我们通过 AI 广域网连接到密尔沃基，那里还有多个 Fairwater 数据中心正在建设中。你可以真正看到模型并行和数据并行。这基本上是为整个园区的超级计算集群（super pods）和训练任务而构建的。通过广域网，你还可以连接到威斯康星州的数据中心。你可以将所有这些资源聚合起来，运行一个训练任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Fairwater 4, which you're going to see under construction nearby, will also be on that one petabit network so that we can actually link the two at a very high rate. Then we do the AI WAN connecting to Milwaukee where we have multiple other Fairwaters being built. Literally you can see the model parallelism and the data parallelism. It's kind of built for, essentially, the training jobs, the super pods across this campus. And then with the WAN, you can go to the Wisconsin data center. You literally run a training job with all of them getting aggregated.</p>
</details>

### AI的本质：工具、革命与经济影响

许多人认为这是最后一次技术革命或转型，这次与以往截然不同。至少从市场来看，在三年内，我们已经看到超大规模云服务商明年的**Capex**（Capital Expenditure: 资本支出，即用于购买或升级物理资产的资金）将达到5000亿美元，这个增长速度是以往任何革命都无法比拟的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Many folks who have been on Dwarkesh's podcast believe this is the final technological revolution or transition, and that this time is very, very different. At least so far in the markets, in three years we've already skyrocketed to hyperscalers doing $500 billion of capex next year, which is a scale that's unmatched to prior revolutions in terms of speed. The end state seems to be quite different.</p>
</details>

我也对这个想法感到兴奋，或许这是工业革命以来最重大的事件。我从这个前提出发。但同时，我也比较务实，认识到这仍处于早期阶段。我们已经构建了一些非常有用的东西，看到了这些模型的一些出色特性，而且规模法则似乎正在发挥作用。我乐观地认为它们会继续有效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I start with the excitement that I also feel for the idea that maybe after the Industrial Revolution this is the biggest thing. I start with that premise. But at the same time, I'm a little grounded in the fact that this is still early innings. We've built some very useful things, we're seeing some great properties, these scaling laws seem to be working. I'm optimistic that they'll continue to work.</p>
</details>

我喜欢卡内基梅隆大学的图灵奖得主 Raj Reddy 对人工智能的一个比喻。他认为人工智能要么应该成为“守护天使”，要么应该成为“认知放大器”。我非常喜欢这个说法。它简单地概括了这项技术的本质。最终，它对人类的效用是什么？它将成为一个认知放大器和守护天使。如果我这样看待它，我就会视其为一种工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I like one of the things that Raj Reddy has as a metaphor for what AI is. He's a Turing Award winner at CMU. He had this, even pre-AGI. He had this metaphor for AI, it should either be a guardian angel or a cognitive amplifier. I love that. It's a simple way to think about what this is. Ultimately, what is its human utility? It is going to be a cognitive amplifier and a guardian angel. If I view it that way, I view it as a tool.</p>
</details>

但你也可以对此进行非常神秘的解读，说它不仅仅是一个工具。它能做所有这些迄今为止只有人类才能做的事情。但过去许多技术也是如此。曾经有很多事情只有人类能做，然后我们有了能做这些事的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then you can also go very mystical about it and say this is more than a tool. It does all these things, which only humans did before so far. But that has been the case with many technologies in the past. Only humans did a lot of things, and then we had tools that did them.</p>
</details>

### 从SaaS到AI：重塑商业模式与利润结构

随着我们从过去的商业模式过渡到今天，另一场转型也正在发生。**SaaS**（Software-as-a-Service: 软件即服务）模式下，每个新增用户的边际成本极低。但AI的**COGS**（Cost of Goods Sold: 销售成本）非常高，这完全打破了这些商业模式的运作方式。作为或许是最伟大的SaaS公司，微软如何在这个COGS至关重要、新增用户边际成本不同的新时代进行转型？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As we go from that transition to where your business is today, there's also a transition going on after that. Software-as-a-service has incredibly low incremental cost per user. There's a lot of R&D, there's a lot of customer acquisition costs. This is sort of why, not Microsoft, but the SaaS companies have underperformed massively in the markets, because the COGS of AI is just so high, and that just completely breaks how these business models work. How do you, as perhaps the greatest software-as-a-service company, transition Microsoft to this new age where COGS matters a lot and the incremental cost per user is different?</p>
</details>

这是一个很好的问题，因为在某种意义上，商业模式本身的杠杆将保持相似。我认为广告、交易、设备毛利、消费者和企业订阅以及按量付费，这些仍然是所有的计费方式。你的观点是，什么是订阅？到目前为止，人们喜欢订阅是因为可以做预算。它们本质上是封装在订阅中的某种消费权利。所以我认为这在某种程度上变成了一个定价决策。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a great question because in some sense with the business models themselves, the levers are going to remain similar. If you look at the menu of models starting from consumer all the way, there will be some ad unit, there will be some transaction, there will be some device gross margin for somebody who builds an AI device. There will be subscriptions, consumer and enterprise, and then there'll be consumption. So I still think those are all the meters. To your point, what is a subscription? Up to now, people like subscriptions because they can budget for them. They are essentially entitlements to some consumption rights that come encapsulated in a subscription. So I think that in some sense becomes a pricing decision.</p>
</details>

有趣的是，在微软，好消息是我们涉足了所有这些计费方式的业务。在产品组合层面，我们几乎拥有从按量付费、订阅到所有其他消费者杠杆的全部业务。我认为时间会告诉我们，哪种模式在哪个类别中更有意义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The interesting thing is that at Microsoft, the good news for us is we are in that business across all those meters. At a portfolio level, we pretty much have consumption, subscriptions, to all of the other consumer levers as well. I think time will tell which of these models make sense in what categories.</p>
</details>

在从服务器到云的转型期间，我们曾自问：“天哪，如果我们只是把使用我们 Office 许可证和服务器的相同用户转移到云上，并且我们还要承担 COGS，这不仅会压缩我们的利润，还会使我们从根本上成为一家盈利能力较差的公司。”但实际发生的是，向云的迁移极大地扩展了市场。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">During the transition from server to cloud, one of the questions we used to ask ourselves is, "Oh my God, if all we did was just basically move the same users who were using our Office licenses and our Office servers at the time to the cloud, and we had COGS, this is going to not only shrink our margins but we'll be fundamentally a less profitable company." Except what happened was the move to the cloud expanded the market like crazy.</p>
</details>

我们以前在印度只卖了少量服务器，销量不大。但在云时代，突然之间印度的每个人也都能负担得起零散购买服务器的IT成本。这次AI的变革也会如此。以编程为例，我们用几十年时间打造了 GitHub 和 VS Code，而编程助手在一年内就达到了如此大的规模。我认为这就是即将发生的事情，市场将得到极大的扩展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We sold a few servers in India, we didn't sell much. Whereas in the cloud suddenly everybody in India also could afford fractionally buying servers, the IT cost. So this AI thing will be that. If you take coding, what we built with GitHub and VS Code over decades, suddenly the coding assistant is that big in one year. That I think is what's going to happen as well, which is the market expands massively.</p>
</details>

### 价值归属之争：模型公司 vs. 平台生态

有一种观点认为，随着模型变得越来越强大，它们将能够自主完成数天的工作。那么，模型公司将收取数千美元的费用，以获取一个真正的“同事”，这个同事可以使用任何用户界面与人类交流并在平台之间迁移。如果越来越接近那个未来，为什么不是那些利润越来越高的模型公司攫取了所有的利润？为什么那些随着AI能力增强而变得越来越不重要的“脚手架”（scaffolding）会那么重要？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another vision is that over time these models which are now doing tasks that take two minutes, in the future, they'll be doing tasks that take 10, 30 minutes. In the future, maybe they're doing days worth of work autonomously. Then the model companies are charging thousands of dollars maybe for access to, really, a coworker which could use any UI to communicate with their human and migrate between platforms. If we’re getting closer to that, why aren't the model companies that are just getting more and more profitable, the ones that are taking all the margin? Why is the place where the scaffolding happens, which becomes less and less relevant as the AI becomes more capable, going to be that important?</p>
</details>

所有的价值是会迁移到模型本身，还是会在脚手架和模型之间分配？我认为时间会证明一切。但我的基本观点是，激励结构会变得清晰。以信息工作或编程为例，如果你赢得了脚手架——它今天处理的是所有这些智能问题的参差不齐或不完善之处，你必须这样做——那么你就会垂直整合到模型中，因为你将拥有数据的流动性和其他优势。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Does all the value migrate just to the model? Or does it get split between the scaffolding and the model? I think that time will tell. But my fundamental point also is that the incentive structure gets clear. Let’s take information work, or take even coding. If you win the scaffolding—which today is dealing with all the hobbling problems or the jaggedness of these intelligence problems, which you kind of have to—if you win that, then you will vertically integrate yourself into the model just because you will have the liquidity of the data and what have you.</p>
</details>

将会有足够多的模型检查点可用。这是另一回事。从结构上讲，我认为世界上总会有一个相当强大的开源模型，只要你有可以与之配合使用的东西，比如数据和脚手架，你就可以使用它。我可以论证，如果你是一家模型公司，你可能会有“赢家的诅咒”。你可能做了所有艰苦的工作，取得了令人难以置信的创新，但它离被商品化只有一个复制的距离。然后，拥有用于基础和上下文工程的数据以及数据流动性的人，就可以拿走那个检查点并进行训练。所以我认为这个论点可以从两个方面来看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are enough and more checkpoints that are going to be available. That's the other thing. Structurally, I think there will always be an open source model that will be fairly capable in the world that you could then use, as long as you have something that you can use that with, which is data and a scaffolding. I can make the argument that if you're a model company, you may have a winner's curse. You may have done all the hard work, done unbelievable innovation, except it's one copy away from that being commoditized. Then the person who has the data for grounding and context engineering, and the liquidity of data can then go take that checkpoint and train it. So I think the argument can be made both ways.</p>
</details>

### 微软的AI模型战略：拥抱OpenAI与自研MAI并行

首先，我们绝对会在我们所有的产品中最大限度地使用OpenAI的模型。这是我们在未来七年里将继续做的核心事情，不仅是使用它，还要在其之上增加价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First of all, we are absolutely going to use the OpenAI models to the maximum across all of our products. That's the core thing that we're going to continue to do all the way for the next seven years, and not just use it but then add value to it.</p>
</details>

对于MAI模型，我认为我们的思考方式是，新协议的好消息是我们能够非常明确地表示，我们将建立一个世界级的超级智能团队，并以雄心壮志去追求它。但同时，我们也会利用这段时间来明智地使用这两者。这意味着我们一方面将非常注重产品，另一方面将非常注重研究。因为我们可以使用GPT系列模型，我最不想做的就是以一种重复且增值不多的方式使用我们的算力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With the MAI model, the way that I think we’re going to think about it is that the good news here with the new agreement is we can be very, very clear that we're going to build a world-class superintelligence team and go after it with a high ambition. But at the same time, we're also going to use this time to be smart about how to use both these things. That means we will, on one end, be very product-focused, and on the other end, be very research-focused. Because we have access to the GPT family, the last thing I want to do is use my flops in a way that is just duplicative and doesn't add much value.</p>
</details>

我想利用我们用于生成GPT系列模型的算力来最大化其价值，而我的MAI算力则用于其他方面……比如我们发布的图像模型，我认为它在图像领域排名第九。我们用它来优化成本，它已经用在了Copilot和Bing上。我们有一个音频模型在Copilot中，它具有个性和其他特性。我们为我们的产品优化了它。所以我们会做这些事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I want to be able to take the flops that we use to generate a GPT family and maximize its value, while my MAI flops are being used for… Let's take the image model that we launched, which I think is at number nine in the image arena. We're using it both for cost optimization, it's on Copilot, it's in Bing, and we're going to use that. We have an audio model in Copilot. It's got personality and what have you. We optimized it for our product. So we will do those.</p>
</details>

所以，当我考虑MAI的路线图时，我们将建立一个顶级的超级智能团队。我们将继续公开发布其中一些模型。它们要么因为对延迟或成本友好，或者具备某些特殊能力而被用于我们的产品中。我们将进行真正的研究，为未来五、六、七、八年内在通往超级智能的道路上所需的所有突破做好准备——同时利用我们拥有GPT系列模型的优势，我们可以在其基础上进行开发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when I think about the MAI roadmap, we are going to build a first-class superintelligence team. We are going to continue to drop, and do it in the open, some of these models. They will either be used in our products, because they're going to be latency-friendly, cost-friendly, or what have you, or they'll have some special capability. And we will do real research in order to be ready for the next five, six, seven, eight breakthroughs that are all needed on this march towards superintelligence—while exploiting the advantage we have of having the GPT family that we can work on top of as well.</p>
</details>

### 资本密集型转型与全球化新格局

去年下半年，微软暂停了大规模的数据中心扩张计划，放弃了一些租赁站点。我们之所以做出这个决定，是因为我们意识到，如果要把Azure打造成在AI所有阶段——从训练到中间训练、数据生成再到推理——都表现出色的平台，我们就需要整个计算集群的“可替代性”（fungibility）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Since then, let’s call it, in the second half of last year, Microsoft did this big pause, where they let go of a bunch of leasing sites that they were going to take... This goes back a little bit to, what is the hyperscale business all about? One of the key decisions we made was that if we're going to build out Azure to be fantastic for all stages of AI—from training to mid-training to data gen to inference—we just need fungibility of the fleet.</p>
</details>

整个调整过程让我们决定，不再用特定代际的技术去建设大量的容量。因为你必须意识到，到目前为止，我们每18个月为各种OpenAI模型将训练能力提升10倍，我们认识到关键是保持这个发展路径。但更重要的是要有一个平衡，不仅是训练，还要能够在全球范围内为这些模型提供服务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that entire thing caused us basically not to go build a whole lot of capacity with a particular set of generations. Because the other thing you have to realize is that having up to now 10x'ed every 18 months enough training capacity for the various OpenAI models, we realized that the key is to stay on that path. But the more important thing is to have a balance, to not just train, but to be able to serve these models all around the world.</p>
</details>

我不想被某一代技术的大规模部署所束缚。我们刚刚看到了GB200，GB300也即将问世。等到Vera Rubin和Vera Rubin Ultra出现时，数据中心的样子将会大不相同，因为每个机架、每排的功耗会截然不同，冷却要求也会截然不同。这意味着我不想仅仅为了某一代、某一个系列的技术就去建设数千兆瓦的容量。所以我认为，扩张的节奏、可替代性和地理位置、工作负载的多样性、客户的多样性都很重要，而这正是我们努力的方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By the way, the other thing is that I didn't want to get stuck with massive scale of one generation. We just saw the GB200s, the GB300s are coming. By the time I get to Vera Rubin, Vera Rubin Ultra, the data center is going to look very different because the power per rack, power per row, is going to be so different. The cooling requirements are going to be so different. That means I don't want to just go build out a whole number of gigawatts that are only for a one-generation, one family. So I think the pacing matters, the fungibility and the location matters, the workload diversity matters, customer diversity matters and that's what we’re building towards.</p>
</details>

### 驾驭地缘政治：在多极世界中建立信任

如今，技术的政治属性变得非常重要。我们正处在一个至少是美中两极的世界，但欧洲、印度和其他国家也在说：“不，我们也要有主权AI。”微软如何在这个与90年代截然不同的世界中航行？那时，美国是世界上唯一重要的国家，我们的公司产品销往全球。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this seems quite different. Today, the political aspect of technology, of compute… We're sort of in a bipolar world, at least with the US and China, but Europe and India and all these other countries are saying, "No, we're going to have sovereign AI as well." How does Microsoft navigate the difference to the 90s—where there's one country in the world that matters, it's America, and our companies sell everywhere and therefore Microsoft benefits massively—to a world where it is bipolar?</p>
</details>

我认为，美国科技行业和美国政府的首要任务是确保我们不仅进行领先的创新工作，还要在全球范围内共同建立对我们技术堆栈的信任。我常说，美国是一个令人难以置信的地方。它在历史上是独一无二的。它占世界人口的4%，GDP的25%，市值的50%。我认为你应该思考这些比例并反思。那50%的市值之所以存在，坦率地说，是因为世界对美国的信任，无论是对其资本市场，还是对其技术及其在任何特定时期对领先行业的管理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a super critical piece. I think that the key, key priority for the US tech sector and the US government is to ensure that we not only do leading innovative work, but that we also collectively build trust around the world on our tech stack. Because I always say the United States is just an unbelievable place. It's just unique in history. It's 4% of the world's population, 25% of the GDP, and 50% of the market cap. I think you should think about those ratios and reflect on it. That 50% happens because quite frankly the trust the world has in the United States, whether it's its capital markets or whether it's its technology and its stewardship of what matters at any given time in terms of leading sector.</p>
</details>

因此，我赞赏美国政府和科技行业共同采取的任何行动，例如，作为一个行业集体，在世界各地将我们自己的资本置于风险之中。我希望美国政府能为美国公司在世界各地的外国直接投资邀功。这是最少被谈及，但却是美国应该做的最好的营销。这不仅仅是关于所有进入美国的外国直接投资，而是最领先的行业，即这些AI工厂，正在世界各地被创建。由谁创建？由美国和美国公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So therefore I applaud anything that the United States government and the tech sector jointly does to, for example, put our own capital at risk, collectively as an industry, in every part of the world. I would like the USG to take credit for foreign direct investment by American companies all over the world. It's the least talked about, but the best marketing that the United States should be doing is that it's not just about all the foreign direct investment coming into the United States, but the most leading sector, which is these AI factories, are all being created all over the world. By whom? By America and American companies.</p>
</details>

我们从这里开始，然后围绕它建立其他协议，这些协议关乎它们的连续性、它们合法的**主权关切**（sovereignty concerns: 指一个国家对其数据、数字基础设施和技术命运的控制权），无论是关于数据驻留，还是让它们拥有真正的自主权和隐私保障等。事实上，我们对欧洲的承诺值得一读。我们向欧洲做出了一系列承诺，关于我们将如何管理我们在那里的超大规模投资，以便欧盟和欧洲国家拥有主权。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you start there, and then you even build other agreements around it, which are around their continuity, their legitimate sovereignty concerns, around whether it's data residency, for them to have real agency and guarantees on privacy, and so on. In fact, our European commitments are worth reading. We made a series of commitments to Europe on how we will govern our hyperscale investment there such that the European Union and the European countries have sovereignty.</p>
</details>

最终，重要的是在他们的经济中使用AI来创造经济价值。这就是扩散理论，最终，重要的不是领先行业，而是利用领先技术创造自己比较优势的能力。我认为这将是根本的核心驱动力。但话虽如此，他们会希望这种能力具有连续性。因此，在某种程度上，我相信总会有一种制衡力量来防止“某个模型获得失控的部署”。这就是为什么开源将永远存在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ultimately, what matters is the use of AI in their economy to create economic value. That's the diffusion theory, which ultimately, it's not the leading sector, but it's the ability to use the leading technology to create your own comparative advantage. So I think that will fundamentally be the core driver. But that said, they will want continuity of that. So in some sense, that's one of the reasons why, I believe, there's always going to be a check to "Hey, can this one model have all the runaway deployment?" That's why open source is always going to be there.</p>
</details>

集中风险和主权，也就是真正的自主权，这两件事将驱动市场结构。你刚刚指出了为什么信任美国技术可能是最重要的特性。甚至可能不是模型的能力。而是，“我能信任你这家公司吗？我能信任你的国家及其机构成为一个长期的供应商吗？”这可能才是赢得世界的关键。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Concentration risk and sovereignty, which is really agency, those are the two things that will drive the market structure. In fact, you just made the point of why trust in American tech is probably the most important feature. It's not even the model capability, maybe. It is, "can I trust you, the company, can I trust you, your country, and its institutions to be a long-term supplier?" That may be the thing that wins the world.</p>
</details>