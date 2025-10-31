---
author: a16z
date: 2025-10-31
guest: ''
layout: post.njk
source: 'https://www.youtube.com/watch?v=5ze3ZNvOdRY'
speaker: a16z
tags:
  - ai-bubble
  - data-center-infrastructure
  - gpu-utilization
  - market-structure
  - business-models
title: AI泡沫是否存在？Gavin Baker与David George探讨AI基础设施、市场结构与商业模式
summary: 本文深入探讨了当前人工智能领域是否存在泡沫，并将其与2000年的互联网泡沫进行对比。Gavin Baker和David George分析了AI基础设施的巨大投入、GPU的利用率、估值差异以及企业在AI竞赛中的战略布局。文章还讨论了AI对SaaS业务模式和消费互联网市场结构的影响，以及芯片、TPU和ASIC等关键技术领域的竞争格局。两位专家强调了数据、计算和分发在AI时代的重要性，并对未来AI应用和机器人技术的发展进行了展望。
insight: ''
draft: true
series: ''
category: technology
area: market-analysis
project:
  - ai-impact-analysis
  - investment-strategy
  - us-analysis
people:
  - Gavin Baker
  - David George
  - Andre Karpathy
  - Jensen Huang
  - Elon Musk
  - Larry Page
  - Mark Zuckerberg
companies_orgs:
  - Atrades
  - A16Z
  - OpenAI
  - Google
  - Nvidia
  - AMD
  - Broadcom
  - Anthropic
  - XAI
  - Meta
  - Microsoft
  - Tesla
products_models:
  - Gemini
  - TPU
  - CUDA
  - NVLink
  - Infiniband
  - Ethernet
  - ChatGPT
  - Grock
  - Optimus
  - Blackwell
  - Tranium
  - Cursor
media_books:
  - Battlestar Galactica
  - X
  - YouTube
status: evergreen
---
### AI泡沫之辩：与2000年互联网泡沫的对比

我们是否正处于**AI泡沫**（Artificial Intelligence Bubble: 指人工智能相关资产价格被过度推高，脱离基本面）之中？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Are we in an AI bubble?</p>
</details>

>> 我个人认为，我们今天并未处于**AI泡沫**之中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, I do not believe we're in an AI bubble today.</p>
</details>

>> 我曾有幸（或不幸，取决于你如何看待）在2000年泡沫期间担任科技投资者，那实际上是一个**电信泡沫**（Telecom Bubble: 指2000年前后电信公司股票被过度炒作的现象）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I was, depending on how you look at it, the privilege and the misfortune of being a tech investor during the year 2000 bubble, which was really a telecom bubble.</p>
</details>

>> 我认为将今天与2000年进行比较和对比非常有帮助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think it's really helpful to compare and contrast today to the year 2000.</p>
</details>

>> 2000年的互联网泡沫或电信泡沫，其特征是所谓的**暗光纤**（Dark Fiber: 指已铺设但未被激活用于数据传输的光纤电缆）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The year 2000 internet bubble or telecom bubble was defined by something called dark fiber.</p>
</details>

>> 在泡沫顶峰时期，97%已铺设的光纤处于闲置状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At the peak, 97% of the fiber that had been laid was dark.</p>
</details>

>> 与今天的情况形成对比的是，现在没有闲置的**GPU**（Graphics Processing Unit: 图形处理器，在AI计算中扮演核心角色）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Contrast that with today. There are no dark GPUs.</p>
</details>

### AI趋势与经济影响：核心问题与专家观点

这引出了我们的开场炉边谈话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that brings us to our opening fireside chat.</p>
</details>

我们将直接从一个禁忌问题开始，你准备好了吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're going to start with a taboo question right out of the gate. Are you ready for it?</p>
</details>

如果AI是当今世界最大的趋势，那么它的证据在哪里？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If AI love it. If AI is the biggest trend in the world right now, where is the evidence for it?</p>
</details>

为什么它才刚刚开始在经济中显现？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why is it only just beginning to show up in the economy?</p>
</details>

正如**Andre Karpathy**（知名AI研究员）所问，**AI智能体**（AI Agents: 能够自主感知环境、做出决策并执行任务的人工智能系统）真的只是幻影吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as Andre Carpathy asked, are agents really just ghosts?</p>
</details>

为了开启这个话题并帮助我们回答这个问题，请大家和我们一起欢迎**Gavin Baker**（Atrades管理合伙人兼首席投资官）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To kick this off and to help us answer this question, please join us in welcoming Gavin Baker, managing partner and CIO of Atrades.</p>
</details>

你们中的一些人可能知道Gavin是Twitter上那位思想深刻的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, some of you may know Gavin as that really thoughtful guy on Twitter.</p>
</details>

每当有重大AI新闻发布时，我知道不少人都指望Gavin来解释到底发生了什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Anytime some big piece of AI news comes out, I know more than a few people who count on Gavin to explain what the f is really going on.</p>
</details>

所以，非常感谢Gavin今天能和我们在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, a huge thank you to Gavin for being with us today.</p>
</details>

与他一同出席的是我们自己的**David George**（A16Z普通合伙人）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Joining him is our very own David George, general partner at A16Z.</p>
</details>

[音乐]

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">[Music]</p>
</details>

谁知道这音乐是哪来的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Who knows what that music was from?</p>
</details>

>> 很高兴他们选对了我们的振奋音乐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Glad they got our pump up music right.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes.</p>
</details>

《太空堡垒卡拉狄加》，1977年的原版。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Battlestar Galactica, the original 1977 one.</p>
</details>

以防几年后我们都得和赛昂人战斗。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in case we have to all fight Sylons in a few years.</p>
</details>

>> 嗯，是的，我想这是一个很好的话题引入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's it's uh yeah, good good segue into the topic, I guess.</p>
</details>

>> 所以，谢谢你来到这里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so, thank you for being here.</p>
</details>

我总是喜欢和你聊天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I always love talking to you.</p>
</details>

>> 我也是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Same.</p>
</details>

>> 非常感谢你的邀请，也感谢你的同事们让我来到这里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um really grateful to you for inviting me, grateful to your colleagues for having me here.</p>
</details>

我非常期待接下来的两天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm really look forward to the next uh two days.</p>
</details>

我想我会学到很多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think I'm going to learn a lot.</p>
</details>

所以，谢谢你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, thank you.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right.</p>
</details>

所以，大话题是AI泡沫，一种宏观的视角。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the big topic is AI bubble kind of macro view of things.</p>
</details>

>> 那么，也许我们先从几个数据开始，为讨论奠定基础，然后我想听听你对当前形势的看法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so maybe just to start with a couple stats to set the stage and then I want to get your take on on where we're at.</p>
</details>

美国目前约有价值一万亿美元的**数据中心**（Data Center: 集中存放计算机服务器和网络设备的设施）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have about a trillion dollars of data centers in the US.</p>
</details>

计划在未来五年内再增加三到四万亿美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The plan is to add 3 to4 trillion in the next 5 years.</p>
</details>

在过去三年中，我们已经建设的数据中心容量，按美元计算，已经超过了整个美国州际公路系统（耗时40年）的总投资，这还是经过通货膨胀调整后的数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Over the past three years, we have already built out in data center capacity a larger amount of dollars than the entire US interstate highway system, which took 40 years just in terms of dollars. And that's a inflation adjusted.</p>
</details>

我认为**OpenAI**（一家人工智能研究和部署公司）仅凭自身就已承诺了超过一万亿美元的交易，我们可以谈谈这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Open AAI alone I think has more than a trillion dollars of deals set up that they've committed to and we can talk about that.</p>
</details>

>> 但与此同时，这些都是关于基础设施的巨大数字，它们听起来很吓人，让人觉得“哦，泡沫来了”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but at the same time, so those are all like big numbers on infrastructure and they're scary and they say oh bubble and Google uh released a stat recently that they have seen a 150x increase in the amount of tokens processed in the last 17 months.</p>
</details>

谷歌最近发布了一项统计数据，显示在过去17个月里，他们处理的**Token**（Token: 文本处理中的最小单位，可以是单词、子词或字符）数量增加了150倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Google uh released a stat recently that they have seen a 150x increase in the amount of tokens processed in the last 17 months.</p>
</details>

所以一方面，你看到这种听起来疯狂又吓人的建设；另一方面，你实际上看到了大量的实际使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So on the one hand you've got this crazy scary sounding buildout. On the other hand you actually have a bunch of usage that's happening.</p>
</details>

那么，我们是否正处于AI泡沫之中？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So are we in an AI bubble?</p>
</details>

>> 我个人认为，我们今天并未处于AI泡沫之中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh I do not believe we're in an AI bubble today.</p>
</details>

>> 我曾有幸（或不幸，取决于你如何看待）在2000年泡沫期间担任科技投资者，那实际上是一个电信泡沫。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh I was um I had depending on how you look at it the privilege and the misfortune of being a tech investor during the um the year 2000 bubble which was really a telecom bubble.</p>
</details>

>> 我认为将今天与2000年进行比较和对比非常有帮助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think it's really helpful to compare and contrast today to the year 2000.</p>
</details>

>> 首先，我认为**思科**（Cisco: 知名网络设备公司）的市盈率曾达到150或180倍，而**英伟达**（Nvidia: 知名GPU制造商）目前更接近40倍，所以估值非常不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um you know first I think uh Cisco peaked at 150 or 180 times trailing earnings Nvidia is at more like 40 times so valuations are very differently very different most important however is that the year 2000 internet bubble or telecom bubble was defined by something called dark fiber um and if you're a veteran of of the year 2000 you'll know what that was but dark fiber was literally fiber that was laid down in the ground and not lit up.</p>
</details>

然而，最重要的是，2000年的互联网泡沫或电信泡沫是由所谓的暗光纤定义的，如果你是2000年的老兵，你就会知道那是什么，但暗光纤实际上就是铺设在地下的光纤，但没有被点亮。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um you know first I think uh Cisco peaked at 150 or 180 times trailing earnings Nvidia is at more like 40 times so valuations are very differently very different most important however is that the year 2000 internet bubble or telecom bubble was defined by something called dark fiber um and if you're a veteran of of the year 2000 you'll know what that was but dark fiber was literally fiber that was laid down in the ground and not lit up.</p>
</details>

光纤本身毫无用处，除非两端配备了所需的**光模块**（Optics: 光学器件）、**交换机**（Switches: 网络设备，用于连接网络中的设备）和**路由器**（Routers: 网络设备，用于在不同网络之间转发数据包）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Fiber is useless unless you have the optics and switches and routers uh that you need on either side.</p>
</details>

>> 我清楚地记得，像**Level 3**、**Global Crossing**或**WorldCom**（均是2000年互联网泡沫时期的电信公司）这样的公司会进来，他们会说：“我们这个季度铺设了20万英里的暗光纤。这太棒了。互联网将会非常庞大。我们迫不及待地要点亮这些光纤。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um you so I vividly remember, you know, companies like Level 3 or Global Crossing or WorldCom would come in and they say, "We laid 200,000 miles of dark fiber this quarter. This is so amazing. The internet's going to be so big. Um you know, we can't wait to light these up."</p>
</details>

在泡沫顶峰时期，美国97%已铺设的光纤处于闲置状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At the peak of the bubble, 97% of the fiber that had been laid in America was dark.</p>
</details>

与今天的情况形成对比的是，现在没有闲置的GPU。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Contrast that with today. There are no dark GPUs.</p>
</details>

你只需阅读任何技术论文，就会发现**训练运行**（Training Run: 指训练AI模型的过程）中最大的问题之一是GPU因过热而熔化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All you have to do is read any technical paper. And that one of the biggest problems in a training run is that GPUs are melting.</p>
</details>

有一个非常简单的方法可以切中所有这些问题的核心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there's a very simple way to kind of cut to the heart of all of this.</p>
</details>

那就是那些最大的GPU消费者（他们都是上市公司）的**投资资本回报率**（ROIC: Return on Invested Capital，衡量公司利用投入资本创造利润的效率）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is the return on invested capital of the biggest spenders on GPUs who are all public</p>
</details>

这些公司自增加**资本支出**（Capex: Capital Expenditure，公司用于购买、维护或升级固定资产的资金）以来，其ROIC增加了大约10个百分点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and those companies since they ramped up capex have seen call it a 10point increase in their ROIC's.</p>
</details>

所以到目前为止，所有这些支出的**投资回报率**（ROI: Return on Investment，衡量投资效率的指标）都非常积极。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So thus far the ROI on all the spending has been really positive.</p>
</details>

关于在**Blackwell**（英伟达新一代GPU架构）上投入的巨额资金是否会继续保持积极的投资回报率，这是一个有趣且开放的辩论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a really it's an interesting and open debate about whether or not it will continue to be positive with the quantum of spend we're going to have on Blackwell.</p>
</details>

我个人认为会，但目前为止AI的投资回报率非常积极，而且从估值来看，我们根本没有处于泡沫之中，这一点是无可争议的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I personally think it will, but there's no debate that thus far the ROI on AI has been really positive and valuation wise. We're just not in a bubble.</p>
</details>

我完全同意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I couldn't agree more.</p>
</details>

我要说的另一点是，你可以对比当时和现在技术的实际采用和使用情况，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other thing that I would say is you can contrast the actual adoption and usage of the technology from then, right?</p>
</details>

互联网实际上非常困难，因为你必须建立一个**双边网络**（Two-sided Network: 指连接两类不同用户群体的平台，其价值随两边用户数量增加而增加）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The internet was actually really hard because you had to build a two-sided network.</p>
</details>

你必须建立网站，然后吸引用户，这要困难得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like you had to build websites and then you had to get users and it's much more difficult in the case of the AI tools you know all you have to do is kind of light them up via API or you know turn on your website chatgpt and everybody has access to them right built on top of cloud computing on top of the internet uh and you know you can get to instant distribution a billion people right away</p>
</details>

而对于AI工具，你只需通过**API**（Application Programming Interface: 应用程序编程接口，允许不同软件系统相互通信）将其点亮，或者打开你的**ChatGPT**（OpenAI开发的大型语言模型）网站，所有人都可以立即访问它们，它们建立在云计算和互联网之上，你可以立即实现数十亿用户的分发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like you had to build websites and then you had to get users and it's much more difficult in the case of the AI tools you know all you have to do is kind of light them up via API or you know turn on your website chatgpt and everybody has access to them right built on top of cloud computing on top of the internet uh and you know you can get to instant distribution a billion people right away</p>
</details>

>> 绝对如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">absolutely so uh the other thing is the counterparties so you mentioned this they happen to be the best companies in the history of the world right I think collectively the people who are coming out of pocket.</p>
</details>

>> 另外一点是交易对手方，你提到了这一点，他们恰好是世界上有史以来最优秀的公司，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">absolutely so uh the other thing is the counterparties so you mentioned this they happen to be the best companies in the history of the world right I think collectively the people who are coming out of pocket.</p>
</details>

我认为那些集体掏钱，为这些资本支出买单的公司，每年合计产生约3000亿美元的**自由现金流**（Free Cash Flow: 公司在支付了运营费用和资本支出后所剩余的现金）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They're writing checks uh for this capex. I think they collectively generate like $300 billion of free cash flow a year.</p>
</details>

对吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is that right?</p>
</details>

大致是这个数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some directionally</p>
</details>

>> 大概的数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">round numbers.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

而且他们资产负债表上还有5000亿美元的现金。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And they have $500 billion of cash on the balance sheet.</p>
</details>

所以每当人们说：“哦，天哪，这是一个泡沫。它会破裂吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So whenever people are like, "Oh my god, it's a bubble. Is it going to pop?"</p>
</details>

我就会想，我觉得还好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm like, I think it's kind of fine.</p>
</details>

我的意思是，点亮一**吉瓦**（Gigawatt: 功率单位，等于十亿瓦特）的电力大约需要400到500亿美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, you know, it costs like4 or 50 billion to light up one gigawatt.</p>
</details>

>> 是的，如果你使用的是英伟达芯片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. If you're on Nvidia chips</p>
</details>

>> 使用英伟达芯片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">on Nvidia chips.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

所以，你知道，大概有8000亿美元的缓冲，而且每年还在增长3000亿美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you know, there's kind of like an $800 billion buffer growing $300 billion every year.</p>
</details>

>> 是的，我的意思是，其中一些公司的自由现金流可能已经开始……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I mean, um, free cash flow at some of them has begun to maybe uh, you know,</p>
</details>

>> 嗯，这回到了你关于投资资本回报率的观点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">well, this this goes to your point on return on invested capital.</p>
</details>

它可能会……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It might</p>
</details>

>> 我们应该会看到它在建设过程中略有下降。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we should see that next down a little bit. A little bit of a mismatch at the buildout,</p>
</details>

>> 但你知道，据称**拉里·佩奇**（Larry Page: Google联合创始人）在公司内部说过：“我宁愿破产，也不愿输掉这场竞赛。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but you know, it's you know, Larry Page apparently internally said, I'm happy to go bankrupt rather than lose this race.</p>
</details>

我认为这绝对是谷歌，也许还有**Meta**（Facebook母公司）的心态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think that is the mentality for sure at Google and perhaps Meta.</p>
</details>

>> 这被视为生死存亡的竞争，你必须赢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um it's just seen as existential and you have to win.</p>
</details>

### 循环注资交易与AI芯片竞争格局

好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

关于这些**循环注资交易**（Round-tripping Deals: 指投资方将资金投入被投资方，被投资方再用这笔资金购买投资方产品或服务的交易）已经有很多文章了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, uh lots has been written about these roundtpping deals.</p>
</details>

所以，请告诉我你的看法，因为循环注资是一个非常可怕的概念，在互联网建设时期曾是一个大问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, give me the because you know roundtpping is a very scary concept from you know the internet buildout that was a big problem.</p>
</details>

你对此有何看法？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What do you make of it here?</p>
</details>

>> 它确实客观存在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is objectively happening.</p>
</details>

>> 资金是**可互换的**（Money is fungible: 指资金没有特定来源或用途，可以自由流动和替换）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um you know money is fungeible.</p>
</details>

所以英伟达如果与OpenAI签订协议，他们可以说：“嘿，你不能用我们的钱来购买我们的芯片。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Nvidia if they sign a deal with OpenAI they can say hey you can't use our money to buy our chips but money is fungeible.</p>
</details>

但资金是可互换的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Nvidia if they sign a deal with OpenAI they can say hey you can't use our money to buy our chips but money is fungeible.</p>
</details>

但这只发生在非常小的规模上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But it's happening at a very small scale.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

而且我认为……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think um</p>
</details>

>> 我不知道这是否像加密货币或区块链。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I didn't know this was like a crypto or blockchain.</p>
</details>

>> 没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly.</p>
</details>

很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Good.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

>> 我认为驱动这一切的并不是为GPU或数据中心采购提供资金的需求，而是竞争动态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think what is driving um what is driving this isn't the need to, you know, finance GPU or data center purchases, but it's actually com competitive dynamics.</p>
</details>

所以，英伟达最大的竞争对手不是**AMD**（Advanced Micro Devices: 知名半导体公司），也不是**博通**（Broadcom: 知名半导体和软件公司），当然也不是**Marvell**（美满电子科技: 知名半导体公司），也不是**英特尔**（Intel: 知名半导体公司），而是谷歌。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, Nvidia's biggest competitor, it's not AMD, it's not Broadcom, um, you know, it's it's certainly not Marll. Um, it's not it's not Intel, it's Google.</p>
</details>

更具体地说，是谷歌，因为谷歌拥有**TPU**（Tensor Processing Unit: 谷歌开发的专用AI芯片）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And more specifically, it is Google because Google owns uh the TPU chip.</p>
</details>

这在今天可能是唯一可以替代英伟达进行训练的芯片，也许是最好的推理替代方案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is by far maybe perhaps today the only um alternative to NVIDIA for training um and maybe the best uh inference alternative.</p>
</details>

谷歌是一个有问题的竞争对手，因为他们还拥有一家名为**DeepMind**（谷歌旗下的人工智能研究公司）的公司，并且有一个名为**Gemini**（谷歌开发的多模态大型语言模型）的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what Google and Google's a problematic competitor because they also own a company called DeepMind and they have a product called Gemini.</p>
</details>

我认为你可以说他们是当今领先的AI公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and I think you could argue that they are the leading um AI company today.</p>
</details>

我认为他们在过去两三个月里占据了15到20个百分点的流量份额，这还不包括搜索概览的流量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think they've taken 15 or 20 points of traffic share in the last two or three months and that does not that's just traffic to Gemini. It does not include search overviews.</p>
</details>

我怀疑在实际流量基础上，谷歌今天比OpenAI、**Anthropic**（一家领先的AI安全和研究公司）或其他任何公司都要大，而且这项业务将运行在TPU上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I suspect on a actual traffic basis, Google is bigger than OpenAI, Enthropic, anyone today and that that business is going to run on TPUs.</p>
</details>

然后我们还有其他三个今天相关的实验室。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we have three other labs that are relevant today.</p>
</details>

有Anthropic，它是亚马逊和谷歌的专属公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's Enthropic and that's an Amazon and T that's an Amazon and Google captive.</p>
</details>

Anthropic将主要运行在TPU和**Tranium**（亚马逊开发的AI训练芯片）上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, trrenium is um, you know, Enthropic is really going to run on uh, TPUs and traniums.</p>
</details>

所以你只剩下**XAI**（埃隆·马斯克创立的人工智能公司）和OpenAI处于领先地位。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you're left with XAI and OpenAI at the forefront.</p>
</details>

如果谷歌去像Anthropic这样的实验室，说：“我将帮助你融资并提供芯片”，那么出于竞争原因，英伟达很难不做出回应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if Google is going to a lab like Enthropic and saying, I'm going to help you fund raise and give you chips, I think for competitive reasons, it's very hard for Nvidia not to respond.</p>
</details>

正如**黄仁勋**（Jensen Huang: 英伟达CEO）所说，他认为这将是一项很好的投资。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as Jensen said, he thinks it's going to be a good investment.</p>
</details>

>> 所以我认为对循环注资的担忧被夸大了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so I think the roundtpping concerns are pretty overblown.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

我的意思是，英伟达真正需要的是Meta能振作起来，或者另一个美国开源玩家出现，或者，你知道，也许与中国在AI方面达成某种协议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what I mean what Nvidia really needs is they need you know Meta to get their act together or another American open source player to emerge or you know maybe some sort of um dant with China and AI.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

当人们问我关于英伟达及其所有举动和循环注资时，我的反应是他们所做的一切都是完全理性的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I when people ask me about Nvidia and all the moves and the roundtpping my reaction is everything they've done is completely rational.</p>
</details>

>> 100%理性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">100% rational.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

从长远来看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Long term.</p>
</details>

是的，当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

他们所做的一些事情可能没有其他事情那么高的资本回报率，但从战略上讲，我认为它们都是正确的举动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sure. things they do may not have as high of a return on capital as other things, but strategically I think they're all kind of the right moves.</p>
</details>

>> 黄仁勋是我认识的两位最优秀的CEO之一，另一位是**埃隆·马斯克**（Elon Musk: 特斯拉和XAI创始人）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Jensen's one of the two best CEOs along with Elon I have ever known.</p>
</details>

>> 我认为他把一手好牌打得非常好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and I think he's he's playing a strong hand really well.</p>
</details>

### AI模型公司：市场结构与竞争展望

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right.</p>
</details>

所以你开始谈论模型公司了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you started getting into the model companies.</p>
</details>

我们来谈谈模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's just talk about the model.</p>
</details>

我们可以再回到芯片、内存和网络，因为我想听听你对这些的看法，但既然我们谈到模型方面，你认为市场结构会发生什么变化？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we can come back to chips and memory and networking because I want to get your take on that, but you know, since we're on the model side, what do you think happens with market structure?</p>
</details>

谁会赢，在哪里赢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">who wins where, you know, who are you most optimistic about?</p>
</details>

你最看好谁？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, where do you have concerns?</p>
</details>

你有什么担忧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, where do you have concerns?</p>
</details>

>> 所以，我认为谦逊是投资者的一项重要美德。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, um I think humility is an important virtue for an investor.</p>
</details>

如果我们要做一个类比，说ChatGPT之于AI，就像**网景导航者**（Netscape Navigator: 20世纪90年代流行的网页浏览器，互联网早期标志性产品）之于互联网一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm just if we're going to make an analogy and say that chat GPT is to AI has Netscape Navigator was to the internet.</p>
</details>

在互联网繁荣的这个阶段，谷歌还没有成立。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At this point in the internet boom, Google had not been founded.</p>
</details>

**马克·扎克伯格**（Mark Zuckerberg: Meta CEO）还在上初中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mark Zuckerberg was in middle school.</p>
</details>

**特拉维斯·卡兰尼克**（Travis Kalanick: Uber联合创始人）还在上幼儿园。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um Travis Kalanick was in was in kindergarten.</p>
</details>

所以现在还非常早期。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so it's just very early.</p>
</details>

所以我认为在应用层做出高置信度的预测时保持谦逊很重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think it's important to be humble um about making high confidence predictions at the application layer.</p>
</details>

这也是我认为在这些新技术浪潮的初期，基础设施层通常是一个更安全的地方的原因之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's one reason I think the the infrastructure layer is often maybe a safe place to be at the beginning of one of these new technology waves.</p>
</details>

嗯，实际上，谈谈他们在基础设施层扮演的角色，因为他们有一部分是基础设施层，为其他应用提供商提供动力，然后他们也有自己的应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, actually talk about the role they play at the infrastructure layer because they are there's a piece of them that like obviously they they serve as an as an infrastructure layer powering other application providers and then they they also have their own application.</p>
</details>

所以我想……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think</p>
</details>

>> 我会区分一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would draw the distinction.</p>
</details>

>> 是的，我的意思是，这在谷歌身上体现得最为明显。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I mean that's most true of of Google.</p>
</details>

>> 但我只是……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but I just um</p>
</details>

>> 我认为除了观察之外，很难有高度的信念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's hard to have high conviction other than to observe you know the internet was a very disruptive innovation.</p>
</details>

互联网是一项非常颠覆性的创新。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I think there's reasonable arguments that AI could be a sustaining innovation because the raw ingredients of kind of data, you know, the capital to buy compute and distribution, which is what you need.</p>
</details>

我认为有充分的理由认为AI可能是一项持续性创新，因为所需的基本要素——数据、购买计算资源的资本和分发——所有这些当今最大的科技公司都拥有。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I think there's reasonable arguments that AI could be a sustaining innovation because the raw ingredients of kind of data, you know, the capital to buy compute and distribution, which is what you need. All of the big um, you know, today's biggest tech companies have all of those in spades.</p>
</details>

所以，只要他们执行得好，雇佣优秀的人才，并有健全的战略，我认为你可能会看到它成为许多“七巨头”成员的持续性创新。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, as long as they execute well, hire good people, um, and have a sound strategy, like I think you could see it be a sustaining innovation for a lot of members of the Mag 7.</p>
</details>

另一方面，我确实认为这是生死存亡的，如果你不执行，那么像**IBM**（国际商业机器公司: 知名科技和咨询公司）那样的命运可能就是好的结局。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the other hand, I do think it's existential and if you don't execute, you know, IBM might be a might be a good fate.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

那太难了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's uh that's tough.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, yeah.</p>
</details>

数据、分发、计算、资金、人才。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Data, distribution, compute, dollars, talent.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

>> 而且，他们完全有权利获胜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And like they have every right to win.</p>
</details>

是的，他们完全有权利获胜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, they have every right to win.</p>
</details>

而且现在，他们似乎比以前更认真地对待这件事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it seems now more than before, they're taking it quite seriously.</p>
</details>

>> 是的，也许特别是谷歌，但显然Meta也在采取他们正在采取的戏剧性举动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, maybe Google in particular, but obviously Meta Meta is making the dramatic moves they're making, too.</p>
</details>

>> 不，对我来说，**ChatGPT**（OpenAI开发的大型语言模型）是谷歌的**珍珠港事件**（Pearl Harbor: 指二战中日本偷袭美国海军基地的事件，此处引申为突如其来的重大冲击），我们将看到他们如何回应，他们正在慢慢开始回应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, to me, Chat GPT was Pearl Harbor for Google, and we're going to see how they responded, and they're slowly starting to respond.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

那么你认为他们的平台业务，即基础设施部分，前景如何？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then what do you think what's your forecast for uh that sort of in the platform piece of their business, the infrastructure piece?</p>
</details>

你认为会怎样？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What do you think?</p>
</details>

你认为它在商业模式和市场结构方面会如何发展？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do you think it shakes out in terms of like business model market structure?</p>
</details>

你认为它们最终会成为像云服务或飞机制造商那样的高利润业务，还是会像航空公司那样竞争激烈、利润微薄的业务？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So do you think they end up as high margin businesses like the clouds or like aircraft manufacturers or do you think they end up very competitive and low margin businesses like airlines?</p>
</details>

>> 我不认为它们会成为航空公司，但任何人都可以看看2021年和2022年左右的**SaaS公司**（Software as a Service: 软件即服务，一种通过互联网提供软件的模式）的**损益表**（P&L: Profit and Loss statement，反映公司在特定时期内经营成果的财务报表），你会看到80-90%的**毛利率**（Gross Margins: 销售收入减去销售成本后的百分比）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I don't think they will be airlines but you can anybody can just look at the P&L you know of a SAS company circa 2021 and 2022 and you see you know 80 90% gross margins and the nature of AI because of scaling laws Richard Sutton's the better the bitter listen um they're just more compute inensive so their gross margins are structurally going to be lower but that doesn't mean they can't be great businesses is I just I think it's going to be a long time before we see a truly kind of you know an AI lab a frontier lab with gross margins anywhere near SAS or internet era margins now their opex can be a lot lower um and you know maybe that's how you square it but just the gross margins are fundamentally different and until scaling laws change and the importance of test time compute and things like that change which I don't see happening they're they are going to be lower margin.</p>
</details>

由于**扩展定律**（Scaling Laws: 指AI模型性能随计算资源、数据量和模型规模增加而提升的规律）和**Richard Sutton的“苦涩的教训”**（The Bitter Lesson: 指在人工智能领域，通用方法通过计算规模的扩展往往比人类的先验知识更有效），AI的本质决定了它们是**计算密集型**（Compute-intensive: 指需要大量计算资源的任务或应用）的，所以它们的毛利率在结构上会更低。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I don't think they will be airlines but you can anybody can just look at the P&L you know of a SAS company circa 2021 and 2022 and you see you know 80 90% gross margins and the nature of AI because of scaling laws Richard Sutton's the better the bitter listen um they're just more compute inensive so their gross margins are structurally going to be lower but that doesn't mean they can't be great businesses is I just I think it's going to be a long time before we see a truly kind of you know an AI lab a frontier lab with gross margins anywhere near SAS or internet era margins now their opex can be a lot lower um and you know maybe that's how you square it but just the gross margins are fundamentally different and until scaling laws change and the importance of test time compute and things like that change which I don't see happening they're they are going to be lower margin.</p>
</details>

但这并不意味着它们不能成为伟大的企业，我只是认为，在我们看到一个真正的AI实验室或前沿实验室的毛利率接近SaaS或互联网时代的水平之前，还需要很长一段时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I don't think they will be airlines but you can anybody can just look at the P&L you know of a SAS company circa 2021 and 2022 and you see you know 80 90% gross margins and the nature of AI because of scaling laws Richard Sutton's the better the bitter listen um they're just more compute inensive so their gross margins are structurally going to be lower but that doesn't mean they can't be great businesses is I just I think it's going to be a long time before we see a truly kind of you know an AI lab a frontier lab with gross margins anywhere near SAS or internet era margins now their opex can be a lot lower um and you know maybe that's how you square it but just the gross margins are fundamentally different and until scaling laws change and the importance of test time compute and things like that change which I don't see happening they're they are going to be lower margin.</p>
</details>

现在，它们的**运营支出**（Opex: Operating Expenditure，公司日常运营所需的费用）可以低很多，也许这就是平衡点，但毛利率是根本不同的，除非扩展定律以及测试时间计算等的重要性发生变化（我认为不会发生），否则它们的利润率将会更低。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I don't think they will be airlines but you can anybody can just look at the P&L you know of a SAS company circa 2021 and 2022 and you see you know 80 90% gross margins and the nature of AI because of scaling laws Richard Sutton's the better the bitter listen um they're just more compute inensive so their gross margins are structurally going to be lower but that doesn't mean they can't be great businesses is I just I think it's going to be a long time before we see a truly kind of you know an AI lab a frontier lab with gross margins anywhere near SAS or internet era margins now their opex can be a lot lower um and you know maybe that's how you square it but just the gross margins are fundamentally different and until scaling laws change and the importance of test time compute and things like that change which I don't see happening they're they are going to be lower margin.</p>
</details>

### 应用层：SaaS与软件的未来

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

那么，我们来谈谈应用层。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, let's talk about uh application layer.</p>
</details>

你刚才稍微提到了SaaS业务，我不知道你是否参与了Twitter上的这场争论，但它每隔几个月就会出现，内容是SaaS很糟糕，已经死了，一切都会消失。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you just you just kind of got into it a little bit with the SAS businesses and uh I don't know if you've waited into this fight on Twitter, but it's sort of you know the the like you know every few months it comes up and it's like SAS is terrible and it's dead and you know it's all going to go away and then you know with uh Andre's uh Darkeesh interview he just did it's you know like the market's reacting positively to it.</p>
</details>

然后，在Andre最近的Darkeesh采访中，市场对此反应积极。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's like a whipssaw reaction.</p>
</details>

这就像一种剧烈波动的反应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's like a whipssaw reaction.</p>
</details>

那么你认为SaaS和软件会发生什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what do you think happens with SAS and software?</p>
</details>

>> 你知道，我记得我大概在2024年初首次说过，我认为所有**应用SaaS**（Application SaaS: 指直接面向终端用户提供特定应用功能的SaaS产品）都可能归零，这与**基础设施SaaS**（Infrastructure SaaS: 指为其他软件或应用提供底层基础设施服务的SaaS产品）不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, I think I, you know, first said probably in early 24 that I thought all of application SAS might be a zero different than than um infrastructure SAS.</p>
</details>

我现在有了更细致的看法，我认为可能会出现一些非常大的应用SaaS赢家，特别是如果你服务于一个更分散的**中小企业客户群**（SMB: Small and Medium-sized Business）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I would say I have a more nuanced view now and I think there could be some really big application SAS winners, especially if you serve like a more fragmented SMB customer base.</p>
</details>

>> 谷歌已经让他们的客户非常容易地使用他们的数据，并基本上创建任何他们想要的SaaS应用，而且他们的数据不会与其他人共享。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, you know, Google has make it really easy if you're a customer of theirs to use your data and essentially make any SAS app you want and then your data isn't shared with anyone else.</p>
</details>

>> 但我认为许多零售商在与亚马逊打交道时犯了一个关键错误，他们看了亚马逊的利润率，然后说我们不想做那个生意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but the critical mistake that I think a lot of retailers made um in dealing with Amazon is they looked at Amazon's margins and they said we don't want to be in that business.</p>
</details>

那显然是一个可怕的错误。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that was obviously a terrible mistake.</p>
</details>

25年后的今天，亚马逊的零售利润率非常健康。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And here we are 25 years later and you know Amazon has really healthy uh retail margins.</p>
</details>

我担心应用SaaS公司正试图保持他们现有的毛利率结构，因为他们认为如果毛利率下降，他们的股价也会下跌。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I worry that application SAS companies are trying to preserve their existing gross margin structures because they believe that if their gross margins go down um their stocks will go down.</p>
</details>

鉴于我们刚才讨论的，在AI领域取得成功，毛利率必然会面临压力，这是不可能避免的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is definitionally impossible given what we just discussed to succeed in AI without gross margin pressure.</p>
</details>

我不知道他们为什么会有担忧，因为我们有**微软**（Microsoft: 知名软件和科技公司）和**Adobe**（知名软件公司）这样的存在证明，一家软件公司可以很好地应对利润率下降，直到整个AI事情出现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I do not know why they have concerns because we have an existence proof that a software company can deal well with declining margins in Microsoft in Adobe to the whole AI thing came along.</p>
</details>

你知道，以前公司害怕从**本地部署**（On-premise: 指软件安装在用户本地服务器上）转向**云端**（Cloud: 指通过互联网提供计算服务），因为云利润率较低。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, it used to be that companies were scared to go from on premise to the cloud because margins were lower.</p>
</details>

云利润率确实较低，但仍然很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cloud margins are are are lower. They're still good.</p>
</details>

微软从本地部署的**永久许可**（Perpetual Licenses: 指一次性购买后可永久使用的软件许可）加维护模式，转型到了云模式，而且在十年内，它的股票表现相当不错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And Microsoft, they transitioned, you know, from, you know, on premise perpetual licenses with maintenance uh to a cloud model. and it was a pretty good stock for 10 years.</p>
</details>

所以，如果你是一家应用SaaS公司，我想说的是，不要害怕，把毛利率下降看作是成功的标志，而不是羞耻的徽章或可怕的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I don't if you're an application SAS company like I what I would just say is don't be scared and look at declining gross margins kind of has a mark of success rather than you know a badge of shame or something to be feared.</p>
</details>

你这么说真有趣，因为每当我们讨论公司时，基本上所有来向我们展示的公司都说我们是AI公司，我们总是看毛利率，而低毛利率已经成为他们的一种荣誉标志，因为这意味着“天哪，人们真的在使用你们的AI产品！”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's actually so funny you say that because whenever we have these discussions about companies, basically every company that comes to present to us is like we're an AI company and um we always look at the gross margins and it's become like a badge of honor for them to actually have low gross margins because like oh my god people are actually using your AI stuff.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

>> 但如果你出现并说：“我是一家AI公司，我有82%的毛利率。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if you show up and you're like I'm an AI company and it's like I got 82% gross margins.</p>
</details>

你就会想，我觉得没人真正使用它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're like I don't think anybody's really using it.</p>
</details>

所以，是的，这很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so yeah it's uh it's interesting.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

如果你是这些上市公司之一，你宁愿拥有10美元的收入和90%的毛利率，还是50美元的收入和60%的毛利率？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you're if you're one of these public companies, would you rather have like 10 bucks of revenue with 90% gross margins or 50 bucks of revenue with 60% gross margins?</p>
</details>

>> 不难选择。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Not hard.</p>
</details>

>> 这没那么复杂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like it's not that comp Yeah, not that complicated.</p>
</details>

在公开市场很难做到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's hard to do in the public market.</p>
</details>

>> 在公开市场很难做到，但如果你能沟通清楚，并将其与云转型进行类比。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's hard to do in public, but if you communicate it, you draw parallels to the cloud transition.</p>
</details>

我的意思是，我是一名投资者，我会对此感到兴奋，而且我认为我并非孤身一人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, I'm an investor and I would be excited about it, you know, and I don't think I'm alone in the world.</p>
</details>

这些传统的应用SaaS公司最大的优势是它们确实拥有这些非常盈利的现有业务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the big advantage these legacy application SAS companies have is they do have these really profitable existing businesses.</p>
</details>

所以你可以让你的新AI产品在收支平衡的情况下运行，并追赶领导者等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you can run your new AI products at break even um and you know catch up to the leaders etc etc and I'm just surprised more people have not done that like why are none of the public coding companies even trying to compete with cursor and the reality is cursor now they have a trillion trillion tokens and you know there there will be a point where they have enough coding tokens that it's tough to catch them but I think today if you're a public coding and you said, "I'm going to lean in. I'm going to run it break even. I have an existing business. I'm going to attach it to everything."</p>
</details>

我只是很惊讶为什么没有更多公司这样做，比如为什么没有一家上市公司试图与**Cursor**（一款AI驱动的代码编辑器）竞争？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you can run your new AI products at break even um and you know catch up to the leaders etc etc and I'm just surprised more people have not done that like why are none of the public coding companies even trying to compete with cursor and the reality is cursor now they have a trillion trillion tokens and you know there there will be a point where they have enough coding tokens that it's tough to catch them but I think today if you're a public coding and you said, "I'm going to lean in. I'm going to run it break even. I have an existing business. I'm going to attach it to everything."</p>
</details>

现实是Cursor现在拥有万亿级的Token，你知道，总有一天他们会有足够的编码Token，让你很难追赶他们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you can run your new AI products at break even um and you know catch up to the leaders etc etc and I'm just surprised more people have not done that like why are none of the public coding companies even trying to compete with cursor and the reality is cursor now they have a trillion trillion tokens and you know there there will be a point where they have enough coding tokens that it's tough to catch them but I think today if you're a public coding and you said, "I'm going to lean in. I'm going to run it break even. I have an existing business. I'm going to attach it to everything."</p>
</details>

但我认为今天，如果你是一家上市公司，你说：“我要全力投入。我要让它收支平衡。我有一个现有业务。我要把它附加到所有产品上。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you can run your new AI products at break even um and you know catch up to the leaders etc etc and I'm just surprised more people have not done that like why are none of the public coding companies even trying to compete with cursor and the reality is cursor now they have a trillion trillion tokens and you know there there will be a point where they have enough coding tokens that it's tough to catch them but I think today if you're a public coding and you said, "I'm going to lean in. I'm going to run it break even. I have an existing business. I'm going to attach it to everything."</p>
</details>

嘿，你还有机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hey, you have a chance.</p>
</details>

而且，你知道，奖品显然非常丰厚。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you know, the prize is clearly really big.</p>
</details>

我看到**Martin**（现场观众）持怀疑态度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I see Martin is skeptical.</p>
</details>

>> Martin在摇头。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Martin's shaking his head.</p>
</details>

你还有机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You have a chance.</p>
</details>

>> 我说的是“有机会”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I said a chance.</p>
</details>

所以，我说的是“有机会”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I said a chance.</p>
</details>

>> 那就像《阿呆与阿瓜》里说的：“你是说我还有机会？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's like a dumb and dumber. You're telling me there's a chance, not like a real chance.</p>
</details>

不是真正的机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're telling me there's a chance, not like a real chance.</p>
</details>

你是说……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're telling me.</p>
</details>

>> 你是说我还有机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">telling me there's a chance.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes.</p>
</details>

没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly.</p>
</details>

>> 这就像……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's like a</p>
</details>

>> 是的，没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, exactly.</p>
</details>

我完全同意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I totally agree.</p>
</details>

是的，我们实际上看到了，我的意思是，你知道，我们可能会，如果我们，你知道，以**Figma**（一款基于云的UI/UX设计工具）为例，当他们推出时，他们的毛利率非常高，他们说：“嘿，我们将非常积极地分发我们的AI工具，我们的毛利率将会下降。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we actually saw I mean you know we see it uh you know we may if we if we you know Figma for example like when they went out they are extremely high gross margin and they're like hey we're going to you know pretty aggressively distribute our AI tools and our gross margins are going to go down and you know investors asked a few clarifying questions and then they were like oh that actually would be a good thing and so surprised more people in the public markets aren't doing it worked out okay for them</p>
</details>

投资者问了一些澄清问题，然后他们说：“哦，那实际上是件好事。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we actually saw I mean you know we see it uh you know we may if we if we you know Figma for example like when they went out they are extremely high gross margin and they're like hey we're going to you know pretty aggressively distribute our AI tools and our gross margins are going to go down and you know investors asked a few clarifying questions and then they were like oh that actually would be a good thing and so surprised more people in the public markets aren't doing it worked out okay for them</p>
</details>

所以很惊讶公开市场中没有更多公司这样做，这对他们来说效果还不错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we actually saw I mean you know we see it uh you know we may if we if we you know Figma for example like when they went out they are extremely high gross margin and they're like hey we're going to you know pretty aggressively distribute our AI tools and our gross margins are going to go down and you know investors asked a few clarifying questions and then they were like oh that actually would be a good thing and so surprised more people in the public markets aren't doing it worked out okay for them</p>
</details>

>> 效果很好，这是一场持久战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it's working out well uh long game to play</p>
</details>

那么在应用层的消费者端呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">what about on the consumer side at the application layer</p>
</details>

显然，谷歌曾是互联网的门户，现在仍然是互联网的门户，整个商业模式都建立在获取某种意图，然后将你引导到别人的网站上，让别人与你进行互动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so obviously ly Google was the portal to the internet is kind of still is the portal to the internet and the whole business model was predicated upon taking some intent and directing you to someone else's website where they would do stuff with you.</p>
</details>

有了AI，情况将不再是那样，现在已经不是那样了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's kind of not going to be that way. It already is not that way uh with uh with AI.</p>
</details>

尽管我今天尝试了浏览器，并尝试做了一些非常基本的购物，但它仍然需要一些工作，但我认为它会实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Although I tried the browser today and I tried to do some pretty basic shopping stuff and it's you know it's still still some work to do but I think it will get there.</p>
</details>

那么你认为消费互联网公司的市场结构会发生什么变化？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what do you actually think happens with the sort of market structure of the consumer internet companies?</p>
</details>

它们会被整合到聊天机器人界面的一部分中，还是会是其他情况？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do they get subsumed into a component of a chatbot interface or do you think it's something else?</p>
</details>

>> 嗯，首先，谦逊点，很难说。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so one humility hard to say.</p>
</details>

其次，我想说的是，我认为那些推出了AI浏览器的AI公司可能会后悔，因为有一个叫做Chrome的浏览器，它拥有50亿用户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">to I would just say I think um the AI companies that have launched these AI browsers may come to regret it because there's something called Chrome that has whatever it is 5 billion users and if you're Google um you know you can just go look at what happened with Google Buzz you they are very cautious you know there's you know they're currently in in litigation with the government um and they could easily do this and probably do it even better, but they didn't want to be first.</p>
</details>

如果你是谷歌，你可以看看**Google Buzz**（谷歌推出的社交网络服务）发生了什么，他们非常谨慎，你知道，他们目前正在与政府打官司，他们可以很容易地做到这一点，甚至可能做得更好，但他们不想做第一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">to I would just say I think um the AI companies that have launched these AI browsers may come to regret it because there's something called Chrome that has whatever it is 5 billion users and if you're Google um you know you can just go look at what happened with Google Buzz you they are very cautious you know there's you know they're currently in in litigation with the government um and they could easily do this and probably do it even better, but they didn't want to be first.</p>
</details>

所以现在你有两家AI原生公司拥有自己的浏览器，让它们运行三到六个月，获得一点先发优势，然后，哇，我们来了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now you have two AI native companies with their own browsers, let them run for 3 to 6 months, get a little head start, and then wow, here we are.</p>
</details>

我们不得不这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We had to do this.</p>
</details>

我不知道那会如何运作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I don't know how that's going to work.</p>
</details>

>> 也许对于除了谷歌（不拥有Chrome）之外的公司来说。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um maybe for the companies other than Google who don't own Chrome.</p>
</details>

>> 是的，我想数据和分发在这方面非常强大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um yeah, I guess data and distribution is pretty powerful in that.</p>
</details>

>> 是的，事后诸葛亮总是容易的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, hindsight's 2020.</p>
</details>

>> 我要说的一点是，我认为今天很难与拥有庞大现有用户群的公司抗衡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and the one thing I would say is I do think it's tough to bet against the companies with large existing user bases today.</p>
</details>

>> 我还认为推理从根本上改变了这些前沿模型的经济性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and I also think reasoning has fundamentally changed the economics of these frontier models.</p>
</details>

你知道，在推理之前，我常说如果你是一个没有独特、有价值数据和互联网规模分发的前沿模型，你就是历史上贬值最快的资产。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know, pre-reasoning. Um, I often said if you are a frontier model without access to unique, valuable data and internet scale distribution, you're the fastest depreciating asset in history.</p>
</details>

我认为推理真的改变了这一点，因为**强化学习**（RL: Reinforcement Learning，一种机器学习范式，通过与环境互动学习最优行为）在**后训练**（Post-training: 指模型在初始训练完成后进行的进一步优化或调整）期间的工作方式，拥有庞大的用户群现在解锁了那个**飞轮效应**（Flywheel Effect: 指企业通过一系列相互促进的良性循环，实现持续增长的商业模式），它曾是所有伟大消费互联网公司的核心，即你有一个好产品，获得大量用户，用户让算法变得更好，算法让产品变得更好，然后它就不断循环。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think reasoning really changed that because the way RL works during post training, having a big user base now kind of unlocks that flywheel that was at the center of every great consumer internet company where um you have a good product, you get a lot of users, the users make the algorithm better, um the algorithm makes the product better and it just spins.</p>
</details>

在AI中它还没有完全转起来，但你可以眯着眼睛看到它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that it's not quite spinning yet in AI, but you can squint and see it.</p>
</details>

所以我认为这从根本上改变了Anthropic、XAI和OpenAI的经济性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I think that fundamentally changes economics for anthropic, for XAI, um, for OpenAI.</p>
</details>

我的意思是，马克·扎克伯格正在努力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but I mean Mark Zuckerberg's trying hard.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

我们拭目以待。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'll see.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

现在有很多聪明人在那里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A lot of smart people in there now.</p>
</details>

>> 是的，当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, for sure.</p>
</details>

我认为担忧在于，我认为这是另一个有趣的事情，如果你没有**Gemini 2.5 Pro**（谷歌Gemini模型的一个版本）或其后续检查点，或者我们没有看到的**Grock**（XAI开发的大型语言模型）的后续检查点，或者**GPT Checkmate**（OpenAI GPT模型的一个未公开版本或代号）的后续检查点，那么训练下一个模型你就会处于劣势。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I think the worry is and I think this is another interesting thing is if you don't like in a strange way the Chinese open source model ecosystem is a godsend to any American company that's trying to catch those four leading labs because the problem is if you don't have Gemini 2.5 Pro or a later checkpoint of it or a later checkpoint of Grock that we don't see or a later GPT checkmate uh checkpoint training the next model you're at a disadvantage.</p>
</details>

哦，顺便说一句，有一件事让我抓狂，那就是所有那些说**GPT-5**（OpenAI GPT模型的一个版本）是扩展定律终结的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, by the way, one thing I just want to say that drives me crazy is all these people who say that GPT5 is the end of scaling loss.</p>
</details>

GPT-5是一个更小的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">GPT5 is a smaller model.</p>
</details>

它不是为了更好而设计的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was not designed to be better.</p>
</details>

它是为了让OpenAI和微软运行它更经济而设计的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was designed to be more economical for OpenAI and Microsoft to run it.</p>
</details>

任何关于GPT-5及其扩展定律的说法都是疯狂的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Any reference to GPT5 its scaling laws is crazy.</p>
</details>

>> 嗯，是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, yeah.</p>
</details>

抱歉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sorry.</p>
</details>

抱怨结束。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Rant rant over.</p>
</details>

>> 如果你需要，我们这里有讲台。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We got the pedestal up here if you want.</p>
</details>

>> 是的，没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, exactly.</p>
</details>

>> 握手。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Shaking your hand.</p>
</details>

>> 是的，我们可以。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we could.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah,</p>
</details>

>> 那会很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that'd be good.</p>
</details>

你想谈谈芯片吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, do you want to talk about chips?</p>
</details>

>> 当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sure.</p>
</details>

### AI芯片：英伟达、谷歌TPU与ASIC的竞争

>> 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, okay.</p>
</details>

我知道你喜欢英伟达。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I know you love Nvidia.</p>
</details>

谈谈你对英伟达、AMD、TPU、**ASIC**（Application-Specific Integrated Circuit: 专用集成电路，为特定应用定制的芯片）的看法，以及你认为那里的市场结构会如何发展，各个参与者拥有哪些竞争优势？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Talk about, you know, your view of Nvidia, AMD, TPUs, AS6, and how do you think sort of market structure shakes out there, you know, competitive advantage that the various players have?</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

我认为这确实是英伟达和谷歌TPU之间的竞争。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I think it goes I think it is really um it's a fight between Nvidia and um the Google TPU</p>
</details>

然后，有一点我认为没有被广泛认识到，那就是博通和AMD实际上正在共同进入市场。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then something that I don't think is broadly appreciated is the extent to which Broadcom and AMD are effectively going to market together.</p>
</details>

英伟达不再仅仅是一家半导体公司，我相信你明天会从黄仁勋那里听到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Nvidia is no longer just a a semiconductor company as I'm sure you'll hear from Jensen tomorrow.</p>
</details>

你知道，它曾经是一家半导体公司，然后是一家拥有**CUDA**（Compute Unified Device Architecture: 英伟达开发的并行计算平台和编程模型）的软件公司，现在是一家拥有这些机架级解决方案的系统公司，现在可以说是一家数据中心级别的公司，凭借他们在横向扩展和纵向扩展网络方面所做的架构设计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know not it was a semiconductor company then a software company with CUDA now systems company with these rack level solutions and now arguably you know a data center level uh company with the you know level of architecting they're doing with scale up scale across and um scale out scale across networking um</p>
</details>

所以网络、架构、软件，所有这些都很重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so the networking the fabric the software it's all important</p>
</details>

博通对像Meta这样的公司说的是：“嘿，我们将为你构建一个理论上可以与英伟达的架构竞争的架构，英伟达的架构是**NVLink**（英伟达开发的高速互联技术）和**InfiniBand**（一种高性能计算和数据中心互联技术）或**以太网**（Ethernet: 一种局域网技术标准）的混合体。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and what Broadcom is saying to companies like Meta is hey we will build you a fabric that can theor theoretically compete with Nvidia's fabric which is a mixture of NVLink and either Infiniband or Ethernet.</p>
</details>

>> 它将建立在以太网上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um it will build it on Ethernet.</p>
</details>

它将是一个开放标准。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's going to be an open standard.</p>
</details>

而且，嘿，我们将为你制作你的TPU版本，顺便说一句，谷歌花了三代才让它正常工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And hey, we'll we'll make you your version of of TPU, which by the way took Google three generations to get working.</p>
</details>

而且你知道吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you know what?</p>
</details>

如果你的ASIC不好，你可以直接插入AMD。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If your ASIC isn't good, you can just plug AMD right in.</p>
</details>

>> 但我个人认为，大多数这些ASIC都会失败。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but I personally believe most of those AS6s are going to fail.</p>
</details>

>> 特别是如果……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um particularly if it's</p>
</details>

>> 随着时间的推移，还是在短期内？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in the fullness of time like over a period of time or in the fullness of time</p>
</details>

>> 我认为在未来三年内，你会看到一系列备受瞩目的ASIC项目被取消，特别是如果谷歌开始对外销售TPU的话，这在**X**（Twitter的更名）上已经传得沸沸扬扬。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in the next 3 years I think you'll see a bunch of high-profile um ASIC programs canled especially if Google um starts selling TPUs externally which has been all over X and you know they you know who knows exactly how that would work because if you're anthropic you know it's just rumored anthropic wants to buy tens of billions of TPUs if you're anthropic maybe you don't want Google seeing your secret sauce but there's ways around on that.</p>
</details>

你知道，谁知道具体会如何运作，因为如果你是Anthropic，你知道，有传言说Anthropic想购买数百亿美元的TPU，如果你是Anthropic，你可能不想让谷歌看到你的秘密武器，但总有办法解决。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in the next 3 years I think you'll see a bunch of high-profile um ASIC programs canled especially if Google um starts selling TPUs externally which has been all over X and you know they you know who knows exactly how that would work because if you're anthropic you know it's just rumored anthropic wants to buy tens of billions of TPUs if you're anthropic maybe you don't want Google seeing your secret sauce but there's ways around on that.</p>
</details>

所以我认为这实际上是谷歌及其TPU（目前由博通支持）与英伟达之间的较量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think this is really a battle between Google and its TPU enabled by Broadcom for now and Google can take the TPU away from Broadcom whenever they want.</p>
</details>

而且谷歌可以随时从博通手中收回TPU。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think this is really a battle between Google and its TPU enabled by Broadcom for now and Google can take the TPU away from Broadcom whenever they want.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

>> 现在他们无法像博通那样做以太网网络，但他们控制着TPU。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now they can't do the Ethernet networking that Broadcom is is doing uh but they control the TPU.</p>
</details>

所以这实际上是谷歌和TPU与英伟达的较量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so it's really Google and the TPU verse um Nvidia</p>
</details>

你知道，亚马逊，那是一个非常有才华的团队，可以说是超大规模计算领域最有才华的芯片团队，**Annapurna Labs**（亚马逊旗下半导体设计公司）团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know with with you know Amazon like that's a very talented team arguably the most talented silicon tumidity hyperscaler the anaperna team</p>
</details>

我认为**Tranium 3**（亚马逊开发的AI训练芯片）可能会比Tranium 2好得多，谷歌花了三代才把TPU做对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like I think the tranium 3 will probably be a much better chip than the tranium 2 it took three generations to get the TPU right</p>
</details>

然后AMD将永远是第二供应商，而且你需要一个第二供应商。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um and then AMD will you know will always be kind of the second source and you need a second source</p>
</details>

### 商业模式转变与AI的未来影响

好的，令人兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">all right exciting uh what do you think happens</p>
</details>

你认为会发生什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">what do you think happens</p>
</details>

好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

我想回到商业模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I want to go back um to business models.</p>
</details>

广泛讨论的一大问题是颠覆的来源，这个房间里的大多数CEO都是初创公司的CEO，他们正试图击败一些现有企业，或者寻找新的市场机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So one of the big things that is widely discussed is like you know source of disruption and most of the CEOs in this room are CEOs of startups who are trying to go beat some incumbent or find you know some new market opportunity</p>
</details>

最成熟的机会往往出现在当你有大的**平台转移**（Platform Shift: 指技术或商业模式从一个主导平台向另一个主导平台的转变）伴随着**商业模式转变**（Business Model Shift: 指公司改变其创造、交付和获取价值的方式）的时候。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the most ripe opportunities tend to come when you have a big platform shift that is also accompanied with a business model shift.</p>
</details>

>> 我觉得有几个领域是显而易见的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so there are a couple of areas where I can see it. I feel like in an obvious way.</p>
</details>

所以，你知道，我们是**Decagon**（一家提供客户支持AI解决方案的公司）的投资者，在客户支持方面，你可以很容易地看到一种基于任务解决定价的商业模式，因为它非常可衡量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you know, we're investors in decagon customer support like you can pretty easily see a business model that is priced on the resolution of a task because it's so measurable.</p>
</details>

>> 你可以看到，在编码领域，很多商业模式已经转向了按消费计费，而且，你知道，特别是对于面向开发者的事物，这很舒适，也很为人所知。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um you can see you know like in coding like a lot of the business model has now shifted to consumption and you know obviously especially for developer facing things like that's comfortable um and pretty wellnown.</p>
</details>

那其他行业呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What about the rest of the industry?</p>
</details>

因为我觉得现在有一种敷衍了事的说法，就是我们要接管所有服务，但问题是，你到底要怎么做？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cuz I feel like there's sort of this handwave thing that is going on which is like we're going to go get all of services but it's like okay so how do you actually go do that?</p>
</details>

那会很难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's going to be pretty hard.</p>
</details>

那么你对这会如何发展有什么预测吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So do you have any prediction on how that plays out?</p>
</details>

>> 嗯，我认为你在客户服务中看到的情况，这是一个简单的首个例子，那里有大量的文本数据，而**大型语言模型**（LLMs: Large Language Models，指参数量巨大、能够理解和生成人类语言的AI模型）擅长处理文本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well I think what you're seeing in customer service which is kind of like an easy first example u where you have a lot of textual data that LLMs are good at text.</p>
</details>

你可以很容易地运行一些**强化学习**（RL: Reinforcement Learning，一种机器学习范式，通过与环境互动学习最优行为）来确保它们获得良好的验证奖励。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you can kind of, you know, probably really easily run some RL to make sure that they, you know, get a good verified reward.</p>
</details>

你知道，验证奖励可以是满意的客户，或者首次呼叫解决，或者其他任何东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, verified reward being a happy customer or first call resolution or whatever it is.</p>
</details>

>> 而且我确实认为你会看到这种情况发生，就像人类一样，我们基本上是根据结果获得报酬的，很多AI将增强人类，但也可能会取代一些人类，这将涉及根据结果获得报酬。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and but I do think you will see that played out like humans, we're fundamentally paid for paid paid based on outcomes and a lot of AI will be augmenting humans, but probably also replacing some humans and that will involve being paid u paid for outcomes.</p>
</details>

>> 回到消费者商业模式，你知道，每个人都在谈论**联盟营销费用**（Affiliate Fees: 指通过推广他人产品或服务而获得的佣金）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know, going back to the consumer business model, you know, everybody's talking about affiliate fees.</p>
</details>

当然，我会有我自己的AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for sure, I'm going to have, you know, my own AI.</p>
</details>

它将是**Grock**（XAI开发的大型语言模型）的一个版本，因为我们都是XAI的股东。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It will be a version of Grock, um, because we're both XAI shareholders.</p>
</details>

它将是Grock的一个版本，它了解我，并且喜欢我。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It will be a version of Grock that knows me and it likes me.</p>
</details>

而且，你知道，当我下次想去度假时，它会知道我喜欢去的酒店，它会说：“嘿，有三家酒店。我有Gavin要来。谁的价格最好，房间最好？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and, you know, when I when I want to, you know, the next time I want to go on vacation, it will know the hotels that I like to go to and it'll say, "Hey, three hotels. I have Gavin, you know, I have Gavin coming. Who's got the best price and the best room?"</p>
</details>

>> 这将极大地提升你送给**Becky**（现场观众）的礼物，以防万一，Becky在观众席上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it's going to massively upgrade the gifts that you give to Becky just in case as Becky Becky's in the audience.</p>
</details>

她真的很喜欢你引用的《阿呆与阿瓜》，我告诉你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">She really appreciated your Dumb and Dumber reference. I'll have you know.</p>
</details>

>> 嗯，但是，是的，然后可能会有一些联盟营销费用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but um yeah, and then there will probably be some sort of affiliate fee.</p>
</details>

再说一次，那只是根据结果获得报酬，并完成那个循环，这可能会导致商业模式的轻微退化，因为为什么谷歌从未建立一个市场？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And again, that's just being paid for an outcome and kind of closing that loop, which will be probably a little bit of a business model degradation because the great why why did Google never start a marketplace?</p>
</details>

因为人们系统性地高估了他们一旦通过谷歌获得客户后，将其保留为有机客户的能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because people overvalue systematically their ability once they've acquired a customer through Google to keep it as an organic customer.</p>
</details>

所以他们系统性地支付过高，并且他们继续这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So they systematically overpay and they continue doing that.</p>
</details>

这就是为什么谷歌从未转向结果或市场，因为广告导致广告商系统性地支付过高。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's why Google never went to outcomes or marketplace because advertising leads to the advertisers systematically overpaying.</p>
</details>

所以这种低效率将被挤压出去，但我们会转向结果，你知道，我认为埃隆今天发推文说，工作将变得可选，你知道，就像你不再在超市购买蔬菜，如果你愿意，你可以自己种菜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that inefficiency will be squeezed out but yeah we'll go to outcomes and you know I think Elon tweeted today that you know work would become optional you know like instead of buying your vegetables um you know at a at a supermarket you can grow your own garden if you want.</p>
</details>

现在，谁知道我们需要多长时间才能达到那个阶段，但我认为这听起来并非完全不可能，考虑到这项技术的强大程度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, who knows how long it takes us to get there, but I that doesn't sound wildly implausible to me for how powerful this technology is.</p>
</details>

我只是被**Karpathy**（知名AI研究员）的话震惊了，你知道，两天前，他被描绘成一个怀疑论者，因为他说**通用人工智能**（AGI: Artificial General Intelligence，指具备人类智能水平，能完成任何智力任务的AI）还需要10年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I was just struck Karpathy, you know, whatever two days ago, you know, is being painted as like a skeptic for saying AGI is 10 years away.</p>
</details>

你在开玩笑吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Are you kidding?</p>
</details>

>> 疯了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Insane.</p>
</details>

10年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">10 years.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

请给我更短的时间线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sign me up. We have shorter timelines, please.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

嗯，所以，不，那太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, so no, that's awesome.</p>
</details>

当我们谈论非常令人兴奋的未来事物时，**机器人技术**（Robotics: 涉及机器人设计、制造、操作和应用的科学技术），你对此有什么看法？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">While we're on the topic of very exciting futuristic things, robotics, do you have a view on</p>
</details>

>> 是的，非常真实。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, very real.</p>
</details>

这将是**特斯拉**（Tesla: 知名电动汽车和能源公司）与中国之间的竞争，就像在汽车领域是特斯拉与中国之间的竞争一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's going to be Tesla versus the Chinese in the same way it's Tesla versus the Chinese in in uh cars.</p>
</details>

>> 电动汽车。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Electric cars.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

>> 我会说只是汽车，而不是电动汽车。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would just say cars, not electric cars.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

汽车。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cars.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

你对时间线有概念吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do you have a sense of timeline?</p>
</details>

>> 我的意思是，你们都可以看**擎天柱机器人**（Optimus: 特斯拉开发的人形机器人）的视频。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, you can you can all watch the Optimus videos.</p>
</details>

>> 我认识的每个机器人专家都印象深刻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, every roboticist I know is extremely impressed.</p>
</details>

>> 有一个巨大的争论：是**人形机器人**（Humanoids: 外形和行为类似人类的机器人）还是非人形机器人？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, you know, there's there's a giant debate. Is it going to be humanoids or not humanoids?</p>
</details>

我认为这场争论已经结束了，因为人形机器人可以从观看**YouTube**（谷歌旗下的视频分享平台）视频中学习，然后人类穿上套装向机器人展示如何做会更容易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that debate is over because humanoids can kind of learn, you know, from watching YouTube videos and then it's easier for a human being um, you know, to put on a suit and show the robot how to do it.</p>
</details>

我的意思是，看着所有50个擎天柱机器人在做50个不同的任务，然后它非常简单，你知道，你是否正确地把玻璃杯放进了洗碗机？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, it's kind of crazy to watch the video of all, you know, the 50 Optimus robots doing 50 different tasks and then it's very simple, you know, did you did you put the glass in the dishwasher correctly or not?</p>
</details>

>> Gavin，这太有趣了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is so fun, Gavin.</p>
</details>

我总是喜欢和你聊天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I always love chatting with you.</p>
</details>

>> 让我们为Gavin鼓掌。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, let's give a hand to Gavin.</p>
</details>

>> 谢谢你，David。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you, David.</p>
</details>

谢谢你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you.</p>
</details>

>> 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right.</p>
</details>

接下来，我们将有一个非常精彩的关于构建真实世界基础设施的专题讨论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next up, we have a very exciting panel on building out real world infrastructure.</p>
</details>

>> 但首先，请给我们几分钟时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, but first, give us a few minutes.</p>
</details>

我们这里需要快速更换舞台。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We got to do a quick uh sta uh stage change here.</p>
</details>

所以，谢谢大家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, thank you.</p>
</details>

>> 谢谢大家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks everybody.</p>
</details>

谢谢你，伙计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you, man.</p>
</details>