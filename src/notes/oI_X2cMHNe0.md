---
area: tech-insights
category: technology
companies_orgs:
- Caltech
- LIGO
- Ansys
date: '2022-04-29'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Matter and Interactions
people:
- Derek Muller
- Richard Abbott
- Ben Watson
- Chabay
- Sherwood
- Rick Hartley
- Alpha Phoenix
- ZY
products_models:
- HFSS
- VPython
- Brilliant
project:
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=oI_X2cMHNe0
speaker: veritasium
status: evergreen
summary: 视频主持人Veritasium针对其此前关于超长电路中灯泡点亮速度的视频所引发的争议进行澄清。他通过实验和物理学原理，纠正了关于电流和能量传输的三大常见误解：电子并非从电池携带能量到灯泡，电子之间也并非相互推动，且电场并非完全来自电池。文章深入探讨了电场、表面电荷、坡印亭矢量以及传输线模型在电路中的真实作用，揭示了能量实际上通过电磁场在导线外部传输，并以接近光速的速度传播。此外，视频还展示了实验结果，证明即使在信号尚未完整环绕电路时，灯泡也能接收到足以发光的能量，强调了理解电磁场作为电路主要作用者的重要性。
tags:
- electric-field
- energy
- science
- society
- theory
title: 电力如何真正运作：Veritasium澄清电路能量传输误解
---

### 澄清电路争议：光速点亮灯泡的真相

我曾制作了一个关于一个巨大电路的视频，其中包含**光秒**（Light-second: 光传播一秒的距离）长的导线，连接到一个距离电池和开关仅一米远的灯泡。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I made a video about a gigantic circuit with light-second long wires that connect up to a light bulb, which is just one meter away from the battery and switch.</p>
</details>

我当时问大家，当我合上开关后，灯泡需要多长时间才能发光？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I asked you, after I closed the switch, how long will it take for us to get light from that light bulb?</p>
</details>

我的答案是1/c秒（其中c是光速）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And my answer was 1/c seconds.</p>
</details>

然而，一些评论指出：“他的答案是错的。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- And his answer is wrong.</p>
</details>

“我们将能够以超过光速的速度进行通信。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- We would be able to communicate faster than the speed of light.</p>
</details>

“这违反了因果律和常识。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- That violates causality and common sense.</p>
</details>

“这实际上有点误导。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- This is actually a bit misleading.</p>
</details>

“误导。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Misleading.</p>
</details>

“在某种程度上是误导。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Misleading in a way.</p>
</details>

“极度不信服。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Extremely unconvinced.</p>
</details>

“淘气的Veritasium先生真是捅了马蜂窝。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Naughty Mr. Veritasium has stirred up a right hornet's nest.</p>
</details>

显然，我在上一个视频中没有很好地解释到底发生了什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Clearly I did not do a good job of explaining what was really going on in the last video.</p>
</details>

所以我想澄清我所造成的任何困惑。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I wanna clear up any confusion that I created.</p>
</details>

### 实验设置与测量方法

在我身后，我们有一个这个电路的缩小模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So behind me, we have a scaled down model of this circuit.</p>
</details>

它每边只有10米长。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is only 10 meters in length on either side.</p>
</details>

显然，这比一光秒短得多，但对于前30纳秒，这个模型应该与大电路相同。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Obviously that's a lot shorter than one light-second, but for the first 30 nanoseconds, this model should be identical to the big circuit.</p>
</details>

**加州理工学院**（Caltech: California Institute of Technology，美国顶尖的私立研究型大学）拥有非常快速的示波器，所以我们能够看到在这段时间内发生了什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And Caltech has very fast scopes, so we'll be able to see what's going on in this time.</p>
</details>

我在制作这个视频时得到了**LIGO**（Laser Interferometer Gravitational-Wave Observatory: 激光干涉引力波天文台）的Richard Abbott的大力帮助。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I got a ton of help on this from Richard Abbott, who works on LIGO, the gravitational wave detector.</p>
</details>

在这里，我们将放置一个小电阻，它将作为我们灯泡的替代品。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Over here, we are going to put a little resistor, which is gonna be the stand in for our light bulb.</p>
</details>

我们将用示波器测量它，并基本上观察，从另一端施加一个脉冲（即拨动开关）到电阻两端产生电压之间的时间延迟是多少。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we're going to measure it with a scope and see essentially, what is the time delay between applying a pulse on the other side, basically flicking the switch, for us to get a voltage across our resistor.</p>
</details>

那个电压的大小非常重要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the magnitude of that voltage is really important.</p>
</details>

很多人认为它会微不足道。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A lot of people thought it would be negligible.</p>
</details>

“这提供的能量是如此微小。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- The amount of energy supplied by this is so minuscule.</p>
</details>

“一个非常非常小的效应，对吗？”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- A tiny, tiny effect, right?</p>
</details>

“你传到这里灯泡的电量是微不足道的。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- The amount of power you're getting to the lamp over here, it's nuff-all</p>
</details>

“他指的是灯在任何电流水平下都会立即亮起。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- He meant the light turns on at any current level immediately.</p>
</details>

“那不是我的意思。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- That is not what I meant.</p>
</details>

“嗯，实际上，根据那个假设，Derek的答案是错的。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Well, actually, with that assumption, Derek's answer is wrong.</p>
</details>

“无论开关状态如何，灯都不会熄灭。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The light never turns off no matter the state of the switch.</p>
</details>

“一些电子会跳过间隙，导致极小的连续泄漏电流。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some electrons will jump the gap and result in an extremely small continuous leakage current.</p>
</details>

让我明确我的主张。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Let me be clear about what I am claiming.</p>
</details>

我的主张是，我们将看到通过负载的电压和电流，其大小比泄漏电流大几个数量级。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, it is my claim that we will see voltage and current through the load that is many orders of magnitude greater than leakage current.</p>
</details>

如果将其通过适当的设备，这种电量实际上可以产生可见光。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">An amount of power that would actually produce visible light if you put it through an appropriate device.</p>
</details>

我们将在大致光线穿过一米间隙所需的时间内看到这种电量。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we will see that power there in roughly the time it takes the light to cross the one meter gap.</p>
</details>

但要理解为什么会发生这种情况，我们首先必须澄清我在回复中看到的一些误解。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But to understand why this happens, we first have to clear up some misconceptions that I saw in responses.</p>
</details>

### 误解一：电子携带能量

第一个误解是认为电子将能量从电池带到灯泡。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Misconception number one is thinking that electrons carry the energy from the battery to the bulb.</p>
</details>

假设我们有一个简单的电路，电池和灯泡在稳态下工作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's say we have a simple circuit with a battery and a bulb operating at steady state.</p>
</details>

如果你放大灯泡的灯丝，你会看到一个由带正电的原子核和最内层电子壳组成的晶格，周围环绕着一个负电子的海洋，这些电子可以在晶格中自由移动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you zoom in on the light bulb filament, you'd see a lattice of positively charged cores of atoms, the nucleus and lowest shells of electrons, surrounded by a sea of negative electrons, which are free to move around the lattice.</p>
</details>

这些电子的实际速度非常快，大约每秒一百万米，但方向都是随机的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The actual speed of these electrons is very fast, around a million meters per second, but all in random directions.</p>
</details>

电子的平均**漂移速度**（Drift Velocity: 导体中电荷载流子在电场作用下平均移动的速度）小于每秒0.1毫米。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The average drift velocity of an electron is less than 0.1 millimeters per second.</p>
</details>

通常，一个电子会撞到一个金属离子，并将部分或全部动能传递给晶格。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now frequently, an electron will bump into a metal ion, and transfer some or all of its kinetic energy to the lattice.</p>
</details>

电子减速，金属晶格开始更剧烈地摆动，从而发热。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The electron slows down and the metal lattice starts wiggling more. It heats up.</p>
</details>

最终，这就是导致灯丝发光的原因。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And ultimately this is what causes the filament to glow and emit light.</p>
</details>

所以很多人会看到这一点并得出结论，电子将能量从电池带到灯泡，并在那里以热量的形式耗散了其动能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a lot of people will look at this and conclude the electron carried the energy from the battery to the bulb where it dissipated its kinetic energy as heat.</p>
</details>

但请考虑，在碰撞之前，电子从哪里获得了动能？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But consider, where did the electron get its kinetic energy from before the collision?</p>
</details>

它并没有从电池携带那份能量。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It didn't carry that energy from the battery.</p>
</details>

事实上，如果电路只接通了很短的时间，那个电子根本就没有靠近过电池。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, if the circuit has only been on for a short time, that electron hasn't been anywhere near the battery.</p>
</details>

那么，在碰撞之前它是如何被加速的呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how was it accelerated before the collision?</p>
</details>

答案是，它是由导线中的电场加速的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The answer is, it was by an electric field in the wire.</p>
</details>

电子反复与晶格碰撞并失去能量。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The electron repeatedly collides with the lattice, and loses energy.</p>
</details>

每次碰撞后，它再次被电场加速。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And after each collision, it is again accelerated by the electric field.</p>
</details>

所以，尽管是电子将能量传递给晶格，但能量来自电场。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So although it is the electron that transfers energy to the lattice, the energy came from the electric field.</p>
</details>

### 误解二：电子相互推动

那么，这个电场从何而来？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So where does that electric field come from?</p>
</details>

许多动画让它看起来像是电子通过相互排斥在电路中相互推动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, a lot of animations make it look like the electrons push each other through the circuit via their mutual repulsion.</p>
</details>

所以你可能会认为电场来自它后面的电子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you might think the electric field comes from the electron behind it.</p>
</details>

有水流过软管或管中弹珠的类比。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is the analogy of water flowing through a hose, or marbles in a tube.</p>
</details>

这是误解二，认为移动的电子在电路中相互推动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is misconception two, thinking that mobile electrons push each other through the circuit.</p>
</details>

电子在电路中并非如此流动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That is not how electrons flow in circuits.</p>
</details>

真相是，如果你对几个原子进行平均，你会发现导体内部各处的电荷密度为零。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The truth is if you average over a few atoms, you find the charge density everywhere inside a conductor is zero.</p>
</details>

电子的负电荷和原子的正核完美抵消。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The negative charge of electrons and the positive cores of atoms perfectly cancel out.</p>
</details>

所以对于电子之间的每一个排斥力，都有一个来自旁边正离子的相等且相反的力。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for each repulsive force between electrons, there is an equal and opposite force from the positive ion next to it.</p>
</details>

这些力相互抵消。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These forces cancel out.</p>
</details>

因此，移动的电子不能在导线中相互推动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So mobile electrons cannot push each other through the wire.</p>
</details>

### 误解三：电场完全来自电池

那么，电场从何而来？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So where does the electric field come from?</p>
</details>

误解三是它完全来自电池。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Misconception number three is that it comes entirely from the battery.</p>
</details>

这在直觉上是说得通的，因为电池是电路中的活性元件，它有正极和负极。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This makes intuitive sense, since the battery is the active element in the circuit, it has a positive side and a negative side.</p>
</details>

所以它有一个电场，但这不是导线内所有电子所经历的电场。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it has an electric field, but this is not the electric field that all the electrons within the wire experience.</p>
</details>

考虑到电池的电场在靠近电池的地方要大得多。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Consider that the electric field of the battery is much larger close to the battery.</p>
</details>

所以如果它的电场真的是推动电子的原因，那么如果你把灯泡靠近电池，灯泡就会亮得多。
<details>
<summary>View/Hide Original English</p>
<p class="english-text">So if its field were really what's pushing the electrons around, then if you brought the light bulb close to the battery, then the bulb would glow much brighter.</p>
</details>

但事实并非如此。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it doesn't.</p>
</details>

### 表面电荷与电场的真实来源

真相是，导线中的电场既来自电池，也来自电路导线表面的电荷。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The truth is that the electric field in the wire comes both from the battery and from charges on the surface of the wires of the circuit.</p>
</details>

当你沿着导线从电池的负极走向正极时，其表面会形成一个电荷梯度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As you go along the wire from the negative end of the battery to the positive end, there is a gradient of charge built up on its surface.</p>
</details>

这个梯度从电子过剩开始，到中间大致没有电荷。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Starting with an excess of electrons, through to roughly no charge in the middle.</p>
</details>

正如我们将看到的，最陡峭的电荷梯度实际上是跨越负载，到达电子不足的区域，即导线正极表面暴露的正原子核。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As we'll see the steepest charge gradient is actually across the load to a deficiency of electrons, the exposed positive cores of atoms on the surface of the positive end of the wire.</p>
</details>

所有这些电荷以及电池上的电荷，在导线内部各处产生了电场。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All these charges and the charges on the battery create the electric field everywhere inside the wires.</p>
</details>

它们还在导线周围的空间中产生了电场。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They also create an electric field in the space around the wires.</p>
</details>

这些表面电荷在电池插入电路时几乎是瞬间建立起来的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These surface charges were set up almost instantaneously when the battery was inserted into the circuit.</p>
</details>

你可能会认为你需要移动电子很远的距离才能创建这种电荷分布，但事实并非如此。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You might think you'd have to move electrons a significant distance to create this charge distribution, but that is not the case.</p>
</details>

即使电子海的轻微膨胀或收缩，电子平均移动一个质子的半径，也能建立你所看到的表面电荷。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even a slight expansion or contraction of the electron sea, with electrons moving on average, the radius of a proton, can establish the surface charges you see.</p>
</details>

所以电荷移动的时间完全可以忽略不计。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the time for the charges to move is completely negligible.</p>
</details>

建立过程的速度仅受光速限制。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The speed of the setup process is limited only by the speed of light.</p>
</details>

一旦建立了表面电荷分布，电池就会通过在电池内部移动电子以抵抗**库仑力**（Coulomb Force: 描述带电粒子之间相互作用的力）来持续维持它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once that surface charge distribution has been established, the battery does continuous work to maintain it, by moving electrons through the battery against the Coulomb force.</p>
</details>

在负载中，所有表面电荷产生的电场加速电子，这些电子在与晶格碰撞时耗散能量。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the load, the electric field created by all the surface charges, accelerates electrons, which dissipate their energy in collisions with the lattice.</p>
</details>

所以电池将能量输入电场，电子从电场中获取能量并将其传递给负载。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the battery is putting energy into the field, which electrons take out and transfer to the load.</p>
</details>

### 牧羊人与牧羊犬的类比

一位制作了回应视频的电气工程师Ben Watson提出了一个很好的类比。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">An electrical engineer who made a response video, Ben Watson, came up with a good analogy.</p>
</details>

电池就像牧羊人。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The battery is like a shepherd.</p>
</details>

表面电荷是响应他命令的牧羊犬。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The surface charges are the sheep dogs responding to his orders.</p>
</details>

而移动的电子则是被那些吠叫的狗引导的羊群。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the mobile electrons are the sheep, guided by those barking dogs.</p>
</details>

电路的表面电荷描述在大多数教科书中都被省略了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The surface charge description of electric circuits is omitted from most textbooks.</p>
</details>

但在Chabay和Sherwood的《物质与相互作用》（Matter and Interactions）一书中对此有很好的阐述。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But there is a great treatment of it in Matter and Interactions by Chabay and Sherwood.</p>
</details>

他们还有一个**VPython**（VPython: 一个用于创建3D动画的Python模块）模拟，你可以在其中看到红色的正表面电荷和蓝色的负表面电荷。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They also have a VPython simulation where you can see the positive surface charge in red, and negative surface charge in blue.</p>
</details>

你可以看到整个电荷分布如何在电路内部和周围各处产生一个净电场，由橙色箭头表示。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see how this entire charge distribution creates a net electric field shown by the orange arrow, everywhere in and around the circuit.</p>
</details>

在导线内部各处，电场具有相同的大小，并且方向沿着导线。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Everywhere inside the wire, the electric field has the same magnitude and its direction is along the wire.</p>
</details>

这实际上显示的是导线中心的电场，但为了可视化，它被描绘在表面上。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is really showing you the electric field in the center of the wire, but it's depicted on the surface so you can see it.</p>
</details>

### 电阻中的电场与表面电荷梯度

在这个电路中，所有导体都由相同的材料制成，但底部的那段横截面积要窄得多。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this circuit, all the conductors are made of the same material, but the segment at the bottom has a much narrower cross section.</p>
</details>

所以它代表了一个电阻。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it represents a resistor.</p>
</details>

由于横截面积较小，电子通过电阻的**漂移速度**必须更高，这样才能承载与电路其他地方相同的电流。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Since the cross sectional area is smaller, the electron drift velocity through the resistor has to be higher so that it can carry the same current as everywhere else in the circuit.</p>
</details>

现在，漂移速度与电场成正比。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, drift velocity is directly proportional to electric field.</p>
</details>

所以电阻内部的电场必须最大。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the electric field must be largest inside the resistor.</p>
</details>

这通过在这里拥有最陡峭的表面电荷梯度来实现。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is achieved by having the steepest gradient of surface charges here.</p>
</details>

你还可以看到电池对净电场的贡献（洋红色），以及表面电荷的贡献（绿色）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can also see the contribution to the net electric field from the battery in magenta, and the contribution from surface charges in green.</p>
</details>

远离电池的地方，大部分电场是由表面电荷引起的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Far from the battery, most of the electric field is due to surface charges.</p>
</details>

而靠近电池的地方，电池的贡献更大，并且表面电荷产生的电场实际上与电池的电场方向相反。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whereas close to the battery, it has a greater contribution and the field due to surface charges is actually in the opposite direction to the field from the battery.</p>
</details>

### 总结与核心观点

总而言之，电子既不将能量从电池带到灯泡，也不在导线中相互推动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to sum up, electrons don't carry the energy from battery to bulb, nor do they push each other through the wire.</p>
</details>

它们被电场推动，这个电场是由电池上的电荷和导线表面的电荷产生的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They are pushed along by an electric field, which is created by charges on the battery, and charges on the surface of the wires.</p>
</details>

用这种电路观来看待事物，以前可能显得神秘的事情现在变得更有意义了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With this view of circuits, things that might have previously seemed mysterious, make a lot more sense.</p>
</details>

比如，如果电子以相同的速率和相同的漂移速度离开电池并返回，它们如何从电池携带能量？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like if electrons leave a battery at the same rate, and with the same drift velocity as they return, how do they carry energy from the battery?</p>
</details>

答案是它们不携带。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The answer is they don't.</p>
</details>

它们在每次与晶格碰撞之前都被电场加速。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They are accelerated by the electric field before each collision with the lattice.</p>
</details>

在结节处，正确数量的电子如何沿着每条路径流动？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At a junction, how do the correct number of electrons go down each path?</p>
</details>

它们被电场引导，电场遍布整个电路。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, they're guided by the electric field, which extends everywhere throughout the circuit.</p>
</details>

电场是主要的参与者，遍布整个电路，而电子只是它们的棋子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The fields are the main actors, extending everywhere throughout the circuit, and the electrons are just their pawns.</p>
</details>

### 大电路中的电场传播与因果律

那么，这如何应用于大电路呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how does this apply to the big circuit?</p>
</details>

当电池连接到电路中时，即使开关是断开的，电荷也会重新排列。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When the battery is connected into the circuit, even with the switch open, charges rearrange themselves.</p>
</details>

在电池的负极侧，导线和开关表面有电子过剩。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the negative side of the battery, there is an excess of electrons on the surface of the wires and the switch.</p>
</details>

在正极侧，电子不足。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the positive side, there is a deficiency of electrons.</p>
</details>

因此，正电荷在导线表面积累。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So positive charges built up on the surface of the wires.</p>
</details>

电荷重新排列，直到导体内部各处的电场为零。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The charges rearrange themselves until the electric field is zero everywhere inside the conductor.</p>
</details>

这个电场是由所有表面电荷和电池上的电荷引起的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This electric field is due to all the surface charges and the charges on the battery.</p>
</details>

由于这些电荷，导线外部存在电场，但导线内部为零。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is an electric field outside the wires due to these charges, but it's zero inside the wires.</p>
</details>

我们现在在开关两端拥有电池的全部电势差。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We now have the full potential difference of the battery across the switch.</p>
</details>

除了泄漏电流（我假设可以忽略不计）外，没有电流流动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And no current is full flowing, except for leakage current, which I'll assume is negligible.</p>
</details>

当我们合上开关时，开关两侧的表面电荷在接触时相互中和。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When we close the switch, the surface charges on both sides of the switch neutralize each other on contact.</p>
</details>

那一瞬间，导体内部的电场不再为零，电流开始通过开关流动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And at that instant, the electric field inside the conductor is no longer zero, and current starts flowing through the switch.</p>
</details>

同时，来自修改后的表面电荷的新电场以接近光速的速度向外辐射。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Simultaneously, the new electric field from the modified surface charges radiates outwards at essentially the speed of light.</p>
</details>

当它到达灯泡时，灯泡内部的电场不再为零。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And when it reaches the bulb, the electric field inside it is no longer zero.</p>
</details>

所以电流也开始在这里流动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So current starts to flow here too.</p>
</details>

这就是为什么我说灯泡会在1/c秒内亮起，因为灯泡距离开关一米，并且电场的变化以光速传播。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is why I said the bulb lights up in 1/c seconds, because the bulb was one meter from the switch, and the change in the electric field travels out at the speed of light.</p>
</details>

正如你们中的一些人指出的那样，答案应该是“一米除以C”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As some of you pointed out, the answer should have been one meter divided by C.</p>
</details>

我为随意使用单位而道歉。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I apologize for the casual use of units.</p>
</details>

如果你移动开关，灯泡发光所需的时间会有所不同，这仅取决于开关和灯泡之间的距离。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you were to move the switch, then the bulb would take a different amount of time to emit light, which just depends on the distance between the switch and the bulb.</p>
</details>

为了回应我的原始视频，Ben Watson使用**Ansys**公司开发的**HFSS**（High Frequency Structure Simulator: 一款用于高频电磁场仿真的软件）软件模拟了一个电路模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In response to my original video, Ben Watson simulated a model of the circuit using software from Ansys called HFSS.</p>
</details>

它提供了**麦克斯韦方程组**（Maxwell's Equations: 描述电场、磁场与电荷、电流之间关系的四条基本方程）在三维空间中的完整解。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It provides a complete solution to Maxwell's equations in three dimensions.</p>
</details>

我与Ben和Ansys合作进行了这些模拟。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now have worked with Ben and Ansys to make these simulations.</p>
</details>

当开关闭合时，你可以看到电场向外辐射，当它击中远处的导线时，会产生电流。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When the switch is closed, you can see the electric field radiate out, and as it hits the far wire, it generates current.</p>
</details>

电场向右，所以电子向左流动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The electric field is to the right. So the electrons flow to the left.</p>
</details>

这个模拟显示了磁场的大小，它在穿过间隙时衰减得相当快。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This simulation shows the magnitude of the magnetic field, which falls off pretty rapidly as it crosses the gap.</p>
</details>

但随后在远处的导线周围出现了一个磁场，这个磁场是由该导线中的电流产生的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then a magnetic field appears around the far wire, and this magnetic field is created by the current in that wire.</p>
</details>

对我来说，这表明真正产生通过负载的电流的是电场，而不是变化的磁场。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To me, this suggests that it really is the electric field, and not the changing magnetic field that creates the current through the load.</p>
</details>

一些对原始视频的评论者声称我的三到四纳秒的答案违反了因果律。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some commenters on the original video claimed my answer of three or four nanoseconds violates causality.</p>
</details>

我猜他们认为灯泡只有在电路完整时才会亮起。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess they were thinking that the bulb would only go on if the circuit were complete.</p>
</details>

如果电路在某个地方断开，即使距离半光秒远，灯泡也不会亮。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it wouldn't if the circuit were broken somewhere, which could be up to half a light second away.</p>
</details>

所以看起来我是在说，我们可以在几纳秒内获得关于整个电路状态的信息，即使是半光秒远的地方。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it seemed like I was saying, we could get information about the status of the whole circuit, even half a light second away, in just nanosecond seconds.</p>
</details>

但那不是我所说的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But that is not what I was saying.</p>
</details>

我应该明确指出的是，无论电路是否完整，灯泡都会亮起。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What I should have stated explicitly, is that the bulb goes on regardless of whether the circuit is complete or not.</p>
</details>

电流通过负载流动是由于它所经历的电场。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The current flows through the load due to the electric field it experiences.</p>
</details>

为了说明这一点，Ben在电路下方添加了一根完全与电路断开的导线。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To illustrate this, Ben added a wire below the circuit that is completely disconnected from it.</p>
</details>

你可以看到，它对变化的电场的响应与上方导线的响应几乎相同，至少在信号到达远端并反射回来之前是这样。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see is that its response to the changing electric field is virtually identical to that of the top wire, at least up until the signal reaches the far end and reflects back.</p>
</details>

这就是为什么我的答案没有违反因果律。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is why my answer doesn't break causality.</p>
</details>

至少在最初，连接和断开的导线表现完全相同。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At least initially, connected and disconnected wires behave exactly the same.</p>
</details>

### 坡印亭矢量与能量流

使用这个软件，你还可以模拟**坡印亭矢量**（Poynting Vector: 描述电磁场中能量流动的矢量），它是电场和磁场的叉积。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Using this software, you can also simulate the Poynting vector that is the cross product of electric and magnetic fields.</p>
</details>

在上一个视频中，我展示了坡印亭矢量如何指示能量流动的方向。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the last video, I showed how the Poynting vector indicates the direction of energy flow.</p>
</details>

开关闭合后，坡印亭矢量从电池指向，穿过间隙到达另一根导线，无论是否连接。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And after the switch is closed, the Poynting vector points out of the battery, across the gap to the other wire, whether connected or not.</p>
</details>

因为能量是由场而不是电子携带的，所以它可以直接穿过间隙。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because energy is carried by fields and not electrons, it can go straight across the gap.</p>
</details>

所以你可能会问，我们为什么还需要导线呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you might ask, why do we need wires at all?</p>
</details>

嗯，我们不需要，我的意思是，手机和牙刷在没有导线连接到电子流的情况下也能充电。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, we don't, I mean, phones and toothbrushes charge without wires connecting them to a stream of electrons.</p>
</details>

研究人员已经展示了使用Wi-Fi信号能量进行远程充电。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And researchers have demonstrated remote charging using the energy from WiFi signals.</p>
</details>

导线更高效，因为它们引导电场，从而将能量从源头传送到负载。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wires are more efficient because they channel the fields and hence the energy from source to load.</p>
</details>

这是坡印亭矢量的另一个角度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here's another angle on the Poynting vector.</p>
</details>

你可以看到，一旦上方导线中有电流，它周围的电场就会向两个方向传输能量。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can see once there is current in the top wire, the fields around it carry energy in both directions.</p>
</details>

当然，坡印亭矢量也平行于第一根导线，将能量沿着电路传输，正如大多数人所期望的那样。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, of course, the Poynting vector also points parallel to the first wire, carrying the energy around the circuit as most people would expect.</p>
</details>

但请再次注意，能量是在导线外部而不是导线内部传输的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But again, note how the energy is carried outside the wires, not in the wires.</p>
</details>

### 电路简化模型与传输线

诚然，以这种方式思考电路很复杂。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now admittedly, thinking about circuits this way is complicated.</p>
</details>

由于没有人愿意为了分析一个基本电路而解决三维的麦克斯韦方程组，科学家和工程师们已经找到了捷径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And since nobody wants to solve Maxwell's equations in three dimensions just to analyze a basic circuit, scientists and engineers have worked out shortcuts.</p>
</details>

例如，**欧姆定律**（Ohm's Law: 描述电压、电流和电阻之间关系的物理定律），即电压等于电流乘以电阻，只是所有表面电荷、它们的电场以及无数电子撞击无数金属离子的宏观结果。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example, Ohm's law, voltage equals current times resistance, is just the macroscopic result of all the surface charges, their electric fields and zillions of electrons bumping into zillions of metal ions.</p>
</details>

你可以将所有这些物理学简化为一个单一的电路元件——电阻，以及电流和电压这些基本量。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can simplify all that physics into a single circuit element, a resistor, and the basic quantities of current and voltage.</p>
</details>

这被称为**集总参数模型**（Lumped Element Model: 将电路中的物理效应集中表示为离散元件的模型），它将所有分散的多粒子和场相互作用集中到几个离散的电路元件中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is called the lumped element model, lump all the spread-out multi particle and field interactions into a few discrete circuit elements.</p>
</details>

我们每次绘制电路图时都使用这种技术。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we use this technique every time we draw a circuit diagram.</p>
</details>

所以我们最初的大电路图是有缺陷的，因为导线之间的电场对问题很重要，但没有电路元件来表示这些相互作用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So our original diagram of the big circuit is flawed because fields between the wires are important to the problem, but there are no circuit elements to indicate these interactions.</p>
</details>

为了解决这个问题，我们需要沿着导线添加**电容**（Capacitance: 衡量导体储存电荷能力的物理量）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To fix it, we need to add capacitors all down the wires.</p>
</details>

这些电容捕捉了一根导线上的电荷对另一根导线的影响。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These capture the effect charges on one wire have on the other.</p>
</details>

例如，如果底部导线表面有负电荷，它们会诱导顶部导线表面产生正电荷。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If there are negative charges on the surface of the bottom wire, for example, they'll induce positive charges on the surface of the top wire.</p>
</details>

此外，由于这些导线很长，它们会产生显著的磁场，这会阻碍电流的变化。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Also, since these wires are long, they're gonna create significant magnetic fields around them, which resist changes in current.</p>
</details>

所以我们用**电感**（Inductance: 衡量线圈产生磁场并储存磁能能力的物理量）来模拟这一点，沿着导线一路添加。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we model this with inductors all the way down the wires.</p>
</details>

我们还可以添加电阻，形成电气工程师会认为是**传输线**（Transmission Line: 用于传输电磁能量的导线结构）的**分布参数模型**（Distributed Element Model: 考虑电路参数沿传输线分布的模型）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We could also add resistors, making what electrical engineers would recognize as the distributed element model for a transmission line.</p>
</details>

但我们假设这些导线是超导的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we're assuming that these wires are super conducting.</p>
</details>

所以这就是我们如何模拟超导传输线的方法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is how we could model a super conducting transmission line.</p>
</details>

这张图提供了另一种理解电流几乎立即流过负载的方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This diagram offers another way of understanding why current flows through the load almost immediately.</p>
</details>

当你第一次在电容器两端施加电压时，电流会流动，因为两个极板上会积累相反的电荷。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When you first apply a voltage across a capacitor, current flows as opposite charge builds up on the two plates.</p>
</details>

在短时间限制内，电容器是短路。
<details>
<summary>View/Hide Original English</p>
<p class="english-text">In the short time limit, a capacitor is a short circuit.</p>
</details>

它就像一根普通的导线。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It acts just like an ordinary wire.</p>
</details>

一旦它充满电，就不再有电流流动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once it's charged up, no more current flows.</p>
</details>

但此时，下一个电容器正在充电。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But by this point, the next capacitor is charging up.</p>
</details>

然后是下一个，再下一个。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the next one, and then the next one.</p>
</details>

所以我们有一个以大约光速向外扩展的电流回路。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we have a loop of current that is expanding out at roughly the speed of light.</p>
</details>

这当然只是另一种谈论底部导线对顶部导线电场影响的方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is of course, just another way of talking about the effect the electric field that the bottom wire has on the top wire.</p>
</details>

以这种方式看待电路的一个有用原因是，你可以使用电感和电容的值来计算传输线的**特性阻抗**（Characteristic Impedance: 传输线在无限长或终端匹配时对信号源呈现的阻抗）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One reason it's useful to look at the circuit this way, is because you can use the values of inductance and capacitance to calculate the characteristic impedance of the transmission lines.</p>
</details>

你可以将其视为信号源在沿着导线发送信号时所看到的对交流电的电阻。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can think of this as the resistance to alternating current that a source would see when sending a signal down the wires.</p>
</details>

特性阻抗等于电感除以电容的平方根。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The characteristic impedance is equal to the square root of inductance divided by capacitance.</p>
</details>

对于我们的电路，我测量了导线的电容和电感。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for our circuit, I measured the capacitance and the inductance of the lines,</p>
</details>

“11.85，就叫它微亨利吧。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- 11.85, call it, micro Henry's.</p>
</details>

“所以我们得到了大约550欧姆的特性阻抗。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So we got a characteristic impedance of about 550 Ohms.</p>
</details>

为了最大化传递给负载的功率，我们希望其电阻等于电路中其他阻抗的总和。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To maximize the power delivered to our load, we want its resistance to equal the sum of the other impedances in the circuit.</p>
</details>

所以我们选择了1.1千欧姆的电阻。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's why we picked a 1.1 kilo-Ohm resistor.</p>
</details>

### 实验结果与思想实验的意义

现在，我希望你相信电流会立即流动，只要电场到达远处的导线。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, I hope you're convinced that current will flow as soon as the electric field reaches the far wire.</p>
</details>

问题是，有多少？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The question is, how much?</p>
</details>

即使这些导线相距一米，我们能看到可观的电压吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Are we gonna see an appreciable voltage even with these lines a meter apart?</p>
</details>

这似乎是很多人在上一个视频中怀疑的地方。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's what it seemed like a lot of people were doubting in the last video.</p>
</details>

所以这才是我们真正想在这里发现的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's really what we want to find out here.</p>
</details>

好的，现在我们正在输入一个脉冲。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so now we're putting a pulse in there.</p>
</details>

“是的。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yep.</p>
</details>

“瞧，Derek。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well looky, looky, Derek.</p>
</details>

“那么我们得到了什么？那个黄色的是我们的——”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So what do we got that yellow one is our-</p>
</details>

“得到了施加电压的一小部分过冲。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Got a fraction of the applied voltage overshoot.</p>
</details>

“然后——”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then-</p>
</details>

“所以在我看来，我们得到的初始电压大约是——”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So it looks to me like the initial voltage that we're getting is about-</p>
</details>

“每格五伏。所以看起来大约是五伏，大致四到五伏。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Five volts per division. So it looks like about five volts, roughly four or five volts.</p>
</details>

绿色曲线上升到约18伏是源电压。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The green curve rising up to around 18 volts is the source voltage.</p>
</details>

黄色线是电阻两端的电压。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the yellow line is the voltage across the resistor.</p>
</details>

所以仅仅几纳秒后，这个电压就上升到大约四伏。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So after just a few nanoseconds, this voltage rises to around four volts.</p>
</details>

由于电阻是1千欧姆，这意味着在信号完全环绕电路之前，有四毫安的电流流过电阻。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Since the resistor was a kilo-Ohm, that means four milliamps of current are flowing in the resistor, before the signal goes all the way around the circuit.</p>
</details>

所以我们传输了大约14毫瓦的功率。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we were transferring about 14 milliwatts of power.</p>
</details>

这就是14毫瓦光线实际的样子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is what 14 milliwatts of light actually looks like.</p>
</details>

所以，是的，它不是一个完全点亮的灯泡，但它是可见光，并且比你从泄漏电流中获得的要多得多。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, yeah, it's not a fully on bulb, but it is visible light and way more than you would get from just leakage current.</p>
</details>

现在，你们中的一些人可能会争辩说，当我最初的视频中展示灯泡和汽车电池时，使用小**LED**（Light Emitting Diode: 发光二极管）是不公平的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, some of you may argue, it's unfair to use a little LED when I showed a bulb and car battery in the original video.</p>
</details>

但那些物品仅用于说明目的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But those items were for illustrative purposes only.</p>
</details>

这个实际上是一个思想实验的线索是，两光秒的超导线延伸到太空中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The clue that this is actually a thought experiment is the two light-seconds of super conducting wire that stretch out into space.</p>
</details>

这不是一个关于如何最好地连接卧室灯泡的工程问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is not an engineering question about how best to wire up a light bulb in your bedroom.</p>
</details>

这个问题是故意模糊的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The question was intentionally vague.</p>
</details>

如果你想选择电路元件使灯泡永远不亮，你完全可以这样做，我支持你的结论。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you want to choose circuit components such that the bulb never goes on, you are welcome to do that and I support your conclusion.</p>
</details>

对我来说，解决这个问题最有趣的方式是问：你如何才能让灯亮得最快？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just to me, the most interesting way to approach this problem is to ask, how could you make the light go on fastest?</p>
</details>

我曾担心那些长导线会接收到所有经过的无线电波，我们甚至无法在噪音中看到信号。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I was worried that those long wires would pick up all the radio waves passing through, and we wouldn't even be able to see the signal for that noise.</p>
</details>

但你可以在图表上清楚地看到，信号远远高于噪音水平。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But you can see clearly on the graph that the signal is way above the noise level.</p>
</details>

Alpha Phoenix设置了一公里长的导线，并得到了非常相似的结果。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alpha Phoenix set up a kilometer of wire and got a very similar result.</p>
</details>

“所以灯泡亮了一点，然后经过一个光速延迟后，灯泡完全亮起。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So the light bulb turns on a little bit, and then after one light-speed delay, the light bulb turns on the rest of the way.</p>
</details>

YouTuber ZY模拟了传输线电路，发现即使在现实假设下，他也能立即向负载传输12毫瓦的功率。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- YouTuber, ZY, simulated the transmission line circuit, and found that even with realistic assumptions, he transferred 12 milliwatts to the load straight away.</p>
</details>

“Derek实际上比我们认为的更正确。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Derek is actually more correct than we give him credit for.</p>
</details>

“所以，我相信他在所有方面都是正确的。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I believe that he's correct on all counts.</p>
</details>

“这个问题既不具有欺骗性，也不需要技术细节。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the question is neither deceptive or requires like technicalities.</p>
</details>

所以大家都同意，在开关闭合后的第一秒内，一个稳定、微小但远大于泄漏电流的信号流过负载。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So everyone agrees that a steady, small, but way-bigger-than-leakage-current signal flows through the load in the first second after the switch is closed.</p>
</details>

它足以发光吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is it enough to emit light?</p>
</details>

是的，如果你使用LED。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes, if you use an LED.</p>
</details>

但这个思想实验的目的是揭示一些通常被我们思考和教授电路方式所隐藏的东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the point of the thought experiment was to reveal something that's normally hidden by the way that we think about and teach electric circuits.</p>
</details>

我们使用电压、电流和集总元件，因为它们比使用麦克斯韦方程组更方便。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, we use voltage and current and lumped elements because they're more convenient than working with Maxwell's equations.</p>
</details>

但我们不应该忘记，主要的参与者实际上是电场。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we shouldn't forget that the main actors are actually the fields.</p>
</details>

它们才是携带能量的，你不必相信我的话。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They are what carry the energy, and you don't have to take my word for it.</p>
</details>

这是Rick Hartley，一位经验丰富的印刷电路板设计师。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is Rick Hartley, a veteran printed circuit board designer.</p>
</details>

“我过去常常用电压和电流来思考。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I used to think in terms of voltage and current.</p>
</details>

“我过去认为电路中的能量存在于电压和电流中，但事实并非如此。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I used to think that the energy in the circuit was in the voltage and current, but it's not.</p>
</details>

“电路中的能量存在于电场中。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The energy in the circuit is in the fields.</p>
</details>

“你需要知道的最重要的事情是，当你布线时，你最好定义传输线的另一端。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The most important thing you need to know is that when you route a trace, you better define the other side of that transmission line,</p>
</details>

“因为如果你不这样做，那些电场就会扩散，让你不开心。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because if you don't, those fields are gonna spread and they're gonna leave you an unhappy individual.</p>
</details>

### 社区回应与赞助商信息

我认为我对电路视频最兴奋的事情之一是，我看到了许多人制作的回应视频，特别是那些在电气工程方面比我更有资历的人。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I think one of the things that I'm most excited about the circuit's video was the response videos I saw by so many people, especially people with far better credentials in electrical engineering than me.</p>
</details>

我真的很喜欢看那些视频。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I really enjoyed watching those videos.</p>
</details>

所以我觉得我的电路视频在某些方面有点像是一个错误，我没有深入探讨这个问题的这部分。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I feel like my circuits video was kind of like, a mistake on my part in certain ways that I didn't delve deep enough into this part of the problem.</p>
</details>

我老实说，我没想到这会是视频的重点，但显然所有看过它的人都这么认为，所以这是我的错。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I honestly didn't think that this was the focus of the video, but clearly everyone who watched it did, so that's on me,</p>
</details>

但通过犯这个错误，通过没有深入解释，我似乎邀请了许多其他人来做解释，我认为这些解释都很棒。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but by making that mistake, and by not going deep into my explanation, I invited seemingly a whole bunch of other people to make explanations, which I thought were great.</p>
</details>

有些人像Alpha Phoenix甚至接受了挑战，并设置了他自己的实验版本。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And some people like Alpha Phoenix even took up the challenge and set up his own version of the experiment.</p>
</details>

所以，坦率地说，我对所发生的一切感到非常兴奋，尽管我承认这最初是我的错误。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, frankly, I'm just really excited at what came about, even though I do acknowledge that this was my fault in the first place.</p>
</details>

我本应该做得更好的解释，但通过没有这样做，你知道，有很多很棒的解释在那里。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like I should have done a better explanation, but by not doing so, you know, there are a lot of great explanations out there.</p>
</details>

这就是我喜欢的地方。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's what I love.</p>
</details>

所以我将向你推荐一大批电气工程YouTuber，以防你想去看看，因为他们有很多很棒的频道。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm gonna recommend a whole bunch of electrical engineering YouTubers to you in case you wanna check those out because they're a lot of great channels,</p>
</details>

你真的应该看看他们是如何思考电子学以及他们如何解释这个电路的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and you should really see how they think about electronics, and how they explain this circuit.</p>
</details>

嘿，这个视频由**Brilliant**赞助，这个网站和应用程序让你深入思考数学、科学和计算机科学中的概念。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hey, this video was sponsored by Brilliant, the website and app that gets you thinking deeply about concepts in math, science, and computer science.</p>
</details>

Brilliant今年赞助了我们很多视频，因为他们知道能看完Veritasium视频的人正是喜欢用Brilliant学习的那种人。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Brilliant is sponsoring a lot of our videos this year, because they know someone who makes it to the end of a Veritasium video is exactly the sort of person who would love to learn with Brilliant.</p>
</details>

他们有一个很棒的关于电和磁的课程，它通过问题、模拟、视频和实验，有条不紊地引导你入门电磁学。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And they have a great course on electricity and magnetism, which methodically steps you through an introduction to E&M with questions, simulations, videos, and experiments.</p>
</details>

我真的认为这是最好的学习方式，因为步骤的顺序设计得非常好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I really think this is the best way to learn because the sequence of steps is so well thought out.</p>
</details>

难度逐渐增加。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The difficulty builds gradually.</p>
</details>

通过向你提问，你被迫在每一步检查你的理解。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And by asking you questions, you are forced to check your understanding at each step.</p>
</details>

如果你需要帮助，总会有有用的提示或解释。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you need help, there's always a useful hint or explanation.</p>
</details>

你知道Brilliant的独特之处在于它的互动性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know what sets Brilliant apart is their interactivity.</p>
</details>

你可以用这种非常积极的方式学习微积分、机器学习或计算机科学基础。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can learn calculus or machine learning or computer science fundamentals all in this very active way.</p>
</details>

所以我鼓励你访问brilliant.org/veritasium，看看他们的课程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I encourage you to go over to brilliant.org/veritasium and just take a look at their courses.</p>
</details>

我会在描述中留下那个链接。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I will put that link down in the description.</p>
</details>

如果你现在点击，Brilliant为前200名注册者提供年度高级订阅20%的折扣。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you click through right now, Brilliant are offering 20% off an annual premium subscription to the first 200 people to sign up.</p>
</details>

所以我要感谢Brilliant支持Veritasium。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I want to thank Brilliant for supporting Veritasium.</p>
</details>

我也要感谢你的观看。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I wanna thank you for watching.</p>
</details>