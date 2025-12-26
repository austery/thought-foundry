---
area: "finance-wealth"
category: business
companies_orgs:
- Palantir
date: '2025-09-08'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Palantir vision
- Amit
- Money or Life 美股频道
people:
- Alex Karp
products_models:
- Foundry
- Ontology
- AIP
- DCF估值模型
project: []
series: ''
source: https://www.youtube.com/watch?v=f3lAGjqR-GI
speaker: Money or Life 美股频道
status: evergreen
summary: 本文深入探讨了Palantir的独特竞争优势，结合CEO Alex Karp的观点，揭示了其难以复制的护城河。文章详细阐述了本体论（Ontology）、前线部署工程师（FDE）以及以价值创造为核心的企业文化如何共同构建Palantir的效率壁垒。同时，Alex
  Karp也对传统软件公司、AI应用落地S&P 500企业的挑战，以及AI对未来劳动力市场的影响提出了深刻见解，强调了Palantir在时间复利和高精度数据流方面的领先地位。
tags:
- ai-application
- efficiency
- future-of-work
- investment
- software-business-model
title: Palantir的护城河：CEO Alex Karp深度解析其独特优势与AI落地挑战
---
### Palantir的投资回顾与未来展望

欢迎来到Money or Life美股频道。距离去年开始关注**Palantir**（Palantir Technologies Inc.: 一家美国软件公司，专注于大数据分析和人工智能）并制作其专题视频，已经接近一年的时间了。在这一年里，我收获了100%以上的收益，并于上周重新选择建仓Palantir。我知道许多朋友可能还不完全了解Palantir的业务。因此，借着Palantir近期刚刚举办**AIP Conference 8**（Artificial Intelligence Platform Conference 8: Palantir年度人工智能平台大会）的机会，我将制作两期简短视频，进一步解释Palantir的相对优势，以及为什么它依然值得我们持续关注。视频将分为两期，今天一期，明天一期，希望能帮助大家更好地理解Palantir这家公司。

今天的第一期视频，我将和大家分享Palantir **CEO Alex Karp**（首席执行官：Palantir公司的领导者）在两个平台上的发言：第一个平台是“Palantir vision”这个YouTube频道，第二个是“Amit”他自己的频道。明天的第二期视频，我将为大家总结整个AIP Conference 8的亮点。这三个视频我在周末和今天早上都连续观看了好几遍，体会非常深，它们帮助我进一步了解了Palantir的相对优势。

每次提到Palantir，我都会想起9个月前制作的那期视频，目前已有6.8万次观看。当时几乎无人关注，到现在已有5万个订阅者，这期视频依然是我观看量最多的视频。非常欢迎大家订阅Money or Life美股频道，这里有最深入的个股分析以及我的实盘分享。也欢迎大家加入我的Patreon会员社群，在Patreon我有每日文字创作更新，并与会员朋友们进行实时交流。在了解了这么多Palantir的信息之后，每次我回过头再看这家公司，依然会回顾我的第一期视频，其中一些内容到现在依然是正确的。

### Palantir的产品与护城河

当时我提到Palantir的产品包括**Foundry**（Foundry: Palantir的企业数据集成与分析平台），**Ontology**（本体论/知识图谱: 一种将数据转化为可操作知识的框架，构建现实世界的数字模型），以及**AIP**（Artificial Intelligence Platform: Palantir的人工智能平台）。Palantir产品的实际应用具有以下特点：第一是**AI代理**（AI Agent: 能够自主执行任务的人工智能程序）的应用，这当然是通过**大语言模型**（Large Language Model, LLM: 一种基于深度学习的自然语言处理模型）实现的；第二是可视化；第三是**去代码化**（No-code: 无需编写代码即可开发软件或应用），让不具备过多编程能力的客户方人员也能比较容易地使用Palantir的产品。

关于**护城河**（Moat: 企业长期保持竞争优势的壁垒）方面，我当时认为Palantir拥有强大的护城河，虽然潜力无限，但估值确实也比较高。不得不提的是，按照传统的估值方法，Palantir一直被公认为目前整个美股中估值最高的股票。然而，它却一次又一次地通过其出色的表现，甚至在上季度的财报中展现出“逆天”的成绩，击退了股市上的做空者，股价也一直高升。视频接下来的时间，我将引用Palantir CEO Alex Karp在视频开头提到的两段采访中的阐述，告诉大家为什么Palantir确实具有相对优势，拥有比较强的护城河。

### Alex Karp对传统软件的批判

首先，Alex Karp抛出了一个听起来非常过激，但思考之后觉得有一定道理的结论。他认为传统的软件公司好像**寄生虫**（Parasitic: 依赖并损害宿主）一样的存在，这些软件公司的客户其实很讨厌使用这些软件，但又不得不使用。他所指的客户，其实是最终端的使用者，而非决定购买软件的决策者。英文原文是“parasitic software products, customer hate the software company”。

试想一下，你所在的公司，尤其是中等规模到大型的公司，所使用的软件，无论是财务软件、供应链软件还是设计软件，是否有很多让你想吐槽的地方，例如信息孤岛等问题？对我而言，我有着非常深刻的体会。在第一家大型公司工作时，由于工作需求，我需要查阅一些技术图纸。然而，系统间的割裂让我很难找到，更不用说理解这些图纸了。而负责这些技术的人员又没有时间来教我，这让我感到非常焦虑。而在上一份初创公司的工作中，我使用了一些财务软件。由于是小公司，它规定每位员工都必须使用这些财务软件进行报销。作为终端用户，我发现使用起来非常不便，很多流程非常繁琐，而且系统响应速度也相当慢。因此，我能够部分理解Alex Karp为何会说出这样的话。

### Palantir护城河的构成：Ontology、FDE与大语言模型

紧接着，Alex Karp回答了一个大家都想知道答案的问题：为什么Palantir的生意很难被复制？他的回答是“very, very hard to replicate”，原因有三点。第一点就是我之前多次提到的**Ontology**（本体论/知识图谱）。第二个是**FDE**（Forward Deployed Engineer: 前线部署工程师）。Palantir这家公司将前线部署工程师这个工种发扬光大到了极致。简单来说，就是将一名工程师派驻到客户现场，停留几天、几个月甚至更久的时间，以了解客户需求并部署Palantir的软件。第三点要素是**大语言模型**（LLM），它是一个强化要素（enhancing factor）。

有朋友可能会说，这三点其实其他公司都可以做到。第三点大语言模型当然是公开的，有资金就可以使用；第一点本体论知识图谱也并非Palantir独创；而前线部署工程师只是一个工种，也是可以复制的。稍后，我将进一步解释为什么看似每一点都可以复制，但Palantir作为一个公司整体，其业务却很难被复制。

### 以价值创造为核心的公司构建

在继续这个话题之前，我们先来看一下Palantir CEO Alex Karp自己口中所说的，Palantir这家公司最大的特点是什么：是整个公司的构建都基于在下游产生价值（“the whole structure is built downstream of value creation”）。一家软件公司的终极目标就是为客户创造价值。假设一家软件公司为客户创造了100万的净价值，那么即使它只收取10%作为费用，其营收也有10万。Palantir正是特别强调**价值创造**（Value Creation: 为客户提供实际效益和增值），而且这种价值创造是在“下游”，即它不是以自己公司的产品为出发点，而是以客户为出发点。

这里就可以回到刚刚提到的，为什么FDE（前线部署工程师）这个工种如此重要。Alex Karp举了一个例子，他说为什么法国一些餐厅的食物如此美味？因为连给你上菜的人都非常了解这道菜，他们并非简单的端盘子人员，而是所谓的**技术专家**（Technical Expert: 具备特定领域专业知识和技能的人员）。他认为食物的准备不只在厨房，而是延伸到“最后一公里”（final mile），直到送到用户的餐桌。拥有一个在“最后一公里”的工具，实际上可以准确记录合作伙伴的需求，并且在出现错误时能够勇于说不。对于来用餐的人，他们非常了解这些用餐者的需求；而且当用餐者提出一些不合理的要求时，他们会勇于说不，坚持自己餐厅的原则。其实，这就是FDE（前线部署工程师）需要做的工作，这也是整个Palantir公司最最重要的角色。Palantir的FDE结合了软件工程师、数据工程师、咨询顾问和产品经理的角色。这个职位的核心工作就是深入客户现场，将Palantir的软件平台配置好，然后应用到客户的具体业务当中。

### Palantir的独特文化与效率壁垒

紧接着，Alex Karp就回答了与“为什么Palantir的生意很难被复制”这个问题答案相关的一些观点。他说，如果没有以下要素，你认为只有这些前端工程师就足够了，那么每个公司都可以招聘前端工程师，但你一定是疯了。原文是“it's crazy that you think it's gonna work without orchestrating who does what, without the best people in the world, without Ontology”。第三个要素是**Ontology**，也是他刚刚回答的一个要素之一，它是一个底层的技术。而第一个“without orchestrating who does what”涉及到公司的管理，前端工程师虽然在客户现场，但公司内部的架构和信息处理需要一个**协调机制**（Orchestrating: 精心组织和协调各项活动），即要明确知道每一个员工在做什么。第二点是“without the best people in the world”，这就涉及到公司的文化。我们知道Palantir这家公司有自己非常独特的文化，我在这里不过于阐述了。Palantir的大部分员工都是本土人员，且过半来自于美国中西部的传统白人。

所以总结下来，这三点中有两点是其他公司不具备或做得不够好的。第一个就是**Ontology**。可能其他公司有或者想做，但暂时从**执行力**（Execution: 将计划或策略付诸实施并取得结果的能力）方面，没有Palantir做得这么好。这种执行力就涉及到公司产品在客户端落地的效率，待会儿我会提到。而与效率相关的，当然就是前端部署工程师。其他公司也可以这么做，但如果没有Palantir这种以在下游产生价值为核心的公司文化理念，这些前端部署工程师可能也无法发挥这么大的作用。因为在视频开头提到，传统的软件公司没有基于下游的价值创造，它们基本上还是以提供一个“一刀切”（one for all）、适用于绝大多数人的软件为核心。

### 时间复利与Palantir的超高效率

听到这里，很多朋友可能还是怀疑，觉得我说的这些都不足以说服他们。那么我们来看结果。结果就是Alex Karp说他觉得“time is not time”，Palantir的速率或者说Palantir的效率，从结果来看，其**执行力**（Execution: 技术产品或软件产品在客户端的落地效率）要比别人快得多得多。他说，从你想做一件事情开始，到这件事情真正发生，如果你实际只花了计划中1/10的时间，那么你按照这个进度就可以达到10倍的效率。原本计划实现一倍的效果，但你却能做到10倍，你当然更优秀。所以，别的公司可能要花3到5年的时间才能得到本来一年想要得到或可能得到的结果，而Palantir花一周就能得到。他说：“it takes us a week to get a year。”

所以Alex Karp说“time is not time”，你的时间和我的时间利用率是截然不同的。这样，Palantir就会产生很多**时间复利**（Compounding Time: 通过高效利用时间，使成果呈指数级增长的效应）。这一点在我明天发布的视频，也就是Palantir AIP Conference 8中，很多客户身上都得到了非常明显的证明，这是客户直接说的。Alex Karp说：“Don't believe everything we're saying, talk to other people who have done it.”你不用一定相信我说的，但你可以和我们的客户去交流。如果我们的客户都告诉你，他们从Palantir获得了其他公司无法获得的**价值创造**，那就说明我们的产品有用。到这里，Alex Karp基本上就阐述完了他为什么觉得Palantir是独特的存在。以上是一些精炼的信息，也欢迎大家直接去观看我上面提供的两个视频。

### AI应用落地的挑战与Palantir的解决方案

接下来，Alex Karp还提到了一些其他方面。例如，有人问为什么现在的AI应用在很多**S&P 500**（Standard & Poor's 500: 标准普尔500指数，包含美国500家大型上市公司）的大公司没有办法达到预想的结果？原文是“why 95% of AI trials are not converting in S&P 500 companies”。因为前一阵有个新闻报道，一项调查显示95%的AI相关应用其实都没有真正落地，甚至造成了股市的下跌。

Alex Karp解释说，**大语言模型**（LLM）是有错误概率的，它不是完全绝对精确的，不是“hundred percent precise, not precise”。大语言模型创造的价值需要通过类似于Palantir公司的**Ontology**（本体论/知识图谱）这一个“外衣”去实现。所以Ontology它是一个**包装器**（Wrapper: 在计算机科学中，指一个将其他组件封装起来以提供额外功能或适配接口的组件），它是一个外衣。我们可以理解为，通过Ontology去实现大语言模型的利用最大化。然后他提到这个顺序是：你有输出（output），你把这个数据**序列化**（Serialize: 将数据结构或对象转换为可存储或传输的格式），然后序列化之后应用到具体的场景，再进行**反序列化**（De-serialize: 将序列化后的数据恢复为原始数据结构或对象），然后产生最终的输出。这基本上就是Palantir的工作流。

Alex Karp说，大语言模型它是“**垂直关键**”（Vertically Crucial: 指在特定业务流程或垂直领域中至关重要），也就是在某一个节点它确实都可以被利用到，但在商务角度，涉及到犯错的**容错率**（Error Bound: 允许的错误范围或误差限度）是很低的，原文是“the error bound is very, very, very narrow”。他说，我们需要在不同的环节去利用大语言模型，而不是说你从A到Z的工作流中就只适用大语言模型，而没有一个类似于Ontology的包装器。因为你不这么做，你犯错误的概率太大了，稳定性太差，所以客户根本没有办法使用这种稳定性太差的软件。而Palantir提供的是一个**高保证性数据流**（High Fidelity Data Sets: 高质量、高准确度、高完整性的数据集合）。

### AI对未来劳动力市场的影响与Palantir的降本增效

紧接着，他继续来谈AI。他说现在AI盛行，很多人怕自己丢了工作，很多人怕所有的人都会被AI代替。Alex Karp说这是错误的，但是他的观点也不乐观。因为他提到：“actually, trend workers, people with technical expertises will be crazy valuable。”具有技术能力和被最新技术训练过的这些员工将变得更加珍贵，他们的工资会是今天的10倍、100倍。而其他大部分人则都会被AI取代。例如，Palantir自己的这些AI产品就可以替代非常多其实不具备真正**技术专长**（Technical Expertise: 专业的技能和知识）的工种。

然后他说Palantir和其他企业是相反的，他们的营收在增加（“revenue going up”），但销售人员在减少（“the sales going down”），而且预计未来整个公司的人员还会减少（“the number of people we plan to have in the future is less than now”）。这正是因为他们不断提高自己的效率，他们向客户推广AI，自己内部也在不断利用AI来降本增效。或者我们可以理解为，他们的客户数量增长速度可能没有大家想象的那么快，但每一个客户能够贡献的营收却在持续增加。为什么能够这么快速地增加？回到刚才讨论Palantir最大的特点，就是整个公司的构建都基于为下游产生价值，为自己的客户产生价值。那么你为客户产生了成倍的价值，你的营收也是成倍地增加。

### 个人投资者视角与DCF估值模型的局限性

最后，Alex Karp对于Palantir的个人投资者也表示非常支持。他说很多传统的投行**DCF估值模型**（Discounted Cash Flow Valuation Model: 现金流折现估值模型，通过预测未来现金流并折现到当前来评估资产价值）没有用，因为模型背后的负责人可能根本不了解Palantir的产品。第二点是，DCF具体要用多久的时间去计算，这非常个人化。如果负责评估Palantir这家公司估值的机构人员很喜欢这家公司，他就会使用更长的DCF年限。那么提到DCF的年限，我们就要回到刚刚的话题：“time is not time”。DCF是按照每年计算的，对吗？但是对于Palantir来说，如果它真的能在一周、一个月内就完成别人一年才能完成的工作，那么你用DCF肯定就没有办法准确地去预估它的价值了。Alex Karp说：“a year is not a year for Palantir, we don't do holidays, I am working all the time.”他说我们不休假，我自己本人每天都在工作。

而且Alex Karp还为大家打了鸡血，他说：“if you are watching this podcast and you enjoy this, you've already passed the test。”我也想说，如果屏幕前的各位朋友在观看我的本期视频，看到现在并且觉得很享受，那么你已经通过了测试，你已经在走向成功的路上。这句话非常积极，虽然有一定卖弄的嫌疑，不过希望今天的视频对你们有用。好的，今天简短的视频就到这里。明天我将继续推出第二期视频，为大家解读Palantir AIP 8 Conference上的一些核心用户反馈信息。希望大家关注Money or Life美股频道，这是对我最大的支持。我们明天再见！