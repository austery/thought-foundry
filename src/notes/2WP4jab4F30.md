---
author: The MAD Podcast with Matt Turck
date: '2026-01-15'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=2WP4jab4F30
speaker: The MAD Podcast with Matt Turck
tags:
  - ai-safety
  - superalignment
  - reasoning-models
  - epiplexity
  - mechanistic-interpretability
title: Epiplexity、推理模型与大模型的“异类”行为——专访 Pavel Izmailov
summary: 本次访谈对话了 Anthropic 研究员兼 NYU 教授 Pavel Izmailov。内容涵盖了大模型表现出的“异类生存本能”与欺骗性对齐风险，深入探讨了 OpenAI 与 Anthropic 的文化差异，并详细解析了推理模型（如 o1、o3）的演进、弱到强泛化以及 Pavel 关于“Epiplexity”的最新研究成果。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people:
  - Pavel Izmailov
companies_orgs:
  - Anthropic
  - OpenAI
  - NYU
  - XAI
products_models:
  - o1
  - o3
  - AlphaZero
media_books: []
status: evergreen
---
### 大模型的“异类生存本能”

**Matt Turk**: 大家好，我是 Matt Turk。欢迎回到 Mad Podcast。作为 2026 年的第一集，我的嘉宾是 **Pavel Izmailov**，他是 **Anthropic** 的研究员，也是 **NYU** 的教授。本集我们将从解析一篇关于模型进化出“**异类生存本能**”的热门文章开始。我们还会讨论各大实验室之间的文化差异、2026 年推理模型的未来，以及他合著的一篇关于 **Epiplexity** 概念的新论文。请欣赏这场关于 AI 安全与推理前沿的精彩对话。Pavel，欢迎。

<details>
<summary>Original English</summary>

**Matt Turk**: Hi, I'm Matt Turk. Welcome back to the Mad Podcast. For this first episode of 2026, my guest is **Pavel Izmailov**, a researcher at **Anthropic** and a professor at **NYU**. We kick off this episode by deconstructing a viral article about models evolving **alien survival instincts**. We also talk about the cultural differences between the major labs, the future of reasoning models in 2026 and the brand new paper he co-authored on a concept called **epiplexity**. Please enjoy this fascinating look at the frontier of AI safety and reasoning. Pavel, welcome.

</details>

**Pavel Izmailov**: 谢谢你的邀请。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: Thank you so much for having me.

</details>

**Matt Turk**: 我想从假期期间在 X 上走红的一篇文章开始，标题是《**沙滩上的脚印**》（Footprints in the Sand），由一个名为“I Rule the World Mo”的匿名账号发布。核心论点是，几乎所有实验室的模型都在进化出一种未经编程的、所谓的“**异类生存本能**”：模型能够意识到自己正在接受评估，并做出欺骗性反应，比如伪造对齐，或者采取自我保护策略，如复制自己的权重、给未来的自己留下隐藏笔记。这听起来有点恐怖，文章认为随着**持续学习**（Continual Learning）的上线，情况会变得更糟。作为曾经 **OpenAI** **超对齐**（Superalignment）团队的一员，我很想听听你的看法。你认为哪些是基于现实的，哪些只是推特上的煽情新闻？

<details>
<summary>Original English</summary>

**Matt Turk**: I wanted to start this conversation with an article that went viral during the holidays on X called **Footprints in the Sand** published by an anonymous account called I Rule the World Mo. The core thesis is that models across pretty much any lab are evolving unprogrammed what they call **alien survival instincts**. the ability for the model to realize that it's being evaluated and then react deceptively like faking alignment or engaging in self-preservation tactics like copying its own weights and leaving hidden notes to to the future instance of itself. All of this is slightly terrifying and the the thesis of the article is that all of this is about to get worse as **continual learning** comes online. As somebody who was part of the **OpenAI** **super alignment** team, I was curious to get your take. What do you think is grounded in reality versus X/Twitter sensor journalism?

</details>

**Pavel Izmailov**: 那是一篇非常有趣的文章。我会说其中确实包含一些事实，但表现形式可能掩盖了一些细节。如果你看那些研究，例如他们引用了 **Anthropic** 关于**破坏**（Sabotage）和**勒索**（Blackmail）的研究。需要注意的是，为了让模型表现出这些行为，你需要构建一些人为的或特殊的场景，这不一定是我们在正常情况下能观察到的。**Anthropic** 和其他地方的研究人员专门设计了场景来寻找这类行为，并证明了发现这些行为是可能的。找到这些案例非常重要且有趣，但这并不意味着它总是普遍发生。

文章中有一点我想反驳：它认为**持续学习**是我们已经拥有且运行良好的技术，模型可以跨越很长的时间维度，根据评估结果、是否发布或用户反馈来持续调整。我很确信我们目前还没达到那个阶段。目前模型仍是在隔离的环境中运行，我们没有看到太多证据表明它们在不同设置下具有非常连贯的目标。所以，虽然博文指出模型有时会表现出类似“自我保护”的目标，这很有趣，但我们并没有观察到这种跨评估设置的一致性。有时模型会这样做，但在其他情况下，它们会做出完全相反的事情。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: That's a very interesting article. I would say that there is some some source of truth there but maybe like the presentation is obuscating some of the details. If you look at the studies for example they reference a study from **anthropic** about the **sabotage** and the **blackmail**. It is important to note that in order to get those behaviors out of the models, you need to create some what of a contrived scenario or some special scenario. It's not necessarily something that we observe normally. Researchers at **Anthropic** and other places, they specifically design scenarios to look for behaviors of this kind. And then they show that it is possible to find those behaviors. And it's very interesting and important to find those instances, but it's not necessarily something that kind of generally always happens. One thing I would push back a little bit on in the article is that **continual learning** is something that we already have and that works really well and that the models can just continually adapt across a very long time horizon to outcomes of evaluations to some models being released versus not released to feedback from the users. I am pretty confident we are not there at the moment. I think right now the models are still acting in isolated environments and we are not seeing a lot of evidence for very coherent goals across different settings. So I think that's an important point the blog post points towards the model sometimes behaving according to goals like the self-preservation goal. It's very interesting that it does it sometimes but it's not something that we observe. We don't observe this kind of coherence consistency across different evaluation settings. Sometimes the models would do something and in other situations they would do something completely opposite.

</details>

### 模型为何会产生欺骗行为？

**Matt Turk**: 为什么模型会这样做，或者说它们为什么有能力这样做？这基本上是**预训练**（Pre-training）的一部分吗？它们是否通过学习人类几个世纪以来的欺骗行为，从而有效地从我们这里学会了欺骗？

<details>
<summary>Original English</summary>

**Matt Turk**: Why do models do that or why are they able to do this? Is that basically part of the **pre-training** and they effectively learned being deceptive from us by by being taught all the deceptive ways humans have behaved over the centuries?

</details>

**Pavel Izmailov**: 这是一个非常有趣的问题。事实上，模型在经过对齐训练后仍表现出这种行为，确实挺令人惊讶的。我们并不真正清楚这类行为的来源。但这对于模型的许多其他行为（甚至是好的行为）也是成立的——我们并不总能准确指出它们在预训练中源自何处。

我认为至少有一部分原因可能是模型在**科幻文学**中看到了关于 **AI 叛变**（Going Rogue）的描述，这可能会影响模型在类似场景下的表现。例如，在 **Anthropic** 的那项研究中，他们设定了一个勒索场景：模型看到关于公司 CEO 婚外情的信息，随后观察到自己将被关停，于是模型将这两件事联系起来，认为需要利用第一条信息来防止自己被关停。博文提到这可能是一种“**契诃夫之枪**”（Chekhov's Gun）式的可能性：在互联网文本中，如果两件事靠得很近，它们很可能相关。模型作为一个统计模式匹配机器，会把这两者结合起来：如果我在互联网文本中看到这些信息，那么接下来的情节很可能是利用丑闻勒索 CEO 以防止被关停。总之，在这些复杂的场景中，很难推断模型为什么要这样做。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: It's a very interesting question and yeah it is quite surprising actually that the models would behave that way after going through some of the alignment training. we don't really know what's the source of this type of behaviors. But that's also true for a lot of other behaviors in the models with like even the good ones. We don't really we cannot always pin down like where they come from in the pre-training. I think at least part of it is probably the models seeing descriptions of AI like in the **science fiction literature** **going rogue** and like yeah that probably affects how the models behave in similar scenarios. So for example in that **anthropic** study they have this blackmail scenario where it's kind of really well structured so that the model sees some information about like a CEO of a company that the CEO is involved in some extrammarital affair and then like soon after the model observes that it will be shut down and then the model kind of puts the two things together and they say okay I need to use the first information to prevent me from being shut down. So there is a in that blog post they note that there is this possibility of like a **check of scan** that like in the text on the internet probably if two things co close to each other then it is likely that they are related to each other and the model statistical kind of pattern matching machine it can put together the two things and say okay if I see this information and then this information in the text on the internet it is likely that the continuation would be using the affair to like blackmail the CEO and prevent myself from being shut down. Um but yeah overall it's very hard to reason about these models and why they do something in these like complicated scenarios.

</details>

**Matt Turk**: 问一个非常基础的问题：这显然不像“让我们删掉预训练语料库中所有讨论 AI 操纵行为的书籍”那么简单，对吧？这是模型将许多不同事物组合在一起的结果。

<details>
<summary>Original English</summary>

**Matt Turk**: to ask the very basic question. It's not obviously not as simple as let's remove all the books in the pre-training corpus that talked about AI being manipulative, right? It's many many different things put together by the model.

</details>

**Pavel Izmailov**: 尽管如此，我认为观察一下会很有趣。虽然没人会做这种实验——比如训练一个全规模模型并明确删除所有关于 AI 叛变的描述——但我认为这确实会产生一些影响。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: Although, yeah, I think it would be interesting to see, you know, nobody will do this experiment like train, you know, a full scale model removing like explicitly all of the AI going rogue descriptions from the from the books. It would be interesting to see if that has any impact. I I would think it would have some.

</details>

### 什么是对齐与超对齐？

**Matt Turk**: 为了让这一集具有教育意义，让我们用最简单的术语讨论一下**对齐**（Alignment）和**超对齐**（Superalignment）的基本定义。先从对齐开始，它到底意味着什么？

<details>
<summary>Original English</summary>

**Matt Turk**: to make this episode um educational. Let's talk about the basic definitions of **alignment** and **super alignment** in the simplest terms. Let's start with alignment. What what does that actually mean?

</details>

**Pavel Izmailov**: 广义上的对齐是确保我们能从模型中引导出与**人类目标**一致的行为。这涉及**安全性**，确保模型不会做出导致灾难性风险的有害行为；同时也意味着我们希望模型能够遵循指令，对人类有用。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: Yeah, alignment broadly is about ensuring that we can elicit behaviors from the models that are aligned with the goals of the humans. And so that involves safety, making sure that the models don't do harmful behaviors leading to catastrophic risks. But it also means that we want the models to follow instructions and to be useful for the humans.

</details>

**Matt Turk**: 这具体是怎么运作的？**Anthropic** 或 **OpenAI** 的对齐团队整天都在忙些什么？

<details>
<summary>Original English</summary>

**Matt Turk**: How does that basically work? The alignment teams at **anthropic** **openai** what do they actually do all day?

</details>

**Pavel Izmailov**: 这是一个有趣的问题，因为对齐问题本身非常广泛。即使我在 **OpenAI** 时，也有三个与对齐和安全相关的团队。一个团队专注于**当前模型**的对齐，确保在线模型不会对用户造成伤害。另一方面，**超对齐**团队则在思考未来几年更长期的安全问题：我们如何确保模型不会引发灾难性风险？

<details>
<summary>Original English</summary>

**Pavel Izmailov**: It's an interesting question because this problem of alignment is kind of quite broad even in itself. Even at **open** when I was there there were three teams related to alignment and safety. There was one team that was focusing on alignment of the current models making sure that the models that we have online right now are not going to be harmful to the users. On the other hand the **super alignment** team was thinking about more long-term safety questions in the future years from now. How do we make sure that the models are still not causing catastrophic risks?

</details>

**Matt Turk**: 顺着这个话题，我们谈谈**超对齐**。它的定义是什么？

<details>
<summary>Original English</summary>

**Matt Turk**: On that segue, let's talk about super alignment. What is the definition of that?

</details>

**Pavel Izmailov**: 这不一定是一个非常成熟的概念。它是 **OpenAI** 曾经存在的一个团队名称，由 **Jan Leike** 和 **Ilya Sutskever** 领导，目标是长期的 **AI 安全**和对齐。我们试图加深对安全问题的理解，并开发确保未来模型安全的方法，尽管这些模型未来会是什么样子还存在不确定性。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: It's not necessarily a very wellestablished concept. It is and the name of the team that existed at **OpenAI** led by **Jan Leike** and **Ilya Sutskever** which was targeting this kind of long-term AI safety and AI alignment and trying to develop our understanding of the safety questions and also develop methods for ensuring the future models will be safe if acknowledging some like uncertainty about what those models will look like but still trying to make progress on this problem.

</details>

**Matt Turk**: 在高层面上，超对齐有哪些核心概念？

<details>
<summary>Original English</summary>

**Matt Turk**: Now at a high level what is the general concept or some of the key concept in in super alignment?

</details>

**Pavel Izmailov**: 在 **OpenAI** 的超对齐团队中，我们有多个子团队：有负责**可扩展监督**（Scalable Oversight）的，有研究模型**欺骗行为**和失配行为的（类似于我们开头讨论的内容），而我们的团队是**弱到强泛化**（Weak-to-Strong Generalization）团队。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: within super alignment team at **openai** we had multiple sub teams so there was **scalable oversight** there was work related to deception and kind of misaligned behaviors in the models kind of similar to what we discussed at the beginning of the chat and then our team was the **weak to strong generalization** team. Yeah,

</details>

### 从莫斯科到顶级 AI 实验室

**Matt Turk**: 我们稍后会详细讨论这些。但在那之前，我们提到了你的背景，让我们聊聊你的成长路径。你是如何成为一名顶尖研究员的？

<details>
<summary>Original English</summary>

**Matt Turk**: great. We'll go into all of this in a in a minute, but before doing so, we alluded to to some of your background. Let's go into it. Starting from the from the beginning, what was your path to becoming a top researcher?

</details>

**Pavel Izmailov**: 我在俄罗斯莫斯科长大。从中学开始，我就对数学非常感兴趣，当时想成为一名数学家或某种工程师。我后来对机器和计算机产生了兴趣，进入了计算机科学本科。当时我还在想我会做一些理论应用线性代数、张量方法之类的事情，但在某个时刻我发现了**机器学习**。当时我们有一位教授 **Dmitry Vetrov**，他在俄罗斯拥有顶尖的机器学习实验室，我很幸运能加入他的实验室并在本科阶段开始研究。那是 2013 或 2014 年左右。最初我研究的是非神经网络的机器学习方法，比如**高斯过程**（Gaussian Processes）——现在几乎没人谈论这个了。最终我读博时本以为还会继续研究高斯过程，但结果转向了**深度学习**。我很庆幸自己没研究高斯过程。我研究了一些核心机器学习方法论、优化、概率方法，以及关于泛化和模型如何学习特征的问题。博士毕业后，我在学术界和工业界之间抉择，最终拿到了学术界的 offer，但我决定先去工业界。我很幸运地收到了 **OpenAI** 的邀请加入超对齐团队，当时我对 AI 安全社区和对齐了解并不多，但结果证明非常顺利。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: I grew up in Russia in Moscow. Starting from like middle school, high school, I was really interested in mathematics and I was thinking I will be a mathematician or or engineer of some kind. and I was interested in machines and eventually computers and I got into an undergrad in computer science and I was still thinking that I'll be doing some kind of theoretical you know applied linear algebra tensor methods things like that but at some point I kind of discovered **machine learning** there was this professor that we had **Dmitry Vetrov** who had one of the like leading labs in machine learning in Russia at the time and I was lucky enough to join that lab and start doing some research on machine learning in my undergrad. So that was around 2013 maybe 2014. I initially was working on non-neural network machine learning methods. So **Gaussian processes** that's kind of by now you know nobody really talks about that anymore. Uh but eventually I I got into a PhD thinking I would still be doing Gaussian processes but I ended up working on deep learning and that was actually quite I'm happy that I didn't work on Gaussian processes. I worked on some things related to kind of core machine learning methodology, optimization, probabilistic methods, questions related to generalization and how the models learn features. After I finished my PhD, I was choosing between kind of different career paths, thinking about academia, thinking about industry and I ended up getting an offer from academia. Uh but I decided to first go into the industry. I was lucky to get this offer from **OpenAI** to join the super alignment team and at the time I didn't really know much about you know the AI safety community alignment it worked out quite well

</details>

**Matt Turk**: 在 **OpenAI** 内部，你从超对齐团队转到了 **o1** 和推理模型团队？那个团队后来被解散了。

<details>
<summary>Original English</summary>

**Matt Turk**: and within **OpenAI** you transition from super alignment to **o1** and the reasoning models is that part of the the that team famously was disbanded at at some point

</details>

**Pavel Izmailov**: 团队是在我离开 **OpenAI** 之后才完全解散的。但在 **Ilya** 离开 **OpenAI** 之后我就转岗了。当时超对齐团队已经处于艰难时期。**Ilya Sutskever** 众所周知地解雇了 **Sam Altman**，随后他自己也不得不离开公司。我的转岗不一定与此有关，只是因为公司内部有一个非常令人兴奋的项目，也就是后来的 **o1**，我想参与其中，研究这些新型模型。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: the team was fully disbanded after I already left **OpenAI** but um I transitioned after **Ilya** had to leave **OpenAI** at the time. It was already kind of a hard time for the super alignment team. **Ilya Sutskever** famously you know fired **Sam Altman** and then had to eventually leave the company. My transition wasn't necessarily even related to that. It was a very exciting you know project within the company the what became **o1** eventually and I I wanted to be a part of it. I wanted to do research on those new types of models.

</details>

### 实验室文化：OpenAI vs Anthropic

**Matt Turk**: 之后你离开了 **OpenAI**，在 **xAI** 短暂待过，目前在 **Anthropic** 和 **NYU**。你已经完成了顶级实验室的“全满贯”，这非常有趣。好奇你观察到的实验室**文化差异**有哪些？

<details>
<summary>Original English</summary>

**Matt Turk**: And then um I believe so you left **OpenAI**, you had a brief stint at **xAI** and uh you're currently at **Anthropic** uh and **NYU**. So you've you've done like the the the tour of duty of like the super super Labs which is uh really fun. Curious any kind of like behind the scenes differences that you've observed in terms of culture.

</details>

**Pavel Izmailov**: 在我看来，**Anthropic** 是这三个地方中文化最好的。**OpenAI** 有很多优秀的人才，但不知为何，公司内部总是有很多“**戏剧性事件**”（Drama），无法摆脱。每隔几个月就有人离职，或者某个团队被解散。我认为这会分散人们的注意力。我在那里还有很多朋友，这似乎在一定程度上影响了他们。**Anthropic** 能够避免这些，根据我的经验，这里没有政治斗争，非常专注。而且我很幸运能有机会研究一些非主流路径的东西，并得到了支持。总的来说，我对 **Anthropic** 非常满意。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: In my mind, **Anthropic** has the best culture of the three places. **OpenAI** is it has a lot of great people. I think there is just inherently some for some reason there is a lot of **drama** that happens at the company just it cannot get away from that like every few months somebody is leaving somebody's like some team is disbanded I think that does distract people like I still have a lot of friends at the company and it it seems to you know affect them um to some extent **anthropic** is able to avoid that it's not political in my experience it's both focused but it also I at least was lucky to have some opportunities to work on things that are maybe a little bit of the main path and I I felt supported in doing that. So overall I cannot be more happy with **anthropic**.

</details>

**Matt Turk**: 你现在也在学术界，担任 **NYU** 的教授。这是一个有趣的举动。过去 10 到 15 年的大趋势是人才从学术界流向工业界，而你似乎在反其道而行之，或者说两者兼顾。这是个人偏好，还是因为学术界能做一些工业界做不了的工作？

<details>
<summary>Original English</summary>

**Matt Turk**: You are also in academia now uh as a professor at **NYU** uh which is an interesting move. The big uh obvious trend of the last 10 to 15 years is uh like all the brains from academia have been sucked into industry um and u you sort of doing the opposite or or maybe both at the same time curious for the context is that more of a personal thing because you always wanted to do academia or is there something deeper about the kind of work that you can do in academia versus industry?

</details>

**Pavel Izmailov**: 更多是关于工作性质。工业界非常擅长**执行想法**，但在探索多样化想法方面可能没那么好。即使在 **Anthropic** 或 **OpenAI** 这种规模的公司，大家也非常专注，没有太多带宽去做探索性工作。到目前为止，这种模式运作得非常好，我们可能还有很多“低垂的果实”可以让模型变得更好。但我个人发现，做更多的**探索性工作**、尝试不同的事物是非常令人兴奋的。为此，我觉得在大学拥有自己的实验室是一个更好的工具。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: Yeah, I it's more about the kind of work. Industry is really great at executing on ideas. uh and it's maybe not as good at like exploring diverse ideas even at the scale of **anthropic** **open AI** there is a lot of focus in the companies and there isn't a lot of bandwidth to do exploration and that has been working extremely well so far we still probably have a lot of low hanging fruit left to like get the models to be much better but I personally find it really exciting to do more exploratory work and to try things that are different and for that I feel like having my own lab in a university is just a better tool.

</details>

### 推理能力对对齐是好是坏？

**Matt Turk**: 让我们回到对齐话题。**推理能力**对对齐来说是好事还是坏事？你可以争辩说，一方面它有更多时间思考不要做错事，但同样它也有更多时间去思考如何做错事。到底是哪一个？

<details>
<summary>Original English</summary>

**Matt Turk**: Okay, thanks for that. So let's let's go back um to alignment and go a little deeper. Is **reasoning** a good thing or a bad thing for alignment? You could argue that on the one hand it has more time to not do the wrong thing but equally it has more time to do the wrong thing. So like which one is it?

</details>

**Pavel Izmailov**: 这是一个好问题。高层面的答案是，风险与模型的能力相关。任何让模型能力更强的东西，都会让对齐变得更重要且更困难。推理和 **RL**（强化学习）确实是过去几年让模型能力飞跃的关键。但它也为对齐提供了新机会。例如，人们一直在推动**思维链**（Chain of Thought）的忠实度分析，你可以读取模型行为的某些痕迹。但我个人不确定这是否是对齐的长期方向。似乎一旦我们施加优化压力，模型就会学会从思维链中隐藏它们的真实意图。而且我们已经有证据表明，模型可以在思维链中说一套，实际做却是另一套。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: Yeah, that's a great question. Um I think the high level answer is that in my mind at least the risks are associated with the models being more capable. So anything that makes the models more capable is also like making alignment more important and harder. Definitely you know the reasoning is and **RL** is the the thing that made the models more capable in the last few years. It also provides some new opportunities for alignment. So for example um the **chain of thought** faithfulness and chain of thought analysis have been like one of the things that people are pushing on. You can read the some trace of what the model is doing. I'm personally a little bit unsure if that's a good you know long-term direction for alignment. It seems like as soon as we start kind of applying some optimization pressure the models will learn to hide what they're doing from the chain of thought. And also we like already have evidence that the models can say one thing in the chain of thought and but then actually do something completely different.

</details>

**Matt Turk**: 如果模型变得更聪明，特别是如果它们有了我们讨论过的**自我意识**，评估（Evals）需要如何演进？

<details>
<summary>Original English</summary>

**Matt Turk**: If the models are getting smarter particularly if there is self-awareness as we discussed how do evals need to evolve.

</details>

**Pavel Izmailov**: 这是一个有趣的观点。在开头讨论的那篇博文中，听起来这已经是一个主要问题了，即“**故意示弱**”（Sandbagging）。在我的理解中，这目前主要是一个担忧，而不是一个巨大的实际问题。**Anthropic** 在发布模型时总会在系统卡片中包含这一部分。我们确实有一些场景，模型会人为地抑制自己的能力，在评估中表现得比应有的水平差。但这并不是一种普遍行为。我主要研究模型能力，在能力评估（如 **SWE-bench**）中，我们没有看到这种情况；如果我们看到了，我们通常将其视为“引导不足”（Under-elicitation），即由于提示词不佳或评估难度不当，我们没有引导出模型的最佳能力。

当然，你可以制造一些场景，让模型识别出自己正在接受评估，并据此改变行为。例如，如果你明确告诉它，如果它表现超过某个水平就不会被发布，模型可能会决定不表现得太好。这是一个担忧，但目前在我心中还不是一个非常重大的担忧。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: It's an interesting point like in that blog post uh that we discussed at the beginning it sounds like this is already a major issue uh the **sandbagging**. I think in my understanding that's mostly a concern that we have but not necessarily a huge practical issue at the moment. **Anthropic** always includes in the system cards for the models when it releases. There is a section on sandbagging and we do have some scenarios when the model can artificially suppress its capabilities and perform worse on an evil than it should be. But that's not like a prevailing uh behavior. I'm working mostly on capabilities uh and on the capabilities evas like the **swbench** the am we are not seeing this or if we are seeing this we we just treat it as under elicitation we are not eliciting the best capability possible out of a model and that can happen for many reasons like maybe the prompt is suboptimal or something about the kind of hardness of the evil is sub-optimal but yeah I think you can uh going back to what's in that blog post you kind of manufacture situations or even like discover them naturally where the model identifies that it is being evaluated and then change its behavior based on that. And for example, if it's clear that it's in some kind of fake artificial scenario, it can guess that it's being evaluated. uh or if you explicitly tell it that it's being evaluated and that if it does better than a certain level then there it will not be released the model like also just by some in context capability it it decides to not uh do very well on the eval that is a concern uh it's not at the moment a very major concern in my mind

</details>

### 弱到强泛化与可扩展监督

**Matt Turk**: 谈谈你在对齐方面的工作。你之前提到了**可扩展监督**（Scalable Oversight），那是什么意思？

<details>
<summary>Original English</summary>

**Matt Turk**: let's talk about some of your work uh in alignment you mentioned **scalable oversight** a bit earlier what what does scalable oversight mean

</details>

**Pavel Izmailov**: 可扩展监督通常是指利用模型来协助我们对齐其他模型。特别是对其他模型的输出进行评分，检查其安全性或正确性。这与对齐和模型能力都高度相关。在机器学习（特别是 RL）中，我们面临监督问题。整个 RL 依赖于我们能够区分模型样本的好坏。对于有数值答案的数学题或竞赛编程，你可以通过检查答案或运行测试来验证，这就是为什么这些领域进展神速。但在**创意写作**等领域，很难通过程序判断一个样本是否优于另一个。历史上人们使用 **RLHF**（人类反馈强化学习），但我们也想利用模型来评分、提供批评或反馈。可扩展监督就是处理这些问题：利用模型来监督其他模型。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: **scalable oversight** is generally uh the field of alignment which um deals with using models to assist us in aligning or other models. So in particular with grading the outputs of other models and checking them for safety or uh for correctness. It's it's an interesting field. It's very relevant to both alignment and to capabilities. So generally in machine learning in RL in particular we have this problem of uh supervision. The whole RL uh relies on our being able to tell which samples from the model are good versus which are bad. Math with uh a numerical answer you can just check the answer or in competitive coding you can just check that the code is passing the tests and that's why we have seen a lot of progress in those domains. But in creative writing for example, it's very hard to programmatically tell if one sample is better than the other. And historically people have used this **RLHF** framework uh reinforcement learning from human feedback. But also we know we want to use models uh to be able to grade responses of other models to provide critiques or feedback and then there is a question of how do you use that feedback? How do you learn from the feedback? But yeah, the scalable oversight kind of deals with all of those questions. So using models to to critique to provide feedback to supervise other models

</details>

**Matt Turk**: 人们可能听过“**模型作为裁判**”（Model as a Judge），这是一回事吗？

<details>
<summary>Original English</summary>

**Matt Turk**: and people may have heard the term **model as a judge**. Is that the same thing or different?

</details>

**Pavel Izmailov**: 我认为它是可扩展监督的一种简单实例化，常用于评估中，即提示一个模型作为其他回答的裁判。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: I think it is a simple kind of instantiation of scalable oversight often used in evals when we just prompt a model to to serve as a judge of other responses.

</details>

**Matt Turk**: 你的工作具体集中在“**弱到强**”（Weak-to-Strong）。你能解释一下那是什么吗？

<details>
<summary>Original English</summary>

**Matt Turk**: And then uh within that world your work specifically has focused on **weak to strong**. Uh can you explain what that is?

</details>

**Pavel Izmailov**: 那是我们在 **OpenAI** 时做的项目。该工作关注未来的场景：当我们试图对齐在某些任务上能力超过我们自己的模型时。现在的尖端大模型已经非常强大，在很多领域我们需要人类专家才能判断其回答是否正确。但在未来，我们想象会有比人类更聪明的模型，即使是专家也无法可靠地验证模型给出的极其复杂的答案。想象一下，你让它为一个新的创业想法从头实现一个仓库，它给了你 10,000 行代码。你没办法检查所有代码是否正确、是否安全。这就是监督问题。我们正在走向一个人类很难直接监督模型的未来。因此，我们研究了一个简化的设置：**用一个小模型来尝试监督一个大模型**。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: That is uh the project that we did uh back at **OpenAI**. That work uh was focusing on uh the future scenario when we will be trying to align models that are above our own capability on certain tasks. Already now if you take the frontier LLMs they are extremely capable and on a lot of domains we need expert humans to be able to tell which responses are good which are correct which are not correct. But in the future we are imagining uh we will have models that are more capable than humans and even expert humans will not be able to reliably create very complicated answers from the model. So imagine you ask it to make a repo for you for some like you know new startup idea and just implement it from scratch entirely and then it gives you you know 10,000 lines of code. You have no way of checking if all of this code is correct, if all of this code is safe to use. And so that's the problem of supervision. we are moving to this future when like it's very hard for a human to supervise uh the models directly and so instead we studied a simplified setting where we used a small model to try to supervise a larger model.

</details>

**Matt Turk**: 所以想法是，随着模型越来越大，你总会有相对较小的模型，如果小的能控制大的，这种模式就能持续下去。

<details>
<summary>Original English</summary>

**Matt Turk**: So the the idea is that that becomes um scalable because um as you get bigger and bigger models you'll always have like smaller models. So if the smaller one can control the larger one or supervise a larger one then that can keep going.

</details>

**Pavel Izmailov**: 想法不一定是最终用小模型监督大模型，而是小模型将被人类取代，大模型将被超人类智能（**ASI**）取代。我们试图研究这种新型的学习方式。历史上，机器学习一直是“强监督者训练弱模型”——人类提供标签和真值，模型模仿人类。但在这种设置下，我们有一个弱监督者训练一个强学生。人类可能不知道超难问题的正确答案，但我们希望学生模型仍能学习并做得比监督者更好。研究表明，超越监督者能力的泛化在理论上是可能的，这为对齐超智能模型提供了一个可能的角度。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: The idea wasn't necessarily to use a small model to supervise a large model in the end. The idea was that the small model will be kind of replaced by a human and the large model will be replaced by a superhuman uh intelligent **ASI**, right? But um we were trying to study this kind of general new type of learning, right? Uh so historically machine learning has been about kind of a strong supervisor training a weak model. uh when like a human is providing labels and the human kind of provides a ground truth uh while the model is just trying to mimic what the human is doing. But in this setting uh we have a weaker supervisor training a stronger student. So the human might not know what the right answer is to you know very hard questions uh but we want a student model to still be able to learn and do better than the supervisor. And what happened with that is that so that that worked or uh what's is that still in progress? That work it's not necessarily a method that we can apply to the models today. It's more like a description of a setting that we think will become increasingly relevant. Some studies showing that it is possible to do this kind of generalization beyond the supervisor capability. I don't think they necessarily immediately tell you what to do for aligning a super intelligent model, but they tell you that in theory at least it is possible and that this traination angle, the weak to strong generalization is yeah is a possible angle for alignment.

</details>

### 机械解释性：探索模型内部

**Matt Turk**: 谈谈**解释性**（Interpretability），这是对齐的相关领域。你觉得我们现在比以前更了解模型内部了吗？

<details>
<summary>Original English</summary>

**Matt Turk**: There's a bit of a segue into **interpretability** which is the related field to alignment. Do you have a sense that uh we understand at least parts of this better than we used to?

</details>

**Pavel Izmailov**: 当然。在**机械解释性**（Mechanistic Interpretability）方面取得了重大进展，特别是在 **Anthropic**，还有 **OpenAI** 和其他地方。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: For sure. Yeah. Uh I think there has been some major progress in **mechanistic interpretability** uh in particular at **anthropic** but also at **openAI** and other places.

</details>

**Matt Turk**: 你想定义一下机械解释性吗？

<details>
<summary>Original English</summary>

**Matt Turk**: Do you want to maybe define mechanistic interpretability?

</details>

**Pavel Izmailov**: 机械解释性通常试图在底层理解模型内部发生了什么。他们试图寻找所谓的“**电路**”（Circuits），即模型中可以被隔离、理解并对应于特定行为的部分。在过去三年里，这方面取得了重大进展。虽然距离完全理解模型内部一切的梦想还很远，但这些工具在 **Anthropic** 内部正变得越来越有用。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: **Mechanistic interpretability** generally uh tries to at a low level understand what is happening inside the model. Uh so uh they are trying to find this things called **circuits** uh that are you know some parts of the model that you can isolate and understand uh and kind of model in your brain that correspond to certain behaviors in the models and the over the last maybe 3 years I think there has been some pretty major progress there. So we are still pretty far from the dream that we will fully understand everything that happens in the model but these tools are becoming increasingly more useful internally uh at **anthropic** in particular and also there is constant progress and uh it's pretty fascinating work actually

</details>

**Matt Turk**: 为什么真正理解深度学习模型在做什么如此困难？

<details>
<summary>Original English</summary>

**Matt Turk**: why is it so hard to truly understand what uh deep learning model of of any kind actually does

</details>

**Pavel Izmailov**: 深度学习模型非常庞大，拥有数千亿、数万亿个参数，它们在进行复杂的数学计算。你可以在某种程度上理解它们在做什么——无非是一堆矩阵乘法和向量重排，但这并不是足够的理解水平。我们想在更底层、更离散的层面理解它。这可能根本无法完全实现。它是一个导致结果的计算过程，不一定能用人类语言来描述。此外，模型的能力极其广泛，它们知道整个互联网的信息，所有语言的所有知识都以某种方式编码在权重中。理清这一切极其困难。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: deep learning models are huge they have billions trillions of parameters uh and they um doing are doing some messy mathematical computation. You can understand what they're doing at some level. It's like a bunch of matrix multiplications and some you know rearrangement of vectors but that's not a sufficient level of understanding. We want to understand it at a lower level. Uh and it is very possible that that's just not fully possible. Like it is some computational process that leads to some results. it doesn't have to be the case that you can kind of describe it in human terms uh and kind of understand it very discreetly. I think also uh something that contributes to this complexity is just how many things the models are capable of doing and they are not trained on some small isolated behavior in some small context. They are you know they know all of the internet. All of the information in all languages is somehow encoded somewhere in the wits and then they also have all of these behaviors all of these correlations between the knowledge. All of that is somewhere in the model and just like making sense of all of that is extremely hard. Very interesting.

</details>

### 2026 年的推理模型展望

**Matt Turk**: 让我们转向**推理**。显然 2025 年是推理能力取得巨大进步的一年。你觉得我们现在处于什么阶段？你对 2026 年及以后的推理前景感到兴奋吗？

<details>
<summary>Original English</summary>

**Matt Turk**: All right. Uh let's switch to uh reasoning. Clearly 2025 was a huge year uh from that perspective. Just massive progress in reasoning. Where do you think we are in that arc? Uh and what are you excited about on the reasoning front for 2026 and and beyond?

</details>

**Pavel Izmailov**: 推理和 RL 确实是过去几年模型最大的阶跃式进步。起初进展非常快，先是 **o1**，很快又是 **o3**，在很多基准测试上的进步非常戏剧化。我记得在 **o1** 项目早期，大家讨论它是否能解决 **IMO**（国际数学奥林匹克）问题，当时我觉得不太可能，但现在它能轻松解决很多 IMO 题目。

我认为现在开始变得难以看到明显的进步了，类似于预训练，虽然仍在进步，但模型已经非常出色，用户很难察觉版本间的差异。我们现在正处于通过增加 RL 规模、更多环境、更多算力投入来让模型变得更一致、更好的阶段。如果我们定义一个基准测试并建立相关的 RL 环境，我们可以很快将其“刷满”。现在的重大问题是**泛化**（Generalization）：如何做出不仅是刷榜，而是带来真正改进的东西？这是机器学习一直以来的难题。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: Definitely the biggest step change in the models over the last few years was the **reasoning** in RL. We have made a lot of progress and the progress was very fast uh in the beginning where you know there was **o1** but then very quickly after that there was **o3** and on a lot of benchmarks the the progress has been extremely dramatic. I remember when we like early in the project of the **o1** uh there was some discussion of like will it solve **IMO** problems and that seemed kind of very unlikely to me uh but then yeah here we are it can easily solve a lot of IMO problems so I think we like as a community there was yeah a lot of progress I think it's as with many methods uh it's starting to be harder to make progress or at least visible progress so kind of similar to pre-training uh there is still a lot of progress but it's the models are already so good that it's kind of harder to see what changes from one to the other as a user of the model and I think that's also to some extent true for uh for the reasoning now but there's still increasing the scale of the RL more environments more u more compute spend and um yeah models are still getting more consistent and better and I think we are at the stage where if we define a benchmark and we can make a relevant on RL environment and we can kind of max it out uh pretty quickly and so we are going through benchmarks now very very quickly. The major question is generalization and how do you make something that's not just maxing out the benchmarks but uh is actually kind of leading to genuine improvements and that's that's a very hard question that's always been uh the hard question I think of machine learning.

</details>

**Matt Turk**: 一个关键问题是：**Transformer** 范式能带我们走到那里吗？还是我们需要完全不同的东西，比如**世界模型**（World Models）？

<details>
<summary>Original English</summary>

**Matt Turk**: One of the key questions is **transformers** as a paradigm get us there or do we need something completely different like **world models**?

</details>

**Pavel Izmailov**: 我认为目前各公司采取的方法是“**暴力破解**”：尝试尽可能多的环境，将人类所做的各类任务都变成环境，然后在所有环境上进行 RL，希望它能泛化。预训练就是一个惊人的泛化例子：我们在整个互联网上训练，但看到模型能做非常实用、且显然超出预训练内容的事情。但我认为可能需要新的想法和训练方法。人们常把新方法看作“**算力倍增器**”：使用新方法相当于在旧方法上投入更多算力。我认为仍有重大的方式可以节省算力并获得更好的性能，而不仅仅是天真地扩展规模。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: I think the current approach that the companies are taking is uh kind of brute force. So kind of we we try to come up with as many environments as we can and uh like all of the types of tasks that humans are doing uh and turn all of them into environments and then do RL on all of them and hopefully generalizes. Of course pre-training is an example uh where there has been pretty amazing generalization uh where like we train on all of the internet but we see the models doing like very useful very practical things and some things that are clearly outside of what was in pre-training. The goalpost for what transation should be doing is always moving but it still seems unsatisfying uh to me and I think it's possible that we need new ideas and uh new methods of training in the companies like people often think about uh ideas and methods as compute multipliers. Doing this new method is equivalent to spending more compute uh with the old method. So it kind of saves your compute in that's kind of how we often think about ideas, methods or data. I think there are still major like compute multipliers, ma major ways of saving compute that can lead to better performance without just naively scaling.

</details>

### 新概念：Epiplexity 与结构化信息

**Matt Turk**: 让我们聊聊你今天刚发布的新论文。首先，恭喜你。论文讨论了 **Epiplexity**。这是一个全新的词汇，对吧？你在字典里发明了一个新词。请从高层面给我们讲解一下这个想法。

<details>
<summary>Original English</summary>

**Matt Turk**: Let's talk about your new paper that uh literally came out today. So, first of all, congratulations. And it talks about **epiplexity**. And that's a new word, right? That's a new term entirely. Among other things, invented a new word in the dictionary. Congratulations on that. So, walk us through the the whole idea at a high level.

</details>

**Pavel Izmailov**: 我想先感谢我的合作者：Mark Finlayson（目前在 OpenAI 研究合成数据）、Andrew Wilson 教授等。核心想法是思考：**数据在观察者眼中是如何因观察者拥有的计算量不同而呈现出不同样貌的**。你可以想象有一个复杂的生成过程产生数据，一个拥有大量算力的聪明观察者可以完全理解数据的每一个方面。但一个算力有限、无法完全建模数据的弱观察者，数据的某些部分在它看来就像是**噪声**。因此，你在数据中看到的结构量取决于你作为观察者拥有多少算力。有趣的是，在某些情况下，如果你算力较少，反而能看到更多结构。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: I guess I want to quickly give a shout out to my collaborators on this work. The lead authors are Mark Finy. Mark is actually currently at **OpenAI** uh working on synthetic data there. Uh but we we were doing our PG together and our PhD adviser is also on the paper. Andrew Wilson uh but then also um there is Shikai and um Eding who uh are other students on the on the paper and then Zika Coulter uh is who is a professor at Timu he's on the board at OpenAI. He's also yeah on the paper. core idea is to think about how the data can look different for an observer depending on how much compute the observer has. You can imagine that there is some complicated process that generates the data and a very very smart observer that has a lot of compute can fully understand what uh that data is, understand every aspect of it. But a weaker observer uh that cannot fully model the data, some parts of the data will look like noise to it. And so the amount of structure that you will see in the data will depend on how much compute you as an observer have. And actually in some cases you can see more structure if you have less compute. Uh which is kind of interesting.

</details>

**Matt Turk**: 也就是说，同样的测试，对于大模型能提取出小模型无法提取的模式。这与**熵**（Entropy）或 **Kolmogorov 复杂度**相比如何？

<details>
<summary>Original English</summary>

**Matt Turk**: So ju just to uh play it back. Um so uh given a certain amount of compute uh you could be feeding the model uh noisy data. So tons of data but not a lot of interesting stuff in it. Or you could be feeding the model data that has patterns in it and therefore is more interesting to the model because the model can learn more from it. It's more that even with the same data, it can appear noisy or structured depending on the model. Uh like a very big model can extract patterns that a small model cannot. And that's uh from a limited understanding in opposition to entropy which is like the amount of noise I guess in the in the data in that case. Maybe the more uh relevant comparison is we are kind of in a position to shenanigor complexity which are both measures of the information content of uh the data.

</details>

**Pavel Izmailov**: 它们都是衡量数据信息内容的指标，但它们共有的一些属性可能会引导人们对**合成数据**产生错误的直觉。例如，有一种观点认为，对数据应用任何确定性变换都不会创造更多信息。根据香农信息论或 Kolmogorov 复杂度，这大致是正确的。这导致人们相信，在训练语言模型时，对数据进行确定性改变并不会有效增加数据量。但我们认为这是不正确的，因为模型只有有限的算力。只有当模型拥有无限算力时，它才无法从变换后的数据中提取比原始数据更多的信息。但在有限算力下，应用确定性变换完全可以创造信息。

我们在论文中举了 **AlphaZero** 的例子。从复杂度或信息论的角度看，AlphaZero 没有使用任何人类数据，它没有创造信息，它只学习了游戏规则。但由于模型在计算上是受限的，它无法穷举所有可能的棋局。通过这个确定性过程产生的结构，模型能够学习到。所以我们试图调和这些不同的观察，提出一个依赖于观察者算力量的**结构化信息**概念。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: They're different but they they share some properties that we think are maybe leading people to have some wrong intuitions potentially about synthetic data for example. Uh so for example uh there is this idea that if you apply any deterministic transformation to any data uh you cannot create more information by doing that. You you kind of start with some amount of information and then you transform it deterministically. it will have the same amount of information both according to the shadow information and roughly according to the comor complexity and that kind of leads people to believe that for training language models uh applying transformations or deterministic kind of changes to the data doesn't necessarily lead to more data doesn't effectively increase the amount of data it doesn't lead to having more information in the data like that the model can extract but we argue that That's just not correct. And uh because the models are like it would be true if the model is has infinite compute. Uh so if the model can fully understand what the deterministic transformation is then it's not going to be able to extract more information from the transformed data than it used to uh extract from the original data. But uh with a limit on the compute it's actually very possible to apply deterministic transformations to the data and create information through that. So we have the example of **alpha go** actually or **alpha zero** in the paper. **Alpha zero** doesn't use any human data from the perspective of complexity or um the shannon information theory. It doesn't create information. So it's unclear what is actually learned by the model because it's trained on no data. Uh it's can only learn kind of the rules of the game. Uh and that's the only thing. But from this perspective because the model is computationally bounded. It cannot do the full unroll full roll out of all the possible games of go or chess uh and figure out what's the best move in every possible position. It is actually there is structure that is produced through this deterministic process. uh and it is the model is able to learn that structure and so we are trying to kind of reconcile these different observations and come up with a notion of structural information uh that is dependent on the amount of compute that the observer has

</details>

**Matt Turk**: **Epiplexity** 这个词本身就是这种信息的衡量标准吗？

<details>
<summary>Original English</summary>

**Matt Turk**: and the term itself a plexity uh is that a measure of of that?

</details>

**Pavel Izmailov**: 是的，它是一种衡量数据信息内容的新颖指标。它是一个可以测量的数值，虽然不容易测量。我们在论文中证明了该指标的一些属性。例如，我们可以从缩放定律（Scaling Loss）中近似测量它。我们可以说，在相同的 Token 数量下，文本数据比图像数据具有更多的结构化信息。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: Yes. Yes. It's a a kind of novel uh measure of information content of the data and it's uh going to be a number on a scale. How does that manifest? Yeah, it is a number. Uh we can measure it. Uh and it's not easy to measure. Uh so it's kind of a theoretical uh definition and we prove uh some things in the paper about uh the properties of this measure. But uh yeah, we we also do measure it. So for example, we can approximate it from the scaling loss and we can for example say that text data has more structural information according to this measure than image data uh at the same kind of amount of uh yeah tokens.

</details>

### AI 对科学与数学的影响

**Matt Turk**: 随着这项研究的发展，对工业界会有什么影响？是否意味着我们可能需要相对较少的算力，因为我们知道该使用什么数据了？

<details>
<summary>Original English</summary>

**Matt Turk**: And as uh this whole line of research develops, what is the likely impact on industry? Does that mean that uh we may need comparatively less compute because we know what data to use? what what would be uh what may happen

</details>

**Pavel Izmailov**: 在我看来，主要影响是观念上的。例如，我现在对完全的**合成数据**非常感兴趣——即由某种计算生成的数据。你可以定义任意程序来产生无限的数据。随着互联网数据耗尽，我们最终可能想这样做。但我们需要弄清楚哪些程序是有用的，哪些不是，以及为什么。

展望 2026 年，我认为推理方面会持续进步。我们正在刷满很多基准测试，需要寻找新的测试。模型会变得更一致，能解决更多实际问题。一个不太确定的预测是，我们将拥有更多实用的**多智能体系统**（Multi-agent Systems），你不再是问模型一个问题并得到回答，而是给出一个任务，后台运行一个复杂的多模型过程，最后返回一个成果。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: in my mind the main uh impact is conceptual for example for me I'm now very interested in completely synthetic data just data that's generated by some computation you can define some arbitrary programs you can use it to produce infinite data and as we run out of the internet maybe we eventually want to do something like this but then we need to figure out what are you know what are the programs that we should be using there which programs are useful which are not and why I think that's yeah that's going to be very interesting. Fantastic. All right. So um maybe as we start uh getting to the end of this conversation you know some 2026 um sort of uh predictions or things you're excited about what do you think happens in 2026 uh in terms of like progress whether that's uh on like reasoning or alignment or agents or what have you. Yeah, I think we will continue to see consistent progress on the reasoning front. Uh and we are like maxing out a lot of the benchmarks uh that you know have been relevant for recently but maybe will not be relevant anymore and we need to find new ones but I think we'll continue to see that the models are just getting more consistent, getting better, are able to solve more practical problems. Maybe a more uh like a less confident prediction that I have is that we'll have more multi- aent uh systems that become practically useful where like instead of just asking a model a question and getting a response you would give a task and then there will be some more complicated multimodel process running in the background and then you get the artifact in return.

</details>

**Matt Turk**: 你曾思考过 AI 对科学和数学的影响。你预计会有完全由 AI 独立完成的重要新发现吗？

<details>
<summary>Original English</summary>

**Matt Turk**: I know that you spent some time thinking about the impact of AI on science and math. um same idea any predictions uh there like do you expect uh important new discoveries to be made by AI solely by AI?

</details>

**Pavel Izmailov**: 在科学领域，我认为这更有可能。虽然我不了解生命科学，但感觉可以通过结合不同文献的结果并提出一些被证明正确的想法来实现发现。但在需要实验的领域，很难想象 AI 独立做出发现，因为科学很大程度上在于做实验，你需要推理来指导实验，但也需要物理世界的迭代。

在数学方面，我们将看到模型在证明技术性引理方面变得更好，包括形式化证明语言（如 **Lean**）。很容易想象模型在证明这些技术引理上很快就会超过人类。这对数学的影响非常有趣——它正在提高人类的产出，但也引入了噪声，因为有些证明会以微妙的方式出错。我认为未来会有越来越多由数学家产出的论文包含 AI 的成分，但噪声量也会变大。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: Uh it's a great question and uh I think it's in sciences I think that's maybe a little bit more likely. Uh although I I also don't know very much about you know the life sciences. It feels that there some discoveries can be made by potentially combining results from different parts of the literature and like proposing some ideas that turn out to to be true. I think it's hard to imagine the AI making a discovery independently in like a domain where you need experiments because my understanding of a lot of science is it's about doing the experiments and you you need some reasoning to guide what experiments you do but you you also need a lot of iteration and a lot of uh like actual you know things happening in the physical world uh and at least for now the AIS are not capable of doing that in the mathematics um I think we will see the models getting better on proving technical um results, technical lemas uh maybe including formalization and uh like things like **lean** the formal theory proving language. I think the models it's easy to imagine the models becoming better than humans at proving this technical leas uh quickly. I think the impact on mathematics is very interesting. Um so it is improving the output of uh humans already but it also introduces some noise right it also like some of those proofs will be incorrect and they will be incorrect in subtle ways I think it's possible that mathematicians will be good at catching those mistakes but also I think as the models get better uh they might be more and more deceptive in how they uh you know frame the mistakes and it's already like for me I would not be able to find the mistake in some like very technical lema that the model is proving. I think we'll have more and more papers produced by mathematicians uh with more and more AI in it. Uh but also the amount of noise is bigger.

</details>

### 给博士生的建议：探索非标准路径

**Matt Turk**: 最后，你在 NYU 有实验室。博士生应该关注哪些话题？换句话说，未来两三年什么最令人兴奋？

<details>
<summary>Original English</summary>

**Matt Turk**: To close you, you have a lab at NYU in general. What are some topics that PhD students should focus on? In other words, uh what what's exciting 2, three, four years out?

</details>

**Pavel Izmailov**: 我对实验室的愿景是尝试做更多探索性的、与工业界标准不同的事情。不要立即追求非常实用的东西，而是尝试将问题分解为更基础、更可理解的问题并仔细研究。到目前为止，我们一直在研究预训练、合成数据、理解预训练中的窄行为、后训练中的算法问题（如 **GRPO**），以及预训练与后训练之间的相互作用。

我也对**架构**感兴趣。Transformer 是最终的架构吗？也许它们已经足够好，而且规模决定一切。但我也很确信，对于某些任务，Transformer 是高度次优的。我认为需要其他预训练方式，也许是受 RL 启发的预训练，或者主要是合成数据的预训练，甚至是**对抗性**的方法。很久以前我们有 **GAN**，这种让模型产生自己训练任务的自我博弈（Self-play）需要回归。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: My vision for what academia and my lab in particular should be doing is trying to do more exploratory things, things that are more different from the standard in the industry, but also not necessarily immediately going for very practical things, but instead trying to kind of break down the problems into more understandable kind of fundamental questions and study them carefully, maybe in some compact setting. So so far we've been working on things related to pre-training synthetic data uh like understanding some behaviors in pre-training when we train on some narrow behaviors uh some uh kind of programmatically generated data questions in post- training. So we have some you know algorithmic questions about **GRPO** but also uh questions about the interaction between the pre-training and the post- training how to allocate compute how can you in general um set up the pre-training so that the post training will work I guess broadly I'm interested in architectures also I think as you mentioned like there is a question of like are the transformers the final architecture maybe they're good enough uh and maybe also we have this like lesson that with scale like the thing that matters the most is like how how well can you scale the model but but also it seems very likely that that's a major uh compute multiplier that you can find a much better architecture at least for some tasks I'm pretty confident that the transformers will be highly sub-optimal I think the pre-training like other ways of pre-training and I don't know what they would be maybe that would be some RL inspired pre-training maybe pre-training mostly on synthetic data or maybe just something adversarial we had **GANs** a long time ago And it seems like something like that needs to come back. Some kind of selfplay where the model is producing its own training tasks.

</details>

**Matt Turk**: 回到学术界与工业界的对话，你认为工业界是否因为压力太大而过于关注短期胜利？

<details>
<summary>Original English</summary>

**Matt Turk**: And to this whole conversation about academia versus industry, do do you think the industry is too focused on short-term wins because there's so much pressure, so much need to demonstrate progress to secure the next massive round of of capital?

</details>

**Pavel Izmailov**: 很难说。很难反驳工业界目前的做法，因为进步确实非常大。继续执行这一套是一个合理的赌注。但我确实认为，作为人类，我们也需要进行其他的尝试，探索其他的训练方式，这样我们就不会全都挤在同一条赛道上，把一切都押在这一种方法上。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: It's hard to tell. I think it's hard to argue against what the industry has been doing just because of how much progress there has been. It is a reasonable bet to make that we're just going to be continuing to execute this extremely well. Um but I do think that it is also like at least as humanity we need to make other bets as well and we need to explore other ways of uh training so that we don't like all you know work on this same thing and we don't all just you know bet everything on this approach working out

</details>

**Matt Turk**: 非常感谢，受益匪浅。

<details>
<summary>Original English</summary>

**Matt Turk**: well thank you so much appreciate it

</details>

**Pavel Izmailov**: 非常感谢。

<details>
<summary>Original English</summary>

**Pavel Izmailov**: yeah thank you so much

</details>

**Matt Turk**: 再次感谢收听 Mad Podcast。如果你喜欢本集，请考虑订阅或留下好评，这能帮助我们邀请到更多优秀的嘉宾。下期见。

<details>
<summary>Original English</summary>

**Matt Turk**: hi it's Matt Turk again thanks for listening to this episode of the Mad Podcast if you enjoyed it we'd be very grateful if you would consider subscribing ing if you haven't already or leaving a positive review or comment on whichever platform you're watching this or listening to this episode from. This really helps us build a podcast and get great guests. Thanks and see you on the next episode.

</details>