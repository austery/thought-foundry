---
author: How I AI
date: '2026-02-04'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=Yb9IyTOh0xg
speaker: How I AI
tags:
  - ai-development
  - git-integration
  - agentic-workflow
  - generative-ui
  - developer-experience
title: 人人皆可编程：v0 如何将 Git 工作流引入 AI 编程
summary: 本期访谈中，Vercel 首席执行官 Guillermo Rauch 与 Claire Vo 深入探讨了 Vercel 的 AI 编程工具 v0。他们展示了 v0 如何通过集成 Git 工作流，使开发者能够从原型快速迭代到生产环境，并安全部署变更。讨论涵盖了 v0 在技能管理平台 skills.sh 中的应用、其对企业开发流程的效率提升，以及 AI 在图像生成、视频生成和物理 AI 等非编码领域的创新用例。访谈还触及了 v0 如何通过提供调试工具和强大的计算环境，帮助用户克服 AI 编程中的挑战，并展望了 AI 驱动的协作式开发和应用商店部署的未来。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - Vercel
  - GitHub
  - LaunchDarkly
  - Google
  - ESPN
  - Upstash
  - Snowflake
products_models:
  - Vzero
  - skills.sh
  - Next.js
  - VS Code
  - GPT
  - Nano Banana
  - D0
  - Recraft models
  - Remotion
  - 3JS
  - AI Gateway
  - Vesta board
  - Cursor
  - React Native
  - Sandbox
  - AI SDK
  - Opus 4.5
  - Cladbot
  - Moldbot
media_books:
  - How I AI
status: evergreen
---
### AI 编程与 Git 工作流

**Guillermo Rauch**: 关于 AI 编程，我想说一件事：从零到一真的很容易。我想我们都看过那些 AI 提示的演示，它们很酷。我认为更难的是在一个项目上进行大规模迭代并安全地部署更改。每个营销人员总会在某个时候想要更改页面，而以前的方式有两种。一种是我所说的你必须向“政府”请愿，你必须去找工程师说：“工程师，请你在这里添加一个标志或什么的”，或者祈祷 CMS 完美地配置好以满足你所有的抱负、梦想或想法。所以现在他们可以直接在 **Vzero** 中打开这个页面，并提示他们想要的任何东西。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: I'll say one thing about VIP coding. It's really easy to go from zero to one. I think we've all seen the demos of I prom thing and it's cool. I think what's harder is to iterate on a project at scale and to deploy changes safely. Every marketer ever sells to change this page at some point and the old way was one of two ways. One is what I called you had to petition to the government. You had to go to engineers and say, "Engineers, can you please add a logo over here or whatnot or pray that the CMS was perfectly wired up for any ambition or dream or idea you had. So now they can just open this page in VZ and prompt anything that they want.

</details>

**Claire Vo**: 它大大降低了让东西上线的摩擦。优先级的“屈辱仪式”消失了，你实际上可以将时间集中在捍卫一个想法的优点上，而不是仅仅停留在想法的假设阶段，然后才去实现它。所以，我认为它以一种非常重要的方式改变了公司的速度。

<details>
<summary>Original English</summary>

**Claire Vo**: It reduces the friction of getting something live really, really low. The humiliation ritual of prioritization goes away and you can actually focus your time on defending the merits of an idea on the actual idea as opposed to the hypothesis of the idea that then has to be implemented. And so I think it changes the speed of companies in a really significant way.

</details>

### Vzero 与 skills.sh

**Claire Vo**: 这确实是我们第一次一起做的“氛围播客”，我想先介绍一下自己。我是 **Claire Vo**，一位产品负责人，对 AI 非常着迷。我有一个播客叫 **How I AI**，我在其中教人们如何利用所有这些新工具（包括我们今天将看到的工具）更好地进行构建。我很高兴你能来这里，G。首先，我们直接进入大家都在好奇的问题：你本周在 **Vzero** 上发布的最喜欢的功能是什么？

<details>
<summary>Original English</summary>

**Claire Vo**: So this is truly a first time vibe podcast that we're doing together and I wanted to introduce myself. I'm Claire Vo. of a product leader and obsessed with AI and I have a podcast, How I AI, where I teach people how to build better with all these new tools, including ones that we're going to see today. And I'm really excited to have you here, G. First, we're just going to get to the the thing that everybody's wondering about. What is your most favorite feature that you released this week on VZero?

</details>

**Guillermo Rauch**: 嗯，我告诉你，今天 AI 领域最热门的东西就是技能（skills）。每个人都对我们现在能够通过技能来增强代理、AI 应用程序和代理工程感到兴奋，这些技能是模型尚未拥有的。所以我们推出了 **skills.sh**。我们今天将向你展示的精彩之处在于，**Vzero** 可以真正地从原型一直走到生产。所以我们能够构思像 **skills.sh** 这样的更改。我很快给你展示一下。**skills.sh** 是一个新的平台，你可以把它想象成 npm。它是一个技能的中心，一个开放的生态系统，这个网站正在发生的事情非常引人注目。你可以看到我们现在有 34,000 个由社区提交的技能，这个网站已经在互联网上病毒式传播。它托管在 **Vercel** 上，但对我来说最令人兴奋的部分是它是在 **Vzero** 中构思出来的。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Well, I'll tell you the hottest thing in AI today is skills. Everyone is excited about the fact that we can now augment agents and AI applications and agentic engineering with skills like skills that the model doesn't yet have. And so we launched skills.sh and the beautiful thing about what we'll show you today is that Vzero can seriously go from prototype all the way to production. So we're able to conceive changes to things like skills.sh. I'm going to show you really quickly. Skills.sh SH is a new you can think of it as like npm. It's a hub an open ecosystem of skills and it's pretty dramatic what's happening to this site. So you can see that we now have 34,000 skills submitted by the community and this website has gone viral all over the internet. It's hosted on Verscell but the most exciting part to me is that it was conceived in Bzero.

</details>

**Claire Vo**: 我想问观众一个快速问题。有多少人在过去一周安装了技能？

<details>
<summary>Original English</summary>

**Claire Vo**: I have a quick question for the audience. How many of you have installed a skill in the last week?

</details>

**Guillermo Rauch**: 哦，哇。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Oh wow.

</details>

**Claire Vo**: 好的。很多人。

<details>
<summary>Original English</summary>

**Claire Vo**: Okay. A lot of people

</details>

**Guillermo Rauch**: 技能构建。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: skill build.

</details>

**Claire Vo**: 嗯，你们中有多少人安装了前三个？

<details>
<summary>Original English</summary>

**Claire Vo**: Um, how many of you have the top three installed?

</details>

**Guillermo Rauch**: 实际上，顶部。它在顶部非常集中。就像这些正在迅速传播。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Actually, top it's very heavy at the top. Right. It's like these are ripping.

</details>

**Claire Vo**: 哦，不。我有前七个。好的。是的，我现在安装了前七个。这是一个非常棒的资源。所以，对于那些可能稍后观看或不熟悉技能的人来说，技能现在是许多这些代理框架正在使用的标准，可以帮助你重新利用和重用最佳实践、分步流程。例如，我使用了这个 **Remotion** 最佳实践，它让我可以导入组件并非常快速地定期创建视频。如果没有这些最佳实践中打包的专业知识，我将无法做到这一点，这些最佳实践是通过一行代码使用 **skills.sh** 安装的。我认为，也许值得揭示一下 **Vercel** 如何构建产品。

<details>
<summary>Original English</summary>

**Claire Vo**: Oh, no. I have top seven. Okay. Yeah, I have the top seven installed right now. Um, this is a really great resource. So, for folks that are maybe watching this later or haven't been familiar with skills, skills is now this standard that a lot of these agentic frameworks are using. to help you repurpose and reuse best practices, step-by-step flows. And so, for example, I use this Remotion best practices one um to let me import components and regularly create videos really, really quickly. And I would not have been able to do this without the expertise that's been packaged in these best practices that were installed with one line um using skills.sh. I think it's also worth noting maybe to peel the covers of how Versel builds products.

</details>

**Guillermo Rauch**: 是的。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Yep.

</details>

**Claire Vo**: **Skills** 最初是在灵感迸发的那一刻构思出来的。我们开始提示：“嘿，如果这个东西成形了，那不是很酷吗？”

<details>
<summary>Original English</summary>

**Claire Vo**: Skills out a stage was a thing that was just conceived at the moment of inspiration. We started prompting, hey, wouldn't it be cool if this thing took shape?

</details>

**Guillermo Rauch**: 我们讨论了它应该是什么样子。我们一直称这种风格为“**终端核心**”（**terminal core**），因为它看起来有点像这样——这是我对项目的贡献。我当时想：“嘿，如果我们把网站顶部做得像一个终端，那不是很酷吗？”所以，构建这个的过程本身就是非常提示驱动的。我会在 Slack 里聊天，说：“嘿，如果我们有一个这样的中心，那不是很棒吗？”这在 **Vercel** 的团队成员之间是非常迭代和协作的。再次强调，它真的很酷，因为它非常快，所以它利用了所有 **Vercel** 的基础设施原语，即使它有 35,000 个技能。如果我开始快速滚动，然后随机选择一个，比如 **Swift Taylor Swift**，你会看到页面过渡非常流畅。所有的页面过渡都是即时的，生产级别的。它需要扩展，会有很多人关注这个东西。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Would we discussed for example what it should look like? We we've been calling this style terminal core because it looks a little bit like this is my contribution to the project. I was like, hey, wouldn't it be cool if we make the top of the website look like a terminal? And so the the the process itself of building this was very much prompt driven I'll say like chatting in Slack and saying hey wouldn't it be nice if we had a hub for this just very iterative very collaborative between the team members at Verscell and what's really cool about this again is it's really fast so it takes advantage of all the versel infrastructure primitives even though it has 35,000 of the skills like if I start like like hardcore scrolling this and then pick a random one. All right, Swift Taylor Swift. You're going to see like the page transitions are are swift to UI. Okay, but uh like all the page transitions are instant production grade. He needed to scale. There were going to be a lot of eyes on this thing.

</details>

### AI 编程与 Git 工作流

**Claire Vo**: 好的。所以，我想我们想进入我们的第一个 AI 工作流，你只是想向我们展示你是如何开发这个，或者你和团队如何随着时间推移使用这个工具来改进它。

<details>
<summary>Original English</summary>

**Claire Vo**: Okay. So, I think we want to get to our first workflow for how AI and you just want to show us how you either develop this or how you and the team improve this over time using the tool.

</details>

**Guillermo Rauch**: 关于 AI 编程，我想说一件事：从零到一真的很容易。我想我们都看过那些 AI 提示的演示，它们很酷。我认为更难的是在一个项目上进行大规模迭代并安全地部署更改。就我们如何处理 **Vercel** 产品而言，我们总是基于分支工作，我们利用分支预览，然后进行代码审查，最后合并它们。所以我们今天要向大家展示的是，我们如何将那些硬核、重型、生产级别的工程理念带入 **Vzero**。我现在在这里绑定你刚才看到的 **skills.sh** 项目，它基本上是由 **Git** 支持的。构建这个项目的工程师在三小时前推送了一些代码，你会在 **Vzero** 中看到一个新的按钮，它是一个新分支。这表明 **Vzero** 正在将创建分支的 **Git** 流程作为产品的一等公民。所以我要创建一个分支，这基本上会给我你习惯的那种聊天体验。但请注意，在顶部我看到了一个漂亮的新约定：项目/分支。所以我有 v0/rouchg 分支。在预览中，你会注意到，就像你将项目克隆到本地设备一样，我们都拥有一个全尺寸的 **VS Code** 编辑器，以及在 **Vzero** 中运行的真实项目。我想暂停并注意一件事，因为我对产品有敏锐的洞察力，我喜欢你使用我们所有有工程团队的人在 **Git** 分支上使用的约定，即贡献者/功能。所以我觉得这真的很有趣，我们接下来会讨论如何实际使用这些工具进行构建，但我也认为如何设计优秀的 AI 产品和代理产品有另一面，我仍然喜欢那些让 **Vzero** 感觉像你团队中协作队友的小设计调整。所以，对于所有的工程师来说，我注意到了那个小约定。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: I'll say one thing about VIP coding. It's really easy to go from zero to one. Like I think we've all seen the demos of I prom thing and it's cool and I think what's harder is to iterate on a project at scale and to deploy changes safely. In in the case of how we work on versel products, we always work on branches and we take advantage of branch previews and then we code review and then we merge them. So what we're basically going to be showing you today is how we brought those ideas of hardcore heavyduty production grade engineering to visit. So I'm here I'm binding that same project that you just saw skills.sh which is piped into is basically backed by git the engineer who built this pushed some code three hours ago and you have this new button within v 0ero which is a new branch. So what this is showing you is that B 0 is making the git flow of creating branches a first class citizen of the product. So I'm going to create a branch and basically this is going to give me the same sort of like chat experience you're used to. But notice here at the top I get this beautiful new convention of project slash branch. Right? So I have the v 0/rouchg branch. And here within the preview, you're going to notice that just like if you had cloned the project to your local device, we both have a full full scale uh VS Code editor as well as the real project running within VZ. One thing I want to pause and notice because I just have a laser eye for product is I love that you use the convention that all of us with engineering teams use on our git branches which is who's the contributor slash what's the feature and so what I think this is really interesting you know we're going to talk about how you actually use these tools to build but I also think there's a flip side of how you design great um AI products and agentic products and I still like the small design tweaks that make something like a vzero feel like a collaborative teammate on your So I for all the engineers out there, I noticed I noticed that little convention.

</details>

**Guillermo Rauch**: 所以你将在产品设计理念中看到的是，我们确实希望嵌入那些让真正的工程工作流变得生动的小细节，但要以一种非常简单的方式。毕竟，我不需要去终端或启动 **GitHub** 桌面并手动创建分支。那简直是石器时代。我只需按一个按钮，现在就有一个分支在运行了。所以这里的主要思想是，在这个预览中，我拥有完整的 **skills.sh** 项目在运行。它下载了依赖项。它安装了 **Next.js** 的精确版本和项目中的所有依赖项。我在这里运行着所有这些。我显然是在一个暂存或开发环境中运行它。现在，我可以像浏览生产网站一样浏览它。我可以探索它。我可以使用 **Vzero** 提供的所有功能，但我认为我们应该实际构建一个可以发布到生产环境的功能。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: So I and what you're going to see in the design philosophy of the product is that we really wanted to embed those little details of what makes a real engineering workflow come to life, but in a really easy way, right? Like at the end of the day, I didn't have to go to a terminal or boot up GitHub desktop and branch manually. Like it's the stone age. I just press a button and now I have a branch running. So the main idea here is that within this preview I have the full skills.sh project running. It downloaded dependencies. It installed the exact versions of Nex.js and every dependency uh within the project. I have it all running here. I have it obviously within a staging or dev sort of environment. And now you know I I could navigate it like uh I could navigate the production website. I could explore it. I could, you know, use all the capabilities that Vzero uh brings to the table, but I figured let's actually build a feature that we could ship to prod.

</details>

**Claire Vo**: 是的。我想暂停一下你刚才可能略过的一点，那就是你拥有这个 **VS Code** 实例，你安装了所有的依赖项，并且这个项目同时运行着代码和预览。对于那些技术背景较弱的人，以及可能许多使用 **vzero.app** 的用户来说，他们技术背景较弱。即使是下载 **VS Code**，设置本地环境，我今天早上还和我的设计师一起安装 **Homebrew**，她的笔记本电脑上就是没有。所以……

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. And one thing I want to pause on what you I think glossed over a little bit, which is the fact that you have this VS Code instance, the fact that you have all your dependencies installed, the fact that this is running both with code and a preview. For anybody who's less technical out there, and maybe a lot of your users that are using vzero.app app are less technical. This even like downloading VS Code, getting your local environment set up, like I spent this morning with my designer installing homebrew like like it just wasn't on her laptop. And so

</details>

**Guillermo Rauch**: 那是噩梦般的感觉。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: it's nightmare feel.

</details>

**Claire Vo**: 那是噩梦。所以，如果你想从这种“氛围编程”的网络原型体验，转变为更像一名软件工程师，而不需要 Claire 手把手教你如何使用 brew install，这就能让你达到一半的水平。所以，我认为它还有一个学习方面，我希望人们不要错过。但让我们开始构建一些显而易见的东西。

<details>
<summary>Original English</summary>

**Claire Vo**: It's nightmare. And so if you're trying to step from this like vibe coding prototype in web experience into feeling more like a software engineer without having to have Claire handhold you through like brew install, this gets you like halfway there. And so I think there's also this learning aspect of it I want to make sure people don't miss. But let's get into building something obvious.

</details>

### 社区反馈与产品迭代

**Guillermo Rauch**: 所以我们产品开发过程的另一个部分是真正倾听社区和客户的声音。很多人一直在寻求各种工具，以便我们能指导他们判断一个技能是否高质量、是否经过审查、是否经过验证，因为技能实在太多了。我们上次检查时，每小时有 500 个技能被添加。所以我们想到的一个想法是，我们能否添加一个评级系统。所以，让我们为技能添加一个基于五星的评级系统，并把它放在侧边栏。要小心。我也会给你一些我实时的想法，如果我正在和一位工程师交谈，我会说，如果我们接受来自互联网的评分，可能会出什么问题。如果你接受评分，可能出现的问题之一是滥用。所以，让我们告诉 VZ 要注意，我们应该限制评分或防止滥用我们收到的分数。对我来说，这仍然是关于从生产就绪的角度思考新的 **Vzero**，并使其与这个技能网站的风格保持一致。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: So one another part of our product development process is really listening to community and listening to customers. So people have been asking for a lot of different tools so that we could guide them towards knowing if a skill is high quality, vetted, verified because there's so many skills. At last we checked there were 500 skills being added every hour. And so one of the ideas that we came up with is like could we add um a rating system. So let's add a fivestarbased rating system for the skills. Uh put it on the sidebar. Um be mindful. So I'll also give you like a little bit of my real time consciousness on if I were talking to an engineer and say like what could go wrong if we accept ratings from the internet. One of the things that can go wrong if you accept ratings from is abuse. So let's say let's tell VZ be mindful that uh we should rate limit or prevent abuse on the scores that we receive. And again, for me, it's all about thinking from a production readiness point of view when I think about the new VZO and make it make sense within the style of this skills website.

</details>

**Claire Vo**: 我喜欢你向我们展示的这一点，你这里有一个非常非常复杂的提示，那就是“让它有意义”。所以，我们有一个服务于成千上万、数百万人的生产应用上的三句不完整的句子。你将把它启动。在你做这些的时候，我想指出一点，我认为你明白为什么这个功能现在可能很重要，那就是我不知道你是否听说过，有一种“甲壳类动物”正在爬满每个人的 **MacBook mini**，而技能可以成为注入提示的载体。所以当你试图确保这成为发现技能的中心枢纽时，我认为它正在开始成为，你有责任确保质量在那里，至少你有正确的东西到位，这样人们就可以做出决定，遵循你的类比。这有点像我们在 **github.com** 或 **npmjs.com** 上进行“氛围编程”。这是一个非常非常大的事情。

<details>
<summary>Original English</summary>

**Claire Vo**: What I love about what you're showing us is you have this very very high sophistication prompt here, which is make it make sense. So, we have three three incomplete sentences on a production app serving thousands, millions of people. and you're going to fire it off. And while you do this, one of the things I want to just call out that I think you know why this feature is maybe important right now is I don't know if you've heard there's like this crustation crawling all over everybody's MacBook minis and skills can be a a prompt injected vector for things. And so as you're trying to make sure that this becomes the centralized hub for discovering skills, which I think it's starting to be, it is upon you to kind of make sure that the quality is there, at least you have the right thing um right things in place so people can make the decision to follow with your analogy. This is a little bit like we're vibe coding on top github.com or npmjs.com. It's like a really really big deal.

</details>

**Guillermo Rauch**: 好的。所以我本来要带你了解 **Vzero** 正在做什么，当然，如果你以前使用过 **Vzero**，我们都会像这样在思考轨迹上进行讲解，因为代理并不是最快的，但我确实想指出一些非常重要的事情。所以 **D0** 主要是利用 **Vercel** 的集成和市场功能。所以在这种情况下，它知道这个项目的数据源是什么。我们通过 **Upstash** 将数据存储在 **Redis** 中。显然它会遍历整个文件系统，它会尝试解释我的需求。看到它没有发明一种新的数据存储方式，而是真正关注我使用的数据，这已经非常好了。所以我们再来看看这里，它确实给了我符合我要求的东西。它符合设计风格。我可以提交评分。它存储了评分。所以我现在有了我的五星评分。我想我将……

<details>
<summary>Original English</summary>

**Guillermo Rauch**: All right. So I was going to walk you through what Vzero is doing which of course if you've used V 0ero before we everyone does the whole like talk over the thinking trace because agents are not the fastest but I do want to point out a few things that are really important. So um D0 is all about leveraging the integration and marketplace capabilities of RCEL. So in this case it knows what the data source is of this project right we're storing data in reddis by app stash obviously it's going to go through the whole file system it's going to try to interpret my requirements this is already like really nice to see that it's not inventing a new way to store the data like it's actually paying attention to the data that I use um and so we'll take a look at uh again here like it actually gave me something that meets my requirements, right? Like it fits within the design style. I can submit a rating. It is stores the rating. So I have now my fivestar one rating. I guess I'm going to

</details>

**Claire Vo**: 它是 **终端核心** 的 Monace 字体。

<details>
<summary>Original English</summary>

**Claire Vo**: It's terminal core monace font.

</details>

**Guillermo Rauch**: 让我们刷新页面，看看持久化是否真的有效。太棒了。有一点点布局偏移触发了我的强迫症。所以我们会告诉它，嘿，当我们没有数据时，确保没有布局偏移。顺便说一句，对于那些不那么神经质的人来说。所以，当我刷新页面时，如果没有数据，侧边栏会有点抖动，这让我很困扰。所以我们只是让它归零。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Um let's refresh the page to see that persistence actually works. Beautiful. There's a tiny bit of layout shift that triggers my neurosis. So we'll tell it, hey, when we don't have data, make sure there's no layout shift. By the way, for those of you that are like less neurotic, I guess. So, it bothered me that when we refreshed the page, when we didn't have data, like it jittered the sidebar a little bit. So, we're just going to have the zero.

</details>

**Claire Vo**: 所以，当我们在它思考的时候闲聊，我作为播客主持人必须非常擅长这一点。所以，我要指出的是，我曾观察过 **Vercel** 的内部黑客马拉松，我看到这个人截屏了不正确的圆角，然后带着问号把它们放在聊天中。所以这说明了我的……

<details>
<summary>Original English</summary>

**Claire Vo**: So, while we're uh jibber jabbering while the it's thinking, which I have to get very good at as a podcast. So, I will call out that I have observed a Verscell internal hackathon and I have seen this man screenshot like rounded corners that are not right and just put them in the chat with like a question mark. And so it's it's yeah it it speaks to my um

</details>

**Guillermo Rauch**: 我对细节的关注之心，你看到了，你看到了，它奏效了吗？

<details>
<summary>Original English</summary>

**Guillermo Rauch**: my very attention to detail heart that you saw you saw that did it work.

</details>

**Claire Vo**: 是的。是的。不，我相当满意。是的。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. Yeah. No, I'm fairly satisfied like the Yeah.

</details>

**Guillermo Rauch**: 骨架是稳定的。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: The skeleton was stable.

</details>

**Claire Vo**: 是的。是的。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. Yeah.

</details>

**Guillermo Rauch**: 零布局偏移。所以让我们继续。我们谈到了这种硬核工程工作流。如果我们在 **skills.sh** 上进行这样的更改，再次强调，它每小时接收数百个技能，有大量访问者，我们首先要确保一切正常。现在你可以把它看作一个非常强大的开发环境。我们正在虚拟机中启动 **Next.js** 开发服务器，它基本上非常忠实于最终结果。事实上，感谢 **Next.js** 的工程师们，他们尽最大努力镜像开发环境和生产环境的所有细节。但我们还可以获得另一层保障，那就是，如果你更熟悉 **GitHub** 世界，**GitHub** 方面的事情，你知道当你向 **GitHub** 推送一个新的 PR 时，这个漂亮的 **Vercel** 机器人就会来“拯救世界”。你知道它会构建你正在更改的东西，然后进行预览。不仅如此，请注意 **Vzero** 真的非常棒。**Vzero** 让我在这里看起来很棒，因为我已经 25 年，84 年没写过 PR 描述了。所以 **Vzero** 生成了一个 PR 并描述了它，然后 **Vercel** 的魔力就来了，它给了我那个预览。所以我要在这里打开它。我要说访问预览。我只是再次，我要做一秒钟的软件工程师。我们能欣赏一下那个预览分支部署的速度有多快吗？

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Uh zero layout shift. So let's continue with the we we talked about this uh hardcore uh engineering workflow like if if we were making a change like this on skills age again receiving hundreds of skills per hour with lots of visitors we first want to make sure that things work right and right now you you can think of this as a very capable dev environment we're booting up the NexJS dev server in a virtual machine it's it's it's basically very true to the actual end result. In fact, thank you to the Nex.js engineers who sweated all of the details of mirroring to the best of their ability the dev environment and the production environment. But there is another layer of assurance that we can get, right, which is so if you're more familiar with the g like the GitHub world, the GitHub side of things, you know that when you push a new PR to GitHub, the this beautiful Versel bot comes to sort of save the day, right? you know that it builds what you what you're changing and then it previews it. Not only that, but notice that Vzero really cooks. Vzero is making me look so good here because I haven't written a PR description in like 25 years 84 years. So Vzero produced a PR described it um and then the magic of our cell is coming in right so it's giving me that uh preview. So I'm going to I'm going to open it here. I'm going to say visit preview. I I'm just again I'm going to be a software engineer for a second. Can we appreciate how quickly that preview branch deployed?

</details>

**Claire Vo**: 嗯，别惹我，因为它可以快 10 倍。但是的，我为此感到自豪。

<details>
<summary>Original English</summary>

**Claire Vo**: Well, don't trigger me because it can be 10 times quicker. But yeah, I'm proud of it.

</details>

**Guillermo Rauch**: 解释一下。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Explain.

</details>

**Guillermo Rauch**: 现在我有一个类似生产的环境。所以当你看到这个以 **vercel.sh** 结尾的 URL 时，它是我们的企业 **Vercel** 环境。这就是为什么它有 17 个登录步骤。但这基本上是在生产级别的 CDN 上运行，在生产级别的渲染基础设施、托管基础设施等等。所以现在当我看到那个评分时，我非常有信心。我当时想，是的，这是可以发布的。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Now I have a production-like environment. So when you see this URL ending onverell.sh is our enterprise versell environment. That's why it had the 17 steps of logging in. Um but this is basically running on the production grade CDN on the production grade rendering infrastructure hosting infrastructure etc. So now when I'm seeing that you know rating there I have pretty pretty good confidence. I was like yeah this is shippable.

</details>

**Claire Vo**: 好的，我必须问几个关于内部视角的问题。你们都是这样发布代码的吗？或者这只是你们发布代码的一大部分？是 100% 吗？你们实际上是如何将其用于生产的？

<details>
<summary>Original English</summary>

**Claire Vo**: Okay so I have to ask a couple questions about the you know inside the house view of this. Is this how you all are shipping code or is this a big chunk of how you're shipping code to this? Is it 100%? How are you actually using this for production?

</details>

**Guillermo Rauch**: 所以这真的很有趣。当我们在内部开发一个项目或产品时，我们对自己的要求与你在外部发布产品时一样高，因为你想确保人们真正采纳它。所以，在我们开始聊天之前，我将再次让你一瞥 **Vercel** 的幕后。我们已经公开谈论了很多关于我们的数据分析代理 **D0**。是的，我们在命名方面非常有创意。我们取首字母，然后加一个零。所以这是我们的数据 AI 助手，我当时实际上在问它，我说 **Vzero**（顺便说一下，这是我），告诉我最近几周通过 **Vzero** 合并的 PR，告诉我它的增长情况。所以再次强调，通过 **D0** 合并的 PR 是一个全新的事物，而 **D0** 表现出色。谢谢你，**D0**。它说通过 **D0** 合并的 PR 在过去一周出现了爆炸式增长。哇，爆炸式增长。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: So it's really interesting. We when we cook on a on a project or a product internally, we hold ourselves to the same sort of high bar as if you had launched a product externally because you want to make sure that people are actually adopting it, right? And so before before we started chatting and I'm going to give you a glimpse of again the behind the scenes of Verscell, uh we've talked a lot publicly about our data analyst agent D0. Yes, we're very creative with with names. We take the first initial and we add a zero. So this is our data uh AI powered assistant and I was actually asking it um I said um Vzero this is me by the way uh tell me about PR's merged with Vzero in the recent weeks tell me about its growth so again PR's merged with DZ is a totally novel thing and DZ cooked thank you DZ it said PRs merged via DZ have seen explosive growth in the last week wow explo explosive growth.

</details>

**Claire Vo**: 我必须赞赏管理这个提示的人，因为它没有把 OG 的爆炸放进去，我想那也会触发 G。

<details>
<summary>Original English</summary>

**Claire Vo**: I have to appreciate whoever prompt managed this one because it did not put the explosion of OG in there, which I think would also trigger G.

</details>

**Guillermo Rauch**: 好的，我们应该……是的。触发警告。从一月初的接近零开始，到 1 月 28 日或 29 日（也就是今天），这个功能每天合并的 PR 达到了 3200 个，这是一个惊人的 100 倍增长。机器人和 AI 确实喜欢这些甜甜的“玉米饼”。但这非常惊人。所以这还处于非常非常早期的预览阶段。我们只是让人们进来。但我的意思是，这真是一个美妙的工作流。想象一下，你可以通过手机、Slack 或 **vzero.app** 触发这样的任务。我们正在添加的另一个便利功能是，你可以获取一个 **GitHub** 仓库，然后我可以回到主页并粘贴它。所以现在我可以导入我已有的东西并从中创建一个聊天。所以每当我有一个关于真实世界项目和生产产品的想法时，我都可以进行提示。所以我估计这会从根本上改变我们的工作方式。它本质上也非常可视化，这真的很酷。显然，现在世界上有很多方法可以获取预览，让代理进行更改。每个人都对 AI 能做什么感到非常兴奋，但这实际上向我展示了实际的结果和将要发生的事情。所以，我给 **Vercel** 构建的这类产品打分很高，我预计它将继续保持很大的吸引力。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: All right, we should uh Yeah. Uh trigger warning. Starting from near zero in early January, the feature hit 3200 PR submerged per day by January 2829, which is basically today. An extraordinary 100x. The bots, the AIS do like to like like Yeah. like sweet sweet tacas. But um it's it's pretty amazing. So this is in very very very early uh preview, right? Like we we're just letting people in. But I mean this is just such a beautiful workflow. I mean imagine triggering a task like this from your phone, from Slack, from vzero.app. Another convenience that we're adding is that you can take a a U GitHub repo like this and I can go to the homepage and then I can paste it. And so now I could import something that I already have and create a chat from it. So anytime I have an idea for a realworld project and product that has in production, I can now prompt. So I estimate that this is going to change fundamentally how we work, right? Uh it's also very visual in nature which is really cool. Obviously, there's a lot of ways of like getting preview getting uh changes made by agents today out out there in the world. These everyone's very excited about what what AI can do, but this is actually showing me the the actual results and like things that are going to happen. So, I I grade this really high for the kind of products that we build at VCell and uh I expect this to continue to have a lot of traction.

</details>

### 企业中的 AI 编程与协作

**Claire Vo**: 所以，我必须问你一些操作层面的问题，你如何想象公司会这样做？我正在思考的一件事是，我当时正在和 Caroline 聊天，她打断了你们，说我们要开始播客了，她说昨晚我正在为这个演示做准备，我用 **Vzero** 编写了一些代码，有人看到了，然后说：“嗯，这是个好主意，你应该直接合并并发布它。”你是否设想，或者在公司内部，谁在发布代码，你作为 CEO 如何促成这一点？文化如何支持它？或者如何不支持它？

<details>
<summary>Original English</summary>

**Claire Vo**: So, I have to ask you sort of operationally, how do you imagine companies do this? And one of the things I'm thinking is I was chatting with Caroline who interrupted you all and say we're said we're going to start the podcast and she said last night I was prepping for this demo and I vzero coded something and somebody saw it and was like well that's a good idea you should just merge it and ship it like do you imagine or inside the company who's shipping code how are you enabling that as a CEO how does the culture support it how does it not

</details>

**Guillermo Rauch**: 到目前为止，每个人都可以“烹饪”。每个人都可以创建一个原型、一个新的设计、一个建议。事实上，这是一个脆弱的时刻，因为我有一段时间没有真正打开过它了，但我想看看我是否有一些我一直在向团队建议的东西，我们可以看看。请暂时忽略这个，但每当我有一个关于如何改进产品的想法时，我都会创建一个 **Vzero**。现在的不同之处在于，在我拥有这种机制将其作为拉取请求（pull request）交给工程团队之前，我有点像在“拉拉乐园”里玩耍。我是在那个原型世界里，而现在我们有了一个共同的基础和共同的底层，这样如果你有一个想法，无论你是从事营销工作。营销人员总是想改变网站。想象一下，去 **vercel.com**，我给你看一个在 **Vercel** 实际上很有趣的页面。所以我们的企业页面，**Vercel** 的每个营销人员都想在某个时候改变这个页面。而旧的方式是两种之一。一种是我所说的你必须向“政府”请愿。你必须去找工程师说：“工程师，请你在这里添加一个标志或什么的”，或者祈祷 CMS 完美地配置好以满足你所有的抱负、梦想或想法。所以现在他们可以直接在 VZ 中打开这个页面，并提示他们想要的任何东西。但如果只是直接发布，那会有点不负责任。所以通过 **Git** 工作流，打开一个 PR，并能够预览它，我们都可以建立信心，相信这将是一个好的改变，如果需要可以回滚，而且，这又是一个相当大的网站。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Until now everyone could cook right everyone could create a prototype a new design a suggestion. In fact, uh, moment of vulnerability because I haven't really even opened this in a while, but like, uh, let's see if I have I probably created a bunch of things that I've been suggesting to the teams that we could look at, right? Um, ignore this one for a second, but um, so anytime I have an idea on how to improve the product, I nowadays create a Vzero. Now the difference is that until I had this mechanism to hand it off as a pull request to the engineering team then I was kind of like playing in La La Lands. I was like in out there in this like prototype world and now we have a common foundation and a common substrate so that if you have an idea whether you work in marketing like marketers always want to change the website like imagine like go to verscell.com I'll show you a page that is actually quite uh fun at versell so our enterprise page every marketer of versell wants to change this page at some point right and the old way was to one of one of two ways. One is what I called you had to petition to the government. You had to go to engineers and say engineers please can you can you please add a logo over here or whatnot or pray that the CMS was perfectly wired up for any ambition or dream or idea you had. So now they can just open this page in VZ and prompt anything that they want. But it would be somewhat irresponsible to just ship it, right? So with the Git workflow and opening a PR and being able to preview it, we can all build confidence that it's going to be a good change, roll it back if needed, and and again, this is a website that's it's pretty pretty large.

</details>

**Claire Vo**: 我认为从组织角度来看，这很有趣，因为它大大降低了让东西上线的摩擦。优先级的“屈辱仪式”消失了，你实际上可以将时间集中在捍卫一个想法的优点上，而不是仅仅停留在想法的假设阶段，然后才去实现它。所以，我认为它以一种非常重要的方式改变了公司的速度。你在 **LaunchDarkly** 工作过，至少可以说……

<details>
<summary>Original English</summary>

**Claire Vo**: What I think is fun about this from an org perspect perspective is it reduces the friction of getting something live really really low, right? And like the humiliation ritual of prioritization goes away and you can actually focus your time on defending the merits of an idea on the actual idea as opposed to the hypothesis of the idea that then has to be implemented. And so I think it changes the speed of companies in in a really significant way. And you worked I mean to say the least at launch darkly

</details>

**Guillermo Rauch**: 你知道一个真正的生产级发布过程涉及功能标志和实验等，事情需要被衡量，并且有关键事件需要从这些产品界面报告。所以这也是我看到我们可以添加到 **Vzero** 的技能发挥非常重要作用的地方，你可以自己贡献。因为有时，我们都在这些网站和像素上操作，我们说：“啊，这看起来很容易，把这个按钮向右移动 20 像素会有多大风险？”所以我认为我们可以让“氛围编程”扩展到企业和大规模公司中存在的这种严谨性。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: and you know that a true production grade release process involves things like feature flags and experiments and things need to be measured and there's events that are critical to report from these product surfaces. And so this is also where I see the um skills that we can add to vzero and that you can contribute yourself to play a very important role because sometimes you know like we're all operating on this like websites and pixels and whatnot and we say like ah it's seems easy how risky could it be to move this button 20 pixels to the right and so I think we can make vibe coding scale to that kind of rigor that exists within enterprises and companies at scale

</details>

**Claire Vo**: 嗯，如果我们诚实地说，在那个企业里，它不会是移动一个按钮两像素。它将是改变重点。我知道这一点，因为我一生都在企业中度过。改变“联系销售”和“查看产品”之间的重点。这将是一个永无止境的争论，哪个是主要行动号召，哪个是次要行动号召。

<details>
<summary>Original English</summary>

**Claire Vo**: well and if we're being honest on that enterprise it's not going to be moving a button two pixels. It's going to be switching the emphasis. I know this cuz I spent my life in enterprise. Switching the emphasis between contact sales and view the product. There's going to be a perpetual debate which one's the primary call to action and which is the secondary.

</details>

### AI 的非编码应用与未来展望

**Claire Vo**: 好的。所以我们展示了新的 **Vzero** 导入 **GitHub**，我认为这真的很棒。创建一个拉取请求。复制并粘贴你的 **GitHub** URL 以导入它。实际推送到生产环境。与你的工程师交朋友。三句话的提示，不能再多了。我想快点，因为我们想保持紧凑。我想和你进行一个快速的闪电问答，问你几个不同的 AI 问题。那么，你最喜欢的非编码 AI 用例是什么？

<details>
<summary>Original English</summary>

**Claire Vo**: Okay. I we so we've shown uh new v0ero import GitHub which I think is really great. Do a pull request. Copy and paste your GitHub URL in to import it. Actually push to production. Make friends with your engineers. three sentence prompting, no more than that. I want to go to quick because we want to keep this tight. I want to go to a quick lightning round with you and ask you a couple different AI questions. So, what is your favorite non I mean everything's a coding use case, I'm sure, with you, but what is your favorite non-coding use case of AI?

</details>

**Guillermo Rauch**: 嗯，我很矛盾。我的脑海里立刻浮现出图像生成，因为我使用了……我们构建了一个很棒的游乐场。我不想再分享屏幕了。我想从你那里拿走。但是……

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Well, I'm conflicted. My mind immediately went to image generation because I used uh so we built a banger playground. Uh I don't want to share screen again. I want to take it from you. But

</details>

**Claire Vo**: 这是……哦，不。我只是想说图像生成是我得到这个漂亮背景的方式。

<details>
<summary>Original English</summary>

**Claire Vo**: this is Oh, no. I was just going to say image generation is how I got this pretty pretty background.

</details>

**Guillermo Rauch**: **Vzero** **Nano Banana** Pro。**Nano Banana**。所以今天在 **Vercel** 发生的一件非常酷的事情是，我们正在构建许多我们自己的内部工具和代理，所以我们正在构建我们自己的设计工具，例如用于创建新图像。我们为 **Nano Banana** 创建了一个游乐场，我经常使用它。所以我用它来制作表情包，我承认。但我也会在我想以非常酷的方式呈现信息时使用它。当我发推文时，有时我必须以更偏向图像的方式呈现我的愿景。我经常将其与 **Vzero** 结合使用，因为 **Nano Banana** 非常擅长让我并行生成 20 张图像，然后选择我真正喜欢的那一张，然后我将其扔进 **Vzero**，然后我实际上可以获得更高保真度的我想要实现的东西。所以图像生成是一个大头，但我也对视频生成非常兴奋。我们即将发布一些东西。我不想透露太多。我们也将发布一些关于视频方面的东西。但是，是的，所有 AI 都是……我还会启动很多研究任务，比如长周期研究任务。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Um bzero nano banana pro. Nano banana. So what's really cool that's happening at Verscell today is that we're building so many of our own internal tools and agents and so we're building our own design tools like for example to create new images. We created a playground for Nan Banana and I use that a lot. So I use it to make memes uh guilty is charged. Uh, but I also use it when I want to present information in really cool ways. When I tweet, when I sometimes I have to make u present my vision in a way that's more like on the image side of things. I combine it a lot with vzero because nanobana is really good at like again letting me fire off 20 generations in parallel and then pick the one that I actually like and then I toss it into v 0ero and then I actually get more fidelity of what I want to implement. So image generation is is a big one, but also I'm very excited about video generation. We're going to be dropping something. I don't want to spoil it too much. Uh we're going to be dropping something uh on the video side as well. Um and but yeah, all all AI is uh I also I also kick off a lot of research tasks like long horizon research tasks. Uh yeah.

</details>

**Claire Vo**: 所以，我想从 **Nano Banana** 的角度在我们的播客中指出的一点是，我使用 **Nano Banana** 将每一次对话（我认为我们现在有 118 个工作流），我们播客中谈论的每一个 AI 工作流都变成了自己漂亮且一致的 **Nano Banana** 信息图。所以，我只是觉得图像和视频生成中存在如此被低估的用例。我正准备把这些都变成小视频。

<details>
<summary>Original English</summary>

**Claire Vo**: So, one of the things I want to call out from a Nano Banana perspective on our podcast is I've used Nano Banana to turn every conversation, I think we're now at 118 workflows, every AI workflow that we talk about on the podcast gets its own pretty consistent nano banana infographic. And so, I just think there's just such undervalued use cases in both idio uh image and videogen. And I'm about to take this and turn them all into little mini videos.

</details>

**Guillermo Rauch**: 我们还创建了一个非常棒的，我不知道我们是否已经写过它，我们正在博客文章上发布。我们有一个 **OG 图像**，比如开放图谱卡片，Twitter 卡片生成器，我们在内部使用它，它结合了更传统的渲染技术和图像生成。所以我们团队的一个瓶颈有时真的是，我们能否让那个社交卡片通过，以便发布公告。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: We also created a really awesome I don't know if we've written about it yet. that we're publishing on the blog post. We have an uh OG image like open graph card, Twitter card generator that we use internally that combines uh more traditional rendering techniques but also image generation. So a bottleneck in our team was sometimes literally like can we get that social card to get the announcement through the door.

</details>

**Guillermo Rauch**: 所以现在我们也已经自动化并识别了这一点。我们每天都在问自己，我们如何构建一个代理来接管我们以前交给人的任务，而通常从事该任务的人现在正在创建该代理。是的。所以我们一开始就说过，我们希望 **Vzero** 对你们所有人来说都非常棒，不仅可以创建传统的 Web 应用程序，还可以创建代理。所以这基本上就是产品的路线图。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: And so now we we've also sort of automated and identify that. Every day we're basically asking ourselves how can we build an agent that takes over a task that we were previously giving to a person and uh and typically the person that was working on that task is now the one creating the agent. Yeah. So something we said at the beginning is we want B zero to be really awesome for you all to create agents not just traditional web applications. So that's that's basically the the the road map of the product.

</details>

### Vzero 驱动的个人项目

**Claire Vo**: 所以我不得不说，你最喜欢的用例是你的。我最喜欢你使用 **Vzero** 的用例，我不知道你是否准备好让我对你“氛围编程”的内容有这么多了解，是你的 **亚洲对亚洲国际象棋游戏**。

<details>
<summary>Original English</summary>

**Claire Vo**: So I have to say uh my favorite so that's your favorite use case. My favorite use case of your use of VZero which I don't know if you're you're prepared for me to have this much knowledge about what you vibe code is your Asiato Asia chess game.

</details>

**Guillermo Rauch**: 我的孩子们对此着迷。他们认为那是因为他们得到了 AI 棋盘，现在他们正在不同级别下棋。顺便说一句，我学到了很多。所以，在假期期间这真的很酷，我是一个视觉型的人。所以国际象棋 AI 这种东西以前就有人做过，但我设想的是一种……想象一下 **ESPN** 正在直播一场国际象棋决赛，他们正在从每个棋手的肩膀上方展示棋盘，当然是 3D 的。所以我当时想，**Vzero** 能否生成 **3D** 代码？它能否用 **3JS** 等技术渲染一场实时国际象棋比赛，我能否让两个 AI 互相搏斗？所以，你可以打开它。网址是 **zero-chess-match.resellapp**。另一件事，我不知道我是否被 SEO 优化了。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: My kids are obsessed with this. They think it's because they got the AI chess board and now they're like playing chess at various levels. By the way, I learned a lot. So, so it was really cool like during the holidays I uh I'm a I'm kind of a visual person. >> So, the chess AI thing has been done before, but I imagined this sort of um imagine like ESPN is is is is broadcasting a a final of a chess match and they're going over the shoulder of each player and showing the the the chessboard obviously in 3D. And so I I figured could could V 0 generate 3D code, right? Could it render with 3JS and things like that a uh a live chess match and could I have two AIs battle it out? And so um I mean you could open it. So the zero- chess-match.resellapp. Um and the other thing the other thing I wonder if I am SEOed or not.

</details>

**Claire Vo**: 你是第一名。干得好。

<details>
<summary>Original English</summary>

**Claire Vo**: You you're number one. Good job.

</details>

**Guillermo Rauch**: 哦，是的。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Oh, yes.

</details>

**Claire Vo**: 哦，这里还有一点 **终端核心**。

<details>
<summary>Original English</summary>

**Claire Vo**: Oh, a little terminal core over here.

</details>

**Guillermo Rauch**: 当然是 **终端核心**。但是，我所做的是，我开始流式传输模型的思考令牌。提前向 **Google** 道歉。我们正在使用他们一个非常旧的模型，它非常便宜，但他们正在损失 225。至少他们得到了 5 个。所以，你可以看到模型的思考令牌。这结合了所有 **Vercel** 的 AI 基础设施。它使用了一个工作流，所以游戏可以永远运行。游戏可以真正地永远运行，或者直到我用完令牌。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: So, terminal core, of course. But, uh, so what I did is I I I started streaming the thinking tokens of the models. Uh, apologies to Google in advance. Uh, we're using a very old model of theirs that is really cheap, but they're losing two 225. At least they got five in. So, you can see the thinking tokens of the models. This is combining all of the Versel AI infrastructure. It's using a workflow so the game could run forever. The game could literally run forever or or until I run out of tokens.

</details>

**Claire Vo**: **AI Gateway**。

<details>
<summary>Original English</summary>

**Claire Vo**: AI gateway.

</details>

**Guillermo Rauch**: 当然是 **AI Gateway**，因为我们可以更换模型。我们可以看到 **Brock** 对战本周发布的三轴思考。但我也偶然学到了国际象棋，不是从这些家伙那里。这些家伙有点笨。你可以看到它是如何思考要移动哪个棋子的，它会说：“哦，不，如果我把它移到那里，我就会被吃掉 F。所以我需要这样做。”所以，这是一个在假期期间创建的有趣的 **Vzero** 项目。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Uh AI gateway of course because we can change models like we could we could see like Brock versus you know uh whatever uh what dropped this week when threeax thinking. Uh but also I learned chess incidentally because not from these guys. These guys are kind of dumb. Uh, you can see how it thinks through what piece to move and it says, "Oh, no, because if I move it there, I'm going to get F. So, I need to do this." So, this is a fun visor created during the holidays.

</details>

**Claire Vo**: 是的。所以，我需要一个儿童核心版本。嗯，我还想看看这些模型在输赢上花了多少钱。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. So, I need a kid core version of this. Um, I also want to see how much these models are spending to beat and lose.

</details>

**Guillermo Rauch**: 嗯，**AI Gateway** 的美妙之处在于，我们会报告，你知道，对于这个提示，使用这个模型花了你多少钱等等。但是你看，这是 **GPT** 开源的，它实际上相当不错，而且很便宜。所以……

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Well, beautiful thing about the AI gateway is that we kind of report, you know, for this prompt, how much did it cost you with this model, etc. Um, but see, so this is GPT open source which is actually pretty decent and and uh pretty cheap. So

</details>

**Claire Vo**: 太棒了。然后，这是我孩子们最喜欢的你的 **Vzero**。

<details>
<summary>Original English</summary>

**Claire Vo**: great. And then so on this so that's my kids favorite your V0.

</details>

**Guillermo Rauch**: 我不知道他们有没有最喜欢的我的 V。它很受孩子们欢迎。我还有另一位家长联系我，说这真的启发了他们，他们将一起使用 **Vzero** 来创造更多东西。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: I don't know if they have a favorite my V. It's popular with kids. I also got another parent reach out to me and say like oh this really inspired us and we're going to use Vzero together to create more things.

</details>

**Claire Vo**: 我的孩子们是 **Vzero** 的日活跃用户。别担心。所以这是我的第二个问题，你最近和你的孩子们一起做的最有趣的事情是什么？

<details>
<summary>Original English</summary>

**Claire Vo**: My kids a a DAU on VZero. Don't worry about it. So this is my second question which is what is the last thing you built with your kids that was really fun.

</details>

**Guillermo Rauch**: 所以前几天我把他们都带到办公室，我们开始“氛围编程”的是，我们现在想做更多像物理 AI 的事情，比如把 AI 带入现实世界。我认为这是下一个前沿。所以在办公室里我们有一个叫做 **Vesta board** 的东西，它是一个可以让你在现实世界中渲染东西的板子。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: So the other day I brought them all to the office and what we started vibe coding is so now we want to do things that are more like physical AI like bring AI to the real world. I think it's the next frontier and so at the office we have a a thing called Vesta board which is a board where you can basically render things in the real world.

</details>

**Guillermo Rauch**: 我想那天我真的让他们大开眼界。不是所有人都这样，因为我带了四个孩子，其中一个在玩 iPad，没有注意。这几乎就像带他们去主日学校一样。但其中两个孩子说：“天哪，你可以输入代码，然后改变真实世界！”所以我有点教他们 **API** 的概念。是的，所有都是“氛围编程”的，我还带了一个保姆，她也惊呆了。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: And I think I really broke their their brains that day. Not all of them because I I brought four of them and one was on his iPad not paying attention. It was almost like bringing them to Sunday school for what it's worth. Uh but two of them were like, "Holy crap, you can type in code and then you can change the real world." So I kind of taught them the concept of an API. Uh and yeah, all vibe coded and um I I took one of the nannies too and she was mind-blown.

</details>

**Claire Vo**: 嗯，那就是教每个人如何进行“V 编程”。你和我在这里就像双子星，因为你有很大的 **Vesta board**，而我有一个小小的 32x32 像素的迷你电脑，我和我的孩子们正在上面“氛围编程”小屏幕和小游戏。所以我完全同意。出于多种原因，让它脱离屏幕。如果你有孩子，把它放到现实世界中，你可以做一些有趣的事情，让他们大开眼界。

<details>
<summary>Original English</summary>

**Claire Vo**: Well, that is teaching everyone how to v code. That is uh you and I we're like twin stars here because while you have the Vesta board which is pretty big, I have this like tiny like 32x32 pixel fake little mini computer that my kids and I are like vibe coding little screens on and little games on. So I completely agree. Take it off the screen for many reasons. If you have kids, put it in the real world and you can do some fun stuff and blow their mind.

</details>

**Guillermo Rauch**: 发送一个数据包并响应它。**Vzero** 和类似事物的美妙之处在于，你实际上是在用英语与计算机对话。所以我想，如果你能教他们表达自己的想法和愿望，那么他们就能让任何事情发生。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Sending a packet and responding to it. And the beautiful thing about Vzero and things like this is like you're literally speaking English to the computer. So I think if you can teach them that they can express their thoughts and desires, then they can make anything happen.

</details>

**Claire Vo**: 好的，重要问题。你正在教你的孩子打字吗？

<details>
<summary>Original English</summary>

**Claire Vo**: Okay, important question. Are you teaching your kids to type?

</details>

**Guillermo Rauch**: 这是一个难题，因为我在阿根廷长大时，我爸爸给我买了一个足球游戏。他骗了我。我以为：“哦，他给我买的是 **FIFA** 或者什么酷的东西。”不，他给我买了一个足球打字游戏。所以为了得分，我必须打字非常快。这就是你学会快速打字的方式。但现在，他们有点沉迷于语音转文本。我需要找到那个“黑客”方法，比如：“哦，我给你买了 **Roblox**。”但实际上不是。它只是打字。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: That's a tough one because I was when I grew up in Argentina, my dad got me this soccer game. He tricked me. I thought, "Oh, he's getting me FIFA or something cool." No, he got me a soccer typing game. So to score, I had to type really fast. And that's how you learn to type really fast. But nowadays, like they're kind of getting really into the the speech to text thing. I need to find that hack where like, "Oh, I got you Roblox." And it's not. It's just typing.

</details>

**Claire Vo**: 它只是打字。所以，我正在欺骗我的小儿子。我们有一个 **Switch**，我真的很想玩 **Ocarina of Time**，对于那些在百万年前游戏发布时出生的人来说。我让他玩它的唯一原因是因为它 99% 只是阅读。所以我说，你可以玩这个节奏非常慢的游戏。这是一个游戏。它真的只是从 NPC 到 NPC，然后阅读。

<details>
<summary>Original English</summary>

**Claire Vo**: It's just typing. So, I uh I I'm tricking my youngests right now. We have a Switch and I really want to play Ocarina of Time for people that were born when that game came out a million years ago. And the only reason I let him play it is it's like 99% just reading. >> And so I'm like, you can play this very slow paced game. It's a game. It's really just going NPC to NPC and reading to

</details>

**Guillermo Rauch**: 短语。所以我们在假期期间和我的孩子们玩了这样的游戏。它基本上是一个看起来像游戏的数学益智游戏，这启发了我。所以，有好有坏。好的一面是游戏非常有教育意义。坏的一面是它充斥着“脑残”内容。所以，这是一个巨大的机会，有人可以创建一个游戏平台。你可以结合所有这些模型。你可以为资产进行图像生成。我们即将发布一些非常酷的 **文本转 SVG**。现在有模型可以生成非常高质量的内容。我们将通过 **Vercel AI Gateway** 分享 **Recraft 模型**。所以你可以创建漂亮的、游戏就绪的、可在高 DPI 屏幕（无论什么 **iPad**）上扩展的资产。所以我真的看到了高质量内容的未来触手可及，并摆脱所有这些“垃圾”。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: phrases. So we played a game like this with my kids during the holiday break. Um it was basically like a puzzle math game that looked like a game and that inspired. So okay, good and bad. The good was the game was like really educational. The bad was like it was like at ridden brain rot slop. And so it's like okay huge opportunity for someone to create a game platform. You can combine all of these models. You can do image generation for the assets. We're about to drop something insanely cool text to SVG. There's models that now produce really really high qual. We're going to uh share recraft models through the Verscell AI gateway. So you can create assets that are beautiful game ready scalable in high DPI screens whatever iPad. And so I really I I I I see the future of really high quality content uh at our fingertips uh and getting rid of all this slop.

</details>

**Claire Vo**: 是的。嗯，我的未来路线图发布不像你的那样保密，所以我在脑海中正在开发 **Mama Claire's dojo for Crack Little Hackers**。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. Well, um I you know my my future roadmap releases are not as confidential as yours and so I am in the back of my mind working on like Mama Claire's dojo for Crack Little Hackers.

</details>

**Guillermo Rauch**: 不错。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Nice.

</details>

**Claire Vo**: 所以也许有一天，它会部署在 **Vercel** 上。好的，最后一个问题。当你感到沮丧时，你会像我看到你在 Zoom 聊天中那样提示 AI 吗？就是“解释一下，你如何，你如何，你如何？”带着问号。当它没有给你想要的东西时，你会怎么做？

<details>
<summary>Original English</summary>

**Claire Vo**: So maybe someday and deployed on obviously Verscell. Okay, last question. Uh, do you when you're frustrated prompt AI the same way I have seen you prompt in Zoom chat which is explain how do you how do you how do you yeah question mark like what do you do when it's not giving you what you want?

</details>

**Guillermo Rauch**: 所以我确实认为我们现在发布的东西将极大地帮助你应对那些时刻，我的意思是，说实话，你可能会被 AI 困住。但现在你基本上可以拥有这个完整的，我们称之为“逃生舱”，如果你愿意，你可以克隆仓库并在本地机器上继续“烹饪”，或者如果你需要别人帮助你，这本质上是一个协作媒介，这是 **GitHub** 为世界解锁的东西——工程师、设计师、营销人员之间的协作。所以，我预见到坦率地说，被困住的人会少很多。模型也一直在变得更智能。技能也会给你很多帮助。我给你举个例子。我们一直在添加新的框架和新的功能，**Next.js** 变得越来越强大，而现在我们有了 **AI SDK** 的技能，我们将其预加载到 V0 中，模型本身不会那么容易被困住，因为它现在有更多的资源来解决问题。我做的另一件事，我实际上用它来做这个项目。所以关于这个 **3D** 东西有很多微妙之处，我对 **3D** 一无所知。所以每当我被困住时，我都会问其他模型。我想那大概是关于……感谢那位开源 **3D** 的了不起的人。我从 **Sketch Fab** 得到了它，他并不是为了创建游戏或其他东西而设计的。所以所有的部件都粘在一起了。这几乎就像你 3D 打印了它，部件和板子粘在一起了。所以，我显然想要那种甜美的动画，当模型决定移动棋子时。所以我不得不问其他模型很多问题，比如：“嘿，教我这个 **3D** 东西是怎么回事。我该如何理解它？”然后我会复制另一个模型告诉我什么，然后把它扔进 **Vzero**。所以，当你被困住时，你可以做的另一件事是，她在这里看不到，因为它只对我可见，但有一个调试按钮。调试按钮说，我问 **Vzero**：“嘿，给我调试工具，这样我就可以可视化 **3D** 模型网格。我可以可视化，我可以打开和关闭纹理。”所以 AI 本身可以帮助自己，并可以给你工具来调试问题，这有点元，但试试看。试试看，它会对你很有帮助。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: So I I do think that what we what we're dropping now is going to help you so much for the moments where I mean let's be real you can get stuck with AI right but now that you can essentially have this full like let's call it escape hatch right like you can if you want you can clone the repo and keep cooking on your local machine or if you need some someone else to help you this is fundamentally a collaborative medium that's the thing that GitHub unlocked for the world collaboration between engineers designers marketers and So um I I foresee that a lot less people are going to get stuck frankly. The models also keep getting smarter. Skills is going to help you a lot as well. So I'll give you an example. We are always adding new frameworks and new capabilities and XJS is getting more powerful and the AI SDK now that we have skills for those that we're going to preload into vo the model itself is not going to get it stuck as easily because now it has more resources to like figure out how to solve that problem. Another thing that I've done it actually used it for this project. So there's a lot of subtleties about this this 3D thing that I didn't know anything about 3D. So whenever I would get stuck, I would ask other models. Um I think it was something about um the way that and kudos to the um awesome soul the the the gentleman that uh open sourced the 3D. So I got it from Sketch Fab and he didn't design this for creating a game or anything like that. So all of the pieces were stuck together. It was almost like you had 3D printed it and the pieces were stuck together with the board. And so I obviously I want that sweet animation that when the model decides it moves the piece, right? Um and so I had to ask a lot of questions to other models about, hey, teach me what's going on with this 3D thing. How do I how do I reason about it? And then I would copy what another model tells me and I would toss it into Vzero. So, uh, another thing that you can do when you get stuck is you you she she can't see it here because it's only for me, but there's a debug button. And what the debug button says, I asked Bzero, "Hey, give me debugging tools so that I can visualize the mesh of the 3D model. I can visualize, I can turn the textures on and off." And so the the AI itself can help itself and can give you tools to debug problems, which is kind of meta, but try it. Try it and it's going to work well for you.

</details>

**Claire Vo**: 好的。所以你问了一个专家，也就是另一个模型。我的意思是，找出正确的问题来问。嗯，这非常有趣。谢谢你向我们展示了你如何使用 **Vzero** 的幕后，所有的新东西，以及你在个人生活和有趣项目中如何使用它的一些方式。我们很高兴看到这些。所以，你有了这个新的 VZ。你这里坐满了人。你想要他们做什么？他们能为你做什么？

<details>
<summary>Original English</summary>

**Claire Vo**: Okay. So, you you ask an expert, which is another model. I mean, find out the right question to ask. Well, this has been very fun. Thank you for showing us a little bit behind the curtain of how you use Vzero, all the new stuff, some of the ways you use it in your personal life and fun projects. We love to see it. So, you have this new VZ. You have this room full of people. What do you want from them? What What can they do for you?

</details>

**Guillermo Rauch**: 我的意思是，赶紧去发布吧。所以，试试看。给我们反馈。我们会非常非常快地修复它，因为我们正在“自食其力”。是的，分享你用 **Vzero** 构建的东西。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: I mean, get busy shipping. So, try it out. Uh give us feedback. Uh we will fix it as very very fast because we're going to be dog eating our own dog food. Uh and yeah share the things that you built uh with Vzero.

</details>

**Claire Vo**: 哦，后面有一个问题。哦，我喜欢。

<details>
<summary>Original English</summary>

**Claire Vo**: Oh we have a question back here. Oh I love it.

</details>

**Audience Member**: 所以我有一个问题。感谢你分享反馈过程，以及你如何从构思到生产的循环。在这个过程中，你们会做任何产品市场契合度（product market fit）的验证吗？你们如何验证你正在尝试构建的东西实际上对你的生态系统有用或有影响力？

<details>
<summary>Original English</summary>

**Audience Member**: So I had a question. Thank you for sharing like the feedback process how you loop um in terms of like from ideation to like production like during that process do you do any like product market fit? How do you validate that what you're trying to build is actually like useful or um impactful for like your ecosystem? Yeah, super hot off the presses new sort of mental model that we've been using internally. There's a customer zero and a customer one.

</details>

**Guillermo Rauch**: 是的，我们内部一直在使用一种非常新鲜的思维模型。我们有“客户零”和“客户一”。“客户零”我们喜欢自己。我们……就像 **Rick Rubin** 一样，我们对自己判断好坏的能力充满信心。我们喜欢自己的品味。我们已经摸爬滚打了一段时间。我们有我们希望在世界上看到的产品想法。但“客户一”也非常重要，比如一个封闭的设计伙伴 **Claire Vo**。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Yeah, super hot off the presses new sort of mental model that we've been using internally. There's a customer zero and a customer one. Customer zero, we like to to be ourselves. We uh it's like the Rick Rubin, the confidence in our ability to know what's good, whatever. Like we like our taste. We we've been around the block for a while. We want we have ideas of products that we would like to see out there in the in the universe. Uh but customer one is also really important like a closed design partner Claire Vo.

</details>

**Claire Vo**: 哦。

<details>
<summary>Original English</summary>

**Claire Vo**: Oh

</details>

**Guillermo Rauch**: **Claire Vzero** 和我们的 Claire 以及我们的 CPO 经常发短信。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Claire Vzero and our Claire and our our CPO are constantly texting.

</details>

**Claire Vo**: 我们在一个短信链上。

<details>
<summary>Original English</summary>

**Claire Vo**: We're on a text chain.

</details>

**Guillermo Rauch**: 她发 bug 报告。她发她需要的东西。所以拥有这样一群设计伙伴、企业公司、个人、社区成员，以及那些给我发 XVM 的人。所以你总是想要世界的压力测试。对于技能来说，就是人们告诉我们：“嘿，为什么 **Opus 4.5** 好像知道最新的 **Next.js** 但又不是真的知道，我们如何嵌入你的最佳实践？”所以这有点像在我们的待办事项中，我们思考这个问题已经有一段时间了，但后来它变得非常具体。我们当时想：“好吧，我们如何分发和发现这些技能？”所以这个想法变得非常完整，这就是像 **Vzero** 这样的工具真正帮助你的地方，因为当你想把它从你的脑海中提取出来时，你就可以直接用 **Vzero** 来实现。所以你今天看到的很多东西，都是从与我们设计副总裁的四五个 **Vzero** 提示对话开始的，然后他进一步完善，使其变得真正出色，还有我们的 CTO 和我们的产品负责人。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: She she she texts bug reports. She texts things she needs. So having that group of design partners, enterprise companies, individuals, community members, people that slide into my XVMs. So it's you always wanted that pressure test of of the world. And for skills it was that you know people telling us hey like why does Opus 4.5 kind of know the latest XJS but not really and how can we embed your best practices. So that was kind of like in in our backlog like we were thinking about that problem for a while but then it also became really concrete. We were like okay how would we go about distributing and discovering the skills and so sort of the idea became very complete and that's where a tool like Vzero really helps you because when you want to extract it out of your mind you can just vero it and so pretty much what you see today it started with a like four or five vzero prompts in a conversation with our VP of design who then took it way further and made it actually good and um and uh our our CTO and our and our product leader. So you mentioned about BMs, is there a possibility of having React Native in Visero?

</details>

**Audience Member**: 你提到了 BMs，**Vzero** 中有可能支持 **React Native** 吗？

<details>
<summary>Original English</summary>

**Audience Member**: So you mentioned about BMs, is there a possibility of having React Native in Visero?

</details>

**Guillermo Rauch**: 所以你今天看到的是，如果你仔细研究 **Vzero** 是如何构建的，它是建立在一系列 **Vercel** 基础设施之上的，你们所有人也都可以访问这些基础设施。我们用来运行 **Next.js** 预览的虚拟机叫做 **Sandbox**。所以 **Vercel Sandbox** 是一台非常强大的计算机。事实上，真正让代理变得强大的原因不是它们是完美的，而是它们拥有一个可供支配的计算机来解决任何问题。所以，我们向你展示了我们如何在内部使用 **D0** 的一瞥。**D0** 之所以擅长数据分析，是因为它有一台计算机，可以在上面进行研究，编写 **Python** 代码，运行它，查询 **Snowflake**，搜索网络，然后返回，修复它。这就像一个四五分钟的过程。所以这些计算机是非常强大的通用计算机。你可以想象它们运行 **React Native**。你可以想象它们编写其他编程语言。它们显然已经可以编写和运行 **Python**。所以从这个角度来看，潜力是无限的。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: So what you saw today is if you if you if you pee the covers of how Vero is built is built on a bunch of Verscell infrastructure that you also all have access to the the virtual machine that we use to run that Nex.js preview is called sandbox. So the Verscell sandbox and it's a very powerful computer. In fact, what's actually making agents really capable is not that they're perfect, is that they have a computer at their disposal in order to solve every any problem. So, the reason we showed you a glimpse of how we work internally with DZ. The reason DZero is so good at data analysis is that it has a computer where it can do research, it can write Python code, it can run it, it can make a look up to Snowflake, it can search the web, it can come back, it can fix it. It's like it's like a four or five minute process, right? And so these computers are very powerful general purpose computers. You could imagine them running React Native. You could imagine them writing other programming languages. They can obviously already write Python and run it. And so the sky's is the limit from that perspective.

</details>

**Claire Vo**: 我有一个关于那个话题的问题。**Vzero** 会在某个时候帮助你构建这些代理吗？

<details>
<summary>Original English</summary>

**Claire Vo**: I have a question on that topic. Is there going to be a point at which Vzero is going to help you build those agents?

</details>

**Guillermo Rauch**: 哦，绝对会。所以这个国际象棋的主要想法，它很可爱，但我提到了“工作流”这个词。所以对我来说，说这个程序在网络或计算故障的情况下会永远运行，这实际上是很难的。所以事实上，你知道，我们正在现场进行演示，只是随机想到了这个主意。我之所以有信心演示会成功，是因为如果 **LLM** 提供商宕机，或者函数调用失败，或者超时，或者其他任何情况，**Vercel** 的工作流引擎会说我们正在现场进行。我们会再试一次，我们会再试一次，我们会再试一次。我们要帮助你做的是在 **Vzero** 内部创建那种工作流。很多代理都需要那种可靠性。例如，你从 **Slack** 发送一条消息，你说：“@player GBT，去给我规划这个 PRD。”

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Oh, absolutely. So the main the main idea of this chess thing, it's cute, but I mentioned the word workflow. So it's actually tricky for me to say this program is going to run forever in the presence of network or compute failures. So in fact like uh you know we're doing this live and just randomly came up with the idea. The reason I had confidence the demo was going to work is that if an LLM provider is down or a function call dies or times out or whatever the workflow engine of our cell will say we're doing live. We're going to try it again and we're going to try it again and we're going to try it again. What we're going to help you do is create those kind of workflows from within v 0ero. A lot of agents need that kind of reliability. For example, you send a message from Slack and you say at player GBT go and spec out this PRD for me.

</details>

**Claire Vo**: 是的，它叫做 **@chatp**。它运行在工作流上，而且……

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah, it's called at chatp. It is running on workflows and

</details>

**Guillermo Rauch**: 是的，我们没有排练过这个。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: yes, we didn't rehearse this.

</details>

**Claire Vo**: 是的。所以我们确实有……我确实感受到了代理方面的痛苦，工作流真的很有帮助，因为它们为你提供了持久的、长时间的执行。你可以重试，事情可能会失败，你可以按顺序执行，你可以做各种各样的事情。所以我确实认为你在后端构建这种能力对于那些没有相同 UI 的应用程序也非常有帮助。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. So we we do have we do have uh I I feel the pain on on agents where um workflows are really helpful because they give you durable overtime execution. You can retry things, things can fail, you can do them sequentially, you can do all sorts of things. And so I do think the ability for you to build that on the back end is very helpful for even for applications that don't have the same kind of UI that you would have it

</details>

**Guillermo Rauch**: 因为有些是非常可视化的，有些会更无头（headless），比如有些会是为你工作的后台代理。事实上，世界对以前被称为 **Cladbot** 的艺术家感到兴奋。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: because some are some are very visual and some are going to be more headless like some are going to be background agents that are doing work for you. In fact, the world is excited about the artists formerly known as Cladbot. Yeah.

</details>

**Claire Vo**: **Moldbot**。顺便说一句，我不知道 **Moldbot** 是什么意思。

<details>
<summary>Original English</summary>

**Claire Vo**: Moldbot. I don't know what moldbot means, by the way.

</details>

**Guillermo Rauch**: 嗯，甲壳类动物，这就是你如何知道你家有上小学的孩子。甲壳类动物会脱壳，所以它们会蜕皮（mold）。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Well, uh, crustaceians, this is how you know you have kids in like elementary schools. crustaceians like lose their shell so they mold.

</details>

**Claire Vo**: 蜕皮，对。

<details>
<summary>Original English</summary>

**Claire Vo**: Moles are right.

</details>

**Guillermo Rauch**: 就像一条蛇。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: It's like a snake.

</details>

**Claire Vo**: 是的，明白了。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah, got it.

</details>

**Guillermo Rauch**: 然后出现并窃取你的银行账户。但那是一个后台事物的绝佳例子，对吧？因为你发短信给它，它为你做了很多事情，然后它回复你。所以这就是我们希望你能够用 **Vzero** 构建的那种东西，它将使用工作流。它可能会使用 **Sandbox**，它可能会更……我认为 **Moldbot** 是超级通用的。它可以做任何事情，甚至入侵你的电脑，但我期待很多非常酷的代理以这种方式工作，比如你只需通过 **WhatsApp** 它们，我们就会帮助你用 **Vzero** 构建它们。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: And then emerge to steal your bank account. But so that's a beautiful example of the background thing, right? Because you text it and it does a bunch of stuff for you and then it responds. So that that's the kind of thing that we want you to be able to build with Vzero where it's going to use workflows. It might use sandbox and it might be more I think moldbot is like super general. It can do anything and even hack your computer but uh I I I expect a lot of really cool agents to to work that way like you just WhatsApp them and we'll we'll help you build those with Vzero and

</details>

**Claire Vo**: 我在 **Vercel** 上实际部署的最后一件事是我的实时 **Moldbot** 对话。如果你想看……

<details>
<summary>Original English</summary>

**Claire Vo**: and the last thing I actually deployed on Versell was my live moltbot conversation. If you want to see

</details>

**Guillermo Rauch**: 它是什么终端？

<details>
<summary>Original English</summary>

**Guillermo Rauch**: what it is terminal

</details>

**Claire Vo**: 我关掉电脑就走开了。我并不享受我的……那是一次有趣的经历。如果你想看，可以点击订阅按钮。但我确实部署到了 **Vercel**，一个我与 **Moldbot** 对话的终端视图。所以你可以去，它叫做……

<details>
<summary>Original English</summary>

**Claire Vo**: I well I I shut the computer and walked away. I did not enjoy my it was an interesting experience. You can smash that subscribe button if you want to watch it. But I did I did deploy to Verscell a terminal view of my conversation with Mulbot. So you can go it's like it's called

</details>

**Guillermo Rauch**: 忏悔。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: confessions.

</details>

**Claire Vo**: 是的。哦，就是那个。是的。它真的很吓人。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. Oh that's exactly what it is. Yeah. It's real scary app.

</details>

**Audience Member**: 太棒了。也许再问一个问题。

<details>
<summary>Original English</summary>

**Audience Member**: Great. Maybe one more question.

</details>

**Vzero Ambassador**: 哦，哇。真是荣幸。首先，非常感谢你们举办这次活动。非常感谢新的 **Vzero**。我用 **Vzero** 发布了很多东西。我的联合创始人正在使用 **Cursor**，现在我们有了相互兼容性。

<details>
<summary>Original English</summary>

**Vzero Ambassador**: Oh wow. What an honor. First of all, thank you so much uh for hosting the event. Thank you so much for the new VZero. I I ship a lot with Vzero. My co-founder is using Cursor and now we have like a mutual compatibility.

</details>

**Claire Vo**: 我们又回来了。

<details>
<summary>Original English</summary>

**Claire Vo**: We're so back.

</details>

**Vzero Ambassador**: 喜欢它。就是这样。嗯，所以我想……再次强调，我也是 **Vzero** 大使。好了，我们开始吧。我想问两个问题。第一个问题有点不同，但你认为什么时候 **Vzero** 真正普及了从提示到 UI 的能力，而且是有效的 UI，并且满足了用户创建的提示。你认为这种范式什么时候会在消费者 **Gen UI** 中发生？我看到你的团队一直在尝试各种不同的库，不同的方式来创建它。你认为这种转变什么时候会发生？第二个问题是，我什么时候可以写一个提示，然后部署到应用商店？

<details>
<summary>Original English</summary>

**Vzero Ambassador**: Love it. There you go. Um and so I wanted to um again I'm also a Vzero ambassador. There we go. Let's go. Um I wanted to ask two questions. number one um a little bit different but when do you think so VZero has really democratized the ability to go from prompt to UI UI that works uh and UI that satisfies like the the the prompt that the user created when do you think that paradigm is going to happen within consumer in Gen UI uh I see that your team has been playing with a bunch of different libraries different ways to create that uh when do you think that switch is happening and then the second question when can I uh write a prompt and then deploy to the app store.

</details>

**Guillermo Rauch**: 是的。所以关于第一个问题，有时你会想要一个即时 **Vzero**。所以我们正在研究围绕 **生成式 UI** 的想法，其中代理可能会决定渲染一些东西，并将其视为自发创建 UI 代码然后立即渲染。你实际上不是在创建代码和应用程序并部署它。你只是想让它发生。所以我们正在对它会是什么样子进行大量研究。所以这是我们可以给代理的另一个工具。关于应用商店的问题，你已经看到我们用 **Vzero iOS 应用** 和 **React Native** 技能做的一些事情。我们长期以来的梦想是真正普及将应用推送到应用商店，就像你将应用推送到网络一样，这里的一切都使用相同的要素，一个基于 **React** 的部署平台，只需按一个按钮即可部署。所以，是的，不想承诺任何时间表，但绝对是我们想做的事情。

<details>
<summary>Original English</summary>

**Guillermo Rauch**: Yeah. So on the on the first question, sometimes you're going to want like a flash v0ero. So we're playing with ideas around generative UI where an agent might decide to render something and think of it as like spontaneously creating an a the UI code and then rendering it right away. You're not actually creating a code and an application and deploying it. You just want to make it happen. So we're doing a lot of research on like what would that look like? So it's another tool that we can give agents on the app store question you've seen some of the stuff that we've been doing with vzero iOS app react native skills a long held dream of ours has been to really democratize pushing to the apps are like you would push to the web and everything here is like sort of using that same those same ingredients uh reactbased deployment platform just deploy with one press of a button and whatnot. So, uh, yeah, don't want to promise any timelines, but, uh, definitely something we want to do.

</details>

**Claire Vo**: 谢谢。谢谢大家。非常感谢观看。如果你喜欢这个节目，请在 YouTube 上点赞并订阅，或者更好的是，给我们留言，分享你的想法。你也可以在 **Apple Podcasts**、**Spotify** 或你最喜欢的播客应用上找到这个播客。请考虑给我们评分和评论，这将帮助其他人找到这个节目。你可以在 **howiaipod.com** 上查看我们所有的剧集并了解更多关于节目的信息。下次再见。

<details>
<summary>Original English</summary>

**Claire Vo**: Thank you. Thanks everybody. Thanks so much for watching. If you enjoyed this show, please like and subscribe here on YouTube, or even better, leave us a comment with your thoughts. You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app. Please consider leaving us a rating and review, which will help others find the show. You can see all our episodes and learn more about the show at howiaipod.com. See you next time.

</details>