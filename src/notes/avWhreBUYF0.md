---
author: AI Engineer
date: '2025-08-10'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=avWhreBUYF0
speaker: AI Engineer
tags:
  - ai-development
  - software-engineering
  - agi-path
  - scaling-challenges
  - independent-learning
title: OpenAI 联合创始人 Greg Brockman 谈编程、AI 基础设施与 AGI 之路
summary: OpenAI 联合创始人 Greg Brockman 在一次访谈中分享了他的个人成长经历、编程启蒙、在 Stripe 的早期创业挑战，以及他对人工智能未来发展的深刻洞察。他强调了独立学习的重要性，回顾了深度学习从 AlexNet 到 AGI 愿景的演变，并详细阐述了 OpenAI 内部研究与工程协作的理念。Greg 还讨论了 AI 基础设施的规模化挑战、CodeX 对软件工程的影响，以及未来 AI 驱动经济中对多样化智能体的需求，展望了 AI 如何赋能人类解决复杂问题。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
  - historical-insights
people:
  - Greg Brockman
  - Jensen Huang
  - Alan Turing
  - Alex Krizhevsky
  - Ilya Sutskever
  - Jeff Hinton
  - Patrick Collison
  - John Collison
  - Daryl
  - Matthew Brockman
  - Dylan Patel
  - McCulloch
  - Pitts
companies_orgs:
  - OpenAI
  - Stripe
  - W3 Schools
  - Wells Fargo
  - MIT
  - Harvard
  - University of North Dakota
  - Julius AI
  - Newegg
  - GitHub
products_models:
  - ChatGPT
  - GPT-4
  - CodeX
  - AlexNet
  - Titan X
  - R2-D2
media_books:
  - Computing Machinery and Intelligence
  - Hacker News
  - Attention Is All You Need
status: evergreen
---
### 编程之路的启蒙与转变

主持人向 Greg Brockman 问好，并感谢他抽出时间接受 AI Engineer 的采访。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, hello. Hello. Is uh mic working for you? Check. Check. Check. One, two, three. All right. First hard technology problem of the day down. Yeah. Yeah. Well, the Wi-Fi is the other one. Um, everyone here knows. Um, so Greg, welcome to AI Engineer. Thank you so much for taking the time. Thank you for having me.</p>
</details>

主持人表示，他们将按时间顺序进行访谈，并已将听众提交的问题进行了整理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, we're going to go a little bit chronologically and, uh, a lot of people send in questions and I've sort of grouped them up for you. So, we're just get right into it.</p>
</details>

主持人提到，他深入研究了 Greg 的背景，得知他从小就接触戏剧、化学和数学，并曾开发一款日历日程安排应用，这让他开始接触编程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">U, so, you know, you you know, I did some deep research on you. uh you started with deep research with with deep research. Um I called it Peep research because you were researching a person. Uh you actually did theater growing up and chemistry and math and you wrote a calendar scheduling app and that's what got you into coding.</p>
</details>

主持人好奇地问，究竟是什么真正激发了 Greg 对编程的热爱，让他成为了一个“编程高手”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But like what really inspired your love for coding? Like why why are you the coding guy?</p>
</details>

Greg 回答说，有趣的是，他小时候以为自己会成为一名数学家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well the funny thing is I thought I was going to be a mathematician when I grew up.</p>
</details>

他曾阅读过像**伽罗瓦**（Gawwa: 法国数学家，群论的奠基者）和**高斯**（Gaus: 德国数学家、物理学家、天文学家，被誉为“数学王子”）这样的人物，他们致力于跨越百年、两百年甚至三百年的时间尺度的研究。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. You know I'd read about people like Gawwa and Gaus. you know, we work working on these like hundred, 200, 300 year time horizons.</p>
</details>

他当时想，那就是他想做的事情，如果他提出的任何东西在他有生之年就被使用，那说明它不够长远，不够抽象。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I was like, that's what I want to do. If anything that I come up with is ever used while I'm still alive, it wasn't long-term enough. It wasn't abstract enough.</p>
</details>

Greg 回忆说，高中毕业后，他正在写一本化学教科书，并把它寄给一位在数学领域做过类似事情的朋友。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and I was writing this chemistry textbook after high school, sent it to one of my friends who' done something similar in math,</p>
</details>

朋友告诉他：“没人会出版这本书。你 Y 可以选择自费出版。”Greg 觉得那听起来工作量大、成本高昂，或者“你可以制作一个网站。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and he said, "No one is going to publish this. You can either self-publish." I was like, "Ah, sounds like a lot of work, a lot of capital, or you could make a website." Mhm.</p>
</details>

于是 Greg 想：“我想我得学怎么做网站了。”他真的去了 **W3 Schools**（W3 Schools: 一个流行的在线教程网站，提供关于网页开发技术的免费课程）并完成了他们的 PHP 教程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I was like, "Guess I'm going to learn how to make a website." And so I literally went on W3 Schools and did their PHP tutorial.</p>
</details>

他问在场有多少人还记得 W3 Schools，发现不少人举手。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How many people here remember W3 Schools? Yeah. Decent number of hands.</p>
</details>

Greg 记得他做的第一个东西是一个表格排序小部件。他脑海中有一个清晰的画面，当他点击某一列，表格就按照那一列排序时，他觉得那简直是魔法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and I remember the very first thing I built was a table sorting widget, right? I had this picture in my head of what it would be. And I remember the moment that I clicked the column and it sorted according to that column, which was exactly the thing that I wanted. And I was like, that was magic, right? And I was like, this is so cool.</p>
</details>

他解释说，数学的问题在于你苦思冥想一个问题，理解它，然后用晦涩的方式写下来，称之为证明，然后可能只有三个人会关心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because the thing about math is that you think hard about a problem, you understand it, you write it down in an obscure way, you call it proof. And then like three people will ever care, right?</p>
</details>

但在编程中，你用晦涩的方式写下来，称之为程序，也许只有三个人会阅读并关心代码本身，但每个人都能从中受益。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But in programming, you write it down in an obscure way, we call a program. And then maybe only three people ever read that program and care about the code. But everyone gets the benefit.</p>
</details>

没有人需要理解细节，你脑海中的东西变成了现实，存在于这个世界。Greg 觉得这才是他想做的事情，他放弃了百年时间尺度的想法，只想去创造。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No one has to understand the details. That thing that was in your head, it's real. It's in the world. And I was like, that that's the thing I want to do. Forget about that hundred-year time horizon. I just want to build</p>
</details>

### Stripe 岁月：从辍学到 CTO

主持人说，Greg 确实只想创造，而且他做得非常好，以至于还在大学时就被 **Stripe**（Stripe: 一家提供在线支付处理服务的科技公司）冷邮件联系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh you do just want to build. Uh it's so you were so good at it that somehow somewhere you got cold emailed by Stripe while you're still in college. That's right.</p>
</details>

主持人问 Greg，Stripe 是如何找到他的，以及是什么说服他辍学加入这家公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh what's the story? How first of all, how did they find you and what was it that convinced you to drop out to join them?</p>
</details>

Greg 解释说，他与 Stripe 的所有早期成员都有共同的朋友，当时 Stripe 还是一个只有三人的“巨型公司”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, so I had mutual friends with all the people at at Stripe, the you know giant company of like three people at the time.</p>
</details>

他们像往常一样，向哈佛大学的人打听校园里有哪些值得交流的人，Greg 的名字就被提到了。他们也向麻省理工学院（MIT）的人打听了同样的问题，因为 Greg 实际上已经从哈佛辍学去了麻省理工，所以他在这两边都得到了推荐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh and uh uh they they had asked you know the usual thing where they'd asked someone at Harvard who the you know people around campus to talk to uh who they might recruit where my name came up they asked the same for the people at MIT because I actually had dropped I' I'd been at Harvard and actually dropped out to go to MIT so I I had the advantage of uh I guess you know uh get getting up votes on both sides.</p>
</details>

Greg 记得他第一次见到 **Patrick Collison**（Patrick Collison: Stripe 的联合创始人兼首席执行官）时，他刚飞抵，已是深夜，外面还下着暴风雨。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but I remember when I met the Patrick and it was you I just flown in. It was like late at night that you know it was storming and uh I I showed up and we just started talking about code, right?</p>
</details>

那是一个让他觉得“这就是我一直想合作的人”的时刻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it was just like one of those moments where you're like this this is the kind of person that that I've wanted to work with and been looking for.</p>
</details>

于是 Greg 最终从麻省理工学院辍学，飞到那里，并从那时起一直待在那里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh and so I ended up dropping out of MIT uh and uh you know flew out and been out here ever since. Yeah. Yeah.</p>
</details>

主持人提到，他们会不时穿插一些嘉宾提问。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we have a spe we have some guest questions sprinkled along the way as you know.</p>
</details>

来自 **Julius AI** 的首席技术官 **Matthew Brockman**（Greg 的兄弟）提问：“你认为我们的父母什么时候会放弃你完成学位的梦想？也许哈佛或北达科他大学会重新接纳你。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, so question from someone named Matthew Brockman. I've heard of him. CTO of Julius AI. When do you think our parents will give up on the dream of you finishing your degree? Maybe maybe Harvard or UND will take you back.</p>
</details>

Greg 笑着回答：“永远不会。”他承认，无论去哪里，如果你告诉父母你要离开哈佛，那都会很难；如果你告诉他们你要完全辍学，那会更困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes. Uh, well, never. Um, it was definitely, you know, I think it was no matter where you're going, if you tell your parents you're leaving Harvard, it's going to be hard. Um, you tell your parents you're leaving school altogether, it's going to be difficult.</p>
</details>

但他认为，值得称赞的是，尽管很困难，父母还是说：“我们信任你，你一定从你的角度看到了并理解了我们从半个国家之外难以看到的东西。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and I think that you know it was actually um to to their credit you know I think even though it was difficult um that they were like that you know we trust you like you you must see something and and understand something from from where you sit that's hard for us to see from from halfway across the country.</p>
</details>

Greg 提到，后来他在 Stripe 度过了愉快的时光，学到了很多东西，而且 Stripe 最终成为了一家真正的公司，而不是他辍学后一事无成。他认为父母对此已经非常满意了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but yeah I think that that as you know did Stripe and uh and had a good time and and actually learned things um and uh turned out as a real company and not just uh uh you know just dropping out doing nothing. I I think that that they they really were were uh you know have have warmed up to it and so um</p>
</details>

主持人补充说，他认为 Greg 的父母一定为他感到非常骄傲。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think they're very proud of you. Yes. Absolutely.</p>
</details>

Greg 在 Stripe 从 4 人发展到 250 人的阶段，最终成为了第一任首席技术官（CTO）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you you were with Stripe from 4 to 250 people as the first CTO eventually.</p>
</details>

主持人提到，他最近发现了一个可能连 **Hacker News**（Hacker News: 一个由 Y Combinator 运营的社交新闻网站，主要关注计算机科学和创业公司）都不知道的事情：Stripe 的“电话安装”传说实际上只发生过几次，并不是一个常态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um one thing I I I found recently that Hacker News maybe doesn't know is apparently the call installation only happened like a handful of times. It wasn't like a thing at Stripe. Was that that's I think that's true.</p>
</details>

Greg 证实了这一点，并说这个传说之所以流传，是因为它听起来很酷，体现了 Stripe 对客户的极致关注。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um yeah it is it is the thing that that you know it's like survived the uh the It's an urban legend because it's like so cool. It's like you so customer obsessed.</p>
</details>

主持人问，关于早期 Stripe，人们还有哪些误解，Greg 想澄清什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Anyway, so what else do people get wrong about early Stripe? Like why do we want to clear the air?</p>
</details>

Greg 认为，人们不理解当时有多么艰难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Well, I think people don't understand how hard it was, right?</p>
</details>

他记得他们经常做的一件事是把所有客户都加到 **Ghat**（Ghat: 可能指早期的即时通讯或协作平台，如 Google Hangouts Chat 的前身），这样他们就能与客户保持持续联系。即使不能真正坐在客户旁边，也相当于做了次优选择。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was just like um like I remember um you know, first of all, the the kind of thing that we did a lot of is that we added all of our customers on Ghat. And so it was very much the case that we were in constant contact with them. And so even if you're not literally sitting over their their shoulder, you're doing the next best thing.</p>
</details>

Greg 举例说，有一天他们意识到正在使用的支付后端无法扩展，必须转到 **富国银行**（Wells Fargo: 美国一家大型跨国金融服务公司）。他们达成了协议，但需要进行技术集成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but I remember um like one I you know one one one day we realized that I you know the the the payment back end that we were on it just wasn't going to scale. Uh we absolutely needed to be on Wells Fargo and we got sort of the deal done but now we need to do a technical integration.</p>
</details>

富国银行的人说，这个技术集成需要大约 9 个月，因为通常就是这么久。但 Greg 和他的团队觉得这太疯狂了，作为一家初创公司，他们不能等 9 个月。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And they said well this technical integration is going to take like 9 months because that's how long it takes. And we're like that's crazy. Like you're a startup. Like we can't sit around waiting 9 months to get this thing done.</p>
</details>

结果，他们实际上在 24 小时内就完成了集成，基本上把它当作一个大学的习题来解决。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so actually in 24 hours uh we completed it uh by just basically treating it like a college problem set.</p>
</details>

Greg 负责实现所有功能，**John Collison**（John Collison: Stripe 的联合创始人兼总裁）从测试脚本的顶部开始测试，指出问题，而 **Daryl** 则从底部向上工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh and it was you know I I was implementing everything. John was working from the top of this test script and testing everything and being like this is broken. Daryl was starting from the bottom and working his way up.</p>
</details>

第二天早上，他们与认证人员进行了沟通，发送了一些测试消息，结果出现了错误。认证人员说：“好吧，下周再见。”因为他们的所有客户都是这样操作的，出现错误就意味着需要发送给开发团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh in the morning we got on with with the uh certifying person and we sent some some test messages and there was an error and the person's like all right I'll see you next week. Um because that's how all their customers operate, right? there's an error like you know clear you need to send it to your dev team</p>
</details>

但 Greg 和团队坚持说：“不不不，系统肯定只是出了点小故障。”Patrick 努力拖住对方，Greg 则在旁边疯狂修改代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we were like no no no there must just be like like some sort of glitch in the system like and we just Patrick was just like talking to keep her on the line and frantically like I was there editing the code</p>
</details>

他们进行了五轮尝试，最终还是失败了。但幸运的是，那位女士很好心地将会议重新安排到两小时后，然后他们就通过了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so we got like five turns in uh and we actually failed uh but fortunately she was nice enough to reschedule two two hours later uh and then we passed</p>
</details>

Greg 意识到，这相当于在那个时刻完成了六周的正常开发工作，因为他们没有接受其他组织会遵循的任意限制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so you realize that was like six weeks worth of normal dev work that you got done in that moment because you didn't just accept the like arbitrary constraints of how other organizations would work. Yeah. Yeah.</p>
</details>

主持人问，在大多数工作中，是否还有很多这样的机会，以及 Greg 会如何建议其他人做到如此快速，或者说“削减”如此多的周期。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do I think there's a do you think there's a lot more opportunity like that in most jobs? Like how do you how do you advise other people to be that I guess fast or like to cut that many cycles?</p>
</details>

Greg 认为，如果你从**第一性原理**（First Principles: 一种思考方式，指从最基本的事实或假设出发，而不是基于过去的经验或他人的观点）出发思考，你就能找到哪些事情需要慢下来，或者需要按常规方式完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes. I mean I think that I the way I think about it is that if you think from first principles you can find where things need to be slow or done the way that they're normally done or whatever those things are those exist right the general principle of ah just don't worry about the constraints and just do the thing. Um, I think that that that that is not 100% true.</p>
</details>

他认为，这并非 100% 适用，关键在于找出哪些不必要的开销是由于不再适用的限制而存在的，这些限制不适用于你的具体情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's really about mapping to where is there unnecessary overhead that's there for constraints that are no longer applicable that that don't apply uh to your specific circumstance.</p>
</details>

Greg 补充说，在当前这个 AI 极大提升生产力的世界中，这一点尤为重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think this is especially true in this world that we're in now with AI that's accelerating productivity so much. Yeah. Just fire off a codeex. Why not, right?</p>
</details>

### 独立学习的力量

主持人提到，在 Greg 加入 OpenAI 之前的生活中，独立学习是一个反复出现的主题，从高中时期的 **Recenter**（Recenter: 可能是指一个独立学习项目或平台，具体信息未详）到他的休假期间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, one thing one thing one last thing about your sort of pre-openi life was independent study. I just I I found that just it's a recurrent theme from high school. You did recenter. I did. Um and your sbatical as well. So you've just done it repeatedly.</p>
</details>

主持人问，是什么让独立学习如此有效？因为很多人做得不好，甚至浪费了一年时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What makes independent study effective? Like I think there's a lot of people who don't do a good job of it and kind of waste a year. What what what do you do that makes it so effective?</p>
</details>

Greg 认为，独立学习是他成长过程中的一个关键部分。六年级时，他父亲教他代数，七年级时，他第一次进入高中，开始学习高级数学预代数课程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I think it was a key part of how I grew up. um you know in in uh in sixth grade my dad taught me algebra and in seventh grade showed up at the high school as the first time that you you track into advanced math pre-alggebra</p>
</details>

他们问老师他是否可以跳过这门课，直接上八年级的课程。老师非常轻蔑地看着他的妈妈和他说：“每个家长都认为自己的孩子很特别。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we went to the teacher like can he skip uh this and go directly to the the eighth year the eighth grade course and the teacher looked at my mom and me very condescendingly and was like every parent believes that their child is special</p>
</details>

但 Greg 在这位老师的课上待了一个月后，他根本不听讲，只在后面玩计算器游戏。老师试图刁难他，叫他回答白板上的问题，但他都答对了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and after like a month of being in this teacher's class and you know I was paying no attention and just doing you know calcul calculator games in in the back and she'd try to trip me up and, you know, call me to answer questions from the whiteboard and I would just get them all right.</p>
</details>

于是老师说：“好吧，算你厉害。你的孩子应该上高一年级的课。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">She was like, "All right, like fair enough. Uh, your your child should be uh in the next year."</p>
</details>

到了八年级，他的初中已经没有更多的数学课了。他当时没有车，所以不得不上在线课程。在那一年里，他完成了三年的高中数学课程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and but then when I was in eighth grade, there was no more math left in my middle school. I didn't have a car, so I had to do online courses. And in that one year, I ended up doing three years worth of high school math.</p>
</details>

Greg 认为，对他来说，很多时候如果你对某件事充满热情，并且想独立完成，你就能打破限制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I think that for me a lot of it is about suddenly these if you're if you're excited about something independently it's something you want to do that you can break the constraints there as well.</p>
</details>

你可以在一年内完成三年的数学课程，然后这种效应会复合增长。第二年，他在高中完成了那里的数学课程，然后从十年级到十二年级，他没有更多的数学课了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh you can do three years of math in one year and then it compounds because the next year I was at my high school finished math there and then all through 10th 11th 12th grade I I had you know no more math</p>
</details>

他当时有车，所以可以去**北达科他大学**（University of North Dakota: 位于美国北达科他州的一所公立研究型大学）上任何他想上的课。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so I did have a car and I was able to go to University of North Dakota take whatever classes I wanted there.</p>
</details>

Greg 认为，这种复合效应最终促使他学习编程。他学习编程的方式也主要是自学，通过构建东西和在现实世界中体验来学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I think that that that kind of compounded compounded compounded to learning programming. And then I think that that the way I learned program is very much self-study just building things and and experiencing things out in the world.</p>
</details>

所以他给出的建议是：如果你有机会探索，并且有热情，真正享受其中，那就深入下去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I think that the thing I would just advise is like if you have an opportunity to explore and you have a passion, you're actually enjoying it, just go deep, right?</p>
</details>

他补充说，这并不总是充满乐趣，很容易感到无聊，但如果你能克服这些障碍，那么回报是值得的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And by the way, it's not always fun, right? I think that it is very easy to uh get kind of you know sort of feel like uh I got kind of bored but if you just push through those hurdles then I think that the that the reward is worth it. Yeah.</p>
</details>

主持人提到，Greg 也曾自学机器学习，那是他人生中的一个重要阶段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You self-studied machine learning too like that was a whole period of your life.</p>
</details>

主持人问，那段经历有什么特别的亮点吗？听起来 Greg 曾与 **Jeff Hinton**（Jeff Hinton: 英国裔加拿大计算机科学家，被誉为“深度学习教父”）交流过。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um any particular highlights from there? It sounds like you talked to Jeff Hinton at one time. I did talk to Jeff Hinton. Yeah.</p>
</details>

主持人问，那次交流是否有帮助，或者说成为机器学习实践者过程中最有帮助的是什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes. And like was you know did that help or what was the most helpful thing like you became a machine learning practitioner?</p>
</details>

Greg 回忆说，当他刚开始时，他在 Stripe 工作，阅读 Hacker News 上关于深度学习的帖子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, so so when I when I started out, so you know, I'd been I'd been at Stripe. I was reading hacker news post about deep learning and yeah,</p>
</details>

那是 2013-2014 年，感觉每天都有关于深度学习的新进展，他当时想：“什么是深度学习？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it was like, you know, there's a deep learning for ACT like every day it felt like and this was, you know, 2013, 2014 and I was like, what is deep learning?</p>
</details>

他认识这个领域的一个人，于是和他聊了聊，那个人又把他介绍给更多的人，然后又介绍给更多的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I knew like one person in the field and so I talked to them, they introduced me to some more people and then they introduced me to more people</p>
</details>

令他惊讶的是，他不断被介绍给他大学里最聪明的朋友们。他当时想：“这很有趣，所有这些人最终都进入了这个领域，到底发生了什么？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the thing that surprised me was I kept getting introduced to a bunch of my smartest friends from college and I was like that's interesting. All of these people ended up in this field like what's going on</p>
</details>

他开始意识到，有一些真实的东西正在被构建和开发，人们正在让这些系统做以前计算机无法做到的实质性的新事情。他觉得“这就是它”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I started to realize that that there was something real that was building right that was being developed that people were really making these systems do material new things that computers were not able to do before. And I was like that that is the thing.</p>
</details>

离开 Stripe 后，他知道自己想在 AI 领域做点什么，想创办一家 AI 公司，但不知道如何贡献，自己的技能能用在哪里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so after I left Stripe, you know, I knew I wanted to do something in AI. Um start an AI company, but I didn't really know how to contribute, what my skills would be useful for.</p>
</details>

于是他在纽约，心想：“不如我搭建一个 **GPU**（Graphics Processing Unit: 图形处理器，在深度学习中用于加速计算）平台，看看能不能参加一些 Kaggle 竞赛。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh so I was in New York and I was like, you know what, I'll build a GPU rig and see if I can do some Kaggle competitions.</p>
</details>

他去了 **Newegg**（Newegg: 一家在线零售商，主要销售电脑硬件和软件），买了一些 **Titan X**（Titan X: 英伟达推出的一款高性能显卡）显卡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I went on Newegg and just like, you know, bought some uh some Titan X cards.</p>
</details>

他觉得亲手组装这台机器非常酷。在 2015 年，他曾发过一条推文，展示他启动机器时的情景，屏幕上绿光闪烁，所有风扇都在转动。他当时觉得：“这才是计算机应有的样子。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh it was really cool, you know, physically assembling this machine. And uh you can find some some tweet from from 2015 when I powered it on. You see all this like green and all the fans going and I was like this this is what computers are meant to be.</p>
</details>

主持人认为，在座的许多人也有过类似的经历。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh I think many folks in the audience have that experience as well. Um awesome.</p>
</details>

### AGI 的启示与深度学习的魔力

主持人问，是什么让 Greg 相信 **AGI**（Artificial General Intelligence: 通用人工智能，指能够理解或学习任何人类智力任务的 AI）是可能实现的？因为他曾一度对此感到失望，尝试编写聊天机器人但没有成功。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So what convinced you that AGI was possible? Like you you had a point where you were sort of disillusioned with it. You wrote you tried to write a chatbot. You didn't it didn't work. But what made you go all in on it?</p>
</details>

Greg 说，对他而言，旅程的一部分是阅读 **Alan Turing**（Alan Turing: 英国数学家、逻辑学家和计算机科学家，被誉为“计算机科学之父”和“人工智能之父”）1950 年的论文《**计算机器与智能**》（Computing Machinery and Intelligence: 图灵在其中提出了“图灵测试”）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Well, so you know, part of part of the journey for me was reading Alan Touring's 1950 paper, Computing Machinery, and Intelligence. This is the Touring test paper.</p>
</details>

他问有多少人读过这篇论文，发现举手的人比 W3 Schools 的问题还少，但他强调这篇论文同样重要，值得一读。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How many people have read it? Read it. You fewer hands than than W3 schools. Uh but equally as important, uh worth reading.</p>
</details>

Greg 觉得最引人入胜的是，图灵在开头就提出了**图灵测试**（Turing test: 一种测试机器是否展现出与人类无异的智能行为的方法），即机器是否能思考，是否智能。如果人类无法分辨是在与机器还是与人类对话，就可以说它智能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh the thing that is so fascinating to me is he lays out in the beginning, okay, Turing test, this idea of just does a machine think? Is it intelligent? And you can say it's intelligent if you know a human can't tell the difference between talking to it and talking to a human. Fine.</p>
</details>

但 Greg 认为，真正让他震惊、但并未在流行文化中广泛传播的一点是，图灵说：“你将如何编程来回答这个问题？你永远无法写下所有的规则。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the thing that was that has not really become as embedded in the pop culture, but to me was so astounding was he said, "Well, how are you going to program an answer to this? You will never be able to write down all the rules.</p>
</details>

但如果能建造一台“**儿童机器**”（child machine: 图灵在论文中提出的概念，指一台能够像人类儿童一样学习的机器），通过奖励和惩罚来学习，那么它就能通过测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what if you could build a child machine that learns like a human child and then you just apply rewards and punishments and boom, it's going to uh it's going to to be able to to pass the test."</p>
</details>

Greg 觉得这正是他们必须构建的技术，因为作为程序员，你必须理解一切，理解解决问题的规则。但如果机器能够理解并解决你自身无法理解的问题，那将是根本性的突破，是解决对人类重要问题的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I was like that that is the kind of technology that we have to build because as a programmer you have to understand everything. You have to understand the rules of how to solve the problem. But what if the machine can understand things and solve problems that you yourself cannot understand. Like that feels fundamental, right? That feels like how you actually solve problems that are important to humanity.</p>
</details>

Greg 大约在 2008 年读到这篇论文，他去找他的自然语言处理（**NLP**：Natural Language Processing，自然语言处理，人工智能的一个分支，专注于让计算机理解和处理人类语言）教授，问是否能和他一起做研究。教授给了他一些**句法分析树**（pars trees: 在自然语言处理中，表示句子语法结构的树状图），Greg 觉得这与图灵所说的完全不同，更像是**词网**（word nets: 一种大型词汇数据库，将英语单词组织成同义词集，并记录它们之间的语义关系）之类的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I this was you know 20 2008 or so that I read this and I went to my professor and uh who was an NLP professor and I asked if I could do some research with him and he said yeah here are some pars trees and I was like okay this is not what Turing was talking about. Yeah. Um this is like word nets and the whole thing. Exactly. So it's like you you know definitely a little bit of trough of sorrow there.</p>
</details>

但随着深度学习的出现，神奇之处在于它在 2012 年通过 **AlexNet**（AlexNet: 2012 年由 Alex Krizhevsky 等人提出，在 ImageNet 图像识别竞赛中取得巨大突破的深度卷积神经网络）开始展现出有希望的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but with deep learning, the thing about deep learning that's magic is that, you know, it really started in to show show promising results 2012 with with AlexNet, right?</p>
</details>

AlexNet 在 **ImageNet**（ImageNet: 一个大型视觉数据库，包含数百万张带标签的图像，常用于训练和评估图像识别模型）竞赛中击败了所有人。突然间，你拥有了这种通用的学习机器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And and that it just blew everyone out of the water in the imageet competition. And so suddenly you have this like general learning machine.</p>
</details>

它有一些**卷积**（convolutions: 深度学习中一种重要的操作，通过滤波器提取图像特征）的先验知识，但它比 40 年的计算机视觉研究成果还要好，比那些试图尽可能写下所有规则的人做得更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, it's got a little bit of a prior in there of of of convolutions, but it's better than 40 years worth of computer vision research, right? People trying to write down all the rules as well as possible.</p>
</details>

然后人们会说：“好吧，它在视觉领域有效，但在我的领域永远不会有效。在机器翻译中永远不会有效，在 NLP 中永远不会有效，在这个或那个领域永远不会有效。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then people are like, well, okay, it works in vision, but it's never going to work in my field. It's never going to work in machine translation, never going to work in uh in, you know, in NLP, never going to work in this or that.</p>
</details>

但突然间，它开始在所有这些领域都表现最佳。这些部门之间的壁垒被打破了，Greg 觉得“这正是图灵所说的”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And suddenly it starts being the best in all of those areas. Suddenly the walls between these departments are being torn down and you're like that that is what Terraring was talking about.</p>
</details>

Greg 认为，看到这种技术的类型特征，让他觉得这并非新技术。**神经网络**（neural nets: 模拟人脑神经元连接方式的计算模型，是深度学习的基础）实际上可以追溯到 1943 年 **McCulloch-Pitts 神经元论文**（Mcculla Pitts neuron paper: 1943 年由 Warren McCulloch 和 Walter Pitts 发表的论文，提出了第一个计算神经元模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I think for me just seeing the the type signature of this technology and by the way this technology is not new, right? neural nets were really like if you go back and read the uh the Mcculla Pitts uh neuron paper from like 1943 or so um</p>
</details>

他曾告诉人们去阅读这篇论文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I told people I told him to give homework to people. Okay. Yeah, there you go. Yes. Classes assigned. Um</p>
</details>

论文中的图像看起来就像现在看到的神经元分层图。Greg 意识到他们正在做的事情具有深刻的根本性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the there the the images in there they look just like the kinds of images that you see now of just like you know layers of neurons and things like that. And so you just realize there's something deeply fundamental about what we're doing.</p>
</details>

他提到，在 1990 年代有一篇论文讨论了导致“**深度学习寒冬**”（deep learning winters: 指深度学习研究和投资停滞的时期，通常是由于技术瓶颈或期望过高）的原因，当时人们认为这些神经网络研究者没有新想法，只想建造更大的计算机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh you can find these these uh you can find this paper um from 199 the 1990s talking about what caused the deep learning winters and that it was these neural net people. They have no new ideas. They just want to build bigger computers. And I'm like yes that's what we need to do.</p>
</details>

Greg 认为，所有这些加在一起，感觉他们正在延续这股 70 年的历史浪潮。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so I think that all of this together just feels like we are we are to some extent continuing this wave this 70year history.</p>
</details>

在许多方面，整个计算行业一直在努力达到一个点，即机器能够执行他们刚刚开始触及的任务，解决人类无法解决的新问题，在日常生活中辅助人类。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and in many ways um you know the whole computing industry has been really trying to build up to the point that you can have machines that are able to perform the kinds of tasks that we're just starting to scratch the surface to solve new problems that humans cannot to be be assistive to us in our daily lives</p>
</details>

不再需要用“肉棒”（指手指）打字，而是可以像与人互动一样与机器互动，机器更靠近你，而不是你必须去学习汇编语言或任何其他东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">to not have to you know be typing with our with our you know meat sticks but instead to have something that you can interact with just like a person where the machine comes much closer to you rather than you closer to it and having to learn assembly language or you know whatever it is.</p>
</details>

Greg 觉得所有因素都已就位，现在他们只需要去创造。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so to me it felt like all of the factors were lined up and now we just need to build. Yeah.</p>
</details>

主持人喜欢 Greg 反复强调的“我们只需要去创造”这个主题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I I like that consistent theme that you keep coming back to. We just need to build.</p>
</details>

### OpenAI 的研究与工程协作

主持人提到，Greg 在 2022 年写道，现在是成为一名**机器学习工程师**（ML engineer: 专注于设计、构建和维护机器学习系统和模型的工程师）的时候了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so in 2022 you wrote that it's time to be an ML engineer.</p>
</details>

主持人甚至有一个朋友读了那篇文章后，冷邮件联系 Greg 并加入了 OpenAI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Actually I have a personal friend uh who read that post and cold emailed you and joined OpenAI and all that.</p>
</details>

Greg 当时说，优秀的工程师能够像优秀的研究员一样，为未来的进步做出贡献。主持人问，这在今天是否仍然如此？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um you said that great engineers are able to contribute at the same level as great researchers to future progress. Is that uh is that still true today?</p>
</details>

主持人补充说，很多工程师看到研究员赚数百万美元，会想：“我怎么才能做出同样多的贡献？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, I I think a lot of engineers look at the researchers who are making millions of dollars and they're like, how do I contribute as much?</p>
</details>

Greg 认为，这绝对是真实的，甚至比以前更真实。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, I I think it's absolutely if not even more true.</p>
</details>

他回顾了自 2012 年以来深度学习研究的各个阶段。他认为，最初确实是像他创办 OpenAI 时所预期的那样，由拥有博士学位的研究科学家提出想法并进行测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I think that like if you look at the phases of deep learning research since 2012, I think at the beginning it really was um and this is kind of what I expected when we started OpenAI, you know, just like research scientists who had gotten a PhD who would go and kind of come up with ideas and test them out.</p>
</details>

当然，工程工作是必不可少的。如果看 AlexNet 本身，它从根本上就是关于如何在 GPU 上实现快速**卷积核**（convolutional kernels: 卷积神经网络中的核心计算单元，用于提取特征）的工程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you know there's there's engineering to be done. If you actually look at Alexet itself, you know, it's fundamentally the engineering of let's get fast convolutional kernels on a GPU.</p>
</details>

Greg 透露了一个趣闻：当时与 Alex 在同一个实验室的人实际上为他感到非常难过，因为他们觉得他只是为了一些不那么重要的图像数据集做了一些快速的卷积核。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and and uh fun fun fact is people who were in the lab with Alexi at the time uh were actually felt very bad for him because they were like he has some fast com kernels for uh uh for you know some some image data set that doesn't really matter</p>
</details>

但 **Ilya Sutskever**（Ilya Sutskever: OpenAI 的联合创始人兼前首席科学家）却认为：“显然，我们只需要把这个应用到 ImageNet 上，它会很棒的！”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but you know Ilia was like well clearly we just need to apply this to imageet. It's going to be great right? Right?</p>
</details>

所以，是伟大的工程与如何运用它的想法结合在一起，才创造了奇迹。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's like the combination of great engineering together with the idea of what to do with it, right? That that's what what makes the magic work.</p>
</details>

Greg 认为，现在仍然如此，甚至更真实的是，所需的工程工作不再仅仅是构建一些卷积核，而是要构建一个系统，扩展到 10 万个 GPU，构建一个能够以各种方式协调事物的疯狂**强化学习**（RL: Reinforcement Learning，强化学习，机器学习的一个分支，通过与环境互动学习如何做出决策以最大化累积奖励）系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and uh the thing that I think is still true and even more true is okay, so the engineering required, it's now not just let's build some kernels, but let's build a system. Let's actually scale to 100,000 GPUs. Let's actually, you know, sort of do this crazy RL system that orchestrates things in all sorts of ways.</p>
</details>

如果没有想法，你就寸步难行；但如果没有工程实现，想法就无法付诸实践。所以，两者需要和谐地结合在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so the idea, if you don't have the idea, you're dead in the water. There's nothing to do. But if you don't have the engineering, that idea is not going to it's not going to live and see the light of day. And so you need to have both of these coming together harmoniously.</p>
</details>

主持人认为，Ilya 和 Alex 的关系真正象征着现在 OpenAI 的研究与工程合作理念。Greg 表示赞同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I think that Ilia Alex relationship is really emblematic of like the research engineering partnership that now is the philosophy at OpenAI. That's right. Yeah. Yeah.</p>
</details>

Greg 提到，如果看 OpenAI 的运作方式，从一开始他们就秉持着工程和研究同等重视、并肩合作的理念，他们每天都在为此努力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you look at how open AI operates like I think from the very beginning we had this ethos of engineering and research be valued um and and work together um as partners and I think that that is something that we you know it's like something that we we really work at every day. Yeah.</p>
</details>

主持人说，他特意想在访谈中提出一些“刁钻”的问题。关于工程与研究的关系，OpenAI 在早期做错了什么，而现在做得很好？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh it's my explicit goal to try to throw uh curveballs in this in this stuff. So uh in terms of the relationship between engineering and research, what did OpenAI do wrong in the early days that you do well now?</p>
</details>

Greg 认为，工程与研究的关系永远无法完全解决，你只是解决了当前层面的问题，然后进入下一个更复杂的层面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um well I think that the relationship between engineering and research the way I think about it is you never fully solve it right you just sort of solve the current level of problem and then you move on to the next level of sophistication</p>
</details>

他注意到，他们遇到的问题基本上与其他实验室遇到的问题相同，只是他们可能进展更快，或者问题略有不同。他认为这其中有一些深刻的根本性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I noticed that actually the kinds of problems that we ran into were basically the same problems that had been run into at every other lab and it was just like you know either we would be further along or that there' be a slightly different variant of it and so I think there's something deeply fundamental about this um</p>
</details>

在最开始，他看到来自工程界和研究界的人对系统限制的看法非常不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so the the ve at the very beginning I could really see people who came from the engineering world, people came from the research world, just sort of thinking about system constraints very differently.</p>
</details>

作为工程师，你会觉得：“嘿，如果我有一个接口，你不应该关心接口后面是什么。我们已经就接口达成一致，我可以随意实现。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so as an engineer, you're like, hey, if I've got an interface, you should not care what's behind that interface. We agreed on the interface, I can implement however I want.</p>
</details>

而作为研究员，你会觉得：“如果系统中有任何 bug，我只会得到轻微的性能下降，不会有异常，也不会有指示错误在哪里。所以我必须理解一切。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whereas if you're a researcher, you're like, if there's a bug anywhere in the system, all I'm going to get is just slightly degraded performance. Not going to get an exception, not going to get indications of where. And so I am responsible for understanding everything.</p>
</details>

研究员认为，接口无关紧要，除非它们真正坚如磐石，让他永远不用去考虑，但这要求很高。否则，他就要对代码负责。这会导致摩擦，因为如何才能真正协同工作呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the interfaces they don't matter unless they're like truly rock solid and I can just like never think about it which is a pretty high bar. um then I am actually responsible for for this code and that causes friction right because then how do you actually work together</p>
</details>

Greg 早期看到一个项目，工程背景的人写代码，然后每一行代码都会引发一场大讨论。他当时觉得这样永远无法推进，会非常缓慢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I saw a project very early on where that you know the the people from the engineering background would write the code and then there'd be this big debate over every single line and I was just like this is never going to move it's going to be so slow</p>
</details>

他们最终采取的方式是，Greg 亲自参与其中，他会提出五六个想法，然后研究方的人会说其中四个不好。Greg 觉得这正是他想要的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and instead the way that we ended up proceeding was um so I actually worked on that directly and I'd come up with like five ideas at a time someone from the research side would say these four are bad I'd be like great that's all I wanted. Right.</p>
</details>

Greg 认为他们真正认识到至关重要的一个价值观，也是他告诉所有从工程界加入 OpenAI 的人，就是“**技术谦逊**”（technical humility: 指在技术领域保持开放心态，承认自己知识的局限性，并愿意从他人那里学习）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so the value that I think we've really realized is critical and that I tell people from from the engineering world coming into OpenAI um is technical humility.</p>
</details>

他说，你带着重要的技能加入，但这与传统的网络初创公司完全不同。弄清楚何时应用你的直觉，何时将其抛诸脑后，是非常困难的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? It's like you're coming in because you have skills that are important. But it's a totally different environment from you know something like a traditional web startup and figuring out when those intuitions apply and figuring out like when to leave them at the door is super hard.</p>
</details>

所以最重要的是真正倾听，并假设你遗漏了什么，直到你深入理解了“为什么”。然后，在那一点上，就可以进行改变，改变架构，改变抽象。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so the most important thing is to like come in really really listen and kind of assume that that that there's something that you're missing until you deeply understand the why and then at that point great make the change like change the the the architecture change the abstractions.</p>
</details>

Greg 认为，这种真正阅读、倾听和带着谦逊去理解的方法，是一个非常关键的决定因素。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but I think that that kind of approach of just really really read and listen and understand with that humility um that that is I think a really key determiner. Yeah. Awesome.</p>
</details>

### 规模化挑战与产品发布

主持人说，他们将讲述一些 OpenAI 最近发布产品的成功故事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um we're going to tell some stories from recent launches of OpenAI, the greatest hits.</p>
</details>

其中一个有趣的事情是普遍的规模化问题。在不同的数量级下，一切都会崩溃。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so one of the things that is is kind of interesting is just scaling in general. Everything breaks at different orders of magnitude.</p>
</details>

**ChatGPT** 发布时，5 天内获得了 100 万用户。今年 **GPT-4** 图像生成发布时，5 天内获得了 1 亿用户。主持人问，这两个时期是如何比较的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in when chatbt launched you got a million users in 5 days. This year when 40 IG gen launched, you got 100 million users in 5 days. How do those two periods compare?</p>
</details>

Greg 认为，两者在很多方面非常相似。ChatGPT 本应是一个低调的研究预览版，他们发布时非常谨慎，但突然间一切都崩溃了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh they echo very similarly in a lot of ways. You know, the thing about chatbt, uh, it was supposed to be a low-key research preview and we put it out very, you know, sort of chilly and then suddenly everything was down</p>
</details>

他们预料到 ChatGPT 会非常受欢迎，但认为需要 GPT-4 才能实现。主持人补充说，因为他们内部已经有了 GPT-4，所以对 ChatGPT 并没有那么惊讶。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we, you know, we kind of anticipated that chat GBT would be a very popular thing, but we thought that GPT4 would be necessary to get it. Had it internally as well, so you just weren't impressed by Exactly.</p>
</details>

Greg 说，这就是这个领域的另一个特点，你更新得太快了。你看到魔法，觉得这是你见过最神奇的东西，然后你就会想：“为什么它不能帮我合并 10 个**拉取请求**（PRs: Pull Requests，软件开发中，开发者请求将自己的代码更改合并到主代码库中）呢？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right. It's like you, that's the other thing about this field is you update so quickly, right? It's like you see magic and you're like this is the most amazing thing I've ever seen and then you're like well why can't it like you know why why can't it like merge you know 10 PRs for me. Exactly.</p>
</details>

图像生成发布时的情况也非常相似，它非常受欢迎，病毒式传播，数据量超出了图表。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and the image gen moment was very similar in terms of it was just so so loved and so popular and it just went viral in in ways that you know just like the numbers were just off the charts.</p>
</details>

所以，他们内部实际上做了一件他们极力避免的事情，那就是在这两次发布中，他们都从研究部门抽调了大量的计算资源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so internally we actually did something that we really really try not to do um which is we pulled a bunch of compute from research for both of these launches actually um because that's mortgaging the future um to make make the system work um</p>
</details>

因为这相当于“抵押未来”来让系统运行。但如果你能真正交付并满足需求，那么人们就能体验到这种魔力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but if you can actually deliver and keep up with demand then of course people get to experience the magic and I think that um that that that's something that is really worthwhile and it's really important to sort of you know maximize those moments.</p>
</details>

Greg 认为，他们秉持着相同的理念：真正服务用户，努力推动技术发展，做前所未有的实质性新事物。然后，无论需要付出什么，都要将这些成果推向世界并使其成功。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so I think that that that we really have that same ethos of really serving the user, really trying to push for the technology and just do things that are materially new that no one's ever seen before. Um, and then whatever it takes to get those out into the world and make those successful that that's what we do. Amazing.</p>
</details>

主持人提到 GPT-4 的发布，并听说 Greg 的妻子画了那个玩笑网站。Greg 证实了这一点，并说那是一个有趣的彩蛋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, well, I mean, incredible job. U GPT4 launch. So I am told your wife drew the joke website. That's true. Yeah. Fun fun fun Easter egg.</p>
</details>

Greg 的字迹太差了，连他们的 AI 都无法识别。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My handwriting was so bad uh that even our AI couldn't tell what to do with it.</p>
</details>

主持人问，Greg 是否即兴创作了一些内容。Greg 肯定地说，通常他在做这类演示时，会提前测试大致的流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so like uh apparently did you improvise some of this? I I I I heard I gravine. Yeah, definitely. Definitely like you know usually when I when I do these kinds of demos like I've tested the general shape of them ahead of time.</p>
</details>

但他总是避免那种只要稍微打错一个字符就会导致演示失败的情况。他喜欢演示具有一定的鲁棒性，所以实际展示的内容总会有所变化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh but I've always had like it's very easy in this field to have ones that are just like if you slightly typo a character or something then the demo will not work. I don't like doing those. I like to have some robustness to it. So there's always variation in terms of of what actually ends up get being shown.</p>
</details>

主持人认为，那是世界第一次看到“**氛围编程**”（vibe coding: 一种轻松、直观的编程方式，通常通过自然语言或简单交互与 AI 协作生成代码，强调用户体验和创造性表达）。现在它已经成为一种趋势。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To me, this was the first time I think the world ever saw vibe coding. Um, it is now a thing. What are your thoughts on vibe coding?</p>
</details>

Greg 认为，氛围编程作为一种赋能机制非常棒，它代表了未来的发展方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, well, I think that vibe coding is amazing as an empowerment mechanism, right? I think it's sort of a representation of what is to come.</p>
</details>

他认为氛围编程的具体形式会随着时间而改变。例如，像 **CodeX**（CodeX: OpenAI 开发的 AI 模型，能够理解和生成代码）这样的东西，他们的愿景是，随着能够真正工作的智能体出现，你不仅可以拥有一个或十个副本，而是可以拥有成百上千甚至十万个这样的智能体在运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think that the specifics of what vibe coding is, I think that's going to change over time, right? I think that you look at even things like codeex like to some extent I think our vision is that as you start to have agents that really work that you can have not just one copy not just 10 copies but you can have a hundred or thousand or 10,000 or 100 thousand of these things running</p>
</details>

你会更像对待同事一样对待它们，让它们在云端工作，能够连接到各种事物。当你睡觉或笔记本电脑合上时，它们应该仍然在工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you're going to want to treat them much more like a co-orker right that you're going to want them off in the cloud doing stuff being able to hook hook up to all sorts of things you're asleep your laptop's closed it should still be working</p>
</details>

Greg 预测，未来会有越来越多的氛围编程出现，但**智能体**（agentic stuff: 指具有自主决策、规划和执行能力的 AI 系统或代理）也会真正介入并超越。所有这些都将导致更多系统的构建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um I think that that the the you know current conception of of vibe coding in an interactive loop. Um, you know, that that's something that I I think is like, you know, it's it's I Okay, so my my prediction of what will happen is like I think there's going to be more and more of that happening, but I think that the agentic stuff is going to also really intercept and overtake. And I think that all of this is just going to result in just way more systems being built.</p>
</details>

另一个非常有趣的事情是，许多氛围编程的演示和那些酷炫的东西，例如制作玩笑网站，都是从零开始制作一个应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and the thing that that I think is also very interesting is that a lot of the vibe coding kind of demos and and the cool the cool flashy stuff. Um, for example, make making the joke website, it's making an app from scratch.</p>
</details>

但 Greg 认为，真正具有变革性的新事物，并且正在开始发生的是，能够转换现有应用，使其更深入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the thing that I think will really be new and transformative and is starting to really happen is being able to transform existing applications to go deeper.</p>
</details>

他认为，许多公司都拥有**遗留代码库**（legacy code bases: 指那些年代久远、可能由过时技术编写且难以维护的代码），进行迁移、更新库、将 **COBOL**（COBOL: 一种面向商业的编程语言，常用于处理金融和商业数据，在许多大型企业和政府系统中仍在使用）语言转换为其他语言都非常困难，而且对人类来说并不有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and that be able to, you know, like I think so many companies are sitting on legacy code bases and doing migrations and updating libraries and changing your cobalt language to something else is so hard and is actually just not very fun for humans.</p>
</details>

Greg 认为，他们正在开始拥有能够真正解决这些问题的 AI。氛围编程最初是关于制作酷炫应用，现在正变得更像严肃的软件工程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh, I think we're starting to get AI that are able to really tackle those problems. And so the thing that I love about where Vibe coding started has really been like with the most like just like make cool apps kind of thing. And it's starting to become much more like serious software engineering.</p>
</details>

他认为，未来将更深入地让公司能够更快地发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think that going even deeper to just like making it possible to just move so much faster as a company. Um that's I think where where we're headed. Yep.</p>
</details>

### CodeX 对编程范式的影响

主持人提到 CodeX，听说这有点像是 Greg 的“心血结晶”。在直播中，Greg 曾多次谈到要让事物模块化、文档化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh speaking of codeex, I've heard that you've just it's kind of your baby a little bit. Um and you've started I think on the live stream you were talking a lot about just make things modular and well doumented and all that good stuff.</p>
</details>

主持人问，Greg 认为 CodeX 会如何改变我们编写代码的方式？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like how do you think codeex changes the way that we code?</p>
</details>

Greg 认为，说 CodeX 是他的“心血结晶”有点夸张。他觉得有一个非常出色的团队，他一直在努力支持他们的愿景。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um well I definitely think that that it's an overstatement to say it's it's my baby. like I think that there's um a really incredible team um and and uh that you know I've I've been trying to support them and and and their vision and um</p>
</details>

但 CodeX 的方向对他来说非常引人注目和不可思议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but I think that that the direction is something that is like just so um so compelling and incredible to me.</p>
</details>

他请主持人重复一下问题，主持人再次问 CodeX 如何改变我们编写代码的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um the way that that uh and sorry could you repeat the the how how does codeex change that we the way that we code? I see. Yeah.</p>
</details>

Greg 认为，最有趣的是当你意识到代码库的结构决定了你能从 CodeX 中获得多少价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The thing that has been most interesting to see has been when you realize that the way you structure your codebase determines how much you can get out of codecs, right?</p>
</details>

我们现有的所有代码库都或多或少地与人类的优势相匹配。但如果你转而与模型的优势相匹配，而模型的优势是非常不平衡的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That the if you match the strength of like basically all of our existing code bases are kind of matched to the strengths of humans. But if you match instead to the strengths of models which are sort of very lopsided, right?</p>
</details>

模型能够处理更多样化的事物，但目前还不能像人类那样深入连接深层概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">models are able to handle way more like diversity of stuff but also are not not able to like sort of necessarily connect deep ideas as much as humans are right now.</p>
</details>

所以，你想要做的是创建更小的、经过良好测试的模块，这些模块可以快速运行测试，然后模型会填充细节，并自行运行测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what you kind of want to do is make smaller modules that are well tested that have tests that can be run very quickly um and then fill in the details. the model will just do that right and it'll run the test itself</p>
</details>

这些不同组件之间的连接，也就是架构图，实际上很容易完成。真正困难的往往是填充所有细节。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the connections between these different components kind of the architecture diagram like that's actually pretty easy to do and then it's the like filling out all the details that is often very difficult</p>
</details>

Greg 提到，他所描述的听起来也很像良好的软件工程实践。但有时因为人类能够在大脑中处理更多的概念抽象，我们就不去做这些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and if you if you actually do that you know what I described also sounds a lot like good software engineering practice um but it's just like sometimes because humans are are capable of holding more of this like conceptual abstraction in our head we just don't do it right</p>
</details>

例如，编写这些测试并完善它们需要大量工作。但模型运行这些测试的次数会比你多一百甚至一千倍，所以它会更加重视这些测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that like yeah it's like you know it's a lot of work to write these tests and to you know to flesh them out and that you know the model's going to run like these tests like a hundred times or a thousand times more than you will and so it's going to care like way way more.</p>
</details>

所以在某些方面，他们想要的方向是为更初级的开发者构建代码库，以便最大限度地利用这些模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in some ways that the direction we want to go is build our code bases for more junior developers um in order to actually get the most out of these models.</p>
</details>

Greg 认为，随着模型能力的提升，这种特定的代码库结构是否会保持不变，这将非常有趣。他倾向于认为这是一个很好的想法，因为它再次与人类可维护性的最佳实践相匹配。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, now it'll be very interesting to see as we increase the model capability, does this particular way of structuring code bases remain constant? And I kind of think that it's a pretty good idea because again, it starts to match what you should be doing for for maintainability for humans.</p>
</details>

对他来说，软件工程未来真正令人兴奋的是，我们为了“偷工减料”而放弃的哪些实践，实际上需要重新引入，才能最大限度地发挥系统的作用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but yeah, I think that to me that the really sort of exciting thing to think about for the future of software engineering is what of our practices that we kind of just cut corners for do we actually really need to bring back in order to get the most out of our systems? Yeah.</p>
</details>

主持人问，Greg 能否大致估算一下他们内部通过 CodeX 看到的生产力提升数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, can you put numbers on like ballpark numbers on the amount of productivity you guys are seeing with codecs internally?</p>
</details>

Greg 表示他不知道最新的数据，但他们有两位数的拉取请求（PRs）完全是由 CodeX 编写的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I yeah, I don't know what the latest numbers are. I mean, there's definitely double digit percent of our of our PRs are written low low double digit um written entirely by codecs.</p>
</details>

他觉得这非常酷，但 CodeX 并不是他们内部使用的唯一系统，而且他认为现在仍处于非常非常早期的阶段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and that's super cool to see. Um but it's also like you know that it's not the only system that we use internally and I think that um to me it's it's still in the very very early days.</p>
</details>

外部指标也令人兴奋。例如，在过去一天内，公共 GitHub 仓库中合并了 24,000 个 PR。所以，这一切才刚刚开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um it's been exciting to see some of the external metrics. Um like I think we had 24,000 uh PRs that were merged in like the last day uh in in public GitHub repositories. And so it's just like yeah, this stuff is all just getting started. Yeah, it's doing a lot of work.</p>
</details>

### 训练系统与可靠性：Dylan Patel 的问题

主持人提到了 **Dylan Patel**（Dylan Patel: 半导体行业分析师，以其对 AI 芯片和基础设施的深入分析而闻名）关于规模化和可靠性的嘉宾提问。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh guest question from Dylan Patel on scaling and uh reliability.</p>
</details>

随着他们执行更多耗时更长、利用更多 GPU 的任务，这些任务也变得不可靠，经常失败，这是众所周知的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so as we're doing more tasks that take longer and utilize more GPUs, they're also just unreliable. They fail a lot, right? And and this is just well known.</p>
</details>

这也会导致训练失败。主持人问，当需要训练长周期智能体时，他们如何处理这个问题？因为你不能真正重启一个已经进行到一半、可能具有非确定性的轨迹。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so this causes training to fail as well. So like but like you know you you've mentioned that you can sort of just restart a run and that's okay. like how do you deal with this when you have to train long horizon agents, right? Because you can't really restart something that has a trajectory that's kind of halfway that is maybe nondeterministic.</p>
</details>

Greg 认为，有很多问题是你解决了，然后模型能力更强了，你又不得不重新解决。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I mean, I think that there's a bunch of problems that you kind of solve and then you make the models more capable and then you have to resolve them.</p>
</details>

所以，当**回滚**（rollouts: 在强化学习中，指智能体在环境中执行一系列动作并收集经验的过程）很短，比如 30 秒时，你不太关心这个问题。但如果回滚需要几天，你就真的需要关心了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, yeah, when the the rollouts are short, you know, 30 seconds, you kind of don't care that much about this problem. If they're going to be days now, you really care about this problem. Yep.</p>
</details>

你必须开始考虑如何**快照**（snapshot: 记录系统或数据在某一时刻的状态）状态以及其他类似的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you have to start thinking about how to snapshot state and a bunch of things like that.</p>
</details>

Greg 简短的回答是，在这些训练系统中，你不断攀登一个复杂的阶梯。几年前，他们只关心做好传统的**自由训练**（free training: 指模型在没有特定限制或预设目标的情况下进行训练），这非常容易**检查点**（checkpointable: 指训练过程可以定期保存状态，以便在失败时从最近的检查点恢复）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um the short answer is that I think that there's a this like ladder of complexity that you keep climbing with these training systems and it goes from you know like couple years ago all that we cared about was just doing good oldfashioned free training, right? And that's like very checkpointable.</p>
</details>

即使那样也并非微不足道。如果你从偶尔检查点到每一步都检查点，你就需要非常认真地思考如何避免复制和阻塞等问题。

<details>
<summary>View/Hide Original English</p>
</details>

对于像这些更复杂的 RL 系统，仍然有检查点，例如你可能关心检查点你的缓存，这样就不必重新计算所有东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">then for something like these more complicated RL systems there's still checkpoint in terms of you know maybe you care about uh you know checkpointing your cache so you don't have to recmp compute everything um</p>
</details>

他们系统的优点是，语言模型的状态非常明确，可以存储和处理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the nice thing about our systems is that you know language models are their state is very explicit right and it's something that actually can be stored um something you actually can can handle.</p>
</details>

但如果你连接的工具本身是有状态的，那么这些工具可能无法重启和恢复。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whereas if you have tools that you're hooked up to that are themselves stateful, maybe those are not something you can restart and recover from.</p>
</details>

所以，你需要端到端地考虑整个系统，思考检查点能力是什么样子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I think that that if you consider the whole system end to end, thinking about what checkpoint ability looks like.</p>
</details>

还有一个问题是，也许这根本不重要。也许重启系统，图表上出现一些小波动也没关系，因为这些模型很智能，能够处理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there's also a question of maybe it just doesn't matter, right? Maybe it's fine that you restart the system and you get some little wiggle in your graph, but these models are smart. Yeah. Right. That they can handle it.</p>
</details>

Greg 提到，他们明天将要推出的一项功能是，也许可以接管**虚拟机**（VM: Virtual Machine，虚拟机，通过软件模拟的计算机系统，可以运行操作系统和应用程序）并检查点 VM 状态，然后重启它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, one thing we're looking at tomorrow that's launching is maybe you can sort of take over the VM and checkpoint the VM state and restart it. Yep.</p>
</details>

主持人提到，他们有一个来自巴黎的电话提问。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I think we have a dialin call-in question from Paris. Um, if someone can play the video</p>
</details>

### 未来 AI 基础设施：Jensen Huang 的愿景

**Jensen Huang**（Jensen Huang: 英伟达（NVIDIA）的联合创始人、首席执行官，以其在 GPU 和 AI 领域的贡献而闻名）通过视频提问：“我真希望能亲自到场提问。我的问题是，在这个新世界中，数据中心和 AI 基础设施的工作负载将极其多样化。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, I wish I could be there to ask you in person. One of the questions that I have is in this new world, the work the workloads in the data center in the in the AI infrastructure is going to be incredibly diverse.</p>
</details>

一方面，有进行深度研究、思考、推理、规划并与其他智能体协作的智能体，它们需要大量内存，拥有大上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">on the one hand agents that are doing deep research and they're thinking they're reasoning they're planning and they're working with other agents and they're you know working on a lot of memory they have large context</p>
</details>

另一方面，有些工作负载需要尽可能快地思考。那么，如何创建一个针对具有大量**预填充**（prefill: 在大型语言模型中，指模型处理输入提示词（prompt）的过程，通常涉及并行计算）和大量**解码**（decode: 在大型语言模型中，指模型生成输出（completion）的过程，通常是顺序的）的工作负载进行优化的 AI 基础设施呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">on one hand some of it you also want to think as fast as possible so you know how do you how do you create uh an AI infrastructure that is optimized for workloads that have to that have a lot of prefill a lot of decode a lot of something in between on the one hand</p>
</details>

以及另一方面，Jensen 对多模态视觉和语音 AI 感到非常兴奋，它们本质上是你的 **R2-D2**（R2-D2: 《星球大战》系列中的一个机器人角色，以其智能、多功能和忠诚而闻名），你的伴侣，它们全天候在线，即时可用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and on the other hand uh the type of workloads that I'm super excited about these multimodal vision and speech AIs that are essentially your R2-D2 your companion it's on all the time it's instantly aail available to you</p>
</details>

所以，这两种工作负载，一种是计算密集型且可能耗时很长，需要测试时间扩展等；另一种则要求极低的延迟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so these two workloads one of the one of them super uh compute intensive and take might take a long time and um uh you know test time scaling and all that on the other hand wants to be very low latency</p>
</details>

那么，未来的 AI 基础设施会是什么样子，它既要尽可能灵活，又要尽可能高性能，低延迟，高吞吐量？所有这些都极其复杂。Jensen 问 Greg 是如何思考这个问题的，以及他认为理想的 AI 基础设施会是什么样子的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so what does what does a future AI infrastructure look like that's that's as flexible as possible um as performant as possible low latency high throughput you know all of that uh is just incredibly complex so how how you think through that and and what kind of an AI infrastructure would you would you think uh would be ideal going forward well with lot lots of GPUs of</p>
</details>

主持人总结说，Jensen 想让 Greg 告诉他该建造什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so if I were to summarize, uh, Jensen wants you to tell him what to build.</p>
</details>

主持人问 Greg，他的梦想是什么？同时，也存在两种需求：长计算和实时计算。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What would be your dream? Uh, but also like there's just two needs. There's two kinds of infra. There's there's long compute and there's real time. Now, now, now. Yes. Yes.</p>
</details>

Greg 承认这确实很难。CodeX 的问题令人难以置信。他本身是软件出身，他们以为只是在编写 AGI 的软件，然后才意识到必须进行大规模的基础设施项目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, it's it it is hard, right? Because I mean, this codees problem, it is a mind-boggling one. And so, you know, I'm a software person by by background and that, you know, we think we're we're off here just like writing the software for AGI and then you realize you have to do like these massive infrastructure projects, right?</p>
</details>

这并非他们最初的设想，但最终却很有道理。如果他们要构建一些能改变世界的东西，那么它可能需要人类有史以来创造的最大物理机器，这似乎是合理的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like that's not how we set out, but it actually kind of makes sense in the end, right? If we're going to build something that's going to be transformative to the world, like yeah, probably it's going to require some some, you know, maybe the biggest physical machines that humanity has ever created, like kind of type checks.</p>
</details>

Greg 认为有两个答案。天真的答案是：“好吧，你需要两种加速器。一种是真正计算密集型的，另一种是针对延迟优化的。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so I think that the that there's two answers. Like the naive answer is, okay, yeah, you want two kinds of accelerators. You want one that's really computed, one that's very latency optimized.</p>
</details>

在其中一种上投入大量的**高带宽内存**（HBM: High Bandwidth Memory，高带宽内存，一种高性能 RAM 接口，用于 3D 堆叠 DRAM 芯片，提供比传统 DRAM 更高的带宽和更低的功耗），在另一种上投入大量的计算能力，就万事大吉了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, throw like tons of of HBM on one of those and, you know, ton tons of tons of comput on the other. You're all good.</p>
</details>

但真正困难的是预测比例。现在你又有了需要考虑的新问题。如果平衡错了，你的整个机群就会变得毫无用处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, now one thing that's really difficult is predicting the ratios, right? Now you have a new problem you have to think about. And if you get the balance wrong, suddenly you're going to have a whole part of your fleet that's just useless. Yep. And that sounds really scary.</p>
</details>

Greg 认为，这个领域没有硬性要求，也没有限制，只有人们正在优化的**线性规划**（linear program: 一种数学优化技术，用于在给定约束条件下最大化或最小化线性目标函数）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, now the thing is because the way that these things work is there's no requirements in this field. There's no constraints in this field. there's just sort of this linear program that people are optimizing</p>
</details>

所以，如果你给工程师一些资源失衡的情况，他们会想办法利用它，即使可能付出很大的代价。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so yeah if you give our engineers some sort of misbalance of resources like we will find ways to utilize it maybe at great pain right</p>
</details>

一个例子是，整个领域都转向了**专家混合模型**（mixture of experts: 一种机器学习技术，通过结合多个“专家”模型的预测来提高性能，每个专家模型可能专注于解决问题的一个子集）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but an example of this is you know you've seen the whole field move towards mixture of experts and to some extent what mixture of experts is is saying</p>
</details>

专家混合模型在某种程度上就是说：“我们有很多闲置的 **DRAM**（DRAM: Dynamic Random-Access Memory，动态随机存取存储器，一种常见的计算机内存类型），因为平衡错了，所以没有被使用。好吧，我们会用参数填满它，实际上不会增加任何计算成本，只是从中获得额外的机器学习计算效率。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">well we have all this DRAM sitting around that isn't being used for anything because the balance is wrong fine we'll fill up with parameters and we'll actually not cost any compute and we'll just get extra ML comput efficiency out of it like boom there you go</p>
</details>

所以，Greg 认为，即使平衡错了，也并非世界末日。加速器的同质性是一个很好的默认起点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so I think that there is some of that where if you get the balance wrong it's actually not the end of the world um homogeneity of accelerators is like a very nice default to start um</p>
</details>

但最终使用专用加速器也并非完全疯狂。随着他们进入这些基础设施资本支出变得令人咋舌的世界，开始对某些工作负载进行超优化是相当合理的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but I think that that that ending up with purpose-built accelerators is also not super crazy and the more that we move to these world these worlds where it's the just dollars of capex for this infrastructure starts to become so eye watering then starting to hyper optimize for some of these workloads is pretty reasonable</p>
</details>

但 Greg 认为，目前还没有定论，因为研究进展太快，在某种程度上主导着其他一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um but I think the jury a little bit out because if you think about it that the research is just moving so fast and to some extent that dominates everything else.</p>
</details>

### GPT-6 的瓶颈与基础研究的回归

主持人说，他本来没打算问这个问题，但 Greg 提到了研究。主持人问，能否对 GPT-6 当前的规模化瓶颈进行排名？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um okay I wasn't planning to ask this but you just brought up the research stuff. Can you rank current scaling bottlenecks for GBT6?</p>
</details>

Greg 回答：“计算、数据、算法、电力、金钱。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ah compute data algorithms power money. Yes.</p>
</details>

主持人追问，哪一个是一号和二号瓶颈？哪一个是最受限制的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean which one's which one's like the you know number one and two? Which one are you are you like most rate limited on?</p>
</details>

Greg 认为，他们正处在一个基础研究回归的世界，这非常棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean look I think we are in a world where basic research is back. I think that is really amazing, right?</p>
</details>

他提到，曾有一段时间，感觉就像：“好吧，我们有了一个 Transformer，那就把它扩展吧。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There was this period. Yeah, basic research. Um there was a period where it felt like all right, we got a transformer, let's just scale it, you know,</p>
</details>

Greg 觉得这些问题非常令人兴奋，他很喜欢解决那些定义明确的难题，只是为了提高数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and um I find those problems very exciting. I have a lot of fun just like you got a very well- definfined hard problem. You want to just move the number up and to the right.</p>
</details>

但从智力上讲，这在某些方面有点不尽如人意。感觉生活中还有比仅仅“**Attention Is All You Need**”（Attention Is All You Need: 谷歌团队于 2017 年发表的论文，提出了 Transformer 架构，彻底改变了自然语言处理领域）这篇论文的原始形式更多的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but it also is a little intellectually dissatisfying in some ways. It's like that it feels like there's more to life than just, you know, attention is all you need paper, you know, in in in vanilla form.</p>
</details>

Greg 认为，他们现在已经达到了一个规模，他们已经将计算和数据推到了如此远的程度，以至于算法再次变得同样重要，甚至几乎成为未来进步的“长杆”（long pole: 指在项目或系统中，限制整体进展或性能的关键瓶颈）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so I think that what we've started to see is that we're operating at a scale now um where we've pushed the compute, we've pushed the data so far that you can start to get you start to have algorithms is like again just back as as a important and really almost a long pole um in in terms of future progress.</p>
</details>

所以，所有这些都是帐篷的重要支柱。在任何一天，可能看起来会有点不平衡。但从根本上说，你需要保持这些的平衡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so um all of these things they're all they're all important poles of the tent. And you know on any one day uh it might look a little lopsided one way or another. Um but yeah, fundamentally I think it's like you want to keep these all in balance.</p>
</details>

Greg 觉得看到像 RL 范式这样的事物非常令人兴奋。这是他们多年来非常刻意地投入的领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and it's really exciting to see things like like the RL paradigm. That's something that we invested in very deliberately uh for for for multiple years.</p>
</details>

他回忆说，当他们训练 GPT-4 时，第一次与 GPT-4 对话时，他们会想：“这是 AGI 吗？”显然它不是 AGI，但很难说出为什么不是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was like when we trained GPD4 um the very first thing like I think it was really interesting was when you we talked to GPD4 for the first time we were like is this an AGI? Like it's clearly not an AGI but it's really hard to say why right is like there's something about it.</p>
</details>

它非常流畅和顺滑，但不知何故会“脱轨”。他们当时想：“好吧，我们必须解决那个可靠性问题。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's so fluid and smooth but but somehow it falls off the rails. is like, well, we got to solve that reliability problem.</p>
</details>

Greg 认为，GPT-4 从未真正体验过世界，就像一个只读过所有书，或者观察过世界，但从未亲身经历过的人。就像隔着玻璃观察世界一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you're like, well, it has never actually experienced the world, right? It's like someone who's just read all the books or, you know, sort of read, you know, sort of observed the world, has observed the world, um, and, uh, never experienced it itself, right? It's like, you know, sort of just, you know, watching it through through a pane of glass or something.</p>
</details>

对他来说，这让他们觉得：“好吧，显然我们需要一个不同的范式。”他们不断推进，直到它真正奏效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And, uh, and and that to me is I, you know, was something we were just like, okay, clearly we need a different paradigm. And we just pushed on it until we made it really work.</p>
</details>

Greg 认为，今天仍然如此，还有其他非常明显的缺失能力，他们需要继续推进，最终会实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think that that remains true today that there's other very clear missing capabilities um that we just need to keep pushing and we will we will get there. Awesome.</p>
</details>

### AI 赋能的未来经济：Jensen Huang 的第二个问题

主持人说，他们请 Jensen 提一个问题，但他超额完成了任务，发来了两个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um broadening out just from from just broad opening eye things. Um well honestly I'm just going to let So we asked Jensen for one question. He's an overachiever so he sent in two. So let's play a second video.</p>
</details>

Jensen Huang 的第二个问题是：“在座的 AI 原生工程师可能在想，未来几年 OpenAI 将拥有 AGI，他们将在 OpenAI 的 AGI 之上构建特定领域的智能体。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI native engineers in the audience they are probably thinking um in the coming years your openi will have agis and uh they will be building domain specific agents on top of the agis from openi</p>
</details>

Jensen 关心的是，当 OpenAI 的 AGI 变得更加强大时，他们的开发工作流程将如何改变？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so some of the some of the questions that I would have on my mind would be uh how do you think their development workflow would change uh as uh openai's agis become much more capable</p>
</details>

他们仍然会有**管道**（plumbing workflows: 指连接不同系统或组件以实现数据流和功能集成的底层工作流程）和**飞轮**（flywheels: 指通过一系列相互关联的行动，创造出自我增强的良性循环）来创建特定领域的智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and yet they would still have um plumbing workflows uh pipelines that they would create flywheels that they would create for their domain specific uh agents</p>
</details>

这些智能体当然能够推理、规划、使用工具，拥有短期和长期记忆，它们将是非常棒的智能体。但 Jensen 问，未来几年开发过程将如何改变？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These agents would of course be able to reason, plan, use tools, have memory, short-term, long-term memory and um and they'll be amazing amazing agents, but how does it change uh the development process in the coming years?</p>
</details>

Greg 认为这是一个非常引人入胜的问题。他觉得你可以找到各种强烈持有、相互矛盾的观点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think that this is a really fascinating question, right? I think you can find a wide spectrum of very strongly held opinion that is all mutually contradictory.</p>
</details>

Greg 的观点是，首先，一切皆有可能。也许我们会达到一个 AI 如此强大的世界，以至于它们能编写所有代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I think my perspective is that first of all, it's all on the table, right? Maybe we reach a world where it's just like the AIs are so capable um that you know we all you know just let let them write all the code.</p>
</details>

也许会有一个“天上只有一个 AI”的世界。也许你会有许多特定领域的智能体，需要大量具体工作才能实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe there's a world where that you have like one AI in the sky. Maybe it's that you actually have a bunch of domain specific agents that require a bunch of of specific work in order to make that make it happen.</p>
</details>

Greg 认为，证据一直在向“多种不同模型的大杂烩”方向倾斜。他觉得这实际上非常令人兴奋，因为即使从系统角度来看，也存在不同的推理成本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think the evidence has really been shifting towards this like menagery of different models. Um and I think that's that's actually really exciting right that there's different inference costs just even from a systems perspective.</p>
</details>

存在不同的权衡，例如**知识蒸馏**（distillation: 一种模型压缩技术，通过训练一个小型模型（学生模型）来模仿一个大型模型（教师模型）的行为，从而在保持性能的同时减小模型大小）效果很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um that there's different trade-offs like distillation works so well.</p>
</details>

所以，能够使用其他模型的模型实际上具有很大的力量。Greg 认为，这将开启大量的机会，因为他们正在走向一个经济从根本上由 AI 驱动的世界。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so there's actually a lot of power to be had by models that are actually able to use other models. And so I think that that that is going to open up just a ton of opportunity because you know we're heading to a world where the economy is fundamentally powered by AI.</p>
</details>

他们还没有达到那个阶段，但已经近在眼前了。主持人补充说，AI 正在处理所有这些工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're not there yet but you can see it right on the horizon. They're working on it all. Exactly.</p>
</details>

Greg 认为，这正是现场的人正在构建的东西。经济是一个非常庞大的事物，具有多样性，而且它也不是静态的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean that's what people in this room are building that that is what you are doing. And the the economy is a very big thing. there's a lot of diversity in it and it's also not static right</p>
</details>

他认为，当人们思考 AI 能为我们做什么时，很容易只关注我们现在在做什么，以及 AI 如何融入其中，以及人类与 AI 的百分比。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that I think when people think about what AI can do for us um it's very easy to only look at well what are we doing now and how does AI slot in and you know the percentage of human versus AI.</p>
</details>

但这并不是重点。重点是如何实现 10 倍的活动量，10 倍的经济产出，为每个人带来 10 倍的利益。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but that's not the point right the point is how do we get 10x more activity 10x more economic output 10x more benefit to everyone um</p>
</details>

Greg 认为，他们正在走向一个模型能力更强、基础技术更好，并且有更多事情想用它来做，而且进入门槛比以往任何时候都低的世界。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I think that the direction we're heading is one where the models will get much more capable there'll be much better fundamental technology and there's just going to be like way more things we want to do with it and the barrier to entry will be lower than ever.</p>
</details>

所以，像医疗保健这样的领域，你不能只是简单地做，它需要责任感去思考如何正确地做。像教育这样的领域，有多个利益相关者，例如家长、老师、学生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so things like healthcare um that you can't just you know the the it requires responsibility to go in and think about how to do it right. Things like education where there's multiple stakeholders you know the parent the teacher the student um</p>
</details>

每一个领域都需要领域专业知识，需要仔细思考，需要大量工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">each of these requires domain expertise requires careful thought requires a lot of work.</p>
</details>

Greg 认为，未来会有如此多的机会供人们去创造。他很高兴看到现场的每一个人，因为这正是正确的能量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so I think that there is going to be just like so much opportunity for people to build. Um, and so I'm just so excited to see everyone in this room because that's the right kind of energy.</p>
</details>

主持人感谢 Greg 的鼓励和启发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you for encouraging us and being an inspiration. Thank you so much. Great everybody. Thank you.</p>
</details>