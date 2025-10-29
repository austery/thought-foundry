---
author: Internet of Bugs
date: '2025-10-28'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=0Plo-zT8W9w
speaker: Internet of Bugs
tags:
  - ai-investment-bubble
  - software-limitations
  - exponential-growth-myth
  - ai-progress-critique
  - catastrophic-forgetting
title: AI行业最大的谎言：进步并非必然，投资泡沫暗藏风险
summary: 本文深入剖析了AI行业中一个普遍存在的“谎言”——即AI模型将不可避免地持续指数级进步。作者Carl通过引用OpenAI CEO Sam Altman的言论，并结合GPT-5的表现，揭示了这一前提的脆弱性。文章指出，AI投资泡沫正建立在这一不实承诺之上，并强调AI本质上是软件，受制于软件开发的固有局限性，而非硬件般能持续指数级提升。文中还探讨了“负迁移”和“灾难性遗忘”等问题，呼吁读者警惕行业宣传，理性看待AI的未来发展。
insight: ''
draft: true
series: ''
category: finance
area: market-analysis
project:
  - ai-impact-analysis
  - market-cycles
  - investment-strategy
people:
  - Hank Green
  - Sam Altman
  - Bill Gates
companies_orgs:
  - OpenAI
  - IBM
  - Microsoft
  - Adobe
  - Artificial Analysis
products_models:
  - GPT-5
  - GPT-4
  - GPT-4-mini
  - Watson AI
  - Microsoft Windows
  - Windows 98
  - Microsoft Word
  - Excel
  - Adobe Photoshop
  - Acrobat PDF reader
  - LiveBench
  - SciCode
media_books: []
status: evergreen
---
### 引言：AI行业最大的谎言

今天，我将讨论在我看来，AI行业曾经讲述并将继续讲述的最大谎言，以及我为什么相信**GPT-5**（Generative Pre-trained Transformer 5: OpenAI开发的大型语言模型）揭露了它是一个谎言，以及我认为这个谎言可能带来的影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today, I'm talking about what, in my opinion, is the biggest lie that the AI industry has told and continues to tell, why I believe that GPT-5 exposes it as a lie, and what I think the implications of that lie are.</p>
</details>

现在，如果我要做到这一点，我当然需要先告诉你这个谎言是什么：“这些模型现在有多糟糕，它们将来就会有多糟糕，我完全接受。比如，这是真的。”等等！那是Hank Green吗？搞什么鬼——

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, if I'm going to do that, of course, I'm going to need to start by telling you what the lie is: "These models are as bad as they are ever going to be, which I totally accept. Like, that is true." Wait! Was that Hank Green? What the Fu---</p>
</details>

欢迎来到“漏洞互联网”。我叫Carl。我从事软件专业工作已经超过35年了。我正在尽自己的一份力，让互联网变得更少漏洞。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Welcome to the Internet of Bugs. My name is Carl. I've been a software professional for more than 35 years now. And I'm trying to do my part to make the Internet a less buggy place.</p>
</details>

我刚才使用Hank Green的片段是为了展示这个谎言的普遍性，以及人们听到和重复它的频率，以及它看起来多么合理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I used the Hank Green clip just now to show how pervasive the lie is and how often people hear it and repeat it, and how reasonable it seems.</p>
</details>

我不指望Hank Green能认识到这是一个谎言或指出它。在他视频的一部分中，他讨论了在互联网上“守好自己的领域”的想法，而“揭穿AI谎言”不是Hank Green的领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't expect Hank Green to recognize that as a lie or call it out. In part of that video, he discusses the idea of "staying in your lane" on the Internet and "debunking AI lies" is not Hank Green's lane.</p>
</details>

然而，这是我的领域。再次声明，出于法律原因，本视频包含我的个人观点，我将向您解释我为什么持有这种观点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is, however, mine. And again, let me say for legal reasons that this video contains my opinion and I'm going to explain to you why I hold that opinion.</p>
</details>

### 谎言的本质与投资泡沫

所以，让我用**OpenAI**（Open Artificial Intelligence: 一家人工智能研究和部署公司）的首席执行官Sam Altman的一句话来重新阐述这个论点：“**GPT-4**（Generative Pre-trained Transformer 4: OpenAI开发的大型语言模型）是你们将来会用到的最笨的模型，而且会笨很多。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let me reframe this argument with a quote from Sam Altman, who is the CEO of OpenAI. "GPT-4 is the dumbest model any of you will ever have to use again by a lot."</p>
</details>

这句话出自2024年4月在斯坦福大学举行的一次问答环节。我本可以选择很多其他的引语。这个想法在AI评论中不断出现，而且几乎总是无人质疑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that quote was from a Q&A session at Stanford University in April of 2024. There are a ton of other quotes I could have picked. The idea constantly comes up during AI commentary and it's virtually always goes unchallenged.</p>
</details>

现在，我为什么认为这是AI领域最大的谎言呢？因为支撑AI投资泡沫的整个纸牌屋都建立在这个前提之上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, why do I consider that to be the biggest lie in AI? Because the whole house of cards that props up the AI investment bubble is based on this premise.</p>
</details>

这个行业不希望你过多思考AI目前看起来有多好或多坏。他们希望你相信它只会变得越来越好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The industry doesn't want you to think too much about however good or bad AI might seem at the moment. They want you to take on faith that it will only ever get better.</p>
</details>

如果他们真的能够将改进层层叠加，似乎几乎可以合理地认为，最终AI可能会取代足够的工人，产生足够的收入来证明其当前的估值是合理的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if they could actually pile improvement on top of improvement, out top of improvement, it seems almost plausible that eventually the AI might displace enough workers to generate enough revenue to justify its current valuations.</p>
</details>

数万亿美元的投资都悬系于这个想法。它是许多其他谎言的基础，比如“AI将取代所有程序员”或“AI将取代80%的工人”或“人工超级智能将很快出现并杀死我们所有人”等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are trillions of dollars of investment that are hanging on this idea. And it's the basis for so many other lies like "AI will replace all programmers" or "AI will displace 80% of all workers" or "artificial super intelligence is going to happen soon and kill us all" or whatever.</p>
</details>

如果这个基础是错误的，如果AI的进步不是不可避免的，如果明年的模型不能保证比今年的更好，那么就没有理由相信他们试图向你推销的任何其他东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If that foundation is faulty, if AI progress is not inevitable and next year's model isn't guaranteed to be better than this year's, then there's no reason to believe in any of the other stuff they're trying to sell you.</p>
</details>

### GPT-5的发布与谎言的揭露

我认为这显然是一个谎言，因为现在**GPT-5**已经发布了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's clear that this was a lie because now GPT-5 is out.</p>
</details>

确实，有一些人声称GPT-5实际上比GPT-4更智能。Altman当然也提出了这个说法。但**Artificial Analysis**的这份报告显示，GPT-5在**LiveBench**和**SciCode**编码测试中的得分低于**GPT-4-mini**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's true that there are some people that have claimed that GPT-5 is actually smarter than GPT-4. Altman has certainly made that claim. But this report from Artificial Analysis shows that GPT-5 scored lower than o4-mini on the LiveBench and SciCode coding tests.</p>
</details>

这就是证据。GPT-5在某些方面确实更好，但在其他方面也更差。但最确凿的证据是OpenAI被迫重新发布了GPT-4。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now that's proof. There are ways that GPT-5 is better, but there are also ways that it's worse. But the most damning proof is that OpenAI was forced to re-release GPT-4.</p>
</details>

请记住，这个说法并不是说GPT-5会稍微好一点，或者某种程度上更好，或者模棱两可地更好，或者在某些方面更好但在其他方面更差。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now remember, it's not like the claim was that GPT-5 would be a little bit better or somewhat better or ambiguously better or better in some ways but worse than others.</p>
</details>

而且，这个行业需要的不仅仅是每一代AI都比上一代更好。它需要指数级的进步，因为他们向投资者承诺，到至少2030年，他们赚的钱将呈指数级增长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the industry only needs for each generation of AI to be not better than the previous generation. It needs to be exponentially better because they're promising investors the money they make will grow exponentially through 2030 at least.</p>
</details>

### AI进步并非必然：历史的教训

这个行业喜欢拉出一些与AI相关的任意统计数据的图表，在过去几年中挑选一个范围，以显示进步看起来是指数级的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The industry loves to pull up a graph of some arbitrary statistic related to AI over a cherry-picked range of the last few years to show how the progress looks exponential.</p>
</details>

我见过行业一次又一次地尝试这样做。如果你回顾几十年前，你会看到一些类似的图表，其中有几个看起来像指数级的峰值，紧接着就是低谷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've seen industries try to do that over and over. If you go back decades, you'll see some graphs like these with several of those exponential looking spikes right before dips.</p>
</details>

从统计学上讲，对于绝大多数观看此视频的人来说，这是你们经历的第一次AI热潮。我们这些经历过过去AI热潮以及其间AI赢家的人，以前都见过这种情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Statistically, for the vast majority of you watching this, this is your first AI boom. Those of us that have lived through past AI booms, and the AI winners in between them, have seen this before.</p>
</details>

当然，大多数AI从业者现在都在说：“嗯，这次不同。”但AI从业者总是这么说。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Of course, most of the AI people are now saying, "Well, this time is different." But then AI people always say that.</p>
</details>

也许你还记得**IBM**的**Watson AI**在《危险边缘》中击败世界冠军时是多么轰动？也许你还记得IBM是如何说它将彻底改变医疗保健的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe you remember how big a deal it was when IBM's Watson AI beat the world champion at Jeopardy? Maybe you remember how IBM said that it was going to revolutionize healthcare?</p>
</details>

AI的承诺几十年来一直在重复。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI promises have been repeated over and over for decades.</p>
</details>

### 软件的本质与AI的局限性

鉴于过去30多年全球万维网的计算机行业进步，新技术呈指数级增长几十年的想法似乎并非不可能。毕竟，几十年来计算机几乎每年都变得更快更便宜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So given that the progress in the computer industry over the last 30-some odd years of the worldwide web, the idea of new technology that grows exponentially for decades doesn't seem out of the question.</p>
</details>

但变得更快的是硬件，而AI，尽管行业喜欢谈论它们的方式，它们不是大脑，也不是硬件，它们是软件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">After all, computers have pretty much only gotten faster and cheaper year after year for decades. But what has gotten faster is the hardware, and AIs, despite the way the industry wants to talk about them, aren't brains, and they aren't hardware, they're software.</p>
</details>

我再说一遍，它们只是软件。AI从业者谈论**LLMs**（Large Language Models: 大型语言模型）如何模拟人类大脑等等，他们表现得好像这意味着软件的规则不适用，但它们确实适用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let me say that again, they're just software. AI folks talk about how LLMs are simulating human brain or the like, and they act like that means that the rules of software don't apply, but they do.</p>
</details>

这些AI只是运行算法或一组算法，对抗一个庞大的数据存储的软件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These AI's are just software running an algorithm or set of algorithms against a huge data store.</p>
</details>

而且，所讨论的算法来源于自然界这一事实并没有什么特别之处。每一个3D游戏引擎都运行着大量来源于自然界的算法，从重力到碰撞检测再到光线追踪，而第一人称游戏当然也无法避免困扰任何大型软件项目的性能问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the fact that the algorithm in question is derived from something found in nature is nothing special. Every 3D game engine ever runs lots of algorithms derived from the natural world, from gravity to collision detection to ray tracing and first-person games certainly aren't immune to the performance problems that can plague any large software project.</p>
</details>

生成式AI很酷也很有用，但多年来也有很多更酷更有用的进步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Generative AIs are cool and useful, but there have been lots of cooler and more useful advances over the years.</p>
</details>

我本来想在视频中加入一个部分，讨论LLMs在计算历史中的位置，以及我如何不同意AI行业喜欢定位自己的方式，但我想说的话太多了，以至于需要单独制作一个视频，所以那个脚本正在进行中，很快就会发布，如果您有兴趣观看这样的视频，请订阅。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I had a section in the video here going into where I think LLMs fit into the history of computing and how I disagree with the way the AI industry likes to position itself, but what I wanted to say grew to the point that it needed its own video, so that script is in progress and that'll happen, so subscribe if you're interested in seeing a video like that.</p>
</details>

所有软件都有局限性，LLMs也不例外，软件不会像硬件在过去60年左右那样，每一代都自动变得更快更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All software has limitations, and LLMs are no exception, and software doesn't automatically get faster and better every generation the way the hardware has for the last 60 or so years.</p>
</details>

你的手机每次更新软件后都变得更快了吗？我的肯定没有。你能诚实地说每个版本的**Microsoft Windows**都比前一个版本明确地更好吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Has your phone always gotten faster every time you've updated the software? Because mine sure hasn't. Can you honestly say that every version of Microsoft Windows has been unambiguously better than the version before it?</p>
</details>

该死的**Windows 98**！把**Bill Gates**叫过来！你告诉我们Windows 98会更快、更高效，并且能更好地访问互联网！它确实更快，超过500万！

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">F***ing Windows 98! Get Bill Gates in here! You told us Windows 98 would be faster and more efficient with better access to the internet! It is faster, over 5 million!</p>
</details>

**Microsoft Word**呢？**Excel**呢？**Adobe Photoshop**呢？**Acrobat PDF阅读器**呢？几十年来它只会变得更好吗？你认为Adobe为什么强迫所有人订阅许可证？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How about Microsoft Word? Excel? Adobe Photoshop? How about the Acrobat PDF reader? Has that only ever gotten better over the decades? Why do you think Adobe pushed everyone to subscription licenses?</p>
</details>

因为人们不再每年购买新版本了，因为新版本并没有更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because people weren't buying the new version every year anymore, because the new versions just weren't better.</p>
</details>

软件没有一条明确的路径可以年复一年地变得更好。它运行的硬件可以变得更快，有时这也会导致软件变得更快，但有时今年的软件发布甚至比去年更慢，即使运行在新的、更快的计算机上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Software doesn't have a clear path to get better year over year. The hardware it runs on can get faster, and sometimes that causes software to get faster too, but sometimes this year's software release is even slower than it was last year, even when running on new, faster computer.</p>
</details>

这可能是由于软件臃肿、添加了新功能导致旧功能必须做你不在乎的工作、不断添加旨在让公司有理由让你升级的东西，直到公司放弃并宣布“我们不再支持这个版本了。切换到新版本，不管你喜不喜欢，当然还要为这个特权付费，否则你就会被今后发现的每一个bug所困扰。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This can happen because of software bloat, new features that are added that cause the old features to have to do work that you don't care about, the constant addition of stuff that is intended to give the company a reason to try to justify making you upgrade, 'til the company just gives up and declares "We're not supporting this version anymore. Switch to the new version, whether you like it or not, and pay us for the privilege, of course, otherwise you're going to get pwned by every bug that anyone finds from now on."</p>
</details>

有人用Windows 10吗？让硬件变得更好是显而易见的，可能不容易做到，而且通常也不容易，但衡量你是否做到了却很容易。目标是“就像上一个版本一样，但更快，或者能够并行做更多事情，或者两者兼而有之。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Windows 10 Anyone? Making the hardware better is clearly understandable, might not be easy to do, and it often isn't, but it's pretty easy to measure whether you did it or not. The goal is, "just like the last version, but faster, or able to do more things in parallel, or both."</p>
</details>

### 软件开发的挑战与AI的“更好”定义

软件不是那样的。“更好”的概念并非自动清晰。定义你希望软件做什么需要大量的努力，也需要时间，通常你走得越快，结果软件就越粗糙。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Software isn't like that. The idea of "better" isn't automatically clear. It takes a lot of effort to define what you want software to do, and it takes time, and usually the faster you go, the sloppier the resulting software turns out to be.</p>
</details>

AI也存在这个问题。这个“每个版本都会更好”的AI谎言的部分问题在于，如何以可操作的方式定义“更好”、“更智能”或“更笨”根本不清楚。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI has this issue. Part of the problem with this "every version will be better" AI lie, is that it's not at all clear how to define "better", or "smarter", or "dumber", in an actionable way.</p>
</details>

关于“智能”到底是什么，有很多讨论甚至争论。据说OpenAI将**AGI**（Artificial General Intelligence: 人工通用智能）定义为“高度自主的系统，在大多数具有经济价值的工作中超越人类。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there's a lot of discussion and even arguments about what "intelligence" even is. OpenAI is said to define artificial general intelligence as, quote, "highly autonomous systems that outperform humans at most economically valuable work."</p>
</details>

这作为一项规范并没有什么帮助。你无法从中列出待办事项，而且他们非常着急，所以这对他们来说不是一个成功的良好设置。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's not helpful as a specification. You can't make it to-do list out of that, and they are in a huge hurry, so this is not a setup that's great for success for them.</p>
</details>

商业规模的软件项目总是关于权衡。你可以让这部分运行得更快，但它会影响其他部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Commercial-sized software projects are always about trade-offs. You can make this part go faster, but it affects the other parts.</p>
</details>

缓存或索引可以使读取更快，但它会使写入操作更慢、更复杂。你可以添加其他新功能，但这又是客户必须记住和跟踪的一件事，软件也因此变得更难使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A cache or an index can make reads faster, but it makes the write operation slower and more complicated. You can add other new features, but that's one more thing the customer has to remember and keep track of, and the software becomes that much harder to use.</p>
</details>

我见过软件项目出现一种可怕的失败情况，我经常谈论它。它通常被称为“**打地鼠现象**”（Whack-a-mole: 软件开发中，修复一个bug导致另一个bug出现的问题）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's a horrible failure condition of software projects that I've seen happen, and I talk about a lot. It's commonly referred to as "whack-a-mole."</p>
</details>

每当你在软件的这部分修复一个bug或添加一个功能时，一些新的bug或故障就会在软件的另一部分出现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every time you fix a bug or add a feature over here in this part of the software, some new bug or failure pops up over there in some other part of the software.</p>
</details>

专业的软件工程师会做很多事情来尝试防止这种情况发生，但由于许多你们可能不关心的原因，这些技术中的很多都无法用于机器学习和基于神经网络的项目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are a lot of things that professional software engineers do to try to prevent this from happening, but a lot of those techniques aren't available to machine learning and neural net-based projects for reasons that a lot of you probably don't care about.</p>
</details>

我在我的另一个频道上发布了一个视频，讨论了这个问题以及它与《星际迷航》和编程语言历史的关系。如果你有兴趣深入了解，我会在下面放一个链接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I put up a video on my other channel about that and how it relates to Star Trek and the history of programming languages. I'll put a link to that below if you're interested in a deeper dive.</p>
</details>

### AI模型优化的负面效应

我们确实知道，为了让模型在某一方面表现更好而进行调优，往往会使其在其他方面表现更差。文献将这种效应称为“**负迁移**”（Negative Transfer: 机器学习中，模型在学习一项任务时损害了其在另一项任务上的表现），随着模型变得越来越大，越来越多的训练被添加进来，每一次新的训练都有更多可能产生负面影响的事情，甚至可能导致一个被称为“**灾难性遗忘**”（Catastrophic Forgetting: 神经网络在学习新信息时完全忘记旧信息的问题）的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We do know that tuning a model to be better at one thing often makes that model worse at other things. The literature calls this effect "negative transfer", and as models get larger, more and more training gets added, and each new training has more things that it might negatively affect, it can even lead to a problem called "catastrophic forgetting'.</p>
</details>

你猜怎么着？这不是一件好事。行业中正在进行多方面的研究，试图缓解这个问题，但你需要明白的是，这不是一个有明显答案的微不足道的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Guess what? It's not a good thing. There are a number of lines of inquiry going on in the industry trying to mitigate this, but the thing you need to understand is this is not a trivial problem with an obvious answer.</p>
</details>

在这条路上，没有自动的胜利。没有理由相信它会一直变得更好。AI公司有他们喜欢用每个新模型来指出的特定基准，我毫不怀疑每个公司都能为每个发布的新模型指出一些基准，以证明它是一种改进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There just aren't automatic wins on this path. There's no reason to believe that it's always going to get better. The AI companies have particular benchmarks that they love to point out with each new model, and I have no doubt that there will be some benchmark that each company can point to for each new model released to make the argument that it's an improvement,</p>
</details>

但是，在精心挑选的基准集合上获得更高的分数，并不是更智能或更好的定义。就像我之前提到的GPT-5在LiveBench和SciCode上得分较低一样，每个新模型在某些任务上表现不如以前的版本是很有可能的，甚至可以说是很可能，当然你不会指望AI公司会宣传这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but higher scores on a cherry-picked collection of benchmarks is not the definition of smarter or better. Like with GPT-5 scoring lower on LiveBench and SciCode, as I mentioned earlier, it's quite possible, if not likely, that there will be tasks that each new models do worse on than previous versions, not that you would expect the AI companies to advertise that.</p>
</details>

OpenAI正在尝试通过幕后的路由来缓解这种情况。现在，当你向GPT发送请求时，一个路由进程会查看请求并选择将请求转发给几个模型中的哪一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">OpenAI is starting to try to mitigate this somewhat, with routing under the covers. Now, when you send a request to GPT, a router process will look at the request and choose which of several models to forward the request on to.</p>
</details>

这将帮助他们隐藏特定模型在某些任务上退化到不良行为的地方，但这只是权宜之计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This will help them hide any places where particular models have regressed to poor behavior on certain tasks, but it's just a band aid.</p>
</details>

### 总结：警惕AI行业的谎言

所以总结一下，这些AI是软件，而不是硬件，没有理由接受AI公司所说的从现在起每个模型都会比你现在拥有的或那时拥有的更好，而且有几个原因，包括一些学术研究表明，至少对于某些任务来说，情况可能恰恰相反。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to recap, these AIs are software, not hardware, and there's no reason to accept the lie from the AI companies that every model from now on will be better than the one you have now, or the one you have then, and there are several reasons, including some academic research that indicate that, at least for some tasks, the opposite may well be true.</p>
</details>

不要相信这个谎言，不要重复它，当你听到它时就指出来，即使这意味着有时你不得不指责像Hank Green这样不加批判地重复行业宣传的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Don't believe the lie, don't repeat it, and call it out when you hear it, even if that means that sometimes you have to call out somebody like Hank Green for uncritically repeating industry talking points.</p>
</details>

因为假装软件总是会自动变得更好，最终会导致一个漏洞更多的互联网，而互联网已经有太多的漏洞了，任何持不同意见的人都在推销东西，或者他们正在重复推销东西的人的宣传。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because pretending that software always automagically gets better is how you end up with an even buggier Internet, and the Internet already has far too many bugs, and anyone who says differently is selling something, or they're repeating talking points from someone who's selling something.</p>
</details>

感谢观看。请大家小心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks for watching. Let's be careful out there.</p>
</details>