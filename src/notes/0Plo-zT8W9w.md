---
area: tech-insights
category: technology
companies_orgs:
- OpenAI
- IBM
- Microsoft
- Adobe
- Stanford University
date: '2025-11-05'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Hank Green
- Carl
- Sam Altman
- Bill Gates
products_models:
- GPT-5
- GPT-4
- Microsoft Word
- Excel
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=0Plo-zT8W9w
speaker: Internet of Bugs
status: evergreen
summary: 本文揭露了人工智能行业中一个普遍存在的谎言：即“AI模型只会越来越好”。作者指出，这一由行业领袖反复宣称的前提，是支撑巨大AI投资泡沫的根本谎言。文章以GPT-5与GPT-4的性能对比为例，解释了AI本质上是软件而非硬件，因此会受到软件固有限制，如臃肿、权衡和“负迁移”等，从而挑战了AI必然呈指数级进步的观念。作者呼吁读者对未经批判的行业论调保持警惕。
tags:
- growth
- investment
- llm
- negative-transfer
- software
title: AI行业最大的谎言：模型只会越来越好？
---

### 揭露AI行业最大的谎言

今天，我想谈谈在我看来，人工智能行业曾经并持续讲述的“最大谎言”，为什么我相信**GPT-5**（Generative Pre-trained Transformer 5: 一种大型语言模型）揭露了这一谎言，以及我认为这个谎言所带来的影响。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today, I'm talking about what, in my opinion, is the biggest lie that the AI industry has told and continues to tell, why I believe that GPT-5 exposes it as a lie, and what I think the implications of that lie are.</p>
</details>

当然，要做到这一点，我首先需要告诉大家这个谎言是什么：“这些模型现在有多糟糕，未来就会有多糟糕，我完全接受这一点。比如，这是真的。”等等！那是**Hank Green**（一位美国YouTuber和教育家）吗？搞什么鬼——
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, if I'm going to do that, of course, I'm going to need to start by telling you what the lie is: "These models are as bad as they are ever going to be, which I totally accept. Like, that is true." Wait! Was that Hank Green? What the Fu---</p>
</details>

欢迎来到“漏洞互联网”。我是**Carl**（本视频主持人），我从事软件行业已经超过35年了。我正努力为让互联网变得更少漏洞贡献自己的一份力量。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Welcome to the Internet of Bugs. My name is Carl. I've been a software professional for more than 35 years now. And I'm trying to do my part to make the Internet a less buggy place.</p>
</details>

我刚才使用**Hank Green**的片段，是为了展示这个谎言有多么普遍，人们多么频繁地听到并重复它，以及它看起来多么合理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I used the Hank Green clip just now to show how pervasive the lie is and how often people hear it and repeat it, and how reasonable it seems.</p>
</details>

我不指望**Hank Green**能将此识别为谎言或指出它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't expect Hank Green to recognize that as a lie or call it out.</p>
</details>

在那个视频的一部分中，他讨论了在互联网上“各司其职”的理念，而“揭穿AI谎言”并非**Hank Green**的职责范围。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In part of that video, he discusses the idea of "staying in your lane" on the Internet and "debunking AI lies" is not Hank Green's lane.</p>
</details>

然而，这却是我的职责。再次声明，出于法律原因，本视频包含我的个人观点，我将向大家解释我为何持有此观点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is, however, mine. And again, let me say for legal reasons that this video contains my opinion and I'm going to explain to you why I hold that opinion.</p>
</details>

### Sam Altman的言论与AI投资泡沫

那么，让我引用**OpenAI**（一家人工智能研究与部署公司）首席执行官**Sam Altman**（一位美国企业家、投资者和程序员）的一句话来重新阐述这个论点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let me reframe this argument with a quote from Sam Altman, who is the CEO of OpenAI.</p>
</details>

“**GPT-4**（Generative Pre-trained Transformer 4: 一种大型语言模型）是你们未来使用过的最笨的模型，而且会笨很多。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">"GPT-4 is the dumbest model any of you will ever have to use again by a lot."</p>
</details>

这句话出自2024年4月在**斯坦福大学**（Stanford University）举行的一次问答环节。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that quote was from a Q&A session at Stanford University in April of 2024.</p>
</details>

我本可以挑选大量其他引述。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are a ton of other quotes I could have picked.</p>
</details>

这个想法在AI评论中不断出现，而且几乎总是无人质疑。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The idea constantly comes up during AI commentary and it's virtually always goes unchallenged.</p>
</details>

那么，我为什么认为这是AI领域最大的谎言呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, why do I consider that to be the biggest lie in AI?</p>
</details>

因为支撑着AI投资泡沫的整个纸牌屋都建立在这个前提之上。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because the whole house of cards that props up the AI investment bubble is based on this premise.</p>
</details>

行业不希望你过多思考AI目前看起来是好是坏。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The industry doesn't want you to think too much about however good or bad AI might seem at the moment.</p>
</details>

他们希望你相信它只会变得更好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They want you to take on faith that it will only ever get better.</p>
</details>

如果他们真的能将改进层层叠加，那么似乎几乎可以肯定，AI最终可能会取代足够的工人，从而产生足够的收入来证明其当前的估值是合理的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if they could actually pile improvement on top of improvement, out top of improvement, it seems almost plausible that eventually the AI might displace enough workers to generate enough revenue to justify its current valuations.</p>
</details>

数万亿美元的投资都悬系于这个想法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are trillions of dollars of investment that are hanging on this idea.</p>
</details>

它是许多其他谎言的基础，比如“AI将取代所有程序员”或“AI将取代80%的工人”或“**人工超级智能**（Artificial Super Intelligence: 理论上超越人类智能的AI）即将到来并杀死我们所有人”等等。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's the basis for so many other lies like "AI will replace all programmers" or "AI will displace 80% of all workers" or "artificial super intelligence is going to happen soon and kill us all" or whatever.</p>
</details>

如果这个基础是错误的，如果AI的进步并非不可避免，如果明年的模型不保证比今年的更好，那么就没有理由相信他们试图向你推销的任何其他东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If that foundation is faulty, if AI progress is not inevitable and next year's model isn't guaranteed to be better than this year's, then there's no reason to believe in any of the other stuff they're trying to sell you.</p>
</details>

我认为这显然是一个谎言，因为现在**GPT-5**已经发布了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's clear that this was a lie because now GPT-5 is out.</p>
</details>

### GPT-5的性能与“指数级进步”的幻象

确实，有些人声称**GPT-5**实际上比**GPT-4**更智能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's true that there are some people that have claimed that GPT-5 is actually smarter than GPT-4.</p>
</details>

**Altman**当然也做过这样的声明。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Altman has certainly made that claim.</p>
</details>

但**Artificial Analysis**（一家AI性能评估公司）的这份报告显示，**GPT-5**在**LiveBench**（一种实时基准测试）和**SciCode**（一种编程测试）编码测试中的得分低于**GPT-4-mini**（GPT-4的精简版本）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this report from Artificial Analysis shows that GPT-5 scored lower than o4-mini on the LiveBench and SciCode coding tests.</p>
</details>

这就是证据。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now that's proof.</p>
</details>

**GPT-5**在某些方面有所改进，但在其他方面也有所退步。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are ways that GPT-5 is better, but there are also ways that it's worse.</p>
</details>

但最确凿的证据是，**OpenAI**被迫重新发布了**GPT-4**。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the most damning proof is that OpenAI was forced to re-release GPT-4.</p>
</details>

请记住，他们的说法并不是**GPT-5**会好一点、或好一些、或模糊地更好、或在某些方面更好但在其他方面更差。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now remember, it's not like the claim was that GPT-5 would be a little bit better or somewhat better or ambiguously better or better in some ways but worse than others.</p>
</details>

并且，行业需要的不仅仅是每一代AI都比上一代更好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the industry only needs for each generation of AI to be not better than the previous generation.</p>
</details>

它需要呈指数级地更好，因为他们向投资者承诺，他们所赚的钱至少到2030年将呈指数级增长。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It needs to be exponentially better because they're promising investors the money they make will grow exponentially through 2030 at least.</p>
</details>

行业喜欢展示一张关于AI的某个任意统计数据图表，选取过去几年中的某个范围，以显示其进展呈指数级增长。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The industry loves to pull up a graph of some arbitrary statistic related to AI over a cherry-picked range of the last few years to show how the progress looks exponential.</p>
</details>

我见过行业一次又一次地尝试这样做。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've seen industries try to do that over and over.</p>
</details>

如果你回顾几十年前，你会看到一些类似的图表，其中有几个看起来呈指数级增长的尖峰，紧接着就是下跌。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you go back decades, you'll see some graphs like these with several of those exponential looking spikes right before dips.</p>
</details>

从统计学角度来看，对于绝大多数正在观看此视频的你们来说，这是你们经历的第一次AI热潮。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Statistically, for the vast majority of you watching this, this is your first AI boom.</p>
</details>

而我们这些经历过过去AI热潮以及其间AI赢家的人，以前都见过这种情况。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Those of us that have lived through past AI booms, and the AI winners in between them, have seen this before.</p>
</details>

当然，现在大多数AI从业者都在说：“嗯，这次不一样了。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Of course, most of the AI people are now saying, "Well, this time is different."</p>
</details>

但AI从业者总是这么说。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then AI people always say that.</p>
</details>

也许你还记得**IBM**（International Business Machines Corporation: 国际商业机器公司）的**Watson AI**（沃森人工智能: IBM开发的一种认知计算系统）在**Jeopardy**（危险边缘: 一档美国电视问答节目）中击败世界冠军时是多么轰动一时？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe you remember how big a deal it was when IBM's Watson AI beat the world champion at Jeopardy?</p>
</details>

也许你还记得**IBM**曾说过它将彻底改变医疗保健行业？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe you remember how IBM said that it was going to revolutionize healthcare?</p>
</details>

AI的承诺几十年来一直被反复提及。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI promises have been repeated over and over for decades.</p>
</details>

### AI的本质：软件而非硬件

鉴于过去三十多年万维网时代计算机行业的进步，一项新技术能够持续几十年呈指数级增长的想法似乎并非不可能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So given that the progress in the computer industry over the last 30-some odd years of the worldwide web, the idea of new technology that grows exponentially for decades doesn't seem out of the question.</p>
</details>

毕竟，几十年来，计算机几乎每年都变得更快、更便宜。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">After all, computers have pretty much only gotten faster and cheaper year after year for decades.</p>
</details>

但变得更快的是**硬件**（Hardware: 计算机的物理组成部分），而AI，尽管行业希望将其描绘成那样，它们不是大脑，也不是硬件，它们是**软件**（Software: 计算机程序和数据）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what has gotten faster is the hardware, and AIs, despite the way the industry wants to talk about them, aren't brains, and they aren't hardware, they're software.</p>
</details>

我再说一遍，它们只是软件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let me say that again, they're just software.</p>
</details>

AI从业者谈论**大型语言模型**（LLMs: Large Language Models: 一种基于深度学习的AI模型）如何模拟人类大脑等等，他们表现得好像这意味着软件的规则不适用，但实际上它们是适用的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI folks talk about how LLMs are simulating human brain or the like, and they act like that means that the rules of software don't apply, but they do.</p>
</details>

这些AI只是运行着一个或一组算法来处理庞大数据存储的软件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These AI's are just software running an algorithm or set of algorithms against a huge data store.</p>
</details>

而且，所讨论的算法源自自然界中的某些事物，这并没有什么特别之处。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the fact that the algorithm in question is derived from something found in nature is nothing special.</p>
</details>

每一个3D游戏引擎都运行着大量源自自然界的算法，从重力到碰撞检测再到光线追踪，而第一人称游戏当然也无法幸免于困扰任何大型软件项目的性能问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every 3D game engine ever runs lots of algorithms derived from the natural world, from gravity to collision detection to ray tracing and first-person games certainly aren't immune to the performance problems that can plague any large software project.</p>
</details>

**生成式AI**（Generative AI: 能够生成文本、图像或其他媒体的AI）很酷也很有用，但多年来已经出现过许多更酷、更有用的进步。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Generative AIs are cool and useful, but there have been lots of cooler and more useful advances over the years.</p>
</details>

我本想在视频中加入一个部分，探讨**LLMs**在计算历史中的位置，以及我如何不认同AI行业喜欢自我定位的方式，但我想说的内容太多，以至于需要单独制作一个视频，所以该脚本正在编写中，未来会发布，如果您对此类视频感兴趣，请订阅。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I had a section in the video here going into where I think LLMs fit into the history of computing and how I disagree with the way the AI industry likes to position itself, but what I wanted to say grew to the point that it needed its own video, so that script is in progress and that'll happen, so subscribe if you're interested in seeing a video like that.</p>
</details>

### 软件的局限性与“更好”的定义

所有软件都有局限性，**LLMs**也不例外，软件并不会像过去60年左右的硬件那样，每一代都自动变得更快更好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All software has limitations, and LLMs are no exception, and software doesn't automatically get faster and better every generation the way the hardware has for the last 60 or so years.</p>
</details>

你的手机每次更新软件后都变得更快了吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Has your phone always gotten faster every time you've updated the software?</p>
</details>

我的肯定没有。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because mine sure hasn't.</p>
</details>

你能诚实地说，每一个版本的**Microsoft Windows**（微软视窗: 微软公司开发的操作系统）都明确地比前一个版本更好吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Can you honestly say that every version of Microsoft Windows has been unambiguously better than the version before it?</p>
</details>

该死的**Windows 98**（微软视窗98: 微软公司于1998年发布的操作系统）！把**Bill Gates**（比尔·盖茨: 微软公司联合创始人）叫过来！
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">F***ing Windows 98! Get Bill Gates in here!</p>
</details>

你告诉我们**Windows 98**会更快、更高效，并且能更好地访问互联网！
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You told us Windows 98 would be faster and more efficient with better access to the internet!</p>
</details>

它更快，超过500万！
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is faster, over 5 million!</p>
</details>

那么**Microsoft Word**（微软文字处理软件）、**Excel**（微软电子表格软件）、**Adobe Photoshop**（奥多比图像处理软件）呢？**Acrobat PDF reader**（奥多比PDF阅读器）又如何？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How about Microsoft Word? Excel? Adobe Photoshop? How about the Acrobat PDF reader?</p>
</details>

几十年来它只会变得更好吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Has that only ever gotten better over the decades?</p>
</details>

你认为**Adobe**（奥多比: 一家软件公司）为什么推动所有人转向订阅许可？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why do you think Adobe pushed everyone to subscription licenses?</p>
</details>

因为人们不再每年购买新版本了，因为新版本根本没有更好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because people weren't buying the new version every year anymore, because the new versions just weren't better.</p>
</details>

软件并没有一条每年都会变得更好的明确路径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Software doesn't have a clear path to get better year over year.</p>
</details>

软件运行的硬件可以变得更快，有时这也会让软件变得更快，但有时今年的软件版本甚至比去年更慢，即使是在新的、更快的计算机上运行也是如此。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The hardware it runs on can get faster, and sometimes that causes software to get faster too, but sometimes this year's software release is even slower than it was last year, even when running on new, faster computer.</p>
</details>

这可能是由于**软件臃肿**（Software Bloat: 软件因功能过多或代码效率低下而变得缓慢）造成的，新增的功能导致旧功能不得不执行你不在乎的工作，以及不断添加旨在给公司一个理由来证明让你升级是合理的那些东西，直到公司最终放弃并宣布：“我们不再支持这个版本了。无论你喜不喜欢，都请切换到新版本，当然还要为此付费，否则你将受到从现在起任何人发现的每一个漏洞的攻击。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This can happen because of software bloat, new features that are added that cause the old features to have to do work that you don't care about, the constant addition of stuff that is intended to give the company a reason to try to justify making you upgrade, 'til the company just gives up and declares "We're not supporting this version anymore. Switch to the new version, whether you like it or not, and pay us for the privilege, of course, otherwise you're going to get pwned by every bug that anyone finds from now on."</p>
</details>

有人提到**Windows 10**（微软视窗10: 微软公司发布的操作系统）吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Windows 10 Anyone?</p>
</details>

改进硬件是显而易见的，可能不容易做到，而且通常确实不容易，但衡量你是否做到了却相当容易。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Making the hardware better is clearly understandable, might not be easy to do, and it often isn't, but it's pretty easy to measure whether you did it or not.</p>
</details>

目标是“就像上一个版本一样，但更快，或者能够并行处理更多事情，或者两者兼而有之。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The goal is, "just like the last version, but faster, or able to do more things in parallel, or both."</p>
</details>

软件并非如此。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Software isn't like that.</p>
</details>

“更好”这个概念并非自动清晰。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The idea of "better" isn't automatically clear.</p>
</details>

定义你希望软件做什么需要付出大量努力，也需要时间，通常你做得越快，最终的软件就越粗糙。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It takes a lot of effort to define what you want software to do, and it takes time, and usually the faster you go, the sloppier the resulting software turns out to be.</p>
</details>

AI也存在这个问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI has this issue.</p>
</details>

这个“每个版本都会更好”的AI谎言的问题之一在于，如何以可操作的方式定义“更好”、“更智能”或“更笨”根本不清楚。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Part of the problem with this "every version will be better" AI lie, is that it's not at all clear how to define "better", or "smarter", or "dumber", in an actionable way.</p>
</details>

而且关于“智能”究竟是什么，存在大量的讨论甚至争论。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there's a lot of discussion and even arguments about what "intelligence" even is.</p>
</details>

据说**OpenAI**将**通用人工智能**（Artificial General Intelligence, AGI: 理论上能够执行任何人类智能任务的AI）定义为：“在大多数具有经济价值的工作中表现优于人类的高度自主系统。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">OpenAI is said to define artificial general intelligence as, quote, "highly autonomous systems that outperform humans at most economically valuable work."</p>
</details>

这作为一项规范并没有帮助。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's not helpful as a specification.</p>
</details>

你无法从中列出待办事项，而且他们非常匆忙，所以这对他们来说不是一个成功的良好设置。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can't make it to-do list out of that, and they are in a huge hurry, so this is not a setup that's great for success for them.</p>
</details>

### 软件权衡与AI的独特挑战

商业规模的软件项目总是关于**权衡**（Trade-offs: 在不同目标之间进行取舍）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Commercial-sized software projects are always about trade-offs.</p>
</details>

你可以使这部分运行得更快，但这会影响其他部分。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can make this part go faster, but it affects the other parts.</p>
</details>

**缓存**（Cache: 临时存储数据以加快访问速度的机制）或**索引**（Index: 用于快速查找数据的数据结构）可以加快读取速度，但会使写入操作变慢且更复杂。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A cache or an index can make reads faster, but it makes the write operation slower and more complicated.</p>
</details>

你可以添加其他新功能，但这会增加客户需要记住和跟踪的事项，软件也因此变得更难使用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can add other new features, but that's one more thing the customer has to remember and keep track of, and the software becomes that much harder to use.</p>
</details>

我见过一种可怕的软件项目失败情况，并且我经常谈论它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's a horrible failure condition of software projects that I've seen happen, and I talk about a lot.</p>
</details>

它通常被称为“**打地鼠**”（Whack-a-mole: 形容修复一个bug却导致另一个bug出现的问题）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's commonly referred to as "whack-a-mole."</p>
</details>

每次你在这个软件的某个部分修复一个bug或添加一个功能时，在软件的另一个部分就会出现新的bug或故障。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every time you fix a bug or add a feature over here in this part of the software, some new bug or failure pops up over there in some other part of the software.</p>
</details>

专业的软件工程师会做很多事情来尝试防止这种情况发生，但由于许多你们可能不关心的原因，其中许多技术不适用于机器学习和基于神经网络的项目。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are a lot of things that professional software engineers do to try to prevent this from happening, but a lot of those techniques aren't available to machine learning and neural net-based projects for reasons that a lot of you probably don't care about.</p>
</details>

我在我的另一个频道上发布了一个关于这个话题的视频，以及它如何与《星际迷航》和编程语言的历史相关。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I put up a video on my other channel about that and how it relates to Star Trek and the history of programming languages.</p>
</details>

如果您有兴趣深入了解，我会在下方附上链接。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'll put a link to that below if you're interested in a deeper dive.</p>
</details>

我们确实知道，将模型调整得擅长某一方面，往往会使其在其他方面表现更差。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We do know that tuning a model to be better at one thing often makes that model worse at other things.</p>
</details>

文献将这种效应称为“**负迁移**”（Negative Transfer: 机器学习中，模型学习新任务时遗忘旧任务知识的现象），随着模型变得越来越大，训练数据越来越多，每一次新的训练都可能对更多事物产生负面影响，甚至可能导致一个被称为“**灾难性遗忘**”（Catastrophic Forgetting: 神经网络在学习新信息时完全或部分遗忘之前学到的信息）的问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The literature calls this effect 'negative transfer', and as models get larger, more and more training gets added, and each new training has more things that it might negatively affect, it can even lead to a problem called 'catastrophic forgetting'.</p>
</details>

你猜怎么着？这不是一件好事。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Guess what? It's not a good thing.</p>
</details>

行业中正在进行多项研究，试图缓解这个问题，但你需要明白的是，这不是一个有明显答案的简单问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are a number of lines of inquiry going on in the industry trying to mitigate this, but the thing you need to understand is this is not a trivial problem with an obvious answer.</p>
</details>

这条路上没有自动的胜利。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There just aren't automatic wins on this path.</p>
</details>

没有理由相信它会一直变得更好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's no reason to believe that it's always going to get better.</p>
</details>

AI公司对每个新模型都有他们喜欢指出的特定**基准测试**（Benchmarks: 用于评估性能和质量的标准测试），我毫不怀疑每家公司都能为发布的每个新模型指出某个基准测试，以证明其有所改进，但在精心挑选的基准测试集合上取得更高的分数，并非“更智能”或“更好”的定义。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The AI companies have particular benchmarks that they love to point out with each new model, and I have no doubt that there will be some benchmark that each company can point to for each new model released to make the argument that it's an improvement, but higher scores on a cherry-picked collection of benchmarks is not the definition of smarter or better.</p>
</details>

就像我之前提到的，**GPT-5**在**LiveBench**和**SciCode**上的得分较低一样，每个新模型很可能（如果不是必然）在某些任务上表现不如旧版本，当然你也不能指望AI公司会宣传这一点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like with GPT-5 scoring lower on LiveBench and SciCode, as I mentioned earlier, it's quite possible, if not likely, that there will be tasks that each new models do worse on than previous versions, not that you would expect the AI companies to advertise that.</p>
</details>

**OpenAI**正开始尝试通过幕后的**路由**（Routing: 将请求导向不同模型的机制）来部分缓解这个问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">OpenAI is starting to try to mitigate this somewhat, with routing under the covers.</p>
</details>

现在，当你向**GPT**发送请求时，一个路由进程会查看该请求，并选择将请求转发给几个模型中的哪一个。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, when you send a request to GPT, a router process will look at the request and choose which of several models to forward the request on to.</p>
</details>

这将帮助他们隐藏特定模型在某些任务上退化到不良表现的地方，但这只是权宜之计。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This will help them hide any places where particular models have regressed to poor behavior on certain tasks, but it's just a band aid.</p>
</details>

### 结论：不要相信这个谎言

总而言之，这些AI是软件，而不是硬件，没有理由接受AI公司所说的从现在起每个模型都会比你现在拥有的或那时拥有的更好，而且有几个原因，包括一些学术研究表明，至少对于某些任务来说，情况可能恰恰相反。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to recap, these AIs are software, not hardware, and there's no reason to accept the lie from the AI companies that every model from now on will be better than the one you have now, or the one you have then, and there are several reasons, including some academic research that indicate that, at least for some tasks, the opposite may well be true.</p>
</details>

不要相信这个谎言，不要重复它，当你听到它时要指出来，即使这意味着有时你不得不指出像**Hank Green**这样不加批判地重复行业论调的人。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Don't believe the lie, don't repeat it, and call it out when you hear it, even if that means that sometimes you have to call out somebody like Hank Green for uncritically repeating industry talking points.</p>
</details>

因为假装软件总是会自动变得更好，最终会导致一个漏洞更多的互联网，而互联网已经有太多的漏洞了，任何持不同意见的人，要么是在推销什么，要么是在重复推销者的话术。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because pretending that software always automagically gets better is how you end up with an even buggier Internet, and the Internet already has far too many bugs, and anyone who says differently is selling something, or they're repeating talking points from someone who's selling something.</p>
</details>

感谢观看。大家在外要小心。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks for watching. Let's be careful out there.</p>
</details>