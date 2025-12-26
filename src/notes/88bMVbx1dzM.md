---
area: "tech-engineering"
category: technology
companies_orgs:
- Incogni
date: '2025-02-05'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Louis de Broglie
project: []
series: ''
source: https://www.youtube.com/watch?v=88bMVbx1dzM
speaker: veritasium
status: evergreen
summary: 本文深入探讨了电子显微镜从早期发展到最终实现原子级分辨率的百年历程。从德布罗意波粒二象性理论，到鲁斯卡建造首台电子显微镜，再到谢尔策发现的球差限制，以及最终由厄本、海德和罗斯团队通过非对称透镜成功校正球差，文章详细阐述了科学家们如何克服重重技术挑战，将原子从理论变为可直接观测的实体，彻底改变了材料科学和工程领域。
tags:
- atomic-resolution
- electron-microscopy
- science
- scientific
- spherical-aberration
title: 揭秘原子：电子显微镜如何突破百年瓶颈，实现原子级观测
---
### 引言：原子可见性与挑战

这是一小片金属，直径仅三毫米。如果持续放大，你会看到：放大1000倍，10万倍，乃至5000万倍。这些模糊的斑点实际上就是**原子**（Atom: 构成物质的基本单元）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is a tiny piece of metal just three millimeters across. And here's what happens if you just keep zooming in: 1,000 times, 100,000 times, 50 million times. Each of these blobs is an actual atom.</p>
</details>

几天前我在**悉尼大学**（University of Sydney: 澳大利亚著名高等学府）看到了这一幕，这让我非常震惊，因为直到大约30年前，人们还认为直接观测到原子是不可能的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I saw this the other day at the University of Sydney, and it kind of blew my mind because up until just 30 years ago, directly seeing atoms like this was thought to be impossible.</p>
</details>

我敢说，你即将看到的这些房间，或许是校园里，甚至是整个悉尼防护最严密的房间，可能也是最昂贵的。这太不可思议了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The rooms that you're going to see here are perhaps the most shielded rooms on campus, or even in the whole of Sydney, I would say. And perhaps also the most expensive. That's wild.</p>
</details>

那么，为什么原子如此难以观测呢？实际上，你无法用可见光直接看到原子。这是因为可见光的**波长**（Wavelength: 波动在一个周期内传播的距离）介于380到750**纳米**（Nanometer: 长度单位，1纳米等于10亿分之一米）之间，而原子却比它小3000多倍，直径仅为0.1纳米。如果光的波长远大于你试图观察的物体，光线就会发生**衍射**（Diffraction: 波在传播过程中绕过障碍物或穿过狭缝时发生弯曲的现象）或绕射，导致你无法看到物体。因此，如果你想看到原子，就需要使用波长远小于原子的东西。最好的选择甚至不是光，而是**电子**（Electron: 带有负电荷的基本粒子）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So why is it so hard to see atoms? Well, you can't actually see atoms with visible light. That's because while light has wavelengths between 380 and 750 nanometers, an atom is still over 3000 times smaller, just 0.1 nanometers. And if the wavelength of light is much bigger than the thing you're trying to see, the light will just diffract or bend around it so you won't be able to see it. So if you want to see atoms, you need something with a much, much smaller wavelength. The best candidate isn't even light. It's electrons.</p>
</details>

### 电子波长与德布罗意假说

1924年，一位名叫**路易·德布罗意**（Louis de Broglie: 法国物理学家，提出物质波理论）的法国物理学家提出，万物都具有某种波的特性。不仅仅是光，物质也一样。原子、分子，甚至你自身都拥有一个波长。这个波长的计算公式是**普朗克常数**（Planck's constant: 量子力学中的一个基本常数，表示能量子与频率的关系）除以物体的**动量**（Momentum: 物理量，等于物体的质量乘以速度），即质量乘以速度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1924, a French physicist named Louis de Broglie worked out that everything was sort of wavelike. Not just light, but matter too. Atoms, molecules, even you yourself have a wavelength. And the formula for this wavelength is Planck's constant, divided by the object's momentum, that is, mass times velocity.</p>
</details>

**科学家**: 那么，你实际看到的是显微镜的镜筒，我们在这里将300千伏的电子加速向下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here what you actually see, that's the column of the microscope where we accelerate the 300 kV electrons down.</p>
</details>

**Veritasium**: 这些电子有300千伏？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">300 kilovolts, these electrons?</p>
</details>

**科学家**: 是的，它们是**相对论粒子**（Relativistic particles: 速度接近光速，其质量和能量需用相对论公式计算的粒子）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So they are relativistic particles.</p>
</details>

**Veritasium**: 它们移动有多快？是光速的99%吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How fast are they moving? 99% of the speed of light?</p>
</details>

**科学家**: 大约80%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Around 80.</p>
</details>

**Veritasium**: 光速的80%？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">80% the speed of light?</p>
</details>

**科学家**: 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Veritasium**: 那么它们的波长会是多少？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what would be their wavelength?</p>
</details>

**科学家**: 波长是普朗克常数除以动量，对吗？如果我们计算一下，大约在2到3**皮米**（Picometer: 长度单位，1皮米等于1万亿分之一米）之间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The wavelength is the Planck constant over the momentum, right? So if we calculate that, we come to around between 2 to 3 picometers.</p>
</details>

**Veritasium**: 哇！这比可见光小了10万多倍。所以理论上，你可以获得10万倍的更高分辨率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whoa! That's over 100,000 times smaller than visible light. So theoretically, you get 100,000 times more resolution.</p>
</details>

### 电子显微镜的诞生

德布罗意发现后不久，德国的一群科学家开始研究一种利用这些高速电子的显微镜。唯一的问题是，你无法用玻璃透镜来弯曲电子。那么，你如何聚焦它们呢？德国物理学家**汉斯·布施**（Hans Busch: 德国物理学家，提出了电磁透镜的概念）提出，**电磁透镜**（Electromagnetic lens: 利用电磁场聚焦带电粒子束的装置）或许能解决这个问题。他于1926年发表了他的研究成果，但从未真正建造过一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Shortly after de Broglie's discovery, a group of scientists in Germany started working on a microscope that would use these high-speed electrons. The only problem is you can't bend electrons using glass lenses. So how do you focus them? Hans Busch, a German physicist, suggested that an electromagnetic lens might do the trick. He published his results in 1926, but never actually built one.</p>
</details>

幸运的是，他的一篇论文落入了一位充满热情的年轻博士生**恩斯特·鲁斯卡**（Ernst Ruska: 德国物理学家，因发明电子显微镜而获得诺贝尔物理学奖）手中。鲁斯卡通过缠绕导线并用铁将其包围，同时小心地在中间留出间隙，建造了他的第一个原型机。随后，当他让电流通过线圈时，它在金属中并穿过这个间隙产生了一个甜甜圈状的磁场。这就是他的透镜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Fortunately, a copy of his paper fell into the hands of an eager young PhD student, Ernst Ruska. Ruska built his first prototype by coiling up some wire and surrounding it with iron — taking care to leave a gap in the middle. Then, when he passed a current through the coil, it induced a donut-shaped magnetic field through the metal and across this gap. This was his lens.</p>
</details>

为了测试它，鲁斯卡首先从钨丝中“煮沸”出电子，这种钨丝与你在白炽灯泡中找到的灯丝相同。他通过一个带正电的**阳极**（Anode: 电子器件中吸引电子的电极）将这些自由电子加速，使其向下进入他的电磁透镜。当电子接近透镜时，磁场会对它施加一个力。因此，如果电子在Y方向上运动，而磁场在X方向上，那么这种力，被称为**洛伦兹力**（Lorentz force: 磁场对运动电荷所施加的力），会将其推向Z方向。但当电子以这种方式移动时，它会遇到沿着甜甜圈形状的其他磁力线，这些磁力线不断地将其运动方向指向一个圆圈。但这种圆周运动意味着洛伦兹力也开始将电子向内推，使其螺旋式地进入透镜中心。现在，如果你追踪整个电子束的路径，你会发现它们都被引导到中心，从而聚焦了电子束。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To test it, Ruska first boiled electrons off a tungsten filament, the same kind of filament you'd find in an incandescent light bulb. He accelerated these free electrons through a positively charged anode down to his electromagnetic lens. As an electron approaches the lens, the magnetic field exerts a force on it. So if an electron is traveling in the y direction and the magnetic fields are in the x direction, this force, called the Lorentz force, pushes it in the z direction. But as the electron moves this way, it encounters other magnetic field lines along the donut shape, which constantly point its motion in a circle. But then this circular motion means the Lorentz force starts pushing the electron inwards as well, spiraling it into the center of the lens. Now, if you trace the path of the whole beam of electrons, you'll see they all get steered into the center, focusing the beam.</p>
</details>

到1931年，鲁斯卡和他的同事**马克斯·诺尔**（Max Knoll: 德国电气工程师，与鲁斯卡共同发明电子显微镜）利用这种设计建造了第一台可工作的**电子显微镜**（Electron Microscope: 利用电子束而非光线成像的显微镜）。它相当简陋，由黄铜粗略地螺栓固定在一起，但它确实奏效了。图像本身是在聚焦的电子束击中位于焦点的样品后形成的。样品需要非常薄，大约只有100纳米厚。更多的电子会穿过样品的较薄部分，而不是较厚部分，从而形成样品的电子印记。然后，第二个电磁透镜将这个印记放大到**荧光探测器**（Fluorescent detector: 能够将电子束能量转换为可见光的探测器）上，生成最终图像。这被称为**透射电子显微镜**（Transmission Electron Microscope, TEM: 电子显微镜的一种，通过电子束穿透样品成像）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By 1931, Ruska and his colleague, Max Knoll, used this kind of design to build the first working electron microscope. It was pretty basic, made of brass roughly bolted together, but it worked. The image itself was created once the focused electron beam hit a sample sitting at the focal point. The sample needed to be incredibly thin, only around 100 nanometers thick. More electrons would make it through the thinner parts of the sample than the thicker parts, creating an electron imprint of the sample. Then a second electromagnetic lens magnified this imprint down onto a fluorescent detector, producing the final image. This was known as a transmission electron microscope or TEM.</p>
</details>

早期版本的显微镜几乎没有放大作用。事实上，它甚至不如**光学显微镜**（Optical microscope: 利用可见光和光学透镜成像的显微镜）。但鲁斯卡决心已定。在接下来的几年里，他尝试在显微镜上增加更多透镜，以创建越来越大的图像。到1930年代中期，鲁斯卡已经将透射电子显微镜的放大倍数提高到10000倍以上。它能够以远超光学显微镜的水平，拍摄昆虫、细菌乃至病毒的特写照片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, early versions of the microscope barely magnified at all. In fact, it wasn't even better than an optical microscope. But Ruska was determined. Over the next few years, he experimented with adding more lenses onto the microscope to create bigger and bigger images. By the mid-1930s, Ruska had gotten the TEM way past 10,000 times magnification. It could produce close-ups of insects, bacteria, and even viruses at a level far surpassing the optical microscope.</p>
</details>

### 球差的困境

但就在鲁斯卡的透射电子显微镜取得进展之际，一位名叫**奥托·谢尔策**（Otto Scherzer: 德国物理学家，研究电子光学和电子显微镜的球差问题）的德国物理学家发表了一篇论文，声称这种显微镜即将遭遇瓶颈。他写道，电磁透镜存在一个完全无法避免的缺陷。电子要到达透镜的焦点，需要被偏转一个特定的量。如果你简化其轨迹，可以用角度θ来定义理想的偏转。这个角度取决于电子到光轴的水平距离，以及焦点沿光轴向下有多远，这也被称为焦距。焦距越短，放大倍数就越大。如果你将这个角度绘制成到光轴距离的函数，你会发现它可以近似为线性关系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But right as Ruska's TEM was taking off, a German physicist named Otto Scherzer published a paper claiming that the microscope was about to hit a brick wall. There was a flaw in the electromagnetic lens, he wrote, that was completely unavoidable. For an electron to make it to the focus of the lens, it needs to be deflected by a specific amount. If you simplify its trajectory, you can define that ideal deflection with this angle theta. This angle depends on the horizontal distance of the electron from the optical axis, and how far down the axis the focus is, also known as the focal length. The shorter the focal length, the stronger the magnification. If you graph this angle as a function of distance to the optical axis, you'll see that it can be approximated as linear.</p>
</details>

问题在于磁场并非线性变化。它在磁体边缘附近要强得多。因此，如果你绘制电子实际偏转的曲线，你会发现磁场对离中心较远的电子偏转过度。它们的角度比应有的大，因此它们最终在中间光线之前就聚焦了。结果是，焦点沿着光轴散开，而不是集中在一个点上。模糊从图像边缘开始出现，但放大倍数越高，情况就越糟。这被称为**球差**（Spherical aberration: 光学透镜或磁透镜的一种缺陷，导致光线或电子束无法聚焦到单个点上），它会扭曲每一个**径向对称**（Radially symmetric: 物体围绕中心轴旋转任意角度后保持不变的对称性）的电磁透镜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The problem is that the magnetic field doesn't scale linearly. It's much stronger near the edges of the magnet. So if you plot the curve for the actual deflection of the electrons, you'll see that the magnetic field overdeflects the electrons further out. Their angles are bigger than they should be, so they end up focusing before the rays in the middle. And as a result, the focus is spread across the optical axis instead of being contained in a single point. The blur starts out around the edges of the image, but it gets worse the higher the magnification. This is called spherical aberration, and it distorts every radially symmetric magnetic lens.</p>
</details>

事实上，它不仅影响电磁透镜。从相机到望远镜再到放大镜，每个球面透镜都存在这个问题。但有一个出人意料的简单方法可以最小化球差：只需添加第二个透镜，一个发散光线而不是汇聚光线的透镜。如今，发散透镜也存在球差。但如果它的像差量与你的汇聚透镜相同但方向相反，你可以将两者叠加，从而基本上抵消它们的影响。这样几乎完全消除了像差。几乎所有现代相机和显微镜中的透镜系统都使用某种校正性发散透镜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, it doesn't just affect magnetic lenses. Every spherical lens, from a camera to a telescope to a magnifying glass also suffers from it. But there is a surprisingly simple way to minimize spherical aberration. Just add a second lens, one that diverges light instead of converging it. Now, a diverging lens also suffers from spherical aberration. But if it has the same amount of aberration as your converging lens just in reverse, you can stack the two to essentially cancel out their effects. And that removes the aberrations almost entirely. Almost all modern lens systems in cameras and microscopes use some sort of correcting divergent lens.</p>
</details>

因此，你可能会认为透射电子显微镜只需要它自己的发散球面透镜版本就能进一步放大。但对于磁体来说，这在物理上是不可能的。每个磁体都有两个磁极，北极和南极。不可能只有一个磁极。即使你将磁体从中间劈开，它也会产生两个更小的磁体，每个磁体都带有北极和南极。并且所有磁力线都必须从一个磁极开始，到另一个磁极结束，形成一个闭合回路。这是**麦克斯韦方程**（Maxwell equation: 描述电场、磁场以及它们与电荷、电流之间关系的四条基本方程）中第二条方程的直接结果，因为你产生的磁场其磁力线始于并终于同一个磁体。因此，电子总是会穿过两条磁力线。第一次穿过时，通过洛伦兹力，它被引入螺旋运动。然后第二次从那个螺旋运动中，由于方向略有不同，它被推向轴心。这就是为什么所有电磁透镜默认都会汇聚电子束，而永远不会使其发散。即使你从透镜的另一侧射入电子，它们仍然会被聚焦。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you might imagine that the TEM simply needs its own version of a diverging spherical lens to magnify further. But with magnets, this is physically impossible. Every magnet has two poles, a North and a South. It's impossible to just have one. Even if you split a magnet down the middle, it creates two smaller magnets, both with a North and South. And all magnetic field lines have to start at one pole and end at the other, forming a closed loop. It's a direct result of the second Maxwell equation because the field that you create has field lines that start and end at the same magnet. So the electrons will always cross through two lines. The first time it passes through, by the Lorentz force, it's brought into the spiraling motion. And then the second time from that spiraling motion, which has then a slightly different direction, it's pushed towards the axis. That's why all electromagnetic lenses by default will converge that beam, and never diverge it. Even if you shot electrons in from the other side of the lens, they would still get focused.</p>
</details>

这就是奥托·谢尔策在1936年论文中证明的，从而阻碍了透射电子显微镜的进展。不可能制造出一种发散的径向对称电磁透镜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is what Otto Scherzer's paper proved in 1936, stopping progress on the TEM. It is impossible to produce a radially symmetric magnetic lens that diverges.</p>
</details>

**科学家**: 当然，这对于电子显微镜的发展是一个巨大的障碍，因为人们意识到，无论我们如何加速电子，球差的存在始终会成为阻碍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this was, of course, a big roadblock for the development of electron microscopy, because people saw, okay, we can accelerate electrons as much as we want, the presence of spherical aberration will always be in the way.</p>
</details>

由于这个障碍，显微镜分辨率的进步显著放缓。到1955年，另一种显微镜抢先一步，拍摄到了第一张普遍被接受的原子图像，超越了透射电子显微镜。这被称为**场离子显微镜**（Field ion microscope: 一种利用电离气体原子成像的显微镜），它的工作原理是将氦或氖原子射向一个原子级尖锐的针尖。针尖带正电荷。因此，当气体原子撞击针尖时，它们会被电离并垂直于表面喷射出去。这可以形成针尖原子结构的印象。但这种方法是有限的。你只能了解针尖最前端的原子结构。而且图像也并非那么令人印象深刻。幸运的是，鲁斯卡的电子显微镜不会永远停留在昆虫和细菌的观测领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because of this roadblock, advancements in the microscope's resolution slowed significantly. By 1955, another microscope beat the TEM to the punch and took the first generally accepted image of atoms. This was called the field ion microscope, and it worked by shooting helium or neon atoms at an atomically sharp needle tip. The tip was positively charged. So when the gas atoms hit the needle, they got ionized and were ejected off perpendicular to the surface. And that could form an impression of the atomic structure of the tip. But this method was limited. You could only get a sense of the atomic structure of the very tip of the needle. And the images weren't all that impressive. Luckily, Ruska's electron microscope wouldn't stay stuck in the realm of insects and bacteria forever.</p>
</details>

### 赞助商信息

也许你不是一只被相对论电子轰击的昆虫，但当你被垃圾电话和定向广告轰炸时，有时会感觉就像那样。这在我们为视频做研究时是一个真正的问题。我当时在阅读关于透镜和光学的内容，几天后就开始收到眼镜和眼科手术的定向广告。所以外面有人可能正在出售我的浏览数据。但这就是今天节目的赞助商**Incogni**（Incogni: 一项帮助用户从数据经纪人处删除个人数据的服务）发挥作用的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, you might not be an insect getting bombarded with relativistic electrons, but it can sometimes feel like it when you're getting bombarded with spam calls and targeted ads. It's a real problem when we're researching for our videos. I was reading up on lenses and optics, and a few days later I started getting targeted ads for glasses and eye surgery. So someone out there is probably selling my browsing data. But this is where today's sponsor, Incogni, comes in.</p>
</details>

获得你的许可后，Incogni将代表你与数据经纪人对抗，他们会找出谁拥有你的数据，适用哪些法律，然后以适当的法律语言要求删除你的信息。你只需注册，他们就会给你一份拥有你信息的所有公司列表，每项索赔的严重程度，以及所有请求的状态。我去年四月注册了，从那时起他们为我提交了317个请求，其中281个已经完成，为我节省了超过210小时的工作。现在我不再收到不需要的眼镜广告了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With your permission, Incogni will fight the data brokers on your behalf by finding out who has your data, which laws apply, and then they request, with the appropriate legal language, your information be deleted. You just sign up and they'll give you a list of all the companies that have your information, how severe each claim is, and the status of all your requests. Now, I signed up last April, and since then they filed 317 requests for me, 281 of which have been completed, saving me over 210 hours of work. And now I'm no longer getting ads for glasses I don't need.</p>
</details>

因此，要尝试Incogni并对抗数据经纪人，请访问Incogni.com/Veritasium。你也可以点击描述中的链接或扫描此二维码。请务必使用代码Veritasium，即可享受年度订阅6折优惠，立即掌控你的数据。网址是Incogni.com/Veritasium。现在，我们回到电子显微镜的话题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to try it Incogni and fight against the data brokers, visit Incogni.com/Veritasium. You can also click the link in the description or scan this QR code. Make sure to use the code Veritasium to get 60% off your annual subscription to take control of your data today. That's Incogni.com/Veritasium. And now back to the electron microscope.</p>
</details>

### 球差校正的突破

尽管谢尔策提出了像差限制，透射电子显微镜的研究工作仍在接下来的四十年里继续。人们尝试通过巧妙的变通方法来提高分辨率，其中最杰出的或许是英裔美国物理学家**阿尔伯特·克鲁**（Albert Crewe: 英裔美国物理学家，在扫描透射电子显微镜领域做出重要贡献）。他的想法是用一个更具方向性的光源来取代随机发射电子的钨丝。因此，他没有通过加热表面来“煮沸”电子，而是尝试用更强的电场将它们拉出。通过将钨尖磨成细尖，他成功地创造出了一束比以前亮一千多倍的窄光束。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Despite Scherzer's aberration limit work on the transmission electron microscope continued. During the next four decades. People tried boosting the resolution with clever workarounds, and perhaps none more so than British-American physicist Albert Crewe. His idea was to replace the tungsten filament, which fired off electrons at random, with a more directed source. So instead of boiling electrons off the surface, he tried pulling them off with a stronger electric field. And, by sharpening the tungsten into a fine tip, he was able to create a narrow beam which was over a thousand times brighter than before.</p>
</details>

他将他的新窄光束与一项不太可能的技术结合起来：**阴极射线管**（Cathode ray tube, CRT: 一种真空管，通过电子束轰击荧光屏显示图像）电视。这种电视通过扫描电子束穿过屏幕来工作。屏幕涂有荧光粉，当被电子击中时会发光。通过改变电子束的强度，你可以改变屏幕的亮度，从而得到黑白图像。克鲁受到启发，为透射电子显微镜设计了一个类似的电子束，使其能够扫描纳米级样品。因此，克鲁的电子束不是一次性创建整个样品的印记，而是制作更小的印记，一点一点地绘制出样品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He paired his new narrow beam with an unlikely technology. The cathode ray tube TV. These TVs worked by scanning an electron beam across a screen. The screen was coated in a phosphor that produced light when hit by electrons. And by varying the intensity of the electron beam, you could vary the brightness of the screen, giving you a black-and-white image. Crewe was inspired to design a similar electron beam for the TEM that would scan across the nanoscopic sample. So instead of creating an imprint of the whole sample at once, Crewe's electron beam made smaller imprints, mapping the sample out bit by bit.</p>
</details>

这并非首次有人尝试制作透射电子显微镜的扫描版本。德国研究员**曼弗雷德·冯·阿登纳**（Manfred von Ardenne: 德国物理学家和发明家，在电子显微镜领域有早期贡献）在1930年代建造了一个早期原型，但在二战期间被毁。当克鲁复兴阿登纳的设计时，他进行了几项重大改进，到1970年，他取得了这一成就：这是用电子显微镜拍摄到的第一张单个原子的图像。研究人员迅速采用他的技术，制作了无数原子图像。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This wasn't the first time someone had tried to make a scanning version of the TEM. German researcher Manfred von Ardenne built an early prototype in the 1930s, but it was destroyed during WWII. When Crewe revived Ardenne's design, he made several drastic improvements, and by 1970 he had this. The first image of single atoms taken with the electron microscope. Researchers quickly jumped to employ his tech, producing countless images of atoms.</p>
</details>

经过鲁斯卡、克鲁以及许多其他科学家近一个世纪的改进，透射电子显微镜的放大倍数升级已达到顶峰。但谢尔策的问题依然存在。球差对你所能看到的最小尺寸设定了一个硬性限制。即使是克鲁本人，在十多年的努力后也放弃了尝试绕过它。“不幸的是，我们从未成功。在多次令人心碎的尝试后，我们被迫承认失败。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">After nearly a century of improvements from Ruska, Crewe, and many others, the magnification upgrades on the TEM had reached their peak. But Scherzer's problem persisted. Spherical aberration set a hard limit on how small you could see. Even Crewe himself gave up on trying to get around it after over ten years of work. "Unfortunately, we could never make it work. After many heartbreaking attempts, we were forced to admit defeat."</p>
</details>

大约在这个时候，其他也能对原子成像的显微镜出现了。这些**探针显微镜**（Probe microscopes: 一类通过探针与样品表面相互作用来成像的显微镜）通过将一个极其微小的探针滑过样品来工作。探针检测**量子效应**（Quantum effects: 微观粒子在量子尺度上表现出的独特物理现象）或纳米级力的变化，然后绘制出样品的表面结构。这些显微镜更容易建造，而且由于它们不使用任何透镜，因此不受球差的限制。它们的图像甚至是三维的。但迫在眉睫的问题是，这些探针并非真正“看到”原子，更像是“感觉到”原子。整个80年代和90年代，我们所拥有的就是这些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Around this time, other microscopes emerged that could also image atoms. These probe microscopes work by gliding an incredibly small stylus across the sample. The stylus detects variations in quantum effects or nanoscale forces to then map the surface structure of the sample. These were easier to build, and because they didn't use any lenses, they weren't limited by spherical aberration. Their images were even 3D. But the looming issue was that these probes weren't really seeing atoms. It was more like feeling atoms. Throughout the 80s and 90s, this was all we had.</p>
</details>

但如果还有另一种方法呢？谢尔策的定理证明了发散的、径向对称的透镜是不可能实现的。但如果你愿意放弃这种对称性，那么这个定理就不再适用了。问题在于，径向对称性可以说是任何透镜最重要的特性，因为如果你打破了对称性，你也会破坏图像。但三位特立独行的科学家认为可能存在一种方法。**克努特·厄本**（Knut Urban: 德国物理学家，因球差校正技术获得卡夫利奖）、**马克斯·海德**（Max Haider: 德国物理学家，因球差校正技术获得卡夫利奖）和**哈罗德·罗斯**（Harold Rose: 德国物理学家，因球差校正技术获得卡夫利奖）在电子显微镜界被称为“麻烦制造者”，多年来几乎没有人对他们的研究感兴趣，更重要的是，没有人愿意资助他们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what if there was another way? Scherzer's theorem proof that a diverging, radially symmetric lens isn't possible. But if you're willing to give up on that symmetry, well, the theorem no longer applies. The problem is that radial symmetry is arguably the most important property of any lens, because if you break the symmetry, you also break the image. But three maverick scientists thought there might be a way. Knut Urban, Max Haider, and Harold Rose were known in the electron microscope community as troublemakers, and for years barely anyone had been interested in their research or, more importantly, in funding it.</p>
</details>

这也有充分的理由。他们的想法有点疯狂。我的意思是，他们故意想用一个不对称的透镜来破坏图像。他们希望这个扭曲图像中会有一小部分略微发散。也许，仅仅是也许，这一小部分可以校正原始透镜的球差。于是他们开始工作。为了扭曲图像，他们使用了一个巨大的电磁铁阵列，其中包含六个、八个甚至十个独立的线圈和带有凹凸不平磁场的磁体。这些被称为**六极磁体**（Hexapole Magnet: 具有六个磁极的磁体，用于产生非对称磁场）、**八极磁体**（Octopole Magnet: 具有八个磁极的磁体）和**十极磁体**（Decapole Magnet: 具有十个磁极的磁体）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for a good reason too. Their idea was kind of crazy. I mean, they purposely wanted to break the image using a lens that wasn't symmetric. Their hope was that there would be a small part of this distorted image that would be slightly diverging. And maybe, just maybe, this small part could correct the spherical aberration of the original lens. So they got to work To distort the image, they used a massive nest of electromagnets with six, eight, or even ten separate coils and magnets with bumpy magnetic fields. These were known as the hexapole, octopole, and decapole magnets.</p>
</details>

因此，当电子束穿过六极磁体时，它会将平坦的二维图像扭曲并挤压成一个三角形的鞍形。原始电子束的周长会被推向三个角，而其余内部区域则被拉伸开。但现在图像的中间会有一个轻微的凹形弯曲，产生微小发散的效果。接着，罗斯、海德和厄本让电子束穿过第二个六极磁体，这个磁体以相反的方式工作，从而将扭曲的图像重新恢复成圆形。但他们计算出，这个新图像的中心可能仍然保留着微小发散的残余，并且球差的方向与原始球差相反。因此，如果他们的数学和工程计算完全正确，他们就可以将带有球差的图像通过这两个透镜，几乎完全抵消其影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So as the electron beam passed through a hexapole, it would twist and squeeze the flat 2D image into a triangular saddle. And the circumference of the original beam would be pushed into the three corners, with the rest of the interior stretched out. But now the middle of the image would have a slight concave bow, giving the effect of a small divergence. Then Rose, Haider, and Urban forced the beam through a second hexapole , one that worked the opposite way, so it would unbend the distorted image back into a circular shape. But now they, calculated this new image might have the remnants of that tiny divergence still in its center, with spherical aberration pointing in the opposite way. So if they got their maths and engineering exactly right, they could feed an image with spherical aberration through these two lenses to almost completely counteract the effect.</p>
</details>

**Veritasium**: 我想，当这个想法被提出时，领域内很多人都觉得它很疯狂，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I imagine a lot of people in the field thought it was a crazy idea when it was proposed, right?</p>
</details>

**科学家**: 不仅是这个概念，而且，我相信，人们认为这在技术上是不可行的。当时人们认为这是不可能的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Not only the concept, but, that this is, like, technically feasible, I believe. It was thought that this is not possible.</p>
</details>

到1997年5月，该团队只剩下两个月的开发时间，他们的最后一个赞助商就要撤回资助了。更糟糕的是，他们最新的透镜迭代方案仍停留在图纸阶段。但不知何故，到7月23日，就在他们的资金耗尽前一周，新透镜已经准备好进行测试了。他们小心翼翼地将其放入显微镜中，但和之前每次一样，透镜不稳定并失效了。于是他们决定关闭设备24小时，让磁体稳定下来。然后，在24日凌晨2点，他们再次打开设备，几乎是奇迹般地，图像开始稳定下来。突然间，没有了像差。只有美丽、清晰的原子图像。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By May 1997, the group had just two months of development time left before their last sponsor withdrew their backing. And to make matters worse, their latest lens iteration was still just on the drawing board. But somehow, by the 23rd of July, just a week before their funding ran out, the new lens was ready to test. They gingerly placed it into the microscope, but like every time before it, the lens was unstable and failed. So they decided to switch off the equipment for 24 hours to allow the magnets to settle. And then at 2 a.m. on the 24th, they turned it on again, and almost magically, the picture started to stabilize. Suddenly, there was no aberration. Only beautiful, clear images of atoms.</p>
</details>

经过60多年的失败尝试，厄本、罗斯和海德成功地完成了看似不可能的任务。通过这种方法，他们将透射电子显微镜的分辨率降低到仅0.13纳米。一张普通的透射电子显微镜图像从这样变成了这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">After more than 60 years of failed attempts, Urban, Rose, and Haider pulled off the seemingly impossible. With this method, they cut the resolution of the TEM down to only 0.13 nanometers. An average TEM image went from looking like this to this.</p>
</details>

该团队取得突破几个月后，克努特·厄本参加了一个显微镜会议，分享了这些成果。但由于该团队的声誉，他被安排在一个几乎无人注意的小房间里。然而，很快消息传开，尽管困难重重，他的图片似乎是真的。随后，数百人聚集起来。人们在外面排队，希望能一睹他们惊人清晰的图像。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A few months after the group's breakthrough, Knut Urban attended a microscopy conference to share these results. But because of the group's reputation, he was relegated to a small back room that barely anyone noticed. Soon, however, word spread that against all odds, his pictures seemed real. Then a crowd of hundreds formed. People were lining up outside, hoping to get a glimpse of their stunningly sharp images.</p>
</details>

### 原子世界的清晰视野

**科学家**: 那么我们要取一个样品架。是的，我们取出了样品架。我们把它放在光学显微镜下。样品本身是一个小薄片，没有光学显微镜你是看不到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're going to get a sample holder. Yeah, so we got a sample holder out. We put that under the optical microscope. So the sample itself is a small lamella that you can't see without the optical microscope.</p>
</details>

**Veritasium**: 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**科学家**: 看看这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Have a look through that.</p>
</details>

**Veritasium**: 太棒了。在B的顶部有一个尖头。是的。在最顶部的左侧，看起来像一点点灰尘。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Beautiful. On top of the B there's a prong. Yeah. And on the very top of that on the left-hand side, looks like a little bit of dust.</p>
</details>

**科学家**: 那就是我们的实际样品。好的，现在我只需提高放大倍数，然后做一些更基本的对准。在这台电子显微镜中，因为它被称为透射电子显微镜，电子总是穿透样品。在这里，我们同时观察整个样品。这就是为什么对准样品如此重要。如果你想象在高度对称方向上的原子像串珠一样排列。当我们向下看时，我们就能看到一个图像。但如果我们处于某个随机方向，一切都会变得模糊不清。这就是为什么我们必须在边缘进行一些倾斜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's our actual sample. Okay, now I simply go up with the magnification and I do a very few, like, more basic alignments. In this electron microscope because it's called transmission electron microscope, the electrons always transmit the sample. Here we look through our entire sample at the same time. And that's why it's so important that we align the sample. If you imagine atoms in a high-symmetry direction are lined up like pearls on a string. When we look down it, well, we can see an image. But if we are in, like, some random direction that everything would be just blurred. So that's why we have to do some tilting in the edge.</p>
</details>

**科学家**: 这就是实际样品开始的地方——**锶钛酸盐**（Strontium titanate: 一种具有钙钛矿结构的无机化合物，常用于材料科学研究）。这是一个薄区域，我们希望在那里获得原子分辨率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is where the actual sample starts — the strontium titanate. And this is a thin region where we hope to get atomic resolution.</p>
</details>

**Veritasium**: 所以这是5000倍？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is 5000 times? Yes</p>
</details>

**Veritasium**: 哇。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wow.</p>
</details>

**科学家**: 我们看到了锶、钛。我们看到了氧。我们看到了碳。那是污染物。所以我们很可能看到的是碳污染。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we see strontium, titanium. We see oxygen. We see carbon. That's contamination. So most likely what we're looking at is carbon contamination.</p>
</details>

**Veritasium**: 当你进行这种聚焦时，你真正寻找的是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When you do this focus, what are you really looking for?</p>
</details>

**科学家**: 我寻找这个边缘变得锐利。看到原子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I look for this edge to become sharp. See atoms.</p>
</details>

**Veritasium**: 什么？就这样？太不可思议了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What? Just like that. That's wild.</p>
</details>

不久之后，该团队成功校正了像差，而**奥德雷·克里瓦内克**（Orndrej Krivanek: 捷克裔美国物理学家，在扫描透射电子显微镜的球差校正方面做出贡献）独立地为克鲁版本的显微镜，即**扫描透射电子显微镜**（Scanning TEM, STEM: 电子显微镜的一种，通过扫描电子束在样品上成像），实现了相同的成就。2020年，这四位科学家因完成了许多人认为不可能的任务，被授予享有盛誉的**卡夫利奖**（Kavli Prize: 国际科学奖项，表彰在天体物理学、纳米科学和神经科学领域的杰出成就）**纳米科学**（Nanoscience: 研究纳米尺度物质现象和应用的技术领域）奖。通过他们的坚持和独创性，像这样看到原子，嗯，已经变得稀松平常。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Shortly after, the group successfully corrected Orndrej Krivanek independently achieved the same for Crewe’s version of the microscope, the scanning TEM. And in 2020, all four were awarded the prestigious Kavli Prize in Nanoscience for accomplishing what so many others thought impossible. Through their persistence and ingenuity, seeing atoms like this is, well, normal.</p>
</details>

**Veritasium**: 像差校正能带来多大的不同？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How big of a difference does aberration correction make?</p>
</details>

**科学家**: 如果你想看到原子，例如，如果你想测量原子间距，如果你想了解你拥有什么类型的原子，你就需要像差校正。任何材料科学研究，材料工程、化学工程……你都需要看到原子层面发生的事情，因为你想将材料的性质与结构联系起来。如果你无法在原子层面看到结构，你就只掌握了一半的信息。所以那是一个颠覆性的改变。这就是为什么现在原则上每所大学都需要一台那样的显微镜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you want to see atoms and if you want to, for example, measure in atomic distances, and if you want to learn what type of atoms you have, you need aberration correction. Any research that's material science. Materials engineering, chemical engineering... You need to see what's happening at the atomic level because you want to relate the properties to the structure. If you can't see the structure at the atomic level, you only have half of the information. So that was a game changer. That's why nowadays every university in principle needs a microscope like that.</p>
</details>