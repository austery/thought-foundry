---
author: Dwarkesh Patel
date: '2025-11-13'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=8-boBsWcr5A
speaker: Dwarkesh Patel
tags:
  - capital-intensity
  - business-model-transition
  - sovereign-ai
  - market-structure
title: 微软CEO萨提亚·纳德拉：在AI军备竞赛中布局未来
summary: 微软CEO萨提亚·纳德拉深入探讨了公司为通用人工智能（AGI）时代所做的准备。他详细阐述了AI基础设施的巨大规模、从SaaS到资本密集型业务的商业模式转型、与新兴AI公司的激烈竞争，以及在“主权AI”兴起背景下的全球地缘政治策略。纳德拉强调，未来价值将取决于平台生态、模型能力与全球信任的结合。
insight: ''
draft: true
series: ''
category: business
area: market-analysis
project:
  - us-analysis
  - ai-impact-analysis
  - investment-strategy
people:
  - Satya Nadella
  - Dwarkesh Patel
  - Dylan Patel
  - Scott Guthrie
  - Raj Reddy
  - Mustafa Suleyman
  - Karen Simonyan
  - Amar Subramanya
  - Nando de Freitas
  - Jensen Huang
  - Amy Hood
  - Sam Altman
  - Donald Trump
  - David Sacks
companies_orgs:
  - Microsoft
  - SemiAnalysis
  - Azure
  - Google
  - Meta
  - Anthropic
  - OpenAI
  - Cursor
  - Cognition
  - Replit
  - Borland
  - GitHub
  - EMC
  - Salesforce
  - DeepMind
  - X
  - Oracle
  - AWS
  - Nvidia
  - Intel
  - AMD
  - TSMC
  - Iris Energy
  - Nebius
  - Lambda Labs
  - ByteDance
  - Alibaba
  - Deepseek
  - Moonshot
products_models:
  - GPT-5
  - GB200
  - NVLink
  - Vera Rubin Ultra
  - Copilot
  - Windows
  - Microsoft 365
  - Office 365
  - GitHub Copilot
  - Claude Code
  - Codex
  - VS Code
  - Git
  - Agent HQ
  - Mission Control
  - Grok
  - Excel
  - Excel Agent
  - SharePoint
  - Windows 365
  - Cosmos DB
  - SQL DB
  - Azure Foundry
  - Chatbot Arena
  - Gemini 2.5
  - LMArena
  - TPU
  - Cobalt
  - Maia 200
  - ChatGPT
  - Linux
  - Word
media_books: []
status: evergreen
---
### 亲临前线：探访全球最强大的AI数据中心

**Dwarkesh Patel:** 今天我们采访萨提亚·纳德拉。“我们”指的是我和 SemiAnalysis 的创始人迪伦·帕特尔。萨提亚，欢迎你。

**Satya Nadella:** 谢谢。很高兴。感谢你们来到亚特兰大。

**Dwarkesh Patel:** 感谢你带我们参观这个新设施。能亲眼看到真的很酷。

**Satya Nadella:** 当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Dwarkesh Patel: Today we are interviewing Satya Nadella. "We" being me and Dylan Patel, who is founder of SemiAnalysis. Satya, welcome.</p>
<p class="english-text">Satya Nadella: Thank you. It's great. Thanks for coming over to Atlanta.</p>
<p class="english-text">Dwarkesh Patel: Thank you for giving us the tour of the new facility. It's been really cool to see.</p>
<p class="english-text">Satya Nadella: Absolutely.</p>
</details>

萨提亚和微软云与AI执行副总裁斯科特·格思里带我们参观了他们全新的 Fairwater 2 数据中心，这是目前世界上最强大的数据中心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Satya and Scott Guthrie, Microsoft's EVP of Cloud and AI, give us a tour of their brand new Fairwater 2 data center, the current most powerful in the world.</p>
</details>

**Satya Nadella:** 我们试图每18到24个月将训练能力提升10倍。所以，这实际上相当于 GPT-5 训练规模的10倍增长。从网络光学的角度来看，这座建筑中的网络光学器件数量，几乎相当于两年半前整个 Azure 所有数据中心的总和。这里大约有五百万个网络连接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've tried to 10x the training capacity every 18 to 24 months. So this would effectively be a 10x increase from what GPT-5 was trained with. So to put it in perspective in the number of optics, the network optics in this building is almost as much as all of Azure across all our data centers two and a half years ago. It's got like five million network connections.</p>
</details>

**采访者:** 你们在一个区域内的不同站点之间，以及两个区域之间，都有如此巨大的带宽。这是否意味着你们在为未来的扩展性下大赌注，预见到未来会出现某个需要跨越两个完整区域进行训练的庞大模型？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You've got all this bandwidth between different sites in a region and between the two regions. So is this like a big bet on scaling in the future, that you anticipate in the future that there's going to be some huge model that will require two whole different regions to train?</p>
</details>

**Satya Nadella:** 目标是能够为一个大型训练任务聚合这些浮点运算能力，然后将这些跨站点的资源整合在一起。现实情况是，你将用它来进行训练，然后用于数据生成，再用于各种形式的推理。它不会永远只用于一种工作负载。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The goal is to be able to aggregate these flops for a large training job and then put these things together across sites. The reality is you'll use it for training and then you'll use it for data gen, you'll use it for inference in all sorts of ways. It's not like it's going to be used only for one workload forever.</p>
</details>

Fairwater 4，你会在附近看到它正在建设中，它也将接入那个1 petabit 的网络，这样我们就能以非常高的速率将两者连接起来。然后我们通过 AI 广域网连接到密尔沃基，那里我们还在建设多个其他的 Fairwater 数据中心。你可以清楚地看到模型并行和数据并行。这基本上是为整个园区的训练任务和超级计算集群而构建的。通过广域网，你可以连接到威斯康星州的数据中心。你可以真正地运行一个将所有这些资源聚合起来的训练任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Fairwater 4, which you're going to see under construction nearby, will also be on that one petabit network so that we can actually link the two at a very high rate. Then we do the AI WAN connecting to Milwaukee where we have multiple other Fairwaters being built. Literally you can see the model parallelism and the data parallelism. It's kind of built for, essentially, the training jobs, the super pods across this campus. And then with the WAN, you can go to the Wisconsin data center. You literally run a training job with all of them getting aggregated.</p>
</details>

### 终极技术革命？纳德拉的务实视角

**采访者:** 当你回顾过去所有的技术转型——无论是铁路、互联网、可替换零件、工业化，还是云计算——每一次革命从技术被发现到普及并渗透到整个经济体的时间都变得越来越快。许多上过 Dwarkesh 播客的嘉宾认为，这是最后一次技术革命或转型，这一次非常、非常不同。至少从市场上看，在三年内，我们已经看到超大规模云服务商明年的**Capex**（Capital Expenditure: 资本支出，指用于购买或升级物理资产的资金）将达到5000亿美元，这个速度是以往任何革命都无法比拟的。最终状态似乎也大相径庭。你对这个问题的看法，似乎与那些高喊“**AGI**（Artificial General Intelligence: 通用人工智能，指拥有与人类相当或超越人类智慧的AI）即将到来”的“AI信徒”截然不同。我想更深入地了解这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When you look at all the past technological transitions—whether it be railroads or the Internet or replaceable parts, industrialization, the cloud, all of these things—each revolution has gotten much faster in the time it goes from technology discovered to ramp and pervasiveness through the economy. Many folks who have been on Dwarkesh's podcast believe this is the final technological revolution or transition, and that this time is very, very different. At least so far in the markets, in three years we've already skyrocketed to hyperscalers doing $500 billion of capex next year, which is a scale that's unmatched to prior revolutions in terms of speed. The end state seems to be quite different. Your framing of this seems quite different from what I would call the "AI bro" who's like, "AGI is coming." I'd like to understand that more.</p>
</details>

**Satya Nadella:** 我首先也对“这可能是工业革命以来最重大的事件”这个想法感到兴奋。我从这个前提出发。但同时，我也比较脚踏实地，认识到这仍然处于早期阶段。我们已经构建了一些非常有用的东西，看到了这些模型展现出一些很棒的特性，这些规模法则似乎也在起作用。我乐观地认为它们会继续有效。其中一些确实需要真正的科学突破，但也有大量的工程工作等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I start with the excitement that I also feel for the idea that maybe after the Industrial Revolution this is the biggest thing. I start with that premise. But at the same time, I'm a little grounded in the fact that this is still early innings. We've built some very useful things, we're seeing some great properties, these scaling laws seem to be working. I'm optimistic that they'll continue to work. Some of it does require real science breakthroughs, but it's also a lot of engineering and what have you.</p>
</details>

话虽如此，我也认为过去70年的计算发展本身也是一个推动我们前进的进程。我喜欢卡内基梅隆大学图灵奖得主拉吉·雷迪对AI的一个比喻。甚至在AGI概念出现之前，他就用“守护天使”或“认知放大器”来比喻AI。我非常喜欢这个说法。它简单地概括了AI的本质。最终，它对人类的效用是什么？它将成为一个认知放大器和一个守护天使。如果我这样看待它，我就会视其为一种工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That said, I also sort of take the view that even what has been happening in the last 70 years of computing has also been a march that has helped us move. I like one of the things that Raj Reddy has as a metaphor for what AI is. He's a Turing Award winner at CMU. He had this, even pre-AGI. He had this metaphor for AI, it should either be a guardian angel or a cognitive amplifier. I love that. It's a simple way to think about what this is. Ultimately, what is its human utility? It is going to be a cognitive amplifier and a guardian angel. If I view it that way, I view it as a tool.</p>
</details>

但你也可以对此非常神秘化，说它不仅仅是一个工具。它能做所有这些迄今为止只有人类才能做的事情。但过去许多技术也是如此。曾经有很多事情只有人类能做，然后我们有了能做这些事的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then you can also go very mystical about it and say this is more than a tool. It does all these things, which only humans did before so far. But that has been the case with many technologies in the past. Only humans did a lot of things, and then we had tools that did them.</p>
</details>

### “萨提亚代币”的价值：AI是工具还是代理？

**采访者:** 我们不必在这里纠结于定义，但可以这样想：也许需要五年、十年、二十年。在某个时刻，一台机器最终会产出“萨提亚代币”，而微软董事会认为这些“萨提亚代币”非常有价值。你现在接受采访，浪费了多少这种经济价值？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We don't have to get wrapped up in the definition here, but one way to think about it is, maybe it takes five years, ten years, twenty years. At some point, eventually a machine is producing Satya tokens, and the Microsoft board thinks that Satya tokens are worth a lot. How much are you wasting of this economic value by interviewing Satya?</p>
</details>

**Satya Nadella:** 我可付不起“萨提亚代币”的API成本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I could not afford the API costs of Satya tokens.</p>
</details>

**采访者:** 无论你怎么称呼它，“萨提亚代币”是工具还是代理，都无所谓。现在，如果你的模型成本是每百万个代币几美元或几美分，那么利润扩张的空间就非常巨大了，因为一百万个“萨提亚代币”的价值非常高。我的问题是，这部分利润流向何方？微软在其中占据多大比例？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whatever you want to call it, are the Satya tokens a tool or an agent, whatever. Right now, if you have models that cost on the order of dollars or cents per million tokens, there's just an enormous room for margin expansion there, where a million tokens of Satya are worth a lot. Where does that margin go and what level of that margin is Microsoft involved in is the question I have.</p>
</details>

**Satya Nadella:** 在某种程度上，这又回到了根本问题：经济增长的前景究竟会是怎样？公司的形态会是怎样？生产力会是怎样？对我来说，这正是我认为需要关注的地方。如果工业革命在技术扩散70年后才开始带来经济增长，这是我们需要记住的另一件事。即使这次技术扩散得很快，要实现真正的经济增长，它必须扩散到足以改变工作、工作产物和工作流程的程度。所以，我认为我们不应低估一家公司要实现真正变革所需的变革管理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In some sense this goes back again to, essentially, what's the economic growth picture going to really look like? What's the firm going to look like? What's productivity going to look like? That to me is where, again, if the Industrial Revolution created… After 70 years of diffusion is when you started seeing the economic growth. That's the other thing to remember. Even if the tech is diffusing fast this time around, for true economic growth to appear it has to diffuse to a point where the work, the work artifact, and the workflow has to change. So that's one place where I think the change management required for a corporation to truly change is something we shouldn't discount.</p>
</details>

**采访者:** 展望未来，人类和他们产生的代币是否会获得更高的杠杆作用，无论是未来的“Dwarkesh代币”还是“Dylan代币”？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Going forward, do humans and the tokens they produce get higher leverage, whether it's the Dwarkesh or the Dylan tokens of the future?</p>
</details>

**Satya Nadella:** 想想技术的数量。没有技术，你能运营 SemiAnalysis 或者这个播客吗？不可能，以你现在达到的规模，绝无可能。所以问题是，这个规模会是多大？它是否会因为新技术的出现而被放大10倍？绝对会。因此，无论你的收入达到某个数字，还是你的观众达到某个数字，我认为这都会发生。关键在于，工业革命花了70年，甚至150年才发生的事情，现在可能在20年、25年内发生。如果幸运的话，我希望能将工业革命200年里发生的事情压缩到20年内。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Think about the amount of technology. Would you be able to run SemiAnalysis or this podcast without technology? No chance, at the scale that you have been able to achieve, there’s no chance. So the question is, what's that scale? Is it going to be 10x'ed with something that comes through? Absolutely. Therefore, whether you're ramped to some revenue number or you're ramped to some audience number or what have you, that I think is what's going to happen. The point is, what took 70 years, maybe 150 years for the Industrial Revolution, may happen in 20 years, 25 years. I would love to compress what happened in 200 years of the Industrial Revolution into a 20-year period, if we're lucky.</p>
</details>

### AI时代的高成本挑战：重塑SaaS商业模式

**采访者:** 微软在历史上或许是最伟大的软件公司，也是最大的**SaaS**（Software-as-a-Service: 软件即服务，一种通过网络提供软件的模式）公司。你们过去经历了一次转型，从销售Windows许可证和光盘，到现在销售365订阅服务。从那次转型到你们今天的业务，又在发生另一次转型。SaaS的每用户增量成本极低。研发成本和客户获取成本很高。这在某种程度上解释了为什么不是微软，而是其他SaaS公司在市场上表现非常糟糕，因为AI的**COGS**（Cost of Goods Sold: 销售成本）太高了，这完全打破了这些商业模式的运作方式。作为或许是最伟大的SaaS公司，你如何带领微软转型到这个COGS至关重要、每用户增量成本不同的新时代？因为现在你们的收费方式是，“嘿，Copilot 20美元”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Microsoft historically has been perhaps the greatest software company, the largest software-as-a-service company. You've gone through a transition in the past where you used to sell Windows licenses and disks of Windows or Microsoft, and now you sell subscriptions to 365. As we go from that transition to where your business is today, there's also a transition going on after that. Software-as-a-service has incredibly low incremental cost per user. There's a lot of R&D, there's a lot of customer acquisition costs. This is sort of why, not Microsoft, but the SaaS companies have underperformed massively in the markets, because the COGS of AI is just so high, and that just completely breaks how these business models work. How do you, as perhaps the greatest software-as-a-service company, transition Microsoft to this new age where COGS matters a lot and the incremental cost per user is different? Because right now you're charging like, "Hey, it's 20 bucks for Copilot."</p>
</details>

**Satya Nadella:** 这是个很好的问题，因为在某种程度上，商业模式本身的杠杆将保持相似。如果你看看从消费者到企业的各种模型菜单，总会有一些广告单元、一些交易、一些为构建AI设备的人带来的设备毛利。还会有消费者和企业的订阅服务，然后是按量消费。所以我仍然认为这些都是计费方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a great question because in some sense with the business models themselves, the levers are going to remain similar. If you look at the menu of models starting from consumer all the way, there will be some ad unit, there will be some transaction, there will be some device gross margin for somebody who builds an AI device. There will be subscriptions, consumer and enterprise, and then there'll be consumption. So I still think those are all the meters.</p>
</details>

就你提到的订阅而言，直到现在，人们喜欢订阅是因为他们可以做预算。订阅本质上是封装在其中的一些消费权利的授权。所以我认为这在某种程度上变成了一个定价决策。你被授权消费多少，如果你看看所有的编程订阅服务，它们基本上就是这样，对吧？然后你有专业版、标准版等等。所以我认为定价和利润结构将以这种方式分层。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To your point, what is a subscription? Up to now, people like subscriptions because they can budget for them. They are essentially entitlements to some consumption rights that come encapsulated in a subscription. So I think that in some sense becomes a pricing decision. How much consumption you are entitled to is, if you look at all the coding subscriptions, kind of what they are, right? Then you have the pro tier, the standard tier, and what have you. So I think that's how the pricing and the margin structures will get tiered.</p>
</details>

有趣的是，在微软，对我们来说好消息是我们涉足了所有这些计费方式的业务。在整个产品组合层面，我们几乎拥有从按量消费、订阅到所有其他消费者杠杆的全部业务。我认为时间会告诉我们，哪些模式在哪些类别中是合理的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The interesting thing is that at Microsoft, the good news for us is we are in that business across all those meters. At a portfolio level, we pretty much have consumption, subscriptions, to all of the other consumer levers as well. I think time will tell which of these models make sense in what categories.</p>
</details>

关于SaaS方面，既然你提到了，有一点我思考很多。以Office 365或Microsoft 365为例。拥有较低的**ARPU**（Average Revenue Per User: 每用户平均收入）是件好事，因为这里有个有趣的现象。在从服务器向云转型的过程中，我们曾经问自己一个问题：“天哪，如果我们所做的只是把那些使用我们Office许可证和Office服务器的用户转移到云上，而我们还要承担COGS，这不仅会压缩我们的利润，还会让我们从根本上成为一家盈利能力较差的公司。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing on the SaaS side, since you brought it up, which I think a lot about. Take Office 365 or Microsoft 365. Having a low ARPU is great, because here's an interesting thing. During the transition from server to cloud, one of the questions we used to ask ourselves is, "Oh my God, if all we did was just basically move the same users who were using our Office licenses and our Office servers at the time to the cloud, and we had COGS, this is going to not only shrink our margins but we'll be fundamentally a less profitable company."</p>
</details>

然而实际发生的是，向云的迁移极大地扩展了市场。我们在印度只卖了很少的服务器，销量不大。但在云时代，突然之间印度的每个人也都能负担得起零散地购买服务器，即IT成本。事实上，我之前没有意识到的最大一点是，人们在SharePoint下购买存储所花费的巨额资金。实际上，EMC最大的业务板块可能就是为SharePoint提供存储服务器。所有这些在云时代都消失了，因为没有人需要去购买。事实上，这曾是营运资本，意味着现金流出。所以，云极大地扩展了市场。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Except what happened was the move to the cloud expanded the market like crazy. We sold a few servers in India, we didn't sell much. Whereas in the cloud suddenly everybody in India also could afford fractionally buying servers, the IT cost. In fact, the biggest thing I had not realized, for example, was the amount of money people were spending buying storage underneath SharePoint. In fact, EMC's biggest segment may have been storage servers for SharePoint. All that sort of dropped in the cloud because nobody had to go buy. In fact, it was working capital, meaning basically, it was cash flow out. So it expanded the market massively.</p>
</details>

这次的AI也是如此。以编程为例，我们用几十年时间构建了GitHub和VS Code，突然之间，编程助手在一年内就变得如此庞大。我认为这也会发生，即市场会大规模扩张。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this AI thing will be that. If you take coding, what we built with GitHub and VS Code over decades, suddenly the coding assistant is that big in one year. That I think is what's going to happen as well, which is the market expands massively.</p>
</details>

### 市场扩张与激烈竞争：GitHub Copilot的启示

**采访者:** 问题是，市场会扩张，但触及微软的收入部分会扩张吗？Copilot就是一个例子。根据迪伦的数据，今年早些时候，GitHub Copilot的收入大约是5亿美元，而且没有势均力敌的竞争对手。而现在，你有Claude Code、Cursor和Copilot，收入都差不多，大约在10亿美元。Codex也在追赶，大约在7-8亿美元。所以问题是，在微软所能触及的所有领域，微软版的Copilot有什么优势？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There’s a question of, the market will expand, but will the parts of the revenue that touch Microsoft expand? Copilot is an example. If you look earlier this year, according to Dylan's numbers, GitHub Copilot revenue was like $500 million or something like that and there were no close competitors. Whereas now you have Claude Code, Cursor, and Copilot with around similar revenue, around a billion. Codex is catching up around $700–800 million. So the question is, across all the surfaces that Microsoft has access to, what is the advantage that Microsoft's equivalents of Copilot have?</p>
</details>

**Satya Nadella:** 顺便说一句，我喜欢这张图表。我喜欢这张图表的原因有很多。第一，我们仍然排在首位。第二，这里列出的所有公司都是在过去四五年里诞生的。对我来说，这是最好的迹象。你有新的竞争对手，新的生存问题。当你说，现在是谁？Claude会干掉你，Cursor会干掉你，而不是Borland。谢天谢地。这意味着我们走在正确的方向上。就是这样。我们从无到有达到这个规模，这就是市场扩张。这就像云计算一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By the way, I love this chart. I love this chart for so many reasons. One is we're still on the top. Second is all these companies that are listed here are all companies that have been born in the last four or five years. That to me is the best sign. You have new competitors, new existential problems. When you say, who's it now? Claude's going to kill you, Cursor is going to kill you, it's not boreland. Thank God. That means we are in the right direction. This is it. The fact that we went from nothing to this scale is the market expansion. This is like the cloud-like stuff.</p>
</details>

从根本上说，编程和AI这个类别可能会成为最大的类别之一。它是软件工厂类别。事实上，它可能比知识工作还要大。我想对此保持开放的心态。我们将面临激烈的竞争。这是你的观点，非常棒。但我很高兴我们把已有的优势转化到这个领域，现在我们必须去竞争。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Fundamentally, this category of coding and AI is probably going to be one of the biggest categories. It is the software factory category. In fact, it may be bigger than knowledge work. I want to keep myself open-minded about it. We're going to have tough competition. That's your point, which is a great one. But I'm glad we have parlayed what we had into this and now we have to compete.</p>
</details>

在竞争方面，即使在我们刚刚结束的上个季度，我们发布了季度公告，我想我们的订阅用户从2000万增长到了2600万。我对我们的订阅增长和发展方向感到满意。但更有趣的是，猜猜所有这些生成大量代码的其他公司的代码库都去哪儿了？它们都去了GitHub。GitHub在代码库创建、拉取请求等所有方面都创下了历史新高。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the competing side, even in the last quarter we just finished, we did our quarterly announcement and I think we grew from 20 to 26 million subs. I feel good about our sub growth and where the direction of travel on that is. But the more interesting thing that has happened is, guess where all the repos of all these other guys who are generating lots and lots of code go? They go to GitHub. GitHub is at an all-time high in terms of repo creation, PRs, everything.</p>
</details>

### 价值归于何处：模型公司与平台生态的未来之争

**采访者:** 这个问题之所以重要，不仅关乎GitHub，更从根本上关乎Office和微软提供的所有其他软件。对于AI如何发展，一种看法是模型将继续受到限制，你需要始终保持这种直接可见的可观察性。另一种看法是，随着时间的推移，这些现在执行需要两分钟任务的模型，未来将执行需要10分钟、30分钟的任务。再往后，它们可能会自主完成数天的工作。那时，模型公司可能会为访问一个真正的“同事”收取数千美元，这个“同事”可以使用任何用户界面与人类交流，并在不同平台间迁移。如果我们越来越接近那个未来，为什么不是那些利润越来越高的模型公司攫取了所有利润？为什么随着AI能力越来越强，那些提供“脚手架”的平台会变得越来越不重要？这关系到Office的现状与未来那些仅仅从事知识工作的“同事”之间的对比。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess the reason to focus on this question is that it's not just about GitHub, but fundamentally about Office and all the other software that Microsoft offers. One vision you could have about how AI proceeds is that the models are going to keep being hobbled and you'll need this direct visible observability all the time. Another vision is that over time these models which are now doing tasks that take two minutes, in the future, they'll be doing tasks that take 10, 30 minutes. In the future, maybe they're doing days worth of work autonomously. Then the model companies are charging thousands of dollars maybe for access to, really, a coworker which could use any UI to communicate with their human and migrate between platforms. If we’re getting closer to that, why aren't the model companies that are just getting more and more profitable, the ones that are taking all the margin? Why is the place where the scaffolding happens, which becomes less and less relevant as the AI becomes more capable, going to be that important? That goes to Office as it exists now versus coworkers that are just doing knowledge work.</p>
</details>

**Satya Nadella:** 这是个很好的观点。所有的价值都会转移到模型上吗？还是会在“脚手架”和模型之间分配？我认为时间会证明一切。但我的基本观点是，激励结构会变得清晰。以信息工作为例，甚至以编程为例。实际上，我在GitHub Copilot中最喜欢的一个设置叫做“自动”，它会自动优化。我买了一个订阅，然后“自动”模式会开始为我要求它做的事情进行选择和优化。它甚至可以完全自主。它可以在多个模型之间套利可用的代币来完成一项任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's a great point. Does all the value migrate just to the model? Or does it get split between the scaffolding and the model? I think that time will tell. But my fundamental point also is that the incentive structure gets clear. Let’s take information work, or take even coding. Already in fact, one of my favorite settings in GitHub Copilot is called auto, which will just optimize. In fact I buy a subscription and the auto one will start picking and optimizing for what I am asking it to do. It could even be fully autonomous. It could arbitrage the tokens available across multiple models to go get a task done.</p>
</details>

如果你接受这个论点，那么模型就会成为商品。尤其是在开源模型的情况下，你可以选择一个检查点，拿一些你的数据，然后你就能看到效果。我认为我们所有人，无论是Cursor还是微软，都会开始看到一些内部自研的模型。然后你会把大部分任务卸载给它们。所以一个论点是，如果你赢得了“脚手架”——也就是今天处理所有这些智能问题的残缺或不平滑之处，这是你必须做的——那么你就会垂直整合到模型中，因为你将拥有数据的流动性和其他优势。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you take that argument, the commodity there will be models. Especially with open source models, you can pick a checkpoint and you can take a bunch of your data and you're seeing it. I think all of us will start, whether it's from Cursor or from Microsoft, seeing some in-house models even. And then you'll offload most of your tasks to it. So one argument is if you win the scaffolding—which today is dealing with all the hobbling problems or the jaggedness of these intelligence problems, which you kind of have to—if you win that, then you will vertically integrate yourself into the model just because you will have the liquidity of the data and what have you.</p>
</details>

将会有足够多的检查点可用。这是另一回事。从结构上讲，我认为世界上总会有一个相当强大的开源模型，你可以用它，只要你有可以配合使用的东西，也就是数据和“脚手架”。我可以论证，如果你是一家模型公司，你可能会有“赢家的诅咒”。你可能做了所有艰苦的工作，取得了令人难以置信的创新，但它离被商品化只有一次复制的距离。然后，拥有用于基础和上下文工程的数据以及数据流动性的人，就可以拿那个检查点去训练它。所以我认为这个论点可以从两个方面来阐述。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are enough and more checkpoints that are going to be available. That's the other thing. Structurally, I think there will always be an open source model that will be fairly capable in the world that you could then use, as long as you have something that you can use that with, which is data and a scaffolding. I can make the argument that if you're a model company, you may have a winner's curse. You may have done all the hard work, done unbelievable innovation, except it's one copy away from that being commoditized. Then the person who has the data for grounding and context engineering, and the liquidity of data can then go take that checkpoint and train it. So I think the argument can be made both ways.</p>
</details>

**采访者:** 总结一下你的话，有两种世界观。一种是，市面上有很多不同的模型，开源模型也存在。模型之间会有差异，这在一定程度上决定了谁赢谁输。但“脚手架”才是让你获胜的关键。另一种观点是，模型才是关键的知识产权。每个人都在激烈竞争，存在着“嘿，我可以用Anthropic或OpenAI”的情况。你可以从收入图表中看到这一点。OpenAI的收入在他们最终拥有一个与Anthropic能力相似（尽管方式不同）的代码模型后开始飙升。所以有一种观点认为，模型公司才是攫取所有利润的一方。因为如果你看今年，至少在Anthropic，他们的推理业务毛利率从远低于40%上升到年底的60%以上。尽管中国开源模型比以往任何时候都多，但他们的利润率仍在扩大。OpenAI、Google、X/Grok现在都很有竞争力。所有这些公司现在都很有竞争力，但尽管如此，模型层的利润率还是大幅扩张了。你怎么看？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Unpacking what you said, there's two views of the world. One is that there are so many different models out there. Open source exists. There will be differences between the models that will drive some level of who wins and who doesn't. But the scaffolding is what enables you to win. The other view is that, actually, models are the key IP. And everyone's in a tight race and there's some, "Hey, I can use Anthropic or OpenAI." You can see this in the revenue charts. OpenAI's revenue started skyrocketing once they finally had a code model with similar capabilities to Anthropic, although in different ways. There's the view that the model companies are the ones that garner all the margin. Because if you look across this year, at least at Anthropic, their gross margins on inference went from well below 40% to north of 60% by the end of the year. The margins are expanding there despite more Chinese open source models than ever. OpenAI is competitive, Google is competitive, X/Grok is now competitive. All these companies are now competitive, and yet despite this, the margins have expanded at the model layer significantly. How do you think about that?</p>
</details>

**Satya Nadella:** 这是个很好的问题。也许几年前，人们会说：“哦，我只要包装一个模型就能建立一家成功的公司。”这种想法可能已经被证伪了，仅仅因为模型能力和所用工具的限制，尤其是工具。但有趣的是，当我看到Office 365，甚至我们构建的这个叫做Excel Agent的小东西时。很有趣。Excel Agent不是一个UI层的包装器。它实际上是一个位于中间层的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a great question. Perhaps a few years ago people were saying, "Oh, I could just wrap a model and build a successful company." That has probably gotten debunked just because of the model capabilities, and the tools used, in particular. But the interesting thing is, when I look at Office 365, let's take even this little thing we built called Excel Agent. It's interesting. Excel Agent is not a UI-level wrapper. It's actually a model that is in the middle tier.</p>
</details>

在这种情况下，因为我们拥有GPT家族的所有知识产权，我们正在把它放到Office系统的核心中间层，教它原生理解Excel意味着什么，包括其中的一切。这不仅仅是“嘿，我只有一个像素级别的理解”。我对Excel的所有原生构件都有完整的理解。因为你想想，如果我要给它一些推理任务，我甚至需要修正我犯的推理错误。这意味着我不仅要看到像素，我还需要能够看到，“哦，我那个公式搞错了”，我需要理解这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this case, because we have all the IP from the GPT family, we are taking that and putting it into the core middle tier of the Office system to teach it what it means to natively understand Excel, everything in it. It's not just, "Hey, I just have a pixel-level understanding." I have a full understanding of all the native artifacts of Excel. Because if you think about it, if I'm going to give it some reasoning task, I need to even fix the reasoning mistakes I make. That means I need to not just see the pixels, I need to be able to see, "Oh, I got that formula wrong," and I need to understand that.</p>
</details>

在某种程度上，所有这些都不是在UI包装层用一些提示完成的，而是在中间层通过教它所有Excel的工具来完成的。我基本上是给它一个markdown来教它成为一个复杂的Excel用户所需的技能。这有点奇怪，它有点回到了AI大脑的概念。你不仅仅是在传统意义上构建Excel的业务逻辑。你是在传统意义上的Excel业务逻辑之上，用这个知道如何使用工具的模型，包装了一个认知层。在某种意义上，Excel将捆绑一个分析师和所有使用的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To some degree, that's all being done not at the UI wrapper level with some prompt, but it's being done in the middle tier by teaching it all the tools of Excel. I'm giving it essentially a markdown to teach it the skills of what it means to be a sophisticated Excel user. It's a weird thing that it goes back a little bit to the AI brain. You're building not just Excel, business logic in its traditional sense. You're taking the Excel business logic in the traditional sense and wrapping essentially a cognitive layer to it, using this model which knows how to use the tool. In some sense, Excel will come with an analyst bundled in and with all the tools used.</p>
</details>

### 双轨并行：微软的自研模型与OpenAI合作战略

**采访者:** 你说你们不仅会有基础设施，还会有自己的模型。目前，微软AI两个月前发布的最新模型在Chatbot Arena上排名第36位。你们显然拥有OpenAI的知识产权。在你同意的范围内，这似乎是落后的。为什么会这样，特别是考虑到理论上你们有权分叉OpenAI的单一代码库或蒸馏他们的模型，尤其是如果拥有一个领先的模型公司是你们战略的重要组成部分？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Speaking of model companies, you say not only will you have the infrastructure, you'll have the model itself. Right now, Microsoft AI's most recent model that was released two months ago is 36 in Chatbot Arena. You obviously have the IP rights to OpenAI. To the extent you agree with that, it seems to be behind. Why is that the case, especially given the fact that you theoretically have the right to fork OpenAI's monorepo or distill their models, especially if it's a big part of your strategy that you need to have a leading model company?</p>
</details>

**Satya Nadella:** 首先，我们绝对会最大限度地在我们所有产品中使用OpenAI的模型。这是我们未来七年将继续做的核心事情，不仅是使用它，还要在其上增加价值。这就是分析师和Excel Agent这类工作的意义所在，我们将在GPT家族的基础上进行强化学习微调。我们会利用我们独特的数据资产进行一些中间训练，并构建能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First of all, we are absolutely going to use the OpenAI models to the maximum across all of our products. That's the core thing that we're going to continue to do all the way for the next seven years, and not just use it but then add value to it. That's where the analyst and this Excel agent, these are all things that we will do where we'll do RL fine-tuning. We'll do some mid-training runs on top of a GPT family where we have unique data assets and build capability.</p>
</details>

对于MAI（微软AI）模型，我认为我们的思考方式是，新协议的好消息是我们可以非常、非常清楚地表明，我们将建立一个世界级的超级智能团队，并以雄心壮志去追求它。但同时，我们也会利用这段时间来明智地使用这两者。这意味着我们一方面会非常注重产品，另一方面会非常注重研究。因为我们可以使用GPT家族，我最不想做的就是以一种重复且价值不大的方式使用我的计算资源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With the MAI model, the way that I think we’re going to think about it is that the good news here with the new agreement is we can be very, very clear that we're going to build a world-class superintelligence team and go after it with a high ambition. But at the same time, we're also going to use this time to be smart about how to use both these things. That means we will, on one end, be very product-focused, and on the other end, be very research-focused. Because we have access to the GPT family, the last thing I want to do is use my flops in a way that is just duplicative and doesn't add much value.</p>
</details>

我想能够利用我们用于生成GPT家族的计算资源来最大化其价值，而我的MAI计算资源则用于……比如我们推出的图像模型，我认为它在图像竞技场中排名第九。我们用它来优化成本，它已经用在Copilot和Bing上，我们将继续使用它。我们在Copilot中有一个音频模型，它具有个性和其他特性。我们为我们的产品优化了它。所以我们会做这些。即使在LMArena上，我们从文本模型开始，它首次亮相时排名第13位。顺便说一句，它只用了大约15000个H100s训练，是一个非常小的模型。所以，这再次证明了核心能力、指令遵循和其他一切。我们想确保我们能达到最先进的水平。这向我们展示了，考虑到规模法则，如果我们给它更多的计算资源，我们能做到什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I want to be able to take the flops that we use to generate a GPT family and maximize its value, while my MAI flops are being used for… Let's take the image model that we launched, which I think is at number nine in the image arena. We're using it both for cost optimization, it's on Copilot, it's in Bing, and we're going to use that. We have an audio model in Copilot. It's got personality and what have you. We optimized it for our product. So we will do those. Even on the LMArena, we started on the text one and it debuted at like 13. By the way, it was done only on around 15,000 H100s. It was a very small model. So it was, again, to prove out the core capability, the instruction following, and everything else. We wanted to make sure we could match what was state of the art. That shows us, given scaling laws, what we are capable of doing if we gave more flops to it.</p>
</details>

接下来我们将要做的是一个全能模型，我们将把我们在音频、图像和文本方面的工作结合起来。这将是MAI方面的下一个里程碑。所以当我考虑MAI的路线图时，我们将建立一个一流的超级智能团队。我们将继续公开发布其中一些模型。它们要么会因为延迟友好、成本友好或其他特性而被用于我们的产品，要么会具备一些特殊能力。我们将进行真正的研究，为未来五、六、七、八年内迈向超级智能所需的所有突破做好准备——同时利用我们拥有GPT家族的优势，我们可以在其基础上进行开发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The next thing we will do is an omni-model where we will take the work we have done in audio, what we have done in image, and what we have done in text. That will be the next pit stop on the MAI side. So when I think about the MAI roadmap, we are going to build a first-class superintelligence team. We are going to continue to drop, and do it in the open, some of these models. They will either be used in our products, because they're going to be latency-friendly, cost-friendly, or what have you, or they'll have some special capability. And we will do real research in order to be ready for the next five, six, seven, eight breakthroughs that are all needed on this march towards superintelligence—while exploiting the advantage we have of having the GPT family that we can work on top of as well.</p>
</details>

### 人才战争与持续学习：AI的指数级反馈循环

**采访者:** 假设七年后，你们不再能使用OpenAI的模型。微软会怎么做来确保自己是领先的，或者拥有一个领先的AI实验室？如今，OpenAI取得了许多突破，无论是在扩展性还是推理方面。或者谷歌取得了像Transformer这样的所有突破。但这同时也是一场激烈的人才争夺战。你看到Meta在人才上花费了超过200亿美元。你看到Anthropic去年从谷歌挖走了整个Blueshift推理团队。你看到Meta最近又从谷歌挖走了一个庞大的推理和后训练团队。这类人才战争资本密集度非常高。可以说，如果你在基础设施上花费1000亿美元，你也应该在利用这些基础设施的人身上花费相应的资金，这样他们才能更有效地取得这些新突破。人们如何能相信微软会拥有一支世界级的团队，能够取得这些突破？一旦你们决定打开资金的水龙头——你们现在在资本效率上做得很好，这似乎很明智，不浪费钱做重复的工作——但一旦你们决定需要这么做，人们怎么能说，“哦是的，现在你们可以冲到前五的模型了”？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Say we roll forward seven years, you no longer have access to OpenAI models. What does Microsoft do to make sure they are leading, or have a leading AI lab? Today, OpenAI has developed many of the breakthroughs, whether it be scaling or reasoning. Or Google's developed all the breakthroughs like transformers. But it is also a big talent game. You've seen Meta spend north of $20 billion on talent. You've seen Anthropic poach the entire Blueshift reasoning team from Google last year. You've seen Meta poach a large reasoning and post-training team from Google more recently. These sorts of talent wars are very capital intensive. Arguably, if you're spending $100 billion on infrastructure, you should also spend X amount of money on the people using the infrastructure so that they're more efficiently making these new breakthroughs. What confidence can one get that Microsoft will have a team that's world-class that can make these breakthroughs? Once you decide to turn on the money faucet—you're being a bit capital efficient right now, which is smart it seems, to not waste money doing duplicative work—but once you decide you need to, how can one say, "Oh yeah, now you can shoot up to the top five model?"</p>
</details>

**Satya Nadella:** 归根结底，我们将建立一支世界级的团队，而且我们已经开始组建一支世界级的团队了。我们有Mustafa加入，我们有Karen。我们有Amar Subramanya，他在Gemini 2.5做了很多后训练工作，现在在微软。Nando，他在DeepMind做了很多多媒体工作，也在这里。我们将建立一支世界级的团队。事实上，甚至在本周晚些时候，Mustafa就会发布一些东西，更清晰地说明我们的实验室将要做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At the end of the day, we're going to build a world-class team and we already have a world-class team that's beginning to be assembled. We have Mustafa coming in, we have Karen. We have Amar Subramanya who did a lot of the post-training at Gemini 2.5 who's at Microsoft. Nando, who did a lot of the multimedia work at DeepMind, is there. We're going to build a world-class team. In fact, later this week even, Mustafa will publish something with a little more clarity on what our lab is going to go do.</p>
</details>

### 超大规模的资本棋局：微软为何暂停又重启数据中心扩张？

**采访者:** 去年，微软曾有望成为遥遥领先的最大基础设施提供商。你们在2023年行动最早，所以你们出去获取了所有资源，包括租赁数据中心、开始建设、确保电力等等。你们有望在2026或2027年击败亚马逊。当然到2028年你们肯定会击败他们。但从那以后，我们称之为去年下半年，微软进行了一次大的暂停，放弃了一批他们本打算租赁的场地，然后谷歌、Meta、亚马逊在某些情况下，还有Oracle，接手了这些场地。我们现在正坐在世界上最大的数据中心之一，所以显然不是所有项目都停了，你们仍在疯狂扩张。但确实有一些你们停止了工作的场地。你们为什么这么做？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So last year Microsoft was on path to be the largest infrastructure provider by far. You were the earliest in 2023, so you went out there, you acquired all the resources in terms of leasing data centers, starting construction, securing power, everything. You guys were on pace to beat Amazon in 2026 or 2027. Certainly by 2028 you were going to beat them. Since then, let’s call it, in the second half of last year, Microsoft did this big pause, where they let go of a bunch of leasing sites that they were going to take, which then Google, Meta, Amazon in some cases, Oracle, took these sites. We're sitting in one of the largest data centers in the world, so obviously it's not everything, you guys are expanding like crazy. But there are sites that you just stopped working on. Why did you do this?</p>
</details>

**Satya Nadella:** 这又回到了一个根本问题，超大规模云业务到底是什么？我们做出的一个关键决定是，如果我们要把Azure打造成在AI的各个阶段——从训练到中间训练，再到数据生成和推理——都表现出色，我们就需要整个计算集群的通用性。这整个考量导致我们基本上没有用特定代际的技术去建设大量的容量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This goes back a little bit to, what is the hyperscale business all about? One of the key decisions we made was that if we're going to build out Azure to be fantastic for all stages of AI—from training to mid-training to data gen to inference—we just need fungibility of the fleet. So that entire thing caused us basically not to go build a whole lot of capacity with a particular set of generations.</p>
</details>

因为你必须意识到的另一件事是，到目前为止，我们每18个月为各种OpenAI模型将训练能力提升10倍，我们意识到关键是保持这条路径。但更重要的是要有一个平衡，不仅是训练，还要能够在全球范围内服务这些模型。因为归根结底，变现的速度将决定我们能否继续投入资金。然后，基础设施需要我们支持多种模型。所以一旦我们确定了这一点，我们就对我们正在走的道路进行了路线修正。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because the other thing you have to realize is that having up to now 10x'ed every 18 months enough training capacity for the various OpenAI models, we realized that the key is to stay on that path. But the more important thing is to have a balance, to not just train, but to be able to serve these models all around the world. Because at the end of the day, the rate of monetization is what will then allow us to keep funding. And then the infrastructure was going to need us to support multiple models. So once we said that that's the case, we just course-corrected to the path we're on.</p>
</details>

### AI的地缘政治：主权、信任与全球科技新格局

**采访者:** 当我们环顾世界，美国在许多技术栈中占据主导地位。美国通过微软拥有Windows，即使在中国，它也是主要的操作系统。当然，还有开源的Linux，但Windows在中国的个人电脑上无处不在。你看看Word，它无处不在。你看看所有这些各种各样的技术，它们无处不在。微软和其他公司也在其他地方发展。他们在欧洲、印度和所有其他地方，在东南亚、拉丁美洲和非洲建设数据中心。在所有这些不同的地方，你们都在建设容量。但这似乎有很大的不同。今天，技术的政治层面，计算的政治层面……美国政府并不关心互联网泡沫。但现在看来，美国政府以及世界各地的其他政府都非常关心AI。问题是，我们现在处于一个两极世界，至少是美国和中国，但欧洲、印度和所有其他国家都在说，“不，我们也要有主权AI。”微软如何驾驭这种与90年代的不同——那时世界上只有一个国家重要，那就是美国，我们的公司向世界各地销售产品，因此微软获得了巨大的利益——到一个两极化的世界？在这个世界里，微软不一定能理所当然地赢得整个欧洲或印度或新加坡。实际上存在着主权AI的努力。你在这里的思考过程是什么，你如何看待这个问题？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As we look across the world, America has dominated many tech stacks. The US owns Windows through Microsoft, which is deployed even in China, that's the main operating system. Of course, there's Linux, which is open source, but Windows is deployed everywhere in China on personal computers. You look at Word, it's deployed everywhere. You look at all these various technologies, it's deployed everywhere. And Microsoft and other companies have grown elsewhere. They're building data centers in Europe and in India and in all these other places, in Southeast Asia and LatAm and Africa. In all of these different places, you're building capacity. But this seems quite different. Today, the political aspect of technology, of compute… The US administration didn't care about the dot-com bubble. It seems like the US administration, as well as every other administration around the world, cares a lot about AI. The question is, we're sort of in a bipolar world, at least with the US and China, but Europe and India and all these other countries are saying, "No, we're going to have sovereign AI as well." How does Microsoft navigate the difference to the 90s—where there's one country in the world that matters, it's America, and our companies sell everywhere and therefore Microsoft benefits massively—to a world where it is bipolar? Where Microsoft can't just necessarily have the right to win all of Europe or India or Singapore. There are actually sovereign AI efforts. What is your thought process here and how do you think about this?</p>
</details>

**Satya Nadella:** 这是一个极其关键的部分。我认为，美国科技行业和美国政府的首要任务是确保我们不仅做领先的创新工作，而且我们还要共同在世界范围内建立对我们技术栈的信任。因为我常说，美国是一个令人难以置信的地方。它在历史上是独一无二的。它占世界人口的4%，GDP的25%，市值的50%。我认为你应该思考这些比例并反思它。那50%的市值之所以存在，坦率地说，是因为世界对美国的信任，无论是对其资本市场，还是对其技术及其在任何特定时期对领先行业的管理。如果这种信任被打破，那对美国来说就不是好日子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a super critical piece. I think that the key, key priority for the US tech sector and the US government is to ensure that we not only do leading innovative work, but that we also collectively build trust around the world on our tech stack. Because I always say the United States is just an unbelievable place. It's just unique in history. It's 4% of the world's population, 25% of the GDP, and 50% of the market cap. I think you should think about those ratios and reflect on it. That 50% happens because quite frankly the trust the world has in the United States, whether it's its capital markets or whether it's its technology and its stewardship of what matters at any given time in terms of leading sector. If that is broken, then that's not a good day for the United States.</p>
</details>

我们从这一点出发，我认为特朗普总统、白宫、大卫·萨克斯，每个人，我想，都明白这一点。因此，我赞赏美国政府和科技行业共同采取的任何行动，例如，作为一个行业集体，在世界各地冒着我们自己的资本风险。我希望美国政府能为美国公司在世界各地的外国直接投资邀功。这是最少被谈论，但却是美国应该做的最好的营销，那就是不仅仅是所有外国直接投资都流向美国，而是最领先的行业，也就是这些AI工厂，正在世界各地被创建。由谁创建？由美国和美国公司。所以你从这里开始，然后你甚至可以围绕它建立其他协议，这些协议关乎它们的连续性、它们合法的**主权**（Sovereignty: 指国家独立自主处理内外事务的最高权力）关切，无论是数据驻留，还是让他们拥有真正的自主权和隐私保障等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We start with that, which I think President Trump gets, the White House, David Sacks, everyone really, I think, gets it. So therefore I applaud anything that the United States government and the tech sector jointly does to, for example, put our own capital at risk, collectively as an industry, in every part of the world. I would like the USG to take credit for foreign direct investment by American companies all over the world. It's the least talked about, but the best marketing that the United States should be doing is that it's not just about all the foreign direct investment coming into the United States, but the most leading sector, which is these AI factories, are all being created all over the world. By whom? By America and American companies. And so you start there, and then you even build other agreements around it, which are around their continuity, their legitimate sovereignty concerns, around whether it's data residency, for them to have real agency and guarantees on privacy, and so on.</p>
</details>

**采访者:** 随着我们在模型层面看到持续学习和网络效应，你认为这种情况会如何发展？你是否期望各国会说，“看，很明显一个或几个模型是最好的，所以我们将使用它们，但我们会制定一些法律，要求权重必须托管在我们的国家”？还是你期望会有这样的推动，即模型必须是在我们国家训练的？也许一个类比是，半导体对经济非常重要，人们希望拥有自己的主权半导体，但台积电就是更好。而且半导体对经济如此重要，以至于你只会去台湾购买半导体。你必须这么做。AI会是这样吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do you see this shaking out as you have this network effect with continual learning and things on the model level? Maybe you have equivalent things at the hyperscaler level as well. Do you expect that the countries will say, "Look, it's clear one model or a couple models are the best, and so we're going to use them, but we're going to have some laws around the weights having to be hosted in our country"? Or do you expect that there will be this push so that it has to be a model trained in our country? Maybe an analogy here is that semiconductors are very important to the economy, and people would like to have their sovereign semiconductors, but TSMC is just better. And semiconductors are so important to the economy that you will just go to Taiwan and buy the semiconductors. You have to. Will it be like that with AI?</p>
</details>

**Satya Nadella:** 最终，重要的是在他们的经济中使用AI来创造经济价值。这就是扩散理论，最终，重要的不是领先的行业，而是利用领先技术来创造自己比较优势的能力。所以我认为这将是根本的核心驱动力。但话虽如此，他们会希望这种能力具有连续性。所以在某种程度上，这就是我相信为什么总会有一种制衡力量来对抗“嘿，这个模型能否拥有所有失控的部署？”的原因之一。这就是为什么开源将永远存在。根据定义，将会有多个模型。这将是一种方式。这是人们要求连续性、避免集中风险的另一种方式。所以你说，“嘿，我想要多个模型，然后我想要一个开源的。”我觉得只要有这些，每个国家都会觉得，“好吧，我不必担心部署最好的模型并广泛扩散，因为我总是可以把我自己的数据和流动性转移到另一个模型上，无论是开源的还是来自另一个国家的，等等。”集中风险和主权，也就是真正的自主权，这两件事将驱动市场结构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ultimately, what matters is the use of AI in their economy to create economic value. That's the diffusion theory, which ultimately, it's not the leading sector, but it's the ability to use the leading technology to create your own comparative advantage. So I think that will fundamentally be the core driver. But that said, they will want continuity of that. So in some sense, that's one of the reasons why, I believe, there's always going to be a check to "Hey, can this one model have all the runaway deployment?" That's why open source is always going to be there. There will be, by definition, multiple models. That'll be one way. That's one way for people to sort of demand continuity and not have concentration risk, that’s another way to say it. And so you say, "Hey, I want multiple models, and then I want an open source." I feel that as long as that's there, every country will feel like, "Okay, I don't have to worry about deploying the best model and broadly diffusing because I can always take what is my data and my liquidity and move it to another model, whether it's open source or from another country or what have you." Concentration risk and sovereignty, which is really agency, those are the two things that will drive the market structure.</p>
</details>

**采访者:** 总结一下，这里的想法是，每个国家都希望有某种形式的数据驻留、隐私保护等。而微软在这里特别有优势，因为你们与这些国家有关系，你们在建立这类主权数据中心方面有专业知识。因此，微软特别适合一个有更多主权要求的世界。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just to make sure I understand, the idea here is that each country will want some kind of data residency, privacy, et cetera. And Microsoft is especially privileged here because you have relationships with these countries, you have expertise in setting up these kinds of sovereign data centers. Therefore Microsoft is uniquely fit for a world with more sovereignty requirements.</p>
</details>

**Satya Nadella:** 我不想把它描述成我们有什么独特的优势。我只想说，我认为这是一个我们几十年来一直在努力做的业务要求，而且我们计划继续这样做。所以我对迪伦之前问题的回答是，我认真对待——无论是在美国，还是当白宫和美国政府说，“我们希望你们将更多的晶圆开工分配给美国的晶圆厂”——我们都认真对待。或者无论是数据中心和欧盟边界，我们都认真对待。所以对我来说，尊重各国关心主权的合法理由，并为此构建软件和物理设施，是我们要做的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't want to sort of describe it as somehow we're uniquely privileged. I would just say I think of that as a business requirement that we have been doing all the hard work all these decades, and we plan to. So my answer to Dylan's previous question was that I take—whether it's in the United States, or when the White House and the USG says, "We want you to allocate more of your wafer starts to fabs in the US"—we take that seriously. Or whether it is data centers and the EU boundary, we take that seriously. So to me, respecting what are legitimate reasons why countries care about sovereignty, building for it as a software and a physical plant, is what we'll do.</p>
</details>

**采访者:** 当我们进入两极世界——美国、中国——这不仅仅是你与亚马逊的竞争，或者你与Anthropic、你与谷歌的竞争。还有一大堆竞争。美国如何重建信任？你们怎么做来重建信任？去说，“实际上，不，美国公司将成为你们的主要供应商。”你如何看待与新兴中国公司的竞争，无论是字节跳动和阿里巴巴，还是深求和月之暗面？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As we go to the bipolar world—US, China—it's not just you versus Amazon, or you versus Anthropic, or you versus Google. There is a whole host of competition. How does America rebuild the trust? What do you do to rebuild the trust? To say, "Actually, no, American companies will be the main provider for you." And how do you think about competition with up and coming Chinese companies, whether it be ByteDance and Alibaba or Deepseek and Moonshot?</p>
</details>

**采访者:** 补充一下这个问题，一个担忧是，我们正在谈论AI如何成为一场工业资本支出竞赛，你必须在各种供应链上快速建设。当你听到这个，至少到目前为止，你只会想到中国。这是他们的比较优势。特别是如果我们明年不会一步登天到**ASI**（Artificial Superintelligence: 人工超级智能），而是需要几十年的建设和基础设施，你如何应对中国的竞争？他们在那个世界里有优势吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To add to that question, one concern is how we're talking about how AI is becoming this industrial capex race where you're rapidly having to build quickly across all loads of supply chain. When you hear that, at least up until now, you just think about China. This is their comparative advantage. And especially if we're not going to moonshot to ASI next year, but it's going to be decades of buildouts and infrastructure, how do you deal with Chinese competition? Are they privileged in that world?</p>
</details>

**Satya Nadella:** 这是个很好的问题。事实上，你刚刚指出了为什么对美国技术的信任可能是最重要的特性。甚至可能不是模型的能力。而是，“我能信任你这家公司吗，我能信任你的国家及其机构成为一个长期的供应商吗？”这可能才是赢得世界的关键。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It’s a great question. In fact, you just made the point of why trust in American tech is probably the most important feature. It's not even the model capability, maybe. It is, "can I trust you, the company, can I trust you, your country, and its institutions to be a long-term supplier?" That may be the thing that wins the world.</p>
</details>

**采访者:** 这是一个很好的结束语。萨提亚，感谢你接受采访。

**Satya Nadella:** 非常感谢。谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's a good note to end on. Satya, thank you for doing this.</p>
<p class="english-text">Thank you so much. Thank you.</p>
</details>