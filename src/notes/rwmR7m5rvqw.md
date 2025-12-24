---
area: personal-systems
category: productivity
companies_orgs:
- Chime
- Dropbox
- Airbnb
- Open Door
- Brex
- Atlassian
date: '2025-10-27'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- How I AI
people:
- Clarvo
- Lee
products_models:
- Cursor
- Jira
- Confluence
- Notion
- Figma
- GitHub
- ChatGPT
- Claude
- GPT-5
- DeepSeek
- Gemini
- Zapier
- News API
- SEM Rush
- Claude Sonnet 4
- Google Docs
- Excel
- Google Sheets
project:
- ai-impact-analysis
- personal-growth-lab
series: ''
source: https://www.youtube.com/watch?v=rwmR7m5rvqw
speaker: How I AI
status: evergreen
summary: 本文深入探讨了Chime首席产品经理Dennis Yang如何利用AI工具Cursor，革新产品管理工作流程。他展示了如何使用Cursor撰写产品需求文档（PRD）、将其发布到Confluence或Notion、通过AI处理评论并自动回复、以及创建Jira任务和状态报告。文章强调了AI在提升效率、改善沟通和实现工具互操作性方面的巨大潜力，并分享了利用AI进行产品原型设计和日常工作简报的经验。
tags:
- code
- history
- llm
- product-management
title: AI赋能产品管理：Dennis Yang如何用Cursor提升PRD、Jira和团队协作效率
---

### AI驱动的产品管理新范式

我们已经看到很多人使用像**Cursor**（一款AI驱动的集成开发环境，**IDE**：Integrated Development Environment）这样的工具来编写代码。然而，我们实际上还没有看到任何人仅仅使用Cursor来写作，而这正是您正在做的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've seen so many people use tools like Cursor to write code. We actually haven't seen anybody yet just using Cursor to write and that's what you're doing.</p>
</details>

**Dennis Yang**：Cursor之所以成为我最喜欢的AI用户界面，是因为它集成了所有关键的接口、交互和连接，这些对于我的日常产品管理工作至关重要。我认为我们正处于一个非常有趣的阶段，因为这些基本功能是在软件工程的背景下构建的，所以你会在这些工具中看到**Markdown**（一种轻量级标记语言）、**Git**（一种分布式版本控制系统）、提交（commits）和变更跟踪（change tracking）等概念，而这些工具过去都是以软件工程为中心的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The reason why cursor is my favorite UI for the AI is it has all the interfaces and interactions and connections into the tools that are critical for my daily product management. I think we're at this really interesting place where because these primitives are being built in the context of software engineering, you're getting these concepts of markdown, git, commits, change tracking in these tools that used to be very software engineering centric.</p>
</details>

主持人：最实用的解决方案将把**互操作性**（interoperability）作为关键要素之一。因此，任何感觉会锁定内容或数据的系统，我都不倾向于使用。我不在乎你为什么会有这些模式，我相信有很好的理由，但那是我的内容，我希望我的所有系统都能在需要时访问它。这确实改善了沟通。我减少了撰写状态报告的时间，同时提高了向上级和整个组织流通的状态报告内容的质量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The most useful solutions will have interoperability as one of the key things. So any system that if it feels like it's locking that contents or data away, I'm not going to prefer to use that system. I don't care why you have these modes. I'm sure there's a good reason, but that's my content and I want all my systems to be able to access it when it needs to. It's really improving communication. I'm reducing the time I'm spending writing status and at the same time improving the status content that is being circulated both up to leadership and across the organization.</p>
</details>

欢迎回到“How I AI”。我是Clarvo，一位产品负责人和AI狂热者，致力于帮助您利用这些新工具更好地构建产品。今天我们与**Chime**（一家金融科技公司）的生成式AI首席产品经理Dennis Yang进行了一次有趣的对话。这次对话让我有些紧张，因为我曾以为自己是AI驱动的产品经理中的佼佼者，但Dennis向我展示的工作流程远超我所见。他将向您展示如何使用Cursor不仅撰写**PRD**（Product Requirements Document：产品需求文档），还能将其推送到**Confluence**（一款团队协作软件）或**Notion**（一款多功能工作空间工具），阅读评论，回复评论，原型设计AI工具等等。对于任何好奇是否可以在不编写代码的情况下使用Cursor的人来说，这是一个非常棒的节目。我相信您会学到很多。让我们开始吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Welcome back to how I AI. I'm Clarvo, product leader and AI obsessive here on a mission to help you build better with these new tools. Today we have a fun conversation with Dennis Yang, principal product manager for Generative AI at Chime. Now, this one makes me sweat a little bit because I thought I was the alpha AI powered PM and Dennis shows me his workflows which are way beyond anything I've seen before. He's going to show you how to use cursor to not only write your PRDs, but push them into Confluence or notion, read comments, reply to comments, prototype AI tools, and more. This is a awesome one for anyone out there who's curious if you can make use of cursor without writing code. And I think you're going to learn a lot. Let's get to it.</p>
</details>

AI应该让工作变得更轻松，但我曾经历过数周的设置、与工程团队无休止的来回沟通，结果团队却从未真正采用另一个工具。这就是为什么我使用**Zapier**（一款自动化平台）的AI编排平台。它连接了近8000个应用程序，因此我终于可以在没有戏剧性、没有延迟、无需每次自动化某些事情都拉上工程团队的情况下，让AI投入工作。有了Zapier，您可以在几天而不是几周内，在整个公司推出AI驱动的工作流程，完成实际工作。我每天都使用Zapier。它会自动回复带有丰富个性化数据的潜在客户。它每周检查我的日历，并提供更智能的时间管理方式。它甚至为我收件箱中的每一个新请求起草电子邮件。所有这些都在后台悄无声息地运行，这样我就可以专注于重要的工作。Zapier专为规模化而设计，具有企业级的安全性、合规性和治理。它受到**Dropbox**、**Airbnb**、**Open Door**等数千家团队的信任。访问try.zapier.com/howi，了解Zapier如何为您的整个组织带来AI编排的力量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI is supposed to make work easier, but I've been there. weeks of setup, endless back and forth with engineering, and yet another tool the team never really adopts. That's why I use Zapier's AI orchestration platform. It connects with nearly 8,000 apps so I can finally put AI to work without the drama, without the delays, and without pulling engineering in every time I want to automate something. With Zapier, you can roll out AI powered workflows that do real work across your whole company in days, not weeks. I use Zapier every single day. It automatically responds to leads with enriched personalized data. It checks my calendar weekly and offers smarter ways to manage my time. And it even drafts emails for every new request that lands in my inbox. All of that running quietly in the background so I can focus on the work that matters. And Zapier's built for scale with enterprisegrade security, compliance, and governance. It's trusted by teams at Dropbox, Airbnb, Open Door, and thousands more. Go to try.zapier.com/howi. zapier.com/howi to learn more about how Zapier can bring the power of AI orchestration to your entire org.</p>
</details>

Dennis，感谢您加入“How I AI”。我非常期待这一集，因为我们已经看到很多人使用像Cursor这样的工具来编写代码，但我们实际上还没有看到任何人仅仅使用Cursor来写作。而这正是您作为一名产品经理和一位时刻思考战略的人正在做的事情。那么，在我们深入探讨之前，为什么选择Cursor？为什么选择写作？至少对于我们即将看到的这个用例，您在这里没有编写任何一行代码。那么，您是如何进入这种由AI驱动的**IDE**（Integrated Development Environment：集成开发环境）工作流程的呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Dennis, thanks for joining how I AI. I am really excited about this episode because we've seen so many people use tools like cursor to write code, but we actually haven't seen anybody yet just using cursor to write. And that's what you're doing. um as as a product manager and somebody who's thinking about strategy all the time. So before we dive in, why cursor? Why writing? You're not writing a lick of code in here for at least this use case that we're going to see. So how did you kind of get into this flow with this AI powered IDE?</p>
</details>

**Dennis Yang**：对我来说，Cursor之所以成为我最喜欢的AI用户界面，有几个原因。它能访问我所有想尝试的**模型**（models）。所以你知道，在Cursor中你可以与**Claude**、**GPT-5**、**DeepSeek**等任何模型对话，这是第一点。第二点是它能访问文件系统，所以它可以把东西写下来。第三点是它能访问Cursor规则，随着你使用得越来越多，你可以开始告诉它你希望它如何做事。最后一个重要的事情是它的互操作性，它实际上可以与我需要使用的所有不同工具协同工作，通过**MCP**（Multi-Contextual Programming：多上下文编程）它可以与**Jira**（一款项目管理工具）、Notion和Confluence对话，还可以查看**Figma**（一款设计协作工具）等所有这些东西。所以它基本上不仅拥有AI的用户界面，还拥有所有关键的接口、交互和连接，这些对于我的日常产品管理工作至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To me, cursor, the reason why cursor is my favorite UI for the AI is a few things. It has access to all of the models that I want to try. So you know incursor you can talk to cloud you can talk to GP5 you can do deepseeer whatever um that's the first thing and then the second thing is it has access to a file system so it can write things down um and then it can have access to cursor rules which you as you use it more and more you can start to tell it how you want to do things and then the final big thing is interop it actually works with all of the different tools that I need to work with so that's through MCP it can talk to Jura and notion and Confluence um you know look at Figma all these things. So it basically not only does it have the AI the UI for the AI it has all the interfaces and interactions um and connections into the tools that are critical for my daily product management</p>
</details>

主持人：你知道，我想说的另一件事是，在桌面上运行就是快，你知道，它做这些事情的速度非常快，而不是……我认为我们正处于一个真正的时刻，将出现一个问题：我们是否会看到越来越多用于这些AI驱动工具的桌面应用程序，仅仅是因为性能方面的原因，与网络相比，网络非常灵活，但我喜欢Cursor，因为它速度很快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know and the other thing that I would say is running on the desktop is just fast you know it's like pretty fast at doing those things as opposed you know I think we're in this real moment where there's going to be a question of are we going to start seeing more and more desktop apps for these AI powered tools just because of the performance side of things compared to Web Web is very flexible, but I I like cursor cuz it is it's zippy.</p>
</details>

所以，这是您完成工作的新中心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is this is your new hub for getting work done.</p>
</details>

**Dennis Yang**：这就是我的屏幕的样子。我注意到的另一件事是，我想要越来越大的屏幕，对吗？我快没有空间了，因为我想要我的聊天窗口，我想要我正在处理的**工件**（artifact），然后我想要文件系统。然后在这里，我实际上有我的设置面板停靠在底部，因为你要确保它仍然是绿色的，对吗？所以我需要更多的屏幕空间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is what my screen looks like. And that's the other thing I'm noticing is that I want bigger and bigger screens, right? I'm running out of space because I want my chat, right? I want my the thing that the artifact that I'm working on and then I want the file system. And then over here, I actually have the this is my my settings pane uh docked to the bottom cuz you want to make sure that it's still green, right? So I I need more screen real estate. Uh and then</p>
</details>

### Cursor的工作区配置与MCPs

主持人：是的，我们最近邀请了Cursor的Lee，他向我们介绍了Cursor的三面板模型，对于那些只听不看的人来说。您的文件系统在左侧，您可以在其中查看可以处理的文件或在Cursor上下文中的文件。中间是您的工件，无论是代码工件还是内容工件。右侧通常是您的聊天窗口。然后我想提醒大家的是，您还可以拉起底部面板，我本来想说作为一名开发者，那个面板对我来说总是终端。但这确实是一个很好的生活质量小技巧，我将开始使用。Cursor中的底部面板实际上是Cursor的工具设置。所以您可以随时打开和关闭MCPs，我确实经常这样做，并确认它们正在工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah, we had Lee from Cursor on recently and he walked us through the three pane kind of model of Cursor for those who are listening and not watching. You have your file system on the left where you're looking at what files you can work with or in context of cursor. In the middle you have your artifacts, whether those are code um code artifacts or content artifacts. On the right you tend to have your chat. And then something I want to call out for for people is you also have this bottom pane you can pull up and you non I was going to say me as a developer that pain for me is always the terminal. Uh but this is a really nice little quality of life hack that I'm going to start to use. your bottom pane in cursor is actually the tools cursor settings. So you can turn on and off MCPS which I actually do all the time and confirm that they're working.</p>
</details>

**Dennis Yang**：是的，没错。所以有时Cursor会说“我做不到那件事”，然后你一看，会有一个小红点，你得把它重新打开。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, exactly. So sometimes cursor will be like I can't do that thing and you look and there's like a little red dot and you got to turn it back on. So yeah.</p>
</details>

主持人：好吧，你知道吗？在我们深入探讨之前，既然我很好奇并盯着你的屏幕，你介意分享一下你通常开启了哪些MCPs吗？然后我们将介绍你每天真正使用的一些，或者至少在这个工作流程中使用的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, you know what? Before we dive in, now that I'm curious and staring at your screen, would you mind sharing what what MCPs just generally you have turned on and then we'll go through the few that you know you you really use on a daily basis or at least in this workflow.</p>
</details>

**Dennis Yang**：当然，当然。我有一个MCP，我有两个与**Atlassian**（一家软件公司，提供Jira和Confluence等产品）套件对话的MCP。其中一个是我们的Jira MCP。这是在Atlassian推出他们的官方第一方MCP服务器之前。这是另一个我可以在本地运行的。Notion当然可以与我的Notion对话。如果你运行Figma，Figma也可以与Figma对话。然后**GitHub**（一个基于Git的代码托管平台）直接对话。然后这两个MCPs，我实际上会谈论它们。我将谈论**News API**（一个新闻搜索API），这是一个我编写的用于与News API对话的MCP。它只是一个搜索新闻文章的API。然后**SEM Rush**（一款搜索引擎营销工具）也是我组装的一个**SEM**（Search Engine Marketing：搜索引擎营销）MCP。我使用Cursor编写MCP，然后你实际上可以使用Cursor将MCP安装到它自己身上，我也很喜欢这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sure. Sure. So I have MCP and I have two uh that talk to Atlassian suite. So one is our Dur MCP. This is before Atlassian launched their MCP um official server um first party server. This is um another one that I can just run locally. Notion of course it talks in my notion. Figma talks to Figma if you have Figma running. Uh and then GitHub talks directly. Uh and then these two uh MCPs are I'm actually going to talk about them. I'll talk about news API which is an MCP I wrote to talk to news API. It's just an API that searches um news articles. Um and then SEM Rush is like an SEM a search engine marketing MCP that I put together as well. um using cursor to write the MCP and then you actually can use cursor to install the MCP onto itself which I love too</p>
</details>

主持人：正如我们所说，**AI无处不在**（AI all the way down），太棒了。那么，您已经加载了Cursor，并将其设置为编写文档，您认为还有哪些值得向不编写代码的用户推荐的Cursor设置步骤吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI all the way down as we say amazing okay so so you've loaded up cursor you have it set up to write documents are there any other kind of cursor setup steps that you've done that you think are worth calling out for folks that are using it not to code</p>
</details>

**Dennis Yang**：是的，我认为一个重要的事情是，当你越来越多地使用，不仅仅是Cursor，而是**LLM**（Large Language Model：大型语言模型）时，它普遍喜欢Markdown，对吧？所以我开始越来越多地用Markdown思考，所以我实际上整天都在看这样的东西，用Markdown写作，然后预览Markdown非常重要，以查看它看起来如何，因为这实际上很难理解，对吧？所以，这里有一个很好的Cursor设置，我想是的，预览Markdown预览是一个你可以在设置中找到的设置。所以你按Command + 逗号，Markdown预览，然后在这里你基本上想要自动预览Markdown，我在这里使用的扩展程序，如果你去设置-扩展程序，它叫做“Markdown Preview Enhanced”，这是我非常喜欢的一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah I I think one one big thing is as you're sort of working more and more not just cursor but just LLM's a in general loves markdown right so like I'm starting to think in more and more in markdown so I'm actually looking at something like this all day and writing in you know looking at markdown and then previewing markdown is really important to see if what it looks like because because this is actually hard to to gro right so um so one of the good good cursor settings here is I think it's yeah preview pre mark markdown preview is a setting that you can actually find inside um inside settings. So you do command comma markdown preview um and then here you basically want to you know automatically pre preview markdown and the extension that I'm using here if you go to settings extensions is called markdown oh there it is markdown preview enhanced so that's one I really like</p>
</details>

这个扩展程序在你点击时会自动在预览面板中显示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and this one will actually automatically um show in the preview pane when you click on it</p>
</details>

主持人：太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">amazing</p>
</details>

**Dennis Yang**：我非常喜欢它，因为它以前你需要知道一个秘密代码，比如Command + Shift + V来打开预览，但现在你只需点击一个Markdown文件，它就会自动弹出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">which I absolutely of because it used to be that you had to you have to you had to know this secret code which is like command shiftv to open up the the preview but now you can just click on a markdown thing and it pops in automatically.</p>
</details>

主持人：是的，我只是想为那些我知道所有人都喜欢Markdown的人提一下。现在确实是Markdown之年。而且Markdown可以以一种很好的方式呈现。你不必看一堆哈希标题和格式奇怪的表格内容。所以，无论是通过安装一个扩展程序，还是使用那个神奇的组合键，你都可以在Cursor视图中获得格式精美的Markdown。那么，我们已经完成了设置。我们已经讨论了扩展程序、Cursor、您的个人设置、您的MCPs。现在让我们真正了解您如何将Cursor作为工作流程的中心。您作为产品经理如何端到端地实现某些目标，使用Cursor和您连接的这些工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I just want to call this call this out for folks who I know everybody everybody loves markdown now. It is the year of markdown for sure and um markdown can be rendered in a nice in a nice way. you don't have to look at a bunch of um hash headers and weirdly formatted table content. So either by installing an extension here or using that magic uh key combo there you can get nicely formatted uh markdown right here in your cursor view. So, okay, we've done we've done the setup. We've talked about extensions, cursors, your PES, your MCPS. Let's actually get into how you use cursor as a hub for workflow. How you would achieve something as a product manager sort of end to end using cursor and these tools you've attached.</p>
</details>

### PRD创建、发布与Git版本控制

**Dennis Yang**：我认为**LLM**（Large Language Model：大型语言模型）和AI在撰写PRD方面表现出色，这一点已经得到了很好的证实。所以您应该以任何您想要的方式创建PRD，无论是使用**ChatGPT**（一款大型语言模型）、Claude还是Chat PRD，对吧？对我来说，现在我设置了所有Cursor，我大部分写作都是直接在Cursor中完成的，它在Markdown中工作，我可以在这里预览。但在Chime，我们实际上并不是一个单人公司。我认为我真正想强调的一点是，你之所以想要与所有这些其他系统（不仅仅是你的AI）进行交互，是因为你的公司里通常有其他人需要与你合作。所以，在Chime，我们有一个惯例，当PRD处于早期草稿形式时，我们会将它们分享到我们的PR草稿频道，然后收集大量的评论。所以，我在Cursor内部工作，在这里制作我的PR。如果它处于早期阶段，我不想收到一些评论，我会把它扔到PRD草稿频道。我确实使用Git来控制所有内容的**版本控制**（source control）。但Git对于整个公司进入并发表评论来说并不理想。所以我实际上使用Confluence MCP将内容发布到Notion和Confluence中。因为有些人喜欢使用Notion，有些人喜欢使用Confluence。所以我们在这里，这是完全相同的PRD被推送到Confluence中。我昨晚把它推送到这里，并把它扔到我们的评论频道，现在已经开始收到评论了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's been well established that uh LLM's AI is really good for writing PR. So you should be doing your PRD creation in whatever flow um that you want, you know, be it chat GPT or cloud or or chat PRD, right? So um and for me, I actually do a lot of my writing now that I have this all cursor set up, I I do it directly in cursor and it's working on, you know, in markdown technically and I can preview it here. But here at Chime, we actually, you know, it's not a single player company. Um, and I think that's one thing that I really want to be pushing on here is that the reason why you want to be interacting with all these other systems across, you know, not just your AI is that there are other people usually in your company that you want to be working with. So, um, we have a a ritual here at Chime, which is when PRDs are an early draft form, um, we'll share them out into our PR draft channel and then gather tons of comments. So, I work inside Cursor. I'm making my PR here. If it's in a it's in an early stage, I don't want some comments. I'll throw it into the PRD draft channel. Um I do use git to control to source control everything. But Git is not great for you know the whole company to go into and make comments. So um I actually use the um the Confluence MCP to publish both into notion and into Confluence. Um because some people love using notion, some people love using Confluence. Um so then we have let's see here. So we have here's this exact purity pushed into uh Confluence. Um I pushed it into this uh last night and and threw it into our our comments channel and already starting to get comments.</p>
</details>

主持人：嗯，我想在我们深入探讨这个MCP实际如何工作之前，快速指出一点，因为我认为人们都喜欢看到它。第一，我们谈到您使用IDE作为您的文本编辑器，这非常有趣。您不是直接在Confluence或**Google Docs**（一款在线文档编辑工具）或任何地方写作。您是在IDE中用Markdown写作，并带有漂亮的预览。您指出的第二点，我很好奇您的想法，是关于Git和非代码资产或非显式代码资产的版本控制。我认为我们正处于一个非常有趣的阶段，因为这些基本功能是在软件工程的背景下构建的，所以您会在这些工具中看到Markdown、Git提交、变更跟踪等概念，而这些工具过去都是以软件工程为中心的。是的。我很好奇，作为产品人员，我们能否弥合这个鸿沟？您认为会有像“PM的Git”这样的东西吗？或者您认为我们仍然觉得抽象层次太高，无法实用，并且需要一些您在这些更经典的生产力工具中看到的**用户体验**（UX）优化？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, what I want to what I want to call out really quickly before we go into maybe how this how this MCP actually works because I think people just like to see it is one, you know, we we talked about you using an IDE as basically your text editor, which is really interesting. You're not writing directly in Confluence or Google Docs or anything. You're writing in an IDE in Markdown with a nice preview. The second thing you call out that I'm curious your thoughts on is Git and source control for non-code assets or non-explicitly code assets. I think we're at this really interesting place where because these primitives are being built in the context of software engineering, you're getting these concepts of markdown, get commits, like change tracking in these tools that used to be very software engineering centric. Yes. And I'm curious just like let's take a minute as a as product people do you think we're going to bridge that gap? Do you think there's going to be like git for well maybe I should build it but like git for PMs or do you think we're still little like the abstraction is too high um for it to be useful and you need some of that UX polish that you're seeing in some of these more classic productivity tools.</p>
</details>

**Dennis Yang**：我对此有很多想法。嗯，当我们创建这些为我们正在构建的产品提供信息的工件时，传统上，这些工件今天都位于代码库之外，对吧？所以这个PRD就位于Confluence中。但是现在我意识到，既然我正在使用Cursor并使用Git来对这个工件进行版本控制，它实际上现在就位于这个工件目录中。我正在想的是，如果我想开始看看这些工件是否真的位于正在开发代码的**仓库**（repo）中。这种邻近性实际上鼓励了工程师和AI编码助手持续访问它。他们不需要给它一个Confluence的MCP。这就是**真相来源**（source of truth）。所以你可以阅读它，当事情发生时。所以PRD通常是某个时间点的快照，说明我们当时认为事情应该是什么样子。在开发中，我们不断学习、迭代、学习、迭代。但是我们很少回到PRD去编辑它。那么，如果我设置一个Cursor规则，说：“嘿，如果我正在处理这个功能，并且在处理过程中我正在了解这个功能，请记住用你对这个功能的最新想法来更新PRD。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have a lot of thoughts about this. Um so as we're sort of creating these artifacts that inform the product that we're building traditionally today these artifacts sit outside of the code base right so this prd is sitting inside confluence right here um but now what I'm realizing is since I'm using cursor and using git to source control this artifact it's actually now sitting inside this artifacts directory and what I'm wondering is that if I think I want to start to See if the artifacts are actually sitting inside the repo into which the code is being developed. That adjacency actually encourages the engineers and the AI coding assistant. Yep. To continually have access to this. They don't you don't have to give it an MCP to confluence. This is the source of truth. Um so you can read it and when things happen. So PRDS are typically a snapshot in time of this is what we thought the thing should be at this moment. Um, in development, we constantly learn and iterate and learn and iterate. Um, but rarely do we go back to the PR to edit it. So, what if I put a cursor rule in that says, "Hey, if I'm working on this feature and it and I'm learning things about the feature as I'm working on it, remember to update the PRD with the latest of how you're thinking about this."</p>
</details>

这就是Chat PRD仓库的工作方式。所以我们有……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's that's how the chat PRD repo works. So, we have</p>
</details>

主持人：太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">amazing.</p>
</details>

**Dennis Yang**：我们的Chat PRD仓库中有一个文档目录。它结合了产品文档和工程文档。甚至待办事项，我们甚至将一些任务跟踪拉入仓库，因为这样每个人都可以处理它，无论是AI还是我们的人类工程师。所以我们实际上已经将我们所有的文档、PRD、技术文档和面向用户的支持文档都移入了仓库，因为你知道，当我在处理产品时，我90%的时间都在直接处理代码，而代码需要文档的上下文，文档也需要代码的上下文。所以我认为看到这些真相来源的内容将位于何处会非常有趣。我的意思是，另一件有趣的事情是，因为你正在使用像Cursor这样的MCP客户端，你只需将Confluence的链接放在那里，然后它就可以调用MCP并在另一个真相来源中查找它。所以谁知道所有这些数据将积累在哪里。将会有一场企业软件真相来源平台之战，但我确实认为有很多灵活性和选择性，而且我确实相信，就像你说的，代码和文档将越来越多地生活在同一个地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have a we have a docs um directory inside our sort of like repo for chat pd. It has a combination of product documentation and engineering documentation listed there. Um even to-dos like we've even pulled some of the like just task tracking into into the repo because then you know everybody can work on it AI or our human engineers. And so we've actually moved um all of our all of our documentation PRDS technical documentation and userfacing support docs into the repo because you know when I'm working on the product I'm 90% of the time just working directly in in in the code and the code needs the context of the documentation. the documentation needs the context of the code. And so I think it'll just be really interesting to see where these source of truth content pieces lie. I mean the other thing that's kind of interesting is because you're in like a cursor or something that is a um MCP client, you could just put the link to confluence in there and then right it could call the MCP and look it up on this other source of truth. So you know who knows where all this data will acrue. there will be battle of the enterprise software source of truth um platforms but I just I do think there's a lot of flexibility and optionality and I do really believe just like you said code and documentation are going to start living in the same place more and more</p>
</details>

### AI驱动的评论管理与Jira任务创建

**Dennis Yang**：没错，这又让我想到了另一件事，我真正意识到，在未来，最有用的解决方案将把互操作性作为关键要素之一，对吧？所以任何感觉会锁定内容或数据的系统，我都不倾向于使用，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">exactly and then that brings me to another thing that I'm really realizing is in this future the most useful solutions will have interoperability as one of the key things right so any system that if it feels like it's locking that contents or data away. I'm not going to prefer to use that system, right? Yeah.</p>
</details>

主持人：就像我不在乎你为什么会有这些模式。我相信有很好的理由。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like I don't care what why you have these modes. I'm sure there's a good reason,</p>
</details>

**Dennis Yang**：但那是我的内容。而且我希望我的所有系统都能在需要时访问它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but that's my content. Like, and I want all my systems to be able to access it when it needs to.</p>
</details>

主持人：所以，我认为这会变得越来越重要。有趣的是，您从事产品管理和**B2B**（Business-to-Business：企业对企业）领域已经很长时间了，我们过去在B2B领域总是说，您最大的竞争对手是像**Excel**（一款电子表格软件）或**Google Sheets**（一款在线电子表格工具）这样的电子表格。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so I think that's going to be increasingly more important. Well, and what's really interesting is, you know, you've you've been in product management for a long time and B2B and we used to always say in B2B like your number one competition is like an Excel spreadsheet or a Google sheet</p>
</details>

**Dennis Yang**：完全正确。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">completely.</p>
</details>

主持人：现在，您最大的竞争对手是像版本控制的Markdown文件。如果您作为**SaaS**（Software as a Service：软件即服务）产品无法超越版本控制的Markdown文件，那么您就没有增加足够的价值。所以我认为这会非常有趣。好的。向我们的听众道歉。这里有两位产品人员。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now like your number one competition is like a source controlled markdown file. Like if you cannot outperform the source controlled markdown file as a a as a SAS offering, then you're not adding enough value. So I think it's going to be really interesting. Okay. Apologies to</p>
</details>

**Dennis Yang**：我对SaaS的未来有很多想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">to our audience. You got two product people in here just I have a lot of thoughts about where SAS is going.</p>
</details>

主持人：让我们回到工作流程。所以您在Cursor中制作PRD。您使用MCP，对于那些以前没有使用过MCP的人来说，展示如何简单地做这样的事情会非常有帮助。所以假设您想将这个PRD推送到Notion或Confluence。您能向那些从未见过的人展示它是如何工作的吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's get back to the workflow. So you're making your PRDS in cursor. You use the MCP and it would be just really helpful for people you know who haven't used an MCP before just to show how simple it is to do something like this. So let's say you wanted to push this PRD into notion or into Confluence. Can you show us how that how that works for people who's never seen it before?</p>
</details>

**Dennis Yang**：好的。这个PRD看起来很棒。实际上，我需要告诉它……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right. So this this BRD looks great. Actually this I need to tell</p>
</details>

主持人：看那个感叹号。你真有礼貌。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Look at that exclamation mark. You're so polite.</p>
</details>

**Dennis Yang**：所以我们把它发布到Confluence。我已经推送了。所以我将告诉它...

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's publish um it into Confluence. Uh and I already pushed it. So I'm going to tell it into</p>
</details>

主持人：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Dennis Yang**：不要覆盖另一个。我们已经推送了，请复制一份。我正在演示这个功能。好的。我们正在演示这个功能。所以这基本上就是全部，很简单。所以你总是想看看你的MCP服务器是否是绿色的。它正在规划它的行动。然后基本上就是这样。它只是在运行。它知道它所有的工具。如果你还没有看过MCP是如何设置的，如果你点击“启用的工具”，你可以将鼠标悬停在每一个工具上，你可以了解每一个工具是如何工作的，或者它们是做什么的。对我来说，当我在向人们展示这里的MCP描述时，你开始形成一个关于你给AI提供了哪些工具以及它能做什么的心理模型，以及如何请求它。所以另一件事不仅是如何从你的MCP请求东西。所以真正理解工具的命名，但另一件事是查看你的所有工具。我将告诉大家一个有点痛苦的问题，我遇到了很多SaaS项目或SaaS产品都有叫做“项目”或“文件”或“文档”的东西。当我我说“更新项目”时，它会问：“你想让我更新Confluence空间吗？你想让我更新Chat PRD项目吗？”所以我认为这种在工作上下文中打开和关闭工具的能力有助于它缩小到你想要完成的任务。所以这是从Claire那里学到的一点教训，以及命名不佳，也许不是具体命名的MCPs。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Don't overwrite the other one. We already pushed make a copy, please. And um I'm demoing this capability. All right. So we are demonstrating this capability. So this is basically all it's easy. So you always always want to look to see that your MCP server is green. It's planning it's planning its moves out. And then basically it just this is it. Like it's just running. Um it knows all of its tools. One thing, if you haven't seen how MCPS are set up, if you click on tools enabled, you can you can mouse over each one of these and you can get an understanding for how each of these tools works or what they do. Um, and for me, just when I show people the MCP descriptions here, you start to form a mental model on what tools you've given your AI. Yeah. And what it could do to and and how to ask for it. And so the other thing is not only how to ask for things from your MCP. So really understanding the naming of the tools, but the other thing is to look across your tools. And I'll tell you all a little painful um issue that I ran into is a lot of SAS projects or SAS products have things called projects or files or docs. And when I say update the project, it's like do you want me to update the Confluence space? Do you want me to update the chat PRD project? And so I think this ability to toggle on and off tools in the context of what you're working helps it just narrow in on what task you want to do. So a little lesson learned from Claire and um named poorly named maybe not inspecifically named MCPs.</p>
</details>

主持人：没错。当前的MCP服务器似乎有问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly. The current MCP server seems to be having issues.</p>
</details>

**Dennis Yang**：这就是我们现场演示的代价。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is what we get for doing it live.</p>
</details>

主持人：是的。那么，这就是你们所有人，你知道，这就是“How I AI”的经验。有几件事。我认为MCPs对于那些还没有设置第一个MCP的人来说是非常不透明的。要设置一个，你通常会得到一个URL，至少在托管的MCP上。你将几行配置粘贴到Cursor或你的客户端中。它会像你登录其他应用程序一样提示你登录应用程序，或者输入一个API令牌。然后这应该会给你访问权限。然后你就可以做我们现在看到Dennis正在做的事情。嗯，如果你想知道这个高度稳定的技术和平台的状况，那就是你反复开关这个按钮，直到它变成绿色。所以，我们姑且相信它，说它真正会发生的是它会调用这些工具。其中一个工具会说将一个Confluence文档推送到一个空间，然后它就会出现在你的Confluence空间中，就像你已经证明的那样。这就是对话的流程。它应该看起来像这样。你说将这个PRD发布到Confluence，它就会有效地编写它，对吧？所以当MCP正常工作时，然后在我自己的PRD中，我实际上有一个地方可以放置它自己发布的URL，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Well, and and here's here's the thing that you all, you know, here's the learning how AI. A couple things. I think MCPS are really opaque to people who have not set up their first one. To set one up, you're usually given, at least on a hosted MCP, a URL. You paste a couple lines of config into cursor or whatever your client is. It'll like boop you to log in to the app just like you would sort of oth another app or put in an API token. And then that should give you access to it. And then you do exactly what we're watching Dennis do right now. Um, if you all want to know the state of this highly stable technology and platform, which is you toggle this button on and off over and over again till it turns green. So, we're going to give you the benefit of the doubt and say what what really is going to happen is it's going to call these tools. One of these tools is going to say push a Confluence document to a space and then that's going to show up in your confluence space as you proven it has. This is the thread of conversation. This is what it should look like. You say publish this PRD into Confluence and it effectively writes it, right?</p>
</details>

**Dennis Yang**：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when the MCP works properly um and then in my PRD itself, I actually have a place where it can put its own published URL, right? Yep.</p>
</details>

主持人：嗯，所以这就是它发布后的样子。一旦底层管道正常工作，它确实就是这么简单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so this is what it should should look like uh once you've published it. It really is this easy once the the underlying plumbing is working properly. Um,</p>
</details>

**Dennis Yang**：是的，我认为这值得指出，这些MCPs不仅仅是单向的。所以你再次展示了，嘿，我可以把我Cursor中的内容推送到Confluence，但你实际上可以把上下文**往返**（round trip）回到你在Cursor中正在处理的内容，然后说，好的，把那个页面的URL添加到我的文档中，并更新所有内容。所以，这只是一个非常好的新用户界面。以前这必须是按钮和复杂的API映射，现在你有了这个语言模型，它可以根据非常高层次的上下文为你找出所有这些参数，为你完成工作，在问题上进行自我修复，并与其他工具进行交互。所以我认为这是一个非常好的流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah, I do think that's worth calling out, which is it's not just one way with these MCPs. So, you again showed, hey, I can take this content that I have in cursor, I can push it to Confluence, but then you can actually do that round trip of context back into what you're working on in cursor and say, great, add the URL to that uh page in in my doc and update everything. And so, it's just a very nice new user interface. This used to have to be buttons and complex API mappings and now you have this you know language model that can figure out all these parameters for you based on very high level context do the work for you kind of self-heal on issues and go back and interface with other tools as well. So I think it's a really nice flow.</p>
</details>

那么，除了创建PRD并将其推送到Notion和/或Confluence之外，您还在用这些MCPs做什么，比如在项目管理、项目工作流程协作方面？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So other than kind of creating PRDs and pushing them into notion and or confluence and how how product managery of you that they have to go both places both great tools. Yeah. Um you what else are you doing with with these MCPs in terms of like project management, project workflow collaboration?</p>
</details>

**Dennis Yang**：你知道，我们喜欢在公司内部分享我们的PR，看看有哪些评论。这是我正在收集评论的线程，就像我说的，看起来人们一直在对PRD发表评论，请逐一查看评论，看看我们如何回应。所以MCP实际上所做的是它会阅读PR，它会看到确切的评论。所以我的意思是，我可以用自己的眼睛阅读评论并在这里的Confluence中回复它们，但这没什么乐趣。所以我们会让Cursor阅读评论，然后它实际上会进行分解。这让我觉得非常滑稽。它将评论组织成高优先级、中优先级，然后是其他不同类型的澄清，然后实际上编写了建议的回复。其中很多听起来都不错。所以我开始说：“是的，那个可以。你可以回复那个。”由于MCP是以Dennis（也就是我）的身份进行身份验证的，所以我的Chime的其他产品经理会觉得是我在回复他们的评论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know we love to share our PRs across um the company to see what comments. Uh this is the thread where I'm now gathering like I said looks looks like people have been commenting on the PRD please go through the comment one by one and let's see how we'll respond. So what what the MCP actually does is it reads the PR it sees the exact comments. So I mean I I could use my own eyes and read the comments myself and respond to them here in Confluence but that's no fun. Um so we'll have cursor read the comments and then it actually does a breakdown. This is this I found quite hilarious. Um it it organized the comments into high priority, medium priority, and then um other different types of clarifications and then actually wrote suggested responses. Um a lot of which sounded decent. So I started saying like, "Yep, that one's okay. Um you can respond to that one." And since the MCP is authenticated as Dennis as me, it appears to my other product managers at Chime that I am responding um to to their comments to their comments. Yeah.</p>
</details>

主持人：好的。所以这真是幕后操作。我以前从未见过这种操作，这是来自一个对AI生成的PRD思考了很多的人的发言。所以为了那些没有观看的人澄清一下，Dennis用AI编写他的PRD。他用AI将它们推送到Notion或Confluence。是的。然后他等了一会儿，用AI阅读评论。AI生成回复。然后您审核它们，然后您批准或不批准，然后它们就会以您的名义发布。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So this is this is true behind the veil behind the veil stuff. I have not seen this before and this is spoken from somebody who has thought a lot about AI generated PRDS. So just to clarify for people who are not watching, Dennis Dennis writes his PRDS in AI. He pushes them into notion or to confluence with AI. Yes. He then waits a little bit, reads the comments with AI. AI generates comments back and you review them and you either approve or not and then they get posted as you.</p>
</details>

**Dennis Yang**：没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right. So here's</p>
</details>

主持人：我喜欢这个。我喜欢它。是的，这正是流程。而且我参与其中，对吧？构建AI的关键之一是，你希望在适当的时候介入人类，让他们发挥最大的价值，对吧？所以，收集评论，这不是增值，但阅读它们并理解它们并回应，我可以提供观点。是的，这真的很有趣，因为我确实觉得人们非常擅长创建资产并将其推送到另一个系统中的“推送”部分，但我还没有看到有人在下一步中完成闭环并向前迭代。我还认为这表明你是一个忙碌的人，老实说，人们的评论需要你思考它们并同意或不同意某个回复，但你不必用你的手指敲打每一个回复，你还可以优先处理你想关注的事情，我认为这也非常非常有价值。嗯，没错。我的意思是，无情的优先级排序就是优秀产品管理的全部。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I love this. I love it. Yes, that's exactly the flow. Um, and I am I'm in the loop, right? Like one of the key things about building with AI is that you want to insert the human at the appropriate point um where they make a lot they're they're adding the most value, right? So, gathering the comments, that's not value ad, but reading them and understanding them and responding like I can provide perspective there. Um, yeah, this is this is really interesting because I do feel like um people are really good at that push part of creating an asset and pushing it into another system, but I haven't seen somebody sort of close the loop on the next step and and iterate forward. I also think this shows that you know you you're a busy person and honestly people's you know the the comments need you to think about them and agree with a response or not but you don't have to type with your human fingers every single response and you can also prioritize what you want to focus on and I think that's really really valuable as well. Um, exactly. I mean, ruthless prioritization is what good product management is all about. Right.</p>
</details>

这一集由**Brex**（一家金融科技公司）赞助。如果您正在收听此节目，您已经知道AI正在以实际有效的方式改变我们的工作方式。Brex正在将同样的力量带入金融领域。Brex是为创始人打造的智能金融平台。通过在后台运行的自主代理，您的金融堆栈基本上可以自行运行。卡片发行、费用归档和欺诈实时阻止，无需您考虑。加上Brex的银行解决方案和高收益国库账户，您就拥有了一个系统，可以帮助您更智能地消费、更快地行动并自信地扩展。美国三分之一的初创公司已经在Brex上运行。您也可以在brex.com/howi上做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I love it. This episode is brought to you by Brex. If you're listening to this show, you already know AI is changing how we work in real practical ways. Brex is bringing that same power to finance. B is the intelligent finance platform built for founders. With autonomous agents running in the background, your finance stack basically runs itself. Cards are issued, expenses are filed, and fraud is stopped in real time without you having to think about it. Add Brex's banking solution with a high yield treasury account, and you've got a system that helps you spend smarter, move faster, and scale with confidence. One in three startups in the US already runs on Brex. You can too at brex.com/howi aai.</p>
</details>

好的。那么接下来是什么？在您收集了评论之后，您的PR很棒，您的所有同事都喜欢您创建并评论的PR。嗯，通常工作流程的下一步是将其**票证化**（ticket out）到Jira中，对吧？所以，阅读PRD并在**TIA项目**中创建一个**Epic**（史诗：在Jira中，指代一个大型的工作主题）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. So, what's next? After you're gathering comments, your PR is great, you're all of all of your compatriots are loving the PR that you've created and commented on. Um, typically the next step in a workflow is to ticket this out into Jira, right? So, uh, read the PRD and create an epic in the TIA project. Mhm.</p>
</details>

**Dennis Yang**：所以我创建了一个任务自动化，这是我们将要使用的Jira项目。确保它是绿色的，然后我们再次观察它工作。所以，我真正喜欢这一点的是，当我正确地做这件事时，它会阅读PRD。我不知道我的其他产品经理是怎样的，但当Dennis在Jira中创建任务时，我可能可以做得更好。但当Dennis的Cursor创建任务时，Cursor会阅读我花了很多时间制作的PRD，然后拆分出有效的任务。特别是**故事任务**（story tickets）描述得非常非常好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I created a a task automation is our JR project that we're going to be using. Going to make sure this is green and we'll watch it work now again. So what I really like about this is that when I'm doing this right, it's reading the PRDS. I don't know what all of my other fellow product managers are like, but when Dennis creates tickets in Jira, there's I could probably do a better job. But when Dennis's cursor creates the tickets, cursor Dennis's cursor reads the PRD that I've spent a lot of time doing and then splits the effective tickets. The story tickets in particular are very very well described.</p>
</details>

主持人：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Dennis Yang**：所以我喜欢这种任务创建方式，因为它真正做到了你希望在拥有无限时间时能做到的事情。它是你的文字，你的PRD，你的故事，它将它们放置在它们应该去的地方，也就是实际的故事任务中，然后这些任务会交给工程师。然后他们可以，你知道，你总是可以说阅读PRD，但他们必须阅读整个PRD。所以，让我们创建故事任务。让我们准备好这个，当它准备好时，让我们创建所有与这个功能的父Epic相关联的故事任务。这又是一种对话式流程。在我的个人Cursor产品管理Cursor规则中，我会说“记住总是将故事任务与它们的父Epic关联起来”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I I love doing this style of ticket creation because it really it does what you wish you could do if you had infinite amounts of time. It's your words, it's your PRD, it's your stories, and it's putting them where they should they should go, which is in the actual story tickets that then go to the engineers. Um, and then they can, you know, you can always just say read the PRD, but they have to read the whole PRD. So, let's create story tickets. Let's get this ready and when it's ready that are all, let's create story tickets that are all associated with the parent epic for this feature. And again, this this is sort of a conversational flow. Um, I've I've in my in my personal cursor for product management uh cursor rules, I'll say things like remember to always associate story tickets with their parent epic. Yep.</p>
</details>

主持人：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep.</p>
</details>

**Dennis Yang**：我确实注意到，当我第一次这样做时，如果我没有说“关联”，那么它就会创建孤立的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I did notice that when I was doing this at first and I didn't say associated, then it would just create orphaned tickets.</p>
</details>

主持人：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep.</p>
</details>

**Dennis Yang**：没有关联。所以这就是流程，对吧？它处理了很多我从中得不到太多价值的繁琐工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Without association. So, this is the flow, right? It's it's handling a lot of the busy work, right, of that I don't get a lot of value from doing.</p>
</details>

主持人：嗯，我想回到您刚才说的，这是我所说的那些任务之一，它对产品经理来说是如此的**减负**（toil reducer），让您在为不同受众翻译相同内容时感到认知疲劳。就像那里的产品经理们，我们理解你们。我们知道你们做什么。你们把客户笔记变成PRD，然后您的工程师不想读PRD，所以您制作一个一页纸的摘要，然后这个一页纸的摘要必须变成一封给老板的电子邮件，而给老板的电子邮件需要变成给您**CEO**（Chief Executive Officer：首席执行官）的三点要点，您就这样做所有这些翻译，然后您遇到像Jira任务或支持文档这样的东西，您就会说我在这里再也做不好工作了。我对这项任务的认知兴趣已达到极限。所以您就变得懒惰，您就会做一些像Epic名称和任务名称的事情，然后您在描述中说“链接到PRD”，然后您将这种认知负担推给团队中的另一个人。所以我认为这些行政性的、低增量价值的任务，真的非常适合卸载给Claude或AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, and I want to go back to what you were saying, which is this is this is one of those tasks I say that is such a toil reducer for product managers where you really hit cognitive fatigue on translating the same content for different audiences. And like PMs out there, we feel you. We know what you do. You take your customer notes and you turn them into a PRD and then your engineers don't want to read the PRD so you make a one pager and then the one pager has to turn into an email for your boss and the email for your boss needs to be three bullet points for your CEO and like you just do all this translation and then you get to like Jira tickets or support documentation and you're like I can no longer do a good job here. I have reached the limit of my cognitive interest in this task. And so you get lazy and you like kind of like do the the epic name and the ticket names and then you say link to PRD in the in the description and you push that cognitive load on another person in your team. And so I think one of these tasks that are kind of like administrative low um you know low incremental value is a really good thing to offload something to ch you know to to claude or AI with</p>
</details>

**Dennis Yang**：完全正确。很多这样的家务活，这些工具都非常擅长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">completely um a lot of this like housekeeping rig roll like these tools are so good at um</p>
</details>

### AI驱动的状态报告与个人简报

**Dennis Yang**：那么，正如您所说，产品经理们还经常做什么呢？那就是同样的事情：我们更新状态。那么我如何使用Cursor来更新状态呢？所以这是我们的Epic。让我们假设我是一名工程师，我接手了其中一个任务。我评论并查看任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then what's as you're saying this Like what's another thing that product managers constantly do which is that same exact shape? We update status. Um so how might I use cursor to update status? So here's here's here's our epic. Um let's pretend I'm one of the engineers and I pick up one of these tickets. I comment and look at the and look at the ticket has</p>
</details>

主持人：我知道它在那里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I know it's there</p>
</details>

**Dennis Yang**：它有故事。它有**Gherkin**（一种行为驱动开发工具），它有验收标准。天哪。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">story. It has girkin. It has acceptance criteria. man. Like</p>
</details>

主持人：我构建了一两个代理，在Jira之外的其他几个平台上也做同样的事情，每个人都说：“我得到了一个好任务。我得到了完成的定义。它组织得很好。”所以我告诉你，这比我做得更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I built an agent or two that does this in a couple other platforms than than Jura and it's just like everybody's like h I got a good ticket. I got definition of done. It's organized. So this is a better job than I would do. I'll tell you that.</p>
</details>

**Dennis Yang**：我的意思是，Cursor比我以往任何时候都更像一个优秀的产品经理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean this is cursor is a much better product manager than I ever was. So</p>
</details>

主持人：现在我们要把它完成。所以我们要在这里完成一些任务。再次，状态报告除了使用工具之外，又是什么呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and now we're going to make it done. Right. So we're going to do some a few tickets in here. Uh again once again what is a status report other than using a tool?</p>
</details>

**Dennis Yang**：是的，并完成一项工作。所以，让我们再次，是时候进行状态报告了。让我们撰写一份状态报告，并描述自94年以来或针对这个Epic发生的所有事情。把这个Epic给它。它会做什么呢？它会查看并编写**JQL**（Jira Query Language：Jira查询语言），然后基本上编写一份状态报告，对吧？我这样做已经差不多两个月了，每周我的周状态报告，我有一个很长的Cursor规则，我现在能够反复地做这件事。因为你会注意到一件事，既然我没有告诉它状态报告是什么，它就会自己想出来。这就像一个零上下文的状态报告请求。您可能对您的状态报告有什么想法。所以这里的建议是，您先交互式地做，然后在这个整个过程的最后，您会审查工作，然后给它反馈，让它做得更好，然后您会将其保存为Cursor规则，这就是我的周状态报告。当我们每周这样做时，我们学到的是，由于真相来源在Jira中，所以我的工程师们开始在Jira中更多地评论正在发生的事情，因为他们知道有人在看。嗯，这些文字和上下文被添加到了任务中。即使你有一个Jira任务只是从“进行中”变为“已完成”，并且只有任务标题而没有描述，那也足以说明这件事已经从这个状态变为完成了，对吧？所以它确实改善了沟通。我减少了撰写状态报告的时间，同时提高了向上级和整个组织流通的状态报告内容的质量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. and doing a job. So, let's once again it's time for statists reporting. Let's write a statist report and describe everything that has happened since 94 or for this epic. Give it this epic here. And what it'll do is it will look at it'll write JQL and essentially write a status report, right? And I've been doing this for about almost two months now where every week my weekly status report I have I have a very long cursor rule now um that I'm able to do this sort of repeatedly. Um because one thing that you'll notice is since I didn't give it what a status report was, it's going to just figure it out. This is like a a zero zero context uh status report request. Uh and you likely have some ideas as to what you want from your status report. Um so the recommendation here is you do it interactively first and then at the end this end of this whole process you would review the work and then give it feedback to do it better and then you would save that into a cursor rule of this is my weekly status report right and what we learned when we started doing this on a weekly basis is that since the source of truth was in Jira like my engineers started commenting more in Jira about what was happening because they knew that someone was looking at Right. Um and and those words and and that context was being added to the tickets. And even if you don't even if you have a geo ticket that simply goes from in progress to done and only has a ticket title and nothing in description, that's actually sufficient context to say that this thing went from this to done, right? Um so it's really improving like communication. It's I'm I'm reducing I'm reducing the time I'm spending writing status and at the same time improving the status content that is being circulated both up to leadership and you know across the organization.</p>
</details>

主持人：嗯，我去过您的办公室，所以我知道你们都相处得很愉快，有很多美好的时光。但我也想提醒那些在混合或远程环境中工作的人，组织面临的最大负担之一是同步沟通，比如产品经理催促工程经理或工程师：“这里有什么更新？”嗯，让这些更新进入真相来源，然后以一种非常自然语言的方式进行查询。再次，您不必改变作为产品经理的行为。您仍然可以问：“这里有什么更新？状态如何？”您的生活会更好，但数据的来源更加结构化，可以更加异步，我认为这让人们可以减少上下文切换，减少同步沟通，所有这些都能让我们有更多时间进行创造，所以我认为这是您在这里展示的一个非常有趣的次级效应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, and I've been I've been to to your office so I know you all have lovely and lots of nice time together. But I also want to call out for anybody who's working in the hybrid or remote environment, one of the biggest taxes on organizations is synchronous communication where like a PM is pinging an EM or an engineer being like, what's the update here? And um and sort of like allowing those updates to go into a source of truth and then be queried in a really natural language way. Again, you don't have to change your behavior as a PM. You can still ask, "What's the update here? what's the status your life is better but the source of that data is more structured can be more asynchronous I think allows people to like do less context switching less synchronous you know communication all those things that just give us more time to create so I think that's a really interesting secondary effect of of what you're showing here</p>
</details>

**Dennis Yang**：当然，你知道，即使你正在进行面对面或通过Zoom的状态更新，我们也有所有这些工具来记录、转录、文档化并将所有这些内容放回它应该去的地方，比如把它挂在Jira任务上，然后所有内容都组织好了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">definitely and you know even if you're doing an inerson or over Zoom kind of status update again we have all these tools you know to record transcribe document and put all of this content back into where it should go, like hang it off of the geo ticket and then it's all organized um</p>
</details>

主持人：嗯。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">well</p>
</details>

**Dennis Yang**：为了AI。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">for AI. Yeah.</p>
</details>

主持人：现在你给了我一个想法，也许这是一个混乱的好主意，但我当时想，哦，你知道，作为一个产品经理，你真的必须让人们喜欢你，这是一种技巧，产品经理必须讨人喜欢。我想，哦，天哪，你可以使用Cursor，不，不是Cursor MCP，而是Atlassian MCP，在已完成的Jira任务上留下友好的评论，对吧？比如“谢谢你”。我的意思是，谢谢你。

<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text">And now you've given me like maybe this is like a chaotic good idea, but I was like oh you know as a PM you really got to get people to like you like this is it's one of these things pro tip PM's got to be likable. And I'm like, "Oh man, you could use the cursor or the not the cursor MCP, the Atlassian MCP to like put nice comments on Jira tickets that are done, right?" Like, "Thank you." I mean, thank you.</p>
</details>

**Dennis Yang**：他们会发很多感谢的表情符号。嗯。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They do a lot of they do a lot of thank you emojis. Um, yeah,</p>
</details>

主持人：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah,</p>
</details>

**Dennis Yang**：没错。这是我们必须在公司内部建立的文化结构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right. It's the fabric of culture that we have to establish across</p>
</details>

主持人：是的。这是文化结构，也由商业大型语言模型驱动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. It's the fabric of culture and also just powered by a commercial large language model.</p>
</details>

**Dennis Yang**：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

主持人：这就是我们所处的境地。我喜欢这个。我认为这是一个非常有趣的例子，因为再次，无论您正在处理的内容是什么，我认为每个人都可以从中受益：我可以编写一个资产，我可以将其推送到正确的来源，我可以查询评论，我可以查询反馈，我可以以团队需要的任何格式为他们翻译，并且我可以获得汇总的见解和更新。这个棒极了的流程给了我很多想法，我将采纳。所以我们还有一个快速的、有点更个人化的工作流程要向我们展示，所以让我们转到那个，看看您是如何开始您的早晨的。我想您的一切都是早晨简报。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is where this is where we're at. I I love this. I think this is a really interesting example because again it doesn't matter what the content of what you're working on is I think everybody can take away I can write an asset I can push it to the right sources I can query the comments I can query the feedback I can translate that for my team in whatever format they need and I can get aggregate insights and updates this awesome awesome flow has given me a lot of ideas that I'm going to take so we have one more quick kind of like a little bit more personal workflow that you were going to show us so Let's bop over to that and see how you start your morning. Everything's a morning briefing with you, I guess.</p>
</details>

### AI驱动的晨间简报与产品原型设计

**Dennis Yang**：是的，没错。这就是我……嗯，我如何开始我的一天？嗯，当我与大家谈论ChatGPT时，我喜欢向每个人介绍一个有趣的事情，那就是你进入ChatGPT，你只需说：“根据你对我的了解，给我写一份晨间简报。”ChatGPT已经为其系统添加了出色的记忆功能，因此它的晨间简报实际上相当不错。嗯，所以我每天早上都是用ChatGPT开始我的早晨的，它基本上会为我整理出它认为我感兴趣的内容。我这样做已经很长时间了。而且每天早上大约5点，它都会根据它对我的了解自动为我创建这份晨间简报。嗯，所以你可以在这里看到我们发生了地震。这是全国性的新闻。我确实注意到，过了一段时间后，它开始有点偏离主题。所以，我需要做的不是仅仅依靠记忆来告知它，我现在认为我需要给它更多的上下文和具体要求。所以对我来说，这实际上很有启发性，它让我明白即使**OpenAI**（一家人工智能研究公司）在找出与非常小的请求（比如晨间简报）相关的记忆上下文方面也并非完美。但我真正告诉每个人的关键之一是，我们如何学习使用AI？你必须以这种方式使用它，你才能理解并直观地感受到它有时做得不好的地方。嗯，这真的有助于你理解如何制作更好的AI产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, exactly. This this is what this is how I um so how do I start my day? Um one one kind of fun thing that I like to start everyone um with when I'm talking to them about chat GBT is you go into chat GBT and all you say is write me a morning briefing based on what you know about me. and chat chat GPT has added um fantastic u memory um to to its system such that its morning briefing is actually pretty decent. Um so how I begin my morning is with with the uh with JGBT every morning it essentially compiles for me what it thinks I'm going to be interesting interested in. And I've been doing this for a long time. Uh, and every morning at around 5:00 am it automat automatically creates this morning briefing for me based on what it knows about me. Um, so you can see here we had an earthquake. Uh, this the national stories. Uh, and what I did notice is after a while it's starting to actually starting to lose the plot. Um, so I need to instead of informing it by just memory, I'm thinking now I need to give it more context um, and specifics of what I want. So this this to me is actually it's informative in understanding that even open AAI is not perfect at figuring out what memory context is relevant for a very very small you know request like morning briefing. But one of the key things that I really tell everyone in in terms of how do how do we how do we learn how to use AI? You have to use it in this way and you can kind of understand and get a gut feel for how it how it does a bad job sometimes. Um it really helps you understand um how to make better AI products.</p>
</details>

主持人：这是一个自定义的GPT吗？您真的只是写“晨间简报”吗？它只是一个长期存在的聊天记录吗？它是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And is this a is this a custom GPT? Do you just literally write morning briefing? Is it just a long-standing chat? What is it?</p>
</details>

**Dennis Yang**：这是一个ChatGPT项目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is a this is a chat GPT project.</p>
</details>

主持人：好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

**Dennis Yang**：我没有给它任何帮助。我没有告诉它任何关于它应该做什么的事情，甚至没有给它文件。因为我实际上正在尝试看看它只使用我们之前创建的线程会做得怎么样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh into which I've placed I've given it no help. Um I have not told it anything around like what it should be doing or even giving it files. Um because I'm actually trying to see how it does with only the the previous threads that we made. Yeah.</p>
</details>

主持人：有意思。然后您就说“晨间简报”，它就开始了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Interesting. And then you just say morning briefing and it goes.</p>
</details>

**Dennis Yang**：是的。它以前做得非常棒。我想说大约一个月前，它每天早上都做得很好。现在感觉它要么是偏离了主题，这个项目变得太大了，要么是模型发生了一些变化。我不太确定。是的。但是……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep. It used to do a fantastic job. I would say about a month ago it it did a great job every morning. It it's feeling like either it's losing the plot and this project is getting too big or some sort of model changes. I'm not really sure. Yeah. But</p>
</details>

主持人：哦，不。那些是项目符号。所以……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, no. That's those are bullet points. So</p>
</details>

**Dennis Yang**：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah,</p>
</details>

主持人：那是GPT-5。是的，但我确实喜欢他们如何放这些小截图，这很好。但是这就像，不，现在没有AI新闻了。我的AI新闻去哪儿了？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that's that's GPT5 right there. Yeah, but I do like how, you know, they're putting these little screenshots in, which is nice. Um, but this is like, no, there's no AI news anymore. Like, where where'd my AI news go?</p>
</details>

也许对大家来说，这里的启示是，如果你想进入AI领域，我认为有两个原因。第一，如果你想出于个人生产力原因进入AI领域，找到一个日常用例。它应该非常简单、一致，在你的生活中增加一点价值，仅仅因为它会在你的生活中增加一点价值。我认为作为一个思考AI的人，这带来的二阶效应是，这是一种非常自然、重复的方式来了解这些核心模型的优势、劣势、演变和技能组合，未来几年几乎所有产品都将基于这些模型构建。所以你可以开始作为产品人员形成自己的直觉，比如：为什么这里的记忆会失效？为什么这里的上下文会失效？指令在哪里真正有帮助？我的两个词提示，我必须指出你这一点，它只是说“晨间简报”。这足够吗？嗯，我每天早上都在输入这个。我可能应该测试一下像“安排重复任务”这样的功能。所以，再次，我只是认为要投入其中，找到一些你每天都会觉得有用的东西，这样你就能习惯这些工具，并真正理解它们的能力。然后，如果你成为一个将要构建这些工具的人，你就会稍微领先一步。我们有更多关于如何通过AI获得良好用户体验的语言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe the takeaway for folks here is, you know, if you're trying to get into AI, I think for two reasons. One, if you're trying to get into AI for personal productivity reasons, find a daily use case. It's like really simple, consistent, adds little value in your life just because it'll add a little value in your life. I think the second order effect of that though as somebody who's thinking about AI is it's a really sort of natural repetitive way to learn about the strength, weaknesses, evolution, skill sets of these core models on which almost every product, you know, for the next couple years is going to be built. And so you can start to form your own intuition as a product person of okay, like why is memory failing here? Why is context failing here? Where do instructions really help? is my two-word prompt, which I have to call you out on that just says morning briefing. Like, is that sufficient? Um, I'm coming in and I'm typing this in every morning. I should probably test the like schedule repeated task thing. And so, again, I just think get in there and find something that every day you're going to find useful so that you're getting used to these tools and you're really understanding what their capabilities are. And then if you become somebody who's going to build these tools, you're a little bit ahead. We have more language about what makes a good user experience with AI.</p>
</details>

**Dennis Yang**：没错。如果你不是每天都使用它，你就不会注意到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly. If you're not using it every single day, you will not notice.</p>
</details>

主持人：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Dennis Yang**：当事情变好或变坏时，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When things get better or worse, right?</p>
</details>

主持人：你知道吗？这非常真实，因为我今天打开Cursor，我不知道这是否是因为我昨晚没睡好。但Cursor今天非常活泼。它非常友好。我想也是因为我今天用的是**Claude Sonnet 4**（一款大型语言模型），我很少用它。哦，真的吗？就像一个开朗的小家伙。哦，是的。我喜欢像一个脾气暴躁的GPT-5，一个中规中矩的、事实导向的**Staff Engineer**（高级工程师），或者一个临床抑郁的**Gemini 25**（一款大型语言模型）。所以我习惯了那些。所以我想，为什么这个模型今天对我这么好？这正是我需要的。然后我想，哦，是可爱的Claude。除非你与所有这些不同的模型对话，否则你不会对它们的个性有心理模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know what? This is very true because I open cursor today and I don't know if this is an effect of I really did not sleep well last night. But cursor is like so chipper today. It's like real friendly. I think also cuz I'm like quad sonnet 4 today, which I never I I rarely use. Oh, really? Like such a cheery little cheery little guy. Oh, yeah. I like like a like like a grumpy like a like a GPT5 middle of the road like factual staff engineer or just like a a clinically depressed Gemini 25. So, I'm used to those. And so, I was like, why is this model being so nice to me today? Like, this is exactly what I need. And then I was like, oh, it's sweet little quad. And unless you talk to all of these different models, you won't have a mental model of how they what their personalities are like.</p>
</details>

好的。所以，您向我们展示了如何在ChatGPT中创建和原型设计这个晨间简报，但我知道您是AI产品经理。您想构建这个东西，我喜欢您在Cursor中原型设计实际的AI产品和代理产品的方式。所以，让我们回到Cursor，我想看看您作为产品经理，如何以一种非常轻量级的方式在Cursor中实际构建、原型设计和测试这种产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. So, you showed us how you can just create this and kind of like prototype this morning briefing in chat GPT, but I know you you're an AI PM. You want to build this thing and I love the way you prototype your actual AI products and agentic products in cursor. So, let's whip back to cursor and I want to I want to see how you would actually go about as a PM building that kind of product and prototyping it and testing it in cursor in a really lightweight way.</p>
</details>

**Dennis Yang**：这是一个很棒的问题，我喜欢这个问题，因为我总是告诉人们，你应该首先在ChatGPT中原型设计你所有的AI产品想法，对吧？你应该尝试一下。这实际上就是我的晨间简报原型，是ChatGPT，现在我使用Cursor本身来继续原型设计，我通常称之为**超级MVP**（Super Minimal Viable Product：超级最小可行产品），之所以是超级最小，是因为我正在使用Cursor本身（也就是AI）来原型设计我即将构建的AI产品，这说得通吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's a great I love this question because I always tell people you should be prototyping all of your AI product ideas inside chat GPT first, right? You should just try it. which that that effectively was my morning briefing prototype was TGBT and now I use cursor itself to continue to prototype and what I call typically a super MVP super minimal and the reason why it's super minimal is because I'm using cursor itself which is AI to prototype the AI product that I'm about to build does that make sense sort of</p>
</details>

主持人：是的，是的，因为Cursor可以访问所有这些模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah yeah because cursor has access to all these models So</p>
</details>

**Dennis Yang**：所以你不需要设置太多就能至少得到一个基线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you don't have to set up too much to at least get the baseline sort of.</p>
</details>

那么我们怎么做呢？我们有刚刚写好的PRD。这是问题。这里有一些解决方案。我让它为自己写一个**TDD**（Technical Design Document：技术设计文档）。这是我的超级TDD。我说你将是一个超级MVP。你Cursor将帮助我原型设计并理解如何做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how do we do this? So we have our PRD that we just wrote. Here's the problem. Here's some solutions. I have it write a TDD for itself. Here's my TDD for super. I say you're going to be a super MVP. You cursor are going to help me prototype and and understand how to do this.</p>
</details>

主持人：对于那些不熟悉PM三字母词汇的人来说，TDD是技术设计文档。是的。所以Cursor本身会编写一个方法，一个技术设计文档来原型设计我正在尝试使用AI构建的产品，这是一个晨间简报系统。所以现在超级MVP的指令是，它将创建指令，这就是我们现在正在看的，让Cursor完成我想要它完成的任务。在这种情况下，你可以看到这里。第一步，加载配置。第二步，阅读，我们有一个关于要查找哪些新闻的配置文件。第三步，使用MCP新闻搜索工具搜索新闻。然后，处理内容，总结它，并创建一个报告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And and just for folks that don't live in threeletter PM word, TDD is a technical design document. Yes. So cursor itself will write a an approach a technical design document to prototype this product that I'm trying to build using AI which is a morning briefing system. So what the super MVP instructions now are is it's going to create instructions and this is what we're looking at now for cursor to do the task that I want it to do. In this case, you can see here. Step one, load the configuration. Step two, read, we have a profiles about what news to look for. Step three, use the MCP news search tool to search for news. And then, uh, process the content, summarize it, and create a report.</p>
</details>

所以，这实际上就是一些人所说的**提示工程**（prompt engineering），但它是让AI完成工作的指令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is effectively what some are calling prompt engineering, but instructions for the AI to do the job.</p>
</details>

**Dennis Yang**：是的，这看起来都很棒。现在我可以说在超级MVP代理指令中运行今天的简报。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep, that looks all great. Now I can just say at super MVP agent instructions run today's briefing.</p>
</details>

主持人：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Dennis Yang**：开始。确保我的MCP在运行期间仍然是绿色的。看起来不错。嗯，它就开始了。所以基本上它正在创建我刚刚在PRD中定义的这份报告，让我可以原型设计它。它正在制作……我喜欢他们的新待办事项功能。哦，我也是。喜欢它。嗯，如果你注意到这里，这是它的运行日期。有趣的是，有时Cursor不知道今天是哪一天或什么时间，它会和你争论今天是哪一天。所以我告诉它，嗯，确保运行像终端日期命令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Go make sure my MCP is still green while this is running. Looks good. Um and there it goes. Right. So basically it's creating this report that I just defined in our PRD allowing me to prototype it. It's making I love I love their new to-do function. Oh, me too. Love it. Um, if you notice here, this is it's running date. Amusingly, sometimes cursor doesn't know what date or time it is, and it will argue with you, um, about what date it is. So, I told it, um, make sure to run like the terminal date command.</p>
</details>

主持人：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep.</p>
</details>

**Dennis Yang**：所以你可以检查今天是哪一天。这实际上正在完成整个工作，去新闻MCP，收集我感兴趣的新闻。它会阅读输出，然后生成报告。现在我正在使用Claude Sonnet。这令人惊奇的是，我可以使用这些完全相同的指令，让GPT或Gemini或任何其他模型运行它，看看每个模型有何不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so you can check what date it is. And this effectively is doing the whole job right now of going to the news MCP, gathering news that I'm interested in. It's going to read the output and then generate the report. And right now this I'm using cloud for sonnet. The amazing thing about this is I can use these same exact instructions and have GPT or Gemini or you know any other model run it and see how each model differs. Um</p>
</details>

主持人：好的。嗯，这可能有点书呆子气，但这让我大开眼界，因为如果我……我是一个构建AI产品的人，我是一个喜欢在ChatGPT或某些消费者通用产品中原型设计，然后将其引入的人。而我以前会做的愚蠢事情，而您正在让我大开眼界的是，我会去编写代码。但我会去编写TypeScript或Python或其他什么，我会调用这些库、这些**SDK**（Software Development Kit：软件开发工具包），我会构建我的函数响应，我会做所有这些工作。但您展示的这个技巧是，Cursor实际上内置了工具调用、模型切换、代理工作流程。所以在这个原型设计阶段，您可以绕过所有那些繁琐的设置。只需提供工具和函数或MCP的自然语言描述，让Cursor完成调用正确模型、链式思考等繁重工作。然后，当您觉得您的指令和总体结构正确时，太棒了。有人可以编写一些代码。但这只是一个完美的中间步骤，也是Cursor将成为的这种通用AI平台的绝妙技巧，我认为这非常聪明。所以，Dennis，干得好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">okay. So, um, this may be super nerdy, but this is blowing my mind because if I if I I am somebody who builds AI products and I am somebody who thinks like prototype in a chat GPT or some like consumer general product and then pull it in. And the the silly thing that I would do that you're opening my eyes to is I would go write code. But I would like go write TypeScript or Python or whatever and I would call in these like libraries, these SDKs and I would structure my function responses and I would like do all this work. But what you're showing as a hack is cursor actually has built-in tool calling, model switching, like aentic workflows. And so bypass all that wrote setup for yourself in this prototype phase. just provide like the natural language description of the tools and functions or MCPs and let cursor do the dirty work of calling the right models, chaining the thought, all that kind of stuff. Then when you feel like your instructions in your general structure are right, great. Somebody can write some code. But this is just like such a perfect intermediary step and such a hack for this like all-purpose platform for AI that that cursor is going to become um that I think is just really clever. So good job, Dennis.</p>
</details>

**Dennis Yang**：谢谢。是的，这是一种非常有趣的工作方式，因为……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks. Yeah, this is it's a really fun way to work because</p>
</details>

主持人：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah,</p>
</details>

**Dennis Yang**：这甚至不是无代码。这简直是零代码。是的，没有……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like this isn't even no code. It's like zero code. Yeah, there's no</p>
</details>

主持人：我想它就是无代码。它确实是无代码。它没有编写任何代码。像无代码系统通常会编写代码，但这里没有代码。文字就是代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess it is no code. It's it's really no code. It's not writing any code. Like no code systems would typically write code, but this is there's no code. This is the the word the words are the code.</p>
</details>

嗯，好的。这不像“Vibe Coding”那么吸引人，但我们就像在“Vibe Agenting”。我们正在编写一个相当复杂的代理设置。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, okay. And this is not as at as um catchy as vibe coding, but we're like we're like vibe agenting. We're like writing a pretty complex like agent setup.</p>
</details>

**Dennis Yang**：我们没有按钮、原型、表格和流程，我们只是获得了一种AI驱动的体验。现在我们在这里看到了您的晨间简报。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And instead of like buttons and prototypes and you know forms and flows, we're just getting kind of like an AI powered experience. And now we're seeing here your morning briefing.</p>
</details>

主持人：晨间新闻。是的。就是这样。我的意思是，基本上我们离发布这个东西非常接近了，对吧？我可以……这就是内容。这就是我今天的每日新闻简报。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Morning news. Yeah. And this is it. And I mean basically like we're we're so close to just just shipping this thing, right? Like I can this is the content. This is today's this is today's news brief for me.</p>
</details>

**Dennis Yang**：是的。这是一个产品经理可以根据自己的意见设定默认值的地方，比如我认为这应该是Claude Sonnet。我认为，你知道，确保你正在调用一个日常工具。比如这是我为自己设置的用于获取新闻的MCP，如果不是这个，就用另一个。所以它允许你进入实现的下一步，而不是将它卸载给工程团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And this is a place where then a PM can come in with opinionated um defaults on I think this should be Claude Sonnet. I think you know make sure you're calling a daytime tool. Like here's the MCP that I set up for myself to pull news like if not this one another one. And so it allows you to go that next step on implementation as opposed to off offloading that to the engineering team.</p>
</details>

主持人：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep.</p>
</details>

**Dennis Yang**：他们可能在用户体验方面没有那么多的主见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Who might not be as opinionated on the user experience side.</p>
</details>

主持人：没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's right.</p>
</details>

**Dennis Yang**：喜欢它。非常好。干得漂亮，我的朋友。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Love it. Very good. Bravo, my friend.</p>
</details>

### 闪电问答与未来展望

主持人：好的，Dennis，这太有趣了。我有很多想法。AI无处不在。我有几个闪电问答要问您，然后我们就让您离开。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, Dennis, this is so fun. I have so many ideas. Um AI all the way all the way down. I I have a couple lightning round questions for you and then we'll get you out of here.</p>
</details>

**Dennis Yang**：好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

主持人：第一，您的同事知道您正在用AI回复他们的评论吗？还是这是剧透？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">one, do your colleagues know that you're replying to their comments with AI or is this the spo spoiler alert?</p>
</details>

**Dennis Yang**：不，我没有……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, I I don't</p>
</details>

主持人：产品经理们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">fellow fellow PMS.</p>
</details>

**Dennis Yang**：百分之百，我想他们都知道。我认为我们回到办公室面对面工作的一个好处是，在那之前，我认为人们不相信我真的是一个人类。所以，他们都知道，你知道，我完全是AI赋能的。太完美了。我喜欢它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">100% I think they all know. I think um the one the one single benefit of us being returned to office in person is that before that I don't think people believed that I was actually a real human. So um they all know uh you know that I'm I'm fully AI enabled. Perfect. I love it.</p>
</details>

主持人：嗯，好的。我的第二个用例是，或者我的第二个问题是，您会如何推荐一个产品经理开始使用Cursor？您是像字面上打开Cursor并说：“嘿，这将是一个产品文档和工件的目录。这里不会有代码。设置它。”您零到一的快速启动是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, okay. My my second use case is or my second question for you is how how would you recommend a PM um get started with cursor? Are you just like literally opening up a cursor and saying, "Hey, this is going to be a a directory for product documents um and artifacts. There's going to be no code here. Set it up." Like what's your zero to one quick quick start?</p>
</details>

**Dennis Yang**：是的，我的零到一快速启动基本上就是你打开它，然后创建一个全新的目录，就叫“空白”或者在我的情况下，然后你就开始和它对话，因为一旦你这样做，你就会有一个聊天面板，对吧？所以，然后你就可以开始学习它实际是如何工作的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, my my 01 quick start is basically you open it up and you make a a brand new directory just called like blank or in my case and then you just start talking to it because soon as soon as you do that you'll have a chat pane, right? So uh and then you can start learning um how this actually works.</p>
</details>

主持人：太棒了。好的。然后我的最后一个问题，我最喜欢的一个，嗯，您对您的AI如此有礼貌。好的。所以，我知道这将是一个很好的答案，但是，例如，当您打开和关闭这个MCP，或者它调用了错误的工具，或者它用错误的东西覆盖了您的Epic任务时，您的提示技巧是什么？您的首选方法是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Amazing. Okay. And then my last question, my favorite one um you were so polite you were so polite to your to your AI. Okay. So, I know this will be a good answer, but when, for example, you're toggling on and off this MCP or it's calling the wrong tool or it's overwriting your um epic tasks with the wrong thing, what is your prompting technique? What's your go-to?</p>
</details>

**Dennis Yang**：我想大多数认识我的人都知道我是一个非常善良、友善的人。我不会对AI大喊大叫。嗯，我经常说“请”，就像你注意到的，我经常使用感叹号。嗯，有时我只是重新开始整个线程，就像，“好吧，让我们重新开始。”完全地，时间旅行回到过去，然后说，“让我们重新开始。也许你需要休息一下。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think most people that know me know me to be a very kind, nice person. I I don't I'm not a yeller at I don't yell at the AI. Um, I say a lot of please. I say, as you noticed, I'd use a lot of exclamation points. Um, and sometimes I just kind of start the thread all over and just like, all right, let's just start new. Right. Completely uh time travel back in time and be like, let's let's start over. Maybe you need a break.</p>
</details>

主持人：哦，那个回答简直抚慰了我内心的孩子。所以我喜欢听。非常平静，非常积极，非常友善，当你需要时就走开。这是一个明智的回答。好的，Dennis，这太棒了。我们可以在哪里找到您，我们如何提供帮助？嗯，您可以在网上找到我，我通常在Twitter X上是“send”，也就是Dennis倒过来拼写，然后在LinkedIn上。您可以在那里找到我。我就是Dennis Yang。我将在11月在**Fintech NerdCon**（金融科技极客大会）会议上发言。我正在努力聚集尽可能多的AI赋能者在那里。所以来加入我吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, that response has just like soothed my inner child. So, I love to hear it. Very calm, very positive, very kind, and just walk away when you need to. That's a wise response. Okay, Dennis, this has been so great. Where can we find you and how can we be helpful? Um, you can find me I'm online typically as send uh Dennis backwards on Twitter X uh and then LinkedIn. You can find me there. I'm just Dennis Dennis Yang. Uh and I'll be speaking at the Fintech NerdCon conference in November. Um trying to gather as many AI enabled people there. So come and come and join me there.</p>
</details>

**Dennis Yang**：太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Amazing.</p>
</details>

主持人：嗯，感谢您来到这里。非常感谢您向我们介绍了这些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, thanks for being here. Really appreciate you walking us through this.</p>
</details>

**Dennis Yang**：感谢您的邀请。这很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks for having me. This is fun.</p>
</details>

主持人：非常感谢您的观看。如果您喜欢这个节目，请在YouTube上点赞并订阅，或者更好的是，留下您的评论和想法。您也可以在Apple Podcasts、Spotify或您喜欢的播客应用程序上找到这个播客。请考虑给我们评分和评论，这将有助于其他人找到这个节目。您可以在howiipod.com查看我们所有的节目并了解更多信息。下次再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks so much for watching. If you enjoyed this show, please like and subscribe here on YouTube, or even better, leave us a comment with your thoughts. You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app. Please consider leaving us a rating and review, which will help others find the show. You can see all our episodes and learn more about the show at howiipod.com. See you next time.</p>
</details>