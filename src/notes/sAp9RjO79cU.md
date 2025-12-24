---
area: tech-insights
category: business
companies_orgs:
- Netflix
- Statsig
- Linear
- Airbnb
- Coinbase
- Uber
- OpenAI
- Scale
- Scanline
- Eyline
- Signal Fire
- Meta
- Amazon
- Google
date: '2025-11-12'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Jake Paul
- Mike Tyson
- Chris Rock
products_models:
- Open Connect
- Chaos Monkey
project:
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=sAp9RjO79cU
speaker: The Pragmatic Engineer
status: evergreen
summary: 本文深入探讨了 Netflix 独特的工程师文化。通过与 Netflix 首席技术官 Elizabeth Stone 的对话，我们了解到其惊人的技术规模、从“提案到播放”的全链路自研流程，以及支撑这一切的文化核心：高度自治、自下而上的创新和“高人才密度”理念。文章还详细剖析了
  Netflix 如何应对大规模直播挑战、其著名的“无正式绩效评估”体系和“留任测试”，以及在拥抱 AI 和开源方面的务实策略。
tags:
- challenge
- engineering-culture
- management
- organizational
- talent
title: 深入解析Netflix：探寻其独特的工程师文化与创新引擎
---

### 引言：Netflix 不为人知的技术规模
主持人：Netflix 无需介绍，但其规模仍然能让许多人感到惊讶。但作为一名软件工程师，在一家流媒体公司工作是怎样的体验？我与 Netflix 首席技术官 Elizabeth Stone 坐下来，深入了解了更多细节。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Netflix needs no introduction, but its scale can still surprise many people. But what is it like to work at a streaming company as a software engineer? I sat down with Netflix CTO Elizabeth Stone to get more details.</p>
</details>

在今天的对话中，我们涵盖了 Netflix 独特的工程挑战，包括从三年直播经验中获得的教训；Netflix 的工程原则，以及为什么 Elizabeth 最喜欢的是“渴望学习”；Netflix 如何做到没有绩效评估，以及他们采取了什么替代方案；公司如何使用人工智能工具，以及为什么动漫检测和分析是他们发现的一个绝佳用例，还有更多细节。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In today's conversation, we cover the unique engineering challenges at Netflix, including the learnings from 3 years of Netflix live. Netflix's engineering principles and why Elizabeth's favorite is yearn to learn. How Netflix has no performance reviews and what they do instead. How the company uses AI tools and why anime detection and analysis is a great use case that they found for them. And many more details.</p>
</details>

如果你有兴趣更多地了解作为一名软件工程师在 Netflix 如何工作，以及在他们所处的环境中取得成功需要什么，那么这一集就是为你准备的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you're interested in understanding more about how Netflix works as a software engineer and what it takes to do well in the kind of environment they operate in, then this episode is for you.</p>
</details>

### Netflix 的惊人技术体量
主持人：Elizabeth，欢迎来到播客。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, Elizabeth, welcome to the podcast.</p>
</details>

Elizabeth Stone：谢谢你。感谢你的邀请，也欢迎来到 Netflix。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you. Thank you for having me and welcome to Netflix.</p>
</details>

主持人：很高兴来到 Netflix。我正坐在一把导演椅上，上面印着 Netflix 的标志。所以，身处 Netflix 的办公室，感觉真的很特别。这也提醒我，Netflix 的核心是一家娱乐公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is so nice to be here at Netflix. I'm sitting in a director chair. It has the Netflix on it. So, it's inside the Netflix offices, which truly feels special. And it just reminds me that Netflix is an entertainment company at its core.</p>
</details>

Elizabeth Stone：是的，这里发生了很多奇迹。即使在技术团队，我们也非常认真地对待像视频这样的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. A lot of magic happens here. Even in the tech teams, we take things like video very seriously.</p>
</details>

主持人：很多人当然是从视频产品、电影和剧集中认识 Netflix 的。但在幕后，从工程师的角度来看，这家公司的规模有多大？我该如何理解这个运营的庞大规模？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A lot of people know Netflix, of course, from the video offerings, the films, the movies. Behind the scenes, what is the scale of the company from an engineer's perspective? How can I make sense of how large this operation is?</p>
</details>

Elizabeth Stone：它可能比人们意识到的要大得多。我经常在个人生活中被问到，构建 Netflix 产品到底需要多少工程师？首先，当你考虑到如何让技术运作得如此出色，以至于它基本上是无缝的，在某些方面甚至是理想中不可见的，因为会员只需享受他们的体验，这就需要相当多的工程师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's probably larger than people realize. Very often I'll get questions from people in my personal life saying well how many engineers can it really take to build the Netflix product? So first of all it takes quite a few when you think about how do you make the tech work so well that it's basically seamless in some ways ideally invisible because members just get to enjoy their experience.</p>
</details>

但除此之外，我们技术团队还为工作室制作、广告技术栈构建工具和产品。我们为游戏构建了大量的开发者平台能力和发布能力。想想与商业计划、定价、支付、合作伙伴关系相关的任何事情，这些都由技术团队支持。所以当你把这些加起来，我们每天捕获的事件超过一万亿次，包括消费者互动，以及跨产品和服务发生的、支持决策制定的各种事情。所以，到目前为止，这已经是一个相当全球化的企业了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then we also as a tech team build tools and products for studio productions, our advertising tech stack. We build a lot of the developer platform capabilities and launch capabilities for games. Think about anything related to commerce plans, pricing, payments, partnerships. Those are all things that are supported by the tech team. So when you add that up, we have more than a trillion events that we're capturing every day between consumer interactions, things that are happening across products and services that support decision making. So it's quite a global enterprise at this point.</p>
</details>

### 独特的工程挑战：从“提案到播放”的全链路自研
主持人：你提到的一些事情，我觉得在其他大公司也算比较典型。例如，构建支付系统、广告系统等等。但你提到了一些我在其他任何公司都没听说过的事情，比如为你们的制作工作室构建定制软件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some of the things that you mention I feel are kind of somewhat typical at large other large companies. For example, building payments, building ads, building some of the things. You mentioned things that I haven't heard in any other company which is for example building custom software or your production studio.</p>
</details>

Elizabeth Stone：是的，能够将技术带入娱乐业，这在很大程度上是我们超能力的一部分。我们是世界上最大的工作室之一，在思考我们可以为这些制作项目独特地解决哪些问题方面，我们具有优势。很好的例子包括我们的媒体制作套件，它将过去相当陈旧、缓慢且昂贵的媒体文件在全球创意团队间的传输方式，真正地现代化了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it's actually very much part of our superpower that we've been able to bring technology to entertainment. We're one of the biggest studios in the world and we have an advantage in thinking about what are some of the problems we could uniquely solve for those productions. So, good examples would be things like our media production suite, which took something that was a fairly antiquated, slow, and expensive way for media files to travel across creative teams around the world and really modernized what that looks like.</p>
</details>

所以，如果你有一个在欧洲某地拍摄的制作项目，而洛杉矶有人需要审查每日的片段和素材，他们能够让这些媒体文件在全球范围内传输，提供笔记或输入，然后这些笔记再传回，第二天就能为新一天的制作做好准备。像媒体制作套件这样的东西，或者其他允许我们监控某些制作项目进展的工具，都是 Netflix 非常新颖的创造。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that if you have a production that's shooting somewhere in Europe and you have someone sitting in Los Angeles who's going to review the daily clips and footage, they're able to have those media files travel around the world, provide notes or input on that, have those notes travel back and be ready for another day of production just the next day. So things like that media production suite or other tools that allow us to monitor how are we progressing on some of the productions is something that's very novel from Netflix.</p>
</details>

我们还通过 Scanline 和 Eyline 拥有强大的影响力，这是几年前收购的一家视觉效果工作室，它在影响我们如何进行数据捕捉、视觉效果以及思考如何为制作带来活力的策略方面，进行了非常前沿的研究和技术开发，这些仅靠标准摄像技术是难以实现的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We also have a big presence through Scanline and Eyline, which is a visual effects studio that was an acquisition a few years ago that does really cutting edge research and technology for things that affect how we do data capture, visual effects, different ways to think about strategies that bring life to productions that wouldn't be easy just based on standard camera technology.</p>
</details>

主持人：在这些工程工作背后，有哪些挑战呢？因为我听到你说电影文件之类的，这让我联想到海量数据，我猜延迟可能也是有趣的挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In terms of the engineering work behind that, what are some of the challenges here? Because what I'm hearing is you're saying you know like movie files etc. To me what the rings bell is like it'll be like large amounts of data probably I assume latency might be interesting challenges.</p>
</details>

Elizabeth Stone：当你想到在任何特定时刻都有成百上千个制作项目在进行时，其规模是令人难以置信的。在所有这些制作项目中，你都有媒体文件，这些文件本身就特别大、复杂且难以移动。所以要考虑规模，考虑存储、计算和数据传输的成本。在某些情况下，延迟取决于用例。有些情况是捕捉媒体供第二天审查，但对于其他事情，比如直播制作，媒体传输必须是瞬时的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's unbelievable scale when you think about hundreds or thousands of productions that are in progress at any given moment of time. So across all those productions you have media files which are also especially large complex and difficult to move. So think about scale, think about cost of both storage, compute and travel of that data. Latency in some cases, you know, it depends on the use case. For some cases, it's capturing media that is going to be reviewed in a way that can be the next day, but for other things, we've got media traveling for things like live productions that has to be essentially instantaneous.</p>
</details>

我想说的另一个关于该领域独特挑战的事情是，我们努力达到的质量水平。当你思考如何创造非常高质量的图像、视频时，无论是内容本身还是在服务上推广该内容，都会遇到很多工程挑战来满足那种高标准。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other thing I would say about some of the unique challenges in that space is the level of quality that we're trying to bring. So when you think about some of the challenges to think about how do you create very high quality images, videos, whether that's the content itself or the promotion of that content on the service. There's a lot of engineering challenges that come to meeting that type of bar.</p>
</details>

另一件外部熟知的事情，我相信你听说过，就是 **Open Connect**（开放连接：Netflix 自建的内容分发网络或 CDN），这对于 Netflix 来说是极其独特的。这是我们十多年前做出的一个重大赌注，即建立自己的内容分发网络，其规模常常让人们感到惊讶。我们在全球有 6000 个地点，覆盖超过 175 个国家，这实际上使我们能够为电影、电视、游戏在本地放置文件，这样无论会员在哪里点击播放，都能获得非常低的延迟和非常高的质量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other thing that's familiar externally which I'm sure you've heard about is open connector or content delivery network. Which is extremely unique that Netflix has that. It was a big bet that we made more than 10 years ago to build our own content delivery network and the scale of that often surprises people. So 6,000 locations around the world, more than 175 countries and that actually allows us to place local files for film, TV, games that you're going to play so that there can be very low latency and very high quality for members no matter where they click play.</p>
</details>

主持人：基本上，这些是位于 6000 个不同地点、城市内部的服务器位置。这就像你们的边缘网络，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Basically these are server locations at 6,000 different location inside cities. whatnot where you have it's like it's like your edge network, right?</p>
</details>

Elizabeth Stone：没错。我们与互联网服务提供商集成，以便当有人在手机、电视或笔记本电脑上点击播放时，内容能够通过这“最后一英里”到达会员或消费者手中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's right. And we integrate with internet service providers to actually get the content to when someone clicks play on their phone, on their TV, on their laptop, that actually gets the content through that last mile to the member or the consumer.</p>
</details>

主持人：那么在 Netflix 内部，你们就能接触到这些细节的某种程度，我猜其他地方的大多数工程师不会有这种机会。他们会使用一个 CDN 提供商，而那会是一个黑匣子。但你们是在构建这个东西，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then when you're inside Netflix, you get to be exposed to some level of this detail, which I guess most engineers at other places wouldn't be. You would use a CDM provider and it will be a black box. But you're building this thing, right?</p>
</details>

Elizabeth Stone：我们正在构建这个东西。当我们考虑新的内容类型时，这已经是一个令人难以置信的领先优势。当我们开始涉足直播、游戏，特别是云游戏或流媒体游戏时，当我们思考我们电影和电视产品的广度时，Open Connect 一直是一个巨大的战略优势，我们正在扩展它以能够交付不同类型的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we're building this thing. And it's been an incredible head start as we think about new content types. So, when we started to go into live into games, especially cloud or streaming games, as we think about just the breadth of our film and TV offering, Open Connect has been a huge strategic advantage and we're extending that to be able to deliver different types of content.</p>
</details>

另一件独特的事情是，Open Connect 作为一个内容分发或边缘网络，是内容移动的一个非常长的集成生命周期的终点。我提到过，在工作室制作中，媒体制作套件用于传输文件以供审查质量，确保我们与创意愿景保持一致。一旦一个作品准备好发布，它会流经其他管道，这些管道会考虑我们是否有宣传素材？我们是否准备好向正确的受众提供出色的推荐？我们如何编码这些文件，以便它们真正准备好通过 Open Connect 作为内容分发网络进行传输？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other thing that's unique is open connect as a content delivery or or edge network is sort of the end of a very long integrated life cycle that content moves. So I mentioned that media production suite that's on a studio production files are being transferred for review quality, making sure that we're aligning with the creative vision. Once a title is ready to launch that flows through other pipelines that would think about do we have the promotional assets? Are we ready to give great recommendations to the right audiences? How do we encode those files so that they're actually ready to be transmitted through open connect as the content delivery network?</p>
</details>

当你思考这个过程时，我们有时会轻松地称之为 **Pitch-to-Play**（从提案到播放：指一个影视内容从最初的创意提案，经过开发、制作、推广，直到最终交付给用户播放的整个端到端流程），在这个生命周期的每一步都有工程元素的参与，这是不寻常的，因为在许多其他公司，他们没有像 Netflix 这样随着时间的推移自己构建出端到端的管道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When you think about that, sometimes we lightly call it pitchtoplay, there's an element of engineering all the way along that life cycle, which is unusual because at many other companies, they haven't built that endto-end pipeline themselves as Netflix has over time.</p>
</details>

主持人：什么是“从提案到播放”？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what is pitch to play?</p>
</details>

Elizabeth Stone：想象一下，从一个作品被提案的那一刻起，内容团队的某个人批准说“是的，我们要开发和制作这个作品”。有数据科学团队，有工程团队帮助支持这些节目制作的决策。然后有技术团队帮助支持该内容的创作、推广、推荐，并最终交付。所以技术基本上支撑着整个生命周期。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So think about from the moment a title is pitched that someone in the content team greenlights yes we're going to develop and produce this title. There's data science teams, there's engineering teams that helps to support those decisions on programming. Then there's tech teams that help support the creation of that content, the promotion of that content, the recommendations and ultimately the delivery of that. So tech basically underlies that whole life cycle.</p>
</details>

主持人：哇。这听起来像是更多的工作流程。通常当我在工程领域听到工作流程或管道时，我们会想到 CI/CD 管道，我想我们对此非常熟悉。你知道，你有代码审查、测试运行，然后它就继续进行。但我理解的是，这要大得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wow. So it's this sounds like a lot more workflows. Usually when I hear of of the work of pipeline, you know, in engineering, we would think of a CI/CD pipeline and I think we're very familiar with that. You know, you have your code reviews, test run, and it kind of goes on. But what I understand is just a lot bigger.</p>
</details>

Elizabeth Stone：想象一下 CI/CD 管道乘以数千倍，因为它实际上是遵循一个完整的、为会员带来鲜活内容的周期。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Imagine that CI/CD pipeline times thousands because it's actually going to follow an entire bring content to life for members cycle.</p>
</details>

### 文化核心：自下而上的创新与高度自治
主持人：看到这个更长的管道，我的第一联想是它听起来会很僵化，但 Netflix 的行动当然非常迅速。从一个软件工程师的角度，从一个工程团队的角度来看，完成一个项目是什么样的？这些项目通常是如何完成的？是基于某种遵循时间表的模式，还是更具弹性？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now my first association seeing this this longer pipeline is it sounds like it would be rigid but of course Netflix is moving really fast. What does it look like from a software engineers perspective from from an engineering team's perspective getting a project done? How are these these typically done? Is is it based on some sort of following you know the schedule or is it a lot more elastic?</p>
</details>

Elizabeth Stone：哦，这可能就是 Netflix 文化独特之处的体现了。我们很多工程系统、产品和工具的构建方式，都是由个体贡献者思考如何构建这些系统来高度驱动的。所以创新真正是由团队内部驱动，而不是自上而下的。在我们如何构建事物方面，有大量的自主权和本地判断力，这使我们能够建立起这种端到端的视角，来思考如何以我们认为能提供最佳质量、最高效率的方式交付内容，并允许我们在出现新需求时玩转这些拼图的各个部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh this is probably where the the uniqueness of Netflix's culture comes into play. So a lot of the way that our engineering systems, products and tools were built was highly driven by individual contributors thinking about how to build those systems. So innovation is really driven from within the teams rather than top down. There's a lot of autonomy and local judgment in how we build things that has allowed us to build this endto-end view of how to deliver content in a way that we think delivers the best quality most efficiently and allows us to play with the puzzle pieces of that as we have new needs that come up.</p>
</details>

就像我提到的，我们为视频点播、电影和电视准备了很多这样的东西。当我们进入直播领域时，工程师们需要重新思考，鉴于直播的要求，我们将如何改变我们对内容交付方式的看法。他们能够从我们已经构建的基础上开始，但也有很多自己的决策权，来决定如何演进我们所有的系统和产品，以能够交付新的内容类型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like I mentioned, we had many of those things in place for video on demand film and TV. When we went into live, engineers needed to rethink how are we going to have to change how we think about how we're delivering content given the requirements of live. They were able to start with what we've already built, but also have a lot of their own decision-making on the how to evolve all of our systems and products to be able to deliver new content types.</p>
</details>

所以，随着时间的推移，Netflix 的构建方式一直非常由团队内部的工程师驱动，而不是某些自上而下的、总体的“让我为你画出架构，现在我们朝那个方向构建”的方式。这既有优势，也有我们随着时间推移必须演进的地方，因为随着公司变得更大，规模成为更大的挑战，我们希望确保我们构建事物的方式能够支持这一点。所以它不是静态的，用你的话说，那种弹性，正是让我们能够为今天的 Netflix 所需，而不是十年前所需进行工程设计的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So over time the way Netflix has been built has been very driven by engineers within the teams rather than some you know top down overarching let me draw the architecture for you and now let's build it in that direction which has both advantages but also things that we've had to evolve towards over time because as the company becomes much bigger scale becomes more of a challenge we want to make sure that we're building things in a way that support that so it's not like it's static and that elasticity to use your word is something that has allowed us to actually engineer for what Netflix requires today versus what it required 10 years ago.</p>
</details>

### 极限挑战：从直播拳王争霸赛中学到的经验
主持人：我们能具体谈谈直播吗？因为直播是去年的一大发布。我记得其中一个大型活动是杰克·保罗和迈克·泰森的拳击赛，那是一个巨大的事件。你能给我们一些关于那个项目是如何开始的内幕吗？工程团队是如何参与的？比如，是一个小团队吗？还是多个团队？我猜肯定有多个团队一起工作。你们把这个项目推向发布的过程是怎样的？是过度计划的吗？还是就是“YOLO”（You Only Live Once，意为“人生只有一次，大胆去做”）？还是介于两者之间？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Can we talk about specifically live because Live was a big launch last year. I remember one of the big the the boxing match between Jake Paul Mike Tyson was a huge event. Can you give us a little bit of insight of of how that project started? How engineering teams got involved? Like like was it a small team? Was it multiple teams? I'm assuming there must have been multiple teams working together. And like what was your process of of getting this to to launch again? Like was it like overly planned out? Was it was it just yolo? Something in between?</p>
</details>

Elizabeth Stone：是的，YOLO。（笑）不完全是 YOLO。我们的第一个直播节目是克里斯·洛克的特别节目，我相信是在 2023 年 3 月。那是我们第一次为 Netflix 会员带来直播，并开启了一段非常紧张的时期。如果从那时算到保罗·泰森的比赛，那是 2024 年 11 月。所以你可以把这看作是从我们第一次直播尝试到有史以来最大规模流媒体事件的大约 18 个月，保罗·泰森的比赛最终就是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, yolo. [laughter] Uh not quite yolo. Our first live title was a Chris Rock special. I believe in March 2023. That was our first time bringing live to Netflix members and started what was a very intense period of if I take through to that Paul Tyson match that was November 2024. So you think about that as basically 18 months from our first ever outing on live to the largest streamed event ever which is what Paul Tyson ended up being.</p>
</details>

这个项目的实现充满了紧迫感、大量的拼搏精神，以及像我提到的，工程师们的努力。通常我们会设定一个目标，说：“好的，我们已经安排了保罗·泰森的比赛。”最初它被安排在 2024 年 7 月。由于泰森的健康问题，它被重新安排到 2024 年 11 月，这给了我们几个月的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The way that that came to life was with urgency, a lot of scrainess, and like I mentioned, engineers making it happen. So, typically we would set a goal saying, "Okay, so we've got Paul Tyson scheduled, originally it was scheduled for July 2024. It was rescheduled because of Tyson's health to November 2024, which gave us a few more months.</p>
</details>

但想象一下，来自 Open Connect、编码、我们的内容制作和推广团队、我们的发现团队的团队们，都在思考谁是合适的人选来投入并帮助实现这个项目。但他们是自我组织的。他们制定自己的路线图。他们思考谁需要负责什么事情。我们需要确保哪些系统实际上足够有弹性来应对直播。这是一个端到端都非常紧张的时间表。更不用说，我们从保罗·泰森的比赛中学到了很多，因为它是一个如此大规模的事件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But picture teams from open connect in coding, our content production and promotion teams, our discovery teams thinking who are the right people to lean in here and help bring this to life. But they self-organize. They develop their own road maps. They think about who needs to be on point for what things. What are some of the systems that we need to make sure are actually resilient enough for live. It was an incredibly tight timeline end to end. Not to mention that we had a lot of learnings from Paul Tyson because it was such a large event.</p>
</details>

主持人：是的，我经常说它是世界上最大的，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I I've often world's largest, right?</p>
</details>

Elizabeth Stone：6500 万并发流。看着那个数字不断攀升。我想那是我们有史以来注册人数最多的一天。所以，我们看着注册人数那天飙升。然后看着，我想当我们在前几场垫场赛时，就已经超出了我们对这场比赛规模的预期。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">65 million concurrent streams. Watching that tick up. I think one of our biggest ever days of signups. So, we were watching the signups, you know, go through the roof that day. Then watching I think by the time we were in some of the first couple of undercard fights, we'd already exceeded our expectations for how big the fight would be.</p>
</details>

在洛斯加托斯这里的作战室里，那种能量是 palpable（可感知的），你能感觉到兴奋、紧张，以及工程师们非常实时的解决问题，因为我们从未见过，没有人见过那样的规模。所以你就像在实时地搞清楚如何实时交付一些东西。我从未为团队如此骄傲过，他们搞清楚了我们需要拉动哪些杠杆来保持尽可能稳定。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The energy in the launch room here in Loscatos was like palpable that you could feel, you know, excitement, nervousness, like very real time problem solving by engineers because we'd never seen no one had ever seen scale like that. So you get like your real time figuring out how to deliver something in real time. I've never been prouder of the team for figuring out like what are the levers we need to pull to keep this as stable as possible.</p>
</details>

带着 2024 年 11 月的这些经验教训，我们大约有五周时间为圣诞节的两场美国 NFL 橄榄球比赛做准备，那里的标准非常高，要为会员和球迷提供良好的服务。所以团队立即从保罗·泰森的比赛中吸取教训，说，我们如何建立更强的弹性？如果我们最终在某些市场带宽受限，我们如何考虑引导内容？我们如何通过使用一些质量杠杆来真正优化体验？最终，那些 NFL 比赛完美无瑕。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With those learnings in November 2024, we had about five weeks to be ready for two American NFL football games on Christmas Day where the bar is very high to deliver well for members and for fans. And so the team immediately took the learnings from Paul Tyson to say, how do we build greater resilience? How do we think about how we're going to direct content if we end up bandwidth constrained in some markets? How can we really optimize by using some of our quality levers for what that experience is going to be? And those NFL games ended up being flawless.</p>
</details>

从克里斯·洛克，到《爱情是盲目的》的失败，再到保罗·泰森在那种规模下的许多教训，再到 NFL，现在还有每周的 WWE，更不用说许多其他大型活动。这一切都是由一线团队驱动的，他们不懈地问：“我们如何把这件事做好？我们需要解决什么问题？”以及“快速学习”的责任感——这不意味着我们不会有失败，但当我们失败时，要快速学习、迭代，并提供越来越好的服务。这正是 Netflix 文化之美所在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That from Chris Rock to a Love is blind failure to Paul Tyson with lots of learnings at that scale to NFL and now weekly WWE, not to mention lots of other big events. That was all driven by teams on the ground being relentless in saying, "How do we do this well? What are the problems we need to solve?" and the accountability for learn fast doesn't mean we're not going to have failures, but when we have failures, learn fast, iterate, and deliver ever better. That's really where the beauty of the Netflix culture comes into play.</p>
</details>

### 作战室的真实情景
主持人：你提到了作战室，但我想大多数人没有这种经历。这是一个直播活动，当然，你可以调整一些东西。你能向我解释一下作战室是什么样的吗？我猜肯定有一堆仪表盘，显示各种指标，对吧？有点像那样吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You mentioned the the control room, but I think most people have not had this experience. It's a live event, of course, you can you can tweak things. Can you explain to to me what was the control room like? I assume it must have been a bunch of dashboards on all sorts of metrics, right? Was it a little bit like that?</p>
</details>

Elizabeth Stone：是的。甚至我们的仪表盘都是全新的。数据科学和工程团队共同构建了一套仪表盘，让我们能够看到一些核心的体验质量指标。比如渲染时间、应用启动时间、重新缓冲率。在保罗·泰森的比赛中，我们开始看到重新缓冲率上升。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So, even our dashboards were brand new. The data science and engineering team collectively put together a set of dashboards that would give us visibility into some core quality of experience metrics. So things like time to render, app start timing, rebuffer rates. It was the rebuffers that we started to see amp up during Paul Tyson.</p>
</details>

现场大概有 100 人。我当时坐在一个房间里，大概有三四十个工程师和数据科学家。我们带着笔记本电脑和临时搭建的屏幕坐在那里。每个人都用网线连接互联网，这样我们就不会因为 Wi-Fi 而冒任何风险。我们有 VPN 备用，以防万一。我们有一个戴着耳机的发布指挥官，与制作卡车里的人通话，但这一切都是新的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There were probably a hundred people on site. I was sitting in a room with maybe 30 or 40 both engineers and data scientists. We had our laptops and makeshift screens sitting there. Everyone was hardlined into internet so that we weren't, you know, risking anything with the Wi-Fi. We had VPN backups if anything was to go wrong. We had a launch commander with a headset dialed in talking to people in the production truck, but it was new.</p>
</details>

所以，它不是流程化的，不是完美的。不像我想象中很多直播制作通常有的那种高级作战室。我们看着指标，有些东西开始闪红灯，引起你的注意。我们会创建临时的 Google Meet 房间，让小组可以进行分类处理。我们有负责成为知情负责人或决策者的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it it wasn't streamlined. It wasn't perfect. It wasn't like the fancy launch rooms I imagine a lot of live productions typically have. And so we're watching metrics, you know, some things start flashing in red, you know, causing you to draw attention to it. We would create makeshift Google Meet rooms, so small groups of people could triage. We had people who were on the hook for being the informed captains or decision makers.</p>
</details>

所以，如果我们 Open Connect 出了问题，如果我们播放出了问题，如果我们发现出了问题——人们真的能找到这个节目吗？我们在发布计划中都有相应的人员。想象一下，那份文件最终可能有四五十页的“如果-那么”陈述。如果这件事发生，那么怎么办？你知道，这对我们来说是新的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if we have an issue with open connect, if we have an issue with playback, if we have an issue with discovery, are people actually able to find a title? There were people that we had in basically the launch plan. Imagine I think the document ended up being 40 or 50 pages of if then statements. If this thing happens, then what? You know, it was new for us.</p>
</details>

当我回想起保罗·泰森比赛时我们的处境，我跟人开玩笑说，我感觉那一晚我折寿了十年，因为压力太大了，而且我几乎没有什么可以亲手操作键盘来帮忙的事情。我在那里是为了支持团队，信任团队做出的决定。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When I think about where we were for Paul Tyson, I would I I joke with people. I feel like I lost 10 years of my life in that one night because it was so stressful and there's so little like there's no hands on keyboard thing I can do to help. I'm there to support the team to trust the team in making decisions.</p>
</details>

现在再看我们如何做 NFL 比赛、卡内洛·克劳福德的比赛或 WWE，它在很多方面都更加成熟了，比如我们构建的弹性、指标和仪表盘，以及我们对正在发生的事情的可见性。当我们刚开始时，那是非常依赖人力的，这也是很多教训的来源。但我对团队说，你有多大机会能在一个成熟的公司工作，却能像这样从零开始构建一些东西，思考所有可能出错的事情，以及如何为它们做好准备，然后在事情发生时保持非常冷静和沉着？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When I look now at how we're doing NFL games or the Canelo Crawford fight or a WWE, it's much more sophisticated in the sense of the resiliency we've built, the metrics and dashboards, the visibility we have into what's happening. That was very human-driven when we were first coming out of the gate, which was a lot of where the learnings came from. But I say to the team, how often do you get to work at a mature company, but build something truly from scratch like this and think about all the things that might go wrong and how to be prepared for them and then stay very calm and cool under pressure if something happens.</p>
</details>

### 事后复盘：无指责文化与工程师的责任感
主持人：你提到团队做了大量的准备，四五十页的“如果-那么”陈述，这听起来比我见过的大多数发布都要详细得多。即使如此，还是出现了问题。你能告诉我团队是如何处理后续事宜的吗？无指责的事后复盘很常见，但我更好奇这个过程有多正式，还是更多由人们主动站出来驱动？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you mentioned that the team had done a bunch of preparation. you mentioned 40 or 50 pages if then else like which which sounds way more detailed than I've seen most launches be you usually have a launch plan but again it was a complex launch so you prepared even so there were there were hiccups both with love is blind both with the Jake Paul match can you tell me how the team handled the the aftermath uh again it's pretty common to have blameless postmortems but I'm I'm more curious on how formal this process is how less formal driven by by people stepping up or again. Do you have like more rigid process around this or or it's just getting together and and people, you know, do go and fix things?</p>
</details>

Elizabeth Stone：就像你说的，进行无指责的事后复盘或回顾并不罕见。所以我们当然有这个。谈论从某件事中学到的东西，比过分关注谁做错了什么事要有趣得多。我们从中实际上得不到太多。这不是一个僵化的过程。它非常有机地发生，由那些接近工作本身并对进行反思（包括哪些做得好，哪些我们可以做得更好）感到巨大责任感的人领导。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like you said, it's not uncommon to have a blameless post-mortem or retro. So, we we have that for sure. It's much more interesting to talk about the learnings from something than to overly focus on who did what thing wrong. There's not much that we actually gain from that. It's not a rigid process. It happens very organically and it's led by the people who are close to the work itself and feel tons of accountability for doing reflections on both what went well and what can we do better.</p>
</details>

以保罗·泰森的比赛为例，事后几天情绪相当复杂。我们庆祝有史以来最大的直播流媒体事件，比我们所能希望的要大得多。我们庆祝我们工作的公司敢于做如此大的尝试。我们庆祝当并发流达到 2000 万、3000 万、4000 万时我们没有崩溃。如果有人对我说，你将有 6500 万并发流，我可能会说，“这不会有好结果的。”然而，是的，我们遇到了问题。我们总是希望提供出色的会员体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I take all Tyson as a good example, it was a pretty complicated set of emotions and couple days afterwards. You know, we're celebrating the biggest ever live stream event. Way bigger than we ever could have hoped for. We're celebrating that we work at a company that takes such a big swing. We're celebrating that we didn't collapse when we got to 20 million, 30 million, 40 million concurrent streams. If someone said to me, you're going to have 65 million concurrent streams, I would have said, "This is not going to go well." And yet, yes, we have hiccups. We always want to deliver a great member experience.</p>
</details>

我想说，我第二天早上醒来——其实我整晚没睡，都在想下一步该怎么做，我们只有五周时间就要迎来 NFL 比赛。我醒来时看到了一系列备忘录，团队已经写下了：这是我们观察到的，这是我们认为可以改进的，这是我们应该立即优先处理的一些事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would like to say I woke up the next morning. I was awake the whole night thinking about what do we do next and what are like what you know we only have five weeks till NFL. I woke up to a set of memos where the team had already written down. Here's what we observed. Here's what we think we can improve. Here's some of the things we should immediately prioritize.</p>
</details>

其中一些是关于当我们遇到拥堵时如何引导流量？我们的算法在那个时刻是如何考虑引导流量的，而如果我们最终拥堵，我们希望它们怎么做？并思考当我们处于那种压力下时，有哪些方法可以优雅地回退或降级。在那次事件中，有些事情是我们不亲眼看到系统实时发生什么就无法创造出来的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So some of that was how do we direct traffic when we get congested? What were our algorithms doing to think about directing traffic in that moment versus what do we want them to do if we end up congested and thinking about what are ways that we can gracefully fall back or degrade when we're under that type of duress. There was nothing in that event that we could have created before seeing what happens to the systems live.</p>
</details>

所以，你知道，我醒来时想着所有这些“我们必须做这个，我们必须做那个”，结果它已经在一份文件中了。团队对“我们如何做得更好”感到如此大的责任感，以至于我们真的不需要一个流程来说“现在我们应该做一个事后复盘，现在我们应该对此进行反思”。团队非常直接地拥有这一点。我们的文化备忘录中有关于“异常负责”的语言，这真正体现在团队的人才上。它来自于高人才密度，来自于像对待成年人一样对待员工，他们获得了很多决策的自主权，然后他们为结果负责。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so just knowing, you know, I woke up thinking all my like, you know, we're going to have to do this, we're going to have to do that. It was already there in a document. the team feels such accountability to how do we do this better that we don't really require a process to say now we should do a postmortem now we should develop reflections on this the team owns that very directly we have language in our culture memo about being unusually responsible that's really the talent on the team it comes with high talent density it comes with treating people like adults where they get a lot of autonomy in making decisions and then they own the outcomes.</p>
</details>

### 人才理念：高人才密度与独特的绩效管理
主持人：在很多公司，你作为一个新工程师加入，会问：“我需要遵循哪些流程？”因为很多公司有强制性的代码审查，如果你发布一个功能，你可能需要使用功能开关。在移动应用上，代码审查可能需要某些人的签字。CI/CD 总是需要通过，你不能覆盖它。在 Netflix 工程团队中，这些事情有多少是在全局层面规定好的，有多少是由团队自己决定，或者仅仅基于工程团队或工程师本人的判断？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When it comes to engineering culture at a lot of companies, you know, you go into a company as a new engineer and you ask around saying, "Hey, what are the processes I need to follow?" Because at a lot of companies, there's a mandatory code review. If you launch a feature, you might need to use a feature flag. Let's say on the mobile app, you you need to on the code review might need to have certain signoffs from people. So, there's a bunch CI/CD always needs to pass. You cannot override it. In the Netflix engineering team, how much of these things are kind of put down at a global level? lever needs to follow it. Teams can decide and do decide versus just based on the judgment of the the engineering team or or the engineer themselves.</p>
</details>

Elizabeth Stone：很多都留给了工程团队和工程师自己。所以即使对于新的或职业生涯早期的员工，我们已经演进出一种方式。你知道，即使回溯到多年前 Netflix 引入 **Chaos Monkey**（混沌猴子：Netflix 开发的一种工具，通过在生产环境中故意随机关闭服务实例来测试系统的弹性和容错能力）作为概念时，个体工程师有责任理解他们的系统何时以及如何会崩溃，以及他们将如何保持弹性、检测并快速恢复，这只是文化的核心部分，也是我们持续维护的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, a lot is left to the engineering team and engineer themselves. So even for new or early career talent, one of the things we've evolved towards, so you know, even if I think going back however many years when Netflix introduced Chaos Monkey as a as a concept, the idea of an individual engineer having responsibility to understand how and when their system will break and how they're going to be resilient, detect that and recover quickly was just a core part of the culture and something that we continued to maintain.</p>
</details>

在引入直播之前，我们有很多方法可以在视频点播方面承担明智的风险，因为我们有多年的经验，了解当出现问题时，我们将如何修复它。这留给了团队去思考他们需要多大程度的测试和弹性。当出现问题时，我们有出色的待命团队和支持团队。当我们引入直播时，门槛就不同了，因为你必须实时观看。不存在“Netflix 暂时下线，我们处理一下问题”这样的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Pre-live, there were a lot of ways to take smart risks with video on demand because we had many years under our belt of understanding when something breaks, how are we going to fix that? And it was left to teams to think about the extent of testing and resilience that they needed to have. and great on call teams and support teams for when something does go wrong. When we introduced live, there's a different threshold because you have to watch it live. There's no such thing as, you know, Netflix is going to be down temporarily while we address something where we were taking a smart risk.</p>
</details>

当我们开始引入我们需要有的护栏来安全地做这件事时，比如为处于直播关键路径上的零级或一级应用引入更高的测试标准，以确保你的系统为直播活动中可能承受的压力做好了准备。我们会分享这些指导方针。它来自我们的中央工程团队，它给了人们一个机会，因为他们能够说，如果我通过了这些指导方针，如果我做了这些测试，我就不需要在直播活动期间处于静默期。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">as we started to introduce what are the guardrails we need to have to do this safely, it was things like introducing especially for tier zero or tier one applications that were in the critical path for live a higher threshold for what's the testing that you're doing. to make sure that your system is ready for the duress it may be under in a live event. We will share those guidelines. It comes from our central engineering team and it gives people an opportunity to have less process because they're able to say if I pass these guidelines if I've done this testing I don't need to be in a quiet period for example during a live event.</p>
</details>

我们已经做了端到端的测试，所以我们非常深入地了解那些系统依赖关系，并且我们能够为“万一出问题”做好准备，但这并不是一个非常结构化的过程，比如代码审查，或者你必须勾选这些框，或者某种代码实际部署的门控功能。我们在年底假期期间确实有静默期。我想这很普遍。我们会有一些围绕直播活动的规则，以确保我们不冒不必要的风险，但我们不断地寻找方法，比如如何减少静默期？如何将大量的判断力留给团队，然后他们对他们服务的任何问题负责？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">or we've done endto-end testing so we know those system dependencies very deeply and we're able to prepare for the whatifs something goes wrong but that's not a very structured process like a code review or you must check these boxes or some type of gating function for code being actually deployed. We do have quiet periods during the end of year holidays. I think that's pretty common. We'll have some rules of the road around live events to make sure we don't take unnecessary risk, but we are constantly finding ways to like how do we reduce the quiet periods? How do we leave a lot of judgment to the teams and then they're accountable for anything that goes wrong with their service?</p>
</details>

### 无绩效评估的文化
主持人：当我是经理时，有一件事确实让我分心，每六个月一次，你猜是什么？绩效评估季。我们称之为“Perf”，那是我生命中的一个月，尤其是在年底，甚至更长。你如何处理这个必要之恶，或者说必要的绩效管理过程？因为我理解它非常不同，并且与此相关的是，非常公开的“留任测试”（Keeper Test），Netflix 也在网站上分享了。这在其中扮演了什么角色？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, when I was a manager, one thing that did distract me, every six months on the dock, guess what? Performance review season. And as we just called it Perf, it was one month of my life. Uh, or especially at the end of the year, even longer. How do you go about this necessary evil of of or just necessary process of performance management because I understand it's very different and related to this uh it's very public publicly uh you know like known the keeper test which you which Netflix shares on on the website as well. How does this play into it if it does at all?</p>
</details>

Elizabeth Stone：我们没有正式的绩效评估，这可能是第一件不寻常的事情。所以，当你想到其他公司花时间讨论每个人或分配一个评级时，我们不那样做，但我们确实仔细考虑反馈、表现、期望，所有这些都会影响到**留任测试**（Keeper Test: Netflix 的一种管理理念，管理者会反思“如果团队中的某个成员明天说要辞职，我是否会努力挽留他/她？”如果答案是否定的，那么这个人可能就不适合继续留任），我很高兴能详细谈谈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we don't have formal performance reviews, which is probably the first unusual thing. So, when you think about other companies spending that time to talk through each person or assign a rating for whether they meet exceed, you know, I've seen that at other companies, too. Uh we don't do it that way, but we do carefully think about feedback, performance, expectations, all the things that would feed into keeper test, which I'm happy to talk through.</p>
</details>

我们在 Netflix 的做法是，首先尝试实现持续、及时、坦诚的反馈。说起来容易做起来难。这需要信任，需要深厚的关系，才能在当下给某人非常坦诚的反馈。这可能是“这是你做得很好的地方”，不总是否定或建设性的。并且能够接收那种反馈。如果我们很好地践行 Netflix 文化，那一年的每一天都应该是熟悉和舒适的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the way we approach it at Netflix is first trying to get to something that looks like continuous, timely, candid feedback. Easier said than done. It requires trust. It requires deep relationships to be able to give someone in the moment very candid feedback. It could be here's the thing you did great. It's not always a negative or a constructive thing. and to be able to receive that type of feedback. If we're living the Netflix culture well, that's something that would be familiar and comfortable every day of the year.</p>
</details>

所以，你不必等待某个绩效评估或反馈周期，才能听到你的表现如何，或能够向他人提供那种输入。我们确实有一个年度 360 度评估流程作为安全网，我会向与我共事的一群人请求反馈。我也会收到很多人的请求，但那是你与个人就反馈进行直接对话。我会和我的经理一起审查，说：“这是我听到的一些主题，这是我将要努力的一些事情。”所以有机会思考我的表现如何？人们如何看待我们的工作关系和我的贡献？但它不是以评估的形式组织的，而是以帮助人们改进的反馈为背景组织的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you're not having to wait for a certain performance review or feedback cycle in order to hear how you're doing or be able to provide that type of input to others. We do as kind of a safety net have an annual 360 process where I would request feedback from a a bunch of people I work with. I get requests from a bunch of people, but that's something that you're having a direct conversation with the individual about feedback. It's something I would review with my manager to say, "Here are some of the themes that I heard, some of the things I'm going to work on." So, there's an opportunity to think about what is my performance? How are people perceiving our working relationship and my contributions? But it's not structured as an evaluation. It's structured in the context of feedback that helps people improve.</p>
</details>

然后，每年一次，我们分开进行薪酬审查，这在某种程度上反映了我的影响力水平、我获得了哪些技能、我对公司的贡献。所以你自然会谈到表现，作为思考某人个人市场顶薪的一部分，这是我们的薪酬理念。所以它作为对话的一部分出现，经理们会真正为他们团队中的每个人思考，我如何看待反映这个人对 Netflix 的价值和在市场中的价值的薪酬。所以这带有表现的意味，但不是绩效评估。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then separately once a year we go through both compensation review which is a reflection in ways of what's my level of impact what skills have I gained what are my contributions to the company. So you naturally talk about performance as part of thinking about someone's personal top of market which is our compensation philosophy. So it comes up as a conversation there where managers really think about for each person on their team how do I think about the compensation that reflects this person's value to Netflix and value in the market. So that has a performance flavor to it but is not a performance review.</p>
</details>

然后一年几次，我们评估晋升。所以在那种情况下，对于一群可能要从五级晋升到六级的人，我们会收集反馈来帮助我们做出那个决定。所以，如果我纵观反馈、360 周期中的持续反馈、薪酬审查和晋升评估，我们得到了相当多的接触点，人们可以听到他们的表现如何，但这感觉比其他公司的绩效评估结构更具建设性和可操作性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then a couple years times a year we evaluate promotions. So in that case for a group of people who might be up for promotion from you know level five to a level six we would collect feedback that helps us make that decision. So if I look across the feedback continuous in the 360 cycle compensation review and promotion evaluations, we get quite a few touch points where people are hearing how they're doing, but it feels more constructive and actionable than the performance review structure that other companies have.</p>
</details>

### 拥抱AI与开源：务实的生产力革命
主持人：当然，现在非常令人兴奋的事情之一是人工智能和人工智能工具，既用它们来构建，也作为工程师使用。在你的经验中，在 Netflix 内部，工程团队是如何使用这些人工智能工具来完成他们自己的工作的？他们是如何试验这些工具的？什么有效？什么可能不太适合？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So one of the very exciting things these days of course is AI and AI tools both building with them but also using as engineers. In your experience inside Netflix, how are the engineering teams using these AI tools for their own work? How are they experimenting with them? What is working? What is maybe not a great fit?</p>
</details>

Elizabeth Stone：是的，这是我们现在关注的一个巨大领域，但我们非常有意识和务实地看待这些工具在哪些地方真正有帮助。我们的希望是，我们能找到那些我们真正能为业务带来更高质量、更大影响的地方，而不是那些质量较低或仅仅是关于降低成本的事情。那对我们来说真的不感兴趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep. It's a huge area of focus for us right now, but with a lot of intention and pragmatism of where these tools are actually helpful versus they're not. The hope is that we identify those places where we actually get higher quality, more impact for the business versus things that are lower quality or just about cost reduction. That's really not interesting to us.</p>
</details>

所以，对于工程师来说，我们正在试验一系列编码助手。我们的方法是为团队提供许多不同的工具，这样他们就能够探索、试验、决定哪些工具满足他们的需求，开始学习什么对某些用例或某些应用更有效。我们正在努力创造空间，让人们真正有时间去做这件事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for engineers we are experimenting with a set of coding assistants. The way we approach it is to provide a lot of different tools to the teams so they are able to explore experiment decide which tools meet their needs start to learn what works better for some use cases or some applications than others. We're trying to create space so that people actually have the time to do that.</p>
</details>

我们正在做的事情包括启用这些工具。我们有几周时间让人们专注于尝试一个新项目，试验一些新东西，这给了人们一点空间。然后我们从整个团队收集大量的反馈，关于哪些工具真正有用，我们想把哪些工具升级为“铺好的路”，我们在哪些领域真正看到了最大的影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're doing things like both enabling the tools. We have some weeks where we let people just be focused on let me try a new project. Let me experiment with something new that gives people a little bit of space. And then we're collecting tons of feedback from across the team around which tools are actually useful, which do we want to graduate to paved paths, where are the areas where we actually see the most impact.</p>
</details>

主持人：你提到已经收到了很多反馈。你是否看到在某些领域，这些工具，特别是人工智能编码助手、代理工具，可能会更有帮助？也许是新项目、迁移、原型设计或其他一些领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You said you're getting a lot of feedback already. You know, people, teams, organizations are sharing what's working, what's not. Are you seeing some areas where where these tools specifically AI coding assistance agentic tools are maybe a little bit more more helpful? May may that be green field things, migrations, prototyping or some other areas.</p>
</details>

Elizabeth Stone：你很好地列举了其中几个。也许从最后一个开始，原型设计快了很多，实际上，这是一个当你想到跨工程师、数据科学家、产品经理、设计师的跨职能团队时，我们希望能够非常快地启动事情的地方。我有一个想法，让我们把这个想法可视化，让我们快速地拼凑一套代码来帮助实现它。这不一定是我们会产品化或认为是生产就绪的代码，但这没关系，因为它帮助团队推进、创新和快速地研讨想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You named a couple of them very well. So maybe starting at the end there prototyping is a lot faster and actually that's a place where when you think about the cross functional teams across engineers, data scientists, product managers, designers, we're hoping that we can actually bootstrap things very quickly. I have an idea. Let's visualize that idea. Let's like quickly throw together a set of code that would help to bring this to life. That's not necessarily something we would productize or consider production ready code, but that's okay because it helps teams advance and innovate and kind of workshop ideas very quickly.</p>
</details>

还有一些事情是关于检测问题。所以异常检测、响应、能够对问题进行深入调查。我们发现 GenAI 工具在那个领域有很大的前景，这有助于我们的一些弹性和作为工程组织的通用最佳实践和健康状况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there's also things around detecting issues. So anomaly detection, response, being able to do deep dives of issues. We're finding that there's a lot of promise for Genaii tools in that space which helps us with some of our resilience and just general best practices and health as an engineering organization.</p>
</details>

如果我们能够在这些领域使用 GenAI 工具——原型设计、文档、迁移、检测和响应——它为更具创新性的工作留下了大量时间。所以，我们如何思考我们正在构建的架构、系统和产品，以交付业务影响？这样，希望我们能为工程师带来更多影响，因为他们能够真正利用一些工具或代理体验，来最小化在一些影响较小的活动上花费的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we're able to use Genai tools in those spaces, prototyping, documentation, migrations, detection and response, it leaves a lot of time for the more innovative work. So, how do we think about architectures and systems and products that we're building to deliver business impact? So then hopefully we can actually get more impact for engineers because they're able to actually leverage some of the tools or agentic experiences to minimize the time spent on some of the less impactful activities.</p>
</details>

### 对开源社区的巨大投入
主持人：我最近了解到的关于 Netflix 最令人惊讶的事情之一是你们在开源方面的投入有多大。这可能听起来有点傻，因为我们知道 Chaos Monkey 非常有名。但最近一份报告研究了所有公司，以及工程师从事开源工作的比例。Netflix 再次处于最高水平。该出版物估计，大约五分之一的工程师从事开源项目。果然，我去了你们的开源页面，开源项目真是太多了。你能告诉我为什么、如何以及从何时起 Netflix 开始做这么多开源，以及为什么我们不知道这件事？这对我来说是新闻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the most surprising things I've learned about Netflix just very recently is how much you invest in open source. This might sound a bit silly because we know Chaos Monkey is is very famous. In fact, everyone that's Netflix is known known for that one. But again, in a recent report, it looked at all the the companies and what percentage of engineers end up working on open source. And Netflix again was at the very the highest bar. This publication estimated that about one in five engineers work on open source projects. Sure enough, I go to your open source page. It's just so so much open source. Can you tell me why and how and since when is Netflix doing so much open source and why do we not know about this? This was new to me.</p>
</details>

Elizabeth Stone：哦是的，也许我们应该更多地谈论它。所以这是一个开始的好机会。你知道，我们之前谈到了工程文化和它的感觉，你知道，人才密度，这通常来自于为更广泛的技术社区做出贡献的热情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh yeah, perhaps we should be talking about it more. So this is a good opportunity to start. You know, we were talking earlier about the engineering culture and the sense of it, you know, talent density, which often comes for a passion to contribute to the broader technical community.</p>
</details>

所以，Netflix 的人非常关心他们工作的质量和更广泛地推进创新。对于某些事情，它是 Netflix 特定的创新，我们保持该知识产权作为竞争优势很重要，但对于许多事情，它有助于实际推动更广泛的行业创新，这随着时间的推移也使 Netflix 受益。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the people at Netflix care deeply about the quality of their work and advancing innovation more generally. For some things it it's Netflix specific innovation and it's important we keep that IP as a competitive advantage but for many it's something that helps to actually drive broader industry innovation which also benefits Netflix over time.</p>
</details>

如果我能给你一个例子，在我们内部和外部都非常参与的地方，那就是在编码领域，推动了大量的创新，对，视频编码。我们现在已经因此赢得了，我相信，九项艾美奖。我过去总是把艾美奖和电视、红地毯联系在一起，但我们现在已经赢得了许多技术和工程艾美奖，特别是在视频编码工作上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if I can give you one example among the list of places where we've been very involved both internally and externally it's in the encoding space and driving a ton of innovation right video encoding. We've now won, I believe, nine Emmys for these contributions. I always used to associate Emmys, you know, just with, you know, the TV and the, you know, the red carpet, but we've won a lot of technical and engineering Emmys at this point, specifically on video encoding work.</p>
</details>

所以，举个例子，这极大地有助于我们编码和交付作品的能力的质量和效率。所以 Netflix 通过改进该领域的技术获得了直接的好处。但我们也是开放媒体联盟的创始成员，这是一个推动编码技术开放进步的行业社区。如果我们能够激发那项工作，Netflix 实际上也受益，因为整个行业水平提升了，我们考虑随着时间的推移与不同技术的集成，每个人都帮助推高标准。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, as one example, that helps to contribute incredibly to quality and efficiency of our ability to encode our titles and deliver them. So Netflix gets an immediate benefit by improving the technology in that space. But we are also a founding member of the open media alliance which is an industry community that pushes for open advancement of encoding technology. If we're able to inspire that work, Netflix actually also benefits because the whole industry uplevels and we think about integrations with different technologies that we might do over time with everyone helping to push the bar.</p>
</details>

我喜欢引用的一个统计数据是，当你现在看 Netflix 内容的目录时，想想目录比我们刚开始做原创时大了多少。我相信我们现在需要的带宽减少了 60%，比特率减少了 60%，而质量相同或更好，目录却大得多。这来自于我们的媒体编码创新。拥有一个整个行业都在推动这个，对任何在娱乐领域的人都有好处，并且绝对对消费者和我们的会员有好处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A statistic I like to cite is when you look at the catalog now of Netflix content, think about how much bigger the catalog is than when we were first starting with originals. I believe we now require 60% less bandwidth, 60% fewer bit rates for same or better quality with a much bigger catalog. That comes from our media encoding innovation. and having a whole industry that's pushing that benefits anyone who's in the entertainment space and definitely benefits consumers and our members.</p>
</details>

### 给新人的建议：好奇心是成功的关键
主持人：作为结束语，Netflix 听起来是一个非常不同和特别的地方，即使在所有大型科技公司或创新公司中也是如此。对于在 Netflix 开始职业生涯的新软件工程师，你有什么建议？他们如何在这种环境中取得成功，如何成长以达到像这样的地方的期望？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So as as closing, Netflix sounds like a very different and and special place compared even even across all of the the larger tech companies or even the innovative companies. What would your advice be for a new start software engineer starting at Netflix? How can they succeed in this environment and how can they grow up to to the expectations at a place like this?</p>
</details>

Elizabeth Stone：好奇心。好奇心。好奇心。当人们问我，Netflix 的哪个价值观最能与我产生共鸣，我最喜欢在团队中看到的是好奇心。提出问题，质疑我们是否在以正确的方式解决正确的问题。仅仅因为你是 Netflix 的新人或职业生涯早期，并不意味着你不会成为创新的源泉。如果说有什么不同的话，那就是伟大的想法来自任何地方，而这始于保持好奇、思想开放、试验、探索、承担明智的风险。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Curiosity. Curiosity. Curiosity. to when people ask me like what's the Netflix value that most resonates with me and I most love to see across the team it's curiosity asking questions questioning whether we're solving the right problems in the right way just because you're new to Netflix or earlier in the career doesn't mean you're not going to be the source of innovation if anything it's great ideas come from everywhere and that starts with just being curious open-minded experiment explore take smart risks.</p>
</details>

试着减少你脑海中那个害怕探索新事物或承担风险的声音。我认为当人们加入 Netflix 并以那种好奇的心态对待它时，他们就已经为成功做好了准备。我还会说，依靠他人。我们在 Netflix 有很棒的人才，他们都非常乐意帮助其他人成功。所以不要羞于找一个导师，问别人，为什么这个东西是这样工作的？你能给我更多关于这个的历史吗？你能帮我理解我们正在解决哪个业务问题以及为什么吗？这是好奇心的另一种表现，但它也关乎更广泛的社区，并在 Netflix 真正利用这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Try to reduce that that kind of voice in your head that is fearful of exploring something new or taking that risk. And I think when people join Netflix and they approach it with that type of curious mindset, they're already set up for success. I would also say lean on other people. So, we have great talent at Netflix and they are all more than happy to help other people be successful. So don't shy away from finding a mentor, asking somebody, why does this work this way? Can you give me more of the history of this? Can you help me understand which business problem we're solving and why? It's another flavor of curiosity, but it's also about the broader community and really leveraging that at Netflix.</p>
</details>

主持人：嗯，Elizabeth，谢谢你。这次谈话非常非常有趣，我学到了很多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, Elizabeth, thank you. This was very, very interesting and I've learned a lot.</p>
</details>

Elizabeth Stone：太好了。很高兴能来到这里，也很高兴这次对话能成功。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. Really happy to be here and I was happy it worked out to have this conversation.</p>
</details>