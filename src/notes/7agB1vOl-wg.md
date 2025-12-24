---
area: tech-insights
category: technology
companies_orgs:
- Linux Foundation
- Google
- Apple
- Qualcomm
- Samsung
- Debian
- Red Hat
- IBM
- Novell
- SUSE
- Microsoft
- Uber
- MIT
- Stanford University
- Linaro
date: '2025-07-06'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Code Complete
- Programming Pearls
people:
- Linus Torvalds
products_models:
- Linux
- Android
- Chromebook
- iPhone
- Mac
- Pixel
- Raspberry Pi
- Windows
- Git
- GitHub
- Minix
- Rust
- Zig
- Hair
- C
- C++
project:
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=7agB1vOl-wg
speaker: The Pragmatic Engineer
status: evergreen
summary: Linux 内核维护者 Greg Kroah-Hartman 深入剖析了这一全球应用最广泛的操作系统的构建过程。本文详细介绍了 Linux 严格的九周发布周期、基于信任的层级式代码审查与合并流程，并通过一个真实的补丁提交案例，展示了从开发者到
  Linus Torvalds 的完整路径。此外，还探讨了为何手机的代码复杂度是服务器的三倍、开源贡献的职业价值，以及在 C 语言主导的内核中引入 Rust 的挑战与未来。
tags:
- architecture
- cycle
- development
- model
- trust
title: 揭秘 Linux 开发：信任、代码与九周发布周期
---

### 引言：Linux 的九周发布周期

Linux 有一个为期九周的发布周期，因为每隔九周就会有一个新版本发布。当 Linus Torvalds 在某个时间点发布一个版本后，**合并窗口**（Merge Window: 指的是允许新功能代码合入主干分支的特定时间段）就会开启。在接下来的两周内，所有的维护者会把他们自上个版本以来积累的待处理内容全部发送给 Linus。我们有两周时间来添加所有新功能，然后他会发布第一个**候选版本**（Release Candidate 1: 简称 RC1，是正式版发布前供测试的预览版本）。从那时起的接下来七周，就只进行漏洞修复。所以，这期间只有漏洞修复、回归修复，我们会回滚一些东西，但不会再有新功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's a nine-week release because every nine weeks there's a new release going out, right? So there's Linus does a release this point in time and then the merge window is considered open and then for two weeks all the maintainers send Linus all the stuff they've had pending from the last release. We have two weeks to add all new features and then he does release candidate one. From there on it's bug fixes only for the next seven weeks. So it's bug fixes only, bug fixes only, bug fixes, it's regression fixes, we'll revert things, no new features.</p>
</details>

这个发布周期是基于时间的。我们有两周的窗口期，将所有已经存在于我们各自代码树中、被接受并证明有效的新功能合并到 Linus 的代码树里。九周的窗口期其实很短。我们过去曾有过长达三年的开发周期。问题在于，即使是六个月的开发周期，也存在一种担忧：你有一个功能，我想采纳它，但它还没完全准备好。我是否应该等待？但如果你知道九周后就能把你的功能加进去，而现在它只是没准备好，那就没关系。作为维护者，我就没有压力必须在它准备好之前接受你的新功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do I understand correctly that in the case of Linux is this a thing where every nine weeks there will be a release? It's time based. So we have that two week window of merging all the new features to Linus that have been in our tree and accepted already and proven to work. And the window is short nine weeks. We used to have three year long development cycles. And the problem there is even if you have six month development cycles, there's that fear of you have a feature, I want to take your feature, but it's not quite ready. Do I want to wait and things like that? But if you know that you can get your feature in in nine weeks from now and it's just not ready, it's not ready. The pressure is off me as a maintainer to take your new feature until it's ready.</p>
</details>

Linux 是世界上使用最广泛的操作系统，为大多数安卓设备、服务器、智能电视和嵌入式系统提供动力。但它究竟是如何构建的呢？今天，我们与 Greg Kroah-Hartman 坐下来谈谈，他担任 Linux 内核维护者已有 13 年，是三位 Linux 基金会会士之一。在今天的对话中，我们涵盖了 Linux 的普及程度、为什么移动版 Linux 的代码行数是服务器版的三倍、让一个变更被 Linux 内核接受并由 Linus Torvalds 亲自合并需要经历什么、以及 Linux 如何在没有产品经理或项目经理的情况下每年管理 4000 名贡献者等诸多细节。如果你是一名软件工程师，你将直接或间接地使用 Linux。本期内容将帮助你理解它为何如此普及，以及为其做贡献比大多数人想象的要容易得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Linux is the world's most widely used operating system thanks to powering most Android devices, servers, smart TVs, and embedded systems. But how is it actually built? Today, we sat down with Greg Kroah-Hartman, a Linux kernel maintainer for 13 years, who is one of the three Linux Foundation fellows. In today's conversation, we cover details on how widespread Linux is and why mobile versions of Linux have three times the lines of code as a server versions. What exactly it takes to get a change accept to the Linux kernel and merged by Linus Torvalds himself. How Linux manages to have 4,000 contributors per year yet have no product managers or project managers and many more details. If you're a software engineer, you will use Linux directly or indirectly. And this episode will help you understand why it's so widespread and how it's a lot easier to contribute than most people would assume.</p>
</details>

### 无处不在的操作系统：Linux 的规模与影响力

作为软件工程师，我们知道 Linux 很重要，因为它运行在我们使用和维护的大多数网络服务器上。它是一些人使用的桌面操作系统，当然，它的一个分支也为安卓系统提供动力。但关于 Linux，还有什么值得了解的呢？这个东西到底有多大？多复杂？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think as software engineers, we know Linux is important in the sense of it's it's running on most web servers that that we use and run. It's it's a desktop OS that some people use and it's of course, you know, powering a fork of it is powering Android. But what is there to know about Linux? How how big is this thing? How complex is this thing?</p>
</details>

它是一个操作系统，一个**内核**（Kernel: 操作系统的核心部分，负责管理系统的硬件资源，如 CPU、内存和外围设备，并为上层应用程序提供服务）。我们在无人察觉的情况下占领了世界。我开玩笑说，有 40 亿安卓 Linux 用户，但他们自己并不知道。相比之下，其他一切都只是四舍五入的误差，这让服务器领域的人不太高兴，但这是事实。它无处不在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, it's yeah, we took it's an operating system. So, it's a kernel. We took over the world without anybody noticing. I joke it's Android devices or 4 billion Android Linux users out there or and they don't realize it. That's everything else is a rounding error which doesn't make the server people happy with me but it's true. It's in everything.</p>
</details>

它存在于所有的嵌入式设备中，比如空调机组、汽车充电桩、卫星，还运行在国际空间站上。欧洲的空中交通管制系统，可能美国的也是，所有的金融市场都在使用它。我不知道还有哪个领域它没有占领。过去 10 到 15 年，销量前五的笔记本电脑是 Chromebooks，它们都基于 Linux。还有 iPhone，现在市面上每一个 5G 调制解调器里都运行着一份 Linux。高通所有的 5G 调制解调器，可能 4G 也是，但我确定所有 5G 调制解调器内部都有 Linux。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's in all the embedded devices. It's in the air conditioning units, the car electric charging ports, uh satellites, runs international space station. Really? Yeah. Yeah. Air traffic control for Europe and probably the US. All the financial markets. I don't know of any place that hasn't taken over. The number the top five selling laptops for the past 15, 10, 15 years. Chromebooks. Those are all Linux based. Not Apple, but the Chromebooks are. Oh, iPhones. So, every 5G modem out there is running a copy of Linux. Really? Yeah. Wow. Wow. So now with Apple doing their new ship, I don't know if it's the new one, but Qualcomm, all the 5G modems, probably the 4G, I'm not sure, but I know all the 5G modems have Linux inside it.</p>
</details>

### 内核揭秘：为何手机比服务器的代码量多三倍？

就内核本身而言，它有多大？我知道对于不同的设备，内核的组成部分会有所不同，比如服务器端的 Linux 和安卓设备会使用内核的不同部分。从贡献者数量和代码行数来看，它有多大规模？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In terms of the the kernel itself like how large is it? And I I know you know for for different devices it'll be split differently for for serverside Linux for for a an Android device it'll use different parts of the kernel. How how big is this in terms of contributors lines of code?</p>
</details>

代码行数这个指标很有趣。我们现在有将近 4000 万行代码。这是整个内核。其中，每个人都会运行的核心部分大概只占 5%，其余的都是硬件支持，比如不同的驱动程序、不同的设备、不同的架构、不同的芯片。你的笔记本电脑大约运行 200 到 250 万行代码，你的服务器大约运行 150 万行代码，服务器其实非常简单。而你的手机，大约运行 400 万行代码。手机是目前最复杂的 CPU 和交互设备，它们极其复杂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I know lines of code is not a great measure but lines of code is interesting. So we have just under 40 million lines of code right now. That's a lot. That's all the kernel that's the kernel. core part is like 5% of that that everybody runs and then everybody the rest of it is hardware support different drivers different devices different architectures different chips. so your laptop runs about two two and a half million lines of code your server runs about one and a half million servers are really easy those are very simple things your phone runs about 4 million your phone so are the most complex pieces of CPU and interaction out there they're just crazy complex.</p>
</details>

我们知道代码行数不是衡量复杂度的完美指标，但在这里比较两者还是有一定意义的。你说服务器大约是 150 万行，而手机是 400 万行，差不多是三倍。为什么会有这样的差异，尽管我认为服务器处理的都是任务关键型的工作？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">why why is Like can we just pause for a second? So so like again lines of code we know is not a perfect measure of complexity but but in in this sense comparing it between the two of them with the same code base is somewhat so you said roughly give or take a server is one and a half million a phone is 4 million like three times the lines of code for a phone. Why the difference even though I I would I would think that the server you know does all this mission critical stuff.</p>
</details>

服务器其实非常简单：一个 CPU、一张网卡和存储设备，仅此而已。而手机上的**SoC**（System on a Chip: 片上系统，将处理器、内存、输入/输出接口等多种功能集成到单一芯片上）要复杂得多。你有电源控制、时钟管理、五种不同的总线与不同类型的设备通信。还有电池控制、与调制解调器的通信（调制解调器里还运行着另一个 Linux 版本）、USB 输出、用于音频的 USB 旁路、音频驱动程序，以及无数不同的时钟和物理层接口等等。它是一个八核机器，这些处理器有时大小还不同，比如大小核架构，这增加了功耗管理的复杂性。它们都运行相同的 Linux 核心，但复杂性主要来自驱动程序和设备。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A server is really simple CPU and a network card and a storage and storage that's it. So SOC on a phone has you have power control, you have clocks, you have five different buses on there talking to different types of devices. You have battery control, you have talking to your modem, you have another version of Linux in the modem. You got USB out the back. You got USB bypass to talk to the audio side. You have audio drivers. You have a zillion different clocks and fives and all sorts of stuff in there. The SOS and it's a eight core machine. It's there's eight processors and nothing. Those are not trivial things. And sometimes those processors are different sizes. So you have big and little sizes which add the complexity just for some control for some power management but they all run the same core of the Linux but it's the drivers and the devices and things like that.</p>
</details>

以 Pixel 手机为例，谷歌发布了一个所有安卓设备都会使用的核心内核，它不针对特定硬件，只说是 ARM 64 架构。但为了让 Pixel 手机正常工作，Pixel 团队额外添加了 300 个驱动程序。其中一些可能很小，只针对某个微型芯片，但你的手机确实是软件领域最复杂的设备之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So your Pixel phone I I look at Pixel phone Google ships a core kernel that all Android devices pick not hardware specific just says ARM 64. Pixel has 300 other drivers they add to get the Pixel phone working. I mean some of these are tiny. This is for this tiny chip. this this but your phone is is really one of the most complex beasts out there for software.</p>
</details>

可以说，这种复杂性和代码行数的增加，主要与硬件及其功能有关，而不是任务的关键性。因为无论是手机、服务器还是我的电视，都需要稳定运行，这是基本要求。顺便一提，过去 15 年里所有的电视机也都在运行 Linux。我的三星电视、三星洗衣机和烘干机，甚至三星手表，都在运行 Linux。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is it safe to say that you know the complexity and you know the lines of code will to some extent scale with that has to do with the hardware the capabilities and and you know not about you know like how mission critical because of course it need the phone needs to be be stable the server needs to be stable my TV needs to be stable so you know that's just kind of a given right yeah oh and all TVs for the past 15 years are all running Linux so that's oh so my Samsung TV is running Linux Oh yeah oh yeah Samsung my your Samsung my Samsung washer and dryer are running Linux. so Um your Samsung watch is running Linux. So um Samsung has their own yeah distro all works really nice.</p>
</details>

### 从宏内核到驱动程序：Linux 的架构设计

复杂性最终归结于硬件。内核控制硬件。Linux 的工作是让所有硬件对程序来说看起来都是无关紧要的。这样你就可以编写同一个**用户空间**（User Space: 操作系统中内核以外的内存区域，供用户应用程序运行）程序，并在不同的硬件上运行它，它就能正常工作。内核的工作是以一种通用的方式管理内存和设备，并将其提供给用户空间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah it's all due down to the complexity of the hardware. So the kernel controls the hardware. The job of Linux is to make all the hardware look agnostic to programs. So you can write the same user space program and run it on the same on different hardware and it does it just works. hard a kernel's job is to manage memory and devices in a common way and provide that to user space.</p>
</details>

内核和用户空间是如何划分的呢？芯片有一个受保护模式和一个非受保护模式。受保护模式是操作系统内核运行的地方。在这里，我们共享所有资源，它是一个扁平的地址空间，我们不隔离进程。而用户空间进程则运行在此之上，我们对它们进行隔离，每个进程都以为自己拥有整台机器，但实际上并非如此。这就是多任务处理。内核的作用是以通用的方式为你提供内存、存储访问、网络访问，或者提供管道让用户空间的网络堆栈绕过内核。它让所有不同的鼠标、USB 存储设备、图形控制器以同样的方式呈现给用户空间，这样用户空间就可以用一种与硬件无关的方式与内核对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">kernel versus user space so there's an idea um chips have a protected mode and a not protected mode in a very simplified way there's different levels of protection so The protected mode is where the operating system runs the kernel. Yeah. And that is where we share all the resources. It's one flat address space. And we are not isolating processes. So a user space process then runs on top of that and we isolate them and they they all individually think they have the whole machine but they don't. Yeah. So it's multitasking. You can run multiple programs at the same time. And the kernel is there to give you memory to give access to storage to give access in a common way to give access to the network in a common way to give or provide the pipes to go around the network stack in the user space. We provide a way to make it so that user space can talk to the kernel in an agnostic way and it'll their stuff will just work because it all the graphics work the same interface. We talk to keyboards all the same way things like that.</p>
</details>

那么驱动程序呢？它们总是存在于用户空间吗？不，我们所有的驱动程序都存在于内核中。Linux 不是微内核架构，而是**宏内核**（Monolithic Kernel: 一种操作系统架构，其中整个操作系统，包括设备驱动程序、文件系统等，都在单一的内核地址空间中运行）架构。这意味着所有代码都在同一个地址空间中。因此，任何一个驱动程序的 bug 都有可能导致整个内核崩溃。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's a commonality of providing a a shim layer above the hardware and then for example drivers do they always live in the user space? So yeah no all our drivers live in the kernel. So the kernel and drivers are all Linux is not a micro kernel architecture it's a monolithic. So the the code is all in the same address space. So a bug in any one of them has a chance to take any part of the kernel down.</p>
</details>

Linux 将所有架构的所有驱动程序都打包在一个大的 tarball 里，这就是那 4000 万行代码。其他操作系统，比如 Windows，会尝试将核心内核与驱动程序分开，你可以额外安装驱动。但我们的方式是将所有东西紧密地捆绑在一起。这样做的好处是，我们可以重构驱动程序和内核之间的接口。平均而言，Linux 驱动程序比其他操作系统的驱动程序小三分之一，因为我们可以看到所有代码的共性。如果我们看到三个用于相似硬件的不同驱动，我们就可以将它们合并，使其更小、更简洁，并重构 API。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Linux ships all the drivers for all the architecture in one big tarball. We that's 40 million lines of code. Other operating systems try and go out there and um had split things off. So the core of Windows is their kernel and then you can put drivers additional on the top. Um we tie everything together in one big giant blob. Theirs is still monolithic. any driver and theirs will can crash the kernel within reason. Um, in that way we can refactor the way the interfaces between drivers and the kernel are. Uh, Linux drivers are on average one-third smaller than other operating system drivers because we can see the commonalities if you send oh three different drivers for three kind of same hardware. Well, let's combine them all make it smaller and refactor things and make it easier and oh, let's change this API. And this has to do with the open source approach, right?</p>
</details>

我们唯一的固定接口是用户空间和内核之间的接口。我们保证不会破坏它。我们一直以来的保证是，你应该总是能够升级你的内核，而不用担心旧程序会崩溃。如果确实发生了破坏，那是我们的错，我们会进行回归修复。这是我们内核开发的唯一真正规则：不要故意破坏用户空间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that you see it like so we have we see all this common code and we can refactor it and we can make it better and cleaner and we're not tied to any fixed interface. Our fixed interface is between the user space and the kernel. We will not break that. That's our guarantee. We've guaranteed it for a long long time. And so we always want you to be able to upgrade your kernel and not feel worried that your old programs are going to crash. So you should always be able to upgrade. That's our guarantee to you. If it does break then it's our fault and we'll regress. There are some exceptions. There's some gray areas. There's some really low-level parts between the user space and kernel that we kind of work around and we argue about these all the time, but we never try and break user space on purpose. That's our number. That's our only really rule of of kernel development. Don't break user space on purpose.</p>
</details>

### 一次代码提交之旅：一个补丁的完整生命周期

让我们看一个具体的例子，看看开发流程是如何进行的。去年我们有 4000 名开发者。他们做出一个变更，然后将邮件发送给一个维护者，这个维护者负责内核的一个子集。内核的每个部分都有人负责。然后，这些维护者再将变更向上提交给子系统维护者。例如，USB 串口驱动的变更会先发送给 USB 维护者，然后再由 USB 维护者提交给 Linus。这就像一个金字塔结构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Can we look at a specific example of how development actually flows through uh with a specific patch? Before I show a specific example, so say so we had 4,000 developers last year. So, they make a change. So those 4,000 developers will send an email to a maintainer and a maintainer maintains a subset of the kernel. Every part of the kernel is owned by somebody and then you are one of these maintainer. So then yeah I maintain some drivers and things like that but then those maintainers send things off up the tree to a subsystem maintainer. So like USB serial then will get sent to USB and then USB will go to to Lenus. So it's kind of a pyramid scheme that way.</p>
</details>

这是一个由一位名叫 Chester 的人提交的变更。他修改了 USB 串口驱动程序，具体是针对一个名为 "option" 的芯片。这些是 USB 转串口设备，常见于调制解调器等多种设备中。由于这类设备没有标准，你必须为每个想使用的设备添加一个自定义的设备 ID。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here is a change. So this was uh written by somebody named Chester. um he made a change to the USB serial driver. Uh it's an option. The chip is called option. Um these are a USB to serial devices. Um they're in modems. They're in lots of different things. There's a ton of different ones and there's no standard for these types of devices. So you had to add a custom device ID for every single one that you want to use. It's just the way they work.</p>
</details>

这是一个补丁，它就是一封电子邮件。主题行写着“USB serial option: adding whatever adding that device”。编写内核变更最难的部分其实是描述。代码很简单，解释它为什么这么做却很难。你通常不是解释它做了什么，而是解释你为什么这么做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so here's a patch and here's the description of it. Um this is just an email. The description here is there's the subject line. Yeah. USB serial option adding whatever adding that device and then here's so good part about uh hardest part about writing a kernel change is the description of what's going on really yeah I mean the the code is easy it's the description explaining it is hard right you don't explain usually what it's doing you have to explain why you're doing it.</p>
</details>

在这个例子中，提交者说这个驱动是某个 Cat 6 调制解调器的一部分，并提供了一些设备信息。然后是 **Signed-off-by** 行，这是我们很久以前创建的，用于表明我拥有此变更的适当作者身份和所有权，并根据项目许可证（GPL）将其贡献给项目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">for something as simple as this it's like it's really easy so this person says uh this driver is part of a cat 6 modem uh the product ID is shared across multiple modems it gives some a a little dump of what it looks like in the device. And then there's some more information. There's a signed off by line. And signed off by is what we created a long time ago. Um that shows that I have the proper authorship of this and ownership and I give it to this project under the license by which the project is run. So it's saying I'm licensed this thing under the GPL.</p>
</details>

描述之后才是真正的代码变更。红色是删除的行，绿色是添加的行。他添加了几个新的设备 ID。USB 设备有供应商 ID 和产品 ID，这就是这些十六进制数字的含义。这个变更只是为一些新供应商的芯片添加支持，驱动本身已经能工作了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then way down below is probably the oneline patch. This is all just so this is all the description. This person is giving context on like here's what needs to do about the model the different you know specifications or what and here's the change. So somebody changed this removed that line the red is removed the green is add. Yeah. So somebody added and had to reformat the lines based on some new ones they added. Um and that's it. So they add a few new device IDs and then there's a device ID and then we see a hex a few hex numbers. Those are like some IDs here. So for USB um USB devices have a product and a uh vendor and a product ID. That's how they're vendor and then they have products and then there's some subvice and subproduct IDs. Got it. Got it. So that's what this is for. Okay. So they're saying we're just adding support for some the driver already works for these chips this chip but we just have a new ID because a new vendor came along and they wanted to put their own vendor ID on it. Very common.</p>
</details>

这个变更的代码很简单，但描述却非常详尽。这与 GitHub 的模型不同，在 Linux 中，所有描述信息都必须包含在 Git 提交本身，而不是在外部的 Pull Request 中。这样，当你以后查看仓库历史时，所有的上下文信息都不会丢失。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it sounds like this change is as simple as it get in terms of the code changed but still the description was very extensive right so very des extensive. This should be in the patch itself, not the PR. Ah, so a PR would be so say you have 10 changes you want to make. So a PR would be the patch zero out of 10. This this is the commit. This is the commit itself. Which is a big problem of why I don't like the GitHub model is because people don't put the changes in the GitHub in the git commit. No, because the git repo Well, no. So there's a problem when you commit the when you're looking at the repo later and you look at the change, you don't see the pull, you can't see the pull request information. Yeah. And it's gone. And that's a big problem I feel with the GitHub model.</p>
</details>

提交者使用一个脚本来确定应该将补丁发送给谁。在这个例子中，邮件被发送给了维护者 Johan 和我，以及 USB 邮件列表，并抄送了其他一些过去修改过这个驱动的人。发送后，他立刻发现了一个小问题，并重新发送了一个 V2 版本的补丁，并在邮件中说明了 V1 和 V2 之间的区别。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, he sent it to the Yeah. So, the owner to this is Johan. Uh there's a script we have that says take any patch and give me the people who are responsible for this and the mailing list. So Johan and me um picked this because us and sends it to the USB list and copies a bunch of other people that I guess they worked with and that have changed this driver in the past and and then the the copy is also done with the tool as you said. It kind of looks to who who touched this code or or who might all automated. Yep. All automated. He sent it and this the mailing list has two copies of it. That's just because it went to two different mailing lists. But then they said, um, oops, I messed up. There's an email from the person instantly after he sent it off. Oh, and said, I I messed up. So they go and change the comment and then they resend it and you just send a new version. So here they sent a version two patch. If you can see that it says version two, right? Oh, there. Version two. Got it. And then here's the same information. And then there should be some comments about what changed between the two versions. Yes. Changes in version two from the previous one. And there's a link back to the first one. Nice. Very nice.</p>
</details>

一周后，提交者发邮件提醒，Johan 回复说，补丁是在合并窗口期间提交的，他会处理，但需要等到窗口期结束。这是一个为期两周的“静默期”，维护者们正忙于将他们的变更推送到 Linus 的主线，不能接受新的功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First they said um oh he Chester wrote hey please please please apply this after two weeks after a week he said because after a week or after two weeks it's nice hey what happened to this what's going on um Johan said you submit this patch during the merge window um I'll talk about how we do our development model but there's a twoe merge window for when we do releases that Lenus takes all the changes from all the maintainers that have been in their development trees we can't add new changes at that point in time so there's a two kind of blackout for new development, but this is where all the stuff is flowing into Lenus for the next release.</p>
</details>

最终，Johan 接受了补丁，并友好地帮提交者修正了评论的格式。对于这种一次性的贡献，我们希望过程尽可能简单。然后，Johan 将这个变更应用到他自己的代码树中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So then Johan has it. Yeah. Johan applied it to his tree because he then wrote saying, "Hey," and Johan is very nice here. He said, "You kind of didn't do the comments in the proper format. I fixed it up for you." Oh, nice. So for driveby changes like that, we want to make it really easy and make it We're not mean people. I I mean I mean I mean clearly this this feels like it's a person who is unlikely to become a regular contributor. They're getting their work done, right? They're they're adding they have a device that they have to ship. Yeah, pretty much. But we want to be friendly and open and easy to everybody because everybody submits their first patch at one time, right?</p>
</details>

### 信任的链条：Linux 开发的核心协作模式

这个层级结构中，人的因素至关重要。如果我作为一个维护者接受了你的代码，我就要对它负责。如果这是一个简单的、只有你关心的驱动，那没问题。但如果这是内核的核心部分，我接受了你的变更，而你之后消失了，那我就要负责维护它。因此，我必须相信你要么会一直在这里，要么我足够理解你的代码以便将来维护。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">part of the hierarchy is the human aspect. So I if I take code from you as a maintainer um I'm now responsible for it because my name's on it. So, if it's a simple one-off or it's a simple driver that nobody cares about except you, great. I know you're the only one that's going to be affected by it, it's fine. But if it's the core part of the kernel and I take changes from you now, I'm responsible for it if you disappear. So, I have to trust that either you're going to be here or that I understand it good enough that I can maintain it.</p>
</details>

Linux 开发的模式就是信任。这是人与人之间的信任。我会接受某些人的代码，不是因为我相信他们写得完全正确，而是因为我相信当他们搞砸时，他们会回来修复它。因为我们都会犯错。我们过去曾被一些重大功能烧过。很久以前，一些功能被合并到网络核心子系统后，提交者的邮箱就消失了，网络开发者花了六个月才理清这个烂摊子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, part of Linux development trust or issue or model is trust. And it's trust in human interaction. like I will take stuff from people if they whatever they send me cuz I trust not that they got it right but they'll be there to fix it when they get it wrong because we all get it wrong and that's that's the part so that's that's the trust model we have and that we've been burned in the past by some major features were landed in the networking core subsystem a long time ago and then once they landed and were merged and taken the email address behind it disappeared and the network developers had to took six months to unwind the mess.</p>
</details>

### Linux 中的拉取请求与合并流程

Johan 是一个子系统维护者，他维护着 USB 转串口驱动。他会向我这个 USB 维护者发送一个**拉取请求**（Pull Request）。这是 `git make pull-request` 命令的输出。它会生成一封邮件，请求我从他的代码仓库的某个特定标签（tag）拉取代码。这个标签是用他的 GPG 密钥签名的，所以我可以验证这确实是他。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Johan then makes a pull request to me. Mhm. So this is an output of the get make pull request. I don't know what the actual command and it this is what a pull request from get and this is because Johan is a subsystem maintainer and it maintains the USB to serial drivers. There's a bunch of drivers for this types of things. And then he sends it off to me the USB maintainer. Got it. and he says take this patch or pull from this tree at this tag and it's a signed tag. So it's signed with his GBG key so I can verify that it's really him. Yeah. When I pull from it.</p>
</details>

当我收到这样的拉取请求时，我通常不会逐一审查其中的每个补丁。我信任他发送给我的这四个补丁是好的。我知道 Johan，我知道如果出了问题他会来解决。对于我不那么信任的子系统，我会要求他们通过邮件发送补丁，我会亲自审查，并在审查后加上我自己的 `Signed-off-by`。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But he sent me a pull request and I a pull request is that I don't actually review the changes in it. I'm not reviewing each individual patch through email. I'm trusting that he sent me four patches here and that they're good. Yeah. And I have known Yan and I know that he will be there if something goes wrong. Yeah. Some subsystems that I don't necessarily trust as well. Um, I will make you send them an email and I'll actually review them and then I'll review them. And then when I review them, I add my signed off by to it.</p>
</details>

我接受了他的拉取请求，并将其放入我的代码树中。几天后，我将这个变更连同其他一堆 USB 修复一起发送给了 Linus。我向 Linus 总结了这次提交包含的所有内容，并附上补丁列表和差异对比。Linus 接收了这些变更，并将其合并到他的代码树中。整个过程大约花了一周半的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Johan sends it to me and then I take it and I put it in my tree. I pulled it and pushed it out. Yes. And there's my email that says that. So now I'm responsible. It's in my tree. Yeah. So now the um since this is a device ID, these can go to Lenus at any time. We can add bug fixes or new device IDs. So then a few days later, I send this change off to Lenus. So I send Lenus. I said, "Hey, Lenus, take all these following changes, these changes, and here's a whole bunch of USB fixes." So, I summarize it all. I say, "These are all the things in here." And these are going to be like a few dozen of of patches, something like that. And but here's the list of the patches down below. And here's of them. Here's the diff of them to make sure that this diff matches what he pulls from. This is signed with Mikey. Lenus takes this and he puts in his in his tree. So then it got picked up. All this whole process took about a week and a half.</p>
</details>

### 稳定胜于一切：开发分支与长期支持分支

Linus 每九周发布一个版本。但你运行的是上一个版本，你希望尽快得到漏洞修复。很久以前，我们意识到人们不想等八周。因此，我们创建了一个稳定树（stable tree）模型。当 Linus 发布一个版本时，我会基于他的分支创建一个稳定分支，比如 6.4.1、6.4.2 等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Lenus does a release every nine weeks. Yep. Bug fixes come in during those nine weeks or the last release. You're running the last release, right? You want those bug fixes. A long time ago, we realize that people don't want to wait 8 weeks. So let's create a model of we have a development tree and we have a stable tree. So when Lenus does a release, I fork off Lenus' branch and I say this is a stable branch. So if 6.4 four. I do 6.4.1.2.3.4.5.</p>
</details>

我每周都会发布一个稳定版。规则是，补丁必须首先进入 Linus 的代码树。我们不能出现分支分歧。如果一个漏洞修复在 Linus 的树里并且符合标准，我就会把它放入稳定树并发布。当 Linus 发布新版本时，我就会丢弃旧的稳定树，创建一个新的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I do a release every week and what I do is the patches have to be in Lenus' tree first. We can't diverge. So if it's in Lenus' tree first and a bug fix and it meets this criteria, I put in the stable tree and I do a release. And so we do new releases every week for that. When Lenus does a new release, then I throw that stable tree away and I make a new stable tree.</p>
</details>

对于需要长期维护的设备，我们还有**长期支持**（Long-Term Stable, LTS）树。我每年会选择一个内核版本，并维护它两年，有时甚至长达六年。你的安卓手机运行的可能是一个五年前的内核，但它仍然在接收漏洞修复。我同时维护着大约四个 LTS 树，我们将所有修复向后移植到所有不同的分支。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">People want to make a device. You want to make it something that's going to last a long time. So, what we come up with the idea is long-term stable trees. And there I pick one kernel a year and I maintain it for to start with two years, sometimes six years. So your Android phone is running off a kernel that's five years old, but it's still getting bug fixes back to it. So I I maintain like four st long-term stable trees at the same time and we backport all these fixes to all the different branches and then we pick one a year and we maintain these.</p>
</details>

### 开源社区的职业路径与贡献文化

Linux 开发几乎一直都是有偿工作。早在 2006 年，80% 的贡献者都是由雇主支付全职薪水来做的。公司需要懂 Linux 的人来解决他们的问题。支付几个工程师的薪水来添加一些新功能，远比自己写一个操作系统要便宜得多。这就是 Linux 的魅力所在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, Linux has almost always been paid to be worked on. So, I started keeping the numbers back in what 2006 or something. And at that point in time, 80% of the people that contributed were being paid to do it full-time for their employer. And their employers want people who know how to do Linux because they want to solve their problems. They want Linux to It's much cheaper to pay a few engineers to add a few new features than it is to write your own operating system. That's the beauty of Linux.</p>
</details>

过去有个笑话：向内核提交三个变更，你就能找到一份工作。这其实不完全是笑话。只要不是拼写修复，这基本是真的。当然，做拼写修复也很棒。我们有专门做“清洁工”工作的人，他们清理代码、修复编码风格问题、修正注释中的拼写错误。这是一个很好的起点，因为它能让你熟悉整个工作流程：如何制作补丁、如何发送邮件等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we've been doing it. And the joke used to be you get three changes into the kernel, you get a job. It's not really a joke. Um, as long as they aren't spelling fixes, but um some people do spelling fixes, which is great. We have people that do janitorial work to the colonel. They sweep the tree for common problems and they just clean stuff up and keep code alive and keep make sure it's fresh proper coding style. We have coding style issues. We have people just fixing spelling mistakes and comments which is great because you got to start somewhere. In fact, spelling mistakes and comments is a great place to start because it it makes you get the workflow down. You figure out how to make a patch. You figure out how to send an email.</p>
</details>

### 维护者的日常：编辑、审查与社区互动

作为一名全职的内核维护者，我的日常工作和大多数开发者有些不同。网络子系统的维护者曾说过最好的比喻：我们就像编辑。我们曾经是作家，但现在我们所做的只是评论别人的作品。当然，我们也有自己的小项目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you're now a full-time fulltime kernel maintainer. What does your kind of dayto-day or week to week look like? Cuz I'm I'm going to assume it's it's going to be a little bit different than most developers who, you know, like write code, review code, do those kind of things. So, yeah. I mean, I been working for Linux Foundation for what, 13 years now. Or if you're a maintainer, a maintainer is, and the networking maintainer said this the best. Um, we're like editors. We used to be a writer. All we do is critique other people's stuff now. But because we're a writer, we have a little side project. So, we do have little things that we do dabble in stuff.</p>
</details>

我的日常就是阅读别人的东西。我每天会收到大约一千封邮件。当然不是所有都需要我处理。我会把特定子系统（比如 USB）的邮件筛选到专门的邮箱里，然后每周集中处理一次。我可能会打开收件箱，看到有 200 封关于 USB 的邮件和补丁需要处理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, my day-to-day is I read other people's stuff. Like I said, I get a thousand emails a day to do something. You're not excitating. No. Yeah. You you get a thousand emails a day. It's Wow. So I don't have a lot of it just file off and I do and it's like oh this this like I subscribe to a number of kernel subsystem mailing lists to see what's going on. Yeah. And I don't have to do something with all of those. Yeah. But some of them you need to do something. Yeah. Some of these I do need to do something with and some like so I'll so say for USB is one of the subsystems I retain. I showed them all off to a mailbox and then once a week I'll go through them all and say okay let's review all these. And so I'll look at my inbox, I'll have 200 USB emails to patches to go through and other people review them and other stuff like that.</p>
</details>

我们和很多公司不同，我们不接受宏大的提案。不要发邮件说“嘿，如果我们做这个会不会很棒？”我不想看到那个。我想看到能工作的代码。代码能工作，就证明你花了时间，证明了这是可行的。不一定做得对或做得最好，但它至少能跑起来。现在，你有了“入场券”，我愿意和你一起合作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we don't have grand proposals sent to the colonel list. We don't say, "Hey, wouldn't it be great if you did this?" I don't want to see that. I want to see code that works. And I love it. As proof, then code that works matters is because um you've taken the time, you've proved that this can be done. Yeah. Now, not necessarily that it's done right or done the best way, but it could be done. Yeah. And that's now you have the skin in the game, and now I'm willing to work with you and let's go on that.</p>
</details>

### 拥抱未来：在 C 语言主导的内核中引入 Rust

我们内核里已经有 25000 行 Rust 代码了。大部分只是绑定代码，还没有真正的功能。在最新的版本中，如果内核崩溃，它会显示一个二维码，你可以拍照获取崩溃转储信息，那段代码就是用 Rust 写的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have 25,000 lines of Rust in the kernel already. Oh, we do. Okay, awesome. Yeah. Um so most of that is just bindings. There's no real functionality. Um in the latest release, um if the kernel crashes, it'll put up a QR code. You can take a picture of it to get the crash dump. That code was written in Rest. Oh, nice. Um that's in Rest.</p>
</details>

几年前，Rust for Linux 的开发者们来找我们，说他们觉得准备好了。我们说：“好，让我们试试这个实验。你们愿意做这个工作，我有什么理由拒绝呢？”在 Linux 中使用 Rust 的问题在于，写一个核心部分比写一个驱动程序要容易。驱动程序需要与内核的各个部分交互，比如锁、输入输出、驱动模型、USB 端口等等。在 Rust 中，你需要在 C 代码和 Rust 代码之间建立一个绑定层。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A couple years ago, they came to us and said, "We think we're ready to do this. Do you want it?" And we said, "Yeah, let's try this experiment. You're willing to do the work? Who am I to tell no to?" Um, I mean, it's Linux. Yeah. I mean, it's it's it's now the problem with Linux and Rust is it would be easier to write a core piece of Linux and Rust than it would be to write a driver. A driver is consumed from everywhere in the kernel. So you want to talk locking, you want to talk input and output, you want to talk talk to the driver model, talk to the USB port, all this stuff. Drivers have to can be really tiny because they take resources from the rest of the kernel. In Rust, you need to have a binding between the C code and the Rust code.</p>
</details>

内核的 C 代码有其非常固执的对象处理和内存模型，Rust 也有自己的一套。将这两者融合起来非常困难，而且产生的 Rust 代码是我见过最复杂的。所以，我们需要为内核的每个不同部分编写绑定，才能用 Rust 写驱动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's an intermediate layer. The C the kernel in C has these very opinionated model ideas of how it handles objects and how it does memory and how it it has its memory model. Rust has its very opinionated model of how it does this type. Same idea. This meshing is tough. This meshing is also the most crazy complex Rust code you've ever seen. So from a new Rust developer like me, I can barely read the bindings, but I trust other people are doing it. So yes, so the trick is we now need to write a binding for every different part of the kernel in order to write a rest code scope, a rush driver.</p>
</details>

我查看了过去 18 年来所有的内核 bug，其中一半都可以用 Rust 修复。都是些愚蠢的 off-by-one 错误，比如数组越界、忘记清理错误路径、忘记解锁等等。当然，逻辑错误在 Rust 中依然会存在。但我认为 Rust 需要被引入，因为它应该能让编写驱动程序变得更容易。设备是动态的，处理引用计数非常棘手。Rust 正在迫使我们更好地文档化我们的 C 代码，并清理它。如果 Rust 明天就消失了，它也已经帮助我们改进了 C 代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I've seen every single kernel bug for the past 18 years. Half of them will be fixed with Rust. It's just it's just going to be fixed with Rust. It's the stupid oneoff bugs. It's the I oops, I overwrote an array and I didn't realize it by one. Oops, I um forgot to clean up this error path. Yeah, I forgot to unlock this lock. It's I It's stupid little things like that. There's logic bugs. Of course, you can write logic bugs in Rust. You'll always have those, right? But I think yes I think Rust needs to come in because it should be easier to write drivers in this stuff. We have a lot of issues with lifetime rules of when you yank out a device. Devices are dynamic and dealing with these reference counting of things like that is very tricky to get right. Rust is forcing us to actually document our C code better and it's cleaning up. So if Rust disappeared tomorrow, I've had to clean up code in the driver core that's like, oh yeah, I guess we can do things better and safer in the C code in order to make Rust easier.</p>
</details>

现在，我们已经有了足够的基础设施，我认为我们已经达到了一个临界点，你会开始看到更多新的东西出现在内核中。我们需要这样做。政府已经有规定，不能在产品中使用像 C 这样的内存不安全语言。如果我希望 Linux 成功，我们就必须改变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think we've hit the tipping point where you'll start seeing new stuff in there and we need to do that. I mean there's mandates from governments that you can't use memory unsafe languages like C and products. Yeah. And if I want to see Linux to succeed, which I do, we're going to have to change. And I can say going forward, if you want to write in rest, you can write in rest. Now, that being said, we still have 40 million lines of C code.</p>
</details>

### Linux 的演进：永无止境的开发之路

我的一个 IBM 经理曾经每年都来问我：“嘿，Linux 完成了吗？”我花了十年才想出答案：“当你停止制造新硬件时，它就完成了。”只要有新的硬件或不同的工作负载出现，我们就得继续开发。我们是少数几个因为新硬件而必须不断添加新功能的项目之一。我们添加功能不是为了好玩，而是为了解决某人遇到的实际问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I used to have I had a manager at IBM every year come to me and said, "Hey, is Linux done yet?" I was like, "No." It took me 10 years to finally come up with the answer of um it'll be done when you stop making new hardware. And when they stop making new hardware or having different work classes, then we'll stop. But we're one of the few projects that keep having to add new features because of new hardware. We're not doing it just because I mean Lin has been working for all of us for 20 years. We're doing it to support new hardware to support new use models to support things. We don't add things for fun generally. We add it to solve a problem that somebody had.</p>
</details>

至于 LLM 是否会影响开发方式？不会。它们都是用 Linux 内核代码训练的，所以你可以用它写出另一个驱动程序。但 LLM 擅长编写样板代码，而在 Linux 驱动中，我们已经通过核心抽象把样板代码降到了最低。我们确实使用类似的技术来发现 bug 和匹配修复方案，但这方面的研究我们已经做了八年了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">will LLMs have any impact on on how development is done? No, no, not there's not. I mean, they're all trained on Linux kernel code. So, you write out another driver, but LMS are great for writing um boilerplate code and things like that. In Linux drivers, you don't have much boilerplate code because we've stemmed that down into the core and made that work better. Um LLMs are used to find bugs and find the bugs fixes to match that we should be taking. So, we but again, we've have published papers on that for eight years. Um there's been lots of research on that. Um, so we we've been using that for a while.</p>
</details>

### 快问快答：Greg Kroah-Hartman 的个人见解

**你贡献过的最难忘的补丁是什么？**
这又是一个关于人的故事。21 世纪初，我们开始收到一些非常高质量的补丁，用于我们不太了解的硬件。我们很好奇这些信息的来源。后来我们邀请这位贡献者参加我们的年度维护者会议。他来了，还带着他的妈妈，因为他当时还在上高中，只有 17 岁。我们谁都不知道。他后来去了 MIT，现在是斯坦福的教授。你看到的只是一个电子邮件地址。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's the most memorable patch that you've contributed to in Linux? So, this is going to be about people again. early 2000s um we were starting to get Microsoft was saying Linux is a cancer. We're all worried about Linux. Um we started getting some really really good patches for some hardware that we really didn't know that well that was showing some really good stuff and it was like this is really good and we're like where did you get this information? How did you know this stuff? And the person wrote back and said here's how I found this. Here's how I tested it. How they did this? like okay all right we took this and over time we took all these patches over time and then we have this conference once a year for all the maintainers and you get invited to it and we're like oh let's give them an invite because it was really good and they came and they showed up and he he showed up and he's like a sorry I had to bring my mom because he was in high school he was 17 years old none of us knew and he contributed and it was like okay great and it turns out um he later went on to MIT And now he's a professor at Stanford. Wow. Yeah. All you see is an email address.</p>
</details>

**你最喜欢的编程语言是什么？**
仍然是 C。我每天都用 C，已经用了 30 年了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's your favorite programming language? It's still C. Still C. I mean I've been doing C for what 30 years every day. So yeah C. Yeah.</p>
</details>

**你会推荐读哪一两本书？**
旧版的《代码大全》（Code Complete）是一本非常好的书。它教会我编码风格很重要，因为我们的大脑是基于模式工作的。当模式一致时，元数据就消失了，我们可以更容易地看到逻辑。另一本很有趣的小书是《编程珠玑》（Programming Pearls），关于位操作和一些精巧的小算法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">what's a book or two that you would recommend reading? The old code complete book was a really good one. That was a really good one. It taught me that um coding style matters. It doesn't matter what the coding style is. It's just a a spe a generic a set coding style matters because our brains work on patterns and as programmers we're reading patterns and when the patterns the same the metadata goes away and we can see the logic easier. Code complete is aged a little bit weirdly. If you look at the first book it has a lot more C examples and whatnot but it it talks about the basics behind programming all that stuff and that was a really really good book. Um, on the flip side, another really fun one, um, that's really tiny, programming pearls and like bit fiddling and, um, cute little algorithms and neat stuff like that, which surprisingly we still do today.</p>
</details>