---
area: tech-engineering
category: ai-ml
companies_orgs:
- OpenAI
- Amazon
- Google
- Anthropic
- Nvidia
- Replit
- Netflix
- AWS
- Zapier
- Booking.com
- Capital One
- Fidelity
- Cisco
- Apple
- Southwest Airlines
date: '2025-12-06'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Vibe Coding
- The Phoenix Project
- Wall Street Journal
- State of DevOps research
- DORA study
people:
- Jeff Bezos
- Dario Amodei
- Kent Beck
products_models:
- Cloud Code
- C#
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=7Dtu2bilcFs
speaker: AI Engineer
status: evergreen
summary: Steve Yegge和Gene Kim探讨了AI对软件开发领域的颠覆性影响，预测传统集成开发环境（IDE）将走向终结。他们介绍了“Vibe Coding”——一种通过AI迭代对话而非手动编写代码的全新范式，并强调了其在提升生产力、实现复杂任务、降低协调成本以及增加创新选择性方面的巨大潜力。文章通过多个案例研究，展示了AI编码如何重塑技术组织和整个经济，并呼吁工程师拥抱这一变革，适应新的工作方式。
tags:
- developer-productivity
- future-of-work
- transformation
- vibe-coding
title: 2026：IDE的终结？AI编码与Vibe Coding的未来
---

### AI编码的未来：从“云代码”到CNC机器

大家好。我很高兴来到这里。我将主讲前半部分，我的合著者Gene Kim将主讲后半部分。好的，期待与大家交流。今天，我们将快速地讨论一些内容。我将告诉大家明年的工具会是什么样子。去年，我向大家介绍了聊天工具，但大家都忽略了我；而今年，每个人都在使用聊天工具，所以我们现在就要纠正这种状况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hey everybody. Um, really happy to be here. I'm going to be talking the first half. Co-author here, Jean Kim, is going to talk second half. All right. Looking forward to it. Cheers. All right. Today, I'm gonna Well, we're going to talk real fast. This time's going to go down fast. Uh, I'm going to talk to you about what tools look like next year. Last year, I was talking to you all about chat and everybody ignored me and now everybody's using chat this year and it's like we're gonna we're going to fix that right now.</p>
</details>

好的。目前的情况是，每个人都非常喜欢**Cloud Code**（云代码：一种基于云的、通常由AI驱动的代码补全或生成工具）。市面上可能有40家竞争对手。但Cloud Code并非最终解决方案。代码补全也不是。我喜欢Cloud Code，我每天使用它14小时，但它并非最终方案。开发者并没有真正采纳它。我将在这次演讲中讨论原因，以及你可以做些什么，以及未来值得期待什么。但原因在于它们太难了，认知负担太重。它们会“撒谎、欺骗、偷窃”。Gene和我在我们的书中详细讨论了它们如何以各种方式“撒谎、欺骗、偷窃”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. So, here's what it's looked like. I'm going to tell you right now, everyone's in love with Cloud Code. There's probably 40 competitors out there. Cloud code ain't it. Completions wasn't it. I love cloud code. I use it 14 hours a day. I mean, come on. But it ain't it. Developers aren't adopting it. I'm going to talk about why in this talk. I'm going to talk about what you can do about it and what what to look forward to. But the reason is they're too hard. Okay. Uh cognitive overhead. Uh they lie, cheat, and steal. Gene and I talk a lot about this in our book, all the different ways that they can lie, cheat, and steal. And</p>
</details>

Steve Yegge: 大多数开发者不喜欢这样。我逐渐明白，Cloud Code很像电钻或电锯。一个未经训练的人用电钻或电锯能造成多大的损害？同样，一个未经训练的工程师用Cloud Code能造成多大的损害？情况非常相似。是的，你可能会伤到自己，但你也可以非常熟练地使用它，进行非常精密的作业，就像一个工匠。问题是软件是无限大的，我们的抱负也是无限大的。所以我想和大家分享的类比是，明年将是从锯子和电钻转向**CNC机器**（CNC Machine: 计算机数控机床，能够精确控制工具进行加工）的一年。CNC机器可以固定一个钻头，你给它坐标，它就能非常精确地移动钻头。我们已经这样做了几个世纪，今年也不会停止。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> uh most devs just don't like this. I have come to understand that claude code is very much like a drill or a saw, an electric one, right? How much damage can you do as an untrained person with a drill, right? Or a saw. Yeah. How much damage can you do as an untrained engineer with claw code? It's real similar. Yeah. You can cut your foot off, but you can also be really, really skilled with it and do really precision work, right? like a craftsman. The problem is software is infinitely large. Our ambition is infinitely large. And so the analogy that I want to share with you is next year will be the year from moving from saws and drills to CNC machines. A CNC machine, you strap a drill on and you give it coordinates and it moves it around and very precise, right? We've been doing this for centuries and we're not going to stop this year.</p>
</details>

我听到人们说的一件事是：“模型已经停滞不前了。”这很常见，你的工程师可能也在说这话。好吧，即使它们停滞了，我们仍然发现了蒸汽和电力，我们需要一些时间来驾驭它们。但这在目前严格来说是一个工程问题。一年到一年半之内，所有的代码都将由巨大的研磨机器编写，由不再直接查看代码的工程师监督。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing I hear people say is, "Well, the models are plateaued." This is real common. Your engineers are probably saying this, okay, even if they plateaued, we have still discovered steam and electricity, and it's going to take us a little time to harness it. But it's strictly an engineering problem at this point. All code within a year, year and a half will be written by giant grinding machines overseen by engineers who no longer actually look at the code directly anymore.</p>
</details>

这是一个奇怪的新世界，这就是我们前进的方向。哦，天哪。是的，这张幻灯片。Gene和我与OpenAI的Andrew Glover交谈过，他说OpenAI正在出现一种令人难以置信的两极分化：一部分工程师使用代码生成工具（codecs），而另一部分（更大比例）则不使用。生产力差异如此惊人，以至于在绩效评估时他们拉响了警报，因为如何比较两个同级别、同头衔、各方面都相同的工程师，其中一个的生产力却比另一个高出十倍？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Weird new world. That is where we are going. Oh my gosh. Yep. This this slide. So Gan and I talked to Andrew Glover who I don't know is he here from OpenAI and he said that they have this incredible dichotomy unfolding at OpenAI where you know some percentage of their engineers are using codecs and then some other percentage a larger percentage are not using codecs and the difference in productivity is so staggering that they're having now alarms going off at performance review time because how do you compare these these two engineers who are the same level, same title, same everything and one of them is 10 times as productive as the other one by any measure.</p>
</details>

答案是他们快要崩溃了，可能不得不解雇50%的工程师。这种情况也在其他公司发生。谁在拒绝它？是高级工程师和资深工程师。我们用了多少分钟了？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the answer is they're freaking out and they may have to fire 50% of their engineers. And this is unfolding at other companies, too.</p>
</details>

Steve Yegge: 八分钟。我们时间正好。这就像瑞士机械表行业发生的事情一样，它发展了几个世纪，然后石英表在几年内就将其扼杀了。当时发生的情况是，那些工匠们正在做我们今天的资深工程师正在做的事情：“不，便宜货。”这简直是他们说的话，对吧？

<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text">Who is refusing it? It's the senior and staff engineers. How many minutes are we at?</p>
</details>

Steve Yegge: 好的，我不知道把这张幻灯片放在哪里。这是Claude对明年情况的看法。我当时只是想，你觉得它会是什么样子？它实际上确实有点像这样。明年大多数单词都会拼写正确。但这比Cloud Code漂亮多了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Eight [clears throat] minutes. >> We're perfect. This is just like what happened to the Swiss mechanical watch industry over a couple of Well, it was built up for a couple of centuries and then courts killed it, you know, within a couple of years. And what happened was the craftsmen were doing the same thing our staff engineers are doing today. No cheap. That's word for word, right? That's what they say. All right. I didn't know where to put this slide. This is this is Claude's view of what next year looks like. And I I was just like, what do you think it's going to look like? And it actually does kind of look like this. Most of the words will be spelled correctly in in next year. But this is a lot prettier than cloud code.</p>
</details>

是的，它必须是这个样子。某种形式的用户界面（UI），而不是**IDE**（Integrated Development Environment: 集成开发环境）。这就是新的IDE。好的，人们正在构建它。事实上，我认为在这方面走得最远的公司是Replit，他们刚刚和大家交流过。我认为他们所做的一切都很了不起，绝对值得称赞。我们不应该再追逐尾灯，构建命令行界面了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, this is what it has to look like. Some form of a UI, not an IDE. This is the new IDE. Okay. And people are building it. In fact, I think the company that's the furthest along in this is Replet, who just talked to you. I think it's amazing what they're doing. It's absolutely bravo, right? We should not be all chasing tail lights and building command line interfaces anymore.</p>
</details>

更重要的是，Cloud Code及其所有竞争对手都做错了，因为它们正在构建世界上最大的蚂蚁。好的，这是我在澳大利亚联邦银行的朋友Brendan Hopper说的。他说：“大自然构建的是蚁群，而Cloud Code构建的是一只巨大而强壮的蚂蚁，它会把你咬成两半，并夺走你所有的资源。”我的意思是，这是一个严重的问题。如果我说“请分析这个代码库”，我就会用到昂贵的模型。如果我说“我的.gitignore文件还在吗？”，我也用到了昂贵的模型。你说的每句话都会用到昂贵的模型。那么会发生什么呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. and and more importantly, Cloud Code and all of its, you know, competitors, they're all doing it wrong because they're building the world's biggest ant. Okay, this is my my buddy Brendan Hopper at Commonwealth Bank of Australia, right? He's like, "Nature builds ant swarms and Claude Code built this huge muscular ant that's just going to bite you in half and take all your resources, right? I mean, it's a serious problem, right? If I say please analyze this codebase, I, you know, go to the expensive model." If I say, "Is my git ignore file still there?" I've also gone to the expensive model, right? Everything that you say goes to the expensive model. So, what's going to happen? Whoa. What happened? Oh gosh,</p>
</details>

Steve Yegge: 我的幻灯片都乱了。你们能看到吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">my slides are all messed up now. >> Can you guys see them?</p>
</details>

Steve Yegge: 不。哦，这总是发生在我身上，伙计。出问题了。好的，我想到了一个非常酷的类比，叫做“潜水员隐喻”，即你的上下文窗口就像一个氧气瓶。好的，这就是为什么这些东西从根本上是错误的。因为你派一个潜水员潜入你的代码库水下，四处游动为你处理事情。一个潜水员，我们说“我们要给他一个更大的氧气瓶”，一百万个token。他仍然会耗尽氧气。你不需要这样做，对吧？你应该先派一个产品经理潜水员下去，然后是一个编码潜水员，对吧？然后是一个审查潜水员，一个测试潜水员，一个Git合并潜水员等等。对吧？没有人这样做。每个人都在建造一个更大的潜水员。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> No. >> Oh, this always happens to me, man. There something going on. All right. So, I thought of a really cool analogy called the diver the diver metaphor, which is your context window is like an oxygen tank. Okay. This is why these things are fundamentally wrong. Cuz you're sending a diver down into your code base underwater to swim around and take care of stuff for you. One diver and we're like, we're going to give him a bigger tank. 1 million tokens. He's still going to run out of oxygen. Like you don't, right? You should send a product manager diver down first and then a coding diver, right? And then a review diver and a test diver and a get merge diver, etc. Right? Nobody's doing this. Everyone's building a bigger diver.</p>
</details>

我不知道我的幻灯片都乱了。我的演讲快结束了。但是，作为工程师，我们所做的是任务分解、逐次细化、组件、黑盒。未来将以这种方式构建，并且将由大量的代理（agents）构建，而不仅仅是一个代理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't know my slides are all messed up. My my my talk is almost done. But um what we do is as engineers, task decomposition, successive refinement, components, black boxes. This is how it's going to be built in the future. And it's going to be built with lots and lots of agents, not just one agent.</p>
</details>

好的。在那之前，我想我们时间不够了，所以在那之前，学习Cloud Code。放弃你的IDE。Swix告诉我他想要一些热门观点，所以我会给你一个。如果你从1月1日开始还在使用IDE，你就是一个糟糕的工程师。这就是我的热门观点。好了，各位。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. Until then, I think we're out of time, but so until then, learn cloud code. Give up your IDE. Swix told me he wants some hot takes, so I'll give you one. If you're using an IDE starting on, I'll give you till January 1st. You're a bad engineer. There's your hot take. All right, folks.</p>
</details>

Steve Yegge: 好的，干杯。那实际上就是我的演讲。嗯，学习编码代理。哦，对了。还有这个人。说到糟糕的工程师，这是Jordan Hubard，他在Nvidia工作。他在LinkedIn上发布了一篇非常棒的帖子，关于如何充分利用代理，然后这个人用这个回复了他。这就是你组织中所有人的样子，或者说你组织中60%的人就是这样。这个人不是特例。好的，对这种现象的反弹是非常真实的。是的，这将是一个问题。我不会和大家分享如何解决它，我没有时间分享，但这是你应该注意的事情。无论如何，我将把时间交给我的合著者Gene。我们有很多话要说，他有很多内容要讲，所以让我们把时间交给Gene。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, cheers. Well, that that was actually my talk. Um, [clears throat] uh, learn coding agents and Oh, yeah. Then there's this guy. Speaking [snorts] of bad engineers, so this is this is Jordan Hubard. uh who uh who's at Nvidia and he tweeted LinkedIn a really nice post on how to get the most out of agents and this guy responded with this right this is everyone in your or this is 60% of your org right here this guy's not an outlier okay the backlash is very real against this yeah and this is going to be a problem I'm not going to I'm not going to share with you I don't have time to share how to fix it but it's something you should be aware of and anyway I'm going to turn it over to my co-author Jean we had a lot to talk about he's got a lot to go so let's turn it over to Jean</p>
</details>

Gene Kim: 谢谢你，Steve。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> yeah Thank you, Steve.</p>
</details>

### AI对技术组织的颠覆性影响

Gene Kim: 顺便说一句，嗯，我先自我介绍一下，然后我会分享一些关于和Steve一起编写《Vibe Coding》这本书的经历。好的，简单介绍一下我自己。我有幸研究高性能技术组织26年。这段旅程始于我作为一家名为Tripwire的公司的技术创始人。我在那里工作了13年。但我们的使命是真正理解这些令人惊叹的高性能技术组织。它们在项目交付日期、性能和开发方面表现最佳，在运营可靠性和稳定性方面表现最佳，在合规性、安全性和合规性方面也表现最佳。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, by the way, um I have let me start off by introducing myself and then I'm going to share a little bit about like what it's been working like uh what's been like working with Steve on the VIP coding book. Uh and so just a little bit about myself. I've had the privilege of studying high performing technology organizations for 26 years. And that was a journey that started when I was a technical founder uh of a company called Tripwire. I was there for 13 years. But our mission was really to understand these amazing high performing technology organizations. They had the best project due date, performance and development, the best operational reliability and stability and also the best posture of compliance uh security and compliance.</p>
</details>

所以我们想了解这些了不起的组织是如何实现从优秀到卓越的转变的。我们想了解其他组织如何复制这些惊人的成果。你可以想象，在这26年的旅程中，有很多惊喜。其中最大的惊喜之一是它如何将我带入了**DevOps**（Development and Operations: 一种软件开发方法论，旨在通过自动化和协作来提高软件交付的速度和质量）运动的中心，这非常了不起，因为它重塑了技术组织。你知道，它改变了测试和运营的工作方式，以及信息安全。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we want to understand how did how do other organizations replicate those amazing outcomes and so you can imagine in that 26 year journey there are many surprises. Among the biggest surprise was how it took me into the middle of the DevOps movement which is so uh amazing because it reshaped technology organizations. you know, it changed how test and operations worked, information security. Um,</p>
</details>

我原以为那将是我职业生涯中最激动人心的冒险，直到我亲自遇到了Steve Yegge。我钦佩他的工作已经超过11年了。你们中的一些人可能读过Jeff Bezos那份最大胆的备忘录，内容是关于在2000年代初期，他们如何将一个将3500名工程师耦合在一起的庞大整体（monolith）转变为一个所有团队都必须通过**API**（Application Programming Interface: 应用程序编程接口）进行通信和协调的系统。不允许有后门。对吧？任何不这样做的人都将被解雇。谢谢，祝你有个愉快的一天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I thought that would be the most exciting adventure I'd be on in my career until I met Steve Yaggi in person. And so, I've admired his work for over 11 years. And so, some of you may have read this memo of Jeff Bezos's most audacious memo of how in early 2000s they transformed from a gigantic monolith that coupled 3,500 engineers together, so none of them had independent action. And uh he talked about how all teams must henceforth communicate and coordinate only through APIs. No back doors allowed. Right? Uh anyone who doesn't do this will be fired. Thank you and have a nice day.</p>
</details>

记录下这些的了不起的人说，第七条显然是个玩笑，因为Bezos并不关心你是否有美好的一天。这实际上是由当时的亚马逊首席信息官Rick Dalzell强制执行的。结果发现，我引用了11年的这份备忘录，是由Steve Yegge在Google+上写的一份私人备忘录，后来被公开，并让他登上了《华尔街日报》的头版。嗯，我终于在六月见到了他，结果我们有很多共同之处，其中之一就是对AI的热爱，以及AI将从根本上重塑编码的这种感觉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the amazing person who chronicled says number seven is obviously a joke because Bezos doesn't care whether you have a good day or not. And this is actually enforced by Amazon CIO then Rick Del. And so it turns out this memo that I've been quoting for 11 years uh was written by Steve Yaggi uh which was meant to be a private uh memo on Google+ which was made public which landed him on the front page of Wall Street Journal. Um and so I finally met him in uh June and it turns out that we had many things in common uh but one of them was this uh love of AI and this sense that AI was going to shape coding from underneath us.</p>
</details>

所以我们相信，AI将重塑技术组织，其规模可能比十年前**敏捷开发**（Agile: 一种迭代式、增量式的软件开发方法）、云、**CI/CD**（Continuous Integration/Continuous Deployment: 持续集成/持续部署）和移动技术所带来的影响还要大100倍。而且这些技术突破不仅重塑组织，它们还重塑整个经济。整个经济都会重新调整，以利用这些狂野的、更好的生产方式。在过去一年半的时间里，我们有机会研究这些案例，我认为它们让我们得以一窥技术组织的未来形态。所以，我将分享我们所学到的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so one of our beliefs is that uh the AI will reshape technology organizations you know maybe even 100 times larger than what agile cloud CI/CD and mobile did you know 10 years ago um and that these technology breakthroughs not just reshape organizations but they reshape the entire economy the entire economy rearranges itself to take advantages of these you know wild new better ways of uh uh producing things and and uh so over the last year and a half we've had a chance to look at these case studies I think give us a glimpse of what these uh what the shape of technology organizations look And so I'm going to share with that what we've learned. But</p>
</details>

这里可能有一个提示。你们中的一些人可能知道Adrian Cockcroft的工作。他曾是Netflix的云架构师，推动了整个Netflix基础设施从2009年的数据中心完全迁移到AWS云。几个月前，他在2011年写道，一些基础设施和运营部门的人对此感到非常不满，因为他们称之为“noopops”（无运营）。当时每个人都笑了，但他说：“哦，你不知道，它又发生了。这次它可能被称为‘no dev’（无开发）。”现在听起来就没那么好笑了，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">here's maybe a hint. So some of you may know the work of Aen Cochraftoft. He was a cloud architect at Netflix, right? He was what who drove uh the uh entire Netflix infrastructure from a data center uh back in 2009 to running entirely in the AWS cloud. And so he wrote uh some months ago in 2011 some people got very upset in uh infrastructure and operations because they called it noopops, right? And everyone laughed back then, but he said, "Oh, don't you know uh it's happening again. And this time it might be called no dev, right? Not so funny now, right?</p>
</details>

所以这很有趣，对吧？因为我们听了Zapier的精彩演讲，关于支持部门如何交付产品，结果设计师也在交付，用户体验（UX）也在交付。对吧？任何曾因开发者而感到沮丧的人，那些说“排队等着吧，你得等几个季度或几年，甚至可能永远等不到”的人，现在突然能够通过**Vibe Coding**（Vibe Coding: 一种不手动编写代码，而是通过与AI迭代对话来生成代码的编程方式）将自己的功能投入生产。对吧？这重塑了技术组织，也可能重塑整个经济。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's it's interesting, right? Because we heard this amazing presentation from Zapier about like how support ships and turns out designers are shipping, UX is shipping, right? Anyone who's been frustrated by developers uh who, you know, say get in line and you have to wait quarters or years or maybe never, right, are now suddenly in a position where you can actually vibe code your own features into production, right? And that reshapes technology organizations and reshapes, you know, potentially the entire economy. And so uh uh Steve and I we've had the privilege of watching what happens you know when we change uh you know the way we uh deploy right it wasn't so long ago and 10 years ago uh I wrote a book called the Phoenix project where it was all about the catastrophic deployment would you believe uh that it was you know 10 years ago 15 years ago most organizations shipped once a year right and so I got to work on a project called the state of DevOps research it was a cross population study that spanned 36,000 respondents uh from 2013 to 2019 and what we found uh this was Dr. Nicole Forsrin and Jez Humble. Um,</p>
</details>

所以Steve和我有幸见证了当我们改变部署方式时会发生什么。就在不久前，十年前，我写了一本名为《凤凰项目》的书，内容全是关于灾难性部署的。你相信吗？十年前、十五年前，大多数组织每年只发布一次产品。所以我有机会参与一个名为“DevOps现状研究”的项目，这是一项跨人群研究，涵盖了2013年至2019年的36000名受访者。我们发现，这是Dr. Nicole Forsgren和Jez Humble的研究，我们发现这些高性能组织每天多次发布产品。对吧？他们可以在一小时或更短的时间内发布。你知道，早在2009年，人们会想：“天哪，每天多次部署？那太鲁莽、不负责任了，甚至是不道德的，对吧？什么样的疯子会每天多次部署呢？”然而，如今这已是司空见惯。事实上，如果你想拥有出色的可靠性配置文件，你想拥有更短的平均修复时间，你就必须进行更小、更频繁的部署。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and what we found was that these high performers ship multiple times a day, right? They can ship in one hour or less. And you know, back in 2009, people thought, "Oh my gosh, multiple deployments per day, right? That's reckless and irresponsible, maybe even immoral, right? What sort of maniac would deploy multiple times a day, right? And yet, it's very common place these days. In fact, if you want to have great reliability profiles, you want to have short meantime to repair, you have to do smaller deployments more frequently."</p>
</details>

我认为我们现在正在看到这些案例研究表明，这种更好的编码方式，即你不需要手动输入代码，可能是一种创造价值的极大优越方式。因此，我们在《Vibe Coding》一书中对Vibe Coding的定义是，它基本上是指任何你不需要手动输入代码的方式。对于一些不理解这一点的人来说，这就像是弯腰打字，对吧？你实际上是在移动手指。对吧？这有点像有些人进入暗室冲洗照片的方式。信不信由你，有些人仍然这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think we're now seeing these kind of case studies that show that this better way of coding, right, where you don't type in code by hand might be, you know, just a vastly better way uh to create value. And so our definition of vibe coding that we put into the uh vibe coding book was that it's basically anything where you don't type in code by hand. And so for some of those of you who don't understand that, that's like sort of a uh typing an ID hunched over, right? And you're actually moving your fingers, right? That's sort of like how some people go into a dark room to develop photographs, right? Believe it or not, some people still do that. Um and and</p>
</details>

我们喜欢这个定义，直到Anthropic的首席执行官兼联合创始人Dario Amodei给我们一个更好的定义：Vibe Coding实际上是一种迭代对话，最终由AI编写你的代码。他说，一方面，这是一个美丽的术语，因为它唤起了不同的编码方式，但他也说它有点误导，因为它听起来像个玩笑。但他表示，在Anthropic，没有其他选择。我只是觉得这是一种美妙的方式来唤起Vibe Coding的重要性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">what I that's a great definition that we uh loved until uh Dar Ammedday u uh CEO and co-founder of um Anthropic he gave us an even better definition right the vibe coding is really the iterative conversation uh that results in AI writing your code and he said it's on one hand a beautiful term because it evokes this different way of coding but he said it's also somewhat misleading because it sounds jokey right uh but he said you know adanthropic there's no other game in town right I just thought that was just a beautiful way to evoke you know how important uh vibe coding is.</p>
</details>

这是Dr. Eric Meyer。他可能被认为是史上最伟大的编程语言设计师之一。他曾参与Visual Basic、C#、Link、Haskell的开发。他创建了Hack编程语言，在一年内将Meta的数百万行代码迁移，为大量PHP程序员带来了静态类型检查。他说我们可能是最后一代手动编写代码的开发者。所以，让我们享受这个过程吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh this is Dr. Eric Meyer. Um you he's probably considered one of the greatest programming language designers of all time. Uh he was part of Visual Basic, CP, Link, Haskell. He created the hack programming language uh that migrated millions of lines of code at Meta, you know, within a year uh bringing static type checking to a bunch of PHP programmers and he said we are probably going to be the last generation of developers uh to write code by hand. So let's have fun doing it.</p>
</details>

### Vibe Coding的优势与案例

Gene Kim: 去年11月，当Steve和我开始写这本书时，我们发现他每天在编码代理上花费数百美元，这看起来很奇怪。你知道，他不仅用完了每月的订阅额度，而且还远远超出了。然而，我们现在听到的是，作为一名工程师，我的工作一部分是每天在token上花费的金额需要与我的工资相当。所以，想想看，每天500到1000美元，对吧？因为这就是这些工具带给我们的机械优势和认知优势。对吧？作为一名工程师，我将挑战自己，去获取这种价值，并为重要的人提供价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so one of the things and uh when uh Steve and I started working on the book last November was uh watching him spend hundreds of dollars a day on coding agents uh and just seemed so strange right um you know and so he's maxing out not just you know the uh the monthly subscriptions right but he's actually you know going way above and beyond that and yet uh you know things that we're hearing now is that as an engineer part of my job is that I need to be spending as much on tokens per day as my salary right so you know that think about like $500 to $1,000 a day, right? Because this is the mechanical advantage, the cognitive advantage that these tools are giving us, right? And as an engineer, right, I'm going to challenge myself to get that kind of value to deliver value to people who matter.</p>
</details>

在书中，我们讨论了人们为什么会这样做，对吧？我们提出了一个缩写词**FAFO**（FAFO: Faster, Ambitious/Alone, Fun, Optionality的缩写，描述了AI编码的四大优势）。最明显的是F代表更快（Faster），对吧？是的，这显然是真的，但我认为这是最肤浅的，也是我们这样做的部分原因。因为第二个原因是它让我们能够做更宏大的事情，对吧？不可能变成了可能。这是光谱的一端。在光谱的另一端，你知道，那些繁琐和微小的任务变得免费了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and so in the book, we talk about, you know, why people would do this, right? And the, uh, acronym we came up with FAFO, right? Uh, the most obvious one is F for Faster, right? Yeah, that's obviously true, but I think it's the most superficial and um part of why we do this because uh the second one is it lets us do more ambitious things, right? Uh the impossible becomes possible. Uh so that's one end of the spectrum. On the other end of the spectrum, you know, the uh the tedious and small tasks become free.</p>
</details>

我非常喜欢Cloud Code团队的一次采访，我想是Katherine说的，她说我们注意到，当客户问题出现时，我们不再把它们放到Jira待办事项中，在梳理会议上争论不休，等等，我们只是当场修复它，对吧？并在30分钟内发布到生产环境或其他地方。是的，它会被记录下来，但你知道，整个协调成本就消失了。所以，不可能变成了可能，对吧？那些烦人的事情变得免费了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the things I uh the uh interview of the cloud code team that I just loved was uh I think it was Katherine, she was said um uh one of the things we've noticed is that you know when customer issues come up uh instead of putting them on a jur backlog and you know arguing about it in the grooming sessions and so forth right we just fix it on the spot right and ship to production or whatever um you know within 30 minutes right and so yes it gets recorded but you know that whole sort of coordination cost you know just disappears right so again the impossible becomes possible right and uh the annoying things just become free.</p>
</details>

第二个A是，你知道，能够独自或更自主地做事的能力，对吧？所以，你知道，这里实际上减轻了两种协调成本。一种是，如果你曾经不得不等待一个开发者或一个开发团队来完成你需要做的事情，对吧？你必须沟通、协调、同步、优先排序、说服和升级，你知道，做各种事情才能让他们像你一样关心这个问题。对吧？现在，有了这些惊人的新奇技术，你可以自己完成它们，对吧？所以那是一种协调成本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second A is uh um you know the ability to do things alone or more autonomously, right? And so um you know there's really two coordination costs are being alleviated here. One is you know if you ever have to wait for a developer or a team of developers, you know, to do what you need to do, right? You have to communicate and coordinate and synchronize and prioritize and cajul and escalate, you know, do all sorts of things to get them to care about the problem just as much as you do, right?</p>
</details>

另一种是，即使你让某人像你一样关心一个问题，他们也无法读懂你的心思，对吧？我们发现这些**LLM**（Large Language Model: 大型语言模型）是惊人的中介工具，对吧？你知道，仅仅通过一个LLM，你就可以通过一个Markdown文件与其他职能专业人员进行协调，对吧？这并不是终点，对吧？但这只是一个惊人的方式，可以实现高带宽的协调，这样你就可以基本上读懂彼此的心思，因为共同的成果需要共同的目标和共同的理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you know now you know with these amazing new miraculous technologies you can do them by yourself right so that's one coordination uh tax the other one is like even if you get someone to uh care about a problem as much as you uh they can't read your mind right and what we're finding is that these LLMs are just amazing intermediation vehicles right um you know just through an LLM you can coordinate with other functional specialties right through a markdown file right that's not the end right but it's just this amazing way uh to have these high bandwidth coordination so that you can essentially read each other's minds, you know, because shared outcomes require shared goals and shared understanding.</p>
</details>

第二个F是乐趣（Fun），对吧？Steve说Vibe Coding令人上瘾。这太真实了。我的意思是，我无法，我认为我喜欢这本书的原因是，它讲述了两个都认为自己最好的编码时光已经过去的人的故事，对吧？结果发现，情况完全相反。嗯，我从中获得了如此多的乐趣，你知道，我不得不强迫自己晚上睡觉，否则我每天晚上都会熬到凌晨两三点。你知道，所以并非一切都很好，但它肯定比无聊、乏味或可怕要好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second F is fun, right? Is that Steve says vibe coding is addictive. This is so true. I mean, I cannot I think what I love about the book is that it's a story about two guys who both thought their best days of coding were behind them, right? And found that, you know, it's entirely the opposite. Um, and I've had so much fun and uh, you know, I'm having to force myself to go to sleep at night because otherwise I'd be up till 2 or 3 in the morning every night. uh and you know so it's not all great but it certainly beats being boring or tedious or you know horrible.</p>
</details>

然后是选择性（Optionality）。你知道，我喜欢Switch的一点是，他对创造期权价值有着共同的热爱，他昨晚告诉我们，期权价值对扑克玩家也很重要，因为你永远不想把自己逼入绝境。所以期权价值是经济价值最大的创造者之一，对吧？模块化之所以如此强大，是因为它创造了期权价值。所以，仅仅是你能够有更多的尝试机会，能够进行更多的并行实验，这就是Vibe Coding所允许的。这给了我们信心，你知道，这不仅仅是一个非常强大的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then optionality you know one of the things that uh I love about Switch is that he has a shared love of creating option value and he told us last night that option value is also important for poker players right because you never want to paint yourself in a corner so option value is um one of the biggest creators of economic value right modularity the reason why it's so powerful is because it creates option value uh and so just the fact that you can have so many more swings at bat you can do so many more parallel experiments right this is what v coding allows so this is gives us confidence that you know this is not just uh this is a very powerful tool</p>
</details>

这是Andy Glover的一句话，Steve Yegge说过，你知道，对于那些有“啊哈”时刻并处于某个位置的人来说，我认为本能是如何提升每个人的生产力，让他们像你现在一样高效。你知道，自从你有了“啊哈”时刻之后。所以，让我和大家分享一些我们最激动人心的案例研究，它们为我们描绘了未来的一瞥。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um uh here's a quote from Andy Glover that uh Steve Yaggi said is that you know as um for people who have this aha moment and position uh you know I think the instinct is how do we elevate everyone's productivity to be as productive as you are now being um you know that since you've had your aha moment so uh let me share with you maybe some of our top kind of uh exciting case studies that kind of give us a hint of the future.</p>
</details>

我把他带到这个名为“企业技术领导力峰会”的会议已经11年了，Swix，我们有幸邀请Swix在那里谈论AI工程师的崛起，那是一个惊人的预言。今年我们有一系列精彩的案例研究。其中一个是Bruno Passos，他去年在这个会议上发言，他介绍了他们在Booking.com（全球最大的旅游机构）进行的不断演进的实验，旨在提升3000名开发者的生产力。他们发现生产力实现了两位数的增长，合并速度更快，同行评审时间更短等等。所以我们觉得这只是人们所取得成就的不完整视图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh I brought him to this conference called the enterprise technology leadership summit for uh 11 years now and Swix we had uh the honor of having Swix there talking about the rise of the AI engineer just this amazing prognostication. Uh this year we had a series of amazing uh case studies. One was uh Bruno Passos. spoke this year uh last year at this conference and he presented on uh their in their evolving experiment to elevate developer productivity across 3,000 developers. Um and this is at Booking.com, the world's largest travel agency and uh they're finding that they're getting double-digit increase in productivity, right? Uh mergers are going in quicker, peer review times are uh smaller and and so forth, right? And so that's just we feel like that's a incomplete view of uh what people are achieving.</p>
</details>

这是Shri Balakrishnan。他曾是Travelopia的产品和技术主管。他们是一家年收入15亿美元的旅游公司，他提到的一件事是，他们能够在一个非常小的团队（实际上是两个人）的帮助下，在6周内替换一个遗留应用程序。事实上，他的一个结论是，以前我们需要一个八人团队才能做一些有意义的事情，包括六名开发者、一名用户体验人员和一名产品负责人。他说，现在可能只需要两个人：一名开发者和一名领域专家。换句话说，正如Kent Beck所说，一个有问题的人和一个能解决问题的人，对吧？也许是两对这样的团队，对吧？所以这将重塑他们如何走得更远、更快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh this is Shri Balakrishnan. uh he was head of product and technology at uh Travelopia. Uh so they're a $ 1.5 billion a year uh travel company and one of the things that uh he said is that uh you know they were able to uh replace a legacy application uh in 6 weeks with a pair of uh with a very small team. In fact one of his uh conclusions is that before we would need a team of eight people to do something meaningful, right? Six developers, a UX person and a product owner. And he said maybe these days it might be two. A developer and you know a a domain expert. In other words, as Kent Beck said, a person with a problem and a person who can solve it, right? Uh maybe maybe a pair of those teams, right? And so that's going to reshape I think you know how they can go further and faster.</p>
</details>

所以，这再次只是未来团队可能样子的一个提示。这是最让我兴奋的一个。这是Dr. Top Pal。他帮助推动了Capital One的DevOps运动。他现在在Fidelity。他拥有的一个应用程序是用来查询25000个应用程序中有哪些使用了**Log4j**（Log4j: Apache软件基金会开发的一个开源Java日志框架）漏洞的。他的团队一直对这个应用程序应该是什么样子有自己的愿景，但每次他问“我们能构建它吗？”他的团队都会说大约需要5个月，而且需要雇佣一名前端人员。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so again, maybe just a hint of what teams will look like in the future. This is the one that excites me most. This is Dr. Top Pal. Uh he helped drive the DevOps movement at Capital One. Um and he's now at uh uh Fidelity. And so um among other things he owns an application uh that is the application you go to asks which applications you know the 25,000 applications there have log 4j right and uh it's his team and he's had this vision of what this application should look like uh but every time he asked like can can we build it his team would say it would take about 5 months right and we'd hire need to hire a front-end person and</p>
</details>

Gene Kim: 他非常沮丧，于是他花了5天时间自己进行Vibe Coding，直接访问只读的**Neo4j**（Neo4j: 一种流行的图数据库）数据库，并将其投入生产。所以，我认为我们正在看到一个世界，在这个世界里，领导者，甚至拥有自己团队的领导者，都在沮丧地说：“嘿，我能做到这一点，我能更好地自己完成吗？不只是更好，我能证明它能被完成吗？”顺便说一句，后来发生了什么？他四处寻找谁能帮助他维护生产中的应用程序，所有高级工程师都说“不是我”。于是，Swathy加入了，她是团队中最年轻的工程师，正在帮助维护这个应用程序，并且可能比组织中的每个人都赚得多。有趣的是，他还获得了更多的人头，因为这个应用程序的用户数量增加了10倍。所以，谁预料到了这一点呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">he got so frustrated that he spent 5 days just vibe coding it by himself right uh you know directly accessing read only the neo4 4j uh database um and put it into production, right? And so I think we're seeing a world where um you know leaders even leaders with their own teams are frustrated saying hey I can do this uh can I do this better myself not better just can I prove that it can be done and uh by the way what happened afterwards um he was looking around who can help me maintain my application production and all the senior engineers like not me. So enter uh Swathy the most junior engineer on the team uh who is helping maintain this application and probably outarning you know everybody in the organization uh and interestingly uh he he's also getting more headcount because the number of consumers of this application just increased by 10fold right so who saw that coming right um</p>
</details>

这是John Rouseer，他是Cisco安全部门的工程高级总监，他说服高级副总裁要求Cisco内部100位顶级领导者在一个季度内，将一个功能通过Vibe Coding投入生产，这个季度上个月刚刚结束。所以，我们实际上有机会调查这些人，了解谁完成了，有多少人完成了、没完成、部分完成了等等。对于那些完成的人，他们有什么“啊哈”时刻？作为领导者，他们想要做什么的规模和方向是什么？所以，我们将去研究这些。我的预测是，我们将看到该组织的部分结构被重塑，因为领导者们意识到什么是可能的。从战略到流程等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so uh here's John Rouseer he's senior director of engineering at Cisco security and he convinces SVP to um require 100 of the top leaders inside of Cisco to vibe code one feature into production in a quarter that ended last month, [laughter] right? And so, um, you know, we're actually getting a chance to be able to survey those people, right? Who finished? Uh, you know, uh, how many completed, didn't complete, partially completed, etc. And of those who completed, right, what was what aha moment did they have? Uh, as a leader, what's the magnitude and direction of what they want to do? And so, we're going to go in and study that. And I just I my prediction is that we're going to see parts of that organization get reshaped as leaders realize kind of what's possible. Everything from strategy to processes and so forth.</p>
</details>

所以，让我和大家分享一件真正让我兴奋的事情，那就是我有机会重新参与**DORA研究**（DORA study: DevOps Research and Assessment study，一项关于DevOps实践及其对组织绩效影响的研究），与Google Cloud团队合作。报告中没有提到的一件事让我非常兴奋，那就是关于信任AI的问题。我们使用了一个非常奇怪的信任定义，即我能在多大程度上预测对方的行为和反应，对吧？因为你越信任对方，你就可以给他们更大的请求，你可以用更少的词语，你对反馈的需求就越少，对吧？这就是“手指轻弹和燃料”的整个概念，对吧？就像，你知道，要擅长任何事情都需要一万小时，你用了多少时间来擅长AI呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so let me just share with you one um you know thing that really excites me which is uh I got a chance to uh get back into the state of DevOps research the Dora study with uh um the Google cloud team and one of the things that didn't make into the report that I just found really exciting was around this. It was like what how much do people trust AI? And we're using a very strange definition of trust, which is to what degree can I predict how the other party will act and react, right? Because the more you trust the other party, right, you can give them bigger requests, you can use fewer words, you have less need for feedback, right? It's the whole notion of finger spits and fuel, right? Like you know how many of the 10,000 hours that requires to be good at anything have you used to get good at AI? And</p>
</details>

其中一个惊人的发现就是这条线。X轴是你使用AI工具的时间长度，Y轴是你信任它的程度。对吧？你使用AI的时间越长，你就越信任它，对吧？所以每个说“我试过了，它在编码方面很糟糕”的人，对吧？他们是在什么基础上得出这个结论的？也许只用了几个小时。这告诉我们，它需要练习，对吧？这可能是一项可教的技能。嗯，所以X轴上的时间长度是一个非常不完整的表达，对吧？它就像频率、强度和小时数，但其中有信号。所以它表明，你的工作一部分是帮助其他人有“啊哈”时刻，然后帮助他们练习，对吧？这样他们就能非常非常擅长它，从而利用所有这些惊人的技术来实现他们的目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">one of the stunning findings was that it's this line. So on the x-axis is how long have you been using AI tools? Y is how much do you trust it? Right? Right? And the longer you use AI, right, the more you trust it, right? So every every person who says, "I tried it and it's terrible at coding," right? On what basis did they make that conclusion after maybe using for an hour or two? And what this shows us is that uh you know it requires practice, right? And and this is probably a teachable skill. Um so length of time on the x-axis is a very incomplete expression, right? It's like frequency and intensity and how many hours, but it's there's signal there. So it just shows that uh you know part of your job is to help other people have the aha moment and then help them you practice right so they get very very good at it so they can use every one of these amazing technologies to achieve their goals.</p>
</details>

所以，我将给大家留下最后一个愿景。Steve和我六周前为领导者举办了一个Vibe Coding研讨会，让我惊讶的是，在3小时内，我们达到了100%的完成率。每个人都构建了一些东西，你知道，他们构建了一个数据可视化工具。事实上，一个人构建了一个iOS应用程序，另一个人甚至将其提交到了Apple iOS应用商店的审核队列中。这绝对令人震惊。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh I'll leave you with one last kind of vision. Steve and I we did a vibe coding workshop for leaders um back six weeks ago and what was amazing to me was in the 3 hours we had a 100% completion rate. Everyone built something, you know, they built a data visualization tool. In fact, uh, one person uh, built a an iOS app and another person actually got it into the review queue in the Apple iOS app store, [laughter] right? Which is which is absolutely astonishing.</p>
</details>

这里有一个名叫Roger Safner的人。他说：“我以前是C# MVP，很久以前的事了。我15年没写过代码了。”他正在展示一个应用程序，帮助他自动化办理西南航空登机手续的过程，直到机器人检测工具出现。看看他脸上的表情。所以，我认为我们正在看到的是，当支持部门交付产品时会发生什么，对吧？当支持部门编写代码并交付产品，当领导者编写代码并交付产品时。毫无疑问，这将重塑技术组织。如果你是其中之一，Steve和我希望与你交谈，对吧？因为你正处于一些非常重要的事情的前沿。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, and here's a guy named Roger Safner. He said, "I used to be a C MVP way back in the day. I haven't coded in 15 years." Uh, and he's showing off an app that helped him automate the process of getting checked in to Southwest Airlines until the bot detection tools come off. But look at look at the expression on his face. And so I think uh what we're seeing is like what happens when support ships right and support codes and ships when leaders code and ship. And there's no doubt in my mind that this will reshape uh technology organizations. If you're one of those, Stephen, I want to talk to you, right? Because you are on the frontier of something really, really important.</p>
</details>

我将和大家分享几句引言。这是一位技术领导者说的：“当我告诉我的团队我写了一个应用程序，AI写了6万行代码，而我一行都没看时，他们都看着我，好像希望我死了一样。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'll share with you a couple quotes. Here's from a technology leader. When I told my team that I wrote an app that, you know, an AI wrote 60,000 lines of code and I haven't looked at any of it, they all looked at me as if they wished I were dead.</p>
</details>

我们有一些遗留应用程序中的愚蠢问题，已经存在了十多年。我们召集了一群高级工程师。我们使用AI生成了一个修复方案，并提交了PR（Pull Request），团队接受了它。对吧？不像上次他们说是AI生成的，然后他们以“AI垃圾”为由拒绝了它。所以这可能正在你的组织中发生。嗯，我们的代码速度非常快。我们得出结论，每个代码库只能有一名工程师，对吧？因为合并冲突，对吧？所以我们还没有找到协调成本的机制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, we've uh we've had these stupid problems in legacy applications that have been there for over a decade. We got a group of senior engineers together. We used AI to generate a fix and we submitted PR and the team accepted it. Right? Unlike the time when they said it was AI generated and they rejected it as AI slop, right? So this is maybe happening in your organizations. Um, our code velocity is so high. Uh, we've concluded that we can only have one engineer per repo, right? Because of merge conflicts, right? So we haven't figured out the coordination cost uh mechanisms yet.</p>
</details>

所以所有这些都是《Vibe Coding》一书中的一些经验教训。感谢昨天所有参加签售会的人。如果你对我们引用的任何演讲和我们书中的摘录感兴趣，基本上，如果你想获取本次演讲中的所有链接，只需发送电子邮件到realgenelies.com，主题行写“vibe”，你将在1到2分钟内收到自动回复。所以，Steve和我感谢你们的时间，我们整周都在这里。谢谢大家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so like all these were some of the lessons that went into the vibe coding book. Thank you for everyone who were at the signing yesterday. And uh if you're interested in any of the talks we referenced and excerpts of our book in uh and basically uh all the links that are in this presentation, just send an email to realgenelies.com subject line vibe and you'll get an automated response in a minute or two. So with that, Steve and I thank you for your time and we were around all week. Thanks all.</p>
</details>