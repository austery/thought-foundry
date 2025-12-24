---
area: tech-insights
category: science
companies_orgs:
- Lutron Electronics
date: '2021-11-19'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- James Clerk Maxwell
products_models:
- Caséta by Lutron
- Alexa
- Google Assistant
project:
- systems-thinking
- historical-insights
series: ''
source: https://www.youtube.com/watch?v=bHIhgxav9LY
speaker: veritasium
status: evergreen
summary: 本视频揭示了关于电力传输的普遍误解。它解释了电能并非通过导线中的电子流动，而是通过导线周围空间中的电磁场以接近光速传输。视频深入探讨了麦克斯韦方程和坡印亭矢量，并通过历史案例（如跨大西洋电报电缆）来证明这一科学事实。最终，它解答了一个关于超长电路中灯泡点亮速度的经典问题。
tags:
- electromagnetic-field
- energy
- poynting-vector
- science
- society
title: 关于电的巨大误解：能量如何真正传输？
---

### 引言：关于灯泡点亮速度的谜题

本视频由Lutron旗下的**Caséta**赞助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This video was sponsored by Caséta by Lutron.</p>
</details>

想象你有一个巨大的电路，它由一个电池、一个开关、一个灯泡和两根导线组成，每根导线长达30万公里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Imagine you have a giant circuit consisting of a battery, a switch, a light bulb, and two wires which are each 300,000 kilometers long.</p>
</details>

这个距离是光在一秒钟内传播的距离。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That is the distance light travels in one second.</p>
</details>

所以，这些导线将延伸到月球的一半距离，然后返回连接到距离一米远的灯泡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, they would reach out half way to the moon and then come back to be connected to the light bulb, which is one meter away.</p>
</details>

现在问题是，当我闭合这个开关后，灯泡需要多长时间才能亮起？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, the question is, after I close this switch, how long would it take for the bulb to light up.</p>
</details>

是半秒、一秒、两秒、1/c秒，还是以上都不是？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is it half a second, one second, two seconds, 1/c seconds, or none of the above.</p>
</details>

你需要对这个电路做一些简化假设，比如导线必须没有电阻，否则它将无法工作，并且当电流通过灯泡时，它必须立即亮起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You have to make some simplifying assumptions about this circuit, like the wires have to have no resistance, otherwise this wouldn't work and the light bulb has to turn on immediately when current passes through it.</p>
</details>

但我希望你确定一个答案并将其写在评论中，这样当我稍后公布答案时，你就不能说“哦，是的，我早就知道是这个答案了”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I want you to commit to an answer and put it down in the comments so you can't say, oh yeah I knew that was the answer, when I tell you the answer later on.</p>
</details>

这个问题实际上与电能如何从发电厂传输到你家有关。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This question actually relates to how electrical energy get from a power plant to your home.</p>
</details>

### 电力传输的常见误解

与电池不同，电网中的电力以**交流电**（Alternating Current: 方向和大小周期性变化的电流）的形式存在，这意味着输电线中的电子只是来回摆动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Unlike a battery, the electricity in the grid comes in the form of alternating current, or AC, which means electrons in the power lines are just wiggling back and forth.</p>
</details>

它们实际上从未移动到任何地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They never actually go anywhere.</p>
</details>

那么，如果电荷没有从发电厂到达你家，电能又是如何真正到达你的呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if the charges don't come from the power plant to your home, how does the electrical energy actually reach you?</p>
</details>

当我以前教授这个主题时，我会说输电线就像这种柔性塑料管，而里面的电子就像这条链子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When I used to teach this subject, I would say that power lines are like this flexible plastic tubing and the electrons inside are like this chain.</p>
</details>

所以，发电站所做的是每秒推动和拉动电子60次。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, what a power station does, is it pushes and pulls the electrons back and forth 60 times a second.</p>
</details>

现在，在你家里，你可以插入一个设备，比如烤面包机，这本质上意味着允许电子流过它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, at your house, you can plug in a device, like a toaster, which essentially means allowing the electrons to run through it.</p>
</details>

所以当发电站推动和拉动电子时，它们会在烤面包机元件中遇到电阻，并将能量以热量的形式散发出去，这样你就可以烤面包了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when the power station pushes and pulls the electrons, well, they encounter resistance in the toaster element, and they dissipate their energy as heat, and so you can toast your bread.</p>
</details>

这是一个很棒的故事，我认为它很容易形象化，而且我的学生们也理解了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, this is a great story, I think it's easy to visualize, and I think my students understood it.</p>
</details>

唯一的问题是，它是错的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The only problem is, it's wrong.</p>
</details>

首先，没有一根连续的导线从发电站一直通到你家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For one thing, there is no continuous conducting wire that runs all the way from a power station to your house.</p>
</details>

不，线路中存在物理间隙，存在断裂，比如在**变压器**（Transformer: 利用电磁感应原理改变交流电压的设备）中，一侧缠绕着一圈线圈，另一侧缠绕着另一圈线圈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, there are physical gaps, there are breaks in the line, like in transformers where one coil of wire is wrapped on one side, a different coil of wire is wrapped on the other side.</p>
</details>

所以，电子不可能从一侧流到另一侧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, electrons cannot possibly flow from one the other.</p>
</details>

此外，如果能量是由电子从发电站输送到你的设备，那么当这些相同的电子流回发电站时，为什么它们没有将能量从你家带回发电站呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Plus, if it's the electrons that are carrying the energy from the power station to your device, then when those same electrons flow back to the power station, why are they not also carrying energy back from your house to the power station?</p>
</details>

如果电流是双向流动的，那么为什么能量只向一个方向流动呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If the flow of current is two ways, then why does energy only flow in one direction?</p>
</details>

这些就是你被教导的关于电的谎言：电子本身具有势能，它们通过一个连续的导电回路被推动或拉动，并且它们在设备中耗散能量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These are the lies you were taught about electricity, that electrons themselves have potential energy, that they are pushed or pulled through a continuous conducting loop and that they dissipate their energy in the device.</p>
</details>

我在本视频中的主张是，所有这些都是错误的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My claim in this video is that all of that is false.</p>
</details>

那么，它实际上是如何工作的呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, how does it actually work?</p>
</details>

### 电磁场：能量传输的真正载体

在19世纪60年代和70年代，当苏格兰物理学家**詹姆斯·克拉克·麦克斯韦**（James Clerk Maxwell: 经典电动力学的创始人）意识到光是由振荡的电场和磁场组成时，我们对宇宙的理解取得了巨大的突破。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the 1860's and 70's, there was a huge breakthrough in our understanding of the universe when Scottish physicist, James Clerk Maxwell, realized that light is made up of oscillating electric and magnetic fields.</p>
</details>

这些场彼此垂直振荡，并且同相，这意味着当一个场达到最大值时，另一个波也达到最大值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The fields are oscillating perpendicular to each other and they are in phase, meaning when one is at its maximum, so is the other wave.</p>
</details>

现在，他推导出了控制电场和磁场行为的方程，因此也控制了这些波的行为，这些方程现在被称为**麦克斯韦方程组**（Maxwell's equations: 描述电场、磁场与电荷、电流之间关系的四条基本方程）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, he works out the equations that govern the behavior of electric and magnetic fields and hence, these waves, those are now called Maxwell's equations.</p>
</details>

但在1883年，麦克斯韦的一位前学生**约翰·亨利·坡印亭**（John Henry Poynting: 英国物理学家，以坡印亭矢量闻名）正在思考能量守恒问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But in 1883, one of Maxwell's former students, John Henry Poynting, is thinking about conversation of energy.</p>
</details>

如果能量在空间中的每一个微小部分都局部守恒，那么你就应该能够追踪能量从一个地方流向另一个地方的路径。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If energy is conserved locally in every tiny bit of space, well, then you should be able to trace the path that energy flows from one place to another.</p>
</details>

所以，想想从太阳传到我们这里的能量，在光传播的那八分钟里，能量就储存在光的电场和磁场中并被传输。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, think about the energy that comes to us from the sun, during those eight minutes when the light is traveling, the energy is stored and being transmitted in the electric and magnetic fields of the light.</p>
</details>

现在，坡印亭推导出了一个方程来描述**能量通量**（Energy Flux: 单位时间内通过单位面积的能量），也就是每秒有多少电磁能量通过一个区域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, Poynting works out an equation to describe energy flux, that is, how much electromagnetic energy is passing through an area per second.</p>
</details>

这被称为**坡印亭矢量**（Poynting vector: 描述电磁场能量流动的方向和大小的矢量），并用符号**S**表示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is known as the Poynting vector and it's given the symbol S.</p>
</details>

这个公式其实很简单，它只是一个常数1/μ₀（**自由空间磁导率**：描述真空磁场强度的物理常数）乘以**E X B**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the formula is really pretty simple, it's just a constant one over mu naught, which is the permeability of free space times E X B.</p>
</details>

**E X B**是电场和磁场的**叉积**（Cross Product: 一种矢量乘法，结果是垂直于两个原始矢量的新矢量）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, E X B, is the cross product of the electric and magnetic fields.</p>
</details>

叉积只是一种特殊的矢量相乘方式，你将它们的垂直大小相乘，要找到方向，你将手指指向第一个矢量（在本例中是电场）的方向，然后向第二个矢量（磁场）的方向弯曲，然后你的拇指就指向了结果矢量（能量通量）的方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, the cross product is just a particular way of multiplying two vectors together, where you multiply their perpendicular magnitudes and to find the direction, you put your fingers in the direction of the first vector, which in this case is the electric field, and curl them in the direction of the second vector, the magnetic fields, then your thumb points in the direction of the resulting vector, the energy flux.</p>
</details>

所以，这向我们展示了光的一个特点，即能量垂直于电场和磁场流动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, what this shows us about light is that the energy is flowing perpendicular to both the electronic an the magnetic fields.</p>
</details>

并且它与光的传播方向相同，所以这很有道理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's in the same direction as the light is traveling, so this makes a lot of sense.</p>
</details>

光将能量从其源头传输到目的地。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Light carries energy from its source out to its destination.</p>
</details>

但关键是，坡印亭方程不仅适用于光，它适用于任何电场和磁场同时存在的情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the kicker is this, Poynting's equation doesn't just work for light, it works anytime there are electric and magnetic fields coinciding.</p>
</details>

任何时候你同时拥有电场和磁场，就会有能量流动，你可以使用坡印亭矢量进行计算。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Anytime you have electric and magnetic fields together, there is a flow of energy and you can calculate using Poynting's vector.</p>
</details>

### 简单电路中的能量流动

为了说明这一点，让我们考虑一个由电池和灯泡组成的简单电路。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To illustrate this, let's consider a simple circuit with a battery and a light bulb.</p>
</details>

电池本身有电场，但由于没有电荷移动，所以没有磁场，因此电池不会损失能量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The battery by itself has an electric field but since no charges are moving, there is no magnetic field so the battery doesn't lose energy.</p>
</details>

当电池连接到电路中时，它的电场以光速通过电路延伸。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When the battery is connected into the circuit, its electric field extends through the circuit at the speed of light.</p>
</details>

这个电场推动电子运动，使它们积聚在导体的一些表面上，使其带负电，并在其他地方耗尽，使其表面带正电。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This electric field pushes electrons around so they accumulate on some of the surfaces of the conductors making them negatively charged, and are depleted elsewhere leaving their surfaces positively charged.</p>
</details>

这些表面电荷在导线内部产生一个小的电场，导致电子优先向一个方向漂移。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These surface charges create a small electric field inside the wires, causing electrons to drift preferentially in one direction.</p>
</details>

请注意，这种漂移速度非常慢，大约每秒十分之一毫米。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Note that this drift velocity is extremely slow around a tenth of a millimeter per second.</p>
</details>

但这确实是电流，尽管**常规电流**（Conventional Current: 历史上约定为正电荷的流动方向，与电子实际运动方向相反）被定义为与电子运动方向相反，但这正是电流产生的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this is current, well, conventional current is defined to flow opposite the motion of electrons, but this is what's making it happen.</p>
</details>

导体表面上的电荷也在导线外部产生电场，而导线内部的电流则在导线外部产生磁场。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The charge on the surfaces of the conductors also creates an eclectic field outside the wires and the current inside the wires creates a magnetic field outside the wires.</p>
</details>

所以，现在电路周围的空间中存在电场和磁场的组合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, now there is a combination of electric and magnetic fields in this space around the circuit.</p>
</details>

因此，根据坡印亭的理论，能量应该正在流动，我们可以使用右手定则来确定这种能量流动的方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, according to Poynting's theory, energy should be flowing and we can work out the direction of this energy flow using the right hand rule.</p>
</details>

例如，在电池周围，电场向下，磁场指向屏幕内部。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Around the battery for example, the electric field is down and the magnetic field is into the screen.</p>
</details>

所以，你会发现能量通量向右，远离电池。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you find the energy flux is to the right away from the battery.</p>
</details>

事实上，在电池周围，你会发现能量是径向向外流动的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, all around the battery, you'll find the energy is radially outwards.</p>
</details>

能量通过电池的侧面进入场中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Energy is going out through the sides of the battery into the fields.</p>
</details>

沿着导线，同样，你可以使用右手定则发现能量向右流动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Along the wires, again, you can use the right hand rule to find the energy is flowing to the right.</p>
</details>

这对于上导线和下导线周围的场都是成立的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is true for the fields along the top wire and the bottom wire.</p>
</details>

但在灯丝处，坡印亭矢量指向灯泡内部。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But at the filament, the Poynting vector is directed in toward the light bulb.</p>
</details>

所以，灯泡是从场中获取能量的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the light bulb is getting energy from the field.</p>
</details>

如果你进行叉积运算，你会发现能量是从灯泡周围的各个方向进入的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you do the cross product, you find the energy is coming in from all around the bulb.</p>
</details>

能量从电池到灯泡走了许多路径，但在所有情况下，能量都是通过电场和磁场传输的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It takes many paths from the battery to the bulb, but in all cases, the energy is transmitted by the electric and magnetic fields.</p>
</details>

人们似乎认为你在泵送电子，或者你在购买电子之类的东西，这真是大错特错。（笑）

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- People seem to think that you're pumping electrons and that you're buying electrons or something, which is just so wrong. (laughs)</p>
</details>

对于大多数人来说，直到今天，认为能量通过导体周围的空间流动仍然是相当反直觉的，但能量确实如此，它通过场传播，而且速度非常快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For most people, and I think to this day, it's quite counterintuitive to think that the energy is flowing through the space around the conductor, but the energy is, which is traveling through the field, yeah, is going quite fast.</p>
</details>

所以，这里有几点需要注意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So, there are a few things to notice here.</p>
</details>

尽管电子从电池流出又流回，是双向的，但通过使用坡印亭矢量，你会发现能量通量只朝一个方向流动，即从电池到灯泡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even though the electrons go two ways away from the battery and towards it, by using the Poynting vector, you find that the energy flux only goes one way from the battery to the bulb.</p>
</details>

这也表明是场而不是电子携带能量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This also shows it's the fields and not the electrons that carry the energy.</p>
</details>

你说的这种小东西里电子能走多远？它们几乎不动，可能根本不动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- How far do the electrons go in this little thing you're talking about, they barely move, they probably don't move at all.</p>
</details>

### 交流电与直流电：能量流动的普遍性

现在，如果用**交流电源**（Alternating Current Source: 提供交流电的电源）代替电池会怎样？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, what happens if in place of a battery, we use an alternating current source?</p>
</details>

那么，电流方向每半个周期就会反转。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well then, the direction of current reverses every half cycle.</p>
</details>

但这同时意味着电场和磁场会同时翻转，所以任何时刻，坡印亭矢量仍然指向相同的方向，即从电源到灯泡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this means that both the electric and magnetic fields flip at the same time, so at any instant, the Poynting vector still points in the same direction, from the source to the bulb.</p>
</details>

所以我们用于**直流电**（Direct Current: 方向不随时间变化的电流）的精确分析仍然适用于交流电。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the exact same analysis we used for DC still works for AC.</p>
</details>

这解释了能量如何能够通过输电线从发电厂流向家庭。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this explains how energy is able to flow from power plants to home in power lines.</p>
</details>

在导线内部，电子只是来回振荡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Inside the wires, electrons just oscillate back and forth.</p>
</details>

它们的运动在这里被大大夸大了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Their motion is greatly exaggerated here.</p>
</details>

但它们不携带能量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But they do not carry the energy.</p>
</details>

在导线外部，振荡的电场和磁场从发电站传播到你家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Outside the wires, oscillating eclectic and magnetic fields travel from the power station to your home.</p>
</details>

你可以使用坡印亭矢量来检查能量通量是否朝一个方向流动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can use the Poynting vector to check that the energy flux is going in one direction.</p>
</details>

你可能认为这只是一个学术讨论，你可以将能量视为通过场或通过导线中的电流传输。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You might think this is just an academic discussion that you could see the energy as transmitted either by fields or by the current in the wire.</p>
</details>

但情况并非如此，当人们开始铺设海底电报电缆时，他们以艰难的方式学到了这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But that is not the case, and people learned this the hard way when they started laying undersea telegraph cables.</p>
</details>

第一条跨大西洋电缆于1858年铺设。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first Trans Atlantic cable was laid in 1858.</p>
</details>

它只工作了大约一个月，而且从未正常工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- It only worked for about a month, it never worked properly.</p>
</details>

当他们试图发送信号时，出现了各种失真。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- There are all kinds of distortions when they try to send signals.</p>
</details>

巨大的失真。他们每分钟只能发送几个单词。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Enormous amounts of distortion. They could work it at a few words per minute.</p>
</details>

他们发现，通过海底如此长的距离发送信号，脉冲会失真并拉长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- What they found was sending signals over such a long distance under the sea, the pulses became distorted and lengthened.</p>
</details>

很难区分点和划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was hard to differentiate dots from dashes.</p>
</details>

为了解释失败，科学家们展开了辩论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To account for the failure, there was a debate among scientists.</p>
</details>

未来的**开尔文勋爵威廉·汤姆森**（William Thomson, the future Lord Kelvin: 英国物理学家，热力学温标的创始人之一）认为电信号通过海底电缆的移动就像水流过橡胶管一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">William Thomson, the future Lord Kelvin, thought electrical signals moved through submarine cables like water flowing through a rubber tube.</p>
</details>

但像**奥利弗·亥维赛**（Heaviside: 英国数学家和物理学家，电磁理论的先驱）和**乔治·菲茨杰拉德**（Fitzgerald: 爱尔兰物理学家，对电磁理论有重要贡献）这样的人则认为，是导线周围的场携带了能量和信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But others like Heaviside and Fitzgerald, argued it was the fields around the wires that carried the energy and information.</p>
</details>

最终，这种观点被证明是正确的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And ultimately, this view proved correct.</p>
</details>

为了绝缘和保护海底电缆，中央的铜导体被涂上一层绝缘体，然后封装在铁护套中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To insulate and protect the submarine cable, the central copper conductor had been coated in an insulator and then encased in an iron sheath.</p>
</details>

铁护套原本只用于增强电缆强度，但作为一种良好的导体，它干扰了电磁场的传播，因为它增加了线路的**电容**（Capacitance: 衡量导体储存电荷能力的物理量）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The iron was only meant to strengthen the cable, but as a good conductor, it interfered with a propagation of electromagnetic fields because it increased the capacitance of the line.</p>
</details>

这就是为什么今天大多数输电线都高高悬挂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is why today, most power lines are suspended high up.</p>
</details>

即使潮湿的地面也充当导体，所以你需要一个大的空气绝缘间隙来将导线与地面分开。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even the damp earth acts as a conductor, so you want a large insulating gap of air to separate the wires from the ground.</p>
</details>

### 回答最初的灯泡问题

那么，我们那个巨型电路灯泡问题的答案是什么呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, what is the answer to our giant circuit light bulb question?</p>
</details>

嗯，在我闭合开关后，灯泡会几乎瞬时亮起，大约在1/c秒内。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, after I close the switch, the light bulb will turn on almost instantaneously, in roughly 1/C seconds.</p>
</details>

所以，正确答案是D。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the correct answer is D.</p>
</details>

我认为很多人想象电场需要从电池沿着长达一光秒的导线传播，所以灯泡应该需要一秒钟才能亮起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think a lot of people imagine that the electric field needs to travel from the battery, all the way down the wire which is a light second long, so it should take a second for the bulb to light up.</p>
</details>

但我们在这个视频中学到的是，真正重要的不是导线中发生了什么，而是导线周围发生了什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what we've learned in this video is it's not really what's happening in the wires that matters, it's what happens around the wires.</p>
</details>

电场和磁场可以通过空间传播到距离仅一米远的灯泡，这只需要几纳秒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the electric and magnetic fields can propagate out through space to this light bulb, which is only one meter away in a few nanoseconds.</p>
</details>

所以，这就是灯泡亮起的限制因素。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, that is the limiting factor for the light bulb turning on.</p>
</details>

现在，灯泡不会立即接收到电池的全部电压，它会是其中的一部分，这取决于这些线路的**阻抗**（Impedance: 电路中对交流电流的阻碍作用）和灯泡的阻抗。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, the bulb won't receive the entire voltage of the battery immediately, it'll be some fraction, which depends on the impedance of these lines and the impedance of the bulb.</p>
</details>

我向几位专家请教了这个问题，得到了不同的答案，但我们都同意这些主要观点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, I asked several experts about this question, and got kind of different answers, but we all agreed on these main points.</p>
</details>

所以，我将他们的分析放在描述中，以防你想了解更多关于这种特定设置的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm gonna put their analysis in the description in case you want to learn more about this particular setup.</p>
</details>

如果我因此被质疑，人们不认为这是真的，我们绝对可以投入资源，在沙漠中架设一些线路，建造我们自己的输电线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I get called out on it and people don't think it's real, we can definitely invest the resources and string up some lines, and make our own power lines in the desert.</p>
</details>

我想你会被质疑的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I think you're gonna get called out on it.</p>
</details>

我同意，我想你会被质疑的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I agree, I think you're gonna get called out.</p>
</details>

（笑）我想这是对的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">(laughing) I think that's right.</p>
</details>

我认为这有点疯狂，这是我们每天都在使用的东西，但几乎没有人思考过或知道正确的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I think it's just kinda wild that this is one of those things that we use everyday, that almost nobody thinks about or knows the right answer to.</p>
</details>

这些围绕输电线传播的电磁波才是真正为你输送电力的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These traveling electromagnetic waves around power lines are really what's delivering your power.</p>
</details>

### 总结与赞助商信息

嘿，既然你现在明白了电能是如何真正流动的，每次你打开电灯开关时，你都可以思考一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hey, now that you understand how electrical energy actually flows, you can think about that every time you flick on a light switch.</p>
</details>

如果你想将你的开关提升到新的水平，本视频的赞助商Lutron旗下的**Caséta**提供高级智能照明控制，包括开关、遥控器和插入式智能调光器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you want to take your switches to the next level, the sponsor of this video, Caseta by Lutron, provides premium smart lighting control, including switches, remotes, and plug-in smart dimmers.</p>
</details>

由于一个开关可以控制许多普通灯泡，你只需更换开关，就能有效地使所有这些灯泡变得智能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And since one switch can control many regular bulbs, you can effectively make all those bulbs smart just by replacing the switch.</p>
</details>

然后，你可以使用手机打开或关闭灯光，或者使用其他设备，如**Alexa**（Amazon的智能语音助手）或**Google Assistant**（Google的智能语音助手）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then, you can turn your lights on and off using your phone, or you can use another device like Alexa or Google Assistant.</p>
</details>

**Caséta**与比任何其他智能照明控制系统更多的领先智能家居品牌兼容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Caseta works with more leading smart home brands than any other smart lighting control system.</p>
</details>

我喜欢的功能之一是设置定时器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the things I like is setting timers.</p>
</details>

例如，我办公室的灯每天晚上都会自动打开。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The lights in my office for example, turn on by themselves every evening.</p>
</details>

这个功能让你安心，家里的每个人都会回到一个灯火通明的家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this feature gives you peace of mind that everyone in your household will always come home to a well-lit house.</p>
</details>

一旦你已经上床睡觉，你可以检查你忘记关掉哪些灯，并从手机上操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And once you're already in bed, you can check which lights you forgot to turn off and do that from your phone.</p>
</details>

安装很简单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Installation is easy.</p>
</details>

首先确保关闭开关的电源，然后断开现有电线，并连接**Caséta**的智能开关。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Make sure you turn off power to the switch first and then disconnect the existing wires and connect Caseda's smart switch.</p>
</details>

如果你需要任何帮助，只需点击或致电即可。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you need any help, they're just a click or a call away.</p>
</details>

在Lutron的网站lutron.com/veritasium上了解更多关于**Caséta**的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Learn more about Caseda at Lutron's website, lutron.com/veritasium.</p>
</details>

我将把这个链接放在描述中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I will put that link down in the description.</p>
</details>

所以，我要感谢**Lutron Electronics**赞助本视频，也要感谢你的观看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I want to thank Lutron Electronics for sponsoring this video, and I want to thank you for watching.</p>
</details>