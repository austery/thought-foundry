---
author: a16z
date: '2025-12-08'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=wZ4DT20OHXE
speaker: a16z
tags:
  - analog-computing
  - ai-hardware
  - agi-path
  - energy-efficiency
  - neural-networks
title: 构建解锁AGI的芯片：Naveen Rao谈模拟计算与AI的未来
summary: Naveen Rao，Unconventional AI的联合创始人兼CEO，深入探讨了其新公司如何通过模拟计算重新构想AI硬件。他解释了模拟系统在能效和处理动态、模糊数据方面的固有优势，并将其与大脑的工作方式进行类比。Rao强调，当前数字计算范式面临全球能源限制，而模拟计算可能是实现通用人工智能（AGI）的关键路径，同时解决AI计算的能耗挑战。他还分享了创业的动力、团队建设理念以及对AI作为人类进化的下一阶段的乐观展望。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
  - entrepreneurship
people:
  - Naveen Rao
  - Alex Honnold
  - Steph Curry
  - Yann LeCun
companies_orgs:
  - Unconventional AI
  - Nvidia
  - TSMC
  - Google
  - Intel
  - Databricks
  - Microsoft
products_models:
  - Nirvana
  - Mosaic
  - TPU
  - Transformers
  - Diffusion Models
  - Flow Models
  - Energy Based Models
media_books:
  - Star Trek
status: evergreen
---
### 引言：AI与人类的下一阶段进化

我认为**AI**（Artificial Intelligence: 人工智能）是人类的下一次进化。我认为它将我们带到一个新的水平，使我们能够以更深入的方式协作和理解世界。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think AI is the next evolution of humanity. I think it takes us to a new level. Allows us to collaborate and understand the world in much deeper ways.</p>
</details>

>> Naveen Rao是一位AI专家。Naveen Rao可能是这个领域最聪明的人之一。他总能在别人之前看到事物。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Naveen Ralph is here expert in AI. >> Naveen Ralph probably one of the smartest guys in this domain. He sees things well before anybody else sees them.</p>
</details>

### 为何现在创立一家新的芯片公司？

>> 您在**Nirvana**（一家AI芯片加速器公司）、**Mosaic**（一家云公司）和Databricks都取得了巨大成功。为什么现在要创立一家新的芯片公司？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> You had a lot of success doing Nirvana Mosaic and data bricks. Why start a new chip company now?</p>
</details>

首先，它本身并不是一家芯片公司。我们所做的大部分工作实际上是在探究学习如何在物理系统中运作的**第一性原理**（First Principles: 指的是事物最基本、最核心的构成要素或原理）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> First off, it's not a chip company per se. Most of what we're doing is really kind of looking at first principles of how learning works in a physical system.</p>
</details>

>> Nvidia、**台积电**（TSMC: Taiwan Semiconductor Manufacturing Company，全球最大的专业集成电路制造服务公司）、Google——这些是**Unconventional AI**（一家专注于AI芯片的初创公司）的潜在盟友还是竞争对手？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Nvidia, TSMC, Google. Are these potential allies for unconventional? Are these competitors?</p>
</details>

我认为台积电绝对会是我们的合作伙伴。Google内部拥有所有资源。当然，Nvidia构建了当今所有人都在编程的平台。那么，我们将来会与Nvidia产生冲突吗？我不知道。我们将拭目以待世界会变成什么样，但我们也有可能进行合作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, I think TSMC is absolutely going to be a partner. Google kind of has everything internally. And Nvidia, of course, they built the platform that everyone programs on today. So, are we going to be at odds with Nvidia going forward? I don't know. We'll see what the world looks like, but there could be a world where we collaborate.</p>
</details>

>> 有人说你做这件事很疯狂吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Has anyone called you crazy yet for doing this?</p>
</details>

哦，是的。很多人都这么说。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Oh, yeah. Plenty of people.</p>
</details>

我们今天的嘉宾是Naveen Rao，Unconventional AI的联合创始人兼CEO。在此之前，Naveen曾在Databricks担任AI负责人，并且是两家成功公司的联合创始人：云计算领域的Mosaic和在AI芯片加速器尚未流行时就从事该领域的Nirvana。我们正在从NeurIPS大会现场进行报道。非常高兴邀请您参加播客，Naveen。欢迎。谢谢，谢谢邀请。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our guest today is Naveen Ralph, co-founder and CEO of Unconventional AI, which is an AI chip startup. Prior to that, Naveen was at data bricks as head of AI and co-founder of two successful companies, Mosaic in the uh cloud computing world and Nirvana uh doing AI chip accelerators uh before it was cool. Um uh we're here reporting from Nurups. Um and uh yeah, great to great to have you on the on the podcast, Vivian. Welcome. Thanks. Thanks for having me.</p>
</details>

### AI硬件的演进与全栈思维

>> 您一直走在思考如何为AI工作负载提供适当硬件的前沿。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, you were kind of at the vanguard thinking about what the proper hardware is for running AI workloads.</p>
</details>

当然。我的意思是，你知道，就像当你手里拿着锤子时，一切看起来都像钉子一样。但我职业生涯的早期主要是关于如何将某些算法和功能进行压缩，使其更快，并将其放入能够使这些用例普及的尺寸中，比如无线技术或视频压缩。你知道，那时你无法在笔记本电脑上实时进行视频压缩。那时根本没有足够的计算能力。所以你实际上需要构建硬件来做这些事情。我职业生涯的早期就是关于这些。然后我回到学术界，获得了神经科学博士学位。所以你仍然会思考，嘿，我能否制造出更高效、更好的东西？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Absolutely. I mean, you know, it's like uh when you have a hammer, everything's a nail, I suppose. But the early part of my career was really about how do I take certain algorithms and uh capabilities and shrink them, make them faster, put them into form factors that uh make them make those use cases proliferate like wireless uh technology or video compression. you know, you couldn't do video compression in real time on a on a on a laptop back then. It was just there wasn't enough uh computing power. So, you actually needed to build hardware to do those kind of things. So, my career was early part of my career was all about that. And uh you know, then I went back to academia, did a PhD in neuroscience. And so, you still kind of look at it like, hey, can I make something better that's more efficient?</p>
</details>

>> 所以您把Nirvana卖给了英特尔。是的。然后创立了Mosaic，一家云公司。像这样跨领域发展很有趣。我认为能够同时审视硬件和软件，你知道，我可以说Mosaic实际上是一家软件公司。您是如何做出这个决定的，为什么您会有这些多元化的兴趣？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And so, you sold Nirvana to Intel. Yeah. >> Um and and then uh founded Mosaic, which is a cloud company. You know, it's interesting to sort of cross domains like that. I think to be able to look at hardware and software, you know, I would sort of argue Mosaic was really a software company. You know, how how'd you make that decision and and why, you know, why, you know, why do you think you have these diverse interests?</p>
</details>

嗯，我想我当时，我不知道，我想你会称之为一种**OG**（Original Gangster: 俚语，指某个领域的老前辈或元老）式的全栈工程师。现在，全栈工程师的含义与那时不同。我想那时它指的是一个可能了解设备（比如硅）、如何进行逻辑设计、计算机架构、低级软件（也许是操作系统级别软件）以及应用程序的人，那才是一个全栈工程师。而我实际上接触过所有这些领域，所以对我来说，跨越这些界限思考是非常自然的。你知道，对我来说，软件和硬件之间并没有真正的自然界限，这只是我们决定在哪里划清界限，说“好的，这是我可配置的”或者“我不可配置的”。你知道，这就像世界将如何消费某种东西，问题在哪里，然后你就可以适当地调整并找出解决方案来解决它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Well, I think I was, I don't know, I guess you would call it an OG kind of full stack. Now, full stack engineer means something different that meant back then. I think back then it had someone who understands potentially devices like silicon how to do logic design computer architecture uh low-level software maybe OS level software and then application that was a a full stack engineer and I was I I actually had touched all those topics so to me it was very natural to kind of think across these boundaries you know to me like uh software and hardware is is not really natural boundary it's just where we decide to draw the line and say okay this is something I configurable or I don't and uh you know it's it's like where where is the world going to consume something where is the problem and then you know right size and figure out the the solution to go and hit it</p>
</details>

>> 现在全栈意味着我懂JavaScript和Python。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> now full stack means I know JavaScript and Python</p>
</details>

没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> that's right</p>
</details>

>> 所以您在这些方面都取得了很大的成功，包括在Databricks。为什么现在要创立一家新的芯片公司？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> you know so you've had a lot of success doing both of those things and at data bricks um why start a new chip company now</p>
</details>

### 重新构想计算机：模拟计算的潜力

这有点疯狂。实际上，我首先要说它本身并不是一家芯片公司。我们目前所做的大部分工作是理论研究，真正从第一性原理的角度审视学习如何在物理系统中运作。之所以回来做这件事，纯粹是出于热情。我认为我们可以改变计算机的构建方式。八十年来，我们一直在建造大致相同类型的计算机。我们在20世纪40年代进入了数字时代，你知道，在20世纪90年代读大学时，当我了解到大脑的热力学时，比如大脑消耗20瓦的能量，以及大脑和神经系统内部能够进行的计算类型，我当时就被震撼了，现在仍然如此。我认为我们还没有真正触及如何接近那种生物效率的表面。生物学是极其高效的，它非常快，并且能根据手头的应用进行自我调整。比如，当你放松时，你不会消耗太多能量，但你仍然会意识到其他威胁等等。一旦威胁发生，一切都会启动。它是非常动态的，我们还没有真正构建出这样的系统。你知道，我在这个行业待了足够长的时间，知道我们必须有动力去构建事物。你不能仅仅说，嘿，我想构建这个很酷的东西，然后就去构建它。也许在学术界你可以这样做，但在现实世界中我不能。现在令人兴奋的是，这些概念变得非常相关。我们正处于一个计算在全球层面受到能源限制的时代，这在人类历史上从未发生过。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> it is kind of crazy it's it's one of these things like u actually I was first off say it's not a chip company per se most of what we're doing is at the beginning is theory and uh really kind of looking at first principles of how learning works in a in a in a in a a physical system. Um and the reason to go back and do this is just purely out of passion. I think we can we can change how a computer is built. We've been building largely the same kind of computer for 80 years. We went digital back in the 1940s and um you know in undergrad in the 1990s when I learned about you know the therm the thermodynamics of the brain like the brain's 20 watts of energy and you know the kind of computations that can happen inside of brain and neural systems I I was just blown away then I'm still blown away by it and I think um we haven't really scratched the surface of how we can get close to that you know biology is exquisitly efficient it's very fast it right sizes is itself to the application at hand. Like you know when you're chilling out you don't use much energy like you just but you're still aware of other threats and things like this then once you know a threat happens like everything turns on. It's very dynamic and we really haven't built systems like this and you know I I've been in the industry long enough to know that we have to have an incentive to build things. You can't you can't just say hey I want to build this cool thing and therefore I go build it. Maybe in academia you can do that but in the in in sort of the real world I can't. And uh now it's exciting because those concepts are super relevant. We're at a point in time where uh computing is is is bound by energy at the global level, which just was never true in all of humanity.</p>
</details>

>> 那么对于我们这些非专家来说，您能否描述一下数字和模拟计算系统之间的区别？以及您认为为什么几十年来架构会朝着更偏向数字的方向发展？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And and so for for those of us who aren't experts um can you describe the difference between digital and analog computing systems and and you know like why do you think the the architecture has evolved the way it has sort of more more digital focused over over decades as you said?</p>
</details>

### 数字与模拟计算：历史与效率

是的，简单来说，数字计算机实现的是数值计算，以及带有某种估算的数值计算。我的意思是，在数字计算机中，一个数字由固定数量的位表示，这会带来一些精度误差等问题。这只是我们实现系统的一种方式。如果你使用足够多的位，比如64位，你大体上可以说误差很小，不必考虑它。所以，数字计算机能够模拟任何可以表示为数字和算术的东西。因此它成为一台非常通用的机器。我实际上可以模拟任何物理过程。我们试图进行所有的计算物理学，对吧？我有一个方程，然后我可以编写数值求解器来处理那些位数上的不精确性。因此，这显然成为了计算机科学，现在是整个领域。我们很早就朝着这个方向发展，因为我们无法扩展计算。实际上，如果你回顾过去，这是一个有趣的对话。当然，那时还没有，但如果你看看当时的论文和资料，它们实际上与今天**图形处理器**（GPU: Graphics Processing Unit，图形处理单元）的扩展方式非常相似。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. I mean very simply digital computers uh implement numeric and numeric with some sort of estimation right I mean in in a digital computer a number is represented by a fixed number of bits and uh that has some precision error and things like this it's just a way we implement the system if you make it enough bits like 64 bits you can largely say that maybe the error is small you don't have to think about it um and so when we the digital computer uh is capable of simulating anything that you can express as numbers and arithmetic. So it became a very general machine. I can literally uh simulate any physical process. All of physics we try to do computational physics, right? I have an equation. I can then write um numeric solvers that sort of deal with those uh those imprecisions uh in in the number of bits. And so this became obviously computer science uh the entire field now. And we went that direction actually very early on because uh we couldn't scale up uh computation. It was it's actually kind of an interesting conversation if you look from back then. Not that it was there of course, but if you look at the papers and things, they actually looked very similar to today in terms of scaling up GPUs.</p>
</details>

>> 模拟计算机实际上是第一批计算机中的一些，它们工作得非常好，效率也很高，但由于制造差异性，它们无法扩展。所以有人说：“好吧，你知道吗？我实际上可以说，我可以让一个真空管非常可靠地表现为高电平或低电平。我无法很好地描述中间状态，但我可以说它是高电平或低电平。”这就是我们转向数字抽象的原因。然后我们就可以进行扩展了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um analog computers were actually some of the first computers and um they worked really well. They were very efficient, but they couldn't be scaled up because of manufacturing variability. So someone said, "Okay, you know what? I can actually say I can make a vacuum tube behave as a high or low very reliably. I can't characterize the in between very well, but I can I can say it's high or low. And so that was kind of where we went to digital abstraction. And then we could scale up.</p>
</details>

>> **ENIAC**（Electronic Numerical Integrator and Computer: 世界上第一台通用电子数字计算机），建于1945年，拥有18,000个真空管。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> ENIAC, which was built in 1945, had 18,000 vacuum tubes.</p>
</details>

>> 哇。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Wow.</p>
</details>

所以18,000个真空管的数量与现在人们用于大规模交易的图形处理器数量有些相似。所以扩展事物一直是一个难题。一旦你找到了解决它的方法，它就会创造一种范式。我想这就是我们转向数字化的原因。但模拟计算仍然固有地更高效，因为它实际上是**类比计算**（Analogous Computing: 指通过物理系统模拟问题，利用物理定律进行计算）。你可以这样理解：我能否构建一个物理系统，它与我试图表达或计算的量相似？你实际上是在利用底层介质的物理特性进行计算。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So 18,000 is kind of similar how many GPUs people use now, right, for large scale trading. So scaling things up is is always a hard problem. And once you figure out how to do it, it makes a paradigm happen. And I think that's why we went to digital. But analog still is inherently more efficient because you it's it's actually analogous computing is a way to think about it. Like can I build a physical system that is similar to the quantity I'm trying to express or compute over. Um you're you're effectively using the physics of the uh underlying medium to do the computation.</p>
</details>

>> 在数字计算机中我们有晶体管。为了具体说明，您所说的模拟计算机使用的是哪种基底？是的，我的意思是模拟计算机可以做很多不同的事情。你知道，风洞就是一个很好的模拟计算机的例子，从某种意义上说，我有一辆赛车在赛道上或一架飞机，我想了解风是如何围绕它移动的，理论上你可以通过计算来解决这些问题。问题是你总是会有偏差。很难知道真实系统会是什么样子，并且准确地使用计算流体动力学来做这些事情是相当困难的。所以人们仍然建造风洞，这实际上是在建模，这是一个模拟计算机。你知道，我认为我们仍然有很多理由来建造这些类比型计算机。现在在我们讨论的情况下，我们实际上可以在硅中构建电路，以重现神经网络的行为。所以我们今天所做的事情比80年前我们所做的事情更具体，从某种意义上说，那时我们试图自动化通用计算，用于计算炮弹轨迹，用于计算财务，也许是一些物理问题，比如进入太空等等，这些都需要确定性和围绕这些数字和计算的特异性。智能是一种不同的东西。你可以用数字来构建它，但它是否自然地由数字构建？我不知道。一个神经网络实际上是一个**随机机器**（Stochastic Machine: 指其行为或结果包含随机或概率成分的系统）。那么，我们为什么要为本质上是随机和分布式的东西使用高度精确和确定性的基底呢？所以我们相信我们可以在电路中找到正确的**同构**（Isomorphism: 指在数学中，两个结构之间存在一种保持其结构不变的一一对应关系），它可以服务于智能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And so in digital computers we have transistors. Um ju just to make it sort of concrete, what kind of substrates are you talking about for for analog computers? Yeah, I mean analog computers can do lots of different things. You know, um there's wind tunnels are a great example of an analog computer in a sense where um I have, you know, a race car on a track or an airplane and I want to understand how the the wind moves around it and I can in theory solve those things computationally. The problem is you're always going to be off. It's very hard to know what the real system is going to look like and doing things with computational fluid dynamics accurately is pretty hard. So people still build wind tunnels that's actually modeling that that's that's an analog computer. You know I think uh we still have lots of reasons to build these analogous type computers. Now in the situation we're talking about we can actually build circuits in silicon uh to recapitulate behaviors of of neural networks. So what we're doing today is is more specified than what we were doing 80 years ago in a sense is that then we were trying to automate generic calculation which was used to calculate artillery trajectories. It was used to calculate finances maybe some you know physics problems like going into space things like that those require determinism and you know specificity around these numbers and these computations. Intelligence is a different beast. You can build it out of numbers, but is it naturally built out of numbers? I don't know. A neural network is actually a stochastic machine. And so why are we using the substrate that is highly precise and deterministic for something that's actually stochastic and distributed in nature? So we believe we can find this the right isomorphism in electrical circuits that can subserve intelligence.</p>
</details>

>> 这是一个相当疯狂的想法，不是吗？也许再深入一层，因为我完全同意你的观点，对吧？就像几十年来，计算机一直是人类智能的补充。就像，嘿，我的大脑在计算轨道轨迹方面不是很擅长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> That's a pretty wild idea, isn't it? um maybe unpack it one level deeper because I totally I totally agree with you, right? It's like um computers for for decades have been sort of the complement to human intelligence, right? It's like, hey, my brain isn't really great at computing an orbital trajectory.</p>
</details>

没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> That's right.</p>
</details>

>> 我也不想在重返大气层时烧毁。所以计算机可以帮助我们达到这种令人难以置信的精度。我们现在正朝着相反的方向发展，对吧？我们实际上试图在计算机系统中编码更多的“模糊性”。所以，是的，请再深入一点，谈谈模拟计算的这个想法，以及为什么智能非常适合模拟系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And I don't want to like burn up on re-entry. So like a computer can help us with this incredible degree of of precision. Um we're now kind of going the opposite direction, right? we're actually trying to encode more sort of um fuzziness into computer systems. Um so so yeah so so go maybe just a little bit deeper on this idea of an analog and um you know why intelligence is a good fit for for anal for analog systems.</p>
</details>

### 智能即物理：大脑的效率启示

嗯，我的意思是，我们在自然界中拥有的智能系统最好的例子就是大脑。你知道，人们常说人脑只消耗20瓦的能量。这是真的，但如果你看一百万个大脑，它们通常实际上极其高效，比如一只松鼠或一只猫，它只消耗十分之一瓦。所以，我们仍然缺少一些东西。并不是说我们理解了所有，但我认为我们缺少的一部分是，我们在计算机中有很多抽象，这些抽象损失很大。在大脑中，神经网络的动态是物理实现的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I mean the best examples we have of uh intelligent systems in nature are brains and you know >> it's often been said you know human brains run on 20 watts of energy. That's that is true but if you look at a million brains generally actually extremely efficient like a squirrel or a cat it's like a tenth of a watt and so uh there's something there that we're still missing. And not to say that we understand all of it, but part of what I think we're missing is we have lots of abstractions in a computer that are quite lossy. In a brain, the neural network neural network dynamics are implemented physically.</p>
</details>

>> 所以没有抽象。智能就是物理。它们是一体的。没有操作系统，也没有某种**应用程序编程接口**（API: Application Programming Interface，应用程序接口）等等。所以，例如，某种视觉刺激会直接激活一个真实的神经网络，并产生某种语义响应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So there is no abstraction. Intelligence is the physics. They're one and the same. There's no, you know, OS and, you know, some sort of API and this and that. So there's some visual stimulus for instance that directly activates an a actual neural network and and produces some some sematic response that sort of thing.</p>
</details>

没错。这些都是通过化学扩散以及神经元本身的物理性质，也就是物理本身来介导的。所以我认为绝对有可能构建出更高效的东西，通过类比的方式利用物理学，这是百分之百正确的。我们能否做到并从中构建出产品，这才是我们在Unconventional AI这里真正要问的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Exactly. And those things are mediated by chemical diffusion and you know uh just the the the physical properties of the neuron the physics itself. So I think absolutely it's possible to build something that's much more efficient and uh by using physics in an analogous way that is 100% true. uh can we do it and build us build build a product out of it is really the question we're asking here at unconventional</p>
</details>

>> 部分原因是不是因为现在是合适的时机，因为AI既是一个巨大的工作负载，也是一个独特的工作负载？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and is part of the idea that now is the right time because AI is a both a huge and a unique workload.</p>
</details>

### AI的能源危机与基础设施挑战

是的，当然。你知道，这很有趣。这里有一些数据：美国约占全球数据中心容量的50%，而今天我们将美国能源电网约4%的能源投入到这些数据中心。去年，也就是2025年，我们开始看到新闻报道夏季西南部地区出现停电。你知道，想象一下当这个比例达到能源电网的8%、10%时会发生什么。我们所处的情况将不会很好。那么我们能否建造更多的电力？当然应该。建造发电设施非常困难、昂贵，而且是基础设施，需要时间。你每年只能上线这么多千瓦或吉瓦。所以大约每年4吉瓦。根据一些估计，未来10年我们需要额外400吉瓦的容量来满足AI的需求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, absolutely. You know, it's it's interesting. So just maybe some stats here like the US is about 50% of the world's data center capacity and today we put about 4% of the energy grid of the US energy grid into those data centers and this this past year 2025 was the first time we started to see news articles about brownouts in the southwest during the summer and you know just imagine what happens when this goes to 8% 10% of the energy grid. It it's not going to be a good place that we're in. So can we build more power? Absolutely we should. Building power generation is very hard, expensive and it's infrastructure like it takes it takes time. You can't you can only bring online so many kilowatts or gigawatts per year. So something on the order of four per year. Uh by some estimates we need 400 gawatts additional capacity over the next 10 years to power the demand for AI.</p>
</details>

>> 哇。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Wow.</p>
</details>

所以我们有巨大的缺口。因此我们真的需要重新思考这个问题。我内心那个15岁的科幻迷会说，哇，我们正在调动物种规模的资源来创造未来，我们确实在这样做。然后实际问题是，即使我们增加400吉瓦的发电能力，我们1970年代的输电网也可能会在负荷下熔化。所以，是的，我认为这存在非常严重的基础设施障碍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So we have a huge shortfall. And so we really just need to rethink this. the the you know 15-year-old sci-fi nerd in me says like wow we're we're mobilizing you know species scale resources to like invent the future we are and then then there's the practical it's like even if we add 400 gawatts of production capacity our our you know 1970s era transmission grid is probably going to melt under the under the load so yeah so so there's very serious sort of infrastructure hurdles to this I think</p>
</details>

>> 让很多人一起行动是很困难的，这是现实。但要解决这些问题，就必须这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> it's hard to get a lot of humans to act together right it's just the reality that's what has to happen to solve these problems.</p>
</details>

### 模拟与数字：互补而非替代

>> 您认为这条道路会带来哪些权衡？与现在主流的数字路径相比。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> What trade-offs do you think this entails? You know, sort of the path you're pursuing versus the the mainstream digital path now.</p>
</details>

是的，我实际上不认为这是数字或模拟的二选一。它不是那样运作的。我认为某些类型的工作负载适合这些模拟方法，特别是那些可以表示为**动态系统**（Dynamical Systems: 指随时间演变的系统，其状态由一组规则或方程决定）的工作负载。动态意味着时间。它们与时间相关联。在现实世界中，每个物理过程都与时间相关。而在计算世界，比如数值计算世界中，我们实际上没有这个概念。你用数字来模拟时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. I mean very simply digital computers uh implement numeric and numeric with some sort of estimation right I mean in in a digital computer a number is represented by a fixed number of bits and uh that has some precision error and things like this it's just a way we implement the system if you make it enough bits like 64 bits you can largely say that maybe the error is small you don't have to think about it um and so when we the digital computer uh is capable of simulating anything that you can express as numbers and arithmetic. So it became a very general machine. I can literally uh simulate any physical process. All of physics we try to do computational physics, right? I have an equation. I can then write um numeric solvers that sort of deal with those uh those imprecisions uh in in the number of bits. And so this became obviously computer science uh the entire field now. And we went that direction actually very early on because uh we couldn't scale up uh computation. It was it's actually kind of an interesting conversation if you look from back then. Not that it was there of course, but if you look at the papers and things, they actually looked very similar to today in terms of scaling up GPUs.</p>
</details>

>> 在某些问题中，实际模拟时间非常有用。所以我认为我们仍然应该构建这些东西，并且我们应该仍然拥有这些能力，以解决我们需要以这种方式解决的问题。但是对于那些你知道有点模糊的问题，就像你说的。我试图从多个输入中检索和总结。这实际上是人脑非常擅长的事情，对吧？它们可以接收大量数据，并形成一个关于这些事物如何相互作用的模型，有时这些模型实际上可以非常准确，比如看看运动员。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Actually simulating time is very useful in certain uh certain problems. So I think we should still build those things and we should still have those uh capabilities for the problems that we need to solve that way. Uh but for these problems where you know like like you said it's a bit fuzzier. I'm trying to retrieve and summarize across multiple inputs. That's actually what brains do really well, right? they can they can uh take in tons of data and sort of formulate a a model of how those things interact and sometimes those models can be actually extremely accurate like look at an athlete</p>
</details>

>> 你知道，比如攀登酋长岩的**Alex Honnold**（美国著名攀岩运动员，以无绳独攀酋长岩而闻名），想想那所需的精度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> you know um you know Alex Hunnel who climbed uh uh El Capitan right just think about the precision that's required</p>
</details>

>> 每次看到我还是会害怕。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> it still scares me every time I</p>
</details>

太疯狂了，对吧？如果他滑倒了，哪怕在某些地方只偏离一毫米，他就会死。对于每一位顶尖运动员和奥运选手来说都是如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> insane right and if he slips like just like he's off by a millimeter in some places he dies right and that's true for like every top level athlete and they're someone who's, you know, at the the Olympics.</p>
</details>

>> **Steph Curry**（美国职业篮球运动员）的故事是，他建立了一个特殊的追踪系统，以确保球击中篮筐的中心，而不仅仅是穿过篮筐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Steph Curry, you know, the story is he set up a special tracking system so he can make sure the ball was hitting the middle of the rim, not not just going through.</p>
</details>

所以这些人在嘈杂的神经网络下达到的精度实际上相当高。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, the level of precision these guys hit with a neural network that's noisy is actually quite high.</p>
</details>

>> 所以，神经系统在某些情况下实际上可以做到很高的精度，但这些情况的有趣之处在于，Steph Curry在比赛中投篮时，绝不会在理想条件下投篮。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, uh, neural systems can actually do a lot of precision under certain circumstances, but what's interesting about these situations is Steph Curry when he shoots a ball is never going to shoot it under ideal circumstances in a game.</p>
</details>

总是独特的输入，有很多不同的输入变量向你袭来，比如其他球员在哪里，你站立的确切位置，也许你的鞋子不同，也许地面有点不同，也许球更粘，或者你的手出汗了，有太多的输入，我们把它们全部整合在一起，仍然能有非常准确的行为。所以大脑在这方面非常出色，你知道，这是一组非常有用的问题需要解决，现在我们正在解决这些问题。但这并不意味着我们不再使用计算基底来做实际计算。这是一种智能基底。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">always it's a unique input and there's a lot of different input variables coming at you like where the other players are precisely where you're standing, maybe your shoes are different, maybe the surface is a little different, like maybe the ball is tackier or your hands are sweaty, like there's so many inputs and we we kind of put them all together and integrate them and still have very accurate behavior. So brains are exceptionally good at this and you know that's set of problems that is actually very useful to solve and now we're approaching those problems. uh but it doesn't mean we don't still use computational uh substrates to do actual computation. This is kind of an intelligent substrate.</p>
</details>

### Unconventional AI的模型与AGI之路

>> 那么，您预计您的硬件将非常适合哪种类型的AI模型或数据模态？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And so what types of AI models or or data modalities do you expect uh your your um hardware will be well suited for?</p>
</details>

是的。所以我们显然是从今天的最先进技术开始，比如**Transformer**（Transformer: 一种基于自注意力机制的神经网络架构，广泛用于自然语言处理）和**Diffusion模型**（Diffusion Models: 一种生成模型，通过逐步去噪生成数据）。它们工作得很好，效果非常好，所以我们不应该抛弃它们。而且Diffusion模型、**Flow模型**（Flow Models: 一种通过可逆变换学习复杂数据分布的生成模型）和**基于能量的模型**（Energy Based Models: 一类通过定义能量函数来学习数据分布的生成模型）实际上非常有趣，因为它们本身就包含动态特性。它们实际上被写成**常微分方程**（Ordinary Differential Equation: 涉及一个自变量的函数及其导数的方程）。所以，这使得我们可以思考，我能否以某种固定或具有某种主要演化方式的方式，将这些动态映射到物理系统的动态上，然后基本上利用那个物理系统来高效地实现这个东西？这就是我们正在做的事情的本质。我们将发布一些开源内容，让人们可以尝试。但是，你知道，Transformer确实是一项巨大的创新，因为它们使得图形处理器的构造能够极其高效地工作。这并不意味着它们是错误的，但我认为没有什么自然的法则来定义Transformer的参数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. So we're we're obviously starting with the state-of-the-art today like transformers, diffusion models, they they work, they do really good stuff, so we shouldn't throw that out. And uh diffusion models and flow models are actually and energy based models are actually pretty interesting because they inherently have dynamics as part of them. They're literally written as an ordinary ordinary differential equation. So um that makes it such that hey can I map those dynamics onto the dynamics of a physical system in some way that's either fixed or um has some principal way of of evolving and then can I basically use that physical system to implement that thing and do it very efficiently with physics. So that's that's kind of the nature of what we're doing. And we will be releasing uh some open source and things around this to to let people play around. But um you know transformers are really uh they're a big innovation because they they made the constructs of a GPU work extremely well. And it doesn't mean it's wrong but I don't think there's there's nothing natural. There's no natural law about the parameter of a transformer. M</p>
</details>

>> Transformer的参数是其非线性特性以及整个系统与注意力机制结合的函数。Transformer参数空间与这些其他参数空间之间将存在某种映射，我认为Transformer使用了大量的参数来实现其功能。我必须问，既然您提到了基于能量的模型，而**Yann LeCun**（图灵奖得主，Facebook AI首席科学家）也对此撰写了大量文章，您认为追求您所谈论的这些路径，是否能让我们更接近**通用人工智能**（AGI: Artificial General Intelligence，指能够像人类一样理解、学习和应用智能来解决任何问题的AI系统），无论AGI意味着什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">transformers parameter is a function of the nonlinearities and the way a whole thing is set up with attention. There's going to be some kind of uh mapping between transformer parameter spaces and these other parameter spaces and it's transformers are I think have kind of used lots of lots of parameters to accomplish what they do. I have to ask just since you mentioned energy based models and Yan Lun has been um you know uh writing quite a lot about this um do you think pursuing these sorts of paths that you're talking about is is uh gets us closer on the path to AGI whatever whatever AGI means</p>
</details>

老实说，我确实这么认为。我之所以有这种感觉，再次声明，这有些模糊，我会非常诚实地说，我不知道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> honestly I do uh the reason I feel that way and again this is this is hand wavy I'm gonna be really honest I don't</p>
</details>

>> 这就是我打引号的原因。我认为讨论必然是模糊的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> that's why I'm putting quotes around I think that the discussion is necessarily handwavy</p>
</details>

它必须是模糊的，因为我们就是不知道。但我的直觉告诉我，任何以动态为基础，包含时间和因果关系的东西，都将比不包含这些的东西成为更好的基础。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> it's got to be because we just don't know uh But my intuition says that um anything where the basis is dynamic which has time and causality as part of it will be a better basis than something that's not.</p>
</details>

所以我们很大程度上试图移除这些，你知道，很多时候你可以写下数学公式，它们在时间上是可逆的等等，但物理世界往往不是这样，至少在我们感知它的方式上不是。那么我们能否从物理世界的元素中构建出具有时间演变的东西呢？我认为这是构建理解因果关系的基础。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So we've largely tried to remove that and you know you know a lot of times you can write math down it's reversible in time and things like that but the physical world tends not to be at least the way we perceive it. And so can we build out of elements of the physical world that are you know uh do do have time evolution? I think that's the right basis to build something that understands causation.</p>
</details>

所以我确实认为我们会拥有更好的东西，它会给我们带来更接近我们真正认为是智能的东西，因为是的，这些机器确实拥有智能。但我认为它们离通用人工智能还差得很远，因为我的意思是，它们仍然会犯愚蠢的错误。它们是非常有用的工具，但它们不像与人一起工作那样，对吧？我想大多数人在那个时候。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So I do think we'll we'll have something that is better uh and will give us something closer to what we really think is intelligence because yes we have intelligence in these machines. I I don't think they're anywhere close to AGI because I mean they still make stupid errors. They're very useful tools but they're they're not what it's not like working with a person, right? I think most people at that</p>
</details>

>> 这实际上非常有趣。所以AI行为中缺失的那种东西，我认为我们很多人都看到有些东西缺失，但无法准确命名。听起来您认为其中一部分是真正的因果关系。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> that's actually really interesting. So the the sort of thing that's missing in in AI behavior, which which I think a lot of us see that there's something missing but can't quite put a name to it. It sounds like you're arguing part of that is is sort of a real sense of causality. Yeah.</p>
</details>

>> 而且这种训练和更动态的机制可能会比我们现在更好地赋予这种对因果关系的表观理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And that training and more dynamic sort of regime may may impart this kind of like apparent understanding of causality better than what we have now.</p>
</details>

是的，再次声明，这有些模糊，但是的。我的意思是，你看，你有孩子，小孩子，你看到他们，我的意思是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. And again hand wavy but yes uh I mean look you have kids little kids and you see them I mean</p>
</details>

>> 孩子们在某些方面天生就理解因果关系，比如。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> children kind of innately understand causality in some ways like</p>
</details>

你知道，这发生了，然后那发生了。是的，我知道你可以说这是强化学习或其他什么，那只是其中一部分，但我们天生就理解因果关系，事实上我们就是这样移动四肢的。我知道如果我向手臂发出某个指令，它就会做一些事情。所以我认为我们大脑的构造方式，由理解因果关系的基本元素构建而成，具有某种内在的特性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> you know this happened then that happened and yes I know you can say like it's reinforcement learning or whatever that's some part of it but there's something innate that we understand causality in fact that's how we move our limbs and all of that I know if I send a certain command to my arm it'll do do something. So I I think there's something innate about the way our brains are wired built out of primitives that are that do understand causation.</p>
</details>

### Unconventional AI的行业定位

>> 请将Unconventional AI置于更广阔的行业背景中，比如Nvidia、TSMC、Google。这些是Unconventional AI的潜在盟友还是竞争对手？您如何看待这个问题？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Put unconventional in the context of the broader industry for me like Nvidia, TSMC, Google are are these um you know potential allies for unconventional? Are these competitors? How do you think about it? Yeah, I mean a couple of things that we set out to do when we built were starting this company was see if we can find a paradigm that's analogous to intelligence within five years. Uh and then at the 5-year mark, we should be able to build something that's scalable from a manufacturing standpoint. So, you know, you can you can think about building a computer out of many different things, but if it's not scalable from a manufacturing standpoint, we can't intercept this this global energy problem. So we need to have somebody say okay go build 10 million of these things right. So I think TSMC is absolutely going to be a partner forward you know met with them recently and you know we want to we want to work closely with them to make sure we get what we need get fast turnaround times to prototype and all of that. Um Google Nvidia Microsoft all these guys are you know at the forefront of where the application space is. Uh obviously Google kind of has everything uh internally and I think they're working on sort of lower risk but you know continual improvements for their hardware</p>
</details>

>> 您是指**TPU**（Tensor Processing Unit: Google为机器学习专门设计的定制芯片）吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> with TPUs. You mean</p>
</details>

是指TPU吗？是的。从我能看到的公开信息来看，这完全合理，对吧？他们有自己的业务要运营，他们正在努力提高利润，你知道，我如何利用手头的所有工具来做到这一点。Nvidia当然，他们构建了今天所有人都在编程的平台。那么，我们将来会与Nvidia产生冲突吗？我不知道。我们将拭目以待世界会变成什么样，但我的意思是，我们正在努力构建一个比矩阵乘法更好的基底。我们有可能在这些解决方案上进行合作。而且，你知道，我们对所有这些可能性都持开放态度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> with TPUs? Yeah. That from what I can see you know just publicly is it makes total sense right they have a business to run and they're trying to make their margins better and you know how can I do that with all the tools I have at you know uh in front of me. Um, Nvidia, of course, you know, they they they've built the u the platform that everyone programs on today. So, is it are we going to be at odds with Nvidia going forward? I I don't know. We'll see what the world looks like, but I mean, we are trying to to build a better substrate than matrix multiply. Um, there could be a world where we collaborate uh on such solutions. Um, and you know, we're open to all of these things.</p>
</details>

### 创业动力与公司文化

>> 您个人从何获得动力，每天早上起床并创立这家公司？我的意思是，您在职业生涯中取得了很大的成功，无论是今年还是在初创公司。那么，对您来说，什么让这件事如此激动人心？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Where do you where do you personally get the motivation to get up in the in the morning and build this company? I mean you've had a lot of success in your career this year or in startup. Um what you know what's exciting about this to you?</p>
</details>

我不知道。这很奇怪，如果你没有从事过硬件工作，那会很难。我很幸运能从事硬件和软件工作，你知道，我喜欢编写大量软件，然后点击编译并看到它工作。那是一种很好的**多巴胺**（Dopamine: 一种神经递质，与奖励、动机和愉悦感相关）刺激。但是，当你从事一块硬件的工作，然后把它打开时，那是一种巨大的多巴胺刺激。那就像是庆祝，跳起来，击掌。那是一种不同的感觉。我不知道，你就是为了这些时刻而活，你知道。就像我在英特尔的时候，我是少数几个会在第一块芯片回来时去实验室的执行官之一，我想看看它启动，看看会发生什么。有时你打开它，你会看到一小股烟雾冒出来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I don't know. I just it's it's a weird thing like if you haven't worked in hardware it's hard. Um I've had a been fortunate to work in hardware and software and you know I love writing a bunch of software and then hitting compile and seeing it work. That's that's that's a good dopamine hit but man when you work on a piece of hardware and you turn that thing on that's a big dopamine hit. That's like this is like celebration jumping you know jumping up in the air high five thing it it's a different thing and I don't know you sort of live for these moments you know uh like when I was at Intel like I was one of the only exeacts would go to the lab when the first chip would come back and I'm like I want to see turn on see what happens some turn sometimes you turn it on it's like you see the little puff of smoke come</p>
</details>

>> 那可不好，但你希望身临其境，成为那个时刻的一部分。但我想那也是其中一部分。我想对我个人而言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> that's not good but you want to be there you want to be part of the moment but uh uh I think that's part of it I think for me personally</p>
</details>

我们现在有机会真正改变计算世界，让AI无处不在。我与AI悲观论者恰恰相反。我认为AI是人类的下一次进化。我认为它将我们带到一个新的水平，使我们能够协作，相互理解，并以更深入的方式理解世界。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We we have this opportunity now that we can really change the world of computing and make AI ubiquitous. I I'm the opposite of an AI doomer. I think AI is the next evolution of humanity. I think it takes us to a new level, allows us to collaborate, understand each other, and understand the world in much deeper ways.</p>
</details>

>> 完全同意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Totally agree.</p>
</details>

所以，每项技术都有其负面影响，但在我看来，其积极影响远远超过负面影响。而我们实现普及的唯一途径就是改变计算机。当前的范式，无论它有多好，无论它带我们走了多远，都无法将我们带到那个水平。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, every technology has negatives, but the positives to me so far outweigh it. And uh the only way we're going to get to ubiquity is we have to change the computer. The current paradigm, as good as it is and as far as it's taken us, is not going to take us to that level.</p>
</details>

>> 我认为这是一个很好的说法。AI实际上可以帮助我们更好地相互理解，帮助我们更好地理解自己，更好地理解自然世界。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I think that's such a great way to say it. AI actually can help us understand each other better, help us understand ourselves better, understand the natural world better. Yeah.</p>
</details>

我完全不认为它会像一些悲观论者所想的那样，取代人类的经验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I I don't think it's at all what what some of the doomers think of of, you know, replacing sort of human human experience.</p>
</details>

>> 那只是短期的事情。我的意思是，一路上会有一些颠簸，对吧？技术就是这样。当你看了太多科幻电影时，就会发生这种事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> That's a short-term thing. I mean, there will be there will be bumps along the way, right? Technology does that. That's That's what happens when you've seen too many sci-fi movies.</p>
</details>

没错。但是看看**《星际迷航》**（Star Trek: 一部著名的科幻系列作品）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> That's right. Um >> but look at Star Trek.</p>
</details>

>> 是的。是的。是的。完全正确。完全正确。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah. Yeah. Totally. Totally.</p>
</details>

>> 太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> It's great.</p>
</details>

>> 这是一个非常大的冒险，对吧？这是一家非常有抱负的公司。是什么让您有信心它会成功，或者说有合理的成功机会？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um uh this is a really big swing, right? Like this is a very ambitious company. Um what gives you confidence that it's that it's going to work or or you know has a reasonable shot of working.</p>
</details>

嗯，有许多数据点。当然，就像我说的，大脑就是存在的证据。但也有40多年富有前景的学术研究。人们已经制造出不同的设备，尽管不是采用最新技术，也没有专业的工程团队，但他们已经构建了概念验证，确实表明其中一些东西是有效的。从理论角度来看，无论是神经科学还是纯粹的动态系统和数学理论，我们都开始理解这些系统是如何工作的。所以我认为我们现在在技术栈的不同部分都有了碎片，表明如果我能以正确的方式组合这些东西，我就能构建它。你知道，这就是伟大的工程的全部意义，就是利用别人为其他目的构建的东西，利用它，然后。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um there's there's a number of data points. Of course, like I said, the brains are existence proof. Um but there's also 40 plus years of of academic research which is showing a lot of promise here. Um people have built different devices albeit not in the latest technology with professional engineering teams but they have built proofs of concept that actually show some of these things work. Um we've also from a theory standpoint both from neuroscience and just pure uh dynamical systems and math theory uh do start to understand how these these systems can work. So I think we now have pieces at different parts of the stack that show hey if I can combine these things the right way I I can build this and uh you know that's what great engineering is all about is like you know exploiting this thing that someone else built for something else exploiting that thing and then</p>
</details>

>> 工程师有点像理论家的反面，他们会说，好吧，那个东西不太合适，打磨一下，让它合适。所以我们现在需要做一点这样的事情，然后我们就可以构建一些东西并将其整合起来。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and it's engineers are kind of like the opposite of theorist is like well all right that thing doesn't quite fit sand it down and make it right. So it's like we got to do a little bit of that right now and then we can build something and put it all together. Yeah,</p>
</details>

>> 太棒了。有人说你做这件事很疯狂吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> that's awesome. Has anyone called you crazy yet for doing this?</p>
</details>

哦，是的。现在很多人都这么说。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Oh, yeah. Plenty of people at this point.</p>
</details>

>> 是所有人吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Is it Is it like everybody?</p>
</details>

嗯，我现在已经习惯了。你知道。我的家人曾被称为疯子。几年前，当我在科技界拥有非常好的职业生涯时，我被认为是疯子，因为我回到了研究生院。所以没关系。我认为你需要疯狂的人去探索。我的意思是，如果你想想人类走出非洲，所有那些疯狂的人走了出去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Well, it's I'm used to this at this point, you know. My family have been called crazy. I was called crazy going back to grad school um years ago when I had a very good career in tech. Um so it it's fine. I think that's that you need crazy people to go out and explore. I mean, if you think about humanity out of Africa, all that the crazy people who went out,</p>
</details>

>> 没有疯子我们就会迷失。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> we would be lost without without crazy.</p>
</details>

你需要一些疯狂。所以没关系。我对此没问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> You need some crazy in there. So, it's okay. I'm fine with that.</p>
</details>

### 团队建设与未来展望

>> 那么，您希望招募什么样的团队成员来实现这个非常有抱负的目标？谁应该对加入您感兴趣？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what kind of people uh are you looking to bring on to the team of a very ambitious goal um who should be interested in joining you?</p>
</details>

是的，我的意思是，我认为一些传统意义上的——当我提到传统时，是指过去五年中AI系统领域发展起来的人才——那些非常擅长将算法有效地映射到物理基底上的人。那些理解基于能量的模型、Flow模型、**梯度下降**（Gradient Descent: 一种优化算法，用于最小化函数）以及不同方式的人，这些正是我们所需要的人才。我们需要理论家，他们能够思考构建耦合系统的不同方式，如何表征动态系统的丰富性，并将其与神经网络联系起来。所以这其中有理论层面。然后还有系统架构层面的人。他们会说，理论是这样说的，这是我真正能构建的，我如何弥合这个差距？然后还有实际物理构建这些东西的人，比如模拟电路工程师，也包括数字电路工程师。我们将在这里有一个混合信号。所以，这是一个完整的技术栈。这个技术栈很难，因为这些都是没有人真正推到那个水平的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, I mean I think some of the traditional traditionalish when I say traditional you know over the last 5 years this field of AI systems has evolved like people who are really good at taking algorithms and mapping them very effectively to physical substrates. uh those folks who understand energy based models, flow models, gradient uh gradient descent and different ways uh you know this this kind of thing is what we need there. We need theorists who uh can think about different ways of building coupled systems how I can characterize the richness of dynamical systems and relating that to neural networks. So there is a theory aspect of this. Uh then there's folks who are like kind of at the system architecture level. It's like all right here's what the theory says. This is what I can really build. How do I bridge that gap? And then there's the people actually physically building this stuff like analog circuit people, actually digital circuit people, too. We're going to have a mix signal here. So, that's that's the whole stack. The stack is it's hard because these are all things that no one's really pushed to that level. Like,</p>
</details>

>> 当我们制造这块芯片，我们的第一个原型，它可能会是人们建造过的最大、也许是最大的模拟芯片之一，这有点奇怪。你第一次做某件事时，事情通常不会像你想象的那样发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> when we build this chip, our first prototype, it's going to be probably one of the larger, maybe the largest analog chip people have ever built, which is kind of weird. First time you do something, things don't usually work the way you think they</p>
</details>

>> 所以你可以加入那个Cabris Jensen的游戏，他们每个人都从烤箱里拉出最大的晶圆。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So you can get in on that Cabris Jensen game where they were each pulling the biggest possible wafer out of out of an oven. You</p>
</details>

差不多那样。是的，完全正确。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> something like that. Yeah, exactly right.</p>
</details>

>> 再放几个真空管上去，增加效果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Put a few vacuum tubes on top for for effect.</p>
</details>

是的，我们可以。我需要闪烁的灯光。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, we could I I need blinking lights.</p>
</details>

>> 是的，没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, exactly.</p>
</details>

我们不会有很酷的散热器。它会非常冷。你不需要大型散热器，你知道吗？所以我希望他们能做出一些看起来有趣的东西。对于顶尖AI人才来说，现在是一个有趣的时期，对吧？如果你想创业，有很多风险投资家可能会资助你。如果你想在大公司找一份舒适的工作，你可以找到一份非常舒适的工作，并且做一些有趣的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> We're not going to have cool heat sinks. It's going to be super It's going to be cold. Like you don't need big heat sinks, you know? So, I hope they make something that looks looks interesting here. This is a funny time for for um top AI people, right? Where you have sort of the option if you want to start a company, there's a lot of venture capitalists who probably would fund you. If you want to get a cushy job at at a big company, you can get a very cushy job and and kind of do some interesting things.</p>
</details>

>> 是的。或者，你知道，人们可以加入像Unconventional这样的初创公司，它拥有人们在AI职业生涯中寻求的许多优点，并且正在进行非常大的尝试。我只是有点好奇。您经历过所有这些方面。您对那些刚开始职业生涯的年轻人有什么建议？或者您是如何看待这个问题的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Um or, you know, people can join a startup like Unconventional that, you know, has a lot of the nice aspects people look for in in sort of AI careers and are taking like super sort of big swings. Um, I'm just sort of curious. You've been on all sides of this. Like, do you have any advice for for um, you know, younger people starting out in their careers or or how do you think about this?</p>
</details>

我认为在职业生涯早期在初创公司工作会让你获得非常广阔的经验，这将在以后带来回报，因为就像我说的，我之所以能够跨越整个技术栈思考，是因为我在职业生涯早期就做了所有这些事情。你知道，我构建了硬件，我构建了软件，我构建了应用程序。而在大公司，这不是亚马逊的错，只是事实如此。你被雇来做一件事，然后你一遍又一遍地做那件事。你非常擅长做那件事，那很好。你需要非常擅长做特定事情的人。但是，如果你想为未来的变化做好准备，那么非常擅长一件事可能不如擅长但略懂很多事情更有价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I think you get such a breath of working at a startup that at the beginning of your career that will pay dividends later on because like I said, like the reason I can think across the stack is because I did all those things very early in my career. You know, I built hardware, I built software, I built applications. And um, in big companies, it's not it's not AMA's fault. It's just the way it is. You get hired to do a thing and you do that thing over and over again. You get really good at doing that thing and that's fine. You need people who are really good at doing specific things. But um if you want to be prepared for change in the future, being really good at one thing is probably less valuable than being good at but slightly good at a lot of things.</p>
</details>

>> 是的，这很有趣。将Unconventional描述为一个实践研究实验室是否公平？您追求的是这种文化吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, that's interesting. Is it fair to say unconventional sort of a practical research lab? Is that kind of the culture you're going for?</p>
</details>

当然。是的。我的意思是，最初几年它确实是开放式的。我不想关闭任何可能性。我对此非常明确。我总是试图将对话拉回来，因为那些人会说：“哦，那会很难制造。”就像，停下来。不要考虑那个。它会起作用吗？首先提出存在的证据。然后我们再回去尝试进行工程设计，以及其中所有的权衡。但如果你一开始就做出那些权衡，你就不会走到一个好地方。所以是的，我们确实在广阔地思考，但着眼于未来，我们正在构建一个产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Absolutely. Yeah. I mean, first few years it really is open-ended. I I don't want to close doors. Like I I'm really specific about this. Like I always try to bring the conversation back because those people like, "Oh, that's gonna be hard to manufacture." Like stop. Don't think about that. Will it work? First come up with existence proofs. Then we go back and try to engineer it and you know all the trade-offs therein. But if you make those trade-offs up up front, you don't go into a good place. So yes, we are really thinking wide open but with an eye on the future who we are building a product</p>
</details>

>> 而且正如您所说，这不仅需要拥有多元技能的人，还需要具有高度自主性的人，他们愿意尝试新事物，学习新事物，并能够整合整个技术栈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and and to your point it takes not only people with diverse skill sets but um people with kind of high agency to try new things and learn new things and kind of integrate across the stack.</p>
</details>

是的。我的意思是，我认为我在我创立的公司中做得非常好的一点是，我一直在追求难题，这自然吸引了聪明人进来并尝试解决它们。他们看到了挑战，就像珠穆朗玛峰一样。但随后给予他们自主权，我有点像在思考，作为领导者，我能做出什么决定来增加组织的整体自主权？我做出顶层决策可能在短期内对公司全球范围更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. I mean I think what I've done really well across the companies I've built has been uh going after hard problems which kind of lends itself to smart people wanting to come in and try to solve them. They they see a challenge. It's like here's the amount Everest climate. Um but then giving them agency and I sort of look at it like what decisions can I make as a leader to increase agency of the or overall like me making top style decision maybe a global globally better for the company in the short term</p>
</details>

但我认为从长远来看，如果更多人拥有自主权并能尝试更多事物，我们会做得更好。所以就我个人而言，我喜欢在看到对尝试某事充满热情的人时，想办法放手。就像，好吧，你真的很想做这个。这很有道理。去做吧。你知道，然后你拥有它。你拥有好的和坏的。对吧？对我来说，自主权就是，好吧，我搞砸了。不，那不是。那也没关系。但要给人们做这些事情的空间，你知道吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> but I think long term we will we'll do better if more people have agency and can and try more things out. So personally, I like to find ways to get out of the way when I see people who who are very passionate about trying something. It's like, okay, well, you really want to do this. That makes sense. Go for it. You know, and then you own it. You own both the good and the bad, right? And that's agency to me is like got you gota you got like, okay, I [ __ ] up. No, this wasn't that's okay, too. But give people the room to do that, you know?</p>
</details>

>> 在我们结束之前，您还有什么想说的吗？我的意思是，我认为这是一个机会，可以做一些具有世代影响的事情。对我来说，这就是我早上起床的动力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Anything else you want to want to say before we wrap up? I mean I think this is like an opportunity to do something that is generationally will be felt you know to me that's that's what gets me up in the morning is</p>
</details>

你知道，你可以去开发一个产品，做一些调整，人们会使用它，这很棒，但五年后，很多时候人们会忘记这些事情。但如果我们在T这里成功了，世界将在很长一段时间内不会忘记这一点，对吧？这将载入史册。所以我感觉这样的机会很少。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know you can go work on a product and make a tweak and people will use it that's great but like in 5 years many times people forget those things but if we are successful here the world will not forget this for a very long time right this will be written in history books and so I feel like those opportunities are rare</p>
</details>