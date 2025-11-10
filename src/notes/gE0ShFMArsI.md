---
author: How I AI
date: '2025-11-10'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=gE0ShFMArsI
speaker: How I AI
tags:
  - ai-automation
  - go-to-market
  - sales-enablement
  - customer-insights
  - workflow-optimization
  - llm-applications
title: CEO如何将2.5万小时销售电话转化为自学习市场增长引擎
summary: 本期节目邀请到Suzie公司CEO Matt Britain，他展示了一个强大的AI自动化工作流。通过利用Gong平台记录的2.5万小时销售电话逐字稿，他使用Zapier和LLM构建了一个系统，能够自动生成客户摘要、销售辅导反馈、跟进邮件、Google广告关键词，甚至SEO优化的博客文章。这种创新方法提高了销售效率，预测客户流失，并提供了深入的市场洞察，展示了领导者如何亲自动手构建AI解决方案以推动业务增长。
insight: ''
draft: true
series: ''
category: business
area: tech-insights
project:
  - ai-impact-analysis
  - entrepreneurship
  - systems-thinking
people:
  - Matt Britain
  - Claravel
  - Mark Zuckerberg
  - Edward Saver
  - Mark Benioff
companies_orgs:
  - Suzie
  - Zapier
  - Gong
  - Brex
  - Facebook
  - Google
  - Dropbox
  - Airbnb
  - Open Door
  - Salesforce
  - Qualtrics
  - SurveyMonkey
  - Proctor and Gamble
products_models:
  - Browse AI
  - GPT-4 Turbo
  - GPT-5
  - Chat GPT
  - Adwords
media_books:
  - How I AI
  - Generation AI
status: evergreen
---
### 引言：从销售痛点到AI驱动的市场引擎

我的公司销售团队一直告诉我，他们不知道如何找到任何信息，也不知道如何发现客户感兴趣的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With my company, my sales team was consistently telling me that they just didn't know how to find anything. They didn't know how to find what customers were interested in.</p>
</details>

主持人：你有一群销售人员，他们说：“我需要更多信息才能更好地服务客户。”你意识到自己有大约2.5万小时的客户通话录音，这正是了解客户希望如何互动、最完美的“真相来源”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You had a bunch of salespeople. They said, "I need more information to serve our customers better." You realized you had 25,000 hours or something of recorded customer calls, which are the perfect source of truth for how customers want to be interacted with.</p>
</details>

你现在将向我们展示一个**Zap**（Zapier自动化流程中的一个步骤或完整流程），它能处理单个录音并完成一系列任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're going to show us a zap now that takes a single recording and does a bunch of stuff.</p>
</details>

所以，基本上我需要弄清楚，我能否为**Zapier**（一个流行的自动化平台，用于连接不同的应用程序并自动化工作流）创建一个数据流，让它知道每次新通话发生时的通话ID。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So basically I needed to figure out well can I create a feed for Zapier. So it knew the call ID of each new call has occurred.</p>
</details>

因此，第一步本质上是一个触发器，当有新通话进来时，它会从**Gong**（一个销售智能平台，用于记录、转录和分析销售对话）抓取信息，而Gong会提供通话ID。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the first step is essentially a trigger where a new call comes in. It'll basically scrape the information from Gong and one of the things Gong will give you is that call ID.</p>
</details>

所以，将通话ID附加到URL上，基本上就是我需要提供给Browse AI的所有信息，以便它能够访问该URL并抓取整个逐字稿。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">So that append it to the URL essentially is all I needed to give browse to be able to go to that URL and able to essentially scrape the entire transcript.</p>
</details>

它没有直接连接，我不得不将其“拼凑”起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It wasn't connected. I had to kind of hack it together.</p>
</details>

主持人：我喜欢一个知道如何构建解决方案的CEO。我喜欢一个知道没有问题是无法解决的CEO。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I love a CEO that knows how to build it. I love a CEO who knows that no problem is not solvable.</p>
</details>

欢迎回到“How I AI”。我是Claravel，一名产品负责人和AI狂热者，致力于帮助大家利用这些新工具更好地构建产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Welcome back to How I AI. I'm Claravel, product leader and AI obsessive here on a mission to help you build better with these new tools.</p>
</details>

今天我们请来了Suzie公司的CEO Matt Britain。通常我们会展示两到三个工作流，但今天Matt将展示一个在他公司里“统治一切”的“超级工作流”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today we have Matt Britain, CEO of Suzie. Now, normally we show two or three workflows, but today Matt's going to show off the one mega workflow that rules it all at his company.</p>
</details>

他将向你展示如何将单一资产转化为大量的市场推广价值，包括给客户的邮件、丰富的数据源，甚至可以用于获取更多潜在客户的营销资产，从而提高产品成功率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He's going to show you how to take a single asset and turn it into tons of go to market goodness. From emails to customers, enrich data sources, and even marketing assets that can be used to source more prospects that are going to be successful with your product.</p>
</details>

让我们开始吧。本期节目由**Brex**（一家为初创企业提供金融服务的公司）赞助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's get to it. This episode is brought to you by Brex.</p>
</details>

如果你正在收听这个节目，你已经知道AI正在以实际有效的方式改变我们的工作方式。Brex正在将同样的力量带入金融领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you're listening to this show, you already know AI is changing how we work in real practical ways. Brex is bringing that same power to finance.</p>
</details>

Brex是为创始人打造的智能金融平台。通过在后台运行的自主代理，你的财务堆栈基本上可以自行运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Brex is the intelligent finance platform built for founders. With autonomous agents running in the background, your finance stack basically runs itself.</p>
</details>

卡片自动发行，费用自动归档，欺诈实时阻止，你无需为此操心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cards are issued, expenses are filed, and fraud is stopped in real time without you having to think about it.</p>
</details>

加上Brex的银行解决方案和高收益国库账户，你就有了一个系统，可以帮助你更智能地消费，更快地行动，并充满信心地扩展业务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Add Brex's banking solution with a high yield treasury account, and you've got a system that helps you spend smarter, move faster, and scale with confidence.</p>
</details>

美国三分之一的初创公司已经在使用Brex。你也可以通过访问bre.com/howiai来实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One in three startups in the US already runs on Brex. You can too at bre.com/howiai.</p>
</details>

Matt，感谢你来到How I AI。我很高兴，因为正如我们节目开始前所说，我们经常遇到“氛围编码员”，我知道我们会谈论你构建的一些定制软件，但我们在AI自动化在市场推广和营销方面的讨论还不够多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt, thanks for coming on how I AI. I'm excited because as I was saying before we started the show, we get vibe coders left and right and I know we're going to talk about some custom software that you built, but we just do not get enough on the go to market and marketing side of AI automation.</p>
</details>

所以，我非常期待你分享的内容。非常感谢你今天加入我们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm really excited to show what you have to share. So, really appreciate you joining today.</p>
</details>

Matt Britain：我很高兴来到这里。你和我都非常喜欢Zapier，我必须问，即使在AI时代之前，它就是你依赖的工具吗？为什么这个特定的软件成为了你许多基于AI的自动化的支柱？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm excited to be here. So, you and I both really love Zapier, and I have to ask, even before the age of AI, was this a tool that you relied on? Why has that this specific software become kind of the backbone of so many of your AI based automations?</p>
</details>

Matt Britain：我一直都比较懂技术，但我从来都不是一个程序员。2005年，我直接向**Mark Zuckerberg**（马克·扎克伯格：Facebook创始人）和**Edward Saver**（爱德华·萨维林：Facebook联合创始人）销售了Facebook上的第一批广告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I've always been fairly technical, but I've never been a coder. Um, I sold the first ads ever on Facebook directly to Mark Zuckerberg and Edward Sver in 2005.</p>
</details>

2002年，当我创办我的第一家广告公司时，我购买了第一批**Google**（谷歌）关键词。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I bought some of the first Google keywords ever to exist, right, when I started my business, um, in 2002, my first ad agency.</p>
</details>

所以，我一直热爱广告技术，并喜欢了解这些工具如何运作，但同时，我从未成为一名工程师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so I've always loved sort of ad tech and getting like understand how these tools work, but at the same time, I've never been an engineer.</p>
</details>

随着我希望在我经营的各种公司中构建更复杂的工具和解决方案，我需要不仅仅使用像**Adwords**（谷歌广告平台）这样的单一工具，而是将多个工具连接起来以提高效率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as I've wanted to get more sophisticated in the in the tools and solutions I've built for various companies that I've run, I've need to not just use one tool like Adwords, but multiple tools to stitch things together to be more efficient.</p>
</details>

我像大多数人一样，通过Google搜索发现了Zapier。我想连接通过我的网站获得的潜在客户到某种流程，使其能自动向注册者发送邮件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I was turned on to Zapiero like most other people just through a Google search. And I think I wanted to connect um you know leads that were coming in through my website to some type of flow where it automatically emailed the person who signed up.</p>
</details>

然后我就开始深入研究它。但正如你所说，Claire，直到Zapier集成了AI，我才真正对可能性感到震惊。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I just kind of start to dive into it. But to your point, Claire, it wasn't until Zapier integrated AI when kind of my mind just became blown in terms of what's possible.</p>
</details>

主持人：好的。那么，你将向我们展示如何将单一资产——我不会透露是什么——转化为涵盖营销、销售和内部公司工作的全套活动。那么，你为什么不把它展示出来，给我们看看你构建了什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So, you're going to show us how you take a single asset, and I won't spoil what it is, and turn it into basically a full suite of activities across your marketing, sales, internal, company work. So, why don't you pull that up and show us what you built?</p>
</details>

### 核心问题：解决销售团队的信息空白

Matt Britain：在我展示之前，我想说，我认为关键在于弄清楚你想解决什么问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before I pull it up, I guess you should say that I think it's all about figuring out what problem that you want to solve.</p>
</details>

我认为对于AI，人们普遍被工具的数量和变化的速度所淹没，他们发现自己只是在玩弄这些工具，试图达到一种舒适的理解状态，但同时并没有真正推动业务发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think with AI in general, people get so overwhelmed with just the amount of tools and the rate of change that they just find themselves kind of playing around with all these tools trying to get to the point where they feel like they're comfortable in understanding them, but at the same time they're not really moving their business forward.</p>
</details>

我认为之所以如此，是因为人们从未退后一步思考：“我需要为我的业务解决的核心问题是什么？是什么阻碍了我以我想要的速度增长？是什么妨碍了我，或者我明知存在但无法利用的机会是什么？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think the reason that's the case is people don't ever take a step back and think like what is the core problem I need to solve for my business? Like what's holding me back from growing faster than I want to? what what's getting in my way or what's an opportunity I know is there but you know I'm not I'm not able to take advantage of it.</p>
</details>

在我的公司，我反复听到的是，我的销售团队一直告诉我，他们不知道如何找到任何信息。他们不知道如何找到客户感兴趣的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And with my company, what I was hearing over and over again was my sales team was consistently telling me that they just didn't know how to find anything. They didn't know how to find what customers were interested in.</p>
</details>

他们不知道如何与特定行业或特定职位的客户交流，以识别用例。所以有太多的未知。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">they didn't know how to find um how to speak to people of a certain industry or a certain title in terms of identifying use cases. So there just so many unknowns.</p>
</details>

一旦我理解并明确了这个问题，我就变得非常专注，决心找出如何构建解决方案来帮助我的销售和客户成功团队更好地掌握信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so once I understood and put my finger on that on that problem, I just became very sort of tunnel visioned and I was determined to figure out how I can build solutions that can aid my sales and customer success team to be more in the no.</p>
</details>

所以，一旦你真正确定了问题，下一步就是弄清楚什么数据可以帮助你抓住这个机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So once you've actually identified the problem, the next step is figuring out what data can help you seize that opportunity.</p>
</details>

就了解我们的客户并获取这些信息而言，碰巧自疫情以来，我们公司开始远程办公，我们一直在使用一个名为**Gong**（销售智能平台）的工具，它基本上连接到Zoom通话，记录我们进行的每一次通话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in the case of you know understanding our customers and and and getting that information, it just so happens that since the pandemic when our company went remote, we've been using this tool called Gong that's essentially attached to Zoom calls that records every single call that we have.</p>
</details>

它会说：“本次通话正在录音，用于质量保证目的。”我一直知道我们有Zoom，也知道我们有Gong，但我不知道的是，他们的逐字稿非常棒，而且我们实际上在过去5年里积累了2.5万小时的通话逐字稿，这些逐字稿一直处于混乱状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it says this call is being recorded for quality assurance purposes. And I always knew we had obviously Zoom and I knew that we had Gong, but what I didn't know is that their transcripts were amazing and that we actually had 25,000 hours of call transcripts that had been a mess over the last 5 years.</p>
</details>

如果你想了解客户和业务信息，没有比这更好的“真相来源”了。所以我们已经围绕这些信息建立了一个完整的操作系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you think about understanding information about your customers and your business, there's no better source of truth. So we have since built an entire operating system around this information.</p>
</details>

不仅是历史信息，还有随着每次新通话发生而产生的一系列不同工作流，因为这不仅仅是了解过去发生了什么，更是能够对当前发生的事情做出高度响应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Not just the historical information, but a variety of different workflows that happen with each new call that occurs because it's not just about understanding what's happened in the past, but it's also being able to be highly responsive to what's going on in the present.</p>
</details>

所以，我今天将展示的第一件事是我们根据团队（无论是销售团队还是客户成功团队）的通话创建的自动化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the first thing I'm going to show today is an automation that we have created based upon calls our our teams have either our sales team or our customer success team.</p>
</details>

本质上，一旦通话结束，一系列事件就会针对该单独的逐字稿发生。我们也会对聚合的逐字稿进行大规模处理，如果这说得通的话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so and essentially what happens is as soon as that call is over, a series of events happen with that individual transcript. We also do things sort of at large with the aggregate transcripts, if that makes sense.</p>
</details>

但现在，我将向你展示通话完成后实时发生的情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But right now, I'm going to show you what happens kind of like real time once a call is completed.</p>
</details>

主持人：太棒了。那么，在你展示的时候，为我们的听众总结一下：你有一群销售人员。他们说：“我不知道如何找到我需要的信息。我不知道如何生成我需要的信息。我需要更多信息才能更好地服务客户。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. So, while you pull that up, just to recap for our listeners, you had a bunch of salespeople. They said, "I don't know how to find the information that I need. I don't know how to generate the information I need. I need more information to serve our customers better.</p>
</details>

你意识到你拥有——如果我没记错的话——2.5万小时左右的客户通话录音，这是了解客户希望如何互动、最完美的“真相来源”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You realized you had, and I'm correct me if I'm wrong, 25,000 hours or something of corrected customer calls, which are the perfect source of truth for how customers want to be interacted with.</p>
</details>

你决定这将成为公司内部许多行动的核心背景。然后你将向我们展示一个Zap，它能处理单个录音并完成一系列任务。我预览过这个，它确实做了很多事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you decided that was going to be the core context for a lot of these actions inside your company. And then you're going to show us a zap now that takes a single recording and does a bunch of stuff. I got a preview of this and it does a lot of things.</p>
</details>

### CEO亲自动手：构建AI解决方案的重要性

Matt Britain：我曾尝试让我的工程团队解决这类问题，但对他们来说，即使是集成产品也变得不堪重负。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've I tried to give AI to my engineering team to figure stuff like this out and it just became overwhelming to them even integrating the product and what's been helpful for me was first building things on my own and I'm not technical enough to be able to build on top of our software product.</p>
</details>

对我来说，首先自己构建东西很有帮助，我没有足够的技术能力在我们的软件产品之上进行构建。所以像我今天要展示的工具，对我来说是深入了解AI力量的好方法，因为它处于我们产品边缘，也就是我们如何运营的边缘。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the tools like the one I'm going to show you today was a great way for me to be able to dive into the power of AI because it was on the edges of the it wasn't the product was sort of on the edges of how we operate it and through that though I became far more adept at AI and now I'm very much involved in our product itself.</p>
</details>

通过这个过程，我对AI变得更加熟练，现在我深度参与到我们的产品本身。所以人们常常难以找到切入点，但有很多不同的切入点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So often people struggle to find a way in and there's lots of different ways in.</p>
</details>

一种方法是亲自为自己构建一些东西，或者为营销部门或其他地方构建一些东西，然后通过这个过程，你真正开始理解它，然后你就可以在业务中以更实质性的方式变得更精通AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One way is actually building something for yourself personally or building something for the marketing organization or somewhere else and then through that process you really start to get it and then you can start to be more um you know proficient in AI in much more substantive ways within the business.</p>
</details>

主持人：是的。我希望所有观看这个播客的其他CEO和高管都能听听你刚才说的，因为仅仅指示你的工程师构建AI是不够的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And I want all the other CEOs and executives watching this podcast to listen to exactly what you said because it is not sufficient to instruct your engineers to build AI.</p>
</details>

Matt Britain：你将一无所获。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You'll go nowhere. Yep.</p>
</details>

主持人：不，你将一无所获。我经常说，这是一个领导者实际需要培养硬技能的时刻，也就是说，你实际上拥有可访问的技能来使用AI、构建AI工具，使用这些无代码版本的工具来真正提升自己的能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, you'll go nowhere. And I've said this a lot. This is a moment for actual hard skill building um in leaders, which is you actually have accessible skills to build in using AI, building AI tools, using these sort of like no code versions of tools to really upskill yourself on the capability.</p>
</details>

这将使你成为一个更具相关性的领导者，更……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's going to make you a much more relevant leader, much more.</p>
</details>

Matt Britain：是的。你正在打开引擎盖。就像你把车开进去，你对修车一无所知，他们告诉你修变速箱要4000美元，你会说：“好吧，因为你需要修变速箱，对吧？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. You're opening up the hood. It's like you think about if you bring your car in and you don't know anything about fixing a car and they tell you $4,000 to fix a transmission, you're gonna say, "Okay, because you need your transmission fixed, right?"</p>
</details>

但如果你真的打开引擎盖，即使你不是机械师，你也了解变速箱的工作原理，也许你会说：“嗯，修这个真的不应该花4000美元。应该接近2000美元。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if you actually just open up the hood and you understand how transm transmission works, even if you're not a mechanic, maybe you can say, "Well, it really shouldn't cost $4,000 to fix this. Should really cost close to 2,000."</p>
</details>

我认为这与AI的情况类似。所以，我的第一步是构建一个我称之为“触发器自动化”的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think that's sort of the same analogy when it comes to AI. So um so I so the the the first step is building what I call a trigger automation.</p>
</details>

这个触发器自动化基本上来自我们创建的一个工具，我们称之为**Browse AI**（一个网页数据抓取和监控工具）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and this trigger automation essentially comes from a tool uh that we've created called um that we use called browse AI. So this is browse AI.</p>
</details>

Browse AI基本上会运行一个脚本，从Gong通话中抓取信息。所以你在这里看到的是一个URL字符串。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and essentially a browse AI does is it runs like a a script where essentially scrapes information from gone calls. So what you see here is a URL string.</p>
</details>

你需要一个URL字符串来识别传入的通话逐字稿。Gong没有提供一个简单的方法来做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You need a URL string in order to identify a a call transcript as it comes in. And Gong didn't have an easy way to do this.</p>
</details>

所以我基本上开始调出大量的通话逐字稿。我开始看到它们都以相同的方式开始，并且都以通话ID结束。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I basically start to bring up a bunch of uh call transcripts. And what I start to see is they all kind of start the same way and they just end it with this call ID.</p>
</details>

所以，每次通话唯一不同的是这个通话ID。因此，我基本上需要弄清楚如何为Zapier创建一个数据流，让它知道每次新通话发生时的通话ID。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the only thing different from call to call was this call ID. So basically I needed to figure out how can I create a feed for Zapier. So it knew the call ID of each new call as as it kind of occurred.</p>
</details>

所以，第一步本质上是一个触发器，当有新通话进来时，它会从Gong抓取信息。Gong会提供通话ID。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the first step is essentially a trigger where a new call comes in right and then what happens is when the new call comes in what it will do is it'll basically scrape the information from Gong. And one of the things Gung will give you is that call ID.</p>
</details>

所以我能够看到通话ID。如果我点击这里并滚动，你会看到有一个通话ID，我可以在这里识别出来，就在这里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm able to actually see the call ID. So if I click here um and I scroll over, you'll actually see that there's a call ID that I can identify here um which is right here.</p>
</details>

所以，将通话ID附加到URL上，基本上就是我需要提供给Browse AI的所有信息，以便它能够访问该URL并抓取通话逐字稿。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so that appended to the URL essentially is all I needed to give browse to be able to go to that URL and essentially scrape the call transcript.</p>
</details>

它没有直接连接，我不得不将其“拼凑”起来。所以你会看到，它基本上知道根据传入的信息运行什么，然后它会转到这个页面，我将在这里向你展示，这里实际上是逐字稿所在的位置，它能够抓取整个逐字稿。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it it wasn't connected. I had to kind of hack it together. So if you'll see here, it basically knows what to run just based upon what's brought in and then it will go to this page which which I will show you here which actually is where the transcript is and it's able to essentially scrape the entire transcript.</p>
</details>

所以这是通过Browse AI访问Gong页面并获取这些信息的原始逐字稿。但我已经启动了它。所以第一步基本上启动了抓取，然后当抓取完成时，它会启动我的下一个自动化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is the raw transcript that's coming from the gong calls by browse AI going to that gong page and just getting this information. But I had that initiated. So that first step essentially initiates the scrape and then when the scrape is completed, it starts my next automation.</p>
</details>

主持人：是的。所以，对于那些试图自己构建东西的人来说，值得指出的是，如果你的工具本身没有暴露你想要的数据，那也没关系。在这个时代，你通常可以使用另一个工具或替代方案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And so just to call this out for folks that are trying to build their own thing, it's okay if your tool itself does not expose the data you want. In this age now, you can usually use another tool or an alternative.</p>
</details>

Matt Britain：总有办法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's always a way</p>
</details>

主持人：或者一个**LLM**（Large Language Model: 大型语言模型）来真正从任何系统中提取你需要的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">or an LLM to really pull the data you need out of out of any system.</p>
</details>

Matt Britain：是的。我当时可能就放弃了，Claire，那一步可能花了我最长的时间。如果我没有通过那一步，我想很多人可能都会在那一步放弃。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And I could have given up Claire like at that point at that probably one step took me the longest. And if I never would have gotten past that step I and I think a lot of people would probably have given up at that step.</p>
</details>

但当我克服那个障碍后，其他一切都变得容易多了。这就像是生活的类比，构建这样的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But after I got over that hurdle then everything else became so much easier. And it's really like an analogy for life like building something like this.</p>
</details>

我在构建过程中也遇到过其他挫折。但你只需要知道总有办法，仅仅因为一个工具做不到，不代表它就不能完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there are other stumbles I've had along the way in building things. But you just have to know that there's a way and and using and because just because a tool doesn't do it doesn't mean it can't be done.</p>
</details>

现在回想起来，这似乎很明显。现在如果我遇到类似的挑战，我能立刻解决，因为每次你解决一个问题，下次你需要构建东西时，你的“工具箱”里就会有各种各样的想法和“技巧”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this like in in the rearview mirror seems obvious. And now if I had a similar challenge, I'd be able to do it right away because what will happen is every time you solve a problem such as that, the next time you need to build something, you'll have all these sort of ideas and like hacks um in your tool chest, so to speak.</p>
</details>

现在我到了一个地步，你告诉我构建什么，我都知道怎么构建，因为我只是知道所有这些小问题如何解决。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then now I'm at a point where there's like nothing you can tell me to build that I wouldn't know how to build because I just know how all these little things can be solved for.</p>
</details>

而且你在这个过程中学习编码。比如，你通过亲自动手并创建自动化，学习**JSON**（JavaScript Object Notation: 一种轻量级的数据交换格式）的含义以及所有这些东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you learn coding along the way. Like along the way, you learn what JSON means and all these things by having your hands on it and and and creating the automations.</p>
</details>

主持人：100%。我本来想说的是，这就是我喜欢的CEO。我喜欢一个知道如何构建解决方案的CEO。我喜欢一个知道没有问题是无法解决的CEO。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">100%. What I was going to say is this is a CEO that I love. I love a CEO that knows how to build it. I love a CEO who knows that like no problem is not solvable.</p>
</details>

我认为，即使是亲自动手使用一些无代码工具和AI工具，也能让你对构建的内容有更多的背景，从而变得更大胆。好的，所以你有了……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and I think just even getting hands- on with some of these no code tools and these AI tools just gives you a little bit more context to be bolder about what you build. Okay, so you have</p>
</details>

### 自动化工作流：从数据抓取到LLM分析

Matt Britain：没错。所以任务完成了，对吧？通话结束了。所以下一个触发器是当Browse AI成功抓取通话逐字稿时触发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's right. So the task is done, right? The the call is done. And so this next trigger is trigger when browse AI successfully scrapes a call transcript.</p>
</details>

它做的第一件事显然是触发它。你会看到它会给我整个通话的逐字稿。现在就好像：“好的，现在我开始工作了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the first thing it'll do is obviously it'll trigger it. And you'll see here it'll give me the entire transcript of the call. Um, and that's basically now now it's like, okay, now I'm in business.</p>
</details>

现在我拥有我需要的一切。Gong通话逐字稿中还有很多其他内容，我会在整个过程中用于数据库查找，我们稍后会深入探讨。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right now I have everything I need. And there's a bunch of other stuff in that gun call transcript that I use to do database lookups throughout that we'll kind of get into.</p>
</details>

我会在拉取这类数据之前设置大约2分钟的延迟，只是因为我想确保所有数据都已导入，抓取已完成，而且如果你不设置延迟，尤其是在快速运行大量任务时，很容易出错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I'll have a delay of about 2 minutes before pulling in data like this just because I want to make sure that all the data is brought in, the scrape is done, and I'm just you you're prone to errors, especially if you're running a lot of um tasks quickly if you don't put in a delay.</p>
</details>

所以我总是喜欢一到两分钟的延迟作为缓冲，让系统赶上，这样它就不会崩溃。所以，这有点不言自明。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I always like a one or two minute delay as a buffer just to let the system catch up so it doesn't break. So, so that that's kind of self-explanatory.</p>
</details>

我做的下一件事是运行一个格式化程序，基本上是删除逐字稿中的所有HTML。所以，当你抓取时，有时它会拉入HTML，我不需要那个。我只想要实际的文本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The next thing I do is I run a format where I'm basically removing all the HTML from the transcript. So, when you scrape sometimes it'll pull in the HTML and I don't want that. I just actually want the actual text.</p>
</details>

所以我运行一个格式化步骤来删除所有这些。我还会提取任何可能混淆分析的内容。所以，我基本上只是获取原始文本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I run a formatter step where I'm removing all that. Um, I'm pulling out anything I need to that might confuse uh the analysis. So, I'm just essentially getting the raw text.</p>
</details>

然后我开始用除了Gong逐字稿之外的其他信息来丰富数据，因为我有了Gong逐字稿，但我知道我想构建的一件事是，通话结束后，我希望能够告诉参与通话的销售人员发生了什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then what I do is I start to enrich the data with other information besides just the gong transcript because I had the gong transcript, but one of the things I knew I wanted to build was after the call is done, I wanted to be able to tell the salesperson that was on that call what transpired.</p>
</details>

我希望他们能够轻松地撰写跟进邮件。我希望能够识别他们的主管是谁，对吧？但这并不是通过Gong直接拉取的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I wanted to make it easy for them to write a follow-up email. I want to be able to identify who their supervisor was, right? But that wasn't directly pulled in through through Gong.</p>
</details>

然而，我们有其他数据源可以连接这些信息。例如，我们这里有一个**Google Sheet**（谷歌表格）。如果你查找这个ID，它会将ID连接到品牌，品牌连接到用户，这是一个我们创建的完全独立的工作流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">However, we have other data sources that essentially can connect that information. So, we have a Google sheet here. For example, if you look up this ID, it connects the ID to the brand and the brand to the user, which is a whole separate workflow that we created.</p>
</details>

所以它能够连接这些点，因为当你运行自动化时，你不会总是从触发器中获取所有数据。有时你需要补充完整。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it can kind of connect the dots because when you're running an automation, you're not always going to get the data from the trigger. Sometimes you have to round it out.</p>
</details>

补充完整的方法是使用像Google Sheets上的查找功能。所以你把所有东西都拉进来。这就像你在徒步旅行，你想要在到达目的地之前沿途获取所需的补给。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the way you round it out is using things like lookups on Google Sheets. So, you're pulling everything in. It's almost like you're going down a path, you're on a hiking trail, and you want to be able to pull the supplies you need along the way before you get to the destination.</p>
</details>

当我开始时，我有一个背包，但背包里没有水。现在我有水了，对吧？因为我从这里拿到了。你正在经历一个旅程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And when I started, I had a backpack, but the backpack didn't have water in it. And now I have water, right? Cuz I grabbed it from here. And you're kind of going along a journey.</p>
</details>

我个人喜欢Zapier而不是其他工具的一个原因是，我的思维方式是一个非常顺序的框架，而像**N8N**（一个开源的自动化工作流工具）或**Botpress**（一个开源的对话式AI平台）这样的其他平台，它的分支看起来就像章鱼一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I personally one reason why I love Zapier versus other tools is the way my mind thinks is in a very sequential framework where there's other platforms like NA and you know or bot press where it's basically like looks like you almost like an octopus how it's branching out.</p>
</details>

我很难那样思考。现在随着时间的推移，我不得不这样做，因为我基本上是在描述自动化和代理之间的区别，因为代理不是确定性的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I just have a hard time thinking that way. Now over time I've had to because I'm basically describing the difference between automation and agents cuz agents are not deterministic.</p>
</details>

代理有不同的方式，我的大脑一直在努力理解代理，现在我终于开始明白了。但基本上，我看到人们在AI中必须经历的进步是，你首先将AI用作工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Agents have different ways and my brain has struggled with understanding agents and I'm finally getting there. But basically the progression I see people having to take in AI is you start with using AI as a tool.</p>
</details>

你知道，**Chat GPT**（ChatGPT: OpenAI开发的大型语言模型）给我一个千层面食谱。然后是自动化，我们现在正在谈论的，然后你进入代理的世界，它不仅仅总是从第一步到第二步到第三步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know chat GBT give me a recipe for lasagna. Then it's okay automations which we're talking about now and then you get into the world of agents where it's not just always going from step one to two to three.</p>
</details>

它可能会根据你想要完成的任务从第一步到第三步到第八步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It might go from step one to three to eight based upon what you're trying to accomplish.</p>
</details>

主持人：好的，给你一个提示，或者给这里的听众一个提示，我发现一个很好的练习是，拿一个基于顺序步骤的自动化，并尝试使用例如Zapier代理，然后用自然语言分步骤描述该自动化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, one tip for you or one tip for the listeners here I found is we'll go through this whole thing and a good exercise I found is taking a sequential stepbased automation and trying to use for example Zapier agents and just describe that automation in natural language in steps and see how close you can get even that replication across modalities can be a good way to to test your exercise.</p>
</details>

看看你能达到多接近，即使是跨模式的这种复制也是一个很好的测试练习方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and see how close you can get even that replication across modalities can be a good way to to test your exercise.</p>
</details>

Matt Britain：是的。100%测试一下。是的，它正在查找信息。所以它能够基本上获取信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Just test it out 100%. Yeah. and it's looking up the information. So, it's able to basically grab the information.</p>
</details>

然后在我觉得我拥有所有信息之后，我要做的下一件事就是开始引入**LLM**（大型语言模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then after I feel like I've had all the information, the next thing I'm going to do is this where I'm starting to pull in the LLM.</p>
</details>

这里一个重要的部分是，首先要知道使用哪个LLM。我一直很难做到的一件事是，我们现在有太多的自动化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And an important part here is first and foremost knowing what LLM to use. And one thing I've had a hard time with is actually just we have so many automations now.</p>
</details>

我认为我们可以在其背后的组织设计方面做得更好，因为我构建了太多的东西，但并不总是进行适当的交接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think we can do a better job at the organizational design behind it because what happens I built so many things and I don't always do proper handoffs.</p>
</details>

所以，例如，这里它应该总是说使用最新的稳定版本，但它没有，对吧？所以，我现在就当场更改它，因为我想使用最新版本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, for example, here I it should always say use latest stable version, but it didn't, right? So, so I'm going to change it now here live on the spot because I want to be using the latest version.</p>
</details>

你还需要确保你正在使用最好的模型。我仍然认为**GPT-4 Turbo**（OpenAI的GPT-4模型的一个优化版本，处理速度更快，成本更低）可能是这个任务的好模型，但你可以在像Zapier这样的平台上看到，有多个不同的版本可供选择，并且它们显然都会消耗不同数量的“代币”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You also want to make sure you're using the best model. I still think GBT4 Turbo is probably a good model for this, but you could see in the platform like Zapier, there are multiple different versions that you can choose from based upon and obviously they all eat up different amounts of coins and um but it's pretty incredible in terms of all the models.</p>
</details>

但就所有模型而言，这相当不可思议。现在有了**GPT-5**（OpenAI下一代大型语言模型），它应该能够为你选择，但我不清楚这在API的上下文中如何运作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now with GPT5, it's supposed to be able to choose for you, but it's unclear to me how that works in the context of an API.</p>
</details>

出于某种原因，在Zapier中，你仍然可以选择。你知道，我花了很多时间测试。我会在Chat GPT中测试各种不同模型的样本输入，以确保。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for some reason, still in Zapier, you're still able to choose. And you know, I I spend a lot of time testing. I'll go in the chat GPT and test a sample input in a variety of different models to make sure.</p>
</details>

我倾向于使用输出最好、速度最快的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's like whatever's the best output the quickest is what I'll tend to use.</p>
</details>

主持人：所以你仍然使用经典的GPT-4 Turbo，一个经典的、老牌的最爱，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you're still losing classic GPT4 Turbo, a good old classic classic favorite, right?</p>
</details>

AI本应让工作更轻松，但我经历过。数周的设置，与工程团队无休止的来回沟通，以及团队从未真正采用的另一个工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI is supposed to make work easier, but I've been there. Weeks of setup, endless back and forth with engineering, and yet another tool the team never really adopts.</p>
</details>

这就是我使用Zapier的AI编排平台的原因。它连接了近8000个应用程序，所以我终于可以将AI投入工作，而无需戏剧化的过程，无需延迟，也无需每次我想自动化一些事情时都拉上工程团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's why I use Zapier's AI orchestration platform. It connects with nearly 8,000 apps, so I can finally put AI to work without the drama, without the delays, and without pulling engineering in every time I want to automate something.</p>
</details>

使用Zapier，你可以在几天而不是几周内，在整个公司推出AI驱动的工作流，完成实际工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With Zapier, you can roll out AI powered workflows that do real work across your whole company in days, not weeks.</p>
</details>

我每天都使用Zapier。它会自动响应潜在客户，提供丰富且个性化的数据。它每周检查我的日历，并提供更智能的时间管理方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I use Zapier every single day. It automatically responds to leads with enriched personalized data. It checks my calendar weekly and offers smarter ways to manage my time.</p>
</details>

它甚至为我收件箱中的每个新请求起草邮件。所有这些都在后台悄悄运行，这样我就可以专注于重要的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it even drafts emails for every new request that lands in my inbox. All of that running quietly in the background so I can focus on the work that matters.</p>
</details>

Zapier专为规模化而构建，具有企业级的安全性、合规性和治理。它受到**Dropbox**（云存储服务）、**Airbnb**（在线住宿预订平台）、**Open Door**（在线房地产交易平台）以及数千家公司的团队信任。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And Zapier's built for scale with enterprisegrade security, compliance, and governance. It's trusted by teams at Dropbox, Airbnb, Open Door, and thousands more.</p>
</details>

访问try.zapier.com/howiai，了解更多关于Zapier如何为你的整个组织带来AI编排的力量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Go to try.zapier.com/howi to learn more about how Zapier can bring the power of AI orchestration to your entire org.</p>
</details>

我们来谈谈这个提示。告诉我你首先想做哪些总结练习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's talk a little bit about this this prompt. So tell me what first kind of summarization exercises you want to do here.</p>
</details>

### 核心摘要生成器：量化客户情绪与识别改进领域

Matt Britain：是的。所以基本上在这里，我可以使用像GPT-4这样的模型的原因是——你知道，其中一部分只是为了跟上模型的持续更新，但如果东西没有坏，我就不会去修它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So basically here and the reason I can use a model like GB like like a GPT4 is and and you know part of it again is just keeping up with continuing to update the models but I don't fix things if they're not broken.</p>
</details>

所以这个特定的Zap对我们来说完美运行，它提供了我们所需的一切，我们不需要在这里进行更严格的分析，因为它只是我们想要识别的一些核心内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this particular Zap works perfectly for us and it gives us everything we need and we don't need more rigor in analysis here because it's just some core things that we want to identify.</p>
</details>

所以我宁愿不花额外的钱，甚至不去深入研究。但在某些时候，如果它不起作用，如果它不够快，我就会考虑其他模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'd rather not spend the extra money and even go through it. But at certain point, if it didn't work, I would look at models if it wasn't going fast enough.</p>
</details>

有趣的是，旧模型往往随着时间的推移运行得越来越快，而且它们实际上出错的次数更少，有时旧模型也会随着新模型的更新而更新。所以，这不像你开着一辆84年的雪佛兰。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's interesting is the older models tend to work faster and faster and faster over time and they actually error out less and and sometimes the older models get updated as a newer models update as well. So, it's not like you're you're driving in an 84 Chevy, so to speak.</p>
</details>

所以，这里是关键一步。这被称为“核心摘要生成器”。它的任务是分析Suzie和我们客户之间的客户成功通话逐字稿，以评估客户关系的健康状况并识别改进领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, here this is a key step. This is called core summary generator. And what this is asked to do is analyze the customer success call transcript between Susie and our client to gauge the health of customer relationships and identify improvement areas.</p>
</details>

摘要以客户的公司名称、主要参与者开头，然后继续，询问关键利益相关者，然后它会提供通话概述，我们描述通话的目的、主要议题和结果，排除闲聊。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">start summaries with the customer's company name key participants and then kind of going through it ask for the key stakeholders and then it gives a call overview we describe the call's purpose the main topics and the outcome exclude small talk.</p>
</details>

然后我有一系列不同的指令：评估整体客户情绪，注意任何挫折或担忧；提供一个1到10的情绪评分，其中10表示高度满意，1表示可能停止我们的服务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then I have a variety of different instructions assess the overall customer sentiment noting any frustrations or concern provide a sentiment score from 1 to 10 where 10 reflects high satisfaction and one indicates potential discontinuation of our services.</p>
</details>

这是关键，因为它允许我们量化客户情绪随时间的变化，我们实际上将其与实际流失率进行了基准测试。它在预测方面具有高度的准确性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is the key thing because it allows us to quantify customer sentiment over time and we actually benchmarked this against actual churn. So and and it's been highly predictive um in terms of the if you take the average sentiment score of customer calls over the past year, it's a huge predictor of if the customer is not just going to turn, but are they going to upsell if they're really happy?</p>
</details>

如果你计算过去一年客户通话的平均情绪得分，它能很好地预测客户是否会流失，或者如果他们非常满意，是否会追加销售。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if you take the average sentiment score of customer calls over the past year, it's a huge predictor of if the customer is not just going to turn, but are they going to upsell if they're really happy?</p>
</details>

另外，客户在通话中做得非常好的一件事，识别出来，以及他们本可以做得更好的一些事情，然后列出关键的下一步行动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">also one great thing the customer successfully did on the call kind of identify that and what are some things that they actually could have done better and then list key next steps.</p>
</details>

所以这基本上只是一个总体的提示，它会接收一个逐字稿，并为我识别所有这些信息，然后我可以用这些内容做各种不同的事情，但它是整体输出的很大一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is basically just an overarching prompt where it'll take a uh a transcript and it'll identify all this information for me and then that content I can do a variety of different things with but it's a huge part of the overall output.</p>
</details>

所以我想在这里指出的一点是，当我阅读你的提示时，在一个理想的世界里，你所有最优秀的客户成功经理（CSM）会在每次通话后以完美的方式完成这些工作，进行出色的、客观的自我评估，所有这些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So one of the things I want to call out here as I was reading your prompt is in an ideal world all your best CSMS are doing this after every call in a perfect way with great you know objective self evaluation all this kind of stuff.</p>
</details>

而现实是，我们都太忙了，客户成功人员或销售人员可能一个会议接一个会议，到一天结束时，他们试图整理笔记并输入一些小东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the reality is we're all so busy that you know your customer success folks or your sales folks are probably going meeting to meeting to meeting and at the end of the day trying to figure out their notes and put little things in.</p>
</details>

我只是觉得这个系统的好处是，你可以让客户成功经理或客户经理的工作变得轻松很多，让他们通过自动化一些他们本会做的工作，从而在工作中表现出色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I just think what's nice about this is you can make the customer success or account manager's job a lot easier and let them be exceptional at their job by automating some of the work that they they would do.</p>
</details>

所以，我认为这是一个很好的“卫生步骤”，让任何人思考，你知道，开完会后，如果我要尽力做到最好，我会在每次会议后做哪五件事？然后就为自己自动化这些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I think it's a really good hygiene step for anybody to think, you know, after I'm coming out a meeting, if I were to do my best job possible, what are the five things I would do coming out of each meeting? And then just automate that for yourself.</p>
</details>

然后你就知道每次都会这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you know that every time you're going to be doing that.</p>
</details>

### 内部沟通与预警系统

Matt Britain：是的。我还有很多其他步骤，我不会全部讲完，因为它们太多了。但基本上，它会在**Slack**（一个团队协作和即时通讯平台）上查找用户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep. So the bunch of other steps I have and I'm not going to go through all of them because there's a ton of them. But basically it it looks up the user on Slack.</p>
</details>

所以我了解我们公司在Slack上的员工。它会识别那些不是我们公司的人，这样你就可以将他们排除在外。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I understand the user main our employee on Slack. It identifies the people who aren't from our company. So you can kind of exclude them.</p>
</details>

它能够在这里找到用户。所以我有时会使用Slack作为查找工具，因为我们公司在Slack上有Power Directories。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um it's able to find the user here. So I use Slack as a as a lookup sometimes because our companies from Power Directories on Slack.</p>
</details>

所以如果我想以自动化方式获取某人的电子邮件地址，并且我知道他们的名字，我实际上可以在Zap中使用Slack作为查找工具，而无需实际向Slack发布任何内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if I'm trying to get someone's email address in automated fashion and I have their name, I can actually use Slack as a lookup tool in Zap without even actually posting anything to Slack.</p>
</details>

所以有时这些工具实际上可以用于非其核心目的的其他用途。然后基本上，我做的主要事情之一是发送频道消息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So sometimes these tools actually can be used for other purposes that's not their core purpose. And then basically the fir one of the main things I do from this is I send a channel message.</p>
</details>

所以基本上，通话结束后，你可以看到新的客户成功通话者有账户、机会、我们公司的通话负责人、通话日期，并且它基本上有那个摘要，然后被发送出去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So basically after the call is done you can see new customer success caller has the account the opportunity the leader of the call from our company the date of the call and it basically has that summary um that gets sent out.</p>
</details>

所以我们有一个频道，这是一个持续的信息流，我作为CEO显然非常关注，我现在就分享一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have a we have a channel that that's a constant feed that I obviously the CEO I'm very attuned to and I'll I'll share it right now where basically every time a customer call is done it just pops up on Slack and I'm able to really you know we have 300 employees at our company and I'm really able to get a sense of the kind of pulse of the company what customers care about just based upon looking at at something like this and it's you know that alone if that was the only invention that came out of a high. It would be pretty incredible if you think about it.</p>
</details>

基本上，每次客户通话结束后，它都会在Slack上弹出，我真的能够了解公司的脉搏，客户关心什么，仅仅通过查看这样的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Basically, every time a customer call is done it just pops up on Slack and I'm able to really you know we have 300 employees at our company and I'm really able to get a sense of the kind of pulse of the company what customers care about just based upon looking at at something like this and it's you know that alone if that was the only invention that came out of a high.</p>
</details>

如果你仔细想想，仅仅这一点，如果这是AI带来的唯一发明，那也将是相当不可思议的。这只是我们做的众多事情之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It would be pretty incredible if you think about it. And this is just like one of many things that we do.</p>
</details>

所以我现在要打开Slack。如你所见，这是一个示例通话，它显示了关键利益相关者是谁，通话试图建立什么，情绪得分是多少，得到了八分，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm going to pull up and slap right now. As you can see here, this is a sample call and it shows who the CA key stakeholders will were uh what the call attempted to establish, what was the sentiment score, got an eight, right?</p>
</details>

追加销售机会、反馈和下一步行动。这里基本上有一个逐字稿。如果我们有不高兴的客户，这非常有用，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Opportunities for upselling feedback and next steps. And it has basically a transcript here. And it's great for us to do if a customer is not happy, right?</p>
</details>

如果他们因为某种原因得分低于七分，我们有一个流失通知频道，基本上叫做“流失早期预警系统”，它会告诉我们客户是否因为任何原因不高兴。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If they um you know, for some reason uh score below a seven, we have a churn uh notification channel um where basically it's called churn early warning system where it'll tell us if a customer is not happy for whatever reason.</p>
</details>

我们不得不对其进行调整，因为有时客户会说他们不高兴，但可能他们只是对自己的业务进展不满意。所以这不总是一门科学。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and and and we've had to modulate it cuz sometimes a client will say they're not h it'll say the client's not happy but maybe they're just not happy with how their business is going. So it it's it's not always like a science.</p>
</details>

然后有时在频道里，销售代表会说：“哦，不，他们很好。只是这样。”但在很多情况下，正如你之前所说，有时销售代表可能不想告诉任何人，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and then in the channel sometimes the rep will say, "Oh, no, they're fine. It's just this." But we have in many instances, and to your point earlier, like sometimes the the rep might not want to tell anybody, right?</p>
</details>

也许是周五下午，他们只是不想处理。然后发生的情况是，我们最终忘记了，然后客户在三个月后流失了，我们就会想：“你为什么不告诉我们？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe it's a Friday afternoon, they just don't want to deal with it. And then what happens is we end up forgetting about it and then the customer turns three months later and we're like, "Why didn't you just tell us?"</p>
</details>

我们不再需要那样做了。我们不再需要问别人与**Proctor and Gamble**（宝洁公司）的通话进展如何。它就在这里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We don't have to do that anymore. We don't have to ask somebody how that call went with Proctor and Gamble. It's just here.</p>
</details>

主持人：是的。好的，太棒了。所以我们保留了逐字稿。你发布了所有这些。所以公司里的每个人都可以访问客户通话和摘要，这对于整体情绪分析、知识共享和透明度来说非常棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep. Okay, great. So, we keep the transcript. You post all of them. So everybody in the company has access to customer calls and summaries which is just great for general sentiment analysis, knowledge sharing, transparency.</p>
</details>

你会把那些情绪分析得分低的通话放到一个“预警区”——流失警报频道，我相信你会给予额外的关注，以便能够提前应对潜在的流失风险，作为一名B2B行业的女性，我非常非常喜欢这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You take any ones where the sentiment analysis is low and you put them in sort of like a warning area churn alert channel um where I'm sure you're paying a little extra attention so you can get ahead of potential churn risks which as a B2B girl I really really love.</p>
</details>

所以这更像是账户运营方面的事情，但我知道你还处理了很多营销方面的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then so that's that's a little bit more like the account ops side of things, but then I know you take off a bunch of marketing.</p>
</details>

### AI驱动的营销与销售支持

Matt Britain：是的，还有很多其他事情。是的。所以下一个，同样，这都是同一个自动化的一部分，是另一个LLM调用，我们基本上描述了Suzie是做什么的，我们说分析逐字稿中关键的兴趣领域数据，并输出我们应该在Google上购买的一系列关键词。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, there's a bunch of other things. Yeah. So this next one, again, this is all part of the same automation is another LLM call where we're basically describing what Suzie does and we're saying analyze the key areas of interest data in the transcript and output a bunch of keywords that we should be buying in Google.</p>
</details>

所以如果客户正在使用描述他们感兴趣的内容或我们销售的产品词语，而我们没有为这些词语运行Google关键词广告，我们就会这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if customers are using words that we that are describing what they're interested in or what we sell and we're not running Google keywords for them, we want to.</p>
</details>

所以基本上这些关键词会被提及，我们提取它们，然后运行自动化，自动将这些关键词添加到我们的Google广告系列中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So basically these keywords will be mentioned, we extract them and then we run an automation to add those keywords to our Google campaigns automatically.</p>
</details>

主持人：所以你不仅利用了账户层面的特定上下文，而且你还在说我们的客户会用他们自己的语言告诉我们他们在寻找什么，他们试图解决什么问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So not only are you taking sort of this is I love this one, so I want people to pay attention. So, not only are you taking the account level specific uh context, but you're saying our customers will tell us in their words what they're looking for, what problems they're trying to solve.</p>
</details>

这些客户通话是丰富的市场洞察来源。所以你将使用这些客户通话来实际提取市场覆盖区域、关键词、你可以投入营销资金的地方，然后接触与你成功合作的客户相似的客户，这是一个非常好的闭环解决方案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These customer calls are a rich source of market insight. And so you're going to use these customer calls to actually extract out market surface areas, keywords, places where you can put marketing dollars against and then reach customers similar to the customers that you're successful with, which is a really nice closed loop solution.</p>
</details>

Matt Britain：没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that's right.</p>
</details>

主持人：你知道，我们刚才谈到，在一个理想的世界里，客户成功经理会提供这样的笔记摘要。在一个理想的组织中，你的付费搜索经理会监控所有这些通话并为你做这些事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and again, you know, we were talking about how this note summary is the the way in an ideal world a customer success manager would provide notes. In an ideal organization, your, you know, paid search manager would be monitoring all these calls and doing all this for you.</p>
</details>

但我们不住在理想世界里，人们都很忙。所以，这不仅是从一个人的角度来设计，也是从一个团队的角度来设计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we don't live in ideal worlds and people are busy. And so again, this is is not only designing from the point of view of like what would a person do, but also what would a team do.</p>
</details>

Matt Britain：没错。我们做的另一件事是，我们已经将其整合到教练体系中。所以下一步基本上叫做“个人通话反馈”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's right. The other thing we do is we've done a coach into this. So the next step essentially is called individual call feedback.</p>
</details>

它实际上会为通话中的人创建一份反馈笔记。所以这只是发送给销售代表或客户销售代表，告诉他们你做了什么，你做对了什么，你做错了什么，并在通话结束后立即发送给他们，这样他们就能知道如何改进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what this does is it actually creates a feedback note to the person on the call. So this just goes to the sales rep on the on the sales or customer sales rep saying here's what you did, here's what you did right, here's what you did wrong and actually sends it to them right afterwards so they understand how to get better,</p>
</details>

这本来需要我们雇人来监督他们并告诉他们，而他们自己也知道。有趣的是，那些真正想变得更好的人，AI是一个不可思议的工具，因为他们会想要这种反馈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">which is something that we would had to hire somebody to be on their back and tell them which they know on their own. What's interesting is like the people that really want to get better, this is AI is an incredible tool because they're going to want this feedback.</p>
</details>

而那些一开始就不想听任何人意见的人，他们也不会想听这个，但他们无论如何都不会做得好。所以这说明，它会让优秀的人变得更好，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the people who never really wanted to hear from anyone to begin with, they're not going to want to hear this, but they wouldn't have been good in either way. So that kind of goes to the point that like it's going to make the good people that much better, right?</p>
</details>

我们将此添加到数据集中。所以我们有一个名为“反馈通话数据集”的东西。这样我们就可以实际看到是否存在趋势，比如AI是否检测到这个人总是缩短通话时间，或者他们总是打断客户，或者他们不谈论某些话题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we add this to a data set. So we have a a feedback called data set. So we can actually see are there trends like is AI detecting that this person always cuts calls short or they always interrupt the customer or they don't talk about and then when it comes time to reviewing them it's all data driven it's not just myopic if if managers change over we have all this information and the good ones want this information.</p>
</details>

然后当需要评估他们时，这一切都是数据驱动的，而不是短视的。如果经理换人了，我们仍然拥有所有这些信息，而优秀的经理会想要这些信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then when it comes time to reviewing them it's all data driven it's not just myopic if if managers change over we have all this information and the good ones want this information.</p>
</details>

是的，我实际上想说的是，你正在从个人贡献者、客户成功经理（CSM）、客户经理（AE）的角度谈论这个问题，但我在想的是，AE和CSM的绩效很大程度上取决于他们是否有好的销售经理教练？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, what I was actually going to reflect on is you're talking about this from the point of view of the individual contributor, the CSM, the AE, but what I was thinking is so much of AE and CSM performance is really gated on do they have a good sales manager coach?</p>
</details>

他们是否有好的销售高级副总裁（SVP sales）能够及时提供有针对性的指导？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do they have a good SVP sales that can actually provide them targeted coaching on all of their right when it's relevant?</p>
</details>

Matt Britain：这有点像拉平了竞争环境。你的经理可能很棒，也可能很糟糕。在每次通话中，你都会得到关于你表现的客观反馈，所以这再次有助于提升整个组织的绩效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this sort of like evens the playing field. Your manager could be great, your manager could be terrible. in every call you're going to get kind of objective feedback on your performance and so again it helps uplevel the performance across the organization</p>
</details>

主持人：而且它被民主化了，你说得对，100%。我们意识到的另一件事，回到解决问题，我们从销售团队和客户团队那里听到，你知道，在通话后写一封好的跟进邮件需要花费大量时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and it's democratized you're right 100%. The other thing we realized going back to problem solving is we heard from our sales team and our customer team you know it takes so much time for us to write a good follow-up email after the call.</p>
</details>

所以现在我们添加了跟进邮件撰写器，它基本上会撰写一封他们想要发送的跟进邮件，而且设计得非常好，然后发送给他们，让他们可以复制粘贴并发送。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now we added follow-up email writer where essentially you write an email that they we that they would want to send as a follow-up to the call and actually just and and it's designed very well and it's sent to them for them to basically copy and paste it and send it.</p>
</details>

这只是他们的一种方式，所以在通话结束后，他们会在收件箱中收到反馈和这封邮件，他们可以复制粘贴发送或编辑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and it's just a way for them so right after the call they'll get the feedback in their inbox and they'll get this email and they can copy and paste and send or edit it.</p>
</details>

你知道，我们本可以将其自动化，但这就是“人在回路中”的重要性，对吧？我们不想，如果上下文错了怎么办？如果他们不想立即发送反馈怎么办？如果他们想抄送新人怎么办？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and you know we could have made this automated but you know that's where the human in the loop matters right we don't what if there's the context is wrong what if they don't want to send the feedback right away? What if they want to copy somebody new? So that's why we have to have a human in the loop here.</p>
</details>

所以这就是为什么我们必须在这里有人在回路中。流失早期预警检测器基本上通过两条不同的路径发送，这些路径基本上决定了我们应该通知谁，不应该通知谁。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the churn early warning detector basically sends through two different paths and these paths essentially um kind of dictate who we should notify and who we shouldn't.</p>
</details>

所以我们现在也开始从这些数据中做更多营销驱动的事情。其中之一是我们开始创建一个数据库。这被称为“客户档案数据库”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we've also now started to do much more marketing driven things from this data. One of which is we start to create a database. This is called customer profile database.</p>
</details>

客户档案数据库的作用是，基本上在每次通话后构建数据，包括客户的角色是什么，他们对Suzie的哪些产品领域最感兴趣，他们对哪些业务趋势最感兴趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what customer profile database does is essentially structures data after each call with things like what's the role of the customer, what product areas of Suzie are they most interested in, what business trends are they most interested in.</p>
</details>

我们有一个跨所有通话的结构化数据库，这些数据被输入到一个**GPT**（Generative Pre-trained Transformer: 一种基于Transformer架构的预训练生成模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we have a structured database across all the calls which gets fed into a GPT.</p>
</details>

所以如果一个销售人员要与一家汽车公司的品牌经理通话，他们可以说：“汽车公司的品牌经理对哪些趋势或我们的产品最感兴趣？”它会立即告诉他们，因为这些聚合数据存储在我们部署的另一个工具中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if a salesperson is going into a call with a brand manager of an automotive company, they could say, "What are the things that brand managers of automotive companies are most interested in in terms of trends of interest or our product?" And it'll tell them right away because the data in aggregate is stored with a different tool that we deploy.</p>
</details>

所以，我们不仅有自动化的事情发生，还有这个聚合数据库，我们持续从中释放价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again, not only do we have the automated things that are happening, but we have this aggregate database that we unlock the value of on an ongoing basis.</p>
</details>

主持人：好的。我必须再问你一个问题。作为一名B2B企业女性，你使用**CRM**（Customer Relationship Management: 客户关系管理系统）吗？这些数据会进入**Salesforce**（一个流行的CRM平台）吗？还是你觉得：“是的，所有这些都可以进入Google Sheets。我们不在乎。”我只是好奇。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. I have to ask you a question again. as a B2B enterprise girl, are you using a CRM? Like, is this data going into Salesforce? Are you like, "Yes, it can can all go in Google Sheets. We don't care." I'm just curious.</p>
</details>

Matt Britain：嗯，我的意思是，你知道，今天的数据会进入Salesforce，但你知道，我认为**Mark Benioff**（马克·贝尼奥夫：Salesforce联合创始人兼CEO）正因为这个原因而倾向于代理力量，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I mean, you know, today goes in the Salesforce, but the you know, I think the reason Mark Beni off is leaning into agent forces for that reason, right?</p>
</details>

就像有什么意义呢，对吧？所以，理论上我正在构建的一切，我相信我刚才向你展示的，是Salesforce的更好版本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's like what's the point, right? So, like theoretically everything I'm building right now is a better what I just showed you I believe is a better version of Salesforce.</p>
</details>

你猜怎么着？销售人员不需要输入记录。它被自动输入，经理可以获取信息，他们可以与数据聊天，他们可以拉取报告并进行聚合。

<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text">And guess what? The salesperson doesn't have to enter a record. It's entered and the manager is getting information and they can chat with the data and they can pull reports and aggregate.</p>
</details>

这基本上就是Salesforce的构建目的。你知道，从元角度来看，我们公司在市场研究方面也面临同样的问题，我们构建了智能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's basically what Salesforce was built for. And you know, from a meta standpoint, our company is facing the same thing with market research where like we built the smart.</p>
</details>

所以我们都在努力弄清楚如何根据正在发生的事情来颠覆自己。但你说得对。我的意思是，这就是今天存在的根本问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're all trying to figure out how to disrupt ourselves based upon what's happening. But you're right. I mean, and that's sort of the fundamental issue that exists today.</p>
</details>

主持人：我当时在想的是Salesforce面临的挑战之一。你知道，Salesforce之所以做得这么好，是因为它在实施自己的数据模式方面的灵活性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What I was reflecting on though is one of the challenges with Salesforce. Well, you know, one of the reasons Salesforce did so well is because of the flexibility of implementing your own data schema and kind of</p>
</details>

Matt Britain：是的，当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, of course.</p>
</details>

主持人：它的局限性之一是，天哪，你必须通过你的Salesforce管理员才能设置任何东西，然后图表和图形也不太好，没有人真正知道如何……我的意思是，你有时只是想知道像**P&G**（Procter and Gamble: 宝洁公司）账户的状态是什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And one of the limitations is like gosh, you have to go through your Salesforce admin to like set up anything and get, you know, and then the charts and graphs weren't great and no one really knew how to I mean, you just sometimes want to know like what's the status of the PNG account.</p>
</details>

这就是你想知道的，而现在你只需说出来或打字就能得到它。这就是我们所有人都在前进的方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's what you want to know and it's just good luck getting that dumb where right now you could just literally just speak it or type it and you get it. And that's kind of where we're all heading to.</p>
</details>

Matt Britain：是的。然后你展示的是，你可以创建这些一次性的、结构松散的Google Sheets，例如用于不同的各种查找。它们不必完美。它们不必在你的CRM中固化，但它们对你的团队很有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And then what you're showing is you could create these oneoff loosely structured Google Sheets for example for different various lookups. They don't have to be perfect. They don't have to be hardened in your CRM, but they're useful to your team.</p>
</details>

主持人：我认为……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think</p>
</details>

Matt Britain：它是结构化的。它是一个结构化数据库，你知道，我认为对于**RAG**（Retrieval Augmented Generation: 检索增强生成，一种结合信息检索和文本生成的AI模型）来说，结构化数据库效果更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it's structured. It's a structured database which you know I think you know for rag structured databases work much better.</p>
</details>

这是一个结构化数据库，这真的就是你所需要的。我认为这里的一个关键点，回到我之前提到的，是你只需要找到它。这不是关于工具，而是关于数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is a structured database and that's really all you need. I think a key point here it goes back to what I mentioned earlier is you just have to find it. It's not about the tool, it's about the data.</p>
</details>

人们过于关注应用层。没有数据，它就毫无意义。对我来说，这就像是数据的终极来源。这是一个宝库，这是真实世界中的人们在表达他们想要什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">People are so focused on the application layer. It means nothing without the data. And to me, it's like this is the ultimate source of data. And this is the treasure trove and this is people in the wild saying what they want.</p>
</details>

所以我想在这些数据之上构建一切。所以这就是为什么当我们为今天的采访做准备时，你说：“我们会展示很多不同的东西。”而我的看法不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I want to build everything on top of this data. So that's why when when we were prepping for today's interview, you're like, we'll show a bunch of different things and and the way I look at it differently.</p>
</details>

我将向你展示一件事，它有许多不同的触角，基于最重要的事情，那就是我们的客户在说什么，这是一种不同的看待方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm gonna show you one thing that has many different tentacles based on the most important thing which is what our customers are saying and that's a different way of looking at it.</p>
</details>

主持人：是的。我希望你再展示一个这种主工作流的营销用例。但当你准备的时候，我可能会鼓励人们思考的是，把自己想象成一个单一的工作流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And I want you to show one more sort of marketing use case off this master workflow. But while you're that up, what I might encourage people to think about is think of yourself as a single workflow.</p>
</details>

把你的团队想象成一个单一的工作流。甚至把你的公司想象成一个单一的工作流，然后弄清楚整个事情应该如何运作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Think of your team as a single workflow. Maybe even think of your company as a single workflow and figure out how that whole thing should work.</p>
</details>

然后逐步进入这些自动化，这真的很有趣，而不是这些小型的、一次性的任务。你可以真正将其提升到这个团队在特定任务下应该遵循的循序渐进的过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then work your way into some of these automations is really interesting as opposed to these little micro task kind of style things. You can really ladder it up to what's the step-by-step process this this team should follow um given a certain task.</p>
</details>

所以我觉得你拥有这个“超级自动化”而不是这些零散的一次性事物真的很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I think it's really interesting that you have this this mega automation as opposed to these little oneoff one-off things.</p>
</details>

### 自动化博客内容生成：保护隐私与扩大市场覆盖

Matt Britain：所以这是我将向你展示的最后一个，这个最初引起了争议，并且需要大量的测试才能上线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this the last one I'll show you which is this one was controversial at first and it required massive testing to push it live.</p>
</details>

也就是说，我们与某人交谈，比如说一个金融服务品牌，他们谈论Suzie是一家市场研究公司，对吧？所以我们与像**Qualtrics**（一家体验管理软件公司）和**SurveyMonkey**（一家在线调查工具公司）等公司竞争。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">which is so we speak to somebody say a financial service brand and they talk Susie is a market research company right so we compete with companies like call tricks and survey monkey etc.</p>
</details>

所以我们与一家金融服务公司进行了一次通话，他们想为新产品命名，比如说是一张新的信用卡或类似的东西，这是一个其他金融服务公司可能想用我们来解决的用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so we're going to have a we had a call in with a financial services company and they want to name a new product say it's a new credit card or something that's a use case that other financial services companies might want to use us for.</p>
</details>

现在，显然，我们不能分享X银行正在考虑重命名一些东西。所以，我们希望分享Suzie可以做这个新的用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, obviously, we can't share that X Bank is thinking about renaming something. So, we but we want to share that Suzie can do this new use case.</p>
</details>

所以我们所做的是，我们进行了一项自动化，它基本上从通话中提取任何识别信息。所以这包括品牌、品牌名称、公司拥有的任何特定策略，任何识别他们的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, what we did is we've done an automation where it basically extracts any identifying information from the call. So, basically that includes the brand, the brand name, any specific strategy that the company had, anything that's identifying to them at all.</p>
</details>

我们对其进行**编辑**（redact），并且我们必须反复测试，以确保没有任何可能泄露隐私的信息，因为我们会失去客户，并且我们会违反合同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we redact and we have to test it over and over and over again to make sure that nothing could get through that could be because we'll lose customers and and we breach car.</p>
</details>

所以我们不能做任何这些，但同时，如果一个销售人员刚刚与一家饮料公司谈论了测试包装，他们非常欢迎在下一次通话中说：“是的，我们刚刚与另一家公司谈论了这件事。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can't do any of that but at the same time if a salesperson just talked to a beverage company about you know testing packaging they're very welcome the next call say yeah just spoke to another company about this and that's kind of what we want to have a programmatic approach to.</p>
</details>

这正是我们想要采取程序化方法的地方。所以这个自动化会获取这些逐字稿，并撰写一篇博客文章，完全编辑掉所有指定的识别信息，但只关注我们讨论的想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, what this does is it'll take those transcripts and it'll write a blog post that fully redacts all that specified information, but focuses just on the idea of what we talked about.</p>
</details>

它会创建一个图形、一个标题。它甚至会在底部创建一个自定义的**CTA**（Call-to-Action: 行动号召），并且会对其进行**SEO**（Search Engine Optimization: 搜索引擎优化）优化，然后发布到我们的博客上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It'll create a graphic, a headline. It'll even create a custom um CTA at the bottom and it will and it'll optimize it for SEO and it publishes it on our blog and it publishes it 21 days later which is just something that we want to do to even make sure to the nth degree that any privacy or anything.</p>
</details>

它会在21天后发布，这只是我们为了确保隐私或其他任何事情而做的事情。所以我们现在有10,000篇博客文章，这些文章是在我们进行的通话基础上创建的，没有任何人工干预。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we we but now we have 10,000 blog posts that are created on the calls that we're making without any human intervention.</p>
</details>

它只是不断地生成。每一个你能想到的用例，现在我们通过Google动态搜索广告对这些文章投放广告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It just goes it goes and goes and goes. um every single use case that you can think of and now we're running ads against these through Google dynamic search ads.</p>
</details>

所以，你知道，我们现在开始获得**SEO**（搜索引擎优化）流量，这类东西需要一段时间才能获得SEO牵引力。但即使在那之前，现在如果有人搜索Suzie可能与某人谈论过的任何事情，我们都会有一篇博客文章在那里，并且我们对其投放广告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you know, and we're starting to get now it takes a while to gain SEO traction with stuff like this. But even before that, now if someone searches for anything that Susie has possibly talked to somebody about, we have a blog post up there and we run ads against it.</p>
</details>

主持人：这太棒了。我喜欢这个。这给了我很多想法。我喜欢这一点，它再次利用了你最丰富的洞察来源，不仅是客户想要什么，还有营销人员想要什么，市场想要什么，并创建资产，然后你可以用这些资产去接触有相似问题的相似客户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is this is amazing. I love this. This gives me so many ideas. And what I like about this is it's taking again your richest source of insight about not just what a customer wants, but what the marketer want, what the market wants, and creating assets that then you can use to go reach similar customers with similar problems.</p>
</details>

所以，再次，你最成功的客户会看起来像你最成功的客户。所以你想找到更多这样的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again, your most successful customers are going to look like your most successful customers. And so you want to go find more more of those folks.</p>
</details>

所以，再次总结一下，一个单一的通话会生成一个摘要、一个Slack帖子、一个流失风险警报、一封跟进邮件、一封给CSM的辅导邮件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again, to recap for everybody, a single don call generates a summary, a Slack post, a turn risk alert, a follow-up email, a coaching email to the CSM.</p>
</details>

它丰富了大量数据。它发送自动自动化。它识别出你可以竞价的关键词，并为你生成内容，既可以竞价，也可以发送付费流量，还可以生成有机流量，所有这些都来自一次通话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, it enriches a bunch of data. It sends out auto automations. It identify keywords for you to bid on and it generates content for you to both bid on and send paid traffic to but also generate to get organic traffic going off one call.</p>
</details>

所以我想提醒大家的是，在这个AI和自动化时代，你可以利用一个非常简单的资产，并从中提取出极致的价值，我认为这对人们来说是一个非常有用的工作流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the other thing I want to call out for people is in this age of AI and automation, you can take a very simple asset and extract the like nth degree of value out of that asset which I think is such a useful and helpful workflow for people.</p>
</details>

所以Matt，这是How I AI的第一次。你创建了一个如此庞大的工作流，我们只展示了一个，我认为这就足够了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Matt, we had this is a how I AI first. You have created such a big workflow that we have only shown one and I think that's enough.</p>
</details>

我们会让人联系你，我知道你还有其他一些非常有趣的工作流，但我们会让你回去继续构建Zap并运营这个出色的团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we'll have people reach out to I know you have a couple other really interesting workflows, but we're going to get back you back to building Zaps and running this amazing team.</p>
</details>

在我让你离开之前，让我问两个闪电式问题，然后我们就会让你离开。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before I let you go, let me ask um two lightning round questions and then we'll we'll get you out of here.</p>
</details>

### AI时代下的团队建设与提示工程

主持人：第一个问题是，你知道，我一直在思考，这很好地反映了优秀的个人贡献者如何工作，或者优秀的团队如何工作。这改变了你现在对初创公司团队建设的看法吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One is, you know, as I've been reflecting, this is a good reflection of how great individual contributors work or how great teams work. How has this changed how you think about building the shape of your team in your startup right now?</p>
</details>

Matt Britain：是的，我认为更多的是个人贡献者，更多的是那些愿意亲自动手、愿意学习、有动力、有抱负、积极主动寻找解决方案的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think it's far more individual contributors, far more people who want to put their hands on keyboard, people who are willing to learn, um people who are motivated and ambitious that are that are proactive at finding solutions.</p>
</details>

我认为这些人将推动下一个伟大的企业，而不是那些只会接受指令的人，不是那些每天上班等待被告知该做什么的人，因为你只需告诉AI该做什么，它就能解决我能做的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think those are the people who are going to drive the next great businesses, not order takers, not people who walk in the work every day and wait to be told what to do because you could just you could you could just solve what I'm able to do if I tell AI what to do.</p>
</details>

所以我不需要更多的人来告诉我该做什么。我需要那些能提出新想法和解决方案并积极主动的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I don't need more people to tell what to do. I need people who are going to come up with new ideas and solutions and be proactive.</p>
</details>

主持人：是的。我说这是“超级个人贡献者”的时代。如果你能成为一个超级个人贡献者，你就会走得很远。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. What I say is this is the age of the super icy. Like if you can be a super icy, you are going to go so so far,</p>
</details>

第二个问题，你认为在你的团队中谁应该负责这个？我知道你正在构建很多，但这应该是一个角色吗？这是每个人的工作吗？你认为谁需要思考构建这类自动化？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know. Second question, who do you think should own this inside your team? I know you're building a lot of it, but is this a role? Is this everybody's job? Who do you think needs to be thinking about building these kinds of automations?</p>
</details>

Matt Britain：嗯，我认为你需要几个市场推广协调员，他们就像总承包商一样，审视所有不同自动化的蓝图，但同时我认为你需要有人负责这些自动化的输出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I I think that you need like a couple of G go to market orchestrators that are are almost like general contractors that are looking at the blueprint of all different automations, but then I think you need people who are owning the output of those automations.</p>
</details>

所以营销团队应该了解博客的输出，如果不起作用，他们应该去找自动化团队说：“嗯，这出问题了，我们如何改进？”等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so the marketing team should know the output of the blogs and if that's not working, they should go to the, you know, the automation team and say, well, this is breaking, how do we make it better, etc.</p>
</details>

我认为这是最好的设计，但它确实需要组织内的新角色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that's the best design, but it does require definitely new roles in the organization.</p>
</details>

主持人：是的，当然。然后当然是最后一个问题，当AI没有给出你想要的结果时，你使用的提示技巧是什么？也许在Chat GPT中，你会贿赂它吗？你是一个全大写的人吗？你做什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, for sure. And then of course the last question which is prompting techniques when AI is not giving you what you want. What do you do? Maybe in chat GPT like do you bribe? Are you an all caps person? What do you do?</p>
</details>

Matt Britain：我有一个框架，我首先设定我想要完成的目标，然后我设定提示的框架，就像护栏一样，比如“不要做什么”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I have a framework where I first set what I'm trying to accomplish and then I kind of set the framework for the prompt like almost like guardrails like here's what not to do.</p>
</details>

然后，我认为对我来说，告诉它“不要做什么”是消除我所看到问题的好方法，直到我接近我想要的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, and then and then I think for me telling it what not to do is a great way of kind of eliminating the issues I see until I get close and when I get it close to it outputting something I actually want then I refine what I wanted to actually do and I think that's generally how I go about it.</p>
</details>

当我让它接近输出我真正想要的东西时，我就会细化我真正想要它做的事情，我认为这通常就是我的做法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And when I get it close to it outputting something I actually want then I refine what I wanted to actually do and I think that's generally how I go about it.</p>
</details>

主持人：好的。所以你正在做“护栏式提示”，除了“我希望你完成这个”之外，还加上“不要做这个”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So you're doing guardrail prompting do not do in addition to this is I want you to accomplish.</p>
</details>

Matt，这太棒了。我喜欢这个。我实际上会去借鉴你的一些想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well Matt, this has been amazing. I love this. I'm actually going to go steal a bunch of your ideas for my own.</p>
</details>

Matt Britain：请便。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Please do.</p>
</details>

主持人：企业管线。我们可以在哪里找到你，我们如何提供帮助？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Enterprise pipeline. Where can we find you and how can we be helpful?</p>
</details>

Matt Britain：你可以在mattbritton.com了解更多关于我的信息。我刚刚在五月份推出了一本新书，名为《AI世代》。所以一定要去看看。它是关于**Alpha世代**（Generation Alpha: 指2010年代中期至2020年代初出生的人群）和AI世代的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh you can find learn more about me at mattbritton.com. Um I just uh rolled out a new book in May called Generation AI. So definitely check that out. It's about generation alpha and the AI generation.</p>
</details>

然后你可以在suzie.com了解更多关于我的公司Suzie的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you can learn more about my company Suzie at suzie.com suzy.com.</p>
</details>

主持人：Matt，我真的很感谢你。谢谢你的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well Matt, I really appreciate it. Thanks for the time.</p>
</details>

Matt Britain：非常感谢，Claire。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks so much Claire.</p>
</details>

主持人：非常感谢你的观看。如果你喜欢这个节目，请在YouTube上点赞并订阅，或者更好的是，留下你的评论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks so much for watching. If you enjoyed this show, please like and subscribe here on YouTube, or even better, leave us a comment with your thoughts.</p>
</details>

你也可以在Apple Podcasts、Spotify或你最喜欢的播客应用上找到这个播客。请考虑给我们评分和评论，这将帮助其他人找到这个节目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app. Please consider leaving us a rating and review, which will help others find the show.</p>
</details>

你可以在howiaipod.com查看我们所有的节目并了解更多信息。下次再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see all our episodes and learn more about the show at howiaipod.com. See you next time.</p>
</details>