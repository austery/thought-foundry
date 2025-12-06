---
author: The Pragmatic Engineer
date: '2025-09-24'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=bM0Wq7aLd5w
speaker: The Pragmatic Engineer
tags:
  - high-growth-startups
  - hyperscaling
  - engineering-culture
  - personal-productivity
  - career-development
title: 从 Uber 早期工程师到 CloudKitchens：在高增长科技公司脱颖而出的战术与心法
summary: 前 Uber 20号工程师 Charles-Axel Dein 分享了他在 Uber 和 CloudKitchens 等高增长创业公司的宝贵经验。他深入探讨了“超高速扩张”（hyperscaling）时期的混乱与机遇，揭示了软件工程师在这种环境下脱颖而出的关键特质，如“极端所有权”和高效的项目领导力。Charles 还分享了独特的个人生产力技巧，例如使用抽认卡记忆架构模式，并就 AI 如何改变软件工程、招聘策略以及职业发展提出了深刻见解。
insight: ''
draft: true
series: ''
category: career
area: personal-systems
project:
  - us-analysis
  - personal-growth-lab
  - systems-thinking
people:
  - Charles-Axel Dein
  - Travis Kalanick
  - Thuan Pham
  - Atul Gawande
  - Martin Fowler
  - John Ciara
  - Dan Heller
  - Bjarne Stroustrup
  - David Allen
companies_orgs:
  - Uber
  - CloudKitchens
  - GitHub
  - Statsig
  - Linear
  - Airbnb
  - Coinbase
  - Ramp
  - Clay
  - Notion
  - Brex
  - Atlassian
  - OpenAI
  - Meta
  - Facebook
  - Valve
  - Google
  - Skype
products_models:
  - Google Wallet
  - Google Pay
  - iOS
  - Android
  - Windows Phone
  - Python
  - Java
  - C#
  - NodeJS
  - Go
  - C++
  - TypeScript
  - Clojure
  - Rust
  - Lisp
  - Anki
  - Things
  - Paytm
  - Jump Bikes
media_books:
  - Professional Programming
  - Getting Things Done
  - 'Complications: A Surgeon''s Notes on an Imperfect Science'
  - The Linux Programming Interface
status: evergreen
---
### 引言：在高增长公司中茁壮成长

**Gergely:** 作为一名软件工程师，在一家快速发展的公司里茁壮成长需要具备哪些要素？Charles-Axel Dein 是 Uber 的第 20 号工程师，他亲眼见证了公司在短短 5 年内从 20 名工程师发展到超过 2000 人。他还碰巧在 Uber 雇用了我，并是我在该公司的第一位经理。如今，Charles 在 Cloud Kitchens 工作，并维护着一个广受欢迎的 GitHub 仓库——“Professional Programming”——这个项目他已经坚持了 15 年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What does it take to thrive at a fast growing company as a software engineer? Charles-Axel Dein was engineer number 20 at Uber and saw firsthand as the company grew from 20 engineers to more than 2,000 in just 5 years. He also happened to hire me at Uber and was my first manager at the company. Today, Charles works at Cloud Kitchens and has been maintaining the wildly popular GitHub repository, Professional Programming, for 15 years.</p>
</details>

**Gergely:** 在本期节目中，我们将深入探讨：在像 Uber 这样的初创公司高速发展时期工作是怎样的体验；如何成为一名出色的软件工程师，包括高效领导项目的技巧，以及“推动事务，提升他人”心态的重要性；Charles 的个人生产力技巧，包括他为什么使用抽认卡来记忆架构模式和数据科学方法论；Charles 如何看待 AI 将改变软件工程，以及为什么数据迁移是 Cloud Kitchens 迄今为止为 AI 编码工具找到的最佳用例。如果你正在一家快节奏的初创公司工作，或者计划加入一家，并且正在寻找在这种环境中表现出色的战术性建议，那么这期节目就是为你准备的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this episode, we go into what it's like to work inside a rapid growth startup like Uber during its high growth times, how to be a standout software engineer, including tips on how to lead projects efficiently, and the importance of the "shift stuff and lift people around you" mindset. Charles's personal productivity tips, including why he uses flash cards to memorize things like architecture patterns and data science methodologies. How Charles thinks AI will change software engineering and why migrations is the best use case Cloud Kitchens has found so far for AI coding tools. If you're working at a fast-paced startup or plan on working at one and are looking for tactical advice on how to do well in such an environment, this episode is for you.</p>
</details>

### 加入 Uber：混乱而激动人心的早期岁月

**Gergely:** Charles，欢迎来到播客。我们再次像这样坐在一起感觉真好。不过这不是我们第一次这样交流，上一次情况要紧张得多。那是在 Uber 的一次面试，你是招聘经理，我记得你是我一系列面试中的最后一关。我就是这样加入公司，我们也是这样开始共事的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, Charles, welcome to the podcast. It is so nice to be back. This is not the first time we're sitting in a situation like this. The last time was a bit more stressful; it was an interview at Uber. You were the hiring manager and I think you were the final interview in a series of interviews, and that's how I joined. That's how we started to work together.</p>
</details>

**Charles:** 是的。实际上，在你加入之前，我不知道你是否还记得，我给你打了个电话，问你是否可以更换技术栈。我记得你当时是被聘为后端工程师，但我问你是否可以做 iOS 开发，因为那是我们当时急需的岗位，你回答说：“好，没问题。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And actually right before you joined, I don't know if you remember that, but I called you to ask you if you could change stack. I think you were hired as a back end engineer and I asked you to do iOS because this is where we needed you, and you said, "Yeah, let's do it."</p>
</details>

**Gergely:** 当时是 Android。那是一次非常有趣的面试经历。我当时在做 iOS 开发，之前做过 Windows Phone。我不知道你是否清楚，但我的面试被搞砸了。我以为我会参加一个 iOS 的面试，结果他们把我安排到了后端的面试流程。我几年前做过后端，所以我想，好吧，那就试试吧。出乎意料的是，我表现得还不错。然后我本应以 Python 工程师的身份加入，但我之前没用过 Python。不过 Python 很容易学，所以我就想，好吧，我来学。我买了一本 Python 101 的书。然后你给我发邮件问我能不能做 Android 开发。当时 Uber 这种混乱是常态吗？或者说是什么原因？我加入时感觉一切都非常忙乱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was Android. It was a very interesting interview situation. I was doing iOS development back then. I did Windows phone before and I don't know if you know but my interview got messed up. I thought I would be doing an iOS interview and then they put me on a backend track. I did backend before, a few years before, so I was like, "Alright, let's do it." And apparently I did good enough on it, which was surprising. And then I was supposed to join as a Python engineer, and I hadn't done Python before, but obviously Python you can learn easily. I was like, "Okay, let me learn it." So I got a Python book, you know, Python 101, and then you emailed me saying, "Could you do Android?" What was typical of Uber back then to have this kind of hectic situation? What was the reason? It all felt very hectic when I joined.</p>
</details>

**Charles:** 是的，当时确实非常忙乱。有趣的是，当你身处那种忙乱时期，你会觉得这不正常，更希望一切能平静下来。但当一切真的变得安静时，你又会怀念那段忙碌的时光。所以那确实是忙乱的。在招聘方面，这还不是最令人惊讶的事情。但那是一种好的忙乱，对吧？公司在飞速发展，所以你必须要求员工保持灵活性。我想这正是人们在初创公司所寻求的，对吧？他们希望看到非常与众不同的事物，接触到各种各样的事情。而你所经历的，面试一个技术栈，背景是另一个技术栈，然后被录用，又在第一天被问及能否换到 Android，这确实是相当忙乱的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it was definitely very hectic. And it's interesting because when you're in those hectic times, you feel like this is not normal and I would much prefer a time where it's much more quiet. But then when it gets quieter, you miss the hectic time. So it was definitely that hectic. It's not the most surprising thing that happened when it comes to hiring. But it was a good hectic, right? You're growing super fast, so you have to ask people to be flexible. And I think that's what people look for in a startup, right? They want to see things that are very different, where they get exposed to a lot of different things. And that's definitely what you got with a panel for one stack, a background for another stack, and then you get hired and asked on your first day—I think it was close to your first day—to do Android. It was pretty hectic.</p>
</details>

**Gergely:** 你是什么时候加入 Uber 的？你加入得很早。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And at Uber, when did you join? You were very early.</p>
</details>

**Charles:** 是的，我是在 2012 年加入的，多亏了第一位司机运营负责人，我之前和他一起工作过。当时，团队大约有 20 名工程师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So I joined in 2012 thanks to the first driver operation person who I was working with before. And at the time, yeah, the team was about 20 engineers.</p>
</details>

**Gergely:** 大概是第 20 号工程师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like engineer number 20-ish.</p>
</details>

**Charles:** 差不多是这样。所以那段经历绝对超级有趣，因为当时没有路线图，流程也几乎没有。你基本上是边做边学，发现很多东西。还有什么比这更好的学习方式呢？在初创公司，事情非常没有条理，你会接触到大量问题，你得自己创造很多东西，本质上就是通过实践来学习。那是一段真正了不起的经历。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, something like that. So definitely super interesting because there was no road map, very little process. So you're definitely discovering a lot of things as you go. And what better way to learn, right? When you are at a startup, things are very unstructured and you get exposed to a lot of problems and you make a lot of things up. You learn by doing, essentially. And it was a truly amazing experience.</p>
</details>

### 责任之重：在 Uber 感受真实世界的影响

**Gergely:** 你是以软件工程师的身份加入，然后转为工程管理岗位的，对吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you joined as a software engineer and then you made your way into engineering management, right?</p>
</details>

**Charles:** 是的，没错。一年后，当时的 CTO Thuan Pham 让我接手管理工作。那是我职业生涯中最好的决定，是一段非常有价值的经历。从那以后，我在软件工程师和工程经理之间来回转换。我真的很欣赏同时做这两件事。我相信真正亲力亲为的工程经理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes, that's right. One year later, Thuan Pham, who was the CTO at the time, asked me to step in. Best career decision ever. It was a really rewarding experience. And then since then, I've moved back and forth between software engineer and engineering manager. And I really appreciate doing both. I believe in really hands-on engineering managers.</p>
</details>

**Gergely:** 这么早加入，你肯定和 Uber 的联合创始人 Travis Kalanick 一起工作过吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so by being that early, you must have worked with Travis Kalanick, the co-founder of Uber, right?</p>
</details>

**Charles:** 是的。我至今还保留着一些相当不错的邮件，是关于我们搞砸了某些功能时的交流。在 Uber 有趣的一点是，我们构建的产品是帮助人们谋生的。所以当发生事故时，不仅仅是一个功能坏了，也意味着有人没有按时拿到报酬。我记得有一次，司机的支付流程失败了，而且正好在圣诞节前。我们收到了一封转发来的邮件，来自一位无法为孩子购买礼物的司机。我认为这显示了作为一名软件工程师，当你负责生产环境中的东西时所承担的责任。这不仅仅是功能，不仅仅是代码，还可能关系到人们的生计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes. I actually still have some pretty good emails from when we broke features. What was interesting at Uber is that we built a product that helps people make a living. And so when there's an incident, it's not only a feature that is broken, it's also people who were not getting paid on time. And I remember this event where the payment process for drivers failed, and this was right before Christmas. So we got forwarded an email from a driver who couldn't purchase gifts for their kids. And I think that shows the responsibility that you have as a software engineer when you own things in production. It's not only features, it's not only code, it's also potentially people's livelihood.</p>
</details>

**Gergely:** 我记得我在 Uber 面试时，你也跟我说过类似的话。那是我第一次停下来思考，哦，我竟然可以从事对现实世界有实际影响的工作，人们依赖它，它很重要。我确实记得，每当我们进行事故复盘时，不仅仅是计算我们损失了多少广告收入——在某些公司这确实是重点——而是有多少人的出行受到了影响。而在那背后，有故事，有沮ر。我自己也经历过，比如司机取消订单，我赶时间，或者堵在路上要迟到了，这本身就足够令人沮丧了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I remember when I interviewed at Uber, you told me something similar, and that was the first time I kind of paused and thought, "Oh, I could actually work on something that has real-world implications in terms of people relying on it and it being important." And I do remember that whenever we did an incident review, it wasn't just about how many ad dollars we lost—which, at some places, that's what it is—but it was about how many people's rides could not happen. And behind that, there's a story, there's frustration. I've had it before when a driver cancels, for example, and I'm in a hurry or stuck in a traffic jam and I'm late, and that itself is frustrating enough.</p>
</details>

**Charles:** 是的。我现在在 Cloud Kitchens 工作，这是另一家在物理世界中运作的初创公司。如今我们谈论很多关于 AI 初创公司的话题，这无疑是一个非常重要的领域。但与此同时，所有那些真正在物理世界中改变事物、对人们生活产生影响的初创公司，我认为人们也应该考虑加入它们。因为你能看到自己工作的成果。这是其一。其次，物理世界是永无止境的复杂性和挑战的源泉。例如，在送餐方面，跨越空间和时间的优化问题，从技术、算法、系统和延迟的角度来看都非常有趣。你有一个时间预算，它不是无限的，因为食物需要被送达。所以接触物理世界真的很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So right now I'm working at Cloud Kitchens, which is another startup that works in the physical world. And today we speak a lot about AI startups, and it's evidently a very important sector. But at the same time, all of those startups that actually change things in the physical world and have an impact on people's lives, I think people should also consider joining them because you can see the result of your work. So that's one. The physical world is a source of never-ending complexity and challenges. For instance, when it comes to delivering food, you have the optimization across space and time that is really interesting from a technical standpoint, from an algorithm standpoint, from a system standpoint, from a latency standpoint. You have a budget of time that is not infinite because the food needs to get delivered. So it's really interesting to get exposed to the physical world.</p>
</details>

### 从超高速扩张到谦逊：后零利率时代的创业公司

**Gergely:** Cloud Kitchens 的情况与 Uber 有何异同？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So at Cloud Kitchens, how are things similar or different to Uber?</p>
</details>

**Charles:** 你说得对，**超高速扩张** (Hyperscaling: 指公司在极短时间内经历指数级增长的阶段，通常伴随着大规模招聘和市场扩张) 的创业时代可能已经过去了。我想你写过很多关于这个话题的文章，关于**零利率政策** (Zero Interest Rate Policy, ZIRP: 指中央银行将基准利率设定在接近零的水平，以刺激经济增长) 的终结。这意味着那种增长超快、招聘极快的超高速扩张创业模式可能已经成为过去，而且这可能是一件好事。我认为我们在 Cloud Kitchens 做的不同之处在于，我们的团队规模要小得多，也更专注。你说得对，看到现在行业多了一些谦逊，市场上流动的资金也少了，这可能会带来更好的决策，这真的很有趣。我想在 Uber 的那个时代，我们在招聘方式、团队建设方式、项目启动方式上可能存在很多浪费。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're right, the time of hyperscale startups is probably behind us. I think you did a lot of articles on this, the end of the zero interest rate policy. What this means is that the model of this hyperscale startup that grows super fast and hires extremely fast is probably behind us, and it's probably a good thing. I think the thing we do differently at Cloud Kitchens is we're much smaller in terms of team size and much more focused. And yeah, you're right, it's really interesting to see that there's a bit more humility, there's less money floating around, which leads to probably better decisions. I think at the time of Uber, there was probably a lot of waste in the way we hired, the way we built teams, the way we started projects.</p>
</details>

**Gergely:** 我确实认为超高速扩张的时代已经过去了，因为曾有过一个特殊时期，市场上有如此多的资金，而 Uber 非常擅长融资。他们为一个实体产品筹集了数十亿美元，每一轮融资，估值都在不断攀升。我们现在在 AI 领域也看到了类似的情况，但它并不涉及实体世界。当然，你可以说 GPU 是实体，但我感觉那有点不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I do think hyperscaling is behind us because there was this special time where there was so much money on the market and Uber was so good at raising money. You know, they raised billions for a physical product. For every single round, their valuations kept going higher and higher. We are seeing something similar right now with AI, but it's not in the physical world. Well, you can argue GPUs are, but I feel that's a little bit different.</p>
</details>

### 混乱内部：超高速扩张的真实感受

**Gergely:** 让我们谈谈身处其中的感觉。因为我记得我加入时，情况非常疯狂。我最早的疯狂记忆之一是，当我成为一名工程经理时，我问你，当时我是见习经理，你是我的经理，我问你人员规划是怎么做的。你告诉我，理论上人员规划应该是我们制定计划，提出需求，然后执行。但你说：“实际上，你只管不停地招聘，当你达到上限时，你就会得到更多名额，因为名额就像从一个黑匣子里冒出来一样。一直都是这样。”我当时就想……然后你说：“别担心，这不合逻辑。只管招人就行了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's talk about what it was like to be inside, because I remember when I joined, it was crazy. And one of my first memories of how crazy it was is when I became an engineering manager, I asked you—I was an apprentice manager and you were my manager—and I asked you how headcount planning works. You told me it's like, headcount planning should work by us making a plan, making an ask, and doing it. But in reality, you keep hiring and when you hit your limit, you get more headcount because it just comes out of this black box and more headcount comes out of it. It's always been like this. And I was like... and you were like, "Don't worry, it doesn't make sense. Just keep hiring."</p>
</details>

**Charles:** 是的，直到它变得合理为止，对吧？很明显，当时可能缺乏财务上的专业性和对公司资源的审慎使用。但正如你所描述的，随着零利率时代的结束，现在可能更多的是由稳健的财务原则来驱动人员规划了。但回到超高速扩张的话题，那真的是一片混乱。但那是好的混乱，对吧？在混乱中，你会接触到许多问题。如果你充满好奇心——我认为这是你想成长所必须具备的关键品质——那么你就会同时接触到如此多的问题，这意味着你必须非常非常快地熟悉这些问题，然后你就能学到东西。因为最好的学习方式就是尝试某件事，得到反馈，然后以持续改进的心态不断迭代。所以那段经历真的非常迷人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Until it makes sense, right? And yeah, clearly there was probably a lack of financial professionalism and being diligent with the company's resources. But I think now, as you've described, with the end of zero interest rates, it's probably much more sound financial principles driving the headcount planning. But yeah, to come back to hyperscale, it's really chaos. That's what it is. But good chaos, right? Chaos where you get exposed to many problems. And if you're curious, which I think is a key quality to have if you want to grow, then you get exposed to so many problems at the same time, which means that you have to ramp up on those problems really, really fast. And you get to learn because the best way to learn is to try something, get feedback, and then keep on iterating with a continuous improvement mindset. So that was really fascinating.</p>
</details>

**Gergely:** 你能描述一下你所看到的超高速扩张在日常工作中具体意味着什么吗？以及后来它是如何缓和下来的？我觉得很多人没有经历过，也可能不会再经历。所以我们来描述一下我们在内部看到的情况是很有意义的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Can you explain what you saw, how hyperscale actually meant in terms of the day-to-day, and then how it later eased into what a normal thing is? Because I feel a lot of people have not seen it. They will probably not see it. So it's good for us to describe what we saw inside.</p>
</details>

**Charles:** 你还记得吗？我不想说那是永无止境的事故流，但确实有很多事故，对吧？很多事故让你觉得你只是在处理事故产生的直接行动项，但没有时间去真正修复根本的架构根源、复杂性或其他一些问题。我会说，是的，事故绝对是家常便饭，而且待命（on-call）糟透了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would say you remember it, right? It's I don't want to say a never-ending stream of incidents, but a lot of incidents, right? A lot of incidents where you feel like you're covering the immediate action items that result from the incident, but you don't have time to actually fix the fundamental architectural root cause complexity or some of the things. I would say yeah, incidents definitely, and on-call was terrible.</p>
</details>

**Gergely:** 我记得当时我们充满了热情。我仍然在回想我们是如何在如此糟糕的待命情况下坚持下来的。我们的待命糟透了，几乎每天半夜都会被叫醒，我们只是试图修复，但都只是权宜之计。但我记得，因为有很多新人加入，他们都非常兴奋，因为从外部看，这家公司非常有吸引力。他们带来了巨大的能量，而这种能量确实持续了四到六个月。我们有一股源源不断的新人流，就在你感到疲惫的时候，有人会说：“哦，太酷了，我们来解决这个问题吧！” 当时有一种“让我们解决它”的心态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I remember that we had a lot of enthusiasm through the door. I still think back how we could manage with so much. Our on-call was terrible, like we were waking up in the middle of the night almost every night. And we just tried to fix it, but it was just patches. But I remember that because a lot of new people were joining and people were very excited because from the outside the company was very attractive. They brought so much energy, and that energy definitely lasted for a good four to six months. And we had a never-ending stream of people who, just as you were kind of getting tired, someone would be like, "Oh cool, let's do this, let's fix it." And there was a mentality of let's fix this.</p>
</details>

**Charles:** 事故真的是了解你架构缺陷的最好方式，对吧？你可以看纸上的架构图，然后说，好吧，这个组件可能有问题。但真正了解瓶颈的最好方法是看什么东西会坏掉。尤其是在 2012 年和 2013 年，每个周五晚上我准备回家时，总会有东西出故障，然后就是救火模式。就是这样你才学到，哦，Redis 在那种情况下会崩溃，哦，Postgres 在那种情况下会崩溃，哦，我们这里的这个队列没有正确配置维度，或者我们有这个实例……当时自动扩缩（autoscaling）还不是很普及。所以，这是一种了解系统效率的非常有趣的好方法，直到今天仍然如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, the incident is really the best way to learn about your architecture deficiencies, right? You can look at the architecture on paper and you can see, okay, this component is probably a problem. But the best thing really to know the bottlenecks is to see what breaks. And especially in 2012 and 2013, every Friday evening I would prepare to come back home and then something would break and then it would be firefighting mode. And this is how you learn that, oh, Redis breaks after that, and oh, Postgres breaks after that, and oh, we have this queue here that is not dimensioned correctly, or we have this instance... and at the time, yeah, autoscaling wasn't really a thing. So really interesting, a good way to learn essentially about your system's efficiency, still to this day, right? That's a great way.</p>
</details>

### 从失败中学习：事故与系统稳定性

**Gergely:** 我不确定这是否与超高速扩张有关，但我们有一条规定，当你部署一个看起来是中等规模变化的系统时，要去 Slack 或聊天频道通知大家你正在这么做。我想我们已经习惯了这可能会导致问题，所以只是提醒一下，如果大家看到有什么不对劲，就告诉我们。那时候我们没有很好的可观察性，事实上，我们不得不自己构建可观察性系统，没有可以引入的供应商。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm not sure if it had to do with hyperscaling or not, but we had this rule that when you are deploying a system that seems like a medium-sized change, go to the Slack channel or the chat channel and let people know that you're doing it. Because I think we were kind of used to this could cause issues, so it's just giving a heads up that if you see something going wrong, just let us know. Again, back then we didn't have that good observability. In fact, we had to build our own observability; there were no vendors that we could onboard.</p>
</details>

**Charles:** 回到事故和部署前需要通知大家这件事，我认为最根本的改进方法是将发布与部署解耦。首先部署你的代码，它被**功能开关** (Feature Flag: 一种允许开发人员在不部署新代码的情况下，远程开启或关闭特定功能的机制) 隐藏起来，所以什么都不会发生。然后你只为自己的用户打开功能开关进行测试，之后再逐步推广。这种非常简单的方法在提供稳定性方面效果显著。因为这样你就能养成部署绝不破坏任何东西的习惯。你先为自己的用户发布和测试，然后因为是你自己打开功能开关，你大概会和产品经理一起跟进并监控这个功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Coming back to the incidents and the fact that you had to announce deployments, this is why I think the most fundamental way to improve this is to decouple the release from the deployment. First, deploy your code and it's behind a feature flag, so nothing happens. And then you turn on your feature flag just for your users so that you can test, and then you can roll out slowly. This very simple approach works wonders in terms of providing stability because then you get into the habit of making sure that a deploy never breaks anything. You first release and test with your users, and then because you're the one turning on the feature flag, you are presumably following the feature and monitoring it with the product manager, etc.</p>
</details>

**Gergely:** 我记得有一次事故，有人在社交媒体上发帖说 Uber 的某个东西坏了。我记得你很生气，你生气的是我们没有发现它，我们的监控没有捕捉到它，而是需要有人在社交媒体上发帖。我记得你对我们说的话，你可能不记得了：“我们需要从客户那里得知我们的系统坏了，这是我们的终极失败。” 这句话一直留在我心里，这个教训是，从那以后，我一直在想，我们如何确保我们能自己知道问题，而不需要别人来告诉我们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I remember that we had an incident where someone on social media posted that something is broken at Uber. And I remember you were upset, and you were upset that we didn't catch it, that our monitoring did not catch it, and that someone had to post on social media. I remember what you told us, you might not remember, but you said, "This is the ultimate failure of us needing to learn from a customer that our system is broken." And this still stuck with me, this lesson of since then I remember like, okay, how can we make sure that we will know and we will not have to have someone tell us this is broken.</p>
</details>

**Charles:** 是的，坦白说，直到今天，即使在我现在的团队，我们仍然需要在这方面努力。在 Cloud Kitchens，我们对任何事故都会关注三个指标：发现时间、缓解时间和解决时间。对我来说，最重要的部分是缓解时间。它意味着我们需要多长时间才能将系统恢复到客户看不到影响的状态。解决问题是之后的事。如果你因为没有发现问题而浪费了一周的时间，那么这就是你需要解决的问题。在规模化的情况下，尤其是在 Uber 的规模下，检测问题要容易得多，因为你有如此高的流量，如果有什么东西坏了，你肯定有某种监控会检测到它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, frankly to this day, I don't think even on my current team, we still have to work on those things. There are three metrics at Cloud Kitchens that we always look at for any incident: time to detection, time to mitigation, and time to resolution. And the most important part for me is time to mitigation. It means how much time does it take us to bring the system back to a state where the customer doesn't see the impact. Resolution goes after. And if you waste like one week of time because you did not detect the issues, there you go. This is what you need to fix. And at scale, especially at Uber scale, being able to detect is much easier because you have such a high volume that if something breaks, you must have some kind of monitoring that will detect it.</p>
</details>

### 自动化的悖论：先手动操作

**Gergely:** 在超高速扩张时期，事情发展得非常快。你不断招聘人，但招聘速度远低于客户、功能等方面的增长速度。自动化变得非常非常重要。你一直都是自动化的忠实拥护者。我记得在 Uber，你为各种事情构建了自己的脚本。关于自动化，你学到了什么？它如何运作，又在哪些方面行不通？也许有些事情并不那么显而易见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing with hyperscaling is things are so fast. You keep hiring people, but you're hiring people a lot slower than your growth is in terms of customers, features, all those things. Automation becomes really, really important. You've always been a huge fan of automation. I remember at Uber you kind of built your scripts to automate this or that. What have you learned about automation, how it works, how it doesn't work? Maybe some things are not as obvious about it.</p>
</details>

**Charles:** 我最近学到的一点来自我读到的一篇关于“自动化的悖论”的文章，那是一篇很老的文章，但非常引人入胜。它谈到了两件我绝对见过并且犯过很多错误的事情。第一，有时我们进行自动化时，是用自动化设计者的错误取代了用户的错误。我们缺乏背景信息，不了解软件或流程是如何被使用的，所以当我们自动化时，实际上引入了错误的自动化。第二，因为你无法自动化所有事情，你通常会自动化最简单的事情，而把最复杂的事情留给用户负责。所以这里的悖论是，自动化有时会失败。那么你能做些什么来防止这种情况呢？最简单的方法是观察并深入了解流程是什么。你必须手动去做。就像我们说初创公司应该先做那些无法规模化的事情一样。先手动操作，这将为你提供业务、产品和运营的背景知识，以便之后正确地进行自动化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The most recent thing I learned about this is this article I read about the ironies of automation, which is a pretty old article but it's fascinating. And it talks about two things that I've definitely seen and I've made a lot of mistakes in this area. One, sometime when we automate, we replace user error with automation designer error. We are lacking context, we don't understand how the software or the process is used, so when we automate, we actually put in the wrong automation. That's one. Two, because you cannot automate everything, you usually automate the simplest things and you leave the user in charge of the most complex stuff. So that's the irony here is like automation sometime fails. So what can you do to prevent that? The simplest thing is to observe and get a deep understanding of what the process is. You have to do it manually. We say startups should do things that don't scale first. So do the things manually first. This will give you the business context, product context, operational context to then automate correctly.</p>
</details>

### 规模化团队：超高速增长时期的招聘策略

**Gergely:** 在超高速扩张时期，一个有趣的挑战是招聘。大多数公司不会处于超高速扩张模式，但时不时地，你需要非常非常快地招聘。这可能是因为你获得了一轮大额融资，或者其他原因。当你需要高效地招聘大量有经验的人时，你学到了哪些有效的方法？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One interesting challenge during the hyperscaling time was hiring. And again, most companies will not be in hyperscale mode, but every now and then you need to hire really, really fast. This might be because you get a big funding round or for other reasons. What did you learn about what works when you need to hire efficiently and you need to hire a lot of people, often times experienced people?</p>
</details>

**Charles:** 你需要审视整个流程，把流程的每一步都看作一个漏斗、一个管道，然后看哪里有漏洞。所以从指标的角度来看，这一点非常重要。另一件事是，你要和招聘人员建立伙伴关系。很多人不这样做。你必须建立这种伙伴关系，这样你才能有一个反馈循环，让你的招聘人员知道你在寻找什么，并确保这些候选人被找到，通过招聘人员的初步筛选，然后进入流程。最后我想说的是，对于流程的每一步，你都要有持续改进的心态。你还记得我们在 Uber 做的一件事吗，我们在 Cloud Kitchens 也这样做，那就是配对面试官。你有两个面试官，这样他们可以互相给予反馈，互相培训。在面试培训方面，能做的事情有限。所以通过配对面试官，你可以在两者之间分享反馈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You look at the whole process, right? You look at every single step of the process as a funnel, as a pipeline, and you see where you have a leaky bucket. So from a metric standpoint, it's very important to have that. The other thing is you build a partnership with a recruiter. So many people don't do that. You have to build this partnership so that you have a feedback loop where your recruiter knows what you're looking for and makes sure that those candidates are sourced, are front-screened from a recruiter standpoint, and then get through the process. And then the last thing I would say is like every single step of the process, you have a continuous improvement mindset. One thing you remember we did at Uber, we do it at Cloud Kitchens as well, is pairing interviewers. You have two interviewers, and this way they can give each other feedback. They can train each other. There is only so much you can do when it comes to interviewing training. And so to pair interviewers, you can share feedback between the two.</p>
</details>

**Gergely:** 我记得我们做的两件事，我觉得现在很多地方仍然没有这样做。首先，我们每周和招聘人员有一次碰头会。工程经理和招聘人员会一起，有点像团队的回顾会。他们会讨论诸如他们的招聘策略是什么，比如他们正在瞄准哪些人群，或者 LinkedIn 有了这个新功能。他们会分享技巧，我们觉得很酷。或者讨论他们正在考虑瞄准哪些公司，我们会说，那家怎么样？我刚听说那里有些负面消息，也许那里的人会有兴趣加入。我以前从未见过这种情况，这真的很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I remember the two things that we did and I don't think many places still do it. First, we had a weekly catch-up with the recruiter. So engineering managers and recruiters, we would do it. It's a bit like a team retrospective. And they would talk about things like what are their sourcing strategies, what kind of cohorts are they targeting, or LinkedIn has this new feature. And they would share tips and we're like, "Oh, pretty cool." Or talking about what kind of companies they're thinking of targeting and we'd be like, "Oh, what about this one? I just heard that there's some negative news coming from there, maybe people will be interested in joining from there." And I've never seen that before and it was really good.</p>
</details>

**Charles:** 百分之百正确。招聘人员和工程经理之间的这种关系至关重要。实际上，这是从 Thuan Pham 那里学到的，你也应该邀请他上你的播客。他告诉我，他每天早上都会去和招聘人员交流，问：“嘿，这周你们看到了哪些有趣的简历？” 这是建立反馈循环的绝佳方式。招聘人员带来了很多价值，他们有自己特定的技能组合。而你知道你在寻找什么样的人，知道你的团队缺少什么。所以，如果你没有这种紧密的反馈循环，招聘会花费很长时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">100%. This relationship between the recruiter and the engineering manager is critical. And actually something that came from Thuan Pham, which you should have on your podcast as well. He told me that every morning he would go and check with the recruiters and say, "Hey, what are some of the interesting profiles you saw this week?" And it's a great way to have this feedback loop. The recruiter brings a lot of value and has their specific skill set, and you know who you're looking for. You know who your team is missing. So if you don't have this tight feedback loop, it's going to take a lot of time to hire.</p>
</details>

### 应对倦怠与授权成长

**Gergely:** 当你感到非常不堪重负时，你能做些什么？我记得，当时你是我的经理，有一段时间你看起来非常疲惫。当时是绩效季，一位经理离开了公司，突然间他的下属也向你汇报，你一下子有了 30 个下属，需要进行 30 场绩效沟通。我记得当你完成最后一场时，我们几个比较有经验的工程师都知道，我们看到了你的日程表排得满满的。当你出来时，我们为你鼓掌，因为你终于完成了，这花了大概两周时间。我记得那时候，你有 30 个下属，还被期望完成工作，我想你当时还在做一些具体的技术工作。你当时看起来不像平常那么精神焕发。你是如何走出那种困境，或者说如何坚持下来的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What can you do when you're feeling really overloaded? I remember, and you were my manager, but there was a time where you looked pretty burnt out. We had performance season and a manager left the company, and suddenly their reports also reported to you. You had suddenly 30 reports and you had to do 30 performance check-in conversations. I remember that when you did the last one, a few of us more experienced engineers, we knew, we saw your calendar. It was full. And when you came out, we were there kind of clapping that you're done because it took like two weeks. And I remember at the time, you had 30 reports. You were expected to still get stuff done. I think you were still doing some hands-on work. And you could tell that usually you're pretty chipper, but back then you were not chipper. What did you do to get out of this situation or to push through it?</p>
</details>

**Charles:** 我会说有两件事。第一是个人生产力。这是我一直非常热衷的话题。我一直在这方面投入很多。我读的第一本关于这个主题的书是 David Allen 的《搞定》（Getting Things Done）。这是一项至关重要的技能，对吧？你越早投资于个人生产力，它将支付越多的红利。我坚信复利的力量。第二件事是一个在任何地方都行之有效的原则：分而治之。是的，你说得对，我记得那个时候，你有 30 个下属，你不可能做所有的事情。所以现在你必须找到能够从你手中接管一部分工作的人。我记得当时我请你来领导一个项目。这是一个很好的方式，因为你把责任交给了别人，帮助他们走出舒适区，同时你也节省了时间。这是一个双赢的局面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I would say there's two things. There's one, personal productivity. It's a topic I've always been super passionate about. So I've always invested a lot. The first book I read on this topic was Getting Things Done by David Allen, which is a critical skill, right? The earlier you invest in your personal productivity, the more dividend it's going to pay. And I really believe in compound interest. The second thing is a principle that works wonders everywhere: divide and conquer. So yeah, you're right. I remember that time. You have 30 reports, you cannot do everything. So now you're going to have to find people who can take over some of those topics from you. So I remember asking you to take lead on a project, for instance. And it's a great way because you give responsibilities to people, you help them stretch outside of their comfort zone, and you're saving time. So it's a win-win thing.</p>
</details>

**Gergely:** 我记得你这么做了，我喜欢的一点是，你的要求非常明确。你说：“我需要你来领导这个项目，我没有那么多时间投入其中。我希望每周和你沟通一次。如果在此之前你需要更多帮助，请告诉我。”然后你还更具体地说了：“我希望你制定一个计划，说明你将如何做，我们再核对一下。”这是一种让你花费更少时间，给予更多责任的方式，而且实际上人们很喜欢这样，因为他们在专业上得到了成长，也理解了为什么这份额外的责任会落到他们身上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I remember that you did this, and what I liked about it is you were very explicit about the ask. You were like, "I need you to lead this project, and I don't have as much time to spend on it. I'm expecting to check in with you once a week. If you need something more before that, let me know." And then I think you also went more specific: "I'd like you to make a plan on how you're going to do this, let's check in on it." And it was a way for you to spend less time, give more responsibility, and actually people liked it because people were growing professionally and they also understood the reason why this added responsibility is going to them.</p>
</details>

**Charles:** 这种分而治之的方法与我们处理软件的方式非常相似，对吧？我们创建一个抽象，赋予它责任，设计一个清晰的 API。我的一位经理告诉我，你能对别人说的最有力的话之一就是“我需要你的帮助”。这句话非常有力，非常简单，对吧？“我需要你在这件事上帮助我。” 这样员工也会感到被赋能去做出决策。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This divide and conquer is very similar to what we do with software, right? We create an abstraction, we give it responsibilities, we design an API that is clean. One of my managers told me one of the most powerful expressions you can tell somebody is "I need your help." This is very powerful, very simple, right? "I need your help with this." And the employee feels also empowered to make decisions.</p>
</details>

### 卓越工程师的特质：交付与赋能

**Gergely:** 你自己是工程师，也管理过很多非常优秀的工程师。能讲一个杰出软件工程师的故事吗？是什么让这个人脱颖而出？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You were an engineer yourself. You managed a lot of pretty good engineers. Can we talk about a story of a standout software engineer and what made this person stand out?</p>
</details>

**Charles:** 有太多好故事了。我不想特别挑出某个人，但一个典型的优秀软件工程师具备一些特质。我会说有几点。第一是交付（shipping）。我写过三四个职业阶梯，行业里很多职业阶梯在高级工程师之后，过分关注元工作（meta work）：审查**RFC** (Request for Comments: 意见征求稿，一种在技术社区中用于提出、讨论和记录标准、协议或设计方案的文档)，参加会议，影响这个，策划那个。很难理解到底在做什么。所以第一个品质，我们试图把它放进 Cloud Kitchens 的职业阶梯里，就是专注于构建、交付价值，有创造力，成为你所用编程语言和系统架构的专家。所以，交付是关键。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, there are so many good stories. I'm not sure I want to single out somebody in particular, but some of the traits of an archetypically good software engineer. I would say there's a couple things. There's one, shipping. I've written three or four career ladders. A lot of career ladders in the industry, after senior, they overfocus on meta work: reviewing RFCs, attending meetings, influencing that, strategizing this. It's really difficult to understand what's going on. So the first quality, and we try to put that in the Cloud Kitchens career ladder, is the focus on building, shipping value, being creative, being an expert in your programming language, in system architecture. So that's one, shipping is really key.</p>
</details>

**Gergely:** 所以即使在高级以上，比如主任工程师（staff engineer）级别，你仍然强调需要交付东西，需要把东西推向生产环境。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So even at the above senior, like the staff engineer level, you still place focus on, you still need to ship things, you need to get into production.</p>
</details>

**Charles:** 当然。我们期望主任工程师能真正找到创新的方法来加快执行速度，或者在质量上实现 10 倍的提升。这是我们所期望的，而不仅仅是审查 RFC 或参加会议。所以，第一是交付，第二是赋能（lifting），提升你周围的人。这至关重要。我们本质上是知识工作者，所以你必须培训你周围的人，你必须伸出援手，你必须提供帮助，你必须有良好的态度。我合作过的最优秀的工程师都具有这种惊人的主人翁精神，他们会接手一个问题，并且不会止步于团队的边界。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely. And we expect, for instance, staff engineers to really find creative ways to speed up execution or achieve a 10x improvement in quality. That's what we expect. Not only reviewing RFCs or attending meetings. So that's one, shipping. And lifting, lifting people around you. This is critical. We are knowledge workers essentially, right? So you have to train people around you, you have to give a hand, you have to help, you have to have a good attitude. The best engineers that I've worked with have this amazing attitude of ownership, of taking a problem and not stopping at team boundaries.</p>
</details>

**Gergely:** 我觉得现在越来越没有真正的借口了。因为在 AI 出现之前，你可以说上手很难，了解它需要时间和精力。我的意思是，成为专家仍然需要时间和精力，但正如你所说，为了解决自己的问题，在一个产品经理都能提交可能被接受的拉取请求（pull request）的时代，我认为工程师必然会成为全栈工程师，只是在自己的主技术栈上有专长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I feel there's starting to be no real excuses. Because before AI, you could say it is hard to onboard. It's hard to get to know it. It takes time and effort. And I mean, it still takes time and effort to become an expert, but as you say, to unblock yourself, at an age and time when a product manager can open a pull request that might be accepted, I think engineers are necessarily becoming full stack with an expertise in their home stack.</p>
</details>

**Charles:** 是的。交付和赋能。我还会加上一件事：幽默感。轻松地看待自己。这非常重要。显然，这不仅限于优秀的工程师，但我认为谦逊和能够自嘲是相当重要的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes. Ship and lift. Yes. And I will add one thing: humor. Taking yourself lightly. It's really important. I mean, evidently not limited to solid engineers, but I think humility and being able to self-deprecate is pretty important.</p>
</details>

### 项目管理：工程师的超级能力

**Gergely:** 我觉得如果你能更好地进行项目管理，管理你自己正在做的项目，无论是一个人的项目还是几个人的项目，这作为一名软件工程师都是一种超能力。因为我认为作为软件工程师，我们觉得我们的工作就是写代码，但实际上我们的工作是解决问题并交付解决方案。当你能承担更复杂的事情时，你会变得更有经验，坦白说，薪水也更高。而没有项目管理，你能走的路是有限的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I feel that getting better at project management, managing your own project that you're working on, whether it's a one-person thing or a few people, it's a superpower as a software engineer. Because I think as software engineers, we think that our job is to write code, but actually our job is to solve problems and to ship solutions to problems that the business has, whether that be new features or products. And you become more experienced and frankly, higher paid when you can take on more complex things. And there's only so far you can go without project management.</p>
</details>

**Charles:** 是的，我甚至会说，项目管理是一回事，但我也会建议涉足产品管理。因为软件工程师工作的讽刺之处在于，有很多事情可以归咎于软件工程师，比如功能有 bug、测试不充分、发生事故、做出了错误的架构决策等等。这些都非常客观，可以衡量。但有一件事相对难以衡量，而且我认为大多数公司在这方面做得并不好，那就是确保一个产品在做正确的事情，从一开始就采取了正确的策略，并交付了正确的价值。所以作为一名软件工程师，如果你不这样做，你可能会浪费数周甚至数月的时间去开发一个实际上对客户毫无价值的功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I would even go as far as saying that project management is one thing, but I would also recommend getting into product management. Because the irony of the software engineer's work is there's a lot of blame, a lot of things that can be blamed on the software engineer, right? Like a feature is buggy, hasn't been tested enough, there's an incident, a wrong architecture decision was made. And it's very objective how you measure. There is one thing that is relatively difficult to measure and that most companies I think don't do a great job at, which is making sure a product is doing the right thing and was the right strategy in the first place and is shipping the right value. So as a software engineer, if you don't do that, you risk wasting not days but weeks, maybe months of time working on a feature that is actually not going to move the needle for the customer.</p>
</details>

### AI 对软件工程未来的影响

**Gergely:** 你如何看待 AI 已经开始改变软件工程，尤其是在你在 Cloud Kitchens 所做的工作中？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What do you see? How is AI already changing software engineering, especially for the work that you're doing at Cloud Kitchens?</p>
</details>

**Charles:** 我们自己做了研究，发现它有中等程度的用处。它是有用的。我认为它在处理一个定义明确的问题时特别有用，比如导航代码。作为教练和培训师，作为经理，我经常用它来审查我的文档。但原则上，我从不复制粘贴 AI 写的文字。我想确保我对自己写的东西保持控制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We did our own study. We found it was moderately useful. It is useful. I think it's particularly useful when you have a well-defined problem that you're trying to solve, like navigating the code. As a coach and as a trainer, as a manager, I use it a lot to review my documents. As a matter of principle, I never copy-paste text that was written by an AI. I want to make sure I stay in control of what I write.</p>
</details>

**Gergely:** 因为写作即思考，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because yeah, writing is thinking, right?</p>
</details>

**Charles:** 是的，这是同一个过程。所以我不想把我的思考外包给 AI。如果那样的话，我会非常非常难过。每一次我们经历这样的革命——AI 可能是迄今为止最大的一次，别误会我的意思——但每一次我们经历这些革命，媒体和所有人都在谈论取代工程师。但我们仍然在这里。你还记得机器学习真正兴起的时候，人们说我们不再需要软件工程师了。事实是，真正受到挑战的工作角色是数据科学家，因为机器学习和现成的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it's the same process. So I don't want to outsource my thinking to an AI. I would be really, really sad if that was the case. Every single time we have one of those revolutions, and AI might be the biggest yet, don't get me wrong, but every time we have those revolutions, the press and everyone speaks about replacing engineers. We're still there. You remember when machine learning really picked up, people were saying we won't need software engineers anymore. The truth is, it's the data scientist that was really a job role that was under a lot of challenges because of machine learning and ready-made models.</p>
</details>

**Gergely:** 你们团队还在招聘，对吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Your team is still hiring, correct?</p>
</details>

**Charles:** 是的，我们还在招聘。我认为它将使工程师能够做更多的事情，专注于更有趣的任务。我们谈到了迁移。我认为迁移可能是一个很好的用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we're still hiring. I think it's going to enable engineers to do more, to focus on more interesting tasks. We talked about migration. I think migration is potentially a great use case.</p>
</details>

**Gergely:** 我们讨厌做迁移。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We hate doing it.</p>
</details>

**Charles:** 是的。迁移是一个很好的用例。例如，在 Cloud Kitchens，我们有一次迁移，拥有内部平台的团队整理了一个提示（prompt），你可以复制粘贴来做迁移，但仍然需要审查代码，因为总会有出错的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So migration is a great use case. For instance, at Cloud Kitchens, we had a migration and the team that was owning the internal platform put together a prompt that you could copy-paste to do the migration, and still review the code because there's always things that go wrong.</p>
</details>

### 职业建议：在初创公司中脱颖而出

**Gergely:** 你在几家快节奏的初创公司工作过，Uber，后来又在其他初创公司，现在在 Cloud Kitchens。你看到人们做了什么才在这些初创公司取得成功？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You've worked at a couple of fast-paced startups, Uber. You later worked at other startups. You're now at Cloud Kitchens. What have you seen people do to be successful at these startups?</p>
</details>

**Charles:** 我会说，首先，个人生产力帮助很大。所以在职业生涯早期投资于此，这样你就能迅速进入状态，并且在新公司入职时保持条理和方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would say first, personal productivity helps a lot. So investing in this early in your career so that then you can hit the ground running really rapidly and you stay structured and methodical when you onboard at a new company.</p>
</details>

**Gergely:** 你用抽认卡记忆什么东西？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For flashcards, what kind of things do you memorize?</p>
</details>

**Charles:** 比如，我记住了整个 Python 标准库，不是全部，但大部分，这在开始时帮助很大。然后你记忆架构模式、数据科学方法论、你当前语言的标准库，或者你遇到的一些问题，你经常使用的 bash 命令等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for instance, I memorized the whole Python standard library, not everything, but a lot of it, and it did help a lot in the beginning. And then you memorize like architecture patterns, data science methodologies, the standard library of your current language, or some issues you have, bash commands that you use consistently. Yeah.</p>
</details>

**Gergely:** 有什么不那么显而易见的建议，能帮助人在高增长的初创公司中茁壮成长？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What are some non-obvious recommendations to thrive inside a high growth startup?</p>
</details>

**Charles:** 不那么显而易见的……我谈到了记忆。使用抽认卡来记忆东西，非常强大。第二，我不确定这是否超级不明显，但就是**极端所有权**（Extreme Ownership: 一种心态，即个人对所有结果负全部责任，不找借口或指责他人）。这意味着你感觉这个团队是你的，这个项目完全是你的，并且真正地去了解所有的依赖关系和它所处的整体环境，这对取得巨大成功至关重要。我谈到过最优秀的工程师不会止步于团队边界，他们会继续前进。我们的行业，我们的工作，主要是建立在抽象之上的抽象。实际上，总有泄漏的抽象细节，实现细节。所以，你对你所依赖的技术栈了解得越多，我认为你作为一名工程师就会越有效。这也适用于你的工具，适用于你的编程语言，适用于一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Not obvious. I talked about memorization. Using flashcards to memorize stuff. Very powerful. And second, I'm not sure if it's super non-obvious, but extreme ownership. So that means you feel like the team is yours, the project is fully yours, and really going out of your way to understand all of the dependencies and the overall context it fits in is really critical to be super successful. I talked about how the best engineers don't stop at team boundaries. They will keep going. Our industry, our work is mostly about building abstractions on top of abstractions on top of other abstractions. In reality, there's always leaky abstraction details, implementation details. So the more you understand about the stack you rest upon, I think the more effective you're going to be as an engineer. It also applies to your tools. It applies to your programming language. It applies to everything.</p>
</details>

### 工程师的心态与哲学

**Gergely:** 在高增长、快节奏的初创公司工作时，很多人都有冒名顶替综合症（imposter syndrome）。你有过吗？你看到别人有吗？你是如何应对的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When it comes at working at high scale at fast-paced startups, a lot of people have imposter syndrome. Did you have this and did you see people have it and how did you work around it?</p>
</details>

**Charles:** 你总会有这种感觉。我认为直到今天，有这种感觉是件好事。我们经常把冒名顶替综合症说成是坏事，但我认为它实际上是驱动你好奇心的引擎，是推动你走向自我提升、拥有持续改进心态的动力。我们都认识的 Dan Heller 有一句话很好地概括了这一点：“我认为冒名顶替综合症被低估了。很多讨论都集中在如何克服它。我说，拥抱自我怀疑，每天都怀疑自己。” 还有什么可补充的呢？这是一个很好的驱动力，一个很好的引擎。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, you always have this. I think to this day, it's a good thing to have it, actually. We often talk about the imposter syndrome as a bad thing, but I think actually it's the engine that drives your curiosity and is what's going to move you toward essentially improving yourself and having this continuous improvement mindset. Dan Heller, which we both know, has a really good way to phrase this thing. He said, "I think imposter syndrome is underrated. A lot of talk goes into overcoming imposter syndrome. I say embrace self-skepticism and doubt yourself every day." What else to add? It's a good drive. It's a good engine.</p>
</details>

**Gergely:** 你有什么不那么明显的阅读建议，可以给那些想变得更好的工程师？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What are some non-obvious reading recommendations you might have for engineers who want to get better?</p>
</details>

**Charles:** 我会说，读基础知识，不一定只读最新的技术书籍。例如，一本不那么明显的书是《Linux 编程接口》（The Linux Programming Interface），它深入探讨了内核暴露的 API。这非常吸引人，因为它不仅解释了内核，而且非常有用，因为我们大部分的技术栈都构建在 Linux 之上。其次，它也深入探讨了历史上的技术决策。还有一些非常有趣的算法，比如为什么内核选择红黑树而不是哈希表来处理某些数据结构。所以这真的很有趣，非常迷人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So, I would say read the fundamentals, not necessarily only the most recent technical books. For instance, one of the non-obvious books I would say is The Linux Programming Interface, which goes into what is the API that is exposed by the kernel. It's fascinating because not only does it explain the kernel and it's super useful because most of our stack is built on top of Linux. And two, it also goes into the historical technical decisions. There are some really interesting algorithms as well, like why did the kernel choose a red-black tree for instance instead of a hashmap for certain data structures. So it's really interesting, really fascinating.</p>
</details>

**Charles:** 我最近也读了更多哲学方面的书。显然，软件工程是一项非常科学的努力，但我们处理的是概念，这也是事实。所以这是一项非常概念性的工作，与哲学非常相似。例如，我听了你和 Ousterhout 博士关于软件设计哲学的访谈。他提到软件设计的核心是问题的分解。嗯，这是人类思想的核心，是理性的核心，对吧？理性就是区分不同概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've also been reading a lot more philosophy lately. I mean, evidently software engineering is a very scientific endeavor, but there's a lot to be said also about the fact that we handle concepts. So it's a very conceptual work that is very similar to philosophy. And so for instance, I listened to your interview with Dr. Ousterhout about the philosophy of software design, right? And he mentioned that at the core of software design, you have this decomposition of problems. Well, it's a core of human thought. It's the core of reason, right? Reason is about distinguishing between different concepts.</p>
</details>

**Gergely:** 事实上，当涉及到例如设计一个新系统时，你需要在某种程度上走一条路。你可以争论这是不是哲学，比如你是在做微服务还是单体应用，但争论可能会变得有点哲学化，因为没有一个绝对的对错。我想在某个时候，你需要选择其中一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. In fact, when it comes to, for example, designing a new system, you kind of need to go down a path. You can argue if it's a philosophy or not, if you're doing microservices or monoliths, but the argument can turn into kind of philosophical. There is no one right or wrong. And I guess at some point you need to go with one of them. It's fascinating how there are some parallels.</p>
</details>

**Charles:** 当你写一份 RFC 时，你是在陈述一个论点。所以这里有很大的逻辑成分。你的论点有多站得住脚？例如，在 Cloud Kitchens 的能力模型中，我们有一个关于“真理”的重要部分，我们有一个我非常喜欢的能力，叫做 **QED** (Quod Erat Demonstrandum: 拉丁语，意为“证明完毕”，常用于数学证明的结尾)。它关注的是你如何把你的论点阐述清楚。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, when you're writing an RFC, you're making a case. So then there is a big component of logic. How sound are your arguments? So for instance, at Cloud Kitchens, in the competencies, we have a big section about truth, and we have one competency which I like pretty much, which is called QED, right? Quod Erat Demonstrandum, what needed to be demonstrated. And it focuses on how well do you make your case?</p>
</details>