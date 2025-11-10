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
  - customer-insights
  - sales-efficiency
  - no-code-development
  - data-driven-marketing
title: CEO如何利用2.5万小时销售电话记录，打造AI驱动的市场营销引擎
summary: 一位CEO分享了如何通过AI和自动化，将2.5万小时的客户电话记录转化为强大的市场进入（Go-to-Market）引擎。他详细介绍了如何使用Zapier、Browse AI和Gong等工具，自动化提取、分析客户沟通数据，从而生成核心摘要、客户情绪评分、销售反馈、营销关键词，甚至自动撰写博客文章。这不仅提升了销售和客户成功团队的效率，也为公司带来了数据驱动的增长，展示了AI在商业应用中的巨大潜力。
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
  - Matt Britton
  - Claravel
  - Mark Zuckerberg
  - Edward Sver
  - Mark Benioff
companies_orgs:
  - Suzie
  - Facebook
  - Google
  - Brex
  - Dropbox
  - Airbnb
  - Open Door
  - Proctor and Gamble
  - Qualtrics
  - SurveyMonkey
  - Salesforce
products_models:
  - Zapier
  - Gong
  - Zoom
  - Browse AI
  - ChatGPT
  - GPT-4 Turbo
  - GPT-5
  - Google Adwords
  - Slack
media_books:
  - How I AI
  - Generation AI
status: evergreen
---
### 自动化客户洞察：从痛点到解决方案

**Matt:** 在我的公司，我的销售团队一直告诉我，他们就是不知道如何找到任何东西。他们不知道如何找到客户感兴趣的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> With my company, my sales team was consistently telling me that they just didn't know how to find anything. They didn't know how to find what customers were interested in.</p>
</details>

**Claravel:** 你们有一群销售人员，他们说：“我需要更多信息才能更好地服务客户。”你意识到你们有25,000小时左右的客户电话录音，这是了解客户希望如何互动、最真实的来源。你现在将向我们展示一个**Zap**（Zapier自动化平台中的一个自动化工作流程），它能处理一次录音并完成许多任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> You had a bunch of salespeople. They said, "I need more information to serve our customers better." You realized you had 25,000 hours or something of recorded customer calls, which are the perfect source of truth for how customers want to be interacted with. You're going to show us a zap now that takes a single recording and does a bunch of stuff.</p>
</details>

**Matt:** 所以基本上，我需要弄清楚我是否能为**Zapier**（Automation Platform: 一个连接不同应用并实现自动化工作流程的平台）创建一个数据源，让它知道每次新通话发生时的通话ID。因此，第一步本质上是一个触发器，当有新通话进来时，它会从**Gong**（Conversation Intelligence Platform: 一个用于记录、转录和分析销售与客服电话的对话智能平台）抓取信息，而Gong会提供通话ID。将该ID附加到URL上，基本上就是我需要提供给**Browse AI**（Web Scraping Tool: 一个用于从网页抓取信息的自动化工具）的所有信息，以便它能够访问该URL并抓取整个通话记录。它原本没有连接，我不得不将其拼凑起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> So basically I needed to figure out well can I create a feed for Zapier. So it knew the call ID of each new call has occurred. So the first step is essentially a trigger where a new call comes in. It'll basically scrape the information from Gong and one of the things Gong will give you is that call ID. So that append it to the URL essentially is all I needed to give browse to be able to go to that URL and able to essentially scrape the entire transcript. It wasn't connected. I had to kind of hack it together.</p>
</details>

**Claravel:** 我喜欢一个知道如何构建解决方案的CEO。我喜欢一个知道没有问题是无法解决的CEO。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> I love a CEO that knows how to build it. I love a CEO who knows that no problem is not solvable.</p>
</details>

### CEO的AI哲学：亲身实践与解决问题

**Claravel:** 欢迎回到《How I AI》。我是Claravel，一名产品负责人和AI狂热者，致力于帮助大家利用这些新工具更好地进行构建。今天我们邀请到了Suzie公司的CEO Matt Britton。通常我们会展示两到三个工作流，但今天Matt将展示一个在他公司里统领一切的“超级工作流”。他将向你展示如何将单一资产转化为大量的**Go-to-Market**（GTM: 市场进入策略）优势，从给客户的邮件到丰富的数据源，甚至可以用于寻找更多潜在客户的营销资产，这些客户将成功使用你的产品。让我们开始吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> Welcome back to How I AI. I'm Claravel, product leader and AI obsessive here on a mission to help you build better with these new tools. Today we have Matt Britain, CEO of Suzie. Now, normally we show two or three workflows, but today Matt's going to show off the one mega workflow that rules it all at his company. He's going to show you how to take a single asset and turn it into tons of go to market goodness. From emails to customers, enrich data sources, and even marketing assets that can be used to source more prospects that are going to be successful with your product. Let's get to it.</p>
</details>

**Claravel:** 本期节目由Brex赞助。如果你正在收听本节目，你已经知道AI正在以实际有效的方式改变我们的工作。Brex正在将同样的力量带入金融领域。Brex是专为创始人打造的智能金融平台。通过在后台运行的自主代理，你的财务系统基本上可以自行运转。卡片发放、费用报销和欺诈拦截都能实时进行，无需你操心。加上Brex的银行解决方案和高收益国库账户，你就拥有了一个能帮助你更智能地消费、更快速地行动、并自信扩展的系统。美国三分之一的初创公司已经在Brex上运行。你也可以通过bre.com/howiai加入。Matt，感谢你来到How I AI。我很高兴，因为正如我们节目开始前所说，我们经常看到“氛围编码者”，我知道我们会谈论你构建的一些定制软件，但我们在AI自动化在**Go-to-Market**（市场进入策略）和营销方面的讨论还不够多。所以，我非常期待你分享的内容。非常感谢你今天加入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> This episode is brought to you by Brex. If you're listening to this show, you already know AI is changing how we work in real practical ways. Brex is bringing that same power to finance. Brex is the intelligent finance platform built for founders. With autonomous agents running in the background, your finance stack basically runs itself. Cards are issued, expenses are filed, and fraud is stopped in real time without you having to think about it. Add Brex's banking solution with a high yield treasury account, and you've got a system that helps you spend smarter, move faster, and scale with confidence. One in three startups in the US already runs on Brex. You can too at bre.com/howiai. Matt, thanks for coming on how I AI. I'm excited because as I was saying before we started the show, we get vibe coders left and right and I know we're going to talk about some custom software that you built, but we just do not get enough on the go to market and marketing side of AI automation. So, I'm really excited to show what you have to share. So, really appreciate you joining today.</p>
</details>

**Matt:** 我很高兴来到这里。你和我都非常喜欢Zapier，我不得不问，即使在AI时代之前，它就是你依赖的工具吗？为什么这个特定的软件会成为你众多基于AI的自动化的支柱呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> I'm excited to be here. So, you and I both really love Zapier, and I have to ask, even before the age of AI, was this a tool that you relied on? Why has that this specific software become kind of the backbone of so many of your AI based automations?</p>
</details>

**Matt:** 我一直都相当技术化，但我从不是一名程序员。2005年，我直接向Mark Zuckerberg和Edward Sver销售了Facebook上的第一批广告。2002年，当我创办我的第一家广告公司时，我购买了Google最早的一些关键词。所以我一直热爱广告技术，并喜欢了解这些工具如何运作，但同时，我从不是一名工程师。随着我希望在我运营的各种公司中构建更复杂的工具和解决方案，我需要不仅仅使用像Adwords这样的单一工具，而是使用多个工具来将事物整合起来，以提高效率。我像大多数人一样，通过Google搜索发现了Zapier。我想连接通过我的网站进来的潜在客户到一个工作流，让它自动给注册的人发送邮件。然后我就开始深入研究它。但正如你所说，Claire，直到Zapier整合了AI，我的思维才真正被其可能性所震撼。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> So, I've always been fairly technical, but I've never been a coder. Um, I sold the first ads ever on Facebook directly to Mark Zuckerberg and Edward Sver in 2005. Um, I bought some of the first Google keywords ever to exist, right, when I started my business, um, in 2002, my first ad agency. Um, so I've always loved sort of ad tech and getting like understand how these tools work, but at the same time, I've never been an engineer. And as I've wanted to get more sophisticated in the in the tools and solutions I've built for various companies that I've run, I've need to not just use one tool like Adwords, but multiple tools to stitch things together to be more efficient. And I was turned on to Zapiero like most other people just through a Google search. And I think I wanted to connect um you know leads that were coming in through my website to some type of flow where it automatically emailed the person who signed up. And then I just kind of start to dive into it. But to your point, Claire, it wasn't until Zapier integrated AI when kind of my mind just became blown in terms of what's possible.</p>
</details>

**Claravel:** 好的。所以你将向我们展示如何将单一资产——我不会剧透是什么——转化为涵盖你营销、销售、内部和公司工作的全套活动。那么，你何不展示一下你构建的东西呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> Okay. So, you're going to show us how you take a single asset, and I won't spoil what it is, and turn it into basically a full suite of activities across your marketing, sales, internal, company work. So, why don't you pull that up and show us what you built?</p>
</details>

**Matt:** 在我展示之前，我想说，关键在于弄清楚你想解决什么问题。我认为对于AI来说，人们普遍被工具的数量和变化的速度所淹没，以至于他们发现自己只是在玩弄这些工具，试图达到一种舒适地理解它们的状态，但同时并没有真正推动他们的业务向前发展。我认为之所以如此，是因为人们从未退后一步思考：我需要为我的业务解决的核心问题是什么？是什么阻碍了我以我想要的速度增长？是什么挡了我的路，或者有什么机会我知道存在，但我却无法利用？在我的公司，我反复听到的是，我的销售团队一直告诉我，他们就是不知道如何找到任何东西。他们不知道如何找到客户感兴趣的内容。他们不知道如何与某个特定行业或特定职位的客户沟通，以识别用例。所以有太多的未知。一旦我理解并明确了这个问题，我就变得非常专注，决心找出如何构建解决方案来帮助我的销售和客户成功团队更好地了解情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Before I pull it up, I guess you should say that I think it's all about figuring out what problem that you want to solve. And I think with AI in general, people get so overwhelmed with just the amount of tools and the rate of change that they just find themselves kind of playing around with all these tools trying to get to the point where they feel like they're comfortable in understanding them, but at the same time they're not really moving their business forward. And I think the reason that's the case is people don't ever take a step back and think like what is the core problem I need to solve for my business? Like what's holding me back from growing faster than I want to? what what's getting in my way or what's an opportunity I know is there but you know I'm not I'm not able to take advantage of it. And with my company, what I was hearing over and over again was my sales team was consistently telling me that they just didn't know how to find anything. They didn't know how to find what customers were interested in. they didn't know how to find um how to speak to people of a certain industry or a certain title in terms of identifying use cases. So there just so many unknowns and so once I understood and put my finger on that on that problem, I just became very sort of tunnel visioned and I was determined to figure out how I can build solutions that can aid my sales and customer success team to be more in the no.</p>
</details>

**Matt:** 所以，一旦你真正识别出问题，下一步就是弄清楚哪些数据可以帮助你抓住这个机会。就了解我们的客户并获取这些信息而言，碰巧的是，自疫情爆发、我们公司转为远程办公以来，我们一直在使用一个名为**Gong**（对话智能平台）的工具，它基本上附着在Zoom通话上，记录我们进行的每一次通话。所以它会说“本次通话正在录音，用于质量保证目的”。我一直知道我们有Zoom，也知道我们有Gong，但我不知道的是，它们的通话记录非常棒，而且我们实际上在过去5年里积累了25,000小时的通话记录，这些记录一直处于混乱状态。如果你考虑了解客户和业务的信息，没有比这更好的真实来源了。因此，我们已经围绕这些信息建立了一个完整的操作系统。不仅是历史信息，还有每次新通话发生时都会触发的各种不同工作流，因为这不仅仅是了解过去发生了什么，更是能够对当前发生的事情做出高度响应。所以今天我要展示的第一件事，是我们根据销售团队或客户成功团队的通话创建的自动化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> So once you've actually identified the problem, the next step is figuring out what data can help you seize that opportunity. And in the case of you know understanding our customers and and and getting that information, it just so happens that since the pandemic when our company went remote, we've been using this tool called Gong that's essentially attached to Zoom calls that records every single call that we have. So it says this call is being recorded for quality assurance purposes. And I always knew we had obviously Zoom and I knew that we had Gong, but what I didn't know is that their transcripts were amazing and that we actually had 25,000 hours of call transcripts that had been a mess over the last 5 years. And if you think about understanding information about your customers and your business, there's no better source of truth. So we have since built an entire operating system around this information. Not just the historical information, but a variety of different workflows that happen with each new call that occurs because it's not just about understanding what's happened in the past, but it's also being able to be highly responsive to what's going on in the present. So the first thing I'm going to show today is an automation that we have created based upon calls our our teams have either our sales team or our customer success team.</p>
</details>

**Matt:** 所以，基本上，一旦通话结束，一系列事件就会针对该单独的通话记录发生。我们也会对聚合的通话记录进行一些大规模的操作，如果这说得通的话。但现在，我将向你展示通话完成后实时发生的情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Um, so and essentially what happens is as soon as that call is over, a series of events happen with that individual transcript. We also do things sort of at large with the aggregate transcripts, if that makes sense. But right now, I'm going to show you what happens kind of like real time once a call is completed.</p>
</details>

**Claravel:** 太棒了。那么，在你展示之前，为我们的听众总结一下：你有一群销售人员。他们说：“我不知道如何找到我需要的信息。我不知道如何生成我需要的信息。我需要更多信息才能更好地服务客户。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> Great. So, while you pull that up, just to recap for our listeners, you had a bunch of salespeople. They said, "I don't know how to find the information that I need. I don't know how to generate the information I need. I need more information to serve our customers better.</p>
</details>

**Claravel:** 你意识到你拥有——如果我没记错的话——大约25,000小时的客户通话记录，这是关于客户希望如何互动的完美真实来源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> You realized you had, and I'm correct me if I'm wrong, 25,000 hours or something of corrected customer calls, which are the perfect source of truth for how customers want to be interacted with.</p>
</details>

**Claravel:** 你决定这将成为公司内部许多这些行动的核心背景。然后你将向我们展示一个**Zap**（自动化工作流程），它能处理一次录音并完成许多任务。我预先看过这个，它确实做了很多事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> And you decided that was going to be the core context for a lot of these actions inside your company. And then you're going to show us a zap now that takes a single recording and does a bunch of stuff. I got a preview of this and it does a lot of things.</p>
</details>

**Matt:** 我曾尝试将AI交给我的工程团队来解决这类问题，但对他们来说，即使是整合产品也变得难以承受。对我来说有帮助的是，首先自己构建东西，但我又没有足够的技术能力来在我们的软件产品之上进行构建。所以像我今天将向你展示的这些工具，对我来说是深入了解AI力量的绝佳方式，因为它处于产品边缘，它处于我们运营方式的边缘。但通过这个过程，我变得对AI更加熟练，现在我非常深入地参与到我们的产品本身中。所以人们常常难以找到切入点，但其实有很多不同的切入点。一种方式是为自己个人构建一些东西，或者为营销部门或其他地方构建一些东西，然后通过这个过程，你真正开始理解它，然后你就可以在业务中以更实质性的方式更熟练地运用AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> I've I tried to give AI to my engineering team to figure stuff like this out and it just became overwhelming to them even integrating the product and what's been helpful for me was first building things on my own and I'm not technical enough to be able to build on top of our software product. So the tools like the one I'm going to show you today was a great way for me to be able to dive into the power of AI because it was on the edges of the it wasn't the product was sort of on the edges of how we operate it and through that though I became far more adept at AI and now I'm very much involved in our product itself. So often people struggle to find a way in and there's lots of different ways in. One way is actually building something for yourself personally or building something for the marketing organization or somewhere else and then through that process you really start to get it and then you can start to be more um you know proficient in AI in much more substantive ways within the business.</p>
</details>

**Claravel:** 是的。我希望所有观看这个播客的其他CEO和高管都能听听你刚才说的话，因为仅仅指示你的工程师构建AI是不够的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> Yeah. And I want all the other CEOs and executives watching this podcast to listen to exactly what you said because it is not sufficient to instruct your engineers to build AI.</p>
</details>

**Matt:** 你会一无所获。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> You'll go nowhere. Yep.</p>
</details>

**Claravel:** 不，你会一无所获。我经常说，这是一个领导者真正需要培养硬技能的时刻，也就是说，你实际上拥有可获得的技能来构建和使用AI工具，利用这些无代码工具版本来真正提升自己的能力。这将使你成为一个更具相关性的领导者，更具相关性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> No, you'll go nowhere. And I've said this a lot. This is a moment for actual hard skill building um in leaders, which is you actually have accessible skills to build in using AI, building AI tools, using these sort of like no code versions of tools to really upskill yourself on the capability. And that's going to make you a much more relevant leader, much more.</p>
</details>

**Matt:** 是的。你正在打开引擎盖。就像你想象一下，如果你把车开去修理，而你对修车一无所知，他们告诉你修变速箱要4000美元，你会说：“好吧，因为你需要修变速箱，对吧？”但如果你真的打开引擎盖，并且了解变速箱的工作原理，即使你不是机械师，也许你也会说：“嗯，修这个真的不应该花4000美元。应该接近2000美元。”我认为这与AI是同样的道理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Yeah. You're opening up the hood. It's like you think about if you bring your car in and you don't know anything about fixing a car and they tell you $4,000 to fix a transmission, you're gonna say, "Okay, because you need your transmission fixed, right?" But if you actually just open up the hood and you understand how transm transmission works, even if you're not a mechanic, maybe you can say, "Well, it really shouldn't cost $4,000 to fix this. Should really cost close to 2,000." And I think that's sort of the same analogy when it comes to AI.</p>
</details>

### 构建基础：抓取通话数据

**Matt:** 所以，我，所以第一步是构建我称之为触发自动化。这个触发自动化本质上来自我们创建的一个工具，我们称之为**Browse AI**（网页抓取工具）。所以这是Browse AI，它基本上运行一个脚本，从Gong通话中抓取信息。所以你在这里看到的是一个URL字符串。你需要一个URL字符串来识别传入的通话记录。而Gong没有一个简单的方法来做到这一点。所以我基本上开始调出大量的通话记录。我开始看到的是，它们都以相同的方式开始，然后以这个通话ID结束。所以通话之间唯一不同的是这个通话ID。所以我基本上需要弄清楚如何为Zapier创建一个数据源，让它知道每次新通话发生时的通话ID。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> So um so I so the the the first step is building what I call a trigger automation and this trigger automation essentially comes from a tool uh that we've created called um that we use called browse AI. So this is browse AI and essentially a browse AI does is it runs like a a script where essentially scrapes information from gone calls. So what you see here is a URL string. You need a URL string in order to identify a a call transcript as it comes in. And Gong didn't have an easy way to do this. So I basically start to bring up a bunch of uh call transcripts. And what I start to see is they all kind of start the same way and they just end it with this call ID. So the only thing different from call to call was this call ID. So basically I needed to figure out how can I create a feed for Zapier. So it knew the call ID of each new call as as it kind of occurred.</p>
</details>

**Matt:** 所以第一步本质上是一个触发器，当有新通话进来时，然后当新通话进来时，它会做什么呢？它会基本上从Gong抓取信息。Gong会提供给你的其中一件事就是那个通话ID。所以我实际上能够看到通话ID。如果我点击这里并滚动过去，你实际上会看到这里有一个我能识别的通话ID，就在这里。所以将它附加到URL上，基本上就是我需要提供给Browse AI的所有信息，以便它能够访问该URL并抓取通话记录。所以它没有连接。我不得不将其拼凑起来。所以如果你在这里看到，它基本上知道根据传入的内容运行什么，然后它会转到这个页面，我将在这里向你展示，这里实际上是通话记录所在的地方，它能够基本上抓取整个通话记录。所以这是通过Browse AI访问Gong页面并获取这些信息后，从Gong通话中获取的原始通话记录。但我已经启动了它。所以第一步本质上是启动抓取，然后当抓取完成后，它会启动我的下一个自动化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> So the first step is essentially a trigger where a new call comes in right and then what happens is when the new call comes in what it will do is it'll basically scrape the information from Gong. And one of the things Gung will give you is that call ID. So I'm able to actually see the call ID. So if I click here um and I scroll over, you'll actually see that there's a call ID that I can identify here um which is right here. And so that appended to the URL essentially is all I needed to give browse to be able to go to that URL and essentially scrape the call transcript. So it it wasn't connected. I had to kind of hack it together. So if you'll see here, it basically knows what to run just based upon what's brought in and then it will go to this page which which I will show you here which actually is where the transcript is and it's able to essentially scrape the entire transcript. So this is the raw transcript that's coming from the gong calls by browse AI going to that gong page and just getting this information. But I had that initiated. So that first step essentially initiates the scrape and then when the scrape is completed, it starts my next automation.</p>
</details>

**Claravel:** 是的。所以对于那些试图自己构建东西的人来说，需要指出的是，如果你的工具本身没有暴露你想要的数据，那也没关系。在这个时代，你通常可以使用另一个工具或替代方案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> Yeah. And so just to call this out for folks that are trying to build their own thing, it's okay if your tool itself does not expose the data you want. In this age now, you can usually use another tool or an alternative.</p>
</details>

**Matt:** 总有办法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> There's always a way</p>
</details>

**Claravel:** 或者一个**LLM**（Large Language Model: 大型语言模型）来真正从任何系统中提取你需要的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> or an LLM to really pull the data you need out of out of any system.</p>
</details>

**Matt:** 是的。我本可以放弃的，Claire，在那个点上，那一步可能花了我最长的时间。如果我从未跨过那一步，我想很多人可能都会在那一步放弃。但当我克服了那个障碍之后，其他一切都变得容易多了。这真的很像人生的一个比喻，就像构建这样的东西。我在构建过程中也遇到过其他挫折。但你只需要知道总有办法，而且仅仅因为一个工具做不到，并不意味着它就无法完成。现在回想起来，这似乎很明显。如果我现在遇到类似的挑战，我马上就能解决，因为每次你解决一个问题，下次你需要构建东西时，你的工具箱里就会有所有这些想法和“技巧”。现在我到了一个地步，你告诉我构建什么，我都知道怎么构建，因为我就是知道所有这些小问题如何解决。你在这个过程中也学会了编码。比如，在这个过程中，你通过亲手操作和创建自动化，学会了**JSON**（JavaScript Object Notation: 一种轻量级的数据交换格式）的含义以及所有这些东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Yeah. And I could have given up Claire like at that point at that probably one step took me the longest. And if I never would have gotten past that step I and I think a lot of people would probably have given up at that step. But after I got over that hurdle then everything else became so much easier. And it's really like an analogy for life like building something like this. And there are other stumbles I've had along the way in building things. But you just have to know that there's a way and and using and because just because a tool doesn't do it doesn't mean it can't be done. And this like in in the rearview mirror seems obvious. And now if I had a similar challenge, I'd be able to do it right away because what will happen is every time you solve a problem such as that, the next time you need to build something, you'll have all these sort of ideas and like hacks um in your tool chest, so to speak. And then now I'm at a point where there's like nothing you can tell me to build that I wouldn't know how to build because I just know how all these little things can be solved for. And you learn coding along the way. Like along the way, you learn what JSON means and all these things by having your hands on it and and and creating the automations.</p>
</details>

**Claravel:** 100%。我本来想说的是，这就是我喜欢的CEO。我喜欢一个知道如何构建解决方案的CEO。我喜欢一个知道没有问题是不可解决的CEO。而且我认为，仅仅亲自动手使用这些无代码工具和AI工具，就能给你更多的背景信息，让你在构建时更大胆。好的，所以你有了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> 100%. What I was going to say is this is a CEO that I love. I love a CEO that knows how to build it. I love a CEO who knows that like no problem is not solvable. Um, and I think just even getting hands- on with some of these no code tools and these AI tools just gives you a little bit more context to be bolder about what you build. Okay, so you have</p>
</details>

### 数据丰富与LLM整合

**Matt:** 对。所以任务完成了，对吧？通话结束了。所以下一个触发器是当Browse AI成功抓取通话记录时触发。它做的第一件事显然是触发它。你在这里会看到它会给我整个通话记录。嗯，现在基本上就是：“好的，现在我开始工作了。”现在我拥有了我需要的一切。那个Gong通话记录中还有很多其他内容，我会在整个过程中用于数据库查找，我们稍后会深入探讨。我会延迟大约2分钟再拉取这样的数据，只是因为我想确保所有数据都已导入，抓取已完成，而且你很容易出错，特别是如果你在不设置延迟的情况下快速运行大量任务。所以，我总是喜欢一到两分钟的延迟作为缓冲，只是为了让系统赶上，这样它就不会崩溃。所以，这有点不言自明。我做的下一件事是运行一个格式化程序，基本上是从通话记录中删除所有HTML。所以，当你抓取时，有时它会拉取HTML，而我不需要那些。我实际上只需要实际的文本。所以我运行一个格式化步骤来删除所有这些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> That's right. So the task is done, right? The the call is done. And so this next trigger is trigger when browse AI successfully scrapes a call transcript. And the first thing it'll do is obviously it'll trigger it. And you'll see here it'll give me the entire transcript of the call. Um, and that's basically now now it's like, okay, now I'm in business. Right now I have everything I need. And there's a bunch of other stuff in that gun call transcript that I use to do database lookups throughout that we'll kind of get into. I I'll have a delay of about 2 minutes before pulling in data like this just because I want to make sure that all the data is brought in, the scrape is done, and I'm just you you're prone to errors, especially if you're running a lot of um tasks quickly if you don't put in a delay. So, I always like a one or two minute delay as a buffer just to let the system catch up so it doesn't break. So, so that that's kind of self-explanatory. The next thing I do is I run a format where I'm basically removing all the HTML from the transcript. So, when you scrape sometimes it'll pull in the HTML and I don't want that. I just actually want the actual text. So, I run a formatter step where I'm removing all that.</p>
</details>

**Matt:** 我会提取任何可能混淆分析的信息。所以，我基本上只是获取原始文本。然后我开始用除了Gong通话记录之外的其他信息来丰富数据，因为我有Gong通话记录，但我知道我想构建的一件事是，通话结束后，我希望能够告诉参与通话的销售人员发生了什么。我希望他们能够轻松地撰写一封后续邮件。我希望能够识别他们的主管是谁，对吧？但这并不是通过Gong直接拉取的。然而，我们有其他数据源可以连接这些信息。所以，我们这里有一个Google表格。例如，如果你查找这个ID，它会将ID连接到品牌，品牌连接到用户，这是一个我们创建的完全独立的工作流。所以它能够连接这些点，因为当你运行自动化时，你不会总是从触发器中获取数据。有时你需要完善它。完善它的方法是使用Google表格等进行查找。所以你正在拉取所有信息。这就像你正在沿着一条小径徒步旅行，你希望在到达目的地之前，沿途能够获取你需要的补给。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Um, I'm pulling out anything I need to that might confuse uh the analysis. So, I'm just essentially getting the raw text. Then what I do is I start to enrich the data with other information besides just the gong transcript because I had the gong transcript, but one of the things I knew I wanted to build was after the call is done, I wanted to be able to tell the salesperson that was on that call what transpired. I wanted to make it easy for them to write a follow-up email. I want to be able to identify who their supervisor was, right? But that wasn't directly pulled in through through Gong. However, we have other data sources that essentially can connect that information. So, we have a Google sheet here. For example, if you look up this ID, it connects the ID to the brand and the brand to the user, which is a whole separate workflow that we created. So, it can kind of connect the dots because when you're running an automation, you're not always going to get the data from the trigger. Sometimes you have to round it out. And the way you round it out is using things like lookups on Google Sheets. So, you're pulling everything in. It's almost like you're going down a path, you're on a hiking trail, and you want to be able to pull the supplies you need along the way before you get to the destination.</p>
</details>

**Matt:** 我刚开始的时候，有一个背包，但背包里没有水。现在我有水了，对吧？因为我从这里拿到了。你正在经历一段旅程。我个人喜欢Zapier而不是其他工具的一个原因是，我的思维方式非常循序渐进，而其他平台，比如NA或Botpress，它们看起来就像章鱼一样分支。我很难那样思考。现在随着时间的推移，我不得不那样思考，因为我基本上在描述自动化和代理之间的区别，因为代理不是确定性的。代理有不同的方式，我的大脑一直在努力理解代理，我终于快要理解了。但基本上，我看到人们在AI中必须采取的进展是，你首先将AI作为工具使用。比如，ChatGPT，给我一个千层面食谱。然后是自动化，我们现在正在讨论的，然后你进入代理的世界，在那里它不总是从第一步到第二步到第三步。它可能会根据你试图完成的任务，从第一步到第三步到第八步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> And when I started, I had a backpack, but the backpack didn't have water in it. And now I have water, right? Cuz I grabbed it from here. And you're kind of going along a journey. And I personally one reason why I love Zapier versus other tools is the way my mind thinks is in a very sequential framework where there's other platforms like NA and you know or bot press where it's basically like looks like you almost like an octopus how it's branching out. I just have a hard time thinking that way. Now over time I've had to because I'm basically describing the difference between automation and agents cuz agents are not deterministic. Agents have different ways and my brain has struggled with understanding agents and I'm finally getting there. But basically the progression I see people having to take in AI is you start with using AI as a tool. You know chat GBT give me a recipe for lasagna. Then it's okay automations which we're talking about now and then you get into the world of agents where it's not just always going from step one to two to three. It might go from step one to three to eight based upon what you're trying to accomplish.</p>
</details>

**Matt:** 那么，我为你或这里的听众提供一个建议，我发现，我们将经历整个过程，我发现一个很好的练习是，采用一个基于顺序步骤的自动化，并尝试使用例如Zapier代理，然后用自然语言分步骤描述该自动化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Well, one tip for you or one tip for the listeners here I found is we'll go through this whole thing and a good exercise I found is taking a sequential stepbased automation and trying to use for example Zapier agents and just describe that automation in natural language in steps</p>
</details>

**Claravel:** 看看你能多接近，即使是这种跨模态的复制也是一个很好的测试练习方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> and see how close you can get even that replication across modalities can be a good way to to test your exercise.</p>
</details>

**Matt:** 是的。就测试一下，100%。是的。它正在查找信息。所以，它能够基本上抓取信息。然后，在我感觉我已经拥有所有信息之后，我将要做的下一件事就是这里，我开始引入**LLM**（大型语言模型）。这里一个重要的部分是，首先也是最重要的是知道使用哪个LLM。我一直很难做到的一件事是，我们现在有太多的自动化。我认为我们可以在其背后的组织设计方面做得更好，因为我构建了太多的东西，但我不总是进行适当的交接。所以，例如，这里它应该总是说使用最新的稳定版本，但它没有，对吧？所以，我将在这里当场更改它，因为我想使用最新版本。你还需要确保你正在使用最好的模型。我仍然认为GPT-4 Turbo可能是一个不错的模型，但你可以在Zapier这样的平台上看到，有多种不同的版本可供选择，而且它们显然都会消耗不同数量的“币”。但就所有模型而言，它都非常不可思议。现在有了GPT-5，它应该能够为你选择，但对我来说，在API的上下文中它是如何工作的尚不清楚。出于某种原因，在Zapier中你仍然可以选择。你知道，我花了很多时间测试。我会在ChatGPT中测试各种不同模型的样本输入，以确保。我倾向于使用输出最好、最快的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Yeah. Just test it out 100%. Yeah. and it's looking up the information. So, it's able to basically grab the information. And then after I feel like I've had all the information, the next thing I'm going to do is this where I'm starting to pull in the LLM. And an important part here is first and foremost knowing what LLM to use. And one thing I've had a hard time with is actually just we have so many automations now. And I think we can do a better job at the organizational design behind it because what happens I built so many things and I don't always do proper handoffs. So, for example, here I it should always say use latest stable version, but it didn't, right? So, so I'm going to change it now here live on the spot because I want to be using the latest version. You also want to make sure you're using the best model. I still think GBT4 Turbo is probably a good model for this, but you could see in the platform like Zapier, there are multiple different versions that you can choose from based upon and obviously they all eat up different amounts of coins and um but it's pretty incredible in terms of all the models. Now with GPT5, it's supposed to be able to choose for you, but it's unclear to me how that works in the context of an API. And for some reason, still in Zapier, you're still able to choose. And you know, I I spend a lot of time testing. I'll go in the chat GPT and test a sample input in a variety of different models to make sure. It's like whatever's the best output the quickest is what I'll tend to use.</p>
</details>

**Claravel:** 所以你仍然在使用经典的GPT-4 Turbo，一个经典的、老牌的最爱，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> So, you're still losing classic GPT4 Turbo, a good old classic classic favorite, right?</p>
</details>

**Claravel:** AI本应让工作更轻松，但我经历过。数周的设置，与工程团队无休止的来回沟通，以及团队从未真正采用的又一个工具。这就是为什么我使用Zapier的AI编排平台。它连接了近8000个应用程序，所以我终于可以把AI投入工作，而没有戏剧性，没有延迟，也不必每次我想自动化一些事情时都让工程团队介入。有了Zapier，你可以在几天而不是几周内，在整个公司推出AI驱动的工作流，完成实际工作。我每天都使用Zapier。它会自动响应潜在客户，提供丰富且个性化的数据。它每周检查我的日历，并提供更智能的时间管理方式。它甚至为我收件箱中的每个新请求起草邮件。所有这些都在后台悄悄运行，这样我就可以专注于重要的工作。Zapier专为规模化而构建，拥有企业级的安全性、合规性和和治理。它受到Dropbox、Airbnb、Open Door等数千个团队的信任。访问try.zapier.com/howi，了解更多关于Zapier如何将AI编排的力量带给你的整个组织。让我们来谈谈这个提示。那么，告诉我你首先想在这里进行什么样的总结练习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> AI is supposed to make work easier, but I've been there. Weeks of setup, endless back and forth with engineering, and yet another tool the team never really adopts. That's why I use Zapier's AI orchestration platform. It connects with nearly 8,000 apps, so I can finally put AI to work without the drama, without the delays, and without pulling engineering in every time I want to automate something. With Zapier, you can roll out AI powered workflows that do real work across your whole company in days, not weeks. I use Zapier every single day. It automatically responds to leads with enriched personalized data. It checks my calendar weekly and offers smarter ways to manage my time. And it even drafts emails for every new request that lands in my inbox. All of that running quietly in the background so I can focus on the work that matters. And Zapier's built for scale with enterprisegrade security, compliance, and governance. It's trusted by teams at Dropbox, Airbnb, Open Door, and thousands more. Go to try.zapier.com/howi to learn more about how Zapier can bring the power of AI orchestration to your entire org. Let's talk a little bit about this this prompt. So tell me what first kind of summarization exercises you want to do here.</p>
</details>

### 核心摘要生成器：量化客户情绪

**Matt:** 是的。所以基本上在这里，我可以使用像GPT-4这样的模型的原因是——你知道，部分原因仍然是需要不断更新模型——但如果它没有坏，我就不会去修它。所以这个特定的Zap对我们来说完美运行，它提供了我们所需的一切，我们不需要在这里进行更严格的分析，因为它只是我们想要识别的一些核心内容。所以，我宁愿不花额外的钱，甚至不去深入研究。但在某些时候，如果它不起作用，如果速度不够快，我就会考虑其他模型。有趣的是，旧模型往往会随着时间的推移运行得越来越快，而且它们实际上出错的次数也越来越少，有时旧模型也会随着新模型的更新而更新。所以，这不像你开的是一辆84年的雪佛兰，可以说。所以，这里是关键一步。这被称为核心摘要生成器。它的任务是分析Suzie和我们客户之间的客户成功电话记录，以评估客户关系的健康状况并识别改进领域。摘要以客户公司名称、主要参与者开头，然后继续进行，询问关键利益相关者，然后提供通话概述，我们描述通话目的、主要议题和结果，排除闲聊。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Yeah. So basically here and the reason I can use a model like GB like like a GPT4 is and and you know part of it again is just keeping up with continuing to update the models but I don't fix things if they're not broken. So this particular Zap works perfectly for us and it gives us everything we need and we don't need more rigor in analysis here because it's just some core things that we want to identify. So, I'd rather not spend the extra money and even go through it. But at certain point, if it didn't work, I would look at models if it wasn't going fast enough. What's interesting is the older models tend to work faster and faster and faster over time and they actually error out less and and sometimes the older models get updated as a newer models update as well. So, it's not like you're you're driving in an 84 Chevy, so to speak. So, here this is a key step. This is called core summary generator. And what this is asked to do is analyze the customer success call transcript between Susie and our client to gauge the health of customer relationships and identify improvement areas start summaries with the customer's company name key participants and then kind of going through it ask for the key stakeholders and then it gives a call overview we describe the call's purpose the main topics and the outcome exclude small talk.</p>
</details>

**Matt:** 然后我有一系列不同的指令：评估整体客户情绪，注意任何不满或担忧，提供1到10的情绪评分，其中10表示高度满意，1表示可能停止我们的服务。这是关键，因为它允许我们量化客户情绪随时间的变化，我们实际上将其与实际的客户流失率进行了基准测试。而且它具有高度的预测性，如果你取过去一年客户通话的平均情绪评分，它能极大地预测客户是否会流失，以及如果他们非常满意，是否会追加销售。另外，客户在通话中做得非常好的一件事，识别出来，以及他们本可以做得更好的地方，然后列出关键的下一步行动。所以这基本上是一个总体的提示，它会获取通话记录并为我识别所有这些信息，然后我可以用这些内容做各种不同的事情，但它是整体输出的很大一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> And then I have a variety of different instructions assess the overall customer sentiment noting any frustrations or concern provide a sentiment score from 1 to 10 where 10 reflects high satisfaction and one indicates potential discontinuation of our services. This is the key thing because it allows us to quantify customer sentiment over time and we actually benchmarked this against actual churn. So and and it's been highly predictive um in terms of the if you take the average sentiment score of customer calls over the past year, it's a huge predictor of if the customer is not just going to turn, but are they going to upsell if they're really happy? also one great thing the customer successfully did on the call kind of identify that and what are some things that they actually could have done better and then list key next steps. So this is basically just an overarching prompt where it'll take a uh a transcript and it'll identify all this information for me and then that content I can do a variety of different things with but it's a huge part of the overall output.</p>
</details>

**Claravel:** 所以，我在这里读你的提示时想指出的一点是，在一个理想的世界里，你所有最优秀的**CSM**（Customer Success Manager: 客户成功经理）都会在每次通话后以完美的方式完成这项工作，进行出色的、客观的自我评估等等。但现实是，我们都太忙了，你的客户成功人员或销售人员可能一个会议接一个会议，到一天结束时，他们才试图整理笔记并记录一些小事情。我只是觉得这很好，因为它能让客户成功经理或客户经理的工作轻松很多，让他们通过自动化一些他们本会做的工作，从而在工作中表现出色。所以我觉得这是一个很好的卫生步骤，让每个人都思考，你知道，开完会后，如果我要尽我所能做到最好，每次会议后我会做哪五件事？然后为自己自动化这些。然后你就知道你每次都会这样做。

<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text"><b>Claravel:</b> So one of the things I want to call out here as I was reading your prompt is in an ideal world all your best CSMS are doing this after every call in a perfect way with great you know objective self evaluation all this kind of stuff and the reality is we're all so busy that you know your customer success folks or your sales folks are probably going meeting to meeting to meeting and at the end of the day trying to figure out their notes and put little things in and I just think what's nice about this is you can make the customer success or account manager's job a lot easier and let them be exceptional at their job by automating some of the work that they they would do. And so I think it's a really good hygiene step for anybody to think, you know, after I'm coming out a meeting, if I were to do my best job possible, what are the five things I would do coming out of each meeting? And then just automate that for yourself. And then you know that every time you're going to be doing that.</p>
</details>

### 自动化反馈与后续：提升团队效率

**Matt:** 是的。所以我还有很多其他步骤，我不会全部讲完，因为它们太多了。但基本上，它会在Slack上查找用户。所以我了解我们公司在Slack上的员工用户。它会识别那些不是我们公司的人。所以你可以把他们排除在外。它能够在这里找到用户。所以我有时会使用Slack作为查找工具，因为我们公司的目录在Slack上。所以如果我想以自动化方式获取某人的电子邮件地址，并且我有他们的名字，我实际上可以在Zap中将Slack用作查找工具，甚至无需向Slack发布任何内容。所以有时这些工具实际上可以用于其他非其核心目的的用途。然后基本上，我做的主要事情之一是发送一个频道消息。所以基本上，通话结束后，你可以看到新的客户成功通话者有账户、机会、我们公司通话的负责人、通话日期，它基本上有那个摘要，然后发送出去。所以我们有一个频道，它是一个持续的信息流，我作为CEO显然非常关注，我现在就分享一下，基本上每次客户通话结束后，它就会在Slack上弹出，我真的能够了解公司的脉搏，客户关心什么，仅仅通过查看这样的东西。你知道，如果这是AI唯一带来的发明，那它就非常不可思议了。这只是我们做的众多事情之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Yep. So the bunch of other steps I have and I'm not going to go through all of them because there's a ton of them. But basically it it looks up the user on Slack. So I understand the user main our employee on Slack. It identifies the people who aren't from our company. So you can kind of exclude them. Um it's able to find the user here. So I use Slack as a as a lookup sometimes because our companies from Power Directories on Slack. So if I'm trying to get someone's email address in automated fashion and I have their name, I can actually use Slack as a lookup tool in Zap without even actually posting anything to Slack. So sometimes these tools actually can be used for other purposes that's not their core purpose. And then basically the fir one of the main things I do from this is I send a channel message. So basically after the call is done you can see new customer success caller has the account the opportunity the leader of the call from our company the date of the call and it basically has that summary um that gets sent out. So we have a we have a channel that that's a constant feed that I obviously the CEO I'm very attuned to and I'll I'll share it right now where basically every time a customer call is done it just pops up on Slack and I'm able to really you know we have 300 employees at our company and I'm really able to get a sense of the kind of pulse of the company what customers care about just based upon looking at at something like this and it's you know that alone if that was the only invention that came out of a high. It would be pretty incredible if you think about it. And this is just like one of many things that we do.</p>
</details>

**Matt:** 所以我现在要打开Slack。如你所见，这是一个示例通话，它显示了关键利益相关者是谁，通话试图建立什么，情绪评分是多少，得到了8分，对吧？追加销售的机会、反馈和下一步行动。这里基本上有一个通话记录。如果客户不满意，这对我们来说非常有用，对吧？如果他们，你知道，由于某种原因，评分低于7分，我们有一个客户流失通知频道，基本上它被称为“客户流失早期预警系统”，它会告诉我们客户是否由于某种原因不满意。我们不得不对其进行调整，因为有时客户会说他们不满意，但也许他们只是对自己的业务进展不满意。所以它不总是像一门科学。然后有时在频道里，销售代表会说：“哦，不，他们很好。只是这样。”但在很多情况下，正如你之前所说，有时销售代表可能不想告诉任何人，对吧？也许是周五下午，他们只是不想处理。然后发生的事情是，我们最终忘记了这件事，然后客户在三个月后流失了，我们就会想：“你为什么不告诉我们？”我们不再需要那样做了。我们不再需要问别人与宝洁公司的通话进展如何了。它就在这里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> So I'm going to pull up and slap right now. As you can see here, this is a sample call and it shows who the CA key stakeholders will were uh what the call attempted to establish, what was the sentiment score, got an eight, right? Opportunities for upselling feedback and next steps. And it has basically a transcript here. And it's great for us to do if a customer is not happy, right? If they um you know, for some reason uh score below a seven, we have a churn uh notification channel um where basically it's called churn early warning system where it'll tell us if a customer is not happy for whatever reason. and and and we've had to modulate it cuz sometimes a client will say they're not h it'll say the client's not happy but maybe they're just not happy with how their business is going. So it it's it's not always like a science. Um, and then in the channel sometimes the rep will say, "Oh, no, they're fine. It's just this." But we have in many instances, and to your point earlier, like sometimes the the rep might not want to tell anybody, right? Maybe it's a Friday afternoon, they just don't want to deal with it. And then what happens is we end up forgetting about it and then the customer turns three months later and we're like, "Why didn't you just tell us?" We don't have to do that anymore. We don't have to ask somebody how that call went with Proctor and Gamble. It's just here.</p>
</details>

**Claravel:** 是的。好的，太棒了。所以我们保留了通话记录。你发布了所有这些记录。所以公司里的每个人都可以访问客户通话和摘要，这对于一般情绪分析、知识共享、透明度来说非常棒。你会把那些情绪分析得分低的通话放到一个预警区域，一个客户流失警报频道，我相信你会给予额外的关注，这样你就可以提前应对潜在的客户流失风险，作为一个B2B女孩，我非常非常喜欢这一点。然后，这有点像账户运营方面的事情，但我知道你还会处理很多营销方面的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> Yep. Okay, great. So, we keep the transcript. You post all of them. So everybody in the company has access to customer calls and summaries which is just great for general sentiment analysis, knowledge sharing, transparency. You take any ones where the sentiment analysis is low and you put them in sort of like a warning area churn alert channel um where I'm sure you're paying a little extra attention so you can get ahead of potential churn risks which as a B2B girl I really really love. And then so that's that's a little bit more like the account ops side of things, but then I know you take off a bunch of marketing.</p>
</details>

**Matt:** 是的，还有很多其他事情。是的。所以下一个，同样，这都是同一个自动化的一部分，是另一个**LLM**（大型语言模型）调用，我们基本上描述了Suzie做什么，我们说分析通话记录中感兴趣的关键领域数据，并输出我们应该在Google上购买的一堆关键词。所以如果客户使用的词语描述了他们感兴趣的或者我们销售的产品，而我们没有为它们运行Google关键词广告，我们希望这样做。所以基本上这些关键词会被提及，我们提取它们，然后我们运行一个自动化来自动将这些关键词添加到我们的Google广告系列中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Yeah, there's a bunch of other things. Yeah. So this next one, again, this is all part of the same automation is another LLM call where we're basically describing what Suzie does and we're saying analyze the key areas of interest data in the transcript and output a bunch of keywords that we should be buying in Google. So if customers are using words that we that are describing what they're interested in or what we sell and we're not running Google keywords for them, we want to. So basically these keywords will be mentioned, we extract them and then we run an automation to add those keywords to our Google campaigns automatically.</p>
</details>

**Claravel:** 所以你不仅在利用——我喜欢这个，所以我想让大家注意。所以，你不仅在利用账户层面的特定背景，而且你还在说，我们的客户会用他们自己的语言告诉我们他们在寻找什么，他们试图解决什么问题。这些客户电话是丰富的市场洞察来源。所以你将利用这些客户电话来实际提取市场表面区域、关键词，以及你可以投入营销资金的地方，然后接触与你成功合作的客户相似的客户，这是一个非常好的闭环解决方案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> So not only are you taking sort of this is I love this one, so I want people to pay attention. So, not only are you taking the account level specific uh context, but you're saying our customers will tell us in their words what they're looking for, what problems they're trying to solve. These customer calls are a rich source of market insight. And so you're going to use these customer calls to actually extract out market surface areas, keywords, places where you can put marketing dollars against and then reach customers similar to the customers that you're successful with, which is a really nice closed loop solution. Um, and again,</p>
</details>

**Matt:** 对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> that's right.</p>
</details>

**Claravel:** 你知道，我们刚才谈到，在一个理想的世界里，客户成功经理会提供这样的笔记摘要。在一个理想的组织中，你的付费搜索经理会监控所有这些电话并为你做所有这些事情。但我们不住在理想世界里，人们都很忙。所以，这不仅是从一个人的角度来设计，比如一个人会做什么，而且也是从一个团队的角度来设计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> You know, we were talking about how this note summary is the the way in an ideal world a customer success manager would provide notes. In an ideal organization, your, you know, paid search manager would be monitoring all these calls and doing all this for you. But we don't live in ideal worlds and people are busy. And so again, this is is not only designing from the point of view of like what would a person do, but also what would a team do.</p>
</details>

### 市场营销与**Go-to-Market**自动化

**Matt:** 对。我们做的另一件事是，我们已经将教练功能整合到其中。所以下一步基本上称为“个人通话反馈”。它实际上会为通话中的人创建一份反馈笔记。所以这只是发送给销售代表或客户销售代表，告诉他们你做了什么，你做对了什么，你做错了什么，并在通话结束后立即发送给他们，这样他们就能明白如何改进，这是我们以前需要雇人来监督他们并告诉他们的事情，而他们自己也知道。有趣的是，那些真正想变得更好的人，AI是一个不可思议的工具，因为他们会想要这种反馈。而那些从一开始就不想听任何人意见的人，他们也不会想听这个，但他们无论如何都不会做得好。所以这说明，它会让优秀的人变得更好，对吧？我们将其添加到数据集中。所以我们有一个反馈通话数据集。所以我们实际上可以看到是否有趋势，比如AI是否检测到这个人总是缩短通话时间，或者他们总是打断客户，或者他们不谈论某些事情。然后当需要评估他们时，所有这些都是数据驱动的，而不是短视的。如果经理们更换了，我们拥有所有这些信息，而优秀的经理们会想要这些信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> That's right. The other thing we do is we've done a coach into this. So the next step essentially is called individual call feedback. And what this does is it actually creates a feedback note to the person on the call. So this just goes to the sales rep on the on the sales or customer sales rep saying here's what you did, here's what you did right, here's what you did wrong and actually sends it to them right afterwards so they understand how to get better, which is something that we would had to hire somebody to be on their back and tell them which they know on their own. What's interesting is like the people that really want to get better, this is AI is an incredible tool because they're going to want this feedback. And the people who never really wanted to hear from anyone to begin with, they're not going to want to hear this, but they wouldn't have been good in either way. So that kind of goes to the point that like it's going to make the good people that much better, right? And we add this to a data set. So we have a a feedback called data set. So we can actually see are there trends like is AI detecting that this person always cuts calls short or they always interrupt the customer or they don't talk about and then when it comes time to reviewing them it's all data driven it's not just myopic if if managers change over we have all this information and the good ones want this information.</p>
</details>

**Matt:** 是的，我实际上想反思的是，你正在从个人贡献者、**CSM**（客户成功经理）、**AE**（客户经理）的角度谈论这个问题，但我在想的是，**AE**和**CSM**的绩效很大程度上取决于他们是否有优秀的销售经理教练？他们是否有优秀的销售高级副总裁能够及时为他们提供有针对性的指导？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Yeah, what I was actually going to reflect on is you're talking about this from the point of view of the individual contributor, the CSM, the AE, but what I was thinking is so much of AE and CSM performance is really gated on do they have a good sales manager coach? Do they have a good SVP sales that can actually provide them targeted coaching on all of their right when it's relevant?</p>
</details>

**Claravel:** 这有点像拉平了竞争环境。你的经理可能很棒，你的经理可能很糟糕。在每次通话中，你都会得到关于你表现的客观反馈，所以这再次有助于提升整个组织的绩效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> And this sort of like evens the playing field. Your manager could be great, your manager could be terrible. in every call you're going to get kind of objective feedback on your performance and so again it helps uplevel the performance across the organization</p>
</details>

**Matt:** 而且它被民主化了，你说得对，100%。我们意识到的另一件事，回到解决问题上，我们从销售团队和客户团队那里听到，你知道，在通话结束后写一封好的后续邮件需要花费大量时间。所以现在我们添加了后续邮件撰写器，它基本上会撰写一封他们想要发送的作为通话后续的邮件，而且它设计得非常好，并发送给他们，供他们基本上复制粘贴并发送。这只是他们的一种方式，所以通话结束后，他们会在收件箱中收到反馈，并收到这封邮件，他们可以复制粘贴并发送，或者编辑它。你知道，我们本可以将其自动化，但你知道，这就是“人在回路中”的重要性，对吧？我们不希望，如果上下文错了怎么办？如果他们不想立即发送反馈怎么办？如果他们想抄送新的人怎么办？所以这就是为什么我们必须在这里有一个“人在回路中”的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> and it's democratized you're right 100%. The other thing we realized going back to problem solving is we heard from our sales team and our customer team you know it takes so much time for us to write a good follow-up email after the call. So now we added follow-up email writer where essentially you write an email that they we that they would want to send as a follow-up to the call and actually just and and it's designed very well and it's sent to them for them to basically copy and paste it and send it and it's just a way for them so right after the call they'll get the feedback in their inbox and they'll get this email and they can copy and paste and send or edit it and you know we could have made this automated but you know that's where the human in the loop matters right we don't what if there's the context is wrong what if they don't want to send the feedback right away? What if they want to copy somebody new? So that's why we have to have a human in the loop here.</p>
</details>

**Matt:** 所以客户流失早期预警检测器基本上通过两条不同的路径发送，这些路径基本上决定了我们应该通知谁，不应该通知谁。所以我们现在也开始从这些数据中做更多营销驱动的事情。其中之一是我们开始创建一个数据库。这被称为客户档案数据库。客户档案数据库的作用是，它基本上在每次通话后构建数据，包括客户的角色是什么，他们对Suzie的哪些产品领域最感兴趣，他们对哪些业务趋势最感兴趣，我们有一个跨所有通话的结构化数据库，这些数据被输入到GPT中。所以如果一个销售人员要与一家汽车公司的品牌经理进行通话，他们可以说：“汽车公司的品牌经理最感兴趣的趋势或我们的产品是什么？”它会立即告诉他们，因为聚合数据存储在我们部署的不同工具中。所以再次强调，我们不仅有自动化的事情发生，而且我们还有这个聚合数据库，我们持续地从中解锁价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> So the churn early warning detector basically sends through two different paths and these paths essentially um kind of dictate who we should notify and who we shouldn't. So we've also now started to do much more marketing driven things from this data. One of which is we start to create a database. This is called customer profile database. And what customer profile database does is essentially structures data after each call with things like what's the role of the customer, what product areas of Suzie are they most interested in, what business trends are they most interested in, and we have a structured database across all the calls which gets fed into a GPT. So if a salesperson is going into a call with a brand manager of an automotive company, they could say, "What are the things that brand managers of automotive companies are most interested in in terms of trends of interest or our product?" And it'll tell them right away because the data in aggregate is stored with a different tool that we deploy. So again, not only do we have the automated things that are happening, but we have this aggregate database that we unlock the value of on an ongoing basis.</p>
</details>

### CRM与数据：Salesforce的未来

**Claravel:** 好的。我不得不再次问你一个问题。作为一个B2B企业女孩，你是否在使用**CRM**（Customer Relationship Management: 客户关系管理系统）？这些数据是否会进入Salesforce？你是不是说：“是的，所有这些都可以进入Google表格。我们不在乎。”我只是好奇。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> Okay. I have to ask you a question again. as a B2B enterprise girl, are you using a CRM? Like, is this data going into Salesforce? Are you like, "Yes, it can can all go in Google Sheets. We don't care." I'm just curious.</p>
</details>

**Matt:** 嗯，我的意思是，你知道，今天的数据会进入Salesforce，但你知道，我认为Mark Benioff之所以倾向于代理力量，正是出于这个原因，对吧？这就像有什么意义呢？所以，理论上，我目前构建的一切，我相信我刚才向你展示的是一个更好的Salesforce版本。你猜怎么着？销售人员不必输入记录。它会自动输入，经理会获得信息，他们可以与数据聊天，他们可以拉取报告并进行聚合。这基本上就是Salesforce的构建目的。你知道，从一个元角度来看，我们公司在市场研究方面也面临同样的问题，我们构建了智能。所以我们都在努力弄清楚如何根据正在发生的事情来颠覆自己。但你说得对。我的意思是，这就是当今存在的基本问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Well, I mean, you know, today goes in the Salesforce, but the you know, I think the reason Mark Beni off is leaning into agent forces for that reason, right? It's like what's the point, right? So, like theoretically everything I'm building right now is a better what I just showed you I believe is a better version of Salesforce. And guess what? The salesperson doesn't have to enter a record. It's entered and the manager is getting information and they can chat with the data and they can pull reports and aggregate. That's basically what Salesforce was built for. And you know, from a meta standpoint, our company is facing the same thing with market research where like we built the smart. So we're all trying to figure out how to disrupt ourselves based upon what's happening. But you're right. I mean, and that's sort of the fundamental issue that exists today.</p>
</details>

**Claravel:** 不过我当时在想的是，Salesforce面临的挑战之一是，你知道，Salesforce之所以如此成功，是因为它在实现自己的数据模式方面具有灵活性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> What I was reflecting on though is one of the challenges with Salesforce. Well, you know, one of the reasons Salesforce did so well is because of the flexibility of implementing your own data schema and kind of</p>
</details>

**Matt:** 是的，当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Yeah, of course.</p>
</details>

**Claravel:** 而它的局限性之一是，天哪，你必须通过Salesforce管理员才能设置任何东西，然后，你知道，图表和图形也不太好，没有人真正知道如何，我的意思是，你有时只是想知道宝洁账户的状态是什么。这就是你想知道的，而你很难得到那个愚蠢的答案，而现在你只需说出来或打字就能得到。这就是我们所有人都在前进的方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> And one of the limitations is like gosh, you have to go through your Salesforce admin to like set up anything and get, you know, and then the charts and graphs weren't great and no one really knew how to I mean, you just sometimes want to know like what's the status of the PNG account. It's what you want to know and it's just good luck getting that dumb where right now you could just literally just speak it or type it and you get it. And that's kind of where we're all heading to.</p>
</details>

**Matt:** 是的。然后你展示的是，你可以创建这些一次性的、结构松散的Google表格，例如用于各种查找。它们不必完美。它们不必在你的**CRM**（客户关系管理系统）中固化，但它们对你的团队有用。而且我认为。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Yeah. And then what you're showing is you could create these oneoff loosely structured Google Sheets for example for different various lookups. They don't have to be perfect. They don't have to be hardened in your CRM, but they're useful to your team. And I think</p>
</details>

**Matt:** 它是结构化的。它是一个结构化数据库，你知道，我认为对于**RAG**（Retrieval-Augmented Generation: 检索增强生成），结构化数据库的效果要好得多。这是一个结构化数据库，这真的就是你所需要的一切。我认为这里的一个关键点，回到我之前提到的，就是你必须找到它。这不是关于工具，而是关于数据。人们过于关注应用层。没有数据，它就毫无意义。对我来说，这就像是最终的数据来源。这是一个宝库，这是人们在现实世界中表达他们想要什么。所以我想在这些数据之上构建一切。所以这就是为什么当我们为今天的采访做准备时，你说：“我们会展示很多不同的东西。”而我以不同的方式看待它。我将向你展示一件事，它有许多不同的触角，基于最重要的事情，那就是我们的客户在说什么，这是一种不同的看待方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> it's structured. It's a structured database which you know I think you know for rag structured databases work much better. And this is a structured database and that's really all you need. I think a key point here it goes back to what I mentioned earlier is you just have to find it. It's not about the tool, it's about the data. People are so focused on the application layer. It means nothing without the data. And to me, it's like this is the ultimate source of data. And this is the treasure trove and this is people in the wild saying what they want. So I want to build everything on top of this data. So that's why when when we were prepping for today's interview, you're like, we'll show a bunch of different things and and the way I look at it differently. I'm gonna show you one thing that has many different tentacles based on the most important thing which is what our customers are saying and that's a different way of looking at it.</p>
</details>

**Claravel:** 是的。我希望你再展示一个关于这个主工作流的营销用例。但在你展示的时候。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> Yeah. And I want you to show one more sort of marketing use case off this master workflow. But while you're that up,</p>
</details>

**Matt:** 我可能会鼓励人们思考的是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> what I might encourage people to think about is</p>
</details>

**Claravel:** 把你自己看作一个单一的工作流。把你的团队看作一个单一的工作流。甚至可以把你的公司看作一个单一的工作流，然后弄清楚整个事情应该如何运作。然后逐步深入到这些自动化中，这真的很有趣，而不是这些小型的微任务式的东西。你可以真正将其提升到，给定一个特定任务，这个团队应该遵循的循序渐进的过程是什么。所以我觉得你拥有这个“超级自动化”而不是这些零散的一次性东西真的很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> think of yourself as a single workflow. Think of your team as a single workflow. Maybe even think of your company as a single workflow and figure out how that whole thing should work. and then work your way into some of these automations is really interesting as opposed to these little micro task kind of style things. You can really ladder it up to what's the step-by-step process this this team should follow um given a certain task. And so I think it's really interesting that you have this this mega automation as opposed to these little oneoff one-off things.</p>
</details>

**Matt:** 所以这是我将向你展示的最后一个，这个最初引起了争议，并且需要大量的测试才能上线。也就是说，我们与某人交谈，比如一个金融服务品牌，他们谈论Suzie是一家市场研究公司，对吧？所以我们与Qualtrics和SurveyMonkey等公司竞争。所以我们与一家金融服务公司进行了一次通话，他们想为一个新产品命名，比如一张新的信用卡或类似的东西，这是一个其他金融服务公司可能想用我们来解决的用例。现在，显然，我们不能分享X银行正在考虑改名。所以我们，但我们想分享Suzie可以做这个新的用例。所以我们所做的是，我们进行了一个自动化，它基本上从通话中提取任何识别信息。所以基本上这包括品牌、品牌名称、公司拥有的任何特定策略，任何对他们来说具有识别性的信息。我们进行编辑，我们必须反复测试，以确保没有任何东西能够通过，因为我们会失去客户，我们会违反规定。所以我们不能做任何这些事情。但同时，如果一个销售人员刚刚与一家饮料公司谈论了包装测试，他们非常欢迎在下一次通话中说：“是的，刚刚与另一家公司谈论了这件事。”这就是我们希望采用程序化方法来做的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> So this the last one I'll show you which is this one was controversial at first and it required massive testing to push it live which is so we speak to somebody say a financial service brand and they talk Susie is a market research company right so we compete with companies like call tricks and survey monkey etc so we're going to have a we had a call in with a financial services company and they want to name a new product say it's a new credit card or something that's a use case that other financial services companies might want to use us for. Now, obviously, we can't share that X Bank is thinking about renaming something. So, we but we want to share that Suzie can do this new use case. So, what we did is we've done an automation where it basically extracts any identifying information from the call. So, basically that includes the brand, the brand name, any specific strategy that the company had, anything that's identifying to them at all. we redact and we have to test it over and over and over again to make sure that nothing could get through that could be because we'll lose customers and and we breach car. So we can't do any of that but at the same time if a salesperson just talked to a beverage company about you know testing packaging they're very welcome the next call say yeah just spoke to another company about this and that's kind of what we want to have a programmatic approach to.</p>
</details>

**Matt:** 所以，这个自动化会获取这些通话记录，然后撰写一篇博客文章，完全删除了所有指定的识别信息，但只关注我们讨论的想法。它会创建一个图形、一个标题。它甚至会在底部创建一个定制的**CTA**（Call to Action: 行动号召），并且会对其进行**SEO**（Search Engine Optimization: 搜索引擎优化）优化，然后将其发布到我们的博客上，并在21天后发布，这只是我们为了确保隐私或其他任何事情都达到极致而做的事情。所以我们现在有10,000篇博客文章，它们是在我们进行的通话基础上创建的，无需任何人工干预。它就是不断地生成。每一个你能想到的用例，现在我们通过Google动态搜索广告对这些文章投放广告。所以，你知道，我们现在开始获得——这种东西需要一段时间才能获得**SEO**（搜索引擎优化）的牵引力。但即使在那之前，现在如果有人搜索Suzie可能与某人谈论过的任何事情，我们的博客上都会有一篇相关的文章，我们还会对其投放广告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> So, what this does is it'll take those transcripts and it'll write a blog post that fully redacts all that specified information, but focuses just on the idea of what we talked about. It'll create a graphic, a headline. It'll even create a custom um CTA at the bottom and it will and it'll optimize it for SEO and it publishes it on our blog and it publishes it 21 days later which is just something that we want to do to even make sure to the nth degree that any privacy or anything. So we we but now we have 10,000 blog posts that are created on the calls that we're making without any human intervention. It just goes it goes and goes and goes. um every single use case that you can think of and now we're running ads against these through Google dynamic search ads. So, you know, and we're starting to get now it takes a while to gain SEO traction with stuff like this. But even before that, now if someone searches for anything that Susie has possibly talked to somebody about, we have a blog post up there and we run ads against it.</p>
</details>

**Claravel:** 这太棒了！我喜欢这个。这给了我很多想法。我喜欢这一点，它再次利用了你最丰富的洞察来源，不仅是客户想要什么，还有营销人员想要什么，市场想要什么，并创建了资产，然后你可以用这些资产去接触有相似问题的相似客户。所以再次强调，你最成功的客户会看起来像你最成功的客户。所以你想去寻找更多这样的人。所以再次总结一下，对于所有人来说，一次通话会生成一个摘要、一个Slack帖子、一个客户流失风险警报、一封后续邮件、一封给**CSM**（客户成功经理）的教练邮件。它丰富了大量数据。它发送了自动自动化。它为你识别了要竞价的关键词，并为你生成了内容，既可以竞价也可以发送付费流量，同时还可以通过一次通话获得自然流量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> This is this is amazing. I love this. This gives me so many ideas. And what I like about this is it's taking again your richest source of insight about not just what a customer wants, but what the marketer want, what the market wants, and creating assets that then you can use to go reach similar customers with similar problems. So again, your most successful customers are going to look like your most successful customers. And so you want to go find more more of those folks. So again, to recap for everybody, a single don call generates a summary, a Slack post, a turn risk alert, a follow-up email, a coaching email to the CSM. Um, it enriches a bunch of data. It sends out auto automations. It identify keywords for you to bid on and it generates content for you to both bid on and send paid traffic to but also generate to get organic traffic going off one call.</p>
</details>

**Claravel:** 所以我想提醒大家的是，在这个AI和自动化时代，你可以利用一个非常简单的资产，并从中提取出极致的价值，我认为这是一个非常有用的工作流。Matt，这是How I AI的第一次。你创建了一个如此庞大的工作流，我们只展示了一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> So the other thing I want to call out for people is in this age of AI and automation, you can take a very simple asset and extract the like nth degree of value out of that asset which I think is such a useful and helpful workflow for people. So Matt, we had this is a how I AI first. You have created such a big workflow that we have only shown one</p>
</details>

**Matt:** 我认为这已经足够了，我们会让人们联系你。我知道你还有其他一些非常有趣的工作流，但我们会让你回去构建Zaps并运营这个出色的团队。在我让你离开之前，让我问两个闪电式问题，然后我们就会让你离开。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> and I think that's enough and we'll have people reach out to I know you have a couple other really interesting workflows, but we're going to get back you back to building Zaps and running this amazing team. Before I let you go, let me ask um two lightning round questions and then we'll we'll get you out of here.</p>
</details>

### 团队结构与AI采纳

**Claravel:** 第一个问题是，你知道，我一直在反思，这很好地反映了优秀的个人贡献者如何工作，或者优秀的团队如何工作。这如何改变了你对现在初创公司团队建设的看法？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> One is, you know, as I've been reflecting, this is a good reflection of how great individual contributors work or how great teams work. How has this changed how you think about building the shape of your team in your startup right now? Yeah, I think</p>
</details>

**Matt:** 我认为更多的是个人贡献者，更多的是那些愿意亲自动手、愿意学习、有动力和抱负、积极主动寻找解决方案的人。我认为这些人将推动下一个伟大的企业，而不是那些只会接受命令的人，不是那些每天上班等着被告知该做什么的人，因为你可以，你可以通过告诉AI该做什么来解决我能做的事情。所以我不需要更多的人来告诉我该做什么。我需要那些能提出新想法和解决方案并积极主动的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> it's far more individual contributors, far more people who want to put their hands on keyboard, people who are willing to learn, um people who are motivated and ambitious that are that are proactive at finding solutions. I think those are the people who are going to drive the next great businesses, not order takers, not people who walk in the work every day and wait to be told what to do because you could just you could you could just solve what I'm able to do if I tell AI what to do. So I don't need more people to tell what to do. I need people who are going to come up with new ideas and solutions and be proactive.</p>
</details>

**Claravel:** 是的。我说的就是，这是“超级个人贡献者”的时代。如果你能成为一个超级个人贡献者，你就会走得很远，你知道。第二个问题，你认为在你的团队内部谁应该负责这个？我知道你正在构建很多，但这应该是一个角色吗？这是每个人的工作吗？你认为谁需要考虑构建这类自动化？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> Yeah. What I say is this is the age of the super icy. Like if you can be a super icy, you are going to go so so far, you know. Second question, who do you think should own this inside your team? I know you're building a lot of it, but is this a role? Is this everybody's job? Who do you think needs to be thinking about building these kinds of automations?</p>
</details>

**Matt:** 嗯，我认为你需要几个**Go-to-Market**（市场进入策略）的协调者，他们几乎就像总承包商一样，审视所有不同自动化的蓝图，但同时我认为你需要有人负责这些自动化的产出。所以营销团队应该了解博客的产出，如果它不起作用，他们应该去找自动化团队说：“嗯，这出问题了，我们如何改进它？”等等。我认为这是最好的设计，但这确实需要组织内有新的角色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Well, I I think that you need like a couple of G go to market orchestrators that are are almost like general contractors that are looking at the blueprint of all different automations, but then I think you need people who are owning the output of those automations. And so the marketing team should know the output of the blogs and if that's not working, they should go to the, you know, the automation team and say, well, this is breaking, how do we make it better, etc. I think that's the best design, but it does require definitely new roles in the organization.</p>
</details>

**Claravel:** 是的，当然。然后当然是最后一个问题，当AI没有给你想要的结果时，你的提示技巧是什么？也许在ChatGPT中，你会贿赂它吗？你是一个全大写的人吗？你做什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> Yeah, for sure. And then of course the last question which is prompting techniques when AI is not giving you what you want. What do you do? Maybe in chat GPT like do you bribe? Are you an all caps person? What do you do?</p>
</details>

**Matt:** 我有一个框架，我首先设定我想要完成的目标，然后我设定提示的框架，就像护栏一样，比如“不要做什么”。然后我认为对我来说，告诉它不要做什么是一个很好的方法，可以消除我看到的问题，直到我接近它输出我真正想要的东西，然后我再完善我真正想要它做的事情。我认为这通常就是我处理它的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> I I have a framework where I first set what I'm trying to accomplish and then I kind of set the framework for the prompt like almost like guardrails like here's what not to do. Uh, and then and then I think for me telling it what not to do is a great way of kind of eliminating the issues I see until I get close and when I get it close to it outputting something I actually want then I refine what I wanted to actually do and I think that's generally how I go about it.</p>
</details>

**Claravel:** 好的。所以你正在做护栏式提示，除了“我想让你完成这个”之外，还有“不要做这个”。Matt，这太棒了。我喜欢这个。我实际上要去偷你的一些想法，用于我自己的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> Okay. So you're doing guardrail prompting do not do in addition to this is I want you to accomplish. Well Matt, this has been amazing. I love this. I'm actually going to go steal a bunch of your ideas for my own.</p>
</details>

**Matt:** 请便。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Please do.</p>
</details>

**Claravel:** 企业管道。我们可以在哪里找到你，我们如何提供帮助？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> Enterprise pipeline. Where can we find you and how can we be helpful?</p>
</details>

**Matt:** 你可以在mattbritton.com了解更多关于我的信息。我刚刚在五月推出了一本新书，名为《Generation AI》。所以一定要去看看。它是关于Alpha世代和AI世代的。然后你可以在suzie.com了解更多关于我的公司Suzie的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Uh you can find learn more about me at mattbritton.com. Um I just uh rolled out a new book in May called Generation AI. So definitely check that out. It's about generation alpha and the AI generation. And then you can learn more about my company Suzie at suzie.com suzy.com.</p>
</details>

**Claravel:** Matt，我真的很感谢你。谢谢你的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> Well Matt, I really appreciate it. Thanks for the time.</p>
</details>

**Matt:** 非常感谢，Claire。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Matt:</b> Thanks so much Claire.</p>
</details>

**Claravel:** 非常感谢您的收看。如果您喜欢本节目，请在YouTube上点赞并订阅，或者更好的是，给我们留言分享您的想法。您也可以在Apple Podcasts、Spotify或您喜欢的播客应用上找到本播客。请考虑给我们评分和评论，这将帮助其他人找到本节目。您可以在howiaipod.com查看我们所有的剧集并了解更多关于本节目的信息。下次再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text"><b>Claravel:</b> Thanks so much for watching. If you enjoyed this show, please like and subscribe here on YouTube, or even better, leave us a comment with your thoughts. You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app. Please consider leaving us a rating and review, which will help others find the show. You can see all our episodes and learn more about the show at howiaipod.com. See you next time.</p>
</details>