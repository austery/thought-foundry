---
author: Veritasium
date: '2026-02-25'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=aoag03mSuXQ
speaker: Veritasium
tags:
  - software-supply-chain
  - open-source-security
  - backdoor-exploit
  - social-engineering
  - data-compression
title: XZ 后门事件：一次险些瘫痪互联网的供应链攻击
summary: 本视频深入探讨了2024年震惊全球的XZ Utils后门事件。一名名为Jia Tan的攻击者，通过长达两年半的社会工程和代码渗透，成功在广泛使用的开源压缩工具XZ Utils中植入了一个隐蔽的后门，该后门能够绕过OpenSSH的身份验证，从而获取对全球数百万Linux服务器的远程控制权。视频详细解释了该后门的技术实现原理，包括特洛伊木马、Goldilocks攻击窗口和动态审计钩子等。最终，一名微软工程师Andres Freund偶然发现了这一漏洞，及时阻止了一场可能导致互联网瘫痪的灾难。事件揭示了开源软件供应链的脆弱性以及对维护者支持不足的问题。
insight: ''
draft: true
series: ''
category: software-development
area: tech-engineering
project: []
people:
  - Richard Stallman
  - Linus Torvalds
  - Lasse Collin
  - Jia Tan
  - Tatu Ylonen
  - Andres Freund
companies_orgs:
  - AT&T
  - MIT
  - Free Software Foundation
  - Xerox
  - Red Hat
  - Microsoft
  - NTT
products_models:
  - Unix
  - Linux
  - GNU
  - Xerox 9700
  - GCC
  - Bash shell
  - General Public License
  - Secure Shell (SSH)
  - OpenSSH
  - XZ
  - Fedora
  - Red Hat Enterprise Linux (RHEL)
  - Debian
  - Ubuntu
  - Postgres
  - Git
  - Valgrind
media_books: []
status: evergreen
---
### 互联网危机：XZ 后门事件

**Derek**: 2021年，一名黑客在世界上最重要的操作系统中发现了一个致命的弱点。

<details>
<summary>Original English</summary>

**Derek**: In 2021, a hacker uncovered a fatal weakness in the world's most important operating system.

</details>

**未知发言人**: 如果你有一把能进入互联网上任何服务器的钥匙，你会怎么做？

<details>
<summary>Original English</summary>

**未知发言人**: What would you do with a key that gets you into any server on the internet?

</details>

**未知发言人**: 这现在对公众直播吗？

<details>
<summary>Original English</summary>

**未知发言人**: Is this live to the public right now?

</details>

**未知发言人**: 是的，它在服务器上是直播的。

<details>
<summary>Original English</summary>

**未知发言人**: Yeah, it's live on the server.

</details>

**未知发言人**: 听着，我不高兴。我希望你把它改回去。

<details>
<summary>Original English</summary>

**未知发言人**: Look, I'm not pleased. I would like you to change it back.

</details>

**Narrator**: 当时，几乎所有人都认为入侵这个系统是不可能的，但他们错了。

<details>
<summary>Original English</summary>

**Narrator**: At the time, just about everyone believed that hacking this system was impossible, but they were wrong.

</details>

**未知发言人**: 我可以告诉你，有多少系统会受到损害，那将是数百万。实际上，我仍然很惊讶主流新闻媒体对此报道不多。

<details>
<summary>Original English</summary>

**未知发言人**: Well, I can tell you how many systems would have been compromised, which would have been millions. Actually, I'm still surprised the mainstream news outlets haven't really covered this very much.

</details>

**未知发言人**: 我们离危险有多近？

<details>
<summary>Original English</summary>

**未知发言人**: How close did we come?

</details>

**未知发言人**: 我们距离数百万互联网服务器被任何制造后门的人访问，只差几周。从间谍活动到勒索，再到瘫痪整个国家，你都可以通过这个后门做到。

<details>
<summary>Original English</summary>

**未知发言人**: We were weeks away from millions of internet servers being accessible to whoever crafted the backdoor. Anything from spying, to ransom, to taking down entire countries, you could have done it with this backdoor.

</details>

**未知发言人**: 这名黑客意识到整个操作系统都依赖于一个由一个人维护的单一组件，通过损害这一个组件，他们几乎可以感染互联网上的任何服务器。那么，我们怎么会让自己变得如此脆弱呢？故事始于一台卡纸的打印机。

<details>
<summary>Original English</summary>

**未知发言人**: This hacker had realized the entire operating system rested on a single part, maintained by a single person, and that by compromising that one part, they could infect almost any server on the internet. So, how could we ever let ourselves get this vulnerable? Well, the story begins with a jammed printer.

</details>

### 开源软件的起源

**Narrator**: 人工智能实验室里一片繁忙。他们刚刚安装了 **Xerox 9700**，这是有史以来第一批商用激光打印机之一，意义重大。唯一的问题是它总是卡纸。

<details>
<summary>Original English</summary>

**Narrator**: The AI lab was buzzing. They had just installed the Xerox 9700. It was one of the first ever commercial laser printers. It was a pretty big deal. The only problem was it kept jamming.

</details>

**Stallman**: 你会等上一个小时，心想，我知道它会卡纸，我等一个小时再去取打印件，然后你会发现它一直都卡着。简直是气炸了。

<details>
<summary>Original English</summary>

**Stallman**: You'd wait an hour figuring, I know it's gonna be jammed, I'll wait an hour and go collect my printout, and then you'd see that it'd been jammed the whole time. Frustration up the wazoo.

</details>

**未知发言人**: 实验室研究员 **Richard Stallman** 认为他有一个解决方案。几年前，他通过编写一个简单的程序解决了类似的问题，该程序在卡纸时会发送警报。这并没有从机械上解决问题，但它确保了卡纸不会被忽视。他认为他现在可以做类似的事情。唯一的问题是 **Xerox** 没有向他们提供打印机的源代码，没有源代码，**Stallman** 就无法编写他的代码。于是他找到了最初的开发者。

<details>
<summary>Original English</summary>

**未知发言人**: Richard Stallman, a researcher at the lab, thought that he had a solution. Years earlier, he had solved a similar problem by coding a simple program that sent an alert whenever there was a jam. Now, it didn't fix the problem mechanically, but it did make sure that a jam wouldn't go unnoticed. He thought he could do a similar thing now. The only problem was that Xerox hadn't provided them the source code for the printer, and without it, Stallman couldn't write his code. So he tracked down the original developer.

</details>

**Stallman**: 我说：“你好，我来自 **MIT**。我能要一份打印机源代码的副本吗？”他说：“不，我答应过不给你副本。”我惊呆了。我很生气。我当时只想转身走出他的房间。也许我砰地关上了门。我后来想了想，因为我意识到我看到的不仅仅是一个孤立的混蛋，而是一个重要的社会现象，它影响了很多人。

<details>
<summary>Original English</summary>

**Stallman**: And I said, "Hi, I'm from MIT. Could I have a copy of the printer source code?" And he said, "No, I promised not to give you a copy." I was stunned. I was angry. All I could think of was to turn around on my heel and walk out of his room. Maybe I slammed the door. And I thought about it later on because I realized that I was seeing not just an isolated jerk but a social phenomenon that was important and affected a lot of people.

</details>

**Henry**: 这种社会现象已经慢慢侵入了计算机研究领域。在60年代末，**AT&T** 的 **贝尔实验室** 工程师发明了一种名为 **Unix** 的操作系统，他们将其广泛分享给大学和研究实验室。那是一个自由的时代。但到了80年代，**AT&T** 开始以 **版权侵权** 为由追究 **Unix** 克隆开发者的责任。后来，他们甚至起诉了 **加州大学伯克利分校**。技术格局已经改变。他们想封闭软件开发。公司现在让员工签署 **保密协议**，禁止他们与其他程序员分享代码。

<details>
<summary>Original English</summary>

**Henry**: This social phenomenon had slowly invaded the world of computer research. In the late 60s, engineers at AT&T's Bell Labs invented an operating system called Unix, which they shared widely across universities and research labs. This was a time of freedom. But by the 80s, AT&T started going after Unix clone developers for copyright infringement. Later, they even sued the University of California at Berkeley. The tech landscape had shifted. They wanted to close off software development. Companies were now making their employees sign non-disclosure agreements, prohibiting them from ever sharing their code with other programmers.

</details>

**Stallman**: 看，这是我第一次遇到 **保密协议**，而我是受害者。它给我的教训是，保密协议是有受害者的。它们不是无辜的，也不是无害的。

<details>
<summary>Original English</summary>

**Stallman**: See, this was my first encounter with a non-disclosure agreement, and I was the victim. And the lesson it taught me was that non-disclosure agreements have victims. They're not innocent, they're not harmless.

</details>

**Henry**: **Stallman** 想知道，也许他可以适应这个新世界。

<details>
<summary>Original English</summary>

**Henry**: Stallman wondered, maybe he could adapt to this new world.

</details>

**Stallman**: 但我意识到那样我虽然可以享受编程的乐趣，也可以赚钱。但最终，我不得不回顾我的职业生涯，然后说：“我一生都在建造高墙来分隔人们。”我会为我的人生感到羞耻。

<details>
<summary>Original English</summary>

**Stallman**: But I realized that that way I could have fun coding and I could make money. But at the end, I'd have to look back at my career and say, "I have spent my life building walls to divide people. and I would've been ashamed of my life."

</details>

**未知发言人**: 所以 **Stallman** 选择了一条不同的道路。他辞去了 **MIT** 的工作，并于1985年成立了 **自由软件基金会**，致力于推广 **四项基本自由**：你可以自由地为任何目的运行软件，自由地研究它，自由地修改它，以及自由地分享它。为了确保这些自由，他创建了一个法律许可，开发者可以将其附加到他们的代码中，称为 **通用公共许可证 (GPL)**。为了对抗 **AT&T**，他开始了一个基于 **Unix** 但从头开始构建的项目，这样 **AT&T** 就无法起诉。他把这个项目命名为 **GNU**，这是一个递归缩写，意为“GNU is Not Unix”。为了复制一个 **Unix** 系统，**GNU 项目** 必须重新创建三个功能层。他们需要日常工具和命令的 **实用程序**，人们用来与机器交互的 **shell**（终端），最后是与硬件通信并管理内存的 **内核**。在接下来的七年里，**GNU 项目** 从零开始完成了大部分工作。他们创建了 **GCC** 代码编译器、**Bash shell** 和许多其他核心实用程序。但他们总是缺少一个关键组件——**内核**。这种情况在1991年秋天发生了变化，当时 **Stallman** 访问了 **赫尔辛基大学**，发表了一场推广该项目的演讲。听众中有一位年轻的计算机科学学生，他碰巧正在从零开始构建自己的内核。他的版本不是免费的，但在听了 **Stallman** 的演讲后，这位学生改变了主意，并采用了 **通用公共许可证**。起初，他想称之为 Free Unix，或 Freax，但他的朋友认为这听起来很糟糕，所以他以学生本人的名字 **Linus Torvalds** 重新命名。Linus，Unix。这就是 **Linux** 的由来。这个内核与 **GNU 项目** 的其他组件结合，成为一个完整的操作系统。现在，从技术上讲，**Linux** 仅指那个内核，但很多人用它来指整个操作系统，包括 **GNU** 和 **Linux** 以及其他所有东西。由于代码是开放和免费的，并且基于它构建的项目也是如此，一种新的软件开发模式开始盛行。任何人都可以检查代码，改进它，修复缺陷，并普遍推动所有人的发展。因此，软件分裂成两种相互竞争的意识形态：由公司控制的专有闭源系统，以及代码免费的开源项目。

<details>
<summary>Original English</summary>

**未知发言人**: So Stallman chose a different path. He quit his job at MIT and in 1985 established the Free Software Foundation, and it worked to promote four basic freedoms. You should be free to run software for any purpose, free to study it, free to change it, and free to share it. Now, to ensure those freedoms, he created a legal license that developers could attach to their code called the General Public License. And to stick it to AT&T, he started to work on a project based on Unix but built from the ground up, so AT&T couldn't sue. He called the project GNU, a recursive acronym for GNU is Not Unix. Now, to replicate a Unix system, the GNU Project had to recreate three layers of functionality. They needed the utilities, which were the everyday tools and commands, the shell, which is the terminal that people use to interact with the machine, and finally, the kernel, which is the core that talks to the hardware and manages memory. Now, over the next seven years, the GNU Project made much of that from scratch. They created the GCC code compiler, the Bash shell, and a host of other core utilities. But they were always missing one key component. The kernel. That changed in the fall of 1991 when Stallman visited the University of Helsinki to give a talk promoting the project. In the audience was a young computer science student who just happened to be building his own kernel from scratch. His version wasn't free, but after hearing Stallman speak, the student changed his mind and adopted the General Public License. At first, he wanted to call it Free Unix, or Freax, but his friend thought that sounded terrible, so he renamed it after the student himself, Linus Torvalds. Linus, Unix. Well, that's how he got Linux. That kernel, combined with the other components from the GNU Project, became a full operating system. Now, technically, Linux only refers to that kernel, but a lot of people use it to refer to the whole operating system, so GNU and Linux and whatever else. Because the code was open and free and the projects built on it were too, a new model of software development took hold. Anyone could inspect the code, improve it, fix flaws, and generally just push development forward for everyone. So, software split into two competing ideologies. Proprietary closed source systems controlled by companies, and open source projects where the code was free.

</details>

### Linux 的普及与开源生态的挑战

**未知发言人**: 它是两种意义上的自由。它是免费的，你不需要为此付费，但它也可以以任何你想要的方式自由修改，这似乎是更重要的方面。人们很乐意为技术付费，但他们经常会遇到一些障碍，你必须向某个大公司提交支持工单，他们可能得到也可能得不到所需的帮助，而工程师们则渴望自己解决问题。

<details>
<summary>Original English</summary>

**未知发言人**: It's free in two ways. It's free as in you don't have to pay for it, but it's all free to change it in any way you want, and that seems to be the much more important aspect. People are happy to pay for technology, but so often do they run into some roadblocks where you have to file a support ticket with some large company, they may or may not get the help they need, and engineers are just itching to just fix it themselves.

</details>

**未知发言人**: 开发者可以获取那些免费提供的基础代码，然后添加与他们特定设备相关的功能。他们不必每次都重复造轮子。这就是为什么 **Linux** 传播到各种不同的应用中。

<details>
<summary>Original English</summary>

**未知发言人**: Developers could take that basic code which was freely available and then add on their own features relevant to their specific device. They didn't have to reinvent the wheel every time. So that's why Linux spread into all sorts of different applications.

</details>

**未知发言人**: 你好，我是 Mac。

<details>
<summary>Original English</summary>

**未知发言人**: Hello, I'm a Mac.

</details>

**未知发言人**: 我是 PC。没有其他人。

<details>
<summary>Original English</summary>

**未知发言人**: And I'm a PC. No one else.

</details>

**未知发言人**: 没有。

<details>
<summary>Original English</summary>

**未知发言人**: No one.

</details>

**未知发言人**: 你好，我是 **Linux**。全球大约有3000万 **Linux** 用户。

<details>
<summary>Original English</summary>

**未知发言人**: Hi, I'm Linux. There are an estimated 30 million Linux users out there.

</details>

**未知发言人**: 你站在那儿多久了？

<details>
<summary>Original English</summary>

**未知发言人**: How long you been standing there?

</details>

**未知发言人**: 很久了。

<details>
<summary>Original English</summary>

**未知发言人**: A long time.

</details>

**未知发言人**: 而且它甚至不只局限于电脑。你的电子吸尘器肯定是 **Linux**。你的相机肯定是 **Linux**。大多数电视，大多数电子产品都是 **Linux**。

<details>
<summary>Original English</summary>

**未知发言人**: And it's not even just limited to computers. Your electronic vacuum is definitely Linux. Your camera is definitely Linux. Most TVs, most electronics are Linux.

</details>

**未知发言人**: **Linux** 甚至运行着地球上一些最敏感的机器。

<details>
<summary>Original English</summary>

**未知发言人**: Linux even runs some of the most sensitive machines on the planet.

</details>

**未知发言人**: 你可以认为 **Linux** 几乎用于任何高安全需求的场合，不一定是因为 **Microsoft** 等公司无法构建同样安全的系统，而是因为在构建例如新型武器系统时通常涉及保密，你并不一定想与某个科技公司合作。你不想让更多不必要的人参与进来。

<details>
<summary>Original English</summary>

**未知发言人**: You can assume that Linux is pretty much used in anything of high-security need, not necessarily because Microsoft, for instance, couldn't build something equally secure, but because usually there's secrecy involved in building, let's say, a new weapon system, and you don't necessarily want to have to work with some tech company. You don't want to involve more people than absolutely necessary.

</details>

**Henry**: 全球前500台超级计算机中，每一台都运行着 **Linux**。它被用于 **五角大楼** 和 **美国核潜艇**。

<details>
<summary>Original English</summary>

**Henry**: Of the top 500 supercomputers in the world, every single one runs Linux. It's used in the Pentagon and on US nuclear submarines.

</details>

**未知发言人**: 你能想到的每家银行，制造商、医院、政府、国防组织等等，它们都运行着 **Linux** 服务器。

<details>
<summary>Original English</summary>

**未知发言人**: Every bank you can think of really, manufacturers, hospitals, governments, defense organizations and things like that, they're all running Linux servers.

</details>

**未知发言人**: 今天，**Linux** 无处不在，大多数人熟悉 **Windows** 和 **macOS**，但它们并不是世界上最流行的操作系统。不，它们被运行 **Linux** 内核的系统远远超越。拥有超过30亿设备的 **Android** 就是基于 **Linux** 构建的。它还为世界上大多数互联网服务器提供动力。

<details>
<summary>Original English</summary>

**未知发言人**: Today, Linux is everywhere, and most people are familiar with Windows and macOS, but they are not the most popular operating systems in the world. No, they are dwarfed by systems running a Linux kernel. Android, with over 3 billion devices, is built on Linux. And it also powers the majority of internet servers in the world.

</details>

**未知发言人**: 没有一家公司能想象到如今计算机使用的所有不同场景，而 **Linux**，由于其适应性，每个人都可以通过微调使其适应自己的用例，现在涵盖了所有用例。

<details>
<summary>Original English</summary>

**未知发言人**: There is no one company that could have imagined all the different cases where computers are used these days, and Linux, thanks to its adaptability where everyone can just tweak it in little ways to make it fit their use case, now covers all the use cases.

</details>

**未知发言人**: 但所有这一切都依赖于一个关键假设：代码是安全的。现在，有充分的理由相信这一点。因为有如此多的人在查看代码，所以人们认为无论是故意的还是无意的错误都不会太难发现。这被称为 **Linus 定律**：只要有足够的眼睛，所有的漏洞都将是浅显的。但这个假设有一个大问题。开源运动不是一个大项目，它是一个生态系统。你需要成千上万的小工具和库，每个都做着不同的工作，比如网络、安全或压缩。现在，很多这些项目都是因为一个人想解决一个特定的问题而开始的，所以他们自己构建它。他们通常没有报酬，只是在晚上和周末编码，只为了让工具工作。如果它有用，一个开源项目会采用它，然后另一个，突然之间，数百万台机器都依赖于一个人的热情项目。这就是整个生态系统最终可能悄悄地依赖于一个由单一志愿者维护的项目的方式。有一幅著名的 **XKCD 漫画** 完美地捕捉了这一想法。但是当那个区块被破坏时会发生什么呢？在我们的故事中，这个人不是来自内布拉斯加州。不，**Lasse Collin** 来自芬兰，自2005年以来，他一直在开发一个名为 **XZ** 的小型数据压缩工具。**XZ** 在压缩方面非常出色，以至于现在几乎所有主要的 **Linux** 发行版都在使用它。在过去的20年里，几乎所有使该工具与不断发展的硬件保持兼容的工作都落在了 **Lasse** 身上。他从未因此获得报酬，但直到现在，他对此都感到满意。然而最近，他承受了越来越大的压力。“一个多月了，还没有合并。不足为奇。”“除非有新的维护者，否则不会有进展。现在提交补丁毫无意义。当前的维护者失去了兴趣，或者不再关心维护了。”**Lasse** 回复道：“我没有失去兴趣，但我的关心能力相当有限，主要是因为长期的心理健康问题，但也因为其他一些事情。还需要记住，这是一个无偿的业余项目。”但这还不够。“我很抱歉你的心理健康问题，但重要的是要意识到自己的极限。社区渴望更多。你忽视了邮件列表中许多补丁的腐烂。现在，你扼杀了你的代码库。”**Lasse** 精疲力尽。但就在他觉得再也撑不下去的时候……“你们俩做得很好，把这个功能推进到这个程度。我只是尽我作为‘小帮手’的一部分。”署名 **Jia Tan**。几个月来，**Jia** 一直在为 **Lasse** 分担一些工作。他非常有帮助。现在他主动提出接任该项目的维护者。对 **Lasse** 来说，这听起来好得几乎不真实。“正如我在之前的邮件中暗示的，**Jia Tan** 未来可能在项目中扮演更重要的角色。”最终，**Lasse** 在20年的辛勤工作后，可以退后一步，喘口气了。但 **Jia** 并非他表面上看起来的那样。他已经将 **Lasse Collin** 的 **XZ** 项目识别为 **Linux** 生态系统中的一个薄弱环节，一个可以让他访问互联网上几乎所有计算机的环节。

<details>
<summary>Original English</summary>

**未知发言人**: But all of this, it all relies on one key assumption. That the code is secure. Now, there's a good reason to feel this way. Because there are so many people looking at the code, there's this idea that bugs, either intentional or unintentional, won't be too deep to catch. It's known simply as Linus's Law. That with enough eyeballs, all bugs are shallow. But there's a big problem with this assumption. The open source movement isn't one big project. It's an ecosystem. You need thousands of small tools and libraries each doing a different job, like networking, security, or compression. Now, a lot of these projects start because one person wants to fix a specific problem, so they build it themselves. They're often unpaid, coding on nights and weekends just to make the tool work. If it's useful, one open source project adopts it, then another, and suddenly you have millions of machines all relying on one person's passion project. That's how the entire ecosystem can end up quietly resting on a project maintained by a single volunteer. There's a famous XKCD comic that captures this idea perfectly. But what happens when that block is compromised? In our story, our person isn't from Nebraska. No, Lasse Collin is from Finland, and he's been working on a small data compression tool called XZ since 2005. XZ is so good at compression that it's now used in almost every major Linux distribution. For the past 20 years, almost all of the work of keeping the tool compatible with ever-evolving hardware, it's all fallen on Lasse. He's never been paid for it, but up till now, he's been okay with that. Recently, though, he's been under more and more pressure. "Over one month and no closer to being merged. Not a surprise." "Progress will not happen until there is a new maintainer. Submitting patches here has no purpose these days. The current maintainer lost interest or doesn't care to maintain anymore." Lasse responds, "I haven't lost interest, but my ability to care has been fairly limited, mostly due to long-term mental health issues, but also due to some other things. It's also good to keep in mind that this is an unpaid hobby project." But it's not enough. "I'm sorry about your mental health issues, but it's important to be aware of your own limits. The community desires more. You ignore the many patches bit rotting away on this mailing list. Right now, you choke your repo." Lasse is burning out. But just when he thinks he can't handle it anymore... "Nice job to both of you for getting this feature as far as it is already. Just trying to do my part as a helper elf." Signed, Jia Tan. For months, Jia has been taking some of the load off Lasse. He's been incredibly helpful. Now he offers to step up and take over as maintainer of the project. To Lasse, it sounds almost too good to be true. "As I've hinted in earlier emails, Jia Tan may have a bigger role in the project in the future." Finally, Lasse can step back and breathe after 20 years of hard work. But Jia is not who he appears to be. And he's identified Lasse Collin's XZ project as a weak link in the Linux ecosystem, one that could give him access to almost every computer on the internet.

</details>

### SSH 安全协议解析

**未知发言人**: 今天我们认为安全的远程登录是理所当然的。我的意思是，它们已经可靠地工作了30多年。但这一切都始于1995年 **赫尔辛基工业大学**，当时一名黑客通过 **嗅探攻击** 捕获了通过校园网络发送的数千个用户名和密码。事后看来，问题很明显。这些登录请求完全以明文形式发送，所以任何拦截数据的人都可以直接读取它。

<details>
<summary>Original English</summary>

**未知发言人**: Today we take secure remote logins for granted. I mean, they've worked reliably for over 30 years. But it all started in 1995 at the Helsinki University of Technology when a hacker captured thousands of usernames and passwords sent over the campus network in a sniffing attack. In hindsight, the problem's obvious. These login requests were being sent totally in plain text, so anyone who intercepted the data could just read it.

</details>

**未知发言人**: 当大学计算机研究员 **Tatu Ylonen** 得知这次攻击后，他将确保此类事件不再发生作为自己的使命。

<details>
<summary>Original English</summary>

**未知发言人**: When Tatu Ylonen, a computer researcher at the university, learned of the attack, he made it his mission to ensure that it would never happen again.

</details>

**Tatu**: 当时密码嗅探可能是互联网上最严重的安全问题。

<details>
<summary>Original English</summary>

**Tatu**: Password sniffing was perhaps the most serious security issue on the internet back then.

</details>

**未知发言人**: 为此，他的解决方案需要确保两件事。首先，机器必须建立安全连接。如果两台计算机能够就一个用于打乱数据的共享密钥代码达成一致，那么即使它们被窃听，任何没有该密钥代码的人也只会得到乱码。现在，你可以在事前亲自商定这个共享密钥。

<details>
<summary>Original English</summary>

**未知发言人**: To do this, his solution needed to ensure two things. First, machines had to establish a secure connection. If both computers could agree on a shared secret code that they would use to scramble their data, then even if they were overheard, anyone without that secret code would just get gibberish. Now, you could agree on that shared secret ahead of time in person.

</details>

**未知发言人**: 密码。

<details>
<summary>Original English</summary>

**未知发言人**: Password.

</details>

**未知发言人**: 但在互联网上，这很少实用。不，你必须在从未见过面的情况下提前商定那个共享密钥，而且还要有人全程监听。这听起来非常棘手，但有一种方法可以做到，我可以用这罐颜料向你展示。假设我正试图向那边的格雷戈尔发送一条消息。第一步是我们商定一个共享的公共颜色。让我们选择这种红色。这不是秘密，任何人都可以看到。现在我们各自选择自己的私人颜色。我选择黄色，他可以选择任何他想要的颜色。所以我们拿起我们的私人颜色，然后我将它与公共颜色混合。现在值得一提的是，这些混合物被认为是无法分离的，所以即使你知道这种橙色和这种红色，你也无法精确推断出我们用来创建它的确切黄色深浅，这对于后面的实际计算机示例很重要。好的，我将把这个发送给格雷戈尔。

<details>
<summary>Original English</summary>

**未知发言人**: But on the internet, that's rarely practical. No, you have to agree on that shared secret ahead of time without ever having met and also with someone listening in the entire time. It sounds really tricky, but there is a way to do it, and I can show you how using this jar of paint. Say I'm trying to send a message to Gregor over there. First step is we agree on a shared public color. Let's pick this red. This is no secret, anyone can see this. Now we each pick our own private color. I'm gonna pick yellow, and he can pick whatever he wants. So we take our private color, and then I'm gonna mix that with the public color. It's worth saying now that these mixtures are assumed to be impossible to unmix, so even if you know this orange and you know this red, you can't exactly deduce the exact shade of yellow we used to create it, and this is important for the actual computer example later. Okay, so I'm gonna send this over to Gregor.

</details>

**未知发言人**: 所以，我把我的秘密颜色和公共颜色混合在一起，然后我把它传给亨利。

<details>
<summary>Original English</summary>

**未知发言人**: So, I mixed in my secret color with the public, and I'm gonna pass this to Henry.

</details>

**未知发言人**: 所以，格雷戈尔把这个发给了我，它看起来像一种深绿色。我们现在要做的是，把它和我的原始私人颜色混合在一起。

<details>
<summary>Original English</summary>

**未知发言人**: So, Gregor sent me this, which looks like a sort of dark green sort of color. And what we're gonna do now is we're gonna mix it with my original private color.

</details>

**未知发言人**: 好的，现在我有了亨利的秘密颜色与公共颜色混合在一起，我将添加一些我自己的。

<details>
<summary>Original English</summary>

**未知发言人**: Okay, now that I have Henry's secret color mixed in with the public, I'm gonna add some of my own.

</details>

**未知发言人**: 所以我们最终得到了这种独特的橄榄色。我可以看到里面有我的黄色，还有格雷戈尔那边有的。关键是，因为每套颜料都经过了相同的过程，它们最终都得到了相同的橄榄绿色，尽管我们从未分享过我们的秘密颜色。所以我们最终得到了这个别人无法获得的共享秘密颜色，这意味着我们可以在发送信息时将其用作我们的秘密代码。现在，在实际的交换中，我们使用大的公共数字而不是颜色，但原理是完全相同的。每一方都使用一些数学方法混合自己的私人数字，当你试图逆转它时，会导致一个离散对数问题，这使得它们实际上无法分离。这样，我们就解决了第一个问题。但还有另一个未被考虑的威胁。假设一个黑客，比如这里的卡斯珀，试图坐在我们之间。现在我们可以建立一个合法的连接，所以我们最终得到了一个共享的秘密代码，卡斯珀可以对格雷戈尔做同样的事情。现在，每当我发送一条消息时，他都可以将其转发给格雷戈尔，他可以更改和修改它，然后发回他的回复。对我们每个人来说，连接看起来都是合法的，但卡斯珀一直坐在我们中间。他是一个 **中间人攻击**。所以，我需要一种方法来验证格雷戈尔确实是他所说的那个人。现在，我们可以通过提前亲自商定密码来再次做到这一点，但我们需要一种实用的方法通过互联网来做到这一点。这是 **Tatu** 必须解决的第二个问题。为了实现这一点，格雷戈尔可以取两个非常大的质数，他将它们保密。然后他将它们相乘得到一个更大的数字，然后他将其公开。现在，当我想向格雷戈尔发送消息时，我只需取那个大的公共数字，然后以一种只有格雷戈尔（他知道构成那个大的公共数字的两个质因数）才能成功解密的方式将其打乱。对于其他人来说，获取那两个质因数实际上是不可能的。所以，只要我知道那个大的公共数字确实属于格雷戈尔，我就知道任何用那个密钥加密的东西都只能由他读取。这被称为 **RSA 加密**，这意味着如果我知道证书是有效的，那么我就接受连接。通过验证格雷戈尔，它挫败了我们的中间人，卡斯珀·德维厄斯。好的。**Tatu Ylonen** 将这两个步骤——保护通道和验证用户——结合成一个用于机器之间远程登录的协议。它为你提供了人们习惯的简单文本 shell，一个你输入命令的普通终端，但现在连接是加密的。他称之为 **Secure Shell**，或 **SSH**。它立即变得有用。许多 **Linux** 机器甚至没有键盘或显示器，尤其是服务器，所以你需要能够远程登录和控制它们。所以 **SSH** 很快就被几乎所有运行 **Linux** 的机器采用。随着 **Linux** 的传播，**SSH** 也随之传播。今天，当你远程控制一台机器时，你很有可能正在使用 **SSH**。

<details>
<summary>Original English</summary>

**未知发言人**: So we end up with this sort of distinct olive color. There's my yellow in there, I can see, and whatever Gregor had in his side. And the thing is because each set of paints went through the same process, they both end up with this same olive green, even though we never shared our secret colors. So we end up with this shared secret color at the end that no one else can get, and that means that we can use it as our secret code when sending information. Now, in the real exchange, we use big public numbers instead of colors, but the idea is the exact same. Each side mixes in their own private number using some math that, when you try to reverse it, leads to a discreet log problem, which makes it practically impossible to unmix them. That way, we solve the first problem. But there is another threat that's unaccounted for. Say a hacker, like Casper here, tries to sit in between us. Now we can create a legitimate connection, so we end up with a shared secret code, and Casper could do the exact same thing with Gregor. Now, whenever I send a message, he can relay that to Gregor, he can change and modify it and send his response back. And to each of us, the connection looks legitimate, but Casper's sitting between us the whole time. He's a man in the middle. So, I need a way of authenticating that Gregor is really who he says he is. Now, we could do this again by agreeing on a password ahead of time in person, but we need a practical way to do it over the internet. This was the second problem that Tatu had to solve. To make that happen, Gregor can take two really big prime numbers, which he keeps secret. He then multiplies them together to get an even bigger number, which he then makes public. Now, when I want to send Gregor a message, I just take that big public number and I scramble it in a way that only Gregor, who knows the two prime factors that make up that big public number, can successfully unscramble. For anyone else, getting those two prime factors is practically impossible. So, as long as I know that that big public number actually belongs to Gregor, I know that anything encrypted to that key can only be read by him. This is called RSA encryption, and it means that if I know the certificate is valid, then I accept the connection. And by authenticating Gregor, it foils our man in the middle, Casper Devious. All right. Tatu Ylonen combined these two steps, securing the channel and authenticating the user, into a protocol for remote logins between machines. It gave you the same simple text shell people were used to, a plain terminal where you type commands, but now the connection was encrypted. He called it Secure Shell, or SSH. And it was immediately useful. Many Linux machines don't even have keyboards or monitors, especially not servers, so you wanna be able to log in and control them remotely. So SSH was soon adopted on almost every machine that ran Linux. And as Linux spread, so too did SSH. Today, when you control a machine remotely, there's a good chance you're using SSH.

</details>

**未知发言人**: **SSH** 实际上是整个互联网的维护骨干。

<details>
<summary>Original English</summary>

**未知发言人**: SSH is literally the maintenance backbone of the entire internet.

</details>

**未知发言人**: 而最广泛使用的开源 **SSH** 实现叫做 **OpenSSH**。因为它非常流行，所以它受到严密保护。

<details>
<summary>Original English</summary>

**未知发言人**: And the most widely used open source SSH implementation is called OpenSSH. And because it's so popular, it's heavily protected.

</details>

**未知发言人**: 我的意思是，**OpenSSH** 可能是目前被审查最严格的项目之一，因为它对各地服务器的安全至关重要。找到一种绕过安全 shell 中身份验证的方法，就像拥有酒店的总钥匙一样，它可以让你进入每个房间。

<details>
<summary>Original English</summary>

**未知发言人**: I mean, OpenSSH is probably one of the most closely examined projects out there because it's just so vitally important to the security of servers everywhere. Having a way to bypass the authentication in secure shell is like having the master key to the hotel. It lets you into every room.

</details>

**Henry**: 这就是为什么 **Jia Tan** 想要进入 **OpenSSH** 的原因，但直接攻击它几乎是不可能的。幸运的是，对于 **Jia** 来说，开源模式不仅意味着操作系统是由许多程序组合而成的，而且每个程序本身也是由其他程序组合而成的。这些被称为 **依赖项**。

<details>
<summary>Original English</summary>

**Henry**: This is why Jia Tan wants a way into OpenSSH, but trying to hack it directly would be almost impossible. Lucky for Jia, the open source model doesn't just mean that operating systems are stitched together from many programs, but that each of those programs is itself stitched together from other programs. Those are called dependencies.

</details>

**未知发言人**: **OpenSSH** 是被审查最严格的软件包之一，但这并不适用于它的所有 **依赖项**。

<details>
<summary>Original English</summary>

**未知发言人**: OpenSSH is one of the most scrutinized software packages, but that doesn't extend to all of its dependencies.

</details>

**未知发言人**: **Jia** 认为，如果他能损害 **OpenSSH** 的一个 **依赖项**，他就能将一个漏洞偷偷植入主项目。而 **Lasse Collin** 的压缩工具 **XZ** 正好通过一系列 **依赖项** 链接到 **OpenSSH**。

<details>
<summary>Original English</summary>

**未知发言人**: Jia believes that if he can compromise a dependency of OpenSSH, he can sneak an exploit into the main project. And it just so happens that Lasse Collin's compression tool XZ is linked through a chain of these dependencies.

</details>

### XZ 压缩算法原理

**未知发言人**: **Lasse** 最初开发 **XZ** 的目标是找到一种更好的方法来压缩 **Linux** 上的数据。这些数据可以是任何东西：代码、图像、文本。但对 **Lasse** 来说重要的是，一旦你压缩和解压缩它，它必须完全相同地返回。这种方法必须是 **无损的**。我给你举个例子。

<details>
<summary>Original English</summary>

**未知发言人**: Now, Lasse's original goal with XZ was to find a better way to compress data on Linux. That data could be anything. Code, an image, text. But what was important to Lasse was that once you compressed and decompressed it, it had to come back exactly the same. The method had to be lossless. Let me give you an example.

</details>

**未知发言人**: 这是我的错。但我们要用 **Rick Astley** 的热门歌曲《Never Gonna Give You Up》的歌词，并尝试对其进行压缩。现在，假设我们将其表示为字符流，每个字符都获得一个固定宽度的8位代码。这可行，但效率低下。如果我们遍历这个流，并计算每个符号出现的频率，你会发现一个模式。有些出现频率更高，比如N有430次使用，有些则几乎没有，比如J只有1次使用。为了节省空间，我们为什么不给出现频率更高的符号更短的代码，而那些更稀有的符号，它们可以长一点。但我们怎么做到呢？所以，我们首先计算每个符号出现的频率，并按从最频繁到最不频繁的顺序排序。我们取两个最不频繁的符号，并将它们组合成一对。然后我们将这对视为一个新的组合符号，其频率是它所代表的两个符号的总和。然后我们可以将其重新插入到列表中。然后我们再做一次。我们取两个最不频繁的项，将它们组合，然后重新插入到列表中。我们一遍又一遍地这样做，直到我们得到一个巨大的结构，称为 **霍夫曼树**。现在，要获取我们的代码，我们只需遍历树。向右一步是1，向左一步是0。例如，要获取R，我们只需向右、向左、向左、向右，所以代码是1001。所以你会注意到，更常出现的符号自然地出现在树的顶部，所以它们获得更短的代码，而那些出现频率较低的符号则在树的底部。这个系统运行良好，但它也有一个弱点。在我们的《Never Gonna Give You Up》示例中，它总是编码 N-E-V-E-R 空格。它没有意识到这整个块是重复的。那么，如果我们不看符号，而是看这些块呢？现在，它们不一定是单词，它们可以是单词的一部分，甚至更长。它们只需要是重复的模式。所以让我们扫描文本，但保留一个我们刚刚看到的滚动字典。然后，当我们向前移动时，我们可以检查下一个块是否已经出现。如果已经出现，我们就不需要再次写入该块。我们只需写入一个包含两个数字的代码，即回溯多远，以及复制多少个字符。现在，当我们解压缩时，我们只需读取，每当我们遇到这些代码之一时，我们就会跳回去，复制匹配的块，并将其粘贴到相应位置。两位科学家 **Lempel** 和 **Ziv** 于1977年发表了这种算法，所以它被称为 **LZ77**。但其中一些符号和指针出现的频率比其他符号和指针更高。它们实际上有自己的频率。所以我们可以将整个流输入到另一棵 **霍夫曼树** 中，以获得第二层压缩。在我们的演示中，它实际上将文件缩小了85%，比原始文件小得多。这可能看起来很新，但你几乎肯定自己使用过它。它被称为 **deflate**，但它更广为人知的是它创建的文件 **.zip**。如果你以前点击过“关闭”这个，你肯定使用过它。但 **霍夫曼** 只使用块重复的总体频率。实际数据不仅仅是随机的块。在我们的例子中，在“Never gonna”之后，你可能会得到“give you up”、“let you down”或“run around and desert you”。你可能会得到“make you cry”，你可能会得到“say goodbye”或“tell a lie and hurt you”。每个都有自己的概率，你可以用一种称为 **马尔可夫链** 的数学工具来表示这些概率。然后算法可以编码数据流，使得更可能出现的下一个块消耗更少的比特，而更不可能出现的块消耗更多的比特。如果你将它与一个更大的搜索窗口结合起来，以便它可以指向内存中更远的地方，那么你就会得到 **Lempel Ziv 马尔可夫链算法**，或 **LZMA**。**LZMA** 是 **Igor Pavlov** 在1998年左右开发的，它通常比更熟悉的方法表现更好。在许多情况下，它可以将文件缩小到典型 **.zip** 文件大小的约70%。**Lasse** 将这种优雅的压缩算法应用到 **Linux** 上，他称之为 **XZ**，不是因为它代表什么，只是因为它听起来很酷。

<details>
<summary>Original English</summary>

**未知发言人**: That's my bad. But we're gonna take the lyrics to Rick Astley's hit "Never Gonna Give You Up" and we're gonna try to compress it. Now, say we take this and we represent it as a stream of characters, and each one gets a fixed-width 8-bit code. Now, that works, but it's inefficient. If we go through this stream and just count up how often each symbol appears, you'll notice there's a pattern. Some appear more frequently, like N with 430 uses, and some, barely at all, like J with one use. To save space, why don't we give the ones that appear more frequently shorter codes, and the rarer ones, well, they can afford to be long. But how do we do that? So, let's start by counting up how often each symbol appears and sorting that from most frequent to least frequent. We take the two least frequent symbols and join them together into a pair. We then treat that pair as a new combined symbol whose frequency is the sum of the two it represents. We can then reinsert that back into the list. Then we do it again. We take the two least frequent items, combine them, and then reinsert them back into the list. And we do that over and over again until we get this massive structure called a Huffman tree. Now, to get our codes, we just walk the tree. A step right is a 1, a step left is a 0. So, for example, to get R, we just go right, left, left, right, so the code is 1001. So what you'll notice is the more commonly occurring symbols naturally appear at the top of the tree, so they get shorter codes, while the ones that appear less frequently are at the bottom of the tree. The system works well, but it also has a weakness. In our "Never Gonna Give You Up" example, it always encodes N-E-V-E-R space. It doesn't realize that this whole chunk repeats. So, what if instead of looking at symbols, we looked at those chunks? Now, they don't have to be words, they can be parts of words or even longer. They just have to be patterns that repeat. So let's scan through the text but keep a rolling dictionary of what we've just seen. Then, as we move forward, we can check whether the next chunk has already appeared. And if it has, we don't need to write that chunk again. We just write a code with two numbers, how far back to look, and how many characters to copy. Now, when we decompress, we can just read along and whenever we hit one of these codes, we jump back, copy the matching chunk, and paste it into place. Two scientists, Lempel and Ziv, published this algorithm in 1977, so it became known as LZ77. But some of these symbols and pointers show up more often than others. They actually have their own frequencies. So we can feed that whole stream into another Huffman tree to get a second layer of compression. And in our demo, it actually gets the file down 85% smaller than the original. This might look new, but you've almost certainly used it yourself. It's called deflate, but it's better known for the files it creates, .zip. If you ever clicked Close on this before, you've definitely used it. But Huffman only uses the overall frequency of a chunk repeating. Real data isn't just random chunks. In our example, after "Never gonna", you might get "give you up", "let you down", or "run around and desert you". You might get "make you cry", you might get "say goodbye" or "tell a lie and hurt you". Each one has its own probability, and you can represent these probabilities with a mathematical tool called a Markov chain. The algorithm can then encode the stream of data so that the more probable next chunks cost few bits and the less probable ones cost more. If you combine that with a much bigger search window so it can point much further back in memory, then you get the Lempel Ziv Markov chain algorithm, or LZMA. LZMA was developed by Igor Pavlov around 1998, and it often beats much more familiar methods. In many cases, it can shrink files to about 70% of the size of a typical .zip. Lasse took this elegant compression algorithm and made it work on Linux, and he called it XZ not because it stood for anything, but just because it sounded cool.

</details>

**未知发言人**: 我经常使用 **XZ**。我认为 **XZ** 是一个很棒的项目。压缩数据有很多不同的方法。有些速度快但压缩效果不好，有些速度慢但压缩效果极佳。

<details>
<summary>Original English</summary>

**未知发言人**: I'm using XZ quite a lot. I think XZ is a wonderful project. There are lots of different ways of compressing data. Some of them are fast but they don't compress very well, and some of them are slow but they get extremely good compression.

</details>

**未知发言人**: 但在 **Linux** 上，项目不断地将相同的文件和更新发布给数百万台机器，所以 **XZ** 是完美的。你只需压缩一次，然后就可以永远下载更小的文件。**Lasse** 于2009年发布了 **XZ**，在接下来的十年半里，它从一个利基工具变成了当项目需要有效 **无损压缩** 时的普遍选择。因此，**XZ** 悄然传播到各地，最终成为 **OpenSSH** 的一个 **依赖项**。

<details>
<summary>Original English</summary>

**未知发言人**: But across Linux, projects are constantly shipping the same files and updates to millions of machines, so XZ is perfect. You compress something once, then you get a smaller file to download forever. Lasse released XZ in 2009, and over the next decade and a half, it went from a niche tool to the common choice whenever a project needed effective lossless compression. So, XZ quietly spread everywhere, eventually becoming a dependency of OpenSSH.

</details>

### Jia Tan 的渗透计划

**未知发言人**: 大约在2024年2月的某个时候，**Jia Tan** 给我发了电子邮件。他的新版 **XZ** 有了所有这些新功能。

<details>
<summary>Original English</summary>

**未知发言人**: So, it was at some point in about February 2024 and Jia Tan, he emails me. He's got all these new features in the new version of XZ.

</details>

**Henry**: 他几乎立即就赢得了 **Rich** 的信任。

<details>
<summary>Original English</summary>

**Henry**: He wins Rich over almost immediately.

</details>

**未知发言人**: 我经常和数百名贡献者交流，我对他们有感觉。我觉得，你知道，他们是不是优秀的程序员，这是我真正关心的。他们是不是认真负责的人，他们是不是乐于助人？他们是否能快速响应 bug 报告？在所有这些方面，**Jia Tan** 都会是一个非常好的贡献者，因为他显然是一个优秀的程序员。他非常积极响应，非常热心，我喜欢所有这些。

<details>
<summary>Original English</summary>

**未知发言人**: So I get to talk to hundreds of contributors all the time, and I do get a feel for them. I feel, you know, are they good coders, which is what I really care about. Are they conscientious people, are they helpful? Do they respond to bug reports quickly? And in all of the dimensions, Jia Tan would be a very good contributor because he's obviously a good coder. He's very responsive, he's very keen, and I love all that.

</details>

**未知发言人**: 所有迹象都表明 **Jia** 是一个出色的贡献者，这让 **Rich** 放松了警惕。而这往往是互联网上问题开始的地方。你不可能永远保持警惕。但对我们来说幸运的是，有了今天的赞助商 **NordVPN**，你就不必如此。**NordVPN** 的 **威胁防护专业版** 在危险网站加载之前就将其阻止。它会阻止恶意下载，并自动清除跟踪器和侵入性广告。即使你没有连接到 **VPN**，它也能工作，所以很多这些攻击根本就没有机会开始。我旅行或在公共 Wi-Fi 上工作时都会使用 **NordVPN**，因为这意味着我无需考虑谁在运行网络。只需一键操作，而且速度非常快，我经常忘记它正在运行。不仅如此，如果某个节目在我所在的地区不再可用，或者某个体育赛事被禁播，比如我经常看国际足球比赛，而我所在的地方没有转播，在这种情况下，我只需一键切换服务器位置即可解锁内容。显然你甚至可以用它来通过更改 **IP 地址** 到另一个国家来找到更优惠的机票。我还没试过，但这听起来很有趣。所以，如果你想尝试，可以通过访问 **nordvpn.com/veritasium** 获得最优惠的价格。当你使用该链接或此二维码时，你将获得巨大的折扣。此外，你还可以通过 **Nord** 获得30天退款保证。这简直是小菜一碟。所以再次强调，请访问 **nordvpn.com/veritasium** 或点击下方描述中的链接。非常感谢 **Nord**，让我们回到 **Jia** 和他所觊觎的奖品。

<details>
<summary>Original English</summary>

**未知发言人**: All indications are that Jia is a great contributor, and this puts Rich at ease, so he lets his guard down. And that's often where the problems start on the internet. You can't keep your guard up forever. But lucky for us, with today's sponsor, NordVPN, you don't have to. NordVPN's Threat Protection Pro blocks dangerous websites before they load. It stops malicious downloads and it strips out trackers and intrusive ads automatically. And it works even when you're not connected to the VPN, so a lot of these attacks never get the chance to start in the first place. I use NordVPN whenever I'm traveling or working on public wifi because it means that I don't have to think about who's running the network. It's just one click and it's so fast that I often forget that it's on. Not just that, if there's a show that's no longer available in my region or a sports team that's blacked out, like I'm often watching international football and they don't quite have it where I'm going, well, in that case, I can just switch my server location with one click to unlock the content. Apparently you can even use it to find better deals on plane tickets by changing your IP address to another country. I haven't tried it yet, but that sounds fascinating. So, if you wanna try it, you can get the best deal by going to nordvpn.com/veritasium. When you use that link or this QR code, you'll get a huge discount. Also, you get a 30-day money back guarantee through Nord. It's a no brainer. So again, that's nordvpn.com/veritasium or you can click the link in the description below. Thanks so much to Nord, and let's get back to Jia and the prize he's got his eyes on.

</details>

**未知发言人**: 此时，我们正在准备 **RHEL 10**。

<details>
<summary>Original English</summary>

**未知发言人**: At this point, we were preparing RHEL 10.

</details>

**Henry**: 看，**Red Hat** 发布两种主要的 **Linux** 版本。**Fedora** 是免费且公开可用的，而 **Red Hat Enterprise Linux**，或 **RHEL**，则通过付费订阅提供。这个版本必须稳定和安全，因为它被广泛用于最重要的机器，比如政府和医院。**Jia** 希望他的代码能进入 **RHEL**，但 **RHEL** 大约每三年才发布一个主要新版本。

<details>
<summary>Original English</summary>

**Henry**: See, Red Hat ships two major flavors of Linux. Fedora, which is free and publicly available, and Red Hat Enterprise Linux, or RHEL, which is available through a paid subscription. This one has to be stable and secure because it's widely used on the most important machines, like in governments and hospitals. Jia wants his code in RHEL, but RHEL only has a new major release about once every three years.

</details>

**未知发言人**: 所以，肯定有一个截止日期，那个截止日期大约在2024年3月、4月左右。

<details>
<summary>Original English</summary>

**未知发言人**: So, there's definitely a deadline, and that deadline was around sort of March, April in 2024.

</details>

**未知发言人**: **Jia** 必须迅速行动。他想要完全控制任何被入侵的机器。为了实现这一点，他有三步计划。第一步，**特洛伊木马**。**XZ** 的代码位于一个名为 **GitHub** 的网站上，该网站使用一个名为 **Git** 的工具跟踪 **XZ** 代码的所有编辑，该工具也是由 **Linus Torvalds** 开发的。所以，**Jia** 开始进行小的修改。他将 bug 报告的主要联系人更改为他自己的电子邮件。他调整了一些小工具，这些工具将在以后帮助他。但他不能通过这种方式偷偷植入有效载荷。我的意思是，那会太明显了。所以他需要一种方法偷偷植入它，而它永远不会以正常的源代码形式出现在 **GitHub** 上。

<details>
<summary>Original English</summary>

**未知发言人**: Jia has to act fast. He wants complete control of any compromised machine. And to pull it off, he has three steps in his plan. Step one, the Trojan horse. The code for XZ lives on a website called GitHub, which tracks all edits to XZ's code using a tool called Git, which was also developed by Linus Torvalds. So, Jia starts by making small changes. He changes the primary contact for bug reports to his own email. He tweaks small tools that will help him later. But he can't sneak in the payload this way. I mean, it'd be too obvious. So he needs a way to sneak it in without it ever appearing as normal source code on GitHub.

</details>

**未知发言人**: 所以，当你编写压缩软件时，你的软件中经常充满了这些我们称之为 **二进制大对象 (binary blobs)** 的东西，它们只是用于测试压缩或解压缩是否仍然有效的二进制块。

<details>
<summary>Original English</summary>

**未知发言人**: So, when you're writing compression software, it's very often the case that your software is full of these binary blobs, as we call them, so just lumps of binary which are used to test the compression or the decompression is still working.

</details>

**未知发言人**: 没有人会阅读这些测试 **二进制大对象**。它们被包含在内，但从未出现在人类可读的源代码中。它们被认为是垃圾数据。但对于 **Jia** 来说，这是隐藏他的有效载荷的完美场所，隐藏在一个乍一看无害，但实际上是 **特洛伊木马** 的东西里面。但是，**XZ** 内部的 **特洛伊木马** 仍然只是一个 **二进制大对象** 中的一堆数据。他必须将其解包。所以，在构建项目的代码中，他偷偷地插入了一个小而容易被忽视的更改。它隐藏在所有自动生成的代码中，悄悄地解包他的有效载荷，并将其插入到 **XZ** 库中。但现在它已经进入 **XZ**，它仍然必须选择合适的时机行动。进入第二步，**Goldilocks**。**Jia** 的最终目标是损害 **SSH** 连接过程中一个非常特定的部分——**RSA 身份验证** 步骤。他意识到，如果他能偷偷地插入一个小的恶意组件，我们称之为有效载荷，那么每次 **SSH** 检查密钥时，他的代码将首先运行。它会悄悄地寻找一个只有他知道的特殊 **主密钥**，如果它看到那个密钥，它就会让他直接进入。如果不是，它就会调用真实的代码，没有人会察觉。所以，他将拥有进入 **OpenSSH** 的后门入口。但他不能直接进入并重写 **RSA Decrypt**，即在登录期间验证客户端身份的函数。这没那么容易。你看，当你构建一个应用程序时，你可以从不同的库中获取所有需要的代码，并将它们捆绑到你的应用程序中。但这种方法有一个很大的缺点。如果系统上有10个不同的应用程序都捆绑了同一个库，你的机器上最终会有10个单独的副本，所以它是冗余的。这就是为什么现代系统大多使用 **共享库**。当应用程序启动时，链接器会填充一个地址表。这些地址指向它从链接到的库中需要的函数和变量。这个表被称为 **全局偏移表 (GOT)**。现在，当它想要使用 **共享库** 中的东西时，它只需检查 **GOT** 并跳转到内存中的正确位置。**RSA Decrypt** 根本不属于 **OpenSSH**。它来自一个 **共享加密库**。所以为了劫持身份验证，**Jia** 可以覆盖告诉 **SSH** **RSA Decrypt** 在哪里的 **GOT** 条目。为了做到这一点，他可以使用一个鲜为人知的工具，称为 **IFUNC 解析器**。

<details>
<summary>Original English</summary>

**未知发言人**: Nobody reads these test blobs. They're included without ever appearing in the human readable source code. They're assumed to be garbage data. But for Jia, this is the perfect place to hide his payload, inside something that at first glance looks harmless. But in reality, it's a Trojan horse. But with a Trojan horse inside of XZ, it's still just a lump of data in a binary blob. He has to unpack it. So, in the code that builds the project, he slips in a small easy-to-miss change. It hides among all the automatically generated code and quietly unpacks his payload, inserting it into the XZ library. But now that it's inside of XZ, it still has to pick the right time to act. On to step two, Goldilocks. Jia's end goal is to compromise a very specific part of the SSH connection process, the RSA authentication step. He realizes that if he can slip a small malicious component in there, let's call it the payload, then every time SSH checks for a key, his code will run first. It will quietly look for a special master key that only he knows, and if it sees that key, it'll let him straight in. If it doesn't, it'll call the real code and no one's the wiser. So, he will have his backdoor entrance to OpenSSH. But he can't just go in and rewrite RSA Decrypt, the function that verifies the client's identity during the login. It's not that easy. See, when you build an application, you could take all the code you need from different libraries and bundle it into your application. But there's a big drawback to this approach. If 10 different applications on a system all bundle the same library, you end up with 10 separate copies on your machine, so it's redundant. That's why modern systems mostly use shared libraries. When an application starts, the linker fills in a table of addresses. These addresses point to the functions and variables it needs from the libraries it links to. That table is called the Global Offset Table, or GOT. Now, when it wants to use something from a shared library, it just checks the GOT and jumps to the right spot in memory. RSA Decrypt doesn't belong to OpenSSH at all. It comes from a shared crypto library. So to hijack authentication, Jia can overwrite the GOT entry that tells SSH where it is. And to do that, he can use a little known tool called an IFUNC resolver.

</details>

**未知发言人**: **IFUNC** 用于当你想要优化你的代码以在 **Intel** 硬件和 **AMD** 硬件上运行时。现在，你可以只为 **Intel** 编写软件，它在 **Intel** 上会运行得非常快，而在 **AMD** 硬件上可能会运行得很糟糕。

<details>
<summary>Original English</summary>

**未知发言人**: The IFUNC is used where let's say you wanna optimize your code to run on Intel's hardware and AMD hardware. Now, you could write the software just for Intel, and it would run very fast on Intel and it probably would run very badly on AMD hardware.

</details>

**Henry**: 相反，你保留同一函数的多个版本，**IFUNC 解析器** 会为你的硬件选择正确的版本。乍一看，这听起来像是 **Jia** 欺骗系统，让它认为正在运行需要他自己被破坏的 **RSA Decrypt** 版本的硬件的一种方式。但这里有一个问题。一个库只能为其自己的函数定义 **IFUNC 解析器**。由于 **RSA Decrypt** 不属于 **XZ**，它不能使用 **IFUNC 解析器** 来覆盖它。但 **IFUNC** 仍然可以帮助他。

<details>
<summary>Original English</summary>

**Henry**: Instead, you keep multiple versions of the same function and the IFUNC resolver picks the right one for the hardware you're on. At first glance, that sounds like a way for Jia to trick the system into thinking it's running hardware that needs his own compromised version of RSA Decrypt. But there is a catch. A library can only define IFUNC resolvers for its own functions. And since RSA Decrypt doesn't belong to XZ, it can't use an IFUNC resolver to override it. But IFUNC can still help him.

</details>

**未知发言人**: 所以它会在程序运行的非常早期就进行这种硬件可用性的判断，而且关键是，它确实允许你在库中非常早期就运行你自己的代码。

<details>
<summary>Original English</summary>

**未知发言人**: So it will, very, very early on in the running of the program it will do this sort of determination of what hardware is available, and crucially, it does let you run your own code in the library very early on.

</details>

**未知发言人**: 现在，在这个早期阶段，从 **IFUNC 解析器** 内部，**Jia** 可以尝试直接重写 **RSA Decrypt** 的 **GOT** 条目。但此时，系统仍在填充 **GOT**，所以即使 **Jia** 更改了 **RSA Decrypt** 槽位，加载器稍后会过来并将真实地址写回去，从而抹去他的更改。另一方面也有一个限制。为了使这种劫持更困难，一旦 **GOT** 中的所有条目都被填充，系统就会将该表标记为 **只读**。这意味着如果 **Jia** 等待太久，**RSA Decrypt** 条目就会被冻结。所以他必须在一个非常精确的时刻将其植入。在 **RSA Decrypt** 条目合法填充之后，但在表被标记为 **只读** 之前。而那个微小的时间窗口就是 **Goldilocks 区**。为了达到它，他需要另一个工具。所以，在 **GOT** 中链接 **共享库** 经常导致错误，因此 **Linux** 有一个特殊的调试功能，可以跟踪系统正在做什么。它允许你在链接器将符号地址写入 **GOT** 时运行代码。这被称为 **动态审计钩子**，通常你会用它来分析性能。但对 **Jia** 来说至关重要的是，这里没有真正的防护措施。这个钩子可以运行他想要的任何代码。这就是 **IFUNC** 最终发挥作用的地方。**Jia** 使用 **IFUNC 解析器** 提前设置审计钩子。然后，当链接器写入真实的 **RSA Decrypt** 地址时，钩子触发并替换为他的有效载荷。正好在 **Goldilocks 区** 的中间。不过，还有一个最后的复杂问题。审计钩子通常由系统配置，而不是由像 **XZ** 这样的库配置。所以当 **Jia** 第一次寻找他应该重写的审计钩子变量时，它实际上对他来说是隐藏的，所以他首先必须找到它。在 **IFUNC** 内部，他扫描一小块二进制代码区域，寻找钩子的迹象。但这只是原始字节，所以他编写了一个微小的解码器，将它们转换回他可以读取的指令。现在 **Jia** 可以找到钩子在内存中的位置，并最终植入他的代码。然后，当 **RSA Decrypt** 被合法调用时，它会触发有效载荷，他就成功入侵了。但现在他已经入侵，他该怎么做？他又如何干净地离开呢？第三步，**猫贼**。有了 **Jia** 的漏洞，**SSH** 不再仅仅检查合法的登录。它还在监听一个隐藏的 **主密钥**。**Jia** 很小心，他不想让其他人偶然发现这个后门，所以那个 **主密钥** 不仅仅是一个简单的密码。它实际上是一个迷你 **加密交换**。首先，后门代码检查一个 **共享密钥**，然后，其次，它验证用户。只有当这两个检查都通过时，有效载荷才会运行。实际上，这就像后门正在 **SSH** 内部运行一个迷你版的 **SSH 加密**。但在 **SSH** 中，它使用该加密来阻止攻击者。在这种情况下，后门正在使用该加密来确保只有攻击者才能进入。但他仍然很小心。防御者发现入侵的主要方法之一是通过 **SSH 日志**。所以，为了掩盖他的踪迹，他会清除后门曾经触发过的证据。这还不包括他在整个过程中插入的众多安全检查，以确保系统支持后门，并且不会崩溃并引起注意。这就是 **Jia** 陷阱的巧妙之处。它谨慎而细致，旨在只在它能隐形运行的地方渗透。完成这三个步骤后，他最终可以不被察觉地控制机器。他现在只需要将他更新的 **XZ** 在下一个版本中实现。但就在 **Jia** 完成他的后门时，一位开源开发者请求移除将 **XZ** 链接到 **OpenSSH** 的 **依赖项**。这对 **Jia Tan** 来说将是灾难性的。他变得疯狂，越来越努力地将他被破坏的 **XZ** 植入主要的 **Linux** 发行版中。他将其植入 **Debian** 的早期实验版本中。他提交了一个请求，要求将其添加到 **Ubuntu** 中。他试图在任何人意识到发生什么之前，将后门植入到他能植入的任何地方。就在那时，**Rich** 收到了 **Jia** 的第一条消息。在接下来的几周里，他变得越来越坚持，敦促 **Rich** 将更新的 **XZ** 添加到下一个 **Fedora** 版本中。

<details>
<summary>Original English</summary>

**未知发言人**: Now, at this early stage, from within an IFUNC resolver, Jia could try to directly rewrite the GOT entry for RSA Decrypt. But at this point, the system is still filling in the GOT, so even if Jia changes the RSA Decrypt slot, the loader will come along later and write the real address back in, wiping out his change. And there's a limit on the other side as well. To make this sort of hijacking harder, once every entry is filled on the GOT, the system marks the table Read Only. That means that if Jia waits too long, the RSA Decrypt entry is frozen. So he has to slip it in at a very precise moment. After the RSA Decrypt entry is filled in legitimately, but before the table gets marked Read Only. And that tiny window is the Goldilocks zone. And to hit it, he's gonna need another tool. So, linking shared libraries in the GOT often leads to bugs, so Linux has a special debugging feature that tracks what the system's doing. It lets you run code whenever the linker writes a symbol's address into the GOT. It's called a dynamic audit hook, and normally you'd use it to profile performance. But crucially for Jia, there are no real guardrails. The hook can run any code he wants. And this is where IFUNC finally pays off. Jia uses an IFUNC resolver to set the audit hook early. Then, when the linker writes in the real RSA Decrypt address, the hook fires and swaps in his payload. Right in the middle of the Goldilocks zone. There is one final complication, though. Audit hooks are normally configured by the system, not by libraries like XZ. So when Jia is first looking for the audit hook variable that he's supposed to rewrite, it's actually hidden from him, so he first has to find it. Within the IFUNC, he scans a small region of binary code, hunting for signs of the hook. But it's just raw bites, so he writes a tiny decoder to turn them back into instructions that he can read. Now Jia can find where the hook lives in memory and finally plant his code. Then, when RSA Decrypt gets called legitimately, it triggers the payload and he's in. But now that he's in, what does he do? And how does he get out of there cleanly? Step three, the cat burglar. With Jia's exploit in place, SSH isn't just checking for a legitimate login anymore. It's also listening for a hidden master key. And Jia is careful, he doesn't want anyone else stumbling onto the backdoor, so that master key isn't just a simple password. It's actually a mini cryptographic exchange of its own. First, the backdoor code checks for a shared secret, and then, second, it authenticates the user. And only if both checks pass does the payload run. In effect, it's like the backdoor is running a miniature version of the encryption from SSH inside of SSH. But in SSH, it uses that encryption to keep the attackers out. In this case, the backdoor is using that encryption to make sure that it's only the attackers that can get in. But he's still careful. One of the main ways defenders catch intrusions is through SSH logging. So, to cover his tracks, he wipes evidence of the backdoor ever firing. And this is on top of the numerous safety checks that he's inserted throughout the process to make sure the system supports the backdoor and doesn't crash and draw attention. And this is the genius of Jia's trap. It's cautious and meticulous, designed to slip through only where it will run invisibly. With all three of these steps complete, he can finally control the machine undetected. All he needs to do now is get his updated XZ implemented in the next release. But just as Jia is completing his backdoor, an open source developer requests to remove the dependency that links XZ to OpenSSH. This would spell disaster for Jia Tan. He becomes frantic, pushing harder and harder to get his compromised XZ into major Linux releases. He gets it into an early experimental build of Debian. He files a request to have it added to Ubuntu. He's trying to land the backdoor everywhere he can before anyone realizes what's going on. And it's then that Rich gets his first message from Jia. Over the next few weeks, he gets more and more insistent, urging Rich to add the updated XZ into the next release of Fedora.

</details>

**未知发言人**: 我总是非常乐意与热心的上游贡献者交流，那些对他们软件中的新事物感到兴奋，真正愿意帮助我们把东西引入 **Fedora** 的贡献者。所以，你知道，那很棒，我喜欢。那会让我开心一整天，那是我的快乐之地。

<details>
<summary>Original English</summary>

**未知发言人**: I'm always very keen to talk to keen upstream contributors, contributors who are really excited about new things in their software, who are really willing to help us get stuff into Fedora. So, you know, that's great, love it. That kind of makes my day, it's my happy place.

</details>

**未知发言人**: 最终，**Jia** 得到了他想要的。**Rich** 将更新的 **XZ** 添加到了 **Fedora** 的预发布版本中。**Jia** 成功了。除了有一个 bug。在像后门这样的低级代码中，你通常认为理所当然的事情，比如内存管理，并不是自动完成的。如果一个函数获取了一部分内存，它也必须在完成后将那部分内存归还。如果它不这样做，那么每次函数运行时，它都会获取越来越多的内存，然后从不释放。随着时间的推移，程序只会不断增长。这被称为 **内存泄漏**。为了捕获这类问题，开发者使用一个名为 **Valgrind** 的工具。它会更慢地运行程序，但会监视每个内存操作是否有任何可疑之处。**Valgrind** 正在 **Jia** 的代码上大发雷霆。

<details>
<summary>Original English</summary>

**未知发言人**: Eventually, Jia gets what he wants. Rich adds the updated XZ to a pre-release version of Fedora. Jia has succeeded. Except there's a bug. In low-level code like the backdoor, things you normally take for granted, like memory management, are not done automatically. If a function grabs a bit of memory, it also has to give that memory back when it's done. And if it doesn't, then every time the function runs, it grabs more and more memory and then never releases it. Over time, the program just keeps growing. That's called a memory leak. And to catch problems like this, developers use a tool called Valgrind. It runs the program more slowly but watches every memory operation for anything suspicious. Valgrind is raising hell on Jia's code.

</details>

**未知发言人**: 我们将 **XZ** 的这个版本，560，放入了 **Fedora 40**。我们最初收到一个 bug 报告。

<details>
<summary>Original English</summary>

**未知发言人**: We put XZ, this version, 560, into Fedora 40. We get a bug report initially.

</details>

**未知发言人**: **XZ** 中的后门特别生成了 **无效写入错误**。逻辑是手动编写的，绕过了编译器的安全检查，所以他们不小心写到了内存栈之外。现在，对 **Jia** 来说幸运的是，所有这些并不是立即显而易见的。**Rich** 仍然没有注意到发生了什么。

<details>
<summary>Original English</summary>

**未知发言人**: And the backdoor in XZ specifically is generating invalid writes errors. Well, the logic was written by hand, bypassing the compiler's safety checks, and so they accidentally wrote outside the memory stack. Now, lucky for Jia, all this isn't immediately obvious. Rich still hasn't noticed what's happening.

</details>

**未知发言人**: 新软件有 bug，对吧？这是软件的自然状态。软件总是充满了 bug。

<details>
<summary>Original English</summary>

**未知发言人**: New software has bugs, right? It's the state of nature of software. Software is absolutely full of bugs all the time.

</details>

**Henry**: 现在，真正的问题在于测试文件中的恶意代码。但 **Jia** 不能直接去修复它，那会完全暴露后门。所以他编造了一个掩盖故事。他声称他用来生成原始测试文件的随机数据是不可复现的，所以他正在替换它。在这个更新的代码中，他修复了内存错误。

<details>
<summary>Original English</summary>

**Henry**: Now, the real problem is inside the malicious code in the test file. But Jia can't just go and fix that, that would completely expose the backdoor. So he invents a cover story. He claims that the random data he used to generate the original test files, well, it's not reproducible, so he's replacing it. And in this updated code, he fixes the memory error.

</details>

**未知发言人**: 这是一个非常有说服力且合理的解释，说明为什么必须更新这个测试 **二进制大对象**。但当然，这不是真正的原因。

<details>
<summary>Original English</summary>

**未知发言人**: It's a very convincing and plausible explanation for why this test blob has to be updated. But of course, it's not the real reason.

</details>

**未知发言人**: 好的，现在真正的修复已经到位，但如果 bug 只是神奇地消失了，那看起来会有点可疑。所以他必须找到一种方法来掩盖它。

<details>
<summary>Original English</summary>

**未知发言人**: All right, so now the real fix is in, but if the bug just magically went away, it would look a bit suspicious. So he has to find a way to cover it up.

</details>

**未知发言人**: 所以他接下来所做的是，他以一种方式改变了 **IFUNC** 代码，他添加了大量的注释和对周围代码的更改，这些更改实际上并没有改变代码，但看起来足够合理，让人觉得他正在改变 **IFUNC** 的工作方式来修复 **Valgrind** 错误。

<details>
<summary>Original English</summary>

**未知发言人**: So what he then does is he changes the IFUNC code in a way where he adds like a whole bunch of comments and changes to the code around it that doesn't actually change the code but is plausible enough to look like he's changing how the IFUNC works to fix the Valgrind bug.

</details>

**未知发言人**: 是的，听着，我当时想，我知道这是邪恶的黑客 **Jia Tan**，但我想，哦，这很聪明，你知道吗？

<details>
<summary>Original English</summary>

**未知发言人**: It does, listening to it and I'm like I know that this is the evil hacker Jia Tan, but I'm like, ooh, that's clever. You know?

</details>

**未知发言人**: 是的，我的意思是，看，这家伙显然不是个傻瓜，对吧？但这并不值得怀疑。这就是我们对压缩软件的期望。作为一名打包者，修复上游软件中的每个 bug 并不是我的工作。一旦达到一定的难度级别，我就会想，嗯，**Jia Tan** 实际上一直在编写这个软件，对吧？所以他把所有东西都记在脑子里，他知道它是如何工作的。我把问题交给他更容易。我把 bug 发给他，大约一天后他就把修复发回来了。从我的角度来看，问题解决了。它奏效了，系统奏效了，对吧？我做出了正确的决定。在那一刻，以我当时所知，我没有看到任何问题。

<details>
<summary>Original English</summary>

**未知发言人**: Yeah, I mean, look, the guy is obviously not an idiot, right? But none of this is suspicious. This is what we expect from compression software. And as a packager, it's not really my job to fix every bug in upstream software. As soon as it gets to a certain level of difficulty, my thought here is, well, Jia Tan has actually been writing this software, right? So he's got it all in his head, he knows how it works. It's easier for me to just give him the problem. And I send the bug over to him and like a day later he sends the fix back. From my point of view, it's problem solved. It worked, system worked, right? I made the right call. I don't see, at that point, knowing what I know then, I don't see that there's any problem.

</details>

### 后门演示与潜在危害

**未知发言人**: 所以我们下载了 **Jia Tan** 的 **XZ** 版本，它在 **Fedora** 上公开可用，但我们做了一个小小的修改。我们没有使用 **Jia** 的秘密代码，而是使用了我们自己的，这意味着我们可以利用 **Jia** 的后门。在这种情况下，我们正在攻击 **veritasium.com** 网站。一旦我们控制了它，我给 **Derek** 准备了一个小把戏。现在，为了确保我不会把真实的流量搞得太糟糕而丢掉工作，我们实际上克隆了 **Veritasium** 网站，并把它放在一个非常相似的 URL 上，但它会以同样的方式工作。当然，**Derek** 不知道我已经做好了万全准备。

<details>
<summary>Original English</summary>

**未知发言人**: So we downloaded Jia Tan's version of XZ, which was available on Fedora publicly, but we made a slight modification. Instead of using Jia's secret code, we're using our own, and that means that we can take advantage of Jia's backdoor. In this case, we're targeting the veritasium.com website. And once we get control of it, I got a little trick in store for Derek. Now, to make sure I don't mess with any real traffic too bad and lose my job, we actually cloned the Veritasium website and put it on a very similar URL, but it will work the same. Of course, Derek doesn't know that I've covered my bases.

</details>

**Derek**: 哦不。伙计，当你们做这些事情时，我只是，我开始越来越害怕了。我希望它能为视频工作，但我也希望它不要工作，因为我不想把事情搞砸，所以。

<details>
<summary>Original English</summary>

**Derek**: Oh no. Man, when you guys do these things, I just, I start to get more and more scared now. I want it to work for the video, but I also don't want it to work 'cause I don't wanna screw stuff up, so.

</details>

**未知发言人**: 是的，我想这就是你让我们肆意妄为所承担的风险。

<details>
<summary>Original English</summary>

**未知发言人**: Yeah, it's the risk you take, I guess, letting us run rampant.

</details>

**Derek**: 这是一个问题。

<details>
<summary>Original English</summary>

**Derek**: It is a concern.

</details>

**未知发言人**: 我将在这里执行一个脚本，它将打开。它正在 **Veritasium** 服务器上打开一个端口。然后在这边我将执行一个小脚本。

<details>
<summary>Original English</summary>

**未知发言人**: I'm gonna execute a script here, which is gonna open up. It's opening up a port on the Veritasium server. And then on this side I'm gonna execute a little script.

</details>

**Derek**: 糟糕。

<details>
<summary>Original English</summary>

**Derek**: Uh-oh.

</details>

**Henry**: (笑)

<details>
<summary>Original English</summary>

**Henry**: (Henry laughs)

</details>

**Derek**: Henrytasium。这个笨蛋是谁？在主照片上，你花时间打扮得西装革履。

<details>
<summary>Original English</summary>

**Derek**: Henrytasium. Who is this goof? On the main photo, you spent time getting all suited up there.

</details>

**未知发言人**: 当然。

<details>
<summary>Original English</summary>

**未知发言人**: Of course.

</details>

**Derek**: 看起来很帅，先生。

<details>
<summary>Original English</summary>

**Derek**: Looking sharp, sir.

</details>

**未知发言人**: 谢谢，谢谢。

<details>
<summary>Original English</summary>

**未知发言人**: Thank you, thank you.

</details>

**Derek**: “**Derek** 永远不会批准的视频。”糟糕。

<details>
<summary>Original English</summary>

**Derek**: "Videos Derek would never approve of." Uh-oh.

</details>

**未知发言人**: 这个概念是，在我们合作的这些年里，你拒绝了我很多想法，我想现在既然控制了网站，是时候让世界看到它们了。

<details>
<summary>Original English</summary>

**未知发言人**: The concept was over the years that we've worked together, you've said no to a bunch of my ideas, and I figured now with control of the website it's about time the world saw it.

</details>

**Derek**: “水下生活7天。饱和潜水员如何在水下1000英尺生活？”我的意思是，你不会在外面，对吧？所以我不知道你为什么需要护目镜和呼吸器，但你又不在水下。“为什么几乎不可能射击4000米。”这是一个狙击视频。是的。“中情局撒谎：揭露中情局如何就酷刑撒谎。”我觉得那对我们来说仍然是一个棘手的领域。“氙气如何取代氧气。我尝试用氙气攀登珠穆朗玛峰。”那听起来是个糟糕的主意。这个视频的全部内容就是试图让我批准你的项目。你知道，如果人们喜欢这些视频想法，他们可以随时在评论中告诉我们，我们实际上可以制作它们。点赞最多的评论，我会很高兴地批准。

<details>
<summary>Original English</summary>

**Derek**: "Surviving 7 days living underwater. How do saturation divers live at -1,000 feet?" I mean, you wouldn't be outside, right? So I don't know why you need goggles there and like a respirator but you're not underwater. "Why it's almost impossible to shoot 4,000 meters." It's a sniper video. Yeah. "The CIA lied: exposing how the CIA lied about torture." I feel like that still goes into a tough territory for us. "How xenon gas replaced oxygen. I attempted to climb Mount Everest on xenon gas." That sounds like a terrible idea. This is what this whole video is about, this whole video is just about trying to get me to green light your projects. You know, if people like these video ideas, they can feel free to let us know in the comments and we can actually make them. The top upvoted comment one, I will green light happily.

</details>

**未知发言人**: 冲啊！

<details>
<summary>Original English</summary>

**未知发言人**: Let's go!

</details>

**Derek**: 这现在对公众直播吗？

<details>
<summary>Original English</summary>

**Derek**: Is this live to the public right now?

</details>

**未知发言人**: 是的，它是直播的，是的，它在服务器上是直播的，是的。

<details>
<summary>Original English</summary>

**未知发言人**: It is live, yeah, it's live on the server, yeah.

</details>

**Derek**: 如果现在有人在网站上，那对他们来说会非常奇怪。听着，我不高兴，我希望你把它改回去。这在 **Linux** 服务器上似乎不应该可能。所以最大的问题是，你是怎么做到的？

<details>
<summary>Original English</summary>

**Derek**: If anyone's on the website right now, that would be very strange for them. Look, I'm not pleased, I would like you to change it back. It doesn't seem like this should be possible on a Linux server. So the big question is, how did you do it?

</details>

**未知发言人**: 地址是服务器，种子是我们进入的代码，然后命令是我们正在做的事情，本质上是打开，在这种情况下是 **nc**，这就像在机器上打开一个端口，然后我们可以从第二个终端访问它。然后我们正在做的是，在这边我们运行一个脚本，它连接到刚刚打开的那个端口，复制我们的文件，然后最终我们将拥有服务器的 **root 访问权限**。这意味着它认为我们拥有这个东西。

<details>
<summary>Original English</summary>

**未知发言人**: The address is the server, the seed is our code to get in, and then the command is what we're doing to essentially open up, in this case nc, which is like opening up a port on the machine that we can then access from this second terminal. Then what we're doing is on this side we're running a script that's connecting to that port that's just been opened up, copying our files and then by the end we're gonna have root access on the server. That means that it thinks that we own the thing.

</details>

**Derek**: 这太疯狂了。这是一个非常可怕的黑客攻击。我不喜欢它。

<details>
<summary>Original English</summary>

**Derek**: That's so crazy. This is a very scary hack. I do not like it.

</details>

**未知发言人**: 另一件事是，这是一种非常明显的演示这种攻击的方式。比如我更改了网站上的所有内容，你立即就知道我入侵并黑掉了服务器。如果我们要真正这样做，我们会做得更隐蔽。

<details>
<summary>Original English</summary>

**未知发言人**: Another thing is that this is a very obvious way of demonstrating this attack. Like I've changed everything on the website, you immediately know that I've gone in and hacked the server. If we were doing this for real, we would do it a lot sneakier.

</details>

**Derek**: 我的意思是，正如你所说，对吧？要做的事情不是完全重做别人的网站，让所有人都注意到，而是微妙地改变它，让没有人注意到，这样你就可以窃取数据，或者，是的，比如获取信用卡详细信息，或者将付款转移到不同的位置，诸如此类。

<details>
<summary>Original English</summary>

**Derek**: I mean, as you say, right? The thing to do would not be to totally rework someone's website so everyone notices, but to change it subtly so nobody notices so you can skim data or, yeah, like get credit card details or take payments to a different location, stuff like that.

</details>

**未知发言人**: 所以你可以复制任何你想要的东西，你可以更改任何你想要的东西，你可以删除任何你想要的东西。所以如果有任何有趣的文件或加密令牌，任何你感兴趣的文件，现在都是你的了。如果这些文件之间有秘密通信，并且让我们记住我们所有的通信网络也是围绕 **Linux** 构建的，那么这些通信流现在都是你的了。如果你想加密一些东西并要求赎金，现在也是可能的。

<details>
<summary>Original English</summary>

**未知发言人**: So you can copy anything you want, you can change anything you want, you can delete anything you want. So if there's any interesting documents or crypto tokens, any files you're interested in, those are yours now. If there's secret communications going across these, and let's keep in mind all of our communication networks are also built around Linux, those communication streams are yours now. If you wanted to encrypt something and ask for ransom, that's possible now.

</details>

**Henry**: 可能性真的是无限的。经过两年半的努力，慢慢渗透 **XZ 项目** 并编织这个巧妙的后门，**Jia** 成功了。他现在可以在任何安装了新的 **Fedora** 预发布版的机器上自由行动。他还在 **Debian** 测试版和 **Ubuntu** 预发布环境中获得了相同的访问权限。随着 **RHEL 10** 的到来，他的代码可能会感染世界上一些最重要的计算机。现在他应该可以放松了，等待发布，他已经拿到了后门钥匙。但就在他认为一切顺利的时候……

<details>
<summary>Original English</summary>

**Henry**: The possibilities really are endless. After two and a half years of hard work, slowly infiltrating the XZ Project and weaving in this ingenious backdoor, Jia's done it. He now has free rein on any machine that installs the new Fedora pre-release. And he also gets the same access on Debian testing and Ubuntu's pre-release environments. And with RHEL 10 coming up, his code could infect some of the most important computers in the world. Now he should be able to relax, wait for the release, and he's got his backdoor key. But just when he thinks everything's going right...

</details>

### 漏洞的发现与影响

**未知发言人**: **Andres Freund** 是一名德国程序员。他不是安全研究员，也不是黑客。他只是 **Microsoft** 的一名员工，正在从事一个名为 **Postgres** 的开源项目。2024年3月的一天，他尝试了 **Debian** 的不稳定版本，以确保 **Postgres** 能顺利运行。但在检查服务器连接时间时，他注意到了一些奇怪的事情。一个减速。不多。在最坏的情况下，也只有半秒，但这足以让 **Andres** 产生怀疑。我们自己测试了 **XZ** 攻击的连接时间，我们发现了完全相同的情况。持续减速约400到500毫秒。**Andres** 几周前已经看到了 **XZ** 和 **Valgrind** 的问题，这只会让他更加怀疑，所以他深入挖掘。他查看了 **OpenSSH** 的最新添加，并将延迟追溯到 **XZ** 的一次更新。他看到了二进制测试文件，但注意到它们从未在测试中使用过。这甚至更奇怪。**Andres** 试图回去工作，但他无法停止思考。

<details>
<summary>Original English</summary>

**未知发言人**: Andres Freund is a German programmer. He's not a security researcher, he's not a hacker. He's just an employee at Microsoft working on an open source project called Postgres. One day in March 2024, he tries out the unstable release of Debian to make sure that Postgres will run smoothly. But while checking the server connection times, he notices something odd. A slowdown. It's not much. In the worst case, it's only half a second, but it's enough to make Andres suspicious. We tested the connection times ourselves on our own version of the XZ hack and we found the exact same thing. Consistent slowdowns of about 400 to 500 milliseconds. Andres had already seen the problems with XZ and Valgrind weeks earlier and this only makes him more suspicious, so he digs in deeper. He looks at recent additions to OpenSSH and traces the delay back to an update in XZ. He sees the binary test files but notices that they were never used in a test. It's even stranger. Andres tries to get back to work, but he can't stop thinking about it.

</details>

**Andres**: 我记得坐在很多会议上，却无法集中注意力，因为感觉我需要继续调查这件事。

<details>
<summary>Original English</summary>

**Andres**: I remember sitting in a bunch of meetings and like not really being able to concentrate because it feels like, I need to continue looking into this.

</details>

**未知发言人**: 最终，**Andres** 发现了。这不是一个 bug，这是一个后门。而且这个后门非常细致。它在内存中搜索以找到审计钩子，它实现了一个解码器来读取那些原始字节，然后它将所有内容封装在自定义加密和安全检查中，以便它只在正确类型的连接上触发。我的意思是，它甚至混淆了它自己的字符串，这样就不会被检测到。它非常谨慎。但所有这些都需要时间，最终，这就是吸引 **Andres** 注意力的地方。

<details>
<summary>Original English</summary>

**未知发言人**: Eventually, Andres sees it. This isn't some bug, this is a backdoor. And this backdoor is meticulous. It hunts through memory to find the audit hook, it implements a decoder to read those raw bites, and then it wraps everything in custom encryption and safety checks so that it only triggers on the right kind of connection. I mean, it even garble its own strings so that it won't be detected. It's incredibly cautious. But all of that takes time, and in the end, that's what grabs Andres's attention.

</details>

**未知发言人**: 如果他们减少了混淆，我可能就不会注意到任何问题。

<details>
<summary>Original English</summary>

**未知发言人**: If they had done less obfuscation, I probably would not have noticed that anything was wrong.

</details>

**Henry**: 现在，**XZ** 的安全联系人是 **Jia Tan**，所以 **Andres** 不能通过常规渠道报告。相反，他直接给 **Debian** 安全团队发了电子邮件，并向一个公共安全邮件列表发布了一份详细报告。然后，一切都乱了套。

<details>
<summary>Original English</summary>

**Henry**: Now, XZ's security contact is Jia Tan, so Andres can't exactly report it through the usual channels. Instead, he emails the Debian security team directly and posts a detailed report to a public security mailing list. Then, all hell breaks loose.

</details>

**未知发言人**: 我接到电话，我想那是一个周五晚上，事实上，我确定那是一个周五晚上，要参加一个 **Red Hat** 内部会议。很明显，这不是一个普通的会议，因为我们的安全主管也在场。他们向我解释说，社区中的某个人发现了 **XZ** 有一个后门，我立刻就想，搞什么鬼？这怎么发生的？

<details>
<summary>Original English</summary>

**未知发言人**: I'm called up on I think it was a Friday evening, in fact, I'm sure it was a Friday evening, to join a internal Red Hat meeting. It's immediately obvious that this is not a normal meeting because like our head of security is there. It's explained to me that it's been found by somebody in the community that XZ has a backdoor, and immediately I'm like, WTF? How did this happen?

</details>

**未知发言人**: 为了以防万一，**Red Hat** 迅速回滚了 **Fedora**，并告诉所有用户恢复，整个开源社区开始深入研究该项目，以了解出了什么问题。不过，有一点很清楚。**Andres** 是个英雄。

<details>
<summary>Original English</summary>

**未知发言人**: To cover their bases, Red Hat quickly rolls Fedora back and tells all their users to revert, and the whole open source community starts digging into the project to understand what went wrong. One thing is clear, though. Andres is a hero.

</details>

**未知发言人**: 现在，这个漏洞在不同的测试中被发现，这本身就是幸运。但一个不寻找安全漏洞的人，却花了几天时间调查这件事，这种几率有多大？所以，向这位研究员致以崇高的敬意，是的，他把我们所有人从互联网上可能发生的末日中拯救了出来。

<details>
<summary>Original English</summary>

**未知发言人**: Now, the fact that this was discovered in a different test at all, that was lucky. But then what are the chances that someone who isn't looking for a security bug spends days investigating this? So, big kudos to the researcher, and yeah, saved us all from possibly a doomsday on the internet.

</details>

**未知发言人**: 我认为 **Andres** 做得非常出色，因为他做了我本该做的事情，实际上，我本该在我看到这个 bug 的时候就去查看它，我本该像一只疯狂的猎犬一样四处嗅探，试图找出发生了什么。

<details>
<summary>Original English</summary>

**未知发言人**: I think that Andres did a brilliant job because he did what I should have done, actually, which is I should have looked at the, you know, I should have looked at the bug when I saw it and I should have gone there, you know, like a crazy hound sort of sniffing around trying to find out what's going on.

</details>

**Henry**: **Andres** 甚至得到了 **Microsoft** 首席执行官的赞扬。但当这个故事爆发时，主流媒体的反应却出人意料地平静。

<details>
<summary>Original English</summary>

**Henry**: Andres even gets a shout out from the CEO of Microsoft. But when the story breaks, the mainstream response is surprisingly muted.

</details>

**未知发言人**: 实际上，我现在仍然很惊讶主流新闻媒体对此报道不多。我可以告诉你，有多少系统会受到损害，那将是数百万。

<details>
<summary>Original English</summary>

**未知发言人**: Actually, I'm still surprised now that the mainstream news outlets haven't really covered this very much. Well, I can tell you how many systems would have been compromised, which would have been millions,

</details>

**未知发言人**: 从间谍活动到勒索，再到瘫痪整个国家，你都可以通过这个后门做到。

<details>
<summary>Original English</summary>

**未知发言人**: Anything from spying, to ransom, to just taking down entire countries, you could have done it with this backdoor.

</details>

### 攻击者身份之谜与开源反思

**Henry**: 我想最大的问题是，**Jia Tan** 是谁？

<details>
<summary>Original English</summary>

**Henry**: I guess the big question is, who is Jia Tan?

</details>

**未知发言人**: 这就是问题，不是吗？好的，我的感觉是，**Jia Tan**，我交谈过的那个人，我相信是一个人，但我也相信他背后一定有一个团队。而且他们工作了相当长的时间。我的意思是，据我们所知，他们为此付出了大约两年半的时间。

<details>
<summary>Original English</summary>

**未知发言人**: That's the question, isn't it? Okay, so my feeling is that Jia Tan, the person that I talked to I believe is one person, but I also believe that behind him must be a group of people. And they worked for quite a while. I mean, they were at this for perhaps two and a half years that we know about.

</details>

**未知发言人**: 如果你回顾那些向 **Lasse** 施压的账户，它们有一些相似之处。它们使用免费电子邮件地址，并且在 **XZ** 线程之外几乎没有足迹。这些很可能是 **傀儡账户**，是为了在多阶段 **社会工程** 活动中施加压力而制造的身份。

<details>
<summary>Original English</summary>

**未知发言人**: If you look back at the accounts pressuring Lasse, they share some similarities. They use free email addresses and they have almost no footprint outside of the XZ threads. These were very likely sock puppet accounts, identities manufactured to apply pressure as part of a multi-stage social engineering campaign.

</details>

**未知发言人**: 现在，谁会花费一百万美元，花费两年半的时间，试图用一把万能钥匙闯入互联网上的每个酒店房间？

<details>
<summary>Original English</summary>

**未知发言人**: Now, who spends a million dollars and takes two and a half years to attempt to break into every hotel room on the internet with a master key?

</details>

**未知发言人**: 我认为这不是一个犯罪组织，因为我不认为一个犯罪组织会有那样的耐心，花费那么长时间而没有任何实际回报。所以我认为这必须是一个 **民族国家行为者**。

<details>
<summary>Original English</summary>

**未知发言人**: I think it's not a criminal organization because I don't think a criminal organization would have that patience to spend that time without any real return. So I think it has to be a nation state actor here.

</details>

**未知发言人**: 很多别名，比如 **Jia Tan**，听起来像是亚洲名字，而且发布的更改都带有 **UTC+8**（北京时间）的时间戳。所以迹象指向中国。这就是为什么它可能不是中国。我的意思是，他们为什么要把它做得那么明显？操作的其他部分都如此细致，如此谨慎。而且他们还在中国新年工作，但圣诞节不工作。多年来，有九次更改落在北京时间之外，进入 **UTC+2**，这个时区包括以色列和俄罗斯西部部分地区。这就是为什么一些专家推测这可能是 **APT29** 的工作，一个由俄罗斯国家支持的黑客组织，也称为 **Cozy Bear**。

<details>
<summary>Original English</summary>

**未知发言人**: A lot of the aliases, like Jia Tan, they sound like Asian names, and the published changes are all timestamped in UTC+8, Beijing time. So the signs point to China. And that's why it's probably not China. I mean, why would they make it that obvious? Every other part of the operation has been so meticulous, so cautious. And they also worked on Chinese New Year, but not on Christmas. And over the years, there were nine changes that fall outside of the Beijing time into UTC+2, which is a time zone that includes Israel and parts of Western Russia. That's why some experts have speculated that this could be the work of APT29, a Russian-state-backed hacker group also known as Cozy Bear.

</details>

**未知发言人**: 但我们知道吗？不，我们当然不知道是谁，而且我们可能永远不会知道。**Jia Tan** 本人一经公开此漏洞就消失了，再也没有音讯。

<details>
<summary>Original English</summary>

**未知发言人**: But again, do we know? No, of course we don't know who it is, and we likely will never know. Jia Tan himself just disappeared as soon as this exploit became publicly known and never heard from again.

</details>

**未知发言人**: 从某种意义上说，这是否是俄罗斯、中国或伊朗并不重要。我们必须防范这些类型的后门，无论它们来自何方。

<details>
<summary>Original English</summary>

**未知发言人**: In a sense it doesn't matter whether this was Russian or Chinese or Iranian. We need to protect from these types of backdoors no matter where they're coming from.

</details>

**未知发言人**: 我认为这就像，你知道，煤矿里的金丝雀，预示着随着攻击者变得越来越复杂，他们犯的错误越来越少，将会发生什么。你知道，某种程度上来说，手套已经摘掉了。我认为 **Linux** 社区还没有完全准备好应对这一切。

<details>
<summary>Original English</summary>

**未知发言人**: I see this as like, you know, the canary in the coal mine of what's gonna be happening as attackers get more sophisticated, they make fewer mistakes. You know, the gloves are off in a way. I don't think that the Linux community is fully, you know, is fully ready for this yet.

</details>

**未知发言人**: 在 **XZ** 事件之后，开源社区仔细审查了无数类似的小项目，寻找类似的攻击活动，但几乎一无所获。

<details>
<summary>Original English</summary>

**未知发言人**: In the aftermath of XZ, the open source community poured over countless small similar projects looking for similar campaigns, but they found almost nothing.

</details>

**未知发言人**: 我担心我们没有发现其他后门。动机太明显了。有国家资助的政府部门、军队甚至为国家工作的私人承包商，他们都在为下一次网络升级、某种战争、某种地缘政治冲突做准备，那些后门都在哪里？有太多人被激励去植入后门，而我们实际发现的后门却很少。

<details>
<summary>Original English</summary>

**未知发言人**: I'm worried that we didn't find other backdoors. The incentives are just too clear. There are state-sponsored parts of either governments, militaries or even private contractors working for states that are all preparing for the next cyber escalation, some kind of a war, some kind of a geopolitical conflict, and where are all of those backdoors? There's just too many people incentivized to put backdoors for the few backdoors that we're actually discovering.

</details>

**未知发言人**: 现在，一些专家认为这揭示了开源模式的一个根本缺陷，但并非所有人都同意。

<details>
<summary>Original English</summary>

**未知发言人**: Now, some experts have argued this reveals a fundamental flaw in the open source model, but not everyone agrees.

</details>

**未知发言人**: 闭源软件在这里也不会更好。事实上，谁能说那些大公司里没有国家间谍作为受薪软件工程师，植入这样的后门呢？但那样的话，就不会有社区成员进行免费测试并偶然发现这个问题了。这个后门，如果说有什么的话，它强调了开源的精髓。

<details>
<summary>Original English</summary>

**未知发言人**: Closed source software would be no better here. In fact, who's to say that there aren't already state spies working as paid software engineers at some of the larger companies putting in exactly backdoors like this? But then there would be no community member running free testing and detecting this by chance. This backdoor, if anything, underlines the ethos of open source.

</details>

**未知发言人**: 我的意思是，想想在公共领域完成这项工作需要付出什么。这是一场长达数年的 **社会工程** 活动，有所有这些层层的误导，然后是旨在经受持续审查的代码。现在将其与闭源攻击进行比较。有时，安装一个后门所需的只是法院命令，或者你有一家上市公司可以轻易地将漏洞掩盖起来。我本人曾在日本电信巨头 **NTT** 担任开源研究员，我的观点是，正是因为这是一个开源项目，它才被剖析、分析，并引发了关于安全的讨论。一个关注根本脆弱性的讨论。问题不在于代码，而在于人。以及系统对他们的支持不足。

<details>
<summary>Original English</summary>

**未知发言人**: I mean, just think of what it took to get this done in public. There was a multiple-year social engineering campaign, there were all these layers of misdirection, and then there was code that was designed to withstand constant scrutiny. Compare that now with a closed source hack. Sometimes all it takes to get a backdoor installed there is a court order, or you have a public company that can just brush a breach under the rug. I actually used to work as an open source researcher myself at the Japanese telecom giant NTT, and my perspective is that it's only because this is an open source project that it's been picked apart, analyzed, and turned into a conversation about security at all. One that focuses on the fundamental vulnerability. It's not the code, it's the people. And how the system has not supported them enough.

</details>

**未知发言人**: 我为 **Lasse** 感到难过，他把这份美丽的礼物给了全世界，然而，你知道，我们，人类对他做了什么呢？我们玷污了他的礼物。然后我想，有点含蓄地，不是每个人都这么说，但我们含蓄地责怪他没有永远免费维护这些东西。但当 **Lasse** 没有得到报酬时，我们为什么要要求他做任何事情呢？在我看来，这很不公平。这个周六晚上，我们正在一起为 **RHEL 9** 中他添加到 **XZ** 的这个 bug 寻找一个解决方案，他完全可以叫我们滚蛋，但他没有。多么了不起的家伙。

<details>
<summary>Original English</summary>

**未知发言人**: I feel for Lasse that he's given this beautiful gift to the whole world and, you know, what have we, what has humanity done back to him, right? We've poisoned his gift. And then I think implicitly a little bit, not everyone's saying this, but implicitly we're blaming him for not being there to maintain this stuff for free forever. But why are we demanding that Lasse do anything when he's not being paid for this stuff? And that's, in my opinion, quite unfair. On this Saturday evening, we were working together on a workaround for this bug in RHEL 9 that he's added to XZ, and he absolutely could have told us to get lost, and didn't. What a brilliant guy.

</details>