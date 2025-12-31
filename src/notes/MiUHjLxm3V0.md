---
author: Veritasium
date: '2025-12-31'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=MiUHjLxm3V0
speaker: Veritasium
tags:
  - photolithography
  - extreme-ultraviolet
  - semiconductor-manufacturing
  - precision-engineering
  - moores-law
title: EUV光刻：拯救摩尔定律的极限工程挑战
summary: 本视频深入探讨了**极紫外光刻 (EUV)** 技术背后令人难以置信的工程历程。这项技术使晶体管尺寸得以持续缩小至10纳米以下，从而延续了**摩尔定律**。视频详细阐述了生成EUV光、制造原子级平滑镜片、实现极致精度等挑战，以及**ASML**和**蔡司 (Zeiss)** 等公司历经数十年，将这台“不可能的机器”推向商业化的艰辛过程。它强调了“不合理”的科学家和工程师在突破技术界限方面的坚韧不拔。
insight: ''
draft: true
series: ''
category: tech-trends
area: tech-engineering
project: []
people: []
companies_orgs:
  - ASML
  - Zeiss
  - Intel
  - Samsung
  - TSMC
  - Bell Labs
  - Lawrence Livermore National Lab
  - Philips
  - Motorola
  - AMD
products_models:
  - EUV
  - High NA EUV machine
  - Low NA machine
  - Engineering Test Stand
media_books: []
status: evergreen
---
### 芯片与摩尔定律的挑战

**旁白**: 这是一个微芯片。当你放大时，你会发现一个纳米级的计算城市，摩天大楼般高耸数百层，数百公里长的导线连接着一切。最底层是数十亿个**晶体管**，它们是计算机的“一”和“零”。芯片通过电子在晶体管之间快速穿梭来工作，晶体管做得越小，信号传输距离就越短，计算速度也就越快。此外，你可以在相同面积内集成更多晶体管，从而制造出更强大的芯片。因此，在过去50多年里，晶体管变得越来越小，芯片上可容纳的晶体管数量每两年翻一番。这被称为**摩尔定律**，以**英特尔 (Intel)** 联合创始人**戈登·摩尔 (Gordon Moore)** 的名字命名，他在1965年发现了这一规律，它一直是科技产业的主要驱动力之一。但大约在2015年，这一进展戛然而止。如果不是一家制造这些机器的公司——正是这些机器拯救了摩尔定律——我们可能永远无法突破瓶颈。

<details>
<summary>Original English</summary>

**旁白**: This is a microchip. When you zoom in, you find a nanoscopic computing city skyscrapers, hundreds of layers tall with hundreds of kilometers of wires connecting everything. And at the very bottom, is this transistors, billions of them. They are the ones and zeros of our computer. The chip works by whizzing electrons from transistor to transistor, and the smaller you can make those transistors, the less the signals have to travel, so the faster they can compute. Plus you can fit more transistors into the same area, resulting in a much more powerful chip. So for over 50 years, transistors got smaller and smaller, and the number you could fit on a chip doubled every two years. This became known as **Moore's Law** named for **Intel**'s co-founder **Gordon Moore**, after he noticed the pattern back in 1965, and it's been one of the main drivers of the tech industry. But around 2015, progress came to a screeching halt, and we might have never gotten past it if it wasn't for a single company that makes these machines, the machines that saved Moore's Law.

</details>

**旁白**: 天哪。这是一个关于人类有史以来建造的最复杂的商业产品的视频。这太疯狂了。它耗资高达**4亿美元**，而且它如此奇特，我想通过一个思想实验向你介绍它。想象一下，你被缩小到蚂蚁大小，并获得了一束强大的激光，足以像切黄油一样熔化金属。接下来，一小滴熔融的锡，大约白细胞大小，以每小时250公里的速度在你面前射出。你的任务是用你的小激光在20微秒内连续击中它，不是一次，不是两次，而是三次。这正是这台机器所做的事情。它连续三次击中一小滴锡，将每一滴加热到超过**220,000开尔文**。这大约是太阳表面温度的40倍。它不仅击中一滴，它每秒击中**50,000滴**。你多久会错过一次激光射击？

<details>
<summary>Original English</summary>

**旁白**: Holy. This is a video about the most complicated commercial product humanity's ever built. That's insane. It costs a whopping **$400 million**, and it is so bizarre that I want to introduce it to you with a thought experiment. Imagine you are shrunk down to the size of an ant, and you are given a laser that's strong enough to melt through metal like butter. Next, a tiny droplet of molten tin, roughly the size of a white blood cell, is shot out in front of you around 250 kilometers per hour. And your task is to hit this not once, not twice, but three times in a row in 20 microseconds with your little laser. Well, that is exactly what this machine does. It hits one tiny tin droplet three times in a row, heating each one up to over **220,000 Kelvin**. That's roughly 40 times hotter than the surface of the sun. And it doesn't just hit one droplet, it hits **50,000 droplets** every single second. How often do you miss a laser shot?

</details>

**受访者**: 我们不会错过。

<details>
<summary>Original English</summary>

**受访者**: We don't miss them.

</details>

**旁白**: 你们每秒发射15万次激光，而且一次都不会错过？这台机器还包含可能是宇宙中最光滑的镜子。如果你把其中一面放大到地球大小，那么最大的凸起也不会比一张扑克牌厚。最重要的是，它能够将芯片的一层完美地叠加在另一层之上，误差不超过**五个原子**。而这一切都发生在机器的某些部件以超过**20 G**的加速度高速运动时。30年来，几乎所有人都认为建造这台机器是不可能的，然而它却真实存在。世界上只有一家公司能制造它。那么，这家公司是什么？它建造的这台“不可能的机器”又是什么呢？本视频由**Brilliant**赞助。更多信息请在节目结束时了解。顺便提一下，这台机器的制造商并没有赞助本视频。我们只是觉得这里的科学和工程技术太酷了，所以必须制作一个视频来介绍它。那么，让我们直接开始吧。

<details>
<summary>Original English</summary>

**旁白**: What you do 150,000 laser shots a second, and you don't miss one exactly. The same machine also contains mirrors that might just be the smoothest objects in the universe. If you scale one up to the size of the earth, then the largest bump would be no thicker than a playing card's. On top of that, it is able to overlay one layer of a chip perfectly on top of another and never be off by more than five atoms. And this is all happening while parts of the machine whip around at accelerations of over **20 g's**. For 30 years, almost everyone thought that actually building this machine was impossible, and yet it exists. There is only one company in the world that can make it. So what is this company and what is this impossible machine they've built? This video is sponsored by **Brilliant**. More about them at the end of the show. Now, just as a quick aside, the makers of this machine didn't actually sponsor this video. We just thought that the science and engineering here were so cool that we had to make a video about it. So let's jump straight in.

</details>

### 微芯片制造流程

**旁白**: 要制造微芯片，首先要从沙子中提取**二氧化硅**，并将其提纯成超纯的、接近百分之百的**硅块**，然后将其熔化在特殊熔炉中。接下来，将一小块**籽晶**放入熔炉中。硅原子会附着在籽晶上，扩展其结构。然后，在旋转的同时缓慢提升籽晶，这会形成一个大的**单晶硅锭**。

<details>
<summary>Original English</summary>

**旁白**: To make a microchip, you start by taking silicon dioxide, usually from sand, and purifying it into ultrapure, nearly a hundred percent silicon chunks, which is then melted down in a special furnace. Next, you lower a small seed crystal into the vat. Silicon atoms attach to the crystal extending its structure. Then you slowly raise the seed crystal while rotating it. And this results in a large single crystal silicon ingot.

</details>

**受访者**: 这就是籽晶所在的位置。是的。然后你把它拉出来。我能摸一下吗？

<details>
<summary>Original English</summary>

**受访者**: This is where the seat crystal would be. Yeah. And then you pull it out. Can I touch it?

</details>

**旁白**: 是的，你可以。看起来你可能无法从这里握住它。

<details>
<summary>Original English</summary>

**旁白**: Yeah, you can. It seems like you would not be able to ho hold this from here.

</details>

**受访者**: 是的。

<details>
<summary>Original English</summary>

**受访者**: Yes.

</details>

**旁白**: 它甚至感觉很脆弱，如果你稍微。

<details>
<summary>Original English</summary>

**旁白**: It even feels fragile Like if you kinda.

</details>

**受访者**: 不要弄断它。是的，我怕把它弄断。

<details>
<summary>Original English</summary>

**受访者**: Don't snap it. Yeah, I-I'm scared to break it.

</details>

**旁白**: 是的。

<details>
<summary>Original English</summary>

**旁白**: Yes.

</details>

**受访者**: 他用了更大的力气。

<details>
<summary>Original English</summary>

**受访者**: He's using more force.

</details>

**旁白**: 然后，硅锭用**金刚石线锯**切割成**晶圆**，最多可达5000片，之后每片晶圆都经过仔细抛光。接下来，它被涂上一层感光材料，称为**光刻胶**。光刻胶有不同的种类，但在正性光刻胶中，暴露在光线下的区域会变弱，更容易溶解。所以，如果你通过一个有图案的**掩模**照射光线，就可以选择性地削弱涂层的一部分。然后用碱性溶液冲洗晶圆，洗掉暴露的光刻胶，留下印刻的设计。现在，你可以将这个图案转化为物理结构。这通常通过使用化学品或等离子体蚀刻未覆盖的硅来完成。然后沉积像**铜**这样的金属来填充那些蚀刻线。最后一步是洗掉剩余的光刻胶，这样你就制造出了芯片的单层。我们把这个循环简化为主要步骤：**涂覆、曝光、蚀刻和沉积**。每个芯片层都重复这个过程，根据芯片的不同，可能有10到100层。最底层是晶体管，这是最复杂的层，需要数百个步骤，所有步骤都必须完美无瑕。上层稍微容易一些，这些是传输信号和电力的金属导线。最终，完成的晶圆可以包含数百个芯片，然后将其切割成单独的块，封装并放入产品中。但到目前为止，这个过程中最困难和最关键的步骤是光线通过掩模照射到晶圆上。这就是**光刻**，因为这一步决定了你能制造的特征有多小。

<details>
<summary>Original English</summary>

**旁白**: The ingot is then cut into wafers with **diamond wire saws** up to 5,000 of them, after which each wafer is carefully polished. Next, it's coated with a light sensitive material called **photoresist**. There are different kinds, but in a positive photoresist, the areas exposed to light become weaker and more soluble. So if you shine light through a patterned **mask**, you can selectively weaken parts of that coating. Then you rinse the wafer with a basic solution to wash away the exposed photoresist, leaving the design imprinted. So now you can actually turn this pattern into physical structures. This is often done by etching into the uncovered silicon by using either chemicals or plasma. And then you deposit a metal like **copper** to fill in those etched lines. As a last step, you wash away the remaining photoresist, and now you've made a single layer of the chip. We've simplified this cycle down to the main steps. **Coat, expose, etch, and deposit**. It repeats for every single chip layer, and depending on the chip, there could be anywhere from ten to a hundred layers. The bottom layer is the transistors. This is the most complicated layer requiring hundreds of steps that all need to be perfect. The higher layers are a little easier. These are the metal wires that carry signals and power. By the end, the completed wafer can have hundreds of chips, which are then cut into separate pieces, packaged and put into products. But by far the hardest and most crucial step in the process is where you shine light through the mask and onto the wafer. This is **photolithography**, and that's because this step determines how small you can make the features.

</details>

### 光刻的物理挑战：衍射与波长

**旁白**: 起初，这看起来很简单：光线穿过开口，被其余部分阻挡。但当你试图打印越来越小的特征时，掩模中的间隙开始接近光的波长，这就会导致问题。

<details>
<summary>Original English</summary>

**旁白**: At first, it seems simple light passes through the openings and it gets blocked by all the rest. But as you try to print smaller and smaller features, the gaps in the mask start to approach the wavelength of the light, and that causes problems.

</details>

**受访者**: 我们可以实际展示一下，因为我正好有一个，这是一个掩模。这是一个**掩模版 (reticle)**。

<details>
<summary>Original English</summary>

**受访者**: And we can actually show it because I happen to have a, this is a mask. This is a **reticle**.

</details>

**旁白**: 掩模版或掩模承载着芯片一层的设计。这个掩模版充满了微观的线条和间隙，大约670纳米宽。

<details>
<summary>Original English</summary>

**旁白**: A reticle or a mask carries the design of one chip layer. This reticle is filled with microscopic lines and gaps around 670 nanometers across.

</details>

**受访者**: 如果我拿一个激光笔，这是一个红色的激光。

<details>
<summary>Original English</summary>

**受访者**: And if I take like a laser pointer, so this is a red laser.

</details>

**旁白**: 是的。

<details>
<summary>Original English</summary>

**旁白**: Yep.

</details>

**受访者**: 如果我把它照过去，你就会看到这里。

<details>
<summary>Original English</summary>

**受访者**: If I shine it through it, then you see this here,

</details>

**旁白**: 激光的波长大约是**650纳米**。当光线照射到掩模版时，它的波前在穿过每个间隙时会弯曲。所以每个间隙都会发出扩散并重叠的波。现在我们只看这两个间隙的光。当一个波的波峰与另一个波的波谷对齐时，我们说这两个波**异相**，它们相互抵消，所以你看到暗点。当波峰与波峰对齐时，这两个波**同相**，它们叠加起来，你看到亮点。你看到了**干涉**。

<details>
<summary>Original English</summary>

**旁白**: The laser has a wavelength of around **650 nanometers**. When light hits the reticle, it's wavefronts bend as they pass through each gap. So each gap sends out waves that spread out and overlap. Now let's just look at the light from these two gaps. When the peaks of one wave line up with the troughs of the other, we say that the two waves are **out of phase** and they cancel each other out. So you get dark spots, and when the peaks line up with the peaks, the two waves are **in phase**, they add up and you get bright spots. You get **interference**.

</details>

**受访者**: 是的。

<details>
<summary>Original English</summary>

**受访者**: Yeah.

</details>

**旁白**: 对。你得到了**衍射图案**。

<details>
<summary>Original English</summary>

**旁白**: Right. And you get a **diffraction pattern**.

</details>

**旁白**: 衍射是不可避免的。所以设计师们不是对抗它，而是利用它来获得他们想要的图案。他们有点像从最终晶圆上想要的图案反向工作，设计出狭缝，使衍射以一种能够创建他们想要的图案的方式发生。

<details>
<summary>Original English</summary>

**旁白**: Now, diffraction is inevitable. So instead of fighting it, designers actually use it to get the patterns they want. They kind of work backwards from the eventual pattern they want on the wafer, and they design the slits so that diffraction will occur in such a way that it creates the pattern that they want.

</details>

**受访者**: 你看到三个点，中间的点是原始的，那是**零级**。然后左边和右边，你可以看到**一级**和**负一级**。现在，为了让这个图像在晶圆上得到解析，你需要捕获零级、一级和负一级。

<details>
<summary>Original English</summary>

**受访者**: You see three dots, the middle dot, that's the original one. That's the **zero order**. And then on the left and the right, you can see the **first** and the **minus first**. Now, in order for us to have this image resolved on the wafer, you need to capture the zero and the first and the minus first order.

</details>

**旁白**: 你制造的特征越小，零级和一级之间的这个**角度α**就越大。因此，你的透镜需要越大才能捕获光线。透镜的大小由**数值孔径 (NA)** 描述，它是这个角度的正弦值。所以数值孔径越大，你就能打印越小的特征。但你的透镜系统能有多大是有一个硬性限制的，当这个角度是90度，你的数值孔径是1时，你的透镜就必须是无限大的。幸运的是，我们还可以改变另一件事。

<details>
<summary>Original English</summary>

**旁白**: The smaller you make the features, the larger this angle alpha between the zero and first orders becomes. So the larger your lens needs to be to capture the light. The size of the lens is described by the **numerical aperture** or **NA** for short, which is just the sine of this angle. So the larger that is, the smaller the features you can print. But there is a hard limit to how large your lens system can be, when this angle is 90 degrees and your numerical aperture is one well your lens would have to be infinite. Fortunately, there is one other thing we can change.

</details>

**受访者**: 这是一个红色的激光。是的。一个红色激光的波长，我想说是**650纳米**。

<details>
<summary>Original English</summary>

**受访者**: This is a red laser. Yeah. And a red laser has a wavelength of 650 nanometers, I would say.

</details>

**旁白**: 是的。

<details>
<summary>Original English</summary>

**旁白**: Yeah.

</details>

**受访者**: 如果我拿一个绿色激光，它的波长是**532纳米**，那么你可以看到绿色点比红色点间隔更近。

<details>
<summary>Original English</summary>

**受访者**: And if I take a green laser and this one has a wavelength of 532, then you can see that the green dots are closer spaced than the red dots.

</details>

**旁白**: 这是因为来自两个不同间隙的光线不需要传播那么远就能再次同相匹配。所以各级最终会更靠近。因此，使用更短的波长，你可以使用相同的透镜打印更小的图案。所有这些都由**瑞利方程 (Rayleigh equation)** 捕捉，它决定了最小特征尺寸或**临界尺寸**。

<details>
<summary>Original English</summary>

**旁白**: That's because the light from the two different gaps doesn't have to travel as far to match up in phase again. So the orders end up closer together. So with a smaller wavelength, you can print smaller patterns using the same lens. All of this is captured by the **Rayleigh equation**, which determines the smallest feature, size or **critical dimension**.

</details>

**受访者**: 但是由于数值孔径的增加有一个限制，也就是到1。随着时间的推移，唯一能持续制造越来越小特征的方法就是使用越来越短的波长。

<details>
<summary>Original English</summary>

**受访者**: But since there's a limit to how much you can increase the numerical aperture, I mean to one. Over time, the only way to keep making smaller and smaller features is by using shorter and shorter wavelengths.

</details>

**旁白**: 所以这正是直到1990年代末发生的事情，当时业界确定使用**193纳米深紫外 (deep UV) 光**。这种光被用于制造所有最先进的芯片，直到大约2015年。但到那时，科学家们已经达到了制造特征尺寸的极限，摩尔定律即将撞上一堵砖墙。因此，需要一个根本性的改变，一个酝酿了大约30年的改变。早在1980年代，日本科学家**木下裕夫 (Hiroo Kinoshita)** 提出了一个疯狂的想法：为什么不使用更短的波长，比如大约**10纳米的X射线**？理论上，这应该能让你打印更小的特征，但你很快就会遇到一个问题。这些波长的X射线有足够的能量将电子从原子中弹出，所以大多数材料都会吸收它们。但与波长短于1纳米的医用X射线不同，这些X射线仍然足够长，可以与空气相互作用，所以空气也会吸收它们。这意味着木下裕夫的装置必须在真空中运行，但更糟糕的是，他不能使用透镜来聚焦光线，因为透镜也会吸收它。所以这个想法似乎永远行不通。但在1983年左右，木下裕夫偶然发现了**吉姆·安德伍德 (Jim Underwood)** 和**特洛伊·巴比 (Troy Barbee)** 的一篇论文。他们的工作专注于可以反射波长为**4.48纳米**的X射线的特殊镜子。木下裕夫对此很感兴趣。曲面镜可以像透镜一样聚焦光线。如果他能弄清楚如何为他使用的波长制造这些特殊镜子，那么这可能就是另一种进行光刻的方法。

<details>
<summary>Original English</summary>

**旁白**: So this is exactly what happened up until the late 1990s when the industry settled on **193 nanometer deep UV light**, this was the light that was used to make all of the most advanced chips right until around 2015. But by that point, scientists had reached a limit to how small they could make the features. And Moore's law was about to run into a brick wall. So a radical change was needed, a change that had been brewing for around 30 years. All the way back in the 1980s. Japanese scientist, **Hiroo Kinoshita**, came up with a crazy idea. Why not use much shorter wavelengths like **x-rays** of around **10 nanometers**? In theory, that should allow you to print much smaller features, but you quickly run into a problem. X-rays at these wavelengths have enough energy to eject electrons from their atoms, so most materials absorb them. But unlike medical X-rays which have wavelengths shorter than one nanometer, these are still long enough to interact with air So air absorbs them too. That meant that Kinoshita's setup had to be in a vacuum, but even worse, he couldn't use lenses to focus the light because the lenses would absorb it too. So it seemed like this idea would never work. But around 1983, Kinoshita stumbled on a paper by **Jim Underwood** and **Troy Barbee**. Their work focused on special mirrors that could reflect x-rays with a wavelength of **4.48 nanometers**. So Kinoshita was intrigued. Curved mirrors can focus light just like lenses do. If he could figure out how to make these special mirrors for the wavelength he was using, then this could be another way to do photolithography.

</details>

### 多层镜与X射线反射

**旁白**: 镜子的工作原理大致如下：当光线从一种介质穿过另一种介质时，例如从空气到玻璃，它会弯曲或**折射**。一部分光线穿过，一部分反射回来。反射的量取决于角度、光的偏振，以及对我们来说最重要的是两种介质**折射率**之间的差异。差异越大，反射的光线越多。安德伍德和巴比利用了这一原理。他们制造了一层超薄的**钨**，厚度不到一纳米，薄到X射线可以穿过而不会立即被吸收。当X射线以特定角度击中这层钨时，钨反射的光线不到1%。然后他们仔细调整了层厚，使透射X射线的路径长度仅为其波长的四分之一。然后他们又添加了一层，这次是**碳**，它对**4.48纳米**波长的X射线具有比钨更高的折射率。X射线击中边界，反射出更多一点，但这次相位是反转的，或者说改变了半个波长。当任何光线从较低折射率的介质移动到较高折射率的介质时，都会发生这种情况。现在，当这个新的反射波到达钨边界时，它又传播了四分之一的波长，总共半个波长。所以两个相位对齐，波会发生**建设性干涉**。安德伍德和巴比总共进行了76层交替层，这样他们总共可以反射回更多的X射线。他们最终只反射了大约6%的光线，但这证明了X射线可以被反射的原理。

<details>
<summary>Original English</summary>

**旁白**: The mirrors work something like this. When light crosses from one medium to another, say from air to glass, it bends or **refracts**. Some of it goes through and part reflects back. How much gets reflected depends on things like the angle, the light's polarization. And most importantly for us, the difference between the **refractive indices** of the two media. The larger that difference, the more light is reflected. And Underwood and Barbee used that principle. They made a super thin layer of **tungsten**, less than one nanometer, thick, thin enough that x-rays could pass through without immediately being absorbed. When x-rays hit the layer at a specific angle, the tungsten reflected less than 1%. Then they carefully tuned the layer thickness. So the path length of the transmitted x-rays was only one quarter of its wavelength. Then they added another layer. This time out of **carbon**, it has a higher refractive index than tungsten for wavelengths of **4.48 nanometers**. The x-rays hit the boundary and a little bit more reflects, but this time the phase is inverted or it's changed by half a wavelength. This happens when any light moves from a lower refractive index to a higher one. Now, by the time this new reflected wave reaches the tungsten boundary, it has traveled another quarter of its wavelength for a half wavelength in total. So the two phases line up and the waves interfere constructively. Underwood and Barbee kept doing this trick for a total of 76 alternating layers, so that in total they could reflect back much more of the x-rays. Now, they only managed to reflect around 6% of the light, but it was a proof of principle that you could reflect x-rays.

</details>

### X射线光刻的早期挫折

**旁白**: 于是**木下裕夫**看到了可能性。他开始工作，大约两年后，他的团队设计并建造了三个**钨碳曲面多层镜**，用于反射**11纳米**的光线。凭借这些镜子，他成功打印出**4微米**或**4000纳米**厚的线条，证明至少在理论上，X射线光刻是可行的。一年后，在1986年，他向**日本应用物理学会**展示了他的发现。他自豪而兴奋地解释了他的装置并展示了他的图像。但令他震惊的是，听众拒绝相信。

<details>
<summary>Original English</summary>

**旁白**: So Kinoshita saw the possibilities. He got to work, and after around two years, his team designed and built three **tungsten carbon curved multi-layer mirrors** to reflect **11 nanometer** light. And with it, he managed to print lines **four microns** or **4,000 nanometers** thick, proving that at least in theory, x-ray lithography was possible. A year later in 1986, he went to present his findings to the **Japanese Society of Applied Physics**. Proud and excited, he explained his setup and showed his image. But to his horror, the audience refused to believe it.

</details>

**木下裕夫**: 不幸的是，听众对我的演讲高度怀疑。

<details>
<summary>Original English</summary>

**Hiroo Kinoshita**: Unfortunately, the audience was highly skeptical of my talk.

</details>

**旁白**: 木下裕夫感到非常沮丧。他后来表示：“人们似乎不愿相信我们真的通过弯曲X射线制造出了图像，他们倾向于将整件事视为一个大谎言。”

<details>
<summary>Original English</summary>

**旁白**: Kinoshita was devastated. He later said, people seemed unwilling to believe that we had actually made an image by bending x-rays, and they tended to regard the whole thing as a big fish story.

</details>

**旁白**: 没有人相信这是一种可行的前进方向，不幸的是，这种反应至少在某种程度上是合理的。首先，这种光线并非地球上任何自然物体产生。最接近的自然光源是太阳。我们基本上必须在地球上建造一个**人造太阳**。包括木下裕夫在内的大多数科学家都使用**粒子加速器**或**同步加速器**来产生X射线光。

<details>
<summary>Original English</summary>

**旁白**: Nobody believed that this was a viable way forward, and unfortunately, the reaction was at least somewhat justified. First, this light isn't naturally produced by anything on earth. The closest natural source is the sun. We had to basically build an **artificial sun** here on Earth. Most scientists, including Kinoshita, produced x-ray light using a **particle accelerator** or a **synchrotron**.

</details>

**受访者**: 它提供了巨大的能量。它有一个足球场那么大。你可以为整个晶圆厂提供燃料。问题是如果光线熄灭，整个晶圆厂都会停工。

<details>
<summary>Original English</summary>

**受访者**: It gives an enormous amount of power. It's as big as a soccer field. You can fuel the whole fab. The problem is if the light goes out, the whole fab goes out.

</details>

**旁白**: 所以每台机器都需要自己的电源。但即使你能产生光线，你也需要制造极其光滑的镜子来实际聚焦和打印那些微小特征。你需要宇宙中最光滑的物体。

<details>
<summary>Original English</summary>

**旁白**: So each machine needed its own power source. But even if you could produce the light, you'd need to make incredibly smooth mirrors to actually focus and print those tiny features. You would need the smoothest objects in the universe.

</details>

**旁白**: 好的，我有一个足球，一个弹力球和一条鹅卵石街道。你觉得我把它们扔下去会发生什么？足球基本上是垂直弹起，但弹力球却会射向一边。这是因为足球的表面相对平坦，而弹力球的表面则非常粗糙。镜子也会发生类似的事情。如果表面相对于波长来说非常粗糙，那么光线就会随机散射。现在它可能看起来很光滑，但如果你放大一面镜子，你会发现这样的东西，你会发现所有这些疯狂的凸起。现在要测量粗糙度，你需要做的是取这些凸起的平均值，这将给你一个平均线。对于普通的家用镜子，平均高度大约是**4000个硅原子**。但对于木下裕夫的镜子，它不仅需要反射波长短一百倍的X射线，还需要最大限度地减少散射，以便所有光子都能到达晶圆，它需要更光滑。它需要达到**原子级光滑**。事实上，平均凸起只能有大约**2.3个硅原子**厚。

<details>
<summary>Original English</summary>

**旁白**: Okay, so I got a football and I've got a bouncy ball and a cobblestone street. Now what do you think is gonna happen when I drop them? The football basically bounces straight up, but for the bouncy ball, it just shoots off to the side. And it's because the surface is relatively flat for the football, which is much larger, but it's super rough for the bouncy ball. And a similar thing happens with mirrors. If the surface is super rough compared to the size of the wavelength, then the light scatters randomly. Now it might look smooth, but if you zoom into a mirror, you find something that looks like this, you find all these crazy bumps. And now to measure the roughness, what you do is you take the average of these bumps and that will give you your mean line. Now, for a normal household mirror, the average height is about **4,000 silicon atoms**. But for Kinoshita's mirrors, which not only needed to reflect x-ray light, which has a hundred times shorter wavelength, but also needed to minimize scattering, you know, so that all the photons make it onto the wafer, it needed to be way more smooth. It needed to be **atomically smooth**. In fact, the average bump could only about **2.3 silicon atoms** thick.

</details>

**受访者**: 如果一面镜子有德国那么大，最大的凸起也只有大约一毫米高。

<details>
<summary>Original English</summary>

**受访者**: If one mirror would be the size of Germany, the biggest bump would be about a millimeter high.

</details>

**旁白**: 但木下裕夫拒绝放弃。

<details>
<summary>Original English</summary>

**旁白**: But Kinoshita refused to give up.

</details>

**木下裕夫**: 然而，我的信念没有改变。

<details>
<summary>Original English</summary>

**Hiroo Kinoshita**: However, my belief did not change.

</details>

**旁白**: 很快，帮助将从一个意想不到的地方到来。

<details>
<summary>Original English</summary>

**旁白**: And soon help would come from an unlikely place.

</details>

### 美国政府的介入与EUV的诞生

**旁白**: 太平洋彼岸，旧金山以东约70公里处，是**劳伦斯利弗莫尔国家实验室 (Lawrence Livermore National Lab)**，一个诞生于冷战时期，由美国政府大量资助，并仅为一个目的而建立的实验室：**核武器**。该实验室由回旋加速器发明者**欧内斯特·劳伦斯 (Ernest Lawrence)** 和氢弹之父**爱德华·泰勒 (Edward Teller)** 创立。在其存续期间，他们设计了超过10种聚变型核弹头。因此，他们的部分研究集中在核聚变反应内部发生的情况。聚变反应释放出大量的X射线光，这种光他们以前从未能够捕获和分析。但现在，使用那些特殊的多层镜，就有机会了。

<details>
<summary>Original English</summary>

**旁白**: Across the Pacific around 70 kilometers east of San Francisco is **Lawrence Livermore National Lab**, a lab that was born outta the Cold War, heavily funded by the US government, and built for one purpose and one purpose only. **Nuclear weapons**. The lab was founded by the inventor of the cyclotron, **Ernest Lawrence**, and the father of the hydrogen bomb **Edward Teller**. And over its lifetime, they designed over 10 fusion type nuclear warheads. So part of their research focused on what happens inside nuclear fusion reactions. Fusion reactions released a lot of x-ray light, light that they had never been able to capture and analyze. But now, using those special multilayer mirrors, there was a chance

</details>

**旁白**: 负责这项工作的科学家之一是**安德鲁·霍里卢克 (Andrew Hawryluk)**。几年内，他和他的团队使用多层镜反射了一些X射线光。但在1987年，安迪接待了来自**康奈尔大学**的一位教授的访问。

<details>
<summary>Original English</summary>

**旁白**: One of the scientists tasked with making this work was **Andrew Hawryluk**. And within a few years, he and his team used multilayer mirrors to reflect some X-ray light. But then in 1987, Andy got a visit from a professor from **Cornell**.

</details>

**安德鲁·霍里卢克**: 他对我们开发的技术印象深刻。那天结束时，他看着我，说：“这一切都很有趣，也很巧妙。”但他说的那些话，我将铭记终生：“你们能用这些东西做些有用的事情吗？”那是1987年圣诞节假期前一天。我被那句话激怒了，回家后，接下来的10天里，我写了一份多页的白皮书。

<details>
<summary>Original English</summary>

**Andrew Hawryluk**: He was very impressed with the technologies that we developed. And he looked at me at the end of the day and said, this is all very interesting and very neat and stuff. But his words, that I'll remember it to the day I die, was, can you do anything useful with this stuff? And this was the day before a Christmas shutdown in 1987. And I was so inflamed by that, that comment that I went home and for the next 10 days, I wrote up a multi-page white paper.

</details>

**旁白**: 大约五个月后，他将这些镜子应用于光刻技术，用X射线打印芯片。他在一次会议上展示了他的发现。但和木下裕夫一样，他没有得到他所期望的回应。

<details>
<summary>Original English</summary>

**旁白**: He applied these mirrors to lithography, to print chips using x-rays around five months later. And he presented his findings at a conference. But like Kinoshita, it was not the response he was hoping for.

</details>

**安德鲁·霍里卢克**: 那是非常负面的。那是我职业生涯的低谷。我简直是被嘲笑下台的。我向你保证，我所敬仰的领域里的每个人，他们都在听我的演讲，然后走到麦克风前，基本上告诉我为什么它行不通，这个想法有多么愚蠢。那周晚些时候，我飞回去了，接下来的周一，我的老板问我：“怎么样了？”我看着他说：“我再也不会提起这件事了。”

<details>
<summary>Original English</summary>

**Andrew Hawryluk**: It was extremely negative. That was the low point in my career. I was literally laughed off the stage. And I kid you not every person who I looked up to in the field, they were listening to my talk and they came up to the microphone and told me basically why it wouldn't work, how stupid an idea it was. Later that week, I flew back and the following Monday, my boss asked me, how did it go? And I looked at him and I said, I will never speak of it again.

</details>

**旁白**: 但三天后，他接到了来自**贝尔实验室 (Bell Labs)** 的**比尔·布林克曼 (Bill Brinkman)** 的电话。

<details>
<summary>Original English</summary>

**旁白**: But then three days later, he gets a phone call from someone named **Bill Brinkman** from **Bell Labs**.

</details>

**安德鲁·霍里卢克**: 于是我走到老板面前说：“刚接到一个叫比尔·布林克曼的电话，你认识他吗？”我老板的眼睛都瞪大了，说：“当然，他是**美国电话电报公司 (AT&T)** 的执行副总裁。”我说：“他刚打电话给我，让我飞到新泽西去演讲。”我老板的反应说明了一切。他基本上说：“好吧，你必须去。”

<details>
<summary>Original English</summary>

**Andrew Hawryluk**: And so I walked over to my boss and I said, just got this phone call from a guy named Bill Brinkman, do you know who he is? And my boss's eyes popped open and said, of, yeah, and he's the executive vice president of **AT&T**. And I said, well, he just called me and asked me to fly out to New Jersey and give a talk. The response from my boss said it all. He basically said, well, you, you gotta go.

</details>

**旁白**: 在贝尔实验室，他找到了志同道合的伙伴，这来得正是时候。在过去的30年里，美国政府向国家实验室投入了数十亿美元，以在冷战期间保持国家的技术优势。但到1980年代末，冷战逐渐平息，所有这些实验室都拥有具有商业潜力的研究成果。因此，政府鼓励实验室与美国公司合作，将研究成果转化为产品，刺激经济。政府随后会提供启动资金。于是贝尔实验室与安迪的实验室以及另外两个实验室合作，继续开发X射线光刻技术。到1993年，第一届X射线光刻国际会议在日本富士山附近举行。在开幕致辞中，木下裕夫说，只要我们不失去内心涌出的渴望，技术就会稳步从微米级发展到纳米级，再到皮米级。他们甚至给这项技术起了一个新名字：**极紫外光刻 (Extreme Ultraviolet Lithography)**，简称**EUV**。

<details>
<summary>Original English</summary>

**旁白**: At **Bell Labs** found fellow believers and it couldn't have come at a better time. Over the past 30 years, the US government had invested billions of dollars into national labs to maintain the country's technological edge during the Cold War. But by the late 1980s, the Cold War was slowing down and all these labs were sitting on research that had commercial potential. So the government encouraged the labs to partner with US companies to turn that research into products and to stimulate the economy. And the government would then supply seed money. And so **Bell Labs** partnered with Andy's labs and two others to keep developing x-ray lithography. And by 1993, the first international conference for x-ray lithography was held in Japan near Mount Fuji. In the opening address, Kinoshita said that as long as we do not lose the desire that has sprung from within us, technology will steadily advance from the micro to the nano to the pico. They even gave the technology a new name, **extreme ultraviolet lithography** or just **EUV**.

</details>

### 商业化之路：原型机与ASML的崛起

**旁白**: 但在1996年，美国政府削减了该项目的资金。这对**英特尔**等大型芯片公司来说是灾难性的。业界估计，**193纳米光刻工具**将在2005年落后于摩尔定律，但当时没有其他替代方案。于是，**英特尔**、**摩托罗拉 (Motorola)**、**AMD** 等公司联合起来，投资了**2.5亿美元**以维持其发展，这是私营企业对**能源部**研究项目有史以来最大的一笔投资。到2000年，这些实验室生产出了**工程测试台 (Engineering Test Stand)**。这是第一个完全功能的**EUV原型机**。它产生了**9.8瓦**的**13.4纳米EUV光**，然后通过八面镜子从光源反射到掩模，再到晶圆。它可以打印**70纳米**的特征，并证明了EUV是可行的。

<details>
<summary>Original English</summary>

**旁白**: But then in 1996, the US government cut funding for the project. This spelled disaster for the big chip companies like **Intel**, the industry estimated that the **193 nanometer lithography tools** would fall behind Moore's Law by 2005, but there were no other alternatives. So **Intel**, **Motorola**, **AMD** and other companies got together and invested **$250 million** to keep it going, making it the largest investment ever by private industry in a **Department of Energy** research project. By the year 2000, the labs had produced this, the **engineering test stand**. It was the first fully functioning **EUV prototype**. It produced **9.8 watts** of **13.4 nanometer EUV light**, which was then reflected by eight mirrors from the source to the mask to the wafer. It could print **70 nanometer** features and it proved that EUV could work.

</details>

**受访者**: 让**工程测试台**投入运行是一个里程碑。它向**英特尔**这样的人证明，优秀的工程技术将带我们走向成功。

<details>
<summary>Original English</summary>

**受访者**: It was a milestone to get the engineering test stand to work. It demonstrated to people like **Intel** that, you know, good engineering will get us there.

</details>

**旁白**: 那么，既然有了原型机，商业化应该不难吧？

<details>
<summary>Original English</summary>

**旁白**: And then it seems like you've got the prototype shouldn't be too hard to then commercialize it.

</details>

**受访者**: 他们就是这么想的。

<details>
<summary>Original English</summary>

**受访者**: That's what they thought.

</details>

**旁白**: 但原型机有一个重大缺陷。它每小时只能打印大约**10片晶圆**。而要使EUV在经济上可行，它必须每年365天、每天24小时、每小时打印数百片晶圆。产量如此缓慢的主要原因是光线从八面镜子和掩模版（它也是一面印有设计的镜子）反射。传统的透射式掩模不起作用，因为它们会吸收所有光线。每面镜子的反射率约为**70%**，这已接近最大值，但经过九次反射后，只剩下4%的光线。这意味着每100个光子中，只有4个能到达晶圆。所以你可能会想，少用几面镜子不就行了？但这只在一定程度上有效。当你用任何光学系统聚焦光线时，总会产生一些**畸变**。例如，穿过大多数透镜外边缘的光线与靠近中心的光线聚焦方式略有不同。这被称为**球差**。普通相机通过使用多个透镜来校正球差和其他像差。镜面系统也一样。

<details>
<summary>Original English</summary>

**旁白**: But the prototype had a major flaw. It could only print about **10 wafers per hour**. And to make EUV economically viable, it would have to print hundreds of wafers per hour 24/7, 365 days a year. The main reason output was so slow was because the light reflected off of eight mirrors and the reticle, which is also a mirror just with the design imprinted. Traditional masks that allow light to pass through don't work because well, they absorb all the light. Each mirror had a reflectivity of around **70%**, which is close to the max, but after nine bounces, you are only left with **4%** of the light, which means that out of every 100 photons, only four make it to the wafer. So you might think just use way fewer mirrors, but that only works up to a point. When you focus light with any optical system, you always get some distortion. For example, ray's that pass through the outer edges of most lenses. Focus light slightly different from those near the center. This is called **spherical aberration**. And normal cameras correct for this and other aberrations by using multiple lenses. And a mirror system is no different.

</details>

**受访者**: 你需要一定数量的镜子，才能说我已经控制了像差。实际上，今天的系统有六面镜子。

<details>
<summary>Original English</summary>

**受访者**: You need to have a certain amount of mirrors before you can say, I have my aberrations under control. In reality, the systems of today have, have, have six mirrors

</details>

**旁白**: 这有点帮助。但经过六面镜子和掩模版的反射后，你仍然只剩下大约**8%**的光线。所以他们需要大幅增加光源功率，至少达到**100瓦**。对于大多数公司来说，这种十倍的增长似乎是不可能的。即使是参与工程测试的人也指出，虽然EUV技术本身已经成熟，但要使其成为生产线上的现实，还有数不清的工程挑战。因此，美国公司一个接一个地放弃了开发完整的紫外光刻机，只剩下**ASML**一家公司。

<details>
<summary>Original English</summary>

**旁白**: That helps a little. But after reflecting off six mirrors and the reticle, you are still only left with around **8%** of your light. So they needed to drastically increase the source power to at least a **hundred watts**. Now to most companies, that tenfold increase seemed impossible. Even people who worked on the engineering test noted that while EUV technology itself is a done deal, there were six zillion engineering challenges to make it a fab line reality. And so one by one American companies walked away from developing a full UV lithography machine that left just one company, **ASML**.

</details>

### ASML的坚持与技术突破

**旁白**: **ASML**，以前代表“先进半导体材料光刻”，位于荷兰一个不起眼的小镇。它在1980年代从**飞利浦 (Philips)** 分离出来，当时只有一间简陋的棚屋和一台勉强能用的晶圆步进机。但飞利浦也给了他们人才，**乔斯·本肖普 (Jos Benschop)**，ASML的第一位研究员，以及**马丁·范登布林克 (Martin van den Brink)**，他最终成为ASML的首席技术官，也是EUV最伟大的倡导者。

<details>
<summary>Original English</summary>

**旁白**: **ASML**, which used to stand for advanced semiconductor materials lithography, is located in a small nondescript town in the Netherlands. It spun off from **Philips** back in the eighties with little more than a shed and a barely working wafer stepper to its name. But Phillips also gave them people, **Jos Benschop**, ASML's first researcher and **Martin van den Brink**, who would eventually become ASML's CTO, and EUV's greatest champion.

</details>

**受访者**: 他真的就像光刻界的**史蒂夫·乔布斯 (Steve Jobs)**。他预见了EUV的到来。

<details>
<summary>Original English</summary>

**受访者**: And he is really like the **Steve Jobs** of lithography. And he saw EUV coming

</details>

**旁白**: **ASML**早些时候加入了美国EUV联盟，现在他们的任务是找到EUV商业化的方法。他们将与德国合作伙伴**蔡司 (Zeiss)** 合作，蔡司负责镜子，ASML则专注于光源。制造任何光刻系统时，第一个决定就是选择使用哪个波长。

<details>
<summary>Original English</summary>

**旁白**: **ASML** had joined the US EUV consortium earlier and now it became their task to find a way to commercialize EUV. They would work together with their German partner **Zeiss**, where Zeiss would take care of the mirrors, and ASML would focus on the light source. One of the first decisions when making any lithography system is deciding which wavelength to use.

</details>

**受访者**: 在早期，**5到14纳米**之间的任何波长都曾被探索。问题是，你需要找到一个光源，并且需要找到能够反射这些波长的光学器件。

<details>
<summary>Original English</summary>

**受访者**: In the early days, anything between five and 14 nanometers was, was explored. The thing is you need to find a source and you need to find optics that reflect the wavelengths.

</details>

**旁白**: 对。

<details>
<summary>Original English</summary>

**旁白**: Right.

</details>

**受访者**: 所以你必须寻找组合。

<details>
<summary>Original English</summary>

**受访者**: So you have to look for the combination.

</details>

**旁白**: **安德伍德**和**巴比**已经制造出了可以反射大约**4纳米**光线的镜子。由于这个波长非常小，它似乎是显而易见的选择，但这些镜子的最大反射率只有大约**20%**。所以经过六面镜子和掩模版的反射后，你只剩下**0.00128%**的光线，这太低了。幸运的是，进一步的研究也关注了另外两对材料：**硅**和**钼**，它们对大约**13纳米**波长光的理论最大反射率为**70%**；以及**钼**和**铍**，它们对大约**11纳米**波长光的理论最大反射率为**80%**。所以选择似乎很明显，对吧？我的意思是，选择更短的波长和更高的反射率。但事实证明，**铍**具有剧毒，而且难以处理。所以科学家们转而专注于**硅**和**钼**。为了制造镜子，蔡司使用了一种称为**溅射 (sputtering)** 的工艺。涂层材料的靶材受到等离子体或离子的轰击，导致原子被喷射出来，飞离并附着在镜子上。这是一个混乱的过程，所以层最终会有凸起和间隙。

<details>
<summary>Original English</summary>

**旁白**: **Underwood** and **Barbee** had already made mirrors that could reflect light of around **four nanometers**. And since that wavelength is so small, it seems like the obvious choice, but the maximum reflectivity for those mirrors was only around **20%**. So after hitting six mirrors and the reticle, you are just left with **0.00128%** of the light, which is way too low. Fortunately, further researchers also looked at two other pairs, **silicon** and **molybdenum**, which had a theoretical maximum reflectivity of **70%** for wavelengths around **13 nanometers** and **molybdenum** and **beryllium** with a theoretical maximum reflectivity of **80%** for wavelengths around **11 nanometers**. So the choice seemed obvious, right? I mean, pick the shorter wavelength and the higher reflectivity, but it turns out that **beryllium** is extremely toxic and it's also difficult to handle. So scientists focused on **silicon** and **molybdenum** instead To make the mirrors, **Zeiss** used a process called **sputtering**. A target of coating material is bombarded with either plasma or ions causing atoms to be ejected, fly off and stick to the mirror. This is a messy process, so the layers end up having bumps and gaps.

</details>

**受访者**: 荷兰的团队用**离子束**完善了一个很棒的技巧。你只需轻轻摇晃它，直到原子落入它需要进入的孔洞中，然后就完全平坦了。

<details>
<summary>Original English</summary>

**受访者**: There was a nice trick that actually the team in the Netherlands perfected with **ion beam**. You just shake it a little bit until the atoms falls in the hole where it needs to be and then it's all flat

</details>

**旁白**: 镜子设计确定后，**ASML**需要一个特定波长的光源。

<details>
<summary>Original English</summary>

**旁白**: With the mirror design locked in **ASML** needed a source for that specific wavelength.

</details>

**受访者**: 所以是13点X。是的。好的。现在下一个好问题是X是什么？现在你寻找光源。基本上有三种方法可以产生EUV，在地球上建造一个太阳。第一种方法，早期研究人员使用的，是**同步加速器**，但它很快就被淘汰了，因为每台机器都需要自己的光源。另外两种方法基于相同的原理。当电子与离子复合时，离子会降到较低的能级，并将多余的能量以**光子**的形式释放出来。如果你选择的离子恰到好处，那么这个光子就会具有你需要的精确波长。现在，有两种方法可以产生这些离子。第一种是你取一种金属，将其加热直到产生金属蒸汽，然后施加一个强电场。这会导致自由电子撞击附近的原子并使其**电离**。如果你然后关闭电场，电子会与离子复合并产生光。这就是**放电等离子体 (discharge produced plasma)**。

<details>
<summary>Original English</summary>

**受访者**: So it was 13 point x. Yeah. Okay. Now the next good question is what's the X? Now you look for the, now you look for the source. So there are basically three ways to generate EUV to build a sun on Earth. The first method, which early researchers used was the **synchrotron**, but it was quickly rolled out because each machine needed its own source. The other two methods are based on the same principle. When an electron recombines with an ion, the ion drops to a lower energy level and it releases that excess energy as a **photon**. And if you choose the ion just right, then that photon will have exactly the wavelength you need. Now, there are two ways you can create those ions. The first is you take a metal, heat it up until you get a metal vapor, and then you apply a strong electric field across it. This causes free electrons to knock into nearby atoms and ionize them. If you then turn off the electric field, the electrons recombine with the ions and produce light. This is **discharge produced plasma**.

</details>

**受访者**: 这是我们首先使用的概念，因为它相对简单。我们很快就达到了几瓦的功率。我们想达到100瓦，但我们为此奋斗了很久。

<details>
<summary>Original English</summary>

**受访者**: That's the concept we use first. Because of its relative simplicity. And we quickly got into a few watts. We wanted to get a hundred watts and we struggled forever.

</details>

**旁白**: 所以你无法扩展它。

<details>
<summary>Original English</summary>

**旁白**: So you couldn't scale it.

</details>

**受访者**: 我们无法扩展它。

<details>
<summary>Original English</summary>

**受访者**: We could not scale it.

</details>

**旁白**: 他们需要一个彻底的改变。所以他们转向了第二种方法。这种方法使用**高功率激光**击中目标材料，产生一个温度超过**220,000摄氏度**的**等离子体**。电子拥有如此大的能量，以至于原子核无法再 удержи住它们，多达14个电子会逃离轨道。激光关闭后，电子和离子重新结合产生光。这就是**激光等离子体 (laser produced plasma)**，它是唯一看起来可扩展的方法。事实上，这与**工程测试台**使用的方法相同。一个**1700瓦**的激光器射入**氙气**流中，产生**13.4纳米**的光。但氙气有一个大问题。转换效率，也就是可用光与输入功率之比，非常糟糕，只有大约**0.5%**。这是因为氙气确实在**13到14纳米**范围内发光，但在**11纳米**左右释放的光线更多。所以大部分能量都用于制造镜子无法反射的光。此外，激光并没有使所有原子电离。所以残留的中性氙原子会强烈地重新吸收一部分**13.4纳米**的光。因此，**ASML**开始寻找另一种材料：**锡**。锡在**13.5纳米**左右有一个更高的发射峰值，这使得转换效率比氙气高出**5到10倍**。但就像氙气一样，中性锡原子也会吸收EUV光。所以他们想出了一个疯狂的主意：一次只发射一小滴锡。但要获得所需的功率，你必须每秒制造并击中数千滴液滴，所有这些液滴都必须具有完全相同的形状和大小。但事实证明，你无法立即制造出数千滴完全相同的锡液滴。所以他们找到了一个解决方案。

<details>
<summary>Original English</summary>

**旁白**: They needed a drastic change. So they switched to the second method. This method uses a **high powered laser** to hit a target material creating a **plasma** that's more than **220,000 degrees Celsius** hot. The electrons have so much energy that the nucleus can't hold onto them anymore, and up to 14 electrons escape their orbits after the laser shuts off the electrons and ions recombine to produce light. This is **laser produced plasma** and it was the only method that seemed scalable. In fact, this was the same method that the **engineering test stand** used. A **1700 watt laser** fired into a stream of **xenon gas** to produce **13.4 nanometer lights**. But Xenon had a big problem. The conversion efficiency that is the ratio of usable lights to the amount of power you put in was terrible. It was only around **0.5%**. That's because Xenon does emit light in the **13 to 14 nanometer** range. There's much more light released around **11 nanometers**. So most of the energy went into making light that the mirrors couldn't reflect. Plus the laser didn't ionize all the atoms. So leftover neutral, Xenon atoms would strongly reabsorb some of that **13.4 nanometer light**. So **ASML** started looking at another material, **tin**. Now tin has a much higher emission peak around **13.5 nanometers**, which results in a **five to 10 times higher conversion efficiency** than Xenon. But just like Xenon neutral tin atoms also absorb EUV light. So they came up with a crazy idea to shoot one tiny tin droplet at a time. But to get the required power, you would have to make and hit thousands of droplets every second, all of which have to be the exact same shape and size. But it turns out that you can't instantly make thousands of tin droplets that are the exact same. So they found a workaround.

</details>

### 锡液滴的精准控制

**旁白**: 为了制造液滴，将极纯的**锡**熔化，并通过高压**氮气**将其推过一个微小的喷嘴。这个喷嘴以高频率振动，将液流分解成微小的液滴。这些液滴的大小、形状、速度和距离都不规则，整个过程是混乱的。

<details>
<summary>Original English</summary>

**旁白**: To make the droplets, extremely pure tin is melted and pushed through a microscopic nole by high pressure nitrogen. This nozzle vibrates at a high frequency, breaking the stream into tiny droplets. These droplets are irregular in size, shape, velocity, and distance, and the whole process is chaotic.

</details>

**受访者**: 这就像我们的“魔法酱”一样，你如何调节锡射流？这样才能形成我们想要的稳定液滴。

<details>
<summary>Original English</summary>

**受访者**: That's like our magic sauce is how do you modulate that tin jet? So that forms the droplets we want and that they're stable.

</details>

**旁白**: 我想我们找到了一些描述这个过程的论文，这让我大开眼界，似乎所有的液滴从喷嘴出来时都是不规则的，但在它们到达被激光击中的一侧之前，那些不规则的小液滴会聚集在一起，形成完美间隔、完美规则的液滴，它们的大小和形状大致相同，并且都以相同的速度移动。这对我来说简直是魔法，**杰森 (Jason)**。

<details>
<summary>Original English</summary>

**旁白**: I think we found some paper that describe this process and it was sort of eyeopening to me that it seems like all the droplets actually come out irregular out of the nozzle, but then before they reach the side where they get hit by the laser, like the little irregular droplets come together to form these perfectly spaced, perfectly regular droplets that are about the same size and shape and all traveling at the same velocity. That feels like magic to me, Jason.

</details>

**受访者**: 是的，就是这样。就是你如何将一股想要分解成所有这些不规则液滴的长锡射流，强制它坍缩成一个单一的液滴，然后一次又一次地发生。

<details>
<summary>Original English</summary>

**受访者**: Yeah, it's, it's exactly that. It's how do you take a long stream of a tin jet that wants to break up into all these irregular droplets and like force onto it that is gonna collapse into a single droplet and then happen again and again and again.

</details>

**旁白**: 你也没有那么多变量可以玩。你只有推出锡的压力和喷嘴的频率。是的，这似乎是一个很难解决的问题。

<details>
<summary>Original English</summary>

**旁白**: You also don't have that many variables to play with. You've got the pressure with which you push out the tin and at the frequency of the nozzle. Yeah, it seems like a hard problem to solve.

</details>

**受访者**: 没有太多变量可以玩。所以掌握射流的调制，就是我们制造液滴的方式。

<details>
<summary>Original English</summary>

**受访者**: There's not a whole lot of variables to play with. And so mastering that modulation of the jet is, is how we make the droplets.

</details>

**旁白**: 但这些液滴不仅必须完全相同，它们还必须以极快的速度移动。

<details>
<summary>Original English</summary>

**旁白**: But these droplets not only have to be identical, they have to be moving incredibly fast.

</details>

**受访者**: 如果下一个液滴离得太近，它实际上会受到干扰，并扰乱下一次等离子体事件。所以我们有一个要求，就是我们每秒制造**50,000个液滴**，而且它们必须以极快的速度移动。

<details>
<summary>Original English</summary>

**受访者**: What will happen is if the next droplet that's coming down the line is too close, then it'll actually get like disturbed and mess up the next plasma event. So we have a requirement which is both that we make **50,000 droplets per second**, but also that they're traveling extremely fast.

</details>

**旁白**: 到2011年，他们的**激光等离子体光源**达到了**11瓦**，是他们之前光源功率的两倍多。但他们仍然受限于每小时只能处理**5片晶圆**。所以他们需要快速增加功率，因为他们承诺到2011年底将达到每小时**60片晶圆**。不幸的是，这种新方法有一个重大缺陷。

<details>
<summary>Original English</summary>

**旁白**: By 2011, their **laser produced plasma source** reached **11 watts**, which was more than double what they managed with their previous source. But they were still limited to just **five wafers per hour**. So they needed to increase the power and fast because they promised they'd hit **60 wafers per hour** by the end of 2011. Unfortunately, this new method had a major flaw.

</details>

### 锡碎片管理与“迷你超新星”

**旁白**: 现在锡的问题是，你击中液滴，产生EUV，转换效率相当不错。但是锡去了哪里？因为大约30厘米外，你有我们**蔡司**朋友那里来的原子级平坦、非常漂亮、非常昂贵的镜子。在早期，我们就会像这样把东西涂上。

<details>
<summary>Original English</summary>

**旁白**: Now the problem with the tin issue, you hit the droplet, you generate EUV, with a very decent conversion efficiency. Where does the tin go? Because like, you know, 30 centimeters away. You have this atomically flat, very beautiful, very expensive, mirror from our friends at **ZEISS** And in the early days we would coat the thing within like this.

</details>

**受访者**: 这些机器需要运行一年。你通过这个等离子体事件输入数升的锡，如果一纳米的锡落在那个收集镜上，你就不得不让收集器停止工作。我们需要让它几乎完美清洁一年。

<details>
<summary>Original English</summary>

**受访者**: These machines need to run for a year. You're putting liters of tin through this plasma event and a single nanometer of tin. If it was to land on that collector mirror, you'd have to take a collector outta commission. We need to keep it almost perfectly clean for, for a year.

</details>

**旁白**: 是的。你甚至如何解决这个问题？

<details>
<summary>Original English</summary>

**旁白**: Yeah. How do you even approach that?

</details>

**受访者**: 所以我们这里的主要工具实际上是**氢气**。

<details>
<summary>Original English</summary>

**受访者**: So our, our, our main tool here is the **hydrogen gas** actually.

</details>

**旁白**: 他们用低压**氢气**充满腔室。这会减慢并冷却锡颗粒。即使有些锡到达收集器，氢气也会将其拉走，形成一种叫做**氢化锡 (stannane)** 的气体。这样，机器在运行时就能清洁收集器。但氢气也会因所有这些锡爆炸而变热。所以他们需要不断地向系统中注入新的、更冷的氢气，同时排出氢化锡和更热的气体。但他们必须精确控制压力和流速。氢气太少，镜子就会变得太脏；但氢气太多，不仅会吸收过多的EUV光，还会导致系统过热。

<details>
<summary>Original English</summary>

**旁白**: They fill the chamber with low pressure hydrogen. This slows and cools the tin particles down. And even if some tin makes it to the collector, the hydrogen pulls it off to form a gas called **stannane**. This way the machine cleans the collectors while it's running. But that hydrogen gas also gets hot from all those tin explosions. So they need to keep flushing new, cooler hydrogen into the system while flushing out the stannane and hotter gas. But they have to get the pressure and the flow rate just right. I mean too little hydrogen and the mirrors would get too dirty, but too much hydrogen would not only absorb too much EUV light, but it would also cause the system to overheat.

</details>

**受访者**: 但问题是，有多少热量？有多少能量沉积在气体中？我们困惑了相当长一段时间。如果你看一个EUV光源，你会看到它有点像一个紫红色的光球，你可能会问自己，为什么会这样？所以我们买了一台超高速相机。我们意识到，每次等离子体事件后，都会有一个**冲击波**向氢气中传播，而且它具有极高的重复性。你会想，这一定有一个解释。有一个公式，**泰勒-冯·诺伊曼-塞多夫公式 (Taylor–von Neumann–Sedov formula)**，它解释了环境中点源爆炸，就像核爆炸到超新星一样。所以我拿了这个公式，它精确地描述了数据。我们看到这些微小的**“迷你超新星”**每秒在我们的容器中发生**50,000次**，这真是太棒了。

<details>
<summary>Original English</summary>

**受访者**: But the question is how much heat is there? How much energy is being deposited into the gas? And we were stumped for quite some time. If you look at a EUV light source, what you'll see is that it's, it's kinda like a globe of like purple-ish red light and you kinda ask yourself like, why is that happening? So we bought an ultra fast camera. What we realized is that after every plasma event, there's a **shockwave** that goes propagating out into the hydrogen gas and it's extremely repeatable. And you think to yourself, there must be like an explanation for this. And there's this formula, the **Taylor–von Neumann–Sedov formula** that explains point source explosions in an environment and like say a nuclear blast out to like supernova. So I took this formula, it like exactly describes the data. It's just fantastic that we're seeing these like little tiny little **supernovas** happening in our vessel **50,000 times a second**.

</details>

**旁白**: 那么，将其视为制造“迷你超新星”是否公平？

<details>
<summary>Original English</summary>

**旁白**: And is that a fair way to think about this, like creating mini supernova?

</details>

**受访者**: 是的，实际上非常相似。它几乎就像**Ia型超新星**一样。事实证明，你有一个物体完全蒸发并爆炸。当所有这些能量进入氢气时，它会产生一个冲击波，一个爆炸波，它会飞出来，这基本上是一回事。如果你仰望夜空，你会看到这些来自太空的**超新星遗迹**。

<details>
<summary>Original English</summary>

**受访者**: Yeah, it's actually pretty similar. It's almost like very similar to a, like a **type one A supernova**. It turns out where you kind of have an object that just fully evaporates and explodes apart. And when all that energy goes into the hydrogen gas, it produces a a shock wave, a blast wave that comes flying out, which is basically the same thing. If you look up in the night sky, there are these like remnants supernovas that you can see coming from space.

</details>

### 极致精度与高NA机器的挑战

**旁白**: 利用这些能量计算，他们发现需要以极高的速度冲洗氢气，大约每小时**360公里**。这比五级飓风还要快，即使这些速度是在低密度下。但2012年过去了，他们仍然没有足够的功率。事实上，到2013年，**ASML**通过每秒发射**50,000个锡液滴**才刚刚达到**50瓦**。但这种增加的功率是有代价的，因为更大的功率意味着更多的热量。热量最终会轻微移动镜子，导致光线未对准和芯片层未对准。所以**蔡司**直接在光学系统中内置了一个**“神经系统”**：由机器人引导的传感器，持续测量每个镜子的精确位置和角度，精确到纳米和**皮弧度 (pico radian)**，这简直是疯了。

<details>
<summary>Original English</summary>

**旁白**: Using those energy calculations, they discovered they needed to flush the hydrogen at incredibly high speeds around **360 kilometers per hour**. That's more than a category five hurricane, even if you know those speeds are at low density. But 2012 came and went and they still didn't have enough power. In fact, by 2013, **ASML** just reached **50 watts** by shooting **50,000 tin droplets per second**. But this increased power came at a price because more power means more heat. Heat that ends up slightly shifting the mirrors resulting in misaligned light and misaligned chip layers. So **ZEISS** built a nervous system directly into the optics robot guided sensors that constantly measure the exact position and angle of each mirror down to the nanometer at the **pico radian**, which is absolutely insane.

</details>

**受访者**: 那么我们需要多精确地控制这面镜子呢？现在你可以做一个思想实验。我可以在这面镜子旁边放一个小激光，然后我们一直走到月球，在那里放一个硬币。然后这束光线一直传播到那里，凭借我控制这面镜子的精度。

<details>
<summary>Original English</summary>

**受访者**: So how accurate do we need to control this mirror? Now one of the things you can do a thought experiment. And I can place a little laser on the side of this mirror, then we go all the way to the moon and we put a dime here. So then this light travels all the way here and then with the accuracy, I can control this mirror.

</details>

**旁白**: 是的。

<details>
<summary>Original English</summary>

**旁白**: Yes.

</details>

**受访者**: 我可以决定是瞄准硬币的这一侧，还是瞄准硬币的另一侧。

<details>
<summary>Original English</summary>

**受访者**: I can decide whether I point to this side of the dime or whether I point to this side of the dime.

</details>

**旁白**: 什么？这太疯狂了。

<details>
<summary>Original English</summary>

**旁白**: What? That's crazy.

</details>

**受访者**: 所以你可以看到指向精度，那也是以皮弧度计量的。那是非常极端的。

<details>
<summary>Original English</summary>

**受访者**: So you can see that the pointing accuracy is that's also in in pico radians. That is something very extreme.

</details>

**旁白**: 这使他们即使在功率增加时也能控制光线。当**蔡司**在光学方面做得出色时，**ASML**仍在为电源而苦苦挣扎。问题是锡液滴太致密，这意味着大部分发射的EUV光在到达收集镜之前仍然被中性原子重新吸收。

<details>
<summary>Original English</summary>

**旁白**: This allowed them to control the light even when the power increased. While **Zeiss** was doing a stellar job with the optics, **ASML** was still struggling with the power source. The problem was that the tin droplets were too dense, meaning that most of the emitted EUV light was still getting reabsorbed by the neutral atoms before it could ever reach the collector mirror.

</details>

**受访者**: 我们轰击液滴的方式，光线不足，碎片太多。

<details>
<summary>Original English</summary>

**受访者**: The way we blasted the droplet was so not enough light, too much debris.

</details>

**旁白**: 更糟糕的是，他们预见到大约十年后，他们将需要新一代机器：一台**高NA EUV机器**，本质上是一个具有更大光学系统、可以打印更小特征的机器。那么他们做了什么？他们决定加倍投入，在当前一代机器尚未成功之前，就投资下一代。

<details>
<summary>Original English</summary>

**旁白**: To make matters worse. They could see that about 10 years from now, they would need a new generation of machine, a **high NA EUV machine**, essentially one with a larger optic system that could print smaller features. So what did they do? They decided to double down and invest in the next generation before they even got the current one to work.

</details>

**受访者**: 最令人怀疑的时期是在一开始。我从2012年开始从事这项工作。那时EUV还没有成功，而我这个疯子却在研究下一代，当时我们甚至连EUV光都无法首先制造出来。

<details>
<summary>Original English</summary>

**受访者**: The most doubtful period was in the beginning. So I started to work on this in 2012. By that time EUV was not working and there was this crazy idiot working on the next generation where we could not even make the EUV light in the first place.

</details>

**旁白**: 你不仅全力投入EUV，甚至在EUV是否能成功之前就加倍投入？

<details>
<summary>Original English</summary>

**旁白**: Not only are you all in on EUV, you're doubling down even before you know if EUV is gonna work.

</details>

**受访者**: 是的。

<details>
<summary>Original English</summary>

**受访者**: Yes.

</details>

**旁白**: 但为了继续资助开发，他们需要大量的资金。所以他们转向了那些最需要这项技术的人。

<details>
<summary>Original English</summary>

**旁白**: But to keep funding the development, they needed money and lots of it. So they turned to the very, who needed this technology

</details>

**旁白**: **ASML**联系了其主要客户：“好的，你们想要这项技术用于下一代芯片吗？那么，你们需要通过投资我们，让我们能够投入更多资金。”

<details>
<summary>Original English</summary>

**旁白**: **ASML** reached out to its main customers. Okay, you want this technology for the next generation of chips? Well, you need to make us able to invest more by investing in us.

</details>

**旁白**: **英特尔**投资了大约**41亿美元**，**三星 (Samsung)** 和**台积电 (TSMC)** 合计又投资了**13亿美元**。这样他们就可以继续研究，但由于没有产品可展示，客户的耐心正在耗尽。

<details>
<summary>Original English</summary>

**旁白**: **Intel** invested around **$4.1 billion** and **Samsung** and **TSMC** in invested another **1.3 billion** combined. So they can keep the research going, but with no product to show customers were running out of patience.

</details>

**受访者**: 我们在每次会议上都被严厉批评，因为我们去年做出的承诺未能兑现。是的。他们说：“这是你们两年前展示的。这是你们去年展示的，这是你们今年告诉我的。那我为什么要相信你们？”

<details>
<summary>Original English</summary>

**受访者**: We were crucified at every conference that the promises we made last year we we were unable to live up to. Yeah. And they said, this is what you showed two years ago. This is what you showed last year and this is what you're telling me this year. So why would I believe you?

</details>

**旁白**: 他们变得绝望了。

<details>
<summary>Original English</summary>

**旁白**: They were getting desperate.

</details>

**受访者**: 但那是在2012年或2013年左右，我们正在努力提高EUV的功率，**木下裕夫**来拜访我们。我带他在附近的一个小镇吃了晚饭，餐厅对面有一座**玛丽亚教堂**。现在你知道，科学，我们已经达到了科学的极限。嘿，让我们寻求神助吧。所以我们去了教堂，木下裕夫为了安全起见，为当时正在研发EUV技术的三家供应商点了三支蜡烛。你瞧，我有数据可以证明，我们点蜡烛和功率上升之间存在非常强的相关性。

<details>
<summary>Original English</summary>

**受访者**: But this was, I think about 2012 or or 13, we were struggling to get the EUV power up and Kenoshita visited us. I took him to dinner in a small town nearby and across from the restaurant was a **Maria Chapel**. And now you know, science, we have come to the limits of science. Hey, let's go for divine intervention. So we went to the chapel so Kenoshita just to be safe lit three candles for the three suppliers that were pursuing EUV technology at the time. And lo and behold, and I have the data to prove it, there is a very strong correlation between us lighting the candle.

</details>

**旁白**: 好的。

<details>
<summary>Original English</summary>

**旁白**: Okay.

</details>

**受访者**: 功率上升。这不是因果关系，但有很强的相关性。

<details>
<summary>Original English</summary>

**受访者**: And power going up. It's not causal effect, but there is a strong correlation.

</details>

**旁白**: 他们的重大想法是，与其击中液滴一次，不如击中两次。

<details>
<summary>Original English</summary>

**旁白**: The big idea was instead of hitting the droplet once, hit it twice,

</details>

**受访者**: 一次击中液滴，它会膨胀成薄饼状。

<details>
<summary>Original English</summary>

**受访者**: One shot to hit the droplet and it expands in like a pancake shape.

</details>

**旁白**: 是的。

<details>
<summary>Original English</summary>

**旁白**: Yep.

</details>

**受访者**: 然后才进行第二次射击，更强大的主脉冲，在那里你蒸发薄饼并将其转化为等离子体。这是一个重大突破。

<details>
<summary>Original English</summary>

**受访者**: And then only then have the second shot, the more powerful main pulse where you evaporate the pancake and turn it into a plasma. This was a major breakthrough

</details>

**旁白**: 通过将目标从液滴变为薄饼，激光有了更大的表面积可以汽化，但又不会增加碎片或中性原子的成本，因为现在锡是一次性汽化的。到2014年，他们终于达到了梦寐以求的**100瓦**大关。但**193纳米多重图案化**技术的改进意味着，只有当光源达到至少**200瓦**并每小时处理**125片晶圆**时，EUV才会有用。

<details>
<summary>Original English</summary>

**旁白**: By changing the target from a droplet to a pancake. You got a larger surface area for the laser to vaporize, but without the cost of adding more debris or neutral atoms, because now the tin is vaporized all at once. By 2014, they finally managed to hit that coveted **100 watts** mark. But improvements in **multi patterning** with **193 nanometers** now meant that EUV would only be useful if the source reached at least **200 watts** and made **125 wafers per hour**.

</details>

**受访者**: 光源从100瓦增加到200瓦，但随着行业的发展，没有人会等你。他们会找到其他解决方案。我们必须迎头赶上。所以这是一个不断变化的目标。

<details>
<summary>Original English</summary>

**受访者**: The source went from a hundred to 200, but as the industry moved on, nobody waits for you. You know, they find other solutions. We had to catch up. So it was a moving goalpost.

</details>

**旁白**: 其中一个问题是如何完美地计时激光，以便击中每个液滴。

<details>
<summary>Original English</summary>

**旁白**: One of the problems was how do you perfectly time the laser so you hit each of these droplets.

</details>

**受访者**: 所以，这个比喻有点像高尔夫球，你需要让它落在200米外的洞里，不是落在果岭上，也不是弹跳进洞，而是每次都直接落入洞中。这就是我们输送液滴所需的精度水平。这些液滴正穿过像氢气流的漩涡。速度非常快，就像在高尔夫球穿过龙卷风，然后正好落在洞口时，它需要被激光击中。所以为了跟踪这些液滴，我们使用**激光幕**，我们可以观察液滴何时穿过激光幕。那些散射的光子基本上告诉我们液滴何时何地。然后重要的是告诉我们何时发射激光。所以我们实际上必须考虑光脉冲在发送后需要多长时间才能击中液滴。

<details>
<summary>Original English</summary>

**受访者**: So the, the analogy is a bit like a golf ball that you need to land in the hole 200 meters away, not like laying on the green, not bouncing and getting the hole, but like land in the hole every time. That's the level of precision that we need to deliver the droplets. Those droplets are traveling through this like maelstrom of hydrogen flow. The speeds are tremendously high, like shoot golf balls through a tornado and then right when it lands at the hole, that's when it needs to get hit by the laser. So in order to basically track the droplets for that, we use **laser curtains** and we can sort of look at when does the droplet pass through a laser curtain. Those scattered photons tell us basically when and where is the droplet. And then importantly tells us when to fire the laser. So we actually have to take into account how long will it take for the light pulse to hit the droplet after we send the pulse.

</details>

**旁白**: 到2015年，他们越来越接近梦寐以求的**200瓦**大关，突然间，**ASML**的董事会成员被召集起来。

<details>
<summary>Original English</summary>

**旁白**: Now by 2015, they were getting closer and closer to that coveted **200 watt** mark when all of a sudden the **ASML** board members got summoned.

</details>

**受访者**: 这是决定性的时刻之一，我们的客户耐心真的快耗尽了，**马丁 (Martin)** 和所有董事会成员都被召集到韩国，展示200瓦的成果，他们真的受够了。他们说，要么现在展示，要么就走人。当他们登上飞机时，实验仍在进行。

<details>
<summary>Original English</summary>

**受访者**: This was one of these decisive moments where our customers were really thin on patience and **Martin** and all the board members were summoned to Korea to show 200 watt and they were really fed up with it. You know, you either show it now or you you go away. And when they entered the plane, the experiment was still running.

</details>

**旁白**: 好的？

<details>
<summary>Original English</summary>

**旁白**: Okay?

</details>

**受访者**: 当他们下飞机时，他们得到了第一个结果，向所有人展示了我们有多接近成功。

<details>
<summary>Original English</summary>

**受访者**: When they exited the plane, they had the first result demonstrating to all about, this is how close we came

</details>

**旁白**: 随着光源功率的提高，在他们开始制造机器之前，还有一个最终问题需要解决。你看，虽然氢气确实保护了收集镜免受碎片影响，但它并不完美。所有那些强烈的高能光子和氢离子四处飞舞，会使收集器上非常特殊的顶层涂层劣化。所以他们仍然需要每10小时清洁一次镜子，这对于生产力来说非常糟糕。**马丁·范登布林克 (Martin van den Brink)** 每天都要求了解他们的进展。但后来一位工程师注意到，每次他们打开机器时，镜子突然看起来更干净了。

<details>
<summary>Original English</summary>

**旁白**: With the source power up, there was one final problem that had to be solved before they could begin manufacturing their machine. See, while the hydrogen gas did protect the collector mirror from debris, it wasn't perfect. All the intense high energy photons and hydrogen ions zipping around, deteriorated a very special top coating on the collector. So they still had to clean the mirrors every 10 hours, which you know is terrible for productivity. **Martin van den Brink** asked for updates every day on their progress. But then one of the engineers noticed that every time they opened up the machine, the mirrors suddenly seemed cleaner

</details>

**受访者**: 然后他插话说：“哦，等等。每次我们打开机器时，氧气就会进入，我们的问题就解决了。我们能不能想办法在系统中加入一点氧气，确保收集器保持更长时间的清洁？”于是他们开始实验在真空中需要多少氧气，最终达到了这个点：“好的，如果我们加入这么多氧气，我们就能让收集器保持更长时间的清洁。”

<details>
<summary>Original English</summary>

**受访者**: Then he kind of chimed in and said, oh wait a second. Whenever we opened up the machine, oxygen comes in and our problem is solved. Couldn't we think of a way to add just a little oxygen to our system and make sure that the collector stays clean longer? And so they started experimenting with the amount of oxygen that was needed in the vacuum and then finally got to this point, okay, if we add so much oxygen, we'll keep the collector clean for longer.

</details>

**旁白**: 解决了这个问题后，**ASML**的机器可以连续运行更长时间，并最终实现了商业化。到2016年，订单开始涌入，现在所有最先进的芯片都需要**ASML**的机器，这使得他们成为世界上最重要的科技公司。**ASML**的第一批商用机器的数值孔径为**0.33**，可以打印**13纳米**的线条。这些被称为**低NA机器**，ASML至今仍在生产。但**扬 (Jan)** 的团队在2012年开始研发的机器是下一代，它拥有更大的光学系统，可以打印更小的特征。这就是**高NA机器**，其数值孔径为**0.55**，我们得以近距离观察他们的最新版本。

<details>
<summary>Original English</summary>

**旁白**: With this fix **ASML**'s machine could run continuously for much longer and it finally became commercially viable. By 2016, orders started pouring in and now all of the most advanced chips need **ASML**'s machine making them perhaps the most important tech company in the world. **ASML**'s first commercial machines had a numerical aperture of **0.33** and could print **13 nanometer** lines. These are called the **low NA machines** and a ML still makes them. But the machine that Jan's team started working on back in 2012 was the next generation which had a larger optic system so they could print even smaller features. This is the **high NA machine** with a numerical aperture of **0.55**, and we get to see their latest version up close.

</details>

### 参观高NA EUV机器

**受访者**: 这台机器多少钱？我们总是说**3.5亿欧元**以上。而且你实际上可以买到它，对吧？如果你想的话，是的。

<details>
<summary>Original English</summary>

**受访者**: How much is the machine? We always say north of 350 million euros. And you can actually buy it, right? You can if you want yeah.

</details>

**旁白**: 如果我有钱，我就可以买它。

<details>
<summary>Original English</summary>

**旁白**: If I had the money I could buy it.

</details>

**受访者**: 是的，你可以。

<details>
<summary>Original English</summary>

**受访者**: Yes you could.

</details>

**旁白**: 以前有多少人见过这个？

<details>
<summary>Original English</summary>

**旁白**: How many people have seen this before?

</details>

**受访者**: 我们真的限制了人数。

<details>
<summary>Original English</summary>

**受访者**: We really limit the amount of people

</details>

**旁白**: 可以进入**洁净室**的人数。**ASML**的机器是在一个极其严格的洁净室中建造的，任何一立方米内，直径**0.1微米**的颗粒不能超过10个，并且不能有比这更大的颗粒。一粒花粉大约是**20微米**，极细的沙子大约是**10微米**。为了更好地理解，医院手术室必须极其清洁，但每立方米只允许最多**10,000个直径0.1微米**的颗粒。

<details>
<summary>Original English</summary>

**旁白**: That get to go inside the **clean room**. **ASML**'s machines are built in a super strict clean room in any cubic meter, there can be no more than **10 particles**, only **0.1 microns** large, and nothing bigger than that. A spec of pollen is around **20 microns** and extremely fine sand is around **10 microns**. To put all of this in perspective, hospital operating rooms, which have to be extremely clean, only allow a maximum of **10,000 particles per cubic meter** that are **0.1 microns** wide.

</details>

**旁白**: **马克 (Marc)** 穿着白西装看起来好多了，这太不公平了。我感觉自己像个小蓝精灵。

<details>
<summary>Original English</summary>

**旁白**: It's so unfair how much better Marc looks though in his white suit. I feel like a little smurf.

</details>

**ASML员工**: 好的，我们要穿过**风淋室**，所以你得照我说的做。

<details>
<summary>Original English</summary>

**ASML员工**: Okay, so we're gonna go through the air showers, so you're gonna have to do as I do.

</details>

**旁白**: 好的，这是在冲刷我们身上残留的所有颗粒。

<details>
<summary>Original English</summary>

**旁白**: Okay, so this is washing down all the particles that are still on us.

</details>

**ASML员工**: 是的。所以这是像超净空气一样吹拂。

<details>
<summary>Original English</summary>

**ASML员工**: Yes. So this is like super clean air blowing as clean.

</details>

**旁白**: 这个地方太大了。

<details>
<summary>Original English</summary>

**旁白**: This place is huge.

</details>

**ASML员工**: 很大。

<details>
<summary>Original English</summary>

**ASML员工**: It's huge.

</details>

**旁白**: 太疯狂了。我以前去过几次洁净室，但都无法与这里相比。这里有没有几乎没有人能进入的秘密区域？

<details>
<summary>Original English</summary>

**旁白**: It's insane. I've been in a clean room a couple times before, but it's nothing compared to this. Are there any secret areas here where almost no one has access to?

</details>

**ASML员工**: 我不能告诉你。

<details>
<summary>Original English</summary>

**ASML员工**: I can't tell you.

</details>

**旁白**: 很好的回答。好的。所以这就是整个系统。

<details>
<summary>Original English</summary>

**旁白**: Great answer. Okay. So this is the total system.

</details>

**ASML员工**: 就是它。

<details>
<summary>Original English</summary>

**ASML员工**: This is it.

</details>

**旁白**: 太疯狂了。看它有多大。这是人类有史以来建造的最先进的机器。它经历了许多许多年，几十年的发展，耗费了数十亿美元，才有了这台巨大的美丽机器。所以这是第一台**高NA机器**。

<details>
<summary>Original English</summary>

**旁白**: That's crazy. Look how big it is. This is the most advanced machine humanity's ever built. It's taken many, many years, decades of development, many billions of dollars all to get this humongous beauty. So this is the first **high NA machine**.

</details>

**ASML员工**: 是的。所以如果你在互联网上或其他地方看到图片。

<details>
<summary>Original English</summary>

**ASML员工**: Yes. So if you saw pictures on the internet or whatever.

</details>

**旁白**: 是的。

<details>
<summary>Original English</summary>

**旁白**: Yeah.

</details>

**ASML员工**: 就是这台机器。所以有史以来第一批打印出**8纳米**线条之类的，就是这台机器。

<details>
<summary>Original English</summary>

**ASML员工**: That's this machine. So the very first line's ever printed at **eight nanometers** and stuff. That was this machine.

</details>

**旁白**: 地球上最光滑的物体。

<details>
<summary>Original English</summary>

**旁白**: The smoothest object on earth.

</details>

**ASML员工**: 是的，都在这里面。

<details>
<summary>Original English</summary>

**ASML员工**: Yeah, it's all in here.

</details>

**旁白**: 是的。等等，让我看看我能不能弄明白。

<details>
<summary>Original English</summary>

**旁白**: Yeah. Wait, so let me see if I can figure this out.

</details>

**ASML员工**: 是的。

<details>
<summary>Original English</summary>

**ASML员工**: Yeah.

</details>

**旁白**: 这是光源。他们在这里制造**极紫外光**。

<details>
<summary>Original English</summary>

**旁白**: This is the light source. It's where they make the extreme ultraviolet.

</details>

**ASML员工**: 是的。

<details>
<summary>Original English</summary>

**ASML员工**: Yes.

</details>

**旁白**: 然后激光一定是从那里进来的。

<details>
<summary>Original English</summary>

**旁白**: And then the laser must come in from there.

</details>

**旁白**: 让我们看看激光。事实上，我们看到了激光和光源是如何工作的。我想我们正在进入激光系统，马克正在确认我们是否可以在这里拍摄，以免拍到不该拍的东西。哦，哇。这看起来很危险。现在激光系统被所有这些棕色柜子覆盖着，但这里有一个模型版本。一个几瓦的**二氧化碳激光器**进入这个放大器，在那里它反弹，直到它的功率大约是原始功率的五倍。然后它通过总共四个不同的放大器，将最终激光功率提高到**20,000瓦**，这比切割钢材的激光器强四倍。

<details>
<summary>Original English</summary>

**旁白**: Let's take a look at the laser. In fact, we got to see just how the laser and light source work. I think we're entering the laser system here Mark's just making sure, I think that we can actually film here that we're not catching anything. We're not supposed to. Oh wow. This looks dangerous. Now the laser system is covered by all of these brown cabinets, but here is a model version. A carbon dioxide laser of just a few watts enters this amplifier where it bounces around until it's roughly five times its original power. It then goes through a total of four different amplifiers to bring the final laser up to **20,000 watts**, which is four times stronger than lasers that cut through steel.

</details>

**ASML员工**: 这边是放大器。

<details>
<summary>Original English</summary>

**ASML员工**: Over here we have the amplifiers.

</details>

**旁白**: 是的。

<details>
<summary>Original English</summary>

**旁白**: Yeah.

</details>

**ASML员工**: 它产生了这种强大的激光束。

<details>
<summary>Original English</summary>

**ASML员工**: That generates this. This powerful laser beam.

</details>

**旁白**: 是的。

<details>
<summary>Original English</summary>

**旁白**: Yeah.

</details>

**ASML员工**: 然后它基本上就出来了，这是**光束传输系统**的一部分。它被带到机器上。所以这里的这根管道里有巨大的激光束。

<details>
<summary>Original English</summary>

**ASML员工**: And then it basically comes out and this is part of the **beam transport system**. Where it's brought to the machine. So this pipe here has the big laser beam.

</details>

**旁白**: 这有一个镜子吗？

<details>
<summary>Original English</summary>

**旁白**: And this has a mirror?

</details>

**ASML员工**: 是的。

<details>
<summary>Original English</summary>

**ASML员工**: Yes.

</details>

**旁白**: 然后脉冲传输到**光源模块**。它看起来有点像变形金刚，或者像一艘宇宙飞船。到处都是电线。

<details>
<summary>Original English</summary>

**旁白**: Then the pulses travel to the **light source module**. It kind of looks like a transformer or like a, I don't know, like a spaceship. There's so many wires going everywhere.

</details>

**ASML员工**: 不要碰这个。

<details>
<summary>Original English</summary>

**ASML员工**: Don't touch this.

</details>

**旁白**: 天哪。

<details>
<summary>Original English</summary>

**旁白**: Holy crap.

</details>

**ASML员工**: 这相当大，是吧？

<details>
<summary>Original English</summary>

**ASML员工**: This is pretty big, huh?

</details>

**旁白**: 这太疯狂了。

<details>
<summary>Original English</summary>

**旁白**: This is insane.

</details>

**ASML员工**: 这只是光源吗？

<details>
<summary>Original English</summary>

**ASML员工**: And this is just a light source?

</details>

**旁白**: 这只是光源。你拍到这个对比镜头了吗？所以你需要所有这些。

<details>
<summary>Original English</summary>

**旁白**: This is just a light source. Are you getting this comparison shot? And so you need all of this.

</details>

**ASML员工**: 只是为了制造EUV光。是的。

<details>
<summary>Original English</summary>

**ASML员工**: Just to make EUV light. Yeah.

</details>

**旁白**: 只是为了制造光。是的。这太不可思议了。我们可以稍微走动一下吗？

<details>
<summary>Original English</summary>

**旁白**: Just to make the light. Yes. That's incredible. Can we do a little walk around?

</details>

**ASML员工**: 我们可以稍微走动一下。

<details>
<summary>Original English</summary>

**ASML员工**: We can do a little walk.

</details>

**旁白**: 走吧。

<details>
<summary>Original English</summary>

**旁白**: Let's go.

</details>

**ASML员工**: 所以这基本上是光源的核心。

<details>
<summary>Original English</summary>

**ASML员工**: So basically this is the heart of the source.

</details>

**旁白**: 我能站在这里吗？

<details>
<summary>Original English</summary>

**旁白**: Can I stand on here?

</details>

**ASML员工**: 如果你低于137（公斤），你可以。

<details>
<summary>Original English</summary>

**ASML员工**: If you are below 137, you can.

</details>

**旁白**: 我不——我想我是。哇。所以锡液滴是从左边进来的。

<details>
<summary>Original English</summary>

**旁白**: I don't - I think I am. Woo. And so the tin droplets are coming in from the left.

</details>

**ASML员工**: 是的。

<details>
<summary>Original English</summary>

**ASML员工**: Yes.

</details>

**旁白**: 然后我们从这里发射激光。

<details>
<summary>Original English</summary>

**旁白**: Then we're shooting the laser from here.

</details>

**ASML员工**: 是的。

<details>
<summary>Original English</summary>

**ASML员工**: Yeah.

</details>

**旁白**: 好的。它爆炸了，然后光线，光线从那里出去。**ASML**的第一台EUV机器到最新机器的一个改进是击中液滴的脉冲数量。第一个**预脉冲**仍然将液滴压平为薄饼状，但现在还有第二个预脉冲，进一步降低了密度。它基本上将其转化为低密度气体，使其稀薄化。然后最终脉冲基本上使其全部电离。所以对于驱动激光发出的基本相同功率，他们获得了更多的EUV光。现在，如果他们想要更多的光，那么唯一的方法就是击中更多的液滴。他们正是这样做的。

<details>
<summary>Original English</summary>

**旁白**: Okay. It explodes and then the light, the light goes out there. One improvement from **ASML**'s first EUV machine to their newest one is the number of pulses that hit the droplet. The first **pre pulse** still flattens the droplet into a pancake, but now there's also a second pre pulse that further reduces the density. It basically turns it into a low density gas, it rarefies it. And then the final pulse essentially ionizes all of it. So for basically the same power coming from the drive laser, they get even more EUV light. Now if they want even more light, then the only way to do that is by hitting more droplets. And that's exactly what they did.

</details>

**受访者**: 我们目前正在出货的最新EUV光源，大约在**500瓦**的水平，我们将重复频率提高到每秒**60,000次**。然后我们有一个路线图，将达到每秒**10万个液滴**。我们实际上已经在实验室中演示了每秒10万个液滴。所以这不是“如果”，而是“何时”。

<details>
<summary>Original English</summary>

**受访者**: Our most recent EUV light sources that we're shipping right now, which are around the **500 watt** level, we increased the rep rate up to **60,000 times per second**. And then we have a roadmap that's gonna go to a **hundred thousand droplets per second**. We've actually now already demonstrated this hundred thousand droplets per second in the lab. So it's not an if but a when.

</details>

**旁白**: 太疯狂了。

<details>
<summary>Original English</summary>

**旁白**: Crazy.

</details>

**受访者**: 我们用来制造薄饼、稍微炸开薄饼，然后蒸发薄饼的三个脉冲。

<details>
<summary>Original English</summary>

**受访者**: The three pulses that we use to make the pancake to blow up the pancake a little bit and then to evaporate the pancake.

</details>

**旁白**: 是的。

<details>
<summary>Original English</summary>

**旁白**: Yeah.

</details>

**受访者**: 前两个脉冲会通过这里的这根管道进来，然后主脉冲，也就是大激光，激光束会通过这里的这根管道输送。

<details>
<summary>Original English</summary>

**受访者**: The first two pulses, they would be coming in through this pipe here and then the main pulse with the big laser, the laser beam would be delivered through this pipe here.

</details>

**旁白**: 目前正在出货的**高NA**和**低NA机器**都使用三个脉冲，最终它们将每秒击中更多液滴。但光源只是整个机器的一小部分。在从收集镜反射后，EUV光线移动到**照明器**。一组镜子在光线击中掩模版之前对其进行塑形和聚焦。掩模版是上半部分，这个模块是在单独的设施中建造并稍后安装的。接下来，光线进入**投影光学箱**，这是一组将光线缩小的镜子。**高NA机器**可以将图案在垂直方向缩小八倍，在水平方向缩小四倍。镜子也更加光滑。如果**低NA镜子**有德国那么大，最高的凸起大约是一毫米。但如果**高NA镜子**有世界那么大，最高的凸起大约是一张扑克牌的厚度。通过这两项改进的结合，**ASML**成功地将数值孔径从**0.33**提高到**0.55**。最后，光线击中晶圆。为了每小时打印大约**185片晶圆**，掩模版以超过**20 G**的加速度来回快速移动。这比一级方程式赛车的加速度快五倍以上。这是机器内部实际运行的画面。请注意，这并没有加速，但对我来说，这台机器最疯狂的地方不是掩模版移动的速度，甚至不是它能打印的尺寸有多小，而是它需要多么惊人的精确度。任意两层之间最大的偏差，称为**套准 (overlay)**，是**一纳米**。那是**五个硅原子**的精度。这太疯狂了。

<details>
<summary>Original English</summary>

**旁白**: Both the high and low NA machine shipping out right now use three pulses and eventually they will hit more droplets per second. But the light source is just one small part of the full machine. After bouncing off the collector mirror, the EUV light moves to the **illuminator**. A set of mirrors shape and focus the light before it hits the reticle. The reticle is the top half and this module is built in a separate facility and installed later. Next the light goes into the **projection optics box**, which is a set of mirrors that shrink the light down. The **high NA machine** can shrink the pattern eight times in the vertical direction and four times in the horizontal direction. The mirrors are also much smoother still. If the **low NA mirrors** were the size of Germany, the tallest bump would be about a millimeter. But if the **high NA mirrors** were the size of the world, the tallest bump would be about the thickness of a playing card. By the combination of both of these improvements, **ASML** was able to increase the numerical aperture from **0.33** to **0.55**. And finally the light hits the wafer. In order to print around **185 wafers per hour**, the reticle whips back and forth at accelerations of over **20 g's**. That's over five times the acceleration of a Formula one car. And this is some actual footage of what that's like inside this machine. And notice that this is not sped up, but the crazy thing to me about this machine isn't how fast the reticle moves or even how small it can print, but it's just how insanely accurate it needs to be. The most any two layers can be off, which is called the **overlay** is **one nanometer**. That's five freaking silicon atoms of precision. That's insane.

</details>

**受访者**: 所以通常我们作为系统工程师所做的是制定一个预算。所以我们说，嘿，你得到，比如说一纳米，然后我们把纳米分成更小的部分。

<details>
<summary>Original English</summary>

**受访者**: So typically what we do as system engineers is that we make a budget. So we say, hey, you get, let's say a nanometer and and we divide then the nanometers to to smaller fractions.

</details>

**旁白**: 总共一纳米。不是说你，你这个组得到一个……

<details>
<summary>Original English</summary>

**旁白**: The nanometers total. It's not like you, you group gets an er...

</details>

**受访者**: 你得到一纳米，你得到，不，不。你总共得到一纳米。是的。所以你必须为你的纳米部分而战。

<details>
<summary>Original English</summary>

**受访者**: You get a nanometer, you get, no, no. You get a nanometer in total. Yes. So you have to, to fight for the, for your part of the nanometer.

</details>

**旁白**: 想到如今每部智能手机里的芯片都是用这台机器组装出来的，真是太酷了。

<details>
<summary>Original English</summary>

**旁白**: It's kind of cool to realize that like every smartphone nowadays has has a chip that is made with the machine that was actually put together here. So that's a cool thought.

</details>

**ASML员工**: 看看这个。

<details>
<summary>Original English</summary>

**ASML员工**: Take a look at this.

</details>

**旁白**: 相当巨大，是吧？

<details>
<summary>Original English</summary>

**旁白**: It's pretty massive, eh?

</details>

**ASML员工**: 这么大。

<details>
<summary>Original English</summary>

**ASML员工**: So big.

</details>

**旁白**: 那么你们会把它盖起来吗？

<details>
<summary>Original English</summary>

**旁白**: So do you cover it up?

</details>

**ASML员工**: 是的。在客户的晶圆厂里，它会看起来像一个巨大的白色盒子。我更喜欢这样。是的，我也是。

<details>
<summary>Original English</summary>

**ASML员工**: Yes. At a customer fab, it will be looking like a big white box. I like it better like this. Yeah, me too.

</details>

**旁白**: 这很有趣。你需要这么大的机器，这么多的基础设施来制造我们能大规模生产的最微小的东西。

<details>
<summary>Original English</summary>

**旁白**: It's funny. You need such a big machine, so much infrastructure to make the tiniest things we can make at scale.

</details>

**ASML员工**: 这是成反比的。

<details>
<summary>Original English</summary>

**ASML员工**: It's inversely proportional.

</details>

**旁白**: 是的。你想要做得越小，周围的一切就变得越大。

<details>
<summary>Original English</summary>

**旁白**: Yeah. Smaller. You want to go the larger everything around it becomes.

</details>

### EUV的漫长征程与“不合理者”的贡献

**旁白**: 机器组装、测试并获批后，它们会被拆卸并运往世界各地。**5000家公司**提供**10万个零件**、**3000根电缆**、**4万个螺栓**和**两公里长的软管**。**ASML**用**250个集装箱**，由**25辆卡车**和**7架波音747**运送他们的**高NA机器**。尽管有所有的怀疑和挫折，EUV最终在木下裕夫首次成像三十年后达到了制造水平。但即使全世界几乎都不相信它会成功，**ASML**的一些人早在2010年就知道它会成功。

<details>
<summary>Original English</summary>

**旁白**: After the machines are assembled, tested and approved, they are disassembled to ship all around the world. **5,000 companies** supply **100,000 parts**, **3000 cables**, **40,000 bolts** and **two kilometers of hosing**. **ASML** ships their **high NA machine** in **250 containers** spread out over **25 trucks** and **seven Boeing 747s**. Despite all the doubt and setback, EUV finally made it to manufacturing level three decades after Kenoshita's first images. But even when almost the entire world didn't believe it would work, there were some people at **ASML** who knew that it was going to work all the way back in 2010,

</details>

**乔斯·本肖普**: 大约在2001年，我们说，让我们做EUV吧。然后我们遇到了许多挑战。2010年，我们在客户那里安装了第一个系统。它安装在韩国。我追求了13年的东西，现在正摆在客户那里生产晶圆。对我来说，那一刻我意识到，是的，我们做出了正确的选择。

<details>
<summary>Original English</summary>

**Jos Benschop**: Around 2001 we said let's, let's, let's do EUV. And then we run into many challenges. 2010 we installed the first system at a, at a customer. So it was installed in Korea. There it was this thing I had been pursuing for, you know, 13 years was now standing at a customer producing wafers. This for me was a moment I realized, yes, we made the right bet.

</details>

**旁白**: 几年后，**乔斯 (Jos)** 遇到了帮助安装第一台机器的人。

<details>
<summary>Original English</summary>

**旁白**: Years later, Jos ran into the man who helped install the first machine.

</details>

**乔斯·本肖普**: 他现在是一所著名研究所的教授。我分享了我解脱的故事，以及我们做出了多么棒的决定。**汉库 (Hanku)** 说：“是啊，是啊，是啊。”他说：“当你离开，圣诞节后飞走时，那东西坏了，花了两个月才修好。他们差点因为我做出了错误的决定而解雇我，我们一路走来经历了一些起伏。”

<details>
<summary>Original English</summary>

**Jos Benschop**: He's now a professor at a renowned institute. And I shared the story about my relief and how, how, how great we made the decision. Hanku said, yeah, yeah, yeah. He said, when you left and you flew out after Christmas, the thing broke down and it took two months to get back up again. And they almost fired me for making the wrong decision that we had some ups and downs along the way.

</details>

**旁白**: 是的。

<details>
<summary>Original English</summary>

**旁白**: Yeah.

</details>

**乔斯·本肖普**: 但再说一次，一旦我看到系统安装在客户的晶圆厂里，是的。我就知道我们做对了。那是2010年。第一部手机是在2019年问世的。所以我们还有一些障碍需要解决。

<details>
<summary>Original English</summary>

**Jos Benschop**: But again, once I saw the system installed at a customer in a customer fab, yeah. I knew we had done the right thing. This was 2010. The first phone that came out was 2019. So we still had some hurdles to resolve,

</details>

**旁白**: 对。

<details>
<summary>Original English</summary>

**旁白**: Right.

</details>

**乔斯·本肖普**: 但我们坚持了下来。

<details>
<summary>Original English</summary>

**Jos Benschop**: But we kept going.

</details>

**旁白**: 我花了几个月的时间制作这个视频并思考它，它仍然感觉绝对不可能。我越想，就越觉得40年前那些说它不可能的人是有道理的。认为你可以在实验室里制造出这个人造太阳，制造出如此光滑的镜子，并获得所需的套准精度，这完全是不合理的。合理的事情是认为这一切都不可能，并指出每个问题。这让我想起了一句话：“理性的人适应世界；不理性的人坚持不懈地试图让世界适应自己。因此，所有的进步都取决于不理性的人。”想象一下，如果**安迪 (Andy)** 和**木下裕夫**以及所有其他人都是理性的，我们就不会拥有这一切。事实上，想象一下，如果地球上的每个人都理性，世界会变成什么样子？它可能会极其无聊。可能我们日常生活中享受的大部分技术，大部分事物都不会存在。事实上，你可能不会观看这个视频，因为即使在200年前，我们现在拥有的几乎所有技术都会显得完全不合理。所以我真的认为，在很大程度上，我们的生活归功于那些“不理性”的人。也许至少对我来说，这是一个提醒，在生活的一些重要方面，有点不理性是好的。改变世界是困难的。EUV的成功克服了数千个障碍，耗时30多年。但重大的突破通常都以同样的方式开始。那就是你学习，探索一些相关的想法，尝试以新的方式应用它们，然后培养技能来应对越来越大的挑战。一点一滴地，你获得了知识，这就是今天视频赞助商**Brilliant**的用武之地。**Brilliant**通过为您量身定制的视觉互动学习，帮助您在数学、科学和计算机科学方面取得优异成绩。这是一种实现宏大学习目标，掌握课堂数学或为下一次重大技术突破做出贡献的强大方式。在**Brilliant**上，您通过实践学习，这种方法已被研究证明比被动学习更有效。它根据您的背景将您安排在正确的水平，设计适合您的练习集和复习，然后帮助您以理想的速度进步。在**Brilliant**上总有新发现。看完这个视频后想更好地理解光学吗？那么他们的**科学思维课程 (Scientific Thinking Course)** 是一个很好的起点。它通过向您展示如何将大概念分解成更小、更容易理解的部分来帮助您像工程师一样思考。无论您是攻克基础数学、代数或微积分，深入研究算法，探索材料科学，还是理解将带我们超越EUV的物理学，**Brilliant**都将帮助您实现目标。如果像我一样，您决心在新的一年里学到更多，那么**Brilliant**是让这个决心坚持下去的好方法。所以要免费学习，请访问**brilliant.org/veritasium**，扫描屏幕上的二维码，或点击描述中的链接。**Brilliant**还为我们的观众提供了年度高级订阅**八折优惠**，让您可以无限制地每天访问**Brilliant**上的所有内容。所以我要感谢**Brilliant**赞助本视频，也要感谢您的观看。

<details>
<summary>Original English</summary>

**旁白**: Now I have spent several months working on this video and thinking about it and it still feels absolutely impossible. And the more I think about it, the more I think you know those people 40 years ago that said it was impossible, they had a point. It's completely unreasonable to think that you could make this artificial sun in a lab, that you could make these mirrors that are this smooth and that you could get the required overlay accuracy. The reasonable thing is to think that none of that is possible and to point out all the problems with each of them. Which reminds me of this quote, the reasonable man adapts himself to the world; the unreasonable one persists in trying to adapt the world to himself. Therefore, all progress depends on the unreasonable map. Imagine if **Andy** and **Kinoshita** and all the others had been reasonable, we would have none of this. In fact, imagine what the world would be like if everyone on it was reasonable. It would probably be extremely boring. Probably most of the technology, most of the things you enjoy on a daily basis wouldn't be here. In fact, you probably wouldn't be watching this video because just about all the technology we have nowadays would seem completely unreasonable even just 200 years ago. And so I really think that to a large extent, we owe our lives to those **unreasonable people**. And maybe at least to me, it's a reminder that it's good to be a little unreasonable, at least in some of the big parts of life. Changing the world is difficult. It took overcoming thousands of obstacles and over 30 years to get EUV to work. But big breakthroughs usually start in the same way. That is you learn, you explore some related ideas, you try to apply them in some new ways, and then you build skills to take on bigger and bigger challenges. Bit by bit you gain knowledge and that's where today's video sponsor **Brilliant** comes in. **Brilliant** helps you excel in math, science, and computer science with visual interactive learning that's personalized for you. It's an incredibly powerful way to reach big learning goals, mastering math for class or contributing to the next big technological breakthrough. On **Brilliant**, you learn by doing, a method that research has shown to be far more effective than just passive learning. It starts you at the right level based on your background designs, practice sets and reviews customized for you. And then it helps you advance at your ideal pace. There is always something new to discover on **Brilliant**. Want to better understand optics after watching this video? Well there **Scientific Thinking Course** is a great place to start. It helps you think like an engineer by showing you how to break down large concepts into smaller, more understandable pieces. Whether you are conquering fundamental math, algebra, or calculus, diving deep into algorithms, exploring materials science or understanding the physics that will take us beyond EUV, **Brilliant** will help you get there. And if like me, you've resolved to learn more in the new year, then brilliant is a great way to actually make that resolution stick. So to learn for free, go to **brilliant.org/veritasium**, scan the QR code on screen, or click the link in the description. **Brilliant**s also given our viewers **20% off** an annual premium subscription, which gives you unlimited daily access to everything on **Brilliant**. So I want to thank **Brilliant** for sponsoring this video and I want to thank you for watching.

</details>