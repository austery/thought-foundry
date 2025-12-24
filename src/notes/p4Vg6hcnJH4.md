---
area: tech-insights
category: technology
companies_orgs:
- Google
- Nvidia
- Anthropic
- Meta
- xAI
- SSI
- OpenAI
- Broadcom
- Cipher Mining
- CoreWeave
- Nebius
- AMD
date: '2025-12-01'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- SemiAnalysis
- XLA代码仓库
- GitHub
- tpu-inference仓库
people:
- Kamala Harris
- Donald Trump
- Joe Biden
- Liz Cheney
products_models:
- Gemini 3
- H100
- GB200
- GB300
- CUDA
- XLA
- TensorFlow
- PyTorch
- vLLM
- NVLink
- FR光模块
- Hopper架构
- Blackwell架构
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=p4Vg6hcnJH4
speaker: Best Partners TV
status: evergreen
summary: 本文深入剖析谷歌最新一代AI芯片TPUv7如何凭借成本优势、系统架构创新和软件生态的逐步完善，向英伟达在AI芯片市场的垄断地位发起挑战。通过对比TPUv7与英伟达GPU在总拥有成本（TCO）、有效FLOPs、机架设计、互联技术等方面的表现，揭示了AI芯片竞争的核心要素已从峰值性能转向综合系统效益。文章还探讨了谷歌在PyTorch支持和开源推理框架集成方面的努力，以及TPUv7对AI行业未来格局的深远影响。
tags:
- ai-chip-market
- chip-competition
- ecosystem
- optimization
- system
title: 谷歌TPUv7挑战英伟达GPU：AI芯片市场格局的深度解析
---

### AI芯片：行业核心命脉与英伟达的垄断地位

当前，如果要问AI行业最核心的命脉是什么，答案大概率是**AI芯片**（AI Chip: 专为人工智能计算优化设计的处理器），尤其是能够支撑大模型训练与推理的高性能AI芯片。过去几年，英伟达凭借着它的**GPU**（Graphics Processing Unit: 图形处理器，通用并行计算芯片）与**CUDA**（Compute Unified Device Architecture: 英伟达开发的并行计算平台和编程模型）生态，几乎垄断了全球AI芯片市场。甚至有人说，AI的进步本质上是Nvidia GPU算力的进步。

但就在2025年11月底，谷歌正式对外释放了一个重磅信号：最新一代AI芯片**TPUv7**（Tensor Processing Unit v7: 谷歌专为机器学习工作负载设计的第七代专用集成电路）开始大规模对外销售。不仅签下了**Anthropic**（一家领先的人工智能研究公司，开发了Claude系列大模型）这样的顶级AI公司订单，还吸引了Meta、xAI等巨头的关注。这不禁让人疑问，TPUv7到底有什么底气敢向Nvidia的王者地位发起挑战呢？CUDA的护城河真的要被打破了吗？今天我们就来根据**SemiAnalysis**（一家专注于半导体行业分析的机构）的最新文章，深入拆解一下这颗可能改写AI芯片格局的关键产品，看看谷歌是否有机会将英伟达挑下王座。

### AI芯片竞争范式转变：从峰值性能到综合效益

首先，我们得先明白一个大的前提：AI时代的芯片早已不是谁的**峰值性能**（Peak Performance: 芯片在理想条件下能达到的最高计算能力）高谁就赢的游戏。和传统软件不同，AI软件的成本结构里，硬件基础设施的权重远超开发者成本。比如你的芯片架构、系统设计好不好，直接决定了训练一个大模型要花多少钱、后续运营要耗多少电，最终会影响你的毛利率。这也是为什么Google、亚马逊这些巨头早在十年前就开始自研AI芯片，他们不是为了炫技，而是为了在**AI规模化部署**（AI Scaled Deployment: 将人工智能技术大规模应用于实际场景）中掌握成本与性能的主动权。

Google的TPU之路其实比很多人想象的要早。早在2006年，Google就提出了为AI打造专属基础设施的想法。但是真正让这个想法落地的，还是2013年的一次危机。当时Google发现，如果要实现AI的规模化部署，他们需要把现有的**数据中心**（Data Center: 集中存放计算机服务器和网络设备，提供数据存储和计算服务的场所）数量翻倍，这显然是成本和时间都不允许的。于是，Google正式启动了TPU的研发。第一版TPU在2016年正式量产。有意思的是，同年亚马逊也意识到了自研芯片的重要性，启动了**Nitro Program**（亚马逊自研芯片项目，旨在优化云计算基础设施）。不过两者的方向完全不同，Google聚焦AI专属计算，而亚马逊则侧重优化通用CPU和存储。这两种选择也奠定了后来两家在AI基础设施领域的不同定位。

### 谷歌TPU的战略转型与Anthropic的百万订单

过去几年，TPU一直是Google的内部王牌。比如当前公认的顶级大模型之一，Google的**Gemini 3**（谷歌开发的一款顶级大型语言模型），就是完全基于TPU训练的。但是Google并没有把TPU真正商业化，即使2018年在**GCP**（Google Cloud Platform: 谷歌提供的云计算服务平台）上开放了TPU服务，也更多是附带功能。但是从2024年底到2025年，Google的战略发生了根本性转变，他们开始调动全栈资源，不仅通过GCP向外部客户提供TPU算力，还直接销售完整的TPU系统，正式成为Nvidia的商用芯片竞争对手。

而这个转变的第一个重量级案例，就是和Anthropic的合作。Anthropic这家公司大家一定都不陌生了，他们的**Claude 4.5 Opus**（Anthropic开发的一款顶级大型语言模型）是目前能和Gemini 3抗衡的大模型之一。而根据公开资料，Anthropic这次和Google签订的TPU采购协议堪称史上最大规模，总计将达到100万个**TPU单元**（TPU Unit: 单个TPU芯片或其最小可部署计算单元），对应超1GW的算力需求。这个合作分为两个阶段：第一阶段，Anthropic直接从**博通**（Broadcom: 一家全球知名的半导体和基础设施软件解决方案提供商）采购40万个TPUv7。这些硬件以**成品机架**（Finished Rack: 预装好所有硬件并可直接部署的服务器机架）的形式交付，价值大约为100亿美元。这里需要说明的是，Anthropic自己不负责硬件的现场部署，而是交给了**Fluidstack**（一家提供高性能计算基础设施和托管服务的公司）。他们会做机柜安装、布线、烤机测试和远程运维。而数据中心的基础设施则由**TeraWulf**（一家专注于大规模数字基础设施和加密货币挖矿的公司）和**Cipher Mining**（一家专注于比特币挖矿和数字基础设施的公司）这两家原本做加密货币挖矿的公司提供。第二个阶段，Anthropic会通过GCP租赁剩下的60万个TPUv7。这笔订单对应的**未确认收入**（Unrecognized Revenue: 客户已支付但尚未提供服务或产品的收入）大约为420亿美元，占了GCP 2025年第三季度新增490亿美元订单的绝大部分。

除了Anthropic，Google还在积极接触更多客户，比如Meta、xAI、SSI，甚至连OpenAI都在和Google接触。而这些客户的选择背后有一个很直接的逻辑，那就是买TPU越多，能节省的Nvidia GPU**资本开支**（Capital Expenditure, CapEx: 企业用于购买固定资产或升级现有资产的支出）就越多。最典型的例子就是OpenAI，他们至今还没有实际部署TPU，但仅仅是威胁要采购TPU，就从Nvidia那里拿到了整个GPU集群大约30%的折扣，直接提升了每**总拥有成本**（Total Cost of Ownership, TCO: 购买、部署、使用和维护一项资产或系统在整个生命周期内的总成本）性能。这足以说明，TPU的出现已经打破了Nvidia之前的**定价霸权**（Pricing Hegemony: 在市场中拥有绝对的定价权，能够主导价格）。

### 英伟达的防御姿态与“循环经济”质疑

面对Google的攻势，Nvidia当然不会坐视不理。2025年11月26日，Nvidia官方发布了一条**公关声明**（Public Relations Statement: 公司或组织向公众发布的信息，旨在维护形象或回应质疑），大意是我们为Google的成功感到高兴，我们仍然在向Google供货。Nvidia比行业领先一代，是唯一能运行所有AI模型、而且能在所有计算场景部署的平台。相比**ASIC芯片**（Application-Specific Integrated Circuit: 专用集成电路，为特定用途设计）来说，Nvidia GPU的性能、通用性和灵活性都更强。这条声明看起来很自信，但背后其实展示了Nvidia的防御姿态。因为过去几个月，Google的TPU生态实在是太顺了：TPU产能上调、Anthropic的大订单落地、Gemini 3和Claude 4.5 Opus这两个顶级模型都用TPU训练，甚至连供应链都开始重新估值，股价上涨，而Nvidia GPU供应链的部分公司则出现了回调。

更让Nvidia头疼的，是外界对它**循环经济**（Circular Economy: 一种经济模式，旨在通过重复利用、修复和回收来减少资源消耗和废弃物产生）的质疑。有观点认为，Nvidia在通过投资AI初创公司来维持GPU的销量。比如Nvidia给初创公司投钱，初创公司用这笔钱买Nvidia GPU，云服务商也买GPU，最后Nvidia确认收入，但本质上是钱从左口袋到右口袋，因为这些AI初创公司大多还没盈利，无法形成真正的商业循环。

不过，Nvidia的财务团队很快回应了这一质疑，核心有三点：第一，Nvidia的战略投资占营收比例很低，2026财年Q3投资了37亿美元，仅占当季营收的7%，而且全球**私募市场**（Private Market: 非公开交易的市场，通常涉及未上市公司的股权或债务）每年募资约1万亿美元，Nvidia的投资只是很小一部分；第二，投资完全透明，在资产负债表、利润表和现金流量表中都有明确的披露；第三，被投的AI公司营收增长很快，主要收入来自第三方客户，不是Nvidia自己。虽然这个回应有一定的道理，但是不可否认的是，Nvidia通过**股权返利**（Equity Rebate: 通过给予股权或股权相关权益来回馈客户或合作伙伴）而非降价来留住客户，本质上还是怕TPU抢单。毕竟降价会直接拉低**毛利率**（Gross Profit Margin: 销售收入减去销售成本后的利润占销售收入的百分比），引发投资者的恐慌。

### TPUv7的硬件核心优势：迭代脉络与参数解析

接下来，我们来深入了解一下TPUv7的硬件细节，这才是Google敢于挑战Nvidia的核心底气。首先，我们得先理清**TPU迭代脉络**（TPU Iteration Roadmap: TPU产品系列的发展演进路线），因为TPUv7的优势是建立在前面几代产品的积累上的。从**TPU v5e**（Tensor Processing Unit v5e: 谷歌TPU系列的早期版本，e代表效率型）到TPU v7，Google的设计思路也发生了明显变化。早期TPU更注重可靠性和适配内部的工作负载，而最近几年则完全对标Nvidia的旗舰GPU，在峰值性能、内存容量和带宽上全面追赶。

我们先来看核心参数的对比：
*   **TPU v5e**，代号Viperlite，2023年第四季度量产，采用**N5工艺**（N5 Process: 台积电（TSMC）的5纳米制程技术），1个**计算Die**（Compute Die: 芯片中负责主要计算功能的独立晶圆）+1个**IOD**（Input/Output Die: 输入输出晶圆，负责芯片与外部通信），加2颗**HBM2E**（High Bandwidth Memory 2E: 第二代高带宽内存的增强版）。HBM容量16GB，带宽819GB/s，**FP8稠密计算性能**（FP8 Dense Compute Performance: 8位浮点数密集计算性能，衡量AI芯片处理能力）394 **TFLOPs**（Tera Floating-point Operations Per Second: 每秒万亿次浮点运算），**TDP**（Thermal Design Power: 热设计功耗，芯片散热系统需要处理的最大热量）约300W，主要定位入门级AI推理。
*   **TPU v5p**，代号Viperfish，2024年第一季度量产，**N5P工艺**（N5P Process: 台积电（TSMC）的5纳米增强版制程技术），1个计算Die+1个IOD+6颗HBM2E。HBM容量95GB，带宽2765GB/s，FP8性能918 TFLOPs，TDP约550W，面向中高端训练。
*   **TPU v6**（Tensor Processing Unit v6: 谷歌TPU系列的第六代版本），代号Trillium，2024年第四季度量产，**N3E工艺**（N3E Process: 台积电（TSMC）的3纳米增强版制程技术），1个计算Die+1个IOD+2颗**HBM3**（High Bandwidth Memory 3: 第三代高带宽内存）。HBM容量32GB，带宽1640GB/s，FP8性能918 TFLOPs，TDP约390W。这里要注意，TPU v6和TPU v5p的FP8性能相同，但是用了更先进的工艺，功耗降低了约30%，而且把**脉动阵列**（Systolic Array: 一种专门为矩阵乘法等AI计算优化的并行计算架构）从128x128扩大到256x256，这是计算性能提升的关键。
*   **TPU v7**，代号Ironwood，2025年第四季度量产，N3E工艺，2个计算Die+1个IOD+8颗**HBM3E**（High Bandwidth Memory 3E: 第三代高带宽内存的增强版）。HBM容量192GB，带宽7380GB/s，FP8性能4614 TFLOPs，TDP约980W。这是TPU首次采用双计算Die设计，HBM容量和带宽直接翻倍，FP8性能比TPU v6提升了5倍，已经非常接近Nvidia的GB200。

### 突破峰值FLOPs迷思：TCO与有效FLOPs的决定性作用

可能有朋友会问，TPUv7的峰值性能和GB200差不多，为什么说它能挑战Nvidia？这里就需要跳出峰值FLOPs的误区，看两个更关键的指标：**总拥有成本**（Total Cost of Ownership, TCO: 购买、部署、使用和维护一项资产或系统在整个生命周期内的总成本）和**有效FLOPs**（Effective FLOPs: 芯片在实际运行中能持续达到的计算能力）。

先看TCO。我们做了一个对比：Nvidia GB200 NVL72的每小时成本约2.28美元，GB300 NVL72约2.73美元；而Google内部使用TPUv7 3D环面架构的每小时成本仅1.28美元，即使是外部客户，每小时成本也只有1.60美元。从每FP8稠密**PFLOP**（Peta Floating-point Operations Per Second: 每秒千万亿次浮点运算）成本来看，GB200是0.46美元/小时，GB300是0.55美元/小时，而TPUv7内部使用是0.28美元/小时，外部租赁是0.40美元/小时。也就是说，即使算上Google的利润，TPUv7的单位算力成本还是比GB200低13%，比GB300低27%。

再看有效FLOPs。Nvidia的峰值FLOPs其实有水分，因为它采用了**动态电压频率缩放**（Dynamic Voltage and Frequency Scaling, DVFS: 根据工作负载动态调整芯片电压和频率以优化功耗和性能的技术），芯片会根据功耗和温度动态调整频率。峰值FLOPs是用最高可能频率计算的，但实际运行中根本无法持续。比如Nvidia **Hopper架构**（Hopper Architecture: 英伟达GPU的一种架构代号，如H100）的H100在测试中最多只能达到峰值的80%，**Blackwell架构**（Blackwell Architecture: 英伟达GPU的一种架构代号，如GB200）的GB200大约70%，AMD的MI300系列甚至只有50%-60%。而TPU因为主要面向内部使用，不需要靠峰值数字来做营销，所以它的峰值FLOPs更贴近实际。更重要的是，TPU的**模型FLOPs利用率**（Model FLOPs Utilization, MFU: 芯片实际用于模型计算的FLOPs占理论峰值FLOPs的比例）更高。Google内部的工程师能把TPUv7的MFU做到40%，而Nvidia GPU的MFU通常在30%左右。这意味着，即使TPUv7的峰值FLOPs比GB200低8%（4614 vs 5000），实际能发挥的有效FLOPs反而更高。

举个具体的例子，如果Google用TPUv7训练模型，MFU达到40%，而Nvidia用GB300达到30%，那么TPUv7的每有效PFLOP成本会比GB300低62%。即使是Anthropic这样的外部客户，MFU做到40%，成本也能低52%。更极端的情况是，只要TPUv7的MFU达到Google内部的15%，或者是外部客户的19%，那它的TCO就能和Nvidia GPU打平。这意味着，哪怕TPU的利用率只有Nvidia的一半，客户还是能做到成本不增加。这对于追求性价比的AI公司来说，吸引力太大。

### TPU的系统架构：真正的护城河

除了芯片本身，TPU的**系统架构**（System Architecture: 计算机系统的整体设计和组织方式，包括硬件和软件组件及其相互关系）才是它真正的护城河。谷歌一直强调系统比**微架构**（Microarchitecture: 芯片内部的详细设计，决定了指令如何被执行）更重要，这句话在TPUv7上体现得淋漓尽致。我们从**机架**（Rack: 用于安装服务器、网络设备等硬件的标准框架）、**互联数据中心**（Interconnected Data Center: 多个数据中心通过高速网络连接，协同工作）、**网络**（Network: 连接计算机和设备的通信系统）三个层面来拆解。

首先是TPUv7的机架设计。TPU的机架设计已经迭代了好几代，核心特点是简洁且高效。一个标准的TPUv7机架包含16个**TPU 托盘**（TPU Tray: 承载TPU主板和相关组件的模块化单元）、8-16个**CPU 托盘**（CPU Tray: 承载CPU主板和相关组件的模块化单元）、1个**机架顶交换机**（Top-of-Rack Switch, ToR: 位于服务器机架顶部的网络交换机）、**电源单元**（Power Supply Unit, PSU: 为电子设备提供电力的组件）和**电池备份单元**（Battery Backup Unit, BBU: 在主电源故障时提供临时电力的设备）。每个TPU 托盘上有1块**TPU主板**（TPU Mainboard: 承载TPU芯片和相关电路的主电路板），上面装有4颗TPUv7芯片，还有16个用于**ICI互联**（Inter-Chip Interconnect: 芯片间互联，用于连接多个芯片）的**OSFP光模块笼子**（Octal Small Form-factor Pluggable Optical Module Cage: 一种用于高速光模块的接口），以及4个用来连接CPU的**CDFP PCIe笼子**（CXP Double-density Form-factor Pluggable PCIe Cage: 一种用于高速PCIe接口的笼子）。

冷却方面，Google从TPUv3开始就使用**液体冷却**（Liquid Cooling: 使用液体作为传热介质来冷却电子设备的技术），但是也保留了部分**风冷设计**（Air Cooling Design: 使用空气作为传热介质来冷却电子设备的技术）。两者的区别在于，液冷机架的TPU 托盘和CPU 托盘比例是1:1，风冷是2:1。液冷能支持更高的**功耗密度**（Power Density: 单位体积内消耗的功率），所以不需要那么多CPU来分担负载。TPU液冷的一个创新点是**动态流量控制**（Dynamic Flow Control: 根据需求实时调整液体或气体流量的技术），冷却液的流量会根据芯片的实时负载调整。比如某个芯片正在满负荷训练，流量就加大，反之则减小，这样能比传统的固定流量冷却节省大约20%的能耗。另外，TPU的**电压调节模块**（Voltage Regulator Module, VRM: 调节并稳定供电电压的电路模块）采用**垂直供电设计**（Vertical Power Delivery Design: 电源模块垂直放置，直接为芯片供电的设计），放在PCB板的背面，并且用**冷板**（Cold Plate: 内部有冷却液流动的金属板，用于吸收热量）单独冷却，这样能避免VRM的热量影响芯片本身，提升稳定性。对比Nvidia GB200的标准Oberon NVL72机架，TPU的设计明显更简单。Nvidia需要用**背板**（Backplane: 服务器机箱中的一块大型电路板，用于连接其他电路板和组件）连接GPU和交换机，而TPU的互联全靠外部**铜缆**（Copper Cable: 使用铜线作为导体传输信号的电缆）或**光模块**（Optical Module: 将电信号转换为光信号或将光信号转换为电信号的设备）。不仅成本更低，维护也更方便。比如某个TPU Tray坏了，直接更换即可，不需要动整个机架的背板。

接下来是芯片间互联ICI，这是TPU能支持超大规模集群的关键。TPUv7的ICI采用**3D环面架构**（3D Torus Architecture: 一种三维网格状的互联拓扑结构），最小的**逻辑单元**（Logical Unit: 计算机系统中具有特定功能的最小可识别组件）是4x4x4立方体，对应64颗TPU，正好装进一个机架。每个TPU在3D空间中连接6个邻居：X轴2个、Y轴2个、Z轴2个。其中2个邻居通过PCB板上的走线直接连接，另外4个则根据位置不同，用铜缆DAC或者光模块连接。这种设计的好处是可扩展性极强，通过**光电路交换机**（Optical Circuit Switch, OCS: 一种通过光学方式切换光信号路径的设备）可以把多个4x4x4立方体连接起来，形成更大的集群。TPUv7的最大集群规模是9216颗TPU，相当于144个64TPU机架。OCS在这里的作用相当于智能开关，可以动态调整互联路径。比如某个铜缆坏了，OCS能自动把数据路由到其他的光模块，还能根据负载需求，切割出不同规模的切片，比如4颗TPU用于小模型推理，2048颗TPU用于大模型训练，灵活性远超Nvidia GPU通常64-72颗的集群规模。另外，TPU的ICI还采用了**FR光模块技术**（Four-lane Reach Optical Module Technology: 一种支持四通道高速光传输的光模块技术），通过**粗波分复用**（Coarse Wavelength Division Multiplexing, CWDM: 一种将多个波长的光信号在同一光纤中传输的技术）CWDM8，把8个100G的波长整合到一根光纤上，再用**光环形器**（Optical Circulator: 一种允许光信号在不同端口间单向传输的无源器件）实现**全双工通信**（Full-Duplex Communication: 数据可以在两个方向上同时传输的通信模式）。这样一根光纤就能替代原来的8对光纤，不仅减少了布线成本，还提升了带宽密度。

最后是**数据中心网络**（Data Center Network, DCN: 连接数据中心内所有服务器和存储设备的网络）。如果说ICI是机架内部的互联，DCN就是机架之间的超大规模互联。Google的DCN采用了光开关+聚合块的架构，核心是用**Paloma OCS**（Paloma Optical Circuit Switch: 谷歌自研的一种光电路交换机）替代了传统的电子交换机。一个典型的TPUv7 DCN可以支持14.7万颗TPU，分为4个**聚合块**（Aggregation Block: 网络架构中用于汇聚多个下层连接的模块），每个聚合块连接4个ICI集群。这种架构的优势在于可以**增量扩展**（Incremental Scaling: 逐步增加系统容量或功能，而不是一次性大规模部署）。比如要新增一个聚合块，不需要重新布线，只要通过OCS把新聚合块接入现有网络即可。而且带宽可以独立升级，比如某个聚合块的负载增加了，就把它的**上行带宽**（Uplink Bandwidth: 从本地网络向外部网络传输数据的速率）从100G提升到200G，不影响其他聚合块。这对需要持续扩容的AI数据中心来说，能够大幅降低长期成本。

### TPU的软件生态短板与谷歌的弥补努力

当然，TPU也不是没有短板，软件生态一直是它的**阿喀琉斯之踵**（Achilles' Heel: 指某人或某物最脆弱或最致命的弱点），也是Nvidia CUDA生态最坚固的护城河。不过，Google在2025年已经开始针对性地补这个短板，主要做了两件事。

一是强化**PyTorch**（Facebook开源的机器学习框架）支持。过去，TPU的软件生态主要围绕**Jax/XLA**（Jax: 谷歌开发的用于高性能数值计算的Python库；XLA: Accelerated Linear Algebra，谷歌开发的线性代数编译器）和**TensorFlow**（谷歌开源的机器学习框架），对PyTorch的支持非常敷衍，纯粹依赖**惰性张量**（Lazy Tensor: 一种计算图构建方式，只在需要时才执行计算）来捕获计算图，不支持PyTorch原生的**分布式API**（Distributed API: 用于在多个计算设备上协调任务的应用程序编程接口）和**并行API**（Parallel API: 用于在多个处理器或核心上同时执行任务的应用程序编程接口）。外部用户用起来很别扭。但是在2025年10月，Google的工程师**罗伯特·亨特**在**XLA代码仓库**（XLA Code Repository: XLA编译器相关的代码存储库）中宣布，他们将开发原生TPU PyTorch后端，支持PyTorch的**即时执行**（Eager Execution: 机器学习框架中指令立即执行的模式）、**编译优化**（Compilation Optimization: 通过编译器对代码进行改进，以提高其执行效率）以及**DTensor**（Distributed Tensor: PyTorch中用于分布式计算的张量抽象）等原生API。这背后很大程度是为了争取Meta，因为Meta的AI团队一直用PyTorch，之前因为TPU的PyTorch支持太差而放弃过TPU，现在Google要重新赢回他们。同时，Google还在推动了**自定义内核语言Pallas**（Custom Kernel Language Pallas: 谷歌为TPU开发的自定义计算内核编程语言，类似于Triton）与PyTorch的集成。Pallas相当于TPU版的**Triton**（OpenAI开发的用于编写高性能GPU内核的编程语言），现在Google把Pallas作为PyTorch编译后端的**代码生成目标**（Code Generation Target: 编译器将高级语言代码转换为的低级语言或机器代码格式），这样开发者可以用Pallas来编写自定义内核，直接在PyTorch中调用，不需要再切换到Jax。

第二是集成了**vLLM/SGLang**（vLLM: 一个用于大模型推理的开源库；SGLang: 一个用于大模型推理的开源库）等开源推理框架。vLLM和SGLang是目前最流行的大模型推理框架，之前只支持CUDA。2025年5月，Google在**GitHub**（一个基于Web的代码托管平台）上创建了**tpu-inference仓库**（tpu-inference repository: 谷歌在GitHub上创建的TPU推理相关代码库），作为vLLM TPU的官方后端。目前已经支持TPU v5p和v6e。不过，当前的集成方式还比较间接，需要把PyTorch模型转换成Jax模型，再利用Jax的XLA编译流程运行。未来等原生PyTorch后端成熟后，会直接支持PyTorch模型。Google还为vLLM贡献了多个优化内核，比如**分页注意力内核**（Paged Attention Kernel: 一种优化大模型注意力机制计算的内核，通过内存分页管理提高效率），通过**预取查询和KV块**（Prefetch Query and KV Blocks: 在计算前提前加载注意力机制中的查询和键值对数据），实现**内存加载与计算的重叠**（Memory Loading and Computation Overlap: 在数据加载的同时进行计算，以提高效率）；还有**全融合MoE内核**（Fully Fused Mixture-of-Experts Kernel: 一种优化MoE模型计算的内核，将多个操作融合以减少内存访问和通信开销）。传统的**MoE内核**（Mixture-of-Experts Kernel: 混合专家模型中的计算内核，用于处理不同专家网络）需要先按**专家ID排序token**（Expert ID Sorted Tokens: 根据专家网络ID对输入数据进行排序），再分发到不同设备，但是TPU做排序很慢，而且无法**重叠通信和计算**（Communication and Computation Overlap: 在数据通信的同时进行计算，以提高效率）。而全融合MoE则是一次处理一个专家的token，避免排序，还能重叠通信，实测速度比传统内核快3-4倍。

不过，TPU的软件生态还有一个关键的短板没补齐，那就是**XLA:TPU的编译器和运行时**（XLA:TPU Compiler and Runtime: 专门为TPU优化的XLA编译器和运行时环境）以及**多Pod训练的MegaScaler代码**（Multi-Pod Training MegaScaler Code: 用于在多个TPU Pod上进行大规模模型训练的代码）没有开源。这意味着外部开发者无法深入优化编译器，也无法自定义多集群训练的逻辑。而Nvidia的**CUDA Toolkit**（CUDA工具包: 英伟达提供的用于CUDA编程的开发工具集）、**cuDNN**（CUDA Deep Neural Network library: 英伟达提供的用于深度神经网络的CUDA加速库）、**NCCL**（Nvidia Collective Communications Library: 英伟达提供的用于多GPU通信的库）都是开源或半开源的，开发者可以轻松调试和优化。如果Google不开放这些核心软件，TPU的外部生态很难真正超越CUDA。

### TPUv7对AI行业的影响与未来展望

最后，我们来聊聊TPUv7对整个AI行业的影响，以及它是否能真正挑战Nvidia的地位。从短期来看，TPUv7会分走一部分高端客户的GPU订单。比如Anthropic、Meta这些有能力做自定义优化的公司，他们有足够的工程师团队去适配TPU的软件栈，从而享受更低的TCO。这会迫使Nvidia进一步降价，或者推出更多的定制化方案来留住客户，比如为OpenAI、Anthropic提供更优惠的股权返利，或者针对特定工作负载优化**GPU固件**（GPU Firmware: 运行在GPU硬件上的低级软件）。

从长期来看，TPU的威胁取决于两个关键因素：分别是Google是否开源XLA生态，以及Nvidia能否守住CUDA的开发者粘性。如果Google开源XLA:TPU编译器和MegaScaler代码，再加上TPU的硬件性价比优势，很可能会吸引一批中小开发者转向TPU。而如果Nvidia不能持续推出更好的软件工具，比如改进CUDA的易用性、降低学习成本，或者在下一代GPU上无法拉开性能差距，那么CUDA的护城河就可能被逐渐侵蚀。另外，TPU还会带动一个新趋势，那就是**Neocloud服务商**（Neocloud Service Provider: 新兴的云计算服务提供商，通常专注于高性能计算或特定工作负载）的分化。目前，很多Neocloud服务商，比如**CoreWeave**（一家专注于GPU云服务的公司）、**Nebius**（一家提供云基础设施和AI服务的公司）都有Nvidia的投资，他们会优先采购Nvidia的GPU，不支持TPU或者AMD GPU；而像Fluidstack这样没有Nvidia投资的Neocloud，则会专注于TPU托管，填补市场空白。这种分化会让客户有更多选择，进一步打破Nvidia的垄断。

不过，我们也不能低估Nvidia的应对能力。毕竟它已经从芯片公司转型为了一家系统公司，GB200的机架设计、**NVLink互联**（NVLink Interconnect: 英伟达开发的高速芯片间互联技术），以及针对**大语言模型**（Large Language Model, LLM: 具有大量参数和复杂结构的深度学习模型，用于处理和生成人类语言）的软件优化都非常成熟。而且CUDA生态有几百万开发者，积累了几十年的开源库和工具，不是Google短期内能超越的。

总结来说，TPUv7的出现标志着AI芯片行业从Nvidia一家独大，进入了双雄争霸的初期阶段。它不会立刻终结Nvidia的垄断地位，但是会迫使整个行业进入**性价比竞争**（Price-Performance Competition: 产品或服务在价格和性能方面的综合竞争）的新阶段。这对所有AI公司来说都是好事。而最终谁能胜出，取决于硬件性价比和软件生态的综合较量，这场竞争还会持续很多年。不过，对于广大AI创业公司来说，无论选择TPU还是GPU，理解你自己的工作负载，找到性价比最高的基础设施，才是应该去思考的方向。那么大家对TPU和GPU的未来有什么看法呢？欢迎在评论区留言。