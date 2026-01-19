---
author: Veritasium
date: '2026-01-19'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=P-4pbFcERnk
speaker: Veritasium
tags:
  - strobe-photography
  - high-speed-imaging
  - electron-dynamics
  - x-ray-laser
  - attosecond-science
title: 超越时间感知：从频闪摄影到阿秒级电子运动成像
summary: 本文深入探讨了三种突破人类时间感知极限的成像技术：从20世纪初**哈罗德·埃哲顿**开创的**频闪摄影**，到能够捕捉光传播轨迹的**单像素万亿帧相机**，再到利用**阿秒X射线脉冲**揭示分子内部电子动态的**SLAC**实验。文章详细阐述了这些技术的原理、发展历程及其在科学研究和实际应用中的深远意义，展示了人类如何通过技术手段“停止时间”，洞察微观世界的奥秘。
insight: ''
draft: true
series: ''
category: tech-trends
area: tech-engineering
project: []
people:
  - Harold Edgerton
  - George Goddard
companies_orgs:
  - MIT
  - SLAC
  - University of Toronto
products_models: []
media_books:
  - Life Magazine
  - National Geographic
  - Matrix
status: evergreen
---
### 频闪摄影术的诞生与演进

人类对时间感知的局限性促使科学家不断探索超越肉眼极限的观察技术。早在20世纪20年代，麻省理工学院（MIT）的工程师**哈罗德·“道克”·埃哲顿**（Harold "Doc" Edgerton）便开始着手解决工业电机在电网波动下行为不可预测的问题。由于电机转速过快，肉眼和当时相机缓慢的曝光时间都无法捕捉其运动细节。埃哲顿偶然发现，每次电源浪涌都会产生一道亮光，当这道光照射到高速旋转的电机时，运动部件仿佛瞬间静止。这一发现启发了他，促成了**频闪摄影**（Strobe Photography: 利用短暂而强烈的光闪来“冻结”高速运动瞬间的摄影技术）的诞生。

埃哲顿的频闪灯工作原理是：通过高压电源将电子加载到电容器上，当触发器发送高压脉冲穿过缠绕在玻璃管上的导线时，电场会使管内惰性气体（如氩气或氙气）原子电离，使其瞬间变为导体。此时，电容器中储存的电荷会迅速通过，将气体加热至约10,000开尔文，产生持续仅10微秒的极亮光闪。光闪结束后，电子与气体原子复合，电路再次变暗。这种短暂而强烈的闪光能够精确捕捉高速运动的瞬间。

在20世纪30年代初，埃哲顿带着他的频闪灯走访工厂，向工人们展示如何“冻结”电机运动，从而拍摄到清晰的齿轮照片。他不仅是一位工程师，更是一位拥有卓越摄影眼光的艺术家。他将频闪摄影应用于日常场景，如网球拍击球瞬间和蜂鸟振翅，通过《**生活杂志**》（Life Magazine）和《**国家地理**》（National Geographic）等当时具有巨大影响力的媒体，向公众展示了肉眼无法察觉的微观世界。

频闪摄影的关键挑战在于如何精确控制闪光时机。埃哲顿巧妙地利用声音作为触发机制，例如通过气球爆裂或子弹产生的**音爆**（Sonic Boom: 物体以超音速运动时产生的强烈冲击波）来触发闪光，从而捕捉到子弹穿过扑克牌的瞬间。这项技术甚至在军事侦察中发挥了重要作用。1939年，美国陆军少校**乔治·戈达德**（George Goddard）找到埃哲顿，寻求开发一种足够强大的频闪灯，以便飞机在夜间从一英里高空拍摄侦察照片。埃哲顿成功研制出一种能在短短一毫秒内释放60,000焦耳能量、峰值功率高达60兆瓦的闪光灯，其亮度堪比大型太阳能农场的输出。这项技术在第二次世界大战中被盟军用于D日诺曼底登陆前夜的侦察，确认了德军的部署情况。

与2020年每秒20,000帧的现代研究级慢动作相机相比，埃哲顿在1930年代拍摄的频闪照片在清晰度上依然具有优势。这揭示了**空间分辨率**（Spatial Resolution: 图像中像素的数量）和**时间分辨率**（Temporal Resolution: 捕捉单个帧或一系列帧的能力）之间的基本权衡。硬件限制意味着通常需要牺牲其中一种分辨率来提升另一种：要么追求高像素数，降低帧率；要么追求高帧率，牺牲像素数。埃哲顿的频闪技术将时间分辨率推向极致，以单帧图像实现了无与伦比的清晰度。

<details>
<summary>Original English Source</summary>

Human limitations in perceiving time have driven scientists to constantly explore observation techniques beyond the naked eye. As early as the 1920s, MIT engineer **Harold "Doc" Edgerton** set out to find a solution to the unpredictable behavior of electric motors due to fluctuations in the electrical grid. Because motors spun too fast, neither the human eye nor the slow exposure times of cameras at the time could capture their motion details. Edgerton noticed that every time he triggered a power surge, his equipment gave off a bright flash of light. When that flash hit the motor, the moving parts appeared to stand perfectly still as if frozen in time. This insight led to the birth of **strobe photography** (Strobe Photography: A photographic technique that uses brief, intense flashes of light to "freeze" moments of high-speed motion).

Edgerton's strobe light worked by using a high voltage power source to load electrons onto a capacitor. When a trigger sent a high voltage pulse through a wire wrapped around a glass tube, the electric field from that pulse would rip electrons off the gas atoms inside the chamber (such as argon or xenon), ionizing the gas and turning it into a conductor. In that instant, the charge stored in the capacitor would surge through, heating the gas to around 10,000 Kelvin, producing a very bright, very brief flash of light lasting just 10 microseconds. Then the electrons would recombine with the gas atoms, stopping the current, and the circuit would go dark again. This brief but intense flash could precisely capture moments of high-speed motion.

By the early 1930s, Edgerton was eager to test his strobe outside the lab, traveling to factories to show workers how to "freeze" motors in time, allowing them to take sharp pictures of gears in motion. He was not just an engineer but also an artist with a unique eye for photography. He applied strobe photography to everyday scenes, such as tennis balls pancaked against a racket and hummingbirds frozen in time. Through influential magazines like "Life Magazine" and "National Geographic," he communicated what was happening at timescales we couldn't see.

The critical challenge for strobe photography was precisely timing the flash. Edgerton ingeniously used sound as a trigger mechanism, for example, by popping a balloon or using the **sonic boom** (Sonic Boom: A powerful shock wave produced when an object moves at supersonic speeds) from a bullet to trigger the flash, capturing the moment a bullet passed through a playing card. This technique even played a significant role in military reconnaissance. In 1939, US Major **George Goddard** approached Edgerton, seeking to develop a strobe powerful enough to illuminate the ground from a plane a mile or so up in the sky for night reconnaissance. Edgerton successfully developed a flash lamp that released about 60,000 joules in a single millisecond, with a peak power of roughly 60 megawatts, comparable to the output of a large solar farm. This flash lamp was quickly utilized in World War II, allowing the Allies to take pictures of Normandy the night before D-Day, confirming that German troops were unprepared for the attack.

Compared to a 2020 research-grade slow-mo camera shooting at 20,000 FPS, Edgerton's strobe photos from the 1930s still demonstrated superior sharpness. This highlights the fundamental trade-off between **spatial resolution** (Spatial Resolution: The number of pixels in an image) and **temporal resolution** (Temporal Resolution: The ability to capture a single frame or a progression of frames). Hardware limitations often mean you have to trade one resolution for the other: either a high pixel count with a lower frame rate or a high frame rate with fewer pixels. Edgerton's strobe technique pushed temporal resolution to its limit, achieving unparalleled sharpness with a single frame.
</details>

### 单像素万亿帧相机：可视化光速的奥秘

在追求极致时间分辨率的道路上，科学家们探索了另一种极端方法：**单像素万亿帧相机**（Single-Pixel Trillion-FPS Camera: 仅通过一个像素传感器，结合多次测量和扫描技术，实现每秒万亿帧超高时间分辨率的成像系统）。这种相机虽然一次只能“看到”一个像素，但其时间分辨率却能达到每秒万亿帧。

这种相机的工作原理与我们手机中的**激光雷达**（LIDAR: Light Detection and Ranging，通过发射激光脉冲并测量反射回来的时间来确定距离和形状的遥感技术）相似。它通过一个对单个光子都足够敏感的传感器，以每秒万亿次的速度计数入射光子，每个“帧”大约持续一皮秒。在这短短的时间内，光本身也只能传播0.3毫米。

为了拍摄光传播的超慢动作视频，研究人员搭建了一个按比例缩小的房间，其中放置了锥体、球体和镜子等不同形状的物体。他们发射一个极短的激光脉冲，使其击中场景中的一个点，脉冲中的大量光子会散射开来。单像素相机最初指向场景的左上角，当激光脉冲的光子击中墙壁并反射到角落，最终进入相机时，传感器会以每秒万亿帧的速度捕捉到微弱的信号。由于曝光时间极短，每次测量返回的光子信号非常微弱。因此，研究人员需要进行大量测量，并将它们组合起来，以获取关于光在场景中传播距离的可用信息。

随后，相机被轻微移动，实验重复进行。通过对整个场景进行数百次扫描，并逐点记录信号，最终可以构建出整个场景的光传播图像。这种方法的核心在于场景的动态必须是高度可重复的，因为如果每次实验场景都不同，那么每个像素将讲述一个不同的故事。幸运的是，激光脉冲在场景中的散射是高度可预测的。通过扫描网格中的更多点，可以获得更高的空间分辨率，例如，如果需要4K分辨率，只需扫描一个4K像素网格，尽管这会花费更多时间。

通过这种技术，科学家们成功可视化了光穿过瓶子、形成波前以及从瓶盖反弹的动态过程。他们甚至可以通过旋转场景并记录多个视角，利用算法创建“飞越”式视频，从任何方向观察光线的传播。在某些可视化中，由于相机移动速度快于光线传播，光波前甚至会显得静止，这是一种令人惊叹的“打破物理定律”的视觉效果。这些令人难以置信的视频在**多伦多大学**和**麻省理工学院**（MIT）被创造出来，甚至有爱好者在车库中成功复刻了这种光速相机。

<details>
<summary>Original English Source</summary>

On the path to extreme temporal resolution, scientists explored another extreme method: the **single-pixel trillion-FPS camera** (Single-Pixel Trillion-FPS Camera: An imaging system that achieves ultra-high temporal resolution of a trillion frames per second by using only a single-pixel sensor, combined with multiple measurements and scanning techniques). While this camera can only "see" one pixel at a time, its temporal resolution can reach a trillion frames per second.

The working principle of this camera is similar to **LIDAR** (LIDAR: Light Detection and Ranging, a remote sensing technology that determines distance and shape by emitting laser pulses and measuring the time it takes for the pulses to return) in our phones. It uses a sensor sensitive enough to register even a single photon, counting incoming photons around a trillion times a second, with each "frame" lasting roughly one picosecond. In that short time, light itself travels only 0.3 millimeters.

To take ultra-slow motion videos of light traveling, researchers set up a scaled-down room with different shapes like a cone, a sphere, and a mirror. They shoot out a really short laser pulse that hits just one point in the scene, and that laser pulse has a ton of photons in it, which scatter everywhere. The single-pixel camera initially points at the top left corner. When a pack of photons from the laser pulse hits a random spot on the wall, reflects to the corner, and finally bounces into the camera, the sensor picks up their faint signal at a trillion frames per second. Because the exposure time is so short, the photon return from each measurement is very faint. Therefore, researchers take a bunch of measurements and group them all together to get actual usable information about how far away the light traveled in a scene.

Then, the camera is moved slightly, and the experiment is repeated. By scanning a grid of points across the whole scene hundreds of times and recording the signal from each new position, a complete image of light propagation can be constructed. The most important thing for this technique to work is that the scene has to play out pretty much exactly the same every time, because if it didn't, then every pixel would tell a different story. Thankfully, the laser pulse in our scene scatters pretty predictably. By scanning more points along this grid, higher spatial resolution can be achieved; for example, if you want 4K, you simply scan a 4K grid of pixels, though it will take more time.

Using this technique, scientists successfully visualized the dynamic process of light traveling through a bottle, forming wavefronts, and bouncing off the cap. They can even take this a step further by rotating the scene and recording multiple points of view, using algorithms to create "fly-throughs," allowing one to see the light propagate from any direction. In some visualizations, because the camera is moving faster than the light propagation, the wavefront appears stationary, creating an astonishing "physics-breaking" visual effect. These incredible videos were created at the **University of Toronto** and **MIT**, and enthusiasts have even successfully built one of these speed-of-light cameras in their garage.
</details>

### 阿秒X射线脉冲：揭示电子的量子舞蹈

将频闪摄影和万亿帧相机的原理推向极致，科学家们的目标是捕捉到更微观、更快速的现象——**电子的运动**。尽管电子的量子特性使其无法被“拍照”或“录像”，但通过**阿秒X射线脉冲**（Attosecond X-ray Pulse: 持续时间在阿秒（10^-18秒）量级的X射线脉冲，用于探测超快电子动态）技术，我们能够以前所未有的精度观测到电子云在分子中的动态变化。

这项突破性研究在**SLAC国家加速器实验室**（SLAC National Accelerator Laboratory: 位于美国的国家实验室，拥有3.2公里长的直线电子加速器，专注于粒子物理和X射线科学研究）进行。SLAC拥有一条3.2公里长的直线电子加速器，能够将电子加速到接近光速（超过99.9999992%）。研究电子运动至关重要，因为电子本质上创造了所有其他现象发生的场域，分子键的形成与断裂都由电子的推动所驱动。因此，观察电子的运动是研究材料和物质最基本的方式。

为了实现对电子运动的“纳米级频闪”，科学家们利用**X射线自由电子激光器**（X-ray Free-Electron Laser: 一种产生极亮、极短X射线脉冲的先进光源，通过高速电子束在磁场中振荡产生）。首先，相对论性电子脉冲通过一系列名为**波荡器**（Undulator: 由交替磁极组成的一系列磁体，使高速电子束在其中做周期性振荡，从而发射同步辐射光）的装置。这些波荡器由间隔仅几毫米的交替磁体组成，根据**洛伦兹力**（Lorentz Force: 磁场对运动电荷施加的力，方向垂直于电荷速度和磁场线）原理，使电子束在其中做周期性“摆动”。这种摆动导致电子发射电磁辐射。由于相对论效应，对于以接近光速运动的电子而言，宏观的波荡器周期被极度压缩，使得产生的电磁辐射波长远小于毫米级，进入X射线波段。此外，观察者在加速器末端还会观察到额外的**蓝移效应**（Blueshift: 由于光源向观察者靠近而导致电磁波波长变短的现象），从而产生波长小至50皮米的X射线。

最初，这些X射线是沿波荡器随机产生的，形成非相干光模式。但随后，X射线的电场与电子相互作用，使部分电子加速，部分减速，导致较快的电子追上较慢的电子，形成周期性的“微束团”（Microbunching）。这些微束团以统一的阵面发射光，从而产生相干的X射线激光脉冲，极大地增强了其强度。这些脉冲极其紧凑，持续时间仅为几飞秒，甚至可以短至数百**阿秒**（Attosecond: 10^-18秒，即一秒的百万万亿分之一）。阿秒与秒的关系，就像秒与宇宙年龄的关系一样，是一个极其短暂的时间尺度。在阿秒尺度上，我们能够观察到电子在原子和分子周围的快速运动。

在实验中，这些阿秒X射线脉冲被送往隧道末端的实验站，聚焦到一个**相互作用点**（Interaction Point: 实验中X射线束与目标分子发生作用的精确位置）。研究人员将需要研究的分子置于此点，并用X射线脉冲照射。X射线会使分子电离，主要从分子的核心内层电子中剥离电子。不同元素的**核心能级电子**（Core Level Electron: 原子内层轨道上的电子，通常具有较高的结合能）具有不同的电离能（例如，氮约为400电子伏，氧约为550电子伏）。通过调节X射线能量以匹配这些电离能，研究人员可以选择电离分子中的特定原子。X射线在电离电子后剩余的能量将转化为被电离电子的**动能**（Kinetic Energy: 物体因运动而具有的能量）。

通过测量被电离电子的动能，可以推断出该电子周围的**电子密度**（Electron Density: 空间中电子分布的密集程度）。高电子密度区域会使核心能级电子与原子核的结合力减弱，导致电离能略低；反之，低电子密度区域则会使结合力增强，电离能更高。因此，通过比较输入X射线能量与输出电子动能的差异，可以精确推断出电子密度。

为了创建“分子电影”，研究人员首先使用传统的**红外激光**（Infrared Laser: 波长在红外范围内的激光，常用于激发分子振动或引发化学反应）脉冲来激发分子，使其进入非平衡态，从而驱动某些动态过程。随后，阿秒X射线脉冲在经过一定时间延迟后对分子进行探测，通过测量电子动能来捕捉分子电子密度对触发激光的反应，获得一个阿秒级的“快照”。通过逐步增加探测延迟时间，研究人员可以获得一系列电子密度随时间演化的快照。前提是分子的动态过程必须是可重复的。将这些快照拼接起来，就能生成一部以每秒超过千万亿帧速度运行的分子电影，其中帧间隔仅为数百阿秒。

例如，通过模拟**对氨基苯酚**（para-aminophenol: 一种小分子系统）分子在失去一个电子后的响应，研究人员观察到，当X射线脉冲移除一个电子后，分子内部会引发一种电荷分布，并开始在分子中移动（红色代表电子密度增加，蓝色代表减少）。尽管这些视频是模拟结果，但它们已通过SLAC的实验数据得到验证。当预测与测量结果出现分歧时，尤其是在几飞秒之后，这正是科学最激动人心的时刻，因为它揭示了我们此前未知的新现象。能够直观地“看到”电子密度在分子中的运动，对于理解自然界的基本规律具有里程碑式的意义。

<details>
<summary>Original English Source</summary>

Pushing the principles of strobe photography and trillion-FPS cameras to their limits, scientists aim to capture even more microscopic and rapid phenomena—the **motion of electrons**. Although the quantum nature of electrons prevents them from being "photographed" or "videotaped," **attosecond X-ray pulse** (Attosecond X-ray Pulse: X-ray pulses with durations in the attosecond (10^-18 seconds) range, used to probe ultrafast electron dynamics) technology allows us to observe the dynamic changes of electron clouds within molecules with unprecedented precision.

This groundbreaking research is conducted at the **SLAC National Accelerator Laboratory** (SLAC National Accelerator Laboratory: A US national laboratory housing a 3.2-kilometer-long linear electron accelerator, dedicated to particle physics and X-ray science research). SLAC houses a 3.2-kilometer-long, perfectly straight electron accelerator that accelerates electrons to over 99.9999992% the speed of light. Studying electron motion is crucial because electrons essentially create the fields in which everything else happens; molecular bonds break and form because electrons essentially give them a push to do so. Therefore, being able to look into their motion is the most fundamental way of studying materials and matter.

To achieve a "nanoscopic strobe" for electron motion, scientists utilize **X-ray Free-Electron Lasers** (X-ray Free-Electron Laser: An advanced light source that produces extremely bright, ultrashort X-ray pulses by accelerating high-speed electron beams through magnetic fields). First, relativistic electron pulses are fed through a set of devices called **undulators** (Undulator: A series of magnets with alternating poles that cause a high-speed electron beam to oscillate periodically, thereby emitting synchrotron radiation). These undulators are stacks of magnets spaced only a few millimeters apart with alternating poles. Due to the **Lorentz force** (Lorentz Force: The force exerted by a magnetic field on a moving electric charge, perpendicular to both the charge's velocity and the magnetic field lines), the electron beam "wiggles" periodically. This wiggling motion causes the electrons to emit electromagnetic radiation. Due to relativistic effects, for electrons traveling near the speed of light, the macroscopic undulator period is extremely compressed, resulting in electromagnetic radiation with wavelengths much smaller than millimeters, entering the X-ray domain. Furthermore, an observer at the far end of the accelerator will see an additional **blueshift** (Blueshift: The phenomenon where the wavelength of electromagnetic waves shortens due to the light source moving towards the observer), producing X-rays as small as 50 picometers in wavelength.

Initially, these X-rays are created randomly along the undulator, producing an incoherent light pattern. But soon after, the electric fields from the X-rays start to interact with the electrons, speeding some of them up and slowing others down, causing faster electrons to catch up with slower ones. This leads to them getting bunched up into periodic structures, called **microbunching**. These sheets of electrons then emit light as unified fronts, so the resulting X-rays come out coherently as a laser pulse, dramatically increasing their intensity. These pulses are incredibly tightly packed, being only a few femtoseconds long, and can get as short as a couple hundred **attoseconds** (Attosecond: 10^-18 seconds, one quintillionth of a second). The attosecond is to the second what the second is to the age of the universe, an absurdly quick pulse. On an attosecond scale, you can see electrons zip around essentially atoms and molecules.

In experiments, after the undulators, the X-ray pulses are sent to experimental stations at the end of the tunnel, focusing into what is called an **interaction point** (Interaction Point: The precise location in an experiment where the X-ray beam interacts with the target molecules). Researchers fill this interaction point with the molecules whose electrons they want to study, shining the X-ray pulse on them. When it hits the molecule, it will ionize the molecule, predominantly from these inner shells, the very core parts. The thing is, **core-level electrons** (Core Level Electron: Electrons in the inner shells of an atom, typically having higher binding energies) from different elements have different ionization energies (e.g., nitrogen needs around 400 electron volts, whereas oxygen needs around 550). By tuning the X-ray energy to match these ionization energies, you get to choose which of these atoms within the molecule the X-ray is going to ionize. Any excess energy left after an X-ray has ejected an electron will be taken by that electron as **kinetic energy** (Kinetic Energy: The energy an object possesses due to its motion).

By measuring the kinetic energy of the electrons you eject, you can infer what the **electron density** (Electron Density: The measure of the probability of an electron being present at a particular point in space) was around that electron. If you have a high electron density around a particular atom, the core-level electrons will be bound less tightly to the nucleus, so its ionization energy will actually be slightly lower. Whereas if you have a lower electron density than average around an atom, those core-level electrons will be bound more tightly with a higher ionization energy. Therefore, by measuring the kinetic energy of the electrons you eject, you can use the difference between the input X-ray energy and the output kinetic energy to infer what that electron density was.

To create a "molecular movie," researchers first use a traditional **infrared laser** (Infrared Laser: A laser with wavelengths in the infrared range, often used to excite molecular vibrations or initiate chemical reactions) pulse to create some non-equilibrium state in the molecule, driving some dynamics. Then, the attosecond X-ray pulse probes it after a time delay `t`. By measuring the kinetic energy of the electron, you can study how the electron density of the molecule reacted to the trigger laser, getting an attosecond snapshot. Then, by taking another sample of the same molecule, shooting it with a laser again, but this time increasing the probe delay slightly to `t + delta t`, you can get a sequence of snapshots of how that electron density evolves over time. The big assumption here is that the molecular dynamics must be repeatable. If the scene is repeatable, then like the trillion FPS camera, you can use this technique to create a molecular movie, with frames only a few hundred attoseconds apart, technically running at over a quadrillion frames per second.

For example, a simulation of the dynamics of a small molecular system called **para-aminophenol** (para-aminophenol: A small molecular system) after the removal of an electron showed that when an X-ray pulse removes an electron, it initiates some charge distribution that starts to move across the molecule (red color represents an increase in electron density, and blue represents a decrease). Although the video is a simulation, it has been validated by experiments done at SLAC. When predictions and measurements diverge, especially after a few femtoseconds, it's the most exciting time in science, because you just found something you didn't know ahead of time. Being able to actually see these electron densities move around is spectacular and fundamental to understanding nature.
</details>