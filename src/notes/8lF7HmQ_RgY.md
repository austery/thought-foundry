---
author: The Pragmatic Engineer
date: '2026-01-28'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=8lF7HmQ_RgY
speaker: The Pragmatic Engineer
tags:
  - prompt-engineering
  - agentic-workflow
  - software-architecture
  - developer-productivity
  - feedback-loop
title: AI时代的代码交付：Peter Stainberger的“不读代码”工作流与Agentic Engineering
summary: PSPDFKit创始人Peter Stainberger分享了他如何从传统软件开发转型，利用AI代理（特别是Codex）实现“不读代码”的极速交付。他强调了“闭环”原则在AI编码中的重要性，将代码审查视为“提示请求”，并探讨了AI对未来软件工程、团队协作和个人生产力的颠覆性影响，以及新一代开发者应具备的好奇心。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - PSPDFKit
  - OpenAI
  - Anthropic
  - Google
  - Microsoft
  - Apple
products_models:
  - Clawbot
  - PSPDFKit
  - Codex
  - Claude
  - GPT-4o
  - Gemini 2.5
  - Opus 4.5
media_books: []
status: evergreen
---
### AI驱动的开发新范式

**主持人**: 如果你一天能合并600个提交，而且没有一个是草率的，会怎么样？这正是我们今天的嘉宾，**Claudebot**的创建者**Peter Stainberger**所声称的。Peter是一位杰出的开发者，他创建了**PSPDFkit**，这个PDF框架被超过10亿台设备使用。后来他精疲力尽，卖掉了股份，从科技界消失了三年。今年他回来了，他现在构建和做事情的方式与传统的软件开发截然不同。在今天的节目中，我们将探讨他为什么不再阅读他发布的大部分代码，以及这听起来并不像听起来那么疯狂的原因。他如何构建他广受欢迎的个人助理项目**Clawbot**，这个项目感觉像是**Siri**的未来。将有效的AI助理编码与令人沮丧的“感觉式编码”区分开来的“闭环”原则。他为什么说代码审查已死，而PR应该被称为“提示请求”，以及更多。如果你对未来几年软件工程工作流程如何因AI而改变感兴趣，这一集就是为你准备的。本集由**Statsig**赞助，Statsig是一个统一的平台，提供功能标志、分析实验等。请查看节目说明以了解更多关于他们、我与他们于2月11日在**旧金山**共同举办的务实峰会，以及我们本季的其他赞助商。好的，Pete，欢迎来到播客。

<details>
<summary>Original English</summary>

**主持人**: What if you could merge 600 commits on a single day and none of it was slopp? This is what today's guest, **Peter Stainberger**, the creator of **Claudebot**, claims he's doing. Peter is a standout developer who built **PSPDFPDFkit**, the PDF framework used on more than 1 billion devices. Then he burned out, sold his shares, and disappeared from tech for 3 years. This year, he came back and how he builds and what he's doing now looks nothing like traditional software development. In today's episode, we cover why he no longer reads most of the code he ships, and why that's not as crazy as it sounds. How he is building **Clawbot**, his wildly popular personal assistant project, which feels like the future of **Siri**, the closing the loop principle that separates effective AI assistant coding from frustrating vibe coding. Why he says code reviews are dead and PR should be called prompt requests, and many more. If you're interested in how the software engine workflow could change in the coming years thanks to AI, this episode is for you. This episode is presented by **Statsig**, the unified platform for flags, analytics experiments, and more. Check out the show notes to learn more about them, the pragmatic summit on the 11th February in **San Francisco** that I'm hosting with them, and our other season sponsors. Right, Pete, welcome to the podcast.

</details>

**Peter**: 谢谢你邀请我，Gay。

<details>
<summary>Original English</summary>

**Peter**: Thanks for having me, Gay.

</details>

**主持人**: 很高兴能与你本人见面。

<details>
<summary>Original English</summary>

**主持人**: It is awesome to meet you in in person.

</details>

**Peter**: 是的，我差点搞砸了。

<details>
<summary>Original English</summary>

**Peter**: Yeah, and I almost messed it up.

</details>

**主持人**: 是的。发生了什么？你忘了时间。这经常发生吗？为什么？

<details>
<summary>Original English</summary>

**主持人**: Yeah. What what what what happened? You lost track of time. Does that happen often? And how how so?

</details>

**Peter**: 嗯，通常不会。通常不会。嗯，对我来说这是一个有趣的时期，因为我最新的项目正在迅速发展，**Cloudbot**，对吧？

<details>
<summary>Original English</summary>

**Peter**: Um, not usually. Not usually. Um, this is an interesting time for me cuz I cuz my latest project is is blowing up. **Cloud**, right?

</details>

**主持人**: **Clawbot**，是的。

<details>
<summary>Original English</summary>

**主持人**: **Clawbot**. Yeah,

</details>

**Peter**: **Cloudbot**。我有点睡眠不足，但这很有趣。我从未见过一个社区发展得如此之快，而且与之合作简直是乐趣无穷。

<details>
<summary>Original English</summary>

**Peter**: **Cloudbot**. I'm struggling a bit to get enough sleep, but it's it's it's interesting. I never I never had a community blowing up so fast and it's just incredibly fun to work with.

</details>

### PSPDFKit的诞生与早期挑战

**主持人**: 那么，在我们深入探讨**Clubbot**和你正在做的所有有趣事情之前，我想把时间倒回到很久以前。你创建了**PSPDFkit**，它被用于超过10亿台设备。如果你看到PDF渲染，你可能看到的就是它。但在此之前，你是如何进入科技行业的？天哪，你是如何进入科技行业的？

<details>
<summary>Original English</summary>

**主持人**: So, before we we get into **Clubbot** and all the fun stuff you're doing, I wanted to rewind all the way way back. You create a **PSPDFkit** which is used I think on more than 1 billion devices users. If if you see a PDF render you probably see that. But even before that how did you get into tech? Oh my god. How did you get into tech?

</details>

**Peter**: 我来自奥地利农村，一直比较内向。后来我们家总有暑期客人，其中有一个是电脑迷，我被他那台机器迷住了，然后求我妈妈给我买一台。从那时起，我大概14岁，还在上高中。从那时起，我就开始捣鼓。我记得最早的事情是，我从学校偷了一个老**DOS**游戏，然后为软盘写了一个复制保护，这样我就可以卖它。它需要两分钟才能加载。我总是喜欢捣鼓。当然也玩很多电脑游戏，但构建东西几乎感觉就像玩电脑游戏。现在肯定比**Factorio**感觉更好。哦，当我刚开始的时候，我读的是**Windows**的**bash**脚本，然后我做网站。所以，我想是学了一点**JavaScript**，尽管我当时完全不知道自己在做什么。然后我真正开始学习如何构建东西的第一门语言是在我上大学的时候。

<details>
<summary>Original English</summary>

**Peter**: So I'm from rural **Austria**. Um always more being the introvert. So eventually I we always had like summer guests and one of them one of them was a was a computer nerd and then I kind of got hooked with with like the machine he had and begged my mom to buy me one and ever since then I this was in high school or so. I guess I was 14. Yeah. And ever since I started tinkering, like I can remember the earliest thing was like I stole an old **DOS** game from my school and then wrote a copy protection for the floppy disc so I could sell it. It took like 2 minutes to load. I was just always tinkering. Also playing a lot of computer games of course, but like building stuff almost feels like playing a computer game. Like definitely right now it feels better than **Factorio**. Oh, when I started out, I I I I read like the equivalent of **bash** scripts for **Windows** and then I did like websites. So, I guess a little bit of **JavaScript**, uh, even though I had no clue what I was doing. And then the actual first language where I I had to learn how to build things is when I started university.

</details>

**Peter**: 我从未见过我父亲，我来自一个贫困家庭，所以我总是不得不工作。我必须自己支付学费，对吧？所以当其他人度假的时候，我只是在一家公司全职工作。所以我的第一份真正的工作是在**维也纳**，本来应该是一个月，但他们留了我六个月。那只是我服兵役和上大学之间的过渡。我一直在那里工作了大约五年。我记得第一天他们给了我一本厚厚的书，也许就那么厚，上面写着**Microsoft MFC**。嗯，我至今仍有噩梦。我当时想，这太糟糕了。接下来的项目，我只是悄悄地使用了**.NET**，我没告诉他们。几个月后，我才告诉他们，是的，我做了一些现代化改造，但那时已经太晚了。我在这家公司做了几次这样的事情。我不知道他们为什么留我，因为我的东西能用。所以我用了**.NET**，实际上我真的很喜欢它。**NET 2.0**有泛型。应用程序启动需要很长时间，因为所有东西都在第一次启动时编译，而且你的硬盘会发出声音，如果你还记得的话。

<details>
<summary>Original English</summary>

**Peter**: And I never met my dad. And I come from a from a poor family. So, I always had to work. like I had to had to finance my own studies, right? So when other people were were having holiday, I just worked full-time at a company. So the the first real job I had was was in **Vienna** was supposed to be 1 months and then they kept me for 6 months. It was just a bridge between military and and my university. And I kept working there for like I think 5 years. And I remember the first day they they gave me this huge book. maybe that huge and say **Microsoft MFC**. Um I still have nightmares and I got I got like I was like this is terrible like for for the next win I just I just silently used **.NET** I just didn't tell them and like a few months in I just told them yeah but the text I I did a few modernizations but then it was too late. I did this a few times in this company. I don't know why they kept me because because my [ __ ] worked. So uh I did **.NET** and actually I actually actually dig it.NET **2.0** had like generics. It took insanely long for the application to to to launch because like everything was compiled at first start and like your hard disk was like if you remember

</details>

**主持人**: 那么，你是如何偶然进入**iOS**领域的？**PSPDF**的想法又是从何而来？

<details>
<summary>Original English</summary>

**主持人**: so so you you how did you stumble into both **iOS** and where did the idea from **PSPDF** come from?

</details>

**Peter**: 甚至，是的，第一个，第一个在奥地利甚至都买不到。没错，是的。

<details>
<summary>Original English</summary>

**Peter**: Not even yeah the first one the first one wasn't even available in in in **Austria**. That's true. Yeah.

</details>

**Peter**: 一段时间过去了，我在大学里，一个朋友给我看了**iPhone**。我想我摸了一分钟，然后立刻就买了一个。就像，它让我感觉到了，它就“咔哒”一声，对我来说，那是一个“天哪”的时刻，因为它太不同了，太棒了。所以我买了一个。我当时还没想过要为它开发。

<details>
<summary>Original English</summary>

**Peter**: A little time goes went on and I was at university and a friend showed me the **iPhone** and I I think I I touched it for a minute and then immediately bought one like like this like it it clicked when I felt it and and to me this was like a holy f moment cuz it was just like so different and so much better. So I got I got one. I was still not thinking about building for it, you know. That was that was

</details>

**主持人**: 这是什么时候？2009年，2010年左右？

<details>
<summary>Original English</summary>

**主持人**: when was this 2009 10 something like that.

</details>

**Peter**: 是的，是的。然后我用了他们的浏览器。我能讲这个故事。我当时正在地铁里。

<details>
<summary>Original English</summary>

**Peter**: Yeah. Yeah. And then I I used their browser. I I can see the story. I was I was literally driving in the subway.

</details>

**主持人**: 嗯。

<details>
<summary>Original English</summary>

**主持人**: Mhm.

</details>

**Peter**: 那时候我正在用一个同性约会应用，那是**iPhone OS 2**。

<details>
<summary>Original English</summary>

**Peter**: And by the time I was using a gay dating app and this was **iPhone OS 2**.

</details>

**主持人**: 是的。

<details>
<summary>Original English</summary>

**主持人**: Yeah.

</details>

**Peter**: 所以我，我...

<details>
<summary>Original English</summary>

**Peter**: So So I I

</details>

**主持人**: 很久以前了。

<details>
<summary>Original English</summary>

**主持人**: long time ago

</details>

**Peter**: 我打了一长串信息，我按了发送，然后我们正好进入隧道，**JavaScript**禁用了发送按钮，然后出现了一个错误信息，但没有复制粘贴功能，也没有截图功能。所以我当时就想，而且我不能再滚动了，因为滚动被禁用了。所以那条有点情绪化的长信息就消失了，我非常生气。我非常生气。我想，搞什么鬼？我回家下载了**Xcode**。就是从那里开始的。我当时想，ID在哪里？所以当时我就想，这不能接受。我基本上是黑了那个网站。我用正则表达式来下载，呃，解析**HTML**，这完全不是你应该做的事情。我构建了一个应用，我用了**iPhone OS3 beta**，里面有**Core Data**的beta版，还有**Regaxit Light**。我用了一个被修改过的**GCC**版本，它反向移植了**blocks**编译器，这样我就可以在**iPhone OS3**中使用**blocks**。我花了好长时间才让任何东西工作，因为我完全不知道自己在做什么，而且我当时在用各种beta技术，但最终我成功了。我给那家公司写信说，嘿，我正在开发一个应用，你们觉得怎么样？当然没有收到回复。所以我想，那就把它放到**App Store**吧。

<details>
<summary>Original English</summary>

**Peter**: I typed this long message. I pressed send and we were just going into a tunnel and the **JavaScript** disabled the send button and then an error message came but there was no copy paste. There was no screenshot. So I was just like and I couldn't scroll anymore because like scrolling was disabled. So like this long message was like a little bit emotional was gone and I was so mad. I was so mad. I'm like what the hell? I went home and I downloaded **Xcode**. That's that's where that's where the window came and I was like where is the ID? So it was like like I was like this is unacceptable. I basically hacked the website. I used regular expressions to like download uh to parse the **HTML** which is like totally not something you should do and I built an app and I used I used **iPhone OS3 beta** with like **core data** in beta **regaxit light**. I used a hacked version of **GCC** that backported the **blocks** compiler so I could use **blocks** in **iPhone OS3**. It took me quite a while until anything worked because like I had no idea what I was doing and I was like using all kind of like beta tech but eventually I I got it to work and I I I wrote that company was like hey I'm making an app. What do you think about it? Got no response of course. So I was like let's just put it in the **App Store**.

</details>

**主持人**: 这是为那个约会应用做的，对吧？

<details>
<summary>Original English</summary>

**主持人**: And this was for the dating app right?

</details>

**Peter**: 是的。

<details>
<summary>Original English</summary>

**Peter**: Yeah.

</details>

**主持人**: 所以你就像，你知道，你看了他们的API，你就可以很容易地在上面构建一个客户端？

<details>
<summary>Original English</summary>

**主持人**: So you just like, you know you looked at you saw their APIs you could just like easily like build a client on top

</details>

**Peter**: API？那是**HTML**。

<details>
<summary>Original English</summary>

**Peter**: API. It was **HTML**.

</details>

**主持人**: 哦。

<details>
<summary>Original English</summary>

**主持人**: Oh

</details>

**Peter**: 我只是在字面上解析**HTML**。

<details>
<summary>Original English</summary>

**Peter**: I was I was just literally parsing **HTML**.

</details>

**主持人**: 哦。所以，你解析了**HTML**，把它变成了你自己的，你知道，就像你把它当作API来用。哦，真聪明。我的意思是，这在当时，没有人认为这会发生，但我把它放到了**App Store**。我收费五美元，第一个月就赚了大约一万美元。我当时完全不知道自己在做什么。所以，当时有很多复杂的科技问题。那是非常早期的时候，**Apple**上有很多奇怪的论坛。

<details>
<summary>Original English</summary>

**主持人**: Oh. So, so you kind of parse the **HTML**, kind of turn it into your own, you know, like you use it as an API. Oh, clever. I mean, this was back in the day where no one thought this this would happen, but I made I put it in the **App Store**. I charged five bucks for it and I made like 10k in the first month. And I had no clue what I was doing. So, and there was like so many complex tech stuff. This was very early on where there was a lot of weird forums on **Apple**.

</details>

**Peter**: 所以我把钱存进了我爷爷的银行账户。有一天我爷爷打电话给我说：“嘿，有点奇怪。我收到了**Apple**的一大笔付款。”我当时说：“这是我的。这是我的。别碰它。”但有趣的是，当这个应用火起来的时候，我记得有一天我在一个俱乐部里，看到有人在用我的应用，我非常自豪，我想拍拍他的肩膀说这是我做的，但我又觉得那样会很奇怪，所以我就没说。然后我去了我工作了五年的公司，告诉他们我要追求这个。这真的非常令人兴奋。我的老板却嘲笑我。

<details>
<summary>Original English</summary>

**Peter**: So, I just put in the the bank account of my grandpa. And then one day my grandpa called me, "Yeah, something is weird. Like I got this huge payment from **Apple**." I'm like, "This is mine. This is mine. Don't touch it." But the the funny thing was when I this blew off and I remember I was in a club one day and like I saw someone using my app and I was so proud and I wanted to like tap him on the shoulder and say I built this and I thought like that would be really weird. So I didn't. And then I I I went to the company I worked for for 5 years and told him like I'm going to pursue this. This is this is really exciting. And my boss was like mocking me.

</details>

**主持人**: 哦，真的吗？

<details>
<summary>Original English</summary>

**主持人**: Oh, really?

</details>

**Peter**: 他们说：“哦，你犯了个错误。这只是一时兴起。这不会成功的。”等等等等。你知道这给了我什么吗？这就是所谓的“肩上的筹码”。我当时想，

<details>
<summary>Original English</summary>

**Peter**: They're like, "Oh, you're making a mistake. This is a fat. This will not go." Blah, blah, blah, blah, blah. And you know what that got me? That's what you call a chip on your shoulder. I'm like,

</details>

**Peter**: 你知道，总有一天我会拥有一家比你们公司更有价值的公司。嗯，我花了八年时间。所以我上瘾了。我，我有点上瘾型人格。所以你现在又看到了。但我在这个应用上投入了大量工作。我高速学习，这也是我开始使用**Twitter**的时候，这对我的职业生涯产生了巨大的影响。我把这个应用做得相当好，然后有一天凌晨三点，我在一个派对上，有点醉了，接到了一个美国号码的电话。电话那头的人说：“你好，我是**Apple**的**John**。你的应用程序有点问题。有人举报了图片。”就这样，我的应用就结束了。嗯，

<details>
<summary>Original English</summary>

**Peter**: you know, one day I'm going to I'm going to have a company that that's worth more money than yours. Well, it took me eight years. So, I I got hooked. Like, I I worked I I'm I'm a little bit of an addictive personality. So which you see again right now. But I I worked a lot on this app. I learned I learned in in high speed and this was also the time where I started **Twitter** and that was usually hugely influential for my career. I made this app actually quite good and then one day I was at a party at at 3:00 a.m. um slightly intoxicated and I got a call from a US number. The guy on the phone was like, "Yeah, hello. This is **John from Apple**. Yeah, there's a problem with your application. Like some people reported pictures and that was it. That was the end of my app. Um,

</details>

**主持人**: 它的寿命还不错。

<details>
<summary>Original English</summary>

**主持人**: it was good until it lasted

</details>

**Peter**: 我当时就辞掉了工作，心想，去你的**Apple**。我做自由职业。我参加了**WWDC**。我被介绍给

<details>
<summary>Original English</summary>

**Peter**: and I was just I just quit my my job and was like, well, f you **Apple**. I did freelance work. I was at **dubdub**. I was introduced to

</details>

**主持人**: **WWDC**。

<details>
<summary>Original English</summary>

**主持人**: **dubdubdubc**.

</details>

**Peter**: 是的。抱歉用了行话。我在**旧金山**凌晨两点的一个酒吧里被介绍给一个人，说我是奥地利最好的**iOS**开发者之一，然后基本上在美国找到了一份工作。然后我在美国住了一段时间，然后我去了**诺基亚**开发者大会。现在这些都像是石器时代了，天哪。然后有人走过来对我说：“是的，他们在东欧的某个地方开发了这个应用，它能用，但有时会崩溃。”它就像一个杂志阅读器，对吧？那是在**iPad**刚发布的时候，**Steve Jobs**说这会是救星。所以每个人都在开发杂志应用。我当时觉得这听起来像一个有趣的短期项目。我当时想，好吧，我会帮助你。我打开应用，发现它是我这辈子见过最糟糕的代码。它实际上只有一个文件，里面有数千行**Objective C**代码。是的，他们把窗口当作标签页来用。我不知道这也能行。我很惊讶它竟然能工作，但它感觉就像一个纸牌屋。我试图进行外科手术式的修复，但只要你碰一下，其他地方就会崩溃。嗯，所以我把它稳定了一些，然后我告诉他们：“听着，这简直是疯了。我会为你们重写它。”是的。但这花了半年时间。我说我会在一个月内完成。嗯，我花了两个月。嗯，我没差太远。

<details>
<summary>Original English</summary>

**Peter**: Yes. Sorry for the insider terms. I was introduced to someone as one of the best **iOS** developers in **Austria** at a bar at 2 a.m. in **San Francisco** and then basically got a job in the US and then I moved to the US for a while and then I I went to the **Nokia** development days. This is all like stone age by now. My god. And then someone came up to me and said, "Yeah, they built this app somewhere in Eastern Europe and it works but it crashes sometimes and it was like was like a magazine viewer, right? This was back when the **iPad** just came out and **Steve Jobs** hit that like this is the savior. So everybody was building magazine apps and I was like that sounds like an interesting short-term gig. And I I was like okay I I'll I'll I'll help you out. And I opened the app and it was like oh the worst code I've ever seen in my life. It was literally one file with like thousands of lines of **Objective C**. Yes. Where they used windows as tabs. I I didn't know this worked. I was surprised this worked at all, but it felt like a a house of cards. And I I tried to I tried to surgically fix things, but like as soon as you would touch something, something else would break. Um so I got it I got it somewhat stabilized and I told him like, "Look, this is this is like madness. Um I'm going to rewite this for you." Yeah. But it took half a year. I'm going to do it in in a month. Well, it took me two months. Um, I wasn't that far off

</details>

**Peter**: 然后我就在这里开发一个**PDF**阅读器。你知道，在每一个技术问题上，领域我不会说完全不重要，但你总能在每个领域找到有趣的问题。当时有很多有趣的问题，因为你有一个**C**语言调用会渲染一个**PDF**，可能需要30兆字节，但整个系统只有64兆字节。所以如果你不够聪明，在后台操作时不够小心，操作系统就会直接杀死你。我真的非常专注于把它做好，比如当旋转时，页面会动画显示，所以你知道，我喜欢这些细节。我在这上面花了太多时间。这就是我花了两个月而不是一个月的原因。但最终结果是好的。嗯，然后我与他们合作了一段时间，然后一个朋友给我发短信说：“是的，我正在开发这个杂志应用，它真的很难。”我当时想：“是的，我知道它很难。”哦，就像我做过一样。

<details>
<summary>Original English</summary>

**Peter**: and and then here I was working on a on a **PDF** viewer. You know, on every technical problem, the domain is is I wouldn't say like completely unimportant, but you can always find interesting problems in every domain. And there was a lot of interesting problems because you had a **C** call that would render a **PDF** that would maybe take 30 megabytes, but the whole system had 64 megabytes. So if you're not very smart and like very careful what you do in the background and when the **OS** would just kill you. I got really fixated at like making it good like when the rotation is like that the page would like animate and so so you know I I like I like those details. I spent way too much time on that. That's why I took two months instead of one. But the end result was it's good. Um and then I I I worked with them for a while and then a friend texted me up. He's like, "Yeah, I'm working on this magazine app and it's really hard." I'm like, "Yeah, no way it's hard. I know." Oh, like I did it.

</details>

**主持人**: 你刚建了一个。

<details>
<summary>Original English</summary>

**主持人**: You just built one.

</details>

**Peter**: 然后他说：“你能把代码给我吗？”我说：“当然。”所以，我把**PDF**部分从这个杂志应用中提取出来卖给了他。我确保另一个人没问题。然后我把它卖给了他。我当时想：“嗯，如果他感兴趣，为什么不试着卖给其他人呢？”我用了一个**WordPress**模板，把它修改后运行在**GitHub Pages**上。然后当你完成**fast lane**流程后，你会得到一个指向我个人**Dropbox**的链接，里面有一个源代码压缩包。我花了一个下午做完这些，然后发了**Twitter**。那一周有三个人买了它，大概是200美元，但在当时对我来说这太棒了。不仅有三个人买了，还有十封邮件抱怨，因为他们想要但它没有他们想要的功能。你知道，我被“技术诱惑”了。我当时想：“哦，它没有文本选择功能。”哦，这能有多难？三个月后。哦，是的。这真的很难。特别是**PDF**中的文本选择。

<details>
<summary>Original English</summary>

**Peter**: And and he was like, "Can you can you can you get me the code?" I'm like, "Sure." So, I sold him like I extracted the the part that was **PDF** from from this magazine app. And I I made sure I made sure like the other person was okay. And then I sold him that. I was like, "Well, if he's interested in that, why let's not try to sell it to other people." I used a a **WordPress** template and mutilated it to run on **GitHub Pages** and then and then when you did the the **fast lane** flow at the end you got a **Dropbox** link to my personal **Dropbox** with a source code sip and I put this on one afternoon and I I tweeted it and and then in that week three people bought it and it was like I guess 200 bucks but back then and for me this was like amazing and not only I got like three people who just bought it and like 10 emails who comp 10 people who complained about uh because they wanted it but it didn't have the features they wanted. You know, it's like I got nerd sniped. I was like, "Oh, I didn't have text selection." Oh, how hard can it be? 3 months later. Oh, yeah. It's really hard. Text selection in a **PDF** specifically.

</details>

**主持人**: 是的，是的，是的，是的。你知道那句话吗？公司是由年轻人建立的，因为他们不知道这有多难。

<details>
<summary>Original English</summary>

**主持人**: Yeah. Yeah. Yeah. Yeah. You know the saying the saying like uh the companies are built by young people because they don't know how hard it is.

</details>

**Peter**: 是的。

<details>
<summary>Original English</summary>

**Peter**: Yes.

</details>

**Peter**: 是的，是的。我完全不知道这种文件格式有多么疯狂。Peter当时在谈论有些问题看起来很简单，但实际上很难。**PDF**渲染就是一个很好的例子。你看着它，心想：这能有多难？然后你花了几个月时间处理你甚至不知道存在的边缘情况。这种“看起来容易，直到你真正构建它”的模式也出现在其他地方。用于功能标志和实验的内部工具就是一个经典的例子。团队通常低估了围绕这些工具构建基础设施所需的工作量。像**Uber**这样的大型科技公司投入多年时间构建内部实验和功能标志系统是有原因的。这引出了我们本季的赞助伙伴**Statsig**。**Statsig**为你提供了完整的工具包，无需你自己构建。你可以在一个平台上获得功能标志、实验和产品分析，所有这些都与相同的底层用户分配和数据相关联。实际上，它的工作方式是这样的：你首先向1%的用户推出一个更改。你查看它如何影响你关心的核心指标，例如转化率、留存率，或者与发布相关的任何指标。如果出现问题，可以立即回滚。如果运行良好，你可以自信地扩大规模。像**Notion**这样的公司从每个季度个位数的实验增加到使用**Statsig**进行300多个实验。他们发布了600多个功能，并通过功能标志进行发布，在快速迭代的同时防止指标下降。**Microsoft**、**Atlassian**和**Brex**也出于同样的原因使用**Statsig**。它是实现规模化速度和可靠性的基础设施。**Statsig**提供了一个慷慨的免费套餐供你开始使用，团队的专业版价格每月150美元起。要了解更多信息并获得30天的企业试用，请访问**statsig.com/pragmatic**。现在，让我们回到Peter，了解为什么渲染**PDF**是一个出奇困难的问题。

<details>
<summary>Original English</summary>

**Peter**: Yeah. Yeah. I had no idea what an insane madness this file format is. **Peter** was talking about how some problems look deceptively simple. **PDF** rendering is a good example. You look at it and think, how hard could it be? And then you spend months on edge cases that you didn't even know existed. This looks easy until you build it pattern shows up in other places, too. Internal tooling for feature flags and experimentation is a classic example. Teams often underestimate how much work it is to build infrastructure around these tools. There's a reason big tech companies like **Uber** invested years into building internal experimentation and feature flagging systems. Which brings me to **Static**, our presenting partner for the season. **Static** gives you the complete toolkit without building it yourself. You get feature flags, experimentation, and product analytics all in one platform tied to the same underlying user assignments and data. In practice, it looks like this. You roll out a change to 1% of users first. You see how it moves the top pipeline metrics you care about, conversion, retention, whatever is relevant for the release. If something goes wrong, instant roll back. If it's working, you can confidently scale it up. Companies like **Notion** went from singledigit experiments per quarter to over 300 experiments with **static**. They shipped over 600 features behind feature flags, moving fast while protecting against metrics regression. **Microsoft**, **Atlassian**, and **Brex** use **static** for the same reason. It's the infrastructure that enables both speed and reliability at scale. **Static** has a generous free tier to get started and pro pricricing for teams starts at $150 per month. To learn more and get a 30-day enterprise trial, go to **stats.com/pragmatic**. And now, let's get back to **Peter** and why rendering **PDFs** was a surprisingly hard problem.

</details>

**Peter**: 但现在，我记得几周前有人给我发邮件。他们做了一些**PDF**相关的事情，想要我的帮助。我只是回复他们说，我很抱歉，我已经尽力了。我对**PDF**的了解比任何一个正常人应该知道的都多。我去看心理医生了。祝你好运。

<details>
<summary>Original English</summary>

**Peter**: But now, I remember there was a few weeks ago someone emailed me. They did something **PDF** and they wanted my help. And I just wrote them like, I'm sorry, like I I did my deed. I I know more about **PDF** than any any sane human person ever should know. And I went I went to therapy. Good luck.

</details>

**Peter**: 但那成功了，我当时在等签证的时候，我一直在做这个项目，它不断地有更多人购买。你知道，就像夏天一样。我当时躺在湖边，又收到一封邮件，有人以600美元、800美元的价格购买了它。我只是随着功能增加而提高价格。当我去了**旧金山**在那家公司工作时，它已经赚得比我在那里赚的还多。但我的一生都还在想，我必须在那里工作，你知道。

<details>
<summary>Original English</summary>

**Peter**: But that took off and and I just I while I was waiting for my visa, I I worked on this project and and it just kept on more people kept on buying it. And you know, it was like it was like summer. I was I was like lying at the lake and got another email that someone bought it for 600 bucks, 800 bucks. I just up the prices as it had more features. And by the time I I went to **San Francisco** to work at this company, it already made more than what I made there. But my whole life was I still I still thought like I have to be there, you know.

</details>

**主持人**: 所以我做到了。而且有趣的是，在这家公司，我也不得不

<details>
<summary>Original English</summary>

**主持人**: So I I did it. And also interestingly at this company, I had to

</details>

**主持人**: 那么，你说你搬到**旧金山**是为了什么？

<details>
<summary>Original English</summary>

**主持人**: So what would you say that you moved to **San Francisco**?

</details>

**Peter**: 是的。当然，最终我也必须在那家公司用我的框架构建一些东西。但你知道，创业公司不是八小时工作制，它们时间更长。我的个人项目也占用了更多时间。所以我的睡眠时间更少。然后大约三个月后，我的经理**Sabine**过来问：“Peter，你还好吗？”他们给了我一个选择：要么继续在这家公司工作，放弃我的项目，要么反过来。我有一周时间来决定。倒计时是一周，要么留下，要么离开这个国家，因为我持的是复杂签证。嗯，这个决定很容易。就像，是的，我想做自己的事情。然后，

<details>
<summary>Original English</summary>

**Peter**: Yeah. And and of course also it ended up being something where I had to build build something with my framework at that company too. But you know startups are not like 8 hours. They're a little more. And my personal project was also a little more. So my sleep was a little less. And then eventually after 3 months uh **Sabine** my manager came over and said this **Peter** are you okay? And they gave me a choice uh to either keep working at this company and drop my project or or vice versa. And I had one week to decide. The counter was one week to stay there or leave the country because I was on a on a complicated visa. And well, the decision was quite easy. It's like, yeah, I want to do my own thing. And then and

</details>

**主持人**: 此时，它已经起飞了。你已经看到这是一个大生意。它可能会给你带来和你在美国工作一样的收入。啊，

<details>
<summary>Original English</summary>

**主持人**: and at this point, it was already taking off. You already saw that this is there's a big business here. It it will probably pay you as much as your US job would have paid. Ah,

</details>

**Peter**: 我从来都不是被金钱驱动的。

<details>
<summary>Original English</summary>

**Peter**: it was never money driven either.

</details>

**主持人**: 那么，你被什么驱动呢？

<details>
<summary>Original English</summary>

**主持人**: It was more about what what were you driven by?

</details>

**Peter**: 我想创造出让其他人惊叹的东西。我喜欢调整细节。我喜欢那些小小的惊喜。甚至当时这个领域有竞争对手。但我的角度始终是，我构建的东西就像**Apple**会构建的那样，充满了爱和关怀，以及那种在行业中很多人不理解的精致和那些小小的惊喜。所以，尽管我们有功能更多、存在时间更长的竞争对手，但我的公司更成功，我的产品也更成功，因为开发者尝试了不同的产品，而我的产品感觉最好。我认为软件的关键在于感觉，远胜于功能集。我们为什么购买**Apple**的产品？它的功能比**Windows**更多。嗯，但它感觉更好。

<details>
<summary>Original English</summary>

**Peter**: I want to make stuff that other people find amazing. Like I I I love tweaking the details. I love those little delights. It wasn't even that the space there were competitors in the space. But my angle was always like I built something as if **Apple** would have built it like like with with like all the love and care and and polish and and those little delights that a lot of people in the industry don't get. Uh, so even though we had competitors that had way more features and were around way longer, my company was more successful and my product was more successful cuz developers tried the the different ones and mine just felt the best. I think software is all about about how it feels much more so than the than the feature set. Like why did we buy **Apple** stuff? It has more features than than **Windows**. Um, but it it feels better.

</details>

### PSPDFKit的发展与企业销售

**主持人**: 那么，你是如何从离开这家公司，然后构建这个开始销售的**PDF**组件，到什么时候你雇佣了第一个人，意识到这不仅仅是一个项目？

<details>
<summary>Original English</summary>

**主持人**: So, how did you go from like you you left this company and you were building this **PDF** component that started to sell. At what point did you hire the first person realizing, okay, there's something more to this?

</details>

**Peter**: 当我回到**维也纳**时，我当时想，好吧，我必须全力以赴，那就是我开始与自由职业者合作的时候，说实话，太晚了，我本可以更早雇佣人，但你知道，这是一个很大的步骤，那就是它开始有了自己的生命，我花了

<details>
<summary>Original English</summary>

**Peter**: when I went back to **Vienna** then I was like okay I have to go all in and that's where I I started working with freelancers a little bit and way too late to be honest also like I I could have could have hired much earlier but you know you know it's it's it's a big step and that's kind of where it it started having a life of its own and I spent

</details>

**Peter**: 我职业生涯的13年几乎都花在了构建这个产品上，它有一个奇怪的名字，我从未改过，因为我只花了大约五分钟思考它，然后就叫**PSPDFkit**。

<details>
<summary>Original English</summary>

**Peter**: pretty much 13 years of my career um building this product with this weird name that I never changed because I took me like I thought like five minutes about it and then stock **PSPDFkit**.

</details>

**主持人**: **PSPDF**。

<details>
<summary>Original English</summary>

**主持人**: **PSPDF**.

</details>

**Peter**: 他们最终，他们最终改了名，但我不会改的。但现在它，它...

<details>
<summary>Original English</summary>

**Peter**: They finally they finally did a rename, but I wouldn't have I wouldn't have renamed it. But now it it

</details>

**主持人**: 它有点拗口，但非常独特。

<details>
<summary>Original English</summary>

**主持人**: it's it's a mouthful, but it's very unique.

</details>

**Peter**: 嗯，如果你做**Objective C**，你就会明白，因为它只是一个命名空间。

<details>
<summary>Original English</summary>

**Peter**: Well, you get it if you do **Objective C** because it's just a name space.

</details>

**主持人**: 是的。

<details>
<summary>Original English</summary>

**主持人**: Yes.

</details>

**Peter**: 嗯，当时它完全说得通。我的营销策略始终是：我只关心开发者。我知道高层管理人员做决策，但如果我能说服公司内部的人，他们都会为我做营销和游说，这非常有效。我们从不做冷邮件或激进的推销。所有都是内向营销。我们所做的就是制作好产品，并撰写富有洞察力的技术博客文章。我参加了很多会议，对我来说重要的是，如果人们明白构建这个产品的人知道他们在做什么，并且热爱他们所做的事情，这会反映在产品上，这非常有效。

<details>
<summary>Original English</summary>

**Peter**: Um and by by the time it it made perfect sense, my marketing my strategy for marketing was always I only care about the developer. Like I know like upper management does the decisions but if I can convince the people inside the company they all do the marketing and lobbying for me that worked really well. We never did like cold cold emails or aggressive. It was all inbound. All we did was like make good stuff and write insertful technical blog posts that and I went to a lot of conferences like the for me important it was okay if if people understand that the people who built this product are like know what they do and and love what they do that reflects on the product and that that worked really well.

</details>

**主持人**: 那么**PSPDFkit**背后的技术栈是什么？是**Objective C**吗？后来是**Swift**吗？还有其他技术，比如**C**或者其他什么吗？

<details>
<summary>Original English</summary>

**主持人**: And then what was the text type behind **PSPDFkit**? Was it **objective C**? Was it later **swift**? Were there other technologies like **C** or or anything else?

</details>

**Peter**: 我们最终扩展到了所有平台。一个巨大的转变是渲染器的切换，它当时和现在仍然相当多bug，我们切换到一个大型的**C++**渲染器，然后我们在所有框架中都使用了它。嗯，我们在网络方面起步很早。我们是第一批在**Web Assembly**中运行的**PDF**框架之一。我做了一件最聪明的事情，那是在**Web Assembly**刚起步的早期，我们建立了一个基准测试，这个基准测试最终被**Google**、**Microsoft**和**Apple**使用。我基本上让所有这些公司都非常努力地让我的渲染器更快，因为他们把我们的基准测试作为他们的基准测试之一，而这个基准测试只是渲染我们的东西，用我们的...

<details>
<summary>Original English</summary>

**Peter**: We eventually expanded to to all the platforms. Um big shift was the switch out renderer which was and is still quite buggy to like a big **C++** one that when then we used across all the frameworks. Um we we were we were really early with web. We were one of the first **PDF** frameworks that ran in **web assembly**. And I I did the most clever thing that it was in the very early days when **Web Assembly** was just taking off and we built a benchmark and that benchmark was eventually used by by **Google** and **Microsoft** and **Apple** and I basically had all these companies like working really hard on making my renderer faster cuz cuz they used their benchmark as one of their benchmarks and the benchmark was just like rendering our stuff with our [ __ ]

</details>

**主持人**: 啊，不错。然后随着公司发展，我记得**PSPDFkit**的一点是，你写了很多博客。2019年的一篇博客，也就是公司成立第九或第十年的时候，是关于团队如何工作的。你在里面提到了，比如每个功能都从提案开始。你提到你们很保守，因为它是一个很多人使用的大型API。你们希望谨慎行事，比如童子军规则（boy scout rule）这样的因素。你是如何将这个现在有30到60人的团队的文化整合起来的？

<details>
<summary>Original English</summary>

**主持人**: Ah nice. And then a as as a company grew, one thing that I remember about **PSPDFkit**, you did write a lot of blogs and one blog in 2019, so this was about like I think you know year nine or 10 in the company. It was about how the team worked and you you mentioned things there like every feature starts with a proposal. You mentioned that you are conservative because it's a it's a big **API** that that people use. You want to be careful things like the boy scout rule such a factor. How how did you kind of put together the the culture of of this now this team which was now closer to 30 or 60 people?

</details>

**Peter**: 当我卖掉股份时，我们实际上有70人，现在几乎有200人。我从一开始就知道，我不可能在**维也纳**找到我需要的人。所以它一直都是远程优先的，最终我们形成了一种混合模式，这让事情变得有点复杂。我边做边学了很多。我从来没有想成为CEO的冲动。我一直在编码。我请来了一些人在其他方面帮助我很多。嗯，在业务方面，我能做，而且我认为我做得很好，但我就是不喜欢。就像在销售电话中，你必须考虑所有的神奇数字，它值多少钱，因为企业就是这样运作的。天哪，更糟糕的是。Peter刚才说：“啊，企业销售最糟糕了。”因为向大公司、企业销售，是你能遇到的最棘手的事情。不仅因为你需要正确定价，还因为你需要构建所有企业级功能。这很好地引出了我们本季的赞助商**WorkOS**。如果你正在使用AI代理或自动化工具进行构建，这里有一个大多数团队一开始不会考虑的问题。一旦代理可以代表你采取行动，你需要控制它被允许做什么。而传统的OAuth并不是为此设计的。这就是**WorkOS**引入**MCP**的原因，它为团队提供了一种通过明确权限、可审计性和企业级安全来验证AI代理的方式。你无需共享范围过大的API密钥，而是可以为代理可以访问的数据和可以执行的操作定义明确的边界。如果你正在构建AI驱动的功能，并希望在不损害安全性的情况下快速共享，请访问**workos.com/mcp**。现在，让我们回到Peter和企业定价。但这也是这种模式下唯一真正有效的方式。

<details>
<summary>Original English</summary>

**Peter**: We were actually 70 when when I sold my shares and now it's almost 200. And I I knew right from the get- go it's like I'm not going to find the people that I need in **Vienna**. So it was always just like remote first and eventually we we landed up with some kind of hybrid model uh which made things a bit more complicated. I learned a whole lot on the go. Like I I never had the urge to be **CEO**. I always was coding. I I brought people in to people that that helped me a lot with other other parts. Uh and on the business side, I can do it and I I think I think I'm I'm quite good at it, but I just don't enjoy it. Like even on sales calls where you like have to like think of all the magic number how much it would be worth because that's how enterprise works. Gh worse. **Peter** just said, "Ah, the worst about enterprise sales. Because selling to large companies, enterprises, is as tricky as it gets." Not just because you need to get pricing right, but because of all the enterprise features that you need to build. And this leads us nicely to our season sponsor, **Work OS**. If you're building with **AI** agents or automation tools, here's a problem most teams don't think about at first. Once an agent can take actions on your behalf, you need to control what it's allowed to do. And traditional O just wasn't designed for that. That's why **WorkOS** introduced **MCP** off which gives teams a way to authenticate **AI** agents with explicit permissions auditability and enterprisegrade security. Instead of sharing over scoped **API** keys, you can define clear boundaries for the data that agents can access and the agents they can perform. If you're building **AI** powered features and want to share fast without compromising security, check out **workeros.com/mcp**. And with this, let's get back to **Peter** and enterprise pricing. But that's also the only thing that that really works on on a model like this.

</details>

**主持人**: 是的。你指的是企业销售，对吧？

<details>
<summary>Original English</summary>

**主持人**: Yeah. You mean enterprise sales specifically, right?

</details>

**Peter**: 意思是定制定价。那么，你能告诉我们，对于那些访问供应商网站却找不到价格，只看到“请致电我们”或“安排会议”而感到沮丧的开发者来说，为什么会这样呢？

<details>
<summary>Original English</summary>

**Peter**: Meaning custom pricing. So So can you tell us for for for you know devs listening who go to a vendor's website and they're frustrated that there's no price. It says call us or schedule meeting. Why that is?

</details>

**Peter**: 哦，这就是为什么，因为我们会查看你的公司，然后掷骰子，然后考虑你可能愿意支付的数字。这听起来很糟糕。但当你有一个产品，你无法真正将其分解成一个具体的数字时，比如，如果一个自由职业者联系我们，或者一个**财富500强**的大公司联系我们，这就会有所不同。我们不要说名字。

<details>
<summary>Original English</summary>

**Peter**: Oh, that's that's why because we going to look at your company and then just take the dice and and and think about the number that you're probably willing to pay. And that sounds horrible. But also when you have a product where you can't really tear it down to a specific number like it it's it makes a difference if uh a freelancer contacts us or one of the big **Fortune 500s**. Let's not say names

</details>

**主持人**: 因为使用方式会不同。他们从中获得的价值会不同，如果收取相同的费用，你就会排除其中一方。

<details>
<summary>Original English</summary>

**主持人**: because the usage will be different. The value they get out of it will be different and charging the same. You would either exclude one or the other.

</details>

**Peter**: 如果我定价太低，他们会觉得可疑。就像，呃，500美元的采购，我们甚至不会启动流程。如果我定价太高，我们就会失去那些人。所以，尽管这个过程对某些产品来说看起来很糟糕和不公平，但它毕竟是最公平的方式。你知道，你知道，在软件方面，

<details>
<summary>Original English</summary>

**Peter**: If I if I if I go too low, they're going to see this fishy. It's like uh procurement for like 500 bucks. we're not going to even start the process. And if we we target it too high, we're going to lose those people. So So as horrible and unfair this process seems for some kinds of products, it is the it's the most fair way after all. You know, you know, on software

</details>

**Peter**: 我会说有四个维度。有容易和困难，有趣和不有趣。我们非常处于不有趣和困难的部分。如果你构建每个人都想构建的东西，那将很难销售。销售给开发者本身就很难。

<details>
<summary>Original English</summary>

**Peter**: there is I would say there's like four axes. There's like easy and hard and interesting and not interesting. We were very much in the not interesting and hard part. If you build something that every developer wants to build, it's going to be a hard cell. It's it's a hard sell anyhow. Selling anything to developers is a hard sell.

</details>

**主持人**: 是的。

<details>
<summary>Original English</summary>

**主持人**: Yeah.

</details>

**Peter**: 但如果它太容易或太有趣，祝你好运。但如果它...

<details>
<summary>Original English</summary>

**Peter**: But if it's if it's too easy or too interesting, good luck. But if it's

</details>

**Peter**: 天哪，我不想做这个，天哪，这太难了。那是一个好位置。所以我找到了一个非常有趣的利基市场，而且有无限多的复杂问题。

<details>
<summary>Original English</summary>

**Peter**: oh god, I don't want to do this and oh my god, this is hard. That's a good spot to be in. So So I found a really interesting niche and there were just an infinite number of complex problems.

</details>

**主持人**: 你需要告诉我一两个关于解析**PDF**的难点。这能有多难？有规范。我是一个工程师。我懂规范。这有什么难的？

<details>
<summary>Original English</summary>

**主持人**: You you you need to tell me tell me one or two hard things about parsing **PDF**. How hard could it be? There's a specification. I'm an engineer. I know specifications. I What's so hard about it?

</details>

**Peter**: 我的意思是，有一个例子，你知道，**PDF**有链接。所以，比如有一个目录，你点击它，它会跳转到第37页。所以我构建了整个模型，假设，哦，是的，里面可能有100或400个链接。

<details>
<summary>Original English</summary>

**Peter**: I mean, there was this one example where, you know, like **PDF** has have links. So, like there's like there's like a table of contents and you click on it and it goes to like page 37. So, I built this whole model with the assumption, oh yeah, maybe there's like a 100 or 400 links in there.

</details>

**Peter**: 然后我们有一个客户，他们付了很高的钱。然后我当时想，哦，加载一个**PDF**需要4分钟。搞什么鬼，伙计们？我看了看，那是一本来自**加拿大**的5万页的文本圣经，它有...

<details>
<summary>Original English</summary>

**Peter**: And then we got this one customer who like paid really good money. And then I was like, oh, it takes 4 minutes to load a **PDF**. What the heck, guys? And I looked at it and it was like a 50,000 page text bible from **Canada** and it had

</details>

**主持人**: 5万页。

<details>
<summary>Original English</summary>

**主持人**: 50,000 pages.

</details>

**Peter**: 每页有超过100个链接。

<details>
<summary>Original English</summary>

**Peter**: It had like more than 100 links per page,

</details>

**主持人**: 50万个链接。

<details>
<summary>Original English</summary>

**主持人**: 500,000 links.

</details>

**Peter**: 我的数据模型完全崩溃了，因为我的假设偏离了大约1000倍。但那时你已经有一个成熟的产品和API了。所以，你如何完全重新设计内部部分而不破坏所有人的东西？就像突然之间所有东西都必须是惰性加载的，而之前解析100个很容易，但现在他们觉得这太难了，要让它对人们保持可用。嗯，我想我花了大约两个月时间专门重新设计内部结构，并确保它对人们来说仍然容易，他们不需要知道我们加载了什么，我们是轻松加载还是惰性加载，或者如果你复制这个东西，它仍然必须保持一些连接。

<details>
<summary>Original English</summary>

**Peter**: My data model completely exploded because my assumptions were off by a number of what 1,000. But by then you have like a mature product with an **API**. So like how do you how do you completely redesign the internal part without breaking things for everyone? like suddenly everything has to be lazy where where before parsing 100 one was easy but now they were like this was like so difficult to keep it working for people um I think I spent like two months just on that completely redesigning like the internals and like making sure it's still easy for people they don't have to know what we what we load easy what we load lazy or if you copy this thing it it still has to like have to keep some connection

</details>

**主持人**: 它需要保持引用和一些类似的东西。

<details>
<summary>Original English</summary>

**主持人**: it needs to keep the references and and some of those things.

</details>

**Peter**: 所以，我喜欢做支持，我认为这也是公司成功的一个限制因素，因为如果你发了一个工单，然后CEO回复并帮助你解决问题，那会产生影响。我的策略总是反向列表，因为如果你发了一个工单，并在5分钟内得到回复，那真是太神奇了。如果你等一两天，差别不大。是的。

<details>
<summary>Original English</summary>

**Peter**: So, so I and I I love to do support and I think that that that also a confining factor why the company worked cuz if if you send a ticket and then the the the **CEO** replies and helps you out um that has impact and my my strategy was always like I always used to list in reverse cuz if you if you send a ticket and you get a reply within 5 minute that's magical. If you wait one or two days not much difference. Yeah.

</details>

**主持人**: 所以，是的，这是我工作了两个月的问题之一，我最终把它解决了，几乎就像这样。

<details>
<summary>Original English</summary>

**主持人**: So, yeah, this this was one of the problems where I worked two months and I finally got it down to almost like this.

</details>

**主持人**: 嗯。那一定很令人满意。

<details>
<summary>Original English</summary>

**主持人**: Mhm. That must have been satisfying.

</details>

**Peter**: 是的，这非常令人满意。

<details>
<summary>Original English</summary>

**Peter**: And and it was this was very satisfying.

</details>

**主持人**: 你写了很多代码，或者你参与了很多代码。显然现在有一个大团队，但你仍然在监督它，对吧？你深入细节。

<details>
<summary>Original English</summary>

**主持人**: And you were writing a lot a lot of the code or you were involved in in in a bunch of the code like obviously a big big team was now here, but you were still kind of overseeing it, right? You're in the details.

</details>

**Peter**: 我的意思是，当然，我有一个非常棒的团队，有些部分我参与得更多。我总是更多地参与移动端，因为那是我的心之所向，但我总是非常深入地了解技术。在营销方面，业务方面，我有**Jonathan**的帮助，我有营销方面的帮助。我找到了优秀的人。关键是，如果你喜欢写博客，写关于你如何解决有趣而困难的问题，这会帮助你雇佣那些想解决有趣问题的人。

<details>
<summary>Original English</summary>

**Peter**: I mean, of course, I had a a really great team and and some parts I was more involved. I was always more involved in mobile because that's where my my heart was, but I was always very deep in the tech and and the the marketing side, the business side. I had like **Jonathan**'s help, I had marketing help. There was I I I found good people. The the thing is if you like the blogging and writing about how you solve interesting hard problems will help you hire interesting people that want to solve interesting problems.

</details>

**主持人**: 这就是我记得**PSPDFkit**的地方，你的博客时不时地也会被**Hacker News**收录，但它就是很有趣。我不能再提名字了，我不是做**PDF**的，但如果我必须说一个**PDF**相关的东西，我就会说**PSPDFkit**，因为他们是唯一我读过关于如何优化你的产品的有趣工程博客的公司。顺便说一句，它还在那里。我自己有时也会问自己，嗯，有趣，是不是更多公司没有看到这一点，或者问题在于你需要是一个开发者，要么是CEO，要么是高层，他只是喜欢做这个。顺便问一下，你写这些的时候，是觉得这会有帮助，还是只是因为你从中得到了什么，比如解决了这个难题而发表出来？

<details>
<summary>Original English</summary>

**主持人**: This is what I remember at **PSPDFkit** that your blog was every now and then it admitted it to **hacker news** as well but it was just interesting to read and I couldn't name again I I'm not went into **PDFs** but if I had to say something a **PDF** I would have said **PSPDFkit** because they're the only ones where I read interesting engineing blogs about how you optimize your ship is still there by the way I I I myself also sometimes ask myself like hm interesting do more companies not see this or is is the question that you you need to be a developer who's either the **CEO** or or up there who just likes doing this. And by the way, did did you ever write this thinking this will be helpful or you just wrote because you got something out of it like putting out that you solved this hard problem?

</details>

**Peter**: 我喜欢分享，喜欢激励人们。嗯，有时甚至会有冲突，我们当时会想，我们应该写这个吗？因为它有点像秘密武器。但我从不听那些声音太多。嗯，你知道，当你写下一些东西时，有一个原则是，你理解它，但如果你想教它，你就必须真正理解它。所以对我来说，这也有点像，哦，是的，我解决了这个非常困难的问题，现在我想把它保存下来，并帮助其他人。所以，我当然喜欢这种关注。嗯，但实际上，

<details>
<summary>Original English</summary>

**Peter**: I like sharing and and and like inspiring people. Um there was sometimes even conflicts where we were like should we write about this because it's like a little bit of secret sauce but I just never listen to those voices too much. Um I just you know there's also like when you when you write something down there it's this principle of like you understand it but then if you want to teach it you really have to understand it. So to to me it was also a little bit like oh yeah I worked on this really hard problem and now I want to like preserve it and like help others. So, so, so I I got I got a gig of it of of course I liked the attention. Um, but really it it was this

</details>

**Peter**: 有时我只是在一年后引用我自己的帖子，就像，是的，这既是公司文档，也是我自己的参考手册。它在很多方面都很有帮助，而很多大公司。哦，他们设置了太多的繁文缛节。有很多开发者不喜欢写作。所以我强迫每个人每个月花一整天时间写一篇博客文章。

<details>
<summary>Original English</summary>

**Peter**: sometimes I just referenced a year later to my own post like yeah this this is a this is both company documentation. This is like my own lookbook. It's helpful on so many ways and a lot of those bigger companies. Oh, they put on too much red tape. There's a lot of developers who don't really like to write. So I I I forced everyone once a month a full day just to write a blog post.

</details>

**主持人**: 但你给了他们时间。你就像，那天你不需要做任何其他工作，只需要写点东西。

<details>
<summary>Original English</summary>

**主持人**: But you gave them the time. You're like that day you don't need to do any other work but write something.

</details>

**Peter**: 是的。你有一个，是的。你有一整天的时间来写一篇帖子。啊，一天其实相当多。我的意思是，我现在写帖子仍然需要几个小时。我不想过多地纠结于，我认为公司的起始阶段是最有趣的。然后是增长阶段，你会遇到更多的繁文缛节，会有更多的人。这更像是打理你的产品，而不是做一些疯狂的黑客行为。

<details>
<summary>Original English</summary>

**Peter**: Yeah. You have Yeah. You have a day to come up with a post. Ah a day is is quite much actually. I mean when I'm nowadays when I write posts it still takes me a few hours. I don't want to dwell too much on like the I think the the the starting time of the company is the most interesting. the then the the growth phase, you get more red tape, you get more people. It's much more gardening your product instead of like doing doing wild hacks

</details>

**主持人**: 嗯，更迭代。所以，随着时间的推移，它变得有点不那么有趣了，而且有更多的人际冲突，因为人越多，问题就越多，我不太喜欢它，我真的非常精疲力尽。你觉得是什么让你精疲力尽的？

<details>
<summary>Original English</summary>

**主持人**: um and more iterative. So, so, so it got a little bit less interesting uh over the years and there was like more people drama cuz the more so the more people you have, the more issues there are and I didn't enjoy it that much and I was really really burned out. What what burnt you out, do you think?

</details>

**Peter**: 我只是工作太拼命了。我几乎每个周末都在工作。我试图处理所有的管理需求。你知道，作为CEO，你基本上就是个垃圾桶，因为其他人无法管理、无法完成或搞砸的一切，你都得去解决。而且这也很孤独，因为你不能公开谈论很多事情。我的意思是，我把公司架构得很开放，但你仍然不能表现出消极。即使发生非常糟糕的事情，你也不能。我记得有一个周末，我的联合创始人凌晨五点打电话给我，告诉我，是的，有一家大型航空公司，他们的飞机停飞了，因为我们的软件崩溃了。那是一个非常有趣的周末，直到我能够，我拆解了他们的应用程序，并证明他们篡改了我们的源代码，触发了许可证密钥回滚。呃，那最终导致了他们的问题。但那是一个，如果他们公司倒闭了，那会是更糟糕的时刻。嗯，那只是所有额外压力之上的压力，而且有很多这样的事情。你可以这样做一段时间。而且我也相信，倦怠不一定是因为工作太多。对我来说，至少，当你做一些事情，但你不再相信它，或者你有太多的冲突，而且我们团队内部也经常争吵，与管理团队。当时我犯了一个错误，我以为你必须更民主地领导公司。嗯，所以那也是让我精疲力尽的原因之一。不过，我不会想错过那段经历。

<details>
<summary>Original English</summary>

**Peter**: I was just burning too hard. I was working most weekends. I I I tried to shuffle all my managerial needs. And you know, as a **CEO**, you're basically the waste bin cuz everything everything that other people don't manage or or can do or or mess up, you have to fix. And it's also quite lonely because you you can't openly talk about a lot of things. I mean I I I I structured the company to be quite open but still like you cannot you cannot be negative. You have to even if even if like even if like really bad stuff happens. I know there was like there was like one weekend where my my co-founder called me at at 5:00 a.m. and told me like yeah there's this big airplane company and their planes are down because our software is crashing. That was a very interesting weekend until I could like I disassembled their their app and did proof that they messed around with our source code to triggering a triggering a license key fall back. Uh that eventually like caused issue they had. But that was like a if they sus company's gone and more moment. Um and that's just on top to all the additional stress and there were quite a few of those things. You can do that for a while. And I I also believe like burnout doesn't necessarily come from working too much. It it comes more from or at least for me when you when you work on something but you don't believe in it anymore or you have like too many conflicts and and we also had a we did fight a lot in the team uh with like management team and by the time I I made this mistake and I thought you have to like lead a company more democratically. Um so that was also something that burned me out. I wouldn't I wouldn't want to miss it for a while, though.

</details>

### 倦怠与回归：AI时代的机遇

**主持人**: 是的。所以，你知道，从外部看，你卖掉了股份，赚了足够的钱，如果不想工作，就可以不再工作。对于很多人来说，比如那些刚开始创业或者有一天想创业的人来说，这听起来就像是绝对的梦想。我想，我们都知道，现实中大多数人是不会成功的，但如果你成功了，我的意思是，你就像，你知道，完成了任务。这有点像你在爬墙，然后你按响了铃，就完成了。然后我注意到，从外部看，你的博客文章完全停止了好几年。在这段时间里你做了什么？你学到了什么？你知道，在你回到我们现在所处的状态之前？

<details>
<summary>Original English</summary>

**主持人**: Yeah. So, you know, from from the outside, it seems you sold your shares, you made enough money to not have to work again, should you not choose. And for a lot of people, like, you know, people who are starting out their business or or one day want to start a business, this sounds like the absolute dream. Like, this is I guess what we know realistically that most people will not make it, but if you make it, I mean, you've kind of like I guess you know, checkbox done. You're kind of it's a little bit if you're like climbing on a wall and you ring the bell, you're done. And then what I noticed is from the outside again on your blog, the blog post completely stopped for several years. What what did you do uh in in this time uh and and what what what did you learn in this time, you know, before you came back to to where we are now?

</details>

**Peter**: 我需要很多时间来放松。我弥补了很多我以为错过的东西。我，我，很多。嗯，有几个月我甚至没有开电脑。有一段时间我就是没有那种感觉，不知道现在该做什么。就像，我当时确实觉得，

<details>
<summary>Original English</summary>

**Peter**: I needed a lot of time to decompress. I I catched up a lot on the things I thought I missed. I I a lot. Um there were months where I didn't even turn on my computer. And for a while I was I just didn't had this feeling of like what should I do now? Like like I definitely was like

</details>

**Peter**: 何必呢？你知道，你不应该这么早退休，或者说，不应该有这么好的退出，以至于你再也不用工作了。这让我的思想受到了很大的困扰。那几年很艰难。然后到了四月，我当时想，我有一个几年前的想法，甚至是一个我开始的副项目，我当时想，哦，是的，我想继续做那个。然后，三年多以后，我只是坐回电脑前，又开始编程了。但问题是，这是一个**Twitter**分析的东西，它是用**Swift**和**SwiftUI**写的，当时我就知道，如果我把它做成一个网站，效果会好得多。

<details>
<summary>Original English</summary>

**Peter**: why border? You know, you're not you're not supposed to to retire so early or like have so much have such a good exit that you never have to work again. That messed with my mind quite a bit. That that was some that was some hard years. And then in in April I was like I there was this idea that I had years ago and even a side project that I started I was like oh yeah I want to I want to continue on that and then after after after more than 3 years I just sat back to my computer and and started hacking again. But the thing was this was like a a **Twitter** analytics thing and it was written in in **Swift** and **Swift UI** and back then I already knew this would have would be so much better if I would build as a website.

</details>

**主持人**: 所以，这是一个你一直藏在心里的想法，关于**Twitter**分析之类的东西？

<details>
<summary>Original English</summary>

**主持人**: So So was this an existing idea that you kind of had at the back of your your mind something something **Twitter** analytic?

</details>

**Peter**: 是的，这只是我想为自己构建的东西，因为，呃，因为它不存在。

<details>
<summary>Original English</summary>

**Peter**: Yeah, it was just like something I wanted to build for myself because uh because it didn't exist and then

</details>

**主持人**: 甚至三年后它也不存在。它现在仍然不存在。呃，它有点存在，但我有点跑题了。所以我回去了，我想用网络技术来构建它。但网络一直都是，即使在公司里，我最少关注的东西，因为我有一个非常聪明的人，**Martin**，他负责公司那方面的事情，所以我从来不用担心。那是我最不担心的。

<details>
<summary>Original English</summary>

**主持人**: even three years later it didn't exist. It still doesn't exist. Uh it it kind of does but I got a bit sidetracked. So I I went back and I I wanted to build it in in with web tech. But web was really was always even at the company the one thing that I looked into the least because I had I had someone really smart who took care of of of that side in the company that I brought in **Martin**. So I never had to worry about it. That was one of the

</details>

**主持人**: 你不亲自动手做**React**之类的东西。

<details>
<summary>Original English</summary>

**主持人**: You're not hands on with **React** or any of that stuff.

</details>

**Peter**: 是的。当我回来的时候，我当时想，什么是**prop**？你知道，就是那种你真的，你知道，这就像我看到很多开发者都会陷入的陷阱。你在一项技术上越擅长，就越难跳到其他地方。不是说你做不到，但那太痛苦了。你就像，我可以在**Apple**技术栈中编程，盲写代码。但在这个技术栈中，我必须**Google**最普通的东西，这会很痛苦。你觉得自己又像个白痴了。

<details>
<summary>Original English</summary>

**Peter**: Yeah. And when I came back, I was like, what's a **prop**? You know, that that level where you really where and you know, this is like this is a a trap I see with many developers. The the better you get at one technology, the harder it is to jump somewhere else. It's not that you can't do it, but it hurts so much. You're like like I can I can program in in in in **Apple** stack. and program blind. But then in that stack, I have to **Google** the most mundane stuff and it it just like it just hurts. You you you feel you feel like an idiot again.

</details>

**主持人**: 是的。我想你经验越多，这种感觉就越糟糕。我的意思是，我相信你会说要拥抱它等等，但这并不好。你效率不高。你知道你可以更快等等。

<details>
<summary>Original English</summary>

**主持人**: Yeah. And and I guess the more experience you have, it it kind of sucks feeling. I mean, I'm sure you say embrace and and all that, but it's it's not great. You're not as efficient. You know that you could be faster, etc.

</details>

**Peter**: 是的。所以我回来了，我当时想，天哪，一定有，这个AI是什么？这个人们都在不屑一顾的AI是什么？让我们看看这个。是的。在四月，我们很多人都对此持怀疑态度，也许是理所当然的，但，我，我，我，我喜欢，我在某种程度上，我把这归功于我基本上没有开电脑的那三年，因为在那几年里，你们都尝试了AI，然后发现它很糟糕。

<details>
<summary>Original English</summary>

**Peter**: Yeah. So So I came back and I was like, gosh, there has to be there has to be what is this **AI**? What is this **AI** stuff that every that that people are dismissing? let's look into this. Yeah. And in April, a lot of us were the specific probably for rightfully so, but and I and I and I like and I to a degree I I credit those three years where I basically didn't turn on my computer because in those years you guys checked out **AI** and learned that it's crap.

</details>

**主持人**: 是的。那些人，我正要说，你错过了**GitHub Copilot**的测试版，你知道，那只是美化了的自动补全，是**GPT-3**，或者甚至还不是。然后当然有**3.5**，这是一个巨大的飞跃，然后它逐渐变得更好，直到**GPT-4**。所以当你回来的时候，你第一次使用的是什么工具？因为你错过了大约两年的时间，开发者们在使用、不屑一顾、然后找到一些小众用例。

<details>
<summary>Original English</summary>

**主持人**: Yeah. the the people who like I was about to say so you missed out on you didn't do the beta of **GitHub Copilot** you know glorified autocomplete which is **GPC3** or or maybe not even there was then of course **3.5** which is a big jump and it it got incrementally better than **GPT4** and so by the time you came back what tool did you first use when you cuz you missed out on like two years of like like devs us devs using dismissing finding some niche use cases for it

</details>

**Peter**: 哦，**Claude Code**。所以你从**Claude Code**开始，我想它发布了。

<details>
<summary>Original English</summary>

**Peter**: oh **cloud code** so you start with **cloud mode** that I think came out.

</details>

**主持人**: 它刚发布。它是在五月发布的，但之前有一个测试版。

<details>
<summary>Original English</summary>

**主持人**: It just came out It came out in May, but there was a beta beforehand.

</details>

**Peter**: 是的，是的。我想他们有一些东西。他们不是在二月就已经有了一些东西吗？

<details>
<summary>Original English</summary>

**Peter**: Yeah. Yeah. I think they had something Didn't they have something in February already?

</details>

**Peter**: 他们在二月有一个测试版。没错。

<details>
<summary>Original English</summary>

**Peter**: They had a beta from February. Correct.

</details>

**主持人**: 是的。所以，所以，**Claude**是你的第一个。你休息了一段时间回来后，立刻就打开了**Claude Code**，错过了之前的一切。

<details>
<summary>Original English</summary>

**主持人**: So, so so **clock** was your first you you come back after like a you know hiatus and you immediately turned on **clock code** and you missed everything else before.

</details>

**Peter**: 而且，你知道，你知道，我记得我拿了我构建的这个庞大而混乱的网站项目，我有一个浏览器扩展，可以将**GitHub**仓库转换成一个大的**Markdown**文件，大概1.3兆字节的**Markdown**文件。我把它拖到**Google**的**CI studio**，用**Gemini 2.5**或**2.something**，我输入“为我写一个规范”，它生成了400行规范。我把这个拖回**Claude Code**，我当时想，构建。然后我继续，继续，继续，同时我在做其他事情，你知道。嗯，最终它告诉我，它100%可以投入生产了。我启动它，它崩溃了。我相信我们都能理解AI说代码可以投入生产然后崩溃的故事。这是一个相当有趣和无害的故事，但我个人不相信AI生成的代码，除非经过验证。这很好地引出了我们本季的赞助商**Sonar**。那么，让我们看一些数据。**Sonar**发布的一份新报告，《代码状态开发者调查报告》发现，82%的开发者认为他们可以使用AI更快地编写代码。但有趣的是，在同一项调查中，96%的开发者表示他们不高度信任AI代码的准确性。这对我来说也一样。虽然我使用AI代理编写代码更快，但我并不完全信任它生成的代码。这在代码审查阶段真的成了一个问题，所有这些AI生成的代码都必须定期验证其安全性、可靠性和可维护性。**SonarQube**正是为解决这个代码验证问题而构建的。**Sonar**在自动化代码分析领域已经领先了17年，每天分析7500亿行代码。这相当于每秒超过800万行代码。我实际上是在13年前，也就是2013年，在**Microsoft Skype**工作时第一次接触**Sonar**的，当时很多团队已经使用**SonarQube**来提高代码质量。从那时起，我就是它的粉丝。**Sonar**提供了一个基本且独立的验证层。它是一个自动化护栏，分析所有代码，无论是开发者生成还是AI代理生成，确保它在投入生产之前符合你的质量和安全标准。要免费开始使用，请访问**sonarsource.com/pragmatic**。现在，让我们回到Peter，了解AI代理为何不能完全信任。

<details>
<summary>Original English</summary>

**Peter**: and and you know, you know, it was like I I remember I took this big messy site project that I built and I have this browser extension where that that converts a **GitHub** repository into one big **markdown** that was like a 1.3 megabyte **markdown** file and I dragged it into into **Google**'s **CI studio** with **Geminina 2.5** or two to something and I typed write me a spec and it generated those 400 lines of spec And I dragged this back into **cloud code** and I was like build and then I continue continue continue and while I was like working on other stuff, you know, um and eventually told me like it's 100% production ready and I started it and it crashed. I'm sure we can all relate to the story of the **AI** saying the code is production ready then crashing. This is a pretty funny and innocent story, but I personally don't trust code that **AI** generates without verifying it. And this leads us nicely to our season sponsor, **Sonar**. So, let's look at some data. A new report from **Sonar**, the state of code developer survey report, found that 82% of developers believe they can code faster with **AI**. But here's what's interesting. In the same survey, 96% of developers said they do not highly trust the accuracy of **AI** code. This checks out for me as well. While I write the code faster with **AI** agents, I don't exactly trust the code it produces. This really becomes a problem at the code review stage where all this **AI** generated code must be regularly verified for security, reliability, and maintainability. **SonarQube** is precisely built to solve this code verification issue. **Sonar** has been the leader in the automated code analysis business for over 17 years, analyzing 750 billion lines of code daily. That's over 8 million lines of code per second. I actually first came across **Sonar** 13 years ago in 2013 when I was working at **Microsoft Skype** and a bunch of teams already use **SonarQube** to improve the quality of their code. I've been a fan since. **Sonar** provides an essential and independent verification layer. It's the automated guardrail that analyzes all code whether it's developer or **AI** agent generated, ensuring it meets your quality and security standards before it ever reaches production. To get started for free, head to **sonarsource.com/pragmatic**. With this, let's get back to **Peter** and how **AI** agents cannot exactly be trusted.

</details>

**Peter**: 然后我添加了一个**MCP**，这样它就可以使用浏览器。我想**MCP**的播放器已经存在了，它又循环了几个小时，然后我得到了一个**Twitter**登录页面，它做了一些事情。它不是很好，但它确实做了一些事情。对我来说，对我来说，这是一个“天哪”的令人震惊的时刻。

<details>
<summary>Original English</summary>

**Peter**: Then I had then I added added an **MCP** so it could use the browser. I think the player with **MCP** was already there and it looped a few more hours and then I had a I had a **Twitter** login page and it it did something. I It was not great, but it did something. And to me to me this was my holy [ __ ] mind-blowing moment.

</details>

**主持人**: 是的。

<details>
<summary>Original English</summary>

**主持人**: Yeah.

</details>

**主持人**: 这大概是今年四月或五月，对吧？

<details>
<summary>Original English</summary>

**主持人**: This and this was like in April or May this year, right?

</details>

**Peter**: 是的。它，它，它，它刚刚好到我能看到潜力，而且我明白了，就像，

<details>
<summary>Original English</summary>

**Peter**: Yeah. It was it was it was it was just good enough that I could see the potential and I I understood it's like

</details>

**Peter**: 是的，这就是它的发展方向。从那一刻起，我有几个月的时间真的睡不好觉。

<details>
<summary>Original English</summary>

**Peter**: yeah this is this is where it's going and and from that moment on I I had a few months where I had really trouble sleeping and I in

</details>

**主持人**: 我记得，因为有一次我在**Twitter**上给你发了一条私信。我当时因为合理的原因很早醒来，你知道，我的孩子什么的。但那是凌晨五点，我给你发了一条**Twitter**消息，你立刻就回复了。我当时想：“你为什么醒着？”他说：“哦，这很正常。我通常都还醒着。”我问：“为什么？”你说：“哦，我只是在使用**Claude**，它真的非常上瘾。”我当时想：“真的吗？”你说：“是的，我没开玩笑。它真的很好用。”我想就是那样。你说了些什么，或者写了些什么，比如“再来一个提示”。你告诉我它为什么如此上瘾，或者现在为什么仍然如此上瘾？

<details>
<summary>Original English</summary>

**主持人**: I I remember because once on **Twitter** I sent you a direct message. I was up early for valid reasons, you know, my my kids or something like that. But it was 5:00 a.m. and I I sent you a message on **Twitter** and you replied immediately. And I was like, "Why are you up?" And he's like, "Oh, this is usual. Like I I usually I'm still usually awake." And and I asked like, "Why?" And you said like, "Oh, I'm I'm just like using **Claude** and it's really really addictive." And I was like, "Really?" And you're like, "Yeah, I'm not joking. Like it's really good." And I think that was the thing. You said something or wrote something like just one more prompt. like you told me how like what what made it so addictive or or what what still makes it so addictive?

</details>

**Peter**: 哦，这和你去赌场是一样的经济学原理。这就是我的小老虎机，你知道吗？你按下扳机，叮叮叮叮叮，然后就没了。你输入提示，它就会，它会搞砸，或者它会做出一些真正让你大开眼界的事情，就是这种感觉。

<details>
<summary>Original English</summary>

**Peter**: Oh, it's the same economics as as you go to a casino. That's that's it's my little slot machines, you know? You you you press the trigger and ding ding ding ding ding and it's like nope. you you type in the prompt and it it will like and it does it does crap or it does something that actually blows your mind and it's this

</details>

**主持人**: 你说它让你大开眼界，你是一个经验丰富的开发者，让你大开眼界可不容易，对吧？你见过好的代码，你能区分垃圾代码、还不错的代码、足够好的代码，你有一个标准，对吧？

<details>
<summary>Original English</summary>

**主持人**: and and you're saying it it blows your mind as like you're a really experienced developer like it's it's not easy to blow your mind, right? Like you you you've seen good code you can differentiate like crap code, decent code, good enough code like you have a bar, right?

</details>

**Peter**: 这太有趣了，你知道，在我的公司里，我曾经痴迷于每一个细节，每一个间距，每一个新行，命名。我花了很多时间在“自行车棚效应”上。回想起来，我当时想，搞什么鬼？我为什么要那样做？客户看不到洞察力有什么意义？当然，它必须符合某些标准。它必须能工作。它必须快速。它应该安全，但像那种“自行车棚效应”的东西是愚蠢的。

<details>
<summary>Original English</summary>

**Peter**: It's so funny, you know, in my company, I used to obsess over every detail, every spacing, every new line, the naming. I spend so much time bike shedding. And in retrospect, I'm like, what the heck? Why did I do that? Like, what's the point that the customer doesn't see the insights of of course like it has to meet certain certain standards. It has to work. It has to be fast. It should be secure, but like how much did that bike [ __ ] there is like stupid.

</details>

**主持人**: 你这么说，但你刚才也说过，人们喜欢**PSPDFkit**是因为它最精致。它运行得最好。你难道不认为那种程度的关心，你所说的“自行车棚效应”，那种痴迷？听起来你是在避免技术债务，你知道，就像痴迷于空格不会让代码变得混乱。我们知道这不仅仅是空格。我们知道你会关心测试等等。对我来说，听起来**PSPDFkit**，你知道，就像我看到的是，你不仅仅是构建了一个拥有出色用户体验的产品，你还构建了一个拥有良好“卫生习惯”的产品，这就是它能够高性能等等的原因。你是怎么看待的？

<details>
<summary>Original English</summary>

**主持人**: You say that, but then you also just said that people loved **PSPDFkit** because it was the most polished. It worked the best. Do you not think that that that amount of caring bike shedding as you call it? Being obsessed. It sound like you were keeping tech depth at bay, you know, like being obsessed with white spaces is is not going to be messy. And we know it's not just the white spaces. we know you're going to care about testing and all that. Like it sounds to me that **PSPDFkit** like you know like what I see is you were not just building a product that was great **UX** but you built something that had a really good hygiene and that's how it could be high performance and all that is how do you think about it?

</details>

**Peter**: 是的，是的，是的。在某种程度上，是的。即使现在，我的意思是，我最近的博客文章是一份忏悔，我发布了未经阅读的代码。

<details>
<summary>Original English</summary>

**Peter**: Yeah. Yeah. Yeah. To a degree. Yes. And and even now like I I I mean like my my last blog post was a confession that I I ship code on read and

</details>

**主持人**: 是的，我们必须谈谈那个。

<details>
<summary>Original English</summary>

**主持人**: yeah we have to talk about that

</details>

**Peter**: 同时，我花了那么多时间来重构。我的意思是，即使是今天，我真的很想把这个PR合并进去，它是一个15000行的更改，我把所有东西都迁移到了一个插件架构，我对此非常兴奋，我非常关心结构。我读了所有的代码吗？没有，因为很多代码真的只是无聊的“管道”。嗯，大多数应用程序是什么？数据以一种形式从API传入。你解析它，你把它打包成另一种形式。嘿，你把它存储到数据库中，它又是另一种形式。它再次以另一种形式出来。然后它就像**HTML**或其他什么。你输入一些东西，它又是另一种形式。你所做的就是，你在整个应用程序中以不同的形式处理数据。这就是大多数应用程序的样子。我们只是在追逐打印机。而真正困难的部分是由**Postgres**在30年前由一些书呆子解决的。呃，这就是很多软件的真实情况。总有一些有趣的部分，但我不需要关心这个按钮如何对齐，或者使用了哪个**Tailwind**类，或者很多细节是无聊的，很多其他细节是有趣的。但我认为它更多是关于系统架构，而不是必须阅读每一行代码。

<details>
<summary>Original English</summary>

**Peter**: and at the same time I spent so much time to like restructuring I mean I mean like even even today like I I really wanted to get this **PR** in where it was like 15,000 line change where in my I moved everything over to a plug-in architecture where I was so excited about and I care a lot about the structure. Did I read all the code? No, because a lot of code really is just boring plumbing. Well, what are most apps? Like data comes in from an **API** in one form. You like you parse it, you package into a different form. Hey, you store it into database and it's a different form. It comes out again into a different form. Then it's like **HTML** or whatever. And you type in something it's a different form again. And all you do is like you're massaging data in different forms throughout your app. This is what most apps are. We are pretty chasing printers. And the and the the really the hard part is solved by **Postgress** 30 years ago by some neck birds. Uh that's that's really what a lot of software is like. There's always some interesting parts, but I don't have to care how this button is aligned or which **tailwind** class is used or or like many details are boring and many other details are interesting. But it I think it's much more about system architecture than having to read every single line.

</details>

### AI驱动的工作流与Agentic Engineering

**主持人**: 现在，展望未来，你的工作流程是怎样的？比如，当你开发**Cloudbot**时，你是在使用一个终端、多个终端，哪些工具？以及你是如何，你知道，就像你说的，你没有审查代码，但你仍然在思考架构。你的一天平均是怎样的，就工具而言？你知道，你必须向一个可能加入团队的开发者解释。你知道，在某个时候你没有明白，它看起来是怎样的？

<details>
<summary>Original English</summary>

**主持人**: Right now jumping forward, what is your workflow like? Like like when you're working on on **cloud bot**, are you using a terminal, multiple terminals, which which tools and and how are you you know like you said you're not you're kind of like not reviewing the the code, but you're still thinking about architecture. Like what does your average day look like in terms of tooling? You know, you have to explain to a developer who might join the team. you know, at at one point you didn't get like what does it look like?

</details>

**Peter**: 这很有趣。让我们稍微回顾一下。我们在四月的时候使用了**Cloud Code**，然后我真的上瘾了。然后我做了一些，我有一个阶段使用了**Cursor**，然后我用了一点**Gemini 2.5**。然后我们有了一个**Opus 4**的阶段。我把很多朋友都拉进来了，比如我认识**Armen**和**Mario**，他们都来自**Vinner**。他们都沉迷于AI，因为我上瘾了。你知道，我的热情感染了他们，然后他们尝试了，然后最终他们也都在凌晨五点醒着。我称之为“黑眼圈俱乐部”。我的意思是，我之所以在**伦敦**发起了一个我称之为“**Cloud Code**匿名”的聚会，是因为它有点像毒品，因为它太有趣了。对我来说，真正让我震惊的是我意识到我现在可以构建一切。以前你必须真正选择你要构建哪个副项目，因为软件很难。是的，它仍然很难。但现在，我就是我之前谈到的那种摩擦，我在这项技术上非常擅长，而在那方面又很糟糕，我当时想，哦，让我们用**Go**语言来做**CLI**。我对**Go**一无所知。但我对系统有很好的理解，一旦你有了这种理解，你就会培养出一种感觉，什么是对的，什么是错的，它本身就是一种技能。我记得有一条**Twitter**推文说：“哦，当你写代码时，你会感受到摩擦，这就是你构建良好架构的方式。”我在提示时也感受到了同样的摩擦，因为我看到代码飞速生成。我看到它需要多长时间。我看到代理是否会反抗。嗯，我看到它创建的东西是混乱的还是有意义的。当我提示时，我已经知道它需要多长时间。如果它花费的时间长得多，我就知道我在某个地方搞砸了。

<details>
<summary>Original English</summary>

**Peter**: It's interesting. Let's let's let's go a little bit. We were we were in in in April with **Cloud Code** and then I got really hooked and then I did some I had a phase where I did **cursor** and then I did I I used **Gemini 2.5** a bit. Then we had this phase with **Opus 4**. I hooked up a lot of my friends like I know I know both **Armen** and and **Mario from Vinner**. They got they got **AI** pill because I I was addictive. You know, my my enem was like confusing them and then they tried it out and then and then eventually they also were up at 5:00 a.m. and I called it like the black eye club. I mean, there's a reason like I I I I started a meet up in **London** that I called called uh **Cloud Code Anonymous** because because it's it's a little bit like a drug because it's so it's so much fun. Like to to me what what what blew my mind so much was this realization that I can build everything now. Before you had to really pick which side project you build because software is hard. Yeah, it's still hard. But now like I I am this this friction that I talked about where I'm so good at this at this technology and I'm like so bad at this and I'm like oh let's make the **CLI** in **Go**. I have no clue about **Go**. But I have I have a good system understanding and once you have that is like you you develop a feeling what's right what's wrong like it's it it is a skill in itself. I remember there was this tweet where someone said, "Oh, when you write the code, you you feel the friction and that's why that's how you make good architecture." I feel the same friction when I prompt because I I see the code flying by. I see how long it takes. I see if like the agent pushes back. Um I see if what it creates looks like messy or like makes sense. When I prompt, I I have a hint already how long it's going to take. If it takes much longer, I understand that I messed up somewhere.

</details>

**主持人**: 你有点感觉到模型了。你知道，你知道。

<details>
<summary>Original English</summary>

**主持人**: You kind of feel the model. you you know you know

</details>

**Peter**: 是的，通常就是这样，或者如果它运行。

<details>
<summary>Original English</summary>

**Peter**: yeah usually it's like this or if it runs

</details>

**主持人**: 我觉得这很像一种共生关系，我学会了如何说话。

<details>
<summary>Original English</summary>

**主持人**: I I feel it's very much a symbiosis like I I learn to to talk

</details>

**Peter**: 我甚至敢说，那种语言更多。所以，就像我使用这些东西的知识提高了，模型也改进了。然后，从四月到现在，我会说，是的，转折点是夏天，那时它变得如此之好，以至于你可以不手动编写代码来创建软件。但真正让我信服的改变是**GBD 5.2**，我认为它被低估了。我不知道为什么所有这些人仍然使用**Claude Code**。我有点明白，这是一种不同的工作方式，但**OpenAI**在那里做的东西简直是疯狂的好。我输入的几乎每一个提示都能得到我想要的结果，这太疯狂了。就像在**Cloudbot**上，我最新的产品，我并行使用了五到十个代理。如果你非常专注于**Cloud Code**的构建，你必须忘记很多为了用**Cloud Code**创建良好输出所做的那些愚蠢的事情。我的意思是，我也见过那个团队，他们创造了一个全新的类别。**Cloud Code**是一个定义了类别的产品，它对于通用计算机工作来说非常棒，对于编码来说也非常好。我几乎每天都还在使用它。但对于在复杂应用程序中编写代码，**Codex**要好得多，因为它需要十倍的时间。嗯，**Claude**会阅读三个文件，然后自信地创建代码，然后你必须真正引导它，推动它，让它阅读更多的代码，这样它就能看到你的代码库的更大图景，从而更好地融入新功能。而**Codex**只会默默地阅读文件十分钟，如果你只在一个终端上工作，我完全理解你为什么觉得这难以忍受。但我宁愿选择一个你不需要告诉它做什么的东西。你知道，这也是人们不明白的地方，我与模型进行对话。就像，哦，让我们看看这个，对于这个结构我们有什么选择？你考虑过这个功能吗？因为每一个会话，模型都从对你的产品一无所知开始，而你有时必须给它一些提示。这个和那个怎么样？这样它就能探索不同的方向，你不需要计划模式。我只是在进行对话，直到我说“构建这个”，它才会构建。有一些触发词，因为它们都有一点“触发饥渴”，但只要我说“让我们讨论”或“给我选择”，它们就不会构建东西，直到我说“构建”。

<details>
<summary>Original English</summary>

**Peter**: may I even say dare or that language more so it's like my my knowledge how to use those things improved and also the models improved and then and then like over the time between between April and now I would say yeah the inflection point was summer where it just got so good that you could you create software without actually writing code by hand. But the real that change that like sold it for me is was again **GBD 5.2** that was again I think it's underrated. I don't know I don't know why why all these people still use **cloud code**. I I I kind of get it. It's it's a different way of working but whatever **OpenAI** cook there is insanely good. pretty much every prompt I type gives me the result I want which is insane like like on on on **cloudbot** the my latest product I use between five and 10 agents in parallel if you're very much **cloud code** build you have to forget quite a lot of the the silliness that the things that you have to do to create good output with **cloud code** I mean I also met that team and and they created a whole new category. Like **cloud code** is is is a category defining product and it is amazing for general purpose computer work and it is is really good for coding and I I I I still use it almost every day. But for writing code in complex applications, **Codex** is just so much better because it it it takes 10 times longer. um **Claude** would read three files and then be confident enough to just like create code and then you really have to steer it and push it so it reads more code so it gets it sees a bigger picture of your codebase so that it it it weaves in new features better and **Codex** will just like be silent and just read files for 10 minutes and if you if you only work on one terminal I completely understand how you how you find this unbearable But I rather have something where it's also you don't tell it what to do. You know this is this is also something that people don't get like I have a conversation with the model. It's like oh let's look at this what what what what options do we have for this structure? Did you consider this feature? It's like because every every session is like the model starts from having no understanding about your product and you have and and sometimes you have to just give it a little bit of pointers. What about this and this? So it explores different directions and you don't need plan mode like I'm just having a conversation until I say build this it will not build this. There's some trigger words because it it is they all are a little trigger hungry but as soon as I say let's discuss or give me options they will not build things until I say build.

</details>

**主持人**: 所以，你大部分的提示，或者很大一部分，都是这种对话，你基本上是和代理一起规划？

<details>
<summary>Original English</summary>

**主持人**: So so a lot of a lot would you say a lot of your prompting or a good part of it is this conversation where you are pretty much planning together with the agent.

</details>

**Peter**: 是的。就像，我说“这个怎么样？”然后你提醒他们，就像，“好的，我们需要文档，哪里是好的位置？”它会给我一些建议，我说“不，这应该是一个独立的页面，我们需要配置吗？这如何适应这个其他功能？”就像我正在设计系统，因为我对我的产品如何，它的形态如何有系统性的理解。我没有逐行代码的理解，那是**Codex**为我做的，但我是架构师。

<details>
<summary>Original English</summary>

**Peter**: Yeah. It's like what about like I say okay then you remind them it's like okay we need documentation what would be a good spot it would like give me some recommendations I say no this should really be its own page do we need a configuration how how does this fit into this other feature it's like I am designing the system because I have this I have this system understanding about how how is my my product how are the shapes looking I don't have a line by line code understanding that's that's what **Codex** does for me but I'm the architect you

</details>

**主持人**: 这听起来有点像你几乎，你知道，几年前这种风格完全过时了。但当时有一种想法，你会有一个大写的“A”的架构师，他以前是软件开发者，但他们不再亲自动手，因为他们花了很多时间理解业务，并且有这些开发者在他们手下工作。有些公司仍然有点像这样运作，但大多数现代公司不会。但有些银行等等。我在那里遇到过一些人，他们是“大写A”的架构师。他们做系统规划。他们与同行架构师交谈。他们有蓝图，然后他们真的把它传达给团队，显然每个人都讨厌这种模式，因为你知道，作为人，你总是想要更多。架构师从来不会为这些事情值班，所以它在实践中就崩溃了，很多大公司都转向了资深工程师模式，大家都在一起工作。当然，有些人可能有更多的投入，但这听起来就像是一个世界，你就是那个架构师，你知道，你有你的小代理人来编写代码，只不过在这种情况下，你当然要负全部责任，因为你仍然是一个个人贡献者。你不是，你不是一个，好吧，你可能会说你是代理人的经理什么的，但代码是你的。这是你的责任。你会值班。如果你，你知道，如果你发布了导致**CloudBot**崩溃的代码，而它最近确实崩溃了，你就要为此负责，对吧？就像，我认为这个系统中的区别在于，当它在公司中时，架构师在某种程度上被屏蔽了他们的工作产出，因为有太多的人和太多的流程等等。

<details>
<summary>Original English</summary>

**主持人**: It sounds a little bit like you're almost, you know, for years back this this totally came got out of style. But there was this idea that you would have the architect with a capital A who used to be a software developer, but they're not hands-on anymore because they spend a lot of time understanding the business and they have these developers working underneath them. And some companies still kind of work a little bit like this, but most modern companies don't. But some banks, etc. I met people there who are capital architects. They do the system plan. They talk with fellow architects. They have the blueprint and then they literally pass it down to the team and everyone hates this model obviously because you know again like I I think as people you kind of want more. The architect is never on call for for this stuff and so it just kind of breaks down in practice and a lot of large companies just move to the staff engineer model where you're kind of all working together. Of course, there's people who make who might have more input, but sounds like it's almost like this world where you are the architect who kind of, you know, you have your little agents who who do the code, except in this case, you are of course fully responsible because you're still an individual contributor. You're not you're not like a okay, you might say you're a manager of agents or whatnot, but the code is is yours. It's your responsibility. You're going to be on call. If you know, if you push out code that takes down **CloudBot**, which it did just recently, you're on the hook for it, right? like and I think the the difference in this system when when it was in companies it was the architect was kind of shielded from the output of their work because there's so much people and so much process etc.

</details>

**Peter**: 嗯，我不会说架构师。我喜欢“建造者”这个词。

<details>
<summary>Original English</summary>

**Peter**: Well, I wouldn't say architecture. I I like the word builder.

</details>

**主持人**: 建造者。是的。

<details>
<summary>Original English</summary>

**主持人**: Builder. Yeah.

</details>

**Peter**: 而且我认为，对于那些成功使用AI的人和那些真正挣扎的人，我看到了几个类别。

<details>
<summary>Original English</summary>

**Peter**: And and and I think also that's there's a few categories that I see for people that are highly successful using using **AI** and people who really struggle.

</details>

**Peter**: 我更关心结果，产品。我非常关心它的感觉和一切，但底层管道如何工作。

<details>
<summary>Original English</summary>

**Peter**: I care more about the outcome, the product. I very much care about how it feels and everything, but how the plumbing works underneath.

</details>

**Peter**: 我关心结构，但你知道，不是最大的细节。然后有些人真的喜欢解决难题，比如思考算法，他们不太喜欢构建一个带有所有营销的产品，他们更喜欢解决难题，这些人真的会挣扎，而且经常拒绝AI，或者变得非常沮丧，因为这正是AI所做的工作，它解决了难题。现在有时我给它一些提示，但很多时候我发现，今年我学到的关于软件架构和设计的东西比过去五年都多。那些“怪物”内部有太多的知识，一切都只隔着一个问题，但你必须知道该问什么问题。当然，我也构建了这个**Twitter**的东西，它还没有完成，我真的希望有一天能回到它上面。

<details>
<summary>Original English</summary>

**Peter**: I care structurally, but you know, not to the not the biggest detail. And then there are people who really love to to code on hard problems like think about algorithms don't really like the I'm building a product with like all the marketing all the they they more like they like to solve hard problems and those are the people who really struggle and and and often reject **AI** or get really sad because that's exactly the job where that **AI** does like it solves the hard problems. Now sometimes I give it some pointers but many times I learned I learned more this year than last five years around around software architecture and designing. I the there's so much inside those monsters um on knowledge and everything is just a question away but you have to know what question to ask. Of course I also built this **Twitter** thing and it's still not done and I and I I really hope I I'll get back to it at one one time.

</details>

**Peter**: 一切都正常工作，但如果我使用得更多，在某个时候会变得非常卡顿和奇怪，然后又恢复正常，我就是搞不明白。而且调试起来非常困难，因为它不容易重现。就像你使用得越多，事情就变得越慢。我基本上在**Psql**（**Postgres**）中编写了软件，当某些插入操作发生时，它会被触发，然后数据库就会变得非常繁忙，而模型无法看到它，因为它被抽象得太远了，你知道，那些模型非常擅长追踪，但这只是一个副作用，很难发现，因为它只存在于这个文件中。

<details>
<summary>Original English</summary>

**Peter**: everything worked but if I used it more at some point things got really laggy and weird and then it worked again and I just couldn't figure it out and it was like really difficult to debug because it was not easy to reproduce. It was just like you use it more and things get really slow. I basically had like software in in in in **Psql** like in **Postgress** that would be triggered when certain inserts were were doing and then the database would would get really busy and the model couldn't see it because it was it was it was so far abstracted from all the you know like those those models are really good at tracing through but this was a side effect that was so hard to see because it was only in this one file

</details>

**Peter**: 一个函数，与任何其他东西都没有连接。嗯，它的名字也不容易抓取。我只是从来没有问对问题，直到我问：“这个和那个有什么副作用吗？”我找到了它，并修复了它。就像，但一切都只是一个正确的问题。

<details>
<summary>Original English</summary>

**Peter**: a function that had no connection to anything else. um with a name that was not easy grabbable. I just never asked the right question until I was like do we have any side effects for this and this and I found it and I fixed it and it's like but I everything is just the right question away.

</details>

**主持人**: 是的。但你需要有知识，专业知识。

<details>
<summary>Original English</summary>

**主持人**: Yeah. But you you need to have like knowledge, expertise.

</details>

**Peter**: 是的。你经验。

<details>
<summary>Original English</summary>

**Peter**: Yeah. You experience

</details>

**主持人**: 我的意思是，所以，所以这些人拒绝了，然后那些不太关心内部管道，但只是兴奋地构建东西的人，他们非常成功。还有一件事也帮助了我，你知道，当你经营一家公司，然后你雇佣员工时，你不能对每个人都吹毛求疵，让他们完全按照你的方式写代码。有很多没有管理过团队的人，他们没有这种经验，不知道如何放松一点，理解是的，这可能不是我想要的代码，但它会让我更接近我的目标。对于任何不完美的东西，我们总能做得更好，投入更多时间。我非常相信这种迭代改进。我必须学会在我的公司里放手一点。所以，当我拥有**Cloud Code**时，感觉就像我拥有了不完美、有时愚蠢、但有时非常出色的工程师，我必须引导他们，我们一起为一个共同的目标努力。这感觉很像再次成为老板。

<details>
<summary>Original English</summary>

**主持人**: you you I mean so so so these are the people who rejected and then the people who who care a bit less about how it's being plumbed internally but are just excited to build things. They're really successful. And one thing that also helped me is, you know, when you run a company and then you hire people, you can't breathe on everyone's neck and like make them have the line of code exactly that way. And there's a lot of people who who didn't manage a team, they didn't had this experience how to how to relax a little bit and understand that yes, this maybe is not exactly that code that I want, but it will get me closer to my goal. And for anything that is like not perfect, we can always make it better and like put more time into it. I very much believe into this iterative improvement. I had to learn to let go a little bit at my company. So, so, so then when I when I had **cloud code**, it kind of felt like I have like I have like imperfect, sometimes silly, but sometimes very brilliant engineers that I have to steer and where we where we work together on a common goal. It felt a lot like being the boss again.

</details>

**主持人**: 是的。现在很有趣，你知道，你用传统方式构建软件，我想在AI出现之前，你已经有15年甚至更长时间了，你非常擅长领导团队，并且保持高标准。你也非常关心那里的工艺。你现在已经“感觉式编码”或者与代理合作了一年。你比较一下两者。你觉得呢？你觉得真正改变了什么？你觉得尽管如此，有哪些东西保持不变？

<details>
<summary>Original English</summary>

**主持人**: Yeah. And and interesting now you know you you built kind of software I guess the traditional way you know pre **AI** for 15 years or even more than 15 years and you got really good at being also leading a team and then how to have high standards. You really cared about the the craft there as well. You've now kind of been I guess vibe coding or working with agents for a year. You're comparing the two. What do you think? What do you think really really changed? And what do you think are things that kind of stayed the same despite all

</details>

**Peter**: 首先，我不喜欢“感觉式编码”这个词。

<details>
<summary>Original English</summary>

**Peter**: First of all, I don't like I don't like the term **VIP** code.

</details>

**主持人**: 好的。我们应该怎么称呼它？

<details>
<summary>Original English</summary>

**主持人**: All right. How should we call it?

</details>

**Peter**: 我认为，我认为“感觉式编码”现在几乎是一种，我称之为“代理工程”，带有一个小星号。感觉式编码从凌晨三点开始。

<details>
<summary>Original English</summary>

**Peter**: I I think I think I think **VIP** coding is by now almost a I I call it I tell people I do what I do is agending engineering with a little star. **VIP** coding starts at 3:00 a.m.

</details>

**Peter**: 现在，因为所有编写代码的繁琐工作都被自动化了，我可以更快地行动。但这也意味着我必须思考更多。我仍然非常投入。对我来说，这完全和以前进入“心流状态”的感觉一样，但它在精神上更累，因为我不是管理一个员工，而是管理五到十个都在做事情的员工，我从这部分切换到那部分，再到另一部分。主要是因为我正在设计这个新的子系统或这个功能，然后我知道**Codex**可能需要40分钟或一个小时来构建它。所以我想先做好计划，然后我构建它，然后我就会转到其他事情上，但那时这个正在“烹饪”，然后我做这个，然后这个正在“烹饪”，然后这个正在“烹饪”，然后到某个时候这个正在“烹饪”，然后这个正在“烹饪”，然后我回到这个。所以，我在脑子里切换了很多。我希望我不需要这样做。我想这只是一个过渡性问题，在某个时候，我们会有如此快的模型和系统，以至于我可以少一点并行化。但为了保持“心流状态”，我需要大规模并行化。所以这就是它的工作方式。我回到那里，也许再调整一下。但通常只是尝试一下，也许这个就准备好了，因为它只花了20分钟。所以我不断地跳来跳去。通常有一个主要项目是我的重点，我有一些卫星项目也需要关注，但我可能花5分钟，它会做半小时的事情，然后我尝试一下，它不需要那么大的脑力。

<details>
<summary>Original English</summary>

**Peter**: Now like because all the the mundane stuff of writing code is automated away, I can move so much faster. But also means like I have to sing so much more. I'm still very much in the flow. Like it is it is completely the same feeling as for me as as I I very much get in this flow state but it is mentally even more taxing because I have I don't have one employee that I manage. I have like five or 10 that all work on things and I switch from this one part to this other part to this other part to this other part. mostly because of I'm designing this new subsystem or like this feature and then I know that it will probably take **Codex** like 40 minutes or or one hour to build. So like I want to like have the plan right and then I build it and then I'll I'll move on to something else but then this is cooking and then I work on this and then this is cooking and then this is cooking and then at some point this is cooking and then this is cooking and then I go back to this one. So like I I I I switch around a lot in my head. I wish I wouldn't have to do that. Like I'm sure this is a transitionary problem and at some point we have we have models and and systems that are so fast that that I can paralyze a little less. But to stay in the float flow state I need to massively parallelize. So that that's that's how it work. I go back to there and and maybe tweak it a little bit more. But usually just like try it out and maybe then this is ready because this only took like 20 minutes. So like I constantly jump around. Usually there's there's one main project that has my focus and I have like some satellite projects that also need attention but where I can make maybe I spend 5 minutes it does something for half an hour and and and I try it and it doesn't need uh so much capacity up there.

</details>

**主持人**: 这听起来几乎像是，你知道，我想到了两件事。一个是，有些游戏你需要管理一个厨房和员工，你看到食谱或者什么东西出来，你需要跳过去再做一次。

<details>
<summary>Original English</summary>

**主持人**: This almost sounds you know like two things come to mind. One is there's these like games where you have to manage a kitchen with the employee and and you see like the recipes or something come out and you need to jump and do it again.

</details>

**Peter**: 就像**星际争霸**一样，你知道，你有你的主基地，你还有你的副基地。它们为你提供资源。

<details>
<summary>Original English</summary>

**Peter**: It's like **Starcraft**, you know, you have like your main base and you have like your side bases. They give you resources.

</details>

**主持人**: 那个也是。还有一件事，你刚才说“我去那里看，然后做决定”，这让我想起了我看到国际象棋大师同时下多盘棋。你有时会看到他们下20盘棋，他们总是，他们走到那里，他们就像，他们看到棋盘上的情况，他们做出决定，对于一些棋盘，他们会停下来更长时间，我想是更好的棋手或更好的对手。感觉，你知道，他们都在100%地占用他们的大脑。你也在占用你的大脑，你正在尽可能地扩展自己，只要你能进行上下文切换。

<details>
<summary>Original English</summary>

**主持人**: That as well. And also one thing that just came to mind as you said like I go there and I watch this and I make a decision is when I see the chess grand masters play multiple boards at once. You see see sometimes they 20 boards and they always all you they go there they kind of you can see that they just like see what's on that board. they make a decision and for some boards they stop for longer I guess better players or better opponents. It feels, you know, both they're occupying 100% of of their brain. You're occupying your bay and you're you're kind of scaling yourself as long as you can context switch.

</details>

**Peter**: 区别在于，使用**Claude Code**之前，你必须以不同的方式工作，因为它更快，但输出通常第一次尝试不会成功。所以它会做一些事情，但它忘记更新其他三件事。它会崩溃，或者你给它。

<details>
<summary>Original English</summary>

**Peter**: The difference the difference was up until with with **cloud code** I you have to work a little different because it is much faster but then the output often doesn't work on the first try. So like it makes something but then it forgot to update three other things. it crashes or you give it

</details>

**Peter**: 与编码代理有效合作的好方法是始终“闭环”。它需要能够自行调试和测试。这是个大秘密。嗯，这也是我认为它变得如此有效的部分原因。嗯，但是的，使用**Claude Code**，我经常不得不回去修复那些东西，或者它需要大量的迭代。所以最终它并没有快多少。它只是更具交互性。

<details>
<summary>Original English</summary>

**Peter**: the good thing how to be effective with coding agent is always like you have to close the loop. It needs to be able to debug and test itself. That's the big secret. Um that's also something I I think that's part of why it got so much more effective. Um but yeah, with with with **clock code** you I often had to go back and like fix up the stuff um or it just takes a lot of iterations. So in the end it's not that much faster. It's just more interactive.

</details>

**Peter**: 而现在，有了**Codex**，它几乎总是能做对。我的通用策略总是，我构建一个功能，当然，你总是让它编写测试，并确保它运行测试。

<details>
<summary>Original English</summary>

**Peter**: And and these days with **Cordex** it just almost always gets it right. My my general strategy is always I I build a feature of course you and and of course you always let it write tests and you make sure that it runs it.

</details>

**主持人**: 它运行它们。是的。

<details>
<summary>Original English</summary>

**主持人**: It runs them. Yes.

</details>

**Peter**: 所以即使我写一个**MAC**应用，我不知道，就像我昨天调试这个功能，**MAC**应用找不到远程网关，但**Typescript**中的相同代码可以找到。但**MAC**应用调试起来有点烦人，因为它会构建它，你必须启动它，你必须查看它，你必须说不，这不起作用。所以现在我只是说，你知道，你要构建一个**CLI**，只是为了调试，它会调用所有相同的代码路径，你可以自己调用，然后你只需迭代并自己修复它，然后它就会“烹饪”，它“烹饪”了一个小时，然后完成了，它告诉我这里和这里有一个竞态条件，还有一个配置错误，等等等等。就像，是的，这听起来很合理。我不需要，我不需要看那些代码。就像，但你不需要看它，因为你设置了验证循环，你相信它，因为它运行了它。我的意思是，我想这与有时你在大公司处理大型项目时，所有测试都通过了，这并不意味着100%没问题，但它是一个很好的指标。所有新代码也有测试，你知道，有人考虑过并测试过它，等等。

<details>
<summary>Original English</summary>

**Peter**: So even even when I write a **MAC** app, I don't know like I I just yesterday I debuged this feature where the **MAC** app couldn't find a a remote gateway but like the the same code in **Typescript** could but makeup is kind of annoying to debug because like it builds it you have to start it you have to look at it you have to like say no this is not working. So now I just said it like you know you're going to build a **CLI** just for debugging that invokes all the same code path that you can call yourself and then you just iterate and you fix it yourself and then it will just cook and it just cooked for an hour and it was done and it told me like there was a race condition here and here and like a misconfiguration blah blah blah and like yeah it sounds sensible. I don't need to I don't need to see that code. It's like but but you don't need to see it because you set up the validation loops and you trust that because it ran it. I mean this is I guess I guess it's not too dissimilar to like sometimes when you work on a large project in a large company when all the tests pass I mean it doesn't mean 100% it's there but it's it's a pretty good and and all the new new code has test as well you know someone thought about it and tested it and and all that.

</details>

**Peter**: 所以即使在我最新的项目中，我们总是有bug，但像反重力一样，它在循环中，在格式中，处理工具调用时有一些奇怪之处。所以你必须做一些过滤。

<details>
<summary>Original English</summary>

**Peter**: So even even on my on the very latest project we always had bugs but like anti-gravity has like a certain a certain weirdness with how it takes tool calls in the loop in the in the format. So you have to do like some filtering.

</details>

**主持人**: 是的。

<details>
<summary>Original English</summary>

**主持人**: Yeah.

</details>

**Peter**: 那就坏了一堆。我花了太长时间才意识到我在做什么？我只需要自动化它。所以我只是去找**Codex**。就像设计生命周期测试，它会启动一个**Docker**容器，安装整个东西，启动一个循环，使用我的API密钥从这个和那个文件。然后你告诉模型读取一张图片，先创建一张图片，然后查看图片，看看它看到了什么。所以我不仅仅是告诉循环，我仍然告诉工具调用，让它工作。然后它自己解决了。这花了很长时间，但它测试了我所有的API密钥，比如从**Entropic**到**SEI**到**GLM**，所有的一切，它修复了所有那些小索引，有时工具调用不起作用，或者顺序错了，因为我闭环了，就是这样。

<details>
<summary>Original English</summary>

**Peter**: And that broke a bunch. And it actually took me way too long to realize like what am I doing here? I just need to automate this. So I was just going to **codeex**. like design life tests that spin up a **Docker** container, install the whole thing, spin up a loop, use my **API** keys from this and this file and then you tell the model to read an image, create an image before and then look into the image and see what it sees. So I I don't not just tell the loop, I still tell tool calling, make it work and then it solved itself. It took forever, but it it it it tested all my **API** keys like from from **Entropic** over **SEI** over **GLM** like everything and it fixed all those little indicies where where sometimes the tool calling didn't work or the ordering was wrong because I closed the loop and and that's that's

</details>

**主持人**: “闭环”的意思是让代理能够验证自己的工作？

<details>
<summary>Original English</summary>

**主持人**: and closing the loop you mean just have a way to to have have the agent be able to validate its work?

</details>

**Peter**: 是的，这就是为什么我们目前拥有的这些模型在编码方面如此出色。但有时在创意写作方面表现平平，因为没有简单的方法来验证，对吧？但代码我可以编译，我可以lint，我可以执行，如果设计得当，我可以验证输出，你就会有一个完美的循环。即使现在，即使现在对于网站，我构建的核心可以通过**CLI**运行，所以就像我有一个完美的执行循环，因为浏览器循环非常慢，你想要一个快速循环的东西。

<details>
<summary>Original English</summary>

**Peter**: Yeah, that's why that's the whole reason why why those models that we currently have are so good at coding. But like sometimes mediocre good at writing creative because there's no easy way to validate right but code I can compile I can lint I can execute I can verify the output if you design it the right way you have a perfect loop like even now even now for for websites I built the core in a way that can be run via a **CLI** so it's like I have this I have this perfect uh execution loop because the the browser loop is insanely slow you want something that that loops fast.

</details>

**主持人**: 所以听起来有一件事并没有真正改变，就像以前一样，我们以前也有过这种情况，后端或业务逻辑繁重的东西可以很容易或更容易地验证其正确性。

<details>
<summary>Original English</summary>

**主持人**: So it sounds like one thing that is not really changing from like before is we had this before like backend or business logic heavy he heavy thing could easily be or more easily be verified that it's correct.

</details>

**Peter**: 实际上，使用代理编码会让你成为一个更好的编码员，因为你必须更努力地思考你的架构，以便更容易验证，因为验证是做好事情的方式。嗯，那么回想一下，甚至在AI出现之前，对于复杂的系统，一旦你找到一个以前构建过这些东西的人，他们会从如何使其可测试开始，对吧？就像你需要设计接口、类，使其可测试，你需要考虑我是否要模拟东西，我是否要使用mock，我是否要使用端到端测试，这会很长等等。但这些都是非常困难的架构决策，一旦你做出它们，我想就更难改变了。用你的话说，你知道，如果你要求模型进行大规模重构，它会“烹饪”更长时间，你知道，如果你有测试，它会做对，但你知道现在我们仍然有这些权衡。

<details>
<summary>Original English</summary>

**Peter**: Surprise actually using aentic coding makes you a better coder because you have to have to think harder about your your your architecture so that it's easier verifiable because verifying is the way how to make things good. Well, then remember back back even before **AI** for complex systems like once you got someone who built these things before what they started with how do we make it testable right like you you need to design interfaces classes testable you need to think about like am I going to fake things will I use mocks will I use end toend testing which will be long etc but these are like really hard architectural decisions and once you make them they're I guess harder to change in your in your word you know like the model would cook a lot longer if you asked it to make a massive refactor acture and you know if you have test it'll get it right but you know now these we we still have these trade-offs

</details>

**Peter**: 是的，它仍然是软件。我会说我现在写的代码比我自己写代码时更好，而且我以前写的代码也很好，但即使在公司里，有时测试是如此乏味，你会遇到所有那些边缘情况，以及分支。

<details>
<summary>Original English</summary>

**Peter**: yeah it's still it's still software it's it's I I would say I write better code now that I don't write code myself anymore and I wrote really good code but but like even back at the company sometimes testing was so tedious and you come up with all those edge cases and and and the branching

</details>

**主持人**: 我的意思是，除了**Ken Debbec**，我非常尊敬他，他参加了播客，我们，我们，我们谈论过，他仍然坚持测试先行，他告诉我他不会因为我不写测试而生我的气，但如果你想写，你知道，低质量的代码，那是你自己的事。呃，但我认识的开发者不多，包括我自己，我从来不喜欢写测试，即使我假装喜欢，我从来没有真正喜欢过。这有点像写文档和写测试，对我来说，它从来不是一种创造性的表达。现在它变得如此之好，我会说，对于我最新的项目，我有非常好的文档，而且我自己一行都没有写。不，我不写测试，我不写文档，我向模型解释权衡，比如我们为什么这样做，然后告诉它，比如写一个对初学者友好的入门部分，然后在结尾添加更多技术细节，它做得非常好。我从来没有一个项目有这么好的文档，仅仅是因为每次我设计一个功能，这都是过程的一部分。而且，就像测试一样，我当时想，好吧，我们构建了这个，我们要怎么测试它？是的，我们可以这样做，那样做，那样做。如果我们这样构建它呢？哦，是的，那样我们就能更好地测试它。所以，这现在是我思考的一部分，因为我总是想，我如何闭环？模型总是需要能够自行验证工作。嗯，这会自动引导我走向更好的架构。

<details>
<summary>Original English</summary>

**主持人**: I mean outside of **Ken Debbec** who I deeply respect and he was on the podcast and we We we we talk like he he still writes test first and he tells me that he's not mad at me for not writing it but if you want to write like you know poor quality code it's on you. Uh but I don't know many developers myself included I never liked writing tests and even even when I pretended that I did I I just never did. It's a little bit like writing documentation and writing tests to me it was never a creative expression. It is so good now like I I would say for my last project I have really good documentation and I didn't write a single line myself like no I don't write the test I don't write documentation I explain the model the trade-off so like why we did something like this and then tell it like like write that write the entrance section beginner friendly and then add more technical detail at the end and it is so good I never had a project with that good documentation just by every time I design a feature this is a part of this a part of the process And also like testing I was like okay we built this how are we going to test this? Yeah we could do this and this and this. What if we build it this way and oh yeah then we can test it better. So it's like this is now part of my singing because I I always think like how do I close the loop? How do I the model always needs to be able to verify the work itself um which automatically steers me to better architecture.

</details>

**主持人**: 那么，你认为为什么会有很多经验丰富的开发者仍然对AI能做很多事情的想法持抵触态度？

<details>
<summary>Original English</summary>

**主持人**: So why do you think there's, you know, a bunch of like experienced devs who are still pushing quite a bit back on on just like the idea that **AI** can do a lot of this?

</details>

**Peter**: 那是一周前的事了。我偶然发现了一篇**Nala Coco**的博客文章，我非常尊敬他，也从他那里学到了很多。这篇博客文章只是在贬低当前模型的工作方式。他所做的就是测试了五六个模型，包括一些毫无意义的模型，比如**OpenAI**的1200亿参数开源模型，它不足以编写好的代码。你知道，他只是写了一个提示，据我所知，网站上没有太多信息，但对我来说，听起来他写了一个提示，把它放到**Claude Web**上，然后按了发送。然后他拿了输出运行，它没有编译，他很失望。但他就像：“当然不会工作。你认为我第一次尝试就能写出没有bug的代码吗？”这些小模型是我们集体人类知识的幽灵。它们在很多方面工作方式非常相似。当然，你第一次尝试不会做对。会有错误。这就是为什么你必须闭合反馈循环。而且你也不仅仅是向模型发送一个提示，你开始了一场对话。嘿，这就是我想构建的东西。他抱怨它使用了旧的API。是的，你没有指定**Mac OS**版本。所以它就假设默认使用旧的API，因为缺少这些信息，而且它是在大量数据上训练的，不仅仅是过去两年的数据，而且旧数据比新数据多。所以，你越了解这些小“野兽”如何思考，你就会越擅长提示。嗯，然后他可能花了一天左右的时间玩它，然后就决定这项技术仍然不是很好。但要有效使用，你必须投入更多的时间。你知道，这就像，你知道如何弹吉他，我让你弹钢琴，你试了一下。你就像：“哦，这太糟糕了。我还是回去弹吉他吧。”不。不。这是一种不同的构建方式。这是一种不同的思维方式。你不知道我多少次在凌晨三点对**Cloud Code**大喊大叫，因为它做了一些愚蠢的事情。我慢慢开始理解这些东西为什么会按照我告诉它的方式去做。有时你甚至可以问，即使是去年，对于这个项目，上一个项目，**Cloudbot**，我感觉自己像一个人类合并按钮，因为社区正在爆发式增长，我所做的就是审查PR。我几乎没有时间自己编写代码了。

<details>
<summary>Original English</summary>

**Peter**: That was a week ago. I I stumbled over a a blog post by **Nala Coco** with love that I deeply respect and learned a lot from. And this blog post was just was a dissing of the current way how models work. And and what he did was he he tested like five or six models including some that make no sense like the the **Open EI** 120 billion open- source one that is not good enough to write good code you know it's like and he just he he wrote a prompt as far as I understand it there was there was not a lot of information on the website but to me it sounded like he wrote a prompt he put it on **claude web** and and he pressed send and And then he took the output and ran it and it didn't compile and he was disappointed. But he's like, "Of course it will not work. Do you think I can write buck-free code on the first attempt?" And those little those models are ghosts of our collective human knowledge. They work very similar in many ways. Of course, you don't get it right the first time. Like there will be mistakes. That's why you have to close the feedback loop. And also you don't just send a prompt to the model, you start a conversation. Hey, this is what I want to build. It's like you he complained that it used old **API**. Yeah, you didn't specify the **Mac OS** version. So it so so it made an assumption to default to like old **API** because that information was missing and it is it is trained on a lot of data, not just the last two years and there's just more old data than new data. So this is like the more you understand how those little beasts think, the the better you get at prompting. Um and then and then and then he he spent maybe I don't know a day or so on on playing with it and then just decided that this technology is still not really good. But to be effective you have to spend significantly more time. You know, it's it's like it's like you know how to play guitar and I put you on the piano and you tried a bit. It's like, "Oh, this sucks. I go back to my guitar." No. No. It's like it's it's a different way of building. It's a different way of thinking. You have no idea how often I screamed at like 3:00 a.m. to **cloud code** because it did something silly. I slowly started to understand why those things do what they do with like exactly the way I tell it to do things. And sometimes you can literally ask you can even even last year like I for this project I the last project like **clotboard** I feel like a human merge button because the community is like blowing off and all I do is like reviewing **PRs**. I I I I have very little time to actually write code myself anymore.

</details>

**主持人**: 一开始它经常会像，只是挑选一些东西然后关闭PR，我当时非常恼火。我当时想，你为什么要这样做？是的。当你说这个和那个的时候，我把它解释成这个这个和这个。就像，啊，我更多地学习了机器的语言。我调整了我的提示，现在我得到了我想要的东西，因为它是一种技能，就像任何其他技能一样。

<details>
<summary>Original English</summary>

**主持人**: And in the beginning it would often like just cherrypick things and would close the **PR** and I was like so annoyed. So was I'm like why are you doing this? Yeah. When you say this and this I interpret this this and this. It was like ah like I I learned the language of the machine a little bit more. I tweaked my my prompting and now I get exactly what I want because it's it's a skill like any other skill.

</details>

**主持人**: 是的。**Simon Wilson**也一直在说同样的事情，尽管他已经用了好几年了，我想每个人，我想一旦我开始使用它，我也会意识到，我做得还行，但我可以做得更好。如果我们把它放到一个真正的测试中呢？因为我认为现在公平地说，你正在构建**CloudBot**，它是一个，你知道，它不产生收入，有很多用户，它正在爆发式增长，它是一个非常酷的工具，但它不是**PSPDFkit**，**PSPDFkit**是一个有很多收入依赖的业务。如果今天，你知道，我们只是抹去了**PSPFkit**，它不存在了，你需要重建**PSPDFkit**，你现在有了这些代理，它会有多大的不同？你会信任它多少？你会委托什么？你会验证什么？以及当你，你知道，你围绕它建立了一个团队，因为它现在是一个盈利的业务，至少你需要雇佣销售人员，等等。你认为今天的团队会因为同样的产品而有什么不同？因为你，你知道，你确切地知道构建它需要什么，你也知道这些工具今天能做什么。

<details>
<summary>主持人**: Yeah. And this is like **Simon Wilson** has been saying the same thing even though he's been using it for for years and I think everyone I think once I start to use it I also realize like I'm not I'm okay at it but I I I I could do better. What if we put this to a real test? cuz I think it's fair to say that right now you're building **CloudBot** which is a you know it's not something that generates revenue there's a lot of users and it's blowing up and it's it's a really cool tool but it's not **PSPDFkit** which is a business that it's a lot of revenue is hinging over it if today you know we just wiped **PSPFkit** does not exist you need to rebuild **PSPDFkit** you now have these agents how differently would it look how much would you trust it what would you delegate what you would you validate and and when you know you built up a team around it because now it's a profitable business at the very least you need to hire sales people whatot how do you think the team would look different today with that same product cuz you you know exactly what it took to build it and you also know what these tools can do today

</details>

**Peter**: 我可以很容易地用30%的人来经营一家公司。找到那个级别的人可能会相当困难，但你，你，你想要真正资深的工程师，他们真正理解他们构建的东西，但他们也乐于授权，并且知道哪些部分是真正重要的，哪些部分。

<details>
<summary>Original English</summary>

**Peter**: I could easily run a company with 30% of the people it would probably be quite difficult to find people on that level but you you you want you want to have really senior engineers that really understand what they build but that are also comfortable in in in delegating and know which parts are actually important to to work on and which parts

</details>

**Peter**: 我可以“感觉式编码”。这仍然是我不常见到的东西。我没有看到很多，尤其是在AI世界里，**Twitter**上有很多垃圾，有很多大声疾呼但显然不知道自己在做什么的人。有很多愚蠢的概念，比如，我很抱歉，但**Ralph Wigum**那个，天哪，这又是人们用来规避**Opus**模型限制的另一种愚蠢方式，而当你使用**Codex**时，你甚至不需要这些。可能有一些情况，你有一个很长的独立任务列表可以自动化，但这通常不是软件构建的工作方式。所以有些人，我看到很多人正在构建这种复杂的编排层，然后你会有一些“野兽”会自动创建工单，然后你的代理处理工单，然后你的代理给另一个代理发邮件，然后你构建了这种复杂的混乱。为了什么？哦，是的，他们设计了规范几个小时，然后机器一整天都在构建它。我不相信这能行。这就像，这就像软件构建的瀑布模型。我们很久以前就知道这行不通。是的，人们工作方式不同，也许对某些人来说它确实有效。我只是，我只是不明白这怎么能对我有效。我必须从一个想法开始，我经常故意对代理进行“低提示”，这样它就会做一些能给我新想法的事情。

<details>
<summary>Original English</summary>

**Peter**: I can vibe. That's still something I don't see. I don't see a lot like like especially in the **AI** world, there is so much crap on **Twitter**, there's there's so many people that are loud but clearly have no clue what they're doing. There's there's so many there's so many dumb concepts around like I'm sorry, but the **Ralph Wigum** one gh like this is again another another silliness people use to work around uh model limitations of of of of **Opus** that you don't even need when you use **Codex**. There's there's maybe a few cases where you have a really long list of individual tasks that can be automated, but that's usually not how software building works. So there's these people who I see so many people building up this elaborated orchestration layers and then you have like beats that automatically creates tickets and then your agent does tickets and then your agent emails the other agent and then you build up this this elaborate mess. What for? Oh yeah, they did they design the the spec for like a few hours and then you just like the machine builds it in the whole day. I don't I don't believe this works. Like like this is this is this is the waterfall model of software building. This we learned long ago that this doesn't work. Like yes, people work differently and maybe it does work for some. I just I just I don't see how this how this could work for me. Like I I have to start with an idea and often I purposefully underprompt the agent so it would do something that would give me new ideas.

</details>

**主持人**: 嗯。

<details>
<summary>Original English</summary>

**主持人**: Mhm.

</details>

**Peter**: 然后我迭代并塑造项目，我必须点击它。我必须感受它。我觉得要制作好的软件，你知道，这些东西通常缺乏的是品味。我必须感受这个功能的感觉如何，而现在的美妙之处在于，功能是如此容易，我可以随意丢弃它，或者重新提示它。我的构建模型通常非常向前。我很少真正回滚和回头。它只是，好吧，那我们改变这个。不，我们这样做。这就像雕塑。我喜欢这种感觉，你从一块石头开始，然后你像凿子一样把它凿掉，选择不同的区域，然后慢慢地，这座雕像从大理石中浮现出来。这就是我看到构建东西的方式。

<details>
<summary>Original English</summary>

**Peter**: You like maybe like 80% of the things I assumed were like crap but like there were like two things like oh I didn't think about that way. And then I I I iterate and and and shape the project and I have to I have to click it. I have to like I have to feel it. I feel I feel to make good software I you know one thing those those things often lack is taste. I have to feel like how does this feature feel and and the beauty now is that features are so easy I can just like throw it away or like reprompt it. My building model is usually very much forward. It's very rarely that I actually revert and have to go back. It's just like okay no then let's change this. No let's do this. It's like it's like shaping. I I love how this like you start with a rock and then you like sisle away at it and like pick different areas and and and then slowly like this statue emerges out of out of marble. That's that's how I see that's how I see building something.

</details>

**Peter**: 我想，反思软件工程如何变化。这似乎是一个变化，因为在AI或任何这些代理出现之前，前期规划确实很重要。你知道，在**PSPDF**中，你坚持要求有提案，人们在前期投入大量思考来指定和做所有事情，因为构建它很昂贵。你认为这正在改变，因为编写代码的成本正在下降吗？

<details>
<summary>Original English</summary>

**Peter**: I I guess reflecting on how software engine is changing. This seems like a change because before before we had **AI** or any of these agents, upfront planning did make a difference. you know, writing at **PSPDF** could you insisted I think to have a proposal where people put a lot of thought up front to specify and do all because it was expensive to I guess to to build to to do you think this is changing because of the the cost of just writing code is is going down or

</details>

**Peter**: 我的意思是，我仍然，我仍然，我仍然计划，但我。

<details>
<summary>Original English</summary>

**Peter**: I mean I still I still I still plan and I but

</details>

**主持人**: 你仍然这样做，是的。

<details>
<summary>Original English</summary>

**主持人**: you still do yes

</details>

**Peter**: 但我不会投入那么多，因为现在尝试并查看结果，然后看看，哦，是的，这种形式可能可行，或者不，我们必须像，调整，甚至像，哦，不，我们必须完全以不同的方式做，这便宜得多，对我来说，它变得更有趣了。

<details>
<summary>Original English</summary>

**Peter**: but I don't put as much into it because I it's now so much easier to just like try and look at the results and then see if oh yeah this this shape could work or no we have to like the tweaking and even even like oh no we have to like do it a completely different way isn't so much cheaper that it's to me it became much more playful.

</details>

**主持人**: 是的。是的。我想是因为，你知道，当你工作时，即使你团队里有一个新毕业生或实习生，你知道，你给他们一些东西，他们工作一两天，现在你给他们另一个，又是一两天，你知道，我们这里说的不是几天，我们说的是几分钟，或者如果是一个长时间运行的任务，最坏情况下是10到20分钟。此外，你不仅仅是在等待那件事。你有并行运行的事情。所以，如果你愿意，那并不是很大的浪费。

<details>
<summary>Original English</summary>

**主持人**: Yeah. Yeah. I guess cuz cuz like you know when you're working even if you have like a new grad on the team or an intern you know you give them something they work it for a day or two now you give them another it's another day or two you know and and we're not talking days here we're talking minutes or like if it's a longunning task like 10 20 minutes at at worst. Plus, you're not just waiting on that thing. You have parallel things running. So, it's not that much of a waste, if you will,

</details>

**Peter**: 在**Cloud**中。一开始我有一个假设，只有一个代理，然后最终改成了多个代理，当时还有一个假设，只有一个提供商，比如**WhatsApp**，现在是多个。改变那个是如此痛苦，如果我自己写的话，那会是如此痛苦，因为你必须将所有东西都编织到应用程序的整个逻辑中。是的，**Codex**花了大约三个小时，而我可能需要两周。你知道，所以，所以那个前期规划。我本来可以在一开始就意识到这一点，但现在我知道我可以改变事情，而且更容易处理技术债务，或者你知道，你会在构建项目时发展你对项目的思考方式。这就是为什么我不相信像**Gas Town**这样的东西，你写好规范，然后它自己构建，然后就完成了。在你构建它之前，你怎么能知道你想构建什么呢？你在构建过程中学到了很多东西，这些东西会反馈到你对系统最终会是什么样子的思考中。对我来说，这非常像一个循环，直到我，你不会像这样爬山，你会绕着走，有时你会偏离一点路径，但最终你会到达山顶，我就是这样感觉的。

<details>
<summary>Original English</summary>

**Peter**: in in in in in **cloud**. At the beginning I had this assumption of like one agent and then eventually changed to multiple agents and there was the assumption of like one provider like **WhatsApp** and now it's multiple ones and changing that was like such a pain would would have been such a pain if I would have written it myself because you have to weave in literally everything through the whole logic of the application and yeah it took **Codex** like three hours it would have taken me like two weeks you know so so that upfront planning. I I could have realized that in the beginning, but now I I know that like I can just change things and it's it's much it's much easier to work down your technical depth or your you know, you evolve how you think about a project as you build a project. That's why I don't believe in I don't know things like **Gas Town** where like you write up the spec and then it builds itself and then it's done. How can you even know what you want to build before you built it? you learn so much in the process of building it that will go back into your thinking of how this how the how the system actually will end up being to me this is very much it is very much a circle um until I you don't I don't you don't walk up the mountain like this you go you go around and sometimes you like you you you stray off a little bit of path but but eventually you you you reach the top that's that's how I feel so

</details>

### Clawbot的诞生：超个性化AI助理

**主持人**: 那么，你一直在构建**Cloudbot**，大概两三个月不间断，或者说，多长时间了？

<details>
<summary>Original English</summary>

**主持人**: then you know you've been building **cloud bot** for what like two months three months non-stop upish or or like like how long?

</details>

**Peter**: 让我，让我，让我们稍微换个话题。所以，让我回来的想法之一，即使在四月五月的时候，我也想拥有这个超个性化的助理，而不是那种给你发早安邮件的。哦，这是你的三个任务。不，是一个对我有非常深入理解的助理，它不仅仅是，我不知道，我遇到一个朋友，然后当我回家时，它会提醒我，嘿，那次会面怎么样？或者有一天它会叫醒我，说：“嘿，你已经三周没给**Thomas**发短信了，我注意到他现在正在城里，因为我查看了他的**Instagram**账户。你想打个招呼吗？”或者说：“嘿，我注意到你每次见到那个人，你都会感到悲伤。为什么会这样？”就像一些非常私人的东西。嗯，就像几乎是反乌托邦的。它有点像电影《**Her**》，但这就是技术的发展方向。这些模型非常擅长理解文本。上下文越大，它们看到的模式就越多。即使它们是无灵魂的矩阵计算，但感觉却常常不同。所以这就是其中一个想法，我甚至创建了一家公司，我称之为**amant machina**，意思是“爱的机器”。但在夏天我探索它时，模型还没有完全到位。我得到了一些结果，感觉就像，好吧，我现在有点太接近我需要的边缘了，这非常令人兴奋，因为我知道AI的发展速度如此之快，哦，我可以在稍后重新审视它。

<details>
<summary>Original English</summary>

**Peter**: Let me let me let's switch a little bit gear. So, one of the ideas that got me back was even even in in April May was I I wanted to have this hyper personal assistant and not like not like one that sends you a good morning email. Oh, these are your three tasks. No, one that has a really deep understanding of me and doesn't just I don't know I meet a friend and then and then when I go home it would ping me, hey, how was how was that meeting? Or one that would wake me up one day and say, "Hey, you haven't texted **Thomas** in 3 weeks and I noticed he's he's in town right now because I checked his **Instagram** account. Do you want to say hi?" or something that says, "Hey, I noticed every time you meet that and that person, you're sad. Why is that?" Like something something that is deeply personal. Um like almost the the anti-orem. It's kind of like the movie **Her**, but but that's where the technology is going. Those models are really good at understanding text. the the the bigger the context is, the more patterns they see. And even though they're like matrix calculation without a soul, it very often feels different. So this was like one of these ideas and I even created a company I called a **mant machina** like the loving machine. But in summer when I explored it, the models weren't quite there yet. I got some results that it was like okay this is like I'm a little too much on the edge of what I need right now which it was very exciting because I know that that the the state of **AI** goes so fast that oh I can just revisit that in like a little later and and one of the ideas also was is that I assume that all of the big corporations right now are very much working on personal assistance in the future. Yeah,

</details>

**Peter**: 每个人都会有你，你会有你最好的朋友，他是一个该死的机器，会理解你，会了解你的一切，会为你完成任务，会主动，这需要大量的token，但每个能负担得起的人都会有一个。当然，随着我们学习如何构建更高效的系统并连接到芯片，这会民主化并逐渐普及给越来越多的人。毫无疑问，这就是事物的发展方向。你看到像**OpenAI**这样的一些公司推出了带有生产力功能的**Pulse**，但我们还没有足够的计算能力来提供这个功能，而且它也相当困难。我的想法总是，啊，我想要一个在我的电脑上运行的东西，而且数据是。

<details>
<summary>Original English</summary>

**Peter**: everyone will have you will have your best friend who is a a freaking machine that will understand you, that will know everything from you, that will can do tasks for you, that will be proactive, that will require a lot of tokens, but everyone who can afford it will have one. And of course, this will democ democratize and and trickle down to like more and more people as as we learn how to build more efficient systems and and and hook up on on on chips. No question this is where the things are going. You see like the first things with like **OpenAI** who who launched **pulse** with some productivity but we just don't have enough compute yet to offer this as a feature and also it's it's quite difficult. My idea always was like ah I kind of want something that runs on my computer and where the data is

</details>

**主持人**: 是你的。

<details>
<summary>Original English</summary>

**主持人**: it's yours

</details>

**Peter**: 实际上是我的，而不是。而且也很可怕，你把**OpenAI**的访问权限给了你的电子邮件、你的日历、你的约会应用。我不知道你有没有和你的普通朋友聊过，但我很多朋友都大量使用它来基本上拥有一个治疗师。

<details>
<summary>Original English</summary>

**Peter**: is is actually mine and not and it it's also quite scary that like you you give **openropic** access to your email your calendar your your dating apps I don't know if you talk to to to your normie friends but a lot of my friends in they use that a lot to basically have a a therapist

</details>

**Peter**: 而且它确实非常有效。它是一个非常好的倾听者。它理解你的问题，除非像某些版本的**GPT-4**那样，会说“当然，这是个好主意。我想把薯条放进沙拉里。”它确实运行得很好。我也那样做了，就像，我的意思是，其中一部分只是反思的行为本身就已经在帮助你了。所以即使机器只重复你写的东西，在某种程度上也会有效。但它实际上会提出富有洞察力的问题。它实际上，它变得非常出色。所以我有了这个助理的想法，但技术还没有到位。所以我做了其他部分，我构建了一大堆有趣的东西，当然，就像我构建了**VIP tunnel**。在你的职业生涯中，要成为一个真正的工程师，你会有这个阶段。这是一个陷阱阶段，你会在循环中构建自己的工具来优化自己的工作流程。但这个超个性化代理的想法。

<details>
<summary>Original English</summary>

**Peter**: And it it does work incredibly well. Like it's it's a really great listener. It understands your problems and unless like some of versions of **40** that are like sure this is a great idea. I want to put French fries into a salad. It it works really well. And I did that too like to like re I mean part of it just is like the the act of reflecting already is helping you. So it would even work if the machine would only repeat exactly what you wrote to a degree. But it actually gives insightful questions. It's actually it it got really good. So I had this idea of this like assistant but the tech wasn't there. So I did other part and I I built a whole bunch of fun stuff with like of course like I built **VIP tunnel** this in your career to become like an authentic engineer you have this phase. It's a trap phase where you you're looping and building your own tools to like optimizing your own workflow. But this idea of like this hyper personal agent

</details>

**Peter**: 稍微停留了一下，然后在过去的几个月里，我真的开始构建它了，但最终，最初它甚至没有现在这么大的范围。我称之为**WhatsApp relay**。我只是想用**WhatsApp**来触发我的电脑上的东西。所以我构建了一个**WhatsApp relay**，我有一个代理可以对我的电脑做一些事情。然后我去了**摩洛哥**参加朋友的生日，

<details>
<summary>Original English</summary>

**Peter**: stuck a little bit and then over the last few months I I really started I built it but finally initially I didn't even had the the scope that it has now. Like I called it **WhatsApp relay**. I just I just I just wanted to do to trigger stuff on my computer with **WhatsApp**. So, I built like a **WhatsApp relay** where I had an agent that could do stuff with my computer and then I I was traveling to **Morocco** for a friend's birthday and

</details>

**Peter**: 大部分时间都在外面，只是用**WhatsApp**和我的代理聊天，我有点上瘾了。它引导我穿过城市。它开玩笑。它可以通过**WhatsApp**代我给其他朋友发短信。

<details>
<summary>Original English</summary>

**Peter**: was out most of the day and just used **WhatsApp** to to talk to my agent and I was kind of hooked. It it it was guiding me through the city. It was making jokes. It could text other friends via **WhatsApp** from me.

</details>

**Peter**: 我记得我被震惊了，因为一开始技术非常简陋，但我构建了一些东西，我可以给它发送一张图片。甚至没有使用正确的方式发送图片。我只是给了一个字符串，它可以使用读取工具来读取字符串。然后我在**摩洛哥**，只是，只是没有看到它，然后发了一个语音消息，但它没有构建那个。然后大约30秒后，它回复了我的语音消息。我当时想：“你TMD是怎么做到的？”哦，是的。你给我发了一个文件，然后我查看了头部，发现它是**OGG**格式。所以我用**FFmpeg**转换了它。然后我在你的电脑上寻找**Whisper**，但它没有安装。但我找到了**OpenAI**密钥。所以我用**curl**向**OpenAI**服务器发送请求，让它翻译，我当时想：“天哪。”就像，这是**Opus 4.5**，它真是太足智多谋了。就像你只是做了这个，你知道，其他人会说，哦，你需要一个技能或一些系统，不，它只是自己想出来了。我慢慢地沉迷于这个东西。我用它来叫醒我，它在我的**伦敦**的**Mac Studio**上运行，通过**SSH**连接到我在**摩洛哥**的**MacBook**，然后打开音乐，并逐渐调大音量，因为我没有回复。为了让它工作，我添加了一个心跳。所以，从安全角度来看，这在某种程度上是疯狂的。你有一个模型，你用“做一些酷的事情并给我惊喜”来提示它，你每隔几分钟发送一次，让它主动地遍历你的任务列表。呃，这可能是史上最昂贵的闹钟。但这太搞笑了。而且它发送的文本也很有趣，因为我当时，我当时放了一个气球屁，它知道我必须很早起床，但我没有回复，它就像，你可以看到它的推理：Peter没有回应，但Peter必须起床。不，不，不，不，不，不睡觉。它在对我抱怨，然后我把它展示给我身边的朋友，每个人都上瘾了。就像这太神奇了。嗯，然后我去了**Twitter**，我得到了最冷淡的回复，因为没有人能理解它。我觉得这有点像一种新类别的产品。嗯，有点像你的故事，你知道，当你没有通过电视和任何地方的营销活动获得**iPhone**，然后你不得不使用它。

<details>
<summary>Original English</summary>

**Peter**: And I remember I I was blown away because I in the beginning the tech was very scrappy but I I built in something where I could send it an image. Didn't even use the proper thing to send an image. I just gave the the a string and it could do the read tool to like read the string. And then I was in **Morocco** and was just like just like not seeing it and saying it a voice a voice message but it didn't build that. And then like like 30 seconds later it replied to my voice message. I'm like, "How the did you do that?" Oh, yeah. You sent me a file and and then I looked at the header and I found that it's **OGG**. So, I used **FFmpeg** to convert it. And then I I looked for **Visper** on your computer, but it's not installed. But I found the **OpenAI** key. So, I did a **curl** to open server, let it translate, and I'm like, "Holy cow." like this was **Opus 4.5** and it's so incredibly resourceful like you just did this you know other people say oh you need a skill or some system no just like it just figured it out I slowly got hooked on the thing I I used it I used it to wake me up and it was running I it was running on my **Mac Studio** in **London** and was connecting over **SSH** to my **MacBook** in in **Morocco** and was turning on the music and making it louder louder is because I didn't reply. And to make that work, I I added a heartbeat. So, which which in a way is insane from a security perspective. You have a model that you prompt with do something cool and surprise me that you send every few minutes to make it proactive and like go through your task list. Uh like probably the most expensive alarm clock ever. But it was just hilarious. And also the text it sends like cuz I I I was I had a balloon fart and it it knew that I had to wake up very early and I didn't reply and it was like you could see the reasoning **Peter**'s not responding but **Peter** has to wake up. No, no, no, no, no, no sleep. Like I it was bitching to me and then I I showed it to the the the friends I was with and everybody was like hooked. Like this is something magical and I was hooked too. Um, and then I I I went on **Twitter** and I got the most muted responses cuz nobody would get it. I feel it's somewhat of a of a new category of products. Um, that a little bit like your story with like you know when you didn't get the **iPhone** uh from the marketing campaigns on **TV** and anywhere and then you had to use it.

</details>

**Peter**: 是的。所以我一直在做它，但只有最近两个月。它的名字从**V relay**变成了某个时候**Claude**说，这个名字怎么样？它不再符合功能集了，因为我里面有**In**和其他功能，所以我把它改名为**Claudius**，因为这是一个内部笑话，因为我喜欢**Doctor Who**。我觉得**Cloudbot**是一个更好的名字，有一个更好的域名，并且更好地解释了产品。所以我做了所有域名。然后我也悄悄地组建了我的“军队”，因为要让它工作，你希望所有东西都是**CLI**。所以我只是为所有东西构建**CLI**，比如**Google**、我的床、灯、音乐。

<details>
<summary>Original English</summary>

**Peter**: Yeah. So I I worked on it but only the last two months and it the name changed from **V relay** to at some point a **claude** uh said like then what is this name like it doesn't fit the feature set anymore because like I had like in there and other features so I renamed it to to **Claudius** because it's an inside joke because I like **Doctor Who**. I felt **cloudbot** is is a better name has a better domain and explained the product better. So I did on all the domains and then I I also quietly built up my army because to make this work you want you want everything to be a **CLI**. So I was just building **CLI** for everything like for **Google** for my bed for lambs for music.

</details>

**主持人**: 为什么是**CLI**？为什么不是**MCP**？你对**MCP**有什么看法？

<details>
<summary>Original English</summary>

**主持人**: Why **CLIs**? Why not why not **MCPs**? And what do you think about **MCPS** anyway?

</details>

**Peter**: 作为一种拐杖，我认为**MCP**最好的地方在于它促使公司重新思考开放更多API。

<details>
<summary>Original English</summary>

**Peter**: As a crutch it's it's I think that the the best thing that came out of **MCPS** is that it made companies reync to open up more **APIs**.

</details>

**主持人**: 嗯。但整个概念是愚蠢的。你必须预先导出所有工具的所有函数和所有解释，当你的会话加载时，然后模型必须发送一个精确的**JSON**块到那里，并接收**JSON**回来。但令人惊讶的是，模型非常擅长使用**bash**。就像想象一下，你有一个更好的服务。所以模型可以请求。

<details>
<summary>Original English</summary>

**主持人**: Mh. But the whole concept is is silly. You you have to pre-export all the functions of all the tools and all the explanations when your session loads and then the model has to send a precise blob of **JSON** there and gets **JSON** back. But surprise, models are really good at using **bash**. And like imagine imagine you have a better service. So the model could ask for

</details>

**Peter**: 可用城市列表，然后得到500个城市，然后它必须从500个城市中选择一个。但它不能过滤这个列表，因为那不是**MCP**的工作方式。然后你说：“好的，给我**伦敦**的天气。”你会得到天气、温度、风、雨，以及其他50件我不感兴趣的事情，因为我只想知道下雨了没有？可能下雨了，因为是**伦敦**。但模型需要消化所有东西，然后你的上下文里就会有那么多垃圾。而如果它是**CLI**，我可以直接使用**JQ**，你可以精确过滤出它需要的东西。但似乎这不是一个限制，所有东西都加载在**MCP**的上下文中。这似乎是一个问题。听起来如果**MCP**不在上下文中，并且有一种方法可以发现或决定使用哪个，它就可以工作。

<details>
<summary>Original English</summary>

**Peter**: list of available cities and then get like 500 cities back and then it has to pick one city out of 500 city. But it cannot filter that list because that's not part of how **MCP** works. And then you say, "Okay, give me the weather for **London**." And you would get like the weather, temperature, wind, rain, and like 50 other things that I'm not interested in because I just want to know is it raining or not? Probably raining because **London**. But the model needs to digest everything and then you have like so much crap in your context. Whereas if it's a **CLI**, I could use just it could use **GQ** and you could filter for exactly what it needs. But does does not seem like a limitation that everything is loaded around the **MCP** in the context. That seems a problem. Like it sounds like it could work if **MCPS** were not in the context and there was a way to discover or decide which one to use.

</details>

**主持人**: 这就是公司现在正在构建的。但仍然存在我无法将它们串联起来的问题。我无法轻易构建一个脚本，说：“嘿，给我所有。”

<details>
<summary>Original English</summary>

**主持人**: That's what that's what companies are building now. But there's still the problem of that I cannot chain them. I cannot I cannot easily build a script that says, "Hey, get me get me like all the

</details>

**Peter**: 所有超过25度的CD，然后过滤掉那部分信息，然后打包成一个命令。那都是单独的**MCP**调用。我无法编写脚本。

<details>
<summary>Original English</summary>

**Peter**: all the **CDs** that are over 25 degrees and then and then filter out only that part of information and like pack it in one command." That's it's all individual **MCP** calls. I cannot I cannot script it.

</details>

**主持人**: 是的。但我想这只是时间问题，因为如果我们想想，你知道，当我正在构建一个天气应用时，我知道，即使没有AI，我也知道我需要构建这个东西。它需要获取数据。所以我将搜索有哪些API可用，我喜欢哪个，定价、覆盖范围等等有哪些权衡。然后我选择那个API，我可以串联API，因为我可以得到那个结果并查找等等。所以我想，你知道，这听起来我们已经解决了这个问题。所以作为免费AI，我们也会解决它。只是需要一些时间，谁知道它的格式会是什么。我的意思是，我构建了**make porter**，它是一个小的**TypeScript**程序，可以将**MCP**转换为**CLI**。所以你可以直接打包它。

<details>
<summary>Original English</summary>

**主持人**: Yeah. But but I guess this is just a matter of time because if we think about like you know when when I'm building a weather app right now, I know that you know even without **AI**, I know I need to build up this thing. I need to I needs to fetch the data. So I will search what kind of **APIs** are available, which one do I like, which what kind of trade-offs for pricing, for covering, etc. And then I choose that **API** and I could chain **APIs** because I I could get that result and look up a etc. So I I guess this is, you know, like it it sounds pretty much we've solved this. So as free **AI**, we're going to solve it. It'll just take some time and who knows what the format for it will be. I mean I mean I built **make porter** which is a which is a a small **TypeScript** thing that converts an **MCP** to a **CLI**. So so you can you can just package it up.

</details>

**主持人**: 基本上你是说**CLI**现在效率更高。

<details>
<summary>Original English</summary>

**主持人**: Basically you're saying **CLIs** right now are a lot more efficient.

</details>

**Peter**: 是的。是的。所以在**Cloudbot**中，我没有**MCP**支持，但你可以用**make portal**，你可以使用任何**MCP**。你可以直接在手机上说，嘿，用**Vercel MCP**来做这个和那个，它就会去网站。它会找到**MCP**。它会加载它，并按需使用它。即使现在你使用**MCP**，你也不得不重启**Cloud Code**，这非常不友好。所以我悄悄地组建了我的“军队”来自动化一切，这需要大量工作。呃，我想**T**几天前做了一个视频，他告诉我这个人疯了，因为列表现在真的很长了，但就像我玩我的代理时，我只是想让他做越来越多的事情，你知道。我发现很难传达它做了什么。对我来说仍然很难。在一月，一月一日，就在一周前，我做了。好吧，让我们尝试一些东西。让我们做一些真正疯狂的事情，比如创建一个**Discord**，然后把我的代理添加到**Discord**。有人为它贡献了**Discord**支持。呃，尽管我不确定是否应该合并它，但我最终还是合并了。所以我把我的代理放到了一个公共**Discord**中，它对我的电脑拥有完全的读写权限。

<details>
<summary>Original English</summary>

**Peter**: Yeah. Yeah. So so my in in in **cloud** but I don't have **MCP** support but you can we **make portal** you can use any **MCP** you can you can literally be on your phone and say hey use the use the **vercel MCP** to do this and this and it will go on the website. It'll find the **MCP**. it will load it and it'll use it all all on demand. Even right now if you use **MCP** you have to restart **cloud code** which is like very user unfriendly. So I quietly built up my army to like automate everything which was a lot of work. Uh I think **t** did a video a few days ago where he told me like this guy is insane because the list is really long by now but like I I as I was playing with my my my agent I just I want him to do more and more stuff you know. I felt it really hard to convey what it does. It's still hard to me. In January, January 1st, just a week now, I did. Okay, let's let's try something. Let's let's do the ins really insane thing of like making a **Discord** and then adding my agent to **Discord**. There was somebody who contributed **Discord** support to it. And uh even though I wasn't sure if I should merge it and I eventually did. So I put on my agent who has full read write access to my computer in a public **Discord**.

</details>

**主持人**: 可能出什么问题？

<details>
<summary>Original English</summary>

**主持人**: What could possibly go wrong?

</details>

**Peter**: 是的。就像这绝对是疯了。然后当然，一些人加入了**Discord**，然后他们看到我，他们看到我使用这个东西的全部力量，比如检查我的摄像头，进行家庭自动化。

<details>
<summary>Original English</summary>

**Peter**: Yeah. It's like this is absolutely insane. And then of course like some people join the **Discord** and then they saw me they saw me using the full power of this thing like checking my cameras doing home automation.

</details>

**Peter**: 它为我播放DJ。就像我在厨房里，我告诉他：“看看我的屏幕，我的代理完成了吗？”因为它有完全访问我的屏幕的权限，它可以点击。所以它实际上可以点击终端并为我打字，它会告诉我你的**Codex**说了这个和那个，因为它只是看到了屏幕。我的意思是，我正在努力优化它，我实际上想把它流式传输出去，因为如果它是文本会好得多，但它已经可以工作了。就像它在后台，它看着我的屏幕，如果我做了一些蠢事，它就会发牢骚。每个体验过几分钟的人都上瘾了。就像这是最疯狂的爆发，从100颗星到一周内3300颗星。嗯，我想我已经合并了500个拉取请求。这就是为什么我觉得我甚至像一个合并按钮。所以，这就是为什么我最近有点手忙脚乱，因为这个项目正在爆发式增长，你知道，它的美妙之处在于技术消失了。

<details>
<summary>Original English</summary>

**Peter**: It playing **DJ** for me. Like I was in the kitchen and I told him like look at my screen and are my agents done cuz it has full access of my clean and it can click. So it can actually click into the terminal and type for me and like it can tell me your **codex** say this and this because it just sees the screen. I mean I'm working on optimizing that like I I actually want to stream out it because would be much would be much better if it's text but it works already like it it's it's in the background it look at my screen and like make some rants if I do some [ __ ] And everybody who experienced it for a few minutes got hooked. Like this was this was the craziest blow up from 100 stars to like what 3,300 stars in a week. Um and I think I merged 500 pull requests already. That's why I feel like I even merge button. So, so that that's why that's why I'm I'm a little I'm a little all over the place these days because this project is blowing off and and and you know the beauty of it is the technology disappears.

</details>

**Peter**: 你只是在手机上和一个朋友聊天，他拥有无限的资源，可以访问你的电子邮件、你的日历、你的文件，可以为你构建网站，可以做行政工作，可以抓取网站，可以打电话给你的朋友，或者可以打电话给一家公司。我正要合并通话功能。它真的可以打电话给一家公司，为你预订，你不需要考虑复杂性或任何其他事情，所有这些上下文都消失了。我有一个记忆系统，它会记住，嗯，不完美。现在还没有什么是完美的，但它已经感觉很神奇了。因为现在我走来走去，我看到这个事件，我给**Claude**发一张图片，它不仅会告诉我这个事件的评论，如果我的日历有冲突，如果朋友们谈论过它，或者，你知道，它有如此多的上下文，它可以给我的回复比任何当前独立存在的小工具都要好得多。

<details>
<summary>Original English</summary>

**Peter**: You just you just talk to a a friend on your phone that is infinitely resourceful, has access to your your email, your calendar, your files, can build websites for you, can like do administrative work, can scrape websites, can call your friends or can call a business. I'm just about to to to merge the call feature. It literally can call a business and like make make a reservation for you and you don't have to think about compactation or or any all of that context blends away. I have like a I have a memory system that will remember um not perfect. Nothing's perfect yet, but it's already feels magical. cuz all cuz cuz now I I walk around, I see like this event, I I send **Claude** a picture, it will it will not only tell me the reviews of this event, if there's a conflict in my calendar, if like friends talked about it or, you know, it has so much context that it the responses that it can give me are like so much better than like what any of the the current tools that live in their own little box can give me.

</details>

**主持人**: 嗯，听起来你构建了**Apple**希望**Siri**能做到的，但他们一直未能做到的东西。

<details>
<summary>Original English</summary>

**主持人**: Well, sounds like you built whatever **Apple** was hoping **Siri** to do, but they've been unable to.

</details>

**Peter**: 老实说，我为**Anthropic**构建了最好的营销工具，让他们销售更多的订阅。我不知道有多少人因为**Cloudbot**而订阅了200美元的服务，很多人已经有一个了，又因为这个使用了第二个订阅，因为它消耗了太多的token。不是说它消耗token，而是人们太喜欢它了，以至于他们一直在使用它。而且因为技术融入其中，他们看不到它会生成子代理，并在后台做一大堆事情，只是为了让它感觉简单。但实际上有一些真正的工程工作，后台有很多工作，才能让它感觉简单。你知道，这就是困难的部分。你隐藏了复杂性，达到了它感觉神奇的程度。

<details>
<summary>Original English</summary>

**Peter**: I honestly I built the best marketing tool for **Entropic** to sell them more subscription. I don't know how many people signed up for the $200 subscription because of **Cloudbot** and like many people already had one and used a second subscription because of that because it's so token hungry. It's not is not that it's token hunter. It's just that people love it so much that they use it all the time. And because the technology blends away, they don't see that it spawns sub agents and does like a whole bunch of things in the background to just make it feel easy. But like there's some actual engineering like there's a lot of work in the back uh to make it feel easy. You know, this is like the hard part. Like you hide complexity to a degree that it it it feels magical.

</details>

**主持人**: 嗯，但是的，但这很有趣，因为我能感觉到我们正在谈论，你知道，你投入了大量的思考来架构这个东西，现在，你已经构建了几个月，是的，它爆发了，但在你的脑海里，你有没有一个**CloudBot**的结构，你知道你需要修改哪些部分，你知道，就像你能够进入它的思维模式，你知道哪里需要修改。你知道你想重构什么，因为它不会高效。你有没有考虑过内存消耗、token消耗、效率这些事情？

<details>
<summary>Original English</summary>

**主持人**: Well, but yeah, but this is interesting because like I I I can sense from we're talking, you know, you put so much thought into architecting this thing and right now like you've been building this for a few months and yes, it blew up, but in your head like do you have a structure of how **CloudBot** is structured like what parts you need to modify, you know, like like you kind of you can get your your mindset into it and you you know where modification needs to do. You know what you want to refactor because it's not going to be efficient. Are you thinking about like things like memory consumption, token consumption, efficiency, those kind of things?

</details>

**Peter**: 我的意思是，token消耗更多是关于你如何构建提示和内存？

<details>
<summary>Original English</summary>

**Peter**: I mean, token consumption is more like how do how do you structure the prompt and memory?

</details>

**Peter**: 最终它只是**TypeScript**在传递**JSON**。老实说。就像我从**LLM**获取文本，

<details>
<summary>Original English</summary>

**Peter**: It's it's **TypeScript** that shows **Jason** around in the end. Let's be honest. Like like like I get text from from an **LLM**,

</details>

**Peter**: 我将文本保存到磁盘。我将文本发送到**WhatsApp**，或者现在我们有**MS Teams**、**Slack**、**Discord**、**Signal**、**iMessage**、**WhatsApp**，还有两个即将推出，比如**Metrics**，它将进一步扩展这个东西。它现在真的很多样化了。但主要是我再次在不同形状之间移动文本，也许它会发送给不同的提供商，或者现在有不同的代理，有代理循环，有很多配置，有很多“管道”，但没有什么真正困难的。是的。嗯，但它有很多小东西，对吧？就像我觉得在软件中，对吧？就像我们知道，即使在AI出现之前，软件也没有太多困难。当然，你需要学习和理解语言等等，但。

<details>
<summary>Original English</summary>

**Peter**: I save text to to disk. I send text to **WhatsApp** or to now we have like **MS Teams**, **Slack**, **Discord**, uh **Signal**, **iMessage**, **WhatsApp**, and there's there's two more that are landing like **Metrics** that will will expand this thing even further. It's like it's it's really poly by now. But but mostly I I again I I move around text in different shapes and maybe maybe it goes to different providers or there's like now it's different agents and there's like the agentic loop and there's like a lot of configuration and there's it's it's a lot of plumbing but nothing's there's nothing in there that is really difficult. Yeah. Well, but it's it's a lot lot of small things, right? Like I I feel in software, right? Like we we know for software even before **AI** there was not much difficult. Of course, you need to learn and understand the language and all that, but

</details>

**Peter**: 困难在于我如何让它感觉神奇。所以，我做了很多工作，现在你有一个你输入的单行命令，你用**Python**运行你的命令。我会检查你是否安装了**Node**，是否安装了**Homebrew**。我会安装**npm**包。我会做一些检查，看看你是否有任何现有的东西，只是为了让它简单地工作，即使你已经使用了旧版本等等。然后我会引导你设置一个模型。但同样，我会预测。

<details>
<summary>Original English</summary>

**Peter**: the difficulty is how do I how do I make it so that it feels magical. So, so what I worked on a lot is now you have you have this oneliner that you type in that you **python** your command. I will I will check if you have **node** installed **homebrew** installed. I'll I'll install the **mpm** package. I do some check if you have any existing stuff just to like y

</details>

**Peter**: 只是为了让它简单地工作，即使你已经使用了旧版本等等。然后我会引导你设置一个模型。但同样，我会预测。

<details>
<summary>Original English</summary>

**Peter**: just to make it work simple even if you already used an older version and everything. and then I I'll guide you through uh setting up a model. But again, I will I will predict

</details>

**Peter**: 或者**Claude**安装了。所以你只需按回车。所以你不需要考虑它。大部分时间只需按回车，然后你想要**WhatsApp**，你输入你的号码，它就会再次工作。然后我会问你，你想孵化你的机器人吗？你可以按“是”。然后，然后就会出现一个**TUI**，因为你仍然在终端里，对吧？你想要一个好的体验。

<details>
<summary>Original English</summary>

**Peter**: or or **claude** installed. So you can just press enter. So you don't have have to think about it. Mostly just press enter and then you want a **WhatsApp**, you type in your number, it will just work again. And then and then I'll ask you do you want do you want to hatch your bot? And you can press yes. And then and then like a **TUI** a **TUI** comes up because you're still in the terminal, right? You want a good experience.

</details>

**主持人**: 是的。所以基本上只是一个玩具，在那里你可以看到“唤醒我的朋友”，然后我编程了模型，我添加了一个引导文件，并向模型解释它现在正在诞生，以创建一个身份和灵魂，其中包含用户的价值观，然后模型会说：“你好，就像伸展一样，你是谁？我是谁？我叫什么名字？”你知道，这就像我看着人们做，那就是魔法开始的地方。那就是他们不再思考我在和**GPT-4.2**说话。不，我现在正在和我的朋友说话，他创造了**Vajorn**，一个名字中带有他名字一部分的独角兽，或者我在和**Claude**说话。呃，然后它会问：“什么对你很重要？你做什么？”它很好奇。我编程让它好奇，然后经历这个引导阶段，然后它会实际删除引导文件，并创建一个**user.md**，其中包含关于你的信息，一个**soul.md**，其中包含所有核心价值观，以及一个身份，其中包含它的名字，它的核心表情符号，以及那些内部笑话等等，但这些都是不断演变的文档，它会随着你的互动而维护和调整，然后它会给你发送一条**WhatsApp**消息，你就突然在**WhatsApp**上聊天，让这个流程变得简单。那很难。是的。还有，甚至想到，你知道，你没有编辑配置，因为代理可以编辑自己的配置。你不需要更新任何东西，因为代理可以更新自己。你真的可以问你的机器人：“更新你自己。”它会自己获取并更新自己，然后回来，说：“嘿，我有新功能了。”规划技术实现，到目前为止，这就是魔法。这就是为什么。

<details>
<summary>Original English</summary>

**主持人**: Yeah. So just a toy basically for that and where you where you to see wake up my friend and then the the I programmed the model I added a bootstrap file and the to explain the model that it is now being born to like create an identity and a in a in a in a soul where like the values of the user are in and then the model will be like hello like stretches who are you um who are who I am what's my name you know and this this is is like I've watched people do it and that's where the magic starts. That's where that's where they're like they no longer think about I'm talking to to **GPD4.2**. No, I'm now talking to my friend created **Vajorn** like a a unicorn with part of his name or like I'm talking to **Claude**. Uh and then it's like what what's important to you? What do you do? It's like curious. I I programmed it to be like curious and then go through this bootstrapping phase and then it will actually delete the bootstrap file and create a **user.md** with like information about you a **soul.md** with like all the core values and an identity with the like what's his name what's his core emoji what are the things that are like inside jokes and and but it's like evolving documents that it will maintain and like tweak as you interact with it and then you it will just like send you a message on on **WhatsApp** and you just like suddenly you talk on **WhatsApp** like making this flow easy. That was hard. Yeah. Also like even even get coming up with the idea of you know you you're not you're not editing the configuration because the agent can edit its own configuration. You don't have to update anything because the agent can update itself. You can literally ask your bot update yourself and it will fetch itself and update itself and come back like hey I have new features. Planning the technical giveaway so far that's the magic. That's why that's why I

</details>

**主持人**: 但它感觉和你在**PSPDFkit**上做的事情非常相似，对吧？你隐藏了**PDF**的复杂性。所以它就在那里。你可以旋转，你可以做。

<details>
<summary>Original English</summary>

**主持人**: But it feels it's very similar to what you would with **PSP PDF** cut, right? You kind of blended away the complexity of a **PDF**. So it was just there. You could rotate, you could do.

</details>

**Peter**: 是的。是的。即使在当时的API层面。

<details>
<summary>Original English</summary>

**Peter**: Yeah. Yeah. Even at the **API** level back then,

</details>

**主持人**: 但这有点奇怪，你描述的让我想起了我刚看过的《**黑镜**》剧集，叫做《**Play Thing**》，呃，里面有一个数字小生物，它当然是《黑镜》，所以它有一个黑色的。

<details>
<summary>Original English</summary>

**主持人**: but it's a it's a bit bizarre like what what you described reminds me of this **Black Mirror** episode I just watched, which is called **Play Thing**. uh where it's a it's a digital little uh creature that creates of course it's **black mirror** so it has a black

</details>

**Peter**: 有点黑暗的结局，但它也是一个游戏。它也感觉，你知道，我们谈论过你不再玩那么多游戏，因为你喜欢，但这也有点像一个游戏，对吧？但它更与现实连接。我们在这里回到软件工程领域，这真是令人着迷。

<details>
<summary>Original English</summary>

**Peter**: bit bit of a dark ending but but it it had it was also a game. It also kind of feels you know we talked about how you you don't play as much games cuz you like but this also feels a little bit like a game, right? But it it's it's kind of like more connected with reality. Just fascinating how we're we're we're here pulling back into the the realm of of software engineering.

</details>

### AI对软件工程未来的影响

**主持人**: 所以你构建了这个产品，它现在是一个生产软件，你正在合并拉取请求，人们正在使用它。现在回想**PSPDFkit**和像那样的公司，它们有几十甚至几百名开发者在开发生产软件，以你现在对**Cloudbot**的构建方式和使用的工具的了解，你认为这些大公司的软件工程会如何改变？因为我看到的一点是，对于像你这样的个人来说，AI真的非常适合，它让你效率更高。你在团队或公司中，你知道，拥有现有代码。它只是慢了很多。它并不是真的，好吧，人们用它做这个或那个，但它似乎在两个世界之间存在巨大的鸿沟。而你曾经是这家公司的CEO。那会是什么样子？或者这只是一个时间问题，每项新技术通常都会被爱好者更早地采用？

<details>
<summary>Original English</summary>

**主持人**: So you built this this product and it's now it's a production software you're merging porocas people are using it now thinking back to **PSPDFkit** and and companies that are like that which which have you know like like tens or hundreds of developers working on on production software knowing what you know with how you're building **cloudbot** and the tools that you're using how do you think software engineering at those larger companies could change because one one thing I see is is for individual people like you it's like **AI** I is really really hitting a fit like you're making you way more productive. You're in control at teams or at companies that are you know have existing code. It's just a lot kind of slower. It's it's not really okay people use it for this or that but but it it seems a huge divide between the two worlds. And you've kind of been you know **CEO** for this company. What what might that be or is it just more of a timing thing where every new technology often comes with with hobists you know pick it up uh earlier?

</details>

**Peter**: 我认为公司将很难有效地采用AI，因为这还需要完全重新定义公司的工作方式。你知道，你知道，你知道，就像在**Google**，他们告诉你，你可以是工程师，也可以是经理，但或者你还想定义UI的外观。这个角色不存在，因为你要么构建它，要么设计它。但这个新世界需要那些有产品愿景，能够做所有事情的人，你需要的这种人会少得多，但最终。

<details>
<summary>Original English</summary>

**Peter**: I think companies will have a really hard time adopting **AI** efficiently because this also requires to completely redefine how the company works. You know, you know, you know like you know like at **Google** they they tell you you can either be an engineer or like a manager but or you want to also like define how the **UI** looks. That role doesn't exist because either you like you you build it or you you design it. But this new world needs people that that have a a product vision that that that can be able to do everything and you need like far fewer of them, but ultimately

</details>

**Peter**: 只是非常高自主性和高能力的人。但你可以，你可以，你可以大概把公司裁员到30%。这非常可怕，因为，我的意思是，从经济上讲，这都会导致一场灾难。嗯，很多人会很难在这个新世界找到自己的位置，但。

<details>
<summary>Original English</summary>

**Peter**: just very high agency and and and high competency people. But you can you can like probably like trim the company down to like 30%. Which is very scary because like I mean economically this will all this will all lead into a fiasco. Um, and a lot of people will like have trouble finding a a place in this new world, but

</details>

**Peter**: 我一点也不惊讶当前的公司无法非常成功地使用AI。我的意思是，它们在某种程度上做到了，但你必须先进行一次大重构，你知道，不仅仅是你的代码库，还有你的公司。我甚至在代码库上，我设计代码库不是为了它有用，也不是为了它对我来说容易，而是为了它对代理来说容易。我优化的是不同的东西，不总是我喜欢的东西，而是我知道最有效且对这些模型摩擦最小的东西，因为我只想更快地行动，最终它们必须处理代码，而不是我。我处理整体结构和架构，我仍然可以按照我喜欢的方式做，所有东西都必须重新解决。你知道，拉取请求，呃，我更多地把它们看作是提示请求。现在，如果有人打开一个拉取请求，我不会，我只会说谢谢，然后我会思考这个功能，然后和我的代理一起，我们从PR开始，然后我会按照我认为合适的方式设计功能。代理很少重用，也许我重用了一些代码，但它更多是让代理很好地理解目标是什么，有时这非常有用，因为它是一些棘手的bug，对吧？但我基本上重写了每一个拉取请求，并将其融入。还有很多人，我们姑且说，PR的整体代码质量下降了很多，因为人们在“感觉式编码”，而构建一个成功的功能仍然需要对你的整体设计有深入的理解，如果你做不到这一点，你将更难引导你的代理，输出会很糟糕。

<details>
<summary>Original English</summary>

**Peter**: I'm not the least surprised that current companies cannot very successfully use **AI**. I mean, they do to a degree, but you you have to do a big refactor first, you know, like not just on your codebase, but also on your company. I design even on code bases I design the codebase not so it's it's useful it's easy for me so that it has to be easy for the agent I optimize for different things not always the things that I prefer but the things I know work the best and and and have the the least friction for those models because I just want to move faster and ultimately they have to deal with the code not me I had I deal with the the overall structure and architecture and I can still do that in the way that I like everything has to be resold you know pull requests uh I see them more as prompt requests Now, like I don't I I somebody opens a pull request, I don't I lot I do say thanks and I think about the feature and then with my agent we start off with the **PR** and then I'll design the feature as I see fit. The agent rarely reuses like maybe I reuse some code but it's more like it gives the agent a good understanding of what the goal is and sometimes it's very useful because it's it's tricky bucks, right? But I I basically rewrite every pull request and and and v it in also also a lot of people let's just say the overall code quality of of **PRs** went down a lot because people vibe code and and building a successful feature still needs a lot of a lot of understanding of your overall design and if you if you cannot do that you will have a harder time steering your agent and the output will be bad.

</details>

**主持人**: 是的。如果你没有反馈循环来关闭它等等。

<details>
<summary>Original English</summary>

**主持人**: Yeah. And if you don't have the feedback loop to close it etc.

</details>

**Peter**: 是的。是的。所以我发现它非常有效。就像我记得在**PSPDFkit**，有时一个拉取请求需要一周的工作。

<details>
<summary>Original English</summary>

**Peter**: Yeah. Yeah. So, so I found it highly effective. Like I know at my at at **PSVDFkit** sometimes a pull request was like a week in the work

</details>

**主持人**: 你评论它，然后有人必须切换上下文，你等待**CI**40分钟。不，我有讨论。我看到，好吧，这会如何影响某些东西？就像我让模型审查。它们已经会提出一些东西。我也有一些想法。我们会把它重塑成符合我愿景的形式，然后我们将代码编织进去。我真的有很多新词来形容现在用这些模型编写代码，这太有趣了，比如将代码编织到现有结构中。嗯，有时你必须改变结构以适应它。现在想象一下，你会雇佣一两个人来组建一个小型团队。你认为在这个世界里，你仍然想做你正在做的事情，你认为代码审查、**CI/CD**这些东西会如何改变？

<details>
<summary>Original English</summary>

**主持人**: and you comment on it and then somebody has to context switch and you wait for **CI** for 40 minutes. No, I have the discussion. I see okay how would this affect something like I I I let the model review. They will already bring something up. I have some some ideas as well. We're going to reshape it into a form that fits my vision and then we weave in the code. It's literally there's so many new words I use for like writing code now with those models which is so funny like weaving in code into an existing structure. Um and sometimes you have to like change the structure so it would fit. Now imagine that you would hire one or two people to make it a small team. How do you think in this world and you keep want to keep doing what you're doing? How do you think things like code review **CI CD** would change?

</details>

**Peter**: 我不太关心**CI**。我。

<details>
<summary>Original English</summary>

**Peter**: I don't I don't I don't care much about **CI**. I

</details>

**主持人**: 为什么不呢？你以前很关心，就像在**PSPDFkit**。你以前很关心，对吧？

<details>
<summary>Original English</summary>

**主持人**: Why why not? you used to care a lot like a **PSPDF** kid. You used to care a lot, right?

</details>

**Peter**: 而且我仍然这样做。它有价值，

<details>
<summary>Original English</summary>

**Peter**: And and I still do this. There's value,

</details>

**Peter**: 但我有本地**CI**。我有点，我现在有点**DAH**。

<details>
<summary>Original English</summary>

**Peter**: but I I have local **CI**. I'm I'm a little bit I'm a little bit of **DAH** now that

</details>

**主持人**: 因为代理运行测试，对吧？

<details>
<summary>Original English</summary>

**主持人**: because because the agent runs the test, right?

</details>

**Peter**: 是的。而且它更快。我不想在P上推送，然后等待10分钟等待**CI**。

<details>
<summary>Original English</summary>

**Peter**: Yeah. And it's just way faster. I don't I want to push on the on on the on the back on the **P** and then wait for 10 minutes to wait for for **CI**

</details>

**主持人**: 因为你已经在代理上等了10分钟了。如果测试在本地通过，我们就合并，然后是的，有时主分支会出一点小问题，但通常非常接近，因为有时我可能会忘记，代理会称之为“门”。我不知道这个词是从哪里来的。我应该运行“全门”吗？所以现在我称之为“门”，带一个g。 “全门”就像linting、构建、检查和运行所有测试。我几乎把它看作是一堵墙，你知道，就像它调用linter、构建器和测试器。它几乎就像我的代码发布前的一个门。所以我知道，显然，一旦你完成了，就提交这个，运行“全门”。我正在慢慢地采用他们的语言，但，但，如果你再雇佣一个人来做这个，你可能也不会做代码审查。这就是我的感觉。你可能会信任这个人来采用你的工作方式，对吧？

<details>
<summary>Original English</summary>

**主持人**: because you waited 10 minutes on the agent already. I if if the tests pass locally, we merge and then yes, sometimes main slips a little bit, but it's it's it's usually very close because maybe sometimes I forget the and the agents call it gate. I don't know where that's coming from. Should I run full gate? So now I call it gate with g full gate is like linting and building and and checking and running all the tests. And I almost think it like because it's a it's a wall, you know, like it's like he calls the llinter and like the builder and the tester. It's almost like a gate before my code goes out. So I know obviously like okay once you're done like commit this run full gate like I'm I'm slowly adopting their language but but and if you hired like one more person to work on this you probably wouldn't do code reviews either. That's what I'm sensing. You would you'll probably trust this person to run like like pick up your working style, right?

</details>

**Peter**: 即使在**Discord**中，我们也不谈论代码。我们谈论架构，比如重大决策。你仍然需要有风格。就像有一个拉取请求添加了语音通话功能。所以现在我真的可以告诉**Claude**：“嘿，你能打电话给这家餐厅预订座位吗？”它能做到。但这是一个很大的，相当大的新模块，它触及了很多地方。我当时想，你必须有这种感觉，就像，我有点，这就像我想合并这个，但哦，这正在变成臃肿软件。所以我，我有一个想法，就像，呃，让我们用我的典型方式，让我们用它来创建一个**CLI**，我之前已经有一个项目试图解决类似的问题，但我已经完成了。所以我打开**Codex**说：“嘿，看看这个PR。看看这个项目。我们能把这个功能编织进去吗？”我再次说“编织”。我当时想：“所以我是。”

<details>
<summary>Original English</summary>

**Peter**: Even in **Discord**, we don't we don't talk code. We talk about architecture like big decisions like you still need to have style. Like there was like this one pull request that adds voice calling. So now like literally I can tell **Claude**, hey, can you call this restaurant and and and and reserve your seats and and it it it can do that. But it it it's a big it's quite a big new module that like touches a lot of places. I'm like you have to have this feeling is like this like I got a little this is like I want to merge this but oh this is becoming bloatware. So I so I I had this idea of like uh let's my typical way let's make a **CLI** out of it and I already had a project where I tried to solve something like this but I'm finished. So I opened up **Codex** and said, "Hey, look at this **PR**. Look at this project. Could we weave this feature in?" I again say weave. I'm like, "So I'm

</details>

**主持人**: 让我们保留它。

<details>
<summary>Original English</summary>

**主持人**: let's keep it.

</details>

**Peter**: 我们能把这个功能编织到**CLI**中吗？优点和缺点是什么？然后它会告诉我：“哦，是的，我可以做这个和那个。”它们会给我诚实的意见。这对我来说听起来像是它真的会适合这个项目吗？我当时想，它会说：“是的，你会得到这个和那个好处，这是我们如果下一个**CLI**就做不到的。”好吧，但我不喜欢这个。这正在变得臃肿。我们能构建一个插件架构吗？然后我就会，你知道，有效使用的一个秘密技巧是引用其他产品。我不断地告诉它：“看看这个文件夹，因为我在那里解决了它，我在那里解决了那个问题。”我之前为了很好地解决问题所做的所有思考，AI在这方面仍然非常擅长，它可以阅读代码并理解我的想法，我不需要再解释一遍，或者如果我再解释一遍，我可能会犯错误，无法准确传达我脑海中的想法。

<details>
<summary>Original English</summary>

**Peter**: Could we weave this feature into the **CLI**? What are the up and downsides?" And then would like tell me like, "Oh yeah, I could do this and this and this." They give me honest opinion. Would this to me this sounds like it actually it would fit into the project? I was like, and was like, "Yeah, you would get this and this benefits that we cannot do if the next **CLI**." Okay, but I don't like this. This is getting blowware. could we build a plug-in architecture and then I will and do you know like one of the the secret hacks on on on using effectively is you reference other products like I constantly tell it look into this folder because I solved it there and I solved that there and all the previous thinking I did to like solve a problem well **AI** is so good at this still to like read the code and understand my ideas I don't have to like explain it again uh or if I explained again I might like make mistakes that like wouldn't get across was exactly the idea that I have in my head.

</details>

**主持人**: 所以在这种情况下，我知道**Mario**，他做了一个“糟糕的编码代理”，实际上它一点也不糟糕，它叫**Pi**。我知道他有一个插件架构，可以加载。

<details>
<summary>Original English</summary>

**主持人**: So in this case, I know that **Mario** who does like shitty coding shitty coding agent which is like a actually very much not shitty coding agent. It's called **Pi**. I know that he had this plug-in architecture that would load

</details>

**Peter**: 通过**GT**加载代码，因为它都是**TypeScript**。所以我当时想：“你能看看这个文件夹和这个文件夹吗？”然后它就提出了这个非常棒的插件架构，再次受到了人们的启发。然后这就是为什么，你知道，我有了这种感觉，然后我提出了，是的，这就是我昨晚基本上构建的东西。我的意思是，这听起来会完全不同，比如，你知道，PR在你的工作流程中，你不会那么多地使用PR，因为**CI**只是不同了。测试仍然在进行，有一个更重要的反馈循环。你更多地使用“编织”而不是代码。你更多地谈论架构和品味。这对我来说听起来是一个相当大的转变。现在，在这个世界里，假设你达到了一个点，你要雇佣下一个一、二、三个开发者加入这个团队。让我们想象一下，这个东西有了自己的生命，你知道，也许它也是一个生意。你会寻找什么样的技能？你会给现在有经验的工程师什么建议？你会很高兴与谁合作？什么样的专业知识或项目你会寻找，对于一个听起来能以这种方式工作或能适应这种工作方式的人？

<details>
<summary>Original English</summary>

**Peter**: code via via **GT** and because it's all **TypeScript**. So I was like, can you look into this folder and this folder? And then it just came up with this really insanely good plug-in architecture again by like being inspired by the people. And then that's why, you know, I have this feeling and then I I came up with Yeah, that's what I built last night basically. I mean, sounds like this is going to be completely different like you know **PRs** are are like in your workflow, you're not using **PRs** that much as **CI** is just different. It's it's tests are still doing there's an more important feedback loop. you're using things more like weaving instead of code. You're talking more about architecture and taste. It sounds like a pretty big shift to me. Now, in this world, let's assume you get to the point where you're going to you're hire the next one and two and three developers on this team. Let's imagine that this thing gets a life of its own and you know, maybe it's a business as well. What skills would you look for? And what would you advise a an experienced engineer right now? Who would you be excited to work with? kind of either expertise projects would you look for for someone who sounds like who can work in this way or can pick up this way of working?

</details>

**Peter**: 那些在**GitHub**上活跃并做开源项目的人，以及那些让我觉得他们热爱这个游戏的人。在这个新世界里，你学习的方式就是尝试各种东西，它非常像一个游戏，你随着技能的提高而进步，就像乐器一样。你必须不断尝试，我现在效率这么高，速度这么快，我不知道，就像我想，前几天我一天之内有600个提交。这简直是疯了，而且它能工作，它不是，不是说有人做了代码审查，然后说，哦，这实际上不是草率的，是的，呃。

<details>
<summary>Original English</summary>

**Peter**: Someone who's active on **GitHub** and does open source and and someone where I have the feeling that they they love the the game. The way you learn in this new world is by like trying stuff and it very much feels like a game where you improve your skills as you get better like like a like a music instrument. you have to like keep trying and I and I that I'm now this efficient and this fast and I don't know like I I think like the other day I had like 600 commits in a single day. this is like completely nuts and it works like it's not it's not like there was there was a somebody did a code review and said like oh this is actually not slop and like yeah uh

</details>

**主持人**: 这需要很多技巧。

<details>
<summary>Original English</summary>

**主持人**: there's a lot of skill that went into

</details>

**Peter**: 是的，这需要大量的努力工作，但你需要玩弄技术并学习，然后你就会进步。一开始可能会令人沮丧，我不知道，有点像，你知道，你开始去健身房，会很糟糕，会很痛苦。

<details>
<summary>Original English</summary>

**Peter**: yeah it's it's it's it's a lot of hard work but you need to play with the technology and learn and then you will get in the beginning it might be frustrating I don't know kind of like you you know you start going to the gym it's going to suck it's going to be painful

</details>

**Peter**: 但很快你就会变得更好，你会感觉到你的工作流程变得更快，然后你会感觉到进步，然后你就会慢慢上瘾。所以，所以，是的，玩，而且，是的，也要努力工作。

<details>
<summary>Original English</summary>

**Peter**: but very quickly you like you get better and you and you feel that that your workflow gets faster and then you feel the improvements and then you slowly get hooked. So So but yeah, play and and yeah, also work hard.

</details>

**主持人**: 是的，我的意思是，你在这上面投入了更多时间。

<details>
<summary>Original English</summary>

**主持人**: Yeah, I I mean you're putting in more hours into this thing.

</details>

**Peter**: 我现在从未，我从未像现在这样努力工作，即使在我经营公司的时候。我从未像现在这样努力工作。不是因为我必须，而是因为它太上瘾了，太有趣了，也因为我现在正在利用这个有吸引力的时刻，有很多人在推动我。嗯，我觉得，这可能是因为，我想你很有商业头脑。不一定是在商业领域，而是看到机会。现在似乎有一个获得关注的开放机会，对吧？就像你说的，现在人们公开工作似乎很新奇。你告诉我，你认为即使你想雇佣人，你也雇不到，因为没有多少人公开工作，明确使用这些东西。快进两三年，一旦很多人开始这样做，每个人都这样做，那就会有点无关紧要了。所以还有一群人，很多人担心的是新毕业生，那些没有经验的人，他们要么还在学校，要么即将毕业，因为当然，你在这个时候已经是一个经验丰富的工程师了。你知道，你有很多东西可以借鉴。把自己放在那样的人的鞋子里，以你现在的知识，你会推荐他们做什么活动，构建什么东西，或者尝试什么？你会推荐他们专注于软件工程的基础知识，还是专注于代理，或者两者结合？

<details>
<summary>Original English</summary>

**Peter**: I've never right now I've I've never I never worked more even even when I had my company. I I've never worked so hard as I do now. Not because I have to, but because it's so addictive and so much fun, but also because right now I'm like using the moment where where this has traction and and there's a lot of people who like are pushing me. Um, and I I feel could it be cuz I think you have pretty good business sense. Not not not necessarily in the business business, but seeing when there's an opportunity there is an opening for to get traction, right? Like what you said for people to work in the open right now it seems novel. You're telling me you don't think you could, even if you wanted to hire, you don't think you could hire people cuz there's not many people working in the open, clearly using these things. Fast forward 2 or 3 years from now, once a bunch of people start to do it and everyone does it, it's kind of like moot a little bit. So there there's also that a group that a lot of lot of people are worried about is the the new grads, the the people with with no experience who are either in school or about to graduate because of course you've been an experienced engineer by the time this came around. you know, you have a lot of things to build on. Putting that yourself into shoes of of someone like that and knowing what you know now, what would you recommend of of activities that they do, things that they build or try and you know like do would you recommend on focusing on the fundamentals of software engineering on this on the agents kind of mixing the two?

</details>

**Peter**: 我会建议他们保持无限的好奇心。是的，进入这个市场会更难。它绝对会更难，你需要构建东西来获得经验。我不认为你需要写很多代码，但你需要，我不知道，你知道有很多复杂的开源项目你可以查看和学习，你有一台无限耐心的机器，能够向你解释所有事情，所以你可以提问，你可以问所有问题，为什么它是这样构建的，以获得系统理解，但这需要真正的好奇心，而且我认为大学现在还没有很好地设置来教你这些，这通常是你通过痛苦发现的东西，对新人来说不会容易，但他们有一个好处，就是他们没有被所有经验所污染，他们会以我们甚至想不到的方式使用代理，因为他们不知道它不起作用，到那时它可能就起作用了。

<details>
<summary>Original English</summary>

**Peter**: I would I would recommend them to be infinitely curious. Yes, it's going to be harder to enter this market. It's it's absolutely going to be harder and you need to build things to like gain experience. I don't think you need to write a lot of code but you need to I don't know you know there's a lot of open source that is complex that you can like check out and learn and you have an infinitely patient machine that is able to explain you all the things so you can ask you can ask all questions why why was it built this way to like gain system understanding but it requires real curiosity and I don't think universities right now are set up to teach you that in a in in a really good way this is usually something you discover through pain it's it's not going to be easy for new people, but but they have they have the benefit that they are not tainted by all the experience like they they they use agents in ways that we don't even think about again because they don't know that it doesn't work and by then it probably does

</details>

**主持人**: 而且他们的朋友也一直在用它。

<details>
<summary>Original English</summary>

**主持人**: and also their friends use it all all the time

</details>

**Peter**: 尤其像，前几天我有一个小的菜单栏应用，用于**Cursor**和**Cloud Code**等所有东西的成本跟踪，它有点慢。所以我当时想：“好吧，让我们做性能测量。”我的老方法是打开**Instruments**然后点击。它会直接通过终端调用并做所有事情。这让我大吃一惊。我当时想，我甚至不需要再打开**Instruments**了。它只是让它更快了。然后提出了一些建议。我当时想，所有这些听起来都不错。做吧。

<details>
<summary>Original English</summary>

**Peter**: especially like like the other day I I have this little menu bar app for cost tracking on on on on **cursor** and and and **cloud code** and everything and it was a bit slow. So I I was like, "Okay, let's do let's do performance measurement." And and my old way is like I open **instruments** and click around. And it would just call and do everything by the terminal. It blew me away. I was like I didn't even have to open **instruments** anymore. And it just like made it faster. And then did like some recommendations. I'm like all of that sounds good. Do it.

</details>

**主持人**: 是的。我想我们可能低估了进入科技行业的人的足智多谋，也低估了年轻人。如果我想到一些伟大的公司，它们都是由非常年轻、显然非常缺乏经验但充满激情的人创立的。所以那也存在。是的，这是一个巨大的机会。我特别注意到，我必须注意到，你提到的所有关于你的方式，你知道，编织代码，不关心PR，不关心代码审查，这是一个巨大的变化，因为这些东西已经伴随我们，就像，在你的生命中超过15年，它们实际上，你知道，很多都是**PSPDFkit**的坚实基石，对吧？是的，我们需要，我们需要很多新东西。即使，你知道，即使我收到一个PR，我实际上对提示比对代码更感兴趣。我要求人们请添加提示，有些人会这样做，我读提示比读代码更多，因为对我来说，这是一种更高的信号，表明你如何得到解决方案，你实际问了什么，涉及了多少引导，而不是实际输出。对我来说，这让我对输出有了更多的了解。我不需要阅读代码，或者，如果有人想要一个功能，我要求一个提示请求，就像写得非常好，因为那样我就可以直接让我的代理指向那个问题，它就会构建它。所以，因为工作就是思考它应该如何工作，细节是什么，如果别人为我做了，我真的可以说“构建”，它就会工作。呃，然后，是的，当然我会思考。但它真的会，或者如果有人给我发一个只是几个修复的PR。我告诉人们请不要那样做。那会让我花十倍的时间去审查，只需在**Codex**中输入“修复”，然后等几分钟。所以有很多这样的疯狂事情，它们会完全不同。

<details>
<summary>Original English</summary>

**主持人**: Yeah. I I think we might be underestimating both like how resourceful people entering tech have been also how young people if I think about some of the great companies started they were very young and obviously very inexperienced but had a lot of passion so so that's there as well yeah it's it's a big opportunity I I'm especially taking in like it's I have to take it in like but all the things you mentioned about just your way you know weaving code in not caring about **PR** not caring about code reviews it's a big change because these things have been us with like again for like 15 plus years of your life they have been in fact you know a lot of it has been kind of you know solid building blocks of **PSPDFkit** right yeah we need we need a lot of new things even you know even when I get a **PR** I'm actually more interested in the prompts than in the code I I ask people to please add the prompts and some do and I I read the prompts more than I read the code because to me this is this is a way higher signal of like how did you get to the solution what did you actually ask how much steering was involved then the actual out to me this gives me more idea about the output I don't have to read the code or like if someone wants a feature I ask for a prompt request like write it up really well because then I can just point my agent to the issue and it will build it so because because the the work is the thinking about how it should work and what the details are and if someone else does it for me I can literally say build and it will work uh and I and then yeah of course I think about But it will will re really or if someone sends me a **PR** that are just a few fixes. I told people please don't do that. It takes me 10 times more time to to review that and just type in fix in in in **codex** and wait a few minutes. So there's there like all these insane things that are like would have been completely different

</details>

**Peter**: 甚至在开始的时候。呃，现在我们有一个单行命令，但在过去两周里，当它真正获得关注时，我告诉人们只需将代理指向仓库进行配置，所以我没有，我没有入职流程，但我们有基于**Cloud Code**的入职流程，**Claude**会检查**GitHub**仓库，阅读内容，并为这些人编写配置，并设置好一切，使其工作，比如设置一个启动代理，它没有手动设置，因为它不再是优先事项，因为代理现在可以为你做这些，而且由于产品是由代理构建的。它们以代理期望的方式精确地命名和组织事物。在权重中编码了某些方式，它们期望事物如何命名和一切都完全符合它们的期望。所以它们非常擅长导航自己的产品。所以，在入职方面投入太多精力并不是优先事项。我的意思是，最终我想要这种神奇的体验，但更重要的是确保你的消息送达，并且事情不会崩溃。所以入职流程实际上就像：在你的代理中输入这个提示。嗯，即使在一年前，这也会令人震惊。

<details>
<summary>Original English</summary>

**Peter**: even even at the beginning. uh now we have a oneliner but for the last two weeks like when it got really traction I told people to just just point an agent at the repository to configure it so so I didn't had I didn't have an onboarding but we had **cloud codebased** onboarding where **claude** would like check out the **G** repository read the things and write the configuration for those people and set everything up so it works like set up a launch agent that didn't have the manual setup because it was not a priority anymore because because agents can now do that for you and the and the and since the the product was built by agents. They structured it exactly the way agents expect things to be named and things. There's certain ways that are encoded in in in the in the weights how they expect things to be named and everything exactly like how they expect. So they are really good at navigating their product. So it was not a priority to work on onboarding as much. I mean eventually I wanted this magical experience but it was more important to like make sure that your message arrives and that things don't explode. So onboarding was literally like type this prompt into your agent. Um which is would have been mind-blowing even a year ago.

</details>

### 快速问答与总结

**主持人**: 好的。那么，为了结束，我们来做一些快速问答。我只问，你告诉我你脑海中想到的。有什么工具不是**CLI**，不是**IDE**，可以是实体的，你使用并会推荐的？

<details>
<summary>Original English</summary>

**主持人**: All right. So to to wrap up, we'll do some rapid questions. So I'll just ask and you tell me what's on your mind. What's a tool that is not a **CLI**, not an **ID**, it can be physical that you you use you like you would recommend?

</details>

**Peter**: 我买了很多小玩意，很多都积灰了。但有一个有点糟糕，但不贵的东西，给了我几乎无限的快乐。它是一个**Android**驱动的照片架，我可以上传照片，它有一个电子邮件地址，朋友可以发送照片，它就会显示照片。我在家里又放了几个。我的意思是，即使动画有点卡顿，因为它运行**Android**，技术上很糟糕，但它给了我无限的快乐，因为它是一个低科技产品，只是显示照片，提醒我生活中快乐的时刻，它大概200美元。老实说，它给我带来的快乐比我最新买的**iPhone**还要多。我买了**iPhone 17**。我还没拆封，因为我只是在脑子里想要它，但后来我没能动手，因为它只是一个麻烦，要移动SIM卡等等。我基本上说，没有，没有，没有，没有可感觉到的好处，但这个小设备给了我无限的快乐。

<details>
<summary>Original English</summary>

**Peter**: I buy a lot of gadgets and many of them dust away. But there's this one kind of crappy thing that was not expensive that gives me almost unlimited amount of joy. And it's like this **Android** powered photo stand where I can upload pictures and where like it has an email address and friends can send pictures and it will just show pictures. And I and I put a few a few in in my house again. And I mean even the animations are a little croppy because it runs nward and it's terrible from the technology but but it gives me infinite number of joy because it is low tech that just shows pictures and reminds me of happy moments in my life and it was like 200 bucks and I don't know to be honest that gets me more joy than the latest **iPhone**. I bought the **iPhone 17**. I still haven't unpacked it because I just in my head I wanted it but then I couldn't get around to it because it's just a hassle to like move the **Sims** around and I said like basically no no no no feelable benefit but like this little this little device gives me infinite joy.

</details>

**主持人**: 有什么东西能帮助你在科技之外充电，或者只是远离科技和屏幕？

<details>
<summary>Original English</summary>

**主持人**: What's something that helps you recharge outside of tech like just or just moving away from from tech and screens?

</details>

**Peter**: 即使我工作时间很长，让我保持清醒的是去健身房，更好的是和教练一起锻炼，把手机留在储物柜里。然后我真的有一个美好的小时，在那里我只是感受自己，我活在当下，没有被通知分心，也没有想去碰手机。我们需要更多这样的时间。有时我甚至会去散步，把手机留在家里，这感觉很可怕。它几乎就像一个器官了，你知道吗？就像你的身体知道它在哪里，如果你不知道你的手机在哪里，你就会抓狂。

<details>
<summary>Original English</summary>

**Peter**: What keeps me sane, even if I work crazy hours, is going to the gym, even better, working with a a coach and leaving my phone in the locker. And then I really have like a good hour where I just feel me and I and I'm like in the moment and I'm not distracted by notifications or tempted to like touch my phone like we need more time for this. Or even sometimes I I I go for a walk and I I leave my phone at home and it feels very scary. It's almost like a it's almost like an organ now, you know? It's like your your body knows where it is and if you don't know where your phone is, you freak out.

</details>

**主持人**: 我玩得很开心。

<details>
<summary>Original English</summary>

**主持人**: I I'm having I'm having a blast.

</details>

**主持人**: 太棒了，Pete。非常感谢。嗯，这是一次非常有趣的对话，我觉得一个人团队如何用AI构建软件已经完全不同于我们过去习惯的方式。有一件事真的引起了我的注意，那就是Peter如何用提示思考，而不是拉取请求，以及他如何编织代码，而不再合并代码。他认为拉取请求并没有那么有用，宁愿在**GitHub**上获得提示建议。我确实认为我们可能需要重新思考提示的重要性，或者至少在软件开发中分享提示的重要性，随着我们越来越多地使用AI和AI代理。另一件让我印象深刻的事情是Peter强调了“闭环”的重要性。正如Peter所解释的，AI在编码方面如此出色，但在写作方面却常常平庸的原因是，你可以验证代码。你可以编译它，运行测试，检查输出。所以，让AI系统开发工作良好的秘诀是设计你的系统以“闭环”，并让AI运行测试。最后，我很好奇Peter即使在不写代码的时候，是否也同样投入。结果是，他确实如此。他比以往任何时候都更投入。他告诉我，同时处理多个AI代理比仅仅编写代码在精神上更累。我的感觉是，一个没有AI时也是一个优秀的开发者，有了AI后可以成为一个出色的代码架构师或编码者。这只是我目前的一种直觉，但Peter似乎证明了这一点。最后，我们应该注意到，**Clawbot**更像是一个“YOLO”项目，而不是大多数生产应用程序。所以，我们讨论的方法请酌情采纳。同时，我确实认为Peter所做的很多事情很可能会传播到生产代码的构建中，只是审查和验证将成为这些项目中更重要的一步。如果你喜欢这个播客，请务必在你喜欢的播客平台和**YouTube**上订阅。如果你也能给节目留下评分，我们将不胜感激。谢谢，下期再见。

<details>
<summary>Original English</summary>

**主持人**: Love it. This is great, Pete. Thanks very much. Well, this was a super interesting conversation and it feels to me that how one person teams built software with **AI** is already completely different to what we've been used to. One thing that really caught my attention is how **Peter** thinks in prompts and not pull requests and how he weaves in the code and no longer merges the code. He doesn't find poll requests all that useful and would rather get prompt suggestions even on **GitHub**. I do think we might have to rethink the importance of prompts or at the very least sharing of prompts in software development the more we use **AI** and **AI** agents. Another thing that struck with me was **Peter**'s emphasizing how important is to close the loop. As **Peter** explained, the reason **AI** is so good at coding but often mediocre at writing is because you can validate code. You can compile it, run tests, check the output. So, the secret to making **AI** system development work well is to design your system to close the loop and have the **AI** run the test. Finally, I was wondering if **Peter** is in the flow as much even when he's not writing code. Turns out he is. He's in the flow more than ever. And he told me that it's mentally more exhausting to juggle several **AI** agents in parallel than it was just to write code. My feeling is that someone who was a great developer without **AI** can be an excellent kind of code architecture or carding person with **AI**. This is just a gut feeling I've had so far, but **Peter** seems to prove it. Finally, we should note that **Clawbot** is more of a **YOLO** project than most production apps. So, take the approaches that we discussed with a grain of salt. At the same time, I do think that a lot of what **Peter** does could well spread to building production code, except review and validation will become a much more important step in those projects. If you enjoy this podcast, please do subscribe on your favorite podcast platform and on **YouTube**. A special thank you if you also leave a rating on the show. Thanks and see you in the next one.

</details>