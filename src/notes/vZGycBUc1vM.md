---
area: tech-insights
category: career
companies_orgs:
- Amazon
- Statsig
- Meta
- Google
- Microsoft
- Reddit
- Asana
- Ramp
- Vercel
- Uber
- Twitch
- JetBrains
- Booking.com
date: '2025-07-09'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- So Good They Can't Ignore You
- Designing Data-Intensive Applications
people:
- Jeff Bezos
- Cal Newport
products_models:
- Kindle
- Prime Video
- AWS
- S3
- DynamoDB
- VS Code
project:
- us-analysis
- personal-growth-lab
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=vZGycBUc1vM
speaker: The Pragmatic Engineer
status: evergreen
summary: 在这篇深度访谈中，曾在亚马逊工作长达17年的前首席工程师 Steve Huynh 揭示了在科技巨头工作的真实面貌。他详细阐述了亚马逊如何应对极致规模带来的工程挑战，例如“棕断”问题和从单体架构到微服务的艰难转型。他还深入探讨了从高级工程师晋升到首席工程师为何异常困难，并分享了亚马逊独特的首席工程师社区文化、原则性思维以及深刻的写作文化。对于任何想了解顶级科技公司内部运作和职业发展的工程师来说，这都是一份宝贵的参考。
tags:
- career
- engineering-culture
- monolith-vs-microservice
- system
- thinking
title: 前亚马逊首席工程师深度访谈：揭秘晋升之难、规模之痛与独特文化
---

### 在亚马逊的十七年职业生涯

我在亚马逊工作了17年半，去年刚刚离职。所以，我基本上已经有一年时间在做其他事情了。人们总是谈论我在那里的漫长任期，但我觉得在那段时间里，我大概换了五六份工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I was there for 17 and a half years. And I just quit last year. So, I've been basically a year doing other things now. You know, people always talk about my long tenure there, but I feel like I've had like five or six jobs over that time period.</p>
</details>

我最初是从一个叫做“书中搜索”（Search Inside the Book）的项目开始的。我参与了第一代 Kindle 的发布，还参与了 Prime Video 前身项目的开发。我职业生涯的早期阶段基本都在那里度过，然后最后五年，我则是在支付部门工作。我还参与过 Amazon Local，这是我们当时的一个团购项目，那时这类业务看起来前景广阔。我还做过 Amazon Restaurants 和 Amazon Tickets，后者是一个 Ticketmaster 的克隆产品。我职业生涯的最后五年，是在 Prime Video 负责体育赛事直播。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I started off on a project called Search Inside the Book. I worked on the first Kindle launch. I worked on the precursor to Prime Video. I sort of like worked there at the beginning part of my career and then I sort of ended my career there for the last five years of my time there. I worked in payments. I worked in Amazon local which was sort of our group on project when that type of business was looking like it was going to take over. I worked on Amazon restaurants. I worked on Amazon tickets which was all ticket master clone and then my last 5 years was working on live sports streaming on Prime Video.</p>
</details>

### 亚马逊的内部流动文化：“自由流动”政策

我在亚马逊内部换过很多团队。这部分取决于公司的政策，也取决于你个人职业生涯所处的阶段。我最初是一名支持工程师，更偏向于运维工作。后来我想成为一名软件开发人员。进入公司本身就很难，但一旦进去了，我就设定了这个目标并成功转换了角色。当我转换角色时，自然也就到了换团队的时候。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, it depends a little bit on like corporate policy and then where you are with your career. I started as a support engineer. So sort of like operationally focused person and then I was basically like I want to be a software developer and so I think getting into the company was pretty difficult but once I was there sort of set that target and and changed roles and when I changed the role it was a natural time to move to another team.</p>
</details>

亚马逊内部有一些相关政策。过去，你必须在一个团队待满至少一年才能申请调动。而且，如果你想调动，高级经理或总监等上级可以阻止你的申请。这最终导致一些工作环境恶劣的团队，其年度人员流失率甚至超过100%，因为流失率是以年为单位计算的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's some also some internal policy. So basically at Amazon, it used to be that you had to stay on a team for at least a year before you transferred. And if you wanted to transfer, like a senior manager or director or whoever up top could block your transfer. And what that ended up meaning was that like certain teams that were just terrible to work on, those teams actually had more than 100% attrition over the course of a year because you measured attrition with a year-long time unit.</p>
</details>

大约在10到13年前，亚马逊在公司层面做了一件非常明智的事。他们推出了“自由流动”（freedom of movement）政策。现在，副总裁或总监不能再阻止员工调动了。他们最多只能要求你多留一个月，以便完成交接计划。基本上，只要你没有处在**PIP**（Performance Improvement Plan: 绩效改进计划）中，你就可以自由流动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Amazon did something actually smart at the corporate level. They basically said okay well you have freedom of movement now. This sort of happened I don't know probably like 13 years ago 10 13 years ago. And so they said you have freedom of movement now. A VP or a director can't block you. They can say okay well we need another month to get like a transition plan going. But essentially you have freedom of movement as long as you're not on a performance improvement plan.</p>
</details>

这项政策催生了一个内部人才市场：一些团队成为了高质量工程人才的来源地，而另一些团队则成为了人才的“黑洞”。当然，这也导致了一些团队的管理层不希望员工知道这项政策，他们想让员工觉得他们是被“困住”的。有些经理不想让他们最优秀的人才离开。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">which meant that certain teams were sources of high-quality engineering talent and certain teams were syncs of high-quality engineering talent and it sort of created an internal marketplace for for different roles. Now what that ended up meaning was that certain teams they basically didn't want you to know what the policy was. They wanted you to to sort of think that you were kind of stuck. But you know despite the that sort of like local gamesmanship that was going on. Like basically some managers didn't want their best people to leave, right? Let's just say it how it is.</p>
</details>

但最终，我认为这是一个伟大的策略，因为它把压力放在了管理层身上。如果一个团队难以招到人，那问题出在管理上，而不应该由员工来承担。回到我自己的职业历程，在像亚马逊这样的大公司里，有太多很棒的事情在发生，我决定跟随我的好奇心去探索。当然，有时也会遇到重组或者业务线被裁撤的情况。但总的来说，我认为“自由流动”是亚马逊做过的最明智的决定之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But ultimately the I think it's a it's a great strategy because it it put the like if there was a team that was difficult to staff, the problem was on the management. It wasn't something that had to be, you know, bared by or born from the the employee themselves. And so you know getting back to my own career journey at a very large company like Amazon there is so many awesome things that are going on and you know I decided to just kind of go where my curiosity took me. Now there were some times where there were reorgs or you know a line of business got got spun down. Um but ultimately you know I think freedom of movement was one of the smartest things that that Amazon did.</p>
</details>

这是人们对大公司不太了解的一点。并非所有公司都像亚马逊一样，而且每家公司都在变化。如今，在亚马逊内部跨团队调动可能也会变得更难。这取决于你所在的办公地点，如果你在一个只有两个团队的卫星办公室，你最多也只能换到另一个团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think this is something that people don't really appreciate about some large companies. You know, not all companies are like Amazon and every company changes, right? Like today, I'm assuming it will be hard to move as many teams within Amazon. Depending on where you are, you know, if you're in a if you're in a satellite office where there's two teams, you can probably move on to the other team at max.</p>
</details>

但我认为，这正是大公司被低估的优势之一：一旦你进入了公司，从内部获得另一个团队的工作机会几乎总是更容易的。尤其是因为你可以直接和他们交流。这就像我在和 Reddit 移动团队交流时问他们如何成为平台工程师，他们说大多数招聘都是内部完成的。那些人在黑客马拉松上帮助过我们，经常过来提交代码，我们都认识他们。这是一个低风险的招聘。记住这一点很有好处：当你想到亚马逊、Meta 或微软这样的大公司时，其实它们是由许多小团队组成的。一旦你身在其中，只要策略得当，你实际上拥有进入这些团队的优先权。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I think this is one of the underrated things of large companies like once you are in, it's almost always easier to get that job at another team from the inside. Yes. Especially because you can talk to them. You know, this is I I talked with the Reddit mobile team and I asked like, "Oh, how how can you get a become a platform engineer on the mobile team?" And they said like, "Well, you know, most of our hires have been internal. They just helped us out on hackathons. They come around, they commit stuff. We know them. It's a it's a lowrisk hire." I think it's just nice to remember that when you think of like a big company like Amazon or Meta or or Microsoft, it's just so many small teams and once you're in, you actually have almost priority access to those teams if you play your cards right.</p>
</details>

绝对是这样。你可能仍需要为那个团队面试，但风险比外部面试低得多。在所有条件都相同的情况下，你是愿意选择一个了解公司文化、熟悉内部软件开发流程的内部员工，还是一个同样优秀但需要重新适应一切的外部人员？我认为最终你都会选择内部员工。这基本上是出于商业理性的考虑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely. And you know, you might interview for that team, but it's it's such lower stakes than an external interview. And you know, just all things being equal, would you rather take somebody that's, you know, internal and and knows the culture. They know how software is developed within a particular context or somebody that's just as good but doesn't, you know, hasn't been onboarded. And I think ultimately you're you're going to pick the person that's internal, all things being equal. Yeah. It's just kind of like business rationality for the most part.</p>
</details>

### 亚马逊面临的极致规模挑战

在亚马逊这样的大公司，人们总是在外部谈论其规模，但很难真正想象。你在那里亲眼见证的规模是怎样的？能否举一些你在那里遇到的、在小创业公司根本不可能遇到的棘手工程挑战？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So one thing about Amazon and about large companies like Amazon is people talk about externally about the scale and it's hard to imagine but can you give us a sense of the scale that you've seen or like some tough engineering challenges that you worked on that would have been just really hard to work at a smaller startup?</p>
</details>

是的，我认为规模是你去其他大多数地方都无法体验到的。我给你举几个例子。Prime 是一个几乎人人都是会员的“专属俱乐部”。在美国，它的配送服务可能是最受欢迎的，但在全球范围内，Prime Video 是人们使用订阅服务最多的功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think that's the thing that you just you will not see at most other places is the the scale of of things. I'll I'll give you a couple of examples. So, you know, Prime is the exclusive club that everybody is a member of. And, you know, in in the US, the the shipping benefit is is probably, you know, the most popular, but globally, Prime Video is, you know, it's the thing that people use the most with their with their subscription.</p>
</details>

想象一下我们的**面向服务的架构**（Service-Oriented Architecture, SOA: 一种软件设计方法，其中服务是基本构建块）。当你打开 Prime Video 应用时，网关页面是所有请求的入口。它就像 Netflix 一样，是一个无限滚动的轮播界面。这个登录页面需要高度个性化，并且背后是大量的**微服务**（Microservices: 一种将应用程序构建为一套小型、独立服务的架构风格）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so if you think about, you know, our serviceoriented architecture and, you know, just loading up the app, the the the gateway page is the place where all of our requests come in, right? And so it's just it's just like Netflix. It's this infinite scroll of of carousels. So the gateway page is is it the Amazon Prime landing page? Yeah, it's the landing page there. And so you're like, okay, cool. If let's say 90 95 99% of all of your requests are coming from that page and that page needs to be personalized you know and you have a serviceoriented architecture with a bunch of microservices.</p>
</details>

对该页面的一个请求，会转化为对下游不同服务的数百个请求，甚至可能更多，多到难以计数。亚马逊零售网站也是同样的情况。当一个请求会像蜘蛛网一样扩散成数量级更多的内部请求时，你就会看到这些微服务面临的巨大规模。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um one request to that page turns into let's just say hundreds of downstream requests to different services. It might even be more than that. It's it's actually kind of hard to count. And so, you know, same thing for the the retail website as well. And so if you have one request sort of spidering out into, you know, two orders of magnitude more requests internally, you start to see like really really large scale for these microservices.</p>
</details>

一个微服务前端会有一个反向代理或负载均衡器，你会毫不夸张地谈论每秒数万甚至数十万的请求涌入你的服务。比如，为了渲染一个视频推荐，系统可能会向不同的服务发起大量请求。所以，当你在亚马逊内部运营一个较小的服务时，你突然就要面对每秒1万到10万请求的巨大压力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a microser will have like a reverse proxy or a load balancer in front of it and you are sort of unironically talking about things like tens of thousands of requests per second or hundreds of thousands of requests per second coming into your service. So, so like the services that are like behind you know like there's the prime there's all the things loading they're spidering out like making you know to to render that one recommendation for example for I don't know the video whatever you would like it will make a lot of requests to different different services and then so when you're operating a a smaller service inside of Amazon suddenly you're going to be hit with what you just said 10 10k 100k requests per second that kind of scale.</p>
</details>

### “棕断”：大规模系统中的隐形杀手

在这种规模下，你可能只是想修改一下某个商品详情的缓存配置，结果却可能导致一个关键服务发生“棕断”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">exactly and you will essentially be doing yourself you're you're just like Okay, cool. Um, let's change a caching configuration on some item details. And, uh, turns out you've just browned out like a like a critical service, right?</p>
</details>

抱歉，我用了一些术语。**棕断**（Brownout: 指系统部分功能失效或性能严重下降，但未完全宕机）是可用性问题的一种。如果你向一个服务发送大量请求，可能会导致它完全宕机，这就是“黑断”（Blackout），你发出的请求会立即失败，无法建立连接。但还有一种故障叫“棕断”，服务本身是可达的，甚至能接受连接，但它会超时、返回部分或错误的结果，或者在等待很长时间后，只对一部分请求返回500错误。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">what does brown down mean? Oh, sorry. I'm using some jargon. So, we just if you want to talk about availability, um, if you suppose you areing a a service or sending a lot of requests over to them, you can you know, you can you can just take them down. That would be like a blackout. Um and so like you send a request, oh you can't establish a connection, it immediately comes back. But there's a there's a type of outage where they brown out. So basically they're reachable. They might accept a connection. But you know um they'll essentially time out or or they might return partial results or or bad results or the only thing that they do return is a you know 500 for some percentage or proportion of after we waited a bunch of time for that.</p>
</details>

现在，我们开始讨论在面临这种自我“DDoS攻击”时的可用性和弹性问题。除了规模之外，让事情变得极其复杂的是你的依赖链。你的服务是某个流程的依赖，它可能依赖于AWS，也可能依赖于其他服务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And so, you know, now we we start talking about like availability and resilience in in the face of like all of these do of this DDoSing that you're doing to yourself. And so the the thing on top of scale that is going to really complicate things is your dependency chain, right? And so, you know, your service is a dependency of some of the process that's going on. It depends on, you know, maybe AWS, it may depend on another service.</p>
</details>

假设一个主要依赖项发生故障，然后恢复了，你如何确保在它恢复的过程中不会立即用大量请求再次压垮它？“棕断”是我们面临的一个长期问题。可能某个基础服务（如S3或DynamoDB）出现延迟增加，引发连锁反应，导致某个中间层服务发生“棕断”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know, how do you make sure that if um you know, suppose there's a failure for a primary dependency and that dependency comes back up, how do you make sure you don't just like inundate it with a bunch of requests as it's trying to recover? And so you have all of these sort of like odd dynamics that occur. I used a brownout as something that is a perennial problem that we have, right? where there's maybe a dependency on a base service like S3 or Dynamo DB or whatever it is. There might you know be some increased latency that may cause a chain reaction of a dependency going down and then one of these sort of middle tier services would brown out.</p>
</details>

作为服务负责人，你需要思考：在这种情况下我们该怎么办？如何知道它们正在发生“棕断”？面对依赖项故障我们该怎么做？最关键的是，如果故障服务恢复了，我们如何确保给它足够的喘息空间，而不是在我们尝试恢复时立即再次把它搞垮？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what are like you know you're an owner of the the services um for your team and so then it's like okay um what do we do in those situations? How do we know that they're browning out? um what do we do in the face of uh you know a dependency outage and then critically if there is an outage and then the the service comes back up how do we make sure that we give it enough space so that it can breathe so that you know you know as they're trying to recover from some sort of outage we don't just take them down immediately again.</p>
</details>

对于其他一些大型科技公司，你可能可以做到“尽力而为”，比如暂时宕机，提供降级服务。但这在亚马逊是行不通的。如果你在处理购物网站，那就涉及交易。如果你在做 Prime Video 的体育赛事直播，那就意味着用户可能看不到一场正在进行的足球赛。当我们恢复时，比赛可能已经结束了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. It and and I think for certain other large tech companies, you know, you can do best effort, right? which is basically like, hey, we're we're temporarily down, but you know, you can you can uh you know, you have some sort of degraded service. That makes sense. But if you're on say a website that does purchases, now we're talking about transactions. Or if you're in the Prime Video like live video streaming use case, now we're talking about a football game that you're unable to see. Um and then when we recover, the game might be over. Yeah. Right. And so it's it's much higher stakes.</p>
</details>

所以，挑战在于规模与交易语义的结合。这种挑战，除非你为支付处理商之类的公司工作，否则很难遇到。这种真实世界的压力意味着你正在亏损。这也让我开始理解为什么初创公司喜欢从某些特定公司招聘。他们通常喜欢从其他初创公司招聘，因为环境相似。但他们尤其喜欢从亚马逊招聘。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I I think the the scale with transactional semantics, right? Like that's actually the challenge that you're not going to see unless you sort of like work for a payment processor or something. Yeah. Yeah. I guess that that real world pressure challenge like you are losing money. That's it. This I'm starting to understand why like I have noticed that startups love to hire from certain companies. They usually startups love to hire from other startups because it's similar environment. from large tech companies, it's a bit of a maybe. I'm generalizing. Obviously, this is will not be true 100% of the time, but for example, hiring from Google, a lot of startups are not as happy because the people coming from Google are used to having this amazing team around them, internal tools, but most startups love hiring from Amazon. And I'm starting to get a sense of, you know, why this actually is.</p>
</details>

是的，这正是亚马逊文化的一部分。你被聘为软件开发人员，然后他们会给你一个寻呼机。在你写的软件发布后，你不能把它交给测试团队，然后再扔给SRE团队。你必须对自己写的软件负责到底。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think that's part of the the culture. You know, you you get uh you get hired as a a software developer and they hand you a pager. And before, you know, phone apps and and things like that, it was like this pager from the 90s. And it's it's really great because you have to you have to like operate the software that you write if you if you actually you cannot write the software, hand it over to the testing team, and then throw it over to the S sur team after you're done. Like you own that that piece of software.</p>
</details>

### 延迟与收入的权衡：从单体架构到微服务的演进

亚马逊发现，零售网站的延迟越低，收入就越高。他们开始测量并发现，页面加载速度越快，转化率越高，这种线性关系似乎没有尽头。既然如此，拥有AWS等顶级技术的亚马逊，为什么不把网站延迟降到10毫秒甚至1毫秒来最大化收入呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One interesting thing that we talked about yesterday over over dinner with with Casey Moratori is you said something interesting on how Amazon measured how on their retail website I think it was retail maybe Amazon Prime the lower the latency of something loading like a page loading like a purchase or a purchase button loading the more revenue they got and they started to measure and there was a linear linear correction as the faster it was the more people converted and it seemed it had no end and the question Casey asked is like okay if this is the case what would stop Amazon because you have the best technologies in the world. You you have AWS, you know, you can build whatever you want to get the latency of the website down to let's say like 10 milliseconds or or even 1 millisecond because if this goes up, you would maximize revenue. So can you tell me about like how how that thing like this measurement actually happened and you know why is Amazon's website still may maybe not the fastest in in the the world even though it would generate so many more billions, right?</p>
</details>

很久以前，有人利用我们对日志和遥测的投入，开始追踪总收入与详情页、网关页和结账页延迟之间的关系。他们注意到，速度越快，赚的钱就越多。这是一个非常明确的相关性，甚至可以说是因果关系。因此，公司内部非常关注延迟问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Um well there are a couple questions embedded in there but we'll we'll start with the you know the latency to to gross revenue measurement. So essentially somebody way back when um you know because we invest in logs and telemetry started tracking how much gross revenue we would make based off of like the latency for detail pages based off latency of gateway based off of latency of of the checkout pages. And they noticed this dynamic where it's like if you're faster you just make more money. It's a it's a pretty clear correlation. Um I think you would even go as far as to say as causation. And so there was this really big focus on on latencies.</p>
</details>

我喜欢这种优化性能的思路：不是说“让我们把延迟降低50%”，而是直接问“为什么我们不能做到1毫秒或10毫秒？” 从概念上最快的方式出发。在孤立系统中，概念上最快的方式是**单体架构**（Monolith: 一种将所有功能模块打包在单个程序中的软件设计模式），这也是亚马逊最初的构建方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I love the idea that you know if you're going to optimize for performance saying like why can't we be at 1 millisecond or why can't we be at 10 milliseconds and start from there instead of sort of saying like hey let's try to decrease latencies by 50% or 25%. like let's just start from what is the conceptually fastest thing that we could do. And I think in a vacuum the conceptually fastest thing that we could do is sort of like a monolith which is how Amazon started.</p>
</details>

理想情况下，一个Web服务器包含了所有的商品目录信息和交易处理逻辑。一个Web请求进来，服务器在理想世界里已经缓存或计算好了一切，然后发回响应。总延迟就是请求时间和数据传输时间。这已经是理论上的最快速度了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">where you know you have a web server with all of your catalog information. And so all of the items that are there and then transaction processing on the host that would be the fastest way to um run and and basically like a web request would be it opens the HTTP or HTTPS handshake. It hits the server. The server in an ideal world has everything cached or calculated. It sends it back. So the total like latency would be the time for this request, the time to transfer that data and you know based on your internet speed and that's it. That is the absolute you cannot be faster than that.</p>
</details>

亚马逊最初就是这么做的。我们采用垂直扩展，购买大型的Sun服务器。我们用C++编写了自己的Web服务器，通过购买更大的硬件来扩展。当这还不够时，我们就买了六台这样的大型服务器来运行整个亚马逊。这种方式一直持续到21世纪初。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's actually how Amazon was created. We we bought this, you know, it was sort of the opposite of horizontal scaling. It was vertical scaling. We bought these big sunboxes and you know we hacked up our own web server in in C++ and you know to scale up we bought bigger hardware and then when that didn't work you know we bought like six of these big boxes and that ran Amazon and we ran that way up until the the early 2000s.</p>
</details>

然后我们遇到了一个无法逾越的障碍：我们构建的C++二进制文件大小不能超过4GB。这是由当时运行的32位架构决定的硬性限制。产品经理们会来要求开发人员做修改，但开发人员只能无奈地表示，这是一个无法突破的硬性约束。我们当时已经有太多的业务逻辑，把4GB的空间都填满了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then what we realized we we ran into a wall which was that um you know when you when you built the C++ binary the binary could only be 4 GB and that was a hard limit based off of the 32-bit soft uh the architecture that we're running on before. We could not get above 4 GB and so these product managers would come and just be like well can just make a change for me right to the devs and then they would just be like I don't think you understand that this is a hard constraint and so we so the size of the code or the binary code the the compiled one it was there and you had so much business logic by then that it just filled at 4 GB.</p>
</details>

于是，我们做出了一个极其明智的决定：转向面向服务的架构和微服务。Web服务调用本质上是一个远程过程调用（RPC）。当你需要进行某些计算或获取数据时，你会向下游的另一个服务发起一个HTTP请求，然后可以将这些调用链接起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. and and you know we had a distributed C++ build so you know you could uh you know it would take many many hours for it to compile and so we would distribute it across desktops and it was this whole big thing but we ran into that wall and so what we end decided to do and I think this was super smart was like to lean into serviceoriented architectures right and microservices and when you break it down a web service call is essentially it's a remote procedure call right so you have this execution ution pointer and then you're like okay well I need to do some computation or I need to gather some data I'm going to turn in turn make a HTTP request downstream to another service and then you can sort of chain those things together.</p>
</details>

回到性能问题上。在一个拥有成千上万开发者的世界里，你不可能再维持一个亚马逊零售规模的单体应用。你必须依赖远程过程调用。这意味着，你能获得的最佳性能永远受限于你发起的Web请求数量，包括一级调用和任何下游的阻塞式调用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so getting back to the original thing about performance in a world where you have to because you have thousands and thousands of developers building you know this stuff and the fact that you cannot have a a monolith as big as Amazon retail you know past something that's sort of like circa 2002 to Amazon size you have to lean into remote procedure call you have to say that there's a web service the best performance that you can actually get is always going to be bounded by the number of web requests that you end up making whether it's the you know the first order calls to say go get the item details um but then also any blocking call that happens downstream.</p>
</details>

这种向微服务的转变，虽然极大地提高了可维护性并解决了单体架构的规模问题，但也带来了延迟的权衡。现在，我们必须回头去优化阻塞调用，利用缓存，或者设计巧妙的UI来提升用户感知。这也迫使团队和产品经理去思考：在这个页面上，哪些处理是绝对必要的？在我离开Prime Video之前，我做的一些工作就是，在高负载情况下，能否预先减少个性化计算量，以加快页面加载速度或提高吞吐量，从而服务更多客户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then basically so as I understand like as it became a microser like more microservices and services this was great for maintainability and also h you you just so well you first just solved the issue of the monolith size and you know as we know as with history of course like now teams could be more autonomous they're not as dependent they could build the APIs but it was a trade-off for for latency and now like you had to go back and figure out the the blocking calls how to speed those up how to do I guess you know trade-off things like caching like you know you can things fast but it might not be as correct on the first one or like just tricky UI where you don't show the data just yet but it's coming and the users sense a sense of like progress that those kind of things it and it also I think forces teams to really and product to really say okay like what is the strictly necessary processing that happens on this page some of the work that I was doing uh before I left Prime Video was basically like you have these really really big heavy gateway page you know or landing page requests And you know if you're in a situation with high load, can you preemptively reduce the amount of say personalization that's going on to sort of speed up that page or you know to increase the amount of like throughput that you're able to have so to serve more customers. Can you do that in a smart way, right? That sort of anticipates load that's coming onto the to that page.</p>
</details>

### 亚马逊首席工程师：难以逾越的晋升与独特的精英社区

在亚马逊，从初级到中级再到高级工程师的职业发展路径相对线性。但在高级之后，要晋升到首席工程师（Principal Engineer）则是一个巨大的飞跃。首席工程师是 **L7**（Level 7: 亚马逊内部的职级，对应首席工程师），而高级是L6。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's linear up until you hit principal, right? So, you know, you join, you're a junior developer, you get promoted to mid. at mid, you know, you're starting to influence the team, but but then you get to senior and so now your expected impact is at the at the team level and then and then there's this jump that you get to principal and principal is it's L6. Uh principal is L7. L7. Yes.</p>
</details>

为什么这个跳跃如此之大？在几乎所有其他公司，这只是一个线性的晋升过程。但亚马逊决定不设立“员工工程师”（Staff Engineer）这个级别。他们用“高标准”来解释这一点。从高级到首席，你实际上需要完成相当于两个半级别的跨越。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And so I think you really have to start with like why is it why is that jump so big? Cuz I think at every pretty much any other company, it's just a linear progression. Like there's nothing necessarily special about staff, you know, you can just sort of go to that level, senior staff and then principal. But for some reason, Amazon decided that they weren't going to have a staff level and and so and and I think they they sort of like couched it around like having high standards. Basically to get from senior to principal you have to do like two and a half level jump from from L6 L7. Technically it sounds like one level but at some other companies this might be like uh you know L8 L9 or L8 and a half.</p>
</details>

这种“高标准”导致了一个问题：我合作过的一些最优秀的工程师在晋升首席时遇到了极大的困难，最终他们选择去了Meta等其他公司，因为那里的职业发展路径更为合理。因为我们所谓的“高标准”，我们实际上在高层级上遭遇了人才流失。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And you know so the the the handwavy argument is like hey we have high standards and like you know it's it it means something to get to that level. It's like fine. But I noticed that some of the best engineers that I'd ever worked with were having such problems getting to principal engineer that they ended up moving to Facebook or to Meta or to all these other places where the progression was just sane. Now staff are senior staff level. Now they're senior staff and you know principal and distinguished engineer at other companies and so because we had high standards we actually had this brain drain and it wasn't a brain drain at lower levels. It was that the brain drain at at sort of like the higher levels.</p>
</details>

在亚马逊，对首席工程师的需求是巨大的，很多职位空缺多年。一个外部招聘的首席工程师职位，平均填补时间可能长达13到17个月，这还是在职位最终被填补的情况下计算的。亚马逊有数百个首席工程师的空缺，同时有数千名高级工程师拼命想晋升到这个职位。这种紧张关系在其他级别是看不到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I will say that at Amazon there is gigantic demand for principal engineers and so there are roles that have been open for years. I think something on the order of like 13 months or 17 months or something like that to get an external hire to um to join as a principal engineer. But that metric is only calculated when the role is filled. And so probably you know there are hundreds of principal engineer openings at Amazon. And there are thousands of senior engineers who desperately want to get there putting in the work, you know, and so there's this sort of like there's this tension, right? Um, and I don't think you see that at the lower levels. I don't think that that's happening at senior or mid or junior. And so like that inongruity I think is is super interesting.</p>
</details>

然而，一旦你成功晋升为首席工程师，你会进入一个我从未在其他公司听说过的组织：首席工程师社区。这是一个联系紧密、非常特别且氛围极好的组织。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But when once you do get to principal engineer, one thing that I've never heard any other company have is there is apparently a principal engineering community which is I've heard again from other people that it's tightly knit. It's actually special. It's actually just really nice organization. Can you talk about that?</p>
</details>

我从支持工程师晋升到高级工程师只用了四年，但从高级到首席却花了我八年时间。我是在2020年第一季度获得晋升的。过去，公司会举办首席工程师线下活动，把所有人都飞到西雅图交流。但疫情期间这些都停止了。疫情过后，首席工程师的人数几乎翻了一番。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is a community. I think it's actually really great. um my own history, you know, I I went from support engineer to senior engineer in like four years at Amazon, but then from senior to principal, it took me eight years and I got promoted in uh Q1 of 2020. Turns out to be a consequential like year four in the industry for the world that that was forceful remote work. And so, you know, I got promoted and everybody's like, you know, congratulations. They used to have like a principal engineer offsite where they just flew everybody into Seattle or nearby and then to to sort of like you know um mingle and and to talk to other folks. That stopped during the pandemic and then um you know by the time the pandemic restrictions started leaving the population of principal engineers had essentially doubled.</p>
</details>

现在，首席工程师社区主要通过Slack频道和本地组织的线下活动来体现。这些聚会非常棒，因为亚马逊设定的高标准，意味着能达到这个级别的每个人都有其过人之处。他们要么在某个技术领域有极深的造诣，要么与某项大型业务的增长紧密相关，他们是行业内的领导者。你随便挑五个人放进一个房间，他们的对话就会非常精彩。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's still to say like there are still hundreds and hundreds of openings for principal engineer but then the you know the sort of like off-site community shifted over to the senior principles that I didn't have access to but you know at the moment the the manifestation of the principal engineering community is essentially through the slack channel um which is absolutely awesome um and then um we had principal off sites for for like our local organization so like Amazon music prime video Twitch that sort of thing. Those meetups were were amazing. So the reason they were is because of this high standard that Amazon had created. And so what it meant is that everybody that was able to achieve that that overly high standard, there's something exceptional about them. Um there's there's, you know, um they're super deep in a particular technology or they were associated with, you know, uh the growth of a a really large line of business either within Amazon or or externally. They were essentially leaders within the industry and you could just literally you could just scoop out five people and then put them into a room and the conversation is just is just amazing, right?</p>
</details>

亚马逊对这个社区的投入还体现在人力上。有专门的项目经理和产品经理负责将大家聚集在一起。还有一个很棒的内部系列讲座叫“亚马逊原则”（Principles of Amazon），首席工程师们会做分享并录制下来，这个传统已经持续了20年。这些事情不会自发发生，需要有人去组织协调。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the investment was um also in terms of headcount. So there are program managers and and like product managers essentially um that are um you know bringing the folks together. Awesome. There's a there's a wonderful series. It's called the principles of Amazon series where you know principal engineers will just you know they'll do a presentation and it's recorded that's been happening for you know 20 years and you know we record everything that's there but it takes work to actually but that internal series that and is that open to like everyone at Amazon or it's for the principles themselves? It's it's open uh for everybody at Amazon to consume and then um you know there might be some senior engineers and stuff like that that that would make a presentation that's part of their promotion packet is be able to make an Amazonwide presentation on a particular thing. My point was though that that stuff doesn't just happen on its own. Yeah. like you have to like you need a program manager or multiple folks to sort of like herd the cats and to like schedule the off offsites and to make sure that the you know the Slack channel doesn't go off the rails, right? And is still useful and it's just not going to happen like grassroots with just like throwing a bunch of people into a room.</p>
</details>

### 首席工程师面临的五大悖论

我的同事 Bobby Kotari 总结了成为首席工程师后一些不那么光鲜或者更具挑战性的方面。

#### 1. 归属感的悖论
你属于所有团队，但又不属于任何一个团队。作为高级工程师，你深植于一个团队。但到了首席级别，你开始跨团队工作，处于一个奇怪的中间层。你不再负责某个特定团队的on-call，但你对所有团队都有可见性，帮助指导决策，却不再是真正的一线人员。你像一个空降的顾问，既要向总监或副总裁解释一线情况，又并非真正属于一线团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first he wrote, "There is this paradox of belonging that you're part of of all teams yet you're part of none." What does that mean? Yeah. No, so I uh Avoc was actually a a peer of mine. We worked in Prime Video together. So he's he's an awesome dude. Yeah. There's there are all of these paradoxes and and uh this paradox of belonging is is is a really interesting one. You know, you work for the organization, right? you're working across teams, right? So, as a senior engineer, you're working on you're embedded on a team and you know, you own the team's architecture, the the operations, you know, the software development life cycle and the design. But when you get to that next level where you're working across teams, um you kind of operate in this weird layer where, you know, you're not on pager duty for a particular team. um you have visibility across all of these teams that are there. You're helping to guide and make decisions, but you're literally not on the ground floor anymore. And so, you know, when you work with a particular team, you know, you might call the senior engineers or the mid-level engineers in and be like, "Hey, let's whiteboard some stuff. Like, let's try to figure out what's going on." You're not on the team. You're kind of this like adviser that's sort of coming in, right? But then, you know, maybe a director or a VP would call you in and say like, "Hey, what do I own? Like, what's going on? Explain to me this outage or tell me why we can't build this thing." And then you're you're trying to whiteboard the architecture and the system and you're trying to say like, "Hey, you know, this is what's going on on the ground floor." But you weren't, you know, you weren't part of that team. So, you're just sort of operating in this this sort of strata where, you know, you don't really belong on a team.</p>
</details>

#### 2. 自由与责任的悖论
你享有选择工作内容的巨大自主权，但同时，你也背负着产生巨大影响的隐性期望和责任。我曾向一位副总裁汇报，我们的一对一交流不是他给我分配任务，而是他设定一个方向，比如“直播体育赛事的可用性至关重要，我们需要提升可用性态势”，然后由我自己去决定如何实现这一目标。你被赋予的不是一个问题，甚至不是一个问题领域，而是一个方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The next paradox that Bavik said. He he he lists a few of the paradox, which is a freedom responsibility. and he writes that you enjoy significant autonomy in being able to choose what you work on. However, there's an implicit expectation and accountability for resounding impact. Yeah. So, you know, I you know, I reported to a VP right before I uh left the company and uh so they were your manager basically. Yeah, my manager was a was a VP. Oh, wow. That's I I I don't hear many companies having engineers report into VPs. Yeah, that doesn't seem very standard. um you know and so the the org that he owned I you know I considered myself the the tech adviser for that organization was about 450 people uh 450 software developers and what did our one-on ones consist of right like when I when I would have our one-on-one it wasn't like hey here's you know he didn't assign me work he wasn't like hey I need you to build this thing I need you to design this thing the context that he set was basically like here's a direction right that you need to go and the way that you can achieve that type of impact was up to me. Right. So he might say something like hey availability is so important for you know uh live sports. We just signed you know billion-dollar contracts with these sports leagues and so we need to increase our availability posture. And then I would be like, "Okay." And then I would go away and we would come back and I would be like, you know, here's what I'm working on, right? Like that type of dynamic. I don't this does not exist at the senior engineer below level where you're basically telling your boss what's happening.</p>
</details>

你可以用代码、系统设计来解决问题，也可以通过其他方式，比如建议购买现成的软件，或者组建一个新的开发团队。你的工具箱里有更多解决问题的选项，而不仅仅是写代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can solve the problem with code. You can solve the problem with system design and architecture, but you could also solve the problem say by, you know, I don't know, hey, maybe there's some off-the-shelf software we should purchase. U maybe there's a dev team that we should start to spin up right now, um, whose job it is to do this particular thing. Maybe we've identified a piece of software and it's already been scoped that this team needs to go and build, but it's not a priority for them. now we need to go and figure out like you know how we can get them to do it. Can we shuffle around resources? That sort of thing. And so the way I describe it is like there's so many more things on the menu that you can use to solve the problem. And I don't think people recognize that. They they think that it's just oh when you're a principal like you just like code a lot and it's just really complicated.</p>
</details>

#### 3. 带宽的挑战
你会成为一个社交资源，被拉进各种会议。我的日程表看起来就像别人一周的安排，周一整天都可能有三四个会议重叠。你必须学会对很多人说“不”，否则你就会变成一个专业的会议参与者，完全没有时间做实际工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The next challenge that Bavik said was this all sounds great, but there's apparently bandwidth challenge. So it's it's he's become this like social resource where people just pull you into everything and you're reading. Yeah. No, you know, I think I I wish I had taken a screenshot, but you know, I have my Outlook calendar, right? So it's my schedule. My day looked like most people's week, so it looked like somebody had just like blew up a Tetris factory. Like there there was like I would have triple or quadruple booked on a Monday all through the day. So you would have the manager calendar as an IC. Yeah. And it's it's absolutely crazy because and you know for that large org that I was supporting everybody just added me as optional or or they might try to say like no you're actually required for all of these meetings but when you have you have a triple booked calendar and you're required for this stuff you just learn that you're going to have to disappoint a lot of people. Yeah. And so it's it's this sort of like uh you know um this thing where it's like it's almost easier to say no now that you're obscenely over booked versus when you're a senior engineer you're like I don't have time to write code but there's just barely enough time in between the cracks. And so I think that uh it's almost like when it when your schedule breaks that's when you are finally freed because you know that you can sort of say no to stuff. But ultimately, if I just went to all of the meetings that everybody said that I would have to go to, I would be a professional meeting attender and I would literally have no time to do the work.</p>
</details>

#### 4. 真正专注的挑战
你发现自己身在一个会议中，脑子里却已经在思考接下来的三个会议了。当有无数事情同时发生时，要保持单线程工作变得极其困难。你必须积极地进行优先级排序，专注于最重要的事情，即使这意味着要放弃其他很多有价值的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then Bavik follows up on this next challenge, which is being truly present. And he writes, I think it's almost like, you know, he was sitting next to you. You find yourself physically present in one meeting while your mind is already racing against next three. You know, it's it's a it's a really big challenge. You know, I I pride myself on being a good communicator and being present. And when there there are 20 things that are going on in the air or 100 things that are going on, it's just really really difficult to to to say single threaded. Um, and what I ended up having to do is to to sort of say like, okay, I could do all of these things and they would be really impactful, but I just had to aggressively prioritize and say, you know, for the availability, I'm just looking at availability. there's all these other fires that are going on which is disappointing because there there's so many things that you know you could be focusing on. It's it's it's super difficult.</p>
</details>

### 亚马逊的成功秘诀：原则性思维与写作文化

我最怀念亚马逊的两点，也是它的成功秘诀，是原则性思维和写作文化。

领导力原则固然好，但真正的秘诀在于**原则性思维**（Principled Thinking）。这就像数学中的公理，你接受某些事情是真理，然后在此基础上构建整个体系。亚马逊确定了客户至上、崇尚行动、主人翁精神等核心原则，并坚定不移。你可以在会议上以实习生的身份对副总裁说“这用户体验不好”，整个会议都会因此停下来讨论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">no I I think the the things I missed the most um and in the secret sauce yeah the the leadership principles are good but I think the actual secret sauce there is principled thinking Mhm. Right. Yeah. So, you know, there's, you know, uh, invent and simplify and bias for action and all of this stuff, but like ultimately the thing that is amazing about those leadership principles aren't the specific stances that they took. So, they decided that customer obsession is a big deal. They decided that bias for action is a big deal. All of these things. But really, if you if you looked at a meta level, you'd be like, "Oh, these guys have principles that they won't budge on." I sort of think about it in terms of math and axioms like you just take certain things to be true. You know, two lines that are parallel if you extend them out to infinity won't touch them and won't touch with each other. Yeah. You assume that's true. Yeah. You you don't you don't prove that. It's an axiom and then based off of that you're able to build a system of mathematics, right? And so it's the same thing with the corporate leadership principles at Amazon. They basically said, "Okay, we are going to fix these things to be true."</p>
</details>

另一个秘诀是**写作文化**。作为首席工程师，我每天花一到四个小时阅读。我们有一种标准的六页纸备忘录格式，用于商业策略、系统设计或新业务的“新闻稿与常见问题解答”（PR-FAQ）。开会时，我们会先花时间阅读这份六页纸的文档，让所有人快速同步信息，然后再进行高质量的讨论。这种文化非常了不起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">another thing that uh uh that's Amazon secret sauce is just the writing culture. And so you know I spent on the order of like 1 to four hours every day reading while I was a principal engineer. And the it was we had a standard format. It was a it was a six-page memo. And you know uh that would be our business strategy. That would be uh a system design. That would be you know uh what we called the PR FAQ. So a press release and frequently asked questions for like a new line of business or a new initiative. And everybody was sort of constrained to the six-page format. And everybody just produces documents in that format for whatever they need to do. And so when I would try to get up to speed on a particular thing, I would just be like, "Give me your six pages. Give me all your documents." And I just got really really good at just reading these documents to get up to speed, which was a self-fulfilling and virtuous cycle, which is just like, "Okay, well now I need to express myself." And so I will write a six-pager, and that will set the context for whatever we're working on. we'd go to a meeting, you would read the six-pager and it was just super great to to just actually just have people do study hall at the beginning part of a meeting where you just everybody just gets fast forwarded and then you have a really great discussion at the end. That is what an amazing culture that I think that almost every other company should replicate if they could.</p>
</details>

### 专利背后：解决票务系统并发难题的巧思

亚马逊有申请软件专利的文化，主要是为了防御性目的。我们通常会把重要的六页纸文档交给法务团队，他们会从中发现一些有趣且值得申请专利的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the the highest order bit is like you know um for better or for worse there are software patents that exist. Um Amazon they'll say that basically the reason they have them is defensively because you know other people will assert that hey you're in violation of our patents or our IP. Um and then you know we'll use them reactively. Okay fine but you know you're also in violation of these other things. Um, and so, you know, there's a there is a culture of of trying to make sure that, you know, we protect ourselves in that way. But, you know, there's the other part of software patents, which is basically like, hey, can you really patent like math or whatever? Um, and so what I learned over time is that, you know, I'm just a really bad IP lawyer, even though, you know, as a principal engineer, I might cosplay as somebody that really understands software patents, right? um at the end of the day um you know what we would do is we would take our important six pages and we would hand them over to the legal team and then they would just be like oh this stuff is really interesting like let's explore that and so it it turned into this awesome thing where like we just had ready inputs to go into like the you know into that particular system a writing culture turns out has a bunch of benefits.</p>
</details>

我参与的一项专利与我之前做的 Amazon Tickets 项目有关。一个常见的系统设计面试题是“设计一个Ticketmaster”。我们当时构建了世界上最快的票务销售系统之一。最大的挑战是在有座位的音乐会上，如何快速找到并售出连续的座位。在开售瞬间，会有巨大的并发请求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This particular patent I'm I'm I'm proud of. So, there's a uh a system design interview question that seems to be popular right now, um which is like design ticket master, right? And so I work on Amazon tickets and you know, we ended up shuttering that business, but you know, we ended up building like one of the world's fastest like ticket selling systems like in the world, right? we could do many many orders per second. So the use case is basically at t0 that's you know for a really big ticket on sale like that's when the maximum amount of of demand and requests are coming in um and you want to sell out all of your ticket supply as quickly as possible. The problem is I think uh one where you have seated concerts. And so when you purchase a a ticket, you know, most of the time with the system design stuff, it'll be like general admission or it won't be a high ticket on, you know, like one with a bunch of demand. You have to find contiguous seats.</p>
</details>

我们的想法是，一个场馆的座位总数其实并不多，可能只有几千个。与其让每个请求都去后端数据库进行复杂的搜索，不如反其道而行之。我们将整个场馆的座位库存信息加载到每个前端主机的CPU二级缓存中。因为数据量不大，我们可以用紧凑的位表示。这样，我们就可以通过位操作（bit manipulation）极快地找到连续的座位，然后再去锁定资源。这种通过将库存前置到节点并利用CPU缓存进行计算的反向处理流程，就是这项专利的基础。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it turns out that, you know, even if you have a high ticket on sale, you only have like thousands of tickets at the end of the day. So instead of making a request to like a backend that would conduct some sort of search across the space, what if you actually inverted it and then you basically had each of the individual hosts have like some view on the entire arena or venue that was there and you loaded up all of that availability and inventory into like L2 cache on a CPU. Because it's actually not that many. So if you had this compact rep was pretty big. Then what you can do is you can you can do bit manipulation to like really really quickly get contiguous seats that are there. And then what you do is you can like send in that particular request and try to like reserve those particular seats. Yes. So the the inversion of that ordering process by which you like actually send out the inventory to the individual nodes and then like load it up into CPU cache and then just do bit manipulation um and then try to lock that resource from the individual nodes. That was that was the basis of this particular patent.</p>
</details>

### 快速问答：职业建议与文化洞察

**对你的职业生涯帮助最大的建议是什么？**

与其问“我应该学哪种技术”，不如反过来问“我如何才能快速学习技能？” 这让你能够适应变化，变得更有价值。本质上是元学习（metalearning）：我如何能学得越来越快？如果这是你的重点，你将永远不愁找不到工作，也永远不愁职业发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What is career advice that greatly helped you in your path? Yeah. I mean, this is I you know, I talk a lot about this. It's kind of like, oh, what's what's your favorite food or your favorite movie? It's just like there's so much there and it's hard to pick one. What I would say is instead of saying like, hey, what's the technology that I should learn that's really going to, you know, u make my career uh, you know, solid, instead sort of flip it around and say like, how can I I quickly learn skills? That makes you that makes you sort of like recession proof, right? That that sort of makes you valuable. It's essentially metalarning. It's like how can I learn something faster and faster? If if that's your focus, then you'll always be you you'll never have a problem finding a job and you'll never have a problem progressing in your career.</p>
</details>

**你最喜欢和最不喜欢的编程语言是什么？**

我真的很喜欢Perl。我知道没人会给这个答案。我喜欢它“条条大路通罗马”的理念，有很多种方式可以完成一件事。但我也喜欢那些“无聊”的语言，比如Java。尽管它很冗长，但基于JVM的语言拥有强大的库支持，非常稳定可靠。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You've used a lot of programming languages. Which one's your favorite and why? And and which one do you dislike most? Yeah. You know, I I you know, I I have like a you know, obviously there's no perfect programming language. Um, what I would say is like I really enjoyed Pearl and nobody would ever give that answer, but I just like this concept of like there's just so many different ways to do it. It's a it's a write only language. Like you can't read anybody else's Pearl and I it's it's actually one of the languages that like uses up the most power. It's like the least efficient. It's interpreted. It's it's just like terrible. But I just kind of like it. I just feel like I can express myself and there's just like there's just what, however you'd like to express yourself, you can. Um, at the end of the day, like I really love the boring languages. Um, so you know, Java with, you know, for all of its stuff, like it's verbosity and I think it's just a great langu like a JVM based language, um, that has essentially like great like library support and a bunch of stuff written for it, but it's just like super boring. Maybe it's just because I'm from Amazon and we do this like enterprise stuff like it's a fine language.</p>
</details>

**推荐一本关于软件工程的书？**

鉴于我刚才关于元学习的建议，我推荐 Cal Newport 的《优秀到不能被忽视》（So Good They Can't Ignore You）。它围绕“职业资本”的概念展开，即哪些技能是市场最需要的。如果你能掌握这些技能，你就会变得炙手可热。技术书籍方面，Chip Huyen 的新书《AI工程》非常棒，还有《设计数据密集型应用》（DDIA）也是经典。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What is a book that you would recommend something around software engineering that that you enjoyed and it cannot be that book. It can't be your book. Um what I would say is you know you know I just given the advice about um you know metalarning and and career growth. I I think that most software developers should read a book by Kell Newport. It's called so good they can't ignore you. And so the concept there is around career capital. So like what are the skills that are in the most demand? And if you can just like learn those skills then you become in demand. And then you know from there you can choose what type of lifestyle that you'd like. You know you can also like sort of lean into you know some of the science of metalarning. So deliberate practice space repetition that sort of thing. Um, in terms of like tech books, I think the new uh AI engineering book uh by Chipwin is is amazing. It's Yeah. Um, I think uh DDIA, so the the the design of data intensive so good. A new new version is coming the end of a year actually. I'm excited about that. I think that'll be pretty good.</p>
</details>