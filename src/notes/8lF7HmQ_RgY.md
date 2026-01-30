---
author: The Pragmatic Engineer
date: '2026-01-28'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=8lF7HmQ_RgY
speaker: The Pragmatic Engineer
title: "Peter Steinberger访谈：从PSPDFKit到Claudebot，AI如何重塑软件开发与“Vibe Coding”的崛起"
summary: "PSPDFKit创始人Peter Steinberger分享了他从传统软件开发到AI驱动开发的彻底转型。在经历了职业倦怠并离开科技界三年后，他利用Claude等AI工具构建了个人助理Claudebot，并提出了“闭环原则”和“代理工程”等新概念。访谈深入探讨了为何代码审查（Code Review）已死、Pull Request应转变为Prompt Request，以及AI如何让开发者从编写代码转向设计系统架构。"

area: "tech-engineering" # Must select ONE from the provided list
category: "software-development" # Must select ONE from the provided list based on content

project: []
tags:
  - "agentic-workflow"
  - "vibe-coding"
  - "software-architecture"
  - "legacy-code-refactoring"
  - "developer-productivity"

people:
  - "Peter Steinberger"

companies_orgs:
  - "PSPDFKit"
  - "Anthropic"
  - "OpenAI"
  - "Apple"

products_models:
  - "Claudebot"
  - "Claude"
  - "GitHub Copilot"
  - "Cursor"

media_books: []
status: evergreen
---

### 早期经历与 PSPDFKit 的诞生

**Gergely Orosz**: 如果你能在一天内合并 600 个提交（commits），而且其中没有一个是垃圾代码（slopp），那会怎样？这就是今天的嘉宾，**Claudebot** 的创造者 **Peter Steinberger** 声称他正在做的事情。Peter 是一位杰出的开发者，他构建了 **PSPDFKit**，这是一个在超过 10 亿台设备上使用的 PDF 框架。之后他经历了职业倦怠，卖掉了股份，并在科技界消失了 3 年。今年，他回归了，但他构建软件的方式以及他现在所做的事情，看起来与传统的软件开发截然不同。在今天的节目中，我们将探讨为什么他不再阅读他发布的大部分代码，以及为什么这并不像听起来那么疯狂。他如何构建 Claudebot，这是他广受欢迎的个人助理项目，感觉就像是 **Siri** 的未来；区分高效 AI 助手编码与令人沮丧的“氛围编码”（vibe coding）的“闭环原则”（closing the loop principle）。为什么他说代码审查（code reviews）已死，PR（Pull Requests）应该被称为提示词请求（Prompt Requests），以及更多内容。如果你对软件工程工作流在未来几年将如何因 AI 而改变感兴趣，这一集就是为你准备的。本期节目由 **Statsig** 赞助……好了，Pete，欢迎来到播客。

<details>
<summary>Original English</summary>

**Gergely Orosz**: What if you could merge 600 commits on a single day and none of it was slopp? This is what today's guest, Peter Stainberger, the creator of Claudebot, claims he's doing. Peter is a standout developer who built PSP PDF kit, the PDF framework used on more than 1 billion devices. Then he burned out, sold his shares, and disappeared from tech for 3 years. This year, he came back and how he builds and what he's doing now looks nothing like traditional software development. In today's episode, we cover why he no longer reads most of the code he ships, and why that's not as crazy as it sounds. How he is building Clawbot, his wildly popular personal assistant project, which feels like the future of Siri, the closing the loop principle that separates effective AI assistant coding from frustrating vibe coding. Why he says code reviews are dead and PR should be called prompt requests, and many more. If you're interested in how the software engine workflow could change in the coming years thanks to AI, this episode is for you. This episode is presented by Statsig... Right, Pete, welcome to the podcast.

</details>

**Peter Steinberger**: 谢谢邀请我，Gergely。

<details>
<summary>Original English</summary>

**Peter Steinberger**: Thanks for having me, Gay.

</details>

**Gergely Orosz**: 能当面见到你真是太棒了。

<details>
<summary>Original English</summary>

**Gergely Orosz**: It is awesome to meet you in in person.

</details>

**Peter Steinberger**: 是的，我差点搞砸了。

<details>
<summary>Original English</summary>

**Peter Steinberger**: Yeah, and I almost messed it up.

</details>

**Gergely Orosz**: 是啊。发生什么事了？你忘记时间了吗？这经常发生吗？怎么回事？

<details>
<summary>Original English</summary>

**Gergely Orosz**: Yeah. What what what what happened? You lost track of time. Does that happen often? And how how so?

</details>

**Peter Steinberger**: 嗯，通常不会。通常不会。嗯，这对我来说是一个有趣的时期，因为我最新的项目正在爆发。

<details>
<summary>Original English</summary>

**Peter Steinberger**: Um, not usually. Not usually. Um, this is an interesting time for me cuz I cuz my latest project is is blowing up.

</details>

**Gergely Orosz**: Claude，对吧？

<details>
<summary>Original English</summary>

**Gergely Orosz**: Cloud, right?

</details>

**Peter Steinberger**: Claudebot。是的。

<details>
<summary>Original English</summary>

**Peter Steinberger**: Clawbot. Yeah,

</details>

**Gergely Orosz**: Claudebot。

<details>
<summary>Original English</summary>

**Gergely Orosz**: Cloudbot.

</details>

**Peter Steinberger**: 我现在很难保证充足的睡眠，但这很有趣。我从未经历过一个社区发展得如此之快，与之共事简直太有趣了。

<details>
<summary>Original English</summary>

**Peter Steinberger**: I'm struggling a bit to get enough sleep, but it's it's it's interesting. I never I never had a community blowing up so fast and it's just incredibly fun to work with.

</details>

**Gergely Orosz**: 在我们深入探讨 Claudebot 和你正在做的所有有趣事情之前，我想把时间倒回到很久以前。你创建了 PSPDFKit，我想它在超过 10 亿台设备和用户上使用。如果你看到一个 PDF 渲染器，你可能看到的就是它。但在那之前，你是怎么进入科技行业的？天哪，你是怎么进入科技行业的？

<details>
<summary>Original English</summary>

**Gergely Orosz**: So, before we we get into Clubbot and all the fun stuff you're doing, I wanted to rewind all the way way back. You create a PSPDF kit which is used I think on more than 1 billion devices users. If if you see a PDF render you probably see that. But even before that how did you get into tech? Oh my god. How did you get into tech?

</details>

**Peter Steinberger**: 我来自奥地利农村。嗯，一直比较内向。后来我们家总是有暑期客人，其中一位是个电脑迷，然后我就对他那台机器着迷了，求我妈妈给我买一台。从那以后，大概是在高中吧。

<details>
<summary>Original English</summary>

**Peter Steinberger**: So I'm from rural Austria. Um always more being the introvert. So eventually I we always had like summer guests and one of them one of them was a was a computer nerd and then I kind of got hooked with with like the machine he had and begged my mom to buy me one and ever since then I this was in high school or so.

</details>

**Gergely Orosz**: 我猜那时你 14 岁。

<details>
<summary>Original English</summary>

**Gergely Orosz**: I guess I was 14.

</details>

**Peter Steinberger**: 对。从那以后我就开始捣鼓，我记得最早的事情是我从学校偷了一个旧的 DOS 游戏，然后给软盘写了一个复制保护程序，这样我就能卖掉它。加载需要 2 分钟。我总是在捣鼓。当然也玩了很多电脑游戏，但构建东西感觉几乎就像在玩电脑游戏。就像现在，这种感觉绝对比玩《异星工厂》（Factorio）还要好。

<details>
<summary>Original English</summary>

**Peter Steinberger**: Yeah. And ever since I started tinkering, like I can remember the earliest thing was like I stole an old DOS game from my school and then wrote a copy protection for the floppy disc so I could sell it. It took like 2 minutes to load. I was just always tinkering. Also playing a lot of computer games of course, but like building stuff almost feels like playing a computer game. Like definitely right now it feels better than Factorio.

</details>

**Peter Steinberger**: 刚开始的时候，我读了一些相当于 Windows 批处理脚本的东西，然后我做了网站。所以我猜学了一点 JavaScript，尽管我完全不知道自己在做什么。我真正必须学习如何构建东西的第一门语言是在我上大学的时候。我从未见过我父亲。我来自一个贫穷的家庭。所以我必须工作。我必须自己资助学业，对吧？所以当别人在度假时，我就在一家公司全职工作。

<details>
<summary>Original English</summary>

**Peter Steinberger**: Oh, when I started out, I I I I read like the equivalent of bash scripts for Windows and then I did like websites. So, I guess a little bit of JavaScript, uh, even though I had no clue what I was doing. And then the actual first language where I I had to learn how to build things is when I started university. And I never met my dad. And I come from a from a poor family. So, I always had to work. like I had to had to finance my own studies, right? So when other people were were having holiday, I just worked full-time at a company.

</details>

### 从 iPhone 时刻到创业

**Gergely Orosz**: 那么你是如何偶然进入 iOS 领域，以及 PSPDFKit 的想法是从哪里来的？

<details>
<summary>Original English</summary>

**Gergely Orosz**: so so you you how did you stumble into both iOS and where did the idea from PSPDF come from?

</details>

**Peter Steinberger**: 甚至不是……是的，第一代 iPhone 在奥地利甚至都买不到。那是真的。过了一段时间，我在上大学，一个朋友给我看了 **iPhone**，我想我摸了它一分钟，然后立刻就买了一台，就像这样，当我感觉到它时，就像“咔哒”一声，对我来说那是一个“我靠（holy f***）”的时刻，因为它太不同了，太好了。所以我买了一台。那时我还没想过要为它开发软件，你知道。

<details>
<summary>Original English</summary>

**Peter Steinberger**: Not even yeah the first one the first one wasn't even available in in in Austria. That's true. Yeah. A little time goes went on and I was at university and a friend showed me the iPhone and I I think I I touched it for a minute and then immediately bought one like like this like it it clicked when I felt it and and to me this was like a holy f moment cuz it was just like so different and so much better. So I got I got one. I was still not thinking about building for it, you know. That was that was

</details>

**Gergely Orosz**: 那是什么时候？2009 年、10 年左右？

<details>
<summary>Original English</summary>

**Gergely Orosz**: when was this 2009 10 something like that.

</details>

**Peter Steinberger**: 对。对。然后我用了他们的浏览器。我记得那个故事。我当时正坐在地铁里。那时我在用一个同性交友 App，当时是 iPhone OS 2。

<details>
<summary>Original English</summary>

**Peter Steinberger**: Yeah. Yeah. And then I I used their browser. I I can see the story. I was I was literally driving in the subway. Mhm. And by the time I was using a gay dating app and this was iPhone OS 2.

</details>

**Peter Steinberger**: 我打了一段很长的信息。我按了发送，我们正好进入隧道，JavaScript 禁用了发送按钮，然后出现了一条错误信息，但当时没有复制粘贴。没有截屏。所以我当时就……而且我也不能滚动了，因为滚动被禁用了。所以这条很长的信息——有点情绪化的——就这么没了，我气疯了。我气疯了。我想这到底是怎么回事？我回到家，下载了 **Xcode**。这就是那个窗口期，我当时想 IDE 在哪里？

<details>
<summary>Original English</summary>

**Peter Steinberger**: So So I I long time ago I typed this long message. I pressed send and we were just going into a tunnel and the JavaScript disabled the send button and then an error message came but there was no copy paste. There was no screenshot. So I was just like and I couldn't scroll anymore because like scrolling was disabled. So like this long message was like a little bit emotional was gone and I was so mad. I was so mad. I'm like what the hell? I went home and I downloaded Xcode. That's that's where that's where the window came and I was like where is the ID?

</details>

**Peter Steinberger**: 我当时觉得这不可接受。我基本上黑进了那个网站。我用正则表达式来解析 HTML，这完全是不应该做的事情，但我构建了一个 App。我使用了 iPhone OS 3 Beta 版，用了 Beta 版的 Core Data，用了 RegexKitLite。我用了一个破解版的 GCC，它向后移植了 Blocks 编译器，这样我就能在 iPhone OS 3 中使用 Blocks。我花了很长时间才让它跑起来，因为我完全不知道自己在做什么，而且我在用各种 Beta 技术，但最终我让它工作了。我给那家公司写信说：“嘿，我在做一个 App。你们觉得怎么样？”当然没有收到回复。所以我就想，那就把它放到 App Store 上吧。

<details>
<summary>Original English</summary>

**Peter Steinberger**: So it was like like I was like this is unacceptable. I basically hacked the website. I used regular expressions to like download uh to parse the HTML which is like totally not something you should do and I built an app and I used I used iPhone OS3 beta with like core data in beta regaxit light. I used a hacked version of GCC that backported the blocks compiler so I could use blocks in iPhone OS3. It took me quite a while until anything worked because like I had no idea what I was doing and I was like using all kind of like beta tech but eventually I I got it to work and I I I wrote that company was like hey I'm making an app. What do you think about it? Got no response of course. So I was like let's just put it in the app store.

</details>

**Gergely Orosz**: 这是为了那个交友 App，对吧？

<details>
<summary>Original English</summary>

**Gergely Orosz**: And this was for the dating app right?

</details>

**Peter Steinberger**: 对。

<details>
<summary>Original English</summary>

**Peter Steinberger**: Yeah.

</details>

**Gergely Orosz**: 所以你只是看了看他们的 API，你可以很容易地在上面构建一个客户端。

<details>
<summary>Original English</summary>

**Gergely Orosz**: So you just like you know you looked at you saw their APIs you could just like easily like build a client on top

</details>

**Peter Steinberger**: API？那是 HTML。

<details>
<summary>Original English</summary>

**Peter Steinberger**: API. It was HTML.

</details>

**Gergely Orosz**: 哦。所以你解析了 HTML，把它变成了你自己的东西，就像你把它当作 API 使用一样。哦，真聪明。

<details>
<summary>Original English</summary>

**Gergely Orosz**: Oh. So, so you kind of parse the HTML, kind of turn it into your own, you know, like you use it as an API. Oh, clever.

</details>

**Peter Steinberger**: 我是说，那是在没人认为这会发生的年代，但我做了。我把它放到 App Store 上。我收费 5 美元，第一个月我就赚了 1 万美元。而我完全不知道自己在做什么。

<details>
<summary>Original English</summary>

**Peter Steinberger**: I mean, this was back in the day where no one thought this this would happen, but I made I put it in the app store. I charged five bucks for it and I made like 10k in the first month. And I had no clue what I was doing.

</details>

### PDF 渲染的艰难与商业化

**Peter Steinberger**: 后来我去了 **Nokia** 开发者日。这现在听起来都像石器时代了。天哪。然后有人走过来对我说：“嘿，他们在东欧某个地方做了这个 App，它能用，但有时会崩溃。”那是一个杂志阅读器，对吧？当时 iPad 刚出来，史蒂夫·乔布斯把它捧为救世主。所以每个人都在做杂志 App，我想那听起来是个有趣的短期工作。我说好吧，我会帮你们。我打开那个 App，那是我这辈子见过的最糟糕的代码。真的就是一个文件，几千行 Objective-C。

<details>
<summary>Original English</summary>

**Peter Steinberger**: And then I I went to the Nokia development days. This is all like stone age by now. My god. And then someone came up to me and said, "Yeah, they built this app somewhere in Eastern Europe and it works but it crashes sometimes and it was like was like a magazine viewer, right? This was back when the iPad just came out and Steve Jobs hit that like this is the savior. So everybody was building magazine apps and I was like that sounds like an interesting short-term gig. And I I was like okay I I'll I'll I'll help you out. And I opened the app and it was like oh the worst code I've ever seen in my life. It was literally one file with like thousands of lines of Objective C.

</details>

**Peter Steinberger**: 他们用 Windows 作为标签页。我都不知道这能行。我很惊讶这居然能跑起来，但感觉就像纸牌屋。我试图进行外科手术式的修复，但只要你动一个地方，其他地方就会坏掉。所以我把它稍微稳定了一下，然后告诉他们：“听着，这太疯狂了。我要为你们重写这个。”是的。但这花了半年时间。我说我要在一个月内完成。好吧，我花了两个月。我差得不远。然后我就在做一个 PDF 阅读器。你知道，对于每一个技术问题，领域并不是完全不重要，但你总能在每个领域找到有趣的问题。

<details>
<summary>Original English</summary>

**Peter Steinberger**: Yes. Where they used windows as tabs. I I didn't know this worked. I was surprised this worked at all, but it felt like a a house of cards. And I I tried to I tried to surgically fix things, but like as soon as you would touch something, something else would break. Um so I got it I got it somewhat stabilized and I told him like, "Look, this is this is like madness. Um I'm going to rewite this for you." Yeah. But it took half a year. I'm going to do it in in a month. Well, it took me two months. Um, I wasn't that far off and and then here I was working on a on a PDF viewer. You know, on every technical problem, the domain is is I wouldn't say like completely unimportant, but you can always find interesting problems in every domain.

</details>

**Peter Steinberger**: 那里有很多有趣的问题，因为你有一个 C 调用来渲染 PDF，可能需要 30MB 内存，但整个系统只有 64MB。所以如果你不聪明，不非常小心你在后台做什么，操作系统就会杀掉你。我非常执着于把它做好，比如旋转时页面要有动画效果，你知道，我喜欢那些细节。我在那上面花了太多时间。这就是为什么我花了两个月而不是一个月。但最终结果很好。

<details>
<summary>Original English</summary>

**Peter Steinberger**: And there was a lot of interesting problems because you had a C call that would render a PDF that would maybe take 30 megabytes, but the whole system had 64 megabytes. So if you're not very smart and like very careful what you do in the background and when the OS would just kill you. I got really fixated at like making it good like when the rotation is like that the page would like animate and so so you know I I like I like those details. I spent way too much time on that. That's why I took two months instead of one. But the end result was it's good.

</details>

**Peter Steinberger**: 后来一个朋友发短信给我。他说：“嘿，我在做这个杂志 App，真的很难。”我说：“不可能难。我知道。因为我做过。”他说：“你能把代码给我吗？”我说：“当然。”所以我把那个杂志 App 中的 PDF 部分提取出来卖给了他。我确保对方没问题。然后我卖给了他。我想：“既然他对这个感兴趣，为什么不试着卖给其他人呢？”我用了一个 WordPress 模板，把它改得能在 GitHub Pages 上运行，然后在最后的 Fastlane 流程中，你会得到一个指向我个人 Dropbox 的链接，里面是源代码的压缩包。我在一个下午就把这个搞定了，发了推特，那一周有三个人买了，我想当时是 200 美元。对我来说这太棒了。

<details>
<summary>Original English</summary>

**Peter Steinberger**: Um and then I I I worked with them for a while and then a friend texted me up. He's like, "Yeah, I'm working on this magazine app and it's really hard." I'm like, "Yeah, no way it's hard. I know." Oh, like I did it. And and he was like, "Can you can you can you get me the code?" I'm like, "Sure." So, I sold him like I extracted the the part that was PDF from from this magazine app. And I I made sure I made sure like the other person was okay. And then I sold him that. I was like, "Well, if he's interested in that, why let's not try to sell it to other people." I used a a WordPress template and mutilated it to run on GitHub pages and then and then when you did the the fast lane flow at the end you got a Dropbox link to my personal Dropbox with a source code sip and I put this on one afternoon and I I tweeted it and and then in that week three people bought it and it was like I guess 200 bucks but back then and for me this was like amazing

</details>

**Peter Steinberger**: 不仅有三个人买了，还有 10 个人发邮件抱怨，因为他们想要它，但它没有他们想要的功能。你知道，我就像被“技术难题吸引（nerd sniped）”了一样。我想：“哦，我没有文本选择功能。那能有多难？”3 个月后。哦，是的。真的很难。特别是在 PDF 中进行文本选择。

<details>
<summary>Original English</summary>

**Peter Steinberger**: And not only I got like three people who just bought it and like 10 emails who comp 10 people who complained about uh because they wanted it but it didn't have the features they wanted. You know, it's like I got nerd sniped. I was like, "Oh, I didn't have text selection." Oh, how hard can it be? 3 months later. Oh, yeah. It's really hard. Text selection in a PDF specifically.

</details>

### AI 时代的回归与“氛围编码”

**Gergely Orosz**: 从外界看来，你卖掉了股份，赚了足够多的钱，如果不想工作就不必再工作了。对于很多人来说，这听起来像是绝对的梦想。然后我注意到你的博客完全停止更新了好几年。在这段时间里你做了什么？在你回到现在这个状态之前，你学到了什么？

<details>
<summary>Original English</summary>

**Gergely Orosz**: So, you know, from from the outside, it seems you sold your shares, you made enough money to not have to work again, should you not choose. And for a lot of people, like, you know, people who are starting out their business or or one day want to start a business, this sounds like the absolute dream. And then what I noticed is from the outside again on your blog, the blog post completely stopped for several years. What what did you do uh in in this time uh and and what what what did you learn in this time, you know, before you came back to to where we are now?

</details>

**Peter Steinberger**: 我需要很多时间来减压。我补了很多我觉得错过的东西。有几个月我甚至没开过电脑。有一段时间我只是没有这种“我现在该做什么？”的感觉。我确实觉得“何必呢？”你知道，你不应该这么早退休，或者有一个这么好的退出，以至于你再也不用工作了。这让我的心态有点乱。那是艰难的几年。然后在四月，我想起几年前的一个想法，甚至是我开始的一个副业项目，我想继续做那个。然后在三年多之后，我坐回电脑前，开始重新写代码。

<details>
<summary>Original English</summary>

**Peter Steinberger**: I needed a lot of time to decompress. I catched up a lot on the things I thought I missed. I a lot. Um there were months where I didn't even turn on my computer. And for a while I was I just didn't had this feeling of like what should I do now? Like like I definitely was like why border? You know, you're not you're not supposed to to retire so early or like have so much have such a good exit that you never have to work again. That messed with my mind quite a bit. That that was some that was some hard years. And then in April I was like I there was this idea that I had years ago and even a side project that I started I was like oh yeah I want to I want to continue on that and then after after after more than 3 years I just sat back to my computer and and started hacking again.

</details>

**Gergely Orosz**: 所以 Claude 是你回归后的第一个工具？

<details>
<summary>Original English</summary>

**Gergely Orosz**: so clock was your first you you come back after like a you know hiatus and you immediately turned on clock code and you missed everything else before.

</details>

**Peter Steinberger**: 我拿了这个我做的大型混乱的副业项目，我有一个浏览器扩展，可以将 GitHub 仓库转换为一个大的 Markdown 文件，那是一个 1.3MB 的 Markdown 文件。我把它拖进 Google 的 AI Studio，用 Gemini 1.5 或 2.0 之类的，我输入“给我写个规范”，它生成了 400 行规范。然后我把这个规范拖回 Claude Code，我说“构建”，然后我继续、继续、继续。当我在做其他事情的时候，最终它告诉我“100% 生产就绪”，我启动了它，然后它崩溃了。

<details>
<summary>Original English</summary>

**Peter Steinberger**: I remember I took this big messy site project that I built and I have this browser extension where that that converts a GitHub repository into one big markdown that was like a 1.3 megabyte markdown file and I dragged it into into Google's CI studio with Geminina 2.5 or two to something and I typed write me a spec and it generated those 400 lines of spec And I dragged this back into cloud code and I was like build and then I continue continue continue and while I was like working on other stuff, you know, um and eventually told me like it's 100% production ready and I started it and it crashed.

</details>

**Peter Steinberger**: 然后我添加了一个 MCP（Model Context Protocol），这样它就可以使用浏览器。我想带 MCP 的播放器当时已经有了，它又循环了几个小时，然后我有了一个 Twitter 登录页面，它做了一些事情。虽然不是很好，但它确实做了一些事情。对我来说，这就是我的“我靠（holy f***）”时刻，太震撼了。

<details>
<summary>Original English</summary>

**Peter Steinberger**: Then I had then I added added an MCP so it could use the browser. I think the player with MCP was already there and it looped a few more hours and then I had a I had a Twitter login page and it it did something. I It was not great, but it did something. And to me to me this was my holy [ __ ] mind-blowing moment.

</details>

### 工作流的转变：从代码审查到系统架构

**Gergely Orosz**: 现在快进一下，你的工作流是什么样的？当你在做 Claudebot 时，你用终端吗？多个终端？用什么工具？你说你不怎么审查代码了，但你还在思考架构。你平均一天是什么样的？

<details>
<summary>Original English</summary>

**Gergely Orosz**: Right now jumping forward, what is your workflow like? Like like when you're working on on cloud bot, are you using a terminal, multiple terminals, which which tools and and how are you you know like you said you're not you're kind of like not reviewing the the code, but you're still thinking about architecture. Like what does your average day look like in terms of tooling?

</details>

**Peter Steinberger**: 我现在使用 **Claude Code**（Anthropic 的 CLI 工具）。如果你非常依赖 Claude Code 构建，你必须忘记很多为了用 Claude Code 产出好结果而必须做的傻事。Claude Code 是一个定义类别的产品，对于通用计算机工作来说非常棒，对于编码也真的很好，我几乎每天都在用。但对于在复杂应用程序中编写代码，**Codex**（此处指代一种更高级的编码代理模式或工具，可能是口误指 Cursor 或类似的 Agent）要好得多，因为它需要的时间是 10 倍。Claude 会读三个文件，然后自信地创建代码，然后你真的必须引导它、推动它，让它读更多的代码，这样它才能看到你代码库的更大图景，从而更好地编织进新功能。而 Codex 会保持沉默，只是读取文件 10 分钟。如果你只在一个终端上工作，我完全理解你会觉得这无法忍受。但我宁愿要一个不用我告诉它做什么的东西。

<details>
<summary>Original English</summary>

**Peter Steinberger**: If you're very much cloud code build you have to forget quite a lot of the the silliness that the things that you have to do to create good output with cloud code I mean I also met that team and and they created a whole new category. Like cloud code is is is a category defining product and it is amazing for general purpose computer work and it is is really good for coding and I I I I still use it almost every day. But for writing code in complex applications, Codex is just so much better because it it it takes 10 times longer. um Claude would read three files and then be confident enough to just like create code and then you really have to steer it and push it so it reads more code so it gets it sees a bigger picture of your codebase so that it it it weaves in new features better and Codex will just like be silent and just read files for 10 minutes and if you if you only work on one terminal I completely understand how you how you find this unbearable But I rather have something where it's also you don't tell it what to do.

</details>

**Peter Steinberger**: 我和模型进行对话。比如“让我们看看这个，对于这个结构我们有什么选择？你考虑过这个功能吗？”因为每个会话都是模型从对你的产品没有任何理解开始的，有时你只需要给它一点提示。这怎么样？那怎么样？所以它会探索不同的方向，你不需要计划模式。我只是在进行对话，直到我说“构建这个”，它才会构建。有一些触发词，因为它们都有点急于触发，但只要我说“让我们讨论”或“给我选项”，它们就不会构建东西，直到我说“构建”。

<details>
<summary>Original English</summary>

**Peter Steinberger**: You know this is this is also something that people don't get like I have a conversation with the model. It's like oh let's look at this what what what what options do we have for this structure? Did you consider this feature? It's like because every every session is like the model starts from having no understanding about your product and you have and and sometimes you have to just give it a little bit of pointers. What about this and this? So it explores different directions and you don't need plan mode like I'm just having a conversation until I say build this it will not build this. There's some trigger words because it it is they all are a little trigger hungry but as soon as I say let's discuss or give me options they will not build things until I say build.

</details>

**Gergely Orosz**: 听起来你几乎就像是那个大写的“架构师”（Architect）。

<details>
<summary>Original English</summary>

**Gergely Orosz**: It sounds a little bit like you're almost, you know, for years back this this totally came got out of style. But there was this idea that you would have the architect with a capital A

</details>

**Peter Steinberger**: 我不喜欢“架构师”这个词。我喜欢“构建者”（Builder）。

<details>
<summary>Original English</summary>

**Peter Steinberger**: Well, I wouldn't say architecture. I I like the word builder.

</details>

**Gergely Orosz**: 构建者。

<details>
<summary>Original English</summary>

**Gergely Orosz**: Builder. Yeah.

</details>

**Peter Steinberger**: 我更关心结果，产品。我非常关心它的感觉和一切，至于底层的管道是如何工作的，我在结构上关心，但不是最细节的部分。有些人真的喜欢在难题上写代码，思考算法，不太喜欢构建产品，那些人真的会挣扎，经常拒绝 AI 或感到非常难过，因为这正是 AI 所做的工作——它解决了难题。

<details>
<summary>Original English</summary>

**Peter Steinberger**: And and and I think also that's there's a few categories that I see for people that are highly successful using using AI and people who really struggle. I care more about the outcome, the product. I very much care about how it feels and everything, but how the plumbing works underneath. I care structurally, but you know, not to the not the biggest detail. And then there are people who really love to to code on hard problems like think about algorithms don't really like the I'm building a product with like all the marketing all the they they more like they like to solve hard problems and those are the people who really struggle and and and often reject AI or get really sad because that's exactly the job where that AI does like it solves the hard problems.

</details>

### 闭环原则与 Prompt Requests

**Gergely Orosz**: 你提到“闭环”（closing the loop）。这是什么意思？

<details>
<summary>Original English</summary>

**Gergely Orosz**: And closing the loop you mean just have a way to to have have the agent be able to validate its work?

</details>

**Peter Steinberger**: 是的，这就是为什么我们目前拥有的这些模型在编码方面如此出色，但在创意写作方面有时表现平平的原因，因为没有简单的方法来验证。但我可以编译代码，我可以 Lint，我可以执行，我可以验证输出。如果你设计得当，你就有一个完美的循环。甚至现在对于网站，我以一种可以通过 CLI 运行的方式构建核心，所以我有一个完美的执行循环，因为浏览器循环慢得惊人。你想要一个循环快的系统。

<details>
<summary>Original English</summary>

**Peter Steinberger**: Yeah, that's why that's the whole reason why why those models that we currently have are so good at coding. But like sometimes mediocre good at writing creative because there's no easy way to validate right but code I can compile I can lint I can execute I can verify the output if you design it the right way you have a perfect loop like even now even now for for websites I built the core in a way that can be run via a CLI so it's like I have this I have this perfect uh execution loop because the the browser loop is insanely slow you want something that that loops fast.

</details>

**Peter Steinberger**: 令人惊讶的是，实际上使用代理编码（agentic coding）会让你成为更好的编码者，因为你必须更努力地思考你的架构，以便更容易验证，因为验证是让事情变好的方法。

<details>
<summary>Original English</summary>

**Peter Steinberger**: Surprise actually using aentic coding makes you a better coder because you have to have to think harder about your your your architecture so that it's easier verifiable because verifying is the way how to make things good.

</details>

**Gergely Orosz**: 那么在这个世界里，如果你再雇佣一两个人，你认为代码审查、CI/CD 会如何改变？

<details>
<summary>Original English</summary>

**Gergely Orosz**: Now imagine that you would hire one or two people to make it a small team. How do you think in this world and you keep want to keep doing what you're doing? How do you think things like code review CI CD would change?

</details>

**Peter Steinberger**: 我不太关心 CI。

<details>
<summary>Original English</summary>

**Peter Steinberger**: I don't I don't I don't care much about CI.

</details>

**Gergely Orosz**: 为什么不？你在 PSPDFKit 时很关心的。

<details>
<summary>Original English</summary>

**Gergely Orosz**: Why why not? you used to care a lot like a PSPDF kid. You used to care a lot, right?

</details>

**Peter Steinberger**: 我有本地 CI。因为代理会运行测试，对吧？而且这快得多。我不想推送到后台然后等 10 分钟等 CI，因为我已经等了代理 10 分钟了。如果本地测试通过，我们就合并。

<details>
<summary>Original English</summary>

**Peter Steinberger**: And and I still do this. There's value, but I I have local CI. I'm I'm a little bit I'm a little bit of DAH now that because because the agent runs the test, right? Yeah. And it's just way faster. I don't I want to push on the on on the on the back on the P and then wait for 10 minutes to wait for for CI because you waited 10 minutes on the agent already. If if the tests pass locally, we merge

</details>

**Peter Steinberger**: 一切都必须重新解决。你知道，Pull Requests，我现在更多地把它们看作是“提示词请求”（Prompt Requests）。现在，如果有人开启一个 Pull Request，我会说谢谢，我会思考这个功能，然后我和我的代理从这个 PR 开始，按照我认为合适的方式设计这个功能。代理很少重用代码，但这给了代理一个很好的理解，知道目标是什么。我基本上重写了每一个 Pull Request，并将其“编织”（weave）进去。

<details>
<summary>Original English</summary>

**Peter Steinberger**: everything has to be resold you know pull requests uh I see them more as prompt requests Now, like I don't I I somebody opens a pull request, I don't I lot I do say thanks and I think about the feature and then with my agent we start off with the PR and then I'll design the feature as I see fit. The agent rarely reuses like maybe I reuse some code but it's more like it gives the agent a good understanding of what the goal is and sometimes it's very useful because it's it's tricky bucks, right? But I I basically rewrite every pull request and and and v it in also also a lot of people let's just say the overall code quality of of PRs went down a lot because people vibe code and and building a successful feature still needs a lot of a lot of understanding of your overall design and if you if you cannot do that you will have a harder time steering your agent and the output will be bad.

</details>

**Peter Steinberger**: 甚至当有人给我发 PR 时，我实际上对提示词（prompts）比对代码更感兴趣。我让人请加上提示词，有些人加了，我读提示词比读代码更多，因为对我来说，这是一个更高的信号：你是如何得到这个解决方案的？你实际上问了什么？涉及多少引导？这比实际输出更能让我了解结果。我不需要读代码。或者如果有人想要一个功能，我要求“提示词请求”：把它写得非常好，因为那样我就能把我的代理指向这个问题，它就会构建它。因为工作在于思考它应该如何工作以及细节是什么。如果别人为我做了这些，我可以字面上说“构建”，它就会工作。

<details>
<summary>Original English</summary>

**Peter Steinberger**: even you know even when I get a PR I'm actually more interested in the prompts than in the code I I ask people to please add the prompts and some do and I I read the prompts more than I read the code because to me this is this is a way higher signal of like how did you get to the solution what did you actually ask how much steering was involved then the actual out to me this gives me more idea about the output I don't have to read the code or like if someone wants a feature I ask for a prompt request like write it up really well because then I can just point my agent to the issue and it will build it so because because the the work is the thinking about how it should work and what the details are and if someone else does it for me I can literally say build and it will work

</details>
