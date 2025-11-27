---
author: Bloomberg Podcasts
date: '2025-09-29'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=HesU-7YJr1Q
speaker: Bloomberg Podcasts
tags:
  - gpu-market
  - ai-commodities
  - tokenized-assets
  - prediction-markets
  - financial-innovation
title: 芝加哥交易之王唐·威尔逊：GPU市场将超越石油，代币化与预测市场的未来
summary: TRW 创始人兼首席执行官唐·威尔逊在一次访谈中分享了他对未来交易的深刻见解。他预测，十年内全球在 GPU 上的年支出将超过原油，使 GPU 成为全球最大的商品，并详细阐述了如何通过 Compute Exchange 和 Silicon Data 建立一个流动性强的 GPU 期货市场，从而降低资本成本。此外，威尔逊还深入探讨了代币化交易（特别是 Canton 区块链）如何提升传统金融市场的韧性，以及预测市场在文化和监管层面的演变。他还对云端撮合引擎的确定性问题、超大规模云服务商的阻力以及散户交易的兴起等议题发表了看法。
insight: ''
draft: true
series: ''
category: finance
area: market-analysis
project:
  - ai-impact-analysis
  - investment-strategy
  - us-analysis
people:
  - Don Wilson
  - Tracy Alloway
  - Joe Weisenthal
  - Shane Copeland
companies_orgs:
  - TRW
  - Bloomberg Podcasts
  - Compute Exchange
  - Silicon Data
  - Cumberland Crypto
  - Google Cloud
  - CME
  - Nvidia
  - CFTC
  - Robinhood
products_models:
  - Eurodollar option
  - IBC
  - H100
  - A100
  - ChatGPT
  - Bitcoin
  - Canton Blockchain
  - Ethereum
  - Solana
  - Augur
media_books:
  - Odd Lots
  - Cumberland Mines
status: evergreen
---
### 欢迎与 GPU 市场愿景

Odd Lots 的各位观众，你们即将观看的是在芝加哥现场录制的一段对话，嘉宾是 TRW 创始人兼首席执行官唐·威尔逊（Don Wilson），他有时被称为交易界最聪明的人。
我们非常愉快地主持了这场节目，也希望你们喜欢。
唐，非常感谢你来到这里。我们真的很感激。
很高兴来到这里。你真是最完美的嘉宾。
关于交易的未来，你真是最完美的嘉宾。但首先，为什么是 GPU？
显然，人工智能正变得越来越有用。
随着它变得越来越有用，人们会更多地使用它，这意味着他们需要使用更多的 GPU 来运行推理或训练新模型。
我实际上有一个理论，那就是在未来十年内，全球每年在 GPU 上的支出将超过原油。
那当然会使 GPU 计算成为世界上最大的商品。
所以，看起来你确实需要一个市场，哪怕只是一个非常适度的、世界上最大的市场。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hey there, all thoughts viewers, you are about to watch a conversation recorded live in Chicago with TRW founder and CEO Don Wilson, sometimes called the smartest man in trading. We had an absolute blast hosting that show and we hope you enjoy it too. Don, well, thank you for being here. Really appreciate it. Great to be here. Truly the perfect guest. Truly the perfect guest about what's next in trading. But just to begin with, why GPUs? Well, obviously AI is becoming more and more useful. And, as it becomes more useful, people, use more of it, which means they need to use more GPUs to, to run inference or train new models. And I actually have this theory that within the next ten years, the world will spend more per year on on GPUs than it does on crude oil. And that would, of course, make GPUs compute the largest commodity in the world. So it seems like you would kind of need a market for a very modest call, just the largest market in the world.</p>
</details>

**Joe Weisenthal:** 很有趣，因为你知道，石油通常来自沙质沙漠，但现在他们正通过芯片将沙子字面上转化为商品本身，或者说，为沙子注入生命。
**Don Wilson:** 回到最初，我对此有很多问题。关于这个。对于那些不了解的人，你能不能给我们一个大约 30 到 45 秒的描述，介绍一下你或 TRW 的业务？
**Don Wilson:** 是的，我最初是在芝加哥的欧洲美元期权交易池中站着，大喊大叫地交易，然后回家用我的 Macintosh 电脑编写代码。
我建立了模型，本质上，你知道，我现在不再站在交易池中大喊大叫了，而且大多数交易池都消失了，但我们现在用电脑做着同样的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Joe Weisenthal: Yeah. It's funny because, you know, I certainly an oil often coming out of, you know, sandy desert, but now they're literally turning the sand via, chips into the commodity itself, or, like, breathing life into the sand. Just to back up, I have a million questions about that. About this. For those who don't know, why don't you give us the sort of, you know, the 32nd or the 45 second description of, what you do or what AWS. Yeah. So, I started off standing in the trading pit in Chicago and the Eurodollar option pit, yelling and screaming and, and, then I would go home and write code on my Macintosh computer, and I built models and essentially, you know, I don't stand in the pit and yell and scream anymore, and most of the pits are gone, but but we kind of do the same thing now with computers.</p>
</details>

### 衍生品交易中的创新：凸性偏差与线性偏度

**Tracy Alloway:** 我听说一个故事，你曾经和家人度假，在意大利佛罗伦萨。
你没有吃冰淇淋之类的，而是决定为衍生品交易发明一个新的希腊字母。这很酷。
**Don Wilson:** 是的，所以，这里，我的意思是，你把两个故事搞混了。
**Tracy Alloway:** 哦，好的。
**Don Wilson:** 实际上发生的是，有一个新的交易所推出了一份利率互换期货合约，叫做 IBC。
我研究了这份合约，发现他们实际上没有正确设计合约。
所以，尽管他们告诉所有人这份合约在经济上等同于常规利率互换，但它不是，因为它包含了一个额外的**凸性偏差**（Convexity Bias: 衡量债券价格对利率变化敏感度的非线性部分）。
我们可以谈谈凸性偏差，它比你们很多播客深入的程度还要更细致。
但是，当我在佛罗伦萨的时候，我有了如何创建一个没有凸性偏差问题的利率互换期货合约的想法。
那就是我当时专注的事情。
**Tracy Alloway:** 那个字母是什么？
**Don Wilson:** 好的，回到那个字母，那个字母是关于在欧洲美元期权交易池经历了一段非常不愉快的时期之后的事情。
当时，你知道，所有做市商都损失了大量的钱，因为随着美联储以非常可预测的方式开始加息，偏度的形状发生了剧烈变化。
没有人真正开发出衡量**线性偏度**（Linear Skew: 期权隐含波动率曲线的斜率）的方法。
所以，在周末，我在一周内说，嗯，这不太有趣，我们每天都在亏很多钱。
但好消息是这意味着我们有东西要学习。
所以，我花了一个周末和量化分析师一起工作，我们想出了一个衡量输入之间线性偏度的方法，并决定使用希腊字母 Psi 来描述它。
你知道，到了周一早上，我们已经把它放进了风险管理和报表中，开盘前，我向交易员解释了如何谈论它，如何使用围绕它的语言。
很快，我们就把钱赚回来了，因为我们能够比其他人更好地管理这种风险，因为我们有一整套围绕它的语言。
**Tracy Alloway:** 太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tracy Alloway: I heard a story that you were once on vacation with your family, and you were in Italy. I think in Florence. And instead of, I don't know, eating gelato or something like that, you decided to invent a new Greek letter for derivatives trading. So. So this is cool. Yeah. So? So here, I mean, the the you're confusing two story, so. Oh. Dairy. Okay. Actually, what happened was, I was, there was a new exchange that had launched an interest rate swap futures contract. It was called IBC. And, I looked at the contract and I figured out that actually they had not designed the contracts properly. And so, although they were telling everybody that it was economically equivalent to a regular interest rate swap, it wasn't because it had this additional convexity bias in it. Which is we could talk about convexity bias. It goes even more in the weeds than a lot of your podcast go into. But, but so when I was in Florence, I had this idea of how you could create an interest rate swap futures contract without this convexity bias problem. And that is that is what I focused my time on there. What was the letter. Well so so back to the letter that the letter that was about after a really unpleasant period in the Eurodollar option pit, where, you know, all the market makers lost tons of money because the shape of the skew shifted dramatically. As the fed started hiking in a very predictable manner. And, and nobody had really developed a measure for, linear skew, and so over, over the weekend, I said, you know, during the week, I said, well, you know, this isn't that much fun. We're losing a lot of money every day. But the good news is that that means we have something to learn. And so, so I spent the weekend working with the quants and we came up with, you know, kind of a measure of, of the, linear skew between the inputs and decided to use the Greek letter psi to describe it. And, you know, so by Monday morning, we had put it into the risk and under the sheets and, and before the open, I explained to the traders, you know, how to talk about it, how to use language around it. And, and before you know, it, we had made the money back because we were able to trade, manage this risk better than anybody else because we had a whole language around it. Amazing.</p>
</details>

### GPU 市场的标准化与参与者

**Joe Weisenthal:** 所以我们已经确定了你在解决金融工具合约问题方面的专业信誉。
如果我想到 GPU 期货或类似的东西，我首先想到的问题是标准化。
因为当然，你知道，各种不同类型的芯片、不同类型的内存、不同的延迟，我想。
你如何解决这个问题？
**Don Wilson:** 所以这是一个很好的问题。现在，我们已经成立了两家公司。
一家叫做 Compute Exchange，名字不太有创意。
我们有这样做的倾向。TRW 是你的首字母缩写，对吧？
**Don Wilson:** 那是我的交易徽章。是的，也是我的首字母缩写。
**Don Wilson:** 我，你知道，后来我们在 Cumberland Crypto 方面做得更好。是的，那很好，那很好。
那实际上是 Grateful Dead 乐队关于 Cumberland Mines 的歌曲的参考。
**Tracy Alloway:** 我也不知道。
**Don Wilson:** 是的。我的一个负责更有创意命名的合伙人想出了那个名字。他是一个 Grateful Dead 乐队的粉丝。
总之，另一家公司叫做 Silicon Data。Silicon Data 的任务是创建指数，这些指数将变得可交易，你知道，将有期货合约在其上挂牌。
现在，他们已经创建了许多不同的指数，其中一个是 H100 指数，另一个是 A100 指数。
信不信由你，这些指数都可以在 Bloomberg 上查到。
**Tracy Alloway:** 哦，太棒了。很高兴听到这个。如果我们在工作室里，我早就已经开始查看图表了，在你谈论它的时候。
**Joe Weisenthal:** 谁是自然的参与者？因为当我想到 AI 或训练时，你知道，想象一下有人去大型云服务商之一，他们签订了长期合同或什么的。
在存在一个流动性强的计算市场环境中，哪些参与者会受益？
**Don Wilson:** 所以我们发现，实际使用计算、扩展源计算的人，我们发现因为有大约 70 家不同的云服务商参与，你通常可以获得更好的价格。
你可以做的一件事是，如果你是一家 AI 公司，你可以指定你想要的大致集群类型。
你甚至可以说，你知道吗？我对位置无所谓，或者，如果它在中东，我也没关系，但我希望每 GPU 支付 20 美分或更少。
无论是什么，你都可以表达你的偏好曲线。
Compute Exchange 可以进行拍卖，然后，你知道，找到最符合你需求的、价格最好的计算资源。
所以，这就是它的运作理念。
而且，你知道，如果你想要一个 10,000 个节点的集群，一个用于进行大规模训练的庞然大物，它可能就不太适用。
**Joe Weisenthal:** 好的。
**Don Wilson:** 但对于推理来说，它非常有效。或者对于较小的训练任务，它也运行得很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Joe Weisenthal: So we've established your street cred when it comes to, solving problems in contracts for financial instruments. If I think about a GPU future or something like that, the first problem that comes to my mind is standardization. Because of course, you know, all different types of chips, different types of memory, different latency, I guess. How do you go about addressing that? So so that's a great question. And right now, so what we've done is we set up to two companies. One is called compute exchange, not very creatively named. We have a tendency to do that. At what is your initials. Right. That was my trading badge. And yes, also my initials. Yeah. I, you know, I mean, we did better later on with Cumberland. Crypto. Yeah. That's nice, that's nice. That was actually a reference to the Grateful Dead song about, Cumberland Mines. I didn't I didn't know that either. Yeah. One of my partners who does the more creative naming came up with that one. He's a he's a dead fan. Anyway, so, the other company is called Silicon data. And silicon data is job is to create indices that will be, that will become tradable, you know, will be viable to have futures contracts listed on them. And right now, they've created a number of different ones, but one is the H100 index, another one is the A100 index. And believe it or not, those indices are both available on Bloomberg. Oh, amazing. That's, love hearing that. If we were in the studio, I would already we would be looking at I would already be looking up the, chart as you were talking about it. Who are the natural participants? Because when I think about AI or training, you know, imagine someone goes to one of the big cloud vendors and they sign a long term contract or whatever. Who are the participants who would be better off in an environment where there was sort of where there was a liquid market for compute. So, what we found and who actually uses, compute, extend source compute. And we find that because there are something like 70 different cloud providers that, participate, you can, you can often get better pricing. And one of the things that you can do is you can specify if, let's say that you're an AI company. Yeah. And you kind of you know, roughly what kind of cluster you want, you can specify that. You can even say, you know what? I'm, I don't I'm indifferent between locations or, you know, I if it's in the Middle East, I'm still okay with it, but I want to pay $0.20 per GPU or less. Whatever it is, you can kind of express your preference curve. Compute exchange can conduct an auction and then, you know, find the, the kind of best price compute that matches your needs. So that's, that's kind of the idea of how it works. And, and, you know, it probably doesn't work if you want a 10,000 cluster. You know, monster for doing a huge training run. Okay. But for, for inference, it works great. Or for smaller training runs, it works really well.</p>
</details>

### 流动性 GPU 市场的影响与云服务商的未来

**Joe Weisenthal:** 更广泛的影响是，一旦你建立了一个流动性市场，人们就可以对冲他们的风险敞口，这会降低资本成本，对吗？
**Don Wilson:** 是的，没错。所以，一旦你有了流动性市场，就会容易得多。
你对指数的信心会大大增加。然后你就可以挂牌期货合约。
那么这有什么作用呢？它使得那些正在筹集资金、购买大量 GPU、将它们放入数据中心，然后希望能够出租它们，但又不确定六个月后，更不用说两年后，能以什么价格出租它们的新兴云服务商（NIO clouds）能够做到这一点。
所以，一家新兴云服务商可以购买 GPU，出售一系列期货合约。
我设想这些合约的交易方式会像电力期货一样，每个月都有一个。
如果你想对冲未来三年，你就卖出 36 份。
现在你已经锁定了价格，显然他们的资本成本会下降，这反过来又应该使 GPU 更容易获得。
另一方面，如果你经营一家 AI 公司，你筹集了有限的资金，你大致知道你要进行多少训练，但你不知道确切的配置。
你可以在衍生品市场购买计算资源。
然后，一旦你对确切的配置有了清晰的了解，你就可以将这些衍生品换成实际的计算资源。
**Tracy Alloway:** 再多谈谈，我正在思考，哦，对了，卖方。
所以我们有这些大型云服务商，对吧？就是大家都知道的那些。
然后你提到了新兴云服务商。你认为这会改变吗？你认为未来云服务商的构成会是怎样的？
**Don Wilson:** 这是一个很好的问题。我认为整个领域都会增长，但像 AWS、GCP 这样的公司在整个市场中所占的比例会变小。
**Tracy Alloway:** 好的，这是我的猜测。但为什么呢？
**Don Wilson:** 因为有如此多的其他公司正在购买 GPU 并部署它们。
**Tracy Alloway:** 好的，很好的答案。你知道，乔问你谁会是这个市场的自然参与者。
我来问你相反的问题。谁不想要这个？
因为我想到一些**超大规模云服务商**（Hyperscalers: 指拥有庞大计算、存储和网络基础设施的云服务提供商，如亚马逊 AWS、微软 Azure、谷歌云等）。
他们似乎喜欢控制 GPU 供应，并可能挤压一些竞争对手。
你预计他们会抵制吗？
**Don Wilson:** 是的，我的意思是，我认为超大规模云服务商受益于不透明定价和捆绑定价。
当然，他们更愿意拥有所有 GPU。
但 Nvidia 也更愿意拥有所有 GPU。
你知道，这总是一件好事。
但我认为 Nvidia 希望 GPU 能够广泛分发，而且他们才是真正做决定的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Joe Weisenthal: Is the broader impact the idea that once you establish a liquid market where people can, you know, presumably hedge their exposure, that that would bring down the cost of capital. So, so that's right. So, so once you have a liquid market, then it's much easier. Then then you have much more confidence in the indices. And you can then list futures contracts. And and so what does that do. It enables the NIO clouds that are going out raising capital, buying a bunch of GPUs, putting them in data centers and kind of hoping that they can rent them out and not really knowing what, the they're going to be able to rent them out for six months from now, let alone two years from now. So a Nio cloud could, buy the GPUs, sell a strip of futures contracts, and I envision that these will be traded kind of like electricity futures, where there's one for every month. And. And if you want to hedge the next three years, you sell 36 of them. And now you've locked in your pricing, obviously their cost of capital is going to go down, which in turn should make GPUs more readily available. And then on the flip side, if your running an AI company and you raise a finite amount of dollars and you kind of know how much training you're going to do, but you don't know exactly what configuration, and you can go ahead by the compute in the derivatives market. And then once you have, clear view on exactly what configuration you want, then you can swap those derivatives for actual compute. Talk to us a little bit more about so I'm trying to think, oh yeah, the sell side. So like we have these like big, big clouds, right. The ones that everybody knows. And then you mentioned the neo clouds. Do you see that changing? Like what do you see is the future mix of cloud vendors in the future. So, that is a great question. I think that that the whole space is going to grow, but that the, you know, AWS gcp's of the world will make up a smaller percentage of the whole. Okay, that's my guess. But how come, because there are such proliferation of, other companies buying GPUs and deploying them. Okay. So good answer. You know, Joe asked you who would be the natural market participants for this. I'm going to ask you the opposite question. Who wouldn't want this? Because I think of some of the hyperscalers. They seem to like controlling the GPU supply and maybe squeezing some of their competitors. Would you expect resistance from them? Yeah, I mean, I think the hyperscalers benefit from opaque pricing and kind of bundled pricing. And of course, they would prefer to have all the GPUs could. But Nvidia I would also prefer to have all the GPUs. You know, that's always a good thing. But but I think Nvidia wants the GPUs to be widely distributed and, and they're really the ones that make the call.</p>
</details>

### 从 DRAM 期货的失败中汲取教训

**Joe Weisenthal:** 这不是第一次尝试从技术中创建期货市场。
我想几十年前曾多次尝试过像**DRAM 期货**（DRAM Futures: 动态随机存取存储器期货，一种曾尝试建立的科技商品期货）这样的努力。
这似乎没有根本性的不同，尽管也许有。
那些为什么失败了？当你思考这次会有什么不同时，是什么失败导致了它？为什么 DRAM 期货没有成功？
**Don Wilson:** 所以 DRAM 的问题是价格一直在下跌。
是的，以一种非常可预测的方式。
所以如果你知道未来的价格会更低，你为什么要购买期货合约呢？
而 GPU，你知道，我们当然经历过 GPU 需求超高的时期。
然后我们也经历过一段时期，你知道，有一些过剩。
所以价格并没有一个一致的轨迹。
我认为在某种程度上，无论你如何衡量，每浮点运算美元成本或每代币美元成本，都会有一个持续下降的轨迹，我认为这会继续下降。
但是，你知道，H100 在很长一段时间内都会是一个有用的 GPU。
所以，你知道，在其生命周期中，我认为会有需求更多、需求更少的时期，你知道，会有更多的周期性，更少的预测性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Joe Weisenthal: This isn't the first time that there's been an attempt to create futures markets out of something, out of technology. I think there's been multiple efforts decades ago to like Dram futures. It doesn't seem that fundamentally different, although maybe it is. Why did those fail? Like when you think about like, what's going to be different this time? What was the failure that caused? Why didn't Dram futures take off? So so the thing about Dram was that the price just kept on going down. So yeah, in a very predictable way. And so why would you want to buy a futures contract if you know, the price in the future is going to be lower? Whereas GPUs, you know, we've certainly gone through periods where GPU demand was super high. And then we've gone through a period where, you know, there was kind of some excess. So there's not a consistent trajectory of pricing. I, I think that there will be a consistent trajectory lower in terms of, I don't know, however you want to measure it, dollars per flop. Sure. Dollars per token, I, I think that that's going to continue to decline. But the, you know, in H100 is going to be a useful GPU for a very long time. And, and so, you know, and, and over its life, I think there will be periods where there's more demand, less demand, and, you know, a little bit more cyclicality and, less predictability.</p>
</details>

### GPU 市场的波动性与总拥有成本

**Don Wilson:** 所以我知道特朗普政府表示他们希望这个市场发生。对吧？
所以你似乎有一些监管方面的顺风。
**Don Wilson:** 是的，我的意思是，我不认为这是一件有争议的事情。
我认为很清楚，你知道，一旦我们找出了正确的指数构建方法并拥有了足够的数据，我认为**商品期货交易委员会**（CFTC: Commodity Futures Trading Commission, 负责监管美国商品期货和期权市场的独立机构）不会抱怨这个产品。
**Tracy Alloway:** 这是一个有点偏离你建立这个市场的尝试的问题。
但说到云，在你的主营业务中，我假设你的主要客户或用户是芝商所（CME）的？
你对芝商所将其后端迁移到谷歌云感到兴奋吗？
因为他们大肆宣传。他们谈论与谷歌的合作关系等等。
作为客户，你对这一举动感到热情吗？我们之前采访了特里。
**Don Wilson:** 是的，他说他很兴奋。
**Don Wilson:** 是的。所以，问题在于，这取决于你把什么放到云端，把很多东西放到云端是完全没问题的。
但你不应该放到云端的是**撮合引擎**（Matching Engine: 交易所核心系统，用于匹配买卖订单）。
**Tracy Alloway:** 好的。
**Don Wilson:** 原因是，你希望撮合引擎尽可能地具有**确定性**（Deterministic: 指系统行为可预测，相同输入总能产生相同输出）。
这意味着，如果你向撮合引擎发送两个订单，一个比另一个晚几微秒，你希望每次都是先到达的那个订单被成交。
如果你把东西放到云端，就很难实现这一点。
你最终会得到一个广泛的分布，关于哪个订单会先被成交，即使你拉长这些时间，一个可能晚了几毫秒的订单也可能先被成交，这对流动性提供者来说是极具破坏性的。
这意味着市场的流动性会受到影响。
**Tracy Alloway:** 但这是，我的意思是，你说他们把撮合引擎放到云端并不理想，但这是发展方向。
**Don Wilson:** 是的。而且不清楚云端撮合引擎的具体哪个部分。
**Tracy Alloway:** 好的。
**Don Wilson:** 是某种双重结构吗？我不知道，但重要的是。
**Don Wilson:** 是的，确定性撮合引擎。我的意思是，如果谷歌能想出如何在云端实现确定性撮合引擎，那就去做吧。
**Tracy Alloway:** 你怀疑这是否可能？你能描述一下这个理论问题吗？
云计算的什么特点使得这个特定的确定性问题变得困难，而不是传统基础设施？
**Don Wilson:** 嗯，当你拥有本地部署的计算机时，你可以，一切都在那里。
你可以控制电线走向。
**Tracy Alloway:** 哦，我明白了。所以当它在云端时，它就有点。
**Don Wilson:** 嗯，是的。更模糊，我想。而且，这很难做到。
**Tracy Alloway:** 这是一个很好的双关语，我很欣赏。
所以，你知道，你提到你在交易行业有着悠久而辉煌的职业生涯。
从老式交易开始。现在我们在这里谈论 GPU 交易，以及云端有什么可行和不可行的。
告诉我们你的公司在人工智能的实际应用方面正在做什么。
这是我们问每个人的问题。我们要求所有公司泄露他们所有的专有秘密，不包括工程师。
我们知道他们正在生成。我们知道人们。所以不要说“是”。
我们知道他们正在使用云代码或什么的。所以除了工程师。
**Don Wilson:** 是的，你说得对。那有点无聊。
**Tracy Alloway:** 是的，无聊的。
**Don Wilson:** 另一件事是，当我们问这个问题时，人们会说“看机器学习的东西”。
**Tracy Alloway:** 是的，那已经存在很久了。所以我们来谈谈实际的。
**Don Wilson:** 是的。所以，我认为我们做出交易决策的方式将发生巨大变化。
而且它已经正在发生。
你可以使用人工智能与你的专有数据、你的专有模型进行交互，并提出交易建议。
这很酷。
**Tracy Alloway:** 你们现在正在做这个吗？
**Don Wilson:** 是的。所以，好的，我们正在开始做这个。
但我们现在有一些工具可以做到这一点。
是的，另一件非常有趣的事情是摆弄智能代理（agents），让不同的智能代理进行交互。
所以你可以，你可以这样想，也许你有几个不同的 AI 分析师，他们都研究某只股票。
然后你有一个风险承担代理，或者几个不同的风险承担代理，他们与这些分析师互动，然后根据这些信息提出交易建议。
所以，我的意思是，这些，你知道，这有点像一个理论概念，但我认为我们离这样的事情不远了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Don Wilson: So I know the the Trump administration has said that they want this market to happen. Right. So you seem to have some regulatory, I guess, tailwind behind you. Yeah. I mean, I don't think that I don't think that this is a controversial thing. I think that it's pretty clear that, you know, okay, once we figure out the right index construction and have kind of sufficient data that I don't think the CFTC would complain about the, the product. This is a little bit of a sideways question from your attempt to build a, this market. But speaking of the cloud, in the in your main business, is it, I assume your sort of major customers or users of, the CME? Are you excited about the CME migration of its back end to Google Cloud? Because they tout it. They talk about their partnership with Google, etc. as a client or customer. What are you enthusiastic about this move? We interviewed Terry earlier. Yeah. Said that we was excited for sure. Yeah. So so the problem with so it depends on what you put into the cloud and it's totally fine to put, a lot of things into the cloud, but the thing that you don't want to put into the cloud is a matching engine. Okay. And and the reason for that is you want the matching engine to be as, deterministic as possible. And so that means that, if you send two orders into the, the matching engine, one, let's say, you know, a couple of microseconds behind the other one, you want the one that gets there first to be filled all the every time. Yeah. And if you put stuff into the cloud it's very hard to make that happen. You wind up getting, you know, a wide distribution around, which order will be for filled first and, and even as you kind of stretch those times out, you could have an order that comes in, you know, maybe a couple milliseconds later, be filled first, that, is super disruptive for liquidity providers. And it means that, the liquidity in the market is going to suffer. But this is so, I mean, and you say it's not ideal for them to put the matching to have a matching engine in the cloud, but this is the direction it's going. It. Yeah. And it's unclear exactly which part of the matching engine within the cloud. Okay. Is it some kind of, you know, a dual structure? I don't know, but but that's what matters is. Yeah. Deterministic matching engine. I mean, if Google can figure out how to make a matching engine in the cloud deterministic, you know, go for it. Can you skeptical that that's even possible? Can you just describe the sort of theoretical problem? What is it about cloud computing that makes this particular problem the deterministic aspect difficult, as opposed to traditional infrastructure? Well, when you have on prem, computers, you can, kind of it's all right there. You can control where the wires go and. Oh, I see, and so when it's in the cloud, it's a little bit more. Well, yeah. Nebulous, I guess. And, it's just hard to do as a good pun, I admire it. So, you know, you mentioned that you have this long and storied career in the trading industry. Starting from old school trading. And now we're here talking about GPU trading and what's in the cloud and what works and what doesn't. Tell us what your company is actually doing when it comes to practical application of AI. This is a question we're asking everyone. We asked all companies to spill all their proprietary secrets, excluding the engine, excluding the engineers. We know that they're we know that they're generating. We know people. So don't say yes. We know that they're using cloud code or whatever. So besides the engineer. Yeah, you're right. That's that's kind of the boring. Yes. The boy, the. And then the other thing is then they when we ask this question, people say to watch a machine learning things that. Yeah, which has been around forever. So let's talk about actual. Yeah. Yeah. So, so, I think that the way that you make, we make trading decisions is going to change dramatically. And and it already is. You can, use AI to, interact with your proprietary data, your proprietary models, and suggest trades. That's pretty cool. Are you doing that right now? Yeah. So, okay, so we're we're I mean, we're starting to do that. But but we have some tools that kind of do that now and, and. Yeah, the other thing that's really interesting is to fiddle around with, with agents, and have different agents interact. And so you could, you could kind of think about, you know, maybe you have, you have a couple different analysts, AI analysts that, both, work on some stock. And then you have kind of a, risk taking agent or maybe a couple different risk taking agents that interact with those analysts and then come up with trades, based on that. So, I mean, these are, you know, that's a little bit of a theoretical concept, but I don't think we're that far away from things like that.</p>
</details>

### GPU 交易的现状与未来形态

**Tracy Alloway:** 让我们再多谈谈云交易。我对此非常感兴趣。
目前的现状如何？只是为了让我们了解你们的进展？目前平台的使用情况如何？
**Don Wilson:** 我的意思是，就撮合引擎而言。
**Tracy Alloway:** 不，不，不。哦，抱歉。关于 GPU 交易，它有多活跃？
现在？你们的业务状况如何？
**Don Wilson:** 哦，我的意思是，你知道，上个月我们进行了五六次拍卖，但现在还处于早期阶段。
**Tracy Alloway:** 是的，但它正在发生。
**Joe Weisenthal:** 所以当我想到期货合约是如何诞生的时，通常是定制期权。
然后你得到像我们这样的指数。然后是远期合约，然后是期货。
我脑海中就是这样想的。你认为这个过程也适用于此吗？
**Don Wilson:** 我不一定这么认为。我的意思是，最简单的，我的意思是，是的，我想你可以做一些私下协商的计算互换或类似的东西，也许那会首先发生。
不，我认为第一件事是期货合约，它以指数结算。
如果现货市场变得真正具有流动性，并且你拥有非常标准化的拍卖，比如说。
你知道，你问的一个问题是，你如何处理缺乏标准化的问题？
所以，一件事是，你选择某种类型的 GPU，例如 H100。
但即使如此，你也可以用不同的方式配置它们。你可以使用**InfiniBand**（一种高速互连技术，用于高性能计算和数据中心）或其他连接方式。
所以重要的是你需要确定一些基准。
Silicon Data 所做的一件事是，他们实际上建立了一些测量工具，可以测量 GPU 集群的速度。
所以，你就可以说，好的，为了让这个 GPU 有资格进入指数，它需要达到某个标准。
你可以通过几种不同的向量进行测量。
所以我认为这就是你如何做到这一点。
然后，如果你获得了非常流动性的拍卖，你实际上可以拥有一份期货合约，它以拍卖价格现金结算。
然后，你知道，人们可以选择要么基本上只是现金结算他们的衍生品然后离开，要么现金结算他们的衍生品并参与拍卖。
他们会知道，价格会从一件事转移到另一件事。
那可能是一个未来的世界状态。
而最初的状态可能只是一个通用指数，期货以指数现金结算。
**Joe Weisenthal:** GPU 交易中市场失灵会是什么样子？
因为你的类比是石油市场。你知道，石油市场会发生奇怪的事情。
我们可能会遇到负 GPU 价格吗？
或者如果有一天所有人都醒来，决定将 ChatGPT 用作他们的心理治疗师或什么的，有些人正在这样做，你可能会遇到 GPU 短缺，导致人们无法履行合约吗？
**Don Wilson:** 所以，市场有很多种方式会崩溃和出错。
你知道，我至今记得，当石油期货价格变为负值时，那是在新冠疫情期间。
我当时坐在家里，交易石油期货，我以负价格购买了石油期货。
**Tracy Alloway:** 你是少数真正做到的人之一。太棒了。
**Don Wilson:** 但我，那是什么时候，2001 年还是 2021 年？
是的，我当时 14 岁的儿子对我说，求求你，求求你，求求你，我想买负价格的期货合约。
我说，你没有办法接收石油。
他说，我会去俄克拉荷马州库欣，想办法做到。
**Tracy Alloway:** 你真的培养了一个，儿子，女儿，儿子，儿子。你真的，他一直在学习。
**Joe Weisenthal:** 我们有一集关于实际持有石油的节目。我不推荐这样做。
事实证明，如果你把它放在桌子上足够长的时间，它会蒸发到大气中，毒害你的同事。
**Don Wilson:** 是的。
**Don Wilson:** 总之，有点跑题了。但是，所以，我认为在上涨轨迹上，如果需求量很大，你知道，这是商品市场非常擅长处理的事情。
你知道，价格会上涨，会有更多的供应进入。我认为这都很好。
在下跌方面，你知道，你总是可以把 GPU 关掉。
所以我认为它们不会交易到负值。
**Tracy Alloway:** 当你预测 GPU 价格的市场波动时，你认为其中有多少波动性是嵌入的电力成本？
所以当你购买计算资源时，对吧，你购买的是芯片，但也购买了电力。
这种波动性中有多少是电力造成的？
**Don Wilson:** 行业术语是**总拥有成本**（Total Cost of Ownership, TCO: 购买和运营一项资产或系统在整个生命周期内的所有成本）。
你知道，电力价格占总拥有成本的百分比是多少？
**Tracy Alloway:** 好的。
**Don Wilson:** 对于 H100 来说，低于 15%。
**Tracy Alloway:** 低于 15%。是的。好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tracy Alloway: Let's go just on the, the cloud, trading a little bit more. I want to. Yeah, just on the, the cloud trading. I am really interested in this, topic. What is the current state today? Just so that we understand where you're at? Like, what is today's snapshot of usage of the platforms? I mean, as far as where the matching engines. Yeah. No, no no, no. Oh, sorry. The on the GPU trading like how active is it? Right now? Like, what do you like, where is the state of the business? Oh, I mean, I, you know, I think last month we conducted, I don't know, 5 or 6 auctions, but it's early. Yeah. But but it's happening. So when I think about how, like, futures contracts are born, it's usually bespoke options. And then you get the index like us. And then you get a forward and then a future. That's kind of how I think about it in my head. Is that the process that you imagine for this? I don't necessarily I think that, I mean, the, the simplest, I mean, I yeah, I suppose you could do some privately negotiated, compute swap or something, and maybe that will happen first, but, no, I think the first thing is a futures contract that settles to an index. If the spot market becomes really liquid and you have very standardized auctions, let's say. And, you know, one of the things that you asked about was, well, how do you deal with the lack of standardize? You know, and so one thing is, you go to a certain type of GPU, you know, H100, for instance. But even with Nat, you can, you can, configure them in different ways. You could use InfiniBand. Yeah, some other way of connecting them. And so what's important is you need to decide on some benchmark and one of the things that silicon data has done is they've actually built some measurement tools that measure, you know, how fast a GPU cluster is. And so, you can then say, okay, well, in order for this GPU to be kind of eligible to be in the, in the index, it needs to meet a certain standard. And and you can there are a couple different vectors you can measure by. So I think that that's kind of how you would do it. And then if you got very liquid auctions, you could actually have a futures contract that cash settles to the auction price. And then, you know, people could have the option of either essentially just, you know, cash settling their derivative and walking away, or cash selling their derivative and participating in the auction. And they would know that they would, you know, that price would transfer from one thing to another. That that might be a future state of the world. And the initial state is probably just a generic index. And the futures cash that ought to be indexed. What would a market failure look like in GPU trading? Because your analogy is the oil market. And, you know, weird stuff happens in the oil market. Could we get negative GPU prices? Or if everyone wakes up one day and decides they want to use ChatGPT as their psychotherapist or whatever, some people are doing, could you have a GPU shortage where maybe people can't deliver into the contract? So, there are lots of ways that markets can break and go wrong. And, and, you know, I, I remember to this day that, you know, when oil futures went negative, it was during Covid. I was sitting at home, I was trading oil futures and I bought oil futures for negative prices. You were one of the ones who actually got it. So amazing. But my, then, what was that, 2001? Or 2021? So yeah, my then 14 year old said to me, please, please, please, I want to buy negative you price futures contracts. And I said, well, you have no way of, of taking delivery of the oil. And he said, I will go to Cushing, Oklahoma and figure out how to do it. You really raised, son, daughter, son, son. You've really, he's he's been learning for his, we have an episode about taking physical possession of oil. I do not recommend it. Turns out if you keep it on your desk for long enough, it evaporates into the atmosphere and poisons your colleagues. Yeah. Anyway, anyway, a little bit of a tangent. But, so I think on the, you know, upward trajectory, if there's tons of demand, you know, that's something that commodity markets are really good at dealing with. And, you know, the price will go up and more supply will come in. And I think that's all good. On the downward side, you know, you can always just turn the GPUs off. So I don't think they trade negative. How how much of the volatility that do you when you anticipate market volatility in the price of GPUs? How much of that like embedded electricity costs. So when you buy compute, right, you're buying the chip but also the power. Like how much of that volatility will be the power. So the industry lingo that's used is total cost of ownership. And and you know, what percentage of the total cost of ownership is the price is the power price. Okay. For an H100, it's less than 15%. Less than 15. Yeah. Okay.</p>
</details>

### 代币化交易与 Canton 区块链

**Tracy Alloway:** GPU 交易显然是你正在做的事情之一，但你是个大忙人，还有其他计划。
你在**代币化交易**（Tokenized Trading: 将现实世界资产或金融工具表示为区块链上的数字代币进行交易）领域在做什么？
**Don Wilson:** 所以，这是一个我们非常兴奋的领域。我们已经思考了很长时间。
早在 2012 年，当我们在 TRW 开始讨论比特币时，TRW 有一些交易员对比特币非常兴奋。
**Tracy Alloway:** 你很早就接触了。2012 年还算很早。
**Don Wilson:** 非常早。是的。所以我们当时在讨论，你知道，这为什么有趣？它有趣吗？它的什么地方有趣？
我们得出了以下论点：比特币有很小的机会成为数字黄金。
我不知道，比如说 1%。它是一种有趣的产品。所以我们应该在其中做市。
所以我们成立了 Cumberland，你知道，我们没有把它叫做 TRW，因为当时所有人都知道任何交易加密货币的人显然都是骗子。
所以，你知道，我们想稍微区分一下品牌。
但是，你知道，另一件事是，你可以在一个无信任的生态系统中即时转移价值，这对我来说非常有趣。
我说，哇，如果你能在传统金融市场做到这一点，那会使市场变得更好，更具韧性。
所以我们真的应该弄清楚如何做到这一点。
所以我们成立了一家公司，名字同样不太有创意，叫做 Digital Asset Holdings。
它创建了 Canton 区块链。
最初，Canton 区块链是一个私有许可链。
但去年夏天，它实际上变成了一个公有链。
这个链是专门为传统金融工具的代币化而设计的。
所以它有几个特点。
一个是它具有可配置的隐私性。
信不信由你，对于从事金融业务的人来说，他们不想在买卖东西时向全世界广播。对吧？
我的意思是，显然如果超过报告阈值，你就会广播。
但是，所以，这是这个链的一个基本特征，它与以太坊或 Solana 或任何其他链不同。
在那些链上，如果你代币化某个东西并将其放在上面，然后移动它，每个人都会看到它移动。
所以，这就是我们一直在努力的事情。
**Tracy Alloway:** 它能发展到多大？它能吞噬一切吗？
你能想象一个世界，任何金融工具，股票、债券等，最终都将全部上链吗？
**Don Wilson:** 是的，我认为一切都会上链。
**Tracy Alloway:** 哇。到什么时候？给我们一个年份。
**Don Wilson:** 我在这方面总是太早了，但是，我认为在未来五年内，所有这些工具都将上链。
**Tracy Alloway:** 好的，这是一个很好的时间。我们会，我们会在。
**Joe Weisenthal:** 我们会回到芝加哥，重新讨论这个问题。
**Don Wilson:** 是的。
**Joe Weisenthal:** 代币化资产的想法是否也意味着你可以用它来进行抵押品管理，并将其作为转移抵押品的方式？
**Don Wilson:** 百分之百是。
所以每个人都在谈论转向 24/5 或 24/7 市场。
如果你想这样做，能够 24/5 或 24/7 转移抵押品，并 24/5 或 24/7 转移变动保证金，这非常重要。
所以，是的，这是一个非常重要的用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tracy Alloway: GPU trading obviously one of the things you're working on, but you're a busy guy and you've got other stuff up your sleeve. What are you doing in the realms of tokenized trading? So, so that is an area that that I'm, we're super excited about that. And, and we've been thinking about this for a very long time. So in 2012, when we started talking about Bitcoin at the RW and there were a number of of traders at TRW that were very excited about Bitcoin, you were very early into it. 2012 was still pretty early. Very early. Yeah. And so we were having these discussions of, of, you know, why is this interesting. Is it interesting. What about it is interesting. And, and we came away with the following thesis. You know, there's some small chance that Bitcoin could be digital gold. I don't know, you know, call it 1%. It's kind of an interesting product. So we should probably make markets in it. So we we set up Cumberland as the and you know we didn't call it W because at the time everybody knew that anybody trading crypto was obviously a crock. So you know, we wanted to kind of separate the band a little bit. And, but, you know, the other thing was this idea that you could move value instantaneously in a trustless ecosystem was super interesting to me. And I said, wow, if you could do that in traditional financial markets, that would make the markets so much better. So much more resilient. And so we should really figure out how to do that. So we started a company called, again, not very creatively named Digital Asset Holdings. Which, which created the Canton Blockchain. Initially the Canton Blockchain was a private permissioned chain. But, last summer it actually became a public chain. And, and that chain was designed specifically with tokenization of traditional financial instruments in mind. So it has a couple of characteristics. One is it has configurable privacy. And believe it or not, for people who are in the, you know, finance business, they don't want to broadcast to the entire world when they are buying or selling something. Right? I mean, obviously if it's above the reporting thresholds, you do. But, but and so, so that was kind of a fundamental characteristic of this chain that's different than Ethereum or Solana or any of these other things where if you tokenize something and put it on top, and you move it around, everybody sees it move around. So, so that's kind of, something we've been working on for quite a while. And how big could this get? Like, could it swallow everything? Could you imagine a world in which the expect, given any financial instrument, a stock bond, etc., that it all sort of ends up on chain? Yeah, I think that everything will be on chain. Wow. By when give us a give us a year. Oh, I'm always way too early on this stuff but but I, I think in the next five years it really all of these instruments will be on chain. Okay. That's a good time. Well we will we will have a live episode in. We'll come back to Chicago. We'll revisit that question. Yeah. It's the idea with tokenized assets also that you could use that for collateral management and use it as a way to move collateral. 100%. And so everybody's talking about moving to 24 or 5 or 24 seven markets. And if you want to do that, it's really important to, be able to move collateral 24 or 5 or 24 seven and move variation margin, 25 5 or 24 seven. And so, yes, that is that is a very important use case.</p>
</details>

### 预测市场的演变与监管挑战

**Tracy Alloway:** 谈到非常激动人心、性感的交易话题，在你之后，我们将与塔里克·凯尔西部长对话。
所以**预测市场**（Prediction Markets: 允许用户交易未来事件结果的合约市场）非常热门。
你对它们有什么看法？现在在这些领域中做市吗？
**Don Wilson:** 很久以前，我们实际上在预测市场中做过市。
我想是 Intrade 还是什么。是的，但它从未成功。没有人关心。
我一直认为，你知道，预测市场应该成为一种事物。每个人都应该关心，但没有人关心。
然后，你知道，Augur 出来了，我当时想，哦，这真的很酷。这会火起来的。
但没有人关心。所以，这花了很长时间。
所以现在，我们把它用作，你知道，一个参考价格。
你知道，显然在选举期间，它对于，你知道，衡量。
**Tracy Alloway:** 哦，所以你实际上在使用它，因为，你知道，我们听说机构投资者可能会觉得预测市场有用。
也许吧。但你当时在看它。
**Don Wilson:** 我们肯定在看它。我们没有把它用作对冲。
你知道，这很有趣。Shane 给我发消息说，嘿，你知道，它现在在 Bloomberg 上了。
我当时想，不，不，不，太棒了。
**Tracy Alloway:** 是 Polymer 的 Shane Copeland 吗？
**Don Wilson:** 是的，是的，是的。
**Tracy Alloway:** 但目前，你是否预见到，你现在会进入这些交易所做市吗？你会进入体育合约市场吗？
**Don Wilson:** 我的意思是，我们不会。所以在这里，我认为我们很有可能会开始交易一些预测市场。
你知道，我们的一些竞争对手已经在体育市场中非常活跃地交易了。我们没有。
所以这不一定是自然的契合，但是，你知道，我对此没有宗教上的反对。
**Joe Weisenthal:** 在预测市场与传统金融资产交易中，会有不同的考虑因素吗？
在定价交易或风险管理方面，你是否需要考虑不同的事情？
**Don Wilson:** 嗯，我认为这取决于预测市场是什么。
我的意思是，如果你在交易一个预测市场，比如，我不知道，某人是否会向 WNBA 篮球场扔橡胶物体。
那么，我的意思是，那是观众可以控制的事情。
所以，在这种情况下提供流动性，你似乎会处于劣势。
**Tracy Alloway:** 顺便说一句，那是一个非常特殊的例子。
我本来想说泰勒·斯威夫特结婚，但你用了那个。
**Don Wilson:** 嗯，这些市场是人们可以直接干预的，而不是在他们自己的。
**Tracy Alloway:** 是的。反社会行为。
**Don Wilson:** 没错。而不是，你知道，美联储会降息 25 或 50 个基点，还是保持不变？
我的意思是，你可以在 SOFR（Secured Overnight Financing Rate: 担保隔夜融资利率，美国联邦储备银行发布的一种基准利率）中交易，你可以在联邦基金期货中交易。
有一些二元期权你可以交易。
所以预测市场版本与我们已经交易的风险完全吻合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tracy Alloway: So speaking of very exciting, sexy topics in trading, right after you, we're going to be, speaking with, Tariq, minister of Kelce. And so prediction markets are super hot. What is your what where are you at with them is making markets and any of these in any of the spaces right now. So a million years ago, we, actually made markets and prediction markets. I think it was, I don't know, Intrade or something. Yeah. And and it never went anywhere. Nobody cared. And I always thought, you know, prediction markets should be a thing. Everybody should care, but nobody did. And then, you know, then augur came out, I was like, oh, this is really cool. This is going to take off. And nobody cared. And, so it's it's taken a long time. So at this point, we, we use it as, you know, as a reference price. You know, obviously during the election, it was super helpful to, you know, kind of, use that as a gauge of. Oh, so you were actually using that because, you know, we hear stories about institutional investors maybe finding prediction markets useful. Perhaps. But you were you were looking at it. We were definitely looking at it. We were not using it as a hedge. And, you know, it was it was funny. Shane messaged me and said, hey, you know, it's it's, it's up on Bloomberg now. And I was like, no, no, no, it's awesome. Shane. The Shane Copeland from polymer. Yeah, yeah yeah yeah. But currently like do you, do you foresee like are you going to enter now either in making markets on some of these exchanges and would you get into the the sports, the sports contracts? I mean, so we're not so here I think it's highly likely that we'll, start trading some of the prediction markets. You know, some of our competitors already trade in the, in the sports markets pretty actively. We don't. So it's not necessarily a natural fit, but but, you know, I don't have, like, a religious opposition to it. Would there be different considerations for trading in a prediction market versus a traditional financial asset? Are there different things you have to think about, either in terms of like pricing the trade or maybe risk management? Well, I think it depends on what the prediction market is. I mean, if you're if you're trading a prediction market on, I don't know whether somebody will throw, you know, rubber object on to WNBA court. Then I mean, that's something that, that, you know, people in the audience can control. And so it seems like providing liquidity in that you would be at a disadvantage. That was a very particular example, by the way. I was going to go with Taylor Swift getting married, but you went with that one. Well, these are markets that people can directly intervene on an incestuous as opposed to inside of their own. Yeah. Anti-social behavior. That's right. And as opposed to, you know, will the fed cut 25 or 50 or stay on hold? I mean, that is you can you can trade that in, you know, Sofr you can trade that in in the fed funds futures. There are some binaries you can trade. And so the prediction market version of that is, is, you know, totally fits in with the risk that we already trade. So we mentioned in the intro, there's going to be this big, meeting in DC next week. And we just happened to sort of catch a bunch of the participants. When you look at the landscape for these new futures platforms, because that's what they are, right. The CME like does has regulation been part of their dominant, has regulation made it harder for other entrants to cut into sumi margins or volumes? So, I'm trying to say I'm trying to ask questions that are going to create some tension around the table next week. Yeah. Yeah. So so here, I mean, yeah, you should hear what Terry said about how we're neck. I it'll be on the podcast. I, I'm, I'm sure I can, I can probably repeat it without having, so it, here, once you have a liquid market in something, it becomes a natural monopoly. Yeah. It's very hard to move that to a different venue. It's happened before I, I was living in London in the mid 90s, and, the bond futures were, you know, on the floor of the life. It was this huge trading pit with a bunch of guys pushing and shoving and, and over the course of 12 months, the, you know, DTV, now called the euro was able to move the entire bond futures complex on to the computer. On a different exchange now. I mean, they gave hefty incentives to people. I think they went to the all the German banks and they said, don't you dare trade on life anymore. So it's possible, but I think that these things are generally, I don't think that it's really a regulatory issue that causes them to be sticky. I think it's just kind of that unnatural state of affairs, network effect, I guess.</p>
</details>

### 交易的未来：散户与专业交易的融合

**Joe Weisenthal:** 所以我们今晚的主题显然是交易的未来。
正在发生的一件事似乎是专业交易和散户交易的融合。
我们再次与特里谈论了这一点。我相信我们即将与首席执行官谈论。
但从你的角度来看，你是在我看来当时还没有任何散户进行日内交易的时候开始你的职业生涯的。
这如何改变了你对交易的看法？
你是否能设想一个未来，我不知道，AI 解雇了我们所有人，我们都将作为一种保险政策在家进行日内交易？
**Don Wilson:** 我的意思是，Robinhood 确实是一个充分就业计划，也许对美国工人来说是这样，也许吧。
**Don Wilson:** 是的。所以，我的意思是，这是一个我听说过的论点，那就是正在发生的事情是，一群相对成功的人正在失去工作。
他们正在退休。但在退休后，他们决定只在 Robinhood 上管理他们的投资组合。
所以交易活动激增，这在十年前是不会发生的，而且只会从现在开始增长。
而且，我不知道，也许这是对的。
**Tracy Alloway:** 你喜欢吗？在我看来，从文化上讲，你谈论的是为什么预测市场在存在了 20 多年后才兴起？
我记得我第一次听说它们是在 2002 年或 2003 年。它们突然兴起了。
所有这些，你知道，赌博和对冲或交易之间从来没有一条明确的界限，但现在这条界限似乎正在完全崩溃。
这好吗？你有什么看法吗？
**Don Wilson:** 我的意思是，我不知道我们任何人的意见在这个问题上是否重要，因为它感觉上文化上我们正在进入一个所有东西都可以在任何应用程序上交易的世界，而且，你知道，你会看到黄金期货的价格就在足球比赛的赔率旁边等等。
我们想要这个世界吗？
**Don Wilson:** 所以，我不认为这有什么特别不对劲。
但我有点困惑，**预测市场**和体育是否真的符合《商品交易法》的规定。
所以，你知道，我知道，你知道，你接下来。
**Joe Weisenthal:** 你为我们做了完美的铺垫。
**Don Wilson:** 这里，你知道，受益于他上市这些合约的能力。
我不知道，你知道，**商品期货交易委员会**（CFTC）是不是睡着了，我知道他们现在人手不足。
**Tracy Alloway:** 你想留在台上吗？是的，你可以，因为你可以。
**Don Wilson:** 或者他们可能已经决定，这些实际上是具有经济重要性的交易，与。
是的，这对我来说不清楚。
**Tracy Alloway:** 太棒了。好吧，我们只能到此为止了，但 TRW 的创始人兼首席执行官唐·威尔逊，非常感谢你来到这里。
我真的很感激，这真的很有趣。非常感谢。
**Joe Weisenthal:** 那是我们与 TRW 创始人兼首席执行官唐·威尔逊的对话，在芝加哥现场录制。
感谢收看。我们到此为止吗？我们到此为止吧。
好的。这是 Odd Lots 播客的又一集。我是 Tracy Alloway。
你可以在 Tracy Alloway 关注我。我是 Joe Weisenthal。
你可以在 The stalwart 关注我。如果你喜欢这次对话，请点赞、订阅或在下方留言。感谢收看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Joe Weisenthal: So our theme for this evening is obviously the future of trading. And one of the things that seems to be happening is the sort of intermingling of professional and retail trading. And we again talked about that with Terry. I'm sure we're about to talk about it with, the CEO. But from your perspective, and again, you started this career back when I don't think there were any retail traders doing day trading. Really. How is that changed the way you think about trading? And can you envision a future where, I don't know, I fires all of us and we're all going to be just day trading from home as an insurance policy? I it's really or I should say Robinhood is really a full employment program, maybe for U.S. workers, maybe. Yeah. So so I mean, that is that is a thesis that, that I have heard is that what's happening is, a bunch of, you know, relatively successful people are losing their jobs. And they're retiring. But in their retirement, they decide to just, manage their portfolios on Robinhood. And so there's this surge in trading activity that, you know, wouldn't have happened ten years ago, and it's only going to grow from here. And, and I don't know, maybe that's right. Do you like it feels to me like, culturally because you're talking about like, why have prediction markets taken off when they've been around for over 20 years? I think I first heard about them in like 2002 or 2003. They've suddenly taken off. There's all this sort of, you know, the there was never a bright line between what's gambling and what's sort of hedging or what's trading, but there's clearly whatever line that is just feels like it's completely collapsing. Is this good? Do you have an opinion like should should, is, there is, is, and I don't know if any of our opinions matter on the question because it feels like culturally we're entering this world where everything will be tradable on any app and there's, you know, you're going to see a price for gold futures right next to one day, the line on a football match, etc.. Is it do we want this world? So, I don't think there's anything particularly wrong with it. But I am a little bit confused about, whether, prediction markets and sports are actually consistent with what the Commodity Exchange Act says is permissible. And so, you know, I know that, you know, you're next. Yeah. You're setting us up perfectly. Here's, you know, benefits from, his ability to list these contracts. And and I don't know if, you know, the CFTC is just kind of asleep, and I know they're kind of understaffed now. Or do you want to stay on stage? Yeah, you can, because you can just anyway. Or or maybe they've decided that actually, these are economically important. Transactions that that are consistent with the. Yeah. It's unclear to me. Amazing. All right. Well, we're going to have to leave it there, but Don Wilson, founder and CEO of W. Q thank you so much for being here. I really appreciate it was really fun. Thank you so much. That was our conversation with Don Wilson, the founder and CEO of Dr. W, recorded live on stage in Chicago. Thanks for watching. Shall we leave it there? Let's leave it there. All right. This has been another episode of the All Thoughts podcast. I'm Tracy Alloway. You can follow me at Tracy Alloway and I'm Joe Weisenthal. You can follow me at The stalwart. And if you enjoyed this conversation then please like and subscribe or leave a comment down below. Thanks for watching.</p>
</details>