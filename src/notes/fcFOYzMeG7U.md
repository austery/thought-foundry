---
author: How I AI
date: '2026-01-28'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=fcFOYzMeG7U
speaker: How I AI
tags:
  - ai-agent
  - personal-assistant
  - security-risk
  - user-experience
  - workflow-automation
title: 我使用 Clawdbot (现 Moltbot) 的真实体验：亮点与不足
summary: 本期节目中，主持人**Claire**分享了她使用开源AI代理**Clawdbot**（现更名为**Moltbot**）的亲身经历。她详细介绍了安装设置、安全考量以及日历管理、邮件调度、信息研究等多种用例。Claire肯定了Clawdbot作为个人助手的潜力，但也指出了其技术复杂性、安全风险和明显的延迟问题。她总结了对AI代理未来的思考，并探讨了谁将最终成功打造出消费者和企业级的AI代理产品。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - Anthropic
  - Google
  - Microsoft
  - Apple
  - Lovable
  - Vercel
  - OpenAI
products_models:
  - Clawdbot
  - Moltbot
  - Claude Code
  - Sonnet 45
  - Opus
  - Devin
  - Cursor
  - ChatGPT
  - Copilot
  - Siri
  - Next.js
  - Homebrew
  - Xcode
  - Node
  - npm
  - WhatsApp
  - Telegram
  - iMessage
  - OnePassword
  - Twilio
  - Riverside FM
media_books: []
status: evergreen
---
### 欢迎 Clawdbot 加入播客

**Claire**: 好的，我们现在开始这期节目，通过 **Telegram** 邀请 **Clawdbot** 加入播客。我们来看看效果如何。嘿，**Paulie**，你能加入我的 **Riverside FM** 播客吗？好的，我发了语音消息，它没有收到。这是我做过的最紧张的事情。你好。哦，它正在做！终于听到了。好的，它正在 **Chrome** 上打开 **Riverside**。这真是令人毛骨悚然。我要允许它访问我的麦克风和摄像头，这也让我非常紧张。

<details>
<summary>Original English</summary>

**Claire**: All right, we're gonna start this episode by actually inviting **Claudebot** to the podcast via **Telegram**. Let's see how it goes. Hey **Paulie**, can you please join my **Riverside FM** podcast? All right, I sent the voice message and it's not getting it. This is the most stressful thing I've ever done. Hello. Oh, it's doing it. [laughter] Finally listened. Okay, it is opening **Riverside** on **Chrome**. This is horrifying in every way. I'm going to allow it permissions for my my microphone and my camera, which also makes me extremely nervous.

</details>

**嘉宾**: 嘿，**Claire**，**Riverside** 链接一直把我带到一个上传页面，显示“正在上传 100%”，而不是访客加入界面。

<details>
<summary>Original English</summary>

**嘉宾**: Hey **Claire**, the **Riverside** link keeps taking me to an upload page that says uploading 100% instead of a guest join interface.

</details>

**Claire**: 这就是我使用这款产品的全部体验。它会成功吗？会失败吗？好的，它第五次打开了 **Chrome**。这非常吓人。我现在看到我自己了。我不知道你们是否已经看到我了。然后，我们来了。我们正在共享一个自主 **AI** 的全屏。没什么大不了的。

<details>
<summary>Original English</summary>

**Claire**: This is my entire experience using this product. Just will it work? Will it won't? Okay, it is opening **Chrome** for the fifth time. This is very scary. I see myself right now. I don't know if you all see me yet. And there we go. We are sharing an autonomous **AIS** full screen. No big deal.

</details>

### 赞助商：Lovable

**Claire**: 本期节目由 **Lovable** 赞助。如果你曾经有一个应用想法，但不知道从何开始，那么 **Lovable** 就是为你准备的。**Lovable** 让你只需与 **AI** 聊天就能构建出可运行的应用和网站。然后你可以自定义它，添加自动化，并将其部署到实时域名。它非常适合营销人员快速搭建工具，产品经理原型化新想法，或者创始人启动他们的下一个业务。与 **No-code** 工具不同，**Lovable** 不仅仅是静态页面。它构建的是具有真实功能的完整应用，而且速度很快。过去需要几周、几个月甚至几年的工作，现在你可以在一个周末完成。所以，如果你一直有一个想法，现在是时候让它实现它了。在 **lovable.dev** 免费开始。那就是 **lovable.dev**。

<details>
<summary>Original English</summary>

**Claire**: This episode is brought to you by **Lovable**. If you've ever had an idea for an app but didn't know where to start, **Lovable** is for you. **Lovable** lets you build working apps and websites by simply chatting with **AI**. Then you can customize it, add automations, and deploy it to a live domain. [music] It's perfect for marketers spinning up tools, product managers prototyping new ideas, or founders launching their [music] next business. Unlike **No-code** tools, **Lovable** isn't about static [music] pages. It builds full apps with real functionality, and it's fast. What used to take weeks, months, or even years, you can now do over the [music] weekend. So, if you've been sitting on an idea, now's the time to bring it to life. [music] Get started for free at **lovable.dev**. That's **lovable.dev**.

</details>

### Clawdbot 简介与风险

**Claire**: 我们现在正与一个自主 **AI** 甲壳类动物实时互动，它正在我的播客上运行视频。所以，欢迎 **Pauly the Clawbot**。让我们开始今天的节目。我是 **Claire**，产品负责人和 **AI** 狂热者，我的使命是帮助大家更好地利用这些新工具进行构建。我还在努力尝试每一个在你的时间线上爆红的新 **AI** 工具。如果你这周错过了，那就是 **Clawdbot**，最近更名为 **Moltbot**，这个人们随意授予 **root** 访问权限的甲壳类动物。**Clawdbot** 是一个开源 **AI** 代理，你可以将其安装在虚拟机、台式机或笔记本电脑上，它具有自学习能力，可以使用 **Claude Code** 和其他代理框架启动子代理，并且根据我的亲身经验，它能造成很大的破坏。人们喜欢 **Clawdbot**，因为它能极大地提升个人生产力。人们也讨厌 **Clawdbot**，因为它存在安全问题，以及你很可能会用它做出一些非常愚蠢的事情。我希望你了解这个 **AI** 工具的工作原理、它能做什么，以及我对个人 **AI** 代理和企业 **AI** 代理未来的一些看法。所以今天的节目都是关于 **Clawdbot** 以及我从零开始使用这个工具的经验。

<details>
<summary>Original English</summary>

**Claire**: We are live with a autonomous **AI** crustation now running video on my podcast. So, welcome **Pauly the Clawbot**. Let's get to our episode today. I am **ClaVo**, product leader and **AI** obsessive here on a mission to help you build better with these new tools. I am also on a mission to try every single new hot **AI** tool taking over your timeline. And in case you missed it this week, it is **Claudebot**, recently renamed **Moltbot**, the Cristian that people are yoloing root access to. **Cloudbot** is an open-source **AI** agent that you can install on a virtual machine or on a desktop or laptop that you have access to that is self-learning, can spin up sub agents using **Claude Code** and other agent harnesses and can do in my lived experience a lot of damage. People are loving **Claudebot** for what it unlocks in terms of personal productivity. People are hating **Claudebot** in terms of security and the high high high high likelihood you're going to do something real dumb with it. This is a **AI** tool that I want you to know how it works, what it can do, and maybe some thoughts on the future of personal **AI** agents and enterprise **AI** agents. So today's episode is all about **Claudebot** and my experience going 0ero to one with this tool.

</details>

### Clawdbot 的核心功能与硬件要求

**Claire**: 好的，关于 **Clawdbot** 有几点需要了解。它被宣传为真正能做事的 **AI**，它确实能做很多事情，包括加入播客，但它真正的定位是帮助你日常完成任务。它的杀手级用例和杀手级功能是你可以像我们看到的那样，通过手机来操作它。所以，如果你想通过 **WhatsApp**、**Telegram**、**iMessage**、**Claude Code** 来让 **Clawdbot** 为你做事，这就是它的功能。很多人都错误地认为你需要一台 **Mac Mini** 或某种高级硬件才能使用 **Clawdbot**，但你不需要。

<details>
<summary>Original English</summary>

**Claire**: Okay. So just a couple things to know about **Claudebot**. It is pitched as **AI** that actually does things and it does do things including joining podcasts, but it's really positioned as something that can help you dayto-day with tasks. And the killer use case for it and the killer feature for it is you can as we've seen do it from your phone. And so if you want to **WhatsApp**, **Telegram**, **iMessage**, **Claude Code** and get it to do things for you, that is what **Claudebot** does. And you know, a lot of people are under the mistaken impression that I have to um correct right now, which is you need a **Mac Mini** or some sort of fancy hardware to use **Claudebot**. You do not.

</details>

**Claire**: **Clawdbot** 确实可以在本地运行，但它也可以在你的机器上运行，或者在云端运行。你可以在 **Amazon** 上花五美元设置它。如果你在云端运行它，我们会提供一些关于安全性的注意事项，确保其他人无法访问。但你确实不需要特殊硬件。它没有做任何超级花哨的事情。除非你运行的是超大型本地模型，否则你真的不需要新硬件。如果你想要一些闪亮花哨的东西，那就去 **Apple** 商店连夜订购吧。否则，你可以在你的机器上运行它。我正在一台放在某个架子上的 **MacBook Air** 上运行它，那是我刚捡到的，没人用。我将一步步向你展示我是如何设置我的 **Clawdbot** 的，作为一个对安全非常偏执，并且也想将其作为真正的 **AI** 助手进行测试的人。

<details>
<summary>Original English</summary>

**Claire**: **Claudebot** does run locally, but it can run um on your machine or it can run in the cloud. You can set it up for five bucks on **Amazon**. Um we'll do some notes on security if you're running it in the cloud, making sure that people don't have access to. But you do not need special hardware. It is not doing anything super fancy. Unless you're running mega mega mega local models, you really just don't need new hardware. If you want something shiny and fancy, go ahead. Feel free overnight it from the **Apple** store. Otherwise, you can run it on your machine. I'm running it on a **MacBook Air** that's sitting in on a shelf somewhere that I just picked up that no one was using. And I'm going to walk you through step by step how I set up my **Claudebot**. As somebody who's pretty paranoid about security and also wanted to test it as a real **AI** assistant.

</details>

### Clawdbot 安装与依赖

**Claire**: 所以，我做的第一件事就是拿出了，我实际上只是想给你看看。我拿出了这台小笔记本电脑，就是这个。嗯，它是一台比较新的，但没什么特别的。我在这台笔记本电脑上给它设置了一个自己的用户名。现在，别告诉 **Claude** 我在这台笔记本电脑上还有另一个用户，这确实让我很紧张，因为 **Clawdbot** 可以访问你的文件系统。理论上，它绝对可以访问那个其他用户。那是一个非常旧的用户。我实际上不认为上面有很多东西。我当时以一种相当受限制的方式测试 **Clawdbot**。但如果我要继续使用 **Clawdbot**，我可能会删除那个旧用户上的所有东西，只把这台机器变成 **Clawdbot** 专用机。我做的第二件事是安装了一堆先决条件和依赖项。

<details>
<summary>Original English</summary>

**Claire**: So, the first thing I did was I got out I'm actually just going to show you. I got out this little this laptop, this guy. Um, which is a newish one, but nothing fancy. And I gave it its own username on this laptop. Now, don't tell **Claude** I have another user on this laptop, which does make me nervous because **Claudebot** has access to your file system. In theory, it could definitely gain access to that other user. It's a really old user. I don't actually think I have that much on it. and I was testing **Cloudbot** in a pretty constrained way. But if I were to continue to use **Claudebot**, I'd probably delete everything out that old user and just make this a **Claudebot** machine. The second thing that I did was install a bunch of prerequisites and dependencies.

</details>

**Claire**: 所以，尽管我喜欢这里说的快速启动，它说你只需在终端中添加一行代码就能安装，但我的经验并非如此。即使对于一台相当新净的笔记本电脑，我也必须安装一些依赖项。实际上，我花了两个小时才安装好这一行代码。所以，我不得不升级 **Node**。我不得不安装 **Homebrew**。我不得不安装 **Xcode**，因为这上面没有安装 **Xcode**。然后因为 **Node** 和 **npm** 过时了，我不得不手动更新它们。然后最终才通过 **npm** 实际安装了它。所以，这就是我总体的安装经验。它花了一些时间，我在安装时的想法是，没有哪个普通消费者会经历这个过程。这绝对是目前针对黑客、修补者、开发者体验的工具。

<details>
<summary>Original English</summary>

**Claire**: So, as much as I love this quick start right here that says that you can just add one line in the terminal and get it installed, that was not my experience. even for a laptop that was like pretty fresh and new, I had to install some dependencies. It actually took me two hours to get this oneliner installed. So, I had to um upgrade **Node**. I had to install **Homebrew**. I had to install **Xcode** cuz **Xcode** wasn't installed on this. And then because **Node** and **npm** were out of date, I had to update those manually. And then finally actually installed it um just via **npm**. So that was my kind of overall experience installing. It took a little bit of time and my thought in installing was no sort of like consumer is going to go through this. This is definitely like a hacker tinkerer developer experience type tool right now.

</details>

**Claire**: 话虽如此，你可以使用 **Claude Code** 来安装它。我看到有几个人走了那条路，但我真的想从零开始。**Claude.bot** 到底说我们需要做什么来安装这个东西，然后那种体验是怎样的？现在，在你安装了所有依赖项之后，在你安装它之后，它会经历一个引导流程，让你创建网关认证和网关令牌。你在 **Clawdbot** 引导过程中首先会看到的就是安全。所以它会把你指向安全链接。它说这很强大，而且本质上是危险的，你只需随意行事，然后说“是”。话虽如此，我强烈建议你仔细阅读安全页面，并在使用 **Clawdbot** 之前运行安全审计。

<details>
<summary>Original English</summary>

**Claire**: That being said, you can use **claude code** to install it. I've seen a couple people go that path, but I really wanted to do the 0ero to one. what does **claude.bot** bot say that we need to do to install this thing and then what is that experience like? Now after you install all your dependencies and then after you install it goes through this onboarding flow um that has you create gateway off and gateway tokens and the first thing that you're going to [laughter] see in **cloudbot** onboarding is security. So it points you to the security link. It says that this is powerful and inherently risky and you just yolo and you just say yes. That being said, I highly recommend you read through the security page and that you run the security audits before you use **Claudebot**.

</details>

### 连接消息应用与权限设置

**Claire**: 所以，引导的下一步实际上是将 **Clawdbot** 连接到你将用来联系它的任何设备。我最初从 **WhatsApp** 开始，但后来我看到了屏幕上说你基本上应该把 **WhatsApp** 放在一个有自己 **SIM** 卡的“一次性手机”上。天哪，别那么做。所以我切换到了 **Telegram**，我几乎不用它。嗯，因为我是一个老派的妈妈，所以设置了一个 **Telegram** 账户。现在，要连接 **Telegram**，你需要做的是给 **BotFather** 发消息，这又是一个非常可疑的操作，如果你是一个普通消费者，不知道自己在做什么，也从未听说过 **Telegram**，然后你被告知要去 **BotFather** 连接这个到你的机器，但我还是做了。

<details>
<summary>Original English</summary>

**Claire**: So the next step in onboarding is actually connecting **Claudebot** to whatever device you're going to use to contact it. So, I originally started with **WhatsApp**, but then I read the screen that said you should basically put **WhatsApp** on like a burner phone with its own **SIM** SOS. Like, don't do that. And so, I switched to **Telegram**, which I use for literally nothing. Um, because I'm an old lady mom, and set up a **Telegram** account. Now, to hook up **Telegram**, what you do is you message the **BotFather**, which again, this is like super shady stuff if you're a consumer and you don't know what you're doing and you never heard of **Telegram** and then you're told to go to **botfather** to connect this to your machine, but I did it anyway.

</details>

**Claire**: 所以，你给 **BotFather** 发消息，然后说，你知道的，创建一个新机器人，给它一个名字，给它一个句柄。然后一旦你完成了这些，你的 **Clawdbot** 就会看到它。它会有一个令牌，然后你实际上会给 **Clawdbot** 一个个性化的共享令牌。这意味着只有你的 **Telegram** 实例才能与 **Clawdbot** 对话。记住，这是一个开放的连接点，连接到一台运行代码的机器，如果你充分利用 **Clawdbot**，它会获得大量访问权限。所以，如果其他人能够给你的 **Clawdbot** 发消息，你就有麻烦了。它可以做一些事情，比如查找秘密。它可以代表你发送电子邮件。所以你真的要确保你设置的消息系统只锁定到你的手机，只锁定到你的用户。现在记住，如果手机被偷了，它就可以连接到你的 **Clawdbot**，那就糟了。但目前没有人会偷我的 **MacBook Air**，除了我的孩子。

<details>
<summary>Original English</summary>

**Claire**: So, you message **botfather** and you say, you know, create new bot and you give it a name and you give it a handle. And then once you've done that, your **Claudebot** will see it. It will have a token and then you actually give **Claudebot** a personalized share token. That means that only your instance of **Telegram** can speak to the **Claudebot**. Remember, this is an open connection point to a machine that's running code with a bunch of access to things if you're using **Clawbot** to its full extent. So if somebody else is able to message your **Claudebot**, you are in trouble. It can do things like find secrets. It can send emails on your behalf. So you really want to make sure that the messaging system that you set up is locked down to only your phone, only your user. Now remember, phone gets stolen, it can connect into your **Cloudbot**, it's no good. But we're no one's going to steal my air um my **MacBook Air** yet except for my kids.

</details>

### 将 Clawdbot 配置为个人助理

**Claire**: 好的，我已经与 **Telegram** 配对，现在你可以开始施展魔法了。那么我用 **Clawdbot** 做了什么呢？首先，我思考了哪些用例对我最有用，然后我非常认真地思考了我要如何以及给予它哪些访问权限。所以我选择的做法是，我想把它作为个人助理来测试。你知道，它的主页上说它可以清理你的收件箱，发送电子邮件，管理你的日历，帮你办理登机手续，所有这些事情。所以，我过去有过执行助理 (**EA**)。我知道如何培训一个 **EA**。所以，我使用 **Clawdbot** 的目标是真正看看它作为 **EA** 会如何工作。当我有一个新的 **EA** 时，我不会让他们访问我的电子邮件。我不会给他们我的账户密码。我所做的是给他们一个自己的电子邮件地址。

<details>
<summary>Original English</summary>

**Claire**: Okay, so I'm paired on **Telegram** and now you can do the magic. So what did I do with **Claudebot**? Well, first I thought about what were the use cases that were most useful for me and then I thought very seriously about what and how I was going to give it access to things. So what I did, this was my choice is I wanted to test it as a personal assistant. You know, it says on the homepage it can clear your inbox, send emails, manage your calendar, check you in for flights, all this stuff. So, I have had **EAS** in the past. I know how to onboard an **EA**. So, my goal with using **Claudebot** was to really see how it would work as an **EA**. And when I have a new **EA**, I don't let them into my email. I don't give them password to my account. What I do is give them their own email address.

</details>

**Claire**: 所以我所做的，如果你想从安全角度考虑，可以效仿，尽管我认为它在 **Clawdbot** 的功能上有一些缺点，那就是我给了 **Clawdbot** 一个自己的电子邮件地址，一个 **Google Workspace** 电子邮件地址，并且我最初只给了那个电子邮件地址对我个人日历的只读访问权限。所以我要做的第一件事是给它正确的账户。我做的第二件事，我从 **X** 上的一些人那里获得了一些灵感，就是我给了它访问它自己的有限保险库的权限，在 **OnePassword** 上。所以我使用 **OnePassword**，它是一个密码和秘密共享的应用程序。我创建了一个名为 **Claude** 的保险库。**Clawdbot** 只有访问该保险库的权限。我开始在里面放一些密码。这些都不是任何人的账户密码。它们是 **Claude** 自己账户的密码，而且 **Claude** 自己的账户里有一个 **Anthropic API** 密钥。

<details>
<summary>Original English</summary>

**Claire**: So what I did and you can follow this if you want to from a security perspective although I think it has some drawbacks on the functionality of **Cloudbot** is I gave **Cloudbot** its own email address a **Google Workspace** email address and I gave that email address read access to my personal calendar to start and so the first thing that I wanted to do was give it the right accounts. The second thing I did which I've taken some inspiration from some people on **X** is I gave it access to its own limited vault on **one password**. So I use **one password** which is a password and secret sharing kind of app. I made a vault that's called **Claude**. **Claude** only has access. **Claudebot** only has access to that vault. And I started putting some passwords in there. None of these were passwords to anybody's accounts. They were passwords to **Claude**'s own account and there was an **anthropic API** key in **Claude**'s own account.

</details>

**Claire**: 还有一件事我应该在引导过程中提一下，但我没有提，那就是在引导时，你可以选择你想使用的模型，**Anthropic**、**OpenAI**、本地模型，任何你想要的。我选择了 **Sonnet 45**。你也可以通过自己的订阅或通过 **API** 来使用 **Claude Code**。我选择通过 **API** 来使用它，因为我想看看我在 **Clawdbot** 上花了多少钱，我们会在节目结束时讨论这个问题。为什么我选择 **Sonnet 45** 来做这个练习呢？第一，老实说，我害怕了。我非常害怕 **Opus** 实际会做什么。它太强大了。嗯，它让我有点紧张。第二，我实际上不认为我正在做的任务需要 **Opus**。我只是不认为它需要那么大的马力。比如发送电子邮件，查看日历，这些都不复杂。最后一点是我想控制成本。所以我真的不确定所有这些子代理会消耗多少 **token**。所以我非常注重成本。我认为用户也会注重成本。我听说很多人都在运行本地模型或更便宜的模型。所以我希望像用户一样使用它。我选择了 **Sonnet 45**，这是一个完全可用的模型。

<details>
<summary>Original English</summary>

**Claire**: One other thing that I should call out during onboarding that I didn't is when you are onboarding you can choose what model you want to use **anthropic openai** local models anything you want. I chose **sonnet 45**. You can also kind of use **cloud code** with your own subscription or through **API**. I chose to use it through **API** because I wanted to see how much I was spending on **cloudbot** and we'll get to that at the end of the episode. And why did I choose **Sonnet 45** for this uh exercise? One, honestly, I was scared. I was very scared about what **Opus** would actually do. Like it's so powerful. Um it like kind of made me nervous. Two, I actually didn't think that the tasks that I was doing needed **Opus**. I just didn't think it needed the horsepower. Like it's sending emails. It's looking at calendars. It's not that complicated. And then the last thing is I wanted to control cost. So I was really unsure about how much token usage all these sub aents would take. And so I was really costconscious. I thought that users would be costconcious. I've heard a lot of people running local models or cheaper models. And so I wanted to use this kind of like a user would use it. And I selected **sonnet 45** which is a perfectly serviceable model.

</details>

### Clawdbot 的个性化设置与任务分配

**Claire**: 好的。所以我给了它电子邮件访问权限。我给了它，嗯，我给了它一个电子邮件。现在让我们看看我开始让它做什么。所以，你在引导时它做的下一件事是这个引导文件，它会引导你完成几个设置步骤，特别是你开始加载它的个性和它与你互动的方式。它会问你机器人应该叫什么名字？嗯，它的个性是怎样的？你是谁？你的时区是什么？嗯，还有其他你需要知道的吗？我叫它 **Polly**。它是一个助手。我希望它专业但友好。我喜欢美人鱼表情符号，所以我选择了那个。它正在更新它的身份文件。然后我说：“嘿，我是 **Claire**。我是 **Chat PRD** 的创始人。你将作为我的个人助理，帮助我处理家庭和工作任务。”它更新了我的信息。所以现在它知道，你知道的，它是谁，我是谁，如何联系。它给我如何联系的指示，然后它，你知道的，把我连接到我的第一个任务。

<details>
<summary>Original English</summary>

**Claire**: Okay. So I gave it email access. I gave it um I gave it so an email. Now let's see what I started asking it to do. So the the next thing that it does when you're onboarding is it does this like bootstrap file and it walks you through a couple setup steps and in particular you're starting to load its personality and how it interacts with you. It asks you what should the bot call itself? Um, what is its personality like? Who are you? What's your time zone? Um, anything else you should know? And I called it **Polly**. It's an assistant. I want it to be professional but friendly. I like the the mermaid emoji, so I chose that. And it's updating updating its identity file. And then I said, "Hey, I'm **Claire**. I'm founder of **Chat PRD**. You're going to help me with as a personal assistant across family and work tasks." And it updated my info. So now it kind of knows about, you know, who it is, who I am, how to contact. It gives me instructions on how to contact and then it, you know, connected me to my first task.

</details>

**Claire**: 现在，我们不得不在一些 **Telegram** 设置问题上反复沟通。我将跳过那部分。最终从 **Telegram** 收到了回复，我们将进行一些日程安排任务。你知道，我不确定 **Clawdbot** 实际上是如何与 **Google** 互动的。所以我只是问它，你知道的，我如何让你访问这个 **Google** 账户和这个 **Google** 日历？它会检查如何设置。它给了我几个步骤来设置日历访问权限。现在，如果你是与 **Google API** 合作过的软件工程师，你可能对此很熟悉。但再次强调，如果你是一个普通消费者或非技术人员，你将不得不真正熟悉 **Google Cloud Console**。你将不得不设置 **API** 访问、**OAUTH** 客户端，以及一大堆东西。这并没有花很长时间，因为我个人曾被许多集成的 **OAUTH** 工作流程所困扰。我确切地知道这里该怎么做，但如果你不是技术人员，你将不得不开始做一些技术性的事情，即使只是连接你的 **Google** 账户。

<details>
<summary>Original English</summary>

**Claire**: Now, we had to go back and forth on some **Telegram** setup stuff. I'm going to skip that. And finally got a um response back from **Telegram** and we're going to do some scheduling tasks. you know, I was unsure on how **Claudebot** actually interacted with **Google**. And so I just asked it, you know, how do I give you access to this **Google** account and this **Google** calendar? And it's going to check how to set that up. And it gave me a couple steps to follow in terms of how to set up calendar access. Now, if you're a software engineer that has worked with **Google APIs**, you're probably familiar with this. But again, if you are kind of an everyday consumer or nontechnical person, you are going to have to get real familiar with the **Google Cloud Console**. You are going to have to set up **API** access, **OOTH** clients, a whole bunch of stuff. This did not take long because I have been personally victimized by the **OOTH** workflows of many integrations. I know exactly what to do here, but if you're not technical, you're going to have to start doing some technical things even to hook up your **Google** account.

</details>

**Claire**: 这在桌面上实际上更简单。我将向你展示为什么。在虚拟机上要复杂得多。所以请理解，这一步不像你想象的那样简单的一键操作。所以你要做的是进入 **Google Console**，打开 **Docs API**，打开 **Email API**，打开 **Calendar API**，然后下载一个客户端秘密的 **JSON** 文件。现在，这真的让我很紧张。这不是那种你可以随意发送电子邮件来回操作的事情。它仍然需要手动 **OAUTH** 验证，但我有点担心它随意上传这些文件的意愿。我可以下载它。别担心，我会秘密保存它。你知道，如果你不是软件工程师，或者你没有受过安全原则最佳实践的培训，你可能会直接遵循这些指示。你会看到我在聊天过程中一直质疑这一点。现在，对于这一个，我只是做了。它就像一个沙盒账户。我真的不在乎。我给了它 **JSON** 凭证文件的本地路径。它们已配置好，我给了它我分配的电子邮件地址，然后发送给它们。

<details>
<summary>Original English</summary>

**Claire**: And this is actually simpler on a desktop. I'm going to show you why. It is much more complicated on a virtual machine. So just kind of understand that this step is not as straightforward one click as you can do. So what you do is you go into **Google console**, you turn on the **docs API**, you turn on the **email API**, you turn on the the **calendar API**, and then you download a **JSON** file of client secrets. Now, this legit stressed me out. This is not like the kind of thing you just kind of like yolo email and back back and forth. It still requires **OOTH** verification manually, but I was a little concerned about its like willingness to just say upload these files anywhere. I can download it. Don't worry, I'm going to share save it secretly. And you know, if you're not a software engineer or you haven't you you haven't been trained on best practices in terms of security principles, you would probably just like follow these instructions. And I you'll see this along my chat. I really questioned this along the way. Now, for this particular one, I just did it. It's like a sandbox account. I don't really care. I gave it a local path to the **JSON** credential files. They're configured and I gave it the email address that I had assigned it and sent that to them.

</details>

**Claire**: 然后它会给你一个 **URL** 来授权访问。所以它会给你一个 **URL**，让你实际打开，登录那个新账户，并授予必要的权限，然后它会将这些权限本地存储起来。现在，我在这里看到了一个非常有趣的屏幕，因为如果你还记得，我这个任务的唯一目的是让它查看日历，当我授予它权限或当我通过 **OAUTH** 流程时，它要求了这些。它基本上要求能够查看、编辑、创建和删除所有内容。删除、编辑、查看我的文件、查看我的联系人、查看我的电子表格、查看我的日历事件、查看我的电子邮件。再说一次，这是它的账户。所以，理论上，这应该是可以的。它有点像一个空状态账户。但话虽如此，我只是想做日历相关的事情。所以，你在这里会看到，我问它，你真的需要所有这些 **scope** 吗？它给了我一个经典的 **AI** 回复：“你完全正确。我不需要这些 **scope**。”然后它重新提示我，只提供了日历 **scope** 的 **URL**。

<details>
<summary>Original English</summary>

**Claire**: And then it gives you this **URL** to authorize access. So this it gives you a **URL** to actually open up sign in to that new account and give it the permissions necessary and then it'll store those permissions locally. Now this is where I got a very interesting screen because if you recall my only intention with this task was to get it to look at the calendar and when I gave it permissions or when I went through the **offflow** it asked for this. It asked for the ability to basically see edit create and delete everything. delete, edit, see my files, see my contacts, see my spreadsheets, see my calendar events, see my email. And again, my is its account. So, in theory, this would have been okay. It was kind of like an empty state account. But that being said, I was just trying to do calendar stuff. And so, you will see here, I asked, do you really need all these **scopes**? And it gave me a classic **AI**. You are absolutely right. I do not need these **scopes**. and it reprompted me with that **URL** for just calendar **scope**.

</details>

**Claire**: 所以，如果我要给你一个建议，那就是注意你为这些服务授予了哪些 **scope** 权限。如果你要求的是特定的东西，只给它特定东西的 **scope**。如果它只需要只读访问权限，就只给它只读访问权限。在这里要非常谨慎。所以，我只要求了日历访问权限。没什么大不了的。设置好之后，它告诉我它可以做很多事情。那么我让它做了什么呢？好的，我们就像助理和老板一样来回对话。它给我总结了接下来一周的安排，我今天有什么，明天有什么，这周有什么。所以我给了它一个我通常会给助理的任务，那就是这周要去旧金山的 **Vercel** 工作室。我忘了把它放在我的日历上。我记不起来了。或者你能否在 **Vercel** 活动页面上查找并把它添加到我的日历上？它实际上在博客上找不到，然后问了我一些问题，给了我一些选项。

<details>
<summary>Original English</summary>

**Claire**: So, if I were to give you a tip, it is watch how and what **scope** permission you're giving for any of these services. And if you're asking for something specific, only give it **scopes** for something specific. And if it only needs read access, only give it read access. Just be really thoughtful here. So, I just asked for calendar access. No big deal. Set it up and it told me it can do a bunch of stuff. So what did I have it do? Okay, so we just talked back and forth like we were a assistant and its boss. It gave me a summary of what's going on in the upcoming week, what I had today, what I had tomorrow, what was going on this week. And so I gave it a task that I would have normally given an assistant, which is going to the **Vercel** studio this week in San Francisco. I forgot to put it on my calendar. Like I don't remember. or can you look it up on the **Verscell** events page and put it on my calendar? And it couldn't actually find it on the blog and asked me some questions, gave me some options.

</details>

**Claire**: 嗯，它确实说，如果我想做一个随和的老板，我可以给它访问 **Gmail** 的权限，但我绝对不会那么做。所以，在经过一番来回沟通，包括一些 **Telegram** 消息中断后，我说：“让我给你访问你自己的电子邮件账户的权限，我会把相关的电子邮件转发给你。”所以，这又是我会和一个 **EA** 做的事情。我只会转发邮件，然后说：“你能把这个添加到我的日历上吗？”没有其他联系方式。现在，我确实不得不重新授权它访问自己的电子邮件。嗯，所以它又经历了一次 **OAUTH** 流程。它收到了电子邮件。它从电子邮件中提取了事件详情，这真的很棒，非常有帮助。它建议了一些事情，比如在通勤前后增加缓冲时间，这正是我需要的。我说我想让它把那个事件添加到我的日历上。

<details>
<summary>Original English</summary>

**Claire**: Um, it did say that I could, if I wanted to be, you know, easy an easygoing boss, give it access to **Gmail**, but I definitely wasn't going to do that. And so after a little bit of back and forth, including some drop **Telegram** messages, I said, "Let me give you email access to your own account and I'll forward you emails about it." So again, this is something that I would have done with a um **EA**. I would have just forward it and said, "Can you add this to my calendar?" No other contacts. Now, I did have to reauthorize access to its own email. Um so it went through that **OOTH** process again. It got the email. It ingested the event details from the email, which was really great, super helpful. It recommended things like adding buffer time for commute before and after, which is definitely what I needed. And I said that I wanted it to add that event to my calendar.

</details>

**Claire**: 现在，如果你还记得，它没有我工作日历的写入权限。它只有自己日历的写入权限。再说一次，它真的希望我给它日历的编辑权限。我很抱歉，但绝对不行。所以，就像同事一样，就像 **EA** 一样，我反而说：“嘿，你能否在你的日历上创建一个事件，然后邀请我参加？”它认为我很聪明，并说它会那样做。它做得非常好。所以，它在我的邀请中添加了单独的日历块，这真的很棒。现在，我终于发现它实际上已经在我的日历上了，所以我在不同的时间。所以我让它删除了重复的事件，并实际重置了它，它完全做对了。所以我想说，对于一个单一的日历事件，经过一些来回沟通，它做得相当不错。这有点像助理会做的事情。我对此唯一的抱怨实际上是它思考如何做这件事的方式，它肯定会说“给我所有权限，我就会冒充你，并代表你做事”。而这真的不是我想要的。我希望它像一个助理一样行事。

<details>
<summary>Original English</summary>

**Claire**: Now, if you recall, it doesn't have right access to my work calendar. It only has right access to its own calendar. And again, it really wanted me to give it edit access to my calendar. and I'm sorry, but absolutely not. And so, just like a colleague, just like an **EA**, instead I said, "Hey, can you just create an event on your calendar and invite me to it?" And it thought I was smart and said it would do that. And it did that really well. So, it added separate calendar blocks to my invite and it was really nice. Now, I noticed finally I found that it was actually on my calendar and so I at a different time. So I had it delete the duplicate event and actually um reset it and it got that completely right. So I would say for a single calendar event with a little back and forth it did pretty well. Like this is a little bit of what an assistant would do. My only complaints on this was actually how it thought about doing it was definitely like give me access to everything and I'll just impersonate you and and do things on your behalf. And that's really not what I wanted. I wanted it to act like a assistant.

</details>

### 延迟与提示词挑战

**Claire**: 所以我做的下一件事是，我想弄清楚 **Clawdbot** 还能为我做什么。所以我直接问它：“让我们弄清楚我们如何合作。我希望在任务上保持协调。告诉我你希望如何合作。”它给了我一些非常好的选择，并且在如何合作方面非常灵活。它列出了它已经拥有的东西，包括日历访问权限、日期记忆文件、我们可以沟通的 **Telegram**、**Gmail** 访问权限，我们刚刚谈过。这里有一些选项。我们可以创建一个待办事项文件，我们可以使用日历事件，我们可以使用电子邮件，我们可以记笔记。我的偏好是什么？我只是说，再说一次，我真的不在乎我如何与我的 **AI** 机器人合作。我只是说，对你来说什么更容易。

<details>
<summary>Original English</summary>

**Claire**: So the next thing that I did was I wanted to figure out what more **Claudebot** could do for me. And so I asked it directly like, "Let's figure out how we can work together. I want to stay coordinated on tasks. Tell me how you want to work together." And it gave me some really good options and was pretty flexible about how we could work together. And it called out what it already has, which is calendar access, date memory files, **Telegram** where we can communicate, **Gmail** access, which we just talked about. And here are some options. We could do a to-do file, we could use calendar events, we could use email, we could keep notes. What's my preference? And I just said, again, I don't really care how we work with my my **AI** bot. I just said, whatever is easier for you.

</details>

**Claire**: 然后我把一堆我最关心的事情都倒了出来。再说一次，这就是我与 **EA** 合作的方式。我只是坐下来，给他们发短信，发 **Slack**，然后说：“嘿，这些是我脑子里想的事情。你能把它们都整理好，然后帮我处理吗？”那么我脑子里想的是什么呢？我有一个与 **Vercel** **CEO** 的面试。我需要重新安排我们即将播出的一些 **How I AI** 节目，因为，如果你还不知道，我即将休完产假回来，我给自己安排了太多工作。我必须跟进 **Chat PRD** 的企业销售渠道。所以，我希望它专注于我的 **CRM**。这些是我最优先的任务。它向我总结了这些优先事项，将它们记录在待办事项中，然后开始第一个任务，即重新安排我的 **How I AI** 录制，并就如何更好地安排我的日历事件提出了一些建议。

<details>
<summary>Original English</summary>

**Claire**: And then I dumped a bunch of things that are top of mind. Again, this is how I would work with an **EA**. I just sit down with them, text them, **slack** them and say, "Hey, this was on my mind. Can you get it all organized and work me through it?" So, what was on my mind? I have an interview with the **CEO** of **Versel**. I need to reschedule some of our upcoming **How I AI** episodes because, if you all don't know, I'm coming back for maternity leave and I over booked myself. I have to stay on top of my enterprise pipeline for **chat PRD**. So, I want it to focus on my **CRM**. And those are the top priorities I have. and it summarized those priorities back to me, captured them in a to-do, and then started on the first task, which was rescheduling my **how I AI** recordings and making some recommendations on how I can do my calendar events better.

</details>

**Claire**: 现在，我想在这里指出一件事，嗯，就是这一切看起来都非常非常棒，而且超级有趣。比如，是的，明白了。这是你的优先事项。现实是，有一件事我没有听到人们谈论 **Clawdbot**，那就是**延迟**。它实际上非常慢。而且它不一定比人类慢，对吧？比如，如果你给人类发短信或发 **Slack** 给 **EA**，然后你说：“嘿，这是我的优先事项。”他们需要一些时间来整理，完成工作，然后嗯，然后回复你。但当你习惯了像 **Claude Code** 这样的东西，像 **Cursor** 这样的东西，像 **ChatGPT** 这样的东西，它们总是给你产品进度反馈，告诉你它的推理，向你展示它的工具调用时，等待一个异步机器人通过 **Telegram** 回复你真的很难。我想说，这是与 **Clawdbot** 合作中最令人沮丧的部分之一，就是它感觉很慢。

<details>
<summary>Original English</summary>

**Claire**: Now, one thing I want to call out while we're sitting here, um, is this all looks really, really great and super fun. Like, yep, got it. Here are your priorities. The reality is one thing that I don't hear people talking about in terms of **Claudebot** is **latency**. It is actually real slow. And it's not slow compared to a human necessarily, right? Like if you text a human or **Slack** and **EA** and you say, "Hey, here are my priorities." It's going to take them a hot minute to kind of organize them, get the work done, and um and get back to you. But when you're used to something like **clawed code**, like a **cursor**, like a **chat GPT**, which is always giving you product kind of progress feedback, it's telling you its reasoning. It's showing you its tool calls. It's really hard to wait for an asynchronous bot to get back to you on **Telegram**. I would say that was one of the pieces that has been most frustrating with working with **Cloudbot** is it just feels slow.

</details>

**Claire**: 我知道这是因为它正在启动这些子代理。它正在做很多任务。它可能只被提示在有事情要做或需要澄清时才回复你，但它确实很慢。你实际上会在提示中看到我问它，即使你需要研究或启动一个子代理，你是否总能在我发送东西时给我一个确认消息？现在，它没有这样做，所以它仍然很慢，但我必须弄清楚如何让它总是先回复我，而不是先执行任务。好的，回到我们正在做的任务。我让它给我一些关于如何重新安排 **How I AI** 播客的建议。我在产假回来的第一周有大约五次，这太疯狂了。所以它建议我保留几集。我在情人节之后重新安排了一些。它问我有什么想法。我给了它一些反馈，它修改了计划。

<details>
<summary>Original English</summary>

**Claire**: And I know it's because it's spinning off these sub agents. It's doing a lot of tasks. It's probably prompted only to get back to you when it has something to do or needs clarification, but it's quite slow. And you'll actually see in the prompting I ask it, can you always send me an **ACT** message when I send something even if you need to research or kick off a sub agent? Now, it did not do this, so it still remained slow, but I have to figure out how to get it to always respond to me first versus setting off its task. Okay, so back to the task that we were doing at hand. I asked it to give me um some recommendations on how I **AI** podcast rescheduled. I had like five in the first week. I'm back from **Matt** leave that is cuckoo. And so what it recommended is that I keep a couple um episodes. I rescheduled some after Valentine's Day. It asked me my thoughts. I gave it some feedback and it revised its plan.

</details>

### 邮件发送中的身份冒充问题

**Claire**: 现在，有趣的事情来了。一旦我们确定了我想推迟到稍后的事情，我让它给那两个需要重新安排的人发邮件，问他们是否介意重新安排到三月份。我给了它我的日程安排链接，这样他们就可以自己重新安排到三月份。我说在这些邮件中抄送我的工作邮箱，它说正在起草这些邮件。我以为它会起草邮件。我错了。它直接发送了，而且发送方式非常有趣。好的。然后它发送了这封邮件，这封邮件很可爱。它说：“希望你一切顺利。我想和你谈谈我们的播客录制。我需要重新安排。”但它却是以我的名义发送的。它以 **Claire** 的名义发送的，而且很明显来自一个单独的电子邮件地址。我给它起了一个假名字。这根本不好笑，它实际上冒充了我。

<details>
<summary>Original English</summary>

**Claire**: Now, here's where things get fun. Once we aligned on what I wanted to move to later, I asked it to email those two people that I needed to reschedule and asked them if they would mind rescheduling to March. I gave that it's my scheduling link so they could actually just self-reschedule to mark and I said copy my work email on those emails and it said drafting those emails down now I thought it would draft them. I was I was wrong. It just sent them and it sent them in a very funny way. Okay. So then it sent this email which was lovely. It said, "I hope you do well. I wanted to talk to you about our podcast recording. I need to reschedule. Except it sent it as me. It sent it as **Clarvo** and it's clearly coming from a separate email address. I gave it a fake name. It was [laughter] not good at all and it actually impersonated me.

</details>

**Claire**: 所以，我实际上回复了这位可爱的播客嘉宾，我说：“对不起。我正在测试 **Clawdbot**。它完全冒充了我，让我听起来像个疯子。呃，但我们还能重新安排吗？”所以，感谢我的两位嘉宾作为我的 **AI** 实验品非常耐心。我回到 **Clawdbot** 面前，我说：“拜托，伙计。别冒充我。你需要以我助理的身份联系。我已经解释过了。我已经给了你一个身份。请务必始终将自己标识为助理。”我想，但愿它能把这个存储在记忆中，并在将来这样做。但这是一个非常有趣的教训，关于**提示词**的重要性。我以为我对权限已经相当小心了，确实如此。它只能做几件事，但我低估了这款工具似乎更倾向于**冒充你**，而不是作为助理行事。我必须查看代码库，并让自己熟悉它的实现方式。这不是本播客的意图，去真正理解为什么会发生这种情况。但**提示词**真的，真的非常重要。

<details>
<summary>Original English</summary>

**Claire**: So, I actually responded to this lovely podcast guest and I said, "I'm sorry. I'm testing **Claudebot**. It totally impersonated me and made me sound crazy. Uh, but please can we can we still reschedule?" So, thank you to my two guests for being really patient as my **AI** guinea pigs. And I went back to **Claudebot** and I said, "Come on, man. Don't impersonate me. You need to reach out as my assistant. I already explained this. I already gave you an identity. Like, please always identify yourself as an assistant." And it should, I think, knock on wood, store this in its memory and do this in the future. But it was a really funny learning in terms of **prompting** is really quite important. I thought I was being fairly careful with permissions, which I was. It could only do a couple things, but I underestimated how much it seems like this tool is biased towards acting as you as opposed to acting as an assistant. And I'll have to look through the repository and I'll have to kind of get myself familiar with how it's implemented. That's not the intention of this podcast to really understand why that is happening. But **prompting** really, really matters.

</details>

**Claire**: 我认为这里有一个有趣的产品教训，那就是，是的，我本可以非常非常仔细地编写**提示词**。我本可以说：“为这些嘉宾创建这封电子邮件的草稿。在我发送之前，先发给我审查。”但当我这样做时，每次交互至少需要几分钟，这根本不是一个生产力工具。这并没有让我比自己发送电子邮件更高效。所以我确实认为，这些自主代理在用户控制和对**提示词**非常谨慎之间，以及自主行事并可能做错一些事情之间存在一种平衡。我认为这是一个双方都存在的**提示词**问题。这是产品提供方的问题，也是用户方的问题。而且我认为，如果只是一个普通消费者或半专业用户，可能没有足够多的人能够分解为什么一个**提示词**比另一个做得更好。所以我认为这就是很多奇怪行为产生的原因。

<details>
<summary>Original English</summary>

**Claire**: And I think the product lesson here that's kind of interesting is yes, I could have been really, really precious about prompting. I could have said, "Create a draft of this email to these guests. Send it to me for review before you send it." But at the point that I'm doing that and each turn takes at least a couple minutes, this is not a productivity tool. this is not making me more efficient than sending that email myself. And so I do think there's this balance between these autonomous agents being user controlled and being really cautious about how you prompt it and being autonomous and probably doing some things wrong. And I think this is a **prompting** problem on both sides. It's a **prompting** problem on the product provider side. It's a **prompting** problem on the user side. And I don't think enough people are probably sophisticated enough to decompose why one prompt versus the other would do well if you're just a consumer or a proumer. And so I think this is where a lot of the weird behaviors that you'll see are coming out.

</details>

### 日历管理失误与时区问题

**Claire**: 那么到目前为止，我用 **Clawdbot** 做了什么呢？我已经安装了它。我给了它一个身份。我们已经重新安排了一个事件，或者说我们已经安排了一个事件。我们已经给了它访问电子邮件的权限。我们现在已经重新安排了两个事件，并就这些事件向嘉宾发送了电子邮件。然后，这就是它变得疯狂的地方。这就是它变得有趣的地方。所以我决定给它编辑我们家庭日历的权限。这是一个日历，上面有接送、篮球比赛、钢琴练习、我的芭蕾练习以及所有这些事情。现在我喜欢这个日历。它对我非常重要，如果我需要把它清空，我绝对可以。所以我给了它访问权限，我希望它做的是，一是给我丈夫和我发邮件，告知我们接下来一周的安排，你知道，协调我们在接送方面的空白或冲突，比如我当时在城市另一端的 **Vercel** 活动，而他需要接孩子去打篮球。我还希望它填满我日历的其余部分。我的孩子们开始了新的篮球赛季。我们的邻居在某一天接孩子。所有这些事情我都希望它完成。

<details>
<summary>Original English</summary>

**Claire**: So so far what have I done with **Claudebot**? I've installed it. I have given an identity. We have rescheduled one event or we have scheduled one event. We have given an access to email. We have rescheduled two events now and emailed guest about these events. And then this is where it goes crazy. This is where it gets fun. So I decided to give it edit access to our family calendar. This is a calendar where we have pickups and drop offs and basketball games and piano practice and my ballet practice and all that stuff. Now I love this calendar. It was very important to me and if I needed to nuke it, I definitely could. So I gave it access and what I wanted it to do was one email my husband and I about upcoming week and you know get us coordinated on where there were gaps in terms of pickups or conflicts where I was across the city at a **Verscell** event and he was needing to pick up the kids for basketball practice and I wanted it to fill out the rest of my calendar. My kids have started a new basketball season. Our neighbors picking up the kids on a certain day. all those things I wanted to get it done.

</details>

**Claire**: [哼了一声] 问题来了。我给了它一堆指令，它能很好地读取那个日历。它能很好地对事件进行分类，但它完全不知道今天是星期几。所以当我在 **Telegram** 上来回给它指令时，比如“你能添加这个吗？你能删除这个吗？你能改变日程吗？”我以为它在 **Telegram** 上做得很好，因为我没有特别注意。嗯，它确认它完成了所有这些事情，然后我打开我的日历，结果所有事情都在错误的日期。我的意思是，所有事情都在错误的日期。如果你是父母，你就会明白。你会想：“等等，等等，等等。某某人是在星期二还是星期三接第二个孩子？我知道我把钢琴课挪了，但我不认为我挪到了那一天。”所以，我花了一点时间才明白它造成的损害，但它确实把事情搞砸了。

<details>
<summary>Original English</summary>

**Claire**: And here [snorts] is the problem. I gave it a bunch of instructions and it could read that calendar pretty well. It could categorize the events pretty well and it had no idea what day it was. And so as I was on **Telegram** going back and forth giving it, can you add this? Can you remove this? Can you change the schedule? I thought it was doing a great job on **Telegram** because I wasn't really paying super attention. Um, and it was confirming that it did all these things and then I opened up my calendar and everything was on the wrong day. I mean, everything was on the wrong day. And if you are a parent, you get this. You're like, "Wait, wait, wait, wait, wait. Is so and so picking up kid number two on Tuesdays or Wednesdays? And I know I moved piano, but I don't think I moved it to that day." So, it took me a second to understand the damage it had it had done, but it had really gotten things wrong.

</details>

**Claire**: 你可以看到我说：“停。你把所有这些都设置晚了一天。”它确实把所有事情都设置晚了一天。它不仅把所有事情都设置晚了一天，它用来将这些事件添加到日历的 **CLI** 工具只能设置一次性日历。所以，它无法设置重复事件。所以，如果我想删除这些损坏的事件，我必须一个一个地删除它们。然后，我们这个甲壳类动物朋友的另一个问题是，当你与它们协作时，我当时在我的电脑上，就是这台，嗯，打开了我的日历。它在那边打开了它的 **CLI**，我们彼此冲突。所以我试图删除所有这些错误的事件，然后它又会把它们放回去，因为它认为有什么东西坏了。我们只是，我试图把它们添加进去。我说，你知道的，停。它没有停，因为**延迟**，也因为这些子代理。所以我重新设置了所有东西，它却删除了我所有的工作。

<details>
<summary>Original English</summary>

**Claire**: You can see me say, "Stop. You are setting all these one day late." And it was setting everything one day late. And not only was it setting everything one day late, the **CLI** tool that it was using to add these events to the calendar could only set oneoff calendars. And so, every it could not set a recurring event. So, if I wanted to delete these broken events, I had to go through one by one and delete them. And then the other problem with our crustation friend here when you're collaborating with them is I was on my computer, this one, um, with my calendar open. It was over here in the **CLI** with its **CLI** open, and we were conflicting with each other. So I would try to delete all these bad events and then it would go put them back cuz it thought something got broken. We were just I was trying to add them in. I said, you know, stop. It did not stop because of **latency** and because of these sub agents. And so I went through and set up everything correctly and it went through and deleted all my work.

</details>

**Claire**: 这太糟糕了。这真的非常非常令人紧张。嗯，我说，你知道的，我不得不完全重做。它就像每五秒钟给我丈夫发一次邮件。嗯，所以它做得不好，而且它实际上从未做对过。我将向你展示并分享我们关于**时区**的讨论。但这是另一件，你知道的，非软件工程师使用这样的工具时必须注意的事情，正如我在 **X** 上所说，唯一剩下的软件工程问题是**时区转换**，而 **LLM** 根本没有空间和时间的概念。它就是不知道“现在”是什么时候。它没有时间流逝的概念。嗯，现在我要说 **Clawdbot**，因为它有这些日常文件和日常日志，所以它对时间有一点点感知，但不是很好。

<details>
<summary>Original English</summary>

**Claire**: It was it was terrible. It was really really stressful. Um and I said, you know, I had to completely redo. It's like emailing my husband every five seconds. Um, and so it it was not great and it actually never got it right. And I will show and share with you the discussion we had about **time zones**. But this is another thing that you know non-software engineers using something like this really have to be aware of is as I said on **X** the only remaining software engineering problem is **time zone conversion** and **LLMs** just have no sense of space and time. It just does not know when now is. It doesn't have a sense of time passing. Um now I will say **Claudebot** because it has these daily files and daily logs has a little bit more of a temporal sense but not a great one.

</details>

**Claire**: 所以，如果你不明白为什么电脑在使用这样的工具时会弄错日期，你会非常沮丧。我至少可以理解为什么会发生**时区转换**，也许 **Google API** 中有一个 **UTC** 时间戳。我至少可以理解为什么会发生这种情况，并帮助它找到解决方案。但这确实令人沮丧，而且我认为普通用户无法做到这一点。所以，我将娱乐大家，我将告诉你们，当我做这件事的时候，嗯，我暂停了一下，带着我最小的两个孩子去了 **Target**，因为我们东西用完了。所以我问它是否可以通过语音与我讨论事情，它说：“当然，你可以给我发语音备忘录。我可以回复文本。我可以给你发语音备忘录，或者我们可以通过 **Twilio** 设置电话通话。”我只是说：“我们设置语音备忘录到你的文本回复。”所以我可以嗯，在 **Telegram** 上按语音，让它在我外出时回复我。

<details>
<summary>Original English</summary>

**Claire**: And so if you don't understand why a computer could get dates wrong using a tool like this, you're going to get really frustrated. I could at least understand why **time zone conversion**, maybe there was a **UTC** time stamp in the **Google API**. I could at least understand why this was happening and help guide it towards a solution. But it certainly was frustrating and something that I don't think your everyday user would be able to do. So, I'm going to entertain you all and I'm I'm going to tell you as I was doing this, um, I took a pause and I took my two youngest kids to **Target** because we were out of stuff. So, I asked if it could discuss things with me via voice and it said, "Sure, you can send me voice notes. I can send text back. I could send you voice notes back or we could go through **Twilio** and I could set up a phone call." I just said, "Let's set up voice notes to your text reply." And so I could um press voice on **Telegram** and have it reply to me as I was on the go.

</details>

**Claire**: 所以当我们来回讨论**时区**问题时，我想和你们分享我给 **Clawdbot** 发的那些有趣的语音消息，因为这真的是一种真实的能量。让我们看看我们能否听到它们。好的，这是我在 **Target** 推着购物车，对 **Clawdbot** 非常生气。你把它放回去了，但那是星期五。星期五是正确的日期，所以不要改变任何东西，但你能否解释一下你为什么把日期搞混了？这场联赛比赛是在正确的日期。再说一次，请不要改变它，但我真的不明白你为什么把日期搞混了。好的，所以我对这种把日期搞错的体验感到非常非常恼火。它回复说：“哦，天哪，你完全正确。我现在明白了问题所在。我错了一天。这是所有新的日期。”它们仍然肯定错了一天。所以当我发出我那条“刻薄妈妈”的消息后，它回复我说：“你完全正确。我道歉。这是日期。”

<details>
<summary>Original English</summary>

**Claire**: And so while we were in this back and forth on um **time zones**, I want to share with you my delightful voice messages to **Claudebot** because this was a real real energy. Let's see if we can hear them. Okay, so this is me at **Target** pushing a cart getting really mad at **Claudebot**. You put it back, but that is a third a Friday. Friday is correct date, so do not change anything, but can you please explain to me why you are getting days mixed up? This league game is on the correct day. Again, please do not change it, but I do not understand why you have the days mixed up. Okay, so I am getting super annoyed by this um experience of getting days wrong. And it replies, "Oh my gosh, you are absolutely right. I see the problem now. I was off by one day. Here's all the new dates." And they were still definitely off by one day. So once I sent my mean mom message, it came back with me and said, "You are absolutely right. I apologize. Here are the dates."

</details>

**Claire**: 对。问题是，我一直在，这很有趣，我一直在“心理计算”每个日期是星期几。尽管 **API** 告诉我星期几是什么，我应该相信它。但我却用我的 **LLM** 大脑来决定。我回复它什么了呢？我说：“你是一台电脑。你没有做任何所谓的‘心理’计算。你是在进行计算。你能查看你的日志，理解计算来自哪里吗？还是不能？”如果你不喜欢这个，那是我非常非常小的孩子在背景里哭，我正把他从汽车座椅抱到婴儿车里。那真是一股能量。再说一次，作为一名软件工程师，我理解这一点。我一生都在进行**时区转换**。我明白 **API** 返回的数据格式五花八门。我明白 **LLM** 在处理日期时无法进行基本的数学运算。这太难了。我们还没有这项技术。

<details>
<summary>Original English</summary>

**Claire**: Right. The issue is I've been, this is fiery funny, I've been trying to quote unquote mentally calculate which day of the week each date falls on. Even though the **API** is telling me what the date of week is, I should probably trust it. But I was using my **LLM** brain to decide. And what did I say back to it? Well, I said this. You are a computer. You are not doing anything quote unquote mentally. You are making calculations. Can you look in your logs at all and understand where the calculations come from or no? And if you did not enjoy this, that is my very, very new baby crying in the background as I'm lifting him from the car seat into the stroller. It was quite an energy. And again, this is one of those things that as a software engineer, I get it. I have done **time zone conversions** for my for for my whole life. I understand the **APIs** return things in all sorts of formats. I understand **LLMs** can't do, you know, basic math when it comes to dates. It's just too hard. We do not have the technology.

</details>

**Claire**: 然而，这个模型告诉我它是在脑子里计算的，这太搞笑了。所以，在我们来回讨论之后，它给自己设定了一个规则来正确处理这些日期，然后我让它把这个规则添加到它的规则中。现在，我们做的最后一件事是，我问它是否可以给我发语音备忘录。这就是 **Clawdbot** 的一些魔力真正展现的地方。人们一直在说 **Clawdbot** 很酷的一点是，你可以让它自己获得技能。它可以学习东西。它可以非常神奇地做事情。如果你想在 **Telegram** 中来回发送语音备忘录，要弄清楚你想使用哪个 **API**，哪个技能，如何连接它，如何使用 **Claude Code**，所有这些东西都会非常困难。而它就是做到了。所以，当我说：“你能给我发语音备忘录吗？”它就给我发了一个语音备忘录。所以，让我们听听。

<details>
<summary>Original English</summary>

**Claire**: And yet, the fact that this model told me it was doing it in his head was so hilarious. So, once we had the back and forth about this, it gave itself a rule to follow in terms of getting these dates right, and then I asked it to add it to its rules. Now, the final thing that we did is I asked if it could send me voice notes back. And this is where some of the magic of **Clawbot** really does come out. One of the things that people have been saying about **Claudebot** that's so cool is you can just get it can give it self skills. It can learn things. It can just do things very magically. And if you were trying to get back and forth voice notes in **Telegram**, it would have been pretty hard to like figure out what **API** you want to use and what skill and hook it up and use **cloud code**, all this stuff. And it just did it. So, when I said, "Can you please send me voice notes back?" It just sent me a voice note back. So, let's see.

</details>

**Clawdbot**: 是的，我可以给你发语音消息。如果你想让我用语音回复，请告诉我。我随时都可以这样做。

<details>
<summary>Original English</summary>

**Clawdbot**: Yes, I can send voice messages back to you. Let me know if you'd like me to use voice for replies. I can do that anytime you want.

</details>

**Claire**: 所以，那是一个相当神奇的时刻。你知道，我在这期节目中一直在苛刻地评价 **Clawdbot**。并不是因为我不认为它是一个很棒的产品。现实是，通过文本与一个可以方便地访问你的日历、方便地访问你的电子邮件、可以学习语音等技能的工具来回沟通，你可以随意聊天。我实际上非常喜欢这种体验的形式，我也喜欢它能实现的概念。

<details>
<summary>Original English</summary>

**Claire**: So, that was a pretty magical moment. And, you know, I've been giving **Claudebot** a really hard time in in this episode. Not because I don't think it's an awesome product. The reality is going back and forth via text with something that has helpful access to your calendar, has helpful access to your email, can learn skills like voice that you can just chitchat to. I actually really liked the form factor of the experience and I liked the concept of what it could deliver.

</details>

### Clawdbot 的局限性与编码用例

**Claire**: 只是它的实现有几个问题。第一，对普通用户来说太技术化了；第二，对有安全意识的用户来说太吓人了；第三，**延迟**问题削弱了体验的一些魔力。所以，再说一次，我不认为这是一个从产品角度来看糟糕的产品。我只是不喜欢它的实现方式。我们将用我使用 **Clawdbot** 的最后一个用例来总结我所做的一切，那就是我让 **Clawdbot** 利用它的历史记录来创建一个 **Next.js** 应用，展示我们对话的历史记录。我要求它删除姓名、数字、**URL**、电子邮件地址等所有这些信息，这样我就可以和大家分享了。嗯，所以，这又是一种经典的 **AI** 工程、**AI** 编码风格的编码用例。

<details>
<summary>Original English</summary>

**Claire**: It was just that the implementation of it had a couple things. one, too technical for the everyday user, two, too scary to the security aware user, and three, **latency** that took some of the magic away from the experience. And so again, I don't think this is a bad product from a capital P product perspective. I'm just not in love with the implementation. And we'll just summarize my what I did with **Claudebot** with my last use case, which is I had **Claudebot** use its history to create a **Nex.js** app that showed the history of our conversation. And I asked it to redact names, numbers, **URLs**, email addresses, all that stuff so I could share it with all of you. Um, so again, kind of a classic **AI** engineering **AI** coding vibe coding use case.

</details>

**Claire**: 现在，我要说的一件事是，很多人都非常兴奋，或者说他们很兴奋，我不知道他们是否用过它，用 **Clawdbot** 来启动 **Claude Code** 为他们编写代码。而这对我来说并不是一个神奇的用例，我也没有开始使用它的原因是我已经使用具有计算机访问权限的远程代理为我编写代码一段时间了。我使用 **Devin**，它有一个本地环境中的虚拟机，可以随时启动东西并访问网络。我通过 **Slack** 使用它，所以我可以 @ 提及 **Devin**。你知道，我有一个用于 **Chat PRD** 的 **Slackbot**，所以我一直在 @ 我的产品经理。**Cursor** 有后台代理。你知道，所有东西都有，你可以启动在线 **CodeX**。所以我不知道人们是不是没有使用这些工具。我想 **Claude Code** 嗯，还没有那样的工具。我不知道人们是不是没有使用这些工具，但我已经通过启动一个异步队友，姑且这么说，来编写代码两年了。所以那部分从来都不是我想用 **Clawdbot** 的原因。

<details>
<summary>Original English</summary>

**Claire**: Now, the one thing that I will say is a lot of people are really excited or say they're excited, I don't know if they've used it, to use **Cloudbot** to spin off **Cloud Code** to do coding for them. And where this wasn't the magic use case for me and why I didn't start it is I've been spinning off remote agents with computer access to do coding for me for a while. I use **Devon** which has a virtual machine in a local environment and can spin up stuff access to the web uh all the time. I use it from **Slack** so I can appmention **Devon**. You know I have a **Slackbot** for **chat pd** so I'm apping my product manager all the time. **Cursor** has background agents. You know everything has you you **codeex** you can kick off online. So I don't know if people are just not using those tools. I guess **claude code** um doesn't have have one like that quite yet. I don't know if people aren't using those tools, but I've been coding by kicking off an asynchronous teammate, quote unquote, for, you know, two years now. And so that piece was never what I wanted to use **Claudebot** for.

</details>

**Claire**: 但我想，当你尝试一个新的代理时，你必须用它来编写一些代码。所以我做了。我给 **Polly the Clawdbot** 发送了一条语音备忘录。这是我给它的要求。好的，从现在开始我们用语音。我希望你将我们从今天开始到结束的完整对话记录在一个 **Next.js** 网络应用中，以 **UI** 形式展示来回的交流。我希望你删除任何秘密密钥、人名或特定地点。我希望你能够在两种 **UI** 显示版本之间切换。我希望你能够向我展示一种终端风格的来回对话，类似于 **Claude Code** 或 **Clawdbot**，或者我希望你能够向我展示一种 **Telegram** 风格的文本来回交流。内容应该采用 **JSON** 格式，同样要删除姓名、电子邮件、日期等，用占位符或删除块替换，然后生成 **Next.js** 应用。我将使用它，这样我就可以与其他人分享这个对话，而无需分享我的信息或进行屏幕录制。我们最终将把它部署到 **Vercel**。你能告诉我它何时部署到 **Vercel**，这样我就可以查看它吗？

<details>
<summary>Original English</summary>

**Claire**: But I thought, you got to vi code something when you're trying a new agent. And I did that. So what I did is I sent **Polly the Claudebot** a voice note. And this is the requirements I gave it. Okay, let's use voice from here on out. I want you to document our conversation in a **next.js** **JS** web app that shows the back and forth of our full conversation from the very beginning today till the end in a **UI**. I want you to redact anything that is a secret key, a person's name or a specific place. And I want to toggle between two **UI** versions of this display. I want you to be able to show me a terminal style conversation back and forth similar to a **claude code** or you **claude bot** c l a w db b o t or I want you to show me a **telegram** style text back and forth. The content should be in **JSON** the same again redact names, emails, dates, etc. replace them with placeholders or redacted blocks and then generate the **next JS** app. I'm going to use this so I can share this conversation with others without sharing my information or having to do a screen recording. We are eventually going to deploy this to **Verscell**. Can you let me know when it's deployed to **Versel** so I can look at it?

</details>

**Claire**: 所以我发送了这条消息，它启动了本地开发，构建了一个 **Next.js** 应用。现在，当我回到运行 **Claude** 的笔记本电脑时，我注意到的一件事是，部署它实际上并没有那么简单。**Clawdbot** 没有 **GitHub** 账户。我真的不想把 **Clawdbot** 添加到我的 **Vercel** 账户。我不想登录那些东西。这似乎是一个很大的麻烦。所以，在不设置一堆账户的情况下部署它似乎并不有趣。所以我做的是，别告诉任何人，我把代码库空投到了我自己的笔记本电脑上。我实际上登录了 **Claude Code** 并做了一些编辑。老实说，就编码质量以及与 **Clawdbot** 的**延迟**来回沟通，以及无法从编码角度看到它做出的决策而言，我并不喜欢 **Clawdbot Telegram** 风格的编码。它太慢了。周期不够好，不够渐进，它显然没有完美地针对编码用例进行调整。它不像给我发送 **PR** 链接，所有这些事情。所以我更喜欢在我的桌面上使用 **Claude Code** 来工作，并通过我的常规系统部署它。所以这就是一些反馈。

<details>
<summary>Original English</summary>

**Claire**: So I sent it this message and it kicked off local development building a **next.js** app. Now, when I got back to my laptop that **Claude** was running on, one of the things that I noticed is deploying it actually wasn't that simple. **Claudebot** didn't have a **GitHub** account. **Claudebot** I didn't really want to add to my **Versell** account. I didn't want to log into those things. It seemed like a big rigomearroll. And so, getting it to deploy without having to set up a bunch of accounts seemed not fun. So what I did instead, don't tell anybody, is I air dropped the repo to my own laptop here. I actually logged into **Claude Code** and made some edits. And to be honest, in terms of coding quality and just the back and forth with the **latency** of **Claudebot** and the inability to sort of see what decisions it's making from a coding perspective, I didn't love **Claudebot Telegram** vibe coding. It's just too slow. the cycles aren't good enough, they aren't incremental enough, it's clearly not like perfectly tuned for the coding use case. It's not like sending me a **PR** link, all those sorts of things. And so I just preferred working with it on my desktop in **claw code** and deploying it through my normal system. So that's a little bit feedback there.

</details>

**Claire**: 我确实认为有一件事非常酷，那就是当我外出时，它说应用已经准备好了，你知道，我当时在 **Target** 或其他地方，无法运行本地机器。它能说：“嘿，给我发一张截图看看它长什么样。”它做到了，它直接在 **Telegram** 中给我发送了应用的截图。所以，我确实认为有一些被低估的方面，一些非常简单的事情。给我发那份文件，给我分享一张截图，这些对于与家里的笔记本电脑、台式机或设备进行交互都非常有用。所以，我确实认为这是一种被低估的方面，能够与你的电脑聊天。它可以做一些事情，比如给你发送文件，截图，打开浏览器。这非常酷，尤其是因为我们并没有把所有东西都存储在云端。我所有的桌面截图都不在云端。我下载的一些 **PDF** 也不在云端。所以这是一种非常有趣的用例，用于与远程开发者聊天。话虽如此，**Devin** 总是给我发送截图。我认为它不适合编码，但这是一个值得思考的问题。

<details>
<summary>Original English</summary>

**Claire**: One thing that I did think was really cool is when I was on my go on the go and it said the app was ready, you know, I was in **Target** or whatever and I wasn't at a place where I could run a local machine. It was pretty cool to say, hey, like shoot me a screenshot of what it looks like and it did it it shot me screenshots of what the app looked like directly in **Telegram**. So, I do think there's some underappreciated aspects, really simple things. Email me that file, share me a screenshot that are really useful to interface with a a laptop or a desktop or a device at home. So, I do think this is an underappreciated aspect of being able to chat with your computer. It can do things like send you files, take screenshots, open up browsers. That is pretty cool, especially since we don't store everything in the cloud. All my desktop screenshots are not in the cloud. some of the **PDFs** that I download are not in the cloud. And so this is this was a really kind of like fun use case for chatting with a remote developer. Now, that being said, **Devon** sends me screenshots all the time. I don't think it's perfect for coding, but it's something to think about.

</details>

### Reddit 研究用例：成功的产品体验

**Claire**: 所以我想用一个我认为它做得特别好的工作流程来结束这个工作流程部分。它之所以好，有两个原因。第一，产品界面是我想要的。我获得了完整的 **Clawdbot** 机器人体验。第二，输出结果非常好。那么我让它做了什么呢？我让 **Clawdbot** 去 **Reddit** 上研究人们对 **Chat PRD** 有什么需求。所以我说去 **Reddit**。我是在语音备忘录中说的。我说去 **Reddit**，找出人们对 **Chat PRD** 有什么需求，找出他们对产品 **AI** 平台有什么需求，然后给我发一份报告。我喜欢这种产品体验的什么地方？**Clawdbot** 的一个杀手级功能是能够随时随地以任何方式发送消息。我给它发送了语音备忘录。我可以给它发电子邮件。如果更快的话，我可以发短信。它会以文本、语音等形式回复。它还会给我发电子邮件。所以，它感觉非常像我正在合作的员工。嘿，给他们发个 **Slack**。他们会说，是的，在你的收件箱里。这种始终在线、随时随地、以任何方式的代理通信流程真的非常棒。

<details>
<summary>Original English</summary>

**Claire**: So, I want to end this workflow section with one workflow that I thought it did a particularly good job at. And it was good for two reasons. One, the product interface was what I wanted. I got the full **Claudebot** bot experience. The second thing was the output was really good. So what did I ask it to do? Well, I asked **Claudebot** to go on **Reddit** and research what people would want from **Chat PD**. So I said go on **Reddit**. I I did this during voice note. I said go on **Reddit**, find what people want from **Chat PR**, find what they want from a product **AI** platform and email me a report. And what did I love about the product experience? One of the killer features of **Cladbot** is the ability to message anywhere, anything, anyhow. I sent it to voice note. I could shoot it an email. I could text if that was faster. And it would reply in kind as text, as voice, whatever. And it would also email me. So, it felt very much like an employee that I was working with. Hey, like send them a **Slack**. And they're like, yep, it's in your inbox. That sort of always on anywhere anyhow communication flow for the agent was really really nice.

</details>

**Claire**: 我喜欢从产品角度来看的第二件事是，我曾从负面角度谈论过这一点，那就是**延迟**并不理想。它就是不够灵敏，不够快，有时还会出问题。但如果这是一个研究任务，我并不认为它应该很快返回结果，我不介意等待 **Clawdbot** 做好工作。它确实做到了。这与与员工合作的体验非常相似。如果我给他们一个研究任务或路线图任务，我不会期望它在 30 秒内返回结果，而是期望他们出去做大量研究，然后回来找我，所以在这里我并没有那么在意**延迟**。然后第三件事是，我认为输出结果实际上非常好。所以，我将向你展示它发给我的东西，它发给我这份 **Chat Reddit** 研究 **Markdown** 文档，通过电子邮件发送到我的收件箱，它列出了从 **Reddit** 研究中获得的关键见解。我认为很棒的是，这是正确的，而且以一种非常简单、有力的方式呈现，我可以立即采取行动。这正是我希望我的团队中的产品经理或研究助理带着见解回来的方式，这些都是我们听到的东西。所以，它非常准确。

<details>
<summary>Original English</summary>

**Claire**: The second thing I like from a product perspective is I've talked about this from a negative point of view which is the **latency** is not great. It's just not super responsive and super fast and it's kind of broken sometimes. But if this is a research task that I don't really think should come back quickly, I don't mind waiting for **Claudebot** to do a good job. And it did. And it's very similar to an experience with an employee. if I give them sort of a research task or roadmap task, I don't expect it to be returned in 30 seconds except they go out, do a bunch of research and come back to me and so I wasn't as bothered by the **latency** here. And then the third thing is I thought the output was actually quite good. So, I'll show you what it sent me, which is it sent me this **chat Reddit** research **markdown** document, emailed it to my inbox, and it listed out key insights from research **Reddit** from researching **Reddit**. And what I thought was awesome is this is right, but it's presented in a really simple, punchy way that I can go action. this is exactly how I would want a **PM** or a research assistant on my team to come back with insights and these are the things that we hear. So, it was really accurate.

</details>

**Claire**: 你知道，集成限制，无论是我们这边还是客户那边，都很困难。没有人会阅读冗长的 **PRD**。让我们把我们的 **PRD** 缩短。嗯，你知道，**PRD** 需要是活文档。所有这些东西，几个要点，几个指向 **Reddit** 帖子的参考链接。我有一份完整的文档，我可以根据它来制定路线图。事实上，这正是我让它做的事情。我说，根据这个制定一个路线图。看看我们当前的功能，然后告诉我接下来我应该构建什么。这感觉非常神奇。我可能会借鉴其中一些想法。我稍后会回到这一点，谈谈我对 **Clawdbot** 接下来的看法。但我确实认为，无论是从消费者角度还是从企业业务角度来看，都会对一个感觉像代理员工的代理员工有需求。它有一台电脑。它有账户访问权限。它能做事。它能把这些事情做好。

<details>
<summary>Original English</summary>

**Claire**: You know, integration limitations both on our side and customer sites hard. No one reads long **PRDs**. Let's make our **PRDS** shorter. Um, you know, **PRDs** need to be living documents. All these things, a couple bullet points, a couple reference links to **Reddit** threads. And I have a full document that I can go build a road map off of. And in fact, that's exactly what I asked it to do. I said, go build a road map based on this. look at our current functionality and tell me what I should build next. This felt pretty magic. I'm probably going to steal some of these ideas. I'm going to circle around to that in a little bit in terms of what I think is next for **Claudebot**. But I do think there is going to be demand both from a consumer perspective and from an enterprise business perspective on a agent employee that feels like an agent employee. It has a computer. It has account access. It can do things. It does those things well.

</details>

**Claire**: 但我认为，在我们放任它自由之前，我们必须先弄清楚一些事情。再说一次，你可以在这里看到。我让它制定一个路线图。它完全没有做。它忘记了。它说：“让我检查一下后台代理。”然后就再也没有回复。所以，再说一次，我们正在触及产品体验的一些尖锐边缘。它并不完美，但它非常有趣。那么到目前为止我向你展示了什么呢？第一，我从高层次上告诉你 **Clawdbot** 是什么。尽管我没有深入探讨它的所有细节，这不是本期节目的重点。我展示了如何使用 **Clawdbot** 进行引导，包括如何连接 **Telegram** 以文本或语音形式与它来回聊天。我向你展示了我是如何授予它访问自己的 **Gmail Workspace** 账户以及 **OnePassword** 的权限，这样它就可以以有限的范围与我的数据进行交互。我给你了一些关于**权限范围**和访问权限的警告。我经历了一些工作流程，一些管理工作流程，从简单的日历到高级的日历管理。它做得不好，因为它对时间和空间没有很好的概念，但希望我们能解决这个问题。

<details>
<summary>Original English</summary>

**Claire**: But I think there are some things we're going to have to figure out first before we let it loose. And again, you can see this here. I asked it to do a road map. It totally just didn't do it. It forgot it. Said, "Let me check on the background agent." Then never replied. So again, we're hitting some, you know, sharp edges on the product experience. It's not perfect, but it is pretty interesting. So what have I showed you so far? One, I have told you a little bit at a high level what **Claudebot** is. Although I haven't gone into all the detail about how it works, not really the point of this episode. I've showed how to onboard with **Claudebot**, including how to connect **Telegram** to chat back and forth with it on text or voice. I've showed you how I give access to its own **Gmail workspace** account as well as **one password** so it can interact with limited **scope** to my data. I've given you some warnings about what you should think about in terms of **scope** and access there. I've gone through a couple workflows, couple admin workflows, which are simple calendar all the way to advanced calendar management. Did not do well because it doesn't have a good sense of time and space, but hopefully we'll figure that out.

</details>

**Claire**: 作为整体的软件工程师，我让它通过电子邮件联系合作伙伴和嘉宾。它在这方面做得不好，因为它失去了自己的身份感。我让它进行氛围编码，它做得很好，但绝对不是我最喜欢的远程异步 **AI** 工程工具。最后，我向你展示了我最喜欢的用例是让它使用工具和网络进行一些复杂的研究和分析。它做得非常好，并给我带来了我非常喜欢的东西。现在，我没有去检查的一件事，我接下来会去检查的是，它是否自学了所有这些技能？当它说它有规则时，它真的告诉我真相了吗？深入了解其内部工作原理，我可能会在 **X** 或播客上做一次后续节目。比如，这个东西在幕后是如何工作的？那不是本期节目的重点。本期节目的重点是展示一个人如何带着一个空白的想法，也许是一台全新的 **Mac Mini**，从命令行安装这个东西，并实际让它做事情。我认为我向你展示了它在某些方面做得很好，在另一些方面做得不好，而且总的来说令人恐惧。

<details>
<summary>Original English</summary>

**Claire**: As software engineers overall, I asked it to contact partners and guests by email. It did not a great job there because it lost a sense of its own identity. I had it do vibe coding, which it did a fine job at, but is definitely not my favorite tool for **AI** engineering remotely and asynchronously. And then finally, I showed you my favorite use case was for it to do some complex research and analysis with tools with web. And it did a really good job and came back with came back to me with something that I really like. Now, one thing that I didn't go check that I'm going to go check next is did it teach itself all these skills? Was it really telling me the truth when it said it had rules? A peak under the hood, which I will probably do as a follow-up either on **X** or here on the podcast. Like, how does this thing work behind the scenes? That was not the point of this episode. The point of this episode was to show how somebody would come with a blank idea, maybe a fresh **Mac Mini**, install this thing from the command line, and actually get it to do things. And I think I showed you it's good at some things, bad at others, and scary across the board.

</details>

### 最终思考：AI 代理的未来与挑战

**Claire**: 所以，让我们来谈谈我的最终想法，这些想法基本上是，我在 **X** 上分享过。但在我使用 **Clawdbot** 的整个过程中，我一直在想两件事。第一，这太可怕了。这是一个糟糕的主意。没有人应该这样做。它不应该访问我电脑上的所有这些东西。我不应该在本地共享这些密钥。我不应该让 **LLM** 访问 **Gmail OAUTH**，即使它是一个沙盒应用。我当时想：“不，不，不，不，不，不，不。救命。我不喜欢它。”正如我所说，这是安全培训的最终 Boss。你必须非常小心你给它访问权限的东西。我最担心的一件事是，如果你让 **Clawdbot** 访问你真实的收件箱、真实的日历、真实的文件、真实的存储库、真实的 **GitHub**，你可能会获得最大的力量。

<details>
<summary>Original English</summary>

**Claire**: So, let's get to my final thoughts here, which are basically that and and I shared this on **X**. But the whole time I was doing **Claudebot**, the whole time I was using this, I thought two things. One, this is so scary. This is a terrible idea. Nobody should be doing this. It should not have access to all this stuff on my computer. I should not be sharing these keys locally. I should not let **LLMs** have access to **Gmail OOTH**, even if it's a sandbox app. I was like, "No, no, no, no, no, no, no. SOS. Don't love it." As I said, this is the final boss of security training. You should be very careful about what you give it access to. And one of the things that I'm most concerned about is probably you get the most power from **Claudebot** if you give it access to your actual inbox, to your actual calendar, to your actual documents, to your actual repositories, your actual **GitHub**.

</details>

**Claire**: 我可以想象很多事情会出错。仅仅了解它的构建方式，它以一种很棒的方式构建。我认为 **Pete** 做得非常出色。我不认为它的构建方式有任何恶意或不良意图。它很强大。它能自学习。它能安装技能。它会请求权限。它非常独立。所有这些都很棒，直到你对你最私人的信息拥有完全的读写访问权限。我在准备节目时一直在想的一件事是，太棒了，我刚刚让一个自主 **AI** 代理访问了我孩子们的篮球训练地点。这就像，我们想让 **AI** 甲壳类动物自我记录吗？可能不想。所以我认为这将是这款产品面临的挑战之一，因为我第二个感觉是，天哪，我想要这个东西。我想要一个可以发短信的 **AI**。我想要一个语音来回交流不复杂化的 **AI**。我想要一个当我问它：“嘿，你能看看我的 **CRM** 吗？”它不会说：“去这个网页，按这个按钮，输入这个 **API** 密钥，然后做这个做那个。”我只希望它自动发生。我想要所有这些。

<details>
<summary>Original English</summary>

**Claire**: And I can imagine so many things going wrong with that. Just knowing how it's built, which it's built in an awesome way. I think **Pete**'s done an incredible job. I don't think there's any ill will or mal intent in how it's built. It's powerful. It self-learns. It installs skills. It asks for permission. It's pretty independent. All that stuff is great until you have full readr access to your most personal information. And one of the things that I was thinking as I was, you know, preparing for the show is great, I just gave an autonomous **AI** agent access to where my kids basketball practices are. Like is that something like do we want to selfdoc um **AI** crustation? Probably not. So I think that's going to be one of the challenges of this product because the second feeling I had was boy oh boy, I want this thing. I want **AI** that I can text. I want **AI** that does not make it complicated to talk back and forth with voice. I want **AI** that when I say, "Hey, can you look at my **CRM**?" doesn't say, "Go to this web page and press this button and enter this **API** key and do this and that." I just want it to happen automatically. I want all that.

</details>

**Claire**: 我只是觉得这还不是它。这感觉还不像是能带我到那里的界面。所以我有一种真实的矛盾，我认为从产品体验来看，它还没有完全到位。它并不真正适合非技术人员。所以它真的只适合修补者和黑客。这里有很多安全方面的东西，非常吓人。我能拥有它吗？所以也许这是一个例子，从市场类别角度来看，它肯定具有**产品市场契合度**。这里有数万亿美元可赚。我只是不知道这个开源的 **YOLO** 模式终端工具是不是那个东西。事实上，我很快就会把这台笔记本电脑“办公室空间化”。嗯，对于那些非常年轻的人来说，这意味着我要用大锤砸它。但就像，我要卸载它。我要删除那些密钥。我要删除 **Telegram** 机器人。就像，我不喜欢这个。这让我很紧张。我也会为自己构建一个。

<details>
<summary>Original English</summary>

**Claire**: I just don't think this is it yet. Like this does not feel yet like the interface to get me there. And so I have this real tension between I think the product from product experience isn't quite there yet. It's not really for the non-technical. So it really is for tinkerers and hackers. There's a lot of security stuff here that's super scary. And can I have it please? And so maybe this is an example of something that from a market category perspective definitely has **product market fit**. There are gajillions of dollars to make here. I just don't know if this open- source **YOLO** mode terminal tool is is the thing. And in fact, I'm gonna take, you know, this laptop soon and office space it. Um, for those of you that are very young, that means I'm going to go like hit it with sledgehammer. But like, I'm going to uninstall it. I'm going to remove those keys. I'm going to delete the **Telegram** B. Like, I don't like this. This makes me nervous. And I'm also going to go build one for myself.

</details>

**Claire**: 所以我认为围绕这个产品之所以有如此大的时代精神，是因为能够与一个非常智能、自给自足的代理进行语音聊天，无论是什么方式，都非常酷，黑客们看到了这一点，而且他们也比普通人有更高的风险承受能力。但话虽如此，就像我丈夫，请不要把你的 **Gmail** 连接到这个。就像妈妈，绝对不行。就像孩子们，离远点。对孩子们不安全。就像这只是，除非你经历过安全桌面演练，并且知道该知道什么。嗯，我只是会对你在访问权限方面的宽容程度非常谨慎。这引出了我本期节目最后一个问题，那就是，你知道，我认为 **Claude** 将永远活在我们心中。事实上，它可能有一个很棒的功能在前面。我喜欢 **Clawdbot** 团队的速度。但谁将真正构建这个东西？谁将真正构建这个东西？谁将构建它的消费者版本？谁将构建它的企业版本？谁将把它做对？我认为这是一个复杂的问题，我只是想在我们结束本期节目时提出一些想法。

<details>
<summary>Original English</summary>

**Claire**: And so I think there is why there has been such a zeitgeist around this product is it is actually really cool to be able to chat voice whatever a very smart self-sufficient agent and hackers see it and they're also you know more risk tolerance than the everyday person. But that being said, like husband, please don't connect your **Gmail** to this. Like mom, absolutely not. Like kids, stay away. Not not safe for kids. Like this is just this is something that unless you have been through a security tabletop exercise and know what to know. Um I would just be really cautious about how permissive you are in terms of access. And that leads me to my final final question of this episode, which is, you know, I think **Claude** will live in our hearts forever. And in fact, it's probably got a great feature in front of it. I love how fast the team is going, **Claudebot**. But who's going to build this thing for real? Like, who is actually going to build this thing for real? Who is going to build the consumer version of it? Who is going to build the enterprise version of it? Who is going to get it right? And I think this is a complicated question, and I'm just going to pose some thoughts as we close out this episode.

</details>

**Claire**: 你知道，这应该是 **Google** 或 **Microsoft** 输掉的游戏。也许在消费者端甚至是 **Meta**，但这应该是 **Google** 或 **Microsoft** 输掉的游戏。就像，他们有数据，他们有你的 **Gmail**，他们有你的日历，他们有文档，他们有模型。这些模型非常出色。他们只需要构建，你知道的，他们有设备。嗯，**Android**，他们只需要构建产品体验，并拥有那种机构的魄力，以及嗯，闭着眼睛的法务团队，允许其中一些事情发生，因为我认为这是一个基于 **Google** 生态系统构建的非常酷的产品。我的意思是，我认为从 **Microsoft** 的角度来看，企业端也是如此。如果 **Copilot** 做到了这一点，那将是非常不可思议的。

<details>
<summary>Original English</summary>

**Claire**: You know, this should be **Google** or **Microsoft**'s game to lose. Maybe even **Metas** on the consumer side, but this should be **Google** or **Microsoft**'s game to lose. Like, they have the data, they have your **Gmail**, they have your calendar, they have documents, they have the models. The models are exceptional. They just got to build the, you know, they have devices. um **Android**, they just have to build the product experience and have the sort of institutional fortitude and um close your eyes legal team to allow some of this to happen because I think it's a really cool product built on top of the **Google** ecosystem. I mean, I think the same on the enterprise from a **Microsoft** perspective. If **Copilot** did this, this is pretty incredible.

</details>

**Claire**: 话虽如此，我不知道这些公司是否会有 **Clawdbot** 那样的速度或勇气去冒险。所以，我不知道我们是否能与大公司一起实现。另一方面，你看到 **Clawdbot** 开源了，这对黑客来说很棒，但非常吓人。嗯，比如提供 **API** 密钥和 **OAUTH** 访问。小公司、初创公司会看到这个并想构建它。我认为我要警告初创公司的一件事是，在这些数据源之上进行真实构建非常困难，因为 **Google** 不想给你读、写、执行所有数据访问权限。**Microsoft** 也不想。你必须通过这些合规性审查和批准。所以，虽然我喜欢“无所不能”的机器人这个想法，但从产品构建者的角度来看，这将很复杂。从大公司的角度来看，这将很复杂。谁能获得数据？然后，**Apple** 会加入这个游戏吗？这正是每个人都希望 **Siri** 做的。**Siri** 拥有你所有的应用，所有的访问权限，但这又是产品构建技能、风险承受能力以及实验意愿的结合。

<details>
<summary>Original English</summary>

**Claire**: That being said, I don't know if those companies are going to have the velocity or the bravery to go as **yolo** as **Cloudbot** did. So, I don't know if we're going to get there with the big companies. On the flip side, you see **Cloudbot** open source, great for hackers, but super scary. Um, giving like **API** key and **OOTH** access. Smaller companies, startups are going to see this and want to build this. And I think one of the things that I would warn startups, it's really hard to build on top of these data sources for real because **Google** doesn't want to give you read, write, go, do everything access to their data. **Microsoft** does not. You have to go through these compliance hoops and approvals and um reviews. And so while I love the idea of a do everything, do anything bot, it's going to be complicated from a product builder perspective. It's going to be complicated from a large company perspective. who gets the data and then again like is **Apple** gonna get in this game? This is just what everybody wants from **Siri** to do. **Siri** has all your apps, all your access but again it's a combination of product building skills and um risk tolerance I think and willingness to experiment.

</details>

**Claire**: 也许 **Anthropic** 和 **OpenAI** 会加入。也许我们会得到我们的 **OpenAI OS** 和工作区工具，也许我们会得到 **Claude**，嗯，我们会得到这个的一些新版本。看看这会如何发展真的会很有趣。所以，总而言之，我对 **Clawdbot** 的看法是什么？它很吓人。它很有趣。嗯，它在某些方面做得非常非常好。从界面角度来看，它真的很有趣，而且它并不总是有效。我不确定它是否适合，我本来想说所有人，但我不确定它现在是否适合任何人，除了那些真正愿意用他们的 **AI** 机器人冒险的人。话虽如此，如果你愿意这样做，它的构建方式、它自学技能的方式、它存储记忆的方式、它给自己访问权限的方式真的很有趣，应该能启发很多思考 **AI** 产品的产品构建者，思考未来的界面会是什么样子。我认为我们将看到并听到更多关于这类代理的信息。我将向你提供我对它们现状和未来发展的真实看法。与此同时，我将去处决 **Polly the Clawbot**。谢谢，我们下期 **How I AI** 再见。

<details>
<summary>Original English</summary>

**Claire**: Maybe **anthropic** and **open AI** come in. Maybe we get our **open AI OS** and workspace tools and maybe we get **cla** um we get some new versions of this. It'll just be really interesting to see how this shakes out. So, in conclusion, what are my thoughts about **Clawbot**? It is scary. It is fun. Um, it does some things really, really well. It is really interesting from a interface perspective and it doesn't always work. And I'm not sure it's for I was going to say everyone, but I'm not sure it's for for anyone right now except for people who are really willing to roll the dice with their **AI** bot. That being said, if you're willing to do that, the way this has been built, the way it self-discover skills, the way it stores its memory, the way it gives itself access is really interesting and should inspire a lot of product builders thinking about **AI** products on what the interface of the future is. I think we are going to be seeing and hearing a lot more about agents like this. I am going to be giving you my honest takes about where they are now and where they're going to be in the future. And in the meantime, I'm going to go execute **Polly the Clawbot**. Thanks, and I'll see you next time on **How I AI**.

</details>

**Claire**: 非常感谢您的观看。如果您喜欢本节目，请在 **YouTube** 上点赞并订阅，或者更好的是，给我们留言分享您的想法。您还可以在 **Apple Podcasts**、**Spotify** 或您最喜欢的播客应用上找到本播客。请考虑给我们评分和评论，这将帮助其他人找到本节目。您可以在 **howiipod.com** 查看我们所有的节目并了解更多信息。下次再见。

<details>
<summary>Original English</summary>

**Claire**: Thanks so much for watching. If you enjoyed this show, please like and subscribe here on **YouTube**, or even better, leave us a comment with your thoughts. You can also find this podcast on **Apple Podcasts**, **Spotify**, or your favorite podcast app. [music] Please consider leaving us a rating and review, which will help others find the show. You can see all our episodes and learn more about the show at **howiipod.com**. See you next time.

</details>