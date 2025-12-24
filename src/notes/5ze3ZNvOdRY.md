---
area: market-analysis
category: finance
companies_orgs:
- Atrades
- A16Z
- Google
- OpenAI
- DeepMind
- Anthropic
- XAI
- Amazon
- AMD
- Broadcom
- Meta
- Microsoft
- Adobe
- IBM
- Tesla
- Figma
- Cursor
date: '2025-10-31'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Gavin Baker
- Jensen Huang
- Elon Musk
- Mark Zuckerberg
- Larry Page
products_models:
- Gemini
- ChatGPT
- Grok
- TPU
- NVLink
- Infiniband
- Ethernet
- CUDA
- Blackwell
- Optimus
project:
- ai-impact-analysis
- market-cycles
series: ''
source: https://www.youtube.com/watch?v=5ze3ZNvOdRY
speaker: a16z
status: evergreen
summary: 本文深入探讨了当前AI领域是否存在泡沫的问题，通过与2000年互联网（电信）泡沫的对比，分析了AI基础设施投资、GPU利用率、主要参与者的财务健康状况及竞争格局。讨论涵盖了数据中心建设、资本支出回报率、循环交易的本质、芯片与模型公司的竞争策略，以及AI对SaaS业务模型和消费互联网市场结构的深远影响。文章指出，尽管AI投资巨大，但其高利用率和积极的投资回报率表明目前并非泡沫，并强调了适应新商业模式和毛利率结构的重要性。
tags:
- ai-bubble
- data-center-investment
- dynamic
- financial
- market
title: AI泡沫是否存在？与2000年互联网泡沫的对比及市场结构分析
---

### AI泡沫是否存在？与2000年互联网泡沫的对比

**David George:** 我们是否正处于一个**AI泡沫**（AI bubble: 指人工智能领域资产价格被过度高估的现象）之中？

**Gavin Baker:** 我不认为我们今天正处于一个AI泡沫中。根据你看待它的方式，我有幸也有不幸在2000年泡沫期间担任科技投资者，那实际上是一个电信泡沫。我认为将今天与2000年进行比较和对比非常有帮助。2000年的互联网泡沫或电信泡沫是由一种叫做**暗光纤**（dark fiber: 指已经铺设但尚未连接到设备并投入使用的光纤电缆）的东西定义的。在高峰期，97%已铺设的光纤是暗的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Are we in an AI bubble?<br><br>>> Uh, I do not believe we're in an AI bubble today. I was, depending on how you look at it, the privilege and the misfortune of being a tech investor during the year 2000 bubble, which was really a telecom bubble. And I think it's really helpful to compare and contrast today to the year 2000. The year 2000 internet bubble or telecom bubble was defined by something called dark fiber. At the peak, 97% of the fiber that had been laid was dark.</p>
</details>

**Gavin Baker:** 对比一下今天，没有**暗GPU**（dark GPUs: 指已经生产但未被利用或闲置的图形处理单元）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Contrast that with today. There are no dark GPUs.</p>
</details>

**David George:** 这将我们带到了开场炉边谈话。我们将直接从一个禁忌问题开始。你准备好了吗？如果AI是当今世界上最大的趋势，那么它的证据在哪里？为什么它才刚刚开始在经济中显现？正如Andre Carpathy所问，代理真的只是幽灵吗？为了开启这个话题并帮助我们回答这个问题，请大家和我们一起欢迎Atrades管理合伙人兼首席投资官Gavin Baker。你们中的一些人可能知道Gavin是Twitter上那位深思熟虑的人。每当有重大AI新闻出现时，我知道不少人指望Gavin来解释到底发生了什么。所以，非常感谢Gavin今天能和我们在一起。与他一起的还有我们A16Z的普通合伙人David George。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that brings us to our opening fireside chat. We're going to start with a taboo question right out of the gate. Are you ready for it? If AI love it. If AI is the biggest trend in the world right now, where is the evidence for it? Why is it only just beginning to show up in the economy? And as Andre Carpathy asked, are agents really just ghosts? To kick this off and to help us answer this question, please join us in welcoming Gavin Baker, managing partner and CIO of Atrades. Now, some of you may know Gavin as that really thoughtful guy on Twitter. Anytime some big piece of AI news comes out, I know more than a few people who count on Gavin to explain what the f is really going on. So, a huge thank you to Gavin for being with us today. Joining him is our very own David George, general partner at A16Z.</p>
</details>

**David George:** 谁知道那段音乐是来自哪里？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Who knows what that music was from?</p>
</details>

**Gavin Baker:** 很高兴他们选对了我们的振奋音乐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Glad they got our pump up music right.</p>
</details>

**David George:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes.</p>
</details>

**Gavin Baker:** 《太空堡垒卡拉狄加》，1977年的原版。以防我们几年后不得不与赛昂人作战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Battlestar Galactica, the original 1977 one. in case we have to all fight Sylons in a few years.</p>
</details>

**David George:** 是的，这是一个很好的话题引入，我想。嗯，谢谢你来到这里。我总是喜欢和你聊天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's it's uh yeah, good good segue into the topic, I guess. Um so, thank you for being here. I always love talking to you.</p>
</details>

**Gavin Baker:** 我也是。非常感谢你邀请我，感谢你的同事们邀请我来这里。我非常期待接下来的两天。我想我会学到很多。所以，谢谢你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Same. Um really grateful to you for inviting me, grateful to your colleagues for having me here. I'm really look forward to the next uh two days. I think I'm going to learn a lot. So, thank you.</p>
</details>

**David George:** 是的。好的。那么，主要话题是AI泡沫，一种宏观的视角。嗯，也许先从几个统计数据开始，为我们铺垫一下，然后我想听听你对我们当前状况的看法。目前美国大约有1万亿美元的数据中心。计划在未来5年内再增加3到4万亿美元。在过去三年中，我们已经建成的数据中心容量，就美元价值而言，已经超过了整个美国州际公路系统，而后者耗时40年才建成，这还是经过通货膨胀调整的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Okay. All right. So, the big topic is AI bubble kind of macro view of things. Um, so maybe just to start with a couple stats to set the stage and then I want to get your take on on where we're at. So we have about a trillion dollars of data centers in the US. The plan is to add 3 to4 trillion in the next 5 years. Over the past three years, we have already built out in data center capacity a larger amount of dollars than the entire US interstate highway system, which took 40 years just in terms of dollars. And that's a inflation adjusted.</p>
</details>

**David George:** 我认为仅OpenAI一家公司就达成了超过1万亿美元的交易承诺，我们可以谈谈这个。但与此同时，这些都是关于基础设施的大数字，它们令人担忧，让人觉得“哦，泡沫来了”。Google最近发布了一个统计数据，显示他们在过去17个月中处理的令牌数量增加了150倍。所以，一方面是这种听起来疯狂又可怕的建设，另一方面实际上有大量的实际使用正在发生。那么，我们是否处于AI泡沫中？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Open AAI alone I think has more than a trillion dollars of deals set up that they've committed to and we can talk about that. Um but at the same time, so those are all like big numbers on infrastructure and they're scary and they say oh bubble and Google uh released a stat recently that they have seen a 150x increase in the amount of tokens processed in the last 17 months. So on the one hand you've got this crazy scary sounding buildout. On the other hand you actually have a bunch of usage that's happening. So are we in an AI bubble?</p>
</details>

**Gavin Baker:** 我不认为我们今天正处于一个AI泡沫中。我曾有幸（或不幸，取决于你的看法）在2000年泡沫期间担任科技投资者，那实际上是一个电信泡沫。我认为将今天与2000年进行比较和对比非常有帮助。首先，我认为思科（Cisco）在高峰期市盈率达到150或180倍，而英伟达（Nvidia）现在大约是40倍，所以估值非常不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh I do not believe we're in an AI bubble today. Uh I was um I had depending on how you look at it the privilege and the misfortune of being a tech investor during the um the year 2000 bubble which was really a telecom bubble. And I think it's really helpful to compare and contrast today to the year 2000. um you know first I think uh Cisco peaked at 150 or 180 times trailing earnings Nvidia is at more like 40 times so valuations are very differently very different.</p>
</details>

### AI与2000年泡沫：暗光纤与暗GPU的对比

**Gavin Baker:** 然而，最重要的是，2000年的互联网泡沫或电信泡沫是由一种叫做**暗光纤**的东西定义的。如果你是2000年的老兵，你会知道那是什么，但暗光纤就是字面上铺设在地下但没有点亮的光纤。光纤只有在你两端都有所需的光学设备、交换机和路由器时才有用。我清楚地记得，像Level 3、Global Crossing或WorldCom这样的公司会进来，他们会说：“我们这个季度铺设了20万英里的暗光纤。这太棒了。互联网将会非常庞大。我们迫不及待地要点亮它们。”在泡沫高峰期，美国铺设的光纤中有97%是暗的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">most important however is that the year 2000 internet bubble or telecom bubble was defined by something called dark fiber um and if you're a veteran of of the year 2000 you'll know what that was but dark fiber was literally fiber that was laid down in the ground and not lit up. Fiber is useless unless you have the optics and switches and routers uh that you need on either side. Um you so I vividly remember, you know, companies like Level 3 or Global Crossing or WorldCom would come in and they say, "We laid 200,000 miles of dark fiber this quarter. This is so amazing. The internet's going to be so big. Um you know, we can't wait to light these up." At the peak of the bubble, 97% of the fiber that had been laid in America was dark.</p>
</details>

**Gavin Baker:** 对比一下今天。没有**暗GPU**。你只需要阅读任何技术论文，就会发现训练运行中最大的问题之一就是GPU正在熔化。有一个非常简单的方法可以直击这一切的核心，那就是GPU最大消费者的**投资资本回报率**（ROIC: Return on Invested Capital，衡量公司利用其资本产生利润效率的指标）。这些公司都是上市公司，自从他们增加**资本支出**（capex: Capital Expenditure，用于购买、改善或维护长期资产的资金）以来，他们的ROIC都增加了大约10个百分点。因此，到目前为止，所有支出的投资回报率都非常积极。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Contrast that with today. There are no dark GPUs. All you have to do is read any technical paper. And that one of the biggest problems in a training run is that GPUs are melting. And there's a very simple way to kind of cut to the heart of all of this. It is the return on invested capital of the biggest spenders on GPUs who are all public and those companies since they ramped up capex have seen call it a 10point increase in their ROIC's. So thus far the ROI on all the spending has been really positive.</p>
</details>

**Gavin Baker:** 这是一个有趣且开放的辩论，关于我们将在Blackwell上投入的巨额资金是否会继续保持积极的投资回报率。我个人认为会，但毫无疑问，到目前为止，AI的投资回报率非常积极，而且从估值来看，我们根本没有处于泡沫中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a really it's an interesting and open debate about whether or not it will continue to be positive with the quantum of spend we're going to have on Blackwell. I personally think it will, but there's no debate that thus far the ROI on AI has been really positive and valuation wise. We're just not in a bubble.</p>
</details>

**David George:** 我完全同意。我想说的另一件事是，你可以对比一下当时的技术实际采用和使用情况，对吧？互联网实际上非常困难，因为你必须建立一个双边网络。你必须建立网站，然后你必须获得用户，这要困难得多。在AI工具的情况下，你只需要通过API点亮它们，或者打开你的网站ChatGPT，每个人都可以访问它们，它们建立在云计算和互联网之上，你可以立即获得分发，立即触达十亿人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I couldn't agree more. The other thing that I would say is you can contrast the actual adoption and usage of the technology from then, right? The internet was actually really hard because you had to build a two-sided network. like you had to build websites and then you had to get users and it's much more difficult in the case of the AI tools you know all you have to do is kind of light them up via API or you know turn on your website chatgpt and everybody has access to them right built on top of cloud computing on top of the internet uh and you know you can get to instant distribution a billion people right away</p>
</details>

### AI基础设施投资与主要参与者的财务实力

**Gavin Baker:** 绝对如此。嗯，另一件事是交易对手。你提到了这一点，他们恰好是世界上历史上最好的公司。我想，那些真正掏钱的公司，他们为这些资本支出开支票。我想他们每年总共产生大约3000亿美元的自由现金流。对吗？大概是这个数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">absolutely so uh the other thing is the counterparties so you mentioned this they happen to be the best companies in the history of the world right I think collectively the people who are coming out of pocket. They're writing checks uh for this capex. I think they collectively generate like $300 billion of free cash flow a year. Is that right? Some directionally</p>
</details>

**David George:** 大概数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">round numbers.</p>
</details>

**Gavin Baker:** 是的。而且他们资产负债表上有5000亿美元的现金。所以每当人们说：“哦，天哪，这是一个泡沫。它会破裂吗？”我就会想，我觉得还好。我的意思是，你知道，点亮一千兆瓦的成本大约是400或500亿美元。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">Yeah. And they have $500 billion of cash on the balance sheet. So whenever people are like, "Oh my god, it's a bubble. Is it going to pop?" I'm like, I think it's kind of fine. I mean, you know, it costs like4 or 50 billion to light up one gigawatt.</p>
</details>

**David George:** 是的，如果你用英伟达的芯片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. If you're on Nvidia chips</p>
</details>

**Gavin Baker:** 用英伟达的芯片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">on Nvidia chips.</p>
</details>

**David George:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Gavin Baker:** 是的。所以，你知道，大概有8000亿美元的缓冲，每年还在增长3000亿美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So, you know, there's kind of like an $800 billion buffer growing $300 billion every year.</p>
</details>

**David George:** 是的，我的意思是，嗯，其中一些公司的自由现金流可能已经开始，你知道，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I mean, um, free cash flow at some of them has begun to maybe uh, you know,</p>
</details>

**Gavin Baker:** 嗯，这正好说明了你关于投资资本回报率的观点。它可能

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">well, this this goes to your point on return on invested capital. It might</p>
</details>

**David George:** 我们应该看到它接下来会稍微下降一点。在建设方面有点不匹配。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we should see that next down a little bit. A little bit of a mismatch at the buildout,</p>
</details>

**Gavin Baker:** 但你知道，据称拉里·佩奇（Larry Page）在内部说过：“我宁愿破产也不愿输掉这场竞赛。”我认为这肯定是Google，也许还有Meta的心态。嗯，这被视为事关存亡，你必须赢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but you know, it's you know, Larry Page apparently internally said, I'm happy to go bankrupt rather than lose this race. And I think that is the mentality for sure at Google and perhaps Meta. um it's just seen as existential and you have to win.</p>
</details>

### 循环交易与AI芯片竞争格局

**David George:** 好的。关于这些**循环交易**（round-tripping deals: 指资金从一方流出，经过一系列交易后又回到原点，常用于虚增收入或规避监管）已经有很多文章。所以，请告诉我，因为你知道，循环交易是一个非常可怕的概念，从互联网建设时期就是一个大问题。你对此有何看法？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So, uh lots has been written about these roundtpping deals. So, give me the because you know roundtpping is a very scary concept from you know the internet buildout that was a big problem. What do you make of it here?</p>
</details>

**Gavin Baker:** 这客观上正在发生。嗯，你知道，资金是可互换的。所以英伟达如果与OpenAI签订协议，他们可以说：“嘿，你不能用我们的钱来购买我们的芯片。”但资金是可互换的。但这正在以非常小的规模发生。是的。是的。而且我认为，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is objectively happening. Um you know money is fungeible. So Nvidia if they sign a deal with OpenAI they can say hey you can't use our money to buy our chips but money is fungeible. But it's happening at a very small scale. Yes. Yeah. And I think um</p>
</details>

**David George:** 我不知道这像是一种加密或区块链。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I didn't know this was like a crypto or blockchain.</p>
</details>

**Gavin Baker:** 完全正确。很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly. Good.</p>
</details>

**David George:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Gavin Baker:** 而且我认为推动这一切的不是需要为GPU或数据中心采购提供资金，而是竞争动态。所以，英伟达最大的竞争对手不是AMD，也不是Broadcom，嗯，当然也不是Marvell。嗯，也不是英特尔，而是Google。更具体地说，是Google，因为Google拥有**TPU**（Tensor Processing Unit: 张量处理单元，Google专门为机器学习工作负载设计的定制ASIC芯片）。这可能是迄今为止英伟达在训练方面唯一的替代品，也许是最好的推理替代品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think what is driving um what is driving this isn't the need to, you know, finance GPU or data center purchases, but it's actually com competitive dynamics. So, Nvidia's biggest competitor, it's not AMD, it's not Broadcom, um, you know, it's it's certainly not Marll. Um, it's not it's not Intel, it's Google. And more specifically, it is Google because Google owns uh the TPU chip. And this is by far maybe perhaps today the only um alternative to NVIDIA for training um and maybe the best uh inference alternative.</p>
</details>

**Gavin Baker:** Google是一个有问题的竞争对手，因为他们还拥有一家名为DeepMind的公司，并且有一个名为Gemini的产品。我认为你可以说他们是当今领先的AI公司。我认为他们在过去两三个月里获得了15或20个百分点的流量份额，这还不包括Gemini的流量，也不包括搜索概览。我怀疑在实际流量基础上，Google今天比OpenAI、Anthropic或任何其他公司都大，而且这项业务将在TPU上运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what Google and Google's a problematic competitor because they also own a company called DeepMind and they have a product called Gemini. Um and I think you could argue that they are the leading um AI company today. I think they've taken 15 or 20 points of traffic share in the last two or three months and that does not that's just traffic to Gemini. It does not include search overviews. I suspect on a actual traffic basis, Google is bigger than OpenAI, Enthropic, anyone today and that that business is going to run on TPUs.</p>
</details>

**Gavin Baker:** 然后我们今天还有另外三个相关的实验室。有Anthropic，那是亚马逊和Google的专属。嗯，Tranium是，你知道，Anthropic真的会在TPU和Tranium上运行。所以你只剩下XAI和OpenAI处于领先地位。如果Google去像Anthropic这样的实验室，说：“我将帮助你筹集资金并给你芯片”，我认为出于竞争原因，英伟达很难不做出回应。正如黄仁勋（Jensen Huang）所说，他认为这将是一项很好的投资。嗯，所以我认为循环交易的担忧被夸大了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we have three other labs that are relevant today. There's Enthropic and that's an Amazon and T that's an Amazon and Google captive. Uh, trrenium is um, you know, Enthropic is really going to run on uh, TPUs and traniums. And so you're left with XAI and OpenAI at the forefront. And if Google is going to a lab like Enthropic and saying, I'm going to help you fund raise and give you chips, I think for competitive reasons, it's very hard for Nvidia not to respond. And as Jensen said, he thinks it's going to be a good investment. Um, so I think the roundtpping concerns are pretty overblown.</p>
</details>

**David George:** 是的。我的意思是，英伟达真正需要的是，他们需要Meta振作起来，或者另一个美国开源玩家出现，或者，你知道，也许与中国在AI方面达成某种协议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And what I mean what Nvidia really needs is they need you know Meta to get their act together or another American open source player to emerge or you know maybe some sort of um dant with China and AI.</p>
</details>

**Gavin Baker:** 是的。是的。当人们问我关于英伟达以及所有的举动和循环交易时，我的反应是他们所做的一切都是完全理性的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. I when people ask me about Nvidia and all the moves and the roundtpping my reaction is everything they've done is completely rational.</p>
</details>

**David George:** 100%理性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">100% rational.</p>
</details>

**Gavin Baker:** 是的。长期来看。是的。当然。他们做的一些事情可能没有其他事情那么高的资本回报率，但从战略上讲，我认为它们都是正确的举动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Long term. Yeah. Sure. things they do may not have as high of a return on capital as other things, but strategically I think they're all kind of the right moves.</p>
</details>

**David George:** 黄仁勋（Jensen Huang）是我认识的两位最好的CEO之一，另一位是埃隆·马斯克（Elon Musk）。嗯，我认为他打得一手好牌，而且打得非常好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Jensen's one of the two best CEOs along with Elon I have ever known. Um, and I think he's he's playing a strong hand really well.</p>
</details>

### AI模型市场结构与应用层面的挑战

**David George:** 是的。好的。你开始谈论模型公司了。我们来谈谈模型。我们可以稍后回到芯片、内存和网络，因为我想听听你对那些的看法，但是，既然我们谈到模型方面，你认为市场结构会发生什么变化？谁会在哪里获胜？你最看好谁？你有哪些担忧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. All right. So, you started getting into the model companies. Let's just talk about the model. So, we can come back to chips and memory and networking because I want to get your take on that, but you know, since we're on the model side, what do you think happens with market structure? who wins where, you know, who are you most optimistic about? You know, where do you have concerns?</p>
</details>

**Gavin Baker:** 所以，嗯，我认为谦逊对投资者来说是一种重要的美德。如果我们要打个比方，说ChatGPT之于AI，就像Netscape Navigator之于互联网。在互联网繁荣的这个阶段，Google还没有成立。马克·扎克伯格（Mark Zuckerberg）还在读中学。嗯，特拉维斯·卡兰尼克（Travis Kalanick）还在上幼儿园。所以现在还非常早期。因此，我认为在应用层面对做出高度自信的预测保持谦逊很重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, um I think humility is an important virtue for an investor. And I'm just if we're going to make an analogy and say that chat GPT is to AI has Netscape Navigator was to the internet. At this point in the internet boom, Google had not been founded. Mark Zuckerberg was in middle school. um Travis Kalanick was in was in kindergarten. Um so it's just very early. So I think it's important to be humble um about making high confidence predictions at the application layer.</p>
</details>

**Gavin Baker:** 这也是我认为基础设施层在这些新技术浪潮初期通常可能是个安全地带的原因之一。嗯，实际上谈谈它们在基础设施层扮演的角色，因为它们有一部分是作为基础设施层为其他应用提供商提供支持，然后它们也有自己的应用。所以我想，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's one reason I think the the infrastructure layer is often maybe a safe place to be at the beginning of one of these new technology waves. Well, actually talk about the role they play at the infrastructure layer because they are there's a piece of them that like obviously they they serve as an as an infrastructure layer powering other application providers and then they they also have their own application. So I think</p>
</details>

**David George:** 我会区分一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would draw the distinction.</p>
</details>

**Gavin Baker:** 是的，我的意思是这在Google身上最明显。嗯，但我只是，嗯，我认为很难有高度的信念，除了观察，你知道，互联网是一项非常颠覆性的创新。嗯，我认为有合理的论据表明AI可能是一项持续性的创新，因为数据、购买计算的资本和分发这些原始要素，都是你所需要的。今天所有最大的科技公司都拥有这些优势。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I mean that's most true of of Google. Um but I just um I think it's hard to have high conviction other than to observe you know the internet was a very disruptive innovation. Um, I think there's reasonable arguments that AI could be a sustaining innovation because the raw ingredients of kind of data, you know, the capital to buy compute and distribution, which is what you need. All of the big um, you know, today's biggest tech companies have all of those in spades.</p>
</details>

**Gavin Baker:** 所以，只要他们执行得好，雇用优秀的人才，嗯，并且有一个健全的战略，我想你可能会看到它成为许多“七巨头”（Mag 7）成员的持续创新。另一方面，我确实认为这是关乎存亡的，如果你不执行，你知道，IBM可能是一个不错的命运。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, as long as they execute well, hire good people, um, and have a sound strategy, like I think you could see it be a sustaining innovation for a lot of members of the Mag 7. On the other hand, I do think it's existential and if you don't execute, you know, IBM might be a might be a good fate.</p>
</details>

**David George:** 是的。是的。是的。那太艰难了。嗯，是的。数据、分发、计算、资金、人才。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. Yeah. That's uh that's tough. Uh, yeah. Data, distribution, compute, dollars, talent.</p>
</details>

**Gavin Baker:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**David George:** 而且，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And like</p>
</details>

**Gavin Baker:** 他们完全有权获胜。是的，他们完全有权获胜。而且现在看来，他们比以前更加认真对待。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">they have every right to win. Yeah, they have every right to win. And it seems now more than before, they're taking it quite seriously.</p>
</details>

**David George:** 是的，也许特别是Google，但显然Meta也在做出他们正在做出的巨大举动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, maybe Google in particular, but obviously Meta Meta is making the dramatic moves they're making, too.</p>
</details>

**Gavin Baker:** 不，对我来说，ChatGPT是Google的珍珠港事件，我们将看到他们如何回应，他们正在慢慢开始回应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, to me, Chat GPT was Pearl Harbor for Google, and we're going to see how they responded, and they're slowly starting to respond.</p>
</details>

### AI业务模型：高利润还是低利润？

**David George:** 是的。那么你认为他们的平台业务，也就是基础设施部分，会发生什么？你认为它在商业模式和市场结构方面会如何发展？你认为它们最终会像云服务或飞机制造商那样成为高利润业务，还是会像航空公司那样竞争激烈且利润微薄？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And then what do you think what's your forecast for uh that sort of in the platform piece of their business, the infrastructure piece? What do you think? How do you think it shakes out in terms of like business model market structure? So do you think they end up as high margin businesses like the clouds or like aircraft manufacturers or do you think they end up very competitive and low margin businesses like airlines?</p>
</details>

**Gavin Baker:** 嗯，我不认为它们会是航空公司，但任何人都可以看看2021年和2022年左右的**软件即服务**（SaaS: Software as a Service，一种通过互联网提供软件的模式）公司的损益表，你会看到80-90%的**毛利率**（gross margins: 销售收入减去销售成本后的余额与销售收入的百分比）。由于规模法则，AI的性质决定了它们需要更多的计算资源，所以它们的毛利率在结构上会更低。但这并不意味着它们不能成为伟大的企业。我只是认为，在很长一段时间内，我们不会看到一个真正的、你知道的AI实验室，一个前沿实验室，其毛利率能接近SaaS或互联网时代的利润水平。现在，它们的运营支出可以低很多，嗯，你知道，也许这就是你如何平衡它的方式，但毛利率根本上是不同的。除非规模法则改变，以及测试时间计算等的重要性改变，而我没看到这种情况发生，否则它们的利润率将会更低。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I don't think they will be airlines but you can anybody can just look at the P&L you know of a SAS company circa 2021 and 2022 and you see you know 80 90% gross margins and the nature of AI because of scaling laws Richard Sutton's the better the bitter listen um they're just more compute inensive so their gross margins are structurally going to be lower but that doesn't mean they can't be great businesses is I just I think it's going to be a long time before we see a truly kind of you know an AI lab a frontier lab with gross margins anywhere near SAS or internet era margins now their opex can be a lot lower um and you know maybe that's how you square it but just the gross margins are fundamentally different and until scaling laws change and the importance of test time compute and things like that change which I don't see happening they're they are going to be lower margin.</p>
</details>

### 应用层SaaS业务的未来

**David George:** 是的。好的。那么，我们来谈谈应用层。你刚才稍微提到了SaaS业务，嗯，我不知道你是否参与过Twitter上的这场争论，但它每隔几个月就会出现，内容是SaaS很糟糕，已经死了，你知道，一切都会消失。然后，你知道，Andre的Darkeesh采访，他刚刚做完，市场对此反应积极。这就像过山车一样的反应。那么你认为SaaS和软件会发生什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Okay. So, let's talk about uh application layer. So, you just you just kind of got into it a little bit with the SAS businesses and uh I don't know if you've waited into this fight on Twitter, but it's sort of you know the the like you know every few months it comes up and it's like SAS is terrible and it's dead and you know it's all going to go away and then you know with uh Andre's uh Darkeesh interview he just did it's you know like the market's reacting positively to it. And it's like a whipssaw reaction. So what do you think happens with SAS and software?</p>
</details>

**Gavin Baker:** 你知道，我想我可能在2024年初首次说过，我认为所有的应用SaaS都可能归零，这与基础设施SaaS不同。我现在会说我有一个更细致的看法，我认为可能会有一些非常大的应用SaaS赢家，特别是如果你服务于一个更分散的SMB客户群。嗯，你知道，Google已经让他们的客户非常容易使用他们的数据，并基本上创建任何你想要的SaaS应用，而且你的数据不会与其他人共享。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, I think I, you know, first said probably in early 24 that I thought all of application SAS might be a zero different than than um infrastructure SAS. I I would say I have a more nuanced view now and I think there could be some really big application SAS winners, especially if you serve like a more fragmented SMB customer base. Um, you know, Google has make it really easy if you're a customer of theirs to use your data and essentially make any SAS app you want and then your data isn't shared with anyone else.</p>
</details>

**Gavin Baker:** 嗯，但零售商在与亚马逊打交道时犯的一个关键错误是，他们看了亚马逊的利润率，然后说我们不想做那种生意。这显然是一个可怕的错误。25年过去了，你知道亚马逊的零售利润率非常健康。我担心应用SaaS公司正试图保持他们现有的毛利率结构，因为他们认为如果他们的毛利率下降，他们的股价也会下跌。鉴于我们刚刚讨论的，在AI领域取得成功，毛利率压力是必然的，这在定义上是不可能的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but the critical mistake that I think a lot of retailers made um in dealing with Amazon is they looked at Amazon's margins and they said we don't want to be in that business. And that was obviously a terrible mistake. And here we are 25 years later and you know Amazon has really healthy uh retail margins. And I worry that application SAS companies are trying to preserve their existing gross margin structures because they believe that if their gross margins go down um their stocks will go down. It is definitionally impossible given what we just discussed to succeed in AI without gross margin pressure.</p>
</details>

**Gavin Baker:** 我不知道他们为什么有这些担忧，因为我们有微软（Microsoft）和Adobe这样的存在证明，一家软件公司可以很好地应对利润率下降，直到整个AI事情出现。你知道，以前公司害怕从本地部署转向云端，因为云利润率更低。云利润率确实更低，但它们仍然很好。微软，他们从本地部署的永久许可证加维护模式，过渡到了云模式，而且在十年内，它是一只相当不错的股票。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I do not know why they have concerns because we have an existence proof that a software company can deal well with declining margins in Microsoft in Adobe to the whole AI thing came along. You know, it used to be that companies were scared to go from on premise to the cloud because margins were lower. Cloud margins are are are lower. They're still good. And Microsoft, they transitioned, you know, from, you know, on premise perpetual licenses with maintenance uh to a cloud model. and it was a pretty good stock for 10 years.</p>
</details>

**Gavin Baker:** 所以，如果你是一家应用SaaS公司，我想说的是，不要害怕，把毛利率下降看作是成功的标志，而不是羞耻的徽章或可怕的东西。你说得太有趣了，因为每当我们讨论这些公司时，基本上每家来我们这里展示的公司都说我们是一家AI公司，嗯，我们总是看毛利率，而拥有低毛利率对他们来说已经成为一种荣誉徽章，因为他们会说：“哦，天哪，人们真的在使用你们的AI产品。”是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I don't if you're an application SAS company like I what I would just say is don't be scared and look at declining gross margins kind of has a mark of success rather than you know a badge of shame or something to be feared. It's actually so funny you say that because whenever we have these discussions about companies, basically every company that comes to present to us is like we're an AI company and um we always look at the gross margins and it's become like a badge of honor for them to actually have low gross margins because like oh my god people are actually using your AI stuff. Yeah.</p>
</details>

**David George:** 但如果你出现并说：“我是一家AI公司，而且我有82%的毛利率。”你会觉得：“我不认为有人真的在使用它。”嗯，所以是的，这很有趣。是的。如果你是这些上市公司之一，你宁愿拥有10美元的收入和90%的毛利率，还是50美元的收入和60%的毛利率？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if you show up and you're like I'm an AI company and it's like I got 82% gross margins. You're like I don't think anybody's really using it. Uh so yeah it's uh it's interesting. Yeah. If you're if you're one of these public companies, would you rather have like 10 bucks of revenue with 90% gross margins or 50 bucks of revenue with 60% gross margins?</p>
</details>

**Gavin Baker:** 不难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Not hard.</p>
</details>

**David George:** 就像它没有那么复杂。在公开市场很难做到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like it's not that comp Yeah, not that complicated. It's hard to do in the public market.</p>
</details>

**Gavin Baker:** 在公开市场很难做到，但如果你进行沟通，你将其与云转型进行类比。我的意思是，我是一名投资者，我会对此感到兴奋，你知道，而且我认为我并非孤身一人。然后，这些传统应用SaaS公司拥有的巨大优势是，他们确实拥有这些非常盈利的现有业务。所以你可以让你的新AI产品以收支平衡的方式运行，嗯，你知道，赶上领导者等等。我只是很惊讶为什么没有更多的人这样做，比如为什么没有一家上市公司试图与Cursor竞争？现实是，Cursor现在拥有万亿级别的令牌，你知道，总有一天他们会有足够的编码令牌，以至于很难追赶他们。但我认为，如果你今天是一家上市公司，并且你说：“我要全力以赴。我要以收支平衡的方式运行。我有一个现有业务。我要把它附加到所有东西上。”嘿，你就有机会。而且，你知道，奖品显然非常丰厚。我看到马丁（Martin）持怀疑态度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's hard to do in public, but if you communicate it, you draw parallels to the cloud transition. I mean, I'm an investor and I would be excited about it, you know, and I don't think I'm alone in the world. And then the big advantage these legacy application SAS companies have is they do have these really profitable existing businesses. And so you can run your new AI products at break even um and you know catch up to the leaders etc etc and I'm just surprised more people have not done that like why are none of the public coding companies even trying to compete with cursor and the reality is cursor now they have a trillion trillion tokens and you know there there will be a point where they have enough coding tokens that it's tough to catch them but I think today if you're a public coding and you said, "I'm going to lean in. I'm going to run it break even. I have an existing business. I'm going to attach it to everything." Hey, you have a chance. And you know, the prize is clearly really big. I see Martin is skeptical.</p>
</details>

**David George:** 马丁（Martin）在摇头。你还有机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Martin's shaking his head. You have a chance.</p>
</details>

**Gavin Baker:** 我说的是有机会。所以，我说的是有机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I said a chance. So, I said a chance.</p>
</details>

**David George:** 那就像《阿呆与阿瓜》里说的：“你是说我还有机会？”不是那种真正的机会。你是说。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's like a dumb and dumber. You're telling me there's a chance, not like a real chance. You're telling me. You're</p>
</details>

**Gavin Baker:** 你是说我还有机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">telling me there's a chance.</p>
</details>

**David George:** 是的。完全正确。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes. Exactly.</p>
</details>

**Gavin Baker:** 就像一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's like a</p>
</details>

**David George:** 是的，完全正确。我完全同意。是的，我们实际上看到了，我的意思是，你知道，我们看到了，嗯，你知道，如果我们，如果我们，你知道，Figma为例，当他们推出时，他们的毛利率非常高，他们说：“嘿，我们将非常积极地分发我们的AI工具，我们的毛利率将会下降。”你知道，投资者问了一些澄清问题，然后他们说：“哦，那实际上会是一件好事。”所以很惊讶公开市场中没有更多的人这样做，对他们来说效果还不错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, exactly. I totally agree. Yeah, we actually saw I mean you know we see it uh you know we may if we if we you know Figma for example like when they went out they are extremely high gross margin and they're like hey we're going to you know pretty aggressively distribute our AI tools and our gross margins are going to go down and you know investors asked a few clarifying questions and then they were like oh that actually would be a good thing and so surprised more people in the public markets aren't doing it worked out okay for them</p>
</details>

### AI对消费互联网市场结构的影响

**David George:** 效果很好，嗯，这是一场持久战。那么在应用层的消费者方面呢？显然，Google是互联网的门户，现在仍然是互联网的门户，整个商业模式都建立在获取一些意图，然后将你引导到别人的网站上，在那里他们会为你做事情。有了AI，情况将不再是这样。嗯，虽然我今天尝试了浏览器，并尝试做了一些非常基本的购物，你知道，它仍然需要一些工作，但我认为它会实现。那么你认为消费互联网公司的市场结构会发生什么变化？它们会被整合到一个聊天机器人界面的一部分吗？还是你认为会有其他情况？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it's working out well uh long game to play what about on the consumer side at the application layer so obviously ly Google was the portal to the internet is kind of still is the portal to the internet and the whole business model was predicated upon taking some intent and directing you to someone else's website where they would do stuff with you. It's kind of not going to be that way. It already is not that way uh with uh with AI. Although I tried the browser today and I tried to do some pretty basic shopping stuff and it's you know it's still still some work to do but I think it will get there. So what do you actually think happens with the sort of market structure of the consumer internet companies? Do they get subsumed into a component of a chatbot interface or do you think it's something else?</p>
</details>

**Gavin Baker:** 嗯，首先，谦逊，很难说。其次，我想说的是，我认为那些推出了AI浏览器的AI公司可能会后悔，因为有一种叫做Chrome的东西，它拥有50亿用户，如果你是Google，嗯，你知道，你可以看看Google Buzz发生了什么，他们非常谨慎，你知道，他们目前正在与政府打官司，嗯，他们可以很容易地做到这一点，甚至可能做得更好，但他们不想第一个做。所以现在你有两家AI原生公司拥有自己的浏览器，让它们运行3到6个月，获得一点领先优势，然后，哇，我们来了。我们不得不这样做。我不知道那会如何运作。嗯，也许对于Google以外的公司，那些不拥有Chrome的公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so one humility hard to say. to I would just say I think um the AI companies that have launched these AI browsers may come to regret it because there's something called Chrome that has whatever it is 5 billion users and if you're Google um you know you can just go look at what happened with Google Buzz you they are very cautious you know there's you know they're currently in in litigation with the government um and they could easily do this and probably do it even better, but they didn't want to be first. So now you have two AI native companies with their own browsers, let them run for 3 to 6 months, get a little head start, and then wow, here we are. We had to do this. And I don't know how that's going to work. Um maybe for the companies other than Google who don't own Chrome. Um</p>
</details>

**David George:** 是的，我想数据和分发在这方面非常强大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah, I guess data and distribution is pretty powerful in that.</p>
</details>

**Gavin Baker:** 是的，事后诸葛亮。嗯，我想说的一点是，我确实认为今天很难与拥有庞大现有用户群的公司抗衡。嗯，我还认为**推理**（reasoning: 指AI模型进行逻辑思考、理解和解决问题的能力）从根本上改变了这些前沿模型的经济学。你知道，在推理之前，我常说如果你是一个没有独特、有价值数据和互联网规模分发的前沿模型，你就是历史上贬值最快的资产。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, hindsight's 2020. Um, and the one thing I would say is I do think it's tough to bet against the companies with large existing user bases today. Um, and I also think reasoning has fundamentally changed the economics of these frontier models. you know, pre-reasoning. Um, I often said if you are a frontier model without access to unique, valuable data and internet scale distribution, you're the fastest depreciating asset in history.</p>
</details>

**Gavin Baker:** 我认为推理真的改变了这一点，因为**强化学习**（RL: Reinforcement Learning，一种机器学习范式，通过与环境互动学习最优行为）在后训练阶段的工作方式，拥有庞大的用户群现在解锁了那个曾是所有伟大消费互联网公司核心的飞轮效应：你有一个好产品，你获得了很多用户，用户让算法变得更好，算法让产品变得更好，它就这样不断旋转。在AI领域，它还没有完全旋转起来，但你可以眯着眼睛看到它。所以我认为这从根本上改变了Anthropic、XAI和OpenAI的经济学。嗯，但我的意思是马克·扎克伯格（Mark Zuckerberg）正在努力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think reasoning really changed that because the way RL works during post training, having a big user base now kind of unlocks that flywheel that was at the center of every great consumer internet company where um you have a good product, you get a lot of users, the users make the algorithm better, um the algorithm makes the product better and it just spins. And that it's not quite spinning yet in AI, but you can squint and see it. And so I think that fundamentally changes economics for anthropic, for XAI, um, for OpenAI. Um, but I mean Mark Zuckerberg's trying hard.</p>
</details>

**David George:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Gavin Baker:** 我们拭目以待。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'll see.</p>
</details>

**David George:** 是的。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah.</p>
</details>

**Gavin Baker:** 是的。现在有很多聪明人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. A lot of smart people in there now.</p>
</details>

**David George:** 是的，当然。我认为担忧是，我认为这是另一个有趣的事情，如果你不，以一种奇怪的方式，中国的开源模型生态系统对任何试图追赶那四个领先实验室的美国公司来说都是天赐之物，因为问题是如果你没有Gemini 2.5 Pro或它的后续检查点，或者我们没有看到的Grock的后续检查点，或者后续的GPT检查点训练下一个模型，你就会处于劣势。哦，顺便说一句，有一件事让我抓狂的是，所有这些说GPT-5是规模法则终结的人。GPT-5是一个更小的模型。它不是为了更好而设计的。它是为了让OpenAI和微软运行它更经济而设计的。任何提及GPT-5及其规模法则的说法都是疯狂的。嗯，是的。抱歉。抱怨结束。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, for sure. I I think the worry is and I think this is another interesting thing is if you don't like in a strange way the Chinese open source model ecosystem is a godsend to any American company that's trying to catch those four leading labs because the problem is if you don't have Gemini 2.5 Pro or a later checkpoint of it or a later checkpoint of Grock that we don't see or a later GPT checkmate uh checkpoint training the next model you're at a disadvantage. Oh, by the way, one thing I just want to say that drives me crazy is all these people who say that GPT5 is the end of scaling loss. GPT5 is a smaller model. It was not designed to be better. It was designed to be more economical for OpenAI and Microsoft to run it. Any reference to GPT5 its scaling laws is crazy. Um, yeah. Sorry. Rant rant over.</p>
</details>

**David George:** 如果你愿意，我们这里有讲台。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We got the pedestal up here if you want.</p>
</details>

**Gavin Baker:** 是的，完全正确。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, exactly.</p>
</details>

**David George:** 握手。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Shaking your hand.</p>
</details>

**Gavin Baker:** 是的，我们可以。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we could. Yeah,</p>
</details>

**David George:** 那会很好。嗯，你想谈谈芯片吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that'd be good. Uh, do you want to talk about chips?</p>
</details>

**Gavin Baker:** 当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sure.</p>
</details>

### AI芯片市场格局：英伟达与Google TPU之争

**David George:** 好的。我知道你喜欢英伟达。谈谈你对英伟达、AMD、TPU、ASIC的看法，以及你认为那里的市场结构会如何发展，各个参与者拥有的竞争优势是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, okay. I know you love Nvidia. Talk about, you know, your view of Nvidia, AMD, TPUs, AS6, and how do you think sort of market structure shakes out there, you know, competitive advantage that the various players have?</p>
</details>

**Gavin Baker:** 是的。嗯，我认为这确实是英伟达和Google TPU之间的竞争。然后，我认为没有被广泛认识到的是Broadcom和AMD实际上正在共同进入市场。英伟达不再仅仅是一家半导体公司，我相信你明天会从黄仁勋那里听到。你知道，它以前是一家半导体公司，然后是一家拥有CUDA的软件公司，现在是一家拥有这些机架级解决方案的系统公司，现在可以说是一家拥有数据中心级别架构的公司，他们正在进行横向扩展和纵向扩展的网络架构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Um I think it goes I think it is really um it's a fight between Nvidia and um the Google TPU and then something that I don't think is broadly appreciated is the extent to which Broadcom and AMD are effectively going to market together. Nvidia is no longer just a a semiconductor company as I'm sure you'll hear from Jensen tomorrow. you know not it was a semiconductor company then a software company with CUDA now systems company with these rack level solutions and now arguably you know a data center level uh company with the you know level of architecting they're doing with scale up scale across and um scale out scale across networking um</p>
</details>

**Gavin Baker:** 所以网络、结构、软件，这一切都很重要。Broadcom对Meta这样的公司说的是：“嘿，我们将为你构建一个理论上可以与英伟达的结构竞争的结构，它混合了NVLink和InfiniBand或以太网。嗯，它将建立在以太网上。它将是一个开放标准。嘿，我们将为你制作你的TPU版本，顺便说一句，Google花了三代才让它正常工作。你知道吗？如果你的ASIC不好，你可以直接插入AMD。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so the networking the fabric the software it's all important and what Broadcom is saying to companies like Meta is hey we will build you a fabric that can theor theoretically compete with Nvidia's fabric which is a mixture of NVLink and either Infiniband or Ethernet. Um it will build it on Ethernet. It's going to be an open standard. And hey, we'll we'll make you your version of of TPU, which by the way took Google three generations to get working. And you know what? If your ASIC isn't good, you can just plug AMD right in. Um</p>
</details>

**Gavin Baker:** 但我个人认为大多数这些ASIC都会失败。嗯，特别是如果它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but I personally believe most of those AS6s are going to fail. um particularly if it's</p>
</details>

**David George:** 随着时间的推移，在一段时间内还是在全部时间？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in the fullness of time like over a period of time or in the fullness of time</p>
</details>

**Gavin Baker:** 在未来3年内，我认为你会看到一系列备受瞩目的ASIC项目被取消，特别是如果Google开始对外销售TPU，这在X上已经传得沸沸扬扬。你知道，谁知道具体会如何运作，因为如果你是Anthropic，你知道，有传言说Anthropic想购买数百亿美元的TPU，如果你是Anthropic，你可能不想让Google看到你的秘密武器，但有办法解决这个问题。所以我认为这实际上是Google及其TPU（目前由Broadcom支持）与英伟达之间的较量，Google可以随时从Broadcom手中拿回TPU。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in the next 3 years I think you'll see a bunch of high-profile um ASIC programs canled especially if Google um starts selling TPUs externally which has been all over X and you know they you know who knows exactly how that would work because if you're anthropic you know it's just rumored anthropic wants to buy tens of billions of TPUs if you're anthropic maybe you don't want Google seeing your secret sauce but there's ways around on that. So I think this is really a battle between Google and its TPU enabled by Broadcom for now and Google can take the TPU away from Broadcom whenever they want.</p>
</details>

**David George:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Gavin Baker:** 现在他们不能做Broadcom正在做的以太网网络，但他们控制着TPU。嗯，所以这实际上是Google和TPU对抗英伟达，你知道，亚马逊，那是一个非常有才华的团队，可以说是最有才华的硅半导体超大规模团队，Anaperna团队，我想Tranium 3可能会比Tranium 2好得多，Google花了三代才把TPU做好，嗯，然后AMD会，你知道，永远是第二供应商，你需要一个第二供应商。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now they can't do the Ethernet networking that Broadcom is is doing uh but they control the TPU. Um so it's really Google and the TPU verse um Nvidia you know with with you know Amazon like that's a very talented team arguably the most talented silicon tumidity hyperscaler the anaperna team like I think the tranium 3 will probably be a much better chip than the tranium 2 it took three generations to get the TPU right um and then AMD will you know will always be kind of the second source and you need a second source</p>
</details>

### AI驱动的商业模式转变与未来展望

**David George:** 好的，令人兴奋。嗯，你认为会发生什么？好的，我想回到商业模式。所以，一个被广泛讨论的大问题是颠覆的来源，这个房间里的大多数CEO都是创业公司的CEO，他们正试图击败一些现有企业，或者找到一些新的市场机会，而最成熟的机会往往出现在一个大的平台转变伴随着商业模式转变的时候。嗯，所以有几个领域我能明显地看到。所以，你知道，我们是Decagon的投资者，客户支持，你可以很容易地看到一种商业模式，它的定价基于任务的解决，因为它非常可衡量。嗯，你可以看到，你知道，就像在编码中，很多商业模式现在已经转向了消费，你知道，显然特别是对于面向开发者的东西，这很舒服，而且广为人知。那行业的其他部分呢？因为我觉得有一种敷衍了事的情况正在发生，那就是我们要去获取所有的服务，但问题是，你到底要怎么做？这会非常困难。那么你对此有任何预测吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">all right exciting uh what do you think happens Okay. So I want to go back um to business models. So one of the big things that is widely discussed is like you know source of disruption and most of the CEOs in this room are CEOs of startups who are trying to go beat some incumbent or find you know some new market opportunity and the most ripe opportunities tend to come when you have a big platform shift that is also accompanied with a business model shift. Um and so there are a couple of areas where I can see it. I feel like in an obvious way. So, you know, we're investors in decagon customer support like you can pretty easily see a business model that is priced on the resolution of a task because it's so measurable. Um you can see you know like in coding like a lot of the business model has now shifted to consumption and you know obviously especially for developer facing things like that's comfortable um and pretty wellnown. What about the rest of the industry? Cuz I feel like there's sort of this handwave thing that is going on which is like we're going to go get all of services but it's like okay so how do you actually go do that? It's going to be pretty hard. So do you have any prediction on how that plays out?</p>
</details>

**Gavin Baker:** 嗯，我认为你在客户服务中看到的情况，这是一个简单的首例，你有很多文本数据，大型语言模型擅长处理文本。你可以，你知道，可能很容易地运行一些**强化学习**（RL: Reinforcement Learning）来确保它们获得一个好的验证奖励。你知道，验证奖励就是满意的客户或首次通话解决问题等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well I think what you're seeing in customer service which is kind of like an easy first example u where you have a lot of textual data that LLMs are good at text. you can kind of, you know, probably really easily run some RL to make sure that they, you know, get a good verified reward. You know, verified reward being a happy customer or first call resolution or whatever it is. Um,</p>
</details>

**Gavin Baker:** 而且我认为你会看到这种情况发生，就像人类一样，我们基本上是根据结果获得报酬的，很多AI将增强人类，但也可能取代一些人类，这将涉及根据结果获得报酬。你知道，回到消费者商业模式，你知道，每个人都在谈论联盟费用。当然，我会有我自己的AI。它将是Grock的一个版本，嗯，因为我们都是XAI的股东。它将是Grock的一个版本，它了解我，它喜欢我。嗯，你知道，当我，当我想，你知道，下次我想去度假时，它会知道我喜欢去的酒店，它会说：“嘿，三家酒店。我有Gavin，你知道，我有Gavin要来。谁的价格最好，房间最好？”嗯，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and but I do think you will see that played out like humans, we're fundamentally paid for paid paid based on outcomes and a lot of AI will be augmenting humans, but probably also replacing some humans and that will involve being paid u paid for outcomes. you know, going back to the consumer business model, you know, everybody's talking about affiliate fees. And for sure, I'm going to have, you know, my own AI. It will be a version of Grock, um, because we're both XAI shareholders. It will be a version of Grock that knows me and it likes me. Um, and, you know, when I when I want to, you know, the next time I want to go on vacation, it will know the hotels that I like to go to and it'll say, "Hey, three hotels. I have Gavin, you know, I have Gavin coming. Who's got the best price and the best room?" Um,</p>
</details>

**David George:** 这将大大提升你送给贝基的礼物，以防万一，贝基在观众席上。她真的很欣赏你提到《阿呆与阿瓜》。我让你知道。嗯，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it's going to massively upgrade the gifts that you give to Becky just in case as Becky Becky's in the audience. She really appreciated your Dumb and Dumber reference. I'll have you know. Um,</p>
</details>

**Gavin Baker:** 但嗯，是的，然后可能会有一些联盟费用。再说一次，那只是根据结果获得报酬，并关闭那个循环，这可能会导致商业模式的一些退化，因为Google为什么从不启动一个市场？因为人们系统性地高估了他们一旦通过Google获得客户后将其保留为有机客户的能力。所以他们系统性地支付过高，并且他们继续这样做。这就是为什么Google从不转向结果或市场，因为广告导致广告商系统性地支付过高。所以这种低效率将被挤压出去，但是的，我们将转向结果，你知道，我想埃隆（Elon Musk）今天发推说，你知道，工作将变得可选，你知道，就像你不再在超市购买蔬菜，如果你愿意，你可以自己种菜。现在，谁知道我们需要多长时间才能达到那个阶段，但我认为这听起来并不完全不可信，考虑到这项技术的强大程度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but um yeah, and then there will probably be some sort of affiliate fee. And again, that's just being paid for an outcome and kind of closing that loop, which will be probably a little bit of a business model degradation because the great why why did Google never start a marketplace? because people overvalue systematically their ability once they've acquired a customer through Google to keep it as an organic customer. So they systematically overpay and they continue doing that. That's why Google never went to outcomes or marketplace because advertising leads to the advertisers systematically overpaying. So that inefficiency will be squeezed out but yeah we'll go to outcomes and you know I think Elon tweeted today that you know work would become optional you know like instead of buying your vegetables um you know at a at a supermarket you can grow your own garden if you want. Now, who knows how long it takes us to get there, but I that doesn't sound wildly implausible to me for how powerful this technology is.</p>
</details>

**Gavin Baker:** 我刚刚被卡帕西（Karpathy）的话震惊了，你知道，两天前，他被描绘成一个怀疑论者，因为他说**通用人工智能**（AGI: Artificial General Intelligence，指AI系统能够像人类一样理解、学习和应用知识来解决任何问题）还有10年才能实现。你在开玩笑吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I was just struck Karpathy, you know, whatever two days ago, you know, is being painted as like a skeptic for saying AGI is 10 years away. Are you kidding?</p>
</details>

**David George:** 疯了。10年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Insane. 10 years.</p>
</details>

**Gavin Baker:** 是的。是的。请给我更短的时间线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. Sign me up. We have shorter timelines, please.</p>
</details>

**David George:** 是的。那么，不，那太棒了。当我们谈到非常激动人心的未来事物时，机器人技术，你有什么看法？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Well, so no, that's awesome. While we're on the topic of very exciting futuristic things, robotics, do you have a view on</p>
</details>

**Gavin Baker:** 是的，非常真实。这将是特斯拉（Tesla）与中国人的竞争，就像在汽车领域特斯拉与中国人的竞争一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, very real. And it's going to be Tesla versus the Chinese in the same way it's Tesla versus the Chinese in in uh cars.</p>
</details>

**David George:** 电动汽车。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Electric cars. Yeah.</p>
</details>

**Gavin Baker:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**David George:** 我只想说汽车，不是电动汽车。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would just say cars, not electric cars.</p>
</details>

**Gavin Baker:** 是的。汽车。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Cars.</p>
</details>

**David George:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**David George:** 你对时间线有概念吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do you have a sense of timeline?</p>
</details>

**Gavin Baker:** 我的意思是，你们都可以看Optimus的视频。嗯，我认识的每个机器人专家都非常印象深刻。嗯，你知道，有一个巨大的争论。是**人形机器人**（humanoids: 具有人类外形和功能的机器人）还是非人形机器人？我认为这场争论已经结束了，因为人形机器人可以，你知道，通过观看YouTube视频来学习，然后人类，你知道，穿上套装并向机器人展示如何做，这更容易。我的意思是，看到所有，你知道，50个Optimus机器人做50种不同任务的视频，这有点疯狂，然后它非常简单，你知道，你把玻璃杯正确地放进洗碗机了吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, you can you can all watch the Optimus videos. Um, every roboticist I know is extremely impressed. Um, you know, there's there's a giant debate. Is it going to be humanoids or not humanoids? I think that debate is over because humanoids can kind of learn, you know, from watching YouTube videos and then it's easier for a human being um, you know, to put on a suit and show the robot how to do it. I mean, it's kind of crazy to watch the video of all, you know, the 50 Optimus robots doing 50 different tasks and then it's very simple, you know, did you did you put the glass in the dishwasher correctly or not?</p>
</details>

**David George:** 这太有趣了，Gavin。我总是喜欢和你聊天。嗯，让我们给Gavin鼓掌。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is so fun, Gavin. I always love chatting with you. Uh, let's give a hand to Gavin.</p>
</details>

**Gavin Baker:** 谢谢你，David。谢谢你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you, David. Thank you.</p>
</details>

**David George:** 好的。接下来，我们有一个非常激动人心的关于构建真实世界基础设施的小组讨论。嗯，但首先，请给我们几分钟。我们得在这里快速更换一下舞台。所以，谢谢你们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. Next up, we have a very exciting panel on building out real world infrastructure. Uh, but first, give us a few minutes. We got to do a quick uh sta uh stage change here. So, thank you.</p>
</details>

**Gavin Baker:** 谢谢大家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks everybody.</p>
</details>

**Gavin Baker:** 谢谢你，伙计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you, man.</p>
</details>