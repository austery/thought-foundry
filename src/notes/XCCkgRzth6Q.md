---
author: The MAD Podcast with Matt Turck
date: '2026-01-22'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=XCCkgRzth6Q
speaker: The MAD Podcast with Matt Turck
tags:
  - diminishing-returns
  - hardware-optimization
  - ai-agents
  - model-architecture
  - computational-efficiency
title: GPU扩展的终结？AI计算与智能体时代的未来展望
summary: 本期播客中，AI2的**Tim Dettmers**与**Together AI**的**Dan Fu**就通用人工智能（**AGI**）的未来展开辩论。Tim认为AI发展正遭遇硬件物理限制和创新瓶颈，回报递减。Dan则反驳称，当前模型远未充分利用现有硬件，通过软件优化、新一代硬件（如**Nvidia Blackwell**）和改进模型架构，仍有巨大性能提升空间。两人还深入探讨了AI智能体，特别是代码智能体，对各领域生产力的变革性影响，强调用户需适应并掌握利用这些工具的专业技能。对话最后展望了小型专业模型崛起和架构多样化等未来趋势。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - OpenAI
  - Together AI
  - AI2
  - Nvidia
  - AMD
  - Cerebras
  - Anthropic
  - Poolside
  - Reflection
  - Cursor
  - Carnegie Mellon University
  - UC San Diego
products_models:
  - GPT-5.2.2
  - H100
  - H800
  - B200
  - GB200
  - Flash Attention
  - Mega Kernels
  - Together Atlas
  - Sora 2
  - Gemini
  - Neotron
  - GLM 4.7
  - Opus 4.5
  - RTX 6000
  - Whimo
media_books: []
status: evergreen
---
### 引言：AGI的计算现实与智能体时代

**Matt Turk**: 我们的功能已经达到极限，硬件也已经达到极限，这就是我们所得到的。

<details>
<summary>Original English</summary>

**Matt Turk**: We have maxed out the features. We have maxed out the hardware. That's what we get.

</details>

**Matt Turk**: 几乎根据任何人五年前或十年前能写下的任何定义，我们基本上已经拥有了当时对**AGI**的愿景。

<details>
<summary>Original English</summary>

**Matt Turk**: By almost any definition anyone could have written down, let's say 5 years ago or 10 years ago, we basically have the vision of AGI that that we had back then.

</details>

**Matt Turk**: 任何指数级增长的事物最终都会趋于平稳，因为如果你需要资源，资源就会耗尽。

<details>
<summary>Original English</summary>

**Matt Turk**: Everything that grows exponential will level off because if you need resources, the resources will be exhausted.

</details>

**Matt Turk**: 你可以看到多达两个数量级的计算能力，即100倍的计算能力。

<details>
<summary>Original English</summary>

**Matt Turk**: You can see up to two orders of magnitude more compute available, 100x more compute.

</details>

**Matt Turk**: 如果你不懂得如何善用智能体，你就会被淘汰。

<details>
<summary>Original English</summary>

**Matt Turk**: If you don't know how to use agents well, you will be left behind.

</details>

**Matt Turk**: 你能把它推到多远？我认为现在是从事**AI**工作最激动人心的时刻。大家好，我是**Matt Turk**。欢迎收听**Matt**播客。今天，我们邀请了两位非常了解**AI**计算现实的嘉宾，对**AGI**进行一次特别的现实检验。他们是**AI2**的**Tim Dettmers**和**Together AI**的**Dan Fu**。在本期节目中，**Tim**认为我们正面临**回报递减**和严峻的物理限制，而**Dan**则认为我们仍有巨大的性能提升空间，并且今天的模型是硬件进步的滞后指标。随后，我们将转向一个有趣的实用讨论，关于如何使用智能体以及对2026年**AI**的期望。请享受这次与**Tim**和**Dan**的愉快对话。

<details>
<summary>Original English</summary>

**Matt Turk**: How far can you push it? I think it's never been a more exciting time to work in AI. Hi, I'm **Matt Turk**. Welcome to the **Matt** podcast. Today we have a special reality check on **AGI** with two guests who are very close to the computational reality of AI. **Tim Dettmers** of **AI2** and **Dan Fu** of **Together AI**. In this episode, the team argues that we are hitting diminishing returns and running into hard physical constraints while **Dan** argues that we are still leaving huge performance on the table and that today's models are lagging indicators of hardware progress. Then we shift into a fun practical discussion on how to use agents and what to expect from AI in 2026. Please enjoy this fun conversation with **Tim** and **Dan**.

</details>

**Matt Turk**: **Tim**和**Dan**，欢迎。

<details>
<summary>Original English</summary>

**Matt Turk**: **Tim** and **Dan**, welcome.

</details>

**Tim Dettmers**: 谢谢邀请。

<details>
<summary>Original English</summary>

**Tim Dettmers**: Thanks for having us.

</details>

### 嘉宾背景与研究方向

**Matt Turk**: **Tim**，几周前你写了一篇极具启发性和争议的博客文章，题为《为什么**AGI**不会发生》。几天后，**Dan**你用自己的博客文章进行了回应，同样引人入胜，题为《是的，**AGI**将会发生》。我很想了解一下你们的背景。你们两人都有一个非常有趣的特点，那就是在工业界和学术界都有所涉足。**Tim**，如果你愿意的话，可以先从你的背景开始。

<details>
<summary>Original English</summary>

**Matt Turk**: So **Tim**, a few weeks ago you wrote a great provocative blog post entitled Why **AGI** will not happen. And then **Dan**, a few days later you replied with your own blog post equally fascinating entitled Yes, **AGI** will happen. I'd love to go into your backgrounds. You both have the very interesting characteristic of being having a foot in industry and a foot in academia. So **Timmy** if you want to start with yours.

</details>

**Tim Dettmers**: 我是**卡内基梅隆大学**机器学习与计算机科学系的助理教授，也是**艾伦人工智能研究所**的研究科学家。我过去的研究主要集中在高效深度学习的**量化**上，这意味着**模型压缩**。将大型模型从16位压缩到4位左右。主要研究领域在此。例如，它是一种非常高效的**微调**方法。我们将模型压缩到4位，使用**适配器**，然后使用的内存比密集处理时少16倍。现在我正在研究**代码智能体**，我们将在大约两周内发布一个非常激动人心的版本。这是最先进的智能体，你可以快速将其专门化到私有数据，在任何你喜欢的代码库上获得强大的性能。是的，这非常令人兴奋。

<details>
<summary>Original English</summary>

**Tim Dettmers**: I'm assistant professor at **Carnegie Mellon University** machine learning and computer science department and also research scientists at the **Allen Institute for AI**. My past research has been mostly on efficient deep learning quantization. That means model compression. Take large models, compress them down from like 16 bit to something like 4bit. Key research has been there. For example, it's a very efficient fine tuning. We compress to 4bit, use adapters on the model and then use up to 16 times less memory than if you have dense both handling and now I'm working on coding agents that we have a very exciting release in about two weeks. State-of-the-art agents. You can quickly specialize to private data, get strong performance on any code base that you like. Um and yeah, that's very exciting.

</details>

**Matt Turk**: **Dan**。

<details>
<summary>Original English</summary>

**Matt Turk**: **Dan**,

</details>

**Dan Fu**: 嗨。我是**加州大学圣地亚哥分校**的助理教授，同时也是**Together AI**的内核副总裁。在工业界，我主要关注如何让模型运行得更快。**GPU**内核是实际将模型转化为在**GPU**上运行方式的关键。你可以把它们看作是专门的**GPU**程序。我**博士**期间和实验室的很多研究都集中在这方面。我开发了像**Flash Attention**这样的技术，它是一种高效的内核，用于我们今天使用的许多语言模型的核心操作之一。我还研究了**Transformer**的替代架构，比如**状态空间模型**等。在**Together AI**，我主要关注如何让我们今天拥有的最佳语言模型运行得更快。我认为，就在今天早上录制的时候，我们刚刚与**Cursor**发布了一篇博客文章，介绍了我们如何加速了他们的一些模型，并帮助他们在**Nvidia**的**Blackwell GPU**上推出了**Composer 2.0**。这就是我工作的一些内容。现在，让我们深入讨论**AGI**，然后在这段对话的第二部分，我们将讨论智能体和代码智能体以及你们对此的看法，因为我想确保我们涵盖了**AGI**这个话题。显然，这是一个每个人都在使用的术语，我认为我们都同意没有人真正知道它意味着什么，但为了这次讨论的目的，从你们的角度来看，**AGI**的一个有用定义是什么？

<details>
<summary>Original English</summary>

**Dan Fu**: Hey. So I'm an assistant professor at **UC San Diego**. And also my total VP of kernels at **Together AI**. So in industry, I focus a lot on basically making models go fast. So **GPU** kernels are the things that actually translate the models to how they run on on the **GPU**. You can think of them as as basically specialized **GPU** programs. A lot of my research in my **PhD** in my lab focused on that. So I I developed things like **Flash Attention** which was a efficient kernel for the one of the core operations of of a lot of the language models that that we use today. I also did research on sort of alternative architectures to **transformers**, things like **state space models** and and things like that. And **Together** I'm really focused on how do you make the best language models that we have today. How do we make them go faster? I think as of this morning's recording, we actually just released a blog post with **Cursor** about how we accelerated a bunch of their models and and helped them launch **Composer 2.0** on **Nvidia**'s **Blackwell GPU**. So that that's a a bit of a flavor of what I do. So let's get into this **AGI** discussion and then in the second part of this conversation we'll talk about agents and coding agents and your thoughts there because I want to make sure we cover that **AGI** obviously it's a term that everybody uses and I think we can all agree that nobody really knows what that means but for for purposes of this discussion what is a useful definition of **AGI** from your perspective?

</details>

### AGI的定义与现状

**Dan Fu**: 当然。是的，我认为是这样。我们在这系列博客文章中反复讨论的一件事就是**AGI**的含义。对我来说，我最近一直在思考的一点是，如果你看看我们今天所处的位置，看看我们今天拥有的模型，以及语言模型——我想我们稍后会更多地讨论智能体——几乎根据任何人五年前或十年前能写下的任何定义，当然，当你和**Tim**我开始攻读**博士**学位时，我们基本上已经拥有了当时对**AGI**的愿景。我们拥有可以编写代码的事物。它们可以编写人类文本，即使它们可能使用了过多的破折号或类似的东西，但它们确实能做这些非常非常惊人的事情。我认为我思考的一件事是，这在什么层面上会成为一场新的工业革命，这种技术将真正改变我们今天做事情的很多方式，并对软件工程产生巨大的经济影响。我觉得我们已经达到或接近这个阶段了。例如，有些东西可能非常专业，我不知道它们是否能编写世界上最好的**Fortran**和**Cobol**代码，但对于**Web**开发，甚至很多底层系统工程，它们已经非常出色了。我写博客文章的原因之一是，如果你思考我们今天所处的位置，我们可能已经拥有**AGI**，或者某种形式的**AGI**。如果还没有，那么下一代模型，也就是今天正在训练的模型，如果它们比我们今天拥有的模型稍好一些，那么我们就已经达到了非常惊人、非常疯狂的成就。

<details>
<summary>Original English</summary>

**Dan Fu**: Sure. Yeah. I think so. One one of the things that that we kind of discussed back and forth in in this set of blog posts is sort of what **AGI** means. For me, I think one of the things that I've been thinking about recently is that if you took where we are today with the models that we have today with the language models and I think you know we'll probably talk about this a bit more with the later with the agents by almost any definition anyone could have written down let's say 5 years ago or 10 years ago. Certainly when you know **Tim** you and I started our **PhDs** we basically have the vision of **AGI** that that we had back then. We have things that can write code. They can write you know human text even though you know maybe the they they use too many m dashes or or something like that but they can uh do do these really really amazing things. I think one of the things that I think about is at what level does this kind of become a new industrial revolution where you can where this technology is really going to change a lot of what the way that we do things today the the and have a huge you know really really great economic impact in terms of software engineering I feel like we're already there or almost there like uh there are there are things that may be super specialized like I don't know if they're going to be able to write like the best **forran** and **cobalt** code in the world um but for web development a lot of even a lot of low-level systems engineering, they're they're already really great. One of the reasons that that that I wrote my blog post was um if you kind of think about where we are today, you know, we maybe already have **AGI** or like some some form of **AGI**. And if not, then certainly the next generation of models, the models that today are training already. Um if they're at all better than what we have today, then we're we're we we've already hit something that's that's really amazing and and and and pretty wild.

</details>

**Tim Dettmers**: 实际上，当我写博客文章时，我注意到我忘了在文章中放入**AGI**的定义，尽管我的博客文章非常关注**AGI**。我认为这有时反映了我们对**AGI**的看法，我们没有仔细思考定义。我的意思是，有几种不同的定义，它们各有优缺点。我不会说，正如你之前所说，人们没有就一个定义达成一致。我只是提几个。我认为一个相当普遍的看法是，将**AGI**视为认知能力、认知任务。你能做哪些认知方面的事情？我的意思是，软件工程是非常认知的，写作是非常认知的，在空间中移动机器人则更偏向基因。你也可以说，你需要思考如何移动，这也是认知的一部分，但我认为大多数人会将其分开，并说所有数字化的东西都是认知的，而物理上的东西则超越了这一点。我认为有意义的是从经济角度来看：我们能否迎来另一场工业革命？这意味着**AI**是否足够有用，并且其用途如此广泛，以至于你希望在任何地方都使用它。它加速了各种事物，类似于计算机刚引入时的情况。生产力最初并没有提高，实际上是下降了，你需要经济中的**扩散**才能再次提升。我们可能会在更广泛的任务中看到**AGI**带来类似的情况，例如软件工程领域，其规模正在显著增长，但是的，我认为这很有用。

<details>
<summary>Original English</summary>

**Tim Dettmers**: When I wrote my blog post actually I um I noticed like oh I I forgot to put the definition of **AGI** my blog post even though my blog post is very much about **AGI** and and I think that sometimes sort of reflects how we think about **AGI** we don't think carefully about the definition I mean there are sort of um and I I thought about it before and I think there sort of uh different kind of definitions that have sort of advantages disadvantages I wouldn't say I mean as you said before there's not one definition that people agree on just to mention sort of a couple um and I think one that's sort of quite widespread is to see **AGI** as sort of cognitive abilities, cognitive tasks. What can you do cognitive? I mean and software engineering very cognitive writing very cognitive moving a robot in in space um that's more genetic um sort of you can you could also say like hey you also need to think about how you move that's also part of cognition but I think most people would separate that and um say everything digital is kind of cognitive and if you have physical that goes beyond that what I think makes sense is sort of this economic angle can we at another ind industrial revolution. What it means is is **AI** useful and it's so broad and useful that you want to use it everywhere kind of um it accelerates all kinds of things um similar to where computers were introduced productivity increase not initially a productivity actually went down and you need your diffusion in the economy to pick it up again. we might see something like that with **AGI** more broadly in task for like software engineering scale it's going up uh pretty significantly but yeah I think that is useful.

</details>

### AGI的计算现实与回报递减

**Matt Turk**: 让我们深入讨论争论的核心。**Tim**，你关于**超级智能**想法来源的说法让我觉得很有趣，如果你想谈谈那个。

<details>
<summary>Original English</summary>

**Matt Turk**: Let's jump into the the heart of the argument **Tim** I was amused by what you said about um where where all those ideas of a super intelligence uh come from if you want to uh talk to that.

</details>

**Tim Dettmers**: 是的，为了阐述整个叙述，有一些关于**AGI**的想法，它们非常根植于某种特定的思维方式。它来自**有效利他主义**社区和**理性主义**社区。我很久以前，也就是15年前，曾是这些社区的一员。如果你看**Twitter**，总会有人说“哦，我们两年内就能实现**AGI**”，然后一年后又说“哦，我们两年内就能实现**AGI**”，再过一年又说“我们两年内就能实现**AGI**”。我觉得这有点懒惰的思维，有点像活在自己的**信息茧房**里，没有接触到不同的想法。这也是我写这篇博客文章的主要动机之一，因为我觉得有些事情、有些想法，如果你去思考它们，它们可能会为目前存在的许多思维提供一个反驳点。

<details>
<summary>Original English</summary>

**Tim Dettmers**: Yeah and to sort of lay out sort of the entire narrative there are certain thoughts about **AGI** that is sort of very much rooted in a certain kind of thinking. Uh it comes from effective altruism communities of the rationality communities. I was part of this communities like long time ago that is now 15 years ago. If you look on **Twitter** there's always like oh we get **AGI** in 2 years and then one year later oh we get **AGI** in two years and one year later we get **AGI** in two years. I feel like it's a little bit of lazy thinking, a little bit of being in a bubble and not being exposed to different ideas. And that was one of the main motivations for me writing the blog post because I feel like there are some things some ideas that if you think about them um they might provide a counterpoint to a lot of the thinking that's out there.

</details>

**Matt Turk**: 是的。你和你核心思想是，这些想法与计算现实之间存在张力。这样说公平吗？

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah. And you and your c your core thinking is that um there is a tension between those ideas and the computational reality. Is that is that a fair way to put it?

</details>

**Tim Dettmers**: 是的，有一些物理组成部分，然后有一些思想组成部分，但它们具有相似的结构，这种结构基本上是**回报递减**。任何指数级增长的事物最终都会趋于平稳，因为如果你需要资源，资源就会耗尽。资源可以意味着不同的事物，如果你看物理方面，推进技术只会变得越来越困难。几乎任何研究或开发领域都是如此。事情变得越来越容易。你需要更多的资源才能取得进一步的进展，而进展的速度则越来越慢。因此，如果你看计算设备的物理现实，以及计算本身也具有特定的结构，所以基本上，有用的计算是两件事。首先，你需要从一个位置收集数据，并将其聚合到某个位置，然后将这些新信息组合起来，计算该信息的转换。你基本上想要组合已知的事物，并计算一些你以前不知道的新事物。有用的信息。有用的信息可以并且需要从你已经知道的信息中转换而来。如果你移动大量信息但不转换它，你就无法创造新信息。如果你对已经拥有的信息进行大量计算，你就会错过**长距离洞察**、**间接洞察**。我认为很多这方面实际上都映射到我们拥有的**神经网络架构**。最初我们有**卷积网络**，它们在所做的事情上非常有效，它们不会移动太多内存，它们进行大量计算，这意味着你的设备需要大量的**浮点运算**，而内存带宽并不是那么重要。一旦你进行非常密集的计算，非常大的矩阵，那么它就会朝着当前**神经网络**的方向发展，但在那里你仍然有**循环**的这个组成部分，基本上是关注先前的状态。但由于它是循环的，该计算的内存重用是最小的。而对于**Transformer**，你基本上有了这些大型矩阵，它们基本上计算并转换来自前一层的输入信息。然后你有了**注意力机制**，它现在计算跨时间或空间的信息。我认为这是计算信息最基本的两种方式。你希望将信息与自身关联，或者对该信息进行转换。但你也希望基本上将信息与**远距离相关**的信息关联起来。所以你想要**长期关系**，并且你想要基于你已经知道的信息进行转换。

<details>
<summary>Original English</summary>

**Tim Dettmers**: Yeah, there's some there's a physical component and then there's an idea component, but there similar structure and this structure is basically diminishing returns. Everything that grows exponential will level off because if you need resources, the resources will be exhausted. Resources can mean different things and if you look at the physical aspect um it gets just more and more difficult to advance technology. That is the case almost with any field of uh research or development. Um things get more more easily. You need more resources to make further progress and the pro progress sort of and goes uh lower and lower and so if you look at the physical reality of computational devices and then also computation itself has particular structure and so basically computation useful computation is two things. The first is you need to gather data from one location and aggregate it in a certain location where you then put this new information together to compute a transformation of that information. You basically want to combine um sort of known things and compute some new sort of um things that you didn't know before. Useful information. useful information can and needs to be transformed from information that you already know. If you move a lot of information around but you don't transform it, you can't make new information. If you do a lot of computation on the information that you already have, you miss out on the long distance insight, the indirect insights. I think a lot of this actually maps to the neural network architectures that we have. Um the beginnings we had convolutional networks they are very effective and what they doing they don't move much memory they do a lot of computation and that means your device needs a lot of flops and memory bandwidth is not that important once you go to very dense computation very large matrices then it goes in the direction um of the current neural networks but there you have still sort of this component of your recurrent um basically paying attention to previous states. And but because it's recurrence, the memory reuse of that computation is minimal. And with um transformers, you basically then had these large matrices that compute basically that transform the incoming information from the previous layer. And then you had a tension that now computes the information across time or space. And um I would argue these are the most two fundamental ways of computing information. You want relate information to itself or transformation of that uh information. But then you also want to basically relate information to um distantly related of information. So you want long-term relationships and you want a transformation based on what you already know.

</details>

### GPU性能瓶颈

**Matt Turk**: 你说这正在放缓，对吧？就像你在博客文章中有一句非常引人注目的话，你说**GPU**将不再有意义地改进。我们基本上已经看到了最后一代显著的**GPU**改进。

<details>
<summary>Original English</summary>

**Matt Turk**: And you say this is slowing down, right? like in your um blog post you have a pretty striking sentence where you say uh **GPUs** will no longer improve meaning fully. We have essentially seen the last generation of significant **GPU** improvements.

</details>

**Tim Dettmers**: 是的。这有两个组成部分，其中一个也是一个非常基本的东西，它是物理的，从这个意义上说，我提到了这两个组成部分：**内存移动**和**计算**。因此，计算只有在你将内存移动到进行计算的局部区域时才有用。现在这是一个**几何问题**。你需要有一个大的信息存储区，然后使用这个大的存储区将信息移动到你想要进行计算的地方。我们已经找到了物理上实现最优的方法。我们有一个大的慢速内存，那就是**DRAM**。然后我们把它移动到**缓存**。如果你看几何结构，这就是你快速完成它的方法。如果你有一定规模的计算，这是最优的。如果你有不同规模的**矩阵乘法**计算，那么你不想使用**CPU**，而是更像**GPU**，它具有更高的延迟但更高的吞吐量。你可以移动更多数据但速度更慢。是的，如果你看所有这些，你可以稍微调整一下你如何构建所有东西，比如缓存有多大，多少个核心共享它们。但最终，基本问题保持不变。你有一个几何问题。你只能以某种方式填充空间，这意味着你总是会有某种访问模式，具有一定的延迟，而最大的延迟是一个大的**DRAM**块，这是主要的瓶颈。这也被称为**冯·诺依曼瓶颈**，基于我们拥有的几乎所有计算机，这是一个将程序移动到执行程序的地方的瓶颈，对于**神经网络**来说，这基本上是将权重和输入移动到执行程序的地方，也就是**张量核心**。没有太多方法可以绕过这个瓶颈。唯一的方法是将内存存储在本地并在那里进行本地计算。有一些处理器做类似的事情。例如，这种**反向处理器**。所以它们在芯片上没有主要的**冯·诺依曼瓶颈**，但它们也需要将数据导入到该芯片中。因此，**冯·诺依曼瓶颈**基本上从芯片转移到你的存储或**2J网络**。所以你只是把它移开了，但仍然是同一个瓶颈。你需要加载可能在磁盘或内存中通过网络到芯片的程序，这是相同的物理问题。你只是移动了一些变量。这是问题的一部分。我们没有能够解决这个问题的架构。这是我论点的第二部分，那就是你需要新技术来克服瓶颈。但一旦你利用了这项技术，你需要新技术来克服它。如果你看我们能做什么，我们从**DAM**转移到**HPM**。所以那是堆叠的**DM**。它快得多，但你只能堆叠那么高，因为它很难制造和测试其正确性。良率非常低，我们实际上在2026年将没有足够的**HDM**，你无法构建好的流程，因为你用完了，而且制造它们太困难了。有了这些创新，其中之一是**张量核心**，这是一个巨大的进步，然后是8位精度，又是一个进步，然后是4位精度，通过特定的**块宽量化**，特定的数据类型，从我的研究和其他研究中我们知道，这两种信息在实践中理论上是可行的。如果你在足够的数据上进行训练，4位精度是不够的。你实际上需要8位精度。所以你不能再进一步了。硬件已经达到极限。我们没有新技术。我们可以让制造更容易，成本更低一些，但不能更快。我们已经最大限度地利用了附加功能。**稀疏性**可能是一些人尝试了50年的东西。我尝试了它，效果很好。所以这可能是最后一件事，但4位精度是**量化**的终点。所以，这就是终点。我们已经最大限度地利用了功能，我们已经最大限度地利用了硬件，这就是我们所得到的。

<details>
<summary>Original English</summary>

**Tim Dettmers**: Yeah. So this has two components and so one is also sort of a very fundamental thing and it's physical in the sense that um I mentioned these two um components uh memory movement and computation and so computation can only be useful if you move memory to this sort of local neighborhood where you do this computation. Now this is a geometric problem. You need to have a large store of information and then use this large store to move information closer to where you do want to do the computation. And we have figured out how to physically do is optimal. We have like a large slow memory that's **DRAM**. Then we move it to a cache. If you look at the geometry, that's how you do it fast. If you have a certain size of computation, this is optimal. If you have a different size of computation matrix multiplication, then you want to use not a **CPU** but more like a **GPU** which has higher latency but more throughput. You can move more data but more slowly. And um yeah, if you look at all of that, you can push around a little bit how you structure everything like the caches and uh how large they are and how much cores are they shared. But in the end uh the fundamental problem uh remains the same. You have a geometric problem. You can only fill the space in a certain way and that means you always have certain access pattern with certain um latencies and the biggest latency is a big block of **DRAM** that is the major bottleneck. This is also called the uh **Von Neumann bottleneck** bottleneck based on computers almost all computers that we have and this is a bottleneck of um moving a program to where you execute the program and for neuronet networks that's basically move the weights in the inputs to uh the execution where you execute the program that would be the **tensor cores**. there are not many ways how you can go around this bottleneck. Um the only way is to store the memory locally and do the local computation there. And there are some processes that do something like that. For example, this reburse processor. So they don't have this **Von Neumann bottleneck** in a major way on the ship, but then they need to also pipe data into that ship. And so the **Von Neumann bottleneck** moves basically away from the ship to your storage or **2J network**. And so you just move it away but still the same bottleneck. You need to load the program which might side on the disk or memory through the network to the ship and same physical problem. You just move a couple of variables around. That is sort of one part of the problem. We don't have architectures that can solve this problem. That's sort of the second part where um my argument kicks in and that is you need new technology to overcome bottlenecks. But once you have leveraged that technology, you need new technology to get over that. If you look at what we can do is we move from **DAM** to uh **HPM**. So that's **DM** that's stacked. That's much faster, but you can only stack it that high because it's very difficult to manufacture and test in correctness. um the yields is very low and we run actually in 2026 there's not enough **HDM** you can't build the nice processes and more because you run out and it's just too difficult to manufacture them and with that um we have all these innovations one of those **tensor core** big step up then have 8 bit precision another step up then we have four bit precision uh with particular **blockwide quantization** particular data types from my research another research we know that's those two information theoretically opt able in a practical sense. If you train on enough data, four bit precision is not up enough. You need actually 8 bit precision. So you can't go further. The hardware is maxed out. We have no new technology. We can make it easier to manufacture and a little bit cheaper but not faster. And we have maxed out on the additional features. **Sparity** could be something people tried it for 50 years. I tried it present well. And so that might be the last thing but 4bit precision is the end of quantization. So, um, that's the end of it. Like, we have maxed out the features, we have maxed out the hardware, that's what we get.

</details>

### 硬件利用率与模型滞后性

**Matt Turk**: 好的。太棒了。**Dan**，你对此有何看法？

<details>
<summary>Original English</summary>

**Matt Turk**: Okay. Fascinating. All right, **Dan**, what is your perspective on all of this?

</details>

**Dan Fu**: 我非常欣赏**Tim**的帖子，因为我认为我真正欣赏的一点是，有些关于**AGI**的讨论，如果你只是简单地追踪指数增长，在某个时刻你就会得到，你知道，那个会吞噬宇宙的东西。我总是觉得那种思考方式有点奇怪。我欣赏从实际物理限制角度来看待事物，因为，你知道，就像**Tim**说的，这些是具有物理输入和实际进行物理计算的物理系统。我认为我的观点是，如果你看看今天的系统所处的位置，看看我们训练过的模型，我们甚至远未高效利用上一代硬件。更不用说所有正在构建的新硬件了。所以，我认为在技术方面，我想在我的帖子中提出两个主要观点：第一，如果你看看我们今天所知的那些真正出色的模型，在我的博客文章中，我主要讨论了**开源模型**，因为它们更多地谈论了它们的训练方式以及背后的资源。我们没有关于**OpenAI**和**Anthropic**使用了多少资源的公开数据，但如果你以**DeepSeek**模型为例，这是我们今天拥有的最好的**开源模型**之一，它是在2024年底使用上一代被“削弱”的**GPU**——**H800**而不是**H100**——进行训练的，**H800**在当时为了规避出口限制，被**Nvidia**以各种方式削弱了。根据报告，它们使用了大约2000个**H800**进行训练，持续了大约一个月。当你计算这花了多长时间，当你看到芯片上实际可用的计算量时，你会得到大约20%的有效芯片利用率，或者类似的东西。这个数字的专业术语叫做**MFU**（**模型浮点利用率**），但基本上这是一个20%的利用率数字。与此同时，在2020年代早期，我们看到许多在旧硬件上、使用不同模型架构的训练运行，很容易达到50-60%的**MFU**。所以，如果你只取这个数字，然后说，嘿，也许有一种方法可以实现。从那时起，我的好朋友**Tri**发布了一整套新的内核，关于如何更好地训练这些模型，你可以说，仅仅从这一部分，就有3倍的提升。然后，另一件需要认识到的事情是，这个模型在2026年初被用作一些最好的**开源**或**开源相关模型**的基础。它至少在一年半前就开始训练基础模型了。所以，我们称之为2024年中期。从那时起，我们开始用当前一代硬件构建全新的集群。所以在**Nvidia**这边，这些是**Blackwell**。我们已经开始，你知道，像**Poolside**这样的公司正在构建数万个**B200**、**GB200**芯片。还有像**Reflection**这样的公司也在构建数万个**B200**芯片。所以，这是在比较我们拥有新一代硬件，即使你使用与以前完全相同的精度，完全相同的一切，计算速度也会快2到3倍，集群规模大10倍，再加上纯粹优化可能带来的3倍提升，那就是3乘以3再乘以10，大约是90倍的计算能力。这甚至还没有考虑未来的建设，这实际上是今天你可以指出的集群，人们已经开始在上面进行训练，你可能会希望在训练结束后得到更好的模型。我真正想说的是，如果你只看这些基本输入，你可以环顾四周，稍微眯起眼睛，你会发现与我们今天作为基准的模型相比，可用的计算能力增加了多达两个数量级。现在我们可以争论，你知道，在扩展方面是否存在**回报递减**，我们是否期望**扩展曲线**保持不变，以及所有这些，但你只需环顾四周就能看到，那就是100倍的计算能力。所以，我认为从物理角度，仅仅从纯粹的计算角度来看，还有很多可用的，还有很多我们没有做的事情。这甚至还没有提到你**Tim**提到的一些很棒的观点。所以，这些都是8位训练运行。我们才刚刚开始撰写关于如何正确进行4位训练运行的论文。还有一些新的东西，比如在**GB200**上，你有72个这样的芯片连接得非常非常快。我认为我们甚至还没有看到第一个预训练模型从中产生。**GPT 5.2.2**我认为是**OpenAI**报告中第一次提到，嘿，这是在**H100**、**H200**和**GP200**上训练的，这对我来说意味着它实际上是在一个非常旧的集群上进行预训练的，可能在新**GP200**上进行了一些微调。

<details>
<summary>Original English</summary>

**Dan Fu**: I really appreciated **Tim**'s post because I think one one thing that that I really appreciated is that there's some some **AJI** talk that if you just kind of like trace the exponential, at some point you get, you know, the the thing that will eat up the the universe or or whatever. Um, which I I always found it a little bit odd to to think that way. I I appreciate the the thing in terms of the actual physical constraints because uh you know like **Tim** said these are physical systems with physical inputs um and uh and actually doing physical computation. I think my perspective was that if you look at where the systems are today and you look at the the models that we've trained uh we are just so far from being from even using the last generation of hardware as as efficiently as as possible. So not to mention all the new hardware that that's being built out. So I think on the technical side I'd say there there are two major points I I wanted to make in my post which was one if you look at the models that are kind of the the really great ones um that uh that that we know today and I in my blog post I mostly talked about open source models because they talk a little bit more about how they train the resources behind it. um we don't have public figures behind you know how much **OpenAI** and **Anthropic** are using um but if you look at the **DeepSeek** model for instance this is one of the best open source models we have out there today it was trained at the end of 2024 on last generation kind of nerfed **GPUs** **H800**'s instead of **H100**'s the 800 is nerfed I by all sorts of ways from from **Nvidia** um to to get around the the export restrictions at the time um and they were trained with let's call it like about 2,000 **H800s** uh according to the report for I I think about a month and when you compute how much how long that took when you see how much compute was actually available on the chip you get something like a 20% um uh effective chip utilization or something like that the the number that the the term of art is called **MFU** model flop utilization um but basically that's a a 20% um utilization number um meanwhile you know in I think in the early earlier in the 2020s we were seeing lots of training runs on on older hardware different model architectures that were easily achieving 50 60% **MFU**. So if you just take that number and then say hey maybe there's a way to to to to get it out there since then um you know my good friend **Tri**'s released a whole new set of kernels on how to train the these models better and you say okay there's a 3x there just just from from from that one piece. Um then the other thing to realize is that so that is a model that is being used today in early 2026 as the base for some of the best um open- source or or open source adjacent models out there. It would have started training the base model at least a year and a half ago. So let's call it mid 2024. Since then we started building out completely new clusters with the current generation of hardware. So in in on **Nvidia** these are the **Blackwells**. Um, we've started, you know, there there companies like **Poolside** that are building out tens of thousands of **B200**, **GB200** chips. You know, there's there's uh other folks like **Reflection** who are b who are building out tens of thousands of **B200** chips. So this is comparing we have a new set a new generation of hardware where even if you take the exact same precision as you had before exact same everything uh 2 to 3x faster compute 10x larger clusters um plus you know maybe 3x lurking in terms of just pure optimization that's 3 * 3 times maybe another 10 that's like what another 90x of compute available um and that's not even looking at future buildouts that is literally clusters that you can point to today um that that people have started training on that that you might hope that at the end of that you'll you'll get much better models. The point I really wanted to make was if you just look at it from those basic inputs, you can look around, you can squint a little bit, you can see up to two orders of magnitude more compute available um compared to the models that we are indexing on today. Now we can argue about you know is there are there going to be diminishing diminishing returns in ter in terms of scaling up um are there going to be do we expect the scaling curves to hold and and all that um but you you can just look around and see it and that's that's you know 100x more compute. So I think from the physical just a pure compute perspective there's a lot more available a lot more um that that we're not doing. Uh this is not even to mention a bunch of the the great points that you mentioned **Tim**. So, these are all 8bit training runs. We've just started writing the papers about how to do a 4-bit training run properly. Um, there's new things like the uh on the **GB200**, you have 72 of these really connected really really quickly. I don't think we've even seen the first pre-trained model come out of that yet. **GPT 5.2.2** I think was the first time that that you saw in one of **OpenAI**'s reports, hey, this was trained on **H100**, **H200**, and **GP200**, which to me suggests that was actually pre-trained on one of the really old clusters, maybe some fine-tuning was done um on on the new **GP200s**.

</details>

**Matt Turk**: 你提出的观点是，硬件不仅没有得到充分利用，而且模型本身也是一个**滞后指标**。

<details>
<summary>Original English</summary>

**Matt Turk**: You make the point that not not only is the hardware underutilized, but you also say that uh models themselves are a lagging indicator.

</details>

**Dan Fu**: 是的。所以我们今天看到并可以玩转的模型，都是在一两年前构建的集群上进行预训练的。因为，你知道，你需要足够的时间来启动集群，你需要足够的时间来完成大规模的预训练运行，然后你需要足够的时间来真正进行后训练、微调，做所有**LHF**和其他所有事情。所以，我们今天拥有的模型快照，在对话开始时，就像“嗯，也许它是**AGI**，也许它不是”，这些模型已经是在一年半前的集群上训练的了。从那时起，我们已经构建了更大的集群，我们可以预期，你会预期他们会用这些集群进行预训练。我们今天看到的、我们今天用来衡量质量的模型，实际上是在相当旧的硬件上训练的。我们有新一代的硬件，更多的软件选择，更不用说架构选择，就像**Tim**你提到的关于需要移动数据然后对数据进行计算的事情，我们实际上已经看到了**Transformer**架构在过去一段时间内发生的变化，对于研究人员来说可能有点慢，但对于我来说有点慢，但你已经看到了我们进行计算的根本方式发生了变化，即使你再找到1.5倍或2倍的提升，现在你谈论的是100到150倍的计算能力，所以还有很多计算能力可以用来训练更好、更高质量的模型。

<details>
<summary>Original English</summary>

**Dan Fu**: Yeah. So the models that we see today that we can play with today have been pre-trained on clusters that were built out uh a year or two ago. Um because you know you you need enough time to get the cluster running. You need enough time to do the large pre-training run and then you need enough time to really post-train it, fine-tune it, do all the **LHF** and and all that stuff. Um so the the models that we have a snapshot today that at the beginning of a conversation it's like h maybe it is **AGI** maybe it isn't are already trained on uh clusters that are a year and a half old we've built out much larger clusters since then we can expect you know you you can expect that they're going to use them for for pre-training the models that we see today that we index on quality today are actually trained on pretty old hardware um and we've got new generations of hardware more software uh choices we can make not to mention architectural choices like so so **Tim** you were mentioning that this thing about you need to move data and then compute on data um we've actually seen the **transformer** change in architecture um for over the last a little bit slowly for like you know for for researcher a little bit slowly for my taste but you've seen the fundamental way we do the computation change even if you find another 1.5x or 2x there now you're talking you know 100 150x more compute like um so there there there's a lot more compute out there um to to train better higher quality models.

</details>

### 预训练与后训练的重要性

**Matt Turk**: 如果我正确理解了整个讨论，所有这些都与**预训练**有关，对吧？以及我们是否可以使用更多数据和更多计算来训练更大的模型。但在这次播客的对话中，很多讨论都围绕着**后训练**的重要性，以及如何通过**预训练**加**强化学习**来构建**AI**系统。这部分如何融入其中？

<details>
<summary>Original English</summary>

**Matt Turk**: If I understand this whole discussion correctly, all of this is about pre-training, right? And whether we can train bigger model with uh you know more data and more compute. But in conversations on this pod, a lot of the conversation have been about the importance of post-raining and the you know building **AI** systems with pre-training plus **RL**. Where does that fit?

</details>

**Dan Fu**: 这是一个很好的问题，我认为这也是我们都没有在博客中特别提及的另一个部分。我喜欢这样思考：**预训练**就像你在健身房进行的一般力量训练。你举重，提高你的力量，提高你的整体能力。而**后训练**就像你为了擅长某项特定任务而进行的特定训练。因此，从历史上看，绝大部分计算都用于**预训练**。这表明构建的模型更普遍地能够做很多事情，拥有大量知识，达到一个可能比普通人拥有更多知识的程度。例如，我当然不如**ChatGBT**知道得多。而**后训练**既是如何使其有用，例如，你让**ChatGBT**做某事，它会真正听从你并尽力去做。但我认为我们开始在**后训练**中越来越多地看到的是，你可以开始**后训练**特定的技能。因此，一个非常擅长帮助你编写代码的模型，使用了你从**预训练**中获得的许多知识，但实际上被调整为特别擅长编码。或者，例如，一个非常擅长法律工作的模型，拥有大量的**预训练**骨干，但**后训练**才是真正使其变得非常有用的地方。从纯粹的计算角度来看，**预训练**通常比**后训练**更耗费计算资源。**后训练**的工作，我认为，我不是**后训练**专家，但这项工作最终更像是如何构建一个有用的产品，如何获得用户反馈，如何做类似的事情。即使如此，也存在这样一个世界，下一代模型，下一代**预训练模型**，可能是一个足够强大的基础，如果你去解决经济中你关心的每个垂直领域，你实际上可以对其进行**后训练**，使其变得相当有用。所以，我认为这是计算的另一个方面。所以，也许我们甚至不需要那100倍的计算能力。也许这更像是一项传统的工作，例如，让我们深入理解这个问题，以理解如何以几乎是人类的方式进行训练，就像你如何培养一个实习生来完成这项特定任务一样？你如何让这个非常强大的**预训练模型**在**后训练**的意义上做一些真正有用的事情？

<details>
<summary>Original English</summary>

**Dan Fu**: That's a great question and and I think another piece that that we we didn't you know I don't think either of our blogs particularly hit on. One way I like to think about it is that pre-training is like the general strength training that you do in the gym. You go lift heavy weights, you improve your strength, improve your your your general ability and then post-training is like the specific drills that you run to um to to get a good at at a particular task. So historically the vast amount of compute has gone to pre-training. Suggest building models that are more generally capable of doing many things have a lot of knowledge get to a point where maybe they they have more knowledge than than your average person you know I I certainly don't know as much as as **ChatGBT** for for instance and then the post training is both how do you make it helpful so uh you know **ChatGBT** you ask it to do something and then it actually listens to you um and and tries to tries its best to do it but I think the other thing that that we've started to see increasingly in post training is that you can start to postrain specific speific skills. So, uh the model that's really good at helping you code uses a lot of the knowledge that you got from pre-training but is actually adapted to be particularly good for coding or um or the or the the model that's really good for legal work, for instance, has a lot of the the pre-training backbone, but then the post- training is really what gets it to that to that place where it's really useful. From a pure computational perspective, pre-training is usually much more compute expensive than post-training. um post-training the work that you have to do I think um I I'm not a post- trainining expert but the work ends up looking a lot more like how do you build a useful product how do you get user feedback how do you do things like that even then there's there there's a world where uh you know maybe the the next generation of models is the the next generation of pre-trained models is is a strong enough base that if you go tackle each vertical of the economy that you care about you could actually post- train it to um to something quite useful Um, so I think that that that's a whole other computational aspect of it. So maybe we don't even need that 100x more compute that that may that that may be out there. Maybe it's more a a more traditional work of you know let's understand this problem deeply to understand how to train in almost the human sense like how how would you take an intern and and train this intern to to do this specific task? How do you get this very powerful pre-trained model to do something really useful? Um in in this post- training sense.

</details>

### AGI的实用性与经济影响

**Matt Turk**: 你们都提到的“有用性”这个概念，是否是你们观点可能在某些方面趋于一致的地方？**AGI**是一种东西，但最终重要的是你在行业中的**有用性**，因此，即使由于**回报递减**，你可能无法达到那种无人真正理解的**AGI**的虚无缥缈的定义，但从某种意义上说，这并不重要，因为我们还有如此多的潜力可以挖掘，我们有足够的动力继续前进，直到我们达到一个真正有用的阶段，不仅对编码有用，而且对整个经济都有用。

<details>
<summary>Original English</summary>

**Matt Turk**: Is this concept of usefulness that you both mention where both of your point of views maybe converge some ways **AGI** is something but what ultimately matters is is where you land in terms like usefulness in the industry and therefore even though you one may not be able to reach that kind of ethereal definition of **AGI** that nobody really understands uh due to diminishing returns in some ways doesn't matter because we still have like so much juice to squeeze that uh we have enough to go until we get to a place where this is truly useful not just for coding but for the rest of the economy.

</details>

**Tim Dettmers**: 是的。我的博客文章的主要结论正是如此：我们不应该过多关注**AGI**，而应该更多地思考如何使其最有用，这可能超越了模型本身的有用性。我的意思是，**Dan**提到**后训练**作为一种产品。我们从计算机中看到的一个重要部分是经济中的**扩散**，这需要一种非常不同的思维方式。美国的思维方式是构建最好的模型，然后每个人都会使用它，但这有助于真正弄清楚如何以最务实的方式让最多的人受益，我认为这更像是中国的思维方式。所以，如果我考虑有用性，一个是模型，另一个是思维方式，但我会同意，我认为**Dan**和我，以及大多数人都会同意，如果你有一个**AI**能做数学奥林匹克等非常令人印象深刻的事情，但它做不了任何有用的事情，那它算是**AGI**吗？我的意思是，模型已经很有用了，所以那种情况不会发生。但我认为我们真正想要的是非常有用的模型，我认为我们已经拥有了，而且我认为我们可以证明这一点，但我认为我们不会达到**AGI**的某些定义，但我们会看到显著的影响。

<details>
<summary>Original English</summary>

**Tim Dettmers**: Yeah. The main conclusion of sort of my blog post was exactly that like we shouldn't pay too much attention to **AGI** but more about thinking about how can we make it most useful that might go beyond of how useful is a model. I mean **Dan** mention mentioned like post training as a product. An important part we saw with computers is diffusion in the economy that requires a very different mindset. **US** mindset is build the best model and then everybody will use it but it can help to really figure out how can you benefit the most people in the most pragmatic way and I think that's sort of more the **Chinese mindset** and so that that sort of mindset so if I think of usefulness one is model the other is sort of the mindset but I would agree I think I think that both **Dan** and I I think most people would agree that if you have an **AI** that does very impressive things like math olympiate things and that sort of thing but it can't do anything useful is at **AGI** um mean um and so models are already useful so that that scenario will not happen but I think what we really want is very very useful models and I think we have that and I think we can prove that but um I don't think we get to **AGI** by **SER** definitions but we will see significant impact.

</details>

**Dan Fu**: 是的，我想补充一点，**Tim**你提到经济中有多少是**实体经济**，有多少是**知识工作**，我认为**中美**之间的对比非常有趣。你知道，**Dan Wong**的这本书一直在流传，关于**制造业经济**、**工程经济**与**律师经济**的分析。我认为在美国肯定有很多很棒的**知识工作**要做。我认为，如果你看看经济的实际部门，很大一部分是**医疗保健**，很大一部分是**教育**。科技当然也是很大一部分，它正在引领股市并推动股市。我们有很多人正在尝试使用新模型来开发新药，或者了解如何在**医疗保健**领域产生真正的影响，或者如果我们能让**机器人技术**起步，并开始帮助一些体力劳动，也许不一定是建造房屋，而是日常的家务劳动，那可能是经济中尚未开发的大部分。这些部分真的非常棒。你几乎可以看到它最初的雏形。**自动驾驶**的类比对我来说非常有趣，因为在我的**博士**早期，我对**自动驾驶**持相当怀疑的态度。所以我们称之为2018年到2019年，感觉**自动驾驶**总是差一年或两年，或者如果你问专家，他们会说五年。然后去年我乘坐了**Whimo**，今天我实际上已经获得了在高速公路上使用**Whimo**的权限。所以现在可以想象，我可能会卖掉我的车，我住在加州的**湾区**。我不会卖，因为我个人喜欢开车。但进步以这种方式很有趣，它有点像：它不在那里。它不在那里。它不在那里。然后有一天，某个开关被打开了，然后你突然觉得，哦，这东西不仅相当好，它实际上比我乘坐**Uber**或出租车得到的服务要好得多。如果我们看到这种情况发生，那将是非常令人兴奋的。如果我们看到这个开关被打开，例如用于家庭清洁或洗碗之类的，我认为那会非常非常令人兴奋，它会改变很多人的看法。我本人不是**机器人专家**，但我非常兴奋地关注着这个领域。

<details>
<summary>Original English</summary>

**Dan Fu**: Yeah I think I I would just add to that that um **Tim** you had this point about you know how much of the economy is is physical how much of it is um um knowledge work and I think that the **US China** you know contrast is is really interesting there and you know there's been these analyses this book by **Dan Wong** going around about um the manufacturing economy the engineering economy versus the more lawyerly economy um and I think there's certainly a lot of great knowledge work to to be done in the **US** um I think there there's also if you look at what the actual sectors of the economy are. So a large portion of it is healthcare, a large portion of it is education. Um tech is certainly a also a large portion that's kind of leading the stock market and and driving the stock market. We have a there there's a lot of great people who are trying to use the new models to try to do things like develop new drugs or or understand how to how to make a real impact in in healthcare or if we can get robotics off the ground and do things like start taking um helping with some of the the the you know the the physical labor um maybe not necessarily building houses but the the day-to-day household labor um that that could be large untapped portions of the economy. Those pieces are are are really great. can you can almost start to see the first pieces towards it. Uh the self-driving analogy is really interesting to me because early on I'll say early on in my **PhD** I was quite skeptical about uh self-driving. So let's call this 2018 2019 it felt like self-driving was always a year away or two years away or if you ask the the experts they say oh five years away. Um and then last year I rode in a **Whimo** and today I can I can I I just actually got got access to **Whimo** on the highway. So now conceivably I could, you know, potentially sell my car and I live in in the **Bay Area** in **California**. Um I won't because I personally like driving. Um but there's there's a lot of the progress is funny in this way where it's kind of it's not there. It's not there. It's not there. And then one day something a switch flips and then you're suddenly like, oh, not only is this thing pretty good, it's actually a lot better than the service that I'd get in an **Uber** or a taxi or something like that. That's a really exciting thing if we see that happen. if that we see that flips that switch flip for like you know household cleaning or or putting away the dishes or things like that I think it would it would it would really be really exciting it would change a lot of folks perspectives I'm not a roboticist myself but I'm really watching that space with a lot of excitement.

</details>

### 多硬件/多芯片世界

**Matt Turk**: **Dan**，作为一个快速的题外话，你认为我们正在朝着一个多硬件、多芯片的世界发展吗？基于你所看到的，你知道，显然有**Groq**和**Nvidia**，有**Cerebras**，还有很多特殊的**ASIC**公司正在涌现，从你这种堆栈底层的角度来看，你看到了什么？

<details>
<summary>Original English</summary>

**Matt Turk**: **Dan** as a quick tangent do you think we evolving towards a multi-h hardware multi-chip kind of world based on what you see you know obviously there's been **Groq** and **Nvidia** there's **Cerebras** there's like a bunch of sort of special **AS6** companies coming up from from your kind of like lowlevel in the stack vantage point. What do you see?

</details>

**Dan Fu**: 是的，这是一个很好的问题。这是我花了很多时间思考的事情，我想更多是在实验室方面，而不是在工业方面。当然，我们两方面都在密切关注。我认为现在是一个非常激动人心的时期，**Nvidia**芯片非常强大，非常可靠。围绕它们有很多软件支持。我们开始看到同样的事情发生在**AMD**芯片上，伴随着一些研究。所以在实验室方面，我们最近发布了一个名为**Hipkittens**的库，由我的好朋友**Simron Aurora**领导。她主要研究的是，我们如何采用正确的软件抽象来在这些**AMD GPU**上编程？结果发现它们与**Nvidia GPU**并不完全相同。所以即使是两个规格相对相似的**GPU**，当然与**Grock**、**Cerebras**或**Sabanova**或其他芯片相比，即使它们相对相似，它们实际上也需要使用相当不同的**软件抽象**。我认为越来越多的人对此感到兴奋，并投入时间和精力。我们看到了**Nvidia**收购了**Groq**。很多人今天对**TPU**感到兴奋。我认为**Cerebras**和**OpenAI**刚刚宣布了他们的合作。所以，我认为肯定会有很多新事物涌现，你会看到更多。我相信**Nvidia**仍然会做得很好，并且会继续增长，超越他们5万亿美元的公司市值，无论在录制时是多少。但我认为你会看到更多的多样性，尤其是在模型的**推理**方面。所以**训练**和**推理**实际上是相当不同的计算，因此你可能需要相当不同的芯片来完成。在**推理**方面，你可能希望你的模型本地运行在你的手机或笔记本电脑上。你知道，我的手机，我的**iPhone**，现在已经用了几年了，但它已经比我刚开始读**博士**时的一些**GPU**更强大了。这种硬件能力的增长真的非常令人兴奋。

<details>
<summary>Original English</summary>

**Dan Fu**: Yeah, that that's a great question. So, it's something that I spend quite a bit of time thinking about um more so I'd say on the lab side than than necessarily um in on on the industry side. Um although of course we're we're paying close attention kind of on both sides. I think it's it's at a really exciting time where um the **Nvidia** chips are really strong, really reliable. Uh there's a lot of software support around them that that that has built around we're starting to see the same things happen for example on **AMD** chips um with with some some of the research there. So on the lab side, we put out a recently a library called **Hipkittens** led by my great friend **Simron Aurora**. Um, and she was really looking at, okay, how can we take what are the right software abstractions to to program on these **AMD GPUs**? And turns out they're not exactly the same as the **Nvidia GPUs**. So even even two **GPUs** that have relatively similar specs certainly compared to **Grock** or **Cerebras** or **Sabanova** or one of these other chips um even though they're relatively similar they they actually have pretty different software abstractions you need to use. Um and I think more people are getting excited by that and and investing time and and energy into that. Um we saw the **Grock** acquisition from **Nvidia**. A lot of people are excited about **TPUs** today. I think uh **Cerebras** and **OpenAI** just just announced um their partnership. Um so I think certainly it's going to be a wave of things coming forward that that you're going to see um a lot more. I'm sure **Nvidia** will still do great and still grow beyond their $5 trillion company or whatever it is at the time of recording. But I think you're you're going to see a lot more diversity um especially around I think inference of the model. So training and inference are actually quite different computations and as a result you might actually want quite different chips to do it. Um on the inference side you might want for example your models to live locally on your phone on your laptop. You know my phone my my **iPhone** which is a few years old at this point is already more powerful than some of the **GPUs** that that I had when when I was starting my **PhD**. That growth of of that hardware power is is really exciting to see.

</details>

### 智能体时代的到来

**Matt Turk**: **Dan**，你刚才提到了**自动驾驶汽车**，那个“开关被打开”的时刻。智能体已经发生这种情况了吗？你谈到了**软件奇点**。我们是否已经达到了智能体的那个时刻？

<details>
<summary>Original English</summary>

**Matt Turk**: And **Dan**, you mentioned a second ago in reference to uh self-driving cars, that moment where where things flipped, switches is turned on. Has that happened with agents already? You talked about software singularity. Are we are we at that moment for agents?

</details>

**Dan Fu**: 是的，我认为就我个人而言，那个时刻大约是去年六月。所以2025年六月对我来说是真正发生转变的时刻。为了提供一些背景信息，我在**Together AI**的日常工作中，我们编写了许多**GPU**内核。我不知道它有多流行，但在普遍的**ML**思潮中，**GPU**内核被认为是编程学习的“最终**Boss**”。它们非常困难，高度并行。你不能像编写**Python**那样编写它们，你必须用**C++**编写，这是一种老式语言，几十年前的老系统工程师使用过。当你试图招聘能编写内核的人时，这非常困难。这是一个极具挑战性的技能集。它无疑是编程实力的尖端。去年六月，我们有了一个非常有趣的认识，我们意识到**Cloud Code**、**Cursor Agent**这些**智能体编程助手**在编写这些内核方面非常出色。所以，有一周，我记得我编写了三四个不同的功能，通常每个都需要我一周的时间，而我只用了一天就完成了所有这些。我当时想：“天哪，这东西让我的内核专家生产力提高了五倍。”我让我的团队也开始使用它。现在我的团队已经构建了所有这些非常复杂的系统，他们可以编写一个完整的功能，而以前可能需要整个团队几个月的时间。这有点像是编程挑战的“最终**Boss**”，它真的非常具有挑战性。所以从我们的角度来看，对于这种技术挑战性极高的**GPU**内核编程，它已经为我们跨越了**卢比孔河**。我认为，几个月前我在**Slush**做了一个演讲，谈论我们所说的**软件奇点**，我们意识到，在软件工程方面，即使是这些非常小众的技能，它也肯定比普通程序员更好。它已经达到了可以加速真正专家程序员的水平。所以，截至今天录制时，它处于这样一个阶段：如果我让它自己运行，它可能不会为你生成正确的东西。但如果你给一个专家程序员这套工具，他们可以比以前快10倍。我认为这是一个非常令人兴奋的阶段。

<details>
<summary>Original English</summary>

**Dan Fu**: Yeah, I think that so personally in in my life, I'd say that moment was last Juneish. So June 2025 was the moment that that it really flipped for me. to give some context here. So what I do in my day job at **Together AI** is we write a lot of these **GPU** kernels. I I don't know how popular, but the in the in the general **ML** zeitgeist **GPU** kernels are thought of as kind of like the final boss of the thing that you learn how to program. They're very hard. They're very highly parallel. Uh you don't write them like you have to write in **C++** which is this old language that the old systems people used, you know, decades ago or whatever. They're not in **Python**, etc. When you're trying to hire for people who can write kernels, it's very hard. It's a very challenging skill set. It's certainly, you know, the the the the the the tip of the spear in terms of um the their programming strength. And last June, we had this really interesting realization where we realized that **cloud cloud code**, **Cursor agent**, these agentic coding assistants were actually very good at writing these kernels. So, um, there was one week where I think I wrote like three or four different features that usually would have taken me a week each and I wrote all of those in in a single day. Um, and I was like, "Oh my god, this thing is making me five times more productive as a kernel expert. Um, I got my team on it. Now my team has all these really complex systems that they've built where they can write a whole feature that I think would have taken um months of a of a whole team's time before. Um, and this is kind of the the that that final boss of of programming challenge that that was really that was really challenging. So from from our perspective for coding for this really technically challenging **GPU** um kernel programming, it kind of crossed that that kind of crossed the **Rubicon** for us already. And I think you know uh I gave this talk a few months ago um at **Slush** about what we're calling the **software singularity** where we realized hey in terms of software engineering even for these really niche skills um it's it's certainly better than the average programmer. It's at a place where it can accelerate the really expert programmer. So um it's right now as of you know today's recording is at a place where if I just let it on its own it might not generate the right thing for you. But if you give an expert programmer this set of tools, they can go 10 10 times faster than than they were able to go before. Um, and I think that that that's a really exciting uh place to be.

</details>

### 智能体：代码与通用任务

**Matt Turk**: 关于智能体这个话题，**Tim**，你刚刚又写了一篇很棒的博客文章，题为《使用智能体，否则你将被淘汰》。你谈到的一部分是**代码智能体**与用于其他任务的智能体。我们目前处于智能体从擅长代码向对我们生活其他方面有用的转变的哪个阶段？

<details>
<summary>Original English</summary>

**Matt Turk**: And on that topic of agents, **Tim**, you just wrote another great blog post called uh use agents or be left behind. And part of what you talk about is coding agents versus agents for the rest of tasks. Where are we in that arc where um agents are are transitioning from being excellent at code to useful for the rest of our lives?

</details>

**Tim Dettmers**: 那篇博客文章也是对我所看到的一种反应，即如果你将**代码智能体**用于各种任务，可以获得很多生产力提升。作为一名教授，你不会编写那么多代码。你实际上可以更容易地编写代码，这可能是其他教授以前不会轻易做到的。现在变得如此容易。但是的，对于非编码任务，它也超级有用。当我看到我所获得的生产力提升时，有些是较小的，比如两三倍。有时它会快10倍。我完成任务的速度快10倍。质量没有下降。有时质量甚至更高。一个智能体可能不如我好，但智能体不会感到疲倦。智能体不会犯那种糟糕的错误。是的，你也不会像处理复杂的**佛陀内核**那样在认知上挣扎，**Dan**提到的所有这些都在起作用。我的意思是，**Matt**，你把它说成是**代码智能体**和其他东西的智能体，但我认为它只是**代码智能体**。**代码智能体**是通用智能体。**代码智能体**可以编写解决其他问题的程序，而代码是如此通用，如果有一个数字问题，你就可以用代码解决它，**代码智能体**让事情变得如此容易，以至于现在你可以以以前无法解决的方式解决各种问题，这个角度让你富有成效。我想说这是主要的变化。**代码智能体**让你能够以你以前无法思考的方式检查问题，并且以你以前无法思考的速度。你可以并行处理许多不同的任务。智能体不会感到疲倦。你只需继续前进。工作变得容易得多。

<details>
<summary>Original English</summary>

**Tim Dettmers**: That blog post was also as as a reaction to what I see is there are a lot of productivity gains if you use coding agents for all kinds of tasks and as a professor you don't code that much. You can actually code more easily which probably other professors previously would not do. so easy now. But yeah, also for non-coding tasks, it's super useful. And when I look at um the productivity gains that I have, some of it is smaller like two or three. Sometimes it's like 10 times faster. I do task 10 times faster. The quality is not degraded. Sometimes the quality is um higher. Um an agent might not be as good as I am, but the agent doesn't get tired. Agent doesn't uh make sort of bad mistakes or Yeah. and you cognitively struggle like with like complicated information that you put together similar to **Buddha kernels** what what um **Dan** mentioned all of that is working and um I mean **Matt** as you put it is coding agents and agents for other stuff but how I would see it is it's just coding agents coding agents are general agents uh coding agents can write programs that solve other problems and code is so general if there's a digital problem you could solve it with code and coding agents make the things so easy that um now you can solve a variety of problems in a way that you couldn't solve before and this angle makes you productive. I would say this is the main the main thing that has been changing. Coding agents allow you to check a problem in a way that you could think before and is at a pace that you couldn't think before. You can paralyze a lot of different tasks. The agent doesn't get tired. Um you just keep going. the works much easier.

</details>

**Matt Turk**: 我喜欢你帖子中的一点是，你一开始小心翼翼地将**炒作**与**现实**分开，但很快地，根据你特别是在直播中试验智能体的经验，你得出了一个结论：超过90%的代码和文本应该由智能体编写，你必须这样做，否则你将被淘汰。

<details>
<summary>Original English</summary>

**Matt Turk**: One bit I love in your post is that you're careful to separate hype from reality at the beginning but then quickly you land from your experience of experimenting uh with agents uh for the live stream in particular you land at the conclusion that more than 90% of code and text should be written by agents you need to do so or you will be left behind.

</details>

**Tim Dettmers**: 我认为对于许多工程师来说，这已经成为现实。有一种观点认为，如果你生成文本或代码，并且所有由**AI**生成的东西都必然质量低下，必然很糟糕，但关键在于你要检查代码，检查文本，你可能会做一些小的修改，你所做的10%可能会通过这种编辑和审查输出来产生巨大的影响，你把它变成了你自己的东西。**AI**生成的东西并不比你自己写的东西更不个人化。我知道，如果我在智能体的帮助下写一份**项目申请书**，它就好像有了生命，我能感觉到它很激动人心，就像读者会说“是的，这是很好的研究，我想资助它”。我认为这就是现实，如果你只是生成东西而不看它，然后说“是的，这很好”，那对你没有帮助。但是你可以快速审查内容，你可以浏览它，你可以看看“啊，这看起来不对”或者“我想要不同的”，然后编辑它，你就可以开始了，这将成为现实，而你需要以这种方式工作的技能。对于大多数人来说，这些技能还没有完全发展起来。对我来说也还没有完全发展起来。它仍然是一个实验阶段。模型在变化，框架在变化。所以你需要适应，你需要学习，有很多东西要学，但如果你做了，回报是巨大的。我认为曾经有一种想法认为**软件工程师**将不复存在。但我认为人们不再相信这一点了。这就像潜意识是如此高效。这正是你需要学习的。如果你善用智能体，你可以做很多事情，我认为这是核心。如果你不懂得如何善用智能体，你就会被淘汰。这将成为一项关键技能。

<details>
<summary>Original English</summary>

**Tim Dettmers**: And I think for for many people that are engineers that's already true and there is sort of this thinking oh if you produce text or code and everything sent by **Asians** must be low quality much must be bad but um the key thing is you inspect the code you inspect the text you might might make some slide edits the 10% that you do might make a big big difference through this um basically um sort of editing just reviewing of output you kind of make it your own um **AI** generated things um are not less personal than things you've written on know I see that if if I write a grant proposal with the help of an agent it's sort of alive it I can feel like it's exciting like if person reading it said like yeah this is good research I want to fund this I think that's just the reality like if you just generate things and don't look at it and just say like yep that's good that will not help you but um you can quickly review content you can skin it you can look at like ah this doesn't look right or I want it different and edit it and you're good to go that will be the reality and the skills that you need to um work in that way. They're not fully developed for most people. They're also not fully developed for me. It's still sort of a face of experimentation. Models move, frameworks move. And so you need to adapt, you need to learn, there's lots to learn, but if you do it, payoffs are huge. And I think there was a thinking that software engineers will no longer exist. But I think people no longer believe that. It's like subconscious are so productive. That is exactly what you need to learn. If you use agents well, you can do so many things and I think that's the core thing. If you don't know how to use agents well, you will be left behind. That will become a critical skill.

</details>

### 如何利用智能体提升生产力

**Matt Turk**: 实际上，我该怎么做？如果我不是程序员，并且我想自动化我工作中的某些部分，你有什么建议来解决这个问题？

<details>
<summary>Original English</summary>

**Matt Turk**: Practically, how do I do that? If I'm uh not a coder and I think about automating some parts of of my job, what are some of your recommendations on how to approach that problem?

</details>

**Tim Dettmers**: 是的，我的意思是，最好的方法就是非常务实。只需思考事情并尝试编写代码。特别是如果你不是程序员，那会非常困难，而且存在一种障碍，你会说“我以前没写过代码，我不知道这个”。但如果你与智能体互动，它们就可以构建东西，而且学习成本极低。我的意思是，它们也可以用极低的学习成本解释东西，你可以做到，执行程序，构建网站，这种视觉反馈很快，不再那么困难了。我的意思是，我经常提到你需要检查事物，但如果你为自己构建简单的工具来让你的生活更轻松。通常你不需要这样做。智能体编写的代码很好。如果你在公司工作，你需要将其集成到一个好的代码库中。你可能应该审查它。但如果你自己构建一个小型程序来提高你的工作效率，那很容易。只是给你一个可能有点随机的例子，我打赌，例如，一个工具，如果我有一个我说话的视频，所以我录制了我与智能体互动时的视频，然后有一些阶段我只是看着输出并试图理解事物，还有一些阶段我说话。所以我只是构建了一个工具，它可以识别我说话时的语音，获取时间戳，然后它会剪辑视频，所以基本上我有一个完整的我说话的视频，而不是那些什么都没发生的时刻，这非常容易做到。我花了20分钟就构建了它。我认为每个人都能做到，因为我没有看代码。是智能体做的，然后我看了视频，我说“哦，是的，就这样吧。”对。如果你开始使用**反馈循环**，你不需要编写代码。你只需要检查你能理解的输出，或者学习如何执行**Python**程序或**bash shell**，你就可以做到了。

<details>
<summary>Original English</summary>

**Tim Dettmers**: Yeah, I mean the best thing is just sort of being sort of very pragmatic. Just think about things and trying to code them. particular if you're not a coder that's very difficult and there's sort of this barrier where say like I haven't coded before like I don't know this and but if you interact with agents um they can just build stuff and with minimal learning I mean they can also explain stuff with minimal learning you can get there execute programs build websites of this visual you get quick feedback it's not that difficult anymore I mean often I mentioned you need to inspect things but if you build simple tools for yourself to make your life easier. Often you don't need to do that. The agents write good code. If you work in a company, you need to integrate it in a good code base. You probably should review it. But if you build a small program on your own to make your work more productive, um that's easy. Um just to give you an example that might be random here I bet for example a tool that if I have a video where I talk so I record videos of how I interact with agents then there are certain phases where I just look at the outputs and try to understand things and there are phases where I talk so I just build a tool that recognizes the speech that when I'm saying gets a timestamps then it slices the video so basically I have an entire video where I talk rather than sort of moments where uh nothing happens and that's very easy to do. I built this like in 20 minutes. I think everybody can do it because I didn't look at the code. The agent that did it and then I look at the video I'm like, "Oh yeah, let's do it." Right. If you get started with a feedback loop, um you don't need to code. You just need to inspect the output that you can understand or learn how to execute a **Python** program or a **bash shell** and you're there.

</details>

**Matt Turk**: 你如何选择要自动化的内容？我该如何思考我生活中的自动化？

<details>
<summary>Original English</summary>

**Matt Turk**: How do you pick what you want to automate? Like how do you how do I think about automation in my life?

</details>

**Tim Dettmers**: 是的。所以我在一篇博客文章中也谈到了这一点，它既可以是更直观的事情，也可以是更细致入微的事情。我认为更直观的事情是，你只需思考什么可能有用，然后它可以是更复杂的事情。你说我想要一个**Android**应用或**iPhone**应用来做这件事，你最初可能认为这很复杂，但你一扔给**AI**，它就立即工作了。世界就是你的声音。你可以做很多事情，你可以非常有创意地说，我一直想要什么，但它不存在。没有人开发这个产品。我现在能开发它吗？我认为这种思维方式会给你带来有用的东西，让你更有效率。但它也会锻炼你的能力，有时它不起作用，然后你就会明白，好吧，添加智能体循环这个，或者这是我仍然需要学习才能做这两种事情的。我认为这是一种更具侵入性的视角，它非常有用，可以让你很快走上这条道路，你会说，我的意思是，首先是兴奋，然后是清醒的现实，但你又会重新振作起来，你会意识到，好吧，我喜欢这样，我每天都变得越来越有效率，这是更直观的部分。更细致入微的部分是我在**自动化行业**学到的那一部分。我在德国的**自动化行业**工作了三年，自动化工厂，这是一种非常计算化的方法，你观察你的工作方式，你计时每个步骤，然后你说，如果我以这种方式自动化这个精确的步骤，回报会是什么？我能节省多少时间？然后你计算生产力增益，然后你计算我需要多少时间来开发这个自动化。如果你这样做，你很快就会意识到，自动化某些事情不会产生影响。我在博客文章中提到的电子邮件并不真正有效。可能还有其他事情，比如一个大问题总是**日历邀请**，没有人喜欢为会议创建邀请，但如果你仔细想想，你对会议也很挑剔，比如有些日子你想要更多的会议，你的会议日，或者你说，啊，我可以在午饭前把这个放进去，智能体不知道这一点，如果你向智能体指定这一点，你也可以直接创建日历邀请，这个会议是即时创建的，它不会大大提高生产力。所以，如果你以这种细致入微的方式思考，就会有很多问题，你可以说，好吧，我不做那个，但这个会帮助我。

<details>
<summary>Original English</summary>

**Tim Dettmers**: Yeah. So I also um talked about that in a blog post and it can be yeah sort of um sort of uh more intuitive thing and then a more nuance thing. I think the more intuitive thing is like you just think about what could be useful and then can be like something more complex. You say I want an **Android** app or an **iPhone** app that does this thing and you initially might think that's complex but then you throw a coation it works immediately. the world's your uh voice. It's like there's so many things that you can just do and you can be very creative and say like what I always wanted to have and it wasn't there. Nobody built this product. Can I build it now? And I think that mindset gives you useful things that makes you more productive. But it also flexes your muscle and sometimes it doesn't work and then you understand like okay add agent cycle this or this is what I still need to learn to make both these kind of things and I think that is sort of the more intrusive perspective that's very useful and that quickly get you started on the path where you say like um I mean first there's excitement then it's sort of sober the sober reality but then you pick up again and it's like you realize okay I do like this I get more and more productive day by day that's sort of the more intuitive part the more nuance part is the sort of part that I I learned in automation industry I worked like three years in automation industry in **Germany** automating factories and it's sort of a very calculated sort of approach where you you look at you how you work you time each of these steps and then you say if I automate this exact step in such a way what could be the payoff how much time would I save and then you calculate what is the productivity gain and then you calculate how much time do I need to develop this automation and if you do that you can quickly realize that certain automating certain things will not make a difference the blog post I mentioned emails doesn't really work um and there might be other things like a big thing is like always calendar invites nobody likes to create like invites for a meeting but then if you think about it is you're also very particular about meetings like some days you want more meetings you meeting day or you say like ah I can put this in before lunch an agent doesn't know that and if you specify that to an agent you could also just create the calendar invite this meeting by flight and it it doesn't increase productivity by much and so there are a lot of problems if you think about this nuance way and can say like okay I don't do that but ah this this will help me.

</details>

### 智能体管理与专业知识

**Matt Turk**: 那么在你这边，你对智能体有什么了解或观察？什么有效，什么目前无效但很快会有效，以及如何管理它们？

<details>
<summary>Original English</summary>

**Matt Turk**: And then on your end what have you learned or observed in terms of agents what works what currently doesn't work but will work soon how to manage them.

</details>

**Dan Fu**: 我认为对于智能体，我注意到了两大类事情。首先，让智能体有效，最终很像管理团队中的初级人员或公司里的初级人员。例如，团队中新来的实习生，你不会对实习生说：“嘿，去解决我们今年的收入问题，把我们今年的收入翻倍”，或者类似的话。你可能会尝试一次，但你不太可能看到回报。相反，你对初级人员常做的是，你会说：“嘿，这是一个你可以做的第一个小任务，通过它来了解这个复杂的代码库，以及你可能会遇到的问题。”因为你以前做过。当你给智能体提供这些上下文，赋予它们查看这些事物的能力时，它们通常就能解决问题。另一点是，当你的团队中有一个新人时，你可能不会让他们访问所有的生产凭证和所有的生产数据库以及所有这些东西，但你会给他们足够的工具来提高生产力。所以有时会存在这种紧张关系，哦，我不想让我的智能体删除我生产环境中的所有东西，所以我只会限制它，并观察它做的每一件小事。然而，如果你对一个人这样做，你永远不会期望那个人能高效工作。这是另一个重要的点，你希望把智能体至少在今天看作是实习生或更初级的人员。我注意到的另一个非常有趣的事情是，当我更多地思考教授的教育角色，以及如何为人们准备这个未来，在这个未来中，智能体将成为工作流程中如此重要的一部分时，那就是你如何为此进行培训？我注意到的一件事是，一个人拥有的专业知识越多，例如**Tim**在**流程自动化**方面的专业知识，或者我在内核和编写这些高度专业化程序方面的专业知识，你拥有的专业知识越多，智能体就越能让你变得强大。这是因为你可以在更高的抽象层次上工作。你知道什么是重要的事情。你知道如何设定方向。你知道常见的陷阱是什么，比如什么是容易的，什么是困难的，你需要分解成多个步骤。有一段时间，人们一直在讨论一个问题，比如智能体是否会取代所有的**软件工程师**，或者类似的事情，或者它们是否会取代所有的初级人员，或者类似的事情。我认为我们今天所处的位置，这可能显然不再是这种情况了。我的意思是，如果我有一个工具能让我的团队强大10倍，我不会解雇团队中的九个人。我会说：“好的，去这样做。变得比以前高效100倍。”这是一点。但另一方面，你如何成为某个领域的专家，这个过程可能与以前非常相似。你会深入研究事物。你会努力理解很多东西。你会想亲自动手做事情，真正完成任务。在这个世界里，**Chat GPT**可以教你很多东西。我个人曾试图让**Catch APG**教我汽车工作的所有细节。我不知道到目前为止效果如何，但你知道，现在学习东西比以前容易得多，甚至比五年前、两三年前容易得多。所以这些就是我想说的一些事情。所以，你知道，你希望把智能体当作你在扮演经理角色。你想帮助它们摆脱困境。你不想只是把智能体扔给问题，然后走开，再也不看它。但你也想弄清楚如何提升自己，以便成为一个更好的经理，拥有更多的**领域专业知识**，并以更深入的方式真正理解事物。

<details>
<summary>Original English</summary>

**Dan Fu**: I think there there there's two broad um things I I I've noticed for agents. So the first is um making the agents effective uh ends up being a lot like managing um junior folks on your team or or at a company. So for example, the new intern who who shows up on your team um you're not going to go to the intern and say, "Hey, go fix our revenue for the year, double our revenue for the year," or something like that. like maybe you'll try that once, but you're you're unlikely to to see um the the payoff from that. Um instead, what you often do with junior folks is you say, "Hey, here's a first little task that you can do that in to get to know this complicated codebase and here are the things that you might run into." Um because you you've kind of done it before. And when you give the agents that context, give them that ability to look at those things, then then they can usually figure things out. The other bit is that when you have a a new person on your team, you maybe won't give them access to all the production credentials and and all the production database and all those things, but you're going to give them enough tools to to be productive. Um, so sometimes there there's this tension between, oh, I don't want my agent to go delete my everything in production, so I'm just going to have it be hamstrung and and watch every little thing it does. Whereas, if you did that with a person, you would never expect that person to be productive. That's another big you kind of want to you know think about the agents as at least today as you know maybe interns or or more junior folks. The other really interesting thing that I've noticed and I think when I think more the educational role of a of a professor and how do you prepare people for this future where agents are going to be such an important part of of workflows is that how do you train for that? And one of the things that I've noticed is that the more expertise somebody has, so whether that's in for example **Tim** with process automation um or uh expertise in in what I do in kernels and writing these very highly specialized programs, the more expertise you have, the more powerful the agent makes you. And that's because you can work at such a higher level of abstraction. You know what the important things are. You know how to set the direction. um you know what the common pitfalls are like what is easy what's kind of hard what you need to break up into multiple steps. One piece of conversation that um was coming up for for a while was like are agents going to replace all software engineers or things like that or are they going to replace all junior people or something like that. Um I think where we are today that's probably you know clearly not the case anymore. Um where you know if I have a tool to make my team 10x stronger I'm not going to fire nine people on my team. I'm going to say, "Okay, go do this. Become a 100x more productive than you were before." That's one bit. But then also kind of the script for how you become an expert at something. Uh is is probably pretty similar to to the way that it was before. You're going to study things deeply. You're going to try to understand things a lot. Um you're going to want to do things yourself with with your um you know, hands-on and and really get things done. Uh in this world, you know, the **Chat GPT** can teach you a lot of things. I was personally um uh personally I was trying to get **Catch APG** to teach me all the little ins and outs of how a car works. I don't know how effective it was so far, but um you know there it's it's a lot easier to to learn things now than it was um certainly even five two three years ago. Um so th those are kind of some of the the the things I'd say. So you know you want to treat the agents as if you're you are in that manager role. You want to help them get unstuck. You don't want to just say like throw the agent at the problem, walk away and and never look at it again. Um, but you also want to kind of figure out how to level yourself up so that you can be a better manager, have more domain expertise and and really understand things in a deeper way.

</details>

### AI时代的人才培养

**Matt Turk**: 所以你需要学习并成为专家，这一点没有改变，我认为这非常有趣，也很有道理。问题是，如果你作为一名年轻的**内核工程师**入职，那是你的第一天，通常他们会说，好吧，你做这个简单的任务，然后做那个简单的任务，然后到第二年，你就可以胜任更复杂的任务了。这种**实践型在职培训**会是什么样子？

<details>
<summary>Original English</summary>

**Matt Turk**: So the fact that you need to learn and be an expert uh and that doesn't change uh I think that's very interesting and that makes a lot of sense. The question is like if you show up on the job as a you know young kernel engineer and that's your first day typically they would be okay well you do this simple task and that other simple task and then by year two you graduate to a more complex task. How does this sort of hands-on job training look like?

</details>

**Dan Fu**: 对。是的。所以我们**Together**对此思考了很多，因为，你知道，即使在这个模型和智能体都非常出色的世界里，我们仍然在积极招聘。我们是这样思考的。首先，我，你知道，教授和我，实际上录制了一系列关于**GPU**如何工作的讲座。所以我让每个人都看那些讲座，然后我仍然给他们一个从零开始的任务，那就是，好的，去拿这个**Flash Attention**内核，并修改它来做一些其他的事情。你可以选择额外的功能。智能体的好处是，你可以以以前无法做到的方式，深入到那个**高影响力**的角色中。所以，我认为当一个初级**IC**第一次尝试管理某人时，它真的很有影响力，因为你突然开始以更精确的术语思考。所以，你知道，经典的**软件工程师**会说，嘿，**PM**让我做这个，并写了一份超长的文档，里面有所有这些要求，但当你尝试让别人做某事时，你就会意识到当你想要解决一个功能或类似的事情时，你需要多么具体。智能体的好处是，你几乎可以开始**捷径**这个过程，你可以让初级**IC**仍然是**IC**，仍然做**IC**风格的贡献，但他们现在可以扮演那个经理角色，并充当他们自己的**PM**。因为当你与智能体沟通时，你需要尽可能精确地说明你想要完成什么。所以，从某种意义上说，我看到了那些真正，你知道，加入我团队的初级人员。所以，这些是刚毕业的大学生或硕士生。当他们真正热衷于理解和使用**AI智能体**时，他们能够比过去更好地沟通。他们能够更快地提升他们的理解水平。然后当然，他们可以以一种在五到十年前会非常非常困难的速度做事情和构建工具。

<details>
<summary>Original English</summary>

**Dan Fu**: Right. Yeah. So we we think about this a lot together because you know we're we're still hiring aggressively even in this world where the the the models are very good, the agents are very good. the way we think about it. So, first I actually went, you know, the professor and me went and actually recorded a bunch of lectures on how **GPUs** work. Um, so I I make everybody watch those and then I still give them um a a task from scratch, which is, okay, go take this **Flash Attention** kernel and modify it to do some other thing. You can pick the the extra feature. The nice thing about the agents is that you can dive into that higher impact role in a way that you weren't able to before. So it's really impactful I think when a junior **IC** goes to try to manage someone for the first time um because you're suddenly starting to think in much more precise terms. So um you know the the classic software engineer thing is hey the **PM** asked me to do this and wrote this super long doc with all these requirements but then the minute that you try to go ask someone else to do something you realize the specificity that you need when you want to address a feature or something like that. The nice thing about agents is you can almost start to shortcut that process where you can have the junior **IC**, still be an **IC**, still do **IC** style contributions, but they can now act as that manager role and act as their own **PM**. Um, because when you're communicating with the agents, you need to be as precise about what what you're trying to get done. So, in some sense, I've seen um with the with the really uh you know, the junior folks who are joining my team. So, these are folks fresh out of college or or fresh out of a masters. Um, when they are really gung-ho about understanding and being able to use the **AI** agents, they're they're able to communicate so much better than in in the olden days. They're they're able to level up their um their level of understanding a lot faster. Um, and then of course they they can do things and build tools at a speed that that um would have been really really hard to do, you know, 5 10 5 10 years ago.

</details>

**Tim Dettmers**: 也许我可以在那里补充一些教育方面的观点，因为我认为这相当有趣。它有点对比。所以，从智能体的角度来看，教育方面也相当有趣。我谈了很多，基本上是“使用智能体，否则你将被淘汰”，这对于学生来说也是如此。但就像**Dan**说的那样，你需要**领域专业知识**，你需要有一些知识才能很好地使用智能体。我们看到的是，如果我们允许学生使用智能体，他们会非常高效，但有时他们会构建看起来正确但实际上非常糟糕或完全错误的解决方案，而他们自己却没有意识到。我们现在处于这样一个阶段，学习**领域专业知识**和使用智能体几乎变得非常困难。这是一个非常难以实现的平衡，因为我们不希望学生不理解事物，但我们也希望学生能够使用智能体，如果他们不能做到这一点，他们就无法在劳动力市场中有效工作。**Dan**说的是，你已经有一个背景知识扎实的人，然后那个人可以提升自己。他们配备了智能体。但如果你有一个刚刚学习计算机科学的人，他们应该学习多少**AC**？你应该在没有智能体的情况下做多少工作？这是一个非常棘手的平衡，我们不知道如何解决。如果我们让人们使用智能体，他们在基本知识方面的表现会非常差。如果我们让人们只学习平衡知识，他们就不知道如何使用智能体，也无法竞争。所以他们现在无法在劳动力市场中做有用的工作。也许他们的解决方案是先学习所有基本知识，然后再学习智能体。但学生不是这样做的。学生可以使用这些**AI工具**。他们会使用它们，因为这很容易。所以也许解决方案是，你只需要一种思考方式和一种处理你不理解和不发展的信息和知识的方式。我的意思是，有**批判性思维**。我认为这超越了**批判性思维**。你基本上需要了解**未知中的未知**，那些你没有考虑过、不理解甚至没有想过的事情。你需要具备这种能力，更多地思考这些，才能真正跟上智能体的步伐，因为我认为在未来，我们处理我们不理解但智能体理解的问题是现实的，但我们需要以某种方式跟上，那将是困难的。

<details>
<summary>Original English</summary>

**Tim Dettmers**: And maybe I'll add sort of the educational perspective there because I think it's sort of quite interesting. It's a little bit sort of contrasting. So what is also quite interesting is the educational perspective sort of from agents. I talk quite a bit that um basically use agents or be left behind and that is also true for students but just like as **Dan** said um you need the domain expertise you need to have some knowledge to use agents. Well, what we're seeing is if we allow students to use agents, they are very productive, but sometimes they build solutions that look correct that are actually very bad or just wrong and they don't realize. We at this point where it's almost very difficult to learn both domain expertise and uh a agent use. That's a very difficult balance to achieve uh because we don't want to have students that don't understand things, but we also want to have students that um and basically can use agents and so if they can't do that, they will not be effective in the workforce. What **Dan** said is you already have a pretty good person with strong background knowledge and then that person can level up. They're equipped with agents. But what do you do if you have someone that just learns computer science? How much **AC** should they learn? how much just um work should you do without agents and that's a very tricky balance and we don't know how to solve it. If we let people use agents, they perform very poorly on basic knowledge. And if we let people just do the balancing knowledge, they don't know how to use agents and they can't compete. So they can't do useful work in the in the workforce nowadays. Maybe the their solution is do all sort of the basic knowledge first and then agents. But that's not what students do. Students have access to these **AI** tools. They will use them because it's easy. And so maybe the solution is just you need a way of thinking and of working with information and knowledge that you don't understand and develop. I mean there's critical thinking. I think this goes beyond critical thinking. You basically need to uh basically know the unknown unknowns things that you didn't consider and don't understand and that you didn't even think about. you need to have that ability to think more about that to really keep up with agents because I think in the future it's realistic that we work on problems that we don't understand that agents understand but we need to keep up in some way um that would be difficult.

</details>

### 当前工作与2026年展望

**Matt Turk**: 好的。那么，随着我们接近这次对话的尾声，你们目前都在忙些什么？在**艾伦研究所**和**Together**，你们最关注的是什么？谁想先说？

<details>
<summary>Original English</summary>

**Matt Turk**: All right. So to switch ts as we uh get uh closer to the end of this conversation what are you guys currently working on? what's top of mind for you at um **Allen Institute** on the one hand, together on the other hand, whoever wants to take it first.

</details>

**Tim Dettmers**: 嗯，我们实际上有一个非常激动人心的项目，将在未来几周内发布。我一直在效率方面做了很多工作。我基本上已经将我的工作转向了**代码智能体**，所以我们将发布一个**开源代码智能体**的主要版本，它具有几个关键功能。首先，训练成本降低了100倍。你需要生成**合成数据**，然后在此基础上进行训练。我们有一种方法，成本大约降低了100倍，但仍然能获得**最先进的性能**。然后我们还有另一个主要成果，你可以将其视为**开源模型**的**圣杯**，那就是我们可以获取一个私有代码库，比如你有一家公司，你拥有这个代码库，云端不知道你的代码库，但你拥有数据，你可以在其中找到一个模型。所以我们所拥有的是，你可以直接将我们的方法指向那个仓库，你不需要有任何测试，也不需要理解如何生成数据。它是完全自动化的。你可以快速生成数据，然后你就会拥有一个像**前沿模型**一样的智能体，但你可以拥有一个320亿参数的智能体。你可以本地部署。你可以拥有一支由专门模型组成的“军队”，用于特定的任务，特定的代码库等等。是的，我认为这是一个非常强大的成果。所有这些也都与**代码智能体科学**打包在一起。有很多混杂因素，论文中有很多未提及的隐藏内容。我们挖掘出它们，构建**缩放定律**，并展示什么重要，什么不重要。如果把所有这些结合起来，我认为这些简单的智能体，只需要很少的**GPU**，每个人都可以非常容易地使用它。我们通过揭示所有这些“秘密”来解放人们。我认为在**代码智能体**的进展速度方面将发生巨大的变化。

<details>
<summary>Original English</summary>

**Tim Dettmers**: Well, we have actually sort of a very exciting project that will be released uh very soon in the next weeks and um so I worked quite a bit of efficiency. Um, I've been switching my work basically to coding agents and so we will have a major release of an open source coding agent that has a couple of key features. For one, training is 100 times cheaper. Um, you need to generate synthetic data, then you need to train on it. And so we have a method that's 100 uh roughly 100 times cheaper, but still get state-of-the-art performance. And then uh we have another sort of major result uh which um you can almost see as a holy grail of open source um models and that is we can take a private codebase like you have a company you have this codebase uh cloud doesn't know your codebase but um you have the data you can find a model in it so uh what we have is you can just point our method to that repository you don't need to have any sort of tests or um need to understand how to generate the data. It's just automatic. You quickly generate the data and then you have um an agent that is as a frontier model, but you can have like a 32 billion agent. You can deploy locally. You can have an army of specialized models for particular tasks for particular code bases and so forth. And uh yeah, I think that that is a very powerful results. All that is also packaged with um a science of coding agents. There are a lot of confounding factors, a lot of hidden things in papers that are not mentioned. We sort of unearth them, uh, build scaling laws and show what does matter and what doesn't matter. And if you put all of that together, I think the sheet agents, very few **GPUs**, everybody can use it and very easily. We unblock people by revealing all the sort of secrets. I think there will be a vast change in terms of how quickly we can progress in coding agents.

</details>

**Matt Turk**: 太酷了。你呢，**Dan**？

<details>
<summary>Original English</summary>

**Matt Turk**: Very cool. What about you, **Dan**?

</details>

**Dan Fu**: 是的。所以在**Together AI**，我认为我们今天试图回答的主要问题是，我们拥有所有这些强大的**AI模型**，它们可以做所有这些惊人的事情。它们今天运行起来非常昂贵。所以，你知道，所有公开市场的问题都是，**OpenAI**是否能够盈利？**Together AI**真正令人兴奋的地方在于，我们正处于让这些模型尽可能好地利用硬件的最前沿。我们之前在播客中谈到了一些关于训练的事情。在**推理**时，当模型已经训练好并经过**后训练**时，硬件利用率低于5%。所以，我们还有很多可以做的事情。我们可以从这些模型中榨取更多的效率。我们非常兴奋地研究如何以最好的方式利用硬件。无论是为像**Cursor**这样的客户提供服务，还是为下一个伟大的**基础模型**公司提供服务。但是的，我们非常兴奋地推动这个前沿，然后真正将我们带到这个未来，你知道，如果这些模型像你想象的那样具有影响力，如果它们将无处不在，运行你的日常生活，你知道，运行你的烤面包机，那么，我们最好把它做成我们能做到的最好的烤面包机。

<details>
<summary>Original English</summary>

**Dan Fu**: Yeah. So **Together** I think the the the major question that we're trying to answer today is we have all these powerful **AI** models that that can do all these amazing things. They're very expensive to run today. So you know the the question in all the public markets is like is **OpenAI** going to be able to turn a profit um ever. Um and what's really exciting about **Together** is that we are kind of on the forefront of getting the these models to to use the hardware as as good as it can. Um, we talked a little bit about training, you know, ear early on in the podcast. At inference time, when the when when you have the model, when it's already been trained, already been post-trained, the hardware utilization is like less than 5%. Um, so it's it's at a place where there's so much more that we can do. There's so much more efficiency that that we can push out of these. And we're really excited about figuring out how to use the hardware the the best way that we can. Um, whether it's serving, you know, customers like **Curser** or or whatever the the next great foundation model company is. Um, but yeah, we're we're really excited about pushing that frontier and then really getting us to this future that the that, you know, if these models are going to be as impactful as you think, if they're going to be running everywhere, running your daily lives, uh, you know, running your toaster, uh, well, we better make it the the best possible toaster that we can.

</details>

**Matt Turk**: 你想谈谈**Mega Kernels**和**Together Atlas**一分钟吗？

<details>
<summary>Original English</summary>

**Matt Turk**: Do you want to talk about uh, **Mega Kernels** and **Together Atlas** for a minute?

</details>

**Dan Fu**: **Together Mega Kernels**，**Together Atlas**。这两个都是沿着这些方向的项目。所以，让我先深入探讨**Mega Kernels**。要理解这一点，当我们说**内核**时，我们通常指的是我们将为模型中的单个操作编写一个专门的**GPU**程序。你可以将模型视为一系列不同的操作，其中会有数百个。我们编写内核的方式，在**Nvidia**硬件的整个历史中，都是为单个操作专门编写单个内核。而使用这些**Mega Kernels**，我们正在做一些非常有趣的事情，那就是我们可以将整个模型，无论有多少亿参数，都放入一个**GPU**内核中。通过这样做，你可以开始进行比以前更多的**细粒度优化**。它实际上开始让**Nvidia GPU**看起来更像**Cerebras**芯片，或者更像**Samanova**芯片，就你能够进行的优化而言。这在**推理**时非常关键。所以，我们能够看到2倍，有时甚至3倍的加速，即使是与高度优化的**推理引擎**相比。所以我们正在努力将其投入生产，使其实现并将其应用于我们整个**Together**堆栈。**Atlas**是我们最近完成的另一个非常棒的有趣研究项目，我们可以获取模型。有一种技术叫做**推测解码**，我们在**推理**时使用它，基本上我们有一个小模型试图猜测大模型会做什么，因为我们设计语言模型的方式。如果小模型猜测正确，你基本上可以免费获得这些**token**。所以如果你正确地进行**推测解码**，你又可以获得2倍到3倍的加速，与仅仅运行一个普通模型相比。使用**Together Atlas**，我们做了一件额外的事情，那就是我们说：“好的，我们可以获取那个小模型，并且我们可以根据你的流量来调整它。”你使用这个模型的时间越长，它就越能学习你提问的模式，你说话的模式，它实际上可以随着时间的推移变得更快。所以所有这些事情，你知道，我们都考虑到了效率，特别是**推理效率**，我们都在努力让所有这些事情变得更快。

<details>
<summary>Original English</summary>

**Dan Fu**: **Together Mega Kernels**, **Together Atlas**. These are both um, projects along these lines. So, let me dive into the mega kernels first. So to understand this uh the the first thing when we say kernels is we usually mean we are going to write a specialized **GPU** program for a single operation in a model um you can think of as model as one of these train models is like **ABC** different operations in a row and there will be hundreds of these and the way that we've been writing kernels for the whole history of let's say call it **Nvidia** hardware is that you really specialize a single kernel for a single operation with these **mega kernels** we're doing something quite interesting which is we can take the entire model, however many billions of parameters, and put it into a single **GPU** kernel. Um, and with that, you can start to do a lot more fine grain optimization than you were able to do before. Uh, it actually starts to make the **Nvidia GPU** look a little bit more like a **Cerebras** chip or look a little bit more like a **Samanova** chip in terms of the the optimization that you're able to do. And this is really critical at inference time. So, we're able to see 2x sometimes 3x speed ups um over even highly optimized inference engines. Um, so we're working on bringing that to um uh to to really work in production, bring bring it to fruition and and use it across our whole stack together. **Atlas** is another really great uh interesting research project that we've done recently where we can get the model. There's this uh there's this technique called **speculative decoding** that we use at inference where basically we have a little model that is trying to guess what the big model is going to do and because of the ways that we've designed language models. If the little model guesses correctly, you basically get those tokens for free. Um so if you do the **speculative decoding** right, you can get again 2x 3x speed ups um over over you know just just running a a vanilla model. Um, with **Together Atlas**, we do one extra thing, which is we say, "Okay, we can get that little model and we can actually adapt it to your traffic." The longer you use this model, the more it learns the patterns of what you're asking, of what you're saying, and it can actually get faster over time. Um, so all these things, you know, we we have efficiency in mind, inference efficiency in particular, and we're all kind of pushing towards um making making all these things faster.

</details>

**Matt Turk**: 你对2026年有什么期待，在一个相对细致的层面上？你认为会发生什么？你认为不会发生什么？

<details>
<summary>Original English</summary>

**Matt Turk**: What are you excited about for 2026 at a reasonably granular level? Like what what do you think happens? What do you think doesn't happen?

</details>

**Tim Dettmers**: 是的。所以，我认为两者都有点分裂。我认为很多事情会非常无聊，没有太多创新，但我们也会被一些我们可能没有预见到的事情所惊喜。我认为实际上在前沿领域，我们会更少感到惊讶。我的意思是，我们**预训练数据**耗尽已经不是秘密了，就像**Dan**说的，这些是肌肉。然后你可以进行平滑处理，你用**合成数据**进行平滑处理，这就是你如何在许多不同的环境中构建**代码智能体**并组合数据的方式。我们在这方面取得了一些进展，但我认为你已经看到了机器的学习。我不认为**代码智能体**会好那么多。用户体验可能会改善。但是，你会发现所有这些模型都变得几乎一样好，就像我使用我的**GLM 4.7**配置时，我以为我正在使用**Opus 4.5**，然后后来才意识到，哦，等等，我使用的是不同的模型，因为它们保持得非常相似。所以，我认为我们在那方面会看到更少的进展。我认为我们会在哪里看到更多进展呢？实际上是**小型模型**。如果你在更专业的数据上训练**小型模型**，它们可以做得很好。而且你得到的**小型模型**，它们非常强大。一个1000亿参数的模型，你可以很好地适应它。即使是像**RTX 6000**这样成本6000美元的低端数据中心**GPU**。我认为对于很多公司来说，这将非常有趣。他们不需要依赖**前沿模型**。**小型模型**甚至可能更好，因为它们是专业化的。一个大问题，就像**Anthropic**的**CEO**指出的那样，你拥有这些强大的**开放速率模型**，但没有人使用它们，因为部署非常复杂，这是因为一旦你超越8个**GPU**，你首先需要用户使其高效，但随后在系统中也非常复杂，目前没有**开源系统**可以做到这一点，你需要**解耦推理**，跨**序列长度**进行分离等等。也许我们可以构建这个，我们也可以为**HGPU**机器构建这个，用于**小型模型**，然后你用1000亿参数模型看到的效率将与**前沿模型**相媲美。所以你将获得**小型模型**的效率。你将获得**小型模型**的灵活性。**前沿模型**的性能将停滞不前，但在较小的层面上，我们仍然会获得更强大的模型，因为你可以从这些大型模型中提取到这些**小型模型**中，综合起来。我认为那将改变事情。

<details>
<summary>Original English</summary>

**Tim Dettmers**: Yeah. So I think they're both sort of um I'm sort of split. I think a lot of things will be very boring and not much innovation, but then we also surprised by a couple of things that we maybe don't see. And I think actually sort of in the frontier we will be less surprised. I mean it's no secret that we ran out of pre-training data and as **Dan** said like these are sort of the muscles. Then you can sort of smooth over and you smooth over with synthetic data and um that's how you build coding agents um on lots and lots of different environments and combine the data. U we make some progress there but I think you already see the machine learns. I don't think coding agents will be that much better. The user experience will probably improve. uh but um you see it that um all these models get almost equally good like if I use um I had my u config like uh **GLM 4.7** setup and I used it and I thought I was using **Opus 4.5** and then later realized oh wait I use a different model because they keep quite similar and so I think we see less progress there where I think we see more progress is um actually the small models if you train smaller models on more specialized data, they can do quite well. And the smaller models you get, they're pretty powerful. A 100 billion parameter models, you can fit it pretty well. Even sort of low-grade data center **GPU** like an **RTX 6,000** cost $6,000. I think for a lot of companies, it will be very interesting. They don't need to rely on the frontier models. The small models might even be better because of specialized. Big problem and like uh **Anthropic CEO** pointed it out you have these powerful open rate models but nobody uses them because the deployment is so complex and that is because once you go beyond 8 **GPUs** that you first need the users to make it efficient but then also very complicated in systems there's no open source system that can do that at the moment you need disagregated infrance separation across sequence lengths and so forth perhaps um we can build this we can build this also for an **HGPU** machine for smaller models and then the efficiency that you see with a 100 billion model will rival what frontier models have. So you will get the efficiency of small models. You get the flexibility of small models. Performance on the frontier will stagnate but on the smaller level we get more more powerful models still because you can distill from these large models into these small models and taken together. I think that will change things.

</details>

**Dan Fu**: 我也对**小型模型**感到非常兴奋。我认为我们将看到它们释放出更多的能力。我将密切关注**开源模型**。我认为，你知道，像**GLM 4.7**这样的东西，你已经开始看到了。你已经开始看到**开源模型**与我们目前最好的**前沿模型**相媲美。我认为今年我们将看到**开源能力**的又一次大飞跃。我非常期待看到新硬件。我们已经开始听到一些关于**Reuben**的消息，它是**Nvidia**下一代**GPU**。我认为我们已经开始听到一些关于**AMD 400系列GPU**的消息。我非常期待看到硬件能力的下一次飞跃是什么，即使我们还没有完全利用当前一代的硬件。我很高兴看到人们如何处理所有其他**模态**。我认为去年**视频生成模型**在**Sora 2**、**Gemini**以及他们称之为**VO**的东西上经历了一个小高潮。我非常期待看到它们能做什么。是的，我非常期待看到，你知道，你可以在笔记本电脑或手机上获得的智能前沿是什么，你能把它推到多快？你能把它推到多远？我认为现在是从事**AI**工作最激动人心的时刻。

<details>
<summary>Original English</summary>

**Dan Fu**: I'm also you know really excited about small models. I think uh we're going to see a lot more capability out of them. Um I'll be watching the open source uh models pretty closely. I think uh you know with things like **JM 4.7**, you're starting to see it. You're starting to see the open source models rival some of um at least our current best **Frontier models**. Uh I think we're going to see another big jump in open source capabilities this year. Um I'm really excited to see new hardware. So we're starting to hear a little bit about **Reuben**, uh the next generation of **Nvidia** uh **GPUs**. I think we're starting to hear a bit about the **AMD 400 series of GPUs**. Um really excited to see kind of what that next jump in hardware capabilities is even as we haven't fully kind of used even the current generation of hardware. I'm excited to see what people do kind of with all the other modalities. I think last year video generation models had a little bit of a moment with **Sora 2** with with **Gemini** um and and **VO** I think they called it. Really excited to see what what they can do. Um, and yeah, really excited to just just see, you know, what is that frontier of of intelligence that you can get on your laptop or on your phone and how fast can you push it? How how far can you push it? I think it's never been a more exciting time to work in **AI**.

</details>

### 后Transformer架构

**Matt Turk**: 你们俩在对话早期都提到了**状态空间架构**。你认为这会是我们未来演变为**后Transformer架构**的一部分吗？无论是**状态空间**、**JA世界模型**还是其他方向，你认为这在近期会实现吗？你认为这是可取的吗？

<details>
<summary>Original English</summary>

**Matt Turk**: You both mentioned state space architectures earlier in the conversation. Do you think that's part of the near future that we sort of evolve to post transformer architectures whether state space ja world models whatever direction is that something that you see in the near-term horizon and that you think is uh desirable?

</details>

**Dan Fu**: 我认为在很多地方它们已经存在了。世界上一些最好的**音频模型**至少部分基于**状态空间模型**。我认为**Nvidia**最近发布了一系列非常棒的**混合模型**。我认为他们称之为**Neotron**。所以那里已经有很多非常棒的工作了。我认为我们将看到架构继续发展。所以在某种意义上，**DeepSeek MLA压缩**采纳了一些这些想法。其中一个**miniax模型**有一个**线性注意力**的想法。所以，我认为你会看到架构的多样性大大增加。你已经看到了。但肯定，肯定我认为来自**中国实验室**的成果会更多，因为那里并没有真正的“中国版**OpenAI**”，对吧？所以没有像**OpenAI**、**Anthropic**或**Google Gem**那样的公司，将所有这些产品、模型和收入中心整合在一起。所以，我认为你会看到**中国实验室**承担更多的风险，他们试图区分下一个模型，你的下一个**开源模型**。做到这一点的一种方式是架构。当然，另一种方式是纯粹的质量。所以，我认为我们将看到更多不同架构的爆发。

<details>
<summary>Original English</summary>

**Dan Fu**: I think uh in a lot of places they're they're already there. So some of the best audio models in the world are at least partially based on **state space models**. I think **Nvidia** released a bunch of really great hybrid models recently. I think uh **Neotron** is is what they called them. And so there there's a lot of really great um work kind of there already. Um I think we will see the architectures continue to evolve. So um in some sense the **DeepSeek MLA compression** takes some of those ideas. Uh one of the **miniax models** had sort of a **linear attention** idea. So I think you're going to see a lot more diversity in architectures. You're kind of already seeing it. Um but certainly certainly I think out of the **Chinese labs** where um there isn't really an **OpenAI of China** right so there there isn't like an **OpenAI** orthropic or or or a **Google gem** right that kind of brings all these you know these um centers of like product and model and revenue and all those together. So um I think you see a lot more risk takingaking out of the **Chinese labs** where you're trying to differentiate the next model your next open source model. One way to do that is architecture. Um another way to do that of course is just pure quality. So I think we're we're going to see a lot more explosion of of different architectures.

</details>

### 结束语

**Matt Turk**: 好的。这是一次引人入胜的对话。非常感谢你们的时间、见解和想法。非常感谢。

<details>
<summary>Original English</summary>

**Matt Turk**: All right. Well, this has been a fascinating conversation. Really appreciate the time and insight and thoughts. Thank you so much. Really appreciate it.

</details>

**Tim Dettmers**: 是的，非常感谢，**Matt**。

<details>
<summary>Original English</summary>

**Tim Dettmers**: Yeah, thank you so much, **Matt**.

</details>

**Dan Fu**: 非常感谢你们的邀请。很高兴见到你，**Tim**。这很有趣。

<details>
<summary>Original English</summary>

**Dan Fu**: Thanks so much for having us. Great to see you, **Tim**. This was a lot of fun.

</details>

**Matt Turk**: 大家好，我是**Matt Turk**。感谢收听本期**Mad Podcast**。如果你喜欢本期节目，如果你还没有订阅，或者在任何你观看或收听本期节目的平台上留下积极的评论或评价，我们将不胜感激。这真的有助于我们发展播客并邀请到优秀的嘉宾。谢谢，下期节目再见。

<details>
<summary>Original English</summary>

**Matt Turk**: Hi, it's **Matt Turk** again. Thanks for listening to this episode of the **Mad Podcast**. If you enjoyed it, we'd be very grateful if you would consider subscribing if you haven't already, or leaving a positive review or comment on whichever platform you're watching this or listening to this episode from. This really helps us build a podcast and get great guests. Thanks, and see you at the next episode.

</details>