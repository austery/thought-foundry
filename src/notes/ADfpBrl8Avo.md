---
area: "finance-wealth"
category: finance
companies_orgs:
- Hudson River Trading
- Bloomberg Podcasts
- CME
- Goldman Sachs
- Google
- DeepMind
- Anthropic
- Nvidia
- Meta
- Federal Reserve
date: '2025-10-31'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Odd Lots
- Flash Boys
- Wall Street Bets
- Financial Times
people:
- Ian Dunning
- Jill Weisenthal
- Tracy Alloway
- Sam Altman
products_models:
- ChatGPT
- AlphaGo
- Hopper
- Blackwell
project: []
series: ''
source: https://www.youtube.com/watch?v=ADfpBrl8Avo
speaker: Bloomberg Podcasts
status: evergreen
summary: 本期Odd Lots播客深入探讨了高频交易公司Hudson River Trading (HRT)如何利用人工智能。HRT的AI负责人Ian Dunning解释了AI与传统量化交易的区别，强调了AI模型在处理海量市场数据、进行超短期预测方面的优势，以及其在交易执行和发现复杂模式中的作用。讨论还涵盖了AI在金融领域面临的挑战，包括电力消耗、数据可解释性、监管合规性，以及人才竞争和专有知识保护等问题，并展望了AI在不同交易时间尺度上的应用潜力。
tags:
- ai-in-finance
- data
- high
- infrastructure
- llm
- market
title: Hudson River Trading如何实际应用AI：高频交易中的人工智能与挑战
---
### 播客开场与AI在交易中的应用探讨

**Bloomberg:** 大家好，欢迎收听新一期Odd Lots播客。我是Jill Weisenthal。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hello and welcome to another episode of OddLotss podcast. I'm Jill Weisenthal</p>
</details>

**Tracy:** 我是Tracy Alloway。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I'm Tracy Aloway.</p>
</details>

**Joe:** Tracy，我一直有个播客想法，或者说我一直想做的一件事，从播客的概念上来说，就是为每位嘉宾安排两次采访。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tracy, I've I've always had this idea for the podcast or a thing that I've wanted to do. Okay. conceptually with podcasts is schedule every guest for two interviews.</p>
</details>

**Joe:** 这样你就有了一次开场采访，问了一堆问题，然后你会想：“天哪，我真希望当时能追问下去。我还有更多问题，我才刚开始理解这件事。现在我就可以问那些好问题了。”然后让嘉宾下周再来。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">So you have the opening interview and you ask a bunch of questions and then it's oh god I really wish I had followed up on that. I had more I was just starting to sort of get my head around this thing. Now I could have asked the good questions and then like have the person come back next week.</p>
</details>

**Joe:** 此外，听众也会抱怨：“我希望你当时能问那个问题。”然后你就可以填补所有那些由前一次对话启发而产生的空白。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Also the the audience complains. I wish you would asked that and then fill in all those gaps that had been inspired by the previous conversation.</p>
</details>

**Tracy:** 我觉得这不是个坏主意。我想这会使我们发布的节目数量翻倍。但当然，有些话题会不断出现，通常是我们刚接触、正在努力学习的，特别是技术性话题，其中之一必然是**AI**（Artificial Intelligence: 人工智能），对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't think it's a bad idea. I think it would double the number of episodes that we put out. But sure, there are topics that come up, usually things that we're just kind of new to and we're trying to learn about specifically technical things and one of those has to be AI, right?</p>
</details>

**Joe:** AI，而且，你知道，我上次玩得很开心。我想是上个月，我们在芝加哥。我们和很多不同的人聊了聊，那是一次与交易相关的旅行。我们采访了Don Wilson，采访了**CME**（Chicago Mercantile Exchange: 芝加哥商业交易所）的负责人。我们还有一些其他的聊天，都围绕着交易世界。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI and also, you know, I really had a great time. I guess last month we were in Chicago. We talked to a bunch of different, it was like a trading related trip. We uh interviewed Don Wilson. We interviewed the head of the CME. We had some other chats and they're all about the world of trading.</p>
</details>

**Joe:** 谈到交易，你知道，我们和长期投资者、投资组合经理、捐赠基金聊过。我们还和一些对冲基金领域的人聊过，他们可能持有几周或更长时间。我其实很想更多地了解那些交易员，那些持有时间只有一秒左右的人，因为很多技术和实际行动都在那里，以及那个世界如何赚钱，他们如何实际部署技术，这都非常有趣，但我仍然没有完全掌握。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When it comes to trading, it's like, you know, we talked to long-term investors, portfolio managers, endowments. [clears throat] We talked to some people in the hedge fund space who like maybe have a holding period of several weeks or whatever. I actually really want to learn more about the trading like these people who have like a holding time of 1 second or something like that because that's where a lot of the tech and a lot of the actual like action is and how that world makes money and how they actually deploy technology is very interesting but still something I don't have my handle on.</p>
</details>

**Tracy:** 嗯，实际应用，对吧？还有华尔街的AI文化。我发现这真的很有趣，因为我记得，我想那是在十多年前了。但你还记得Lloyd Blankfine曾说**高盛**（Goldman Sachs）是一家科技公司吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, the practical application, right? And also the culture of AI on Wall Street. I find that really interesting because I remember I guess it was like more than a decade ago. But remember Lloyd Blankfine saying that Goldman Sachs is a technology company.</p>
</details>

**Joe:** 是的，所有这些银行CEO都说我们要安装乒乓球桌来吸引所有程序员。现在我看到交易公司的广告，上面写着“我们有一个装满B200或G300的**数据中心**（Data Center: 集中存放计算机服务器和网络设备的设施）。”来为我们工作吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And all these bank CEOs saying we're going to install ping pong tables to get all the coders. And now I see ads at trading firms and it's like we have a data center full of B200s or we have a data center full of G300s. Come work for us.</p>
</details>

**Joe:** 除了他们的技术，我唯一知道的是，每次你读到任何一家交易公司的简介，他们都会说：“他们喜欢在那里玩西洋双陆棋，他们喜欢玩所有棋盘游戏，午餐时可以看到他们在下棋等等。”我明白了。好吧，他们喜欢概率，他们喜欢游戏，他们喜欢任何东西。让我们继续前进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The only thing besides all their tech that I know is like every time you read a profile of any trading company, they're like and they love to play back gammon there. They love to play like all the article the chess boards are out and they could be seen playing chess over lunch etc. I get it. Okay, they like odds, they like games, they like whatever. Let's move the ball forward.</p>
</details>

**Tracy:** 嗯，还有一个潜在的主题是：这一切都是炒作吗？对吧。因为你有时确实会感觉到，公司发布新闻稿只是为了提及AI，以完成一项任务，表明他们正在做些什么，并希望他们的股票实际上能上涨。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, there's also the underlying theme of is this all hype? Right. Because you do get the sense sometimes that companies are putting out press releases where they just mention AI to tick a box to be seen to be doing something and hope that their stock actually goes up.</p>
</details>

**Tracy:** 而且因为很多这类信息都是专有的，人们有借口不详细说明，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And because so much of this is proprietary and people kind of have an excuse not to go into detail about it,</p>
</details>

**Tracy:** 有时你确实会觉得人们只是在谈论它，而没有实际使用它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">sometimes you do get the feeling that people are just talking about it and not actually using it.</p>
</details>

**Joe:** 愤世嫉俗者，我不是在说我自己。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cynics, and I'm not saying this myself.</p>
</details>

**Tracy:** 我知道你不是个愤世嫉俗者。说到交易和技术，愤世嫉俗者会说**CME**（Chicago Mercantile Exchange: 芝加哥商业交易所）与**Google**（谷歌）合作建立云平台，将交易放到云上的交易被炒作了。那只是一份新闻稿。人们曾这样说过，人们曾提出过这样的指控，他们不明白为什么。你不需要评论。你不需要对此再说任何话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I know you're not a cynic. Speaking of trading and technology, Cynics would say that CME's deal with Google to build a cloud to you put trading on the cloud was hyped. That was a press release. People have said that people have made that charge and they don't understand why. You don't have to comment. You don't have to say anything further on that.</p>
</details>

**Ian:** 我确实有评论，但我会留给我们的嘉宾。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I do have a comment, but I'll hold it for our guest.</p>
</details>

**Joe:** 我只是说，在这个世界上，人们确实会发布新闻稿，而愤世嫉俗者会说：“我真的不明白有什么意义。”总之，铺垫了很长时间。让我们更多地了解交易世界。让我们具体了解AI和技术。在交易领域应用AI到底意味着什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm just saying there is this world where people do press releases and cynics go, I don't really understand the point. Anyway, there's a very long wind up. Let's learn more about the world of trading. Let's learn more about AI and tech specifically. What does it even mean to apply AI within the realm of trading?</p>
</details>

**Joe:** 我们将与Ian Dunning对话。他是**Hudson River Trading**（HRT: 一家高频交易公司）的AI负责人。他之前在**DeepMind**（谷歌旗下的人工智能公司）工作。所以，他在交易和AI方面的资历是最好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are going to be speaking with Ian Dunning. He is the head of AI at Hudson River Trading. He was previously at Deep Mind. So, his uh trading and AI bonafides are about as good as it gets with</p>
</details>

**Tracy:** 你已经证实了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you've established them.</p>
</details>

**Joe:** 我们已经证实，他确实是回答我们所有问题的完美嘉宾。所以，Ian，非常感谢你来参加播客。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've established that really the perfect guest to answer all our questions. So, Ian, thank you so much for uh coming on the podcast.</p>
</details>

**Ian:** 是的，我真的很高兴来到这里。我同意，这种神秘感有点被夸大了，尽管人们有时会接受它，这可以理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I'm really happy to be here. I I I agree is the mystic the mystique factor is kind of overblown even if it's understandable why people embrace it sometimes.</p>
</details>

**Joe:** 我们将超越这种神秘感。让我们从一些非常基本的问题开始。第一个问题是**Hudson River Trading**（HRT: 一家高频交易公司）作为一家公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're going to blow past the mystique. Let's start with some like really just like rudimentary questions. Just the first one is like Hudson River Trading as a company.</p>
</details>

**Ian:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Joe:** 它是如何赚钱的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How does it make money?</p>
</details>

### Hudson River Trading (HRT) 的业务模式

**Ian:** 是的。我们是一家量化、自动化自营交易公司，这有很多词，但我想我看到的是，我们是市场的服务提供商。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So we are a sort of quantitative automated proprietary trading firm which is a lot of words but I guess the way I see it is we are a service provider to markets.</p>
</details>

**Joe:** 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

**Ian:** 最明显的例子是**做市**（Market Making: 为市场提供买卖报价，赚取买卖价差）。在任何时间、任何地点随时准备买卖任何产品，这对世界来说是一种效用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The most clear example is market making. There is like a sort of utility to the world of being ready to buy or sell any product anytime anywhere.</p>
</details>

**Ian:** 对我们来说，这意味着股票、期货、期权、加密货币、债券。如果你能制造一台神奇的机器，为任何金融工具提供买卖报价，并且你希望提供最好的价格，最紧密的价差，人们就会和你交易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for us that means stocks, futures, options, crypto, bonds. And if you could say build a magical machine to quote a price to buy or sell at any instrument and you would want to be like the best possible price, like the tightest price, people would trade with you.</p>
</details>

**Joe:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Ian:** 他们会很高兴，因为他们的交易有了交易对手，而且他们得到了一个很好的价格，比如低价差，而我们也很高兴，因为我们本质上是在“压路机前捡硬币”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">they would be happy because there's a counterparty for their trade and they get a kind of good price like a low spread and we're happy because we essentially pick up a penny in front of a steamroller.</p>
</details>

**Ian:** 也就是说，我们从价差中赚钱，如果我们有一个真正神奇的设备，能告诉我们所有东西的价值，我们就能在压路机到来之前捡到硬币。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like we are making sort of money from that spread and we can pick up the pennies in front of a steamroller if we have a really magical device which tells us how everything should be worth the steamroller is coming.</p>
</details>

**Joe:** 是的，它告诉我们压路机何时到来。所以，我想这在某种程度上是非常非常复杂的中间商，就像亚马逊一样。亚马逊不生产东西，但它是一家非常有价值、盈利的公司。它提供服务，人们从中获得价值。同样，我们也在不同交易对手之间，在时间和空间中移动股票。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it tells us when the steamroller is coming. And so I I think that's kind of the very very sophisticated sort of middleman in some sense in the same way that Amazon is. Amazon doesn't make stuff but is a very valuable profitable company. Provides a service people get value of. Same thing. We're moving stock spawns through time and space between different counterparties. And yeah,</p>
</details>

**Tracy:** 我们会在几分钟后问你关于压路机的问题。但在那之前，**AI**（Artificial Intelligence: 人工智能）或者你使用AI的方式，与过去的算法或量化交易有何不同？因为我想，其中一个问题是，这是一种进化性的变化，你知道，也许只是对现有事物的一种微小改进，还是说这是一种颠覆性的、质的飞跃，是交易运作方式的一次重大转变？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we will ask you about the steamroller in a few minutes. But before we do that, how does AI or the way you're using AI actually differ from the algorithmic or quant trading of old? Because I guess that one of the questions is is this, you know, a sort of evolutionary change, you know, maybe a marginal improvement on what already exists or is this something seismic and a step change the big shift in the way trading actually works.</p>
</details>

### AI与传统量化交易的区别

**Ian:** 是的，我的意思是，我不想在某种程度上夸大我们自己，因为正如你之前提到的，在这个领域，这类公司的具体做法非常不透明。我当然可以谈谈我们自己的经验，我们从事这种交易已经20多年了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I mean I don't want to over overstate ourselves in some sense because in the space as you mentioned before it's very like opaque what sort of different firms of this class are doing. I can certainly speak to our own experience which is we've been doing this type of trading for 20 plus years.</p>
</details>

**Ian:** 就像所有做这件事的人一样，它的运作方式是，你根据人类的直觉手工制作特征，比如“哦，我不知道，订单簿看起来不平衡，想买的人比想卖的人多，价格很快就会上涨”之类的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and much like everyone who was doing this the way it kind of worked was you handcraft features that sort of based on human intuition oh I don't know the order book looks imbalanced there's more people wanting to buy than sell the price is going to go up soon or something like that.</p>
</details>

**Ian:** 也许你找来一群非常聪明的人，他们非常努力地思考，这几乎就像制作一块非常精美的手表，你艺术性地制作所有这些零件，然后你可能使用相对简单的数学技术，比如**线性回归**（Linear Regression: 一种统计模型，用于预测一个变量与另一个变量之间的关系），来组合这些预测因子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and maybe you you get a bunch of very smart people and they think very hard like it's almost like making a very fancy watch you kind of artistically craft all these pieces and then maybe you use relatively simple meth mathematical techniques like linear regression to combine those predictors.</p>
</details>

**Ian:** 我参加会议和招聘已经很长时间了，即使是今天，你上网也会看到人们说：“哦，出于某种原因，在金融领域你只能做到这些。”他们会说：“哦，噪音太大”或者“市场太不稳定”之类的话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I've been going to conferences and things and recruiting for a long time and even if today just go on the internet you'll people say things like oh that's all you can do in finance for some reason they'll say this they'll say something like oh it's too noisy or markets are too non-stationary or things like this and so that's all you can do.</p>
</details>

**Ian:** 我想，在我看来，这种信念并没有任何依据，这只是我的生活经验。所以我们长期以来一直对此感到恐惧，因为我们是基于世界而存在的，理想情况下，你会把这些东西放入一台没有任何人类偏见的机器中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I guess that belief isn't really backed up by anything in my my opinion and like lived experience I guess and so we sort of viewed it horror for a long time is well basing in the world and ideally you would put this into kind of like a machine that does not have any human biases.</p>
</details>

**Ian:** 我自己不知道如何交易股票，我只买广泛的**市场ETF**（Exchange Traded Fund: 交易所交易基金）。我懂什么呢？所以，如果我们能把所有数据放入一个盒子，它就能处理所有这些数据，它会发现你永远无法通过手工制作发现的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't know how to trade stocks myself like I I buy broad market ETFs. What do I know? And so we but if you could put all the m data into a box and it kind of could turn all that data it would find things that you would never be able to do this handcrafted thing.</p>
</details>

**Ian:** 我们在2013年到2014年期间很早就开始这样做了。随着时间的推移，在过去十年左右，就像在其他非金融领域一样，出现了一个“曲棍球棒”式的增长，你可以通过模型的大小和部署的计算量来衡量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we started doing that very early relatively in 2014 2013 period. And over time over the last sort of decade or so much like in other contexts that are not finance there has been sort of a hockey stick and you can measure it by the size of the models the compute deployed.</p>
</details>

**Ian:** 随着时间的推移，这种市场建模方式最初并不是与传统方式的混合，而是完全取代了它。所以现在我们的交易完全由这台神奇的机器驱动，它消耗我们所有的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And over time that way of modeling the markets initially was not like a hybrid with the traditional way kind of just like overtook it entirely. And so now our trading is entirely driven by this magical machine that consumes all our data.</p>
</details>

**Ian:** 我一直说这台神奇的机器会消耗我们的数据是有原因的，那就是**ChatGPT**（由OpenAI开发的大型语言模型）就是这样训练的。它消耗了所有数据，整个互联网都被抓取并连接到一个地方。你训练一个模型，它会吸收所有这些信息，然后就会出现一些新兴的东西。这就是为什么我有点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I kind of keep saying this magical machine that consumes our data for a reason which is that this is how chat GPT is trained. It consumes all the data all the internet. It's kind of scraped and connected into one place. You train a model that kind of takes it all and something emergent comes from it. And that's why I'm kind of</p>
</details>

**Ian:** 有点引导性，但这就是我谈论它的原因，我认为这与“我用我对市场的直觉来构建一个预测模型”有实质性的不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">a bit leading but that's why I'm talking about in the sense and I think that is materially different from the like I'm using my intuition of the markets to kind of construct a predictive model.</p>
</details>

**Tracy:** 那么，请明确一点，**AI**（Artificial Intelligence: 人工智能）在这里的有用性，有多少是关于执行和能够用数百或数千个**GPU**（Graphics Processing Unit: 图形处理器）快速处理大量数据，而不是发现可以利用的复杂模式或差异？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So just to be clear how much of the usefulness of AI here is about execution and the fact that you can crunch a lot of data really quickly with hundreds or thousands of GPUs versus spotting sophisticated patterns or discrepancies that you can exploit.</p>
</details>

**Ian:** 我认为两者兼而有之。我认为人们在“做线性回归”这类事情上错过的一点是，当你真正思考金融市场中生成的数据量时，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's both. I think one of the things that people sort of missed with the whole like do a linear regression type thing is when you really think about how much data there is in financial markets generated and when I</p>
</details>

**Ian:** 当我说数据时，我认为重要的是要把它看作市场中发生的每一个事件，而不是价格的时间序列，而是实际的底层基础：人们报价、交易、撤销报价，这些底层数据是互联网规模的数据集。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">say data I think it's important to think of it as every event that happens in markets not the sort of time series of prices but like the actual low-level substrate people are quoting trading retracting quotes that like low-level stuff is internet scale data set sizes.</p>
</details>

**Ian:** 我们从**AI**（Artificial Intelligence: 人工智能）那里学到的一个痛苦教训是：“你不应该太费力地去思考如何进行特征工程和预处理。你应该把所有东西都投入到某种形式的计算中，这种计算能够利用互联网规模的数据。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and one of our sort of bitter lessony type things of AI was like You shouldn't think too hard about how to feature engineer this and pre-process it. You should kind of throw it all in just something a form of computation that can kind of make use of internet scale data.</p>
</details>

**Ian:** 在2010年代，就像计算机视觉一样。人们过去常常为图像的边缘等制作检测器，然后将它们组合起来。同样，这是一种很好的方法，但你知道，它完全被使用大量**GPU**（Graphics Processing Unit: 图形处理器）和一种相当通用的**神经网络**（Neural Network: 模拟人脑结构和功能的计算模型）形式并全力以赴的想法所主导。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the 2010s, it was like computer vision. People used to make detectors for edges of images and things and they would combine them. And same thing, it's like that was a good approach, but you know, it's completely dominated by the idea of getting a very large number of GPUs and a kind of a pretty generic neural network form and powering through it.</p>
</details>

**Ian:** 至于它是如何发现其他方法无法发现的东西，这很难说。我们的模型不是很容易解释。我认为这没关系，因为正如Joe提到的，我们的交易风格和持有时间最好被认为是几分钟、几小时，大部分情况下可能是一到几天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As for like the how is it finding things that other methods could not, it's very hard to say. Our models are not very interpretable. And I think that's fine because as Joe mentioned, our sort of trading style and holding times are better thought of as like minutes, hours, maybe like a low single digit days for the most part.</p>
</details>

**Ian:** 我想在我看来，期望它们是可解释的是不合理的，因为我不知道，如果我查看**特斯拉**（Tesla: 一家电动汽车和清洁能源公司）的订单簿数据或其他什么。我真的能比随机猜测更好地告诉你特斯拉一分钟后的价格吗？所以我就是这样想的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I guess in my mind it's unreasonable to expect them to be interpretable because I I don't know if I looked at the orderbook data for Tesla or something. Am I really going to be able to tell you better than random what the price of Tesla will be in a minute's time? And so I kind of think it like that.</p>
</details>

**Ian:** 如果你已经拥有了明显超越人类的东西，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you have something that's clearly superhuman already,</p>
</details>

**Joe:** 你能期望多少可解释性？这与普通的**AI**（Artificial Intelligence: 人工智能）非常不同，对吧？这进入了我非常感兴趣的一些领域，但只是为了确定我们正在谈论的内容。是的。你正在交易像特斯拉、**英伟达**（Nvidia: 一家图形处理器和人工智能芯片公司）等股票。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">what level of interpretability could you expect? Like that's very different, right, to normal AI, right? This is gets into some areas that I'm very interested, but just to like establish what we're talking about. Yeah. You're trading a stock like a Tesla, Nvidia, etc.</p>
</details>

**Tracy:** 用你的魔法机器，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With your magic machine,</p>
</details>

**Joe:** 魔法机器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">magic machine.</p>
</details>

**Tracy:** 那么，我们还有一集节目，我们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, we had another episode where we Well, that was the money box</p>
</details>

**Joe:** 那是钱箱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">as a magic box.</p>
</details>

**Tracy:** 那是另一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's a different</p>
</details>

**Tracy:** 那是另一个，有了这台**AI**（Artificial Intelligence: 人工智能）机器，它可以说是在不断成长，对吧？它更像是在实验室里成长起来的，而不是被编程的。很像聊天机器人。我知道这是一种非常不同的技术。比如，英伟达明天的价格会是多少，或者英伟达今天下午的价格会是多少？你所说的是，凭借你的技术，你更有可能做到这一点，你实际上可能能够对未来做出明智的预测，而这在十年前是无法做到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's a different one with this AI machine that is sort of arguably grown, right? It's sort of grown in a lab more than it is programmed. Much like a chatbot. I know it's a very different technology. like what is the price of Nvidia going to be tomorrow or what is the price of Nvidia going to be this afternoon? What you're saying is with your technology you have a better a better chance of getting that right that you actually might be able to make an informed prediction about the future in a way that you couldn't have done say 10 years ago.</p>
</details>

**Ian:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes.</p>
</details>

**Tracy:** 那些谈论这个问题的人会找出各种理由，比如“哦，股市不像国际象棋或围棋，所以你不能以同样的方式进行预测。”但你所说的是，有了这些不同于**LLM**（Large Language Model: 大语言模型）的模型，至少在短期内，它们具有一定的预测能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that people who talked about this they would come up with reasons oh the stock market it's not like chess or go and therefore you can't really do predictions the same way. But what you're saying is that with these models which are different than LLMs, there is some at least on a short time scale predictive capacity.</p>
</details>

### AI的预测能力与局限性

**Ian:** 是的。直到今天，我仍然觉得这有点难以置信。我想你脑海中会跳出这种**有效市场假说**（Efficient Market Hypothesis: 认为市场价格已经充分反映了所有可获得的信息）的东西。似乎有人说他们可以预测股票一小时后的价格。你的本能反应是难以置信，觉得你像是在虚张声势或编造。但不是，这些模型可以预测这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes. I think I find this still to this day a little bit hard to believe. I think you get this kind of efficient market hypothesis stuff jumped into your head. It seems like someone's saying they can predict like the price of a stock in an hour. Your instinctual reaction is incredulously like just sounds like you're kind of bluffing or making it up and but no, these models can predict this.</p>
</details>

**Ian:** 我认为调和这种“真的吗？”的本能的方式是，这些预测在某种程度上非常糟糕。我们通常不谈论准确性，但我想可以这样想：准确性大约是50.1%左右。它们只比随机猜测好一点点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's the way to kind of reconcile the like really man like kind of instinct is that the predictions are very bad in some sense. We don't normally talk about like accuracy, but I think the way to think about it is like the accuracy is like 50.1% type thing. Like they're only a little bit better than random.</p>
</details>

**Joe:** 但我想，如果你大规模地进行，额外的1%会大大增加你的利润。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I suppose an extra 1% like blows up your profits if if you're doing it at scale.</p>
</details>

**Ian:** 大规模地做，做足够多次，随着时间的推移，你就会意识到这是有偏见的抛硬币。至于为什么这可能在不借助魔法的情况下实现，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Doing doing it at scale doing it enough times and over time you kind of realize the biased coin flip. And as for why it might be possible to do this without kind of invoking magic, it's like</p>
</details>

**Ian:** 市场是许多不同参与者之间非常美丽的互动，所有不同类型的效用、风险偏好等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">markets are very beautiful interaction of like many different parties, all the different kind of utilities, risk preferences and things</p>
</details>

**Ian:** 你真正看到人们在做什么的唯一方式是他们市场中的行动，而你有点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the only way you really see what people are doing is by like the actions they take in markets and you kind of</p>
</details>

**Ian:** 它正在吸取所有这些微观信号并进行推断。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it's sucking up all that like signal micro signal and extrapolating.</p>
</details>

**Joe:** 对机器预测股票价格可能性的怀疑或玩世不恭有点奇怪，对吧？因为机器摄取数据，然后，也许它们看到了一个模式，这种数据组合很可能意味着明天会是上涨。人类一直在做这件事。除了数据，我们还有什么？对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The cynicism or the skepticism about the possibility of machines that could predict the price of stocks is a little strange, right? Because machines ingest data then whatever maybe they see a pattern more likely than not this constellation of data means tomorrow will be green. Humans do this all the time. What else do we have besides data? Right?</p>
</details>

**Joe:** 你有一个分析师，他们发布一份报告，说特斯拉或英伟达将涨到每股500美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You have an analyst and they put out a Tesla or whatever Nvidia is going to go to $500 a share.</p>
</details>

**Tracy:** 你怎么敢暗示我不如电脑聪明。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How dare you insinuate I'm not smarter than a computer.</p>
</details>

**Joe:** 我们，我们所有人类都有这些数据，而且数据少得多，然而人类一直在做预测。这是一个完整的行业。所以，认为出于某种原因，电脑无法用比分析师多得多的数据做到这一点，我明白为什么这种玩世不恭显得有点奇怪。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We we're like all humans have this data and much less data and yet humans are making predictions all the time. There's a whole industry of it. So the idea that therefore a was for some reason a computer couldn't do this with much more data than analysts ever have this I understand why the cynicism is comes off as a little strange.</p>
</details>

**Ian:** 我认为一些疑虑源于这样一种观点：许多这些模型倾向于回顾过去，对吧？其中一些模型偶尔在发现或应对重大**制度性断裂**（Regime Break: 市场或经济环境发生根本性变化）方面表现相当糟糕。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think some of the doubt stems from this idea that a lot of these models tend to be backward-looking right and some of them occasionally are pretty bad at spotting or reacting to big regime breaks.</p>
</details>

**Ian:** 我想，有时人们会认为，也许人类在思维上更灵活，更具适应性，他们能够发现这些重大的文化转变。你实际上是如何，我想，为这些大的模式变化做准备的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I guess the thinking again sometimes is that maybe humans are more flexible, maybe more adaptive in their thinking and they can kind of spot these big cultural shifts. How do you actually I guess prepare for those big pattern changes?</p>
</details>

**Ian:** 是的，我在**HRT**（Hudson River Trading: 一家高频交易公司）工作期间经历了**新冠疫情**（COVID-19: 2019冠状病毒病），我认为那就像是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I was at HIT for CO and I thought that was kind of like the most</p>
</details>

**Joe:** 那是一个大模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that was a big pattern.</p>
</details>

**Ian:** 那是一个大模式断裂，但一切都进行得非常顺利。实际上，在某些方面，这更像是一场工程危机。股市交易量暴增，每个系统都在尖叫着努力跟上活动量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That was a big pattern break and things went totally fine. Actually, it was more of an engineering crisis in some ways. stock market volumes exploded and every system was just like screaming trying to keep up with the volume of activity.</p>
</details>

**Ian:** 但就预测而言，它们保持得相当好，我也必须在脑海中调和这一点。我想这确实是一个时间范围的问题，以及我们谈论的未来有多远。在盘中交易中，我认为很多价格变动都是由观察流量驱动的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But in terms of the predictions, they stayed quite good and I had to like reconcile this in my head as well. I guess this it is a matter of like horizon and like how far in the future are we talking intraday I think a lot of the price movement is driven by just observing like the flows.</p>
</details>

**Ian:** 对我们人类来说，这很难观察，但它就像市场中买卖双方的相对模式。是的，在新冠疫情期间，波动性巨大，价格上下波动很大，但它们在上下波动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's hard for us as humans to observe, but it's like the relative patterns of buyers and sellers in the markets and it's like yes during COVID the volatility was massive and prices were moving up and down a lot but they were going up and down</p>
</details>

**Ian:** 比如说2020年3月，所以这些模型对人类来说是**域外**（Out of Domain: 超出模型训练数据范围）的，但我想在某种程度上对模型来说并不是域外的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">during say March 2020 and so these models it was sort of out of domain for a human but I don't think in out of domain in some sense for the models</p>
</details>

**Ian:** 但我想我也不知道如果你试图做出提前一个月的预测，你会如何应用这种思维。我经常遇到人们说：“哦，每个人都知道对冲基金，我们不是对冲基金，他们就像在抛硬币，这是一种**幸存者偏差**（Survivor Bias: 仅关注幸存者而忽略失败者造成的偏差）。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but I guess I also don't know how you would apply this thinking if you were trying to make sort of month ahead predictions. I often get like people being like, "Oh, everyone knows hedge funds, which we're not a hedge fund, is like a they're like flipping coins and it's some survivor bias thing."</p>
</details>

**Ian:** 而且，你知道，我真的不知道关于提前几个月的预测。那不是一个数据丰富的环境。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you know, I genuinely don't know about months out prediction stuff. That is not a data rich environment.</p>
</details>

**Joe:** 我的意思是，从定义上讲，天数比月数多，对吧？所以，按天进行预测，你获得的数据会多得多。你是这个意思吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, just by definition, there have been more days than months, right? And so therefore, prediction on a day basis, you're offered a lot more data. Is that what you're saying?</p>
</details>

**Ian:** 这个经验法则基本上非常有用。它一直延伸到秒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That rule of thumb is basically very useful. It is a and it extends all the way down to seconds.</p>
</details>

**Ian:** 是的。我们一直都在经验上看到这一点。所以，是的，我想我所说的一切确实都有这个警告，它确实依赖于一定的信噪比。我绝对无法用同样的**AI**（Artificial Intelligence: 人工智能）“锤子”对一个月后的价格做出合理的断言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And we see that empirically all the time. And so yeah, I guess all the things I'm saying do have this caveat that it does rely on being a certain level of signal to noise. I definitely cannot make reasonable claims about the price of things in like a month using the same kind of like AI hammer.</p>
</details>

**Ian:** 我想，具体来说，我谈论了很多使用市场数据进行这些预测。这是因为在盘中时间尺度上，这是最重要的。一切都与资金流来回流动有关。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess also to be specific, I'm talking a lot about using market data to make these predictions. And that's because on the sort of intraday time scale, that is the most important thing. It's all about flows and things back and forth.</p>
</details>

**Ian:** 如果你考虑一个月的时间尺度，我认为那是基本面。**AI**（Artificial Intelligence: 人工智能）能用于此吗？老实说，我不知道。这绝对超出了我的专业范围。我想人们对此有各种各样的看法。也许有些人非常想声称他们可以。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you're thinking about things in a month's time scale, I think that's fundamentals. And can AI be used for that? I don't know to be honest. And it's definitely outside my wheelhouse. And I guess people have various opinions about that. And maybe some people very much would like to claim that they can.</p>
</details>

**Ian:** 而且，你知道，其他人可能不这么认为，但这绝对超出了我的专业领域。我不知道。等等，跟我们谈谈你正在使用的数据，或者多谈谈，因为这是另一个人们倾向于用公关语言说话的领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you know, others maybe don't, but it's definitely outside of my area of expertise. And I I don't know. Wait, talk to us about the data that you're using or talk more because this is another area where people tend to talk in PR speak.</p>
</details>

### 数据来源与类型

**Joe:** 有时我们能访问所有这些数据，不寻常的数据，另类数据，这将使我们能够更好地使用**AI**（Artificial Intelligence: 人工智能）。你实际上在看什么？你发现了什么，我想，最有用？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sometimes we [clears throat] have access to all this data, unusual data, alternative data, and that's going to enable us to use AI better. What are you actually looking at? And what have you found, I guess, most useful?</p>
</details>

**Ian:** 嗯，我想我刚开始时发现最反直觉的事情是，当你考虑预测任何东西一分钟、一小时后的价格时，到目前为止最有用的是市场数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I think the thing that I found most counterintuitive when I started was that when you're thinking about predicting the prices of anything a minute, an hour out, by far the most useful thing is just market data.</p>
</details>

**Ian:** 这是你可以从交易所购买的市场数据源，价格相当合理。人们常常认为这是一种竞争护城河。这些交易所的数据费用并不是特别高，在加密货币领域，你知道，那就像狂野西部一样，但每个人都可以收集这些数据源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is the market data feeds you can buy from the exchanges for a pretty reasonable price. People often think this is some sort of like competitive moat. the data fees for these exchanges are not particularly high and in crypto you know where it's like a wild west but everyone can collect these feeds.</p>
</details>

**Ian:** 所以，这是最有用的原始成分，它是每个人意图最真实的表达，对吧？他们去市场，他们报价买卖，这是主要成分。人们有点被“哦，不，你有没有Twitter订阅源”之类的东西困扰。**Bloomberg**（彭博社）通过一系列产品销售Twitter订阅源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so that is the most useful raw ingredient that is the most true expression of everyone's intents right they're going to the market they're quoting the buying selling that is the primary ingredient people get kind of caught up on the whole like oh no do you have a Twitter feed type of thing and Bloomberg sells a Twitter feed through a state of products and</p>
</details>

**Joe:** 购买那个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">buy that</p>
</details>

**Ian:** 购买那个。所以，当然，时不时会有新闻事件在市场交易时间内发生，导致价格变动，使价格脱节。但如果你冷静地理性分析，与整体庞大市场相比，这是一种相对不频繁的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">buy that so it's every now and then obviously something happens news happens during market hours that moves the price dislocates the price. But if you really coldly rationalize that, that is a relatively infrequent thing compared to the overall massive markets.</p>
</details>

**Ian:** 所以，对于盘中交易，请考虑这些市场数据源。它字面上就像一些小事件，有人以这个价格和这个规模报价。所有这些都是匿名的。市场数据源是匿名的。所以，那是原始数据，而且非常庞大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for thinking intraday, think these market data feeds. It's literally like a little events someone quoted at this price and this size. It's all anonymous. Market data feeds are anonymous. And so that is the raw stuff and it is vast.</p>
</details>

**Ian:** 每天每只股票每份期货都有数百万计的事件。当你达到几天的时间尺度时，**另类数据**（Alternative Data: 指非传统来源的数据，如卫星图像、社交媒体情绪等）才真正发挥作用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are just millions and millions of events per day per stock per future. When you get to the day days time scale, that's where the alternative data quote unquote kind of really comes in.</p>
</details>

**Ian:** 也就是说，除了市场数据之外，**SEC**（Securities and Exchange Commission: 美国证券交易委员会）文件、新闻源、资产负债表、券商报告等。这就是它的用武之地。有大量的**数据产品**（Data Offerings: 提供数据的服务或产品），人们试图出售这些产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As in alternative to market data, the SEC filings, the news feeds, balance sheets, broker reports, things like this. That's where that comes in. And there's a vast sea of data offerings that people try and sell that.</p>
</details>

**Ian:** 我认为在这种情况下，你进入的是一个**夏普比率**（Sharpe Ratio: 衡量投资组合风险调整后收益的指标）非常低的环境。很难将这些额外夏普比率归因于这些事物中的每一个。但在某种意义上，它也非常民主化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think in that kind of situation, you it's a very low sharp environment you start getting into. And it's it can be hard to attribute the extra sharp each of these things. But in some sense, it's also very democratized.</p>
</details>

**Ian:** 也许有人在收集非常秘密的数据集，但我的收件箱，我甚至不是负责购买这些另类数据的人，却经常收到人们试图向我推销最新另类数据的信息。我认为其中很多不一定具有多少预测价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are maybe people collecting very secret data sets, but my inbox, and I'm not even the person in charge of buying these alternative data sets, is often full of people trying to sell me the latest alternative data set. And I think a lot of them don't necessarily have much predictive value,</p>
</details>

**Joe:** 但显然，有市场需求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but clearly there's there's a market for it.</p>
</details>

**Tracy:** 你见过最疯狂的是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's the craziest one you've seen?</p>
</details>

**Ian:** 嗯？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Huh?</p>
</details>

**Tracy:** 你还记得吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Can you remember?</p>
</details>

**Ian:** 我的意思是，人们对**华尔街赌注**（Wall Street Bets: Reddit上的一个在线社区，以散户投资者的激进交易策略闻名）时代反应非常强烈，并试图从中提取出一堆Reddit相关的东西，超越仅仅是Reddit的原始抓取，并试图将其提炼成某种东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, people have definitely reacted very strongly to the Wall Street Bets era and tried to kind of bunch of Reddity extracted thing and go beyond just like raw captures of Reddit and trying to distill it into something.</p>
</details>

**Ian:** 但是，你知道，我甚至只是想想，**Meme股票**（Meme Stock: 因社交媒体关注而股价飙升的股票）的事情，更多的是在发生之后才被谈论，而不是在发生之前。所以，我不知道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But, you know, I just even just thinking about it, the meme stock thing is kind of almost talked about more after it happens than it happens before. And so, like I I don't know.</p>
</details>

### AI模型的可解释性挑战

**Joe:** 这是一个有点离题的问题。你提到了**可解释性**（Interpretability: 指模型决策过程的透明度和可理解性），这让我想到我一直在思考**AI**（Artificial Intelligence: 人工智能）的一个问题，甚至不只是在金融领域。你在**DeepMind**（谷歌旗下的人工智能公司）工作过，它当然培养出了一个比世界上最伟大的围棋大师还要优秀的围棋选手。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This sort of a sideways question. You mentioned interpretability and this got me something I've been wondering about AI for a while. Not even in the finance realm specifically. You're a deep mind which of course produced a great go player better than the greatest grandmaster in the world.</p>
</details>

**Joe:** 我下过国际象棋。我们知道国际象棋引擎比任何人类都好得多。另一方面，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I played chess. We know that chess engines are much better than any human. On the other hand,</p>
</details>

**Joe:** 据我所知，没有好的**AI**（Artificial Intelligence: 人工智能）国际象棋导师。换句话说，国际象棋引擎很厉害，但我从来没有能够得到一个这样的东西，它能说：“好吧，你走了这一步，但你知道吗，你正在关闭这个车线，因为它的，它不会那样做。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">as far as I could tell, there is no good AI chess tutor. So, in other words, the chess crush, but like I've never been able to like get a thing where it's okay, you did this move, but you know what, you're closing this rook file and down the line because his like it doesn't do that.</p>
</details>

**Joe:** **Chess.com**（一个国际象棋网站）的人类对话非常初级等等。你能谈谈为什么会出现这些问题吗？为什么某种版本的AI或**机器学习**（Machine Learning: 人工智能的一个分支，使计算机通过数据学习）或其他什么可以做得非常好，但它实际在做什么的解释，我认为这有点像可解释性，却无法用简单的英语清楚地表达出来？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The chess.com human talk is very rudimentary, etc. Can you talk a little bit about why there are these problems where some version of AI or machine learning or whatever can do fantastically well, but then the actual explanation of what it's doing, which I think is kind of what interpretability is, can't articulate in a plain English why it's able to do what it does.</p>
</details>

**Ian:** 我认为这仅仅是因为这些**神经网络**（Neural Network: 模拟人脑结构和功能的计算模型）在某种意义上只是一个庞大的数字集合，我们训练这些模型的目标是几乎完全摆脱所有结构，它们可能会以一种与我们学习方式完全不同的方式学习事物。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's just because these neuronet networks are some sense just like a big old blob of numbers and what we're aiming to do when we're training these models is to almost like free ourselves from almost all structure and they might learn things in a way that is nothing at all like how we learn things.</p>
</details>

**Ian:** 所以我最好的猜测是，为什么它很难，是因为它们在某种意义上在内部进行推理。人们使用“推理”这样的词。这让我感到不适。我见过“想象力”之类的词被用于神经网络。天哪，我不知道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so my my my best guess for like why it's hard is because they might be reasoning in some sense internally. And people use these words like reasoning. It kind of makes me wse. I've seen imagination and things used about neural networks. My god, I don't know.</p>
</details>

**Ian:** 这种将它们拟人化的做法有点危险，因为它们本质上是以这种方式在内部处理事物，我认为这本质上是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's like kind of anthropomorphization of them is kind of dangerous because they are essentially processing things internally in this way that I think is inherently</p>
</details>

**Ian:** 不像我们所做的那样，这是我最好的猜测。有一些有趣的**反例**（Counter Examples: 与一般规律或理论相悖的例子）。过去几年我最喜欢的一件事是**Golden Gate Claude**（Anthropic公司的一个实验性AI模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">not like how we do and that is my best sort of guess. There are some interesting counter examples. One of my favorite sort of things in the past couple years was Golden Gate Claude which was anthropic made the model.</p>
</details>

**Ian:** **Anthropic**（一家人工智能安全研究公司）让模型对**金门大桥**（Golden Gate Bridge: 美国旧金山的一座著名桥梁）非常感兴趣，他们问的每个问题都会回到金门大桥。所以它们并非完全不可穿透。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">basically get very interested in the Golden Gate Bridge and every question they asked would come back to the Golden Gate Bridge. And so they're not completely impenetrable.</p>
</details>

**Joe:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Ian:** 但很明显，在某个点之后，很难将其映射回我们思考的方式。而且，尝试这样做非常诱人且令人兴奋，特别是对于**AI安全应用**（AI Safety Applications: 旨在确保人工智能系统安全、可靠和有益的应用），这对我来说不是那么相关，但我认为尝试这样做非常诱人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But it's clear that like it gets hard beyond a point to kind of map this back to how anyway like we think and it's it's very tempting to and exciting to and especially for like AI safety applications which aren't really relevant to me so much but I think it's very tempting to try.</p>
</details>

**Joe:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

### AI模型与LLM的异同

**Joe:** 不，这让我觉得，如果你能解决这个问题，很多工作就能完成，你实际上可以大幅提高生产力。但我确实认为，在你训练模型时，这是一个重要的障碍。所以你的模型与**大型语言模型**（Large Language Models: LLM）等不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, it strikes me is that if you could solve that many jobs would you could actually make a lot of productivity gains. But I do think that's an important hurdle when you're training your models. So your models are different than large language models etc.</p>
</details>

**Joe:** 但它们的共同点是，它们都需要惊人的数据量和惊人的计算需求。如果有人从事**LLM**（Large Language Model: 大语言模型）工作，你的训练过程对他们来说有多适用？他们如何从那种环境转移到你的环境？在基本概念、计算和训练像你这样的模型的要求方面，与主要实验室正在做的事情相比，是否有足够的相似之处？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what they have in common is this incredible amount of data, incredible amount of compute demand. How applicable if someone had worked on LLMs would your training process be to them? How interpret how could they move from that environment to yours? Are there enough similarities in the basic notions and compute and requirements to train a model such as yours versus what people are doing at the major labs?</p>
</details>

**Ian:** 我会说，现在在2025年，绝对如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would say now in 2025 absolutely.</p>
</details>

**Joe:** 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

**Ian:** 但我在2020年不会这么说。这是我现在做了一段时间后，有点让我感到惊讶的事情，那就是我们的问题在某种意义上是由长串的顺序信息和从中推断出来的信息定义的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I would not have said that in 2020. And this is something that kind of just caught me by surprise having done this for a while now is that our problems are kind of defined by long sequential strings of information in some sense and extrapolating from that.</p>
</details>

**Ian:** 如果我回想**AI**（Artificial Intelligence: 人工智能）的过去，它就像是“这是热狗吗？”这就像图像分类器测试一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I think back to the past of AI, it was like is this a is this is this like a hot dog or not? It's kind of like the like image classifier, you know, test.</p>
</details>

**Ian:** 然后，有一些与音频相关的东西，这更熟悉一些。机器人技术。嗯，但当我们进入这个**LLM**（Large Language Model: 大语言模型）时代时，它变得非常有趣，因为突然之间，问题变得非常相似，你想要回顾漫长的历史，漫长的上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then uh there was some stuff with audio and things that was a little bit more familiar. robotics. Eh, but when we got to this sort of LLM era, it got very interesting because suddenly the problems were very similar in that you have you want to think back over like long histories, long context.</p>
</details>

**Ian:** 好的，这听起来不错。你有很多数据，你想尽可能高效地处理它们。你还需要服务这个模型。这个模型必须以相对合理的速度运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, that sounds good. You've got a lot of data and you want to turn through it in as efficient way as possible. You also have to serve this model. This model has to run in like a relatively reasonable speed.</p>
</details>

**Ian:** 特别是对于**LLM**（Large Language Model: 大语言模型）领域，有数百万人正在**ChatGPT.com**（OpenAI公司开发的聊天机器人）上打字，他们希望以相对及时的方式听到回复。当然，对我们来说，模型也必须及时做出预测，否则预测就没有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh especially for the LM places there are a million people typing into chatgbt.com and they want to hear a response in a relatively prompt manner of course for us also the models have to make their predictions in a prompt manner of ways the predictions aren't useful.</p>
</details>

**Ian:** 所以所有这些都意味着我们思考它的方式已经变得与前沿的**LLM**（Large Language Model: 大语言模型）非常相似，只是我们操作的模态非常不同。我想我们主要操作文本，而我们操作的是这种无文件、可解释但仍然是顺序的**令牌流**（Stream of Tokens: 指一系列离散的数据单元，如单词或事件）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so all these things mean that our sort of way of thinking about it has become very similar to the frontier LLM things it's just a very different modality we're operating on I guess primarily text and we're operating on this fileless interpretable but still a sequential stream of tokens</p>
</details>

**Ian:** 只是我们的令牌是市场事件。所以这很有趣，因为你知道，就仍然发表的研究而言，你可以从中寻找灵感并进行比较，但它也是一个非常独特的问题，这让我每天都保持兴趣，因为它就像它自己独特的东西，但又有所不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">except our tokens are market events. And so it's a lot of fun because you know in terms of like the research that is still published you can kind of look at it for inspiration and draw comparisons but it's also it's very much its own problem which is kind of keeps me interested every day because it's like its own unique thing but it's different.</p>
</details>

**Ian:** 我想回到你关于数据和在许多方面实现金融民主化的观点。也许这是一个奇怪的问题，但我想起了2010年代，我们过去常常把大型投资银行称为“流量怪兽”。他们看到所有这些订单。他们得到所有这些订单。他们看到所有这些流量，这使他们能够优化融资成本和其他费用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I want to go back to the point you made about data and I guess democratizing finance in many ways and maybe this is a weird question but I'm thinking back to the 2010s and we used to talk about the big investment banks as flow monsters. They see all these orders. They get all these orders. They see all the flow and that allows them to optimize on funding costs and other expenses.</p>
</details>

**Ian:** 这种想法是，数据和**AI**（Artificial Intelligence: 人工智能）可以复制这种优势，这样每个人，或者至少**Hudson River Trading**（HRT: 一家高频交易公司），都能成为自己的“流量怪兽”吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">is the idea that data and AI can kind of replicate that advantage so that everyone or not everyone but Hudson at least becomes its own little flow monster.</p>
</details>

**Ian:** 是的，我认为市场中仍然存在一些趋势，让我有点担心，就我们理想的市场结构而言，可能每个人都在一个中心化的交易所进行交易，但事情似乎并非如此发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think there's still some trends and markets that worry me a little bit in terms of I guess our platonic ideal market structure is probably like everyone trades on exchange in a centralized place, but that is not really how things seem to be going.</p>
</details>

**Ian:** 有大量的场外、暗池、准暗池交易量，我认为交易世界中仍然有很多角落，身处其中是一种巨大的优势，这在某种程度上是非常反**AI**（Artificial Intelligence: 人工智能）的玩法。数据是隐藏的。流量数据是隐藏的，它不是你可以输入机器的东西，因为它非常稀疏。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and there's a huge amount of like off exchange dark quasi dark volume and I think there's still a lot of corners of the trading world where like being in the room is kind of like this big advantage and this is a very much anti-AII play in some sense. data is hidden. The data the flow data is hidden and it's not something that you can feed into a machine because there's very sparse amounts of it.</p>
</details>

**Ian:** 所以这是一个有趣的趋势。很多这些数据后来在一个中心化的地点报告，但不够及时，无法有用。所以，为了扩展这一点，**AI**（Artificial Intelligence: 人工智能）依赖数据，这在某种意义上是长远来看的一个问题，你需要身处交易发生的房间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so that's kind of a an interesting trend. A lot of this data gets reported in a centralized place later, but it's not prompt enough to be useful. And so to extend that AI thrives on data, this is in some sense like an issue for the long run, you need to kind of be in the rooms where the sort of trading is happening.</p>
</details>

**Joe:** 很高兴你提到了这一点，因为这正是我从物理基础设施方面感到好奇的地方。比如，如果我在**ChatGPT**（OpenAI公司开发的聊天机器人）上有一个查询，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm glad you brought that up because that's specifically what I'm curious about from the sort of physical infrastructure side. Like if I have a query at a chat GPT,</p>
</details>

**Joe:** 我不在乎模型是在德克萨斯州埃本训练的，或者其他任何地方，它能给我回复就行。但对于**高频交易**（High-Frequency Trading: HFT），至少在执行方面，我知道有些部分你希望是**共置**（Co-located: 将服务器放置在交易所数据中心附近，以减少延迟）的，你希望有最短的线路，无论它有多短，理想情况下你都希望它更短。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't care if the model is like trained in like Ebene, Texas or yeah, wherever it gets back to me, I don't whatever. But I know that for high frequency trading at least on the execution side there are certain parts that you want to be literally coll-located and you want to have the shortest possible wire and however short it is ideally you'd like it to be shorter.</p>
</details>

**Joe:** 你能谈谈你的物理硬件堆栈与大型语言模型前沿实验室所需的硬件堆栈之间的异同吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Can you talk about the differences and similarities between essentially your physical hardware stack versus what would be required at a large language model frontier lab.</p>
</details>

### 物理基础设施与延迟

**Ian:** 是的，就像那样。我认为在整体层面上，实际上有一些非常相似的东西。所以人们通常会把它看作**延迟**（Latency: 数据从发送到接收所需的时间）和**吞吐量**（Throughput: 单位时间内处理的数据量）。延迟是反应时间，而吞吐量则是在一定时间内你能做多少思考。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah like that. I think at a bulk level there's actually some pretty similar things. So there's often think about it as like latency and throughput. Latency being the time to react and then throughput kind of like how much thinking you can do in a certain period of time.</p>
</details>

**Ian:** 所以你是对的，这个领域需要低延迟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you're right that like this space demands like low latency.</p>
</details>

**Ian:** 在2010年代早期，有一本名为《Flash Boys》的书和一种观念，认为这确实是关于**套利延迟**（Arbitrageing Latency: 利用不同市场或平台之间信息传输速度差异进行套利）。我很高兴地报告，在某种程度上，所有延迟都已经被套利了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Early in the 2010s it was a sort of flash boys book and perception where it was like really kind of about arbitrageing latency. I'm happy to report that in some sense all the latency has been arbitrageed for the most part. [laughter]</p>
</details>

**Ian:** 缩短线路已经没有优势了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's no more edge in shortening the wire.</p>
</details>

**Joe:** 可能还有一点点，但相对来说很小。而且，我想如果你看看大型量化交易公司，他们对尽可能缩短线路的需求已经完成或不再相关，这很好，因为我个人觉得那些东西很无聊。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's there's probably like a little bit, but it's it's relatively small. And like I think if you look at the big quant trading firms, the the need to like really make the wires as short as they possibly can is done or no longer relevant, which is great cuz I find that stuff pretty boring. Personally,</p>
</details>

**Joe:** 我更多地将其视为：对于给定的响应速度，你应该成为最聪明的人。所以有一条曲线。如果你需要一秒钟来做出交易决策，那最好是一个非常非常好的决策。那样的话，花一秒钟也无所谓。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think about it more as like for a given kind of like speed of response, you should be the smartest person. So there's like this curve. If you're going to take a second to come up with your trading decision, better be a really really good decision. And then it doesn't kind of matter that it took a second.</p>
</details>

**Joe:** 如果你要花一微秒，嗯，你可能在一微秒内做不了太多事情，但你知道，它最好仍然是一微秒内最好的响应。所以，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you're going to take a microscond, well, a you probably can't do too much in a microcond, but you know, it better still be the best response in a microcond. And so,</p>
</details>

**Ian:** 但你可以稍微差一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but you could be a little worse.</p>
</details>

**Joe:** 你可以稍微差一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You could be a little worse.</p>
</details>

**Ian:** 然后第二秒肯定。所以本质上，对于我们的训练，我们使用云。我们有自己建造的训练数据中心。这基本上是一样的，尽管规模小得多。**谷歌**（Google）等公司的规模。我不知道。它让我对在这类事情上的花费感到震惊。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the second the second for sure. And so essentially for our training, we use the cloud. We have our own training data centers that we've built ourselves. That is basically the same although much much smaller scale. the scale of Googles and things. I don't know. It blows my mind for spending on on on stuff like this.</p>
</details>

**Ian:** 我想，如果我们不与**谷歌**（Google）或**Meta**（Facebook母公司）相比，我们算是大的，但不是数万亿美元。所以训练是相同的。推理。我们需要将设备放置在靠近交易所的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are I think big if you're not comparing us to Google or Meta, but not that's not like bajillions of dollars. So training is is kind of the same inference. You we need to put the devices close to the exchanges</p>
</details>

**Ian:** 我们需要非常认真地考虑功耗和延迟，但我们有硬件团队。我们自己制造**FPGA**（Field-Programmable Gate Array: 现场可编程门阵列）。我们自己制造芯片，我们使用现成的**GPU**（Graphics Processing Unit: 图形处理器）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we need to think very hard about the power usage and the latency, but we have hardware teams. We make our own FPGAAS. We make our own chips and we use off-the-shelf GPUs.</p>
</details>

**Ian:** 我们尝试做的是，我们努力确保对于任何给定的响应速度，我们都能做出最小的决策。所以你可以。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what we try and do is we try and make sure that for any given sort of speed of response, we're making the smallest possible decision we can. So you can kind of</p>
</details>

**Joe:** **现场可编程门阵列**（Field-Programmable Gate Array: FPGA）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">field programmable gate array.</p>
</details>

**Ian:** 哦，对了。抱歉。**FPGA**（Field-Programmable Gate Array: 现场可编程门阵列）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, there you go. Sorry. FPGA.</p>
</details>

**Joe:** **FPGA**（Field-Programmable Gate Array: 现场可编程门阵列）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">FPGA. Yeah.</p>
</details>

**Ian:** 是的。基本上，所有这些不同的设备都有不同的延迟和吞吐量。**GPU**（Graphics Processing Unit: 图形处理器）具有非常高的吞吐量。这就是它们的用处，对吧？但是市场的问题在于它们有点狭窄。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Basically, all these different devices have different latencies and throughputs. GPUs have very high throughput. They are that's what they're useful for, right?</p>
</details>

**Ian:** 所有人在网页浏览器中输入信息，流向这些**LLM**（Large Language Model: 大语言模型）的流量非常巨大。它们会做各种聪明的事情来批量处理请求等等。我们并没有那种奢侈。市场会以它们自己的速度运行。我们不能暂时退出然后追赶。我们必须留在游戏中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, but the problem with markets is they're kind of like narrow. The amount of traffic flowing into these like LLMs from everyone typing into their web browsers is just massive. and they do all sorts of clever things to kind of batch up requests and process and things. We don't really have that luxury really like the markets are going to happen at the speed they happen. We can't kind of like duck out for a while and catch up. We kind of need to stay in the game.</p>
</details>

**Ian:** 所以，我们有所有这些有趣的**设计挑战**（Design Challenges: 在产品或系统设计过程中遇到的难题），围绕着我们如何使用相对高延迟的**GPU**（Graphics Processing Unit: 图形处理器）。它们需要一段时间才能返回结果，但它们可以在一个GPU上处理整个股票市场，与快速响应形成对比。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we have all these sort of interesting design challenges around how do we use GPUs which are relatively high latency. They take a while to get back a result, but they can process the whole stock market on one GPU type of thing versus the fast response.</p>
</details>

**Ian:** 所以，我们有整个团队致力于思考：“好吧，我有一个智能的**数据块**（Intelligent Blob: 指一个包含大量数据和复杂逻辑的非结构化实体）。我如何以不同的方式、不同的速度从中获取答案？”我认为这正是当今世界我们很多智慧所在，而不是“我如何确保我的微波塔在宾夕法尼亚州农村的某个地方对齐得稍微好一点？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, we have whole teams dedicated to thinking about, okay, I've got this like intelligent blob. How do I get answers out of it in different ways at different speeds? And that I think is where a lot of us smarts are going in this world these days rather than the like how do I make sure my microwave towers are like slightly better aligned somewhere in like rural Pennsylvania like which is a cool challenge in its own right but it's done.</p>
</details>

**Ian:** 我想，我想人们已经找到了从新泽西到芝加哥的最直线路程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think I think people have found the straightest line from New Jersey to Chicago.</p>
</details>

### 市场结构与数据隐藏

**Joe:** Joe提到了对**CME**（Chicago Mercantile Exchange: 芝加哥商业交易所）与**Google**（谷歌）云交易协议的一些怀疑。这在谈到一位特定愤世嫉俗者时也提到了，他在我们的一期节目中公开表达了观点。Don Wilson基本上认为，在云上进行撮合不一定有意义，因为你可能会下两个订单，但不确定哪个订单会先成交。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Joe brought up some of the cynicism around CME's cloud deal with Google and this came up speaking of a specific cynic who went on the record in one of our episodes. Don Wilson basically made the argument that matching on a cloud doesn't necessarily make sense because you might put in two orders and you're not really sure which order gets filled first.</p>
</details>

**Joe:** 我想你又回到了那种**黑箱环境**（Blackbox Environment: 指系统内部运作不透明，难以理解其决策过程）中，或者也许这是一个延迟问题。我不知道。你看到了这个问题吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess you're kind of back in that blackbox environment or maybe it's a latency issue. I don't know. Is that a problem that you're seeing?</p>
</details>

**Ian:** 这是我担心的事情。我们的一般理念是市场应该非常透明和尽可能公平。所以，**公平访问**（Equalizing Access: 指所有市场参与者享有同等机会）是一件好事，就参与者不应该能够通过奇怪的伎俩变得更快而言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's something that I I worry about. Our general philosophy is market should be very like transparent and as fair as possible. So like equalizing access is a good thing in terms of participants shouldn't be able to like basically pull weird tricks to be faster.</p>
</details>

**Ian:** 另一方面，我认为你需要可靠性。所以，像订单在不同时间到达并以不同顺序成交这种概念，似乎不是一种非常明智的市场运作方式。这需要大量的工程努力来解决，而且拥有良好的市场设计是件好事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the other hand, I think you want reliability. So like this concept of like orders arriving at different times and being filled in different orders just doesn't seem like a very sensible way to run a market. It's something that requires a lot of effort to engineer around and it's just a good market design to have.</p>
</details>

**Ian:** 然而，这在世界各地的现有交易所中非常普遍。我们在许多国家进行交易，有些交易所拥有如此惊人的硬件，以至于如果两个订单在彼此的**纳秒**（Nanosecond: 十亿分之一秒）内发送，这个交易所永远不会以错误的顺序处理它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is a very widespread though in existing exchanges across the world. We trade in like a vast number of countries and some of the exchanges have such amazing hardware that like if two orders are sent within like a nancond of each other, this exchange will never process them in the wrong order.</p>
</details>

**Ian:** 即使有100个不同的网络端口，它们都连接着，它们也有这种惊人的时间戳功能。另一方面，你可能会遇到一个加密货币交易所，感觉就像一个孩子学会了JavaScript，然后建立了一个网站，你发送一个订单，你可能不会被确认他们是否收到了，然后你必须在5分钟后刷新你的账户余额页面，看看里面是否有钱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even if there's a 100 different network ports and they're all connected, they have this amazing timestamping stuff. On the other hand, you might have like a crypto exchange where it kind of feels like a kid learned JavaScript and and ran set up a website and you're kind of like you send an order and you may or may not be confirmed that they even received it and then you kind of have to refresh your like account balance page like 5 minutes later to see if there's money in it or not.</p>
</details>

**Ian:** 我们会接受并处理它。但我们当然偏好公平访问和可预测的结果。我认为这导致人们投入精力。我认为人们为**YLM**（指延迟管理，可能是笔误，应为Latency Management）而感到非常紧张，这对社会来说不一定是一件好事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we kind of we'll take we'll deal with it as it is. But certainly we have a preference for kind of equalized access but sort of predictable outcomes. And I think that kind of leads to like people spending effort. I think it's not a necessarily a very great thing for society for people to be like stressing very hard about YLM.</p>
</details>

**Joe:** 是的。不，可能吧。我很高兴你报告说我们从那时起有所进步。你的限制在哪里？你知道，当你和**LLM**（Large Language Model: 大语言模型）的人交谈时，会有争论，对吧？是电力吗？那是最大的限制吗？是没有足够的**GPU**（Graphics Processing Unit: 图形处理器）吗？是人才吗？还是其他什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. No, probably. I'm glad I'm glad that you report that we've uh moved on a little bit since then. Where are your constraints? You know, when you talk to LLM people, there's debates about right is it electricity? Is that the big constraint? Is it there just aren't enough GPUs? Is it talent? Is it whatever?</p>
</details>

**Joe:** 当你思考你现在所处的位置与最佳版本之间的差距时，或者说，数据是另一个大问题，因为人们担心**LLM**（Large Language Model: 大语言模型）会耗尽训练数据等等。你现在正在解决的最大限制是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">when you think about where you are now versus the optimal version of where or is it I mean data is the other big one because there's all this concern that LLMs are going to run out of training data etc where is the big constraint for you that you feel like you're solving for right now</p>
</details>

### AI发展的制约因素

**Ian:** 我认为，就长期的战略规划而言，电力显然是一个非常重要的考虑因素，当我们考虑启动新的基于**GPU**（Graphics Processing Unit: 图形处理器）的训练数据中心时。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think in terms of like really the long-term strategic planning electricity is like quite clearly a very binding consideration when we think about spinning up new like GPU based training data centers</p>
</details>

**Ian:** 真的感觉就像是否有电力，就像找一块地来盖楼一样。有很多土地。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it really feels like is there electricity like finding pie piece of land to put a building in. There's a lot of land.</p>
</details>

**Joe:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Ian:** 电力谈判。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The electricity negotiations</p>
</details>

**Joe:** 那是**HRT**（Hudson River Trading: 一家高频交易公司）的一个问题，正在思考。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and that's an issue at HRT that thinking about</p>
</details>

**Ian:** 即使对我们来说，你知道，因为我们混合使用了云提供商和自己建造数据中心，是的，关于电力限制的谈判和思考。我们有一个现有的数据中心在一个非常寒冷的地方，我们想把它扩大，数据中心的人员非常棒，但他们说：“我们需要去和电网谈谈，协商下一批电力等等。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">even for us, you know, because we have a sort of hybrid mix of using cloud providers and building our own data centers and yeah, the negotiations and thinking about power constraints. We have an existing data center in a very cold place and we want to make it bigger and the data center people are fantastic to work with but they're saying like well we need to go talk to like the power grid and negotiate this next trunch and so on and it's just it often feels like that is the bottleneck.</p>
</details>

**Ian:** 就**GPU**（Graphics Processing Unit: 图形处理器）的可用性而言，过去某个时候确实出现过短缺，但我不觉得那是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and on the terms of a GPU availability it definitely was a crunch uh at some point in the past but I don't feel like that is</p>
</details>

**Joe:** 你能多说一点吗？整个股票市场都依赖于，比如说，多说一点你如何看待**GPU**（Graphics Processing Unit: 图形处理器）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">can you say a little bit more the entire stock market is riding on say a little bit more about how you perceive the GPU</p>
</details>

**Ian:** 我想，我想如果我们要求**GPU**（Graphics Processing Unit: 图形处理器），我们会及时收到它们，不一定是在第二天，但我不觉得那是我们启动更多项目的长期障碍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think I think if we ask for GPUs we will get them delivered in a prompt manner not necessarily like next day but I don't feel like that is the thing that we have a long pole and spinning up more</p>
</details>

**Joe:** 短缺最严重的时候是什么时候？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">when was the when was the worst of the crunch</p>
</details>

**Ian:** 我想是2023年，2023年末感觉很糟糕。我想那是**英伟达**（Nvidia: 一家图形处理器和人工智能芯片公司）**Hopper**（英伟达GPU架构）一代。我昨天在**Bloomberg**（彭博社）看到一些数字，我想是昨天的英伟达会议，他们说大约生产了100万个Hopper级别的**GPU**（Graphics Processing Unit: 图形处理器），但已经生产了400万个**Blackwell**（英伟达GPU架构）级别的GPU。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess 2023 late 2023 felt pretty bad I was I guess that was like the Nvidia hopper generation and I saw some number in Bloomberg yesterday that I think it was like Nvidia conference yesterday and they said something like it was like 1 million hopper class GPUs have been made, but already like 4 million Blackwell class GPUs have been made.</p>
</details>

**Ian:** 所以，我认为供应有所增加，但我不认为他们也有未售出的库存。我认为它正在被消耗，但是，是的，就什么是困难的事情而言？我认为是电力，这太疯狂了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I think there's been a ramp up of supply, but I don't think they're also sitting on unsold inventory either. I think it is being consumed, but yeah, in terms of like what is the hard thing? I think electricity and I'm it's insane.</p>
</details>

**Ian:** 作为一个非常千禧一代的人，我想气候变化在大学成长时期是一个大问题。有很多关于气候变化的讨论。看到人们通过基本上购买尽可能多的燃气轮机并将其放置在外面来快速建立数据中心。我想。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I as a very millennial person, I guess climate change was a big thing growing up in college. a lot of discussion about climate change. And to see people spinning up data centers very fast by basically buying as many gas turbines as they can and putting them outside. I'm like,</p>
</details>

**Ian:** 哇。我们这是在做什么？这太疯狂了。但那是及时获得电力的唯一方法。你只需要把燃气轮机放在建筑物外面然后启动它们。这很激进。我不知道人们谈论的未来数据中心扩展的所有数字是如何计算出来的，因为你只是粗略估算一下功耗等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">whoa. Like what are we doing? It's wild. But that's like the only way to get electricity promptly. You just have to throw gas turbines outside the building and turn them on. I It's pretty radical stuff. And I don't know how all the numbers that people are talking about for future data center expansion kind of math out because you just back of the envelope that power usage and things and</p>
</details>

**Ian:** 我知道像**Sam Altman**（OpenAI首席执行官）这样的人已经思考过这个问题，谈论过这个问题。哦，我们需要每单位时间产生这么多新的电力。但这些数字太令人望而生畏了。我只是不知道这一切将如何解决。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I know that the Sam Almans of the world have thought about this talked about this. Oh, we need to be generating this much new power generation per unit time but there there's such daunting numbers. I just don't know how that is all going to work out.</p>
</details>

**Ian:** 但是，是的，即使对我们来说，在宏伟的计划中，就功耗而言，我们是一个小得多的参与者。我们考虑的是几十兆瓦，而不是千兆瓦，这在大多数城镇和城市中更常见，但仍然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But yeah, even for us in the grand scheme of things like a much smaller player in terms of power consumption. We think in terms of like tens of megawatts and not gigawatts which is more in most towns and cities and things but still</p>
</details>

**Ian:** 但我们发现以合理的价格找到电力是一个挑战。等等，关于这一点，你能多谈谈这个领域的竞争优势到底来自哪里吗？因为如果**GPU**（Graphics Processing Unit: 图形处理器）短缺问题有所缓解，如果延迟不再像以前那么严重，那么人们到底从哪里获得优势呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and but we find it like a challenge to find electricity at a reasonable price. Wait, on this note, can you talk to us a little bit more about where competitive advantage actually comes from in this space? Because if the GPU crunch is somewhat solved and if latency isn't as big an issue as it used to be, where are people actually getting their edge from?</p>
</details>

### 竞争优势的来源

**Ian:** 对。我的意思是，人才也是你的另一个限制因素。是的，这是一个竞争非常激烈的人才市场。我们本质上要求人们了解很多事情，既是优秀的研究人员又是优秀的工程师，因为我不知道，在这个**AI**（Artificial Intelligence: 人工智能）时代，这种区别非常模糊。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right. I mean, people talent was one of your other things as a constraint. Yeah, it is it is a very competitive people market. We're essentially asking for people to know a lot of things, be both good researchers and good engineers because I don't know in this AI era of a distinction is pretty blurry.</p>
</details>

**Ian:** 这不是你可以仅仅在白板上画出来，然后编码就只是后续的事情。你拥有的任何研究想法都与你如何实现它密切相关。所以这本身就是一个艰巨的任务。所以人才受到了限制，我们想找到这样的人，因此我们为这些人支付高薪，而且竞争激烈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not something you can just whiteboard and then the coding is a little bit afterwards. Any kind of research idea you have is intimately connected to how you implement it. So that's already like a tough ask. So people are constrained people that we like I want to find and we pay well for those people as a result and it is competitive.</p>
</details>

**Ian:** 但我认为更微妙的优势几乎是把所有东西整合在一起。你有没有一个工程团队，能够收集所有数据，记录下来，并将其提供给**GPU**（Graphics Processing Unit: 图形处理器）训练数据中心？这就像许多，我想，这是**拍字节**（Petabyte: 数据存储单位，1拍字节等于1000万亿字节）规模的数据集，而且只是存储这么多数据，并从存储的地方可靠地流式传输到世界各地的训练数据中心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I think the more subtle edge is almost like putting [snorts] it all together. Do you have people who can like an engineering team that can collect all the data, record it, make it available to the GPU training data center? This is like many I guess it's pabyte scale data set of sets and just storing that much data streaming it from wherever it's stored to wherever in the world the training data center is reliably.</p>
</details>

**Ian:** 这些训练运行非常昂贵。然后一旦你有了那个模型，就要服务它。所以这听起来像是做所有事情。也许这是一个有点平淡的答案，但它确实如此。我认为你需要优化整个堆栈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These training runs are very expensive. And then once you've got that model serving it, so it kind of sounds do everything. And maybe that's kind of like a lame answer, but it really is. It's I think you need to be just optimizing the whole stack.</p>
</details>

**Ian:** 所以我的团队就像**AI**（Artificial Intelligence: 人工智能）团队一样。所以，这在实践中真正意味着，我们专注于训练模型，这是整个堆栈中重要但非充分的一部分，因为如果没有**HRT**（Hudson River Trading: 一家高频交易公司）的团队，我们就会陷入困境，他们负责思考如何实际获取数据并将数据传输到这些系统，然后将决策传输到市场，并在繁忙时保持运转，所有这些事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so like my team is like the AI team. And so and that what that really means in practice is we're focused on training the models which is an important but not sufficient part of a whole stack because we would be kind of dead in the water without the teams at HRT who who think about how to like actually kind of get the data and and things to these systems and then the decisions out to the markets and keep up when things get busy all these things.</p>
</details>

**Ian:** 所以当我想到我们的竞争对手时，我认为规模是有益的。我无法想象你如何在2025年创办一家像**HRT**（Hudson River Trading: 一家高频交易公司）这样的新公司，因为要建立足够的工程规模来实现这种事情，最初的投入是巨大的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when I think about our competitors I think there is a benefit to to scale. I can't imagine how you would start a new company like HRT in the year 2025 because of the huge initial lift to kind of build enough engineering scale to to achieve this sort of thing.</p>
</details>

**Ian:** 所以我认为我们的同行公司也投入了大量工程资源，并将继续这样做。**《金融时报》**（Financial Times: FT）大约一两周前有一篇文章，讲的是像**HRT**（Hudson River Trading: 一家高频交易公司）这样的公司如何更多地扩展到较慢的交易领域，而有些公司，你知道，那些较慢的公司正试图加快速度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I think our sort of peer companies also have invested very heavily in engineering and will continue to do so. And there was an article in the FT like a little like a week or two ago about how firms like HIT are kind of extending themselves more into slower trading and there are firms that are kind of you know those slower firms are trying to kind of go faster and</p>
</details>

**Joe:** 是的，我正想问关于预测方面的问题。好吧，也许你可以以合理的信心预测接下来一小时会发生什么，或者如果你幸运的话，也许是一天。比如，也许一个月就太荒谬了。但你在工作中，这个时间范围是否扩大了？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah I was just going to ask about just like on the prediction standpoint. Okay, maybe you could predict what's with some reasonable confidence what's going to happen in the next hour or sometimes if you're lucky maybe a day. Like maybe a month is just ridiculous. But do you in your work is that horizon has it broadened?</p>
</details>

### 交易时间尺度的拓展

**Ian:** 是的，是的。我想对于那些了解**HRT**（Hudson River Trading: 一家高频交易公司）的人来说，仍然存在一种观念，我认为这是一种2020年之前的观念，认为我们纯粹是**高频交易**（High-Frequency Trading: HFT）公司。但我们会说我们既是高频交易公司，也是**中频交易**（Medium-Frequency Trading: MFT）公司，这是我们业务的很大一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is. Yeah. I think one of the things for people who are aware of HRT even at all I think is still a perception. It's sort of a pre2020 perception of like we are purely high frequency trading firm. But we would say we are both high frequency and medium frequency trading firm and it's like a big part of our business.</p>
</details>

**Ian:** 我想可以这样想：如果我真的对一只股票在五天后的价格有看法。假设我想买那只股票。我会在一段时间内收购那只股票，也许问题是，在五天内什么时候买那只股票最好？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One way to think about it I think is that by if I really have a view on what a stock should be in like five days time. Let's say I want to buy that stock. I'm going to acquire that stock overtime and maybe it's what's the best time to buy that stock over the 5day period.</p>
</details>

**Ian:** 嗯，我有一个模型可以告诉我一小时内的最佳定价。所以也许短期模型应该为长期交易提供信息，并层层递进。当你做这种稍微长期或稍微慢速的交易时。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I have a model that tells me that the best pricing in an hour. So maybe the shorter term model should inform the longer term trade and cascading all the way down when you're doing this sort of slightly longer term or slightly slower frequency trading.</p>
</details>

**Ian:** 基本工作仍然是一样的吗？你仍然在做**流动性提供**（Liquidity Provision: 为市场提供买卖机会，确保交易顺畅）服务业务，只是时间更长，你希望持有这种**仓储**（Warehousing: 指持有大量股票或商品以备未来出售）吗？或者它在某种程度上，因为当我想到基金，当我想到对冲基金时，我当然不会想到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is the fundamental job still the same which is you're in the liquidity provision service business just over longer you want to hold that warehousing or does it some because when I think of a fund when I think of a hedge fund I certainly don't think of</p>
</details>

**Ian:** 也许在某种程度上，他们的一些策略可能是流动性提供，但更多是方向性的。它仍然是那样吗？或者你赚钱的根本原因，你提供的服务，是否会随着时间范围的改变而改变？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">maybe to some extent some of their strategies might be sort of liquidity provision but it's more directional is it still that or is the fundamental reason why you make money the service you provide does it change by definition change over that horizon</p>
</details>

**Ian:** 我认为**做市**（Market Making: 为市场提供买卖报价，赚取买卖价差）服务提供会崩溃。我认为这把类比拉得太远了。我认为你必须把它看作是**流动性获取**（Liquidity Taking: 指主动买卖以获取市场流动性），这在某种程度上听起来更具攻击性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think the market making service provision does break down I think It stretches the analogy too far. I think you have to think of it as like liquidity taking which somehow seems more like aggressive or something</p>
</details>

**Ian:** 但我们正在与挂在订单簿上的订单进行交易。有人说：“我想卖这只股票”，我们说：“我们会从你那里买，因为我们认为从长远来看这样做是值得的。”所以我们确实会**跨越价差**（Cross the Spread: 指以高于买价或低于卖价的价格进行交易，支付交易成本），我们有时确实会支付这种交易成本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but the we're trading against orders resting on the books. Someone was like I want to sell this stock and we're like we will buy it from you because we think that in the long run it'll be worth doing it and so we do cross the spread and we do pay this transaction cost sometimes.</p>
</details>

**Ian:** 你知道，你也可以通过做市但带有倾斜来获取头寸。所以，在更长的时间范围内，我认为做市服务类比确实会崩溃，但在某种意义上，总有一个交易对手，他们出于某种原因想要交易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know you can also kind of acquire position by market making but with a tilt. So really at the longer horizons I think the sort of marketmaking service analogy does break down but in some sense there's always a counterparty and they wanted to trade for a reason.</p>
</details>

**Ian:** 我认为一个**心智模型**（Mental Model: 一个人对世界运作方式的解释），

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I think a mental model that</p>
</details>

**Ian:** 我不知道，你告诉我这听起来是不是太优柔寡断了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't know you tell me if this sounds like too too wishy-washy but</p>
</details>

**Joe:** 我喜欢心智模型。你提到了围棋和国际象棋，对吧？所以这些游戏的特点是它们是**零和游戏**（Zero-Sum Games: 指一方的收益必然是另一方的损失），只有一个赢家。这确实是，没有人会不开心，有人赢了，也许同样不开心，加一减一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I love a mental model. Uh you mentioned go and chess, right? So the thing about those is that they're they're zero sum games is only one winner. It's truly like a no like someone someone's unhappy, someone wins and maybe equally unhappy plus one minus one.</p>
</details>

### 市场交易的本质：正和博弈

**Ian:** 我认为交易之所以有效，是因为它在某种意义上是**正和游戏**（Positive-Sum Game: 指所有参与者的总收益大于零）。你知道，金钱是守恒的，我想一点点费用会交给交易所。所以在某种意义上，交易发生的那一刻，金钱实际上会少一点，但效用，人们的普遍幸福感，我不知道，我的工资进入我的**401k**（401k: 美国的一种退休金计划）提供商，它购买了一些**ETF**（Exchange Traded Fund: 交易所交易基金）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think the reason that trading works is because it is in some sense positive sum you know money is conserved and I guess a little fee goes to the exchange. So in some sense money is at that moment of a trade is actually negative a little but utility people's general happiness I don't know my paycheck goes into my 401k provider and it buys some ETFs.</p>
</details>

**Ian:** 我对这到底是如何发生的相对不敏感，我只是40年内不会再看它了，对吧？嗯，别撒谎，我尽量不看它，尤其是最近，但是，是的，我的效用是一个非常长的时间范围，所以如果有人以1美分的差价卖给我，我真的不在乎。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm relatively like insensitive to how exactly that happens I just I'm not going to look at it for another 40 years right um don't lie my I try not to look at it especially lately but uh yeah like the utility my utility is a very long horizon and so if someone sells it to me like at 1 cent different I don't really care so but like the person who made the scents happy and I'm happy because I got good liquidity, didn't cross a huge spread.</p>
</details>

**Ian:** 所以，这就是为什么我认为这一切都有意义，以及为什么人们会一起交易。但这也是为什么像**AlphaGo**（DeepMind开发的围棋人工智能程序）那样思考市场没有意义，因为它不太适用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that is kind of why I think it it all kind of makes sense and why people are trading together. But it's also why like thinking about markets like an alpha go sense doesn't make sense because it's kind of doesn't really apply.</p>
</details>

**Ian:** 如果你把市场看作**HRT**（Hudson River Trading: 一家高频交易公司）和我们所有的竞争对手都在某种死亡竞赛中，谁最聪明？谁试图互相淘汰？那么市场就会变成这种巨大的僵局，没有人会交易。每个人都会等待。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you thought of markets as HRT and and all our competitors all kind of in some sort of like death match, who's the smartest? Who's trying to pick each other off? Then well markets would be kind of like this giant standoff where no one would be trading. Everyone would be kind of be like waiting.</p>
</details>

**Ian:** 但显然市场非常活跃。我认为这是因为即使我们**跨越价差**（Cross the Spread: 指以高于买价或低于卖价的价格进行交易，支付交易成本），那也是因为我们与出于某种原因想要出售的人跨越价差。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But obviously markets are very vibrant. I think it's because even when we're crossing the spread, it's because we're crossing the spread against someone who wanted to sell for whatever reason.</p>
</details>

**Ian:** 如果我们是对的，我想在5天后他们可能会不那么高兴。但也许他们实际上并没有。也许他们只是在对冲头寸。他们不在乎股票5天后的价格。他们只是想对冲他们的头寸，我们和他们交易了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we were right, I guess in 5 days time they might be like less happy. But maybe they weren't actually. Maybe they were just like hedging a position. They don't care what the stock's price was in 5 days. They just wanted to like hedge their position and we traded with them.</p>
</details>

**Ian:** 所以这就是我在脑海中调和的方式。它仍然可以是一种服务提供。我们赚钱只是因为其他人想交易。如果没人交易，我们就不会存在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's the way I tell reconcilers in my head. It could still be like a sort of service provision. We make money only because someone else wants to trade. If no one was trading, we wouldn't exist,</p>
</details>

**Joe:** 对吧？不同的市场参与者有不同的动机、目标和目的。我想回到人才问题一秒钟。我感觉工程师喜欢**开源**（Open Source: 软件源代码可公开获取、使用、修改和分发），他们喜欢为**AI**（Artificial Intelligence: 人工智能）的研究生态系统做出贡献。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right? And different market participants with different motivations and goals and aims. I want to go back to the talent question for a second. And I get the sense that engineers like open source and they like contributing to the research ecosystem on AI.</p>
</details>

**Joe:** 然后我感觉交易公司可能不喜欢开源，他们更倾向于保护他们的专有模型或数据或其他什么。像**HRT**（Hudson River Trading: 一家高频交易公司）这样的公司如何平衡这种紧张关系？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I get the sense that trading firms probably do not like open source and they're much more into protecting their proprietary models or data or whatever. How does a company like HRT how do you actually balance that tension?</p>
</details>

### 人才与开放科学的冲突

**Ian:** 是的，我的意思是，这也是一个非常诚实的回答，多年前，这对我们来说是一个相对的竞争劣势，不利于招聘。我们经常会和一些即将毕业的博士生进行对话，他们会说：“嗯，我可以去**谷歌**（Google），我仍然可以发表我的研究，这给了我选择权。人们会知道我是谁。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I mean this is also like a sort of really honest answer and that many years ago this was a relative comparative disadvantage for us for recruiting. Some we would often have conversations with maybe especially PhDs who are graduating and they would say like well I can go to Google and I can still publish my research and that kind of gives me optionality. People will know who I am.</p>
</details>

**Ian:** 如果我进入像**HRT**（Hudson River Trading: 一家高频交易公司）这样的公司，我基本上就进入了这个面纱之后，我永远不会出现，人们只能相信我多年来做了聪明的事情，我基本上没有强有力的反驳，除了写论文有点被高估了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I go into an HRT or HR like firm, I essentially go behind this veil and I never emerge and people just have to kind of take it on faith I did smart things for many years and I would have basically no strong counter argument apart from the fact that actually writing papers is kind of overrated.</p>
</details>

**Ian:** 我经历过，做过。当你变老时，你不会在乎。然而现在，出现了一个有趣的情况，这个“黄金时代”可能已经结束了，即在大科技公司工作，并因发表研究而获得报酬。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've been there, done that. As when you get older, you will not care. Now though, there's this interesting situation where this golden era maybe of like being able to be work at a big tech company, be paid for publishing research is very much over.</p>
</details>

**Ian:** 大型**AI**（Artificial Intelligence: 人工智能）实验室发表的论文基本上要么非常过时，要么不重要，如果你正在做最重要、最前沿的事情，你就不能分享你正在做的事情，而且非常保密。所以在某种意义上，这个问题对我来说有点自行解决了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the papers that do come out of the big AI labs are essentially kind of either very stale or not important and if you're working on the most important cutting edge things you can't share what you're doing and it's very secretive so in some sense the problem solved itself a little bit for me.</p>
</details>

**Ian:** 人们现在认识到**知识产权**（Intellectual Property: IP）应该受到保护。我甚至看到一些**AI**（Artificial Intelligence: 人工智能）实验室的人公开思考**竞业禁止协议**（Non-competes: 限制员工在离职后从事竞争性工作的协议），在公开场合思考、在推特上讨论竞业禁止协议等等，这真是一个惊人的转变，因为我觉得。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and people now recognize that IP should be protected I've even seen some of the sort of AI lab people think out loud about non-competes in public thinking tweeting about non-competes and things which is like an amazing turn of events because I feel like</p>
</details>

**Joe:** 那是非常矛盾的，对吧？我的意思是，它们在加利福尼亚州实际上是被禁止的。我想人们对此感到自豪，并且还会以此来反对纽约的交易界，说：“哦，看看这些人，他们的竞业禁止协议。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that was very anothetical Right. I mean, they're like literally effectively banned in the state of California. And I think people were almost like proud of this fact and would also kind of hold it against the New York sort of trading world being like, "Oh, look at these people with their non-confers."</p>
</details>

**Joe:** 很多钱都花在了人才上，但它在某种意义上也是在为**知识产权**（Intellectual Property: IP）买单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And a lot of that money is being paid for talent, but it's also in some sense paying for intellectual property.</p>
</details>

**Ian:** 是的。而且这些人知道“汤”是怎么做的，他们没有把它写下来，也没有进行任何明确的**知识产权盗窃**（IP Theft: 盗窃知识产权）。但如果你雇佣了五个一直在做“汤”的人，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And like those people know how the soup is made and they are not writing it down and not committing any like explicit sort of IP theft. But if you hire five people who've been making the soup,</p>
</details>

**Joe:** 他们处理知识。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">they process knowledge.</p>
</details>

**Ian:** 他们知道很多**流程知识**（Process Knowledge: 关于如何执行任务或操作的知识）。你可能会突然对保护它有不同的看法。我们花了很多时间培训员工。他们需要很长时间才能变得有生产力。在某种意义上，如果人们可以轻易地获取这些知识并立即离开，那将是一种耻辱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They know they know a lot of process knowledge. And you might suddenly feel a little differently about protecting that we spend a lot of time training our employees. Takes a long time for them to be productive. In some sense, it would be a shame if people could just take that knowledge and immediately leave.</p>
</details>

**Ian:** 所以，是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, yeah,</p>
</details>

### AI应用的风险控制与监管

**Joe:** 回到压路机，我保证过。当我听到**AI**（Artificial Intelligence: 人工智能）在交易中，或者我知道人们现在对**基于代理的AI**（Agent-Based AI: 模拟智能体行为以理解复杂系统的人工智能）非常兴奋时。我的一部分会回想起金融史上最有趣的一个事件，Joe，我相信你还记得**Knight Capital**（骑士资本集团）的一个**算法**（Algo: 算法交易）失控的时候。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">just going back to the steamroller, I promised I promised we would when I hear AI in trading or I know people are very excited about agentbased AI nowadays. Part of me thinks back to one of the more amusing events in financial history, which is Joe, I'm sure you remember the time that one of Knight Capitals ALOS went.</p>
</details>

**Ian:** 很多人根本不会觉得那是一个有趣的事件。那是最糟糕的噩梦。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Many people would not find that to be an amusing event at all. the worst nightmare possible by using from</p>
</details>

**Joe:** 对他们来说。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">for them</p>
</details>

**Ian:** 从花生画廊。是的。对。**Shod and Freud**（指幸灾乐祸）。所以这个算法失控了，买了大约70亿美元，整个公司都。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the peanut gallery. Yes. Right. Shod and Freud. So this Algo went rogue and bought like 7 billion to the whole company.</p>
</details>

**Joe:** 是的。没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Exactly.</p>
</details>

**Joe:** 你们采取了哪些防护措施来避免**Knight Capital**（骑士资本集团）的命运？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What are the guardrails that you put in place to avoid the destiny of night capital.</p>
</details>

**Ian:** 所以每个训练周期我们都会谈论那个带有K的噩梦，我们有多个前**Knight Capital**（骑士资本集团）员工在**HRT**（Hudson River Trading: 一家高频交易公司），正如你所料，这只是一个以不愉快方式结束的成功交易公司的传承，我们有很多人曾在Knight Capital工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So every training cycle we have a talk about the nightmare with a K and we have multiple ex the night employees at HRT as you might expect just from a lineage of a successful trading firm that ended in a kind of an unhappy way and we have many people who are at night.</p>
</details>

**Joe:** 这个故事太疯狂了。一家成功的训练公司在15分钟内就结束了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The story is crazy. A successful training firm that ended in about 15 minutes.</p>
</details>

**Ian:** 是的。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah.</p>
</details>

**Ian:** 所以，可以肯定地说，那些事情困扰着我们，我们努力从中吸取尽可能多的教训。防御和分层。所以，我想我喜欢特别强调**AI**（Artificial Intelligence: 人工智能）方面的一点是，它不是像有些**神经网络**（Neural Network: 模拟人脑结构和功能的计算模型）直接向**纽约证券交易所**（New York Stock Exchange: NYSE）发送订单那样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it's fair to say that that stuff haunts us and we try and take as many lessons away from that as possible. Defense and layers. So, I think one of the things that I like to emphasize with the AI stuff in particular is that it is not like there's some neural network directly sending orders to NY.</p>
</details>

**Ian:** 它在某种意义上提供了一个计划，然后传统的、经过人类严格审计和风险检查的层级采取行动，这必须是它的运作方式。所以对我们来说，在日常运营中，它只是全天候的许多许多层**健全性检查**（Sanity Checking: 验证系统或数据是否处于预期状态）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is in some sense providing a plan and then traditional human heavily audited risk checked layers take the actions and that's just kind of how it has to be. And so for us, we are kind of on a on an operational day-to-day basis, it's just many many layers of sanity checking throughout the day.</p>
</details>

**Ian:** 然后在较高层面，这是一个非常谨慎的过程，包括专门避免**KCG**（Knight Capital Group: 骑士资本集团）类型场景的过程，比如你如何发布新版本，以及你运行哪些发布前检查和审计，甚至在白天我们也有一些，我不知道，我想你可以称之为神经网络的健全性检查，以确保它们正在产生我们期望它们产生的值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then at a sort of high level, it's very careful process, including processes to specifically avoid the the KCG type scenario of how are you even releasing new versions and what pre-release checks do you run and audits and we even during the day we have some I don't know I guess you call them like sanity checks of the neural networks to make sure that they are producing the values that we expected they would be producing and and</p>
</details>

**Ian:** 这些检查过程有点滞后，因为它们无法跟上流量，但它们足以再次确保模型的数值稳定性是健全的。这不是关于亏钱或赚钱，这些不是像金融意义上的风险，而是**操作风险**（Operational Risk: 因内部流程、人员、系统或外部事件失败而造成的损失）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">those sort of checking processes are kind of a little bit behind because they can't keep up with the like flow but they were enough to kind of Just again like every of a numeric stability of the model sane and things it's not it's not about losing money or making money in these are not like oh like risk in the kind of financial sense it's like operational risk.</p>
</details>

**Ian:** 但**偏执**（Paranoia: 指对潜在危险或威胁的过度担忧）很深，这可能仍然与这个市场与**AI**（Artificial Intelligence: 人工智能）世界的其他部分非常不同，我想其他部分是“什么都行”，而且失败率都已经被计入了价格。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but paranoia is deep and that's probably something that's still very different I think from this market from the sort of other AI world which I guess anything goes and like failure rates are kind of just priced in.</p>
</details>

**Joe:** 是的。但是，是的，你可以想象一切都被毁了。我想我们担心亏钱，但我想我们更担心采取监管机构不希望我们采取的行动，因为如果你失去了监管机构的信任，你就会失去很长时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. But yeah, you could you could imagine just ruining everything. And I I guess we worry about losing money, but I think we worry more about taking action that a regulator would not want us to do because if you lose that trust of regulators, you lose it for a very long time.</p>
</details>

**Joe:** 我们在很多市场进行交易，我们非常关注并非常尊重所有这些市场的监管机构及其决策。而且规则有时非常复杂。天哪，我们像老鹰一样盯着这些东西，因为你不想因为操作失误而被踢出某个国家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we trade in a lot of markets and we pay very close attention and have deep respect for the regulators and their decisions in all those markets. And this the rules are sometimes very complex. And man, do we watch that stuff like a hawk because you don't want to be kicked out of a country</p>
</details>

**Joe:** 因为操作失误。这是一个对犯错容忍度非常低的监管文化。所以我们非常强调这一点，我认为我们应该这样做，因为你知道，通过留在游戏中十年所获得的利润，与“快速行动，打破常规”相比。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">for making an operational error. And this is a very low tolerance culture from regulators in terms of making mistakes. So we stress it a lot and I think we should because it's it's you know like the profit you make in 10 years by still being in the game versus move fast and break things.</p>
</details>

**Joe:** 这不是“快速行动，打破常规”，但你仍然想快速行动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not move fast and break things, but you still want to move fast.</p>
</details>

### 新闻事件后的市场反应与AI的局限

**Tracy:** 我还有一百万个问题。但我为了时间起见，只问最后一个，我甚至不知道你是否处于一个很好的位置来回答，但这是我实际上想在某个时候做一整集节目的内容。但是，用你的话来说，**就业报告**（Jobs Report: 政府发布的关于就业市场状况的统计数据）发布后的第二秒会发生什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have like a million more questions. I ju but for the sake of time I'll just ask one more and I don't know even know whether it's something you're in position great position to answer about it's something I actually want to do an entire episode about at some point but as you would characterize it what happens in the second after a jobs report is released?</p>
</details>

**Tracy:** 我特别指的是数字在屏幕上闪烁，或者一段文字出现在网站上，市场随之大幅波动。然后人们突然，除非就业报告很好，如果你真的看了工资数据，然后是股票，但在那一瞬间，在发布后的第一微秒，市场就已经在波动了，肯定是在任何人类有机会阅读或形成观点之前。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the what I'm talking about specifically is numbers either flash on a screen or a piece of a text appears on a website and markets move around a lot all that and there's people then suddenly unless actually the jobs report was good and if you actually look at the wage number and then the stocks but in that instant in that first microcond after the release markets are already moving certainly before any human has had a chance to read the thing or form of use so what I assume is that there's training on here is the text and here are the things and whatever but to as you would put it or from the perspective of HRT what happens in the millisecond after an event.</p>
</details>

**Tracy:** 所以我假设这里有关于文本和事物等的训练，但用你的话来说，或者从**HRT**（Hudson River Trading: 一家高频交易公司）的角度来看，事件发生后的毫秒内会发生什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so what I assume is that there's training on here is the text and here are the things and whatever but to as you would put it or from the perspective of HRT what happens in the millisecond after an event.</p>
</details>

**Ian:** 是的。所以。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So</p>
</details>

**Tracy:** 可能是**财报**（Earnings Report: 公司定期发布的财务业绩报告）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">could be an earnings report.</p>
</details>

**Ian:** 是的。我的意思是，我们有一个**Bloomberg**（彭博社）头条新闻源，它的延迟非常低，如果它是一篇重要文章，新闻源中会有一个星号，诸如此类，对吧？你可以做任何事情，从手工制作的逻辑来寻找关键词，到通过**AI**（Artificial Intelligence: 人工智能）模型进行处理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I mean, so we have like a Bloomberg headlines feed that is like pretty low latency and if it's like a important article has like a star in the feed, things like this, right? You can do everything from having kind of a handcrafted logic to look for keywords through to putting it through like an AI model.</p>
</details>

**Ian:** 我仍然无法理解的一件事是，我想，在不提及具体公司名称的情况下，有一些期权交易公司拥有数千名员工，他们本质上是**半机械人**（Cyborg: 结合生物和机械部分的生物体）交易期权。他们可能有10个人交易像**英伟达**（Nvidia: 一家图形处理器和人工智能芯片公司）这样一只大股票的期权。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the things that I like still can't kind of wrap my head around is I guess without saying specific company names, there are options trading firms that have thousands of people that are essentially cyborg trading options. They have maybe 10 people trading like the options for a single big stock like Nvidia say</p>
</details>

**Ian:** 他们是人类，盯着这些东西的订阅源，点击按钮，他们有用户界面，让他们可以非常快速地点击绿色按钮或红色按钮。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and they are humans staring at the feeds for these things and clicking buttons and they have user interfaces that are set up for them to hit the green button or the red button essentially very fast</p>
</details>

**Tracy:** 那份工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that job.</p>
</details>

**Ian:** 这很奇怪。我们实际上曾经在一次**黑客马拉松**（Hackathon: 程序员在短时间内集中开发项目的活动）中让一只猴子操作电脑。我们拿了一个PlayStation控制器，让人们有机会尝试练习非常快速地对事件做出反应。这真的很难，但这是一项可以学习的技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's weird. We actually once a monkey on a computer for a hackathon. We we got a PlayStation controller and kind of gave people a chance to try and practice reacting to events very fast. It's really tough but it's a learnable skill.</p>
</details>

**Ian:** 我认为在**有效市场**（Efficient Market: 市场价格充分反映所有可用信息的市场）的意义上，这应该是**AI化**（AIable: 可以通过人工智能实现）的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I think in an efficient market sense this should be AIable.</p>
</details>

**Joe:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah,</p>
</details>

**Ian:** 不过这很有挑战性，因为如果你想象把它接入**ChatGPT**（OpenAI公司开发的聊天机器人），它会太慢。延迟可能会足够高。我的意思是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it is challenging though because if you imagine kind of plumbing it into chat GBT, it would be too slow. Like the latency would probably be sufficiently high. I mean</p>
</details>

**Ian:** 它没那么快，对吧？对于任何正常的日常事务来说都很快，但对于市场来说，它有点慢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it it's not that fast, right? It's fast for any normal day-to-day thing, but for markets it's kind of slow.</p>
</details>

**Ian:** 此外，这是一个非常有趣的研究挑战，那就是你不能真正使用**ChatGPT**（OpenAI公司开发的聊天机器人）来回测任何东西。它知道**Jerome Powell**（美联储主席）的每一次演讲，也知道之后发生了什么，因为它是在整个互联网上训练的。那么你如何真正确信下一次**美联储**（Federal Reserve: 美国中央银行）演讲它会做正确的事情呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Also, and this is like a very interesting research challenge is like you can't literally use chat GBC to back test anything. It knows every Jerome Pal speech and knows what happened afterwards because it's trained on the whole internet. So how do you really get confidence that for the next Federal Reserve speech it's going to do the right thing?</p>
</details>

**Ian:** 传统上，在金融领域，你会回测事物，看看它过去表现如何。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Traditionally in finance you back test things to see how it done in the past.</p>
</details>

**Ian:** 但在这种情况下，它都是**样本内**（In Sample: 指用于训练模型的数据，模型已经见过这些数据），它以前都见过。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if in this case it's all kind of in sample like it's seen it all before</p>
</details>

**Ian:** 我见过学术金融论文，他们试图解决这个问题，他们说它仍然有效，他们试图解释这一点，但我知道这些东西真的那么聪明吗？是的，整个论点是它记住了所有它被训练过的内容。那么它为什么会可靠呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I've seen academic finance papers where they try and like grapple with this and they say it still works and they try and account for this but I know just this stuff is really that smart. Yeah, that whole kind of thesis is that it's memorized everything it's been trained on. So why would it be reliable?</p>
</details>

**Ian:** 所以每当你看到有人说：“哦，我把每一次**美联储**（Federal Reserve: 美国中央银行）演讲都通过**ChatGPT**（OpenAI公司开发的聊天机器人）运行了一遍，它十次对了九次。”这就像。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so whenever you see someone's being like, "Oh, I ran every Federal Reserve speech through J GBT and it got it right like nine out of 10 times." It's like</p>
</details>

**Ian:** 只有十次对了九次？为什么不是100%？所以我确实发现，我确实认为有趣的是，仍然有多少人类参与到相对高速的交易中。仍然有很多人在利基产品中做这件事，这大概是因为整合所有信息非常困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">only nine out of 10 times. Like why not 100%. So I do find that I do think it is interesting there how many humans are still involved on relatively high-speed trading. There are a lot of people still doing this in in sort of niche products and it's presumably because it's very hard to integrate all the information</p>
</details>

**Ian:** 这个**AGI**（Artificial General Intelligence: 通用人工智能）20，我不知道2028年，2030年，我不知道仍然有很多**人类交易股票**（Humans Trading Stocks: 指由人类而非算法进行股票交易）和期权，所以，我不知道如何调和这一点，但我读到的时候会想到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">this AGI 20 I don't know 2028 2030 I don't know there's still a lot of humans trading stocks and options and so like I don't know how to reconcile that but I think about that when I read</p>
</details>

**Joe:** Ian Dunning，那真是太棒了。真的还有几个小时的对话。我们下周会请你回来吗？期待下周的节目，但这次真的很棒，我非常感谢。是的，很高兴。谢谢你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ian Dunning that was uh fantastic there really are like hours more of conversations are we going to have you back next week looking forward to next week's episode but no that was uh great for me really appreciate Yeah, a pleasure. Thank you.</p>
</details>

### 总结与展望

**Tracy:** Tracy，我觉得那真的很棒。我喜欢这种**反愤世嫉俗**（Anti-Cynicism: 指反对或驳斥愤世嫉俗的观点）的想法，因为你确实听到很多人说：“哦，不，**AI**（Artificial Intelligence: 人工智能）可以解决国际象棋之类的问题，但股市从根本上是不同的。”我从来没有完全满意于一些理论的解释。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tracy, I thought that was uh really great. I like this idea, the sort of anti-ynicism because you do hear a lot of people say, "Oh, no, like AI could solve things like chess or whatever, but the stock market is fundamentally different." And I've never been totally satisfied with some of the theories for why.</p>
</details>

**Tracy:** 而且，我明白股票不一定能以完全相同的方式解决问题，但人类通过匹配模式在市场上赚钱。为什么聪明的硅脑不能做同样的事情呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And like I get stocks are not like necessarily like a solvable problem in quite the same way, but humans make money on the market by matching patterns. Why can't smart silicon brains do the same thing?</p>
</details>

**Joe:** 嗯，现在也有历史了。我们有多年**高频交易**（High-Frequency Trading: HFT）和算法驱动交易的经验，人们赚了很多钱。所以，它似乎正在奏效。对我来说，恍然大悟的时刻是Ian谈到时间框架以及时间框架的重要性。我认为这在很多方面确实是关键。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, there's also history now. We have many years of HFT trading and algorithmically driven trading where people have made a lot of money. So, it seems to be working. The light bulb moment for me was where Ian talked about the time frame and the importance of the time frame. And I think that's really the key in many ways.</p>
</details>

**Joe:** 它是将你用**AI**（Artificial Intelligence: 人工智能）所做的事情与可用数据相适应。市场上的数据，大部分都是非常短期的，更多是秒而不是分钟，更多是分钟而不是天，等等等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's adapting what you're doing with AI to the data that's available. And the data on markets, most of it is going to be very short term and more seconds than minutes, more minutes than days, etc., etc.</p>
</details>

**Joe:** 很多数据也偏向即时性，而不是他所说的过去分析。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And a lot of the data is also biased to immediacy versus past analysis which he spoke about as well.</p>
</details>

**Tracy:** 在金融界总是很有趣，人们会说：“哦，19次中有17次出现了**标普500**（S&P 500: 美国500家大型上市公司股票指数）的**死亡交叉**（Death Cross: 技术分析中短期移动平均线跌破长期移动平均线，被视为看跌信号），股票下跌了。”任何严肃的数据科学家都会对这个样本嗤之以鼻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is always funny in finance people like oh 17 out of 19 times there's been this death cross of the S&P 500 stocks went down. It's like any serious data scientist would spit at that sample.</p>
</details>

**Tracy:** 这简直是开玩笑，谈论19个样本量是“一直如此”。标题中的“死亡交叉”太诱人了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">[laughter] It's like beyond a joke level to talk about a sample size of 19 as being all the time. death cross in a headline is so tempting.</p>
</details>

**Joe:** 没错。你不能，给记者的建议是永远不要错过使用“死亡交叉”的机会。我很高兴听到，我觉得有几件事很有趣。一是，我很高兴听到**线路长度问题**（Wirelength Problem: 指在高速交易中，物理距离导致的延迟问题）不再是个问题了。这不再仅仅是争夺更接近极端的速度竞赛。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's true. You all you cannot advice to journalists never pass up a chance to put a death cross. I was glad to hear I thought a few things were interesting. One is I was glad to hear that the wirelength problem is no longer a thing. It's not just this race to get closer to the extreme.</p>
</details>

**Tracy:** 当人们谈论冷战和**高频交易**（High-Frequency Trading: HFT）以及所有这些时，那有点无聊。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That was kind of boring when people were talking about the cold war and HFT and all of that.</p>
</details>

**Joe:** 有趣的是，**GPU**（Graphics Processing Unit: 图形处理器）市场有所缓解，与几年前相比。有趣的是，即使在像交易公司这样的规模下，电力仍然是一个主要的限制因素，这确实引发了关于，鉴于许多人对聊天机器人的**AI**（Artificial Intelligence: 人工智能）计划寄予厚望，我们是否会撞墙的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's interesting that the GPU market is eased versus where it may have been a couple years ago. And it's interesting that even at a scale like a trading shop that electricity is proving to be a main constraint which does raise questions about are we just going to hit up against a wall given some of the AI plans that so many people are banking on for the chat bots.</p>
</details>

**Tracy:** 是的，我还认为，实验室的一些文化转变真的很有趣。这种想法是，它们变得更加专有，也许更加。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I thought also I guess the cultural shift in some of the labs was really interesting. this idea that they've become more proprietary and perhaps more uh</p>
</details>

**Joe:** 在某些方面更加神秘，而不是交易公司变得更加开放。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">mysterious in some ways rather than the trading firms becoming more open.</p>
</details>

**Tracy:** 是的，很多很棒的对话。回答了一些问题。还有很多，很多问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, lots of great conversation. Answer some questions. Plenty more plenty more to go.</p>
</details>

**Joe:** 那很有帮助。而且，我相信我们会再和他谈谈。也许不是下周，但很快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That was helpful. And uh I'm sure we'll talk to him again. Maybe not next week, but soonish.</p>
</details>

**Tracy:** 也许明年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe next year.</p>
</details>

**Joe:** 好的。我们就到这里吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. Shall we leave it there?</p>
</details>

**Tracy:** 就到这里吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's leave it there.</p>
</details>

**Tracy:** 这是Odd Thoughts播客的又一集。我是Tracy Alloway。你可以在Tracy关注我。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This has been another episode of the Odd Thoughts podcast. I'm Tracy Aloway. You can follow me at Tracy. [music]</p>
</details>

**Joe:** 我是Joe Weisenthal。你可以在the stalwart关注我。关注我们的嘉宾Ian Dunning。他是Ian Dunning。关注我们的制作人Carmen Rodriguez在Carmen Arman。Dash O Bennett在Dashbot和Kell Brooks在Kellbrooks。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm Joe Weisenthal. can follow me at the stalwart. Follow our guest Ian Dunning. He's Ian Dunning. Follow our producers Carmen Rodriguez at Carmen Arman. Dash-o Bennett at Dashbot and Kell Brooks at Kellbrooks. [music]</p>
</details>

**Joe:** 更多OddLots内容，请访问bloomberg.com/odlots，获取每日新闻通讯和我们所有的节目。你可以在我们的Discord频道discord.gg/odlots中24/7讨论所有这些话题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For more OddLots content, go to bloomberg.com/odlots for the daily newsletter and all of our [music] episodes. And you can chat about all of these topics 24/7 in our Discord, discord.gg/odlots.</p>
</details>

**Joe:** 如果你喜欢OddLots，如果你喜欢我们深入探讨公司如何实际使用**AI**（Artificial Intelligence: 人工智能），那么请在你最喜欢的播客平台上给我们留下好评。请记住，如果你是**Bloomberg**（彭博社）订阅者，你可以完全免费收听我们所有的节目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">[music] And if you enjoy OddLotss, if you like it when we dive into how companies are actually using AI, then please leave us a positive review on your favorite podcast platform. And remember, if you are a [music] Bloomberg subscriber, you can listen to all of our episodes absolutely adree.</p>
</details>

**Joe:** 你只需要在**Apple Podcast**（苹果播客）上找到Bloomberg频道并按照说明操作即可。感谢收听。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All you need to do is find the Bloomberg channel on Apple [music] Podcast and follow the instructions there. Thanks for listening.</p>
</details>