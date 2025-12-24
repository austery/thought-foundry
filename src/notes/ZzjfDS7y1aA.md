---
area: market-analysis
category: finance
companies_orgs:
- Jane Street
- Securities and Exchange Board of India
- Millennium Management
- National Stock Exchange
- Futures Industry Association
- Tello Mobile
date: '2025-07-11'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The Economist
- Financial Times
people:
- Matt Levine
- Robin Wigglesworth
- Ananth Narayan
products_models:
- BANKNIFTY
- S&P 500
project:
- investment-strategy
- systems-thinking
- market-cycles
series: ''
source: https://www.youtube.com/watch?v=ZzjfDS7y1aA
speaker: Patrick Boyle
status: evergreen
summary: 本文深入探讨了量化交易巨头 Jane Street 在印度衍生品市场遭遇的监管风波。Jane Street 在印度市场两年内获利43亿美元后，被印度证券交易委员会（SEBI）指控通过“邪恶计划”操纵指数，并被禁止交易。文章分析了印度衍生品市场独特的零售主导、高杠杆特征，以及套利与操纵之间模糊的界限。同时，也揭示了印度散户投资者在该市场中遭受的巨额损失，并呈现了监管机构与交易公司对此事件的不同观点，引发了对快速增长市场中算法交易监管的深刻思考。
tags:
- financial-regulation
- investment
- loss
- market
title: Jane Street 在印度赚取数十亿美元后被禁：套利与操纵的界限
---

### 印度衍生品市场的独特生态与Jane Street的崛起

在印度的股票市场，可谓是“尾巴摇狗”。**衍生品交易**（Derivatives trading: 金融合约，其价值来源于标的资产，如股票或指数）不仅与**现金股票**（Cash equities: 指直接买卖公司股票的交易）交易量不相上下，甚至远远超过后者。衍生品交易额是现金股票交易额的300多倍。这种由大量热衷于**期权**（Options: 一种金融衍生品，赋予持有人在未来某个时间以特定价格买入或卖出标的资产的权利，而非义务）的**零售交易者**（Retail traders: 指非专业投资者，通常是个人投资者）推动的倒挂现象，在全球其他任何地方都前所未有。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In India’s stock market, the tail wags the dog. Derivatives trading doesn’t just rival cash equities, it dwarfs it. Derivatives turnover is more than 300 times higher than cash equities turnover. This inversion, driven by an army of options-hungry retail traders, is unmatched anywhere else in the world.</p>
</details>

这种不平衡创造了一个市场，其中到期日的股价波动可能受到少数精准交易的巨大影响，而散户投资者——通常使用100倍**杠杆**（Leverage: 使用借入资金进行投资，以放大潜在回报和风险）进行交易——则进行着疯狂的押注。在这样的市场中，速度、规模和精确性会获得丰厚回报。因此，对于像 Jane Street 这样的**量化交易公司**（Quant trading firm: 利用数学模型和算法进行交易的公司）而言，印度的期权交易一直是一座金矿，在过去两年中为该公司带来了超过40亿美元的利润。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This imbalance created a market where expiry-day price movements could be dramatically influenced by a handful of well-timed trades, and where retail investors—often trading with 100 times leverage—make wild bets. In a market like this, speed, scale, and precision are highly rewarded, so for sophisticated trading firms like Jane Street, Indian options trading has been a goldmine, netting the firm more than four billion dollars in profits over the last two years.</p>
</details>

然而，好景不长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Until it wasn’t.</p>
</details>

上周，印度金融监管机构——印度证券交易委员会（Securities and Exchange Board of India，简称 SEBI）——指控 Jane Street 利用这种结构性缺陷，策划了一场他们称之为“邪恶计划”的**指数操纵**（Index manipulation: 通过交易行为影响指数价格，从而从中获利）。印度证券监管机构禁止该公司进入该国市场，并命令其退还超过5.5亿美元的所谓非法所得。Jane Street 否认这些指控，并坚称其只是从事标准的**套利**（Arbitrage: 利用不同市场或不同资产之间价格差异进行交易以获取无风险利润的行为）交易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Last week, India’s financial regulator - The Securities and Exchange Board of India (known as SEBI) - accused Jane Street - a global quant trading firm that uses technology and quantitative analysis to trade - of exploiting this structural quirk to orchestrate – what they describe as a “sinister scheme” of index manipulation. India's securities regulator banned the firm from the country’s markets and ordered it to return more than $550 million dollars in alleged illegal gains. Jane Street denies these charges - and insists that it was merely engaging in standard arbitrage trades.</p>
</details>

此案不仅揭露了 Jane Street 的交易策略，也暴露了一个衍生品主导、散户投资者疯狂投机、套利与操纵界限危险模糊的市场脆弱性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The case has not just exposed Jane Streets trading strategy - it has laid bare the fragility of a market where derivatives dominate, retail investors gamble wildly, and the line between arbitrage and manipulation is dangerously thin.</p>
</details>

### 印度市场从“沉睡”到“狂热”的演变

印度市场并非一直如此。在21世纪初和2010年代初期的大部分时间里，印度股市被快速交易者视为缺乏吸引力。高昂的交易成本、严格的监管限制和基础设施不足，使得许多全球量化交易公司望而却步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was not always this way in India. For much of the 2000s and early 2010s, India’s stock markets were considered unattractive by fast paced traders. The combination of high transaction costs, regulatory restrictions, and infrastructure limitations kept many global quant firms at bay.</p>
</details>

其中最大的障碍是**证券交易税**（Securities Transaction Tax - STT: 印度对股票和衍生品交易征收的一种税），无论盈利或亏损，每笔交易都要征税。尽管按百分比计算很小，但对于依赖数千笔盘中交易的策略来说，这项税收会迅速累积。外国投资组合投资者还面临**盘中做空**（Intraday short selling: 在同一交易日内借入并卖出股票，期望在价格下跌后买回以获利）的限制，这限制了他们执行**多头/空头策略**（Long/short strategies: 同时持有股票的多头（买入）和空头（卖出）头寸以对冲风险或从相对价格变动中获利）或**市场中性策略**（Market-neutral strategies: 旨在消除市场整体波动风险的投资策略）的能力。同时，杠杆获取受到严格控制，**托管服务**（Co-location services: 将交易服务器放置在交易所数据中心附近，以减少交易延迟）也落后于全球标准。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The most significant deterrent was the Securities Transaction Tax (STT), a levy on every trade, regardless of profit or loss. While small in percentage terms this tax added up quickly for strategies that relied on thousands of intraday trades. Foreign portfolio investors also faced restrictions on intraday short selling, limiting their ability to run long/short or market-neutral strategies. Meanwhile, access to leverage was tightly controlled, and co-location services lagged behind global standards.</p>
</details>

因此，印度市场主要由传统券商、只做多基金和散户投资者主导。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because of this, India’s markets were dominated by traditional brokers, long-only funds, and retail investors.</p>
</details>

这一切在2010年代末开始改变，当时**印度国家证券交易所**（National Stock Exchange，简称 NSE）开始升级其基础设施，提供更好的**API**（Application Programming Interface: 应用程序编程接口，允许不同软件系统之间进行通信）和托管服务。监管改革允许衍生品交易拥有更大的灵活性，特别是对于通过本地注册实体运营的外国投资组合投资者。最重要的是，由移动交易应用程序、**零佣金券商**（Zero-commission brokers: 不收取交易佣金的券商）和疫情期间的无聊情绪推动的散户参与爆炸式增长，将印度的衍生品市场转变为一个高交易量、高波动性的“游乐场”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This all began to change in the late 2010s when the National Stock Exchange began upgrading its infrastructure, offering better APIs and co-location services. Regulatory reforms allowed more flexibility in derivatives trading, especially for foreign portfolio investors operating through locally incorporated entities. And most importantly, the explosion of retail participation—fueled by mobile trading apps, zero-commission brokers, and pandemic-era boredom—transformed India’s derivatives market into a high-volume, high-volatility playground.</p>
</details>

印度股市从一个沉睡的“后院”变成了全球衍生品狂热的中心。尽管华尔街在股票和债券领域仍占据主导地位，但孟买的印度国家证券交易所却在全球期权交易量方面领先。根据**期货业协会**（Futures Industry Association）的数据，2024年印度占全球股票期权交易量的惊人89%，甚至超过了**标普500指数**（S&P 500）的日名义交易额。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">India's stock market went from being a sleepy backwater to the epicenter of a global derivatives frenzy. While Wall Street still dominates in equities and bonds - Mumbai’s National Stock Exchange leads the world in options trading volumes. In 2024, India accounted for a staggering 89% of global equity options volume, according to the Futures Industry Association—surpassing even the S&P 500 in daily notional turnover.</p>
</details>

这种爆炸式增长得益于散户投资者基础的激增、印度折扣券商的崛起以及**零日到期期权**（Zero-day to expiration options - 0DTE: 在创建当天到期的期权合约）的引入。这些期权合约在创建当天到期，并迅速成为印度金融领域最热门的“票证”，以最少的资本承诺快速获利。对于许多印度年轻人来说，交易期权已成为一种金融娱乐形式。不幸的是，他们的情况并不乐观……印度证券监管机构今年早些时候报告称，十分之九的印度散户交易者在市场中亏损，因此该机构公布了提高交易门槛和暂时禁止一些受年轻人追捧的**金融网红**（Finfluencers: 在社交媒体上提供金融建议的网红）的计划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This explosion has been fueled by - a surging retail investor base - the rise of discount brokerages in India, and the introduction of zero-day to expiration options. These are options contracts that expire the same day they are created and have quickly become the hottest ticket in Indian finance, offering the promise of quick profits with minimal capital. For many young Indians, trading options has become a form of financial entertainment. Unfortunately, it’s not going that well for them… India’s securities regulator reported earlier this year that nine out of ten Indian retail traders are losing money in the market – as it unveiled plans to raise barriers to trading and temporarily ban some prominent “finfluencers” that young people looked up to for financial advice.</p>
</details>

### 本周赞助商：Tello Mobile

在我们深入探讨之前，让我介绍一下本周的赞助商 Tello Mobile。如果您厌倦了为几乎不使用的电话服务支付过高的费用，Tello 可能正是您所需要的。Tello 的套餐起价仅为每月5美元，您可以根据自己的需求定制套餐，只为您实际使用的通话时长和数据付费。无论您是学生、老年人，还是经常使用 Wi-Fi 的人，Tello 都能为您提供灵活的连接方式，而无需花费巨额资金。所有套餐都包含无限短信、免费移动热点，并且永无合约。由于 Tello 运行在主要的全国性网络上，您将在美国大多数城市地区获得可靠的覆盖。需要调整计划？没问题。Tello 的按月付费结构意味着您可以随时轻松调整您的套餐。因此，如果您正在寻找一种更智能、更经济实惠的连接方式，Tello Mobile 提供灵活且经济实惠的电话套餐，价格最高每月25美元。请使用我描述中的链接查看 Tello。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before we go any further let me tell you about this weeks sponsor Tello mobile. If you're tired of overpaying for phone service you barely use, Tello might be exactly what you need. With plans starting at just $5 a month, Tello lets you build your own plan, so you only pay for the minutes and data that you actually use. Whether you're a student, a senior, or someone who's always on Wi-Fi, Tello gives you the flexibility to stay connected without breaking the bank. All plans come with unlimited texting, free mobile hotspot, and no contracts ever. And because Tello runs on a major nationwide network, you'll get reliable coverage in most urban areas across the US. Need to switch things up? No problem. Tello's month-to-month structure means that you can adjust your plan anytime, hassle-free. So, if you're looking for a smarter, more affordable way to stay connected, Tello Mobile offers flexible and affordable phone plans with prices up to $25 a month. Check out Tello using the link in my description.</p>
</details>

在过去的5到10年里，印度股市表现出强劲而持续的增长，跑赢了许多全球和新兴市场。即使是拥有全球八家万亿美元公司中七家的美国标普500指数，也未能跟上其步伐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Over the last 5 to 10 years, the Indian stock market has shown strong and consistent growth, outperforming many global and emerging markets. Not even America’s S&P 500, - home to seven of the world’s eight trillion-dollar companies, has managed to keep pace.</p>
</details>

这种优异表现使得该国股票成为全球投资者的宠儿，他们在中国国内经济放缓和与美国地缘政治紧张局势下，纷纷避开中国股票。尽管市场表现如此出色，印度散户投资者却在交易中遭受了巨大损失。根据 SEBI 本周一发布的一项研究，尽管市场呈现巨大上涨趋势，且监管机构反复警告与资金更雄厚、经验更丰富的市场参与者竞争存在高风险，但散户投资者在过去四年中总共亏损了330亿美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That outperformance has turned the country’s stocks into a favorite with global investors, who have been shunning Chinese equities amid a domestic slowdown and geopolitical tensions with the US. Despite this massive performance, Individual investors in India have managed to suffer significant losses through their trading. According to a SEBI study released this Monday, mom-and-pop traders lost a combined thirty three billion dollars over the last four years—despite the huge uptrend and repeated warnings from regulators about the high risks of competing with better-funded and more experienced market players.</p>
</details>

《**经济学人**》（The Economist）指出，印度衍生品交易的突然爆发与美国“迷因股”狂潮有许多相似之处，而后者至今尚未结束。据《经济学人》称，五年前的疫情封锁在印度催生了一代人，他们转向日内交易以摆脱无聊。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The Economist points out that the sudden explosion in derivatives trading in India has many parallels with America’s meme-stock craze – which still hasn’t ended. The Covid lockdowns five years ago – according to the Economist - spawned a generation in India who turned to day-trading to escape boredom.</p>
</details>

这些数字令人眩晕。仅去年一年，NSE 交易的指数期权名义价值就翻了一番多，达到907万亿美元。过去五年，投资者账户数量增加了两倍多，达到1.6亿以上。共同基金管理资产翻了一番，达到7060亿美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The numbers are dizzying. The notional value of index options traded on the NSE more than doubled in the last year alone to $907 trillion dollars. The number of investor accounts has tripled over the last five years to over 160 million. Mutual fund assets under management have doubled to $706 billion.</p>
</details>

失去的不仅仅是金钱，两年前，一名26岁的软件分析师在借了1.2万美元银行贷款并在交易中亏光后，从钦奈的办公楼跳下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It’s not just money that has been lost either, two years ago a 26-year-old software analyst jumped from his office building in Chennai after taking out a twelve-thousand-dollar bank loan and losing the money trading.</p>
</details>

### Jane Street的策略与监管机构的担忧

这种流动性强、波动性大且日益由散户驱动的股市环境，对全球自营交易公司极具吸引力。Jane Street 是其中最激进的公司之一。据报道，到2024年，该公司每年在印度期权交易中赚取超过10亿美元。该公司在全球最成熟市场磨练出的策略，在印度快速发展、监管相对宽松的衍生品生态系统中找到了肥沃的土壤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This stock market environment—liquid, volatile, and increasingly retail-driven—has been a magnet for global proprietary trading firms. Jane Street was amongst the most aggressive. By 2024, it was reportedly making over a billion dollars a year trading options in India. The firm’s strategies, honed in the world’s most sophisticated markets, found fertile ground in India’s fast-moving, lightly regulated derivatives ecosystem.</p>
</details>

随着利润飙升，监管机构的担忧也随之加剧。去年底，印度监管机构已经开始收紧规则，提高最低合约规模，并警告券商披露期权交易的风险。据监管机构称，他们担心的不仅仅是波动性，更是公平性。当 Jane Street 的交易开始主导**BANKNIFTY**（BANKNIFTY: 追踪印度银行业表现的股票市场指数）等关键指数的到期日交易量时，他们声称担忧进一步加深了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As profits soared, so did regulatory anxiety. India's regulators had already started tightening rules late last year, raising minimum contract sizes and warning brokers to disclose the risks of options trading. According to the regulator, their concern was not just about volatility—it was about fairness. And when Jane Street’s trades began to dominate expiry-day volumes in key indices like BANKNIFTY, they claim that their concerns deepened.</p>
</details>

Jane Street 在印度的业务始于2020年，当时它在孟买设立了当地实体。到2023年，它已成为印度衍生品市场最大的外国参与者之一。据证券监管机构称，该公司在2023年1月至2025年3月期间获得了约43亿美元的利润，其中大部分来自指数期权交易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Jane Street’s Indian operations kicked off in 2020, when it established a local entity in Mumbai. By 2023, it had become one of the largest foreign participants in India’s derivatives markets. According to the securities regulator, the firm made approximately $4.3 billion dollars in profits between January 2023 and March 2025—most of it from trading index options.</p>
</details>

直到2024年4月，当 Jane Street 在曼哈顿对竞争对手对冲基金 **Millennium Management** 提起诉讼，指控其雇佣了两名前 Jane Street 交易员时，印度发生的事情才引起了人们的关注。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Very little attention was paid to the goings on in India until April 2024 when Jane Street drew attention to themselves by filing a lawsuit in Manhattan against a rival hedge fund Millennium Management who hired two former Jane Street traders.</p>
</details>

该诉讼声称这些交易员窃取了一项“极具价值、独特且专有”的交易策略，后来 Millennium 透露该策略与印度蓬勃发展的期权市场有关。Jane Street 和 Millennium 于去年12月解决了诉讼，但印度证券监管机构似乎注意到，全球最大的两家交易公司正在争夺一项专注于其证券市场的交易策略。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The lawsuit alleged that the traders had stolen a “highly valuable, unique, and proprietary” trading strategy, which was later revealed by Millennium to relate to India’s booming options market. Jane Street and Millennium settled the lawsuit in December, but - the Indian securities regulator appears to have taken notice that two of the biggest trading firms in the world were fighting over a trading strategy focused on their securities market.</p>
</details>

到去年这个时候，印度国家证券交易所已被要求审查 Jane Street 的交易。2025年2月，SEBI 发出正式警告函，警告该公司避免在到期日进行大额持仓和操纵性交易模式。Jane Street 回应称，承诺调整其策略。但据 SEBI 称，该公司在5月恢复了类似交易，促使监管机构采取了多年来最激进的执法行动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By this time last year, India’s national stock exchange had been asked to examine Jane Street’s trades. In February 2025, SEBI issued a formal caution letter, warning the firm to refrain from large, expiry-day positions and manipulative trading patterns. Jane Street responded, promising to adjust its strategies. But according to SEBI, the firm resumed similar trades by May—prompting the regulator’s most aggressive enforcement action in years.</p>
</details>

### SEBI的指控核心：“日内指数操纵”

SEBI 案件的核心是其称之为“日内指数操纵”的策略。监管机构的分析侧重于到期日——即期权合约根据 BANKNIFTY 等指数收盘价结算的日子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At the heart of SEBI’s case is a strategy it calls “Intra-Day Index Manipulation.” The regulator’s analysis focuses on expiry days— the days when options contracts settle based on the closing value of an index like BANKNIFTY - a stock market index that tracks the performance of the banking sector in India.</p>
</details>

根据 SEBI 的说法，所谓的计划分为两个阶段，他们称之为“补丁1”和“补丁2”。在“补丁1”阶段——发生在上午——他们声称 Jane Street 大量买入 BANKNIFTY 成分股和期货，推高了指数。同时，他们据称在流动性更高的期权中建立了大量空头头寸——通过买入廉价的**看跌期权**（Put options: 赋予持有人在未来某个时间以特定价格卖出标的资产的权利）和卖出昂贵的**看涨期权**（Call options: 赋予持有人在未来某个时间以特定价格买入标的资产的权利）——监管机构声称这些价格因其在流动性较低的股票中的买入活动而被扭曲。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The alleged scheme according to SEBI – had two phases which they refer to as patch 1 and patch 2. In Patch I – which occurs in the morning – they allege that Jane Street aggressively bought large volumes of BANKNIFTY constituent stocks and futures, pushing the index higher. Simultaneously, they allegedly built massive short positions in the much more liquid options— by buying cheap Put options and selling expensive Call options —at prices which the regulators allege were distorted by their buying activity in the less liquid stocks.</p>
</details>

在“补丁2”阶段——发生在下午——一旦期权头寸到位，Jane Street 被指控反向操作，通过抛售其在流动性较低的股票和期货中的多头头寸，压低指数，从而抬高看跌期权的价值并压低看涨期权（他们做空）的价值，从而产生巨额利润。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In Patch Two – which occurs in the Afternoon - once the options positions were in place - Jane Street is accused of reversing course, by dumping their long positions in the less liquid stocks and futures - driving the index down, inflating the value of the puts and deflating the value of the calls (which they were short)—generating enormous profits.</p>
</details>

SEBI 重点关注了 Jane Street 在2024年1月17日的交易，当时 Jane Street 据称在单次交易中赚取了约8600万美元，其交易量在某些 BANKNIFTY 成分股中占市场总量的25%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">SEBI focuses in on Jane Street’s trades on January 17, 2024 when Jane Street allegedly made about $86 million dollars in a single session, with trades accounting for up to 25% of market volume in some BANKNIFTY constituents</p>
</details>

他们对当天进行了详细分析，包括 Jane Street 交易的逐分钟细分、其市场影响以及期权头寸产生的利润，使其成为监管机构案件的核心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Their detailed analysis of that day includes minute-by-minute breakdowns of Jane Street’s trades, their market impact, and the resulting profits from options positions, making it the centerpiece of the regulator’s case.</p>
</details>

他们的数据显示，Jane Street 在现金和期货市场亏损，但在期权市场弥补了这些损失并获得了更多利润。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Their data shows that Jane Street lost money in the cash and futures markets—but more than made up for those losses in options.</p>
</details>

SEBI 估计 Jane Street 当天的净交易额约为5.11亿美元，是市场第二大参与者的三倍多，占整个市场交易价值的15%到25%。他们表示，在八分钟内，Jane Street 建立了6700万美元的多头头寸。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">SEBI estimates that Jane Street’s net trading value that day - came in at about $511 million dollars – which was more than three times the size of the market’s second largest player and about fifteen to twenty five percent of the entire market’s traded value. Over the course of eight minutes – they say - Jane Street had built a long position of $67 million dollars.</p>
</details>

据印度金融监管机构称，这几乎单枪匹马地帮助 BANKNIFTY 指数在购买狂潮中上涨了超过1%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This almost single-handedly helped lift the BANKNIFTY index by over 1 per cent over the course of the buying spree, according to the Indian financial watchdog:</p>
</details>

他们认为这些损失并非偶然，而是故意的：是为了操纵指数并从期权中获利而付出的代价。他们的报告称，“从独立角度来看，这种交易活动没有任何经济理由可以解释”，并进一步指出，“从概率优势来看，这些交易只是为了扭曲 BANKNIFTY 指数期权价格。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They argue that these losses were not incidental but deliberate: a cost incurred to manipulate the index and profit from options. Their report says that “There is no economic rationale possible to justify such trading activity on a standalone basis,” going on to say - “By preponderance of probability, these trades were undertaken only to distort BANKNIFTY index option prices.”</p>
</details>

SEBI 声称已识别出第二种交易模式，他们称之为“延长收盘标记”（Extended Marking the Close）。在这种变体中，Jane Street 被指控在白天建立大量期权头寸，然后在最后一小时执行激进交易以影响指数的收盘价。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">SEBI claim to have identified a second trading pattern: which it calls “Extended Marking the Close.” In this variant, Jane Street is alleged to have built large options positions during the day, then executed aggressive trades in the final hour to influence the index’s closing value.</p>
</details>

2024年7月10日，监管机构强调，该公司据称在交易的最后一小时大量抛售 BANKNIFTY 成分股和期货，而此时其期权头寸将从较低的指数收盘价中受益。他们声称，2025年5月15日也观察到了类似模式，这次是看涨交易，旨在推高指数价格。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On July 10, 2024, the regulator highlights that the firm allegedly sold large amounts of BANKNIFTY constituent stocks and futures in the final hour of trading—just as its options positions would benefit from a lower index close. A similar pattern – they claim - was observed on May 15, 2025, this time with bullish trades designed to push the index price higher.</p>
</details>

在这两种情况下，SEBI 都声称 Jane Street 的交易并非为了对冲或提供流动性，而是为了制造一个有利的到期价格。Jane Street 强烈否认了这些指控。在一份致员工的内部备忘录中，该公司表示对 SEBI“煽动性”的措辞“非常失望”，并将对调查结果提出异议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In both cases, SEBI alleges that Jane Street’s trades were not about hedging or liquidity—they were about engineering a favorable expiry price. Jane Street has strongly denied the allegations. In an internal memo to staff, the firm says that it was “beyond disappointed” by SEBI’s “inflammatory” language and would contest the findings.</p>
</details>

该公司辩称，其交易是标准的**指数套利**（Index arbitrage: 利用指数期货或期权与构成指数的股票之间价格差异进行套利），旨在从期权与其标的股票之间错位的价格中获利。备忘录称：“这种活动对金融市场的健康 unambiguously 有益。”“如果没有像 Jane Street 这样的参与者，印度衍生品市场与基础经济之间就不会有经济联系。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The firm argues that its trades were standard index arbitrage—designed to profit from misaligned prices between options and their underlying stocks. “This activity is unambiguously good for the health of financial markets,” the memo said. “In the absence of participants like Jane Street, there would be no economic link between the Indian derivatives market and the underlying economy.”</p>
</details>

Jane Street 还对 SEBI 的方法论提出异议，特别是其使用“市场影响”指标来推断意图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Jane Street also disputes SEBI’s methodology, particularly its use of “market impact” metrics to infer intent.</p>
</details>

**Matt Levine** 本周早些时候就此撰写了一篇精彩的文章，他解释了为什么印度有如此多的衍生品交易，然后论证了 SEBI 的案件可能不像最初看起来那么强有力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Matt Levine wrote an excellent piece on this earlier this week where he explained why there is so much derivatives trading in India – and then made the case that SEBI’s case is not as strong as it may first appear to be.</p>
</details>

关于为什么印度人交易如此多的期权，Levine 解释说，与其它大型市场相比，在印度获得现金股票头寸的杠杆或卖空股票要困难得多。因此，许多杠杆和多头/空头交易策略在印度更难执行，但期权——确实提供了大量杠杆——是一个不错的替代品，允许交易者进行在其他市场会使用股票实施的交易。此外，一些必须使用股票实施的交易策略——例如期权与标的股票之间的套利——在印度更难执行，因此一些套利不会平仓，一些价差会更宽。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As to why Indians trade so many options – Levine explains that when you compare the Indian market to other big markets, it is much harder to get leverage on cash stock positions in India, or to sell stocks short. Because of this, lots of leveraged and long/short trading strategies are harder to do in India, but options — which do offer a lot of leverage — are a decent substitute – and allow traders to do the sort of trades that would be implemented using stocks in other markets. Additionally, some trading strategies that have to be implemented using stocks — like arbitraging options versus the underlying stocks — are harder to do in India, so some arbitrages won’t close and some spreads will be wider.</p>
</details>

印度期权市场在某些日子比印度股市大350倍，这简直是匪夷所思。很容易看出在印度期权交易中如何陷入困境，因为虽然它们比印度股票流动性更强，但它们的定价和结算都基于印度股票的价格。如果你能移动股票价格，你就会移动期权价格——期权更容易交易，而股票价格更容易移动。这无法回避——这是一个非常奇怪的市场动态——这样的市场几乎必然是低效的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is something completely bizarre about the fact that on some days the Indian options market is 350 times bigger than the Indian stock market - and it’s easy to see how you could get in trouble trading Indian options – as while they are more liquid than Indian stocks - they are priced and settle based on the prices of Indian stocks. If you can move the stock prices – you will move the option prices - and the options are easier to trade, while the stock prices are easier to move. There is no way around it – it is a very strange market dynamic – and a market like this almost has to be inefficient.</p>
</details>

Levine 总结道，“合法地进行套利交易”与“在一个市场交易以操纵另一个市场价格”看起来非常相似——他开玩笑说，“合法套利与操纵之间的区别通常归结于你是否发送了一封电子邮件说‘哈哈，我刚刚操纵了市场’——或者没有……”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Levine concludes that “legitimately doing an arbitrage trade” and “trading in one market to manipulate prices in another market” look pretty similar – and he jokes that “The difference between legitimate arbitrage and manipulation often comes down to whether you sent an email saying ‘lol I just manipulated the market – or not…</p>
</details>

SEBI 的案件依据是印度的《禁止欺诈和不公平贸易行为条例》以及《SEBI 法案》第12A条。这些条款禁止任何制造虚假或误导性交易表象，或操纵证券或指数价格的行为。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">SEBI’s case rests on India’s Prohibition of Fraudulent and Unfair Trade Practices regulations, as well as Section 12A of the SEBI Act. These provisions prohibit any action that creates a false or misleading appearance of trading, or manipulates the price of a security or index.</p>
</details>

监管机构还引用了最高法院2018年 SEBI 诉 Rakhi Trading 案的裁决，该裁决认为故意亏损交易可以作为操纵的证据。法院写道：“没有人会故意亏损交易。”“故意亏损交易本身并非真正的证券交易。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The regulator also cites the Supreme Court’s 2018 ruling in SEBI v. Rakhi Trading, which held that intentional loss-making trades can be evidence of manipulation. “Nobody intentionally trades for loss,” the court wrote. “An intentional trading for loss per se is not a genuine dealing in securities.”</p>
</details>

SEBI 的临时命令并非最终判决。Jane Street 有21天时间回应并要求举行听证会。但监管机构已经冻结了该公司的账户，并命令其将5.66亿美元存入一个**信托账户**（Escrow account: 由第三方保管资金或资产的账户，直到特定条件满足为止）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">SEBI’s interim order is not a final judgment. Jane Street has 21 days to respond and request a hearing. But the regulator has already frozen the firm’s accounts and ordered it to deposit $566 million dollars in an escrow account.</p>
</details>

印度的禁令对 Jane Street 的全球业务造成了打击，因为印度不仅占该公司2023年交易收入的约14%，而且也是其增长最快、利润最高的市场之一。该公司两年内在印度获得的43亿美元利润，正值全球投资者从中国撤资并视印度为下一个重要前沿之际。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The Indian ban is a blow to Jane Street’s global operations, as not only did India account for around 14% of the firm’s trading revenues in 2023, it was also one of its fastest-growing and most profitable markets. The firm’s $4.3 billion dollars in Indian profits over two years came at a time when global investors were pulling back from China and looking to India as the next big frontier.</p>
</details>

Jane Street 事件不仅仅是一个关于一家公司涉嫌不当行为的故事。它是一个试金石，检验快速增长市场的监管机构如何应对**算法交易**（Algorithmic trading: 使用计算机算法自动执行交易策略）、高频策略和日益复杂的全球资本流动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The Jane Street saga is more than a story about one firm’s alleged misconduct. It is a test case for how regulators in fast-growing markets respond to the rise of algorithmic trading, high-frequency strategies, and the increasing complexity of global capital flows.</p>
</details>

对于印度来说，此案是其在多年批评（最值得注意的是对**阿达尼-兴登堡事件**（Adani-Hindenburg affair: 指兴登堡研究公司发布报告指控印度阿达尼集团存在欺诈行为的事件）反应迟钝）之后，重新确立监管权威的机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For India, the case is a chance to reassert regulatory authority after years of criticism—most notably for its muted response to the Adani-Hindenburg affair.</p>
</details>

对于华尔街的量化交易公司来说，这是一个警告。在纽约或伦敦奏效的策略，可能无法完美地移植到孟买。在散户投资者主导且监管机构面临保护他们的压力的市场中，套利与操纵之间的界限可能比看起来更模糊——也更危险。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For Wall Street’s quant trading firms, it is a warning. The strategies that work in New York or London may not translate cleanly to Mumbai. And in markets where unsophisticated investors dominate and regulators are under pressure to protect them, the line between arbitrage and manipulation may be thinner—and more dangerous—than it appears.</p>
</details>

随着 Jane Street 准备其法律辩护，SEBI 继续其调查，有一点是明确的：专业交易员在印度衍生品市场赚取“安静利润”的时代可能已经结束。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As Jane Street prepares its legal defense and SEBI continues its investigation, one thing is clear: the era of quiet profits being earned by professional traders in India’s derivatives market may be over.</p>
</details>

### 争议与更深层次的市场问题

尽管 SEBI 长达105页的临时命令描绘了一幅蓄意而邪恶的操纵图景，但并非所有人都信服。正如 **Robin Wigglesworth** 在《**金融时报**》（Financial Times）中写道：“看起来像市场操纵的，实际上可能只是套利；而看起来像套利的，实际上也可能是市场操纵。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">While SEBI’s 105-page interim order paints a picture of deliberate and sinister manipulation, not everyone is convinced. As Robin Wigglesworth wrote in the FT “What might look like market manipulation could in fact just be arbitrage, and what might look like arbitrage can in fact be market manipulation”.</p>
</details>

正如 Matt Levine 指出的，在 SEBI 临时命令中强调的2024年1月17日，当天上午期权市场相对于标的指数溢价1.6%——这种错误定价套利者自然会通过卖出高价期权和买入廉价标的股票来利用。这正是教科书式的套利：如果两个相同的资产——这里是现金指数和期权衍生指数——以不同价格交易，你就买入便宜的，卖出昂贵的，而这正是 Jane Street 所做的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As Matt Levine pointed out –– on January 17, 2024 – the date highlighted in SEBI’s interim order, the options market was trading at a 1.6% premium to the underlying index that morning—a mispricing that an arbitrageur would naturally exploit by selling the overpriced options and buying the cheaper underlying stocks. This is - textbook arbitrage: If two identical assets—here, the cash index and the options-derived index—trade at different prices, you buy the cheap one and sell the expensive one, and that is what Jane Street did.</p>
</details>

Levine 还指出了 SEBI 叙述中的一个关键缺陷：在 Jane Street 所谓的操纵期间，期权价格并没有上涨，反而下跌了……当 Jane Street 购买标的股票时，该指数的期权价格正在下跌——这与他们为了抬高期权溢价而推高指数的预期不符。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Levine also points out a critical flaw in SEBI’s narrative: the options prices didn’t rise during Jane Street’s alleged manipulation, they fell … While Jane Street was buying the underlying stocks, the prices of options on that index were going down – and that’s not what you’d expect if they were pumping the index to inflate options premiums.</p>
</details>

对于**高频交易**（High-frequency trading: 利用高速计算机程序在极短时间内执行大量交易的策略）指数套利策略来说，交易者的意图尤其难以辨别，因为在一个市场进行的交易是为了对冲或利用另一个市场的定价。“合法地进行套利交易和在一个市场交易以操纵另一个市场价格看起来非常相似，”Levine 写道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The lack of clarity as to the intent of a trader can be particularly difficult to discern with high-frequency index-arbitrage strategies, where trades in one market are being done to hedge or exploit pricing in another. “Legitimately doing an arbitrage trade and trading in one market to manipulate prices in another market look pretty similar,” Levine writes.</p>
</details>

最终，一个有力的论点是，Jane Street 的交易可能使市场效率更高，而不是更低。“零售投资者不必支付1.6%的溢价在期权市场建仓，如果 Jane Street 压低期权价格并平仓套利，他们几乎可以不支付任何溢价。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ultimately, a good argument can be made that Jane Street’s trades may have made markets more efficient, not less. “Instead of paying a 1.6% premium to take a position in the options market - retail investors could pay next to no premium if Jane Street pushed the options prices down and closed the arbitrage.</p>
</details>

值得退一步思考一个令人警醒的统计数据：印度散户投资者在过去四年中交易期权估计亏损了330亿美元——尽管他们所投资的更广泛市场一直在上涨。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it’s worth stepping back to consider the sobering statistic that Indian retail investors managed to lose an estimated $33 billion dollars trading options over the past four years—despite the fact that the broader market that they are investing in has gone straight up.</p>
</details>

这些由 SEBI 证实并被《金融时报》引用的惊人损失，并非单一公司策略或监管盲点的结果。它是一个系统鼓励数百万个人在全球最波动市场之一进行高度杠杆化、短期交易的产物。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These staggering losses, confirmed by SEBI and cited in the Financial Times, is not the result of a single firm’s strategy or a regulatory blind spot. It is the product of a system that encouraged millions of individuals to gamble on highly leveraged, short-term trades in one of the world’s most volatile markets.</p>
</details>

正如 SEBI 董事会成员 **Ananth Narayan** 在1月份的一次公开演讲中指出的那样，“小投资者的大部分损失尤其集中在到期日进行指数期权交易（甚至是过度交易）上，当时溢价非常小。”换句话说，问题不仅仅是市场结构，还有投资者行为。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As Ananth Narayan, a SEBI board member, noted in a public lecture in January, “a bulk of small investor losses were specifically in trading—indeed, overtrading in index options on expiry day, when premiums are very small.” In other words, the problem wasn’t just the market structure—it was investor behavior.</p>
</details>

这里的教训不仅仅是给监管机构或交易公司的。它是给数百万被快速获利承诺和金融网红魅力吸引到期权狂热中的散户投资者的。在一个上涨的市场中，最简单的策略——买入并持有优质股票——本可以跑赢绝大多数杠杆押注。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The lesson here is not just for regulators or trading firms. It’s for the millions of retail investors who were drawn into the options frenzy by the promise of quick profits and the allure of financial influencers. In a rising market, the simplest strategy—buying and holding quality stocks—would have outperformed the vast majority of leveraged bets.</p>
</details>

Jane Street 可能利用了印度衍生品市场的低效率。但更大的悲剧是，如此多的散户投资者，手持智能手机和杠杆，选择逆势而为。然后，他们输了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Jane Street may have exploited inefficiencies in India’s derivatives market. But the far greater tragedy is that so many individual investors, armed with smartphones and leverage, chose to bet against the odds. And lost.</p>
</details>