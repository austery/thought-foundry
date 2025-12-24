---
area: tech-insights
category: technology
companies_orgs: []
date: '2025-10-13'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- bloomberg-podcasts
products_models: []
project:
- ai-impact-analysis
series: ''
source: https://www.youtube.com/watch?v=fN3SIWEjxUU
speaker: Bloomberg Podcasts
status: evergreen
summary: 探讨OpenAI的芯片采购策略、AI基础设施建设，以及工业供应商Fastenal的财报、定价、关税与全球供应链多元化挑战。
tags:
- ai-infrastructure
- earning
- geopolitical
- openai-chip-deal
- supply-chain-diversification
title: OpenAI芯片战略、Fastenal财报与全球供应链挑战
---

### 开篇：市场焦点与OpenAI的AI基础设施雄心

Bloomberg: [Music] Bloomberg Audio Studios, podcasts, radio, news.
Bloomberg: [音乐] 彭博音频工作室，播客，广播，新闻。

Bloomberg: Well, Big Aon is a big market story as well today, once again driving the trade, pushing semis as a group—semiconductors that is—higher today, led by Broadcom, whose stock jumped after OpenAI agreed to buy the company's custom chips and networking equipment in a multi-year deal, part of an ambitious plan by the startup to add AI infrastructure. So, we wanted to just dig a little bit deeper into it. Amy talked about it, and we certainly are seeing it playing out in the market. We've got a great voice though, Mandep, to walk us through it.
Bloomberg: 好的，安盛（Aon）今天也是一个重要的市场新闻，再次推动了交易，使得半导体板块——也就是**半导体**（Semiconductors: 导电性介于导体和绝缘体之间的材料，对电子设备至关重要）——今天走高，由博通（Broadcom）领涨，此前OpenAI同意在一项多年期协议中购买博通的定制芯片和网络设备，作为这家初创公司增加AI基础设施的雄心勃勃计划的一部分。所以，我们想深入探讨一下。艾米（Amy）已经谈过，我们也确实看到它正在市场中发挥作用。我们请到了曼迪普（Mandep）来为我们详细解读。

Bloomberg: One of my favorite people, I will say.
Bloomberg: 我要说，他是我最喜欢的人之一。

Bloomberg: Billy must have said Mandep's name about five times on the call this morning.
Bloomberg: 比利（Billy）今天早上在电话会议上肯定提了曼迪普的名字大概五次。

Bloomberg: Immediately, it was like, "We need to get him in the studio." So, perfect timing. And that's why we're joined now by Bloomberg Intelligence global head of technology research Mandep Singh here in the studio. Mandep, walk us through this deal, because it feels like every other day OpenAI has a new agreement with some chip manufacturer, and the terms are slightly different, whether it's an ownership stake or upfront buying chips. What's up with this Broadcom pact?
Bloomberg: 马上就觉得，“我们得请他来演播室。”所以，时机完美。这就是为什么我们现在请到了彭博情报（Bloomberg Intelligence）全球技术研究主管曼迪普·辛格（Mandep Singh）来到演播室。曼迪普，请你给我们讲解一下这笔交易，因为感觉OpenAI几乎每天都会和某个芯片制造商达成新协议，而且条款略有不同，有时是股权，有时是预先购买芯片。博通的这项协议是怎么回事？

### OpenAI的定制芯片策略与成本优势

Mandep: I mean, they are really going after data center capacity right now, and the way they are doing it is by diversifying their supplier base. So, it's not just relying on Nvidia—which everyone does right now for compute—but really leveraging Broadcom, which is a custom silicon maker. Think about Nvidia giving you a generic chip where you can run your AI workloads, whether it's training or inferencing. Custom silicon is used just for the specific workflow that OpenAI has to run for its proprietary model. No one else has any benefit of using a custom silicon because OpenAI is not looking to sell its own chips to compete with Nvidia; it's looking to use its chips for its own internal chip applications or any other custom app that it has developed in-house. And Google is a prime example of what custom silicon looks like, because they have their own **TPUs** (Tensor Processing Units: 谷歌开发的定制芯片，专为机器学习工作负载优化), which, when you compare them to Nvidia **GPUs** (Graphics Processing Units: 一种专门的电子电路，旨在快速处理和修改内存以加速显示设备图像的创建，也广泛用于AI并行计算), are more customized in nature, but they do a terrific job of running YouTube or any other AI workloads that Google wants to run on its chip. So that's what OpenAI is doing. And it has a tremendous cost advantage because it costs a lot lower than the Nvidia price tag of $30,000 on an average for a GPU.
Mandep: 我的意思是，他们现在确实在追求**数据中心**（Data Centers: 用于存放计算机系统及相关组件（如电信和存储系统）的设施）容量，他们这样做是通过分散其供应商基础。所以，他们不只是依赖英伟达（Nvidia）——现在每个人都依赖英伟达来获取**计算能力**（Compute: 进行计算任务所需的处理能力，尤其是在人工智能领域）——而是真正利用博通（Broadcom），它是一个**定制芯片**（Custom Chips: 为特定应用或目的设计的专用集成电路）制造商。你可以想象英伟达给你一个通用芯片，你可以在上面运行你的AI工作负载，无论是**模型训练**（Model Training: 将数据输入AI模型以使其学习并提高性能的过程）还是**模型推理**（Model Inferencing: 使用训练好的AI模型对新数据进行预测或决策的过程）。定制芯片仅用于OpenAI为其专有模型运行的特定工作流程。其他公司使用定制芯片没有任何好处，因为OpenAI并不打算出售自己的芯片来与英伟达竞争；它打算将这些芯片用于自己的内部芯片应用或任何它内部开发的定制应用。谷歌（Google）就是一个定制芯片的典型例子，因为他们有自己的**TPU**（Tensor Processing Unit: 谷歌开发的定制芯片，专为机器学习工作负载优化），与英伟达的**GPU**（Graphics Processing Unit: 一种专门的电子电路，旨在快速处理和修改内存以加速显示设备图像的创建，也广泛用于AI并行计算）相比，TPU在性质上更具定制性，但在运行YouTube或谷歌希望在其芯片上运行的任何其他AI工作负载方面表现出色。所以这就是OpenAI正在做的事情。而且它具有巨大的成本优势，因为它的成本远低于英伟达平均每块GPU 30,000美元的价格标签。

Bloomberg: TPU, Tensor Processing Unit. I just want to make sure I understand. What's interesting though is I do feel like there's this trend to get chips that maybe don't cost as much, maybe don't use as much power, but do exactly what we need. Is that fair?
Bloomberg: TPU，张量处理单元。我只是想确认我理解得对。但有趣的是，我确实觉得有一种趋势，那就是获取那些可能成本不高、功耗不大，但能完全满足我们需求的芯片。这样说公平吗？

Mandep: Yeah. I mean, look, one **gigawatt** (Gigawatt: 一种功率单位，等于十亿瓦特) requires up to 500,000 to 600,000 accelerator chips. So, we're talking 0.5 to 0.6 million chips for a 1-gigawatt data center. Imagine if you can save up to $5,000—how it multiplies in terms of cost savings. The real constraint right now is power. It's not as if you get a cheaper chip and you are all good; you still need the performance per watt, which is why Nvidia is so good, because it gives you 5 to 10 times more performance per watt than the nearest competitor.
Mandep: 是的。我的意思是，你看，一**吉瓦**（Gigawatt: 一种功率单位，等于十亿瓦特）的电力需要多达50万到60万颗加速器芯片。所以，我们谈论的是一个1吉瓦的数据中心需要50万到60万颗芯片。想象一下，如果你能节省高达5000美元——这在成本节约方面会如何倍增。现在真正的限制是电力。并不是说你得到一个更便宜的芯片就万事大吉了；你仍然需要每瓦特的性能，这就是为什么英伟达如此出色，因为它提供了比最接近的竞争对手高出5到10倍的每瓦特性能。

Bloomberg: Right.
Bloomberg: 没错。

### OpenAI的激进供应链扩张策略

Bloomberg: Exactly. I want to show a graphic that one of our producers, Elizabeth Cedron, made. I think we've all been looking at this. It's about OpenAI and all of the companies they're doing deals with, and it hasn't even been a month, but they have done deals with Nvidia, Oracle, Coreweave, AMD, and now Broadcom—and again, this is just from late September to mid-October. So, is that what this is? Is it just giving them a smarter supply chain and having access to what they need? Is it as simple as that?
Bloomberg: 确实如此。我想展示一张由我们的一位制作人伊丽莎白·塞德隆（Elizabeth Cedron）制作的图表。我想我们都一直在关注这个。它讲述的是OpenAI以及他们正在与之达成交易的所有公司，而且还不到一个月的时间，他们就已经与英伟达（Nvidia）、甲骨文（Oracle）、Coreweave、AMD以及现在的博通（Broadcom）达成了交易——而且这仅仅是从9月下旬到10月中旬。那么，这就是它的目的吗？仅仅是为他们提供一个更智能的供应链，并让他们能够获得所需？事情就这么简单吗？

Mandep: Well, it's not as simple because they're going across the stack. Think of how **AI应用程序** (AI Applications: 旨在执行通常需要人类智能的任务的软件程序) are deployed. You need the chip, you need the **基础设施** (Infrastructure: 服务于一个国家、城市或区域的基本设施和系统，例如交通和通信系统，在此语境中指计算和网络硬件), you need the cloud, because that's where you're doing your inferencing. So, they've cut deals with different parts of the stack here—not just the chip makers, not just the power guys, but also the cloud guys. So, from that perspective,
Mandep: 嗯，没那么简单，因为他们正在跨越整个技术栈。想想**AI应用程序**（AI Applications: 旨在执行通常需要人类智能的任务的软件程序）是如何部署的。你需要芯片，你需要**基础设施**（Infrastructure: 服务于一个国家、城市或区域的基本设施和系统，例如交通和通信系统，在此语境中指计算和网络硬件），你需要云，因为那才是你进行推理的地方。所以，他们在这里与技术栈的不同部分达成了交易——不仅仅是芯片制造商，不仅仅是电力供应商，还有云服务商。所以从这个角度来看，

Bloomberg: Coreweave, right?
Bloomberg: Coreweave，对吧？

Mandep: Coreweave. Exactly. And look, to my mind, they are going aggressive in terms of adding more capacity than they probably need, because they think if they get market share and get companies or users to use their product, then they will be able to monetize and probably drive some companies out of competing with them because of the scale involved here.
Mandep: Coreweave。没错。而且，在我看来，他们在增加容量方面非常激进，可能超出了他们实际的需求，因为他们认为如果能获得市场份额，让公司或用户使用他们的产品，那么他们就能实现盈利，并可能因为所涉及的规模而将一些竞争对手公司挤出市场。

Bloomberg: Well, are XAI and Anthropic striking similar deals, or is this the OpenAI show?
Bloomberg: 那么，XAI和Anthropic也在达成类似的交易吗？还是这只是OpenAI的独角戏？

Mandep: I think right now XAI must be thinking, and they are doing a $20 billion deal with some private financing. But look, when OpenAI announces a 10-gigawatt deal, we're talking $500 billion, not $20 billion anymore. So, the numbers are getting bigger and bigger.
Mandep: 我认为现在XAI肯定在考虑，他们正在通过一些私人融资进行一笔200亿美元的交易。但你看，当OpenAI宣布一笔10吉瓦的交易时，我们谈论的是5000亿美元，而不再是200亿美元了。所以，数字正在变得越来越大。

### OpenAI的财务状况与基础设施支出

Bloomberg: Well, is OpenAI, in this moment in time on October 13th, the most important company in the world?
Bloomberg: 那么，在此时此刻，10月13日，OpenAI是世界上最重要的公司吗？

Mandep: Well, when I look at Mag 7, Broadcom is not in Mag 7. It's a $1.66 trillion company. OpenAI probably, you know, it's what...
Mandep: 嗯，当我看到“Magnificent 7”（七巨头）时，博通（Broadcom）不在其中。它是一家1.66万亿美元的公司。OpenAI可能，你知道，它是什么……

Bloomberg: And they're up 10% because of this. I mean, also, the whole space sold off on Friday, so I don't want to downplay that too much, but like...
Bloomberg: 而且他们因此上涨了10%。我的意思是，整个板块周五也下跌了，所以我不想过分轻描淡写，但是……

Bloomberg: They're not even public. They're not even profitable, as much as we know, right?
Bloomberg: 他们甚至没有上市。据我们所知，他们甚至还没有盈利，对吗？

Mandep: No, I mean, look, right now their gross margins would be negative if you factor in their training costs. Inferencing-wise, yes, they are making some money, but clearly, if you include everything and just compare it with Google, Google has an annual cost of revenue of around $100 billion that powers all of their apps—Google, YouTube, everything that they run. OpenAI's compute costs are probably north of $20 billion right now. And if they're adding 26 gigawatts more capacity, we're talking compute costs multiplying at least 25-fold. So, from that perspective, you have to ask yourself how much incremental revenue do you want to see from OpenAI to justify this potentially $1 trillion in compute infrastructure spend. And that's where Google's infrastructure is so efficient, because just less than 5 gigawatts of compute gets you to over $400 billion in revenue.
Mandep: 不，我的意思是，你看，如果把他们的训练成本计算在内，他们目前的毛利率将是负数。从推理的角度来看，是的，他们确实赚了一些钱，但很明显，如果你把所有因素都考虑进去，并将其与谷歌（Google）进行比较，谷歌的年收入成本约为1000亿美元，用于支持他们所有的应用程序——谷歌搜索、YouTube以及他们运行的一切。OpenAI目前的计算成本可能超过200亿美元。如果他们再增加26吉瓦的容量，我们谈论的是计算成本至少增加25倍。所以从这个角度来看，你必须问自己，OpenAI需要带来多少增量收入才能证明这笔可能高达1万亿美元的计算基础设施支出是合理的。这就是谷歌基础设施效率如此之高的原因，因为仅不到5吉瓦的计算能力就能带来超过4000亿美元的收入。

Bloomberg: That's pretty cool,
Bloomberg: 这很酷，

Bloomberg: ...to say the least, in non-financial analysis terminology. Mandep, thank you. Always a gem. Bloomberg Intelligence Global Head of Technology Research Mandep Singh. AI spend and the buildout is one read on the U.S. economy and certainly the tech economy. Now to another great read, Bailey, on U.S. economic activity. We're talking about the industrial supplier Fastenal, which reported earnings earlier this morning, and shares—I think they were the worst performing in the **S&P 500指数** (S&P 500 Index: 一个代表美国股票市场500家大型上市公司表现的股票市场指数) at one point. Yeah, right now down about 6%, and keep in mind this is a $50 billion company. So, this is no small fish in the industrial space. It's one of the first reads we get every quarterly earnings season, missing Wall Street views broadly speaking. So, it's interesting: what's driving that?
Bloomberg: ……至少用非金融分析术语来说。曼迪普，谢谢你。总是那么棒。彭博情报全球技术研究主管曼迪普·辛格。AI支出和建设是衡量美国经济，当然也是科技经济的一个指标。现在，贝利（Bailey），我们来谈谈美国经济活动的另一个重要指标。我们正在谈论工业供应商Fastenal，该公司今天上午早些时候公布了财报，其股价——我认为一度是**标普500指数**（S&P 500 Index: 一个代表美国股票市场500家大型上市公司表现的股票市场指数）中表现最差的。是的，目前下跌约6%，请记住这是一家500亿美元的公司。所以，在工业领域，这绝不是小公司。它是我们每个季度财报季最早获得的报告之一，总体而言未能达到华尔街的预期。所以，很有趣：是什么在推动这一切？

### Fastenal财报、定价策略与市场反应

Bloomberg: Well, let's ask the CEO, Daniel Florness, who is with us. He is the Chief Executive Officer of Fastenal. He joins us from Winona, Minnesota. Dan, it is great to have you back with us. Talk to us about the quarter, because it does seem like analysts were noting that the pricing during the quarter was weaker than expected, and it marks the second straight quarter of softer pricing, and maybe that's why we're seeing the stock down. What do you want to say to investors?
Bloomberg: 好的，让我们请来首席执行官丹尼尔·弗洛尼斯（Daniel Florness），他现在和我们在一起。他是Fastenal的首席执行官。他从明尼苏达州威诺纳（Winona, Minnesota）加入我们。丹，很高兴您再次做客。请您谈谈这个季度的情况，因为分析师们似乎注意到本季度的定价弱于预期，这标志着连续第二个季度的定价疲软，也许这就是我们看到股价下跌的原因。您想对投资者说些什么？

Dan: Well, part of the reason our stock's down is it's priced to perfection, if you look at what it's done year-to-date and where the multiple has gone. But we had a really good quarter. We had a double-digit quarter—we hadn't seen that for a couple of years. Double-digit growth, sorry. And we are pleased with the outcome. One of the challenges we had this year was there's a lot of fluidity around tariffs and what it means for pricing. We will raise prices to address costs in our customer supply chain. We really don't want to raise more than that, because we believe it impairs our ability to grow as fast as we'd like. And coming into the quarter, we estimated X for the impact of pricing came in a little bit less. We lowered our number for the fourth quarter, but the most important aspect is on a price-cost basis, we are neutral, and that's what we aspire to be. We'd rather just grow.
Dan: 嗯，我们股价下跌的部分原因是，如果看它今年以来的表现以及市盈率的走势，它已经被定价到了完美。但我们度过了一个非常好的季度。我们实现了两位数的增长——这在过去几年里没有出现过。抱歉，是两位数的增长。我们对结果感到满意。我们今年面临的挑战之一是，围绕**关税**（Tariffs: 对进口或出口商品和服务征收的税款）以及它对定价意味着什么，存在很多不确定性。我们将提高价格以应对客户供应链中的成本。我们真的不想提高更多，因为我们认为这会损害我们实现预期增长速度的能力。进入本季度时，我们估计的定价影响X值略低。我们下调了第四季度的预期数字，但最重要的是，在价格成本基础上，我们是中性的，这也是我们追求的目标。我们宁愿只追求增长。

Bloomberg: And Dan, to your point, Fastenal, even with the pullback today, is returning 22% year-to-date, so outperforming the S&P 500 and comparable stocks in the industrial space. But just one more question on pricing: in terms of expectations, would you want to raise pricing? Do you get the sense that consumers and customers would push back, just given how you've been shifting into bigger customers spending much more money?
Bloomberg: 丹，就您所说，Fastenal即使今天有所回调，今年迄今的回报率仍达22%，表现优于标普500指数和工业领域的同类股票。但关于定价，还有一个问题：就预期而言，您会希望提高定价吗？鉴于您一直在转向那些花费更多资金的大客户，您是否感觉到消费者和客户会抵制？

Dan: Yeah, customers always push back on pricing. It doesn't matter the size of the customer. We are having conversations with our customers. We will be doing some price increases in Q4. I suspect we'll be doing some price increases as we move into 2026. But again, our first discussion with the customer—they understand it, they're willing to move on price. Our first discussion is always about what alternatives there are to this product that maybe doesn't mean we have to raise your prices 5%. Maybe it means it only has to be two percent, and we'd rather go to two, because that's what a supply chain partner does.
Dan: 是的，客户总是会抵制定价。这与客户规模无关。我们正在与客户进行沟通。我们将在第四季度进行一些价格上涨。我预计进入2026年我们也会进行一些价格上涨。但再次强调，我们与客户的首次讨论——他们理解，他们也愿意在价格上做出让步。我们首次讨论的重点总是寻找该产品的替代方案，这可能意味着我们不必将您的价格提高5%。也许这意味着只需提高2%，我们宁愿选择2%，因为这就是供应链合作伙伴的职责。

### 关税影响与全球供应链多元化

Bloomberg: Well, Dan, how do **关税** (Tariffs: 对进口或出口商品和服务征收的税款) fit into this? Just given that, according to analysts across the street, when we look at certain industries, now is when we're going to see tariffs showing up in the third quarter in guidance as it relates to 2026. What are you seeing, and how are you attacking or addressing any pressures from tariffs?
Bloomberg: 丹，那么**关税**（Tariffs: 对进口或出口商品和服务征收的税款）是如何融入其中的呢？鉴于华尔街分析师的说法，当我们审视某些行业时，现在正是我们将在第三季度指引中看到关税影响显现的时候，这与2026年相关。您看到了什么？您是如何应对或解决关税带来的压力的？

Dan: Yeah. So for us, tariffs have been in the equation since the early part of the second quarter, and a little bit of the first quarter. I think the individual that handles pricing historically provides us an update once a month. He'd gotten to the point where he was not only providing us updates, he was up to video number 14 as of July that he was serving out to the field,
Dan: 是的。对我们而言，关税自第二季度初，以及第一季度末期，就已经纳入考量。我想，负责定价的同事，他通常每月会向我们提供一次更新。他甚至到了这样的程度，不仅仅是提供更新，截至七月，他已经制作了第14个视频，并分发给一线团队，

Dan: ...giving them guidance into what we were seeing in our supply chain. And so we've been adding price as we've gone through the year, and these have been discussions with customers, and I hope that answers your question.
Dan: ……为他们提供我们供应链中情况的指导。因此，我们今年一直在增加价格，这些都是与客户讨论后的结果，我希望这能回答您的问题。

Bloomberg: No, I think it does. But I think the big thing is, are you mitigating the impact of tariffs? Are you shifting your supply chain? Is the expectation that you can have some kind of knock-on effect as it relates to pricing if we do continue to see threats from the president and going after countries like China or others? We are going to talk to one of the members of Levvis's management team, and they called out that they had to dial up their expectations for the impact of tariffs from other countries. So, how is that impacting when you look at your supply chain and when you look at the potential for pricing impacts in 2026?
Bloomberg: 不，我想是的。但我认为关键在于，你们是否正在减轻关税的影响？你们是否正在调整供应链？如果总统继续对中国或其他国家施加威胁，我们是否会看到与定价相关的某种连锁反应？我们即将与Levvis管理团队的一位成员交谈，他们指出他们不得不提高对其他国家关税影响的预期。那么，当您审视您的供应链以及2026年潜在的定价影响时，这会产生怎样的影响？

Dan: We've been moving our supply chain around the planet in earnest since the 2017-2018 timeframe. As our name would imply, we sell a lot of fasteners, and most of the fasteners in North America come from either mainland China or Taiwan. The automotive industry took production there back in the '50s and '60s—actually took it to Japan and South Korea, and it migrated from there. If I look at our resources, we now have a sourcing team in Shanghai, but we also have a sourcing team in Bangkok, and a sourcing team in northern India. We have worked to diversify our supplier base around the planet, and a little bit more in North America, but really around the planet, to have diversity in supply so you're not caught off guard by some price change or a tariff change. In addition to that, we've taken supply chains coming into North America, which traditionally came in through the West Coast United States, and then we would redistribute from there. We have moved supply chains so they're bringing product directly into the West Coast of Canada or the West Coast of Mexico, because those two countries represent about 14% of our revenue. Now you bypass the tariff. However, it's more expensive to break shipments down over in Asia and bring them in, but it's a lot less than a tariff.
Dan: 自2017-2018年以来，我们一直在全球范围内认真调整我们的供应链。正如我们的名字所暗示的，我们销售大量紧固件，而北美的大多数紧固件都来自中国大陆或台湾。汽车工业在50年代和60年代将生产转移到那里——实际上是转移到日本和韩国，然后从那里迁移。如果我审视我们的资源，我们现在在上海有一个采购团队，但在曼谷也有一个采购团队，在印度北部也有一个采购团队。我们致力于在全球范围内，以及在北美地区稍微多一些地分散我们的供应商基础，但主要是在全球范围内，以实现供应多样化，这样你就不会因为价格变化或关税变化而措手不及。除此之外，我们还将进入北美的供应链进行了调整，这些供应链传统上通过美国西海岸进入，然后我们从那里进行再分配。我们已经调整了供应链，因此他们将产品直接运往加拿大西海岸或墨西哥西海岸，因为这两个国家约占我们收入的14%。现在你可以绕开关税。然而，在亚洲拆分货物并运入的成本更高，但这比关税要少得多。

### 降低对单一市场依赖与工业环境展望

Bloomberg: One of the things I want to ask you: you talk about supply chains. Is the endgame, Dan—we're talking with Dan Florness, Chief Executive Officer of Fastenal—is it about largely reducing your exposure to China, which has been a pretty big one?
Bloomberg: 我想问您一件事：您谈到了供应链。丹，我们正在与Fastenal首席执行官丹·弗洛尼斯交谈——最终目标是否主要是减少您对中国市场的敞口，因为这个市场一直都很大？

Dan: It's reducing our customers' exposure to any market—in this case, China and/or Taiwan—but to any market that is on the receiving end of some of the political winds.
Dan: 这是为了减少我们客户对任何市场的风险敞口——在这种情况下是中国和/或台湾——但也是为了减少对任何受到政治风向影响的市场的风险敞口。

Dan: ...and create an unstable supply base for our customer. Here, it happens to be China. Another month, it might be a different country. Another year, it might be a different country. It's diversifying your supply chain so your eggs are not all in one basket.
Dan: ……并为我们的客户创造一个不稳定的供应基地。在这里，它恰好是中国。下个月，可能是一个不同的国家。明年，可能又是一个不同的国家。这是在使您的供应链多样化，这样您的鸡蛋就不会都放在一个篮子里。

Bloomberg: Got to be ready for whichever a customer needs.
Bloomberg: 必须为客户的任何需求做好准备。

Dan: Yeah. Whichever way the winds blow.
Dan: 是的。无论风向如何。

Bloomberg: Hey, one of the things I want to ask you broadly about the earnings update today. You talked about the industrial environment still being sluggish. We've heard similar commentary on this persistent sluggishness elsewhere from manufacturers, as well as caution around project delays. At what point does this become something more worrying than just sluggishness?
Bloomberg: 嘿，我想就今天的财报更新，广泛地问您一件事。您谈到了工业环境仍然低迷。我们从其他制造商那里也听到了关于这种持续低迷的类似评论，以及对项目延迟的担忧。在什么情况下，这种情况会变得比仅仅是低迷更令人担忧？

Dan: For us, it's been sluggish since November of 2022.
Dan: 对我们来说，自2022年11月以来，经济一直处于低迷状态。

Bloomberg: Okay.
Bloomberg: 好的。

Dan: So, we really key on what the Industrial Institute for Supply Management puts out: the **PMI指数** (Purchasing Managers' Index: 衡量制造业和服务业经济健康状况的指标). And that's been sub-50, which really plays into our customer base. Other than January and February of this year, that's been sub-50 since November of 2022. So, we've been in a sluggish economy for a long time from our perspective. Other than living through the first part of it where you had customers that were downshifting, our growth is shining through in a different way. A) I think we're executing at a higher level, but B) once you get through that downshifting, now, even if your customers are at a subdued level, you can grow in that kind of environment, and that's what's shining through in our numbers right now.
Dan: 所以，我们非常关注工业供应管理协会（Industrial Institute for Supply Management）发布的**PMI指数**（Purchasing Managers' Index: 衡量制造业和服务业经济健康状况的指标）。该指数一直低于50，这确实影响了我们的客户群。除了今年1月和2月，自2022年11月以来，该指数一直低于50。因此，从我们的角度来看，我们长期处于低迷的经济中。除了经历最初客户需求下降的阶段，我们的增长以不同的方式显现。A）我认为我们正在以更高的水平执行，但B）一旦你度过了那个下降阶段，现在，即使你的客户处于低迷水平，你也能在这种环境中实现增长，这就是我们目前数据所体现的。

### AI对Fastenal业务的影响与当前经济周期

Bloomberg: All right. One thing I want to ask you, because as you would imagine, I don't know how much of this is pervasive in your world, but AI is like the non-stop conversation that we are having—certainly when it comes to activity and market impact. To what extent is AI maybe sucking up the oxygen in the economy? Are you seeing any signs of that, or in your world, are they still going to need what you guys supply no matter what's going on with the AI spend and enthusiasm?
Bloomberg: 好的。我想问您一件事，因为您可以想象，我不知道这在您的世界中有多么普遍，但AI是我们一直在谈论的话题——尤其是在活动和市场影响方面。AI在多大程度上可能正在吸走经济中的“氧气”？您是否看到了任何迹象？或者在您的领域，无论AI支出和热情如何，他们仍然会需要您们供应的产品吗？

Dan: Well, first off, we have a meaningful improvement in our revenue as it relates to things like **数据中心** (Data Centers: 用于存放计算机系统及相关组件（如电信和存储系统）的设施), because we sell into a wide range of customer needs and end-market needs, whether that is the actual construction. I've visited many data centers being built where we have people on site. After it's built, we're supplying into that facility with things like air handling and maintenance equipment. In the case of customers that sell into that sector, that's actually a strong business for us right now. And then, as an organization, we're increasingly making use of AI in our own business, in how we go to market, and in how we help our employees be more efficient in what they do.
Dan: 嗯，首先，我们在与**数据中心**（Data Centers: 用于存放计算机系统及相关组件（如电信和存储系统）的设施）相关领域的收入有了显著提升，因为我们销售的产品能满足广泛的客户需求和终端市场需求，无论是实际的建设阶段。我曾参观过许多正在建设中的数据中心，我们都有员工在现场。建成后，我们向这些设施供应空气处理和维护设备等。对于那些销售到这个领域的客户来说，这实际上是我们目前一个强劲的业务。此外，作为一家组织，我们越来越多地在自己的业务中利用AI，包括我们的市场推广方式，以及如何帮助员工提高工作效率。

Bloomberg: And Dan, with about 45 seconds here, keeping in mind data center construction, where are those products sourced from? Are those also heavily sourced from China and exposed to tariffs, or are they a different supply chain altogether?
Bloomberg: 丹，还有大约45秒的时间，考虑到数据中心建设，这些产品是从哪里采购的？它们是否也大量来自中国并受到关税影响，还是完全不同的供应链？

Dan: They're mostly a different supply source. But it depends on the component if it's facility maintenance-type products. They're coming from anywhere on the globe, and so they're subject to the same type of issues any product would have. But a lot of the components—I know a lot of the manufacturers that we sell into—I visited one about a year ago in Michigan where they were purposely avoiding China, and they're selling directly into the data centers.
Dan: 它们大多来自不同的供应源。但这取决于具体的部件，如果是设施维护类的产品。它们来自全球任何地方，因此它们会受到任何产品都可能遇到的相同类型问题的影响。但是很多部件——我知道我们销售给的许多制造商——我大约一年前在密歇根州拜访过一家，他们当时特意避开中国，并直接向数据中心销售产品。

Bloomberg: You've been at Fastenal for a long time. You've seen different cycles. How do you describe this one? And again, we've just got about 20 seconds. If you could be very quick.
Bloomberg: 您在Fastenal工作了很长时间。您见过不同的周期。您如何描述这次的周期？我们只有大约20秒钟了。请您简要说明。

Dan: Odd in the fact that, similar to what we saw in '18, but odd with the fact that it's just so damn fluid,
Dan: 奇怪的是，它与我们在2018年看到的情况相似，但又奇怪在它实在太变幻莫测了，

Dan: ...and there are so many things that occur from week to week, month to month that are outside the norm, but the fundamentals still work.
Dan: ……而且每周、每月都会发生许多超出常规的事情，但基本面仍然有效。

Bloomberg: All right.
Bloomberg: 好的。

Dan: So, serve your customer at a high level, and you grow your business.
Dan: 所以，高水平地服务您的客户，您就能发展您的业务。

Bloomberg: Love talking with you, Dan Florness, the CEO of Fastenal.
Bloomberg: 很高兴与您交谈，丹·弗洛尼斯，Fastenal的首席执行官。