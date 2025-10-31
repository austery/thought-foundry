---
date: '2025-10-31'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=5ze3ZNvOdRY
tags:
  - ai-bubble
  - ai-infrastructure
  - gpu-market
  - ai-model-market
  - saas-transformation
title: AI泡沫：与2000年互联网泡沫的对比及AI产业的未来展望
summary: 本文深入探讨了当前AI领域是否存在泡沫的问题，并通过与2000年互联网泡沫的对比，分析了AI基础设施投资、芯片市场竞争、模型市场结构以及SaaS和消费级AI应用层的转型。嘉宾Gavin Baker和David George认为，尽管AI投资巨大，但其高投资回报率和实际应用场景的快速增长表明，目前并非泡沫。文章还展望了AI在机器人和未来工作中的潜力，并强调了现有科技巨头在AI竞赛中的优势。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - market-cycles
people:
  - Gavin Baker
  - David George
  - Andrej Karpathy
  - Jensen Huang
  - Elon Musk
  - Larry Page
  - Mark Zuckerberg
companies_orgs:
  - OpenAI
  - Google
  - A16Z
  - Atrades
  - Nvidia
  - Level 3
  - Global Crossing
  - WorldCom
  - AMD
  - Broadcom
  - DeepMind
  - Anthropic
  - Amazon
  - XAI
  - Meta
  - Intel
  - Microsoft
  - Adobe
  - IBM
  - Figma
  - Tesla
  - Cisco
products_models:
  - Gemini
  - TPU
  - CUDA
  - NVLink
  - Infiniband
  - Ethernet
  - Grok
  - GPT-5
  - Optimus
  - Netscape Navigator
  - ChatGPT
media_books: []
status: evergreen
---
### AI泡沫：与2000年互联网泡沫的对比

我们是否正处于一个AI泡沫之中？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Are we in an AI bubble?</p>
</details>

Gavin Baker表示，他认为我们今天并未身处AI泡沫之中。他曾有幸（或不幸，取决于如何看待）在2000年泡沫期间担任科技投资者，那次泡沫实际上是一场电信泡沫。他认为，将今天与2000年进行比较和对比非常有益。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, I do not believe we're in an AI bubble today. I was, depending on how you look at it, the privilege and the misfortune of being a tech investor during the year 2000 bubble, which was really a telecom bubble. And I think it's really helpful to compare and contrast today to the year 2000.</p>
</details>

2000年的互联网泡沫，或者说电信泡沫，其标志是所谓的**暗光纤**（Dark Fiber: 已铺设但未被激活使用的光纤）。在泡沫顶峰时期，97%已铺设的光纤处于闲置状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The year 2000 internet bubble or telecom bubble was defined by something called dark fiber. At the peak, 97% of the fiber that had been laid was dark.</p>
</details>

与此形成鲜明对比的是今天，现在没有**暗GPU**（Dark GPUs: 未被激活使用的图形处理器）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Contrast that with today. There are no dark GPUs.</p>
</details>

这引出了我们开场的炉边谈话。我们将开门见山地提出一个禁忌问题：你准备好了吗？如果AI是当今世界上最大的趋势，那么它的证据在哪里？为什么它才刚刚开始在经济中显现？正如Andrej Karpathy所问，AI代理（agents）真的只是“幽灵”吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that brings us to our opening fireside chat. We're going to start with a taboo question right out of the gate. Are you ready for it? If AI love it. If AI is the biggest trend in the world right now, where is the evidence for it? Why is it only just beginning to show up in the economy? And as Andre Carpathy asked, are agents really just ghosts?</p>
</details>

为了开启这个话题并帮助我们回答这个问题，请大家和我们一起欢迎Atrades的管理合伙人兼首席投资官Gavin Baker。你们中的一些人可能认识Gavin，他是Twitter上那位思想深刻的人。每当有重大的AI新闻出现时，我知道不少人都会指望Gavin来解释到底发生了什么。因此，非常感谢Gavin今天能和我们在一起。与他一同出席的是我们A16Z的普通合伙人David George。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To kick this off and to help us answer this question, please join us in welcoming Gavin Baker, managing partner and CIO of Atrades. Now, some of you may know Gavin as that really thoughtful guy on Twitter. Anytime some big piece of AI news comes out, I know more than a few people who count on Gavin to explain what the f is really going on. So, a huge thank you to Gavin for being with us today. Joining him is our very own David George, general partner at A16Z.</p>
</details>

Gavin Baker补充道，他非常感谢被邀请，并期待接下来的两天，相信自己会学到很多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Same. Um really grateful to you for inviting me, grateful to your colleagues for having me here. I'm really look forward to the next uh two days. I think I'm going to learn a lot. So, thank you.</p>
</details>

### AI基础设施投资与回报

David George提出，我们目前在美国拥有大约一万亿美元的数据中心，并计划在未来五年内再增加三到四万亿美元。在过去三年中，我们已经建成的数据中心容量，仅从美元价值来看，就超过了整个美国州际公路系统（该系统耗时40年建成），而且这还是经过通货膨胀调整后的数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have about a trillion dollars of data centers in the US. The plan is to add 3 to4 trillion in the next 5 years. Over the past three years, we have already built out in data center capacity a larger amount of dollars than the entire US interstate highway system, which took 40 years just in terms of dollars. And that's a inflation adjusted.</p>
</details>

仅OpenAI一家公司，就已承诺达成超过一万亿美元的交易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Open AAI alone I think has more than a trillion dollars of deals set up that they've committed to and we can talk about that.</p>
</details>

但与此同时，这些关于基础设施的巨大数字听起来令人担忧，让人联想到“泡沫”。然而，Google最近发布了一项统计数据，显示在过去17个月中，其处理的**tokens**（标记: 文本或数据处理的基本单位）数量增加了150倍。因此，一方面是听起来疯狂且令人恐惧的建设规模，另一方面却是实际发生的巨大使用量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but at the same time, so those are all like big numbers on infrastructure and they're scary and they say oh bubble and Google uh released a stat recently that they have seen a 150x increase in the amount of tokens processed in the last 17 months. So on the one hand you've got this crazy scary sounding buildout. On the other hand you actually have a bunch of usage that's happening.</p>
</details>

Gavin Baker重申，他认为我们今天并未身处AI泡沫之中。他曾亲身经历2000年的电信泡沫，并认为将今天与2000年进行比较非常有帮助。首先，思科（Cisco）在当年泡沫顶峰时期的市盈率是其追踪收益的150到180倍，而英伟达（Nvidia）目前的市盈率更接近40倍，因此估值情况大相径庭。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So are we in an AI bubble? Uh I do not believe we're in an AI bubble today. Uh I was um I had depending on how you look at it the privilege and the misfortune of being a tech investor during the um the year 2000 bubble which was really a telecom bubble. And I think it's really helpful to compare and contrast today to the year 2000. um you know first I think uh Cisco peaked at 150 or 180 times trailing earnings Nvidia is at more like 40 times so valuations are very differently very different.</p>
</details>

然而，最重要的是，2000年的互联网泡沫或电信泡沫是由“暗光纤”定义的。如果你是2000年泡沫的亲历者，你就会知道那是什么。暗光纤就是字面意义上铺设在地下的光纤，但从未被“点亮”使用。光纤本身是无用的，除非两端都有所需的光学设备、交换机和路由器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">most important however is that the year 2000 internet bubble or telecom bubble was defined by something called dark fiber um and if you're a veteran of of the year 2000 you'll know what that was but dark fiber was literally fiber that was laid down in the ground and not lit up. Fiber is useless unless you have the optics and switches and routers uh that you need on either side.</p>
</details>

他清楚地记得，像Level 3、Global Crossing或WorldCom这样的公司会宣称：“我们这个季度铺设了20万英里的暗光纤。这太棒了。互联网将变得如此庞大。我们迫不及待地要点亮它们。”在泡沫顶峰时期，美国97%已铺设的光纤都是闲置的。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">Um you so I vividly remember, you know, companies like Level 3 or Global Crossing or WorldCom would come in and they say, "We laid 200,000 miles of dark fiber this quarter. This is so amazing. The internet's going to be so big. Um you know, we can't wait to light these up." At the peak of the bubble, 97% of the fiber that had been laid in America was dark.</p>
</details>

与今天对比，没有“暗GPU”。你只需阅读任何技术论文，就会发现训练运行中最大的问题之一是GPU正在“融化”（即被大量使用，达到极限）。有一个非常简单的方法可以触及所有这些问题的核心：那就是GPU最大消费者的**投资资本回报率**（ROIC: Return on Invested Capital）。这些公司都是上市公司，自从它们增加资本支出以来，其ROIC增加了大约10个百分点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Contrast that with today. There are no dark GPUs. All you have to do is read any technical paper. And that one of the biggest problems in a training run is that GPUs are melting. And there's a very simple way to kind of cut to the heart of all of this. It is the return on invested capital of the biggest spenders on GPUs who are all public and those companies since they ramped up capex have seen call it a 10point increase in their ROIC's.</p>
</details>

因此，到目前为止，所有支出的投资回报率（ROI）都非常积极。关于在Blackwell（英伟达新一代GPU架构）上投入的巨额资金是否会继续保持积极回报，这是一个有趣且开放的辩论。他个人认为会，但毫无疑问，到目前为止，AI的投资回报率非常积极，而且从估值来看，我们根本没有处于泡沫之中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So thus far the ROI on all the spending has been really positive. It's a really it's an interesting and open debate about whether or not it will continue to be positive with the quantum of spend we're going to have on Blackwell. I personally think it will, but there's no debate that thus far the ROI on AI has been really positive and valuation wise. We're just not in a bubble.</p>
</details>

David George表示完全同意。他补充说，还可以对比当时和现在技术的实际采用和使用情况。互联网在当时实际上很难普及，因为需要建立一个双边网络：你必须建立网站，然后吸引用户，这要困难得多。而对于AI工具，你只需通过**API**（Application Programming Interface: 应用程序编程接口）将其“点亮”，或者打开ChatGPT网站，所有人都可以立即访问它们。它们建立在云计算和互联网之上，可以立即分发给数十亿人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I couldn't agree more. The other thing that I would say is you can contrast the actual adoption and usage of the technology from then, right? The internet was actually really hard because you had to build a two-sided network. like you had to build websites and then you had to get users and it's much more difficult in the case of the AI tools you know all you have to do is kind of light them up via API or you know turn on your website chatgpt and everybody has access to them right built on top of cloud computing on top of the internet uh and you know you can get to instant distribution a billion people right away</p>
</details>

Gavin Baker指出，另一个因素是交易对手。这些公司恰好是世界上最优秀的公司，它们集体每年产生约3000亿美元的自由现金流，资产负债表上还有5000亿美元的现金。因此，当人们惊呼“天哪，这是一个泡沫，它会破裂吗？”时，他认为情况还不错。点亮一吉瓦（gigawatt）的电力大约需要400到500亿美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">absolutely so uh the other thing is the counterparties so you mentioned this they happen to be the best companies in the history of the world right I think collectively the people who are coming out of pocket. They're writing checks uh for this capex. I think they collectively generate like $300 billion of free cash flow a year. Is that right? Some directionally round numbers. Yeah. And they have $500 billion of cash on the balance sheet. So whenever people are like, "Oh my god, it's a bubble. Is it going to pop?" I'm like, I think it's kind of fine. I mean, you know, it costs like4 or 50 billion to light up one gigawatt.</p>
</details>

David George补充说，如果使用的是英伟达的芯片，那么就有大约8000亿美元的缓冲，并且每年还在增长3000亿美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. If you're on Nvidia chips on Nvidia chips. Yeah. Yeah. So, you know, there's kind of like an $800 billion buffer growing $300 billion every year.</p>
</details>

Gavin Baker回应道，这与投资资本回报率的观点一致。他提到，拉里·佩奇（Larry Page）曾在公司内部表示：“我宁愿破产，也不愿输掉这场竞赛。”他认为这正是Google，或许也包括Meta，所持有的心态——这被视为**生存攸关**（existential）的问题，必须取胜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">well, this this goes to your point on return on invested capital. It might we should see that next down a little bit. A little bit of a mismatch at the buildout, but you know, it's you know, Larry Page apparently internally said, I'm happy to go bankrupt rather than lose this race. And I think that is the mentality for sure at Google and perhaps Meta. um it's just seen as existential and you have to win.</p>
</details>

### AI芯片市场竞争格局

David George提到，关于这些**循环注资交易**（round-tripping deals: 指投资方将资金投入被投公司，被投公司再用这笔资金购买投资方产品或服务，形成资金循环）已经有很多文章讨论。在互联网建设时期，循环注资曾是一个大问题，那么在这里我们该如何看待它呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So, uh lots has been written about these roundtpping deals. So, give me the because you know roundtpping is a very scary concept from you know the internet buildout that was a big problem. What do you make of it here?</p>
</details>

Gavin Baker认为，这种情况客观上正在发生。资金是可互换的，所以如果英伟达与OpenAI签订协议，他们可以说“你不能用我们的钱来购买我们的芯片”，但资金是可互换的。不过，这只发生在非常小的规模上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is objectively happening. Um you know money is fungeible. So Nvidia if they sign a deal with OpenAI they can say hey you can't use our money to buy our chips but money is fungeible. But it's happening at a very small scale.</p>
</details>

他认为，推动这种现象的不是为GPU或数据中心采购提供资金的需求，而是竞争动态。英伟达最大的竞争对手不是AMD，也不是Broadcom，更不是Marvell或Intel，而是Google。更具体地说，是Google，因为Google拥有**TPU**（Tensor Processing Unit: 谷歌开发的用于机器学习的专用集成电路）芯片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think what is driving um what is driving this isn't the need to, you know, finance GPU or data center purchases, but it's actually com competitive dynamics. So, Nvidia's biggest competitor, it's not AMD, it's not Broadcom, um, you know, it's it's certainly not Marll. Um, it's not it's not Intel, it's Google. And more specifically, it is Google because Google owns uh the TPU chip.</p>
</details>

TPU是目前（也许是唯一）可替代英伟达用于训练的芯片，也可能是最佳的推理替代方案。Google是一个有问题的竞争对手，因为他们还拥有DeepMind公司，并推出了Gemini产品。他认为，可以说Google是当今领先的AI公司。在过去两三个月里，他们可能已经获得了15到20个百分点的流量份额，而且这仅仅是Gemini的流量，不包括搜索概览。他猜测，从实际流量来看，Google目前比OpenAI、Anthropic或任何其他公司都要大，而且这项业务将运行在TPU上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is by far maybe perhaps today the only um alternative to NVIDIA for training um and maybe the best uh inference alternative. And what Google and Google's a problematic competitor because they also own a company called DeepMind and they have a product called Gemini. Um and I think you could argue that they are the leading um AI company today. I think they've taken 15 or 20 points of traffic share in the last two or three months and that does not that's just traffic to Gemini. It does not include search overviews. I suspect on a actual traffic basis, Google is bigger than OpenAI, Enthropic, anyone today and that that business is going to run on TPUs.</p>
</details>

此外，目前还有其他三个相关的实验室：Anthropic（亚马逊和Google的“专属”公司），它将主要运行在TPU和Traniums上。因此，目前处于领先地位的是XAI和OpenAI。如果Google向Anthropic这样的实验室提供资金和芯片支持，那么出于竞争原因，英伟达很难不做出回应。正如英伟达CEO黄仁勋（Jensen Huang）所说，他认为这将是一项很好的投资。因此，他认为对循环注资的担忧被夸大了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we have three other labs that are relevant today. There's Enthropic and that's an Amazon and T that's an Amazon and Google captive. Uh, trrenium is um, you know, Enthropic is really going to run on uh, TPUs and traniums. And so you're left with XAI and OpenAI at the forefront. And if Google is going to a lab like Enthropic and saying, I'm going to help you fund raise and give you chips, I think for competitive reasons, it's very hard for Nvidia not to respond. And as Jensen said, he thinks it's going to be a good investment. Um, so I think the roundtpping concerns are pretty overblown.</p>
</details>

David George认为，英伟达真正需要的是Meta公司能有所作为，或者出现另一个美国开源玩家，又或者与中国在AI领域达成某种合作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And what I mean what Nvidia really needs is they need you know Meta to get their act together or another American open source player to emerge or you know maybe some sort of um dant with China and AI.</p>
</details>

Gavin Baker表示，当人们问他关于英伟达及其所有举动和循环注资时，他的反应是：他们所做的一切都是完全理性的。从长远来看，他们所做的一些事情可能不会带来最高的资本回报，但从战略上讲，他认为这些都是正确的举动。他认为黄仁勋是与埃隆·马斯克（Elon Musk）并列的两位他所认识的最佳CEO之一。他认为黄仁勋正在出色地运用手中的强牌。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">Yeah. Yeah. I when people ask me about Nvidia and all the moves and the roundtpping my reaction is everything they've done is completely rational. 100% rational. Yeah. Long term. Yeah. Sure. things they do may not have as high of a return on capital as other things, but strategically I think they're all kind of the right moves. Jensen's one of the two best CEOs along with Elon I have ever known. Um, and I think he's he's playing a strong hand really well.</p>
</details>

David George表示，英伟达不再仅仅是一家半导体公司。正如黄仁勋所说，它曾是一家半导体公司，然后是一家拥有**CUDA**（Compute Unified Device Architecture: 英伟达开发的并行计算平台和编程模型）的软件公司，现在是一家提供机架级解决方案的系统公司，甚至可以说是一家数据中心级别的公司，因为它在进行大规模扩展和跨网络架构设计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Um I think it goes I think it is really um it's a fight between Nvidia and um the Google TPU and then something that I don't think is broadly appreciated is the extent to which Broadcom and AMD are effectively going to market together. Nvidia is no longer just a a semiconductor company as I'm sure you'll hear from Jensen tomorrow. you know not it was a semiconductor company then a software company with CUDA now systems company with these rack level solutions and now arguably you know a data center level uh company with the you know level of architecting they're doing with scale up scale across and um scale out scale across networking um</p>
</details>

因此，网络、结构和软件都非常重要。Broadcom正在向Meta等公司表示，他们将构建一个理论上可以与英伟达的结构（NVLink和InfiniBand或以太网的混合体）竞争的结构。他们将在**以太网**（Ethernet: 一种局域网技术）上构建它，这将是一个开放标准。他们还会为客户制作自己的TPU版本，顺便说一句，Google花了三代才使其正常工作。如果客户的**ASIC**（Application-Specific Integrated Circuit: 专用集成电路）不好用，他们可以直接插入AMD的芯片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so the networking the fabric the software it's all important and what Broadcom is saying to companies like Meta is hey we will build you a fabric that can theor theoretically compete with Nvidia's fabric which is a mixture of NVLink and either Infiniband or Ethernet. Um it will build it on Ethernet. It's going to be an open standard. And hey, we'll we'll make you your version of of TPU, which by the way took Google three generations to get working. And you know what? If your ASIC isn't good, you can just plug AMD right in.</p>
</details>

Gavin Baker个人认为，这些ASIC中的大多数将会失败，特别是在未来三年内，我们会看到一些备受瞩目的ASIC项目被取消，尤其如果Google开始对外销售TPU的话。虽然Google销售TPU的具体方式尚不清楚，因为如果像Anthropic这样的公司（传闻想购买数百亿美元的TPU）不希望Google看到其“秘密武器”，但总有办法解决。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but I personally believe most of those AS6s are going to fail. um particularly if it's in the fullness of time like over a period of time or in the fullness of time in the next 3 years I think you'll see a bunch of high-profile um ASIC programs canled especially if Google um starts selling TPUs externally which has been all over X and you know they you know who knows exactly how that would work because if you're anthropic you know it's just rumored anthropic wants to buy tens of billions of TPUs if you're anthropic maybe you don't want Google seeing your secret sauce but there's ways around on that.</p>
</details>

因此，他认为这实际上是Google及其TPU（目前由Broadcom支持）与英伟达之间的较量。Google可以随时从Broadcom手中夺回TPU的控制权，尽管他们无法像Broadcom那样进行以太网网络连接，但他们控制着TPU。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think this is really a battle between Google and its TPU enabled by Broadcom for now and Google can take the TPU away from Broadcom whenever they want. Yeah. Now they can't do the Ethernet networking that Broadcom is is doing uh but they control the TPU. Um so it's really Google and the TPU verse um Nvidia you know with with you know Amazon like that's a very talented team arguably the most talented silicon tumidity hyperscaler the anaperna team like I think the tranium 3 will probably be a much better chip than the tranium 2 it took three generations to get the TPU right um and then AMD will you know will always be kind of the second source and you need a second source</p>
</details>

### AI模型市场结构与竞争

David George转向模型公司的话题，询问Gavin Baker对市场结构、谁将胜出以及他最看好谁的看法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. All right. So, you started getting into the model companies. Let's just talk about the model. So, we can come back to chips and memory and networking because I want to get your take on that, but you know, since we're on the model side, what do you think happens with market structure? who wins where, you know, who are you most optimistic about? You know, where do you have concerns?</p>
</details>

Gavin Baker认为，对于投资者来说，谦逊是一种重要的美德。如果我们将ChatGPT比作互联网领域的网景导航者（Netscape Navigator），那么在互联网繁荣的这个阶段，Google尚未成立，马克·扎克伯格（Mark Zuckerberg）还在读中学，特拉维斯·卡兰尼克（Travis Kalanick）还在上幼儿园。所以，现在还处于非常早期的阶段。因此，在应用层做出高度自信的预测，保持谦逊非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, um I think humility is an important virtue for an investor. And I'm just if we're going to make an analogy and say that chat GPT is to AI has Netscape Navigator was to the internet. At this point in the internet boom, Google had not been founded. Mark Zuckerberg was in middle school. um Travis Kalanick was in was in kindergarten. Um so it's just very early. So I think it's important to be humble um about making high confidence predictions at the application layer.</p>
</details>

这也是为什么他认为在这些新技术浪潮的初期，基础设施层通常是一个相对安全的领域。他认为很难有高度的信念，除了观察到互联网是一种非常**颠覆性创新**（disruptive innovation）。他认为有合理的论据表明AI可能是一种**延续性创新**（sustaining innovation），因为数据、购买计算能力的资本和分发渠道这些原始要素，当今最大的科技公司都拥有。因此，只要它们执行良好，聘用优秀人才，并拥有稳健的战略，AI就可能成为**“七巨头”**（Mag 7: 指市值最大的七家科技公司）中许多成员的延续性创新。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">It's one reason I think the the infrastructure layer is often maybe a safe place to be at the beginning of one of these new technology waves. Well, actually talk about the role they play at the infrastructure layer because they are there's a piece of them that like obviously they they serve as an as an infrastructure layer powering other application providers and then they they also have their own application. So I think I would draw the distinction. Yeah, I mean that's most true of of Google. Um but I just um I think it's hard to have high conviction other than to observe you know the internet was a very disruptive innovation. Um, I think there's reasonable arguments that AI could be a sustaining innovation because the raw ingredients of kind of data, you know, the capital to buy compute and distribution, which is what you need. All of the big um, you know, today's biggest tech companies have all of those in spades. So, as long as they execute well, hire good people, um, and have a sound strategy, like I think you could see it be a sustaining innovation for a lot of members of the Mag 7.</p>
</details>

另一方面，他确实认为AI是**生存攸关**（existential）的，如果执行不力，那么IBM的命运可能就是好的结局。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the other hand, I do think it's existential and if you don't execute, you know, IBM might be a might be a good fate.</p>
</details>

David George总结了AI成功的要素：数据、分发、计算能力、资金和人才。这些巨头完全有理由获胜，而且现在他们比以往任何时候都更加认真地对待此事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. Yeah. That's uh that's tough. Uh, yeah. Data, distribution, compute, dollars, talent. Yeah. And like they have every right to win. Yeah, they have every right to win. And it seems now more than before, they're taking it quite seriously.</p>
</details>

Gavin Baker补充说，也许Google尤其如此，但Meta也正在采取引人注目的行动。对他来说，ChatGPT对Google来说就是“珍珠港事件”，我们将看到他们如何回应，而他们也正在缓慢地开始回应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, maybe Google in particular, but obviously Meta Meta is making the dramatic moves they're making, too. No, to me, Chat GPT was Pearl Harbor for Google, and we're going to see how they responded, and they're slowly starting to respond.</p>
</details>

David George询问，在这些公司的平台业务（基础设施部分）中，他预测会发生什么？他认为商业模式的市场结构会如何演变？它们最终会像云计算公司一样成为高利润业务，还是像航空公司一样竞争激烈、利润率低？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And then what do you think what's your forecast for uh that sort of in the platform piece of their business, the infrastructure piece? What do you think? How do you think it shakes out in terms of like business model market structure? So do you think they end up as high margin businesses like the clouds or like aircraft manufacturers or do you think they end up very competitive and low margin businesses like airlines?</p>
</details>

Gavin Baker认为它们不会成为航空公司。任何人都可以看看2021年和2022年**SaaS**（Software as a Service: 软件即服务）公司的损益表，你会看到80-90%的毛利率。而AI的本质，由于**规模法则**（scaling laws: 指模型性能随计算资源、数据量和参数规模的增加而呈现可预测的提升趋势），以及Richard Sutton所说的“更好的更苦涩”（the better the bitter listen），它们需要更多的计算资源，因此其**毛利率**（gross margins）在结构上会更低。但这并不意味着它们不能成为伟大的企业。他认为，在很长一段时间内，我们不会看到任何一个AI实验室或前沿实验室的毛利率能接近SaaS或互联网时代的水平。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I don't think they will be airlines but you can anybody can just look at the P&L you know of a SAS company circa 2021 and 2022 and you see you know 80 90% gross margins and the nature of AI because of scaling laws Richard Sutton's the better the bitter listen um they're just more compute inensive so their gross margins are structurally going to be lower but that doesn't mean they can't be great businesses is I just I think it's going to be a long time before we see a truly kind of you know an AI lab a frontier lab with gross margins anywhere near SAS or internet era margins now their opex can be a lot lower um and you know maybe that's how you square it but just the gross margins are fundamentally different and until scaling laws change and the importance of test time compute and things like that change which I don't see happening they're they are going to be lower margin.</p>
</details>

### 应用层SaaS业务的转型

David George谈到应用层。他提到SaaS业务的争论，每隔几个月就会出现，有人说SaaS很糟糕，已经死了，一切都会消失。而Andre Karpathy最近的采访，市场对此反应积极，就像过山车一样。那么，SaaS和软件会发生什么变化呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Okay. So, let's talk about uh application layer. So, you just you just kind of got into it a little bit with the SAS businesses and uh I don't know if you've waited into this fight on Twitter, but it's sort of you know the the like you know every few months it comes up and it's like SAS is terrible and it's dead and you know it's all going to go away and then you know with uh Andre's uh Darkeesh interview he just did it's you know like the market's reacting positively to it. And it's like a whipssaw reaction. So what do you think happens with SAS and software?</p>
</details>

Gavin Baker表示，他可能在2024年初就说过，他认为所有应用层SaaS都可能归零，这与基础设施SaaS不同。现在他的看法更加细致，认为可能会出现一些非常成功的应用层SaaS公司，特别是如果它们服务于更分散的**中小企业**（SMB: Small and Medium-sized Business）客户群。Google让客户可以非常容易地使用他们的数据，并基本上创建任何他们想要的SaaS应用，而且他们的数据不会与其他人共享。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, I think I, you know, first said probably in early 24 that I thought all of application SAS might be a zero different than than um infrastructure SAS. I I would say I have a more nuanced view now and I think there could be some really big application SAS winners, especially if you serve like a more fragmented SMB customer base. Um, you know, Google has make it really easy if you're a customer of theirs to use your data and essentially make any SAS app you want and then your data isn't shared with anyone else.</p>
</details>

他认为，许多零售商在与亚马逊（Amazon）打交道时犯了一个关键错误：他们看到亚马逊的利润率，然后说“我们不想从事那种业务”。这显然是一个可怕的错误。25年后的今天，亚马逊拥有非常健康的零售利润率。他担心应用层SaaS公司正试图维持其现有的毛利率结构，因为他们认为如果毛利率下降，他们的股价也会下跌。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but the critical mistake that I think a lot of retailers made um in dealing with Amazon is they looked at Amazon's margins and they said we don't want to be in that business. And that was obviously a terrible mistake. And here we are 25 years later and you know Amazon has really healthy uh retail margins. And I worry that application SAS companies are trying to preserve their existing gross margin structures because they believe that if their gross margins go down um their stocks will go down.</p>
</details>

鉴于我们刚刚讨论的内容，在AI领域取得成功，**毛利率压力**（gross margin pressure）是必然的。他不知道他们为何担忧，因为我们有微软（Microsoft）和Adobe这样的实例证明，软件公司可以很好地应对利润率下降。在整个AI浪潮到来之前，公司曾害怕从本地部署转向云端，因为云的利润率较低。云利润率确实较低，但仍然不错。微软成功地从本地永久许可证加维护的模式过渡到云模式，并在十年内成为一支表现不错的股票。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is definitionally impossible given what we just discussed to succeed in AI without gross margin pressure. And I do not know why they have concerns because we have an existence proof that a software company can deal well with declining margins in Microsoft in Adobe to the whole AI thing came along. You know, it used to be that companies were scared to go from on premise to the cloud because margins were lower. Cloud margins are are are lower. They're still good. And Microsoft, they transitioned, you know, from, you know, on premise perpetual licenses with maintenance uh to a cloud model. and it was a pretty good stock for 10 years.</p>
</details>

因此，如果他是一家应用层SaaS公司，他会说“不要害怕”，并将毛利率下降视为成功的标志，而不是耻辱或令人恐惧的事情。这很有趣，因为每当我们讨论公司时，几乎所有来展示的公司都说“我们是一家AI公司”，而我们总是会看它们的毛利率。现在，拥有较低的毛利率对他们来说反而成了一种荣誉，因为这意味着“天哪，人们真的在使用你们的AI产品！”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I don't if you're an application SAS company like I what I would just say is don't be scared and look at declining gross margins kind of has a mark of success rather than you know a badge of shame or something to be feared. It's actually so funny you say that because whenever we have these discussions about companies, basically every company that comes to present to us is like we're an AI company and um we always look at the gross margins and it's become like a badge of honor for them to actually have low gross margins because like oh my god people are actually using your AI stuff. Yeah.</p>
</details>

Gavin Baker补充道，如果你出现并说“我是一家AI公司，我有82%的毛利率”，人们会觉得“我不认为有人真的在使用它”。所以，这很有趣。如果你是这些上市公司之一，你是宁愿拥有10美元收入和90%毛利率，还是50美元收入和60%毛利率？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if you show up and you're like I'm an AI company and it's like I got 82% gross margins. You're like I don't think anybody's really using it. Uh so yeah it's uh it's interesting. Yeah. If you're if you're one of these public companies, would you rather have like 10 bucks of revenue with 90% gross margins or 50 bucks of revenue with 60% gross margins?</p>
</details>

David George认为这不难选择。在公开市场很难做到，但如果能很好地沟通，并与云转型进行类比，投资者会感到兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Not hard. Like it's not that comp Yeah, not that complicated. It's hard to do in the public market. It's hard to do in public, but if you communicate it, you draw parallels to the cloud transition. I mean, I'm an investor and I would be excited about it, you know, and I don't think I'm alone in the world.</p>
</details>

Gavin Baker指出，这些传统应用层SaaS公司拥有的巨大优势是它们拥有这些非常盈利的现有业务。因此，你可以让你的新AI产品收支平衡，并追赶领导者。他很惊讶为什么没有更多公司这样做，比如为什么没有一家上市公司试图与Cursor竞争？Cursor现在拥有数万亿的**tokens**（标记: 文本或数据处理的基本单位），总有一天他们会有足够的编码tokens，使其难以追赶。但他认为，如果今天有一家上市公司说：“我要全力以赴，我要让它收支平衡。我有一个现有业务。我要把它附加到所有产品上。”那么，你就有机会。而且，这个奖项显然非常巨大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the big advantage these legacy application SAS companies have is they do have these really profitable existing businesses. And so you can run your new AI products at break even um and you know catch up to the leaders etc etc and I'm just surprised more people have not done that like why are none of the public coding companies even trying to compete with cursor and the reality is cursor now they have a trillion trillion tokens and you know there there will be a point where they have enough coding tokens that it's tough to catch them but I think today if you're a public coding and you said, "I'm going to lean in. I'm going to run it break even. I have an existing business. I'm going to attach it to everything." Hey, you have a chance. And you know, the prize is clearly really big.</p>
</details>

David George提到，Figma就是一个例子，他们拥有极高的毛利率，但他们表示将积极分发其AI工具，毛利率将会下降。投资者在提出一些澄清问题后，认为这实际上是一件好事。因此，他很惊讶为什么公共市场中没有更多公司这样做，因为Figma的经验证明这是可行的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I see Martin is skeptical. Martin's shaking his head. You have a chance. I said a chance. So, I said a chance. That's like a dumb and dumber. You're telling me there's a chance, not like a real chance. You're telling me. You're telling me there's a chance. Yes. Exactly. It's like a Yeah, exactly. I totally agree. Yeah, we actually saw I mean you know we see it uh you know we may if we if we you know Figma for example like when they went out they are extremely high gross margin and they're like hey we're going to you know pretty aggressively distribute our AI tools and our gross margins are going to go down and you know investors asked a few clarifying questions and then they were like oh that actually would be a good thing and so surprised more people in the public markets aren't doing it worked out okay for them</p>
</details>

### 消费级AI与互联网巨头的策略

David George转向消费级应用层。Google曾是互联网的门户，现在仍然是，其整个商业模式都建立在获取意图并将其引导到其他网站，让用户在那里进行操作。但AI的出现改变了这种模式。他今天尝试了浏览器，做了一些非常基本的购物操作，发现仍有改进空间，但他相信它会实现。那么，消费级互联网公司的市场结构会发生什么变化？它们会被整合到聊天机器人界面中，还是会有其他发展？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it's working out well uh long game to play what about on the consumer side at the application layer so obviously ly Google was the portal to the internet is kind of still is the portal to the internet and the whole business model was predicated upon taking some intent and directing you to someone else's website where they would do stuff with you. It's kind of not going to be that way. It already is not that way uh with uh with AI. Although I tried the browser today and I tried to do some pretty basic shopping stuff and it's you know it's still still some work to do but I think it will get there. So what do you actually think happens with the sort of market structure of the consumer internet companies? Do they get subsumed into a component of a chatbot interface or do you think it's something else?</p>
</details>

Gavin Baker表示，首先，保持谦逊，很难说。其次，他认为那些推出AI浏览器的公司可能会后悔，因为有一个名为Chrome的浏览器拥有50亿用户。如果你是Google，你可以看看Google Buzz的遭遇。他们非常谨慎，目前正与政府进行诉讼。他们可以很容易地做到这一点，甚至可能做得更好，但他们不想做第一个。所以现在，有两家AI原生公司推出了自己的浏览器，让它们运行3到6个月，获得一点先发优势，然后Google就会说：“哇，我们不得不这样做。”他不知道这会如何发展，也许对于那些不拥有Chrome的公司来说会是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so one humility hard to say. to I would just say I think um the AI companies that have launched these AI browsers may come to regret it because there's something called Chrome that has whatever it is 5 billion users and if you're Google um you know you can just go look at what happened with Google Buzz you they are very cautious you know there's you know they're currently in in litigation with the government um and they could easily do this and probably do it even better, but they didn't want to be first. So now you have two AI native companies with their own browsers, let them run for 3 to 6 months, get a little head start, and then wow, here we are. We had to do this. And I don't know how that's going to work. Um maybe for the companies other than Google who don't own Chrome. Um</p>
</details>

David George认为，数据和分发在这方面非常强大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah, I guess data and distribution is pretty powerful in that.</p>
</details>

Gavin Baker表示，事后诸葛亮总是容易的。他认为，今天很难与那些拥有庞大现有用户群的公司抗衡。他还认为，**推理能力**（reasoning）从根本上改变了这些前沿模型的经济学。在推理能力出现之前，他常说，如果没有独特、有价值的数据和互联网规模的分发，前沿模型将是历史上折旧最快的资产。他认为推理能力真正改变了这一点，因为**强化学习**（RL: Reinforcement Learning）在后训练阶段的工作方式，拥有庞大用户群现在可以解锁曾是所有伟大消费级互联网公司核心的**飞轮效应**（flywheel: 指一个良性循环，产品越好用户越多，用户越多算法越好，算法越好产品越好）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, hindsight's 2020. Um, and the one thing I would say is I do think it's tough to bet against the companies with large existing user bases today. Um, and I also think reasoning has fundamentally changed the economics of these frontier models. you know, pre-reasoning. Um, I often said if you are a frontier model without access to unique, valuable data and internet scale distribution, you're the fastest depreciating asset in history. I think reasoning really changed that because the way RL works during post training, having a big user base now kind of unlocks that flywheel that was at the center of every great consumer internet company where um you have a good product, you get a lot of users, the users make the algorithm better, um the algorithm makes the product better and it just spins. And that it's not quite spinning yet in AI, but you can squint and see it. And so I think that fundamentally changes economics for anthropic, for XAI, um, for OpenAI. Um, but I mean Mark Zuckerberg's trying hard.</p>
</details>

虽然在AI领域这种飞轮效应尚未完全启动，但已经可以看到其潜力。他认为这从根本上改变了Anthropic、XAI和OpenAI的经济模式。马克·扎克伯格（Mark Zuckerberg）也在努力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. We'll see. Yeah. Yeah. Yeah. A lot of smart people in there now.</p>
</details>

Gavin Baker认为，令人担忧的是，从某种奇怪的角度来看，中国的开源模型生态系统对于任何试图追赶那四个领先实验室的美国公司来说都是天赐之物。因为问题在于，如果你没有Gemini 2.5 Pro或其后续版本，或者我们未见的Grok后续版本，或者GPT的后续检查点，那么在训练下一个模型时你将处于劣势。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, for sure. I I think the worry is and I think this is another interesting thing is if you don't like in a strange way the Chinese open source model ecosystem is a godsend to any American company that's trying to catch those four leading labs because the problem is if you don't have Gemini 2.5 Pro or a later checkpoint of it or a later checkpoint of Grock that we don't see or a later GPT checkmate uh checkpoint training the next model you're at a disadvantage.</p>
</details>

顺便说一句，有一件事让他非常恼火：所有那些说GPT-5是规模法则终结的人。GPT-5是一个更小的模型。它设计目的不是为了更好，而是为了让OpenAI和微软运行它更经济。任何提及GPT-5及其规模法则的说法都是疯狂的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, by the way, one thing I just want to say that drives me crazy is all these people who say that GPT5 is the end of scaling loss. GPT5 is a smaller model. It was not designed to be better. It was designed to be more economical for OpenAI and Microsoft to run it. Any reference to GPT5 its scaling laws is crazy. Um, yeah. Sorry. Rant rant over.</p>
</details>

### AI、未来工作与机器人

David George询问Gavin Baker对机器人技术的看法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We got the pedestal up here if you want. Yeah, exactly. Shaking your hand. Yeah, we could. Yeah, that'd be good. Uh, do you want to talk about chips? Sure. So, okay. I know you love Nvidia. Talk about, you know, your view of Nvidia, AMD, TPUs, AS6, and how do you think sort of market structure shakes out there, you know, competitive advantage that the various players have? All right exciting uh what do you think happens Okay. So I want to go back um to business models. So one of the big things that is widely discussed is like you know source of disruption and most of the CEOs in this room are CEOs of startups who are trying to go beat some incumbent or find you know some new market opportunity and the most ripe opportunities tend to come when you have a big platform shift that is also accompanied with a business model shift. Um and so there are a couple of areas where I can see it. I feel like in an obvious way. So, you know, we're investors in decagon customer support like you can pretty easily see a business model that is priced on the resolution of a task because it's so measurable. Um you can see you know like in coding like a lot of the business model has now shifted to consumption and you know obviously especially for developer facing things like that's comfortable um and pretty wellnown. What about the rest of the industry? Cuz I feel like there's sort of this handwave thing that is going on which is like we're going to go get all of services but it's like okay so how do you actually go do that? It's going to be pretty hard. So do you have any prediction on how that plays out?</p>
</details>

Gavin Baker认为，在客户服务领域，这是一个容易的例子，因为那里有大量的文本数据，而大型语言模型（LLMs）擅长处理文本。你可以很容易地运行一些**强化学习**（RL: Reinforcement Learning）来确保它们获得良好的验证奖励，例如满意的客户或首次呼叫解决问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well I think what you're seeing in customer service which is kind of like an easy first example u where you have a lot of textual data that LLMs are good at text. you can kind of, you know, probably really easily run some RL to make sure that they, you know, get a good verified reward. You know, verified reward being a happy customer or first call resolution or whatever it is. Um,</p>
</details>

他确实认为，这种模式会推广开来，因为人类从根本上是根据结果获得报酬的，而许多AI将增强人类的能力，但也可能取代一些人类，这将涉及根据结果付费。回到消费级商业模式，每个人都在谈论联盟营销费用。他肯定会有自己的AI，它将是Grok的一个版本，因为它了解并喜欢他（因为他们都是XAI的股东）。下次他想去度假时，它会知道他喜欢去的酒店，并会说：“嘿，有三家酒店。我有Gavin要来。谁的价格最好，房间最好？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and but I do think you will see that played out like humans, we're fundamentally paid for paid paid based on outcomes and a lot of AI will be augmenting humans, but probably also replacing some humans and that will involve being paid u paid for outcomes. you know, going back to the consumer business model, you know, everybody's talking about affiliate fees. And for sure, I'm going to have, you know, my own AI. It will be a version of Grock, um, because we're both XAI shareholders. It will be a version of Grock that knows me and it likes me. Um, and, you know, when I when I want to, you know, the next time I want to go on vacation, it will know the hotels that I like to go to and it'll say, "Hey, three hotels. I have Gavin, you know, I have Gavin coming. Who's got the best price and the best room?" Um,</p>
</details>

David George开玩笑说，这会大大提升Gavin送给Becky的礼物。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it's going to massively upgrade the gifts that you give to Becky just in case as Becky Becky's in the audience. She really appreciated your Dumb and Dumber reference. I'll have you know. Um,</p>
</details>

Gavin Baker继续说，然后可能会有一些联盟营销费用。这又是根据结果付费，并形成一个闭环。这可能会导致商业模式的一些“降级”，因为Google为什么从未建立一个市场？因为人们系统性地高估了他们一旦通过Google获得客户后，将其保留为自然客户的能力。所以他们系统性地支付过高费用，并且继续这样做。这就是为什么Google从未转向基于结果或市场的模式，因为广告导致广告商系统性地支付过高费用。这种低效率将被挤压出去，我们将转向基于结果的模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but um yeah, and then there will probably be some sort of affiliate fee. And again, that's just being paid for an outcome and kind of closing that loop, which will be probably a little bit of a business model degradation because the great why why did Google never start a marketplace? because people overvalue systematically their ability once they've acquired a customer through Google to keep it as an organic customer. So they systematically overpay and they continue doing that. That's why Google never went to outcomes or marketplace because advertising leads to the advertisers systematically overpaying. So that inefficiency will be squeezed out but yeah we'll go to outcomes and you know I think Elon tweeted today that you know work would become optional you know like instead of buying your vegetables um you know at a at a supermarket you can grow your own garden if you want. Now, who knows how long it takes us to get there, but I that doesn't sound wildly implausible to me for how powerful this technology is.</p>
</details>

他认为埃隆·马斯克今天发推文说，工作将成为可选的，就像你可以在超市买蔬菜，也可以自己种菜一样。谁知道这需要多久才能实现，但他认为这听起来并非完全不可信，考虑到这项技术的强大。他被Andrej Karpathy两天前被描绘成一个怀疑论者所震惊，仅仅因为他说**通用人工智能**（AGI: Artificial General Intelligence）还需要10年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I was just struck Karpathy, you know, whatever two days ago, you know, is being painted as like a skeptic for saying AGI is 10 years away. Are you kidding?</p>
</details>

David George认为这太疯狂了，10年！

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Insane. 10 years. Yeah. Yeah. Sign me up. We have shorter timelines, please.</p>
</details>

Gavin Baker认为机器人技术“非常真实”。这将是特斯拉（Tesla）与中国之间的竞争，就像电动汽车领域一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, very real. And it's going to be Tesla versus the Chinese in the same way it's Tesla versus the Chinese in in uh cars. Electric cars. Yeah. Yeah. I would just say cars, not electric cars. Yeah. Cars. Yeah.</p>
</details>

当被问及时间线时，Gavin Baker表示，大家可以观看**Optimus**（特斯拉人形机器人项目）的视频。他认识的每一位机器人专家都对此印象深刻。关于是人形机器人还是非人形机器人的巨大争论已经结束了，因为人形机器人可以从观看YouTube视频中学习，而且人类穿上套装向机器人演示也更容易。观看50个Optimus机器人执行50个不同任务的视频，然后简单地判断“你是否正确地把玻璃杯放进了洗碗机”，这真是太疯狂了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do you have a sense of timeline? I mean, you can you can all watch the Optimus videos. Um, every roboticist I know is extremely impressed. Um, you know, there's there's a giant debate. Is it going to be humanoids or not humanoids? I think that debate is over because humanoids can kind of learn, you know, from watching YouTube videos and then it's easier for a human being um, you know, to put on a suit and show the robot how to do it. I mean, it's kind of crazy to watch the video of all, you know, the 50 Optimus robots doing 50 different tasks and then it's very simple, you know, did you did you put the glass in the dishwasher correctly or not?</p>
</details>

David George感谢Gavin Baker的精彩分享，并表示每次与他聊天都非常愉快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is so fun, Gavin. I always love chatting with you. Uh, let's give a hand to Gavin. Thank you, David. Thank you. All right. Next up, we have a very exciting panel on building out real world infrastructure. Uh, but first, give us a few minutes. We got to do a quick uh sta uh stage change here. So, thank you. Thanks everybody. Thank you, man.</p>
</details>