---
area: tech-insights
author: 大飞说科技
category: technology
companies_orgs:
- NVIDIA
- Intel
- OpenAI
- Nokia
- Oracle
- Foxconn
- Uber
- U.S. Department of Energy
- Argonne National Laboratory
- HPE
- Los Alamos National Laboratory
- Dell Technologies
- T-Mobile
- Siemens
- FANUC
- Foxconn Industrial Internet
- Caterpillar
- Toyota
- TSMC
- Figure AI
- Agility Robotics
- Amazon
- Skild AI
- FieldAI
- Disney
- Palantir
- CrowdStrike
- SAP
- Synopsys
- Cadence
- Eli Lilly
- Stellantis
- Lucid
- Mercedes-Benz
- Aurora
- Volvo
- Waabi
date: 2025-10-31
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Omdia
people:
- Jensen Huang
- Vera Rubin
products_models:
- Vera Rubin
- Blackwell GPU
- CUDA-X
- cuDNN
- TensorRT-LLM
- RAPIDS
- cuOpt
- cuLitho
- CUDA-Q
- HBM4
- LPDDR
- NVLINK-C2C
- Vera Rubin NVL144
- GB300 NVL72
- Rubin Ultra NVL576
- Blackwell Ultra
- Solstice
- Equinox
- QuantumX 800 Infiniband
- ARC
- AI-RAN
- NVQLink
- Omniverse
- Xcelerator
- OpenUSD
- Helix
- Digit
- Isaac Lab
- BlueJay
- Cosmos
- Ontology
- DRIVE AGX Hyperion 10
- DRIVE AGX Thor
- DRIVE Platform
project:
- ai-impact-analysis
- market-cycles
series: ''
source: https://www.youtube.com/watch?v=xefsis6QGG0
speaker: Best Partners TV
status: evergreen
summary: 在GTC大会上，英伟达CEO黄仁勋将AI创新提升至“下一个阿波罗时刻”。他发布了下一代Vera Rubin超级芯片，并详细阐述了CUDA-X全栈加速库、NVQLink量子互联技术等核心软件生态。英伟达通过对诺基亚、OpenAI等公司的战略投资，以及与甲骨文、富士康、Uber等巨头的广泛合作，将触角伸向6G、量子计算、机器人、自动驾驶等多个前沿领域。演讲描绘了英伟达从算力到场景的全链路AI帝国版图，预示着新工业革命的到来。
tags:
- accelerated-computing
- ai-innovation
- digital
- labor
- technology
title: 英伟达GTC大会：黄仁勋描绘AI帝国版图，发布Vera Rubin芯片，深化全栈生态与全球合作
---

### 英伟达GTC大会：AI创新定调“下一个阿波罗时刻”

美东时间10月28日，黄仁勋在华盛顿举办的GTC大会上发表了一场重要的主题演讲。他以一系列人类历史创新的剪影作为开场，将英伟达与AI创新直接拔高定调为“下一个**阿波罗时刻**”（Apollo Moment: 指像美国阿波罗登月计划一样，具有里程碑意义、推动人类进步的重大创新时刻）。在这次演讲中，除了展示下一代超级芯片Vera Rubin，黄仁勋还大谈6G、量子计算、机器人和自动驾驶，大屏上的合作对象名单可以说是密密麻麻。

前不久，英伟达曾对外宣布要向曾经的竞争对手英特尔投资50亿美元，一度让英特尔股价飙涨。之后又表示将向OpenAI投资1000亿美元。这种资本循环运作一度被人戏称是左脚踩右脚式的泡沫。尽管引起了市场的热议，但是英伟达并没有停下撒钱的动作。在这次大会上，黄仁勋又宣布要投资昔日巨头诺基亚10亿美元，让诺基亚的股价应声暴涨超过20%。

除了与诺基亚合作，英伟达还宣布将与甲骨文打造AI超级计算机，与富士康合作在德克萨斯州建立生产GPU的自主机器人工厂，并且计划与Uber合作开发自动驾驶出租车等等。可以说，英伟达的触角已经全方位地伸向了全球各行业的龙头。而随着过去四个季度英伟达已经出货了600万颗Blackwell GPU，公司的估值更是站上5万亿美元。今天我们就来回顾一下这场演讲的主要内容，看看英伟达的AI帝国版图又扩大了多少。

### 计算产业的历史性转折与英伟达的应对策略

黄仁勋在演讲中回顾了计算产业的历史性转折。数十年来，**CPU**（Central Processing Unit: 中央处理器，计算机系统的核心计算单元）的性能始终遵循着一个可预测的规模增长轨迹。然而，随着**登纳德缩放定律**（Dennard scaling: 指在晶体管尺寸缩小、密度增加的同时，功耗密度保持不变的半导体发展规律）走向终结，传统的发展路径已经难以为继。

面对这些挑战，英伟达给出的答案是**并行计算**（Parallel Computing: 一种计算方法，通过将计算任务分解为多个子任务，并同时在多个处理器上执行，以提高计算速度）、**GPU**（Graphics Processing Unit: 图形处理器，一种专门设计用于快速处理图像和视频的电子电路，在并行计算方面表现出色）和**加速计算架构**（Accelerated Computing Architecture: 一种通过使用专用硬件如GPU来加速特定计算任务的系统设计），并且为此精心构建了一套软件基石——**CUDA-X全栈加速库**（CUDA-X Full-Stack Acceleration Library: 英伟达提供的一套全面的软件库和工具，用于在GPU上加速各种计算任务，涵盖深度学习、数据科学等领域）。

该加速库覆盖了从深度学习领域的**cuDNN**（CUDA Deep Neural Network Library: 英伟达为深度学习应用优化的GPU加速库）与**TensorRT-LLM**（TensorRT-Large Language Model: 英伟达用于优化和加速大型语言模型推理的软件库）、数据科学平台**RAPIDS**（Rapid Analytics Platform for Data Science: 英伟达提供的数据科学平台，利用GPU加速数据处理和机器学习任务）、决策优化工具**cuOpt**（CUDA Optimization: 英伟达提供的决策优化工具）、计算光刻解决方案**cuLitho**（CUDA Lithography: 英伟达提供的计算光刻解决方案）以及量子与混合计算框架**CUDA-Q**（CUDA Quantum: 英伟达的量子与混合计算框架）等等。黄仁勋将这个完整的软件生态系统比喻为公司最珍贵的宝藏，它构成了英伟达加速计算战略的技术核心，正在为各行业的计算变革提供着底层的动力。

### Vera Rubin超级芯片：融合式计算引擎的未来

随后，黄仁勋首次公开展示了下一代**Vera Rubin**超级芯片。该芯片取名自20世纪最具影响力的天文学家之一**薇拉·鲁宾**（Vera Rubin: 20世纪美国著名天文学家，其研究揭示了暗物质的存在）。Vera Rubin芯片搭载了一颗代号为Vera的CPU以及两颗体积庞大的Rubin GPU。每颗GPU均采用最新的**HBM4**（High Bandwidth Memory 4: 第四代高带宽内存，一种高性能内存技术，提供极高的数据传输速率）高带宽内存，配合32个**LPDDR**（Low-Power Double Data Rate: 低功耗双倍数据速率内存，一种为移动设备设计的低功耗内存技术）内存插槽。每颗芯片的浮点计算性能可以达到50 **PFLOPs**（Peta Floating-point Operations Per Second: 拍次浮点运算每秒，衡量计算机浮点运算能力的单位，1 PFLOPs = 10^15 次浮点运算），搭配288 GB的HBM4显存，几乎是现有GB300性能的好几倍。

与此同时，Vera CPU还采用定制**Arm架构**（Arm architecture: 一种精简指令集计算机（RISC）架构，广泛应用于移动设备和嵌入式系统），拥有88个核心、176个线程，并且通过**NVLINK-C2C**（NVLINK Chip-to-Chip: 英伟达的芯片间高速互连技术，用于连接GPU和CPU，提供极高带宽）接口与GPU连接，带宽高达1.8 TB/s。这样的架构组合使得超级芯片不再是传统CPU+GPU的松散拼装，而是成为了真正意义上的**融合式计算引擎**（Fused Computing Engine: 指将CPU和GPU等不同计算单元紧密集成，形成一个统一、高效的计算系统）。

对应的系统平台被命名为Vera Rubin NVL144，顾名思义，它包含144个互联单元。整体推理性能可以达到3.6 **Eflops**（Exa Floating-point Operations Per Second: 艾次浮点运算每秒，衡量计算机浮点运算能力的单位，1 Eflops = 10^18 次浮点运算），训练性能则可以达到1.2 Eflops，相较GB300 NVL72实现了3.3倍的性能提升。平台支持13 TB/s的HBM4内存带宽，拥有75 TB的高速内存。**NVLINK**（NVIDIA NVLink: 英伟达的高速互连技术，用于GPU之间或GPU与CPU之间的数据传输）与**CX9互联**（CX9 Interconnect: 指NVIDIA ConnectX-9系列网络适配器，提供高速以太网和InfiniBand连接）的总带宽分别提升到260 TB/s与28.8 TB/s。目前，英伟达实验室已经收到了首批由**台积电**（TSMC: 台湾积体电路制造股份有限公司，全球最大的专业集成电路代工制造商）代工生产的Rubin GPU样品，并且计划在明年同一时间或者更早实现量产。

不过，这还仅仅是一个开始。黄仁勋提到，Rubin架构的第二阶段——Rubin Ultra NVL576平台计划在2027年推出。这一代产品会在现有的基础上再度扩展，系统规模从144提升到576，GPU从两颗扩展到四颗。每颗GPU同样为**Reticle级别巨型芯片**（Reticle-level giant chip: 指芯片尺寸达到光刻掩模版（reticle）的极限，通常意味着非常大且复杂的芯片）。应该说，Rubin系列的推出标志着英伟达从**Blackwell架构**（Blackwell architecture: 英伟达的GPU架构代号，Vera Rubin是其下一代）的过渡。目前Blackwell Ultra仍然在高速出货中，英伟达的策略显然是想让两代产品形成梯队，用GB300继续支撑当下的云计算和训练负载，而用Rubin来预备承接2026年之后的需求。需要注意的是，Rubin的技术走向其实也反映出了英伟达在硬件设计理念上的转折。过去十年，英伟达都在不断强化GPU的并行计算能力，而如今，它开始更系统化地整合CPU与GPU，将二者统一在一个超高速的互联体系之下。

### 国家实验室的AI基础设施与6G新纪元

在Vera Rubin发布后，黄仁勋还宣布美国国家实验室正在迎来由AI基础设施驱动的全新科研时代。英伟达将与美国能源部（DOE）达成战略合作，共同建设七台新一代的超级计算机，为未来的科学研究提供强大算力支撑。在具体布局上，英伟达将联合美国能源部及甲骨文公司在阿贡国家实验室打造一个能源部体系内规模最大的AI超级计算机集群，包含Solstice和Equinox两大核心系统。Solstice系统将部署10万颗英伟达Blackwell GPU，建成后将成为全球规模最大的、面向公共研究领域的**Agentic科学平台**（Agentic Scientific Platform: 一种能够自主执行任务、进行决策和学习的科学研究平台，通常由AI驱动）。而Equinox系统将配备1万颗Blackwell GPU，提供高达2200 EFLOPS的AI算力，专门服务于前沿科学计算、模拟仿真与开放研究。

另外，英伟达还宣布与HPE合作，为洛斯阿拉莫斯国家实验室打造两台基于Vera Rubin平台的全新超级计算机，用于国家安全和科学研究。这也是Vera Rubin平台首次在具体场景中的落地，不光包含Vera CPU和Rubin GPU，还将使用NVLink第六代技术进行扩展，并且采用**QuantumX 800 Infiniband**（QuantumX 800 Infiniband: 英伟达的高速网络互连技术，用于超级计算机集群，提供极低延迟和高带宽）网络进行扩展。

除了发布新款芯片以外，英伟达的每次发布会总会有公司受到影响，股价也随之波动。而这次大会受影响最大的幸运儿应该非诺基亚莫属了。在会上，黄仁勋宣布将以每股6.01美元的价格认购1.664亿股诺基亚新股，总计投资10亿美元。两家将会一起合作来开发**空中无线电网络计算机**（ARC: Air Radio Network Computer，英伟达与诺基亚合作开发的6G电信计算平台），简称ARC。这是一款支持6G的电信计算平台，结合了连接、计算和传感等功能。诺基亚则表示将在英伟达的平台上推出**AI原生6G网络**（AI-native 6G network: 指从设计之初就深度融合人工智能技术，由AI驱动和优化的第六代移动通信网络）以及新一代的**AI-RAN**（AI-Radio Access Network: 人工智能无线接入网络，利用AI技术优化无线通信网络的性能和效率）产品线。按照黄仁勋的说法，这次合作将标志着AI原生无线时代的开始。简单来说，以前基站只是信号的中转站，现在它有可能会成为AI的**边缘推理节点**（Edge Inference Node: 指在靠近数据源的边缘设备上执行AI模型推理的计算节点，减少延迟并提高效率）。AI不仅会优化无限网络的通信，甚至会直接跑在通信网络上。而ARC更大的愿景是让未来的每个基站不仅能够根据天气、信号干扰、用户密度智能地调度发射功率，还能部署AI服务，比如工业自动化控制、远程协作、低延迟云游戏等等。

与此同时，这场交易也还有其他巨头的参与，比如戴尔科技将提供PowerEdge服务器，美国的电信巨头T-Mobile则将成为首个进行现场测试的运营商，计划在2026年启动6G的实地验证。根据市场分析机构**Omdia**（Omdia: 一家全球领先的技术研究和咨询公司）的预测，到2030年，AI-RAN市场的累计规模将超过2000亿美元。这很可能是多年以来通信产业最重要的一场技术跃迁，而诺基亚与英伟达的联合正是对这个趋势的押注。按照黄仁勋的话来说，这将是一次跨时代的平台变革。

### 量子计算与传统超算的“罗塞塔石碑”

如果说CUDA是GPU计算的起点，那么**NVQLink**（NVIDIA Quantum Link: 英伟达的量子GPU互连技术，用于连接量子处理器和GPU）与**CUDA-Q计算框架**（CUDA-Q Computing Framework: 英伟达的量子与混合计算框架，支持量子算法开发和模拟）的结合则意味着量子计算正式被纳入了英伟达的软件生态体系。在GTC大会上，黄仁勋宣布推出NVQLink，这是一种量子GPU互连技术，能够实时调用CUDA-Q计算框架，将通信延迟降到大约4微秒的极致水平，从而构建加速量子超级计算机，进行大规模的量子计算和量子纠错。

在黄仁勋看来，它不仅仅是为当今少数的量子比特进行纠错，它还在为未来进行纠错，那时我们将把量子计算机从现在的几百个量子比特扩展到几万个甚至是几十万个。据他透露，已经有17家量子处理器制造商、5家量子控制系统厂商以及9家国家实验室支持了NVQLink，整个业界的支持令人难以置信。在不久的将来，英伟达的每台GPU科学超级计算机可能都将与量子处理器紧密结合，从而扩展计算的可能性。如果按照黄仁勋的话来说，NVQLink将会是连接量子和传统超级计算机的**罗塞塔石碑**（Rosetta Stone: 指能够帮助理解两种或多种不同语言或系统之间联系的关键工具或概念），将两者整合成一个统一、连贯的系统，也标志着量子GPU计算时代的到来。

### 物理AI、数字孪生与机器人革命

在最近两年的GTC大会上，黄仁勋几乎每次都会在演讲的最后提到**Physical AI**（物理AI: 指能够理解物理世界、与物理世界互动并执行任务的人工智能，通常与机器人技术结合）、**Omniverse数字孪生**（Omniverse Digital Twin: 英伟达的平台，用于创建和模拟物理世界的数字副本，实现实时协作和仿真）和机器人。这次也不例外。

按照黄仁勋所言，西门子是首家开发支持英伟达超级Omniverse蓝图的数字孪生软件的公司，目前正在测试阶段。新的技术栈将集成到西门子的**Xcelerator平台**（Xcelerator Platform: 西门子提供的综合性数字工业软件平台），支持将真实3D模型与实时操作数据的结合，可以进行大规模工厂数字孪生的设计与运营。发那科和富士康工业富联是首批支持用**OpenUSD**（Open Universal Scene Description: 皮克斯开发的3D场景描述和交换格式，现已开源，用于构建虚拟世界）来构建机器人数字孪生模型的制造商。黄仁勋在GTC大会上展示了富士康在德州休斯顿新建的24万平方英尺工厂，在开始真正动工之前，整座工厂的产线、机器人与物流在真实物理与实时数据中被反复推演，先在虚拟世界对良率与节拍进行调优，然后再在现实中落成。

另外，卡特彼勒、丰田、台积电等也在用Omniverse数字孪生进行预测性维护、动态排产、智能调度等等任务。比如，台积电就在用Omniverse来加速亚利桑那州凤凰城晶圆厂的设计和建设。黄仁勋认为，AI正在将全球工厂转变为一个智能的思考机器，这是新一轮工业革命的引擎。他还说道，这些工厂本质上就是一个机器人，它指挥其他的机器人来制造机器人产品。要想实现这一点，所需要的软件量非常庞大，除非能够在数字孪生环境中完成，否则几乎不可能成功。

黄仁勋还提到了一些合作的机器人公司，比如Figure AI与英伟达合作，训练了**Helix视觉语言动作模型**（Helix Vision-Language-Action Model: 一种结合视觉、语言理解和动作生成能力的AI模型）。Agility Robotics的通用人形机器人Digit也借助英伟达的**Isaac Lab框架**（Isaac Lab Framework: 英伟达为机器人开发和训练提供的仿真和强化学习平台）进行了**强化学习**（Reinforcement Learning: 一种机器学习方法，通过让智能体在环境中试错，根据奖励信号学习最优策略）训练、优化步态控制以及抗扰恢复等技能。此外还有亚马逊的机器人，比如最近发布的用来拾取、装载和整合的BlueJay多臂机械手也用了Omniverse的库和框架，据说从概念到量产只花了一年多的时间。而Skild AI则在构建一个通用机器人的基础模型，以便让轮式、四足、人形机器人能够共用一套智能体系。公司采用了Isaac Lab进行运动和灵巧操作的任务训练，并且使用英伟达的**Cosmos世界基础模型**（Cosmos World Foundation Model: 英伟达用于生成训练数据集的世界级基础模型）来生成训练数据集。FieldAI在建筑、油气领域训练跨形态的机器人大脑，也在使用Isaac Lab进行强化学习以及用**Isaac Sim**（Isaac Simulator: 英伟达为机器人仿真和合成数据生成提供的工具）来生成合成数据进行软件闭环验证。迪士尼据说也在使用英伟达的Omniverse来训练有史以来最可爱的机器人。

### AI即劳动力：赋能企业软件与自动驾驶

在本次的GTC大会上，黄仁勋还提出了一个概念，那就是AI不是工具，AI就是劳动力。在他看来，以往的软件是人来使用工具，而AI是会用工具的数字劳动力。它不仅能够理解、响应、学习，还能够配合IDE、浏览器、搜索引擎、数据库完成各种实际任务。因此，英伟达开始深入到**SaaS**（Software as a Service: 软件即服务，一种通过互联网提供软件的模式）与企业软件体系中，宣布和**Palantir**（Palantir: 一家大数据分析公司，专注于政府和企业的数据集成与分析）、**CrowdStrike**（CrowdStrike: 一家网络安全公司，提供基于云的端点保护）、**SAP**（SAP: 一家企业管理软件公司，提供企业资源规划（ERP）等解决方案）、**Synopsys**（Synopsys: 一家电子设计自动化（EDA）软件公司，提供芯片设计工具）等公司合作，将它的AI工具链嵌入到一些行业龙头企业的系统中。

比如，Palantir的**Ontology**（本体论: 在信息科学中，指对特定领域概念及它们之间关系的正式表示，用于知识组织和推理）将集成英伟达的GPU，加速进行实时数据的处理。CrowdStrike的安全系统将部署英伟达的边缘AI模块，实现秒速响应。Synopsys和**Cadence**（Cadence: 另一家领先的电子设计自动化（EDA）软件公司）将利用英伟达提供的**AI Agent**（AI 代理: 一种能够自主感知环境、进行决策并执行任务的人工智能实体）辅助芯片设计，来实现AI设计AI的循环优化。在医疗领域，跨国制药公司**礼来**（Eli Lilly and Company: 美国一家大型跨国制药公司）正在打造药物研发AI工厂，据称有1000个英伟达Blackwell Ultra GPU。

在汽车行业，英伟达还宣布与**Uber**（优步: 一家提供网约车、外卖等服务的科技公司）达成战略合作，要扩展全球最大的**L4自动驾驶**（Level 4 Autonomous Driving: 自动驾驶的第四级，指在特定条件下车辆可以完全自主驾驶，无需人类干预）出行网络。Uber计划自2027年起正式启动规模化部署，首批目标是10万辆车。英伟达还为此专门推出了**DRIVE AGX Hyperion 10**（DRIVE AGX Hyperion 10: 英伟达为自动驾驶汽车设计的计算平台），号称可以让任何车辆达到L4-ready的阶段。它的核心是两套高性能的**DRIVE AGX Thor**（DRIVE AGX Thor: 英伟达为自动驾驶汽车设计的高性能车载计算平台）车载平台，基于英伟达Blackwell架构。

不过，在英伟达的布局中，像Uber这样的公司也只是其庞大生态中的一环。Stellantis、Lucid、梅赛德斯奔驰等车企也都将基于Hyperion 10平台打造各自的L4级车辆。另外，在卡车领域，Aurora、沃尔沃、Waabi正在用英伟达的平台来开发L4级别的自动驾驶卡车。而在更广泛的L4生态中，有更多的公司也都在使用英伟达的**DRIVE平台**（DRIVE Platform: 英伟达为自动驾驶开发提供的软硬件一体化平台）进行算法开发，从而形成了一个跨越乘用车、商用车、自动驾驶出租车乃至机器人领域的巨大生态网络。而英伟达的野心是成为这个网络的中枢。按照现在的统计数据，全世界大约有5000万辆出租车，未来大量的无人驾驶出租车都将加入到出租车的队伍中。黄仁勋想要通过与Uber的合作，为整个行业创建出一个框架，能够基于英伟达的AI基础设施进行大规模部署的自动驾驶车队。不得不说，曾经的科幻小说正在快速成为现实。

### 英伟达的AI帝国版图与新工业革命

以上就是这次GTC演讲的主要内容。可以看出来，黄仁勋的重心已经不再是吹单卡跑分，而是将国家战略、各种AI工厂、头部产业进行了一次大整合。英伟达从算力到场景的这张全链路施工图也正在变得越来越具体。结盟的各种行业龙头也比以往任何时候都要多。在黄仁勋的眼中，新工业革命的引擎已经轰鸣，而英伟达正手握方向盘。