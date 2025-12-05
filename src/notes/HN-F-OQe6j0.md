---
author: AI Engineer
date: '2025-12-02'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=HN-F-OQe6j0
speaker: AI Engineer
tags:
  - ai-developer-platform
  - agent-first-ide
  - multimodal-ai
  - software-development-workflow
  - research-product-flywheel
title: Google DeepMind推出Anti-gravity：AI智能体驱动的开发者平台新范式
summary: Google DeepMind发布了全新的AI开发者平台Anti-gravity，它以“智能体优先”为核心理念，旨在通过AI智能体重塑软件开发工作流。该平台包含AI编辑器、智能体管理器和智能体控制的浏览器三大核心界面，并深度整合了Gemini 3 Pro等多模态AI模型的能力。文章详细介绍了Anti-gravity如何利用模型能力的提升，通过“工件”（Artifacts）这一创新交互模式，实现更高效、更直观的开发体验，并揭示了其背后“研究与产品飞轮”的独特开发模式。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
people:
  - Kevin Hou
  - Swix
  - Ben
companies_orgs:
  - Google
  - Google DeepMind
  - GitHub
products_models:
  - Anti-gravity
  - Gemini 3 Pro
  - Gemini
  - Nano Banana Pro
  - VS Code
  - Copilot
  - AI Studio
  - Google Docs
  - Figma
media_books: []
status: evergreen
---
### 欢迎来到Anti-gravity的世界

大家好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. Hello.</p>
</details>

这是今天最后一场演讲。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Last one of the day.</p>
</details>

我们能再提振一下精神吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Can we get a uh little energy boost?</p>
</details>

谁准备好了？谁准备好了？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Who's ready? Who's ready?</p>
</details>

好的，周五快乐。我希望大家

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, happy Friday. I hope everyone</p>
</details>

度过了美好的一周，以及一次愉快的会议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">has had a good week, a good conference.</p>
</details>

嗯，我告诉你们，如果你是“重力”，那这周过得可真糟糕。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and let me tell you, it's been a really bad week if you are Gravity.</p>
</details>

《魔法坏女巫2》（Wicked 2）今晚就要上映了。当然，**Anti-gravity**（Google DeepMind推出的一款AI开发者平台）也于本周早些时候与**Gemini 3 Pro**（Google推出的多模态AI模型）一同发布。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wicked 2 is coming out tonight. And then, of course, Anti-gravity came out earlier this week alongside Gemini 3 Pro on Tuesday.</p>
</details>

Google的Anti-gravity是一个全新的**IDE**（Integrated Development Environment: 集成开发环境），它来自Google DeepMind。这是首个由基础研究实验室推出的IDE，而且是刚刚发布。事实上，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Google Anti-gravity is a brand new IDE out of Google DeepMind. It's the first one from a foundational lab and it is coming right off the press. In fact, um</p>
</details>

我可能现在应该在开发产品，但我希望能花些时间分享我们今天在这里构建的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I probably should be working on the product right now, but I wanted to spend some time to share what we've built here today.</p>
</details>

Anti-gravity毫不妥协地秉持着**智能体优先**（Agent-first: 将AI智能体作为核心交互模式）的理念。今天，我将向大家介绍这意味着什么，以及它如何在产品中体现。但也许更有趣的是，我们将探讨我们是如何走到这一步的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Anti-gravity is unapologetically agent first. And today, I'm going to tell you a little bit about what that means and how it manifests in the product. But perhaps maybe a little bit more interestingly, we're going to talk a little bit about how we got here.</p>
</details>

产品原则、行业方向，以及诸如此类的事情。我是Kevin Hou，我在Google Anti-gravity领导我们的产品工程团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Product principles, direction of the industry, these sorts of things. Um so my name is Kevin How. I lead our product engineering team at Google Antigravity.</p>
</details>

让我们从基础开始。首先，我想了解一下在座各位的情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And let's start with the basics. Um, and first just to get a sense of the room.</p>
</details>

有多少人使用过Anti-gravity？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, who has used anti-gravity?</p>
</details>

好的，这就是Google的力量。我喜欢。有多少人使用过**智能体管理器**（Agent Manager: 集中管理AI智能体及其任务的界面）？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, there you go. Power of Google. Love it. Um, who's used the agent manager?</p>
</details>

很棒。好的。那么，Anti-gravity的基础知识。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cool. Nice. Good. Good. All right. So, basics of anti-gravity.</p>
</details>

Anti-gravity，值得注意的是，它就是这个产品名称，而不是泛指的反重力。它是一个AI开发者平台，具有三个界面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Anti-gravity, notably anti-gravity, not anti-gravity. Anti-gravity. It's an AI developer platform with three surfaces.</p>
</details>

第一个是编辑器，第二个是浏览器，第三个是智能体管理器。我们将深入探讨这意味着什么，以及每个界面是什么样子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first one is an editor. The second one is a browser and the third one is the agent manager. So we'll dive into what this means, which one what what each looks like.</p>
</details>

这里的一个范式转变是，智能体现在存在于你的IDE之外，它们可以跨多个不同的界面进行交互，而这些界面正是你的智能体或你作为软件开发者可能花费时间的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a paradigm shift here is that agents are now living outside of your IDE and they can interact across many different surfaces that your agent or that you as a software developer might spend time in.</p>
</details>

### Anti-gravity的核心功能：智能体管理器、AI编辑器与智能体控制浏览器

让我们从智能体管理器开始。它位于顶部，是你的中心枢纽。它是一个智能体优先的视图，将你提升到比仅仅查看代码更高的一个层面。所以，你不会只看代码差异，而是会退后一点。在任何给定时间，只有一个智能体管理器窗口。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And let's start with the agent manager. So that's the thing up top. This is your central hub. It's an agent first view and it pulls you one level higher than just looking at your code. So instead of looking at diffs, you'll be kind of a little bit further back. And at any given time, there is one agent manager window.</p>
</details>

现在你拥有一个AI编辑器。这可能是你已经喜欢并期待的功能。它拥有你所期望的所有花哨功能。闪电般的快速自动补全。你可以在这里制作关于“是的，我们分叉了**VS Code**（Visual Studio Code: 微软开发的免费开源代码编辑器）”的表情包。它还带有一个智能体侧边栏。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now you have an AI editor. This is probably what you've grown to love and expect. Has all the bells and whistles that you would expect. Uh lightning fast autocomplete. This is the part where you can make your memes about yes, we forked VS Code. And it has an agent sidebar.</p>
</details>

这种侧边栏与智能体管理器是镜像的。当你需要深入编辑器来完成任务的80%到100%时，它就派上用场了。我们让它变得非常非常容易，因为我们认识到并非所有事情都能完全由智能体为你完成，你可以通过Command+E或Control+E，在不到100毫秒的时间内，从编辑器即时跳转到智能体管理器，反之亦然。它非常迅速。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is the sort of thing it's mirrored with the agent manager. And this is when you need to dive into your editor to accomplish maybe your 80% to 100% of your task. And at any point, we made it very very easy because we recognize not everything can be done purely with an agent for you to command E or control E and hop instantly from the editor into the agent manager and vice versa. And this takes on under 100 milliseconds. It's zippy.</p>
</details>

最后，我非常喜欢的一个功能是智能体控制的浏览器。这真的非常酷。希望在座尝试过Anti-gravity的朋友们已经注意到了我们在这里面注入的一些魔力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then finally, something that I love, an agent controlled browser. This is really, really cool. And hopefully for the folks in the room that have tried anti-gravity, you've noticed some of the magic that we've put in behind here.</p>
</details>

我们有一个智能体控制的Chrome浏览器。这让智能体能够访问丰富的网络资源。我从两个方面来解释。第一，上下文检索。它拥有与你正常Chrome浏览器相同的认证。你可以让它访问你的**Google Docs**（Google开发的在线文档协作工具），你可以让它访问你的GitHub仪表盘等等，并像工程师一样与浏览器进行交互。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we have an agent controlled Chrome browser. And this gives the agent access to the richness of the web. And I mean that in two ways. The first one, context retrieval, right? It has the same authentication that you would in your normal Chrome. You can give it access to your Google Docs. You can give it access to, you know, your GitHub dashboards and things like that and interact with a browser like you would as an engineer.</p>
</details>

但你也在屏幕上看到，它让智能体能够控制你的浏览器，点击、滚动、运行JavaScript，并执行所有你用来测试应用程序的操作。所以，我在这里制作了一个随机艺术品生成器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But also what you're seeing on the screen is that it lets you it lets the agent take control of your browser, click and scroll and run JavaScript and do all the things that you would do to test your apps. So here I put together this like random artwork generator.</p>
</details>

你只需刷新，就能得到一张新的托马斯·科尔（Thomas Cole）艺术品图片。现在我们添加了一个新功能，就是一个小小的模态卡片。智能体实际上出去说：“好的，我编写了所有代码，但与其向你展示我做了什么的代码差异，不如向你展示一段Chrome的录屏。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All you do is refresh and you get a new picture of um like a Thomas piece of Thomas Cole artwork. And now we added in a new feature which is this little little modal card. and the agent actually went out and said, "Okay, I made all the code, but instead of showing you a diff of what I did, let's instead show you a recording of Chrome."</p>
</details>

所以，这是一段Chrome的录屏，其中蓝色圆圈代表鼠标。它在屏幕上移动，通过这种方式，你可以获得可验证的结果。这就是我们对Chrome浏览器感到非常兴奋的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is a recording of Chrome where the blue circle is the mouse. It's moving around the screen, and in this way, you get verifiable results. So, this is what we're very excited about our uh our Chrome browser.</p>
</details>

智能体管理器可以作为你的控制面板。编辑器和浏览器是你的智能体的工具。我们希望你花时间在智能体管理器中。随着模型变得越来越好，我敢打赌你会在这个智能体管理器中花费越来越多的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the agent manager can serve as your control panel. The editor and the browser are tools for your agent. And we want you to spend time in the agent manager. And as models get better and better, I bet you you're going to be spending more and more time inside of this agent manager.</p>
</details>

它有一个收件箱，我将稍微谈谈这个以及我们这样做的原因，但它允许你同时管理多个智能体。因此，你可以处理需要你关注的事情。例如，运行终端命令。我们不希望它只是随意运行每个终端命令。有些命令你可能希望确保自己点击“确定”才能执行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it has an inbox, and I'll talk a little bit about this and sort of why we did this, but it lets you manage many agents at once. So you can have things that require your attention. For example, running terminal commands. We don't want it to just kind of go off and just run every terminal command. There are probably some commands that you want to make sure you you hit okay on.</p>
</details>

所以，像这样的事情会显示在这个收件箱中。一键操作，你就可以管理同时发生的许多不同事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So things like this will get surfaced inside of this inbox. One click, you can manage many different things happening at once.</p>
</details>

它还具有出色的操作系统级通知功能。所以，如果有什么你需要处理的事情，它会通知你。这解决了同时处理多任务的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it has a wonderful OS level notification. So if there is something that you need, it will sort of let you know. And this kind of solves that problem of multi-threading across many tasks at once.</p>
</details>

因此，我们的团队很高兴推出这款全新的产品。这是一种全新的产品范式。我们与Gemini 3一同发布了它，这对团队来说是非常激动人心的一周。但不幸的是，我们容量不足了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so our team is thrilled to launch this brand new product. It's a brand new product paradigm. And we did so in conjunction with Gemini 3, which was a very exciting week for the team. But alas, we ran out of capacity.</p>
</details>

（笑声）

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">[laughter]</p>
</details>

嗯，这几天一直困扰着我。所以，我为此道歉。我代表Anti-gravity团队，为我们全球芯片短缺的情况道歉。我们正在夜以继日地工作，努力让它能为你所用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, this has been tormenting me the last couple of days. And so I apologize. On behalf of the anti-gravity team, I'd like to apologize for our global chip shortage. Um, we're working around the clock to try and make this work for you.</p>
</details>

希望我们能减少这类错误。但是，真正令人兴奋的是，使用过这款产品的人们已经看到了将这三个界面结合起来，能为他们的工作流、为他们的软件开发带来怎样的魔力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, hopefully we'll have a few less of these sorts of errors. Um, but we, it's what's been really exciting is people who have used the product have seen what the magic of combining these three surfaces can do for your workflows, for your software development.</p>
</details>

那么，我们来谈谈它。我们为什么要构建这个产品？我们是如何得出这个结论的？你可能会说：“哦，添加一个新窗口，这看起来相当随意，对吧？智能体管理器与许多其他界面之间存在这种一对多的关系。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so let's talk about it. Why did we build the product? How did we arrive at this sort of conclusion? You might say, "Oh, adding in a new window, it's pretty pretty random, right? It's this one to many relationship between the agent manager and many other surfaces.</p>
</details>

而且，重要的是要记住，我参加过几次这个会议，每次都有一个主题：产品的质量只取决于驱动它的模型。这对我们作为开发者来说非常重要，对吧？每年都会有这种新的阶跃函数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and it's important to remember I've I've been at this conference a couple of times and and everything every single time there is this theme. The product is only ever as good as the models that power it. And this is very important for us as builders, right? Every year there is this sort of new step function.</p>
</details>

首先有一年是自动补全，对吧？**Copilot**（GitHub推出的AI代码补全工具）。这种功能之所以成为可能，是因为模型突然擅长进行这种短形式的自动补全。然后我们有了聊天功能，通过**RHF**（Reinforcement Learning from Human Feedback: 基于人类反馈的强化学习）实现了聊天。然后我们有了智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first there was a year when it was autocomplete, right? Copilot. And this this sort of thing was only enabled because models suddenly got good at doing this short form autocomplete. And then we had chat. We had chat with RHF. Then we had agents.</p>
</details>

所以你可以看到，每一个产品范式都是由模型能力的一些变化所驱动的。我们的团队能够与DeepMind紧密合作，这是一种幸运。我们提前几个月就接触到了Gemini，并且能够与研究团队合作，基本上弄清楚：我们希望在产品中展示哪些优势？我们可以利用哪些方面？以及，差距在哪里？这种理想的体验，模型中存在哪些差距，以及我们如何弥补这些差距？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can see how every single one of these product paradigms is sort of motivated by some change that happens with model capabilities. And it's a blessing that our team is able to work and be embedded inside of DeepMind. We had access to Gemini for a couple of months um earlier and we were able to work with the research team to basically figure out you know what are the strengths that we want to show off in our product. what are the things that we can exploit and then also what are the gaps right this desired experience where are the gaps in the model and and how can we fix that right?</p>
</details>

所以，这就是Anti-gravity之所以诞生的一个非常非常强大的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so this is this was a very very powerful part of why anti-gravity came to be.</p>
</details>

### 模型能力驱动的产品创新：浏览器使用与图像生成

由一个“小小的纳米香蕉艺术品”（Nano Banana artwork）驱动，主要有四类改进。第一类是智能和推理。你们可能都熟悉这一点，你们使用过**Nano**（Google的轻量级AI模型）或Gemini 3，并且可能认为它是一个更智能的模型。这很好，它更擅长遵循指令，更擅长使用工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there are four main categories of improvements powered by a little nano banana artwork the first one is intelligence and reasoning you all are probably familiar with this you use nano or you used um Gemini 3 and you probably thought it was a smarter model this is good it's better at instruction following it's better at using tools.</p>
</details>

工具使用上有了更多细微之处。你可以负担得起一些事情，比如现在有了一个浏览器。你可以在浏览器中做无数的事情。它甚至可以执行JavaScript。你如何让一个智能体理解所有这些工具的细微之处？它现在可以执行更长时间运行的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's more nuance in the tool use. You can afford things like, you know, there's a browser now. There's a million things that you could do in a browser. It can literally even execute JavaScript. How do you get an agent to understand the nuance of all these tools? It can do longer running tasks.</p>
</details>

这些事情现在需要更长的时间，对吧？所以你可以负担得起在后台运行这些任务。它思考的时间更长了。时间被拉长了。然后是**多模态**（Multimodal: 能够处理和理解多种类型数据，如文本、图像、音频等）。我真的很喜欢Google一直在做的这个特性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These things now take a bit longer, right? And so you can afford to run these things in the background. It thinks for longer. Just time has gotten stretched out. And then multimodal. I really love this property of what Google has been up to.</p>
</details>

Gemini 3的多模态功能非常出色，当你将其与**Nano Banana Pro**（Google DeepMind内部对Gemini某变体的昵称）等所有其他模型结合起来时，你真的会得到一些神奇的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the multimodal functionality of Gemini 3 is off the charts and you start combining it with all these other models like Nano Banana Pro um and you really get something magical.</p>
</details>

所以我们大致有这四个不同的类别，在这些方面事情变得更好了。如果你考虑这些特性，问题就变成了我们如何处理这些差异。从产品的角度来看，就是你如何构建一个产品来利用这股新浪潮。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have these roughly four different categories where things have gotten much better and if you think about these properties the question becomes what do we do about these differences and from a product perspective it's like how do you construct a product that can take advantage of this new wave and hopefully</p>
</details>

在我看来，这是下一个阶跃函数：自动补全、聊天、智能体，然后我可能需要想出一些比现在这个名字更有趣的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and in my opinion this is the next step function autocomplete chat agents and then I probably got to come up with something more interesting than whatever this thing is called.</p>
</details>

所以第一步是，我们希望提升能力上限。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So step one is we want to raise the ceiling of capability.</p>
</details>

我们希望目标更高，有更高的抱负。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We want to aim higher, have higher ambition.</p>
</details>

因此，DeepMind的许多团队都在进行各种前沿研究，对吧？Google是一家非常大的公司。我从初创公司到这些大公司的一个学习是，有一群人正在攻克一个非常非常困难的技术问题。作为一个书呆子，这超级令人兴奋，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so a lot of the teams at DeepMind were working on all sorts of cutting edge research, right? There's Google is a big big company. And one of my learnings going from a startup to one of these bigger companies is that there is a team of people that is attacking a very very hard technical problem. And as a nerd, this is super exciting, right?</p>
</details>

然后作为一个产品经理，你会觉得“哇，我们可以开始使用计算机了。”所以，浏览器使用是其中一个巨大的突破。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then as a product person it's like wow we can start using computer use. So browser use has been one of these huge unlocks.</p>
</details>

这有两方面。我提到了检索方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is twofold right I mentioned the sort of retrieval aspect of things. Um</p>
</details>

我想对于软件工程师来说，除了代码之外，还有很多事情发生。你可以大致认为有“构建什么”、“如何构建”以及“实际构建”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess for for software engineers there is much more that happens that is beyond the code right you can roughly think about it as there's what to build there's how to build it and then you actually have to build it.</p>
</details>

我会说“实际构建”已经变得或多或少，你知道，对于模型来说，在给定上下文的情况下，生成功能上应该可用的代码是合理的。然后是“构建什么”，这取决于你的人类想象力。然后是“如何构建”，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would say building it has become more or less you know it's reasonable for the model to now given context it can generate the code that hopefully functionally works and then you've got the what to build this is the part that is up to you kind of human imagination and then there's the how to build it right?</p>
</details>

这里有丰富的上下文，丰富的机构知识，而这些正是通过访问浏览器、访问你的bug仪表盘、访问你的实验等各种资源，让智能体获得额外一层上下文。也许我应该早点点击，但如果你在屏幕上看到，我该怎么做呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there's this richness in context the richness and institutional knowledge and these are the sorts of things that having access to a browser having access to your bug dashboards having access to your experiments all these sorts of things that now gives the agent this additional level of context and maybe I should have clicked before, but if you saw on the screen, let's see, how do I do this?</p>
</details>

所以，这是另一方面。浏览器是验证。你可能看过这个视频，这是我们制作的一个关于如何使用它的教程视频。但这是智能体。蓝色边框表示它正在被智能体控制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is now the other side of things. Browser is verification. So, you might have seen this video, this is a tutorial video that we put together on just how to use it. But this is the agent. The blue border indicates that it's being in control by the agent.</p>
</details>

所以，这是一个航班追踪器。你输入一个航班ID，然后它会给你航班的起点和终点。这完全是由一个Gemini计算机使用变体完成的。所以它可以点击、滚动、检索**DOM**（Document Object Model: 文档对象模型），它可以做所有的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, this is a flight tracker. You put in, you know, a flight ID and then it'll give you sort of the start and end of of that flight. And this is being done entirely by a Gemini computer use variant. So it can click, it can scroll, it can retrieve the DOM, it can do all the things.</p>
</details>

然后真正酷的是，你最终得到的不仅仅是代码差异，而是一段它所做操作的屏幕录像。所以它改变了游戏规则。模型可以利用这一点，因为它具有理解图像的能力，它可以从那里进行迭代。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then what's really cool is you end up with not just a diff, you end up with a screen recording of what it did. So it's changed the game. And the model can take this and because it has the ability to understand images, it can take this and iterate from there.</p>
</details>

所以这是第一类，浏览器使用，简直是疯狂、神奇的体验。现在我们想花时间关注的第二个方面是图像生成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that was the first category, browser use, just an insane, insane magical experience. Now the second place that we wanted to spend time is on image generation.</p>
</details>

我们注意到这个主题，当我第一次在Google工作时，我们注意到Gemini在多模态方面投入了大量时间。这对于消费者用例来说非常棒，对吧？Nano Banana 2令人惊叹。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we noticed this theme when we, you know, when I when I first started at at Google, we noticed, okay, Gemini is spending a lot of time on multimodal. And this is really great for consumer use cases, right? Nano Banana 2 was was mindboggling.</p>
</details>

但对于开发者来说也是如此。开发者本质上就是一种多模态体验。你不仅仅是看文本。你还在看网站的输出。你还在看架构图。编码不仅仅是文本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but also for devs. Devs are inherently this is a multimodal experience. You're not just looking at text. You're looking at the output of websites. You're looking at architecture diagrams. There's so much more to coding than just text.</p>
</details>

所以有图像理解。这包括验证截图、验证录像等所有这些事情。Google的妙处在于它具有协同效应。这个产品不仅考虑了Gemini 3 Pro，还考虑了图像方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so there's image understanding. This is verifying screenshots, verifying recordings, all these sorts of things. And then the beautiful part about Google is that you have this synergistic nature. This product takes into account not just Gemini 3 Pro, but also takes into account the image side of things.</p>
</details>

所以，我想在这里给大家快速演示一下模型。我有一个预感，你们可能也相信这一点。设计将会改变，对吧？你可能会花一些时间与智能体迭代，以得到一个模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so here I want to give you a quick demo of um mockups. So I have a hunch and you all probably believe this too. Design is going to change, right? You're going to spend, you know, maybe some time iterating with an agent to to arrive at a mockup.</p>
</details>

但对于像“我们来构建这个网站”这样的事情，我们可以从图像空间开始。图像空间真正酷的地方在于它能让你做一些非常酷的事情，比如这样。我们可以添加评论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But for something like, oh, let's build this website. we can start in image space. And what's really cool about image space is it lets you do really cool things like this. We can add comments.</p>
</details>

所以你最终会留下评论，并排队等待一系列回复。这有点像GitHub。你只需说：“好的，现在更新设计。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you end up commenting and leaving a bunch of a bunch of queued up responses. And it's kind of like GitHub. You'll just say, "All right, now update the design."</p>
</details>

然后它会把它放在这里。智能体足够聪明，知道何时以及如何应用这些评论。现在我们正在图像空间中与智能体进行迭代。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then it'll put it in here. The agent is smart enough to know when and how to apply those comments. And now we're iterating with the agent in image space.</p>
</details>

所以这是一个非常非常酷的新功能。最棒的是，我们有Nano Banana Pro，你知道，为了Gemini的发布，我们熬了一个通宵，因为那是我们的第一次发布。然后他们说：“再来一次。周四再来一次。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So really, really cool new capability. And what was awesome is that um we had Nano Banana Pro, you know, we pulled an allnighter for uh for the Gemini launch because that was our first launch. Then they said, "Do it again. Do it on Thursday."</p>
</details>

所以我们发布了Gemini Pro——或者我把这些模型名称都搞混了。图像生成模型，也就是Nano Banana模型，我们在发布第一天就将其集成到了Anti-gravity编辑器中。我第一天几乎没怎么睡觉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we made Gemini Pro um or I'm getting all these model names confused. The image Gen one, the Nano Banana one, we made that available on day one. I'm running on very little sleep on day one inside of the anti-gravity editor.</p>
</details>

我们希望Anti-gravity编辑器能成为一个平台，任何新的功能都可以在我们的产品中得到体现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And our hope is that the anti-gravity editor is this place where any sort of new capability can be represented inside of our product.</p>
</details>

### “工件”：智能体与用户交互的新范式

所以第二步是，我们有了这个新功能。我们已经提升了能力上限。智能体可以执行更长时间运行的任务。它们可以做更复杂的事情。它们可以在其他界面上进行交互。因此，这需要一种新的交互模式。我们称之为**工件**（Artifacts: AI智能体生成的动态信息表示，用于组织、沟通和记忆）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so step two was all right, we have this new capability. We've pushed the ceiling higher. Agents can do longer running tasks. They can do more complicated things. They can interact on other surfaces. And so this necessitates a new interaction pattern. And we're calling this artifacts.</p>
</details>

这是一种与智能体合作的新方式。这是我最喜欢的产品部分之一。它的核心是智能体管理器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is a new way to work with an agent. And this is one of my favorite parts about the product. And at its core is this agent manager.</p>
</details>

那么，我们首先来定义一下工件。工件是智能体生成的信息的动态表示，为你和你的用例服务。这里的关键是它的动态性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's start by defining an artifact. An artifact is a dynamic representation of something that the agent generates. Sorry, it's a an artifact is something that the agent generates that is a dynamic representation of information for you and your use case. And the key here is that it's dynamic.</p>
</details>

工件用于保持智能体的组织性。它们可以用于自我反思和自我组织。它们可以用于与用户沟通，也许给你一个截图，也许给你一个屏幕录像，就像我们描述的那样。它们也可以跨智能体使用，无论是与我们的浏览器子智能体，还是与其他对话，或者作为记忆。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Artifacts are used to keep the agent organized. They can use used for uh kind of like self-reflection and and self-organization. It can be used to communicate with the user to maybe give you a screenshot to maybe give you a screen recording like we described. And it can also be used across agents, whether this be with our browser sub agent or with other conversations or as memory.</p>
</details>

这就是你在智能体管理器右侧看到的内容。我们已经将屏幕的一半和你的侧边栏专门用于这个工件概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is what you see on the right side of this agent manager. We've dedicated sort of half the screen and and your sidebar to this concept of artifacts.</p>
</details>

我们都曾尝试遵循思维链。我想说，我们在这里的智能体管理器中做了一些巧妙的设计，以确保对话被分解成块。所以理论上，你可以在对话视图中更好地跟踪，但最终你看到的是大量的字符串，大量的**tokens**（AI模型处理的基本信息单元）。这很难跟踪。而且实际上，这样的内容可能有10个，对吧？所以你只是不停地滚动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we've all tried to follow along chain of thought. And I would say this, you know, we did some fanciness here inside of the agent manager to make sure conversations are broken up into like chunks. So in theory, you could follow along a little bit better in the conversation view, but ultimately you're looking at a lot a lot of strings, a lot of tokens. This is like very hard to follow. And then this is actually like there's like 10 of these, right? So you just scroll and scroll and scroll.</p>
</details>

你会想：“这个智能体到底做了什么？”而这传统上是人们审查和监督智能体的方式。你只是在查看思维模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're like, "What the heck did this agent do?" And and this this has been traditionally the way that people review and sort of supervise agents. You're kind of just looking at the thought patterns.</p>
</details>

但是，通过这种可视化表示来理解正在发生的事情，难道不是容易得多吗？这就是工件的意义。我站在这里，没有给你冗长的意识流，而是用PowerPoint，PowerPoint就是我的工件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But isn't it much easier to understand what is going on inside of this visual representation? And that is what an artifact is. The whole point and the reason why I'm not just standing up here and giving you this long, you know, stream of consciousness is because I have a PowerPoint. The PowerPoint is my artifact.</p>
</details>

所以Gemini 3在处理这种可视化表示方面非常强大。它在多模态方面非常强大。所以，与其展示这些（当然我们总是会展示），我们更希望专注于这个。我认为这是Anti-gravity的颠覆性部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so Gemini 3 is really really strong with this sort of visual representation. It's really strong with multimodal. And so instead of showing this, which of course we always let you show, we always we will always show you this, but we want to focus on this. And I think this is the game-changing part about anti-gravity.</p>
</details>

主题就是这种动态性。模型可以决定是否要生成一个工件。让我们记住，有些任务，比如我们修改一个标题，修改一些小东西，并不真正需要生成一个工件。所以，它会决定是否需要工件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the theme is this dynamicism. The model can decide if it wants to generate an artifact. And let's remember there are some tasks. We're changing a title. We're changing something small. Doesn't really need to to produce an artifact for this. So, it will decide if it needs an artifact.</p>
</details>

然后第二点是，什么类型的工件？这才是真正酷的地方。它有许多潜在的、可能是无限的方式来表示信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then second, what type of artifact? And this is where it's really cool. There there are many potential in potentially infinite ways that it can represent information.</p>
</details>

所以，常见的类型是**Markdown**（一种轻量级标记语言），以计划和演练的形式。这可能是你最常使用的。当你开始一个任务时，它会进行一些研究。它会制定一个计划。这非常像一份**PRD**（Product Requirements Document: 产品需求文档）。它甚至会列出未解决的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, the common ones are markdown in the concept of a of a plan and a walkthrough. So, this is probably what you've used most most often. When you start a task, it will do some research. It will put together a plan. This is much very much like a PRD. It will even list out open questions.</p>
</details>

所以你可以在这个反馈部分看到，它会提出：“嘿，在我开始之前，你可能需要回答这三个问题。”真正棒的是，我们在这里押宝在模型上，真正棒的是模型会决定它是否可以自动继续。如果它没有问题，为什么要等待？它应该直接开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you can see in this feedback section, it'll surface, hey, you should probably answer these three questions before I get going. And what's really awesome, and we're betting on the models here, what's really awesome is that the model will decide whether or not it can auto continue. If it has no questions, why should it wait? It should just go off.</p>
</details>

但通常情况下，可能存在你描述不清楚的地方，或者它在研究过程中做了一些事情，对吧？每个人都经历过开始一个大的重构，然后意识到他们并没有掌握所有信息。他们不得不重新开始，也许和一些人谈谈。同样的道理。所以它会为你提出未解决的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But more often than not, there are probably areas where you may be underspecified or maybe it did something during research, right? everyone has gone through and and started a big refactor then realized they actually don't have all the information ahead of them. They got to go back to the drawing board, maybe talk to some people. Same idea. So it'll surface um it'll surface open questions for you.</p>
</details>

所以你会从那个实施计划开始，然后你会说：“好的，**LGTM**（Looks Good To Me: 看起来不错），我们发送吧。”你一直往下看。它可能会生成其他工件。你知道，我们这里有一个任务列表。这是你监控智能体进度的方式，而不是查看对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so that's you'll start with that implementation plan and then you'll say all right LGTM let's like send it. You go all the way down. It might produce other artifacts. You know we've got a task list here. This is the way that you can monitor the the progress of the agent instead of looking at the conversation.</p>
</details>

它可能会制作一些架构图，然后你会在最后得到一个演练。这个演练你之前已经瞥见过，但它就是：“嘿，我如何向你（智能体对人类）证明我做了正确的事情，并且做得很好。”然后这是你最终会得到的部分，它有点像一个**PR**（Pull Request: 代码合并请求）描述。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">might put together some architecture diagrams and then you'll get a you'll get a walkthrough at the end and this walkthrough you kind of saw a glimpse of this before but it is hey how do I prove to you agent to human that I did the correct thing and I did it well and then this is the part that you'll end with it's kind of like a PR description.</p>
</details>

然后还有一大堆其他类型，对吧？图像、屏幕录像、**Mermaid图**（一种基于文本的图表绘制工具）。真正酷的是，因为它具有动态性，智能体会随着时间推移自行决定。所以突然间，可能有一种我们可能遗漏的新型工件，对吧？然后它会弄清楚。它就会成为体验的一部分。所以它非常可扩展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then there's a whole host of other types right Images screen recordings these mermaid diagrams and really what's what's what's quite cool is that because it's dynamic the agent will decide this over time so suddenly there's maybe a new type of artifact that we maybe we missed Right? And then it'll figure that out. It'll just become part of the experience. So it's very scalable.</p>
</details>

但这个工件原语是非常非常强大的，我对此感到非常兴奋。然后我想另一个问题是，为什么需要它？所以我们总是会向用户解释这个工件的目的是什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this artifact primitive is something that's very very powerful that I'm pretty excited about. And then I guess another question is why is it needed? So we'll always explain to the user what the purpose of this artifact is.</p>
</details>

然后有趣的是，谁应该看到它？子智能体应该看到它吗？其他智能体应该看到它吗？其他对话应该看到它吗？这应该存储在我的记忆库中吗？对吧？如果这是我推导出来的东西，我喜欢的一个很酷的例子是，如果你给它一份文档和你的**API密钥**（Application Programming Interface key: 应用程序编程接口密钥），它就会去运行**curl请求**（一种命令行工具，用于通过URL传输数据），基本上弄清楚你正在使用的API的确切**schema**（结构/模式），它会进行这种深入的研究，持续相当长一段时间，然后给你一份报告，基本上深入理解这种API。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and then interestingly like who should see it? So should the sub agents see it? Should the other agents see it? Should other conversations see this? Should this be stored in my memory bank? Right? If this is something that I derived, one of the cool examples um that I like is like if you give it a a piece of documentation and give it your API key, it'll like go off and run curl requests to basically figure out the exact schema of like what the types of APIs you're using and it'll do this like deep research um for quite a while and then it'll give you a report and basically like deeply understand uh this sort of uh this sort of API.</p>
</details>

你不会想把它直接扔掉，然后在第二次做同样的事情时重新推导。所以它会把它存储在你的记忆中，然后突然间，它就成了你的知识库的一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You wouldn't want to just throw that away and have to rederive it the second time you did this. So it'll store it in your memory and then all of a sudden that's just a part of your knowledge base.</p>
</details>

然后还有通知的概念，对吧？所以，如果有一个未解决的问题，你希望智能体能主动与你沟通。这是这个工件系统的另一个非常酷的特性。我们希望能够在这个执行过程中提供反馈。所以，从任务开始到任务结束，我们希望能够提供反馈并告知智能体需要改变什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, and then there's also this idea of like notifications, right? So, if there's an open question, you want the agent to be proactive with you. And that's another very cool property of this artifact system. We want to be able to provide feedback along this cycle. So, from task start to task end, we want to be able to provide feedback and inform the agent on what to change.</p>
</details>

工件系统让你在执行过程中更流畅地与模型迭代。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the artifact system lets you iterate with the model more fluidly during this process of execution.</p>
</details>

所以，我不想听起来像是在为Google打广告，但我喜欢Google Docs，对吧？Google Docs是一个很棒的模式。它很棒。评论功能很棒。这就是你可能与同事互动的方式，对吧？你们在一个文档上协作。然后突然间，你想留下一个基于文本的评论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, not to sound like a complete Google shell, but I love Google Docs, right? Google Docs is a great pattern. It's awesome. The comments are great. And this is how you might interact with a colleague, right? You're collaborating on a document. Then all of a sudden, you want to leave a textbased comment.</p>
</details>

所以我们从中汲取了灵感。我们从GitHub中汲取了灵感。但你留下评论。你高亮文本。你说：“嘿，也许这部分需要再完善一下。也许你遗漏了某个部分，或者实际上不要使用**Tailwind**（一个CSS框架），使用**vanilla CSS**（纯CSS）。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we took inspiration from that. We took inspiration from GitHub. But you leave comments. You highlight text. You say, "Hey, maybe this part needs to get ironed out a bit more. Maybe there's a part that you missed or actually don't use Tailwind. Use vanilla CSS."</p>
</details>

所以这些就是你会留下的评论。你会把它们批量处理，然后发送出去。然后在图像空间中，这非常酷。我们现在有了这种类似**Figma**（一款基于云的UI/UX设计工具）的拖放，或者说不是拖放，而是高亮选择。现在你正在以一种完全不同的模态留下评论，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, these are the sorts of comments that you would leave. You'd batch them up and then you go off and send. And then in image space, this is very cool. We now have this like Figma style drag and drop like or not drag, you know, highlight to select. And now you're leaving comments in a in a completely different modality, right?</p>
</details>

我们已经做到了这一点，并对智能体进行了工具化，使其能够自然地考虑你的评论，而不会中断任务执行循环。所以，在对话的任何时候，你都可以说：“哦，实际上，在浏览器执行过程中，我真的不喜欢那个结果。让我高亮它，告诉你，然后发送出去。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we've done this and instrumented the agent to ma naturally take your comments into consideration without interrupting that task execution loop. So at any point during your conversation, you could just say, "Oh, actually, you know, mid mid browser actuation, I actually really don't like the way that that turned out. Let me just highlight that, tell you, send it off."</p>
</details>

然后我会在你完成考虑这些评论后得到通知。所以这是一种全新的工作方式。这正是我们试图用Anti-gravity构建的核心。它将你拉到更高层次的视图中。智能体管理器确实是为了优化工件的用户界面而构建的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then I'll just get notified when you're done taking into consideration those comments. And so it's a whole new way of working. And this is really at the center of what we're trying to build with anti-gravity. It's pulling you out into this higher level view. And the agent manager really is built to optimize the UI of artifacts.</p>
</details>

所以我们有一个非常非常出色的工件审查系统。我们对此感到非常自豪。它还可以处理并行性和编排等特性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have a beautiful, beautiful artifact review system. We're very proud of this. And it can also handle sort of the property that is like parallelism and orchestration.</p>
</details>

所以无论是许多不同的项目，还是同一个项目，你只是想在进行API研究的同时，执行设计模型迭代，同时迭代并实际构建你的应用程序。你可以并行完成所有这些事情，而工件就是你提供反馈的方式。通知就是你知道有事情需要你关注的方式。这是一种完全不同的模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So whether this be many different projects, whether this be the same project and you just want to execute maybe a design mockup iteration at the same time you're doing research on an API at the same time you're iterating and and and actually building out your app. You can do all these things in parallel and the artifacts are the way that you provide that feedback. The notifications are the way that you know that something requires your attention. It's a completely different pattern.</p>
</details>

真正好的是，你可以退一步，当然你总是可以进入编辑器。我不会骗你。有些任务，你知道，你可能还不信任智能体。我们还不信任模型。所以你可以按Command+E，它会在一秒钟内打开编辑器，显示精确的文件、精确的工件和精确的对话，随时供你自动补全，继续同步聊天，让你从80%完成到100%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what's really nice is that you can you can take a step back and of course you can always go into the editor. I'm not going to lie to you. There are tasks that you know you maybe don't trust the agent yet. We don't trust the models yet. And so you can command E and you can command E and it'll open inside the editor within a split second with the exact files, the exact artifacts and that exact conversation open ready for you to autocomplete away to continue chatting synchronously to get you from 80% to 100%.</p>
</details>

所以我们总是希望给开发者提供那个“逃生舱口”。但在未来的世界里，我们正在为未来而构建。你将花费大量时间在这个智能体管理器中，与并行的子智能体一起工作，对吧？这是一个非常非常令人兴奋的概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we always want to give devs that escape hatch. But in the future world, we're building for the future. You'll spend a lot of time in this agent manager working with parallel sub agents, right? It's a very very exciting concept.</p>
</details>

### DeepMind的“研究与产品飞轮”

好的，现在你已经看到了我们有了新的能力，多种新的能力，我们有了一个新的形态。现在的问题是，DeepMind内部到底发生了什么？这里的秘密是一个教训，我想我们只是在过去，我不知道，我们花了大约，或者我个人花了大约三年时间在代码生成上。那就是成为你最大的用户，对吧？这创造了研究与产品之间的飞轮。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so now that you've seen we've got new capabilities, multitude of new capabilities, we've got a new form factor. Now the question is like what is going on under the hood at Deepmind? And the secret here is a lesson that I guess we've just learned over the past I don't know we've spent like or I I've personally spent like three years in in codegen. It's just to be your your biggest user, right? And that creates this research and product flywheel.</p>
</details>

所以我会告诉你，Anti-gravity将是市场上最先进的产品，因为我们正在为自己构建它。我们是自己的用户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I will tell you anti-gravity will be the most advanced product on the market because we are building it for ourselves. We are our own users.</p>
</details>

所以，在日常工作中，我们能够让Google工程师、DeepMind研究人员在内部早期访问，现在是正式访问Anti-gravity。所以现在突然间，人们正在改进的模型的实际体验，使用智能体管理器和接触工件的实际体验，让他们在非常真实的层面上看到模型中的差距。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so in the dayto-day we were able to give Google engineers, deep mind researchers, we were able to give them an early access and now an official access to anti-gravity internally. And so now all of a sudden the actual experience of the models that people are improving, the actual experience of of using the agent manager and touching artifacts is letting them see at a very very real level what are the gaps in the model.</p>
</details>

无论是计算机使用、图像生成还是指令遵循，对吧？这些团队中的每一个，Google有许多团队，都在这个非常非常完整的堆栈产品中有所贡献。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And whether it be computer use, whether it be image generation, whether it be instruction following, right? Every single one of these teams, and there are many teams at Google, has some hand inside of this very, very full stack product.</p>
</details>

所以你可能会注意到，作为一名基础设施工程师，你可能会说：“哦，这有点慢。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you might notice as an infrastructure engineer, you might say, "Oh, this is a bit slow.</p>
</details>

页面。那么，去改进它，对吧？所以，它给了你这种洞察力，这是评估（eval）根本无法提供的。我认为这就是作为DeepMind的一员真正酷的地方。你能够以一种创造飞轮并推动前沿的方式整合产品和研究。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">page. Well, go off and and make that better, right? So, it gives you this level of insight that eval just simply can't give you. And I think that's what's really cool about being a deep mind. You are able to integrate product and research in a way that creates this flywheel and pushes that frontier.</p>
</details>

我向你保证，无论那个前沿提供什么，我们都会为世界其他地方的Anti-gravity提供。这些是相同的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I guarantee you that whatever that frontier provides, we will provide an anti-gravity for the rest of the world. These are the same product.</p>
</details>

所以，我将给你两个例子来说明这是如何运作的。第一个是计算机使用示例，对吧？我们与计算机使用团队合作，我们离他们只有几十英尺远，我们识别出两边的差距，对吧？所以我们不仅仅是使用API，我们还在团队之间进行交互，基本上说：“哦，这里的能力有点问题，我们能去弄清楚这里发生了什么吗？也许数据分布不匹配。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, I'll give you two examples of how this is has worked. The first one was that computer use example, right? in collaboration with the computer use team which we sit you know a couple couple tens of feet away from we identify gaps on both sides right so we're not just using an API we are interacting across teams to basically say oh like the capability is kind of off here can can we go off and figure out what's going on here maybe there's a there's a mismatch in data distribution.</p>
</details>

然后在另一边，他们会说：“嘿，你的智能体工具链有点问题，你需要修复你的工具。”对吧？所以我们就会去修复我们这边的问题，但正是这种和谐，是双方相互交流，才使这种事情成为可能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then on the other side it's like yo your like agent harness is like pretty screwed up you got to fix your tools right? and so then we'll go off and we'll fix our side but it's this harmony it's it's both sides talking to each other that really makes this type of thing possible.</p>
</details>

同样，你提出了一个新的产品范式——工件。工件在最初的版本中并不好，对吧？训练的哪一部分，数据分布的哪一部分包含了这种奇怪的审查概念？所以，这需要一些基础工作，与研究团队合作，弄清楚：“好的，让我们稳步提高这种能力。让我们给你一个可以攀登的山坡。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Similarly, you come up with a new product paradigm artifacts. Artifacts were not good on the initial on the initial uh versions, right? What part of training, what part of data distribution includes this like weird concept of reviews? And so, it took a little bit of plumbing, a little bit of work with the research team to figure out, all right, let's steadily improve this ability. Let's give you a hill to climb.</p>
</details>

然后现在我们能够发布Gemini 3 Pro，它具有非常好的处理这类工件的能力。所以，我真正押宝的就是这种循环性质。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then now we were able to launch Gemini 3 Pro with a very good ability to handle these sorts of artifacts. And so it's this cyclic nature that I'm really really betting on.</p>
</details>

### 总结：Anti-gravity如何“反抗重力”

这就是Anti-gravity将如何“反抗重力”的方式。我们正在提升能力上限。我们将拥有一个具有非常高抱负的智能体。我们将尽力做到最好。这包括**vibe coding**（一种强调直觉和感觉的编程方法）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this this is really how anti-gravity will defy gravity. We've got pushing the ceiling. We're going to have an agent with very very high level of ambition. We're going to try and do as much as we can. And this includes vibe coding.</p>
</details>

尽管我会说Google有一些非常优秀的产品。**AI Studio**（Google的AI开发平台）是一款优秀的产品。我们致力于提高上限。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Though I will say there are some excellent products out there by Google. AI Studio is an excellent product. We are in the business of increasing the ceiling.</p>
</details>

其次，我们构建了这种智能体优先的体验：工件、智能体管理器。最后，我们拥有这个研究与产品飞轮。这就是魔力所在。这就是我们在构建Anti-gravity时使用的三步流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Second, we built this agent first experience artifacts agent manager. And then finally, we have this research product flywheel. And this is the magic. And this is the three-step process that we used in building anti-gravity.</p>
</details>

所以，这真是一段愉快的经历。我的意思是，我回到了AI Engineer Summit。再次感谢Swix和Ben邀请我。每年回来都非常棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it's been a blast. I mean, I've I've been back at um AI Engineer Summit. Thank you again, Swix and Ben, for having me. It's been awesome to come back every year.</p>
</details>

所以，我代表Anti-gravity团队，感谢大家的时间、在使用产品时的耐心以及你们的支持。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so on behalf of the anti-gravity team, I just want to thank you for your time, for your patience as you use the product um and your support.</p>
</details>

当然，你也可以采用一个**TPU**（Tensor Processing Unit: 张量处理单元），帮助我们减少**pager duty**（工程师值班系统）的次数。当然，你也可以在Twitter上对我大喊大叫。那是另一种方式。也许在私信中进行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And of course, you too can adopt a TPU and help us uh turn off pager duty a bit more. Um and then of course, you know, you could also yell at me on Twitter. That's another way of doing it. Maybe do it in DMs instead.</p>
</details>

但我们有很多令人兴奋的事情，我真的非常高兴能将Anti-gravity推向市场。团队很高兴它现在已经发布。所以我们欢迎你的反馈。再次感谢大家的聆听。祝大家会议愉快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but we've got a lot of exciting things and I'm really really excited to bring anti-gravity to market. The team is thrilled that this is now out in the wild. So we welcome your feedback. Um, and thank you again for listening. Enjoy the rest of the conference.</p>
</details>

（掌声）

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">[applause]</p>
</details>

（音乐）

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">[music]</p>
</details>