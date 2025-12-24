---
area: tech-insights
category: technology
companies_orgs:
- Nvidia
- Microsoft
- Google
- Amazon
- Nokia
- Intel
- TSMC
- Samsung
- ASML
- SoFi
- Figure
- Denny's
- Department of Energy
- OpenAI
- Perplexity
- Cursor
- Palantir
- CoreWeave
- Oracle
- Foxconn
- Siemens
- Disney
- Uber
- CrowdStrike
- SAP
- Synopsis
- Cadence
- Caterpillar
- Agility Robotics
- Johnson & Johnson
- Apple
- IBM
date: '2025-10-28'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Jensen Huang
- Brad Gerstner
- Brett Adcock
- Richard Feynman
- Donald Trump
- Chris Wright
- Sam Altman
- Bill McDermott
- Christian Klein
- George Kurtz
- Alex Karp
- Elon Musk
- Peggy Johnson
products_models:
- Blackwell
- Vera Rubin
- CUDA
- GTC
- NVL 144
- Arc
- QPU
- GPU
- DGX1
- Omniverse
- DSX
- Jetson Thor
- Drive Hyperion
- Palantir Ontology
- ChatGPT
- CUDA Q
- Spectrum X
- MVLink
- Bluefield
- ConnectX
project:
- ai-impact-analysis
- us-analysis
series: ''
source: https://www.youtube.com/watch?v=J2t8z9rLVh0
speaker: Amit Kukreja
status: evergreen
summary: 在 GTC 2025 主题演讲中，英伟达 CEO 黄仁勋详细阐述了 AI 行业的两大平台转型。他发布了性能卓越的 Blackwell 架构和下一代
  Rubin 平台，并宣布了与诺基亚在 6G、与 Palantir 在企业 AI 领域的重磅合作。黄仁勋还提出了“AI 工厂”和“物理 AI”等关键概念，并披露了到
  2026 年价值 5000 亿美元的惊人业务前景，强调了在美国本土制造的重要性。
tags:
- accelerated-computing
- design
- llm
- quantum-computing
title: 英伟达 GTC 2025：黄仁勋发布 Blackwell 架构、Rubin 平台及 5000 亿美元业务展望
---

### GTC 2025 展前预测与讨论

Amit：好了，大家好，欢迎。我们实际上只迟到了十秒钟，不算太晚。感谢大家的到来。我们现在正在为英伟达的 **GTC**（GPU Technology Conference: GPU 技术大会）做准备。黄仁勋（Jensen Huang）大约在五分钟后，也就是东部时间中午12点开始演讲，可能会稍晚一点。Tanner，你有什么期待？这应该是一场盛会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. Hello everybody. Welcome. We're literally 10 seconds late. It's not even that late. Uh, thank you everybody for being here. We are here for Nvidia GTC. Jensen's going to be speaking in about five minutes. It might be a little bit later, but it should be in five minutes at 12 p.m. Eastern. Uh, Tanner, what are you expecting? This should be a big one.</p>
</details>

Tanner：应该会是一场盛会。如今，GTC 的核心议题全是人工智能。所以我期待很多关于智能体（agentic）的内容，比如物理 AI、自动驾驶、机器人技术等等。如果我们幸运的话，或许会听到关于 Vera Rubin 平台或后续步骤的消息。看到他们下一代机架系统的样子会非常非常酷。我们已经知道一些信息了，他们已经展示过很多次，但如果黄仁勋能在这方面营造足够的声势，那将会推动股价。很多额外的信息了解一下就好，但如果你关心什么能对公司财务产生影响，那就是他们卖给微软、谷歌、亚马逊等公司的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Should be a big one. Um, you know, GTC is all about artificial intelligence nowadays. So, I expect a lot of agentic stuff, uh, physical AI, self-driving, robotics, that sort of stuff. Maybe if we're lucky, Vera Rubin, or what the next steps are. You know, that would be very, very cool to see what their next rack system would look like. Uh, we already know. I mean, they've showed it off a bunch, but um, Jensen, if he can deliver enough hype on that, that will push the stock. A lot of the extra stuff is good to know, but if you're talking about what makes a financial difference of the business, it's, you know, what are the products that they're selling to Microsoft, Google, Amazon, etc.</p>
</details>

Tanner：但我们很快就会知道了，我们并非百分之百确定。不过，现在华盛顿那边有很多人。到目前为止，我听到的都是好消息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we'll find out. I mean, uh, we don't know 100%. A lot of people are down there though in Washington right now. Um, and I've heard nothing but good things so far.</p>
</details>

Amit：是的，黄仁勋在那儿，Brad Gerstner 也在。还有 Figure 公司的 CEO，很多人都在现场。我认为会有一些有趣的东西。我的意思是，这正是他们展示芯片的活动。所以，我们很有可能会得到一些关于 Vera Rubin 平台的更新，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, Jensen's there, Brad Gerstner's there. Um, you got the figure CEO. You got a lot of people there. I think we're I think it's going to be some interesting stuff. I mean, this is the event where they do show off their chips. So, I think it's likely, you would say, right, that we might get some Vera Rubin updates.</p>
</details>

Tanner：是的，是的。我对此很有信心。不过，有时候他们会跳过一年才展示下一个重磅产品。我记得上次主要是关于 Blackwell Ultra 的讨论。但他们一直在发布关于 Vera Rubin 和 NVL 144s 的更新。所以我希望能看到相关消息，那会非常酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. Um, yeah, I'm I'm I'm pretty confident in it. Um, but there has been some times where they'll skip a year before showing off their next big product. I think last time was a lot of um, Blackwell Ultra talk, but you know, they've been pushing out a lot of updates on Vera Rubin, their NVL 144s. So, I hope to see that. That would be really cool.</p>
</details>

Amit：同意。英伟达还向诺基亚投资了十亿美元。不确定原因，但他们确实这么做了。我想今天会宣布一些合作关系。我的意思是，今天会发生一堆各种各样的事情。这里有一条新闻标题：英伟达将向诺基亚进行10亿美元的股权投资，并建立新的战略合作伙伴关系。诺基亚董事会已决定向英伟达定向发行股票。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Agreed. Nvidia also invested a billion in Nokia. Uh, not sure why, but they did. I imagine there's going to be some announcement of a partnership. This is what I mean. Like you're going to get a bunch of different random stuff happening today. Uh here's a little bit of a headline. Nvidia to make 1 billion equity investment in Nokia in in addition to new strategic partnership Nokia's board resolved on directed share issuance to Nvidia.</p>
</details>

Tanner：是啊。你知道他们投资的原因吗？我现在还不知道。但当你赚了这么多钱的时候，我早就说过，他们肯定会有一个庞大的风险投资部门，会投入大量资金来获取那些只会进一步推动英伟达发展的公司的股权。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Do you have any reason why they would invest? I I I don't know of a reason right now, but whenever you're making this much money, I' I've been saying this for a long time, they are definitely going to be uh having a large venture arm and and giving out a lot of money to get equity stakes in businesses that are only going to push Nvidia further.</p>
</details>

Amit：是的。所以，他们现在处于领先地位，可以进行这些绝佳的投资。然后他们卖给这些客户的产品，或者他们将与这些客户（如英特尔和他们最近投资的其他合作伙伴）共同设计的产品，都只会进一步巩固英伟达的优势或领先地位。但一切都取决于 GTC。我真的很期待。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So, um, you know, they're in pole position right now and they get to make these great investments and then the products that they sell to those customers or or the products that they're going to design with these customers like Intel and like all these other partnerships that they've recently given uh, you know, money to, that only goes to further the Nvidia advantage or or their their lead position. So, um, but it all comes down to GTC. I mean, I'm I'm really excited to see.</p>
</details>

### 黄仁勋的幽默插曲与量子计算争议

Amit：黄仁勋还没开始直播，但这是我们从预热节目中截取的一个片段，我觉得这个片段简直太不可思议了。看看这个，他闯入一个座谈会，送上水，然后说：“一日服务生，终身服务生。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, Jensen is not live yet, but this is a clip that we had from the pre-show, and I think this clip is just pretty freaking incredible. Uh, take a look at this. He crashed a panel, delivered water, and said, "Once a bus boy, always a bus boy."</p>
</details>

*（视频片段播放）*

Amit：这个身价千亿的人在送水。你不得不爱他。你不得不爱他。“量子这套胡言乱语到底是怎么回事？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This guy's worth a hundred billion delivering water. I mean, you got to love it. You got to love it. What is up with this mumbo jumbo that is quantum?</p>
</details>

Tanner：不，但他接着又称赞了一下。从 Denny's 餐厅到华盛顿特区。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, but but then he gives then he gives a little bit of a compliment from Denny's to DC. From Denny's to DC.</p>
</details>

Amit：去年你对量子计算发表了一些评论，引起了一场骚动。在我们即将开始量子座谈会之际，关于英伟达如何看待量子计算，你有什么想要修正的吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You you caused a kurfuffle uh last year when you you you made some comments about quantum. anything you would like to revise, you know, as we're about ready to launch our quantum panel here about how Nvidia thinks about quantum.</p>
</details>

Jensen Huang：你知道吗，我得告诉你，我一个字都不敢说。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, I got to tell you, I'm afraid to say a word.</p>
</details>

Amit：如果我只说“量子”，股价就会上涨。量子，量子，量子。我的意思是，他确实导致那些股票在一天内下跌了50%，大约在去年三月，不，是今年2025年初，当时他说量子计算还需要几十年的时间。我不知道你怎么看，但我听到整个业界对量子的报道越来越多了。所以，也许黄仁勋会开始拥抱它。而且，很多量子计算的看涨者会说，这对 **GPU**（Graphics Processing Unit: 图形处理器，现广泛用于并行计算） 的主导地位构成了威胁。所以这里有很多角度需要理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I just said quantum, the stock price goes up. Quantum quantum quantum. I mean, he did c he caused those stocks to go 50% down in a day around March of last year or no of earlier this year of 2025 when he said, you know, quantum is decades away. I don't know about you, but I'm hearing a lot more coverage in the overall universe around quantum. So, maybe Jensen is going to embrace it. Also, the the a lot of the quantum bulls will say it's a threat to the dominance of GPUs. So, there's a lot of perspectives there to understand.</p>
</details>

Tanner：是的。我对量子计算没有太多看法。我们拭目以待，但我相信黄仁勋会密切关注它。如果他看到大量投资流向那个方向，显然英伟达也会成为其中的重要一部分，或者至少会努力在那里占据一席之地。我认为，通过设立量子部门和所有这些举措，他绝对没有回避它，没有像以前那样不屑一顾。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. I mean, um, I don't have too many takes on quantum. We'll see what ends up happening, but, uh, I'm sure Jensen is going to keep his eye on it and, and if there is, uh, you know, if he sees large investment going that way, obviously Nvidia is going to be a big part of that as well, or at least try to position themselves there. And, and I think by having a quantum segment and all of these things, he's definitely, you know, not avoiding it. He's not brushing it off like um</p>
</details>

Tanner：我确实认为，如果我们要有 **QPU**（Quantum Processing Unit: 量子处理单元），黄仁勋也参与其中是很重要的。所以我并不打算在投资组合中加入某个单独的量子概念股。我已经通过谷歌或微软间接持有了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I do think it's important that that if we're going to have a QPU that uh Jensen also is involved in that. So I'm not looking to get an individual quantum name in the portfolio. I have that through you know Google or um you know you could play that through Microsoft if you want. I don't know.</p>
</details>

### 市场动态与 GTC 核心期待

Amit：你对 GTC 有什么期待？哦，另外，关于 SoFi，你还持有你的头寸吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What are you looking forward to from GTC really quick? Oh, also, are you actually to stay on SoFi? Are you holding on to your position?</p>
</details>

Tanner：是的，不然我还能做什么？我觉得我可以卖出看涨期权来对冲。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, yeah. What else am I going to do? I feel like I can sell calls against it, right?</p>
</details>

Amit：我只是期待他会非常自信，并继续发布更新。他现在热衷的话题是“AI 工厂”。所以我认为我们会听到很多关于这方面的内容。我认为关于机器人技术的 S 曲线，他非常希望世界明白物理 AI 即将到来。然后，希望能有一些关于 Vera Rubin 的消息，那会很不错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm just expecting him to be pretty confident and continue to deliver updates on this. I this rift that he's on now is AI factories. So, I think we're going to hear a lot about that. I think the S-curve about robotics, he really wants the world to understand physical AI is coming. And then from there, hopefully some Verar Rubin stuff would be be nice to see.</p>
</details>

Tanner：我不抱太高的期望。我来这里是为了学习，听听他要说什么。这不是投资者日，对吧？所以我更感兴趣的是在财报电话会议上听到关于中国等问题的说法。这次会更侧重于产品。所以，我没有太大的期望。我确定会有很多关于网络和 AI 的讨论。如果 Brett Adcock 在场，那就会有很多关于机器人技术的讨论。过去三届 GTC 活动都是如此。但我个人没有太多直接的期望。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, no, not necessarily. I don't go in with with too high of expectations. Um, so no, I I'm here to learn, hear what he has to say. Um, you know, I don't know if we're going to get any Yeah, it's not an investor day, right? So, I'd be more interested in hearing what the earnings call has to say around China and stuff like this. This is going to be more product based. Um, so no, I don't have large expectations. I'm sure there's going to be a lot of networking talk, AI talk. If if Brett um Adcock is there, there's going to be a lot of robotics talk. There has been at GTC the last three years. So, um or last three events, but I don't have many expectations directly. No.</p>
</details>

Amit：是的，我同意机器人技术将是重要的一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I think robotics is going to be a big part. I agree.</p>
</details>

### 开场：致敬美国创新，开启新计算时代

*（开场视频播放，回顾了从 IBM System/360、英特尔微处理器到苹果个人电脑等美国主导的科技飞跃，将 AI 革命定位为美国的下一个“阿波罗时刻”。）*

Jensen Huang：欢迎来到华盛顿特区。欢迎来到 GTC。看到那个视频，很难不为美国感到激动和自豪。我必须告诉你们，那个视频太棒了，谢谢。英伟达的创意团队做得非常出色。欢迎来到 GTC。今天我们有很多内容要和大家分享。GTC 是我们讨论工业、科学、计算、现在和未来的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Washington DC. Welcome to GTC. It's hard not to be sentimental and proud of America. I got to tell you that. Was that video amazing? Thank you. Nvidia's creative team does an amazing job. Welcome to GTC. We have a lot to cover with you today. Um GTC is where we talk about industry, science, computing, the present, and the future.</p>
</details>

Jensen Huang：在开始之前，我要感谢所有帮助赞助这次盛会的合作伙伴。你们会在展会各处看到他们。他们在这里与你们会面，非常棒。没有我们所有的生态系统合作伙伴，我们无法做到我们所做的一切。人们说这是 AI 的“超级碗”。因此，每个超级碗都应该有一个精彩的赛前秀。你们觉得赛前秀怎么样？还有我们全明星阵容的运动员和演员。看看这些人。不知怎么的，我看起来是身材最好的那个。你们觉得呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">before I start, I want to thank all of our partners who helped sponsor this great event. You'll see all of them around the show. They're here to meet with you and uh uh really great. We couldn't do what we do without all of our ecosystem partners. Uh this is the Super Bowl of AI, people say. And therefore, every Super Bowl should have an amazing pregame show. What do you guys think about the pregame show? and our all allstar allstar athletes and allstar cast. Look at these guys. Somehow I turned out the buffest. What do you guys think?</p>
</details>

### 加速计算的时代来临

Jensen Huang：60 年来，英伟达首次发明了一种新的计算模型。正如你们在视频中看到的，新的计算模型很少出现。它需要极长的时间和一系列条件。我们发明这个计算模型，是因为我们想解决通用计算机，也就是普通计算机无法解决的问题。我们还观察到，总有一天，晶体管的数量会继续增长，但晶体管的性能和功耗的提升会放缓。**摩尔定律**（Moore's Law: 指集成电路上可容纳的晶体管数目，约每隔两年便会增加一倍）将无法超越物理定律的限制，而那个时刻现在已经到来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Nvidia invented a new computing model for the first time in 60 years. As you saw in the video, a new computing model rarely comes about. It takes an enormous amount of time and set of conditions. We invented this computing model because we wanted to solve problems that generalpurpose computers, normal computers could not. We also observed that someday transistors will continue. The number of transistors will grow, but the performance and the power of transistors will slow down. that Moore's law will not continue beyond limited by the laws of physics and that moment has now arrived.</p>
</details>

Jensen Huang：登纳德缩放定律（Dennard scaling）已经停止了，大约在十年前就停止了。事实上，晶体管的性能及其相关功耗已经大幅放缓，但晶体管的数量仍在继续增长。我们很久以前就观察到了这一点，30 年来，我们一直在推进这种我们称之为“加速计算”的计算形式。我们发明了 GPU，发明了名为 **CUDA**（Compute Unified Device Architecture: 计算统一设备架构，是NVIDIA推出的并行计算平台和编程模型）的编程模型。我们观察到，如果我们能添加一个利用越来越多晶体管的处理器，应用并行计算，并将其与顺序处理的 CPU 结合，我们就能将计算能力扩展到远超以往的水平。那个时刻真的到来了。我们现在已经看到了那个拐点。加速计算的时代已经来临。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Dinard scaling has stopped. It's called dinard scaling. Dard scaling has stopped nearly a decade ago and in fact the transistor performance and its power associated has slowed tremendously and yet the number of transistor continued. We made this observation a long time ago and for 30 years we've been advancing this form of computing we call accelerated computing. We invented the GPU. We invented the the programming model called CUDA. And we observed that if we could add a processor that takes advantage of more and more and more transistors, apply parallel computing, add that to a sequential processing CPU that we could extend the capabilities of computing well beyond well beyond. And that moment has really come. We have now seen that inflection point. Accelerated computing its moment has now arrived.</p>
</details>

Jensen Huang：然而，加速计算是一种根本不同的编程模型。你不能简单地把一个为 CPU 编写的、手动编码、顺序执行的软件放到 GPU 上，并期望它能正常运行。事实上，如果你只是这样做，它实际会运行得更慢。因此，你必须重新发明新的算法，创建新的库，甚至重写应用程序，这就是为什么它花了这么长时间。我们花了将近30年才走到今天。但我们一次一个领域地做到了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">However, accelerated computing is a fundamentally different programming model. You can't just take a CPU software software written by hand executing sequentially and put it onto a GPU and have it run properly. In fact, if you just did that, it actually runs slower. And so, you have to reinvent new algorithms. You have to create new libraries. You have to in fact rewrite the application which is the reason why it's taken so long. It's taken us nearly 30 years to get here. But we did it one domain at a time.</p>
</details>

### CUDA X：英伟达的软件宝库

Jensen Huang：这是我们公司的宝藏。大多数人谈论的是 GPU。GPU 很重要，但如果没有一个建立在其上的编程模型，没有对该编程模型的执着，没有保持它代代兼容——我们现在 CUDA 13 即将推出 CUDA 14，数亿个 GPU 在每台计算机中运行，完全兼容——如果我们没有做到这些，开发者就不会选择这个计算平台。如果我们没有创建这些库，开发者就不知道如何使用算法并充分发挥架构的潜力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is the treasure of our company. Most people talk about the GPU. The GPU is important, but without a programming model that sits on top of it, and without dedication to that programming model, keeping it compatible over generations, we're now CUDA 13 coming up with CUDA 14, hundreds of millions of GPUs running in every single computer, perfectly compatible. If we didn't do that, then developers wouldn't target this computing platform. If we didn't create these libraries, then developers wouldn't know how to use the algorithm and use the architecture to its fullest.</p>
</details>

Jensen Huang：一个又一个的应用。这真的是我们公司的宝藏。cuLitho，计算光刻。我们花了将近七年时间才推出 cuLitho，现在台积电、三星、ASML 都在使用它。这是一个用于计算光刻的不可思议的库，是制造芯片的第一步。用于 CAE 应用的稀疏求解器。Co-op，一个数值优化库，打破了几乎所有记录。旅行商问题，如何在供应链中连接数百万产品和数百万客户。Warp，一个用于 CUDA 仿真的 Python 求解器。cuDF，一种数据帧方法，基本上加速了 SQL 数据帧数据库。这个库开启了 AI 的时代，cuDNN，以及其上的 Megatron Core，使我们能够模拟和训练超大规模语言模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One application after another. I mean, these this is really the this is really the treasure of our company. CU litho computational lithography. It took us nearly seven years to get here with K litho and now TSMC uses it, Samsung uses, ASML uses it. This is an incredible library for computational lithography. the first step of making a chip. Sparse solvers for CAE applications. Co-op, a numerical optimization is broken just about every single record. The traveling salesperson problem, how to connect millions of products with millions of customers in the supply chain. Warp Python solver for CUDA for simulation. QDF a dataf frame approach basically accelerating SQL dataf frame pro dataf frame databases. Um this library is the one that started AI alto together coupnn the the library on top of it called megatron core made it possible for us to simulate and train extremely large language models.</p>
</details>

Jensen Huang：名单还在继续。Monai，非常非常重要，全球第一的医学影像 AI 框架。顺便说一句，我们今天不会过多讨论医疗保健，但请务必观看 Kimberly 的主题演讲，她会详细介绍我们在这方面的工作。还有基因组学处理，Ariel，请注意，我们今天将在这里做一些非常重要的事情。还有 cuQuantum，量子计算。这只是我们公司 350 个不同库的代表。每个库都为加速计算重新设计了必要的算法。每个库都使我们所有的生态系统合作伙伴能够利用加速计算。每个库都为我们开辟了新的市场。让我们看看 CUDA X 能做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The list goes on. Uh, Monai, really, really important, the number one medical imaging AI framework in the world. Uh, by the way, we're not going to talk a lot about health care today, but be sure to see Kimberly's keynote. She's going to talk a lot about the work that we do in healthcare. And the list goes on. Uh, genomics processing, Ariel, pay attention. We're going to do something really important here today. Um, coup quantum quantum computing. This is just a representative of 350 different libraries in our company. And each one of these libraries redesigned the algorithm necessary for accelerated computing. Each one of these libraries made it possible for all of the ecosystem partners to take advantage of accelerated computing. And each one of these libraries opened new markets for us. Let's take a look at what CUDA X can do.</p>
</details>

*（视频播放，展示了 CUDA X 在医疗、制造、机器人、自动驾驶、计算机图形和视频游戏等领域的惊人模拟效果。）*

Jensen Huang：太神奇了，不是吗？你看到的一切都是模拟。没有艺术创作，没有动画。这是数学之美，是深度的计算机科学和数学。它如此美丽，简直令人难以置信。涵盖了从医疗保健和生命科学到制造业、机器人技术、自动驾驶汽车、计算机图形，甚至视频游戏等所有行业。你看到的第一个镜头是英伟达运行的第一个应用程序。那是我们 1993 年的起点。我们一直坚信我们努力的方向。很难想象，你能看到第一个《VR 战士》场景变为现实，而同一家公司相信我们会走到今天。这真是一段不可思议的旅程。我要感谢所有英伟达员工所做的一切。这真的太不可思议了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is that amazing? Every thing you saw was a simulation. There was no art, no animation. This is the beauty of mathematics. This is deep computer science, deep math. And it's just incredible how beautiful it is. Every industry was covered from healthcare and life sciences to manufacturing, robotics, autonomous vehicles, computer graphics, even video games. That first shot that you saw was the first application Nvidia ever ran. And that's where we started in 1993. And we kept believing in what we were trying to do. And it took, it's hard to imagine that you could see that first virtual fighter scene come alive and that same company believed that we would be here today. It's just really, really incredible journey. I want to thank all the NVIDIA employees for everything that you've done. It's really incredible.</p>
</details>

### 今日议程：AI、6G、量子计算及更多

Jensen Huang：今天我们要涵盖很多行业。我将涵盖 AI、6G、量子、模型、企业计算、机器人技术和工厂。我们开始吧。我们有很多内容要讲，有很多重大的发布要做，还有很多会让你大吃一惊的新合作伙伴。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have a lot of industries to cover today. I'm going to cover AI, 6G, quantum, models, enterprise computing, robotics, and factories. Let's get started. We have a lot to cover, a lot of big announcements to make, a lot of new partners that would very much surprise you.</p>
</details>

### 重塑电信业：与诺基亚合作共创 6G 未来

Jensen Huang：电信是我们的经济、产业和国家安全的支柱和命脉。然而，自从无线技术诞生以来，我们定义了技术，定义了全球标准，我们将美国技术出口到世界各地，以便世界可以在美国技术和标准之上进行建设。但这种情况已经很久没有发生了。今天世界各地部署的无线技术主要基于外国技术。我们基础的通信网络建立在外国技术之上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Telecommunications is the backbone, the lifeblood of our economy, our industries, our national security. And yet, ever since the beginning of wireless where we defined the technology, we defined the global standards, we exported American technology all around the world so that the world can build on top of American technology and standards. It has been a long time since that's happened. wireless technology around the world largely today deployed on foreign technologies. Our fundamental communication fabric built on foreign technologies.</p>
</details>

Jensen Huang：这种情况必须停止，我们有机会做到这一点，尤其是在这个根本性的平台转型期间。如你所知，计算机技术是几乎每个行业的基础。它是科学最重要的工具，也是工业最重要的工具。我刚才说过，我们正在经历一次平台转型。这次平台转型应该是我们千载难逢的机会，让我们重返赛场，开始用美国技术进行创新。今天，我们宣布我们将要这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That has to stop and we have an opportunity to do that especially during this fundamental platform shift. As you know computer technology is at the foundation of literally every single industry. It is the single most important instrument of science. It's the single most important instrument of industry. And I just said we're going through a platform shift. That platform shift should be the once-in-a-lifetime opportunity for us to get back into the game for us to start innovating with American technology. Today, today we're announcing that we're going to do that.</p>
</details>

Jensen Huang：我们与诺基亚建立了重要的合作伙伴关系。诺基亚是全球第二大电信设备制造商。这是一个价值3万亿美元的产业。基础设施价值数千亿美元。全球有数百万个基站。如果我们能够合作，我们就能在这个根本上基于加速计算和 AI 的不可思议的新技术之上进行建设。对于美国来说，这将使其成为下一次 6G 革命的中心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have a big partnership with Nokia. Nokia is the second largest telecommunications maker in the world. It's a $3 trillion industry. Infrastructure is hundreds of billions of dollars. There are millions of base stations around the world. If we could partner, we could build on top of this incredible new technology fundamentally based on accelerated computing and AI. and for United States, for America to be at the center of the next revolution in 6G.</p>
</details>

Jensen Huang：所以今天我们宣布，英伟达有了一条新的产品线，名为 Nvidia Arc。即 Aerial 无线电网络计算机（Aerial Radio Network computer），简称 Arc。Arc 由三项基本新技术构成：Grace CPU、Blackwell GPU 以及我们专为此应用设计的 ConnectX Melanox 网络技术。所有这些使我们能够运行我之前提到的名为 Aerial 的 CUDA X 库。Aerial 本质上是一个运行在 CUDA X 之上的无线通信系统。我们将首次创造一个软件定义的、可编程的计算机，它能够进行无线通信并同时进行 AI 处理。这完全是革命性的。我们称之为 Nvidia Arc。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So today we're announcing that Nvidia has a new product line. It's called the Nvidia Arc. The aerial radio network computer, aerial RAM computer, Arc. Arc is built from three fundamental new technologies. the gray CPU, the Blackwell GPU, and our ConnectX Melanox Connect X networking designed for this application. And all of that makes it possible for us to run this library, this CUDA X library that I mentioned earlier called Aerial. Aerial is essentially a wireless communication system running on top of CUDA X. We're going to we're going to create for the first time a softwaredefined programmable computer that's able to communicate wirelessly and do AI processing at the same time. This is completely revolutionary. We call it Nvidia Arc.</p>
</details>

Jensen Huang：诺基亚将与我们合作，整合我们的技术，重写他们的技术栈。这家公司拥有 7000 项基础的 5G 必要专利。很难想象还有比这更伟大的电信领导者。所以我们将与诺基亚合作。他们将把 Nvidia Arc 作为他们未来的基站。Nvidia Arc 也与诺基亚当前的 Airscale 基站兼容。这意味着我们将采用这项新技术，并能够用 6G 和 AI 升级全球数百万个基站。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And Nokia is going to work with us to integrate our technology, rewrite their stack. This is a company with 7,000 fundamental essential 5G patents. Hard to imagine any greater leader in telecommunications. So, we're going to partner with Nokia. They're going to make Nvidia Arc their future base station. Nvidia Arc is also compatible with Airscale, the current Nokia base stations. So what that means is we're going to take this new technology and we'll be able to upgrade millions of base stations around the world with 6G and AI.</p>
</details>

Jensen Huang：现在，6G 和 AI 在某种意义上是相当根本性的，因为我们将首次能够使用 AI 技术。用于 RAN（无线接入网）的 AI 可以通过人工智能和强化学习，根据周围环境、流量、移动性、天气等因素实时调整波束成形，从而提高无线电通信的频谱效率。频谱效率消耗了全球约 1.5% 到 2% 的电力。因此，提高频谱效率不仅可以在不增加必要能耗的情况下增加无线网络传输的数据量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now 6G and AI is really quite fundamental in the sense that for the first time we'll be able to use AI technology AI for RAN to make radio communications more spectral efficient doing using artificial intelligence reinforcement learning adjusting the beam forming in real time in context depending on the surroundings and the traffic and the mobility the weather all of that could be taken into account so that we could improve spectral efficiency. Spectral efficiency consumes about one and a half to 2% of the world's power. So improving spectral efficiency not only improves the amount of data we can put through wireless networks without increasing the amount of energy necessary.</p>
</details>

Jensen Huang：我们能做的另一件事是 RAN 上的 AI。这是一个全新的机会。记住，互联网实现了通信，但像 AWS 这样聪明的公司在互联网之上构建了云计算系统。我们现在也将在无线电信网络之上做同样的事情。这个新的云将是一个边缘工业机器人云。这就是 RAN 上的 AI 的用武之地。第一个是用于 RAN 的 AI，以提高无线电频谱效率。第二个是 RAN 上的 AI，本质上是无线电信的云计算。云计算将能够直达边缘，到达那些没有数据中心的地方，因为我们的基站遍布全球。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other thing that we could do AI for RAN is AI on RAM. This is a brand new opportunity. Remember the internet enabled communications but amazingly smart companies AWS built a cloud computing system on top of the internet. We are now going to do the same thing on top of the wireless telecommunications network. This new cloud will be an edge industrial robotics cloud. This is where AI on RAN the first is AI for RAN to improve radio radio spectrum efficiency. The second is AI on RAN essentially cloud computing for wireless telecommunications. Cloud computing will be able to go right out to the edge where data centers are not are not because we have base stations all over the world.</p>
</details>

Jensen Huang：这个发布真的非常激动人心。Justin Hotard，这位 CEO，我想他就在房间的某个地方。感谢你们的合作。感谢你们帮助美国将电信技术带回美国。这真是一次非常棒的合作。非常感谢你们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This announcement is really exciting. Justin Hodar the CEO I think he's somewhere in the room. Thank you for your partnership. Thank you for helping United States bring telecommunication technology back to America. This is really a fantastic, fantastic partnership. Thank you very much.</p>
</details>

### 量子计算的未来：连接 QPU 与 GPU 超级计算机

Jensen Huang：让我们来谈谈量子计算。1981年，粒子物理学家、量子物理学家理查德·费曼（Richard Feynman）设想了一种可以模拟自然的新型计算机。直接模拟自然，因为自然是量子的。他称之为量子计算机。40年后，这个行业取得了根本性的突破。就在去年，一个根本性的突破。现在已经可以制造出一个逻辑量子比特（logical qubit）。一个相干、稳定且经过纠错的逻辑量子比特。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's talk about quantum computing. 1981 particle physicist quantum physicist Richard Feman imagined a new type of computer that can simulate nature directly. To simulate nature directly because nature is quantum. He called it a quantum computer. 40 years later the industry has made a fundamental breakthrough. 40 years later, just last year, a fundamental breakthrough. It is now possible to make one logical cubit. One logical cubit. One logical cubit that's coherent, stable, and error corrected in past.</p>
</details>

Jensen Huang：现在，一个逻辑量子比特可能由几十个，有时是几百个物理量子比特共同工作组成。如你所知，量子比特，这些粒子，非常脆弱。它们很容易变得不稳定。任何观察、任何采样、任何环境条件都会导致它们退相干。因此，这需要极其良好控制的环境，以及大量不同的物理量子比特协同工作，以便我们对这些所谓的辅助或伴随量子比特进行纠错，从而推断出那个逻辑量子比特的状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now that one logical cubit consists of could be sometimes tens, sometimes hundreds of physical cubits all working together. As you know, cubits, these particles are incredibly fragile. They could be unstable very easily. Any observation, any sampling of it, any environmental condition causes it to become decoherent. And so, it takes an extraordinarily well-controlled environments. And now also a lot of different physical cubits for them to work together and for us to do error correction on these what are called auxiliary or syndrome cubits for us to error correct them and infer what that logical cubit state is.</p>
</details>

Jensen Huang：有各种不同类型的量子计算机：超导、光子、囚禁离子、稳定原子等。我们现在认识到，将量子计算机直接连接到 GPU 超级计算机至关重要，这样我们才能进行纠错，进行人工智能校准和控制，以及协同进行模拟。正确的算法在 GPU 上运行，正确的算法在 QPU 上运行，这两个处理器，两台计算机并肩工作。这就是量子计算的未来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are all kinds of different types of quantum computers. superconducting, photonic, trapped ion, stable atom, all kinds of different ways to create a quantum computer. Well, we now realize that it's essential for us to connect a quantum computer directly to a GPU supercomputer so that we could do the error correction, so that we could do the artificial intelligence calibration and control of the quantum computer and so that we could do simulations collectively working together. the right algorithms running on the GPUs, the right algorithms running on the QPUs and the two processors, the two computers working side by side. This is the future of quantum computing.</p>
</details>

Jensen Huang：所以今天我们发布了 NVQL Link。它由两部分组成。当然，这个互连技术可以进行量子计算机的控制和校准、量子纠错，并连接 QPU 和我们的 GPU 超级计算机这两台计算机来进行混合模拟。它也是完全可扩展的。它不仅能为当今少数量子比特进行纠错，还能为未来进行纠错，我们将把这些量子计算机从今天的数百个量子比特扩展到未来的数万、数十万个量子比特。所以我们现在有了一个可以进行控制、协同模拟、量子纠错并能扩展到未来的架构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So today we're announcing the MV MVQ link MVQL link and it's made possible by two things. Of course this interconnect that does quantum computer control and calibration quantum error correction as well as connects two computers the QPU and our GPU supercomputers to do hybrid simulations. It is also completely scalable. It doesn't just do the error correction for today's number of few cubits. It does error correction for tomorrow where we're going to essentially scale up these quantum computers from the hundreds of cubits we have today to tens of thousands of cubits, hundreds of thousands of cubits in the future. So we now have an architecture that can do control, co- simulation, quantum error correction and scale into that future.</p>
</details>

Jensen Huang：业界的支持令人难以置信。在 CUDA Q 发明之后——记住，CUDA 是为 GPU-CPU 加速计算设计的，基本上是利用两个处理器，用正确的工具做正确的事。现在 CUDA Q 已经扩展到 CUDA 之外，以便我们能够支持 QPU，让 QPU 和 GPU 这两个处理器协同工作，并在短短几微秒内来回移动计算。这是与量子计算机合作所必需的延迟。因此，CUDA Q 是一个如此不可思议的突破，被众多开发者采用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The industry support has been incredible between the invention of CUDA Q. Remember CUDA was designed for GPU CPU accelerated computing. Basically using both processors to do use the right tool to do the right job. Now CUDAQ has been extended beyond CUDA so that we could support QPU and have the two processors QPU and the GPU work and have computation move back and forth within just a few microsconds. The essential latency to be able to cooperate with the quantum computer. So now CUDAQ is such an incredible breakthrough adopted by so many different developers.</p>
</details>

Jensen Huang：我们今天宣布，有 17 家不同的量子计算机行业公司支持 NVQ Link。我对此感到非常兴奋，还有 8 个不同的能源部实验室：伯克利、布鲁克海文、芝加哥的费米实验室、林肯实验室、洛斯阿拉莫斯、橡树岭、太平洋西北、桑迪亚实验室，几乎每个能源部实验室都与我们合作，与我们的量子计算机公司生态系统以及这些量子控制器合作，以便我们将量子计算整合到未来的科学中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are announcing today 17 different quantum computer industry companies supporting the MVQ link and and I'm so excited about this eight different DOE labs Berkeley Brook Haven Fermy Labs in Chicago Lincoln Laboratory Los Alamos Oakidge Pacific Northwest San Die lab just about every single DOE lab has engaged us working with our ecosystem of quantum computer companies and these quantum controllers so that we could integrate quantum computing in into the future of science.</p>
</details>

### 美国能源部合作：构建七台全新 AI 超级计算机

Jensen Huang：我还有一个额外的消息要宣布。今天，我们宣布美国能源部（Department of Energy）正与英伟达合作，建造七台新的 AI 超级计算机，以推动我们国家的科学发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I have one more additional announcement to make. Today, we're announcing that the Department of Energy is partnering with Nvidia to build seven new AI supercomputers to advance our nation's science.</p>
</details>

Jensen Huang：我必须向部长 Chris Wright 致敬。他为能源部带来了巨大的活力，一股能量的激增，一股确保美国在科学领域领先的热情。正如我之前提到的，计算是科学的基础工具。我们正在经历几个平台转型。一方面，我们正在向加速计算迈进。这就是为什么未来每台超级计算机都将是基于 GPU 的超级计算机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have to have a shout out for Secretary Chris Wright. He has brought so much energy to the DOE. A surge of energy, a surge of passion to make sure that America leads science. Again, as I mentioned, computing is the fundamental instrument of science. And we are going through several platform shifts. On the one hand, we're going to accelerated computing. That's why every future supercomputer will be GPUbased supercomputer.</p>
</details>

Jensen Huang：我们正在向 AI 迈进。AI 和基于原理的求解器、基于原理的模拟不会消失，但可以被增强、扩展，使用代理模型、AI 模型协同工作。我们也知道，经典计算可以通过量子计算得到增强，以理解自然的状态。我们还知道，未来我们有如此多的信号和数据需要从世界中采样。遥感比以往任何时候都更重要。而这些实验室，除非它们是机器人化的工厂和实验室，否则不可能以我们需要的规模和速度进行实验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're going to AI. So that AI and principled solvers, principled simulation, principled physics simulation is not going to go away, but it could be augmented, enhanced, scaled, use surrogate models, AI models working together. We also know that principal solvers, classical computing could be enhanced to understand the state of nature using quantum computing. We also know that in the future we have so much signal, so much data we have to sample from the world. Remote sensing is more important than ever. And these laboratories are impossible to experiment at the scale and speed we need to unless they're robotic factories, robotic laboratories.</p>
</details>

Jensen Huang：所有这些不同的技术正同时进入科学领域。Wright 部长理解这一点，他希望能源部能抓住这个机会，为自己注入新的活力，确保美国在科学领域保持领先地位。我要为此感谢你们所有人。谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So all of these different technologies are coming into science at exactly the same time. Secretary Wright understands this and he wants the DOE to take this opportunity to supercharge themselves and make sure the United States stay at the forefront of science. I want to thank all of you for that. Thank you.</p>
</details>

### 重新定义 AI：从软件工具到智能劳动力

Jensen Huang：让我们谈谈 AI。什么是 AI？大多数人会说 AI 是聊天机器人，这是理所当然的。毫无疑问，ChatGPT 处于人们认为的 AI 的前沿。然而，正如你现在看到的，这些科学超级计算机不会运行聊天机器人。它们将从事基础科学研究。科学、AI、AI 的世界远不止聊天机器人。当然，聊天机器人非常重要，**AGI**（Artificial General Intelligence: 通用人工智能）也至关重要。深度计算机科学、强大的计算能力、伟大的突破对于 AGI 仍然是必不可少的。但除此之外，AI 的内涵要丰富得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's talk about AI. What is AI? Most people would say that AI is a chatbot and it it's rightfully so. There's no question that Chad GPT is at the forefront of what people would consider AI. However, just as you see right now, these scientific supercomputers are not going to run chatbots. They're going to do basic science. Science, AI, the world of AI is much much more than a chatbot. Of course, the chatbot is extremely important and AGI is fundamentally critical. deep computer science, incredible computing, great breakthroughs are still essential for AGI. But beyond that, AI is a lot more.</p>
</details>

Jensen Huang：事实上，我将从几个不同的方面来描述 AI。第一种方式，你思考 AI 的方式是，它已经完全重塑了计算堆栈。我们过去做软件的方式是手动编码，在 CPU 上运行。今天，AI 是机器学习，是数据密集型编程，由 AI 训练和学习，并在 GPU 上运行。为了实现这一点，整个计算堆栈都发生了变化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI is in fact, I'm going to describe AI in a couple different ways. This first way, the first way you think about AI is that it has completely reinvented the computing stack. The way we used to do software was hand coding. hand coding software running on CPUs. Today AI is machine learning training data inensive programming if you will trained and learned by AI that runs on a GPU. In order to make that happen, the entire computing stack has changed.</p>
</details

Jensen Huang：注意，这里你没有看到 Windows，没有看到 CPU。你看到的是一个完全不同的、根本上不同的堆栈。从能源需求开始。这是我们政府，特朗普总统值得巨大赞誉的另一个领域。他的亲能源倡议，他认识到这个行业需要能源来发展，需要能源来前进，我们需要能源来取胜。他认识到这一点，并把国家的力量放在支持能源增长的背后，这完全改变了游戏规则。如果这没有发生，我们可能会陷入困境，我要为此感谢特朗普总统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Notice you don't see Windows up here. You don't see CPU up here. You see a whole different a whole fundamentally different stack. Everything from the need for energy. And this is another area where our administration, President Trump gets deserves enormous credit. His pro- energy initiative, his recognition that this industry needs energy to grow. It needs energy to advance and we need energy to win. His recognition of that and putting the weight of the nation behind pro- energy growth completely changed the game. If this didn't happen, we could have been in a bad situation and I want to thank President Trump for that.</p>
</details>

Jensen Huang：在能源之上是这些 GPU，它们被连接并构建到我稍后会展示的基础设施中。在这个由巨大的数据中心组成的基础设施之上——这些数据中心的大小轻易就比这个房间大很多倍，消耗巨大的能源——然后通过这种名为 GPU 超级计算机的新机器将能源转化为数字。这些数字被称为“令牌”（tokens）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On top of energy are these GPUs and these GPUs are connected into built into infrastructure that I'll show you later. On top of this infrastructure which in consists of giant data centers like easily many times the size size of this room enormous amount of energy which then transfer transforms the energy through this new machine called GPU supercomputers to generate numbers. These numbers are called tokens.</p>
</details>

Jensen Huang：这是人工智能的语言，或者说计算单元、词汇。你几乎可以对任何东西进行“令牌化”。当然，你可以对英文单词进行令牌化。你也可以对图像进行令牌化，这就是为什么你能够识别或生成图像。你可以对视频、3D 结构、化学物质、蛋白质和基因进行令牌化。你可以对细胞进行令牌化，几乎任何有结构、有信息内容的东西都可以。一旦你能将其令牌化，AI 就能学习该语言及其含义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the language, if you will, the computational unit, the vocabulary of artificial intelligence. You can tokenize almost anything. You can tokenize, of course, the English word. You can tokenize images. That's the reason why you're able to recognize images or generate images, tokenize video, tokenize 3D structures. You could tokenize chemicals and proteins and genes. You could tokenize cells, tokenize almost anything with structure, anything with information content. Once you could tokenize it, AI can learn that language and the meaning of it.</p>
</details>

Jensen Huang：一旦它学会了该语言的含义，它就可以翻译、回应——就像你与 ChatGPT 互动一样——并且可以生成内容，就像 ChatGPT 可以生成内容一样。所以，你看到 ChatGPT 所做的所有基本事情，你只需要想象一下，如果对象是蛋白质、化学物质、像工厂一样的 3D 结构，或者是一个机器人，而令牌是理解行为并对动作和行为进行令牌化。所有这些概念基本上是相同的，这就是为什么 AI 正在取得如此非凡的进步。在这些模型之上是应用程序。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once it learns the meaning of that language, it can translate. It can respond just like you respond just like you interact with chat GPT. And it could generate just as chat GPT can generate. So all of the fundamental things that you see Chad GPD do, all you have to do is imagine what if it was a protein, what if it was a chemical, what if it was a 3D structure like a factory, what if it was a robot and the token was understanding behavior and tokenizing motion and action. All of those concepts are basically the same, which is the reason why AI is making such extraordinary progress. And on top of these models are applications</p>
</details>

Jensen Huang：这是一个深刻的观察，对人工智能的深刻理解：过去的软件行业是关于创造工具的。Excel 是一个工具，Word 是一个工具，网页浏览器也是一个工具。我知道这些是工具，因为是你去使用它们。工具行业，就像螺丝刀和锤子一样，规模是有限的。就 IT 工具而言，比如数据库工具，这个市场大约是一万亿美元左右。但 AI 不是工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is a a profound understanding, a profound observation of artificial intelligence that the software industry of the past was about creating tools. Excel is a tool. Word is a tool. A web browser is a tool. The reason why I know these are tools is because you use them. The tools industry, just as screwdrivers and hammers, the tools industry is only so large. In the case of IT tools, they could be database tools. These IT tools is about a trillion dollars or so. But AI is not a tool.</p>
</details>

Jensen Huang：AI 是工作。这就是深刻的区别。AI 实际上是能够使用工具的“工人”。我非常兴奋的一件事是 Perplexity 正在做的工作。Perplexity 使用网页浏览器来预订假期或购物。基本上就是一个 AI 在使用工具。Cursor 是一个我们英伟达在使用的巨大的 AI 系统。英伟达的每一位软件工程师都在使用 Cursor。它极大地提高了我们的生产力。它基本上是我们每个软件工程师生成代码的伙伴，它使用的工具叫做 VS Code。所以 Cursor 是一个使用 VS Code 的智能体 AI 系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI is work. That is the profound difference. AI is in fact workers that can actually use tools. One of the things I'm really excited about is the work that Irvin's doing at Perplexity. Perplexity using web browsers to book vacations or do shopping. Basically an AI using tools. Cursor is an AI, a nigantic AI system that we use at NVIDIA. Every single software engineer at Nvidia uses cursor. That's improved our productivity tremendously. It's basically a partner for every one of our software engineers to generate code and it uses a tool and the tool it uses is called VS code. So cursor is an AI agentic AI system that uses VS code.</p>
</details>

Jensen Huang：所有这些不同的行业，无论是聊天机器人，还是我们有 AI 助理研究员的数字生物学，或者自动驾驶出租车——自动驾驶出租车内部是什么？当然，它是无形的，但显然有一个 AI 司机。那个司机在做工作。它用来做那项工作的工具就是汽车。所以，我们至今所创造的一切，整个世界，我们至今所创造的一切都是工具。供我们使用的工具。而有史以来第一次，技术现在能够做工作，帮助我们提高生产力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, all of these different industries whether it's chatbots or digital biology where we have AI assistant researchers or what is a robo taxi inside a robo taxi? Of course, it's invisible, but obviously there's a there's a AI chauffeur. That chauffeur is doing work. And the tool that it uses to do that work is the car. And so everything that we've made up until now, the whole world, everything that we've made up until now are tools. Tools for us to use. For the very first time, technology is now able to do work and help us be more productive.</p>
</details>

Jensen Huang：机会清单还在不断增加，这就是为什么 AI 触及了经济中从未触及过的领域。它位于一个价值百万亿美元的全球经济的工具层之下，价值数万亿美元。现在，AI 首次将参与到那个百万亿美元的经济中，使其更具生产力，增长更快，规模更大。我们面临严重的劳动力短缺。拥有能够增强劳动力的 AI 将帮助我们增长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The list of opportunities go on and on, which is the reason why AI addresses the segment of the economy that it has never addressed. It is a few trillion dollars that sits underneath the tools of a hundred trillion dollar global economy. Now, for the first time, AI is going to engage that hundred trillion dollar economy and make it more productive, make it grow faster, make it larger. We have a severe shortage of labor. Having AI that augments labor is going to help us grow.</p>
</details>

### AI 工厂：新时代的算力生产模式

Jensen Huang：从技术产业的角度来看，有趣的是，除了 AI 是解决经济新领域的新技术之外，AI 本身也是一个新产业。我之前解释过的“令牌”，这些数字，在你对所有这些不同模态的信息进行令牌化之后，需要一个工厂来生产这些数字。这与过去的计算机行业和芯片行业不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now what's interesting about this from a technology industry perspective also is that in addition to the fact that AI is new technology that addresses new segments of the economy AI in itself is also a new industry this token as I was explaining earlier these numbers after you tokenize all these different modalities of information there's a factory that needs to produce these numbers unlike the computer industry indry and the chip industry of the past.</p>
</details>

Jensen Huang：如果你看看过去的芯片行业，它在数万亿美元的 IT 行业中大约占 5% 到 10%，甚至更少。原因在于使用 Excel、浏览器或 Word 并不需要太多计算。是我们自己在进行计算。但在新世界里，需要有一台计算机始终理解上下文。它无法预先计算，因为每次你使用计算机进行 AI 操作，每次你要求 AI 做某事，上下文都不同。所以它必须处理所有这些信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Notice if you look at the chip industry of the past, the chip industry represents about 5 to 10% maybe less 5% or so of a multi- trillion dollar few trillion dollar IT industry. And the reason for that is because it doesn't take that much computation to use Excel. It doesn't take that much computation to use browsers. It doesn't take that much computation to use word. We do the computation. But in this new world, there needs to be a computer that understands context all the time. It can't precomputee that because every time you use the computer for AI, every time you ask the AI to do something, the context is different. So, it has to process all of that information.</p>
</details>

Jensen Huang：例如，在自动驾驶汽车的情况下，它必须处理汽车的上下文。上下文处理。你要求 AI 执行的指令是什么？然后它必须一步一步地分解问题，进行推理，提出计划并执行。每一步都需要生成大量的令牌，这就是为什么我们需要一种新型系统，我称之为“AI 工厂”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Environmental, for example, in the case of a self-driving car, it has to process the context of the car. context processing. What is the instruction you're asking the AI to do? Then it's got to go and break down the problem step by step, reason about it, and come up with a plan and execute it. Every single one of that step requires enormous number of tokens to be generated which is the reason why we need a new type of system and I call it an AI factory.</p>
</details>

Jensen Huang：简而言之，它是一个 AI 工厂。它与过去的数据中心不同。它是一个 AI 工厂，因为它只生产一种东西，不像过去的数据中心什么都做：为我们存储文件，运行各种不同的应用程序。你可以像使用你的电脑一样使用那个数据中心，用于各种应用。你可以用它来玩游戏，浏览网页，或者做你的会计工作。那是过去的计算机，一种通用的计算机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's an AI factory for short. It's unlike a data center of the past. is an AI factory because this factory produces one thing unlike the data centers of the past that does everything. Stores files for all of us, runs all kinds of different applications. You could use that data center like you can use your computer for all kinds of applications. You could use it to play game one day. You could use it to browse the web. You could use it, you know, to do your accounting. And so that is a computer of the past, a universal generalpurpose computer.</p>
</details>

Jensen Huang：我在这里谈论的计算机是一个工厂。它基本上只运行一件事：AI。它的目的是生产尽可能有价值的令牌，这意味着它们必须是智能的。你希望以惊人的速度生产这些令牌，因为当你向 AI 请求某事时，你希望它能回应。注意，在高峰时段，这些 AI 的响应速度越来越慢，因为它要为很多人做很多工作。所以你希望它能以惊人的速度生产有价值的令牌，并且你希望它能以经济高效的方式生产。我使用的每一个词都与 AI 工厂、汽车工厂或任何工厂一致。它绝对是一个工厂。而这些工厂以前从未存在过。在这些工厂内部，是堆积如山的芯片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The computer I'm talking about here is a factory. It runs basically one thing. It runs AI and its purpose, its purpose is designed to produce tokens that are as valuable as possible, meaning they have to be smart. And you want to produce these tokens at incredible rates because when you ask an AI for something, you would like it to respond. And notice during peak hours, these AIs are now responding slower and slower because it's got a lot of work to do for a lot of people. And so you wanted to produce valuable tokens at incredible rates and you wanted to produce it cost effectively. Every single word that I used are consistent with an AI factory with a car factory or any factory. It is absolutely a factory. And these factories these factories never existed before. And inside these factories are mountains and mountains of chips.</p>
</details>

### AI 的飞轮效应与双重指数增长

Jensen Huang：在过去几年里，我们已经找到了让 AI 变得更聪明的方法，而不仅仅是预训练。预训练基本上是说，让我们把人类创造的所有信息都拿来，让 AI 从中学习。这本质上是记忆和泛化。这和我们小时候上学没什么不同，是学习的第一个阶段。预训练从来就不是教育的终点，就像学前教育从来就不是教育的终点一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first is that we in the last couple years have figured out how to make AI much much smarter rather than just pre-training. Pre-training basically says let's take all of the all of the information that humans have ever created. Let's give it to the AI to learn from. It's essentially memorization and generalization. It's no it's not unlike going to school back when we were kids. the first stage of learning. Pre-training was never meant just as preschool was never meant to be the end of education.</p>
</details>

Jensen Huang：预训练，或者说学前教育，只是教你智能的基本技能，这样你才能理解如何学习其他一切。没有词汇，不理解语言和如何交流、如何思考，就不可能学习其他一切。接下来是后训练（post-training）。预训练之后的后训练是教你技能。解决问题的技能。分解问题，进行推理。如何解决数学问题，如何编码，如何一步一步地思考这些问题，使用第一性原理推理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Pre-training, preschool was simply teaching you the basic skills of intelligence so that you can understand how to learn everything else. Without vocabulary, without understanding of language and how to communicate, how to think, it's impossible to learn everything else. The next is post-training. Post-training after pre-training is teaching you skills. Skills to solve problem. Break down problems. Reason about it. How to solve math problems. How to code. How to think about these problems step by step. Use first principal reasoning.</p>
</details>

Jensen Huang：在那之后，才是计算真正发挥作用的地方。我们现在有三种基本的技术技能。我们有预训练，这仍然需要巨大的计算量。我们现在有后训练，它使用更多的计算。现在，“思考”给基础设施带来了巨大的计算负载，因为它在为每一个人思考。因此，AI 思考（即推理）所需的计算量确实非常惊人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then after that is where computation really kicks in. We now have three fundamental technology skills. We have these three technology. Pre-training, which still requires enormous enormous amount of computation. We now have post training which uses even more computation and now thinking puts incredible amounts of computation load on the infrastructure because it's thinking on our behalf for every single human. So the amount of computation necessary for AI to think inference is really quite extraordinary.</p>
</details>

Jensen Huang：我以前听到有人说推理很简单。英伟达应该做训练。英伟达会做……他们在这方面很擅长，所以他们会做训练，而推理很简单。思考怎么会简单呢？复述记忆的内容很简单，复述乘法表很简单，但思考是困难的。这就是为什么这三个规模定律——它们都全速运转——给计算量带来了如此大的压力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now I used to hear people say that inference is easy. Nvidia should do training. Nvidia is going to do you know they are really good at this so they're going to do training that inference was easy how could thinking be easy regurgitating memorized content is easy regurgitating the multiplication table is easy thinking is hard which is the reason why these three scales these three new scaling laws which is all of it in in full steam has put so much pressure on the amount of computation</p>
</details>

Jensen Huang：你的模型越聪明，使用它的人就越多。它现在更有根据，能够推理，能够解决它以前从未学过如何解决的问题，因为它可以做研究，去学习，然后回来，分解问题，推理如何解决你的问题，然后去解决它。思考的量正在使模型变得更智能。它越智能，使用它的人就越多。它越智能，需要的计算就越多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The smarter your models are, the smarter your models are, the more people use it. It's now more grounded. It's able to reason. It's able to solve problems it never learn how to solve before because it could do research. Go learn about it. come back, break it down, reason about how to solve your how to answer your question, how to solve your problem and go off and solve it. The amount of thinking is making the models more intelligent. The more intelligent it is, the more people use it. The more intelligent it is, the more computation is necessary.</p>
</details>

Jensen Huang：但去年发生了一件事。AI 行业迎来了一个转折点。这意味着 AI 模型现在足够聪明了。它们值得付费。英伟达为 Cursor 的每个许可证付费，我们很乐意这样做。因为 Cursor 正在帮助一个拥有数十万员工的软件工程师或 AI 研究员提高数倍的生产力。这些 AI 模型已经变得足够好，值得人们为之付费。Cursor、11 Labs、Synthesia、A Bridge、Open Evidence，名单还在继续。当然，还有 OpenAI、Claude。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But here's what happened. This last year, the AI industry turned a corner. Meaning that the AI models are now smart enough. They're making they're worthy. They're worthy to pay for. Nvidia pays for every license of Cursor. And we gladly do it. We gladly do it because cursor is helping a several hundred,000 employee software engineer or AI researcher be many, many times more productive. So, of course, we'd be more than happy to do that. These AI models have become good enough that they are worthy to be paid for. Cursor, 11 Labs, Syntheasia, A Bridge, Open Evidence, the list goes on. Of course, open AI, of course, Claude.</p>
</details>

Jensen Huang：这些模型现在非常好，人们愿意为它们付费。因为人们愿意付费并更多地使用它，而每次他们更多地使用它，你就需要更多的计算。我们现在有了两个指数级增长。第一个是三个规模定律带来的指数级计算需求。第二个指数是，它越智能，使用它的人就越多，使用它的人越多，它需要的计算就越多。这两个指数级增长现在正给世界的计算资源带来压力，而这恰好发生在我之前告诉你们摩尔定律已基本终结的时候。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These models are now so good that people are paying for it. And because people are paying for it and using more of it, and every time they use more of it, you need more compute. We now have two exponentials. These two exponentials, one is the exponential compute requirement of the three scaling law. And the second exponential, the more pe the smarter it is, the more people use it, the more people use it, the more computing it needs. Two exponentials now putting pressure on the world's computational resource at exactly the time when I told you earlier that Moore's law has largely ended.</p>
</details>

Jensen Huang：所以问题是，我们该怎么办？如果我们有两个指数级增长的需求，而我们找不到降低成本的方法，那么这个正反馈系统，这个循环反馈系统，基本上被称为“飞轮效应”（virtuous cycle），对于几乎任何行业都至关重要。AI 现在已经达到了飞轮效应的阶段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so the question is what do we do? If we have these two exponential demands growing and if we don't if we don't find a way to drive the cost down then this positive feedback system this circular feedback system essentially called the virtual cycle essential for almost any industry essential for any platform industry. AI has now reached the virtual cycle.</p>
</details>

Jensen Huang：所以，你越使用它，因为它很智能，我们愿意为它付费，产生的利润就越多。利润越多，投入到电网的计算资源就越多，投入到 AI 工厂的计算资源就越多，AI 就会变得更智能。越智能，使用它的人就越多，应用程序就越多，我们能解决的问题就越多。这个飞轮现在正在旋转。我们需要做的是大幅降低成本，这样一来，用户体验会更好——当你向 AI 提问时，它会更快地回应你；二来，通过降低成本来保持这个飞轮的运转，让它变得更智能，让更多人使用它，如此循环往复。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so the more you use it because the AI is smart and we pay for it. The more profit is generated, the more profit generated, the more computes put to on the on the grid, the more compute is put into AI factories, the more comput the AI becomes smarter, the smarter, more more people use it, more applications use it, the more problems we can solve. This virtual cycle is now spinning. What we need to do is drive the cost down tremendously so that one the user experience is better when you prompt the AI it responds to you much faster and two so that we keep this virtual cycle going by driving its cost down so that it could get smarter so that more people use it so that so on so forth that virtual cycle is now spinning</p>
</details>

### 极限协同设计：应对算力挑战的答案

Jensen Huang：但当摩尔定律真的达到极限时，我们该怎么做呢？答案是所谓的“协同设计”（co-design）。你不能只设计芯片，然后期望上面的东西会运行得更快。在设计芯片方面，你最多能做的就是在几年内增加 50% 的晶体管。我们可以增加更多的晶体管，台积电有很多晶体管，这家了不起的公司。我们只是不断增加更多的晶体管。然而，这都是百分比的增长，而不是指数级的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but how do we do that when Moore's law has really reached this limit well the answer is called codeesign design. You can't just design chips and hope that things on on top of it is going to go faster. The best you could do in designing chips is add I don't know 50% more transistors every couple of years. And if you added more transistors just you we can add more transistors and TSMC's got a lot of transistor. Incredible company. We just keep adding more transistors. However, that's all in percentages not exponentials.</p>
</details>

Jensen Huang：我们需要复合指数增长来保持这个飞轮的运转。我们称之为“极限协同设计”（extreme co-design）。英伟达是当今世界上唯一一家可以从一张白纸开始，同时思考新的基础架构、计算机架构、新芯片、新系统、新软件、新模型架构和新应用的公司。我们从头开始，从根本上重新构建一切，然后因为 AI 是一个如此大的问题，我们将其规模化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We need to compound exponentials to keep this virtual cycle going. We call it extreme code design. Nvidia is the only company in the world today that literally starts from a blank sheet of paper and can think about new fundamental architecture, computer architecture, new chips, new systems, new software, new model architecture, and new applications all at the same time. We fundamentally rearchitect everything from the ground up and then because AI is such a large problem, we scale it up.</p>
</details>

Jensen Huang：我们创造了一台完整的计算机，一台首次被扩展到整个机架的计算机。那是一台计算机，一个 GPU。然后我们通过发明一种新的 AI 以太网技术，我们称之为 Spectrum X 以太网，来进行横向扩展。通过这样做，我们在一个如此巨大、如此极端的层面上进行协同设计，以至于性能提升是惊人的。不是每一代提升 50%，也不是每一代提升 25%，而是多得多。这是我们制造过的最极端的协同设计计算机，坦率地说，也是现代以来制造的最极端的。自从 IBM System/360 以来，我认为没有一台计算机像这样从头开始被重新发明过。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We created a whole computer, a computer for the first time that has scaled up into an entire rack. That's one computer, one GPU. And then we scale it out by inventing a new AI Ethernet technology we call Spectrum X Ethernet. By doing so, we do code design at such a such an enormous level, such an extreme level that the performance benefits are shocking. Not 50% better each generation, not 25% better each generation, but much much more. This is the most extreme code-designed computer we've ever made and quite frankly made in modern times. Since the IBM system 360, I don't think a computer has been ground up, reinvented like this ever.</p>
</details>

Jensen Huang：如果我们要创造一个巨大的芯片，一个巨大的 GPU，它就会是这个样子。这就是我们必须做的晶圆级处理的水平。这太不可思议了。所有这些芯片现在都被放进一个巨大的机架里。这个巨大的机架让所有这些芯片协同工作，就像一个整体。这实际上是完全不可思议的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if we were to create one giant chip, one giant GPU, this is what it would look like. This is the level of wafer scale processing we would have to do. It's incredible. All of this, all of these chips are now put into one giant rack. this one giant rack makes all of these chips work together as one. It's actually completely incredible.</p>
</details>

### Blackwell 架构的飞跃与 5000 亿美元的商业前景

Jensen Huang：这些模型非常巨大。我们解决它的方法是把这个巨大的模型变成一群“专家”。这有点像一个团队。这些专家擅长特定类型的问题。我们将一大群专家聚集在一起。所以，这个巨大的、数万亿参数的 AI 模型有所有这些不同的专家，我们把所有这些不同的专家放在一个 GPU 上。现在，这是 NVLink 72。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, these models are so gigantic. The way we solve it is we turn this model, this gigantic model, into a whole bunch of experts. It's a little bit like a team. And so, these experts are good at certain types of problems. And we collect a whole bunch of experts together. And so, this giant multi- trillion dollar AI model has all these different experts and we put all these different experts on a GPU. Now, this is NVLink 72.</p>
</details>

Jensen Huang：我们可以把所有的芯片都放在一个巨大的网络结构中，每个专家都可以互相交谈。我们有 72 个 GPU。因此，我们可以在一个 GPU 中放入四个专家。而旧系统每个计算机只能放八个 GPU，我们必须把 32 个专家放进一个 GPU。所以那个 GPU 必须为 32 个专家思考，而这个系统每个 GPU 只需要为四个专家思考。正因为如此，速度差异是惊人的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We could put all of the chips into one giant fabric and every single expert can talk to each other. We have 72 GPUs. And because of that, we could put four experts in one GPU. versus here because each one of the computers can only put eight GPUs. We have to put 32 experts into one GPU. So this one GPU has to think for 32 experts versus this system each GPU only has to think for four. And because of that the speed difference is incredible.</p>
</details>

Jensen Huang：这是 SemiAnalysis 做的基准测试。他们做得非常非常彻底，测试了所有可测试的 GPU。事实证明，世界上第二好的 GPU 是 H200，它能运行所有工作负载。Grace Blackwell 每个 GPU 的性能是它的 10 倍。当你只有两倍的晶体管数量时，如何获得 10 倍的性能呢？答案是极限协同设计。通过理解未来 AI 模型的本质，并在整个堆栈中进行思考，我们可以为未来创造架构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this just came out. This is the benchmark done by semi analysis. They do a really really thorough job and they benchmarked all of the a GPUs that are benchmarkable. the second best GPU in the world is the H200 and runs all the workload. Grace Blackwell per GPU is 10 times the performance. Now, how do you get 10 times the performance when it's only twice the number of transistors? Well, the answer is extreme code design. And by understanding the nature of the future of AI models and we're thinking across that entire stack, we can create architectures for the future.</p>
</details>

Jensen Huang：这说明世界上成本最低的令牌是由 Grace Blackwell 和 NVLink 72 生成的。最昂贵的计算机。一方面，GB200 是最昂贵的计算机。另一方面，它的令牌生成能力如此之强，以至于它以最低的成本生产令牌，因为每秒生成的令牌数除以 Grace Blackwell 的**总拥有成本**（Total Cost of Ownership, TCO）非常划算。它是生成令牌成本最低的方式。通过这样做，提供惊人的性能，10 倍的性能，10 倍的更低成本，那个飞轮效应就可以继续下去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This says that the lowest cost tokens in the world are generated by Grace Blackwell and Vlink 72. The most expensive computer. On the one hand, GB200 is the most expensive computer. On the other hand, its token generation capability is so great that it produces it at the lowest cost because the tokens per second divided by the t by the total cost of ownership of Grace Blackwell is so good. It is the lowest cost way to generate tokens. By doing so, delivering incredible performance, 10 times the performance, incre delivering 10 times lower cost, that virtual cycle can continue.</p>
</details>

Jensen Huang：我昨天才看到这个。这是云服务提供商（CSP）的资本支出（capex）。人们最近在问我关于资本支出的问题，这是一个很好的观察方式。事实上，排名前六的 CSP 的资本支出，包括亚马逊、CoreWeave、谷歌、Meta、微软和甲骨文，他们总共将投资这么多。我会说时机再好不过了。原因是我们现在有了 Grace Blackwell MVLink72 的全面量产，全球各地的供应链都在生产它。所以我们现在可以向他们所有人交付这个新架构，以便资本支出投资于能提供最佳总拥有成本的工具和计算机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I just saw this literally yesterday. This is uh the CSP capex. People are asking me about capex these days and this is a good way to look at it. In fact, the capex of the top six CSPs and this one, this one is Amazon, Core Weave, Google, Meta, Microsoft, and Oracle. Okay, these CSPs together are going to invest this much in capex. And I would I would tell you the timing couldn't be better. And the reason for that is now we have the Grace Blackwell MVLink72 in all volume production, supply chain, everywhere in the world is manufacturing it. So we can now deliver to all of them this new architecture so that the capex invests in instruments computers that deliver the best TCO.</p>
</details>

Jensen Huang：我们公司业务正在发生的事情是，我们看到了 Grace Blackwell 的非凡增长，原因我刚才都提到了。它由两个指数级增长驱动。我们现在有了可见性。我想我们可能是历史上第一家对到 2026 年累计价值半万亿美元的 Blackwell 和 Rubin 早期产能有可见性的科技公司。如你所知，2025 年还没结束，2026 年还没开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're seeing extraordinary growth for Grace Blackwell for all the reasons that I just mentioned. It's driven by two exponentials. We now have visibility. I think we're probably the first technology company in history to have visibility into half a trillion dollars of cumulative blackwell and early ramps of Reubin through 2026. And as you know, 2025 is not over yet and 2026 hasn't started.</p>
</details>

Jensen Huang：这是已经记录在案的业务量。到目前为止价值半万亿美元。我们已经在最初的几个季度，也就是生产的前四个季度，发货了 600 万片 Blackwell。我们 2025 年还有一个季度，然后还有四个季度。所以在接下来的五个季度里，有 5000 亿美元。这是 Hopper 增长率的五倍。这足以说明问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is how much business is on the books. Half a trillion dollars worth so far. Now, this is out of that. We've already shipped 6 million of the Blackwells in the first several quarters. I guess the first four quarters of production, three and a half quarters of production. We still have one more quarter to go for 2025. And then we have four quarters. So the next five quarters there's $500 million $500 billion half a trillion dollars. That's five times the growth rate of Hopper. That kind of tells you something.</p>
</details>

Jensen Huang：这是 Hopper 的整个生命周期。这还不包括中国和亚洲。所以这只是西方世界。我们排除了中国。Hopper 在其整个生命周期中出货了 400 万个 GPU。Blackwell，每个 Blackwell 封装里有两个 GPU。2000 万个 Blackwell GPU，以及 Reuben 的早期部分。难以置信的增长。所以，我要感谢我们所有的供应链合作伙伴。我知道你们工作得有多努力。我制作了一个视频来庆祝你们的工作。我们播放一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is Hopper's entire life. This doesn't include China and and um and Asia. So this is just uh the West. Okay. This is just uh we're excluding China. So Hopper in its entire life 4 million GPUs. Blackwell. Each one of the Blackwells has two GPUs in it in one large package. 20 million GPUs of Blackwells in the early parts of Reuben. Incredible growth. So, I want to thank all of our supply chain partners. Everybody, I know how hard you guys are working. I made a video to celebrate your work. Let's play it.</p>
</details>

### 美国制造：Blackwell AI 工厂的诞生

*（视频播放，详细展示了 Blackwell 超级芯片从亚利桑那州的硅晶圆开始，经过印第安纳州、德克萨斯州和加利福尼亚州等地的精密制造、组装，最终成为重达 2 吨的机架级 AI 超级计算机的全过程，强调“美国制造，服务世界”。）*

Jensen Huang：我们又在美国制造了。这太不可思议了。特朗普总统要求我的第一件事就是把制造业带回来。把制造业带回来，因为它对国家安全至关重要。把制造业带回来，因为我们想要这些工作岗位和那部分经济。九个月后，我们现在正在亚利桑那州全面生产 Blackwell。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are manufacturing in America again. It is incredible. The first thing that President Trump asked me for is bring manufacturing back. Bring manufacturing back because it's it's necessary for national security. bring manufacturing back because we want the jobs and we want that part of the economy. And nine months later, nine months later, we are now manufacturing in full production Blackwell in Arizona.</p>
</details>

Jensen Huang：极限 Blackwell GB200，Grace Blackwell NVLink 72 的极限协同设计给我们带来了 10 倍的代际提升。这简直不可思议。现在，真正不可思议的部分是这个。这是我们制造的第一台 AI 超级计算机。这是在 2016 年，我把它交付给旧金山的一家初创公司，后来证明那家公司是 OpenAI。这就是那台计算机。为了制造那台计算机，我们设计了一款新芯片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Extreme Blackwell GB 200 MV Grace Blackwell Envy 72 extreme code design gives us 10x generationally. It's utterly incredible. Now, the part that's really incredible is this. This is the first AI supercomput we made. This is in 2016 when I delivered it to a startup in San Francisco which turned out to have been OpenAI. This was the computer. And in order to do the create that computer, we designed one chip.</p>
</details>

Jensen Huang：现在，看看我们必须做的所有芯片。这就是代价。你不可能用一个芯片让计算机快 10 倍。那是不可能的。让计算机快 10 倍的方法，让我们能继续指数级提升性能、指数级降低成本的方法，就是极限协同设计，并同时在所有这些不同的芯片上工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, look at all of the chips we have to do. This is what it takes. You're not going to take one chip and make a computer 10 times faster. That's not going to happen. The way to make computers 10 times faster we can keep increasing the performance exponentially. We can keep driving cost down exponentially is extreme code design and working on all these different chips at the same time.</p>
</details>

### 展望未来：下一代平台 Rubin 亮相

Jensen Huang：我们现在家里有 Rubin 了。这就是 Rubin。这是 Vera Rubin 和 Rubin。女士们，先生们，Rubin。这是我们的第三代 NVLink 72 机架级计算机。第三代。GB200 是第一代。我们全世界所有的合作伙伴，我知道你们工作得有多辛苦。那真是疯狂的困难。第二代，顺利多了。而这一代，看看这个。完全无电缆。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We now have Ruben back home. This is Ruben. This is the Vera Rubin and and uh Ruben. Ladies and gentlemen, Ruben. This is this is our third generation MVLink 72 rack scale computer. Third generation GB200 was the first one. All of our partners around the world, I know how hard you guys worked. It was insanely hard. It was insanely hard to do. Second generation, so much smoother. And this generation, look at this. Completely cableless.</p>
</details>

Jensen Huang：这现在都在实验室里。这是下一代 Rubin。在我们出货 GB300 的同时，我们正在准备让 Rubin 投入生产。你知道，明年的这个时候，也许会早一点。所以，每一年，我们都会推出最极端的协同设计系统，这样我们就可以不断提升性能，不断降低令牌生成成本。看看这个。这真是一台非常漂亮的计算机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">completely cableless. And this is this is all back in the lab now. This is the next generation Reuben. While we're shipping GB300's, uh we're preparing Reuben to be in production. You know, this time next year, maybe slightly earlier. And so, every single year, we are going to come up with the most extreme code design system so that we can keep driving up performance and keep driving down the token generation cost. Look at this. This is just an incredibly beautiful computer.</p>
</details>

Jensen Huang：与我 9 年前交付给 OpenAI 的 DGX1 相比，它的性能是那台超级计算机的 100 倍。这一个 Vera Rubin 就相当于 25 个那样的机架。这是一个 Vera Rubin 超级芯片计算托盘。安装非常简单。如果你决定要添加一个特殊的处理器，我们已经添加了另一个处理器。它被称为上下文处理器，因为我们给 AI 的上下文越来越多。我们希望它在回答问题之前阅读一大堆 PDF，阅读一大堆存档论文，观看一大堆视频。所有这些上下文处理都可以添加进来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">compared to the DGX1 I delivered to OpenAI 10 years ago, 9 years ago, it's 100 times the performance right here versus 100 times of that supercomput. 100 of those would be like 25 of these racks all replaced by this one thing. One Vera Rubin. Okay. So this is this is the compute tray and this is so Vera Rubin super chip. Okay. And this is the compute tray. It's incredibly easy to install. If you decide you wanted to add a special processor, we've added another processor. It's called a context processor because the amount of context that we give AIS are larger and larger. We wanted to read a whole bunch of PDFs before it answer a question. Wanted to read a whole bunch of archive papers, watch a whole bunch of videos. All of that context processing could be added.</p>
</details>

### 数字孪生：用 Omniverse DSX 设计和运营 AI 工厂

Jensen Huang：我们过去设计芯片，然后开始设计系统，设计 AI 超级计算机。现在我们设计整个 AI 工厂。每一次我们向外扩展，整合更多问题来解决，我们都会提出更好的解决方案。我们现在建造整个 AI 工厂。这个 AI 工厂是我们为 Vera Rubin 建造的，我们创造了一项技术，使我们所有的合作伙伴能够以数字方式集成到这个工厂中。让我给你们看看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now we used, as you notice, Nvidia started out by designing chips and then we started to design systems and we designed AI supercomputers. Now we're designing entire AI factories. Every single time we move out and we integrate more of the problem to solve, we come up with better solutions. We now build entire AI factories. This is going this AI factory is what we're building for Vera Rubin and we created a technology that makes it possible for all of our partners to integrate into this factory digitally. Let me show it to you.</p>
</details>

*（视频播放，展示了 NVIDIA Omniverse DSX 平台如何作为构建和运营 AI 工厂的蓝图。通过**数字孪生**（Digital Twin: 指在信息化平台内模拟物理实体、流程或者系统的技术），合作伙伴可以在物理工厂建成前进行设计、模拟和优化，并在建成后作为操作系统来优化能耗，从而显著缩短建设时间并增加收入。）*

Jensen Huang：在 Vera Rubin 作为真实计算机存在之前很久，我们就一直在使用它作为数字孪生计算机。现在，在这些 AI 工厂存在之前很久，我们将使用它，我们将设计它，规划它，优化它，并将其作为数字孪生来运营。所以，所有与我们合作的伙伴，我为你们所有人支持我们感到无比高兴。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">completely completely in digital long long before Vera Rubin exists as a real computer we've been using it as a digital twin computer now long before these AI factories exist we will use it we will design it we'll plan it we'll optimize it and we'll operate it as a digital twin and so all of our partners that are working with us I'm incredibly happy for all of you supporting us</p>
</details>

### 开源模型的重要性：赋能初创企业与研究

Jensen Huang：在过去几年里，开源模型已经变得相当强大，因为它们具备了推理能力。它们也因为多模态而变得强大，并且因为蒸馏技术而极其高效。所有这些能力使得开源模型首次对开发者变得极其有用。它们现在是初创企业的命脉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the last couple years, several things have happened. One, open source models have become quite capable because of reasoning capabilities. It has become quite capable because they're multimodality and they're incredibly efficient because of distillation. So all these different capabilities have become uh has made open source models for the very first time incredibly useful for developers. They are now the lifeblood of startups.</p>
</details>

Jensen Huang：不同行业的初创企业的命脉，因为正如我之前提到的，每个行业都有自己的用例、自己的数据、自己的飞轮。所有这些能力，那些领域专业知识，都需要能够嵌入到模型中。开源使之成为可能。研究人员需要开源，开发者需要开源，世界各地的公司都需要开源。开源模型真的非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Lifeblood of startups in different industries because obviously as I mentioned before each one of the industries have its own use case, it own use cases, it own data, it owns data, its own flywheels. All of that capability, that domain expertise needs to have the ability to embed into a model. Open source makes that possible. Researchers need open-source. Developers need open-source. Companies around the world, we need open source. Open- source models is really, really important.</p>
</details>

Jensen Huang：美国也必须在开源领域领先。我们有很棒的专有模型。我们也需要很棒的开源模型。我们的国家依赖它，我们的初创企业依赖它。所以英伟达正致力于此。我们现在是最大的开源贡献者。我们在排行榜上有 23 个模型。我们涵盖了从语言模型到物理 AI 模型，再到生物学模型等所有这些不同的领域。每个模型背后都有庞大的团队，这也是我们为自己建造超级计算机的原因之一，以使所有这些模型得以创建。我们拥有排名第一的语音模型、排名第一的推理模型、排名第一的物理 AI 模型。下载量真的非常可观。我们致力于此，因为科学需要它，研究人员需要它，初创企业需要它，公司也需要它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The United States has to lead in open source as well. We have amazing proprietary models. We have amazing proprietary models. We need also amazing open source models. Our country depends on it. Our startups depend on it. And so Nvidia is dedicating ourselves to go do that. We are now the largest the largest we lead in open-source contribution. We have 23 models in leaderboards. We have all these different domains from language models the physical AI models. I'm going to talk about robotics models to biolog biology models. Each one of these models has enor enormous teams and that's one of the reasons why we built supercomputers for ourselves to enable all these models to be created. We have number one speech model, number one reasoning model, number one physical AI model. The number of downloads is really really terrific. We are dedicated to this and the reason for that is because science needs it, researchers need it, startups need it and companies need it.</p>
</details>

### 企业级合作：与 CrowdStrike 和 Palantir 共筑 AI 生态

Jensen Huang：AI 将极大地提高生产力。AI 将改变几乎每个行业。但 AI 也会加剧网络安全挑战，即“坏的 AI”。因此，我们需要一个强大的防御者。我想象不出比 CrowdStrike 更好的防御者了。George 在这里。我们正与 CrowdStrike 合作，使网络安全达到光速，创建一个在云端拥有网络安全 AI 智能体，同时在本地或边缘也拥有极其出色的 AI 智能体的系统。这样，无论何时出现威胁，你都能在瞬间检测到它。我们需要速度，需要快速的智能体 AI，超级智能的 AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI will supercharge productivity. AI will transform just about every industry. But AI will also supercharge cyber security challenges, the bad AIs. And so we need an incredible defender. I can't imagine a better defender than Crowd Strike. George George is here. We are partnering with CrowdStrike to make cyber security speed of light to create a system that has cyber security AI agents in the cloud but also incredibly good AI agents on prem or at the edge. This way you whenever there's a threat you are moments away from detecting it. We need speed and we need a fast agentic AI super a super smart AIS.</p>
</details>

Jensen Huang：我还有第二个发布。这是世界上发展最快的企业公司。可能是当今世界上最重要的企业技术栈。Palantir Ontology。有 Palantir 的人在这里吗？我刚才还在和 Alex 聊天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have a second announcement. This is the single fastest enterprise enterprise company in the world. Probably the single most important enterprise stack in the world today. Palunteer ontology. Anybody from Palunteer here? I just I was just talking to Alex earlier.</p>
</details>

Jensen Huang：这是 Palantir Ontology。他们获取信息、数据和人类判断，并将其转化为商业洞察。我们与 Palantir 合作，加速 Palantir 所做的一切，以便我们能够以更大规模和更快速度进行数据处理，无论是过去的结构化数据，还是非结构化数据。为我们的政府、国家安全和全球企业处理这些数据，以光速处理并从中发现洞察。这就是未来的样子。Palantir 将整合英伟达的技术，以便我们能够以光速和非凡的规模进行处理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is Palenter ontology. They take information, they take data, they take human judgment and they turn it into business insight. We work with Palunteer to accelerate everything Palunteer does so that we could do data processing data processing at a much much larger scale and more speed whether it's structured data of the past and of course we'll have structured data, human recorded data, unstructured data and process that data for our government for national security and for enterprises around the world process that data at speed of and to find insight from it. This is what it's going to look like in the future. Palunteer is going to integrate NVIDIA so that we could process at the speed of light and at extraordinary scale.</p>
</details>

### 物理 AI：机器人与自动化的新纪元

Jensen Huang：物理 AI 需要三台计算机。就像训练一个语言模型需要两台计算机一样：一台用于训练、评估，然后是推理。为了实现物理 AI，你需要三台计算机。你需要一台计算机来训练它，这就是 Grace Blackwell NV 72。你需要一台计算机来做我之前用 Omniverse DSX 展示的所有模拟。它基本上是机器人的数字孪生，让机器人学习如何成为一个好机器人，让工厂成为一个数字孪生。那台计算机是第二台计算机，Omniverse 计算机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Physical AI requires three computers. Just as it takes two computers to train a language model. One that's to train it, evaluate it, and then inference it. In order to do it for physical AI, you need three computers. You need the computer to train it. This is GB the Grace Blackwell Envy 72. We need a computer that does all of the simulations that I showed you earlier with Omniverse DSX. It basically is a digital twin for the robot to learn how to be a good robot and for the factory to essentially be a digital twin. That computer is the second computer, the omniverse computer.</p>
</details>

Jensen Huang：一旦我们训练了模型，在数字孪生中模拟了那个 AI——那个数字孪生可以是一个工厂的数字孪生，也可以是一大堆机器人的数字孪生——然后你需要操作那个机器人。这就是机器人计算机。这个可以放进自动驾驶汽车，一半可以放进机器人。这三台计算机都运行 CUDA。它使我们能够推进物理 AI——理解物理世界、理解物理定律、因果关系、持久性的 AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And once we train the model, simulate that AI inside a digital twin and that digital twin could be a digital twin of a factory as long as well as a whole bunch of digital twins of robots. Then you need to operate that robot. And this is the robotic computer. This is this one goes into a self-driving car. Half of it could go into a robot. These three computers all run CUDA. And it makes it possible for us to advance physical AI. AI that understand the physical world, understand laws of physic, causality, permanence, you know, physical AI.</p>
</details>

*（视频播放，展示了富士康在德州休斯顿利用 Omniverse 数字孪生技术设计和运营的先进机器人制造工厂，以及 Figure、Agility、强生和迪士尼等公司在人形机器人、仓储自动化、手术机器人和娱乐机器人方面的进展。）*

Jensen Huang：这就是制造业的未来，工厂的未来。我要感谢我们的合作伙伴富士康，CEO 刘扬伟先生今天也在这里。但所有这些生态系统合作伙伴使我们能够创造机器人化工厂的未来。工厂本质上是一个机器人，它协调其他机器人来制造机器人化的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's the the future of manufacturing, the future of factories. I want to thank our partner Foxcon Young Leu, the CEO, is here, but all of these ecosystem partners make it possible for us to create the future of robotic factories. The factory is essentially a robot that's orchestrating robots to build things that are robotic.</p>
</details>

### 自动驾驶出租车（Robo-taxi）的拐点与 Uber 合作

Jensen Huang：人形机器人仍在开发中。但与此同时，有一种机器人显然正处于一个拐点，它基本上已经到来了，那就是带轮子的机器人。这就是自动驾驶出租车（robo-taxi）。自动驾驶出租车本质上是一个 AI 司机。我们今天宣布的一件事是 NVIDIA Drive Hyperion。这是一件大事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, human robots is still in development. But meanwhile, there's one robot that is clearly at an inflection point and it is basically here and that is a robot on wheels. This is a robo taxi. A robo taxi is essentially an AI chauffeur. Now, one of the things that we're doing today, we're announcing the NVIDIA drive Hyperion. This is a big deal.</p>
</details>

Jensen Huang：我们创造了这个架构，以便世界上每家汽车公司都可以创造出为自动驾驶出租车做好准备的汽车和车辆。带有环绕摄像头、雷达和激光雷达的传感器套件，使我们能够实现最高水平的环绕感知和冗余，以达到最高级别的安全性。Drive Hyperion 现在已被设计到 Lucid、梅赛德斯-奔驰、Stellantis 的车型中，还有许多其他汽车即将推出。一旦你有了一个基本的标准平台，那么自动驾驶系统的开发者就可以将他们的系统运行在这个标准底盘上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We created this architecture so that every car company in the world could create cars, vehicles, could be commercial, could be passenger, could be dedicated to robo taxi. create vehicles that are robo taxi ready. The sensor suite with surround cameras and radars and LAR make it possible for us to achieve the highest level of surround cocoon sensor perception and redundancy necessary for the highest level of safety. Hyperion drive drive Hyperion is now designed into Lucid Mercedes-Benz my friend Ola Ken Canel Kenas um the folks at Stalantis and there are many other cars coming and once you have a basic standard platform then developers of AV systems and there's so many talented ones wave wabby Aurora Momenta Neuro there's so many of them we ride there's so many of them that can then take their AV V system and run it on the standard chassis.</p>
</details>

Jensen Huang：自动驾驶出租车的拐点即将到来。未来，每年行驶的万亿英里，每年生产的一亿辆汽车，全球约五千万辆出租车，都将被一大批自动驾驶出租车所增强。因此，这将是一个非常大的市场。今天，我们宣布与 Uber 建立合作伙伴关系。我们将共同努力，将这些搭载 NVIDIA Drive Hyperion 的汽车连接到一个全球网络中。未来，你将能够叫到其中一辆车，这个生态系统将变得极其丰富。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">robo taxis inflection point is about to get here. And in the future, a trillion miles a year that are driven, a 100 million cars made each year. There's some 50 million taxis around the world. It's going to be augmented by a whole bunch of robo taxis. So, it's going to be a very large market to connect it and deploy it around the world. Today, we're announcing a partnership with Uber. Uber Dar Darra K Dara is going to we're working together to connect these Nvidia drive Hyperion cars into a global network and now in the future you'll you know be able to hail up one of these cars and the ecosystem is going to be incredibly rich</p>
</details>

### 总结：两大平台转型驱动的空前增长

Jensen Huang：这就是我们今天谈论的内容。我们谈论了大量的事情。记住，这一切的核心是两个平台转型：从通用计算到加速计算。NVIDIA CUDA 和那套名为 CUDA X 的库使我们能够涉足几乎所有行业，我们正处于拐点。它现在正像一个飞轮效应一样增长。第二个拐点现在也降临到我们身上。第二个平台转型是 AI，从经典的手写软件到人工智能。两个平台转型同时发生，这就是我们感受到如此惊人增长的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is what we talked about today. We talked about a large large number of things we spoke about. Remember at the core of this is two or two platform transitions from general purpose computing to accelerated computing. NVIDIA CUDA and those suite of libraries called CUDA X has enabled us to to address practically every industry and we're at the inflection point. It is now growing as a virtual cycle would suggest. The second inflection point is now upon us. The second platform transition AI from classical handwritten software to artificial intelligence. Two platform transitioning happening at the same time which is the reason why we're feeling such incredible growth.</p>
</details>

Jensen Huang：我们谈到了量子计算，谈到了开源模型，谈到了与 CrowdStrike 和 Palantir 合作加速其平台的企业应用。我们谈到了机器人技术，一个潜在的最大的消费电子和工业制造新领域。当然，我们还谈到了 6G。英伟达为 6G 提供了新平台，我们称之为 ARC。我们为机器人汽车提供了新平台，我们称之为 Hyperion。我们甚至为工厂提供了新平台：AI 工厂，我们称之为 DSX；以及拥有 AI 的工厂，我们称之为 Mega。现在我们也在美国制造。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Quant quantum computing. We spoke about open models. spoke about we spoke about enterprise with crowd strike and uh Palunteer accelerating their platforms. Uh we spoke about robotics a new large potentially one of the largest consumer electronics and industrial manufacturing sectors and of course we spoke about 6G. Nvidia has new platforms for 6G. We call it ARC. We have a new platform for robotics cars. We call that Hyperion. We have new platforms even for factories. Two types of factories. The AI factory we call that DSX and then factories with AI we call that mega. And so now we're also manufacturing in America.</p>
</details>

Jensen Huang：女士们，先生们，感谢你们今天加入我们，感谢你们允许我把 GTC 带到华盛顿特区。我们希望每年都能这样做。感谢你们所有人的服务，让美国再次伟大。谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ladies and gentlemen, thank you for joining us today and thank you for allowing me to bring Thank Thank you for for allowing us to bring GTC to Washington DC. We're going to do it hopefully every year. And thank you all for your service and making America great again. Thank you.</p>
</details>

### 会后分析：5000 亿美元业务展望引爆市场

Amit：太爱黄仁勋了。“感谢你们让美国再次伟大。” 这无疑是向某个能控制英伟达中国收入的人发出的信号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Got to love Jensen, man. Thank you for making America great again. That was a little bit of a signal to a to a certain someone who controls the the China revenues for Nvidia. That's for sure.</p>
</details>

Tanner：他把政治牌打得太好了。我的意思是，他把 GTC 带到华盛顿就是为了接近特朗普。他做得太棒了。好吧，那里有很多内容要讲，但老实说，一切都归结到关于 Palantir 的评论。不，开个玩笑。对你来说可能是，但那 5000 亿美元的预期业务，在未来六个季度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He plays the political card so well. I mean, he brought it to Washington to be near Trump. You know what I mean? Like it he's just doing it amazingly. Okay. There was a lot of things to cover there, but honestly, it all boils down to the Palunteer comments. No, I'm kidding. uh to you maybe, but the the $500 billion in expected business over the next six quarters.</p>
</details>

Amit：等等，这是确认的吗？他们真的这么说了？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, hold on. Is that confirmed? Did they like legit say that?</p>
</details>

Tanner：是的，是的。你引用了彭博社的报道。黄仁勋亲口说的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. You you quoted Bloomberg on that. Jensen said it, bro.</p>
</details>

Amit：哦，所以彭博社是引用了黄仁勋的话。好的，那这是真的了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, so then Bloomberg was quoting Jensen. Okay, cool. So, that's So, so that's legit.</p>
</details>

Tanner：当股价真正飙升的时候就是那个时候。你看到那根巨大的蜡烛图了吗？当他发表那些评论时，股价就大涨了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's whenever the stock like really popped. You see those two uh or that huge candle? Well, I'm looking on the minutes, but um whenever it really popped, that was his comments.</p>
</details>

Amit：所以你认为华尔街没想到他们会有那么多收入？这基本上是个惊喜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So, do you think the street didn't think they were going to have that much in revenue? That was a surprise basically.</p>
</details>

Tanner：是的。我查了华尔街的预期，他们预计未来六个季度大约是 3800 亿美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. That candle right there is whenever he said it. So, essentially from I I looked on the street or expectations from Wall Street, they're expecting about 380 billion over the next six quarters.</p>
</details>

Amit：我的天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh my.</p>
</details>

Tanner：所以他说了 5000 亿。而且这是他能看到的。可能还远不止这些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, he said 500 billion. and and that that he has insight into. You know, there could be a lot more than that.</p>
</details>

Amit：哇。所以这比华尔街的预期多了 1200 亿，而且还不包括第二大经济体（中国）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wow. F. So that's that's 120 billion more than the street expected without the second largest economy.</p>
</details>

Tanner：这太疯狂了，不是吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Isn't that crazy?</p>
</details>

Amit：这东西要涨到 10 万亿美元了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This shit's going to 10 trillion, bro.</p>
</details>

Tanner：是的，我们现在正在上涨。我的天，我们真的在上涨。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we're we're pumping right now. One. Oh my god. We're really pumping, dude.</p>
</details>