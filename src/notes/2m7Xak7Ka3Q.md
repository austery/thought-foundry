---
author: Bloomberg Podcasts
date: '2026-02-16'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=2m7Xak7Ka3Q
speaker: Bloomberg Podcasts
tags:
  - memory-chip-shortage
  - hbm-demand
  - commodity-dram
  - supply-chain-disruption
  - ai-supercycle
title: AI如何驱动DRAM价格飙升：记忆体超级周期与供应链挑战
summary: 本期Odd Lots播客探讨了人工智能对内存芯片市场的深远影响。随着AI模型训练和推理对高带宽内存（HBM）和商品DRAM的需求激增，市场正经历前所未有的“超级周期”。嘉宾Ray Wang解释了AI需求如何导致DRAM供应紧张，价格飙升，并对PC、手机、游戏机等消费电子产品产生挤出效应。讨论还深入分析了内存行业的周期性、HBM与商品DRAM的生产权衡，以及中国内存制造商的竞争格局。预计这种紧张局面将持续到2027年，凸显了AI时代下硬件供应链的脆弱性。
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
  - Micron
  - Samsung
  - Hynix
  - Apple
  - Nintendo
  - Nvidia
  - MediaTek
  - Semi Analysis
products_models:
  - GPT-3
  - Gemini
  - Claude
  - Nintendo Switch
  - DDR
  - LPDDR
  - HBM
media_books: []
status: evergreen
---
### AI对内存的需求

**Ray Wang**: 为什么AI需要大量内存？你刚才解释了，它对推理很重要，对训练也很重要。但为什么呢？假设你想训练一个模型，你需要海量数据。你需要投入海量数据来训练你的模型。然后对于推理部分，你需要一个接一个的数据来计算，有点像一个链条。对吧？所以要完成这个过程，你如何保留之前处理过的数据，并处理之后进来的新数据？对吧？这就是为什么你需要大量内存。

<details>
<summary>Original English</summary>

**Ray Wang**: Why does I need a lot of memory at all? So you just explain, you know, it's important for inference. It's important for training, whatever. But like, why? Let's say you want to train a model, right? And then you need, you just need the pure tons of data. What you need to do is right. Tons of data there to train your model. And then for the inferencing part, like you need one data after another to kind of compute one after another, sort of a chunk of sort. Right. So to to do that process, how can you keep the previous data you process to keep in there and the process to another data that coming out after it? Right. So that's why you need a lot of memory,

</details>

**Ray Wang**: 回到**ChatGPT**刚出现的时候，人们只是问一些非常简单的问题。现在人们的问题变得更复杂了。人们会问：“你能写一份关于张量如何在人们身上发生的20页报告吗？”举个例子，他们会得到一份20页的报告，然后等待大约五分钟。对吧？所以如果你考虑这个过程，他们做了所有的计算、所有的研究，并且还给你输出的令牌。你从提示中得到的答案比你给出的提示要长得多。对吧？这也是你回到**GPT-3**时得到的更长的响应。记住，我们知道**GPT-3**时期的使用量，也就是每月日常用户量。但现在，**GPT**的使用量我认为是8亿。对吧？而且我们还没有包括**Gemini**、**Claude**等AI的用户。对吧？所以如果你把这些影响都乘起来，我认为内存管理效率低下，这对我来说非常清楚。

<details>
<summary>Original English</summary>

**Ray Wang**: you know back to **ChatGPT** starts coming up. People just like hey I wasn't whether I like a very simple questions people right now is sort nastier. People are doing like hey can you write of, plenty more. How tensor can happen on people arrival example. They will give like 20 page report and they will wait like five minutes. Right. And so if you think about a process like they do all the calculation, all the researchers, and also give you the output tokens that, that's not, and so you get from your prompt less significant way longer than the prompts that you are given. Right. And that's also the longer response that you are getting when you go back to the **GPT-3**. And remember, usage, we know back to **GPT-3** was the workload, you know, the monthly daily users. But right now it was I think the use of **GPT** was 800 million. Right. And we are not included. The users for the **Gemini** for called for AI. Right. So if you multiply loss, in fact, I think the memory the management inefficient and it's very, clear to me.

</details>

### AI对商品市场的挤出效应

**Joe Weisenthal**: 大家好，欢迎收听**Odd Lots**播客的又一集。我是**Joe Weisenthal**。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Hello and welcome to another episode of the **Odd Lots** podcast. I'm **Joe Weisenthal** and I'm **Tracy Alloway**.

</details>

**Tracy Alloway**: 我是**Tracy Alloway**。**Tracy**，你知道我担心什么吗？我不知道我是否担心，但感觉事情正在朝着这个方向发展，那就是所有能源、工业大宗商品，我们用于任何目的的任何东西，都将用来喂养AI这头巨兽，而我们人类将被冷落。好吗？我们什么都没有。我们必须把所有东西都喂给AI，也许在未来十年、二十年或五十年，AI会变得如此强大，以至于它会说：“为什么人类要拥有这些？我们应该把所有东西都留给自己。”

<details>
<summary>Original English</summary>

**Tracy Alloway**: Tracy, you know what I'm worried about? I don't know if I'm worried about it, but it kind of feels like the direction things are going, which is that like all energy, industrial commodities, anything that we use for any purpose is just going to like feed the AI beast and us humans. We're just going to get left out in the cold. Okay? Nothing for you. We got to like we got to feed it all to the AI and and maybe in ten or 20 or 50 years, the AI is so powerful that this is AI. Why? Why do humans get any of this? We just, we should keep it all to ourselves.

</details>

**Ray Wang**: 我会说这是一个合理的担忧。我的意思是，在某种程度上，我们已经看到了这种**挤出效应**。对吧？所以某些地区的能源价格一直在上涨，最近是内存芯片价格。这最近在财报中随处可见。像**苹果**这样的公司表示，由于内存芯片供应紧张，他们可能不得不提高价格，或者减少手机的使用量。**任天堂**。是的。如果你现在查看**任天堂**的股价图表，它们正在遭受重创，据说这都是因为内存芯片短缺。

<details>
<summary>Original English</summary>

**Ray Wang**: A legitimate concern, I would say. I mean, to some extent, we are already seeing this crowding out effect. Right? So energy prices in certain areas have been going up and most recently memory chip prices. So this has been all over earnings. Recently. You had companies like **Apple** saying that because of a crunch in memory chip supply, they might have to either raise their prices or like cut down on the amount of phones they use. **Nintendo**. Yeah. Like if you pull up a chart of **Nintendo** shares right now, they are just getting hammered and supposedly it is all because of this memory chip shortage.

</details>

**Joe Weisenthal**: 顺便问一下，你还记得你买第一台PC的时候吗？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: By the way, do you remember, do you remember like buying your first PC?

</details>

**Tracy Alloway**: 是的。你比我早买了一台，我想。但我的那台是90年代中期。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah. In like you bought one before I did, I think. But mine was in the mid 90s.

</details>

**Joe Weisenthal**: 是的，是的。我想那是我记得那些东西有多少内存的时候。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah, yeah. I think it's about when I go to remember how much memory those things had.

</details>

**Tracy Alloway**: 哦，几乎没有。是的。我查了一下，很多都不到10兆字节。你知道现在PC有多少内存吗？

<details>
<summary>Original English</summary>

**Tracy Alloway**: Oh like nothing. Yeah. Like I looked it up or something like less than ten megabytes for a bunch of them. You know how much PCs have nowadays?

</details>

**Joe Weisenthal**: 实际上，我不知道。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Actually, I have no idea.

</details>

**Tracy Alloway**: 我想是，让我们看看，16GB。是的。这很疯狂吗？

<details>
<summary>Original English</summary>

**Tracy Alloway**: I think it's let's see, 16GB. Yeah. Is that crazy?

</details>

**Joe Weisenthal**: 是的。这真的很疯狂。我记得，你还记得**Zip Drives**吗？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: It is. It is really crazy. I remember, like, do you remember zip drives.

</details>

**Tracy Alloway**: 是的。天哪。或者还有所有这些特殊的内存外设，你可以购买。它们装在专用的卡带里，诸如此类。我想它们就叫**Zip Drive**。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah. Oh my gosh. And or like and then there were all these special, you know obviously various memory peripherals that you could buy. And they came in sort of dedicated cartridges and stuff like that. I think they were called zip drive.

</details>

**Joe Weisenthal**: 是的。我想就是**Zip Drive**。我不记得了。是的，是的。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah. I think right there. ZIP drive, I don't remember. Yeah, yeah.

</details>

**Tracy Alloway**: 是的。这就是为什么额外的内存存储等曾经是消费者过程中的一个重要部分。我实际上很高兴。我的儿子真的很想要一台**任天堂**，但如果他们因为拿不到内存而无法再生产，那我就会说：“对不起，没有电子游戏。”

<details>
<summary>Original English</summary>

**Tracy Alloway**: It was yeah. That's why additional memory storage etc.. It used to be this big part of the consumer process. I'm actually glad. You know, my son really wants a **Nintendo**, but if they can't produce them anymore because they can't get the memory, then I'll say, sorry, no video games.

</details>

**Joe Weisenthal**: 你真刻薄。你得让他坐下来，然后说：“儿子，我很抱歉。你知道，有一种东西叫**供应链短缺**。”

<details>
<summary>Original English</summary>

**Joe Weisenthal**: That's so mean. You're going to have to sit him down and be like, I'm so sorry, son. You know, there's this thing called the supply shortage.

</details>

**Tracy Alloway**: 是的，我将利用这个机会向他解释全球**供应链**是如何运作的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah, I'm going to use this as a learning opportunity to explain how global supply chains actually work.

</details>

**Joe Weisenthal**: 完全正确。你知道另一个有趣的事情是，如果你看现货**DRAM**价格，我们在终端上可以看到，有很多与AI相关的东西在终端上已经飙升了好几年，最显著的是一些大型芯片公司，比如**英伟达**等。如果你看现货**DRAM**价格图表，大的飙升直到去年年底才出现，从那以后就彻底失控了。所以很长一段时间，即使有AI的故事，我的意思是AI行业像病毒一样传播，人们真的关注那个领域。然后突然之间，它就完全失控了。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Totally. You know what the other the one interesting thing is, if you look at spot **DRAM** prices, which we have on the terminal, you know, there are a lot this is, I think, maybe the interesting dynamic. There's a lot of eye related things on the terminal that have been surging for several years, most notably some of the big chip companies, **Nvidia**, etc. if you look at a chart of spot **DRAM** prices, the big surge wasn't until late last year, and then since then it's gone nuts. So for a long time even there's this AI story and I mean the AI industry like propagated people were really paying attention to that, that area. And then suddenly it's just gone like, you know, haywire.

</details>

**Tracy Alloway**: 失控了。是的。所以很明显，供需严重失衡。我们需要了解正在发生什么，因为我认为，如你所说，很多公司正在遭受巨大损失，而另一些公司则赚了很多钱。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Haywire. Yeah. And so obviously huge supply demand imbalances. We need to understand what's going on because I think the, the stakes are, you know, it's getting so much as you mentioned, a lot of companies are losing out pretty big. Others are making a lot of money.

</details>

**Joe Weisenthal**: 是的，我们确实需要了解内存方面正在发生什么。我们开始吧。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah, we sort of need to get a handle on, what's going on with the memory? Let's do it.

</details>

**Tracy Alloway**: 我很高兴地说，我们确实请到了完美的嘉宾。我们将与**Ray Wang**对话。他是**Semi Analysis**的分析师，最近他发表了一份关于这个主题的全新报告，谈论了**内存超级周期**等等。所以他确实是完美的嘉宾。如我所说，他来自韩国。**Ray**，非常感谢你的到来。

<details>
<summary>Original English</summary>

**Tracy Alloway**: I'm really excited to say we really do have the perfect guest. We are going to be speaking with **Ray Wang**. He's an analyst at **Semi Analysis** and he's recently published a brand new report, on exactly this topic. Talk about a memory supercycle and so forth. So truly the perfect guest. As I mentioned, he's, comes to us from Korea. Ray, thank you so much for coming on.

</details>

**Ray Wang**: 很高兴见到你们两位。谢谢邀请。

<details>
<summary>Original English</summary>

**Ray Wang**: Hey, nice to be both. And thanks for having me.

</details>

**Joe Weisenthal**: 有这么多问题。非常感谢你加入我们。我们从基础开始吧。AI有什么特别之处，或者说发生了什么，核心思想是什么，使得对各种形式内存的需求现在似乎正在蓬勃发展，以至于让供应链措手不及？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: So many questions. Really appreciate you. Joining us, let's just start with the basics. Like, what is it about AI or what is going on? What is the core idea such that demand for memory and various forms is absolutely seemed to be booming right now in a way that call it the, supply side of the equation, very off guard.

</details>

### 内存市场供需失衡的根源

**Ray Wang**: 是的，我认为，要真正了解这种供需失衡的动态，我们确实需要回顾几年前发生了什么。对吧？因为你的产能就像你几年前的投资。而2022年和2024年发生的事情，它有点像一个下行周期。对吧？因为你记得，在疫情期间，所有公司都试图抢购大量的**DRAM**。对吧？而且有很多采购。对吧？这种上行周期，对吧，生命周期非常非常短，因为现在疫情逐渐好转。对吧？你实际上不需要那么多**DRAM**。当时公司会说：“嘿，你实际上没有可持续的需求，对吧？”所以他们不想过度投资来扩大产能。当你进入下行周期时，你的资本支出通常会受到很大限制，公司从他们的角度来看，他们会尽量保守。所以这就导致了2024年和2025年，你的增量晶圆产能增长，所以**DRAM**实际上是相当有限的。

<details>
<summary>Original English</summary>

**Ray Wang**: Yeah. I think, you know, to really to get kind of, some imbalanced supply demand dynamics, really, we wanted to get like, you know, what happened a few years ago, right? Because, you know, your capacity is like your investment few years ago. And what's happening, you know, in 2022 and 2024, it's it's sort of, a down cycle. Right? Because you remember, during a Covid, all the companies are try to log in to buy tons of **DRAM**. Right. And you know, there's a lot of, purchases there. Right. And this sort of like up cycle, right. Plays like a very, very short life cycle because like when now Covid gradually getting better. Right. You actually don't need that much **DRAM**. And back then the company will be like, hey, you actually don't have a sustainable demand, right? So they don't want to over invest to expand their capacity. And when you go into the downside, your CapEx typically being very constrained, very like, you know, company from their perspective, they try to be conservative. So that leads to 2024 and 25 that you're in incremental wafer capacity, the goal. So **DRAM** it's actually quite limited.

</details>

**Ray Wang**: 但需求方面发生的事情是，需求实际上加速得非常快。对吧？你知道，看待这一点的一种方式是看即时收益。对吧？当你一方面需求加速得如此之快，另一方面供应方面，你的供应却跟不上。而且供应背后还有更多的细微差别。对吧？因为以前他们只是供应所有的商品**DRAM**，比如**DDR**、**LPDDR**。对吧？所有用于PC、笔记本电脑、手机、**任天堂Switch**的内存。对吧？但你知道AI领域正在发生什么。有一种新东西叫做**HBM**。把它想象成一种专门用于AI的内存。这种内存对**DRAM**晶圆的消耗非常大。给你一个概念。对吧？在相同的晶圆基础上，如果你生产商品**DRAM**，你可以生产三倍的比特，但你只能生产一份**HBM**的比特。对吧？而且这个比例在未来几年当你转向**HBM4**时还会更高。对吧？所以从这个角度来看，在相同的晶圆基础上，你只能生产那么多**HBM**。而现在发生的情况是，**HBM**利润非常非常高。为什么我们不把更多的晶圆用于**HBM**呢？但问题是，对吧？你只有那么多晶圆，你需要尝试做所有事情。所以这导致了大量供应流向商品**DRAM**。对吧？所以我们同时面临着这两种情况。

<details>
<summary>Original English</summary>

**Ray Wang**: But what's happening on the demand is actually you know demand was accelerating so fast right. You know, just you know, one way to look at this is to get immediate earnings. Right. And if you, when you, when you on one side, you demand accelerating so fast. On the other hand the supply side, your, supply just couldn't catch up. And there's more nuances behind that, behind the supply. Right. Because before they are just supplying all the commodity. Ran like **DDR**, **LPDDR**, right. All the memory that goes to a PC goes through laptops, goes through your mobile, goes to **Nintendo Switches**. Right. But you know what's happening. You know, in this I it's like there's a new thing called **HBM**. And think about it's like a specialized memory for directly for this reader. And that memory is extremely **DRAM** wafer intensive. To give you a sense. Right. You know, on the same way, for a basis, you can produce three more bits, if you do commodity **DRAM**, but you can only produce one bit of **HBM**. Right. And that ratio will actually going higher when you go to **HBM4** in the next few years. Right. So in that way, on the same wafer basis, you can you can only produce that much. **HBM** and right now what's happening is like, hey, this is super, super, profitable. And why not? We dedicate more wafer for **HBM**. But so here's the problem, right? You only have that much wafer and you need to try to do everything. So that's handing out a lot of the supply going into the commodity **DRAM**. Right. So we have we have sort of both things happening.

</details>

**Ray Wang**: 基本上，我认为真正让人们意识到这一点，可能是在2025年第二季度，人们才意识到：“嘿，我们实际上可能有足够的**DRAM**，包括足够的商品**DRAM**和**HBM**来满足需求。”

<details>
<summary>Original English</summary>

**Ray Wang**: And essentially comes down to like I think really in using start really kind of people aware, it's like probably Q2 2025 that people realize, hey, like, you know, we actually could have enough, like enough **DRAM**, both enough, commodity **DRAM** and also **HBM**, for the demand.

</details>

### 内存行业的商品属性与周期性

**Joe Weisenthal**: 你提到了“商品”这个词。哦，等等，不是那个“商品”词。你提到了**大宗商品**。当我读到这些关于内存芯片短缺的文章时，人们使用**大宗商品**式的语言。对吧？所以你经常听到**超级周期**。你听到**商品化芯片**与，你知道，其他类型的芯片。它们是定制的吗？我不这么认为。但无论如何，这个特定行业在多大程度上真正类似于**大宗商品**行业？然后也许可以多解释一下为什么它历史上一直具有很强的周期性。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: So you mentioned the, the C word, just that. Oh, wait, not that C word. Commodities. You mentioned commodities. And when I'm reading these articles about a memory chip shortage, people use commodity type language, right? So you hear supercycle a lot. You hear commoditized chips versus, you know, other types of chips. Are they customized? I don't think so. But anyway, how much does this particular industry actually resemble a commodities like industry. And then maybe explain a little bit more why historically it has been really, really cyclical.

</details>

**Ray Wang**: 是的，我认为有几个原因。对吧？从根本上说，**DRAM**的每比特成本实际上每年都在显著下降。对吧？即使在最近一年，它也没有下降。但每年下降的标准层实际上正在放缓。就像，你知道，在过去的十年、二十年里。对吧？所以成本一直在下降。对吧？所以成本很难成为最具竞争力的部分。对吧？

<details>
<summary>Original English</summary>

**Ray Wang**: Yeah. So I think a couple of reasons. Right. You know, fundamentally the, the sort of the cost per bits for the year end was actually coming that coming down every single year significantly. Right. Even, you know, most recent year this isn't coming down. But like the the standard layer coming down for every single year is actually slowing down. Like, you know, over the past like ten, 20 years. Right. So the cost was key going down right. So the cost is hard to be kind of like you know, the most competitive part. Right.

</details>

**Ray Wang**: 另一件事是，关于**DRAM**标准的委员会的理解。对吧？所以当你生产类似产品时。对吧？你只是说：“哦，这个在效率方面稍微好一点。”所以性能在这里那里稍微好一点。所以，你知道，内存供应商很难显著区分他们的产品与竞争对手的产品。对吧？所以最终会是什么呢？最终会是市场价格。对吧？当你销售类似产品并针对类似受众时。对吧？这对我来说有点像**大宗商品**，你知道，有点像半导体**大宗商品**产品。我认为这是我看到的**DRAM**的两个主要特征。而且我认为这与**HBM**有点不同。

<details>
<summary>Original English</summary>

**Ray Wang**: Another thing is the earth. So the, the understanding, the sort of the committee that that set up the standard for the event. Right. So well you are doing in a similar products. Right. You just having, you know, oh this is kind of a little better for efficiency. So the the performance was a little better right here and there. So like it's harmful, you know, a memory supplier to significantly differentiate their products compared to their competitor. Right. So essentially what's the what's the things that will in the end will be the market prices. Right. And then when you're selling the similar products and you are targeting similar audience. Right. That sort of like on a commodity, you know, sort of semiconductor commodity products to me. And I think those are the two men characteristics I'm seeing for **DRAM**. And I think that's a little, little different.

</details>

### HBM与商品DRAM的区别

**Joe Weisenthal**: 解释一下。所以有**商品DRAM**，然后有**HBM**。**HBM**是一种**DRAM**吗？你是这个意思吗？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: For each VM, explain this. So there's commodity **DRAM** and then there's **HB**. What it **HBM** is a type of **DRAM**. Is that what you're saying.

</details>

**Ray Wang**: 是的。是的。所以，从某种意义上说，是的。就像，给我们讲讲**商品DRAM**版本，以及为什么会有**HBM**（**高带宽内存**）这种东西。这到底是怎么回事？

<details>
<summary>Original English</summary>

**Ray Wang**: Yes. Yes. So, so in the sense of like sort of yeah. Like walk us through like what the commodity version and why there is this thing called **HBM** high Bandwidth memory. What that's all about.

</details>

**Ray Wang**: 是的，是的。所以**HBM**的出现实际上归结为模型层，因为，你知道，当你尝试扩展你的AI模型时。对吧？你的想法是，如果你的承诺每年显著增加。对吧？因为你的计算机增长速度快得多，但你的内存带宽实际上仍然受限，增长非常有限，特别是如果你使用传统**商品DDR**的内存。那么带宽实际上是有限的。所以从内存供应商的角度来看，他们会想：“嘿，我们如何扩展带宽来支持低内存，他们将用于扩展AI，对吧？”所以我们称之为**HBM**。

<details>
<summary>Original English</summary>

**Ray Wang**: Yeah. Yeah. So essentially the emergence of **HBM** is really go down to a kind of model layer because, you know, this is when you like, try to scale and try scaling your air model. Right. Your thoughts is if you're promising, increasing significantly every single year, right. Because your computers increase, lot faster, but your memory bandwidth was actually still off is increasing by some very limited, especially if you are using the memory from, kind of traditional commodity **DDR**. And then the bandwidth is actually limited. So from a memory supply, they are thinking, hey, like, how can we expand the bandwidth to supporting low memory. They're going to, to skill scale the AI, right? So let's call ourselves **HBM**.

</details>

**Ray Wang**: 所以**HBM**。所以有8个或12个，甚至未来16个**DRAM**芯片堆叠在一起。对吧？所以这让你拥有更高的带宽，有足够的容量来支持过去几年和未来几年AI的发展。这非常不同。对吧？你把所有这些芯片堆叠在一起，而不是说：“嘿，我们只有一个**DRAM**产品作为芯片。”对吧？而且这也引出了一个观点，即**HBM**的制造，包括前端和后端封装，比**商品DRAM**复杂得多。这就是为什么我说**商品DRAM**更像**商品化**的。所以我觉得**HBM**不那么**商品化**，因为它复杂得多。对吧？对于供应商来说，你实际上可以在前端或后端技术上进行差异化。当你做得更好时。对吧？它会给你带来更好的利润，更好的能力来与竞争对手竞争。对吧？你知道，像散热之类的东西，这些是真正能脱颖而出的东西。对吧？这与**商品DRAM**非常不同。

<details>
<summary>Original English</summary>

**Ray Wang**: So the **HBM**. That's so there's that, multiply 8 or 12 or even, you know, future 16 there and dies together. Right. So that making you have like essentially having higher, bandwidth, have enough capacity to support AI development, over the past few years and in the next few years. And that's very different. Right? You're stacking all these dice together compared to, hey, I'm just we just have like one **DRAM** products as a chip. Right. And also that also comes out to a point that **HBM** manufacturing also in the packaging of both front end and back end is a lot more complex compared to commodity **DRAM**. And that's why I say commodity right is more like commoditized. So I think **HBM** is less so because it's a lot more complex. Right. And for supplier you can actually differentiate either from the front end or back end technology. And when you know it's better right. And gives you a better margin, better ability to compare, compete with your competitor. Right. You know, stuff like thermal, things like that is the thing that will really stand out. Right? And that's very different from a commodity **DRAM**.

</details>

**Joe Weisenthal**: 堆叠越来越多的层，这让我想起了**剃须刀大战**，就像，你知道，**吉列**会推出三刀片剃须刀，然后第二天就有人推出12刀片之类的。所以如果我是一家像**任天堂**这样的公司，我实际上是如何采购芯片的？因为我认为这在我们讨论现在正在发生的事情时会很重要。但我是否有与主要供应商的远期合同，或者我有一个装满我以前购买的芯片的仓库？他们实际上是如何管理这些的？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: getting more and more layers on it kind of reminds me of the razor wars where like, you know, **Gillette** would unveil a three blade thing, and then the next day someone has like 12 or whatever. So if I'm a company like **Nintendo**, how am I actually purchasing chips? Because I think this is going to be important when we talk about what's going on right now. But do I have like a forward contract, with a major supplier, or do I have, I don't know, a warehouse full of chips that I bought previously? How do they actually manage that?

</details>

### 芯片采购与合同模式

**Ray Wang**: 所以他们有几种做法。对吧？他们会以不同的方式在不同的环境下以及与不同的供应商进行。对吧？所以很难说：“嘿，他们就是这样做的。”但从技术上讲，我认为你可以这样想：“嘿，这是芯片的地图，以及未来四个月的采购情况，这是我们承诺的月份。”对吧？我们将签署一份合同，无论是四个月的期限，还是对于**长期协议（LTA）**，你可以长达一年甚至两年。对吧？所以这就是你的想法。但人们会说：“嘿，我们签了这份为期四个月的合同。”对不起，是三个月，一个季度。所以到那个季度末，你会协商下一个季度的新合同价格。这通常是它的运作方式。

<details>
<summary>Original English</summary>

**Ray Wang**: So there's a couple of ways they do it right. And then we'll never do it in in terms of like kind of they will do it different way like in different environments and also different vendors. Right. So it's hard to say like, hey, this is exactly, exactly the way they do it. But technically I think you can think about like, hey, this is a map of the chips and kind of purchasing the next four months and this is a month we're going to commit, right? And we're going to sign a contract Pi same whether this term will be four months or if for the **LTA** you can go like as long as like two a year or even two years. Right. So that's the way you think about it. But people, you'll be like, hey, we signed this contract for four months, right? And sorry, for three months for a quarter. So by the end of that quarter, you negotiated a new contract pricing for the next quarter. So that's typically the way it work.

</details>

**Ray Wang**: 但你知道，现在的问题是对于消费者来说，价格可能是我会说的次要因素，因为如果你无法获得价值，你就根本赚不到钱。对吧？所以第一位是确保价值，无论是确保它符合你告诉我们的需求前景，还是我们可以协商到最好的价格，但考虑到整体价格环境。所以波动如此之大，要求如此之多，很难不承担某种利润影响，因为本质上，你知道，你试图获得芯片，对吧？你不能从供应商那里拿走太多。

<details>
<summary>Original English</summary>

**Ray Wang**: But, you know, the problem for right now is for consumers wanting this, like the pricing probably is sort of I will say secondary because if you couldn't secure value, you couldn't even make any money. Right. So number one is securing value whether that, you know, make sure that fits, to the demand outlook. You are saying to us whether we can negotiate the best pricing you can, but given the overall pricing environment. So a slow volatile was so asking so much, it's hard to like not taking some kind of margin impact because essentially, you know, you try to get a chips right and you cannot just, you know, get too much away from your vendors.

</details>

### AI对DRAM需求的具体来源

**Joe Weisenthal**: 我想更深入地探讨**需求破坏**的因素，因为我认为这对于思考平衡点在哪里非常重要。但你能否澄清一下，AI具体是哪方面？是在训练中吗？还是在推理中？在构建AI服务的过程中，这种对**DRAM**的巨大需求具体来自哪里？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: I want to get more into the demand destruction element, because I think this is very important to think about where the equilibrium is going. But could you some just to clarify, what is it about AI specifically? Is it in the training? Is it in the inference where specifically in the process of building out AI services, does this voracious demand for **DRAM** come from so also you say let's see what go to be.

</details>

**Ray Wang**: 所有这些，我认为现在真正重要的是，你知道，在训练中你需要大量的**HBM**，这是每个人都知道的。对吧？你还需要大量的**CPU DRAM**以及**LPDDR3**和**DDR**用于服务器。你还需要**HBM**，对吧？那是训练部分。你知道，推理也需要**HBM**。对吧？你当然还需要**CPU**来处理大量工作负载。对吧？你知道，主要的将是**HBM**，甚至是推理。对吧？现在它们正在支持填充上下文窗口。而且，你知道，我认为现在80%最重要的将是上下文窗口。对吧？而上下文窗口对内存的依赖性非常强，内存密集型。而且内存的重要性只会增加，据我所知，特别是考虑到这个上下文窗口将继续扩展，并且推理的使用和采用将继续上升。对吧？所以我认为这些是我会考虑的典型方式。对吧？

<details>
<summary>Original English</summary>

**Ray Wang**: All of this I think is really where like right now and you know and training you need tons of **HBM** that just everyone knows right. You also need a lot of the **CPU**, **DRAM** and less **LPDDR3** and a **DDR** to go to the server. You also need **HBM**, right? So that's the training part. You know, inferencing. You also need **HBM**, right. And you also need the **CPU** at the end of course, of loss, workload. Right. You know, the main one will be the **HBM** and even the inferencing. Right. Right now they are supporting to fill in the core. And, you know, I think 80% now, I think right now, like the most important thing will be to call. Right. And the call is super, super like memory bound and memory intensive. And the memory importance of there was just will only increase to my understanding, especially given the long run this window continue to expand. And the inference usage and adoptions continue to going up. Right. So I think those are the typical way I will think about those. Right.

</details>

**Ray Wang**: 最后一件事是，我认为现在很多人都在谈论**生成式AI**。对吧？我认为如果你想为这些提供动力，你需要大量的**CPU**，你知道，大量的**CPU**服务器。对吧？那么**CPU**服务器中还包含什么呢？里面有很多**DRAM**。对吧？而且我认为大量的**生成式AI**也意味着你需要大量的推理。对吧？这又回到了我之前说的。你需要大量的**HBM**和**DRAM**。对吧？所以我可以说**HBM**无处不在。我们还得谈谈存储。所以在这个过程中，内存无处不在。

<details>
<summary>Original English</summary>

**Ray Wang**: And the last thing is, I think a lot of people talk about these days about **generative AI**, right? I don't think I you want to power loss. You need a lot of **CPU**, you know, a lot of **CPU** server, right. So what's also what's included in the **CPU** server? There's a lot of theory in there. Right. And a lot of I don't think will also mean you need a lot of inference as well. Right. And that go back to my previous home. You need a lot of **HBM** and **DRAM**. Right. So I will say like kind of different. And I got **HBM** and it's kind of everywhere. And we had to talk about storage my storage. And so everywhere, you know in doing this process.

</details>

**Joe Weisenthal**: 为什么AI需要大量内存？你刚才解释了，它对推理很重要，对训练也很重要。但为什么呢？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Why does I need a lot of memory at all? So you just explain, you know, it's important for inference. It's important for training, whatever. But like why.

</details>

**Ray Wang**: 是的，我认为这归结到模型层。对吧？因为本质上，当你尝试训练一个模型时，你需要海量数据。你需要直接投入海量数据来训练你的模型。然后对于推理部分，你需要一个接一个的数据来计算，有点像一个链条。对吧？所以要完成这个过程，你如何保留之前处理过的数据，并处理之后进来的新数据？对吧？这就是为什么你需要大量内存。

<details>
<summary>Original English</summary>

**Ray Wang**: Yeah, I think I think this needs to like goes down to the, to the model layer. Right. Because essentially when you are trying to train, let's say you want to train a model, right? And then you need just pure tons of data. You need to draw straight tons of data there to train your model. And then for the inferencing part, like you need one data after another to kind of compute one after another, sort of a chain of sort. Right. So to to do that process, how can you keep the previous data you process to keep it in there and the process to another data that coming out after it? Right. So that's why you need a lot of memory.

</details>

**Ray Wang**: 然后回到我之前说的。对吧？上下文窗口基本上意味着当你处理的东西越来越长时。对吧？你如何拥有足够的内存来处理这些？对吧？你知道，我举个例子，如果你使用**ChatGPT**，你们肯定记得。对吧？你知道，回到**ChatGPT**刚出现的时候，人们只是问一些非常简单的问题。现在人们的问题变得更复杂了。人们会问：“你能写一份关于张量如何在人们身上发生的20页报告吗？”举个例子，他们会得到一份20页的报告，然后等待大约五分钟。对吧？所以如果你考虑这个过程，他们做了所有的计算、所有的研究，并且还给你输出的令牌，你从提示中得到的答案比你给出的提示要长得多。对吧？这也是你回到**GPT-3**时得到的更长的响应。

<details>
<summary>Original English</summary>

**Ray Wang**: Then go back to my previous polling. Right. The colon context window basically means like when you're when the things that you are process is longer and longer, right. Like how can you how can you have enough memory to process those. Right. And you know, I'm going to go example, if you use you guys definitely remember it, right. You know back to **ChatGPT** coming out. People just like hey I wasn't whether I like a very simple questions people right now it's more nastier. People are doing like, hey, can you write a, plenty page for how tensor can happen on people, right. Example. They will give like a 20 page report and they will wait like five minutes. Right. And so if you think about a process like they do all the calculation, all the researchers, and also give you the output tokens that the, the sample, answer you get from your prompt, less significant way longer than the prompts that you are given. Right. And that's also the longer response that you are getting when you go back to the **GPT-3**.

</details>

**Ray Wang**: 记住，我们知道**GPT-3**时期的使用量，也就是每月日常用户量。但现在，**GPT**的使用量我认为是8亿。对吧？而且我们还没有包括**Gemini**、**Claude**等AI的用户。对吧？所以如果你把这些影响都乘起来，我认为内存效率非常低下。这对我来说非常清楚。

<details>
<summary>Original English</summary>

**Ray Wang**: And remember, usage, we know back to **GPT-3** was the would, you know, the monthly daily users. But right now it was I think the use of **GPT** was 800 million. Right. And we are not included. The users for the **Gemini**, for cloud, for AI. Right. So if you multiply loss effects, I think the memory the most inefficient. And it's very, clear to me.

</details>

**Joe Weisenthal**: 是的，这真的很有趣。我知道有些人正在谈论这个，但它在我的AI使用中确实让我印象深刻，就是随着其能力的增长，我使用它的频率大大增加了。就像在2022年末，它有点可爱，比如“哦，让它写一首关于这个的诗。”然后我就说：“好的。”然后我就好几周，有时甚至没有需要查询的东西。然后，你知道，现在我一直在使用它，比如尝试用代码做事情或抓取数据等等。所以随着能力的增加，整体令牌消耗量也大幅增长。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah, it's really interesting. I know some people were talking about this, but it really strikes me in my own usage of AI, just basically how much more use it as capabilities have grown. Like it was sort of cute in late 2022 is like, oh, get it to write a poem about this. And I was like, okay. And then I would go, you know, several weeks, sometimes without having anything to query. And then, you know, these days, like I'm using it all the time, like trying to do things with code or scrape data, etc.. So just overall token consumption has grown massively with increased capabilities.

</details>

### 需求破坏与市场影响

**Joe Weisenthal**: 好的。我们来谈谈**需求破坏**的因素。任何**大宗商品**的价格都将是供需的函数。最终价格会高到足以使某些形式的需求不再经济。然后就会像：“你知道吗？我们就是不生产那么多电子游戏、相机或任何其他使用内存的东西了。”我们是否已经开始看到这种情况，以至于某些用途和消费？所以**Joe**不必给他儿子买**Switch**了？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: All right. Let's talk about the demand destruction element. Any commodity is going to be the price is going to be a function of supply and demand. And eventually prices get higher enough such that certain forms of demand just are no longer economical. And it's like, you know what? We're just not going to make as many video games or cameras or whatever else uses, memory. Are we starting to see any of that yet such that certain, uses and consumption of. So Joe doesn't have to buy a switch for his son?

</details>

**Ray Wang**: 是的。没错。是的，我最近确实买了一台**Switch**。所以价格方面，我没有看到我的经销商那里有价格飙升，我不知道。我们会看看那里的平均套利是如何运作的。但是的，我认为我们实际上已经看到了很多影响。但你在不同的产品线上有所不同。在PC方面，你肯定看到了，仍然无法知道答案。所以它们都在对不同产品线进行提价。对吧？

<details>
<summary>Original English</summary>

**Ray Wang**: Yeah. That's right. Yeah, I actually bought a switch recently. So on the price have I haven't see price spikes under my reseller, I don't know. We'll see how the average arbitrage there works. But yeah, I think I think we're already seeing a lot of impacts, actually. But you kind of, you kind of vary in different kinds on the line, right in piece. You are surely seeing that still not knowable. Answer. So so they are all having a price hike for kind of different Apollo lines, right.

</details>

**Ray Wang**: 而且，你知道，在需求方面，你是否也看到了，我认为对于中国智能手机市场。对吧？很多分析师和研究公司。对吧？很多公司都在说，他们正在削减智能手机。例如，我认为**联发科**最近的财报。对吧？他们说他们也在削减手机数量。我认为谈论的是2026年展望的10%到15%。这非常显著。对吧？今年不会是1亿，但你最终会达到9000万。对吧？这非常显著。所以我认为我们已经看到了在非常不同的地方出现的影响。没错。**苹果**会是一个很好的例子，因为他们说：“嘿，我们所有的价格都上涨了，对吧？”但我们实际上管理得很好。他们说真正有意义的市场影响实际上会在2026年下半年显现，而不是第一季度或第二季度。我认为这是我看到的一些情况。所以它肯定已经出现在市场上了。对吧？

<details>
<summary>Original English</summary>

**Ray Wang**: And, you know, on the kind of demand side, are you also seeing that, I think, for the Chinese smartphone market, right. A lot of the analysts of the research firm. Right, a lot of the company was saying, like, they are cutting off their smartphone. It for example, I think **MediaTek** recently definitely earnings. Right. They are saying they are cutting off the numbers on mobile too. I think it was talk for 10 to 15% of 2026 outlook. That's very significant right. Not to offer same this year will be this year supposed to be 100 million. But you will essentially goes to a 90 million. Right. That's very significant. So I think we are already seeing the app in kind of very different place. That's right. **Apple** will be a good example here because they are saying, hey, like, hey, we have all the price hike, right? But we actually managed pretty well. They are saying the real sort of meaningful marketing impact will actually show up in the second half of 2026, in stealth, like the first quarter of second quarter. I think are some of the things I'm seeing. So it's definitely already showing up in the market. Right.

</details>

**Ray Wang**: 我认为今年你可以期待两件事。一是PC方面的**需求中断**，对吧？由于消费者警告或延迟规格，无论是内存还是显示器，这都很直接。但还有相机。对吧？相机也非常重要，我敢肯定在一些显示器和相机上也是如此。而且，你知道，还有我们所说的**延迟奢侈品**，因为你不想推出价格高于最初预期的新产品，这会影响你的新产品发布表现，而新产品通常比上一代产品有更好的平均销售价格和利润。对吧？我认为这些是我们在未来几个月、几个季度将看到的事情。我认为所有这些都会产生影响，人们会开始感受到它。

<details>
<summary>Original English</summary>

**Ray Wang**: I think what you can expect this year will be two things. One is sort of demand disruption in PCs, right by the consumer warnings or latte spec, whether it's a memory display that's very straightforward, but also the camera, right. Camera is also very important, I'm sure, in some of the display on a camera as well. And, you know, also on the, whole what we call it delay luxury because you don't want to launch a new products that have higher price than initially thought, which will impact your new launch performance, which usually then you are new to have better ASP at a margin compared to a previous generation products. Right? I think those are the things that we going to see, in the coming months, in the coming quarters. I think we'll all impact and people will start feeling it.

</details>

**Joe Weisenthal**: **Joe**，你认为我们会看到人们拆卸旧设备来获取内存芯片吗？就像你还记得在2010年代初的**大宗商品超级周期**中，有各种关于人们偷窃电线的报道吗？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Joe, do you think we're going to get people like stripping old tenders for memory chips? Like, remember how during the commodity supercycle in, like, the early 20 tens, I guess there were all those stories about people, like stealing electricity wires.

</details>

**Tracy Alloway**: 是的。2021年又发生了。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah. It happened again in 2021.

</details>

**Joe Weisenthal**: 是的，我想是的，我们可能会看到一些。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah I think yeah, we might I might get some of that.

</details>

### 短期解决方案与供应侧挑战

**Joe Weisenthal**: 那么，实际上，关于这一点，这个问题有没有短期解决方案？无论是设计方面，也许你可以让产品在某些方面更高效，从而减少对内存的需求，或者回收旧内存芯片，我不知道。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Well, actually, on that note, is there, is there like a short term fix for this problem either in terms of design, maybe you can make the products more efficient in some ways so that it needs less memory or, recycling old memory chips, I don't know.

</details>

**Ray Wang**: 是的，我认为在需求方面，这要困难得多。对吧？从OEM的角度来看。对吧？你能做的就那么多。对吧？你只能调整规格。对吧？但我认为这并不能解决根本问题。对吧？你只是在微调。所以你可以出货。但这把双刃剑，对吧？当你没有开始微调时，回过头来看，与一些没有调整规格的同行相比，你竞争力下降，这会影响你最终的季度或年度出货量。我认为需要解决的是，可以做些什么。让我们都关注供应侧。对吧？

<details>
<summary>Original English</summary>

**Ray Wang**: Yeah. I think, you know, upon the demand side is a lot difficult, right. On an OEM perspective. Right. There's only that much you can do, right? You can just spec. Right. But I don't think to address the fundamental issues. Right. You are just this micro upon us. And so you can ship. But that is a double edged sword right? When you don't start going upon us, that as you look back compared to some of your peers, who doesn't just spec right and make you less competitive, that impact your final sort of, quarterly or annual shipment, I think what need to be addressed, where what can be done. Let's all be on the supply side. Right.

</details>

**Ray Wang**: 所以供应侧，我们主要谈论几个供应商。对吧？**美光**、**三星**，以及一些传统供应商。对吧？你有**华虹**。是的。还有中国公司，比如**长鑫存储（CXMT）**和**长江存储（JHICC）**。对吧？所以，我认为今年最正确的方法，因为今年真正的挑战是**洁净室**的限制。所以**洁净室**基本上是你放置所有这些设备的有限空间。然后在晶圆厂制造芯片。对吧？所以所有三家主要内存制造商都面临**洁净室**短缺。对吧？所以2026年上线的新增晶圆产能实际上将非常有限。那么在这种情况下，你如何在只有有限新增晶圆产能的情况下生产更多的**DRAM**比特？

<details>
<summary>Original English</summary>

**Ray Wang**: So supply side, we are mainly talk about couple of vendors, right. The **Micron** **Samsung** and for legacy ones. Right. You have Wimbledon. Yeah. And China like **CXMT** and **JHICC** right. Last people. So I think the most right way right now this year because this year that really challenges there's a clean room constraint. So clean room is basically you have limited space that you can put all this equipment. And so manufacturing chips in fab. Right. So you have clean room shortage in all three major memory makers. Right. So your incremental wafer capacity coming online for 2026 will actually be quite limited. So in that sense, how can you produce more bit more **DRAM** bits while having only limited incremental wafer capacity.

</details>

**Ray Wang**: 唯一能做的就是**节点迁移**。例如，在**DRAM**处理器中，现在最先进的是1C。对吧？往下有1B、1A和1X。但现在他们正在尝试尽可能多地迁移到1B和1C，这些在相同的晶圆基础上，与传统节点相比，它们生产更多的芯片，更多的比特。对吧？所以通过这种方式，在相同的晶圆片上，你可以生产更多的比特。所以即使你的晶圆产能受限，这也应该能增加供应。

<details>
<summary>Original English</summary>

**Ray Wang**: And the only thing you can do, it's, not migration. So for example, so in theorem processors now you have the most advances. Right now it's one C right. Going down I have 1B1A and one x bar. But right. You know I think why now they are trying to do is migrate as much as they can to 1B and 1C, which are the same way for basis. They are produce, a lot more chip, lot more bits of compared to a legacy. Not right. So doing that way on the same way from pieces you can produce more bits. So that should produce more, supply even though your wafer capacity is constrained.

</details>

**Ray Wang**: 但挑战有两点。第一，你进行**节点迁移**的速度有多快？对吧？**节点迁移**通常很困难。我会说困难之处在于它需要时间。对吧？要达到最先进的节点。对吧？你需要**EUV**机器。对吧？你需要所有不同类型的制造工艺。对吧？而且不是每个晶圆厂都准备好这样做。对吧？所以你需要时间来记住所有这些新节点的生产。而且你还面临着这样的挑战：“嘿，好吧，我想进行**节点迁移**，对吧？但我们如何平衡与**HBM**的产能？”这又是另一个问题。你需要考虑一下，对吧？因为一些**HBM**工艺节点实际上正在使用1X。他们正在使用1B。所以这实际上是先进的工艺。对吧？所以即使你包括1B，但你仍然想做更多的**HBM**。所以这里的增长实际上是相当有限的。所以我认为这些方法在某种程度上可以解决问题。但，你知道，从我们的角度来看。对吧？即使我们把所有这些都考虑进去。我认为今年我们仍然会看到短缺。

<details>
<summary>Original English</summary>

**Ray Wang**: But a challenge is two things. One, how fast you can read about this. Not migration, right? Not migration is typically difficult. Well, I will say difficult is it only takes time, right. For to go to the most advanced now. Right. You need **EUV** machine. Right. You need all different kind of manufacturing processes. Right. And not every fab can already prepare to doing that. Right. So you what takes time to remember all those production for the new events that also you are having the challenge to like hey okay I want to do now migration right. But how are we going to balance the capacity with **HBM**. Again? That's another issue. You want to kind of think about it, right? Because some of the **HBM** process not it's actually using of windings. They are using 1B. So let's actually do events processing. All right. So even you are including 1B by your listener. You want to do more **HBM**. So like the increase here is actually quite limited. So I think those are in a way can potentially fix the issue. But you know, you know, from our house view, right. Even we factor all those in. I think this year we're still going to have see question if we can shortage.

</details>

### 投资冲动与市场竞争

**Joe Weisenthal**: 是的。当谈到任何**大宗商品超级周期**时，一个主题就是，当然，更高的价格最终会带来更多的生产，更多的供应。但与此同时，你知道，对于现有生产商来说，有一个最佳时期，特别是当只有少数生产商能够大规模生产时。他们可以享受巨额利润。对吧？他们会有点不情愿地建造新的晶圆厂，因为那意味着资金流出。这也意味着价格会降低。所以在供应上线之前，他们总会有一段**金发姑娘时期**，他们只是在赚取利润。我们看到这个行业投资的冲动是什么？我很好奇，你知道，无论是中国生产商，他们是否有能力削弱韩国制造商的利润？或者韩国制造商是否认为自己有一个很长的窗口期，可以在投资之前享受巨额利润？供应方对这些巨额资本支出的想法是什么？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah. One of the themes that comes up when we talk about any commodities supercycle is that, sure, higher prices will eventually elicit more production, more supply. But in the meantime, you know, there's a sweet spot for the existing producers, especially when you have just a small number of producers that can produce at scale. They can they enjoy massive profits. Right. And there sort of going to be reluctant to build out new fabs because that's money going out the door. It also means lower prices. So there's always the sort of Goldilocks period for them before the supply comes on line, where they're just raking in profit. What do we see is the, industry's impulse to invest. And I'm curious, like, you know, whether it's Chinese producers, are they in a position to undercut, potentially undercut the profits of the Korean makers or the Korean makers seeing themselves as having a long window where they can enjoy large profits before they have to invest? Like, what is the thinking on the supply side about those big capital outlays?

</details>

**Ray Wang**: 是的，这是一个非常好的战略问题。我认为，你知道，每个经理可能会给你一个有点不同的答案，或者在高层面上可能相同，但我认为总的来说。对吧？就像，你知道，看看历史周期，就像，你知道，如果我们看到未来几年有相当可持续的需求，那么很明显产能无法跟上需求，他们迟早会扩大产能。对吧？可能不会是：“嘿，我们现在看到2026年产能会显著上线。”可能要到2028年。所以他们会，我想，你知道，仍然会宣布。对吧？我们从**美光**那里看到了这一点。**美光**正在新加坡宣布一个新的晶圆厂。对吧？他们现在正在扩张。而且他们在美国有两个正在建设中的晶圆厂。对吧？也在进行大量的**节点迁移**，最近从**SMC**（一家台湾芯片制造商）收购了新的晶圆厂。对吧？他们都在继续前进，你已经看到了一些迹象。

<details>
<summary>Original English</summary>

**Ray Wang**: Yeah, that's a very good strategic question. I think, you know, every manager will probably give you a somewhat different answer or in kind of on the high level, probably same, but I think in general. Right. Like, you know, you know, look at like historical cycle, it's like, you know, if we are seeing quite a sustainable demand in the next few years and then clearly the capacity couldn't catch on the demand, they are going to expand the capacity in some time. Right. Is probably not going to be like, hey, we now see in 2026 the capacity economy online like meaningfully is probably 2028. So they will I think, you know will still announce. Right. And we are seeing that from **Micron** right. **Micron** is announcing a new name Fab in Singapore right. They are expanding now. And they have two fab that currently is under construction in the US right. Also doing tons of migration and recently acquire the new fab from **SMC** which is a Taiwanese shoemaker. Right. And they all just move on and you are already seeing some sign of that.

</details>

**Ray Wang**: 另一个你看到的迹象是**资本支出（CapEx）**，对吧？**海力士**、**三星**和**美光**的直接**资本支出**今年都显著增加了。你在2007年也看到了类似的趋势，考虑到我认为，你知道，他们可能会尝试扩大更多产能，并更多地投资于支出。还有用于先进设备的设备。对吧？这回到了我之前谈论**节点迁移**的观点。如果你想进行**节点迁移**，你需要使用更先进的设备来生产更先进的芯片。

<details>
<summary>Original English</summary>

**Ray Wang**: And another sign you are seeing it's the **CapEx**, right? Both the **Hynix**, **Samsung** and **Micron**, their direct **CapEx** has actually increased quite significant this year. And you see similar trend in 2007 given I think, you know, they're going to probably, you know, try to expand more capacity and invest more in both spend as well. Also equipment that goes to events, events, events, equipment. Right. That go by certain point I was talking about the non migration. If you want net migration you need to use more advanced equipment to produce more advanced chips.

</details>

**Joe Weisenthal**: 是的。这确实让我想起了石油行业，对吧？当**大宗商品价格**暴跌时，每个人都开始谈论要**自律**。是的。是的，**资本支出**。所以需要一段时间才能提升。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah. It really does remind me of the oil industry, right? Where like there's a bust in the airline commodity price and everyone starts talking about being disciplined. Yeah. Yeah **CapEx** spend. And so it takes a while to, ramp up.

</details>

### HBM与商品DRAM的平衡

**Joe Weisenthal**: 我想问一下**HBM**和其他类型**DRAM**之间的平衡。人们或者说芯片制造商是如何考虑这个问题的？有没有可能因为**HBM**，据我所知，它有更高的利润率，所以每个人都涌入**HBM**，而把更基础的东西抛在脑后？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: I wanted to ask about, I guess, the balance between **HBM** and other types of **DRAM**. How are people or how are the actual chip makers thinking about that? And is there is there a chance that because **HBM**, my understanding is that it it has higher profit margins? Is there a chance that everyone just pours into **HBM** and kind of leaves the, the more basic stuff in the dust?

</details>

**Ray Wang**: 是的。所以实际上，你知道，这非常有趣。我认为当我们为我们的机构客户撰写这份报告时，他们对市场很了解。通常我们认为**HBM**有更高的利润率，对吧？这绝对是真的。但现在发生的情况是，你知道，我们看到所有这些现货价格和合同价格上涨了这么多。对吧？现在**商品DRAM**的利润率实际上高于**HBM**。所以这就产生了一个真正的困境。你谈论这个很疯狂，因为当你的利润率实际上更高时，你为什么要生产更多的**HBM**？为什么？对吧？

<details>
<summary>Original English</summary>

**Ray Wang**: Yeah. So actually, you know, it's very interesting. I think what always seems for here when you wrote about this, for our institutional clients that, you know, know the market. Well, typically we think **HBM** has higher margin, right? Which is which is definitely true. But what's happening, you know, we see all of this like, spot price control price going out so much. Right? The margin of the commodity line right now, it's actually higher than **HBM**. So here. So that created a real dilemma. That's crazy that you talk about it because when your margin is actually going higher, why would you make more **HBM**. Like why. Right.

</details>

**Ray Wang**: 但我认为如果你真的从长远角度来看内存供应，在整个AI浪潮之前，你的需求主要来自市场，对吧？PC、手机、汽车、工业等等。对吧？**HBM**现在作为公司新的增长动力正在飙升，我们相信这将持续未来几年。对吧？对于内存供应商来说，他们也是这么想的。如果你不继续推动产能，推动技术，当你落后时，就很难追赶回来。然后回到我之前的观点，这是一个相对更容易区分你的产品，从而更有意义地获得更多市场份额的领域。对吧？所以我认为内存制造商非常非常重视**HBM**。即使现在**商品DRAM**的利润率很高。对吧？我想他们仍然会大量投资**HBM**，他们会尽力平衡**商品DRAM**市场。但我认为，你知道，我认为今年至少我看到的数据仍然是相当严重的短缺。

<details>
<summary>Original English</summary>

**Ray Wang**: But I think if you really think about like a long term perspective on the memory, supply it right before the whole airplane, your demand is really driving from a market, right? PC, mobile, automotive, industrial, blah blah blah. Right? **HBM** right now is surge as a new growth driver for the company, which we believe will last for the next few years. Right. And for the memory supply, they're thinking the same. And if you're not, continue to push your capacity to push the technology. When you're lagging behind, it's hard to coming back and then go back. Go back to my previous point that this is a area that it's relatively easier to differentiate your products to get more market share, more meaningfully. Right. So I think remember, makers are very, very value **HBM**. Even though right now the margin of commodity right is high. It right. They will I think they will still invest quite a lot **HBM** and they will do their best to sort of balance the commodity market. But I think, you know, I think this year at least the number I'm seeing, it's still quite a significant shortage. Yeah.

</details>

### 中韩内存制造商的差距

**Joe Weisenthal**: 中国生产商与韩国生产商相比如何？是否存在差距？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: How do the Chinese, producers compared to the, Korean producers. Is there a is there a gap?

</details>

**Ray Wang**: 哦，是的，我认为肯定存在差距。我认为，你知道，如果你总体来看内存，我认为三年是公平的说法。我认为差距可能是四年。我会说，你知道，这很漫长，你知道，及时性就像，今天能解决吗？你知道，未来会发生什么谁知道呢？但我想，你知道，肯定存在差距。你知道，当我考虑来自中国内存制造商的竞争压力时，我们总是想区分中国市场和中国以外的市场。内存供应商也在关注这一点。对吧？所以中国市场可能占全球需求的25%左右。所以竞争实际上发生在中国，因为对于像**长鑫存储（CXMT）**这样的领先中国内存供应商，我相信他们90%或95%的收入来自中国、香港。对吧？这意味着，你知道，大部分数据实际上是中国市场上的公司。与**美光**、**海力士**和**三星**相比。我想说在高端市场，对吧？我认为它仍然将由行业内存制造商主导，但**长鑫存储（CXMT）**正在获得两个势头。对吧？现在，可能正在获得一些低端**DRAM**产品。而且它也受益于中国政府在**自给自足**方面的政策，你知道，无论是商品**DRAM**，还是现在他们正在推动支持中国AI硬件的发展。

<details>
<summary>Original English</summary>

**Ray Wang**: Oh, yeah, I think there is definitely the gap. I think, like, you know, if you look at the memory in general, I think is probably three years is fair to say. It's again, it's probably four years. I will say, you know, that this is Mary Lang, you know, timeliness is like, can I solve today? You know, who knows what's going to happen in the future? But I think, you know, there's definitely a gap. You know, when I think about the competition pressure from Chinese memory makers, we always want to, like, kind of separate the Chinese market and also the China market. Let's also in the memory supply was looking at it. Right. So Chinese market is probably about 25% of the global demand. So really the competition is happening in China because for the leading Chinese memory supplier like **CXMT**, for example, I believe like 90% or 95% of the revenue is coming from, China, Hong Kong, Hong Kong, Hong Kong. Right. So meaning, you know, most of the data is really company in Chinese market. Company with **Micron** and **Hynix** and **Samsung**. I want to say on the right, not on the events on the high end. Right. I think it will still dominated by industry maybe makers, but **CXMT** are getting two momentum right? Right now, probably getting some of the low end of Myanmar products. And I also benefited by Chinese comments policy in terms of the self-sufficiency drive to, you know, whether it's for a commodity, right. And also, right now they are pushing for developments that support Chinese AI hardware.

</details>

### 芯片分配优先级

**Joe Weisenthal**: 所以如果存在短缺，而且看起来短缺将持续一段时间，芯片制造商实际上是如何分配他们现有的供应的？它是流向我认为未来会非常重要的大公司，比如**OpenAI**之类的，还是流向多年来一直大量购买的现有客户？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: So if there's a shortage and it seems like the shortage is going to be with us for some time, how are the chip makers actually allocating what supply they have? Does it go to, you know, the company that I think is going to be really big and important in the future, like, I don't know, an **OpenAI** or something, or does it go to an existing customer that's been buying in volume from me for years?

</details>

**Ray Wang**: 是的，我认为毫无疑问，一些最高级别的客户肯定会获得大量供应。当然，背后还有一些更复杂的定价谈判，但我会说，供应量仍然是最重要的。我认为他们可能会这样做。对吧？而且，你知道，在我考虑客户之前，我会考虑按行业划分。我会说服务器**DRAM**和**HBM**将是首要任务。因为，你知道，对于整个市场，理论上我们看到**HBM**和服务器**DRAM**加起来可能占**DRAM**市场的一半以上。对吧？这很重要。而且它发展得如此之快。对吧？这不像手机。对吧？手机有点平稳。手机需求实际上是由手机中**DRAM**内容增加驱动的，这相当有限。对吧？如果你在过去一年购买了**iPhone**，你知道，我实际上无法模仿他们是如何增加内容的。所以我认为这些是内存公司在未来两年内要关注的两个首要任务。我们将看看会发生什么。你知道，在2027年下半年或2028年之后，如果出现一些结构性变化，但我认为服务器**DRAM**和**HBM**将是首要任务。

<details>
<summary>Original English</summary>

**Ray Wang**: Yeah, I think there's no doubt me that, you know, some of the highest, highest here. A customer will get a volume for sure. Of course there are some more complex like pricing negotiation behind, but I will I will say like the volume will be it still will be the most important thing. I think that's probably what they're going to do. Right. And, you know, before I think about like a buy customer, I will think about kind of by sector, I will say the server **DRAM** and **HBM** together will be the top, top priority. Because, you know, if for the whole market, in theory, we are seeing actually **HBM** and server, the unit together is probably like more it's more than half of the direct market. Right. And that's important. And it's going so fast. Right. And it's unlike the mobile. Right. Mobile is kind of flat. The mobile demand is really driven by the increased, direct contents in a mobile, which is quite limited. Right. If you buy an **iPhone** over the past year, you know, like I actually can't imitate how they're doing content increase. So I think I think they are those are the top two priorities, for the memory company to focus on in the next two years. And we'll see what happened. You know, after like, you know, the second half of 2027 or 2028 if there is, some structural change, but I think serve a different entry and will be the top priorities.

</details>

### 个人计算的未来

**Joe Weisenthal**: 前几天我非常懒惰，不只是一天，就那么一天。我使用了**Claude**。我的电脑桌面上有很多截图，我把桌面弄得好像看不到文件夹一样。所以我把它们拖放到回收站。我非常懒惰。我把它们放到**Claude**里。我应该清理我的桌面，清理我的桌面。我就想，这太疯狂了。我正在使用**Anthropic**的电脑，无论它们在国家的另一端哪里，来清理我自己的电脑桌面。我为什么还要做得好呢？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: You know, the other day I was very lazy, which is not just just that one day, just one day. And, I use **Claude** code. You know, I have a bunch of screenshots on the desktop of my computer, and I, I sort of make my desktop look like, imagine I can't see folders. So I like drag and drop them and put them in the recycling bin. And I was very lazy. And I put in to **Claude** code. I should clean up my desktop, clean up my desktop. And I was like, there's so insane. I'm using, you know, **Anthropic** computers, wherever they are on the other side of the country to clean up my own computer desktop. Why do I even have to do a good job?

</details>

**Ray Wang**: 是的，你做得很好。

<details>
<summary>Original English</summary>

**Ray Wang**: Yeah, of course you're doing great.

</details>

**Joe Weisenthal**: 我就想，我为什么还要有自己的电脑呢？在这一点上，我开始思考，你知道，我为什么还要有电脑呢？这是否与**DRAM**问题有关，我们是否会进入这样一种情况：人们不再在自己的设备上拥有自己的计算能力，因为更多的计算能力，比如**Anthropic**的大脑，或者**OpenAI**的大脑，正在控制我们使用的东西。为什么不只拥有一台低规格、低规格的电脑或低规格的手机，或者，你知道，低内存的任何东西呢？因为我已经在使用他们的电脑了。我们是否会看到，无论是在内存还是其他地方，这种迁移，或者所有有趣的东西、所有内存和所有计算都发生在其他地方，而我的手机或电脑只是变成了一个带互联网接入的屏幕？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: And I was like, why do I even have my own computer? At this point, I started wondering, you know, I'm like, why do I even have a computer could to related to this sort of **DRAM** question could we just get into a situation in which people don't really have their own compute on it, on their own devices, because more of it, like **Anthropic** brain is sort of, or **OpenAI**'s brain is sort of controlling the things we use. Why not just have a very low spec, low spec computer or low spec phone or whatever, or, you know, low memory, whatever, because I'm already using their computers, etc.. And are we just going to see whether memory or elsewhere this sort of migration or all of the interesting stuff and all of the memory and all of the compute happens elsewhere, and my phone just becomes a sort of, you know, or my computer just becomes, a screen with an internet access.

</details>

**Ray Wang**: 是的，我的意思是，我不知道这种“没有个人设备”的想法，就像，我不是一个设备，但随着时间的推移，它似乎就是这样。我把所有这些实际的计算都放在家里有意义吗？当我只是想：“我不如让他们知道我也感觉到了？”

<details>
<summary>Original English</summary>

**Ray Wang**: Yeah. I mean, I don't I don't know about the idea of, like, you know, not having the personal devices, like, I wasn't a device, but it's just sort of seems like it over time. Does it make sense for me to have all of this actual compute inside my house when I'm just like, I might as well let them know I was feeling to?

</details>

**Ray Wang**: 是的，我说是的，这取决于你的最终目的。对吧？你知道，例如，在笔记本电脑上，例如，如果你正在进行非常非常繁重的视频编辑。对吧？为什么我们仍然允许，我认为可能仍然需要很多年。对吧？如果你只是，你知道，做文档工作，比如**Claude**事件，你将如何使用它？如果我非常密集地使用，我认为你仍然需要一个好的**DRAM**，特别是如果你从不同的地方拉取所有不同的API。对吧？所以我认为这真的取决于目的。我认为，你知道，至少我还没有看到，你知道，AI项目中的API结构或渲染结构在设备中。

<details>
<summary>Original English</summary>

**Ray Wang**: Yeah, I say it depends on like, what's your emperor's purpose? Why? You know, for example, on laptops, for example, if you're doing like video editing, very, very heavy. Right. Why are we still allowed to I think probably still need quite a last year. They. Right. If you are just, you know, doing like you know document work like how **Claude** events are, how are you going to use it. If I'm using like super intensively I think you still need like a good year end especially you all like pulling all different API from different places. Right. So I will say you just it really depends on the purpose. I don't think like, you know, at least at least I haven't seen, like, you know, the API kind of structure or, sort of the render structure in the devices, from projecting AI.

</details>

### AI驱动的超级周期是否结构性转变

**Joe Weisenthal**: 所以回到这次对话的开头，以及这个行业的**周期性**。人们一直在抛出**超级周期**这个词，这又非常像**大宗商品**。这只是一个**超级周期**吗？你知道，也许比我们历史上看到的以前的周期更大？或者你认为这里发生了结构性转变，也许是由于AI的兴起，以及**Joe**正在使用**Claude**清理他的桌面这一事实？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: So going back to the beginning of this conversation and the cyclicality of the industry, people have been throwing around the term supercycle again, very commodities ask, is this just a super cycle? You know, maybe bigger than a previous turns that we've seen throughout history? Or do you think something structural has shifted here, perhaps, given the rise of AI and the fact that Joe is, you know, using **Claude** to clean up his desktop?

</details>

**Ray Wang**: 这是一个非常危险的问题。你基本上是在问，对吧，这次是否不同。对吧？对吧。你知道，我认为，嗯，我认为有几件事实际上与历史相符，比如**节点迁移**、产能等。但我会说，你知道，我看到了一些不同之处。对吧？因为我们确实看到了**超级周期**，其中有一个新的需求驱动因素上线。它不仅限制了需求，还限制了供应。对吧？因为以前，例如在2010年到2012年，有一个由手机驱动的**超级周期**。所以手机基本上是：“嘿，我们有新产品上线，而且，你知道，很多，我们的产能跟不上。”但现在，我的意思是：“嘿，好吧，我们需要做**HBM**，但它实际上受限于**商品DRAM**的产能。”所以我认为这是我们看到的关键区别。对吧？

<details>
<summary>Original English</summary>

**Ray Wang**: This is a actually very dangerous question to read. And you are basically asking, right, whether this time is different. Right? Right. You know, I think, well, you know, I think there are a couple things that actually run ins with the history right now migration, say capacity rhino things. But I will say, like, you know, there's kind of a kind of differencing I'm seeing. Right? Because we really see, sort of supercycle that there's a new demand driver coming online. It's not only constrained demand, this thing is also constrained supply right before because we, you know, for example, in 2020 10 to 2012 there's so supercycle driven by mobile right. So mobile is basically hey we have a new product coming online and, you know quite a lot less that's our capacity couldn't catch up. But right now, I mean it's like, hey, okay, we need to do **HBM**, but you I, it's actually constrained to a commodity, right? Capacity. So I think this is the key difference that we are seeing with this. Right.

</details>

**Ray Wang**: 永久性的需求增长也持续了相当长的时间。对吧？如果你真的开始计算，我会说需求方面的爆发可能是在2023年下半年，当时AI真正开始引起人们的关注。到现在差不多三年了。对吧？所以你有两年时间。我们预计这个周期将持续到，比如说，安全地说，2027年下半年。对吧？所以我们正在看一个大约四年的周期。这在历史上是相当罕见的。通常，如果你回顾历史上的内存周期，可能只有15个月。我想，最长可能18个月，从开始到高峰。但现在我们正进入一个领域，那就是：“嘿，需求在上升。”不是价格直接上涨，但至少需求在过去几年里增长得相当显著。对吧？而价格影响现在正在发生，可能从2025年第二季度开始。

<details>
<summary>Original English</summary>

**Ray Wang**: Permanently that demand serrations is also last quite long. Right. And if you're really starting counting, sort of I will say the aspiration in terms of demand probably, let's say second half of 2023, where really I start kind of emerging in people's attention, let's say like to now it's almost probably like the same three years. Right. So you have two weeks, two years. And we are looking at this cycle to last until let's say, you know, safely to say like second half of 27. Right. So we are looking at like what kind of four year cycle. That's quite rare in the history. The usually like in a cycle if you look at historically for the memory is probably like, 15 months. I, you know, probably longest like 18 months, from the start to its peak. But right now we are going to throw to an area that is like, hey, that email was going up. Not a price directly, but the demand at least was growing quite significantly over the past few years. Right. And the pricing impact is happening right now, starting from, probably Q2 2025.

</details>

### 周期结束的潜在因素

**Joe Weisenthal**: 那么，当你说到：“好的，这个周期可能在2027年或2027年下半年结束。”它放缓的因素是什么？是更多的产能吗？还是总需求放缓？你认为2027年可能会发生什么，能使供需更加平衡？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah. Well, what did when you say, okay, the cycle could end by 2027 or the second half of 2027. What are the ingredients for it to slow down? Is it the more production capacity? Is it a slowdown in total demand. Like what what do you see potentially happening in 2027 that bring supply and demand more into balance?

</details>

**Ray Wang**: 是的。所以我认为，我会说这是一个更棘手的估计领域，因为，你知道，根据我建模的数据，我们看到的是，需求实际上正在上升，而且短缺实际上会变得更糟。部分原因是媒体和服务器，它们的内容不同于手机。对吧？如果我们将视频服务需求降至100。是的，对不起，其他一切都在300。对吧？如果情况是这样，需求将继续如此强劲。对吧？你实际上会面临比2026年更严重的短缺。你的理论应该会更糟一些。对吧？因为内存制造商会尝试生产更多的**HBM**晶圆。对吧？这会进一步削减**商品DRAM**的供应。

<details>
<summary>Original English</summary>

**Ray Wang**: Yeah. So I will say that you and I will say like it's a more tricky area to sort of estimate because, you know, based on a number, you know, I'm modeling, we are seeing here, it's actually we are seeing the the demand is actually going to actually the demand is actually going higher and the shortage is actually going to worse. And the part of that is because a media and server, they are different content is going to see acts compared to. Well, right. And then if we get a demand video service the drop into 100. Yeah I'm sorry looping else sorry nothing else are doing 300. Right. And if that's the case and the demand will continue to be that strong. All right. You're actually in a shortage to even be worse compared to 26. And your theory should go a little worse, right. Because the memory makers going to try to make more **HBM** wafer. Right. And that kind of cutting out more on commodity **DRAM**.

</details>

**Ray Wang**: 哦，我认为我说它更棘手的原因有两点：我提到了**节点迁移**，它实际上今年已经发生，并且在2027年也会发生。对吧？所以大量的**节点迁移**将上线并完成。这将为内存供应商提供额外的比特。此外，到2026年底和整个2027年，晶圆应该会有更多上线。对吧？所以我认为这些是你需要考虑的两个变量，为什么我至少认为2027年仍然会短缺。

<details>
<summary>Original English</summary>

**Ray Wang**: Oh, I think the reason I say it's more tricky because two things, I mentioned about the migration, it's actually happened this year. It also going to happen in 29 seven. Right. So tons of migration going to coming online have been completed. So that will allow for additional bids for the memory supplier. Additionally, the wafer should have lot more coming online by the end of 26. And for, you know, throughout 2027. Right. So I think those are two variables that you want to factor in, for why I'm seeing at least I think like 20 to 27 you're and going to still be shortage.

</details>

### 市场囤积与采购行为

**Joe Weisenthal**: 是的。我们需要一个战略内存储备。是的。为价格和周期设定一个底线。实际上，关于这一点，你现在在市场上看到很多囤积或恐慌性购买吗？人们看到这些预测就慌了，然后尽可能地购买？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah. We need a strategic memory reserve. Yeah. Put a floor on prices and the cycle. Actually on that note do you see a lot of stockpiling in the market or panic buying right now where people are seeing these forecasts and they're freaking out and just buying whatever they can.

</details>

**Tracy Alloway**: 你会得到一种**牛鞭效应**。

<details>
<summary>Original English</summary>

**Tracy Alloway**: How are you get a bullwhip effect. That's right.

</details>

**Ray Wang**: 是的。很难说没有。对吧？就像，我认为你看到的一个好信号是**三星**和**美光**的库存自2025年第三季度以来每个季度都在下降。对吧？这只是一个或两个信号，表明你不仅仅是在购买货架上的一些产品。对吧？然后上线的产品，你还在购买他们库存中的产品。对吧？是的。你正在尽可能多地获取，而且，你知道，考虑到所有的需求以及它发展得如此之快，按月计算，很难说没有某种**预购行为**发生。对吧？特别是当**超大规模云服务商**和媒体实验室之间激烈竞争时，确保硬件产能是基线，对吧？你想要获得最好的设备来竞争，对吧？

<details>
<summary>Original English</summary>

**Ray Wang**: Yeah. It's hard to say no. Right. Like, one of the good I think in the signal you're seeing in timing **Samsung** and **Micron** they're doing inventory was dropping every single quarter since I think Q3 2025. Right. That's just a 1 or 2 signal that you are not just, you know, buying the, some of the products on the shelf. Right? And then upon us and coming online that quarter, you're also buying, now products that are in their inventory, right? Yeah. You're trying to get as much as you can and, you know, you know, given all the demand and how it's developed so fast, like by month, monthly basis, it's hard to say, like, hey, there's no, sort of preemptive purchasing behavior happening. Right? Especially when the hyperscalers and the media labs, they're competing with each other, intensively, securing capacity on the hardware is sort of the baseline, right? You you you want to get the best equipment that you can compete, right?

</details>

### 价格上涨对超大规模云服务商的影响

**Joe Weisenthal**: 是的。所以很明显，如果我购买**任天堂Switch**，或者我购买PC，或者某种消费设备，那么内存成本的增加是其一个重要的驱动因素。也许，你知道，公司不得不提高价格，也许我就不会购买了。你可能会遇到这种情况。那么对于大型**超大规模云服务商**呢？当我们看到像**微软**或**亚马逊**这样的大公司有巨额**资本支出**数字时，这些价格变化会在这些层面上产生影响吗？它们会影响这些买家吗？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah. So obviously, if I'm buying a **Nintendo Switch** or if I'm buying a PC or maybe some sort of consumer device, then the increased memory cost is a meaningful driver of that. And maybe, you know, the company we have to raise prices, maybe I won't buy it or whatever. And you might get this. What about like for the big, hyperscalers when we see these huge capital expenditure numbers from the likes of a **Microsoft** or an **Amazon**, do these prices changes move the dial at these levels in terms of do they affect anything when we're talking about these buyers?

</details>

**Ray Wang**: 是的，我认为，你知道，首先，我认为**资本支出**的增加并非完全是因为价格上涨，但价格上涨肯定会对他们购买内存产生一些影响。对吧？假设**超大规模云服务商**是内存的直接买家，这在不同地区不一定如此。对吧？所以如果他们假设是内存的直接买家，那么肯定，你知道，如果你最初的预算是2亿美元购买一定数量的内存，现在你可能需要打一些折扣。当然。特别是这种情况在未来几个季度可能会越来越多地打折。对吧？所以他们现在会怎么想，希望他们正在尝试这样做。但这仍然非常困难。我尝试达成**长期协议**。对吧？以确保承诺，每年承诺大量价值，并希望能有更好的价格。但这真的很难实现，因为为什么内存供应商不想这样做呢？对吧？我们可以，你知道，按季度协商价格，这样我们就能赚更多的钱。对吧？你知道，特别是考虑到当前的价格和供需环境。

<details>
<summary>Original English</summary>

**Ray Wang**: Yeah, I don't think you know, number one for sure. I think the the the **CapEx** is not really all the **CapEx** increase is not because of the different price increase, but the price increase, thus going to have some kinds of impacts to their purchases of memory. Right. Assuming the hyperscalers are the direct buyer of the memory, which, you know, is not necessarily the case in kind of different locations, right? So if they are assuming they are the direct buyers of your memory, for sure, I if you know, if your initial call was due to hundred million to buy a certain amount in memory right now, probably you need to do some discount there for sure. Especially this thing is that's probably going to the discount to be more and more in the coming quarter. Right? So why would the thinking now try and are hopefully they are trying to do. But I just still very difficult. It's I try to have a long term agreement. Right. To have a secure commit to commit large value for a year basis and to hopefully to have better pricing. But it's really hard to, you know, to achieve that because why no memory supply? I want to do that. Right. We've we can you know, negotiate the pricing, in a coding basis so we can actually get more money. Right. You know, especially given, current, pricing and supply demand environment we want.

</details>

**Joe Weisenthal**: **Ray**，非常感谢你上线。你真的是完美的嘉宾。让我们保持联系，也许我们会在2027年再次讨论，看看情况是否有所缓解。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Thank you so much for coming on online. It's really the perfect guest. Let's, stay in touch and maybe we'll, revisit it in 2027 to see if things have eased.

</details>

**Ray Wang**: 是的，希望如此。

<details>
<summary>Original English</summary>

**Ray Wang**: Yeah, hopefully.

</details>

**Joe Weisenthal**: 好的。谢谢。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: All right. Thank you.

</details>

**Ray Wang**: 非常感谢。保重。

<details>
<summary>Original English</summary>

**Ray Wang**: Thank you so much. Care. Take care.

</details>

**Tracy Alloway**: 太棒了，**Tracy**。这很有趣。我确实觉得有很多变数，但对我来说，总的来说，**挤出效应**是故事中非常重要的一部分。当你看到2027年的那些巨额**资本支出**计划时，这些都是真正的宏观驱动因素。它们将体现在**CPI**中等等。因为，你知道，也许我们未来会获得很多生产力收益。但现在这种支出速度如此之快。它就像一场财政繁荣。

<details>
<summary>Original English</summary>

**Tracy Alloway**: That was great, Tracy. That was fun. I do feel like there's a lot of moving pieces there, but just for me, I in general, the crowding out is such a big part of the story. When you saw those big capital expenditure plans for 2027, like these are real macro drivers. They're going to show up in the **CPI**, etc. like that. And because it's like, you know, maybe we'll get a lot of productivity gains in the future. But right now that pace of spending is so furious. It is like a fiscal boom.

</details>

**Joe Weisenthal**: 是的。我的意思是仍然是刺激。当一些世界上最大的公司和资金最充裕的公司认为这是一个**生存威胁**时，就会发生这种情况，对吧？他们愿意花多少钱来生存是没有上限的。所以你可以把钱投入**HBM**芯片，我想。然后芯片制造商会说：“好吧，实际上，我们想生产大量的**HBM**，至于**DRAM**，那些东西都忘了。”我确实认为，是的，你知道，当涉及到一些数据中心和能源方面时，现在它对能源价格的影响有点模糊。但政治方面已经非常复杂了。然后你还会开始惹恼游戏玩家社区，因为他们无法获得产品。你知道，**英伟达**谈到了一个巨大的错误，然后他们会惹恼我的儿子，因为他无法获得**任天堂Switch**等等。人们会越来越感受到，他们认为可以大量获得的各种资源，现在却被告知：“不，我们已经把这条生产线转移到数据中心，转移到AI了。”这种**挤出效应**将越来越真实地直接影响到人们。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah. I mean still stimulus. This is what happens when some of the world's biggest companies and most cash rich companies decide that this is an existential threat, right? There's no upper limit on how much they're willing to spend in order to survive. And so you could just throw money at **HBM** chips, I guess. And then you get the chip makers going, well, actually, like we want to produce a bunch of **HBM**, like, forget about **DRAM**, all that stuff. I do think like, yeah, you know, when it comes to some of the data center and energy stuff, you know, it's a little ambiguous how much it's affecting energy prices right now. But already the politics of that is very fraught. And then you're going to start upsetting the gamer community because they can't get act. You know, **Nvidia** has talked about, a big mistake and then they're going to upset my son because he can't get a **Nintendo Switch**, etc.. People are just going to start feeling it more and more, the sort of visceral reality that various resources that they thought they could get abundantly. It's like, nope, we've switched this line over to the data centers, over to AI, and it's going to become more this crowding out effect is going to become more and more real to people directly.

</details>

**Tracy Alloway**: 这真是太讽刺了，因为当你想到AI时，你知道，它是一种存在于以太中的东西，对吧？但与此同时，它对世界产生了巨大的物理影响。这有点有趣，我想，很多人可能没有想到。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Which is so ironic because when you think about AI, you know, it's this thing that exists in the ether, right? But at the same time, it has this huge physical impact on the world. And it's it's kind of funny and I guess, like, not what a lot of people would have expected.

</details>

**Joe Weisenthal**: 不，我想不是。**DRAM**的人们，如果你有终端，或者只是应该查一下**DRAM**价格，因为这——

<details>
<summary>Original English</summary>

**Joe Weisenthal**: No, I suppose I suppose not. The **DRAM** people, if you anyone who has a terminal or just should just look up **DRAM** prices because this is

</details>

**Tracy Alloway**: 我以为你要说：“任何有终端的人都应该开始拆卸。”

<details>
<summary>Original English</summary>

**Tracy Alloway**: I thought you were going to say anyone who has a terminal should start stripping out

</details>

**Joe Weisenthal**: 任何有终端的人都应该拧开后盖，取出**DRAM**。不，但如果你有，人们应该看看图表，因为它确实是一个非常沉寂的东西。我的意思是，这是一种真正的**商品化技术**。你知道，这是低端产品，就人们对芯片等的热情而言。正如我们一开始提到的，你知道，成本总体上呈下降趋势，因为增长温和，技术不断改进。然后它在过去四个月里真的就像一个L形，完全失控了。所以，是的，这是一个值得关注的迷人之处。而且有趣的是，你刚才提到的观点，它确实很像一个**大宗商品超级周期**。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: everyone who has a terminal should just unscrew the bag and pull out the **DRAM**. No, but if you had, you people should just look at the chart because it's really here is this thing that's very sleepy. I mean, this was true commoditized tech. You know, this was the low end, in terms of what people were excited about in chips and so forth. And as we mentioned in the beginning, you know, costs generally were on this downward trend and so forth, because growth was modest and technology continues to improve. And then it literally just looks like an L really in like the last four months just gone completely nuts. And so yeah, kind of a fascinating spot to watch. And it's just interesting to the point that you were making how much it really is like a commodity supercycle.

</details>

**Tracy Alloway**: 是的。**大宗商品周期**，我想在2027年也许我们会知道。我们会看看它是否会平衡。我们就在这里结束吧？

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah. Commodity cycle I well I guess in 2027 maybe we'll find out. We'll see if it balances out. Shall we leave it there?

</details>

**Joe Weisenthal**: 就在这里结束吧。这是**Odd Lots**播客的又一集。我是**Tracy Alloway**。你可以关注我的**Twitter**账号**@tracyalloway**。我是**Joe Weisenthal**。你可以关注我的**Twitter**账号**@thestalwart**。关注我们的嘉宾**Ray Wang**，他的**Twitter**账号是**@rwang07**。关注我们的制作人**Carmen Rodriguez**，她的**Twitter**账号是**@carmenarmen**，**Dashiel Bennett**，他的**Twitter**账号是**@dashbot**，以及**Cale Brooks**，他的**Twitter**账号是**@calebrooks**。如果你想获得更多**Odd Lots**内容，包括我们的每日新闻简报，你可以在**bloomberg.com/oddlots**找到。你可以在我们的**Discord**频道**discord.gg/oddlots**24/7讨论所有这些话题。如果你喜欢这次对话，请点赞视频，留下评论，或者更好的是，订阅！感谢收看。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Let's leave it there. This has been another episode of the **Odd Lots** podcast. I'm **Tracy Alloway**. You can follow me @tracyalloway And I’m **Joe Weisenthal** You can follow me @thestalwart Follow our guest **Ray Wang**. He's @rwang07. Follow our producers **Carmen Rodriguez** @carmenarmen, **Dashiel Bennett** @dashbot and **Cale Brooks** @calebrooks And if you want more **Odd Lots** content, then you can find that including out daily newsletter over @bloomberg.com/oddlots And you can chat about all of these topics 24-7 in our discord, discord.gg/oddlots And if you enjoyed this conversation then please like the video, leave a comment or better yet, subscribe! Thanks for watching.

</details>