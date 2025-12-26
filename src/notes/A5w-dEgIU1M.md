---
area: "finance-wealth"
category: finance
companies_orgs:
- Renaissance Technologies
- UCLA
date: '2024-02-27'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The Ultimate Counterexample?
people:
- Jim Simons
- Isaac Newton
- Joseph Fourier
- Albert Einstein
- Myron Scholes
- Henri Poincaré
project: []
series: ''
source: https://www.youtube.com/watch?v=A5w-dEgIU1M
speaker: veritasium
status: evergreen
summary: 本文深入探讨了期权定价的万亿美元方程式——布莱克-斯科尔斯-默顿模型，如何将物理学中的随机游走和布朗运动概念引入金融市场。文章追溯了期权从古希腊到现代的演变，介绍了爱德华·索普通过算牌策略击败赌场并将其应用于股市的经历，以及詹姆斯·西蒙斯如何利用数学模型和大数据在金融市场取得惊人成功。该方程式不仅催生了庞大的衍生品市场，也深刻改变了风险管理和投资策略，揭示了市场效率与可预测性之间的复杂关系。
tags:
- investment
- market
- quantitative-trading
- random-walk
title: 万亿美元方程式：物理学、数学如何重塑金融市场与风险管理
---
### 物理学与数学：金融市场的意外起源

这个单一的方程式催生了四个万亿美元的产业，并彻底改变了所有人对待风险的方式。你认为大多数人是否了解**衍生品**（Derivatives: 一种金融工具，其价值来源于标的资产，如股票、债券、商品等）的规模、范围和功用？不，他们毫无概念。然而，这个方程式的核心思想却源自物理学——从原子发现、热传递的理解，甚至是如何在二十一点牌桌上击败赌场。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This single equation spawned four multi-trillion dollar industries and transformed everyone's approach to risk. Do you think that most people are aware of the size, scale, utility of derivatives? No, no idea. Yet at its core, this equation comes from physics, from discovering atoms, understanding how heat is transferred, and even from how to beat the casino at blackjack.</p>
</details>

因此，一些最擅长击败股市的人并非经验丰富的交易员，而是物理学家、科学家和数学家，这或许不足为奇。1988年，一位名叫吉姆·西蒙斯（Jim Simons）的数学教授创立了**大奖章投资基金**（Medallion Investment Fund），在接下来的30年里，该基金每年的回报率都高于市场平均水平，而且远不止一点点，它每年实现了66%的回报。按照这种增长速度，1988年投资的100美元到今天将价值84亿美元。这使得吉姆·西蒙斯轻松成为有史以来最富有的数学家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So maybe it shouldn't be surprising that some of the best to beat the stock market were not veteran traders, but physicists, scientists, and mathematicians. In 1988, a mathematics professor named Jim Simons set up the Medallion Investment Fund, and every year for the next 30 years, the Medallion fund delivered higher returns than the market average, and not just by a little bit, it returned 66% per year. At that rate of growth, $100 invested in 1988 would be worth $8.4 billion today. This made Jim Simons easily the richest mathematician of all time.</p>
</details>

然而，擅长数学并不能保证在金融市场取得成功。问问艾萨克·牛顿（Isaac Newton）就知道了。1720年，77岁的牛顿已经很富有。他在剑桥大学担任教授几十年，赚了很多钱，而且他还兼任皇家铸币厂厂长。他的净资产是3万英镑，相当于今天的600万美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But being good at math doesn't guarantee success in financial markets. Just ask Isaac Newton. In 1720 Newton was 77 years old, and he was rich. He had made a lot of money working as a professor at Cambridge for decades, and he had a side hustle as the Master of the Royal Mint. His net worth was £30,000, the equivalent of $6 million today.</p>
</details>

为了增加财富，牛顿投资了股票。他的一大笔投资押在了**南海公司**（South Sea Company）上。这家公司的业务是跨大西洋贩运非洲奴隶。当时业务蓬勃发展，股价迅速上涨。到1720年4月，牛顿所持股票的价值翻了一番，于是他卖掉了股票。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, to grow his fortune, Newton invested in stocks. One of his big bets was on the South Sea Company. Their business was shipping enslaved Africans across the Atlantic. Business was booming and the share price grew rapidly. By April of 1720, the value of Newton's shares had doubled. So he sold his stock.</p>
</details>

但股价继续上涨，到6月，牛顿又重新买入，并且即使在价格达到顶峰时，他仍在不断买入。当价格开始下跌时，牛顿没有卖出。他认为自己是在“抄底”，于是买入了更多股票。但市场并没有反弹，最终他损失了大约三分之一的财富。当被问及为何没有预见到这一切时，牛顿回答说：“我能计算天体的运动，却无法预测人类的疯狂。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the stock price kept going up and by June, Newton bought back in and he kept buying shares even as the price peaked. When the price started to fall, Newton didn't sell. He bought more shares thinking he was buying the dip. But there was no rebound, and ultimately he lost around a third of his wealth. When asked why he didn't see it coming, Newton responded, "I can calculate the motions of the heavenly bodies, but not the madness of people."</p>
</details>

那么，西蒙斯做对了什么而牛顿做错了什么呢？其中一个原因是，西蒙斯能够站在巨人的肩膀上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what did Simons get right that Newton got wrong? Well, for one thing, Simons was able to stand on the shoulders of giants.</p>
</details>

### 期权的古老智慧：从米利都的泰勒斯到现代金融

利用数学模型来模拟金融市场的先驱是路易·巴舍利耶（Louis Bachelier），他出生于1870年。他18岁时父母双亡，不得不接管父亲的葡萄酒生意。几年后，他卖掉了生意，搬到巴黎学习物理学，但他需要一份工作来养活自己和家人，于是他在巴黎证券交易所（Bourse）找到了一份工作。在那里，他看到了牛顿所说的“人类的疯狂”最原始的形式：数百名交易员大声叫喊价格，打着手势，进行交易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The pioneer of using math to model financial markets was Louis Bachelier, born in 1870. Both of his parents died when he was 18 and he had to take over his father's wine business. He sold the business a few years later and moved to Paris to study physics, but he needed a job to support himself and his family and he found one at the Bourse, The Paris Stock Exchange. And inside was Newton's "madness of people" in its rawest form. Hundreds of traders screaming prices, making hand signals, and doing deals.</p>
</details>

吸引巴舍利耶兴趣的是一种被称为**期权**（Options）的合约。已知最早的期权交易大约发生在公元前600年，由希腊哲学家米利都的泰勒斯（Thales of Miletus）购买。他认为即将到来的夏天橄榄会大丰收。为了从这个想法中赚钱，他本可以购买橄榄榨油机，如果他的判断正确，这些机器将需求旺盛，但他没有足够的钱购买机器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The thing that captured Bachelier's interest were contracts known as options. The earliest known options were bought around 600 BC by the Greek philosopher Thales of Miletus. He believed that the coming summer would yield a bumper crop of olives. To make money off this idea, he could have purchased olive presses, which if you were right, would be in great demand, but he didn't have enough money to buy the machines.</p>
</details>

于是，他转而找到所有现有的橄榄榨油机所有者，支付给他们少量费用，以确保在夏天能以特定价格租用他们的榨油机。当收获季节到来时，泰勒斯是对的，橄榄产量如此之大，以至于榨油机的租金飙升。泰勒斯按照预先商定的价格支付给榨油机所有者，然后以更高的价格出租这些机器，从中赚取差价。泰勒斯执行了已知的第一笔**看涨期权**（Call Option: 赋予持有人在未来某个时间以约定价格买入标的资产的权利，而非义务）交易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So instead he went to all the existing olive press owners and paid them a little bit of money to secure the option to rent their presses in the summer for a specified price. When the harvest came, Thales was right, there were so many olives that the price of renting a press skyrocketed. Thales paid the press owners their pre-agreed price, and then he rented out the machines at a higher rate and pocketed the difference. Thales had executed the first known call option.</p>
</details>

看涨期权赋予你权利，但没有义务在未来某个日期以设定的价格（称为**行权价**，Strike Price）购买某物。你也可以购买**看跌期权**（Put Option: 赋予持有人在未来某个时间以约定价格卖出标的资产的权利，而非义务），它赋予你权利，但没有义务在未来某个日期以行权价出售某物。如果你预期价格会下跌，看跌期权就很有用。如果你预期价格会上涨，看涨期权就很有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A call option gives you the right, but not the obligation to buy something at a later date for a set price known as the strike price. You can also buy a put option, which gives you the right, but not the obligation to sell something at a later date for the strike price. Put options are useful if you expect the price to go down. Call options are useful if you expect the price to go up.</p>
</details>

例如，假设苹果公司股票的当前价格是100美元，但你预计它会上涨。你可以花10美元购买一份看涨期权，它赋予你权利，但没有义务在一年后以100美元（即行权价）购买苹果股票。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example, let's say the current price of Apple stock is a hundred dollars, but you expect it to go up. You could buy a call option for $10 that gives you the right, but not the obligation to buy Apple stock in one year for a hundred dollars. That is the strike price.</p>
</details>

一个小插曲：**美式期权**（American Options）可以在到期日之前的任何日期行权，而**欧式期权**（European Options）则必须在到期日行权。为了简化，我们只讨论欧式期权。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just a little side note, American options can be exercised on any date up to the expiry, whereas European options must be exercised on the expiry date. To keep things simple, we'll stick to European options.</p>
</details>

因此，如果一年后苹果股票价格上涨到130美元，你可以使用期权以100美元购买股票，然后立即以130美元出售。扣除你为期权支付的10美元，你获得了20美元的利润。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if in a year the price of Apple stock has gone up to $130, you can use the option to buy shares for a hundred dollars and then immediately sell them for $130. After you take into account the $10 you paid for the option, you've made a $20 profit.</p>
</details>

反之，如果一年后股价跌至70美元，你只需放弃行使期权，损失你为此支付的10美元。因此，盈亏图看起来是这样的：如果股票价格最终低于行权价，你将损失为期权支付的费用。但如果股票价格高于行权价，你将获得差价减去期权成本的收益。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alternatively, if in a year the stock prices dropped to $70, you just wouldn't use the option and you've lost the $10 you paid for it. So the profit and loss diagram looks like this. If the stock price ends up below the strike price, you lose what you paid for the option. But if the stock price is higher than the strike price, then you earn that difference minus the cost of the option.</p>
</details>

期权至少有三个优点。其一是它限制了你的下行风险。如果你购买的是股票而不是期权，并且股价跌至70美元，你将损失30美元。理论上，如果股票跌至零，你可能损失100美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are at least three advantages of options. One is that it limits your downside. If you had bought the stock instead of the option and it went down to $70, you would've lost $30. And in theory, you could have lost a hundred if the stock went to zero.</p>
</details>

第二个好处是期权提供了**杠杆**（Leverage: 指利用借入资金或金融工具来放大投资回报的策略）。如果你购买了股票，并且股价上涨到130美元，那么你的投资增长了30%。但如果你购买了期权，你只需投入10美元。所以你20美元的利润实际上是200%的投资回报率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second benefit is options provide leverage. If you had bought the stock and it went up to $130, then your investment grew by 30%. But if you had bought the option, you only had to put up $10. So your profit of $20 is actually a 200% return on investment.</p>
</details>

不利的一面是，如果你拥有股票，你的投资只会下跌30%，而使用期权你将损失全部100%。所以期权交易既有机会获得更大的利润，也可能遭受更大的损失。第三个好处是你可以使用期权进行**对冲**（Hedge: 采取措施以减少或抵消潜在的财务风险）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the downside, if you had owned the stock, your investment would've only dropped by 30%, whereas with the option you lose all 100%. So with options trading, there's a chance to make much larger profits, but also much bigger losses. The third benefit is you can use options as a hedge.</p>
</details>

“我认为期权的最初动机是找到一种降低风险的方法。当然，一旦人们决定购买保险，那就意味着有其他人愿意出售保险以获取利润，市场就是这样形成的。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I think the original motivation for options was to figure out a way to reduce risk. And then of course, once people decided they wanted to buy insurance, that meant that there are other people out there that wanted to sell it or a profit, and that's how markets get created.</p>
</details>

所以期权可以是一个非常有用的投资工具，但巴舍利耶在交易大厅看到的是一片混乱，尤其是在股票期权定价方面。尽管期权已经存在了数百年，但没有人找到一个好的定价方法。交易员们只是通过讨价还价来达成价格协议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So options can be an incredibly useful investing tool, but what Bachelier saw on the trading floor was chaos, especially when it came to the price of stock options. Even though they had been around for hundreds of years, no one had found a good way to price them. Traders would just bargain to come to an agreement about what the price should be.</p>
</details>

“鉴于未来买卖某物的选择权，这似乎是一种非常模糊的交易。因此，为这些相当奇怪的标的物定价，一直是困扰许多经济学家和商人几个世纪的挑战。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Given the option to buy or sell something in the future, it seems like a very amorphous kind of a trade. And so coming up with prices for these rather strange objects has been a challenge that's plagued a number of economists and business people for centuries.</p>
</details>

### 随机游走：巴舍利耶的金融物理学

巴舍利耶对概率学已经很感兴趣，他认为这个问题一定有数学上的解决方案，并将其作为他的博士论文题目提交给导师亨利·庞加莱（Henri Poincaré）。当时，研究金融数学并不是人们常做的事情，但令巴舍利耶惊讶的是，庞加莱同意了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, Bachelier, already interested in probability, thought there had to be a mathematical solution to this problem, and he proposed this as his PhD topic to his advisor Henri Poincaré. Looking into the math of finance wasn't really something people did back then, but to Bachelier's surprise, Poincaré agreed.</p>
</details>

要准确地为期权定价，首先你需要了解股票价格随时间的变化。股票价格基本上是由买家和卖家之间的拉锯战决定的。当更多人想买入股票时，价格上涨；当更多人想卖出股票时，价格下跌。但买家和卖家的数量几乎可以受到任何因素的影响，比如天气、政治、新竞争对手、创新等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To accurately price an option, first you need to know what happens to stock prices over time. The price of a stock is basically set by a tug of war between buyers and sellers. When more people wanna buy a stock, the price goes up. When more people wanna sell a stock, the price goes down. But the number of buyers and sellers can be influenced by almost anything, like the weather, politics, new competitors, innovation and so on.</p>
</details>

因此，巴舍利耶意识到，准确预测所有这些因素几乎是不可能的。所以，你能做的最好假设是，在任何时间点，股票价格上涨和下跌的可能性是均等的，因此从长远来看，股票价格遵循**随机游走**（Random Walk: 指一系列随机步骤或方向的路径），其下一步走势似乎由抛硬币决定，上下波动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Bachelier realized that it's virtually impossible to predict all these factors accurately. So the best you can do is assume that at any point in time the stock price is just as likely to go up as down and therefore over the long term, stock prices follow a random walk, moving up and down as if their next move is determined by the flip of a coin.</p>
</details>

“随机性是有效市场的标志。经济学家通常所说的有效，是指你无法通过交易赚钱。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Randomness is a hallmark of an efficient market. By efficient economists typically mean that you can't make money by trading.</p>
</details>

你不能买入一项资产然后立即卖出获利，这个想法被称为**有效市场假说**（Efficient Market Hypothesis）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The idea that you shouldn't be able to buy an asset and sell it immediately for a profit is known as the Efficient Market Hypothesis.</p>
</details>

“越多人试图通过预测股市并根据这些预测进行交易来赚钱，这些价格就越不可预测。如果你我明天能预测股市，那么我们今天就会行动。我们今天就会开始交易那些我们认为明天会上涨的股票。那么，如果我们这样做，它们就不会明天上涨，而是会随着我们买入越来越多的股票而现在就上涨。所以预测行为本身实际上会影响未来结果的质量。因此，在一个完全有效的市场中，明天的价格不可能有任何预测能力。如果它们有，我们今天就会利用它了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- The more people try to make money by predicting the stock market and then trading on those predictions, the less predictable those prices are. If you and I could predict the stock market tomorrow, then we would do it. We would start trading today on stocks that we thought were gonna go up tomorrow. Well, if we did that, then instead of going up tomorrow, they would go up now as we bought more and more of the stock. So the very act of predicting actually affects the quality of the future outcomes. And so in a totally efficient market, the prices tomorrow can't possibly have any predictive power. If they did, we would've taken advantage of it today.</p>
</details>

这是一个**高尔顿板**（Galton Board: 一种展示正态分布的实验装置）。它有几排三角形排列的钉子，大约6000个小滚珠轴承，我可以将它们倒入钉子中。现在，每次滚珠撞击钉子时，有50%的机会向左或向右。所以每个滚珠在穿过这些钉子时都遵循随机游走，这使得预测任何单个滚珠的路径几乎不可能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is a galton board. It's got rows of pegs arranged in a triangle and around 6,000 tiny ball bearings that I can pour through the pegs. Now, each time a ball hits a peg, there's a 50 50 chance it goes to the left or the right. So each ball follows a random walk as it passes through these pegs, which makes it basically impossible to predict the path of any individual ball.</p>
</details>

但如果我把它翻过来，你会看到所有的滚珠一起总是形成一个可预测的模式。也就是说，一系列的随机游走会产生**正态分布**（Normal Distribution: 一种常见的连续概率分布，其图形呈钟形）。它以中间为中心，因为滚珠到达这里的路径数量最多。你离中心越远，滚珠到达那里的路径就越少。比如，如果你想最终到达这里，滚珠就必须一直向左、向左、向左、向左。所以只有一种方法可以到达这里，但要到达中间，滚珠可以走数千条路径。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if I flip this over, what you can see is that all the balls together always create a predictable pattern. That is a collection of random walks creates a normal distribution. It's centered around the middle because the number of paths a ball could take to get here is the greatest. And the further out you go, the fewer the paths a ball could take to get there. Like if you want to end up here, well the ball would have to go left, left, left, left all the way down. So there's only one way to get here, but to get into the middle, there are thousands of paths that a ball could take.</p>
</details>

巴舍利耶认为股票价格就像一个滚珠穿过高尔顿板。每增加一层钉子代表一个时间步长。所以短时间内，股票价格只能小幅上涨或下跌，但随着时间的推移，可能的价格范围会更广。根据巴舍利耶的说法，股票的预期未来价格由以当前价格为中心的正态分布来描述，并随时间扩散。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, Bachelier believed a stock price is just like a ball going through a galton board. Each additional layer of pegs represents a time step. So after a short time, the stock price could only move up or down a little, but after more time, a wider range of prices is possible. According to Bachelier the expected future price of a stock is described by a normal distribution, centered on the current price which spreads out over time.</p>
</details>

巴舍利耶意识到他重新发现了精确描述热量如何从高温区域辐射到低温区域的方程。这最初是由约瑟夫·傅里叶（Joseph Fourier）在1822年发现的。所以巴舍利耶将他的发现称为“概率的辐射”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Bachelier realized he had rediscovered the exact equation which describes how heat radiates from regions of high temperature to regions of low temperature. This was first discovered by Joseph Fourier back in 1822. So Bachelier called his discovery the radiation of probabilities.</p>
</details>

由于他写的是关于金融的文章，物理学界并没有注意到，但随机游走的数学将继续解决物理学中一个近一个世纪的谜团。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Since he was writing about finance, the physics community didn't take any notice, but the mathematics of the random walk would go on to solve an almost century old mystery in physics.</p>
</details>

### 布朗运动与爱因斯坦：原子的舞蹈

1827年，苏格兰植物学家罗伯特·布朗（Robert Brown）在显微镜下观察花粉粒时，他注意到显微镜载玻片上悬浮在水中的颗粒在随机移动。因为他不知道这是否与花粉是活体物质有关，他测试了非有机颗粒，如火山灰和陨石岩石的灰尘。同样，他看到它们以相同的方式移动。所以布朗发现，任何足够小的颗粒都会表现出这种随机运动，这被称为**布朗运动**（Brownian Motion: 悬浮在液体或气体中的微小颗粒所做的永不停止的随机运动）。但其原因仍然是个谜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1827, Scottish botanist Robert Brown was looking at pollen grains under the microscope, and he noticed that the particles suspended in water on the microscope slide were moving around randomly. Because he didn't know whether it was something to do with the pollen being living material, He tested non-organic particles such as dust from lava and meteorite rock. Again, he saw them moving around in the same way. So Brown discovered that any particles, if they were small enough, exhibited this random movement, which came to be known as Brownian motion. But what caused it remained a mystery.</p>
</details>

80年后，在1905年，爱因斯坦（Einstein）找出了答案。在过去的几百年里，气体和液体由分子组成的观点越来越流行。但并非所有人都相信分子在物理意义上是真实存在的，只是认为这个理论解释了许多观察结果。这个想法促使爱因斯坦假设布朗运动是由每时每刻从各个方向撞击颗粒的数万亿分子引起的。偶尔，从一侧撞击的分子会多于另一侧，颗粒就会暂时跳动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">80 years later in 1905, Einstein figured out the answer. Over the previous couple hundred years, the idea that gases and liquids were made up of molecules became more and more popular. But not everyone was convinced that molecules were real in a physical sense. Just that the theory explained a lot of observations. The idea led Einstein to hypothesize that Brownian motion is caused by the trillions of molecules hitting the particle from every direction, every instant. Occasionally, more will hit from one side than the other, and the particle will momentarily jump.</p>
</details>

为了推导数学模型，爱因斯坦假设作为观察者，我们无法确定地看到或预测这些碰撞。因此，在任何时候，我们都必须假设颗粒向任何一个方向移动的可能性是均等的。所以，就像股票价格一样，微观粒子也像滚珠在高尔顿板上落下一样移动，颗粒的预期位置由正态分布描述，并随时间变宽。这就是为什么即使在完全静止的水中，微观粒子也会扩散开来。这被称为**扩散**（Diffusion）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To derive the mathematics, Einstein supposed that as an observer we can't see or predict these collisions with any certainty. So at any time we have to assume that the particle is just as likely to move in one direction as an another. So just like stock prices, microscopic particles move like a ball falling down a galton board, the expected location of a particle is described by a normal distribution, which broadens with time. It's why even in completely still water, microscopic particles spread out. This is diffusion.</p>
</details>

通过解决布朗运动之谜，爱因斯坦找到了原子和分子存在的确凿证据。当然，他并不知道巴舍利耶在五年前就已经发现了随机游走。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By solving the Brownian motion mystery. Einstein had found definitive evidence that atoms and molecules exist. Of course, he had no idea that Bachelier had uncovered the random walk five years earlier.</p>
</details>

当巴舍利耶完成博士论文时，他终于找到了为期权定价的数学方法。回想一下，对于看涨期权，如果股票的未来价格低于行权价，你将损失为期权支付的溢价。但如果股票价格高于行权价，你将获得差价，并且如果股票上涨幅度超过你为期权支付的费用，你将获得净利润。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By the time Bachelier finished his PhD, he had finally figured out a mathematical way to price an option. Remember that with a call option, if the future price of a stock is less than the strike price, then you lose the premium paid for the option. But if the stock price is greater than the strike price, you pocket that difference and you make a net profit if the stock has gone up by more than you paid for the option.</p>
</details>

所以期权买方获利的概率是价格上涨幅度超过其支付价格的概率，即图中的绿色阴影区域。而卖方赚钱的概率是价格保持足够低，以至于买方赚不到超过他们支付的金额的概率，即红色阴影区域。通过将利润或损失乘以每种结果的概率，巴舍利耶计算出了期权的预期回报。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the probability that an option buyer makes a profit is the probability that the price increases by more than the price paid for it, which is the green shaded area. And the probability that the seller makes money is just the probability that the price stays low enough that the buyer doesn't earn more than they paid for it. This is the red shaded area. Multiplying the profit or loss by the probability of each outcome, Bachelier calculated the expected return of an option.</p>
</details>

那么它的价格应该定多少呢？如果期权价格过高，没有人会想买。反之，如果价格过低，每个人都会想买。巴舍利耶认为，公平价格是使买卖双方的预期回报相等的价格。双方都应该获得或损失相同的金额。这就是巴舍利耶关于如何准确为期权定价的洞察。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now how much should it cost? If the price of an option is too high, no one will wanna buy it. Conversely, if the price is too low, everyone will want to buy it. Bachelier argued that the fair price is what makes the expected return for buyers and sellers equal. Both parties should stand to gain or lose the same amount. That was Bachelier's insight into how to accurately price an option.</p>
</details>

当巴舍利耶完成他的论文时，他比爱因斯坦更早发明了随机游走，并解决了困扰期权交易员数百年的问题。但没有人注意到。物理学家不感兴趣，交易员也还没准备好。关键缺失的是一种赚大钱的方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When Bachelier finished his thesis, he had beaten Einstein to inventing the random walk and solved the problem that had eluded options traders for hundreds of years. But no one noticed. The physicists were uninterested and traders weren't ready. The key thing missing was a way to make a ton of money.</p>
</details>

### 赞助商信息

我不知道股票交易员是如何在数十亿美元的资金押注于“人类的疯狂”时安然入睡的，但我睡得很好，这要归功于本视频的赞助商Eight Sleep。我最近搬到了澳大利亚，天气一直很热，但我使用**Eight Sleep Pod**（Eight Sleep的智能床垫套产品）在夜间保持凉爽。它是一个智能床垫套，可以控制床的温度并跟踪你的睡眠质量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hey, so I'm not sure how stock traders sleep at night with billions of dollars riding on the madness of people, but I have been sleeping just fine, thanks to the sponsor of this video, Eight Sleep. I've recently moved to Australia and it has been really hot, but I've been keeping cool at night using the Eight Sleep Pod. It's a smart mattress cover that can control the temperature of the bed and track how well you sleep.</p>
</details>

你可以将温度设置为你喜欢的任何值，从大约13摄氏度一直到43摄氏度。我妻子喜欢比我暖和一点，所以我们各自在床的自己一侧设置自己的温度非常有用。如果你不知道什么最适合你，Pod会学习你的理想温度，并通过其自动驾驶功能在整个夜晚进行优化。通常这意味着在夜间开始时会降低几度，然后在早上变暖以帮助你醒来。你还可以让它通过轻微的振动唤醒你，这非常令人愉快，而且不会像恼人的手机铃声那样打扰你的伴侣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can set the temperature to whatever you like from around 13 degrees Celsius, all the way up to 43 degrees Celsius, and my wife likes it a little warmer than I do, so it's useful that we can each have our own temperature on our own side of the bed. And if you don't know what works best for you, well the Pod will learn your ideal temperature and optimize it throughout the night using its autopilot. And usually that means getting a couple of degrees cooler during the start of the night and then warming up in the morning to help you wake up. You can also have it wake you with a slight vibration, which is really pleasant and it doesn't disturb your partner like an annoying phone sound.</p>
</details>

我一直在跟踪使用Pod前后的睡眠情况，我发现自从使用Pod以来，我睡得更久，醒来的次数也更少。所以如果你想亲自尝试一下，请点击描述中的链接，再次感谢Eight Sleep赞助本视频的这一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, I've been tracking my sleep before and after using the Pod, and I've found that I've been sleeping longer and waking up less since using the Pod. So if you wanna try it out for yourself, click on the link in the description and thanks again to Eight Sleep for sponsoring this part of the video.</p>
</details>

### 击败赌场与市场：爱德华·索普的对冲策略

在20世纪50年代，一位名叫埃德·索普（Ed Thorpe）的年轻物理学毕业生正在洛杉矶攻读博士学位，但几小时车程之外的拉斯维加斯正迅速成为世界赌博之都，索普看到了发财的机会。他前往拉斯维加斯，坐到二十一点牌桌旁。那时，荷官只使用一副牌，所以索普可以记住他看到的每一张牌。这使他能够计算出自己是否占优势。当胜算对他有利时，他会押注更大比例的资金，不利时则押注较少。他发明了**算牌**（Card Counting: 在纸牌游戏中跟踪已发出的牌，以确定剩余牌组中对玩家有利的牌的概率）方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the 1950s, a young physics graduate, Ed Thorpe, was doing his PhD in Los Angeles, but a few hours drive away, Las Vegas was quickly becoming the gambling capital of the world, and Thorpe saw a way to make a fortune. He headed to Vegas and sat down at the blackjack table, back then, the dealer only used a single deck of cards, so Thorpe could keep a mental note of all the cards that had been played as he saw them. This allowed him to work out if he had an advantage. He would bet a bigger portion of his funds when the odds were in his favor and less when they weren't. He had invented card counting.</p>
</details>

考虑到二十一点以各种形式存在了数百年，这是一项了不起的创新，并且在一段时间内，这让他赚了很多钱。但赌场很快就识破了他的策略，他们增加了游戏中的牌组数量，以减少算牌的好处。于是索普带着他的 winnings 前往他所谓的“地球上最大的赌场”：股市。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is a remarkable innovation, considering blackjack had been around in various forms for hundreds of years, and for a while this made him a lot of money. But the casinos got wise to his strategy and they added more decks of cards to the game to reduce the benefit of card counting. So Thorpe took his winnings to what he called the biggest casino on Earth: the stock market.</p>
</details>

他创立了一家对冲基金，在20年内每年实现20%的回报，这是当时有史以来最好的业绩。他通过将他在二十一点牌桌上磨练的技能转移到股市来实现这一目标。索普开创了一种对冲类型，一种通过平衡或补偿性交易来防止损失的方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He started a hedge fund that would go on to make a 20% return every year for 20 years, the best performance ever seen at that time. And he did it by transferring the skills he honed at the blackjack table to the stock market. Thorpe pioneered a type of hedging, a way to protect against losses with balancing or compensating transactions.</p>
</details>

“索普用数学方法做到了这一点。他审视了输赢的几率，并决定在某些条件下，你可以通过使用某些模式来下注，从而将胜算倾向于自己。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Thorpe did it mathematically. He looked at the odds of winning and losing and decided that under certain conditions you can actually tilt the odds in your favor by using certain patterns to be able to make bets.</p>
</details>

假设鲍勃卖给爱丽丝一份股票的看涨期权，假设股票价格上涨了，所以现在爱丽丝的期权处于“价内”状态。那么现在每当股票价格上涨1美元，鲍勃就会损失1美元，但他可以通过持有一单位股票来消除这种风险。这样，如果价格上涨，他会从期权中损失1美元，但从股票中赚回1美元。如果股票价格跌回爱丽丝的“价外”状态，他就卖出股票，这样他也不会冒任何损失的风险。这被称为**动态对冲**（Dynamic Hedging: 持续调整对冲头寸以维持风险敞口不变的策略）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Suppose Bob sells Alice a call option on a stock, and let's say the stock has gone up, so now it's in the money for Alice. Well now for every additional $1, the stock price goes up, Bob will lose $1, but he can eliminate this risk by owning one unit of stock. Then if the price goes up, he would lose $1 from the option but gain that dollar back from the stock. And if the stock drops back outta the money for Alice, he sells the stock so he doesn't risk losing any money from that either. This is called dynamic hedging.</p>
</details>

这意味着鲍勃可以以最小的股票价格波动风险获得利润。在任何时候，一个对冲组合π都会用一定数量的股票**德尔塔**（Delta: 期权价格相对于标的资产价格变化的敏感度）来抵消期权V。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It means Bob can make a profit with minimal risk from fluctuating stock prices. A hedge portfolio pi at any one time will offset the option V with some amount of stock delta.</p>
</details>

“这基本上意味着我可以卖给你一些东西，而无需承担交易的另一方。你可以这样理解：我为你合成制造了一个期权。我通过动态交易、动态对冲，凭空创造了它。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- It basically means I can sell you something without having to take the opposite side of the trade. And the way to think about it is I have synthetically manufactured an option for you. I've created it out of nothing by doing dynamic trading. Dynamic hedging.</p>
</details>

正如我们在鲍勃的例子中看到的，德尔塔，即他必须持有的股票数量，会根据当前价格而变化。从数学上讲，它代表了当前期权价格随股票价格变化而变化的幅度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As we saw with Bob's example delta, the amount of stock he has to hold, changes depending on current prices. Mathematically, it represents how much the current option price changes with a change in the stock price.</p>
</details>

但索普对巴舍利耶的期权定价模型并不满意。毕竟，股票价格并非完全随机。如果公司经营良好，它们可能会随时间上涨；如果经营不善，则可能下跌。巴舍利耶的模型忽略了这一点。所以索普提出了一个更准确的期权定价模型，该模型考虑了这种趋势。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But Thorpe wasn't satisfied with Bachelier's model for pricing options. I mean, for one thing, stock prices aren't entirely random. They can increase over time if the business is doing well or fall if it isn't. Bachelier's model ignored this. So Thorpe came up with a more accurate model for pricing options, which took this drift into account.</p>
</details>

“我实际上在1967年中期就想出了这个模型，我决定只为自己使用它，后来我一直对我的投资者保密。其目的是为所有人赚取大量资金。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I actually figured out what this model was back in the middle of 1967, and I decided that I would just use it for myself and then later I kept it quiet for my own investors. The idea was to basically make a lot of money out of it for everybody.</p>
</details>

他的策略是，如果根据他的模型，期权价格便宜，就买入。如果被高估，就**卖空**（Short Sell: 借入并出售股票，希望未来以更低价格买回以获利），即做空。这样，他往往会站在交易的赢家一边。这种情况一直持续到1973年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">His strategy was if the option was going cheap, according to his model, buy it. If it was overvalued, short sell it, that is bet against it. And that way, more often than not, he would end up on the winning side of the trade. This lasted until 1973.</p>
</details>

### 万亿美元方程式：布莱克-斯科尔斯-默顿模型的诞生

那一年，费舍尔·布莱克（Fischer Black）和迈伦·斯科尔斯（Myron Scholes）提出了一个改变行业的方程式。罗伯特·默顿（Robert Merton）独立发表了他自己的版本，该版本基于**随机微积分**（Stochastic Calculus: 处理随机过程的数学分支），因此他也获得了认可。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In that year, Fischer Black and Myron Scholes came up with an equation that changed the industry. Robert Merton independently published his own version, which was based on the mathematics of stochastic calculus, so he is also credited.</p>
</details>

“我以为这个领域会由我独占，但不幸的是，费舍尔·布莱克和迈伦·斯科尔斯发表了这个想法，而且他们的模型比我做得更好，因为他们的推导背后有非常严密的数学。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I thought I'd have the field to myself, but unfortunately, Fischer Black and Myron Scholes published the idea and they did a better job of the model than I did because they had very tight mathematics behind their derivation</p>
</details>

像巴舍利耶一样，他们认为期权价格应该为买卖双方提供公平的赌注，但他们的方法是全新的。他们说，如果有可能构建一个像索普用德尔塔对冲那样，由期权和股票组成的无风险投资组合，那么在一个有效、公平的市场中，这个投资组合的回报不应超过**无风险利率**（Risk-free Rate: 理论上无风险投资（如政府债券）的预期回报率），即同样的资金投资于最安全的资产（如**美国国债**，US Treasury Bonds）所能获得的收益。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like Bachelier, they thought that option prices should offer a fair bet to both buyers and sellers, but their approach was totally new. They said if it was possible to construct a risk-free portfolio of options and stocks just like Thorpe was doing with his delta hedging, then in an efficient market, a fair market, this portfolio should return nothing more than the risk-free rate, what the same money would earn if invested in the safest asset, US treasury bonds.</p>
</details>

这个假设是，如果你不承担任何额外的风险，那么就不可能获得任何额外的回报。为了描述股票价格随时间的变化，布莱克、斯科尔斯和默顿使用了巴舍利耶模型的改进版本，就像索普一样。这表明在任何时候，我们都预期股票价格会随机波动，再加上一个普遍的上涨或下跌趋势，即漂移。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The assumption was that if you're not taking on any additional risk, then it shouldn't be possible to receive any extra returns. To describe how stock prices change over time, Black, Scholes, and Merton used an improved version of Bachelier's model just like Thorpe. This says that at any time we expect the stock price to move randomly, plus a general trend up or down, the drift.</p>
</details>

通过结合这两个方程，布莱克、斯科尔斯和默顿得出了金融界最著名的方程。它将任何类型的合约价格与任何资产（股票、债券等等）联系起来。他们发表这个方程的同年，芝加哥期权交易所（Chicago Board Options Exchange）成立了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By combining these two equations, Black, Scholes, and Merton came up with the most famous equation in finance. It relates the price of any kind of contract to any asset, stocks, bonds, you name it. The same year they published this equation, the Chicago Board Options Exchange was founded.</p>
</details>

为什么这个方程如此重要？对于金融业来说，它如何改变了游戏规则？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why is that equation so important? Like for finance, how did that change the game?</p>
</details>

“嗯，因为当你解这个偏微分方程时，你会得到一个期权价格的显式公式，它是许多输入参数的函数。这是有史以来第一次，你现在有了一个显式表达式，你可以插入参数，然后弹出一个数字，这样人们就可以实际使用它进行交易。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Well, because when you solve that partial differential equation, you get an explicit formula of the price of the option as a function of a bunch of these input parameters. And for the very first time, you now have an explicit expression where you plug in the parameters and out pops this number so that people can actually use it to trade on.</p>
</details>

这导致了社会科学领域学术思想被工业界采纳最快的案例之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This led to one of the fastest adoptions by industry of an academic idea in all of the social sciences.</p>
</details>

### 衍生品市场的爆炸式增长与影响

仅仅几年内，布莱克-斯科尔斯公式就被华尔街采纳为期权交易的基准。交易所交易期权市场爆发式增长，现在是一个万亿美元的产业，这个市场的交易量大约每五年翻一番。所以这相当于金融界的摩尔定律。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Within just a couple of years, the Black Scholes formula was adopted as the benchmark for Wall Street for trading options. The exchange traded options market has exploded and it's now a multi-trillion dollar industry, the volume in this market has been doubling roughly every five years. So this is the financial equivalent of Moore's Law.</p>
</details>

还有其他业务也以同样快的速度增长，比如信用违约互换市场、场外衍生品市场、证券化债务市场。所有这些都是万亿美元的产业，它们以这样或那样的形式利用了布莱克-斯科尔斯-默顿期权定价的思想。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are other businesses that have grown just as quickly, like credit default swaps market, the OTC derivatives market, the securitized debt market. All of these are multi-trillion dollar industries that in one form or another make use of the idea of Black Scholes Merton option pricing.</p>
</details>

这开辟了一种全新的对冲任何风险的方式，而且不仅限于对冲基金。如今，几乎所有大型公司、政府，甚至个人投资者都使用期权来对冲他们自己的特定风险。假设你经营一家航空公司，你担心油价上涨会侵蚀你的利润。那么，使用布莱克-斯科尔斯-默顿方程，有一种方法可以准确有效地对冲这种风险。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This opened up a whole new way to hedge against anything, and not just for hedge funds. Nowadays, pretty much every large company, governments, and even individual investors use options to hedge against their own specific risks. Suppose you're running an airline and you're worried that an increase in oil prices would eat into your profits. Well, using the Black Scholes Merton equation, there's a way to accurately and efficiently hedge that risk.</p>
</details>

你为购买追踪油价的期权定价，如果油价上涨，该期权就会盈利，这将有助于弥补你必须支付的更高燃料成本。所以布莱克-斯科尔斯-默顿模型可以帮助降低风险，但它也可以提供杠杆。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You price an option to buy something that tracks the price of oil, and that option will pay off if oil prices go up, and that will help compensate you for the higher cost of fuel you have to pay. So Black Scholes Merton can help reduce risk, but it can also provide leverage.</p>
</details>

“看涨的日内交易者和做空股票的对冲基金做空者之间正在进行一场持续的战斗，GameStop股票现在已经上涨了约700%。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- An ongoing battle between bullish day traders and hedge fund short sellers that have bet against the stock, GameStop shares, have now risen some 700%.</p>
</details>

“嗯，GameStop是一个非常有趣的例子，原因有很多，但期权在这个例子中扮演了重要角色，因为Reddit子频道r/wallstreetbets上的一小群用户决定，那些做空股票并押注公司会倒闭的对冲基金经理需要受到惩罚。于是他们购买了GameStop股票，试图推高价格。结果发现，仅仅购买股票是不够的，因为用一美元现金，你可以购买一美元的股票，但用一美元现金，你可以购买影响远超一美元股票价值的期权，在某些情况下，一美元的期权可能影响价值10或20美元的股票。因此，这些证券中嵌入了天然的杠杆。所以，同时购买股票和期权导致价格迅速上涨。这使得这些对冲基金经理迅速损失了大量资金。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Well, GameStop is a really interesting example for all sorts of reasons, but options figured prominently in that example because a small cadre of users on this Reddit sub-channel r/wallstreetbets decided that the hedge fund managers that were shorting the stock and betting that the company would go out of business needed to be punished. And so they bought shares of GameStop stock to try to drive up price. Turns out that buying the stock was not enough, because with a dollar's worth of cash, you can buy a dollar's worth of stock, but with a dollar's worth of cash, you can buy options that affected many more than a dollar's worth of stock, perhaps in some cases $10 or $20 worth of stock for a dollar's worth of options. And so there's natural leverage embedded in these securities. And so the combination of buying both the stock and the options caused the prices to rise very quickly. And what that did was to cause these hedge fund managers to lose a lot of money quickly.</p>
</details>

衍生品市场有多大？这个源自布莱克-斯科尔斯-默顿模型的整个领域有多大？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- How big is this market for derivatives? How big is this whole area that kind of comes out of Black Scholes Merton?</p>
</details>

“关于衍生品市场规模的估计有很多，首先，让我们明确什么是衍生品。衍生品是一种金融证券，其价值来源于另一种金融证券。所以期权就是衍生品的一个例子。总的来说，全球衍生品市场的规模约为数百万亿美元。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- There are estimates of how large derivatives markets are, and first, let's be clear what a derivative is. A derivative is a financial security whose value derived from another financial security. So an option is an example of a derivative. In general, the size of derivative markets globally is the on the order of several hundred trillion dollars.</p>
</details>

这与它们所基于的标的证券的规模相比如何？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- How does that compare to the size of the underlying securities they're based on?</p>
</details>

“是标的证券的数倍。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- It's multiples of the underlying securities.</p>
</details>

我不得不打断一下，因为基于某种事物的事物所承载的资金比事物本身还要多，这似乎有点疯狂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I just have to interrupt because it seems kind of crazy that you have more money riding on the things that are based on the thing than the thing itself.</p>
</details>

“没错。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- That's right.</p>
</details>

那么，这有什么意义呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So tell me how that makes any sense.</p>
</details>

“因为期权允许你将标的物变成5个、10个、20个、50个事物。所以我们称之为期权和衍生品的这些纸片，它们基本上允许我们创造许多许多不同版本的标的资产，这些版本因为个人自身的风险回报偏好而更受欢迎。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Because what options allow you to do is to take the underlying thing and turn it into 5, 10, 20, 50 things. So these pieces of paper that we call options and derivatives, they basically allow us to create many, many different versions of the underlying asset, versions that individuals find more palatable because of their own risk reward preferences.</p>
</details>

### 市场稳定性与风险：衍生品的双刃剑

这会使市场和全球经济更稳定、更不稳定，还是没有影响？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Does this make the markets and the global economy more stable, or less stable, or no effect?</p>
</details>

“三者皆有。事实证明，在正常时期，这些市场是流动性的重要来源，因此也带来了稳定性。在异常时期，我的意思是当市场出现压力时，所有这些证券都可能朝一个方向发展，通常是下跌，当它们一起下跌时，就会造成一场巨大的市场崩溃。因此，在这些情况下，衍生品市场可能会加剧这类市场错位。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- All three. So it turns out that during normal times, these markets are a very significant source of liquidity and therefore stability. During abnormal times, by that I mean when there are periods of market stress, all of these securities can go in one direction, typically down, and when they go down together, that creates a really big market crash. So in those circumstances, derivatives markets can exacerbate these kinds of market dislocations.</p>
</details>

1997年，默顿和斯科尔斯被授予诺贝尔经济学奖。布莱克因其贡献而获得认可，但不幸的是，他已于两年前去世。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1997, Merton and Scholes were awarded the Nobel Prize in economics. Black was acknowledged for his contributions, but unfortunately he had passed away just two years earlier.</p>
</details>

“我们本可以在期权上赚大钱，但现在布莱克和斯科尔斯已经把秘密告诉了所有人。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- We were gonna make a lot of money in options, but now Black and Shoals have told everybody what the secret is.</p>
</details>

随着期权定价公式公之于众，对冲基金将需要发现更好的方法来寻找市场效率低下之处。这时，吉姆·西蒙斯登场了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With the option pricing formula now out for everyone to see hedge funds would need to discover better ways to find market inefficiencies. Enter Jim Simons.</p>
</details>

### 詹姆斯·西蒙斯与文艺复兴科技：超越有效市场

在西蒙斯接触股市之前，他是一名数学家。他在**黎曼几何**（Riemann Geometry: 几何学的一个分支，研究光滑流形上的度量和曲率）方面的工作对数学和物理学的许多领域都至关重要，包括**纽结理论**（Knot Theory: 研究三维空间中闭合曲线的数学分支）、**量子场论**（Quantum Field Theory: 结合量子力学和狭义相对论的理论框架）和**量子计算**（Quantum Computing: 利用量子力学现象进行计算的新型计算范式）。**陈-西蒙斯理论**（Chern-Simons Theory: 量子场论中的一种拓扑理论）为弦理论奠定了数学基础。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before Simons had any exposure to the stock market, he was a mathematician. His work on Riemann geometry was instrumental in many areas of mathematics and physics, including knot theory, quantum field theory, and quantum computing Chern Simon's theory laid the mathematical foundation for string theory.</p>
</details>

1976年，美国数学学会授予他奥斯瓦尔德·维布伦几何奖。但在学术生涯的巅峰，西蒙斯开始寻找新的挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1976, the American Mathematical Society presented him with the Oswald Veblen Prize in geometry. But at the top of his academic career, Simons went looking for a new challenge.</p>
</details>

当他于1978年创立**文艺复兴科技**（Renaissance Technologies）时，他的策略是利用**机器学习**（Machine Learning: 人工智能的一个分支，使计算机系统通过数据学习并改进性能）来发现股市中的模式。模式提供了赚钱的机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When he founded Renaissance Technologies in 1978, his strategy was to use machine learning to find patterns in the stock market. Patterns provide opportunities to make money.</p>
</details>

“真正重要的是收集大量数据，早期我们不得不手工获取，我们去了美联储，复制了利率历史等等，因为当时这些数据在电脑上还不存在。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- The real thing was to gather a tremendous amount of data and we had to get it by hand in the early days, we went down to the Federal Reserve and copied interest rate histories and stuff like that 'cause it didn't exist on computers.</p>
</details>

他的理由是市场过于复杂，任何人都无法确定地做出预测。但西蒙斯在冷战期间曾为美国国防分析研究所工作，通过从海量数据中提取模式来破解俄罗斯密码。西蒙斯坚信类似的方法可以击败市场。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">His rationale was that the market is far too complex for anyone to be able to make predictions with certainty. But Simons had worked for the US Institute for Defense Analysis during the Cold War, breaking Russian codes by extracting patterns from masses of data. Simons was convinced that a similar approach could beat the market.</p>
</details>

然后他利用他的学术人脉，雇佣了一批他能找到的最优秀的科学家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He then used his academic contacts to hire a bunch of the best scientists he could find.</p>
</details>

“你当时的招聘标准是什么？如果他们对金融一无所知，你在他们身上寻找什么特质？一个拥有物理学博士学位，毕业五年，写了几篇好论文，显然很聪明的人，或者天文学、数学或统计学背景的人。一个在科学领域做得很好的人。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- What was your employment criteria then? If they knew nothing about finance, what were you looking for in them? Someone with a PhD in physics and who'd had five years out and had written a few good papers and was obviously a smart guy or in astronomy or in mathematics or in statistics. Someone who had done science and done it well.</p>
</details>

数学家和物理学家参与这个领域并不奇怪。首先，金融行业的薪水远高于数学助理教授。对于许多数学家来说，期权定价的美妙之处与他们在职业生涯中做的任何其他事情一样引人入胜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- It's not surprising that mathematicians and physicists are involved in this field. First of all, finance pays a lot better than, you know, being an assistant professor of mathematics. And for a number of mathematicians, the beauty of option pricing is equally compelling to anything else that they're doing in their professions.</p>
</details>

其中一位是伦纳德·鲍姆（Leonard Baum），**隐马尔可夫模型**（Hidden Markov Models: 一种统计模型，用于描述一个含有隐性未知参数的马尔可夫过程）的先驱。正如爱因斯坦意识到，虽然我们无法直接观察原子，但可以通过它们对花粉粒的影响来推断它们的存在，隐马尔可夫模型旨在找到那些无法直接观察到，但确实对我们能观察到的事物产生影响的因素。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of these was Leonard Baum, a pioneer of Hidden Markov models. Just as Einstein realized that although we can't directly observe atoms, we can infer their existence through their effect on pollen grains, Hidden Markov models aim to find factors that are not directly observable, but do have an effect on what we can observe.</p>
</details>

此后不久，文艺复兴科技推出了他们现在著名的大奖章基金。利用隐马尔可夫模型和其他数据驱动的策略，大奖章基金成为有史以来回报率最高的投资基金。这促使加州大学洛杉矶分校的布拉德福德·康奈尔（Bradford Cornell）在他的论文《大奖章基金：终极反例？》中得出结论，也许有效市场假说本身是错误的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And soon after that, Renaissance launched their now-famous Medallion fund. Using hidden Markov models and other data driven strategies, The Medallion fund became the highest returning investment fund of all time. This led Bradford Cornell of UCLA, in his paper Medallion Fund: The Ultimate Counterexample? to conclude that maybe the efficient market hypothesis itself is wrong.</p>
</details>

“1988年，我发表了一篇测试美国股市的论文，我发现这个假说是错误的。你实际上可以在数据中拒绝这个假说。所以股市中存在可预测性。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- In 1988, I published a paper testing it, the US Stock Market, and what I found was that the hypothesis is false. You can actually reject the hypothesis in the data. And so there are predictabilities in the stock market.</p>
</details>

所以你是在说，击败市场是可能的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So it's possible to beat the market is what you're saying.</p>
</details>

“是的，如果你有正确的模型、正确的训练、资源、计算能力等等，那么击败市场是可能的。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- It's possible to beat the market if you have the right models, the right training, the resources, the computational power, and so on and so forth, yes.</p>
</details>

### 市场效率的终极追求

那些在股市中发现模式，以及随机性的人，往往是物理学家和数学家，但他们的影响远不止于让他们致富。通过建模市场动态，他们为风险提供了新的见解，并开辟了全新的市场。他们确定了衍生品的准确价格，并在此过程中帮助消除了市场效率低下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The people who have found the patterns in the stock market, and the randomness for that matter, have often been physicists and mathematicians, but their impact has gone beyond just making them rich. By modeling market dynamics, they've provided new insight into risk and opened up whole new markets. They've determined what the accurate price of derivatives should be, and in doing so, they have helped eliminate market inefficiencies.</p>
</details>

讽刺的是，如果我们能够发现股市中所有的模式，了解它们将使我们能够消除它们。那时，我们最终将拥有一个完全有效的市场，所有价格变动都将是真正随机的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ironically, if we are ever able to discover all the patterns in the stock market, knowing what they are will allow us to eliminate them. Then we will finally have a perfectly efficient market where all price movements are truly random.</p>
</details>