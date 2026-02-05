---
author: The MAD Podcast with Matt Turck
date: '2026-02-05'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=DqBMzuzxZog
speaker: The MAD Podcast with Matt Turck
tags:
  - chip-architecture
  - ai-inference
  - semiconductor-supply-chain
  - geopolitics
  - prompt-engineering
title: Dylan Patel：英伟达的新护城河与中国半导体雄心
summary: 本期访谈中，半导体分析师**Dylan Patel**深入探讨了**英伟达**通过收购**Grock**等策略构建多架构芯片护城河，以应对AI模型快速演进的挑战。他分析了中美在AI和半导体领域的激烈地缘政治竞争，**中国**本土半导体产业的崛起，以及**美国芯片法案**的局限性。此外，Patel还驳斥了AI对电网和水资源造成巨大压力的误解，并强调AI模型在软件和生产力方面带来的巨大变革，认为AI的经济价值远被低估。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - Nvidia
  - OpenAI
  - Huawei
  - TSMC
  - Google
  - AMD
products_models:
  - Claude
  - TPU
  - Blackwell
  - GPT-4o
media_books:
  - I Pencil
status: evergreen
---
### 访谈介绍

**Matt Turk**: 大家好，我是**Matt Turk**，欢迎回到**Matt**播客。今天，我请到了一位华尔街和硅谷在需要看透硬件炒作时都会求助的人——来自**SemiAnalysis**的**Dylan Patel**。我们深入探讨了当今许多最重要的议题：**英伟达**大规模收购**Grock**的举动、资本支出泡沫的真相、美国电网是否能应对AI热潮，以及中美之间正在上演的地缘政治棋局。但我必须提醒大家，这次对话以最好的方式“跑偏”了，我们最终谈到了各种有趣的题外话，比如中国半导体工厂背景下的浪漫剧，以及三位AI界名人室友在旧金山合住的真实情况。请大家享受与**Dylan**的精彩对话。

<details>
<summary>Original English</summary>

**Matt Turk**: Hi, I'm **Matt Turk**. Welcome back to the **Matt** podcast. Today I'm joined by the one person Wall Street and Silicon Valley turn to when they need to cut through the hardware hype, **Dylan Patel** of **SemiAnalysis**. We dove into many of the most important topics of today. **Nvidia**'s massive move to acquire **Grock**, the truth about the capex bubble, whether the US power grid can actually handle the AI boom, and the geopolitical chess match playing out between the US and China. But I have to warn you, this conversation went off the rails in the best possible way. And we ended up going into all sorts of fun tangents like the strange phenomenon of Chinese romance dramas set inside semiconductor factories and what's really like when three AI famous roommates live together in SF. Please enjoy this fantastic conversation with **Dylan**.

</details>

**Matt Turk**: 嘿，**Dylan**，欢迎你。

<details>
<summary>Original English</summary>

**Matt Turk**: Hey **Dylan**, welcome.

</details>

**Dylan Patel**: 你好。你怎么样？

<details>
<summary>Original English</summary>

**Dylan Patel**: Hello. How are you?

</details>

**Matt Turk**: 我很好。我很想从**Grock**和**英伟达**开始聊起，因为这个话题还很新鲜。不久前，**英伟达**还在说一个**GPU**就能搞定一切，现在他们却与**Grock**达成了这项非独家收购协议。在你看来，这意味着什么？

<details>
<summary>Original English</summary>

**Matt Turk**: I'm great. I'd love to start with **Grock** and **Nvidia** since it's still fresh. So, not so long ago, **Nvidia** was saying that one **GPU** could do it all, and now they're doing this acquisition non-exclusive deal with **Grock**. What does that mean from your perspective?

</details>

### 英伟达的芯片策略与市场演变

**Dylan Patel**: 这很清楚。我们不确定未来几年AI模型架构会如何发展，但大家普遍认同的是，模型大多是自回归的。下一个token生成是关键，但除此之外，注意力机制、工作方式等一切都可能改变。有趣的是，**英伟达**之所以能赢，是因为他们采取了最广泛的表面积押注，然后人们不断在其基础上开发模型，这种形式奏效了。但现在工作负载如此之大，以至于存在专业化的空间，这将在某些领域带来10倍的增长。

<details>
<summary>Original English</summary>

**Dylan Patel**: It's very clear. We're not sure where AI models are headed in terms of over the next few years, what happens to the architecture, but the thing that I think everyone is sort of agreed on is models are pretty auto regressive. Next token generation is the thing but beyond that attention mechanisms changed how it works, everything changes, could change. And so what's interesting is the reason **Nvidia** won is because they just took the widest surface area bet and then people kept developing models on that and that kind of shape worked but now the workload is so large that there is room for specialization that will give you 10x increases in certain domains.

</details>

**Dylan Patel**: 在通用工作负载中，**Grock**不起作用。它无法高效地训练或推理超大型模型，也无法服务大量用户。但它能做到的是，运行速度极快。这和**Cerebras**与**OpenAI**的交易类似，但这只是一种工作负载，非常侧重解码，以超快的速度生成单个流中的自回归token。AI模型还可能走向另一个方向，我们不知道模型会以单个token流思考，还是会不断进行上下文切换，在多个并行流中生成。**Google**和**OpenAI**都发布了其专业模型的机制，模型不再只有一条单一的推理思路，而是有多条。如何选择以及最终答案如何交付仍是研究领域。

<details>
<summary>Original English</summary>

**Dylan Patel**: In a general purpose workload **Grock** doesn't work. It can't train, it can't inference really large models cost efficiently. You can't serve many, many, many users, but what it can do is it can go screamingly fast. Same with the **Cerebras** **OpenAI** deal, but that's one workload, very decode focused, doing auto regressive tokens in a single stream super fast. Another direction AI models could head, we don't know, are models going to think in one token stream or is it actually they're constantly context switching and they're going from they have this humongous humongous context and they're generating in multiple parallel streams. And so **Google** and **OpenAI** have both released mechanisms of this with their pro models where the model actually doesn't just have one single chain of thought for reasoning, it has multiple. And then I don't exactly and how they choose which one and what the final answer to you delivers is an area of research.

</details>

**Dylan Patel**: 但这种芯片仍有空间，它适用于高度并行、大量思维链流的工作，可能对延迟要求没那么高。也许你不需要极快的速度，你可以接受它，因为我可以启动100个并行的思维流或代理。在这种情况下，我可能更关心成本。因为它是100个并行，而不是一个超高速运行，所以它的深度不那么深。推理的树搜索或深度不那么深，但宽度大得多。推理还有其他部分，比如创建**KV缓存**。**英伟达**为此也有一款芯片，就是**CPX**。他们制造了**CPX**，收购了**Grock**用于解码，并且仍然拥有通用**GPU**。所以他们试图覆盖所有基础，因为与第一波AI芯片公司不同，那些公司只是制造芯片，然后试图找出它在哪里能发挥作用。

<details>
<summary>Original English</summary>

**Dylan Patel**: But there is room for that kind of chip, something that works on very parallel, a lot of streams of chain of thought and maybe the latency requirements are not as crazy. Maybe you don't want to go blindingly fast. Maybe you're okay with it being, because I can spin up 100 parallel streams of thought or agents or whatever you want to call them. Maybe I care a lot about cost there. And because it's 100 in parallel instead of one going super, super fast, it's not as deep. The tree search or the depth of the inference is not as deep, but it is much wider. There's other parts of inference. Process do creating the **KV cache**. So, **Nvidia** has a chip for that, that's the **CPX**. So they've made the **CPX**, they bought **Grock** for decode, and then they still have their general purpose **GPU**. So they're kind of trying to cover their bases because unlike the first wave of AI chip companies where they sort of just made chips and then tried to figure out where it would work.

</details>

**Dylan Patel**: 他们有一个论点，**Grock**和**Cerebras**，以及**Samanova**，都是将大量内存放在芯片上，而**Cerebras**和**Grock**甚至没有片外内存。**Samanova**则是片外内存较少或速度较慢但容量更大。他们都朝着这个方向做了类似的押注，并且在一段时间内没有奏效，直到现在某种工作负载需要它，才开始奏效。**英伟达**认识到他们是领导者，是核心。一方面，他们可以比所有人都跑得更快，但要比**Google**、**OpenAI**或其他任何内部芯片好两倍，以证明其75%以上的利润率是很难的。然后他们必须好2到4倍才能证明其利润率，因为这是他们高于销货成本的收费。

<details>
<summary>Original English</summary>

**Dylan Patel**: They had a thesis, **Grock** and **Cerebras**, both as well as **Samanova**, which was put a lot of memory on the chip and not necessarily in the case of **Cerebras** and **Grock**, no memory off chip. And in the case of **Samanova**, less memory offchip or slower memory offchip with higher capacity. They sort of all made similar bets in that direction. And it didn't work for a while until it kind of did, because there's a workload that now necessitates it. **Nvidia** recognizes they're the leader. They're at the tent pole. In one respect they can just run faster than everyone, but it's kind of hard to be 2x better than **Google** or **OpenAI** or whoever else's internal chip, to justify their, 75% plus margins. And then they have to be 2x to 4x better to justify their margins because that's what they're charging above COGS.

</details>

**Dylan Patel**: 问题是哪种架构能实现这一点？他们的**GPU**可编程性非常适合训练和许多工作负载，但很多人会下载开源模型，下载推理框架，然后运行。这比听起来复杂一点，但这将是许多企业、初创公司和科技公司的消费方式：他们会租用**GPU**或芯片，然后下载开源框架和模型并运行。**英伟达**认识到这一点，并且非通用产品也有市场。通用**GPU**可能仍然是训练和许多推理以及成本效益推理的主力，但对于极速或大量预填充（即创建**KV缓存**）的工作负载，可能需要不同的芯片。他们宣布的**CPX**芯片就是用于上下文处理，创建**KV缓存**。它对视频模型也很有用，因为视频模型不关心内存带宽，所以为什么要为通用芯片昂贵的内存付费？或者为什么要像**Grock**那样将数百或数千个芯片连接起来，没有内存但将整个模型都放在芯片上？

<details>
<summary>Original English</summary>

**Dylan Patel**: The question is what architecture will deliver that? Well, yes, keep the programmability of their **GPU**s is great for training and for a lot of workloads, but guess what? I think a lot of people will just be downloading an open source model, downloading an inference framework and pressing go. A little bit more complicated than that, but that's going to be the consumption method for a lot of enterprises, a lot of startups, a lot of tech companies is they're just going to do that or they're going to rent the **GPU**s or rent the chips and then download an open source framework and model and go. And **Nvidia** recognizes this and hey, there is room for products that aren't general purpose. The general purpose **GPU** will still probably be the main line for training and for a lot of inference and for costefficient inference, but maybe blindingly fast or workloads that have a ton of prefill, i.e. creating the **KV cache**. Maybe that those workloads could be different chips. And the **CPX** chip they announced, they say it's for the context processing, creating the **KV cache**. It's also really useful for video models because video models don't care about memory bandwidth and so why pay for the expensive memory that the general purpose chip has or why do what **Grock** is doing which is tying hundreds or thousands of chips together and not having memory but keeping the entire model on chip.

</details>

**Dylan Patel**: 当然，这种做法的权衡是，你需要数千个芯片，每个芯片的计算能力较少。所以**英伟达**正试图覆盖整个领域，因为你不知道模型会走向何方，也很难说研究方向在哪里。

<details>
<summary>Original English</summary>

**Dylan Patel**: The trade-off for that of course is you need thousands of chips and you have less compute per chip and so **Nvidia**'s trying to capture the whole surface area because again you don't know where models are headed and it's hard to say where the research is headed.

</details>

**Matt Turk**: 你认为这对市场是好事吗？又一个以许可形式出现但实际上是收购的交易。

<details>
<summary>Original English</summary>

**Matt Turk**: And do you think it's a good thing for the market? Yet another one of those deals that's structured as a license but really an acquisition.

</details>

**Dylan Patel**: 我当然认为从反竞争的角度来看这不是好事。我不认为公司应该在没有任何反垄断程序的情况下随意收购其他公司。不过，如果是一家大公司收购一家初创公司，我完全没意见。另一方面，我们知道交易正在发生。我曾担任顾问的一家公司，**英伟达**在收购**Grock**前几个月收购了**Infiniband**，交易方式类似。如果有人想阻止它，那将是最大的困境。我们在风险投资中见过这种情况，你可能知道更多这样的故事，一家公司试图被收购，结果陷入困境长达一年。

<details>
<summary>Original English</summary>

**Dylan Patel**: I certainly think it's not good from an anti-competitive sense. I don't think people should just be able to buy companies without any antitrust process at all. Now, in the case of a large company buying a startup, I'm completely fine with it. The flip side is, hey, we know the deal is happening. This happened for a company I was an adviser for **Nvidia** acquired **Infiniband** just maybe a few months before they did **Grock** and similar style of deal. If someone wanted to strike it down that's the biggest limbo. We've seen this happen in venture and you probably know more stories of this but a company trying to get acquired they get stuck in limbo for a year.

</details>

**Matt Turk**: 然后就黄了。

<details>
<summary>Original English</summary>

**Matt Turk**: And then it falls apart.

</details>

**Dylan Patel**: 是的，交易黄了，因为一些监管问题。现在公司和创始人一年来都专注于完成交易，而不是改进产品，结果他们落后了，或者没有那么专注于增长。作为创始人，你的时间是有限的，所以从这个意义上说，我喜欢许可协议。

<details>
<summary>Original English</summary>

**Dylan Patel**: Yeah, it falls apart the deal did because some regulatory BS and now the company was and the founders were focused on getting the deal done instead of making the product better for a year and now they're like behind or they weren't focused on growth as much. You only have so much time as a founder so in that sense I like the license deals.

</details>

**Matt Turk**: 那么，**英伟达**现在也主导着推理市场吗？有没有可能**英伟达**不再是王者，或者他们似乎变得更强了？

<details>
<summary>Original English</summary>

**Matt Turk**: So now is **Nvidia** also dominating the inference market is there any world where **Nvidia** is no longer the king or they seem to be getting stronger.

</details>

### 英伟达的护城河与竞争格局

**Dylan Patel**: 我认为**英伟达**对待**Andy Grove**的“只有偏执狂才能生存”的心态比任何人都认真。**Google**实施**OKR**是因为**Intel**做了，但这只是管理层面的东西。而“只有偏执狂才能生存”是湾区和**英伟达**的核心。**Jensen**非常害怕失败。如果他只继续制造他的主线芯片，那么针对市场特定部分的点对点解决方案就会在成本和性能上击垮他。那样他就无法证明自己的利润率。这对**英伟达**的整个商业模式构成了威胁，尤其是当最好的模型每三个月才变化一次，或者你想要推出的模型。

<details>
<summary>Original English</summary>

**Dylan Patel**: I think the thing about **Nvidia** is they take the **Andy Grove** mentality more serious than anyone else. Like okay fine **Google** implemented **OKR**s because **Intel** did it but that's management stuff. Only the paranoid survive. This is core to the Bay Area, core to **Nvidia**. **Jensen** is very paranoid about losing. These specializations, if he just kept making his mainline chip, would mean people could, point solutions for specific parts of the market would crush him on cost and performance. Then he can't justify his margin. That's a threat to **Nvidia**'s business model as a whole, especially if the best model only changes every 3 months or the model you want to roll out.

</details>

**Dylan Patel**: 那么你将有三个月的时间来弄清楚如何让模型在针对该点解决方案的芯片架构上工作，这没问题。**英伟达**的软件优势并不那么重要。**Jensen**非常害怕失败，坦率地说，要雇佣足够多的有才华的芯片人才真的很难。当你审视整个市场时，只有少数几家公司成功创建了芯片架构和软件，能够准确运行模型。因为你可以查看**阿里巴巴**“**通义**”模型的一些随机API，不同的人正在做各种技巧，比如量化，但也有许多其他技巧最终会降低模型质量。

<details>
<summary>Original English</summary>

**Dylan Patel**: Okay, well then you're going to have three months to figure out how to make a model work on one chip architecture for that point solution and it's fine. Software software advantage of **Nvidia** is not that important. Then **Jensen**'s super paranoid about losing and frankly it's really hard to hire enough talented chip people. When you look across the market, there is only a few companies who have successfully created a chip architecture software to run the models accurately, run the run the models accurately. Like because you can look at random APIs of say an **Alibaba** **Tongyi** model and different people are doing all sorts of tricks like quantizing it, but also many other tricks which then end up making the model quality lower.

</details>

**Dylan Patel**: 构建一个机架规模的解决方案，将数千个芯片连接起来，然后部署一个API，**Grock**用相对较少的人就完成了这一切。所以现在**英伟达**想制造四种不同的芯片架构，实际上是四种不同的点解决方案，可能是通用型，然后这里一个，那里一个，再一个。此外，我的通用型产品实际上不只是**GPU**芯片，它还包括**GPU**芯片、**CPU**芯片、网络芯片、**NVLink**网卡等，有很多很多芯片，每个芯片又有很多小芯片。你没有足够的工程资源。所以收购**Grock**就是你获得这些资源的方式，为市场的不同部分制造更多解决方案。

<details>
<summary>Original English</summary>

**Dylan Patel**: Building a rack scale solution, networking thousands of chips together and then deploying an API and **Grock** did the whole thing with frankly not that many people. So now it's like okay well I'm **Nvidia** I want to make four different chip architectures and actually four different point solutions maybe the general purpose and then one here one here one here and in addition my general purpose thing is actually not just like a **GPU** chip it's like **GPU** chips **CPU** chips networking chips **NVLink** NICs. There's many many chips and each of those chips has many chiplets you don't have enough engineering resources. And so acquiring **Grock** is how you get those resources to make more solutions for different parts of the market.

</details>

**Dylan Patel**: 至于他们是否受到威胁，我认为市场上显然有一些很酷的初创公司，正在大量融资，比如**Etched**、**Maddx**、**Positron**这些新一代AI公司。还有上一代的，比如**Cerebras**仍然存在，**Tenstorrent**等等。所以初创公司方面有很多AI芯片公司，但也有**Google**的**TPU**、**AMD**的**GPU**、**Amazon**的**Tranium**，它们都是非常有实力的竞争对手。然后**Meta**的**MTIA**也有些实力，而**微软**的**Somaya**目前还没有实力，但也许有一天会有。所以你有很多竞争，他们必须守住阵地。

<details>
<summary>Original English</summary>

**Dylan Patel**: As far as like are they threatened, I think obviously There's some cool startups out there that are raising a lot, currently or have raised such as **Etched**, **Maddx**, **Positron**, these new age of AI companies. There's also the prior age of like **Cerebras** is out there still. **Tenstorrent**, etc. And there's so there's a lot of AI chip companies on the startup side, but then there's also **Google**'s **TPU**, **AMD** **GPU**s, **Amazon** **Tranium**, who are all really credible competitors. And then **Meta**'s **MTIA** is somewhat credible. And then **Microsoft** **Somaya** is not credible but maybe it will be one day. So you sort of have a lot of competition they've got to hold the gates back and so I think.

</details>

**Matt Turk**: 他们是否面临风险？我的意思是，我提到的所有公司，以及加州/西雅图的这些公司都存在风险，世界上其他地方也有芯片公司。中国显然也有许多AI芯片公司正在做很酷的事情。任何人都会告诉你**Grock**的业务收入并不出色，事实上他们去年收入大幅下降，但他们还是被收购了，因为其**IP**和团队的价值在那里。其他人可能会说，我为什么要买这个？这毫无意义。确实存在可信的威胁。

<details>
<summary>Original English</summary>

**Matt Turk**: Is there a risk to them being I mean like there's there's risk from all of those companies that I mentioned and effectively California/ Seattle, only two two places there's there's also chips from other parts of the world obviously China has a number of different AI chip companies that are doing cool things anyone would have told you **Grock** was their business revenue their revenue was not stellar in fact they missed revenue last year significantly and yet they got bought because the value of the **IP** was there and the value of the team anyone else would have been like well why the heck would I buy this makes no sense there's definitely a credible threat.

</details>

**Matt Turk**: 是的，你认为**CUDA**会保持这种模式吗？我想是**CUDA**和**Mellanox**收购案中产生的任何东西的结合，它们会持续成为长期优势吗？

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah and do you think **CUDA** is going to remain that mode I guess a combination of **CUDA** and whatever came out of the **Mellanox** acquisition like do do those persist as long-lasting advantages.

</details>

### CUDA的演变与AI软件生态

**Dylan Patel**: 我认为它们会。我认为网络非常重要，**CUDA**软件模式也非常重要，但它也在迅速变化。**英伟达** **GPU**运行的软件中，有很大一部分并非来自**英伟达**，而是来自开源的开发者生态系统。例如，**VLM**和**SGLang**现在几乎将**AMD GPU**作为一等公民来支持。**VLM**正在获得对**TPU**和**Tranium**的显著支持，未来还会有其他初创公司推出的芯片也支持**VLM**和**SGLang**。

<details>
<summary>Original English</summary>

**Dylan Patel**: I think they do. I think networking is super important. I think the **CUDA** software mode is very important, but it's also changing rapidly. It's an incredible amount of the software that **Nvidia** **GPU**s run on is not from **Nvidia**. It's the developer ecosystem that's open sourcing it. When you look at, for example, **VLM** and **SGLang**, these support **AMD GPU**s almost as first class citizens now. And **VLM** is getting significant support for **TPU**s for **Tranium** and there will be other chips coming out from startups that also support **VLM**s **SGLang**.

</details>

**Dylan Patel**: 那么，这有多难呢？**CUDA**之所以如此重要，是因为我可以做任何我需要做的事情来编程**GPU**。

<details>
<summary>Original English</summary>

**Dylan Patel**: Now how difficult is it? The reason why **CUDA** is so important is like okay I can do whatever I need to do programming a **GPU**.

</details>

**Matt Turk**: 我认为大多数AI芯片不会被人们编程。

<details>
<summary>Original English</summary>

**Matt Turk**: I think most AI chips will not be consumed by people programming anything for it.

</details>

**Dylan Patel**: 他们会下载一个开源推理引擎，下载一个开源模型，然后把它放在上面。下载**VLM**并让它工作真的非常简单，设置服务器并不难。**英伟达**正在推出许多开源软件，比如**Triton**推理服务器和**Dynamo**等，以使其变得容易，因为这最终将是大多数AI的消费模式。它可能是我自己的推理引擎，但大多数服务器除了推理引擎和模型之外不会运行其他代码。研究人员实际上是在为**GPU**编写代码，以验证想法是否可行，训练模型，或者只是随意摆弄它们，以找出基础设施性能或其他什么。但大部分情况并非如此，所以**CUDA**作为一种模式，**CUDA**语言，就像，你知道，没有人真正编写**CUDA**，大多数人编写**PyTorch**，然后通过**torch.compile**在**GPU**上运行。

<details>
<summary>Original English</summary>

**Dylan Patel**: They will download an open source inference engine. And they will download an open source model and then they will put it on the and it's really simple to download **VLM** and make it work. It's not that hard to set up a server and **Nvidia**'s putting out a lot of open source software like **Triton inference server** and **Dynamo** and all these things to make it easy because that is the consumption model ultimately for the majority of AI. And it might be like oh it's my own inference engine but most servers will not run code besides the inference engine and the model. It's not like people are actually like researchers are writing code for **GPU**s to see ideas if they'll work and train models and all these things or just mess around with them to figure out infra performance or whatever it is but most of it won't be there and so **CUDA** as a mode **CUDA** language is like it's like fine. No one actually writes **CUDA**. Most people write **PyTorch** and then **torch.compile** and then they just run it on the **GPU**.

</details>

**Dylan Patel**: 他们不写**CUDA**，但很多这种**CUDA**模式是关于**PyTorch**如何转化为高性能**GPU**的。从人们编写硬核**CUDA**内核，到编写**PyTorch**然后编译到**GPU**，再到只是下载**VLM**，这是一个曲线。能编写**CUDA**内核的人不多，能编写**PyTorch**的人多得多，比如随机的博士生和普通人，这很简单。大量的人可以下载**VLM**并在服务器上运行。如果它现在支持其他芯片，那么**CUDA**模式已经认识到这一点，并且他们一直在构建不一定是**CUDA**模式的软件。我可以举一些例子。

<details>
<summary>Original English</summary>

**Dylan Patel**: They don't write **CUDA** but a lot of this **CUDA** mode is like how does **PyTorch** translate into high performance **GPU**s and that surface area from when people were just writing hardcore when people are hardcore writing **CUDA** kernels to like hey they're writing **PyTorch** and then it's compiling down to **GPU**s versus oh I'm just downloading **VLM** is it is a it is a curve of like not a ton of people that can do **CUDA** kernels a whole lot more people can do **PyTorch** random PhDs and random people it's very simple a crapload of people can do **VLM** download it run it on a server well if it now supports other chips what is the **CUDA** mode's recognized this and they've been building software that is not necessarily the **CUDA** remote and I I can give some examples.

</details>

**Dylan Patel**: 好的。所以游戏的关键是快速的token和最低成本的token。最低成本的token是通过你的芯片速度快来实现的。但也有一些技巧。一个例子，就像我提到的**CPX**与**Grock**，是处理你的预填充上下文。超便宜的**CPX**，如果我非常关心速度，那么就是**Grock**。这些是硬件侧的优化。软件侧也有优化。

<details>
<summary>Original English</summary>

**Dylan Patel**: All right. So the name of the game is fast tokens and lowest cost tokens. And lowest cost tokens happens by your chip being fast. But there's also tricks. One example, like I mentioned with the **CPX** versus **Grock**, is processing your prefill contacts. Super cheap **CPX**, if I'm if I'm care a lot about speed, then **Grock**. These are optimizations on the hardware side. There's optimizations on the software side as well.

</details>

**Dylan Patel**: 所以一个例子是，当我处理**Claude Code**或**Cursor**这类应用时，工作负载是这样的：它获取你的代码库，提取相关部分，放入**LLM**的上下文，然后提示它生成。如果是在代理模式下，它会循环上下文几次，折叠，将一些东西放在一边，访问不同的上下文。但当你想到一个软件代理时，你可以在**Codex**中看到这一点。**Codex**实际上不如**Claude Code**好，但它可以在9到10小时的时间范围内工作，并且比**Claude Code**更好地进行大型重构，尽管大多数时候**Claude Code**更好。

<details>
<summary>Original English</summary>

**Dylan Patel**: And so one example is when I'm doing for example if I look at a **Claude Code** or a **Cursor** type application, the workload is like it takes your repo, takes the relevant parts of your repo, puts it in the context of the **LLM**, it prompts it, generates. And if it's an agent mode, it circulates the context a couple times, it'll collapse, put things off to the side, access different contexts. But what's especially when you think about an agent for software and you can see this in **Codex**, **Codex** actually not as good as **Claude Code**, but it can do work on time horizons of like 9 10 hours. And do like a big refactor better than **Claude Code** can, even though most of the times **Claude Code** is better.

</details>

**Dylan Patel**: **Codex**有趣的地方在于，它会获取你的代码库，如果你要求它重构，它会识别部分，编写东西，为自己到处做笔记，折叠上下文，从代码库的这一部分切换到那一部分，再到这一部分。但当你想到它时，你会觉得，如果这个东西一直在生成token，而且它还在不断切换我的上下文，那会非常昂贵。如果你考虑推理的成本，我想说输出每百万token是10美元，解码是10美元，预填充是3美元。所以如果你想到，它只在一个任务上工作了9个小时，一次重构，价值巨大。但如果它改变了上下文很多次，而你的上下文通常是30k或50k，或者甚至达到数十万，取决于你的代码库有多大以及上下文切换的次数，那么你就会在预填充上花费大量金钱，而不是解码token。

<details>
<summary>Original English</summary>

**Dylan Patel**: And what's interesting about **Codex** does is it'll take your repo, it'll identify parts if you're asking it to refactor it, identify parts, write stuff, make like these notes for itself everywhere, collapse the context, switch from this part of the repo to that part of the repo to this part of the repo. But when you think about it, it's like, oh, if this thing is just generating tokens all the time, plus it's switching what my context is constantly, that's really expensive. If you think about what's the cost of inference, I want to say it's like it's $10 per million tokens of output and or and $3 for decode or 10 for decode and three for prefill. And so if you think about, oh, it just worked for nine hours on one task, one refactor, huge value. But if it changed context a ton of times and your context is like 30k usually or 50k or heading to hundreds of thousands, how big your repository is and how much context switch now you're spending all this money on prefill, not the decode tokens.

</details>

**Dylan Patel**: 实际上，我为什么要重新生成**KV缓存**？我可以直接将**KV缓存**存储在其他地方，然后在需要时再次拉取并放入**CPU**内存或**GPU**内存。所以**英伟达**有这个**KV缓存管理器**，他们一直在努力使其能够与**SSD**接口，并将**KV缓存**存储在上面，随时取出。对于这种工作负载，如果你这样做，然后你将编码视为一个应用程序，并查看这些编码公司在预填充和解码上花费了多少钱，实际上他们的大部分成本是预填充token，而不是解码token，因为他们的上下文太大了，而且即使在代理模式下也在不断切换。如果你现在可以不用预填充，你的成本会大幅下降。

<details>
<summary>Original English</summary>

**Dylan Patel**: But actually why am I regenerating the **KV cache**? I can actually just store the **KV cache** elsewhere and then when I need it again I can pull it and plop it into **CPU** memory or into **GPU** memory. And so **Nvidia**'s got this **KV cache manager** and they've been working really hard on making it so they can interface **SSD**s and stick the **KV cache** on there and pull it out whenever they want. So for this kind of workload and then if you do this and you look at like coding as an application and you look at these coding companies and how much they're paying for prefill versus decode actually majority of their cost is pre-fill tokens not decode tokens because their context is just so large and it's switching all the time even in agent modes. If you can now not have to do the pre-fill, your costs go down dramatically.

</details>

**Dylan Patel**: 但从软件角度来看，这是一件非常复杂的事情。**Anthropic**、**Google**、**OpenAI**等公司已经做到了。但对于更广阔的世界呢？所以**英伟达**正在努力为此开发开源软件。这就像**CUDA**模式，但实际上，这都不是**CUDA**，它更像是内存管理、存储管理，以及何时调用什么、如何传输、如何将**KV缓存**分散到一堆不同的存储节点，以及读取时会发生什么、网络拥堵等所有这些事情。是的，这就像**英伟达**的专长，但它不是**CUDA**。我认为简单的说法就是它是**CUDA**模式。

<details>
<summary>Original English</summary>

**Dylan Patel**: But that's a very complicated thing to do from a software perspective. Companies like **Anthropic**, **Google**, **OpenAI** have already done it. But what about the wide world? And so **Nvidia** is trying to make the open source software for this. And that's like **CUDA** mode, but it's like actually no, none of this is **CUDA**. It's like memory management and storage management and when do you call what and how do you transfer it and how do you spread the **KV cache** across a bunch of different storage nodes and what happens when you read it and the network congestion just like all these things. Yeah, it's like **Nvidia**'s wheelhouse but it's not **CUDA** and I think like the easy way to say it is it is the **CUDA** mode.

</details>

**Dylan Patel**: 所以像**KV缓存管理器**和许多其他他们正在努力降低推理成本的事情，就是他们构建新**CUDA**模式的方式。因为今天，**AMD**还没有完全到位，**TPU**正在添加中，**Tranium**也很快会添加到**VLM**中。但我认为到今年年中，所有这些都将在**VLM**上提供非常好的用户体验，用于下载和运行模型。当然，**AMD**已经做到了。到本季度末，我们有一个测试这个的东西，叫做**Inferencemaxa**，它是开源的，所有代码和结果都是公开的。

<details>
<summary>Original English</summary>

**Dylan Patel**: And so things like this **KV cache manager** and many other things they're trying to do to reduce the cost of inference is how they build the new **CUDA** mode because again today it's it's it is quite I mean **AMD** is not fully there yet and **TPU** is being added right now and **Tranium** is being added soon as well to **VLM** but all of them will have a very good UX for download model run model on **VLM** by the middle of the year I think. Certainly **AMD** is already there by the end of this quarter we have something that tests this. It's called **Inferencemaxa**. It's open source all the code is and the results are.

</details>

**Dylan Patel**: 但我们运行了价值6000万美元的**GPU**，这些**GPU**由**英伟达**、**AMD**、**OpenAI**、**微软**、**亚马逊**、**Crusoe**、**CoreWeave**、**Together AI**等公司捐赠给我们。我们每晚在九种不同类型的**GPU**上，针对各种不同模型和不同上下文长度运行**VLM**和**SGLang**，以查看性能。你可以看到性能每天都在变化，或者说经常变化，因为软件一直在变。所以，这种东西的存在就是**CUDA**的优势。并不是说**AMD**可以在他们的芯片上做到这一点，**英伟达**也可以在他们的芯片上做到这一点。而是当新模型发布时，它能多快达到峰值性能？因为这是一个移动的目标。或者，我能多容易地实现这个**KV缓存管理**功能？我需要多少工程师？一个就够了，太棒了！或者10个，太棒了！如果我需要像**Google**那样一百个人来开发它，那就难多了。

<details>
<summary>Original English</summary>

**Dylan Patel**: But we run across I think $60 million of **GPU**s which are donated to us by companies like **Nvidia**, **AMD**, **OpenAI**, **Microsoft**, **Amazon** on **Crusoe**, **CoreWeave**, **Together AI**. All these companies are sponsoring **GPU**s for us to run this. We're running **VLM** and **SGLang** every night on nine different kinds of **GPU**s on a variety of different models and different work context lens and all these things, to see the performance and you can see the performance moving every day or pretty often because the software changes all the time. And so the fact that this exists is the **CUDA** boat. It's not that **AMD** you can do this on their chips, **Nvidia** can do this on their chips. It's oh when the new model comes out, how fast does it get to peak performance? Because it's a moving target or hey can I implement this **KV cache management** thing how hard is it how many engineers do I need oh just one great or 10 great if I need a hundred people to develop it like **Google** and so on and so forth did then that's much harder.

</details>

**Matt Turk**: 你认为**AMD**能赶上吗？

<details>
<summary>Original English</summary>

**Matt Turk**: Do you think **AMD** can catch up?

</details>

**Dylan Patel**: 我认为**AMD**有时会赶上，有时会远远落后。目前他们远远落后，因为**Blackwell**比**MI355**好太多了。然后**Rubin**出来后，他们会远远落后，但随后**AMD**的新芯片出来，**AMD**在硬件方面会赶上甚至稍微领先。软件方面是落后的。你看到这种跳跃式发展，**AMD**是一个非常有实力的第二竞争者。我不认为他们会超越，我认为他们会保持在个位数市场份额。

<details>
<summary>Original English</summary>

**Dylan Patel**: I think **AMD** will be caught up at times and very behind at other times. Currently they're super far behind because **Blackwell** is just way better than **MI355**. And then **Rubin** comes out and they'll be way, way behind but then **AMD**'s new chip comes out and **AMD** will be caught up or evenlightly ahead on a hardware perspective. Software's behind. And you have this leapfrogging and **AMD** is a very credible second competitor. I don't think they'll go beyond like I think they'll stay in single digits market share. Single digit percentage market share.

</details>

**Matt Turk**: 个位数的市场份额。

<details>
<summary>Original English</summary>

**Matt Turk**: Single digit percentage market share is.

</details>

**Dylan Patel**: 仍然相当不错。

<details>
<summary>Original English</summary>

**Dylan Patel**: Still [laughter] pretty good.

</details>

**Matt Turk**: 是的。我的意思是，**英伟达**今年的营收将达到。

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah. I mean, **Nvidia**'s revenue this year is going to be like.

</details>

**Dylan Patel**: 很多。

<details>
<summary>Original English</summary>

**Dylan Patel**: It's a lot.

</details>

**Matt Turk**: 三万亿美元。

<details>
<summary>Original English</summary>

**Matt Turk**: The three gajillion dollars.

</details>

**Dylan Patel**: 我认为实际上是四万亿美元。

<details>
<summary>Original English</summary>

**Dylan Patel**: I think it's actually four gajillion. [laughter]

</details>

**Matt Turk**: 那么所有这些初创公司呢？你提到了几家。一端是**Cerebras**，另一端是**Etched**等新公司。如果**AMD**面临一场艰苦的战斗，你认为这些公司能获得显著的市场份额吗？

<details>
<summary>Original English</summary>

**Matt Turk**: What about all the startups? You mentioned a few. So there's a **Cerebras** on the one end of the spectrum and then newer ones **Etched** and others if if **AMD** has a uphill battle in front of them like do you think those guys can take significant market share?

</details>

### AI芯片初创公司的挑战与机遇

**Dylan Patel**: 这就是整个专业化游戏。你必须专业化，因为你永远无法在**英伟达**自己的游戏中击败他们。他们会拥有供应链优势，他们会比你更快地获得最新的内存技术、工艺技术或封装技术，无论是什么，他们都会碾压你。如果你玩他们的游戏，**AMD**正在努力玩**英伟达**的游戏，但**AMD**在硅工程方面非常出色。其他人必须尝试一些奇怪或不同的东西。

<details>
<summary>Original English</summary>

**Dylan Patel**: You sort of the whole specialization game. You you have to specialize because you're never going to beat **Nvidia** at their own game. They're going to have the supply chain unlock. They're going to get to the newest memory technology or process technology or whatever packaging technology, whatever it is, sooner than you and they're just going to crush you. If you play their game, you have to **AMD** is trying to play **Nvidia**'s game, but **AMD** is extremely good at engineering silicon. Everyone else has to has to has to try something weird or different.

</details>

**Dylan Patel**: 所以当你看到**Etched**、**Maddx**、**Positron**、**Cerebras**或**Tenstorrent**这些公司时，它们都有独特之处，但目前尚不清楚当它们问世时，AI模型是否仍会处于那个领域。现在人们使用**N-gram**和其他稀疏注意力技术，这是否会改变人们正在做的一些专业化？或者现在人们正在做稀疏模型而不是密集模型，这是否会改变事情？模型方面有太多的优化和变化，你无法轻易预测**ML**研究会发生什么。你今天优化的目标必须是对两年后AI发展方向的愿景。

<details>
<summary>Original English</summary>

**Dylan Patel**: And so when you look at **Etched** or **Maddx** or **Positron** or **Cerebras** or **Tenstorrent**, you go to look at all these companies. There are unique things about what they're doing and it's not clear if AI models will still be within that realm when that comes out. Does now people use **N-gram**s and other sparse attention techniques. Is that does that change like some of the specializations people are doing or hey people are now doing models are now sparse instead of being dense models does that change things there's so many optimizations and changes on the model side and you can't predict what's going to happen with the **ML** research easily at least you can't the thing you're optimizing for today has to be a vision of where AI will be in 2 years.

</details>

**Dylan Patel**: **英伟达**完全接受他们不知道未来会怎样，这就是为什么他们现在拥有一个芯片组合，而不仅仅是一条**GPU**产品线。它不再只是**Hopper**、**Blackwell**、**Rubin**。现在它将是各种芯片来服务不同的市场和不同的可能场景。他们认为今天每个芯片都有这个愿景，但它可能会变成通用芯片很糟糕，而AI模型以**CPX**或**Grock**风格的芯片是最好的方式发展。那么，我们现在就有了针对那个市场的解决方案。

<details>
<summary>Original English</summary>

**Dylan Patel**: And **Nvidia**'s fully accepted they don't know where that's going to be that's why they have a portfolio of chips now not just one **GPU** line. It's not just **Hopper**, **Blackwell**, **Rubin**. Now, it's going to be, it's not **Ampere**, **Hopper**. It's like there's a variety of chips to serve the different markets and different possible scenarios. They think each of them has this vision today, but oh, it might turn out the general purpose one sucks and and actually AI models have developed in a way where **CPX** or **Grock** style chips are the best. Well, okay, now we have a solution for that market.

</details>

**Dylan Patel**: 所以，我认为这就是初创公司面临的挑战。话虽如此，我认为他们都在进行非常有趣的押注。我认为这比第一波AI硬件押注要令人兴奋得多。**Graphcore**将内存带到芯片上，他们只是做了一个押注，并针对某种模型进行了优化，都是类似的模型，但很长一段时间都没有奏效。他们不得不转型，不得不做很多事情，花了很多时间。我认为这些公司对模型未来的样子有一个非常清晰的愿景，比如**Etched**、**Maddx**、**Positron**，这正是这些新一代公司最酷的地方。所以，我为他们感到兴奋。我非常非常怀疑。我不知道风险投资家认为成功的可能性有多大，但我认为所有这些公司的可能性都不到1%。

<details>
<summary>Original English</summary>

**Dylan Patel**: And so, I think that's the challenge with the startups. With that said, I think they're all taking very interesting bets. I think it's I think it's much more exciting than the first wave of AI hardware bets **Graphcore** bringing the memory on the chip they sort of just made a bet and they optimized for a certain kind of model all similar kinds of model and it didn't end up working out for a long time they had to pivot and they had to work on a lot of things and it took a long time I think these companies have like a really clear vision of what they think models will look like like **Etched** does **Maddx** does, **Positron** does, and that's what's really cool about it between the three of them, these new age. So, I mean, I'm I'm excited for them. I'm very very skeptical. I don't know what a venture capitalist views as likely chances of succeeding, but I think all of them are less than 1%.

</details>

**Matt Turk**: 但他们获胜的世界是一个多硅的世界，任何客户都会使用一系列不同的**GPU**。

<details>
<summary>Original English</summary>

**Matt Turk**: But the world where they win is a multi-silicon kind of world where any given customer uses a range of different **GPU**s.

</details>

**Dylan Patel**: 可能是，也可能是任何客户都非常关心一个工作负载。**Anthropic**显然不关心视频生成或图像生成，他们就是不关心。另一方面，像**Midjourney**这样的公司非常关心图像和视频生成。图像和视频生成，就像我提到的，它对内存带宽要求不高，它非常喜欢计算。而像编码代理这类大型语言模型的推理，则非常关心长时间流的解码，这非常依赖内存带宽。这只是一个简单的例子，但在这方面还有更多的细微差别，比如矩阵乘法的大小，你使用的**Tensor Core**或**Systolic Array**，或者网络和内存的比例，内存层次结构是什么样的，以及你对不同类型的注意力机制做了什么等等。

<details>
<summary>Original English</summary>

**Dylan Patel**: It could it could or it could be any given customer has like one workload they care a lot about. **Anthropic** clearly does not give a crap about videogen image gen, they just don't care. On the flip side, company like **Midjourney** cares a lot about image and videogen. Image and videogen is very, like I mentioned, it's a very it's not very memory bandwidth heavy. It loves loves loves compute. Whereas inference of large language models in the style of like these coding agents cares a lot about decoding for long streams of time. And that's very memory bandwidth heavy. And so there's like that's like a simple example, but there's a lot more nuance there in terms of like even like the size of like the matrix multiply, the **Tensor Core**s that you you know the **Systolic Array**s that you use or the ratios of networking and memory memory and like what's that memory hierarchy look like and what are you doing for different kinds of attention and like all these sorts of things.

</details>

**Dylan Patel**: 这里有很多专业化，所以有些人正在对不同类型的专业化进行大赌注。我认为你可以清楚地看到一个世界，公司确实关心不同的东西。例如，如果今天存在一个针对视频和图像生成优化的芯片，并且它比**英伟达**的更好，或者**英伟达**制造了它。我认为**Midjourney**在推理方面绝对只会使用它。我认为在训练方面，他们仍然会使用通用型芯片，**Meta**和**Google**也会这样做，他们应该这样做。**Meta**实际上有两条AI芯片产品线。**MTIA**有一条专注于推荐系统，另一条专注于生成式AI。生成式AI是新产品线，但推荐系统产品线仍在继续。它不性感，没人关心，因为没有。

<details>
<summary>Original English</summary>

**Dylan Patel**: There's a lot of specialization here and so some people are betting big on on different types of specialization and I I think like you could clearly see a world where companies do care about different stuff. Like if for example a chip optimized for video and image generation existed today and it was better than **Nvidia** or **Nvidia** made it. I think **Midjourney** would absolutely only use that for inference. I think for training they'd still use the general purpose thing and as would like **Meta** and **Google** would like they should do that. And hey, **Meta** actually has two lines of AI chips there. **MTIA** there's a line that's focused on recommendation systems and then there's a line that's focused on Gen AI. The Gen AI one is a new line, but that recommendation systems line is still continuing. It's not sexy. No one cares because there's no.

</details>

**Dylan Patel**: **字节跳动**也有推荐系统芯片产品线，它并不真正专注于通用AI，这没关系，因为这是一个2000亿美元的业务，它只是决定给我推送什么广告，以及以什么顺序显示我朋友的故事等等。所以，我认为只要目标市场足够大，存在专业的AI芯片是完全可以的，你必须有远见才能知道那个目标市场是什么，除非你是超大规模公司，那样你就可以一直使用通用型芯片，直到它明确存在，然后你就可以制造你的**ASIC**。

<details>
<summary>Original English</summary>

**Dylan Patel**: And **ByteDance** also has a recommendation system line of chips and it's not really focused on Gen AI which is fine because this is a $200 billion business or something which is just deciding what ad to serve me and what order to put my friends stories and things like this. So I think like it's perfectly fine for there to be specialized AI chips given the target market is big enough and you have to have vision to know what that target market is unless you're hyperscaler then you can just use general purpose until you've like it's clearly there and then you can make your **ASIC**.

</details>

### 地缘政治与中国半导体产业

**Matt Turk**: 有趣的是，我们转向所有这些的地缘政治方面，这总是很有趣。去年，**华为**和**英伟达**在中国的总收入中占10%或12%，今年他们说他们的市场份额基本上已经降到微不足道了。这是**华为**芯片的原因吗？是限制吗？是关税吗？发生了什么？

<details>
<summary>Original English</summary>

**Matt Turk**: Fascinating turning to the geopolitical aspect of of all of this which is always fun. **Huawei** and **Nvidia** in China last year that was like 10 or 12% of their overall revenue and this year they they were saying that their market share has basically dropped to not very much. Is that **Huawei** chips? Is that restrictions? Is that tariffs? What's happening?

</details>

**Dylan Patel**: 实际上是多种因素。去年有些季度，这个数字甚至超过20%，但我记不清具体了。无论如何，如果你看2022年，中国在购买服务器硬件方面几乎与美国规模相当，几乎，但还没完全达到，但正在接近。看起来他们将在之后一两年内达到与美国相同的规模。如果你看全球数据中心容量、全球云容量等等，都是美国公司和中国公司主导世界。美国公司显然在这里做得更好，但这两者都主导着世界。如果你看每个行业，很明显中国想要自给自足。

<details>
<summary>Original English</summary>

**Dylan Patel**: It's a variety of things actually in in some in some quarters last year. It was even north of 20 I think but I don't remember exactly but anyways if you look at 2022 China was almost the size of the US in terms of buying server hardware almost not quite but getting there and it looked like they were going to be the same size as America in like a year or two after that. And if you look at like global data center capacity global cloud capacity etc etc etc it's American companies and Chinese companies that dominate the world American companies obviously doing a lot better here but both of those dominate the world and if you look at like every industry, it's very clear that China wants to insource stuff.

</details>

**Dylan Patel**: 所以在2015年，他们制定了2020年和2025年的五年计划，设定了他们希望国内生产的半导体百分比，两次都未能实现目标，这没关系。他们设定了非常积极的目标，即使射向月亮，如果错过了，也能击中星星。这就是发生的情况。中国在尖端半导体方面还没有赶上，但中国的微控制器几乎和**德州仪器**或**意法半导体**的微控制器一样好，而且更便宜。或者这种随机的电源芯片比另一家公司的更好或相同。所以他们确实建立起了半导体产业，并开始更多地自给自足。

<details>
<summary>Original English</summary>

**Dylan Patel**: So in 2015, they made these 5-year plans for 2020 and 2025 where they set the percentage of semiconductors they wanted domestically produced and they've missed the goal both times which is fine. They set really aggressive goals and even shoot for the moon even if you miss you hit the stars. And that's sort of what's happened. Like look, China is not caught up on leading edge semiconductors, but microcontrollers from China are almost as good as the microcontrollers are as good and cheaper than the ones from **Texas Instruments** or **ST Micro** or etc. Or like this power random power chip is better than or the same as the one from like another company. And so they've really built up a semiconductor industry and started insourcing a lot more.

</details>

**Dylan Patel**: 我不明白为什么中国不购买全球30-40%的AI芯片，而美国购买50-60%，然后世界其他地区购买剩余部分。当我提到美国时，我指的是美国本土公司。这似乎是世界更自然的状态，但存在限制。这是人类历史上可能最大的变化，知识工作，以及将要发生的一切，最终还有机器人技术等。显然有很多地缘政治因素，所以存在限制。**英伟达**一直被限制向中国销售他们最好的芯片。这显然对销售产生了很大影响，因为你为什么要这样做？

<details>
<summary>Original English</summary>

**Dylan Patel**: I don't see why China wouldn't be buying 30-40% of the world's AI chips and the US like 50-60% and then the rest of the world. And when I say US I mean US origin companies that seems like a more natural state for the world but there are restrictions and hey this is the biggest change in human history maybe ever knowledge work and everything that's going to happen there and then eventually like robotics and all these things. Obviously there's a lot of geopolitical stuff and so there are restrictions **Nvidia**'s been handicapped from selling their best chips to China. And so that's obviously impacted the sales a lot because why would you do that?

</details>

**Dylan Patel**: 所以当你看看世界上租用**GPU**最多的公司是谁时，有三家。其中一家显然是**OpenAI**。第二家，实际上他们比**OpenAI**更大。他们今天比**OpenAI**更大，或者不，他们曾经比**OpenAI**更大，**OpenAI**最近超越了他们，是**字节跳动**。**字节跳动**从**Oracle**和**Google**以及许多其他云公司租用了大量的芯片，因为他们无法在中国获得所需的芯片。他们主要只是为**TikTok**提供服务。他们不被允许购买，这很糟糕，但他们被允许租用。所以，如果我不被允许获得最好的芯片，我就会从外部租用。如果**字节跳动**是世界上第二大**GPU**租用者，那是在许多情况下替代了本应在中国建立的需求。

<details>
<summary>Original English</summary>

**Dylan Patel**: And so when you look at who rents the most **GPU**s in the world, it's three companies. So one of them is obviously **OpenAI**. Second one, actually they were bigger than **OpenAI**. They are bigger than **OpenAI** today or no, they were bigger than **OpenAI** than **OpenAI**. Eclipsed them recently is **ByteDance**. **ByteDance** runs rents tons of chips from **Oracle** and **Google** and many other cloud companies because they couldn't get the chips they need in in China. They're mostly just serving **TikTok**. Okay. Well, they they're not allowed to buy them and that sucks, but they're they're allowed to rent them. And so, okay, if I'm not allowed to get the best ones, I'm going to rent externally. And if **ByteDance** is the second biggest renter of **GPU**s in the world, that's substituting demand that would have been built in China in many cases.

</details>

**Dylan Patel**: 相反，它正在马来西亚建设。**Oracle**在马来西亚拥有超过1千兆瓦的容量，**字节跳动**将占据这些容量。所以，像这样的事情，是数十万甚至数百万芯片，数百亿美元的产能，本应流向中国，但现在没有。例如，它转而流向了马来西亚。另一个关于这一点是，中国有这些五年计划。这些中国倡议的运作方式是，有一些自上而下的命令，但随后他们就会带动整个国家都投入其中，这真的很酷。我不认为它像许多人想象的那样是自上而下的。我认为整个国家都像“半导体狂热”一样。

<details>
<summary>Original English</summary>

**Dylan Patel**: It's instead being built in Malaysia. And **Oracle** has over a gigawatt of capacity in Malaysia that **ByteDance** is going to take. So, things like this are, you know, hundreds of thousands, if not millions of chips, tens of billions of dollars of cap capacity that would go to China, but it's not. That it's going to Malaysia instead as an example. Another sort of point around this is China's like they've had these 5-year plans. So and you know the way these initiatives work from China is there is like some top down ordering but then they just kind of whip the whole like everyone just kind of gets into it and it's really cool like I don't think it's as top down as many people think. Like I think the entire country is like semiconductor pill.

</details>

**Dylan Patel**: 有些电视剧里，人们在晶圆厂里坠入爱河，或者人们坠入爱河，他们是光伏太阳能电池研究员和工程师。这就像，这只是背景，但实际上，你的另一半是半导体工程师或光伏太阳能电池研究员，这超级酷。

<details>
<summary>Original English</summary>

**Dylan Patel**: There are dramas where people fall in love in the fab or dramas where people fall in love and they're photovoltaic like solar cell researchers and engineers and it's like it's like this is just the backdrop and it's like actually this is it's like super cool for your like significant other to be that semiconductor engineer or to be that photovoltaic solar panel researcher.

</details>

**Matt Turk**: 而不是网红。

<details>
<summary>Original English</summary>

**Matt Turk**: As opposed to an influencer.

</details>

**Dylan Patel**: 而不是网红。是的。抱歉，**《爱情岛》**，我被迫看了10分钟。我觉得这太糟糕了。

<details>
<summary>Original English</summary>

**Dylan Patel**: As opposed to an influencer. Right. Like I'm sorry. **Love Island** is I I I watched like for 10 minutes cuz I was forced to. I was like this is freaking terrible.

</details>

**Matt Turk**: 我们完蛋了。

<details>
<summary>Original English</summary>

**Matt Turk**: We are so cooked.

</details>

**Dylan Patel**: 不，我们完蛋了。我们真的完蛋了。我认为，当你想想这种情况发生时，它已经渗透到电视剧中，甚至人们，有几部电视剧是关于半导体行业的，它们是浪漫喜剧，涵盖了整个范围。戏剧，这到底是怎么回事？

<details>
<summary>Original English</summary>

**Dylan Patel**: No, you know [laughter] seriously we're cooked. We're cooked. And I think I think like when you think about like this happens it's like it's diffused into drama even people like like there's multiple dramas like taking place about semiconductor industry and and they're like romance comedy like the entire spectrum, right? Drama like it's like it's like what the heck is going on?

</details>

**Dylan Patel**: 无论如何，你有所有这些省份，所有这些地方城市都在制定法规，发放补贴，以及各种各样的东西。这真的很疯狂。有一些国家层面的东西，比如“哦，这个免税。哦，我们要禁止一些东西。”但据我所知，国家政府没有禁止**英伟达**的**H20**或**H200**。但地方政府禁止了。许多地方政府都说：“不，你必须使用中国制造的芯片。”这就像，谁告诉你，你在这里是为了维护这个？这重要吗？我的意思是，这很酷，因为你有了这种适者生存的竞争，所有这些省份和城市都在试图用不同类型的补贴、拨款和工业园区等各种不同的东西来吸引不同的公司。

<details>
<summary>Original English</summary>

**Dylan Patel**: Anyways, you have all these provinces, you have all these local cities studying out ordinances and giving out subsidies and all sorts of stuff. It's truly like crazy. Like there's some national level stuff like, "Oh, no taxes on this. Oh, we're going to ban a few things." But as far as I understand, the national government has not banned **Nvidia**'s **H20** or **H200**. But the local ones have. A lot of local ones have said, "No, you must use China manufactured chips." And it's like, who told you that, you know, you're here to uphold this? It's like, does it matter? I mean, like, it's it's it's cool because then you have this like survival of the fittest, all these all these provinces and cities are trying to attract different companies with different types of subsidies and grants and industrial parks and like all these different things.

</details>

**Matt Turk**: 然后那些成功者实际上发展了一个行业，并接管了它。

<details>
<summary>Original English</summary>

**Matt Turk**: And then like the ones who succeed actually develop an industry and they take over.

</details>

**Dylan Patel**: 这就是人们对中国的看法。这听起来更像是美国，或者联邦政府和各州，各省对他们的采购拥有权力。这实际上很棒。有一个**TikTok**或**Instagram**上的网红，他们会唱歌。他们说，如果你想在中国买东西，一定要去对的地方。然后他们就说出最随机的东西并命名城市。然后你深入了解，你会发现，哇，这个城市拥有这个产品的整个供应链。比如灯罩，然后它命名城市。这到底是什么鬼？有一个城市专门生产灯罩。这就像，还有麦克风臂，麦克风。这就像，中国真的有一个城市专门生产。

<details>
<summary>Original English</summary>

**Dylan Patel**: This how one thinks of of China. It almost sounds like more like the US or like with the federal government and states where the provinces have authority over their purchasing. It's It's actually great. There's this one **TikTok** or not **TikTok**, **TikTok** and **Instagram** like person and they're like they they like sing it. They're like if you want to if you want to buy things in China, make sure you go to the right place. And then they just say the most random [ __ ] and name the city. And then you look into it and you're like wow this city has the entire supply chain for this. Um and it's like lampshades and then it names the city. It's like what the [ __ ] There's a city that specializes in lampshades. Like it's like and it's like microphone arms like microphones. It's like it's like literally there's a city in China that specializes in.

</details>

**Matt Turk**: 还有吉他，对吧？有一个城市成为了世界吉他之都。

<details>
<summary>Original English</summary>

**Matt Turk**: Guitars as well, right? This one one city that became the guitar capital of the world.

</details>

**Dylan Patel**: 简直是包罗万象。

<details>
<summary>Original English</summary>

**Dylan Patel**: It's literally everything.

</details>

**Dylan Patel**: 简直是包罗万象。有一个城市，它不是说专门生产相机臂，例如，这里有滚珠轴承，滚珠轴承，有多个生产相机臂滚珠轴承的制造商。

<details>
<summary>Original English</summary>

**Dylan Patel**: Literally everything. There's a city and it's not like hey specifically for camera arms for example, there's ball bearings in this and the ball bearings are like there's ball bearings. There's multiple manufacturers of ball bearings for camera arms.

</details>

**Matt Turk**: 然后世界上大部分相机臂都来自那个城市。这到底是怎么回事？所以，我认为人们没有意识到半导体行业是极其专业化的。我没有回答你的问题，我只是有点跑题，因为我认为人们不了解中国半导体，或者说普遍不了解半导体。

<details>
<summary>Original English</summary>

**Matt Turk**: And then like most of the camera arms in the world come from that one city. It's like what the hell is going on? And so like the semiconductor industry I think people don't realize is absurdly specialized. I'm not answering your question. I'm just going a little bit of a rant because I think people don't understand China semiconductors. It's really sick or semiconductors in general.

</details>

**Dylan Patel**: 但在日本，他们专注于几种不同类型的化学品，并且在这方面是最好的，这几乎是一种文化现象。日本人对寿司非常精确，注重技艺和工艺。日本的法国菜比法国的法国菜更好，因为日本厨师去法国学习，然后回到日本将其完善，因为他们非常精确，日本在很多方面都非常出色，因为他们非常精确，并且专注于工艺。这可能源于武士文化或其他什么，我不知道这种文化是如何形成的。

<details>
<summary>Original English</summary>

**Dylan Patel**: But like in Japan they like focus on a few different types of chemicals and they're the best at it and it's like almost a cultural thing. Japanese people were so precise like with sushi and like it's all about the trade and the craft and like the French food in Japan is better than the French food in France because the Japanese chefs went there and then come back and they perfected it in Japan and like because they're so precise and and there's so many different like things that like Japan is so good at because they're so precise and like dedicated to the craft and it comes out of like I don't know like samurai culture or something I don't know how that culture came up.

</details>

**Dylan Patel**: 所以当你放眼全球，你会发现不同地方发生着类似的事情。荷兰制造**EUV**工具。好吧，我想是这样。当你审视半导体行业时，有一篇著名的经济学文章叫做**《我是一支铅笔》**，它讲述了一支简单的铅笔是如何制造出来的：橡皮擦的橡胶来自印度尼西亚，石墨来自这里的矿山，木材来自加拿大的白杨树。你实际上无法在不整合整个供应链的情况下制造一支铅笔。半导体行业更加疯狂，因为我想说有15到20个国家可以关闭整个半导体行业。甚至奥地利也可以。这就像什么？是的，那里有两家公司在某些随机的利基产品中拥有90%的市场份额。

<details>
<summary>Original English</summary>

**Dylan Patel**: And so when you look at like and it's like across the world there's different places where things like this happen. Like the Netherlands makes **EUV** tools. Cool. I guess so. And you look across the semiconductor industry. There's a famous economic essay called **I Pencil** or something like that. Or talking about how the pencil like a simple pencil comes from like oh the rubber comes from like Indonesia for the eraser and the graphite comes from this mine here and and the wood comes from these aspen trees in Canada and like you actually can't make a pencil without aggregating this entire supply chain. Semiconductor industry is way crazier because like I would say there's like 15 or 20 countries that could shut down the entire semiconductor industry. Even like Austria could. And it's like what? And it's like well yeah, there's two different companies there who have like 90% share in like some random niche stuff.

</details>

**Matt Turk**: 就像，好吧，太酷了。我想奥地利可以做到。是的，那两家公司的收入还不到10亿美元，但它们恰好拥有关键的枢纽产品。而且到处都有关键的枢纽产品，因为这个过程太复杂了。所以中国一直在努力复制这一点。

<details>
<summary>Original English</summary>

**Matt Turk**: And it's like okay, cool. I guess Austria can and oh yeah, those two companies only like have less than a billion of revenue, but they just happen to have lynchpin critical things. And there's lynch pin critical things everywhere because the process is so complicated. And so China's been trying to replicate this.

</details>

**Matt Turk**: 他们是否缺少什么还没有的东西？

<details>
<summary>Original English</summary>

**Matt Turk**: Is there one thing they're missing that they don't have yet?

</details>

**Dylan Patel**: 我认为有很多。我认为如果你闭上眼睛说，或者如果你切断所有国家，说不再有全球化，中国今天在半导体领域拥有最垂直的堆栈，他们在世界上是最好的半导体公司，因为他们的晶圆厂在很多方面仍然可以运行，因为他们已经建立了一些化学品供应链。**台积电**在某些化学品方面100%来自日本。或者**英特尔**也是如此。或者在某些工具方面100%来自荷兰，或者100%来自这家美国公司，或者那家奥地利公司，或者这个或那个。

<details>
<summary>Original English</summary>

**Dylan Patel**: I think there's a lot of things. I think if you were to close your eyes and say or if you were to cut off every country and say there's no more globalism, China has the most vertical stack in semiconductors today and they're the best at semiconductors in the world because their fabs could still run somewhat on a lot of things because they have built some of these chemical supply chains. Like **TSMC** for certain kinds of chemicals 100% share from Japan. Or **Intel** same thing. Or for certain kinds of tools 100% share from Netherlands or 100% share from this American company or that Austrian company or this or that.

</details>

**Dylan Patel**: 就像所有这些不同的地方拥有100%的市场份额，可能是一家公司，也可能是三家公司，但在地理上或在同一区域。中国已经建立起来了，因为他们创造了“中国制造”倡议，投入了大量资金，他们拥有这种扩散的文化，比如这些省份说：“是的，我决定要专注于。”或者甚至可能不是。可能是有人把它带到那里并决定了，然后人们说：“哦，哇。你正在做那个？”我也是。我是一个**Patel**，我在汽车旅馆长大，你猜怎么着？我认识的几乎所有**Patel**都在汽车旅馆长大，那是因为一些随机的**Patel**移民到美国，在酒店汽车旅馆工作，然后买了一家汽车旅馆，然后就这么发生了。

<details>
<summary>Original English</summary>

**Dylan Patel**: Like there's just all these like this Swiss company like there's just all these different places have 100% share it might be one company might be three companies but geographically or in the same area and China's built that up because they've created this made in China initiatives which just plowed money into it and they've got this culture of like the diffused like these provinces like yeah I just decided I'm going to [ __ ] focus on or might not even be might not even be the Right. It may be the like, someone brought it there and decided and then people were like, "Oh, wow. You're doing that?" Me, too. Like, I'm a **Patel** and I grew up in a motel and guess what? We like almost all the **Patel**s I know grew up in a motel and it's because some random **Patel** immigrated to America and like worked at a hotel motel and then bought a motel and then like it just started happening.

</details>

**Dylan Patel**: 你会觉得这些事情是偶然的。我不知道，这就像我把它看作是同一种专业化。中国城市正在开始做这些事情。中国缺少很多东西。我想说，如果你说减去10年技术，中国是完整的，没有其他国家是完整的。台湾不完整。他们的晶圆厂如果没有外国供应就会关闭。你往下看，或者你横跨整个堆栈。但如果你看10年技术，也许是20年技术，你可以在中国建立一个完全垂直的供应链，我认为任何国家都做不到。美国无法在没有其他地方供应的情况下建立一个完全垂直的晶圆厂，即使是20年前的技术。

<details>
<summary>Original English</summary>

**Dylan Patel**: Like you sort of like these things are serendipitous of sorts and like I don't know like and it's like I I view it as the same kind of specialization. Chinese cities are like starting to do the these things. China's missing a lot of things. I would say like if you say minus 10 years tech, China's complete and no one else is complete. Taiwan is not complete. Their the fabs would shut down without foreign supply, and you go down or you go across the stack. But if you go to 10ear tech, maybe maybe more like 20-year tech, you could get a fully vertical supply chain in China, which I do not think any country could do. Like America could not build a fully vertical fab without stuff from elsewhere, even if it's 20-y old tech.

</details>

**Matt Turk**: 甚至可能不是40年前的技术。所以，这很有趣。但另一方面，你确实需要专业化。这就是那种化学品如何获得最纯净、最好、最精密的制造，或者那种化学浆料，或者那种气体，或者那种工具，因为那个国家的所有聪明人，或者其中很多人，都在那种文化中长大，供应链就在那里，每个人都知道，这就像一种驱动力。这就是供应链运作的原因，存在这种专业化，只有当你拥有这种超专业化时，才能达到最好中的最好。

<details>
<summary>Original English</summary>

**Matt Turk**: Um probably not even 40-y old tech. And so, so that's interesting. But then when the flip side is like well like you kind of do need specialization. That's how that chemical gets the purest best, most engineered, or that that slurry of chemicals or that, that gas or like that tool because every smart person or a lot of them in that country grew up around that culture and like every the supply chain is there and like everyone kind of knows and like it's like a a driveaway and like sort of like this is what makes supply chains work is that there is this specialization and the best of the best only comes when you have that hyper specialization.

</details>

**Dylan Patel**: 所以中国没有光刻技术。他们的光刻技术落后10年，我认为几年后会落后5年。他们正在快速追赶。我不认为他们会在很长一段时间内赶上**ASML**。我不知道，也许他们会，中国，你不应该低估中国，但就目前而言。或者，我也不认为他们能够制造出像许多日本公司或许多美国公司那样的尖端化学品，他们的工具，你只要看看整个供应链。他们在制造供应链的任何方面都不是前沿的，在设计供应链方面，他们开始在某些方面达到类似水平，但更便宜，或者落后一两年但更便宜，这对很多东西来说都足够了。

<details>
<summary>Original English</summary>

**Dylan Patel**: So, China doesn't have lithography. Their lithography is like 10 years behind and I think it'll be 5 years behind in a couple years. They're catching up fast. I don't think they'll be as good as **ASML** for a long time. You know, maybe I don't know, maybe they will be, China. You shouldn't ever underestimate China, but like and Chinese engineers or, but like for a while. Or like, I don't think they'll be able to make leading edge chemicals like many Japanese companies or many American companies and their tools and like you just go across the supply chain. They're not forefront on really anything in the manufacturing supply chain on the design supply chain. There's some things that they're starting to be similar par but like cheaper or like a year or two behind but cheaper and that's like fine for a lot of stuff.

</details>

**Dylan Patel**: 一个例子就是**华为**。**华为**在手机方面完全可以与**苹果**匹敌。是的。他们曾是**台积电**最大的客户，他们设计出了最好的产品，他们在电信领域排名第一，他们的技术就是更好。所以当你思考会发生什么时，中国是否缺少什么？他们今天在AI供应链中并没有太多最好的东西。他们有一个完整的方案，落后几年，他们会想办法做得更便宜，做得更多，赶上来，并创建一个强大的产业。

<details>
<summary>Original English</summary>

**Dylan Patel**: An example of that is **Huawei**. **Huawei** in mobile phones was on par with **Apple** like entirely. Yeah. And they had become **Apple** **TSMC**'s biggest customer and they were designing the best thing and they are number one in telecom and their tech is just literally better. And so when you think what happens, is is is China missing anything? It's like they're they don't they don't they don't have the best of much, today in the AI supply chain. They have a complete package and a couple years behind and they'll figure out how to make it cheaper slash do more slashcatch up and and create a robust industry.

</details>

**Dylan Patel**: 但有一个原因，我认为**Jensen**并不真正害怕**AMD**。他很偏执，我提到他很偏执。我敢肯定他有点害怕他们。我认为他们所做的一些事情是与**AMD**或**Google**的**TPU**等竞争动态的反应。今天有一个**CoreWeave**的交易，我认为这直接是**Google**一直在做的事情的结果。

<details>
<summary>Original English</summary>

**Dylan Patel**: But there's a reason like I don't think that **Jensen** is scared of **AMD** really. He's paranoid. I mentioned he's paranoid. I'm sure he's a little bit scared of them. Like I think some of the things that they've done are reactions and competitive dynamics with **AMD** or **Google**'s **TPU**s or whatever. There was a **CoreWeave** deal today and I think that's directly the result of what **Google**'s been doing.

</details>

**Matt Turk**: 是的，**英伟达**宣布的20亿美元投资。

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah. the two billion pipe that **Nvidia** announced into.

</details>

**Dylan Patel**: **英伟达**向**CoreWeave**投资了20亿美元，但更重要的是，这就像一个表面上的数字。真正相关的是**英伟达**将与**CoreWeave**合作，收购土地、电力、能源、输电，帮助建设数据中心，所有这些资本方面的东西。因为**英伟达**有这么多钱，他们可以支持**CoreWeave**这样做，因为**CoreWeave**随后可以成为需求创造者。

<details>
<summary>Original English</summary>

**Dylan Patel**: **Nvidia** invested two billion in **CoreWeave** but what's more important is that that's like sort of just like the sticker what's really relevant is **Nvidia** is going to work with **CoreWeave** to acquire and back stop and all these things the the land the power the energy the transmission that help build the data center all this capital side stuff that because **Nvidia** has so much money they can backs stop **CoreWeave** doing it because **CoreWeave** then can be the one who generates demand.

</details>

**Dylan Patel**: 无论如何，因为**Google**正在这样做。他们与几家公司合作，比如**FluidStack**、**Terowolf**和**Cipher**。这些都是已经宣布的一些公开交易。所以**Google**正在用**TPU**做这些，**英伟达**做出了反应。同样，我认为**英伟达**对**AMD**做出了反应。同样，我认为**英伟达**非常害怕**华为**。

<details>
<summary>Original English</summary>

**Dylan Patel**: Anyways there's like because **Google** was doing And they did that with like a couple companies such as **FluidStack** and **Terowolf** and **Cipher**. These are some public deals that have been announced. And so **Google** is doing that with **TPU**s and **Nvidia** reacted. And so in the same way, I think **Nvidia**'s reacted to **AMD**. And in the same way, I think the thing is **Nvidia** is deathly terrified of **Huawei**.

</details>

**Dylan Patel**: 因为**华为**在被禁之前已经赶上并超越了**苹果**，成为**台积电**最大的客户。他们彻底击垮了**诺基亚**、**索尼**、**爱立信**等整个电信供应链。他们彻底摧毁了它们。还有很多其他领域，比如他们直接制造了一款折叠手机。我有一部**三星**折叠手机。他们有一款比**三星**折叠手机更好的折叠手机。

<details>
<summary>Original English</summary>

**Dylan Patel**: Because **Huawei** has caught up to **Apple** and actually surpassed them as **TSMC**'s biggest customer before they got banned. They did just crush **Nokia**, **Sony**, **Sony**, **Ericsson**, etc. Like the entire telecom supply chain. They just completely destroyed them. And there's so many other areas like they straight up made a folding phone. I have a **Samsung** folding phone. They have a folding phone that's better than **Samsung**'s folding phone.

</details>

**Dylan Patel**: 这就像，兄弟，什么？**华为**真的非常厉害。所以，他们当然害怕。**华为**是世界上最垂直整合的公司。没有哪家公司比**华为**更垂直整合，这带来了巨大的创新。这是我们在美国没有完全意识到的事情，但当你在欧洲旅行时，你会看到每个人都在用**荣耀**手机，**华为**在手机领域的影响力巨大，以至于人们。

<details>
<summary>Original English</summary>

**Dylan Patel**: And it's like, bro, what? **Huawei**'s really, really cracked. And so, of course, they're terrified of and **Huawei** is the most vertical company in the world. No company is more verticalized than **Huawei**, which then leads to huge innovations. It's something that we don't fully appreciate in the US, but when you travel in Europe, you see everybody who's like **Honor** phones and it's like the the footprint of **Huawei** is huge in in phones in a way that people.

</details>

**Matt Turk**: 不仅仅是手机，还有安防摄像头，他们认为他们有很多训练。

<details>
<summary>Original English</summary>

**Matt Turk**: Not just phones, security cameras actually they think they have like.

</details>

**Dylan Patel**: 很多训练。

<details>
<summary>Original English</summary>

**Dylan Patel**: A lot of training on the [laughter] that a captive group of testers.

</details>

**Matt Turk**: 没错。

<details>
<summary>Original English</summary>

**Matt Turk**: Exactly.

</details>

**Dylan Patel**: 没错。我认为**华为**很可怕。所以，是的，他们的芯片今天不如**英伟达**好。

<details>
<summary>Original English</summary>

**Dylan Patel**: Exactly. I think I think **Huawei** is terrifying and and so like yes their chips are not as good today.

</details>

**Matt Turk**: 这种情况已经发生了吗？我的意思是，显然美国和中国是最大的两个市场，但对于其他市场，比如阿联酋、中东、欧洲，**英伟达**和**华为**已经正面交锋了吗？

<details>
<summary>Original English</summary>

**Matt Turk**: And is that is is that already happening? I mean obviously the US and China are the two biggest markets but like for other markets I don't know UAE, Middle East, Europe are **Nvidia** and **Huawei** already headto-head in.

</details>

**Dylan Patel**: 他们确实出货了一点点，但主要只是名义上的产能。我的意思是，一点点是指几台服务器，而不是价值数十亿美元的东西。问题是中国的供应链必须加速。中国的明确目标是实现全部内部化，但像**阿里巴巴**这样的公司会说：“我不想用**华为**，我想用**英伟达**，只想制造最好的模型。”因为那是我的业务。我的业务不是使用**华为**的东西，但它就像，好吧，它被强加给我了。还有其他公司，比如**寒武纪**等等。

<details>
<summary>Original English</summary>

**Dylan Patel**: Well they shipped a little bit but like mostly just like sticker capacity like there's nothing like no no like I would say like a little bit as in like a few servers not like a billion dollars worth of stuff. The thing is China's supply chain has to ramp up. China China's express goal is to have all inter internalized but then like a company like **Alibaba**'s like I I don't want to use **Huawei**, I want to use **Nvidia** and just make the best freaking models. Because that's my business. My business is not, using a **Huawei** thing, but it's like, okay, it's being pushed upon me. There's other companies too, like **Cambricon** and so on and so forth.

</details>

**Dylan Patel**: 所以中国的供应链公司不想使用，他们显然受到鼓励和推动。一些地方政府会说：“好吧，你在这里做了这么多生意。你必须这样做。”就像有各种各样疯狂的事情，推动公司使用**华为**。挑战在于可能无法生产足够多的产品。我们在这方面做了很多工作。我们只是免费发布了它，而不是给我们的客户，因为它事关国家安全，那就是**华为**是如何实际制造芯片的？实际上，他们使用空壳公司从**台积电**获取芯片，并使用不同的方法，比如将**HBM**（内存）从韩国通过台湾偷运到中国。所有这些疯狂的事情我们都报道过，人们就像打地鼠一样。他们关闭了它，或者运往中国的工具，它们不应该用于制造尖端芯片，但实际上它们是。所有这些事情都在发生，因为他们无法制造所有东西。

<details>
<summary>Original English</summary>

**Dylan Patel**: And so the sort of like supply chain, companies in China don't want to use they're kind of encouraged obviously and pushed, you know, you must some local provincial government be like, well, you're doing this much business here. You got to do this. Like there's all sorts of like crazy stuff that, pushing of of companies to use **Huawei**. The challenge is probably can't manufacture enough. We've like done a lot of work on this. And we've just put it for free, instead of like to our customers because it's like something that's like national security, which is how was **Huawei** actually building chips? Well, actually they were using shell companies to get chips from **TSMC** and using different methods of like sneaking **HBM**, which is memory, from Korea through Taiwan to China. Like all sorts of crazy stuff we've reported on and and people it's like a whack-a-mole. They shut it down or like tools that get shipped to China and they shouldn't be for making leading edge chips but they actually are. And all these sorts of things are happening because they can't make everything.

</details>

**Dylan Patel**: 如果他们想制造尖端产品，他们确实需要相当大程度上依赖外国供应链，就上游供应链而言，包括内存、逻辑芯片、晶圆厂工具、晶圆厂化学品等。**华为**无法满足市场，因为国内没有足够的先进尖端内存、逻辑芯片以及所有其他东西的产能。他们正在尽力尽快建设，但这意味著没有足够的产能来满足市场。所以**英伟达**有一个市场。我认为他们会想办法向中国销售芯片。**Jensen**现在或者昨天就在中国。所以他显然正在积极斡旋，试图将他的芯片引入中国。

<details>
<summary>Original English</summary>

**Dylan Patel**: And if they want to make the leading edge stuff they do need to rely on the foreign supply chain quite a bit in terms of the upstream supply chain, memory logic chips, tools for fabs, chemicals for fabs etc **Huawei** cannot satisfy the market because there's not enough advanced leading edge capacity in memory logic and all all these other things domestically in and they're trying to build it as fast as they can, but that means there's just not enough to satisfy the market. So, **Nvidia** has a market. I think they'll figure out how to sell chips to China. And **Jensen**'s in China, I think, right now or was yesterday. And so, he's clearly wheeling and dealing to try and get his chips into China.

</details>

**Dylan Patel**: 因为，我认为**英伟达**的论点是，如果我们向他们销售芯片，那么他们就不会有那么多的国内市场。软件和其他一切的反馈循环就不会存在。这会真正挑战它。大多数AI开源软件都有很多中国贡献者。**VLM**和**PyTorch**、**SGLang**以及所有这些其他库和东西，它们就像，而且它特别涉及到低级软件。很多最好的开源软件实际上只是来自一家中国公司，他们决定将其开源，模型也是如此。所以，如果他们不能再使用**英伟达**芯片，那么这些开源软件就不会为**英伟达**芯片设计，而是为**华为**芯片设计。现在，这是否会削弱**CUDA**的优势？现在，中国不仅是国内市场，他们还有内部反馈循环，然后他们可以向世界其他地区推广。

<details>
<summary>Original English</summary>

**Dylan Patel**: Because, I think **Nvidia**'s argument is if we sell them chips, then they won't, there won't be enough of as much of a domestic market. The feedback loop for software and everything else won't be there. That will sort of like really challenge it. Most of the open source software for AI has a lot of Chinese contributors. **VLM** and **PyTorch**, **SGLang** and like all of these other like libraries and things that are just like and and and it goes to low-level software especially. A lot of the best open source stuff is actually just from like a Chinese company who decided to open source it and same with models. And so like it's like okay well if they can't use **Nvidia** chips anymore then this open source stuff won't be designed for **Nvidia** chips it'll be designed for **Huawei** chips and now does that like weaken the **CUDA** mode and now like not only is China domestic now they have like a feedback loop internally and then they can externalize across the rest of the world.

</details>

**Dylan Patel**: 所以这是**英伟达**提出的论点。我不确定我是否，我的AI时间线非常快。我没有那么快，不是指**AGI**，而是指AI行业将达到千亿美元的收入。我认为到今年年底，该行业可以达到1000亿美元的年化收入。**OpenAI**有45-50亿美元，**Anthropic**有35-40亿美元，然后**Google**的**Vertex**、**DeepMind**、**Gemini**模型，以及**Anthropic**模型的**Vertex API**，**Bedrock API**和**Azure Foundry API**，我认为到今年年底将达到1000亿美元。

<details>
<summary>Original English</summary>

**Dylan Patel**: So This is the argument **Nvidia** makes. I'm not sure if I am like I'm like I think I think my AI timelines are so fast. I'm not that fast like not in terms of **AGI** but like hey AI is hundred billion dollars of revenue across the industry. I think the industry could hit 100 billion ARR by the end of this year like 4550 for **OpenAI** like 3540 for **Anthropic** and then **Vertex** **DeepMind**'s models at **Google** **Gemini**. And then **Vertex API** for **Anthropic** models and **Bedrock API**s and **Azure Foundry API**s. I think hundred billion dollars like end of this year.

</details>

**Matt Turk**: 那是很多钱。那么这1000亿美元的经济价值是多少？其中有多少在中国？中国的数字可能低10倍，因为他们还没有能够普及AI。**ChatGPT**大约有10亿用户，然后你加上**Gemini**，**Meta**声称他们有5亿用户。我不知道。我认为人们只是不小心点击了生成贴纸之类的东西。

<details>
<summary>Original English</summary>

**Matt Turk**: That's a lot and then what's the economic value of that hundred billion dollars now how much of that is in China right like China's number is probably 10x lower? Because they just haven't been able to pervasively push AI. **ChatGPT** has a billion users roughly and then you add on **Gemini** and **Meta** claims they have 500 million users. I don't know. I think people just accidentally click like generative sticker or something.

</details>

**Dylan Patel**: 但无论如何，西方已经大量使用AI，而且还会继续增长。你必须习惯它。所以问题是，你，世界的经济利益是什么？归根结底，这是一场经济战。如果美国和西方在AI领域获胜，并控制更强大的AI系统，这些系统具有改善经济增长、武器系统以及其他一切的反馈循环，比如电网工程和网络攻击等。他们对中国拥有这种优势，那么中国就不会崛起成为全球霸主。但如果没有AI，中国肯定会崛起成为全球霸主。他们只会超越美国。所以问题是，我认为这是另一种观点，强大的AI系统发展速度有多快，与中国建立一个落后几年的芯片、模型和所有东西的国内生态系统相比，实际价值是什么？这就像。

<details>
<summary>Original English</summary>

**Dylan Patel**: But like anyways, there's there's a lot of usage of AI in the west already and it's going to climb. It's going to keep climbing and you kind of have to get used to it. And so the question is like do you what's what's the economic benefit to the world? And at the end of the day, this is an economic war. If the US and the West win in AI and control, more powerful AI systems that have this feedback loop that improved economic growth and weapons systems and whatever else, engineering of grids and cyber attacks and all these sorts of things. They have this advantage over China, then China will not rise to be the global hedgeimony. But without AI, China definitely will rise to be the global hedgeimony. They're just going to outrun America. And so the question is like that's I think like the other view and how fast are super powerful AI systems versus China building a domestic ecosystem for chips and models and everything that is a few years behind like what's what's actually the value? That's sort of like.

</details>

**Matt Turk**: 关于限制和法规。

<details>
<summary>Original English</summary>

**Matt Turk**: Around restrictions and regulations.

</details>

### 美国芯片法案与本土化

**Matt Turk**: 美国本土化努力在这类中处于什么位置？你如何看待从**芯片法案**到所有正在建设的东西？顺便说一句，一切似乎都严重延迟了，这也许并不令人惊讶。

<details>
<summary>Original English</summary>

**Matt Turk**: Where where do the US onshoring efforts fall in that category what do you make of them from the **Chips Act** to like all the thing that is being built everything looks like it's massively delayed by the way which perhaps is not surprising.

</details>

**Dylan Patel**: 我认为**台积电**正在制造晶圆，他们正在建造真正的晶圆厂，而且还有一些其他已经宣布的晶圆厂也做得很好。还有很多不同类型的工厂，比如一家韩国公司在德克萨斯州为他们的芯片建造一个随机的气体工厂。所有这些事情都在发生。我认为**芯片法案**以其500亿美元做得非常好。只是我认为人们不了解半导体行业的规模。它是世界上最复杂的供应链。它比制造飞机大得多。它比其他任何东西都大得多。如果你看看世界前十大公司，我认为其中八家设计半导体。现在，显然像**Google**设计半导体，但如果他们没有**TPU**，他们的搜索成本会高10倍，而**TPU**是为搜索高度优化的。

<details>
<summary>Original English</summary>

**Dylan Patel**: I think **TSMC**'s manufacturing wafers and they're building real wafers and there's real fabs and like there's some other fabs that have been announced and like they're doing well and there's like a bunch of like different kinds of plants like a Korean company making a random gas plant in Texas for their chips. For chips and all these like sort of things are happening. I think the **Chips Act** did really well with its $50 billion. It's just I don't think people understand the scale of the semiconductor industry. Is the most complicated supply chain in the world. It's much bigger than, say manufacturing airplanes. It's much bigger than like, really anything else. If you look at the top 10 companies of the world, I think eight of them designed semiconductors. Now, obviously like **Google** designed semiconductors, but it's like, oh wait, no, but their cost of search would be like 10x higher if they didn't have **TPU**s and **TPU**s were super optimized for search.

</details>

**Dylan Patel**: 或者，你看看这份清单，**Meta**用他们的芯片服务推荐系统。你看看这份清单，每个人都在制造自己的芯片。如果**苹果**设备没有自己的芯片，它们的性能会差很多。你看看这份清单，它就像是，这是最复杂的供应链，他们每年向芯片行业投入大约1500亿美元的补贴。

<details>
<summary>Original English</summary>

**Dylan Patel**: Or like, you you you go down the list. Like **Meta** serves recommendation systems with their chips. Like you go down the list, it's everyone is making their own chips. **Apple** devices would be materially worse if they didn't have their own chips. And you just go down the list, it's like it's the most complicated supply chain and they they're spending something on the order of like $150 billion roughly in subsidies a year to the chip industry.

</details>

**Matt Turk**: 我们在十年内投入500亿美元。

<details>
<summary>Original English</summary>

**Matt Turk**: We are doing 50 over like a decade.

</details>

**Dylan Patel**: 是的。

<details>
<summary>Original English</summary>

**Dylan Patel**: Yeah.

</details>

**Matt Turk**: 这里存在规模差异，对吧？台湾在整个行业，所有在台湾制造半导体的公司，总资本支出超过5000亿美元。而台湾没有国内产业。500亿美元的补贴如何能改变美国的局面？它确实会稍微推动一点。我想说清楚，**芯片法案**很棒。我不明白为什么电动汽车或太阳能获得了如此巨大的万亿美元一揽子计划。半导体只获得了500亿。半导体需要更大的计划才能真正激励本土化。我认为到目前为止发生的事情已经证明它运作良好。**台积电**今天确实在亚利桑那州为**英伟达**、**苹果**、**AMD**和其他公司制造芯片。我认为这真的很棒。

<details>
<summary>Original English</summary>

**Matt Turk**: There's a difference in scale here, right? The collective total amount of capex that has been spent in Taiwan is like 500 billion plus, across the industry, across all the companies that are making semiconductors in Taiwan and Taiwan doesn't have a domestic industry. How is $50 billion of subsidies going to change America's needle? It does move it a little bit. I want to be clear like the **Chips Act** is awesome. I don't understand why like EVs or like solar was given this massive massive like trillion dollar package. Semiconductors were only given 50. Like semiconductors need a lot bigger package to actually incentivize onshoring. I think what's happened so far has proven that it's working well. **TSMC** is literally making chips for **Nvidia** and **Apple** and **AMD** and others in Arizona today. And I think that's really great.

</details>

**Matt Turk**: 你认为美国政府普遍意识到所有这些吗？它之所以通过，不仅仅是因为汽车价格上涨，因为汽车制造商是最糟糕的，他们实行准时制库存，对吧？或者说不是最糟糕的，但这只是一种情况。准时制库存系统。疫情发生，销售额暴跌，那些制造随机电源**IC**或发动机微控制器的晶圆厂被重新用于疫情带来的繁荣，也就是数据中心、个人电脑和智能手机。所以这些东西都在蓬勃发展。然后当人们说：“哦，等等。实际上，我有一些钱。我待在家里。我没有出去。我没有喝酒。我有一些现金，让我买辆车。”他们出去买车，汽车价格开始飙升。

<details>
<summary>Original English</summary>

**Matt Turk**: Is is your sense that the broad American government is just aware of of all of this that it's I wouldn't say only passed because the automotive like prices went up because car manufacturers are like the worst because they do just in time inventory, right? Or not worse, but like this is just like a thing. Just in time inventory systems. **COVID** happens, sales plummet fabs that were making, random power **IC**'s or random microcontrollers for engines got repurposed to the boom from **COVID**, which is which was data centers and **PC**s and smartphones. So, that stuff was booming. And then when people were like, "Oh, wait. Actually, I have some money. I stayed at home. I didn't go out. I didn't drink. I have some cash, right? Let me buy a car." They went out and bought cars and cars started skyrocketing in prices.

</details>

**Matt Turk**: 哦，我们重新开始吧，我们，哦，是的。你能再把那个发动机微控制器卖给我吗？就像，“不，我正在制造一个稍微不同的微控制器，它适用于键盘或鼠标，或者其他什么。”他们实际上并没有让我措手不及，他们通过合作成为了伙伴，而你却抛弃了我。去你的**福特**或**丰田**，或者汽车**OEM**，你搞砸了供应链。所以，**芯片法案**之所以通过，不仅仅是因为发生了这种情况。人们说：“哦，天哪，半导体是汽车无法制造的原因。”如果那没有发生，我们甚至不会有**芯片法案**。这就像，这很愚蠢。

<details>
<summary>Original English</summary>

**Matt Turk**: Oh, let's restart and let's let's Oh, yeah. Can I can you sell me that microcontroller for the engine again? It's like, "No, I I'm making a slightly different microcontroller that works for, uh, let's say a keyboard or a mouse, or whatever." And it's like, and and and they actually didn't just leave me flatfooted and they were like a partner through co, right? Versus you just left me. Screw you **Ford** or whoever, **Toyota**, or automotive **OEM**, you up that supply chain. And so, **Chips Act** did not get passed, only got passed because that happened. And people are like, "Oh my god, the semiconductors are why cars can't be made." If that didn't happen, we wouldn't even have the **Chips Act**. It's like it's like silly.

</details>

**Dylan Patel**: 所以，我不知道，我认为，然而，尽管这是向所有参议员推销的，但我认识一些在国会山四处奔走，推动这种叙事和故事的人，这就是它最终通过的原因。实际上，它都是为了先进的尖端芯片，而不是用于汽车的任何东西。所以，这就像一个有趣的事情。换句话说，你认为我的话，不是你的话，美国是否没有希望？我非常乐观。好吧。我的意思是，你认为美国会决定以那种规模投资半导体吗？

<details>
<summary>Original English</summary>

**Dylan Patel**: So like I don't know like I think whereas like and and even though that's what was pitched to all the senators like I know people who were running around Capitol Hill just pushing that narrative and story and that's why it finally got passed in reality it was all for advanced leading edge chips. Nothing that goes in a car. And so it's like this like funny thing. So, in other words, do you think my words my words not yours, but is it is it hopeless that the US is going to I'm very optimistic. Okay. I mean, do you think there's a world where the US just decides to invest in semiconductor at the scale that.

</details>

**Matt Turk**: 我以为我们只需要一个更大的**芯片法案**。

<details>
<summary>Original English</summary>

**Matt Turk**: You know, I thought we just needed a bigger **Chips Act**, but.

</details>

**Dylan Patel**: 看看，**特朗普**已经让**台积电**承诺投入更多资金，他们正在行动。他们真的在建设。这就像，如果你不建晶圆厂，我就要对你征收关税。但他们说，我们会建晶圆厂。他们现在正在建设。晶圆厂的建设周期需要很长时间，因为这又是世界上最复杂的事情。世界上最干净的地方不是医院或生物技术实验室，而是一个半导体晶圆厂。世界上最昂贵的工具不是医疗工具，而是半导体工具，或者说不是火箭，而是半导体工具。就像所有的一切。

<details>
<summary>Original English</summary>

**Dylan Patel**: Look, **Trump**'s kind of gotten **TSMC** to promise to invest a fuckload more [laughter] and they're moving on it. They're like actually just building it. It's like, I'm going to tariff the [ __ ] out of you unless you build a fab. But it's like we'll build a fab [laughter] and they're building it right now. The timelines for fabs just takes forever cuz again it's the most complicated thing in the world. The cleanest space in the place in the world is not like a hospital or a biotech lab or whatever. It's a semiconductor fab. And the most expensive tools in the world are not any of these medical tools or whatever. It's it's semiconductor tools or it's not a rocket. It's a semiconductor tool. Like everything I describe it as um I remember when I was a kid I was like I want to be a rocket scientist and then I was like oh I want to be a surgeon. And I'm like wait chips are like rocket surgery but even cooler.

</details>

**Dylan Patel**: 我把它描述为，我记得我小时候，我说我想成为一名火箭科学家，然后我说我想成为一名外科医生。然后我想，等等，芯片就像火箭外科手术，但更酷。无论如何，美国正在建造晶圆厂。

<details>
<summary>Original English</summary>

**Dylan Patel**: Like I think anyways like sort of like there there are fabs being built in America.

</details>

**Dylan Patel**: 它们不会让美国实现自给自足。我不认为这是一个相关的目标。全球化总体来说是好的。

<details>
<summary>Original English</summary>

**Dylan Patel**: They won't take America to self-sufficiency. I don't think that's a relevant. I don't think that's a goal relevant like that's relevant. Like globalism is generally just good.

</details>

**Matt Turk**: 热门观点。

<details>
<summary>Original English</summary>

**Matt Turk**: Hot take [laughter].

</details>

**Dylan Patel**: 从经济学角度来看。

<details>
<summary>Original English</summary>

**Dylan Patel**: Like in terms of economics.

</details>

**Matt Turk**: 我们会把它变成一个YouTube短视频。

<details>
<summary>Original English</summary>

**Matt Turk**: We'll turn this into a short a YouTube short.

</details>

**Dylan Patel**: 全球化。

<details>
<summary>Original English</summary>

**Dylan Patel**: Globalism.

</details>

**Matt Turk**: 全球化是好的。

<details>
<summary>Original English</summary>

**Matt Turk**: Globalism is good. [laughter]

</details>

**Dylan Patel**: 兄弟，你会让我被取消的。

<details>
<summary>Original English</summary>

**Dylan Patel**: Dude, you're gonna get me like cancelled.

</details>

**Matt Turk**: 我发了一条关于冰的推文，那完全是个玩笑，但很多人对我生气，因为我不能，你知道，我太爱开玩笑了。你知道，这些都是严肃的事情。

<details>
<summary>Original English</summary>

**Matt Turk**: I tweeted about ice and it was a complete joke, but so many people got mad at me because I can't be, I'm too I'm too much of a joker. You know, these are serious things.

</details>

**Dylan Patel**: 是的。是的。不，我懂这种感觉。是的。无论如何，我认为我们正在建设晶圆厂，我认为它会发展。现在连**Elon**也在谈论建设晶圆厂，因为他看到了世界上的短缺。在建设AI方面，有很多半导体相关的短缺。所以我不认为这是没有希望的。我非常乐观，认为我们会做得越来越多。也许这届政府威胁征收关税，然后他们达成了协议，下一届政府又带着胡萝卜回来。如果是民主党，无论发生什么，我不知道。

<details>
<summary>Original English</summary>

**Dylan Patel**: Yeah. Yeah. No, I know the I know the feeling. Yes. [laughter] Anyways, I think I think you know I think we are building fabs and I think it's like going to move and now even **Elon**'s talking about building fabs now because he sees the shortages in the world. There's a lot of semiconductor related shortages for building out AI and and so I don't think it's hopeless. I think I'm like very optimistic that we're going to do more and more and more. And maybe this administration threatens tariffs and they get the deals and the next administration comes back with the carrot. If it is the Democrats, whatever happens, I don't know.

</details>

**Dylan Patel**: 我周日晚上在一个喜剧俱乐部，他就像，“哦，我用**ChatGPT**。”然后有几个人嘘他，他就像，“是的，我就是那种人。我知道。”这就像，“哇，人们讨厌AI。”

<details>
<summary>Original English</summary>

**Dylan Patel**: Like I was at a comedy club on Sunday night and like he's like, "Oh, I'm I use **ChatGPT**." And then like there were a couple people who booed and he's like, "Yeah, I'm one of those guys. I know." And like it's like, "Wow, people hate AI."

</details>

**Matt Turk**: 而且那还没有开始，对吧？AI的实际影响。

<details>
<summary>Original English</summary>

**Matt Turk**: And that has has not even started, right? Like the actual impact of AI.

</details>

### AI与能源/水资源

**Dylan Patel**: 或者像新泽西州的电价上涨了。是因为数据中心吗？新泽西州州长选举，我记得就像，新泽西州最近发生了一次选举，因为电价上涨，人们将此归咎于新泽西州的一个**微软** **Nebius**数据中心。但实际上，那个数据中心与电价上涨无关。那是五年前的超级风暴**Sandy**，它摧毁了该州的电力基础设施，然后进行了所有这些改进，然后这些改进必须由某人支付，结果是消费者必须支付更高的电价。所以，你知道，在这方面有很多事情正在发生。

<details>
<summary>Original English</summary>

**Dylan Patel**: Or like New Jersey power prices are up. Is it because of a data center? New Jersey, the governor's election like I think literally fl like there's like an election that changed recently in New Jersey because power prices were up and people blamed a **Microsoft** **Nebius** data center in New Jersey for that reason. But in reality that data center has nothing to do with power prices going up. It's super storm **Sandy** like five years ago knocking or whatever how many years ago knocking down the state's electrical infrastructure and then the then improving all these improvements and then those improvements have to be paid by someone and it turns out the consumer has to pay for them with higher power prices. And so like you know like there's like there's a lot like going on in that regard.

</details>

**Dylan Patel**: 这有点悲伤。人们讨厌AI，他们把责任归咎于AI，艺术家讨厌AI，你看到所有这些深度伪造的东西。我认为这将是最热门的问题，尤其当我们真正进入，我认为去年**Google**在**Waymo**上花费了30亿美元，我们正在等待他们今年的指导。**Waymo**出租车花费了30亿美元，但他们的**Waymo**汽车从30万辆降到了10万辆或9万辆，新的**Waymo**汽车。他们将花费超过30亿美元，因为他们现在已经在四个或五个城市推出了，并且正在大量测试。

<details>
<summary>Original English</summary>

**Dylan Patel**: Um that kind of is uh sad. Um, and and people hate AI and they're blaming AI on it and artists hate AI and like you know you see all this deep fake stuff and like I think I think it'll be the hottest button issue especially as like we're really getting into like I think last year **Google** spent $3 billion on **Waymo** and we're waiting for their guide for this year $3 billion on **Waymo** taxis but their t their **Waymo**s went from like 300k to like 100k or 90k the new **Waymo** car and they're going to spend more than three because they've just launched in like four cities now or five cities and and they're testing it a lot.

</details>

**Dylan Patel**: 同样，无人驾驶出租车，人们会因此讨厌AI。人们会因为互联网上的垃圾信息而讨厌AI。人们会因为感知到的工作替代而讨厌AI。人们会因为所有这些原因而讨厌AI。所以，是的，这将是一个热门的政治问题，你不觉得吗？

<details>
<summary>Original English</summary>

**Dylan Patel**: And the same a robo taxi like people are going to hate AI for that reason people are going to hate AI because the slop on the internet people are going to hate AI because you know the perceived job replacement people are going to hate AI for all these reasons and so yeah it's going to be a hot button political issue don't you think.

</details>

**Matt Turk**: 是的，说到这个，资本支出，是否存在资本支出泡沫？我们是投资过多了，还是实际上投资不足，考虑到你之前提到的收入增长率以及因此预期的今年需求？

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah talking about that so um capex is there a capex bubble are we u investing too much or actually are we investing not enough given what you were saying earlier about uh the the the rate of revenue increase and and therefore implied demand that you expect for this year.

</details>

**Dylan Patel**: 我显然是一个AI乐观主义者。我认为我们将需要大量基础设施，而且我实际上是靠分析供应链和提供咨询来赚钱的。所以，我显然非常偏颇。我认为我们很擅长预测事情何时会走下坡路，在供应链的某个部分反弹之前。无论如何，回到经济学方面，今年AI的收入将超过1000亿美元，而通用AI的基数不到10亿美元，因为广告等已经是一个数千亿美元的AI产业。回到2023年，它还不到10亿美元。2024年，我不知道具体数字，也许是100亿，2025年可能是300-400亿。它将轻易超过1000亿。

<details>
<summary>Original English</summary>

**Dylan Patel**: I'm obviously a maxi. I think we're going to need a lot of infra and I think I'm literally paid to like analyze the supply chain and do consulting. Like that's what my company does. So like obviously I'm very [laughter] biased. I think I think we're pretty good at calling when when things go down though. Before like a part of the supply chain reb. Anyways, you know, again, going back to the economics of it, it's north of hundred billion dollars of revenue exiting this year for AI from a base of, you know, sub1 billion gen AI from a base because ads and stuff is like already a multiundred billion dollar AI industry. You know, go back to 2023 it was like less than a billion. And 2024, I don't know exactly what number, maybe let's call it 10 and 25 was maybe like 30 40. It'll be north of 100 easily.

</details>

**Dylan Patel**: 如果你谈论1000亿美元的收入，假设毛利率为50%。那么就是500亿美元的毛利润和500亿美元的销货成本。这500亿美元的销货成本需要运行在基础设施上，如果按五年折旧计算，成本大约是2500亿美元的基础设施。

<details>
<summary>Original English</summary>

**Dylan Patel**: If you're talking about hundred billion of revenue, let's say at a 50% gross margin. So that's $50 billion of gross profit and $50 billion of COGS. That $50 billion of COGS needs to run on infra, which cost roughly if a five, if you're talking about fiveyear depreciation, call it $250 billion, of infra.

</details>

**Matt Turk**: 为了1000亿美元的收入。

<details>
<summary>Original English</summary>

**Matt Turk**: For hundred billion of revenue.

</details>

**Dylan Patel**: 嗯。

<details>
<summary>Original English</summary>

**Dylan Patel**: Mhm.

</details>

**Matt Turk**: 好的。今年AI基础设施的实际支出是多少？它将是，我的意思是，这取决于哪个层面。如果你谈论能源，那些是寿命更长的资产，以及所有这些其他东西。数据中心是寿命更长的资产。芯片则没那么多。人们正在投入资本支出。超大规模公司的资本支出今年将达到5000亿美元左右。除了他们之外，其他地方也有更多的资本支出。所以，它是一个泡沫吗？我的意思是，理论上，它应该是两倍，但它也是，不，这里有研发成分，去年没有产生收入的超额支出导致了今年模型如此出色，并导致了所有能使用**Claude Code**的人都改变了他们的生活。这不是一个泡沫。

<details>
<summary>Original English</summary>

**Matt Turk**: Okay. What is what is the actual spend on AI infra this year? It's going to be like it's I mean it depends on what layer. If you're talking about energy, those are longer lived assets and all these other things. Data centers are longer lived assets. The chips are not as much. People are putting capex down. And the hyperscalers capex is going to be like $500 billion this year or something like this. And then besides them, there's also a lot more capex elsewhere. And so, is it a bubble? I mean theoretically like it's twice as much as it should be but it's also like well no there's an R&D component to this and the excess spent that wasn't revenue generating last year is what led to models being so good this year and led to like everyone who can using **Claude Code** and like that changing their life. This is like it's not a bubble.

</details>

**Dylan Patel**: 我不认为它是一个泡沫。我认为如果AI模型进步停止，那才是主要问题。一旦模型进步停止，所有的支出都将白费。但到目前为止，我们一直有持续的改进。你投入更多的计算，你就会获得更高的性能和更好的模型。

<details>
<summary>Original English</summary>

**Dylan Patel**: I don't think it's a bubble yet. I think if AI model progress stops and that's the main thing. The moment model progress stops all the spending is for not. But so far we've had consistent improvement. As you put in more compute, you get more performance and better models.

</details>

**Matt Turk**: 是的。模型性能是硬件进步或数据中心的滞后指标。

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah. Model performance being the lagging indicator of hardware progress or data center.

</details>

**Dylan Patel**: 是的。资本支出的。是的。

<details>
<summary>Original English</summary>

**Dylan Patel**: Yeah. Of of capex, right? Yeah.

</details>

**Dylan Patel**: 最终，**微软**在2024年为**OpenAI**花费的资本支出，是2025年**OpenAI**或**CoreWeave**模型如此出色的原因。**Anthropic**和**亚马逊** **Google**也是如此，他们的模型现在如此出色，就是因为资本支出。实际上，他们还没有为那些芯片付费，因为那些芯片还有几年的使用寿命。我认为模型进步非常明显。一旦这种情况停止发生，如果我们遇到瓶颈，没有新的研究方向，那么就完蛋了。

<details>
<summary>Original English</summary>

**Dylan Patel**: Ultimately, the capex that **Microsoft** spent in 2024 for **OpenAI** is what results in in 2025 for **OpenAI** **CoreWeave** or whoever is what results in their models being so good this year. Same with **Anthropic** and **Amazon** **Google** and their models now being so good now is is that capex and actually they still haven't paid for those chips yet because those chips are still have a useful life for another few years. I think model progress is very clear. The moment that stops happening, if we hit a wall there's no new research directions, then then it's cooked yeah.

</details>

**Matt Turk**: 这假设更好的模型会带来更多的需求，这是一个合理的假设。

<details>
<summary>Original English</summary>

**Matt Turk**: And that assumes that better model leads to more demand which is a reasonable assumption.

</details>

**Dylan Patel**: 是的，当然。

<details>
<summary>Original English</summary>

**Dylan Patel**: Yeah, for sure.

</details>

**Matt Turk**: 但是，是的，我的意思是，无论模型有多好，在企业中，采用曲线的规模。

<details>
<summary>Original English</summary>

**Matt Turk**: But um yeah, I mean there scale the adoption curve regardless of how good the model is in the enterprise.

</details>

**Dylan Patel**: 今天的**GitHub**提交中有2%是**Claude Code**。

<details>
<summary>Original English</summary>

**Dylan Patel**: Like 2% of **GitHub** commits today are **Claude Code**.

</details>

**Matt Turk**: 也就是说由**Claude Code**提交的，你可以禁用它，让它不自动提交，但今天**GitHub**提交中有2%是**Claude Code**。全球软件工资支出2万亿美元。

<details>
<summary>Original English</summary>

**Matt Turk**: As in committed by **Claude Code** you can disable that where it's not automatically committed but 2% of **GitHub** commits today are **Claude Code** $2 trillion of software wages paid in the world.

</details>

**Dylan Patel**: 如果是2%，你就会觉得，等等。

<details>
<summary>Original English</summary>

**Dylan Patel**: If it was 2% then you like you're like wait a second.

</details>

**Dylan Patel**: 这真是个惊人的数字。AI正在大大低估它在世界上已经产生的价值。

<details>
<summary>Original English</summary>

**Dylan Patel**: This is this is an insane amount AI is under earning the value that it's producing in the world by a significant margin already today.

</details>

**Matt Turk**: **Claude Code**的**Boris**，我们请他来播客时，他说他用**Claude Code**完全写了**Claude**的新产品**Co-work**。所以我们非常处于那个世界。是的。

<details>
<summary>Original English</summary>

**Matt Turk**: **Boris**'s journey from **Claude Code** who had who we had on the pod was saying that what he's written all of **Claude** what is it called **Co-work** like the new product entirely with **Claude Code** yet so we're very much in that world. Yes.

</details>

### AI模型进展与生产力变革

**Dylan Patel**: 是的。我的一个室友，我问他，因为他一直是一个非常低级的优秀程序员，他开始，我问他，他有这个假期痴迷。我的意思是，他已经在工作中使用**Claude Code**了。无论如何。但他有这个假期痴迷。我们开始玩**《帝国时代2》**。我自己，我的室友，还有一些来自**OpenAI**、**GDM**、**Anthropic**的人。我们在假期期间会玩一些**《帝国时代2》**的局域网游戏。不是圣诞节，而是在圣诞节前后一点点，因为我们大多数人都回家过圣诞节了。

<details>
<summary>Original English</summary>

**Dylan Patel**: Yeah. My one of my roommates I was asking him because he's like always been a really low-level good programmer and he started I was like he's like he had this holiday obsession. I mean he was using **Claude Code** for work already. Whatever. Um but he had this holiday obsession. We got into playing **Age of Empires 2**. Myself, my roommate, a handful of people from like **OpenAI**, **GDM**, **Anthropic**. We just would do land parties of **AoE 2** over the holidays a bit. Not not like Christmas, but like a little bit before, a little bit after, because most of us went home for Christmas.

</details>

**Dylan Patel**: 但我们玩这些局域网游戏。我的室友对这个游戏如此痴迷，以至于在圣诞节那一周，因为他没有回家，他只是待在旧金山。他只是开发了一个**RTS**游戏，他建立了一个完整的**RTS**游戏。我想我没有骗你，他一周内使用了大约1万美元的**Claude**，从零开始建立了一个完整的**RTS**游戏。但它不是一个标准的**RTS**游戏，比如**《帝国时代》**那样通过时代发展，或者**《星际争霸》**。它是一个**RTS**游戏，是中国对美国，你正在进行AI竞赛，你从信息时代的开始一直到**AGI**，机器人和人形机器人，以及所有太空文明，这太疯狂了。他一周内就建好了。

<details>
<summary>Original English</summary>

**Dylan Patel**: But like we'd do these lands. My roommate got so obsessed with like the game that during Christmas week, because he didn't go home, he just stayed in San Francisco. He just worked on an **RTS** game and he built an entire **RTS** game. And I think I kid you not, I think he he used like $10,000 of **Claude** in one week and built an entire **RTS** from scratch about a like but instead of like being a standard **RTS** where it's like oh **Age of Empires** for advance through ages or **Starcraft**, it is it is an **RTS** where it's China versus the US and you're in the AI race and you go from the start of the information age all the way through to **AGI** and like robots and humanoids and and and like all like space fairing civil like it's crazy. He built it in a week.

</details>

**Matt Turk**: 他没有写一行代码，对吧？他只能口述给模型。他告诉我，是的，我们在**Anthropic**内部有一个指标，你可以看到现在有多少人真正编写代码。只剩下少数坚持者了。

<details>
<summary>Original English</summary>

**Matt Turk**: And he didn't type a single line of code, right? He can only dictate it to the model. And he told me, yeah, like we have an indicator internally at **Anthropic** where you see how many people actually write code now. There's only a few hold outs left.

</details>

**Matt Turk**: 但我想关于泡沫的问题，实际上也是一个时机问题，对吧？是供应方和需求方是否会同时落地。这公平吗？

<details>
<summary>Original English</summary>

**Matt Turk**: But I guess the question to the bubble is is really a question of timing as well, right? It's it's whether the build which is supply side and the demand side are going to land sort of at the same time. Is that is that fair?

</details>

**Dylan Patel**: 是的。但也有经济学方面的问题，比如你花费，假设你花费，你建造一个千兆瓦的设施，你投入大约500亿美元，包括数据中心、芯片、网络等等。假设它有五年的使用寿命，那么每年是100亿美元。如果第一年你没有赚钱，是零，第二年是零，然后第三、第四、第五年你的毛利率是50%，所以你赚了200亿、200亿、200亿，现在你从这500亿美元的投资中赚了600亿美元，这不是最好的投资回报率，但它确实收回了成本。

<details>
<summary>Original English</summary>

**Dylan Patel**: Yeah. But also the economics of like say you you spend let's say you spend you build a gigawatt you put down roughly $50 billion across you know the data center the chips the networking blah blah blah blah blah right let's say it has a 5year useful life so it's $10 billion a year is it a bubble if the first year you have you didn't make any money it's zero the second year it's zero and then third fourth fifth year you're at 50% gross margins and so you make 20 2020 now you've made $60 billion off of this $50 billion investment it's not the best return on invested capital, but it did pay for itself.

</details>

**Matt Turk**: 是的。

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah.

</details>

**Dylan Patel**: 这是泡沫吗？嗯，这就是今天正在发生的事情，人们把所有这些基础设施的钱花在基础设施上，其中很多都没有回报。很多只是在做研究，试图获得采用，以及免费用户，这意味着什么？

<details>
<summary>Original English</summary>

**Dylan Patel**: Um, is that is that a bubble? Well, that's what's happening today is that people are spending all this infra money on infra and there's no return for a lot of it. A lot of it is just doing research and like trying to get adoption and is free users and like what does that mean?

</details>

**Matt Turk**: 是的。

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah.

</details>

**Dylan Patel**: 这取决于。

<details>
<summary>Original English</summary>

**Dylan Patel**: Um, depends a bit on.

</details>

**Dylan Patel**: 时机。那是时机。是的。但哦，那500亿美元的资本支出是在第一年花的。

<details>
<summary>Original English</summary>

**Dylan Patel**: The timing. That's the timing though. Yeah. But oh, that $50 billion capex was spent in year one.

</details>

**Matt Turk**: 能源呢？在数据中心领域，你有一篇关于用天然气替代能源的有趣文章。那么，AI基本上是在摧毁电网吗？

<details>
<summary>Original English</summary>

**Matt Turk**: What about energy? In the in the data center world, you had this fun post about the gas replacement for for energy. So, is AI basically destroying the grid?

</details>

**Dylan Patel**: 如果公用事业公司愿意，它会，但我认为公用事业公司太慢太笨了，他们不想。不是摧毁，而是扩张电网。是的。

<details>
<summary>Original English</summary>

**Dylan Patel**: It would if the utilities were willing to let it, but I think the utilities are so slow and dumb that they don't want to. Not destroy, but like expanding the grid. Yeah.

</details>

**Dylan Patel**: 我认为美国可以拥有一个更好的电网，但我们就是不想。没有人付出努力或采取主动。没有足够的电力。美国实际上已经50年没有大规模建设电力了。它只是从煤炭转换为天然气，以及类似的事情，但实际上并没有大规模建设全新的电力。而且有很多次，这个行业都崩溃了。独立电力生产商（**IPP**）在2010年代多次崩溃，当时韩国和日本投资者大量涌入市场，因为他们看到了很好的回报。或者在2000年代早期，电力曾短暂增长，所以人们过度建设了电力，所以电力行业被烧伤了几次，但没有人真正建设电力。

<details>
<summary>Original English</summary>

**Dylan Patel**: I think the US could have a way better grid, but we just don't want to. Like, no one's made the effort or initiative. You know, there's not enough power. America's not built power for 50 years really. It's like converted from coal to gas and like things like this but like really just have not built wholesale new power on a large scale and there have been a lot of times where the industry blew up independent power producers **IPP**s have blown up multiple times in the 2010s when Korean and Japanese investors like flooded the market with because they saw such a good return there or before in the early 2000s power was growing a little bit for a little bit and so people overbuilt on power so power industry has been burned a couple times but no one really built power.

</details>

**Dylan Patel**: 然后现在数据中心突然上线，在短短几年内从美国电网的2%增长到10%。所以这个行业发生了巨大的变化。我们没有劳动力。我认为最终这是最大的问题，是设备和劳动力，而设备基本上，劳动力和时间，需要时间来建造工厂，这样你才能制造东西。我认为设备方面的问题会更合理地解决。一个例子就是天然气。人们最初认为，你只能使用两个供应商，**西门子**或**GE Vernova**的燃气轮机，但他们拥有最好的，效率最高的。好吧，**三菱**也存在，他们正在快速提高产量。**斗山**和韩国也存在，他们正在快速提高产量。实际上，我可以直接使用**康明斯**发动机。

<details>
<summary>Original English</summary>

**Dylan Patel**: And then you've got data centers now all of a sudden coming online and going from 2% to 10% of the US grid in just a handful of years. And so you've got this humongous humongous change in the industry. We don't have the labor. I think ultimately that's the biggest problem is the equipment and the labor and equipment is basically again labor and time takes time to build a factory so you can build the things. I think the equipment side of things will be solved like more reasonably. And one one example was like gas. People initially thought, oh, you can only use like the two vendors, **Siemens** or **GE Vernova** for gas turbines, but they have the they have the best ones, the most efficient ones. It's like, okay, well, like, okay, also **Mitsubishi** exists and they're ramping up production fast. Oh, **Doosan** and Korea exist and they're ramping up production fast. Oh, actually, I can just take **Cummins** engines.

</details>

**Dylan Patel**: 如果你开过皮卡车，或者柴油卡车，每个人都喜欢**康明斯**。你看到街上的**Ram**卡车有**康明斯**的标志。这就像是南乔治亚州某种红脖子的光环象征，我也有点。无论如何，我没有卡车。但无论如何，有很多这样的发动机，人们正在想办法制造设备。太阳能很糟糕，因为它太间歇性了。风能很糟糕，因为它太间歇性了。核能很糟糕，因为它建造时间太长了。煤炭很糟糕，因为它太脏了。除了天然气，你如何为数据中心供电？电网不愿意把天然气送到你的场地。这就是**Elon**做的。现在每个人都在做。

<details>
<summary>Original English</summary>

**Dylan Patel**: Like, if you've ever like ridden a pickup truck or like diesel trucks, everyone loves **Cummins**. You see the **Ram** on the street and has the **Cummins** like badge. It's like it's like a that's like an aura symbol for a certain kind of redneck from South Georgia, which I have a little bit of. Anyways, I I don't have a I don't have a truck. [laughter] I have though. Um but anyways, like the there's like all these engines like people are figuring out how to make the equipment. You know, solar sucks. It's too intermittent. Wind sucks. It's too intermittent. Nuclear sucks. It takes forever to build. Coal sucks. It's way too dirty. How do you make power for data centers besides gas? And like, okay, the grid's not willing to put the gas on your site. That's what **Elon** did. Now everyone's doing it.

</details>

**Matt Turk**: 上周或两周前，还有一篇关于水资源消耗的有趣文章。你想谈谈吗？

<details>
<summary>Original English</summary>

**Matt Turk**: This other cool post just last week or two weeks ago that was about water consumption. Did you want to talk to that?

</details>

**Dylan Patel**: 是的。是的。所以有一个令人讨厌的事情，每个人都说：“哦，AI正在消耗所有的水。哦，天哪，AI和数据中心将耗尽所有的水，现在我们没有水了。”这太愚蠢了。水是一个分配问题，而不是我们没有足够水的问题。你看看加州。加州有很多水。但人们决定制作燕麦奶，它消耗的水量是其他任何东西的1000倍，甚至比普通牛奶还多，奶牛显然消耗大量水。但无论如何，数据中心实际上消耗的水很少。所以美国电网到2027年或2028年，数据中心将占到10%的电力。对于水资源消耗，到本世纪末甚至不会超过1%。

<details>
<summary>Original English</summary>

**Dylan Patel**: Yeah. Yeah. So there's this annoying thing where everyone's like, "Oh, AI is using all the water. Oh wow, AI and data centers are going to like use up all the water and now we don't have any water." And it's like that's so silly. Water is a distribution problem, not a like we don't have enough problem. Like you look at California. So California has shitloads of water. But people decide to make oat milk which consumes like 1,000x the water of like anything else like regular milk even and and cows obviously eat a consume a lot of water. Um but anyways like data centers consume very little water actually. So the US grid will get to like 10% of power by like 28 27 is data centers. For water consumption it's not even going to crack 1%.

</details>

**Matt Turk**: 是的。

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah.

</details>

**Dylan Patel**: 到本世纪末。

<details>
<summary>Original English</summary>

**Dylan Patel**: By the end of the decade.

</details>

**Matt Turk**: 那么衡量标准是什么？所以我们做的比较是，因为那篇文章有点粗俗，但它是认真的研究。是的。基本上，我们正在做认真的研究，因为我们不断收到这个问题，并一直在驳斥它，我们会认真地做，但后来我觉得不不不，这太复杂了，让我们把它变得非常简单。所以我说：“伙计们，我们为什么不把它和汉堡包比较一下呢？”因为我以前听一些素食主义者说过这个论点，或者一些印度教徒，我自己是印度教徒，虽然我有时也吃牛肉，但你知道，我是印度教徒。所以我们把这个和汉堡包比较了一下。汉堡包需要大量的水，因为奶牛，你知道，它们需要大量的水，当奶牛消耗大量水时，不是奶牛本身，而是你喂给它们的所有饲料。

<details>
<summary>Original English</summary>

**Matt Turk**: And what was the metric? Um and so so the the comparison we made is because like it was a bit of a [ __ ] post but it was like serious research. Yeah. Basically like we were doing serious research because we keep getting this like question and debunking it and we would do it seriously but then I was like no no no this is like too like complicated like let's make it very simple. So I was like, "Guys, why don't we just compare it to like hamburgers?" Because because I've heard that argument from some like vegetarian people before or some Hindus or like I'm Hindu myself, although you know, and I I I do eat beef sometimes, but you know, like I I'm Hindu, but like you know, so so we made this comparison to hamburgers. Hamburgers require a shitload of water cuz cows, you know, when to for them they require a ton of water and when a cow's taking a lot of water, it's not the cow itself, it's all the feed you're feeding them.

</details>

**Dylan Patel**: 因为没有人用草喂他们的奶牛，然后让雨水来照顾草。他们要么给草浇水，要么最有可能的是，他们进行大规模的工业化玉米、大豆、苜蓿等种植，这些都消耗大量水。或者像杏仁奶，消耗大量的水。农产品是主要的用水者。我认为衡量标准是，**Elon Musk**的**Colossus**数据中心，消耗的水量相当于两家半**In-N-Out**汉堡店。因为那是，你知道，你计算一下每家**In-N-Out**的平均收入是多少，这相当于多少个汉堡包？如果每个人都点套餐，好吧，我们忽略饮料，忽略薯条，我们只谈汉堡包，忽略面包，面包确实需要谷物，我们只谈肉。

<details>
<summary>Original English</summary>

**Dylan Patel**: Because no one grass feeds their cows, and just lets the rain take care of the grass. They like either rain the the grass or most likely they do mass industrial farming of corn, soybean, alfalfa, etc., which uses shitloads of water. Like, or like almond milk like uses tons and tons of water. Like produce is the main user of water. I think the metric was the entirety of **Elon Musk**'s **Colossus** data center, uses as much water as two and a half **In-N-Out**s. Because that's, you know, you do the calculation on how many how many b what's the average revenue per **In-N-Out** and how many hamburgers does that translate to? If everyone's ordering like a combo, okay, let's ignore the drink, let's ignore the fries, let's just talk about the hamburger, let's ignore the bread, which does use have grain, let's just do the meat.

</details>

**Matt Turk**: 还有奶酪。突然间，所有的水，有那么多的水。一个查询，你所有AI的使用量，普通用户的**ChatGPT**使用量，就像一个汉堡包。这就像，好吧，这不算什么。因为这些数据中心实际上是封闭循环的，当然它们会因为冷却而蒸发一些水，但通过蒸发冷却，它们使用的电力更少。这实际上对环境更好，而不是不使用蒸发冷却。所有这些原因都说明，AI消耗所有水的这个神话或骗局根本是胡说八道。**Meta**在路易斯安那州的数据中心正在受到抗议，因为水，它将成为世界上最大的数据中心。到目前为止，至少宣布的将达到四到五千兆瓦。我们正在追踪一些其他可能同样大或更大的数据中心。但**Meta**正在受到抗议，因为那个地区周围的当地居民说：“哦，水很脏。这是因为这个**Meta**数据中心。”

<details>
<summary>Original English</summary>

**Matt Turk**: And the cheese. And all of a sudden all this water is there's so much water. Like a single query like all of your AI usage from **ChatGPT** of the average user is like a hamburger. Like it's like okay, this is nothing. Because these things are the data centers actually are like they're mostly closed loops and like sure they evaporate some water for like cooling reasons, but like by doing evaporative cooling, they're using less power. And that's actually better for the environment than than not using evaporative cool. There's all all these reasons why this myth or hoax of AI of AI using all the water is just nonsense. Like **Meta**'s data center in Louisiana is getting protested because the water it's it's going to be the largest data center in the world. It's going to be like four or five gigawatts at least announced so far. We're tracking some other ones that are that may be as big or bigger. But **Meta** is getting protested because the local population around that area is like, "Oh, the water's dirty. It's because of this **Meta** data center."

</details>

**Matt Turk**: 还有这些大卡车在这些以前完全空旷的乡间小路上行驶。他们只是对此感到愤怒和恼火。但归根结底，真正使水变脏的是那个地区进行水力压裂。

<details>
<summary>Original English</summary>

**Matt Turk**: And like there's these trucks on these big trucks on these back roads that used to be empty completely. They're just like mad and annoyed about that. But at the end of the day, what actually made the water dirty is that that's an area where you go fracking.

</details>

**Dylan Patel**: 水力压裂要糟糕得多，而且几乎所有的天然气都被运往**LG**码头，然后运往亚洲。比如日本、台湾、中国或韩国，还有一些欧洲。实际上，所有这些水都因为监管不力而变脏。顺便说一句，我支持水力压裂，但这可能也是一个疯狂的观点。但水资源使用并不是一个相关论点。

<details>
<summary>Original English</summary>

**Dylan Patel**: Like fracking is absurdly worse and almost all of that gas is being shipped to an **LG** terminal and being shipped to Asia. Like Japan or Taiwan or China or Korea and some Europe as well. Like actually all of this water is dirty because of regulation fracking. Like I support fracking by the way, but you know that's that's an insane take too maybe. Um but like water usage is is is like not a relevant argument.

</details>

**Matt Turk**: 你看好能源公司吗？我想到**Constellation**的核能或**Vistra**，我想它是一个独立电力生产商。

<details>
<summary>Original English</summary>

**Matt Turk**: Are you bullish on the sort of energy companies I'm thinking **Constellation** for nuclear or **Vistra** I guess is an independent power producer.

</details>

**Dylan Patel**: 我认为**IPP**会做得很好。我认为**IPP**可以以高于他们之前能够获得的溢价来确保新电厂的合同，这些电厂要么是专用的，要么是并网的，但附带电网负荷。例如，公用事业公司现在不会让你只建设数据中心，但如果你配套建设，你会说：“嘿，我要建设这个大型数据中心，但我们也将拥有这个大型发电资产。”比如说，无论是什么，一些**IPP**他们将合作，他们将建设负荷和消耗，即使它是通过电网连接以获得更好的稳定性和更高的可靠性。或者它没有连接到电网，即不并网。

<details>
<summary>Original English</summary>

**Dylan Patel**: I think **IPP**s will do well. I think **IPP**s can secure contracts at premiums to what they've previously been able to for new power plants that are either dedicated or grid connected but come with a pairing of a grid load. For example utilities won't let you just do data centers now but if you come with a a pair you're like hey I'm going to build this massive data center but we're also going to have this massive power generating asset right say you know whatever it is some **IPP** they're going to partner with and they'll build the load and the consumption even if it's connected through the grid for better stability and more reliability. Um or it's not it's behind the meter i.e. not connected to the grid at all.

</details>

**Dylan Patel**: 像**Elon**的**Colossus**数据中心，最初的那个，或者**Abene**的德克萨斯州**OpenAI**的一部分，像**Crusoe**，电力生产商有很多机会获得超额回报。我并不特别看好核能。现有的核能，是的，它会找到一个出价更高的买家，但大部分将是天然气。但你可以用天然气支持可再生能源，然后关闭天然气，成本更高，但没关系。或者你可以用天然气支持风能。

<details>
<summary>Original English</summary>

**Dylan Patel**: Like some part some data centers like partially like **Colossus** from **Elon** the original one or part of **Abene**'s Texas **OpenAI** like **Crusoe** there's a lot of room for power producers to get outsized returns. I'm not necessarily bullish nuclear. Existing nuclear fine yeah it'll it'll it can find a higher buyer higher priced buyer but majority of it will be gas but like you can do like renewables backed by gas and then just turn off the gas and like it's cost more but whatever or you can do wind backed by gas.

</details>

**Matt Turk**: 为什么不是核能？

<details>
<summary>Original English</summary>

**Matt Turk**: And why not nuclear.

</details>

**Dylan Patel**: 花费太长时间。

<details>
<summary>Original English</summary>

**Dylan Patel**: Takes too long.

</details>

**Matt Turk**: 花费太长时间。

<details>
<summary>Original English</summary>

**Matt Turk**: Takes too long.

</details>

**Dylan Patel**: 没有人能快速建造核电站。

<details>
<summary>Original English</summary>

**Dylan Patel**: No one can build nuclear fast.

</details>

**Dylan Patel**: 即使是中国也需要五年才能建造核电站，对吧？它很复杂，不安全。我喜欢核能，我希望它能奏效，但它与AI电力疯狂增长的时间尺度不符。但有很多有趣的事情，比如有客户，有一个客户购买了一座燃煤电厂，我们根据他们出现并说：“是的，我们想购买电力资产。我们相信这个电力故事。”我们为他们提供交易咨询。就像，“好吧，太棒了。”所以，是的。所以，这里有所有我们知道的电厂，你可以从**EIA**等地方获得一些信息。然后我们分析了经济效益，我们查看了该地区正在建设的新数据中心等等，然后他们决定购买一座燃煤电厂，他们重新启动了它，现在他们赚了很多钱，因为现在某个超大规模公司想购买整个电力管道，并在附近放置一个负荷，而不是仅仅作为一个并网资产。所以这是一项非常棒的投资。所以，你知道，电力会做得很好。

<details>
<summary>Original English</summary>

**Dylan Patel**: Even China takes like 5 years to build nuclear. It's complicated. It's unsafe. I love nuclear I wish it would work it's just not relevant in the time scale that like AI's power is going crazy. Um, but yeah, there's a lot of interesting stuff like have clients would like had a client buy a coal plant and we were advising them on the transaction based on they just like showed up and they're like, "Yeah, we want to buy we want to buy power assets. We believe in this power story." It's like, "Okay, great." So, yeah. So, here's all of the like power plants that we know of like you can get some of it from **EIA** blah blah blah. Um which are these like and then we like worked through the economics and we looked at the new data centers being built in the region and all this and then they decided to buy a coal plant and they restarted it and they're like making tons of money now because now someone a certain hyperscaler wants to buy the entire pipeline of power and put a load load near it instead of just being a grid connected asset. So it's like a super awesome investment. So like power is power is going to do great.

</details>

**Matt Turk**: 是的。我本来想谈谈整个AI繁荣的和平红利。总的来说，是的，超大规模公司正在为输电网升级付费，人们将从中受益。或者，投资者显然会受益，在行业工作的人，电工的工资正在飙升，水管工的工资正在飙升。所以有很多行业做得很好，我认为这绝对也是其中一部分。是的。

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah. I was going to talk about peace dividends of the whole AI boom. Generally yes, like hyperscalers are paying for transmission grid upgrades which people will benefit from. Or like investors are obviously going to benefit people who work in the industry electricians wages are skyrocketing you know etc like plumbers wages are skyrocketing so there's like a lot of trades that are doing really well too I think that's definitely also um part of it yeah.

</details>

### 资本支出泡沫与循环交易

**Matt Turk**: 我想很快回到你提到的**英伟达**和**CoreWeave**的交易，在我们结束关于资本支出和泡沫的讨论时。似乎存在循环交易，但也有很多债务在流通。所以我不知道那个交易的具体情况，但我确实听说过这种变体，即一个大型参与者有效地担保债务，成为许多基础设施建设的最后追索权，这加上整个**Oracle**的承诺。

<details>
<summary>Original English</summary>

**Matt Turk**: I wanted to come back quickly to that **Nvidia** and **CoreWeave** deal that you mentioned as we sort of close the discussion on capex and a and a bubble. It seems like there is circular deals but also a lot of debt kind of like flushing around. So I don't know the specifics of of that deal but like I did hear variations of this where effectively you have a large player guaranteeing the debt being the last recourse for a lot of infrastructure build is sort of this plus the whole like **Oracle** commitment.

</details>

**Matt Turk**: 整个事情存在一种脆弱性，这可能有点令人不安。你对此有何看法？

<details>
<summary>Original English</summary>

**Matt Turk**: There there is a fragility into this whole thing that can be a little unnerving. What do you make of it?

</details>

**Dylan Patel**: 我认为这完全没问题。我认为人们正在大惊小怪，制造一些不应该存在的叙事。这就像，好吧，**Google**没有足够的数据中心容量。他们需要人们建造数据中心，但没有人能建造数据中心，因为他们没有资金。在很多情况下，资金不是问题，他们没有资金。或者没有人会给他们贷款，因为他们不信任一些随机的公司。但**Google**会说：“好吧，我们已经对他们进行了尽职调查。我们认为他们可以在这里建造。我们甚至会保证，一旦他们建造好，我们就会购买或开始使用它。”你知道，仅仅有一个客户的承诺就足够了。

<details>
<summary>Original English</summary>

**Dylan Patel**: I think it's like completely fine and I think like people are like freaking out and making narratives where there really is shouldn't be one. It's like well okay **Google** doesn't have enough data center capacity. They need people to build data centers, but no one can build a data center because they don't have the capital. Like don't have, many cases capital is not the, they don't have capital. Or like no one will give them a loan because they don't trust some random [ __ ] company. And it's like, but then **Google**'s like, well, no, we've due diligence to them. We think they can build it here. We'll like even guarantee we'll buy the thing or start using it once they build it. You know, just having a customer alone spoken for it was enough.

</details>

**Dylan Patel**: 在**CoreWeave**的案例中，他们实际上能够做到没有担保。他们能够说：“嘿，看，这是我们与**微软**的合同，用于这么多**GPU**。我想把它们放在那个数据中心、那个数据中心、那个数据中心。这是租用这些**GPU**的合同。我想雇佣这些人。我想做这个。”没有人会，他们没有任何钱，但他们能够让事情成功，因为他们能够让人们借钱给他们。我认为**CoreWeave**做到了这一点，而且没有循环融资。但那是在投资规模是数十亿美元或不到10亿美元的时候。现在投资规模是数千亿美元。

<details>
<summary>Original English</summary>

**Dylan Patel**: Um, in the case of **CoreWeave**, they were actually able to no backs stop. They were able to just say, "Hey, hey look, here's our **Microsoft** contract for this many **GPU**s. I want to put in that data center, that data center, that data center. Here's the contract for renting those **GPU**s. I want to hire these people. I want to do this." No one will like they don't have any money, but then they were able to like have it work out because they were able to get people to lend to them. I think like **CoreWeave** did that and there was no circular financing. But that was when there was like the scale of investment was like single digit billions or less than a billion. Right? Now the scale of investment is hundreds of billions.

</details>

**Matt Turk**: 是的。

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah.

</details>

**Dylan Patel**: 所以问题是，哦，好吧，如果我想要数据中心容量，我如何获得数据中心容量？我只是去找所有看起来聪明、足够聪明能做到但又负担不起的人，告诉他们我会接受它，事实上我不会只接受它。我会去找你的债务人，说我会担保你。

<details>
<summary>Original English</summary>

**Dylan Patel**: Um and so the question is like, oh well, if I want data center capacity, how do I how do I get data center capacity? I just go to everyone who's going to build it looks smart is smart enough to do it but can't afford to do it and tell them I'll I'll take it and in fact I won't just take it. I'll go to your debtor and be like, I'll guarantee you.

</details>

**Matt Turk**: 是的。

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah.

</details>

**Dylan Patel**: 因为，你知道，你显然是一家新公司。我已经审查过你了，但债务人没有。所以，你知道，他们不希望我能够轻易走开，因为在**微软**和**CoreWeave**的交易中，如果**CoreWeave**搞砸了，**微软**本可以走开。

<details>
<summary>Original English</summary>

**Dylan Patel**: Because, you know, obviously you're a new company. I've vetted you, but the debtor hasn't. And so, you know, they don't want me to just be able to walk away because like in the **Microsoft** **CoreWeave** deals, **Microsoft** could have walked away if **CoreWeave** [ __ ] it up.

</details>

**Matt Turk**: 对吧？

<details>
<summary>Original English</summary>

**Matt Turk**: Right?

</details>

**Dylan Patel**: 是的。

<details>
<summary>Original English</summary>

**Dylan Patel**: Yeah.

</details>

**Dylan Patel**: 没有，我的意思是，是的，总是有取消或其他可能。所以，这只是一种进一步的担保形式，至于**Oracle**获得资金，然后**OpenAI**获得资金，**英伟达**支付，这是一个完整的循环。这有点胡说八道，因为**英伟达**正在获得**OpenAI**的股权。他们基本上是在说：“嘿，你每购买一个千兆瓦，我们也会购买一些股权。”

<details>
<summary>Original English</summary>

**Dylan Patel**: There's no I mean, yeah, there's there's always like cancellation or whatever possibilities. And so, this is just a further form of guarantee as far as on like a lot of these back stops as far as on like **Oracle** getting the money and then **OpenAI** getting money and **Nvidia**, paying and it's a whole circular. It's kind of nonsense because it's like **Nvidia**'s getting equity in **OpenAI**. They're basically saying, "Hey, every gigawatt you buy, we'll also buy some equity."

</details>

**Matt Turk**: 是的。

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah.

</details>

**Dylan Patel**: 好的。那么，**英伟达**现在拥有他们认为有价值的资产，**OpenAI**。**OpenAI**正在反过来，试图租用那些，利用他们购买的股权。他们用股权做什么？人们的现金支付并不那么好。他们公司99%以上的支出可能只是计算。

<details>
<summary>Original English</summary>

**Dylan Patel**: Right. Okay. Well, cool. Now, **Nvidia** owns an asset which they think is valuable. **OpenAI**, right? **OpenAI** is turning around and is like trying to rent those uh use the equity they buy. What do they what was their use of equity? People's cash pay isn't that great. It's mostly just 99 plus% of their spend at the company is probably just compute.

</details>

**Matt Turk**: 是的。

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah.

</details>

**Dylan Patel**: 所以，这就像，好吧，那么我筹集了这笔钱。我将做我之前解释的整个事情。第一年和第二年我亏钱。第三、第四、第五年我希望赚钱。**OpenAI**一直在这样做。所以，我将，好吧，我将出去。我已经筹集了500亿美元。我已经筹集了100亿美元。我将筹集它。我将租用一个集群五年，花费650亿美元。我已经租用了那个合同，现在我只有足够的钱支付第一年，说清楚。但我认为，你知道，你相信我，**Oracle**，你认为我会成长，你认为我能够支付。**Oracle**会说：“是的，如果你不能，我想我能够把它卖给其他人。”所以，好吧，太酷了。我今年将花费500亿美元。

<details>
<summary>Original English</summary>

**Dylan Patel**: Uh so so sort of like it's like, okay, well then I I raise this money. I'm going to do the the whole thing I explained earlier. Year one and two I lose money. Year three, four, five, I hope to make money on it. Um, and open has been doing that. So, I'm going to Okay, I'm going to go out there. I've raised $50 billion. I've raised $10 billion. I'm going to raise it. I'm going to rent a cluster for five years for $65 billion. And I've rented that contract and now I only have enough to pay for the first year to be clear. But I think, you know, you trust me, **Oracle**, you think I'm going to grow and you think I'll be able to pay for it. **Oracle**'s like, "Yeah, or if you're not, I think I'll be able to sell it to someone else." So like, okay, cool. I'm going to spend $50 billion this year.

</details>

**Matt Turk**: 是的。

<details>
<summary>Original English</summary>

**Matt Turk**: Yep.

</details>

**Dylan Patel**: 来建造那个数据中心。这就像一个千兆瓦的设施。所以，**OpenAI**是否循环投资，他们消耗的每笔**GPU**都获得一笔投资，这笔投资又被用来支付集群第一年的租金。或者第二年，然后前两年过去，这没问题。

<details>
<summary>Original English</summary>

**Dylan Patel**: To build that data center. And and and this these this is like for a gigawatt. Um and so is it like circular that **OpenAI** is every amount of **GPU**s they consume and gives an investment that investment is turned around to pay for the first year of the rent to the cluster. Um or second year then first two years go, it's sort of like it's fine.

</details>

**Matt Turk**: 是的。是的。

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah. Yeah.

</details>

**Dylan Patel**: 这有点奇怪，但我不认为这是什么大问题。

<details>
<summary>Original English</summary>

**Dylan Patel**: Like it's like it's like it is a little bit funky, but like I don't think it's a big deal.

</details>

**Matt Turk**: 是的。喜欢它。反向观点。也许我们以模型和软件方面结束。我们广泛讨论了硬件和供应链以及所有这些事情。我感觉你对AI的下一步发展非常非常看好。你的室友**Schultoe**，我想你之前在播客中提到的室友，他有效地指出我们才刚刚开始触及表面，在强化学习和所有你身处硅谷圈子里的事情周围，还有很多唾手可得的成果。你的感觉也是这样吗？你在模型方面追踪什么？

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah. Love it. Contrary intake. Maybe let's finish with the models and the software side of things. We talked extensively about hardware and supply chain and all the things. I get a sense that you are super super bullish on what's happening next in in AI. Your roommate **Schultoe** I assume was the roommate that you were talking about earlier on this pod effectively making the point that we're just starting to scratch the surface and there was so much low hanging fruit around you know **RL** and all the things you were in Silicon Valley circles. Is that is that your sense as well and what are you tracking on the model side?

</details>

### AI模型进展与生产力变革

**Dylan Patel**: 一件事是，像**GitHub**提交之类的简单东西，其他东西是使用量，人们使用量有多大，所有这些东西。我认为有很多不同的替代数据源可以追踪AI模型进展，以及token经济学。所以这就像我们的一整套实践。

<details>
<summary>Original English</summary>

**Dylan Patel**: One thing is like simple stuff like **GitHub** commits other things are like what's the amount of usage how much are people using like all these sorts of things. I think there's so many different alternative data sources for tracking AI model progress area tokconomics token economics tokconomics and so that's like an entire practice for us.

</details>

**Matt Turk**: 你在重新定义加密货币的术语吗？

<details>
<summary>Original English</summary>

**Matt Turk**: Are you rebranding the term from crypto?

</details>

**Dylan Patel**: 我，是的，我不相信加密货币的人。我一直讨厌他们。

<details>
<summary>Original English</summary>

**Dylan Patel**: I yeah I don't believe in crypto people like I've always hated them. [laughter]

</details>

**Matt Turk**: 所以现在你正在使用这个术语。

<details>
<summary>Original English</summary>

**Matt Turk**: So now you're taking the term.

</details>

**Dylan Patel**: 是的。是的。**Jensen**现在也用了这个词。所以我说服他使用了这个词。他把它用作主权，所以我想我们赢了。

<details>
<summary>Original English</summary>

**Dylan Patel**: Yeah. Yeah. And **Jensen**'s used it now. So I've like I've convinced him to use the word. He's used it as sovereigns and so I think I think we've won.

</details>

**Matt Turk**: 太棒了。恭喜。

<details>
<summary>Original English</summary>

**Matt Turk**: That's awesome. Congratulations.

</details>

**Dylan Patel**: 我对他说过。我们写在文章里了。这是一种完整的咨询实践，我是在2023年开始的，就是token经济学，我们一直在努力构建这些。但基本上，我认为主要的事情是，不会编程的人现在可以使用**Claude Code**了。我认为人们不明白，即使你不会编程，你从未接受过软件开发培训，你从未从事过软件开发工作，你也可以编程。

<details>
<summary>Original English</summary>

**Dylan Patel**: I've said it to him. We've written it in articles. It's an entire practice of consulting that I just I started in 2023 was token economics and we've been trying to build out these like but basically I think the main things are like people who don't code can use **Claude Code** now. I think people don't understand that like even if you don't code you've never had any training in software development, you've never take had a job as a software developer you can code.

</details>

**Dylan Patel**: 让我们举一个我们公司一位分析师的例子。他有工程背景，但专注于半导体系统，从事机械系统等工作。他们编写了这个东西，他们想分析洁净室的面积。洁净室是晶圆厂的建筑，里面有所有工具，是世界上最复杂的建筑，有各种化学系统等等。一家建造系统的公司建造这些系统，以及那家公司的收入。所以，这就像，好吧，我们有这个晶圆厂数据集。指向它，就像，嘿，这是这个晶圆厂数据集。它们所有占地面积是多少？我们有一个我们单独用**Claude Code**构建的东西，它用于数据中心、晶圆厂和其他所有东西，只是从卫星图像计算某个东西的面积。非常简单。所以我们有所有这些东西的占地面积。指向它。这是公司名称。好的，去查找文件。所以它挖掘了所有这些文件。它提取了数据。好的，太棒了。现在告诉它比较这两个。制作一个图表。太棒了。哦，等等。这里有一个奇怪的拐点。哦，那是因为他们五年前收购了一家公司。你能否在不考虑那家被收购公司的财务数据的情况下，对这个分析进行预测？好的，太棒了。

<details>
<summary>Original English</summary>

**Dylan Patel**: Let's take an an example of what one of the one of the analysts at my company did comes from a engineering background but on like semiconductor systems uh like worked on mechanical systems worked on these sorts of things and they coded this thing which was they wanted to do an analysis of area of clean rooms. Clean rooms are the building that you the fab has all the tools in the most complicated kind of building in the world has every all sorts of chemical systems and all this area of that a company who builds systems builds these systems and revenue of that company. And so it was like, okay, uh we have this fab data set. Pointed it at it was like, hey, here's this fab data set. What's the square footage of all of them? And we have this like thing that we built which uh just pulls with **Claude Code** separately which for data centers and and and fabs and everything else just calculates the area of something from a from a satellite image. Very simple. So we have the square footage of all these things. Points at that. Here's the company name. Okay, go find the filings. So it dig dug through all these filings. It it pulled the data. Okay, great. now told it to um compare these two. Make a chart. Great. Oh, wait. There's this like weird inflection. Oh, that's because they bought a company five years ago. Can you do a proform of this analysis without those financials of that of that company they acquired? Okay, great.

</details>

**Dylan Patel**: 然后我们就能为我们的客户以及其他一些有趣的细节，从一个从未真正编程过的人那里，仅仅使用**Claude Code**，就完成了所有这些。这甚至不是他们的，它写了笔记，他们甚至没有全职工作3小时。他们只是告诉模型，然后去做其他事情，告诉模型，然后去做其他事情。他们只是做了这个。人们不明白，像，我认为，如果你去和任何一个非常初级的分析师交谈，无论是风险投资，尤其是增长型风险投资，还是公开市场或私募股权，他们的工作就是查找数据，清理数据，制作图表。现在这就是**Claude Code**。你不需要初级分析师。就像很多公司已经停止招聘L4工程师，因为它没用。我为什么要招聘L4工程师？我直接让**Claude**去做。

<details>
<summary>Original English</summary>

**Dylan Patel**: And then like we were able to like like figure out an investment case for our clients as well as like some other interesting details from someone who's never really coded just using **Claude Code** and it like doing this all and this is like not even their and it wrote the note and they just like they didn't even like work on this full-time for like 3 hours they just told the model and would go work on other things and told the model and worked on other things they just did this people don't understand that like the skill sets that like I think like if you go talk to an analyst a very junior analyst at any right? Whether it's venture or especially growth venture or public markets or private equity, their their job is like finding data, cleaning it, making charts. It's like this is **Claude Code** now. You don't need junior analysts. Just like a lot of companies have stopped hiring L4 engineers because it's useless. Why would I hire an L4 engineer? I just tell **Claude** to do it.

</details>

**Dylan Patel**: 你会觉得这种情况已经发生了，这是一个非常大的转变。我想说，低级知识工作不再重要了，对吧？我为什么要用**Excel**，当我可以直接告诉**Claude**操作**CSV**文件时？我为什么要用**Word**，当**Claude**可以直接生成**Markdown**，我可以将**Markdown**直接复制粘贴到我们的**WordPress**，然后，你知道，那个**WordPress**现在完全格式化了，这就像，天哪，**Word**有什么用？以及做各种事情有什么用？我认为当我们看模型进展时，那只是针对**Opus 4.5**。**OpenAI**的新模型，我认为会比**Opus 4.5**更好，而且很快就会在3月左右发布。也许是2月或3月，但是的。因为**OpenAI**今天拥有比**Anthropic**更好的强化学习（**RL**）堆栈。只是他们的预训练模型与**Anthropic**的预训练相比很糟糕。

<details>
<summary>Original English</summary>

**Dylan Patel**: You you sort of like have this has happened and this is a really big like shift I guess like is that like low-level knowledge work just doesn't matter, right? Why would I why would I use **Excel** when I can just tell **Claude** to manipulate **CSV**s? Why would I use **Word** when **Claude** will just generate the **Markdown** and I can copy and paste the **Markdown** directly into our **WordPress** and then you know and that **WordPress** is fully formatted now and it's like oh my god like what's the point of **Word**? Um and what's the point of doing all sorts of stuff? I think when we look at model progress that's just for **Opus 4.5**. **OpenAI**'s new model I think will be better than **Opus 4.5** and it's coming like somewhat soon in Marchish time frame. I maybe February, Marchish, but yeah. Um because **OpenAI** has a better **RL** stack than **Anthropic** today. It's just their pre-trained models suck compared to **Anthropic**'s pre-training.

</details>

**Dylan Patel**: 所以，如果他们在预训练方面赶上很多，并保持他们更好的**RL**堆栈，他们实际上会有一个更好的模型。另一方面，**Google**拥有比**Anthropic**或**OpenAI**更好的预训练模型，但他们的**RL**堆栈很糟糕。所以如果他们在**RL**方面赶上，这些模型会变得非常荒谬，然后**Anthropic**显然也在进步。然后你看看整个生态系统，每个人都在快速进步。这些时刻正在发生。**ChatGPT**是一个时刻。**Ghibli**是一个时刻。那些更多是消费者层面的。那些不那么像，我的意思是**ChatGPT**每个人都在工作中使用。但我认为**Claude Code**是一个新的时刻，**Claude Code**上的**4.5**是一个新的时刻，你的工作方式已经永远改变了。所以现在我们正在努力强迫我们公司的每个人。这里有54个人。我认为其中一半人会编程。另一半我们正在努力强迫他们使用**Claude Code**。

<details>
<summary>Original English</summary>

**Dylan Patel**: And so like if they catch up a lot on pre-training and keep their better **RL** stack, they would actually have a model that's much better. Flip side, **Google** has a better pre-trained model than **Anthropic** or **OpenAI**, but their **RL** stack sucks. So if they catch up on **RL**, like these models are going to get ridiculously and then **Anthropic** is obviously advancing as well. And so and then and then you look across the ecosystem, everyone's advancing really fast progress. These moments are happening. **ChatGPT** was a moment. **Ghibli** was a moment. Those were more consumer. Those were less like I mean there **ChatGPT** is everyone using it for work too. But like I think **Claude Code** is like a new moment **4.5** on **Claude Code** is a new moment where the way you work has forever changed. And so now we're trying to force everyone in my company. There's 54 people here. I think like half of them have coded. The other half we're trying to force them to use **Claude Code**.

</details>

**Dylan Patel**: 这就像，哦，好吧，你实际上来自半导体咨询背景。哦，你来自半导体封装工程背景。哦，你在晶圆厂工作过。这些人现在都在使用**Claude Code**。他们的生产力正在提高。

<details>
<summary>Original English</summary>

**Dylan Patel**: And it could be like oh well actually you come from a consult a semiconductor consulting background. Oh, you come from like a semiconductor like engineering of like package. Oh, you worked in a fab. Like these kind of people, they're using **Claude Code** now. And and their productivity is being boosted.

</details>

**Matt Turk**: 这就像。

<details>
<summary>Original English</summary>

**Matt Turk**: And it's like.

</details>

**Dylan Patel**: **Cloud Workspace**是新的。它比**Claude Code**差，但它会成功的。他他说他完全用**Claude Code**编写的。你知道的，对吧？或者那是在你的播客上，对吧？是的。是的。所以，我听说过，我想那可能来自你的播客，最初的披露。

<details>
<summary>Original English</summary>

**Dylan Patel**: You know, **Cloud Workspace** is new. It sucks compared to **Claude Code**, but it'll get there. He he he said he coded it entirely in **Claude Code**. You know that, right? Or that was on your pod, right? Yeah. Yeah. So, like um you I've heard that and I think maybe that might have been from your pod uh original uh disclosure.

</details>

**Matt Turk**: 我的播客在那之前，但是的。哦，好的。好的。那是。

<details>
<summary>Original English</summary>

**Matt Turk**: My pod was before that, but yes. Oh, okay. Okay. It was.

</details>

**Dylan Patel**: 我后来在我的播客上请了那个人，他说了那件事。

<details>
<summary>Original English</summary>

**Dylan Patel**: I had as the guy on my pod subsequently said that.

</details>

**Dylan Patel**: 好的。我认为这是一个全新的时代，就像**Schultoe**在节目中说的那样，有很多唾手可得的成果。是的。我的意思是，对于模型的进步，我认为模型的进步会转化为收入。采用是困难的，但实际上**Claude Code**的用户体验很糟糕，但再过6个月，模型就会足够好，用户体验就像和它对话一样。是的。

<details>
<summary>Original English</summary>

**Dylan Patel**: Okay. I think it's like a brand new age and and like there's so much low hanging fruit as **Schultoe** said on the episode when he was here. There's so much low hanging fruit. Yeah. I mean for for the models progressing and I think model progress will translate to revenue. Adoption is difficult but like actually the UX of **Claude Code** sucks but like give it 6 months the models will be good enough that the UX can be like talking to it. Yep.

</details>

**Matt Turk**: 你甚至不需要**CLI**集成，对吧？它会更容易。或者像最近发布的**Claude for Excel**，它还不错。你知道，构建模型和所有这些东西都将是，就像告诉某人一样，为什么要告诉一个初级分析师，当你自己就能做到时？我认为这是一个全新的世界，它是2万亿美元的软件工作，也是工资，但我们也有超过2%的，2%是**Claude**，然后还有**Codex**和**Cursor**以及所有这些其他家伙，所以今天提交的代码中可能5%是AI生成的，甚至更高，标记为AI生成的。当普通工人，那些做电子表格和办公处理的人开始自动化他们的工作流程时，会发生什么？我认为这是一个全新的世界。

<details>
<summary>Original English</summary>

**Matt Turk**: And you don't even have to have like you know **CLI** integration, right? It's something even easier. Or like **Claude for Excel** was released recently and it's like not bad you know building models and like all these sorts of things are just going to be like tell someone right like why tell a junior analyst right when you can just do it yourself I think it's a whole new world and it's a $2 trillion of software work but also of wages but it's also we have more north of 2% 2% is **Claude** and then you know there's **Codex** and **Cursor** and all these other guys so probably like 5% of code committed today is AI generated if not higher marked as AI generated what's going to happen when normal workers who do spreadsheets and office processing start automating their workflows. I think it's a whole new world.

</details>

**Matt Turk**: 说到**Schultoe**，我们都同意他是一个完美的样本。

<details>
<summary>Original English</summary>

**Matt Turk**: And speaking of **Schultoe**, we both agreed that he was a a perfect specimen.

</details>

**Dylan Patel**: 兄弟，我，我一直都是异性恋，但我被指控是同性恋，这完全没问题，因为我太喜欢赞美这个人了。因为，想想看，对吧？他身高1米93。他长得很好看。他有澳大利亚口音。听起来很棒。你听过他的声音，我可能有一个烦人的声音。他的声音听起来很棒。他编程能力超强。他是一个奥运级别的击剑运动员。他学任何运动都非常擅长，因为他身体素质很好。这就像，“天哪，你真是个极品。”

<details>
<summary>Original English</summary>

**Dylan Patel**: Dude, [laughter] I' I've been I'm straight, but I've been accused of being homosexual, which is perfectly fine for for how much I like praise this man because like, think about it, right? He's like 6'4. He's like really good-looking. He's like Australian accent. Sounds amazing. Like you've heard his I I have like a annoying voice probably. His voice sounds amazing. He's absurdly good at coding. He was an Olympian level fencer. Like like he picks up any sport, he's really good at it, because he's athletic. It's like, "Holy crap, you're a specimen."

</details>

**Matt Turk**: 是的。是的。

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah. Yeah.

</details>

**Dylan Patel**: 这段剪辑，然后发给他。

<details>
<summary>Original English</summary>

**Dylan Patel**: This clip and sent him [laughter] for sure.

</details>

**Matt Turk**: 是的。这一定，你知道，我想，也许有些人不关注**Twitter**上的实时报道，也没有听说过你们都是室友，或者你和**Schultoe**以及**Dwarish**是室友，而**Dwarish**是播客界的播客。所以这一定非常。

<details>
<summary>Original English</summary>

**Matt Turk**: Yeah. It must be uh you know I guess uh may maybe some people don't follow the playbyplay on on **Twitter** and like don't haven't haven't heard of like the fact that all of you guys are roommates or you roommate with **Schultoe** and then with **Dwarish** and **Dwarish** is like the podcasters podcaster. So it must be absolutely.

</details>

**Dylan Patel**: 播客界的播客是什么意思？

<details>
<summary>Original English</summary>

**Dylan Patel**: What's a podcasters podcaster mean?

</details>

**Matt Turk**: 播客界的播客，是指其他播客都渴望成为或学习的对象。

<details>
<summary>Original English</summary>

**Matt Turk**: The podcaster that other podcasters aspire to to to become or learn from.

</details>

**Dylan Patel**: 是的。是的。他准备的时候，你知道，他非常专注，他为采访做了非常充分的准备。这很棒。

<details>
<summary>Original English</summary>

**Dylan Patel**: Yeah. Yeah. His his when he's preparing, you know, it's like he's he's he's he's so locked in and he prepares so hard for interviews. It's great.

</details>

**Matt Turk**: 不，他简直不可思议。

<details>
<summary>Original English</summary>

**Matt Turk**: No, he's he's just incredible.

</details>

**Dylan Patel**: 然后他可能在节目中只说了100个词。

<details>
<summary>Original English</summary>

**Dylan Patel**: And then and then he might only say like a hundred words on the episode.

</details>

**Dylan Patel**: 但他准备得非常充分，然后人们才意识到，哦，哇，他不仅仅是，就像，哦，他只是有好的嘉宾。不不不。他准备得非常充分，但如果你没有意识到，你就看不出来。然后一旦他开始写更多东西，人们就说，哦，哇，他实际上非常非常聪明。是的，因为他学习得非常疯狂。这就像，“哦，我正在采访一位研究这个的AI研究员。我要尝试训练一个该死的模型。”是的。

<details>
<summary>Original English</summary>

**Dylan Patel**: But he's prepared so hard and then like I think people just realized, oh wow, he's not just like, it's like, oh, he just has good guests. No, no, no. Like he's preparing really hard, but you can't tell if you're not like realizing that. And then once he started writing more and he started writing more, people like, oh wow, he's actually really really smart. It's like, yeah, cuz he's studying like crazy. Like it's like, "Oh, I'm interviewing an AI researcher who worked on this. I'm gonna try and train a freaking model." Yeah.

</details>

**Matt Turk**: 没错。他录制这些东西时就是这种投入程度。

<details>
<summary>Original English</summary>

**Matt Turk**: Right. It's like that's the level of like commitment he goes to when he records this stuff.

</details>

**Matt Turk**: 你们碰面时都聊些什么？是没完没了地聊AI，还是除了AI什么都聊？

<details>
<summary>Original English</summary>

**Matt Turk**: What do you guys talk about when you bump into each other? Is that is that AI non-stop or you talk about everything but AI.

</details>

**Dylan Patel**: 和**Schultoe**？就像**《帝国时代》**游戏，因为我们一度非常投入。我们只聊那个和他制作的**RTS**游戏。和**Dwarish**，我的意思是，什么都聊。就像普通的室友话题。就像，“你的约会生活怎么样？”“哦，好吧。你约会了。进展不顺利。好吧，好吧。”是的。你知道，就像，哦，你知道，那是我。那是我。你知道，我的日子过得不顺利。不，我只是开玩笑。或者就像，“哦，你想吃晚饭吗？我们可以邀请几个朋友。”是的，太棒了。或者，你知道，也聊各种普通的事情。当然，我们也聊很多科技。这就像我们的生活。科技是最有趣的事情。

<details>
<summary>Original English</summary>

**Dylan Patel**: With **Schultoe**? It's like the **Age of Empires** game, because we we got super into it for a bit. We talked only about that in his **RTS** that he made. Uh with with with **Dwarish**, it's I mean, it's all sorts. It's like normal roommate stuff. It's like, [laughter] "How's your dating life?" "Oh, okay. You went on a date. It wasn't well. It didn't go well." "Okay, well, okay." Yeah. You know, like, oh, you know, like that's me. That's me. You know, my days don't go [laughter] well. No, I'm just kidding. Um, or like it's like, oh, you want to like have dinner? We can invite a few friends. Like, yeah, great. Or like, you know, it's like all sorts of like normal stuff, too. Um, al obviously we also do talk about a lot about tech. Like we are like this is our lives. Um, and tech is the most fun thing.

</details>

**Matt Turk**: 太棒了。很棒的旧金山传说。**Dylan**，非常感谢你。那真是太棒了。非常享受。学到了很多。所以，非常感谢你来参加播客。

<details>
<summary>Original English</summary>

**Matt Turk**: Awesome. Well, great. Great San Francisco lore. Uh, **Dylan**, thank you so much. Uh, that was absolutely fabulous. Really enjoyed it. Learned a lot. So, really appreciate your coming on the pub.

</details>

**Dylan Patel**: 非常感谢。

<details>
<summary>Original English</summary>

**Dylan Patel**: Thank you so much.

</details>

**Matt Turk**: 大家好，我是**Matt Turk**。感谢收听本期**Mad**播客。如果你喜欢本期节目，如果你还没有订阅，或者在任何你正在观看或收听本期节目的平台上留下积极的评论，我们将不胜感激。这真的有助于我们发展播客并邀请到优秀的嘉宾。谢谢，下期节目再见。

<details>
<summary>Original English</summary>

**Matt Turk**: Hi, it's **Matt Turk** again. Thanks for listening to this episode of the **Mad** Podcast. If you enjoyed it, we'd be very grateful if you would consider subscribing if you haven't already or leaving a positive review or comment on whichever platform you're watching this or listening to this episode from. This really helps us build a podcast and get great guests. Thanks, and see you at the next episode.

</details>