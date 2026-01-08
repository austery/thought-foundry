---
author: a16z
date: '2026-01-07'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=xRh2sVcNXQ8
speaker: a16z
tags:
  - ai-development
  - ai-economics
  - model-architecture
  - geopolitical-competition
  - technology-adoption
title: Marc Andreessen 展望2026：AI发展、中美竞争与AI定价
summary: 本次访谈中，知名投资人Marc Andreessen深入探讨了人工智能在2026年的发展前景。他指出AI正以史无前例的速度增长，并预测未来产品将更加复杂。访谈涵盖了AI的商业模式、成本效益、大小模型之争，以及中美在AI领域的激烈竞争。Andreessen还讨论了美国AI政策的演变，以及开放源代码与闭源模式的优劣。他强调，尽管社会对AI存在担忧，但实际应用中的高采用率预示着其广泛普及和积极影响。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - OpenAI
  - Anthropic
  - Google
  - Microsoft
  - Amazon
  - Meta
  - Nvidia
  - AMD
  - Huawei
  - Alibaba
  - Tencent
  - ByteDance
  - Moonshot
  - XAI
  - European Union
  - A16Z
products_models:
  - GPT-5
  - Grock
  - Gemini
  - Sora
  - Suno
  - Kimmy
  - DeepSeek
  - Quen
  - ChatGPT
media_books:
  - Rise of the Machines
  - Draghi Report
status: evergreen
---
### AI革命与市场前景

**主持人**: 许多人提前提交了问题，我将它们整理成了几个不同的部分，用于今天早上与**Mark**的AMA（Ask Me Anything）环节。我们计划涵盖四个主要话题：AI及其在市场中的表现、政策与监管、所有与**A16Z**相关的事情，以及一个有趣的“沙盒”环节，如果时间允许的话。那么，我们先从最大的问题开始。我们正处于AI革命的中心。**Mark**，你认为我们现在处于第几局？你最兴奋的是什么？

<details>
<summary>Original English</summary>

**主持人**: A lot of folks have sent questions ahead of time and what I've done is kind of curated into a few different sections in an AMA this morning with **Mark**. So, what we thought we'd do is cover four big topics: AI and what's happening in the markets, policy and regulation, all things **A16Z**, and then we've got a fun catchall which we're calling sandbox of things if we get to it. So, starting first maybe with the biggest question. We're sitting in the middle of the AI revolution. **Mark**, what inning do you think we're in and what are you most excited about?

</details>

**Marc Andreessen**: 首先，我想说这是我一生中最大的技术革命。希望在接下来的30年里我能看到更多这样的革命，但这确实是一场巨大的革命。就量级而言，它显然比互联网更大。与它相提并论的，是像微处理器、蒸汽机和电力这样的事物。所以，这是一个非常非常大的革命，就像车轮一样。

<details>
<summary>Original English</summary>

**Marc Andreessen**: First of all, I would say this is the biggest tech technological revolution of my life. And you know, hopefully I'll see more like this in the next whatever 30 years, but I mean this is the big one. And just in terms of order of magnitude, like this is clearly bigger than the internet. Like the comps on this are things like the microprocessor and the steam engine and electricity. So that this is a really this is a really big one. The wheel.

</details>

**Marc Andreessen**: 这次革命之所以如此巨大，对大家来说可能很明显，但我还是快速回顾一下。如果你追溯到1930年代，有一本很棒的书叫《**机器的崛起**》（**Rise of the Machines**），它详细阐述了这一点。如果你追溯到1930年代，那些真正发明计算机的人之间实际上有过一场争论。争论的核心是，在他们实际建造计算机之前，他们已经理解了计算理论，但他们争论的是计算机是否应该基本上按照当时被称为“加法机”或“计算器”的形象来建造，你可以把它想象成收银机。**IBM**实际上是美国国家收银机公司的继承者。所以，工业界走的就是这条路，建造这些超字面意义的数学机器，它们每秒可以执行数十亿次数学运算，但当然无法像人类喜欢被对待那样与人类打交道，因此无法理解人类的语音、人类的语言等等。这就是过去80年里建立起来的计算机产业，也是过去80年里，从大型机到智能手机，所有几代计算机产业创造的所有财富和财务回报。

<details>
<summary>Original English</summary>

**Marc Andreessen**: The reason this is so big, I mean maybe obvious to folks at this point, but I'll just go through it quickly. So if you kind of trace all the way back to the 1930s, there's a great book called **Rise of the Machines** that kind of goes through this. If you trace all the way back to the 1930s, there was actually a debate among the people who actually invented the computer. And it was this sort of debate between whether computer they kind of understood the theory of computation before they before they they actually built the things. And they had this big debate over whether the computer should be basically built in the image of what at the time were called adding machines or calculating machines where you know think of sort of essentially cash registers. **IBM** is actually the successor company to the national cash register company of America. And so like and and and that was of course the path that the industry took which was building these kind of hyper literal you know mathematical machines you know that could execute mathematical operations billions of times per second but of course had no ability to kind of deal with human beings the way humans like to be dealt with and so you know couldn't understand human speech human language and so forth and and that's the computer industry that got built over the last 80 years and that's the computer industry that's built all the wealth and financial returns of the computer industry over the last 80 years you know across all the generations of computers from mainframes through to smartphones.

</details>

**Marc Andreessen**: 但他们当时就知道，在30年代，他们实际上理解了人脑的基本结构。他们理解了人类认知理论，实际上他们拥有神经网络的理论。所以他们有这个理论，实际上第一篇神经网络的学术论文发表于1943年，也就是80多年前，这非常令人惊叹。你可以阅读一篇采访，或者在**YouTube**上观看对**Makulla**和**Pitts**这两位作者的采访。你可以在**YouTube**上观看对**Makulla**的采访，大概是1946年左右的。他当时在电视上，在那个古老的年代，那真是一次令人惊叹的采访，因为他穿着泳裤在海滨别墅里，谈论着未来计算机将通过神经网络以人脑模型为基础构建。

<details>
<summary>Original English</summary>

**Marc Andreessen**: But but they knew at the time they knew in the 30s actually they understood the basic structure of the human brain. They understood they had a theory of sort of human cognition and and and actually they had the theory of neural networks. And so they they had this theory that there's actually the first neural network academic paper was published in 1943 you know which was over 80 years ago which is extremely amazing. There's an interview you can read an interview or you can watch an interview on **YouTube** with these two authors **Makulla** and **Pitts** and you can watch an interview I think with **Makulla** on **YouTube** from like I don't know 1946 or something. He was like on TV in the in the ancient past and it's literally like it's amazing interview because it's like him in his beach house and for some reason he's not wearing a shirt and he's like you know talking about like this future in which computers are going to be you know built on on the model of a human brain through through neural networks.

</details>

**Marc Andreessen**: 那就是未曾选择的道路。基本上，计算机工业是按照加法机的形象建立起来的。神经网络基本上没有实现，但神经网络作为一个想法，在学术界和先进研究中继续被探索，由一个最初被称为“控制论”，后来被称为“人工智能”的边缘运动在过去80年里推动。本质上，它并没有奏效，基本上是十年又十年地过度乐观，然后是失望。我在80年代上大学时，**风险投资**和**硅谷**曾经历过一次著名的AI繁荣-萧条周期。按照现代标准来看，它规模很小，但在当时却是一件大事。到我89年上大学时，在计算机科学系，AI已经是一个边缘领域，每个人都认为它永远不会实现。但科学家们值得称赞地坚持不懈地研究，他们建立了一个巨大的概念和思想储备。然后，我们都看到了**ChatGPT**时刻发生的一切。突然之间，它仿佛结晶了。就像“天哪，它竟然成功了！”

<details>
<summary>Original English</summary>

**Marc Andreessen**: And and that was the path not taken. And basically what happened was right the computer industry got built in the in the image of of like the adding machine. But and the neural network basically didn't happen but the neural network as an idea continued to be explored in academia and sort of advanced research by sort of a rump movement that was originally called cybernetics and then became known as artificial intelligence basically for the last 80 years and and and essentially it didn't work like essentially it was basically decade after decade after decade of excessive optimism followed by disappointment. When I was in college in the 80s, there had been a famous kind of AI boom bust cycle in the 80s in venture and in **Silicon Valley**. I mean it was tiny by by modern standards, but it at the time was a big deal. And by the time I got to college in '89 in computer science departments, AI was kind of a backwater field and everybody kind of assumed that it was never going to happen. But the scientists kept working on it to their credit and they they they built up this kind of enormous reservoir of of concepts and ideas and then basically we all saw what happened with the **ChatGPT** moment. All of a sudden it it sort of crystallized. It's like oh my god, right? It turns out it works.

</details>

**Marc Andreessen**: 这就是我们现在所处的时刻。而且，非常重要的是，那是在不到三年前，对吧？那是2022年的圣诞节。所以，我们现在大约三年了，进入了一个实际上长达80年的革命，终于能够兑现那些走另一条路，即人类认知模型之路的人们从一开始就看到的承诺。这项技术的好消息是它已经超民主化了。世界上最好的AI，比如**GPT**、**Grock**、**Gemini**或其他产品，你都可以直接使用，并了解它们是如何运作的。视频方面，你可以看到**Sora**和**VO**的最新技术；音乐方面，你可以看到**Suno**和**Ido**等。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And and so you know that that's the moment we're in now. And then you know really significantly that was what you that was less than three years ago, right? That was the summer of 20 it was the the Christmas of 22. So, we're sort of three year we're we're sort of three years in to, you know, basically what is effectively effectively an 80-year revolution of actually being able to deliver on all the promise that the that the people on the all the on the alternate path, the sort of human cognition model path, you know, kind of saw from the very beginning and and then, you know, the great news with this technology is it's already it's kind of ultra democratized. You know, the best AI in the world is available. Launch at **GPD** or **Grock** or **Gemini** or or you know, these other you know, these other products that you can just use and you can just kind of see how they work and you know, same thing for video, you can see with **Sora** and **VO** kind of state-of-the-art with that you can see with music, you can see you know **Suno** and **Ido** and so forth.

</details>

**Marc Andreessen**: 所以，我们基本上看到这一切正在发生，现在**硅谷**正以令人难以置信的热情做出回应。而且，非常关键的是，这体现了**硅谷**的魔力，**硅谷**早已不再是人们制造芯片的地方，芯片制造很久以前就从**加州**，最终从美国迁出，尽管我们现在正努力将其带回。但**硅谷**在过去80年里的巨大优势在于它能够将前几波技术浪潮中的人才重新利用到新的技术浪潮中，然后激励全新一代人才加入这个项目。所以，**硅谷**有这种反复出现的模式，能够重新分配资本和人才，建立热情，形成临界规模，获得资金支持，建立人力资本，并为每一波新技术注入热情。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And so like you know we're basically seeing that happen and now and now **Silicon Valley** is responding with this just like incredible rush of enthusiasm. And you know, really critically this gets to the magic of **Silicon Valley**, which is, you know, **Silicon Valley** long since has ceased to be a place where people make silicon that, you know, that's that not long ago moved out out of the out out of **California** and then ultimately out of the US, although we're trying to bring it back now. But but but the great kind of virtue of **Silicon Valley** over the last you know over the last you know 80 years of its existence is its ability to kind of recycle talent from previous waves of technology and new waves of technology and then inspire an entire new generation of talent you know to basically come join the you know join the project. And so **Silicon Valley** has this recurring pattern of being able to reallocate capital and talent and build enthusiasm and build critical mass and build funding support and build human capital and build everything enthusiasm you know for each new wave of technology.

</details>

**Marc Andreessen**: 这就是AI正在发生的事情。我想我能说的最大的一点是，我每天都被我所看到的一切感到惊讶。我们很幸运能从两个角度看到它。一方面，我们非常仔细地跟踪基础科学和研究工作。所以我想说，我每天都会看到一篇新的AI研究论文，它让我彻底震惊，无论是某种新的能力，还是某种新的发现，抑或是某种我从未预料到的新发展，我都会觉得“哇，我简直不敢相信这正在发生。”另一方面，当然，我们看到了所有新产品和新创业公司的涌现。我想说，我们经常会看到一些事情，再次让我目瞪口呆。所以，感觉我们解锁了一个巨大的前景。

<details>
<summary>Original English</summary>

**Marc Andreessen**: So, so that's what's happening with AI. You know, I I think probably the biggest thing I could just say is like I'm surprised I think essentially on a daily basis of what I'm seeing. And and you know, we we're we're in the fortunate position to kind of get to see it from from two angles. You know, one one is we track the underlying science and and, and kind of research work very carefully. And so I would say like every day I see a new AI research paper that just like completely floores me of some new capability or some new discovery or some new development that I that I would have never anticipated that I I'm just like wow I you know I can't believe this is happening. And then on the other side of course you know we see the flow of all of the new products and all the new startups. And you know I would say we're routinely seeing things and again kind of have my my jaw on the floor. And so, you know, it feels like we we we've unlocked this giant vista.

</details>

**Marc Andreessen**: 我确实认为它会断断续续地发展。这些事情都是混乱的过程。这个行业经常冒着过度风险和过度承诺的风险。所以，肯定会有一些时候，人们会觉得“哇，这不像人们想象的那么好用”，或者“哇，这太贵了，经济上不划算”等等。但即便如此，我想说这些能力确实是神奇的。顺便说一句，我认为这就是消费者在使用它时的体验。我认为这也是大多数企业在进行试点和考虑采用时所体验到的。然后，它会转化为实际的数字。我的意思是，我们看到新一波的AI公司正在以前所未有的速度增长收入，就像实际的客户收入，实际的需求转化为银行账户中的美元。我们看到公司增长得更快。领先的AI公司以及那些有真正突破、有非常引人注目的产品的公司，它们的收入增长速度比我以前见过的任何方式都要快。所以，从所有这些来看，感觉它肯定还处于早期阶段。很难想象我们已经达到了顶峰。感觉一切都还在发展中。坦率地说，我觉得这些产品对我来说仍然非常早期。我非常怀疑人们今天使用的产品形式和形状，在未来5年或10年内还会继续使用。我认为事情会变得更加复杂。所以，我想我们还有很长的路要走。

<details>
<summary>Original English</summary>

**Marc Andreessen**: I do think it's going to kind of come in fits and starts. These things are messy processes. This is an industry that kind of routinely gets out over risks and overpromises. And and so, you know, there, you know, there will certainly be points where it's like, wow, you know, this isn't working as well as people thought, or you know, wow, this turns out to be too expensive and the economics don't work or whatever. But, you know, against that, I would just say the capabilities are truly magical. And and by the way, I think that's the experience that consumers are having when they use it. And I think that's the experience that businesses are having for the most part when they uh you know, when when they're working on their pilots and and looking at adoption and and and then and then it translates to the underlying numbers. I mean, we're we're just seeing a this new wave of AI companies is is growing revenue like just like actual customer revenue, actual demand translated through to dollars showing up in bank accounts. You know, at like an absolutely unprecedented takeoff rate. We're seeing companies grow much faster. The key leading AI companies and the companies that have real breakthroughs and have real have very compelling products are growing revenues that you know kind of faster than any any way I've certainly ever seen before. And so like just just from all that it kind of feels like it has to be early. Like it it's kind of hard to imagine that we've like we we've topped out in any way. It feels like everything is still developing. I mean quite frankly it feels like the products to me it feels like the products are still super early. Like I'm I'm I'm very skeptical that the form and shape of the products that people are using today is what they're going to be using in five or 10 years. I think I think things are going to get much more sophisticated from here. And so I think we probably have a long way to go.

</details>

### AI的商业模式与成本效益

**主持人**: 也许就这个话题。一个主要的批评是，是的，收入巨大，但开支似乎也在同步增长。那么，人们在这种讨论和话题中忽略了什么呢？

<details>
<summary>Original English</summary>

**主持人**: Maybe on that that topic. So one of the big knocks is yes the revenue is immense but the expenses seem to also be keeping pace. So like what are people missing as a part of that discussion and topic?

</details>

**Marc Andreessen**: 是的。我们先从核心商业模式说起，对吧？所以你说得对，这个行业基本上有两种核心商业模式：消费者商业模式和所谓的企业或基础设施商业模式。在消费者方面，我们现在生活在一个非常有趣的世界，互联网已经存在并完全部署了。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Yeah. So just start with just like core business models, right? And so you're right. There's basically this industry basically has two two core business models. Consumer business model and the quote unquote enterprise or infrastructure business model. You know look on the on the consumer side we we just live in a very interesting world now where where the internet exists and is fully deployed right.

</details>

**Marc Andreessen**: 我给你举个例子。有时人们会问我们：“AI是不是像互联网革命一样？”我说，有点像，但互联网的问题是，我们必须建造互联网。我们必须实际建造网络，而且最终它涉及地下大量的光纤，涉及大量的移动信号塔，以及大量的智能手机、平板电脑和笔记本电脑的出货量，才能让人们上网。这需要巨大的物理建设。顺便说一句，人们忘记了这花了多长时间。互联网本身是1960年代、1970年代的发明。消费者互联网在90年代早期是一个新现象。但我们直到2000年代才真正实现家庭宽带。实际上，它直到**互联网泡沫**破裂后才开始推广，这相当令人惊讶。然后我们直到2010年左右才有了移动宽带。人们实际上忘记了第一代**iPhone**在2007年发布，它没有宽带。它运行在窄带2G网络上。它没有高速，没有任何类似高速数据的东西。所以，直到大约15年前，我们才真正拥有移动宽带。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And so I'll give you an example. Sometimes people ask us like, "Is AI like the internet revolution?" It's like, well, a little bit, but like the thing with the internet was we had to build the internet. Like we we like we had we had to actually build the network and we actually had to, you know, and ultimately it involved enormous amount of fiber in the ground and it involved enormous numbers of like mobile cell towers and, you know, enormous number of, you know, shipments of of of smartphones and tablets and and and laptops in order to get people on the internet. Like there was this like just like incredible physical lift you know, to do that. And and by the way, people forget how long that took. Right, the the the you know, the internet itself is a invention of the 1960s, 1970s. The consumer internet, you know, was a new phenomenon in the early '90s. But, you know, we didn't really get broadband to the home until the 2000s. You know, that really didn't start rolling out actually until after the com crash, which is fairly amazing. And then we didn't get mobile broadband until like 2010. And and people actually forget the original **iPhone** dropped in 2007. It didn't have broadband. It was on a it was on a narrowband 2G network. It did not have high speed like it did not have anything resembling high-speed data. So it wasn't really until you know really about 15 years ago that we even had mobile broadband.

</details>

**Marc Andreessen**: 所以互联网是一个巨大的提升，但互联网已经建成了，智能手机也普及了。所以重点是，现在地球上有50亿人正在使用某种形式的移动宽带互联网，对吧？世界各地的智能手机售价低至10美元。而且，印度有像**Jio**这样了不起的项目，正在将地球上那些迄今尚未上网的人口带入网络。所以，我们谈论的是50亿、60亿人，而消费者AI产品基本上可以以他们希望采用的速度，尽快地部署给所有这些人，对吧？所以，互联网是AI能够以光速普及到全球人口基础的载体。可以说，这是一种新技术前所未有的传播速度。你不能下载电力，对吧？你不能下载室内管道，你不能下载电视，但你可以下载AI。

<details>
<summary>Original English</summary>

**Marc Andreessen**: So so the internet was this massive lift but but the internet got built right and smartphones proliferated. And so the point is now you have 5 billion people on planet earth that are on some version of you know mobile broadband internet right and you know smartphones all over the world are selling for you know as little as like 10 bucks. And you know you have these you know amazing projects like **Jio** and India that are bringing you know you know the sort of the remaining you know kind of the remaining population of of planet earth that hasn't been online until now is coming online. So, you know, so we're talking five billion, six billion, you know, people and and then the consumer, the reason I go through that is the consumer AI products could basically deploy to all of those people basically as quickly as they want to adopt, right? And so sort of the internet's the carrier wave for AI to be able to proliferate at kind of light speed into the broad base of the global population. And and that's a let's just say that's a potential rate of proliferation of a new technology that's just far faster than has ever been possible before. Like what you know, like you couldn't download electricity, right? You you couldn't download, you know, you couldn't download indoor plumbing. You know, you couldn't download television, but you can download AI.

</details>

**Marc Andreessen**: 这就是我们正在看到的，AI消费者，AI消费者杀手级应用正在以惊人的速度增长。然后它们的变现能力也非常好。而且，正如我之前提到的，总的来说，变现能力非常好，包括在更高的价位上。我喜欢AI浪潮的一点是，AI公司在定价方面比**SaaS**公司和消费互联网公司更有创意。所以，例如，现在消费者AI每月200或300美元的层级变得很常见，我认为这非常积极，因为我认为很多公司通过将定价上限设得过低而限制了它们的机会，而AI公司更愿意推动这一点，我认为这是好事。所以，我认为这足以让我们对消费者收入的范围抱有相当大的理性乐观。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And and and this is what we're seeing, which is the AI consumer, you know, the AI consumer killer applications are growing at at at an incredible rate. And then and then they're monetizing really well. And and again, you know, we we I mentioned this already, but like generally speaking, the monetization is is very good. By the way, including at higher price points. One of the things I like about the you know, about watching the AI wave is the AI companies I think are are more creative on pricing than the **SAS** companies and the consumer internet companies were. And so it's it's for example now becoming routine to have $200 or $300 t per month tiers for consumer AI which I which I think is very positive because I I think the I think a lot of companies cap their kind of opportunity by by capping their pricing kind of too low and I think the AI companies are more willing to push that which I think is good. So anyway, so that you know I think that's reason for like I would say you know considerable rational optimism for the scope of of consumer revenues that we're going to be talking about here.

</details>

**Marc Andreessen**: 然后在企业方面，问题基本上就是，智能的价值是什么，对吧？如果你能够将更多的智能注入你的业务，并且能够做一些即使是最平淡无奇的事情，比如提高客户服务分数，增加追加销售，或者减少客户流失，或者如果你能够更有效地运行营销活动，所有这些都与AI直接相关，那么这些都是人们已经看到的直接业务回报。然后，如果你有机会将AI融入新产品，突然之间，你的汽车会和你说话，世界上的一切都变得智能起来。这价值几何？再次，你只需观察，你会发现领先的AI基础设施公司正在以惊人的速度增长收入。这种拉动效应非常巨大。所以，再次，感觉这就像一个令人难以置信的**产品市场契合**。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And then on the enterprise side, you know, there the question is basically just, you know, what is intelligence worth, right? And you know, if you have the ability to like inject more intelligence into your business and you have the ability to do, you know, even the most prosaic things like raise your customer service scores, increase upsells, or reduce churn or if you have the ability to, you know, run marketing campaigns more effectively, all of which AI is directly relevant to, like, you know, these are like direct business payoffs, you know, that people are seeing already. And then if you have the opportunity to infuse AI into new products and all of a sudden, you know, all of a sudden your car talks to you, and everything in the world kind of lights up and starts to get really smart. You know, you know, what's that worth? And and again there you just you you kind of observe it and you're like, wow, the the leading AI infrastructure companies are growing revenues incredibly quickly. You know, the pull is really tremendous. And so, you know, again there it's just it feels like this just like incredible product market fit.

</details>

**Marc Andreessen**: 核心商业模式实际上非常有趣。核心商业模式基本上是按量付费的**tokens**，对吧？所以它是每美元的智能**tokens**。顺便说一句，这是另一个有趣的事情，如果你看看AI的价格正在发生什么，AI的价格下降速度比**摩尔定律**快得多。我可以详细解释，但基本上，AI的所有单位投入成本都在崩溃。因此，单位成本出现了这种超通货紧缩，然后这正在推动比相应水平更高的需求增长，具有弹性。所以，即使在那里，我们感觉我们才刚刚开始弄清楚这些东西到底有多贵或多便宜。我的意思是，毫无疑问，按量付费的**tokens**会变得便宜很多。我认为这只会推动巨大的需求。然后成本结构中的一切都将得到优化，对吧？

<details>
<summary>Original English</summary>

**Marc Andreessen**: And and and the core business model, right, is is is actually quite quite interesting. The core business model is is is basically is basically tokens by the drink, right? And so it's it's sort of tokens of intelligence per dollar. And oh, and then by the way, this is the other fun thing is if you look at what's happening with the price of AI, the price of AI is falling much faster than **Moore's law**. And when I could go through that in great detail, but basically like all of the inputs into AI on a perunit basis, the costs are collapsing. And and and and then as a consequence there's kind of this hyperdelation of per unit cost and then that is like driving you know just like you know a more than corresponding level of demand growth you know with with with elasticity. And so you know even there we're like it feels like we're just at the very beginning of kind of you know figuring out exactly how you know expensive or cheap this stuff is getting. I mean look there's just no question tokens by the drink are going to get a lot cheaper from here. That's just going to drive I think enormous demand. And then everything in the cost structure is going to get optimized right?

</details>

**Marc Andreessen**: 所以，当人们谈论芯片或任何构建AI的单位投入成本时，你现在会看到，盲目需求造成的损失将会显现出来，对吧？在任何具有商品特征的市场中，供过于求的首要原因是短缺，而短缺的首要原因则是供过于求，对吧？所以，如果你面临**GPU**短缺或任何芯片短缺，或者任何数据中心机箱短缺，如果你看看人类历史上为了响应需求而建造事物的情况，如果某种可以物理复制的东西出现短缺，它确实会被复制。所以，将会出现巨大的建设投入，我的意思是，现在有数千亿甚至数万亿美元可能投入到这些领域。因此，AI公司的单位成本将在未来十年内大幅下降。所以，是的，我的意思是，经济问题当然非常真实，当然这些业务周围也存在微观经济问题，但至少在这里，我认为宏观力量非常强大。鉴于这项技术对消费者和企业用户的潜在价值，以及人们在生活和业务中发现如何使用这项技术所发生的令人难以置信的积极发现，我真的很难想象它既不会大幅增长，也不会产生巨大的收入。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And so you know when when people talk about like you know the chips or you know whatever you know kind of the unit input costs for building AI you know you now have these like m the losses of blind demand are are going to are going to kick in right um what's the you know in any market that has sort of commodity like characteristics you know the number one cause of a of a of of a glut is a shortage and the number one cause of a shortage is the glut right and so you have you know to the extent you have like shortage of **GPUs** or shortage of whatever infest chips or shortage of you know whatever data center case, you know, if you look at just the history of humanity building things in response to demand, you know, if there's a shortage of something that can be physically replicated, it it does get replicated. And so there's going to be like just enormous build out of all I mean there is there's just hundreds of billions or at this point trillions of dollars maybe going into the ground in all these things. And so the the per unit cost of the AI companies are going to drop like a rock you know over the course of the next decade. And so like I yeah I mean the economic questions of course are very real and of course there's you know microeconomic questions around around all these businesses but the the sort of macro forces have been at least here I think are very strong and and yeah I I just given the underlying value of the of of this technology to both the consumers the enterprise users. And given the just like incredibly aggressive discovery that's happening of of all the ways that people can use this in their lives and in their businesses, like it's just it's really hard for me to see how it both doesn't grow a lot and generate just enormous revenue.

</details>

**主持人**: 是的。实际上，我记得大概两三周前，**AWS**说他们一直在使用的**GPU**，现在能够将其使用寿命延长到七年以上。所以，他们使用的**GPU**的货架寿命现在也在延长，他们能够以比前几个周期更好的方式进行优化。这也是正确的思考方式吗？

<details>
<summary>Original English</summary>

**主持人**: Yeah. And actually, I think it was like two or three weeks ago where **AWS** was saying like the the **GPUs** that they've been using, they've been able to extend back to even like seven plus years. So like the shelf life also of the **GPUs** that they're using is now extending in ways of which they can optimize better than maybe perhaps the last couple of of cycles. as well. Is that the right way to think about it as well?

</details>

**Marc Andreessen**: 是的，没错。这是一个非常重要的问题和观察。顺便说一句，这也引出了另一个问题，对此有不同的理论，那就是大模型与小模型之争。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Yeah, that's right. And then and then that's one that's that's one really important question and observation and and then by the way that also gets to this other kind of question where there's different theories on it. Which is basically big models versus small models.

</details>

**Marc Andreessen**: 很多数据中心的建设都围绕着托管、训练和提供大型模型，原因显而易见。但同时，小模型革命也在发生。如果你跟踪各种研究公司提供的图表，你会发现，在6到12个月后，就会出现一个能力同样出色的小模型。所以，正在发生一种追赶效应，即大模型的能力正在被迅速缩小，以更小的尺寸和更低的成本提供。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And so a lot of the data a lot of the data center build is oriented around hosting training and and and and serving the the big the big models, you know, for for all the obvious reasons. But there's also the small the small model revolution is happening at the same time and and and and if you just kind of track you know you can get get the various research firms have these charts you can get but if you just kind of track the if you track the capability of the leading edge models over time what you find is after 6 or 12 months there's a small model that's just as capable and so there there there's this kind of chase function that's happening which is the capabilities of the big models are basically being shrunk shrunk down and provided at at at at smaller size and then therefore smaller cost you know quite quickly.

</details>

**Marc Andreessen**: 我给你举一个最近两周发生的例子。这再次令人震惊。有一家中国公司，我忘了公司名字了，但它生产的模型叫**Kimmy**（拼写是Kim Mi），它是中国领先的开源模型之一。新版本的**Kimmy**是一个推理模型，根据目前的基准测试，它基本上复制了**GPT-5**的推理能力，对吧？而这些**GPT-5**的新模型是**GPT-4**的巨大进步，当然**GPT-5**的开发和维护成本巨大。突然之间，六个月后，你就有了一个名为**Kimmy**的开源模型，我想它被缩小到可以在一台**MacBook**或两台**MacBook**上运行。所以，如果你是一家企业，想要一个具备**GPT-5**能力的推理模型，但你不想支付**GPT-5**的成本，或者你不想让它托管，而是想在本地运行，你可以做到。

<details>
<summary>Original English</summary>

**Marc Andreessen**: So, I I'll just give you the the most recent example that just got hit over the last two weeks. And again, this is a thing that's just kind of shocking. Is there's this Chinese company that has a um well, I forget the name of the company, but it's it's the company that produces the model called **Kimmy**, which is spelled Kim Mi, which is one of the leading open source models out of China. And the new version of **Kimmy** is a reasoning model that is at least according to the benchmark so far is basically a replication of the reasoning capabilities of **GPT-5**, right? And and and these new models of **GPT-5** were a big advance over **GPT-4** and of course **GPT-5** costs a tremendous amount of money to to develop and to serve and all of a sudden you know here we are whatever 6 months later and you have an open source model called **Kimmy** and I think I don't know if they had it's either shrunk down to be able to run on either it's like one **MacBook** or two **MacBooks** right and so you can all of a sudden if you have like an applica you if you're a business and you want to have a reasoning model that's **GPT-5** capable but you you know you're whatever you're not going to pay the whatever **GPT-5** cost or you're not going to want to have it be hosted and you want to run it locally, you know, you can do that.

</details>

**Marc Andreessen**: 这又是一个突破。就像又一个星期二，又一个巨大的进步。真是令人惊叹。然后，当然，**OpenAI**会怎么做？他们显然会转向**GPT-6**，对吧？所以，这种层层递进正在发生，整个行业都在向前发展。大模型变得更强大，小模型则在追赶它们。然后小模型提供了完全不同的部署方式，价格点非常低。所以，是的，我认为我们会看到会发生什么。我的意思是，行业内有一些非常聪明的人认为，最终一切都只会在大模型中运行，因为显然大模型总是最聪明的，所以你总是会想要最智能的东西，因为为什么你会想要一个不是最智能的东西来处理任何应用呢？

<details>
<summary>Original English</summary>

**Marc Andreessen**: And and and again, that's just like another just it's just like another, you know, it's another breakthrough. Like it's just it's another another Tuesday, another huge advance. It's like, oh my god. And then of course, it's like, all right, well, what is **OpenAI** going to do? Well, obviously they're going to go to **GPT-6**, right? And you know, right? And so there there's this kind of lattering that's happening where the entire industry is moving forward. The big models are getting more capable. The small models are kind of chasing them. And then and then the small models provide you know completely different way to deploy at at at at very low price points. And so yeah I think and and you know we'll we'll see what happens. I mean there there are some very smart people in the industry who think that ultimately everything only runs in the big models because obviously the big models are always going to be the smartest and so therefore you're always you know you're always going to want the most intelligent thing because why would you ever want something that's not the most intelligent thing for any application.

</details>

**Marc Andreessen**: 反驳的观点是，经济和世界上有大量的任务不需要**爱因斯坦**。你知道，一个智商120的人就足够了，你不需要一个智商160、拥有弦理论博士学位的人。你只需要一个能干、有能力的人，那就很棒了。所以，我和你之前也谈过，我倾向于认为AI行业最终的结构会很像计算机行业，即你会有少数几个基本上相当于超级计算机的东西，我们称之为“**上帝模型**”（**god models**），它们运行在巨大的数据中心里。然后，我对此并不完全确信，但我的工作假设是，接下来会有一个小模型的级联，最终一直到运行在嵌入式系统上的非常小的模型，它们运行在世界上每个物理物品内部的独立芯片上。最智能的模型将始终处于顶端，但模型的数量实际上将是那些普及开来的小模型。这正是微芯片发生的情况，也是计算机（后来变成微芯片）发生的情况，也是操作系统以及我们用软件构建的其他许多东西发生的情况。所以我倾向于认为这会发生。

<details>
<summary>Original English</summary>

**Marc Andreessen**: You know the counterargument is just there's a huge number of tasks that take place in the economy and in the world that don't require **Einstein**. You know, where, you know, where, you know, 120 IQ person is great. You don't need a, you know, 160 IQ, you know, PhD in, you know, string theory. You just like have somebody who's competent and capable and it's great. And so, you know, I I, you know, and I we've talked about this before. I tend to think the AI industry is going to be structured a lot like the computer industry ended up getting structured, which is you're going to have a small handful of basically the equivalent of supercomputers, which are these like giant, you know, kind of we call **god models** that are, you know, running in these giant data centers. And then and then you know I I I I I'm not like convinced on this but my my kind of working assumption is what happens is then you have this cascade down of smaller models all ultimately all the way the very small models that run on embedded systems right run on run on individual chips inside every you know physical item in the world. And that you know the smartest models will always be at the top but the volume of models will actually be the smaller models that proliferate out and right that's what happened with microchips. It's what happened with computers which became microchips and then it's what happened with operating systems and with with a lot of everything else that we built in software. So you know I tend to think that's what will happen.

</details>

**Marc Andreessen**: 快速谈一下芯片方面，再次，如果你看看芯片行业的整个历史，短缺会变成过剩。每当一个新的芯片类别出现巨大的利润池时，总会有人暂时领先，并获得我们称之为“稳健市场份额”的利润。但随着时间的推移，竞争就会出现，当然，这现在正在发生。所以**英伟达**（**Nvidia**）是一家非常棒的公司，完全配得上他们现在的地位，完全配得上他们正在创造的利润，但他们现在如此有价值，创造了如此多的利润，以至于这向芯片行业的其他公司发出了有史以来最强烈的信号，让他们思考如何推进最先进的AI芯片。顺便说一句，这已经发生了。所以，你看到其他主要公司，比如**AMD**，正在迎头赶上，更重要的是，你看到超大规模公司正在构建自己的芯片。所以，很多大型科技公司都在构建自己的芯片。当然，中国人也在构建自己的芯片。所以，在五年内，AI芯片很可能会变得便宜且充足，至少与今天的情况相比是这样。我认为这对于我们投资的这类公司的经济效益将是极其积极的。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Just quickly on the chip side again like chips you if you look at the entire history of the chip industry shortages become gluts and you get just you know like anytime there's a giant profit pool in a in a new chip category somebody has a lead for a while and kind of gets you know let's say the the the profits appropriate to what we u what we call robust market share but in time what happens right is that that draws competition and of course you know that that that's happening right now. So **Nvidia's**, you know, **Nvidia** is an absolutely fantastic company, fully deserves the position that they're in, fully deserves the profits that they're generating, but they're now so valuable, generating so many profits that it's the bat signal of all time to the rest of the chip industry to figure out how to advance the state-of-the-art AI chips. And that's, by the way, and that's already happening, right? And so you've got other major companies like **AMD** coming at them, and then you've got really significantly, you've got the hyperscalers building their own chips. And so, you know, a bunch of the big a bunch of those kind of big tech companies are building their own ships. And of course then the Chinese are building their own ships as well. And so it's just it's like pretty likely in 5 years that that you know AI chips will be you know cheap and plentiful at least in comparison to the situation today. Which again I think will you know will tend to be extremely positive for the economics of of the kinds of companies that we invest in.

</details>

**主持人**: 是的。而且初创公司也开始追求新的芯片设计，这也很令人兴奋。

<details>
<summary>Original English</summary>

**主持人**: Yep. And that startups are also starting to go after new chip design as well which is exciting.

</details>

**Marc Andreessen**: 是的。这是另一回事，是的，你有很多颠覆性的初创公司。实际上，就芯片而言，我们并不是芯片领域的大投资者，因为它更像是大公司的事情。但AI运行在所谓的**GPU**上，这有点历史巧合。**GPU**代表图形处理单元。对于那些不了解的人来说，基本上有两种芯片促成了个人电脑的出现。一种是所谓的**CPU**（中央处理单元），经典上是**英特尔**（**Intel**）的x86芯片，它是计算机的大脑。然后是另一种芯片，称为**GPU**（图形处理单元），它是每台PC中的第二块芯片，负责所有图形处理。这包括游戏或**CAD/CAM**或**Photoshop**或任何涉及大量视觉效果的3D图形。所以，个人电脑的经典架构是**CPU**和**GPU**。顺便说一句，智能手机也是如此。随着时间的推移，这些功能已经融合，所以现在很多**CPU**都内置了**GPU**功能。实际上，很多**GPU**现在也内置了**CPU**功能。所以，随着时间的推移，这变得模糊了，但那是经典的划分。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Yeah. Well, that's the other thing is yeah, you have these disruptive startups and actually that just for a moment on the chips, they were not really big investors in chips because it's kind of a big it's kind of a big company thing, but it's a little bit of historical happen stance that AI is running on quote unquote **GPUs** you know which **GPU** stands for graphical processing unit. So and basically just for people who haven't tracked this there were basically two kinds of chips that made the personal computer happen. The so-called **CPU** central processing unit which classically was the **Intel** x86 x86 chip that's kind of the brain of the computer and then there was this other kind of chip called the **GPU** or graphical processing unit that was the sort of second chip in every PC that does all the graphics and you know and this is graphics you know 3D graphics for gaming or for **CAD CAM** or for you know anything else you know **Photoshop** or for anything that involves you know lots of visuals and so the the kind of canonical architecture for a personal computer was a **CPU** and a **GPU** by the way same thing for smartphones but by the way.

</details>

**Marc Andreessen**: 但这种经典划分的事实意味着，虽然**英特尔**长期以来在**CPU**领域拥有垄断地位，但**GPU**市场是另一个市场，**英伟达**基本上为此打了30年的**GPU**战争，并最终成为赢家，成为该领域最好的公司。但那是一个图形处理器竞争异常激烈的市场。它的利润率实际上并不高，规模也不大。然后，基本上，事实证明，还有两种其他形式的计算具有令人难以置信的价值，它们恰好是大规模并行的，这非常适合**GPU**架构。这两种基本上利润丰厚的额外应用是大约15年前开始的**加密货币**，以及大约四年前开始的AI。所以，**英伟达**非常巧妙地建立了一个非常适合这种架构的体系，但这也是命运的一点点转折，事实证明，如果AI是杀手级应用，那么**GPU**架构恰好是最好的传统架构，致力于此。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And over time, you know, these have kind of merged and so like a lot of **CPUs** now have **GPU** capability built in. Actually, a lot of **GPUs** now have **CPU** capability built in. So this, you know, this has gotten fuzzy over time, but like that that was like the classic breakdown. But the fact that that was the classic breakdown, you know, kind of meant that while **Intel** had a you know, monopoly for a long time on **CPUs**, there was this other market of **GPUs** which **Nvidia** you know basically fought the **GPU** wars for 30 years and and and came out the winner like what was the best company in the space. But it was like a hyper competitive market for graphics processors. It was actually not that high margin and it was actually not that big. And then basically it just it turned out that there were two other forms of computation that were incredibly valuable that happened to be massively parallel in how they operate which which happened to be very good fits for the **GPU** architecture. And those two basically highly lucrative additional applications were **cryptocurrency** starting about you know 15 years ago and then AI starting about you know whatever four years ago. And so and and **Nvidia** like I would say very cleverly set itself up with an architecture that works very well for this, but it's also just a little bit of a twist of fate that it just turns out that if AI is the killer app, it just turns out that the **GPU** architecture is the best legacy architecture is devoted to it.

</details>

**Marc Andreessen**: 我之所以说这些，是想说明，如果你今天从零开始设计AI芯片，你不会构建一个完整的**GPU**。你会构建专门的AI芯片，它们更具体地适应AI，而且我认为它们会更经济高效。**John**，正如你所说，有一些初创公司正在实际构建专门针对AI的全新类型的芯片。我们拭目以待会发生什么。建立一家新的芯片公司从零开始是很难的。这些初创公司中，有一家或多家有可能独立成功，其中一些做得非常好。当然，它们也有可能被有能力扩大规模的大公司收购。所以，我们拭目以待具体会如何发展。当然，我们也会看到韩国肯定会参与进来。日本也会参与。然后，中国人也将以主要的方式参与。他们有自己的本土芯片生态系统正在建设中。所以，未来将会有很多AI芯片的选择。这将是一场巨大的战役，我们将非常仔细地观察这场战役，并确保我们的公司能够充分利用它。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And I go through that to say like if you were designing AI chips from scratch today, you wouldn't build a full **GPU**. You would build dedicated AI chips that were much more much more specifically adapted to AI and would have I I think would just be much more economically efficient and you know **John** to your point there there there are startups that are actually building entirely new kinds of chips oriented specifically for AI and you know we'll have to see what happens there you know it's hard to build a new chip company from scratch you know it's possible that one or more of those startups makes it on their own and some of them are you know doing very well it's also possible of course that they get bought you know by big companies that that have the ability to scale them. And so, you know, you know, we'll see exactly how that unfolds. And of course, we'll also, by the way, see, you know, the Koreans are going to play here for sure. The Japanese are going to play. And then, you know, the Chinese in a major way, as well. And, you know, they have their own, you know, native chip ecosystem that they're that they're building up. And so there there there there are going to be many choices of AI chips in the future. And it's going to be that, you know, that'll be a giant battle that'll be a giant battle that we observe very carefully. And that we make sure that our our companies basically are able to take full advantage of.

</details>

### 中美AI竞争与政策

**主持人**: 谈到国际话题，你之前提到了**Kimmy**。现在看来，一些最好的开源模型来自中国。这应该引起人们的担忧吗？你如何看待并与**华盛顿特区**的人们讨论这个话题？我知道你上周刚去过那里。对于美国公司来说，这在多大程度上是一个担忧，特别是考虑到中国在太阳能市场、汽车市场等领域出现的不自然增长？他们是否正在“淹没”生态系统，以便最终夺取份额并日益掌控整个生态系统？

<details>
<summary>Original English</summary>

**主持人**: While while on the topic of of international we you mentioned **Kimmy** earlier. So it seems like some of the best open source models today are from China. Should this be worrisome to to folks? How are you thinking and talking about this topic with with folks in **DC**? I know you were just there last week. How much of this is a concern for US companies particularly just having seen the rise of China do unnatural things in solar markets, car markets? Are they kind of flooding the ecosystem so that they can eventually kind of take share and and increasingly own the the ecosystem?

</details>

**Marc Andreessen**: 是的。有几点。首先，在开始这些讨论时，你总是会说，在美国和世界各地，关于我们与中国在多大程度上处于一场新冷战，以及我们应该如何看待他们的敌意，存在着激烈的辩论。顺便说一句，认为我们正处于一场新冷战的观点非常诱人，而且有很好的论据支持，这场冷战在很多方面都像20世纪的美国与苏联。反驳的观点是，情况比那更复杂，因为美国和苏联从未在贸易方面真正交织在一起。坦率地说，很大一部分原因在于苏联从未真正生产过除了武器之外任何其他人需要的东西。但中国的出口量巨大，包括美国制造商生产的所有产品供应链中的很大一部分零部件。所以，当一家美国公司将玩具、汽车、电脑、智能手机或任何其他产品推向市场时，其中包含大量中国制造的零部件。因此，美国和中国经济之间的联系比美国和苏联经济之间的联系要紧密得多。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Yeah. So a couple things. So one is you know you know you want to start these discussions by just kind of saying like you know look there's there's vigorous debate in in the US and around the world of look like you know how much are we in a new cold war with China you know and exactly like how hostile you know should should we view them and it you know it's very tempting by the way it's very tempting and I think it's a very good case made that we're in like a new cold war that's like that in a lot of ways is like the US versus **USSR** in the in the 20th century you know it is the counter argument would be it is more complicated than that because the US and the **USSR** were never really intertwined from a trade standpoint and and a big part of that quite frankly was the **USSR** never really made anything that anybody else needed I guess other than weapons. But like you know the **USSR's** primary exports were literally like you know literally like wheat and and oil. Whereas of course China exports just a tremendous number of physical things right including like a huge part of like the entire supply chain of parts that basically go into everything that American manufacturers you know kind of make right and so by the time a US you know whatever by the time an American company brings a toy to market right or a you know or a car or anything or a computer or a smartphone or whatever like it's got a lot of componentry in it that was made in China so there so there is a much tighter in interlinkage between the the American and Chinese economies than there as the American and Soviet economies.

</details>

**Marc Andreessen**: **亚当·斯密**（**Adam Smith**）可能会说，这对和平是好消息，两国都需要彼此。顺便说一句，这个论点的另一部分是，中国基本上，中国的治理模式是基于高就业率的。因为，你知道，如果中国最终出现25%或50%的失业率，所有地缘政治学家都说，那将导致社会动荡，这是**中共**最不希望看到的。因此，贸易压力的相应部分是中国需要美国出口市场。美国消费者占据全球经济的三分之一，全球消费需求的三分之一。所以，中国需要美国出口市场，否则它的大量工厂会突然破产，导致中国大规模失业和动荡。所以，无论如何，我们之间存在这种复杂交织的关系。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And you know may maybe you know **Adam Smith** or whatever might say you know that's good news for peace and that you know both countries need each other by the way the other part of that argument is that the Chinese basically the Chinese you know the Chinese governance model is based on high employment you know because you know if if if you know at least all the geopolitical people say if China ended up with like 25 or 50% unemployment that would cause civil unrest which is the one thing that the **CCP** doesn't want and so the corresponding part of the trade pressure is China needs the American export market you know the American consumer is like a third of the global economy. A third of global consumer demand. And so you know China needs the US export market or it has high all of a sudden a lot of its factories would go kind of instantly bankrupt and you know would cause mass unemployment and unrest in China. So so anyway like you know we there is this complicated it's a it's a complicated intertwined relationship.

</details>

**Marc Andreessen**: 话虽如此，过去10年里，**华盛顿特区**两党的基本共识是，我们需要更认真地对待中国这个地缘政治对手。在这种思想流派下，存在军事维度，即南海可能爆发某种战争的风险，台湾周边可能爆发某种战争的风险，这让华盛顿的所有人都高度警惕。还有关于美国去工业化、潜在再工业化以及这意味着对中国依赖的经济问题。然后就是AI问题。AI问题既是一个经济问题，也是一个地缘政治问题，即AI基本上只在美国和中国被构建。世界其他地方要么无法构建，要么不想构建，我们可以讨论这一点。所以基本上是美国对中国。然后AI将普及到世界各地，那么普及到世界各地的是美国AI还是中国AI呢？

<details>
<summary>Original English</summary>

**Marc Andreessen**: Having said that you know the the mood in **DC** basically for the last 10 years on a bipartisan basis has been that we need to take we the US need to take China more seriously as a geopolitical foe. And you know under under under that school of thought there's sort of the sort of you know there's there's the military dimension which is you know the sort of the you know the the risk of some kind of war in the South China Sea the risk of some kind of war around around Taiwan and so that you know that that has everybody in **Washington** on high alert you know there's also this this economic question around the kind of de-industrialization of the US potential re-industrialization and what that means about you know dependence on China and then and then there's and then there's this this this AI question and and the AI question is an economic question but It's also like a geopolitical question which is okay you know basically AI is essentially only being built in the US and in China. You know the rest of the world either you know can't build it or doesn't want to which which we could talk about. So it's basically US versus China. And then AI is going to proliferate all over the world and is it going to be American AI that proliferates all over the world or is it going to be Chinese AI that proliferates all over the world?

</details>

**Marc Andreessen**: 我刚才说的这些，基本上是**华盛顿特区**跨党派人士看待这个问题的方式。中国人正在参与这场竞争。所以中国人肯定在软件领域参与竞争，**DeepSeek**可以说是软件竞赛的“发令枪”，现在我认为有四家公司，比如**DeepSeek**，它是一个来自中国对冲基金的AI模型，有点出乎很多人的意料。然后**通义千问**（**Quen**）是**阿里巴巴**的模型。**Kimmy**来自另一家初创公司，叫**月之暗面**（**Moonshot**）。然后还有**腾讯**和**百度**，以及**字节跳动**，它们都是在AI领域做了大量工作的主要公司。所以，中国有三到六家主要的AI公司，然后还有大量的初创公司。所以，他们在软件领域参与竞争。他们正在努力追赶芯片领域。他们还没有达到目标，但他们正在非常努力地追赶。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And so and I was saying just generally across party lines in **DC** this you know the the things I just went through are kind of how they look at it. And and the Chinese are in the game and so the you know the Chinese are in the game for sure you know with software you know **DeepSeek** you know was kind of the big you know kind of fire the starting gun in the software race and now you've got I think it's I think you've got four it's like **DeepSeek** which is a deep so **DeepSeek** is an AI model from actually a hedge fund in China it's a little bit kind of took a lot of people by surprise then **Quen** is the model from **Alibaba**. **Kimmy** is from another startup. Oh, called **Moonshot**. The company's called **Moonshot**. And then there's, you know, and then, you know, there's also **Tencent** and **BU**. And, and, **ByteDance**, you know, that are all primary, you know, companies doing a lot of work in AI. And so, you know, there's somewhere between three to six, you know, kind of primary AI companies. And then there's, you know, tremendous numbers of of startups. And so, you know, they're in the race on on, you know, they're in the race on on on software. They are, you know, working to catch up on chips. They're not there yet, but they're working incredibly hard to catch up.

</details>

**Marc Andreessen**: 举个例子，在美国，普遍的理解是，你还没有看到新版**DeepSeek**的原因是，中国政府指示他们只使用中国芯片来构建它，以此作为推动中国芯片生态系统发展和运行的动力。而那里的主要芯片公司是**华为**，尽管未来可能会有更多。然后，还有机器人形式的AI，对吧？所以，一场全球性的技术经济机器人竞赛正在拉开序幕。中国在机器人领域处于领先地位，因为他们在机器人所需的许多零部件方面都处于领先地位。因为，就像我说的，整个机电一体化零部件供应链在30年前就从美国转移到了中国，并且从未回来。所以，这就是**华盛顿特区**看待这个问题的方式。我想说，**华盛顿特区**正在非常仔细地观察。今年最大的“超新星时刻”是**DeepSeek**的发布。**DeepSeek**的发布在很多方面都令人惊讶。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And just as an example of that, you know, the at least the common understanding you know, in the US is that the reason you haven't seen the new version of **DeepSeek** yet is that basically the Chinese government has instructed them to build it only on Chinese chips as a as a motivator to get the Chinese chip ecosystem up and running. And then the main chip company there is **Huawei**, although there could be more in the future. And then there's so you know, so so so there's that and then and then there's everything to follow which is basically AI in kind of robotic form, right? And so there there's this basically global technological economic robotics competition that's kicking off. And you know China kind of starts out ahead on robotics because they're just ahead on so many of the so many of the components that go into robots because the you know the sort of like I said this the kind of entire supply chain of like electromechanical things you know basically moved from the US to China 30 years ago and and has never come back. So so so that's kind of the the the the **DC** lens on it. And and I would say you know **DC** is watching it you know quite carefully. The the the the big kind of supernova moment this year was the **DeepSeek** release. The **DeepSeek** release was surprising on a number of fronts.

</details>

**Marc Andreessen**: 一方面是它有多好，再次，它将大型模型在云端运行的能力集缩小，并将其缩小到可以在少量本地硬件上运行的较小版本，具有等效功能。所以有这一点。然后，它以开源形式发布也令人惊讶，特别是来自中国的开源，因为中国没有悠久的开源历史。然后，它实际上来自一家对冲基金也令人惊讶。所以它不是来自大型研发机构，不是来自大学研究实验室，也不是来自大型科技公司。它来自一家对冲基金，据我们所知，这基本上是一个有点特殊的情况，你有一家非常成功的量化对冲基金，里面有许多超级天才，而这家对冲基金的创始人基本上决定构建AI。至少从外部迹象来看，这甚至让中国政府都感到惊讶。不可能证明中国政府是否感到惊讶，但至少从气氛上看，这并非完全计划好的。**DeepSeek**发布时，它并不是一家国家级科技公司，它有点像“黑马”一样出现。顺便说一句，这对于这个领域来说是非常鼓舞人心的，因为这意味着一个不为人知的人也有可能做到这一点，对吧？因为它意味着也许你不需要所有这些超级天才研究人员，也许聪明的年轻人就可以构建这些东西，我认为这是事物发展的方向。

<details>
<summary>Original English</summary>

**Marc Andreessen**: One was just how good it was and again along this line of it took the capability set that were running in large models in the cloud and kind of shrunk it onto a you know into into a uh into a a sort of a a reduced size you know a smaller version of sort of equivalent capabilities that you could run on small amounts of local hardware. And so there was that and then it was also a surprise that it was released as open source and particularly open source from China because China China does not have a long history of open source. And then it was also a surprise that it actually came from a hedge fund. So it didn't come from a big R&D you know sort of university research lab. It didn't come from a you know from a big tech company. It it came from a hedge fund and it it like as as far as we can tell it it basically is this somewhat idiosyncratic situation where you just have this incredibly successful quant hedge fund with all these you know super geniuses and the the founder of that hedge fund you know basically decided to build AI and you know at least external indications are this was a surprise to even even the Chinese government it's it's impossible to prove you know what the Chinese government was surprised by or not but you know there's at least the atmospherics are that this was not exactly planned this was not a national champion tech company at the time that **DeepSeek** was released it was it sort of came out of left field which by the way is very encouraging for the field that it was possible for somebody to do that kind of who was unknown right because it kind of means that maybe you don't need all these you know super genius superstar researchers maybe actually smart kids can just build this stuff which I think is is the direction things are headed.

</details>

**Marc Andreessen**: 所以，这引发了一种，我不知道“模仿”这个词是否恰当，但这感觉像是**DeepSeek**的成功，以及**DeepSeek**作为中国开源项目的成功，在中国引发了一种发布这些开源模型的趋势。你看，**华盛顿特区**的愤世嫉俗者会说，他们是在倾销，对吧？他们显然在倾销。他们试图，你知道，他们看到西方有机会建立这个中国产业。他们试图从一开始就将其商品化。这可能有点道理。中国工业经济确实有补贴生产的历史，在某些情况下会导致低于成本销售。但我也认为这有点过于愤世嫉俗，因为这就像“哇，他们真的在参与竞争！”无论是开源还是闭源，他们真的在参与竞争。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And so that kicked off I would say like this kind of I I don't know copycat's the wrong word but that that was sort of it feels like the success of **DeepSeek** and the success of **DeepSeek** from China as open source kind of kicked off a sort of trend in China releasing these open source models. You know Look, the cynics, you know, in **DC** would say, you know, yeah, like they're dumping, right? The the they're obviously dumping. They're trying to, you know, they see that the West has this opportunity to build this China industry. You know, they're trying to commoditize it right out of the gate. You know, there's probably something to that. You know, the the Chinese industrial economy does have a history of, you know, sort of, let's say, subsidized production that leads to selling, you know, selling things below cost in some cases. But I think also it's it like I think that's almost too cynical of a view also because it's just like all right wow like they're really in the race like open source closed source whatever like that you know they're actually really in the race.

</details>

**Marc Andreessen**: 我们过去在**LP**电话会议上讨论过，过去两年我们在**华盛顿特区**进行的政策斗争。两年前，美国政府内部曾有一个相当大的推动，基本上限制或彻底禁止许多AI。对于一个在该领域独占鳌头的国家来说，进行这些对话非常容易。但如果你真的在与中国进行赛跑，情况就完全不同了。所以，我认为**华盛顿特区**的政策环境已经显著改善，因为现在人们意识到这是一场两匹马的赛跑，而不是一匹马的赛跑。

<details>
<summary>Original English</summary>

**Marc Andreessen**: You know, we we've talked in the past, I think, on on on **LP** calls about, you know, these policy fights that, you know, we've been having in **DC** for the last two years. And, you know, there was a big pretty pretty big push within the US government, you know, two years ago to basically, you know, restrict, uh, you know, or outright ban, you know, a lot of AI. And, you know, it's very easy for a country that is the only game in town to have those conversations. It's quite another thing if you're actually in a foot race with China. And so I think actually the the the the policy landscape in **DC** has I would say has improved dramatically as a consequence of sort of an awareness now that this is actually a two- horse race, not a one-horse race.

</details>

### AI政策与监管

**主持人**: 当然。是的。实际上，就这一点而言，我将在这里跳到政策和监管部分，因为各州制定50套不同的AI法律似乎是一种灾难性的方式，会让我们在AI竞赛中束手束脚。对此有什么计划？人们是否认识到这将对进步和发展造成灾难性影响？今天大多数人对此持何立场？

<details>
<summary>Original English</summary>

**主持人**: For sure. Yeah. Actually on on the point I'll I'll jump ahead here to policy and regulation just because it seems like the current stance on on 50 different set of AI laws by state seems like a catastrophic way to to put us effectively with a or one of our our hands tied behind our our back here in terms of the the AI race. What's a state of plan on that? Are folks recognizing that that would be catastrophic for progress and development? Where do most people at least stand on that topic today?

</details>

**Marc Andreessen**: 是的。这有点复杂。所以我回顾一下，大概两年前，我非常担心联邦政府会出台真正毁灭性的AI立法，当时我们非常积极地参与了讨论，我们过去也谈过。我认为好消息是，就目前而言，这种风险非常低。**华盛顿特区**两党都没有什么意愿真正做任何会阻止我们击败中国的事情。所以，在联邦层面，情况现在好多了。系统中会有问题，也会有紧张，但情况看起来相当不错。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Yeah. So it's a little bit complicated. So I'll rewind to say like two years ago I was very worried about like really ruinous federal federal legislation on AI and there was there was we you know we engaged you know kind of very heavily at that point which we've talked about in the past and I think the good news on that is I think the risk of that sitting here today is very low. I there's very little mood in **DC** on either side of the aisle to really you know essentially there's very little there's very little interest in doing anything that would prevent us from beating China. So so you know on the federal side things things are much better now. There there will there will be issues and there are tensions in the system but like things are looking looking pretty good.

</details>

**Marc Andreessen**: **Jen**，正如你所说，这使得很多注意力转移到了各州。基本上，在我们联邦制体系下，各州可以就很多事情通过自己的法律。所以，是的，基本上，很多，你知道，这些事情总是多种因素的结合。很多好心人正在努力弄清楚在州一级该怎么做，当然也有很多机会主义者，AI只是一个热门话题。所以，如果你是一个积极进取、崭露头角的州议员，或者在某个州想竞选州长，然后是总统，你就会想抓住这个热点。所以，有政治动机去做州一级的事情。是的，就目前而言，我们正在跟踪50个州的大约2000项法案。顺便说一句，不仅是蓝州，还有红州。所以，在过去五年左右的时间里，我花了很多时间抱怨民主党政客威胁要对科技公司做些什么。也有很多共和党人，共和党人在这方面并不是铁板一块。在不同的州，有很多地方共和党官员，我认为他们也有一些，可以说，被误导或不明智的观点，并试图提出糟糕的法案。

<details>
<summary>Original English</summary>

**Marc Andreessen**: That has translated **Jen** to your point that's translated a lot of the attention to the states and basically what's happened is you know under our system of of federalism you know the states get to pass their own laws on a lot of things. And so yeah, basically you know a lot of you know and and you know with these things it's always a combination. A lot of well-meaning people are trying to figure out what to do at the state level and then of course there's a lot of opportunism where AI is just the hot topic. And so if you're a you know aggressive up and cominging state legislator or whatever in some state and you want to run for governor and then president you know you want to kind of attach yourself to the heat. And so there's like a political motivation to to do state level stuff. Yeah and sitting here today like we're tracking on the order of,200 bills across the 50 states. And by the way, not just the blue states, also the red states. And so, you know, I'm I've, you know, for the last like 5 years or whatever, I spent a lot of time complaining about, uh, you know, kind of what Democratic politicians are threatening to do to attack. There's also a lot of Republicans, like Republicans are not a block on this. And there are quite a few like local Republican officials in different states, that that also, I think, have, you know, let's say, you know, misinformed or ill-advised, views and are trying to put together, put out bad bills.

</details>

**Marc Andreessen**: 有点奇怪的是，这正在发生，而且联邦政府确实对州际贸易有监管权。而且，你知道，AI这种技术本质上就是州际的。没有一家AI公司只在**加州**运营，或者只在**科罗拉多州**或**德克萨斯州**运营。在所有技术中，AI显然是具有全国性范围的东西。联邦政府应该是监管者，而不是各州，这一点显而易见。但联邦政府需要自我主张，需要介入。实际上，曾有人试图这样做。曾有人试图对州一级的AI监管实行暂停，基本上保留联邦政府监管AI的权利，并阻止各州推进这些法案。我认为那是“一个大而美的法案”谈判的一部分，然后那项协议在最后一刻破裂了，暂停没有发生。公平地说，反对暂停的人认为，这可能有点过于牵强。不，抱歉，这绝对是过于牵强，无法获得足够的支持通过，但在限制各州进行某些他们确实应该能够进行的监管方面，也可能有点过于牵强。所以，它没有完全实现。

<details>
<summary>Original English</summary>

**Marc Andreessen**: It's a little bit weird that this is happening and that you know the federal government does have regulation of interstate commerce and you know technology AI kind of by definition is interstate like you know there's there's no AI company that just operates in **California** or just operates in you know **Colorado** or **Texas** you know AI of all technologies AI is obviously something this this sort of national in scope you know it's sort it's sort of obvious that the federal government should be the regulator not not not the states but but the federal government need needs to assert itself needs to step in. There there was actually an attempt to do that. There was a um there was an attempt to add a moratorium of state level AI regulation that basically would would reserve the right of the federal government to regulate AI and sort of prevent the states from moving forward with these bills. That was I think part of the negotiation for the quote one big beautiful bill and then that that there was a deal behind that and that deal kind of blew up at the at the last minute and that moratorium didn't happen and and you know in fairness the critics of that moratorum it probably was a was it was probably too much of a stretch. Well, it was I'm sorry. It was definitely too much of a stretch to get enough support to pass, but it was also probably too much of a stretch in terms of restricting the states from certain kinds of regulation that they really should be able to do. So, so it just it didn't quite come together.

</details>

**Marc Andreessen**: 我们现在正在**华盛顿特区**进行非常积极的讨论，讨论下一步该怎么走。我认为政府非常支持联邦政府负责此事，因为这是一个真正的50个州的问题，也是一个国家重要的问题。然后，我想说，两党的大多数国会议员都理解这一点。所以我们只需要找到一种方法来解决这个问题，但我认为这会实现。一些州一级的法案非常疯狂。**科罗拉多州**去年通过了一项非常严厉的监管法案。当地**丹佛**和**博尔德**周边的初创生态系统对此表示强烈反对。实际上，一年后他们现在正试图撤销该法案。

<details>
<summary>Original English</summary>

**Marc Andreessen**: There's a very active we're having very active discussions in **DC** right now about kind of the next, you know, the kind of the next turn on that. You know, the administration is I would say the administration is very supportive of of the idea of of the federal government being in charge of this as part of it being an actual, you know, 50-st state issue. And and and an issue of national importance. And then, you know, I'd say most most Congress people on both sides of the aisle, you know, kind of get this. So we just we we kind of have to figure out a way to, you know, to land this, but but I think that'll happen. Some of the state level bills are wild. The **Colorado** passed a very draconian regulation bill last year. And against like furious objections from the local startup ecosystem in in in around **Denver** and **Boulder**. And actually they're they're now actually trying to reverse their way out of that bill.

</details>

**主持人**: 是的。所以，真正严厉的是算法歧视以及如何缓解他们提出的一些极端版本。

<details>
<summary>Original English</summary>

**主持人**: Yeah. So the really draconian one was the the one that we really fought hard was the one in **California** which was called **SB1047** and it wasn't it it it was basically it was modeled basically after the was called the **EU AI act**. So the **European Union's** AI act. Okay. And this is the backdrop to all the US stuff which is the **EU** passed this bill called the **AI act** I don't know whatever two years ago and it basically has killed AI development in well it's actually killed AI development in Europe to a large extent.

</details>

**Marc Andreessen**: 是的。所以，真正严厉的是我们在**加州**极力反对的法案，名为**SB1047**。它基本上是模仿**欧盟AI法案**（**EU AI Act**）制定的。所以，这是所有美国立法背景的一部分，即**欧盟**在大约两年前通过了这项名为**AI法案**的法案，它基本上扼杀了欧洲的AI发展，在很大程度上确实如此。而且它非常严厉，以至于像**苹果**（**Apple**）和**Meta**这样的大型美国公司甚至不在欧洲的产品中推出领先的AI功能。这就是这项法案的严厉程度。这有点像典型的欧洲做法，他们觉得，如果不能成为创新领域的领导者，至少可以成为监管领域的领导者。顺便说一句，他们确实是这么说的。然后他们通过了这种极其破坏性的自残行为。几年后，他们会说：“天哪，我们做了什么？”所以他们正在经历自己的版本。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Yeah. So the really draconian one was the the one that we really fought hard was the one in **California** which was called **SB1047** and it wasn't it it it was basically it was modeled basically after the was called the **EU AI act**. So the **European Union's** AI act. Okay. And this is the backdrop to all the US stuff which is the **EU** passed this bill called the **AI act** I don't know whatever two years ago and it basically has killed AI development in well it's actually killed AI development in Europe to a large extent. And then it even it it's so draconian that even even big American companies like **Apple** and **Meta** are not launching leading edge AI capabilities in their products in Europe. Like that that's how that's how like draconian that bill was. And it's it's sort of a classic it's a classic kind of European thing where they like you know like they just thought that you know they they have this kind of view that it's just like well you know we if we can't be the leader they literally say this by the way if we can't be the leaders in innovation at least we can be the leaders in regulation. And and and then they pass this like incredibly you know kind of ruinous selfharm you know kind of thing and then you know a few years pass and they're like oh my god what have we done and so they're you know they're kind of going through their own version of that.

</details>

**Marc Andreessen**: 顺便说一句，当谈到欧洲时，我倾向于对此非常悲观。我告诉你，我认识的对欧洲最悲观的人是那些移居美国的欧洲企业家。他们对欧洲正在发生的事情感到非常愤怒。但即使在那里，欧洲的情况也太糟糕了，他们自作自受得太厉害了，以至于**欧盟**现在正在尝试撤销这项法案。他们正在尝试撤销**GDPR**。所以，对于关注欧洲的人来说，**马里奥·德拉吉**（**Mario Draghi**），意大利前总理，大约一年前发布了一份名为《**德拉吉报告**》（**Draghi Report**）的报告，该报告关注欧洲竞争力，他详细阐述了欧洲在AI等领域因过度监管而自我束缚的方式。所以他们正在尝试撤销，或者做出姿态，我们拭目以待会发生什么。

<details>
<summary>Original English</summary>

**Marc Andreessen**: By the way, you know, I I you know, when I talk about Europe, I I tend to be very dark about the whole thing. I will tell you the darkest people I know about Europe are the European entrepreneurs who moved to the US. Are just like absolutely furious about what's happening in in in Europe on this stuff. Um, but but even there, like it it's it's so bad in Europe, like they they shot themselves in the foot so badly that there's actually a process now at the at the **EU** to try to unwind that. They're trying to unwind the **GDPR**. So u anyway for people tracking Europe **Mario Draghi** is the former I guess prime minister of Italy did this thing about a year ago called the **Draghi Report** which is the report on European competitiveness and he kind of outlined kind of in great detail all the ways that Europe was holding itself back and part of it was overregulation areas like AI. So so they're trying to reverse out of that or making gestures you know we'll we'll see what happens.

</details>

**Marc Andreessen**: 在这一切之中，**加州**莫名其妙地决定基本上复制**欧盟AI法案**，并试图将其应用于**加州**。这可能会让你觉得完全疯了。对此我会说，是的，欢迎来到**加州**。这基本上是**萨克拉门托**（**Sacramento**）的一种政治动态，变得有点疯狂。它会彻底扼杀**加州**的AI发展。不幸的是，我们的州长在最后一刻否决了它。它确实通过了两院立法，但他却在最后一刻否决了。**Jen**，正如你所说，它会做很多毁灭性的坏事。但其中一件事是，它会给开源开发者带来下游责任。所以，我们谈到了中国的开源项目。现在你会有美国公司拥有开源AI。顺便说一句，你还会有美国学者和独立人士在业余时间开发开源项目。这是所有这些技术传播的关键方式。所以这项法律会把开源的任何滥用行为的下游责任归咎于开源的原始开发者。所以，你是一个独立开发者，或者你是一个学者，或者你是一个初创公司，你开发并发布了一个AI模型，你发布的那天它运行得很好，很棒。但五年后，它被内置到一个核电站中，然后核电站发生了熔毁，然后有人说：“哦，这是AI的错。”那么，核熔毁或任何其他实际的现实世界事件的法律责任，将在未来几年内被追溯到那个开源开发者身上。

<details>
<summary>Original English</summary>

**Marc Andreessen**: It in the middle of all that, **California** sort of inexplicably decided to basically copycat the **EU AI act** and try to apply it to **California**. Which might strike you as completely insane. To which I would say yes, welcome to **California**. And you know, it was this basically this like **Sacramento** political dynamic that kind of got got crazy. It would have you know completely killed AI development in **California**. Unfortunately our governor vetoed it at the last minute. It did pass both houses legislature that he vetoed at the last minute. It to **Jen** to your point it would have done for it would have done a whole bunch of things that were ruinously bad. But one of the things it would have done is it would have assigned downstream liability to open source developers. And so you know we talked about you know this Chinese open source thing. Okay so you got Chinese out there with open source. Now you're gonna have American companies that have open source AI. And by the way you're also going to have American academics and just like independent people in their nights and weekends developing open source. You know which is a key way that all this technology proliferates and and so this this law would have assigned downstream liability to any misuse of open source to the original developer of the open source and so you know you're an independent developer or you're an academic or you're a startup you develop and release an AI model the AI model works fine the day you release it it's great but like 5 years later it gets built into a nuclear power plant and then there's a meltdown of the nuclear power plant and then somebody says oh it's the fault of the AI the the the the legal liability for that nuclear meltdown or for anything any other practical real world thing that would follow in the out years would then be assigned back to that open source developer.

</details>

**Marc Andreessen**: 当然，这完全是疯了。它会彻底扼杀开源。它会彻底扼杀从事开源的初创公司。它会彻底扼杀学术研究，完全扼杀这个领域的一切。所以，这就是这些州级政客们沉迷于玩火的程度。就像我说的，我认为好消息是联邦政府理解这一点。我怀疑这个问题会得到解决，但它确实需要解决，因为，你知道，作为一个国家，让各州这样自杀式地运作是毫无意义的。所以这就是我们正在做的。我们谈论这个，我们称之为我们的“小科技议程”。我们非常专注于创新者的自由和初创公司的创新。我们不试图争论许多其他问题。我们以完全两党合作的方式运作。我们在两党都得到了广泛的支持。所以，这是一项真正的两党合作努力，非常注重政策，而且我认为非常符合国家的整体利益。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Of course, this is completely insane. It would completely kill open source. It would completely kill startups doing open source. It would completely kill academic research like in its entirety. You know, anything in the field. And so, you know, that like that's the level of playing with fire. You know, kind of that these state level politicians have become enamored with. Like I said, I think the good news is the feds understand this. I suspect that this is going to get resolved, but it but it does need to get resolved because, you know, just as a country, it just doesn't make any sense to let let the states kind of operate suicidally like this. And so that's what we're doing. You know, we we talk about this, we call this our little tech agenda. We're extremely focused on on on the freedom and starters innovate. We are not trying to argue, you know, many many other issues. We operate in a completely bipartisan fashion. We have extensive support, you know, on both sides of the aisle and for both sides of the aisle. So it's it's a truly bipartisan effort. Very policy based and you know I think very much aligned with the interests of the country broadly.

</details>

**Marc Andreessen**: 这就是我们正在做的。然后我们得到的另一个问题，在某些情况下来自**LP**，但在很多情况下实际上来自员工，是“为什么是我们？”对吧？对于任何这样的政策问题，总会有一个集体行动问题，就像“公地悲剧”一样，理论上，每个风险投资公司，每个科技公司都应该对这些事情发表意见，但实际上，大多数公司根本不这样做。所以，在某个时候，这些事情就落到了某个人的肩上，去为这些事情而战。**Ben**和我们基本上得出结论，这里的风险太高了。你知道，如果我们要成为行业领导者，我们就必须为自己的命运负责。无论好坏，我认为这是作为该领域领导者所付出的代价。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And so that is what we're doing and then and then the other question we get we we get actually you know in some cases from **LP** but in a lot of cases actually from employees is like okay why us right like you know you know with with any sort of you know policy question like this there's always this collective action question which is just like you know tragedy of the commons which is in theory like everybody every venture firm every tech company whatever should be weighing in on these things in practice what happens is mo most them just simply don't. And so at some point it falls on somebody's shoulders to fight these things. And we we we **Ben** and I just basically concluded that the stakes here were just way too high. You know, if if we're going to be the industry leader, we just have to take responsibility for our own destiny. You know, for better or for worse, I think that's the cost of doing business for being the leader in the field right now.

</details>

### AI定价模式：按使用量付费 vs. 按价值付费

**主持人**: 在我们离开AI这个话题之前，我想回到一个提交的问题。你认为按使用量付费或按效用付费是AI定价的正确方式，而不是按席位付费吗？

<details>
<summary>Original English</summary>

**主持人**: Before we get off the topic of of AI, I want to go back to one question that that was submitted in. So, do you think usage based or utility is a right way to price an AI compared to seeds?

</details>

**Marc Andreessen**: 啊，这是一个很棒的问题。这是我所说的“万亿美元问题”之一，它的答案将决定数万亿美元的市场价值。所以，是的，按使用量付费的定价模式，如果你从初创公司和风险投资的角度来看，实际上是相当惊人的。我不太想在公开场合谈论这个，因为我不想它停止。我认为它实际上非常惊人。这些科技公司，这些大型科技公司，拥有令人难以置信的研发能力，正在构建这些大型模型，这些大型AI模型，具有这种令人难以置信的、全新的智能。然后事实证明，它们已经处于一场战争之中。它们已经处于云战争之中，对吧？所以它们已经处于争夺云服务的战争之中。这就像**AWS**对**Azure**对**Google Cloud**。然后还有所有其他云服务。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Ah that is a fantastic question. So this is one of these giant this is in my my list of what I call the trillion dollar questions where you know depending on how this is answered will drive you know trillions of dollars of market value. So yeah so usage based pricing it's it's actually it's actually fairly amazing if you think about this from a startup standpoint from a venture standpoint it's actually fairly amazing what's happened and I'm trying I'm not really talking about this in public because I don't really I because I don't want it to stop. I think it's actually quite amazing. Which is you have these technology companies, you know, these big tech companies with these like incredible R&D capabilities that are building these big models, these big AI models with this incredible, you know, new new kind of new new kind of intelligence. And then it it turns out that they were already in a war. They were already in the cloud war, right? And so they were already in the war for kind of cloud services. And this is like **AWS** versus **Azure** versus **Google Cloud**. And then all the all these other all these other cloud efforts.

</details>

**Marc Andreessen**: 实际上发生的是，他们有点像，在一个平行宇宙中，他们基本上把所有的神奇AI都保密并独占，只用于自己的业务，或者只用于与更多公司在更多类别中竞争。但相反，他们所做的是，他们基本上，如果我说“商品化”这个词太强硬了，但他们通过他们的云业务普及了他们神奇的新技术，这个业务具有令人难以置信的规模组成部分。而且这种提供商之间的超竞争，以及这些价格下降得非常快。所以，你拥有世界上最神奇的新技术，然后这些公司基本上以云业务的形式提供它，并使其基本上可供地球上的每个人点击使用，而且价格相对较低，并且是按使用量付费的。按使用量付费对初创公司来说非常棒，因为这意味着你可以轻松起步，对吧？对于构建AI应用程序的初创公司来说，基本上没有固定成本，因为他们可以直接利用**OpenAI**、**Anthropic**、**Google**或**Microsoft**等云服务提供的按量付费的智能**tokens**，然后就可以开始。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And so what what what what actually happened was they sort of like there's an alternate universe in which they basically just kept all of their magic AI secret and captive and just used it in their own business or used it to just compete with more companies in more in more categories but instead what they've done is they've basically you know if I commod commoditize is too strong a word but they they have they have proliferated their magic new technology through their cloud business which is which is this business that just has these like incredible scale you know kind of kind of components to But you know and sort of this hyper competition between the providers and these you know these these prices that that come down very fast. And so you've got like the most magic new technology in the world and then it's basically being served up by those companies in in in a as a cloud business and made made basically available to everybody on the planet to just click and use and for like relatively small amounts of money and then on on a usage basis which means and usage is great for startups because you it means you can start easily right you the the the you know there's very you know there's basically no fixed co for a startup building an AI app they don't have giant fixed cost because they could just tap into the **OpenAI** or **Anthropic** or **Google** or **Microsoft** or whatever you know cloud you know tokens by the you know, intelligence tokens by the drink offering and just get going.

</details>

**Marc Andreessen**: 所以，从初创公司的角度来看，这就像一个奇妙的事情，世界上最神奇的东西可以按量付费获得。这绝对是惊人的。而且，你知道，这种模式正在奏效，这些公司很高兴，它们增长得非常快，它们很高兴地报告了巨大的云收入增长，而且，你知道，它们对利润率等也很满意。所以，我认为总的来说它正在奏效。而且这些业务，我认为很可能会变得更大。所以，我认为总的来说这会奏效，但回到问题，这并不意味着所有应用程序的最佳定价模式都应该是按量付费的**tokens**，事实上，我认为情况并非如此。我们花了很多时间来研究定价，我们公司有专门的定价专家。我们花了很多时间与我们的公司合作研究定价，因为它确实是一门神奇的艺术和科学，很多公司没有足够认真地对待。所以我们花了很多时间与我们的公司合作。当然，定价的一个核心原则是，如果可以避免，你就不想按成本定价。你想按价值定价，对吧？你想要定价，你定价时要获得业务价值的百分比，尤其是当你向企业销售时，你希望按你获得的业务价值的百分比定价。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And so it's it's kind of this this this from this from the startup standpoint, it's like this marvelous thing where like the most magical thing in the world is available by the drink. You know, it's absolutely amazing. I, you know, and, you know, that model, you know, by the way, that model's working and those companies are happy and they're growing really fast and they're, you know, happily reporting massive cloud revenue growth and, you know, they they're happy with the margins and so forth and so, you know, I think generally it's working. And those businesses are, I think, likely to get much larger. And so I think you know generally that's going to work but but to to to the question like that doesn't mean that the optimal pricing model for for example all of the applications should be tokens by the drink and in fact very much I think not the case. We spend a lot of time working we actually have you know dedicated you know experts on on pricing in our firm. We spend a lot of time with our companies working on pricing because it's you know it's really this magical art and science that that a lot of companies don't take don't take seriously enough. So we spend a lot of time with other companies on this. And of course, you know, a core principle of pricing is you don't want to price by cost if you can avoid it. You want to price by value, right? Like you want to price you price where you're getting a percentage of the business value of, you know, especially when you're selling two businesses, you want to price as a percentage of the business value that you're getting.

</details>

**Marc Andreessen**: 所以，确实有一些AI初创公司正在对某些事情按量付费定价，但也有许多其他公司正在探索其他定价模式。例如，一些公司只是复制**SaaS**的定价模式，但也有其他公司正在探索定价模式，例如，如果AI真的可以做程序员的工作，或者AI可以做医生、护士、放射科医生、律师或律师助理的工作，或者老师的工作。基本上，你是否可以按价值定价，并获得原本需要一个人来完成的工作的价值百分比？或者，顺便说一句，等效地，你是否可以按边际生产力定价？所以，如果你能通过给人类医生提供AI，使他们更具生产力，你是否可以按生产力提升的百分比定价，从人类与AI之间的增强共生关系中获得收益。所以，我认为我们在初创公司领域看到的是，在这些定价模式上正在进行大量的实验。我再次认为这非常健康。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And so so you do have some AI startups that are that are pricing by the drink for certain things that they're doing, but you have many others that are exploring other pricing models. You know some that are just like replications of **SAS** pricing models but you also have other companies are explor exploring pricing models for example of well if the AI can actually do the job of a coder or the AI could do the job of a doctor or a nurse or a radiologist or a lawyer or a parallegal right or whatever or a teacher. You know basically can you can could can you price by value and can you get a percentage of the value of what of what of of of what otherwise would would would have been you know would have been literally a person. Or or by the way equivalently can you price by marginal productivity. So if you can take a human doctor and make them much more productive because you give them AI, you know, can you price as a percentage of kind of the productivity uplift, you know, from the from from the from the augment, you know, the comb symbiotic relationship between the the human being and and the AI. And so I I think what we see in startup land is like a lot of experimentation happening on on these pricing models. And I and I and I think again I I think that's like super healthy.

</details>

**Marc Andreessen**: 我曾就此发表过一个小演讲，我说高价格真的被低估了。高价格往往是客户的最爱。这实际上很有趣。很多关于定价的幼稚观点是，价格越低，对客户越好。更复杂的看法是，高价格往往对客户有利，因为高价格意味着供应商可以更快地改进产品，对吧？拥有更高价格、更高利润的公司实际上可以投入更多的研发，并且可以真正改进产品。大多数购买东西的人不仅仅追求最便宜的价格。他们想要真正好用的东西。所以，通常高价格，客户永远不会这么说，也不会出现在调查中。但高价格实际上可能是给客户的一份礼物，因为它可以让供应商变得更好，让产品变得更好，最终让客户受益。所以，我非常高兴AI企业家愿意进行这些实验。我们拭目以待结果如何。但至少到目前为止，我对这个行业的态度感到满意。

<details>
<summary>Original English</summary>

**Marc Andreessen**: I I you know, I was in this little speech on this is like high prices are really underappreciated. High prices are often a favorite of the customer. It's actually really funny. A lot of like the naive view on pricing is the lower the price, the better it is for the customer. The the more sophisticated looking at it is higher prices are often good for the customer because a higher price means that the vendor can make the product better faster, right? Like you can actually companies with higher prices, higher margins can actually invest more in R&D and they can actually make the product better. And you know most people who buy things aren't just looking for the cheapest price. They want something that's really that's going to work really well. And so often high prices, you know, the customer doesn't ever say this. It'll never show up in a survey. But but the high price can actually be a gift for the customer because it can make the vendor better, can make the product better, and ultimately make the customer better off. And so I I'm I'm very encouraged by the degree to which the AI entrepreneurs are willing to run these experiments. And I, you know, we'll have to see where it pans out. But at least so far, I feel I feel good about the the uh, you know, at least the attitude of the industry about it.

</details>

### 开源与闭源之争

**主持人**: 太棒了。实际上，当你刚才讲的时候，我可能还有10个后续问题，但我现在要回到你之前简要提到的一个话题，那就是万亿美元的问题。开源还是闭源会赢？感觉我们已经在这个辩论中有了结果，或者你对此有何看法？

<details>
<summary>Original English</summary>

**主持人**: Awesome. I actually I was, as you were gone through, I had probably 10 more follow-up questions, but I'm actually going to go back to a topic you had briefly, the trillion dollar questions. Will open source or close source win? Feels like we we've come out on this this debate or where do you where do you put that?

</details>

**Marc Andreessen**: 不，我认为这仍然是一个开放的问题。我认为这仍然非常开放。闭源模型不断变得更好。顺便说一句，如果你大致了解那些在大实验室里从事大型专有模型工作的人，他们通常会告诉你，进展正在以非常快的速度持续进行。你知道，网上或市场上会周期性地出现这种担忧，比如这些模型的能力可能已经达到顶峰。在某些领域，人们正在努力，但大实验室里的人会说：“不，我们有800个新想法，我们有大量新想法，我们有大量新的做事方式。我们可能需要找到新的扩展方式，但我们有很多关于如何做到这一点的想法。我们知道很多方法可以使这些东西变得更好，而且我们基本上一直在做出新的发现。”所以，我想说，总的来说，所有大实验室里工作的人都非常乐观。所以，我认为大模型将继续非常迅速地变得更好，然后，总的来说，开源模型也继续变得更好。就像我说的，你知道，每个月左右，就会有另一个像**Kimmy**这样的重大发布。

<details>
<summary>Original English</summary>

**Marc Andreessen**: No, I think this is still open. I I think this is still very open. You know that like the the the closed source models keep getting better. By the way if you generally if you just like take the temperature of the people working at the big labs who work on the big proprietary models like generally what they'll tell you is progress is continuing at a very rapid pace. You know there's there's this you know there's this periodic concern that kind of shows up on online which is or in the in the market which is like you know maybe the capabilities these models are topping out and you know there's certain there's there's certain areas in which you know there's there's you know people are working but like the people working at the big labs are like oh no we have like 800 new idea like we have tons of new ideas we have tons of new ways of doing things. We we might need to find new ways to scale but like we we have a lot of ideas on how to do that. We know a lot of ways to make these things better and you know we're basically making new discoveries all the time. So like I would say you know generally the people working in the like across all the big labs are are pretty optimistic. And so like I I think the big models are going to continue to get better you know very quickly here and then you know overall and then the open source models continue to get better. And like I said you know you know every every every I don't know every month or something there's like another big release of like something like this **Kimmy** thing.

</details>

**Marc Andreessen**: 就像“哇，这太棒了！”而且，“哇，他们真的把它缩小了，并在一个非常小的外形尺寸上实现了这种能力。”所以，是的，情况就是这样。然后，我想提出的第三点是，开源的另一个真正好的好处是，开源是容易学习的东西，对吧？所以，如果你是一名计算机科学教授，想教授AI课程，或者你是一名计算机科学学生，正在努力学习它，或者你只是一个普通公司的普通工程师，正在尝试学习这个新东西，或者只是一个在晚上在地下室里有创业想法的人。这些最先进的开源模型的存在是惊人的，因为这就是你所需要的教育。这些开源模型实际上向你展示了如何做一切。所以，这正在导致关于如何构建AI的知识传播得非常快。再次，与一个所有知识都被两三家大公司垄断的反事实世界相比。所以，开源也在传播知识，然后这些知识正在产生大量新人才。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Where it's just like wow like you know that's amazing and you know wow they really like shrunk that down and got that capability on a very small form factor. And so um yeah that's the case and then you know I maybe just the third kind of thing to bring up is the other really nice benefit of open source is that open source is the thing that's easy to learn from right and so if you're a you know computer sc if you're a computer science professor who wants to teach a class on on **CS** on AI or if you're a computer science student that's trying to learn about it or if you're just like a normal engineer in a normal company trying to learn this new thing or just somebody in your you know by the way somebody in basement at night with a startup idea. The existence of these of these state-of-the-art open source models is amazing because that's the education that you need. Like they actually these open source models actually show you how to do everything. Right. And so like and and what that's leading to right is the proliferation of the knowledge about how to build AI is like expanding very fast. Again as compared to a counterfactual world in which it was all basically bottled up in two or three big companies. And so, you know, the open source thing is also just proliferating knowledge and then that knowledge is generating a lot of new people.

</details>

**Marc Andreessen**: 正如大家今天所看到的，AI研究人员的需求量巨大。AI研究人员现在的薪水比职业运动员还高。对吧？这是一种供需失衡。没有足够的人才。但是，你知道，再次，短缺会创造过剩。世界上有多少聪明人正在非常迅速地掌握如何构建这些东西？我的意思是，世界上一些最优秀的AI人才只有22、23、24岁。他们，你知道，从定义上讲，他们在这个领域的时间不长。他们不可能一生都是专家，对吧？所以，他们必须在过去四五年里迅速掌握技能。如果他们能够做到这一点，那么未来会有更多的人能够做到这一点。所以，这项技术专业知识的传播正在非常迅速地发生。所以，是的，我的意思是，我认为这仍然是一场竞赛。顺便说一句，长期的答案很可能就是两者兼而有之。就像我说的，如果你相信我的金字塔行业结构，那么肯定会有一个大型业务，无论它成本多高，它都是最智能的东西。然后，也会有这种巨大的、无处不在的小模型市场，这也是我们正在看到的。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And so I I you know, you know, as you guys have all seen sitting here today, AI researchers are at an enormous premium. You know, AI researchers today are getting paid more than professional athletes. Right? Like, you know, and that's right, that's a supply demand imbalance there. There aren't enough of them to go around. But, you know, again, shortages create glut. The the number of the number of smart people in the world who are coming up to speed very quickly on how to build these things u I mean some of the best AI people in the world are like 22 23 24 like they you know kind of by definition they haven't been in the field that long you know you know they they can't have been experts their whole lives right so you know they they kind of have to have come up to speed over the course of the last four or five years and and if if they if they've been able to do that then then there's going to be a lot more in the future that are going to do that and so just the the the sort of spread of the level of expertise on this technology is happening now very quickly Um, so I yeah, I mean I think it's still like I said, I think it's I think it's still a race. And and by the way, you know, look, the long-term answer may well just be both. You know, like I said, if you if you believe my pyramid industry structure, then there will then there will certainly be a large business of whatever is the smartest thing almost regardless of how of how much it costs. And then there but there will also be this just giant volume market of of smaller models everywhere, which which is what we're also seeing.

</details>

### 现有巨头与初创公司之争

**主持人**: 是的。是的。你当时提出的另一个问题是，现有巨头和初创公司谁会赢？当时我认为现有巨头对待AI的态度是喜忧参半的。我认为在过去两年里，这种情况已经发生了根本性的变化。然后，另一方面，初创公司的蓬勃发展，现在可能正日益融入现有巨头类别，因为它们自那时以来发展得如此之大。你愿意回答这个问题，并对当前世界状况给出你的评估吗？

<details>
<summary>Original English</summary>

**主持人**: Yep. Yep. The another question you had posed at at that point in time was will incumbents versus startups went and at that point in time I think there was a mixed bag of where the incumbents were approaching AI. I think that's radically changed in the last two years. And then on the counter example the the blossoming of startups increasingly now maybe migrating into the incumbent category just how big they since that time. You you want to take that question and and give your assessment of where where the state of the world is?

</details>

**Marc Andreessen**: 是的。是的。我的意思是，你看，大型公司肯定都在努力。**Google**在努力。**Meta**在努力。**亚马逊**（**Amazon**）、**微软**（**Microsoft**），有很多这样的公司都在非常积极地参与其中。然后你还有我们称之为新巨头的公司，比如**Anthropic**和**OpenAI**。但你也看到，即使在过去两年里，突然之间也诞生了许多几乎是即时巨头的新公司。你可以说**XAI**就是其中之一。顺便说一句，**Mistral AI**（**ML**）是我之前提到的欧洲情况的一个巨大例外。**Mistral AI**作为欧洲的，你知道，法国国家级、欧洲大陆的AI冠军，实际上做得非常好，可以说是证明规则的例外。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Yeah. Yeah. So, I mean, look, you know, big companies that are definitely, you know, playing hard. You know, **Google's** playing hard. **Meta's** playing hard. **Amazon**, **Microsoft**, you know, there's a bunch of these companies that are, you know, that are kind of in in in there, you know, very aggressively. And then you've got these, you know, what we call the new incumbents like **Anthropic** and and, **OpenAI**. But you also have like, you know, even in the last two years, you've had this birth of all of a sudden like brand new companies that are almost instant incumbents. And you, you could say **XAI** is one of those. **ML**, by the way, **ML** is the great outlier to my Europe thing from earlier. Like **Mald** is actually doing very well as sort of the European kind of uh you know French national European continental you know kind of AI champion sort of the you know the exception that proves the rule.

</details>

**Marc Andreessen**: 但现在有很多这样的公司做得非常好，并且正在成为新的巨头。当然，还有大量的初创公司。顺便说一句，还有实际的基础模型初创公司。所以，我们资助了来自**OpenAI**的**Ilas**来做一家新的基础模型公司，我们资助了同样来自**OpenAI**的**Miriam Maratti**，我们资助了来自**斯坦福大学**的**Faith Ali**来做一家世界级的基础模型公司。所以，有很多新的尝试，所有这些都处于早期阶段，但非常有前景，旨在迅速建立新的巨头。所以，这一切都在发生。然后，在此之上，AI应用公司也出现了巨大的爆炸式增长。所以，基本上有一些公司，通常是初创公司，它们利用这项技术，然后将其应用于特定领域，无论是法律、医学、教育、创意，还是其他任何领域。但再次，这里令人惊叹的是，事情正在非常迅速地变得如此复杂。

<details>
<summary>Original English</summary>

**Marc Andreessen**: But you know there's there's a bunch of these now that are like you know doing quite well and are kind of becoming new incumbents and then of course there's tons of startups by the way there's and then there's there's actual foundation model startups right and so you know we funded **Ilas** out of **OpenAI** to do a new foundation model company we funded **Miriam Maratti** also out of **OpenAI** we funded **Faith Ali** out of **Stanford** to do a world foundation model company and so you know there you know there's there are new swings all all you know all early but very promising for to kind of build you know new incumbents quickly and so you know that's all happening and then and then you know what and then on top of that there's just this giant explosion of AI application companies right and so there there's basically companies that then usually startups that basically take the technology and then you know field it in a specific domain whether that's law or medicine or education or you know creativity or or or or whatever Um but again here it's just like it's amazing kind of how how sophisticated things are getting very quickly.

</details>

**Marc Andreessen**: 谈谈应用公司。一个典型的应用公司例子是**Cursor**。他们获取核心AI能力，以按量付费的方式从**Anthropic**、**OpenAI**或**Google**购买**tokens**，然后他们构建一个代码编辑器，我们以前称之为**IDE**（集成开发环境），或者基本上是一个软件创建系统。所以他们基于**Anthropic**、**OpenAI**或任何大型模型构建了一个AI编码系统。行业内对这些公司的批评是，它们是所谓的“**GPT**包装器”，这是一种贬义词。其基本思想是，它们实际上并没有做任何能保留价值的事情，因为它们所做的一切的重点是展示AI，但那不是它们的AI。所展示的AI来自其他人。所以这些都是一些最终不会有价值的“传递性外壳”。

<details>
<summary>Original English</summary>

**Marc Andreessen**: So talk about the application companies for a moment. So like an application company like classic example is like a **Cursor** is like an application company. So they take the core AI capability which they purchase by the drink from you know **Anthropic** or **OpenAI** or **Google** you know to tokens by the drink and then they they they build a code basically a code editor what we used to call an **IDE** integrated development environment or basically like a a software creation system so they build like an AI coding system on on top of the **Anthropic** or **OpenAI** or whatever you know kind of kind of big models feel that and that the the critique of those companies in the industry has been oh those are what are called called **GPT** rappers is kind of the pjorative And the idea basically being is well they're not actually like they're not actually doing anything that's going to preserve value because the the actual the the whole point of what they're doing is they're surfacing AI but it's not their AI. The the AI that's being surfaced is from somebody else. And so these are kind of these pass pass through shell things that ultimately won't have value.

</details>

**Marc Andreessen**: 实际上，正在发生的事情恰恰相反，领先的AI应用公司，比如**Cursor**，首先它们发现它们不仅仅使用一个AI模型。随着这些产品变得越来越复杂，它们实际上最终会使用许多不同类型的模型，这些模型都是根据这些产品特定方面的工作方式量身定制的。所以它们可能一开始只使用一个模型，但最终会使用十几个模型，随着时间的推移，可能会有50到100个不同的模型用于产品的不同方面。其次，它们最终会构建很多自己的模型。所以，很多领先的应用公司实际上正在进行**逆向整合**，并实际构建自己的AI模型，因为它们对自己的领域有最深入的理解，并且能够构建最适合该领域的模型。顺便说一句，它们还可以利用AI开源，它们还可以获取并运行开源模型。所以，如果它们不喜欢从云服务提供商那里按量购买智能的经济模式，它们可以获取这些开源模型并实施，这些公司也在这样做。所以，最好的AI应用公司实际上是全面的深度科技公司，它们实际构建自己的AI。所以，我认为这……

<details>
<summary>Original English</summary>

**Marc Andreessen**: It actually turns out what's happening is kind of the opposite of that which is the the leading AI application companies like **Cursor** I mean f first of all what they're discovering is they they're not just using a single AI model. They're actually they actually as these products get more sophisticated they actually end up using many different kinds of models that are kind of customtailored to the specific aspects of how these products work. And so they may start out using one model but they end up using a dozen models and then in the fullness of time it might be 50 or 100 different models for different aspects of the product. And then B they end up building a lot of their own models. And so they they a lot of these the leading edge application companies are actually backward integrating and actually building their own AI models because because they have the deepest understanding of their domain. And they're able to build the model that's best suited to that. And then by the way, also AI open source, they're also able to pick up and run an open source models. And so if they don't like the economics of of buying intelligence, you know, by the drink from a from a from a cloud service provider, you know, they can pick up one of these open source models and implement it instead, which, you know, which these companies are also doing. And so the the best of the best of the AI application companies are they are actually full-fledged deep technology companies actually building their own AI. And so that you know that's I think

</details>

**主持人**: 那么是小模型，对吧，**Mark**？当你谈论“**上帝模型**”和小型模型时，你刚才描述的这些是小型模型吗？你会将其归类为小型模型吗？

<details>
<summary>Original English</summary>

**主持人**: small models though right **Mark** when you think about **god models** versus small models as you were describing that but that would be small would you categorize that as a small

</details>

**Marc Andreessen**: 嗯，其中一些，我的意思是，我会让他们在适当的时候宣布他们在做什么，但其中一些现在也在开发大型模型。这又是过去两年学习的一部分。所以，这是过去两年一个非常有趣的重大发现：两三年前，你肯定会说“哇，**OpenAI**遥遥领先”，而且“其他人可能不可能追赶上”。然后，**Anthropic**追赶上来了，但他们来自**OpenAI**，所以他们掌握了所有秘密，所以他们知道如何做到。所以，好吧，他们追赶上来了，但肯定没有人能再追赶上他们了。然后很快之后，又有一批其他公司迅速追赶上来，**XAI**也许是最好的例子。**XAI**，**Elon**的公司，**XAI**是公司名称，**Grok**是它的消费产品版本。**XAI**基本上在不到12个月内，从零开始，追赶到了**OpenAI**和**Anthropic**的最新水平。所以，这再次反驳了任何一家现有巨头将永久领先并能够锁定整个市场的观点，如果你能这样追赶上来。然后，正如我们讨论过的，中国的部分是去年才出现的，对吧？**DeepSeek**的时刻我认为是今年的一月或二月，对吧？所以不到12个月前。现在你有了四家中国公司，它们实际上已经追赶上来了。所以，这就像，“好吧，我的意思是，再次，这些都是万亿美元的问题，而不是答案。”但这就像，“哇，好吧，一旦有人证明它有能力，其他人似乎就不那么难追赶上，即使是资源少得多的人。”

<details>
<summary>Original English</summary>

**Marc Andreessen**: well some of them I mean we I will let them I will let them announce you know whatever they're doing whenever it's appropriate but some of them are now also doing big model development and again this this is also part of what this is also part of the learning just in the last two years well so like here's a big learning just from the last two years which is very interesting which is two years ago or three years ago for sure you would have said wow **OpenAI** is like way out ahead and like it's probably going to be impossible for anybody to catch up and then it's like okay well **Anthropic** caught up and so but you know they came out of **OpenAI** and so they had all the secrets you know whatever and so knew how to do it and so okay they caught up but surely nobody can catch up after them and then very quickly after that there were a raft of other companies that caught up very fast and and **XAI** is maybe the best example of that which is like you know **XAI** you know **Elon's** company **XAI** is the company name **Grok** is the consumer product version of it **XAI** basically caught up to you know state-of-the-art **OpenAI** **Anthropic** level in in like less than 12 months from a standing start right and So, and again that that kind of argues against any kind of permanent lead, right, by by any one incumbent that's just going to basically be able to lock the entire market down like if you can catch up like that. And then and then as we as we've discussed the you know the China part is all new in the last year, right? The **DeepSeek** this the **DeepSeek** moment I think was in January or February of this year, right? So less than 12 months ago. And so and now you've got like four Chinese companies that have effectively caught up. And so, you know, so it's like, all right, I mean, again, this is these are these are trillion dollar questions, not answers. But it's just like, wow, okay, like it's one of these things where once somebody proves that it's capable, it seems to not be that hard for other people to be able to catch up, even people with far less resources.

</details>

**Marc Andreessen**: 所以，我不知道这会带来什么。也许从长远来看，它会让你对大玩家的经济效益略微持怀疑态度。另一方面，也许它会让你对初创公司生态系统更加看好。当然，它应该让你对初创应用公司更有信心，对吧？能够做有趣的事情，这就是我们如此兴奋的原因。它应该让你对中国更加兴奋。另一方面，中国的竞争给美国系统带来了压力，使其不要搞砸，这是非常积极的。所以，它应该让你对美国更加看好。所以，是的，我认为这些都是动态的，我认为我们还需要更多时间才能知道确切答案。我应该说，有时候我这么说会吓到一些人，因为我有时会说这些是开放的问题。当一家公司面临根本性的开放战略或经济问题时，这通常是一个大问题，因为公司需要有一个战略，而且战略需要非常具体。公司必须做出非常具体的、具体的选择，关于它将投资美元和人员部署在哪里，而且战略必须是逻辑和连贯的，否则公司就会陷入混乱。所以，公司需要回答这些问题，如果它们答错了，它们就真的有麻烦了。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And so, you know, I don't know what that does. Maybe it makes you slightly more skeptical in the long run economics of of the big players. On the other hand, maybe it makes you like more bullish about the startup ecosystem. It certainly should make you more bullish about startup application companies, right? Being able to do interesting things, which is why we're so excited about that. You know, it should make you probably, you know, a bit more excited about about certainly about China. On the other hand, the Chinese competition putting pressure on the American system to not screw itself up is very positive. So, it should probably make you a little bit more bullish on the US. And so, yeah, I think, you know, the these are, yeah, these are are live dynamics and I I think we still need more time to pass before we know the exact answer. I should say this, but sometime because sometimes I don't sometimes I freak people out when I say these are open questions. When a company is confronted with fundamentally open strategic or economic questions, it's often a big problem because a company needs to have a strategy and the strategy needs to be very specific. And a company has to make like very specific concrete choices about where it like deploys investment dollars and personnel and like the strategy has to be like logical and coherent or the company kind of collapses into chaos. And so like companies like need to answer these questions and if they get the answers wrong, they're really in trouble.

</details>

**Marc Andreessen**: 风险投资，我们有我们的问题，但在风险投资中我们有一个巨大的优势，那就是我们不必，我们可以同时押注多种策略，对吧？我们正在这样做，所以我们押注大模型和小模型，预训练模型和开源模型，对吧？以及基础模型和应用程序，对吧？以及消费者和企业。所以，投资组合方法，它的本质是，我们正在积极地，基本上，我们正在积极地投资于我们认为有合理成功机会的每一种策略，即使这与我们正在投资的另一种策略是矛盾的。一方面，世界是混乱的，可能很多事情都会奏效，所以很多问题的答案不会是简单的“是”或“否”，很多答案我认为只会是“和”。但另一方面，如果其中一种策略不起作用，我们并不是为了对冲，但我们会在投资组合中拥有替代策略的代表，所以我们会以多种方式获胜。所以，无论如何，这就是目标。这就是我们在这个领域采取这种方法的原因。这就是为什么当我谈论这些重大的开放问题时，我脸上带着大大的笑容，因为我认为这实际上对我们有利。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Venture, We have our issues and venture but a huge advantage that we have is we don't have to we we can bet on multiple strategies at the same time right and and we are doing this so we are betting on big models and small models and prepared train models and open source models right and and you know and foundation models and applications right and consumer and enterprise and so the portfolio approach the nature of it is like we we are aggressively basically we we are aggressively investing behind every strategy that we've identified that we think has a plausible chance of even when that even when that's contradictory to another strategy that we're investing in and one is just like the world's messy and probably a bunch of things are going to work and so like there's not going to be clean yes or no answers to a bunch of this like a lot a lot of the answers to this I think are just going to be and answers but the other is like if one of these strategies doesn't work like you know we're not we're not trying to hedge per se but you know we're going to have representation in the portfolio of the alternate strategy and and so we're going to have mult multiple ways to win. So anyway, that's that's the goal. That's the theory of why we are, you know, kind of taking the approach in the space that we're taking. And that's why I have a big smile on my face when I say that there are these big open questions because I think that actually works to our advantage.

</details>

### **A16Z**的合作与策略

**主持人**: 这是一个很好的过渡，可以引出**A16Z**的问题，因为我们已经收到了一些问题，而且我们之前也收到了一些。所以，我将从一个宽泛的话题开始。你和**Ben**在什么问题上意见不合但仍会执行？

<details>
<summary>Original English</summary>

**主持人**: It's a good seg to **A16Z** questions because we we've gotten a few in so far and and we had a few that were were sent in ahead as well. So I'll start one with a with a broad topic. What is something you and **Ben** disagree and commit on?

</details>

**Marc Andreessen**: 意见不合但仍会执行。嗯，我们意见一致。我的意思是，**Ben**和我，我本来想说我们是老夫老妻了，所以我们经常争吵，但我们已经……

<details>
<summary>Original English</summary>

**Marc Andreessen**: disagree commit. Um, you know, we agree. I mean, we we **Ben** I was going to say, you know, we're an old married couple, so we argue argue constantly, but we've been

</details>

**主持人**: 爱情已死。

<details>
<summary>Original English</summary>

**主持人**: where the romance is dead.

</details>

**Marc Andreessen**: 爱情早已消逝。是的，是的，是的。火花早已熄灭。但是，嗯，是的，如果你，是的。我们一直在公园里争吵。所以，嗯，是的，我的意思是，你看，我们辩论一切。我们争论一切。话虽如此，我们的合作之所以成功，其中一个原因是我们确实倾向于得出相同的结论，我们每个人都愿意被对方说服，所以我们最终大多数时候都会得出相同的结论。所以我想说，就目前而言，没有，我特别要说，没有零个问题是我坐在这里，然后我想：“我简直不敢相信，我竟然在忍受他正在做的这个疯狂的事情，我真的不同意，但我感觉我必须承诺。”或者，我认为反之亦然。所以我们没有这样的问题。

<details>
<summary>Original English</summary>

**Marc Andreessen**: The romance is long dead. Yes. Yes. Yes. Yes. The light the fire the fire has long since gone out. Um, but um uh yes, if you Yes. We're in the park squabbling all the time. Um so, um yeah, I mean, so look, we debate everything. We we argue about everything. We that that said like you know one of the things that's made our partnership work is like we do we do tend to come to the same conclusion like each of us is open to being persuaded by the other one and so we we end up coming you know we end up coming to the same conclusion most of the time. So I would say there there aren't like a there aren't I said specifically sitting here today there are like zero issues where I'm sitting here and I'm like I can't believe you know I just I can't believe I'm you know I'm putting up with this crazy thing on on his on his part that he's doing that I really disagree with but I feel like I have to commit to or I I don't think vice versa. So we don't have any of those.

</details>

**Marc Andreessen**: 嗯，老实说，我和他讨论的最大事情，顺便说一句，这不是我们正在做的最重要的事情，但既然有人问了这个问题，这是我和他讨论的最大事情，我不知道，也许我总是在自我怀疑，或者我从来不知道我该如何看待它，我和他经常讨论的就是公司的公共形象。所以，我们的存在，我们在世界上的存在，就公开声明、争议、我们如何表达我们的观点而言。我想说，这里存在一种真正的张力，一种非常重要的张力。一般来说，我们越是公开，越是直言不讳，越是引起争议，对业务就越有利，因为企业家喜欢这样。创始人很清楚，他们希望与那些勇敢、有争议、敢于发表争议性立场并清晰表达观点的人合作。他们希望这样有很多原因。一个是因为这展示了勇气，他们很欣赏。但另一个原因是因为它在我们甚至见到他们之前就让他们了解了我们是谁。这已被证明是一种令人难以置信的竞争优势。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Um, you know, quite honestly, the biggest thing I say the biggest thing that I that he and I the biggest thing that he and I discuss, this this by the way, this is not this is not the most important thing we're doing, but it is a topic since somebody asked the question. The biggest thing he and I discuss where I I don't know, maybe I'm always like second guessing myself or I I I never quite know where I should come out on it that he and I talk about a lot is just like basically the public footprint of the company. Um so like our pres our presence in the our presence in the world in terms of like public statements uh controversy um uh you know uh how we vocalize and express our views on things and I would just say there like you know there's a real there's a tension there's a real it's you know maybe obvious but like a very important tension like generally speaking the more out there we are and the more outspoken we are and the more controversial we are the better for the better for the business in the sense of the entrepreneurs love it. The the the founders want to work with is very clear at this point. The founders want to work with people who basically are brave and controversial and take controversial stands and articulate things clearly and and they want that for a bunch of reasons. One is because it's a demonstration of courage which they appreciate. But the other is because it it it it teaches them who we are before they even meet us. And and and that has just proven to be just like this incredible competitive advantage.

</details>

**Marc Andreessen**: 长期**LP**会知道，这就是我们从一开始就采取非常积极的营销策略的原因，而且它完全奏效了。整个事情就是，如果我们能够传播我们的信息，并且能够非常清楚地表达我们的信念，即使这会引起争议，那么世界上最优秀的创始人会在他们甚至走进门之前就了解我们，对吧？他们会在见到我们之前就认识我们，这与当时风险投资界的其他人不同，他们基本上都保持沉默。创始人根本不知道这些人是谁，他们相信什么。所以，这非常有效。它继续非常有效。顺便说一句，这在整个行业中普遍如此。

<details>
<summary>Original English</summary>

**Marc Andreessen**: You know, long long-term **LPs** will know like this is why we started with a very active marketing strategy from the very beginning and like it completely worked. Like the the whole thing was if we're able to broadcast our message and we're able to basically be very clear in what we believe even to the point where it's controversial, like the best founders in the world are going to understand us before they even walk in the door, right? And they're going to they're going to know us even before they've met us as opposed to everybody else in venture, at least at the time, that was basically just like keeping everything quiet. Where they, you know, the founder just has no idea who these people are and what they believe. And so that that like worked incredibly well. It continues to work incredibly well. By the way it's you know it's generally true across the industry.

</details>

**Marc Andreessen**: 另一方面，公开露面和引起争议在很多方面都会带来外部性。我想说，我们非常努力地在走钢丝。所以，我们不会放弃作为一个积极对外发声的公司的总体定位。我们，你知道，**Eric Worenberg**和他建立的团队，我们过去和你们谈论过，已经蓄势待发。我们正在加倍努力，基本上要成为领导者，阐明重要的技术和商业问题。你知道，人们肯定需要理解的问题。这已被证明非常有效。顺便说一句，我们相当一部分的沟通实际上是针对**华盛顿**的。因为，再次，如果你是**华盛顿**的政策制定者，你坐在3000英里之外，你的所有信息来源都是那些讨厌**硅谷**的东海岸报纸。那很糟糕。所以，我们能够传播，你知道，关于技术的知情观点。我们经常在**华盛顿特区**见到人们，他们说：“是的，我，你知道，关于这个话题，我大部分都是从你们这里学到的，因为我听了播客，我读了文章，我看了**YouTube**频道。”所以，我们还会继续这样做。所以，我们，你知道，总的来说，我们在这方面是积极主动的。但是，是的，他和我在到底应该触及多少“第三轨”话题以及频率上确实有些来回。我想说我们正在努力适度。

<details>
<summary>Original English</summary>

**Marc Andreessen**: It's it's it's like generally the case. On the other hand, there are externalities to being you know publicly visible and and and and to being controversial on many fronts. We are I would say this we are we're very much we're trying very hard to thread this needle. So like we're we're not backing off of generally being a a company that does a lot of outbound. We, you know, we **Eric Worenberg** and the team that he's built, you know, that we've talked to you guys about in the past, is already off to the races. You know, we're we're going to, you know, we're tripling down on the idea of basically being the leaders and articulating the tech and business issues that matter. You know, the, you know, the issues for sure that people need to be able to understand. And and that's proven to be very effective. By the way, a fair amount of our coms are actually aimed at **Washington**. Because again it's like if you're a policy maker in **Washington** and you're sitting there 3,000 mi away and your entire information source is like East Coast newspapers that hate **Silicon Valley**. Like that's bad. And so you know our ability to like broadcast, you know, inform points of view on technology. We just we meet people in **DC** all the time who say, "Yeah, I you know, most of what I know about this topic I learned from you guys because I listened to the podcast, I read the articles, I watched the **YouTube** channel." And so, you know, we're we're going to continue to do that. And so we, you know, over over over overall we have a, you know, we're kind of on our front foot on that stuff. But yeah, he he and I do he and I do go back and forth a bit on exactly how, yeah, how many third rail topics should we touch? And uh and how frequently. And I I would say we're we're we are trying to we are trying to moderate that.

</details>

**主持人**: 正如**伊丽莎白·泰勒**（**Elizabeth Taylor**）所说，只要他们把我们的名字拼对，在大多数情况下都是好事，尤其是在小科技领域。我想这个问题中也包含了你和**Ben**之间长达30多年的关系。以至于**Mark**已经成为了一个代表两人的存在，有些人把**Mark**称为**Andreessen Horowitz**，**Mark**和**Ben**已经合二为一了。

<details>
<summary>Original English</summary>

**主持人**: As **Elizabeth Taylor** said, as long as I spell our name right, it's oftentimes could be good in most scenarios, particularly when it comes to little tech. And also I think embedded in that question is probably some degree of of uh uh the relationship that you and **Ben** have which is now going on 30 plus years at this point. So much so that that **Mark** has become one person representing both uh some people refer to **Mark** as **Andre** and **Horowitz** no lost the **Mark** have combined just into one person.

</details>

**Marc Andreessen**: 是的。

<details>
<summary>Original English</summary>

**Marc Andreessen**: yes

</details>

**主持人**: 这是30多年合作的结果。好的。嗯，你们围绕AI重组并推出**AD**已经两年了。你认为你们做得最对的是什么？事后看来，在决策过程中，你有没有低估或错过了什么？

<details>
<summary>Original English</summary>

**主持人**: that's the result of 30 plus years working together. Okay. Um, so it's been 2 years since you've reorganized around AI, launched **AD**. What do you think you got most right? And in hindsight, is there anything that you underestimated or or missed in that decisioning process?

</details>

**Marc Andreessen**: 不，我的意思是，你看，我们犯了很多错误。我认为那些都是正确的决定。我的意思是，AI就像我说的，整个风险投资理论，我们从一开始就有的整个风险投资理论，以及我们之前许多人也持有的理论，我认为非常正确，就是风险投资的钱是在出现根本性的架构转变时赚到的，就像技术格局发生根本性变化时。这在风险投资领域基本上一直如此。原因在于，如果技术发生根本性变化，你就会有一个创造力时期，在这个时期，你可以让那些基本上积极进取的人创办这些新公司，他们有机会在大公司做出反应之前进入并赢得市场类别。如果没有根本性的技术变革，初创公司就很难成功，因为大公司最终会做所有事情。所以，风险投资的兴衰取决于这些浪潮，这些转变。所以总会有这个问题。

<details>
<summary>Original English</summary>

**Marc Andreessen**: No, I mean, look, we made we made plenty of mistakes. I think those were I think those were the right calls. I mean, AI was like I said, like you know, the whole theor back up the whole theory of venture the whole theory of venture that we've had from the beginning is that you know, many people before us have had as well. That's very correct I think is the whole theory is like the money adventure is made when there's like a a fundamental architecture shift like when there's like a fundamental change in the technology landscape. And and that's been true for you know adventure basically forever. And the reason is because if you have a fundamental change in technology then you have this period of creativity in which you can have basically aggressive you know very aggressive kind of people you know kind of start these new companies and and they have this kind of shot to kind of come in and you kind of win categories before big companies can respond. If there's no fundamental change in technology, it's very hard to make startups work because the big companies just end up doing everything. So you so venture kind of, you know, sort of lives or dies on on the basis of these of these waves of these transitions. And so there's always there there's always this question.

</details>

**Marc Andreessen**: 我的意思是，我想说，历史上最好的风险投资公司，我认为是那些在浪潮之间最积极地进行转换的公司，对吧？你看，我就是受益者之一，当我94年来到**硅谷**时，1994年没有一家风险投资公司是专门投资互联网的，根本不存在。但当时有一批风险投资公司，比如我们当时的**Kleiner Perkins**，他们说：“哦，这是一个新的架构。这是一个新的技术变革。这看起来完全疯狂。每个人都说你赚不到钱。不管怎样，这些孩子都疯了。”但他们愿意下注。所以他们愿意投资。顺便说一句，**KP**在90年代不仅投资了我们，还投资了**亚马逊**和**Google**，以及一家又一家公司。他们投资了**At Home**，这家公司基本上让家庭宽带得以实现。他们投资了一系列公司，他们是一家成立于1970年代的风险投资公司，当时主要围绕着所谓的**小型计算机**，那是三代技术以前的事情了，他们已经从一个浪潮转换到另一个浪潮。**红杉资本**（**Sequoia**）也是如此，基本上任何一家经营了30、40或50年的成功风险投资公司都是如此。所以，我认为在这个行业，在所有行业中，你都需要抓住新的浪潮。

<details>
<summary>Original English</summary>

**Marc Andreessen**: I mean, I would just say the best venture capital firms in history, I I think are the ones that were the most aggressive at being able to navigate from wave to wave, right? And and and look, I was a beneficiary of this when I came to **Silicon Valley** in '94. You know that there was no venture firm in 1994 that was like the internet venture capital firm like that it just didn't exist. But there were a set of venture capital firms at the time, you know, at the time our our firm **Kleiner Perkins** that said, "Oh, this is a new architecture. This is a new technology change. It seems totally crazy. Everybody says you can't make money on it. Whatever, whatever. These kids are nuts." But like, we're going to make those bets. And so they were willing to invest. And by the way, you know, **KP** in the in the in the '90s invested not only in us, but also in **Amazon** and then **Google** and like in, you know, company after company after company. They invested in **at Home**, which basically made made home broadband work. You know they invested in in a fleet of companies and they were a venture capital firm that had started in the 1970s around really around what was at the time called **Minicomputers** which was like a you know three generations of techn technology back and they had navigated from wave to wave and and you know the same thing is true for **Sequoia** the same thing is true for basically any successful venture firm has been in business for you know 30 or 40 or 50 years and so I I think in this business like of all businesses like you you just you need you need to get onto the new thing.

</details>

**Marc Andreessen**: 我的意思是，老实说，大多数风险投资生态系统决定不参与**加密货币**，这相当令人惊讶。我们与许多**VC**交谈过，从2009年**比特币**白皮书发布到2021年**加密货币**战争开始之间，他们基本上都说：“哦，我们不做**加密货币**。”这相当，我从来不知道该如何对待那些说：“哦，出现了一波新技术，我非常刻意地不参与其中”的**VC**。我总是想：“这不是你的工作吗？”对吧？所以，我相当惊讶于那些没有转向**加密货币**的**VC**。我想说，他们在过去三四年**加密货币**战争期间看起来短暂地很聪明，我认为他们现在可能看起来不那么聪明了。AI是另一个例子，有些公司正在全力投入，有些公司则只是袖手旁观。顺便说一句，有些公司从未进入互联网领域。我的意思是，有些公司在80年代非常有名，也非常成功，但他们就是没有转向互联网，基本上就销声匿迹了。所以，无论如何，冗长地说，我认为在这个行业，在所有行业中，你都必须抓住新的浪潮。我认为我们抓住了它的重要性，这是一次根本性的转型。

<details>
<summary>Original English</summary>

**Marc Andreessen**: I mean quite honestly it was I pretty amazing that most of the venture ecosystem just decided to sit **crypto** out. And and the number of **VCs** that we talked to between call it, you know, the release of the **Bitcoin** white paper in 2009 to the beginning of the **crypto** war in 2021 who just basically said, "Oh, we're not going to do **crypto**." It was fairly it's I I like I don't I I never quite know what to do with the **VC** who says, "Oh, there's a new wave of technology and I'm very deliberately not going to participate in it." And I'm always like like, "Is that not the job?" Right? Like so so so like I was fairly amazed by the **VCs** that didn't make the jump to **crypto**. You know they they looked briefly smart during the **crypto** wars I would say of the last you know three or four years and I think they they probably look maybe a little bit less smart now. AI is another one of these where there are certain firms that are are jumping all over it and there are certain firms that are just kind of sitting back and letting it happen. And and and by the way there were certain firms that never made it to the internet. I mean there were there were firms that were very well known in the 80s and very successful that just like did not make the jump to the internet and basically just petered out. And so anyway long-winded way of saying I think I think in this business of all businesses you have to jump you have to jump on the new wave. And I and I think we got the magnitude of it of it right that this is like a fundamental fundamental transformation inside the firm.

</details>

**Marc Andreessen**: **AD**做得很好。**AD**本身我认为也是AI的受益者。对吧？因为在两个方面：一是**AD**公司自己构建的许多产品都受益于AI，二是AI是**AD**其他领域（如能源和材料）需求增长的驱动力。所以，我认为这总体上非常一致，并且运作良好。顺便说一句，**加密货币**由于所有政策变化，又回到了一个令人兴奋的行业。然后我认为AI和**加密货币**之间甚至会有很多交叉点。然后生物技术，生物和医疗保健，我认为显然也将被AI改造，无论是在医疗保健方面还是在实际的药物发现方面，这正在进行中。所以，无论如何，公司内部的各项努力感觉很好，也适合当前时代。团队之间的互动，以及那些从多个角度处理这些事情的混合想法，感觉非常好。

<details>
<summary>Original English</summary>

**Marc Andreessen**: **AD** is you know **AD** is doing great. **AD** **AD** itself I believe is also a beneficiary of AI. Right because in in two ways one is a lot of the kinds of products that **AD** companies build themselves benefit from AI and then also AI is a driver of demand in other sectors of **AD** like like energy and materials. And so I you know I think that that generally is is very consistent and you know is working well. By the way you know **crypto's** back back to being a you know I would say an exciting industry as a consequence of all the policy changes. And then and then there's even going to be I think intersections. I I think there's actually going to be quite a few intersections between AI and **crypto**. And then biote you know biotech also bio and healthcare I think are obviously going to be transformed by AI both on the healthcare side and on the actual drug discovery side and you know and that's underway. And so any anyway so like the the the individual efforts in the firm feel good and suitable for the time the inter the interactions between the teams and the kind the the hybrid ideas you know the companies that are coming at these things from multiple angles you know feels really good.

</details>

**Marc Andreessen**: 也许相关的反问是，我们现在觉得我们错过了什么？我认为答案是，真的没有。我认为现在我们没有错过任何一个垂直领域。我不是说现在没有一个特定的垂直领域，比如我不知道，我们只是需要一个新单位的等效物，或者一个新的基金的等效物。我目前没有看到。我认为更多的是在我们面前的垂直领域中执行得非常好。然后，你知道，成为投资组合公司最好的合作伙伴。

<details>
<summary>Original English</summary>

**Marc Andreessen**: You know maybe the correlarying question is like you know what do we feel like we're missing right now and I I think the answer is really not like I don't I don't think like right now we're not missing a vertical like I I don't like as of right now like there there's not like a specific vertical of like I don't know whatever that like where we just like, oh, we just need, you know, we need the equivalent of a new of a new unit or the equivalent of a new um you know, new fund or whatever. I don't I don't see that at the moment. I think it's more executing extremely well in the verticals that we have in front of us. And and and then, you know, being the best possible partner to the to the portfolio companies.

</details>

### AI与社会影响

**主持人**: 是的。实际上，就**AD**而言，因为AI正在创造，而且有很多关于AI取代工作等的讨论。讽刺的是，**AD**领域的工作需求在物理世界中从未如此之高，这与能源、数据中心建设等有关。所以，从社会角度来看，摆锤似乎也在从加速器的角度摆动。你谈到了社会也需要为技术采用做好准备的重要性。你最近看到这种加速了吗？你对如何实际增加这种加速的看法是什么，以确保采用的融合也与技术实际实施的速度保持一致？

<details>
<summary>Original English</summary>

**主持人**: Yeah. Actually, on the point of of **AD**, um because uh AI is creating and there's a lot of talk around AI taking jobs, etc. Ironically enough, the jobs in **AD** sectors have never been more in demand in the physical world related to energy, related obviously to data center build, etc. So like the the pendulum it seems like also is uh is swinging from just an accelerant standpoint from from a society uh point of view. You talked about the importance of society also needing to be ready for tech adoption. Like have you seen that accelerating of recently? What's your sentiment of of how to actually um increase that just to also make sure the convergence of of adoption also falls in line with with how quickly tech is is actually being implemented.

</details>

**Marc Andreessen**: 是的。我的意思是，你看，我们以前谈过这个，但是，你知道，很长一段时间以来，科技并不是一个非常相关的东西。你看，如果你回顾过去300年，就会发现，新技术的出现总是会引发一波又一波的全面恐慌和恐慌。甚至如果你回到500年前，回到印刷机时代，它基本上与新教的诞生是同步的，这确实改变了世界。然后，嗯，你知道，你回到，你知道，那里总是存在着持续的恐慌。在过去200年里，自动化恐慌曾多次出现。**马克思主义**下的许多基础性恐慌基本上是对通过自动化消除工作的恐惧。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Yeah. So, you know, look, we've talked about this before, but um you know, look, for a very long time, tech was just not a very relevant look, if you go back over like whatever 300 years, like there's just like recurring waves of like total panic and freakout caused by new technology. Or even you go back 500 years, you go back to the printing press, you know, which basically was handin-hand with the the sort of creation of Protest Pro **Protestantism**, which really changed things. And then um, you know, you you go back to um, you know, there there were just always kind of, you know, continuous panics there. You know, there have been m there have been multiple ways of automation panics for the last 200 years. You know, a lot of the foundational panic under **Marxism** was basically a fear of of of of the elimination of jobs through the application of automation.

</details>

**Marc Andreessen**: 你今天听到的许多关于AI将把所有财富集中在少数人手中，而其他人将变得贫穷和悲惨的论点，基本上就是**马克思**过去常说的，我认为当时是错的，现在也是错的，我们可以讨论一下。但在1960年代，也曾有过一场关于AI取代所有工作的全面恐慌。有一封很棒的信，很久以前就被遗忘了，但在**约翰逊**政府时期曾是一件大事，你今天读到的这些AI暂停信，比如几周前**哈里王子**（**Prince Harry**）领衔的这封信。他谈到AI将毁掉一切，这就像1964年，基本上有一群学术界、科学界和公共事务领域的领军人物，他们组成了一个名为“**三重委员会**”或“**三重革命委员会**”的组织。如果你在**Google**上搜索“**三重革命委员会 约翰逊白宫**”之类的词，你会找到这个东西。它就像一份非常相似的宣言，说我们需要立即停止技术进步，否则我们将毁掉一切。

<details>
<summary>Original English</summary>

**Marc Andreessen**: You know a lot of the same arguments you hear today about like AI is going to centralize all the wealth in a handful of a few people and everybody else is going to be poor and emiserated like that that basically is what **Markx** used to say which I think was by the way wrong then is wrong now we can talk about but you know and then even like in the 1960s there was this whole panic around around AI replacing all the jobs there was this there's this great uh it's long long forgotten but it was a big deal at the time during the **Johnson** administration you read these AI pause letters today you know that this one that just came out a few weeks ago that **Prince Harry** headlined of all people. And and uh uh you know he talks about AI is going to ruin everything and it's like and 1964 there was basically a group of like the leading lights in academia science and uh you know um kind of public affairs that there was this thing called the triple committee or the committee for the triple revolution. If you do a **Google** search on it's like committee for the triple revolution **Johnson** white house or whatever you'll this thing will pop up. And you know it was a very similar kind of manifesto of like we need to stop the march of technology today or we're going to ruin everything.

</details>

**Marc Andreessen**: 然后，在过去20年里，也曾有过一场大恐慌，围绕着2000年代的**外包**将夺走所有工作，然后是2010年代的**机器人**，这很奇怪，因为**机器人**在2010年代甚至都无法工作，而且它们现在也仍然无法工作。但当时对**机器人**有一种恐慌，现在又有了某种程度的AI恐慌。所以，我想说，你看，你知道，我将如何描述它呢？**硅谷**的我们一直都希望我们所做的工作能够产生影响。老实说，我们大部分时间都在听人们告诉我们，我们所做的一切都是愚蠢的，不会奏效。这是默认立场。然后，基本上，在某个时候，这种立场会转变为对一切都将被毁掉的恐慌。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And and then you know even in the course of the last 20 years there was like a big panic around actually outsourcing in the 2000s was going to take all the jobs and then it was actually robots weirdly enough in the 2010s which is amazing because robots didn't even work in the 2010s and they kind of you know still don't. But uh you know there's a panic around that and now there's kind of whatever level of AI panic. And so like you know I would just say like look that you know the way I would describe it is you know we in **Silicon Valley** have always wanted the work that we do to matter. We spend most of our time quite honestly with people telling us that everything that we're doing is stupid and won't work. That's the default position. And then basically that flips at some point into panic about how it's going to ruin everything.

</details>

**Marc Andreessen**: 坐在这里，很容易对此持怀疑态度。尤其是当你看到这些模式随着时间的推移而出现时。我的观点是，我们需要对此非常尊重，并且非常清楚这一点。基本上，我们，你知道，我用“追上公交车的狗”的比喻，我们一直想做有意义的事情，我们正在做有意义的事情。社会上其他人确实关心这些事情。我们有责任非常仔细地思考这一切，并做好工作，不仅要构建技术，还要解释它。你看，我认为我们有真正的义务，你知道，真正解释自己并参与这些问题的讨论。

<details>
<summary>Original English</summary>

**Marc Andreessen**: You know it's it's easy sitting out here to be cynical about that. Especially when you kind of see the patterns over time. I you know my view is we need to be actually very respectful of that and we need to be very aware of that and and basically that we you know I use the metaphor with the dog that caught the bus like we always wanted to work on things that matter we are working on things that matter people in the rest of society actually really do care about these things and you know and it's our responsibility to think that all through very carefully and to do a good job you know both not just building the technology but also explaining it you know look you know I think we have a real obligation to uh you know to to really explain ourselves and engage on these issues.

</details>

**Marc Andreessen**: 至于如何衡量进展，你知道，这有点像经典的社会科学问题。也就是说，如果你想了解人们的行为模式，基本上有两种方法可以了解人们正在做什么和想什么。一种是询问他们，另一种是观察他们。每个社会科学家，每个社会学家都会告诉你这一点。基本上，你可以询问人们，对吧？你通过调查、焦点小组、民意测验来了解他们的想法。但你也可以观察他们，你可以做所谓的“**显性偏好**”（**reveal preferences**）。你只是观察他们的行为。你经常在人类活动的许多领域看到这种情况，包括政治和社会的许多不同方面和文化，你询问人们时得到的答案与你观察他们时得到的答案非常不同。原因在于，我的意思是，你可以有很多理论来解释为什么会这样，**马克思主义者**声称人们有**虚假意识**。我认为更合理的解释是，人们对各种事情都有自己的看法，尤其是在他们可以表达自己的情境下，他们倾向于以非常激烈的方式表达自己。然后如果你只观察他们的行为，他们通常会平静得多，更深思熟虑，更理性地行事。

<details>
<summary>Original English</summary>

**Marc Andreessen**: In terms of how to measure how going you know it's it's sort of the classic social science question which is like okay if you want to understand basically you know patterns of people there's basically two ways to understand what people are doing and thinking one is to ask them and and then the other is to watch them and like every social every social scientist like every sociologist will will will will tell you this which basically is you can you can ask people right and and the way you do that right is like you know surveys focus groups polls you know what they think Um but then but then you can watch them and you can do what's you know called **reveal preferences**. They're just observe behavior which is you can actually watch their behavior and and and what you often see in many areas of human activity including politics and many different aspects of society and culture over time is the answers that you get when you ask people are very different than the answers that you get when you watch them. And the reason is because like I mean you could have a bunch of theories as to why this is the **Marxists** claim that people have **false consciousness**. The the the the somewhat the explanation I believe is just people have opinions on all kinds of things particularly when they're in a context where they get to express themselves and they'll have a tendency to kind of express themselves in very heated ways and then if you just watch their behavior they're often a lot calmer and a lot more measured and a lot more rational in in what they do.

</details>

**Marc Andreessen**: 所以现在AI正在发生的情况是，如果你对美国选民对AI的看法进行调查或民意测验，他们都处于完全恐慌之中，就像“天哪，这太糟糕了，这太可怕了，它会杀死所有工作，它会毁掉一切。”如果你观察他们的**显性偏好**，他们都在使用AI。所以，他们正在下载应用程序。他们正在工作中使用**ChatGPT**。他们，你知道，正在争论。你现在经常在网上看到这种情况。我正在和我的男朋友或女朋友争吵。我不明白发生了什么。我把短信对话复制粘贴到**ChatGPT**中，让**ChatGPT**向我解释我的伴侣在想什么，并告诉我应该如何回答，这样他或她就不会再生我的气了，对吧？或者，你知道，我得了皮肤病，医生，等等，我拍了一张照片，我终于开始了解自己的健康状况，或者我在工作中使用了它，比如，你知道，我必须在周一早上准备好这份报告，但我时间不够了，**ChatGPT**真的帮了我大忙。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And so the AI that's playing out in AI right now which is if you pull if you run a survey or a poll of what for example American voters think about AI it's just like they're all in a total panic it's like oh my god this is terrible this is awful it's going to kill all the jobs it's going to ruin thing. The whole thing, if you watch the **revealed preferences**, they're all using AI. So, they're like, they're downloading the apps. They're using **ChatGPT** in their job. They're, you know, having an argument. You You see this online all the time now. I'm having an argument with my boyfriend or girlfriend. I don't understand what's happening. I take the text exchange. I cut and paste it into **ChatGPT** and I have **ChatGPT** explain to me what my partner is thinking and tell me how I should answer so that he's, you know, he or she is not mad at me anymore, right? So, or like, you know, I have this thing, you know, I have a skin, you know, I have a skin condition and doctors, you know, da da da, and I take a photo and I and I'm finally like learning about my own health or I use it in my job like I, you know, I had to get this report ready for Monday morning and I ran out of time and like it, you know, **ChatGPT** really saved my bacon.

</details>

**Marc Andreessen**: 所以，人们在日常生活中，我的意思是，你只需看看数据，你会发现他们不仅在使用这项技术，他们热爱这项技术。他们热爱它，并且正在尽可能快地采用它。所以我倾向于认为，关于这个问题的公开讨论会来回拉锯一段时间，因为人们所说和所做之间存在分歧。但我确实认为，人们所做的那一部分最终会胜出。我认为这项技术将与所有其他技术完全相同。这里将发生的事情是，它将非常广泛地普及。它会吓坏所有人，然后，你知道，20年后，每个人都会说：“哦，感谢上帝我们拥有它。如果没有它，生活会多么悲惨？”或者，你知道，5年后，或者1年后，人们就会得出这个结论。所以我对它的最终结果非常乐观。只是，你知道，路上会有一些波折。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And so people in their daily lives are I would, you know, just you just look at the just look at the data you just like they are not only using this technology, they love this technology. And they love it and they're adopting as fast as they possibly can. So I I tend to think we're going to the public discussion of this is going to ping pong back and forth for a while because there is this divergence between what people are saying what people are doing. But but I do think that the what people are doing part is is is obviously the part the part ultimately that wins and and and I think this by the way I think this technology is going to be exactly the same as every other one. Which is the thing that's going to happen here is this is just going to proliferate really broadly. It's going to freak everybody out and then you know 20 years from now everybody's going to be like oh thank god we've got it. Like wouldn't life be miserable if we didn't have this? Or you know 5 years from now or or one year from now you know people are going to reach that conclusion. So I'm I'm very optimistic about where this lands. It's just that you know there will be turbulence along the way.

</details>

### 闪电问答

**主持人**: 我在笑，因为我也在现实中目睹了这一点。就在上周晚些时候，我在飞机上。我旁边的那个人正在和他的聊天机器人说话。我能看到他，他正在说：“帮我起草一封致**美联航**的升级信，因为这次航班延误了。”我当时想：“先生，你现在就在飞机上啊！至少等飞机降落再说吧。”不过写得很好。我确信他写了一封很棒的邮件。好的，我要切换到一些有趣的闪电问答。那么，你最近改变了什么看法？如果是由比你年轻的人改变的，可以加分。

<details>
<summary>Original English</summary>

**主持人**: I'm I'm smiling because I also witnessed that in the wild. Literally late last week I was on the plane. The guy next to me was talking to his chat. I could see him and he was like help me draft an escalation letter to **United** for the delay on this flight. I was like sir you are on the flight right now. Like at least wait until it's over. It was very good though. I'm sure he had a great email crafted as a as a part of that. Uh so, okay, I'm going to switch gears to uh a few fun questions that that were sent in uh that uh is intended to be a lightning round. So, so uh what what is something you've changed your mind on recently? Bonus points if it was someone younger than you.

</details>

**Marc Andreessen**: 我的意思是，这就像每天都在发生。这只是一个持续的，你知道，它几乎总是关于可能性的范围。我不擅长举具体的例子，所以我手头没有现成的例子，但就像我说的，它总是，是的。不，它通常是有人出现。要么是某人写的东西，要么是某人说的话。而且，是的，它经常是某个非常年轻的人。而且，是的，我想说这是一种例行经验。

<details>
<summary>Original English</summary>

**Marc Andreessen**: I mean, it's like every day. It's just like it's just a constant, you know, it's it's almost all like what's in the realm of the possible. I I'm I'm terrible at specific examples, so I don't I don't have one like ready at hand, but like like I said, it's just it's it's always Yeah. No, it's it's often somebody showing up. It's either something somebody writes or something somebody says. And yeah, it's almost Yeah, it's very frequently somebody who's very young. And um, yeah, it's just like I would say it's a it's a routine experience.

</details>

**主持人**: 保持年轻的好方法。嗯，说到年轻，你打算进行人体冷冻吗？

<details>
<summary>Original English</summary>

**主持人**: Good way to stay young. Um, do you plan, speaking of young, do you plan to be cryogenically frozen?

</details>

**Marc Andreessen**: 不会，以目前的人体冷冻技术来看不会。嗯，它的记录并不好。而且，嗯，那些故事有点令人毛骨悚然，但，你知道，我们拭目以待。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Not with current not with current cryogenic technology. The uh the the the track record of that is not great. And um the stories are somewhat horrifying, but uh you know, we'll see.

</details>

**主持人**: 我们拭目以待。我们还有时间。

<details>
<summary>Original English</summary>

**主持人**: We'll see. You got we still got some time.

</details>

**主持人**: 嗯，当你的影响力可能会扭曲周围的现实时，你如何保持脚踏实地？

<details>
<summary>Original English</summary>

**主持人**: Um how do you stay grounded when your influence itself may distort reality around you?

</details>

**Marc Andreessen**: 是的。我想说，好消息是，在几个方面。首先，你看，这种担忧是真实的。而且我很难用我那种中西部人的方式来谈论它，你知道，我们中西部人要么非常谦逊，要么非常擅长伪装，但是，嗯，你知道，这很难谈论，但需要一些内省。但是，是的，我的意思是，你看，“现实扭曲效应”确实存在。顺便说一句，“现实扭曲效应”有一个非常大的优势，那就是能够让人们做你想让他们做的事情。所以，你知道，它还有另一面。但就实际准确理解正在发生的事情而言，它是一个担忧。我想说两点。我想说，第一点是，我的合作伙伴，我认为包括**Ben**在内，都非常直言不讳地告诉我什么时候我错了。但更普遍地说，我们非常暴露在现实中。所以，这，再次，你知道，你提到我不知道这是一种保持年轻的方式，确保头发永远不会再长出来之类的。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Yeah. So I was just say the good news, you know, I would say the good news on several front. So one is look the concern is real. And it's hard for me to it's hard for me to talk about with sort of my Midwestern, you know, kind of, you know, Midwesterners, we we either are very humble or we we're really good at faking it, but um, uh, you know, it's hard to talk about, but requires some introspection. But yeah, I mean, look, the the reality warping effect is definitely real. By the way, there is a very big advantage to the reality warping effect, which is being able to get people to do what you want them to do. So that, you know, there is there is another side to it. But it you know it is a concern in terms of like having an actual accurate understanding of what's happening. I guess I would say two things. I would say one is um you know I mean one is just you know my partners I think are quite you know including **Ben** are quite forthright in telling me when I'm wrong but you know more generally like we're just we are very exposed to reality. And so and this and again you know you mentioned I don't know it's a way to stay younger, make sure their hair never grows back or whatever.

</details>

**Marc Andreessen**: 这就像，你知道，我们进行这些实验，因为我们决定是否投资，我们与这些公司合作，做所有这些事情，然后，你知道，现实很快就会介入。你知道，在这个行业，妄想不会持续太久。因为，你知道，这些事情要么奏效，要么不奏效。而且，你知道，你会有这些漫长而复杂的讨论，关于这个那个的理论，然后现实就会像一记耳光一样把你打醒，你知道，就像“你这个白痴！”对吧？你知道，就像，你知道，这是这个行业最大的挫败感，同时也是巨大的动力，那就是你认为你运用了卓越的分析，然后你根据这种分析进行了投资或没有投资，结果证明你的分析完全是错的，对吧？而且，你知道，你只是完全高估了你对这些事情进行认知分析的能力，你只是，你知道，基本上造成了伤害。我总是说，问题总是，你知道，我们所做的任何活动，它是增值的还是实际上是减值的，对吧？我认为在这个行业，在所有行业中，情况都是如此。这也适用于我自己的所有贡献。所以，有这一点。然后，我想说，嗯，也许最后一点是，我确实有整个互联网随时准备告诉我我是个白痴，所以那也……

<details>
<summary>Original English</summary>

**Marc Andreessen**: It's just like you know we run these experiments you know cuz we make these decisions about whether to invest or not invest and we work with these companies and all their things and like you know reality kicks in quickly. You know the the the delusions don't last very long in this business. Because like you know these these things either work or they don't. And you know you have these like long elaborate you know discussions about you know theories on this and that and the other thing and then reality just like completely smacks you square in the face you know like you idiot right you know like you know what were you you like you know this is like the you know the ultimate frustration of the business which is also very motivating which is the number of times that you think that you've applied superior analysis and then you've either invested or not invested based on that analysis and it turns out it was just you the analysis was just completely wrong right and you know you just like completely overrated your ability to epistemically you know kind of analyze these things you just you know basically inflicted harm like I always the question is always you know it's sort of you know any activity that we do is it value add or is it actually value subtract right and and and I think in this business of all businesses is kind of like that and and that applies to all of my own contributions as well so so there is that and then and then I would say um you know maybe the final thing is just like I do have the entire internet ready to tell me that I'm an idiot so that also

</details>

**Marc Andreessen**: 那也无伤大雅，而且它确实经常发生。

<details>
<summary>Original English</summary>

**Marc Andreessen**: that also doesn't doesn't hurt and it and it does on a regular basis

</details>

**主持人**: 就你之前提到的关于投资公司的决定而言。我最喜欢的一句话，我想是你在**Cheeky Point**采访中说的，你知道，当你投资一家公司时，如果它发展不好，至少它会破产，对吧？如果它发展得很好，而且发展得非常出色，你每天都会听到。

<details>
<summary>Original English</summary>

**主持人**: on on the point of your alluding to earlier about decisions on investing in companies. My favorite line I think it was from the **Cheeky Point** interview that you did was you know when you invest in a company it doesn't go well at least it goes bankrupt right if it does if it does well and it does fantastically well you hear about it every single day

</details>

**Marc Andreessen**: 在你余生中。是的。在接下来的30年里。

<details>
<summary>Original English</summary>

**Marc Andreessen**: for the rest of your life. Yeah. For the next for the next 30 years.

</details>

**主持人**: 现实会打你一巴掌，说你这个傻瓜。

<details>
<summary>Original English</summary>

**主持人**: validity smacking you in the face saying you fool.

</details>

**Marc Andreessen**: 你拥有它。它简直就是，它简直就是你在办公室里拥有它。你所要做的就是说“是”。

<details>
<summary>Original English</summary>

**Marc Andreessen**: You had it. It's literally It's literally you had it in your office. All you had to do is say yes.

</details>

**Marc Andreessen**: 顺便说一句，这就是所有伟大的**VC**都会遇到的事情。如果你，这就是**VC**们互相讲述的故事。每个伟大的**VC**基本上都有这样的历史：天哪，我拥有它，它就在我的办公室里，我说“不”，如果我当时说了“是”。所以，是的，这很难，嗯，是的，**华尔街日报**（**Wall Street Journal**）和**CNBC**每天都在不断提醒你犯了一个巨大的错误，嗯，是的，这对于保持谦逊非常有效。

<details>
<summary>Original English</summary>

**Marc Andreessen**: And by the way, and this is the thing like every great **VC** like if you this is this is the stories that you know the **VCs** tell each other. Every great **VC** basically has this history of like my god I had it was in my office. The thing was in my office and I said no and if I had just said yes. And so it's yeah it's very hard to um yes the constant reminders in the **Wall Street Journal** and on **CNBC** every day that you made a giant mistake um is yes very good very good for the the old humility factor.

</details>

**主持人**: 是的，非常令人谦卑，让你始终保持脚踏实地。最后一个问题，如果有机会，你打算去火星吗？

<details>
<summary>Original English</summary>

**主持人**: Yeah very humbling helps you stay grounded all the time. Last question do you plan to go to Mars if and when that opportunity presents itself?

</details>

**Marc Andreessen**: 可能不会。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Probably not.

</details>

**主持人**: 我的潜意识**Zoom**背景没有发出积极的信号。

<details>
<summary>Original English</summary>

**主持人**: My subliminal **Zoom** background wasn't sending the positive vibes. This is what it

</details>

**Marc Andreessen**: 嗯，我甚至不愿意离开**加州**。所以，我几乎不愿意离开我的家。所以，嗯，是的，也许通过**VR**吧。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Well, I'm not even willing to leave **California**. Um, so I'm barely willing to leave my house. So, um, uh, yeah, I may maybe by maybe by **VR**.

</details>

**主持人**: 是的。

<details>
<summary>Original English</summary>

**主持人**: Yeah.

</details>

**Marc Andreessen**: 嗯，然后我们拭目以待。我的意思是，话虽如此，我认为**Elon**会成功。所以，我认为，你知道，我不知道。我不想预测。这不是预测，但是，你知道，如果十年内有例行的往返旅行，我不会感到惊讶。所以，是的，我们可能，这实际上可能成为一个实际问题。顺便说一句，我确实认识很多人可能会去。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Um, and then we'll see what happens. I mean, look, having said that, I think **Elon's** going to pull it off. Um, and so I think, you know, I don't know. I don't know. I don't want to predict. This is not a prediction, but I, you know, I would not be surprised if within a decade there's routine trips back and forth. Um, so, uh, yeah, we may, uh, this this may actually become a a practical question. And and by the way, I do know a lot of people who are probably going to go,

</details>

**主持人**: 包括我自己。把我算上。

<details>
<summary>Original English</summary>

**主持人**: myself included. Put me on that.

</details>

**Marc Andreessen**: 哦，太棒了。

<details>
<summary>Original English</summary>

**Marc Andreessen**: Oh, fantastic.

</details>

**主持人**: 环球飞行已经为我六个月的火星之旅做好了准备，所以我没问题。

<details>
<summary>Original English</summary>

**主持人**: The the flights around the world have prepared me for the six-month journey to Mars, so I will be just fine.

</details>