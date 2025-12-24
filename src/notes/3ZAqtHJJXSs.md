---
area: tech-insights
category: technology
companies_orgs:
- Microsoft
- GitHub
date: '2025-10-31'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- How I AI
- Strange New Worlds
- Apple Podcasts
- Spotify
people:
- Clarvo
- Marco Casalaina
products_models:
- GPT-3
- GPT-4
- GitHub Spark
- SpecKit
- Lovable
- Bolt
- Vzero
project:
- ai-impact-analysis
- vibe-coding
series: ''
source: https://www.youtube.com/watch?v=3ZAqtHJJXSs
speaker: How I AI
status: evergreen
summary: 在一次意外的万圣节特别节目中，Marco Casalaina展示了如何利用AI工具（如GitHub Spark）快速开发一个儿童友好型算命应用，用于社区万圣节派对。他分享了从预设签文到实时生成趣味签文的演进过程，并探讨了如何通过调整提示词使AI生成更具体、幽默的预测。此外，他还简要介绍了SpecKit在更严肃项目中的应用，强调了AI在快速原型开发和日常实用工具创建中的潜力。
tags:
- ai-application
- canada
- development
- llm
- vibe-coding
title: 用AI打造万圣节儿童友好型算命应用：Marco Casalaina的即兴编程分享
---

### 欢迎来到万圣节特别节目

**Clarvo:** 欢迎来到“How I AI”的万圣节特别节目，这是一个充满鬼魅且计划之外的节目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Welcome to a spooky and unplanned Halloween edition of How I AI.</p>
</details>

**Clarvo:** 我是Clarvo，产品负责人和AI狂热者，我的任务是帮助你利用**LLMs**（Large Language Models: 大型语言模型）为你的孩子们做一些鬼魅有趣的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm Clarvo, product leader and AI obsessive here on a mission to help you use LLMs to do spooky stuff for your kids.</p>
</details>

**Clarvo:** 今天我们原定的播客录制被“鬼魂”缠身，无法正常进行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today we had a haunted episode recording that we couldn't get to work.</p>
</details>

**Clarvo:** 所以，我们没有按原计划进行，而是做了一个快速的万圣节**即兴编程**（vibe code: 一种快速、轻松地编写代码以实现特定“氛围”或效果的方法），我想这可能会给一些家长带来灵感。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So instead of our regular scheduled programming, we did a quick Halloween vibe code that I think some of you parents out there will be inspired by.</p>
</details>

**Clarvo:** 如果你还有其他的万圣节即兴编程点子，请在评论中与我们分享，并享受这期非常简短的“How I AI”万圣节特辑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you have other Halloween vibe codes, please share them with us in the comments and enjoy this very short episode of How I AI Halloween Edition.</p>
</details>

（音乐）

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">[Music]</p>
</details>

**Clarvo:** Marco，我们今天可能无法录制播客了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Marco, we may we may not be able to do our podcast today.</p>
</details>

**Clarvo:** 我们被过期的公司信用卡“困扰”了，但你有一个基于AI的万圣节用例，我们可以在几分钟内讨论一下，然后再重新安排。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are haunted by expired corporate credit cards, but you have a Halloween-based AI use case we're going to talk about instead just for a few minutes before we res.</p>
</details>

### AI万圣节算命师的灵感与实现

**Marco:** 我有，也许我可以在这里即兴演示一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I do. And maybe I'll I'll kind of do it live on the fly here.</p>
</details>

**Clarvo:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes.</p>
</details>

**Marco:** 所以，我们为什么不只是谈论它，而是实际操作一下呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so why don't we why don't we not just talk about it, why don't we actually do it.</p>
</details>

**Marco:** 我现在打扮成皮卡德舰长，就像我每年万圣节都打扮成皮卡德舰长一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm dressed as Captain Peicard right now. Uh as I do every year dressed as Captain Peicard.</p>
</details>

**Marco:** 我的外形很自然地符合，你知道的，当然我是一个《**星际迷航**》（Star Trek: 一部著名的科幻系列作品）的忠实粉丝。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, it naturally fits with my, you know, and stuff like that. Of course, I am a huge Star Trek fan.</p>
</details>

**Marco:** 我现在正在看《**星际迷航：奇异新世界**》（Strange New Worlds: 一部《星际迷航》系列剧集）第四季。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm in the middle of Strange New Worlds right now, season 4.</p>
</details>

**Marco:** 但是，至少在万圣节之夜，我做了一些不同的事情，我是一个街区算命师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But uh by night, at least for Halloween, I do something a little bit different. I am the block fortune teller.</p>
</details>

**Marco:** 所以，这是我住在加利福尼亚州皮德蒙特这里的万圣节派对街区。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is the Halloween party block that I live on here in Pedmont, California.</p>
</details>

**Marco:** 我们会封锁街道，我们所有的邻居都会做一些疯狂的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, we will block off the street and all of our neighbors do crazy stuff.</p>
</details>

**Marco:** 我的街对面邻居会有各种投影，他们还有火从什么东西里冒出来，但我做的呢，我是一个算命师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, you know, my neighbor across the street is going to have all this projection stuff going on and they have like fire coming out of something and but what I do well I am a fortune teller.</p>
</details>

**Marco:** 所以，传统上，过去几年我一直做的是预先创建签文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, traditionally uh what I have done for the past few years is that I have pre-created fortunes.</p>
</details>

**Marco:** 我会摆一张桌子，桌上有一个水晶球，水晶球会发光什么的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I set up this table and on this table uh I have a a crystal ball and the crystal ball glows and stuff like that.</p>
</details>

**Marco:** 它不是一个高科技水晶球，里面只有几个LED灯。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">It's not a high-tech crystal ball. has nothing but a couple of LED lights in it.</p>
</details>

**Marco:** 但是孩子们会过来，镇上有很多孩子，真的有几百个，他们会从这个东西那里得到他们的签文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the kids come up and there's lots of kids in town, you know, hundreds of them really come up and they they will get their fortunes from this thing.</p>
</details>

**Marco:** 实际上，过去我做的是预先创建这些签文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, in reality, what I did was I in the past had precreated these fortunes.</p>
</details>

**Marco:** 我用**GPT-3**（Generative Pre-trained Transformer 3: 开放AI开发的大型语言模型）和后来的**GPT-4**（Generative Pre-trained Transformer 4: 开放AI开发的大型语言模型）列出它们，然后把它们存在手机备忘录里，我把它夹在桌子下面的双腿之间，然后随机抽取一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I make a list of them with GPT3 and then GPT4 and I store them in a note on my phone and I kind of keep it between my legs under the table and I'll kind of pick one at random.</p>
</details>

**Marco:** 所以当一个孩子过来时，我就会抽一个，我制作的是儿童友好的签文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, when a kid comes up, I'll pick this one and I make kind of kid-friendly fortunes.</p>
</details>

**Marco:** 今年，我正考虑这样做，既然我们正在谈论，我现在就现场演示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, this year, I was thinking about doing this, and since we're talking, I'm gonna do this live now.</p>
</details>

**Marco:** 我真的要现场演示了，让我给你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm gonna actually do this live. I'm gonna let me give you.</p>
</details>

**Clarvo:** 我们要，你要给我算命吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're gonna Are you gonna read my fortune?</p>
</details>

**Marco:** 嗯，我们要为你制作一个签文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, we're gonna we're going to make a fortune for you. Yeah.</p>
</details>

**Clarvo:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes.</p>
</details>

### 使用GitHub Spark进行即兴编程

**Marco:** 所以，我想现在有很多工具可以用来做这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I think that for this now, there's lots of tools that I can use to do this.</p>
</details>

**Marco:** 我可以使用Lovable，我可以使用Bolt，我可以使用Vzero。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can use Lovable. I can use Bolt. I can use Vzero.</p>
</details>

**Marco:** 我将使用**GitHub Spark**（GitHub Spark: 一个由GitHub提供的AI辅助开发工具）来做这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to use GitHub Spark for this one.</p>
</details>

**Clarvo:** 今天万圣节我没想到会看到GitHub Spark，所以这让我很兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Was not expecting a GitHub Spark today on Halloween, so this is exciting for me.</p>
</details>

**Marco:** 怎么样？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How about that?</p>
</details>

**Marco:** 好的，所以我要说“制作一个移动应用，当我点击一个按钮时，它能在算命师的背景下生成一个新的签文。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So I'm going to say make a mobile app which when I click a button generates a new fortune in the context of a fortune teller.</p>
</details>

**Marco:** 好的，我想我不需要告诉它更多了，它可能第一次尝试就能成功。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. Uh I don't think I need to tell it much more than that. It's probably going to kind of work on the first try.</p>
</details>

**Marco:** 嗯，我们看看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, we'll see.</p>
</details>

**Marco:** 让我们看看它会做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's see what this does.</p>
</details>

**Marco:** 你知道，在其他情况下，我有时会给它一个列表让它滚动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now you know in other circumstances I have sometimes given it like a list of things to scroll between.</p>
</details>

**Marco:** 你可能在屏幕上看到，我之前有一个化学离子抽认卡应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You might have seen on the screen that earlier I had a chemistry ion flashcards app.</p>
</details>

**Marco:** 我的女儿正在上荣誉化学课，当时她正在学习**多原子离子**（polyatomic ions: 由两个或更多原子组成的带电离子），比如**氯酸盐**（chlorate）、**高氯酸盐**（perchlorate）、**硫酸盐**（sulfate）之类的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My daughter uh is in honors chemistry and she was at the time studying polyatomic ions uh chlorate perchlorate, you know sulfate stuff like that.</p>
</details>

**Marco:** 她需要记住这些多原子离子的名称和化学式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh she needed to memorize the name to the the formula of these poly ions.</p>
</details>

**Marco:** 所以我用这个东西制作了一个抽认卡应用，效果非常好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I made a flashc cards app with this thing which actually worked really well.</p>
</details>

**Marco:** 我的意思是，我基本上只是给了它多原子离子的列表，它就完全以这种在手机上运行的抽认卡界面完成了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean I just gave it basically the list of the polyatomic ions and it totally freaking did it in this kind of flash card interface that worked on the phone and so that was pretty nice.</p>
</details>

**Marco:** 这也是我决定这次使用GitHub Spark的原因之一，因为我知道它以前对我有效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's kind of one of the reasons why I decided to go with GitHub Spark for this one is because I know that kind of worked for me before.</p>
</details>

**Marco:** 从某种意义上说，你也可以把这看作是一个抽认卡应用，它会制作这些签文抽认卡，我想。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in a way you could look at this as kind of being a flashc card app too. It's going to kind of make these flash cards of fortunes I guess.</p>
</details>

**Clarvo:** 嗯。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um</p>
</details>

**Clarvo:** 哦，天哪。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">oh my gosh.</p>
</details>

**Clarvo:** 我明天有一个街区派对，所以我可能会偷用你的主意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I I have a block party tomorrow, so I might steal your idea.</p>
</details>

**Marco:** 你可以这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You could do this.</p>
</details>

**Clarvo:** 当然也可以扮演算命师，你知道的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Definitely pass for a fortune teller as well, you know.</p>
</details>

**Marco:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Marco:** 哦，天哪。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh my gosh.</p>
</details>

**Marco:** 好的，这将会……哦，它制作了一个**PRD**（Product Requirements Document: 产品需求文档）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so this is going to Oh, it made a PRD.</p>
</details>

**Marco:** 这，你知道，我很喜欢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's, you know, I loved.</p>
</details>

**Marco:** 让我们看看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's see.</p>
</details>

**Marco:** 我们能看到它吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Can we see it?</p>
</details>

**Marco:** 让我们看看它在做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's see if we can see what it's doing while it's doing it.</p>
</details>

**Marco:** 哦，它确实在做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, it does.</p>
</details>

**Marco:** 好的，哇。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

**Marco:** 它真的进展神速。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, wow. It's really It's going fast and furious over here.</p>
</details>

**Marco:** 所以它完全在这里编写这个PRD。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it's it's totally writing this PRD over here.</p>
</details>

**Marco:** 现在它已经制作了一个页面索引。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now it's it's made a page index.</p>
</details>

**Marco:** 所以它开始制作实际的**HTML**（HyperText Markup Language: 超文本标记语言）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's starting to make the actual HTML.</p>
</details>

**Marco:** 所以它会用HTML编写，你知道这很常见，现在它有了一些**CSS**（Cascading Style Sheets: 层叠样式表）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's it's going to write this in HTML and you know this is this is common and now it's got some CSS.</p>
</details>

**Marco:** 所以它会给页面设置样式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's going to style uh the page.</p>
</details>

**Marco:** 但我的意思是，这就是即兴编程，或者说是我们今天所做的前端即兴编程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh but I mean this is this is vibe coding or anyway front-end vibe coding as we do it today.</p>
</details>

### 严肃项目中的SpecKit应用

**Marco:** 不过，实际上，当我在做真正的即兴编程项目时，当这个东西在工作时，因为我实际上已经在屏幕上有了这个，我将在这里展示它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh now in reality though I mean when I'm doing real vibe coding uh projects and while this thing is working since I actually already have this on my screen I'm going to bust this out over here.</p>
</details>

**Marco:** 现在，如果我正在做一个真正的项目，一个严肃的项目，而不仅仅是一个小小的算命应用，现在我百分之百会使用**SpecKit**（SpecKit: 一个帮助开发者编写高质量软件规范的工具）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, if I'm doing a real project, like a serious project, not just a little fortune teller app nowadays, I will 100% use specit.</p>
</details>

**Marco:** 我确实在使用SpecKit。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh I absolutely do use spec kit.</p>
</details>

**Marco:** 事实上，今天早些时候我正好在做这样一个项目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, it so happens I was earlier today working on just such a project.</p>
</details>

**Marco:** 顺便说一下，我是微软CoreAI的VB产品负责人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I am by the way, I'm VB products of corei at Microsoft.</p>
</details>

**Marco:** 然而，我确实有工程背景，而且我几乎每天都在写一些代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">However, uh I do come from an engineering background and I still code pretty much every day something.</p>
</details>

**Marco:** 所以我正在做这个项目，在这个项目中我确实使用了SpecKit。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm working on this project and in this project uh where I did use spec kit.</p>
</details>

**Marco:** 所以你看，这是一个我正在做的完整功能规范。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here like this is a full feature specification that I'm working on.</p>
</details>

**Marco:** 我正在做这个完整的代理程序，我正在添加用户反馈的功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have this whole agent thing that I'm I'm working on and uh I am adding this ability to give user feedback.</p>
</details>

**Marco:** 所以这个代理程序会为我填写问卷，这很酷，但我想能够选择一个单元格，一个问题，然后说“不，不，不，你做错了，改正它。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this agent will like fill out a questionnaire for me and that's cool but I want to be able to pick a a cell a question and be like no no no you did that wrong fix it.</p>
</details>

**Marco:** 然后代理程序应该在使用SpecKit时自动启动并执行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the agent should just wake up and do it when you use spec kit.</p>
</details>

**Marco:** 所以这就是编写规范的正确方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so like this is the proper way to write a spec.</p>
</details>

**Marco:** 当你使用SpecKit时，它会做这些事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh when you use spec kit it does this stuff over here.</p>
</details>

**Marco:** 所以你看到它会做什么，它会向我抛出这些问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you see what it's going to do. it throws these questions at me.</p>
</details>

**Marco:** 所以它会问：“等等，反馈应该有多长？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it's like, wait a minute, how long should the feedback be?</p>
</details>

**Marco:** “如果用户给你大量的反馈，那我该怎么办？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What if the user gives you like a ton of feedback? Then what do I do?</p>
</details>

**Marco:** 它会在执行过程中向我抛出所有这些问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it it'll it'll lob all of these questions at me while it does this.</p>
</details>

**Marco:** 所以SpecKit很酷，它完全免费。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, spec kit is cool. It's totally free.</p>
</details>

**Marco:** 它适用于，在这种情况下我正在与**GitHub Profil**（GitHub Profil: 指GitHub Copilot或类似GitHub开发工具）一起使用，但它也适用于**FOD code**（FOD code: 指某种代码编辑器或开发环境）和**Cursor**（Cursor: 指某种代码编辑器或开发环境）以及所有这些其他东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It works with like in this case I'm using it with GitHub profil, but it works with FOD code and it works with cursor and all these other things.</p>
</details>

**Marco:** 所以这非常酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, that is super cool.</p>
</details>

**Marco:** 我喜欢它，它能帮助你编写更好的规范。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, I love it. It helps you write a better spec.</p>
</details>

**Marco:** 但是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, but</p>
</details>

**Clarvo:** 哦，看这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">oh, look at this.</p>
</details>

**Marco:** 我的应用在这里了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My app is here.</p>
</details>

**Marco:** 好的，点击揭示你的签文，宇宙。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. Tap to reveal your fortune, the cosmos.</p>
</details>

**Clarvo:** 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay,</p>
</details>

**Clarvo:** 我对此非常兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm very excited about this.</p>
</details>

**Marco:** 哇。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wow.</p>
</details>

**Clarvo:** 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay,</p>
</details>

**Clarvo:** 这有点太……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that's a little bit too uh</p>
</details>

**Marco:** 让我为那些没有看视频的人读一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">let me let me read this for people that are not on video.</p>
</details>

**Marco:** “在宇宙的织锦中，星星编织出一条被你的梦想照亮的路。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the tapestry of the cosmos, the stars weave a path illuminated by your dreams.</p>
</details>

**Marco:** 相信它们指引的光芒。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Trust in their guiding light.</p>
</details>

**Marco:** 我喜欢这一点，它完全模棱两可，毫无意义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, what I like about this is it is completely ambiguous and means nothing.</p>
</details>

**Marco:** 太棒了，太棒的签文，但我敢打赌你希望它对你的用例来说更有趣，更儿童友好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Excellent. excellent fortune, but I bet you want it to be a little more fun and kids friendly for for your use case.</p>
</details>

### 优化儿童友好型签文

**Marco:** 所以在左手边，你可以看到我说“让每个签文只有一句话，并且要儿童友好。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so over here on the left hand side, you can see that I'm saying make each fortune only one sentence and make it kid-friendly.</p>
</details>

**Marco:** 所以现在我要通过提示词来完成一些事情，它又开始生成了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now I'm going to kind of prompt my way towards doing something and it's starting to generate again.</p>
</details>

**Marco:** 所以我的意思是，你必须承认，第一次尝试就相当不错了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I mean I mean you got to admit though, I mean it's pretty freaking good on the first try.</p>
</details>

**Clarvo:** 真的很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Really good.</p>
</details>

**Clarvo:** 你知道吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know what?</p>
</details>

**Clarvo:** 我还没有现场看过这个GitHub Spark，但设计实际上非常可爱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I haven't seen um this GitHub Spark uh done live, but the design is actually really cute.</p>
</details>

**Clarvo:** 所以，在这些即兴编程工具中，你经常会看到非常无聊的设计，但这个实际上相当可爱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so often in these vibe coding tools, you get these incredibly boring designs, but that is actually quite quite lovely.</p>
</details>

**Clarvo:** 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

**Marco:** 好的，我们成功了吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. Did we get it?</p>
</details>

**Clarvo:** 它完成了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's done.</p>
</details>

**Clarvo:** 它说它完成了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It says it's done.</p>
</details>

**Clarvo:** 所以，我们来看看会发生什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, here we go.</p>
</details>

**Clarvo:** 让我们看看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's see what happens.</p>
</details>

**Marco:** 神秘的预言家，我的命运是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mystic Oracle, what is my fortune?</p>
</details>

**Marco:** “当你像仙女的尘埃一样撒播善良时，整个世界就会变成一个充满魔法冒险和闪烁笑容的游乐场。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When you sprinkle kindness like fairy dust, the whole world transforms into a playground of magical adventures and shimmering smiles.</p>
</details>

**Clarvo:** 就是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's it.</p>
</details>

**Clarvo:** 这很可爱，也很儿童友好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is that is lovely and kid-friendly.</p>
</details>

**Marco:** 可能还是有点大词了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Still maybe a little bit on the big words there.</p>
</details>

**Marco:** 我的意思是，我可以。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, I can</p>
</details>

**Clarvo:** 而且有点抽象。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And on the abstract side,</p>
</details>

**Marco:** 是的，有点抽象。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah, on the abstract side,</p>
</details>

**Marco:** 我的意思是，嗯，让我们看看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, uh, let's see.</p>
</details>

**Marco:** 让签文更具体一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Make the fortunes a little more concrete</p>
</details>

**Clarvo:** 并且让它们更有趣一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and and let's make them a little more fun</p>
</details>

**Marco:** 也许再幽默一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and maybe a little more humorous.</p>
</details>

**Clarvo:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Marco:** 尽量不要用那么大的词。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">try not to use such big words.</p>
</details>

**Marco:** 我的意思是，很多时候，来我算命摊的孩子，他们可能只有两三岁，你知道吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, a lot of times like the kids that'll come up to my fortuneelling booth, they'll be like, you know, two or three years old, you know?</p>
</details>

**Clarvo:** 是的，是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah.</p>
</details>

**Marco:** 对于他们，有时我甚至不用我的小应用，我会说：

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for them sometimes I'll like not even use my little app thing and I'll be like,</p>
</details>

**Marco:** “你今天会尝试一种新食物，而且会很好吃。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">"You're going to try a new food today and it's going to be yummy."</p>
</details>

**Marco:** 他们的父母会说：“谢谢你。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And their parents will be like, "Thank you." Like</p>
</details>

**Clarvo:** 你的万圣节糖果袋里的糖果会增多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">your candy in your Halloween bag will multiply.</p>
</details>

**Marco:** 但我的意思是，你知道，皮德蒙特是一个小镇，我实际上认识很多这些家长什么的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I mean, you know, Peepon is a small town and I actually know a lot of these parents and stuff like that.</p>
</details>

**Marco:** 有时他们后来会回来找我，说：“你告诉我孩子这个签文。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sometimes they come back at me later and they're like, "You told my kid this fortune."</p>
</details>

**Marco:** 我有一次告诉一个孩子一个签文，内容是：“你今天会交到一个新朋友。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like I told one kid a fortune once and it was like, "You're going to make a new friend today."</p>
</details>

**Marco:** 这实际上来自我之前版本的生成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Which actually did come from my my the previous version of this uh generation.</p>
</details>

**Marco:** 她说他第二天一整天都在谈论这件事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh she said he was talking about it for the whole next day.</p>
</details>

**Marco:** 她说：“算命师说，‘我今天会交到一个朋友。’这太酷了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">She was like, "The fortune teller said, "I'm going to make a friend today. Like this is going to be cool."</p>
</details>

**Clarvo:** 嗯，你孩子15岁了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, your kid's 15.</p>
</details>

**Clarvo:** 我应该告诉她她未来会得到一辆车吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Should I uh tell her she's going to get a car in her future?</p>
</details>

**Marco:** 好了，好了，我们现在有点跑题了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, okay, now now we're going off the rails here.</p>
</details>

**Marco:** 好的，我们开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, here we go.</p>
</details>

**Marco:** 准备好了吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You ready?</p>
</details>

**Marco:** 这是你的，这个是给你的，Claire。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here's your This is This one's for you, Claire.</p>
</details>

**Marco:** 好的，准备好了吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, ready?</p>
</details>

**Marco:** “这周，你会找到一块闪亮的石头，它看起来像一片披萨，当你……时，会让每个人都咯咯笑。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This week, you will find a shiny rock that looks like a slice of pizza and makes everyone giggle when you</p>
</details>

**Clarvo:** 我喜欢这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like that.</p>
</details>

**Clarvo:** 这会让我六岁的孩子很开心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That would entertain my six-year-old.</p>
</details>

**Marco:** 我的意思是，这确实非常具体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, that is very concrete for sure.</p>
</details>

**Marco:** 现在，你知道，你六岁的孩子会完全寻找，“哦，那块看起来像披萨片的石头在哪里？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now, you know, your six-year-old Yeah. would totally be looking for, oh, where's that rock that looks like the slice of pizza?</p>
</details>

**Marco:** 我要去找到它。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm gonna find it.</p>
</details>

**Clarvo:** 完全正确。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's exactly right.</p>
</details>

**Clarvo:** 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

**Marco:** 再来一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One more.</p>
</details>

**Clarvo:** 再来一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One more.</p>
</details>

**Clarvo:** 让我们看看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's see.</p>
</details>

**Clarvo:** 再来一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One more.</p>
</details>

**Marco:** 这周我们……好的，又和石头有关，也许这里有点太多石头了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This week we're Okay, again with the rock and maybe it's going a little over much on the rocks here.</p>
</details>

**Marco:** “你找到一块看起来像纸杯蛋糕的石头。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You recover a rock that looks like a cupcake.</p>
</details>

**Marco:** 撒上糖屑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sprinkles of that.</p>
</details>

**Marco:** 我的意思是，这就是为什么你必须对这些东西进行集成测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, this is why you you got to like integration test these things.</p>
</details>

**Marco:** 这些都是石头吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Are these all rocks?</p>
</details>

**Marco:** 哦不。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh no.</p>
</details>

**Marco:** “今天一只毛茸茸的松鼠会偷走你的零食，但随后会分享公园里最佳藏身处的秘密。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today a fluffy squirrel will steal your snack, but then share a secret about the best hiding spots in the park.</p>
</details>

**Marco:** 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

**Clarvo:** 我很惊讶松鼠没有分享公园里最好的石头的秘密。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm surprised the squirrel is not sharing the secret about the best rocks in the park.</p>
</details>

**Clarvo:** 所以。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So,</p>
</details>

**Clarvo:** 我的意思是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean,</p>
</details>

**Marco:** 你明白了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you got it.</p>
</details>

**Marco:** 好的，我，你知道，现在是万圣节。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

**Marco:** 差不多上午11点了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I um you know, it's it's Halloween. It's almost 11:00 a.m.</p>
</details>

**Marco:** 我的街区派对是明天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've got my block party is tomorrow.</p>
</details>

**Marco:** 所以我们要封锁街道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we're blocking off the street.</p>
</details>

**Marco:** 我们正在举办一个万圣节后的派对，大家带上你们的糖果，这样你们就可以把它们都送出去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're doing a posth Halloween. Everybody bring your candy so you can give it all more away party.</p>
</details>

**Marco:** 我会这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm gonna do this.</p>
</details>

**Marco:** 我会把它连接到语音。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to hook it up to voice.</p>
</details>

**Clarvo:** 太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sweet.</p>
</details>

**Marco:** 给它一个鬼魅的算命师声音，然后把它设置在前面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">give it like a spooky fortune teller voice and uh set it up out front.</p>
</details>

**Clarvo:** 嗯，Marco，尽管我们的播客节目被“鬼魂”缠身，我们还是会让你回来真正谈论SpecKit开发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, Marco, despite our haunted podcast episode, we will get you back on to actually talk about Spectrian development,</p>
</details>

**Clarvo:** 但谢谢你完成了我们第一个，也许是每年一度的万圣节AI节目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but thank you for doing our first and maybe an annual tradition of our Halloween AI how I AI episode.</p>
</details>

**Clarvo:** 谢谢你展示这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you for showing this.</p>
</details>

**Marco:** 每年我们都会有不同的万圣节元素。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every year we'll have like different elements to Halloween every year.</p>
</details>

**Clarvo:** 完美。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Perfect.</p>
</details>

**Clarvo:** 嗯，我们会尽快让你回到播客上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, we'll get you back on on the pod soon.</p>
</details>

**Clarvo:** 我想我只是，我要去剪辑这个并分享它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think I'm going to just I'm going to go cut this and and share it.</p>
</details>

**Clarvo:** 非常感谢您的收看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks so much for watching.</p>
</details>

**Clarvo:** 如果您喜欢这个节目，请在YouTube上点赞并订阅，或者更好的是，给我们留言分享您的想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you enjoyed this show, please like and subscribe here on YouTube, or even better, leave us a comment with your thoughts.</p>
</details>

**Clarvo:** 您也可以在**Apple Podcasts**（Apple Podcasts: 苹果公司的播客平台）、**Spotify**（Spotify: 流媒体音乐和播客服务）或您喜欢的播客应用上找到这个播客。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app.</p>
</details>

**Clarvo:** 请考虑给我们评分和评论，这将帮助其他人找到这个节目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Please consider leaving us a rating and review, which will help others find the show.</p>
</details>

**Clarvo:** 您可以在howiaipod.com上查看我们所有的节目并了解更多信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see all our episodes and learn more about the show at howiaipod.com.</p>
</details>

**Clarvo:** 下次再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">See you next time.</p>
</details>