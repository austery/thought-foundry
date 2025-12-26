---
area: "tech-engineering"
category: technology
companies_orgs:
- Chime
- Vercel
- GitHub
date: '2025-11-05'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- beginner-coding-guide
people:
- Claire Vo
- Lee
products_models:
- Cursor
- Claude Code
- Next.js
- TypeScript
- Lovable
- Bolt
project: []
series: ''
source: https://www.youtube.com/watch?v=k0gmTOm1eus
speaker: How I AI
status: evergreen
summary: 本集节目为编程初学者提供了一份详尽的AI辅助编程指南。主持人Claire Vo演示了如何利用AI工具（如ChatPRD和Cursor）从零开始构建一个个人项目中心，涵盖了从撰写产品需求文档（PRD）到生成可运行代码的整个过程。节目强调了即使是非技术人员也能通过AI工具快速上手，并介绍了版本控制（GitHub）和代码迭代的方法，旨在帮助用户高效地学习和实践AI辅助开发。
tags:
- control
- llm
- personal
- product-development
title: AI辅助编程新手指南：从PRD到代码实现个人项目中心
---
### 欢迎来到AI辅助编程新手入门

欢迎回到“How I AI”节目。我是Claire Vo，一位产品负责人和AI狂热者，致力于帮助大家更好地利用这些新工具进行构建。今天，我带来了一集许多人一直要求的内容，那就是：“Claire，如果我从未写过一行代码，完全不知道自己在做什么，也不知道如何在本地运行任何东西，我该如何开始**AI辅助编程**（AI-assisted coding: 利用人工智能工具辅助代码编写）和**Vibe Coding**（一种通过AI快速生成代码原型的方法），以便学习基础知识？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Welcome back to How I AI. I'm Claire Vo, product leader and AI obsessive here on a mission to help you build better with these new tools. Today I have an episode that so many of you have asked me for, which is Claire, if I have literally never written a line of code, I have no idea what I'm doing, I do not know how to run anything locally, how do I get started with AI assisted coding, vibe coding, so I can just learn the basics?</p>
</details>

在今天的迷你节目中，我将向大家展示如何做到这一点，或者说我将如何亲自操作，而且是完全直播演示。所以，我们可能会遇到一些小插曲，但最终我们将构建一个可以在你的机器上本地运行的个人项目中心，它能让你通过AI生成文档并原型设计可以与自己或团队分享的方案。我希望这一集能成为一个“安全空间”节目，帮助初学者真正开始使用这些编码工具，并学习如何利用这项技术为自己，并最终为你的团队构建有趣的东西。让我们开始吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in today's mini episode, I'm going to show you exactly how to do that or exactly how I would do it. and I'm doing it completely live. So, we have a couple hiccups, but we eventually get to a personal project hub that can be run locally on your machine that lets you generate docs via AI and prototype designs that you could share just with yourself or with your team. I hope this is what I'm calling a safe space episode for you to really get started as a beginner using some of these coding tools and learn how to leverage this technology to build interesting things for yourself and eventually for your team. Let's get to it.</p>
</details>

本集节目由**ChatPRD**（一个AI产品副驾驶，帮助编写产品文档）赞助播出。我知道你们许多人收听“How I AI”是为了学习如何实际应用AI，让构建工作变得更简单。这正是我创建ChatPRD的原因。ChatPRD是一个AI副驾驶，可以帮助你编写出色的产品文档，自动化繁琐的协调工作，并从专业的AI首席产品官那里获得战略指导。它深受从发展最快的AI初创公司到拥有数百名产品经理的大型企业的喜爱。无论你是想通过Vibe Coding构建原型，教初次担任产品经理的人入门，还是在大公司中高效扩展，ChatPRD都能帮助你更快地完成更好的工作。我们已与你喜爱的工具集成，如vzero.dev、Google Drive、Slack、Linear、Confluence等。因此，你无需改变工作流程即可通过AI加速。请访问chatpd.ai/howi ai免费试用ChatPRD。让我们再次享受产品开发的乐趣吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today's episode is brought to you by ChatPrd. I know that many of you are tuning into how I AI to learn practical ways you can apply AI and make it easier to build. That's exactly why I built ChatPRD. Chat PRD is an AI co-pilot that helps you write great product docs, automate tedious coordination work, and get strategic coaching from an expert AI CPO. And it's loved by everyone from the fastest growing AI startups to large enterprises with hundreds of PMs. Whether you're trying to vibe code a prototype, teach a firsttime PM the ropes, or scale efficiently in a large organization, Chat PRD helps you do better work fast. And we're integrated with the tools you love, vzero.dev, Google Drive, Slack, Linear, Confluence, and more. So you don't have to change your workflow to accelerate with AI. Try ChatPRD free at chatpd.ai/howi ai. And let's make product fun again.</p>
</details>

### 从零开始：AI辅助编程的“安全空间”问题

在我管理的团队中有一个理念，我们不称问题为“愚蠢的问题”，我们称之为“安全空间问题”。而我仍然收到最多的“安全空间问题”是：“如果我这辈子从未写过一行代码，我该如何真正开始用AI编程？”我们之前有几集节目专门讲解了Vibe Coding和创建原型。例如，我们请了Cursor的Lee来讲解Cursor的一些组件，但我们仍然没有向大家展示如何从零代码、零文件开始，到一个你可以本地操作的代码库，并学习更多关于**AI辅助工程工具**（AI assisted engineering tools: 辅助工程师进行代码开发的人工智能工具），比如**Cursor**（一个AI辅助的集成开发环境）或**Claude Code**（一个AI编码工具），甚至只是为自己创建一个实验空间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's this concept I have in teams that I run where we don't call questions dumb questions. We call them safe space questions. And the number one safe space question I still get is how do I actually get started coding with AI if I have never written a line of code in my life? And we've had a couple episodes kind of giving you oneonone on vibe coding and creating prototypes. Um, we had Lee at cursor walk through some of the components of cursor, but still we have not shown you how to go from zero code, no files, nothing to a codebase that you can start to work on locally and learn a little bit more about these AI assisted engineering tools like Herser, like Claude Code or even just create a little space for yourself to experiment.</p>
</details>

所以今天的迷你应用将是一个构建环节，我们将进行直播演示，可能会有一些粗糙的地方，因为我目前没有任何预设。我将向大家展示，如果我完全从零开始，我会怎么做，我们将看看在你的桌面上搭建一个小型个人应用以使用AI进行编码，我们能走多远。我将努力让这个过程对那些日常工作中不是软件工程师的人来说也易于理解。但对于那些想与团队中的产品经理、设计师或朋友分享，寻找从零开始编码方法的人来说，这集节目也非常棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So today's mini app is going to be a building episode and we are going to do it live and there might be some rough edges because I don't have anything baked right now. I'm going to show you how I would do this if I was starting completely from scratch and we will see how far we can get in terms of standing up a little personal app on your desktop to code with using AI. And I'm going to try to make this accessible for people who are not software engineers in your day-to-day. But this is a great episode for software engineers who want to share this with their PMs on their team, designers on their team, or their friends looking for a way to go zero to one with coding.</p>
</details>

这里有一些注意事项。再次声明，我没有提前计划，所以我们是直播进行。第二，我们暂时不会强调代码质量。我们想从“能否在本地运行一些有用的东西，并且我能理解其中一些组件”开始，而且要非常快。所以它不会有大量功能，但会让你入门。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Caveats here. Again, I did not plan this out, so we're doing it live. Two, we are not going to stress out about the quality of the code right now. What we want to start with is can I get something running locally that's useful that I understand some of the components of and we're going to do it really fast. So it's not going to have tons of functionality but it's going to get you started.</p>
</details>

对于所有听众，我今天将使用几个工具。我将快速使用ChatPRD。我可能会在**Vzero**（Vercel旗下的一个原型设计应用）中进行一些原型设计。我将把它导入到Cursor。我还会向你展示如何选择性地或额外地使用Claude Code，并且我们可能会在此过程中引入其他一些令人兴奋的工具。所以，如果你想一边打开YouTube，一边打开屏幕跟着操作，我会尽量让它变得尽可能简单，让你从零开始，并在节目结束时拥有一个AI编码的代码库。让我们看看我们能否在30分钟内完成。好的，为了开始，我将分享我的屏幕。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for everybody listening I'm going to use a couple tools today. I'm going to use chat purity really quickly. I'm probably going to prototype a little bit in Vzero by Versel. I'm going to bring it into cursor. I will show you how to optionally or additionally use claude code and we might bring in some other exciting tools along the way. So um this is one where if you want to get the YouTube up on one side and your screen up on the other and follow along I will try to make it as simple as possible to get started with nothing and then have a AI coded codebase by the end of this. Let's see if we can do it 30 minutes. Okay, to get started, I'm going to share my screen.</p>
</details>

### 从产品需求文档（PRD）开始：Vzero的尝试

就像所有好的产品和好的创始人一样，我将从撰写一份需求文档开始。我们将把它做得非常简单。我一直在想，什么是一个对每个人都相当容易理解的用例呢？我想到了“个人产品中心”这个想法会非常有用，特别是对于那些关注了我们最近与Chime的Dennis关于AI驱动产品管理以及与Elizabeth Lynn关于Cursor原型设计节目的人来说。我认为这样一个你可以玩转AI的个人中心是一个很好的选择。所以，我将说：“帮我写一个文档章节”，我只说“个人项目”，这样它就不会认为我正在开发自己的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And like all good products and like all good founders, I am going to start with um writing a requirements document. And we're going to make this really simple. And I thought what would be a good use case that's pretty accessible to everybody. And I thought this idea of kind of a personal product hub would be really useful, especially as folks that have followed along our recent episodes with Dennis from Chime about AI powered product management, some of our prototyping, um, with cursor episodes with Elizabeth Lynn. I think just like kind of this personal hub where you're going to play with AI stuff is the way to go. So, I'm going to say help me write a document chapter and I'm just going to say personal project so it doesn't think I'm working on my own product.</p>
</details>

一个最小、简单的中心，用于处理两件事。哎呀，按下了回车键。所以它会很期待这两件事是什么。这两件事将是文档，即**PRD**（Product Requirements Document: 产品需求文档）和想法。第二件事是小型交互式原型。我想要一个网页应用，基本上在左侧有两个导航项：文档和原型。我将把它变成一个**Next.js**（一个基于React的JavaScript框架）应用，我可以在其中用**Markdown**（一种轻量级标记语言，用于创建格式化文本）编写文档，并编写小型原型代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">a minimal simple hub for working on two things. Oops. Pressed enter. So, it's going to be really anticip anticipate what those two things are. The two things are going to be the documentation, PRDS and ideas. The second thing is small interactive prototypes. I want a web app with basically two navigation items on the left. Um, docs and prototypes. And I will turn this into a nextjs app where I can write docs in markdown and I code little prototypes. Okay, so this is what I'm imagining.</p>
</details>

好的，这就是我设想的。我设想我将为产品工作创建一个Claire的中心。它将是一个超级迷你的网页应用。我想要一个“文档”部分，我将基本上使用AI来编写PRD和其他文档和想法。然后是另一个文件夹，我可以在其中编写原型，也许会向你展示如何使用Cursor或其他工具来通过Vibe Code编写小型原型，然后你可以随着时间的推移看到它们。核心受众是我自己。所以这只是为了我自己，这样我就可以构建一些简单的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm imagining I'm going to make Claire's hub for product work. It's going to be a super minimal web app. I want docs where I'm going to like basically use AI to write PRDs and other docs and ideas. and then another folder where I write prototypes and maybe show you how to use cursor or these other tools to like buy code little prototypes in this folder that then you can see over time and the core audience is myself. So this is just for me um so I can build something simple.</p>
</details>

你可以听到我的打字声，因为我今天做了漂亮的指甲。但它会为我的个人项目快速写一个PRD，并真正概述我想做什么。我喜欢从PRD开始的原因是，你真的能从下一步（即Vibe Coding原型设计步骤）中获得更好的结果。所以，虽然这会花费一点时间，但我认为这样做非常值得，因为这样在下一步中，我们就不必花那么多时间在提示和其他方面的工作上。所以这将生成一个PRD。我们可能会快速浏览一下，等它准备好后再回来，然后发送给Vzero。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can hear my typing because I have nice nails today. but it's going to write me a quick PRD um for my personal project um and really outline what I want to do. The reason why I like to start with PRDs is really you just get better results out of the next step which will be a kind of like vibe coding prototyping step. And so while this is a little bit of time, I think it's really worthwhile to do because then in our next step, we're not going to be spending so much time on prompting and other aspects of this work. So this is going to generate a PRD. We'll probably like spin through and come back when it's ready and send it over to Vzero.</p>
</details>

好的，我的文档完成了。我只读一下开头。我将成为最懒的产品经理，因为这只是一个迷你节目，不是一个大型节目。我的总体目标是：我想快速起草产品想法并以Markdown格式记录。我想在编写PRD和编码原型之间无缝切换。我想组织我的文档。我想看到实时预览。好的，当然，为什么不呢？这看起来很棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, my document is done. I'm just going to just read the top. I'm gonna be the laziest PM because again, this is a mini episode, not a big episode. And my general goal, I want to quickly draft down product ideas and mark down format. I want to simply seamlessly switch between writing pods and coding prototypes. I want to organize my documents. I want to see a live preview. Okay, sure, why not? This looks great.</p>
</details>

然后我将把它在Vzero中打开，这是我针对这个特定用例首选的原型设计应用。我喜欢V0进行初步原型设计的原因有二：第一，它的UI通常非常流畅、美观；第二，它非常容易将这个原型导入到**GitHub**（一个用于版本控制和协作的平台）、Cursor，并实际部署。我发现人们常常认为最可怕的部分是将其Vibe Coding原型与实际部署的体验连接起来。我认为**Vercel**（一个用于部署前端应用的平台）在这方面做得很好，向那里的朋友们致敬。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So then I'm just going to open this in Vzero, which is my preferred um prototyping app for this particular use use case. The reason why um I like V0 for my initial prototyping is one, the UI tends to be pretty like streamlined and nice looking and pretty. Um two, it's going to be really easy to take this into the next step of getting it in GitHub, getting it in cursor, and actually deploying it. And I find that people often think that the scariest part is actually connecting their vibe coding um their vibe coding prototype with an actual deployed experience. And I think Versell's done a nice job, shout out to my friends over there, um of setting that up.</p>
</details>

话虽如此，请选择你喜欢的Vibe Coding平台。Lovable很棒，Bolt很棒，Replet很棒。它们都很棒。我只是更喜欢这个工作流程，因为我实际上会把它导入代码中，并向你展示一些替代部署此应用的方法，我知道这是你们许多人有疑问或好奇的部分。所以，它将帮助我构建这个个人项目中心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That being said, like pick your vibe coding platform of choice. Lovable is lovely, Bolt is lovely, Replet is lovely. All of them are lovely. Um, I'm just going to prefer this one for this workflow because I'm actually going to pull this into code and show you some alternate ways you can deploy this app at some point and I know that's a part that a lot of you have questions about or are curious about. So, it's going to help me build this personal project hub.</p>
</details>

对于你们所有走上Vibe Coding之路的人来说，有几个关键词：Vercel肯定会用**Next.js**（一个基于React的JavaScript框架）来构建它。所以它将以**JavaScript**（一种流行的编程语言，常用于网页开发）为中心。我总是告诉人们，如果你想开始用AI编码，你可以选择两种语言之一。你可以选择**Python**（一种流行的编程语言，以其易读性著称），因为它易于阅读和编写；或者选择JavaScript，因为它易于可视化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, a couple kind of like keywords for you all as you go down this um, vibe coding path is Verscell is definitely going to build this in Nex.js. So, it's going to be um, JavaScript focused. I always tell people if you're trying to get started with coding with AI, you pick one of two languages. You pick Python because it's easy to read um, or easy to write and read and you pick JavaScript because it's easy to see.</p>
</details>

我不认为JavaScript实际上是最易读的语言。Python，我认为，真的很容易。你可以直接阅读它并理解发生了什么。JavaScript有点花哨。它有一些独特的语法特性，但JavaScript可以让你得到一个网站，这是我们都非常喜欢的。而Python则需要一些额外的步骤。所以，这将基本上为你生成一个Next.js应用和**代码仓库**（repository: 存储项目文件和修订历史的地方），我最终甚至不会在Vzero中使用它。我将把它导入Cursor。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I don't think JavaScript is actually the most readable language. Python, I think, is like really easy. You can literally read it and understand what's happening. Um, JavaScript's a little little more fancy. Um, has a a couple um syntactical things that are pretty unique to that ecosystem, but JavaScript you can like get a website out of which which we all all really like. And there's a couple extra hops uh and steps with Python. So, this is going to generate basically an X.js um app and repository for you that I'm actually eventually not even going to use in V 0ero. I'm going to pull into Cursor.</p>
</details>

所以你可以在这里看到它正在构建我们讨论过的许多组件。再次强调，对于那些说“我不知道从何开始，我下载了Cursor，打开了它，我该怎么办？”的人来说，实际上只有两个步骤。你可以在Cursor中完成所有这些步骤。从零开始，它肯定会为你搭建一个代码仓库，但我喜欢让初学者从像这样的Vibe Coding平台开始，因为你可以先看到它。它们有基于网络的浏览器，你可以查看。你不必担心在本地运行它，你可以真正专注于那些我知道你们非技术人员关心的事情，比如它的外观和工作方式，然后我们再担心代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you can see here it's building a lot of these components we talked about. Again, for people who are like, I have no idea where to start. I downloaded Cursor, I opened it up, what do I do? There really are two steps. You could do this whole step in cursor. Start from zero. It will definitely scaffold out a repository for you, but I like for beginners to start in a vibe coding kind of platform like this because you can really see it first. They have this web- based browser that you can look at. You don't have to worry about running it locally and you can really focus on the things that I know some of you non-technical people care about which is like how it looks and how it works and then we'll we'll worry about the code.</p>
</details>

我觉得像Cursor、VS Code这样的**IDE**（Integrated Development Environment: 集成开发环境）会让你过早地担心代码，这对于非技术人员来说并不合适。所以，让我们让它生成，然后我再回来向你展示如何将其导入Cursor。它仍在生成中。我想提醒大家的一点是，我们正在直播进行，所以我会向你展示遵循这种流程的优缺点。我确实写了一个相当不错的PRD，但我试图让它保持简单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I feel like something like starting with an IDE like when surfer cursor VS code or whatever you really start worrying about the code too early for somebody who is not technical. So let's let this generate and then I will come back and show you how I will pull this into cursor. This is still generating. And one of the things that I want to call out for people, again, we are doing this live, so I'm going to show you exactly the pros and cons of following a flow like this is I did make a pretty good PRD, but I did try to tell it to keep it simple.</p>
</details>

我注意到许多AI辅助编码平台试图承担更多端到端的应用构建工作，并试图在它们能生成的应用的复杂性和完整性上竞争。在过去几个月里，我注意到这些更具代理性质的编码工具的实现方式中，存在很多超出我们预期的**范围蔓延**（scope creep: 项目范围在未受控的情况下不断扩大）。所以，我再次强调，我想要它非常简单。我想要一个存放文档的地方，一个用于原型代码的地方。我想要它使用Markdown。

<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text">And what I've noticed as a lot of these um AI assisted coding platforms try to take more more of the end to end application building and are trying to compete on the complexity and completeness of the applications they can generate. What I have noticed over the past couple of months is that I've seen a lot of scope creep um be built into how these more agentic implementations of these coding tools work than maybe we want. And so again, I wanted it very simple. I wanted a place for my documents. I wanted a place to prototype code. Um I wanted it in markdown.</p>
</details>

它正在为我构建一堆我不需要的东西，比如文件管理、沙盒编码等等，这些都不是我想要的，而且远远超出了我为这个用例想要生成的产品复杂性。所以我们将看看最终会得到什么。否则，我们将选择另一条路径。我再次向你们展示这一点，是为了让你们了解这些工具能给你带来什么，以及你可能需要如何退出当前的路径，才能找到适合你的正确路径。所以，生成这个应用可能是一个错误，因为Vzero应用对需求反应过度，为我构建了一个非常花哨的东西，这很好，但可能超出了我最初想要的范围。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's building me a bunch of stuff. I don't need file management um a sand I saw it had a sandbox um for coding like all sorts of things that I didn't actually say I wanted and is far beyond I think the complexity of the product I wanted to generate for this use case. So we're going to see what we end up with. Otherwise we'll take a different path. And again, I'm just showing you this so you all can understand what you're going to get out of these tools and how you may have to back out of a current path in order to find the right path for you moving forward. And so it may have been a mistake to generate this because the app, the Vzero app went like ham on the requirements. to build me something very fancy, which is nice, but is maybe beyond what I wanted to start with.</p>
</details>

所以，我将在这里查看文档。好的，我们已经有了错误，开局不利。让我们回到主页原型，但我不需要这个。我不需要这里的代码。我只是希望代码正常生成。所以，你知道吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm going to see here documents. Okay, we got errors already off to a bad start. Let's go back to the home prototypes, but no, I don't want this. I don't want this code here. I just wanted the code to be generated normally. So, you know what?</p>
</details>

这是一个失败。没关系。即使对于这个迷你节目来说，它的失败也只是向你展示了，如果你使用这些工具，你可以找到适合你的正确工作流程。然后，放弃它也相当便宜。我正在看我们的录制时间。到目前为止，我花了10分钟，其中大部分是等待加载的时间，但它并没有达到我想要的效果。你猜怎么着？完全没问题。所以，我们将退出。我们将放弃我们的Vibe Coding平台，因为它需要太多的来回沟通才能达到我想要的简单效果。我将直接在Cursor中从头开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is a bust. And that's okay. Even for a mini EP here, having this be a bust just shows you if you play with these tools, you can figure out the right workflow for you. And then it's pretty cheap to walk away. I've spent I'm looking at our recording timing. I've spent 10 minutes so far on all of this, including mostly waiting time on loading, and it didn't end up what I wanted. And guess what? Totally fine. So, we're going to back out. We're going to give up on our viide coding platform because it's going to take too much back and forth to get to the simple thing I want. And I am going to start this from scratch directly in cursor.</p>
</details>

### 直接在Cursor中从零开始构建

好的，那完全是个失败。我们创建了一个PRD。我们尝试用Vibe Code实现它。Vibe Coding太复杂了。为了这个快速入门教程，我实际上不希望它那么复杂。所以，我们将直接进入Cursor，看看在这种情况下会是怎样。我已经打开了Cursor。它打开了一个空目录。那个目录实际上被命名为Civo，因为这将是我的个人项目。里面没有文件。什么都没有。所以你所要做的就是进入你的文件浏览器，创建一个空文件夹，然后在Cursor中打开那个文件夹。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so that was a total bust. We made a PRD. We tried to vibe code it. The vibe coding was way too complicated. I don't actually want it to be that complicated for the sake of this quick start tutorial. So, we're going to go directly into cursor and see what it looks like in that direction. And so I have opened cursor. It is um opened to a empty directory. That directory is actually named Civo because this is going to be my personal project. There are no files. There is nothing in it. So all you have to do is is go into your file browser, create a folder that's empty, open that folder in cursor.</p>
</details>

然后我想展示一下Cursor 2.0在过去一周发布的一些新功能。其中之一是它现在有两种不同的视图。一个**代理视图**（agents view: 专注于构建内容和指导代理工作的界面），它更专注于你将要构建什么以及指导在你的代码库中工作的代理或多个代理。然后是**编辑器视图**（editor view: 类似于传统IDE，左侧是文件，中间是代码，右侧是聊天或代理），它与Lee在几集前向我们展示的非常相似，左侧是你的文件（我目前没有文件），中间是你的代码，右侧是你的聊天或代理。我实际上将使用代理流程，因为我正在为初学者演示如何开始，我想向你展示它运行起来有多简单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I want to show a couple things about cursor 2.0 that have been um released in the last week. One is they now have two different views. An agents view which is much more focused on what you're going to build and um instructing the agent or multiple agents that are working in your codebase. And then editor view, which is very similar to what Lee showed us in a couple episodes ago, which is your files on your left. I have zero files. Your code in the middle, and then your chat or agents on the right. And I'm actually going to use the agents flow for this because again I'm trying to get started for beginners and I want to show you how easy it is to run.</p>
</details>

所以我要去代理视图，然后我将回到我的PRD。我实际上只是要复制这个Markdown，因为我感觉非常懒惰。我将说：“我想要一个非常简单的**Next.js**（一个基于React的JavaScript框架）应用设置，我可以在不同的目录中保存Markdown文档、PRD和代码的**代码仓库**（repository: 存储项目文件和修订历史的地方），以及将在应用中显示的小型原型。这是一个PRD，但请保持超级基础。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm going to go to agents and I will zip back to my I will zip back to my PRD. I am actually just going to copy this markdown because I'm feeling super lazy. And I'm going to say I want a very simple next.js JS app set up where I can keep a repository of markdown docs, prds and code in different directories, little um prototypes that will be displayed in the app. Here is a prd but keep it super basic.</p>
</details>

我要在这里展示的另一件事是，我将使用Cursor的新模型**Composer One**。原因在于这是一个迷你应用，而Composer One速度非常快。它真的很快。你们做得很好。当然，你可以切换你想使用的模型，但为了这个目的，我们将使用Composer One，看看我们能走多远。哦，我还应该在这里说，要保持超级基础。我们从头开始。所以，给我所有我需要设置和运行的步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other thing I'm going to show here is I'm going to use um cursors new model composer one. The reason why is this is a mini app and composer one is so freaking fast. It is fast. You guys did a good job there. Um of course you could switch what model you want to use, but we're going to use composer one for the sake of this and see how far we get. Oh, I should also say up here to keep it super basic. We're starting from scratch. So, give me all all the steps I need to set up and run this. Okay.</p>
</details>

好的。所以，让我们看看这个Cursor代理会做什么。它将运行一堆安装文件。所以它将创建一个Next应用。它将安装**TypeScript**（JavaScript的超集，增加了类型定义）、**Tailwind CSS**（一个实用工具优先的CSS框架）、**ESLint**（一个用于识别和报告JavaScript代码中模式的工具）以及一堆东西。本质上只是一些非常有用的库。TypeScript将是类型语言，类型就是类型。Tailwind是一个非常好的CSS库，能让东西看起来很漂亮。ESLint确保你编写好的代码，它正在创建项目结构。它正在仔细检查。它还在安装一些库，包括显示Markdown和GitHub风格的Markdown（GFM），如果有人好奇的话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, let's see what um this cursor agent does. It's going to run a bunch of install files. So, it's going to create a next app. It's going to install TypeScript, Tailwind, ESLint, a bunch of stuff. Um, essentially just a couple libraries that will be very useful for you to use. Um, TypeScript will be the typing language and the types will be the types. Tailwind is a really nice CSS library that makes things look nice. ESLint make sure you write good code and it's creating the project structure. It's double-checking it. It's also installing a couple libraries including displays of markdown and GitHub flavored markdown which is GFM if anybody's curious about that.</p>
</details>

它开始为我编写一些页面。所以，再次看看这个东西。它快得惊人。街头传闻它是一个经过训练的中文模型。所以我们将看看我们能强迫它显示什么样的非英语字符。但为什么我喜欢Composer One，再次强调，我们正在构建的不是世界上最复杂的应用。它不是超级花哨的。我只是想向你展示它有多快。所以，再次强调，也许这才是初学者的正确做法，也就是说，如果你的Vibe Coding工具在应用功能方面走得太远，那就直接去Cursor，从头开始，使用Composer 1。它会保持非常简单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's starting to write a couple pages for me. And so again, look at this thing. It is blazing fast. Rumor on the street is it's a uh a trained Chinese model. So we'll see what kind of non-English language characters we can force this thing to to show up. But um why I like composer one, again, this is not the most complicated app in the world that we're building. It is not super fancy. I just want to show you how fast it is. So again, maybe this was the right way to do it for beginners, which is, you know, if your vibe coding tool is just going too far in terms of how to uh what features are in your app, just go to cursor and start from scratch and use composer 1. It'll keep it very simple.</p>
</details>

现在，我的编辑器里有一堆文件。这对你们这些编码新手有帮助吗？绝对没有。你知道这些文件是什么意思吗？不可能。当你构建一个应用时，你想看文件吗？不，当你构建一个应用时，你想看应用。所以你真的可以进入代理视图，然后说：“好的，但这个怎么运行？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, I have in the editor a bunch of files. Does this help any of you that are new to coding? Absolutely not. Do you know what these files mean? No way. Do you want to look at files when you are building an app? No, you want to look at apps when you're building an app. And so you can just really just go into the agent and say, "Cool, but how do I run this?"</p>
</details>

它会给你运行它的说明。所以这正在运行一个命令。`npm rundev`运行你的应用的**本地服务器**（local server: 在当前计算机上运行的服务器）。好的。我们可以把它打开。现在我在**localhost**（本地主机：指代当前计算机的网络地址）3001上本地运行着我的个人项目中心。你可以看到这个欢迎文档。完美。这正是我想要的复杂程度。然后是原型，它只是一个小的**Hello World**（编程中常见的入门示例）原型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it will actually give you the instructions on how to run this. So this is running a campaign. Uh this is running a command. npm rundev runs a local server for your um app. Okay. And we can pull this up. And now I have running locally on localhost uh 3001. I have my personal project hub. You can see this welcome document. Perfect. This is exactly the level of complexity I wanted. And then prototypes, which is just a little um hello world prototype.</p>
</details>

我实际上不希望HTML、CSS和JavaScript在这里暴露。所以，我将回到代理视图，然后说：“你几乎做对了。你几乎做对了，但我不需要原型部分的代码片段。我只需要能够放置**路由**（routes: 网页路径或页面地址）。如果你不知道路由，它们就像这个应用中的页面路径，我可以填充代码组件并展示给我的同事。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't actually want the HTML, CSS, and JavaScript exposed here. So, I'm going to go back to agents and I'm going to say you got this almost right. You got this almost right, but I don't need the code snippets snippets in um the prototype section. I just need to be able to put routes. Routes are like page paths. if you don't know routes in this app that I can fill with code components and display to my colleagues.</p>
</details>

所以，它又以为我想要一个真正的原型工具。Vzero以为我想要一个非常真实的原型工具。我只是想字面上有一个地方来展示一些东西。所以它正在生成一个更新。现在你可以创建和编辑Markdown文档。你可以展示原型和路由。让我们看看它是否改进了我想要看到的东西。是的，它切换了将组件代码直接存储在路由文件中，这正是我想要的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again, it thought that I wanted like a real prototyping tool. Um Vzero thought I wanted a very real prototyping tool. I just want literally a place to show show some things. And so it's generating an update. And so now you can create and edit markdown documents. You can um show prototypes and routes. And let's see if it has improved what I want to see. Yeah, switching storing component code directly in the rout route files which is exactly what I want.</p>
</details>

再次强调，你不必阅读这些代码。也许我会发布这个**代码仓库**（repo: repository的简称），你们都可以**fork**（复制）它并自己尝试。但它正在非常快速地创建第二部分，我可以在其中放入一些代码。我之所以想这样做，是因为我想向你展示如何在这种Cursor代码仓库中管理文档。然后我想向你展示如何在这种代码仓库中管理代码。再次强调，我不会向你解释这些代码是什么意思。你可以使用Cursor聊天来阅读所有代码，解释它的意思。我们只是相信它会出现在网页应用中，并且是我想要的。我们正在本地运行它。这里几乎没有最小风险。它是一个相当简单的东西，所以我想给你们一些关于如何在Cursor中从零开始使用一些非常简单的东西的想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Again, you don't have to read this code. Maybe I'll release this repo and you all can fork it and try for yourself. But it's moving very fast to create a second part where I can put some code in. And the reason why I want to do this is I want to show you how you can manage documents in a cursor repository like this. And then I want to show you how you can manage code in a repository like this. Again, I am not going to explain to you what this code means. You can use the cursor chat to read all the code, explain what it means. We're just going to trust that it shows up in the web app and it's what I want. We're running it locally. There is very little minimal risk here for the most part. Um it's a pretty simple thing and so I just want to give you all a couple ideas on how to get started 0ero to one with something that's really simple in cursor.</p>
</details>

好的，这正是我想要的，我不想让应用允许我创建原型。我只是想能够编写它们并展示给你们。所以，我只需要在这个代码库的目录中创建目录，并用文档来展示它们。它的工作方式真的很酷。所以，一旦完成，我会做的一件事就是说：“这正是我想要的。请向我解释这两个面向用户的功能是如何工作的，并在主页上放置一些说明。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, this is exactly what I want, which is I don't want the app to like let me create prototypes. I literally just want to be able to code them and show them to you all. And so I just have to create directories in this directory in my codebase and show them with documents. It's really cool how it works. So one of the things I would do once this is done is I would say this is exactly what I want. Please explain to me how the two um userfacing functions work and actually put some instructions on the homepage.</p>
</details>

再次强调，我不会阅读代码。我们正在快速进行，但我确实想确保我理解它是如何工作的。所以它将在我的应用主页上放置一些文档，以解释它是如何工作的。好的，让我们阅读文档是如何工作的。我点击一个新文档。它会创建一个Markdown文档。文件存储在docs目录中，这很棒。可以直接在浏览器中编辑，并有实时预览，这正是我想要的。而原型我只是在我的代码编辑器中手动创建。我在原型中创建的任何目录都会自动显示在这里，我可以创建一个演示页面应用，它就会运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again, I'm not going to read the code. We're doing this fast, but I do want to make sure I understand how it works. And so it's going to put in some documentation directly in the um homepage of my app to explain how it works. So okay, let's read how documents work. I click a new doc. It creates a markdown document. Files are stored in the docs directory which is great. Can be edited directly in the browser with live preview which is exactly what I want. And prototypes I just manually create them in my code editor. Any directory I create in the prototypes will automatically appear here. and I can create a demo page app and it will go.</p>
</details>

现在，这正是我想要的开始。再次强调，大约10分钟就能让它运行起来，这是一个更简单的起点，我们可以在这里开始处理我们的个人项目中心。所以，虽然我在Vibe Coding工具上失误了，但这并不重要。重要的是我达到了我想要达到的目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, this is exactly what I wanted to start with. Again, about 10 minutes to get this going and it's a much simpler place for us to start working on our personal project hub. And so, while I had a misfire with a vibe coding tool, does not does not really matter. All that matters is that I got to the thing that I wanted to get to.</p>
</details>

### 使用GitHub进行版本控制

好的，接下来我们谈谈我将如何实际使用这些流程。我将如何设置一些Cursor风格的规则和代理来管理我的工作。我将向你展示如何创建文档以及如何通过Vibe Code创建原型。好的。我有点懒，没有初始化**GitHub**（一个用于版本控制和协作的平台）**代码仓库**（repo: repository的简称）。但对于所有非技术人员来说，这是一个非常重要的步骤。我知道对于软件工程师来说，**Git**（一个分布式版本控制系统）是我们管理代码项目的第二天性。但再次强调，这是一个“安全空间”节目。所以我们将告诉你如何初始化GitHub代码仓库以及你可以用它做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's talk about next how I would actually use each of these kind of flows. How I would set up some cursor style rules and agents to kind of manage what um how my work happens here. And I'll show you how to create a document and how to create a prototype in vibe code along the way. Okay. So I was a lazy girl and did not initialize a GitHub repo. But this is a very important step for any of the technical non-technical folks out there. I know for software engineers, git is sort of secondhand on how we manage our code projects. But again, this is a safe space episode. So we are going to tell you um how to initialize a GitHub repo and what you could use it for.</p>
</details>

再次强调，这是一个为非技术人员准备的节目。只需使用**GitHub Desktop**（GitHub的桌面应用）。它将使Git的**基本操作**（primitives: 指Git中文件、更改跟踪、差异、拉取请求等核心概念）变得更容易学习，例如文件、更改跟踪、**差异**（diffs: 显示文件更改的部分）、**拉取请求**（pull requests: 在协作开发中合并代码的机制），如果你通过下载的GitHub Desktop应用进行可视化操作，而不是试图通过**命令行界面**（CLI: Command Line Interface）来理解这些。所以，这是一个问题，当然你可以让你的AI代理通过Git在CLI中为你进行**提交**（commits: 将代码更改保存到版本历史中）等操作，但我认为GitHub Desktop应用的视觉效果真的能帮助你理解代码中发生了什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And again, this is an episode for nontechnical folks. Just use the GitHub desktop app. It will make the primitives of Git in terms of files, change tracking, diffs, pull requests so much easier to learn if you visually use the downloaded GitHub desktop app versus trying to understand this through the command line. So, it's one of these things that um sure you can have your AI agent sort of like vibe code you commits and things like this using git in the CLI and I just think the visual of the GitHub desktop app is really going to help you understand what's going on in your code.</p>
</details>

所以，我们将把这个**代码仓库**（repository: 存储项目文件和修订历史的地方）添加到GitHub。它在我的项目中，叫做SIBO。我们将创建那个代码仓库。我们只是要，是的，添加一些东西到**git ignore**（一个文件，用于指定Git应忽略的文件或目录）文件。创建代码仓库。让我们看看发生了什么。它应该在我的GitHub应用中创建这个。它已经创建了。你可以看到我的初始**提交**（commit: 将代码更改保存到版本历史中）包含了所有原始文件。然后是git ignore，它指定了Git将忽略哪些文件。我将提交所有内容。我们应该可以开始了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, we're going to add this repository to GitHub. I it is in my projects and it's called SIBO. Um and we're going to create that repository. We're just going to yeah add some stuff to the git ignore file. Create the repository. Let's see what's happening. It should be creating this in my GitHub app. And it has. And you can see my initial commit has all the original files. And then um get ignore which is what files are going to be ignored by git. I'm just going to commit everything. And we should be good to go here.</p>
</details>

我们会看看进展如何。你可以通过以下方式了解Git的工作原理：如果我向这个新文档添加了一些内容，新的标题，保存它，然后切换到我的GitHub代码仓库。实际上，你无法看到我指向的地方，我将在这里做。你实际上可以看到这里的更改。绿色表示添加，红色表示删除。正如你所看到的，这是一个很好的方式来跟踪你的应用中发生的更改。我实际上将放弃这些更改。你可以在我的代码中看到它们被放弃了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'll see how how it goes. Um, you can see how git works by if I added something to this new doc, new headline, saved it, and I switched over into my GitHub repository. Actually, I you you can't see me point at the I'm going to do this here. You can actually see this change here. Green means added, red means removed. And as you can tell, it's a great way to track the changes that are happening in your application. I'm actually going to discard those changes. And you can see here they are discarded here in my code.</p>
</details>

所以现在我的GitHub正在运行，很棒的是我可以在这个应用中开始实际工作了。再次强调，如果你们不记得，我的应用基本上做两件事。它跟踪文档并帮助你创建原型。所以，我们将介绍我将如何设置一个个人项目中心来完成这两件事，展示Cursor的一些用例，然后也许我们还会展示一些Claude Code。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now that I have GitHub running, what's great is I can start actually working in this app. And again, if you all um don't remember, it does sort of two things. My app does two things. It tracks documents and it helps you create prototypes. So, we're going to go through how I would set up a personal project hub to do both of these things, showing off some of the use cases of um cursor and then maybe we'll show a little bit of cloud code as well.</p>
</details>

### 使用AI代理管理文档（PRD）

如果我要为文档创建一个个人中心，我会做的一件事就是创建一些规则。我会在一个代理文件夹中创建这些规则，因为我想要一个文档代理。所以，我将创建一个名为`agents`的新文件夹。然后我将创建一个名为`prd.md`的新文件。那个代理将帮助我创建PRD。我将在聊天中说：“你能填写P-sign prd吗？这是一个空白文件，用于代理指令，以便在应用中编写出色的PRD文档。看看它是否在docs文件夹中显示该文件夹。PRD应该用Markdown编写，并且指令长度应少于500行，供我们的AI代理遵循。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if I were creating a personal hub for documentation, one of the things that I would do is actually create some rules. And I would create those rules in an agents folder because I want a documentation agent. And so I'm going to create a new folder called agents. And I'm going to create a new file called prd.md. And that agent is going to um help me create PRDs. And I'm going to say in this chat, can you fill out P sign prd? This is a blank file to be agent instructions to write a great PRD in the appmention docs. See if it's showing the folder in the docs folder. Um, PRDS should be in markdown and the instructions should be less than 500 lines long for our AI agent to follow.</p>
</details>

好的，这是一种独特的定义方式，你知道，在Claude Code中它被称为“技能”。在Cursor中，你可以把它做成一个小的代理指令。好处是你可以让AI为你创建它。所以这是我的PRD编写代理指令。它告诉它你是谁。这是目的。这是结构要求等等。现在我要说的是，我们是单打独斗。我不需要执行摘要，因为我目前没有任何高管，我也不关心他们，我希望我的PRD更具功能性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so this is just a unique um way to define, you know, in cloud code it's called a skill. Here in cursor you can make it a little agent instruction. And what's nice is you can have the AI actually create it for you. So this is my PRD writing agent instructions. Um it tells it who you are. Here's the purpose. Here's the structure requirements, etc. Now what I'm going to say is we're rolling solo. I don't need an executive summary because I just don't care about executives because I don't have any right now and I want my PRDs to be much more functional.</p>
</details>

所以我会说这很好，但请让模板更侧重于技术要求，而不是业务要求，就目前这个用例而言。所以它将重构这个文件，并对模板进行一些改进，你将看到这些改进被应用到这个文件中。然后我将使用这个文件来编写未来的PRD。你可以看到它运行得非常非常快。我让它完成，然后向你展示我将如何使用它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what I would say is this is fine but make the template much more functional around technical requirements versus business requirements for right now for this use case. Um so again it's going to refactor this file and give um some improvements on the template and you will see those improvements be shipped into this file. And then what I'm going to use is I'm going to use this file to then write PRDS moving forward. Um you can see it's it's going very very fast. I'll let it finish up then I'll show you how I would use it.</p>
</details>

好的。所以这个代理文件完成了，你可以在这里看到它给出了一个角色、一些关于其目的的核心原则、一个PRD结构，然后如果它是一个好的代理，最后应该给出一个要遵循的步骤清单。所以这将是额外的指令，我将在编写PRD时能够输入到Cursor中。这保存在这个`agents`文件夹中。这是我喜欢放置指令的地方。这是一种非常简单的方式来引用它们。它使它们井井有条，你可以创建任意数量的此类指令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So this agent file is done and you can see here it gives it a role some core principles on its purpose a PRD structure and then it should give at the end if it's a good um agent uh a checklist of steps to follow. And so this is just going to be additional instructions that I'm going to be able to feed into cursor when I write a PRD. And this is saved in this agents folder. This is where I like to put my instructions. Just a really easy way to app mention them. Keeps them organized and you can create as many of these as you want.</p>
</details>

好的，既然我写了这些代码，我将切换到GitHub Desktop，看看这些代码是否已添加。然后我将把它**提交**（commit: 将代码更改保存到版本历史中）到主分支。别告诉工程师。我们今天就提交到主分支。我改天再谈分支，但今天我们只是提交到主分支，因为我只是在本地运行它。所以我将提交这个`agents PRD`。我将选择这个文件，然后说“创建prd”。这是一个非常好的占位符提交。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so since I've written this code, I'm just going to bop over to GitHub desktop and see that that code was added. And then I'm going to commit this to main. Don't tell the engineers. We're just going to commit to main today. Um I will talk about branches another day, but today we're just committing to the main branch because I'm just running this locally. And so I'm going to commit this agents PRD. And I'm just going to select this file and say create prd. That's a perfectly fine placeholder um commit.</p>
</details>

现在这些代码已经提交到我的**代码仓库**（repository: 存储项目文件和修订历史的地方）了。现在，这真的很棒，如果我查看我的历史记录，我实际上可以撤销提交。我可以修改提交。我可以做很多事情。这只是让你一步一步地检查你对文件所做的更改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now that code has been committed to my repository. Now what's really nice about this is if I go in my history, I can actually undo the commit. I can amend the commit. I can do a bunch of stuff. And this just lets you check in step by step the changes you've made to your files.</p>
</details>

好的。那么我将如何使用这个代理呢？非常简单。我会说：“太棒了，现在为我写一个PRD，我们今天想原型什么呢？”哦，我正在和我的孩子一起工作。所以这又是一个非常个人化的代码仓库。我正在和我的孩子一起帮助他在城市里为我们的邻居做园艺、除草和清扫工作。所以我要做的是：“帮我写一个PRD，为一个小型日程安排应用，我的孩子可以通过它让我们的邻居安排除草、倒垃圾和清扫车道。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. And then how would I use this agent? So really easy. I would say great now write me a PRD for what do we want to prototype today? Oh, I'm working with my kid. So this again, it's a very personal u personal repository. I'm working with my kid on helping him do gardening and like weeding and sweeping work for our neighbors in the city. And so I'm going to do help me write a PRD for a little scheduling app where my kid can have our neighbors schedule help with weeding, taking out trash cans and sweeping their driveways.</p>
</details>

好的，这非常重要。它将读取那个PRD Markdown文件，即代理指令，然后Cursor实际上可以遵循这些指令，在正确的文件夹中创建一个文档。我给出这个例子的原因当然是你可以直接在那个docs文件夹中编写PRD，或者当然你可以使用其他模板。但我真正喜欢的是向你展示如何在一个代理中定义一个工作流程，引用那个工作流程，然后用它来在这个我们从零开始创建的代码库中创建不同的资产。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, this is very important stuff. And what it's going to do is it's going to read that PRD uh markdown file that agent instructions and then cursor can actually follow those instructions to create a document in the right folder. And the reason why I give this example is of course you could just straight write a PRD in that docs folder or yes of course you could use some other template. But what I really like is just showing you how you can define a workflow in agents, reference that workflow, and then use that to create different assets in this codebase that we've created 0 to 1.</p>
</details>

所以现在我有了这个邻里任务调度器PRD。现在神奇之处在于它会出现在我们的应用中吗？我认为答案是肯定的。让我们刷新一下，邻里任务调度器PRD在这里的应用中。我实际上可以阅读它。在这里，看看它是什么样子。它非常长。对于一个独立创始人来说，这太长了。所以，我可能会回到那个代理PRD，并添加一个步骤来真正减少这些文档的长度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now I have this neighborhood task scheduler prd um PRD here. Now the magic will be will it show up in our app? And I think the answer is yes. Let's refresh neighborhood taskuler PRD here in the app. I can actually read it. Um here, see how it looks. It's very long. This is too long for a solo founder. So, what I might do is go back to that agents PRD and add a step that really reduces the length of those documents.</p>
</details>

好的。那么这样的东西有什么好处呢？我不仅可以拥有这个漂亮的网页应用来显示我的PRD，我还可以将这些PRD或文档存储在一个本地代码**代码仓库**（repository: 存储项目文件和修订历史的地方）中，我可以用Cursor或我喜欢的任何AI代码工具直接编辑它们。我可以创建一个代理，提供关于如何随着时间推移一致地创建这些文档的指令。我还可以进行代码和更改跟踪，以查看我何时添加了新文档以及如何添加的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So, what's the benefit of something like this? Not only can I have this nice little web app where my PRDs are displayed, I can store those PRDs or documents in a local code repository that I can edit with AI directly with cursor or whatever my AI preferred code is. I can create an agent that gives instructions on how to actually create those consistently over time. And I can do code and change tracking to see when I added new documents and how I added them.</p>
</details>

所以，虽然这可能看起来有些小题大做，你也可以只用Google文档或类似的东西。但我认为这种文档创建、存储和显示的工作流程对于任何想开始使用AI编码但又需要实际应用的人来说，都是一个非常好的选择。我能想象产品经理会用它来在Cursor中进行头脑风暴。我认为这样做的好处，正如你在Chime的Dennis那集节目中看到的那样，它能让你更多地了解这些工具的实际工作原理。让你更熟悉这些代码编辑器，然后当你进入M代码体验时，你就会对所有这些工具的工作方式有所了解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so while this may seem like overkill, you could just do a Google doc or something like this. I think this document creation and storing and display workflow is a really nice one for anybody looking to get started with coding with AI, but needs kind of a practical application. And what I can imagine product managers do with this is start to just brainstorm in cursor. The reason why I think it's good to do that as you saw in Dennis from Chime's episode is it just gives you a way to understand a little bit more about how these tools actually work. Get more comfortable with these code editors and then as you move into M code experiences you then kind of have a sense of how all these tools work.</p>
</details>

所以，为了再次总结这个应用的部分，我们已经创建了我们个人项目中心应用的一半。它在网页应用中显示我们存储在这个文档文件夹中的Markdown文档。而且我创建了一个AI代理来实际创建这些文档，这在PRD Markdown文件中定义了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so just to resummarize this piece of the app, we've created half of our personal project hub app. It displays documents that we store in this documents folder in markdown in a web app. Um, and I've created an AI agent to actually create those documents, which is defined in this PRD Markdown file.</p>
</details>

### 构建交互式原型

接下来，我们实际上要编码。所以，我将向你展示如何编码这样的东西，如何在前端显示它，然后我们会在最后做一些收尾工作，结束这集迷你节目。好的，太棒了。所以，我创建了一个PRD，用于一个小型日程安排应用，我的孩子可以通过它让邻居安排除草、倒垃圾和清扫车道。现在，我想为它的工作方式构建一个原型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, we're actually going to code. So, I'm going to show you how to code something like this, show it in the front end, and then we'll put a couple bows on the end and send you off at the end of this little episode. Okay, great. So, I've created a PRD with um for a little scheduling app for my kid where he can have his neighbor schedule help with weeding, taking out trash, and sweeping their driveways. Now, I want to build a prototype for how this works.</p>
</details>

如果你还记得我最初的需求和网页应用中的说明，它的工作原理是：我将创建**路由**（routes: 网页路径或页面地址），它们是原型页面内部功能的小型子目录或文件夹，它将显示在这个列表中供人们查看。现在我给出一个简单有趣的例子，但你可以想象在工作中，你可以开始创建自己的原型**代码仓库**（repository: 存储项目文件和修订历史的地方），你正在玩转、查看并学习如何用代码实现它们。所以，我将回到Cursor。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you recall in my original requirements and in the web app the instructions basically how it works is I'm going to create routes which are little subdirectories or folders of functionality inside the prototypes page um and it will show up here in this list for people to see. Now I'm giving a simple silly example but what you can imagine is at work you could start to create just a repository of your own prototypes that you're playing with that you're looking at and you're learning to code with. So, I'm going to go back in cursor.</p>
</details>

现在我创建了这个PRD，我可以说：“太棒了，使用这个PRD来创建一个原型。它是可点击的，但不必完全具备功能性，例如不需要数据库等，把它放在`prototypes`文件夹中，这样我就可以展示它可能如何工作。超级简单，轻而易举。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now that I've created this um PRD, I can say great, use this PRD to create a prototype. Clickable, but does not have to be totally functional um with database etc. in the prototypes folder so that I can show a little of how this might work. Super simple, easy peasy.</p>
</details>

再次强调，我想要一个原型。我不想让Cursor去设置数据库或任何那些愚蠢的东西。我真的只是想创建一个可点击的原型。再次强调，我认为这对产品经理来说是一个技巧。当你创建自己的本地**代码仓库**（repository: 存储项目文件和修订历史的地方）时，你可以避免像弄清楚数据库这样的事情，特别是如果你只是想用它来做原型设计，这正是我要给出的例子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Again, I want to make it a prototype. I don't want cursor to go off and like ask me to set up a database or any of those silly things. I really just want to create a clickable prototype. Again, I think this is a tip or trick for the product managers out there. when you're creating your own local repository like you can avoid stuff like figuring out o you can avoid stuff like figuring out databases especially if you're just trying to use this for prototyping which is the exact example I'm going to give.</p>
</details>

所以，我将让它运行。它将构建不同的文件，你可以看到它创建了`prototypes taskuler prototype`。它正在创建一个页面。我将保留所有这些更改。我将切换到网页应用。我将刷新。我看到`taskuler`在这里。它有一个登录。现在，我不知道这是如何工作的。所以，我将问聊天：“我用什么登录？我如何登录？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so I'm going to let it run um it's going to build different files in you can see it created prototypes taskuler prototype it's creating a page I'm going to keep all those changes I'm going to bop over to the web app. I'm going to refresh. I see taskuler in here right now. And it has a sign in. Now, I don't know how this works. So, I'm going to ask the chat, do I sign in with something? How do I sign in?</p>
</details>

它可能会告诉我只需点击按钮。所以，使用任何电子邮件和密码。完美。简单。所以，我将使用`hello@chatpurd.ai`作为电子邮件，并输入密码。我可以看到文本是灰色的。我将截取这个糟糕的屏幕截图，稍后修复。哦，好的。然后我们有邻里任务。你可以创建一个任务。你可以看到所有不同的任务。这正是我想要的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's probably going to tell me just to click the button. So, use any email and password. Perfect. Easy. So, I'm going to do hello@ chatpurd.ai. and password. And I can see that the text is gray. I'm going to actually take a little screenshot of this bad boy to fix later. Oh, okay. And then we have neighborhood tasks. And you can create a task. You can see all the different tasks. This is exactly what I wanted.</p>
</details>

所以，它不是最漂亮的应用程序。它可能也不是最好的代码，但如果你只是想开始使用Cursor在真实代码中创造价值，我想跳过这些Vibe Coding工具，直接进入代码。我实际上可以看到这个，并理解这个工具可能如何工作。然后我可以在Cursor中来回切换，向它解释我想要什么，我希望它如何修复，所有这些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again, it's not the prettiest app. It's probably not the best code, but if you're just trying to get started with how do I start to use cursor in real code to drive value? I want to skip these vibe coding tools. I want to go straight to the code. I can actually see this and understand how this tool might work. And then I can go back and forth in cursor and explain to it what I want, how I want it to be fixed, um, all that kind of stuff.</p>
</details>

所以，我实际上将把那个屏幕截图拖进来，然后说：“字段的文本似乎是灰色的。请修复。”我可以在这些代码上反复修改。如果我心情好，我实际上可以进入代码本身。我可以阅读它。我可以让Cursor解释这些代码。再次强调，我只是想给你一些启发，作为一个非技术人员，你如何使用Cursor来做一些非常基本但回报很高的代码工作，无论是在你看到的东西还是你学到的东西方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I'm actually going to drag that screenshot in and say it seems like fields have gray text. Please fix. And I can go back and forth and iterate on this code. If I'm feeling fancy, I can actually go into the code itself. I can read it. I can ask cursor to explain this code. Again, I'm just trying to give you inspiration as a non-technical person, how you could use something like cursor really to do very basic things in code, but that have high payoff in terms of what you see and what you learn.</p>
</details>

所以，让我们看看这是否能修复我们的小登录问题。我们将退出。哦，看那个。现在，它修复了。它看起来好多了。所以，我们对我们的原型非常满意。现在你可以想象，你只需进入Cursor，说“在一个新文件夹中创建一个新原型”，它就会为你创建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, let's see if this fixes our little login. We're going to sign out. Oh, look at that. Now, it's fixed. It looks so much better. So, we're really happy with our prototype. And you can imagine now you can just go into cursor say create a new prototype in a new folder and it will create it for you.</p>
</details>

当然，我们还会去GitHub。我们将**提交**（check in: 提交代码更改）日程安排原型，并将其提交到主分支。我将把这个**代码仓库**（repository: 存储项目文件和修订历史的地方）发布到我的个人代码仓库中。我将把它命名为“个人项目中心”并发布。这只是将其推送到云端，这样你就可以在线访问它，而不仅仅是本地。让我们看看。一切都看起来好多了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And again of course we're going to go to GitHub. We're going to check in um scheduling prototype and commit its main. I'm going to publish this repository in my um personal repository. I'm going to call it personal project hub and publish it. That's just going to push it to the cloud so you have a place to access it online. It's not just local. And let's see. It's all looking so much better.</p>
</details>

### 收尾工作与总结

所以，我对此非常满意。现在，我将向你展示我可能在这个应用中做的一些其他事情，以使事情变得更好。第一，我将启动一个新代理，然后说：“你能更新这个**代码仓库**（repo: repository的简称）的**README**（一个文件，通常包含项目介绍、安装和使用说明）吗？”README通常是关于代码仓库如何工作的主页说明和演练。所以，我强烈建议当你达到功能的起点或终点时，更新你的README文件。这是代理以及其他工程师可以用来理解你的代码如何工作的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm really happy with this. Now, I'm going to show you a couple other things that I might do in this app to make things better. Number one, I'm going to start a new agent and say, can you update the readme for this repo? The readme is generally like the front page instructions and walkthrough of how the repository works. So, I highly recommend when you get to a starting point or a stopping point with your functionality to update your readme file. This is something that agents as well as other engineers could use to understand how your code works.</p>
</details>

所以这将告诉我们有哪些功能，如何安装它，我们创建的所有文件是什么，如何使用它等等。这在几秒钟内就创建好了。所以我强烈推荐这样做。然后，我们再次要继续**提交**（commit: 将代码更改保存到版本历史中）这些README更改。我可能在这里做的第二件事是让它看起来更漂亮。所以，我想我们将以Claire的“如何让东西在Cursor中看起来更漂亮”指南来结束这集迷你节目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so this is going to tell us what the features are, how to install it, what all the files are that we created, how to use it, etc. And that was created in just a few seconds. So that's something I highly recommend. And then again, we want to just go ahead and commit these readme changes. The second thing that I would probably do here is make it look nicer. So, I think we're going to wrap this mini episode with Claire's guide to making things look nicer in cursor.</p>
</details>

我们看看能否在几分钟内完成。所以，我将在这里再次开始一个新的聊天。我们将使用Composer。它很快。我们喜欢它。嗯，我们将回到。我实际上不关心原型看起来更漂亮。我关心这个主页看起来更漂亮。这真的，真的，真的很糟糕。所以，我将打开Cursor。我将说：“我不喜欢这个应用主页的基线设计。请提升设计，使其更漂亮、更可爱。将其重命名为‘个人中心’，并使其不那么基础。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'll see if we can do this in just a couple minutes. So, I would start a new chat here again. We're going to use Composer. It's fast. We like it. Um, and we're going to go back. I don't actually care about the prototype looking nicer. I care about this homepage looking nicer. This is really, really, really sad. So, I'm going to open cursor. I'm gonna say I don't like the baseline design of the home page of this app. Please uplevel the design to be prettier and cuter. Rename it to uh let's call it personal hub and make it less basic.</p>
</details>

再次强调，提示词很糟糕，但我们将看看它会做什么。它将审查主页。我认为“更漂亮、更可爱”在这里是非常棒的指令。所以，我们将看看当我提示它看起来更好一点时，我最终会得到什么。哦，它将是一个舒适的文档工作区。这，我不知道。它让我很高兴。它看起来很傻，但很可爱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Again, terrible prompting, but we're going to see what it does. It's going to review the homepage. I think prettier and cuter is great instructions here. So, we're going to see what I end up with when I prompt it to look a little bit nicer. Oh, it's going to be a cozy workspace for documents. This is I don't know. It makes me happy. It's stupid looking, but it's cute.</p>
</details>

所以，再次强调，当你在本地工作时，谁在乎呢？让它有趣，让它有创意，玩转它，添加暗模式，所有这些。我喜欢它。你知道，我喜欢渐变。你知道，我喜欢粉色。我将**提交**（check in: 提交代码更改）这些更改。我将称之为“漂亮又可爱”，然后就结束了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so again, when you're working on something locally, who cares? Make it fun, make it creative, play with stuff, add dark mode, all those things. I love it. You know, I love a gradient. You know, I love a pink. I'm going to check in these changes. I'm going to call it pretty and cute and call it a day.</p>
</details>

所以，这就是我如何从零开始创建一个代码库的演练，它能帮助你整合文档（包括PRD）并帮助你构建原型。我认为这对于任何人，特别是那些想开始使用Cursor编写和编码的产品经理来说，都是一个非常好的基线**代码仓库**（repository: 存储项目文件和修订历史的地方）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this was my walkthrough of how to create 0ero to one a codebase that helps you consolidate documents including PRDS and helps you build out prototypes. And I think this is just a really good baseline repository for anybody especially product managers who are wanting to get started with writing using something like a cursor and coding using something like a cursor.</p>
</details>

再次强调，你可以继续扩展它，添加更多原型，添加更多文档，然后开始。那么我们的步骤是什么？我们在ChatPRD中创建了一个PRD。我们尝试将该PRD发送到vzero.app。我们获得了太多功能。它太聪明了。所以，我们重新开始。我们在桌面上创建了一个干净的文件夹。我们在Cursor中打开了那个文件夹。我们指示它创建一个**Next.js**（一个基于React的JavaScript框架）应用，完成这两件事。然后我们创建了一个代理文件来编写我们的PRD文档，然后我们通过Vibe Code或**AI辅助编码**（AI assisted coded: 利用人工智能工具辅助代码编写）编写了我们的第一个小型原型，它也显示在这个应用中。我们让它更漂亮。我们添加了一个**GitHub**（一个用于版本控制和协作的平台）**代码仓库**（repository: 存储项目文件和修订历史的地方）。我们**提交**（checked in: 提交代码更改）了我们的代码，并添加了一个**README**（一个文件，通常包含项目介绍、安装和使用说明）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And again, you can continue to extend this, add more prototypes, add more documents, and get started. So, what were our steps? We created a PRD in chat PRD. We attempted to send that PRD to vzero.app. We got way too much functionality. It was too smart for its own good. So, we started all over. We created a clean folder on our desktop. We opened that folder in cursor. We instructed it to make a Nex.js JS app that does these two things. Then we created an agents file to write our PRD documents and then we vibe coded or AI assisted coded our first little prototype that also gets to displayed in this app. Um we made it prettier. We added a GitHub repository. We checked in our code and we added a readme.</p>
</details>

所以我希望这正是你们一直在寻找的“安全空间”节目。我总是被问到这个问题。如果你这辈子从未写过一行代码，我希望这能给你一个开始在自己的个人空间中玩转的起点。How I AI还有很多其他节目可以融入这个工作流程。这只是一个很好的入门节目。我希望你喜欢这集How I AI的迷你节目。谢谢大家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I hope this was the Safe Space episode you all were looking for. I get asked for it all the time. And if you have never written a lick of code in your life, I hope this gives you a place to get started playing with your own personal space. There are lots of other episodes of How I AI that can feed into this workflow. This is just a good one to get started. And I hope you've enjoyed this mini episode of How I AI. Thanks y'all.</p>
</details>

非常感谢您的收看。如果您喜欢本节目，请在YouTube上点赞并订阅，或者更好的是，留下您的评论和想法。您还可以在Apple Podcasts、Spotify或您最喜欢的播客应用上找到本播客。请考虑给我们评分和评论，这将帮助其他人找到本节目。您可以在howiipod.com查看我们所有的节目并了解更多信息。下次再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks so much for watching. If you enjoyed this show, please like and subscribe here on YouTube, or even better, leave us a comment with your thoughts. You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app. Please consider leaving us a rating and review, which will help others find the show. You can see all our episodes and learn more about the show at howiipod.com. See you next time.</p>
</details>