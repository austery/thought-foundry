---
area: tech-insights
category: business
companies_orgs:
- Google
- Alphabet
- Microsoft
- Amazon
- Meta
- Statsig
- OpenAI
- Anthropic
- Figma
- Notion
- Uber
- Visa
- Mastercard
- Adyen
- Yahoo
- MySpace
- Sun Microsystems
- Intel
- Twitter
- Apple
- Nvidia
- Snap
- Stripe
- JP Morgan
date: '2025-10-15'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The Pragmatic Engineer
- Site Reliability Engineering
- Software Engineering at Google
- Measure What Matters
- 10 things we know to be true
people:
- Gerge
- Alen
- Addy Osmani
- Treyas Banzal
- Dave O'Connor
- Jeff Bezos
- Namadiv Singh
- Michael Lynch
- Manu Cornet
- Sergey Brin
- Larry Page
- John Doerr
- Satya Nadella
- Elon Musk
products_models:
- Google Search
- YouTube
- Chrome
- Android
- Gmail
- Google Workspace
- Google Drive
- Google Docs
- Google Calendar
- Waymo
- iOS
- Borg
- Blaze
- Piper
- Critique
- Code Search
- Kubernetes
- Datadog
- Monarch
- Third Eye
- Sentry
- Google File System
- Colossus
- BigTable
- Spanner
- B4
- Borg Naming Service
- gRPC
- Stubby
- Protocol Buffers
- App Engine
- Google Cloud Platform
- CL (Change List)
- Sourcegraph
- Bazel
- Cider
- VS Code
- Buganizer
- Taskflow
- GUTS
- Google Wave
- GChat
- Google Wallet
- GPay
- Stadia
- Google Reader
- Linear
- TensorFlow
- Angular
- Flutter
- Firebase
- Edge
- Skype
- AWS
- Azure
project:
- us-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=sj9Q2VcfUeA
speaker: The Pragmatic Engineer
status: evergreen
summary: 本文深入剖析了谷歌独特的工程文化。内容涵盖其惊人的全球规模、完全定制化的内部技术栈（从Borg到Piper），以及独特的工程师薪酬、福利和绩效评估体系。文章详细探讨了谷歌的角色层级、内部流动性，并揭示了“晋升驱动开发”等文化现象的成因与影响。对于任何想了解这家全球科技巨头内部运作方式的工程师或管理者来说，这都是一份详尽的指南。
tags:
- development
- engineering-culture
- performance
- tech-stack
- tool
title: 深入谷歌工程文化：从定制技术栈到晋升潜规则
---

### 引言：深入谷歌的工程世界

从用户数量来看，谷歌是世界上使用最广泛的公司，旗下拥有 Google 搜索、YouTube、Chrome、Android 等众多产品。但从工程角度看，这家公司究竟是怎样的呢？我们花了数月时间研究这个话题，旨在为您带来迄今为止关于谷歌工程文化最详尽的深度剖析。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Google is the world's most used company by the number of users between products like Google search, YouTube, Chrome, Android, and many more. But what's the company like from an engineering point of view? We've spent months researching this topic to bring you the most detailed deep dive to date on Google's engineering culture.</p>
</details>

我们将深入探讨谷歌独特的技术栈，以及为何公司内部几乎所有工具都是定制的。我们还会介绍谷歌的工作方式、角色、薪酬、绩效评估、待命制度和内部流动性。此外，我们还会探讨谷歌在过去几十年间的变迁，并为软件工程师如何在今天的谷歌茁壮成长提供建议，以及更多其他话题。如果您曾想过以工程师或管理者的身份加入谷歌，或者想了解这家全球最具创新力的科技公司之一是如何运作的，那么本期内容就是为您准备的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We go into Google's unique tech stack and why every tool is custom at the company. How Google works, roles, compensation, performance reviews, on-call and internal mobility. How Google changed over the decades and advice on how to thrive at the Google of today as a software engineer and many more topics. If you ever wanted to work at Google as an engineer or manager or want to understand how one of the world's most innovative tech companies operates, this episode is for you.</p>
</details>

**Gerge:** 大家好，我是 Gerge，本期播客的主持人，也是《The Pragmatic Engineer》的作者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi, I'm Gerge, your podcast host and author of The Pragmatic Engineer.</p>
</details>

**Alen:** 大家好，我是 Alen，你们可能认识我，也可能不认识，我是《The Pragmatic Engineer》的研究员。你们可能在我们的深度剖析和调查文章中看到过我的署名。今天，我们将尝试一种新的形式，通过对话的方式带您深入了解谷歌的一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi, I'm Alen and you may or may not know me as the researcher of the pragmatic engineer. You might have seen my byline in some of our deep dives and survey articles. And today we're going to try out this new format to bring you a deep dive by talking you through everything Google.</p>
</details>

**Alen:** 我在 2015 年曾在谷歌实习了几个月，当时在伦敦办公室，实际上是做用户体验（UX）实习生。那是在我后来成为工程师之前。所以，我对内部氛围有一点点了解，但不是很多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I was an intern at Google for a couple months back in 2015. I was based in the London office. I worked as a UX intern actually. That was before I worked as an engineer after that. So I have a little bit of like inside vibes but not that much.</p>
</details>

### 谷歌的惊人规模

**Gerge:** 让我们从大家都熟知的谷歌开始吧。你不可能不知道它，但我们发现了哪些关于他们的有趣数据呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's start with everyone knows Google for sure. You cannot not know it but what are some interesting stats we found about them?</p>
</details>

**Alen:** 如果要谈数字的话，人们有时很容易忘记谷歌有多庞大。最新的数据显示，整个 **Alphabet**（Alphabet Inc.: 谷歌的母公司，一家控股公司，旗下拥有谷歌等众多子公司） 共有 18.2 万名员工，其中绝大多数都在谷歌。我们有 2020 年的数据，当时大约有 5 万名工程师。这个数字还在增长，比如在 2015 年，他们首次公布了大量关于工程工作的数据时，工程师数量是 2.5 万。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The numbers if we're going to go there, it is easy to forget how big Google is sometimes. So the latest numbers there's 182,000 employees across all of Alphabet. But obviously the majority of that is in Google. We have numbers from 2020 that there were about 50,000 engineers and that's up. So in 2015, which was the first time they came out with a lot of the numbers about the engineering work, there were 25,000 engineers.</p>
</details>

**Alen:** 我认为从规模上看，他们的总员工数与微软相似。工程师数量不太清楚，可能谷歌更多，也可能微软更多。可能和亚马逊也差不多，但亚马逊的数据有点奇怪，因为他们把仓储工人也算进去了。但他们比 Meta 要大得多，大概是两到三倍。所以，他们轻松成为全球最大的顶级科技公司之一，如果不是最大的话。问题可能在于与微软的比较，但在声望和薪酬方面，他们无疑是第一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think size-wise this makes them similar to Microsoft in total employee count for engineers. A bit unclear. Maybe Google has more maybe Microsoft. Probably similar to Amazon, but Amazon has weird numbers cuz they kind of mesh the workers, but they're a lot bigger than Meta, for example. They're like I think two, three times bigger. So they're easily one of the biggest kind of top tech companies in the world, if not the biggest. The question is with Microsoft, but I think when it come to prestige, compensation, they're easily number one in this regards.</p>
</details>

**Alen:** 谈到工作规模，微软的员工数量可能与谷歌相似，但就谷歌而言，虽然数字不甚明确，但每月大约有 30 到 40 亿人使用他们的服务，包括搜索、Gmail 和 YouTube。这些都是市场领先的服务。我认为搜索每天的用户超过 10 亿，差不多是世界上每九个人中就有一个在使用。YouTube 每月有 25 亿用户，比电视观众还多。Gmail 有 18 亿活跃用户，我敢肯定，看我的新闻通讯的用户中，大约有 60% 到 70% 的邮箱是 Gmail。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Scale of work that people work on. And speaking of scale, Microsoft might have similar number of employees, but when it comes to Google, I think numbers are a bit unclear, but around 3 to 4 billion people per month use their services between search, Gmail, YouTube. I mean all of these are marketing services right. I think search is more than 1 billion people per day which is kind of one like every I think nine person in the world uses search. YouTube has 2.5 billion monthly which is more than TV viewers and then Gmail has 1.8 billion active users and I'm pretty sure looking at my newsletter about 60-70% of emails are Gmail.</p>
</details>

**Gerge:** 当然。我也看过同样的数据。如果你把 Google Workspace 的应用范围扩大，包括 Drive、Docs 和 Calendar 等，他们拥有超过 30 亿用户和超过 50% 的市场份额，远远领先于微软的 Office。YouTube 也是如此，我是一个长期的重度 YouTube 用户，总是对它的数据感到着迷。YouTube 上有 50 亿个视频，虽然不一定所有都公开可用。最新的数据显示，每分钟就有 360 小时的内容被上传。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, for sure. I've seen the same stats and if you broaden out the Google Workspace apps like including Drive and Docs and Calendar and stuff, they have over three billion users and over 50% market share. They're so far ahead of Microsoft and Office essentially. With YouTube as well. I can't help, I'm a big YouTube user and have been for a long time and I'm always so fascinated by their general stats. Like there's 5 billion videos on YouTube. Not all of them are necessarily up and available. The latest numbers, 360 hours of content is uploaded every single minute.</p>
</details>

**Alen:** 是的，那是大量的并行处理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, that's a lot of parallel processing.</p>
</details>

**Gerge:** 每天有 260 万个视频被上传，一年将近 10 亿个。每天消费的视频时长达到 10 亿小时。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's 2.6 million videos uploaded every day. Almost a billion a year and a billion hours of video is consumed every day.</p>
</details>

**Alen:** 是的，这些数字实在太庞大了。而且，谷歌的有趣之处在于，技术上它甚至不叫谷歌，而是 Alphabet，其中最大的部分是谷歌，它仍然拥有像 Chrome（领先的网页浏览器）和 Android（全球领先的智能手机平台，市场份额约 70%）这样的产品。在美国，iOS 正在变得更大，所以这可能会有点误导。但还有像自动驾驶这样的业务，唯一商业领先的是 Waymo，它不属于谷歌，而是 Alphabet 的一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, those are just large numbers. And I think this is the thing with Google, right? Technically it's not even called Google. Technically, it's Alphabet, which the biggest part is Google that still owns things that like Chrome, the leading web browser, Android, which is still the leading smartphone platform globally by a lot by about 70%. In the US, iOS is now getting bigger. So, that can be a bit misleading. But then there's things like self-driving. If it's self-driving it's the only the commercial leading one is Waymo which is not part of Google but part of Alphabet.</p>
</details>

### 遍布全球的工程中心

**Gerge:** 就全球足迹而言，谷歌规模庞大。他们在 50 多个国家设有 72 个办公室，遍布全球，包括美国、欧洲、亚洲、悉尼和巴西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In terms of the footprint, yeah Google's big. Just globally as well they have 72 offices in over 50 countries or 50 countries so they have offices all around the globe US Europe Asia Sydney Brazil.</p>
</details>

**Alen:** 是的，但我们最关心的是工程方面。他们有超过 25 个工程办公室，但我们应该特别提到几个大的。总部在硅谷的山景城。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah but what we care mostly about is engineering so they're engineering offices there's about more than 25 ones, but the kind of the big ones that we should definitely mention, headquarters, Mountain View in Silicon Valley.</p>
</details>

**Gerge:** Googleplex。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The Google Plex.</p>
</details>

**Alen:** Googleplex，是的。非常酷的办公室，福利也很好，还有 Android 的雕像，太酷了。我去年去过那里。Addy Osmani 带我参观了 Chrome 团队。纽约办公室也是一个大的，还有西雅图。他们在美国还有很多较小的办公室，比如洛杉矶、匹兹堡、博尔德，很多都是专业化的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The Google Plex. Yeah. Really cool office. Like really cool kind of perks. Android figures. It was so cool. I was there last year. Addy Osmani took me around on the Chrome team. New York office also big one. Seattle and they have a lot of offices in smaller ones in the US. LA, Pittsburgh, Boulder, a lot of like specialized ones.</p>
</details>

**Gerge:** 马萨诸塞州的剑桥也相当大。是的，西雅图办公室绝对是较大的之一。你可能也会听到它被称为柯克兰（Kirkland），因为柯克兰是它所在的西雅图郊区，那里有很多云业务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cambridge and Massachusetts is pretty big as well. Yeah, the Seattle office is definitely one of the bigger one. And you might hear it referred to as Kirkland as well because Kirkland is the suburb of Seattle where it is and it's, yeah, lots of cloud is based there.</p>
</details>

**Alen:** 是的。然后欧洲和英国也有大型办公室。欧洲最知名的最大办公室在苏黎世。可以说，在工程方面，它可能是谷歌的欧洲总部。一个有趣的事实是，苏黎世的薪酬几乎和美国一样高，这真的很有趣，比他们其他欧洲办公室高得多。伦敦是另一个巨大的办公室，都柏林也是一个大的。都柏林在人数上可能比苏黎世大，但不一定在工程方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And then Europe and the UK have large offices. The biggest one known in Europe is Zurich. It's actually probably Google's European HQ in terms of engineering if you will. And a fun fact is that Zurich pays almost as much in compensation as in the US which is really really interesting. A lot higher than their other European offices. London is another huge office. Dublin a big one. Dublin I think might be bigger than Zurich in terms of people but not necessarily engineering.</p>
</details>

**Gerge:** 啊，他们有很多销售人员。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ah, like they have a lot of sales. Yeah. Yeah. Makes sense. Makes sense.</p>
</details>

**Alen:** 哦，你说得对。我以前确实有非技术的朋友在都柏林。是的，你说得对。我当时想的是工程方面。

<details>
<summary>View/Hide Original English</据我所知，巴黎有一个研究办公室。还有一些较小的办公室。谷歌的特点是他们确实有一些较小的分支。例如，即使在匈牙利的布达佩斯，他们也有一个非常小的工程办公室。我想他们现在还有，但与所有其他办公室相比，它非常小。></p>
</details>

**Gerge:** 是的，这里也有一个。我住在斯德哥尔摩。他们在这里也有一个办公室，而且发展得相当不错。大概有几百人，在工程方面规模相当大，主要从事视频会议和通话等工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, there's actually one here. I'm based in Stockholm. So, they have an office here as well that's grown a fair bit. It's like a few hundred people. Fairly big on the engineering side. work a lot on video meets and calls and stuff.</p>
</details>

**Alen:** 很多美国科技公司可能就到此为止了，但谷歌毕竟是谷歌，他们在很多其他地方也有工程办公室。班加罗尔和海得拉巴是他们在印度的两个巨型办公室。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And a lot of US tech companies would stop here but Google obviously being Google they have engineering offices a lot of other places. Bangalore and Hyderabad are two massive offices in India.</p>
</details>

**Gerge:** 它们也发展得非常快，而且还在不断增长。很多空缺职位都在印度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They've grown so much as well. They're and growing. Like those are like a lot of the open positions are based in India.</p>
</details>

**Alen:** 是的，我以前在 Uber 当工程经理时也遇到过这个问题。我们在班加罗尔招聘，发现很难招到高级工程师，因为每当我们发出录用意向书，而那个人同时也在面试谷歌时，谷歌总会比我们多出 10% 的薪酬，总是多 10%。所以过了一段时间，那是几年前的事了，团队有点退缩，开始招聘经验较少的工程师。这是一场激烈的招聘战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah we had an issue with that when I used to work at Uber as an engineering manager. We were hiring in Bangalore and what we found is we had trouble hiring senior engineers because whenever we'd extend an offer and that person was interviewing at Google, Google would offer 10% more than whatever we did. Always 10% more. So after a while back, this was back several years ago, but the team kind of backed down and they started to hire like less experienced engineer. This was a big kind of hiring fight.</p>
</details>

**Alen:** 顺便说一下，关于谷歌有这么一件事。如果你有一个竞争性的录用意向书，谷歌又想要你，而且你是高级或以上级别，谷歌几乎总会出价更高。他们不太在乎内部的薪酬范围。当然，随着时间的推移，这种情况可能已经改变，对于初级职位也可能有所不同。但我有一个总监朋友就遇到了这种情况，他在 Meta 和谷歌之间有一个竞争性的录用意向书，薪酬已经很高了，然后谷歌非常想要这个人，就直接出价更高。当你变得抢手时，谷歌的情况就很有趣了，这在求职市场上算是一个公开的秘密。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But there is this thing about Google, by the way. If you have a competing offer, Google and they want you and then you're like senior and above, Google almost always will offer more. They don't care too much about their internal bands. Again, over time, this might have changed and for more junior positions, this could have changed. But I had a director of friend who was in the situation between having a competing offer at Meta and Google and it was really high already and then Google just really wanted this person and they just offered more. Google like when you become in demand this is a really interesting situation but it's kind of an open secret on the job market.</p>
</details>

**Alen:** 然后他们在日本东京、澳大利亚悉尼都有办公室，可能在每个主要城市都有。谷歌的办公室太多了，工程团队可能在任何地方出现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then they have offices Tokyo, Japan, Sydney, Australia and probably every kind of major city and you'll have like so Google has so many offices right and engineering can pop up anywhere.</p>
</details>

### 谷歌的商业模式与工程师文化

**Gerge:** 是的，完全正确。他们在巴西圣保罗也有一个相当大的办公室，那里有很多搜索工程师。但有趣的是，谷歌的一个数据是，他们的收入一直很好。比如在 2024 年，他们的收入是 3500 亿美元，其中 75% 来自广告。我认为谷歌做得很好，因为他们从第一天起就为自己找到了一个非常好的收入模式。所以他们总能提供所有这些高薪，并为很多事情买单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, exactly. They have a pretty big one in Brazil as well in São Paulo. They have a lot of search engineers. But it's also it's funny because one of the stats for Google is like they've always had such good revenue. So like back in 2024 there was $350 billion in revenue. 75% of that comes from ads. And I think Google like they've done good for themselves because they figured out such a good revenue model from day one for themselves. So they've always been able to offer all of these high salaries and pay for so much stuff.</p>
</details>

**Alen:** 我要稍微挑战一下你的观点。我们都知道谷歌的盈利能力极强，这一点毫无疑问。然而，当我们仔细审视其单位经济效益时——我们很快会转向工程话题，但先谈谈钱从哪里来——谷歌的利润率，也就是每 100 美元收入中有多少是利润，大约在 30% 到 35% 之间。所以，大约 30 到 35 美元是纯利润。他们并不是最赚钱的公司。像 Visa、Mastercard 和 Adyen 这样的公司，利润率大约在 60% 左右，但这些公司付给工程师的薪水远不如谷歌。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to challenge you a little bit because I so like we know like Google is insanely profitable, right? Like there is no doubt about it. However, when we look a little bit closer at the unit economics and we're going to quickly move to engineering, but let's talk about the kind of where the money comes from. Google's like profit margin of like you know on $100, how many dollars is profit is around like 30 or 35%. So like $30 or $35 are pure profit and they're not the most profitable company. Companies like Visa or Mastercard and Adyen they do about 60% profit rate but those companies don't pay as much as Google does for their engineers.</p>
</details>

**Alen:** 所以这里有一个有趣的现象：有些公司更早就找到了类似的高利润商业模式，比如 Mastercard，你进行一笔交易，他们抽取一定比例，他们建立了全球网络，利润滚滚而来。但他们并不像谷歌那样对待或补偿工程师，我们稍后会详细讨论这一点。所以我认为谷歌做了一些有趣的事情。到本期节目结束时，我们会更清楚到底发生了什么。但这里有两种可能性：要么他们因为善待工程师而变得如此盈利，创造了一种新模式；要么尽管他们如此盈利，他们仍然善待工程师，并且可能因此变得更加盈利，现在比 Mastercard 或 Visa 等公司规模大得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there's this interesting thing where there have been companies earlier who have found out similarly really lucrative really good business models again like with Mastercard you know you make a transaction they take a percentage they built out the global network boom profit but they don't compensate engineers or they don't kind of treat engineers the way Google does which we're going to talk a lot about. So, I think Google did something interesting where like by the end of this episode, we're going to have a better idea of what actually happened. But there's two things, right? Either they created this new thing where they became so profitable because they treated engineers so well. Or despite being so profitable, they're treating engineers really well and maybe they're becoming even more profitable and now a lot bigger than Mastercard or Visa or other companies.</p>
</details>

**Alen:** 我想提一件有趣的事。当你加入谷歌时，有一位被谷歌收购的创始人的笔记，他叫 Treyas Banzal，他的 10 人创业公司几年前被收购了。他在一篇博客文章中写道：“在谷歌工作就像拥有第二本护照。去世界上任何一个城市，你的工牌就能解锁一个漂亮的办公室，那里有美食、好桌子，还有一条高速网络连接到谷歌 20 万人的网络中。这就像一个外国人访问美国。你看到的一切内部事物都因为其巨大的文化输出而感到异常熟悉，但又略有不同。” 我觉得这太迷人了。当你加入谷歌，你突然就可以进入所有办公室，只要差旅预算允许。我听说他们现在有一些预算限制，但你确实可以接触到这些地方和所有的人。我认为这是很多外部人士没有意识到的，它不仅仅是一家公司，它更像一个世界。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now one interesting thing that I wanted to bring up is when you joined Google there was this note from a founder who got acquired by Google called Treyas Banzal. A 10-person startup got acquired several years ago and on a blog post this is what he wrote. He wrote "working at Google is like having a second passport. Go to any major city in the world and your badge unlocks a beautiful office with great food, great desk and a high-speed link to every person in Google's 200,000 person network. And it's like visiting America as a foreigner. Everything you see inside feels oddly familiar because of its massive export influence yet is just slightly different." I thought this is fascinating. So like when you join Google you have suddenly access to all the offices. You can go into any of the offices. I mean travel budgets permitting. I understand they now have some of those but yeah you have access to this and to all of the people. I think this is something that a lot of people don't realize from the outside of just how it is one company but it's also more.</p>
</details>

**Gerge:** 是的，这与我短暂的经历非常契合。我们稍后会深入探讨，但我认为谷歌非常特别，尤其是与其他大型科技公司相比。在很多方面，没有一个统一的“谷歌”，它不是一家只做一件事的公司。从很早开始，他们就涉足了许多不同的领域。所以，你回忆起谷歌的记忆，感觉更像是，你和其他谷歌员工交谈时，他们好像在一家完全不同的公司工作。但你们都处在一个“平行现实”的气泡里，当你在那个气泡里时，你知道很多只有与其他谷歌员工才能谈论的事情。所以，感觉更像是他们在同一个平行宇宙的气泡里，而不是在同一家公司。而工牌，确实就是通往那个世界的护照。那是一个非常迷人的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, that actually resonates quite a lot with my brief experience there as well. Again, we'll get into this but yeah, I think Google is so special especially if you compare it to the other big tech companies because like in many ways there's no one Google. It's not one company working on one thing. From very early on they worked on so many different things. So like you can reminisce my memories of Google is like it feels more like you can talk to other Googlers and it feels like they would be at like working at a completely different company but you're in this like alternate reality bubble where when you're in the bubble you know so many things that you can only talk about with other Googlers which yeah are like so it's more like they're in the same alternate universe bubble as you rather than at the same company as you. And yeah, the badge is really the passport to that really. It's a really fascinating place to be.</p>
</details>

**Alen:** 谷歌拥有世界上最独特的技术栈，我们将深入探讨更多细节，但他们几乎所有东西都是定制的。所以，不像几乎所有其他初创公司或公司那样，有一定程度的行业标准技术栈，谷歌只用自己的东西，而且对他们来说效果非常好，这也带来了一些有趣的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Google has the most unique tech stack in the world and we're going to go into a lot more detail, but they have custom-built everything. So unlike almost every other startup or company that has some level of standard tech stack that the rest of the industry uses, Google just uses their own stuff and it works really well for them, which has an interesting outcome.</p>
</details>

**Alen:** 他们也影响了，甚至可以说间接创造了今天的招聘方式，比如 **LeetCode**（一个流行的在线编程练习平台） 风格的面试。他们开创了算法面试的先河，并且由于谷歌对招聘标准的高要求，这种方式在整个科技行业变得主流。他们还发明了一些角色，比如 **SRE**（Site Reliability Engineer: 网站可靠性工程师，一种结合了软件工程和系统管理的职位） 角色，现在这个角色在其他公司也相当普遍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They also influence if not even kind of indirectly created how hiring is done today with these LeetCode style interviews. They started with the algorithmical interviews and they kind of I guess the perception of how Google having a hiring bar made it go mainstream across the tech industry and then they also invented roles like the SRE role which is now kind of pretty widespread across other companies as well.</p>
</details>

### 独一无二的技术孤岛：谷歌的内部工具栈

**Gerge:** 完全正确。即使在其他公司可能被称为 DevOps、可靠性工程等略有不同的名称。关于谷歌非常独特的一点是他们构建了多少内部工具。Borg、Blaze、Piper、Critique、Code Search。我们今天会谈到很多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, exactly. Even though it might be called something slightly different with like you know DevOps, reliability engineering etc etc. One thing that is very unique about Google is how many internal tools that they've built. Borg, blaze, piper, critique, code search. We'll talk about a lot of them today.</p>
</details>

**Alen:** 是的，我们会讲到它们。在很多方面，谷歌是第一批我们今天所认为的现代软件公司之一。不仅仅是他们提供的所有福利，还有他们构建一流的内部工具。他们还开创了我们今天认为理所当然的东西：为产品和工程团队提供出色的数据工具。谷歌是第一批认真对待分析、仪表盘、A/B 测试、功能控制等所有这些的公司之一。他们构建了先进的工具，并提供给成千上万的工程师和数据科学家使用。这种方法促成了一种快速行动的、自下而上的产品开发方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we're going to get to them. In many ways, Google was one of the first modern software companies and how we think about them today. Not just all the perks that they provide, but building best-in-class internal tools. They also pioneered something that we take for granted today. Great data tools for product and engineering teams. Google was one of the first companies to take analytics, dashboards, AB testing, feature controls, all of them together seriously. They built advanced tools and made it available to their thousands of engineers and data scientists. This was the approach that enabled a fast-moving bottoms up approach to product development.</p>
</details>

**Gerge:** 让工程团队能够使用这些工具的做法，确实成为了过去 15 年里杰出科技公司的基准。几乎每家主要的科技公司都曾有整个团队在内部重建这类功能开关和 A/B 测试工具栈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this practice of having your engineering teams have access to these tools really did become the baseline for standout tech companies. For the last 15 years, pretty much every major tech company has had entire teams of people rebuilding this kind of feature flagging AB testing stack of tools internally.</p>
</details>

**Alen:** 但现在，随着最新一代科技巨头的出现，情况正在发生有趣的变化。像 OpenAI、Anthropic、Figma、Notion 等公司，不再自己构建这些工具，而是直接使用 Statsig。Statsig 重建了这整套数据工具，这些工具直到现在可能只在 10 到 15 家巨头公司中以如此强大的方式存在。他们构建了带有适当统计分析的实验功能、用于安全部署的功能开关、会话回放分析等等，所有这些都由一套统一的产品数据支持。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But now something interesting is happening with the latest generation of tech giants. Rather than building these tools, companies like OpenAI, Anthropic, Figma, Notion, and a bunch of others, they're just using Statsig. Statsig has rebuilt this entire suite of data tools that was available at maybe 10 or 15 giants in a such a powerful way until now. They built experimentation with proper statistical analysis, feature flags for save deployments, session replace analytics, and more. All backed by a single set of product data.</p>
</details>

**Alen:** 谷歌如此独特的一个原因是，即使在今天，他们也拥有完全定制的内部基础设施。这是有原因的，因为当他们刚起步时，他们知道现有的工具无法满足他们的规模需求，所以他们必须自己构建。那么，让我们来谈谈一些独特的工具集，如果有人开始在谷歌工作，或者正在那里工作，他们会看到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So one thing that is like so unique about Google is they have completely custom internal infrastructure even today and there's a reason for this because when they started back then they needed to build this knowing how the existing tools didn't work for their scale. So maybe let's talk through some of the unique tool set that someone would see if they start to work inside Google or if they're working there, they see them.</p>
</details>

**Gerge:** 是的，完全正确。我认为这个技术栈之所以是现在这个样子，很大程度上是因为它是为搜索而生的。搜索从第一天起就必须是全球性的。所以我们需要从第一天起就拥有这样的基础设施，以获得我们想要的速度和可靠性。这就是为什么他们直接跳到从头开始构建定制的东西。是的，他们在 2000 年代初期就扩展到了数十万台机器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, exactly. And I think actually it's like why this tech stack looks the way it does is very like it's because it was search. It's like well this needs to be global from day one. So we need to have this infrastructure from day one to get the speed and reliability that we want. And so that's why they just jumped straight ahead with like we'll just build custom stuff from the ground up. So yeah, like they scaled into six digits of machines in the early 2000s.</p>
</details>

### 从Borg到自研数据库：构建行星级基础设施

**Alen:** 也就是数十万台机器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like hundreds of thousands of machines.</p>
</details>

**Gerge:** 是的，在他们的数据中心里。几个月前，《The Pragmatic Engineer》上有一篇来自一位 SRE 的文章，我想说，他谈到他 2004 年在谷歌开始做 SRE 的时候，他刚开始工作时就已经有数十万台机器了。而那个时候，大型数据中心只有几百台，或者最多几千台机器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. In their data centers. Yeah. There was a pragmatic engineer post from an SRE a couple months ago I want to say where he talks about he started at Google doing SRE in 2004 I think it was and already when he started there were hundreds of thousands of machines and this was during a time when large data centers had hundreds or maybe thousands of machines.</p>
</details>

**Alen:** 是的，这个人是 Dave O'Connor，他告诉我，他们在爱尔兰参观了一个数据中心，因为他们想了解其运作方式，并看看是否能使用它们。最终他们发现不行，但他们问：“你们如何管理你们的机器？”对方回答说：“哦，我们只是手动更新。”他们问有多少台机器，对方说大概一千台左右，他们就手动操作。然后谷歌的人告诉他们：“嗯，这对我们来说行不通，因为我们计划至少有一万台机器，很快可能要到三万台。”对方的反应是：“你们在说什么？”因为当时最先进的数据中心解决方案，其雄心也远不及谷歌。这就是为什么即使在早期，他们也知道不能走寻常路，必须想办法构建新的自动化和工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. This is Dave O'Connor and he was telling me that I think in Ireland they visited a data center cuz they wanted to see how they worked and they wanted to see if they could use them and in the end they figured out they couldn't but they asked like okay how do you manage your your machines and they were like oh we just do manual updates and they're like how many machines do you have and I think they had like maybe a thousand or so and they just did manually and then they were telling them like well that wouldn't really work for us cuz we're planning to have at least 10,000 machines but maybe 30 soon. And they were like what are you guys talking about? Because of this, the most advanced solutions in the case of data centers they didn't have the ambitions that Google had and that's why like even in the early days they knew like okay we cannot do what everyone else is doing we need to figure out build new automation build new tools.</p>
</details>

**Alen:** 这也正是他们发明网站可靠性工程师（SRE）角色的原因。他们实际上需要软件工程师，这些人后来成为了运营基础设施的专家，这在当时是闻所未闻的。因为在那之前，你有的是 IT 人员，他们知道如何配置 Windows 或 Linux 机器，知道如何打补丁、插拔线缆，确保一切正常，但他们不是软件工程师。因为你为什么要雇一个软件工程师来做这些事呢？所以谷歌做了很多这样的事情，显然，他们最大的内部工具之一，我们提到的 **Borg**（一个大规模集群管理系统，是 Kubernetes 的前身），就源于此。它是一个编排系统，而 **Kubernetes**（一个开源的容器编排系统） 正是受其启发。事实上，谷歌基于从 Borg 学到的经验创造了 Kubernetes，并将其开源，而内部他们仍然使用 Borg。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's actually how they invented the site reliability engineer role they actually needed software engineers who now became experts at like operating infrastructure which was unheard of. Because until then you had the IT guys who knew how to configure, you know, Windows machines or Linux machines and knew how to patch them, how to plug in, how to, you know, make sure like do all these things, but they were not software engineers cuz why would you hire a software engineer to do that? So like Google did a bunch of these things and that's where obviously one of their biggest internal tools which we mentioned Borg comes from, which is an orchestration system and Kubernetes was inspired by this. In fact, Google created Kubernetes based on lessons learned from Borg and they released it in open source and internally they still use Borg.</p>
</details>

**Gerge:** 是的，完全正确。所以 Borg 基本上是一个集群操作系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, exactly. So, Borg is basically it's a cluster operating system.</p>
</details>

**Alen:** 然后，你知道谷歌内部版的 Datadog 叫什么吗？Borgmon。哦，还有一个叫 Monarch 的。我不确定哪个是哪个，但他们有自己的监控系统，与 Borg 集成在一起。这也是为什么人们会问“为什么谷歌不直接迁移到 Kubernetes？”的原因之一，因为那样他们就需要替换掉这些东西。哦，他们还有一个叫 Third Eye 的东西，基本上就是外部世界的 Sentry，它也很好地集成到了所有这些系统中，拥有所有的钩子和 API。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you know do you know what Google's kind of internal version of Datadog is called? Borgmon. Oh, yeah. There's also one called Monarch. I'm not sure which one is which, but yeah. So, they have this monitoring which is like integrated into Borg. And this is one of the reasons by the way Google people are like oh why doesn't Google just move to Kubernetes and well I mean then they would need to replace some of these things. Oh and then they have this thing called Third Eye which is their which is pretty much what Sentry is from the outside world and that's also nicely integrated into all of these systems. It's kind of like got all the hooks got all the APIs.</p>
</details>

**Gerge:** 是的，整个技术栈都是定制的。谷歌技术栈里没有一样东西不是定制的。所以，Borg，他们称之为集群操作系统，是他们最早构建的东西之一，因为他们意识到需要巨大的数据中心，需要的机器比任何人都多。为了以自动化而非手动的方式运营，他们需要什么？因为手动是无法扩展的。谷歌的数据中心一直都是由谷歌从头开始构建的，并以适应其规模的方式设计。因为从一开始就是行星级的搜索，他们从未需要考虑“最小需求的数据中心是什么样的”，因为他们的需求从一开始就非常巨大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Like all of the tech stack is custom. Like there's nothing that's not custom in the Google tech stack. So, Borg, they call it a cluster operating system and it's yeah like one of the first things they built is like realizing okay we need huge data centers we need so many more machines than anyone's ever had. What do we need in order to operate this in a way that is automated and not manual because that's not going to scale. The Google data centers are and always were built kind of like from the ground up by Google and designed in ways that would fit their scale. Like because it was like planet scale search from the get-go, they never had to think about, you know, like, oh, what's the data center for like the smallest need because their need was so huge from the get-go.</p>
</details>

**Alen:** 在谷歌之前，运营服务器的方式是购买那些非常昂贵的 Sun 机架，基本上就是大型机，超级强大的机器。而谷歌的创新在于，他们开始只使用普通的个人电脑。最初，他们真的只是把简单的个人电脑组装起来，包括主板、CPU、硬盘，然后把它们放进数据中心。人们觉得这太傻了。但他们说：“看，我们用更少的钱获得了更好的价值。与其花 2000 美元买一台机器，我们可以用 100 美元买 20 台，吞吐量能达到三倍。”然后他们开始更认真地对待这件事，并开始制造自己的服务器，这些服务器任何人都买不到，但他们的内部数据中心就是这样构建的。如今的谷歌云也是这样构建的，但有趣的是，谷歌自己的基础设施可能比谷歌云还要大。但正如你所说，他们构建了比当时任何人所需要的都更大规模的计算能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, and there was this interesting thing, right, where until Google, the way to operate servers was to buy these really expensive Sun racks, the kind of like, you know, like mainframes pretty much, super powerful machines. And Google also had this innovation where they started to just use plain old PCs initially literally just took simple PCs that they put together on like the main frame, the CPU, the hard drive, and they just put it together and put it in data center. And people were like, "What? That's so silly." But they're like, "Look, we're getting a lot better value for a buck instead of a $2,000 machine. We can have 20 $100 machines and we can have throughput of three times." And then they started to take this a bit more seriously and started to manufacture their own servers, which cannot be bought by anyone, but that's how their internal data centers are built. Google Cloud these days is built like that as well, but Google's own infrastructure is probably bigger than Google Cloud, interesting enough. But as you just said, they built a larger scale compute than anyone needed at the time.</p>
</details>

**Gerge:** 是的，完全正确。他们有雄心壮志，知道自己想做多大，想提供什么样的支持，所以他们觉得“这就是我们需要做的”。也许也是因为他们采用 SRE 的方法来构建所有这些东西，并且这种方法深深植根于软件，所以他们很早就做了一件事：他们决定不追求“构建永不失效的完美机器”，而是意识到“在我们的规模下，机器无论如何都会失效”。所以他们就用便宜、易于更换的东西，并在其上构建了出色的工具，使操作变得轻松便捷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Exactly. And like with their ambitions and knowing how big they wanted to be and the kind of support they wanted to provide, it's like well this is what we need to do. I think maybe also because of the SRE approach to building out all of this stuff and because that was so anchored in software, they did a thing quite early on where they decided to rather than going for like let's build the perfect machines that will never fail, they realized like at our scale, they're going to fail anyway. So yeah, let's just go with the cheap stuff that's easy to replace and just build amazing tooling on top of it that makes it nice and easy for us to operate on.</p>
</details>

**Gerge:** 今天，云计算显然是现状，是每个人都在做的事情。但在当时，他们在 2003、2004 年就这么做了，这是闻所未闻的。可能任何听说过的人都会说：“你们在干什么？为什么会这么做？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like yeah, today it's obviously like cloud computing is it's the status quo. It's what everyone's doing. But at the time again like they did this in 2003 2004 this was unheard of and probably anyone who heard of it was like what are you doing? Why are you why would you do that?</p>
</details>

**Alen:** 嗯，杰夫·贝索斯可能听说过，因为他是投资者，而且你知道，AWS 后来也推出了他们的公有云。但这确实是闻所未闻的。我认为这可以追溯到谷歌当时被看作非常奇怪，甚至有点神秘，因为他们的招聘方式。当时大多数科技公司的招聘方式是问你编程问题，比如他们招一个 Java 程序员，就会问你 Java 的内存分配如何工作之类的问题，或者设计模式。而谷歌会问脑筋急转弯，他们著名的问题是“一个货车里能装下多少个高尔夫球？”。据说他们最初这么做，几年后就停止了，是因为他们想要能跳出思维定势的人，因为他们知道自己不想做别人正在做的事，不想复制雅虎或 MySpace 的做法。他们想找到那些拒绝传统思维但仍然聪明的人，而脑筋急转弯被认为是实现这一目标的方式。几年后他们停止了这种做法，因为一旦这种方式变得主流，人们就开始为此进行优化，结果发现他们也拒绝了很多聪明但只是不擅长脑筋急转弯的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, Jeff Bezos might have heard of it because he was an investor and you know, like AWS later launched their public cloud, but it was unheard of. I think this goes back to like Google was seen very kind of weird a little bit or like almost mythical for how they hired cuz like the way most tech companies would hire at the time is they would ask you programming questions of like I don't know they hired a Java programmer they would ask you all right how does you know the memory allocation work in Java or stuff like that or like if you know they would ask about design patterns or stuff like that and Google like would ask brain teasers they would famously ask like okay how many golf balls can you fit in a van or something like that and apparently the reason they did this initially and they stopped doing it after like several years but they wanted people who can think outside the box because they knew that they didn't want to do what everyone else was doing they didn't want to copy what Yahoo was doing or what MySpace or any they wanted to get the people who rejected you know the conventional thinking and they were still smart and brain teasers were seen as a way to do this. They stopped this several years later because once this kind of went mainstream, you know, people started to optimize for it and it turned out that they also rejected people who were smart but they were just not good at brain teasers.</p>
</details>

**Alen:** 大多数公司会根据他们使用的编程语言来招聘，比如当时的 ColdFusion，或者 Java、Python 等等。而谷歌直到今天都不在乎你用什么语言。他们只希望你在编程练习中用任何语言写代码，有时如果是算法面试，你可以用任何语言。这是他们喜欢算法面试的原因之一：不需要特定的语言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Most companies hire for the programming language that they were using made up maybe that was like cold fusion back in the day or like again Java or Python or whatever. And Google to this day doesn't care about what language you're using. They just want you to use and write code with in a coding exercise oftentimes you can use any language or sometimes you use code if it's an algorithmical interview. This was one of the reasons they love algorithmical interviews. No specific language required.</p>
</details>

**Gerge:** 是的，我想这也说得通，因为谷歌的技术栈太独特了。无论如何，你用什么语言都不重要。他们需要你有开阔的视野，灵活变通，解决问题，因为在谷歌，你解决问题的方式本来就不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And I guess that makes sense as well because the Google tech stack is so unique. It doesn't like it won't matter anyway. like they need you to have open horizons simply flexible and solve problems because you're going to solve them differently at Google anyway.</p>
</details>

**Gerge:** 回到定制化的话题，当他们建立这些数据中心时，他们也选择不使用普通的网络栈和交换机等。他们也是从头开始构建的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Going back and speaking of just how custom it is, the fact that like when they built out these data centers, they also like they couldn't use or didn't want to use opted away from using normal like networking stacks and switchboards and stuff. They built that from scale as well. Yeah. Why?</p>
</details>

**Alen:** 他们有一个叫做 B4 的东西，是他们的骨干网络基础设施，拥有惊人的带宽。这是他们构建出来让数据中心和海量机器能够相互通信的系统，也是 Borg 能够协调任务分配的基础。他们也选择不使用标准的 **DNS**（Domain Name System: 域名系统，用于将域名转换为IP地址），因为他们开发了一个叫做 Borg 命名服务（BNS）的东西。这是因为在那个时候，通常你会有特定的 IP 地址和端口。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so they have something called B4 which is like the backbone networking infrastructure that has ridiculous bandwidth and that's the thing that their like they built out so that their data centers and the ridiculous scale of of the machines could talk to each other and uh that Borg was able to coordinate uh you know job allocations. They also chose not to do DNS the standard way because uh they developed something called Borg naming service. So the BNS um and that's because obviously like at that point and very often you will you know have a specific IP address and specific ports.</p>
</details>

**Gerge:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Alen:** 但 Borg 从一开始就非常灵活，任何东西都可以在任何地方运行。所以他们想要一个比 IP 地址和端口更高的抽象层。Borg 所做的是跨机器分配像任务、内存和 CPU 这样的资源。所以机器的实际 IP 地址必须是动态的，因为他们不是分配特定的机器，而是更广泛的，更像是集群级别的，而一个集群就是一排排的机器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but Borg from the get-go was very like well anything can run anywhere. So they wanted a level high of abstraction higher than that. What Borg does is that they allocate resources for like jobs and memory and CPUs like across machines. So the actual IP address to the machines like it has to happen fluidly because they don't allocate specific machines. It's broader than that. It's more like cluster level and a cluster is like racks of machines.</p>
</details>

**Gerge:** 所以他们需要那种抽象，需要一个超越“什么是机架，什么是集群”这种层面的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mhm. So they they needed that that abstraction. They need a next level outside of like you know what's a rack, what's a cluster, that kind of stuff.</p>
</details>

**Alen:** 完全正确。因为他们有太多的机器，所以哪一台机器并不重要。而且机器，尤其是在早期，是廉价且易于更换的。所以他们觉得“一台机器会坏掉，我们不在乎，另一台会接替它”。同样，他们在 2003 年构建了谷歌文件系统（GFS），或者说在 2003 年公开讨论了它，这也是必要的。那是一个巨大的去中心化文件系统。在 2003 年，他们已经有数百 TB 的存储空间，分布在数千个磁盘和机器上，可供数百个客户端访问。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly. Because it's like well we have so many machines that it doesn't matter and the machines again like because they were especially in the beginning kind of like cheap and easy. It's like we don't like a machine will fail. We don't care. We'll like another machine will come in and take over. And similarly they built out the Google file system back in 2003 or well they talked about it in 2003 um which was also necessary because of that. So like a huge decentralized uh file system like in 2003 they had hundreds of terabytes of storage across thousands of discs and machines accessible by hundreds of clients.</p>
</details>

**Alen:** 它有一个存储栈，底层是实际的物理硬盘，然后上面有一个叫做 D 的抽象层，代表磁盘，但这个“磁盘”可以是物理磁盘或其他东西。再往上是谷歌文件系统，后来被他们现在使用的 Colossus 所取代。在此之上，他们构建了所有这些类似数据库的服务。比如 BigTable、Spanner，不仅仅是单一的数据库，因为这显然取决于数据库的用途，你在为什么优化？所以他们在内部有很多不同的变量和数据库系统，他们的一些数据中心更适合特定类型的数据存储和数据库。BigTable 更像是 **NoSQL**（Not Only SQL: 非关系型数据库），它是稀疏的、分布式的、持久的。而 Spanner 则提供更像 SQL 的接口，对于全球范围内真正的一致性更为重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It had this like basically a storage stack where you had discs like actual physical hard drives and then an abstraction called D above that for a disk but like the disc could be either a disk or something else. Uh and then you had the like the Google file system on top of that which was later preceded by Colossus which is what they use now. And then on top of that they built out all of these like database like services. So things like big table, like spanner, like there's not just like the one database because it depends obviously on the uses of the database like what are you optimizing for? And so internally they have lots of different variables and like kind of database systems as well where they will have some of their data centers are like more specifically for you know better for certain type of data storage and certain types of database you know big table is more nosql it's sparse it's distributed it's persistent spanner you have a more SQL like interface case it's more important for like real consistency across the world.</p>
</details>

**Gerge:** 是的，所以权衡之处在于，它是写密集型的，还是读密集型的？你存储的是什么样的数据？它需要多结构化？你希望如何访问它？这些都是他们拥有多种数据库的原因之间的差异。然后正如你所说，还有分布的问题。你是只想把它放在一台机器上，如果它坏了也完全没关系，还是你想要保证它是分布式的？然后你是否需要一致性，即你一写入就立即可用，但这会有延迟，或者你希望最小化延迟，或者你不在乎它是否最终一致，然后你就可以写入。所以，“为什么谷歌有这么多数据库？”是一个好问题。我想这可以追溯到“为什么会有这么多数据库？”我们刚刚在《The Pragmatic Engineer》的调查中看到，人们使用的数据库有 50 多种，甚至更多，而且它们都是由经验丰富的团队构建的。这是一个有趣的附带问题：为什么有这么多数据库？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So I guess the trade-offs are like is it like write intensive, is it read intensive, what kind of data are you storing, like how structured does it need to be, how are you wanting to access it, right? So these are all the differences between the reasons they they have and then like as you said the distribution like do you just want it on one machine and if it dies totally fine or you want guaranteed that it's distributed then do you want consistency that immediately as soon as you write is there but then there's a latency or then you want to minimize that or you don't care if it's eventually consistent and then you can write. So like there's a good question of like why does Google have so many databases and I guess this go back to like why are there so many databases? There's so many databases like we just did on the pragmatic engineer survey. There were so many like 50 plus or or even more that people use and they're all like built by like actually experienced teams. That that's kind of an interesting interesting side question. Why so many databases?</p>
</details>

**Gerge:** 是的，数据库为不同的事物进行优化，因此它们有不同的用例。但谷歌从很早开始就涉足多个领域，他们不只专注于搜索这一个产品。他们推出了 Gmail，其早期的卖点是内置垃圾邮件过滤器和 1GB 的存储空间，这在当时也是闻所未闻的。然后他们扩展到 Google Calendar、Google Docs。他们还进行了一些非常重大和明智的收购，比如 YouTube、Android。他们拥有所需的技术基础设施。然后他们开始获得所有这些新的用例，基本上是在这个技术栈之上运营的公司。所以他们有能力、有专业知识、有数据中心和基础设施来为自己的产品构建所有这些不同的服务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, like databases optimize for different things and so there's different use cases for them. But one of the things with Google from again fairly early on, Google branched out and like they didn't just focus on the one search product, you know, they built out Gmail which was basically email with built-in spam filters was like the pitch from early on as well as a gigabyte of storage which was also unheard of at the time. Uh and then they branched out into you know Google calendar, Google Docs. Um they did some really big and smart acquisitions like YouTube, uh Android, you know, they they had the in tech infrastructure that they had. Um and then they started getting all of these new use cases, uh basically companies operating on top of this stack. And so they were able like had the needs, had the expertise and had the data centers and the infrastructure to build out all of these different offerings for their own products.</p>
</details>

### 代码开发与项目管理的全定制系统

**Alen:** 除了基础设施，谷歌还有很多其他的定制系统。我只举几个例子，因为深入探讨每一个可能会没完没了。他们不用 GitHub 进行源代码控制，而是用一个叫做 Piper 的东西，这是他们的版本控制系统。他们不用拉取请求（pull requests），而是用一个叫做 CL（Change List）的东西。他们的代码审查工具叫做 Critique，它与他们拥有的许多其他工具集成在一起，现在内置了很多 AI 功能，有点像 GitHub 的拉取请求审查。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then outside of just infrastructure, like Google has so many other custom systems. I'll just name a few cuz I think like it's we could take forever in going into them, but instead of instead of GitHub, you know, for source control, they use Piper, something called Piper. That's their version control system. Instead of pull requests they have this thing called CL change list. Their code review tools called critique and it's integrated with so many other tools that they have a lot of AI function now built into it. It's a little bit like GitHub's pull request review.</p>
</details>

**Alen:** Code Search 是一个非常著名的工具，它启发了 Sourcegraph。你可以搜索谷歌所有的代码库。他们确实有一个 **monorepo**（单一代码库：将所有项目的代码存储在同一个版本控制库中的策略），但代码量惊人，而且搜索速度非常快。毕竟是一家搜索公司，你不会期望更少。但我记得，当我与 Sourcegraph 的创始人交谈时，他们说 Code Search 的某些部分曾经比 Sourcegraph 自己的产品还要好。我想现在 Sourcegraph 正在追赶上来，但我仍然记得我第一次在 Uber 使用 Sourcegraph 时的感觉，它太快了，我觉得“哇，这太酷了”。但显然，这在谷歌是常态，而大多数公司从未有过这样的工具，除非他们尝试自己构建，但为自己构建可能并不值得。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Code search has been a very kind of famous tool that inspires source graph so you can search all of Google's repositories and again they do have a monorepo but they have incredible amounts of code and it's rapid. It's again it's from a search company you wouldn't expect anything less but apparently for a long time when I talk with source graph founders they were saying that code search was they had parts that were better than source graph's own offering. I think now source graph is catching up but I still remember when I first used source graph at Uber and it was just so fast and I was like wow this is so cool to use but apparently that's the norm at Google and most companies never had this until you know maybe they tried to build it for themselves but it wouldn't be worth it building for your own.</p>
</details>

**Gerge:** 是的，这很大程度上源于他们拥有这个单一代码库。他们在 2015 年首次公开谈论它，并开始发布相关数据。早在 2015 年，这个单一代码库里就已经有 10 亿个文件，20 亿行源代码，内容量达到 86 TB，每天有 4 万次提交。有趣的是，他们能够构建并运营这个单一代码库的原因之一，也是因为他们将其建立在已有的谷歌基础设施之上，也就是他们的数据中心和网络。他们还构建了自己的构建工具 Blaze。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And a lot of that actually comes from the fact that they have this monorepo. So the monorepo, they talked about it publicly first in like 2015. They started publishing numbers on it. Back in 2015, there were already a billion files in the monorepo. Two billion lines of source code. It was 86 terabytes of content with 40,000 commits every single day. It's interesting because one of the reasons why they were able to build the monorepo and operate it the way they did was also because they built it on the Google infrastructure that they already have. So the data centers and networking they built out their build tool blaze.</p>
</details>

**Alen:** Blaze，他们开源了一个叫做 Bazel 的东西，它足够相似，也同样非常快、非常好用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Blaze which they open source a thing called Bazel which is similar enough which is also really really fast and really good.</p>
</details>

**Gerge:** 是的，它是一个分布式的构建系统，是他们构建方式的核心。它非常分布式，速度非常快，支撑了单一代码库达到如此惊人的规模。但它也深深地融入了他们的开发过程本身，实际上是在云端进行的。大多数谷歌员工的机器上不会有本地代码，也从来没有过。这是一个叫做“云端客户端”（Clients in the Cloud）或 Citsy 的系统，是他们的编程方式。不是在设备上，而是连接到云端的客户端。现在看来，他们主要是通过一个叫做 Cider 的工具来做这件事，这实际上是 VS Code 的一个分支。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And it's you know this distributed build system that yeah it's kind of core of how they build. It's very distributed very quickly. It enables the monorepo in the ridiculous scale it's at, but it's also deeply ingrained into how they do the development itself, which is very in the cloud actually. Like most Googlers will not have code locally on their machines and kind of haven't ever. It's kind of a system called clients in the cloud or Citsy which is the way they're programming which is yeah like not on device but you know connect to clients in the cloud. These days it seems like they mostly do that through a tool called Cider which is actually a fork of VS Code.</p>
</details>

**Alen:** 是的，因为所有东西都是定制的，所以所有东西也都紧密相连。Cider 与他们用于代码审查的 Critique 深度集成，而 Critique 又与他们的 CI 测试自动化程序深度集成。他们有像 Trycorder 这样的工具，可以运行测试、静态分析等。说到快速，他们的发布自动化工具之一就叫做 Rapid。Code Search 也集成在所有这些工具中，显然，他们必须构建 Code Search，因为单一代码库太庞大了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, yeah. Again like because everything is custom everything is also so connected. So like Cider is deeply integrated into Critique that they use for code reviews which is deeply integrated to their CI tap test automation program. They have tools like Trycorder which runs tests static analysis all that stuff. They actually speaking of rapid they actually have their release automation tool is called rapid or one of them rather. Code search is integrated into all of that as well and obviously code search is you know like they had to build that out because the monorepo was so huge.</p>
</details>

**Gerge:** 谈到协同工作，当你想起谷歌用什么来进行项目管理时，他们版本的 Jira 或 Linear，他们有 Buganizer。又是一个定制工具。他们还有一个叫做 Taskflow 的工具，是 Buganizer 之上的一个用户界面，用于看板和其他管理工具。然后他们有 GUTS，即谷歌通用票务系统，更多是用于技术相关的技术支持，当你开一个工单时，你可以把它想象成 Zendesk 或 Jira 工单，或者任何票务系统，但有趣的是，他们连这个也为自己构建了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Speaking of like working together or how they work like you know when you think of Google's like what they use for project management you know their kind of version of Jira's linear they have buganizer. Again a custom tool and they have this tool called task flow which is a UI on top of buganizer for boards kanban and other kind of management tooling and then they have guts which is Google universal ticketing system it's was more for for tech related tech support when you open like a ticket you know you can think of it like zendesk or like juro tickets or or just any ticketing system but it's so interesting how they even built that for themselves as well.</p>
</details>

**Gerge:** 但这也说得通，因为我想当你的基础设施如此独特时，你就需要实现这些功能，那么这些功能从何而来呢？实际上，我认为 Buganizer 特别是与 Cider 和 Critique 的集成，因为所有东西都是定制的，所以所有东西也都是为彼此量身定做的。所以使用 Buganizer，你不仅可以报告问题，还可以在你已经身处的环境中立即进行小的修复，因为它使用的是相同的基础设施。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But it's also it makes sense because I guess when you have the infrastructure so unique it's like well you need to implement this so where does that goes come in and actually I think buganizer in particular is also probably the integration with cider and critique and but like because everything is so custom everything is like made for each other as well. So using buganizer, you know, you can report but also like fix do small fixes like immediately in the same environment that you're already in because it's using the same infrastructure.</p>
</details>

### 在谷歌工作是怎样的体验

**Alen:** 现在，我从一位长期的谷歌工程师或高管那里听到的一个有趣的事情是，谷歌是一个“技术孤岛”。谷歌就像一个技术孤岛，世界其他地方使用的是相当标准化的东西，比如大多数初创公司会使用 AWS 的工具，容器会用 Kubernetes，前端框架会用 React，数据库会用 PostgreSQL 或其他公开可用的东西。但在谷歌，一切都是独立的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Now, one interesting thing about Google that I hear is this kind of tech island. I think longtime Google engineer or executive Urs Hölzle might have said this. Google is a tech island like there's the rest of the world which is using you know pretty standardized things like most startups will be using like AWS tooling or for containers it'll be kubernetes or for front-end frameworks with like react or and for database it'll be postgress or something that is out there but for Google everything is separate.</p>
</details>

**Alen:** 即使在谷歌内部，也有人认识到这可能是一个问题，即他们如此独特，以至于无法利用其他正在发展的开源项目。而且，新员工的入职成本非常高，他们必须抛弃所有已有的知识。在某种程度上，如果知道在那里使用的任何东西对下一份工作都没有用，去谷歌工作可能就不那么吸引人了。但我认为这种情况没有改变。谷歌可能对此有所讨论，但也许也无法改变太多，因为这并非始于谷歌说“不，我们需要做些不同的事”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there was this recognition even inside Google that this could be a problem that they're so unique that they cannot take advantage of other open-source projects for example developing but also it's a very expensive to on board it's just for new joiners you know they have to throw away every knowledge and at some point it might also be maybe just not as tempting to go work at Google if you know that whatever you use there it's not going to be useful for your next job but I don't think this has changed I think Google is like nah you know like they probably talked a little bit about it but and maybe it cannot even change that much because it didn't start because Google it didn't feel doesn't feel to me that it started because Google said like no we need to do something different.</p>
</details>

**Gerge:** 是的，我觉得更像是我们一直在讨论的，他们从一开始就不得不做一些不同的事情。我认为当你最终陷入一种情况，基本上你从头开始发明了自己的一整套互联网或计算机之间的通信方式，并在此之上构建东西，我甚至不知道他们是否有可能转换。所以当他们开始做 GCP，即谷歌云平台时，他们很多时候称之为“外部化”。他们是在外部化，而不是开源，因为技术栈仍然是他们自己的，但他们提供了可以被其他公司使用的服务。Kubernetes 是 Borg 的外部化版本，它们不完全相同，但深受其启发，架构和功能集略有不同，因为它不必只为谷歌服务。同样的情况也适用于 BigTable、Spanner，基本上谷歌云平台中的所有东西都是如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I think it's more like we've been talking about like they kind of had to do something different from the get-go. And I think when you end up in a situation where basically you've invented your entire own kind of internet or like way of communicating across computers like from the ground up and you build out stuff on top of that like yeah I don't know even know if it's possible for them to move over and that's actually so when they started GCP the Google cloud platform you know a lot of that is what they refer to as externalizing. So they're externalizing. They're not open sourcing because it's still like they're on their own tech stack, but they are externalizing. So making offers that, you know, can be used by other companies. So Kubernetes is the externalized version of Borg and it's not the same, but it's, you know, heavily inspired by it. Like slightly different architecture, slightly different feature set because it doesn't have to cater to to just Google. And the same for you know big table spanner yeah basically everything in the in the Google cloud platform.</p>
</details>

**Gerge:** 还要提一下 **gRPC**（一种高性能的远程过程调用框架），它是一种跨服务通信的方式，也是外部化的。在内部，它被称为 Stubby，是他们跨服务通信的方式。他们使用 **Protobuf**（Protocol Buffers: 一种语言无关、平台无关、可扩展的序列化结构化数据的方法）作为消息格式，而 gRPC 是他们实现通信的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And actually also to mention gRPC which is a way of communicating across services that is something that is also externalized. Internally it's called stubby and that is the way that they communicate across services and it's yeah it's the internalized gRPC they use protobuff as like the messages for how to communicate across services and then gRPC is the way they do that.</p>
</details>

**Alen:** 是的，所有这些内部工具，我经常从去谷歌的人那里听到的反馈是，他们对情况感到非常惊讶。当然，在那里待了足够久的人已经习惯了，当他们离开时，常常会对其他公司拥有的工具之少感到震惊。例如，如果你职业生涯的大部分时间都在谷歌度过，然后转到任何其他公司，谷歌员工通常会寻找与谷歌工具等效的东西，而这些东西可能存在，也可能不存在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. All all this internal tooling I think like for a feedback I often hear from people going to Google is how they're just really surprised at how it is. And of course people who've been there for long enough they gotten used to it when they go outside they're often really kind of taken aback by how little other companies have it. For example, if you spend most of your career at Google and move to any other company, like often Googlers will look for the equivalent of like whatever Google tool had at this company which might or might not exist.</p>
</details>

**Alen:** 有一个人，NeetCode，他的名字是 Namadiv Singh，他创作了一些最受欢迎的编程解题方案。他在谷歌工作了大约一年，他做了一个关于谷歌最糟糕的事情之一的视频，他说内部工具太多了。我引用他的话：“谷歌有这个问题，他们几乎为所有事情都有一个内部工具。但有时这些内部工具并没有庞大的团队支持。有时只是一个人为了升职而开发一个内部工具，也许他们升职后就不再维护那个工具了。现在你被迫使用它，却没人知道如何修复 bug。你必须自己去读代码，自己修复，这并不好玩，没人喜欢这样。”他还说：“我宁愿一开始就没有这个内部工具，因为至少我可以从头开始解决问题，但现在它存在了，我就必须用它。”所以，我认为这可能会失控，听起来在谷歌有时确实会失控。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But there was this person NeetCode as his name is Namadiv Singh who well he creates one of the most popular coding solutions. He worked at Google for I think about a year and he said he did a video about the one of the worst things about Google and he said how it's too many internal tools and what he said is I'm quoting him. "Google has this problem that they have an internal tool for literally everything. So and sometimes all those internal tools don't have massive teams supporting them. Sometimes it's just one guy working on an internal tool trying to get promoted that maybe they get promoted and then they stop maintaining that tool and now you're used to forced to use it and then nobody knows how to fix a bug. You have to go and read the code and you have to fix it yourselves and that's not fun. No one enjoys that." And then he said "I would rather not have this internal tool in the first place because at least I can just solve the problem from scratch but now that is there I need to use this internal tool." So I think it can get out of hand and sounds like a Google sometimes gets out of hand.</p>
</details>

**Alen:** 他特别指出，他的问题不在于像 Borg 这样维护良好、编写精良的大型工具，而在于这种现象无处不在。据我所知，正因为如此，谷歌一直有大量的迁移工作在进行，尤其是在晋升的驱动下，我们稍后会谈到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And he was specifically saying his problem is not with the big tools like Borg that are really well-maintained really well written but there's it's just everywhere. So it's and because of this as I understand you know Google has so many migrations going on all the time especially you know promotions come into play which we're going to talk about shortly.</p>
</details>

### 在谷歌工作：福利、薪酬与文化

**Alen:** 让我们谈谈谷歌是如何运作的。首先我想到的，当人们想到谷歌时，即使是工程师，也会想到福利。如果你去拜访在谷歌的朋友，这一点尤其突出，对吧？我想到了微型厨房。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's talk about how Google works. Now the first thing I kind of think about like when I you know people think like oh what do you know about Google even as engineers it's it's about the perks right like they're they're just so known for for the perks especially if you visit a friend at Google I mean it's the thing that stands out right I think the the micro kitchens.</p>
</details>

**Gerge:** 是的，总的来说，谷歌的办公室……我也去过其他大型科技公司的办公室，那种俏皮和古怪的风格绝对不是谷歌独有的，但同时它又是谷歌独有的。如果你有机会去参观一个谷歌办公室，尤其是较大的那几个，一定要去。那会是一段有趣的时光。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah I mean the Google offices in general are I mean I've been to other big tech offices as well and like I mean the the kind of playfulness and quirkiness is definitely not unique to Google, but it's also unique to Google. If you have the chance to go visit a Google office, especially one of the bigger ones, do it. It's a fun time.</p>
</details>

**Alen:** 是的，员工可以带访客进去。你可以享用免费的午餐、早餐或者晚餐。而且，装修风格很独特。我去过很多办公室，比如 Uber、Meta、Spotify 等，它们都有很酷的装修，但谷歌是无处不在的。最让我想起谷歌的是 Facebook 以前在门洛帕克的办公室，当时他们还投入巨资，有很多很酷的东西。那是我见过唯一能与之媲美的地方，我敢肯定他们部分模仿了谷歌，希望能吸引到类似的人才。但谷歌的装修确实独特，每个办公室都不同。比如在阿姆斯特丹，办公室中间有一辆货车，那是一个会议室，据说因为太热没人用，但看起来真的很酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, they people can bring in visitors. You get like free lunch or breakfast or whatever dinner probably as well. And I mean, the decor is unique like you know like I've been to many offices, right? Like obviously what worked at Uber but went to Meta, Spotify, etc. like and they all have like cool decor at places, but Google is everywhere. Like the thing that reminds me the most of of Google is the old Facebook office back in Menlo Park back when it was like still very very like heavily invested. There was like such cool cool things. That was the only thing that came close and I'm pretty sure they kind of modeled it partially after Google to wanting to hire, you know, like similar people. But yeah, like really unique decor every office like I think in Amsterdam there's a van in the middle of the office which is a meeting room which apparently people don't use because it's too hot but it looks really cool and and that's just one of the many decors.</p>
</details>

**Gerge:** 是的，它们非常古怪，基于地理位置和主题。微型厨房基本上是办公室里一个可以免费获取零食、咖啡和茶的地方，通常也是一个不错的休息室，可以社交和闲逛。它们充满了 个性。在苏黎世的办公室，有一个带有秘密书柜门的微型厨房。你会置身于一个看起来像图书馆的空间，里面有巨大的书柜，其中一个可以打开，通向后面的一个密室。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And and those are very they're quirky. They're location based. They're kind of theme based. So yeah, the micro kitchens, a micro kitchen is basically like a space in the office where you can get free snacks and coffee and tea and and just like often just like a nice little like chill break room where you can socialize and hang out with people. Yeah, there's just so much personality to them. In the Zurich office, they have one with a one of those like secret bookcase doors. So, like you'll be in this micro kitchen that looks like a library basically with these huge bookcases and one of them opens up to like a secret room in the back.</p>
</details>

**Gerge:** 2015 年我在伦敦办公室时，他们有很多伦敦电话亭，你可以在里面打个快电话或者开个单人会议。他们还有伦敦巴士，就是一辆伦敦巴士停在办公室里，你可以在里面闲逛。它们真的很有趣，色彩斑斓。谷歌一直都很色彩斑斓，因为他们从早期就在标志中选择了大胆的颜色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When I was in the London office back in 2015, they had you know the London phone boxes. They had tons of those across the offices whereas like you know you can go in and like do a quick call or like a oneperson meeting room. They had London buses, you know, just a London bus just in the office that you could go in and hang out in. They're really fun, very colorful. I mean, Google has always been colorful given that they chose like the bold colors in the logo from early on.</p>
</details>

**Alen:** 福利清单真的很长。它会因地点而异，但通常包括美国的 401k 匹配，这虽然是标配但仍然很慷慨，还有各种津贴，你可以花在很多东西上。通常你可以报销很多东西，旅行通常不需要预算。当然，这些会随着时间和地点变化。以前还有一些历史性的福利，现在可能没有了，比如现场按摩，你可以直接在办公室享受按摩，这在 2000 年代非常有名，还有午睡舱等等。但这些都在不断变化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then like I think the perk the list of perks is really long. I mean it keeps changing per location but there'll be like you know from the usual kind of in the US the 401k matching which is kind of a given but still generous from like all sorts of allowances that you can spend on like a lot of like typically you can expense a bunch of things the travel that you can travel usually don't need a budget. I mean it's changing over time and again this is what I mean by by location. And then there used to be like more historic perks that I don't think exists, but there used to be like on-site massages where you can get like like you know like like masseuse would come in and like you could just get it in the office which was very famous in the like 2000s or so to like the napping pots to some of these things. But these keep changing.</p>
</details>

**Alen:** 但我认为有一件事没有变，那就是最大的福利——薪酬包，简直是“哇”。有一种三级薪酬模型：本地公司、支付本地市场顶薪的公司，以及支付区域市场顶薪的顶级公司。谷歌是一家非常顶级的公司，这意味着他们支付的薪酬可能是其他类似公司为高级软件工程师支付的总薪酬的两到四倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I think one thing that hasn't changed is which is kind of like the biggest perk of all is the compensation package which is just like wow. Like you know there's this trimodal model of of like the local companies that compete locally and companies that like try to pay the top of the local market and companies that pay the top of the regional market that's a top tier. Google is a very top tier company which means that they can pay anywhere from two to four times the compensation so the total compensation that other similar companies would pay let's say for a senior software engineer.</p>
</details>

**Alen:** 具体到数字，在加州硅谷，一名高级软件工程师的年总薪酬可能在 45 万到 50 万美元左右。这包括基本工资、每年归属的可出售股票，以及现金奖金。例如，在加州，高级软件工程师的基本工资可能是 22 万美元，每年股票约 20 万美元，目标奖金约 3.5 万美元。后两者会根据你的表现而变化。在伦敦，总薪酬包大约是 20 万到 25 万英镑。在慕尼黑，大约是 19 万到 22 万欧元。而在苏黎世，会是 30 万到 33 万欧元，这是一个巨大的飞跃。当然，税收和地区差异会有影响。在印度、悉尼等其他地方，他们通常会比任何其他公司出价更高。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And like what this means in terms of numbers is in Silicon Valley of California, a senior software engineer could make around $450,000 to $500,000 per year in total compensation, which means, and this is where it gets interesting, there's a base salary, there's a stock that vests per year that you can sell because it's liquid stock, and then there's a cash bonus. And then this will be something for a senior software engineer in the US like $220,000 in California base salary maybe $200,000 per year in stock and maybe $35,000 in target bonus and these last two they can change based on your performance you could get more you could get less. But for London this whole total compensation package which is not all salary so salary is only one part of it it will be for senior software engineer will be something like 200 to 250,000 pounds. In Munich, it will be somewhere to €190 to €220,000 and in Zurich it will be 300 to €330,000 which is like a big jump again differences in taxes and areas and again for every other location in India and in Sydney etc they will just typically pay more than anyone can offer.</p>
</details>

**Alen:** 在很多方面，谷歌感觉就像一个完美的地方：你可以在最大规模的项目上与聪明的人一起工作，享受惊人的福利，还能拿到丰厚的报酬。相比之下，亚马逊虽然薪酬也很可观，但几乎没有任何福利。他们会说：“你想去团队聚餐？自己付钱。”而在谷歌，这根本不是问题，团队活动当然是公司买单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In many ways, Google feels like this amazing like you get everything. You get to work on the largest scale things with smart people, these amazing perks, and you've been paid a bunch because a company that does pay you pretty well, not this well, but they pay you pretty well is Amazon. They give you a very respectable total compensation with pretty good stock and cash and all that, but then you get nothing. Like there's no perks. There's no nothing. They're like, you know, you want to go out for a team dinner, pay for yourself. Whereas at Google, like this is not even a question. Like, you know, like there will be team events and of course you're not going to pay for it.</p>
</details>

### 薪酬、福利与“天堂级”待命制度

**Alen:** 说到关怀，有一件事让我觉得非常独特，那就是待命制度（on-call）。几乎所有公司，说实话，工程师在谷歌、亚马逊、Meta、微软等公司的薪水都很高，你加入一个团队后，就需要分担团队的待命任务。但在谷歌，待命制度远没有其他公司那么强制或压力大。在其他公司，你加入一个六人团队，可能每六周轮到你一次。如果轮班情况不好，你的夜晚就会被打扰。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And speaking of good care, so like one thing that really kind of struck me as really really unique is on call. Almost every company is like let's be real like engineers are paid really well at Google and similarly well at Amazon, Meta, Microsoft at all the other companies you are expected to when you're on a team you share the on call on your team. Now, in the case of Google, on call is not nearly as enforced or as stressful as at every other company. At every other company, you join like a six person team. You'll probably have a rotation of of every six weeks. It might be a bad rotation. It might be a good rotation. If it's a bad rotation, well, I mean, you know, your nights will be disrupted. Sorry. Until your team gets this stuff together.</p>
</details>

**Alen:** 谷歌有几项措施。首先，他们有一个 SRE 组织，致力于减轻团队的待命痛苦。他们构建工具来帮助解决这个问题，监控团队的负载，并且有一个叫做“辛劳 **SLO**”（Toil Service Level Objectives: 旨在量化和减少工程师重复性、无价值工作的服务水平目标）的东西。他们确保那些 SLO 被违反的团队停止生产性工作，去修复根本问题。所以他们基本上为团队提供了恢复健康的时间，而不是让系统在夜间不断崩溃唤醒你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, Google has a few things. First of all, they have an SRE organization which works really hard to make on call less painful for teams. They build tooling that helps with this. They monitor the load of the teams and they have this thing called toil SLOs, toil service level objectives where they want to make sure that that teams whose SLOs are breached, they stop production work and fix the underlying issues. So they basically provide time for teams to become healthy again and you know not get woken up all the time at night by systems that break which happens a lot actually at some of these other places that again have high expectations similar to Google.</p>
</details>

**Alen:** 另一件有趣的事是，谷歌有待命等级。在大多数公司，即使是大型科技公司，每个团队都只是确保自己的系统正常运行。谷歌则为他们的服务分配等级。一级意味着一个警报需要在 5 分钟内被确认，二级是 30 分钟，三级是尽力而为。你可以想象，三级是内部服务，一级是重要服务。然后他们会相应地为待命支付报酬。如果你的团队负责一级服务并且你在待命，你会获得正常工资的 66%。他们为待命支付非常丰厚的报酬，同时限制待命时间。你每个季度不能待命超过两周，这比其他公司要少。这简直令人难以置信，谷歌做了所有这些事：他们付给工程师行业顶尖的薪水，提供所有这些福利，然后还减轻他们的待命负担。这简直是工程师的天堂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then another interesting thing that Google has this thing called on call tiers. So at most companies even at big tech every team just makes sure their systems are up. Google assigns tiers to their services. Tier one means that a page that comes it needs to be acknowledged in 5 minutes, tier 2 in 30 minutes and tier three is best effort. So you can imagine tier three is internal services, tier one is important services, but then they pay for the on call accordingly. So they say if your team owns a tier one service and you're on call, you get 66% of your normal salary. They do a bunch of composite they pay really well for being on call and then they limit time spent on call at the same time. You cannot go for on call for more than two weeks per quarter which is going to less than other companies. So it just like it it like mind-blown like Google all does all these things. They pay engineers like best in the industry or close to best in the industry. They give all these perks and then they relieve them from on call. So it's almost like it's it's amazing to be and then not just relieve but they actively help and mandate teams to make their systems better. So this is like paradise for an engineer.</p>
</details>

### 角色、层级与独特的“技术主管经理”

**Gerge:** 如果你在谷歌工作，你很可能是一名软件工程师（SWE），这是谷歌的主要角色。但谷歌也有很多其他类型的角色和细分角色。SRE 显然是较大的细分角色之一，但还有很多其他较小的职业阶梯和角色，取决于你在组织的哪个部分，以及你从事的产品或产品领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you work at Google, you'll likely be an SWE, the software engineer. That's the big role that Google has. Um but Google also has tons of like there are a lot of other types of roles and niche roles as well. Like SRE is obviously one of the bigger niche ones that they have. Uh but there's also quite a lot of other smaller ladders that and and roles that they have depending on you know like some roles are more prevalent in some parts of the organization and with some products or product areas.</p>
</details>

**Gerge:** 所以你会有像开发者关系（DevRel）、用户体验工程师（UX engineers）这样的职位，他们更像是前端工程师，更多地与设计实现打交道，还有一个从更像前端工程师到原型设计师的职业阶梯。他们有研究科学家，在 SRE 内部也有更具体的角色类型。虽然名义上所有这些不同的职业阶梯都应该有相同的薪酬、声望等等，但现实中，软件工程师（SWE）的角色似乎有点像更高一等的阶层。部分原因在于，当你是一名 SWE 时，因为它是默认的角色，所以你有最多的内部流动性，你可以在任何团队工作，换团队要容易得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you'll have stuff like DevRel, they have UX engineers which are kind of like more front-end engineers working more with design implementation and that there's like a scale there that goes from more like front-end engineer to prototyper which is a separate career ladder. They have research scientists, they have within the SRE there's also like more specific type of roles and working with the infrastructure. They have tons of other roles, but the big one and the most on paper apparently all of these different ladders are supposed to have, you know, like same compensation, same prestige, same everything. But it seems like in reality the SWE role is good, kind of a bit like higher class essentially. Uh, and part of that is because when you're in SWE, like because it's kind of the default go-to role, that's the one where you have the most internal mobility, you can work on like any team, you like it's much easier to like move somewhere else because that's the default that engineering managers will look for and hire for.</p>
</details>

**Gerge:** 说到管理者，他们有工程经理（EM），负责团队。他们的主要职责是确保团队健康。他们还有两个角色：技术主管（Tech Lead）和技术主管经理（Tech Lead Manager）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And speaking of managers, they have engineering managers that are, you know, EM, they take care of teams. That's their primary focus is making sure that the team is healthy. Uh they also have two roles that is the tech lead role and then the tech lead management role.</p>
</details>

**Alen:** 技术主管经理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tech lead manager.</p>
</details>

**Gerge:** 这是谷歌独有的。你可以把它们看作一个光谱。一端是工程经理，他们有直接下属，负责团队，做所有工程经理该做的事。另一端是个人贡献者（IC），即技术主管。技术主管负责项目的整体架构和技术方面，确保技术决策得以制定，他们由工程经理任命。但在这两者之间有一个滑动标尺，你可以有既是技术主管又带直接下属的人，这就是我们所说的技术主管经理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Which is unique to Google where uh so it's basically you can think of them as like a spectrum where you have EM on one side where it's you know the person like you know they have direct reports they take care of the team they do all the EM things and then on the other side they you have an IC individual contributor who's a tech lead. So tech leads are in charge of you know overall architecture tech aspects of projects of products they'll make sure that you know like tech decisions get made they have the top say they get appointed by EM but then there's this slide in scale in between where you can have tech leads who also have direct reports and here we talk about tech lead managers.</p>
</details>

**Alen:** 是的，但我对这个角色的理解是，因为我们在 Uber 也引入了这个受谷歌影响的角色。我认为这个角色最初的理念是……首先我们来谈谈级别。级别从 L3 开始，L3 是入门级软件工程师，L4 是中级，L5 是高级，L6 是 Staff 级别，L7 是高级 Staff，L8 是 Principal，L9 是 Distinguished，L10 是 Fellow。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah but so my understanding of this role because We introduced it at Uber and it was influenced by Google. I think we had a Google SVP come over and then it was introduced. My understanding of the idea of this role originally was well first let's talk about levels. The levels start from L3 which is entry level software engineer. L4 is mid-level software engineer and Google has different names for it, but that's kind of what it is. L5 is senior software engineer, L6 is staff. L7 senior staff and L8 principal. Uh L9 distinguished and L10 partner or fellow, yes, Google calls it fellow.</p>
</details>

**Alen:** 大约在 L6 Staff 工程师级别，另一条路径开始了，那就是管理路径。L7 是高级工程经理，与高级 Staff 级别相同。L8 是总监，与 Principal 工程师级别和薪酬相同。然后是 L9 高级总监，L10 副总裁，管理路径上还有 L11 的高级副总裁，这在个人贡献者路径上是不存在的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And around like at the senior software engineer at the staff engineer level at L6 another path starts which is the manager path. L7 will be senior engineering manager which is the same as the senior staff. L8 is director which is now principal engineer so the same level the same compensation and it goes to L9 senior director, L10 VP and then there's an L11 on the manager track for senior VP which does not exist on on the IC track.</p>
</details>

**Alen:** 大约在 L6 级别，人们需要决定是继续走个人贡献者（IC）路线，还是转向管理路线。但有时你可能会“卡住”，但不一定是不舒服的方式。当人们达到 L7 或 L8 时，你很难再往上走。在谷歌，有很多任期很长的人，10 年、20 年甚至更久，他们在那里很安逸。所以你会有这些非常擅长自己工作的个人贡献者，他们实际上是技术主管，可以管理他们的小团队，但他们不想走管理路线，因为他们想保持 IC 身份，也不想升职。所以这个技术主管经理的角色就是为这些人创造的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Around like L6, people need to decide are they going to be on the IC ladder, try to make their way to L7, L8, and so on, or switch to manager ladder. But at some point, you kind of like get stuck, but maybe not necessarily an uncomfortable way. So like when people get to like L7 or L8, you're not really going to go higher. And at Google there are people with really long tenures like 10 years 20 years even more and they're very comfortable there. And so you have these individual contributors who are really good at their work. They're the tech lead de facto and they could manage their team that small team like and typically these are small projects but they don't really want to be on the manager ladder cuz they want to stay IC's and they don't really want to be promoted. So this tech lead manager role is kind of created for those people.</p>
</details>

**Alen:** 这很重要，因为其他一些公司也借鉴了这个角色，但发现进入这个角色的人期望能被提升到下一个级别，但当你既要作为工程师（工作量减少）又要作为管理者时，晋升非常困难。但在谷歌，据我所知，这个角色运作得很好。技术主管经理通常不追求下一个级别，这更多的是承认他们同时在做这两部分工作。在评判他们的表现时，不要将一个 L8 的技术主管经理与一个 L8 的、能产出更多代码的 IC 相比较。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is really important context because some other companies took over this role. And what they found is people who went into this thought that they would be promoted to the next level. But it's really hard to be promoted when you're kind of expected to both be an as an engineer you're not doing as much work as before a little bit less and as a manager you're managing a team. So people can get frustrated but for Google it worked as I understand. So the tech lead managers are typically they're not like looking to go to that next level. It's just more recognizing that hey, they're doing both of these pieces of work. When you're judging their performance, don't compare an L8 tech lead manager to an L8 IC who will be pushing out a lot more code.</p>
</details>

### 绩效评估与晋升机制的利与弊

**Gerge:** 这也很好地引出了谷歌的绩效评估和晋升。绩效流程以前叫做 Perf，是人们经常抱怨的东西。但他们在 2022 年进行了一次大改革，转向了一个叫做 Grad 的新系统，代表“谷歌评估与发展”（Google Review and Development）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I think this leads into nicely into the performance reviews and promotions at Google. The performance process it used to be called Perf and it used to be kind of you know one of those things that is like people famously complain about. But they actually did a big rehaul in I think 2022 where they moved to a new system called Grad, which stands for Google review and development.</p>
</details>

**Alen:** 如果你在大型科技公司工作过，这是一个非常相似的绩效评估流程。员工需要填写自我评估，你会得到同事的评估，经理会审阅并给出反馈。谷歌每年进行一次，从 11 月开始，12 月经理们审阅，1 月进行奖金会议并最终确定，然后在 3 月发放。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you ever worked at a big tech company, it's a pretty similar performance review process. People will need to fill in, as I understand, their self-reviews. You get peer reviews. Managers look at it. They give you feedback. And there's a timeline for this. So Google runs once a year. It starts in November and the bonus numbers will be managers look through it in December. There's bonus meetings behind the scenes. In January, they get finalized and then they get paid out in March.</p>
</details>

**Gerge:** 我认为 Perf 流程的一个区别是，它更侧重于你个人做所有的繁重工作，你必须花大量时间整理报告和“书面证据”。而 Grad 据说更多地推给了经理，如果你有一个好经理，这可能是件好事，因为你的工作量会少很多。但这似乎取决于你的经理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And I think one of the differences like I think the Perf process was like way more heavy on you as an individual doing all the heavy lifting where you had to spend yourself a lot of time putting together reports and like paper trails essentially about all the things that you do. And with grad supposedly it's been pushed more to the managers I believe which if you have a good manager is probably an amazing thing because you know you'll have a lot less work. But if you end up with a Yeah. like it it'll depend on your manager it seems like.</p>
</details>

**Alen:** 谷歌以其公平的绩效评估和晋升而闻名，他们试图关注结果、产出等。他们为经理提供大量培训，包括反偏见培训，流程文档非常完善。但有一个有趣的现象叫做“换团队时绩效分数重置”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And so Google used to be known and I think they still kind of are. They're trying to be pretty fair in how they do performance reviews and promotions and we'll see that with promotions. I mean, the manager still has a big say, but they're trying to focus on outcomes, outputs, etc. Like they're doing more there's a lot of training for managers going on anti-bias training all of these things and the process is really well documented and it is more heavyweight than most big tech companies and people take it seriously. But there is this interesting thing called the Perf score resetting when you change teams.</p>
</details>

**Gerge:** 哦，是的。据我所知，这算是一个公开的秘密。如果你在绩效季换团队，那么在你新团队的第一个绩效季，无论你表现多么出色，你总是会得到“符合预期”的评价。如果你做得非常糟糕，可能会得到更低的评价，但无论你多努力，都不会得到“超出预期”。这导致了一些关于何时换团队的战略性考虑，因为获得“超出预期”的评级意味着更高的奖金，但你知道换团队后只会得到目标奖金。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, yeah. As I understand, this is kind of a open secret that if you change teams during a perf season, so basically like right after the perf season has on your first perf season on your team, you will always get meets expectations no matter if you're how much you're overdoing it. I mean, if you're doing terrible work, you might get below, but you're typically not going to do terrible work, but you will not get exceeds no matter how hard you work. So this is leading to like some pretty strategic considerations on when to change teams because getting an exceeds rating means you're going to get higher bonus but you know that when you're changing teams it's going to be meets you're going to get your target bonus no matter what.</p>
</details>

**Alen:** 除了绩效评估，另一个是晋升。谷歌的晋升与众不同，因为有一个叫做“晋升委员会”的东西。据我所知，谷歌一直非常注重在晋升中避免偏见。在大多数公司，晋升是由你的经理和他的同级经理们一起决定的。他们都了解你的工作背景，但这可能带有偏见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Outside of performance reviews the other one is promotions. That's and promotions are different at Google because there is this thing called a promotion committee. So, my understanding is that Google has been really big about trying to not be biased in promotions, the way promotions work at most companies is when you're up for promotion, the group of your manager and your manager's peers all get together and they're like, "All right, is you know, Johnny ready for a promotion?" And they all kind of talk about why, you know, and your manager says why they think they are. And then their peers say like, "Yeah, we agree or we don't or what about Jane?" And so on. And so this group who's kind of, you know, like kind of know your work, they all like decide collectively in the end or they get feedback why you're ready, why you're not ready. And the good thing about this is that they all know the context of your work roughly. The bad thing is it can be pretty biased.</p>
</details>

**Alen:** 谷歌的做法是设立一个晋升委员会，里面没有人认识你。它由公司其他部门的高级或 Staff 级别以上的工程师和工程经理组成。他们只根据一份书面材料来决定你的晋升，有点像他们的招聘委员会。这意味着他们对你一无所知，没有偏见。决策应该更加客观，他们会根据框架和你的影响力来决定。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what Google has done for a long time is they said all right let's just make this whole process unbiased let's have a promotion committee where no one knows you like it's not your managers but it's like this group of like senior or staff plus engineers and other engineering managers at a different part of the org and they just get a written packet a little bit like their hiring committee that we're going to talk about they decide your promotion based on that and what this means they don't know anything about you they don't know who you are. I mean they will understand the context But they haven't to work with you. They have no bias for or against you. And so the decision should be a lot more like objective, right? So they will decide on your impact on they will look at the framework that's there and the impact.</p>
</details>

### “晋升驱动开发”的文化陷阱

**Alen:** 但这种晋升委员会有个非常有趣的缺点。有一篇著名的文章叫《我为什么离开谷歌为自己工作》，作者是 Michael Lynch，他在谷歌做了四年 L4 软件工程师，连续四年试图晋升都失败了。他写道，第一次晋升时，他做了大量维护工作，但委员会说他没有证明自己能处理技术复杂性，也看不到影响力。谷歌非常看重影响力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is a very interesting kind of downside of this promotion committee. There's a famous article called why I quit Google to work for myself by Michael Lynch who was an L4 software engineer at Google for four years and he was stuck on that level for four straight years trying to get promoted for years one after the other and he wrote this blog post and he failed every single time. First promotion he submitted his he was doing a bunch of maintenance work and then the promotion committee said that he had not proved that he could handle technical complexity and they didn't see the impact again Google's big on impact.</p>
</details>

**Alen:** 于是他开始寻找能产生影响力的项目来获得晋升，他找到了，但项目被取消了。接下来的一年，他的团队也被取消了，他不得不换团队。他经历了一系列坏运气。到第四年，他写道：“我对代码的质量标准从‘我们未来 5 年能维护这个东西吗？’下降到‘这东西能撑到我升职吗？’。我不提交也不修复任何 bug，除非它们危及我的项目发布。我摆脱了所有维护工作的责任。我不再志愿参加校园招聘活动。我从每周进行一到两次面试减少到零。”因为他只想得到那该死的晋升。最终，他离开了谷歌。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So he now looked for a project to get to promotion and he got that project but then the project got cancelled and then the next year I think he moved teams or he had to move teams because his team got cancelled and so he had this like series of bad lucks where and then in year four he wrote in this article I'm quoting him "my quality bar for code drop from 'will we be able to maintain this thing for the next 5 years' to 'can this last until I'm promoted'. I didn't file or fix any bugs unless they risk my project launched. I wriggled out of all responsibilities for maintenance. I stopped volunteer for campus recruiting events. I went from conducting one or two interviews per week to zero because he just really wanted to get that freaking promotion." And in the end, he quit Google.</p>
</details>

**Alen:** 这个故事揭示了在谷歌很容易陷入“晋升陷阱”，即“我需要这个项目来让我升职”。这也引出了我们应该谈论的“晋升驱动开发”（Promotion-Driven Development），这在谷歌内部非常真实，因为所有的激励机制都指向那里。有一个流传的笑话是关于为什么谷歌有这么多聊天产品。他们不断地推出新产品，获得关注和媒体报道，然后人们因为成功的发布而获得晋升。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this whole story showed how it's super easy to fall into Google into the promotion trap, which is I need this project to get me promoted and that's it. And he actually explained and in the end I think he said like what am I doing here? Like why am I doing this? And this is where we should talk a little bit about promotion-driven development that is very real inside Google because all the incentives are there for it. And you know there's this joke that goes around of why Google has so many chat products. They keep changing the names and also the product. Google's payments promotion it was Google wallet then G pay then Google pay then it's now Google wallet again. You see sometimes a lot of things where Google has a product like with their chat product which is still not they don't have a Slack competitor. You can get promoted for having a successful launch for showing traction.</p>
</details>

**Alen:** 很多谷歌的项目，人们启动一个新项目，获得初步成功，然后升职。而且，如果你换团队，你的绩效分数会重置。所以，如果你的项目遇到障碍，你可以留在那个团队拿一个“符合预期”的评价，或者换到一个新团队，同样拿一个“符合预期”的评价。所以人们常常会换团队，开始一个新项目。在一个表现不佳的项目上坚持一年，试图让它重回增长轨道，并没有太多激励。开始一个新项目更有激励，因为你不会因为做维护工作而得到晋升。这就是问题的症结所在。这也解释了为什么有一个叫做“被谷歌杀死”（Killed by Google）的网站，收集了大约 300 个被谷歌发布后又被终止的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A lot of projects at Google, you know, like people start a new project, they get traction, they get promoted, and there's this thing where if you move teams, your performance scores are reset. You will definitely meet a meets. So if you hit a bit of an obstacle, the launch goes up, but now it kind of flatlines. I mean, you can stay on that team and get a meet's review, or you could move to a new team and get a meets review anyway. So often teams will move to a new team and either start a new project or join in. There's just not much incentive to stick around on a project that's not doing great for even a year to kind of hang it out and get it back to growth. There's just more incentive to start a new one because you're not going to get promoted for maintenance. That's the gist of it. And you know this goes back to Google has this thing called killed by Google a website that collects these like 300ish Google products that have been launched but they have been killed.</p>
</details>

### 开放的沟通文化与OKR框架

**Alen:** 谷歌的 OKR，即目标与关键结果（Objectives and Key Results），非常出名。如果你是一名软件工程师，在中型或大型公司工作过，你可能听说过“你的 OKR 是什么？”。显然，谷歌让这个框架变得非常流行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One interesting thing that comes up with Google... it's not really software engineering but it kind of impacts us. OKRs, objective key results. Now if you're a software engineer you probably like and you worked at a midsize or larger company this probably came up like what are your OKRs? What are your teams OKRs? The objectives the key results and the goals and apparently Google made this super popular this framework right?</p>
</details>

**Gerge:** 是的，完全正确。技术上讲，他们没有发明它。它实际上是在 70 年代在英特尔被引入的。但 John Doerr 这个人，在加入谷歌早期之前曾在英特尔工作，他在 1999 年将 OKR 的理念引入谷歌，它与当时谷歌的文化非常契合，并成为他们运营方式的重要组成部分。目标是更高级别的目标，比如“我们想构建什么”，而关键结果是具体、可衡量的事情，用来判断你是否在朝着目标前进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah exactly. So technically they didn't invent it. They were actually introduced in the 70s at Intel which is so long ago but there's this guy John Doerr who was at Intel before he joined Google kind of early and in 99 he introduced this idea of OKRs and they fit really well with Google at the time and it became a big part of and ingrained in the culture of how they operated. So yeah like objectives and key results. Objectives is like you know a kind of more high-level goal of like this is what we want to build and then the key results are specific measurable things that you can measure in order to know that you're moving towards the goal.</p>
</details>

**Alen:** 我对 OKR 和谷歌总有点怀疑。因为《衡量重要之事》（Measure What Matters）这本书在 2018 年出版后，OKR 真的火了，我觉得每个人都在用 OKR，因为有一种说法是 OKR 让谷歌成功了。但我总觉得，这有点像说使用 Jira 让 SpaceX 成功了一样。我有一种感觉，无论谷歌用什么，他们都会成功，因为他们从 PageRank 开始，做了一些每个人都想要的东西。我怀疑 OKR 可能只是众多工具中的一种，它可能有用，但换成别的也一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm always a little bit suspicious about OKRs and Google because the book Measure What Matters was published in 2018 and from there on it's really blown up and I think everyone's like using OKRs cuz there's this narrative that OKRs make Google successful. But I'm kind of thinking like is this a little bit saying that I don't know like using Jira made whatever company successful, SpaceX successful. I'm not sure they've used Jira, but like whatever ticketing system they use, did that make them successful? Cuz I have a sense Google would have been successful whatever they use because you know like it started with page rank. They did something that everyone wanted. And I wonder if if OKRs is something that I mean it's probably it works, but it could have been anything else.</p>
</details>

**Gerge:** 谈到作为沟通工具的 OKR，谷歌的整体沟通方式，至少在过去，一直非常开放和透明。历史上，谷歌曾有过每周一次的全公司市政厅会议，叫做 TGIF（Thank Google It's Friday）。现在因为全球化，它更像是 TGIT（Thank Google It's Thursday）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Speaking of OKRs as a tool for communication, communication in general at Google is and at least has been very open and very transparent. So historically, like this has changed a little bit now. We'll get into this, but like culture is shifting across the industry, including Google in late years, but historically it's been incredibly open and transparent. Since pretty early days Google used to have or still has them these weekly companywide town hall all hands meeting check-in type thing. It's called TGIF. So, thank Google it's Friday. And then with the company being global so it's actually it's on Fridays in one time zone but not in the other. So it's more like TGIT now so thank Google it's Thursday.</p>
</details>

**Gerge:** 基本上，过去更像是谢尔盖和拉里在台上谈论事情，进行开放式问答。你会有不同的团队上来展示他们正在做的工作。这似乎是文化的基石之一。我记得我实习的时候，周五会有这个活动，办公室里会有免费的食物和饮料，有时还会有主题活动。你每周都有机会在下班前和同事们一起闲逛，了解整个公司发生的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. But basically, it used to be more like Sergey and Larry on stage talking about stuff, doing open Q&As. You'd have different teams come in and like present what they're working on or what they've built. And I think it's one of those kind of cultural cornerstones it seems where like I remember when I was interning you know it was on Fridays and like there's the all hands itself that's TGIT or TGIF but then you know there would be an event at the office where you know there would be free food and drinks and sometimes some like event. You'd just like have this weekly chance to like go hang out with your colleagues before going home from work that like you'd learn all these things from across a company.</p>
</details>

### 谷歌文化的变迁与今日挑战

**Gerge:** 我们是从外部视角进行这项研究的，对吧？我们能接触到的信息有限，但也和一些人聊过。其中一个出现的话题是，文化确实在转变。谷歌正在经历变革之风，部分是由于整个行业的氛围，部分也是内部原因。比如在疫情期间，他们发生了一些重大的泄密事件，所以他们停止了全员会议中的一些内部透明度，以及对所有正在发生的事情的完全访问权限。我知道这方面受到了限制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the things again like we're doing this research from the outside looking in, right? Like we're able to get to the stuff we can get to and we've talked to people. And one of the things that has come up is definitely like the culture is shifting. Like there's the winds of change in Google following you know partially just like the vibes of the industry as a whole but partially very much internally also during the pandemic you know they had some big leaks so like they stopped some internal transparency in the all hands and the full access to like everything going on. I know that's been restricted.</p>
</details>

**Alen:** 是的，让我们多谈谈这个，因为我觉得这关系到今天的谷歌。我们基本上从谷歌的起点，他们如何构建所有这些酷炫的东西，来到了今天的谷歌是什么样子。我想我们应该反思一下整个行业是如何经历巨大变化的。首先是疫情，然后是科技行业的繁荣，疯狂招聘。接着在 2022 年，随着封锁结束，科技行业开始崩盘，大规模裁员。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So, so let's talk a bit more about this because I feel this is like the Google of today. Basically, we've kind of arrived from like where Google started, how they built like all these cool things to what is Google like today from all that we've gathered and I guess maybe we should just like reflect a little bit on how the whole as you said the whole industry has gone through a massive change. First there was a pandemic... and then it turned out to be a blessing for tech because everyone started to hire like crazy. And in 2022, just as lockdowns ended and the world recovered, tech started to crash down. There was like mass layoffs across companies.</p>
</details>

**Alen:** 这一直持续到 2023 年。大型科技公司进行了大规模裁员，谷歌也进行了公司历史上几乎是第一次的裁员。2008 年金融危机时他们裁了 3%。但自那以后，他们几乎没有裁员。谷歌曾以工作稳定、工作与生活平衡、几乎不可能被解雇而闻名。然后他们裁员了 6%，包括有 10、15、20 年经验的人，只是在晚上给他们发一封邮件。我认为这真的改变了谷歌的氛围。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This went up all the way to 2023. Big tech had big layoffs and Google had the first ever layoffs in almost the first in company history. In 2008, they did like a 3% layoff because of the financial crisis. But since then, they haven't really had any layoffs. And Google used to be known as the place with like great job security, work life balance, almost impossible to get fired if you do a minimum good enough job. And then they did like 6% layoffs just cutting people with like including people with 10, 15, 20 years of experience just sending an email to them at night. And I think this really changed the mood at Google.</p>
</details>

**Alen:** 2024 年又有一些裁员，虽然没有以前那么多，但现在感觉谷歌曾经在很多方面都完美的时期——福利、金钱、工作与生活平衡、各种俱乐部、对一切的投资——已经过去了。现在有了一定程度的残酷性。虽然不像 Meta 或亚马逊那样严酷，但它仍然是一家公司。在某个时候，你可能会被解雇，你会得到一笔不错的遣散费，但他们会告诉你游戏结束了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then in 2024 they there were some more layoffs coming in not as many as before but it's now seems like that kind of period of Google was perfect in so many ways. perks, money, work life balance, clubs, investing in everything. Like it was just impossible to hire away from Google pretty much. Now there's a bit of a sense of there is some level of being cutthroat. Not as much as their competitors like Meta or Amazon where it's a lot more tougher, but still it's like, you know, it's a company. At some point, you might get fired and you'll get a good severance, but they'll tell you that it's game over.</p>
</details>

### 什么样的人适合在今天的谷歌工作？

**Alen:** 那么，你认为什么样的人适合在谷歌工作？在今天的谷歌，谁能从中获得很多价值？什么时候是加入的好时机，假设你成功进去了？因为我们应该清楚，进去非常难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so let's talk about who do you think would be a good fit at Google? Like who are people who could get a lot of out of it in today's Google? Like not the ideal Google, but the one that we know today who could get a bunch of value out of working there. And when could be a good time assuming you manage to get in because I think we should be clear getting in is is super hard.</p>
</details>

**Gerge:** 如果你非常热衷于特定的技术栈，喜欢尝试新工具和新框架，那么谷歌不适合你。你将无法使用任何你熟悉和喜爱的工具，因为在谷歌，你将使用完全不同的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are some of the things that we've been sort of talking about the whole episode. Like if you're really super into the specific tech stacks and trying new tools and playing around with new frameworks the second they get out, you know, Google is not for you. Basically, you're not going to be able to use or reuse any of your like tried-and-true favorite things because you're going to be working at with completely different things at Google.</p>
</details>

**Alen:** 所以你基本上是说，如果你对初创公司使用的行业框架感兴趣，那些能让你在其他地方更受欢迎的知识，比如最新的 React 框架或 ML 框架，那么谷歌不适合你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you're basically saying like if you're interested in the frameworks in the industry that startups use that that you build up the knowledge that I don't know like the latest React framework or latest ML framework that is out there that makes you in demand for other places. Right.</p>
</details>

**Gerge:** 完全正确。所以如果你喜欢跟上科技行业的尖端，而不是谷歌内部除了谷歌没人知道的尖端，那么谷歌不适合你。另一方面，如果你不喜欢重组或事情总是在变化，如果你喜欢事情相对稳定，那么谷歌可能也不适合你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly. So if you like keeping up with the industry like keeping up with the tech industry's cutting edge as opposed to internal Google cutting edge that no one knows except for Google but then you might not be able to talk about it because of the NDA. Another part like if you're someone who like who is not into reorgs or like things changing all the time like the googly thing of being into ambiguity like if you like things being somewhat like stable and yeah then Google is probably not for you either.</p>
</details>

**Gerge:** 但反过来说，如果你确实喜欢尝试新事物和创新，我认为谷歌在这方面是好的。他们仍然有一些孵化器类型的团队，比如 Area 120，他们会构建全新的、非常像初创公司的应用。虽然很多最终都进了“被谷歌杀死”的墓地，但他们可能会重用一些技术。所以，如果你热衷于创新和尝试新事物，谷歌可能适合你，但它可能和你想象的不一样。如果你对自己的想法过于执着，不能“杀死你的宠儿”，那么也许你应该去初创公司而不是谷歌。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then on the flip side of that, I think if you if you do like trying new things and innovating and trying things out, like I think Google is good for that as well. You know, like you mentioned, they did, you know, 20% time was way more of an established thing in the past. They didn't completely get rid of it. They have some like incubator type teams at Google still. They have one thing called area 120 you know they build completely new very like startup-based completely new apps that very quickly like often just transition straight into the killed by Google graveyard. But you know they'll probably like they will reuse some of this technology as well. So like there is a like killed by Google is definitely true but it's not like all of it's wasted. So like if you're into innovation and trying new things Google can be for you but it's not it's probably also not going to look the way that you imagine it to look like and if you get in love with your idea and you know the whole I kill your darlings thing. If you're not good at killing your darlings then probably just do startups instead of Google.</p>
</details>

**Alen:** 我要补充一点，谷歌在一个方面非常非常好，那就是“出身”（pedigree）。如果你在谷歌工作过，哪怕只有一年，它也是最受认可的品牌之一，至今仍然如此。部分原因是进入的门槛非常高。所以我的建议是，如果谷歌这样的公司联系你，即使你没有加入的打算，也可以去体验一下面试过程，因为他们的面试过程与那些最难进的公司非常相似。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Well, one thing I'll add is Google is very very good for one thing which is the pedigree. So if you have if you worked at Google for let's say you know sometime even a year it's one of the most recognized brands even to date. Part of it is the bar of getting in is just very high. So my suggestion would be is if there's a reach out from a company like Google, it can be a challenge to just go through the interview process even if you have no intention because their interview process is very very similar to the interview process of the companies that are hardest to get into.</p>
</details>

**Alen:** 另外，如果你看看今天最热门的初创公司从哪里招聘，比如 OpenAI、Anthropic、Stripe，很多都来自谷歌。谷歌有很多未被充分利用但非常聪明能干的人。所以，在谷歌工作可以为你建立一个非常好的网络。如果你有机会进入谷歌，可以考虑一下。拥有这段经历可以为你的简历和未来十几年甚至更久的机会增添分量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then there's this other interesting thing. If you look at where the hottest startups of today hire from, you know, may this be open AI, Anthropic as I mentioned, Stripe, so many of them will be from Google. Google has a lot of people who are underutilized, but they're very smart and very capable. And then there's a network. If you're someone who is curious or talks with other people inside Google, you can build up a really good network. Having it behind your back, it can strengthen your resume and your opportunities for like a decade or even more to come.</p>
</details>

**Alen:** 谷歌有一个有趣的“团队匹配”流程。通常他们不是为特定团队面试，而是进行通用面试。一旦他们决定你符合标准，就需要一个团队来“认领”你。这个过程有时可能需要几个月，有时甚至会以“没有合适的团队”而告终，这可能非常令人沮丧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep. And Google has this interesting thing called team matching which is for software engineering positions typically they don't interview for a specific team but they interview in general. And once they decide like all right you're good you meet our bar. Then a team needs to claim you. So you need to kind of go through a team matching process which can be really frustrating by the way. The recruiter might tell you like congratulations we want to hire you and you're like great where can I like how much is the compensation how are I signing like we just need to go through team matching and sometimes this team matching can take months and sometimes it comes back with I'm sorry no teams were available or wanted your profile in this case so that's the other thing it is it's kind of harder to get into than most places.</p>
</details>

**Alen:** 我希望我们能分享一些细节，因为这个环境确实不适合很多人。你需要忍受大公司带来的很多事情，在这种情况下，是一个非常透明的公司，这也意味着大量的信息过载。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I hope that we were able to share some details cuz this environment really is not for a lot of people. And you do need to put up with a lot of things that come with large companies. And in this case, a one that is very transparent, which means there's a lot of information overload as well.</p>
</details>

**Gerge:** 是的，如果你不擅长多任务处理，或者在编码时不得不去开会会让你感到压力，你可能会讨厌这个地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, yeah. I think if you're not good at like multitasking or if it stresses you out to like have to go to meeting middle of the day while coding, you'll probably hate this place probably.</p>
</details>

**Alen:** 有趣的是，谷歌是少数几家非常有创新精神的科技公司之一，他们至今仍在推出许多新产品，比如在人工智能领域处于领先地位。但它也是一家很多人会从中退休的公司。在这里看到工作了 20 多年的人并不罕见。他们会不时地更换团队和职位，但他们会一直待到退休。因为谷歌的薪酬很高，很多人可以提前退休，过上非常舒适的生活。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Interestingly, Google is one of the very few tech companies who are very innovative. They come up with so many new products even today like an AI that they're leading. They're a frontier lab. But they're also a company where a lot of people retire from. So, this is the company where it's not unusual to see people with 20 plus years of having worked there. And when you look closer, it'll be different teams. They will switch teams every now and then. But it is one of the places together with maybe Microsoft to some extent Amazon where like I do see people probably in larger amounts or larger percentages just stay there and clearly decide either that they're very happy there or that they're the happiest they can be compared to other options and they do it all the way to retirement and because Google pays as well as it does. Retirement doesn't necessarily come at the around 65 or whatever the legally mandated is. A lot of people will say I'm retired earlier because I have saved off enough together with with Google's perks and pension program and whatever that I will now have a very comfortable life.</p>
</details>

### 结语

**Alen:** 最后我想说的是，我们讨论的所有关于谷歌的通用情况，可能对你可能要加入的某个特定团队完全不适用。不要忘记，个人关系非常重要。人们加入或离开谷歌的原因可能就是他们的经理。所以，如果你遇到有趣和有价值的人，请与他们保持联系，因为他们最终可能会去到有趣的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And one thing that I would just close with is everything that we might have said or covered about how things generically work. It might be absolutely false for for one for that specific team that you might be working in or that your friend is working in. So don't forget like I think personal relationships really do matter. And what I have seen reasons people go to Google for example or leave Google might be their manager. So you know people come and go between companies like Google, Meta, big tech, startups and scaleups and there are some things that can be generalized but yeah don't forget if you meet interesting and valuable people just you know keep in touch with them because they might end up in interesting places that might or might not be like these.</p>
</details>

**Gerge:** 是的，这很有趣，信息量很大，但希望我们将来能再次就其他话题这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it's been a lot of fun, a lot of information, but uh yeah, hopefully we'll do this again with uh other topics in the future.</p>
</details>

**Alen:** 是的，请告诉我们您的反馈，希望我们下一期再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, let us know your feedback and hopefully we'll see you in the next one. This was our Google podcast episode. If you'd like to get even more details about Google's engine culture, check out our deep dive article in the pragmatic engineer newsletter linked in the show notes below. If you've enjoyed this podcast, please do subscribe on your favorite podcast platform and on YouTube. A special thank you if you also leave a rating on the show. Thanks and see you in the next.</p>
</details>