---
area: "society-thinking"
category: technology
companies_orgs:
- Intel
- IBM
- Toyota
- NASA
- Airbus
date: '2021-08-31'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Carl Anderson
products_models:
- Voyager 1
project: []
series: ''
source: https://www.youtube.com/watch?v=AaZ_RSt0KP8
speaker: veritasium
status: evergreen
summary: 本视频探讨了宇宙射线这一无形现象及其对计算机系统的惊人影响。从比利时选举中离奇的计票错误，到《超级马里奥64》速通玩家遇到的游戏故障，甚至空中客车A330客机的突然俯冲，这些高能粒子都可能导致计算机内存中的“比特翻转”。文章深入剖析了宇宙射线的发现历程、起源，以及工程师们如何设计出具有韧性的系统，以抵御这些普遍存在却常被忽视的太空威胁。
tags:
- bit-flip
- science
- technology
title: 宇宙对计算机的敌意：从选举错误到飞机失事，宇宙射线如何影响我们的数字生活
---
### 比利时选举中的离奇错误

一架飞机从空中坠落，一位速通玩家莫名其妙地跳到了更高的平台，还有一次选举重新计票被触发。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A plane plummets out of the sky, a speed runner inexplicably jumps to a higher platform. What the? What the?! And an election recount is triggered.</p>
</details>

所有这些都源于弥漫于宇宙中的同一种无形现象。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All because of the same invisible phenomenon that permeates the universe.</p>
</details>

2003年5月18日，比利时选民前往投票站。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On May 18th, 2003, voters in Belgium went to the polls.</p>
</details>

在许多地区，投票是通过计算机完成的，比利时人对此已经进行了十多年的实验。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In many regions, voting was done on a computer, something the Belgians had been experimenting with for over a decade.</p>
</details>

但该系统有一个备用机制。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the system had a backup.</p>
</details>

每位选民会将一张磁卡插入机器，并在屏幕上做出选择。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Each voter would insert a magnetic card into the machine and make their selection on screen.</p>
</details>

他们的投票既保存在计算机中，也保存在磁卡上，磁卡随后被投入一个箱子以作冗余备份。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Their vote was saved both to the computer and the magnetic card, which they dropped into a box for redundancy.</p>
</details>

那天深夜，在计票时，一名选举官员在布鲁塞尔市中心沙尔贝克（Schaerbeek）的计票结果中发现了一个问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Late that night, as the votes were being tabulated, one of the election officials detected a problem with the results from Schaerbeek, a municipality in central Brussels.</p>
</details>

玛丽亚·温德沃格尔（Maria Vindevogel）——一位鲜为人知的候选人，她自己的政党获得的选票数量超出了数学上的可能性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maria Vindevogel, a little known candidate with her own party received more votes than was mathematically possible.</p>
</details>

他们之所以知道这一点，是因为优先投票系统的工作方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They knew this because of the way the preferential voting system works.</p>
</details>

于是他们拿出磁卡，开始重新计票。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So they took out the magnetic cards and started a recount.</p>
</details>

他们一张一张地将每张卡片再次送入机器，几个小时后，重新计票完成。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One by one, they fed each of them through the machines again, and after several hours, the recount was complete.</p>
</details>

除了玛丽亚·温德沃格尔，所有候选人的总票数都与之前完全相同。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The vote totals for every candidate were exactly the same as before, except for Maria Vindevogel.</p>
</details>

在她的案例中，重新计票的票数比原始票数少了4096票。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In her case, the recounted number of votes was less than the original by 4,096.</p>
</details>

那么，出了什么问题？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what went wrong?</p>
</details>

她的原始票数是如何被夸大了4000多票的？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How had her original tally been inflated by over 4,000 votes?</p>
</details>

计算机专家被请来对软件进行广泛测试。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Computer experts were brought in to run extensive tests on the software.</p>
</details>

他们仔细检查了代码，但没有发现任何错误。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They combed through the code, but could find no bugs.</p>
</details>

他们找到了最初进行错误计票的计算机，并反复测试了硬件，但无法重现错误。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They got the computer that had made the initial erroneous tally and tested the hardware again and again, but they could not replicate the error.</p>
</details>

硬件的一切似乎都处于完美的工作状态。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Everything about the hardware seemed to be in perfect working order.</p>
</details>

这只留下了一种可能的解释，而且它非常奇怪。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this left only one possible explanation and it is seriously weird.</p>
</details>

线索来自温德沃格尔多出的票数：4096票。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The clue comes from the excess number of votes Vindevogel received. 4,096.</p>
</details>

计算机使用二进制工作，即由零和一组成的字符串，每个都对应于二的幂。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Computers work using binary, strings of zeros and ones, each corresponding to a power of two.</p>
</details>

因此，在计票的计算机内部，某个地方有一串**比特**（Bit: 计算机信息的基本单位，表示0或1）代表着玛丽亚获得的票数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So somewhere inside the computer tabulating all the votes was a string of bits representing the number of votes Maria received.</p>
</details>

它一开始是全零，然后每当她获得一张选票，就会增加一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It started the day all zeros, and then as each vote for her came in, it would increment by one.</p>
</details>

在物理上，这是通过打开晶体管表示一，关闭晶体管表示零来完成的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Physically, this is done by turning on a transistor for one and turning it off for zero.</p>
</details>

数字4096的非凡之处在于它恰好是二的幂，即2的12次方。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's remarkable about the number 4,096 is that it is exactly a power of two. Two to the power of 12.</p>
</details>

那是第13个比特位。
<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text">That is the 13th bit.</p>
</details>

因此，要让玛丽亚·温德沃格尔多获得4096张选票，只需要发生一件事。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for Maria Vindevogel to receive an extra 4,096 votes, only one thing needed to happen.</p>
</details>

第13个比特位必须从零翻转到一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The 13th bit had to flip from a zero to a one.</p>
</details>

但为什么会发生这种情况呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But why would that happen?</p>
</details>

计算机之所以能够精确工作，是因为比特位不会翻转，除非我们希望它们翻转，或者它们会吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Computers work precisely because bits don't flip unless we want them to, or do they?</p>
</details>

### 早期发现：放射性与芯片故障

比利时调查人员在研究这个问题时，发现大型计算机公司从1970年代开始就有类似问题的报告。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Looking into the problem, Belgian investigators found reports of similar issues from big computer companies starting in the 1970s.</p>
</details>

1978年，英特尔（Intel）报告称其16**千比特动态随机存取存储器**（16 kilobit Dynamic Random Access Memory, DRAM: 一种常用的半导体存储器）中出现了一些奇怪的错误。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1978, Intel reported some strange errors popping up in their 16 kilobit dynamic random access memory or DRAM.</p>
</details>

在没有明显原因的情况下，一会自发地翻转成零。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ones would spontaneously flip to zeros with no apparent cause.</p>
</details>

问题最终被发现是芯片封装的陶瓷材料。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The problem turned out to be the ceramic packaging the chip was encased in.</p>
</details>

随着1970年代半导体封装需求的飙升，科罗拉多州绿河（Green River）上新建了一家制造工厂。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With the demand for semiconductor packaging skyrocketing in the 1970s, a new manufacturing plant was constructed on the Green River in Colorado.</p>
</details>

不幸的是，这个地点恰好位于一个旧铀矿厂的下游。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Unfortunately, this site happened to be just downstream of an old uranium mill.</p>
</details>

放射性原子进入河流，然后进入英特尔微芯片的陶瓷封装中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Radioactive atoms made their way into the river and then into the ceramic packaging for Intel's microchips.</p>
</details>

英特尔科学家调查这个问题时发现，即使陶瓷中微量的铀和钍也足以引起问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Intel scientists investigating the problem found that even trace amounts of uranium and thorium in the ceramic were sufficient to cause problems.</p>
</details>

在他们的DRAM中，内存以半导体阱中电子的存在或缺失来存储。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In their DRAM, memory was stored as the presence or absence of electrons in a semiconductor well.</p>
</details>

铀和钍发射的**阿尔法粒子**（Alpha Particle: 由两个质子和两个中子组成的氦原子核）具有足够的能量和**电离**（Ionizing Radiation: 能够从原子或分子中移除电子的辐射）能力，可以在硅中产生电子空穴对。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The alpha particles emitted by uranium and thorium were energetic and ionizing enough to create electron hole pairs in the silicone.</p>
</details>

如果一个阿尔法粒子恰好击中正确的位置，它可能会产生大量的自由电荷载流子，导致电子在阱中积累，从而将一翻转为零。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If an alpha particle is struck in just the right place, it could create a large number of free charge carriers causing electrons to accumulate in the well flipping a one to a zero.</p>
</details>

这被称为**单粒子翻转**（Single Event Upset, SEU: 由单个高能粒子撞击引起的软错误），一种**软错误**（Soft Error: 不损坏硬件但改变数据或指令的错误）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is known as a single event upset, a type of soft error.</p>
</details>

这个错误是软性的，因为设备没有损坏。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The error is soft because the device hasn't been damaged.</p>
</details>

比特位改变了，但你可以擦除它并重新写入，没有问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The bit has changed, but you could erase it and rewrite it with no problems.</p>
</details>

调查人员将芯片暴露在不同活度的阿尔法发射体下。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Investigators exposed the chips to alpha emitters with different levels of activity.</p>
</details>

正如预期的那样，他们发现比特翻转的数量与芯片暴露于阿尔法粒子的数量直接相关。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And just as you'd expect, they found the number of bit flips directly correlated with the number of alpha particles the chip had been exposed to.</p>
</details>

这个问题在1970年代被发现的原因是芯片组件已经小型化，以至于单个阿尔法粒子就能产生足够的电荷来翻转一个比特位。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The reason this problem was identified in the 1970s was because chip components had been miniaturized to the point where a single alpha particle could produce enough charge to flip a bit.</p>
</details>

这些发现立即引起了广泛关注。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Immediately, these findings attracted a lot of attention.</p>
</details>

在论文发表之前，它就在行业内广泛流传。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before the paper was published, it was widely circulated in the industry.</p>
</details>

结果，芯片制造商在生产微芯片和封装时更加小心，以避免使用放射性材料。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as a result, chip manufacturers were a lot more careful to avoid radioactive materials when producing their microchips and packaging.</p>
</details>

因此，导致玛丽亚·温德沃格尔多获得4096张选票的比特翻转并非由计算机中的天然放射性引起。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Therefore, the bit flip that gave Maria Vindevogel 4,096 extra votes wasn't caused by natural radioactivity in the computer.</p>
</details>

那么它来自哪里呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So where did it come from?</p>
</details>

### 宇宙射线的发现与来源

1896年，亨利·贝克勒尔（Henri Becquerel）用铀发现了放射性之后，科学家们开始寻找测量它的方法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">After Henri Becquerel discovered radioactivity with uranium in 1896, scientists sought a way to measure it.</p>
</details>

不同材料的放射性有多强？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How radioactive were different materials?</p>
</details>

一种方法是使用金箔**电离计**（Electrometer: 用于测量电荷或电位的仪器）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And one way to do this is with a gold leaf electrometer.</p>
</details>

当它带电时，金箔会相互排斥，你可以通过金箔的角度来测量电荷量。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When it's charged, the leaf is repelled and you can measure the amount of charge by the angle of the leaf.</p>
</details>

现在，如果电离辐射进入腔室，它会从空气分子中剥离电子，产生正负电荷。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, if ionizing radiation enters the chamber, it rips electrons off air molecules, creating positive and negative charges.</p>
</details>

异性电荷被吸引到金箔上，使其随着时间放电。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Opposite charges are attracted to the leaf, discharging it over time.</p>
</details>

电离辐射水平越高，设备放电越快。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The higher the level of ionizing radiation, the faster the device discharges.</p>
</details>

1910年，西奥多·沃尔夫（Theodore Wolf）带着他的电离计登上了埃菲尔铁塔。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1910, Theodore Wolf took his electrometer to the top of the Eiffel Tower.</p>
</details>

由于放射性是在地球的土壤和岩石中发现的，他预计在300米高空，辐射量将仅为地面辐射的百分之几。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Since radioactivity was found in the soil and rocks of earth, he expected that 300 meters up, the radiation would be just a few percent of the ground radiation.</p>
</details>

然而他发现辐射量只略有下降。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Instead he found only a slight decrease.</p>
</details>

1911年，奥地利物理学家维克多·赫斯（Victor Hess）决定将这个实验进行得更远。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1911, Austrian physicist Victor Hess decided to take this experiment further. Literally.</p>
</details>

他将电镜装进氢气球的篮子里。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He loaded electric scopes into the basket of a hydrogen balloon.</p>
</details>

在他的前两次飞行中，他观察到了与沃尔夫相同的情况。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In his first two flights, he observed the same thing as Wolf.</p>
</details>

在高达1100米的高度，两次飞行都显示辐射没有发生根本性变化，与地面观测值相比。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Up to an altitude of 1100 meters, both trips revealed no fundamental change in radiation compared to the values observed on the ground.</p>
</details>

但第二年，他进行了七次气球飞行，最高达到5200米的高度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the next year, he conducted seven balloon flights up to an altitude of 5,200 meters.</p>
</details>

在这里他发现了一些非凡的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And here he discovered something remarkable.</p>
</details>

虽然在最初的几百米内辐射量有所下降，但在大约一公里以上，辐射水平随着海拔的升高而增加。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">While there was an initial drop in radiation for the first several hundred meters, above one kilometer or so the level increased with increasing altitude.</p>
</details>

在他的最高高度，辐射水平是地面的几倍。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At his maximum height, the level of radiation was several times greater than it was on the ground.</p>
</details>

辐射似乎不是来自地球，而是来自天空。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The radiation appeared to be coming, not from the earth, but from the sky.</p>
</details>

赫斯在一次日食期间安排了他的气球飞行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hess scheduled one of his balloon flights during a solar eclipse.</p>
</details>

当月亮从太阳前面经过时，他仔细观察了他的仪器。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as the moon passed in front of the sun, he carefully watched his instruments.</p>
</details>

但读数没有受到影响。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the readings were unaffected.</p>
</details>

即使太阳被遮盖了一半，辐射水平也相同。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even with the sun half covered, the level of radiation was the same.</p>
</details>

“由于没有观察到日食对穿透辐射的影响，我们得出结论，即使一部分辐射是宇宙起源的，它也几乎不来自太阳。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Since no influence of the eclipse on the penetrating radiation was noted, we conclude that even if a part of the radiation should be of cosmic origin, it hardly emanates from the sun.</p>
</details>

维克多·赫斯发现了**宇宙射线**（Cosmic Rays: 来自外太空的高能粒子流）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Victor Hess had discovered cosmic rays. High energy radiation from space.</p>
</details>

但这些射线到底是什么，它们来自哪里？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what were these rays exactly and where were they coming from?</p>
</details>

嗯，今天我们知道它们不是许多人怀疑的电磁射线，而是粒子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, today we know they aren't electromagnetic rays as many suspected, but particles.</p>
</details>

大约90%是质子，9%是氦核，1%是更重的原子核。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Around 90% are protons, 9% are helium nuclei, and 1% are heavier nuclei.</p>
</details>

其中一些来自太阳，但它们的能量相对较低。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some of them are from the sun, but they have comparatively low energy.</p>
</details>

能量极高、以接近光速移动的宇宙射线来自我们银河系及其他星系中爆炸的恒星——超新星。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">High energy cosmic rays moving very close to the speed of light come from exploding stars, supernova in our own galaxy and in others.</p>
</details>

而最高能量的粒子被认为来自黑洞，包括星系中心的超大质量黑洞。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the highest energy particles are thought to come from black holes, including the super massive black holes at the centers of galaxies.</p>
</details>

但很难精确确定宇宙射线来自何处，因为作为带电粒子，它们会被太空中的磁场偏转。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But it's hard to pin down exactly where cosmic rays come from because as charged particles, they're deflected by magnetic fields in space.</p>
</details>

所以它们可以在宇宙中蜿蜒穿行数十亿年。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So they can wind their way through the universe for billions of years.</p>
</details>

1991年10月15日探测到的一束宇宙射线能量高达51焦耳。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A cosmic ray detected on October 15th, 1991 had an energy of 51 joules.</p>
</details>

那是一个单个的亚原子粒子，其能量相当于一个以每小时一百公里速度飞行的棒球。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That is a single subatomic particle with the energy of a baseball going a hundred kilometers per hour.</p>
</details>

出于显而易见的原因，它被称为“OMG粒子”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For obvious reasons, it was dubbed the OMG particle.</p>
</details>

但像这样的初级宇宙射线不会到达地球表面。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But primary cosmic rays like these don't make it down to earth's surface.</p>
</details>

相反，它们在大约地面上方25公里处与空气分子碰撞，产生像π介子这样的新粒子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Instead, they collide with air molecules around 25 kilometers above the ground and create new particles like pions.</p>
</details>

这些粒子又碰撞并衰变为中子、质子、**μ子**（Muon: 一种基本粒子，质量比电子大）、电子、**正电子**（Positron: 电子的反粒子，带正电）和光子等其他粒子，它们反过来又与空气分子发生碰撞，形成一长串的级联反应。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These collide and decay into other particles like neutrons, protons, muons, electrons, positrons and photons, which in turn collide with other air molecules in one long cascade.</p>
</details>

因此，从单个初级宇宙射线中，会产生一股粒子流冲向地球。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So from a single primary cosmic ray, comes a shower of particles streaming towards the earth.</p>
</details>

调查人员怀疑，正是这些粒子中的一个击中了比利时一台计算机中的晶体管，将第13个比特位从零翻转为一，从而使玛丽亚·温德沃格尔多获得了4096张选票。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is one of these particles that investigators suspect struck a transistor in a computer in Belgium, flipping the 13th bit from a zero to a one and giving Maria Vindevogel 4,096 extra votes.</p>
</details>

但这样的事情多久发生一次呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But how often do things like this happen?</p>
</details>

### 宇宙射线：无处不在的比特翻转

1911年，查尔斯·威尔逊（Charles Wilson）通过完善他的**云室**（Cloud Chamber: 用于观察带电粒子径迹的探测器），使我们能够看到周围的宇宙射线。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1911, Charles Wilson made it possible to see the cosmic rays all around us when he perfected his cloud chamber, an enclosure with super saturated water or alcohol vapor.</p>
</details>

当宇宙射线穿过云室时，它会使气体电离，导致水蒸气凝结成离子上的微小液滴，从而显示出粒子的路径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When a cosmic ray passes through the chamber, it ionizes the gas causing vapor to condense into tiny droplets on the ions, revealing the path of the particle.</p>
</details>

阿尔法粒子（氦核）留下短而粗的径迹，而贝塔粒子（电子）留下长而细的径迹。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alpha particles, helium nuclei, leave short thick tracks while beta particles, electrons leave long skinny trails.</p>
</details>

1932年，卡尔·安德森（Carl Anderson）发现了一条看起来像电子留下的径迹，但在施加的磁场中，它却向错误的方向弯曲。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1932, Carl Anderson identified a trail that looked like it was made by an electron, but in the applied magnetic field, it curved in the wrong direction.</p>
</details>

这意味着它带正电荷。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Implying it had a positive charge.</p>
</details>

安德森发现了反电子，即正电子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Anderson had found the anti electron or positron.</p>
</details>

这是首次确认反物质的存在。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was the first confirmed sighting of anti-matter.</p>
</details>

四年后，同样使用云室，他再次在宇宙射线中发现了μ子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Four years later, also using a cloud chamber, he discovered the muon, again in cosmic rays.</p>
</details>

因发现正电子，安德森于1936年获得了诺贝尔物理学奖。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For his discovery of the positron, Anderson was awarded the Nobel Prize in Physics in 1936.</p>
</details>

他与维克多·赫斯分享了奖项，赫斯是最初发现宇宙射线的人，这些无形粒子以我们大多数人都没有意识到的方式影响着我们的生活。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He shared the prize with Victor Hess, the man who discovered cosmic rays in the first place, invisible particles that affect our lives in ways most of us are oblivious to.</p>
</details>

这可能是电子游戏中发生过的最罕见的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is possibly the rarest thing to ever happen in a video game.</p>
</details>

2013年，用户DOTA_Teabag在游戏机上速通《超级马里奥64》（Super Mario 64）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 2013, user DOTA_Teabag was speed running Super Mario 64 on the console.</p>
</details>

在“滴答时钟”（Tik Tok Clock）关卡中，他突然向上瞬移到一个更高的平台。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the level Tik Tok Clock, he suddenly up warps onto a higher platform.</p>
</details>

- [DOTA_Teabag] 什么鬼？
- [玩家] 你碰到隐形墙了吗？什么？
- 请说你拿到了——
- [DOTA_Teabag] 不，那是我见过最疯狂的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [DOTA_Teabag] What the? - [Player] Did you get invisible wall? What? - Please say you got the--- - [DOTA_Teabag] No, that was the craziest thing I've ever seen though.</p>
</details>

这个动作节省了几秒钟，看起来像是游戏中新发现的漏洞，可以给速通玩家带来优势。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Narrator] The move shaves off a few seconds and it seems like a newly discovered glitch in the game that could give speed runners and edge.</p>
</details>

用户PenandCook12悬赏1000美元，奖励任何能重现这种向上瞬移的人。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">User PenandCook12 put out a $1,000 bounty for anyone who could replicate the up warp.</p>
</details>

但到目前为止，六年过去了，没有人能够做到。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But so far, after six years, no one has been able to.</p>
</details>

任何人能想到的最佳解释是宇宙射线导致了这个故障。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The best explanation anyone can come up with is that a cosmic ray caused the glitch.</p>
</details>

有证据表明，马里奥身高坐标的第一个字节中翻转一个比特位，就可能导致这种效果。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's been shown that a single bit flipped in the first bite of Mario's height co-ordinate could have caused the effect.</p>
</details>

在主关卡中，该字节是11000101。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the main level, the bite was 1 1 0 0 0 1 0 1.</p>
</details>

但如果你将最后一个一翻转为零，就会改变他的垂直位置。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if you flip the last one to a zero, it changes his vertical position.</p>
</details>

巧合的是，这个新高度与更高的楼层重合。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And just by chance, this new height coincides with the higher floor.</p>
</details>

PenandCook12编写了一个脚本，在正确的时间手动翻转比特位，并成功实现了相同的向上瞬移。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">PenandCook12 wrote a script to manually flip the bit at the right moment and was able to achieve the same up warp.</p>
</details>

这是一个特别明显的比特翻转，但事实是宇宙射线一直在触发比特翻转。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is a particularly visible bit flip, but the truth is cosmic rays are triggering bit flips all the time.</p>
</details>

- 那里的一个故障，一个瞬态事件，可以改变这些设备的功能，我们称之为单事件功能中断。所以整个进程可能会挂起。所以你得到的蓝屏死机实际上可能是一个中子或其他什么造成的。
- [德里克] 当人们看到蓝屏死机时，那可能是由宇宙射线引起的吗？
- 绝对是。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- An upset there, transient there can alter the function of these devices and we call that a single event functional interrupt. So an entire process can hang. So a blue screen of death that you get might actually have been a neutron or whatnot. - [Derek] When people see the blue screen of death, could that be caused by a cosmic ray? - Absolutely.</p>
</details>

如今，有多种方法可以使计算机芯片在比特翻转面前具有弹性，例如**错误校正码**（Error Correction Code, ECC: 一种数据保护技术，用于检测并纠正数据错误）内存。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These days, there are a number of ways computer chips are made resilient in the face of bit flips like error correction code or ECC memory.</p>
</details>

但你无法完全阻止比特翻转的发生。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But you can't totally prevent bit flips from happening.</p>
</details>

1996年，IBM估计每256兆字节的RAM，每月会发生一次比特翻转。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1996, IBM estimated that for each 256 megabytes of RAM, one bit flip occurs per month.</p>
</details>

而主要元凶似乎是宇宙射线粒子流中产生的中子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the main culprit seems to be neutrons created in the shower of particles from cosmic rays.</p>
</details>

### 保护计算机免受宇宙射线影响

从2009年开始，丰田（Toyota）召回了数百万辆汽车，原因是意外加速问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Starting in 2009, Toyota recalled millions of vehicles due to the problem of unintended acceleration.</p>
</details>

- 我们当时在快车道上以大约70英里的时速行驶，他说车子一直在加速，他无法让它停下来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- We were in the fast lane driving at about 70, and he said that the car was continuing to accelerate and he couldn't bring it to a stop.</p>
</details>

许多人猜测是电子控制系统中宇宙射线引起的比特翻转是原因。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Many speculated that cosmic ray induced bit flips in the electronic control system were the cause.</p>
</details>

以至于美国国家航空航天局（NASA）都被请来协助调查。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So much so that NASA was called in to help with the investigation.</p>
</details>

但事实证明，宇宙射线可能不是罪魁祸首。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But it turns out, cosmic rays were probably not the culprit.</p>
</details>

NASA确定的主要原因包括：粘滞的加速踏板、安装不当的地垫，以及最常见的是驾驶员误将加速踏板当成刹车踏板踩下。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">NASA identified as the main causes, sticky accelerator pedals, poorly fitted floor mats and most commonly, drivers pushing on the accelerator thinking it was the brake.</p>
</details>

但宇宙射线确实导致了超级计算机的崩溃，尤其是在高海拔地区。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But cosmic rays have caused crashes of supercomputers, especially at higher elevations.</p>
</details>

位于海拔2200米的洛斯阿拉莫斯国家实验室（Los Alamos National Labs）经常处理中子引起的超级计算机崩溃问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Los Alamos National Labs located 2200 meters above sea level is constantly dealing with neutron induced supercomputer crashes.</p>
</details>

因此，软件会频繁自动保存，并且整个设施都安装了中子探测器。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the software auto saves frequently and neutron detectors have been installed throughout the facility.</p>
</details>

如果你去更高的地方，比如爬升到飞机巡航高度，你可以在盖革计数器上看到宇宙射线的辐射量增加。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you go even higher, like climbing up to cruising altitude in a plane, you can see the radiation from cosmic rays increasing on a Geiger counter.</p>
</details>

在18000英尺（约5486米）处达到每小时0.5**微西弗**（Microsievert: 衡量辐射剂量的单位）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To .5 microsieverts per hour at 18,000 feet.</p>
</details>

在23000英尺（约7010米）处达到每小时1微西弗。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Up to one microsieverts per hour at 23,000 feet.</p>
</details>

在33000英尺（约10058米）处超过每小时2微西弗。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Over two microsieverts per hour at 33,000 feet.</p>
</details>

在更高海拔和靠近两极的地区，甚至超过每小时3微西弗。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And over three microsieverts per hour at even higher altitudes and towards the poles.</p>
</details>

在巡航高度，这会将单粒子翻转的几率增加10到30倍。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At cruising altitude, this increases the chance of a single event upset by 10 to 30 times.</p>
</details>

如果这发生在你的笔记本电脑上并不重要，但如果它发生在飞行计算机中呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This isn't critical if it happens in your laptop, but what if it occurs in the flight computer?</p>
</details>

2008年10月7日，一架空中客车A330（Airbus A330）从新加坡起飞前往珀斯。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On October 7th, 2008, an Airbus A330 took off from Singapore to Perth.</p>
</details>

飞行了三个多小时后，飞机突然俯冲，在20秒内下降了200米。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just over three hours into the flight, the plane suddenly pitched down diving 200 meters in 20 seconds.</p>
</details>

飞机上的每个人都经历了负0.8G的加速度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Inside the plane, everyone experienced negative 0.8 Gs of acceleration.</p>
</details>

感觉就像飞机翻了个身。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It would have felt like the plane had flipped over.</p>
</details>

- 即使我们系着三点式安全带，G力也足以将我们两人都从座位上抬起并向前推。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- The G-Force was enough, even with our three point harness to lift us both out of the seat and push us forward as well.</p>
</details>

几分钟后，飞机又下降了120米。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Minutes later, the plane dropped another 120 meters.</p>
</details>

机上119人受伤，许多人头部撞到天花板。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">119 people on board were injured, many from bumping their heads into the ceiling.</p>
</details>

于是飞行员决定在利尔蒙特（Learmonth）紧急降落。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the pilots decided to make an emergency landing in Learmonth.</p>
</details>

随后的调查显示，故障似乎发生在第一个**惯性参考单元**（Air Data Inertial Reference Unit, ADIRU: 为飞机提供关键飞行数据的计算机系统）上。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the investigation that followed, the fault seem to occur with the first air data inertial reference unit, or ADIRU for short.</p>
</details>

这台计算机提供空速、攻角和高度等关键数据。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This computer supplies critical data like airspeed, angle of attack and altitude.</p>
</details>

它提供每条信息的方式是一个32位的二进制字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The way it supplies each of these pieces of information is in a 32 bit binary word.</p>
</details>

前八位识别信息类型，第11到29位编码实际数据。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first eight bits identify the type of information and bits 11 to 29 encode the actual data.</p>
</details>

似乎是前八位中的一个比特翻转，导致高度信息被错误地标记为攻角信息。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What seems to have happened is that a bit flip in the first eight bits meant altitude information was mislabeled as angle of attack information.</p>
</details>

驾驶舱内，超速和失速警报同时响起，这本应是不可能发生的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Inside the cockpit, alarms went on for over speed and stall simultaneously, something that should be impossible.</p>
</details>

但飞机猛烈俯冲，以纠正它认为是失速的情况，将乘客和机组人员抛向天花板。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the plane nose down sharply to correct what it thought was a stall, throwing passengers and crew into the ceiling.</p>
</details>

调查人员研究了软件错误、软件损坏、硬件故障、物理环境因素和电磁干扰。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Investigators looked into software bugs, software corruption, a hardware fail, physical environment factors and electromagnetic interference.</p>
</details>

但根据多方证据，这些可能性都被认为是不太可能的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But each of these possibilities was found to be unlikely based on multiple sources of evidence.</p>
</details>

另一个潜在的触发事件是高能大气粒子撞击CPU模块内的一个集成电路，导致了单粒子效应。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other potential triggering event was a single event effect resulting from a high energy atmospheric particle striking one of the integrated circuits within the CPU module.</p>
</details>

单粒子翻转的一个挑战是它们是软错误。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the challenges with single event upsets is that they are soft errors.</p>
</details>

它们不会留下痕迹，但有趣的是，空中客车A330是在1992年建造的，当时没有针对机载系统抵御单粒子效应的具体监管或飞机制造商要求。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They don't leave a trace, but interestingly, the Airbus A330 was built in 1992 when there were no specific regulatory or aircraft manufacturer requirements for airborne systems to be resilient to single event effects.</p>
</details>

对于航天飞机，从一开始就内置了冗余。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With the space shuttle, redundancy was built in from the start.</p>
</details>

为了导航和控制，有四台计算机同时运行相同的软件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For navigation and control, there were four computers simultaneously running identical software.</p>
</details>

如果一台计算机出现软错误，其他三台就会否决它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If one computer had a soft error, the other three would overrule it.</p>
</details>

通过这种设置，他们还可以跟踪比特翻转的频率。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And using this setup, they could also track the frequency of bit flips.</p>
</details>

在一次为期五天的任务STS 48中，共发生了161次独立的比特翻转。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On one five day mission, STS 48, there were 161 separate bit flips.</p>
</details>

在大气层之外，宇宙射线能量如此之高，有时你甚至能看到它们。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Above the atmosphere, cosmic rays are so energetic sometimes you can even see them.</p>
</details>

- 偶尔你会闭上眼睛，但还没睡着。如果你等一会儿，偶尔会看到一道闪光。我们认为那是重粒子或来自辐射的单个能量爆发，它们要么穿过眼球本身，要么穿过视神经。你的身体记录辐射穿过它的方式令人惊讶地是通过在你的一只眼睛中显示一个小闪光，只是为了提醒你，你不仅受到太阳的辐射，还受到宇宙中每一颗恒星的辐射。我回想起第一批宇航员，他们一定闭上眼睛看到了那种辐射，然后想：“我不会告诉任何人这件事，因为没有人告诉我。我不会说。”我能想象前两个家伙说：“嘿，我，有时我看到闪光。你看到闪光吗？”然后就是：“哦，我们都看到闪光。”“哦，好吧，那没关系。”（旁白笑）
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Once in a while you have your eyes closed and you're not asleep yet. And if you wait a little while, you occasionally will see a flash of light. And we think it is heavy particles or individual bursts of energy coming from radiation that are either going through the eyeball itself or going through the optic nerve. And they, the way that your body registers radiation going through it is amazingly enough by showing you a little flash in one of your eyes, just to remind you that you are subject to the radiation of not only our sun, but every star of the universe, that is radiating at you. I picture back to the first astronauts who must have closed their eyes and seen that radiation and gone, "I'm not going to tell anybody about this "because no one's told me about it. "I'm not talking." I can just imagine the first two guys that said, "Hey, I am, "sometimes I see flashes of light. "Do you see flashes of light?" And then it's, "Oh, we all see flashes of light." "Oh, okay, well, that's all right then." (narrator laughing)</p>
</details>

对于前往其他行星的任务，保护电子设备至关重要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Narrator] For missions to other planets, protecting electronics is critical.</p>
</details>

- 如果一个比特的信息控制着你航天器上的一个关键功能，比如说你的推进器，它从一变为零，从开变为关，反之亦然，你可能会失去任务。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- If a single bit of information controls a critical function on your spacecraft, let's say your thrusters, and that goes from a one to is zero, from a on to off, or vice versa, you could lose the mission.</p>
</details>

这就是为什么刚刚登陆火星的“毅力号”火星车（Perseverance Rover）上的计算机是20年前的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Narrator] That's why the computer on the Perseverance Rover that just landed on Mars is 20 years old.</p>
</details>

它是一款2001年推出的Power PC，只有256兆字节的RAM和2千兆字节的闪存。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a power PC launched in 2001 with only 256 megabytes of Ram and two gigabytes of flash storage.</p>
</details>

但它经过了**辐射硬化**（Radiation Hardening: 通过设计、材料和电路来提高电子设备抗辐射能力的技术），这意味着其设计、材料、电路和软件都旨在承受普通计算机40倍的辐射。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But it is radiation hardened, meaning the design, materials, circuits and software are built to withstand 40 times the radiation of an ordinary computer.</p>
</details>

自2005年以来，它已被用于十多次太空任务。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's been used on over a dozen space missions going back to 2005.</p>
</details>

- 事实上，多年前我们刚开始进行Power PC测试时，我们只是简单地将一个操作系统处理器放入一个束流线中，在那里我们在地球上生成这些粒子，并寻找蓝屏死机。你可以找出哪里出了问题，并尝试解决它。这样你就不会遇到蓝屏死机，因为进入那种模式的航天器基本上是无法恢复的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- In fact, when we first started doing the power PC testing years ago, the way we did it, we just simply stuck an operating system processor in a beam line where we generate these particles on the planet and look for blue screens of death. You can kind of figure out what's going wrong and try to undo that. So you don't get to the blue screen of death because a spacecraft that gets into that mode is basically unrecoverable.</p>
</details>

当“旅行者1号”（Voyager 1）航天器离开太阳系时，我们能够判断的一个方式是它所经历的宇宙射线通量增加了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As the Voyager 1 spacecraft departed the solar system, one of the ways we could tell was by an increase in the flux of cosmic rays it experienced.</p>
</details>

尽管在地球上，来自太阳的粒子流和太阳风是辐射源，但在更远的地方，这些相同的粒子维持着一个保护性气泡——**日光层**（Heliosphere: 太阳风在星际介质中形成的巨大气泡）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Although on earth, the particles streaming from the sun and the solar wind are a source of radiation, further out these same particles maintain protective bubble. The heliosphere.</p>
</details>

它有助于偏转和减缓来自星际空间的宇宙射线，保护太阳系免受电离辐射。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It helps deflect and slow cosmic rays from interstellar space protecting the solar system from ionizing radiation.</p>
</details>

但太阳有一个11年的活动周期。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the sun has an 11 year activity cycle.</p>
</details>

所以这种保护会波动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this protection fluctuates.</p>
</details>

当太阳活跃时，地球上的宇宙射线通量远低于太阳休眠时。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The flux of cosmic rays on earth is much lower when the sun is active than when it's dormant.</p>
</details>

### 宇宙射线的深远影响

在我们星球的历史上，宇宙射线可能扮演了更大的角色，它们翻转的不是电子设备中的比特位，而是活体生物的基因代码，为自然选择提供了部分变异。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the history of our planet, cosmic rays may have played an even larger role flipping bits, not in electronics, but in the genetic codes of living organisms, providing some of the variation on which natural selection acts.</p>
</details>

玛丽亚·温德沃格尔现在是比利时众议院的议员，由人民而不是粒子选举产生。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maria Vindevogel is now a member of the Belgium Chamber of Representatives, elected by people, not a particle, but her story is a reminder of the zillions of particles winding their way through the universe for millions or billions of years.</p>
</details>

其中一个可能在任何时刻，通过一个微小的晶体管，改变你的生活，并……（电子干扰）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of which might at any moment, change your life by passing through a tiny transistor and cra.... (electronic disturbance)</p>
</details>

发现宇宙射线的起源，或者4096张额外选票的来源，或者如何保护火星车免受辐射，都需要解决问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Discovering the origin of cosmic rays or where 4,096 extra votes came from or how to protect the Mars Rover from radiation requires problem solving, which is a perishable skill.</p>
</details>

保持解决问题能力敏锐的最佳方法是解决各种各样的问题，这可以通过本视频的赞助商Brilliant来做到。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the best way to keep your problem solving skills sharp is to solve a diverse range of problems, which you can do with the sponsor of this video, Brilliant.</p>
</details>

Brilliant是一个网站和应用程序，以互动方式教授你STEM概念。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Brilliant is a website and app that teaches you STEM concepts in an interactive way.</p>
</details>

他们有从应用计算机科学到狭义相对论等主题的课程。
<details>
<summary>View/Hide Original English</p>
</details>
<p class="english-text">They have courses on topics from applied computer science to special relativity.</p>
</details>

如果你喜欢这个视频，我推荐两门课程：计算机内存和算法基础。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Two courses I would recommend if you enjoyed this video, are computer memory and algorithm fundamentals.</p>
</details>

Brilliant最近大大提升了互动性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Brilliant have really upped their interactivity recently.</p>
</details>

所以你不再是阅读算法，而是学习如何自己编写算法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So instead of reading about algorithms, you're taught how to write algorithms yourself.</p>
</details>

Brilliant让你参与主动学习。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Brilliant engages you in active learning.</p>
</details>

他们不是告诉你正确答案，而是让你自己找出答案，并在此过程中提供大量有用的提示和指导。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Instead of telling you the right answer, they allow you to figure it out for yourself with plenty of helpful hints and guidance along the way.</p>
</details>

对于本频道的观众，Brilliant为前200名注册者提供年度订阅20%的折扣。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for viewers of this channel, Brilliant is offering 20% off an annual subscription to the first 200 people to sign up.</p>
</details>

只需访问brilliant.org/veritasium。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just go to brilliant.org/veritasium.</p>
</details>

我会把链接放在描述中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'll put that link down in the description.</p>
</details>

所以我要感谢Brilliant对Veritasium的支持，也感谢你的观看。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I want to thank Brilliant for supporting Veritasium and I want to thank you for watching.</p>
</details>