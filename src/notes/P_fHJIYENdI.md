---
area: tech-insights
category: technology
companies_orgs:
- DeepMind
- Google
- University of Washington
- University of Maryland
- MIT
- Hostinger
date: '2025-02-10'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- 3Blue1Brown
people:
- John Kendrew
- Linus Pauling
- Cyrus Levinthal
- John Moult
- David Baker
- Demis Hassabis
- Lee Sedol
- John Jumper
products_models:
- AlphaFold
- AlphaGo
- Rosetta
- Rosetta at Home
- Fold It
- CASP
- EVO Former
- RF Diffusion
- GNoME
- ChatGPT
- Dall-E
project:
- ai-impact-analysis
- systems-thinking
- historical-insights
series: ''
source: https://www.youtube.com/watch?v=P_fHJIYENdI
speaker: veritasium
status: evergreen
summary: 本文探讨了DeepMind的AlphaFold如何通过解决长达半个世纪的蛋白质折叠难题，彻底改变了生物学研究。从早期的X射线晶体学到Fold It游戏，再到AlphaFold
  1和2的迭代，文章详细介绍了AI技术如何以前所未有的速度揭示了几乎所有已知蛋白质的三维结构。此外，还介绍了David Baker利用生成式AI设计全新蛋白质的突破，以及这些进展在疫苗开发、疾病治疗和新材料发现等领域的巨大潜力，预示着AI将加速人类知识的边界。
tags:
- drug-discovery
- health
- llm
- materials-science
- scientific
title: AlphaFold：AI在生命科学领域最伟大的突破
---

### 引言：AI解决蛋白质折叠难题

如果世界上所有最大的问题，从气候变化到疾病治疗，再到塑料废物处理，都有一个共同的解决方案，那会是怎样？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What if, all of the world's biggest problems from climate change, to curing diseases, to disposal of plastic waste, what if they all had the same solution?</p>
</details>

一个如此微小以至于肉眼不可见的解决方案。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A solution so tiny it would be invisible.</p>
</details>

我倾向于相信这是可能的，这要归功于最近一项突破，它解决了上个世纪最大的问题之一：如何确定蛋白质的结构？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm inclined to believe this is possible, thanks to a recent breakthrough that solved one of the biggest problems of the last century. How to determine the structure of a protein?</p>
</details>

有人曾向我描述，这相当于生物学领域的“费马大定理”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- It's been described to me as equivalent to Fermat's last theorem, but for biology.</p>
</details>

在超过六十年的时间里，数万名生物学家辛勤地解析了15万种蛋白质的结构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Over six decades, tens of thousands of biologists painstakingly worked out the structure of 150,000 proteins.</p>
</details>

然而，仅仅几年内，一个由大约15人组成的团队就确定了2亿种蛋白质的结构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then in just a few years, a team of around 15 determined the structure of 200 million.</p>
</details>

这基本上涵盖了自然界中已知存在的所有蛋白质。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's basically every protein known to exist in nature.</p>
</details>

那么他们是如何做到的，以及为什么这有可能解决生物学领域之外的问题呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how did they do it and why does this have the potential to solve problems way outside the realm of biology?</p>
</details>

蛋白质最初只是简单的**氨基酸**（Amino Acids: 构成蛋白质的基本单位）链。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A protein starts simply as a string of amino acids.</p>
</details>

每个氨基酸的中心都有一个碳原子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Each amino acid has a carbon atom at the center.</p>
</details>

一侧是胺基，另一侧是羧基。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then on one side is an amine group, and on the other side is a carboxyl group.</p>
</details>

它连接的最后一个部分可以是20种不同的侧链之一，具体是哪一种决定了这种分子是20种不同氨基酸中的哪一种。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the last thing it's bonded to could be one of 20 different side chains, and which one determines which of the 20 different amino acids this molecule is.</p>
</details>

一个氨基酸的胺基可以与另一个氨基酸的羧基反应，形成**肽键**（Peptide Bond: 氨基酸之间连接的化学键）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The amine group from one amino acid can react with the carboxyl group of another to form a peptide bond.</p>
</details>

因此，一系列氨基酸可以结合形成一条链，无数分子间的推拉作用、静电力、氢键和溶剂相互作用，都可能导致这条链盘绕并折叠起来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a series of amino acids can bond to form a string and pushing and pulling between countless molecules, electrostatic forces, hydrogen bonds, solvent interactions can cause this string to coil up and fold onto itself.</p>
</details>

这最终决定了蛋白质的**三维结构**（3D Structure: 蛋白质在空间中的立体构象）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This ultimately determines the 3D structure of the protein.</p>
</details>

而这种形状才是蛋白质真正重要的东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this shape is the thing that really matters about the protein.</p>
</details>

它被设计用于特定目的，就像**血红蛋白**（Hemoglobin: 血液中负责运输氧气的蛋白质）拥有完美的结合位点，可以在你的血液中携带氧气一样。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's built for a specific purpose, like how hemoglobin has the perfect binding site to carry around oxygen in your blood.</p>
</details>

这些是机器，它们需要处于正确的方向才能协同工作，例如，移动你肌肉中的蛋白质。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- These are machines, they need to be in their correct orientation in order to work together to move, for example, the proteins in your muscles.</p>
</details>

它们会稍微改变形状以进行拉伸和收缩。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They change their shape a little bit in order to pull and contract.</p>
</details>

但人们需要很长时间才能获得一种蛋白质的结构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- But it would take people a long time to get the structure of just one protein.</p>
</details>

确实如此。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Absolutely.</p>
</details>

那么蛋白质应该是什么样子？这个问题直到实验技术出现后才真正开始得到解答。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what should proteins look like? Was only started to answer really with experimental techniques.</p>
</details>

### 早期探索：漫长而艰辛的道路

确定蛋白质结构的第一种方法是利用该蛋白质制造晶体。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] The first way protein structure was determined was by creating a crystal out of that protein.</p>
</details>

然后将晶体暴露在X射线下，以获得衍射图样，科学家们再反向推导，试图找出何种分子形状会产生这样的图样。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This was then exposed to x-rays to get a diffraction pattern, and then scientists would work backwards to try to figure out what shape of molecules would create such a pattern.</p>
</details>

英国生物化学家**约翰·肯德鲁**（John Kendrew: 1962年诺贝尔化学奖得主，首次解析蛋白质结构）花了12年时间才获得第一个蛋白质结构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It took British biochemist, John Kendrew, 12 years to get the first protein structure.</p>
</details>

他的目标是一种储存氧气的蛋白质，叫做**肌红蛋白**（Myoglobin: 肌肉中储存氧气的蛋白质），这是我们心脏中的一种重要蛋白质。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">His target was an oxygen storing protein called myoglobin, an important protein in our hearts.</p>
</details>

他最初尝试了马的心脏，但这产生的晶体相当小，因为其中没有足够的肌红蛋白。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He first tried a horse heart, but this produced rather small crystals because it didn't have enough myoglobin.</p>
</details>

他知道潜水哺乳动物的肌肉中会有大量的肌红蛋白，因为它们最擅长保存氧气。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He knew diving mammals would have lots of myoglobin in their muscles since they're the best at conserving oxygen.</p>
</details>

于是他从秘鲁获得了一大块鲸鱼肉。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So he obtained a huge chunk of whale meat from Peru.</p>
</details>

这最终让肯德鲁获得了足够大的晶体，从而创建了**X射线晶体学**（X-ray Crystallography: 利用X射线衍射分析晶体结构的技术）图像。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This finally gave Kendrew large enough crystals to create an x-ray diffraction image.</p>
</details>

当结果出来时，它看起来非常奇怪。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- And when it came out, it looked really weird.</p>
</details>

人们期待某种逻辑的、数学的、可理解的东西，但它看起来几乎，我不会说丑陋，而是错综复杂，就像你看到一个火箭发动机，所有部件都悬挂着一样。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">People expected something kind of logical, mathematical, understandable, and it almost looked, I wouldn't say ugly, but intricate and complex and kind of like if you see a rocket motor, and all the parts hanging off.</p>
</details>

这个被戏称为“世纪之粪”的结构，为肯德鲁赢得了1962年的诺贝尔化学奖。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] This structure, which has been called "Turd of the century," won Kendrew, the 1962 Nobel Prize in chemistry.</p>
</details>

在接下来的二十年里，只有大约一百多个结构被解析出来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Over the next two decades, only around a hundred more structures were resolved.</p>
</details>

即使在今天，蛋白质结晶仍然是一个巨大的挑战。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even today, protein crystallization remains a big challenge.</p>
</details>

坦率地说，仅仅几个蛋白质结构就能成为某人整个博士研究的全部内容，这并不少见。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Frankly it is not uncommon that just a couple protein structures can be someone's entire PhD.</p>
</details>

有时甚至只有一个，有时甚至只是朝着一个目标取得进展。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sometimes just one, sometimes even just progress toward one,</p>
</details>

而且它很昂贵。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- And it's expensive.</p>
</details>

X射线晶体学每种蛋白质可能花费数万美元。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">X-ray crystallography can cost 10s of thousands of dollars per protein.</p>
</details>

因此，科学家们寻求另一种方法来确定蛋白质结构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So scientists sought another way to work out protein structure.</p>
</details>

找到蛋白质氨基酸序列的成本大约只有一百美元。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It only costs around a hundred dollars to find a protein sequence of amino acids.</p>
</details>

所以，如果你能用这个来找出蛋白质如何折叠，那将节省大量时间、精力和金钱。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you could use this to figure out how the protein would fold, that would save a lot of time, effort, and money.</p>
</details>

我大致知道碳的特性，也知道碳如何与硫结合，以及硫又如何可能与氮结合。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I kind of know how carbon behaves and I know how carbon sticks to a sulfur and how that might stick next to a nitrogen.</p>
</details>

如果这些原子在这里，那么我可以想象这个原子会折叠起来，在那里形成那个键。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if these ones are here, then I can imagine this one folding, making that bond there.</p>
</details>

所以看起来，如果你对基本的分子动力学有所了解，你可能就能弄清楚这种蛋白质将如何折叠。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it seems like if you have some sense of basic molecular dynamics, you might be able to figure out how this protein's gonna fold.</p>
</details>

生物学中少数真正的预测之一，实际上是**莱纳斯·鲍林**（Linus Pauling: 两次诺贝尔奖得主，化学家和晶体学家）仅仅通过观察蛋白质构建块的几何形状，就断言它们应该形成螺旋和折叠。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- One of the few true predictions in biology was actually Linus Pauling looking at just the geometry of the building blocks of proteins and saying, actually they should make helices and sheets.</p>
</details>

这就是我们所说的**二级结构**（Secondary Structure: 蛋白质局部区域的规则结构，如螺旋和折叠），即蛋白质非常局部的扭曲和转折。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's what we call secondary structure, the very local kind of twists and turns of the protein.</p>
</details>

但除了螺旋和折叠之外，生物化学家无法找出任何可靠的模式来推导出所有蛋白质的最终结构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- But beyond helices and sheets, biochemists could not figure out any reliable patterns that would lead to the final structure of all proteins.</p>
</details>

其中一个原因是，进化并非从零开始设计蛋白质。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One reason for this is that evolution didn't design proteins from the ground up.</p>
</details>

这有点像一个不知道自己在做什么的程序员，只要看起来不错，他们就会一直添加下去。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- It's kind of like a programmer that doesn't know what they're doing, and whenever it looked good, they just kept adding that kind of thing.</p>
</details>

这就是你最终得到这些既令人惊叹又极其复杂、难以描述的物体的原因。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's how you end up with these both amazing objects and incredibly complex and hard to describe.</p>
</details>

它们不像人类设计的机器那样，在底层有明确的目的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They don't have purpose underneath them in the same way as like a human designed machine would.</p>
</details>

为了说明这个过程有多么复杂，麻省理工学院（MIT）的生物学家**赛勒斯·莱文索尔**（Cyrus Levinthal: 提出莱文索尔悖论的生物物理学家）做了一个粗略的计算。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] To illustrate just how complicated this process can get, MIT biologist Cyrus Levinthal did a back-of-the-envelope calculation,</p>
</details>

他指出，即使是一条由35个氨基酸组成的短蛋白质链，也能以天文数字般的方式折叠。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and he showed that even a short protein chain with 35 amino acids can fold in an astronomical number of ways.</p>
</details>

因此，即使一台计算机每纳秒检查3万种构象的能量不稳定性，也需要宇宙年龄的200倍时间才能找到正确的结构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So even if a computer checked the energy instability of 30,000 configurations every nanosecond, it would take 200 times the age of the universe to find the correct structure.</p>
</details>

### CASP竞赛与众包智慧

马里兰大学的教授**约翰·莫尔特**（John Moult: CASP竞赛的创始人）不愿放弃，于1994年发起了一项名为**CASP**（Critical Assessment of Protein Structure Prediction: 蛋白质结构预测关键评估）的竞赛。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Refusing to give up, the University of Maryland professor John Moult started a competition called CASP in 1994.</p>
</details>

挑战很简单，设计一个计算机模型，能够接收氨基酸序列并输出其结构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The challenge was simple, to design a computer model that could take an amino acid sequence and output its structure.</p>
</details>

建模者事先不会知道正确的结构，但每个模型的输出都会与实验确定的结构进行比较。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The modelers would not know the correct structure beforehand, but the output from each model would be compared to the experimentally determined structure.</p>
</details>

完美匹配将获得100分，但任何超过90分的都被认为足够接近，表明结构已成功解析。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A perfect match would get a score of a hundred, but anything over 90 was considered close enough that the structure was solved.</p>
</details>

CASP的参赛者聚集在加利福尼亚州蒙特雷的一个由旧木教堂改建的会议中心，每当预测不合理时，他们都会被鼓励通过跺脚来表示友好的玩笑。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">CASP competitors gathered at an old wooden chapel turned conference center in Monterey, California, and at any point where a prediction didn't make sense, they were encouraged to tap their feet as friendly banter.</p>
</details>

当时有很多跺脚声。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There was a lot of foot tapping.</p>
</details>

(跺脚声)
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">(foot tapping)</p>
</details>

第一年，各团队的得分均未能超过40分。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the first year, teams could not achieve scores higher than 40.</p>
</details>

早期的领先者是华盛顿大学生物学家**大卫·贝克**（David Baker: 2024年诺贝尔化学奖得主，蛋白质设计先驱）创建的**Rosetta**（Rosetta: 一种蛋白质结构预测和设计算法）算法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The early front runner was an algorithm called Rosetta, created by University of Washington biologist David Baker.</p>
</details>

他的一项创新是通过汇集家庭、学校和图书馆中闲置计算机的计算能力来提高计算效率，这些计算机自愿安装了他的名为**Rosetta@Home**（Rosetta@Home: 利用分布式计算进行蛋白质结构预测的软件）的软件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of his innovations was to boost computation by pooling together processing power from idle computers in homes, schools, and libraries that volunteered to install his software called Rosetta at Home.</p>
</details>

作为其中一部分，有一个屏幕保护程序，它基本上展示了蛋白质折叠计算的过程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- As part of it, there was a screensaver that showed basically the course of the protein folding calculation.</p>
</details>

然后我们开始收到人们的来信，说他们正在观看屏幕保护程序，并认为他们可以比计算机做得更好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we started getting people writing in saying that they were watching the screensaver and they thought they could do better than the computer.</p>
</details>

于是贝克有了一个主意，他创造了一个视频游戏。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So Baker had an idea. He created a video game.</p>
</details>

(欢快的音乐)
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">(upbeat music)</p>
</details>

这款名为**Fold It**（Fold It: 一款蛋白质折叠科学游戏）的游戏，设置了一条能够扭曲和转变成不同排列的蛋白质链。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The game called Fold It, set up a protein chain capable of twisting and turning into different arrangements.</p>
</details>

但现在不是由计算机来移动，而是由游戏玩家，也就是人类来移动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- But now instead of the computer making the moves, the game players, the humans could make the moves.</p>
</details>

在三周内，超过5万名玩家齐心协力，破译了一种在艾滋病病毒（HIV）中起关键作用的酶。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Within three weeks, more than 50,000 gamers pooled their efforts to decipher an enzyme that plays a key role in HIV.</p>
</details>

X射线晶体学显示他们的结果是正确的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">X-Ray crystallography showed their result was correct.</p>
</details>

这些玩家甚至被列为研究论文的共同作者。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The gamers even got credited as co-authors on the research paper.</p>
</details>

### DeepMind的入局：AlphaFold的诞生

一位玩过Fold It游戏的人是前国际象棋神童**德米斯·哈萨比斯**（Demis Hassabis: DeepMind联合创始人兼CEO）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, one man who played Fold It was a former child chess prodigy named Demis Hassabis.</p>
</details>

哈萨比斯最近创办了一家名为**DeepMind**（DeepMind: 谷歌旗下的AI研究公司）的AI公司。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hassabis had recently started an AI company called DeepMind.</p>
</details>

他们的AI算法**AlphaGo**（AlphaGo: DeepMind开发的围棋AI程序）因击败世界冠军**李世石**（Lee Sedol: 韩国围棋职业九段棋手）而登上新闻头条。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Their AI algorithm, AlphaGo made headlines for beating world champion Lee Sedol at the game of Go.</p>
</details>

AlphaGo的第37手让李世石震惊不已。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of AlphaGo's moves, move 37, shook Sedol to his core.</p>
</details>

但哈萨比斯从未忘记他作为Fold It玩家的经历。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But Hassabis never forgot about his time as a Fold It gamer.</p>
</details>

当然，我从游戏设计的角度对此着迷。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So of course I was fascinated this just from games design perspective.</p>
</details>

你知道，如果我们能模仿这些玩家的直觉，那该多棒啊，顺便说一句，他们当然只是业余生物学家。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, wouldn't it be amazing if we could mimic the intuition of these gamers who were only, by the way, of course, amateur biologists.</p>
</details>

从韩国回来后，DeepMind的研究人员进行了一周的黑客马拉松，尝试训练AI来玩Fold It。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- After returning from Korea, DeepMind researchers had a week-long hackathon where they tried to train AI to play Fold It.</p>
</details>

这是哈萨比斯利用AI推动科学发展的长期目标的开端。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This was the beginning of Hassabis' longstanding goal of using AI to advance science.</p>
</details>

他启动了一个名为**AlphaFold**（AlphaFold: DeepMind开发的蛋白质结构预测AI系统）的新项目，以解决蛋白质折叠问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He initiated a new project called Alpha Fold to solve the protein folding problem.</p>
</details>

与此同时，在CASP竞赛中，包括Rosetta在内的最佳表现者的预测质量已经停滞不前。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Meanwhile at CASP, the quality of prediction from the best performers, including Rosetta had plateaued.</p>
</details>

事实上，在CASP第八届之后，性能甚至有所下降。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, the performance went downhill after CASP eight.</p>
</details>

即使有了更快的计算机和**蛋白质数据库**（Protein Data Bank: 储存蛋白质三维结构数据的公共数据库）中不断增长的结构数据用于训练，预测结果仍然不够好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The predictions weren't good enough, even with faster computers and a growing number of structures in the protein data bank to train on.</p>
</details>

DeepMind希望通过AlphaFold改变这一局面。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">DeepMind hoped to change this with AlphaFold.</p>
</details>

它的第一个版本，AlphaFold 1，是一个标准的现成**深度神经网络**（Deep Neural Network: 具有多层非线性变换的机器学习模型），就像当时用于计算机视觉的那些网络一样。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Its first iteration, AlphaFold 1, was a standard off-the-shelf deep neural network like the ones used for computer vision at that time.</p>
</details>

研究人员用蛋白质数据库中大量的蛋白质结构对其进行了训练。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The researchers trained it on lots and lots of protein structures from the protein data bank.</p>
</details>

作为输入，AlphaFold接收蛋白质的氨基酸序列以及一组重要的进化线索。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As input, AlphaFold took the protein's amino acid sequence and an important set of clues given by evolution.</p>
</details>

进化是由突变驱动的，即遗传密码的变化，这反过来又改变了给定蛋白质序列中的氨基酸。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Evolution is driven by mutations, changes in the genetic code, which in turn change the amino acids within a given protein sequence.</p>
</details>

但随着物种进化，蛋白质需要保持其形状，使其能够执行特定的功能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But as species evolve, proteins need to retain the shape that allows them to perform their specific function.</p>
</details>

例如，血红蛋白在人类、猫、马以及几乎所有哺乳动物中看起来都是一样的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For instance, hemoglobin looks the same in humans, cats, horses, and basically any mammal.</p>
</details>

进化论认为，如果它没有坏，就不要去修补它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Evolution says, if it ain't broke, don't fix it.</p>
</details>

所以我们可以在这个进化表中比较不同物种中相同蛋白质的序列。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can compare sequences of the same protein across different species in this evolutionary table.</p>
</details>

序列相似的地方，很可能对蛋白质结构和功能很重要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Where sequences are similar, it's likely they are important in the protein structure and function.</p>
</details>

但即使序列不同，查看突变成对发生的地方也很有帮助，因为它们可以识别最终结构中哪些氨基酸彼此靠近。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But even where the sequences are different, it's helpful to look at where mutations happen in pairs because they can identify which amino acids are close to each other in the final structure.</p>
</details>

假设两个氨基酸，一个带正电荷的赖氨酸和一个带负电荷的谷氨酸，在折叠的蛋白质中相互吸引并保持在一起。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Say two amino acids, a positively charged lysine and a negatively charged glutamic acid attract and hold each other in the folded protein.</p>
</details>

现在，如果一个突变将赖氨酸改变为带负电荷的氨基酸，它将排斥谷氨酸并使整个蛋白质不稳定。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, if a mutation changes lysine to a negatively charged amino acid, it would repel glutamic acid and destabilize the whole protein.</p>
</details>

因此，另一个突变必须用带正电荷的氨基酸替换谷氨酸。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Therefore, another mutation must replace glutamic acid with a positively charged amino acid.</p>
</details>

这被称为**协同进化**（Co-evolution: 两个或多个物种或基因在进化过程中相互影响）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is known as co-evolution.</p>
</details>

这些进化表是AlphaFold的重要输入。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These evolutionary tables were an important input for AlphaFold.</p>
</details>

作为输出，AlphaFold没有直接生成三维结构，而是预测了该结构的一个更简单的**二维配对表示**（2D Pair Representation: 描述蛋白质中氨基酸对之间距离和方向的二维图）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As output, instead of directly producing a 3D structure, AlphaFold predicted a simpler 2D pair representation of that structure.</p>
</details>

氨基酸序列水平和垂直排列。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The amino acid sequence is laid out horizontally and vertically.</p>
</details>

每当两个氨基酸在最终结构中彼此靠近时，它们对应的行与列的交点就会变亮。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whenever two amino acids are close to each other in the final structure, their corresponding row column intersection is bright.</p>
</details>

距离较远的氨基酸对则会变暗。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Distant amino acid pairs are dim.</p>
</details>

除了距离，配对表示还可以包含氨基酸分子在结构中如何扭曲的信息。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In addition to distances, the pair representation can also hold information on how amino acid molecules are twisted within the structure.</p>
</details>

AlphaFold 1将其蛋白质序列及其进化表输入到其深度神经网络中，该网络经过训练以预测配对表示。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AlphaFold 1 fed the protein sequence and its evolutionary table into its deep neural network, which it had trained to predict the pair representation.</p>
</details>

一旦有了这个，一个单独的算法就会根据距离和**扭转约束**（Torsion Constraints: 限制分子键之间旋转角度的条件）折叠氨基酸链。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once it had this, a separate algorithm folded the amino acid string based on the distance and torsion constraints.</p>
</details>

这就是最终的蛋白质结构预测。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this was the final protein structure prediction.</p>
</details>

凭借这个框架，AlphaFold参加了CASP 13，并立即引起了轰动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With this framework, AlphaFold entered CASP 13 and it immediately turned heads.</p>
</details>

经过多次改进后，它显然是赢家，但它并不完美。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was the clear winner after many additions, but it wasn't perfect.</p>
</details>

它的70分不足以达到CASP的90分阈值。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Its score of 70 was not enough to clear the CASP threshold of 90.</p>
</details>

DeepMind需要重新开始，以获得更好的结果。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">DeepMind needed to get back to the drawing board to get better results.</p>
</details>

于是哈萨比斯招募了**约翰·贾姆珀**（John Jumper: AlphaFold 2核心开发者，2024年诺贝尔化学奖得主）来领导AlphaFold项目。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Hassabis recruited John Jumper to lead AlphaFold.</p>
</details>

### AlphaFold 2：深度学习的飞跃

AlphaFold 2实际上是一个关于设计我们深度学习的系统。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- AlphaFold 2 was really a system about designing our deep learning.</p>
</details>

它让各个模块擅长学习蛋白质，拥有所需的几何、物理和进化概念，并将其置于网络的核心，而不是作为围绕它的过程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The individual blocks to be good at learning about proteins, have the types of geometric physical, evolutionary concepts that were needed and put it into the middle of the network instead of a process around it.</p>
</details>

这带来了巨大的准确性提升。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that was a tremendous accuracy boost.</p>
</details>

要通过AI获得更好的结果，有三个关键步骤。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] There were three key steps to get better results with AI.</p>
</details>

首先是最大的计算能力。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First, maximum compute power.</p>
</details>

在这方面，DeepMind已经比世界上任何人都处于更有利的位置。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here, DeepMind was already better positioned than anybody in the world.</p>
</details>

它可以使用谷歌（Google）庞大的计算能力，包括他们的**张量处理单元**（Tensor Processing Units, TPUs: 谷歌为机器学习定制的专用芯片）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It had access to the enormous computing power of Google, including their tensor processing units.</p>
</details>

其次，他们需要一个庞大而多样的数据集。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Second, they needed a large and diverse data set.</p>
</details>

数据是最大的障碍吗？为什么？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is data the biggest roadblock and why?</p>
</details>

我认为说数据是障碍太容易了，我们应该对此保持谨慎。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I think it's too easy to say data's the roadblock and we should be careful about it.</p>
</details>

AlphaFold 2是在与AlphaFold 1完全相同的数据集上训练的，但使用了好得多的机器学习方法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AlphaFold 2 was trained on the exact same data with much, much better machine learning as AlphaFold 1.</p>
</details>

所以每个人都高估了数据障碍，因为随着机器学习的改进，它变得不那么严重了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So everyone overestimates the data blockage because it gets less severe with better machine learning.</p>
</details>

第三个关键要素是更好的AI算法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] And that was the third key element, better AI algorithms.</p>
</details>

现在，AI不仅擅长蛋白质折叠。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now AI is not just good at protein folding.</p>
</details>

它可以完成各种没人喜欢做的工作，从写电子邮件到接听电话。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It can do all kinds of tasks that no one likes from writing emails to answering phone calls.</p>
</details>

我讨厌的一件事是建立和维护网站。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Something I hate is building and maintaining a website.</p>
</details>

从为不同平台优化网站，找到一个好的设计使其看起来专业，到不断更新业务增长的新信息，这需要大量工作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's so much work from optimizing the website for different platforms, finding a good design so it looks professional to constantly updating it with new information about the business as it grows.</p>
</details>

这就是为什么我们与Hostinger合作，Hostinger是今天视频的赞助商。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's why we partnered with Hostinger, the sponsor of today's video.</p>
</details>

Hostinger让为自己或您的企业建立网站变得超级容易。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hostinger makes it super easy to build a website for yourself or your business.</p>
</details>

借助其先进的AI工具，您只需描述您希望网站呈现的样子，几秒钟内，您的个性化网站即可上线运行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And with their advanced AI tools, you can simply describe what you want your website to look like. And in just a few seconds, your personalized website is up and running.</p>
</details>

Hostinger旨在让初学者和专业人士都能尽可能轻松使用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hostinger is designed to be as easy as possible for beginners and professionals.</p>
</details>

因此，之后您需要进行的任何调整也都非常容易。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So any tweaks you need to make after that are super easy too.</p>
</details>

只需将您想要的任何图片或视频拖放到您想要的位置，或者只需输入您想说的话，如果写作也不是您的强项，也可以让AI在这里帮助您。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just drag and drop any pictures or videos you want, where you want them, or just type what you want to say or have the AI help you here too, if writing isn't your thing either.</p>
</details>

如果您仍然需要人工协助，Hostinger提供24/7支持，随时为您解决任何问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you still want that human touch, Hostinger is always available with 24/7 support if you ever run into any issues.</p>
</details>

只需点击几下，您的网站即可上线。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But when you're done building in just a few clicks, your website is live.</p>
</details>

这一切都非常实惠，包含免费域名和企业邮箱。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's all incredibly affordable too, with a domain and business email included for free.</p>
</details>

所以，今天就将您的伟大想法搬到线上，请访问hostinger.com/ve或扫描此处的二维码。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to take your big idea online today, visit hostinger.com/ve or scan this QR code right here.</p>
</details>

注册时，请记得在结账时使用代码VE，即可享受10%的折扣。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And when you sign up, remember to use code VE at checkout to get 10% off your plan.</p>
</details>

感谢Hostinger赞助本视频的这一部分。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I wanna thank Hostinger for sponsoring this part of the video.</p>
</details>

现在回到蛋白质折叠。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now back to protein folding.</p>
</details>

当AlphaFold 2团队寻找更好的算法时，他们转向了**Transformer**（Transformer: 一种基于注意力机制的深度学习模型架构）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As the AlphaFold 2 team searched for better algorithms, they turned to the transformer.</p>
</details>

这就是ChatGPT中的“T”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's the T in ChatGPT.</p>
</details>

它依赖于一个名为**注意力机制**（Attention: 深度学习中用于加权输入序列不同部分的技术）的概念。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it relies on a concept called attention.</p>
</details>

在“动物没有过马路，因为它太累了”这句话中，注意力机制根据“累”这个词识别出“它”指的是动物而不是马路。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the sentence, the animal didn't cross the street because it was too tired. Attention recognizes that it refers to animal and not street based on the word tired.</p>
</details>

注意力机制通过将任何顺序信息分解成块，将其转换为数值表示或嵌入，并在它们之间建立连接（在本例中是“它”和“动物”），从而为这些信息添加上下文。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Attention adds context to any kind of sequential information by breaking it down into chunks, converting these into numerical representations or embeddings and making connections between them. In this case, the word it and animal.</p>
</details>

3Blue1Brown有一个关于Transformer和注意力机制的精彩视频系列。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">3Blue1Brown has a great series of videos specifically about transformers and attention.</p>
</details>

**大语言模型**（Large Language Models, LLMs: 基于深度学习的自然语言处理模型）使用注意力机制来预测最适合添加到句子中的词语。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Large language models use attention to predict the most appropriate word to add to a sentence,</p>
</details>

但AlphaFold也有顺序信息，不是句子，而是氨基酸序列。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but AlphaFold also has sequential information, not sentences, but amino acid sequences.</p>
</details>

为了分析它们，AlphaFold团队构建了他们自己的Transformer版本，称为**EVO Former**（EVO Former: AlphaFold 2中用于处理进化和几何信息的Transformer模型）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And to analyze them, the AlphaFold team built their own version of the transformer called an EVO Former.</p>
</details>

EVO Former包含两个“塔”：生物学塔中的进化信息和几何学塔中的配对表示。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The EVO Former contained two towers, evolutionary information in the biology tower and pair representations in the geometry tower.</p>
</details>

AlphaFold 1那种从一个塔开始预测另一个塔的深度神经网络已经不复存在。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Gone was AlphaFold 1's deep neural network that started with one tower and predicted the other.</p>
</details>

相反，AlphaFold 2的EVO Former分别构建每个塔。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Instead, AlphaFold 2's EVO Former builds each tower separately.</p>
</details>

它从一些初始猜测开始，像以前一样从已知数据集中获取进化表，并根据相似的已知蛋白质获取配对表示。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It starts with some initial guesses, evolutionary tables taken from known data sets as before, and the pair representations based on similar known proteins.</p>
</details>

这次，有一个连接两个塔的“桥梁”，它来回传递新发现的生物学和几何线索。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this time there's a bridge connecting the two towers that conveys newly found biological and geometry clues back and forth.</p>
</details>

在生物学塔中，应用于列的注意力机制识别出已被保守的氨基酸序列。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the biology tower, attention applied on a column identifies amino acid sequences that have been conserved.</p>
</details>

而沿着行，它发现了一起发生的氨基酸突变。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">While along a row, it finds amino acid mutations that have occurred together.</p>
</details>

每当EVO Former在进化表中发现两个紧密相连的氨基酸时，这意味着它们对结构很重要，它会将此信息发送到几何学塔。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whenever the EVO Former finds too closely linked amino acids in the evolutionary table. It means they are important to structure and it sends this information to the geometry tower.</p>
</details>

在这里，注意力机制被应用于帮助计算氨基酸之间的距离。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here attention is applied to help calculate distances between amino acids.</p>
</details>

还引入了**三角注意力**（Triangular Attention: 一种允许三个氨基酸相互关注的注意力机制），它本质上是让三元组相互关注。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- There's also this thing called triangular attention that got introduced, which is essentially about letting triplets attend to each other.</p>
</details>

对于每三个氨基酸，AlphaFold应用**三角不等式**（Triangle Inequality: 几何学中任意两边之和大于第三边的原则）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] For each triplet of amino acids, AlphaFold applies the triangle inequality.</p>
</details>

任意两边之和必须大于第三边。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The sum of two sides must be greater than the third.</p>
</details>

这限制了这三个氨基酸之间的距离。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This constrains how far apart these three amino acids can be.</p>
</details>

这些信息用于更新配对表示。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This information is used to update the pair representation,</p>
</details>

这有助于模型生成一个自洽的结构图。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- And that helps the model produce like a self-consistent picture of the structure.</p>
</details>

如果几何学塔发现两个氨基酸不可能彼此靠近，它就会告诉第一个塔忽略它们在进化表中的关系。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] If the geometry tower finds it's impossible for two amino acids to be close to each other, then it tells the first tower to ignore their relationship in the evolutionary table.</p>
</details>

EVO Former内部的信息交换进行了48次，直到两个塔中的信息都得到完善。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This exchange of information within the EVO Former goes on for 48 times, until information within both towers is refined.</p>
</details>

这个网络学到的几何特征被传递给AlphaFold 2的第二个主要创新——**结构模块**（Structure Module: AlphaFold 2中负责将内部表示转换为三维原子坐标的组件）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The geometrical features learned by this network are passed onto AlphaFold 2's second main innovation, the structure module.</p>
</details>

对于每个氨基酸，我们选择氨基酸中的三个特殊原子，并说它们定义了一个框架。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- For each amino acid, we pick three special atoms in the amino acid and say that those define a frame.</p>
</details>

网络所做的是，它想象所有氨基酸都从原点开始，然后它必须预测适当的平移和旋转，以将这些框架移动到它们在真实结构中的位置。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what the network does is it imagines that all the amino acids start out with the origin and it has to predict the appropriate translation and rotation to move these frames to where they sit in the real structure.</p>
</details>

所以这基本上就是结构模块所做的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's essentially what the structure module does.</p>
</details>

但使结构模块与众不同的是它没有做的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- But the thing that sets the structure module apart is what it doesn't do.</p>
</details>

以前，人们可能认为你需要编码这是一个链的事实，你知道，并且某些残基应该彼此相邻。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Previously, people might have imagined that you would like to encode the fact that this is a chain, you know, and that certain residue should sit next to each other.</p>
</details>

我们并没有明确地告诉AlphaFold这一点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We don't really explicitly tell AlphaFold that.</p>
</details>

它更像是我们给它一袋氨基酸，它被允许分别定位每个氨基酸。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's more like we give it a bag of amino acids and it's allowed to position each of them separately.</p>
</details>

有些人认为这有助于它避免在放置位置上卡住。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And some people have thought that that helps it to not get stuck in terms of where things should be placed.</p>
</details>

它不必总是考虑这些东西形成一个链的约束，这是一种自然而然地出现的东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It doesn't have to always be thinking about the constraint of these things forming a chain, that's something that emerges naturally later.</p>
</details>

这就是为什么AlphaFold的实时折叠视频会显示它做一些奇怪的非物理性动作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] That's why live AlphaFold folding videos can show it doing some weirdly non-physical stuff.</p>
</details>

结构模块输出一个三维蛋白质，但它仍未准备好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The structure module outputs a 3D protein, but it still isn't ready.</p>
</details>

它至少再通过EVO Former循环三次，以获得对蛋白质更深入的理解，只有这样才能做出最终预测。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's recycled at least three more times through the Evo Former to gain a deeper understanding of the protein only then the final prediction is made.</p>
</details>

2020年12月，DeepMind带着AlphaFold 2重返虚拟CASP竞赛，这次他们成功了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In December, 2020, DeepMind returned to a virtual CASP with AlphaFold 2, and this time they did it.</p>
</details>

我将阅读约翰·莫尔特的一封电子邮件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I'm going to read an email from John Moult.</p>
</details>

“您的团队在CASP 14中表现出色，无论是相对于其他团队还是在绝对模型精度方面。祝贺这项工作。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">"Your group has performed amazingly well in CASP 14, both relative to other groups and in absolute model accuracy. Congratulations on this work."</p>
</details>

对于许多蛋白质，AlphaFold 2的预测与实际结构几乎无法区分，它们最终超过了90分的黄金标准。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] For many proteins, AlphaFold 2 predictions were virtually indistinguishable from the actual structures and they finally beat the gold standard score of 90.</p>
</details>

对我来说，在这个问题上工作了这么久，经历了无数次停滞和重启，突然间有了一个解决方案。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- For me, having worked on this problem so long, after many, many stops and starts, and suddenly this is a solution.</p>
</details>

我们解决了这个问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'd solved the problem.</p>
</details>

这让你对科学的工作方式感到如此兴奋。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This gives you such excitement about the way science works.</p>
</details>

### 蛋白质折叠的深远影响

在超过六十年的时间里，全世界所有研究蛋白质的科学家们辛勤地发现了大约15万种蛋白质结构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] Over six decades, all of the scientists working around the world on proteins painstakingly found about 150,000 protein structures.</p>
</details>

然后，AlphaFold一举揭示了超过2亿种蛋白质结构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then in one fell swoop, AlphaFold came in and unveiled over 200 million of them.</p>
</details>

这几乎是自然界中已知存在的所有蛋白质。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Nearly all proteins known to exist in nature.</p>
</details>

仅仅几个月内，AlphaFold就将全球研究实验室的工作推进了几十年。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In just a few months, AlphaFold advanced the work of research labs worldwide by several decades.</p>
</details>

它直接帮助我们开发了疟疾疫苗。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It has directly helped us develop a vaccine for malaria.</p>
</details>

它使得分解抗生素耐药酶成为可能，这使得许多救命药物再次有效。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's made possible the breaking down of antibiotic resistance enzymes, which make many life-saving drugs effective again.</p>
</details>

它甚至帮助我们理解蛋白质突变如何导致从精神分裂症到癌症的各种疾病。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's even helped us understand how protein mutations lead to various diseases from schizophrenia to cancer,</p>
</details>

研究鲜为人知和濒危物种的生物学家突然能够获取蛋白质及其生命机制的信息。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and biologists studying little known and endangered species suddenly had access to proteins and their life mechanism.</p>
</details>

AlphaFold 2的论文已被引用超过3万次。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The AlphaFold 2 paper has been cited over 30,000 times.</p>
</details>

它确实在我们对生命的理解上实现了阶跃函数式的飞跃。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It has truly made a step function leap in our understanding of life.</p>
</details>

约翰·贾姆珀和德米斯·哈萨比斯因这项突破获得了2024年诺贝尔化学奖的一半。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">John Jumper and Demis Hassabis were awarded one half of the 2024 Nobel Prize in chemistry for this breakthrough.</p>
</details>

另一半则授予了大卫·贝克，但并非因为他使用Rosetta预测结构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other half went to David Baker, but not for predicting structures using Rosetta.</p>
</details>

相反，是因为他从零开始设计了全新的蛋白质。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Instead, it was for designing completely new proteins from scratch.</p>
</details>

### 超越折叠：AI设计全新蛋白质

制造能做事情的全新蛋白质真的很难。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- It was really hard to make brand new proteins that would do things.</p>
</details>

所以这就是我们解决的问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so that's kind of the problem that we solved.</p>
</details>

为此，他使用了与**Dall-E**（Dall-E: OpenAI开发的AI图像生成模型）等程序中生成艺术品相同的生成式AI。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- To do so, he uses the same kind of generative AI that makes art in programs like Dall-E.</p>
</details>

你可以说画一张袋鼠骑在兔子上的图片，它就会照做。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can say draw a picture of a kangaroo riding on a rabbit or something, and it will do that.</p>
</details>

所以我们对蛋白质也做了同样的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so it's exactly what we did with proteins.</p>
</details>

他的技术名为**RF扩散**（RF Diffusion: 一种基于扩散模型的蛋白质设计方法），通过向已知蛋白质结构添加随机噪声进行训练，然后AI必须去除这些噪声。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">His technique called "RF Diffusion" is trained by adding random noise to a known protein structure, and then the AI has to remove this noise.</p>
</details>

一旦以这种方式训练，就可以要求AI生产具有各种功能的蛋白质。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once trained in this way, the AI can be asked to produce proteins for various functions.</p>
</details>

它被给予一个随机噪声输入，AI会找出一种全新的蛋白质，能够完成你要求它做的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's given a random noise input, and the AI figures out a brand new protein that does what you asked it to do.</p>
</details>

这项工作具有巨大的影响。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This work has huge implications.</p>
</details>

我的意思是，想象一下你被一条毒蛇咬了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, imagine you got bitten by a venomous snake.</p>
</details>

如果你幸运的话，你将能够获得通过从特定蛇种中提取毒液制备的**抗蛇毒血清**（Anti-venom: 用于治疗蛇咬伤的抗体药物）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you're lucky, you'll have access to anti-venom prepared by milking venom from the exact kind of snake,</p>
</details>

然后将其注射到活体动物体内，从该动物体内提取抗体并进行精炼，然后作为抗蛇毒血清给你。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">which is then injected into live animals, and the antibodies from that animal are extracted and refined and then given to you as an anti-venom.</p>
</details>

问题是人们经常对来自其他生物体的这些抗体产生过敏反应。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The trouble is often people have allergic reactions to these antibodies from other organisms.</p>
</details>

但有了贝克实验室设计的最新合成蛋白质，你的生存几率会大大提高。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But your odds of survival can be a lot better with the latest synthetic proteins designed in Baker's lab.</p>
</details>

他们创造了与人类兼容的抗体，可以中和致命的蛇毒。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They've created human compatible antibodies that can neutralize lethal snake venom.</p>
</details>

这种抗蛇毒血清可以大量生产，并轻松运输到需要的地方。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This anti-venom could be manufactured in large quantities and easily transported to the places where it's needed.</p>
</details>

有了这些微小的分子机器，可能性是无限的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With these tiny molecular machines, the possibilities are endless.</p>
</details>

你最兴奋的应用是什么？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What are the applications you're most excited about?</p>
</details>

我认为疫苗将非常强大。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So I think vaccines are gonna be really powerful.</p>
</details>

我们有许多蛋白质正在进行癌症的人体临床试验，我们现在正在研究自身免疫疾病。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have a number of proteins that are in human clinical trials for cancer, and we're working on autoimmune disease now.</p>
</details>

我们对捕获温室气体等问题感到非常兴奋。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're really excited about problems like capturing greenhouse gases.</p>
</details>

所以我们正在设计可以固定甲烷、分解塑料的酶。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're designing enzymes that can fix methane, break down plastic.</p>
</details>

这种方法之所以如此有效，在于它们能够快速创建和迭代蛋白质。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- What makes this approach so effective is how fast they can create and iterate the proteins.</p>
</details>

对于任何传统的学校生物化学家或蛋白质科学家来说，这确实是相当神奇的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- It's really quite miraculous for anyone who's a conventional school biochemist or protein scientist.</p>
</details>

我们现在可以在计算机上进行设计，获取设计蛋白质的氨基酸序列，然后只需几天就能得到蛋白质。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can now have designs on the computer, get the amino acid sequence of the design proteins, and then in just a couple days we can get the protein out.</p>
</details>

是的。我们给它起了一个名字，叫做“牛仔生物化学”，因为我们就像，你就是得尽可能快地去做，结果证明效果非常好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. We've given a name to this, which is "Cowboy Biochemistry" because we just like, you just got kind of go for it as fast as you can, and it turns out to work pretty well.</p>
</details>

### AI在其他领域的应用与未来展望

AI对蛋白质所做的一切，只是它在其他领域和更大规模上所能做到的一个暗示。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- What AI has done for proteins is just a hint of what it can do in other fields and on larger scales.</p>
</details>

例如，在材料科学领域，DeepMind的**GNoME**（GNoME: DeepMind开发的用于发现新材料的AI程序）项目已经发现了220万种新晶体，其中包括超过40万种稳定的材料，这些材料可能为从**超导体**（Superconductors: 在特定低温下电阻为零的材料）到电池的未来技术提供动力。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In materials science, for example, DeepMind's GNoME program has found 2.2 million new crystals, including over 400,000 stable materials that could power future technologies from superconductors to batteries.</p>
</details>

AI正在通过帮助解决一些阻碍人类进步的根本问题，在科学领域创造变革性的飞跃。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI is creating transformative leaps in science by helping to solve some of the fundamental problems that have blocked human progress.</p>
</details>

如果我们把整个知识之树看作一个整体，你知道有些问题是根源问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- If we think of the whole tree of knowledge, you know there are certain problems where you know if their root, no problems.</p>
</details>

如果你解锁它们，如果你发现它们的解决方案，它将开启一个全新的发现分支或途径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you unlock them, if you discover a solution to them, it would unlock a whole new branch or avenue of discovery.</p>
</details>

通过这一点，AI正以前所未有的速度推动人类知识的边界。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- And with this, AI is pushing forward the boundaries of human knowledge at a rate never seen before.</p>
</details>

2倍的加速很好，它们很棒，我们喜欢它们。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Speed ups of 2x are nice, they're great, we love them.</p>
</details>

10万倍的加速会改变你所做的一切。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Speed ups of a 100,000x, change what you do.</p>
</details>

你做的事情会发生根本性的变化，你开始围绕那些变得容易的事情重建你的科学。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You do fundamentally different stuff and you start to rebuild your science around the things that got easy.</p>
</details>

这就是我感到兴奋的地方。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- And that's what I'm excited about.</p>
</details>

这些发现代表了科学领域真正的阶跃函数式变化。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These discoveries represent real step function changes in science.</p>
</details>

即使AI没有超越今天，我们也将从这些突破中受益数十年。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even if AI doesn't advance beyond where it is today, we will be reaping the benefits of these breakthroughs for decades.</p>
</details>

假设AI继续发展，那么它将开启以前被认为不可能的机会。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And assuming AI does continue to develop, well, it will open up opportunities that were previously thought impossible.</p>
</details>

无论是治愈所有疾病，创造新材料，还是将环境恢复到原始状态。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whether that's curing all diseases, creating novel materials, or restoring the environment to a pristine state.</p>
</details>

这听起来像是一个美好的未来，只要AI不先接管并毁灭我们所有人。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This sounds like an amazing future as long as the AI doesn't take over and destroy us all first.</p>
</details>

(缓慢的宇宙音乐)
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">(slow cosmic music)</p>
</details>